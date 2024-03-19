import { AxiosInstance } from 'axios';
export default abstract class Request {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
    protected get<T>(path: string): Promise<T>;
    protected patch<Entity, Request>(path: string, request: Request): Promise<Entity>;
    protected post<Entity, Request>(path: string, request: Request): Promise<Entity>;
}
