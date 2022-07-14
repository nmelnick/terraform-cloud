/// <reference types="node" />
import { EventEmitter } from 'events'
import Account from './endpoints/Account'
import Plans from './endpoints/Plans'
import Applies from './endpoints/Applies'
import Runs from './endpoints/Runs'
import Workspaces from './endpoints/Workspaces'
import ConfigurationVersion from './endpoints/ConfigurationVersion'
import StateVersions from './endpoints/StateVersions'
import RemoteStateConsumer from './endpoints/RemoteStateConsumer'
import { AxiosInstance } from 'axios'
export declare class TerraformCloud extends EventEmitter {
  Account: Account
  Plans: Plans
  Runs: Runs
  Applies: Applies
  Workspaces: Workspaces
  ConfigurationVersion: ConfigurationVersion
  StateVersions: StateVersions
  RemoteStateConsumer: RemoteStateConsumer
  client: AxiosInstance
  constructor(apiKey: string, tfeHostname?: string)
}
