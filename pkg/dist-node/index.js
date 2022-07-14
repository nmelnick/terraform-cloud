'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var events = require('events');
var axios = _interopDefault(require('axios'));
var camelcaseKeys = _interopDefault(require('camelcase-keys'));

const VERSION = '0.0.0-development';

const terraformCloudApiClient = (apiKey, tfeHostname) => {
  const apiUrl = `https://${tfeHostname}/api/v2`;
  const client = axios.create({
    baseURL: apiUrl
  });
  client.interceptors.request.use(req => {
    req.headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
      'Content-Type': 'application/vnd.api+json',
      'User-Agent': `terraform-cloud/${VERSION}`
    };
    return req;
  });
  client.interceptors.response.use(res => camelcaseKeys(res.data, {
    deep: true
  }));
  return client;
};

class Request {
  constructor(client) {
    this.client = client;
  }

  async get(path) {
    const response = await this.client.get(path);
    return response.data;
  }

  async patch(path, request) {
    const response = await this.client.patch(path, request);
    return response.data;
  }

  async post(path, request) {
    const response = await this.client.post(path, request);
    return response.data;
  }

}

class Account extends Request {
  constructor(client) {
    super(client);
  }

  async getDetails() {
    const path = '/account/details';
    return await this.get(path);
  }

  async getUser(userId) {
    const path = `/users/${userId}`;
    return await this.get(path);
  }

  async update(request) {
    const path = '/account/update';
    return await this.patch(path, request);
  }

  async changePassword(request) {
    const path = '/account/password';
    return await this.patch(path, request);
  }

}

class Plans extends Request {
  constructor(client) {
    super(client);
  }

  async show(planId) {
    const path = `/plans/${planId}`;
    return await this.get(path);
  }

  async jsonOutput(planId) {
    const path = `/plans/${planId}/json-output`;
    return await this.client.get(path);
  }

}

class Applies extends Request {
  constructor(client) {
    super(client);
  }

  async show(applyId) {
    const path = `/applies/${applyId}`;
    return await this.get(path);
  }

  async logs(applyId) {
    const apply = await this.show(applyId);
    return await this.client.get(apply.attributes.logReadUrl);
  }

}

class Runs extends Request {
  constructor(client) {
    super(client);
  }

  async list(workspaceId, number = 1, size = 20) {
    const path = `/workspaces/${workspaceId}/runs?page[${number}]&page[${size}]`;
    return await this.get(path);
  }

  async show(runId) {
    const path = `/runs/${runId}`;
    return await this.get(path);
  }

  async create(request) {
    const path = '/runs';
    return await this.post(path, request);
  }

  async action(action, runId, request) {
    const path = `/runs/${runId}/actions/${action}`;
    return await this.client.post(path, request || {});
  }

}

class Workspaces extends Request {
  constructor(client) {
    super(client);
  }

  showByName(organizationName, workspaceName) {
    const path = `/organizations/${organizationName}/workspaces/${workspaceName}`;
    return this.get(path);
  }

  showAll(organizationName) {
    const path = `/organizations/${organizationName}/workspaces`;
    return this.get(path);
  }

  show(workspaceId) {
    const path = `/workspaces/${workspaceId}`;
    return this.get(path);
  }

  create(organizationName, request) {
    const path = `/organizations/${organizationName}/workspaces`;
    return this.post(path, request);
  }

  update(organizationName, workspaceId, request) {
    const path = `/organizations/${organizationName}/workspaces/${workspaceId}`;
    return this.patch(path, request);
  }

  delete(workspaceId) {
    const path = `/workspaces/${workspaceId}`;
    return this.client.delete(path);
  }

  deleteByName(organizationName, workspaceName) {
    const path = `/organizations/${organizationName}/workspaces/${workspaceName}`;
    return this.client.delete(path);
  }

}

class ConfigurationVersions extends Request {
  constructor(client) {
    super(client);
  }

  create(workspaceId, request) {
    const path = `/workspaces/${workspaceId}/configuration-versions`;
    return this.post(path, request || {
      data: {
        attributes: {},
        type: 'configuration-version'
      }
    });
  }

  async show(configurationId) {
    const path = `/configuration-versions/${configurationId}`;
    return this.get(path);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types


  async upload(url, data) {
    return await axios.put(url, data);
  }

}

class StateVersions extends Request {
  constructor(client) {
    super(client);
  }

  create(workspaceId, request) {
    const path = `/workspaces/${workspaceId}/state-versions`;
    return this.post(path, request);
  }

  show(stateVersionId, includeOutputs = false) {
    const path = `/state-versions/${stateVersionId}${includeOutputs ? '?include=outputs' : ''}`;
    return this.get(path);
  }

  current(workspaceId, includeOutputs = false) {
    const path = `/workspaces/${workspaceId}/current-state-version`;
    const params = {};
    if (includeOutputs) params.include = 'outputs';
    return this.client.get(path, {
      params
    });
  }

}

class RemoteStateConsumer extends Request {
  constructor(client) {
    super(client);
  }

  list(workspaceId) {
    const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`;
    return this.get(path);
  }

  add(workspaceId, workspaceIdToAdd) {
    const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`;
    return this.post(path, {
      data: [{
        id: workspaceIdToAdd,
        type: 'workspaces'
      }]
    });
  }

  remove(workspaceId, workspaceIdToRemove) {
    const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`;
    return this.post(path, {
      data: [{
        id: workspaceIdToRemove,
        type: 'workspaces'
      }]
    });
  }

}

class TerraformCloud extends events.EventEmitter {
  constructor(apiKey, tfeHostname = 'app.terraform.io') {
    super();
    this.client = terraformCloudApiClient(apiKey, tfeHostname);
    this.Account = new Account(this.client);
    this.Plans = new Plans(this.client);
    this.Runs = new Runs(this.client);
    this.Applies = new Applies(this.client);
    this.Workspaces = new Workspaces(this.client);
    this.ConfigurationVersion = new ConfigurationVersions(this.client);
    this.StateVersions = new StateVersions(this.client);
    this.RemoteStateConsumer = new RemoteStateConsumer(this.client);
  }

}

exports.TerraformCloud = TerraformCloud;
//# sourceMappingURL=index.js.map
