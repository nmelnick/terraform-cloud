import { TerraformCloudData, Relationship } from './TerraformCloudData'
export declare type Run = TerraformCloudData<RunAttributes> & {
  relationships: RunRelationship
}
export declare type RunAction = 'apply' | 'discard' | 'cancel' | 'force-cancel' | 'force-execute'
export declare type RunActionRequest = {
  comment?: string
}
export declare type RunRequest = {
  data: {
    attributes: {
      isDestroy?: boolean
      refreshOnly?: boolean
      message?: string
      targetAddrs?: string[]
    }
    relationships: {
      workspace: {
        data: {
          id: string
          type: 'workspaces'
        }
      }
      configurationVersion: {
        data: {
          id: string
          type: 'configuration-versions'
        }
      }
    }
  }
}
export interface RunRelationship {
  confirmedBy: Relationship
  createdBy: Relationship
  plan: Relationship
  apply: Relationship
}
export interface RunAttributes {
  autoApply: boolean
  createdAt: Date
  errorText: null | string
  hasChanges: boolean
  isDestroy: boolean
  refreshOnly: boolean
  message: string
  source: string
  status:
    | 'pending'
    | 'plan_queued'
    | 'planning'
    | 'planned'
    | 'cost_estimating'
    | 'cost_estimated'
    | 'policy_checking'
    | 'policy_override'
    | 'policy_soft_failed'
    | 'policy_checked'
    | 'confirmed'
    | 'planned_and_finished'
    | 'apply_queued'
    | 'applying'
    | 'applied'
    | 'discarded'
    | 'errored'
    | 'canceled'
    | 'force_canceled'
  terraformVersion: string
}
