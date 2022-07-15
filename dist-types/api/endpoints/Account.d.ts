import { AxiosInstance } from 'axios'
import { User, UserUpdatePassword, UserUpdateInfo } from '../..'
import Request from './Request'
export default class Account extends Request {
  constructor(client: AxiosInstance)
  getDetails(): Promise<User>
  getUser(userId: string): Promise<User>
  update(request: UserUpdateInfo): Promise<User>
  changePassword(request: UserUpdatePassword): Promise<User>
}
