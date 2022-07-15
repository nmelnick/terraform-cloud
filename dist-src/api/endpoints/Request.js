export default class Request {
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
