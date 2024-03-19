import Request from './Request';
export default class RemoteStateConsumer extends Request {
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
            data: [{ id: workspaceIdToAdd, type: 'workspaces' }],
        });
    }
    remove(workspaceId, workspaceIdToRemove) {
        const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`;
        return this.post(path, {
            data: [{ id: workspaceIdToRemove, type: 'workspaces' }],
        });
    }
}
