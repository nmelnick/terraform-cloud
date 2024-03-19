import Request from './Request';
export default class Account extends Request {
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
