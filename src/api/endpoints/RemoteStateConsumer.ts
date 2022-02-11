import { AxiosInstance } from 'axios'
import Request from './Request'
import { Workspace, RemoteStateConsumerRequest } from '../../types'

export default class RemoteStateConsumer extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  list(workspaceId: string): Promise<Workspace[]> {
    const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`
    return this.get<Workspace[]>(path)
  }

  add(workspaceId: string, workspaceIdToAdd: string): Promise<unknown> {
    const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`
    return this.post<unknown, RemoteStateConsumerRequest>(path, {
      data: [{ id: workspaceIdToAdd, type: 'workspaces' }],
    })
  }

  remove(workspaceId: string, workspaceIdToRemove: string): Promise<unknown> {
    const path = `/workspaces/${workspaceId}/relationships/remote_state_consumers`
    return this.post<Workspace, RemoteStateConsumerRequest>(path, {
      data: [{ id: workspaceIdToRemove, type: 'workspaces' }],
    })
  }
}
