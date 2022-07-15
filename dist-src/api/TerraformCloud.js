import { EventEmitter } from 'events';
import terraformCloudApiClient from './terraformCloudApiClient';
import Account from './endpoints/Account';
import Plans from './endpoints/Plans';
import Applies from './endpoints/Applies';
import Runs from './endpoints/Runs';
import Workspaces from './endpoints/Workspaces';
import ConfigurationVersion from './endpoints/ConfigurationVersion';
import StateVersions from './endpoints/StateVersions';
import RemoteStateConsumer from './endpoints/RemoteStateConsumer';
export class TerraformCloud extends EventEmitter {
    constructor(apiKey, tfeHostname = 'app.terraform.io') {
        super();
        this.client = terraformCloudApiClient(apiKey, tfeHostname);
        this.Account = new Account(this.client);
        this.Plans = new Plans(this.client);
        this.Runs = new Runs(this.client);
        this.Applies = new Applies(this.client);
        this.Workspaces = new Workspaces(this.client);
        this.ConfigurationVersion = new ConfigurationVersion(this.client);
        this.StateVersions = new StateVersions(this.client);
        this.RemoteStateConsumer = new RemoteStateConsumer(this.client);
    }
}
