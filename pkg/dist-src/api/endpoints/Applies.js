import Request from './Request';
export default class Applies extends Request {
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
