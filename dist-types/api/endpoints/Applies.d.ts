import { AxiosInstance } from 'axios'
import { Apply, ApplyLogs } from '../..'
import Request from './Request'
export default class Applies extends Request {
  constructor(client: AxiosInstance)
  show(applyId: string): Promise<Apply>
  logs(applyId: string): Promise<ApplyLogs>
}
