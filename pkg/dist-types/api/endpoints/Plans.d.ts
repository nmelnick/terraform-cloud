import { AxiosInstance } from 'axios'
import { Plan } from '../..'
import Request from './Request'
export default class Plans extends Request {
  constructor(client: AxiosInstance)
  show(planId: string): Promise<Plan>
  jsonOutput(planId: string): Promise<string>
}
