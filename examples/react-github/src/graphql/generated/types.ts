import * as extensions from '../extensions'
import {
  TypeData,
  ScalarType,
  FieldsType,
  FieldsTypeArg,
  EnumType,
} from 'gqless'

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<'String'>>

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<'Query'>

    /**
     * Look up a code of conduct by its key
     */
    codeOfConduct: FieldsTypeArg<{ key: string }, t_CodeOfConduct | null>

    /**
     * Look up a code of conduct by its key
     */
    codesOfConduct: (t_CodeOfConduct | null)[] | null

    /**
     * Look up an enterprise by URL slug.
     */
    enterprise: FieldsTypeArg<
      { slug: string; invitationToken?: string | null },
      t_Enterprise | null
    >

    /**
     * Look up a pending enterprise administrator invitation by invitee, enterprise and role.
     */
    enterpriseAdministratorInvitation: FieldsTypeArg<
      {
        userLogin: string
        enterpriseSlug: string
        role: EnterpriseAdministratorRole
      },
      t_EnterpriseAdministratorInvitation | null
    >

    /**
     * Look up a pending enterprise administrator invitation by invitation token.
     */
    enterpriseAdministratorInvitationByToken: FieldsTypeArg<
      { invitationToken: string },
      t_EnterpriseAdministratorInvitation | null
    >

    /**
     * Look up an open source license by its key
     */
    license: FieldsTypeArg<{ key: string }, t_License | null>

    /**
     * Return a list of known open source licenses
     */
    licenses: (t_License | null)[]

    /**
     * Get alphabetically sorted list of Marketplace categories
     */
    marketplaceCategories: FieldsTypeArg<
      {
        includeCategories?: (string)[] | null
        excludeEmpty?: boolean | null
        excludeSubcategories?: boolean | null
      },
      (t_MarketplaceCategory)[]
    >

    /**
     * Look up a Marketplace category by its slug.
     */
    marketplaceCategory: FieldsTypeArg<
      { slug: string; useTopicAliases?: boolean | null },
      t_MarketplaceCategory | null
    >

    /**
     * Look up a single Marketplace listing
     */
    marketplaceListing: FieldsTypeArg<
      { slug: string },
      t_MarketplaceListing | null
    >

    /**
     * Look up Marketplace listings
     */
    marketplaceListings: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        categorySlug?: string | null
        useTopicAliases?: boolean | null
        viewerCanAdmin?: boolean | null
        adminId?: string | null
        organizationId?: string | null
        allStates?: boolean | null
        slugs?: (string | null)[] | null
        primaryCategoryOnly?: boolean | null
        withFreeTrialsOnly?: boolean | null
      },
      t_MarketplaceListingConnection
    >

    /**
     * Return information about the GitHub instance
     */
    meta: t_GitHubMetadata

    /**
     * Fetches an object given its ID.
     */
    node: FieldsTypeArg<
      { id: string },
      | t_AddedToProjectEvent
      | t_App
      | t_AssignedEvent
      | t_BaseRefChangedEvent
      | t_BaseRefForcePushedEvent
      | t_Blob
      | t_Bot
      | t_BranchProtectionRule
      | t_ClosedEvent
      | t_CodeOfConduct
      | t_CommentDeletedEvent
      | t_Commit
      | t_CommitComment
      | t_CommitCommentThread
      | t_ConvertedNoteToIssueEvent
      | t_CrossReferencedEvent
      | t_DemilestonedEvent
      | t_DeployKey
      | t_DeployedEvent
      | t_Deployment
      | t_DeploymentEnvironmentChangedEvent
      | t_DeploymentStatus
      | t_Enterprise
      | t_EnterpriseAdministratorInvitation
      | t_EnterpriseIdentityProvider
      | t_EnterpriseRepositoryInfo
      | t_EnterpriseServerInstallation
      | t_EnterpriseServerUserAccount
      | t_EnterpriseServerUserAccountEmail
      | t_EnterpriseServerUserAccountsUpload
      | t_EnterpriseUserAccount
      | t_ExternalIdentity
      | t_Gist
      | t_GistComment
      | t_HeadRefDeletedEvent
      | t_HeadRefForcePushedEvent
      | t_HeadRefRestoredEvent
      | t_Issue
      | t_IssueComment
      | t_Label
      | t_LabeledEvent
      | t_Language
      | t_License
      | t_LockedEvent
      | t_Mannequin
      | t_MarkedAsDuplicateEvent
      | t_MarketplaceCategory
      | t_MarketplaceListing
      | t_MembersCanDeleteReposClearAuditEntry
      | t_MembersCanDeleteReposDisableAuditEntry
      | t_MembersCanDeleteReposEnableAuditEntry
      | t_MentionedEvent
      | t_MergedEvent
      | t_Milestone
      | t_MilestonedEvent
      | t_MovedColumnsInProjectEvent
      | t_OauthApplicationCreateAuditEntry
      | t_OrgAddBillingManagerAuditEntry
      | t_OrgAddMemberAuditEntry
      | t_OrgBlockUserAuditEntry
      | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
      | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
      | t_OrgCreateAuditEntry
      | t_OrgDisableOauthAppRestrictionsAuditEntry
      | t_OrgDisableSamlAuditEntry
      | t_OrgDisableTwoFactorRequirementAuditEntry
      | t_OrgEnableOauthAppRestrictionsAuditEntry
      | t_OrgEnableSamlAuditEntry
      | t_OrgEnableTwoFactorRequirementAuditEntry
      | t_OrgInviteMemberAuditEntry
      | t_OrgInviteToBusinessAuditEntry
      | t_OrgOauthAppAccessApprovedAuditEntry
      | t_OrgOauthAppAccessDeniedAuditEntry
      | t_OrgOauthAppAccessRequestedAuditEntry
      | t_OrgRemoveBillingManagerAuditEntry
      | t_OrgRemoveMemberAuditEntry
      | t_OrgRemoveOutsideCollaboratorAuditEntry
      | t_OrgRestoreMemberAuditEntry
      | t_OrgUnblockUserAuditEntry
      | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
      | t_OrgUpdateMemberAuditEntry
      | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
      | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
      | t_Organization
      | t_OrganizationIdentityProvider
      | t_OrganizationInvitation
      | t_PinnedEvent
      | t_PrivateRepositoryForkingDisableAuditEntry
      | t_PrivateRepositoryForkingEnableAuditEntry
      | t_Project
      | t_ProjectCard
      | t_ProjectColumn
      | t_PublicKey
      | t_PullRequest
      | t_PullRequestCommit
      | t_PullRequestCommitCommentThread
      | t_PullRequestReview
      | t_PullRequestReviewComment
      | t_PullRequestReviewThread
      | t_PushAllowance
      | t_Reaction
      | t_ReadyForReviewEvent
      | t_Ref
      | t_ReferencedEvent
      | t_RegistryPackage
      | t_RegistryPackageDependency
      | t_RegistryPackageFile
      | t_RegistryPackageTag
      | t_RegistryPackageVersion
      | t_Release
      | t_ReleaseAsset
      | t_RemovedFromProjectEvent
      | t_RenamedTitleEvent
      | t_ReopenedEvent
      | t_RepoAccessAuditEntry
      | t_RepoAddMemberAuditEntry
      | t_RepoAddTopicAuditEntry
      | t_RepoArchivedAuditEntry
      | t_RepoChangeMergeSettingAuditEntry
      | t_RepoConfigDisableAnonymousGitAccessAuditEntry
      | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
      | t_RepoConfigDisableContributorsOnlyAuditEntry
      | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
      | t_RepoConfigEnableAnonymousGitAccessAuditEntry
      | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
      | t_RepoConfigEnableContributorsOnlyAuditEntry
      | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
      | t_RepoConfigLockAnonymousGitAccessAuditEntry
      | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
      | t_RepoCreateAuditEntry
      | t_RepoDestroyAuditEntry
      | t_RepoRemoveMemberAuditEntry
      | t_RepoRemoveTopicAuditEntry
      | t_Repository
      | t_RepositoryInvitation
      | t_RepositoryTopic
      | t_RepositoryVisibilityChangeDisableAuditEntry
      | t_RepositoryVisibilityChangeEnableAuditEntry
      | t_RepositoryVulnerabilityAlert
      | t_ReviewDismissalAllowance
      | t_ReviewDismissedEvent
      | t_ReviewRequest
      | t_ReviewRequestRemovedEvent
      | t_ReviewRequestedEvent
      | t_SavedReply
      | t_SecurityAdvisory
      | t_SponsorsListing
      | t_SponsorsTier
      | t_Sponsorship
      | t_Status
      | t_StatusContext
      | t_SubscribedEvent
      | t_Tag
      | t_Team
      | t_TeamAddMemberAuditEntry
      | t_TeamAddRepositoryAuditEntry
      | t_TeamChangeParentTeamAuditEntry
      | t_TeamDiscussion
      | t_TeamDiscussionComment
      | t_TeamRemoveMemberAuditEntry
      | t_TeamRemoveRepositoryAuditEntry
      | t_Topic
      | t_TransferredEvent
      | t_Tree
      | t_UnassignedEvent
      | t_UnlabeledEvent
      | t_UnlockedEvent
      | t_UnpinnedEvent
      | t_UnsubscribedEvent
      | t_User
      | t_UserBlockedEvent
      | t_UserContentEdit
      | t_UserStatus
      | null
    >

    /**
     * Lookup nodes by a list of IDs.
     */
    nodes: FieldsTypeArg<
      { ids: (string)[] },
      (
        | t_AddedToProjectEvent
        | t_App
        | t_AssignedEvent
        | t_BaseRefChangedEvent
        | t_BaseRefForcePushedEvent
        | t_Blob
        | t_Bot
        | t_BranchProtectionRule
        | t_ClosedEvent
        | t_CodeOfConduct
        | t_CommentDeletedEvent
        | t_Commit
        | t_CommitComment
        | t_CommitCommentThread
        | t_ConvertedNoteToIssueEvent
        | t_CrossReferencedEvent
        | t_DemilestonedEvent
        | t_DeployKey
        | t_DeployedEvent
        | t_Deployment
        | t_DeploymentEnvironmentChangedEvent
        | t_DeploymentStatus
        | t_Enterprise
        | t_EnterpriseAdministratorInvitation
        | t_EnterpriseIdentityProvider
        | t_EnterpriseRepositoryInfo
        | t_EnterpriseServerInstallation
        | t_EnterpriseServerUserAccount
        | t_EnterpriseServerUserAccountEmail
        | t_EnterpriseServerUserAccountsUpload
        | t_EnterpriseUserAccount
        | t_ExternalIdentity
        | t_Gist
        | t_GistComment
        | t_HeadRefDeletedEvent
        | t_HeadRefForcePushedEvent
        | t_HeadRefRestoredEvent
        | t_Issue
        | t_IssueComment
        | t_Label
        | t_LabeledEvent
        | t_Language
        | t_License
        | t_LockedEvent
        | t_Mannequin
        | t_MarkedAsDuplicateEvent
        | t_MarketplaceCategory
        | t_MarketplaceListing
        | t_MembersCanDeleteReposClearAuditEntry
        | t_MembersCanDeleteReposDisableAuditEntry
        | t_MembersCanDeleteReposEnableAuditEntry
        | t_MentionedEvent
        | t_MergedEvent
        | t_Milestone
        | t_MilestonedEvent
        | t_MovedColumnsInProjectEvent
        | t_OauthApplicationCreateAuditEntry
        | t_OrgAddBillingManagerAuditEntry
        | t_OrgAddMemberAuditEntry
        | t_OrgBlockUserAuditEntry
        | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
        | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
        | t_OrgCreateAuditEntry
        | t_OrgDisableOauthAppRestrictionsAuditEntry
        | t_OrgDisableSamlAuditEntry
        | t_OrgDisableTwoFactorRequirementAuditEntry
        | t_OrgEnableOauthAppRestrictionsAuditEntry
        | t_OrgEnableSamlAuditEntry
        | t_OrgEnableTwoFactorRequirementAuditEntry
        | t_OrgInviteMemberAuditEntry
        | t_OrgInviteToBusinessAuditEntry
        | t_OrgOauthAppAccessApprovedAuditEntry
        | t_OrgOauthAppAccessDeniedAuditEntry
        | t_OrgOauthAppAccessRequestedAuditEntry
        | t_OrgRemoveBillingManagerAuditEntry
        | t_OrgRemoveMemberAuditEntry
        | t_OrgRemoveOutsideCollaboratorAuditEntry
        | t_OrgRestoreMemberAuditEntry
        | t_OrgUnblockUserAuditEntry
        | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
        | t_OrgUpdateMemberAuditEntry
        | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
        | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
        | t_Organization
        | t_OrganizationIdentityProvider
        | t_OrganizationInvitation
        | t_PinnedEvent
        | t_PrivateRepositoryForkingDisableAuditEntry
        | t_PrivateRepositoryForkingEnableAuditEntry
        | t_Project
        | t_ProjectCard
        | t_ProjectColumn
        | t_PublicKey
        | t_PullRequest
        | t_PullRequestCommit
        | t_PullRequestCommitCommentThread
        | t_PullRequestReview
        | t_PullRequestReviewComment
        | t_PullRequestReviewThread
        | t_PushAllowance
        | t_Reaction
        | t_ReadyForReviewEvent
        | t_Ref
        | t_ReferencedEvent
        | t_RegistryPackage
        | t_RegistryPackageDependency
        | t_RegistryPackageFile
        | t_RegistryPackageTag
        | t_RegistryPackageVersion
        | t_Release
        | t_ReleaseAsset
        | t_RemovedFromProjectEvent
        | t_RenamedTitleEvent
        | t_ReopenedEvent
        | t_RepoAccessAuditEntry
        | t_RepoAddMemberAuditEntry
        | t_RepoAddTopicAuditEntry
        | t_RepoArchivedAuditEntry
        | t_RepoChangeMergeSettingAuditEntry
        | t_RepoConfigDisableAnonymousGitAccessAuditEntry
        | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
        | t_RepoConfigDisableContributorsOnlyAuditEntry
        | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
        | t_RepoConfigEnableAnonymousGitAccessAuditEntry
        | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
        | t_RepoConfigEnableContributorsOnlyAuditEntry
        | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
        | t_RepoConfigLockAnonymousGitAccessAuditEntry
        | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
        | t_RepoCreateAuditEntry
        | t_RepoDestroyAuditEntry
        | t_RepoRemoveMemberAuditEntry
        | t_RepoRemoveTopicAuditEntry
        | t_Repository
        | t_RepositoryInvitation
        | t_RepositoryTopic
        | t_RepositoryVisibilityChangeDisableAuditEntry
        | t_RepositoryVisibilityChangeEnableAuditEntry
        | t_RepositoryVulnerabilityAlert
        | t_ReviewDismissalAllowance
        | t_ReviewDismissedEvent
        | t_ReviewRequest
        | t_ReviewRequestRemovedEvent
        | t_ReviewRequestedEvent
        | t_SavedReply
        | t_SecurityAdvisory
        | t_SponsorsListing
        | t_SponsorsTier
        | t_Sponsorship
        | t_Status
        | t_StatusContext
        | t_SubscribedEvent
        | t_Tag
        | t_Team
        | t_TeamAddMemberAuditEntry
        | t_TeamAddRepositoryAuditEntry
        | t_TeamChangeParentTeamAuditEntry
        | t_TeamDiscussion
        | t_TeamDiscussionComment
        | t_TeamRemoveMemberAuditEntry
        | t_TeamRemoveRepositoryAuditEntry
        | t_Topic
        | t_TransferredEvent
        | t_Tree
        | t_UnassignedEvent
        | t_UnlabeledEvent
        | t_UnlockedEvent
        | t_UnpinnedEvent
        | t_UnsubscribedEvent
        | t_User
        | t_UserBlockedEvent
        | t_UserContentEdit
        | t_UserStatus
        | null)[]
    >

    /**
     * Lookup a organization by login.
     */
    organization: FieldsTypeArg<{ login: string }, t_Organization | null>

    /**
     * The client's rate limit information.
     */
    rateLimit: FieldsTypeArg<{ dryRun?: boolean | null }, t_RateLimit | null>

    /**
     * Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object
     */
    relay: t_Query

    /**
     * Lookup a given repository by the owner and repository name.
     */
    repository: FieldsTypeArg<
      { owner: string; name: string },
      t_Repository | null
    >

    /**
     * Lookup a repository owner (ie. either a User or an Organization) by login.
     */
    repositoryOwner: FieldsTypeArg<
      { login: string },
      t_Organization | t_User | null
    >

    /**
     * Lookup resource by a URL.
     */
    resource: FieldsTypeArg<
      { url: string },
      | t_Bot
      | t_ClosedEvent
      | t_Commit
      | t_CrossReferencedEvent
      | t_Gist
      | t_Issue
      | t_Mannequin
      | t_MergedEvent
      | t_Milestone
      | t_Organization
      | t_PullRequest
      | t_PullRequestCommit
      | t_ReadyForReviewEvent
      | t_Release
      | t_Repository
      | t_RepositoryTopic
      | t_ReviewDismissedEvent
      | t_TeamDiscussion
      | t_TeamDiscussionComment
      | t_User
      | null
    >

    /**
     * Perform a search across resources.
     */
    search: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query: string
        type: SearchType
      },
      t_SearchResultItemConnection
    >

    /**
     * GitHub Security Advisories
     */
    securityAdvisories: FieldsTypeArg<
      {
        orderBy?: SecurityAdvisoryOrder | null
        identifier?: SecurityAdvisoryIdentifierFilter | null
        publishedSince?: any | null
        updatedSince?: any | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_SecurityAdvisoryConnection
    >

    /**
     * Fetch a Security Advisory by its GHSA ID
     */
    securityAdvisory: FieldsTypeArg<
      { ghsaId: string },
      t_SecurityAdvisory | null
    >

    /**
     * Software Vulnerabilities documented by GitHub Security Advisories
     */
    securityVulnerabilities: FieldsTypeArg<
      {
        orderBy?: SecurityVulnerabilityOrder | null
        ecosystem?: SecurityAdvisoryEcosystem | null
        package?: string | null
        severities?: (SecurityAdvisorySeverity)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_SecurityVulnerabilityConnection
    >

    /**
     * @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC.
     * Look up a single Sponsors Listing
     */
    sponsorsListing: FieldsTypeArg<{ slug: string }, t_SponsorsListing | null>

    /**
     * Look up a topic by name.
     */
    topic: FieldsTypeArg<{ name: string }, t_Topic | null>

    /**
     * Lookup a user by login.
     */
    user: FieldsTypeArg<{ login: string }, t_User | null>

    /**
     * The currently authenticated user.
     */
    viewer: t_User
  },
  Extension<'Query'>
>

/**
 * @name Node
 * @type INTERFACE
 */
type t_Node =
  | t_AddedToProjectEvent
  | t_App
  | t_AssignedEvent
  | t_BaseRefChangedEvent
  | t_BaseRefForcePushedEvent
  | t_Blob
  | t_Bot
  | t_BranchProtectionRule
  | t_ClosedEvent
  | t_CodeOfConduct
  | t_CommentDeletedEvent
  | t_Commit
  | t_CommitComment
  | t_CommitCommentThread
  | t_ConvertedNoteToIssueEvent
  | t_CrossReferencedEvent
  | t_DemilestonedEvent
  | t_DeployKey
  | t_DeployedEvent
  | t_Deployment
  | t_DeploymentEnvironmentChangedEvent
  | t_DeploymentStatus
  | t_Enterprise
  | t_EnterpriseAdministratorInvitation
  | t_EnterpriseIdentityProvider
  | t_EnterpriseRepositoryInfo
  | t_EnterpriseServerInstallation
  | t_EnterpriseServerUserAccount
  | t_EnterpriseServerUserAccountEmail
  | t_EnterpriseServerUserAccountsUpload
  | t_EnterpriseUserAccount
  | t_ExternalIdentity
  | t_Gist
  | t_GistComment
  | t_HeadRefDeletedEvent
  | t_HeadRefForcePushedEvent
  | t_HeadRefRestoredEvent
  | t_Issue
  | t_IssueComment
  | t_Label
  | t_LabeledEvent
  | t_Language
  | t_License
  | t_LockedEvent
  | t_Mannequin
  | t_MarkedAsDuplicateEvent
  | t_MarketplaceCategory
  | t_MarketplaceListing
  | t_MembersCanDeleteReposClearAuditEntry
  | t_MembersCanDeleteReposDisableAuditEntry
  | t_MembersCanDeleteReposEnableAuditEntry
  | t_MentionedEvent
  | t_MergedEvent
  | t_Milestone
  | t_MilestonedEvent
  | t_MovedColumnsInProjectEvent
  | t_OauthApplicationCreateAuditEntry
  | t_OrgAddBillingManagerAuditEntry
  | t_OrgAddMemberAuditEntry
  | t_OrgBlockUserAuditEntry
  | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
  | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
  | t_OrgCreateAuditEntry
  | t_OrgDisableOauthAppRestrictionsAuditEntry
  | t_OrgDisableSamlAuditEntry
  | t_OrgDisableTwoFactorRequirementAuditEntry
  | t_OrgEnableOauthAppRestrictionsAuditEntry
  | t_OrgEnableSamlAuditEntry
  | t_OrgEnableTwoFactorRequirementAuditEntry
  | t_OrgInviteMemberAuditEntry
  | t_OrgInviteToBusinessAuditEntry
  | t_OrgOauthAppAccessApprovedAuditEntry
  | t_OrgOauthAppAccessDeniedAuditEntry
  | t_OrgOauthAppAccessRequestedAuditEntry
  | t_OrgRemoveBillingManagerAuditEntry
  | t_OrgRemoveMemberAuditEntry
  | t_OrgRemoveOutsideCollaboratorAuditEntry
  | t_OrgRestoreMemberAuditEntry
  | t_OrgUnblockUserAuditEntry
  | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
  | t_OrgUpdateMemberAuditEntry
  | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | t_Organization
  | t_OrganizationIdentityProvider
  | t_OrganizationInvitation
  | t_PinnedEvent
  | t_PrivateRepositoryForkingDisableAuditEntry
  | t_PrivateRepositoryForkingEnableAuditEntry
  | t_Project
  | t_ProjectCard
  | t_ProjectColumn
  | t_PublicKey
  | t_PullRequest
  | t_PullRequestCommit
  | t_PullRequestCommitCommentThread
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_PullRequestReviewThread
  | t_PushAllowance
  | t_Reaction
  | t_ReadyForReviewEvent
  | t_Ref
  | t_ReferencedEvent
  | t_RegistryPackage
  | t_RegistryPackageDependency
  | t_RegistryPackageFile
  | t_RegistryPackageTag
  | t_RegistryPackageVersion
  | t_Release
  | t_ReleaseAsset
  | t_RemovedFromProjectEvent
  | t_RenamedTitleEvent
  | t_ReopenedEvent
  | t_RepoAccessAuditEntry
  | t_RepoAddMemberAuditEntry
  | t_RepoAddTopicAuditEntry
  | t_RepoArchivedAuditEntry
  | t_RepoChangeMergeSettingAuditEntry
  | t_RepoConfigDisableAnonymousGitAccessAuditEntry
  | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
  | t_RepoConfigDisableContributorsOnlyAuditEntry
  | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
  | t_RepoConfigEnableAnonymousGitAccessAuditEntry
  | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
  | t_RepoConfigEnableContributorsOnlyAuditEntry
  | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
  | t_RepoConfigLockAnonymousGitAccessAuditEntry
  | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
  | t_RepoCreateAuditEntry
  | t_RepoDestroyAuditEntry
  | t_RepoRemoveMemberAuditEntry
  | t_RepoRemoveTopicAuditEntry
  | t_Repository
  | t_RepositoryInvitation
  | t_RepositoryTopic
  | t_RepositoryVisibilityChangeDisableAuditEntry
  | t_RepositoryVisibilityChangeEnableAuditEntry
  | t_RepositoryVulnerabilityAlert
  | t_ReviewDismissalAllowance
  | t_ReviewDismissedEvent
  | t_ReviewRequest
  | t_ReviewRequestRemovedEvent
  | t_ReviewRequestedEvent
  | t_SavedReply
  | t_SecurityAdvisory
  | t_SponsorsListing
  | t_SponsorsTier
  | t_Sponsorship
  | t_Status
  | t_StatusContext
  | t_SubscribedEvent
  | t_Tag
  | t_Team
  | t_TeamAddMemberAuditEntry
  | t_TeamAddRepositoryAuditEntry
  | t_TeamChangeParentTeamAuditEntry
  | t_TeamDiscussion
  | t_TeamDiscussionComment
  | t_TeamRemoveMemberAuditEntry
  | t_TeamRemoveRepositoryAuditEntry
  | t_Topic
  | t_TransferredEvent
  | t_Tree
  | t_UnassignedEvent
  | t_UnlabeledEvent
  | t_UnlockedEvent
  | t_UnpinnedEvent
  | t_UnsubscribedEvent
  | t_User
  | t_UserBlockedEvent
  | t_UserContentEdit
  | t_UserStatus

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<'ID'>>

/**
 * @name UniformResourceLocatable
 * @type INTERFACE
 */
type t_UniformResourceLocatable =
  | t_Bot
  | t_ClosedEvent
  | t_Commit
  | t_CrossReferencedEvent
  | t_Gist
  | t_Issue
  | t_Mannequin
  | t_MergedEvent
  | t_Milestone
  | t_Organization
  | t_PullRequest
  | t_PullRequestCommit
  | t_ReadyForReviewEvent
  | t_Release
  | t_Repository
  | t_RepositoryTopic
  | t_ReviewDismissedEvent
  | t_TeamDiscussion
  | t_TeamDiscussionComment
  | t_User

/**
 * @name URI
 * @type SCALAR
 */
type t_URI<T extends string = string> = ScalarType<T, Extension<'URI'>>

/**
 * @name User
 * @type OBJECT
 * @implements Node, Actor, RegistryPackageOwner, RegistryPackageSearch, ProjectOwner, RepositoryOwner, UniformResourceLocatable, ProfileOwner, Sponsorable
 */
type t_User = FieldsType<
  {
    __typename: t_String<'User'>

    /**
     * Determine if this repository owner has any items that can be pinned to their profile.
     */
    anyPinnableItems: FieldsTypeArg<
      { type?: PinnableItemType | null },
      t_Boolean
    >

    /**
     * A URL pointing to the user's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * The user's public profile bio.
     */
    bio: t_String | null

    /**
     * The user's public profile bio as HTML.
     */
    bioHTML: t_HTML

    /**
     * A list of commit comments made by this user.
     */
    commitComments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_CommitCommentConnection
    >

    /**
     * The user's public profile company.
     */
    company: t_String | null

    /**
     * The user's public profile company as HTML.
     */
    companyHTML: t_HTML

    /**
     * The collection of contributions this user has made to different repositories.
     */
    contributionsCollection: FieldsTypeArg<
      { organizationID?: string | null; from?: any | null; to?: any | null },
      t_ContributionsCollection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The user's publicly visible profile email.
     */
    email: t_String

    /**
     * A list of users the given user is followed by.
     */
    followers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_FollowerConnection
    >

    /**
     * A list of users the given user is following.
     */
    following: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_FollowingConnection
    >

    /**
     * Find gist by repo name.
     */
    gist: FieldsTypeArg<{ name: string }, t_Gist | null>

    /**
     * A list of gist comments made by this user.
     */
    gistComments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_GistCommentConnection
    >

    /**
     * A list of the Gists the user has created.
     */
    gists: FieldsTypeArg<
      {
        privacy?: GistPrivacy | null
        orderBy?: GistOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_GistConnection
    >

    /**
     * The hovercard information for this user in a given context
     */
    hovercard: FieldsTypeArg<{ primarySubjectId?: string | null }, t_Hovercard>
    id: t_ID

    /**
     * Whether or not this user is a participant in the GitHub Security Bug Bounty.
     */
    isBountyHunter: t_Boolean

    /**
     * Whether or not this user is a participant in the GitHub Campus Experts Program.
     */
    isCampusExpert: t_Boolean

    /**
     * Whether or not this user is a GitHub Developer Program member.
     */
    isDeveloperProgramMember: t_Boolean

    /**
     * Whether or not this user is a GitHub employee.
     */
    isEmployee: t_Boolean

    /**
     * Whether or not the user has marked themselves as for hire.
     */
    isHireable: t_Boolean

    /**
     * Whether or not this user is a site administrator.
     */
    isSiteAdmin: t_Boolean

    /**
     * Whether or not this user is the viewing user.
     */
    isViewer: t_Boolean

    /**
     * A list of issue comments made by this user.
     */
    issueComments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueCommentConnection
    >

    /**
     * A list of issues associated with this user.
     */
    issues: FieldsTypeArg<
      {
        orderBy?: IssueOrder | null
        labels?: (string)[] | null
        states?: (IssueState)[] | null
        filterBy?: IssueFilters | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueConnection
    >

    /**
     * Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: t_ProfileItemShowcase

    /**
     * The user's public profile location.
     */
    location: t_String | null

    /**
     * The username used to login.
     */
    login: t_String

    /**
     * The user's public profile name.
     */
    name: t_String | null

    /**
     * Find an organization by its login that the user belongs to.
     */
    organization: FieldsTypeArg<{ login: string }, t_Organization | null>

    /**
     * A list of organizations the user belongs to.
     */
    organizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_OrganizationConnection
    >

    /**
     * A list of repositories and gists this profile owner can pin to their profile.
     */
    pinnableItems: FieldsTypeArg<
      {
        types?: (PinnableItemType)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PinnableItemConnection
    >

    /**
     * A list of repositories and gists this profile owner has pinned to their profile
     */
    pinnedItems: FieldsTypeArg<
      {
        types?: (PinnableItemType)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PinnableItemConnection
    >

    /**
     * Returns how many more items this profile owner can pin to their profile.
     */
    pinnedItemsRemaining: t_Int

    /**
     * @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC.
     * A list of repositories this user has pinned to their profile
     */
    pinnedRepositories: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        affiliations?: (RepositoryAffiliation | null)[] | null
        ownerAffiliations?: (RepositoryAffiliation | null)[] | null
        isLocked?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryConnection
    >

    /**
     * Find project by number.
     */
    project: FieldsTypeArg<{ number: number }, t_Project | null>

    /**
     * A list of projects under the owner.
     */
    projects: FieldsTypeArg<
      {
        orderBy?: ProjectOrder | null
        search?: string | null
        states?: (ProjectState)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ProjectConnection
    >

    /**
     * The HTTP path listing user's projects
     */
    projectsResourcePath: t_URI

    /**
     * The HTTP URL listing user's projects
     */
    projectsUrl: t_URI

    /**
     * A list of public keys associated with this user.
     */
    publicKeys: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PublicKeyConnection
    >

    /**
     * A list of pull requests associated with this user.
     */
    pullRequests: FieldsTypeArg<
      {
        states?: (PullRequestState)[] | null
        labels?: (string)[] | null
        headRefName?: string | null
        baseRefName?: string | null
        orderBy?: IssueOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestConnection
    >

    /**
     * A list of registry packages under the owner.
     */
    registryPackages: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        name?: string | null
        names?: (string | null)[] | null
        repositoryId?: string | null
        packageType?: RegistryPackageType | null
        registryPackageType?: string | null
        publicOnly?: boolean | null
      },
      t_RegistryPackageConnection
    >

    /**
     * A list of registry packages for a particular search query.
     */
    registryPackagesForQuery: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
        packageType?: RegistryPackageType | null
      },
      t_RegistryPackageConnection
    >

    /**
     * A list of repositories that the user owns.
     */
    repositories: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        affiliations?: (RepositoryAffiliation | null)[] | null
        ownerAffiliations?: (RepositoryAffiliation | null)[] | null
        isLocked?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        isFork?: boolean | null
      },
      t_RepositoryConnection
    >

    /**
     * A list of repositories that the user recently contributed to.
     */
    repositoriesContributedTo: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        isLocked?: boolean | null
        includeUserRepositories?: boolean | null
        contributionTypes?: (RepositoryContributionType | null)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryConnection
    >

    /**
     * Find Repository.
     */
    repository: FieldsTypeArg<{ name: string }, t_Repository | null>

    /**
     * The HTTP path for this user
     */
    resourcePath: t_URI

    /**
     * Replies this user has saved
     */
    savedReplies: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: SavedReplyOrder | null
      },
      t_SavedReplyConnection | null
    >

    /**
     * The GitHub Sponsors listing for this user.
     */
    sponsorsListing: t_SponsorsListing | null

    /**
     * This object's sponsorships as the maintainer.
     */
    sponsorshipsAsMaintainer: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        includePrivate?: boolean | null
        orderBy?: SponsorshipOrder | null
      },
      t_SponsorshipConnection
    >

    /**
     * This object's sponsorships as the sponsor.
     */
    sponsorshipsAsSponsor: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: SponsorshipOrder | null
      },
      t_SponsorshipConnection
    >

    /**
     * Repositories the user has starred.
     */
    starredRepositories: FieldsTypeArg<
      {
        ownedByViewer?: boolean | null
        orderBy?: StarOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_StarredRepositoryConnection
    >

    /**
     * The user's description of what they're currently doing.
     */
    status: t_UserStatus | null

    /**
     * Repositories the user has contributed to, ordered by contribution rank, plus repositories the user has created
     *
     */
    topRepositories: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy: RepositoryOrder
        since?: any | null
      },
      t_RepositoryConnection
    >

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this user
     */
    url: t_URI

    /**
     * Can the viewer pin repositories and gists to the profile?
     */
    viewerCanChangePinnedItems: t_Boolean

    /**
     * Can the current viewer create new projects on this owner.
     */
    viewerCanCreateProjects: t_Boolean

    /**
     * Whether or not the viewer is able to follow the user.
     */
    viewerCanFollow: t_Boolean

    /**
     * Whether or not this user is followed by the viewer.
     */
    viewerIsFollowing: t_Boolean

    /**
     * A list of repositories the given user is watching.
     */
    watching: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        affiliations?: (RepositoryAffiliation | null)[] | null
        ownerAffiliations?: (RepositoryAffiliation | null)[] | null
        isLocked?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryConnection
    >

    /**
     * A URL pointing to the user's public website/blog.
     */
    websiteUrl: t_URI | null
  },
  Extension<'User'>
>

/**
 * @name Actor
 * @type INTERFACE
 */
type t_Actor =
  | t_Bot
  | t_EnterpriseUserAccount
  | t_Mannequin
  | t_Organization
  | t_User

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<'Int'>>

/**
 * @name PageInfo
 * @type OBJECT
 */
type t_PageInfo = FieldsType<
  {
    __typename: t_String<'PageInfo'>

    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: t_String | null

    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: t_Boolean

    /**
     * When paginating backwards, are there more items?
     */
    hasPreviousPage: t_Boolean

    /**
     * When paginating backwards, the cursor to continue.
     */
    startCursor: t_String | null
  },
  Extension<'PageInfo'>
>

/**
 * @name DateTime
 * @type SCALAR
 */
type t_DateTime<T extends any = any> = ScalarType<T, Extension<'DateTime'>>

/**
 * @name RegistryPackageOwner
 * @type INTERFACE
 */
type t_RegistryPackageOwner = t_Organization | t_Repository | t_User

/**
 * @name RegistryPackageConnection
 * @type OBJECT
 */
type t_RegistryPackageConnection = FieldsType<
  {
    __typename: t_String<'RegistryPackageConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RegistryPackageEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RegistryPackage | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RegistryPackageConnection'>
>

/**
 * @name RegistryPackageEdge
 * @type OBJECT
 */
type t_RegistryPackageEdge = FieldsType<
  {
    __typename: t_String<'RegistryPackageEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RegistryPackage | null
  },
  Extension<'RegistryPackageEdge'>
>

/**
 * @name RegistryPackage
 * @type OBJECT
 * @implements Node
 */
type t_RegistryPackage = FieldsType<
  {
    __typename: t_String<'RegistryPackage'>

    /**
     * The package type color
     */
    color: t_String
    id: t_ID

    /**
     * Find the latest version for the package.
     */
    latestVersion: t_RegistryPackageVersion | null

    /**
     * Identifies the title of the package.
     */
    name: t_String

    /**
     * Identifies the title of the package, with the owner prefixed.
     */
    nameWithOwner: t_String

    /**
     * Find the package file identified by the guid.
     */
    packageFileByGuid: FieldsTypeArg<
      { guid: string },
      t_RegistryPackageFile | null
    >

    /**
     * Find the package file identified by the sha256.
     */
    packageFileBySha256: FieldsTypeArg<
      { sha256: string },
      t_RegistryPackageFile | null
    >

    /**
     * Identifies the type of the package.
     */
    packageType: t_RegistryPackageType

    /**
     * List the prerelease versions for this package.
     */
    preReleaseVersions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RegistryPackageVersionConnection | null
    >

    /**
     * The type of the package.
     */
    registryPackageType: t_String | null

    /**
     * repository that the release is associated with
     */
    repository: t_Repository | null

    /**
     * Statistics about package activity.
     */
    statistics: t_RegistryPackageStatistics | null

    /**
     * list of tags for this package
     */
    tags: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RegistryPackageTagConnection
    >

    /**
     * List the topics for this package.
     */
    topics: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_TopicConnection | null
    >

    /**
     * Find package version by version string.
     */
    version: FieldsTypeArg<{ version: string }, t_RegistryPackageVersion | null>

    /**
     * Find package version by version string.
     */
    versionByPlatform: FieldsTypeArg<
      { version: string; platform: string },
      t_RegistryPackageVersion | null
    >

    /**
     * Find package version by manifest SHA256.
     */
    versionBySha256: FieldsTypeArg<
      { sha256: string },
      t_RegistryPackageVersion | null
    >

    /**
     * list of versions for this package
     */
    versions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RegistryPackageVersionConnection
    >

    /**
     * List package versions with a specific metadatum.
     */
    versionsByMetadatum: FieldsTypeArg<
      {
        metadatum: RegistryPackageMetadatum
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RegistryPackageVersionConnection | null
    >
  },
  Extension<'RegistryPackage'>
>

/**
 * @name RegistryPackageType
 * @type ENUM
 */
type t_RegistryPackageType = EnumType<
  'NPM' | 'RUBYGEMS' | 'MAVEN' | 'DOCKER' | 'DEBIAN' | 'NUGET' | 'PYTHON'
>

/**
 * @name Repository
 * @type OBJECT
 * @implements Node, ProjectOwner, RegistryPackageOwner, RegistryPackageSearch, Subscribable, Starrable, UniformResourceLocatable, RepositoryInfo
 */
type t_Repository = FieldsType<
  {
    __typename: t_String<'Repository'>

    /**
     * A list of users that can be assigned to issues in this repository.
     */
    assignableUsers: FieldsTypeArg<
      {
        query?: string | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * A list of branch protection rules for this repository.
     */
    branchProtectionRules: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_BranchProtectionRuleConnection
    >

    /**
     * Returns the code of conduct for this repository
     */
    codeOfConduct: t_CodeOfConduct | null

    /**
     * A list of collaborators associated with the repository.
     */
    collaborators: FieldsTypeArg<
      {
        affiliation?: CollaboratorAffiliation | null
        query?: string | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryCollaboratorConnection | null
    >

    /**
     * A list of commit comments associated with the repository.
     */
    commitComments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_CommitCommentConnection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The Ref associated with the repository's default branch.
     */
    defaultBranchRef: t_Ref | null

    /**
     * A list of deploy keys that are on this repository.
     */
    deployKeys: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_DeployKeyConnection
    >

    /**
     * Deployments associated with the repository
     */
    deployments: FieldsTypeArg<
      {
        environments?: (string)[] | null
        orderBy?: DeploymentOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_DeploymentConnection
    >

    /**
     * The description of the repository.
     */
    description: t_String | null

    /**
     * The description of the repository rendered to HTML.
     */
    descriptionHTML: t_HTML

    /**
     * The number of kilobytes this repository occupies on disk.
     */
    diskUsage: t_Int | null

    /**
     * Returns how many forks there are of this repository in the whole network.
     */
    forkCount: t_Int

    /**
     * A list of direct forked repositories.
     */
    forks: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        affiliations?: (RepositoryAffiliation | null)[] | null
        ownerAffiliations?: (RepositoryAffiliation | null)[] | null
        isLocked?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryConnection
    >

    /**
     * Indicates if the repository has issues feature enabled.
     */
    hasIssuesEnabled: t_Boolean

    /**
     * Indicates if the repository has wiki feature enabled.
     */
    hasWikiEnabled: t_Boolean

    /**
     * The repository's URL.
     */
    homepageUrl: t_URI | null
    id: t_ID

    /**
     * Indicates if the repository is unmaintained.
     */
    isArchived: t_Boolean

    /**
     * Returns whether or not this repository disabled.
     */
    isDisabled: t_Boolean

    /**
     * Identifies if the repository is a fork.
     */
    isFork: t_Boolean

    /**
     * Indicates if the repository has been locked or not.
     */
    isLocked: t_Boolean

    /**
     * Identifies if the repository is a mirror.
     */
    isMirror: t_Boolean

    /**
     * Identifies if the repository is private.
     */
    isPrivate: t_Boolean

    /**
     * Identifies if the repository is a template that can be used to generate new repositories.
     */
    isTemplate: t_Boolean

    /**
     * Returns a single issue from the current repository by number.
     */
    issue: FieldsTypeArg<{ number: number }, t_Issue | null>

    /**
     * Returns a single issue-like object from the current repository by number.
     */
    issueOrPullRequest: FieldsTypeArg<
      { number: number },
      t_IssueOrPullRequest | null
    >

    /**
     * A list of issues that have been opened in the repository.
     */
    issues: FieldsTypeArg<
      {
        orderBy?: IssueOrder | null
        labels?: (string)[] | null
        states?: (IssueState)[] | null
        filterBy?: IssueFilters | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueConnection
    >

    /**
     * Returns a single label by name
     */
    label: FieldsTypeArg<{ name: string }, t_Label | null>

    /**
     * A list of labels associated with the repository.
     */
    labels: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
      },
      t_LabelConnection | null
    >

    /**
     * A list containing a breakdown of the language composition of the repository.
     */
    languages: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: LanguageOrder | null
      },
      t_LanguageConnection | null
    >

    /**
     * The license associated with the repository
     */
    licenseInfo: t_License | null

    /**
     * The reason the repository has been locked.
     */
    lockReason: t_RepositoryLockReason | null

    /**
     * A list of Users that can be mentioned in the context of the repository.
     */
    mentionableUsers: FieldsTypeArg<
      {
        query?: string | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * Whether or not PRs are merged with a merge commit on this repository.
     */
    mergeCommitAllowed: t_Boolean

    /**
     * Returns a single milestone from the current repository by number.
     */
    milestone: FieldsTypeArg<{ number: number }, t_Milestone | null>

    /**
     * A list of milestones associated with the repository.
     */
    milestones: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        states?: (MilestoneState)[] | null
        orderBy?: MilestoneOrder | null
      },
      t_MilestoneConnection | null
    >

    /**
     * The repository's original mirror URL.
     */
    mirrorUrl: t_URI | null

    /**
     * The name of the repository.
     */
    name: t_String

    /**
     * The repository's name with owner.
     */
    nameWithOwner: t_String

    /**
     * A Git object in the repository
     */
    object: FieldsTypeArg<
      { oid?: any | null; expression?: string | null },
      t_Blob | t_Commit | t_Tag | t_Tree | null
    >

    /**
     * The image used to represent this repository in Open Graph data.
     */
    openGraphImageUrl: t_URI

    /**
     * The User owner of the repository.
     */
    owner: t_Organization | t_User

    /**
     * The repository parent, if this is a fork.
     */
    parent: t_Repository | null

    /**
     * The primary language of the repository's code.
     */
    primaryLanguage: t_Language | null

    /**
     * Find project by number.
     */
    project: FieldsTypeArg<{ number: number }, t_Project | null>

    /**
     * A list of projects under the owner.
     */
    projects: FieldsTypeArg<
      {
        orderBy?: ProjectOrder | null
        search?: string | null
        states?: (ProjectState)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ProjectConnection
    >

    /**
     * The HTTP path listing the repository's projects
     */
    projectsResourcePath: t_URI

    /**
     * The HTTP URL listing the repository's projects
     */
    projectsUrl: t_URI

    /**
     * Returns a single pull request from the current repository by number.
     */
    pullRequest: FieldsTypeArg<{ number: number }, t_PullRequest | null>

    /**
     * A list of pull requests that have been opened in the repository.
     */
    pullRequests: FieldsTypeArg<
      {
        states?: (PullRequestState)[] | null
        labels?: (string)[] | null
        headRefName?: string | null
        baseRefName?: string | null
        orderBy?: IssueOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestConnection
    >

    /**
     * Identifies when the repository was last pushed to.
     */
    pushedAt: t_DateTime | null

    /**
     * Whether or not rebase-merging is enabled on this repository.
     */
    rebaseMergeAllowed: t_Boolean

    /**
     * Fetch a given ref from the repository
     */
    ref: FieldsTypeArg<{ qualifiedName: string }, t_Ref | null>

    /**
     * Fetch a list of refs from the repository
     */
    refs: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        refPrefix: string
        direction?: OrderDirection | null
        orderBy?: RefOrder | null
      },
      t_RefConnection | null
    >

    /**
     * A list of registry packages under the owner.
     */
    registryPackages: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        name?: string | null
        names?: (string | null)[] | null
        repositoryId?: string | null
        packageType?: RegistryPackageType | null
        registryPackageType?: string | null
        publicOnly?: boolean | null
      },
      t_RegistryPackageConnection
    >

    /**
     * A list of registry packages for a particular search query.
     */
    registryPackagesForQuery: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
        packageType?: RegistryPackageType | null
      },
      t_RegistryPackageConnection
    >

    /**
     * Lookup a single release given various criteria.
     */
    release: FieldsTypeArg<{ tagName: string }, t_Release | null>

    /**
     * List of releases which are dependent on this repository.
     */
    releases: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: ReleaseOrder | null
      },
      t_ReleaseConnection
    >

    /**
     * A list of applied repository-topic associations for this repository.
     */
    repositoryTopics: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryTopicConnection
    >

    /**
     * The HTTP path for this repository
     */
    resourcePath: t_URI

    /**
     * A description of the repository, rendered to HTML without any links in it.
     */
    shortDescriptionHTML: FieldsTypeArg<{ limit?: number | null }, t_HTML>

    /**
     * Whether or not squash-merging is enabled on this repository.
     */
    squashMergeAllowed: t_Boolean

    /**
     * The SSH URL to clone this repository
     */
    sshUrl: t_GitSSHRemote

    /**
     * A list of users who have starred this starrable.
     */
    stargazers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: StarOrder | null
      },
      t_StargazerConnection
    >

    /**
     * The repository from which this repository was generated, if any.
     */
    templateRepository: t_Repository | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this repository
     */
    url: t_URI

    /**
     * Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar.
     */
    usesCustomOpenGraphImage: t_Boolean

    /**
     * Indicates whether the viewer has admin permissions on this repository.
     */
    viewerCanAdminister: t_Boolean

    /**
     * Can the current viewer create new projects on this owner.
     */
    viewerCanCreateProjects: t_Boolean

    /**
     * Check if the viewer is able to change their subscription status for the repository.
     */
    viewerCanSubscribe: t_Boolean

    /**
     * Indicates whether the viewer can update the topics of this repository.
     */
    viewerCanUpdateTopics: t_Boolean

    /**
     * Returns a boolean indicating whether the viewing user has starred this starrable.
     */
    viewerHasStarred: t_Boolean

    /**
     * The users permission level on the repository. Will return null if authenticated as an GitHub App.
     */
    viewerPermission: t_RepositoryPermission | null

    /**
     * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
     */
    viewerSubscription: t_SubscriptionState | null

    /**
     * A list of vulnerability alerts that are on this repository.
     */
    vulnerabilityAlerts: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryVulnerabilityAlertConnection | null
    >

    /**
     * A list of users watching the repository.
     */
    watchers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >
  },
  Extension<'Repository'>
>

/**
 * @name ProjectOwner
 * @type INTERFACE
 */
type t_ProjectOwner = t_Organization | t_Repository | t_User

/**
 * @name Project
 * @type OBJECT
 * @implements Node, Closable, Updatable
 */
type t_Project = FieldsType<
  {
    __typename: t_String<'Project'>

    /**
     * The project's description body.
     */
    body: t_String | null

    /**
     * The projects description body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * `true` if the object is closed (definition of closed may depend on type)
     */
    closed: t_Boolean

    /**
     * Identifies the date and time when the object was closed.
     */
    closedAt: t_DateTime | null

    /**
     * List of columns in the project
     */
    columns: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ProjectColumnConnection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The actor who originally created the project.
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * The project's name.
     */
    name: t_String

    /**
     * The project's number.
     */
    number: t_Int

    /**
     * The project's owner. Currently limited to repositories, organizations, and users.
     */
    owner: t_Organization | t_Repository | t_User

    /**
     * List of pending cards in this project
     */
    pendingCards: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        archivedStates?: (ProjectCardArchivedState | null)[] | null
      },
      t_ProjectCardConnection
    >

    /**
     * The HTTP path for this project
     */
    resourcePath: t_URI

    /**
     * Whether the project is open or closed.
     */
    state: t_ProjectState

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this project
     */
    url: t_URI

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean
  },
  Extension<'Project'>
>

/**
 * @name Closable
 * @type INTERFACE
 */
type t_Closable = t_Issue | t_Milestone | t_Project | t_PullRequest

/**
 * @name Updatable
 * @type INTERFACE
 */
type t_Updatable =
  | t_CommitComment
  | t_GistComment
  | t_Issue
  | t_IssueComment
  | t_Project
  | t_PullRequest
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_TeamDiscussion
  | t_TeamDiscussionComment

/**
 * @name ProjectState
 * @type ENUM
 */
type t_ProjectState = EnumType<'OPEN' | 'CLOSED'>

/**
 * @name HTML
 * @type SCALAR
 */
type t_HTML<T extends any = any> = ScalarType<T, Extension<'HTML'>>

/**
 * @name ProjectColumnConnection
 * @type OBJECT
 */
type t_ProjectColumnConnection = FieldsType<
  {
    __typename: t_String<'ProjectColumnConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ProjectColumnEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_ProjectColumn | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ProjectColumnConnection'>
>

/**
 * @name ProjectColumnEdge
 * @type OBJECT
 */
type t_ProjectColumnEdge = FieldsType<
  {
    __typename: t_String<'ProjectColumnEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_ProjectColumn | null
  },
  Extension<'ProjectColumnEdge'>
>

/**
 * @name ProjectColumn
 * @type OBJECT
 * @implements Node
 */
type t_ProjectColumn = FieldsType<
  {
    __typename: t_String<'ProjectColumn'>

    /**
     * List of cards in the column
     */
    cards: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        archivedStates?: (ProjectCardArchivedState | null)[] | null
      },
      t_ProjectCardConnection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * The project column's name.
     */
    name: t_String

    /**
     * The project that contains this column.
     */
    project: t_Project

    /**
     * The semantic purpose of the column
     */
    purpose: t_ProjectColumnPurpose | null

    /**
     * The HTTP path for this project column
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this project column
     */
    url: t_URI
  },
  Extension<'ProjectColumn'>
>

/**
 * @name ProjectColumnPurpose
 * @type ENUM
 */
type t_ProjectColumnPurpose = EnumType<'TODO' | 'IN_PROGRESS' | 'DONE'>

/**
 * @name ProjectCardConnection
 * @type OBJECT
 */
type t_ProjectCardConnection = FieldsType<
  {
    __typename: t_String<'ProjectCardConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ProjectCardEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_ProjectCard | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ProjectCardConnection'>
>

/**
 * @name ProjectCardEdge
 * @type OBJECT
 */
type t_ProjectCardEdge = FieldsType<
  {
    __typename: t_String<'ProjectCardEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_ProjectCard | null
  },
  Extension<'ProjectCardEdge'>
>

/**
 * @name ProjectCard
 * @type OBJECT
 * @implements Node
 */
type t_ProjectCard = FieldsType<
  {
    __typename: t_String<'ProjectCard'>

    /**
     * The project column this card is associated under. A card may only belong to one
     * project column at a time. The column field will be null if the card is created
     * in a pending state and has yet to be associated with a column. Once cards are
     * associated with a column, they will not become pending in the future.
     *
     */
    column: t_ProjectColumn | null

    /**
     * The card content item
     */
    content: t_ProjectCardItem | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The actor who created this card
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * Whether the card is archived
     */
    isArchived: t_Boolean

    /**
     * The card note
     */
    note: t_String | null

    /**
     * The project that contains this card.
     */
    project: t_Project

    /**
     * The HTTP path for this card
     */
    resourcePath: t_URI

    /**
     * The state of ProjectCard
     */
    state: t_ProjectCardState | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this card
     */
    url: t_URI
  },
  Extension<'ProjectCard'>
>

/**
 * @name ProjectCardState
 * @type ENUM
 */
type t_ProjectCardState = EnumType<'CONTENT_ONLY' | 'NOTE_ONLY' | 'REDACTED'>

/**
 * @name ProjectCardItem
 * @type UNION
 */
type t_ProjectCardItem = t_Issue | t_PullRequest

/**
 * @name Issue
 * @type OBJECT
 * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
 */
type t_Issue = FieldsType<
  {
    __typename: t_String<'Issue'>

    /**
     * Reason that the conversation was locked.
     */
    activeLockReason: t_LockReason | null

    /**
     * A list of Users assigned to this object.
     */
    assignees: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the subject of the comment.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * Identifies the body of the issue.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * Identifies the body of the issue rendered to text.
     */
    bodyText: t_String

    /**
     * `true` if the object is closed (definition of closed may depend on type)
     */
    closed: t_Boolean

    /**
     * Identifies the date and time when the object was closed.
     */
    closedAt: t_DateTime | null

    /**
     * A list of comments associated with the Issue.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueCommentConnection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * The hovercard information for this issue
     */
    hovercard: FieldsTypeArg<
      { includeNotificationContexts?: boolean | null },
      t_Hovercard
    >
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * A list of labels associated with the object.
     */
    labels: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_LabelConnection | null
    >

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * `true` if the object is locked
     */
    locked: t_Boolean

    /**
     * Identifies the milestone associated with the issue.
     */
    milestone: t_Milestone | null

    /**
     * Identifies the issue number.
     */
    number: t_Int

    /**
     * A list of Users that are participating in the Issue conversation.
     */
    participants: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * List of project cards associated with this issue.
     */
    projectCards: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        archivedStates?: (ProjectCardArchivedState | null)[] | null
      },
      t_ProjectCardConnection
    >

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The repository associated with this node.
     */
    repository: t_Repository

    /**
     * The HTTP path for this issue
     */
    resourcePath: t_URI

    /**
     * Identifies the state of the issue.
     */
    state: t_IssueState

    /**
     * @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2019-10-01 UTC.
     * A list of events, comments, commits, etc. associated with the issue.
     */
    timeline: FieldsTypeArg<
      {
        since?: any | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueTimelineConnection
    >

    /**
     * A list of events, comments, commits, etc. associated with the issue.
     */
    timelineItems: FieldsTypeArg<
      {
        since?: any | null
        skip?: number | null
        itemTypes?: (IssueTimelineItemsItemType)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueTimelineItemsConnection
    >

    /**
     * Identifies the issue title.
     */
    title: t_String

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this issue
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the viewer is able to change their subscription status for the repository.
     */
    viewerCanSubscribe: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean

    /**
     * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
     */
    viewerSubscription: t_SubscriptionState | null
  },
  Extension<'Issue'>
>

/**
 * @name Assignable
 * @type INTERFACE
 */
type t_Assignable = t_Issue | t_PullRequest

/**
 * @name UserConnection
 * @type OBJECT
 */
type t_UserConnection = FieldsType<
  {
    __typename: t_String<'UserConnection'>

    /**
     * A list of edges.
     */
    edges: (t_UserEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'UserConnection'>
>

/**
 * @name UserEdge
 * @type OBJECT
 */
type t_UserEdge = FieldsType<
  {
    __typename: t_String<'UserEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_User | null
  },
  Extension<'UserEdge'>
>

/**
 * @name Comment
 * @type INTERFACE
 */
type t_Comment =
  | t_CommitComment
  | t_GistComment
  | t_Issue
  | t_IssueComment
  | t_PullRequest
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_TeamDiscussion
  | t_TeamDiscussionComment

/**
 * @name UserContentEditConnection
 * @type OBJECT
 */
type t_UserContentEditConnection = FieldsType<
  {
    __typename: t_String<'UserContentEditConnection'>

    /**
     * A list of edges.
     */
    edges: (t_UserContentEditEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_UserContentEdit | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'UserContentEditConnection'>
>

/**
 * @name UserContentEditEdge
 * @type OBJECT
 */
type t_UserContentEditEdge = FieldsType<
  {
    __typename: t_String<'UserContentEditEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_UserContentEdit | null
  },
  Extension<'UserContentEditEdge'>
>

/**
 * @name UserContentEdit
 * @type OBJECT
 * @implements Node
 */
type t_UserContentEdit = FieldsType<
  {
    __typename: t_String<'UserContentEdit'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the date and time when the object was deleted.
     */
    deletedAt: t_DateTime | null

    /**
     * The actor who deleted this content
     */
    deletedBy:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * A summary of the changes for this edit
     */
    diff: t_String | null

    /**
     * When this content was edited
     */
    editedAt: t_DateTime

    /**
     * The actor who edited this content
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'UserContentEdit'>
>

/**
 * @name CommentAuthorAssociation
 * @type ENUM
 */
type t_CommentAuthorAssociation = EnumType<
  | 'MEMBER'
  | 'OWNER'
  | 'COLLABORATOR'
  | 'CONTRIBUTOR'
  | 'FIRST_TIME_CONTRIBUTOR'
  | 'FIRST_TIMER'
  | 'NONE'
>

/**
 * @name UpdatableComment
 * @type INTERFACE
 */
type t_UpdatableComment =
  | t_CommitComment
  | t_GistComment
  | t_Issue
  | t_IssueComment
  | t_PullRequest
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_TeamDiscussion
  | t_TeamDiscussionComment

/**
 * @name CommentCannotUpdateReason
 * @type ENUM
 */
type t_CommentCannotUpdateReason = EnumType<
  | 'ARCHIVED'
  | 'INSUFFICIENT_ACCESS'
  | 'LOCKED'
  | 'LOGIN_REQUIRED'
  | 'MAINTENANCE'
  | 'VERIFIED_EMAIL_REQUIRED'
  | 'DENIED'
>

/**
 * @name Labelable
 * @type INTERFACE
 */
type t_Labelable = t_Issue | t_PullRequest

/**
 * @name LabelConnection
 * @type OBJECT
 */
type t_LabelConnection = FieldsType<
  {
    __typename: t_String<'LabelConnection'>

    /**
     * A list of edges.
     */
    edges: (t_LabelEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Label | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'LabelConnection'>
>

/**
 * @name LabelEdge
 * @type OBJECT
 */
type t_LabelEdge = FieldsType<
  {
    __typename: t_String<'LabelEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Label | null
  },
  Extension<'LabelEdge'>
>

/**
 * @name Label
 * @type OBJECT
 * @implements Node
 */
type t_Label = FieldsType<
  {
    __typename: t_String<'Label'>

    /**
     * Identifies the label color.
     */
    color: t_String

    /**
     * Identifies the date and time when the label was created.
     */
    createdAt: t_DateTime | null

    /**
     * A brief description of this label.
     */
    description: t_String | null
    id: t_ID

    /**
     * Indicates whether or not this is a default label.
     */
    isDefault: t_Boolean

    /**
     * A list of issues associated with this label.
     */
    issues: FieldsTypeArg<
      {
        orderBy?: IssueOrder | null
        labels?: (string)[] | null
        states?: (IssueState)[] | null
        filterBy?: IssueFilters | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueConnection
    >

    /**
     * Identifies the label name.
     */
    name: t_String

    /**
     * A list of pull requests associated with this label.
     */
    pullRequests: FieldsTypeArg<
      {
        states?: (PullRequestState)[] | null
        labels?: (string)[] | null
        headRefName?: string | null
        baseRefName?: string | null
        orderBy?: IssueOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestConnection
    >

    /**
     * The repository associated with this label.
     */
    repository: t_Repository

    /**
     * The HTTP path for this label.
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the label was last updated.
     */
    updatedAt: t_DateTime | null

    /**
     * The HTTP URL for this label.
     */
    url: t_URI
  },
  Extension<'Label'>
>

/**
 * @name IssueConnection
 * @type OBJECT
 */
type t_IssueConnection = FieldsType<
  {
    __typename: t_String<'IssueConnection'>

    /**
     * A list of edges.
     */
    edges: (t_IssueEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Issue | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'IssueConnection'>
>

/**
 * @name IssueEdge
 * @type OBJECT
 */
type t_IssueEdge = FieldsType<
  {
    __typename: t_String<'IssueEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Issue | null
  },
  Extension<'IssueEdge'>
>

/**
 * @name IssueOrder
 * @type INPUT_OBJECT
 */
export type IssueOrder = { field: IssueOrderField; direction: OrderDirection }

/**
 * @name IssueOrderField
 * @type ENUM
 */
type t_IssueOrderField = EnumType<'CREATED_AT' | 'UPDATED_AT' | 'COMMENTS'>

/**
 * @name OrderDirection
 * @type ENUM
 */
type t_OrderDirection = EnumType<'ASC' | 'DESC'>

/**
 * @name IssueState
 * @type ENUM
 */
type t_IssueState = EnumType<'OPEN' | 'CLOSED'>

/**
 * @name IssueFilters
 * @type INPUT_OBJECT
 */
export type IssueFilters = {
  assignee: string | null
  createdBy: string | null
  labels: (string)[] | null
  mentioned: string | null
  milestone: string | null
  since: any | null
  states: (IssueState)[] | null
  viewerSubscribed: boolean | null
}

/**
 * @name PullRequestConnection
 * @type OBJECT
 */
type t_PullRequestConnection = FieldsType<
  {
    __typename: t_String<'PullRequestConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequest | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestConnection'>
>

/**
 * @name PullRequestEdge
 * @type OBJECT
 */
type t_PullRequestEdge = FieldsType<
  {
    __typename: t_String<'PullRequestEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequest | null
  },
  Extension<'PullRequestEdge'>
>

/**
 * @name PullRequest
 * @type OBJECT
 * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
 */
type t_PullRequest = FieldsType<
  {
    __typename: t_String<'PullRequest'>

    /**
     * Reason that the conversation was locked.
     */
    activeLockReason: t_LockReason | null

    /**
     * The number of additions in this pull request.
     */
    additions: t_Int

    /**
     * A list of Users assigned to this object.
     */
    assignees: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the subject of the comment.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * Identifies the base Ref associated with the pull request.
     */
    baseRef: t_Ref | null

    /**
     * Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted.
     */
    baseRefName: t_String

    /**
     * Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted.
     */
    baseRefOid: t_GitObjectID

    /**
     * The repository associated with this pull request's base Ref.
     */
    baseRepository: t_Repository | null

    /**
     * The body as Markdown.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body rendered to text.
     */
    bodyText: t_String

    /**
     * The number of changed files in this pull request.
     */
    changedFiles: t_Int

    /**
     * `true` if the pull request is closed
     */
    closed: t_Boolean

    /**
     * Identifies the date and time when the object was closed.
     */
    closedAt: t_DateTime | null

    /**
     * A list of comments associated with the pull request.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueCommentConnection
    >

    /**
     * A list of commits present in this pull request's head branch not present in the base branch.
     */
    commits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestCommitConnection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The number of deletions in this pull request.
     */
    deletions: t_Int

    /**
     * The actor who edited this pull request's body.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Lists the files changed within this pull request.
     */
    files: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestChangedFileConnection | null
    >

    /**
     * Identifies the head Ref associated with the pull request.
     */
    headRef: t_Ref | null

    /**
     * Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted.
     */
    headRefName: t_String

    /**
     * Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted.
     */
    headRefOid: t_GitObjectID

    /**
     * The repository associated with this pull request's head Ref.
     */
    headRepository: t_Repository | null

    /**
     * The owner of the repository associated with this pull request's head Ref.
     */
    headRepositoryOwner: t_Organization | t_User | null

    /**
     * The hovercard information for this issue
     */
    hovercard: FieldsTypeArg<
      { includeNotificationContexts?: boolean | null },
      t_Hovercard
    >
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * The head and base repositories are different.
     */
    isCrossRepository: t_Boolean

    /**
     * A list of labels associated with the object.
     */
    labels: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_LabelConnection | null
    >

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * `true` if the pull request is locked
     */
    locked: t_Boolean

    /**
     * Indicates whether maintainers can modify the pull request.
     */
    maintainerCanModify: t_Boolean

    /**
     * The commit that was created when this pull request was merged.
     */
    mergeCommit: t_Commit | null

    /**
     * Whether or not the pull request can be merged based on the existence of merge conflicts.
     */
    mergeable: t_MergeableState

    /**
     * Whether or not the pull request was merged.
     */
    merged: t_Boolean

    /**
     * The date and time that the pull request was merged.
     */
    mergedAt: t_DateTime | null

    /**
     * The actor who merged the pull request.
     */
    mergedBy:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the milestone associated with the pull request.
     */
    milestone: t_Milestone | null

    /**
     * Identifies the pull request number.
     */
    number: t_Int

    /**
     * A list of Users that are participating in the Pull Request conversation.
     */
    participants: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * The permalink to the pull request.
     */
    permalink: t_URI

    /**
     * The commit that GitHub automatically generated to test if this pull request could be merged. This field will not return a value if the pull request is merged, or if the test merge commit is still being generated. See the `mergeable` field for more details on the mergeability of the pull request.
     */
    potentialMergeCommit: t_Commit | null

    /**
     * List of project cards associated with this pull request.
     */
    projectCards: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        archivedStates?: (ProjectCardArchivedState | null)[] | null
      },
      t_ProjectCardConnection
    >

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The repository associated with this node.
     */
    repository: t_Repository

    /**
     * The HTTP path for this pull request.
     */
    resourcePath: t_URI

    /**
     * The HTTP path for reverting this pull request.
     */
    revertResourcePath: t_URI

    /**
     * The HTTP URL for reverting this pull request.
     */
    revertUrl: t_URI

    /**
     * A list of review requests associated with the pull request.
     */
    reviewRequests: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ReviewRequestConnection | null
    >

    /**
     * The list of all review threads for this pull request.
     */
    reviewThreads: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestReviewThreadConnection
    >

    /**
     * A list of reviews associated with the pull request.
     */
    reviews: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        states?: (PullRequestReviewState)[] | null
        author?: string | null
      },
      t_PullRequestReviewConnection | null
    >

    /**
     * Identifies the state of the pull request.
     */
    state: t_PullRequestState

    /**
     * A list of reviewer suggestions based on commit history and past review comments.
     */
    suggestedReviewers: (t_SuggestedReviewer | null)[]

    /**
     * @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2019-10-01 UTC.
     * A list of events, comments, commits, etc. associated with the pull request.
     */
    timeline: FieldsTypeArg<
      {
        since?: any | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestTimelineConnection
    >

    /**
     * A list of events, comments, commits, etc. associated with the pull request.
     */
    timelineItems: FieldsTypeArg<
      {
        since?: any | null
        skip?: number | null
        itemTypes?: (PullRequestTimelineItemsItemType)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestTimelineItemsConnection
    >

    /**
     * Identifies the pull request title.
     */
    title: t_String

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this pull request.
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Whether or not the viewer can apply suggestion.
     */
    viewerCanApplySuggestion: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the viewer is able to change their subscription status for the repository.
     */
    viewerCanSubscribe: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean

    /**
     * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
     */
    viewerSubscription: t_SubscriptionState | null
  },
  Extension<'PullRequest'>
>

/**
 * @name Lockable
 * @type INTERFACE
 */
type t_Lockable = t_Issue | t_PullRequest

/**
 * @name LockReason
 * @type ENUM
 */
type t_LockReason = EnumType<'OFF_TOPIC' | 'TOO_HEATED' | 'RESOLVED' | 'SPAM'>

/**
 * @name App
 * @type OBJECT
 * @implements Node
 */
type t_App = FieldsType<
  {
    __typename: t_String<'App'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The description of the app.
     */
    description: t_String | null
    id: t_ID

    /**
     * The hex color code, without the leading '#', for the logo background.
     */
    logoBackgroundColor: t_String

    /**
     * A URL pointing to the app's logo.
     */
    logoUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * The name of the app.
     */
    name: t_String

    /**
     * A slug based on the name of the app for use in URLs.
     */
    slug: t_String

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The URL to the app's homepage.
     */
    url: t_URI
  },
  Extension<'App'>
>

/**
 * @name MarketplaceListing
 * @type OBJECT
 * @implements Node
 */
type t_MarketplaceListing = FieldsType<
  {
    __typename: t_String<'MarketplaceListing'>

    /**
     * The GitHub App this listing represents.
     */
    app: t_App | null

    /**
     * URL to the listing owner's company site.
     */
    companyUrl: t_URI | null

    /**
     * The HTTP path for configuring access to the listing's integration or OAuth app
     */
    configurationResourcePath: t_URI

    /**
     * The HTTP URL for configuring access to the listing's integration or OAuth app
     */
    configurationUrl: t_URI

    /**
     * URL to the listing's documentation.
     */
    documentationUrl: t_URI | null

    /**
     * The listing's detailed description.
     */
    extendedDescription: t_String | null

    /**
     * The listing's detailed description rendered to HTML.
     */
    extendedDescriptionHTML: t_HTML

    /**
     * The listing's introductory description.
     */
    fullDescription: t_String

    /**
     * The listing's introductory description rendered to HTML.
     */
    fullDescriptionHTML: t_HTML

    /**
     * @deprecated `hasApprovalBeenRequested` will be removed. Use `isVerificationPendingFromDraft` instead. Removal on 2019-10-01 UTC.
     * Whether this listing has been submitted for review from GitHub for approval to be displayed in the Marketplace.
     */
    hasApprovalBeenRequested: t_Boolean

    /**
     * Does this listing have any plans with a free trial?
     */
    hasPublishedFreeTrialPlans: t_Boolean

    /**
     * Does this listing have a terms of service link?
     */
    hasTermsOfService: t_Boolean

    /**
     * A technical description of how this app works with GitHub.
     */
    howItWorks: t_String | null

    /**
     * The listing's technical description rendered to HTML.
     */
    howItWorksHTML: t_HTML
    id: t_ID

    /**
     * URL to install the product to the viewer's account or organization.
     */
    installationUrl: t_URI | null

    /**
     * Whether this listing's app has been installed for the current viewer
     */
    installedForViewer: t_Boolean

    /**
     * @deprecated `isApproved` will be removed. Use `isPublic` instead. Removal on 2019-10-01 UTC.
     * Whether this listing has been approved for display in the Marketplace.
     */
    isApproved: t_Boolean

    /**
     * Whether this listing has been removed from the Marketplace.
     */
    isArchived: t_Boolean

    /**
     * @deprecated `isDelisted` will be removed. Use `isArchived` instead. Removal on 2019-10-01 UTC.
     * Whether this listing has been removed from the Marketplace.
     */
    isDelisted: t_Boolean

    /**
     * Whether this listing is still an editable draft that has not been submitted for review and is not publicly visible in the Marketplace.
     */
    isDraft: t_Boolean

    /**
     * Whether the product this listing represents is available as part of a paid plan.
     */
    isPaid: t_Boolean

    /**
     * Whether this listing has been approved for display in the Marketplace.
     */
    isPublic: t_Boolean

    /**
     * Whether this listing has been rejected by GitHub for display in the Marketplace.
     */
    isRejected: t_Boolean

    /**
     * Whether this listing has been approved for unverified display in the Marketplace.
     */
    isUnverified: t_Boolean

    /**
     * Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace.
     */
    isUnverifiedPending: t_Boolean

    /**
     * Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace.
     */
    isVerificationPendingFromDraft: t_Boolean

    /**
     * Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace.
     */
    isVerificationPendingFromUnverified: t_Boolean

    /**
     * Whether this listing has been approved for verified display in the Marketplace.
     */
    isVerified: t_Boolean

    /**
     * The hex color code, without the leading '#', for the logo background.
     */
    logoBackgroundColor: t_String

    /**
     * URL for the listing's logo image.
     */
    logoUrl: FieldsTypeArg<{ size?: number | null }, t_URI | null>

    /**
     * The listing's full name.
     */
    name: t_String

    /**
     * The listing's very short description without a trailing period or ampersands.
     */
    normalizedShortDescription: t_String

    /**
     * URL to the listing's detailed pricing.
     */
    pricingUrl: t_URI | null

    /**
     * The category that best describes the listing.
     */
    primaryCategory: t_MarketplaceCategory

    /**
     * URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL.
     */
    privacyPolicyUrl: t_URI

    /**
     * The HTTP path for the Marketplace listing.
     */
    resourcePath: t_URI

    /**
     * The URLs for the listing's screenshots.
     */
    screenshotUrls: (t_String | null)[]

    /**
     * An alternate category that describes the listing.
     */
    secondaryCategory: t_MarketplaceCategory | null

    /**
     * The listing's very short description.
     */
    shortDescription: t_String

    /**
     * The short name of the listing used in its URL.
     */
    slug: t_String

    /**
     * URL to the listing's status page.
     */
    statusUrl: t_URI | null

    /**
     * An email address for support for this listing's app.
     */
    supportEmail: t_String | null

    /**
     * Either a URL or an email address for support for this listing's app, may return an empty string for listings that do not require a support URL.
     */
    supportUrl: t_URI

    /**
     * URL to the listing's terms of service.
     */
    termsOfServiceUrl: t_URI | null

    /**
     * The HTTP URL for the Marketplace listing.
     */
    url: t_URI

    /**
     * Can the current viewer add plans for this Marketplace listing.
     */
    viewerCanAddPlans: t_Boolean

    /**
     * Can the current viewer approve this Marketplace listing.
     */
    viewerCanApprove: t_Boolean

    /**
     * Can the current viewer delist this Marketplace listing.
     */
    viewerCanDelist: t_Boolean

    /**
     * Can the current viewer edit this Marketplace listing.
     */
    viewerCanEdit: t_Boolean

    /**
     * Can the current viewer edit the primary and secondary category of this
     * Marketplace listing.
     *
     */
    viewerCanEditCategories: t_Boolean

    /**
     * Can the current viewer edit the plans for this Marketplace listing.
     */
    viewerCanEditPlans: t_Boolean

    /**
     * Can the current viewer return this Marketplace listing to draft state
     * so it becomes editable again.
     *
     */
    viewerCanRedraft: t_Boolean

    /**
     * Can the current viewer reject this Marketplace listing by returning it to
     * an editable draft state or rejecting it entirely.
     *
     */
    viewerCanReject: t_Boolean

    /**
     * Can the current viewer request this listing be reviewed for display in
     * the Marketplace as verified.
     *
     */
    viewerCanRequestApproval: t_Boolean

    /**
     * Indicates whether the current user has an active subscription to this Marketplace listing.
     *
     */
    viewerHasPurchased: t_Boolean

    /**
     * Indicates if the current user has purchased a subscription to this Marketplace listing
     * for all of the organizations the user owns.
     *
     */
    viewerHasPurchasedForAllOrganizations: t_Boolean

    /**
     * Does the current viewer role allow them to administer this Marketplace listing.
     *
     */
    viewerIsListingAdmin: t_Boolean
  },
  Extension<'MarketplaceListing'>
>

/**
 * @name SponsorsTier
 * @type OBJECT
 * @implements Node
 */
type t_SponsorsTier = FieldsType<
  {
    __typename: t_String<'SponsorsTier'>

    /**
     * SponsorsTier information only visible to users that can administer the associated Sponsors listing.
     */
    adminInfo: t_SponsorsTierAdminInfo | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The description of the tier.
     */
    description: t_String

    /**
     * The tier description rendered to HTML
     */
    descriptionHTML: t_HTML
    id: t_ID

    /**
     * How much this tier costs per month in cents.
     */
    monthlyPriceInCents: t_Int

    /**
     * How much this tier costs per month in dollars.
     */
    monthlyPriceInDollars: t_Int

    /**
     * The name of the tier.
     */
    name: t_String

    /**
     * The sponsors listing that this tier belongs to.
     */
    sponsorsListing: t_SponsorsListing

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'SponsorsTier'>
>

/**
 * @name SponsorsListing
 * @type OBJECT
 * @implements Node
 */
type t_SponsorsListing = FieldsType<
  {
    __typename: t_String<'SponsorsListing'>

    /**
     * The full description of the listing.
     */
    fullDescription: t_String

    /**
     * The full description of the listing rendered to HTML.
     */
    fullDescriptionHTML: t_HTML
    id: t_ID

    /**
     * The listing's full name.
     */
    name: t_String

    /**
     * The short description of the listing.
     */
    shortDescription: t_String

    /**
     * The short name of the listing.
     */
    slug: t_String

    /**
     * The published tiers for this GitHub Sponsors listing.
     */
    tiers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: SponsorsTierOrder | null
      },
      t_SponsorsTierConnection | null
    >
  },
  Extension<'SponsorsListing'>
>

/**
 * @name Sponsorable
 * @type INTERFACE
 */
type t_Sponsorable = t_Organization | t_User

/**
 * @name SponsorsTierConnection
 * @type OBJECT
 */
type t_SponsorsTierConnection = FieldsType<
  {
    __typename: t_String<'SponsorsTierConnection'>

    /**
     * A list of edges.
     */
    edges: (t_SponsorsTierEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_SponsorsTier | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'SponsorsTierConnection'>
>

/**
 * @name SponsorsTierEdge
 * @type OBJECT
 */
type t_SponsorsTierEdge = FieldsType<
  {
    __typename: t_String<'SponsorsTierEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_SponsorsTier | null
  },
  Extension<'SponsorsTierEdge'>
>

/**
 * @name Sponsorship
 * @type OBJECT
 * @implements Node
 */
type t_Sponsorship = FieldsType<
  {
    __typename: t_String<'Sponsorship'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * The entity that is being sponsored
     */
    maintainer: t_User

    /**
     * The privacy level for this sponsorship.
     */
    privacyLevel: t_SponsorshipPrivacy

    /**
     * The entity that is sponsoring. Returns null if the sponsorship is private
     */
    sponsor: t_User | null

    /**
     * The associated sponsorship tier
     */
    tier: t_SponsorsTier | null
  },
  Extension<'Sponsorship'>
>

/**
 * @name SponsorshipPrivacy
 * @type ENUM
 */
type t_SponsorshipPrivacy = EnumType<'PUBLIC' | 'PRIVATE'>

/**
 * @name SponsorshipConnection
 * @type OBJECT
 */
type t_SponsorshipConnection = FieldsType<
  {
    __typename: t_String<'SponsorshipConnection'>

    /**
     * A list of edges.
     */
    edges: (t_SponsorshipEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Sponsorship | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'SponsorshipConnection'>
>

/**
 * @name SponsorshipEdge
 * @type OBJECT
 */
type t_SponsorshipEdge = FieldsType<
  {
    __typename: t_String<'SponsorshipEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Sponsorship | null
  },
  Extension<'SponsorshipEdge'>
>

/**
 * @name SponsorshipOrder
 * @type INPUT_OBJECT
 */
export type SponsorshipOrder = {
  field: SponsorshipOrderField
  direction: OrderDirection
}

/**
 * @name SponsorshipOrderField
 * @type ENUM
 */
type t_SponsorshipOrderField = EnumType<'CREATED_AT'>

/**
 * @name Organization
 * @type OBJECT
 * @implements Node, Actor, RegistryPackageOwner, RegistryPackageSearch, ProjectOwner, RepositoryOwner, UniformResourceLocatable, MemberStatusable, ProfileOwner, Sponsorable
 */
type t_Organization = FieldsType<
  {
    __typename: t_String<'Organization'>

    /**
     * Determine if this repository owner has any items that can be pinned to their profile.
     */
    anyPinnableItems: FieldsTypeArg<
      { type?: PinnableItemType | null },
      t_Boolean
    >

    /**
     * Audit log entries of the organization
     */
    auditLog: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
        orderBy?: AuditLogOrder | null
      },
      t_OrganizationAuditEntryConnection
    >

    /**
     * A URL pointing to the organization's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The organization's public profile description.
     */
    description: t_String | null

    /**
     * The organization's public profile description rendered to HTML.
     */
    descriptionHTML: t_String | null

    /**
     * The organization's public email.
     */
    email: t_String | null
    id: t_ID

    /**
     * Whether the organization has verified its profile email and website.
     */
    isVerified: t_Boolean

    /**
     * Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity.
     */
    itemShowcase: t_ProfileItemShowcase

    /**
     * The organization's public profile location.
     */
    location: t_String | null

    /**
     * The organization's login name.
     */
    login: t_String

    /**
     * Get the status messages members of this entity have set that are either public or visible only to the organization.
     */
    memberStatuses: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: UserStatusOrder | null
      },
      t_UserStatusConnection
    >

    /**
     * A list of users who are members of this organization.
     */
    membersWithRole: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_OrganizationMemberConnection
    >

    /**
     * The organization's public profile name.
     */
    name: t_String | null

    /**
     * The HTTP path creating a new team
     */
    newTeamResourcePath: t_URI

    /**
     * The HTTP URL creating a new team
     */
    newTeamUrl: t_URI

    /**
     * The billing email for the organization.
     */
    organizationBillingEmail: t_String | null

    /**
     * A list of users who have been invited to join this organization.
     */
    pendingMembers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * A list of repositories and gists this profile owner can pin to their profile.
     */
    pinnableItems: FieldsTypeArg<
      {
        types?: (PinnableItemType)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PinnableItemConnection
    >

    /**
     * A list of repositories and gists this profile owner has pinned to their profile
     */
    pinnedItems: FieldsTypeArg<
      {
        types?: (PinnableItemType)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PinnableItemConnection
    >

    /**
     * Returns how many more items this profile owner can pin to their profile.
     */
    pinnedItemsRemaining: t_Int

    /**
     * @deprecated pinnedRepositories will be removed Use ProfileOwner.pinnedItems instead. Removal on 2019-10-01 UTC.
     * A list of repositories this user has pinned to their profile
     */
    pinnedRepositories: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        affiliations?: (RepositoryAffiliation | null)[] | null
        ownerAffiliations?: (RepositoryAffiliation | null)[] | null
        isLocked?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RepositoryConnection
    >

    /**
     * Find project by number.
     */
    project: FieldsTypeArg<{ number: number }, t_Project | null>

    /**
     * A list of projects under the owner.
     */
    projects: FieldsTypeArg<
      {
        orderBy?: ProjectOrder | null
        search?: string | null
        states?: (ProjectState)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ProjectConnection
    >

    /**
     * The HTTP path listing organization's projects
     */
    projectsResourcePath: t_URI

    /**
     * The HTTP URL listing organization's projects
     */
    projectsUrl: t_URI

    /**
     * A list of registry packages under the owner.
     */
    registryPackages: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        name?: string | null
        names?: (string | null)[] | null
        repositoryId?: string | null
        packageType?: RegistryPackageType | null
        registryPackageType?: string | null
        publicOnly?: boolean | null
      },
      t_RegistryPackageConnection
    >

    /**
     * A list of registry packages for a particular search query.
     */
    registryPackagesForQuery: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
        packageType?: RegistryPackageType | null
      },
      t_RegistryPackageConnection
    >

    /**
     * A list of repositories that the user owns.
     */
    repositories: FieldsTypeArg<
      {
        privacy?: RepositoryPrivacy | null
        orderBy?: RepositoryOrder | null
        affiliations?: (RepositoryAffiliation | null)[] | null
        ownerAffiliations?: (RepositoryAffiliation | null)[] | null
        isLocked?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        isFork?: boolean | null
      },
      t_RepositoryConnection
    >

    /**
     * Find Repository.
     */
    repository: FieldsTypeArg<{ name: string }, t_Repository | null>

    /**
     * When true the organization requires all members, billing managers, and outside collaborators to enable two-factor authentication.
     */
    requiresTwoFactorAuthentication: t_Boolean | null

    /**
     * The HTTP path for this organization.
     */
    resourcePath: t_URI

    /**
     * The Organization's SAML identity providers
     */
    samlIdentityProvider: t_OrganizationIdentityProvider | null

    /**
     * The GitHub Sponsors listing for this user.
     */
    sponsorsListing: t_SponsorsListing | null

    /**
     * This object's sponsorships as the maintainer.
     */
    sponsorshipsAsMaintainer: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        includePrivate?: boolean | null
        orderBy?: SponsorshipOrder | null
      },
      t_SponsorshipConnection
    >

    /**
     * This object's sponsorships as the sponsor.
     */
    sponsorshipsAsSponsor: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: SponsorshipOrder | null
      },
      t_SponsorshipConnection
    >

    /**
     * Find an organization's team by its slug.
     */
    team: FieldsTypeArg<{ slug: string }, t_Team | null>

    /**
     * A list of teams in this organization.
     */
    teams: FieldsTypeArg<
      {
        privacy?: TeamPrivacy | null
        role?: TeamRole | null
        query?: string | null
        userLogins?: (string)[] | null
        orderBy?: TeamOrder | null
        ldapMapped?: boolean | null
        rootTeamsOnly?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_TeamConnection
    >

    /**
     * The HTTP path listing organization's teams
     */
    teamsResourcePath: t_URI

    /**
     * The HTTP URL listing organization's teams
     */
    teamsUrl: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this organization.
     */
    url: t_URI

    /**
     * Organization is adminable by the viewer.
     */
    viewerCanAdminister: t_Boolean

    /**
     * Can the viewer pin repositories and gists to the profile?
     */
    viewerCanChangePinnedItems: t_Boolean

    /**
     * Can the current viewer create new projects on this owner.
     */
    viewerCanCreateProjects: t_Boolean

    /**
     * Viewer can create repositories on this organization
     */
    viewerCanCreateRepositories: t_Boolean

    /**
     * Viewer can create teams on this organization.
     */
    viewerCanCreateTeams: t_Boolean

    /**
     * Viewer is an active member of this organization.
     */
    viewerIsAMember: t_Boolean

    /**
     * The organization's public profile URL.
     */
    websiteUrl: t_URI | null
  },
  Extension<'Organization'>
>

/**
 * @name RegistryPackageSearch
 * @type INTERFACE
 */
type t_RegistryPackageSearch = t_Organization | t_Repository | t_User

/**
 * @name Release
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_Release = FieldsType<
  {
    __typename: t_String<'Release'>

    /**
     * The author of the release
     */
    author: t_User | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The description of the release.
     */
    description: t_String | null

    /**
     * The description of this release rendered to HTML.
     */
    descriptionHTML: t_HTML | null
    id: t_ID

    /**
     * Whether or not the release is a draft
     */
    isDraft: t_Boolean

    /**
     * Whether or not the release is a prerelease
     */
    isPrerelease: t_Boolean

    /**
     * The title of the release.
     */
    name: t_String | null

    /**
     * Identifies the date and time when the release was created.
     */
    publishedAt: t_DateTime | null

    /**
     * List of releases assets which are dependent on this release.
     */
    releaseAssets: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        name?: string | null
      },
      t_ReleaseAssetConnection
    >

    /**
     * The HTTP path for this issue
     */
    resourcePath: t_URI

    /**
     * A description of the release, rendered to HTML without any links in it.
     */
    shortDescriptionHTML: FieldsTypeArg<
      { limit?: number | null },
      t_HTML | null
    >

    /**
     * The Git tag the release points to
     */
    tag: t_Ref | null

    /**
     * The name of the release's Git tag
     */
    tagName: t_String

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this issue
     */
    url: t_URI
  },
  Extension<'Release'>
>

/**
 * @name Ref
 * @type OBJECT
 * @implements Node
 */
type t_Ref = FieldsType<
  {
    __typename: t_String<'Ref'>

    /**
     * A list of pull requests with this ref as the head ref.
     */
    associatedPullRequests: FieldsTypeArg<
      {
        states?: (PullRequestState)[] | null
        labels?: (string)[] | null
        headRefName?: string | null
        baseRefName?: string | null
        orderBy?: IssueOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestConnection
    >
    id: t_ID

    /**
     * The ref name.
     */
    name: t_String

    /**
     * The ref's prefix, such as `refs/heads/` or `refs/tags/`.
     */
    prefix: t_String

    /**
     * The repository the ref belongs to.
     */
    repository: t_Repository

    /**
     * The object the ref points to.
     */
    target: t_Blob | t_Commit | t_Tag | t_Tree
  },
  Extension<'Ref'>
>

/**
 * @name GitObject
 * @type INTERFACE
 */
type t_GitObject = t_Blob | t_Commit | t_Tag | t_Tree

/**
 * @name GitObjectID
 * @type SCALAR
 */
type t_GitObjectID<T extends any = any> = ScalarType<
  T,
  Extension<'GitObjectID'>
>

/**
 * @name RepositoryNode
 * @type INTERFACE
 */
type t_RepositoryNode =
  | t_CommitComment
  | t_CommitCommentThread
  | t_Issue
  | t_IssueComment
  | t_PullRequest
  | t_PullRequestCommitCommentThread
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_RepositoryVulnerabilityAlert

/**
 * @name Blob
 * @type OBJECT
 * @implements Node, GitObject
 */
type t_Blob = FieldsType<
  {
    __typename: t_String<'Blob'>

    /**
     * An abbreviated version of the Git object ID
     */
    abbreviatedOid: t_String

    /**
     * Byte size of Blob object
     */
    byteSize: t_Int

    /**
     * The HTTP path for this Git object
     */
    commitResourcePath: t_URI

    /**
     * The HTTP URL for this Git object
     */
    commitUrl: t_URI
    id: t_ID

    /**
     * Indicates whether the Blob is binary or text
     */
    isBinary: t_Boolean

    /**
     * Indicates whether the contents is truncated
     */
    isTruncated: t_Boolean

    /**
     * The Git object ID
     */
    oid: t_GitObjectID

    /**
     * The Repository the Git object belongs to
     */
    repository: t_Repository

    /**
     * UTF8 text data or null if the Blob is binary
     */
    text: t_String | null
  },
  Extension<'Blob'>
>

/**
 * @name Commit
 * @type OBJECT
 * @implements Node, GitObject, Subscribable, UniformResourceLocatable
 */
type t_Commit = FieldsType<
  {
    __typename: t_String<'Commit'>

    /**
     * An abbreviated version of the Git object ID
     */
    abbreviatedOid: t_String

    /**
     * The number of additions in this commit.
     */
    additions: t_Int

    /**
     * The pull requests associated with a commit
     */
    associatedPullRequests: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: PullRequestOrder | null
      },
      t_PullRequestConnection | null
    >

    /**
     * Authorship details of the commit.
     */
    author: t_GitActor | null

    /**
     * Check if the committer and the author match.
     */
    authoredByCommitter: t_Boolean

    /**
     * The datetime when this commit was authored.
     */
    authoredDate: t_DateTime

    /**
     * Fetches `git blame` information.
     */
    blame: FieldsTypeArg<{ path: string }, t_Blame>

    /**
     * The number of changed files in this commit.
     */
    changedFiles: t_Int

    /**
     * Comments made on the commit.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_CommitCommentConnection
    >

    /**
     * The HTTP path for this Git object
     */
    commitResourcePath: t_URI

    /**
     * The HTTP URL for this Git object
     */
    commitUrl: t_URI

    /**
     * The datetime when this commit was committed.
     */
    committedDate: t_DateTime

    /**
     * Check if commited via GitHub web UI.
     */
    committedViaWeb: t_Boolean

    /**
     * Committership details of the commit.
     */
    committer: t_GitActor | null

    /**
     * The number of deletions in this commit.
     */
    deletions: t_Int

    /**
     * The deployments associated with a commit.
     */
    deployments: FieldsTypeArg<
      {
        environments?: (string)[] | null
        orderBy?: DeploymentOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_DeploymentConnection | null
    >

    /**
     * The linear commit history starting from (and including) this commit, in the same order as `git log`.
     */
    history: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        path?: string | null
        author?: CommitAuthor | null
        since?: any | null
        until?: any | null
      },
      t_CommitHistoryConnection
    >
    id: t_ID

    /**
     * The Git commit message
     */
    message: t_String

    /**
     * The Git commit message body
     */
    messageBody: t_String

    /**
     * The commit message body rendered to HTML.
     */
    messageBodyHTML: t_HTML

    /**
     * The Git commit message headline
     */
    messageHeadline: t_String

    /**
     * The commit message headline rendered to HTML.
     */
    messageHeadlineHTML: t_HTML

    /**
     * The Git object ID
     */
    oid: t_GitObjectID

    /**
     * The parents of a commit.
     */
    parents: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_CommitConnection
    >

    /**
     * The datetime when this commit was pushed.
     */
    pushedDate: t_DateTime | null

    /**
     * The Repository this commit belongs to
     */
    repository: t_Repository

    /**
     * The HTTP path for this commit
     */
    resourcePath: t_URI

    /**
     * Commit signing information, if present.
     */
    signature: t_GpgSignature | t_SmimeSignature | t_UnknownSignature | null

    /**
     * Status information for this commit
     */
    status: t_Status | null

    /**
     * Returns a URL to download a tarball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    tarballUrl: t_URI

    /**
     * Commit's root Tree
     */
    tree: t_Tree

    /**
     * The HTTP path for the tree of this commit
     */
    treeResourcePath: t_URI

    /**
     * The HTTP URL for the tree of this commit
     */
    treeUrl: t_URI

    /**
     * The HTTP URL for this commit
     */
    url: t_URI

    /**
     * Check if the viewer is able to change their subscription status for the repository.
     */
    viewerCanSubscribe: t_Boolean

    /**
     * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
     */
    viewerSubscription: t_SubscriptionState | null

    /**
     * Returns a URL to download a zipball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    zipballUrl: t_URI
  },
  Extension<'Commit'>
>

/**
 * @name Subscribable
 * @type INTERFACE
 */
type t_Subscribable =
  | t_Commit
  | t_Issue
  | t_PullRequest
  | t_Repository
  | t_Team
  | t_TeamDiscussion

/**
 * @name SubscriptionState
 * @type ENUM
 */
type t_SubscriptionState = EnumType<'UNSUBSCRIBED' | 'SUBSCRIBED' | 'IGNORED'>

/**
 * @name Tree
 * @type OBJECT
 * @implements Node, GitObject
 */
type t_Tree = FieldsType<
  {
    __typename: t_String<'Tree'>

    /**
     * An abbreviated version of the Git object ID
     */
    abbreviatedOid: t_String

    /**
     * The HTTP path for this Git object
     */
    commitResourcePath: t_URI

    /**
     * The HTTP URL for this Git object
     */
    commitUrl: t_URI

    /**
     * A list of tree entries.
     */
    entries: (t_TreeEntry)[] | null
    id: t_ID

    /**
     * The Git object ID
     */
    oid: t_GitObjectID

    /**
     * The Repository the Git object belongs to
     */
    repository: t_Repository
  },
  Extension<'Tree'>
>

/**
 * @name TreeEntry
 * @type OBJECT
 */
type t_TreeEntry = FieldsType<
  {
    __typename: t_String<'TreeEntry'>

    /**
     * Entry file mode.
     */
    mode: t_Int

    /**
     * Entry file name.
     */
    name: t_String

    /**
     * Entry file object.
     */
    object: t_Blob | t_Commit | t_Tag | t_Tree | null

    /**
     * Entry file Git object ID.
     */
    oid: t_GitObjectID

    /**
     * The Repository the tree entry belongs to
     */
    repository: t_Repository

    /**
     * Entry file type.
     */
    type: t_String
  },
  Extension<'TreeEntry'>
>

/**
 * @name GitActor
 * @type OBJECT
 */
type t_GitActor = FieldsType<
  {
    __typename: t_String<'GitActor'>

    /**
     * A URL pointing to the author's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * The timestamp of the Git action (authoring or committing).
     */
    date: t_GitTimestamp | null

    /**
     * The email in the Git commit.
     */
    email: t_String | null

    /**
     * The name in the Git commit.
     */
    name: t_String | null

    /**
     * The GitHub user corresponding to the email field. Null if no such user exists.
     */
    user: t_User | null
  },
  Extension<'GitActor'>
>

/**
 * @name GitTimestamp
 * @type SCALAR
 */
type t_GitTimestamp<T extends any = any> = ScalarType<
  T,
  Extension<'GitTimestamp'>
>

/**
 * @name CommitConnection
 * @type OBJECT
 */
type t_CommitConnection = FieldsType<
  {
    __typename: t_String<'CommitConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CommitEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Commit | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CommitConnection'>
>

/**
 * @name CommitEdge
 * @type OBJECT
 */
type t_CommitEdge = FieldsType<
  {
    __typename: t_String<'CommitEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Commit | null
  },
  Extension<'CommitEdge'>
>

/**
 * @name CommitHistoryConnection
 * @type OBJECT
 */
type t_CommitHistoryConnection = FieldsType<
  {
    __typename: t_String<'CommitHistoryConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CommitEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Commit | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CommitHistoryConnection'>
>

/**
 * @name CommitAuthor
 * @type INPUT_OBJECT
 */
export type CommitAuthor = { id: string | null; emails: (string)[] | null }

/**
 * @name CommitCommentConnection
 * @type OBJECT
 */
type t_CommitCommentConnection = FieldsType<
  {
    __typename: t_String<'CommitCommentConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CommitCommentEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_CommitComment | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CommitCommentConnection'>
>

/**
 * @name CommitCommentEdge
 * @type OBJECT
 */
type t_CommitCommentEdge = FieldsType<
  {
    __typename: t_String<'CommitCommentEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_CommitComment | null
  },
  Extension<'CommitCommentEdge'>
>

/**
 * @name CommitComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
type t_CommitComment = FieldsType<
  {
    __typename: t_String<'CommitComment'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the subject of the comment.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * Identifies the comment body.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body rendered to text.
     */
    bodyText: t_String

    /**
     * Identifies the commit associated with the comment, if the commit exists.
     */
    commit: t_Commit | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * Returns whether or not a comment has been minimized.
     */
    isMinimized: t_Boolean

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * Returns why the comment was minimized.
     */
    minimizedReason: t_String | null

    /**
     * Identifies the file path associated with the comment.
     */
    path: t_String | null

    /**
     * Identifies the line position associated with the comment.
     */
    position: t_Int | null

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The repository associated with this node.
     */
    repository: t_Repository

    /**
     * The HTTP path permalink for this commit comment.
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL permalink for this commit comment.
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Check if the current viewer can minimize this object.
     */
    viewerCanMinimize: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean
  },
  Extension<'CommitComment'>
>

/**
 * @name Deletable
 * @type INTERFACE
 */
type t_Deletable =
  | t_CommitComment
  | t_GistComment
  | t_IssueComment
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_TeamDiscussion
  | t_TeamDiscussionComment

/**
 * @name Reactable
 * @type INTERFACE
 */
type t_Reactable =
  | t_CommitComment
  | t_Issue
  | t_IssueComment
  | t_PullRequest
  | t_PullRequestReview
  | t_PullRequestReviewComment
  | t_TeamDiscussion
  | t_TeamDiscussionComment

/**
 * @name ReactionGroup
 * @type OBJECT
 */
type t_ReactionGroup = FieldsType<
  {
    __typename: t_String<'ReactionGroup'>

    /**
     * Identifies the emoji reaction.
     */
    content: t_ReactionContent

    /**
     * Identifies when the reaction was created.
     */
    createdAt: t_DateTime | null

    /**
     * The subject that was reacted to.
     */
    subject:
      | t_CommitComment
      | t_Issue
      | t_IssueComment
      | t_PullRequest
      | t_PullRequestReview
      | t_PullRequestReviewComment
      | t_TeamDiscussion
      | t_TeamDiscussionComment

    /**
     * Users who have reacted to the reaction subject with the emotion represented by this reaction group
     */
    users: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ReactingUserConnection
    >

    /**
     * Whether or not the authenticated user has left a reaction on the subject.
     */
    viewerHasReacted: t_Boolean
  },
  Extension<'ReactionGroup'>
>

/**
 * @name ReactionContent
 * @type ENUM
 */
type t_ReactionContent = EnumType<
  | 'THUMBS_UP'
  | 'THUMBS_DOWN'
  | 'LAUGH'
  | 'HOORAY'
  | 'CONFUSED'
  | 'HEART'
  | 'ROCKET'
  | 'EYES'
>

/**
 * @name ReactingUserConnection
 * @type OBJECT
 */
type t_ReactingUserConnection = FieldsType<
  {
    __typename: t_String<'ReactingUserConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ReactingUserEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ReactingUserConnection'>
>

/**
 * @name ReactingUserEdge
 * @type OBJECT
 */
type t_ReactingUserEdge = FieldsType<
  {
    __typename: t_String<'ReactingUserEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String
    node: t_User

    /**
     * The moment when the user made the reaction.
     */
    reactedAt: t_DateTime
  },
  Extension<'ReactingUserEdge'>
>

/**
 * @name ReactionConnection
 * @type OBJECT
 */
type t_ReactionConnection = FieldsType<
  {
    __typename: t_String<'ReactionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ReactionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Reaction | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int

    /**
     * Whether or not the authenticated user has left a reaction on the subject.
     */
    viewerHasReacted: t_Boolean
  },
  Extension<'ReactionConnection'>
>

/**
 * @name ReactionEdge
 * @type OBJECT
 */
type t_ReactionEdge = FieldsType<
  {
    __typename: t_String<'ReactionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Reaction | null
  },
  Extension<'ReactionEdge'>
>

/**
 * @name Reaction
 * @type OBJECT
 * @implements Node
 */
type t_Reaction = FieldsType<
  {
    __typename: t_String<'Reaction'>

    /**
     * Identifies the emoji reaction.
     */
    content: t_ReactionContent

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * The reactable piece of content
     */
    reactable:
      | t_CommitComment
      | t_Issue
      | t_IssueComment
      | t_PullRequest
      | t_PullRequestReview
      | t_PullRequestReviewComment
      | t_TeamDiscussion
      | t_TeamDiscussionComment

    /**
     * Identifies the user who created this reaction.
     */
    user: t_User | null
  },
  Extension<'Reaction'>
>

/**
 * @name ReactionOrder
 * @type INPUT_OBJECT
 */
export type ReactionOrder = {
  field: ReactionOrderField
  direction: OrderDirection
}

/**
 * @name ReactionOrderField
 * @type ENUM
 */
type t_ReactionOrderField = EnumType<'CREATED_AT'>

/**
 * @name RepositoryInfo
 * @type INTERFACE
 */
type t_RepositoryInfo = t_Repository

/**
 * @name RepositoryVisibility
 * @type ENUM
 */
type t_RepositoryVisibility = EnumType<'PRIVATE' | 'PUBLIC' | 'INTERNAL'>

/**
 * @name RepositoryLockReason
 * @type ENUM
 */
type t_RepositoryLockReason = EnumType<
  'MOVING' | 'BILLING' | 'RENAME' | 'MIGRATING'
>

/**
 * @name License
 * @type OBJECT
 * @implements Node
 */
type t_License = FieldsType<
  {
    __typename: t_String<'License'>

    /**
     * The full text of the license
     */
    body: t_String

    /**
     * The conditions set by the license
     */
    conditions: (t_LicenseRule | null)[]

    /**
     * A human-readable description of the license
     */
    description: t_String | null

    /**
     * Whether the license should be featured
     */
    featured: t_Boolean

    /**
     * Whether the license should be displayed in license pickers
     */
    hidden: t_Boolean
    id: t_ID

    /**
     * Instructions on how to implement the license
     */
    implementation: t_String | null

    /**
     * The lowercased SPDX ID of the license
     */
    key: t_String

    /**
     * The limitations set by the license
     */
    limitations: (t_LicenseRule | null)[]

    /**
     * The license full name specified by <https://spdx.org/licenses>
     */
    name: t_String

    /**
     * Customary short name if applicable (e.g, GPLv3)
     */
    nickname: t_String | null

    /**
     * The permissions set by the license
     */
    permissions: (t_LicenseRule | null)[]

    /**
     * Whether the license is a pseudo-license placeholder (e.g., other, no-license)
     */
    pseudoLicense: t_Boolean

    /**
     * Short identifier specified by <https://spdx.org/licenses>
     */
    spdxId: t_String | null

    /**
     * URL to the license on <https://choosealicense.com>
     */
    url: t_URI | null
  },
  Extension<'License'>
>

/**
 * @name LicenseRule
 * @type OBJECT
 */
type t_LicenseRule = FieldsType<
  {
    __typename: t_String<'LicenseRule'>

    /**
     * A description of the rule
     */
    description: t_String

    /**
     * The machine-readable rule key
     */
    key: t_String

    /**
     * The human-readable rule label
     */
    label: t_String
  },
  Extension<'LicenseRule'>
>

/**
 * @name RepositoryOwner
 * @type INTERFACE
 */
type t_RepositoryOwner = t_Organization | t_User

/**
 * @name RepositoryConnection
 * @type OBJECT
 */
type t_RepositoryConnection = FieldsType<
  {
    __typename: t_String<'RepositoryConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RepositoryEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Repository | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int

    /**
     * The total size in kilobytes of all repositories in the connection.
     */
    totalDiskUsage: t_Int
  },
  Extension<'RepositoryConnection'>
>

/**
 * @name RepositoryEdge
 * @type OBJECT
 */
type t_RepositoryEdge = FieldsType<
  {
    __typename: t_String<'RepositoryEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Repository | null
  },
  Extension<'RepositoryEdge'>
>

/**
 * @name RepositoryPrivacy
 * @type ENUM
 */
type t_RepositoryPrivacy = EnumType<'PUBLIC' | 'PRIVATE'>

/**
 * @name RepositoryOrder
 * @type INPUT_OBJECT
 */
export type RepositoryOrder = {
  field: RepositoryOrderField
  direction: OrderDirection
}

/**
 * @name RepositoryOrderField
 * @type ENUM
 */
type t_RepositoryOrderField = EnumType<
  'CREATED_AT' | 'UPDATED_AT' | 'PUSHED_AT' | 'NAME' | 'STARGAZERS'
>

/**
 * @name RepositoryAffiliation
 * @type ENUM
 */
type t_RepositoryAffiliation = EnumType<
  'OWNER' | 'COLLABORATOR' | 'ORGANIZATION_MEMBER'
>

/**
 * @name RepositoryTopicConnection
 * @type OBJECT
 */
type t_RepositoryTopicConnection = FieldsType<
  {
    __typename: t_String<'RepositoryTopicConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RepositoryTopicEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RepositoryTopic | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RepositoryTopicConnection'>
>

/**
 * @name RepositoryTopicEdge
 * @type OBJECT
 */
type t_RepositoryTopicEdge = FieldsType<
  {
    __typename: t_String<'RepositoryTopicEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RepositoryTopic | null
  },
  Extension<'RepositoryTopicEdge'>
>

/**
 * @name RepositoryTopic
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_RepositoryTopic = FieldsType<
  {
    __typename: t_String<'RepositoryTopic'>
    id: t_ID

    /**
     * The HTTP path for this repository-topic.
     */
    resourcePath: t_URI

    /**
     * The topic.
     */
    topic: t_Topic

    /**
     * The HTTP URL for this repository-topic.
     */
    url: t_URI
  },
  Extension<'RepositoryTopic'>
>

/**
 * @name Topic
 * @type OBJECT
 * @implements Node, Starrable
 */
type t_Topic = FieldsType<
  {
    __typename: t_String<'Topic'>
    id: t_ID

    /**
     * The topic's name.
     */
    name: t_String

    /**
     * A list of related topics, including aliases of this topic, sorted with the most relevant
     * first. Returns up to 10 Topics.
     *
     */
    relatedTopics: FieldsTypeArg<{ first?: number | null }, (t_Topic)[]>

    /**
     * A list of users who have starred this starrable.
     */
    stargazers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: StarOrder | null
      },
      t_StargazerConnection
    >

    /**
     * Returns a boolean indicating whether the viewing user has starred this starrable.
     */
    viewerHasStarred: t_Boolean
  },
  Extension<'Topic'>
>

/**
 * @name Starrable
 * @type INTERFACE
 */
type t_Starrable = t_Gist | t_Repository | t_Topic

/**
 * @name StargazerConnection
 * @type OBJECT
 */
type t_StargazerConnection = FieldsType<
  {
    __typename: t_String<'StargazerConnection'>

    /**
     * A list of edges.
     */
    edges: (t_StargazerEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'StargazerConnection'>
>

/**
 * @name StargazerEdge
 * @type OBJECT
 */
type t_StargazerEdge = FieldsType<
  {
    __typename: t_String<'StargazerEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String
    node: t_User

    /**
     * Identifies when the item was starred.
     */
    starredAt: t_DateTime
  },
  Extension<'StargazerEdge'>
>

/**
 * @name StarOrder
 * @type INPUT_OBJECT
 */
export type StarOrder = { field: StarOrderField; direction: OrderDirection }

/**
 * @name StarOrderField
 * @type ENUM
 */
type t_StarOrderField = EnumType<'STARRED_AT'>

/**
 * @name GitSignature
 * @type INTERFACE
 */
type t_GitSignature = t_GpgSignature | t_SmimeSignature | t_UnknownSignature

/**
 * @name GitSignatureState
 * @type ENUM
 */
type t_GitSignatureState = EnumType<
  | 'VALID'
  | 'INVALID'
  | 'MALFORMED_SIG'
  | 'UNKNOWN_KEY'
  | 'BAD_EMAIL'
  | 'UNVERIFIED_EMAIL'
  | 'NO_USER'
  | 'UNKNOWN_SIG_TYPE'
  | 'UNSIGNED'
  | 'GPGVERIFY_UNAVAILABLE'
  | 'GPGVERIFY_ERROR'
  | 'NOT_SIGNING_KEY'
  | 'EXPIRED_KEY'
  | 'OCSP_PENDING'
  | 'OCSP_ERROR'
  | 'BAD_CERT'
  | 'OCSP_REVOKED'
>

/**
 * @name Status
 * @type OBJECT
 * @implements Node
 */
type t_Status = FieldsType<
  {
    __typename: t_String<'Status'>

    /**
     * The commit this status is attached to.
     */
    commit: t_Commit | null

    /**
     * Looks up an individual status context by context name.
     */
    context: FieldsTypeArg<{ name: string }, t_StatusContext | null>

    /**
     * The individual status contexts for this commit.
     */
    contexts: (t_StatusContext)[]
    id: t_ID

    /**
     * The combined commit status.
     */
    state: t_StatusState
  },
  Extension<'Status'>
>

/**
 * @name StatusState
 * @type ENUM
 */
type t_StatusState = EnumType<
  'EXPECTED' | 'ERROR' | 'FAILURE' | 'PENDING' | 'SUCCESS'
>

/**
 * @name StatusContext
 * @type OBJECT
 * @implements Node
 */
type t_StatusContext = FieldsType<
  {
    __typename: t_String<'StatusContext'>

    /**
     * The avatar of the OAuth application or the user that created the status
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI | null>

    /**
     * This commit this status context is attached to.
     */
    commit: t_Commit | null

    /**
     * The name of this status context.
     */
    context: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The actor who created this status context.
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * The description for this status context.
     */
    description: t_String | null
    id: t_ID

    /**
     * The state of this status context.
     */
    state: t_StatusState

    /**
     * The URL for this status context.
     */
    targetUrl: t_URI | null
  },
  Extension<'StatusContext'>
>

/**
 * @name Bot
 * @type OBJECT
 * @implements Node, Actor, UniformResourceLocatable
 */
type t_Bot = FieldsType<
  {
    __typename: t_String<'Bot'>

    /**
     * A URL pointing to the GitHub App's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * The username of the actor.
     */
    login: t_String

    /**
     * The HTTP path for this bot
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this bot
     */
    url: t_URI
  },
  Extension<'Bot'>
>

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<'Float'>>

/**
 * @name PullRequestState
 * @type ENUM
 */
type t_PullRequestState = EnumType<'OPEN' | 'CLOSED' | 'MERGED'>

/**
 * @name Blame
 * @type OBJECT
 */
type t_Blame = FieldsType<
  {
    __typename: t_String<'Blame'>

    /**
     * The list of ranges from a Git blame.
     */
    ranges: (t_BlameRange)[]
  },
  Extension<'Blame'>
>

/**
 * @name BlameRange
 * @type OBJECT
 */
type t_BlameRange = FieldsType<
  {
    __typename: t_String<'BlameRange'>

    /**
     * Identifies the recency of the change, from 1 (new) to 10 (old). This is calculated as a 2-quantile and determines the length of distance between the median age of all the changes in the file and the recency of the current range's change.
     */
    age: t_Int

    /**
     * Identifies the line author
     */
    commit: t_Commit

    /**
     * The ending line for the range
     */
    endingLine: t_Int

    /**
     * The starting line for the range
     */
    startingLine: t_Int
  },
  Extension<'BlameRange'>
>

/**
 * @name DeploymentConnection
 * @type OBJECT
 */
type t_DeploymentConnection = FieldsType<
  {
    __typename: t_String<'DeploymentConnection'>

    /**
     * A list of edges.
     */
    edges: (t_DeploymentEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Deployment | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'DeploymentConnection'>
>

/**
 * @name DeploymentEdge
 * @type OBJECT
 */
type t_DeploymentEdge = FieldsType<
  {
    __typename: t_String<'DeploymentEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Deployment | null
  },
  Extension<'DeploymentEdge'>
>

/**
 * @name Deployment
 * @type OBJECT
 * @implements Node
 */
type t_Deployment = FieldsType<
  {
    __typename: t_String<'Deployment'>

    /**
     * Identifies the commit sha of the deployment.
     */
    commit: t_Commit | null

    /**
     * Identifies the oid of the deployment commit, even if the commit has been deleted.
     */
    commitOid: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the actor who triggered the deployment.
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The deployment description.
     */
    description: t_String | null

    /**
     * The environment to which this deployment was made.
     */
    environment: t_String | null
    id: t_ID

    /**
     * The latest status of this deployment.
     */
    latestStatus: t_DeploymentStatus | null

    /**
     * Extra information that a deployment system might need.
     */
    payload: t_String | null

    /**
     * Identifies the Ref of the deployment, if the deployment was created by ref.
     */
    ref: t_Ref | null

    /**
     * Identifies the repository associated with the deployment.
     */
    repository: t_Repository

    /**
     * The current state of the deployment.
     */
    state: t_DeploymentState | null

    /**
     * A list of statuses associated with the deployment.
     */
    statuses: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_DeploymentStatusConnection | null
    >

    /**
     * The deployment task.
     */
    task: t_String | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'Deployment'>
>

/**
 * @name DeploymentStatusConnection
 * @type OBJECT
 */
type t_DeploymentStatusConnection = FieldsType<
  {
    __typename: t_String<'DeploymentStatusConnection'>

    /**
     * A list of edges.
     */
    edges: (t_DeploymentStatusEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_DeploymentStatus | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'DeploymentStatusConnection'>
>

/**
 * @name DeploymentStatusEdge
 * @type OBJECT
 */
type t_DeploymentStatusEdge = FieldsType<
  {
    __typename: t_String<'DeploymentStatusEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_DeploymentStatus | null
  },
  Extension<'DeploymentStatusEdge'>
>

/**
 * @name DeploymentStatus
 * @type OBJECT
 * @implements Node
 */
type t_DeploymentStatus = FieldsType<
  {
    __typename: t_String<'DeploymentStatus'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the actor who triggered the deployment.
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the deployment associated with status.
     */
    deployment: t_Deployment

    /**
     * Identifies the description of the deployment.
     */
    description: t_String | null

    /**
     * Identifies the environment URL of the deployment.
     */
    environmentUrl: t_URI | null
    id: t_ID

    /**
     * Identifies the log URL of the deployment.
     */
    logUrl: t_URI | null

    /**
     * Identifies the current state of the deployment.
     */
    state: t_DeploymentStatusState

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'DeploymentStatus'>
>

/**
 * @name DeploymentStatusState
 * @type ENUM
 */
type t_DeploymentStatusState = EnumType<
  | 'PENDING'
  | 'SUCCESS'
  | 'FAILURE'
  | 'INACTIVE'
  | 'ERROR'
  | 'QUEUED'
  | 'IN_PROGRESS'
>

/**
 * @name DeploymentState
 * @type ENUM
 */
type t_DeploymentState = EnumType<
  | 'ABANDONED'
  | 'ACTIVE'
  | 'DESTROYED'
  | 'ERROR'
  | 'FAILURE'
  | 'INACTIVE'
  | 'PENDING'
  | 'QUEUED'
  | 'IN_PROGRESS'
>

/**
 * @name DeploymentOrder
 * @type INPUT_OBJECT
 */
export type DeploymentOrder = {
  field: DeploymentOrderField
  direction: OrderDirection
}

/**
 * @name DeploymentOrderField
 * @type ENUM
 */
type t_DeploymentOrderField = EnumType<'CREATED_AT'>

/**
 * @name PullRequestOrder
 * @type INPUT_OBJECT
 */
export type PullRequestOrder = {
  field: PullRequestOrderField
  direction: OrderDirection
}

/**
 * @name PullRequestOrderField
 * @type ENUM
 */
type t_PullRequestOrderField = EnumType<'CREATED_AT' | 'UPDATED_AT'>

/**
 * @name ReleaseAssetConnection
 * @type OBJECT
 */
type t_ReleaseAssetConnection = FieldsType<
  {
    __typename: t_String<'ReleaseAssetConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ReleaseAssetEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_ReleaseAsset | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ReleaseAssetConnection'>
>

/**
 * @name ReleaseAssetEdge
 * @type OBJECT
 */
type t_ReleaseAssetEdge = FieldsType<
  {
    __typename: t_String<'ReleaseAssetEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_ReleaseAsset | null
  },
  Extension<'ReleaseAssetEdge'>
>

/**
 * @name ReleaseAsset
 * @type OBJECT
 * @implements Node
 */
type t_ReleaseAsset = FieldsType<
  {
    __typename: t_String<'ReleaseAsset'>

    /**
     * The asset's content-type
     */
    contentType: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The number of times this asset was downloaded
     */
    downloadCount: t_Int

    /**
     * Identifies the URL where you can download the release asset via the browser.
     */
    downloadUrl: t_URI
    id: t_ID

    /**
     * Identifies the title of the release asset.
     */
    name: t_String

    /**
     * Release that the asset is associated with
     */
    release: t_Release | null

    /**
     * The size (in bytes) of the asset
     */
    size: t_Int

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The user that performed the upload
     */
    uploadedBy: t_User

    /**
     * Identifies the URL of the release asset.
     */
    url: t_URI
  },
  Extension<'ReleaseAsset'>
>

/**
 * @name RegistryPackageVersionConnection
 * @type OBJECT
 */
type t_RegistryPackageVersionConnection = FieldsType<
  {
    __typename: t_String<'RegistryPackageVersionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RegistryPackageVersionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RegistryPackageVersion | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RegistryPackageVersionConnection'>
>

/**
 * @name RegistryPackageVersionEdge
 * @type OBJECT
 */
type t_RegistryPackageVersionEdge = FieldsType<
  {
    __typename: t_String<'RegistryPackageVersionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RegistryPackageVersion | null
  },
  Extension<'RegistryPackageVersionEdge'>
>

/**
 * @name RegistryPackageVersion
 * @type OBJECT
 * @implements Node
 */
type t_RegistryPackageVersion = FieldsType<
  {
    __typename: t_String<'RegistryPackageVersion'>

    /**
     * list of dependencies for this package
     */
    dependencies: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        type?: RegistryPackageDependencyType | null
      },
      t_RegistryPackageDependencyConnection
    >

    /**
     * A file associated with this registry package version
     */
    fileByName: FieldsTypeArg<
      { filename: string },
      t_RegistryPackageFile | null
    >

    /**
     * List of files associated with this registry package version
     */
    files: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RegistryPackageFileConnection
    >
    id: t_ID

    /**
     * A single line of text to install this package version.
     */
    installationCommand: t_String | null

    /**
     * Identifies the package manifest for this package version.
     */
    manifest: t_String | null

    /**
     * Identifies the platform this version was built for.
     */
    platform: t_String | null

    /**
     * Indicates whether this version is a pre-release.
     */
    preRelease: t_Boolean

    /**
     * The README of this package version
     */
    readme: t_String | null

    /**
     * The HTML README of this package version
     */
    readmeHtml: t_HTML | null

    /**
     * Registry package associated with this version.
     */
    registryPackage: t_RegistryPackage | null

    /**
     * Release associated with this package.
     */
    release: t_Release | null

    /**
     * Identifies the sha256.
     */
    sha256: t_String | null

    /**
     * Identifies the size.
     */
    size: t_Int | null

    /**
     * Statistics about package activity.
     */
    statistics: t_RegistryPackageVersionStatistics | null

    /**
     * Identifies the package version summary.
     */
    summary: t_String | null

    /**
     * Time at which the most recent file upload for this package version finished
     */
    updatedAt: t_DateTime

    /**
     * Identifies the version number.
     */
    version: t_String

    /**
     * Can the current viewer edit this Package version.
     */
    viewerCanEdit: t_Boolean
  },
  Extension<'RegistryPackageVersion'>
>

/**
 * @name RegistryPackageVersionStatistics
 * @type OBJECT
 */
type t_RegistryPackageVersionStatistics = FieldsType<
  {
    __typename: t_String<'RegistryPackageVersionStatistics'>

    /**
     * Number of times the package was downloaded this month.
     */
    downloadsThisMonth: t_Int

    /**
     * Number of times the package was downloaded this week.
     */
    downloadsThisWeek: t_Int

    /**
     * Number of times the package was downloaded this year.
     */
    downloadsThisYear: t_Int

    /**
     * Number of times the package was downloaded today.
     */
    downloadsToday: t_Int

    /**
     * Number of times the package was downloaded since it was created.
     */
    downloadsTotalCount: t_Int
  },
  Extension<'RegistryPackageVersionStatistics'>
>

/**
 * @name RegistryPackageDependencyConnection
 * @type OBJECT
 */
type t_RegistryPackageDependencyConnection = FieldsType<
  {
    __typename: t_String<'RegistryPackageDependencyConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RegistryPackageDependencyEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RegistryPackageDependency | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RegistryPackageDependencyConnection'>
>

/**
 * @name RegistryPackageDependencyEdge
 * @type OBJECT
 */
type t_RegistryPackageDependencyEdge = FieldsType<
  {
    __typename: t_String<'RegistryPackageDependencyEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RegistryPackageDependency | null
  },
  Extension<'RegistryPackageDependencyEdge'>
>

/**
 * @name RegistryPackageDependency
 * @type OBJECT
 * @implements Node
 */
type t_RegistryPackageDependency = FieldsType<
  {
    __typename: t_String<'RegistryPackageDependency'>

    /**
     * Identifies the type of dependency.
     */
    dependencyType: t_RegistryPackageDependencyType
    id: t_ID

    /**
     * Identifies the name of the dependency.
     */
    name: t_String

    /**
     * Identifies the version of the dependency.
     */
    version: t_String
  },
  Extension<'RegistryPackageDependency'>
>

/**
 * @name RegistryPackageDependencyType
 * @type ENUM
 */
type t_RegistryPackageDependencyType = EnumType<
  'DEFAULT' | 'DEV' | 'TEST' | 'PEER' | 'OPTIONAL' | 'BUNDLED'
>

/**
 * @name RegistryPackageFileConnection
 * @type OBJECT
 */
type t_RegistryPackageFileConnection = FieldsType<
  {
    __typename: t_String<'RegistryPackageFileConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RegistryPackageFileEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RegistryPackageFile | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RegistryPackageFileConnection'>
>

/**
 * @name RegistryPackageFileEdge
 * @type OBJECT
 */
type t_RegistryPackageFileEdge = FieldsType<
  {
    __typename: t_String<'RegistryPackageFileEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RegistryPackageFile | null
  },
  Extension<'RegistryPackageFileEdge'>
>

/**
 * @name RegistryPackageFile
 * @type OBJECT
 * @implements Node
 */
type t_RegistryPackageFile = FieldsType<
  {
    __typename: t_String<'RegistryPackageFile'>

    /**
     * A unique identifier for this file.
     */
    guid: t_String | null
    id: t_ID

    /**
     * Identifies the md5.
     */
    md5: t_String | null

    /**
     * URL to download the asset metadata.
     */
    metadataUrl: t_URI

    /**
     * Name of the file
     */
    name: t_String

    /**
     * The package version this file belongs to.
     */
    packageVersion: t_RegistryPackageVersion

    /**
     * Identifies the sha1.
     */
    sha1: t_String | null

    /**
     * Identifies the sha256.
     */
    sha256: t_String | null

    /**
     * Identifies the size.
     */
    size: t_Int | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * URL to download the asset.
     */
    url: t_URI
  },
  Extension<'RegistryPackageFile'>
>

/**
 * @name MarketplaceCategory
 * @type OBJECT
 * @implements Node
 */
type t_MarketplaceCategory = FieldsType<
  {
    __typename: t_String<'MarketplaceCategory'>

    /**
     * The category's description.
     */
    description: t_String | null

    /**
     * The technical description of how apps listed in this category work with GitHub.
     */
    howItWorks: t_String | null
    id: t_ID

    /**
     * The category's name.
     */
    name: t_String

    /**
     * How many Marketplace listings have this as their primary category.
     */
    primaryListingCount: t_Int

    /**
     * The HTTP path for this Marketplace category.
     */
    resourcePath: t_URI

    /**
     * How many Marketplace listings have this as their secondary category.
     */
    secondaryListingCount: t_Int

    /**
     * The short name of the category used in its URL.
     */
    slug: t_String

    /**
     * The HTTP URL for this Marketplace category.
     */
    url: t_URI
  },
  Extension<'MarketplaceCategory'>
>

/**
 * @name MarketplaceListingConnection
 * @type OBJECT
 */
type t_MarketplaceListingConnection = FieldsType<
  {
    __typename: t_String<'MarketplaceListingConnection'>

    /**
     * A list of edges.
     */
    edges: (t_MarketplaceListingEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_MarketplaceListing | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'MarketplaceListingConnection'>
>

/**
 * @name MarketplaceListingEdge
 * @type OBJECT
 */
type t_MarketplaceListingEdge = FieldsType<
  {
    __typename: t_String<'MarketplaceListingEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_MarketplaceListing | null
  },
  Extension<'MarketplaceListingEdge'>
>

/**
 * @name ReleaseConnection
 * @type OBJECT
 */
type t_ReleaseConnection = FieldsType<
  {
    __typename: t_String<'ReleaseConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ReleaseEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Release | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ReleaseConnection'>
>

/**
 * @name ReleaseEdge
 * @type OBJECT
 */
type t_ReleaseEdge = FieldsType<
  {
    __typename: t_String<'ReleaseEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Release | null
  },
  Extension<'ReleaseEdge'>
>

/**
 * @name ReleaseOrder
 * @type INPUT_OBJECT
 */
export type ReleaseOrder = {
  field: ReleaseOrderField
  direction: OrderDirection
}

/**
 * @name ReleaseOrderField
 * @type ENUM
 */
type t_ReleaseOrderField = EnumType<'CREATED_AT' | 'NAME'>

/**
 * @name RegistryPackageMetadatum
 * @type INPUT_OBJECT
 */
export type RegistryPackageMetadatum = {
  name: string
  value: string
  update: boolean | null
}

/**
 * @name TopicConnection
 * @type OBJECT
 */
type t_TopicConnection = FieldsType<
  {
    __typename: t_String<'TopicConnection'>

    /**
     * A list of edges.
     */
    edges: (t_TopicEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Topic | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'TopicConnection'>
>

/**
 * @name TopicEdge
 * @type OBJECT
 */
type t_TopicEdge = FieldsType<
  {
    __typename: t_String<'TopicEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Topic | null
  },
  Extension<'TopicEdge'>
>

/**
 * @name MemberStatusable
 * @type INTERFACE
 */
type t_MemberStatusable = t_Organization | t_Team

/**
 * @name UserStatusConnection
 * @type OBJECT
 */
type t_UserStatusConnection = FieldsType<
  {
    __typename: t_String<'UserStatusConnection'>

    /**
     * A list of edges.
     */
    edges: (t_UserStatusEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_UserStatus | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'UserStatusConnection'>
>

/**
 * @name UserStatusEdge
 * @type OBJECT
 */
type t_UserStatusEdge = FieldsType<
  {
    __typename: t_String<'UserStatusEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_UserStatus | null
  },
  Extension<'UserStatusEdge'>
>

/**
 * @name UserStatus
 * @type OBJECT
 * @implements Node
 */
type t_UserStatus = FieldsType<
  {
    __typename: t_String<'UserStatus'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * An emoji summarizing the user's status.
     */
    emoji: t_String | null

    /**
     * The status emoji as HTML.
     */
    emojiHTML: t_HTML | null

    /**
     * If set, the status will not be shown after this date.
     */
    expiresAt: t_DateTime | null

    /**
     * ID of the object.
     */
    id: t_ID

    /**
     * Whether this status indicates the user is not fully available on GitHub.
     */
    indicatesLimitedAvailability: t_Boolean

    /**
     * A brief message describing what the user is doing.
     */
    message: t_String | null

    /**
     * The organization whose members can see this status. If null, this status is publicly visible.
     */
    organization: t_Organization | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The user who has this status.
     */
    user: t_User
  },
  Extension<'UserStatus'>
>

/**
 * @name UserStatusOrder
 * @type INPUT_OBJECT
 */
export type UserStatusOrder = {
  field: UserStatusOrderField
  direction: OrderDirection
}

/**
 * @name UserStatusOrderField
 * @type ENUM
 */
type t_UserStatusOrderField = EnumType<'UPDATED_AT'>

/**
 * @name ProfileOwner
 * @type INTERFACE
 */
type t_ProfileOwner = t_Organization | t_User

/**
 * @name ProfileItemShowcase
 * @type OBJECT
 */
type t_ProfileItemShowcase = FieldsType<
  {
    __typename: t_String<'ProfileItemShowcase'>

    /**
     * Whether or not the owner has pinned any repositories or gists.
     */
    hasPinnedItems: t_Boolean

    /**
     * The repositories and gists in the showcase. If the profile owner has any pinned items, those will be returned. Otherwise, the profile owner's popular repositories will be returned.
     */
    items: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PinnableItemConnection
    >
  },
  Extension<'ProfileItemShowcase'>
>

/**
 * @name PinnableItemConnection
 * @type OBJECT
 */
type t_PinnableItemConnection = FieldsType<
  {
    __typename: t_String<'PinnableItemConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PinnableItemEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PinnableItem | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PinnableItemConnection'>
>

/**
 * @name PinnableItemEdge
 * @type OBJECT
 */
type t_PinnableItemEdge = FieldsType<
  {
    __typename: t_String<'PinnableItemEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PinnableItem | null
  },
  Extension<'PinnableItemEdge'>
>

/**
 * @name PinnableItem
 * @type UNION
 */
type t_PinnableItem = t_Gist | t_Repository

/**
 * @name Gist
 * @type OBJECT
 * @implements Node, Starrable, UniformResourceLocatable
 */
type t_Gist = FieldsType<
  {
    __typename: t_String<'Gist'>

    /**
     * A list of comments associated with the gist
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_GistCommentConnection
    >

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The gist description.
     */
    description: t_String | null

    /**
     * The files in this gist.
     */
    files: FieldsTypeArg<
      { limit?: number | null; oid?: any | null },
      (t_GistFile | null)[] | null
    >

    /**
     * A list of forks associated with the gist
     */
    forks: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: GistOrder | null
      },
      t_GistConnection
    >
    id: t_ID

    /**
     * Identifies if the gist is a fork.
     */
    isFork: t_Boolean

    /**
     * Whether the gist is public or not.
     */
    isPublic: t_Boolean

    /**
     * The gist name.
     */
    name: t_String

    /**
     * The gist owner.
     */
    owner: t_Organization | t_User | null

    /**
     * Identifies when the gist was last pushed to.
     */
    pushedAt: t_DateTime | null

    /**
     * The HTML path to this resource.
     */
    resourcePath: t_URI

    /**
     * A list of users who have starred this starrable.
     */
    stargazers: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: StarOrder | null
      },
      t_StargazerConnection
    >

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this Gist.
     */
    url: t_URI

    /**
     * Returns a boolean indicating whether the viewing user has starred this starrable.
     */
    viewerHasStarred: t_Boolean
  },
  Extension<'Gist'>
>

/**
 * @name GistCommentConnection
 * @type OBJECT
 */
type t_GistCommentConnection = FieldsType<
  {
    __typename: t_String<'GistCommentConnection'>

    /**
     * A list of edges.
     */
    edges: (t_GistCommentEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_GistComment | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'GistCommentConnection'>
>

/**
 * @name GistCommentEdge
 * @type OBJECT
 */
type t_GistCommentEdge = FieldsType<
  {
    __typename: t_String<'GistCommentEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_GistComment | null
  },
  Extension<'GistCommentEdge'>
>

/**
 * @name GistComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment
 */
type t_GistComment = FieldsType<
  {
    __typename: t_String<'GistComment'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the gist.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * Identifies the comment body.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body rendered to text.
     */
    bodyText: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * The associated gist.
     */
    gist: t_Gist
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * Returns whether or not a comment has been minimized.
     */
    isMinimized: t_Boolean

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * Returns why the comment was minimized.
     */
    minimizedReason: t_String | null

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Check if the current viewer can minimize this object.
     */
    viewerCanMinimize: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean
  },
  Extension<'GistComment'>
>

/**
 * @name GistConnection
 * @type OBJECT
 */
type t_GistConnection = FieldsType<
  {
    __typename: t_String<'GistConnection'>

    /**
     * A list of edges.
     */
    edges: (t_GistEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Gist | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'GistConnection'>
>

/**
 * @name GistEdge
 * @type OBJECT
 */
type t_GistEdge = FieldsType<
  {
    __typename: t_String<'GistEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Gist | null
  },
  Extension<'GistEdge'>
>

/**
 * @name GistOrder
 * @type INPUT_OBJECT
 */
export type GistOrder = { field: GistOrderField; direction: OrderDirection }

/**
 * @name GistOrderField
 * @type ENUM
 */
type t_GistOrderField = EnumType<'CREATED_AT' | 'UPDATED_AT' | 'PUSHED_AT'>

/**
 * @name GistFile
 * @type OBJECT
 */
type t_GistFile = FieldsType<
  {
    __typename: t_String<'GistFile'>

    /**
     * The file name encoded to remove characters that are invalid in URL paths.
     */
    encodedName: t_String | null

    /**
     * The gist file encoding.
     */
    encoding: t_String | null

    /**
     * The file extension from the file name.
     */
    extension: t_String | null

    /**
     * Indicates if this file is an image.
     */
    isImage: t_Boolean

    /**
     * Whether the file's contents were truncated.
     */
    isTruncated: t_Boolean

    /**
     * The programming language this file is written in.
     */
    language: t_Language | null

    /**
     * The gist file name.
     */
    name: t_String | null

    /**
     * The gist file size in bytes.
     */
    size: t_Int | null

    /**
     * UTF8 text data or null if the file is binary
     */
    text: FieldsTypeArg<{ truncate?: number | null }, t_String | null>
  },
  Extension<'GistFile'>
>

/**
 * @name Language
 * @type OBJECT
 * @implements Node
 */
type t_Language = FieldsType<
  {
    __typename: t_String<'Language'>

    /**
     * The color defined for the current language.
     */
    color: t_String | null
    id: t_ID

    /**
     * The name of the current language.
     */
    name: t_String
  },
  Extension<'Language'>
>

/**
 * @name PinnableItemType
 * @type ENUM
 */
type t_PinnableItemType = EnumType<
  | 'REPOSITORY'
  | 'GIST'
  | 'ISSUE'
  | 'PROJECT'
  | 'PULL_REQUEST'
  | 'USER'
  | 'ORGANIZATION'
  | 'TEAM'
>

/**
 * @name ProjectConnection
 * @type OBJECT
 */
type t_ProjectConnection = FieldsType<
  {
    __typename: t_String<'ProjectConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ProjectEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Project | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ProjectConnection'>
>

/**
 * @name ProjectEdge
 * @type OBJECT
 */
type t_ProjectEdge = FieldsType<
  {
    __typename: t_String<'ProjectEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Project | null
  },
  Extension<'ProjectEdge'>
>

/**
 * @name ProjectOrder
 * @type INPUT_OBJECT
 */
export type ProjectOrder = {
  field: ProjectOrderField
  direction: OrderDirection
}

/**
 * @name ProjectOrderField
 * @type ENUM
 */
type t_ProjectOrderField = EnumType<'CREATED_AT' | 'UPDATED_AT' | 'NAME'>

/**
 * @name OrganizationAuditEntryConnection
 * @type OBJECT
 */
type t_OrganizationAuditEntryConnection = FieldsType<
  {
    __typename: t_String<'OrganizationAuditEntryConnection'>

    /**
     * A list of edges.
     */
    edges: (t_OrganizationAuditEntryEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_OrganizationAuditEntry | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'OrganizationAuditEntryConnection'>
>

/**
 * @name OrganizationAuditEntryEdge
 * @type OBJECT
 */
type t_OrganizationAuditEntryEdge = FieldsType<
  {
    __typename: t_String<'OrganizationAuditEntryEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_OrganizationAuditEntry | null
  },
  Extension<'OrganizationAuditEntryEdge'>
>

/**
 * @name OrganizationAuditEntry
 * @type UNION
 */
type t_OrganizationAuditEntry =
  | t_MembersCanDeleteReposClearAuditEntry
  | t_MembersCanDeleteReposDisableAuditEntry
  | t_MembersCanDeleteReposEnableAuditEntry
  | t_OauthApplicationCreateAuditEntry
  | t_OrgAddBillingManagerAuditEntry
  | t_OrgAddMemberAuditEntry
  | t_OrgBlockUserAuditEntry
  | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
  | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
  | t_OrgCreateAuditEntry
  | t_OrgDisableOauthAppRestrictionsAuditEntry
  | t_OrgDisableSamlAuditEntry
  | t_OrgDisableTwoFactorRequirementAuditEntry
  | t_OrgEnableOauthAppRestrictionsAuditEntry
  | t_OrgEnableSamlAuditEntry
  | t_OrgEnableTwoFactorRequirementAuditEntry
  | t_OrgInviteMemberAuditEntry
  | t_OrgInviteToBusinessAuditEntry
  | t_OrgOauthAppAccessApprovedAuditEntry
  | t_OrgOauthAppAccessDeniedAuditEntry
  | t_OrgOauthAppAccessRequestedAuditEntry
  | t_OrgRemoveBillingManagerAuditEntry
  | t_OrgRemoveMemberAuditEntry
  | t_OrgRemoveOutsideCollaboratorAuditEntry
  | t_OrgRestoreMemberAuditEntry
  | t_OrgUnblockUserAuditEntry
  | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
  | t_OrgUpdateMemberAuditEntry
  | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | t_PrivateRepositoryForkingDisableAuditEntry
  | t_PrivateRepositoryForkingEnableAuditEntry
  | t_RepoAccessAuditEntry
  | t_RepoAddMemberAuditEntry
  | t_RepoAddTopicAuditEntry
  | t_RepoArchivedAuditEntry
  | t_RepoChangeMergeSettingAuditEntry
  | t_RepoConfigDisableAnonymousGitAccessAuditEntry
  | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
  | t_RepoConfigDisableContributorsOnlyAuditEntry
  | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
  | t_RepoConfigEnableAnonymousGitAccessAuditEntry
  | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
  | t_RepoConfigEnableContributorsOnlyAuditEntry
  | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
  | t_RepoConfigLockAnonymousGitAccessAuditEntry
  | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
  | t_RepoCreateAuditEntry
  | t_RepoDestroyAuditEntry
  | t_RepoRemoveMemberAuditEntry
  | t_RepoRemoveTopicAuditEntry
  | t_RepositoryVisibilityChangeDisableAuditEntry
  | t_RepositoryVisibilityChangeEnableAuditEntry
  | t_TeamAddMemberAuditEntry
  | t_TeamAddRepositoryAuditEntry
  | t_TeamChangeParentTeamAuditEntry
  | t_TeamRemoveMemberAuditEntry
  | t_TeamRemoveRepositoryAuditEntry

/**
 * @name AuditEntry
 * @type INTERFACE
 */
type t_AuditEntry =
  | t_MembersCanDeleteReposClearAuditEntry
  | t_MembersCanDeleteReposDisableAuditEntry
  | t_MembersCanDeleteReposEnableAuditEntry
  | t_OauthApplicationCreateAuditEntry
  | t_OrgAddBillingManagerAuditEntry
  | t_OrgAddMemberAuditEntry
  | t_OrgBlockUserAuditEntry
  | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
  | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
  | t_OrgCreateAuditEntry
  | t_OrgDisableOauthAppRestrictionsAuditEntry
  | t_OrgDisableSamlAuditEntry
  | t_OrgDisableTwoFactorRequirementAuditEntry
  | t_OrgEnableOauthAppRestrictionsAuditEntry
  | t_OrgEnableSamlAuditEntry
  | t_OrgEnableTwoFactorRequirementAuditEntry
  | t_OrgInviteMemberAuditEntry
  | t_OrgInviteToBusinessAuditEntry
  | t_OrgOauthAppAccessApprovedAuditEntry
  | t_OrgOauthAppAccessDeniedAuditEntry
  | t_OrgOauthAppAccessRequestedAuditEntry
  | t_OrgRemoveBillingManagerAuditEntry
  | t_OrgRemoveMemberAuditEntry
  | t_OrgRemoveOutsideCollaboratorAuditEntry
  | t_OrgRestoreMemberAuditEntry
  | t_OrgUnblockUserAuditEntry
  | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
  | t_OrgUpdateMemberAuditEntry
  | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | t_PrivateRepositoryForkingDisableAuditEntry
  | t_PrivateRepositoryForkingEnableAuditEntry
  | t_RepoAccessAuditEntry
  | t_RepoAddMemberAuditEntry
  | t_RepoAddTopicAuditEntry
  | t_RepoArchivedAuditEntry
  | t_RepoChangeMergeSettingAuditEntry
  | t_RepoConfigDisableAnonymousGitAccessAuditEntry
  | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
  | t_RepoConfigDisableContributorsOnlyAuditEntry
  | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
  | t_RepoConfigEnableAnonymousGitAccessAuditEntry
  | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
  | t_RepoConfigEnableContributorsOnlyAuditEntry
  | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
  | t_RepoConfigLockAnonymousGitAccessAuditEntry
  | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
  | t_RepoCreateAuditEntry
  | t_RepoDestroyAuditEntry
  | t_RepoRemoveMemberAuditEntry
  | t_RepoRemoveTopicAuditEntry
  | t_RepositoryVisibilityChangeDisableAuditEntry
  | t_RepositoryVisibilityChangeEnableAuditEntry
  | t_TeamAddMemberAuditEntry
  | t_TeamAddRepositoryAuditEntry
  | t_TeamChangeParentTeamAuditEntry
  | t_TeamRemoveMemberAuditEntry
  | t_TeamRemoveRepositoryAuditEntry

/**
 * @name OperationType
 * @type ENUM
 */
type t_OperationType = EnumType<
  | 'ACCESS'
  | 'AUTHENTICATION'
  | 'CREATE'
  | 'MODIFY'
  | 'REMOVE'
  | 'RESTORE'
  | 'TRANSFER'
>

/**
 * @name AuditEntryActor
 * @type UNION
 */
type t_AuditEntryActor = t_Bot | t_Organization | t_User

/**
 * @name ActorLocation
 * @type OBJECT
 */
type t_ActorLocation = FieldsType<
  {
    __typename: t_String<'ActorLocation'>

    /**
     * City
     */
    city: t_String | null

    /**
     * Country name
     */
    country: t_String | null

    /**
     * Country code
     */
    countryCode: t_String | null

    /**
     * Region name
     */
    region: t_String | null

    /**
     * Region or state code
     */
    regionCode: t_String | null
  },
  Extension<'ActorLocation'>
>

/**
 * @name PreciseDateTime
 * @type SCALAR
 */
type t_PreciseDateTime<T extends any = any> = ScalarType<
  T,
  Extension<'PreciseDateTime'>
>

/**
 * @name OrganizationAuditEntryData
 * @type INTERFACE
 */
type t_OrganizationAuditEntryData =
  | t_MembersCanDeleteReposClearAuditEntry
  | t_MembersCanDeleteReposDisableAuditEntry
  | t_MembersCanDeleteReposEnableAuditEntry
  | t_OauthApplicationCreateAuditEntry
  | t_OrgAddBillingManagerAuditEntry
  | t_OrgAddMemberAuditEntry
  | t_OrgBlockUserAuditEntry
  | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
  | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
  | t_OrgCreateAuditEntry
  | t_OrgDisableOauthAppRestrictionsAuditEntry
  | t_OrgDisableSamlAuditEntry
  | t_OrgDisableTwoFactorRequirementAuditEntry
  | t_OrgEnableOauthAppRestrictionsAuditEntry
  | t_OrgEnableSamlAuditEntry
  | t_OrgEnableTwoFactorRequirementAuditEntry
  | t_OrgInviteMemberAuditEntry
  | t_OrgInviteToBusinessAuditEntry
  | t_OrgOauthAppAccessApprovedAuditEntry
  | t_OrgOauthAppAccessDeniedAuditEntry
  | t_OrgOauthAppAccessRequestedAuditEntry
  | t_OrgRemoveBillingManagerAuditEntry
  | t_OrgRemoveMemberAuditEntry
  | t_OrgRemoveOutsideCollaboratorAuditEntry
  | t_OrgRestoreMemberAuditEntry
  | t_OrgRestoreMemberMembershipOrganizationAuditEntryData
  | t_OrgUnblockUserAuditEntry
  | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
  | t_OrgUpdateMemberAuditEntry
  | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | t_PrivateRepositoryForkingDisableAuditEntry
  | t_PrivateRepositoryForkingEnableAuditEntry
  | t_RepoAccessAuditEntry
  | t_RepoAddMemberAuditEntry
  | t_RepoAddTopicAuditEntry
  | t_RepoArchivedAuditEntry
  | t_RepoChangeMergeSettingAuditEntry
  | t_RepoConfigDisableAnonymousGitAccessAuditEntry
  | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
  | t_RepoConfigDisableContributorsOnlyAuditEntry
  | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
  | t_RepoConfigEnableAnonymousGitAccessAuditEntry
  | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
  | t_RepoConfigEnableContributorsOnlyAuditEntry
  | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
  | t_RepoConfigLockAnonymousGitAccessAuditEntry
  | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
  | t_RepoCreateAuditEntry
  | t_RepoDestroyAuditEntry
  | t_RepoRemoveMemberAuditEntry
  | t_RepoRemoveTopicAuditEntry
  | t_RepositoryVisibilityChangeDisableAuditEntry
  | t_RepositoryVisibilityChangeEnableAuditEntry
  | t_TeamAddMemberAuditEntry
  | t_TeamAddRepositoryAuditEntry
  | t_TeamChangeParentTeamAuditEntry
  | t_TeamRemoveMemberAuditEntry
  | t_TeamRemoveRepositoryAuditEntry

/**
 * @name IssueComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
type t_IssueComment = FieldsType<
  {
    __typename: t_String<'IssueComment'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the subject of the comment.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * The body as Markdown.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body rendered to text.
     */
    bodyText: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * Returns whether or not a comment has been minimized.
     */
    isMinimized: t_Boolean

    /**
     * Identifies the issue associated with the comment.
     */
    issue: t_Issue

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * Returns why the comment was minimized.
     */
    minimizedReason: t_String | null

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * Returns the pull request associated with the comment, if this comment was made on a
     * pull request.
     *
     */
    pullRequest: t_PullRequest | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The repository associated with this node.
     */
    repository: t_Repository

    /**
     * The HTTP path for this issue comment
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this issue comment
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Check if the current viewer can minimize this object.
     */
    viewerCanMinimize: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean
  },
  Extension<'IssueComment'>
>

/**
 * @name IssuePubSubTopic
 * @type ENUM
 */
type t_IssuePubSubTopic = EnumType<
  'UPDATED' | 'MARKASREAD' | 'TIMELINE' | 'STATE'
>

/**
 * @name MembersCanDeleteReposClearAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
type t_MembersCanDeleteReposClearAuditEntry = FieldsType<
  {
    __typename: t_String<'MembersCanDeleteReposClearAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'MembersCanDeleteReposClearAuditEntry'>
>

/**
 * @name EnterpriseAuditEntryData
 * @type INTERFACE
 */
type t_EnterpriseAuditEntryData =
  | t_MembersCanDeleteReposClearAuditEntry
  | t_MembersCanDeleteReposDisableAuditEntry
  | t_MembersCanDeleteReposEnableAuditEntry
  | t_OrgInviteToBusinessAuditEntry
  | t_PrivateRepositoryForkingDisableAuditEntry
  | t_PrivateRepositoryForkingEnableAuditEntry
  | t_RepositoryVisibilityChangeDisableAuditEntry
  | t_RepositoryVisibilityChangeEnableAuditEntry

/**
 * @name Enterprise
 * @type OBJECT
 * @implements Node
 */
type t_Enterprise = FieldsType<
  {
    __typename: t_String<'Enterprise'>

    /**
     * A URL pointing to the enterprise's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * Enterprise billing information visible to enterprise billing managers.
     */
    billingInfo: t_EnterpriseBillingInfo | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The description of the enterprise.
     */
    description: t_String | null

    /**
     * The description of the enterprise as HTML.
     */
    descriptionHTML: t_HTML
    id: t_ID

    /**
     * The location of the enterprise.
     */
    location: t_String | null

    /**
     * A list of users who are members of this enterprise.
     */
    members: FieldsTypeArg<
      {
        organizationLogins?: (string)[] | null
        query?: string | null
        orderBy?: EnterpriseMemberOrder | null
        role?: EnterpriseUserAccountMembershipRole | null
        deployment?: EnterpriseUserDeployment | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseMemberConnection
    >

    /**
     * The name of the enterprise.
     */
    name: t_String

    /**
     * A list of organizations that belong to this enterprise.
     */
    organizations: FieldsTypeArg<
      {
        query?: string | null
        orderBy?: OrganizationOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_OrganizationConnection
    >

    /**
     * Enterprise information only visible to enterprise owners.
     */
    ownerInfo: t_EnterpriseOwnerInfo | null

    /**
     * The HTTP path for this enterprise.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this enterprise.
     */
    url: t_URI

    /**
     * A list of user accounts on this enterprise.
     */
    userAccounts: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseUserAccountConnection
    >

    /**
     * Is the current viewer an admin of this enterprise?
     */
    viewerIsAdmin: t_Boolean

    /**
     * The URL of the enterprise website.
     */
    websiteUrl: t_URI | null
  },
  Extension<'Enterprise'>
>

/**
 * @name EnterpriseMemberConnection
 * @type OBJECT
 */
type t_EnterpriseMemberConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseMemberConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseMemberEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseMember | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseMemberConnection'>
>

/**
 * @name EnterpriseMemberEdge
 * @type OBJECT
 */
type t_EnterpriseMemberEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseMemberEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * Whether the user does not have a license for the enterprise.
     */
    isUnlicensed: t_Boolean

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseMember | null
  },
  Extension<'EnterpriseMemberEdge'>
>

/**
 * @name EnterpriseMember
 * @type UNION
 */
type t_EnterpriseMember = t_User | t_EnterpriseUserAccount

/**
 * @name EnterpriseUserAccount
 * @type OBJECT
 * @implements Node, Actor
 */
type t_EnterpriseUserAccount = FieldsType<
  {
    __typename: t_String<'EnterpriseUserAccount'>

    /**
     * A URL pointing to the enterprise user account's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The enterprise in which this user account exists.
     */
    enterprise: t_Enterprise
    id: t_ID

    /**
     * An identifier for the enterprise user account, a login or email address
     */
    login: t_String

    /**
     * The name of the enterprise user account
     */
    name: t_String | null

    /**
     * A list of enterprise organizations this user is a member of.
     */
    organizations: FieldsTypeArg<
      {
        query?: string | null
        orderBy?: OrganizationOrder | null
        role?: EnterpriseUserAccountMembershipRole | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseOrganizationMembershipConnection
    >

    /**
     * The HTTP path for this actor.
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this actor.
     */
    url: t_URI

    /**
     * The user within the enterprise.
     */
    user: t_User | null
  },
  Extension<'EnterpriseUserAccount'>
>

/**
 * @name EnterpriseOrganizationMembershipConnection
 * @type OBJECT
 */
type t_EnterpriseOrganizationMembershipConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseOrganizationMembershipConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseOrganizationMembershipEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Organization | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseOrganizationMembershipConnection'>
>

/**
 * @name EnterpriseOrganizationMembershipEdge
 * @type OBJECT
 */
type t_EnterpriseOrganizationMembershipEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseOrganizationMembershipEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Organization | null

    /**
     * The role of the user in the enterprise membership.
     */
    role: t_EnterpriseUserAccountMembershipRole
  },
  Extension<'EnterpriseOrganizationMembershipEdge'>
>

/**
 * @name EnterpriseUserAccountMembershipRole
 * @type ENUM
 */
type t_EnterpriseUserAccountMembershipRole = EnumType<'MEMBER' | 'OWNER'>

/**
 * @name OrganizationOrder
 * @type INPUT_OBJECT
 */
export type OrganizationOrder = {
  field: OrganizationOrderField
  direction: OrderDirection
}

/**
 * @name OrganizationOrderField
 * @type ENUM
 */
type t_OrganizationOrderField = EnumType<'CREATED_AT' | 'LOGIN'>

/**
 * @name EnterpriseServerInstallation
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseServerInstallation = FieldsType<
  {
    __typename: t_String<'EnterpriseServerInstallation'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The customer name to which the Enterprise Server installation belongs.
     */
    customerName: t_String

    /**
     * The host name of the Enterprise Server installation.
     */
    hostName: t_String
    id: t_ID

    /**
     * Whether or not the installation is connected to an Enterprise Server installation via GitHub Connect.
     */
    isConnected: t_Boolean

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * User accounts on this Enterprise Server installation.
     */
    userAccounts: FieldsTypeArg<
      {
        orderBy?: EnterpriseServerUserAccountOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseServerUserAccountConnection
    >

    /**
     * User accounts uploads for the Enterprise Server installation.
     */
    userAccountsUploads: FieldsTypeArg<
      {
        orderBy?: EnterpriseServerUserAccountsUploadOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseServerUserAccountsUploadConnection
    >
  },
  Extension<'EnterpriseServerInstallation'>
>

/**
 * @name EnterpriseServerUserAccountConnection
 * @type OBJECT
 */
type t_EnterpriseServerUserAccountConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseServerUserAccountEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseServerUserAccount | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseServerUserAccountConnection'>
>

/**
 * @name EnterpriseServerUserAccountEdge
 * @type OBJECT
 */
type t_EnterpriseServerUserAccountEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseServerUserAccount | null
  },
  Extension<'EnterpriseServerUserAccountEdge'>
>

/**
 * @name EnterpriseServerUserAccount
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseServerUserAccount = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccount'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * User emails belonging to this user account.
     */
    emails: FieldsTypeArg<
      {
        orderBy?: EnterpriseServerUserAccountEmailOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseServerUserAccountEmailConnection
    >

    /**
     * The Enterprise Server installation on which this user account exists.
     */
    enterpriseServerInstallation: t_EnterpriseServerInstallation
    id: t_ID

    /**
     * Whether the user account is a site administrator on the Enterprise Server installation.
     */
    isSiteAdmin: t_Boolean

    /**
     * The login of the user account on the Enterprise Server installation.
     */
    login: t_String

    /**
     * The profile name of the user account on the Enterprise Server installation.
     */
    profileName: t_String | null

    /**
     * The date and time when the user account was created on the Enterprise Server installation.
     */
    remoteCreatedAt: t_DateTime

    /**
     * The ID of the user account on the Enterprise Server installation.
     */
    remoteUserId: t_Int

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'EnterpriseServerUserAccount'>
>

/**
 * @name EnterpriseServerUserAccountEmailConnection
 * @type OBJECT
 */
type t_EnterpriseServerUserAccountEmailConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountEmailConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseServerUserAccountEmailEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseServerUserAccountEmail | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseServerUserAccountEmailConnection'>
>

/**
 * @name EnterpriseServerUserAccountEmailEdge
 * @type OBJECT
 */
type t_EnterpriseServerUserAccountEmailEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountEmailEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseServerUserAccountEmail | null
  },
  Extension<'EnterpriseServerUserAccountEmailEdge'>
>

/**
 * @name EnterpriseServerUserAccountEmail
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseServerUserAccountEmail = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountEmail'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The email address.
     */
    email: t_String
    id: t_ID

    /**
     * Indicates whether this is the primary email of the associated user account.
     */
    isPrimary: t_Boolean

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The user account to which the email belongs.
     */
    userAccount: t_EnterpriseServerUserAccount
  },
  Extension<'EnterpriseServerUserAccountEmail'>
>

/**
 * @name EnterpriseServerUserAccountEmailOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseServerUserAccountEmailOrder = {
  field: EnterpriseServerUserAccountEmailOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseServerUserAccountEmailOrderField
 * @type ENUM
 */
type t_EnterpriseServerUserAccountEmailOrderField = EnumType<'EMAIL'>

/**
 * @name EnterpriseServerUserAccountOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseServerUserAccountOrder = {
  field: EnterpriseServerUserAccountOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseServerUserAccountOrderField
 * @type ENUM
 */
type t_EnterpriseServerUserAccountOrderField = EnumType<
  'LOGIN' | 'REMOTE_CREATED_AT'
>

/**
 * @name EnterpriseServerUserAccountsUploadConnection
 * @type OBJECT
 */
type t_EnterpriseServerUserAccountsUploadConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountsUploadConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseServerUserAccountsUploadEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseServerUserAccountsUpload | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseServerUserAccountsUploadConnection'>
>

/**
 * @name EnterpriseServerUserAccountsUploadEdge
 * @type OBJECT
 */
type t_EnterpriseServerUserAccountsUploadEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountsUploadEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseServerUserAccountsUpload | null
  },
  Extension<'EnterpriseServerUserAccountsUploadEdge'>
>

/**
 * @name EnterpriseServerUserAccountsUpload
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseServerUserAccountsUpload = FieldsType<
  {
    __typename: t_String<'EnterpriseServerUserAccountsUpload'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The enterprise to which this upload belongs.
     */
    enterprise: t_Enterprise

    /**
     * The Enterprise Server installation for which this upload was generated.
     */
    enterpriseServerInstallation: t_EnterpriseServerInstallation
    id: t_ID

    /**
     * The name of the file uploaded.
     */
    name: t_String

    /**
     * The synchronization state of the upload
     */
    syncState: t_EnterpriseServerUserAccountsUploadSyncState

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'EnterpriseServerUserAccountsUpload'>
>

/**
 * @name EnterpriseServerUserAccountsUploadSyncState
 * @type ENUM
 */
type t_EnterpriseServerUserAccountsUploadSyncState = EnumType<
  'PENDING' | 'SUCCESS' | 'FAILURE'
>

/**
 * @name EnterpriseServerUserAccountsUploadOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseServerUserAccountsUploadOrder = {
  field: EnterpriseServerUserAccountsUploadOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseServerUserAccountsUploadOrderField
 * @type ENUM
 */
type t_EnterpriseServerUserAccountsUploadOrderField = EnumType<'CREATED_AT'>

/**
 * @name EnterpriseServerInstallationOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseServerInstallationOrder = {
  field: EnterpriseServerInstallationOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseServerInstallationOrderField
 * @type ENUM
 */
type t_EnterpriseServerInstallationOrderField = EnumType<
  'HOST_NAME' | 'CUSTOMER_NAME' | 'CREATED_AT'
>

/**
 * @name EnterpriseMemberOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseMemberOrder = {
  field: EnterpriseMemberOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseMemberOrderField
 * @type ENUM
 */
type t_EnterpriseMemberOrderField = EnumType<'LOGIN' | 'CREATED_AT'>

/**
 * @name EnterpriseUserDeployment
 * @type ENUM
 */
type t_EnterpriseUserDeployment = EnumType<'CLOUD' | 'SERVER'>

/**
 * @name OrganizationConnection
 * @type OBJECT
 */
type t_OrganizationConnection = FieldsType<
  {
    __typename: t_String<'OrganizationConnection'>

    /**
     * A list of edges.
     */
    edges: (t_OrganizationEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Organization | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'OrganizationConnection'>
>

/**
 * @name OrganizationEdge
 * @type OBJECT
 */
type t_OrganizationEdge = FieldsType<
  {
    __typename: t_String<'OrganizationEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Organization | null
  },
  Extension<'OrganizationEdge'>
>

/**
 * @name EnterpriseOwnerInfo
 * @type OBJECT
 */
type t_EnterpriseOwnerInfo = FieldsType<
  {
    __typename: t_String<'EnterpriseOwnerInfo'>

    /**
     * A list of enterprise organizations configured with the provided action execution capabilities setting value.
     */
    actionExecutionCapabilitySettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * A list of all of the administrators for this enterprise.
     */
    admins: FieldsTypeArg<
      {
        query?: string | null
        role?: EnterpriseAdministratorRole | null
        orderBy?: EnterpriseMemberOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseAdministratorConnection
    >

    /**
     * A list of users in the enterprise who currently have two-factor authentication disabled.
     */
    affiliatedUsersWithTwoFactorDisabled: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserConnection
    >

    /**
     * Whether or not affiliated users with two-factor authentication disabled exist in the enterprise.
     */
    affiliatedUsersWithTwoFactorDisabledExist: t_Boolean

    /**
     * The setting value for whether private repository forking is enabled for repositories in organizations in this enterprise.
     */
    allowPrivateRepositoryForkingSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided private repository forking setting value.
     */
    allowPrivateRepositoryForkingSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for base repository permissions for organizations in this enterprise.
     */
    defaultRepositoryPermissionSetting: t_EnterpriseDefaultRepositoryPermissionSettingValue

    /**
     * A list of enterprise organizations configured with the provided default repository permission.
     */
    defaultRepositoryPermissionSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: DefaultRepositoryPermissionField
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * Enterprise Server installations owned by the enterprise.
     */
    enterpriseServerInstallations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        connectedOnly?: boolean | null
        orderBy?: EnterpriseServerInstallationOrder | null
      },
      t_EnterpriseServerInstallationConnection
    >

    /**
     * Whether or not the default repository permission is currently being updated.
     */
    isUpdatingDefaultRepositoryPermission: t_Boolean

    /**
     * Whether the two-factor authentication requirement is currently being enforced.
     */
    isUpdatingTwoFactorRequirement: t_Boolean

    /**
     * The setting value for whether organization members with admin permissions on a repository can change repository visibility.
     */
    membersCanChangeRepositoryVisibilitySetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided can change repository visibility setting value.
     */
    membersCanChangeRepositoryVisibilitySettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether members of organizations in the enterprise can create internal repositories.
     */
    membersCanCreateInternalRepositoriesSetting: t_Boolean | null

    /**
     * The setting value for whether members of organizations in the enterprise can create private repositories.
     */
    membersCanCreatePrivateRepositoriesSetting: t_Boolean | null

    /**
     * The setting value for whether members of organizations in the enterprise can create public repositories.
     */
    membersCanCreatePublicRepositoriesSetting: t_Boolean | null

    /**
     * The setting value for whether members of organizations in the enterprise can create repositories.
     */
    membersCanCreateRepositoriesSetting: t_EnterpriseMembersCanCreateRepositoriesSettingValue | null

    /**
     * A list of enterprise organizations configured with the provided repository creation setting value.
     */
    membersCanCreateRepositoriesSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: OrganizationMembersCanCreateRepositoriesSettingValue
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether members with admin permissions for repositories can delete issues.
     */
    membersCanDeleteIssuesSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided members can delete issues setting value.
     */
    membersCanDeleteIssuesSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether members with admin permissions for repositories can delete or transfer repositories.
     */
    membersCanDeleteRepositoriesSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided members can delete repositories setting value.
     */
    membersCanDeleteRepositoriesSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether members of organizations in the enterprise can invite outside collaborators.
     */
    membersCanInviteCollaboratorsSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided members can invite collaborators setting value.
     */
    membersCanInviteCollaboratorsSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * Indicates whether members of this enterprise's organizations can purchase additional services for those organizations.
     */
    membersCanMakePurchasesSetting: t_EnterpriseMembersCanMakePurchasesSettingValue

    /**
     * The setting value for whether members with admin permissions for repositories can update protected branches.
     */
    membersCanUpdateProtectedBranchesSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided members can update protected branches setting value.
     */
    membersCanUpdateProtectedBranchesSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether members can view dependency insights.
     */
    membersCanViewDependencyInsightsSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided members can view dependency insights setting value.
     */
    membersCanViewDependencyInsightsSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether organization projects are enabled for organizations in this enterprise.
     */
    organizationProjectsSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided organization projects setting value.
     */
    organizationProjectsSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * A list of outside collaborators across the repositories in the enterprise.
     */
    outsideCollaborators: FieldsTypeArg<
      {
        login?: string | null
        query?: string | null
        orderBy?: EnterpriseMemberOrder | null
        visibility?: RepositoryVisibility | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseOutsideCollaboratorConnection
    >

    /**
     * A list of pending administrator invitations for the enterprise.
     */
    pendingAdminInvitations: FieldsTypeArg<
      {
        query?: string | null
        orderBy?: EnterpriseAdministratorInvitationOrder | null
        role?: EnterpriseAdministratorRole | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterpriseAdministratorInvitationConnection
    >

    /**
     * A list of pending collaborators across the repositories in the enterprise.
     */
    pendingCollaborators: FieldsTypeArg<
      {
        query?: string | null
        orderBy?: RepositoryInvitationOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterprisePendingCollaboratorConnection
    >

    /**
     * A list of pending member invitations for organizations in the enterprise.
     */
    pendingMemberInvitations: FieldsTypeArg<
      {
        query?: string | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_EnterprisePendingMemberInvitationConnection
    >

    /**
     * The setting value for whether repository projects are enabled in this enterprise.
     */
    repositoryProjectsSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided repository projects setting value.
     */
    repositoryProjectsSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The SAML Identity Provider for the enterprise.
     */
    samlIdentityProvider: t_EnterpriseIdentityProvider | null

    /**
     * A list of enterprise organizations configured with the SAML single sign-on setting value.
     */
    samlIdentityProviderSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: IdentityProviderConfigurationState
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether team discussions are enabled for organizations in this enterprise.
     */
    teamDiscussionsSetting: t_EnterpriseEnabledDisabledSettingValue

    /**
     * A list of enterprise organizations configured with the provided team discussions setting value.
     */
    teamDiscussionsSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >

    /**
     * The setting value for whether the enterprise requires two-factor authentication for its organizations and users.
     */
    twoFactorRequiredSetting: t_EnterpriseEnabledSettingValue

    /**
     * A list of enterprise organizations configured with the two-factor authentication setting value.
     */
    twoFactorRequiredSettingOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        value: boolean
        orderBy?: OrganizationOrder | null
      },
      t_OrganizationConnection
    >
  },
  Extension<'EnterpriseOwnerInfo'>
>

/**
 * @name EnterpriseAdministratorConnection
 * @type OBJECT
 */
type t_EnterpriseAdministratorConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseAdministratorConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseAdministratorEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseAdministratorConnection'>
>

/**
 * @name EnterpriseAdministratorEdge
 * @type OBJECT
 */
type t_EnterpriseAdministratorEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseAdministratorEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_User | null

    /**
     * The role of the administrator.
     */
    role: t_EnterpriseAdministratorRole
  },
  Extension<'EnterpriseAdministratorEdge'>
>

/**
 * @name EnterpriseAdministratorRole
 * @type ENUM
 */
type t_EnterpriseAdministratorRole = EnumType<'OWNER' | 'BILLING_MANAGER'>

/**
 * @name EnterpriseAdministratorInvitationConnection
 * @type OBJECT
 */
type t_EnterpriseAdministratorInvitationConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseAdministratorInvitationConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseAdministratorInvitationEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseAdministratorInvitation | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseAdministratorInvitationConnection'>
>

/**
 * @name EnterpriseAdministratorInvitationEdge
 * @type OBJECT
 */
type t_EnterpriseAdministratorInvitationEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseAdministratorInvitationEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseAdministratorInvitation | null
  },
  Extension<'EnterpriseAdministratorInvitationEdge'>
>

/**
 * @name EnterpriseAdministratorInvitation
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseAdministratorInvitation = FieldsType<
  {
    __typename: t_String<'EnterpriseAdministratorInvitation'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The email of the person who was invited to the enterprise.
     */
    email: t_String | null

    /**
     * The enterprise the invitation is for.
     */
    enterprise: t_Enterprise
    id: t_ID

    /**
     * The user who was invited to the enterprise.
     */
    invitee: t_User | null

    /**
     * The user who created the invitation.
     */
    inviter: t_User | null

    /**
     * The invitee's pending role in the enterprise (owner or billing_manager).
     */
    role: t_EnterpriseAdministratorRole
  },
  Extension<'EnterpriseAdministratorInvitation'>
>

/**
 * @name EnterpriseAdministratorInvitationOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseAdministratorInvitationOrder = {
  field: EnterpriseAdministratorInvitationOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseAdministratorInvitationOrderField
 * @type ENUM
 */
type t_EnterpriseAdministratorInvitationOrderField = EnumType<'CREATED_AT'>

/**
 * @name EnterprisePendingMemberInvitationConnection
 * @type OBJECT
 */
type t_EnterprisePendingMemberInvitationConnection = FieldsType<
  {
    __typename: t_String<'EnterprisePendingMemberInvitationConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterprisePendingMemberInvitationEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_OrganizationInvitation | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int

    /**
     * Identifies the total count of unique users in the connection.
     */
    totalUniqueUserCount: t_Int
  },
  Extension<'EnterprisePendingMemberInvitationConnection'>
>

/**
 * @name EnterprisePendingMemberInvitationEdge
 * @type OBJECT
 */
type t_EnterprisePendingMemberInvitationEdge = FieldsType<
  {
    __typename: t_String<'EnterprisePendingMemberInvitationEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * Whether the invitation has a license for the enterprise.
     */
    isUnlicensed: t_Boolean

    /**
     * The item at the end of the edge.
     */
    node: t_OrganizationInvitation | null
  },
  Extension<'EnterprisePendingMemberInvitationEdge'>
>

/**
 * @name OrganizationInvitation
 * @type OBJECT
 * @implements Node
 */
type t_OrganizationInvitation = FieldsType<
  {
    __typename: t_String<'OrganizationInvitation'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The email address of the user invited to the organization.
     */
    email: t_String | null
    id: t_ID

    /**
     * The type of invitation that was sent (e.g. email, user).
     */
    invitationType: t_OrganizationInvitationType

    /**
     * The user who was invited to the organization.
     */
    invitee: t_User | null

    /**
     * The user who created the invitation.
     */
    inviter: t_User

    /**
     * The organization the invite is for
     */
    organization: t_Organization

    /**
     * The user's pending role in the organization (e.g. member, owner).
     */
    role: t_OrganizationInvitationRole
  },
  Extension<'OrganizationInvitation'>
>

/**
 * @name OrganizationInvitationType
 * @type ENUM
 */
type t_OrganizationInvitationType = EnumType<'USER' | 'EMAIL'>

/**
 * @name OrganizationInvitationRole
 * @type ENUM
 */
type t_OrganizationInvitationRole = EnumType<
  'DIRECT_MEMBER' | 'ADMIN' | 'BILLING_MANAGER' | 'REINSTATE'
>

/**
 * @name TeamConnection
 * @type OBJECT
 */
type t_TeamConnection = FieldsType<
  {
    __typename: t_String<'TeamConnection'>

    /**
     * A list of edges.
     */
    edges: (t_TeamEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Team | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'TeamConnection'>
>

/**
 * @name TeamEdge
 * @type OBJECT
 */
type t_TeamEdge = FieldsType<
  {
    __typename: t_String<'TeamEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Team | null
  },
  Extension<'TeamEdge'>
>

/**
 * @name Team
 * @type OBJECT
 * @implements Node, Subscribable, MemberStatusable
 */
type t_Team = FieldsType<
  {
    __typename: t_String<'Team'>

    /**
     * A list of teams that are ancestors of this team.
     */
    ancestors: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_TeamConnection
    >

    /**
     * A URL pointing to the team's avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI | null>

    /**
     * List of child teams belonging to this team
     */
    childTeams: FieldsTypeArg<
      {
        orderBy?: TeamOrder | null
        userLogins?: (string)[] | null
        immediateOnly?: boolean | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_TeamConnection
    >

    /**
     * The slug corresponding to the organization and team.
     */
    combinedSlug: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The description of the team.
     */
    description: t_String | null

    /**
     * Find a team discussion by its number.
     */
    discussion: FieldsTypeArg<{ number: number }, t_TeamDiscussion | null>

    /**
     * A list of team discussions.
     */
    discussions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        isPinned?: boolean | null
        orderBy?: TeamDiscussionOrder | null
      },
      t_TeamDiscussionConnection
    >

    /**
     * The HTTP path for team discussions
     */
    discussionsResourcePath: t_URI

    /**
     * The HTTP URL for team discussions
     */
    discussionsUrl: t_URI

    /**
     * The HTTP path for editing this team
     */
    editTeamResourcePath: t_URI

    /**
     * The HTTP URL for editing this team
     */
    editTeamUrl: t_URI
    id: t_ID

    /**
     * A list of pending invitations for users to this team
     */
    invitations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_OrganizationInvitationConnection | null
    >

    /**
     * Get the status messages members of this entity have set that are either public or visible only to the organization.
     */
    memberStatuses: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: UserStatusOrder | null
      },
      t_UserStatusConnection
    >

    /**
     * A list of users who are members of this team.
     */
    members: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
        membership?: TeamMembershipType | null
        role?: TeamMemberRole | null
        orderBy?: TeamMemberOrder | null
      },
      t_TeamMemberConnection
    >

    /**
     * The HTTP path for the team' members
     */
    membersResourcePath: t_URI

    /**
     * The HTTP URL for the team' members
     */
    membersUrl: t_URI

    /**
     * The name of the team.
     */
    name: t_String

    /**
     * The HTTP path creating a new team
     */
    newTeamResourcePath: t_URI

    /**
     * The HTTP URL creating a new team
     */
    newTeamUrl: t_URI

    /**
     * The organization that owns this team.
     */
    organization: t_Organization

    /**
     * The parent team of the team.
     */
    parentTeam: t_Team | null

    /**
     * The level of privacy the team has.
     */
    privacy: t_TeamPrivacy

    /**
     * A list of repositories this team has access to.
     */
    repositories: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        query?: string | null
        orderBy?: TeamRepositoryOrder | null
      },
      t_TeamRepositoryConnection
    >

    /**
     * The HTTP path for this team's repositories
     */
    repositoriesResourcePath: t_URI

    /**
     * The HTTP URL for this team's repositories
     */
    repositoriesUrl: t_URI

    /**
     * The HTTP path for this team
     */
    resourcePath: t_URI

    /**
     * The slug corresponding to the team.
     */
    slug: t_String

    /**
     * The HTTP path for this team's teams
     */
    teamsResourcePath: t_URI

    /**
     * The HTTP URL for this team's teams
     */
    teamsUrl: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this team
     */
    url: t_URI

    /**
     * Team is adminable by the viewer.
     */
    viewerCanAdminister: t_Boolean

    /**
     * Check if the viewer is able to change their subscription status for the repository.
     */
    viewerCanSubscribe: t_Boolean

    /**
     * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
     */
    viewerSubscription: t_SubscriptionState | null
  },
  Extension<'Team'>
>

/**
 * @name TeamPrivacy
 * @type ENUM
 */
type t_TeamPrivacy = EnumType<'SECRET' | 'VISIBLE'>

/**
 * @name TeamMemberConnection
 * @type OBJECT
 */
type t_TeamMemberConnection = FieldsType<
  {
    __typename: t_String<'TeamMemberConnection'>

    /**
     * A list of edges.
     */
    edges: (t_TeamMemberEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'TeamMemberConnection'>
>

/**
 * @name TeamMemberEdge
 * @type OBJECT
 */
type t_TeamMemberEdge = FieldsType<
  {
    __typename: t_String<'TeamMemberEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The HTTP path to the organization's member access page.
     */
    memberAccessResourcePath: t_URI

    /**
     * The HTTP URL to the organization's member access page.
     */
    memberAccessUrl: t_URI
    node: t_User

    /**
     * The role the member has on the team.
     */
    role: t_TeamMemberRole
  },
  Extension<'TeamMemberEdge'>
>

/**
 * @name TeamMemberRole
 * @type ENUM
 */
type t_TeamMemberRole = EnumType<'MAINTAINER' | 'MEMBER'>

/**
 * @name TeamMembershipType
 * @type ENUM
 */
type t_TeamMembershipType = EnumType<'IMMEDIATE' | 'CHILD_TEAM' | 'ALL'>

/**
 * @name TeamMemberOrder
 * @type INPUT_OBJECT
 */
export type TeamMemberOrder = {
  field: TeamMemberOrderField
  direction: OrderDirection
}

/**
 * @name TeamMemberOrderField
 * @type ENUM
 */
type t_TeamMemberOrderField = EnumType<'LOGIN' | 'CREATED_AT'>

/**
 * @name TeamRepositoryConnection
 * @type OBJECT
 */
type t_TeamRepositoryConnection = FieldsType<
  {
    __typename: t_String<'TeamRepositoryConnection'>

    /**
     * A list of edges.
     */
    edges: (t_TeamRepositoryEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Repository | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'TeamRepositoryConnection'>
>

/**
 * @name TeamRepositoryEdge
 * @type OBJECT
 */
type t_TeamRepositoryEdge = FieldsType<
  {
    __typename: t_String<'TeamRepositoryEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String
    node: t_Repository

    /**
     * The permission level the team has on the repository
     */
    permission: t_RepositoryPermission
  },
  Extension<'TeamRepositoryEdge'>
>

/**
 * @name RepositoryPermission
 * @type ENUM
 */
type t_RepositoryPermission = EnumType<
  'ADMIN' | 'MAINTAIN' | 'WRITE' | 'TRIAGE' | 'READ'
>

/**
 * @name TeamRepositoryOrder
 * @type INPUT_OBJECT
 */
export type TeamRepositoryOrder = {
  field: TeamRepositoryOrderField
  direction: OrderDirection
}

/**
 * @name TeamRepositoryOrderField
 * @type ENUM
 */
type t_TeamRepositoryOrderField = EnumType<
  | 'CREATED_AT'
  | 'UPDATED_AT'
  | 'PUSHED_AT'
  | 'NAME'
  | 'PERMISSION'
  | 'STARGAZERS'
>

/**
 * @name OrganizationInvitationConnection
 * @type OBJECT
 */
type t_OrganizationInvitationConnection = FieldsType<
  {
    __typename: t_String<'OrganizationInvitationConnection'>

    /**
     * A list of edges.
     */
    edges: (t_OrganizationInvitationEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_OrganizationInvitation | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'OrganizationInvitationConnection'>
>

/**
 * @name OrganizationInvitationEdge
 * @type OBJECT
 */
type t_OrganizationInvitationEdge = FieldsType<
  {
    __typename: t_String<'OrganizationInvitationEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_OrganizationInvitation | null
  },
  Extension<'OrganizationInvitationEdge'>
>

/**
 * @name TeamOrder
 * @type INPUT_OBJECT
 */
export type TeamOrder = { field: TeamOrderField; direction: OrderDirection }

/**
 * @name TeamOrderField
 * @type ENUM
 */
type t_TeamOrderField = EnumType<'NAME'>

/**
 * @name TeamDiscussionConnection
 * @type OBJECT
 */
type t_TeamDiscussionConnection = FieldsType<
  {
    __typename: t_String<'TeamDiscussionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_TeamDiscussionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_TeamDiscussion | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'TeamDiscussionConnection'>
>

/**
 * @name TeamDiscussionEdge
 * @type OBJECT
 */
type t_TeamDiscussionEdge = FieldsType<
  {
    __typename: t_String<'TeamDiscussionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_TeamDiscussion | null
  },
  Extension<'TeamDiscussionEdge'>
>

/**
 * @name TeamDiscussion
 * @type OBJECT
 * @implements Node, Comment, Deletable, Reactable, Subscribable, UniformResourceLocatable, Updatable, UpdatableComment
 */
type t_TeamDiscussion = FieldsType<
  {
    __typename: t_String<'TeamDiscussion'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the discussion's team.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * The body as Markdown.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body rendered to text.
     */
    bodyText: t_String

    /**
     * Identifies the discussion body hash.
     */
    bodyVersion: t_String

    /**
     * A list of comments on this discussion.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: TeamDiscussionCommentOrder | null
        fromComment?: number | null
      },
      t_TeamDiscussionCommentConnection
    >

    /**
     * The HTTP path for discussion comments
     */
    commentsResourcePath: t_URI

    /**
     * The HTTP URL for discussion comments
     */
    commentsUrl: t_URI

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * Whether or not the discussion is pinned.
     */
    isPinned: t_Boolean

    /**
     * Whether or not the discussion is only visible to team members and org admins.
     */
    isPrivate: t_Boolean

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * Identifies the discussion within its team.
     */
    number: t_Int

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The HTTP path for this discussion
     */
    resourcePath: t_URI

    /**
     * The team that defines the context of this discussion.
     */
    team: t_Team

    /**
     * The title of the discussion
     */
    title: t_String

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this discussion
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Whether or not the current viewer can pin this discussion.
     */
    viewerCanPin: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the viewer is able to change their subscription status for the repository.
     */
    viewerCanSubscribe: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean

    /**
     * Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
     */
    viewerSubscription: t_SubscriptionState | null
  },
  Extension<'TeamDiscussion'>
>

/**
 * @name TeamDiscussionCommentConnection
 * @type OBJECT
 */
type t_TeamDiscussionCommentConnection = FieldsType<
  {
    __typename: t_String<'TeamDiscussionCommentConnection'>

    /**
     * A list of edges.
     */
    edges: (t_TeamDiscussionCommentEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_TeamDiscussionComment | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'TeamDiscussionCommentConnection'>
>

/**
 * @name TeamDiscussionCommentEdge
 * @type OBJECT
 */
type t_TeamDiscussionCommentEdge = FieldsType<
  {
    __typename: t_String<'TeamDiscussionCommentEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_TeamDiscussionComment | null
  },
  Extension<'TeamDiscussionCommentEdge'>
>

/**
 * @name TeamDiscussionComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Reactable, UniformResourceLocatable, Updatable, UpdatableComment
 */
type t_TeamDiscussionComment = FieldsType<
  {
    __typename: t_String<'TeamDiscussionComment'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the comment's team.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * The body as Markdown.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body rendered to text.
     */
    bodyText: t_String

    /**
     * The current version of the body content.
     */
    bodyVersion: t_String

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The discussion this comment is about.
     */
    discussion: t_TeamDiscussion

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * Identifies the comment number.
     */
    number: t_Int

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The HTTP path for this comment
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this comment
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean
  },
  Extension<'TeamDiscussionComment'>
>

/**
 * @name TeamDiscussionCommentOrder
 * @type INPUT_OBJECT
 */
export type TeamDiscussionCommentOrder = {
  field: TeamDiscussionCommentOrderField
  direction: OrderDirection
}

/**
 * @name TeamDiscussionCommentOrderField
 * @type ENUM
 */
type t_TeamDiscussionCommentOrderField = EnumType<'NUMBER'>

/**
 * @name TeamDiscussionOrder
 * @type INPUT_OBJECT
 */
export type TeamDiscussionOrder = {
  field: TeamDiscussionOrderField
  direction: OrderDirection
}

/**
 * @name TeamDiscussionOrderField
 * @type ENUM
 */
type t_TeamDiscussionOrderField = EnumType<'CREATED_AT'>

/**
 * @name EnterpriseOutsideCollaboratorConnection
 * @type OBJECT
 */
type t_EnterpriseOutsideCollaboratorConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseOutsideCollaboratorConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseOutsideCollaboratorEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseOutsideCollaboratorConnection'>
>

/**
 * @name EnterpriseOutsideCollaboratorEdge
 * @type OBJECT
 */
type t_EnterpriseOutsideCollaboratorEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseOutsideCollaboratorEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * Whether the outside collaborator does not have a license for the enterprise.
     */
    isUnlicensed: t_Boolean

    /**
     * The item at the end of the edge.
     */
    node: t_User | null

    /**
     * The enterprise organization repositories this user is a member of.
     */
    repositories: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: RepositoryOrder | null
      },
      t_EnterpriseRepositoryInfoConnection
    >
  },
  Extension<'EnterpriseOutsideCollaboratorEdge'>
>

/**
 * @name EnterpriseRepositoryInfoConnection
 * @type OBJECT
 */
type t_EnterpriseRepositoryInfoConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseRepositoryInfoConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseRepositoryInfoEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseRepositoryInfo | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseRepositoryInfoConnection'>
>

/**
 * @name EnterpriseRepositoryInfoEdge
 * @type OBJECT
 */
type t_EnterpriseRepositoryInfoEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseRepositoryInfoEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseRepositoryInfo | null
  },
  Extension<'EnterpriseRepositoryInfoEdge'>
>

/**
 * @name EnterpriseRepositoryInfo
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseRepositoryInfo = FieldsType<
  {
    __typename: t_String<'EnterpriseRepositoryInfo'>
    id: t_ID

    /**
     * Identifies if the repository is private.
     */
    isPrivate: t_Boolean

    /**
     * The repository's name.
     */
    name: t_String

    /**
     * The repository's name with owner.
     */
    nameWithOwner: t_String
  },
  Extension<'EnterpriseRepositoryInfo'>
>

/**
 * @name EnterprisePendingCollaboratorConnection
 * @type OBJECT
 */
type t_EnterprisePendingCollaboratorConnection = FieldsType<
  {
    __typename: t_String<'EnterprisePendingCollaboratorConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterprisePendingCollaboratorEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterprisePendingCollaboratorConnection'>
>

/**
 * @name EnterprisePendingCollaboratorEdge
 * @type OBJECT
 */
type t_EnterprisePendingCollaboratorEdge = FieldsType<
  {
    __typename: t_String<'EnterprisePendingCollaboratorEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * Whether the invited collaborator does not have a license for the enterprise.
     */
    isUnlicensed: t_Boolean

    /**
     * The item at the end of the edge.
     */
    node: t_User | null

    /**
     * The enterprise organization repositories this user is a member of.
     */
    repositories: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: RepositoryOrder | null
      },
      t_EnterpriseRepositoryInfoConnection
    >
  },
  Extension<'EnterprisePendingCollaboratorEdge'>
>

/**
 * @name RepositoryInvitationOrder
 * @type INPUT_OBJECT
 */
export type RepositoryInvitationOrder = {
  field: RepositoryInvitationOrderField
  direction: OrderDirection
}

/**
 * @name RepositoryInvitationOrderField
 * @type ENUM
 */
type t_RepositoryInvitationOrderField = EnumType<'CREATED_AT' | 'INVITEE_LOGIN'>

/**
 * @name EnterpriseDefaultRepositoryPermissionSettingValue
 * @type ENUM
 */
type t_EnterpriseDefaultRepositoryPermissionSettingValue = EnumType<
  'NO_POLICY' | 'ADMIN' | 'WRITE' | 'READ' | 'NONE'
>

/**
 * @name DefaultRepositoryPermissionField
 * @type ENUM
 */
type t_DefaultRepositoryPermissionField = EnumType<
  'NONE' | 'READ' | 'WRITE' | 'ADMIN'
>

/**
 * @name EnterpriseEnabledDisabledSettingValue
 * @type ENUM
 */
type t_EnterpriseEnabledDisabledSettingValue = EnumType<
  'ENABLED' | 'DISABLED' | 'NO_POLICY'
>

/**
 * @name EnterpriseMembersCanCreateRepositoriesSettingValue
 * @type ENUM
 */
type t_EnterpriseMembersCanCreateRepositoriesSettingValue = EnumType<
  'NO_POLICY' | 'ALL' | 'PUBLIC' | 'PRIVATE' | 'DISABLED'
>

/**
 * @name OrganizationMembersCanCreateRepositoriesSettingValue
 * @type ENUM
 */
type t_OrganizationMembersCanCreateRepositoriesSettingValue = EnumType<
  'ALL' | 'PRIVATE' | 'DISABLED'
>

/**
 * @name EnterpriseMembersCanMakePurchasesSettingValue
 * @type ENUM
 */
type t_EnterpriseMembersCanMakePurchasesSettingValue = EnumType<
  'ENABLED' | 'DISABLED'
>

/**
 * @name ActionExecutionCapabilitySetting
 * @type ENUM
 */
type t_ActionExecutionCapabilitySetting = EnumType<
  'DISABLED' | 'ALL_ACTIONS' | 'LOCAL_ACTIONS_ONLY' | 'NO_POLICY'
>

/**
 * @name EnterpriseEnabledSettingValue
 * @type ENUM
 */
type t_EnterpriseEnabledSettingValue = EnumType<'ENABLED' | 'NO_POLICY'>

/**
 * @name EnterpriseIdentityProvider
 * @type OBJECT
 * @implements Node
 */
type t_EnterpriseIdentityProvider = FieldsType<
  {
    __typename: t_String<'EnterpriseIdentityProvider'>

    /**
     * The digest algorithm used to sign SAML requests for the identity provider.
     */
    digestMethod: t_SamlDigestAlgorithm | null

    /**
     * The enterprise this identity provider belongs to.
     */
    enterprise: t_Enterprise | null

    /**
     * ExternalIdentities provisioned by this identity provider.
     */
    externalIdentities: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ExternalIdentityConnection
    >
    id: t_ID

    /**
     * The x509 certificate used by the identity provider to sign assertions and responses.
     */
    idpCertificate: t_X509Certificate | null

    /**
     * The Issuer Entity ID for the SAML identity provider.
     */
    issuer: t_String | null

    /**
     * Recovery codes that can be used by admins to access the enterprise if the identity provider is unavailable.
     */
    recoveryCodes: (t_String)[] | null

    /**
     * The signature algorithm used to sign SAML requests for the identity provider.
     */
    signatureMethod: t_SamlSignatureAlgorithm | null

    /**
     * The URL endpoint for the identity provider's SAML SSO.
     */
    ssoUrl: t_URI | null
  },
  Extension<'EnterpriseIdentityProvider'>
>

/**
 * @name ExternalIdentityConnection
 * @type OBJECT
 */
type t_ExternalIdentityConnection = FieldsType<
  {
    __typename: t_String<'ExternalIdentityConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ExternalIdentityEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_ExternalIdentity | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ExternalIdentityConnection'>
>

/**
 * @name ExternalIdentityEdge
 * @type OBJECT
 */
type t_ExternalIdentityEdge = FieldsType<
  {
    __typename: t_String<'ExternalIdentityEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_ExternalIdentity | null
  },
  Extension<'ExternalIdentityEdge'>
>

/**
 * @name ExternalIdentity
 * @type OBJECT
 * @implements Node
 */
type t_ExternalIdentity = FieldsType<
  {
    __typename: t_String<'ExternalIdentity'>

    /**
     * The GUID for this identity
     */
    guid: t_String
    id: t_ID

    /**
     * Organization invitation for this SCIM-provisioned external identity
     */
    organizationInvitation: t_OrganizationInvitation | null

    /**
     * SAML Identity attributes
     */
    samlIdentity: t_ExternalIdentitySamlAttributes | null

    /**
     * SCIM Identity attributes
     */
    scimIdentity: t_ExternalIdentityScimAttributes | null

    /**
     * User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member.
     */
    user: t_User | null
  },
  Extension<'ExternalIdentity'>
>

/**
 * @name ExternalIdentitySamlAttributes
 * @type OBJECT
 */
type t_ExternalIdentitySamlAttributes = FieldsType<
  {
    __typename: t_String<'ExternalIdentitySamlAttributes'>

    /**
     * The NameID of the SAML identity
     */
    nameId: t_String | null
  },
  Extension<'ExternalIdentitySamlAttributes'>
>

/**
 * @name ExternalIdentityScimAttributes
 * @type OBJECT
 */
type t_ExternalIdentityScimAttributes = FieldsType<
  {
    __typename: t_String<'ExternalIdentityScimAttributes'>

    /**
     * The userName of the SCIM identity
     */
    username: t_String | null
  },
  Extension<'ExternalIdentityScimAttributes'>
>

/**
 * @name PublicKey
 * @type OBJECT
 * @implements Node
 */
type t_PublicKey = FieldsType<
  {
    __typename: t_String<'PublicKey'>

    /**
     * The last time this authorization was used to perform an action. Values will be null for keys not owned by the user.
     */
    accessedAt: t_DateTime | null

    /**
     * Identifies the date and time when the key was created. Keys created before March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user.
     */
    createdAt: t_DateTime | null

    /**
     * The fingerprint for this PublicKey.
     */
    fingerprint: t_String
    id: t_ID

    /**
     * Whether this PublicKey is read-only or not. Values will be null for keys not owned by the user.
     */
    isReadOnly: t_Boolean | null

    /**
     * The public key string.
     */
    key: t_String

    /**
     * Identifies the date and time when the key was updated. Keys created before March 5th, 2014 may have inaccurate values. Values will be null for keys not owned by the user.
     */
    updatedAt: t_DateTime | null
  },
  Extension<'PublicKey'>
>

/**
 * @name X509Certificate
 * @type SCALAR
 */
type t_X509Certificate<T extends any = any> = ScalarType<
  T,
  Extension<'X509Certificate'>
>

/**
 * @name SamlSignatureAlgorithm
 * @type ENUM
 */
type t_SamlSignatureAlgorithm = EnumType<
  'RSA_SHA1' | 'RSA_SHA256' | 'RSA_SHA384' | 'RSA_SHA512'
>

/**
 * @name SamlDigestAlgorithm
 * @type ENUM
 */
type t_SamlDigestAlgorithm = EnumType<'SHA1' | 'SHA256' | 'SHA384' | 'SHA512'>

/**
 * @name IdentityProviderConfigurationState
 * @type ENUM
 */
type t_IdentityProviderConfigurationState = EnumType<
  'ENFORCED' | 'CONFIGURED' | 'UNCONFIGURED'
>

/**
 * @name EnterpriseServerInstallationConnection
 * @type OBJECT
 */
type t_EnterpriseServerInstallationConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseServerInstallationConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseServerInstallationEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseServerInstallation | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseServerInstallationConnection'>
>

/**
 * @name EnterpriseServerInstallationEdge
 * @type OBJECT
 */
type t_EnterpriseServerInstallationEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseServerInstallationEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseServerInstallation | null
  },
  Extension<'EnterpriseServerInstallationEdge'>
>

/**
 * @name EnterpriseBillingInfo
 * @type OBJECT
 */
type t_EnterpriseBillingInfo = FieldsType<
  {
    __typename: t_String<'EnterpriseBillingInfo'>

    /**
     * The number of licenseable users/emails across the enterprise.
     */
    allLicensableUsersCount: t_Int

    /**
     * The number of data packs used by all organizations owned by the enterprise.
     */
    assetPacks: t_Int

    /**
     * @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC.
     * The number of available seats across all owned organizations based on the unique number of billable users.
     */
    availableSeats: t_Int

    /**
     * The bandwidth quota in GB for all organizations owned by the enterprise.
     */
    bandwidthQuota: t_Float

    /**
     * The bandwidth usage in GB for all organizations owned by the enterprise.
     */
    bandwidthUsage: t_Float

    /**
     * The bandwidth usage as a percentage of the bandwidth quota.
     */
    bandwidthUsagePercentage: t_Int

    /**
     * @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC.
     * The total seats across all organizations owned by the enterprise.
     */
    seats: t_Int

    /**
     * The storage quota in GB for all organizations owned by the enterprise.
     */
    storageQuota: t_Float

    /**
     * The storage usage in GB for all organizations owned by the enterprise.
     */
    storageUsage: t_Float

    /**
     * The storage usage as a percentage of the storage quota.
     */
    storageUsagePercentage: t_Int

    /**
     * The number of available licenses across all owned organizations based on the unique number of billable users.
     */
    totalAvailableLicenses: t_Int

    /**
     * The total number of licenses allocated.
     */
    totalLicenses: t_Int
  },
  Extension<'EnterpriseBillingInfo'>
>

/**
 * @name Date
 * @type SCALAR
 */
type t_Date<T extends string = string> = ScalarType<T, Extension<'Date'>>

/**
 * @name EnterpriseUserAccountConnection
 * @type OBJECT
 */
type t_EnterpriseUserAccountConnection = FieldsType<
  {
    __typename: t_String<'EnterpriseUserAccountConnection'>

    /**
     * A list of edges.
     */
    edges: (t_EnterpriseUserAccountEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_EnterpriseUserAccount | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'EnterpriseUserAccountConnection'>
>

/**
 * @name EnterpriseUserAccountEdge
 * @type OBJECT
 */
type t_EnterpriseUserAccountEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseUserAccountEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_EnterpriseUserAccount | null
  },
  Extension<'EnterpriseUserAccountEdge'>
>

/**
 * @name MembersCanDeleteReposDisableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
type t_MembersCanDeleteReposDisableAuditEntry = FieldsType<
  {
    __typename: t_String<'MembersCanDeleteReposDisableAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'MembersCanDeleteReposDisableAuditEntry'>
>

/**
 * @name MembersCanDeleteReposEnableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
type t_MembersCanDeleteReposEnableAuditEntry = FieldsType<
  {
    __typename: t_String<'MembersCanDeleteReposEnableAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'MembersCanDeleteReposEnableAuditEntry'>
>

/**
 * @name OauthApplicationCreateAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
type t_OauthApplicationCreateAuditEntry = FieldsType<
  {
    __typename: t_String<'OauthApplicationCreateAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The application URL of the OAuth Application.
     */
    applicationUrl: t_URI | null

    /**
     * The callback URL of the OAuth Application.
     */
    callbackUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The name of the OAuth Application.
     */
    oauthApplicationName: t_String | null

    /**
     * The HTTP path for the OAuth Application
     */
    oauthApplicationResourcePath: t_URI | null

    /**
     * The HTTP URL for the OAuth Application
     */
    oauthApplicationUrl: t_URI | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The rate limit of the OAuth Application.
     */
    rateLimit: t_Int | null

    /**
     * The state of the OAuth Application.
     */
    state: t_OauthApplicationCreateAuditEntryState | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OauthApplicationCreateAuditEntry'>
>

/**
 * @name OauthApplicationAuditEntryData
 * @type INTERFACE
 */
type t_OauthApplicationAuditEntryData =
  | t_OauthApplicationCreateAuditEntry
  | t_OrgOauthAppAccessApprovedAuditEntry
  | t_OrgOauthAppAccessDeniedAuditEntry
  | t_OrgOauthAppAccessRequestedAuditEntry

/**
 * @name OauthApplicationCreateAuditEntryState
 * @type ENUM
 */
type t_OauthApplicationCreateAuditEntryState = EnumType<
  'ACTIVE' | 'SUSPENDED' | 'PENDING_DELETION'
>

/**
 * @name OauthApplicationRevokeTokensAuditEntryState
 * @type ENUM
 */
type t_OauthApplicationRevokeTokensAuditEntryState = EnumType<
  'ACTIVE' | 'SUSPENDED' | 'PENDING_DELETION'
>

/**
 * @name OrgAddBillingManagerAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgAddBillingManagerAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgAddBillingManagerAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The email address used to invite a billing manager for the organization.
     */
    invitationEmail: t_String | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgAddBillingManagerAuditEntry'>
>

/**
 * @name OrgAddMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgAddMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgAddMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The permission level of the member added to the organization.
     */
    permission: t_OrgAddMemberAuditEntryPermission | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgAddMemberAuditEntry'>
>

/**
 * @name OrgAddMemberAuditEntryPermission
 * @type ENUM
 */
type t_OrgAddMemberAuditEntryPermission = EnumType<'READ' | 'ADMIN'>

/**
 * @name OrgBlockUserAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgBlockUserAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgBlockUserAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The blocked user.
     */
    blockedUser: t_User | null

    /**
     * The username of the blocked user.
     */
    blockedUserName: t_String | null

    /**
     * The HTTP path for the blocked user.
     */
    blockedUserResourcePath: t_URI | null

    /**
     * The HTTP URL for the blocked user.
     */
    blockedUserUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgBlockUserAuditEntry'>
>

/**
 * @name OrgConfigDisableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgConfigDisableCollaboratorsOnlyAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgConfigDisableCollaboratorsOnlyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgConfigDisableCollaboratorsOnlyAuditEntry'>
>

/**
 * @name OrgConfigEnableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgConfigEnableCollaboratorsOnlyAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgConfigEnableCollaboratorsOnlyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgConfigEnableCollaboratorsOnlyAuditEntry'>
>

/**
 * @name OrgCreateAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgCreateAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgCreateAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The billing plan for the Organization.
     */
    billingPlan: t_OrgCreateAuditEntryBillingPlan | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgCreateAuditEntry'>
>

/**
 * @name OrgCreateAuditEntryBillingPlan
 * @type ENUM
 */
type t_OrgCreateAuditEntryBillingPlan = EnumType<
  'FREE' | 'BUSINESS' | 'BUSINESS_PLUS' | 'UNLIMITED' | 'TIERED_PER_SEAT'
>

/**
 * @name OrgDisableOauthAppRestrictionsAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgDisableOauthAppRestrictionsAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgDisableOauthAppRestrictionsAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgDisableOauthAppRestrictionsAuditEntry'>
>

/**
 * @name OrgDisableSamlAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgDisableSamlAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgDisableSamlAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The SAML provider's digest algorithm URL.
     */
    digestMethodUrl: t_URI | null
    id: t_ID

    /**
     * The SAML provider's issuer URL.
     */
    issuerUrl: t_URI | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The SAML provider's signature algorithm URL.
     */
    signatureMethodUrl: t_URI | null

    /**
     * The SAML provider's single sign-on URL.
     */
    singleSignOnUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgDisableSamlAuditEntry'>
>

/**
 * @name OrgDisableTwoFactorRequirementAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgDisableTwoFactorRequirementAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgDisableTwoFactorRequirementAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgDisableTwoFactorRequirementAuditEntry'>
>

/**
 * @name OrgEnableOauthAppRestrictionsAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgEnableOauthAppRestrictionsAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgEnableOauthAppRestrictionsAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgEnableOauthAppRestrictionsAuditEntry'>
>

/**
 * @name OrgEnableSamlAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgEnableSamlAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgEnableSamlAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The SAML provider's digest algorithm URL.
     */
    digestMethodUrl: t_URI | null
    id: t_ID

    /**
     * The SAML provider's issuer URL.
     */
    issuerUrl: t_URI | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The SAML provider's signature algorithm URL.
     */
    signatureMethodUrl: t_URI | null

    /**
     * The SAML provider's single sign-on URL.
     */
    singleSignOnUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgEnableSamlAuditEntry'>
>

/**
 * @name OrgEnableTwoFactorRequirementAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgEnableTwoFactorRequirementAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgEnableTwoFactorRequirementAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgEnableTwoFactorRequirementAuditEntry'>
>

/**
 * @name OrgInviteMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgInviteMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgInviteMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The email address of the organization invitation.
     */
    email: t_String | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The organization invitation.
     */
    organizationInvitation: t_OrganizationInvitation | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgInviteMemberAuditEntry'>
>

/**
 * @name OrgInviteToBusinessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
type t_OrgInviteToBusinessAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgInviteToBusinessAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgInviteToBusinessAuditEntry'>
>

/**
 * @name OrgOauthAppAccessApprovedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
type t_OrgOauthAppAccessApprovedAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgOauthAppAccessApprovedAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The name of the OAuth Application.
     */
    oauthApplicationName: t_String | null

    /**
     * The HTTP path for the OAuth Application
     */
    oauthApplicationResourcePath: t_URI | null

    /**
     * The HTTP URL for the OAuth Application
     */
    oauthApplicationUrl: t_URI | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgOauthAppAccessApprovedAuditEntry'>
>

/**
 * @name OrgOauthAppAccessDeniedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
type t_OrgOauthAppAccessDeniedAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgOauthAppAccessDeniedAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The name of the OAuth Application.
     */
    oauthApplicationName: t_String | null

    /**
     * The HTTP path for the OAuth Application
     */
    oauthApplicationResourcePath: t_URI | null

    /**
     * The HTTP URL for the OAuth Application
     */
    oauthApplicationUrl: t_URI | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgOauthAppAccessDeniedAuditEntry'>
>

/**
 * @name OrgOauthAppAccessRequestedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
type t_OrgOauthAppAccessRequestedAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgOauthAppAccessRequestedAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The name of the OAuth Application.
     */
    oauthApplicationName: t_String | null

    /**
     * The HTTP path for the OAuth Application
     */
    oauthApplicationResourcePath: t_URI | null

    /**
     * The HTTP URL for the OAuth Application
     */
    oauthApplicationUrl: t_URI | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgOauthAppAccessRequestedAuditEntry'>
>

/**
 * @name OrgRemoveBillingManagerAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgRemoveBillingManagerAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgRemoveBillingManagerAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The reason for the billing manager being removed.
     */
    reason: t_OrgRemoveBillingManagerAuditEntryReason | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgRemoveBillingManagerAuditEntry'>
>

/**
 * @name OrgRemoveBillingManagerAuditEntryReason
 * @type ENUM
 */
type t_OrgRemoveBillingManagerAuditEntryReason = EnumType<
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
>

/**
 * @name OrgRemoveMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgRemoveMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgRemoveMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The types of membership the member has with the organization.
     */
    membershipTypes: (t_OrgRemoveMemberAuditEntryMembershipType)[] | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The reason for the member being removed.
     */
    reason: t_OrgRemoveMemberAuditEntryReason | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgRemoveMemberAuditEntry'>
>

/**
 * @name OrgRemoveMemberAuditEntryReason
 * @type ENUM
 */
type t_OrgRemoveMemberAuditEntryReason = EnumType<
  | 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  | 'SAML_EXTERNAL_IDENTITY_MISSING'
  | 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
>

/**
 * @name OrgRemoveMemberAuditEntryMembershipType
 * @type ENUM
 */
type t_OrgRemoveMemberAuditEntryMembershipType = EnumType<
  | 'DIRECT_MEMBER'
  | 'ADMIN'
  | 'BILLING_MANAGER'
  | 'UNAFFILIATED'
  | 'OUTSIDE_COLLABORATOR'
>

/**
 * @name OrgRemoveOutsideCollaboratorAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgRemoveOutsideCollaboratorAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgRemoveOutsideCollaboratorAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The types of membership the outside collaborator has with the organization.
     */
    membershipTypes:
      | (t_OrgRemoveOutsideCollaboratorAuditEntryMembershipType)[]
      | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The reason for the outside collaborator being removed from the Organization.
     */
    reason: t_OrgRemoveOutsideCollaboratorAuditEntryReason | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgRemoveOutsideCollaboratorAuditEntry'>
>

/**
 * @name OrgRemoveOutsideCollaboratorAuditEntryReason
 * @type ENUM
 */
type t_OrgRemoveOutsideCollaboratorAuditEntryReason = EnumType<
  'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE' | 'SAML_EXTERNAL_IDENTITY_MISSING'
>

/**
 * @name OrgRemoveOutsideCollaboratorAuditEntryMembershipType
 * @type ENUM
 */
type t_OrgRemoveOutsideCollaboratorAuditEntryMembershipType = EnumType<
  'OUTSIDE_COLLABORATOR' | 'UNAFFILIATED' | 'BILLING_MANAGER'
>

/**
 * @name OrgRestoreMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgRestoreMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgRestoreMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The number of custom email routings for the restored member.
     */
    restoredCustomEmailRoutingsCount: t_Int | null

    /**
     * The number of issue assignemnts for the restored member.
     */
    restoredIssueAssignmentsCount: t_Int | null

    /**
     * Restored organization membership objects.
     */
    restoredMemberships: (t_OrgRestoreMemberAuditEntryMembership)[] | null

    /**
     * The number of restored memberships.
     */
    restoredMembershipsCount: t_Int | null

    /**
     * The number of repositories of the restored member.
     */
    restoredRepositoriesCount: t_Int | null

    /**
     * The number of starred repositories for the restored member.
     */
    restoredRepositoryStarsCount: t_Int | null

    /**
     * The number of watched repositories for the restored member.
     */
    restoredRepositoryWatchesCount: t_Int | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgRestoreMemberAuditEntry'>
>

/**
 * @name OrgRestoreMemberAuditEntryMembership
 * @type UNION
 */
type t_OrgRestoreMemberAuditEntryMembership =
  | t_OrgRestoreMemberMembershipOrganizationAuditEntryData
  | t_OrgRestoreMemberMembershipRepositoryAuditEntryData
  | t_OrgRestoreMemberMembershipTeamAuditEntryData

/**
 * @name OrgRestoreMemberMembershipOrganizationAuditEntryData
 * @type OBJECT
 * @implements OrganizationAuditEntryData
 */
type t_OrgRestoreMemberMembershipOrganizationAuditEntryData = FieldsType<
  {
    __typename: t_String<'OrgRestoreMemberMembershipOrganizationAuditEntryData'>

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null
  },
  Extension<'OrgRestoreMemberMembershipOrganizationAuditEntryData'>
>

/**
 * @name OrgRestoreMemberMembershipRepositoryAuditEntryData
 * @type OBJECT
 * @implements RepositoryAuditEntryData
 */
type t_OrgRestoreMemberMembershipRepositoryAuditEntryData = FieldsType<
  {
    __typename: t_String<'OrgRestoreMemberMembershipRepositoryAuditEntryData'>

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null
  },
  Extension<'OrgRestoreMemberMembershipRepositoryAuditEntryData'>
>

/**
 * @name RepositoryAuditEntryData
 * @type INTERFACE
 */
type t_RepositoryAuditEntryData =
  | t_OrgRestoreMemberMembershipRepositoryAuditEntryData
  | t_PrivateRepositoryForkingDisableAuditEntry
  | t_PrivateRepositoryForkingEnableAuditEntry
  | t_RepoAccessAuditEntry
  | t_RepoAddMemberAuditEntry
  | t_RepoAddTopicAuditEntry
  | t_RepoArchivedAuditEntry
  | t_RepoChangeMergeSettingAuditEntry
  | t_RepoConfigDisableAnonymousGitAccessAuditEntry
  | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
  | t_RepoConfigDisableContributorsOnlyAuditEntry
  | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
  | t_RepoConfigEnableAnonymousGitAccessAuditEntry
  | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
  | t_RepoConfigEnableContributorsOnlyAuditEntry
  | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
  | t_RepoConfigLockAnonymousGitAccessAuditEntry
  | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
  | t_RepoCreateAuditEntry
  | t_RepoDestroyAuditEntry
  | t_RepoRemoveMemberAuditEntry
  | t_RepoRemoveTopicAuditEntry
  | t_TeamAddRepositoryAuditEntry
  | t_TeamRemoveRepositoryAuditEntry

/**
 * @name OrgRestoreMemberMembershipTeamAuditEntryData
 * @type OBJECT
 * @implements TeamAuditEntryData
 */
type t_OrgRestoreMemberMembershipTeamAuditEntryData = FieldsType<
  {
    __typename: t_String<'OrgRestoreMemberMembershipTeamAuditEntryData'>

    /**
     * The team associated with the action
     */
    team: t_Team | null

    /**
     * The name of the team
     */
    teamName: t_String | null

    /**
     * The HTTP path for this team
     */
    teamResourcePath: t_URI | null

    /**
     * The HTTP URL for this team
     */
    teamUrl: t_URI | null
  },
  Extension<'OrgRestoreMemberMembershipTeamAuditEntryData'>
>

/**
 * @name TeamAuditEntryData
 * @type INTERFACE
 */
type t_TeamAuditEntryData =
  | t_OrgRestoreMemberMembershipTeamAuditEntryData
  | t_TeamAddMemberAuditEntry
  | t_TeamAddRepositoryAuditEntry
  | t_TeamChangeParentTeamAuditEntry
  | t_TeamRemoveMemberAuditEntry
  | t_TeamRemoveRepositoryAuditEntry

/**
 * @name OrgUnblockUserAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgUnblockUserAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgUnblockUserAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The user being unblocked by the organization.
     */
    blockedUser: t_User | null

    /**
     * The username of the blocked user.
     */
    blockedUserName: t_String | null

    /**
     * The HTTP path for the blocked user.
     */
    blockedUserResourcePath: t_URI | null

    /**
     * The HTTP URL for the blocked user.
     */
    blockedUserUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgUnblockUserAuditEntry'>
>

/**
 * @name OrgUpdateDefaultRepositoryPermissionAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgUpdateDefaultRepositoryPermissionAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgUpdateDefaultRepositoryPermissionAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The new default repository permission level for the organization.
     */
    permission: t_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission | null

    /**
     * The former default repository permission level for the organization.
     */
    permissionWas: t_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgUpdateDefaultRepositoryPermissionAuditEntry'>
>

/**
 * @name OrgUpdateDefaultRepositoryPermissionAuditEntryPermission
 * @type ENUM
 */
type t_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = EnumType<
  'READ' | 'WRITE' | 'ADMIN' | 'NONE'
>

/**
 * @name OrgUpdateMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgUpdateMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'OrgUpdateMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The new member permission level for the organization.
     */
    permission: t_OrgUpdateMemberAuditEntryPermission | null

    /**
     * The former member permission level for the organization.
     */
    permissionWas: t_OrgUpdateMemberAuditEntryPermission | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgUpdateMemberAuditEntry'>
>

/**
 * @name OrgUpdateMemberAuditEntryPermission
 * @type ENUM
 */
type t_OrgUpdateMemberAuditEntryPermission = EnumType<'READ' | 'ADMIN'>

/**
 * @name OrgUpdateMemberRepositoryCreationPermissionAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry = FieldsType<
  {
    __typename: t_String<
      'OrgUpdateMemberRepositoryCreationPermissionAuditEntry'
    >

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * Can members create repositories in the organization.
     */
    canCreateRepositories: t_Boolean | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The permission for visibility level of repositories for this organization.
     */
    visibility: t_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility | null
  },
  Extension<'OrgUpdateMemberRepositoryCreationPermissionAuditEntry'>
>

/**
 * @name OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility
 * @type ENUM
 */
type t_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = EnumType<
  'ALL' | 'PUBLIC'
>

/**
 * @name OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
type t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = FieldsType<
  {
    __typename: t_String<
      'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry'
    >

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * Can outside collaborators be invited to repositories in the organization.
     */
    canInviteOutsideCollaboratorsToRepositories: t_Boolean | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry'>
>

/**
 * @name PrivateRepositoryForkingDisableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_PrivateRepositoryForkingDisableAuditEntry = FieldsType<
  {
    __typename: t_String<'PrivateRepositoryForkingDisableAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'PrivateRepositoryForkingDisableAuditEntry'>
>

/**
 * @name PrivateRepositoryForkingEnableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_PrivateRepositoryForkingEnableAuditEntry = FieldsType<
  {
    __typename: t_String<'PrivateRepositoryForkingEnableAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'PrivateRepositoryForkingEnableAuditEntry'>
>

/**
 * @name RepoAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoAccessAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoAccessAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The visibility of the repository
     */
    visibility: t_RepoAccessAuditEntryVisibility | null
  },
  Extension<'RepoAccessAuditEntry'>
>

/**
 * @name RepoAccessAuditEntryVisibility
 * @type ENUM
 */
type t_RepoAccessAuditEntryVisibility = EnumType<
  'INTERNAL' | 'PRIVATE' | 'PUBLIC'
>

/**
 * @name RepoAddMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoAddMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoAddMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The visibility of the repository
     */
    visibility: t_RepoAddMemberAuditEntryVisibility | null
  },
  Extension<'RepoAddMemberAuditEntry'>
>

/**
 * @name RepoAddMemberAuditEntryVisibility
 * @type ENUM
 */
type t_RepoAddMemberAuditEntryVisibility = EnumType<
  'INTERNAL' | 'PRIVATE' | 'PUBLIC'
>

/**
 * @name RepoAddTopicAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
 */
type t_RepoAddTopicAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoAddTopicAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The name of the topic added to the repository
     */
    topic: t_Topic | null

    /**
     * The name of the topic added to the repository
     */
    topicName: t_String | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoAddTopicAuditEntry'>
>

/**
 * @name TopicAuditEntryData
 * @type INTERFACE
 */
type t_TopicAuditEntryData =
  | t_RepoAddTopicAuditEntry
  | t_RepoRemoveTopicAuditEntry

/**
 * @name RepoArchivedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
type t_RepoArchivedAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoArchivedAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The visibility of the repository
     */
    visibility: t_RepoArchivedAuditEntryVisibility | null
  },
  Extension<'RepoArchivedAuditEntry'>
>

/**
 * @name RepoArchivedAuditEntryVisibility
 * @type ENUM
 */
type t_RepoArchivedAuditEntryVisibility = EnumType<
  'INTERNAL' | 'PRIVATE' | 'PUBLIC'
>

/**
 * @name RepoChangeMergeSettingAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
type t_RepoChangeMergeSettingAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoChangeMergeSettingAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * Whether the change was to enable (true) or disable (false) the merge type
     */
    isEnabled: t_Boolean | null

    /**
     * The merge method affected by the change
     */
    mergeType: t_RepoChangeMergeSettingAuditEntryMergeType | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoChangeMergeSettingAuditEntry'>
>

/**
 * @name RepoChangeMergeSettingAuditEntryMergeType
 * @type ENUM
 */
type t_RepoChangeMergeSettingAuditEntryMergeType = EnumType<
  'MERGE' | 'REBASE' | 'SQUASH'
>

/**
 * @name RepoConfigDisableAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigDisableAnonymousGitAccessAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigDisableAnonymousGitAccessAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigDisableAnonymousGitAccessAuditEntry'>
>

/**
 * @name RepoConfigDisableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigDisableCollaboratorsOnlyAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigDisableCollaboratorsOnlyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigDisableCollaboratorsOnlyAuditEntry'>
>

/**
 * @name RepoConfigDisableContributorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigDisableContributorsOnlyAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigDisableContributorsOnlyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigDisableContributorsOnlyAuditEntry'>
>

/**
 * @name RepoConfigDisableSockpuppetDisallowedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigDisableSockpuppetDisallowedAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigDisableSockpuppetDisallowedAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigDisableSockpuppetDisallowedAuditEntry'>
>

/**
 * @name RepoConfigEnableAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigEnableAnonymousGitAccessAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigEnableAnonymousGitAccessAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigEnableAnonymousGitAccessAuditEntry'>
>

/**
 * @name RepoConfigEnableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigEnableCollaboratorsOnlyAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigEnableCollaboratorsOnlyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigEnableCollaboratorsOnlyAuditEntry'>
>

/**
 * @name RepoConfigEnableContributorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigEnableContributorsOnlyAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigEnableContributorsOnlyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigEnableContributorsOnlyAuditEntry'>
>

/**
 * @name RepoConfigEnableSockpuppetDisallowedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigEnableSockpuppetDisallowedAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigEnableSockpuppetDisallowedAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigEnableSockpuppetDisallowedAuditEntry'>
>

/**
 * @name RepoConfigLockAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigLockAnonymousGitAccessAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigLockAnonymousGitAccessAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigLockAnonymousGitAccessAuditEntry'>
>

/**
 * @name RepoConfigUnlockAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoConfigUnlockAnonymousGitAccessAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoConfigUnlockAnonymousGitAccessAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoConfigUnlockAnonymousGitAccessAuditEntry'>
>

/**
 * @name RepoCreateAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
type t_RepoCreateAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoCreateAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The name of the parent repository for this forked repository.
     */
    forkParentName: t_String | null

    /**
     * The name of the root repository for this netork.
     */
    forkSourceName: t_String | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The visibility of the repository
     */
    visibility: t_RepoCreateAuditEntryVisibility | null
  },
  Extension<'RepoCreateAuditEntry'>
>

/**
 * @name RepoCreateAuditEntryVisibility
 * @type ENUM
 */
type t_RepoCreateAuditEntryVisibility = EnumType<
  'INTERNAL' | 'PRIVATE' | 'PUBLIC'
>

/**
 * @name RepoDestroyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
type t_RepoDestroyAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoDestroyAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The visibility of the repository
     */
    visibility: t_RepoDestroyAuditEntryVisibility | null
  },
  Extension<'RepoDestroyAuditEntry'>
>

/**
 * @name RepoDestroyAuditEntryVisibility
 * @type ENUM
 */
type t_RepoDestroyAuditEntryVisibility = EnumType<
  'INTERNAL' | 'PRIVATE' | 'PUBLIC'
>

/**
 * @name RepoRemoveMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
type t_RepoRemoveMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoRemoveMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null

    /**
     * The visibility of the repository
     */
    visibility: t_RepoRemoveMemberAuditEntryVisibility | null
  },
  Extension<'RepoRemoveMemberAuditEntry'>
>

/**
 * @name RepoRemoveMemberAuditEntryVisibility
 * @type ENUM
 */
type t_RepoRemoveMemberAuditEntryVisibility = EnumType<
  'INTERNAL' | 'PRIVATE' | 'PUBLIC'
>

/**
 * @name RepoRemoveTopicAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
 */
type t_RepoRemoveTopicAuditEntry = FieldsType<
  {
    __typename: t_String<'RepoRemoveTopicAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The name of the topic added to the repository
     */
    topic: t_Topic | null

    /**
     * The name of the topic added to the repository
     */
    topicName: t_String | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepoRemoveTopicAuditEntry'>
>

/**
 * @name RepositoryVisibilityChangeDisableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
type t_RepositoryVisibilityChangeDisableAuditEntry = FieldsType<
  {
    __typename: t_String<'RepositoryVisibilityChangeDisableAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepositoryVisibilityChangeDisableAuditEntry'>
>

/**
 * @name RepositoryVisibilityChangeEnableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
type t_RepositoryVisibilityChangeEnableAuditEntry = FieldsType<
  {
    __typename: t_String<'RepositoryVisibilityChangeEnableAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime

    /**
     * The HTTP path for this enterprise.
     */
    enterpriseResourcePath: t_URI | null

    /**
     * The slug of the enterprise.
     */
    enterpriseSlug: t_String | null

    /**
     * The HTTP URL for this enterprise.
     */
    enterpriseUrl: t_URI | null
    id: t_ID

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'RepositoryVisibilityChangeEnableAuditEntry'>
>

/**
 * @name TeamAddMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
type t_TeamAddMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'TeamAddMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * Whether the team was mapped to an LDAP Group.
     */
    isLdapMapped: t_Boolean | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The team associated with the action
     */
    team: t_Team | null

    /**
     * The name of the team
     */
    teamName: t_String | null

    /**
     * The HTTP path for this team
     */
    teamResourcePath: t_URI | null

    /**
     * The HTTP URL for this team
     */
    teamUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'TeamAddMemberAuditEntry'>
>

/**
 * @name TeamAddRepositoryAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
 */
type t_TeamAddRepositoryAuditEntry = FieldsType<
  {
    __typename: t_String<'TeamAddRepositoryAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * Whether the team was mapped to an LDAP Group.
     */
    isLdapMapped: t_Boolean | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The team associated with the action
     */
    team: t_Team | null

    /**
     * The name of the team
     */
    teamName: t_String | null

    /**
     * The HTTP path for this team
     */
    teamResourcePath: t_URI | null

    /**
     * The HTTP URL for this team
     */
    teamUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'TeamAddRepositoryAuditEntry'>
>

/**
 * @name TeamChangeParentTeamAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
type t_TeamChangeParentTeamAuditEntry = FieldsType<
  {
    __typename: t_String<'TeamChangeParentTeamAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * Whether the team was mapped to an LDAP Group.
     */
    isLdapMapped: t_Boolean | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The new parent team.
     */
    parentTeam: t_Team | null

    /**
     * The name of the new parent team
     */
    parentTeamName: t_String | null

    /**
     * The name of the former parent team
     */
    parentTeamNameWas: t_String | null

    /**
     * The HTTP path for the parent team
     */
    parentTeamResourcePath: t_URI | null

    /**
     * The HTTP URL for the parent team
     */
    parentTeamUrl: t_URI | null

    /**
     * The former parent team.
     */
    parentTeamWas: t_Team | null

    /**
     * The HTTP path for the previous parent team
     */
    parentTeamWasResourcePath: t_URI | null

    /**
     * The HTTP URL for the previous parent team
     */
    parentTeamWasUrl: t_URI | null

    /**
     * The team associated with the action
     */
    team: t_Team | null

    /**
     * The name of the team
     */
    teamName: t_String | null

    /**
     * The HTTP path for this team
     */
    teamResourcePath: t_URI | null

    /**
     * The HTTP URL for this team
     */
    teamUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'TeamChangeParentTeamAuditEntry'>
>

/**
 * @name TeamRemoveMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
type t_TeamRemoveMemberAuditEntry = FieldsType<
  {
    __typename: t_String<'TeamRemoveMemberAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * Whether the team was mapped to an LDAP Group.
     */
    isLdapMapped: t_Boolean | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The team associated with the action
     */
    team: t_Team | null

    /**
     * The name of the team
     */
    teamName: t_String | null

    /**
     * The HTTP path for this team
     */
    teamResourcePath: t_URI | null

    /**
     * The HTTP URL for this team
     */
    teamUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'TeamRemoveMemberAuditEntry'>
>

/**
 * @name TeamRemoveRepositoryAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
 */
type t_TeamRemoveRepositoryAuditEntry = FieldsType<
  {
    __typename: t_String<'TeamRemoveRepositoryAuditEntry'>

    /**
     * The action name
     */
    action: t_String

    /**
     * The user who initiated the action
     */
    actor: t_AuditEntryActor | null

    /**
     * The IP address of the actor
     */
    actorIp: t_String | null

    /**
     * A readable representation of the actor's location
     */
    actorLocation: t_ActorLocation | null

    /**
     * The username of the user who initiated the action
     */
    actorLogin: t_String | null

    /**
     * The HTTP path for the actor.
     */
    actorResourcePath: t_URI | null

    /**
     * The HTTP URL for the actor.
     */
    actorUrl: t_URI | null

    /**
     * The time the action was initiated
     */
    createdAt: t_PreciseDateTime
    id: t_ID

    /**
     * Whether the team was mapped to an LDAP Group.
     */
    isLdapMapped: t_Boolean | null

    /**
     * The corresponding operation type for the action
     */
    operationType: t_OperationType | null

    /**
     * The Organization associated with the Audit Entry.
     */
    organization: t_Organization | null

    /**
     * The name of the Organization.
     */
    organizationName: t_String | null

    /**
     * The HTTP path for the organization
     */
    organizationResourcePath: t_URI | null

    /**
     * The HTTP URL for the organization
     */
    organizationUrl: t_URI | null

    /**
     * The repository associated with the action
     */
    repository: t_Repository | null

    /**
     * The name of the repository
     */
    repositoryName: t_String | null

    /**
     * The HTTP path for the repository
     */
    repositoryResourcePath: t_URI | null

    /**
     * The HTTP URL for the repository
     */
    repositoryUrl: t_URI | null

    /**
     * The team associated with the action
     */
    team: t_Team | null

    /**
     * The name of the team
     */
    teamName: t_String | null

    /**
     * The HTTP path for this team
     */
    teamResourcePath: t_URI | null

    /**
     * The HTTP URL for this team
     */
    teamUrl: t_URI | null

    /**
     * The user affected by the action
     */
    user: t_User | null

    /**
     * For actions involving two users, the actor is the initiator and the user is the affected user.
     */
    userLogin: t_String | null

    /**
     * The HTTP path for the user.
     */
    userResourcePath: t_URI | null

    /**
     * The HTTP URL for the user.
     */
    userUrl: t_URI | null
  },
  Extension<'TeamRemoveRepositoryAuditEntry'>
>

/**
 * @name AuditLogOrder
 * @type INPUT_OBJECT
 */
export type AuditLogOrder = {
  field: AuditLogOrderField | null
  direction: OrderDirection | null
}

/**
 * @name AuditLogOrderField
 * @type ENUM
 */
type t_AuditLogOrderField = EnumType<'CREATED_AT'>

/**
 * @name OrganizationIdentityProvider
 * @type OBJECT
 * @implements Node
 */
type t_OrganizationIdentityProvider = FieldsType<
  {
    __typename: t_String<'OrganizationIdentityProvider'>

    /**
     * The digest algorithm used to sign SAML requests for the Identity Provider.
     */
    digestMethod: t_URI | null

    /**
     * External Identities provisioned by this Identity Provider
     */
    externalIdentities: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ExternalIdentityConnection
    >
    id: t_ID

    /**
     * The x509 certificate used by the Identity Provder to sign assertions and responses.
     */
    idpCertificate: t_X509Certificate | null

    /**
     * The Issuer Entity ID for the SAML Identity Provider
     */
    issuer: t_String | null

    /**
     * Organization this Identity Provider belongs to
     */
    organization: t_Organization | null

    /**
     * The signature algorithm used to sign SAML requests for the Identity Provider.
     */
    signatureMethod: t_URI | null

    /**
     * The URL endpoint for the Identity Provider's SAML SSO.
     */
    ssoUrl: t_URI | null
  },
  Extension<'OrganizationIdentityProvider'>
>

/**
 * @name Mannequin
 * @type OBJECT
 * @implements Node, Actor, UniformResourceLocatable
 */
type t_Mannequin = FieldsType<
  {
    __typename: t_String<'Mannequin'>

    /**
     * A URL pointing to the GitHub App's public avatar.
     */
    avatarUrl: FieldsTypeArg<{ size?: number | null }, t_URI>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The mannequin's email on the source instance.
     */
    email: t_String | null
    id: t_ID

    /**
     * The username of the actor.
     */
    login: t_String

    /**
     * The HTML path to this resource.
     */
    resourcePath: t_URI

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The URL to this resource.
     */
    url: t_URI
  },
  Extension<'Mannequin'>
>

/**
 * @name OrganizationMemberConnection
 * @type OBJECT
 */
type t_OrganizationMemberConnection = FieldsType<
  {
    __typename: t_String<'OrganizationMemberConnection'>

    /**
     * A list of edges.
     */
    edges: (t_OrganizationMemberEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'OrganizationMemberConnection'>
>

/**
 * @name OrganizationMemberEdge
 * @type OBJECT
 */
type t_OrganizationMemberEdge = FieldsType<
  {
    __typename: t_String<'OrganizationMemberEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer.
     */
    hasTwoFactorEnabled: t_Boolean | null

    /**
     * The item at the end of the edge.
     */
    node: t_User | null

    /**
     * The role this user has in the organization.
     */
    role: t_OrganizationMemberRole | null
  },
  Extension<'OrganizationMemberEdge'>
>

/**
 * @name OrganizationMemberRole
 * @type ENUM
 */
type t_OrganizationMemberRole = EnumType<'MEMBER' | 'ADMIN'>

/**
 * @name TeamRole
 * @type ENUM
 */
type t_TeamRole = EnumType<'ADMIN' | 'MEMBER'>

/**
 * @name GistPrivacy
 * @type ENUM
 */
type t_GistPrivacy = EnumType<'PUBLIC' | 'SECRET' | 'ALL'>

/**
 * @name RepositoryInvitationEdge
 * @type OBJECT
 */
type t_RepositoryInvitationEdge = FieldsType<
  {
    __typename: t_String<'RepositoryInvitationEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RepositoryInvitation | null
  },
  Extension<'RepositoryInvitationEdge'>
>

/**
 * @name RepositoryInvitation
 * @type OBJECT
 * @implements Node
 */
type t_RepositoryInvitation = FieldsType<
  {
    __typename: t_String<'RepositoryInvitation'>
    id: t_ID

    /**
     * The user who received the invitation.
     */
    invitee: t_User

    /**
     * The user who created the invitation.
     */
    inviter: t_User

    /**
     * The permission granted on this repository by this invitation.
     */
    permission: t_RepositoryPermission

    /**
     * The Repository the user is invited to.
     */
    repository: t_Repository | null
  },
  Extension<'RepositoryInvitation'>
>

/**
 * @name SponsorsTierOrder
 * @type INPUT_OBJECT
 */
export type SponsorsTierOrder = {
  field: SponsorsTierOrderField
  direction: OrderDirection
}

/**
 * @name SponsorsTierOrderField
 * @type ENUM
 */
type t_SponsorsTierOrderField = EnumType<
  'CREATED_AT' | 'MONTHLY_PRICE_IN_CENTS'
>

/**
 * @name SponsorsTierAdminInfo
 * @type OBJECT
 */
type t_SponsorsTierAdminInfo = FieldsType<
  {
    __typename: t_String<'SponsorsTierAdminInfo'>

    /**
     * The sponsorships associated with this tier.
     */
    sponsorships: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        includePrivate?: boolean | null
        orderBy?: SponsorshipOrder | null
      },
      t_SponsorshipConnection
    >
  },
  Extension<'SponsorsTierAdminInfo'>
>

/**
 * @name LanguageConnection
 * @type OBJECT
 */
type t_LanguageConnection = FieldsType<
  {
    __typename: t_String<'LanguageConnection'>

    /**
     * A list of edges.
     */
    edges: (t_LanguageEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Language | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int

    /**
     * The total size in bytes of files written in that language.
     */
    totalSize: t_Int
  },
  Extension<'LanguageConnection'>
>

/**
 * @name LanguageEdge
 * @type OBJECT
 */
type t_LanguageEdge = FieldsType<
  {
    __typename: t_String<'LanguageEdge'>
    cursor: t_String
    node: t_Language

    /**
     * The number of bytes of code written in the language.
     */
    size: t_Int
  },
  Extension<'LanguageEdge'>
>

/**
 * @name Milestone
 * @type OBJECT
 * @implements Node, Closable, UniformResourceLocatable
 */
type t_Milestone = FieldsType<
  {
    __typename: t_String<'Milestone'>

    /**
     * `true` if the object is closed (definition of closed may depend on type)
     */
    closed: t_Boolean

    /**
     * Identifies the date and time when the object was closed.
     */
    closedAt: t_DateTime | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the actor who created the milestone.
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the description of the milestone.
     */
    description: t_String | null

    /**
     * Identifies the due date of the milestone.
     */
    dueOn: t_DateTime | null
    id: t_ID

    /**
     * Just for debugging on review-lab
     */
    issuePrioritiesDebug: t_String

    /**
     * A list of issues associated with the milestone.
     */
    issues: FieldsTypeArg<
      {
        orderBy?: IssueOrder | null
        labels?: (string)[] | null
        states?: (IssueState)[] | null
        filterBy?: IssueFilters | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_IssueConnection
    >

    /**
     * Identifies the number of the milestone.
     */
    number: t_Int

    /**
     * A list of pull requests associated with the milestone.
     */
    pullRequests: FieldsTypeArg<
      {
        states?: (PullRequestState)[] | null
        labels?: (string)[] | null
        headRefName?: string | null
        baseRefName?: string | null
        orderBy?: IssueOrder | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestConnection
    >

    /**
     * The repository associated with this milestone.
     */
    repository: t_Repository

    /**
     * The HTTP path for this milestone
     */
    resourcePath: t_URI

    /**
     * Identifies the state of the milestone.
     */
    state: t_MilestoneState

    /**
     * Identifies the title of the milestone.
     */
    title: t_String

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL for this milestone
     */
    url: t_URI
  },
  Extension<'Milestone'>
>

/**
 * @name MilestoneState
 * @type ENUM
 */
type t_MilestoneState = EnumType<'OPEN' | 'CLOSED'>

/**
 * @name PullRequestChangedFileConnection
 * @type OBJECT
 */
type t_PullRequestChangedFileConnection = FieldsType<
  {
    __typename: t_String<'PullRequestChangedFileConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestChangedFileEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestChangedFile | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestChangedFileConnection'>
>

/**
 * @name PullRequestChangedFileEdge
 * @type OBJECT
 */
type t_PullRequestChangedFileEdge = FieldsType<
  {
    __typename: t_String<'PullRequestChangedFileEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestChangedFile | null
  },
  Extension<'PullRequestChangedFileEdge'>
>

/**
 * @name PullRequestChangedFile
 * @type OBJECT
 */
type t_PullRequestChangedFile = FieldsType<
  {
    __typename: t_String<'PullRequestChangedFile'>

    /**
     * The number of additions to the file.
     */
    additions: t_Int

    /**
     * The number of deletions to the file.
     */
    deletions: t_Int

    /**
     * The path of the file.
     */
    path: t_String
  },
  Extension<'PullRequestChangedFile'>
>

/**
 * @name MergeableState
 * @type ENUM
 */
type t_MergeableState = EnumType<'MERGEABLE' | 'CONFLICTING' | 'UNKNOWN'>

/**
 * @name PullRequestReviewComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
type t_PullRequestReviewComment = FieldsType<
  {
    __typename: t_String<'PullRequestReviewComment'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the subject of the comment.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * The comment body of this review comment.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The comment body of this review comment rendered as plain text.
     */
    bodyText: t_String

    /**
     * Identifies the commit associated with the comment.
     */
    commit: t_Commit | null

    /**
     * Identifies when the comment was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The diff hunk to which the comment applies.
     */
    diffHunk: t_String

    /**
     * Identifies when the comment was created in a draft state.
     */
    draftedAt: t_DateTime

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * Returns whether or not a comment has been minimized.
     */
    isMinimized: t_Boolean

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * Returns why the comment was minimized.
     */
    minimizedReason: t_String | null

    /**
     * Identifies the original commit associated with the comment.
     */
    originalCommit: t_Commit | null

    /**
     * The original line index in the diff to which the comment applies.
     */
    originalPosition: t_Int

    /**
     * Identifies when the comment body is outdated
     */
    outdated: t_Boolean

    /**
     * The path to which the comment applies.
     */
    path: t_String

    /**
     * The line index in the diff to which the comment applies.
     */
    position: t_Int | null

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * The pull request associated with this review comment.
     */
    pullRequest: t_PullRequest

    /**
     * The pull request review associated with this review comment.
     */
    pullRequestReview: t_PullRequestReview | null

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The comment this is a reply to.
     */
    replyTo: t_PullRequestReviewComment | null

    /**
     * The repository associated with this node.
     */
    repository: t_Repository

    /**
     * The HTTP path permalink for this review comment.
     */
    resourcePath: t_URI

    /**
     * Identifies the state of the comment.
     */
    state: t_PullRequestReviewCommentState

    /**
     * Identifies when the comment was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL permalink for this review comment.
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Check if the current viewer can minimize this object.
     */
    viewerCanMinimize: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean
  },
  Extension<'PullRequestReviewComment'>
>

/**
 * @name PullRequestReview
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
type t_PullRequestReview = FieldsType<
  {
    __typename: t_String<'PullRequestReview'>

    /**
     * The actor who authored the comment.
     */
    author:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Author's association with the subject of the comment.
     */
    authorAssociation: t_CommentAuthorAssociation

    /**
     * Identifies the pull request review body.
     */
    body: t_String

    /**
     * The body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * The body of this review rendered as plain text.
     */
    bodyText: t_String

    /**
     * A list of review comments for the current pull request review.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PullRequestReviewCommentConnection
    >

    /**
     * Identifies the commit associated with this pull request review.
     */
    commit: t_Commit | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Check if this comment was created via an email reply.
     */
    createdViaEmail: t_Boolean

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The actor who edited the comment.
     */
    editor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
    id: t_ID

    /**
     * Check if this comment was edited and includes an edit with the creation data
     */
    includesCreatedEdit: t_Boolean

    /**
     * The moment the editor made the last edit
     */
    lastEditedAt: t_DateTime | null

    /**
     * A list of teams that this review was made on behalf of.
     */
    onBehalfOf: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_TeamConnection
    >

    /**
     * Identifies when the comment was published at.
     */
    publishedAt: t_DateTime | null

    /**
     * Identifies the pull request associated with this pull request review.
     */
    pullRequest: t_PullRequest

    /**
     * A list of reactions grouped by content left on the subject.
     */
    reactionGroups: (t_ReactionGroup)[] | null

    /**
     * A list of Reactions left on the Issue.
     */
    reactions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        content?: ReactionContent | null
        orderBy?: ReactionOrder | null
      },
      t_ReactionConnection
    >

    /**
     * The repository associated with this node.
     */
    repository: t_Repository

    /**
     * The HTTP path permalink for this PullRequestReview.
     */
    resourcePath: t_URI

    /**
     * Identifies the current state of the pull request review.
     */
    state: t_PullRequestReviewState

    /**
     * Identifies when the Pull Request Review was submitted
     */
    submittedAt: t_DateTime | null

    /**
     * Identifies the date and time when the object was last updated.
     */
    updatedAt: t_DateTime

    /**
     * The HTTP URL permalink for this PullRequestReview.
     */
    url: t_URI

    /**
     * A list of edits to this content.
     */
    userContentEdits: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_UserContentEditConnection | null
    >

    /**
     * Check if the current viewer can delete this object.
     */
    viewerCanDelete: t_Boolean

    /**
     * Can user react to this subject
     */
    viewerCanReact: t_Boolean

    /**
     * Check if the current viewer can update this object.
     */
    viewerCanUpdate: t_Boolean

    /**
     * Reasons why the current viewer can not update this comment.
     */
    viewerCannotUpdateReasons: (t_CommentCannotUpdateReason)[]

    /**
     * Did the viewer author this comment.
     */
    viewerDidAuthor: t_Boolean
  },
  Extension<'PullRequestReview'>
>

/**
 * @name PullRequestReviewState
 * @type ENUM
 */
type t_PullRequestReviewState = EnumType<
  'PENDING' | 'COMMENTED' | 'APPROVED' | 'CHANGES_REQUESTED' | 'DISMISSED'
>

/**
 * @name PullRequestReviewCommentConnection
 * @type OBJECT
 */
type t_PullRequestReviewCommentConnection = FieldsType<
  {
    __typename: t_String<'PullRequestReviewCommentConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestReviewCommentEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestReviewComment | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestReviewCommentConnection'>
>

/**
 * @name PullRequestReviewCommentEdge
 * @type OBJECT
 */
type t_PullRequestReviewCommentEdge = FieldsType<
  {
    __typename: t_String<'PullRequestReviewCommentEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestReviewComment | null
  },
  Extension<'PullRequestReviewCommentEdge'>
>

/**
 * @name PullRequestReviewThread
 * @type OBJECT
 * @implements Node
 */
type t_PullRequestReviewThread = FieldsType<
  {
    __typename: t_String<'PullRequestReviewThread'>

    /**
     * A list of pull request comments associated with the thread.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        skip?: number | null
      },
      t_PullRequestReviewCommentConnection
    >
    id: t_ID

    /**
     * Whether this thread has been resolved
     */
    isResolved: t_Boolean

    /**
     * Identifies the pull request associated with this thread.
     */
    pullRequest: t_PullRequest

    /**
     * Identifies the repository associated with this thread.
     */
    repository: t_Repository

    /**
     * The user who resolved this thread
     */
    resolvedBy: t_User | null

    /**
     * Whether or not the viewer can resolve this thread
     */
    viewerCanResolve: t_Boolean

    /**
     * Whether or not the viewer can unresolve this thread
     */
    viewerCanUnresolve: t_Boolean
  },
  Extension<'PullRequestReviewThread'>
>

/**
 * @name PullRequestCommit
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_PullRequestCommit = FieldsType<
  {
    __typename: t_String<'PullRequestCommit'>

    /**
     * The Git commit object
     */
    commit: t_Commit
    id: t_ID

    /**
     * The pull request this commit belongs to
     */
    pullRequest: t_PullRequest

    /**
     * The HTTP path for this pull request commit
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this pull request commit
     */
    url: t_URI
  },
  Extension<'PullRequestCommit'>
>

/**
 * @name PullRequestReviewThreadConnection
 * @type OBJECT
 */
type t_PullRequestReviewThreadConnection = FieldsType<
  {
    __typename: t_String<'PullRequestReviewThreadConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestReviewThreadEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestReviewThread | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestReviewThreadConnection'>
>

/**
 * @name PullRequestReviewThreadEdge
 * @type OBJECT
 */
type t_PullRequestReviewThreadEdge = FieldsType<
  {
    __typename: t_String<'PullRequestReviewThreadEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestReviewThread | null
  },
  Extension<'PullRequestReviewThreadEdge'>
>

/**
 * @name PullRequestReviewCommentState
 * @type ENUM
 */
type t_PullRequestReviewCommentState = EnumType<'PENDING' | 'SUBMITTED'>

/**
 * @name PullRequestPubSubTopic
 * @type ENUM
 */
type t_PullRequestPubSubTopic = EnumType<
  'UPDATED' | 'MARKASREAD' | 'HEAD_REF' | 'TIMELINE' | 'STATE'
>

/**
 * @name IssueCommentConnection
 * @type OBJECT
 */
type t_IssueCommentConnection = FieldsType<
  {
    __typename: t_String<'IssueCommentConnection'>

    /**
     * A list of edges.
     */
    edges: (t_IssueCommentEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_IssueComment | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'IssueCommentConnection'>
>

/**
 * @name IssueCommentEdge
 * @type OBJECT
 */
type t_IssueCommentEdge = FieldsType<
  {
    __typename: t_String<'IssueCommentEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_IssueComment | null
  },
  Extension<'IssueCommentEdge'>
>

/**
 * @name PullRequestReviewConnection
 * @type OBJECT
 */
type t_PullRequestReviewConnection = FieldsType<
  {
    __typename: t_String<'PullRequestReviewConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestReviewEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestReview | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestReviewConnection'>
>

/**
 * @name PullRequestReviewEdge
 * @type OBJECT
 */
type t_PullRequestReviewEdge = FieldsType<
  {
    __typename: t_String<'PullRequestReviewEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestReview | null
  },
  Extension<'PullRequestReviewEdge'>
>

/**
 * @name PullRequestCommitConnection
 * @type OBJECT
 */
type t_PullRequestCommitConnection = FieldsType<
  {
    __typename: t_String<'PullRequestCommitConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestCommitEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestCommit | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestCommitConnection'>
>

/**
 * @name PullRequestCommitEdge
 * @type OBJECT
 */
type t_PullRequestCommitEdge = FieldsType<
  {
    __typename: t_String<'PullRequestCommitEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestCommit | null
  },
  Extension<'PullRequestCommitEdge'>
>

/**
 * @name ReviewRequestConnection
 * @type OBJECT
 */
type t_ReviewRequestConnection = FieldsType<
  {
    __typename: t_String<'ReviewRequestConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ReviewRequestEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_ReviewRequest | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ReviewRequestConnection'>
>

/**
 * @name ReviewRequestEdge
 * @type OBJECT
 */
type t_ReviewRequestEdge = FieldsType<
  {
    __typename: t_String<'ReviewRequestEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_ReviewRequest | null
  },
  Extension<'ReviewRequestEdge'>
>

/**
 * @name ReviewRequest
 * @type OBJECT
 * @implements Node
 */
type t_ReviewRequest = FieldsType<
  {
    __typename: t_String<'ReviewRequest'>

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * Identifies the pull request associated with this review request.
     */
    pullRequest: t_PullRequest

    /**
     * The reviewer that is requested.
     */
    requestedReviewer: t_RequestedReviewer | null
  },
  Extension<'ReviewRequest'>
>

/**
 * @name RequestedReviewer
 * @type UNION
 */
type t_RequestedReviewer = t_User | t_Team | t_Mannequin

/**
 * @name PullRequestTimelineConnection
 * @type OBJECT
 */
type t_PullRequestTimelineConnection = FieldsType<
  {
    __typename: t_String<'PullRequestTimelineConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestTimelineItemEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestTimelineItem | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PullRequestTimelineConnection'>
>

/**
 * @name PullRequestTimelineItemEdge
 * @type OBJECT
 */
type t_PullRequestTimelineItemEdge = FieldsType<
  {
    __typename: t_String<'PullRequestTimelineItemEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestTimelineItem | null
  },
  Extension<'PullRequestTimelineItemEdge'>
>

/**
 * @name PullRequestTimelineItem
 * @type UNION
 */
type t_PullRequestTimelineItem =
  | t_Commit
  | t_CommitCommentThread
  | t_PullRequestReview
  | t_PullRequestReviewThread
  | t_PullRequestReviewComment
  | t_IssueComment
  | t_ClosedEvent
  | t_ReopenedEvent
  | t_SubscribedEvent
  | t_UnsubscribedEvent
  | t_MergedEvent
  | t_ReferencedEvent
  | t_CrossReferencedEvent
  | t_AssignedEvent
  | t_UnassignedEvent
  | t_LabeledEvent
  | t_UnlabeledEvent
  | t_MilestonedEvent
  | t_DemilestonedEvent
  | t_RenamedTitleEvent
  | t_LockedEvent
  | t_UnlockedEvent
  | t_DeployedEvent
  | t_DeploymentEnvironmentChangedEvent
  | t_HeadRefDeletedEvent
  | t_HeadRefRestoredEvent
  | t_HeadRefForcePushedEvent
  | t_BaseRefForcePushedEvent
  | t_ReviewRequestedEvent
  | t_ReviewRequestRemovedEvent
  | t_ReviewDismissedEvent
  | t_UserBlockedEvent

/**
 * @name CommitCommentThread
 * @type OBJECT
 * @implements Node, RepositoryNode
 */
type t_CommitCommentThread = FieldsType<
  {
    __typename: t_String<'CommitCommentThread'>

    /**
     * The comments that exist in this thread.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_CommitCommentConnection
    >

    /**
     * The commit the comments were made on.
     */
    commit: t_Commit | null
    id: t_ID

    /**
     * The file the comments were made on.
     */
    path: t_String | null

    /**
     * The position in the diff for the commit that the comment was made on.
     */
    position: t_Int | null

    /**
     * The repository associated with this node.
     */
    repository: t_Repository
  },
  Extension<'CommitCommentThread'>
>

/**
 * @name IssueOrPullRequest
 * @type UNION
 */
type t_IssueOrPullRequest = t_Issue | t_PullRequest

/**
 * @name ClosedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_ClosedEvent = FieldsType<
  {
    __typename: t_String<'ClosedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Object that was closed.
     */
    closable: t_Issue | t_Milestone | t_Project | t_PullRequest

    /**
     * Object which triggered the creation of this event.
     */
    closer: t_Closer | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * The HTTP path for this closed event.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this closed event.
     */
    url: t_URI
  },
  Extension<'ClosedEvent'>
>

/**
 * @name Closer
 * @type UNION
 */
type t_Closer = t_Commit | t_PullRequest

/**
 * @name ReopenedEvent
 * @type OBJECT
 * @implements Node
 */
type t_ReopenedEvent = FieldsType<
  {
    __typename: t_String<'ReopenedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Object that was reopened.
     */
    closable: t_Issue | t_Milestone | t_Project | t_PullRequest

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID
  },
  Extension<'ReopenedEvent'>
>

/**
 * @name SubscribedEvent
 * @type OBJECT
 * @implements Node
 */
type t_SubscribedEvent = FieldsType<
  {
    __typename: t_String<'SubscribedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Object referenced by event.
     */
    subscribable:
      | t_Commit
      | t_Issue
      | t_PullRequest
      | t_Repository
      | t_Team
      | t_TeamDiscussion
  },
  Extension<'SubscribedEvent'>
>

/**
 * @name UnsubscribedEvent
 * @type OBJECT
 * @implements Node
 */
type t_UnsubscribedEvent = FieldsType<
  {
    __typename: t_String<'UnsubscribedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Object referenced by event.
     */
    subscribable:
      | t_Commit
      | t_Issue
      | t_PullRequest
      | t_Repository
      | t_Team
      | t_TeamDiscussion
  },
  Extension<'UnsubscribedEvent'>
>

/**
 * @name MergedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_MergedEvent = FieldsType<
  {
    __typename: t_String<'MergedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the commit associated with the `merge` event.
     */
    commit: t_Commit | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the Ref associated with the `merge` event.
     */
    mergeRef: t_Ref | null

    /**
     * Identifies the name of the Ref associated with the `merge` event.
     */
    mergeRefName: t_String

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * The HTTP path for this merged event.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this merged event.
     */
    url: t_URI
  },
  Extension<'MergedEvent'>
>

/**
 * @name ReferencedEvent
 * @type OBJECT
 * @implements Node
 */
type t_ReferencedEvent = FieldsType<
  {
    __typename: t_String<'ReferencedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the commit associated with the 'referenced' event.
     */
    commit: t_Commit | null

    /**
     * Identifies the repository associated with the 'referenced' event.
     */
    commitRepository: t_Repository

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Reference originated in a different repository.
     */
    isCrossRepository: t_Boolean

    /**
     * Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference.
     */
    isDirectReference: t_Boolean

    /**
     * Object referenced by event.
     */
    subject: t_ReferencedSubject
  },
  Extension<'ReferencedEvent'>
>

/**
 * @name ReferencedSubject
 * @type UNION
 */
type t_ReferencedSubject = t_Issue | t_PullRequest

/**
 * @name CrossReferencedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_CrossReferencedEvent = FieldsType<
  {
    __typename: t_String<'CrossReferencedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Reference originated in a different repository.
     */
    isCrossRepository: t_Boolean

    /**
     * Identifies when the reference was made.
     */
    referencedAt: t_DateTime

    /**
     * The HTTP path for this pull request.
     */
    resourcePath: t_URI

    /**
     * Issue or pull request that made the reference.
     */
    source: t_ReferencedSubject

    /**
     * Issue or pull request to which the reference was made.
     */
    target: t_ReferencedSubject

    /**
     * The HTTP URL for this pull request.
     */
    url: t_URI

    /**
     * Checks if the target will be closed when the source is merged.
     */
    willCloseTarget: t_Boolean
  },
  Extension<'CrossReferencedEvent'>
>

/**
 * @name AssignedEvent
 * @type OBJECT
 * @implements Node
 */
type t_AssignedEvent = FieldsType<
  {
    __typename: t_String<'AssignedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the assignable associated with the event.
     */
    assignable: t_Issue | t_PullRequest

    /**
     * Identifies the user or mannequin that was assigned.
     */
    assignee: t_Assignee | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
     * Identifies the user who was assigned.
     */
    user: t_User | null
  },
  Extension<'AssignedEvent'>
>

/**
 * @name Assignee
 * @type UNION
 */
type t_Assignee = t_Bot | t_Mannequin | t_Organization | t_User

/**
 * @name UnassignedEvent
 * @type OBJECT
 * @implements Node
 */
type t_UnassignedEvent = FieldsType<
  {
    __typename: t_String<'UnassignedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the assignable associated with the event.
     */
    assignable: t_Issue | t_PullRequest

    /**
     * Identifies the user or mannequin that was unassigned.
     */
    assignee: t_Assignee | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
     * Identifies the subject (user) who was unassigned.
     */
    user: t_User | null
  },
  Extension<'UnassignedEvent'>
>

/**
 * @name LabeledEvent
 * @type OBJECT
 * @implements Node
 */
type t_LabeledEvent = FieldsType<
  {
    __typename: t_String<'LabeledEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the label associated with the 'labeled' event.
     */
    label: t_Label

    /**
     * Identifies the `Labelable` associated with the event.
     */
    labelable: t_Issue | t_PullRequest
  },
  Extension<'LabeledEvent'>
>

/**
 * @name UnlabeledEvent
 * @type OBJECT
 * @implements Node
 */
type t_UnlabeledEvent = FieldsType<
  {
    __typename: t_String<'UnlabeledEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the label associated with the 'unlabeled' event.
     */
    label: t_Label

    /**
     * Identifies the `Labelable` associated with the event.
     */
    labelable: t_Issue | t_PullRequest
  },
  Extension<'UnlabeledEvent'>
>

/**
 * @name MilestonedEvent
 * @type OBJECT
 * @implements Node
 */
type t_MilestonedEvent = FieldsType<
  {
    __typename: t_String<'MilestonedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the milestone title associated with the 'milestoned' event.
     */
    milestoneTitle: t_String

    /**
     * Object referenced by event.
     */
    subject: t_MilestoneItem
  },
  Extension<'MilestonedEvent'>
>

/**
 * @name MilestoneItem
 * @type UNION
 */
type t_MilestoneItem = t_Issue | t_PullRequest

/**
 * @name DemilestonedEvent
 * @type OBJECT
 * @implements Node
 */
type t_DemilestonedEvent = FieldsType<
  {
    __typename: t_String<'DemilestonedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the milestone title associated with the 'demilestoned' event.
     */
    milestoneTitle: t_String

    /**
     * Object referenced by event.
     */
    subject: t_MilestoneItem
  },
  Extension<'DemilestonedEvent'>
>

/**
 * @name RenamedTitleEvent
 * @type OBJECT
 * @implements Node
 */
type t_RenamedTitleEvent = FieldsType<
  {
    __typename: t_String<'RenamedTitleEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the current title of the issue or pull request.
     */
    currentTitle: t_String
    id: t_ID

    /**
     * Identifies the previous title of the issue or pull request.
     */
    previousTitle: t_String

    /**
     * Subject that was renamed.
     */
    subject: t_RenamedTitleSubject
  },
  Extension<'RenamedTitleEvent'>
>

/**
 * @name RenamedTitleSubject
 * @type UNION
 */
type t_RenamedTitleSubject = t_Issue | t_PullRequest

/**
 * @name LockedEvent
 * @type OBJECT
 * @implements Node
 */
type t_LockedEvent = FieldsType<
  {
    __typename: t_String<'LockedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Reason that the conversation was locked (optional).
     */
    lockReason: t_LockReason | null

    /**
     * Object that was locked.
     */
    lockable: t_Issue | t_PullRequest
  },
  Extension<'LockedEvent'>
>

/**
 * @name UnlockedEvent
 * @type OBJECT
 * @implements Node
 */
type t_UnlockedEvent = FieldsType<
  {
    __typename: t_String<'UnlockedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Object that was unlocked.
     */
    lockable: t_Issue | t_PullRequest
  },
  Extension<'UnlockedEvent'>
>

/**
 * @name DeployedEvent
 * @type OBJECT
 * @implements Node
 */
type t_DeployedEvent = FieldsType<
  {
    __typename: t_String<'DeployedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * The deployment associated with the 'deployed' event.
     */
    deployment: t_Deployment
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * The ref associated with the 'deployed' event.
     */
    ref: t_Ref | null
  },
  Extension<'DeployedEvent'>
>

/**
 * @name DeploymentEnvironmentChangedEvent
 * @type OBJECT
 * @implements Node
 */
type t_DeploymentEnvironmentChangedEvent = FieldsType<
  {
    __typename: t_String<'DeploymentEnvironmentChangedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The deployment status that updated the deployment environment.
     */
    deploymentStatus: t_DeploymentStatus
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest
  },
  Extension<'DeploymentEnvironmentChangedEvent'>
>

/**
 * @name HeadRefDeletedEvent
 * @type OBJECT
 * @implements Node
 */
type t_HeadRefDeletedEvent = FieldsType<
  {
    __typename: t_String<'HeadRefDeletedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the Ref associated with the `head_ref_deleted` event.
     */
    headRef: t_Ref | null

    /**
     * Identifies the name of the Ref associated with the `head_ref_deleted` event.
     */
    headRefName: t_String
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest
  },
  Extension<'HeadRefDeletedEvent'>
>

/**
 * @name HeadRefRestoredEvent
 * @type OBJECT
 * @implements Node
 */
type t_HeadRefRestoredEvent = FieldsType<
  {
    __typename: t_String<'HeadRefRestoredEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest
  },
  Extension<'HeadRefRestoredEvent'>
>

/**
 * @name HeadRefForcePushedEvent
 * @type OBJECT
 * @implements Node
 */
type t_HeadRefForcePushedEvent = FieldsType<
  {
    __typename: t_String<'HeadRefForcePushedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the after commit SHA for the 'head_ref_force_pushed' event.
     */
    afterCommit: t_Commit | null

    /**
     * Identifies the before commit SHA for the 'head_ref_force_pushed' event.
     */
    beforeCommit: t_Commit | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * Identifies the fully qualified ref name for the 'head_ref_force_pushed' event.
     */
    ref: t_Ref | null
  },
  Extension<'HeadRefForcePushedEvent'>
>

/**
 * @name BaseRefForcePushedEvent
 * @type OBJECT
 * @implements Node
 */
type t_BaseRefForcePushedEvent = FieldsType<
  {
    __typename: t_String<'BaseRefForcePushedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the after commit SHA for the 'base_ref_force_pushed' event.
     */
    afterCommit: t_Commit | null

    /**
     * Identifies the before commit SHA for the 'base_ref_force_pushed' event.
     */
    beforeCommit: t_Commit | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * Identifies the fully qualified ref name for the 'base_ref_force_pushed' event.
     */
    ref: t_Ref | null
  },
  Extension<'BaseRefForcePushedEvent'>
>

/**
 * @name ReviewRequestedEvent
 * @type OBJECT
 * @implements Node
 */
type t_ReviewRequestedEvent = FieldsType<
  {
    __typename: t_String<'ReviewRequestedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * Identifies the reviewer whose review was requested.
     */
    requestedReviewer: t_RequestedReviewer | null
  },
  Extension<'ReviewRequestedEvent'>
>

/**
 * @name ReviewRequestRemovedEvent
 * @type OBJECT
 * @implements Node
 */
type t_ReviewRequestRemovedEvent = FieldsType<
  {
    __typename: t_String<'ReviewRequestRemovedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * Identifies the reviewer whose review request was removed.
     */
    requestedReviewer: t_RequestedReviewer | null
  },
  Extension<'ReviewRequestRemovedEvent'>
>

/**
 * @name ReviewDismissedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_ReviewDismissedEvent = FieldsType<
  {
    __typename: t_String<'ReviewDismissedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * Identifies the optional message associated with the 'review_dismissed' event.
     */
    dismissalMessage: t_String | null

    /**
     * Identifies the optional message associated with the event, rendered to HTML.
     */
    dismissalMessageHTML: t_String | null
    id: t_ID

    /**
     * Identifies the previous state of the review with the 'review_dismissed' event.
     */
    previousReviewState: t_PullRequestReviewState

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * Identifies the commit which caused the review to become stale.
     */
    pullRequestCommit: t_PullRequestCommit | null

    /**
     * The HTTP path for this review dismissed event.
     */
    resourcePath: t_URI

    /**
     * Identifies the review associated with the 'review_dismissed' event.
     */
    review: t_PullRequestReview | null

    /**
     * The HTTP URL for this review dismissed event.
     */
    url: t_URI
  },
  Extension<'ReviewDismissedEvent'>
>

/**
 * @name UserBlockedEvent
 * @type OBJECT
 * @implements Node
 */
type t_UserBlockedEvent = FieldsType<
  {
    __typename: t_String<'UserBlockedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Number of days that the user was blocked for.
     */
    blockDuration: t_UserBlockDuration

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * The user who was blocked.
     */
    subject: t_User | null
  },
  Extension<'UserBlockedEvent'>
>

/**
 * @name UserBlockDuration
 * @type ENUM
 */
type t_UserBlockDuration = EnumType<
  'ONE_DAY' | 'THREE_DAYS' | 'ONE_WEEK' | 'ONE_MONTH' | 'PERMANENT'
>

/**
 * @name PullRequestTimelineItemsConnection
 * @type OBJECT
 */
type t_PullRequestTimelineItemsConnection = FieldsType<
  {
    __typename: t_String<'PullRequestTimelineItemsConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PullRequestTimelineItemsEdge | null)[] | null

    /**
     * Identifies the count of items after applying `before` and `after` filters.
     */
    filteredCount: t_Int

    /**
     * A list of nodes.
     */
    nodes: (t_PullRequestTimelineItems | null)[] | null

    /**
     * Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing.
     */
    pageCount: t_Int

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int

    /**
     * Identifies the date and time when the timeline was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'PullRequestTimelineItemsConnection'>
>

/**
 * @name PullRequestTimelineItemsEdge
 * @type OBJECT
 */
type t_PullRequestTimelineItemsEdge = FieldsType<
  {
    __typename: t_String<'PullRequestTimelineItemsEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PullRequestTimelineItems | null
  },
  Extension<'PullRequestTimelineItemsEdge'>
>

/**
 * @name PullRequestTimelineItems
 * @type UNION
 */
type t_PullRequestTimelineItems =
  | t_PullRequestCommit
  | t_PullRequestCommitCommentThread
  | t_PullRequestReview
  | t_PullRequestReviewThread
  | t_PullRequestRevisionMarker
  | t_BaseRefChangedEvent
  | t_BaseRefForcePushedEvent
  | t_DeployedEvent
  | t_DeploymentEnvironmentChangedEvent
  | t_HeadRefDeletedEvent
  | t_HeadRefForcePushedEvent
  | t_HeadRefRestoredEvent
  | t_MergedEvent
  | t_ReviewDismissedEvent
  | t_ReviewRequestedEvent
  | t_ReviewRequestRemovedEvent
  | t_ReadyForReviewEvent
  | t_IssueComment
  | t_CrossReferencedEvent
  | t_AddedToProjectEvent
  | t_AssignedEvent
  | t_ClosedEvent
  | t_CommentDeletedEvent
  | t_ConvertedNoteToIssueEvent
  | t_DemilestonedEvent
  | t_LabeledEvent
  | t_LockedEvent
  | t_MarkedAsDuplicateEvent
  | t_MentionedEvent
  | t_MilestonedEvent
  | t_MovedColumnsInProjectEvent
  | t_PinnedEvent
  | t_ReferencedEvent
  | t_RemovedFromProjectEvent
  | t_RenamedTitleEvent
  | t_ReopenedEvent
  | t_SubscribedEvent
  | t_TransferredEvent
  | t_UnassignedEvent
  | t_UnlabeledEvent
  | t_UnlockedEvent
  | t_UserBlockedEvent
  | t_UnpinnedEvent
  | t_UnsubscribedEvent

/**
 * @name PullRequestCommitCommentThread
 * @type OBJECT
 * @implements Node, RepositoryNode
 */
type t_PullRequestCommitCommentThread = FieldsType<
  {
    __typename: t_String<'PullRequestCommitCommentThread'>

    /**
     * The comments that exist in this thread.
     */
    comments: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_CommitCommentConnection
    >

    /**
     * The commit the comments were made on.
     */
    commit: t_Commit
    id: t_ID

    /**
     * The file the comments were made on.
     */
    path: t_String | null

    /**
     * The position in the diff for the commit that the comment was made on.
     */
    position: t_Int | null

    /**
     * The pull request this commit comment thread belongs to
     */
    pullRequest: t_PullRequest

    /**
     * The repository associated with this node.
     */
    repository: t_Repository
  },
  Extension<'PullRequestCommitCommentThread'>
>

/**
 * @name PullRequestRevisionMarker
 * @type OBJECT
 */
type t_PullRequestRevisionMarker = FieldsType<
  {
    __typename: t_String<'PullRequestRevisionMarker'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The last commit the viewer has seen.
     */
    lastSeenCommit: t_Commit

    /**
     * The pull request to which the marker belongs.
     */
    pullRequest: t_PullRequest
  },
  Extension<'PullRequestRevisionMarker'>
>

/**
 * @name BaseRefChangedEvent
 * @type OBJECT
 * @implements Node
 */
type t_BaseRefChangedEvent = FieldsType<
  {
    __typename: t_String<'BaseRefChangedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'BaseRefChangedEvent'>
>

/**
 * @name ReadyForReviewEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
type t_ReadyForReviewEvent = FieldsType<
  {
    __typename: t_String<'ReadyForReviewEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * PullRequest referenced by event.
     */
    pullRequest: t_PullRequest

    /**
     * The HTTP path for this ready for review event.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this ready for review event.
     */
    url: t_URI
  },
  Extension<'ReadyForReviewEvent'>
>

/**
 * @name AddedToProjectEvent
 * @type OBJECT
 * @implements Node
 */
type t_AddedToProjectEvent = FieldsType<
  {
    __typename: t_String<'AddedToProjectEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'AddedToProjectEvent'>
>

/**
 * @name CommentDeletedEvent
 * @type OBJECT
 * @implements Node
 */
type t_CommentDeletedEvent = FieldsType<
  {
    __typename: t_String<'CommentDeletedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'CommentDeletedEvent'>
>

/**
 * @name ConvertedNoteToIssueEvent
 * @type OBJECT
 * @implements Node
 */
type t_ConvertedNoteToIssueEvent = FieldsType<
  {
    __typename: t_String<'ConvertedNoteToIssueEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'ConvertedNoteToIssueEvent'>
>

/**
 * @name MarkedAsDuplicateEvent
 * @type OBJECT
 * @implements Node
 */
type t_MarkedAsDuplicateEvent = FieldsType<
  {
    __typename: t_String<'MarkedAsDuplicateEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID
  },
  Extension<'MarkedAsDuplicateEvent'>
>

/**
 * @name MentionedEvent
 * @type OBJECT
 * @implements Node
 */
type t_MentionedEvent = FieldsType<
  {
    __typename: t_String<'MentionedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'MentionedEvent'>
>

/**
 * @name MovedColumnsInProjectEvent
 * @type OBJECT
 * @implements Node
 */
type t_MovedColumnsInProjectEvent = FieldsType<
  {
    __typename: t_String<'MovedColumnsInProjectEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'MovedColumnsInProjectEvent'>
>

/**
 * @name PinnedEvent
 * @type OBJECT
 * @implements Node
 */
type t_PinnedEvent = FieldsType<
  {
    __typename: t_String<'PinnedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the issue associated with the event.
     */
    issue: t_Issue
  },
  Extension<'PinnedEvent'>
>

/**
 * @name RemovedFromProjectEvent
 * @type OBJECT
 * @implements Node
 */
type t_RemovedFromProjectEvent = FieldsType<
  {
    __typename: t_String<'RemovedFromProjectEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID
  },
  Extension<'RemovedFromProjectEvent'>
>

/**
 * @name TransferredEvent
 * @type OBJECT
 * @implements Node
 */
type t_TransferredEvent = FieldsType<
  {
    __typename: t_String<'TransferredEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime

    /**
     * The repository this came from
     */
    fromRepository: t_Repository | null
    id: t_ID

    /**
     * Identifies the issue associated with the event.
     */
    issue: t_Issue
  },
  Extension<'TransferredEvent'>
>

/**
 * @name UnpinnedEvent
 * @type OBJECT
 * @implements Node
 */
type t_UnpinnedEvent = FieldsType<
  {
    __typename: t_String<'UnpinnedEvent'>

    /**
     * Identifies the actor who performed the event.
     */
    actor:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * Identifies the issue associated with the event.
     */
    issue: t_Issue
  },
  Extension<'UnpinnedEvent'>
>

/**
 * @name PullRequestTimelineItemsItemType
 * @type ENUM
 */
type t_PullRequestTimelineItemsItemType = EnumType<
  | 'PULL_REQUEST_COMMIT'
  | 'PULL_REQUEST_COMMIT_COMMENT_THREAD'
  | 'PULL_REQUEST_REVIEW'
  | 'PULL_REQUEST_REVIEW_THREAD'
  | 'PULL_REQUEST_REVISION_MARKER'
  | 'BASE_REF_CHANGED_EVENT'
  | 'BASE_REF_FORCE_PUSHED_EVENT'
  | 'DEPLOYED_EVENT'
  | 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT'
  | 'HEAD_REF_DELETED_EVENT'
  | 'HEAD_REF_FORCE_PUSHED_EVENT'
  | 'HEAD_REF_RESTORED_EVENT'
  | 'MERGED_EVENT'
  | 'REVIEW_DISMISSED_EVENT'
  | 'REVIEW_REQUESTED_EVENT'
  | 'REVIEW_REQUEST_REMOVED_EVENT'
  | 'READY_FOR_REVIEW_EVENT'
  | 'ISSUE_COMMENT'
  | 'CROSS_REFERENCED_EVENT'
  | 'ADDED_TO_PROJECT_EVENT'
  | 'ASSIGNED_EVENT'
  | 'CLOSED_EVENT'
  | 'COMMENT_DELETED_EVENT'
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  | 'DEMILESTONED_EVENT'
  | 'LABELED_EVENT'
  | 'LOCKED_EVENT'
  | 'MARKED_AS_DUPLICATE_EVENT'
  | 'MENTIONED_EVENT'
  | 'MILESTONED_EVENT'
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  | 'PINNED_EVENT'
  | 'REFERENCED_EVENT'
  | 'REMOVED_FROM_PROJECT_EVENT'
  | 'RENAMED_TITLE_EVENT'
  | 'REOPENED_EVENT'
  | 'SUBSCRIBED_EVENT'
  | 'TRANSFERRED_EVENT'
  | 'UNASSIGNED_EVENT'
  | 'UNLABELED_EVENT'
  | 'UNLOCKED_EVENT'
  | 'USER_BLOCKED_EVENT'
  | 'UNPINNED_EVENT'
  | 'UNSUBSCRIBED_EVENT'
>

/**
 * @name SuggestedReviewer
 * @type OBJECT
 */
type t_SuggestedReviewer = FieldsType<
  {
    __typename: t_String<'SuggestedReviewer'>

    /**
     * Is this suggestion based on past commits?
     */
    isAuthor: t_Boolean

    /**
     * Is this suggestion based on past review comments?
     */
    isCommenter: t_Boolean

    /**
     * Identifies the user suggested to review the pull request.
     */
    reviewer: t_User
  },
  Extension<'SuggestedReviewer'>
>

/**
 * @name ProjectCardArchivedState
 * @type ENUM
 */
type t_ProjectCardArchivedState = EnumType<'ARCHIVED' | 'NOT_ARCHIVED'>

/**
 * @name Hovercard
 * @type OBJECT
 */
type t_Hovercard = FieldsType<
  {
    __typename: t_String<'Hovercard'>

    /**
     * Each of the contexts for this hovercard
     */
    contexts: (
      | t_GenericHovercardContext
      | t_OrganizationTeamsHovercardContext
      | t_OrganizationsHovercardContext
      | t_ReviewStatusHovercardContext
      | t_ViewerHovercardContext)[]
  },
  Extension<'Hovercard'>
>

/**
 * @name HovercardContext
 * @type INTERFACE
 */
type t_HovercardContext =
  | t_GenericHovercardContext
  | t_OrganizationTeamsHovercardContext
  | t_OrganizationsHovercardContext
  | t_ReviewStatusHovercardContext
  | t_ViewerHovercardContext

/**
 * @name IssueTimelineConnection
 * @type OBJECT
 */
type t_IssueTimelineConnection = FieldsType<
  {
    __typename: t_String<'IssueTimelineConnection'>

    /**
     * A list of edges.
     */
    edges: (t_IssueTimelineItemEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_IssueTimelineItem | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'IssueTimelineConnection'>
>

/**
 * @name IssueTimelineItemEdge
 * @type OBJECT
 */
type t_IssueTimelineItemEdge = FieldsType<
  {
    __typename: t_String<'IssueTimelineItemEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_IssueTimelineItem | null
  },
  Extension<'IssueTimelineItemEdge'>
>

/**
 * @name IssueTimelineItem
 * @type UNION
 */
type t_IssueTimelineItem =
  | t_Commit
  | t_IssueComment
  | t_CrossReferencedEvent
  | t_ClosedEvent
  | t_ReopenedEvent
  | t_SubscribedEvent
  | t_UnsubscribedEvent
  | t_ReferencedEvent
  | t_AssignedEvent
  | t_UnassignedEvent
  | t_LabeledEvent
  | t_UnlabeledEvent
  | t_UserBlockedEvent
  | t_MilestonedEvent
  | t_DemilestonedEvent
  | t_RenamedTitleEvent
  | t_LockedEvent
  | t_UnlockedEvent
  | t_TransferredEvent

/**
 * @name IssueTimelineItemsConnection
 * @type OBJECT
 */
type t_IssueTimelineItemsConnection = FieldsType<
  {
    __typename: t_String<'IssueTimelineItemsConnection'>

    /**
     * A list of edges.
     */
    edges: (t_IssueTimelineItemsEdge | null)[] | null

    /**
     * Identifies the count of items after applying `before` and `after` filters.
     */
    filteredCount: t_Int

    /**
     * A list of nodes.
     */
    nodes: (t_IssueTimelineItems | null)[] | null

    /**
     * Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing.
     */
    pageCount: t_Int

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int

    /**
     * Identifies the date and time when the timeline was last updated.
     */
    updatedAt: t_DateTime
  },
  Extension<'IssueTimelineItemsConnection'>
>

/**
 * @name IssueTimelineItemsEdge
 * @type OBJECT
 */
type t_IssueTimelineItemsEdge = FieldsType<
  {
    __typename: t_String<'IssueTimelineItemsEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_IssueTimelineItems | null
  },
  Extension<'IssueTimelineItemsEdge'>
>

/**
 * @name IssueTimelineItems
 * @type UNION
 */
type t_IssueTimelineItems =
  | t_IssueComment
  | t_CrossReferencedEvent
  | t_AddedToProjectEvent
  | t_AssignedEvent
  | t_ClosedEvent
  | t_CommentDeletedEvent
  | t_ConvertedNoteToIssueEvent
  | t_DemilestonedEvent
  | t_LabeledEvent
  | t_LockedEvent
  | t_MarkedAsDuplicateEvent
  | t_MentionedEvent
  | t_MilestonedEvent
  | t_MovedColumnsInProjectEvent
  | t_PinnedEvent
  | t_ReferencedEvent
  | t_RemovedFromProjectEvent
  | t_RenamedTitleEvent
  | t_ReopenedEvent
  | t_SubscribedEvent
  | t_TransferredEvent
  | t_UnassignedEvent
  | t_UnlabeledEvent
  | t_UnlockedEvent
  | t_UserBlockedEvent
  | t_UnpinnedEvent
  | t_UnsubscribedEvent

/**
 * @name IssueTimelineItemsItemType
 * @type ENUM
 */
type t_IssueTimelineItemsItemType = EnumType<
  | 'ISSUE_COMMENT'
  | 'CROSS_REFERENCED_EVENT'
  | 'ADDED_TO_PROJECT_EVENT'
  | 'ASSIGNED_EVENT'
  | 'CLOSED_EVENT'
  | 'COMMENT_DELETED_EVENT'
  | 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  | 'DEMILESTONED_EVENT'
  | 'LABELED_EVENT'
  | 'LOCKED_EVENT'
  | 'MARKED_AS_DUPLICATE_EVENT'
  | 'MENTIONED_EVENT'
  | 'MILESTONED_EVENT'
  | 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  | 'PINNED_EVENT'
  | 'REFERENCED_EVENT'
  | 'REMOVED_FROM_PROJECT_EVENT'
  | 'RENAMED_TITLE_EVENT'
  | 'REOPENED_EVENT'
  | 'SUBSCRIBED_EVENT'
  | 'TRANSFERRED_EVENT'
  | 'UNASSIGNED_EVENT'
  | 'UNLABELED_EVENT'
  | 'UNLOCKED_EVENT'
  | 'USER_BLOCKED_EVENT'
  | 'UNPINNED_EVENT'
  | 'UNSUBSCRIBED_EVENT'
>

/**
 * @name CollaboratorAffiliation
 * @type ENUM
 */
type t_CollaboratorAffiliation = EnumType<'OUTSIDE' | 'DIRECT' | 'ALL'>

/**
 * @name DeployKeyConnection
 * @type OBJECT
 */
type t_DeployKeyConnection = FieldsType<
  {
    __typename: t_String<'DeployKeyConnection'>

    /**
     * A list of edges.
     */
    edges: (t_DeployKeyEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_DeployKey | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'DeployKeyConnection'>
>

/**
 * @name DeployKeyEdge
 * @type OBJECT
 */
type t_DeployKeyEdge = FieldsType<
  {
    __typename: t_String<'DeployKeyEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_DeployKey | null
  },
  Extension<'DeployKeyEdge'>
>

/**
 * @name DeployKey
 * @type OBJECT
 * @implements Node
 */
type t_DeployKey = FieldsType<
  {
    __typename: t_String<'DeployKey'>

    /**
     * Identifies the date and time when the object was created.
     */
    createdAt: t_DateTime
    id: t_ID

    /**
     * The deploy key.
     */
    key: t_String

    /**
     * Whether or not the deploy key is read only.
     */
    readOnly: t_Boolean

    /**
     * The deploy key title.
     */
    title: t_String

    /**
     * Whether or not the deploy key has been verified.
     */
    verified: t_Boolean
  },
  Extension<'DeployKey'>
>

/**
 * @name RepositoryCollaboratorAffiliation
 * @type ENUM
 */
type t_RepositoryCollaboratorAffiliation = EnumType<'ALL' | 'OUTSIDE'>

/**
 * @name BranchProtectionRuleConnection
 * @type OBJECT
 */
type t_BranchProtectionRuleConnection = FieldsType<
  {
    __typename: t_String<'BranchProtectionRuleConnection'>

    /**
     * A list of edges.
     */
    edges: (t_BranchProtectionRuleEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_BranchProtectionRule | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'BranchProtectionRuleConnection'>
>

/**
 * @name BranchProtectionRuleEdge
 * @type OBJECT
 */
type t_BranchProtectionRuleEdge = FieldsType<
  {
    __typename: t_String<'BranchProtectionRuleEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_BranchProtectionRule | null
  },
  Extension<'BranchProtectionRuleEdge'>
>

/**
 * @name BranchProtectionRule
 * @type OBJECT
 * @implements Node
 */
type t_BranchProtectionRule = FieldsType<
  {
    __typename: t_String<'BranchProtectionRule'>

    /**
     * A list of conflicts matching branches protection rule and other branch protection rules
     */
    branchProtectionRuleConflicts: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_BranchProtectionRuleConflictConnection
    >

    /**
     * The actor who created this branch protection rule.
     */
    creator:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * Will new commits pushed to matching branches dismiss pull request review approvals.
     */
    dismissesStaleReviews: t_Boolean
    id: t_ID

    /**
     * Can admins overwrite branch protection.
     */
    isAdminEnforced: t_Boolean

    /**
     * Repository refs that are protected by this rule
     */
    matchingRefs: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_RefConnection
    >

    /**
     * Identifies the protection rule pattern.
     */
    pattern: t_String

    /**
     * A list push allowances for this branch protection rule.
     */
    pushAllowances: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_PushAllowanceConnection
    >

    /**
     * The repository associated with this branch protection rule.
     */
    repository: t_Repository | null

    /**
     * Number of approving reviews required to update matching branches.
     */
    requiredApprovingReviewCount: t_Int | null

    /**
     * List of required status check contexts that must pass for commits to be accepted to matching branches.
     */
    requiredStatusCheckContexts: (t_String | null)[] | null

    /**
     * Are approving reviews required to update matching branches.
     */
    requiresApprovingReviews: t_Boolean

    /**
     * Are reviews from code owners required to update matching branches.
     */
    requiresCodeOwnerReviews: t_Boolean

    /**
     * Are commits required to be signed.
     */
    requiresCommitSignatures: t_Boolean

    /**
     * Are status checks required to update matching branches.
     */
    requiresStatusChecks: t_Boolean

    /**
     * Are branches required to be up to date before merging.
     */
    requiresStrictStatusChecks: t_Boolean

    /**
     * Is pushing to matching branches restricted.
     */
    restrictsPushes: t_Boolean

    /**
     * Is dismissal of pull request reviews restricted.
     */
    restrictsReviewDismissals: t_Boolean

    /**
     * A list review dismissal allowances for this branch protection rule.
     */
    reviewDismissalAllowances: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_ReviewDismissalAllowanceConnection
    >
  },
  Extension<'BranchProtectionRule'>
>

/**
 * @name ReviewDismissalAllowanceConnection
 * @type OBJECT
 */
type t_ReviewDismissalAllowanceConnection = FieldsType<
  {
    __typename: t_String<'ReviewDismissalAllowanceConnection'>

    /**
     * A list of edges.
     */
    edges: (t_ReviewDismissalAllowanceEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_ReviewDismissalAllowance | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'ReviewDismissalAllowanceConnection'>
>

/**
 * @name ReviewDismissalAllowanceEdge
 * @type OBJECT
 */
type t_ReviewDismissalAllowanceEdge = FieldsType<
  {
    __typename: t_String<'ReviewDismissalAllowanceEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_ReviewDismissalAllowance | null
  },
  Extension<'ReviewDismissalAllowanceEdge'>
>

/**
 * @name ReviewDismissalAllowance
 * @type OBJECT
 * @implements Node
 */
type t_ReviewDismissalAllowance = FieldsType<
  {
    __typename: t_String<'ReviewDismissalAllowance'>

    /**
     * The actor that can dismiss.
     */
    actor: t_ReviewDismissalAllowanceActor | null

    /**
     * Identifies the branch protection rule associated with the allowed user or team.
     */
    branchProtectionRule: t_BranchProtectionRule | null
    id: t_ID
  },
  Extension<'ReviewDismissalAllowance'>
>

/**
 * @name ReviewDismissalAllowanceActor
 * @type UNION
 */
type t_ReviewDismissalAllowanceActor = t_User | t_Team

/**
 * @name PushAllowanceConnection
 * @type OBJECT
 */
type t_PushAllowanceConnection = FieldsType<
  {
    __typename: t_String<'PushAllowanceConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PushAllowanceEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PushAllowance | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PushAllowanceConnection'>
>

/**
 * @name PushAllowanceEdge
 * @type OBJECT
 */
type t_PushAllowanceEdge = FieldsType<
  {
    __typename: t_String<'PushAllowanceEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PushAllowance | null
  },
  Extension<'PushAllowanceEdge'>
>

/**
 * @name PushAllowance
 * @type OBJECT
 * @implements Node
 */
type t_PushAllowance = FieldsType<
  {
    __typename: t_String<'PushAllowance'>

    /**
     * The actor that can push.
     */
    actor: t_PushAllowanceActor | null

    /**
     * Identifies the branch protection rule associated with the allowed user or team.
     */
    branchProtectionRule: t_BranchProtectionRule | null
    id: t_ID
  },
  Extension<'PushAllowance'>
>

/**
 * @name PushAllowanceActor
 * @type UNION
 */
type t_PushAllowanceActor = t_User | t_Team | t_App

/**
 * @name RefConnection
 * @type OBJECT
 */
type t_RefConnection = FieldsType<
  {
    __typename: t_String<'RefConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RefEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Ref | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RefConnection'>
>

/**
 * @name RefEdge
 * @type OBJECT
 */
type t_RefEdge = FieldsType<
  {
    __typename: t_String<'RefEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Ref | null
  },
  Extension<'RefEdge'>
>

/**
 * @name BranchProtectionRuleConflictConnection
 * @type OBJECT
 */
type t_BranchProtectionRuleConflictConnection = FieldsType<
  {
    __typename: t_String<'BranchProtectionRuleConflictConnection'>

    /**
     * A list of edges.
     */
    edges: (t_BranchProtectionRuleConflictEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_BranchProtectionRuleConflict | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'BranchProtectionRuleConflictConnection'>
>

/**
 * @name BranchProtectionRuleConflictEdge
 * @type OBJECT
 */
type t_BranchProtectionRuleConflictEdge = FieldsType<
  {
    __typename: t_String<'BranchProtectionRuleConflictEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_BranchProtectionRuleConflict | null
  },
  Extension<'BranchProtectionRuleConflictEdge'>
>

/**
 * @name BranchProtectionRuleConflict
 * @type OBJECT
 */
type t_BranchProtectionRuleConflict = FieldsType<
  {
    __typename: t_String<'BranchProtectionRuleConflict'>

    /**
     * Identifies the branch protection rule.
     */
    branchProtectionRule: t_BranchProtectionRule | null

    /**
     * Identifies the conflicting branch protection rule.
     */
    conflictingBranchProtectionRule: t_BranchProtectionRule | null

    /**
     * Identifies the branch ref that has conflicting rules
     */
    ref: t_Ref | null
  },
  Extension<'BranchProtectionRuleConflict'>
>

/**
 * @name MilestoneConnection
 * @type OBJECT
 */
type t_MilestoneConnection = FieldsType<
  {
    __typename: t_String<'MilestoneConnection'>

    /**
     * A list of edges.
     */
    edges: (t_MilestoneEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Milestone | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'MilestoneConnection'>
>

/**
 * @name MilestoneEdge
 * @type OBJECT
 */
type t_MilestoneEdge = FieldsType<
  {
    __typename: t_String<'MilestoneEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Milestone | null
  },
  Extension<'MilestoneEdge'>
>

/**
 * @name MilestoneOrder
 * @type INPUT_OBJECT
 */
export type MilestoneOrder = {
  field: MilestoneOrderField
  direction: OrderDirection
}

/**
 * @name MilestoneOrderField
 * @type ENUM
 */
type t_MilestoneOrderField = EnumType<
  'DUE_DATE' | 'CREATED_AT' | 'UPDATED_AT' | 'NUMBER'
>

/**
 * @name CodeOfConduct
 * @type OBJECT
 * @implements Node
 */
type t_CodeOfConduct = FieldsType<
  {
    __typename: t_String<'CodeOfConduct'>

    /**
     * The body of the Code of Conduct
     */
    body: t_String | null
    id: t_ID

    /**
     * The key for the Code of Conduct
     */
    key: t_String

    /**
     * The formal name of the Code of Conduct
     */
    name: t_String

    /**
     * The HTTP path for this Code of Conduct
     */
    resourcePath: t_URI | null

    /**
     * The HTTP URL for this Code of Conduct
     */
    url: t_URI | null
  },
  Extension<'CodeOfConduct'>
>

/**
 * @name RepositoryCollaboratorConnection
 * @type OBJECT
 */
type t_RepositoryCollaboratorConnection = FieldsType<
  {
    __typename: t_String<'RepositoryCollaboratorConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RepositoryCollaboratorEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RepositoryCollaboratorConnection'>
>

/**
 * @name RepositoryCollaboratorEdge
 * @type OBJECT
 */
type t_RepositoryCollaboratorEdge = FieldsType<
  {
    __typename: t_String<'RepositoryCollaboratorEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String
    node: t_User

    /**
     * The permission the user has on the repository.
     */
    permission: t_RepositoryPermission

    /**
     * A list of sources for the user's access to the repository.
     */
    permissionSources: (t_PermissionSource)[] | null
  },
  Extension<'RepositoryCollaboratorEdge'>
>

/**
 * @name PermissionSource
 * @type OBJECT
 */
type t_PermissionSource = FieldsType<
  {
    __typename: t_String<'PermissionSource'>

    /**
     * The organization the repository belongs to.
     */
    organization: t_Organization

    /**
     * The level of access this source has granted to the user.
     */
    permission: t_DefaultRepositoryPermissionField

    /**
     * The source of this permission.
     */
    source: t_PermissionGranter
  },
  Extension<'PermissionSource'>
>

/**
 * @name PermissionGranter
 * @type UNION
 */
type t_PermissionGranter = t_Organization | t_Repository | t_Team

/**
 * @name LanguageOrder
 * @type INPUT_OBJECT
 */
export type LanguageOrder = {
  field: LanguageOrderField
  direction: OrderDirection
}

/**
 * @name LanguageOrderField
 * @type ENUM
 */
type t_LanguageOrderField = EnumType<'SIZE'>

/**
 * @name RefOrder
 * @type INPUT_OBJECT
 */
export type RefOrder = { field: RefOrderField; direction: OrderDirection }

/**
 * @name RefOrderField
 * @type ENUM
 */
type t_RefOrderField = EnumType<'TAG_COMMIT_DATE' | 'ALPHABETICAL'>

/**
 * @name RepositoryVulnerabilityAlertConnection
 * @type OBJECT
 */
type t_RepositoryVulnerabilityAlertConnection = FieldsType<
  {
    __typename: t_String<'RepositoryVulnerabilityAlertConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RepositoryVulnerabilityAlertEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RepositoryVulnerabilityAlert | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RepositoryVulnerabilityAlertConnection'>
>

/**
 * @name RepositoryVulnerabilityAlertEdge
 * @type OBJECT
 */
type t_RepositoryVulnerabilityAlertEdge = FieldsType<
  {
    __typename: t_String<'RepositoryVulnerabilityAlertEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RepositoryVulnerabilityAlert | null
  },
  Extension<'RepositoryVulnerabilityAlertEdge'>
>

/**
 * @name RepositoryVulnerabilityAlert
 * @type OBJECT
 * @implements Node, RepositoryNode
 */
type t_RepositoryVulnerabilityAlert = FieldsType<
  {
    __typename: t_String<'RepositoryVulnerabilityAlert'>

    /**
     * @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.vulnerableVersionRange` instead. Removal on 2019-10-01 UTC.
     * The affected version
     */
    affectedRange: t_String

    /**
     * The reason the alert was dismissed
     */
    dismissReason: t_String | null

    /**
     * When was the alert dimissed?
     */
    dismissedAt: t_DateTime | null

    /**
     * The user who dismissed the alert
     */
    dismisser: t_User | null

    /**
     * @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityAdvisory.identifiers` instead. Removal on 2019-10-01 UTC.
     * The external identifier for the vulnerability
     */
    externalIdentifier: t_String | null

    /**
     * @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityAdvisory.references` instead. Removal on 2019-10-01 UTC.
     * The external reference for the vulnerability
     */
    externalReference: t_String

    /**
     * @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.firstPatchedVersion` instead. Removal on 2019-10-01 UTC.
     * The fixed version
     */
    fixedIn: t_String | null
    id: t_ID

    /**
     * @deprecated advisory specific fields are being removed from repositoryVulnerabilityAlert objects Use `securityVulnerability.package` instead. Removal on 2019-10-01 UTC.
     * The affected package
     */
    packageName: t_String

    /**
     * The associated repository
     */
    repository: t_Repository

    /**
     * The associated security advisory
     */
    securityAdvisory: t_SecurityAdvisory | null

    /**
     * The associated security vulnerablity
     */
    securityVulnerability: t_SecurityVulnerability | null

    /**
     * The vulnerable manifest filename
     */
    vulnerableManifestFilename: t_String

    /**
     * The vulnerable manifest path
     */
    vulnerableManifestPath: t_String

    /**
     * The vulnerable requirements
     */
    vulnerableRequirements: t_String | null
  },
  Extension<'RepositoryVulnerabilityAlert'>
>

/**
 * @name SecurityAdvisory
 * @type OBJECT
 * @implements Node
 */
type t_SecurityAdvisory = FieldsType<
  {
    __typename: t_String<'SecurityAdvisory'>

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null

    /**
     * This is a long plaintext description of the advisory
     */
    description: t_String

    /**
     * The GitHub Security Advisory ID
     */
    ghsaId: t_String
    id: t_ID

    /**
     * A list of identifiers for this advisory
     */
    identifiers: (t_SecurityAdvisoryIdentifier)[]

    /**
     * The organization that originated the advisory
     */
    origin: t_String

    /**
     * When the advisory was published
     */
    publishedAt: t_DateTime

    /**
     * A list of references for this advisory
     */
    references: (t_SecurityAdvisoryReference)[]

    /**
     * The severity of the advisory
     */
    severity: t_SecurityAdvisorySeverity

    /**
     * A short plaintext summary of the advisory
     */
    summary: t_String

    /**
     * When the advisory was last updated
     */
    updatedAt: t_DateTime

    /**
     * Vulnerabilities associated with this Advisory
     */
    vulnerabilities: FieldsTypeArg<
      {
        orderBy?: SecurityVulnerabilityOrder | null
        ecosystem?: SecurityAdvisoryEcosystem | null
        package?: string | null
        severities?: (SecurityAdvisorySeverity)[] | null
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_SecurityVulnerabilityConnection
    >

    /**
     * When the advisory was withdrawn, if it has been withdrawn
     */
    withdrawnAt: t_DateTime | null
  },
  Extension<'SecurityAdvisory'>
>

/**
 * @name SecurityAdvisorySeverity
 * @type ENUM
 */
type t_SecurityAdvisorySeverity = EnumType<
  'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL'
>

/**
 * @name SecurityAdvisoryIdentifier
 * @type OBJECT
 */
type t_SecurityAdvisoryIdentifier = FieldsType<
  {
    __typename: t_String<'SecurityAdvisoryIdentifier'>

    /**
     * The identifier type, e.g. GHSA, CVE
     */
    type: t_String

    /**
     * The identifier
     */
    value: t_String
  },
  Extension<'SecurityAdvisoryIdentifier'>
>

/**
 * @name SecurityAdvisoryReference
 * @type OBJECT
 */
type t_SecurityAdvisoryReference = FieldsType<
  {
    __typename: t_String<'SecurityAdvisoryReference'>

    /**
     * A publicly accessible reference
     */
    url: t_URI
  },
  Extension<'SecurityAdvisoryReference'>
>

/**
 * @name SecurityVulnerabilityConnection
 * @type OBJECT
 */
type t_SecurityVulnerabilityConnection = FieldsType<
  {
    __typename: t_String<'SecurityVulnerabilityConnection'>

    /**
     * A list of edges.
     */
    edges: (t_SecurityVulnerabilityEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_SecurityVulnerability | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'SecurityVulnerabilityConnection'>
>

/**
 * @name SecurityVulnerabilityEdge
 * @type OBJECT
 */
type t_SecurityVulnerabilityEdge = FieldsType<
  {
    __typename: t_String<'SecurityVulnerabilityEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_SecurityVulnerability | null
  },
  Extension<'SecurityVulnerabilityEdge'>
>

/**
 * @name SecurityVulnerability
 * @type OBJECT
 */
type t_SecurityVulnerability = FieldsType<
  {
    __typename: t_String<'SecurityVulnerability'>

    /**
     * The Advisory associated with this Vulnerability
     */
    advisory: t_SecurityAdvisory

    /**
     * The first version containing a fix for the vulnerability
     */
    firstPatchedVersion: t_SecurityAdvisoryPackageVersion | null

    /**
     * A description of the vulnerable package
     */
    package: t_SecurityAdvisoryPackage

    /**
     * The severity of the vulnerability within this package
     */
    severity: t_SecurityAdvisorySeverity

    /**
     * When the vulnerability was last updated
     */
    updatedAt: t_DateTime

    /**
     * A string that describes the vulnerable package versions.
     * This string follows a basic syntax with a few forms.
     * + `= 0.2.0` denotes a single vulnerable version.
     * + `<= 1.0.8` denotes a version range up to and including the specified version
     * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
     * + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
     * + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum
     *
     */
    vulnerableVersionRange: t_String
  },
  Extension<'SecurityVulnerability'>
>

/**
 * @name SecurityAdvisoryPackage
 * @type OBJECT
 */
type t_SecurityAdvisoryPackage = FieldsType<
  {
    __typename: t_String<'SecurityAdvisoryPackage'>

    /**
     * The ecosystem the package belongs to, e.g. RUBYGEMS, NPM
     */
    ecosystem: t_SecurityAdvisoryEcosystem

    /**
     * The package name
     */
    name: t_String
  },
  Extension<'SecurityAdvisoryPackage'>
>

/**
 * @name SecurityAdvisoryEcosystem
 * @type ENUM
 */
type t_SecurityAdvisoryEcosystem = EnumType<
  'RUBYGEMS' | 'NPM' | 'PIP' | 'MAVEN' | 'NUGET' | 'COMPOSER'
>

/**
 * @name SecurityAdvisoryPackageVersion
 * @type OBJECT
 */
type t_SecurityAdvisoryPackageVersion = FieldsType<
  {
    __typename: t_String<'SecurityAdvisoryPackageVersion'>

    /**
     * The package name or version
     */
    identifier: t_String
  },
  Extension<'SecurityAdvisoryPackageVersion'>
>

/**
 * @name SecurityVulnerabilityOrder
 * @type INPUT_OBJECT
 */
export type SecurityVulnerabilityOrder = {
  field: SecurityVulnerabilityOrderField
  direction: OrderDirection
}

/**
 * @name SecurityVulnerabilityOrderField
 * @type ENUM
 */
type t_SecurityVulnerabilityOrderField = EnumType<'UPDATED_AT'>

/**
 * @name GitSSHRemote
 * @type SCALAR
 */
type t_GitSSHRemote<T extends any = any> = ScalarType<
  T,
  Extension<'GitSSHRemote'>
>

/**
 * @name RegistryPackageStatistics
 * @type OBJECT
 */
type t_RegistryPackageStatistics = FieldsType<
  {
    __typename: t_String<'RegistryPackageStatistics'>

    /**
     * Number of times the package was downloaded this month.
     */
    downloadsThisMonth: t_Int

    /**
     * Number of times the package was downloaded this week.
     */
    downloadsThisWeek: t_Int

    /**
     * Number of times the package was downloaded this year.
     */
    downloadsThisYear: t_Int

    /**
     * Number of times the package was downloaded today.
     */
    downloadsToday: t_Int

    /**
     * Number of times the package was downloaded since it was created.
     */
    downloadsTotalCount: t_Int
  },
  Extension<'RegistryPackageStatistics'>
>

/**
 * @name RegistryPackageTagConnection
 * @type OBJECT
 */
type t_RegistryPackageTagConnection = FieldsType<
  {
    __typename: t_String<'RegistryPackageTagConnection'>

    /**
     * A list of edges.
     */
    edges: (t_RegistryPackageTagEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_RegistryPackageTag | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'RegistryPackageTagConnection'>
>

/**
 * @name RegistryPackageTagEdge
 * @type OBJECT
 */
type t_RegistryPackageTagEdge = FieldsType<
  {
    __typename: t_String<'RegistryPackageTagEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_RegistryPackageTag | null
  },
  Extension<'RegistryPackageTagEdge'>
>

/**
 * @name RegistryPackageTag
 * @type OBJECT
 * @implements Node
 */
type t_RegistryPackageTag = FieldsType<
  {
    __typename: t_String<'RegistryPackageTag'>
    id: t_ID

    /**
     * Identifies the tag name of the version.
     */
    name: t_String

    /**
     * version that the tag is associated with
     */
    version: t_RegistryPackageVersion | null
  },
  Extension<'RegistryPackageTag'>
>

/**
 * @name ContributionsCollection
 * @type OBJECT
 */
type t_ContributionsCollection = FieldsType<
  {
    __typename: t_String<'ContributionsCollection'>

    /**
     * Commit contributions made by the user, grouped by repository.
     */
    commitContributionsByRepository: FieldsTypeArg<
      { maxRepositories?: number | null },
      (t_CommitContributionsByRepository)[]
    >

    /**
     * A calendar of this user's contributions on GitHub.
     */
    contributionCalendar: t_ContributionCalendar

    /**
     * The years the user has been making contributions with the most recent year first.
     */
    contributionYears: (t_Int)[]

    /**
     * Determine if this collection's time span ends in the current month.
     *
     */
    doesEndInCurrentMonth: t_Boolean

    /**
     * The date of the first restricted contribution the user made in this time period. Can only be non-null when the user has enabled private contribution counts.
     */
    earliestRestrictedContributionDate: t_Date | null

    /**
     * The ending date and time of this collection.
     */
    endedAt: t_DateTime

    /**
     * The first issue the user opened on GitHub. This will be null if that issue was opened outside the collection's time range and ignoreTimeRange is false. If the issue is not visible but the user has opted to show private contributions, a RestrictedContribution will be returned.
     */
    firstIssueContribution: t_CreatedIssueOrRestrictedContribution | null

    /**
     * The first pull request the user opened on GitHub. This will be null if that pull request was opened outside the collection's time range and ignoreTimeRange is not true. If the pull request is not visible but the user has opted to show private contributions, a RestrictedContribution will be returned.
     */
    firstPullRequestContribution: t_CreatedPullRequestOrRestrictedContribution | null

    /**
     * The first repository the user created on GitHub. This will be null if that first repository was created outside the collection's time range and ignoreTimeRange is false. If the repository is not visible, then a RestrictedContribution is returned.
     */
    firstRepositoryContribution: t_CreatedRepositoryOrRestrictedContribution | null

    /**
     * Does the user have any more activity in the timeline that occurred prior to the collection's time range?
     */
    hasActivityInThePast: t_Boolean

    /**
     * Determine if there are any contributions in this collection.
     */
    hasAnyContributions: t_Boolean

    /**
     * Determine if the user made any contributions in this time frame whose details are not visible because they were made in a private repository. Can only be true if the user enabled private contribution counts.
     */
    hasAnyRestrictedContributions: t_Boolean

    /**
     * Whether or not the collector's time span is all within the same day.
     */
    isSingleDay: t_Boolean

    /**
     * A list of issues the user opened.
     */
    issueContributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        excludeFirst?: boolean | null
        excludePopular?: boolean | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedIssueContributionConnection
    >

    /**
     * Issue contributions made by the user, grouped by repository.
     */
    issueContributionsByRepository: FieldsTypeArg<
      {
        maxRepositories?: number | null
        excludeFirst?: boolean | null
        excludePopular?: boolean | null
      },
      (t_IssueContributionsByRepository)[]
    >

    /**
     * When the user signed up for GitHub. This will be null if that sign up date falls outside the collection's time range and ignoreTimeRange is false.
     */
    joinedGitHubContribution: t_JoinedGitHubContribution | null

    /**
     * The date of the most recent restricted contribution the user made in this time period. Can only be non-null when the user has enabled private contribution counts.
     */
    latestRestrictedContributionDate: t_Date | null

    /**
     * When this collection's time range does not include any activity from the user, use this
     * to get a different collection from an earlier time range that does have activity.
     *
     */
    mostRecentCollectionWithActivity: t_ContributionsCollection | null

    /**
     * Returns a different contributions collection from an earlier time range than this one
     * that does not have any contributions.
     *
     */
    mostRecentCollectionWithoutActivity: t_ContributionsCollection | null

    /**
     * The issue the user opened on GitHub that received the most comments in the specified
     * time frame.
     *
     */
    popularIssueContribution: t_CreatedIssueContribution | null

    /**
     * The pull request the user opened on GitHub that received the most comments in the
     * specified time frame.
     *
     */
    popularPullRequestContribution: t_CreatedPullRequestContribution | null

    /**
     * Pull request contributions made by the user.
     */
    pullRequestContributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        excludeFirst?: boolean | null
        excludePopular?: boolean | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedPullRequestContributionConnection
    >

    /**
     * Pull request contributions made by the user, grouped by repository.
     */
    pullRequestContributionsByRepository: FieldsTypeArg<
      {
        maxRepositories?: number | null
        excludeFirst?: boolean | null
        excludePopular?: boolean | null
      },
      (t_PullRequestContributionsByRepository)[]
    >

    /**
     * Pull request review contributions made by the user.
     */
    pullRequestReviewContributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedPullRequestReviewContributionConnection
    >

    /**
     * Pull request review contributions made by the user, grouped by repository.
     */
    pullRequestReviewContributionsByRepository: FieldsTypeArg<
      { maxRepositories?: number | null },
      (t_PullRequestReviewContributionsByRepository)[]
    >

    /**
     * A list of repositories owned by the user that the user created in this time range.
     */
    repositoryContributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        excludeFirst?: boolean | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedRepositoryContributionConnection
    >

    /**
     * A count of contributions made by the user that the viewer cannot access. Only non-zero when the user has chosen to share their private contribution counts.
     */
    restrictedContributionsCount: t_Int

    /**
     * The beginning date and time of this collection.
     */
    startedAt: t_DateTime

    /**
     * How many commits were made by the user in this time span.
     */
    totalCommitContributions: t_Int

    /**
     * How many issues the user opened.
     */
    totalIssueContributions: FieldsTypeArg<
      { excludeFirst?: boolean | null; excludePopular?: boolean | null },
      t_Int
    >

    /**
     * How many pull requests the user opened.
     */
    totalPullRequestContributions: FieldsTypeArg<
      { excludeFirst?: boolean | null; excludePopular?: boolean | null },
      t_Int
    >

    /**
     * How many pull request reviews the user left.
     */
    totalPullRequestReviewContributions: t_Int

    /**
     * How many different repositories the user committed to.
     */
    totalRepositoriesWithContributedCommits: t_Int

    /**
     * How many different repositories the user opened issues in.
     */
    totalRepositoriesWithContributedIssues: FieldsTypeArg<
      { excludeFirst?: boolean | null; excludePopular?: boolean | null },
      t_Int
    >

    /**
     * How many different repositories the user left pull request reviews in.
     */
    totalRepositoriesWithContributedPullRequestReviews: t_Int

    /**
     * How many different repositories the user opened pull requests in.
     */
    totalRepositoriesWithContributedPullRequests: FieldsTypeArg<
      { excludeFirst?: boolean | null; excludePopular?: boolean | null },
      t_Int
    >

    /**
     * How many repositories the user created.
     */
    totalRepositoryContributions: FieldsTypeArg<
      { excludeFirst?: boolean | null },
      t_Int
    >

    /**
     * The user who made the contributions in this collection.
     */
    user: t_User
  },
  Extension<'ContributionsCollection'>
>

/**
 * @name Contribution
 * @type INTERFACE
 */
type t_Contribution =
  | t_CreatedCommitContribution
  | t_CreatedIssueContribution
  | t_CreatedPullRequestContribution
  | t_CreatedPullRequestReviewContribution
  | t_CreatedRepositoryContribution
  | t_JoinedGitHubContribution
  | t_RestrictedContribution

/**
 * @name CreatedIssueContributionConnection
 * @type OBJECT
 */
type t_CreatedIssueContributionConnection = FieldsType<
  {
    __typename: t_String<'CreatedIssueContributionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CreatedIssueContributionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_CreatedIssueContribution | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CreatedIssueContributionConnection'>
>

/**
 * @name CreatedIssueContributionEdge
 * @type OBJECT
 */
type t_CreatedIssueContributionEdge = FieldsType<
  {
    __typename: t_String<'CreatedIssueContributionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_CreatedIssueContribution | null
  },
  Extension<'CreatedIssueContributionEdge'>
>

/**
 * @name CreatedIssueContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_CreatedIssueContribution = FieldsType<
  {
    __typename: t_String<'CreatedIssueContribution'>

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * The issue that was opened.
     */
    issue: t_Issue

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'CreatedIssueContribution'>
>

/**
 * @name ContributionOrder
 * @type INPUT_OBJECT
 */
export type ContributionOrder = {
  field: ContributionOrderField | null
  direction: OrderDirection
}

/**
 * @name ContributionOrderField
 * @type ENUM
 */
type t_ContributionOrderField = EnumType<'OCCURRED_AT'>

/**
 * @name CreatedRepositoryContributionConnection
 * @type OBJECT
 */
type t_CreatedRepositoryContributionConnection = FieldsType<
  {
    __typename: t_String<'CreatedRepositoryContributionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CreatedRepositoryContributionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_CreatedRepositoryContribution | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CreatedRepositoryContributionConnection'>
>

/**
 * @name CreatedRepositoryContributionEdge
 * @type OBJECT
 */
type t_CreatedRepositoryContributionEdge = FieldsType<
  {
    __typename: t_String<'CreatedRepositoryContributionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_CreatedRepositoryContribution | null
  },
  Extension<'CreatedRepositoryContributionEdge'>
>

/**
 * @name CreatedRepositoryContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_CreatedRepositoryContribution = FieldsType<
  {
    __typename: t_String<'CreatedRepositoryContribution'>

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The repository that was created.
     */
    repository: t_Repository

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'CreatedRepositoryContribution'>
>

/**
 * @name JoinedGitHubContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_JoinedGitHubContribution = FieldsType<
  {
    __typename: t_String<'JoinedGitHubContribution'>

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'JoinedGitHubContribution'>
>

/**
 * @name CreatedRepositoryOrRestrictedContribution
 * @type UNION
 */
type t_CreatedRepositoryOrRestrictedContribution =
  | t_CreatedRepositoryContribution
  | t_RestrictedContribution

/**
 * @name RestrictedContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_RestrictedContribution = FieldsType<
  {
    __typename: t_String<'RestrictedContribution'>

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'RestrictedContribution'>
>

/**
 * @name CreatedIssueOrRestrictedContribution
 * @type UNION
 */
type t_CreatedIssueOrRestrictedContribution =
  | t_CreatedIssueContribution
  | t_RestrictedContribution

/**
 * @name CreatedPullRequestOrRestrictedContribution
 * @type UNION
 */
type t_CreatedPullRequestOrRestrictedContribution =
  | t_CreatedPullRequestContribution
  | t_RestrictedContribution

/**
 * @name CreatedPullRequestContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_CreatedPullRequestContribution = FieldsType<
  {
    __typename: t_String<'CreatedPullRequestContribution'>

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The pull request that was opened.
     */
    pullRequest: t_PullRequest

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'CreatedPullRequestContribution'>
>

/**
 * @name ContributionCalendar
 * @type OBJECT
 */
type t_ContributionCalendar = FieldsType<
  {
    __typename: t_String<'ContributionCalendar'>

    /**
     * A list of hex color codes used in this calendar. The darker the color, the more contributions it represents.
     */
    colors: (t_String)[]

    /**
     * Determine if the color set was chosen because it's currently Halloween.
     */
    isHalloween: t_Boolean

    /**
     * A list of the months of contributions in this calendar.
     */
    months: (t_ContributionCalendarMonth)[]

    /**
     * The count of total contributions in the calendar.
     */
    totalContributions: t_Int

    /**
     * A list of the weeks of contributions in this calendar.
     */
    weeks: (t_ContributionCalendarWeek)[]
  },
  Extension<'ContributionCalendar'>
>

/**
 * @name ContributionCalendarWeek
 * @type OBJECT
 */
type t_ContributionCalendarWeek = FieldsType<
  {
    __typename: t_String<'ContributionCalendarWeek'>

    /**
     * The days of contributions in this week.
     */
    contributionDays: (t_ContributionCalendarDay)[]

    /**
     * The date of the earliest square in this week.
     */
    firstDay: t_Date
  },
  Extension<'ContributionCalendarWeek'>
>

/**
 * @name ContributionCalendarDay
 * @type OBJECT
 */
type t_ContributionCalendarDay = FieldsType<
  {
    __typename: t_String<'ContributionCalendarDay'>

    /**
     * The hex color code that represents how many contributions were made on this day compared to others in the calendar.
     */
    color: t_String

    /**
     * How many contributions were made by the user on this day.
     */
    contributionCount: t_Int

    /**
     * The day this square represents.
     */
    date: t_Date

    /**
     * A number representing which day of the week this square represents, e.g., 1 is Monday.
     */
    weekday: t_Int
  },
  Extension<'ContributionCalendarDay'>
>

/**
 * @name ContributionCalendarMonth
 * @type OBJECT
 */
type t_ContributionCalendarMonth = FieldsType<
  {
    __typename: t_String<'ContributionCalendarMonth'>

    /**
     * The date of the first day of this month.
     */
    firstDay: t_Date

    /**
     * The name of the month.
     */
    name: t_String

    /**
     * How many weeks started in this month.
     */
    totalWeeks: t_Int

    /**
     * The year the month occurred in.
     */
    year: t_Int
  },
  Extension<'ContributionCalendarMonth'>
>

/**
 * @name CreatedPullRequestReviewContributionConnection
 * @type OBJECT
 */
type t_CreatedPullRequestReviewContributionConnection = FieldsType<
  {
    __typename: t_String<'CreatedPullRequestReviewContributionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CreatedPullRequestReviewContributionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_CreatedPullRequestReviewContribution | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CreatedPullRequestReviewContributionConnection'>
>

/**
 * @name CreatedPullRequestReviewContributionEdge
 * @type OBJECT
 */
type t_CreatedPullRequestReviewContributionEdge = FieldsType<
  {
    __typename: t_String<'CreatedPullRequestReviewContributionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_CreatedPullRequestReviewContribution | null
  },
  Extension<'CreatedPullRequestReviewContributionEdge'>
>

/**
 * @name CreatedPullRequestReviewContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_CreatedPullRequestReviewContribution = FieldsType<
  {
    __typename: t_String<'CreatedPullRequestReviewContribution'>

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The pull request the user reviewed.
     */
    pullRequest: t_PullRequest

    /**
     * The review the user left on the pull request.
     */
    pullRequestReview: t_PullRequestReview

    /**
     * The repository containing the pull request that the user reviewed.
     */
    repository: t_Repository

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'CreatedPullRequestReviewContribution'>
>

/**
 * @name PullRequestReviewContributionsByRepository
 * @type OBJECT
 */
type t_PullRequestReviewContributionsByRepository = FieldsType<
  {
    __typename: t_String<'PullRequestReviewContributionsByRepository'>

    /**
     * The pull request review contributions.
     */
    contributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedPullRequestReviewContributionConnection
    >

    /**
     * The repository in which the pull request reviews were made.
     */
    repository: t_Repository
  },
  Extension<'PullRequestReviewContributionsByRepository'>
>

/**
 * @name CommitContributionsByRepository
 * @type OBJECT
 */
type t_CommitContributionsByRepository = FieldsType<
  {
    __typename: t_String<'CommitContributionsByRepository'>

    /**
     * The commit contributions, each representing a day.
     */
    contributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: CommitContributionOrder | null
      },
      t_CreatedCommitContributionConnection
    >

    /**
     * The repository in which the commits were made.
     */
    repository: t_Repository

    /**
     * The HTTP path for the user's commits to the repository in this time range.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for the user's commits to the repository in this time range.
     */
    url: t_URI
  },
  Extension<'CommitContributionsByRepository'>
>

/**
 * @name CreatedCommitContributionConnection
 * @type OBJECT
 */
type t_CreatedCommitContributionConnection = FieldsType<
  {
    __typename: t_String<'CreatedCommitContributionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CreatedCommitContributionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_CreatedCommitContribution | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of commits across days and repositories in the connection.
     *
     */
    totalCount: t_Int
  },
  Extension<'CreatedCommitContributionConnection'>
>

/**
 * @name CreatedCommitContributionEdge
 * @type OBJECT
 */
type t_CreatedCommitContributionEdge = FieldsType<
  {
    __typename: t_String<'CreatedCommitContributionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_CreatedCommitContribution | null
  },
  Extension<'CreatedCommitContributionEdge'>
>

/**
 * @name CreatedCommitContribution
 * @type OBJECT
 * @implements Contribution
 */
type t_CreatedCommitContribution = FieldsType<
  {
    __typename: t_String<'CreatedCommitContribution'>

    /**
     * How many commits were made on this day to this repository by the user.
     */
    commitCount: t_Int

    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: t_Boolean

    /**
     * When this contribution was made.
     */
    occurredAt: t_DateTime

    /**
     * The repository the user made a commit in.
     */
    repository: t_Repository

    /**
     * The HTTP path for this contribution.
     */
    resourcePath: t_URI

    /**
     * The HTTP URL for this contribution.
     */
    url: t_URI

    /**
     * The user who made this contribution.
     *
     */
    user: t_User
  },
  Extension<'CreatedCommitContribution'>
>

/**
 * @name CommitContributionOrder
 * @type INPUT_OBJECT
 */
export type CommitContributionOrder = {
  field: CommitContributionOrderField
  direction: OrderDirection
}

/**
 * @name CommitContributionOrderField
 * @type ENUM
 */
type t_CommitContributionOrderField = EnumType<'OCCURRED_AT' | 'COMMIT_COUNT'>

/**
 * @name CreatedPullRequestContributionConnection
 * @type OBJECT
 */
type t_CreatedPullRequestContributionConnection = FieldsType<
  {
    __typename: t_String<'CreatedPullRequestContributionConnection'>

    /**
     * A list of edges.
     */
    edges: (t_CreatedPullRequestContributionEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_CreatedPullRequestContribution | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'CreatedPullRequestContributionConnection'>
>

/**
 * @name CreatedPullRequestContributionEdge
 * @type OBJECT
 */
type t_CreatedPullRequestContributionEdge = FieldsType<
  {
    __typename: t_String<'CreatedPullRequestContributionEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_CreatedPullRequestContribution | null
  },
  Extension<'CreatedPullRequestContributionEdge'>
>

/**
 * @name PullRequestContributionsByRepository
 * @type OBJECT
 */
type t_PullRequestContributionsByRepository = FieldsType<
  {
    __typename: t_String<'PullRequestContributionsByRepository'>

    /**
     * The pull request contributions.
     */
    contributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedPullRequestContributionConnection
    >

    /**
     * The repository in which the pull requests were opened.
     */
    repository: t_Repository
  },
  Extension<'PullRequestContributionsByRepository'>
>

/**
 * @name IssueContributionsByRepository
 * @type OBJECT
 */
type t_IssueContributionsByRepository = FieldsType<
  {
    __typename: t_String<'IssueContributionsByRepository'>

    /**
     * The issue contributions.
     */
    contributions: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
        orderBy?: ContributionOrder | null
      },
      t_CreatedIssueContributionConnection
    >

    /**
     * The repository in which the issues were opened.
     */
    repository: t_Repository
  },
  Extension<'IssueContributionsByRepository'>
>

/**
 * @name SavedReplyConnection
 * @type OBJECT
 */
type t_SavedReplyConnection = FieldsType<
  {
    __typename: t_String<'SavedReplyConnection'>

    /**
     * A list of edges.
     */
    edges: (t_SavedReplyEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_SavedReply | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'SavedReplyConnection'>
>

/**
 * @name SavedReplyEdge
 * @type OBJECT
 */
type t_SavedReplyEdge = FieldsType<
  {
    __typename: t_String<'SavedReplyEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_SavedReply | null
  },
  Extension<'SavedReplyEdge'>
>

/**
 * @name SavedReply
 * @type OBJECT
 * @implements Node
 */
type t_SavedReply = FieldsType<
  {
    __typename: t_String<'SavedReply'>

    /**
     * The body of the saved reply.
     */
    body: t_String

    /**
     * The saved reply body rendered to HTML.
     */
    bodyHTML: t_HTML

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int | null
    id: t_ID

    /**
     * The title of the saved reply.
     */
    title: t_String

    /**
     * The user that saved this reply.
     */
    user:
      | t_Bot
      | t_EnterpriseUserAccount
      | t_Mannequin
      | t_Organization
      | t_User
      | null
  },
  Extension<'SavedReply'>
>

/**
 * @name SavedReplyOrder
 * @type INPUT_OBJECT
 */
export type SavedReplyOrder = {
  field: SavedReplyOrderField
  direction: OrderDirection
}

/**
 * @name SavedReplyOrderField
 * @type ENUM
 */
type t_SavedReplyOrderField = EnumType<'UPDATED_AT'>

/**
 * @name RepositoryContributionType
 * @type ENUM
 */
type t_RepositoryContributionType = EnumType<
  'COMMIT' | 'ISSUE' | 'PULL_REQUEST' | 'REPOSITORY' | 'PULL_REQUEST_REVIEW'
>

/**
 * @name IssueOrPullRequestEdge
 * @type OBJECT
 */
type t_IssueOrPullRequestEdge = FieldsType<
  {
    __typename: t_String<'IssueOrPullRequestEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_IssueOrPullRequest | null
  },
  Extension<'IssueOrPullRequestEdge'>
>

/**
 * @name PublicKeyConnection
 * @type OBJECT
 */
type t_PublicKeyConnection = FieldsType<
  {
    __typename: t_String<'PublicKeyConnection'>

    /**
     * A list of edges.
     */
    edges: (t_PublicKeyEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_PublicKey | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'PublicKeyConnection'>
>

/**
 * @name PublicKeyEdge
 * @type OBJECT
 */
type t_PublicKeyEdge = FieldsType<
  {
    __typename: t_String<'PublicKeyEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_PublicKey | null
  },
  Extension<'PublicKeyEdge'>
>

/**
 * @name FollowingConnection
 * @type OBJECT
 */
type t_FollowingConnection = FieldsType<
  {
    __typename: t_String<'FollowingConnection'>

    /**
     * A list of edges.
     */
    edges: (t_UserEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'FollowingConnection'>
>

/**
 * @name FollowerConnection
 * @type OBJECT
 */
type t_FollowerConnection = FieldsType<
  {
    __typename: t_String<'FollowerConnection'>

    /**
     * A list of edges.
     */
    edges: (t_UserEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_User | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'FollowerConnection'>
>

/**
 * @name EnterpriseEdge
 * @type OBJECT
 */
type t_EnterpriseEdge = FieldsType<
  {
    __typename: t_String<'EnterpriseEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_Enterprise | null
  },
  Extension<'EnterpriseEdge'>
>

/**
 * @name EnterpriseOrder
 * @type INPUT_OBJECT
 */
export type EnterpriseOrder = {
  field: EnterpriseOrderField
  direction: OrderDirection
}

/**
 * @name EnterpriseOrderField
 * @type ENUM
 */
type t_EnterpriseOrderField = EnumType<'NAME'>

/**
 * @name EnterpriseMembershipType
 * @type ENUM
 */
type t_EnterpriseMembershipType = EnumType<
  'ALL' | 'ADMIN' | 'BILLING_MANAGER' | 'ORG_MEMBERSHIP'
>

/**
 * @name StarredRepositoryConnection
 * @type OBJECT
 */
type t_StarredRepositoryConnection = FieldsType<
  {
    __typename: t_String<'StarredRepositoryConnection'>

    /**
     * A list of edges.
     */
    edges: (t_StarredRepositoryEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_Repository | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'StarredRepositoryConnection'>
>

/**
 * @name StarredRepositoryEdge
 * @type OBJECT
 */
type t_StarredRepositoryEdge = FieldsType<
  {
    __typename: t_String<'StarredRepositoryEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String
    node: t_Repository

    /**
     * Identifies when the item was starred.
     */
    starredAt: t_DateTime
  },
  Extension<'StarredRepositoryEdge'>
>

/**
 * @name AppEdge
 * @type OBJECT
 */
type t_AppEdge = FieldsType<
  {
    __typename: t_String<'AppEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_App | null
  },
  Extension<'AppEdge'>
>

/**
 * @name RateLimit
 * @type OBJECT
 */
type t_RateLimit = FieldsType<
  {
    __typename: t_String<'RateLimit'>

    /**
     * The point cost for the current query counting against the rate limit.
     */
    cost: t_Int

    /**
     * The maximum number of points the client is permitted to consume in a 60 minute window.
     */
    limit: t_Int

    /**
     * The maximum number of nodes this query may return
     */
    nodeCount: t_Int

    /**
     * The number of points remaining in the current rate limit window.
     */
    remaining: t_Int

    /**
     * The time at which the current rate limit window resets in UTC epoch seconds.
     */
    resetAt: t_DateTime
  },
  Extension<'RateLimit'>
>

/**
 * @name SearchResultItemConnection
 * @type OBJECT
 */
type t_SearchResultItemConnection = FieldsType<
  {
    __typename: t_String<'SearchResultItemConnection'>

    /**
     * The number of pieces of code that matched the search query.
     */
    codeCount: t_Int

    /**
     * A list of edges.
     */
    edges: (t_SearchResultItemEdge | null)[] | null

    /**
     * The number of issues that matched the search query.
     */
    issueCount: t_Int

    /**
     * A list of nodes.
     */
    nodes: (t_SearchResultItem | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * The number of repositories that matched the search query.
     */
    repositoryCount: t_Int

    /**
     * The number of users that matched the search query.
     */
    userCount: t_Int

    /**
     * The number of wiki pages that matched the search query.
     */
    wikiCount: t_Int
  },
  Extension<'SearchResultItemConnection'>
>

/**
 * @name SearchResultItemEdge
 * @type OBJECT
 */
type t_SearchResultItemEdge = FieldsType<
  {
    __typename: t_String<'SearchResultItemEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_SearchResultItem | null

    /**
     * Text matches on the result found.
     */
    textMatches: (t_TextMatch | null)[] | null
  },
  Extension<'SearchResultItemEdge'>
>

/**
 * @name SearchResultItem
 * @type UNION
 */
type t_SearchResultItem =
  | t_Issue
  | t_PullRequest
  | t_Repository
  | t_User
  | t_Organization
  | t_MarketplaceListing
  | t_App

/**
 * @name TextMatch
 * @type OBJECT
 */
type t_TextMatch = FieldsType<
  {
    __typename: t_String<'TextMatch'>

    /**
     * The specific text fragment within the property matched on.
     */
    fragment: t_String

    /**
     * Highlights within the matched fragment.
     */
    highlights: (t_TextMatchHighlight)[]

    /**
     * The property matched on.
     */
    property: t_String
  },
  Extension<'TextMatch'>
>

/**
 * @name TextMatchHighlight
 * @type OBJECT
 */
type t_TextMatchHighlight = FieldsType<
  {
    __typename: t_String<'TextMatchHighlight'>

    /**
     * The indice in the fragment where the matched text begins.
     */
    beginIndice: t_Int

    /**
     * The indice in the fragment where the matched text ends.
     */
    endIndice: t_Int

    /**
     * The text matched.
     */
    text: t_String
  },
  Extension<'TextMatchHighlight'>
>

/**
 * @name SearchType
 * @type ENUM
 */
type t_SearchType = EnumType<'ISSUE' | 'REPOSITORY' | 'USER'>

/**
 * @name CollectionItemContent
 * @type UNION
 */
type t_CollectionItemContent = t_Repository | t_Organization | t_User

/**
 * @name GitHubMetadata
 * @type OBJECT
 */
type t_GitHubMetadata = FieldsType<
  {
    __typename: t_String<'GitHubMetadata'>

    /**
     * Returns a String that's a SHA of `github-services`
     */
    gitHubServicesSha: t_GitObjectID

    /**
     * IP addresses that users connect to for git operations
     */
    gitIpAddresses: (t_String)[] | null

    /**
     * IP addresses that service hooks are sent from
     */
    hookIpAddresses: (t_String)[] | null

    /**
     * IP addresses that the importer connects from
     */
    importerIpAddresses: (t_String)[] | null

    /**
     * Whether or not users are verified
     */
    isPasswordAuthenticationVerifiable: t_Boolean

    /**
     * IP addresses for GitHub Pages' A records
     */
    pagesIpAddresses: (t_String)[] | null
  },
  Extension<'GitHubMetadata'>
>

/**
 * @name SecurityAdvisoryConnection
 * @type OBJECT
 */
type t_SecurityAdvisoryConnection = FieldsType<
  {
    __typename: t_String<'SecurityAdvisoryConnection'>

    /**
     * A list of edges.
     */
    edges: (t_SecurityAdvisoryEdge | null)[] | null

    /**
     * A list of nodes.
     */
    nodes: (t_SecurityAdvisory | null)[] | null

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Identifies the total count of items in the connection.
     */
    totalCount: t_Int
  },
  Extension<'SecurityAdvisoryConnection'>
>

/**
 * @name SecurityAdvisoryEdge
 * @type OBJECT
 */
type t_SecurityAdvisoryEdge = FieldsType<
  {
    __typename: t_String<'SecurityAdvisoryEdge'>

    /**
     * A cursor for use in pagination.
     */
    cursor: t_String

    /**
     * The item at the end of the edge.
     */
    node: t_SecurityAdvisory | null
  },
  Extension<'SecurityAdvisoryEdge'>
>

/**
 * @name SecurityAdvisoryOrder
 * @type INPUT_OBJECT
 */
export type SecurityAdvisoryOrder = {
  field: SecurityAdvisoryOrderField
  direction: OrderDirection
}

/**
 * @name SecurityAdvisoryOrderField
 * @type ENUM
 */
type t_SecurityAdvisoryOrderField = EnumType<'PUBLISHED_AT' | 'UPDATED_AT'>

/**
 * @name SecurityAdvisoryIdentifierFilter
 * @type INPUT_OBJECT
 */
export type SecurityAdvisoryIdentifierFilter = {
  type: SecurityAdvisoryIdentifierType
  value: string
}

/**
 * @name SecurityAdvisoryIdentifierType
 * @type ENUM
 */
type t_SecurityAdvisoryIdentifierType = EnumType<'CVE' | 'GHSA'>

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<'Mutation'>

    /**
     * Accepts a pending invitation for a user to become an administrator of an enterprise.
     */
    acceptEnterpriseAdministratorInvitation: FieldsTypeArg<
      { input: AcceptEnterpriseAdministratorInvitationInput },
      t_AcceptEnterpriseAdministratorInvitationPayload | null
    >

    /**
     * Applies a suggested topic to the repository.
     */
    acceptTopicSuggestion: FieldsTypeArg<
      { input: AcceptTopicSuggestionInput },
      t_AcceptTopicSuggestionPayload | null
    >

    /**
     * Adds assignees to an assignable object.
     */
    addAssigneesToAssignable: FieldsTypeArg<
      { input: AddAssigneesToAssignableInput },
      t_AddAssigneesToAssignablePayload | null
    >

    /**
     * Adds a comment to an Issue or Pull Request.
     */
    addComment: FieldsTypeArg<
      { input: AddCommentInput },
      t_AddCommentPayload | null
    >

    /**
     * Adds labels to a labelable object.
     */
    addLabelsToLabelable: FieldsTypeArg<
      { input: AddLabelsToLabelableInput },
      t_AddLabelsToLabelablePayload | null
    >

    /**
     * Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both.
     */
    addProjectCard: FieldsTypeArg<
      { input: AddProjectCardInput },
      t_AddProjectCardPayload | null
    >

    /**
     * Adds a column to a Project.
     */
    addProjectColumn: FieldsTypeArg<
      { input: AddProjectColumnInput },
      t_AddProjectColumnPayload | null
    >

    /**
     * Adds a review to a Pull Request.
     */
    addPullRequestReview: FieldsTypeArg<
      { input: AddPullRequestReviewInput },
      t_AddPullRequestReviewPayload | null
    >

    /**
     * Adds a comment to a review.
     */
    addPullRequestReviewComment: FieldsTypeArg<
      { input: AddPullRequestReviewCommentInput },
      t_AddPullRequestReviewCommentPayload | null
    >

    /**
     * Adds a reaction to a subject.
     */
    addReaction: FieldsTypeArg<
      { input: AddReactionInput },
      t_AddReactionPayload | null
    >

    /**
     * Adds a star to a Starrable.
     */
    addStar: FieldsTypeArg<{ input: AddStarInput }, t_AddStarPayload | null>

    /**
     * Cancels a pending invitation for an administrator to join an enterprise.
     */
    cancelEnterpriseAdminInvitation: FieldsTypeArg<
      { input: CancelEnterpriseAdminInvitationInput },
      t_CancelEnterpriseAdminInvitationPayload | null
    >

    /**
     * Update your status on GitHub.
     */
    changeUserStatus: FieldsTypeArg<
      { input: ChangeUserStatusInput },
      t_ChangeUserStatusPayload | null
    >

    /**
     * Clears all labels from a labelable object.
     */
    clearLabelsFromLabelable: FieldsTypeArg<
      { input: ClearLabelsFromLabelableInput },
      t_ClearLabelsFromLabelablePayload | null
    >

    /**
     * Creates a new project by cloning configuration from an existing project.
     */
    cloneProject: FieldsTypeArg<
      { input: CloneProjectInput },
      t_CloneProjectPayload | null
    >

    /**
     * Create a new repository with the same files and directory structure as a template repository.
     */
    cloneTemplateRepository: FieldsTypeArg<
      { input: CloneTemplateRepositoryInput },
      t_CloneTemplateRepositoryPayload | null
    >

    /**
     * Close an issue.
     */
    closeIssue: FieldsTypeArg<
      { input: CloseIssueInput },
      t_CloseIssuePayload | null
    >

    /**
     * Close a pull request.
     */
    closePullRequest: FieldsTypeArg<
      { input: ClosePullRequestInput },
      t_ClosePullRequestPayload | null
    >

    /**
     * Convert a project note card to one associated with a newly created issue.
     */
    convertProjectCardNoteToIssue: FieldsTypeArg<
      { input: ConvertProjectCardNoteToIssueInput },
      t_ConvertProjectCardNoteToIssuePayload | null
    >

    /**
     * Create a new branch protection rule
     */
    createBranchProtectionRule: FieldsTypeArg<
      { input: CreateBranchProtectionRuleInput },
      t_CreateBranchProtectionRulePayload | null
    >

    /**
     * Creates an organization as part of an enterprise account.
     */
    createEnterpriseOrganization: FieldsTypeArg<
      { input: CreateEnterpriseOrganizationInput },
      t_CreateEnterpriseOrganizationPayload | null
    >

    /**
     * Creates a new issue.
     */
    createIssue: FieldsTypeArg<
      { input: CreateIssueInput },
      t_CreateIssuePayload | null
    >

    /**
     * Creates a new project.
     */
    createProject: FieldsTypeArg<
      { input: CreateProjectInput },
      t_CreateProjectPayload | null
    >

    /**
     * Create a new pull request
     */
    createPullRequest: FieldsTypeArg<
      { input: CreatePullRequestInput },
      t_CreatePullRequestPayload | null
    >

    /**
     * Create a new Git Ref.
     */
    createRef: FieldsTypeArg<
      { input: CreateRefInput },
      t_CreateRefPayload | null
    >

    /**
     * Create a new repository.
     */
    createRepository: FieldsTypeArg<
      { input: CreateRepositoryInput },
      t_CreateRepositoryPayload | null
    >

    /**
     * Creates a new team discussion.
     */
    createTeamDiscussion: FieldsTypeArg<
      { input: CreateTeamDiscussionInput },
      t_CreateTeamDiscussionPayload | null
    >

    /**
     * Creates a new team discussion comment.
     */
    createTeamDiscussionComment: FieldsTypeArg<
      { input: CreateTeamDiscussionCommentInput },
      t_CreateTeamDiscussionCommentPayload | null
    >

    /**
     * Rejects a suggested topic for the repository.
     */
    declineTopicSuggestion: FieldsTypeArg<
      { input: DeclineTopicSuggestionInput },
      t_DeclineTopicSuggestionPayload | null
    >

    /**
     * Delete a branch protection rule
     */
    deleteBranchProtectionRule: FieldsTypeArg<
      { input: DeleteBranchProtectionRuleInput },
      t_DeleteBranchProtectionRulePayload | null
    >

    /**
     * Deletes an Issue object.
     */
    deleteIssue: FieldsTypeArg<
      { input: DeleteIssueInput },
      t_DeleteIssuePayload | null
    >

    /**
     * Deletes an IssueComment object.
     */
    deleteIssueComment: FieldsTypeArg<
      { input: DeleteIssueCommentInput },
      t_DeleteIssueCommentPayload | null
    >

    /**
     * Deletes a project.
     */
    deleteProject: FieldsTypeArg<
      { input: DeleteProjectInput },
      t_DeleteProjectPayload | null
    >

    /**
     * Deletes a project card.
     */
    deleteProjectCard: FieldsTypeArg<
      { input: DeleteProjectCardInput },
      t_DeleteProjectCardPayload | null
    >

    /**
     * Deletes a project column.
     */
    deleteProjectColumn: FieldsTypeArg<
      { input: DeleteProjectColumnInput },
      t_DeleteProjectColumnPayload | null
    >

    /**
     * Deletes a pull request review.
     */
    deletePullRequestReview: FieldsTypeArg<
      { input: DeletePullRequestReviewInput },
      t_DeletePullRequestReviewPayload | null
    >

    /**
     * Deletes a pull request review comment.
     */
    deletePullRequestReviewComment: FieldsTypeArg<
      { input: DeletePullRequestReviewCommentInput },
      t_DeletePullRequestReviewCommentPayload | null
    >

    /**
     * Delete a Git Ref.
     */
    deleteRef: FieldsTypeArg<
      { input: DeleteRefInput },
      t_DeleteRefPayload | null
    >

    /**
     * Deletes a team discussion.
     */
    deleteTeamDiscussion: FieldsTypeArg<
      { input: DeleteTeamDiscussionInput },
      t_DeleteTeamDiscussionPayload | null
    >

    /**
     * Deletes a team discussion comment.
     */
    deleteTeamDiscussionComment: FieldsTypeArg<
      { input: DeleteTeamDiscussionCommentInput },
      t_DeleteTeamDiscussionCommentPayload | null
    >

    /**
     * Dismisses an approved or rejected pull request review.
     */
    dismissPullRequestReview: FieldsTypeArg<
      { input: DismissPullRequestReviewInput },
      t_DismissPullRequestReviewPayload | null
    >

    /**
     * Follow a user.
     */
    followUser: FieldsTypeArg<
      { input: FollowUserInput },
      t_FollowUserPayload | null
    >

    /**
     * Invite someone to become an administrator of the enterprise.
     */
    inviteEnterpriseAdmin: FieldsTypeArg<
      { input: InviteEnterpriseAdminInput },
      t_InviteEnterpriseAdminPayload | null
    >

    /**
     * Creates a repository link for a project.
     */
    linkRepositoryToProject: FieldsTypeArg<
      { input: LinkRepositoryToProjectInput },
      t_LinkRepositoryToProjectPayload | null
    >

    /**
     * Lock a lockable object
     */
    lockLockable: FieldsTypeArg<
      { input: LockLockableInput },
      t_LockLockablePayload | null
    >

    /**
     * Merge a head into a branch.
     */
    mergeBranch: FieldsTypeArg<
      { input: MergeBranchInput },
      t_MergeBranchPayload | null
    >

    /**
     * Merge a pull request.
     */
    mergePullRequest: FieldsTypeArg<
      { input: MergePullRequestInput },
      t_MergePullRequestPayload | null
    >

    /**
     * Moves a project card to another place.
     */
    moveProjectCard: FieldsTypeArg<
      { input: MoveProjectCardInput },
      t_MoveProjectCardPayload | null
    >

    /**
     * Moves a project column to another place.
     */
    moveProjectColumn: FieldsTypeArg<
      { input: MoveProjectColumnInput },
      t_MoveProjectColumnPayload | null
    >

    /**
     * Regenerates the identity provider recovery codes for an enterprise
     */
    regenerateEnterpriseIdentityProviderRecoveryCodes: FieldsTypeArg<
      { input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput },
      t_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload | null
    >

    /**
     * Removes assignees from an assignable object.
     */
    removeAssigneesFromAssignable: FieldsTypeArg<
      { input: RemoveAssigneesFromAssignableInput },
      t_RemoveAssigneesFromAssignablePayload | null
    >

    /**
     * Removes an administrator from the enterprise.
     */
    removeEnterpriseAdmin: FieldsTypeArg<
      { input: RemoveEnterpriseAdminInput },
      t_RemoveEnterpriseAdminPayload | null
    >

    /**
     * Removes an organization from the enterprise
     */
    removeEnterpriseOrganization: FieldsTypeArg<
      { input: RemoveEnterpriseOrganizationInput },
      t_RemoveEnterpriseOrganizationPayload | null
    >

    /**
     * Removes labels from a Labelable object.
     */
    removeLabelsFromLabelable: FieldsTypeArg<
      { input: RemoveLabelsFromLabelableInput },
      t_RemoveLabelsFromLabelablePayload | null
    >

    /**
     * Removes outside collaborator from all repositories in an organization.
     */
    removeOutsideCollaborator: FieldsTypeArg<
      { input: RemoveOutsideCollaboratorInput },
      t_RemoveOutsideCollaboratorPayload | null
    >

    /**
     * Removes a reaction from a subject.
     */
    removeReaction: FieldsTypeArg<
      { input: RemoveReactionInput },
      t_RemoveReactionPayload | null
    >

    /**
     * Removes a star from a Starrable.
     */
    removeStar: FieldsTypeArg<
      { input: RemoveStarInput },
      t_RemoveStarPayload | null
    >

    /**
     * Reopen a issue.
     */
    reopenIssue: FieldsTypeArg<
      { input: ReopenIssueInput },
      t_ReopenIssuePayload | null
    >

    /**
     * Reopen a pull request.
     */
    reopenPullRequest: FieldsTypeArg<
      { input: ReopenPullRequestInput },
      t_ReopenPullRequestPayload | null
    >

    /**
     * Set review requests on a pull request.
     */
    requestReviews: FieldsTypeArg<
      { input: RequestReviewsInput },
      t_RequestReviewsPayload | null
    >

    /**
     * Marks a review thread as resolved.
     */
    resolveReviewThread: FieldsTypeArg<
      { input: ResolveReviewThreadInput },
      t_ResolveReviewThreadPayload | null
    >

    /**
     * Submits a pending pull request review.
     */
    submitPullRequestReview: FieldsTypeArg<
      { input: SubmitPullRequestReviewInput },
      t_SubmitPullRequestReviewPayload | null
    >

    /**
     * Transfer an issue to a different repository
     */
    transferIssue: FieldsTypeArg<
      { input: TransferIssueInput },
      t_TransferIssuePayload | null
    >

    /**
     * Unfollow a user.
     */
    unfollowUser: FieldsTypeArg<
      { input: UnfollowUserInput },
      t_UnfollowUserPayload | null
    >

    /**
     * Deletes a repository link from a project.
     */
    unlinkRepositoryFromProject: FieldsTypeArg<
      { input: UnlinkRepositoryFromProjectInput },
      t_UnlinkRepositoryFromProjectPayload | null
    >

    /**
     * Unlock a lockable object
     */
    unlockLockable: FieldsTypeArg<
      { input: UnlockLockableInput },
      t_UnlockLockablePayload | null
    >

    /**
     * Unmark an issue as a duplicate of another issue.
     */
    unmarkIssueAsDuplicate: FieldsTypeArg<
      { input: UnmarkIssueAsDuplicateInput },
      t_UnmarkIssueAsDuplicatePayload | null
    >

    /**
     * Marks a review thread as unresolved.
     */
    unresolveReviewThread: FieldsTypeArg<
      { input: UnresolveReviewThreadInput },
      t_UnresolveReviewThreadPayload | null
    >

    /**
     * Create a new branch protection rule
     */
    updateBranchProtectionRule: FieldsTypeArg<
      { input: UpdateBranchProtectionRuleInput },
      t_UpdateBranchProtectionRulePayload | null
    >

    /**
     * Sets the action execution capability setting for an enterprise.
     */
    updateEnterpriseActionExecutionCapabilitySetting: FieldsTypeArg<
      { input: UpdateEnterpriseActionExecutionCapabilitySettingInput },
      t_UpdateEnterpriseActionExecutionCapabilitySettingPayload | null
    >

    /**
     * Updates the role of an enterprise administrator.
     */
    updateEnterpriseAdministratorRole: FieldsTypeArg<
      { input: UpdateEnterpriseAdministratorRoleInput },
      t_UpdateEnterpriseAdministratorRolePayload | null
    >

    /**
     * Sets whether private repository forks are enabled for an enterprise.
     */
    updateEnterpriseAllowPrivateRepositoryForkingSetting: FieldsTypeArg<
      { input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput },
      t_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload | null
    >

    /**
     * Sets the default repository permission for organizations in an enterprise.
     */
    updateEnterpriseDefaultRepositoryPermissionSetting: FieldsTypeArg<
      { input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput },
      t_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload | null
    >

    /**
     * Sets whether organization members with admin permissions on a repository can change repository visibility.
     */
    updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: FieldsTypeArg<
      {
        input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
      },
      t_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload | null
    >

    /**
     * Sets the members can create repositories setting for an enterprise.
     */
    updateEnterpriseMembersCanCreateRepositoriesSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput },
      t_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload | null
    >

    /**
     * Sets the members can delete issues setting for an enterprise.
     */
    updateEnterpriseMembersCanDeleteIssuesSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput },
      t_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload | null
    >

    /**
     * Sets the members can delete repositories setting for an enterprise.
     */
    updateEnterpriseMembersCanDeleteRepositoriesSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput },
      t_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload | null
    >

    /**
     * Sets whether members can invite collaborators are enabled for an enterprise.
     */
    updateEnterpriseMembersCanInviteCollaboratorsSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput },
      t_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload | null
    >

    /**
     * Sets whether or not an organization admin can make purchases.
     */
    updateEnterpriseMembersCanMakePurchasesSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanMakePurchasesSettingInput },
      t_UpdateEnterpriseMembersCanMakePurchasesSettingPayload | null
    >

    /**
     * Sets the members can update protected branches setting for an enterprise.
     */
    updateEnterpriseMembersCanUpdateProtectedBranchesSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput },
      t_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload | null
    >

    /**
     * Sets the members can view dependency insights for an enterprise.
     */
    updateEnterpriseMembersCanViewDependencyInsightsSetting: FieldsTypeArg<
      { input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput },
      t_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload | null
    >

    /**
     * Sets whether organization projects are enabled for an enterprise.
     */
    updateEnterpriseOrganizationProjectsSetting: FieldsTypeArg<
      { input: UpdateEnterpriseOrganizationProjectsSettingInput },
      t_UpdateEnterpriseOrganizationProjectsSettingPayload | null
    >

    /**
     * Updates an enterprise's profile.
     */
    updateEnterpriseProfile: FieldsTypeArg<
      { input: UpdateEnterpriseProfileInput },
      t_UpdateEnterpriseProfilePayload | null
    >

    /**
     * Sets whether repository projects are enabled for a enterprise.
     */
    updateEnterpriseRepositoryProjectsSetting: FieldsTypeArg<
      { input: UpdateEnterpriseRepositoryProjectsSettingInput },
      t_UpdateEnterpriseRepositoryProjectsSettingPayload | null
    >

    /**
     * Sets whether team discussions are enabled for an enterprise.
     */
    updateEnterpriseTeamDiscussionsSetting: FieldsTypeArg<
      { input: UpdateEnterpriseTeamDiscussionsSettingInput },
      t_UpdateEnterpriseTeamDiscussionsSettingPayload | null
    >

    /**
     * Sets whether two factor authentication is required for all users in an enterprise.
     */
    updateEnterpriseTwoFactorAuthenticationRequiredSetting: FieldsTypeArg<
      { input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput },
      t_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload | null
    >

    /**
     * Updates an Issue.
     */
    updateIssue: FieldsTypeArg<
      { input: UpdateIssueInput },
      t_UpdateIssuePayload | null
    >

    /**
     * Updates an IssueComment object.
     */
    updateIssueComment: FieldsTypeArg<
      { input: UpdateIssueCommentInput },
      t_UpdateIssueCommentPayload | null
    >

    /**
     * Updates an existing project.
     */
    updateProject: FieldsTypeArg<
      { input: UpdateProjectInput },
      t_UpdateProjectPayload | null
    >

    /**
     * Updates an existing project card.
     */
    updateProjectCard: FieldsTypeArg<
      { input: UpdateProjectCardInput },
      t_UpdateProjectCardPayload | null
    >

    /**
     * Updates an existing project column.
     */
    updateProjectColumn: FieldsTypeArg<
      { input: UpdateProjectColumnInput },
      t_UpdateProjectColumnPayload | null
    >

    /**
     * Update a pull request
     */
    updatePullRequest: FieldsTypeArg<
      { input: UpdatePullRequestInput },
      t_UpdatePullRequestPayload | null
    >

    /**
     * Updates the body of a pull request review.
     */
    updatePullRequestReview: FieldsTypeArg<
      { input: UpdatePullRequestReviewInput },
      t_UpdatePullRequestReviewPayload | null
    >

    /**
     * Updates a pull request review comment.
     */
    updatePullRequestReviewComment: FieldsTypeArg<
      { input: UpdatePullRequestReviewCommentInput },
      t_UpdatePullRequestReviewCommentPayload | null
    >

    /**
     * Update a Git Ref.
     */
    updateRef: FieldsTypeArg<
      { input: UpdateRefInput },
      t_UpdateRefPayload | null
    >

    /**
     * Update information about a repository.
     */
    updateRepository: FieldsTypeArg<
      { input: UpdateRepositoryInput },
      t_UpdateRepositoryPayload | null
    >

    /**
     * Updates the state for subscribable subjects.
     */
    updateSubscription: FieldsTypeArg<
      { input: UpdateSubscriptionInput },
      t_UpdateSubscriptionPayload | null
    >

    /**
     * Updates a team discussion.
     */
    updateTeamDiscussion: FieldsTypeArg<
      { input: UpdateTeamDiscussionInput },
      t_UpdateTeamDiscussionPayload | null
    >

    /**
     * Updates a discussion comment.
     */
    updateTeamDiscussionComment: FieldsTypeArg<
      { input: UpdateTeamDiscussionCommentInput },
      t_UpdateTeamDiscussionCommentPayload | null
    >

    /**
     * Replaces the repository's topics with the given topics.
     */
    updateTopics: FieldsTypeArg<
      { input: UpdateTopicsInput },
      t_UpdateTopicsPayload | null
    >
  },
  Extension<'Mutation'>
>

/**
 * @name AddReactionPayload
 * @type OBJECT
 */
type t_AddReactionPayload = FieldsType<
  {
    __typename: t_String<'AddReactionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The reaction object.
     */
    reaction: t_Reaction | null

    /**
     * The reactable subject.
     */
    subject:
      | t_CommitComment
      | t_Issue
      | t_IssueComment
      | t_PullRequest
      | t_PullRequestReview
      | t_PullRequestReviewComment
      | t_TeamDiscussion
      | t_TeamDiscussionComment
      | null
  },
  Extension<'AddReactionPayload'>
>

/**
 * @name AddReactionInput
 * @type INPUT_OBJECT
 */
export type AddReactionInput = {
  subjectId: string
  content: ReactionContent
  clientMutationId: string | null
}

/**
 * @name RemoveReactionPayload
 * @type OBJECT
 */
type t_RemoveReactionPayload = FieldsType<
  {
    __typename: t_String<'RemoveReactionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The reaction object.
     */
    reaction: t_Reaction | null

    /**
     * The reactable subject.
     */
    subject:
      | t_CommitComment
      | t_Issue
      | t_IssueComment
      | t_PullRequest
      | t_PullRequestReview
      | t_PullRequestReviewComment
      | t_TeamDiscussion
      | t_TeamDiscussionComment
      | null
  },
  Extension<'RemoveReactionPayload'>
>

/**
 * @name RemoveReactionInput
 * @type INPUT_OBJECT
 */
export type RemoveReactionInput = {
  subjectId: string
  content: ReactionContent
  clientMutationId: string | null
}

/**
 * @name UpdateSubscriptionPayload
 * @type OBJECT
 */
type t_UpdateSubscriptionPayload = FieldsType<
  {
    __typename: t_String<'UpdateSubscriptionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The input subscribable entity.
     */
    subscribable:
      | t_Commit
      | t_Issue
      | t_PullRequest
      | t_Repository
      | t_Team
      | t_TeamDiscussion
      | null
  },
  Extension<'UpdateSubscriptionPayload'>
>

/**
 * @name UpdateSubscriptionInput
 * @type INPUT_OBJECT
 */
export type UpdateSubscriptionInput = {
  subscribableId: string
  state: SubscriptionState
  clientMutationId: string | null
}

/**
 * @name AddCommentPayload
 * @type OBJECT
 */
type t_AddCommentPayload = FieldsType<
  {
    __typename: t_String<'AddCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The edge from the subject's comment connection.
     */
    commentEdge: t_IssueCommentEdge | null

    /**
     * The subject
     */
    subject:
      | t_AddedToProjectEvent
      | t_App
      | t_AssignedEvent
      | t_BaseRefChangedEvent
      | t_BaseRefForcePushedEvent
      | t_Blob
      | t_Bot
      | t_BranchProtectionRule
      | t_ClosedEvent
      | t_CodeOfConduct
      | t_CommentDeletedEvent
      | t_Commit
      | t_CommitComment
      | t_CommitCommentThread
      | t_ConvertedNoteToIssueEvent
      | t_CrossReferencedEvent
      | t_DemilestonedEvent
      | t_DeployKey
      | t_DeployedEvent
      | t_Deployment
      | t_DeploymentEnvironmentChangedEvent
      | t_DeploymentStatus
      | t_Enterprise
      | t_EnterpriseAdministratorInvitation
      | t_EnterpriseIdentityProvider
      | t_EnterpriseRepositoryInfo
      | t_EnterpriseServerInstallation
      | t_EnterpriseServerUserAccount
      | t_EnterpriseServerUserAccountEmail
      | t_EnterpriseServerUserAccountsUpload
      | t_EnterpriseUserAccount
      | t_ExternalIdentity
      | t_Gist
      | t_GistComment
      | t_HeadRefDeletedEvent
      | t_HeadRefForcePushedEvent
      | t_HeadRefRestoredEvent
      | t_Issue
      | t_IssueComment
      | t_Label
      | t_LabeledEvent
      | t_Language
      | t_License
      | t_LockedEvent
      | t_Mannequin
      | t_MarkedAsDuplicateEvent
      | t_MarketplaceCategory
      | t_MarketplaceListing
      | t_MembersCanDeleteReposClearAuditEntry
      | t_MembersCanDeleteReposDisableAuditEntry
      | t_MembersCanDeleteReposEnableAuditEntry
      | t_MentionedEvent
      | t_MergedEvent
      | t_Milestone
      | t_MilestonedEvent
      | t_MovedColumnsInProjectEvent
      | t_OauthApplicationCreateAuditEntry
      | t_OrgAddBillingManagerAuditEntry
      | t_OrgAddMemberAuditEntry
      | t_OrgBlockUserAuditEntry
      | t_OrgConfigDisableCollaboratorsOnlyAuditEntry
      | t_OrgConfigEnableCollaboratorsOnlyAuditEntry
      | t_OrgCreateAuditEntry
      | t_OrgDisableOauthAppRestrictionsAuditEntry
      | t_OrgDisableSamlAuditEntry
      | t_OrgDisableTwoFactorRequirementAuditEntry
      | t_OrgEnableOauthAppRestrictionsAuditEntry
      | t_OrgEnableSamlAuditEntry
      | t_OrgEnableTwoFactorRequirementAuditEntry
      | t_OrgInviteMemberAuditEntry
      | t_OrgInviteToBusinessAuditEntry
      | t_OrgOauthAppAccessApprovedAuditEntry
      | t_OrgOauthAppAccessDeniedAuditEntry
      | t_OrgOauthAppAccessRequestedAuditEntry
      | t_OrgRemoveBillingManagerAuditEntry
      | t_OrgRemoveMemberAuditEntry
      | t_OrgRemoveOutsideCollaboratorAuditEntry
      | t_OrgRestoreMemberAuditEntry
      | t_OrgUnblockUserAuditEntry
      | t_OrgUpdateDefaultRepositoryPermissionAuditEntry
      | t_OrgUpdateMemberAuditEntry
      | t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
      | t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
      | t_Organization
      | t_OrganizationIdentityProvider
      | t_OrganizationInvitation
      | t_PinnedEvent
      | t_PrivateRepositoryForkingDisableAuditEntry
      | t_PrivateRepositoryForkingEnableAuditEntry
      | t_Project
      | t_ProjectCard
      | t_ProjectColumn
      | t_PublicKey
      | t_PullRequest
      | t_PullRequestCommit
      | t_PullRequestCommitCommentThread
      | t_PullRequestReview
      | t_PullRequestReviewComment
      | t_PullRequestReviewThread
      | t_PushAllowance
      | t_Reaction
      | t_ReadyForReviewEvent
      | t_Ref
      | t_ReferencedEvent
      | t_RegistryPackage
      | t_RegistryPackageDependency
      | t_RegistryPackageFile
      | t_RegistryPackageTag
      | t_RegistryPackageVersion
      | t_Release
      | t_ReleaseAsset
      | t_RemovedFromProjectEvent
      | t_RenamedTitleEvent
      | t_ReopenedEvent
      | t_RepoAccessAuditEntry
      | t_RepoAddMemberAuditEntry
      | t_RepoAddTopicAuditEntry
      | t_RepoArchivedAuditEntry
      | t_RepoChangeMergeSettingAuditEntry
      | t_RepoConfigDisableAnonymousGitAccessAuditEntry
      | t_RepoConfigDisableCollaboratorsOnlyAuditEntry
      | t_RepoConfigDisableContributorsOnlyAuditEntry
      | t_RepoConfigDisableSockpuppetDisallowedAuditEntry
      | t_RepoConfigEnableAnonymousGitAccessAuditEntry
      | t_RepoConfigEnableCollaboratorsOnlyAuditEntry
      | t_RepoConfigEnableContributorsOnlyAuditEntry
      | t_RepoConfigEnableSockpuppetDisallowedAuditEntry
      | t_RepoConfigLockAnonymousGitAccessAuditEntry
      | t_RepoConfigUnlockAnonymousGitAccessAuditEntry
      | t_RepoCreateAuditEntry
      | t_RepoDestroyAuditEntry
      | t_RepoRemoveMemberAuditEntry
      | t_RepoRemoveTopicAuditEntry
      | t_Repository
      | t_RepositoryInvitation
      | t_RepositoryTopic
      | t_RepositoryVisibilityChangeDisableAuditEntry
      | t_RepositoryVisibilityChangeEnableAuditEntry
      | t_RepositoryVulnerabilityAlert
      | t_ReviewDismissalAllowance
      | t_ReviewDismissedEvent
      | t_ReviewRequest
      | t_ReviewRequestRemovedEvent
      | t_ReviewRequestedEvent
      | t_SavedReply
      | t_SecurityAdvisory
      | t_SponsorsListing
      | t_SponsorsTier
      | t_Sponsorship
      | t_Status
      | t_StatusContext
      | t_SubscribedEvent
      | t_Tag
      | t_Team
      | t_TeamAddMemberAuditEntry
      | t_TeamAddRepositoryAuditEntry
      | t_TeamChangeParentTeamAuditEntry
      | t_TeamDiscussion
      | t_TeamDiscussionComment
      | t_TeamRemoveMemberAuditEntry
      | t_TeamRemoveRepositoryAuditEntry
      | t_Topic
      | t_TransferredEvent
      | t_Tree
      | t_UnassignedEvent
      | t_UnlabeledEvent
      | t_UnlockedEvent
      | t_UnpinnedEvent
      | t_UnsubscribedEvent
      | t_User
      | t_UserBlockedEvent
      | t_UserContentEdit
      | t_UserStatus
      | null

    /**
     * The edge from the subject's timeline connection.
     */
    timelineEdge: t_IssueTimelineItemEdge | null
  },
  Extension<'AddCommentPayload'>
>

/**
 * @name AddCommentInput
 * @type INPUT_OBJECT
 */
export type AddCommentInput = {
  subjectId: string
  body: string
  clientMutationId: string | null
}

/**
 * @name MinimizeCommentInput
 * @type INPUT_OBJECT
 */
export type MinimizeCommentInput = {
  subjectId: string
  classifier: ReportedContentClassifiers
  clientMutationId: string | null
}

/**
 * @name ReportedContentClassifiers
 * @type ENUM
 */
type t_ReportedContentClassifiers = EnumType<
  'SPAM' | 'ABUSE' | 'OFF_TOPIC' | 'OUTDATED' | 'RESOLVED'
>

/**
 * @name UnminimizeCommentInput
 * @type INPUT_OBJECT
 */
export type UnminimizeCommentInput = {
  subjectId: string
  clientMutationId: string | null
}

/**
 * @name UpdateIssueCommentPayload
 * @type OBJECT
 */
type t_UpdateIssueCommentPayload = FieldsType<
  {
    __typename: t_String<'UpdateIssueCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated comment.
     */
    issueComment: t_IssueComment | null
  },
  Extension<'UpdateIssueCommentPayload'>
>

/**
 * @name UpdateIssueCommentInput
 * @type INPUT_OBJECT
 */
export type UpdateIssueCommentInput = {
  id: string
  body: string
  clientMutationId: string | null
}

/**
 * @name CreateProjectPayload
 * @type OBJECT
 */
type t_CreateProjectPayload = FieldsType<
  {
    __typename: t_String<'CreateProjectPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new project.
     */
    project: t_Project | null
  },
  Extension<'CreateProjectPayload'>
>

/**
 * @name CreateProjectInput
 * @type INPUT_OBJECT
 */
export type CreateProjectInput = {
  ownerId: string
  name: string
  body: string | null
  template: ProjectTemplate | null
  repositoryIds: (string)[] | null
  clientMutationId: string | null
}

/**
 * @name ProjectTemplate
 * @type ENUM
 */
type t_ProjectTemplate = EnumType<
  | 'BASIC_KANBAN'
  | 'AUTOMATED_KANBAN_V2'
  | 'AUTOMATED_REVIEWS_KANBAN'
  | 'BUG_TRIAGE'
>

/**
 * @name UpdateProjectPayload
 * @type OBJECT
 */
type t_UpdateProjectPayload = FieldsType<
  {
    __typename: t_String<'UpdateProjectPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated project.
     */
    project: t_Project | null
  },
  Extension<'UpdateProjectPayload'>
>

/**
 * @name UpdateProjectInput
 * @type INPUT_OBJECT
 */
export type UpdateProjectInput = {
  projectId: string
  name: string | null
  body: string | null
  state: ProjectState | null
  public: boolean | null
  clientMutationId: string | null
}

/**
 * @name DeleteProjectPayload
 * @type OBJECT
 */
type t_DeleteProjectPayload = FieldsType<
  {
    __typename: t_String<'DeleteProjectPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The repository or organization the project was removed from.
     */
    owner: t_Organization | t_Repository | t_User | null
  },
  Extension<'DeleteProjectPayload'>
>

/**
 * @name DeleteProjectInput
 * @type INPUT_OBJECT
 */
export type DeleteProjectInput = {
  projectId: string
  clientMutationId: string | null
}

/**
 * @name CloneProjectPayload
 * @type OBJECT
 */
type t_CloneProjectPayload = FieldsType<
  {
    __typename: t_String<'CloneProjectPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The id of the JobStatus for populating cloned fields.
     */
    jobStatusId: t_String | null

    /**
     * The new cloned project.
     */
    project: t_Project | null
  },
  Extension<'CloneProjectPayload'>
>

/**
 * @name CloneProjectInput
 * @type INPUT_OBJECT
 */
export type CloneProjectInput = {
  targetOwnerId: string
  sourceId: string
  includeWorkflows: boolean
  name: string
  body: string | null
  public: boolean | null
  clientMutationId: string | null
}

/**
 * @name ImportProjectInput
 * @type INPUT_OBJECT
 */
export type ImportProjectInput = {
  ownerName: string
  name: string
  body: string | null
  public: boolean | null
  columnImports: (ProjectColumnImport)[]
  clientMutationId: string | null
}

/**
 * @name ProjectColumnImport
 * @type INPUT_OBJECT
 */
export type ProjectColumnImport = {
  columnName: string
  position: number
  issues: (ProjectCardImport)[] | null
}

/**
 * @name ProjectCardImport
 * @type INPUT_OBJECT
 */
export type ProjectCardImport = { repository: string; number: number }

/**
 * @name AddProjectColumnPayload
 * @type OBJECT
 */
type t_AddProjectColumnPayload = FieldsType<
  {
    __typename: t_String<'AddProjectColumnPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The edge from the project's column connection.
     */
    columnEdge: t_ProjectColumnEdge | null

    /**
     * The project
     */
    project: t_Project | null
  },
  Extension<'AddProjectColumnPayload'>
>

/**
 * @name AddProjectColumnInput
 * @type INPUT_OBJECT
 */
export type AddProjectColumnInput = {
  projectId: string
  name: string
  clientMutationId: string | null
}

/**
 * @name MoveProjectColumnPayload
 * @type OBJECT
 */
type t_MoveProjectColumnPayload = FieldsType<
  {
    __typename: t_String<'MoveProjectColumnPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new edge of the moved column.
     */
    columnEdge: t_ProjectColumnEdge | null
  },
  Extension<'MoveProjectColumnPayload'>
>

/**
 * @name MoveProjectColumnInput
 * @type INPUT_OBJECT
 */
export type MoveProjectColumnInput = {
  columnId: string
  afterColumnId: string | null
  clientMutationId: string | null
}

/**
 * @name UpdateProjectColumnPayload
 * @type OBJECT
 */
type t_UpdateProjectColumnPayload = FieldsType<
  {
    __typename: t_String<'UpdateProjectColumnPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated project column.
     */
    projectColumn: t_ProjectColumn | null
  },
  Extension<'UpdateProjectColumnPayload'>
>

/**
 * @name UpdateProjectColumnInput
 * @type INPUT_OBJECT
 */
export type UpdateProjectColumnInput = {
  projectColumnId: string
  name: string
  clientMutationId: string | null
}

/**
 * @name DeleteProjectColumnPayload
 * @type OBJECT
 */
type t_DeleteProjectColumnPayload = FieldsType<
  {
    __typename: t_String<'DeleteProjectColumnPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The deleted column ID.
     */
    deletedColumnId: t_ID | null

    /**
     * The project the deleted column was in.
     */
    project: t_Project | null
  },
  Extension<'DeleteProjectColumnPayload'>
>

/**
 * @name DeleteProjectColumnInput
 * @type INPUT_OBJECT
 */
export type DeleteProjectColumnInput = {
  columnId: string
  clientMutationId: string | null
}

/**
 * @name AddProjectCardPayload
 * @type OBJECT
 */
type t_AddProjectCardPayload = FieldsType<
  {
    __typename: t_String<'AddProjectCardPayload'>

    /**
     * The edge from the ProjectColumn's card connection.
     */
    cardEdge: t_ProjectCardEdge | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The ProjectColumn
     */
    projectColumn: t_ProjectColumn | null
  },
  Extension<'AddProjectCardPayload'>
>

/**
 * @name AddProjectCardInput
 * @type INPUT_OBJECT
 */
export type AddProjectCardInput = {
  projectColumnId: string
  contentId: string | null
  note: string | null
  clientMutationId: string | null
}

/**
 * @name UpdateProjectCardPayload
 * @type OBJECT
 */
type t_UpdateProjectCardPayload = FieldsType<
  {
    __typename: t_String<'UpdateProjectCardPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated ProjectCard.
     */
    projectCard: t_ProjectCard | null
  },
  Extension<'UpdateProjectCardPayload'>
>

/**
 * @name UpdateProjectCardInput
 * @type INPUT_OBJECT
 */
export type UpdateProjectCardInput = {
  projectCardId: string
  isArchived: boolean | null
  note: string | null
  clientMutationId: string | null
}

/**
 * @name MoveProjectCardPayload
 * @type OBJECT
 */
type t_MoveProjectCardPayload = FieldsType<
  {
    __typename: t_String<'MoveProjectCardPayload'>

    /**
     * The new edge of the moved card.
     */
    cardEdge: t_ProjectCardEdge | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'MoveProjectCardPayload'>
>

/**
 * @name MoveProjectCardInput
 * @type INPUT_OBJECT
 */
export type MoveProjectCardInput = {
  cardId: string
  columnId: string
  afterCardId: string | null
  clientMutationId: string | null
}

/**
 * @name DeleteProjectCardPayload
 * @type OBJECT
 */
type t_DeleteProjectCardPayload = FieldsType<
  {
    __typename: t_String<'DeleteProjectCardPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The column the deleted card was in.
     */
    column: t_ProjectColumn | null

    /**
     * The deleted card ID.
     */
    deletedCardId: t_ID | null
  },
  Extension<'DeleteProjectCardPayload'>
>

/**
 * @name DeleteProjectCardInput
 * @type INPUT_OBJECT
 */
export type DeleteProjectCardInput = {
  cardId: string
  clientMutationId: string | null
}

/**
 * @name LinkRepositoryToProjectPayload
 * @type OBJECT
 */
type t_LinkRepositoryToProjectPayload = FieldsType<
  {
    __typename: t_String<'LinkRepositoryToProjectPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The linked Project.
     */
    project: t_Project | null

    /**
     * The linked Repository.
     */
    repository: t_Repository | null
  },
  Extension<'LinkRepositoryToProjectPayload'>
>

/**
 * @name LinkRepositoryToProjectInput
 * @type INPUT_OBJECT
 */
export type LinkRepositoryToProjectInput = {
  projectId: string
  repositoryId: string
  clientMutationId: string | null
}

/**
 * @name UnlinkRepositoryFromProjectPayload
 * @type OBJECT
 */
type t_UnlinkRepositoryFromProjectPayload = FieldsType<
  {
    __typename: t_String<'UnlinkRepositoryFromProjectPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The linked Project.
     */
    project: t_Project | null

    /**
     * The linked Repository.
     */
    repository: t_Repository | null
  },
  Extension<'UnlinkRepositoryFromProjectPayload'>
>

/**
 * @name UnlinkRepositoryFromProjectInput
 * @type INPUT_OBJECT
 */
export type UnlinkRepositoryFromProjectInput = {
  projectId: string
  repositoryId: string
  clientMutationId: string | null
}

/**
 * @name ConvertProjectCardNoteToIssuePayload
 * @type OBJECT
 */
type t_ConvertProjectCardNoteToIssuePayload = FieldsType<
  {
    __typename: t_String<'ConvertProjectCardNoteToIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated ProjectCard.
     */
    projectCard: t_ProjectCard | null
  },
  Extension<'ConvertProjectCardNoteToIssuePayload'>
>

/**
 * @name ConvertProjectCardNoteToIssueInput
 * @type INPUT_OBJECT
 */
export type ConvertProjectCardNoteToIssueInput = {
  projectCardId: string
  repositoryId: string
  title: string | null
  body: string | null
  clientMutationId: string | null
}

/**
 * @name UnmarkIssueAsDuplicatePayload
 * @type OBJECT
 */
type t_UnmarkIssueAsDuplicatePayload = FieldsType<
  {
    __typename: t_String<'UnmarkIssueAsDuplicatePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The issue or pull request that was marked as a duplicate.
     */
    duplicate: t_IssueOrPullRequest | null
  },
  Extension<'UnmarkIssueAsDuplicatePayload'>
>

/**
 * @name UnmarkIssueAsDuplicateInput
 * @type INPUT_OBJECT
 */
export type UnmarkIssueAsDuplicateInput = {
  duplicateId: string
  canonicalId: string
  clientMutationId: string | null
}

/**
 * @name LockLockablePayload
 * @type OBJECT
 */
type t_LockLockablePayload = FieldsType<
  {
    __typename: t_String<'LockLockablePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The item that was locked.
     */
    lockedRecord: t_Issue | t_PullRequest | null
  },
  Extension<'LockLockablePayload'>
>

/**
 * @name LockLockableInput
 * @type INPUT_OBJECT
 */
export type LockLockableInput = {
  lockableId: string
  lockReason: LockReason | null
  clientMutationId: string | null
}

/**
 * @name UnlockLockablePayload
 * @type OBJECT
 */
type t_UnlockLockablePayload = FieldsType<
  {
    __typename: t_String<'UnlockLockablePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The item that was unlocked.
     */
    unlockedRecord: t_Issue | t_PullRequest | null
  },
  Extension<'UnlockLockablePayload'>
>

/**
 * @name UnlockLockableInput
 * @type INPUT_OBJECT
 */
export type UnlockLockableInput = {
  lockableId: string
  clientMutationId: string | null
}

/**
 * @name AddAssigneesToAssignablePayload
 * @type OBJECT
 */
type t_AddAssigneesToAssignablePayload = FieldsType<
  {
    __typename: t_String<'AddAssigneesToAssignablePayload'>

    /**
     * The item that was assigned.
     */
    assignable: t_Issue | t_PullRequest | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'AddAssigneesToAssignablePayload'>
>

/**
 * @name AddAssigneesToAssignableInput
 * @type INPUT_OBJECT
 */
export type AddAssigneesToAssignableInput = {
  assignableId: string
  assigneeIds: (string)[]
  clientMutationId: string | null
}

/**
 * @name RemoveAssigneesFromAssignablePayload
 * @type OBJECT
 */
type t_RemoveAssigneesFromAssignablePayload = FieldsType<
  {
    __typename: t_String<'RemoveAssigneesFromAssignablePayload'>

    /**
     * The item that was unassigned.
     */
    assignable: t_Issue | t_PullRequest | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'RemoveAssigneesFromAssignablePayload'>
>

/**
 * @name RemoveAssigneesFromAssignableInput
 * @type INPUT_OBJECT
 */
export type RemoveAssigneesFromAssignableInput = {
  assignableId: string
  assigneeIds: (string)[]
  clientMutationId: string | null
}

/**
 * @name AddLabelsToLabelablePayload
 * @type OBJECT
 */
type t_AddLabelsToLabelablePayload = FieldsType<
  {
    __typename: t_String<'AddLabelsToLabelablePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The item that was labeled.
     */
    labelable: t_Issue | t_PullRequest | null
  },
  Extension<'AddLabelsToLabelablePayload'>
>

/**
 * @name AddLabelsToLabelableInput
 * @type INPUT_OBJECT
 */
export type AddLabelsToLabelableInput = {
  labelableId: string
  labelIds: (string)[]
  clientMutationId: string | null
}

/**
 * @name CreateIssuePayload
 * @type OBJECT
 */
type t_CreateIssuePayload = FieldsType<
  {
    __typename: t_String<'CreateIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new issue.
     */
    issue: t_Issue | null
  },
  Extension<'CreateIssuePayload'>
>

/**
 * @name CreateIssueInput
 * @type INPUT_OBJECT
 */
export type CreateIssueInput = {
  repositoryId: string
  title: string
  body: string | null
  assigneeIds: (string)[] | null
  milestoneId: string | null
  labelIds: (string)[] | null
  projectIds: (string)[] | null
  clientMutationId: string | null
}

/**
 * @name ClearLabelsFromLabelablePayload
 * @type OBJECT
 */
type t_ClearLabelsFromLabelablePayload = FieldsType<
  {
    __typename: t_String<'ClearLabelsFromLabelablePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The item that was unlabeled.
     */
    labelable: t_Issue | t_PullRequest | null
  },
  Extension<'ClearLabelsFromLabelablePayload'>
>

/**
 * @name ClearLabelsFromLabelableInput
 * @type INPUT_OBJECT
 */
export type ClearLabelsFromLabelableInput = {
  labelableId: string
  clientMutationId: string | null
}

/**
 * @name RemoveLabelsFromLabelablePayload
 * @type OBJECT
 */
type t_RemoveLabelsFromLabelablePayload = FieldsType<
  {
    __typename: t_String<'RemoveLabelsFromLabelablePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The Labelable the labels were removed from.
     */
    labelable: t_Issue | t_PullRequest | null
  },
  Extension<'RemoveLabelsFromLabelablePayload'>
>

/**
 * @name RemoveLabelsFromLabelableInput
 * @type INPUT_OBJECT
 */
export type RemoveLabelsFromLabelableInput = {
  labelableId: string
  labelIds: (string)[]
  clientMutationId: string | null
}

/**
 * @name CloseIssuePayload
 * @type OBJECT
 */
type t_CloseIssuePayload = FieldsType<
  {
    __typename: t_String<'CloseIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The issue that was closed.
     */
    issue: t_Issue | null
  },
  Extension<'CloseIssuePayload'>
>

/**
 * @name CloseIssueInput
 * @type INPUT_OBJECT
 */
export type CloseIssueInput = {
  issueId: string
  clientMutationId: string | null
}

/**
 * @name ReopenIssuePayload
 * @type OBJECT
 */
type t_ReopenIssuePayload = FieldsType<
  {
    __typename: t_String<'ReopenIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The issue that was opened.
     */
    issue: t_Issue | null
  },
  Extension<'ReopenIssuePayload'>
>

/**
 * @name ReopenIssueInput
 * @type INPUT_OBJECT
 */
export type ReopenIssueInput = {
  issueId: string
  clientMutationId: string | null
}

/**
 * @name TransferIssuePayload
 * @type OBJECT
 */
type t_TransferIssuePayload = FieldsType<
  {
    __typename: t_String<'TransferIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The issue that was transferred
     */
    issue: t_Issue | null
  },
  Extension<'TransferIssuePayload'>
>

/**
 * @name TransferIssueInput
 * @type INPUT_OBJECT
 */
export type TransferIssueInput = {
  issueId: string
  repositoryId: string
  clientMutationId: string | null
}

/**
 * @name DeleteIssueCommentPayload
 * @type OBJECT
 */
type t_DeleteIssueCommentPayload = FieldsType<
  {
    __typename: t_String<'DeleteIssueCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'DeleteIssueCommentPayload'>
>

/**
 * @name DeleteIssueCommentInput
 * @type INPUT_OBJECT
 */
export type DeleteIssueCommentInput = {
  id: string
  clientMutationId: string | null
}

/**
 * @name UpdateIssuePayload
 * @type OBJECT
 */
type t_UpdateIssuePayload = FieldsType<
  {
    __typename: t_String<'UpdateIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The issue.
     */
    issue: t_Issue | null
  },
  Extension<'UpdateIssuePayload'>
>

/**
 * @name UpdateIssueInput
 * @type INPUT_OBJECT
 */
export type UpdateIssueInput = {
  id: string
  title: string | null
  body: string | null
  assigneeIds: (string)[] | null
  milestoneId: string | null
  labelIds: (string)[] | null
  state: IssueState | null
  projectIds: (string)[] | null
  clientMutationId: string | null
}

/**
 * @name DeleteIssuePayload
 * @type OBJECT
 */
type t_DeleteIssuePayload = FieldsType<
  {
    __typename: t_String<'DeleteIssuePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The repository the issue belonged to
     */
    repository: t_Repository | null
  },
  Extension<'DeleteIssuePayload'>
>

/**
 * @name DeleteIssueInput
 * @type INPUT_OBJECT
 */
export type DeleteIssueInput = {
  issueId: string
  clientMutationId: string | null
}

/**
 * @name PinIssueInput
 * @type INPUT_OBJECT
 */
export type PinIssueInput = { issueId: string; clientMutationId: string | null }

/**
 * @name UnpinIssueInput
 * @type INPUT_OBJECT
 */
export type UnpinIssueInput = {
  issueId: string
  clientMutationId: string | null
}

/**
 * @name CreatePullRequestPayload
 * @type OBJECT
 */
type t_CreatePullRequestPayload = FieldsType<
  {
    __typename: t_String<'CreatePullRequestPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new pull request.
     */
    pullRequest: t_PullRequest | null
  },
  Extension<'CreatePullRequestPayload'>
>

/**
 * @name CreatePullRequestInput
 * @type INPUT_OBJECT
 */
export type CreatePullRequestInput = {
  repositoryId: string
  baseRefName: string
  headRefName: string
  title: string
  body: string | null
  maintainerCanModify: boolean | null
  clientMutationId: string | null
}

/**
 * @name UpdatePullRequestPayload
 * @type OBJECT
 */
type t_UpdatePullRequestPayload = FieldsType<
  {
    __typename: t_String<'UpdatePullRequestPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated pull request.
     */
    pullRequest: t_PullRequest | null
  },
  Extension<'UpdatePullRequestPayload'>
>

/**
 * @name UpdatePullRequestInput
 * @type INPUT_OBJECT
 */
export type UpdatePullRequestInput = {
  pullRequestId: string
  baseRefName: string | null
  title: string | null
  body: string | null
  state: PullRequestUpdateState | null
  maintainerCanModify: boolean | null
  assigneeIds: (string)[] | null
  milestoneId: string | null
  labelIds: (string)[] | null
  projectIds: (string)[] | null
  clientMutationId: string | null
}

/**
 * @name PullRequestUpdateState
 * @type ENUM
 */
type t_PullRequestUpdateState = EnumType<'OPEN' | 'CLOSED'>

/**
 * @name ClosePullRequestPayload
 * @type OBJECT
 */
type t_ClosePullRequestPayload = FieldsType<
  {
    __typename: t_String<'ClosePullRequestPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The pull request that was closed.
     */
    pullRequest: t_PullRequest | null
  },
  Extension<'ClosePullRequestPayload'>
>

/**
 * @name ClosePullRequestInput
 * @type INPUT_OBJECT
 */
export type ClosePullRequestInput = {
  pullRequestId: string
  clientMutationId: string | null
}

/**
 * @name ReopenPullRequestPayload
 * @type OBJECT
 */
type t_ReopenPullRequestPayload = FieldsType<
  {
    __typename: t_String<'ReopenPullRequestPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The pull request that was reopened.
     */
    pullRequest: t_PullRequest | null
  },
  Extension<'ReopenPullRequestPayload'>
>

/**
 * @name ReopenPullRequestInput
 * @type INPUT_OBJECT
 */
export type ReopenPullRequestInput = {
  pullRequestId: string
  clientMutationId: string | null
}

/**
 * @name MergePullRequestPayload
 * @type OBJECT
 */
type t_MergePullRequestPayload = FieldsType<
  {
    __typename: t_String<'MergePullRequestPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The pull request that was merged.
     */
    pullRequest: t_PullRequest | null
  },
  Extension<'MergePullRequestPayload'>
>

/**
 * @name MergePullRequestInput
 * @type INPUT_OBJECT
 */
export type MergePullRequestInput = {
  pullRequestId: string
  commitHeadline: string | null
  commitBody: string | null
  expectedHeadOid: any | null
  mergeMethod: PullRequestMergeMethod | null
  clientMutationId: string | null
}

/**
 * @name PullRequestMergeMethod
 * @type ENUM
 */
type t_PullRequestMergeMethod = EnumType<'MERGE' | 'SQUASH' | 'REBASE'>

/**
 * @name DeletePullRequestReviewCommentPayload
 * @type OBJECT
 */
type t_DeletePullRequestReviewCommentPayload = FieldsType<
  {
    __typename: t_String<'DeletePullRequestReviewCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The pull request review the deleted comment belonged to.
     */
    pullRequestReview: t_PullRequestReview | null
  },
  Extension<'DeletePullRequestReviewCommentPayload'>
>

/**
 * @name DeletePullRequestReviewCommentInput
 * @type INPUT_OBJECT
 */
export type DeletePullRequestReviewCommentInput = {
  id: string
  clientMutationId: string | null
}

/**
 * @name AddPullRequestReviewPayload
 * @type OBJECT
 */
type t_AddPullRequestReviewPayload = FieldsType<
  {
    __typename: t_String<'AddPullRequestReviewPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The newly created pull request review.
     */
    pullRequestReview: t_PullRequestReview | null

    /**
     * The edge from the pull request's review connection.
     */
    reviewEdge: t_PullRequestReviewEdge | null
  },
  Extension<'AddPullRequestReviewPayload'>
>

/**
 * @name AddPullRequestReviewInput
 * @type INPUT_OBJECT
 */
export type AddPullRequestReviewInput = {
  pullRequestId: string
  commitOID: any | null
  body: string | null
  event: PullRequestReviewEvent | null
  comments: (DraftPullRequestReviewComment | null)[] | null
  clientMutationId: string | null
}

/**
 * @name PullRequestReviewEvent
 * @type ENUM
 */
type t_PullRequestReviewEvent = EnumType<
  'COMMENT' | 'APPROVE' | 'REQUEST_CHANGES' | 'DISMISS'
>

/**
 * @name DraftPullRequestReviewComment
 * @type INPUT_OBJECT
 */
export type DraftPullRequestReviewComment = {
  path: string
  position: number
  body: string
}

/**
 * @name SubmitPullRequestReviewPayload
 * @type OBJECT
 */
type t_SubmitPullRequestReviewPayload = FieldsType<
  {
    __typename: t_String<'SubmitPullRequestReviewPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The submitted pull request review.
     */
    pullRequestReview: t_PullRequestReview | null
  },
  Extension<'SubmitPullRequestReviewPayload'>
>

/**
 * @name SubmitPullRequestReviewInput
 * @type INPUT_OBJECT
 */
export type SubmitPullRequestReviewInput = {
  pullRequestReviewId: string
  event: PullRequestReviewEvent
  body: string | null
  clientMutationId: string | null
}

/**
 * @name UpdatePullRequestReviewPayload
 * @type OBJECT
 */
type t_UpdatePullRequestReviewPayload = FieldsType<
  {
    __typename: t_String<'UpdatePullRequestReviewPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated pull request review.
     */
    pullRequestReview: t_PullRequestReview | null
  },
  Extension<'UpdatePullRequestReviewPayload'>
>

/**
 * @name UpdatePullRequestReviewInput
 * @type INPUT_OBJECT
 */
export type UpdatePullRequestReviewInput = {
  pullRequestReviewId: string
  body: string
  clientMutationId: string | null
}

/**
 * @name DismissPullRequestReviewPayload
 * @type OBJECT
 */
type t_DismissPullRequestReviewPayload = FieldsType<
  {
    __typename: t_String<'DismissPullRequestReviewPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The dismissed pull request review.
     */
    pullRequestReview: t_PullRequestReview | null
  },
  Extension<'DismissPullRequestReviewPayload'>
>

/**
 * @name DismissPullRequestReviewInput
 * @type INPUT_OBJECT
 */
export type DismissPullRequestReviewInput = {
  pullRequestReviewId: string
  message: string
  clientMutationId: string | null
}

/**
 * @name DeletePullRequestReviewPayload
 * @type OBJECT
 */
type t_DeletePullRequestReviewPayload = FieldsType<
  {
    __typename: t_String<'DeletePullRequestReviewPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The deleted pull request review.
     */
    pullRequestReview: t_PullRequestReview | null
  },
  Extension<'DeletePullRequestReviewPayload'>
>

/**
 * @name DeletePullRequestReviewInput
 * @type INPUT_OBJECT
 */
export type DeletePullRequestReviewInput = {
  pullRequestReviewId: string
  clientMutationId: string | null
}

/**
 * @name ResolveReviewThreadPayload
 * @type OBJECT
 */
type t_ResolveReviewThreadPayload = FieldsType<
  {
    __typename: t_String<'ResolveReviewThreadPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The thread to resolve.
     */
    thread: t_PullRequestReviewThread | null
  },
  Extension<'ResolveReviewThreadPayload'>
>

/**
 * @name ResolveReviewThreadInput
 * @type INPUT_OBJECT
 */
export type ResolveReviewThreadInput = {
  threadId: string
  clientMutationId: string | null
}

/**
 * @name UnresolveReviewThreadPayload
 * @type OBJECT
 */
type t_UnresolveReviewThreadPayload = FieldsType<
  {
    __typename: t_String<'UnresolveReviewThreadPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The thread to resolve.
     */
    thread: t_PullRequestReviewThread | null
  },
  Extension<'UnresolveReviewThreadPayload'>
>

/**
 * @name UnresolveReviewThreadInput
 * @type INPUT_OBJECT
 */
export type UnresolveReviewThreadInput = {
  threadId: string
  clientMutationId: string | null
}

/**
 * @name AddPullRequestReviewCommentPayload
 * @type OBJECT
 */
type t_AddPullRequestReviewCommentPayload = FieldsType<
  {
    __typename: t_String<'AddPullRequestReviewCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The newly created comment.
     */
    comment: t_PullRequestReviewComment | null

    /**
     * The edge from the review's comment connection.
     */
    commentEdge: t_PullRequestReviewCommentEdge | null
  },
  Extension<'AddPullRequestReviewCommentPayload'>
>

/**
 * @name AddPullRequestReviewCommentInput
 * @type INPUT_OBJECT
 */
export type AddPullRequestReviewCommentInput = {
  pullRequestReviewId: string
  commitOID: any | null
  body: string
  path: string | null
  position: number | null
  inReplyTo: string | null
  clientMutationId: string | null
}

/**
 * @name UpdatePullRequestReviewCommentPayload
 * @type OBJECT
 */
type t_UpdatePullRequestReviewCommentPayload = FieldsType<
  {
    __typename: t_String<'UpdatePullRequestReviewCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated comment.
     */
    pullRequestReviewComment: t_PullRequestReviewComment | null
  },
  Extension<'UpdatePullRequestReviewCommentPayload'>
>

/**
 * @name UpdatePullRequestReviewCommentInput
 * @type INPUT_OBJECT
 */
export type UpdatePullRequestReviewCommentInput = {
  pullRequestReviewCommentId: string
  body: string
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseProfilePayload
 * @type OBJECT
 */
type t_UpdateEnterpriseProfilePayload = FieldsType<
  {
    __typename: t_String<'UpdateEnterpriseProfilePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated enterprise.
     */
    enterprise: t_Enterprise | null
  },
  Extension<'UpdateEnterpriseProfilePayload'>
>

/**
 * @name UpdateEnterpriseProfileInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseProfileInput = {
  enterpriseId: string
  name: string | null
  description: string | null
  websiteUrl: string | null
  location: string | null
  clientMutationId: string | null
}

/**
 * @name InviteEnterpriseAdminPayload
 * @type OBJECT
 */
type t_InviteEnterpriseAdminPayload = FieldsType<
  {
    __typename: t_String<'InviteEnterpriseAdminPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The created enterprise administrator invitation.
     */
    invitation: t_EnterpriseAdministratorInvitation | null
  },
  Extension<'InviteEnterpriseAdminPayload'>
>

/**
 * @name InviteEnterpriseAdminInput
 * @type INPUT_OBJECT
 */
export type InviteEnterpriseAdminInput = {
  enterpriseId: string
  invitee: string | null
  email: string | null
  role: EnterpriseAdministratorRole | null
  clientMutationId: string | null
}

/**
 * @name AcceptEnterpriseAdministratorInvitationPayload
 * @type OBJECT
 */
type t_AcceptEnterpriseAdministratorInvitationPayload = FieldsType<
  {
    __typename: t_String<'AcceptEnterpriseAdministratorInvitationPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The invitation that was accepted.
     */
    invitation: t_EnterpriseAdministratorInvitation | null

    /**
     * A message confirming the result of accepting an administrator invitation.
     */
    message: t_String | null
  },
  Extension<'AcceptEnterpriseAdministratorInvitationPayload'>
>

/**
 * @name AcceptEnterpriseAdministratorInvitationInput
 * @type INPUT_OBJECT
 */
export type AcceptEnterpriseAdministratorInvitationInput = {
  invitationId: string
  clientMutationId: string | null
}

/**
 * @name CancelEnterpriseAdminInvitationPayload
 * @type OBJECT
 */
type t_CancelEnterpriseAdminInvitationPayload = FieldsType<
  {
    __typename: t_String<'CancelEnterpriseAdminInvitationPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The invitation that was canceled.
     */
    invitation: t_EnterpriseAdministratorInvitation | null

    /**
     * A message confirming the result of canceling an administrator invitation.
     */
    message: t_String | null
  },
  Extension<'CancelEnterpriseAdminInvitationPayload'>
>

/**
 * @name CancelEnterpriseAdminInvitationInput
 * @type INPUT_OBJECT
 */
export type CancelEnterpriseAdminInvitationInput = {
  invitationId: string
  clientMutationId: string | null
}

/**
 * @name RemoveEnterpriseAdminPayload
 * @type OBJECT
 */
type t_RemoveEnterpriseAdminPayload = FieldsType<
  {
    __typename: t_String<'RemoveEnterpriseAdminPayload'>

    /**
     * The user who was removed as an administrator.
     */
    admin: t_User | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated enterprise.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of removing an administrator.
     */
    message: t_String | null

    /**
     * The viewer performing the mutation.
     */
    viewer: t_User | null
  },
  Extension<'RemoveEnterpriseAdminPayload'>
>

/**
 * @name RemoveEnterpriseAdminInput
 * @type INPUT_OBJECT
 */
export type RemoveEnterpriseAdminInput = {
  enterpriseId: string
  login: string
  clientMutationId: string | null
}

/**
 * @name RemoveEnterpriseOrganizationPayload
 * @type OBJECT
 */
type t_RemoveEnterpriseOrganizationPayload = FieldsType<
  {
    __typename: t_String<'RemoveEnterpriseOrganizationPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated enterprise.
     */
    enterprise: t_Enterprise | null

    /**
     * The organization that was removed from the enterprise.
     */
    organization: t_Organization | null

    /**
     * The viewer performing the mutation.
     */
    viewer: t_User | null
  },
  Extension<'RemoveEnterpriseOrganizationPayload'>
>

/**
 * @name RemoveEnterpriseOrganizationInput
 * @type INPUT_OBJECT
 */
export type RemoveEnterpriseOrganizationInput = {
  enterpriseId: string
  organizationId: string
  clientMutationId: string | null
}

/**
 * @name CreateEnterpriseOrganizationPayload
 * @type OBJECT
 */
type t_CreateEnterpriseOrganizationPayload = FieldsType<
  {
    __typename: t_String<'CreateEnterpriseOrganizationPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise that owns the created organization.
     */
    enterprise: t_Enterprise | null

    /**
     * The organization that was created.
     */
    organization: t_Organization | null
  },
  Extension<'CreateEnterpriseOrganizationPayload'>
>

/**
 * @name CreateEnterpriseOrganizationInput
 * @type INPUT_OBJECT
 */
export type CreateEnterpriseOrganizationInput = {
  enterpriseId: string
  login: string
  profileName: string
  billingEmail: string
  adminLogins: (string)[]
  clientMutationId: string | null
}

/**
 * @name RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
 * @type OBJECT
 */
type t_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = FieldsType<
  {
    __typename: t_String<
      'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The identity provider for the enterprise.
     */
    identityProvider: t_EnterpriseIdentityProvider | null
  },
  Extension<'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload'>
>

/**
 * @name RegenerateEnterpriseIdentityProviderRecoveryCodesInput
 * @type INPUT_OBJECT
 */
export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  enterpriseId: string
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can create repositories setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can create repositories setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanCreateRepositoriesSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseMembersCanCreateRepositoriesSettingValue | null
  membersCanCreateRepositoriesPolicyEnabled: boolean | null
  membersCanCreatePublicRepositories: boolean | null
  membersCanCreatePrivateRepositories: boolean | null
  membersCanCreateInternalRepositories: boolean | null
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated allow private repository forking setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the allow private repository forking setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload'>
>

/**
 * @name UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated default repository permission setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the default repository permission setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload'>
>

/**
 * @name UpdateEnterpriseDefaultRepositoryPermissionSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseTeamDiscussionsSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseTeamDiscussionsSettingPayload = FieldsType<
  {
    __typename: t_String<'UpdateEnterpriseTeamDiscussionsSettingPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated team discussions setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the team discussions setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseTeamDiscussionsSettingPayload'>
>

/**
 * @name UpdateEnterpriseTeamDiscussionsSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseOrganizationProjectsSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseOrganizationProjectsSettingPayload = FieldsType<
  {
    __typename: t_String<'UpdateEnterpriseOrganizationProjectsSettingPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated organization projects setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the organization projects setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseOrganizationProjectsSettingPayload'>
>

/**
 * @name UpdateEnterpriseOrganizationProjectsSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseRepositoryProjectsSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseRepositoryProjectsSettingPayload = FieldsType<
  {
    __typename: t_String<'UpdateEnterpriseRepositoryProjectsSettingPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated repository projects setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the repository projects setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseRepositoryProjectsSettingPayload'>
>

/**
 * @name UpdateEnterpriseRepositoryProjectsSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can change repository visibility setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can change repository visibility setting.
     */
    message: t_String | null
  },
  Extension<
    'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload'
  >
>

/**
 * @name UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can invite collaborators setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can invite collaborators setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can delete repositories setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can delete repositories setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanMakePurchasesSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanMakePurchasesSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanMakePurchasesSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can make purchases setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can make purchases setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanMakePurchasesSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanMakePurchasesSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated two factor authentication required setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the two factor authentication required setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload'>
>

/**
 * @name UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can update protected branches setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can update protected branches setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = FieldsType<
  {
    __typename: t_String<'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can delete issues setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can delete issues setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanDeleteIssuesSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated members can view dependency insights setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the members can view dependency insights setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload'>
>

/**
 * @name UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  enterpriseId: string
  settingValue: EnterpriseEnabledDisabledSettingValue
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseActionExecutionCapabilitySettingPayload
 * @type OBJECT
 */
type t_UpdateEnterpriseActionExecutionCapabilitySettingPayload = FieldsType<
  {
    __typename: t_String<
      'UpdateEnterpriseActionExecutionCapabilitySettingPayload'
    >

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The enterprise with the updated action execution capability setting.
     */
    enterprise: t_Enterprise | null

    /**
     * A message confirming the result of updating the action execution capability setting.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseActionExecutionCapabilitySettingPayload'>
>

/**
 * @name UpdateEnterpriseActionExecutionCapabilitySettingInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  enterpriseId: string
  capability: ActionExecutionCapabilitySetting
  clientMutationId: string | null
}

/**
 * @name UpdateEnterpriseAdministratorRolePayload
 * @type OBJECT
 */
type t_UpdateEnterpriseAdministratorRolePayload = FieldsType<
  {
    __typename: t_String<'UpdateEnterpriseAdministratorRolePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * A message confirming the result of changing the administrator's role.
     */
    message: t_String | null
  },
  Extension<'UpdateEnterpriseAdministratorRolePayload'>
>

/**
 * @name UpdateEnterpriseAdministratorRoleInput
 * @type INPUT_OBJECT
 */
export type UpdateEnterpriseAdministratorRoleInput = {
  enterpriseId: string
  login: string
  role: EnterpriseAdministratorRole
  clientMutationId: string | null
}

/**
 * @name RemoveOutsideCollaboratorPayload
 * @type OBJECT
 */
type t_RemoveOutsideCollaboratorPayload = FieldsType<
  {
    __typename: t_String<'RemoveOutsideCollaboratorPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The user that was removed as an outside collaborator.
     */
    removedUser: t_User | null
  },
  Extension<'RemoveOutsideCollaboratorPayload'>
>

/**
 * @name RemoveOutsideCollaboratorInput
 * @type INPUT_OBJECT
 */
export type RemoveOutsideCollaboratorInput = {
  userId: string
  organizationId: string
  clientMutationId: string | null
}

/**
 * @name RequestReviewsPayload
 * @type OBJECT
 */
type t_RequestReviewsPayload = FieldsType<
  {
    __typename: t_String<'RequestReviewsPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The pull request that is getting requests.
     */
    pullRequest: t_PullRequest | null

    /**
     * The edge from the pull request to the requested reviewers.
     */
    requestedReviewersEdge: t_UserEdge | null
  },
  Extension<'RequestReviewsPayload'>
>

/**
 * @name RequestReviewsInput
 * @type INPUT_OBJECT
 */
export type RequestReviewsInput = {
  pullRequestId: string
  userIds: (string)[] | null
  teamIds: (string)[] | null
  union: boolean | null
  clientMutationId: string | null
}

/**
 * @name RegistryPackageFileState
 * @type ENUM
 */
type t_RegistryPackageFileState = EnumType<'NEW' | 'UPLOADED'>

/**
 * @name DeletePackageVersionInput
 * @type INPUT_OBJECT
 */
export type DeletePackageVersionInput = {
  packageVersionId: string
  clientMutationId: string | null
}

/**
 * @name CloneTemplateRepositoryPayload
 * @type OBJECT
 */
type t_CloneTemplateRepositoryPayload = FieldsType<
  {
    __typename: t_String<'CloneTemplateRepositoryPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new repository.
     */
    repository: t_Repository | null
  },
  Extension<'CloneTemplateRepositoryPayload'>
>

/**
 * @name CloneTemplateRepositoryInput
 * @type INPUT_OBJECT
 */
export type CloneTemplateRepositoryInput = {
  repositoryId: string
  name: string
  ownerId: string
  description: string | null
  visibility: RepositoryVisibility
  clientMutationId: string | null
}

/**
 * @name CreateRepositoryPayload
 * @type OBJECT
 */
type t_CreateRepositoryPayload = FieldsType<
  {
    __typename: t_String<'CreateRepositoryPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new repository.
     */
    repository: t_Repository | null
  },
  Extension<'CreateRepositoryPayload'>
>

/**
 * @name CreateRepositoryInput
 * @type INPUT_OBJECT
 */
export type CreateRepositoryInput = {
  name: string
  ownerId: string | null
  description: string | null
  visibility: RepositoryVisibility
  template: boolean | null
  homepageUrl: string | null
  hasWikiEnabled: boolean | null
  hasIssuesEnabled: boolean | null
  teamId: string | null
  clientMutationId: string | null
}

/**
 * @name UpdateRepositoryPayload
 * @type OBJECT
 */
type t_UpdateRepositoryPayload = FieldsType<
  {
    __typename: t_String<'UpdateRepositoryPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated repository.
     */
    repository: t_Repository | null
  },
  Extension<'UpdateRepositoryPayload'>
>

/**
 * @name UpdateRepositoryInput
 * @type INPUT_OBJECT
 */
export type UpdateRepositoryInput = {
  repositoryId: string
  name: string | null
  description: string | null
  template: boolean | null
  homepageUrl: string | null
  hasWikiEnabled: boolean | null
  hasIssuesEnabled: boolean | null
  hasProjectsEnabled: boolean | null
  clientMutationId: string | null
}

/**
 * @name CreateRefPayload
 * @type OBJECT
 */
type t_CreateRefPayload = FieldsType<
  {
    __typename: t_String<'CreateRefPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The newly created ref.
     */
    ref: t_Ref | null
  },
  Extension<'CreateRefPayload'>
>

/**
 * @name CreateRefInput
 * @type INPUT_OBJECT
 */
export type CreateRefInput = {
  repositoryId: string
  name: string
  oid: any
  clientMutationId: string | null
}

/**
 * @name UpdateRefPayload
 * @type OBJECT
 */
type t_UpdateRefPayload = FieldsType<
  {
    __typename: t_String<'UpdateRefPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated Ref.
     */
    ref: t_Ref | null
  },
  Extension<'UpdateRefPayload'>
>

/**
 * @name UpdateRefInput
 * @type INPUT_OBJECT
 */
export type UpdateRefInput = {
  refId: string
  oid: any
  force: boolean | null
  clientMutationId: string | null
}

/**
 * @name DeleteRefPayload
 * @type OBJECT
 */
type t_DeleteRefPayload = FieldsType<
  {
    __typename: t_String<'DeleteRefPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'DeleteRefPayload'>
>

/**
 * @name DeleteRefInput
 * @type INPUT_OBJECT
 */
export type DeleteRefInput = { refId: string; clientMutationId: string | null }

/**
 * @name MergeBranchPayload
 * @type OBJECT
 */
type t_MergeBranchPayload = FieldsType<
  {
    __typename: t_String<'MergeBranchPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The resulting merge Commit.
     */
    mergeCommit: t_Commit | null
  },
  Extension<'MergeBranchPayload'>
>

/**
 * @name MergeBranchInput
 * @type INPUT_OBJECT
 */
export type MergeBranchInput = {
  repositoryId: string
  base: string
  head: string
  commitMessage: string | null
  clientMutationId: string | null
}

/**
 * @name AddStarPayload
 * @type OBJECT
 */
type t_AddStarPayload = FieldsType<
  {
    __typename: t_String<'AddStarPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The starrable.
     */
    starrable: t_Gist | t_Repository | t_Topic | null
  },
  Extension<'AddStarPayload'>
>

/**
 * @name AddStarInput
 * @type INPUT_OBJECT
 */
export type AddStarInput = {
  starrableId: string
  clientMutationId: string | null
}

/**
 * @name RemoveStarPayload
 * @type OBJECT
 */
type t_RemoveStarPayload = FieldsType<
  {
    __typename: t_String<'RemoveStarPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The starrable.
     */
    starrable: t_Gist | t_Repository | t_Topic | null
  },
  Extension<'RemoveStarPayload'>
>

/**
 * @name RemoveStarInput
 * @type INPUT_OBJECT
 */
export type RemoveStarInput = {
  starrableId: string
  clientMutationId: string | null
}

/**
 * @name AcceptTopicSuggestionPayload
 * @type OBJECT
 */
type t_AcceptTopicSuggestionPayload = FieldsType<
  {
    __typename: t_String<'AcceptTopicSuggestionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The accepted topic.
     */
    topic: t_Topic | null
  },
  Extension<'AcceptTopicSuggestionPayload'>
>

/**
 * @name AcceptTopicSuggestionInput
 * @type INPUT_OBJECT
 */
export type AcceptTopicSuggestionInput = {
  repositoryId: string
  name: string
  clientMutationId: string | null
}

/**
 * @name DeclineTopicSuggestionPayload
 * @type OBJECT
 */
type t_DeclineTopicSuggestionPayload = FieldsType<
  {
    __typename: t_String<'DeclineTopicSuggestionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The declined topic.
     */
    topic: t_Topic | null
  },
  Extension<'DeclineTopicSuggestionPayload'>
>

/**
 * @name DeclineTopicSuggestionInput
 * @type INPUT_OBJECT
 */
export type DeclineTopicSuggestionInput = {
  repositoryId: string
  name: string
  reason: TopicSuggestionDeclineReason
  clientMutationId: string | null
}

/**
 * @name TopicSuggestionDeclineReason
 * @type ENUM
 */
type t_TopicSuggestionDeclineReason = EnumType<
  'NOT_RELEVANT' | 'TOO_SPECIFIC' | 'PERSONAL_PREFERENCE' | 'TOO_GENERAL'
>

/**
 * @name UpdateTopicsPayload
 * @type OBJECT
 */
type t_UpdateTopicsPayload = FieldsType<
  {
    __typename: t_String<'UpdateTopicsPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * Names of the provided topics that are not valid.
     */
    invalidTopicNames: (t_String)[] | null

    /**
     * The updated repository.
     */
    repository: t_Repository | null
  },
  Extension<'UpdateTopicsPayload'>
>

/**
 * @name UpdateTopicsInput
 * @type INPUT_OBJECT
 */
export type UpdateTopicsInput = {
  repositoryId: string
  topicNames: (string)[]
  clientMutationId: string | null
}

/**
 * @name CreateTeamDiscussionPayload
 * @type OBJECT
 */
type t_CreateTeamDiscussionPayload = FieldsType<
  {
    __typename: t_String<'CreateTeamDiscussionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new discussion.
     */
    teamDiscussion: t_TeamDiscussion | null
  },
  Extension<'CreateTeamDiscussionPayload'>
>

/**
 * @name CreateTeamDiscussionInput
 * @type INPUT_OBJECT
 */
export type CreateTeamDiscussionInput = {
  teamId: string
  title: string
  body: string
  private: boolean | null
  clientMutationId: string | null
}

/**
 * @name UpdateTeamDiscussionPayload
 * @type OBJECT
 */
type t_UpdateTeamDiscussionPayload = FieldsType<
  {
    __typename: t_String<'UpdateTeamDiscussionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated discussion.
     */
    teamDiscussion: t_TeamDiscussion | null
  },
  Extension<'UpdateTeamDiscussionPayload'>
>

/**
 * @name UpdateTeamDiscussionInput
 * @type INPUT_OBJECT
 */
export type UpdateTeamDiscussionInput = {
  id: string
  title: string | null
  body: string | null
  bodyVersion: string | null
  pinned: boolean | null
  clientMutationId: string | null
}

/**
 * @name DeleteTeamDiscussionPayload
 * @type OBJECT
 */
type t_DeleteTeamDiscussionPayload = FieldsType<
  {
    __typename: t_String<'DeleteTeamDiscussionPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'DeleteTeamDiscussionPayload'>
>

/**
 * @name DeleteTeamDiscussionInput
 * @type INPUT_OBJECT
 */
export type DeleteTeamDiscussionInput = {
  id: string
  clientMutationId: string | null
}

/**
 * @name CreateTeamDiscussionCommentPayload
 * @type OBJECT
 */
type t_CreateTeamDiscussionCommentPayload = FieldsType<
  {
    __typename: t_String<'CreateTeamDiscussionCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The new comment.
     */
    teamDiscussionComment: t_TeamDiscussionComment | null
  },
  Extension<'CreateTeamDiscussionCommentPayload'>
>

/**
 * @name CreateTeamDiscussionCommentInput
 * @type INPUT_OBJECT
 */
export type CreateTeamDiscussionCommentInput = {
  discussionId: string
  body: string
  clientMutationId: string | null
}

/**
 * @name UpdateTeamDiscussionCommentPayload
 * @type OBJECT
 */
type t_UpdateTeamDiscussionCommentPayload = FieldsType<
  {
    __typename: t_String<'UpdateTeamDiscussionCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The updated comment.
     */
    teamDiscussionComment: t_TeamDiscussionComment | null
  },
  Extension<'UpdateTeamDiscussionCommentPayload'>
>

/**
 * @name UpdateTeamDiscussionCommentInput
 * @type INPUT_OBJECT
 */
export type UpdateTeamDiscussionCommentInput = {
  id: string
  body: string
  bodyVersion: string | null
  clientMutationId: string | null
}

/**
 * @name DeleteTeamDiscussionCommentPayload
 * @type OBJECT
 */
type t_DeleteTeamDiscussionCommentPayload = FieldsType<
  {
    __typename: t_String<'DeleteTeamDiscussionCommentPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'DeleteTeamDiscussionCommentPayload'>
>

/**
 * @name DeleteTeamDiscussionCommentInput
 * @type INPUT_OBJECT
 */
export type DeleteTeamDiscussionCommentInput = {
  id: string
  clientMutationId: string | null
}

/**
 * @name CreateBranchProtectionRulePayload
 * @type OBJECT
 */
type t_CreateBranchProtectionRulePayload = FieldsType<
  {
    __typename: t_String<'CreateBranchProtectionRulePayload'>

    /**
     * The newly created BranchProtectionRule.
     */
    branchProtectionRule: t_BranchProtectionRule | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'CreateBranchProtectionRulePayload'>
>

/**
 * @name CreateBranchProtectionRuleInput
 * @type INPUT_OBJECT
 */
export type CreateBranchProtectionRuleInput = {
  repositoryId: string
  pattern: string
  requiresApprovingReviews: boolean | null
  requiredApprovingReviewCount: number | null
  requiresCommitSignatures: boolean | null
  isAdminEnforced: boolean | null
  requiresStatusChecks: boolean | null
  requiresStrictStatusChecks: boolean | null
  requiresCodeOwnerReviews: boolean | null
  dismissesStaleReviews: boolean | null
  restrictsReviewDismissals: boolean | null
  reviewDismissalActorIds: (string)[] | null
  restrictsPushes: boolean | null
  pushActorIds: (string)[] | null
  requiredStatusCheckContexts: (string)[] | null
  clientMutationId: string | null
}

/**
 * @name UpdateBranchProtectionRulePayload
 * @type OBJECT
 */
type t_UpdateBranchProtectionRulePayload = FieldsType<
  {
    __typename: t_String<'UpdateBranchProtectionRulePayload'>

    /**
     * The newly created BranchProtectionRule.
     */
    branchProtectionRule: t_BranchProtectionRule | null

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'UpdateBranchProtectionRulePayload'>
>

/**
 * @name UpdateBranchProtectionRuleInput
 * @type INPUT_OBJECT
 */
export type UpdateBranchProtectionRuleInput = {
  branchProtectionRuleId: string
  pattern: string | null
  requiresApprovingReviews: boolean | null
  requiredApprovingReviewCount: number | null
  requiresCommitSignatures: boolean | null
  isAdminEnforced: boolean | null
  requiresStatusChecks: boolean | null
  requiresStrictStatusChecks: boolean | null
  requiresCodeOwnerReviews: boolean | null
  dismissesStaleReviews: boolean | null
  restrictsReviewDismissals: boolean | null
  reviewDismissalActorIds: (string)[] | null
  restrictsPushes: boolean | null
  pushActorIds: (string)[] | null
  requiredStatusCheckContexts: (string)[] | null
  clientMutationId: string | null
}

/**
 * @name DeleteBranchProtectionRulePayload
 * @type OBJECT
 */
type t_DeleteBranchProtectionRulePayload = FieldsType<
  {
    __typename: t_String<'DeleteBranchProtectionRulePayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null
  },
  Extension<'DeleteBranchProtectionRulePayload'>
>

/**
 * @name DeleteBranchProtectionRuleInput
 * @type INPUT_OBJECT
 */
export type DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: string
  clientMutationId: string | null
}

/**
 * @name ChangeUserStatusPayload
 * @type OBJECT
 */
type t_ChangeUserStatusPayload = FieldsType<
  {
    __typename: t_String<'ChangeUserStatusPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * Your updated status.
     */
    status: t_UserStatus | null
  },
  Extension<'ChangeUserStatusPayload'>
>

/**
 * @name ChangeUserStatusInput
 * @type INPUT_OBJECT
 */
export type ChangeUserStatusInput = {
  emoji: string | null
  message: string | null
  organizationId: string | null
  limitedAvailability: boolean | null
  expiresAt: any | null
  clientMutationId: string | null
}

/**
 * @name FollowUserPayload
 * @type OBJECT
 */
type t_FollowUserPayload = FieldsType<
  {
    __typename: t_String<'FollowUserPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The user that was followed.
     */
    user: t_User | null
  },
  Extension<'FollowUserPayload'>
>

/**
 * @name FollowUserInput
 * @type INPUT_OBJECT
 */
export type FollowUserInput = {
  userId: string
  clientMutationId: string | null
}

/**
 * @name UnfollowUserPayload
 * @type OBJECT
 */
type t_UnfollowUserPayload = FieldsType<
  {
    __typename: t_String<'UnfollowUserPayload'>

    /**
     * A unique identifier for the client performing the mutation.
     */
    clientMutationId: t_String | null

    /**
     * The user that was unfollowed.
     */
    user: t_User | null
  },
  Extension<'UnfollowUserPayload'>
>

/**
 * @name UnfollowUserInput
 * @type INPUT_OBJECT
 */
export type UnfollowUserInput = {
  userId: string
  clientMutationId: string | null
}

/**
 * @name ContentAttachment
 * @type OBJECT
 */
type t_ContentAttachment = FieldsType<
  {
    __typename: t_String<'ContentAttachment'>

    /**
     * The body text of the content attachment. This parameter supports markdown.
     */
    body: t_String

    /**
     * The content reference that the content attachment is attached to.
     */
    contentReference: t_ContentReference

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int
    id: t_ID

    /**
     * The title of the content attachment.
     */
    title: t_String
  },
  Extension<'ContentAttachment'>
>

/**
 * @name ContentReference
 * @type OBJECT
 */
type t_ContentReference = FieldsType<
  {
    __typename: t_String<'ContentReference'>

    /**
     * Identifies the primary key from the database.
     */
    databaseId: t_Int
    id: t_ID

    /**
     * The reference of the content reference.
     */
    reference: t_String
  },
  Extension<'ContentReference'>
>

/**
 * @name CreateContentAttachmentInput
 * @type INPUT_OBJECT
 */
export type CreateContentAttachmentInput = {
  contentReferenceId: string
  title: string
  body: string
  clientMutationId: string | null
}

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<'__Schema'>

    /**
     * A list of all directives supported by this server.
     */
    directives: (t___Directive)[]

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: t___Type | null

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: t___Type | null

    /**
     * A list of all types supported by this server.
     */
    types: (t___Type)[]
  },
  Extension<'__Schema'>
>

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<'__Type'>
    description: t_String | null
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      (t___EnumValue)[] | null
    >
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      (t___Field)[] | null
    >
    inputFields: (t___InputValue)[] | null
    interfaces: (t___Type)[] | null
    kind: t___TypeKind
    name: t_String | null
    ofType: t___Type | null
    possibleTypes: (t___Type)[] | null
  },
  Extension<'__Type'>
>

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<'__Field'>
    args: (t___InputValue)[]
    deprecationReason: t_String | null
    description: t_String | null
    isDeprecated: t_Boolean
    name: t_String
    type: t___Type
  },
  Extension<'__Field'>
>

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<'__Directive'>
    args: (t___InputValue)[]
    description: t_String | null
    locations: (t___DirectiveLocation)[]
    name: t_String

    /**
     * @deprecated Use `locations`.
     */
    onField: t_Boolean

    /**
     * @deprecated Use `locations`.
     */
    onFragment: t_Boolean

    /**
     * @deprecated Use `locations`.
     */
    onOperation: t_Boolean
  },
  Extension<'__Directive'>
>

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<'__EnumValue'>
    deprecationReason: t_String | null
    description: t_String | null
    isDeprecated: t_Boolean
    name: t_String
  },
  Extension<'__EnumValue'>
>

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<'__InputValue'>

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: t_String | null
    description: t_String | null
    name: t_String
    type: t___Type
  },
  Extension<'__InputValue'>
>

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | 'SCALAR'
  | 'OBJECT'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'LIST'
  | 'NON_NULL'
>

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | 'QUERY'
  | 'MUTATION'
  | 'SUBSCRIPTION'
  | 'FIELD'
  | 'FRAGMENT_DEFINITION'
  | 'FRAGMENT_SPREAD'
  | 'INLINE_FRAGMENT'
  | 'SCHEMA'
  | 'SCALAR'
  | 'OBJECT'
  | 'FIELD_DEFINITION'
  | 'ARGUMENT_DEFINITION'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'ENUM_VALUE'
  | 'INPUT_OBJECT'
  | 'INPUT_FIELD_DEFINITION'
>

/**
 * @name GpgSignature
 * @type OBJECT
 * @implements GitSignature
 */
type t_GpgSignature = FieldsType<
  {
    __typename: t_String<'GpgSignature'>

    /**
     * Email used to sign this object.
     */
    email: t_String

    /**
     * True if the signature is valid and verified by GitHub.
     */
    isValid: t_Boolean

    /**
     * Hex-encoded ID of the key that signed this object.
     */
    keyId: t_String | null

    /**
     * Payload for GPG signing object. Raw ODB object without the signature header.
     */
    payload: t_String

    /**
     * ASCII-armored signature header from object.
     */
    signature: t_String

    /**
     * GitHub user corresponding to the email signing this commit.
     */
    signer: t_User | null

    /**
     * The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.
     */
    state: t_GitSignatureState

    /**
     * True if the signature was made with GitHub's signing key.
     */
    wasSignedByGitHub: t_Boolean
  },
  Extension<'GpgSignature'>
>

/**
 * @name SmimeSignature
 * @type OBJECT
 * @implements GitSignature
 */
type t_SmimeSignature = FieldsType<
  {
    __typename: t_String<'SmimeSignature'>

    /**
     * Email used to sign this object.
     */
    email: t_String

    /**
     * True if the signature is valid and verified by GitHub.
     */
    isValid: t_Boolean

    /**
     * Payload for GPG signing object. Raw ODB object without the signature header.
     */
    payload: t_String

    /**
     * ASCII-armored signature header from object.
     */
    signature: t_String

    /**
     * GitHub user corresponding to the email signing this commit.
     */
    signer: t_User | null

    /**
     * The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.
     */
    state: t_GitSignatureState

    /**
     * True if the signature was made with GitHub's signing key.
     */
    wasSignedByGitHub: t_Boolean
  },
  Extension<'SmimeSignature'>
>

/**
 * @name Tag
 * @type OBJECT
 * @implements Node, GitObject
 */
type t_Tag = FieldsType<
  {
    __typename: t_String<'Tag'>

    /**
     * An abbreviated version of the Git object ID
     */
    abbreviatedOid: t_String

    /**
     * The HTTP path for this Git object
     */
    commitResourcePath: t_URI

    /**
     * The HTTP URL for this Git object
     */
    commitUrl: t_URI
    id: t_ID

    /**
     * The Git tag message.
     */
    message: t_String | null

    /**
     * The Git tag name.
     */
    name: t_String

    /**
     * The Git object ID
     */
    oid: t_GitObjectID

    /**
     * The Repository the Git object belongs to
     */
    repository: t_Repository

    /**
     * Details about the tag author.
     */
    tagger: t_GitActor | null

    /**
     * The Git object the tag points to.
     */
    target: t_Blob | t_Commit | t_Tag | t_Tree
  },
  Extension<'Tag'>
>

/**
 * @name UnknownSignature
 * @type OBJECT
 * @implements GitSignature
 */
type t_UnknownSignature = FieldsType<
  {
    __typename: t_String<'UnknownSignature'>

    /**
     * Email used to sign this object.
     */
    email: t_String

    /**
     * True if the signature is valid and verified by GitHub.
     */
    isValid: t_Boolean

    /**
     * Payload for GPG signing object. Raw ODB object without the signature header.
     */
    payload: t_String

    /**
     * ASCII-armored signature header from object.
     */
    signature: t_String

    /**
     * GitHub user corresponding to the email signing this commit.
     */
    signer: t_User | null

    /**
     * The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid.
     */
    state: t_GitSignatureState

    /**
     * True if the signature was made with GitHub's signing key.
     */
    wasSignedByGitHub: t_Boolean
  },
  Extension<'UnknownSignature'>
>

/**
 * @name GenericHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
type t_GenericHovercardContext = FieldsType<
  {
    __typename: t_String<'GenericHovercardContext'>

    /**
     * A string describing this context
     */
    message: t_String

    /**
     * An octicon to accompany this context
     */
    octicon: t_String
  },
  Extension<'GenericHovercardContext'>
>

/**
 * @name OrganizationsHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
type t_OrganizationsHovercardContext = FieldsType<
  {
    __typename: t_String<'OrganizationsHovercardContext'>

    /**
     * A string describing this context
     */
    message: t_String

    /**
     * An octicon to accompany this context
     */
    octicon: t_String

    /**
     * Organizations this user is a member of that are relevant
     */
    relevantOrganizations: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_OrganizationConnection
    >

    /**
     * The total number of organizations this user is in
     */
    totalOrganizationCount: t_Int
  },
  Extension<'OrganizationsHovercardContext'>
>

/**
 * @name OrganizationTeamsHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
type t_OrganizationTeamsHovercardContext = FieldsType<
  {
    __typename: t_String<'OrganizationTeamsHovercardContext'>

    /**
     * A string describing this context
     */
    message: t_String

    /**
     * An octicon to accompany this context
     */
    octicon: t_String

    /**
     * Teams in this organization the user is a member of that are relevant
     */
    relevantTeams: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        first?: number | null
        last?: number | null
      },
      t_TeamConnection
    >

    /**
     * The path for the full team list for this user
     */
    teamsResourcePath: t_URI

    /**
     * The URL for the full team list for this user
     */
    teamsUrl: t_URI

    /**
     * The total number of teams the user is on in the organization
     */
    totalTeamCount: t_Int
  },
  Extension<'OrganizationTeamsHovercardContext'>
>

/**
 * @name ViewerHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
type t_ViewerHovercardContext = FieldsType<
  {
    __typename: t_String<'ViewerHovercardContext'>

    /**
     * A string describing this context
     */
    message: t_String

    /**
     * An octicon to accompany this context
     */
    octicon: t_String

    /**
     * Identifies the user who is related to this context.
     */
    viewer: t_User
  },
  Extension<'ViewerHovercardContext'>
>

/**
 * @name ReviewStatusHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
type t_ReviewStatusHovercardContext = FieldsType<
  {
    __typename: t_String<'ReviewStatusHovercardContext'>

    /**
     * A string describing this context
     */
    message: t_String

    /**
     * An octicon to accompany this context
     */
    octicon: t_String
  },
  Extension<'ReviewStatusHovercardContext'>
>

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>

/**
 * @name Node
 * @type INTERFACE
 */
export type Node = TypeData<t_Node>

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>

/**
 * @name UniformResourceLocatable
 * @type INTERFACE
 */
export type UniformResourceLocatable = TypeData<t_UniformResourceLocatable>

/**
 * @name URI
 * @type SCALAR
 */
export type URI = TypeData<t_URI>

/**
 * @name User
 * @type OBJECT
 * @implements Node, Actor, RegistryPackageOwner, RegistryPackageSearch, ProjectOwner, RepositoryOwner, UniformResourceLocatable, ProfileOwner, Sponsorable
 */
export type User = TypeData<t_User>

/**
 * @name Actor
 * @type INTERFACE
 */
export type Actor = TypeData<t_Actor>

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>

/**
 * @name PageInfo
 * @type OBJECT
 */
export type PageInfo = TypeData<t_PageInfo>

/**
 * @name DateTime
 * @type SCALAR
 */
export type DateTime = TypeData<t_DateTime>

/**
 * @name RegistryPackageOwner
 * @type INTERFACE
 */
export type RegistryPackageOwner = TypeData<t_RegistryPackageOwner>

/**
 * @name RegistryPackageConnection
 * @type OBJECT
 */
export type RegistryPackageConnection = TypeData<t_RegistryPackageConnection>

/**
 * @name RegistryPackageEdge
 * @type OBJECT
 */
export type RegistryPackageEdge = TypeData<t_RegistryPackageEdge>

/**
 * @name RegistryPackage
 * @type OBJECT
 * @implements Node
 */
export type RegistryPackage = TypeData<t_RegistryPackage>

/**
 * @name RegistryPackageType
 * @type ENUM
 */
export type RegistryPackageType = TypeData<t_RegistryPackageType>

/**
 * @name Repository
 * @type OBJECT
 * @implements Node, ProjectOwner, RegistryPackageOwner, RegistryPackageSearch, Subscribable, Starrable, UniformResourceLocatable, RepositoryInfo
 */
export type Repository = TypeData<t_Repository>

/**
 * @name ProjectOwner
 * @type INTERFACE
 */
export type ProjectOwner = TypeData<t_ProjectOwner>

/**
 * @name Project
 * @type OBJECT
 * @implements Node, Closable, Updatable
 */
export type Project = TypeData<t_Project>

/**
 * @name Closable
 * @type INTERFACE
 */
export type Closable = TypeData<t_Closable>

/**
 * @name Updatable
 * @type INTERFACE
 */
export type Updatable = TypeData<t_Updatable>

/**
 * @name ProjectState
 * @type ENUM
 */
export type ProjectState = TypeData<t_ProjectState>

/**
 * @name HTML
 * @type SCALAR
 */
export type HTML = TypeData<t_HTML>

/**
 * @name ProjectColumnConnection
 * @type OBJECT
 */
export type ProjectColumnConnection = TypeData<t_ProjectColumnConnection>

/**
 * @name ProjectColumnEdge
 * @type OBJECT
 */
export type ProjectColumnEdge = TypeData<t_ProjectColumnEdge>

/**
 * @name ProjectColumn
 * @type OBJECT
 * @implements Node
 */
export type ProjectColumn = TypeData<t_ProjectColumn>

/**
 * @name ProjectColumnPurpose
 * @type ENUM
 */
export type ProjectColumnPurpose = TypeData<t_ProjectColumnPurpose>

/**
 * @name ProjectCardConnection
 * @type OBJECT
 */
export type ProjectCardConnection = TypeData<t_ProjectCardConnection>

/**
 * @name ProjectCardEdge
 * @type OBJECT
 */
export type ProjectCardEdge = TypeData<t_ProjectCardEdge>

/**
 * @name ProjectCard
 * @type OBJECT
 * @implements Node
 */
export type ProjectCard = TypeData<t_ProjectCard>

/**
 * @name ProjectCardState
 * @type ENUM
 */
export type ProjectCardState = TypeData<t_ProjectCardState>

/**
 * @name ProjectCardItem
 * @type UNION
 */
export type ProjectCardItem = TypeData<t_ProjectCardItem>

/**
 * @name Issue
 * @type OBJECT
 * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
 */
export type Issue = TypeData<t_Issue>

/**
 * @name Assignable
 * @type INTERFACE
 */
export type Assignable = TypeData<t_Assignable>

/**
 * @name UserConnection
 * @type OBJECT
 */
export type UserConnection = TypeData<t_UserConnection>

/**
 * @name UserEdge
 * @type OBJECT
 */
export type UserEdge = TypeData<t_UserEdge>

/**
 * @name Comment
 * @type INTERFACE
 */
export type Comment = TypeData<t_Comment>

/**
 * @name UserContentEditConnection
 * @type OBJECT
 */
export type UserContentEditConnection = TypeData<t_UserContentEditConnection>

/**
 * @name UserContentEditEdge
 * @type OBJECT
 */
export type UserContentEditEdge = TypeData<t_UserContentEditEdge>

/**
 * @name UserContentEdit
 * @type OBJECT
 * @implements Node
 */
export type UserContentEdit = TypeData<t_UserContentEdit>

/**
 * @name CommentAuthorAssociation
 * @type ENUM
 */
export type CommentAuthorAssociation = TypeData<t_CommentAuthorAssociation>

/**
 * @name UpdatableComment
 * @type INTERFACE
 */
export type UpdatableComment = TypeData<t_UpdatableComment>

/**
 * @name CommentCannotUpdateReason
 * @type ENUM
 */
export type CommentCannotUpdateReason = TypeData<t_CommentCannotUpdateReason>

/**
 * @name Labelable
 * @type INTERFACE
 */
export type Labelable = TypeData<t_Labelable>

/**
 * @name LabelConnection
 * @type OBJECT
 */
export type LabelConnection = TypeData<t_LabelConnection>

/**
 * @name LabelEdge
 * @type OBJECT
 */
export type LabelEdge = TypeData<t_LabelEdge>

/**
 * @name Label
 * @type OBJECT
 * @implements Node
 */
export type Label = TypeData<t_Label>

/**
 * @name IssueConnection
 * @type OBJECT
 */
export type IssueConnection = TypeData<t_IssueConnection>

/**
 * @name IssueEdge
 * @type OBJECT
 */
export type IssueEdge = TypeData<t_IssueEdge>

/**
 * @name IssueOrderField
 * @type ENUM
 */
export type IssueOrderField = TypeData<t_IssueOrderField>

/**
 * @name OrderDirection
 * @type ENUM
 */
export type OrderDirection = TypeData<t_OrderDirection>

/**
 * @name IssueState
 * @type ENUM
 */
export type IssueState = TypeData<t_IssueState>

/**
 * @name PullRequestConnection
 * @type OBJECT
 */
export type PullRequestConnection = TypeData<t_PullRequestConnection>

/**
 * @name PullRequestEdge
 * @type OBJECT
 */
export type PullRequestEdge = TypeData<t_PullRequestEdge>

/**
 * @name PullRequest
 * @type OBJECT
 * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
 */
export type PullRequest = TypeData<t_PullRequest>

/**
 * @name Lockable
 * @type INTERFACE
 */
export type Lockable = TypeData<t_Lockable>

/**
 * @name LockReason
 * @type ENUM
 */
export type LockReason = TypeData<t_LockReason>

/**
 * @name App
 * @type OBJECT
 * @implements Node
 */
export type App = TypeData<t_App>

/**
 * @name MarketplaceListing
 * @type OBJECT
 * @implements Node
 */
export type MarketplaceListing = TypeData<t_MarketplaceListing>

/**
 * @name SponsorsTier
 * @type OBJECT
 * @implements Node
 */
export type SponsorsTier = TypeData<t_SponsorsTier>

/**
 * @name SponsorsListing
 * @type OBJECT
 * @implements Node
 */
export type SponsorsListing = TypeData<t_SponsorsListing>

/**
 * @name Sponsorable
 * @type INTERFACE
 */
export type Sponsorable = TypeData<t_Sponsorable>

/**
 * @name SponsorsTierConnection
 * @type OBJECT
 */
export type SponsorsTierConnection = TypeData<t_SponsorsTierConnection>

/**
 * @name SponsorsTierEdge
 * @type OBJECT
 */
export type SponsorsTierEdge = TypeData<t_SponsorsTierEdge>

/**
 * @name Sponsorship
 * @type OBJECT
 * @implements Node
 */
export type Sponsorship = TypeData<t_Sponsorship>

/**
 * @name SponsorshipPrivacy
 * @type ENUM
 */
export type SponsorshipPrivacy = TypeData<t_SponsorshipPrivacy>

/**
 * @name SponsorshipConnection
 * @type OBJECT
 */
export type SponsorshipConnection = TypeData<t_SponsorshipConnection>

/**
 * @name SponsorshipEdge
 * @type OBJECT
 */
export type SponsorshipEdge = TypeData<t_SponsorshipEdge>

/**
 * @name SponsorshipOrderField
 * @type ENUM
 */
export type SponsorshipOrderField = TypeData<t_SponsorshipOrderField>

/**
 * @name Organization
 * @type OBJECT
 * @implements Node, Actor, RegistryPackageOwner, RegistryPackageSearch, ProjectOwner, RepositoryOwner, UniformResourceLocatable, MemberStatusable, ProfileOwner, Sponsorable
 */
export type Organization = TypeData<t_Organization>

/**
 * @name RegistryPackageSearch
 * @type INTERFACE
 */
export type RegistryPackageSearch = TypeData<t_RegistryPackageSearch>

/**
 * @name Release
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type Release = TypeData<t_Release>

/**
 * @name Ref
 * @type OBJECT
 * @implements Node
 */
export type Ref = TypeData<t_Ref>

/**
 * @name GitObject
 * @type INTERFACE
 */
export type GitObject = TypeData<t_GitObject>

/**
 * @name GitObjectID
 * @type SCALAR
 */
export type GitObjectID = TypeData<t_GitObjectID>

/**
 * @name RepositoryNode
 * @type INTERFACE
 */
export type RepositoryNode = TypeData<t_RepositoryNode>

/**
 * @name Blob
 * @type OBJECT
 * @implements Node, GitObject
 */
export type Blob = TypeData<t_Blob>

/**
 * @name Commit
 * @type OBJECT
 * @implements Node, GitObject, Subscribable, UniformResourceLocatable
 */
export type Commit = TypeData<t_Commit>

/**
 * @name Subscribable
 * @type INTERFACE
 */
export type Subscribable = TypeData<t_Subscribable>

/**
 * @name SubscriptionState
 * @type ENUM
 */
export type SubscriptionState = TypeData<t_SubscriptionState>

/**
 * @name Tree
 * @type OBJECT
 * @implements Node, GitObject
 */
export type Tree = TypeData<t_Tree>

/**
 * @name TreeEntry
 * @type OBJECT
 */
export type TreeEntry = TypeData<t_TreeEntry>

/**
 * @name GitActor
 * @type OBJECT
 */
export type GitActor = TypeData<t_GitActor>

/**
 * @name GitTimestamp
 * @type SCALAR
 */
export type GitTimestamp = TypeData<t_GitTimestamp>

/**
 * @name CommitConnection
 * @type OBJECT
 */
export type CommitConnection = TypeData<t_CommitConnection>

/**
 * @name CommitEdge
 * @type OBJECT
 */
export type CommitEdge = TypeData<t_CommitEdge>

/**
 * @name CommitHistoryConnection
 * @type OBJECT
 */
export type CommitHistoryConnection = TypeData<t_CommitHistoryConnection>

/**
 * @name CommitCommentConnection
 * @type OBJECT
 */
export type CommitCommentConnection = TypeData<t_CommitCommentConnection>

/**
 * @name CommitCommentEdge
 * @type OBJECT
 */
export type CommitCommentEdge = TypeData<t_CommitCommentEdge>

/**
 * @name CommitComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type CommitComment = TypeData<t_CommitComment>

/**
 * @name Deletable
 * @type INTERFACE
 */
export type Deletable = TypeData<t_Deletable>

/**
 * @name Reactable
 * @type INTERFACE
 */
export type Reactable = TypeData<t_Reactable>

/**
 * @name ReactionGroup
 * @type OBJECT
 */
export type ReactionGroup = TypeData<t_ReactionGroup>

/**
 * @name ReactionContent
 * @type ENUM
 */
export type ReactionContent = TypeData<t_ReactionContent>

/**
 * @name ReactingUserConnection
 * @type OBJECT
 */
export type ReactingUserConnection = TypeData<t_ReactingUserConnection>

/**
 * @name ReactingUserEdge
 * @type OBJECT
 */
export type ReactingUserEdge = TypeData<t_ReactingUserEdge>

/**
 * @name ReactionConnection
 * @type OBJECT
 */
export type ReactionConnection = TypeData<t_ReactionConnection>

/**
 * @name ReactionEdge
 * @type OBJECT
 */
export type ReactionEdge = TypeData<t_ReactionEdge>

/**
 * @name Reaction
 * @type OBJECT
 * @implements Node
 */
export type Reaction = TypeData<t_Reaction>

/**
 * @name ReactionOrderField
 * @type ENUM
 */
export type ReactionOrderField = TypeData<t_ReactionOrderField>

/**
 * @name RepositoryInfo
 * @type INTERFACE
 */
export type RepositoryInfo = TypeData<t_RepositoryInfo>

/**
 * @name RepositoryVisibility
 * @type ENUM
 */
export type RepositoryVisibility = TypeData<t_RepositoryVisibility>

/**
 * @name RepositoryLockReason
 * @type ENUM
 */
export type RepositoryLockReason = TypeData<t_RepositoryLockReason>

/**
 * @name License
 * @type OBJECT
 * @implements Node
 */
export type License = TypeData<t_License>

/**
 * @name LicenseRule
 * @type OBJECT
 */
export type LicenseRule = TypeData<t_LicenseRule>

/**
 * @name RepositoryOwner
 * @type INTERFACE
 */
export type RepositoryOwner = TypeData<t_RepositoryOwner>

/**
 * @name RepositoryConnection
 * @type OBJECT
 */
export type RepositoryConnection = TypeData<t_RepositoryConnection>

/**
 * @name RepositoryEdge
 * @type OBJECT
 */
export type RepositoryEdge = TypeData<t_RepositoryEdge>

/**
 * @name RepositoryPrivacy
 * @type ENUM
 */
export type RepositoryPrivacy = TypeData<t_RepositoryPrivacy>

/**
 * @name RepositoryOrderField
 * @type ENUM
 */
export type RepositoryOrderField = TypeData<t_RepositoryOrderField>

/**
 * @name RepositoryAffiliation
 * @type ENUM
 */
export type RepositoryAffiliation = TypeData<t_RepositoryAffiliation>

/**
 * @name RepositoryTopicConnection
 * @type OBJECT
 */
export type RepositoryTopicConnection = TypeData<t_RepositoryTopicConnection>

/**
 * @name RepositoryTopicEdge
 * @type OBJECT
 */
export type RepositoryTopicEdge = TypeData<t_RepositoryTopicEdge>

/**
 * @name RepositoryTopic
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type RepositoryTopic = TypeData<t_RepositoryTopic>

/**
 * @name Topic
 * @type OBJECT
 * @implements Node, Starrable
 */
export type Topic = TypeData<t_Topic>

/**
 * @name Starrable
 * @type INTERFACE
 */
export type Starrable = TypeData<t_Starrable>

/**
 * @name StargazerConnection
 * @type OBJECT
 */
export type StargazerConnection = TypeData<t_StargazerConnection>

/**
 * @name StargazerEdge
 * @type OBJECT
 */
export type StargazerEdge = TypeData<t_StargazerEdge>

/**
 * @name StarOrderField
 * @type ENUM
 */
export type StarOrderField = TypeData<t_StarOrderField>

/**
 * @name GitSignature
 * @type INTERFACE
 */
export type GitSignature = TypeData<t_GitSignature>

/**
 * @name GitSignatureState
 * @type ENUM
 */
export type GitSignatureState = TypeData<t_GitSignatureState>

/**
 * @name Status
 * @type OBJECT
 * @implements Node
 */
export type Status = TypeData<t_Status>

/**
 * @name StatusState
 * @type ENUM
 */
export type StatusState = TypeData<t_StatusState>

/**
 * @name StatusContext
 * @type OBJECT
 * @implements Node
 */
export type StatusContext = TypeData<t_StatusContext>

/**
 * @name Bot
 * @type OBJECT
 * @implements Node, Actor, UniformResourceLocatable
 */
export type Bot = TypeData<t_Bot>

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>

/**
 * @name PullRequestState
 * @type ENUM
 */
export type PullRequestState = TypeData<t_PullRequestState>

/**
 * @name Blame
 * @type OBJECT
 */
export type Blame = TypeData<t_Blame>

/**
 * @name BlameRange
 * @type OBJECT
 */
export type BlameRange = TypeData<t_BlameRange>

/**
 * @name DeploymentConnection
 * @type OBJECT
 */
export type DeploymentConnection = TypeData<t_DeploymentConnection>

/**
 * @name DeploymentEdge
 * @type OBJECT
 */
export type DeploymentEdge = TypeData<t_DeploymentEdge>

/**
 * @name Deployment
 * @type OBJECT
 * @implements Node
 */
export type Deployment = TypeData<t_Deployment>

/**
 * @name DeploymentStatusConnection
 * @type OBJECT
 */
export type DeploymentStatusConnection = TypeData<t_DeploymentStatusConnection>

/**
 * @name DeploymentStatusEdge
 * @type OBJECT
 */
export type DeploymentStatusEdge = TypeData<t_DeploymentStatusEdge>

/**
 * @name DeploymentStatus
 * @type OBJECT
 * @implements Node
 */
export type DeploymentStatus = TypeData<t_DeploymentStatus>

/**
 * @name DeploymentStatusState
 * @type ENUM
 */
export type DeploymentStatusState = TypeData<t_DeploymentStatusState>

/**
 * @name DeploymentState
 * @type ENUM
 */
export type DeploymentState = TypeData<t_DeploymentState>

/**
 * @name DeploymentOrderField
 * @type ENUM
 */
export type DeploymentOrderField = TypeData<t_DeploymentOrderField>

/**
 * @name PullRequestOrderField
 * @type ENUM
 */
export type PullRequestOrderField = TypeData<t_PullRequestOrderField>

/**
 * @name ReleaseAssetConnection
 * @type OBJECT
 */
export type ReleaseAssetConnection = TypeData<t_ReleaseAssetConnection>

/**
 * @name ReleaseAssetEdge
 * @type OBJECT
 */
export type ReleaseAssetEdge = TypeData<t_ReleaseAssetEdge>

/**
 * @name ReleaseAsset
 * @type OBJECT
 * @implements Node
 */
export type ReleaseAsset = TypeData<t_ReleaseAsset>

/**
 * @name RegistryPackageVersionConnection
 * @type OBJECT
 */
export type RegistryPackageVersionConnection = TypeData<
  t_RegistryPackageVersionConnection
>

/**
 * @name RegistryPackageVersionEdge
 * @type OBJECT
 */
export type RegistryPackageVersionEdge = TypeData<t_RegistryPackageVersionEdge>

/**
 * @name RegistryPackageVersion
 * @type OBJECT
 * @implements Node
 */
export type RegistryPackageVersion = TypeData<t_RegistryPackageVersion>

/**
 * @name RegistryPackageVersionStatistics
 * @type OBJECT
 */
export type RegistryPackageVersionStatistics = TypeData<
  t_RegistryPackageVersionStatistics
>

/**
 * @name RegistryPackageDependencyConnection
 * @type OBJECT
 */
export type RegistryPackageDependencyConnection = TypeData<
  t_RegistryPackageDependencyConnection
>

/**
 * @name RegistryPackageDependencyEdge
 * @type OBJECT
 */
export type RegistryPackageDependencyEdge = TypeData<
  t_RegistryPackageDependencyEdge
>

/**
 * @name RegistryPackageDependency
 * @type OBJECT
 * @implements Node
 */
export type RegistryPackageDependency = TypeData<t_RegistryPackageDependency>

/**
 * @name RegistryPackageDependencyType
 * @type ENUM
 */
export type RegistryPackageDependencyType = TypeData<
  t_RegistryPackageDependencyType
>

/**
 * @name RegistryPackageFileConnection
 * @type OBJECT
 */
export type RegistryPackageFileConnection = TypeData<
  t_RegistryPackageFileConnection
>

/**
 * @name RegistryPackageFileEdge
 * @type OBJECT
 */
export type RegistryPackageFileEdge = TypeData<t_RegistryPackageFileEdge>

/**
 * @name RegistryPackageFile
 * @type OBJECT
 * @implements Node
 */
export type RegistryPackageFile = TypeData<t_RegistryPackageFile>

/**
 * @name MarketplaceCategory
 * @type OBJECT
 * @implements Node
 */
export type MarketplaceCategory = TypeData<t_MarketplaceCategory>

/**
 * @name MarketplaceListingConnection
 * @type OBJECT
 */
export type MarketplaceListingConnection = TypeData<
  t_MarketplaceListingConnection
>

/**
 * @name MarketplaceListingEdge
 * @type OBJECT
 */
export type MarketplaceListingEdge = TypeData<t_MarketplaceListingEdge>

/**
 * @name ReleaseConnection
 * @type OBJECT
 */
export type ReleaseConnection = TypeData<t_ReleaseConnection>

/**
 * @name ReleaseEdge
 * @type OBJECT
 */
export type ReleaseEdge = TypeData<t_ReleaseEdge>

/**
 * @name ReleaseOrderField
 * @type ENUM
 */
export type ReleaseOrderField = TypeData<t_ReleaseOrderField>

/**
 * @name TopicConnection
 * @type OBJECT
 */
export type TopicConnection = TypeData<t_TopicConnection>

/**
 * @name TopicEdge
 * @type OBJECT
 */
export type TopicEdge = TypeData<t_TopicEdge>

/**
 * @name MemberStatusable
 * @type INTERFACE
 */
export type MemberStatusable = TypeData<t_MemberStatusable>

/**
 * @name UserStatusConnection
 * @type OBJECT
 */
export type UserStatusConnection = TypeData<t_UserStatusConnection>

/**
 * @name UserStatusEdge
 * @type OBJECT
 */
export type UserStatusEdge = TypeData<t_UserStatusEdge>

/**
 * @name UserStatus
 * @type OBJECT
 * @implements Node
 */
export type UserStatus = TypeData<t_UserStatus>

/**
 * @name UserStatusOrderField
 * @type ENUM
 */
export type UserStatusOrderField = TypeData<t_UserStatusOrderField>

/**
 * @name ProfileOwner
 * @type INTERFACE
 */
export type ProfileOwner = TypeData<t_ProfileOwner>

/**
 * @name ProfileItemShowcase
 * @type OBJECT
 */
export type ProfileItemShowcase = TypeData<t_ProfileItemShowcase>

/**
 * @name PinnableItemConnection
 * @type OBJECT
 */
export type PinnableItemConnection = TypeData<t_PinnableItemConnection>

/**
 * @name PinnableItemEdge
 * @type OBJECT
 */
export type PinnableItemEdge = TypeData<t_PinnableItemEdge>

/**
 * @name PinnableItem
 * @type UNION
 */
export type PinnableItem = TypeData<t_PinnableItem>

/**
 * @name Gist
 * @type OBJECT
 * @implements Node, Starrable, UniformResourceLocatable
 */
export type Gist = TypeData<t_Gist>

/**
 * @name GistCommentConnection
 * @type OBJECT
 */
export type GistCommentConnection = TypeData<t_GistCommentConnection>

/**
 * @name GistCommentEdge
 * @type OBJECT
 */
export type GistCommentEdge = TypeData<t_GistCommentEdge>

/**
 * @name GistComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment
 */
export type GistComment = TypeData<t_GistComment>

/**
 * @name GistConnection
 * @type OBJECT
 */
export type GistConnection = TypeData<t_GistConnection>

/**
 * @name GistEdge
 * @type OBJECT
 */
export type GistEdge = TypeData<t_GistEdge>

/**
 * @name GistOrderField
 * @type ENUM
 */
export type GistOrderField = TypeData<t_GistOrderField>

/**
 * @name GistFile
 * @type OBJECT
 */
export type GistFile = TypeData<t_GistFile>

/**
 * @name Language
 * @type OBJECT
 * @implements Node
 */
export type Language = TypeData<t_Language>

/**
 * @name PinnableItemType
 * @type ENUM
 */
export type PinnableItemType = TypeData<t_PinnableItemType>

/**
 * @name ProjectConnection
 * @type OBJECT
 */
export type ProjectConnection = TypeData<t_ProjectConnection>

/**
 * @name ProjectEdge
 * @type OBJECT
 */
export type ProjectEdge = TypeData<t_ProjectEdge>

/**
 * @name ProjectOrderField
 * @type ENUM
 */
export type ProjectOrderField = TypeData<t_ProjectOrderField>

/**
 * @name OrganizationAuditEntryConnection
 * @type OBJECT
 */
export type OrganizationAuditEntryConnection = TypeData<
  t_OrganizationAuditEntryConnection
>

/**
 * @name OrganizationAuditEntryEdge
 * @type OBJECT
 */
export type OrganizationAuditEntryEdge = TypeData<t_OrganizationAuditEntryEdge>

/**
 * @name OrganizationAuditEntry
 * @type UNION
 */
export type OrganizationAuditEntry = TypeData<t_OrganizationAuditEntry>

/**
 * @name AuditEntry
 * @type INTERFACE
 */
export type AuditEntry = TypeData<t_AuditEntry>

/**
 * @name OperationType
 * @type ENUM
 */
export type OperationType = TypeData<t_OperationType>

/**
 * @name AuditEntryActor
 * @type UNION
 */
export type AuditEntryActor = TypeData<t_AuditEntryActor>

/**
 * @name ActorLocation
 * @type OBJECT
 */
export type ActorLocation = TypeData<t_ActorLocation>

/**
 * @name PreciseDateTime
 * @type SCALAR
 */
export type PreciseDateTime = TypeData<t_PreciseDateTime>

/**
 * @name OrganizationAuditEntryData
 * @type INTERFACE
 */
export type OrganizationAuditEntryData = TypeData<t_OrganizationAuditEntryData>

/**
 * @name IssueComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type IssueComment = TypeData<t_IssueComment>

/**
 * @name IssuePubSubTopic
 * @type ENUM
 */
export type IssuePubSubTopic = TypeData<t_IssuePubSubTopic>

/**
 * @name MembersCanDeleteReposClearAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type MembersCanDeleteReposClearAuditEntry = TypeData<
  t_MembersCanDeleteReposClearAuditEntry
>

/**
 * @name EnterpriseAuditEntryData
 * @type INTERFACE
 */
export type EnterpriseAuditEntryData = TypeData<t_EnterpriseAuditEntryData>

/**
 * @name Enterprise
 * @type OBJECT
 * @implements Node
 */
export type Enterprise = TypeData<t_Enterprise>

/**
 * @name EnterpriseMemberConnection
 * @type OBJECT
 */
export type EnterpriseMemberConnection = TypeData<t_EnterpriseMemberConnection>

/**
 * @name EnterpriseMemberEdge
 * @type OBJECT
 */
export type EnterpriseMemberEdge = TypeData<t_EnterpriseMemberEdge>

/**
 * @name EnterpriseMember
 * @type UNION
 */
export type EnterpriseMember = TypeData<t_EnterpriseMember>

/**
 * @name EnterpriseUserAccount
 * @type OBJECT
 * @implements Node, Actor
 */
export type EnterpriseUserAccount = TypeData<t_EnterpriseUserAccount>

/**
 * @name EnterpriseOrganizationMembershipConnection
 * @type OBJECT
 */
export type EnterpriseOrganizationMembershipConnection = TypeData<
  t_EnterpriseOrganizationMembershipConnection
>

/**
 * @name EnterpriseOrganizationMembershipEdge
 * @type OBJECT
 */
export type EnterpriseOrganizationMembershipEdge = TypeData<
  t_EnterpriseOrganizationMembershipEdge
>

/**
 * @name EnterpriseUserAccountMembershipRole
 * @type ENUM
 */
export type EnterpriseUserAccountMembershipRole = TypeData<
  t_EnterpriseUserAccountMembershipRole
>

/**
 * @name OrganizationOrderField
 * @type ENUM
 */
export type OrganizationOrderField = TypeData<t_OrganizationOrderField>

/**
 * @name EnterpriseServerInstallation
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseServerInstallation = TypeData<
  t_EnterpriseServerInstallation
>

/**
 * @name EnterpriseServerUserAccountConnection
 * @type OBJECT
 */
export type EnterpriseServerUserAccountConnection = TypeData<
  t_EnterpriseServerUserAccountConnection
>

/**
 * @name EnterpriseServerUserAccountEdge
 * @type OBJECT
 */
export type EnterpriseServerUserAccountEdge = TypeData<
  t_EnterpriseServerUserAccountEdge
>

/**
 * @name EnterpriseServerUserAccount
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseServerUserAccount = TypeData<
  t_EnterpriseServerUserAccount
>

/**
 * @name EnterpriseServerUserAccountEmailConnection
 * @type OBJECT
 */
export type EnterpriseServerUserAccountEmailConnection = TypeData<
  t_EnterpriseServerUserAccountEmailConnection
>

/**
 * @name EnterpriseServerUserAccountEmailEdge
 * @type OBJECT
 */
export type EnterpriseServerUserAccountEmailEdge = TypeData<
  t_EnterpriseServerUserAccountEmailEdge
>

/**
 * @name EnterpriseServerUserAccountEmail
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseServerUserAccountEmail = TypeData<
  t_EnterpriseServerUserAccountEmail
>

/**
 * @name EnterpriseServerUserAccountEmailOrderField
 * @type ENUM
 */
export type EnterpriseServerUserAccountEmailOrderField = TypeData<
  t_EnterpriseServerUserAccountEmailOrderField
>

/**
 * @name EnterpriseServerUserAccountOrderField
 * @type ENUM
 */
export type EnterpriseServerUserAccountOrderField = TypeData<
  t_EnterpriseServerUserAccountOrderField
>

/**
 * @name EnterpriseServerUserAccountsUploadConnection
 * @type OBJECT
 */
export type EnterpriseServerUserAccountsUploadConnection = TypeData<
  t_EnterpriseServerUserAccountsUploadConnection
>

/**
 * @name EnterpriseServerUserAccountsUploadEdge
 * @type OBJECT
 */
export type EnterpriseServerUserAccountsUploadEdge = TypeData<
  t_EnterpriseServerUserAccountsUploadEdge
>

/**
 * @name EnterpriseServerUserAccountsUpload
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseServerUserAccountsUpload = TypeData<
  t_EnterpriseServerUserAccountsUpload
>

/**
 * @name EnterpriseServerUserAccountsUploadSyncState
 * @type ENUM
 */
export type EnterpriseServerUserAccountsUploadSyncState = TypeData<
  t_EnterpriseServerUserAccountsUploadSyncState
>

/**
 * @name EnterpriseServerUserAccountsUploadOrderField
 * @type ENUM
 */
export type EnterpriseServerUserAccountsUploadOrderField = TypeData<
  t_EnterpriseServerUserAccountsUploadOrderField
>

/**
 * @name EnterpriseServerInstallationOrderField
 * @type ENUM
 */
export type EnterpriseServerInstallationOrderField = TypeData<
  t_EnterpriseServerInstallationOrderField
>

/**
 * @name EnterpriseMemberOrderField
 * @type ENUM
 */
export type EnterpriseMemberOrderField = TypeData<t_EnterpriseMemberOrderField>

/**
 * @name EnterpriseUserDeployment
 * @type ENUM
 */
export type EnterpriseUserDeployment = TypeData<t_EnterpriseUserDeployment>

/**
 * @name OrganizationConnection
 * @type OBJECT
 */
export type OrganizationConnection = TypeData<t_OrganizationConnection>

/**
 * @name OrganizationEdge
 * @type OBJECT
 */
export type OrganizationEdge = TypeData<t_OrganizationEdge>

/**
 * @name EnterpriseOwnerInfo
 * @type OBJECT
 */
export type EnterpriseOwnerInfo = TypeData<t_EnterpriseOwnerInfo>

/**
 * @name EnterpriseAdministratorConnection
 * @type OBJECT
 */
export type EnterpriseAdministratorConnection = TypeData<
  t_EnterpriseAdministratorConnection
>

/**
 * @name EnterpriseAdministratorEdge
 * @type OBJECT
 */
export type EnterpriseAdministratorEdge = TypeData<
  t_EnterpriseAdministratorEdge
>

/**
 * @name EnterpriseAdministratorRole
 * @type ENUM
 */
export type EnterpriseAdministratorRole = TypeData<
  t_EnterpriseAdministratorRole
>

/**
 * @name EnterpriseAdministratorInvitationConnection
 * @type OBJECT
 */
export type EnterpriseAdministratorInvitationConnection = TypeData<
  t_EnterpriseAdministratorInvitationConnection
>

/**
 * @name EnterpriseAdministratorInvitationEdge
 * @type OBJECT
 */
export type EnterpriseAdministratorInvitationEdge = TypeData<
  t_EnterpriseAdministratorInvitationEdge
>

/**
 * @name EnterpriseAdministratorInvitation
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseAdministratorInvitation = TypeData<
  t_EnterpriseAdministratorInvitation
>

/**
 * @name EnterpriseAdministratorInvitationOrderField
 * @type ENUM
 */
export type EnterpriseAdministratorInvitationOrderField = TypeData<
  t_EnterpriseAdministratorInvitationOrderField
>

/**
 * @name EnterprisePendingMemberInvitationConnection
 * @type OBJECT
 */
export type EnterprisePendingMemberInvitationConnection = TypeData<
  t_EnterprisePendingMemberInvitationConnection
>

/**
 * @name EnterprisePendingMemberInvitationEdge
 * @type OBJECT
 */
export type EnterprisePendingMemberInvitationEdge = TypeData<
  t_EnterprisePendingMemberInvitationEdge
>

/**
 * @name OrganizationInvitation
 * @type OBJECT
 * @implements Node
 */
export type OrganizationInvitation = TypeData<t_OrganizationInvitation>

/**
 * @name OrganizationInvitationType
 * @type ENUM
 */
export type OrganizationInvitationType = TypeData<t_OrganizationInvitationType>

/**
 * @name OrganizationInvitationRole
 * @type ENUM
 */
export type OrganizationInvitationRole = TypeData<t_OrganizationInvitationRole>

/**
 * @name TeamConnection
 * @type OBJECT
 */
export type TeamConnection = TypeData<t_TeamConnection>

/**
 * @name TeamEdge
 * @type OBJECT
 */
export type TeamEdge = TypeData<t_TeamEdge>

/**
 * @name Team
 * @type OBJECT
 * @implements Node, Subscribable, MemberStatusable
 */
export type Team = TypeData<t_Team>

/**
 * @name TeamPrivacy
 * @type ENUM
 */
export type TeamPrivacy = TypeData<t_TeamPrivacy>

/**
 * @name TeamMemberConnection
 * @type OBJECT
 */
export type TeamMemberConnection = TypeData<t_TeamMemberConnection>

/**
 * @name TeamMemberEdge
 * @type OBJECT
 */
export type TeamMemberEdge = TypeData<t_TeamMemberEdge>

/**
 * @name TeamMemberRole
 * @type ENUM
 */
export type TeamMemberRole = TypeData<t_TeamMemberRole>

/**
 * @name TeamMembershipType
 * @type ENUM
 */
export type TeamMembershipType = TypeData<t_TeamMembershipType>

/**
 * @name TeamMemberOrderField
 * @type ENUM
 */
export type TeamMemberOrderField = TypeData<t_TeamMemberOrderField>

/**
 * @name TeamRepositoryConnection
 * @type OBJECT
 */
export type TeamRepositoryConnection = TypeData<t_TeamRepositoryConnection>

/**
 * @name TeamRepositoryEdge
 * @type OBJECT
 */
export type TeamRepositoryEdge = TypeData<t_TeamRepositoryEdge>

/**
 * @name RepositoryPermission
 * @type ENUM
 */
export type RepositoryPermission = TypeData<t_RepositoryPermission>

/**
 * @name TeamRepositoryOrderField
 * @type ENUM
 */
export type TeamRepositoryOrderField = TypeData<t_TeamRepositoryOrderField>

/**
 * @name OrganizationInvitationConnection
 * @type OBJECT
 */
export type OrganizationInvitationConnection = TypeData<
  t_OrganizationInvitationConnection
>

/**
 * @name OrganizationInvitationEdge
 * @type OBJECT
 */
export type OrganizationInvitationEdge = TypeData<t_OrganizationInvitationEdge>

/**
 * @name TeamOrderField
 * @type ENUM
 */
export type TeamOrderField = TypeData<t_TeamOrderField>

/**
 * @name TeamDiscussionConnection
 * @type OBJECT
 */
export type TeamDiscussionConnection = TypeData<t_TeamDiscussionConnection>

/**
 * @name TeamDiscussionEdge
 * @type OBJECT
 */
export type TeamDiscussionEdge = TypeData<t_TeamDiscussionEdge>

/**
 * @name TeamDiscussion
 * @type OBJECT
 * @implements Node, Comment, Deletable, Reactable, Subscribable, UniformResourceLocatable, Updatable, UpdatableComment
 */
export type TeamDiscussion = TypeData<t_TeamDiscussion>

/**
 * @name TeamDiscussionCommentConnection
 * @type OBJECT
 */
export type TeamDiscussionCommentConnection = TypeData<
  t_TeamDiscussionCommentConnection
>

/**
 * @name TeamDiscussionCommentEdge
 * @type OBJECT
 */
export type TeamDiscussionCommentEdge = TypeData<t_TeamDiscussionCommentEdge>

/**
 * @name TeamDiscussionComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Reactable, UniformResourceLocatable, Updatable, UpdatableComment
 */
export type TeamDiscussionComment = TypeData<t_TeamDiscussionComment>

/**
 * @name TeamDiscussionCommentOrderField
 * @type ENUM
 */
export type TeamDiscussionCommentOrderField = TypeData<
  t_TeamDiscussionCommentOrderField
>

/**
 * @name TeamDiscussionOrderField
 * @type ENUM
 */
export type TeamDiscussionOrderField = TypeData<t_TeamDiscussionOrderField>

/**
 * @name EnterpriseOutsideCollaboratorConnection
 * @type OBJECT
 */
export type EnterpriseOutsideCollaboratorConnection = TypeData<
  t_EnterpriseOutsideCollaboratorConnection
>

/**
 * @name EnterpriseOutsideCollaboratorEdge
 * @type OBJECT
 */
export type EnterpriseOutsideCollaboratorEdge = TypeData<
  t_EnterpriseOutsideCollaboratorEdge
>

/**
 * @name EnterpriseRepositoryInfoConnection
 * @type OBJECT
 */
export type EnterpriseRepositoryInfoConnection = TypeData<
  t_EnterpriseRepositoryInfoConnection
>

/**
 * @name EnterpriseRepositoryInfoEdge
 * @type OBJECT
 */
export type EnterpriseRepositoryInfoEdge = TypeData<
  t_EnterpriseRepositoryInfoEdge
>

/**
 * @name EnterpriseRepositoryInfo
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseRepositoryInfo = TypeData<t_EnterpriseRepositoryInfo>

/**
 * @name EnterprisePendingCollaboratorConnection
 * @type OBJECT
 */
export type EnterprisePendingCollaboratorConnection = TypeData<
  t_EnterprisePendingCollaboratorConnection
>

/**
 * @name EnterprisePendingCollaboratorEdge
 * @type OBJECT
 */
export type EnterprisePendingCollaboratorEdge = TypeData<
  t_EnterprisePendingCollaboratorEdge
>

/**
 * @name RepositoryInvitationOrderField
 * @type ENUM
 */
export type RepositoryInvitationOrderField = TypeData<
  t_RepositoryInvitationOrderField
>

/**
 * @name EnterpriseDefaultRepositoryPermissionSettingValue
 * @type ENUM
 */
export type EnterpriseDefaultRepositoryPermissionSettingValue = TypeData<
  t_EnterpriseDefaultRepositoryPermissionSettingValue
>

/**
 * @name DefaultRepositoryPermissionField
 * @type ENUM
 */
export type DefaultRepositoryPermissionField = TypeData<
  t_DefaultRepositoryPermissionField
>

/**
 * @name EnterpriseEnabledDisabledSettingValue
 * @type ENUM
 */
export type EnterpriseEnabledDisabledSettingValue = TypeData<
  t_EnterpriseEnabledDisabledSettingValue
>

/**
 * @name EnterpriseMembersCanCreateRepositoriesSettingValue
 * @type ENUM
 */
export type EnterpriseMembersCanCreateRepositoriesSettingValue = TypeData<
  t_EnterpriseMembersCanCreateRepositoriesSettingValue
>

/**
 * @name OrganizationMembersCanCreateRepositoriesSettingValue
 * @type ENUM
 */
export type OrganizationMembersCanCreateRepositoriesSettingValue = TypeData<
  t_OrganizationMembersCanCreateRepositoriesSettingValue
>

/**
 * @name EnterpriseMembersCanMakePurchasesSettingValue
 * @type ENUM
 */
export type EnterpriseMembersCanMakePurchasesSettingValue = TypeData<
  t_EnterpriseMembersCanMakePurchasesSettingValue
>

/**
 * @name ActionExecutionCapabilitySetting
 * @type ENUM
 */
export type ActionExecutionCapabilitySetting = TypeData<
  t_ActionExecutionCapabilitySetting
>

/**
 * @name EnterpriseEnabledSettingValue
 * @type ENUM
 */
export type EnterpriseEnabledSettingValue = TypeData<
  t_EnterpriseEnabledSettingValue
>

/**
 * @name EnterpriseIdentityProvider
 * @type OBJECT
 * @implements Node
 */
export type EnterpriseIdentityProvider = TypeData<t_EnterpriseIdentityProvider>

/**
 * @name ExternalIdentityConnection
 * @type OBJECT
 */
export type ExternalIdentityConnection = TypeData<t_ExternalIdentityConnection>

/**
 * @name ExternalIdentityEdge
 * @type OBJECT
 */
export type ExternalIdentityEdge = TypeData<t_ExternalIdentityEdge>

/**
 * @name ExternalIdentity
 * @type OBJECT
 * @implements Node
 */
export type ExternalIdentity = TypeData<t_ExternalIdentity>

/**
 * @name ExternalIdentitySamlAttributes
 * @type OBJECT
 */
export type ExternalIdentitySamlAttributes = TypeData<
  t_ExternalIdentitySamlAttributes
>

/**
 * @name ExternalIdentityScimAttributes
 * @type OBJECT
 */
export type ExternalIdentityScimAttributes = TypeData<
  t_ExternalIdentityScimAttributes
>

/**
 * @name PublicKey
 * @type OBJECT
 * @implements Node
 */
export type PublicKey = TypeData<t_PublicKey>

/**
 * @name X509Certificate
 * @type SCALAR
 */
export type X509Certificate = TypeData<t_X509Certificate>

/**
 * @name SamlSignatureAlgorithm
 * @type ENUM
 */
export type SamlSignatureAlgorithm = TypeData<t_SamlSignatureAlgorithm>

/**
 * @name SamlDigestAlgorithm
 * @type ENUM
 */
export type SamlDigestAlgorithm = TypeData<t_SamlDigestAlgorithm>

/**
 * @name IdentityProviderConfigurationState
 * @type ENUM
 */
export type IdentityProviderConfigurationState = TypeData<
  t_IdentityProviderConfigurationState
>

/**
 * @name EnterpriseServerInstallationConnection
 * @type OBJECT
 */
export type EnterpriseServerInstallationConnection = TypeData<
  t_EnterpriseServerInstallationConnection
>

/**
 * @name EnterpriseServerInstallationEdge
 * @type OBJECT
 */
export type EnterpriseServerInstallationEdge = TypeData<
  t_EnterpriseServerInstallationEdge
>

/**
 * @name EnterpriseBillingInfo
 * @type OBJECT
 */
export type EnterpriseBillingInfo = TypeData<t_EnterpriseBillingInfo>

/**
 * @name Date
 * @type SCALAR
 */
export type Date = TypeData<t_Date>

/**
 * @name EnterpriseUserAccountConnection
 * @type OBJECT
 */
export type EnterpriseUserAccountConnection = TypeData<
  t_EnterpriseUserAccountConnection
>

/**
 * @name EnterpriseUserAccountEdge
 * @type OBJECT
 */
export type EnterpriseUserAccountEdge = TypeData<t_EnterpriseUserAccountEdge>

/**
 * @name MembersCanDeleteReposDisableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type MembersCanDeleteReposDisableAuditEntry = TypeData<
  t_MembersCanDeleteReposDisableAuditEntry
>

/**
 * @name MembersCanDeleteReposEnableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type MembersCanDeleteReposEnableAuditEntry = TypeData<
  t_MembersCanDeleteReposEnableAuditEntry
>

/**
 * @name OauthApplicationCreateAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OauthApplicationCreateAuditEntry = TypeData<
  t_OauthApplicationCreateAuditEntry
>

/**
 * @name OauthApplicationAuditEntryData
 * @type INTERFACE
 */
export type OauthApplicationAuditEntryData = TypeData<
  t_OauthApplicationAuditEntryData
>

/**
 * @name OauthApplicationCreateAuditEntryState
 * @type ENUM
 */
export type OauthApplicationCreateAuditEntryState = TypeData<
  t_OauthApplicationCreateAuditEntryState
>

/**
 * @name OauthApplicationRevokeTokensAuditEntryState
 * @type ENUM
 */
export type OauthApplicationRevokeTokensAuditEntryState = TypeData<
  t_OauthApplicationRevokeTokensAuditEntryState
>

/**
 * @name OrgAddBillingManagerAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgAddBillingManagerAuditEntry = TypeData<
  t_OrgAddBillingManagerAuditEntry
>

/**
 * @name OrgAddMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgAddMemberAuditEntry = TypeData<t_OrgAddMemberAuditEntry>

/**
 * @name OrgAddMemberAuditEntryPermission
 * @type ENUM
 */
export type OrgAddMemberAuditEntryPermission = TypeData<
  t_OrgAddMemberAuditEntryPermission
>

/**
 * @name OrgBlockUserAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgBlockUserAuditEntry = TypeData<t_OrgBlockUserAuditEntry>

/**
 * @name OrgConfigDisableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgConfigDisableCollaboratorsOnlyAuditEntry = TypeData<
  t_OrgConfigDisableCollaboratorsOnlyAuditEntry
>

/**
 * @name OrgConfigEnableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgConfigEnableCollaboratorsOnlyAuditEntry = TypeData<
  t_OrgConfigEnableCollaboratorsOnlyAuditEntry
>

/**
 * @name OrgCreateAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgCreateAuditEntry = TypeData<t_OrgCreateAuditEntry>

/**
 * @name OrgCreateAuditEntryBillingPlan
 * @type ENUM
 */
export type OrgCreateAuditEntryBillingPlan = TypeData<
  t_OrgCreateAuditEntryBillingPlan
>

/**
 * @name OrgDisableOauthAppRestrictionsAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgDisableOauthAppRestrictionsAuditEntry = TypeData<
  t_OrgDisableOauthAppRestrictionsAuditEntry
>

/**
 * @name OrgDisableSamlAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgDisableSamlAuditEntry = TypeData<t_OrgDisableSamlAuditEntry>

/**
 * @name OrgDisableTwoFactorRequirementAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgDisableTwoFactorRequirementAuditEntry = TypeData<
  t_OrgDisableTwoFactorRequirementAuditEntry
>

/**
 * @name OrgEnableOauthAppRestrictionsAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgEnableOauthAppRestrictionsAuditEntry = TypeData<
  t_OrgEnableOauthAppRestrictionsAuditEntry
>

/**
 * @name OrgEnableSamlAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgEnableSamlAuditEntry = TypeData<t_OrgEnableSamlAuditEntry>

/**
 * @name OrgEnableTwoFactorRequirementAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgEnableTwoFactorRequirementAuditEntry = TypeData<
  t_OrgEnableTwoFactorRequirementAuditEntry
>

/**
 * @name OrgInviteMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgInviteMemberAuditEntry = TypeData<t_OrgInviteMemberAuditEntry>

/**
 * @name OrgInviteToBusinessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type OrgInviteToBusinessAuditEntry = TypeData<
  t_OrgInviteToBusinessAuditEntry
>

/**
 * @name OrgOauthAppAccessApprovedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OrgOauthAppAccessApprovedAuditEntry = TypeData<
  t_OrgOauthAppAccessApprovedAuditEntry
>

/**
 * @name OrgOauthAppAccessDeniedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OrgOauthAppAccessDeniedAuditEntry = TypeData<
  t_OrgOauthAppAccessDeniedAuditEntry
>

/**
 * @name OrgOauthAppAccessRequestedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OrgOauthAppAccessRequestedAuditEntry = TypeData<
  t_OrgOauthAppAccessRequestedAuditEntry
>

/**
 * @name OrgRemoveBillingManagerAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRemoveBillingManagerAuditEntry = TypeData<
  t_OrgRemoveBillingManagerAuditEntry
>

/**
 * @name OrgRemoveBillingManagerAuditEntryReason
 * @type ENUM
 */
export type OrgRemoveBillingManagerAuditEntryReason = TypeData<
  t_OrgRemoveBillingManagerAuditEntryReason
>

/**
 * @name OrgRemoveMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRemoveMemberAuditEntry = TypeData<t_OrgRemoveMemberAuditEntry>

/**
 * @name OrgRemoveMemberAuditEntryReason
 * @type ENUM
 */
export type OrgRemoveMemberAuditEntryReason = TypeData<
  t_OrgRemoveMemberAuditEntryReason
>

/**
 * @name OrgRemoveMemberAuditEntryMembershipType
 * @type ENUM
 */
export type OrgRemoveMemberAuditEntryMembershipType = TypeData<
  t_OrgRemoveMemberAuditEntryMembershipType
>

/**
 * @name OrgRemoveOutsideCollaboratorAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRemoveOutsideCollaboratorAuditEntry = TypeData<
  t_OrgRemoveOutsideCollaboratorAuditEntry
>

/**
 * @name OrgRemoveOutsideCollaboratorAuditEntryReason
 * @type ENUM
 */
export type OrgRemoveOutsideCollaboratorAuditEntryReason = TypeData<
  t_OrgRemoveOutsideCollaboratorAuditEntryReason
>

/**
 * @name OrgRemoveOutsideCollaboratorAuditEntryMembershipType
 * @type ENUM
 */
export type OrgRemoveOutsideCollaboratorAuditEntryMembershipType = TypeData<
  t_OrgRemoveOutsideCollaboratorAuditEntryMembershipType
>

/**
 * @name OrgRestoreMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRestoreMemberAuditEntry = TypeData<t_OrgRestoreMemberAuditEntry>

/**
 * @name OrgRestoreMemberAuditEntryMembership
 * @type UNION
 */
export type OrgRestoreMemberAuditEntryMembership = TypeData<
  t_OrgRestoreMemberAuditEntryMembership
>

/**
 * @name OrgRestoreMemberMembershipOrganizationAuditEntryData
 * @type OBJECT
 * @implements OrganizationAuditEntryData
 */
export type OrgRestoreMemberMembershipOrganizationAuditEntryData = TypeData<
  t_OrgRestoreMemberMembershipOrganizationAuditEntryData
>

/**
 * @name OrgRestoreMemberMembershipRepositoryAuditEntryData
 * @type OBJECT
 * @implements RepositoryAuditEntryData
 */
export type OrgRestoreMemberMembershipRepositoryAuditEntryData = TypeData<
  t_OrgRestoreMemberMembershipRepositoryAuditEntryData
>

/**
 * @name RepositoryAuditEntryData
 * @type INTERFACE
 */
export type RepositoryAuditEntryData = TypeData<t_RepositoryAuditEntryData>

/**
 * @name OrgRestoreMemberMembershipTeamAuditEntryData
 * @type OBJECT
 * @implements TeamAuditEntryData
 */
export type OrgRestoreMemberMembershipTeamAuditEntryData = TypeData<
  t_OrgRestoreMemberMembershipTeamAuditEntryData
>

/**
 * @name TeamAuditEntryData
 * @type INTERFACE
 */
export type TeamAuditEntryData = TypeData<t_TeamAuditEntryData>

/**
 * @name OrgUnblockUserAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUnblockUserAuditEntry = TypeData<t_OrgUnblockUserAuditEntry>

/**
 * @name OrgUpdateDefaultRepositoryPermissionAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateDefaultRepositoryPermissionAuditEntry = TypeData<
  t_OrgUpdateDefaultRepositoryPermissionAuditEntry
>

/**
 * @name OrgUpdateDefaultRepositoryPermissionAuditEntryPermission
 * @type ENUM
 */
export type OrgUpdateDefaultRepositoryPermissionAuditEntryPermission = TypeData<
  t_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission
>

/**
 * @name OrgUpdateMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateMemberAuditEntry = TypeData<t_OrgUpdateMemberAuditEntry>

/**
 * @name OrgUpdateMemberAuditEntryPermission
 * @type ENUM
 */
export type OrgUpdateMemberAuditEntryPermission = TypeData<
  t_OrgUpdateMemberAuditEntryPermission
>

/**
 * @name OrgUpdateMemberRepositoryCreationPermissionAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = TypeData<
  t_OrgUpdateMemberRepositoryCreationPermissionAuditEntry
>

/**
 * @name OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility
 * @type ENUM
 */
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = TypeData<
  t_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility
>

/**
 * @name OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = TypeData<
  t_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
>

/**
 * @name PrivateRepositoryForkingDisableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type PrivateRepositoryForkingDisableAuditEntry = TypeData<
  t_PrivateRepositoryForkingDisableAuditEntry
>

/**
 * @name PrivateRepositoryForkingEnableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type PrivateRepositoryForkingEnableAuditEntry = TypeData<
  t_PrivateRepositoryForkingEnableAuditEntry
>

/**
 * @name RepoAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoAccessAuditEntry = TypeData<t_RepoAccessAuditEntry>

/**
 * @name RepoAccessAuditEntryVisibility
 * @type ENUM
 */
export type RepoAccessAuditEntryVisibility = TypeData<
  t_RepoAccessAuditEntryVisibility
>

/**
 * @name RepoAddMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoAddMemberAuditEntry = TypeData<t_RepoAddMemberAuditEntry>

/**
 * @name RepoAddMemberAuditEntryVisibility
 * @type ENUM
 */
export type RepoAddMemberAuditEntryVisibility = TypeData<
  t_RepoAddMemberAuditEntryVisibility
>

/**
 * @name RepoAddTopicAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
 */
export type RepoAddTopicAuditEntry = TypeData<t_RepoAddTopicAuditEntry>

/**
 * @name TopicAuditEntryData
 * @type INTERFACE
 */
export type TopicAuditEntryData = TypeData<t_TopicAuditEntryData>

/**
 * @name RepoArchivedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoArchivedAuditEntry = TypeData<t_RepoArchivedAuditEntry>

/**
 * @name RepoArchivedAuditEntryVisibility
 * @type ENUM
 */
export type RepoArchivedAuditEntryVisibility = TypeData<
  t_RepoArchivedAuditEntryVisibility
>

/**
 * @name RepoChangeMergeSettingAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoChangeMergeSettingAuditEntry = TypeData<
  t_RepoChangeMergeSettingAuditEntry
>

/**
 * @name RepoChangeMergeSettingAuditEntryMergeType
 * @type ENUM
 */
export type RepoChangeMergeSettingAuditEntryMergeType = TypeData<
  t_RepoChangeMergeSettingAuditEntryMergeType
>

/**
 * @name RepoConfigDisableAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableAnonymousGitAccessAuditEntry = TypeData<
  t_RepoConfigDisableAnonymousGitAccessAuditEntry
>

/**
 * @name RepoConfigDisableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableCollaboratorsOnlyAuditEntry = TypeData<
  t_RepoConfigDisableCollaboratorsOnlyAuditEntry
>

/**
 * @name RepoConfigDisableContributorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableContributorsOnlyAuditEntry = TypeData<
  t_RepoConfigDisableContributorsOnlyAuditEntry
>

/**
 * @name RepoConfigDisableSockpuppetDisallowedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableSockpuppetDisallowedAuditEntry = TypeData<
  t_RepoConfigDisableSockpuppetDisallowedAuditEntry
>

/**
 * @name RepoConfigEnableAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableAnonymousGitAccessAuditEntry = TypeData<
  t_RepoConfigEnableAnonymousGitAccessAuditEntry
>

/**
 * @name RepoConfigEnableCollaboratorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableCollaboratorsOnlyAuditEntry = TypeData<
  t_RepoConfigEnableCollaboratorsOnlyAuditEntry
>

/**
 * @name RepoConfigEnableContributorsOnlyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableContributorsOnlyAuditEntry = TypeData<
  t_RepoConfigEnableContributorsOnlyAuditEntry
>

/**
 * @name RepoConfigEnableSockpuppetDisallowedAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableSockpuppetDisallowedAuditEntry = TypeData<
  t_RepoConfigEnableSockpuppetDisallowedAuditEntry
>

/**
 * @name RepoConfigLockAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigLockAnonymousGitAccessAuditEntry = TypeData<
  t_RepoConfigLockAnonymousGitAccessAuditEntry
>

/**
 * @name RepoConfigUnlockAnonymousGitAccessAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigUnlockAnonymousGitAccessAuditEntry = TypeData<
  t_RepoConfigUnlockAnonymousGitAccessAuditEntry
>

/**
 * @name RepoCreateAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoCreateAuditEntry = TypeData<t_RepoCreateAuditEntry>

/**
 * @name RepoCreateAuditEntryVisibility
 * @type ENUM
 */
export type RepoCreateAuditEntryVisibility = TypeData<
  t_RepoCreateAuditEntryVisibility
>

/**
 * @name RepoDestroyAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoDestroyAuditEntry = TypeData<t_RepoDestroyAuditEntry>

/**
 * @name RepoDestroyAuditEntryVisibility
 * @type ENUM
 */
export type RepoDestroyAuditEntryVisibility = TypeData<
  t_RepoDestroyAuditEntryVisibility
>

/**
 * @name RepoRemoveMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoRemoveMemberAuditEntry = TypeData<t_RepoRemoveMemberAuditEntry>

/**
 * @name RepoRemoveMemberAuditEntryVisibility
 * @type ENUM
 */
export type RepoRemoveMemberAuditEntryVisibility = TypeData<
  t_RepoRemoveMemberAuditEntryVisibility
>

/**
 * @name RepoRemoveTopicAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
 */
export type RepoRemoveTopicAuditEntry = TypeData<t_RepoRemoveTopicAuditEntry>

/**
 * @name RepositoryVisibilityChangeDisableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type RepositoryVisibilityChangeDisableAuditEntry = TypeData<
  t_RepositoryVisibilityChangeDisableAuditEntry
>

/**
 * @name RepositoryVisibilityChangeEnableAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type RepositoryVisibilityChangeEnableAuditEntry = TypeData<
  t_RepositoryVisibilityChangeEnableAuditEntry
>

/**
 * @name TeamAddMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
export type TeamAddMemberAuditEntry = TypeData<t_TeamAddMemberAuditEntry>

/**
 * @name TeamAddRepositoryAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
 */
export type TeamAddRepositoryAuditEntry = TypeData<
  t_TeamAddRepositoryAuditEntry
>

/**
 * @name TeamChangeParentTeamAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
export type TeamChangeParentTeamAuditEntry = TypeData<
  t_TeamChangeParentTeamAuditEntry
>

/**
 * @name TeamRemoveMemberAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
export type TeamRemoveMemberAuditEntry = TypeData<t_TeamRemoveMemberAuditEntry>

/**
 * @name TeamRemoveRepositoryAuditEntry
 * @type OBJECT
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
 */
export type TeamRemoveRepositoryAuditEntry = TypeData<
  t_TeamRemoveRepositoryAuditEntry
>

/**
 * @name AuditLogOrderField
 * @type ENUM
 */
export type AuditLogOrderField = TypeData<t_AuditLogOrderField>

/**
 * @name OrganizationIdentityProvider
 * @type OBJECT
 * @implements Node
 */
export type OrganizationIdentityProvider = TypeData<
  t_OrganizationIdentityProvider
>

/**
 * @name Mannequin
 * @type OBJECT
 * @implements Node, Actor, UniformResourceLocatable
 */
export type Mannequin = TypeData<t_Mannequin>

/**
 * @name OrganizationMemberConnection
 * @type OBJECT
 */
export type OrganizationMemberConnection = TypeData<
  t_OrganizationMemberConnection
>

/**
 * @name OrganizationMemberEdge
 * @type OBJECT
 */
export type OrganizationMemberEdge = TypeData<t_OrganizationMemberEdge>

/**
 * @name OrganizationMemberRole
 * @type ENUM
 */
export type OrganizationMemberRole = TypeData<t_OrganizationMemberRole>

/**
 * @name TeamRole
 * @type ENUM
 */
export type TeamRole = TypeData<t_TeamRole>

/**
 * @name GistPrivacy
 * @type ENUM
 */
export type GistPrivacy = TypeData<t_GistPrivacy>

/**
 * @name RepositoryInvitationEdge
 * @type OBJECT
 */
export type RepositoryInvitationEdge = TypeData<t_RepositoryInvitationEdge>

/**
 * @name RepositoryInvitation
 * @type OBJECT
 * @implements Node
 */
export type RepositoryInvitation = TypeData<t_RepositoryInvitation>

/**
 * @name SponsorsTierOrderField
 * @type ENUM
 */
export type SponsorsTierOrderField = TypeData<t_SponsorsTierOrderField>

/**
 * @name SponsorsTierAdminInfo
 * @type OBJECT
 */
export type SponsorsTierAdminInfo = TypeData<t_SponsorsTierAdminInfo>

/**
 * @name LanguageConnection
 * @type OBJECT
 */
export type LanguageConnection = TypeData<t_LanguageConnection>

/**
 * @name LanguageEdge
 * @type OBJECT
 */
export type LanguageEdge = TypeData<t_LanguageEdge>

/**
 * @name Milestone
 * @type OBJECT
 * @implements Node, Closable, UniformResourceLocatable
 */
export type Milestone = TypeData<t_Milestone>

/**
 * @name MilestoneState
 * @type ENUM
 */
export type MilestoneState = TypeData<t_MilestoneState>

/**
 * @name PullRequestChangedFileConnection
 * @type OBJECT
 */
export type PullRequestChangedFileConnection = TypeData<
  t_PullRequestChangedFileConnection
>

/**
 * @name PullRequestChangedFileEdge
 * @type OBJECT
 */
export type PullRequestChangedFileEdge = TypeData<t_PullRequestChangedFileEdge>

/**
 * @name PullRequestChangedFile
 * @type OBJECT
 */
export type PullRequestChangedFile = TypeData<t_PullRequestChangedFile>

/**
 * @name MergeableState
 * @type ENUM
 */
export type MergeableState = TypeData<t_MergeableState>

/**
 * @name PullRequestReviewComment
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type PullRequestReviewComment = TypeData<t_PullRequestReviewComment>

/**
 * @name PullRequestReview
 * @type OBJECT
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type PullRequestReview = TypeData<t_PullRequestReview>

/**
 * @name PullRequestReviewState
 * @type ENUM
 */
export type PullRequestReviewState = TypeData<t_PullRequestReviewState>

/**
 * @name PullRequestReviewCommentConnection
 * @type OBJECT
 */
export type PullRequestReviewCommentConnection = TypeData<
  t_PullRequestReviewCommentConnection
>

/**
 * @name PullRequestReviewCommentEdge
 * @type OBJECT
 */
export type PullRequestReviewCommentEdge = TypeData<
  t_PullRequestReviewCommentEdge
>

/**
 * @name PullRequestReviewThread
 * @type OBJECT
 * @implements Node
 */
export type PullRequestReviewThread = TypeData<t_PullRequestReviewThread>

/**
 * @name PullRequestCommit
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type PullRequestCommit = TypeData<t_PullRequestCommit>

/**
 * @name PullRequestReviewThreadConnection
 * @type OBJECT
 */
export type PullRequestReviewThreadConnection = TypeData<
  t_PullRequestReviewThreadConnection
>

/**
 * @name PullRequestReviewThreadEdge
 * @type OBJECT
 */
export type PullRequestReviewThreadEdge = TypeData<
  t_PullRequestReviewThreadEdge
>

/**
 * @name PullRequestReviewCommentState
 * @type ENUM
 */
export type PullRequestReviewCommentState = TypeData<
  t_PullRequestReviewCommentState
>

/**
 * @name PullRequestPubSubTopic
 * @type ENUM
 */
export type PullRequestPubSubTopic = TypeData<t_PullRequestPubSubTopic>

/**
 * @name IssueCommentConnection
 * @type OBJECT
 */
export type IssueCommentConnection = TypeData<t_IssueCommentConnection>

/**
 * @name IssueCommentEdge
 * @type OBJECT
 */
export type IssueCommentEdge = TypeData<t_IssueCommentEdge>

/**
 * @name PullRequestReviewConnection
 * @type OBJECT
 */
export type PullRequestReviewConnection = TypeData<
  t_PullRequestReviewConnection
>

/**
 * @name PullRequestReviewEdge
 * @type OBJECT
 */
export type PullRequestReviewEdge = TypeData<t_PullRequestReviewEdge>

/**
 * @name PullRequestCommitConnection
 * @type OBJECT
 */
export type PullRequestCommitConnection = TypeData<
  t_PullRequestCommitConnection
>

/**
 * @name PullRequestCommitEdge
 * @type OBJECT
 */
export type PullRequestCommitEdge = TypeData<t_PullRequestCommitEdge>

/**
 * @name ReviewRequestConnection
 * @type OBJECT
 */
export type ReviewRequestConnection = TypeData<t_ReviewRequestConnection>

/**
 * @name ReviewRequestEdge
 * @type OBJECT
 */
export type ReviewRequestEdge = TypeData<t_ReviewRequestEdge>

/**
 * @name ReviewRequest
 * @type OBJECT
 * @implements Node
 */
export type ReviewRequest = TypeData<t_ReviewRequest>

/**
 * @name RequestedReviewer
 * @type UNION
 */
export type RequestedReviewer = TypeData<t_RequestedReviewer>

/**
 * @name PullRequestTimelineConnection
 * @type OBJECT
 */
export type PullRequestTimelineConnection = TypeData<
  t_PullRequestTimelineConnection
>

/**
 * @name PullRequestTimelineItemEdge
 * @type OBJECT
 */
export type PullRequestTimelineItemEdge = TypeData<
  t_PullRequestTimelineItemEdge
>

/**
 * @name PullRequestTimelineItem
 * @type UNION
 */
export type PullRequestTimelineItem = TypeData<t_PullRequestTimelineItem>

/**
 * @name CommitCommentThread
 * @type OBJECT
 * @implements Node, RepositoryNode
 */
export type CommitCommentThread = TypeData<t_CommitCommentThread>

/**
 * @name IssueOrPullRequest
 * @type UNION
 */
export type IssueOrPullRequest = TypeData<t_IssueOrPullRequest>

/**
 * @name ClosedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type ClosedEvent = TypeData<t_ClosedEvent>

/**
 * @name Closer
 * @type UNION
 */
export type Closer = TypeData<t_Closer>

/**
 * @name ReopenedEvent
 * @type OBJECT
 * @implements Node
 */
export type ReopenedEvent = TypeData<t_ReopenedEvent>

/**
 * @name SubscribedEvent
 * @type OBJECT
 * @implements Node
 */
export type SubscribedEvent = TypeData<t_SubscribedEvent>

/**
 * @name UnsubscribedEvent
 * @type OBJECT
 * @implements Node
 */
export type UnsubscribedEvent = TypeData<t_UnsubscribedEvent>

/**
 * @name MergedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type MergedEvent = TypeData<t_MergedEvent>

/**
 * @name ReferencedEvent
 * @type OBJECT
 * @implements Node
 */
export type ReferencedEvent = TypeData<t_ReferencedEvent>

/**
 * @name ReferencedSubject
 * @type UNION
 */
export type ReferencedSubject = TypeData<t_ReferencedSubject>

/**
 * @name CrossReferencedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type CrossReferencedEvent = TypeData<t_CrossReferencedEvent>

/**
 * @name AssignedEvent
 * @type OBJECT
 * @implements Node
 */
export type AssignedEvent = TypeData<t_AssignedEvent>

/**
 * @name Assignee
 * @type UNION
 */
export type Assignee = TypeData<t_Assignee>

/**
 * @name UnassignedEvent
 * @type OBJECT
 * @implements Node
 */
export type UnassignedEvent = TypeData<t_UnassignedEvent>

/**
 * @name LabeledEvent
 * @type OBJECT
 * @implements Node
 */
export type LabeledEvent = TypeData<t_LabeledEvent>

/**
 * @name UnlabeledEvent
 * @type OBJECT
 * @implements Node
 */
export type UnlabeledEvent = TypeData<t_UnlabeledEvent>

/**
 * @name MilestonedEvent
 * @type OBJECT
 * @implements Node
 */
export type MilestonedEvent = TypeData<t_MilestonedEvent>

/**
 * @name MilestoneItem
 * @type UNION
 */
export type MilestoneItem = TypeData<t_MilestoneItem>

/**
 * @name DemilestonedEvent
 * @type OBJECT
 * @implements Node
 */
export type DemilestonedEvent = TypeData<t_DemilestonedEvent>

/**
 * @name RenamedTitleEvent
 * @type OBJECT
 * @implements Node
 */
export type RenamedTitleEvent = TypeData<t_RenamedTitleEvent>

/**
 * @name RenamedTitleSubject
 * @type UNION
 */
export type RenamedTitleSubject = TypeData<t_RenamedTitleSubject>

/**
 * @name LockedEvent
 * @type OBJECT
 * @implements Node
 */
export type LockedEvent = TypeData<t_LockedEvent>

/**
 * @name UnlockedEvent
 * @type OBJECT
 * @implements Node
 */
export type UnlockedEvent = TypeData<t_UnlockedEvent>

/**
 * @name DeployedEvent
 * @type OBJECT
 * @implements Node
 */
export type DeployedEvent = TypeData<t_DeployedEvent>

/**
 * @name DeploymentEnvironmentChangedEvent
 * @type OBJECT
 * @implements Node
 */
export type DeploymentEnvironmentChangedEvent = TypeData<
  t_DeploymentEnvironmentChangedEvent
>

/**
 * @name HeadRefDeletedEvent
 * @type OBJECT
 * @implements Node
 */
export type HeadRefDeletedEvent = TypeData<t_HeadRefDeletedEvent>

/**
 * @name HeadRefRestoredEvent
 * @type OBJECT
 * @implements Node
 */
export type HeadRefRestoredEvent = TypeData<t_HeadRefRestoredEvent>

/**
 * @name HeadRefForcePushedEvent
 * @type OBJECT
 * @implements Node
 */
export type HeadRefForcePushedEvent = TypeData<t_HeadRefForcePushedEvent>

/**
 * @name BaseRefForcePushedEvent
 * @type OBJECT
 * @implements Node
 */
export type BaseRefForcePushedEvent = TypeData<t_BaseRefForcePushedEvent>

/**
 * @name ReviewRequestedEvent
 * @type OBJECT
 * @implements Node
 */
export type ReviewRequestedEvent = TypeData<t_ReviewRequestedEvent>

/**
 * @name ReviewRequestRemovedEvent
 * @type OBJECT
 * @implements Node
 */
export type ReviewRequestRemovedEvent = TypeData<t_ReviewRequestRemovedEvent>

/**
 * @name ReviewDismissedEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type ReviewDismissedEvent = TypeData<t_ReviewDismissedEvent>

/**
 * @name UserBlockedEvent
 * @type OBJECT
 * @implements Node
 */
export type UserBlockedEvent = TypeData<t_UserBlockedEvent>

/**
 * @name UserBlockDuration
 * @type ENUM
 */
export type UserBlockDuration = TypeData<t_UserBlockDuration>

/**
 * @name PullRequestTimelineItemsConnection
 * @type OBJECT
 */
export type PullRequestTimelineItemsConnection = TypeData<
  t_PullRequestTimelineItemsConnection
>

/**
 * @name PullRequestTimelineItemsEdge
 * @type OBJECT
 */
export type PullRequestTimelineItemsEdge = TypeData<
  t_PullRequestTimelineItemsEdge
>

/**
 * @name PullRequestTimelineItems
 * @type UNION
 */
export type PullRequestTimelineItems = TypeData<t_PullRequestTimelineItems>

/**
 * @name PullRequestCommitCommentThread
 * @type OBJECT
 * @implements Node, RepositoryNode
 */
export type PullRequestCommitCommentThread = TypeData<
  t_PullRequestCommitCommentThread
>

/**
 * @name PullRequestRevisionMarker
 * @type OBJECT
 */
export type PullRequestRevisionMarker = TypeData<t_PullRequestRevisionMarker>

/**
 * @name BaseRefChangedEvent
 * @type OBJECT
 * @implements Node
 */
export type BaseRefChangedEvent = TypeData<t_BaseRefChangedEvent>

/**
 * @name ReadyForReviewEvent
 * @type OBJECT
 * @implements Node, UniformResourceLocatable
 */
export type ReadyForReviewEvent = TypeData<t_ReadyForReviewEvent>

/**
 * @name AddedToProjectEvent
 * @type OBJECT
 * @implements Node
 */
export type AddedToProjectEvent = TypeData<t_AddedToProjectEvent>

/**
 * @name CommentDeletedEvent
 * @type OBJECT
 * @implements Node
 */
export type CommentDeletedEvent = TypeData<t_CommentDeletedEvent>

/**
 * @name ConvertedNoteToIssueEvent
 * @type OBJECT
 * @implements Node
 */
export type ConvertedNoteToIssueEvent = TypeData<t_ConvertedNoteToIssueEvent>

/**
 * @name MarkedAsDuplicateEvent
 * @type OBJECT
 * @implements Node
 */
export type MarkedAsDuplicateEvent = TypeData<t_MarkedAsDuplicateEvent>

/**
 * @name MentionedEvent
 * @type OBJECT
 * @implements Node
 */
export type MentionedEvent = TypeData<t_MentionedEvent>

/**
 * @name MovedColumnsInProjectEvent
 * @type OBJECT
 * @implements Node
 */
export type MovedColumnsInProjectEvent = TypeData<t_MovedColumnsInProjectEvent>

/**
 * @name PinnedEvent
 * @type OBJECT
 * @implements Node
 */
export type PinnedEvent = TypeData<t_PinnedEvent>

/**
 * @name RemovedFromProjectEvent
 * @type OBJECT
 * @implements Node
 */
export type RemovedFromProjectEvent = TypeData<t_RemovedFromProjectEvent>

/**
 * @name TransferredEvent
 * @type OBJECT
 * @implements Node
 */
export type TransferredEvent = TypeData<t_TransferredEvent>

/**
 * @name UnpinnedEvent
 * @type OBJECT
 * @implements Node
 */
export type UnpinnedEvent = TypeData<t_UnpinnedEvent>

/**
 * @name PullRequestTimelineItemsItemType
 * @type ENUM
 */
export type PullRequestTimelineItemsItemType = TypeData<
  t_PullRequestTimelineItemsItemType
>

/**
 * @name SuggestedReviewer
 * @type OBJECT
 */
export type SuggestedReviewer = TypeData<t_SuggestedReviewer>

/**
 * @name ProjectCardArchivedState
 * @type ENUM
 */
export type ProjectCardArchivedState = TypeData<t_ProjectCardArchivedState>

/**
 * @name Hovercard
 * @type OBJECT
 */
export type Hovercard = TypeData<t_Hovercard>

/**
 * @name HovercardContext
 * @type INTERFACE
 */
export type HovercardContext = TypeData<t_HovercardContext>

/**
 * @name IssueTimelineConnection
 * @type OBJECT
 */
export type IssueTimelineConnection = TypeData<t_IssueTimelineConnection>

/**
 * @name IssueTimelineItemEdge
 * @type OBJECT
 */
export type IssueTimelineItemEdge = TypeData<t_IssueTimelineItemEdge>

/**
 * @name IssueTimelineItem
 * @type UNION
 */
export type IssueTimelineItem = TypeData<t_IssueTimelineItem>

/**
 * @name IssueTimelineItemsConnection
 * @type OBJECT
 */
export type IssueTimelineItemsConnection = TypeData<
  t_IssueTimelineItemsConnection
>

/**
 * @name IssueTimelineItemsEdge
 * @type OBJECT
 */
export type IssueTimelineItemsEdge = TypeData<t_IssueTimelineItemsEdge>

/**
 * @name IssueTimelineItems
 * @type UNION
 */
export type IssueTimelineItems = TypeData<t_IssueTimelineItems>

/**
 * @name IssueTimelineItemsItemType
 * @type ENUM
 */
export type IssueTimelineItemsItemType = TypeData<t_IssueTimelineItemsItemType>

/**
 * @name CollaboratorAffiliation
 * @type ENUM
 */
export type CollaboratorAffiliation = TypeData<t_CollaboratorAffiliation>

/**
 * @name DeployKeyConnection
 * @type OBJECT
 */
export type DeployKeyConnection = TypeData<t_DeployKeyConnection>

/**
 * @name DeployKeyEdge
 * @type OBJECT
 */
export type DeployKeyEdge = TypeData<t_DeployKeyEdge>

/**
 * @name DeployKey
 * @type OBJECT
 * @implements Node
 */
export type DeployKey = TypeData<t_DeployKey>

/**
 * @name RepositoryCollaboratorAffiliation
 * @type ENUM
 */
export type RepositoryCollaboratorAffiliation = TypeData<
  t_RepositoryCollaboratorAffiliation
>

/**
 * @name BranchProtectionRuleConnection
 * @type OBJECT
 */
export type BranchProtectionRuleConnection = TypeData<
  t_BranchProtectionRuleConnection
>

/**
 * @name BranchProtectionRuleEdge
 * @type OBJECT
 */
export type BranchProtectionRuleEdge = TypeData<t_BranchProtectionRuleEdge>

/**
 * @name BranchProtectionRule
 * @type OBJECT
 * @implements Node
 */
export type BranchProtectionRule = TypeData<t_BranchProtectionRule>

/**
 * @name ReviewDismissalAllowanceConnection
 * @type OBJECT
 */
export type ReviewDismissalAllowanceConnection = TypeData<
  t_ReviewDismissalAllowanceConnection
>

/**
 * @name ReviewDismissalAllowanceEdge
 * @type OBJECT
 */
export type ReviewDismissalAllowanceEdge = TypeData<
  t_ReviewDismissalAllowanceEdge
>

/**
 * @name ReviewDismissalAllowance
 * @type OBJECT
 * @implements Node
 */
export type ReviewDismissalAllowance = TypeData<t_ReviewDismissalAllowance>

/**
 * @name ReviewDismissalAllowanceActor
 * @type UNION
 */
export type ReviewDismissalAllowanceActor = TypeData<
  t_ReviewDismissalAllowanceActor
>

/**
 * @name PushAllowanceConnection
 * @type OBJECT
 */
export type PushAllowanceConnection = TypeData<t_PushAllowanceConnection>

/**
 * @name PushAllowanceEdge
 * @type OBJECT
 */
export type PushAllowanceEdge = TypeData<t_PushAllowanceEdge>

/**
 * @name PushAllowance
 * @type OBJECT
 * @implements Node
 */
export type PushAllowance = TypeData<t_PushAllowance>

/**
 * @name PushAllowanceActor
 * @type UNION
 */
export type PushAllowanceActor = TypeData<t_PushAllowanceActor>

/**
 * @name RefConnection
 * @type OBJECT
 */
export type RefConnection = TypeData<t_RefConnection>

/**
 * @name RefEdge
 * @type OBJECT
 */
export type RefEdge = TypeData<t_RefEdge>

/**
 * @name BranchProtectionRuleConflictConnection
 * @type OBJECT
 */
export type BranchProtectionRuleConflictConnection = TypeData<
  t_BranchProtectionRuleConflictConnection
>

/**
 * @name BranchProtectionRuleConflictEdge
 * @type OBJECT
 */
export type BranchProtectionRuleConflictEdge = TypeData<
  t_BranchProtectionRuleConflictEdge
>

/**
 * @name BranchProtectionRuleConflict
 * @type OBJECT
 */
export type BranchProtectionRuleConflict = TypeData<
  t_BranchProtectionRuleConflict
>

/**
 * @name MilestoneConnection
 * @type OBJECT
 */
export type MilestoneConnection = TypeData<t_MilestoneConnection>

/**
 * @name MilestoneEdge
 * @type OBJECT
 */
export type MilestoneEdge = TypeData<t_MilestoneEdge>

/**
 * @name MilestoneOrderField
 * @type ENUM
 */
export type MilestoneOrderField = TypeData<t_MilestoneOrderField>

/**
 * @name CodeOfConduct
 * @type OBJECT
 * @implements Node
 */
export type CodeOfConduct = TypeData<t_CodeOfConduct>

/**
 * @name RepositoryCollaboratorConnection
 * @type OBJECT
 */
export type RepositoryCollaboratorConnection = TypeData<
  t_RepositoryCollaboratorConnection
>

/**
 * @name RepositoryCollaboratorEdge
 * @type OBJECT
 */
export type RepositoryCollaboratorEdge = TypeData<t_RepositoryCollaboratorEdge>

/**
 * @name PermissionSource
 * @type OBJECT
 */
export type PermissionSource = TypeData<t_PermissionSource>

/**
 * @name PermissionGranter
 * @type UNION
 */
export type PermissionGranter = TypeData<t_PermissionGranter>

/**
 * @name LanguageOrderField
 * @type ENUM
 */
export type LanguageOrderField = TypeData<t_LanguageOrderField>

/**
 * @name RefOrderField
 * @type ENUM
 */
export type RefOrderField = TypeData<t_RefOrderField>

/**
 * @name RepositoryVulnerabilityAlertConnection
 * @type OBJECT
 */
export type RepositoryVulnerabilityAlertConnection = TypeData<
  t_RepositoryVulnerabilityAlertConnection
>

/**
 * @name RepositoryVulnerabilityAlertEdge
 * @type OBJECT
 */
export type RepositoryVulnerabilityAlertEdge = TypeData<
  t_RepositoryVulnerabilityAlertEdge
>

/**
 * @name RepositoryVulnerabilityAlert
 * @type OBJECT
 * @implements Node, RepositoryNode
 */
export type RepositoryVulnerabilityAlert = TypeData<
  t_RepositoryVulnerabilityAlert
>

/**
 * @name SecurityAdvisory
 * @type OBJECT
 * @implements Node
 */
export type SecurityAdvisory = TypeData<t_SecurityAdvisory>

/**
 * @name SecurityAdvisorySeverity
 * @type ENUM
 */
export type SecurityAdvisorySeverity = TypeData<t_SecurityAdvisorySeverity>

/**
 * @name SecurityAdvisoryIdentifier
 * @type OBJECT
 */
export type SecurityAdvisoryIdentifier = TypeData<t_SecurityAdvisoryIdentifier>

/**
 * @name SecurityAdvisoryReference
 * @type OBJECT
 */
export type SecurityAdvisoryReference = TypeData<t_SecurityAdvisoryReference>

/**
 * @name SecurityVulnerabilityConnection
 * @type OBJECT
 */
export type SecurityVulnerabilityConnection = TypeData<
  t_SecurityVulnerabilityConnection
>

/**
 * @name SecurityVulnerabilityEdge
 * @type OBJECT
 */
export type SecurityVulnerabilityEdge = TypeData<t_SecurityVulnerabilityEdge>

/**
 * @name SecurityVulnerability
 * @type OBJECT
 */
export type SecurityVulnerability = TypeData<t_SecurityVulnerability>

/**
 * @name SecurityAdvisoryPackage
 * @type OBJECT
 */
export type SecurityAdvisoryPackage = TypeData<t_SecurityAdvisoryPackage>

/**
 * @name SecurityAdvisoryEcosystem
 * @type ENUM
 */
export type SecurityAdvisoryEcosystem = TypeData<t_SecurityAdvisoryEcosystem>

/**
 * @name SecurityAdvisoryPackageVersion
 * @type OBJECT
 */
export type SecurityAdvisoryPackageVersion = TypeData<
  t_SecurityAdvisoryPackageVersion
>

/**
 * @name SecurityVulnerabilityOrderField
 * @type ENUM
 */
export type SecurityVulnerabilityOrderField = TypeData<
  t_SecurityVulnerabilityOrderField
>

/**
 * @name GitSSHRemote
 * @type SCALAR
 */
export type GitSSHRemote = TypeData<t_GitSSHRemote>

/**
 * @name RegistryPackageStatistics
 * @type OBJECT
 */
export type RegistryPackageStatistics = TypeData<t_RegistryPackageStatistics>

/**
 * @name RegistryPackageTagConnection
 * @type OBJECT
 */
export type RegistryPackageTagConnection = TypeData<
  t_RegistryPackageTagConnection
>

/**
 * @name RegistryPackageTagEdge
 * @type OBJECT
 */
export type RegistryPackageTagEdge = TypeData<t_RegistryPackageTagEdge>

/**
 * @name RegistryPackageTag
 * @type OBJECT
 * @implements Node
 */
export type RegistryPackageTag = TypeData<t_RegistryPackageTag>

/**
 * @name ContributionsCollection
 * @type OBJECT
 */
export type ContributionsCollection = TypeData<t_ContributionsCollection>

/**
 * @name Contribution
 * @type INTERFACE
 */
export type Contribution = TypeData<t_Contribution>

/**
 * @name CreatedIssueContributionConnection
 * @type OBJECT
 */
export type CreatedIssueContributionConnection = TypeData<
  t_CreatedIssueContributionConnection
>

/**
 * @name CreatedIssueContributionEdge
 * @type OBJECT
 */
export type CreatedIssueContributionEdge = TypeData<
  t_CreatedIssueContributionEdge
>

/**
 * @name CreatedIssueContribution
 * @type OBJECT
 * @implements Contribution
 */
export type CreatedIssueContribution = TypeData<t_CreatedIssueContribution>

/**
 * @name ContributionOrderField
 * @type ENUM
 */
export type ContributionOrderField = TypeData<t_ContributionOrderField>

/**
 * @name CreatedRepositoryContributionConnection
 * @type OBJECT
 */
export type CreatedRepositoryContributionConnection = TypeData<
  t_CreatedRepositoryContributionConnection
>

/**
 * @name CreatedRepositoryContributionEdge
 * @type OBJECT
 */
export type CreatedRepositoryContributionEdge = TypeData<
  t_CreatedRepositoryContributionEdge
>

/**
 * @name CreatedRepositoryContribution
 * @type OBJECT
 * @implements Contribution
 */
export type CreatedRepositoryContribution = TypeData<
  t_CreatedRepositoryContribution
>

/**
 * @name JoinedGitHubContribution
 * @type OBJECT
 * @implements Contribution
 */
export type JoinedGitHubContribution = TypeData<t_JoinedGitHubContribution>

/**
 * @name CreatedRepositoryOrRestrictedContribution
 * @type UNION
 */
export type CreatedRepositoryOrRestrictedContribution = TypeData<
  t_CreatedRepositoryOrRestrictedContribution
>

/**
 * @name RestrictedContribution
 * @type OBJECT
 * @implements Contribution
 */
export type RestrictedContribution = TypeData<t_RestrictedContribution>

/**
 * @name CreatedIssueOrRestrictedContribution
 * @type UNION
 */
export type CreatedIssueOrRestrictedContribution = TypeData<
  t_CreatedIssueOrRestrictedContribution
>

/**
 * @name CreatedPullRequestOrRestrictedContribution
 * @type UNION
 */
export type CreatedPullRequestOrRestrictedContribution = TypeData<
  t_CreatedPullRequestOrRestrictedContribution
>

/**
 * @name CreatedPullRequestContribution
 * @type OBJECT
 * @implements Contribution
 */
export type CreatedPullRequestContribution = TypeData<
  t_CreatedPullRequestContribution
>

/**
 * @name ContributionCalendar
 * @type OBJECT
 */
export type ContributionCalendar = TypeData<t_ContributionCalendar>

/**
 * @name ContributionCalendarWeek
 * @type OBJECT
 */
export type ContributionCalendarWeek = TypeData<t_ContributionCalendarWeek>

/**
 * @name ContributionCalendarDay
 * @type OBJECT
 */
export type ContributionCalendarDay = TypeData<t_ContributionCalendarDay>

/**
 * @name ContributionCalendarMonth
 * @type OBJECT
 */
export type ContributionCalendarMonth = TypeData<t_ContributionCalendarMonth>

/**
 * @name CreatedPullRequestReviewContributionConnection
 * @type OBJECT
 */
export type CreatedPullRequestReviewContributionConnection = TypeData<
  t_CreatedPullRequestReviewContributionConnection
>

/**
 * @name CreatedPullRequestReviewContributionEdge
 * @type OBJECT
 */
export type CreatedPullRequestReviewContributionEdge = TypeData<
  t_CreatedPullRequestReviewContributionEdge
>

/**
 * @name CreatedPullRequestReviewContribution
 * @type OBJECT
 * @implements Contribution
 */
export type CreatedPullRequestReviewContribution = TypeData<
  t_CreatedPullRequestReviewContribution
>

/**
 * @name PullRequestReviewContributionsByRepository
 * @type OBJECT
 */
export type PullRequestReviewContributionsByRepository = TypeData<
  t_PullRequestReviewContributionsByRepository
>

/**
 * @name CommitContributionsByRepository
 * @type OBJECT
 */
export type CommitContributionsByRepository = TypeData<
  t_CommitContributionsByRepository
>

/**
 * @name CreatedCommitContributionConnection
 * @type OBJECT
 */
export type CreatedCommitContributionConnection = TypeData<
  t_CreatedCommitContributionConnection
>

/**
 * @name CreatedCommitContributionEdge
 * @type OBJECT
 */
export type CreatedCommitContributionEdge = TypeData<
  t_CreatedCommitContributionEdge
>

/**
 * @name CreatedCommitContribution
 * @type OBJECT
 * @implements Contribution
 */
export type CreatedCommitContribution = TypeData<t_CreatedCommitContribution>

/**
 * @name CommitContributionOrderField
 * @type ENUM
 */
export type CommitContributionOrderField = TypeData<
  t_CommitContributionOrderField
>

/**
 * @name CreatedPullRequestContributionConnection
 * @type OBJECT
 */
export type CreatedPullRequestContributionConnection = TypeData<
  t_CreatedPullRequestContributionConnection
>

/**
 * @name CreatedPullRequestContributionEdge
 * @type OBJECT
 */
export type CreatedPullRequestContributionEdge = TypeData<
  t_CreatedPullRequestContributionEdge
>

/**
 * @name PullRequestContributionsByRepository
 * @type OBJECT
 */
export type PullRequestContributionsByRepository = TypeData<
  t_PullRequestContributionsByRepository
>

/**
 * @name IssueContributionsByRepository
 * @type OBJECT
 */
export type IssueContributionsByRepository = TypeData<
  t_IssueContributionsByRepository
>

/**
 * @name SavedReplyConnection
 * @type OBJECT
 */
export type SavedReplyConnection = TypeData<t_SavedReplyConnection>

/**
 * @name SavedReplyEdge
 * @type OBJECT
 */
export type SavedReplyEdge = TypeData<t_SavedReplyEdge>

/**
 * @name SavedReply
 * @type OBJECT
 * @implements Node
 */
export type SavedReply = TypeData<t_SavedReply>

/**
 * @name SavedReplyOrderField
 * @type ENUM
 */
export type SavedReplyOrderField = TypeData<t_SavedReplyOrderField>

/**
 * @name RepositoryContributionType
 * @type ENUM
 */
export type RepositoryContributionType = TypeData<t_RepositoryContributionType>

/**
 * @name IssueOrPullRequestEdge
 * @type OBJECT
 */
export type IssueOrPullRequestEdge = TypeData<t_IssueOrPullRequestEdge>

/**
 * @name PublicKeyConnection
 * @type OBJECT
 */
export type PublicKeyConnection = TypeData<t_PublicKeyConnection>

/**
 * @name PublicKeyEdge
 * @type OBJECT
 */
export type PublicKeyEdge = TypeData<t_PublicKeyEdge>

/**
 * @name FollowingConnection
 * @type OBJECT
 */
export type FollowingConnection = TypeData<t_FollowingConnection>

/**
 * @name FollowerConnection
 * @type OBJECT
 */
export type FollowerConnection = TypeData<t_FollowerConnection>

/**
 * @name EnterpriseEdge
 * @type OBJECT
 */
export type EnterpriseEdge = TypeData<t_EnterpriseEdge>

/**
 * @name EnterpriseOrderField
 * @type ENUM
 */
export type EnterpriseOrderField = TypeData<t_EnterpriseOrderField>

/**
 * @name EnterpriseMembershipType
 * @type ENUM
 */
export type EnterpriseMembershipType = TypeData<t_EnterpriseMembershipType>

/**
 * @name StarredRepositoryConnection
 * @type OBJECT
 */
export type StarredRepositoryConnection = TypeData<
  t_StarredRepositoryConnection
>

/**
 * @name StarredRepositoryEdge
 * @type OBJECT
 */
export type StarredRepositoryEdge = TypeData<t_StarredRepositoryEdge>

/**
 * @name AppEdge
 * @type OBJECT
 */
export type AppEdge = TypeData<t_AppEdge>

/**
 * @name RateLimit
 * @type OBJECT
 */
export type RateLimit = TypeData<t_RateLimit>

/**
 * @name SearchResultItemConnection
 * @type OBJECT
 */
export type SearchResultItemConnection = TypeData<t_SearchResultItemConnection>

/**
 * @name SearchResultItemEdge
 * @type OBJECT
 */
export type SearchResultItemEdge = TypeData<t_SearchResultItemEdge>

/**
 * @name SearchResultItem
 * @type UNION
 */
export type SearchResultItem = TypeData<t_SearchResultItem>

/**
 * @name TextMatch
 * @type OBJECT
 */
export type TextMatch = TypeData<t_TextMatch>

/**
 * @name TextMatchHighlight
 * @type OBJECT
 */
export type TextMatchHighlight = TypeData<t_TextMatchHighlight>

/**
 * @name SearchType
 * @type ENUM
 */
export type SearchType = TypeData<t_SearchType>

/**
 * @name CollectionItemContent
 * @type UNION
 */
export type CollectionItemContent = TypeData<t_CollectionItemContent>

/**
 * @name GitHubMetadata
 * @type OBJECT
 */
export type GitHubMetadata = TypeData<t_GitHubMetadata>

/**
 * @name SecurityAdvisoryConnection
 * @type OBJECT
 */
export type SecurityAdvisoryConnection = TypeData<t_SecurityAdvisoryConnection>

/**
 * @name SecurityAdvisoryEdge
 * @type OBJECT
 */
export type SecurityAdvisoryEdge = TypeData<t_SecurityAdvisoryEdge>

/**
 * @name SecurityAdvisoryOrderField
 * @type ENUM
 */
export type SecurityAdvisoryOrderField = TypeData<t_SecurityAdvisoryOrderField>

/**
 * @name SecurityAdvisoryIdentifierType
 * @type ENUM
 */
export type SecurityAdvisoryIdentifierType = TypeData<
  t_SecurityAdvisoryIdentifierType
>

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>

/**
 * @name AddReactionPayload
 * @type OBJECT
 */
export type AddReactionPayload = TypeData<t_AddReactionPayload>

/**
 * @name RemoveReactionPayload
 * @type OBJECT
 */
export type RemoveReactionPayload = TypeData<t_RemoveReactionPayload>

/**
 * @name UpdateSubscriptionPayload
 * @type OBJECT
 */
export type UpdateSubscriptionPayload = TypeData<t_UpdateSubscriptionPayload>

/**
 * @name AddCommentPayload
 * @type OBJECT
 */
export type AddCommentPayload = TypeData<t_AddCommentPayload>

/**
 * @name ReportedContentClassifiers
 * @type ENUM
 */
export type ReportedContentClassifiers = TypeData<t_ReportedContentClassifiers>

/**
 * @name UpdateIssueCommentPayload
 * @type OBJECT
 */
export type UpdateIssueCommentPayload = TypeData<t_UpdateIssueCommentPayload>

/**
 * @name CreateProjectPayload
 * @type OBJECT
 */
export type CreateProjectPayload = TypeData<t_CreateProjectPayload>

/**
 * @name ProjectTemplate
 * @type ENUM
 */
export type ProjectTemplate = TypeData<t_ProjectTemplate>

/**
 * @name UpdateProjectPayload
 * @type OBJECT
 */
export type UpdateProjectPayload = TypeData<t_UpdateProjectPayload>

/**
 * @name DeleteProjectPayload
 * @type OBJECT
 */
export type DeleteProjectPayload = TypeData<t_DeleteProjectPayload>

/**
 * @name CloneProjectPayload
 * @type OBJECT
 */
export type CloneProjectPayload = TypeData<t_CloneProjectPayload>

/**
 * @name AddProjectColumnPayload
 * @type OBJECT
 */
export type AddProjectColumnPayload = TypeData<t_AddProjectColumnPayload>

/**
 * @name MoveProjectColumnPayload
 * @type OBJECT
 */
export type MoveProjectColumnPayload = TypeData<t_MoveProjectColumnPayload>

/**
 * @name UpdateProjectColumnPayload
 * @type OBJECT
 */
export type UpdateProjectColumnPayload = TypeData<t_UpdateProjectColumnPayload>

/**
 * @name DeleteProjectColumnPayload
 * @type OBJECT
 */
export type DeleteProjectColumnPayload = TypeData<t_DeleteProjectColumnPayload>

/**
 * @name AddProjectCardPayload
 * @type OBJECT
 */
export type AddProjectCardPayload = TypeData<t_AddProjectCardPayload>

/**
 * @name UpdateProjectCardPayload
 * @type OBJECT
 */
export type UpdateProjectCardPayload = TypeData<t_UpdateProjectCardPayload>

/**
 * @name MoveProjectCardPayload
 * @type OBJECT
 */
export type MoveProjectCardPayload = TypeData<t_MoveProjectCardPayload>

/**
 * @name DeleteProjectCardPayload
 * @type OBJECT
 */
export type DeleteProjectCardPayload = TypeData<t_DeleteProjectCardPayload>

/**
 * @name LinkRepositoryToProjectPayload
 * @type OBJECT
 */
export type LinkRepositoryToProjectPayload = TypeData<
  t_LinkRepositoryToProjectPayload
>

/**
 * @name UnlinkRepositoryFromProjectPayload
 * @type OBJECT
 */
export type UnlinkRepositoryFromProjectPayload = TypeData<
  t_UnlinkRepositoryFromProjectPayload
>

/**
 * @name ConvertProjectCardNoteToIssuePayload
 * @type OBJECT
 */
export type ConvertProjectCardNoteToIssuePayload = TypeData<
  t_ConvertProjectCardNoteToIssuePayload
>

/**
 * @name UnmarkIssueAsDuplicatePayload
 * @type OBJECT
 */
export type UnmarkIssueAsDuplicatePayload = TypeData<
  t_UnmarkIssueAsDuplicatePayload
>

/**
 * @name LockLockablePayload
 * @type OBJECT
 */
export type LockLockablePayload = TypeData<t_LockLockablePayload>

/**
 * @name UnlockLockablePayload
 * @type OBJECT
 */
export type UnlockLockablePayload = TypeData<t_UnlockLockablePayload>

/**
 * @name AddAssigneesToAssignablePayload
 * @type OBJECT
 */
export type AddAssigneesToAssignablePayload = TypeData<
  t_AddAssigneesToAssignablePayload
>

/**
 * @name RemoveAssigneesFromAssignablePayload
 * @type OBJECT
 */
export type RemoveAssigneesFromAssignablePayload = TypeData<
  t_RemoveAssigneesFromAssignablePayload
>

/**
 * @name AddLabelsToLabelablePayload
 * @type OBJECT
 */
export type AddLabelsToLabelablePayload = TypeData<
  t_AddLabelsToLabelablePayload
>

/**
 * @name CreateIssuePayload
 * @type OBJECT
 */
export type CreateIssuePayload = TypeData<t_CreateIssuePayload>

/**
 * @name ClearLabelsFromLabelablePayload
 * @type OBJECT
 */
export type ClearLabelsFromLabelablePayload = TypeData<
  t_ClearLabelsFromLabelablePayload
>

/**
 * @name RemoveLabelsFromLabelablePayload
 * @type OBJECT
 */
export type RemoveLabelsFromLabelablePayload = TypeData<
  t_RemoveLabelsFromLabelablePayload
>

/**
 * @name CloseIssuePayload
 * @type OBJECT
 */
export type CloseIssuePayload = TypeData<t_CloseIssuePayload>

/**
 * @name ReopenIssuePayload
 * @type OBJECT
 */
export type ReopenIssuePayload = TypeData<t_ReopenIssuePayload>

/**
 * @name TransferIssuePayload
 * @type OBJECT
 */
export type TransferIssuePayload = TypeData<t_TransferIssuePayload>

/**
 * @name DeleteIssueCommentPayload
 * @type OBJECT
 */
export type DeleteIssueCommentPayload = TypeData<t_DeleteIssueCommentPayload>

/**
 * @name UpdateIssuePayload
 * @type OBJECT
 */
export type UpdateIssuePayload = TypeData<t_UpdateIssuePayload>

/**
 * @name DeleteIssuePayload
 * @type OBJECT
 */
export type DeleteIssuePayload = TypeData<t_DeleteIssuePayload>

/**
 * @name CreatePullRequestPayload
 * @type OBJECT
 */
export type CreatePullRequestPayload = TypeData<t_CreatePullRequestPayload>

/**
 * @name UpdatePullRequestPayload
 * @type OBJECT
 */
export type UpdatePullRequestPayload = TypeData<t_UpdatePullRequestPayload>

/**
 * @name PullRequestUpdateState
 * @type ENUM
 */
export type PullRequestUpdateState = TypeData<t_PullRequestUpdateState>

/**
 * @name ClosePullRequestPayload
 * @type OBJECT
 */
export type ClosePullRequestPayload = TypeData<t_ClosePullRequestPayload>

/**
 * @name ReopenPullRequestPayload
 * @type OBJECT
 */
export type ReopenPullRequestPayload = TypeData<t_ReopenPullRequestPayload>

/**
 * @name MergePullRequestPayload
 * @type OBJECT
 */
export type MergePullRequestPayload = TypeData<t_MergePullRequestPayload>

/**
 * @name PullRequestMergeMethod
 * @type ENUM
 */
export type PullRequestMergeMethod = TypeData<t_PullRequestMergeMethod>

/**
 * @name DeletePullRequestReviewCommentPayload
 * @type OBJECT
 */
export type DeletePullRequestReviewCommentPayload = TypeData<
  t_DeletePullRequestReviewCommentPayload
>

/**
 * @name AddPullRequestReviewPayload
 * @type OBJECT
 */
export type AddPullRequestReviewPayload = TypeData<
  t_AddPullRequestReviewPayload
>

/**
 * @name PullRequestReviewEvent
 * @type ENUM
 */
export type PullRequestReviewEvent = TypeData<t_PullRequestReviewEvent>

/**
 * @name SubmitPullRequestReviewPayload
 * @type OBJECT
 */
export type SubmitPullRequestReviewPayload = TypeData<
  t_SubmitPullRequestReviewPayload
>

/**
 * @name UpdatePullRequestReviewPayload
 * @type OBJECT
 */
export type UpdatePullRequestReviewPayload = TypeData<
  t_UpdatePullRequestReviewPayload
>

/**
 * @name DismissPullRequestReviewPayload
 * @type OBJECT
 */
export type DismissPullRequestReviewPayload = TypeData<
  t_DismissPullRequestReviewPayload
>

/**
 * @name DeletePullRequestReviewPayload
 * @type OBJECT
 */
export type DeletePullRequestReviewPayload = TypeData<
  t_DeletePullRequestReviewPayload
>

/**
 * @name ResolveReviewThreadPayload
 * @type OBJECT
 */
export type ResolveReviewThreadPayload = TypeData<t_ResolveReviewThreadPayload>

/**
 * @name UnresolveReviewThreadPayload
 * @type OBJECT
 */
export type UnresolveReviewThreadPayload = TypeData<
  t_UnresolveReviewThreadPayload
>

/**
 * @name AddPullRequestReviewCommentPayload
 * @type OBJECT
 */
export type AddPullRequestReviewCommentPayload = TypeData<
  t_AddPullRequestReviewCommentPayload
>

/**
 * @name UpdatePullRequestReviewCommentPayload
 * @type OBJECT
 */
export type UpdatePullRequestReviewCommentPayload = TypeData<
  t_UpdatePullRequestReviewCommentPayload
>

/**
 * @name UpdateEnterpriseProfilePayload
 * @type OBJECT
 */
export type UpdateEnterpriseProfilePayload = TypeData<
  t_UpdateEnterpriseProfilePayload
>

/**
 * @name InviteEnterpriseAdminPayload
 * @type OBJECT
 */
export type InviteEnterpriseAdminPayload = TypeData<
  t_InviteEnterpriseAdminPayload
>

/**
 * @name AcceptEnterpriseAdministratorInvitationPayload
 * @type OBJECT
 */
export type AcceptEnterpriseAdministratorInvitationPayload = TypeData<
  t_AcceptEnterpriseAdministratorInvitationPayload
>

/**
 * @name CancelEnterpriseAdminInvitationPayload
 * @type OBJECT
 */
export type CancelEnterpriseAdminInvitationPayload = TypeData<
  t_CancelEnterpriseAdminInvitationPayload
>

/**
 * @name RemoveEnterpriseAdminPayload
 * @type OBJECT
 */
export type RemoveEnterpriseAdminPayload = TypeData<
  t_RemoveEnterpriseAdminPayload
>

/**
 * @name RemoveEnterpriseOrganizationPayload
 * @type OBJECT
 */
export type RemoveEnterpriseOrganizationPayload = TypeData<
  t_RemoveEnterpriseOrganizationPayload
>

/**
 * @name CreateEnterpriseOrganizationPayload
 * @type OBJECT
 */
export type CreateEnterpriseOrganizationPayload = TypeData<
  t_CreateEnterpriseOrganizationPayload
>

/**
 * @name RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
 * @type OBJECT
 */
export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = TypeData<
  t_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
>

/**
 * @name UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
>

/**
 * @name UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = TypeData<
  t_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
>

/**
 * @name UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = TypeData<
  t_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
>

/**
 * @name UpdateEnterpriseTeamDiscussionsSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseTeamDiscussionsSettingPayload = TypeData<
  t_UpdateEnterpriseTeamDiscussionsSettingPayload
>

/**
 * @name UpdateEnterpriseOrganizationProjectsSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseOrganizationProjectsSettingPayload = TypeData<
  t_UpdateEnterpriseOrganizationProjectsSettingPayload
>

/**
 * @name UpdateEnterpriseRepositoryProjectsSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseRepositoryProjectsSettingPayload = TypeData<
  t_UpdateEnterpriseRepositoryProjectsSettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanMakePurchasesSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanMakePurchasesSettingPayload
>

/**
 * @name UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = TypeData<
  t_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
>

/**
 * @name UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = TypeData<
  t_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
>

/**
 * @name UpdateEnterpriseActionExecutionCapabilitySettingPayload
 * @type OBJECT
 */
export type UpdateEnterpriseActionExecutionCapabilitySettingPayload = TypeData<
  t_UpdateEnterpriseActionExecutionCapabilitySettingPayload
>

/**
 * @name UpdateEnterpriseAdministratorRolePayload
 * @type OBJECT
 */
export type UpdateEnterpriseAdministratorRolePayload = TypeData<
  t_UpdateEnterpriseAdministratorRolePayload
>

/**
 * @name RemoveOutsideCollaboratorPayload
 * @type OBJECT
 */
export type RemoveOutsideCollaboratorPayload = TypeData<
  t_RemoveOutsideCollaboratorPayload
>

/**
 * @name RequestReviewsPayload
 * @type OBJECT
 */
export type RequestReviewsPayload = TypeData<t_RequestReviewsPayload>

/**
 * @name RegistryPackageFileState
 * @type ENUM
 */
export type RegistryPackageFileState = TypeData<t_RegistryPackageFileState>

/**
 * @name CloneTemplateRepositoryPayload
 * @type OBJECT
 */
export type CloneTemplateRepositoryPayload = TypeData<
  t_CloneTemplateRepositoryPayload
>

/**
 * @name CreateRepositoryPayload
 * @type OBJECT
 */
export type CreateRepositoryPayload = TypeData<t_CreateRepositoryPayload>

/**
 * @name UpdateRepositoryPayload
 * @type OBJECT
 */
export type UpdateRepositoryPayload = TypeData<t_UpdateRepositoryPayload>

/**
 * @name CreateRefPayload
 * @type OBJECT
 */
export type CreateRefPayload = TypeData<t_CreateRefPayload>

/**
 * @name UpdateRefPayload
 * @type OBJECT
 */
export type UpdateRefPayload = TypeData<t_UpdateRefPayload>

/**
 * @name DeleteRefPayload
 * @type OBJECT
 */
export type DeleteRefPayload = TypeData<t_DeleteRefPayload>

/**
 * @name MergeBranchPayload
 * @type OBJECT
 */
export type MergeBranchPayload = TypeData<t_MergeBranchPayload>

/**
 * @name AddStarPayload
 * @type OBJECT
 */
export type AddStarPayload = TypeData<t_AddStarPayload>

/**
 * @name RemoveStarPayload
 * @type OBJECT
 */
export type RemoveStarPayload = TypeData<t_RemoveStarPayload>

/**
 * @name AcceptTopicSuggestionPayload
 * @type OBJECT
 */
export type AcceptTopicSuggestionPayload = TypeData<
  t_AcceptTopicSuggestionPayload
>

/**
 * @name DeclineTopicSuggestionPayload
 * @type OBJECT
 */
export type DeclineTopicSuggestionPayload = TypeData<
  t_DeclineTopicSuggestionPayload
>

/**
 * @name TopicSuggestionDeclineReason
 * @type ENUM
 */
export type TopicSuggestionDeclineReason = TypeData<
  t_TopicSuggestionDeclineReason
>

/**
 * @name UpdateTopicsPayload
 * @type OBJECT
 */
export type UpdateTopicsPayload = TypeData<t_UpdateTopicsPayload>

/**
 * @name CreateTeamDiscussionPayload
 * @type OBJECT
 */
export type CreateTeamDiscussionPayload = TypeData<
  t_CreateTeamDiscussionPayload
>

/**
 * @name UpdateTeamDiscussionPayload
 * @type OBJECT
 */
export type UpdateTeamDiscussionPayload = TypeData<
  t_UpdateTeamDiscussionPayload
>

/**
 * @name DeleteTeamDiscussionPayload
 * @type OBJECT
 */
export type DeleteTeamDiscussionPayload = TypeData<
  t_DeleteTeamDiscussionPayload
>

/**
 * @name CreateTeamDiscussionCommentPayload
 * @type OBJECT
 */
export type CreateTeamDiscussionCommentPayload = TypeData<
  t_CreateTeamDiscussionCommentPayload
>

/**
 * @name UpdateTeamDiscussionCommentPayload
 * @type OBJECT
 */
export type UpdateTeamDiscussionCommentPayload = TypeData<
  t_UpdateTeamDiscussionCommentPayload
>

/**
 * @name DeleteTeamDiscussionCommentPayload
 * @type OBJECT
 */
export type DeleteTeamDiscussionCommentPayload = TypeData<
  t_DeleteTeamDiscussionCommentPayload
>

/**
 * @name CreateBranchProtectionRulePayload
 * @type OBJECT
 */
export type CreateBranchProtectionRulePayload = TypeData<
  t_CreateBranchProtectionRulePayload
>

/**
 * @name UpdateBranchProtectionRulePayload
 * @type OBJECT
 */
export type UpdateBranchProtectionRulePayload = TypeData<
  t_UpdateBranchProtectionRulePayload
>

/**
 * @name DeleteBranchProtectionRulePayload
 * @type OBJECT
 */
export type DeleteBranchProtectionRulePayload = TypeData<
  t_DeleteBranchProtectionRulePayload
>

/**
 * @name ChangeUserStatusPayload
 * @type OBJECT
 */
export type ChangeUserStatusPayload = TypeData<t_ChangeUserStatusPayload>

/**
 * @name FollowUserPayload
 * @type OBJECT
 */
export type FollowUserPayload = TypeData<t_FollowUserPayload>

/**
 * @name UnfollowUserPayload
 * @type OBJECT
 */
export type UnfollowUserPayload = TypeData<t_UnfollowUserPayload>

/**
 * @name ContentAttachment
 * @type OBJECT
 */
export type ContentAttachment = TypeData<t_ContentAttachment>

/**
 * @name ContentReference
 * @type OBJECT
 */
export type ContentReference = TypeData<t_ContentReference>

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>

/**
 * @name GpgSignature
 * @type OBJECT
 * @implements GitSignature
 */
export type GpgSignature = TypeData<t_GpgSignature>

/**
 * @name SmimeSignature
 * @type OBJECT
 * @implements GitSignature
 */
export type SmimeSignature = TypeData<t_SmimeSignature>

/**
 * @name Tag
 * @type OBJECT
 * @implements Node, GitObject
 */
export type Tag = TypeData<t_Tag>

/**
 * @name UnknownSignature
 * @type OBJECT
 * @implements GitSignature
 */
export type UnknownSignature = TypeData<t_UnknownSignature>

/**
 * @name GenericHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
export type GenericHovercardContext = TypeData<t_GenericHovercardContext>

/**
 * @name OrganizationsHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
export type OrganizationsHovercardContext = TypeData<
  t_OrganizationsHovercardContext
>

/**
 * @name OrganizationTeamsHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
export type OrganizationTeamsHovercardContext = TypeData<
  t_OrganizationTeamsHovercardContext
>

/**
 * @name ViewerHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
export type ViewerHovercardContext = TypeData<t_ViewerHovercardContext>

/**
 * @name ReviewStatusHovercardContext
 * @type OBJECT
 * @implements HovercardContext
 */
export type ReviewStatusHovercardContext = TypeData<
  t_ReviewStatusHovercardContext
>
