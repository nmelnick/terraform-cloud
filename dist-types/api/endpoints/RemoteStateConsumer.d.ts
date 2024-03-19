import { AxiosInstance } from 'axios';
import Request from './Request';
import { Workspace } from '../../types';
export default class RemoteStateConsumer extends Request {
    constructor(client: AxiosInstance);
    list(workspaceId: string): Promise<Workspace[]>;
    add(workspaceId: string, workspaceIdToAdd: string): Promise<unknown>;
    remove(workspaceId: string, workspaceIdToRemove: string): Promise<unknown>;
}
