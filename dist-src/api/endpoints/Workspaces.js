import Request from './Request';
export default class Workspaces extends Request {
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
