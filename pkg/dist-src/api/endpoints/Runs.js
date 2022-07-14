import Request from './Request';
export default class Runs extends Request {
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
