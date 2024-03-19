import { Params, TerraformCloudData } from './TerraformCloudData';
export declare type ConfigurationVersionRequest = Params<'configuration-version', ConfigurationVersionRequestAttributes>;
export interface ConfigurationVersionRequestAttributes {
    autoQueueRuns?: boolean;
    speculative?: boolean;
}
export declare type ConfigurationVersion = TerraformCloudData<ConfigurationVersionAttributes>;
export interface ConfigurationVersionAttributes {
    autoQueueRuns: boolean;
    error?: string;
    errorMessage?: string;
    source: string;
    status: string;
    statusTimestamps: {
        [key: string]: unknown;
    };
    uploadUrl: string;
}
