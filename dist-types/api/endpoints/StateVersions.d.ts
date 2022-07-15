import Request from './Request'
import { StateVersion, StateVersionRequest } from '../../types'
import { AxiosInstance } from 'axios'
export default class StateVersions extends Request {
  constructor(client: AxiosInstance)
  create(workspaceId: string, request: StateVersionRequest): Promise<StateVersion>
  show(stateVersionId: string, includeOutputs?: boolean): Promise<StateVersion>
  current(workspaceId: string, includeOutputs?: boolean): Promise<StateVersion>
}
