import Request from './Request';
import { ConfigurationVersion, ConfigurationVersionRequest } from '../../types';
import { AxiosInstance } from 'axios';
export default class ConfigurationVersions extends Request {
    constructor(client: AxiosInstance);
    create(workspaceId: string, request?: ConfigurationVersionRequest): Promise<ConfigurationVersion>;
    show(configurationId: string): Promise<ConfigurationVersion>;
    upload(url: string, data: any): Promise<any>;
}
