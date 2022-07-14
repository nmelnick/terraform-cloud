import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import { VERSION } from '../version';
const terraformCloudApiClient = (apiKey, tfeHostname) => {
    const apiUrl = `https://${tfeHostname}/api/v2`;
    const client = axios.create({ baseURL: apiUrl });
    client.interceptors.request.use((req) => {
        req.headers = {
            Authorization: `Bearer ${apiKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/vnd.api+json',
            'User-Agent': `terraform-cloud/${VERSION}`,
        };
        return req;
    });
    client.interceptors.response.use((res) => camelcaseKeys(res.data, { deep: true }));
    return client;
};
export default terraformCloudApiClient;
