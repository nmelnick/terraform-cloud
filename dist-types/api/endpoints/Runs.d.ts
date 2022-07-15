import { AxiosInstance } from 'axios'
import { Run } from '../..'
import Request from './Request'
import { RunRequest, RunActionRequest, RunAction } from '../../types/Run'
export default class Runs extends Request {
  constructor(client: AxiosInstance)
  list(workspaceId: string, number?: number, size?: number): Promise<Run[]>
  show(runId: string): Promise<Run>
  create(request: RunRequest): Promise<Run>
  action(action: RunAction, runId: string, request?: RunActionRequest): Promise<void>
}
