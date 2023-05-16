# AsanaPreview.TeamResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | [Opt In](/docs/inputoutput-options). The description of the team.  | [optional] 
**htmlDescription** | **String** | [Opt In](/docs/inputoutput-options). The description of the team with formatting as HTML.  | [optional] 
**organization** | [**WorkspaceCompact**](WorkspaceCompact.md) |  | [optional] 
**permalinkUrl** | **String** | A url that points directly to the object within Asana. | [optional] [readonly] 
**visibility** | **String** | The visibility of the team to users in the same organization  | [optional] 
**editTeamNameOrDescriptionAccessLevel** | **String** | Controls who can edit team name and description  | [optional] 
**editTeamVisibilityOrTrashTeamAccessLevel** | **String** | Controls who can edit team visibility and trash teams  | [optional] 
**memberInviteManagementAccessLevel** | **String** | Controls who can accept or deny member invites for a given team  | [optional] 
**guestInviteManagementAccessLevel** | **String** | Controls who can accept or deny guest invites for a given team  | [optional] 
**joinRequestManagementAccessLevel** | **String** | Controls who can accept or deny join team requests for a Membership by Request team  | [optional] 
**teamMemberRemovalAccessLevel** | **String** | Controls who can remove team members  | [optional] 



## Enum: VisibilityEnum


* `secret` (value: `"secret"`)

* `request_to_join` (value: `"request_to_join"`)

* `public` (value: `"public"`)





## Enum: EditTeamNameOrDescriptionAccessLevelEnum


* `all_team_members` (value: `"all_team_members"`)

* `only_team_admins` (value: `"only_team_admins"`)





## Enum: EditTeamVisibilityOrTrashTeamAccessLevelEnum


* `all_team_members` (value: `"all_team_members"`)

* `only_team_admins` (value: `"only_team_admins"`)





## Enum: MemberInviteManagementAccessLevelEnum


* `all_team_members` (value: `"all_team_members"`)

* `only_team_admins` (value: `"only_team_admins"`)





## Enum: GuestInviteManagementAccessLevelEnum


* `all_team_members` (value: `"all_team_members"`)

* `only_team_admins` (value: `"only_team_admins"`)





## Enum: JoinRequestManagementAccessLevelEnum


* `all_team_members` (value: `"all_team_members"`)

* `only_team_admins` (value: `"only_team_admins"`)





## Enum: TeamMemberRemovalAccessLevelEnum


* `all_team_members` (value: `"all_team_members"`)

* `only_team_admins` (value: `"only_team_admins"`)




