import nock from 'nock'
import { TerraformCloud } from '../../src'
import { WorkspaceRequest } from '../../src/types'
import { WorkspaceMock, WorkspaceNoVcsRequest } from '../mocks'

const organizationName = 'organization-name'
const tfeInstance = 'tfe.my-company.com'

describe('Runs against different TFE instance', () => {
  it('create a workspace without VCS without consulting app.terraform.io', async done => {
    const { Workspaces } = new TerraformCloud('api-key', tfeInstance)
    const tfcScope = nock('https://app.terraform.io/api/v2')
      .post(`/organizations/${organizationName}/workspaces`, WorkspaceNoVcsRequest)
      .reply(201, WorkspaceMock)
    const tfeScope = nock(`https://${tfeInstance}/api/v2`)
      .post(`/organizations/${organizationName}/workspaces`, WorkspaceNoVcsRequest)
      .reply(201, WorkspaceMock)
    const workspace = await Workspaces.create(organizationName, WorkspaceNoVcsRequest as WorkspaceRequest)

    expect(workspace.type).toBe('workspaces')
    tfeScope.done()
    expect(tfcScope.isDone()).toBe(false)
    done()
  })
})
