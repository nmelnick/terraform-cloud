import { AxiosInstance } from 'axios';
import Request from './Request';
import { Workspace, WorkspaceRequest } from '../../types';
export default class Workspaces extends Request {
    constructor(client: AxiosInstance);
    showByName(organizationName: string, workspaceName: string): Promise<Workspace>;
    showAll(organizationName: string): Promise<Workspace[]>;
    show(workspaceId: string): Promise<Workspace>;
    create(organizationName: string, request: WorkspaceRequest): Promise<Workspace>;
    update(organizationName: string, workspaceId: string, request: WorkspaceRequest): Promise<Workspace>;
    delete(workspaceId: string): Promise<void>;
    deleteByName(organizationName: string, workspaceName: string): Promise<void>;
}
