type RemoteStateConsumerRelationship = {
  id: string
  type: 'workspaces'
}
export type RemoteStateConsumerRequest = { data: RemoteStateConsumerRelationship[] }
