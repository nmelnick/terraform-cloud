import Request from './Request';
export default class Plans extends Request {
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
