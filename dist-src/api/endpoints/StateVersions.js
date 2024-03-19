import Request from './Request';
export default class StateVersions extends Request {
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
        if (includeOutputs)
            params.include = 'outputs';
        return this.client.get(path, { params });
    }
}
