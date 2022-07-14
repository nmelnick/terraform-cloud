import Request from './Request';
import axios from 'axios';
export default class ConfigurationVersions extends Request {
    constructor(client) {
        super(client);
    }
    create(workspaceId, request) {
        const path = `/workspaces/${workspaceId}/configuration-versions`;
        return this.post(path, request || { data: { attributes: {}, type: 'configuration-version' } });
    }
    async show(configurationId) {
        const path = `/configuration-versions/${configurationId}`;
        return this.get(path);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    async upload(url, data) {
        return await axios.put(url, data);
    }
}
