// @ts-nocheck
import * as extensions from '../extensions'
import { lazyGetters } from '@gqless/utils'
import {
  ScalarNode,
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  InterfaceNode,
  EnumNode,
  UnionNode,
  InputNode,
  InputNodeField,
} from 'gqless'

export const schema = {
  get Boolean() {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean,
    })
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String,
    })
  },
  get Query() {
    return new ObjectNode(
      {
        get codeOfConduct() {
          return new FieldNode(
            schema.CodeOfConduct,
            new Arguments(
              {
                get key() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get codesOfConduct() {
          return new FieldNode(
            new ArrayNode(schema.CodeOfConduct, true),
            undefined,
            true
          )
        },
        get enterprise() {
          return new FieldNode(
            schema.Enterprise,
            new Arguments({
              get slug() {
                return new ArgumentsField(schema.String, false)
              },
              get invitationToken() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
        get enterpriseAdministratorInvitation() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitation,
            new Arguments(
              {
                get userLogin() {
                  return new ArgumentsField(schema.String, false)
                },
                get enterpriseSlug() {
                  return new ArgumentsField(schema.String, false)
                },
                get role() {
                  return new ArgumentsField(
                    schema.EnterpriseAdministratorRole,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get enterpriseAdministratorInvitationByToken() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitation,
            new Arguments(
              {
                get invitationToken() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get license() {
          return new FieldNode(
            schema.License,
            new Arguments(
              {
                get key() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get licenses() {
          return new FieldNode(
            new ArrayNode(schema.License, false),
            undefined,
            false
          )
        },
        get marketplaceCategories() {
          return new FieldNode(
            new ArrayNode(schema.MarketplaceCategory, false),
            new Arguments({
              get includeCategories() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get excludeEmpty() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludeSubcategories() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get marketplaceCategory() {
          return new FieldNode(
            schema.MarketplaceCategory,
            new Arguments({
              get slug() {
                return new ArgumentsField(schema.String, false)
              },
              get useTopicAliases() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            true
          )
        },
        get marketplaceListing() {
          return new FieldNode(
            schema.MarketplaceListing,
            new Arguments(
              {
                get slug() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get marketplaceListings() {
          return new FieldNode(
            schema.MarketplaceListingConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get categorySlug() {
                return new ArgumentsField(schema.String, true)
              },
              get useTopicAliases() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get viewerCanAdmin() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get adminId() {
                return new ArgumentsField(schema.ID, true)
              },
              get organizationId() {
                return new ArgumentsField(schema.ID, true)
              },
              get allStates() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get slugs() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get primaryCategoryOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get withFreeTrialsOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get meta() {
          return new FieldNode(schema.GitHubMetadata, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.Node,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false)
                },
              },
              true
            ),
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Node, false),
            new Arguments(
              {
                get ids() {
                  return new ArgumentsField(
                    new ArrayNode(schema.ID, false),
                    false
                  )
                },
              },
              true
            ),
            false
          )
        },
        get organization() {
          return new FieldNode(
            schema.Organization,
            new Arguments(
              {
                get login() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get rateLimit() {
          return new FieldNode(
            schema.RateLimit,
            new Arguments({
              get dryRun() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            true
          )
        },
        get relay() {
          return new FieldNode(schema.Query, undefined, false)
        },
        get repository() {
          return new FieldNode(
            schema.Repository,
            new Arguments(
              {
                get owner() {
                  return new ArgumentsField(schema.String, false)
                },
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get repositoryOwner() {
          return new FieldNode(
            schema.RepositoryOwner,
            new Arguments(
              {
                get login() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get resource() {
          return new FieldNode(
            schema.UniformResourceLocatable,
            new Arguments(
              {
                get url() {
                  return new ArgumentsField(schema.URI, false)
                },
              },
              true
            ),
            true
          )
        },
        get search() {
          return new FieldNode(
            schema.SearchResultItemConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, false)
              },
              get type() {
                return new ArgumentsField(schema.SearchType, false)
              },
            }),
            false
          )
        },
        get securityAdvisories() {
          return new FieldNode(
            schema.SecurityAdvisoryConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.SecurityAdvisoryOrder, true)
              },
              get identifier() {
                return new ArgumentsField(
                  schema.SecurityAdvisoryIdentifierFilter,
                  true
                )
              },
              get publishedSince() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get updatedSince() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get securityAdvisory() {
          return new FieldNode(
            schema.SecurityAdvisory,
            new Arguments(
              {
                get ghsaId() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get securityVulnerabilities() {
          return new FieldNode(
            schema.SecurityVulnerabilityConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  schema.SecurityVulnerabilityOrder,
                  true
                )
              },
              get ecosystem() {
                return new ArgumentsField(
                  schema.SecurityAdvisoryEcosystem,
                  true
                )
              },
              get package() {
                return new ArgumentsField(schema.String, true)
              },
              get severities() {
                return new ArgumentsField(
                  new ArrayNode(schema.SecurityAdvisorySeverity, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get sponsorsListing() {
          return new FieldNode(
            schema.SponsorsListing,
            new Arguments(
              {
                get slug() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get topic() {
          return new FieldNode(
            schema.Topic,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get user() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get login() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get viewer() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      { name: 'Query', extension: ((extensions as any) || {}).Query }
    )
  },
  get Node() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      [
        schema.AddedToProjectEvent,
        schema.App,
        schema.AssignedEvent,
        schema.BaseRefChangedEvent,
        schema.BaseRefForcePushedEvent,
        schema.Blob,
        schema.Bot,
        schema.BranchProtectionRule,
        schema.ClosedEvent,
        schema.CodeOfConduct,
        schema.CommentDeletedEvent,
        schema.Commit,
        schema.CommitComment,
        schema.CommitCommentThread,
        schema.ConvertedNoteToIssueEvent,
        schema.CrossReferencedEvent,
        schema.DemilestonedEvent,
        schema.DeployKey,
        schema.DeployedEvent,
        schema.Deployment,
        schema.DeploymentEnvironmentChangedEvent,
        schema.DeploymentStatus,
        schema.Enterprise,
        schema.EnterpriseAdministratorInvitation,
        schema.EnterpriseIdentityProvider,
        schema.EnterpriseRepositoryInfo,
        schema.EnterpriseServerInstallation,
        schema.EnterpriseServerUserAccount,
        schema.EnterpriseServerUserAccountEmail,
        schema.EnterpriseServerUserAccountsUpload,
        schema.EnterpriseUserAccount,
        schema.ExternalIdentity,
        schema.Gist,
        schema.GistComment,
        schema.HeadRefDeletedEvent,
        schema.HeadRefForcePushedEvent,
        schema.HeadRefRestoredEvent,
        schema.Issue,
        schema.IssueComment,
        schema.Label,
        schema.LabeledEvent,
        schema.Language,
        schema.License,
        schema.LockedEvent,
        schema.Mannequin,
        schema.MarkedAsDuplicateEvent,
        schema.MarketplaceCategory,
        schema.MarketplaceListing,
        schema.MembersCanDeleteReposClearAuditEntry,
        schema.MembersCanDeleteReposDisableAuditEntry,
        schema.MembersCanDeleteReposEnableAuditEntry,
        schema.MentionedEvent,
        schema.MergedEvent,
        schema.Milestone,
        schema.MilestonedEvent,
        schema.MovedColumnsInProjectEvent,
        schema.OauthApplicationCreateAuditEntry,
        schema.OrgAddBillingManagerAuditEntry,
        schema.OrgAddMemberAuditEntry,
        schema.OrgBlockUserAuditEntry,
        schema.OrgConfigDisableCollaboratorsOnlyAuditEntry,
        schema.OrgConfigEnableCollaboratorsOnlyAuditEntry,
        schema.OrgCreateAuditEntry,
        schema.OrgDisableOauthAppRestrictionsAuditEntry,
        schema.OrgDisableSamlAuditEntry,
        schema.OrgDisableTwoFactorRequirementAuditEntry,
        schema.OrgEnableOauthAppRestrictionsAuditEntry,
        schema.OrgEnableSamlAuditEntry,
        schema.OrgEnableTwoFactorRequirementAuditEntry,
        schema.OrgInviteMemberAuditEntry,
        schema.OrgInviteToBusinessAuditEntry,
        schema.OrgOauthAppAccessApprovedAuditEntry,
        schema.OrgOauthAppAccessDeniedAuditEntry,
        schema.OrgOauthAppAccessRequestedAuditEntry,
        schema.OrgRemoveBillingManagerAuditEntry,
        schema.OrgRemoveMemberAuditEntry,
        schema.OrgRemoveOutsideCollaboratorAuditEntry,
        schema.OrgRestoreMemberAuditEntry,
        schema.OrgUnblockUserAuditEntry,
        schema.OrgUpdateDefaultRepositoryPermissionAuditEntry,
        schema.OrgUpdateMemberAuditEntry,
        schema.OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
        schema.OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
        schema.Organization,
        schema.OrganizationIdentityProvider,
        schema.OrganizationInvitation,
        schema.PinnedEvent,
        schema.PrivateRepositoryForkingDisableAuditEntry,
        schema.PrivateRepositoryForkingEnableAuditEntry,
        schema.Project,
        schema.ProjectCard,
        schema.ProjectColumn,
        schema.PublicKey,
        schema.PullRequest,
        schema.PullRequestCommit,
        schema.PullRequestCommitCommentThread,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.PullRequestReviewThread,
        schema.PushAllowance,
        schema.Reaction,
        schema.ReadyForReviewEvent,
        schema.Ref,
        schema.ReferencedEvent,
        schema.RegistryPackage,
        schema.RegistryPackageDependency,
        schema.RegistryPackageFile,
        schema.RegistryPackageTag,
        schema.RegistryPackageVersion,
        schema.Release,
        schema.ReleaseAsset,
        schema.RemovedFromProjectEvent,
        schema.RenamedTitleEvent,
        schema.ReopenedEvent,
        schema.RepoAccessAuditEntry,
        schema.RepoAddMemberAuditEntry,
        schema.RepoAddTopicAuditEntry,
        schema.RepoArchivedAuditEntry,
        schema.RepoChangeMergeSettingAuditEntry,
        schema.RepoConfigDisableAnonymousGitAccessAuditEntry,
        schema.RepoConfigDisableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigDisableContributorsOnlyAuditEntry,
        schema.RepoConfigDisableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigEnableAnonymousGitAccessAuditEntry,
        schema.RepoConfigEnableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigEnableContributorsOnlyAuditEntry,
        schema.RepoConfigEnableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigLockAnonymousGitAccessAuditEntry,
        schema.RepoConfigUnlockAnonymousGitAccessAuditEntry,
        schema.RepoCreateAuditEntry,
        schema.RepoDestroyAuditEntry,
        schema.RepoRemoveMemberAuditEntry,
        schema.RepoRemoveTopicAuditEntry,
        schema.Repository,
        schema.RepositoryInvitation,
        schema.RepositoryTopic,
        schema.RepositoryVisibilityChangeDisableAuditEntry,
        schema.RepositoryVisibilityChangeEnableAuditEntry,
        schema.RepositoryVulnerabilityAlert,
        schema.ReviewDismissalAllowance,
        schema.ReviewDismissedEvent,
        schema.ReviewRequest,
        schema.ReviewRequestRemovedEvent,
        schema.ReviewRequestedEvent,
        schema.SavedReply,
        schema.SecurityAdvisory,
        schema.SponsorsListing,
        schema.SponsorsTier,
        schema.Sponsorship,
        schema.Status,
        schema.StatusContext,
        schema.SubscribedEvent,
        schema.Tag,
        schema.Team,
        schema.TeamAddMemberAuditEntry,
        schema.TeamAddRepositoryAuditEntry,
        schema.TeamChangeParentTeamAuditEntry,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
        schema.TeamRemoveMemberAuditEntry,
        schema.TeamRemoveRepositoryAuditEntry,
        schema.Topic,
        schema.TransferredEvent,
        schema.Tree,
        schema.UnassignedEvent,
        schema.UnlabeledEvent,
        schema.UnlockedEvent,
        schema.UnpinnedEvent,
        schema.UnsubscribedEvent,
        schema.User,
        schema.UserBlockedEvent,
        schema.UserContentEdit,
        schema.UserStatus,
      ],
      { name: 'Node', extension: ((extensions as any) || {}).Node }
    )
  },
  get ID() {
    return new ScalarNode({
      name: 'ID',
      extension: ((extensions as any) || {}).ID,
    })
  },
  get UniformResourceLocatable() {
    return new InterfaceNode(
      {
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      [
        schema.Bot,
        schema.ClosedEvent,
        schema.Commit,
        schema.CrossReferencedEvent,
        schema.Gist,
        schema.Issue,
        schema.Mannequin,
        schema.MergedEvent,
        schema.Milestone,
        schema.Organization,
        schema.PullRequest,
        schema.PullRequestCommit,
        schema.ReadyForReviewEvent,
        schema.Release,
        schema.Repository,
        schema.RepositoryTopic,
        schema.ReviewDismissedEvent,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
        schema.User,
      ],
      {
        name: 'UniformResourceLocatable',
        extension: ((extensions as any) || {}).UniformResourceLocatable,
      }
    )
  },
  get URI() {
    return new ScalarNode({
      name: 'URI',
      extension: ((extensions as any) || {}).URI,
    })
  },
  get User() {
    return new ObjectNode(
      {
        get anyPinnableItems() {
          return new FieldNode(
            schema.Boolean,
            new Arguments({
              get type() {
                return new ArgumentsField(schema.PinnableItemType, true)
              },
            }),
            false
          )
        },
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get bio() {
          return new FieldNode(schema.String, undefined, true)
        },
        get bioHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get commitComments() {
          return new FieldNode(
            schema.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get company() {
          return new FieldNode(schema.String, undefined, true)
        },
        get companyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get contributionsCollection() {
          return new FieldNode(
            schema.ContributionsCollection,
            new Arguments({
              get organizationID() {
                return new ArgumentsField(schema.ID, true)
              },
              get from() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get to() {
                return new ArgumentsField(schema.DateTime, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get email() {
          return new FieldNode(schema.String, undefined, false)
        },
        get followers() {
          return new FieldNode(
            schema.FollowerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get following() {
          return new FieldNode(
            schema.FollowingConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get gist() {
          return new FieldNode(
            schema.Gist,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get gistComments() {
          return new FieldNode(
            schema.GistCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get gists() {
          return new FieldNode(
            schema.GistConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.GistPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.GistOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get hovercard() {
          return new FieldNode(
            schema.Hovercard,
            new Arguments({
              get primarySubjectId() {
                return new ArgumentsField(schema.ID, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isBountyHunter() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isCampusExpert() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isDeveloperProgramMember() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isEmployee() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isHireable() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isSiteAdmin() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isViewer() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get issueComments() {
          return new FieldNode(
            schema.IssueCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get issues() {
          return new FieldNode(
            schema.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.IssueState, true),
                  true
                )
              },
              get filterBy() {
                return new ArgumentsField(schema.IssueFilters, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get itemShowcase() {
          return new FieldNode(schema.ProfileItemShowcase, undefined, false)
        },
        get location() {
          return new FieldNode(schema.String, undefined, true)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organization() {
          return new FieldNode(
            schema.Organization,
            new Arguments(
              {
                get login() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get organizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnableItems() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get types() {
                return new ArgumentsField(
                  new ArrayNode(schema.PinnableItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnedItems() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get types() {
                return new ArgumentsField(
                  new ArrayNode(schema.PinnableItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnedItemsRemaining() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get pinnedRepositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get project() {
          return new FieldNode(
            schema.Project,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get projects() {
          return new FieldNode(
            schema.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(schema.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get projectsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get publicKeys() {
          return new FieldNode(
            schema.PublicKeyConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pullRequests() {
          return new FieldNode(
            schema.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get registryPackages() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get name() {
                return new ArgumentsField(schema.String, true)
              },
              get names() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get repositoryId() {
                return new ArgumentsField(schema.ID, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
              get registryPackageType() {
                return new ArgumentsField(schema.String, true)
              },
              get publicOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get registryPackagesForQuery() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
            }),
            false
          )
        },
        get repositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get isFork() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get repositoriesContributedTo() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get includeUserRepositories() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get contributionTypes() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryContributionType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(
            schema.Repository,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get savedReplies() {
          return new FieldNode(
            schema.SavedReplyConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SavedReplyOrder, true)
              },
            }),
            true
          )
        },
        get sponsorshipsAsMaintainer() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get includePrivate() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
        get sponsorshipsAsSponsor() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
        get starredRepositories() {
          return new FieldNode(
            schema.StarredRepositoryConnection,
            new Arguments({
              get ownedByViewer() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.StarOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get status() {
          return new FieldNode(schema.UserStatus, undefined, true)
        },
        get topRepositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, false)
              },
              get since() {
                return new ArgumentsField(schema.DateTime, true)
              },
            }),
            false
          )
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanChangePinnedItems() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanFollow() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerIsFollowing() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get watching() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get websiteUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      { name: 'User', extension: ((extensions as any) || {}).User }
    )
  },
  get Actor() {
    return new InterfaceNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      [
        schema.Bot,
        schema.EnterpriseUserAccount,
        schema.Mannequin,
        schema.Organization,
        schema.User,
      ],
      { name: 'Actor', extension: ((extensions as any) || {}).Actor }
    )
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int,
    })
  },
  get PageInfo() {
    return new ObjectNode(
      {
        get endCursor() {
          return new FieldNode(schema.String, undefined, true)
        },
        get hasNextPage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasPreviousPage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get startCursor() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'PageInfo', extension: ((extensions as any) || {}).PageInfo }
    )
  },
  get DateTime() {
    return new ScalarNode({
      name: 'DateTime',
      extension: ((extensions as any) || {}).DateTime,
    })
  },
  get RegistryPackageOwner() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get registryPackages() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get name() {
                return new ArgumentsField(schema.String, true)
              },
              get names() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get repositoryId() {
                return new ArgumentsField(schema.ID, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
              get registryPackageType() {
                return new ArgumentsField(schema.String, true)
              },
              get publicOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
      },
      [schema.Organization, schema.Repository, schema.User],
      {
        name: 'RegistryPackageOwner',
        extension: ((extensions as any) || {}).RegistryPackageOwner,
      }
    )
  },
  get RegistryPackageConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackage, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageConnection',
        extension: ((extensions as any) || {}).RegistryPackageConnection,
      }
    )
  },
  get RegistryPackageEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.RegistryPackage, undefined, true)
        },
      },
      {
        name: 'RegistryPackageEdge',
        extension: ((extensions as any) || {}).RegistryPackageEdge,
      }
    )
  },
  get RegistryPackage() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get latestVersion() {
          return new FieldNode(schema.RegistryPackageVersion, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get nameWithOwner() {
          return new FieldNode(schema.String, undefined, false)
        },
        get packageFileByGuid() {
          return new FieldNode(
            schema.RegistryPackageFile,
            new Arguments(
              {
                get guid() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get packageFileBySha256() {
          return new FieldNode(
            schema.RegistryPackageFile,
            new Arguments(
              {
                get sha256() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get packageType() {
          return new FieldNode(schema.RegistryPackageType, undefined, false)
        },
        get preReleaseVersions() {
          return new FieldNode(
            schema.RegistryPackageVersionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get registryPackageType() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get statistics() {
          return new FieldNode(
            schema.RegistryPackageStatistics,
            undefined,
            true
          )
        },
        get tags() {
          return new FieldNode(
            schema.RegistryPackageTagConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get topics() {
          return new FieldNode(
            schema.TopicConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get version() {
          return new FieldNode(
            schema.RegistryPackageVersion,
            new Arguments(
              {
                get version() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get versionByPlatform() {
          return new FieldNode(
            schema.RegistryPackageVersion,
            new Arguments(
              {
                get version() {
                  return new ArgumentsField(schema.String, false)
                },
                get platform() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get versionBySha256() {
          return new FieldNode(
            schema.RegistryPackageVersion,
            new Arguments(
              {
                get sha256() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get versions() {
          return new FieldNode(
            schema.RegistryPackageVersionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get versionsByMetadatum() {
          return new FieldNode(
            schema.RegistryPackageVersionConnection,
            new Arguments({
              get metadatum() {
                return new ArgumentsField(
                  schema.RegistryPackageMetadatum,
                  false
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
      },
      {
        name: 'RegistryPackage',
        extension: ((extensions as any) || {}).RegistryPackage,
      }
    )
  },
  get RegistryPackageType() {
    return new EnumNode({ name: 'RegistryPackageType' })
  },
  get Repository() {
    return new ObjectNode(
      {
        get assignableUsers() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get branchProtectionRules() {
          return new FieldNode(
            schema.BranchProtectionRuleConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get codeOfConduct() {
          return new FieldNode(schema.CodeOfConduct, undefined, true)
        },
        get collaborators() {
          return new FieldNode(
            schema.RepositoryCollaboratorConnection,
            new Arguments({
              get affiliation() {
                return new ArgumentsField(schema.CollaboratorAffiliation, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get commitComments() {
          return new FieldNode(
            schema.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get defaultBranchRef() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get deployKeys() {
          return new FieldNode(
            schema.DeployKeyConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get deployments() {
          return new FieldNode(
            schema.DeploymentConnection,
            new Arguments({
              get environments() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.DeploymentOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get descriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get diskUsage() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get forkCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get forks() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get hasIssuesEnabled() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasWikiEnabled() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get homepageUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isArchived() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isDisabled() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isFork() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isLocked() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isMirror() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPrivate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isTemplate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get issue() {
          return new FieldNode(
            schema.Issue,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get issueOrPullRequest() {
          return new FieldNode(
            schema.IssueOrPullRequest,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get issues() {
          return new FieldNode(
            schema.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.IssueState, true),
                  true
                )
              },
              get filterBy() {
                return new ArgumentsField(schema.IssueFilters, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get label() {
          return new FieldNode(
            schema.Label,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get labels() {
          return new FieldNode(
            schema.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
        get languages() {
          return new FieldNode(
            schema.LanguageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.LanguageOrder, true)
              },
            }),
            true
          )
        },
        get licenseInfo() {
          return new FieldNode(schema.License, undefined, true)
        },
        get lockReason() {
          return new FieldNode(schema.RepositoryLockReason, undefined, true)
        },
        get mentionableUsers() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get mergeCommitAllowed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get milestone() {
          return new FieldNode(
            schema.Milestone,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get milestones() {
          return new FieldNode(
            schema.MilestoneConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.MilestoneState, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.MilestoneOrder, true)
              },
            }),
            true
          )
        },
        get mirrorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get nameWithOwner() {
          return new FieldNode(schema.String, undefined, false)
        },
        get object() {
          return new FieldNode(
            schema.GitObject,
            new Arguments({
              get oid() {
                return new ArgumentsField(schema.GitObjectID, true)
              },
              get expression() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
        get openGraphImageUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get owner() {
          return new FieldNode(schema.RepositoryOwner, undefined, false)
        },
        get parent() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get primaryLanguage() {
          return new FieldNode(schema.Language, undefined, true)
        },
        get project() {
          return new FieldNode(
            schema.Project,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get projects() {
          return new FieldNode(
            schema.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(schema.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get projectsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(
            schema.PullRequest,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get pullRequests() {
          return new FieldNode(
            schema.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pushedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get rebaseMergeAllowed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get ref() {
          return new FieldNode(
            schema.Ref,
            new Arguments(
              {
                get qualifiedName() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get refs() {
          return new FieldNode(
            schema.RefConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get refPrefix() {
                return new ArgumentsField(schema.String, false)
              },
              get direction() {
                return new ArgumentsField(schema.OrderDirection, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RefOrder, true)
              },
            }),
            true
          )
        },
        get registryPackages() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get name() {
                return new ArgumentsField(schema.String, true)
              },
              get names() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get repositoryId() {
                return new ArgumentsField(schema.ID, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
              get registryPackageType() {
                return new ArgumentsField(schema.String, true)
              },
              get publicOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get registryPackagesForQuery() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
            }),
            false
          )
        },
        get release() {
          return new FieldNode(
            schema.Release,
            new Arguments(
              {
                get tagName() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get releases() {
          return new FieldNode(
            schema.ReleaseConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReleaseOrder, true)
              },
            }),
            false
          )
        },
        get repositoryTopics() {
          return new FieldNode(
            schema.RepositoryTopicConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get shortDescriptionHTML() {
          return new FieldNode(
            schema.HTML,
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get squashMergeAllowed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get sshUrl() {
          return new FieldNode(schema.GitSSHRemote, undefined, false)
        },
        get stargazers() {
          return new FieldNode(
            schema.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.StarOrder, true)
              },
            }),
            false
          )
        },
        get templateRepository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get usesCustomOpenGraphImage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanAdminister() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdateTopics() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerHasStarred() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerPermission() {
          return new FieldNode(schema.RepositoryPermission, undefined, true)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
        get vulnerabilityAlerts() {
          return new FieldNode(
            schema.RepositoryVulnerabilityAlertConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get watchers() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      { name: 'Repository', extension: ((extensions as any) || {}).Repository }
    )
  },
  get ProjectOwner() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get project() {
          return new FieldNode(
            schema.Project,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get projects() {
          return new FieldNode(
            schema.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(schema.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get projectsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [schema.Organization, schema.Repository, schema.User],
      {
        name: 'ProjectOwner',
        extension: ((extensions as any) || {}).ProjectOwner,
      }
    )
  },
  get Project() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(schema.String, undefined, true)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get closed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get closedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get columns() {
          return new FieldNode(
            schema.ProjectColumnConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get owner() {
          return new FieldNode(schema.ProjectOwner, undefined, false)
        },
        get pendingCards() {
          return new FieldNode(
            schema.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get state() {
          return new FieldNode(schema.ProjectState, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      { name: 'Project', extension: ((extensions as any) || {}).Project }
    )
  },
  get Closable() {
    return new InterfaceNode(
      {
        get closed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get closedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
      },
      [schema.Issue, schema.Milestone, schema.Project, schema.PullRequest],
      { name: 'Closable', extension: ((extensions as any) || {}).Closable }
    )
  },
  get Updatable() {
    return new InterfaceNode(
      {
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [
        schema.CommitComment,
        schema.GistComment,
        schema.Issue,
        schema.IssueComment,
        schema.Project,
        schema.PullRequest,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
      ],
      { name: 'Updatable', extension: ((extensions as any) || {}).Updatable }
    )
  },
  get ProjectState() {
    return new EnumNode({ name: 'ProjectState' })
  },
  get HTML() {
    return new ScalarNode({
      name: 'HTML',
      extension: ((extensions as any) || {}).HTML,
    })
  },
  get ProjectColumnConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ProjectColumnEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.ProjectColumn, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ProjectColumnConnection',
        extension: ((extensions as any) || {}).ProjectColumnConnection,
      }
    )
  },
  get ProjectColumnEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.ProjectColumn, undefined, true)
        },
      },
      {
        name: 'ProjectColumnEdge',
        extension: ((extensions as any) || {}).ProjectColumnEdge,
      }
    )
  },
  get ProjectColumn() {
    return new ObjectNode(
      {
        get cards() {
          return new FieldNode(
            schema.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, false)
        },
        get purpose() {
          return new FieldNode(schema.ProjectColumnPurpose, undefined, true)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'ProjectColumn',
        extension: ((extensions as any) || {}).ProjectColumn,
      }
    )
  },
  get ProjectColumnPurpose() {
    return new EnumNode({ name: 'ProjectColumnPurpose' })
  },
  get ProjectCardConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ProjectCardEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.ProjectCard, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ProjectCardConnection',
        extension: ((extensions as any) || {}).ProjectCardConnection,
      }
    )
  },
  get ProjectCardEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.ProjectCard, undefined, true)
        },
      },
      {
        name: 'ProjectCardEdge',
        extension: ((extensions as any) || {}).ProjectCardEdge,
      }
    )
  },
  get ProjectCard() {
    return new ObjectNode(
      {
        get column() {
          return new FieldNode(schema.ProjectColumn, undefined, true)
        },
        get content() {
          return new FieldNode(schema.ProjectCardItem, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isArchived() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get note() {
          return new FieldNode(schema.String, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get state() {
          return new FieldNode(schema.ProjectCardState, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'ProjectCard',
        extension: ((extensions as any) || {}).ProjectCard,
      }
    )
  },
  get ProjectCardState() {
    return new EnumNode({ name: 'ProjectCardState' })
  },
  get ProjectCardItem() {
    return new UnionNode([schema.Issue, schema.PullRequest])
  },
  get Issue() {
    return new ObjectNode(
      {
        get activeLockReason() {
          return new FieldNode(schema.LockReason, undefined, true)
        },
        get assignees() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get closed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get closedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get comments() {
          return new FieldNode(
            schema.IssueCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get hovercard() {
          return new FieldNode(
            schema.Hovercard,
            new Arguments({
              get includeNotificationContexts() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get labels() {
          return new FieldNode(
            schema.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get locked() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get milestone() {
          return new FieldNode(schema.Milestone, undefined, true)
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get participants() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get projectCards() {
          return new FieldNode(
            schema.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get state() {
          return new FieldNode(schema.IssueState, undefined, false)
        },
        get timeline() {
          return new FieldNode(
            schema.IssueTimelineConnection,
            new Arguments({
              get since() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get timelineItems() {
          return new FieldNode(
            schema.IssueTimelineItemsConnection,
            new Arguments({
              get since() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get skip() {
                return new ArgumentsField(schema.Int, true)
              },
              get itemTypes() {
                return new ArgumentsField(
                  new ArrayNode(schema.IssueTimelineItemsItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
      },
      { name: 'Issue', extension: ((extensions as any) || {}).Issue }
    )
  },
  get Assignable() {
    return new InterfaceNode(
      {
        get assignees() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      [schema.Issue, schema.PullRequest],
      { name: 'Assignable', extension: ((extensions as any) || {}).Assignable }
    )
  },
  get UserConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.UserEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'UserConnection',
        extension: ((extensions as any) || {}).UserConnection,
      }
    )
  },
  get UserEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      { name: 'UserEdge', extension: ((extensions as any) || {}).UserEdge }
    )
  },
  get Comment() {
    return new InterfaceNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [
        schema.CommitComment,
        schema.GistComment,
        schema.Issue,
        schema.IssueComment,
        schema.PullRequest,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
      ],
      { name: 'Comment', extension: ((extensions as any) || {}).Comment }
    )
  },
  get UserContentEditConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.UserContentEditEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.UserContentEdit, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'UserContentEditConnection',
        extension: ((extensions as any) || {}).UserContentEditConnection,
      }
    )
  },
  get UserContentEditEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.UserContentEdit, undefined, true)
        },
      },
      {
        name: 'UserContentEditEdge',
        extension: ((extensions as any) || {}).UserContentEditEdge,
      }
    )
  },
  get UserContentEdit() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get deletedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get deletedBy() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get diff() {
          return new FieldNode(schema.String, undefined, true)
        },
        get editedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'UserContentEdit',
        extension: ((extensions as any) || {}).UserContentEdit,
      }
    )
  },
  get CommentAuthorAssociation() {
    return new EnumNode({ name: 'CommentAuthorAssociation' })
  },
  get UpdatableComment() {
    return new InterfaceNode(
      {
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
      },
      [
        schema.CommitComment,
        schema.GistComment,
        schema.Issue,
        schema.IssueComment,
        schema.PullRequest,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
      ],
      {
        name: 'UpdatableComment',
        extension: ((extensions as any) || {}).UpdatableComment,
      }
    )
  },
  get CommentCannotUpdateReason() {
    return new EnumNode({ name: 'CommentCannotUpdateReason' })
  },
  get Labelable() {
    return new InterfaceNode(
      {
        get labels() {
          return new FieldNode(
            schema.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
      },
      [schema.Issue, schema.PullRequest],
      { name: 'Labelable', extension: ((extensions as any) || {}).Labelable }
    )
  },
  get LabelConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.LabelEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Label, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'LabelConnection',
        extension: ((extensions as any) || {}).LabelConnection,
      }
    )
  },
  get LabelEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Label, undefined, true)
        },
      },
      { name: 'LabelEdge', extension: ((extensions as any) || {}).LabelEdge }
    )
  },
  get Label() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isDefault() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get issues() {
          return new FieldNode(
            schema.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.IssueState, true),
                  true
                )
              },
              get filterBy() {
                return new ArgumentsField(schema.IssueFilters, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get pullRequests() {
          return new FieldNode(
            schema.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'Label', extension: ((extensions as any) || {}).Label }
    )
  },
  get IssueConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.IssueEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Issue, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'IssueConnection',
        extension: ((extensions as any) || {}).IssueConnection,
      }
    )
  },
  get IssueEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Issue, undefined, true)
        },
      },
      { name: 'IssueEdge', extension: ((extensions as any) || {}).IssueEdge }
    )
  },
  get IssueOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.IssueOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'IssueOrder' }
    )
  },
  get IssueOrderField() {
    return new EnumNode({ name: 'IssueOrderField' })
  },
  get OrderDirection() {
    return new EnumNode({ name: 'OrderDirection' })
  },
  get IssueState() {
    return new EnumNode({ name: 'IssueState' })
  },
  get IssueFilters() {
    return new InputNode(
      {
        get assignee() {
          return new InputNodeField(schema.String, true)
        },
        get createdBy() {
          return new InputNodeField(schema.String, true)
        },
        get labels() {
          return new InputNodeField(new ArrayNode(schema.String, true), true)
        },
        get mentioned() {
          return new InputNodeField(schema.String, true)
        },
        get milestone() {
          return new InputNodeField(schema.String, true)
        },
        get since() {
          return new InputNodeField(schema.DateTime, true)
        },
        get states() {
          return new InputNodeField(
            new ArrayNode(schema.IssueState, true),
            true
          )
        },
        get viewerSubscribed() {
          return new InputNodeField(schema.Boolean, true)
        },
      },
      { name: 'IssueFilters' }
    )
  },
  get PullRequestConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequest, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestConnection',
        extension: ((extensions as any) || {}).PullRequestConnection,
      }
    )
  },
  get PullRequestEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
      },
      {
        name: 'PullRequestEdge',
        extension: ((extensions as any) || {}).PullRequestEdge,
      }
    )
  },
  get PullRequest() {
    return new ObjectNode(
      {
        get activeLockReason() {
          return new FieldNode(schema.LockReason, undefined, true)
        },
        get additions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get assignees() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get baseRef() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get baseRefName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get baseRefOid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get baseRepository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get changedFiles() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get closed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get closedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get comments() {
          return new FieldNode(
            schema.IssueCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get commits() {
          return new FieldNode(
            schema.PullRequestCommitConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get deletions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get files() {
          return new FieldNode(
            schema.PullRequestChangedFileConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get headRef() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get headRefName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get headRefOid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get headRepository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get headRepositoryOwner() {
          return new FieldNode(schema.RepositoryOwner, undefined, true)
        },
        get hovercard() {
          return new FieldNode(
            schema.Hovercard,
            new Arguments({
              get includeNotificationContexts() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isCrossRepository() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get labels() {
          return new FieldNode(
            schema.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get locked() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get maintainerCanModify() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get mergeCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get mergeable() {
          return new FieldNode(schema.MergeableState, undefined, false)
        },
        get merged() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get mergedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get mergedBy() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get milestone() {
          return new FieldNode(schema.Milestone, undefined, true)
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get participants() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get permalink() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get potentialMergeCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get projectCards() {
          return new FieldNode(
            schema.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get revertResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get revertUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get reviewRequests() {
          return new FieldNode(
            schema.ReviewRequestConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get reviewThreads() {
          return new FieldNode(
            schema.PullRequestReviewThreadConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get reviews() {
          return new FieldNode(
            schema.PullRequestReviewConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestReviewState, true),
                  true
                )
              },
              get author() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            true
          )
        },
        get state() {
          return new FieldNode(schema.PullRequestState, undefined, false)
        },
        get suggestedReviewers() {
          return new FieldNode(
            new ArrayNode(schema.SuggestedReviewer, false),
            undefined,
            false
          )
        },
        get timeline() {
          return new FieldNode(
            schema.PullRequestTimelineConnection,
            new Arguments({
              get since() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get timelineItems() {
          return new FieldNode(
            schema.PullRequestTimelineItemsConnection,
            new Arguments({
              get since() {
                return new ArgumentsField(schema.DateTime, true)
              },
              get skip() {
                return new ArgumentsField(schema.Int, true)
              },
              get itemTypes() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestTimelineItemsItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanApplySuggestion() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
      },
      {
        name: 'PullRequest',
        extension: ((extensions as any) || {}).PullRequest,
      }
    )
  },
  get Lockable() {
    return new InterfaceNode(
      {
        get activeLockReason() {
          return new FieldNode(schema.LockReason, undefined, true)
        },
        get locked() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [schema.Issue, schema.PullRequest],
      { name: 'Lockable', extension: ((extensions as any) || {}).Lockable }
    )
  },
  get LockReason() {
    return new EnumNode({ name: 'LockReason' })
  },
  get App() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get logoBackgroundColor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get logoUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get slug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'App', extension: ((extensions as any) || {}).App }
    )
  },
  get MarketplaceListing() {
    return new ObjectNode(
      {
        get app() {
          return new FieldNode(schema.App, undefined, true)
        },
        get companyUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get configurationResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get configurationUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get documentationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get extendedDescription() {
          return new FieldNode(schema.String, undefined, true)
        },
        get extendedDescriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get fullDescription() {
          return new FieldNode(schema.String, undefined, false)
        },
        get fullDescriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get hasApprovalBeenRequested() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasPublishedFreeTrialPlans() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasTermsOfService() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get howItWorks() {
          return new FieldNode(schema.String, undefined, true)
        },
        get howItWorksHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get installationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get installedForViewer() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isApproved() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isArchived() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isDelisted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isDraft() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPaid() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPublic() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isRejected() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isUnverified() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isUnverifiedPending() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isVerificationPendingFromDraft() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isVerificationPendingFromUnverified() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isVerified() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get logoBackgroundColor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get logoUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get normalizedShortDescription() {
          return new FieldNode(schema.String, undefined, false)
        },
        get pricingUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get primaryCategory() {
          return new FieldNode(schema.MarketplaceCategory, undefined, false)
        },
        get privacyPolicyUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get screenshotUrls() {
          return new FieldNode(
            new ArrayNode(schema.String, false),
            undefined,
            false
          )
        },
        get secondaryCategory() {
          return new FieldNode(schema.MarketplaceCategory, undefined, true)
        },
        get shortDescription() {
          return new FieldNode(schema.String, undefined, false)
        },
        get slug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get statusUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get supportEmail() {
          return new FieldNode(schema.String, undefined, true)
        },
        get supportUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get termsOfServiceUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanAddPlans() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanApprove() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanDelist() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanEditCategories() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanEditPlans() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanRedraft() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReject() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanRequestApproval() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerHasPurchased() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerHasPurchasedForAllOrganizations() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerIsListingAdmin() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'MarketplaceListing',
        extension: ((extensions as any) || {}).MarketplaceListing,
      }
    )
  },
  get SponsorsTier() {
    return new ObjectNode(
      {
        get adminInfo() {
          return new FieldNode(schema.SponsorsTierAdminInfo, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, false)
        },
        get descriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get monthlyPriceInCents() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get monthlyPriceInDollars() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get sponsorsListing() {
          return new FieldNode(schema.SponsorsListing, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'SponsorsTier',
        extension: ((extensions as any) || {}).SponsorsTier,
      }
    )
  },
  get SponsorsListing() {
    return new ObjectNode(
      {
        get fullDescription() {
          return new FieldNode(schema.String, undefined, false)
        },
        get fullDescriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get shortDescription() {
          return new FieldNode(schema.String, undefined, false)
        },
        get slug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get tiers() {
          return new FieldNode(
            schema.SponsorsTierConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorsTierOrder, true)
              },
            }),
            true
          )
        },
      },
      {
        name: 'SponsorsListing',
        extension: ((extensions as any) || {}).SponsorsListing,
      }
    )
  },
  get Sponsorable() {
    return new InterfaceNode(
      {
        get sponsorshipsAsMaintainer() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get includePrivate() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
        get sponsorshipsAsSponsor() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
      },
      [schema.Organization, schema.User],
      {
        name: 'Sponsorable',
        extension: ((extensions as any) || {}).Sponsorable,
      }
    )
  },
  get SponsorsTierConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.SponsorsTierEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.SponsorsTier, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'SponsorsTierConnection',
        extension: ((extensions as any) || {}).SponsorsTierConnection,
      }
    )
  },
  get SponsorsTierEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.SponsorsTier, undefined, true)
        },
      },
      {
        name: 'SponsorsTierEdge',
        extension: ((extensions as any) || {}).SponsorsTierEdge,
      }
    )
  },
  get Sponsorship() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get maintainer() {
          return new FieldNode(schema.User, undefined, false)
        },
        get privacyLevel() {
          return new FieldNode(schema.SponsorshipPrivacy, undefined, false)
        },
        get sponsor() {
          return new FieldNode(schema.User, undefined, true)
        },
        get tier() {
          return new FieldNode(schema.SponsorsTier, undefined, true)
        },
      },
      {
        name: 'Sponsorship',
        extension: ((extensions as any) || {}).Sponsorship,
      }
    )
  },
  get SponsorshipPrivacy() {
    return new EnumNode({ name: 'SponsorshipPrivacy' })
  },
  get SponsorshipConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.SponsorshipEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Sponsorship, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'SponsorshipConnection',
        extension: ((extensions as any) || {}).SponsorshipConnection,
      }
    )
  },
  get SponsorshipEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Sponsorship, undefined, true)
        },
      },
      {
        name: 'SponsorshipEdge',
        extension: ((extensions as any) || {}).SponsorshipEdge,
      }
    )
  },
  get SponsorshipOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.SponsorshipOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'SponsorshipOrder' }
    )
  },
  get SponsorshipOrderField() {
    return new EnumNode({ name: 'SponsorshipOrderField' })
  },
  get Organization() {
    return new ObjectNode(
      {
        get anyPinnableItems() {
          return new FieldNode(
            schema.Boolean,
            new Arguments({
              get type() {
                return new ArgumentsField(schema.PinnableItemType, true)
              },
            }),
            false
          )
        },
        get auditLog() {
          return new FieldNode(
            schema.OrganizationAuditEntryConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.AuditLogOrder, true)
              },
            }),
            false
          )
        },
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get descriptionHTML() {
          return new FieldNode(schema.String, undefined, true)
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isVerified() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get itemShowcase() {
          return new FieldNode(schema.ProfileItemShowcase, undefined, false)
        },
        get location() {
          return new FieldNode(schema.String, undefined, true)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get memberStatuses() {
          return new FieldNode(
            schema.UserStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.UserStatusOrder, true)
              },
            }),
            false
          )
        },
        get membersWithRole() {
          return new FieldNode(
            schema.OrganizationMemberConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get newTeamResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get newTeamUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get organizationBillingEmail() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pendingMembers() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnableItems() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get types() {
                return new ArgumentsField(
                  new ArrayNode(schema.PinnableItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnedItems() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get types() {
                return new ArgumentsField(
                  new ArrayNode(schema.PinnableItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnedItemsRemaining() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get pinnedRepositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get project() {
          return new FieldNode(
            schema.Project,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get projects() {
          return new FieldNode(
            schema.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(schema.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get projectsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get registryPackages() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get name() {
                return new ArgumentsField(schema.String, true)
              },
              get names() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get repositoryId() {
                return new ArgumentsField(schema.ID, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
              get registryPackageType() {
                return new ArgumentsField(schema.String, true)
              },
              get publicOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get registryPackagesForQuery() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
            }),
            false
          )
        },
        get repositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get isFork() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(
            schema.Repository,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get requiresTwoFactorAuthentication() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get samlIdentityProvider() {
          return new FieldNode(
            schema.OrganizationIdentityProvider,
            undefined,
            true
          )
        },
        get sponsorshipsAsMaintainer() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get includePrivate() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
        get sponsorshipsAsSponsor() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
        get team() {
          return new FieldNode(
            schema.Team,
            new Arguments(
              {
                get slug() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get teams() {
          return new FieldNode(
            schema.TeamConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.TeamPrivacy, true)
              },
              get role() {
                return new ArgumentsField(schema.TeamRole, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get userLogins() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.TeamOrder, true)
              },
              get ldapMapped() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get rootTeamsOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get teamsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get teamsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanAdminister() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanChangePinnedItems() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanCreateRepositories() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanCreateTeams() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerIsAMember() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get websiteUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'Organization',
        extension: ((extensions as any) || {}).Organization,
      }
    )
  },
  get RegistryPackageSearch() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get registryPackagesForQuery() {
          return new FieldNode(
            schema.RegistryPackageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get packageType() {
                return new ArgumentsField(schema.RegistryPackageType, true)
              },
            }),
            false
          )
        },
      },
      [schema.Organization, schema.Repository, schema.User],
      {
        name: 'RegistryPackageSearch',
        extension: ((extensions as any) || {}).RegistryPackageSearch,
      }
    )
  },
  get Release() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.User, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get descriptionHTML() {
          return new FieldNode(schema.HTML, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isDraft() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPrerelease() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get releaseAssets() {
          return new FieldNode(
            schema.ReleaseAssetConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get name() {
                return new ArgumentsField(schema.String, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get shortDescriptionHTML() {
          return new FieldNode(
            schema.HTML,
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get tag() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get tagName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'Release', extension: ((extensions as any) || {}).Release }
    )
  },
  get Ref() {
    return new ObjectNode(
      {
        get associatedPullRequests() {
          return new FieldNode(
            schema.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get prefix() {
          return new FieldNode(schema.String, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get target() {
          return new FieldNode(schema.GitObject, undefined, false)
        },
      },
      { name: 'Ref', extension: ((extensions as any) || {}).Ref }
    )
  },
  get GitObject() {
    return new InterfaceNode(
      {
        get abbreviatedOid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get commitResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get commitUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get oid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      [schema.Blob, schema.Commit, schema.Tag, schema.Tree],
      { name: 'GitObject', extension: ((extensions as any) || {}).GitObject }
    )
  },
  get GitObjectID() {
    return new ScalarNode({
      name: 'GitObjectID',
      extension: ((extensions as any) || {}).GitObjectID,
    })
  },
  get RepositoryNode() {
    return new InterfaceNode(
      {
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      [
        schema.CommitComment,
        schema.CommitCommentThread,
        schema.Issue,
        schema.IssueComment,
        schema.PullRequest,
        schema.PullRequestCommitCommentThread,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.RepositoryVulnerabilityAlert,
      ],
      {
        name: 'RepositoryNode',
        extension: ((extensions as any) || {}).RepositoryNode,
      }
    )
  },
  get Blob() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get byteSize() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get commitResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get commitUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isBinary() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isTruncated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get oid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'Blob', extension: ((extensions as any) || {}).Blob }
    )
  },
  get Commit() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get additions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get associatedPullRequests() {
          return new FieldNode(
            schema.PullRequestConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.PullRequestOrder, true)
              },
            }),
            true
          )
        },
        get author() {
          return new FieldNode(schema.GitActor, undefined, true)
        },
        get authoredByCommitter() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get authoredDate() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get blame() {
          return new FieldNode(
            schema.Blame,
            new Arguments(
              {
                get path() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            false
          )
        },
        get changedFiles() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get comments() {
          return new FieldNode(
            schema.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get commitResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get commitUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get committedDate() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get committedViaWeb() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get committer() {
          return new FieldNode(schema.GitActor, undefined, true)
        },
        get deletions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get deployments() {
          return new FieldNode(
            schema.DeploymentConnection,
            new Arguments({
              get environments() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.DeploymentOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get history() {
          return new FieldNode(
            schema.CommitHistoryConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get path() {
                return new ArgumentsField(schema.String, true)
              },
              get author() {
                return new ArgumentsField(schema.CommitAuthor, true)
              },
              get since() {
                return new ArgumentsField(schema.GitTimestamp, true)
              },
              get until() {
                return new ArgumentsField(schema.GitTimestamp, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get messageBody() {
          return new FieldNode(schema.String, undefined, false)
        },
        get messageBodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get messageHeadline() {
          return new FieldNode(schema.String, undefined, false)
        },
        get messageHeadlineHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get oid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get parents() {
          return new FieldNode(
            schema.CommitConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pushedDate() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get signature() {
          return new FieldNode(schema.GitSignature, undefined, true)
        },
        get status() {
          return new FieldNode(schema.Status, undefined, true)
        },
        get tarballUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get tree() {
          return new FieldNode(schema.Tree, undefined, false)
        },
        get treeResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get treeUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
        get zipballUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'Commit', extension: ((extensions as any) || {}).Commit }
    )
  },
  get Subscribable() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
      },
      [
        schema.Commit,
        schema.Issue,
        schema.PullRequest,
        schema.Repository,
        schema.Team,
        schema.TeamDiscussion,
      ],
      {
        name: 'Subscribable',
        extension: ((extensions as any) || {}).Subscribable,
      }
    )
  },
  get SubscriptionState() {
    return new EnumNode({ name: 'SubscriptionState' })
  },
  get Tree() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get commitResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get commitUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get entries() {
          return new FieldNode(
            new ArrayNode(schema.TreeEntry, true),
            undefined,
            true
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get oid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      { name: 'Tree', extension: ((extensions as any) || {}).Tree }
    )
  },
  get TreeEntry() {
    return new ObjectNode(
      {
        get mode() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get object() {
          return new FieldNode(schema.GitObject, undefined, true)
        },
        get oid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get type() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      { name: 'TreeEntry', extension: ((extensions as any) || {}).TreeEntry }
    )
  },
  get GitActor() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get date() {
          return new FieldNode(schema.GitTimestamp, undefined, true)
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      { name: 'GitActor', extension: ((extensions as any) || {}).GitActor }
    )
  },
  get GitTimestamp() {
    return new ScalarNode({
      name: 'GitTimestamp',
      extension: ((extensions as any) || {}).GitTimestamp,
    })
  },
  get CommitConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CommitEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Commit, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CommitConnection',
        extension: ((extensions as any) || {}).CommitConnection,
      }
    )
  },
  get CommitEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Commit, undefined, true)
        },
      },
      { name: 'CommitEdge', extension: ((extensions as any) || {}).CommitEdge }
    )
  },
  get CommitHistoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CommitEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Commit, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CommitHistoryConnection',
        extension: ((extensions as any) || {}).CommitHistoryConnection,
      }
    )
  },
  get CommitAuthor() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, true)
        },
        get emails() {
          return new InputNodeField(new ArrayNode(schema.String, true), true)
        },
      },
      { name: 'CommitAuthor' }
    )
  },
  get CommitCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CommitCommentEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.CommitComment, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CommitCommentConnection',
        extension: ((extensions as any) || {}).CommitCommentConnection,
      }
    )
  },
  get CommitCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.CommitComment, undefined, true)
        },
      },
      {
        name: 'CommitCommentEdge',
        extension: ((extensions as any) || {}).CommitCommentEdge,
      }
    )
  },
  get CommitComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isMinimized() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get minimizedReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get path() {
          return new FieldNode(schema.String, undefined, true)
        },
        get position() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'CommitComment',
        extension: ((extensions as any) || {}).CommitComment,
      }
    )
  },
  get Deletable() {
    return new InterfaceNode(
      {
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [
        schema.CommitComment,
        schema.GistComment,
        schema.IssueComment,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
      ],
      { name: 'Deletable', extension: ((extensions as any) || {}).Deletable }
    )
  },
  get Reactable() {
    return new InterfaceNode(
      {
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [
        schema.CommitComment,
        schema.Issue,
        schema.IssueComment,
        schema.PullRequest,
        schema.PullRequestReview,
        schema.PullRequestReviewComment,
        schema.TeamDiscussion,
        schema.TeamDiscussionComment,
      ],
      { name: 'Reactable', extension: ((extensions as any) || {}).Reactable }
    )
  },
  get ReactionGroup() {
    return new ObjectNode(
      {
        get content() {
          return new FieldNode(schema.ReactionContent, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get subject() {
          return new FieldNode(schema.Reactable, undefined, false)
        },
        get users() {
          return new FieldNode(
            schema.ReactingUserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get viewerHasReacted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'ReactionGroup',
        extension: ((extensions as any) || {}).ReactionGroup,
      }
    )
  },
  get ReactionContent() {
    return new EnumNode({ name: 'ReactionContent' })
  },
  get ReactingUserConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ReactingUserEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ReactingUserConnection',
        extension: ((extensions as any) || {}).ReactingUserConnection,
      }
    )
  },
  get ReactingUserEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, false)
        },
        get reactedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'ReactingUserEdge',
        extension: ((extensions as any) || {}).ReactingUserEdge,
      }
    )
  },
  get ReactionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ReactionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Reaction, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get viewerHasReacted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'ReactionConnection',
        extension: ((extensions as any) || {}).ReactionConnection,
      }
    )
  },
  get ReactionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Reaction, undefined, true)
        },
      },
      {
        name: 'ReactionEdge',
        extension: ((extensions as any) || {}).ReactionEdge,
      }
    )
  },
  get Reaction() {
    return new ObjectNode(
      {
        get content() {
          return new FieldNode(schema.ReactionContent, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get reactable() {
          return new FieldNode(schema.Reactable, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      { name: 'Reaction', extension: ((extensions as any) || {}).Reaction }
    )
  },
  get ReactionOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.ReactionOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'ReactionOrder' }
    )
  },
  get ReactionOrderField() {
    return new EnumNode({ name: 'ReactionOrderField' })
  },
  get RepositoryInfo() {
    return new InterfaceNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get descriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get forkCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get hasIssuesEnabled() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasWikiEnabled() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get homepageUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get isArchived() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isFork() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isLocked() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isMirror() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPrivate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isTemplate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get licenseInfo() {
          return new FieldNode(schema.License, undefined, true)
        },
        get lockReason() {
          return new FieldNode(schema.RepositoryLockReason, undefined, true)
        },
        get mirrorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get nameWithOwner() {
          return new FieldNode(schema.String, undefined, false)
        },
        get openGraphImageUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get owner() {
          return new FieldNode(schema.RepositoryOwner, undefined, false)
        },
        get pushedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get shortDescriptionHTML() {
          return new FieldNode(
            schema.HTML,
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get usesCustomOpenGraphImage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [schema.Repository],
      {
        name: 'RepositoryInfo',
        extension: ((extensions as any) || {}).RepositoryInfo,
      }
    )
  },
  get RepositoryVisibility() {
    return new EnumNode({ name: 'RepositoryVisibility' })
  },
  get RepositoryLockReason() {
    return new EnumNode({ name: 'RepositoryLockReason' })
  },
  get License() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get conditions() {
          return new FieldNode(
            new ArrayNode(schema.LicenseRule, false),
            undefined,
            false
          )
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get featured() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hidden() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get implementation() {
          return new FieldNode(schema.String, undefined, true)
        },
        get key() {
          return new FieldNode(schema.String, undefined, false)
        },
        get limitations() {
          return new FieldNode(
            new ArrayNode(schema.LicenseRule, false),
            undefined,
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get nickname() {
          return new FieldNode(schema.String, undefined, true)
        },
        get permissions() {
          return new FieldNode(
            new ArrayNode(schema.LicenseRule, false),
            undefined,
            false
          )
        },
        get pseudoLicense() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get spdxId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      { name: 'License', extension: ((extensions as any) || {}).License }
    )
  },
  get LicenseRule() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, false)
        },
        get key() {
          return new FieldNode(schema.String, undefined, false)
        },
        get label() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'LicenseRule',
        extension: ((extensions as any) || {}).LicenseRule,
      }
    )
  },
  get RepositoryOwner() {
    return new InterfaceNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get pinnedRepositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repositories() {
          return new FieldNode(
            schema.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(schema.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(schema.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get isFork() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(
            schema.Repository,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      [schema.Organization, schema.User],
      {
        name: 'RepositoryOwner',
        extension: ((extensions as any) || {}).RepositoryOwner,
      }
    )
  },
  get RepositoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RepositoryEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Repository, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalDiskUsage() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RepositoryConnection',
        extension: ((extensions as any) || {}).RepositoryConnection,
      }
    )
  },
  get RepositoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'RepositoryEdge',
        extension: ((extensions as any) || {}).RepositoryEdge,
      }
    )
  },
  get RepositoryPrivacy() {
    return new EnumNode({ name: 'RepositoryPrivacy' })
  },
  get RepositoryOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.RepositoryOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'RepositoryOrder' }
    )
  },
  get RepositoryOrderField() {
    return new EnumNode({ name: 'RepositoryOrderField' })
  },
  get RepositoryAffiliation() {
    return new EnumNode({ name: 'RepositoryAffiliation' })
  },
  get RepositoryTopicConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RepositoryTopicEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RepositoryTopic, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RepositoryTopicConnection',
        extension: ((extensions as any) || {}).RepositoryTopicConnection,
      }
    )
  },
  get RepositoryTopicEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.RepositoryTopic, undefined, true)
        },
      },
      {
        name: 'RepositoryTopicEdge',
        extension: ((extensions as any) || {}).RepositoryTopicEdge,
      }
    )
  },
  get RepositoryTopic() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get topic() {
          return new FieldNode(schema.Topic, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'RepositoryTopic',
        extension: ((extensions as any) || {}).RepositoryTopic,
      }
    )
  },
  get Topic() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get relatedTopics() {
          return new FieldNode(
            new ArrayNode(schema.Topic, false),
            new Arguments({
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get stargazers() {
          return new FieldNode(
            schema.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.StarOrder, true)
              },
            }),
            false
          )
        },
        get viewerHasStarred() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      { name: 'Topic', extension: ((extensions as any) || {}).Topic }
    )
  },
  get Starrable() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get stargazers() {
          return new FieldNode(
            schema.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.StarOrder, true)
              },
            }),
            false
          )
        },
        get viewerHasStarred() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [schema.Gist, schema.Repository, schema.Topic],
      { name: 'Starrable', extension: ((extensions as any) || {}).Starrable }
    )
  },
  get StargazerConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.StargazerEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'StargazerConnection',
        extension: ((extensions as any) || {}).StargazerConnection,
      }
    )
  },
  get StargazerEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, false)
        },
        get starredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'StargazerEdge',
        extension: ((extensions as any) || {}).StargazerEdge,
      }
    )
  },
  get StarOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.StarOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'StarOrder' }
    )
  },
  get StarOrderField() {
    return new EnumNode({ name: 'StarOrderField' })
  },
  get GitSignature() {
    return new InterfaceNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isValid() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get payload() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signature() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signer() {
          return new FieldNode(schema.User, undefined, true)
        },
        get state() {
          return new FieldNode(schema.GitSignatureState, undefined, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      [schema.GpgSignature, schema.SmimeSignature, schema.UnknownSignature],
      {
        name: 'GitSignature',
        extension: ((extensions as any) || {}).GitSignature,
      }
    )
  },
  get GitSignatureState() {
    return new EnumNode({ name: 'GitSignatureState' })
  },
  get Status() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get context() {
          return new FieldNode(
            schema.StatusContext,
            new Arguments(
              {
                get name() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get contexts() {
          return new FieldNode(
            new ArrayNode(schema.StatusContext, false),
            undefined,
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get state() {
          return new FieldNode(schema.StatusState, undefined, false)
        },
      },
      { name: 'Status', extension: ((extensions as any) || {}).Status }
    )
  },
  get StatusState() {
    return new EnumNode({ name: 'StatusState' })
  },
  get StatusContext() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get context() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get state() {
          return new FieldNode(schema.StatusState, undefined, false)
        },
        get targetUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'StatusContext',
        extension: ((extensions as any) || {}).StatusContext,
      }
    )
  },
  get Bot() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'Bot', extension: ((extensions as any) || {}).Bot }
    )
  },
  get Float() {
    return new ScalarNode({
      name: 'Float',
      extension: ((extensions as any) || {}).Float,
    })
  },
  get PullRequestState() {
    return new EnumNode({ name: 'PullRequestState' })
  },
  get Blame() {
    return new ObjectNode(
      {
        get ranges() {
          return new FieldNode(
            new ArrayNode(schema.BlameRange, false),
            undefined,
            false
          )
        },
      },
      { name: 'Blame', extension: ((extensions as any) || {}).Blame }
    )
  },
  get BlameRange() {
    return new ObjectNode(
      {
        get age() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, false)
        },
        get endingLine() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get startingLine() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      { name: 'BlameRange', extension: ((extensions as any) || {}).BlameRange }
    )
  },
  get DeploymentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.DeploymentEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Deployment, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'DeploymentConnection',
        extension: ((extensions as any) || {}).DeploymentConnection,
      }
    )
  },
  get DeploymentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Deployment, undefined, true)
        },
      },
      {
        name: 'DeploymentEdge',
        extension: ((extensions as any) || {}).DeploymentEdge,
      }
    )
  },
  get Deployment() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get commitOid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get environment() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get latestStatus() {
          return new FieldNode(schema.DeploymentStatus, undefined, true)
        },
        get payload() {
          return new FieldNode(schema.String, undefined, true)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get state() {
          return new FieldNode(schema.DeploymentState, undefined, true)
        },
        get statuses() {
          return new FieldNode(
            schema.DeploymentStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get task() {
          return new FieldNode(schema.String, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      { name: 'Deployment', extension: ((extensions as any) || {}).Deployment }
    )
  },
  get DeploymentStatusConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.DeploymentStatusEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.DeploymentStatus, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'DeploymentStatusConnection',
        extension: ((extensions as any) || {}).DeploymentStatusConnection,
      }
    )
  },
  get DeploymentStatusEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.DeploymentStatus, undefined, true)
        },
      },
      {
        name: 'DeploymentStatusEdge',
        extension: ((extensions as any) || {}).DeploymentStatusEdge,
      }
    )
  },
  get DeploymentStatus() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get deployment() {
          return new FieldNode(schema.Deployment, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get environmentUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get logUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get state() {
          return new FieldNode(schema.DeploymentStatusState, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'DeploymentStatus',
        extension: ((extensions as any) || {}).DeploymentStatus,
      }
    )
  },
  get DeploymentStatusState() {
    return new EnumNode({ name: 'DeploymentStatusState' })
  },
  get DeploymentState() {
    return new EnumNode({ name: 'DeploymentState' })
  },
  get DeploymentOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.DeploymentOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'DeploymentOrder' }
    )
  },
  get DeploymentOrderField() {
    return new EnumNode({ name: 'DeploymentOrderField' })
  },
  get PullRequestOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.PullRequestOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'PullRequestOrder' }
    )
  },
  get PullRequestOrderField() {
    return new EnumNode({ name: 'PullRequestOrderField' })
  },
  get ReleaseAssetConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ReleaseAssetEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.ReleaseAsset, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ReleaseAssetConnection',
        extension: ((extensions as any) || {}).ReleaseAssetConnection,
      }
    )
  },
  get ReleaseAssetEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.ReleaseAsset, undefined, true)
        },
      },
      {
        name: 'ReleaseAssetEdge',
        extension: ((extensions as any) || {}).ReleaseAssetEdge,
      }
    )
  },
  get ReleaseAsset() {
    return new ObjectNode(
      {
        get contentType() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get downloadCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get release() {
          return new FieldNode(schema.Release, undefined, true)
        },
        get size() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get uploadedBy() {
          return new FieldNode(schema.User, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'ReleaseAsset',
        extension: ((extensions as any) || {}).ReleaseAsset,
      }
    )
  },
  get RegistryPackageVersionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageVersionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageVersion, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageVersionConnection',
        extension: ((extensions as any) || {}).RegistryPackageVersionConnection,
      }
    )
  },
  get RegistryPackageVersionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.RegistryPackageVersion, undefined, true)
        },
      },
      {
        name: 'RegistryPackageVersionEdge',
        extension: ((extensions as any) || {}).RegistryPackageVersionEdge,
      }
    )
  },
  get RegistryPackageVersion() {
    return new ObjectNode(
      {
        get dependencies() {
          return new FieldNode(
            schema.RegistryPackageDependencyConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get type() {
                return new ArgumentsField(
                  schema.RegistryPackageDependencyType,
                  true
                )
              },
            }),
            false
          )
        },
        get fileByName() {
          return new FieldNode(
            schema.RegistryPackageFile,
            new Arguments(
              {
                get filename() {
                  return new ArgumentsField(schema.String, false)
                },
              },
              true
            ),
            true
          )
        },
        get files() {
          return new FieldNode(
            schema.RegistryPackageFileConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get installationCommand() {
          return new FieldNode(schema.String, undefined, true)
        },
        get manifest() {
          return new FieldNode(schema.String, undefined, true)
        },
        get platform() {
          return new FieldNode(schema.String, undefined, true)
        },
        get preRelease() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get readme() {
          return new FieldNode(schema.String, undefined, true)
        },
        get readmeHtml() {
          return new FieldNode(schema.HTML, undefined, true)
        },
        get registryPackage() {
          return new FieldNode(schema.RegistryPackage, undefined, true)
        },
        get release() {
          return new FieldNode(schema.Release, undefined, true)
        },
        get sha256() {
          return new FieldNode(schema.String, undefined, true)
        },
        get size() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get statistics() {
          return new FieldNode(
            schema.RegistryPackageVersionStatistics,
            undefined,
            true
          )
        },
        get summary() {
          return new FieldNode(schema.String, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get version() {
          return new FieldNode(schema.String, undefined, false)
        },
        get viewerCanEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'RegistryPackageVersion',
        extension: ((extensions as any) || {}).RegistryPackageVersion,
      }
    )
  },
  get RegistryPackageVersionStatistics() {
    return new ObjectNode(
      {
        get downloadsThisMonth() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsThisWeek() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsThisYear() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsToday() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsTotalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageVersionStatistics',
        extension: ((extensions as any) || {}).RegistryPackageVersionStatistics,
      }
    )
  },
  get RegistryPackageDependencyConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageDependencyEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageDependency, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageDependencyConnection',
        extension: ((extensions as any) || {})
          .RegistryPackageDependencyConnection,
      }
    )
  },
  get RegistryPackageDependencyEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.RegistryPackageDependency,
            undefined,
            true
          )
        },
      },
      {
        name: 'RegistryPackageDependencyEdge',
        extension: ((extensions as any) || {}).RegistryPackageDependencyEdge,
      }
    )
  },
  get RegistryPackageDependency() {
    return new ObjectNode(
      {
        get dependencyType() {
          return new FieldNode(
            schema.RegistryPackageDependencyType,
            undefined,
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get version() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'RegistryPackageDependency',
        extension: ((extensions as any) || {}).RegistryPackageDependency,
      }
    )
  },
  get RegistryPackageDependencyType() {
    return new EnumNode({ name: 'RegistryPackageDependencyType' })
  },
  get RegistryPackageFileConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageFileEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageFile, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageFileConnection',
        extension: ((extensions as any) || {}).RegistryPackageFileConnection,
      }
    )
  },
  get RegistryPackageFileEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.RegistryPackageFile, undefined, true)
        },
      },
      {
        name: 'RegistryPackageFileEdge',
        extension: ((extensions as any) || {}).RegistryPackageFileEdge,
      }
    )
  },
  get RegistryPackageFile() {
    return new ObjectNode(
      {
        get guid() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get md5() {
          return new FieldNode(schema.String, undefined, true)
        },
        get metadataUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get packageVersion() {
          return new FieldNode(schema.RegistryPackageVersion, undefined, false)
        },
        get sha1() {
          return new FieldNode(schema.String, undefined, true)
        },
        get sha256() {
          return new FieldNode(schema.String, undefined, true)
        },
        get size() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'RegistryPackageFile',
        extension: ((extensions as any) || {}).RegistryPackageFile,
      }
    )
  },
  get MarketplaceCategory() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get howItWorks() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get primaryListingCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get secondaryListingCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get slug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'MarketplaceCategory',
        extension: ((extensions as any) || {}).MarketplaceCategory,
      }
    )
  },
  get MarketplaceListingConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.MarketplaceListingEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.MarketplaceListing, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'MarketplaceListingConnection',
        extension: ((extensions as any) || {}).MarketplaceListingConnection,
      }
    )
  },
  get MarketplaceListingEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.MarketplaceListing, undefined, true)
        },
      },
      {
        name: 'MarketplaceListingEdge',
        extension: ((extensions as any) || {}).MarketplaceListingEdge,
      }
    )
  },
  get ReleaseConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ReleaseEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Release, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ReleaseConnection',
        extension: ((extensions as any) || {}).ReleaseConnection,
      }
    )
  },
  get ReleaseEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Release, undefined, true)
        },
      },
      {
        name: 'ReleaseEdge',
        extension: ((extensions as any) || {}).ReleaseEdge,
      }
    )
  },
  get ReleaseOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.ReleaseOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'ReleaseOrder' }
    )
  },
  get ReleaseOrderField() {
    return new EnumNode({ name: 'ReleaseOrderField' })
  },
  get RegistryPackageMetadatum() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get value() {
          return new InputNodeField(schema.String, false)
        },
        get update() {
          return new InputNodeField(schema.Boolean, true)
        },
      },
      { name: 'RegistryPackageMetadatum' }
    )
  },
  get TopicConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.TopicEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Topic, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'TopicConnection',
        extension: ((extensions as any) || {}).TopicConnection,
      }
    )
  },
  get TopicEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Topic, undefined, true)
        },
      },
      { name: 'TopicEdge', extension: ((extensions as any) || {}).TopicEdge }
    )
  },
  get MemberStatusable() {
    return new InterfaceNode(
      {
        get memberStatuses() {
          return new FieldNode(
            schema.UserStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.UserStatusOrder, true)
              },
            }),
            false
          )
        },
      },
      [schema.Organization, schema.Team],
      {
        name: 'MemberStatusable',
        extension: ((extensions as any) || {}).MemberStatusable,
      }
    )
  },
  get UserStatusConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.UserStatusEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.UserStatus, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'UserStatusConnection',
        extension: ((extensions as any) || {}).UserStatusConnection,
      }
    )
  },
  get UserStatusEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.UserStatus, undefined, true)
        },
      },
      {
        name: 'UserStatusEdge',
        extension: ((extensions as any) || {}).UserStatusEdge,
      }
    )
  },
  get UserStatus() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get emoji() {
          return new FieldNode(schema.String, undefined, true)
        },
        get emojiHTML() {
          return new FieldNode(schema.HTML, undefined, true)
        },
        get expiresAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get indicatesLimitedAvailability() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      { name: 'UserStatus', extension: ((extensions as any) || {}).UserStatus }
    )
  },
  get UserStatusOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.UserStatusOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'UserStatusOrder' }
    )
  },
  get UserStatusOrderField() {
    return new EnumNode({ name: 'UserStatusOrderField' })
  },
  get ProfileOwner() {
    return new InterfaceNode(
      {
        get anyPinnableItems() {
          return new FieldNode(
            schema.Boolean,
            new Arguments({
              get type() {
                return new ArgumentsField(schema.PinnableItemType, true)
              },
            }),
            false
          )
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get itemShowcase() {
          return new FieldNode(schema.ProfileItemShowcase, undefined, false)
        },
        get location() {
          return new FieldNode(schema.String, undefined, true)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pinnableItems() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get types() {
                return new ArgumentsField(
                  new ArrayNode(schema.PinnableItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnedItems() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get types() {
                return new ArgumentsField(
                  new ArrayNode(schema.PinnableItemType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pinnedItemsRemaining() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get viewerCanChangePinnedItems() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get websiteUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [schema.Organization, schema.User],
      {
        name: 'ProfileOwner',
        extension: ((extensions as any) || {}).ProfileOwner,
      }
    )
  },
  get ProfileItemShowcase() {
    return new ObjectNode(
      {
        get hasPinnedItems() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get items() {
          return new FieldNode(
            schema.PinnableItemConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'ProfileItemShowcase',
        extension: ((extensions as any) || {}).ProfileItemShowcase,
      }
    )
  },
  get PinnableItemConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PinnableItemEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PinnableItem, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PinnableItemConnection',
        extension: ((extensions as any) || {}).PinnableItemConnection,
      }
    )
  },
  get PinnableItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PinnableItem, undefined, true)
        },
      },
      {
        name: 'PinnableItemEdge',
        extension: ((extensions as any) || {}).PinnableItemEdge,
      }
    )
  },
  get PinnableItem() {
    return new UnionNode([schema.Gist, schema.Repository])
  },
  get Gist() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            schema.GistCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get files() {
          return new FieldNode(
            new ArrayNode(schema.GistFile, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get oid() {
                return new ArgumentsField(schema.GitObjectID, true)
              },
            }),
            true
          )
        },
        get forks() {
          return new FieldNode(
            schema.GistConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.GistOrder, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isFork() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPublic() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get owner() {
          return new FieldNode(schema.RepositoryOwner, undefined, true)
        },
        get pushedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get stargazers() {
          return new FieldNode(
            schema.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.StarOrder, true)
              },
            }),
            false
          )
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerHasStarred() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      { name: 'Gist', extension: ((extensions as any) || {}).Gist }
    )
  },
  get GistCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.GistCommentEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.GistComment, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'GistCommentConnection',
        extension: ((extensions as any) || {}).GistCommentConnection,
      }
    )
  },
  get GistCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.GistComment, undefined, true)
        },
      },
      {
        name: 'GistCommentEdge',
        extension: ((extensions as any) || {}).GistCommentEdge,
      }
    )
  },
  get GistComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get gist() {
          return new FieldNode(schema.Gist, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isMinimized() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get minimizedReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'GistComment',
        extension: ((extensions as any) || {}).GistComment,
      }
    )
  },
  get GistConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.GistEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Gist, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'GistConnection',
        extension: ((extensions as any) || {}).GistConnection,
      }
    )
  },
  get GistEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Gist, undefined, true)
        },
      },
      { name: 'GistEdge', extension: ((extensions as any) || {}).GistEdge }
    )
  },
  get GistOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.GistOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'GistOrder' }
    )
  },
  get GistOrderField() {
    return new EnumNode({ name: 'GistOrderField' })
  },
  get GistFile() {
    return new ObjectNode(
      {
        get encodedName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get encoding() {
          return new FieldNode(schema.String, undefined, true)
        },
        get extension() {
          return new FieldNode(schema.String, undefined, true)
        },
        get isImage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isTruncated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get language() {
          return new FieldNode(schema.Language, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get size() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get text() {
          return new FieldNode(
            schema.String,
            new Arguments({
              get truncate() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
      },
      { name: 'GistFile', extension: ((extensions as any) || {}).GistFile }
    )
  },
  get Language() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      { name: 'Language', extension: ((extensions as any) || {}).Language }
    )
  },
  get PinnableItemType() {
    return new EnumNode({ name: 'PinnableItemType' })
  },
  get ProjectConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ProjectEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Project, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ProjectConnection',
        extension: ((extensions as any) || {}).ProjectConnection,
      }
    )
  },
  get ProjectEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Project, undefined, true)
        },
      },
      {
        name: 'ProjectEdge',
        extension: ((extensions as any) || {}).ProjectEdge,
      }
    )
  },
  get ProjectOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.ProjectOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'ProjectOrder' }
    )
  },
  get ProjectOrderField() {
    return new EnumNode({ name: 'ProjectOrderField' })
  },
  get OrganizationAuditEntryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationAuditEntryEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationAuditEntry, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'OrganizationAuditEntryConnection',
        extension: ((extensions as any) || {}).OrganizationAuditEntryConnection,
      }
    )
  },
  get OrganizationAuditEntryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.OrganizationAuditEntry, undefined, true)
        },
      },
      {
        name: 'OrganizationAuditEntryEdge',
        extension: ((extensions as any) || {}).OrganizationAuditEntryEdge,
      }
    )
  },
  get OrganizationAuditEntry() {
    return new UnionNode([
      schema.MembersCanDeleteReposClearAuditEntry,
      schema.MembersCanDeleteReposDisableAuditEntry,
      schema.MembersCanDeleteReposEnableAuditEntry,
      schema.OauthApplicationCreateAuditEntry,
      schema.OrgAddBillingManagerAuditEntry,
      schema.OrgAddMemberAuditEntry,
      schema.OrgBlockUserAuditEntry,
      schema.OrgConfigDisableCollaboratorsOnlyAuditEntry,
      schema.OrgConfigEnableCollaboratorsOnlyAuditEntry,
      schema.OrgCreateAuditEntry,
      schema.OrgDisableOauthAppRestrictionsAuditEntry,
      schema.OrgDisableSamlAuditEntry,
      schema.OrgDisableTwoFactorRequirementAuditEntry,
      schema.OrgEnableOauthAppRestrictionsAuditEntry,
      schema.OrgEnableSamlAuditEntry,
      schema.OrgEnableTwoFactorRequirementAuditEntry,
      schema.OrgInviteMemberAuditEntry,
      schema.OrgInviteToBusinessAuditEntry,
      schema.OrgOauthAppAccessApprovedAuditEntry,
      schema.OrgOauthAppAccessDeniedAuditEntry,
      schema.OrgOauthAppAccessRequestedAuditEntry,
      schema.OrgRemoveBillingManagerAuditEntry,
      schema.OrgRemoveMemberAuditEntry,
      schema.OrgRemoveOutsideCollaboratorAuditEntry,
      schema.OrgRestoreMemberAuditEntry,
      schema.OrgUnblockUserAuditEntry,
      schema.OrgUpdateDefaultRepositoryPermissionAuditEntry,
      schema.OrgUpdateMemberAuditEntry,
      schema.OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
      schema.OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
      schema.PrivateRepositoryForkingDisableAuditEntry,
      schema.PrivateRepositoryForkingEnableAuditEntry,
      schema.RepoAccessAuditEntry,
      schema.RepoAddMemberAuditEntry,
      schema.RepoAddTopicAuditEntry,
      schema.RepoArchivedAuditEntry,
      schema.RepoChangeMergeSettingAuditEntry,
      schema.RepoConfigDisableAnonymousGitAccessAuditEntry,
      schema.RepoConfigDisableCollaboratorsOnlyAuditEntry,
      schema.RepoConfigDisableContributorsOnlyAuditEntry,
      schema.RepoConfigDisableSockpuppetDisallowedAuditEntry,
      schema.RepoConfigEnableAnonymousGitAccessAuditEntry,
      schema.RepoConfigEnableCollaboratorsOnlyAuditEntry,
      schema.RepoConfigEnableContributorsOnlyAuditEntry,
      schema.RepoConfigEnableSockpuppetDisallowedAuditEntry,
      schema.RepoConfigLockAnonymousGitAccessAuditEntry,
      schema.RepoConfigUnlockAnonymousGitAccessAuditEntry,
      schema.RepoCreateAuditEntry,
      schema.RepoDestroyAuditEntry,
      schema.RepoRemoveMemberAuditEntry,
      schema.RepoRemoveTopicAuditEntry,
      schema.RepositoryVisibilityChangeDisableAuditEntry,
      schema.RepositoryVisibilityChangeEnableAuditEntry,
      schema.TeamAddMemberAuditEntry,
      schema.TeamAddRepositoryAuditEntry,
      schema.TeamChangeParentTeamAuditEntry,
      schema.TeamRemoveMemberAuditEntry,
      schema.TeamRemoveRepositoryAuditEntry,
    ])
  },
  get AuditEntry() {
    return new InterfaceNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [
        schema.MembersCanDeleteReposClearAuditEntry,
        schema.MembersCanDeleteReposDisableAuditEntry,
        schema.MembersCanDeleteReposEnableAuditEntry,
        schema.OauthApplicationCreateAuditEntry,
        schema.OrgAddBillingManagerAuditEntry,
        schema.OrgAddMemberAuditEntry,
        schema.OrgBlockUserAuditEntry,
        schema.OrgConfigDisableCollaboratorsOnlyAuditEntry,
        schema.OrgConfigEnableCollaboratorsOnlyAuditEntry,
        schema.OrgCreateAuditEntry,
        schema.OrgDisableOauthAppRestrictionsAuditEntry,
        schema.OrgDisableSamlAuditEntry,
        schema.OrgDisableTwoFactorRequirementAuditEntry,
        schema.OrgEnableOauthAppRestrictionsAuditEntry,
        schema.OrgEnableSamlAuditEntry,
        schema.OrgEnableTwoFactorRequirementAuditEntry,
        schema.OrgInviteMemberAuditEntry,
        schema.OrgInviteToBusinessAuditEntry,
        schema.OrgOauthAppAccessApprovedAuditEntry,
        schema.OrgOauthAppAccessDeniedAuditEntry,
        schema.OrgOauthAppAccessRequestedAuditEntry,
        schema.OrgRemoveBillingManagerAuditEntry,
        schema.OrgRemoveMemberAuditEntry,
        schema.OrgRemoveOutsideCollaboratorAuditEntry,
        schema.OrgRestoreMemberAuditEntry,
        schema.OrgUnblockUserAuditEntry,
        schema.OrgUpdateDefaultRepositoryPermissionAuditEntry,
        schema.OrgUpdateMemberAuditEntry,
        schema.OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
        schema.OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
        schema.PrivateRepositoryForkingDisableAuditEntry,
        schema.PrivateRepositoryForkingEnableAuditEntry,
        schema.RepoAccessAuditEntry,
        schema.RepoAddMemberAuditEntry,
        schema.RepoAddTopicAuditEntry,
        schema.RepoArchivedAuditEntry,
        schema.RepoChangeMergeSettingAuditEntry,
        schema.RepoConfigDisableAnonymousGitAccessAuditEntry,
        schema.RepoConfigDisableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigDisableContributorsOnlyAuditEntry,
        schema.RepoConfigDisableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigEnableAnonymousGitAccessAuditEntry,
        schema.RepoConfigEnableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigEnableContributorsOnlyAuditEntry,
        schema.RepoConfigEnableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigLockAnonymousGitAccessAuditEntry,
        schema.RepoConfigUnlockAnonymousGitAccessAuditEntry,
        schema.RepoCreateAuditEntry,
        schema.RepoDestroyAuditEntry,
        schema.RepoRemoveMemberAuditEntry,
        schema.RepoRemoveTopicAuditEntry,
        schema.RepositoryVisibilityChangeDisableAuditEntry,
        schema.RepositoryVisibilityChangeEnableAuditEntry,
        schema.TeamAddMemberAuditEntry,
        schema.TeamAddRepositoryAuditEntry,
        schema.TeamChangeParentTeamAuditEntry,
        schema.TeamRemoveMemberAuditEntry,
        schema.TeamRemoveRepositoryAuditEntry,
      ],
      { name: 'AuditEntry', extension: ((extensions as any) || {}).AuditEntry }
    )
  },
  get OperationType() {
    return new EnumNode({ name: 'OperationType' })
  },
  get AuditEntryActor() {
    return new UnionNode([schema.Bot, schema.Organization, schema.User])
  },
  get ActorLocation() {
    return new ObjectNode(
      {
        get city() {
          return new FieldNode(schema.String, undefined, true)
        },
        get country() {
          return new FieldNode(schema.String, undefined, true)
        },
        get countryCode() {
          return new FieldNode(schema.String, undefined, true)
        },
        get region() {
          return new FieldNode(schema.String, undefined, true)
        },
        get regionCode() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'ActorLocation',
        extension: ((extensions as any) || {}).ActorLocation,
      }
    )
  },
  get PreciseDateTime() {
    return new ScalarNode({
      name: 'PreciseDateTime',
      extension: ((extensions as any) || {}).PreciseDateTime,
    })
  },
  get OrganizationAuditEntryData() {
    return new InterfaceNode(
      {
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [
        schema.MembersCanDeleteReposClearAuditEntry,
        schema.MembersCanDeleteReposDisableAuditEntry,
        schema.MembersCanDeleteReposEnableAuditEntry,
        schema.OauthApplicationCreateAuditEntry,
        schema.OrgAddBillingManagerAuditEntry,
        schema.OrgAddMemberAuditEntry,
        schema.OrgBlockUserAuditEntry,
        schema.OrgConfigDisableCollaboratorsOnlyAuditEntry,
        schema.OrgConfigEnableCollaboratorsOnlyAuditEntry,
        schema.OrgCreateAuditEntry,
        schema.OrgDisableOauthAppRestrictionsAuditEntry,
        schema.OrgDisableSamlAuditEntry,
        schema.OrgDisableTwoFactorRequirementAuditEntry,
        schema.OrgEnableOauthAppRestrictionsAuditEntry,
        schema.OrgEnableSamlAuditEntry,
        schema.OrgEnableTwoFactorRequirementAuditEntry,
        schema.OrgInviteMemberAuditEntry,
        schema.OrgInviteToBusinessAuditEntry,
        schema.OrgOauthAppAccessApprovedAuditEntry,
        schema.OrgOauthAppAccessDeniedAuditEntry,
        schema.OrgOauthAppAccessRequestedAuditEntry,
        schema.OrgRemoveBillingManagerAuditEntry,
        schema.OrgRemoveMemberAuditEntry,
        schema.OrgRemoveOutsideCollaboratorAuditEntry,
        schema.OrgRestoreMemberAuditEntry,
        schema.OrgRestoreMemberMembershipOrganizationAuditEntryData,
        schema.OrgUnblockUserAuditEntry,
        schema.OrgUpdateDefaultRepositoryPermissionAuditEntry,
        schema.OrgUpdateMemberAuditEntry,
        schema.OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
        schema.OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
        schema.PrivateRepositoryForkingDisableAuditEntry,
        schema.PrivateRepositoryForkingEnableAuditEntry,
        schema.RepoAccessAuditEntry,
        schema.RepoAddMemberAuditEntry,
        schema.RepoAddTopicAuditEntry,
        schema.RepoArchivedAuditEntry,
        schema.RepoChangeMergeSettingAuditEntry,
        schema.RepoConfigDisableAnonymousGitAccessAuditEntry,
        schema.RepoConfigDisableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigDisableContributorsOnlyAuditEntry,
        schema.RepoConfigDisableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigEnableAnonymousGitAccessAuditEntry,
        schema.RepoConfigEnableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigEnableContributorsOnlyAuditEntry,
        schema.RepoConfigEnableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigLockAnonymousGitAccessAuditEntry,
        schema.RepoConfigUnlockAnonymousGitAccessAuditEntry,
        schema.RepoCreateAuditEntry,
        schema.RepoDestroyAuditEntry,
        schema.RepoRemoveMemberAuditEntry,
        schema.RepoRemoveTopicAuditEntry,
        schema.RepositoryVisibilityChangeDisableAuditEntry,
        schema.RepositoryVisibilityChangeEnableAuditEntry,
        schema.TeamAddMemberAuditEntry,
        schema.TeamAddRepositoryAuditEntry,
        schema.TeamChangeParentTeamAuditEntry,
        schema.TeamRemoveMemberAuditEntry,
        schema.TeamRemoveRepositoryAuditEntry,
      ],
      {
        name: 'OrganizationAuditEntryData',
        extension: ((extensions as any) || {}).OrganizationAuditEntryData,
      }
    )
  },
  get IssueComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isMinimized() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get minimizedReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'IssueComment',
        extension: ((extensions as any) || {}).IssueComment,
      }
    )
  },
  get IssuePubSubTopic() {
    return new EnumNode({ name: 'IssuePubSubTopic' })
  },
  get MembersCanDeleteReposClearAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'MembersCanDeleteReposClearAuditEntry',
        extension: ((extensions as any) || {})
          .MembersCanDeleteReposClearAuditEntry,
      }
    )
  },
  get EnterpriseAuditEntryData() {
    return new InterfaceNode(
      {
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [
        schema.MembersCanDeleteReposClearAuditEntry,
        schema.MembersCanDeleteReposDisableAuditEntry,
        schema.MembersCanDeleteReposEnableAuditEntry,
        schema.OrgInviteToBusinessAuditEntry,
        schema.PrivateRepositoryForkingDisableAuditEntry,
        schema.PrivateRepositoryForkingEnableAuditEntry,
        schema.RepositoryVisibilityChangeDisableAuditEntry,
        schema.RepositoryVisibilityChangeEnableAuditEntry,
      ],
      {
        name: 'EnterpriseAuditEntryData',
        extension: ((extensions as any) || {}).EnterpriseAuditEntryData,
      }
    )
  },
  get Enterprise() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get billingInfo() {
          return new FieldNode(schema.EnterpriseBillingInfo, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get descriptionHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get location() {
          return new FieldNode(schema.String, undefined, true)
        },
        get members() {
          return new FieldNode(
            schema.EnterpriseMemberConnection,
            new Arguments({
              get organizationLogins() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.EnterpriseMemberOrder, true)
              },
              get role() {
                return new ArgumentsField(
                  schema.EnterpriseUserAccountMembershipRole,
                  true
                )
              },
              get deployment() {
                return new ArgumentsField(schema.EnterpriseUserDeployment, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get organizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get ownerInfo() {
          return new FieldNode(schema.EnterpriseOwnerInfo, undefined, true)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userAccounts() {
          return new FieldNode(
            schema.EnterpriseUserAccountConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get viewerIsAdmin() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get websiteUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      { name: 'Enterprise', extension: ((extensions as any) || {}).Enterprise }
    )
  },
  get EnterpriseMemberConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseMemberEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseMember, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseMemberConnection',
        extension: ((extensions as any) || {}).EnterpriseMemberConnection,
      }
    )
  },
  get EnterpriseMemberEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isUnlicensed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get node() {
          return new FieldNode(schema.EnterpriseMember, undefined, true)
        },
      },
      {
        name: 'EnterpriseMemberEdge',
        extension: ((extensions as any) || {}).EnterpriseMemberEdge,
      }
    )
  },
  get EnterpriseMember() {
    return new UnionNode([schema.User, schema.EnterpriseUserAccount])
  },
  get EnterpriseUserAccount() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizations() {
          return new FieldNode(
            schema.EnterpriseOrganizationMembershipConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
              get role() {
                return new ArgumentsField(
                  schema.EnterpriseUserAccountMembershipRole,
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'EnterpriseUserAccount',
        extension: ((extensions as any) || {}).EnterpriseUserAccount,
      }
    )
  },
  get EnterpriseOrganizationMembershipConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseOrganizationMembershipEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Organization, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseOrganizationMembershipConnection',
        extension: ((extensions as any) || {})
          .EnterpriseOrganizationMembershipConnection,
      }
    )
  },
  get EnterpriseOrganizationMembershipEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get role() {
          return new FieldNode(
            schema.EnterpriseUserAccountMembershipRole,
            undefined,
            false
          )
        },
      },
      {
        name: 'EnterpriseOrganizationMembershipEdge',
        extension: ((extensions as any) || {})
          .EnterpriseOrganizationMembershipEdge,
      }
    )
  },
  get EnterpriseUserAccountMembershipRole() {
    return new EnumNode({ name: 'EnterpriseUserAccountMembershipRole' })
  },
  get OrganizationOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.OrganizationOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'OrganizationOrder' }
    )
  },
  get OrganizationOrderField() {
    return new EnumNode({ name: 'OrganizationOrderField' })
  },
  get EnterpriseServerInstallation() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get customerName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get hostName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isConnected() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get userAccounts() {
          return new FieldNode(
            schema.EnterpriseServerUserAccountConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  schema.EnterpriseServerUserAccountOrder,
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get userAccountsUploads() {
          return new FieldNode(
            schema.EnterpriseServerUserAccountsUploadConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  schema.EnterpriseServerUserAccountsUploadOrder,
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'EnterpriseServerInstallation',
        extension: ((extensions as any) || {}).EnterpriseServerInstallation,
      }
    )
  },
  get EnterpriseServerUserAccountConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerUserAccountEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerUserAccount, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseServerUserAccountConnection',
        extension: ((extensions as any) || {})
          .EnterpriseServerUserAccountConnection,
      }
    )
  },
  get EnterpriseServerUserAccountEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.EnterpriseServerUserAccount,
            undefined,
            true
          )
        },
      },
      {
        name: 'EnterpriseServerUserAccountEdge',
        extension: ((extensions as any) || {}).EnterpriseServerUserAccountEdge,
      }
    )
  },
  get EnterpriseServerUserAccount() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get emails() {
          return new FieldNode(
            schema.EnterpriseServerUserAccountEmailConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  schema.EnterpriseServerUserAccountEmailOrder,
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get enterpriseServerInstallation() {
          return new FieldNode(
            schema.EnterpriseServerInstallation,
            undefined,
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isSiteAdmin() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get profileName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get remoteCreatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get remoteUserId() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'EnterpriseServerUserAccount',
        extension: ((extensions as any) || {}).EnterpriseServerUserAccount,
      }
    )
  },
  get EnterpriseServerUserAccountEmailConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerUserAccountEmailEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerUserAccountEmail, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseServerUserAccountEmailConnection',
        extension: ((extensions as any) || {})
          .EnterpriseServerUserAccountEmailConnection,
      }
    )
  },
  get EnterpriseServerUserAccountEmailEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.EnterpriseServerUserAccountEmail,
            undefined,
            true
          )
        },
      },
      {
        name: 'EnterpriseServerUserAccountEmailEdge',
        extension: ((extensions as any) || {})
          .EnterpriseServerUserAccountEmailEdge,
      }
    )
  },
  get EnterpriseServerUserAccountEmail() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get email() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isPrimary() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get userAccount() {
          return new FieldNode(
            schema.EnterpriseServerUserAccount,
            undefined,
            false
          )
        },
      },
      {
        name: 'EnterpriseServerUserAccountEmail',
        extension: ((extensions as any) || {}).EnterpriseServerUserAccountEmail,
      }
    )
  },
  get EnterpriseServerUserAccountEmailOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.EnterpriseServerUserAccountEmailOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseServerUserAccountEmailOrder' }
    )
  },
  get EnterpriseServerUserAccountEmailOrderField() {
    return new EnumNode({ name: 'EnterpriseServerUserAccountEmailOrderField' })
  },
  get EnterpriseServerUserAccountOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.EnterpriseServerUserAccountOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseServerUserAccountOrder' }
    )
  },
  get EnterpriseServerUserAccountOrderField() {
    return new EnumNode({ name: 'EnterpriseServerUserAccountOrderField' })
  },
  get EnterpriseServerUserAccountsUploadConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerUserAccountsUploadEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerUserAccountsUpload, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseServerUserAccountsUploadConnection',
        extension: ((extensions as any) || {})
          .EnterpriseServerUserAccountsUploadConnection,
      }
    )
  },
  get EnterpriseServerUserAccountsUploadEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.EnterpriseServerUserAccountsUpload,
            undefined,
            true
          )
        },
      },
      {
        name: 'EnterpriseServerUserAccountsUploadEdge',
        extension: ((extensions as any) || {})
          .EnterpriseServerUserAccountsUploadEdge,
      }
    )
  },
  get EnterpriseServerUserAccountsUpload() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, false)
        },
        get enterpriseServerInstallation() {
          return new FieldNode(
            schema.EnterpriseServerInstallation,
            undefined,
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get syncState() {
          return new FieldNode(
            schema.EnterpriseServerUserAccountsUploadSyncState,
            undefined,
            false
          )
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'EnterpriseServerUserAccountsUpload',
        extension: ((extensions as any) || {})
          .EnterpriseServerUserAccountsUpload,
      }
    )
  },
  get EnterpriseServerUserAccountsUploadSyncState() {
    return new EnumNode({ name: 'EnterpriseServerUserAccountsUploadSyncState' })
  },
  get EnterpriseServerUserAccountsUploadOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.EnterpriseServerUserAccountsUploadOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseServerUserAccountsUploadOrder' }
    )
  },
  get EnterpriseServerUserAccountsUploadOrderField() {
    return new EnumNode({
      name: 'EnterpriseServerUserAccountsUploadOrderField',
    })
  },
  get EnterpriseServerInstallationOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.EnterpriseServerInstallationOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseServerInstallationOrder' }
    )
  },
  get EnterpriseServerInstallationOrderField() {
    return new EnumNode({ name: 'EnterpriseServerInstallationOrderField' })
  },
  get EnterpriseMemberOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.EnterpriseMemberOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseMemberOrder' }
    )
  },
  get EnterpriseMemberOrderField() {
    return new EnumNode({ name: 'EnterpriseMemberOrderField' })
  },
  get EnterpriseUserDeployment() {
    return new EnumNode({ name: 'EnterpriseUserDeployment' })
  },
  get OrganizationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Organization, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'OrganizationConnection',
        extension: ((extensions as any) || {}).OrganizationConnection,
      }
    )
  },
  get OrganizationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Organization, undefined, true)
        },
      },
      {
        name: 'OrganizationEdge',
        extension: ((extensions as any) || {}).OrganizationEdge,
      }
    )
  },
  get EnterpriseOwnerInfo() {
    return new ObjectNode(
      {
        get actionExecutionCapabilitySettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get admins() {
          return new FieldNode(
            schema.EnterpriseAdministratorConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get role() {
                return new ArgumentsField(
                  schema.EnterpriseAdministratorRole,
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.EnterpriseMemberOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get affiliatedUsersWithTwoFactorDisabled() {
          return new FieldNode(
            schema.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get affiliatedUsersWithTwoFactorDisabledExist() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get allowPrivateRepositoryForkingSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get allowPrivateRepositoryForkingSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get defaultRepositoryPermissionSetting() {
          return new FieldNode(
            schema.EnterpriseDefaultRepositoryPermissionSettingValue,
            undefined,
            false
          )
        },
        get defaultRepositoryPermissionSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(
                  schema.DefaultRepositoryPermissionField,
                  false
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get enterpriseServerInstallations() {
          return new FieldNode(
            schema.EnterpriseServerInstallationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get connectedOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(
                  schema.EnterpriseServerInstallationOrder,
                  true
                )
              },
            }),
            false
          )
        },
        get isUpdatingDefaultRepositoryPermission() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isUpdatingTwoFactorRequirement() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get membersCanChangeRepositoryVisibilitySetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get membersCanChangeRepositoryVisibilitySettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get membersCanCreateInternalRepositoriesSetting() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get membersCanCreatePrivateRepositoriesSetting() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get membersCanCreatePublicRepositoriesSetting() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get membersCanCreateRepositoriesSetting() {
          return new FieldNode(
            schema.EnterpriseMembersCanCreateRepositoriesSettingValue,
            undefined,
            true
          )
        },
        get membersCanCreateRepositoriesSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(
                  schema.OrganizationMembersCanCreateRepositoriesSettingValue,
                  false
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get membersCanDeleteIssuesSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get membersCanDeleteIssuesSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get membersCanDeleteRepositoriesSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get membersCanDeleteRepositoriesSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get membersCanInviteCollaboratorsSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get membersCanInviteCollaboratorsSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get membersCanMakePurchasesSetting() {
          return new FieldNode(
            schema.EnterpriseMembersCanMakePurchasesSettingValue,
            undefined,
            false
          )
        },
        get membersCanUpdateProtectedBranchesSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get membersCanUpdateProtectedBranchesSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get membersCanViewDependencyInsightsSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get membersCanViewDependencyInsightsSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get organizationProjectsSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get organizationProjectsSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get outsideCollaborators() {
          return new FieldNode(
            schema.EnterpriseOutsideCollaboratorConnection,
            new Arguments({
              get login() {
                return new ArgumentsField(schema.String, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.EnterpriseMemberOrder, true)
              },
              get visibility() {
                return new ArgumentsField(schema.RepositoryVisibility, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pendingAdminInvitations() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitationConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(
                  schema.EnterpriseAdministratorInvitationOrder,
                  true
                )
              },
              get role() {
                return new ArgumentsField(
                  schema.EnterpriseAdministratorRole,
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pendingCollaborators() {
          return new FieldNode(
            schema.EnterprisePendingCollaboratorConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(
                  schema.RepositoryInvitationOrder,
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pendingMemberInvitations() {
          return new FieldNode(
            schema.EnterprisePendingMemberInvitationConnection,
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repositoryProjectsSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get repositoryProjectsSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get samlIdentityProvider() {
          return new FieldNode(
            schema.EnterpriseIdentityProvider,
            undefined,
            true
          )
        },
        get samlIdentityProviderSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(
                  schema.IdentityProviderConfigurationState,
                  false
                )
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get teamDiscussionsSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledDisabledSettingValue,
            undefined,
            false
          )
        },
        get teamDiscussionsSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
        get twoFactorRequiredSetting() {
          return new FieldNode(
            schema.EnterpriseEnabledSettingValue,
            undefined,
            false
          )
        },
        get twoFactorRequiredSettingOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get value() {
                return new ArgumentsField(schema.Boolean, false)
              },
              get orderBy() {
                return new ArgumentsField(schema.OrganizationOrder, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'EnterpriseOwnerInfo',
        extension: ((extensions as any) || {}).EnterpriseOwnerInfo,
      }
    )
  },
  get EnterpriseAdministratorConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseAdministratorEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseAdministratorConnection',
        extension: ((extensions as any) || {})
          .EnterpriseAdministratorConnection,
      }
    )
  },
  get EnterpriseAdministratorEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, true)
        },
        get role() {
          return new FieldNode(
            schema.EnterpriseAdministratorRole,
            undefined,
            false
          )
        },
      },
      {
        name: 'EnterpriseAdministratorEdge',
        extension: ((extensions as any) || {}).EnterpriseAdministratorEdge,
      }
    )
  },
  get EnterpriseAdministratorRole() {
    return new EnumNode({ name: 'EnterpriseAdministratorRole' })
  },
  get EnterpriseAdministratorInvitationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseAdministratorInvitationEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseAdministratorInvitation, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseAdministratorInvitationConnection',
        extension: ((extensions as any) || {})
          .EnterpriseAdministratorInvitationConnection,
      }
    )
  },
  get EnterpriseAdministratorInvitationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitation,
            undefined,
            true
          )
        },
      },
      {
        name: 'EnterpriseAdministratorInvitationEdge',
        extension: ((extensions as any) || {})
          .EnterpriseAdministratorInvitationEdge,
      }
    )
  },
  get EnterpriseAdministratorInvitation() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get invitee() {
          return new FieldNode(schema.User, undefined, true)
        },
        get inviter() {
          return new FieldNode(schema.User, undefined, true)
        },
        get role() {
          return new FieldNode(
            schema.EnterpriseAdministratorRole,
            undefined,
            false
          )
        },
      },
      {
        name: 'EnterpriseAdministratorInvitation',
        extension: ((extensions as any) || {})
          .EnterpriseAdministratorInvitation,
      }
    )
  },
  get EnterpriseAdministratorInvitationOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.EnterpriseAdministratorInvitationOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseAdministratorInvitationOrder' }
    )
  },
  get EnterpriseAdministratorInvitationOrderField() {
    return new EnumNode({ name: 'EnterpriseAdministratorInvitationOrderField' })
  },
  get EnterprisePendingMemberInvitationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterprisePendingMemberInvitationEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationInvitation, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalUniqueUserCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterprisePendingMemberInvitationConnection',
        extension: ((extensions as any) || {})
          .EnterprisePendingMemberInvitationConnection,
      }
    )
  },
  get EnterprisePendingMemberInvitationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isUnlicensed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get node() {
          return new FieldNode(schema.OrganizationInvitation, undefined, true)
        },
      },
      {
        name: 'EnterprisePendingMemberInvitationEdge',
        extension: ((extensions as any) || {})
          .EnterprisePendingMemberInvitationEdge,
      }
    )
  },
  get OrganizationInvitation() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get invitationType() {
          return new FieldNode(
            schema.OrganizationInvitationType,
            undefined,
            false
          )
        },
        get invitee() {
          return new FieldNode(schema.User, undefined, true)
        },
        get inviter() {
          return new FieldNode(schema.User, undefined, false)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, false)
        },
        get role() {
          return new FieldNode(
            schema.OrganizationInvitationRole,
            undefined,
            false
          )
        },
      },
      {
        name: 'OrganizationInvitation',
        extension: ((extensions as any) || {}).OrganizationInvitation,
      }
    )
  },
  get OrganizationInvitationType() {
    return new EnumNode({ name: 'OrganizationInvitationType' })
  },
  get OrganizationInvitationRole() {
    return new EnumNode({ name: 'OrganizationInvitationRole' })
  },
  get TeamConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.TeamEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Team, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'TeamConnection',
        extension: ((extensions as any) || {}).TeamConnection,
      }
    )
  },
  get TeamEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Team, undefined, true)
        },
      },
      { name: 'TeamEdge', extension: ((extensions as any) || {}).TeamEdge }
    )
  },
  get Team() {
    return new ObjectNode(
      {
        get ancestors() {
          return new FieldNode(
            schema.TeamConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get childTeams() {
          return new FieldNode(
            schema.TeamConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.TeamOrder, true)
              },
              get userLogins() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get immediateOnly() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get combinedSlug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get discussion() {
          return new FieldNode(
            schema.TeamDiscussion,
            new Arguments(
              {
                get number() {
                  return new ArgumentsField(schema.Int, false)
                },
              },
              true
            ),
            true
          )
        },
        get discussions() {
          return new FieldNode(
            schema.TeamDiscussionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get isPinned() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.TeamDiscussionOrder, true)
              },
            }),
            false
          )
        },
        get discussionsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get discussionsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get editTeamResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get editTeamUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get invitations() {
          return new FieldNode(
            schema.OrganizationInvitationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get memberStatuses() {
          return new FieldNode(
            schema.UserStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.UserStatusOrder, true)
              },
            }),
            false
          )
        },
        get members() {
          return new FieldNode(
            schema.TeamMemberConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get membership() {
                return new ArgumentsField(schema.TeamMembershipType, true)
              },
              get role() {
                return new ArgumentsField(schema.TeamMemberRole, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.TeamMemberOrder, true)
              },
            }),
            false
          )
        },
        get membersResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get membersUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get newTeamResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get newTeamUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, false)
        },
        get parentTeam() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get privacy() {
          return new FieldNode(schema.TeamPrivacy, undefined, false)
        },
        get repositories() {
          return new FieldNode(
            schema.TeamRepositoryConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get query() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.TeamRepositoryOrder, true)
              },
            }),
            false
          )
        },
        get repositoriesResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get repositoriesUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get slug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get teamsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get teamsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get viewerCanAdminister() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
      },
      { name: 'Team', extension: ((extensions as any) || {}).Team }
    )
  },
  get TeamPrivacy() {
    return new EnumNode({ name: 'TeamPrivacy' })
  },
  get TeamMemberConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.TeamMemberEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'TeamMemberConnection',
        extension: ((extensions as any) || {}).TeamMemberConnection,
      }
    )
  },
  get TeamMemberEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get memberAccessResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get memberAccessUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, false)
        },
        get role() {
          return new FieldNode(schema.TeamMemberRole, undefined, false)
        },
      },
      {
        name: 'TeamMemberEdge',
        extension: ((extensions as any) || {}).TeamMemberEdge,
      }
    )
  },
  get TeamMemberRole() {
    return new EnumNode({ name: 'TeamMemberRole' })
  },
  get TeamMembershipType() {
    return new EnumNode({ name: 'TeamMembershipType' })
  },
  get TeamMemberOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.TeamMemberOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'TeamMemberOrder' }
    )
  },
  get TeamMemberOrderField() {
    return new EnumNode({ name: 'TeamMemberOrderField' })
  },
  get TeamRepositoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.TeamRepositoryEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Repository, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'TeamRepositoryConnection',
        extension: ((extensions as any) || {}).TeamRepositoryConnection,
      }
    )
  },
  get TeamRepositoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get permission() {
          return new FieldNode(schema.RepositoryPermission, undefined, false)
        },
      },
      {
        name: 'TeamRepositoryEdge',
        extension: ((extensions as any) || {}).TeamRepositoryEdge,
      }
    )
  },
  get RepositoryPermission() {
    return new EnumNode({ name: 'RepositoryPermission' })
  },
  get TeamRepositoryOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.TeamRepositoryOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'TeamRepositoryOrder' }
    )
  },
  get TeamRepositoryOrderField() {
    return new EnumNode({ name: 'TeamRepositoryOrderField' })
  },
  get OrganizationInvitationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationInvitationEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationInvitation, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'OrganizationInvitationConnection',
        extension: ((extensions as any) || {}).OrganizationInvitationConnection,
      }
    )
  },
  get OrganizationInvitationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.OrganizationInvitation, undefined, true)
        },
      },
      {
        name: 'OrganizationInvitationEdge',
        extension: ((extensions as any) || {}).OrganizationInvitationEdge,
      }
    )
  },
  get TeamOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.TeamOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'TeamOrder' }
    )
  },
  get TeamOrderField() {
    return new EnumNode({ name: 'TeamOrderField' })
  },
  get TeamDiscussionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.TeamDiscussionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.TeamDiscussion, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'TeamDiscussionConnection',
        extension: ((extensions as any) || {}).TeamDiscussionConnection,
      }
    )
  },
  get TeamDiscussionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.TeamDiscussion, undefined, true)
        },
      },
      {
        name: 'TeamDiscussionEdge',
        extension: ((extensions as any) || {}).TeamDiscussionEdge,
      }
    )
  },
  get TeamDiscussion() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyVersion() {
          return new FieldNode(schema.String, undefined, false)
        },
        get comments() {
          return new FieldNode(
            schema.TeamDiscussionCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(
                  schema.TeamDiscussionCommentOrder,
                  true
                )
              },
              get fromComment() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get commentsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get commentsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPinned() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isPrivate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get team() {
          return new FieldNode(schema.Team, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanPin() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerSubscription() {
          return new FieldNode(schema.SubscriptionState, undefined, true)
        },
      },
      {
        name: 'TeamDiscussion',
        extension: ((extensions as any) || {}).TeamDiscussion,
      }
    )
  },
  get TeamDiscussionCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.TeamDiscussionCommentEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.TeamDiscussionComment, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'TeamDiscussionCommentConnection',
        extension: ((extensions as any) || {}).TeamDiscussionCommentConnection,
      }
    )
  },
  get TeamDiscussionCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.TeamDiscussionComment, undefined, true)
        },
      },
      {
        name: 'TeamDiscussionCommentEdge',
        extension: ((extensions as any) || {}).TeamDiscussionCommentEdge,
      }
    )
  },
  get TeamDiscussionComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyVersion() {
          return new FieldNode(schema.String, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get discussion() {
          return new FieldNode(schema.TeamDiscussion, undefined, false)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'TeamDiscussionComment',
        extension: ((extensions as any) || {}).TeamDiscussionComment,
      }
    )
  },
  get TeamDiscussionCommentOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.TeamDiscussionCommentOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'TeamDiscussionCommentOrder' }
    )
  },
  get TeamDiscussionCommentOrderField() {
    return new EnumNode({ name: 'TeamDiscussionCommentOrderField' })
  },
  get TeamDiscussionOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.TeamDiscussionOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'TeamDiscussionOrder' }
    )
  },
  get TeamDiscussionOrderField() {
    return new EnumNode({ name: 'TeamDiscussionOrderField' })
  },
  get EnterpriseOutsideCollaboratorConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseOutsideCollaboratorEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseOutsideCollaboratorConnection',
        extension: ((extensions as any) || {})
          .EnterpriseOutsideCollaboratorConnection,
      }
    )
  },
  get EnterpriseOutsideCollaboratorEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isUnlicensed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, true)
        },
        get repositories() {
          return new FieldNode(
            schema.EnterpriseRepositoryInfoConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'EnterpriseOutsideCollaboratorEdge',
        extension: ((extensions as any) || {})
          .EnterpriseOutsideCollaboratorEdge,
      }
    )
  },
  get EnterpriseRepositoryInfoConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseRepositoryInfoEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseRepositoryInfo, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseRepositoryInfoConnection',
        extension: ((extensions as any) || {})
          .EnterpriseRepositoryInfoConnection,
      }
    )
  },
  get EnterpriseRepositoryInfoEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.EnterpriseRepositoryInfo, undefined, true)
        },
      },
      {
        name: 'EnterpriseRepositoryInfoEdge',
        extension: ((extensions as any) || {}).EnterpriseRepositoryInfoEdge,
      }
    )
  },
  get EnterpriseRepositoryInfo() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isPrivate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get nameWithOwner() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'EnterpriseRepositoryInfo',
        extension: ((extensions as any) || {}).EnterpriseRepositoryInfo,
      }
    )
  },
  get EnterprisePendingCollaboratorConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterprisePendingCollaboratorEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterprisePendingCollaboratorConnection',
        extension: ((extensions as any) || {})
          .EnterprisePendingCollaboratorConnection,
      }
    )
  },
  get EnterprisePendingCollaboratorEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isUnlicensed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, true)
        },
        get repositories() {
          return new FieldNode(
            schema.EnterpriseRepositoryInfoConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.RepositoryOrder, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'EnterprisePendingCollaboratorEdge',
        extension: ((extensions as any) || {})
          .EnterprisePendingCollaboratorEdge,
      }
    )
  },
  get RepositoryInvitationOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.RepositoryInvitationOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'RepositoryInvitationOrder' }
    )
  },
  get RepositoryInvitationOrderField() {
    return new EnumNode({ name: 'RepositoryInvitationOrderField' })
  },
  get EnterpriseDefaultRepositoryPermissionSettingValue() {
    return new EnumNode({
      name: 'EnterpriseDefaultRepositoryPermissionSettingValue',
    })
  },
  get DefaultRepositoryPermissionField() {
    return new EnumNode({ name: 'DefaultRepositoryPermissionField' })
  },
  get EnterpriseEnabledDisabledSettingValue() {
    return new EnumNode({ name: 'EnterpriseEnabledDisabledSettingValue' })
  },
  get EnterpriseMembersCanCreateRepositoriesSettingValue() {
    return new EnumNode({
      name: 'EnterpriseMembersCanCreateRepositoriesSettingValue',
    })
  },
  get OrganizationMembersCanCreateRepositoriesSettingValue() {
    return new EnumNode({
      name: 'OrganizationMembersCanCreateRepositoriesSettingValue',
    })
  },
  get EnterpriseMembersCanMakePurchasesSettingValue() {
    return new EnumNode({
      name: 'EnterpriseMembersCanMakePurchasesSettingValue',
    })
  },
  get ActionExecutionCapabilitySetting() {
    return new EnumNode({ name: 'ActionExecutionCapabilitySetting' })
  },
  get EnterpriseEnabledSettingValue() {
    return new EnumNode({ name: 'EnterpriseEnabledSettingValue' })
  },
  get EnterpriseIdentityProvider() {
    return new ObjectNode(
      {
        get digestMethod() {
          return new FieldNode(schema.SamlDigestAlgorithm, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get externalIdentities() {
          return new FieldNode(
            schema.ExternalIdentityConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get idpCertificate() {
          return new FieldNode(schema.X509Certificate, undefined, true)
        },
        get issuer() {
          return new FieldNode(schema.String, undefined, true)
        },
        get recoveryCodes() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
        get signatureMethod() {
          return new FieldNode(schema.SamlSignatureAlgorithm, undefined, true)
        },
        get ssoUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'EnterpriseIdentityProvider',
        extension: ((extensions as any) || {}).EnterpriseIdentityProvider,
      }
    )
  },
  get ExternalIdentityConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ExternalIdentityEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.ExternalIdentity, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ExternalIdentityConnection',
        extension: ((extensions as any) || {}).ExternalIdentityConnection,
      }
    )
  },
  get ExternalIdentityEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.ExternalIdentity, undefined, true)
        },
      },
      {
        name: 'ExternalIdentityEdge',
        extension: ((extensions as any) || {}).ExternalIdentityEdge,
      }
    )
  },
  get ExternalIdentity() {
    return new ObjectNode(
      {
        get guid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get organizationInvitation() {
          return new FieldNode(schema.OrganizationInvitation, undefined, true)
        },
        get samlIdentity() {
          return new FieldNode(
            schema.ExternalIdentitySamlAttributes,
            undefined,
            true
          )
        },
        get scimIdentity() {
          return new FieldNode(
            schema.ExternalIdentityScimAttributes,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'ExternalIdentity',
        extension: ((extensions as any) || {}).ExternalIdentity,
      }
    )
  },
  get ExternalIdentitySamlAttributes() {
    return new ObjectNode(
      {
        get nameId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'ExternalIdentitySamlAttributes',
        extension: ((extensions as any) || {}).ExternalIdentitySamlAttributes,
      }
    )
  },
  get ExternalIdentityScimAttributes() {
    return new ObjectNode(
      {
        get username() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'ExternalIdentityScimAttributes',
        extension: ((extensions as any) || {}).ExternalIdentityScimAttributes,
      }
    )
  },
  get PublicKey() {
    return new ObjectNode(
      {
        get accessedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get fingerprint() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isReadOnly() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get key() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
      },
      { name: 'PublicKey', extension: ((extensions as any) || {}).PublicKey }
    )
  },
  get X509Certificate() {
    return new ScalarNode({
      name: 'X509Certificate',
      extension: ((extensions as any) || {}).X509Certificate,
    })
  },
  get SamlSignatureAlgorithm() {
    return new EnumNode({ name: 'SamlSignatureAlgorithm' })
  },
  get SamlDigestAlgorithm() {
    return new EnumNode({ name: 'SamlDigestAlgorithm' })
  },
  get IdentityProviderConfigurationState() {
    return new EnumNode({ name: 'IdentityProviderConfigurationState' })
  },
  get EnterpriseServerInstallationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerInstallationEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseServerInstallation, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseServerInstallationConnection',
        extension: ((extensions as any) || {})
          .EnterpriseServerInstallationConnection,
      }
    )
  },
  get EnterpriseServerInstallationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.EnterpriseServerInstallation,
            undefined,
            true
          )
        },
      },
      {
        name: 'EnterpriseServerInstallationEdge',
        extension: ((extensions as any) || {}).EnterpriseServerInstallationEdge,
      }
    )
  },
  get EnterpriseBillingInfo() {
    return new ObjectNode(
      {
        get allLicensableUsersCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get assetPacks() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get availableSeats() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get bandwidthQuota() {
          return new FieldNode(schema.Float, undefined, false)
        },
        get bandwidthUsage() {
          return new FieldNode(schema.Float, undefined, false)
        },
        get bandwidthUsagePercentage() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get seats() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get storageQuota() {
          return new FieldNode(schema.Float, undefined, false)
        },
        get storageUsage() {
          return new FieldNode(schema.Float, undefined, false)
        },
        get storageUsagePercentage() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalAvailableLicenses() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalLicenses() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseBillingInfo',
        extension: ((extensions as any) || {}).EnterpriseBillingInfo,
      }
    )
  },
  get Date() {
    return new ScalarNode({
      name: 'Date',
      extension: ((extensions as any) || {}).Date,
    })
  },
  get EnterpriseUserAccountConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseUserAccountEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.EnterpriseUserAccount, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'EnterpriseUserAccountConnection',
        extension: ((extensions as any) || {}).EnterpriseUserAccountConnection,
      }
    )
  },
  get EnterpriseUserAccountEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.EnterpriseUserAccount, undefined, true)
        },
      },
      {
        name: 'EnterpriseUserAccountEdge',
        extension: ((extensions as any) || {}).EnterpriseUserAccountEdge,
      }
    )
  },
  get MembersCanDeleteReposDisableAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'MembersCanDeleteReposDisableAuditEntry',
        extension: ((extensions as any) || {})
          .MembersCanDeleteReposDisableAuditEntry,
      }
    )
  },
  get MembersCanDeleteReposEnableAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'MembersCanDeleteReposEnableAuditEntry',
        extension: ((extensions as any) || {})
          .MembersCanDeleteReposEnableAuditEntry,
      }
    )
  },
  get OauthApplicationCreateAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get applicationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get callbackUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get oauthApplicationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get oauthApplicationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get oauthApplicationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get rateLimit() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get state() {
          return new FieldNode(
            schema.OauthApplicationCreateAuditEntryState,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OauthApplicationCreateAuditEntry',
        extension: ((extensions as any) || {}).OauthApplicationCreateAuditEntry,
      }
    )
  },
  get OauthApplicationAuditEntryData() {
    return new InterfaceNode(
      {
        get oauthApplicationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get oauthApplicationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get oauthApplicationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [
        schema.OauthApplicationCreateAuditEntry,
        schema.OrgOauthAppAccessApprovedAuditEntry,
        schema.OrgOauthAppAccessDeniedAuditEntry,
        schema.OrgOauthAppAccessRequestedAuditEntry,
      ],
      {
        name: 'OauthApplicationAuditEntryData',
        extension: ((extensions as any) || {}).OauthApplicationAuditEntryData,
      }
    )
  },
  get OauthApplicationCreateAuditEntryState() {
    return new EnumNode({ name: 'OauthApplicationCreateAuditEntryState' })
  },
  get OauthApplicationRevokeTokensAuditEntryState() {
    return new EnumNode({ name: 'OauthApplicationRevokeTokensAuditEntryState' })
  },
  get OrgAddBillingManagerAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get invitationEmail() {
          return new FieldNode(schema.String, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgAddBillingManagerAuditEntry',
        extension: ((extensions as any) || {}).OrgAddBillingManagerAuditEntry,
      }
    )
  },
  get OrgAddMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get permission() {
          return new FieldNode(
            schema.OrgAddMemberAuditEntryPermission,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgAddMemberAuditEntry',
        extension: ((extensions as any) || {}).OrgAddMemberAuditEntry,
      }
    )
  },
  get OrgAddMemberAuditEntryPermission() {
    return new EnumNode({ name: 'OrgAddMemberAuditEntryPermission' })
  },
  get OrgBlockUserAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get blockedUser() {
          return new FieldNode(schema.User, undefined, true)
        },
        get blockedUserName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get blockedUserResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get blockedUserUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgBlockUserAuditEntry',
        extension: ((extensions as any) || {}).OrgBlockUserAuditEntry,
      }
    )
  },
  get OrgConfigDisableCollaboratorsOnlyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgConfigDisableCollaboratorsOnlyAuditEntry',
        extension: ((extensions as any) || {})
          .OrgConfigDisableCollaboratorsOnlyAuditEntry,
      }
    )
  },
  get OrgConfigEnableCollaboratorsOnlyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgConfigEnableCollaboratorsOnlyAuditEntry',
        extension: ((extensions as any) || {})
          .OrgConfigEnableCollaboratorsOnlyAuditEntry,
      }
    )
  },
  get OrgCreateAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get billingPlan() {
          return new FieldNode(
            schema.OrgCreateAuditEntryBillingPlan,
            undefined,
            true
          )
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgCreateAuditEntry',
        extension: ((extensions as any) || {}).OrgCreateAuditEntry,
      }
    )
  },
  get OrgCreateAuditEntryBillingPlan() {
    return new EnumNode({ name: 'OrgCreateAuditEntryBillingPlan' })
  },
  get OrgDisableOauthAppRestrictionsAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgDisableOauthAppRestrictionsAuditEntry',
        extension: ((extensions as any) || {})
          .OrgDisableOauthAppRestrictionsAuditEntry,
      }
    )
  },
  get OrgDisableSamlAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get digestMethodUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get issuerUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get signatureMethodUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get singleSignOnUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgDisableSamlAuditEntry',
        extension: ((extensions as any) || {}).OrgDisableSamlAuditEntry,
      }
    )
  },
  get OrgDisableTwoFactorRequirementAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgDisableTwoFactorRequirementAuditEntry',
        extension: ((extensions as any) || {})
          .OrgDisableTwoFactorRequirementAuditEntry,
      }
    )
  },
  get OrgEnableOauthAppRestrictionsAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgEnableOauthAppRestrictionsAuditEntry',
        extension: ((extensions as any) || {})
          .OrgEnableOauthAppRestrictionsAuditEntry,
      }
    )
  },
  get OrgEnableSamlAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get digestMethodUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get issuerUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get signatureMethodUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get singleSignOnUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgEnableSamlAuditEntry',
        extension: ((extensions as any) || {}).OrgEnableSamlAuditEntry,
      }
    )
  },
  get OrgEnableTwoFactorRequirementAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgEnableTwoFactorRequirementAuditEntry',
        extension: ((extensions as any) || {})
          .OrgEnableTwoFactorRequirementAuditEntry,
      }
    )
  },
  get OrgInviteMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationInvitation() {
          return new FieldNode(schema.OrganizationInvitation, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgInviteMemberAuditEntry',
        extension: ((extensions as any) || {}).OrgInviteMemberAuditEntry,
      }
    )
  },
  get OrgInviteToBusinessAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgInviteToBusinessAuditEntry',
        extension: ((extensions as any) || {}).OrgInviteToBusinessAuditEntry,
      }
    )
  },
  get OrgOauthAppAccessApprovedAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get oauthApplicationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get oauthApplicationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get oauthApplicationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgOauthAppAccessApprovedAuditEntry',
        extension: ((extensions as any) || {})
          .OrgOauthAppAccessApprovedAuditEntry,
      }
    )
  },
  get OrgOauthAppAccessDeniedAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get oauthApplicationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get oauthApplicationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get oauthApplicationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgOauthAppAccessDeniedAuditEntry',
        extension: ((extensions as any) || {})
          .OrgOauthAppAccessDeniedAuditEntry,
      }
    )
  },
  get OrgOauthAppAccessRequestedAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get oauthApplicationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get oauthApplicationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get oauthApplicationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgOauthAppAccessRequestedAuditEntry',
        extension: ((extensions as any) || {})
          .OrgOauthAppAccessRequestedAuditEntry,
      }
    )
  },
  get OrgRemoveBillingManagerAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get reason() {
          return new FieldNode(
            schema.OrgRemoveBillingManagerAuditEntryReason,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRemoveBillingManagerAuditEntry',
        extension: ((extensions as any) || {})
          .OrgRemoveBillingManagerAuditEntry,
      }
    )
  },
  get OrgRemoveBillingManagerAuditEntryReason() {
    return new EnumNode({ name: 'OrgRemoveBillingManagerAuditEntryReason' })
  },
  get OrgRemoveMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get membershipTypes() {
          return new FieldNode(
            new ArrayNode(schema.OrgRemoveMemberAuditEntryMembershipType, true),
            undefined,
            true
          )
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get reason() {
          return new FieldNode(
            schema.OrgRemoveMemberAuditEntryReason,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRemoveMemberAuditEntry',
        extension: ((extensions as any) || {}).OrgRemoveMemberAuditEntry,
      }
    )
  },
  get OrgRemoveMemberAuditEntryReason() {
    return new EnumNode({ name: 'OrgRemoveMemberAuditEntryReason' })
  },
  get OrgRemoveMemberAuditEntryMembershipType() {
    return new EnumNode({ name: 'OrgRemoveMemberAuditEntryMembershipType' })
  },
  get OrgRemoveOutsideCollaboratorAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get membershipTypes() {
          return new FieldNode(
            new ArrayNode(
              schema.OrgRemoveOutsideCollaboratorAuditEntryMembershipType,
              true
            ),
            undefined,
            true
          )
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get reason() {
          return new FieldNode(
            schema.OrgRemoveOutsideCollaboratorAuditEntryReason,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRemoveOutsideCollaboratorAuditEntry',
        extension: ((extensions as any) || {})
          .OrgRemoveOutsideCollaboratorAuditEntry,
      }
    )
  },
  get OrgRemoveOutsideCollaboratorAuditEntryReason() {
    return new EnumNode({
      name: 'OrgRemoveOutsideCollaboratorAuditEntryReason',
    })
  },
  get OrgRemoveOutsideCollaboratorAuditEntryMembershipType() {
    return new EnumNode({
      name: 'OrgRemoveOutsideCollaboratorAuditEntryMembershipType',
    })
  },
  get OrgRestoreMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get restoredCustomEmailRoutingsCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get restoredIssueAssignmentsCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get restoredMemberships() {
          return new FieldNode(
            new ArrayNode(schema.OrgRestoreMemberAuditEntryMembership, true),
            undefined,
            true
          )
        },
        get restoredMembershipsCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get restoredRepositoriesCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get restoredRepositoryStarsCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get restoredRepositoryWatchesCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRestoreMemberAuditEntry',
        extension: ((extensions as any) || {}).OrgRestoreMemberAuditEntry,
      }
    )
  },
  get OrgRestoreMemberAuditEntryMembership() {
    return new UnionNode([
      schema.OrgRestoreMemberMembershipOrganizationAuditEntryData,
      schema.OrgRestoreMemberMembershipRepositoryAuditEntryData,
      schema.OrgRestoreMemberMembershipTeamAuditEntryData,
    ])
  },
  get OrgRestoreMemberMembershipOrganizationAuditEntryData() {
    return new ObjectNode(
      {
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRestoreMemberMembershipOrganizationAuditEntryData',
        extension: ((extensions as any) || {})
          .OrgRestoreMemberMembershipOrganizationAuditEntryData,
      }
    )
  },
  get OrgRestoreMemberMembershipRepositoryAuditEntryData() {
    return new ObjectNode(
      {
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRestoreMemberMembershipRepositoryAuditEntryData',
        extension: ((extensions as any) || {})
          .OrgRestoreMemberMembershipRepositoryAuditEntryData,
      }
    )
  },
  get RepositoryAuditEntryData() {
    return new InterfaceNode(
      {
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [
        schema.OrgRestoreMemberMembershipRepositoryAuditEntryData,
        schema.PrivateRepositoryForkingDisableAuditEntry,
        schema.PrivateRepositoryForkingEnableAuditEntry,
        schema.RepoAccessAuditEntry,
        schema.RepoAddMemberAuditEntry,
        schema.RepoAddTopicAuditEntry,
        schema.RepoArchivedAuditEntry,
        schema.RepoChangeMergeSettingAuditEntry,
        schema.RepoConfigDisableAnonymousGitAccessAuditEntry,
        schema.RepoConfigDisableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigDisableContributorsOnlyAuditEntry,
        schema.RepoConfigDisableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigEnableAnonymousGitAccessAuditEntry,
        schema.RepoConfigEnableCollaboratorsOnlyAuditEntry,
        schema.RepoConfigEnableContributorsOnlyAuditEntry,
        schema.RepoConfigEnableSockpuppetDisallowedAuditEntry,
        schema.RepoConfigLockAnonymousGitAccessAuditEntry,
        schema.RepoConfigUnlockAnonymousGitAccessAuditEntry,
        schema.RepoCreateAuditEntry,
        schema.RepoDestroyAuditEntry,
        schema.RepoRemoveMemberAuditEntry,
        schema.RepoRemoveTopicAuditEntry,
        schema.TeamAddRepositoryAuditEntry,
        schema.TeamRemoveRepositoryAuditEntry,
      ],
      {
        name: 'RepositoryAuditEntryData',
        extension: ((extensions as any) || {}).RepositoryAuditEntryData,
      }
    )
  },
  get OrgRestoreMemberMembershipTeamAuditEntryData() {
    return new ObjectNode(
      {
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgRestoreMemberMembershipTeamAuditEntryData',
        extension: ((extensions as any) || {})
          .OrgRestoreMemberMembershipTeamAuditEntryData,
      }
    )
  },
  get TeamAuditEntryData() {
    return new InterfaceNode(
      {
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      [
        schema.OrgRestoreMemberMembershipTeamAuditEntryData,
        schema.TeamAddMemberAuditEntry,
        schema.TeamAddRepositoryAuditEntry,
        schema.TeamChangeParentTeamAuditEntry,
        schema.TeamRemoveMemberAuditEntry,
        schema.TeamRemoveRepositoryAuditEntry,
      ],
      {
        name: 'TeamAuditEntryData',
        extension: ((extensions as any) || {}).TeamAuditEntryData,
      }
    )
  },
  get OrgUnblockUserAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get blockedUser() {
          return new FieldNode(schema.User, undefined, true)
        },
        get blockedUserName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get blockedUserResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get blockedUserUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgUnblockUserAuditEntry',
        extension: ((extensions as any) || {}).OrgUnblockUserAuditEntry,
      }
    )
  },
  get OrgUpdateDefaultRepositoryPermissionAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get permission() {
          return new FieldNode(
            schema.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission,
            undefined,
            true
          )
        },
        get permissionWas() {
          return new FieldNode(
            schema.OrgUpdateDefaultRepositoryPermissionAuditEntryPermission,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgUpdateDefaultRepositoryPermissionAuditEntry',
        extension: ((extensions as any) || {})
          .OrgUpdateDefaultRepositoryPermissionAuditEntry,
      }
    )
  },
  get OrgUpdateDefaultRepositoryPermissionAuditEntryPermission() {
    return new EnumNode({
      name: 'OrgUpdateDefaultRepositoryPermissionAuditEntryPermission',
    })
  },
  get OrgUpdateMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get permission() {
          return new FieldNode(
            schema.OrgUpdateMemberAuditEntryPermission,
            undefined,
            true
          )
        },
        get permissionWas() {
          return new FieldNode(
            schema.OrgUpdateMemberAuditEntryPermission,
            undefined,
            true
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgUpdateMemberAuditEntry',
        extension: ((extensions as any) || {}).OrgUpdateMemberAuditEntry,
      }
    )
  },
  get OrgUpdateMemberAuditEntryPermission() {
    return new EnumNode({ name: 'OrgUpdateMemberAuditEntryPermission' })
  },
  get OrgUpdateMemberRepositoryCreationPermissionAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get canCreateRepositories() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
        extension: ((extensions as any) || {})
          .OrgUpdateMemberRepositoryCreationPermissionAuditEntry,
      }
    )
  },
  get OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility() {
    return new EnumNode({
      name: 'OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility',
    })
  },
  get OrgUpdateMemberRepositoryInvitationPermissionAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get canInviteOutsideCollaboratorsToRepositories() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
        extension: ((extensions as any) || {})
          .OrgUpdateMemberRepositoryInvitationPermissionAuditEntry,
      }
    )
  },
  get PrivateRepositoryForkingDisableAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'PrivateRepositoryForkingDisableAuditEntry',
        extension: ((extensions as any) || {})
          .PrivateRepositoryForkingDisableAuditEntry,
      }
    )
  },
  get PrivateRepositoryForkingEnableAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'PrivateRepositoryForkingEnableAuditEntry',
        extension: ((extensions as any) || {})
          .PrivateRepositoryForkingEnableAuditEntry,
      }
    )
  },
  get RepoAccessAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.RepoAccessAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepoAccessAuditEntry',
        extension: ((extensions as any) || {}).RepoAccessAuditEntry,
      }
    )
  },
  get RepoAccessAuditEntryVisibility() {
    return new EnumNode({ name: 'RepoAccessAuditEntryVisibility' })
  },
  get RepoAddMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.RepoAddMemberAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepoAddMemberAuditEntry',
        extension: ((extensions as any) || {}).RepoAddMemberAuditEntry,
      }
    )
  },
  get RepoAddMemberAuditEntryVisibility() {
    return new EnumNode({ name: 'RepoAddMemberAuditEntryVisibility' })
  },
  get RepoAddTopicAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get topic() {
          return new FieldNode(schema.Topic, undefined, true)
        },
        get topicName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoAddTopicAuditEntry',
        extension: ((extensions as any) || {}).RepoAddTopicAuditEntry,
      }
    )
  },
  get TopicAuditEntryData() {
    return new InterfaceNode(
      {
        get topic() {
          return new FieldNode(schema.Topic, undefined, true)
        },
        get topicName() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      [schema.RepoAddTopicAuditEntry, schema.RepoRemoveTopicAuditEntry],
      {
        name: 'TopicAuditEntryData',
        extension: ((extensions as any) || {}).TopicAuditEntryData,
      }
    )
  },
  get RepoArchivedAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.RepoArchivedAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepoArchivedAuditEntry',
        extension: ((extensions as any) || {}).RepoArchivedAuditEntry,
      }
    )
  },
  get RepoArchivedAuditEntryVisibility() {
    return new EnumNode({ name: 'RepoArchivedAuditEntryVisibility' })
  },
  get RepoChangeMergeSettingAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isEnabled() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get mergeType() {
          return new FieldNode(
            schema.RepoChangeMergeSettingAuditEntryMergeType,
            undefined,
            true
          )
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoChangeMergeSettingAuditEntry',
        extension: ((extensions as any) || {}).RepoChangeMergeSettingAuditEntry,
      }
    )
  },
  get RepoChangeMergeSettingAuditEntryMergeType() {
    return new EnumNode({ name: 'RepoChangeMergeSettingAuditEntryMergeType' })
  },
  get RepoConfigDisableAnonymousGitAccessAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigDisableAnonymousGitAccessAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigDisableAnonymousGitAccessAuditEntry,
      }
    )
  },
  get RepoConfigDisableCollaboratorsOnlyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigDisableCollaboratorsOnlyAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigDisableCollaboratorsOnlyAuditEntry,
      }
    )
  },
  get RepoConfigDisableContributorsOnlyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigDisableContributorsOnlyAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigDisableContributorsOnlyAuditEntry,
      }
    )
  },
  get RepoConfigDisableSockpuppetDisallowedAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigDisableSockpuppetDisallowedAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigDisableSockpuppetDisallowedAuditEntry,
      }
    )
  },
  get RepoConfigEnableAnonymousGitAccessAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigEnableAnonymousGitAccessAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigEnableAnonymousGitAccessAuditEntry,
      }
    )
  },
  get RepoConfigEnableCollaboratorsOnlyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigEnableCollaboratorsOnlyAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigEnableCollaboratorsOnlyAuditEntry,
      }
    )
  },
  get RepoConfigEnableContributorsOnlyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigEnableContributorsOnlyAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigEnableContributorsOnlyAuditEntry,
      }
    )
  },
  get RepoConfigEnableSockpuppetDisallowedAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigEnableSockpuppetDisallowedAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigEnableSockpuppetDisallowedAuditEntry,
      }
    )
  },
  get RepoConfigLockAnonymousGitAccessAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigLockAnonymousGitAccessAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigLockAnonymousGitAccessAuditEntry,
      }
    )
  },
  get RepoConfigUnlockAnonymousGitAccessAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoConfigUnlockAnonymousGitAccessAuditEntry',
        extension: ((extensions as any) || {})
          .RepoConfigUnlockAnonymousGitAccessAuditEntry,
      }
    )
  },
  get RepoCreateAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get forkParentName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get forkSourceName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.RepoCreateAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepoCreateAuditEntry',
        extension: ((extensions as any) || {}).RepoCreateAuditEntry,
      }
    )
  },
  get RepoCreateAuditEntryVisibility() {
    return new EnumNode({ name: 'RepoCreateAuditEntryVisibility' })
  },
  get RepoDestroyAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.RepoDestroyAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepoDestroyAuditEntry',
        extension: ((extensions as any) || {}).RepoDestroyAuditEntry,
      }
    )
  },
  get RepoDestroyAuditEntryVisibility() {
    return new EnumNode({ name: 'RepoDestroyAuditEntryVisibility' })
  },
  get RepoRemoveMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get visibility() {
          return new FieldNode(
            schema.RepoRemoveMemberAuditEntryVisibility,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepoRemoveMemberAuditEntry',
        extension: ((extensions as any) || {}).RepoRemoveMemberAuditEntry,
      }
    )
  },
  get RepoRemoveMemberAuditEntryVisibility() {
    return new EnumNode({ name: 'RepoRemoveMemberAuditEntryVisibility' })
  },
  get RepoRemoveTopicAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get topic() {
          return new FieldNode(schema.Topic, undefined, true)
        },
        get topicName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepoRemoveTopicAuditEntry',
        extension: ((extensions as any) || {}).RepoRemoveTopicAuditEntry,
      }
    )
  },
  get RepositoryVisibilityChangeDisableAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepositoryVisibilityChangeDisableAuditEntry',
        extension: ((extensions as any) || {})
          .RepositoryVisibilityChangeDisableAuditEntry,
      }
    )
  },
  get RepositoryVisibilityChangeEnableAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get enterpriseResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get enterpriseSlug() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterpriseUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'RepositoryVisibilityChangeEnableAuditEntry',
        extension: ((extensions as any) || {})
          .RepositoryVisibilityChangeEnableAuditEntry,
      }
    )
  },
  get TeamAddMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isLdapMapped() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'TeamAddMemberAuditEntry',
        extension: ((extensions as any) || {}).TeamAddMemberAuditEntry,
      }
    )
  },
  get TeamAddRepositoryAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isLdapMapped() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'TeamAddRepositoryAuditEntry',
        extension: ((extensions as any) || {}).TeamAddRepositoryAuditEntry,
      }
    )
  },
  get TeamChangeParentTeamAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isLdapMapped() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get parentTeam() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get parentTeamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get parentTeamNameWas() {
          return new FieldNode(schema.String, undefined, true)
        },
        get parentTeamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get parentTeamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get parentTeamWas() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get parentTeamWasResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get parentTeamWasUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'TeamChangeParentTeamAuditEntry',
        extension: ((extensions as any) || {}).TeamChangeParentTeamAuditEntry,
      }
    )
  },
  get TeamRemoveMemberAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isLdapMapped() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'TeamRemoveMemberAuditEntry',
        extension: ((extensions as any) || {}).TeamRemoveMemberAuditEntry,
      }
    )
  },
  get TeamRemoveRepositoryAuditEntry() {
    return new ObjectNode(
      {
        get action() {
          return new FieldNode(schema.String, undefined, false)
        },
        get actor() {
          return new FieldNode(schema.AuditEntryActor, undefined, true)
        },
        get actorIp() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorLocation() {
          return new FieldNode(schema.ActorLocation, undefined, true)
        },
        get actorLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get actorResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get actorUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.PreciseDateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isLdapMapped() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get operationType() {
          return new FieldNode(schema.OperationType, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get organizationName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organizationResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get organizationUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get repositoryName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repositoryResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get repositoryUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get team() {
          return new FieldNode(schema.Team, undefined, true)
        },
        get teamName() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get teamUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
        get userLogin() {
          return new FieldNode(schema.String, undefined, true)
        },
        get userResourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get userUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'TeamRemoveRepositoryAuditEntry',
        extension: ((extensions as any) || {}).TeamRemoveRepositoryAuditEntry,
      }
    )
  },
  get AuditLogOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.AuditLogOrderField, true)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, true)
        },
      },
      { name: 'AuditLogOrder' }
    )
  },
  get AuditLogOrderField() {
    return new EnumNode({ name: 'AuditLogOrderField' })
  },
  get OrganizationIdentityProvider() {
    return new ObjectNode(
      {
        get digestMethod() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get externalIdentities() {
          return new FieldNode(
            schema.ExternalIdentityConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get idpCertificate() {
          return new FieldNode(schema.X509Certificate, undefined, true)
        },
        get issuer() {
          return new FieldNode(schema.String, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get signatureMethod() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get ssoUrl() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'OrganizationIdentityProvider',
        extension: ((extensions as any) || {}).OrganizationIdentityProvider,
      }
    )
  },
  get Mannequin() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            schema.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get login() {
          return new FieldNode(schema.String, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'Mannequin', extension: ((extensions as any) || {}).Mannequin }
    )
  },
  get OrganizationMemberConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.OrganizationMemberEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'OrganizationMemberConnection',
        extension: ((extensions as any) || {}).OrganizationMemberConnection,
      }
    )
  },
  get OrganizationMemberEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get hasTwoFactorEnabled() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get node() {
          return new FieldNode(schema.User, undefined, true)
        },
        get role() {
          return new FieldNode(schema.OrganizationMemberRole, undefined, true)
        },
      },
      {
        name: 'OrganizationMemberEdge',
        extension: ((extensions as any) || {}).OrganizationMemberEdge,
      }
    )
  },
  get OrganizationMemberRole() {
    return new EnumNode({ name: 'OrganizationMemberRole' })
  },
  get TeamRole() {
    return new EnumNode({ name: 'TeamRole' })
  },
  get GistPrivacy() {
    return new EnumNode({ name: 'GistPrivacy' })
  },
  get RepositoryInvitationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.RepositoryInvitation, undefined, true)
        },
      },
      {
        name: 'RepositoryInvitationEdge',
        extension: ((extensions as any) || {}).RepositoryInvitationEdge,
      }
    )
  },
  get RepositoryInvitation() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get invitee() {
          return new FieldNode(schema.User, undefined, false)
        },
        get inviter() {
          return new FieldNode(schema.User, undefined, false)
        },
        get permission() {
          return new FieldNode(schema.RepositoryPermission, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.RepositoryInfo, undefined, true)
        },
      },
      {
        name: 'RepositoryInvitation',
        extension: ((extensions as any) || {}).RepositoryInvitation,
      }
    )
  },
  get SponsorsTierOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.SponsorsTierOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'SponsorsTierOrder' }
    )
  },
  get SponsorsTierOrderField() {
    return new EnumNode({ name: 'SponsorsTierOrderField' })
  },
  get SponsorsTierAdminInfo() {
    return new ObjectNode(
      {
        get sponsorships() {
          return new FieldNode(
            schema.SponsorshipConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get includePrivate() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.SponsorshipOrder, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'SponsorsTierAdminInfo',
        extension: ((extensions as any) || {}).SponsorsTierAdminInfo,
      }
    )
  },
  get LanguageConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.LanguageEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Language, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalSize() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'LanguageConnection',
        extension: ((extensions as any) || {}).LanguageConnection,
      }
    )
  },
  get LanguageEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Language, undefined, false)
        },
        get size() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'LanguageEdge',
        extension: ((extensions as any) || {}).LanguageEdge,
      }
    )
  },
  get Milestone() {
    return new ObjectNode(
      {
        get closed() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get closedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get dueOn() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get issuePrioritiesDebug() {
          return new FieldNode(schema.String, undefined, false)
        },
        get issues() {
          return new FieldNode(
            schema.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.IssueState, true),
                  true
                )
              },
              get filterBy() {
                return new ArgumentsField(schema.IssueFilters, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get number() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get pullRequests() {
          return new FieldNode(
            schema.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(schema.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(schema.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(schema.String, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get state() {
          return new FieldNode(schema.MilestoneState, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      { name: 'Milestone', extension: ((extensions as any) || {}).Milestone }
    )
  },
  get MilestoneState() {
    return new EnumNode({ name: 'MilestoneState' })
  },
  get PullRequestChangedFileConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestChangedFileEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestChangedFile, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestChangedFileConnection',
        extension: ((extensions as any) || {}).PullRequestChangedFileConnection,
      }
    )
  },
  get PullRequestChangedFileEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestChangedFile, undefined, true)
        },
      },
      {
        name: 'PullRequestChangedFileEdge',
        extension: ((extensions as any) || {}).PullRequestChangedFileEdge,
      }
    )
  },
  get PullRequestChangedFile() {
    return new ObjectNode(
      {
        get additions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get deletions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get path() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'PullRequestChangedFile',
        extension: ((extensions as any) || {}).PullRequestChangedFile,
      }
    )
  },
  get MergeableState() {
    return new EnumNode({ name: 'MergeableState' })
  },
  get PullRequestReviewComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get diffHunk() {
          return new FieldNode(schema.String, undefined, false)
        },
        get draftedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isMinimized() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get minimizedReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get originalCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get originalPosition() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get outdated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get path() {
          return new FieldNode(schema.String, undefined, false)
        },
        get position() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get replyTo() {
          return new FieldNode(schema.PullRequestReviewComment, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get state() {
          return new FieldNode(
            schema.PullRequestReviewCommentState,
            undefined,
            false
          )
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'PullRequestReviewComment',
        extension: ((extensions as any) || {}).PullRequestReviewComment,
      }
    )
  },
  get PullRequestReview() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get authorAssociation() {
          return new FieldNode(
            schema.CommentAuthorAssociation,
            undefined,
            false
          )
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get bodyText() {
          return new FieldNode(schema.String, undefined, false)
        },
        get comments() {
          return new FieldNode(
            schema.PullRequestReviewCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get createdViaEmail() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get editor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get lastEditedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get onBehalfOf() {
          return new FieldNode(
            schema.TeamConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(schema.ReactionGroup, true),
            undefined,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            schema.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get content() {
                return new ArgumentsField(schema.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get state() {
          return new FieldNode(schema.PullRequestReviewState, undefined, false)
        },
        get submittedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get userContentEdits() {
          return new FieldNode(
            schema.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanReact() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(schema.CommentCannotUpdateReason, false),
            undefined,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'PullRequestReview',
        extension: ((extensions as any) || {}).PullRequestReview,
      }
    )
  },
  get PullRequestReviewState() {
    return new EnumNode({ name: 'PullRequestReviewState' })
  },
  get PullRequestReviewCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestReviewCommentEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestReviewComment, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestReviewCommentConnection',
        extension: ((extensions as any) || {})
          .PullRequestReviewCommentConnection,
      }
    )
  },
  get PullRequestReviewCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestReviewComment, undefined, true)
        },
      },
      {
        name: 'PullRequestReviewCommentEdge',
        extension: ((extensions as any) || {}).PullRequestReviewCommentEdge,
      }
    )
  },
  get PullRequestReviewThread() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            schema.PullRequestReviewCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get skip() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isResolved() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resolvedBy() {
          return new FieldNode(schema.User, undefined, true)
        },
        get viewerCanResolve() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get viewerCanUnresolve() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'PullRequestReviewThread',
        extension: ((extensions as any) || {}).PullRequestReviewThread,
      }
    )
  },
  get PullRequestCommit() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(schema.Commit, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'PullRequestCommit',
        extension: ((extensions as any) || {}).PullRequestCommit,
      }
    )
  },
  get PullRequestReviewThreadConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestReviewThreadEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestReviewThread, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestReviewThreadConnection',
        extension: ((extensions as any) || {})
          .PullRequestReviewThreadConnection,
      }
    )
  },
  get PullRequestReviewThreadEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestReviewThread, undefined, true)
        },
      },
      {
        name: 'PullRequestReviewThreadEdge',
        extension: ((extensions as any) || {}).PullRequestReviewThreadEdge,
      }
    )
  },
  get PullRequestReviewCommentState() {
    return new EnumNode({ name: 'PullRequestReviewCommentState' })
  },
  get PullRequestPubSubTopic() {
    return new EnumNode({ name: 'PullRequestPubSubTopic' })
  },
  get IssueCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.IssueCommentEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.IssueComment, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'IssueCommentConnection',
        extension: ((extensions as any) || {}).IssueCommentConnection,
      }
    )
  },
  get IssueCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.IssueComment, undefined, true)
        },
      },
      {
        name: 'IssueCommentEdge',
        extension: ((extensions as any) || {}).IssueCommentEdge,
      }
    )
  },
  get PullRequestReviewConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestReviewEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestReview, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestReviewConnection',
        extension: ((extensions as any) || {}).PullRequestReviewConnection,
      }
    )
  },
  get PullRequestReviewEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
      },
      {
        name: 'PullRequestReviewEdge',
        extension: ((extensions as any) || {}).PullRequestReviewEdge,
      }
    )
  },
  get PullRequestCommitConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestCommitEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestCommit, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestCommitConnection',
        extension: ((extensions as any) || {}).PullRequestCommitConnection,
      }
    )
  },
  get PullRequestCommitEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestCommit, undefined, true)
        },
      },
      {
        name: 'PullRequestCommitEdge',
        extension: ((extensions as any) || {}).PullRequestCommitEdge,
      }
    )
  },
  get ReviewRequestConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ReviewRequestEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.ReviewRequest, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ReviewRequestConnection',
        extension: ((extensions as any) || {}).ReviewRequestConnection,
      }
    )
  },
  get ReviewRequestEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.ReviewRequest, undefined, true)
        },
      },
      {
        name: 'ReviewRequestEdge',
        extension: ((extensions as any) || {}).ReviewRequestEdge,
      }
    )
  },
  get ReviewRequest() {
    return new ObjectNode(
      {
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get requestedReviewer() {
          return new FieldNode(schema.RequestedReviewer, undefined, true)
        },
      },
      {
        name: 'ReviewRequest',
        extension: ((extensions as any) || {}).ReviewRequest,
      }
    )
  },
  get RequestedReviewer() {
    return new UnionNode([schema.User, schema.Team, schema.Mannequin])
  },
  get PullRequestTimelineConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestTimelineItemEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestTimelineItem, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PullRequestTimelineConnection',
        extension: ((extensions as any) || {}).PullRequestTimelineConnection,
      }
    )
  },
  get PullRequestTimelineItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestTimelineItem, undefined, true)
        },
      },
      {
        name: 'PullRequestTimelineItemEdge',
        extension: ((extensions as any) || {}).PullRequestTimelineItemEdge,
      }
    )
  },
  get PullRequestTimelineItem() {
    return new UnionNode([
      schema.Commit,
      schema.CommitCommentThread,
      schema.PullRequestReview,
      schema.PullRequestReviewThread,
      schema.PullRequestReviewComment,
      schema.IssueComment,
      schema.ClosedEvent,
      schema.ReopenedEvent,
      schema.SubscribedEvent,
      schema.UnsubscribedEvent,
      schema.MergedEvent,
      schema.ReferencedEvent,
      schema.CrossReferencedEvent,
      schema.AssignedEvent,
      schema.UnassignedEvent,
      schema.LabeledEvent,
      schema.UnlabeledEvent,
      schema.MilestonedEvent,
      schema.DemilestonedEvent,
      schema.RenamedTitleEvent,
      schema.LockedEvent,
      schema.UnlockedEvent,
      schema.DeployedEvent,
      schema.DeploymentEnvironmentChangedEvent,
      schema.HeadRefDeletedEvent,
      schema.HeadRefRestoredEvent,
      schema.HeadRefForcePushedEvent,
      schema.BaseRefForcePushedEvent,
      schema.ReviewRequestedEvent,
      schema.ReviewRequestRemovedEvent,
      schema.ReviewDismissedEvent,
      schema.UserBlockedEvent,
    ])
  },
  get CommitCommentThread() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            schema.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get path() {
          return new FieldNode(schema.String, undefined, true)
        },
        get position() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      {
        name: 'CommitCommentThread',
        extension: ((extensions as any) || {}).CommitCommentThread,
      }
    )
  },
  get IssueOrPullRequest() {
    return new UnionNode([schema.Issue, schema.PullRequest])
  },
  get ClosedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get closable() {
          return new FieldNode(schema.Closable, undefined, false)
        },
        get closer() {
          return new FieldNode(schema.Closer, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'ClosedEvent',
        extension: ((extensions as any) || {}).ClosedEvent,
      }
    )
  },
  get Closer() {
    return new UnionNode([schema.Commit, schema.PullRequest])
  },
  get ReopenedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get closable() {
          return new FieldNode(schema.Closable, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'ReopenedEvent',
        extension: ((extensions as any) || {}).ReopenedEvent,
      }
    )
  },
  get SubscribedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get subscribable() {
          return new FieldNode(schema.Subscribable, undefined, false)
        },
      },
      {
        name: 'SubscribedEvent',
        extension: ((extensions as any) || {}).SubscribedEvent,
      }
    )
  },
  get UnsubscribedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get subscribable() {
          return new FieldNode(schema.Subscribable, undefined, false)
        },
      },
      {
        name: 'UnsubscribedEvent',
        extension: ((extensions as any) || {}).UnsubscribedEvent,
      }
    )
  },
  get MergedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get mergeRef() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get mergeRefName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'MergedEvent',
        extension: ((extensions as any) || {}).MergedEvent,
      }
    )
  },
  get ReferencedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get commitRepository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isCrossRepository() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isDirectReference() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get subject() {
          return new FieldNode(schema.ReferencedSubject, undefined, false)
        },
      },
      {
        name: 'ReferencedEvent',
        extension: ((extensions as any) || {}).ReferencedEvent,
      }
    )
  },
  get ReferencedSubject() {
    return new UnionNode([schema.Issue, schema.PullRequest])
  },
  get CrossReferencedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isCrossRepository() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get referencedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get source() {
          return new FieldNode(schema.ReferencedSubject, undefined, false)
        },
        get target() {
          return new FieldNode(schema.ReferencedSubject, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get willCloseTarget() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'CrossReferencedEvent',
        extension: ((extensions as any) || {}).CrossReferencedEvent,
      }
    )
  },
  get AssignedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get assignable() {
          return new FieldNode(schema.Assignable, undefined, false)
        },
        get assignee() {
          return new FieldNode(schema.Assignee, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'AssignedEvent',
        extension: ((extensions as any) || {}).AssignedEvent,
      }
    )
  },
  get Assignee() {
    return new UnionNode([
      schema.Bot,
      schema.Mannequin,
      schema.Organization,
      schema.User,
    ])
  },
  get UnassignedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get assignable() {
          return new FieldNode(schema.Assignable, undefined, false)
        },
        get assignee() {
          return new FieldNode(schema.Assignee, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'UnassignedEvent',
        extension: ((extensions as any) || {}).UnassignedEvent,
      }
    )
  },
  get LabeledEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get label() {
          return new FieldNode(schema.Label, undefined, false)
        },
        get labelable() {
          return new FieldNode(schema.Labelable, undefined, false)
        },
      },
      {
        name: 'LabeledEvent',
        extension: ((extensions as any) || {}).LabeledEvent,
      }
    )
  },
  get UnlabeledEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get label() {
          return new FieldNode(schema.Label, undefined, false)
        },
        get labelable() {
          return new FieldNode(schema.Labelable, undefined, false)
        },
      },
      {
        name: 'UnlabeledEvent',
        extension: ((extensions as any) || {}).UnlabeledEvent,
      }
    )
  },
  get MilestonedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get milestoneTitle() {
          return new FieldNode(schema.String, undefined, false)
        },
        get subject() {
          return new FieldNode(schema.MilestoneItem, undefined, false)
        },
      },
      {
        name: 'MilestonedEvent',
        extension: ((extensions as any) || {}).MilestonedEvent,
      }
    )
  },
  get MilestoneItem() {
    return new UnionNode([schema.Issue, schema.PullRequest])
  },
  get DemilestonedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get milestoneTitle() {
          return new FieldNode(schema.String, undefined, false)
        },
        get subject() {
          return new FieldNode(schema.MilestoneItem, undefined, false)
        },
      },
      {
        name: 'DemilestonedEvent',
        extension: ((extensions as any) || {}).DemilestonedEvent,
      }
    )
  },
  get RenamedTitleEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get currentTitle() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get previousTitle() {
          return new FieldNode(schema.String, undefined, false)
        },
        get subject() {
          return new FieldNode(schema.RenamedTitleSubject, undefined, false)
        },
      },
      {
        name: 'RenamedTitleEvent',
        extension: ((extensions as any) || {}).RenamedTitleEvent,
      }
    )
  },
  get RenamedTitleSubject() {
    return new UnionNode([schema.Issue, schema.PullRequest])
  },
  get LockedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get lockReason() {
          return new FieldNode(schema.LockReason, undefined, true)
        },
        get lockable() {
          return new FieldNode(schema.Lockable, undefined, false)
        },
      },
      {
        name: 'LockedEvent',
        extension: ((extensions as any) || {}).LockedEvent,
      }
    )
  },
  get UnlockedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get lockable() {
          return new FieldNode(schema.Lockable, undefined, false)
        },
      },
      {
        name: 'UnlockedEvent',
        extension: ((extensions as any) || {}).UnlockedEvent,
      }
    )
  },
  get DeployedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get deployment() {
          return new FieldNode(schema.Deployment, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      {
        name: 'DeployedEvent',
        extension: ((extensions as any) || {}).DeployedEvent,
      }
    )
  },
  get DeploymentEnvironmentChangedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get deploymentStatus() {
          return new FieldNode(schema.DeploymentStatus, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
      },
      {
        name: 'DeploymentEnvironmentChangedEvent',
        extension: ((extensions as any) || {})
          .DeploymentEnvironmentChangedEvent,
      }
    )
  },
  get HeadRefDeletedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get headRef() {
          return new FieldNode(schema.Ref, undefined, true)
        },
        get headRefName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
      },
      {
        name: 'HeadRefDeletedEvent',
        extension: ((extensions as any) || {}).HeadRefDeletedEvent,
      }
    )
  },
  get HeadRefRestoredEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
      },
      {
        name: 'HeadRefRestoredEvent',
        extension: ((extensions as any) || {}).HeadRefRestoredEvent,
      }
    )
  },
  get HeadRefForcePushedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get afterCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get beforeCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      {
        name: 'HeadRefForcePushedEvent',
        extension: ((extensions as any) || {}).HeadRefForcePushedEvent,
      }
    )
  },
  get BaseRefForcePushedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get afterCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get beforeCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      {
        name: 'BaseRefForcePushedEvent',
        extension: ((extensions as any) || {}).BaseRefForcePushedEvent,
      }
    )
  },
  get ReviewRequestedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get requestedReviewer() {
          return new FieldNode(schema.RequestedReviewer, undefined, true)
        },
      },
      {
        name: 'ReviewRequestedEvent',
        extension: ((extensions as any) || {}).ReviewRequestedEvent,
      }
    )
  },
  get ReviewRequestRemovedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get requestedReviewer() {
          return new FieldNode(schema.RequestedReviewer, undefined, true)
        },
      },
      {
        name: 'ReviewRequestRemovedEvent',
        extension: ((extensions as any) || {}).ReviewRequestRemovedEvent,
      }
    )
  },
  get ReviewDismissedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get dismissalMessage() {
          return new FieldNode(schema.String, undefined, true)
        },
        get dismissalMessageHTML() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get previousReviewState() {
          return new FieldNode(schema.PullRequestReviewState, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get pullRequestCommit() {
          return new FieldNode(schema.PullRequestCommit, undefined, true)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get review() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'ReviewDismissedEvent',
        extension: ((extensions as any) || {}).ReviewDismissedEvent,
      }
    )
  },
  get UserBlockedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get blockDuration() {
          return new FieldNode(schema.UserBlockDuration, undefined, false)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get subject() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'UserBlockedEvent',
        extension: ((extensions as any) || {}).UserBlockedEvent,
      }
    )
  },
  get UserBlockDuration() {
    return new EnumNode({ name: 'UserBlockDuration' })
  },
  get PullRequestTimelineItemsConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestTimelineItemsEdge, true),
            undefined,
            true
          )
        },
        get filteredCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestTimelineItems, true),
            undefined,
            true
          )
        },
        get pageCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'PullRequestTimelineItemsConnection',
        extension: ((extensions as any) || {})
          .PullRequestTimelineItemsConnection,
      }
    )
  },
  get PullRequestTimelineItemsEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PullRequestTimelineItems, undefined, true)
        },
      },
      {
        name: 'PullRequestTimelineItemsEdge',
        extension: ((extensions as any) || {}).PullRequestTimelineItemsEdge,
      }
    )
  },
  get PullRequestTimelineItems() {
    return new UnionNode([
      schema.PullRequestCommit,
      schema.PullRequestCommitCommentThread,
      schema.PullRequestReview,
      schema.PullRequestReviewThread,
      schema.PullRequestRevisionMarker,
      schema.BaseRefChangedEvent,
      schema.BaseRefForcePushedEvent,
      schema.DeployedEvent,
      schema.DeploymentEnvironmentChangedEvent,
      schema.HeadRefDeletedEvent,
      schema.HeadRefForcePushedEvent,
      schema.HeadRefRestoredEvent,
      schema.MergedEvent,
      schema.ReviewDismissedEvent,
      schema.ReviewRequestedEvent,
      schema.ReviewRequestRemovedEvent,
      schema.ReadyForReviewEvent,
      schema.IssueComment,
      schema.CrossReferencedEvent,
      schema.AddedToProjectEvent,
      schema.AssignedEvent,
      schema.ClosedEvent,
      schema.CommentDeletedEvent,
      schema.ConvertedNoteToIssueEvent,
      schema.DemilestonedEvent,
      schema.LabeledEvent,
      schema.LockedEvent,
      schema.MarkedAsDuplicateEvent,
      schema.MentionedEvent,
      schema.MilestonedEvent,
      schema.MovedColumnsInProjectEvent,
      schema.PinnedEvent,
      schema.ReferencedEvent,
      schema.RemovedFromProjectEvent,
      schema.RenamedTitleEvent,
      schema.ReopenedEvent,
      schema.SubscribedEvent,
      schema.TransferredEvent,
      schema.UnassignedEvent,
      schema.UnlabeledEvent,
      schema.UnlockedEvent,
      schema.UserBlockedEvent,
      schema.UnpinnedEvent,
      schema.UnsubscribedEvent,
    ])
  },
  get PullRequestCommitCommentThread() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            schema.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get commit() {
          return new FieldNode(schema.Commit, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get path() {
          return new FieldNode(schema.String, undefined, true)
        },
        get position() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      {
        name: 'PullRequestCommitCommentThread',
        extension: ((extensions as any) || {}).PullRequestCommitCommentThread,
      }
    )
  },
  get PullRequestRevisionMarker() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get lastSeenCommit() {
          return new FieldNode(schema.Commit, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
      },
      {
        name: 'PullRequestRevisionMarker',
        extension: ((extensions as any) || {}).PullRequestRevisionMarker,
      }
    )
  },
  get BaseRefChangedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'BaseRefChangedEvent',
        extension: ((extensions as any) || {}).BaseRefChangedEvent,
      }
    )
  },
  get ReadyForReviewEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'ReadyForReviewEvent',
        extension: ((extensions as any) || {}).ReadyForReviewEvent,
      }
    )
  },
  get AddedToProjectEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'AddedToProjectEvent',
        extension: ((extensions as any) || {}).AddedToProjectEvent,
      }
    )
  },
  get CommentDeletedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'CommentDeletedEvent',
        extension: ((extensions as any) || {}).CommentDeletedEvent,
      }
    )
  },
  get ConvertedNoteToIssueEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'ConvertedNoteToIssueEvent',
        extension: ((extensions as any) || {}).ConvertedNoteToIssueEvent,
      }
    )
  },
  get MarkedAsDuplicateEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'MarkedAsDuplicateEvent',
        extension: ((extensions as any) || {}).MarkedAsDuplicateEvent,
      }
    )
  },
  get MentionedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'MentionedEvent',
        extension: ((extensions as any) || {}).MentionedEvent,
      }
    )
  },
  get MovedColumnsInProjectEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'MovedColumnsInProjectEvent',
        extension: ((extensions as any) || {}).MovedColumnsInProjectEvent,
      }
    )
  },
  get PinnedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, false)
        },
      },
      {
        name: 'PinnedEvent',
        extension: ((extensions as any) || {}).PinnedEvent,
      }
    )
  },
  get RemovedFromProjectEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'RemovedFromProjectEvent',
        extension: ((extensions as any) || {}).RemovedFromProjectEvent,
      }
    )
  },
  get TransferredEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get fromRepository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, false)
        },
      },
      {
        name: 'TransferredEvent',
        extension: ((extensions as any) || {}).TransferredEvent,
      }
    )
  },
  get UnpinnedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, false)
        },
      },
      {
        name: 'UnpinnedEvent',
        extension: ((extensions as any) || {}).UnpinnedEvent,
      }
    )
  },
  get PullRequestTimelineItemsItemType() {
    return new EnumNode({ name: 'PullRequestTimelineItemsItemType' })
  },
  get SuggestedReviewer() {
    return new ObjectNode(
      {
        get isAuthor() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isCommenter() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get reviewer() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'SuggestedReviewer',
        extension: ((extensions as any) || {}).SuggestedReviewer,
      }
    )
  },
  get ProjectCardArchivedState() {
    return new EnumNode({ name: 'ProjectCardArchivedState' })
  },
  get Hovercard() {
    return new ObjectNode(
      {
        get contexts() {
          return new FieldNode(
            new ArrayNode(schema.HovercardContext, false),
            undefined,
            false
          )
        },
      },
      { name: 'Hovercard', extension: ((extensions as any) || {}).Hovercard }
    )
  },
  get HovercardContext() {
    return new InterfaceNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get octicon() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      [
        schema.GenericHovercardContext,
        schema.OrganizationTeamsHovercardContext,
        schema.OrganizationsHovercardContext,
        schema.ReviewStatusHovercardContext,
        schema.ViewerHovercardContext,
      ],
      {
        name: 'HovercardContext',
        extension: ((extensions as any) || {}).HovercardContext,
      }
    )
  },
  get IssueTimelineConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.IssueTimelineItemEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.IssueTimelineItem, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'IssueTimelineConnection',
        extension: ((extensions as any) || {}).IssueTimelineConnection,
      }
    )
  },
  get IssueTimelineItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.IssueTimelineItem, undefined, true)
        },
      },
      {
        name: 'IssueTimelineItemEdge',
        extension: ((extensions as any) || {}).IssueTimelineItemEdge,
      }
    )
  },
  get IssueTimelineItem() {
    return new UnionNode([
      schema.Commit,
      schema.IssueComment,
      schema.CrossReferencedEvent,
      schema.ClosedEvent,
      schema.ReopenedEvent,
      schema.SubscribedEvent,
      schema.UnsubscribedEvent,
      schema.ReferencedEvent,
      schema.AssignedEvent,
      schema.UnassignedEvent,
      schema.LabeledEvent,
      schema.UnlabeledEvent,
      schema.UserBlockedEvent,
      schema.MilestonedEvent,
      schema.DemilestonedEvent,
      schema.RenamedTitleEvent,
      schema.LockedEvent,
      schema.UnlockedEvent,
      schema.TransferredEvent,
    ])
  },
  get IssueTimelineItemsConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.IssueTimelineItemsEdge, true),
            undefined,
            true
          )
        },
        get filteredCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.IssueTimelineItems, true),
            undefined,
            true
          )
        },
        get pageCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'IssueTimelineItemsConnection',
        extension: ((extensions as any) || {}).IssueTimelineItemsConnection,
      }
    )
  },
  get IssueTimelineItemsEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.IssueTimelineItems, undefined, true)
        },
      },
      {
        name: 'IssueTimelineItemsEdge',
        extension: ((extensions as any) || {}).IssueTimelineItemsEdge,
      }
    )
  },
  get IssueTimelineItems() {
    return new UnionNode([
      schema.IssueComment,
      schema.CrossReferencedEvent,
      schema.AddedToProjectEvent,
      schema.AssignedEvent,
      schema.ClosedEvent,
      schema.CommentDeletedEvent,
      schema.ConvertedNoteToIssueEvent,
      schema.DemilestonedEvent,
      schema.LabeledEvent,
      schema.LockedEvent,
      schema.MarkedAsDuplicateEvent,
      schema.MentionedEvent,
      schema.MilestonedEvent,
      schema.MovedColumnsInProjectEvent,
      schema.PinnedEvent,
      schema.ReferencedEvent,
      schema.RemovedFromProjectEvent,
      schema.RenamedTitleEvent,
      schema.ReopenedEvent,
      schema.SubscribedEvent,
      schema.TransferredEvent,
      schema.UnassignedEvent,
      schema.UnlabeledEvent,
      schema.UnlockedEvent,
      schema.UserBlockedEvent,
      schema.UnpinnedEvent,
      schema.UnsubscribedEvent,
    ])
  },
  get IssueTimelineItemsItemType() {
    return new EnumNode({ name: 'IssueTimelineItemsItemType' })
  },
  get CollaboratorAffiliation() {
    return new EnumNode({ name: 'CollaboratorAffiliation' })
  },
  get DeployKeyConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.DeployKeyEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.DeployKey, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'DeployKeyConnection',
        extension: ((extensions as any) || {}).DeployKeyConnection,
      }
    )
  },
  get DeployKeyEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.DeployKey, undefined, true)
        },
      },
      {
        name: 'DeployKeyEdge',
        extension: ((extensions as any) || {}).DeployKeyEdge,
      }
    )
  },
  get DeployKey() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get key() {
          return new FieldNode(schema.String, undefined, false)
        },
        get readOnly() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get verified() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      { name: 'DeployKey', extension: ((extensions as any) || {}).DeployKey }
    )
  },
  get RepositoryCollaboratorAffiliation() {
    return new EnumNode({ name: 'RepositoryCollaboratorAffiliation' })
  },
  get BranchProtectionRuleConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.BranchProtectionRuleEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.BranchProtectionRule, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'BranchProtectionRuleConnection',
        extension: ((extensions as any) || {}).BranchProtectionRuleConnection,
      }
    )
  },
  get BranchProtectionRuleEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
      },
      {
        name: 'BranchProtectionRuleEdge',
        extension: ((extensions as any) || {}).BranchProtectionRuleEdge,
      }
    )
  },
  get BranchProtectionRule() {
    return new ObjectNode(
      {
        get branchProtectionRuleConflicts() {
          return new FieldNode(
            schema.BranchProtectionRuleConflictConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get creator() {
          return new FieldNode(schema.Actor, undefined, true)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get dismissesStaleReviews() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get isAdminEnforced() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get matchingRefs() {
          return new FieldNode(
            schema.RefConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get pattern() {
          return new FieldNode(schema.String, undefined, false)
        },
        get pushAllowances() {
          return new FieldNode(
            schema.PushAllowanceConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
        get requiredApprovingReviewCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get requiredStatusCheckContexts() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
        get requiresApprovingReviews() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get requiresCodeOwnerReviews() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get requiresCommitSignatures() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get requiresStatusChecks() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get requiresStrictStatusChecks() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get restrictsPushes() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get restrictsReviewDismissals() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get reviewDismissalAllowances() {
          return new FieldNode(
            schema.ReviewDismissalAllowanceConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'BranchProtectionRule',
        extension: ((extensions as any) || {}).BranchProtectionRule,
      }
    )
  },
  get ReviewDismissalAllowanceConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.ReviewDismissalAllowanceEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.ReviewDismissalAllowance, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ReviewDismissalAllowanceConnection',
        extension: ((extensions as any) || {})
          .ReviewDismissalAllowanceConnection,
      }
    )
  },
  get ReviewDismissalAllowanceEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.ReviewDismissalAllowance, undefined, true)
        },
      },
      {
        name: 'ReviewDismissalAllowanceEdge',
        extension: ((extensions as any) || {}).ReviewDismissalAllowanceEdge,
      }
    )
  },
  get ReviewDismissalAllowance() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(
            schema.ReviewDismissalAllowanceActor,
            undefined,
            true
          )
        },
        get branchProtectionRule() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'ReviewDismissalAllowance',
        extension: ((extensions as any) || {}).ReviewDismissalAllowance,
      }
    )
  },
  get ReviewDismissalAllowanceActor() {
    return new UnionNode([schema.User, schema.Team])
  },
  get PushAllowanceConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PushAllowanceEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PushAllowance, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PushAllowanceConnection',
        extension: ((extensions as any) || {}).PushAllowanceConnection,
      }
    )
  },
  get PushAllowanceEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PushAllowance, undefined, true)
        },
      },
      {
        name: 'PushAllowanceEdge',
        extension: ((extensions as any) || {}).PushAllowanceEdge,
      }
    )
  },
  get PushAllowance() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(schema.PushAllowanceActor, undefined, true)
        },
        get branchProtectionRule() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      {
        name: 'PushAllowance',
        extension: ((extensions as any) || {}).PushAllowance,
      }
    )
  },
  get PushAllowanceActor() {
    return new UnionNode([schema.User, schema.Team, schema.App])
  },
  get RefConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RefEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(new ArrayNode(schema.Ref, true), undefined, true)
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RefConnection',
        extension: ((extensions as any) || {}).RefConnection,
      }
    )
  },
  get RefEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      { name: 'RefEdge', extension: ((extensions as any) || {}).RefEdge }
    )
  },
  get BranchProtectionRuleConflictConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.BranchProtectionRuleConflictEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.BranchProtectionRuleConflict, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'BranchProtectionRuleConflictConnection',
        extension: ((extensions as any) || {})
          .BranchProtectionRuleConflictConnection,
      }
    )
  },
  get BranchProtectionRuleConflictEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.BranchProtectionRuleConflict,
            undefined,
            true
          )
        },
      },
      {
        name: 'BranchProtectionRuleConflictEdge',
        extension: ((extensions as any) || {}).BranchProtectionRuleConflictEdge,
      }
    )
  },
  get BranchProtectionRuleConflict() {
    return new ObjectNode(
      {
        get branchProtectionRule() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
        get conflictingBranchProtectionRule() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      {
        name: 'BranchProtectionRuleConflict',
        extension: ((extensions as any) || {}).BranchProtectionRuleConflict,
      }
    )
  },
  get MilestoneConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.MilestoneEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Milestone, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'MilestoneConnection',
        extension: ((extensions as any) || {}).MilestoneConnection,
      }
    )
  },
  get MilestoneEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Milestone, undefined, true)
        },
      },
      {
        name: 'MilestoneEdge',
        extension: ((extensions as any) || {}).MilestoneEdge,
      }
    )
  },
  get MilestoneOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.MilestoneOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'MilestoneOrder' }
    )
  },
  get MilestoneOrderField() {
    return new EnumNode({ name: 'MilestoneOrderField' })
  },
  get CodeOfConduct() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get key() {
          return new FieldNode(schema.String, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, true)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, true)
        },
      },
      {
        name: 'CodeOfConduct',
        extension: ((extensions as any) || {}).CodeOfConduct,
      }
    )
  },
  get RepositoryCollaboratorConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RepositoryCollaboratorEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RepositoryCollaboratorConnection',
        extension: ((extensions as any) || {}).RepositoryCollaboratorConnection,
      }
    )
  },
  get RepositoryCollaboratorEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.User, undefined, false)
        },
        get permission() {
          return new FieldNode(schema.RepositoryPermission, undefined, false)
        },
        get permissionSources() {
          return new FieldNode(
            new ArrayNode(schema.PermissionSource, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'RepositoryCollaboratorEdge',
        extension: ((extensions as any) || {}).RepositoryCollaboratorEdge,
      }
    )
  },
  get PermissionSource() {
    return new ObjectNode(
      {
        get organization() {
          return new FieldNode(schema.Organization, undefined, false)
        },
        get permission() {
          return new FieldNode(
            schema.DefaultRepositoryPermissionField,
            undefined,
            false
          )
        },
        get source() {
          return new FieldNode(schema.PermissionGranter, undefined, false)
        },
      },
      {
        name: 'PermissionSource',
        extension: ((extensions as any) || {}).PermissionSource,
      }
    )
  },
  get PermissionGranter() {
    return new UnionNode([schema.Organization, schema.Repository, schema.Team])
  },
  get LanguageOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.LanguageOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'LanguageOrder' }
    )
  },
  get LanguageOrderField() {
    return new EnumNode({ name: 'LanguageOrderField' })
  },
  get RefOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.RefOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'RefOrder' }
    )
  },
  get RefOrderField() {
    return new EnumNode({ name: 'RefOrderField' })
  },
  get RepositoryVulnerabilityAlertConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RepositoryVulnerabilityAlertEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RepositoryVulnerabilityAlert, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RepositoryVulnerabilityAlertConnection',
        extension: ((extensions as any) || {})
          .RepositoryVulnerabilityAlertConnection,
      }
    )
  },
  get RepositoryVulnerabilityAlertEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.RepositoryVulnerabilityAlert,
            undefined,
            true
          )
        },
      },
      {
        name: 'RepositoryVulnerabilityAlertEdge',
        extension: ((extensions as any) || {}).RepositoryVulnerabilityAlertEdge,
      }
    )
  },
  get RepositoryVulnerabilityAlert() {
    return new ObjectNode(
      {
        get affectedRange() {
          return new FieldNode(schema.String, undefined, false)
        },
        get dismissReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get dismissedAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
        get dismisser() {
          return new FieldNode(schema.User, undefined, true)
        },
        get externalIdentifier() {
          return new FieldNode(schema.String, undefined, true)
        },
        get externalReference() {
          return new FieldNode(schema.String, undefined, false)
        },
        get fixedIn() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get packageName() {
          return new FieldNode(schema.String, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get securityAdvisory() {
          return new FieldNode(schema.SecurityAdvisory, undefined, true)
        },
        get securityVulnerability() {
          return new FieldNode(schema.SecurityVulnerability, undefined, true)
        },
        get vulnerableManifestFilename() {
          return new FieldNode(schema.String, undefined, false)
        },
        get vulnerableManifestPath() {
          return new FieldNode(schema.String, undefined, false)
        },
        get vulnerableRequirements() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'RepositoryVulnerabilityAlert',
        extension: ((extensions as any) || {}).RepositoryVulnerabilityAlert,
      }
    )
  },
  get SecurityAdvisory() {
    return new ObjectNode(
      {
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, false)
        },
        get ghsaId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get identifiers() {
          return new FieldNode(
            new ArrayNode(schema.SecurityAdvisoryIdentifier, false),
            undefined,
            false
          )
        },
        get origin() {
          return new FieldNode(schema.String, undefined, false)
        },
        get publishedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get references() {
          return new FieldNode(
            new ArrayNode(schema.SecurityAdvisoryReference, false),
            undefined,
            false
          )
        },
        get severity() {
          return new FieldNode(
            schema.SecurityAdvisorySeverity,
            undefined,
            false
          )
        },
        get summary() {
          return new FieldNode(schema.String, undefined, false)
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get vulnerabilities() {
          return new FieldNode(
            schema.SecurityVulnerabilityConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  schema.SecurityVulnerabilityOrder,
                  true
                )
              },
              get ecosystem() {
                return new ArgumentsField(
                  schema.SecurityAdvisoryEcosystem,
                  true
                )
              },
              get package() {
                return new ArgumentsField(schema.String, true)
              },
              get severities() {
                return new ArgumentsField(
                  new ArrayNode(schema.SecurityAdvisorySeverity, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get withdrawnAt() {
          return new FieldNode(schema.DateTime, undefined, true)
        },
      },
      {
        name: 'SecurityAdvisory',
        extension: ((extensions as any) || {}).SecurityAdvisory,
      }
    )
  },
  get SecurityAdvisorySeverity() {
    return new EnumNode({ name: 'SecurityAdvisorySeverity' })
  },
  get SecurityAdvisoryIdentifier() {
    return new ObjectNode(
      {
        get type() {
          return new FieldNode(schema.String, undefined, false)
        },
        get value() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'SecurityAdvisoryIdentifier',
        extension: ((extensions as any) || {}).SecurityAdvisoryIdentifier,
      }
    )
  },
  get SecurityAdvisoryReference() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'SecurityAdvisoryReference',
        extension: ((extensions as any) || {}).SecurityAdvisoryReference,
      }
    )
  },
  get SecurityVulnerabilityConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.SecurityVulnerabilityEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.SecurityVulnerability, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'SecurityVulnerabilityConnection',
        extension: ((extensions as any) || {}).SecurityVulnerabilityConnection,
      }
    )
  },
  get SecurityVulnerabilityEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.SecurityVulnerability, undefined, true)
        },
      },
      {
        name: 'SecurityVulnerabilityEdge',
        extension: ((extensions as any) || {}).SecurityVulnerabilityEdge,
      }
    )
  },
  get SecurityVulnerability() {
    return new ObjectNode(
      {
        get advisory() {
          return new FieldNode(schema.SecurityAdvisory, undefined, false)
        },
        get firstPatchedVersion() {
          return new FieldNode(
            schema.SecurityAdvisoryPackageVersion,
            undefined,
            true
          )
        },
        get package() {
          return new FieldNode(schema.SecurityAdvisoryPackage, undefined, false)
        },
        get severity() {
          return new FieldNode(
            schema.SecurityAdvisorySeverity,
            undefined,
            false
          )
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get vulnerableVersionRange() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'SecurityVulnerability',
        extension: ((extensions as any) || {}).SecurityVulnerability,
      }
    )
  },
  get SecurityAdvisoryPackage() {
    return new ObjectNode(
      {
        get ecosystem() {
          return new FieldNode(
            schema.SecurityAdvisoryEcosystem,
            undefined,
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'SecurityAdvisoryPackage',
        extension: ((extensions as any) || {}).SecurityAdvisoryPackage,
      }
    )
  },
  get SecurityAdvisoryEcosystem() {
    return new EnumNode({ name: 'SecurityAdvisoryEcosystem' })
  },
  get SecurityAdvisoryPackageVersion() {
    return new ObjectNode(
      {
        get identifier() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'SecurityAdvisoryPackageVersion',
        extension: ((extensions as any) || {}).SecurityAdvisoryPackageVersion,
      }
    )
  },
  get SecurityVulnerabilityOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(
            schema.SecurityVulnerabilityOrderField,
            false
          )
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'SecurityVulnerabilityOrder' }
    )
  },
  get SecurityVulnerabilityOrderField() {
    return new EnumNode({ name: 'SecurityVulnerabilityOrderField' })
  },
  get GitSSHRemote() {
    return new ScalarNode({
      name: 'GitSSHRemote',
      extension: ((extensions as any) || {}).GitSSHRemote,
    })
  },
  get RegistryPackageStatistics() {
    return new ObjectNode(
      {
        get downloadsThisMonth() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsThisWeek() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsThisYear() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsToday() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get downloadsTotalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageStatistics',
        extension: ((extensions as any) || {}).RegistryPackageStatistics,
      }
    )
  },
  get RegistryPackageTagConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageTagEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.RegistryPackageTag, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'RegistryPackageTagConnection',
        extension: ((extensions as any) || {}).RegistryPackageTagConnection,
      }
    )
  },
  get RegistryPackageTagEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.RegistryPackageTag, undefined, true)
        },
      },
      {
        name: 'RegistryPackageTagEdge',
        extension: ((extensions as any) || {}).RegistryPackageTagEdge,
      }
    )
  },
  get RegistryPackageTag() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get version() {
          return new FieldNode(schema.RegistryPackageVersion, undefined, true)
        },
      },
      {
        name: 'RegistryPackageTag',
        extension: ((extensions as any) || {}).RegistryPackageTag,
      }
    )
  },
  get ContributionsCollection() {
    return new ObjectNode(
      {
        get commitContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(schema.CommitContributionsByRepository, false),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get contributionCalendar() {
          return new FieldNode(schema.ContributionCalendar, undefined, false)
        },
        get contributionYears() {
          return new FieldNode(
            new ArrayNode(schema.Int, false),
            undefined,
            false
          )
        },
        get doesEndInCurrentMonth() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get earliestRestrictedContributionDate() {
          return new FieldNode(schema.Date, undefined, true)
        },
        get endedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get firstIssueContribution() {
          return new FieldNode(
            schema.CreatedIssueOrRestrictedContribution,
            undefined,
            true
          )
        },
        get firstPullRequestContribution() {
          return new FieldNode(
            schema.CreatedPullRequestOrRestrictedContribution,
            undefined,
            true
          )
        },
        get firstRepositoryContribution() {
          return new FieldNode(
            schema.CreatedRepositoryOrRestrictedContribution,
            undefined,
            true
          )
        },
        get hasActivityInThePast() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasAnyContributions() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasAnyRestrictedContributions() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get isSingleDay() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get issueContributions() {
          return new FieldNode(
            schema.CreatedIssueContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get issueContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(schema.IssueContributionsByRepository, false),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(schema.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get joinedGitHubContribution() {
          return new FieldNode(schema.JoinedGitHubContribution, undefined, true)
        },
        get latestRestrictedContributionDate() {
          return new FieldNode(schema.Date, undefined, true)
        },
        get mostRecentCollectionWithActivity() {
          return new FieldNode(schema.ContributionsCollection, undefined, true)
        },
        get mostRecentCollectionWithoutActivity() {
          return new FieldNode(schema.ContributionsCollection, undefined, true)
        },
        get popularIssueContribution() {
          return new FieldNode(schema.CreatedIssueContribution, undefined, true)
        },
        get popularPullRequestContribution() {
          return new FieldNode(
            schema.CreatedPullRequestContribution,
            undefined,
            true
          )
        },
        get pullRequestContributions() {
          return new FieldNode(
            schema.CreatedPullRequestContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get pullRequestContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(schema.PullRequestContributionsByRepository, false),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(schema.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get pullRequestReviewContributions() {
          return new FieldNode(
            schema.CreatedPullRequestReviewContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get pullRequestReviewContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(
              schema.PullRequestReviewContributionsByRepository,
              false
            ),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get repositoryContributions() {
          return new FieldNode(
            schema.CreatedRepositoryContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get restrictedContributionsCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get startedAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get totalCommitContributions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalIssueContributions() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get totalPullRequestContributions() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get totalPullRequestReviewContributions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalRepositoriesWithContributedCommits() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalRepositoriesWithContributedIssues() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get totalRepositoriesWithContributedPullRequestReviews() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get totalRepositoriesWithContributedPullRequests() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get totalRepositoryContributions() {
          return new FieldNode(
            schema.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            false
          )
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'ContributionsCollection',
        extension: ((extensions as any) || {}).ContributionsCollection,
      }
    )
  },
  get Contribution() {
    return new InterfaceNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      [
        schema.CreatedCommitContribution,
        schema.CreatedIssueContribution,
        schema.CreatedPullRequestContribution,
        schema.CreatedPullRequestReviewContribution,
        schema.CreatedRepositoryContribution,
        schema.JoinedGitHubContribution,
        schema.RestrictedContribution,
      ],
      {
        name: 'Contribution',
        extension: ((extensions as any) || {}).Contribution,
      }
    )
  },
  get CreatedIssueContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CreatedIssueContributionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.CreatedIssueContribution, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CreatedIssueContributionConnection',
        extension: ((extensions as any) || {})
          .CreatedIssueContributionConnection,
      }
    )
  },
  get CreatedIssueContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.CreatedIssueContribution, undefined, true)
        },
      },
      {
        name: 'CreatedIssueContributionEdge',
        extension: ((extensions as any) || {}).CreatedIssueContributionEdge,
      }
    )
  },
  get CreatedIssueContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'CreatedIssueContribution',
        extension: ((extensions as any) || {}).CreatedIssueContribution,
      }
    )
  },
  get ContributionOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.ContributionOrderField, true)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'ContributionOrder' }
    )
  },
  get ContributionOrderField() {
    return new EnumNode({ name: 'ContributionOrderField' })
  },
  get CreatedRepositoryContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CreatedRepositoryContributionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.CreatedRepositoryContribution, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CreatedRepositoryContributionConnection',
        extension: ((extensions as any) || {})
          .CreatedRepositoryContributionConnection,
      }
    )
  },
  get CreatedRepositoryContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.CreatedRepositoryContribution,
            undefined,
            true
          )
        },
      },
      {
        name: 'CreatedRepositoryContributionEdge',
        extension: ((extensions as any) || {})
          .CreatedRepositoryContributionEdge,
      }
    )
  },
  get CreatedRepositoryContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'CreatedRepositoryContribution',
        extension: ((extensions as any) || {}).CreatedRepositoryContribution,
      }
    )
  },
  get JoinedGitHubContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'JoinedGitHubContribution',
        extension: ((extensions as any) || {}).JoinedGitHubContribution,
      }
    )
  },
  get CreatedRepositoryOrRestrictedContribution() {
    return new UnionNode([
      schema.CreatedRepositoryContribution,
      schema.RestrictedContribution,
    ])
  },
  get RestrictedContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'RestrictedContribution',
        extension: ((extensions as any) || {}).RestrictedContribution,
      }
    )
  },
  get CreatedIssueOrRestrictedContribution() {
    return new UnionNode([
      schema.CreatedIssueContribution,
      schema.RestrictedContribution,
    ])
  },
  get CreatedPullRequestOrRestrictedContribution() {
    return new UnionNode([
      schema.CreatedPullRequestContribution,
      schema.RestrictedContribution,
    ])
  },
  get CreatedPullRequestContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'CreatedPullRequestContribution',
        extension: ((extensions as any) || {}).CreatedPullRequestContribution,
      }
    )
  },
  get ContributionCalendar() {
    return new ObjectNode(
      {
        get colors() {
          return new FieldNode(
            new ArrayNode(schema.String, false),
            undefined,
            false
          )
        },
        get isHalloween() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get months() {
          return new FieldNode(
            new ArrayNode(schema.ContributionCalendarMonth, false),
            undefined,
            false
          )
        },
        get totalContributions() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get weeks() {
          return new FieldNode(
            new ArrayNode(schema.ContributionCalendarWeek, false),
            undefined,
            false
          )
        },
      },
      {
        name: 'ContributionCalendar',
        extension: ((extensions as any) || {}).ContributionCalendar,
      }
    )
  },
  get ContributionCalendarWeek() {
    return new ObjectNode(
      {
        get contributionDays() {
          return new FieldNode(
            new ArrayNode(schema.ContributionCalendarDay, false),
            undefined,
            false
          )
        },
        get firstDay() {
          return new FieldNode(schema.Date, undefined, false)
        },
      },
      {
        name: 'ContributionCalendarWeek',
        extension: ((extensions as any) || {}).ContributionCalendarWeek,
      }
    )
  },
  get ContributionCalendarDay() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(schema.String, undefined, false)
        },
        get contributionCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get date() {
          return new FieldNode(schema.Date, undefined, false)
        },
        get weekday() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ContributionCalendarDay',
        extension: ((extensions as any) || {}).ContributionCalendarDay,
      }
    )
  },
  get ContributionCalendarMonth() {
    return new ObjectNode(
      {
        get firstDay() {
          return new FieldNode(schema.Date, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get totalWeeks() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get year() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'ContributionCalendarMonth',
        extension: ((extensions as any) || {}).ContributionCalendarMonth,
      }
    )
  },
  get CreatedPullRequestReviewContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(
              schema.CreatedPullRequestReviewContributionEdge,
              true
            ),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.CreatedPullRequestReviewContribution, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CreatedPullRequestReviewContributionConnection',
        extension: ((extensions as any) || {})
          .CreatedPullRequestReviewContributionConnection,
      }
    )
  },
  get CreatedPullRequestReviewContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.CreatedPullRequestReviewContribution,
            undefined,
            true
          )
        },
      },
      {
        name: 'CreatedPullRequestReviewContributionEdge',
        extension: ((extensions as any) || {})
          .CreatedPullRequestReviewContributionEdge,
      }
    )
  },
  get CreatedPullRequestReviewContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, false)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'CreatedPullRequestReviewContribution',
        extension: ((extensions as any) || {})
          .CreatedPullRequestReviewContribution,
      }
    )
  },
  get PullRequestReviewContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            schema.CreatedPullRequestReviewContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      {
        name: 'PullRequestReviewContributionsByRepository',
        extension: ((extensions as any) || {})
          .PullRequestReviewContributionsByRepository,
      }
    )
  },
  get CommitContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            schema.CreatedCommitContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.CommitContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
      },
      {
        name: 'CommitContributionsByRepository',
        extension: ((extensions as any) || {}).CommitContributionsByRepository,
      }
    )
  },
  get CreatedCommitContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CreatedCommitContributionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.CreatedCommitContribution, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CreatedCommitContributionConnection',
        extension: ((extensions as any) || {})
          .CreatedCommitContributionConnection,
      }
    )
  },
  get CreatedCommitContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.CreatedCommitContribution,
            undefined,
            true
          )
        },
      },
      {
        name: 'CreatedCommitContributionEdge',
        extension: ((extensions as any) || {}).CreatedCommitContributionEdge,
      }
    )
  },
  get CreatedCommitContribution() {
    return new ObjectNode(
      {
        get commitCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get isRestricted() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get occurredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get resourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get url() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get user() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'CreatedCommitContribution',
        extension: ((extensions as any) || {}).CreatedCommitContribution,
      }
    )
  },
  get CommitContributionOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.CommitContributionOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'CommitContributionOrder' }
    )
  },
  get CommitContributionOrderField() {
    return new EnumNode({ name: 'CommitContributionOrderField' })
  },
  get CreatedPullRequestContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.CreatedPullRequestContributionEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.CreatedPullRequestContribution, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'CreatedPullRequestContributionConnection',
        extension: ((extensions as any) || {})
          .CreatedPullRequestContributionConnection,
      }
    )
  },
  get CreatedPullRequestContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(
            schema.CreatedPullRequestContribution,
            undefined,
            true
          )
        },
      },
      {
        name: 'CreatedPullRequestContributionEdge',
        extension: ((extensions as any) || {})
          .CreatedPullRequestContributionEdge,
      }
    )
  },
  get PullRequestContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            schema.CreatedPullRequestContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      {
        name: 'PullRequestContributionsByRepository',
        extension: ((extensions as any) || {})
          .PullRequestContributionsByRepository,
      }
    )
  },
  get IssueContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            schema.CreatedIssueContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(schema.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
      },
      {
        name: 'IssueContributionsByRepository',
        extension: ((extensions as any) || {}).IssueContributionsByRepository,
      }
    )
  },
  get SavedReplyConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.SavedReplyEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.SavedReply, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'SavedReplyConnection',
        extension: ((extensions as any) || {}).SavedReplyConnection,
      }
    )
  },
  get SavedReplyEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.SavedReply, undefined, true)
        },
      },
      {
        name: 'SavedReplyEdge',
        extension: ((extensions as any) || {}).SavedReplyEdge,
      }
    )
  },
  get SavedReply() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get bodyHTML() {
          return new FieldNode(schema.HTML, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get user() {
          return new FieldNode(schema.Actor, undefined, true)
        },
      },
      { name: 'SavedReply', extension: ((extensions as any) || {}).SavedReply }
    )
  },
  get SavedReplyOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.SavedReplyOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'SavedReplyOrder' }
    )
  },
  get SavedReplyOrderField() {
    return new EnumNode({ name: 'SavedReplyOrderField' })
  },
  get RepositoryContributionType() {
    return new EnumNode({ name: 'RepositoryContributionType' })
  },
  get IssueOrPullRequestEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.IssueOrPullRequest, undefined, true)
        },
      },
      {
        name: 'IssueOrPullRequestEdge',
        extension: ((extensions as any) || {}).IssueOrPullRequestEdge,
      }
    )
  },
  get PublicKeyConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.PublicKeyEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.PublicKey, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'PublicKeyConnection',
        extension: ((extensions as any) || {}).PublicKeyConnection,
      }
    )
  },
  get PublicKeyEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.PublicKey, undefined, true)
        },
      },
      {
        name: 'PublicKeyEdge',
        extension: ((extensions as any) || {}).PublicKeyEdge,
      }
    )
  },
  get FollowingConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.UserEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'FollowingConnection',
        extension: ((extensions as any) || {}).FollowingConnection,
      }
    )
  },
  get FollowerConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.UserEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'FollowerConnection',
        extension: ((extensions as any) || {}).FollowerConnection,
      }
    )
  },
  get EnterpriseEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
      },
      {
        name: 'EnterpriseEdge',
        extension: ((extensions as any) || {}).EnterpriseEdge,
      }
    )
  },
  get EnterpriseOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.EnterpriseOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'EnterpriseOrder' }
    )
  },
  get EnterpriseOrderField() {
    return new EnumNode({ name: 'EnterpriseOrderField' })
  },
  get EnterpriseMembershipType() {
    return new EnumNode({ name: 'EnterpriseMembershipType' })
  },
  get StarredRepositoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.StarredRepositoryEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.Repository, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'StarredRepositoryConnection',
        extension: ((extensions as any) || {}).StarredRepositoryConnection,
      }
    )
  },
  get StarredRepositoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get starredAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      {
        name: 'StarredRepositoryEdge',
        extension: ((extensions as any) || {}).StarredRepositoryEdge,
      }
    )
  },
  get AppEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.App, undefined, true)
        },
      },
      { name: 'AppEdge', extension: ((extensions as any) || {}).AppEdge }
    )
  },
  get RateLimit() {
    return new ObjectNode(
      {
        get cost() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get limit() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get nodeCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get remaining() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get resetAt() {
          return new FieldNode(schema.DateTime, undefined, false)
        },
      },
      { name: 'RateLimit', extension: ((extensions as any) || {}).RateLimit }
    )
  },
  get SearchResultItemConnection() {
    return new ObjectNode(
      {
        get codeCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.SearchResultItemEdge, true),
            undefined,
            true
          )
        },
        get issueCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.SearchResultItem, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get repositoryCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get userCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get wikiCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'SearchResultItemConnection',
        extension: ((extensions as any) || {}).SearchResultItemConnection,
      }
    )
  },
  get SearchResultItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.SearchResultItem, undefined, true)
        },
        get textMatches() {
          return new FieldNode(
            new ArrayNode(schema.TextMatch, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'SearchResultItemEdge',
        extension: ((extensions as any) || {}).SearchResultItemEdge,
      }
    )
  },
  get SearchResultItem() {
    return new UnionNode([
      schema.Issue,
      schema.PullRequest,
      schema.Repository,
      schema.User,
      schema.Organization,
      schema.MarketplaceListing,
      schema.App,
    ])
  },
  get TextMatch() {
    return new ObjectNode(
      {
        get fragment() {
          return new FieldNode(schema.String, undefined, false)
        },
        get highlights() {
          return new FieldNode(
            new ArrayNode(schema.TextMatchHighlight, false),
            undefined,
            false
          )
        },
        get property() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      { name: 'TextMatch', extension: ((extensions as any) || {}).TextMatch }
    )
  },
  get TextMatchHighlight() {
    return new ObjectNode(
      {
        get beginIndice() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get endIndice() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get text() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'TextMatchHighlight',
        extension: ((extensions as any) || {}).TextMatchHighlight,
      }
    )
  },
  get SearchType() {
    return new EnumNode({ name: 'SearchType' })
  },
  get CollectionItemContent() {
    return new UnionNode([schema.Repository, schema.Organization, schema.User])
  },
  get GitHubMetadata() {
    return new ObjectNode(
      {
        get gitHubServicesSha() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get gitIpAddresses() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
        get hookIpAddresses() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
        get importerIpAddresses() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
        get isPasswordAuthenticationVerifiable() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get pagesIpAddresses() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'GitHubMetadata',
        extension: ((extensions as any) || {}).GitHubMetadata,
      }
    )
  },
  get SecurityAdvisoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.SecurityAdvisoryEdge, true),
            undefined,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(schema.SecurityAdvisory, true),
            undefined,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get totalCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'SecurityAdvisoryConnection',
        extension: ((extensions as any) || {}).SecurityAdvisoryConnection,
      }
    )
  },
  get SecurityAdvisoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
        get node() {
          return new FieldNode(schema.SecurityAdvisory, undefined, true)
        },
      },
      {
        name: 'SecurityAdvisoryEdge',
        extension: ((extensions as any) || {}).SecurityAdvisoryEdge,
      }
    )
  },
  get SecurityAdvisoryOrder() {
    return new InputNode(
      {
        get field() {
          return new InputNodeField(schema.SecurityAdvisoryOrderField, false)
        },
        get direction() {
          return new InputNodeField(schema.OrderDirection, false)
        },
      },
      { name: 'SecurityAdvisoryOrder' }
    )
  },
  get SecurityAdvisoryOrderField() {
    return new EnumNode({ name: 'SecurityAdvisoryOrderField' })
  },
  get SecurityAdvisoryIdentifierFilter() {
    return new InputNode(
      {
        get type() {
          return new InputNodeField(
            schema.SecurityAdvisoryIdentifierType,
            false
          )
        },
        get value() {
          return new InputNodeField(schema.String, false)
        },
      },
      { name: 'SecurityAdvisoryIdentifierFilter' }
    )
  },
  get SecurityAdvisoryIdentifierType() {
    return new EnumNode({ name: 'SecurityAdvisoryIdentifierType' })
  },
  get Mutation() {
    return new ObjectNode(
      {
        get acceptEnterpriseAdministratorInvitation() {
          return new FieldNode(
            schema.AcceptEnterpriseAdministratorInvitationPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.AcceptEnterpriseAdministratorInvitationInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get acceptTopicSuggestion() {
          return new FieldNode(
            schema.AcceptTopicSuggestionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.AcceptTopicSuggestionInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get addAssigneesToAssignable() {
          return new FieldNode(
            schema.AddAssigneesToAssignablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.AddAssigneesToAssignableInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get addComment() {
          return new FieldNode(
            schema.AddCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.AddCommentInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get addLabelsToLabelable() {
          return new FieldNode(
            schema.AddLabelsToLabelablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.AddLabelsToLabelableInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get addProjectCard() {
          return new FieldNode(
            schema.AddProjectCardPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.AddProjectCardInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get addProjectColumn() {
          return new FieldNode(
            schema.AddProjectColumnPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.AddProjectColumnInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get addPullRequestReview() {
          return new FieldNode(
            schema.AddPullRequestReviewPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.AddPullRequestReviewInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get addPullRequestReviewComment() {
          return new FieldNode(
            schema.AddPullRequestReviewCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.AddPullRequestReviewCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get addReaction() {
          return new FieldNode(
            schema.AddReactionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.AddReactionInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get addStar() {
          return new FieldNode(
            schema.AddStarPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.AddStarInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get cancelEnterpriseAdminInvitation() {
          return new FieldNode(
            schema.CancelEnterpriseAdminInvitationPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CancelEnterpriseAdminInvitationInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get changeUserStatus() {
          return new FieldNode(
            schema.ChangeUserStatusPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.ChangeUserStatusInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get clearLabelsFromLabelable() {
          return new FieldNode(
            schema.ClearLabelsFromLabelablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.ClearLabelsFromLabelableInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get cloneProject() {
          return new FieldNode(
            schema.CloneProjectPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.CloneProjectInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get cloneTemplateRepository() {
          return new FieldNode(
            schema.CloneTemplateRepositoryPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CloneTemplateRepositoryInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get closeIssue() {
          return new FieldNode(
            schema.CloseIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.CloseIssueInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get closePullRequest() {
          return new FieldNode(
            schema.ClosePullRequestPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.ClosePullRequestInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get convertProjectCardNoteToIssue() {
          return new FieldNode(
            schema.ConvertProjectCardNoteToIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.ConvertProjectCardNoteToIssueInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get createBranchProtectionRule() {
          return new FieldNode(
            schema.CreateBranchProtectionRulePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CreateBranchProtectionRuleInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get createEnterpriseOrganization() {
          return new FieldNode(
            schema.CreateEnterpriseOrganizationPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CreateEnterpriseOrganizationInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get createIssue() {
          return new FieldNode(
            schema.CreateIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.CreateIssueInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get createProject() {
          return new FieldNode(
            schema.CreateProjectPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.CreateProjectInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get createPullRequest() {
          return new FieldNode(
            schema.CreatePullRequestPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CreatePullRequestInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get createRef() {
          return new FieldNode(
            schema.CreateRefPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.CreateRefInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get createRepository() {
          return new FieldNode(
            schema.CreateRepositoryPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.CreateRepositoryInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get createTeamDiscussion() {
          return new FieldNode(
            schema.CreateTeamDiscussionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CreateTeamDiscussionInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get createTeamDiscussionComment() {
          return new FieldNode(
            schema.CreateTeamDiscussionCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.CreateTeamDiscussionCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get declineTopicSuggestion() {
          return new FieldNode(
            schema.DeclineTopicSuggestionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeclineTopicSuggestionInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deleteBranchProtectionRule() {
          return new FieldNode(
            schema.DeleteBranchProtectionRulePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeleteBranchProtectionRuleInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deleteIssue() {
          return new FieldNode(
            schema.DeleteIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.DeleteIssueInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get deleteIssueComment() {
          return new FieldNode(
            schema.DeleteIssueCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeleteIssueCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deleteProject() {
          return new FieldNode(
            schema.DeleteProjectPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.DeleteProjectInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get deleteProjectCard() {
          return new FieldNode(
            schema.DeleteProjectCardPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeleteProjectCardInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deleteProjectColumn() {
          return new FieldNode(
            schema.DeleteProjectColumnPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeleteProjectColumnInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deletePullRequestReview() {
          return new FieldNode(
            schema.DeletePullRequestReviewPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeletePullRequestReviewInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deletePullRequestReviewComment() {
          return new FieldNode(
            schema.DeletePullRequestReviewCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeletePullRequestReviewCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deleteRef() {
          return new FieldNode(
            schema.DeleteRefPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.DeleteRefInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get deleteTeamDiscussion() {
          return new FieldNode(
            schema.DeleteTeamDiscussionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeleteTeamDiscussionInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get deleteTeamDiscussionComment() {
          return new FieldNode(
            schema.DeleteTeamDiscussionCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DeleteTeamDiscussionCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get dismissPullRequestReview() {
          return new FieldNode(
            schema.DismissPullRequestReviewPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.DismissPullRequestReviewInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get followUser() {
          return new FieldNode(
            schema.FollowUserPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.FollowUserInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get inviteEnterpriseAdmin() {
          return new FieldNode(
            schema.InviteEnterpriseAdminPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.InviteEnterpriseAdminInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get linkRepositoryToProject() {
          return new FieldNode(
            schema.LinkRepositoryToProjectPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.LinkRepositoryToProjectInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get lockLockable() {
          return new FieldNode(
            schema.LockLockablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.LockLockableInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get mergeBranch() {
          return new FieldNode(
            schema.MergeBranchPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.MergeBranchInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get mergePullRequest() {
          return new FieldNode(
            schema.MergePullRequestPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.MergePullRequestInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get moveProjectCard() {
          return new FieldNode(
            schema.MoveProjectCardPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.MoveProjectCardInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get moveProjectColumn() {
          return new FieldNode(
            schema.MoveProjectColumnPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.MoveProjectColumnInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get regenerateEnterpriseIdentityProviderRecoveryCodes() {
          return new FieldNode(
            schema.RegenerateEnterpriseIdentityProviderRecoveryCodesPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.RegenerateEnterpriseIdentityProviderRecoveryCodesInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get removeAssigneesFromAssignable() {
          return new FieldNode(
            schema.RemoveAssigneesFromAssignablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.RemoveAssigneesFromAssignableInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get removeEnterpriseAdmin() {
          return new FieldNode(
            schema.RemoveEnterpriseAdminPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.RemoveEnterpriseAdminInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get removeEnterpriseOrganization() {
          return new FieldNode(
            schema.RemoveEnterpriseOrganizationPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.RemoveEnterpriseOrganizationInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get removeLabelsFromLabelable() {
          return new FieldNode(
            schema.RemoveLabelsFromLabelablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.RemoveLabelsFromLabelableInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get removeOutsideCollaborator() {
          return new FieldNode(
            schema.RemoveOutsideCollaboratorPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.RemoveOutsideCollaboratorInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get removeReaction() {
          return new FieldNode(
            schema.RemoveReactionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.RemoveReactionInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get removeStar() {
          return new FieldNode(
            schema.RemoveStarPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.RemoveStarInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get reopenIssue() {
          return new FieldNode(
            schema.ReopenIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.ReopenIssueInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get reopenPullRequest() {
          return new FieldNode(
            schema.ReopenPullRequestPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.ReopenPullRequestInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get requestReviews() {
          return new FieldNode(
            schema.RequestReviewsPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.RequestReviewsInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get resolveReviewThread() {
          return new FieldNode(
            schema.ResolveReviewThreadPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.ResolveReviewThreadInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get submitPullRequestReview() {
          return new FieldNode(
            schema.SubmitPullRequestReviewPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.SubmitPullRequestReviewInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get transferIssue() {
          return new FieldNode(
            schema.TransferIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.TransferIssueInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get unfollowUser() {
          return new FieldNode(
            schema.UnfollowUserPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UnfollowUserInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get unlinkRepositoryFromProject() {
          return new FieldNode(
            schema.UnlinkRepositoryFromProjectPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UnlinkRepositoryFromProjectInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get unlockLockable() {
          return new FieldNode(
            schema.UnlockLockablePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UnlockLockableInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get unmarkIssueAsDuplicate() {
          return new FieldNode(
            schema.UnmarkIssueAsDuplicatePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UnmarkIssueAsDuplicateInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get unresolveReviewThread() {
          return new FieldNode(
            schema.UnresolveReviewThreadPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UnresolveReviewThreadInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateBranchProtectionRule() {
          return new FieldNode(
            schema.UpdateBranchProtectionRulePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateBranchProtectionRuleInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseActionExecutionCapabilitySetting() {
          return new FieldNode(
            schema.UpdateEnterpriseActionExecutionCapabilitySettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseActionExecutionCapabilitySettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseAdministratorRole() {
          return new FieldNode(
            schema.UpdateEnterpriseAdministratorRolePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseAdministratorRoleInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseAllowPrivateRepositoryForkingSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseDefaultRepositoryPermissionSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseDefaultRepositoryPermissionSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseDefaultRepositoryPermissionSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanChangeRepositoryVisibilitySetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanCreateRepositoriesSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanCreateRepositoriesSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanDeleteIssuesSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanDeleteIssuesSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanDeleteIssuesSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanDeleteRepositoriesSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanInviteCollaboratorsSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanMakePurchasesSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanMakePurchasesSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanMakePurchasesSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanUpdateProtectedBranchesSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseMembersCanViewDependencyInsightsSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseOrganizationProjectsSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseOrganizationProjectsSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseOrganizationProjectsSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseProfile() {
          return new FieldNode(
            schema.UpdateEnterpriseProfilePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseProfileInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseRepositoryProjectsSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseRepositoryProjectsSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseRepositoryProjectsSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseTeamDiscussionsSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseTeamDiscussionsSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseTeamDiscussionsSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateEnterpriseTwoFactorAuthenticationRequiredSetting() {
          return new FieldNode(
            schema.UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateIssue() {
          return new FieldNode(
            schema.UpdateIssuePayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UpdateIssueInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get updateIssueComment() {
          return new FieldNode(
            schema.UpdateIssueCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateIssueCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateProject() {
          return new FieldNode(
            schema.UpdateProjectPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UpdateProjectInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get updateProjectCard() {
          return new FieldNode(
            schema.UpdateProjectCardPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateProjectCardInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateProjectColumn() {
          return new FieldNode(
            schema.UpdateProjectColumnPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateProjectColumnInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updatePullRequest() {
          return new FieldNode(
            schema.UpdatePullRequestPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdatePullRequestInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updatePullRequestReview() {
          return new FieldNode(
            schema.UpdatePullRequestReviewPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdatePullRequestReviewInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updatePullRequestReviewComment() {
          return new FieldNode(
            schema.UpdatePullRequestReviewCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdatePullRequestReviewCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateRef() {
          return new FieldNode(
            schema.UpdateRefPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UpdateRefInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get updateRepository() {
          return new FieldNode(
            schema.UpdateRepositoryPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UpdateRepositoryInput, false)
                },
              },
              true
            ),
            true
          )
        },
        get updateSubscription() {
          return new FieldNode(
            schema.UpdateSubscriptionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateSubscriptionInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateTeamDiscussion() {
          return new FieldNode(
            schema.UpdateTeamDiscussionPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateTeamDiscussionInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateTeamDiscussionComment() {
          return new FieldNode(
            schema.UpdateTeamDiscussionCommentPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(
                    schema.UpdateTeamDiscussionCommentInput,
                    false
                  )
                },
              },
              true
            ),
            true
          )
        },
        get updateTopics() {
          return new FieldNode(
            schema.UpdateTopicsPayload,
            new Arguments(
              {
                get input() {
                  return new ArgumentsField(schema.UpdateTopicsInput, false)
                },
              },
              true
            ),
            true
          )
        },
      },
      { name: 'Mutation', extension: ((extensions as any) || {}).Mutation }
    )
  },
  get AddReactionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get reaction() {
          return new FieldNode(schema.Reaction, undefined, true)
        },
        get subject() {
          return new FieldNode(schema.Reactable, undefined, true)
        },
      },
      {
        name: 'AddReactionPayload',
        extension: ((extensions as any) || {}).AddReactionPayload,
      }
    )
  },
  get AddReactionInput() {
    return new InputNode(
      {
        get subjectId() {
          return new InputNodeField(schema.ID, false)
        },
        get content() {
          return new InputNodeField(schema.ReactionContent, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddReactionInput' }
    )
  },
  get RemoveReactionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get reaction() {
          return new FieldNode(schema.Reaction, undefined, true)
        },
        get subject() {
          return new FieldNode(schema.Reactable, undefined, true)
        },
      },
      {
        name: 'RemoveReactionPayload',
        extension: ((extensions as any) || {}).RemoveReactionPayload,
      }
    )
  },
  get RemoveReactionInput() {
    return new InputNode(
      {
        get subjectId() {
          return new InputNodeField(schema.ID, false)
        },
        get content() {
          return new InputNodeField(schema.ReactionContent, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveReactionInput' }
    )
  },
  get UpdateSubscriptionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get subscribable() {
          return new FieldNode(schema.Subscribable, undefined, true)
        },
      },
      {
        name: 'UpdateSubscriptionPayload',
        extension: ((extensions as any) || {}).UpdateSubscriptionPayload,
      }
    )
  },
  get UpdateSubscriptionInput() {
    return new InputNode(
      {
        get subscribableId() {
          return new InputNodeField(schema.ID, false)
        },
        get state() {
          return new InputNodeField(schema.SubscriptionState, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateSubscriptionInput' }
    )
  },
  get AddCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get commentEdge() {
          return new FieldNode(schema.IssueCommentEdge, undefined, true)
        },
        get subject() {
          return new FieldNode(schema.Node, undefined, true)
        },
        get timelineEdge() {
          return new FieldNode(schema.IssueTimelineItemEdge, undefined, true)
        },
      },
      {
        name: 'AddCommentPayload',
        extension: ((extensions as any) || {}).AddCommentPayload,
      }
    )
  },
  get AddCommentInput() {
    return new InputNode(
      {
        get subjectId() {
          return new InputNodeField(schema.ID, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddCommentInput' }
    )
  },
  get MinimizeCommentInput() {
    return new InputNode(
      {
        get subjectId() {
          return new InputNodeField(schema.ID, false)
        },
        get classifier() {
          return new InputNodeField(schema.ReportedContentClassifiers, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'MinimizeCommentInput' }
    )
  },
  get ReportedContentClassifiers() {
    return new EnumNode({ name: 'ReportedContentClassifiers' })
  },
  get UnminimizeCommentInput() {
    return new InputNode(
      {
        get subjectId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnminimizeCommentInput' }
    )
  },
  get UpdateIssueCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get issueComment() {
          return new FieldNode(schema.IssueComment, undefined, true)
        },
      },
      {
        name: 'UpdateIssueCommentPayload',
        extension: ((extensions as any) || {}).UpdateIssueCommentPayload,
      }
    )
  },
  get UpdateIssueCommentInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateIssueCommentInput' }
    )
  },
  get CreateProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
      },
      {
        name: 'CreateProjectPayload',
        extension: ((extensions as any) || {}).CreateProjectPayload,
      }
    )
  },
  get CreateProjectInput() {
    return new InputNode(
      {
        get ownerId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get template() {
          return new InputNodeField(schema.ProjectTemplate, true)
        },
        get repositoryIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateProjectInput' }
    )
  },
  get ProjectTemplate() {
    return new EnumNode({ name: 'ProjectTemplate' })
  },
  get UpdateProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
      },
      {
        name: 'UpdateProjectPayload',
        extension: ((extensions as any) || {}).UpdateProjectPayload,
      }
    )
  },
  get UpdateProjectInput() {
    return new InputNode(
      {
        get projectId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, true)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get state() {
          return new InputNodeField(schema.ProjectState, true)
        },
        get public() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateProjectInput' }
    )
  },
  get DeleteProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get owner() {
          return new FieldNode(schema.ProjectOwner, undefined, true)
        },
      },
      {
        name: 'DeleteProjectPayload',
        extension: ((extensions as any) || {}).DeleteProjectPayload,
      }
    )
  },
  get DeleteProjectInput() {
    return new InputNode(
      {
        get projectId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteProjectInput' }
    )
  },
  get CloneProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get jobStatusId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
      },
      {
        name: 'CloneProjectPayload',
        extension: ((extensions as any) || {}).CloneProjectPayload,
      }
    )
  },
  get CloneProjectInput() {
    return new InputNode(
      {
        get targetOwnerId() {
          return new InputNodeField(schema.ID, false)
        },
        get sourceId() {
          return new InputNodeField(schema.ID, false)
        },
        get includeWorkflows() {
          return new InputNodeField(schema.Boolean, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get public() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CloneProjectInput' }
    )
  },
  get ImportProjectInput() {
    return new InputNode(
      {
        get ownerName() {
          return new InputNodeField(schema.String, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get public() {
          return new InputNodeField(schema.Boolean, true)
        },
        get columnImports() {
          return new InputNodeField(
            new ArrayNode(schema.ProjectColumnImport, false),
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ImportProjectInput' }
    )
  },
  get ProjectColumnImport() {
    return new InputNode(
      {
        get columnName() {
          return new InputNodeField(schema.String, false)
        },
        get position() {
          return new InputNodeField(schema.Int, false)
        },
        get issues() {
          return new InputNodeField(
            new ArrayNode(schema.ProjectCardImport, true),
            true
          )
        },
      },
      { name: 'ProjectColumnImport' }
    )
  },
  get ProjectCardImport() {
    return new InputNode(
      {
        get repository() {
          return new InputNodeField(schema.String, false)
        },
        get number() {
          return new InputNodeField(schema.Int, false)
        },
      },
      { name: 'ProjectCardImport' }
    )
  },
  get AddProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get columnEdge() {
          return new FieldNode(schema.ProjectColumnEdge, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
      },
      {
        name: 'AddProjectColumnPayload',
        extension: ((extensions as any) || {}).AddProjectColumnPayload,
      }
    )
  },
  get AddProjectColumnInput() {
    return new InputNode(
      {
        get projectId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddProjectColumnInput' }
    )
  },
  get MoveProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get columnEdge() {
          return new FieldNode(schema.ProjectColumnEdge, undefined, true)
        },
      },
      {
        name: 'MoveProjectColumnPayload',
        extension: ((extensions as any) || {}).MoveProjectColumnPayload,
      }
    )
  },
  get MoveProjectColumnInput() {
    return new InputNode(
      {
        get columnId() {
          return new InputNodeField(schema.ID, false)
        },
        get afterColumnId() {
          return new InputNodeField(schema.ID, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'MoveProjectColumnInput' }
    )
  },
  get UpdateProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get projectColumn() {
          return new FieldNode(schema.ProjectColumn, undefined, true)
        },
      },
      {
        name: 'UpdateProjectColumnPayload',
        extension: ((extensions as any) || {}).UpdateProjectColumnPayload,
      }
    )
  },
  get UpdateProjectColumnInput() {
    return new InputNode(
      {
        get projectColumnId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateProjectColumnInput' }
    )
  },
  get DeleteProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get deletedColumnId() {
          return new FieldNode(schema.ID, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
      },
      {
        name: 'DeleteProjectColumnPayload',
        extension: ((extensions as any) || {}).DeleteProjectColumnPayload,
      }
    )
  },
  get DeleteProjectColumnInput() {
    return new InputNode(
      {
        get columnId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteProjectColumnInput' }
    )
  },
  get AddProjectCardPayload() {
    return new ObjectNode(
      {
        get cardEdge() {
          return new FieldNode(schema.ProjectCardEdge, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get projectColumn() {
          return new FieldNode(schema.ProjectColumn, undefined, true)
        },
      },
      {
        name: 'AddProjectCardPayload',
        extension: ((extensions as any) || {}).AddProjectCardPayload,
      }
    )
  },
  get AddProjectCardInput() {
    return new InputNode(
      {
        get projectColumnId() {
          return new InputNodeField(schema.ID, false)
        },
        get contentId() {
          return new InputNodeField(schema.ID, true)
        },
        get note() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddProjectCardInput' }
    )
  },
  get UpdateProjectCardPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get projectCard() {
          return new FieldNode(schema.ProjectCard, undefined, true)
        },
      },
      {
        name: 'UpdateProjectCardPayload',
        extension: ((extensions as any) || {}).UpdateProjectCardPayload,
      }
    )
  },
  get UpdateProjectCardInput() {
    return new InputNode(
      {
        get projectCardId() {
          return new InputNodeField(schema.ID, false)
        },
        get isArchived() {
          return new InputNodeField(schema.Boolean, true)
        },
        get note() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateProjectCardInput' }
    )
  },
  get MoveProjectCardPayload() {
    return new ObjectNode(
      {
        get cardEdge() {
          return new FieldNode(schema.ProjectCardEdge, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'MoveProjectCardPayload',
        extension: ((extensions as any) || {}).MoveProjectCardPayload,
      }
    )
  },
  get MoveProjectCardInput() {
    return new InputNode(
      {
        get cardId() {
          return new InputNodeField(schema.ID, false)
        },
        get columnId() {
          return new InputNodeField(schema.ID, false)
        },
        get afterCardId() {
          return new InputNodeField(schema.ID, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'MoveProjectCardInput' }
    )
  },
  get DeleteProjectCardPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get column() {
          return new FieldNode(schema.ProjectColumn, undefined, true)
        },
        get deletedCardId() {
          return new FieldNode(schema.ID, undefined, true)
        },
      },
      {
        name: 'DeleteProjectCardPayload',
        extension: ((extensions as any) || {}).DeleteProjectCardPayload,
      }
    )
  },
  get DeleteProjectCardInput() {
    return new InputNode(
      {
        get cardId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteProjectCardInput' }
    )
  },
  get LinkRepositoryToProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'LinkRepositoryToProjectPayload',
        extension: ((extensions as any) || {}).LinkRepositoryToProjectPayload,
      }
    )
  },
  get LinkRepositoryToProjectInput() {
    return new InputNode(
      {
        get projectId() {
          return new InputNodeField(schema.ID, false)
        },
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'LinkRepositoryToProjectInput' }
    )
  },
  get UnlinkRepositoryFromProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get project() {
          return new FieldNode(schema.Project, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'UnlinkRepositoryFromProjectPayload',
        extension: ((extensions as any) || {})
          .UnlinkRepositoryFromProjectPayload,
      }
    )
  },
  get UnlinkRepositoryFromProjectInput() {
    return new InputNode(
      {
        get projectId() {
          return new InputNodeField(schema.ID, false)
        },
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnlinkRepositoryFromProjectInput' }
    )
  },
  get ConvertProjectCardNoteToIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get projectCard() {
          return new FieldNode(schema.ProjectCard, undefined, true)
        },
      },
      {
        name: 'ConvertProjectCardNoteToIssuePayload',
        extension: ((extensions as any) || {})
          .ConvertProjectCardNoteToIssuePayload,
      }
    )
  },
  get ConvertProjectCardNoteToIssueInput() {
    return new InputNode(
      {
        get projectCardId() {
          return new InputNodeField(schema.ID, false)
        },
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get title() {
          return new InputNodeField(schema.String, true)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ConvertProjectCardNoteToIssueInput' }
    )
  },
  get UnmarkIssueAsDuplicatePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get duplicate() {
          return new FieldNode(schema.IssueOrPullRequest, undefined, true)
        },
      },
      {
        name: 'UnmarkIssueAsDuplicatePayload',
        extension: ((extensions as any) || {}).UnmarkIssueAsDuplicatePayload,
      }
    )
  },
  get UnmarkIssueAsDuplicateInput() {
    return new InputNode(
      {
        get duplicateId() {
          return new InputNodeField(schema.ID, false)
        },
        get canonicalId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnmarkIssueAsDuplicateInput' }
    )
  },
  get LockLockablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get lockedRecord() {
          return new FieldNode(schema.Lockable, undefined, true)
        },
      },
      {
        name: 'LockLockablePayload',
        extension: ((extensions as any) || {}).LockLockablePayload,
      }
    )
  },
  get LockLockableInput() {
    return new InputNode(
      {
        get lockableId() {
          return new InputNodeField(schema.ID, false)
        },
        get lockReason() {
          return new InputNodeField(schema.LockReason, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'LockLockableInput' }
    )
  },
  get UnlockLockablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get unlockedRecord() {
          return new FieldNode(schema.Lockable, undefined, true)
        },
      },
      {
        name: 'UnlockLockablePayload',
        extension: ((extensions as any) || {}).UnlockLockablePayload,
      }
    )
  },
  get UnlockLockableInput() {
    return new InputNode(
      {
        get lockableId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnlockLockableInput' }
    )
  },
  get AddAssigneesToAssignablePayload() {
    return new ObjectNode(
      {
        get assignable() {
          return new FieldNode(schema.Assignable, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'AddAssigneesToAssignablePayload',
        extension: ((extensions as any) || {}).AddAssigneesToAssignablePayload,
      }
    )
  },
  get AddAssigneesToAssignableInput() {
    return new InputNode(
      {
        get assignableId() {
          return new InputNodeField(schema.ID, false)
        },
        get assigneeIds() {
          return new InputNodeField(new ArrayNode(schema.ID, false), false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddAssigneesToAssignableInput' }
    )
  },
  get RemoveAssigneesFromAssignablePayload() {
    return new ObjectNode(
      {
        get assignable() {
          return new FieldNode(schema.Assignable, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'RemoveAssigneesFromAssignablePayload',
        extension: ((extensions as any) || {})
          .RemoveAssigneesFromAssignablePayload,
      }
    )
  },
  get RemoveAssigneesFromAssignableInput() {
    return new InputNode(
      {
        get assignableId() {
          return new InputNodeField(schema.ID, false)
        },
        get assigneeIds() {
          return new InputNodeField(new ArrayNode(schema.ID, false), false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveAssigneesFromAssignableInput' }
    )
  },
  get AddLabelsToLabelablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get labelable() {
          return new FieldNode(schema.Labelable, undefined, true)
        },
      },
      {
        name: 'AddLabelsToLabelablePayload',
        extension: ((extensions as any) || {}).AddLabelsToLabelablePayload,
      }
    )
  },
  get AddLabelsToLabelableInput() {
    return new InputNode(
      {
        get labelableId() {
          return new InputNodeField(schema.ID, false)
        },
        get labelIds() {
          return new InputNodeField(new ArrayNode(schema.ID, false), false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddLabelsToLabelableInput' }
    )
  },
  get CreateIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, true)
        },
      },
      {
        name: 'CreateIssuePayload',
        extension: ((extensions as any) || {}).CreateIssuePayload,
      }
    )
  },
  get CreateIssueInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get title() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get assigneeIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get milestoneId() {
          return new InputNodeField(schema.ID, true)
        },
        get labelIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get projectIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateIssueInput' }
    )
  },
  get ClearLabelsFromLabelablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get labelable() {
          return new FieldNode(schema.Labelable, undefined, true)
        },
      },
      {
        name: 'ClearLabelsFromLabelablePayload',
        extension: ((extensions as any) || {}).ClearLabelsFromLabelablePayload,
      }
    )
  },
  get ClearLabelsFromLabelableInput() {
    return new InputNode(
      {
        get labelableId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ClearLabelsFromLabelableInput' }
    )
  },
  get RemoveLabelsFromLabelablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get labelable() {
          return new FieldNode(schema.Labelable, undefined, true)
        },
      },
      {
        name: 'RemoveLabelsFromLabelablePayload',
        extension: ((extensions as any) || {}).RemoveLabelsFromLabelablePayload,
      }
    )
  },
  get RemoveLabelsFromLabelableInput() {
    return new InputNode(
      {
        get labelableId() {
          return new InputNodeField(schema.ID, false)
        },
        get labelIds() {
          return new InputNodeField(new ArrayNode(schema.ID, false), false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveLabelsFromLabelableInput' }
    )
  },
  get CloseIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, true)
        },
      },
      {
        name: 'CloseIssuePayload',
        extension: ((extensions as any) || {}).CloseIssuePayload,
      }
    )
  },
  get CloseIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CloseIssueInput' }
    )
  },
  get ReopenIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, true)
        },
      },
      {
        name: 'ReopenIssuePayload',
        extension: ((extensions as any) || {}).ReopenIssuePayload,
      }
    )
  },
  get ReopenIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ReopenIssueInput' }
    )
  },
  get TransferIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, true)
        },
      },
      {
        name: 'TransferIssuePayload',
        extension: ((extensions as any) || {}).TransferIssuePayload,
      }
    )
  },
  get TransferIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new InputNodeField(schema.ID, false)
        },
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'TransferIssueInput' }
    )
  },
  get DeleteIssueCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'DeleteIssueCommentPayload',
        extension: ((extensions as any) || {}).DeleteIssueCommentPayload,
      }
    )
  },
  get DeleteIssueCommentInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteIssueCommentInput' }
    )
  },
  get UpdateIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get issue() {
          return new FieldNode(schema.Issue, undefined, true)
        },
      },
      {
        name: 'UpdateIssuePayload',
        extension: ((extensions as any) || {}).UpdateIssuePayload,
      }
    )
  },
  get UpdateIssueInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get title() {
          return new InputNodeField(schema.String, true)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get assigneeIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get milestoneId() {
          return new InputNodeField(schema.ID, true)
        },
        get labelIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get state() {
          return new InputNodeField(schema.IssueState, true)
        },
        get projectIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateIssueInput' }
    )
  },
  get DeleteIssuePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'DeleteIssuePayload',
        extension: ((extensions as any) || {}).DeleteIssuePayload,
      }
    )
  },
  get DeleteIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteIssueInput' }
    )
  },
  get PinIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'PinIssueInput' }
    )
  },
  get UnpinIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnpinIssueInput' }
    )
  },
  get CreatePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
      },
      {
        name: 'CreatePullRequestPayload',
        extension: ((extensions as any) || {}).CreatePullRequestPayload,
      }
    )
  },
  get CreatePullRequestInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get baseRefName() {
          return new InputNodeField(schema.String, false)
        },
        get headRefName() {
          return new InputNodeField(schema.String, false)
        },
        get title() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get maintainerCanModify() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreatePullRequestInput' }
    )
  },
  get UpdatePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
      },
      {
        name: 'UpdatePullRequestPayload',
        extension: ((extensions as any) || {}).UpdatePullRequestPayload,
      }
    )
  },
  get UpdatePullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new InputNodeField(schema.ID, false)
        },
        get baseRefName() {
          return new InputNodeField(schema.String, true)
        },
        get title() {
          return new InputNodeField(schema.String, true)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get state() {
          return new InputNodeField(schema.PullRequestUpdateState, true)
        },
        get maintainerCanModify() {
          return new InputNodeField(schema.Boolean, true)
        },
        get assigneeIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get milestoneId() {
          return new InputNodeField(schema.ID, true)
        },
        get labelIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get projectIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdatePullRequestInput' }
    )
  },
  get PullRequestUpdateState() {
    return new EnumNode({ name: 'PullRequestUpdateState' })
  },
  get ClosePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
      },
      {
        name: 'ClosePullRequestPayload',
        extension: ((extensions as any) || {}).ClosePullRequestPayload,
      }
    )
  },
  get ClosePullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ClosePullRequestInput' }
    )
  },
  get ReopenPullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
      },
      {
        name: 'ReopenPullRequestPayload',
        extension: ((extensions as any) || {}).ReopenPullRequestPayload,
      }
    )
  },
  get ReopenPullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ReopenPullRequestInput' }
    )
  },
  get MergePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
      },
      {
        name: 'MergePullRequestPayload',
        extension: ((extensions as any) || {}).MergePullRequestPayload,
      }
    )
  },
  get MergePullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new InputNodeField(schema.ID, false)
        },
        get commitHeadline() {
          return new InputNodeField(schema.String, true)
        },
        get commitBody() {
          return new InputNodeField(schema.String, true)
        },
        get expectedHeadOid() {
          return new InputNodeField(schema.GitObjectID, true)
        },
        get mergeMethod() {
          return new InputNodeField(schema.PullRequestMergeMethod, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'MergePullRequestInput' }
    )
  },
  get PullRequestMergeMethod() {
    return new EnumNode({ name: 'PullRequestMergeMethod' })
  },
  get DeletePullRequestReviewCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
      },
      {
        name: 'DeletePullRequestReviewCommentPayload',
        extension: ((extensions as any) || {})
          .DeletePullRequestReviewCommentPayload,
      }
    )
  },
  get DeletePullRequestReviewCommentInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeletePullRequestReviewCommentInput' }
    )
  },
  get AddPullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
        get reviewEdge() {
          return new FieldNode(schema.PullRequestReviewEdge, undefined, true)
        },
      },
      {
        name: 'AddPullRequestReviewPayload',
        extension: ((extensions as any) || {}).AddPullRequestReviewPayload,
      }
    )
  },
  get AddPullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new InputNodeField(schema.ID, false)
        },
        get commitOID() {
          return new InputNodeField(schema.GitObjectID, true)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get event() {
          return new InputNodeField(schema.PullRequestReviewEvent, true)
        },
        get comments() {
          return new InputNodeField(
            new ArrayNode(schema.DraftPullRequestReviewComment, true),
            true
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddPullRequestReviewInput' }
    )
  },
  get PullRequestReviewEvent() {
    return new EnumNode({ name: 'PullRequestReviewEvent' })
  },
  get DraftPullRequestReviewComment() {
    return new InputNode(
      {
        get path() {
          return new InputNodeField(schema.String, false)
        },
        get position() {
          return new InputNodeField(schema.Int, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
      },
      { name: 'DraftPullRequestReviewComment' }
    )
  },
  get SubmitPullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
      },
      {
        name: 'SubmitPullRequestReviewPayload',
        extension: ((extensions as any) || {}).SubmitPullRequestReviewPayload,
      }
    )
  },
  get SubmitPullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new InputNodeField(schema.ID, false)
        },
        get event() {
          return new InputNodeField(schema.PullRequestReviewEvent, false)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'SubmitPullRequestReviewInput' }
    )
  },
  get UpdatePullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
      },
      {
        name: 'UpdatePullRequestReviewPayload',
        extension: ((extensions as any) || {}).UpdatePullRequestReviewPayload,
      }
    )
  },
  get UpdatePullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new InputNodeField(schema.ID, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdatePullRequestReviewInput' }
    )
  },
  get DismissPullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
      },
      {
        name: 'DismissPullRequestReviewPayload',
        extension: ((extensions as any) || {}).DismissPullRequestReviewPayload,
      }
    )
  },
  get DismissPullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new InputNodeField(schema.ID, false)
        },
        get message() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DismissPullRequestReviewInput' }
    )
  },
  get DeletePullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReview() {
          return new FieldNode(schema.PullRequestReview, undefined, true)
        },
      },
      {
        name: 'DeletePullRequestReviewPayload',
        extension: ((extensions as any) || {}).DeletePullRequestReviewPayload,
      }
    )
  },
  get DeletePullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeletePullRequestReviewInput' }
    )
  },
  get ResolveReviewThreadPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get thread() {
          return new FieldNode(schema.PullRequestReviewThread, undefined, true)
        },
      },
      {
        name: 'ResolveReviewThreadPayload',
        extension: ((extensions as any) || {}).ResolveReviewThreadPayload,
      }
    )
  },
  get ResolveReviewThreadInput() {
    return new InputNode(
      {
        get threadId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ResolveReviewThreadInput' }
    )
  },
  get UnresolveReviewThreadPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get thread() {
          return new FieldNode(schema.PullRequestReviewThread, undefined, true)
        },
      },
      {
        name: 'UnresolveReviewThreadPayload',
        extension: ((extensions as any) || {}).UnresolveReviewThreadPayload,
      }
    )
  },
  get UnresolveReviewThreadInput() {
    return new InputNode(
      {
        get threadId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnresolveReviewThreadInput' }
    )
  },
  get AddPullRequestReviewCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get comment() {
          return new FieldNode(schema.PullRequestReviewComment, undefined, true)
        },
        get commentEdge() {
          return new FieldNode(
            schema.PullRequestReviewCommentEdge,
            undefined,
            true
          )
        },
      },
      {
        name: 'AddPullRequestReviewCommentPayload',
        extension: ((extensions as any) || {})
          .AddPullRequestReviewCommentPayload,
      }
    )
  },
  get AddPullRequestReviewCommentInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new InputNodeField(schema.ID, false)
        },
        get commitOID() {
          return new InputNodeField(schema.GitObjectID, true)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get path() {
          return new InputNodeField(schema.String, true)
        },
        get position() {
          return new InputNodeField(schema.Int, true)
        },
        get inReplyTo() {
          return new InputNodeField(schema.ID, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddPullRequestReviewCommentInput' }
    )
  },
  get UpdatePullRequestReviewCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequestReviewComment() {
          return new FieldNode(schema.PullRequestReviewComment, undefined, true)
        },
      },
      {
        name: 'UpdatePullRequestReviewCommentPayload',
        extension: ((extensions as any) || {})
          .UpdatePullRequestReviewCommentPayload,
      }
    )
  },
  get UpdatePullRequestReviewCommentInput() {
    return new InputNode(
      {
        get pullRequestReviewCommentId() {
          return new InputNodeField(schema.ID, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdatePullRequestReviewCommentInput' }
    )
  },
  get UpdateEnterpriseProfilePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseProfilePayload',
        extension: ((extensions as any) || {}).UpdateEnterpriseProfilePayload,
      }
    )
  },
  get UpdateEnterpriseProfileInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, true)
        },
        get description() {
          return new InputNodeField(schema.String, true)
        },
        get websiteUrl() {
          return new InputNodeField(schema.String, true)
        },
        get location() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseProfileInput' }
    )
  },
  get InviteEnterpriseAdminPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get invitation() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitation,
            undefined,
            true
          )
        },
      },
      {
        name: 'InviteEnterpriseAdminPayload',
        extension: ((extensions as any) || {}).InviteEnterpriseAdminPayload,
      }
    )
  },
  get InviteEnterpriseAdminInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get invitee() {
          return new InputNodeField(schema.String, true)
        },
        get email() {
          return new InputNodeField(schema.String, true)
        },
        get role() {
          return new InputNodeField(schema.EnterpriseAdministratorRole, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'InviteEnterpriseAdminInput' }
    )
  },
  get AcceptEnterpriseAdministratorInvitationPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get invitation() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitation,
            undefined,
            true
          )
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'AcceptEnterpriseAdministratorInvitationPayload',
        extension: ((extensions as any) || {})
          .AcceptEnterpriseAdministratorInvitationPayload,
      }
    )
  },
  get AcceptEnterpriseAdministratorInvitationInput() {
    return new InputNode(
      {
        get invitationId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AcceptEnterpriseAdministratorInvitationInput' }
    )
  },
  get CancelEnterpriseAdminInvitationPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get invitation() {
          return new FieldNode(
            schema.EnterpriseAdministratorInvitation,
            undefined,
            true
          )
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'CancelEnterpriseAdminInvitationPayload',
        extension: ((extensions as any) || {})
          .CancelEnterpriseAdminInvitationPayload,
      }
    )
  },
  get CancelEnterpriseAdminInvitationInput() {
    return new InputNode(
      {
        get invitationId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CancelEnterpriseAdminInvitationInput' }
    )
  },
  get RemoveEnterpriseAdminPayload() {
    return new ObjectNode(
      {
        get admin() {
          return new FieldNode(schema.User, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
        get viewer() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'RemoveEnterpriseAdminPayload',
        extension: ((extensions as any) || {}).RemoveEnterpriseAdminPayload,
      }
    )
  },
  get RemoveEnterpriseAdminInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get login() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveEnterpriseAdminInput' }
    )
  },
  get RemoveEnterpriseOrganizationPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
        get viewer() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'RemoveEnterpriseOrganizationPayload',
        extension: ((extensions as any) || {})
          .RemoveEnterpriseOrganizationPayload,
      }
    )
  },
  get RemoveEnterpriseOrganizationInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get organizationId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveEnterpriseOrganizationInput' }
    )
  },
  get CreateEnterpriseOrganizationPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get organization() {
          return new FieldNode(schema.Organization, undefined, true)
        },
      },
      {
        name: 'CreateEnterpriseOrganizationPayload',
        extension: ((extensions as any) || {})
          .CreateEnterpriseOrganizationPayload,
      }
    )
  },
  get CreateEnterpriseOrganizationInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get login() {
          return new InputNodeField(schema.String, false)
        },
        get profileName() {
          return new InputNodeField(schema.String, false)
        },
        get billingEmail() {
          return new InputNodeField(schema.String, false)
        },
        get adminLogins() {
          return new InputNodeField(new ArrayNode(schema.String, false), false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateEnterpriseOrganizationInput' }
    )
  },
  get RegenerateEnterpriseIdentityProviderRecoveryCodesPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get identityProvider() {
          return new FieldNode(
            schema.EnterpriseIdentityProvider,
            undefined,
            true
          )
        },
      },
      {
        name: 'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload',
        extension: ((extensions as any) || {})
          .RegenerateEnterpriseIdentityProviderRecoveryCodesPayload,
      }
    )
  },
  get RegenerateEnterpriseIdentityProviderRecoveryCodesInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RegenerateEnterpriseIdentityProviderRecoveryCodesInput' }
    )
  },
  get UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanCreateRepositoriesSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseMembersCanCreateRepositoriesSettingValue,
            true
          )
        },
        get membersCanCreateRepositoriesPolicyEnabled() {
          return new InputNodeField(schema.Boolean, true)
        },
        get membersCanCreatePublicRepositories() {
          return new InputNodeField(schema.Boolean, true)
        },
        get membersCanCreatePrivateRepositories() {
          return new InputNodeField(schema.Boolean, true)
        },
        get membersCanCreateInternalRepositories() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanCreateRepositoriesSettingInput' }
    )
  },
  get UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload,
      }
    )
  },
  get UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput' }
    )
  },
  get UpdateEnterpriseDefaultRepositoryPermissionSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseDefaultRepositoryPermissionSettingPayload,
      }
    )
  },
  get UpdateEnterpriseDefaultRepositoryPermissionSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseDefaultRepositoryPermissionSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseDefaultRepositoryPermissionSettingInput' }
    )
  },
  get UpdateEnterpriseTeamDiscussionsSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseTeamDiscussionsSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseTeamDiscussionsSettingPayload,
      }
    )
  },
  get UpdateEnterpriseTeamDiscussionsSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseTeamDiscussionsSettingInput' }
    )
  },
  get UpdateEnterpriseOrganizationProjectsSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseOrganizationProjectsSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseOrganizationProjectsSettingPayload,
      }
    )
  },
  get UpdateEnterpriseOrganizationProjectsSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseOrganizationProjectsSettingInput' }
    )
  },
  get UpdateEnterpriseRepositoryProjectsSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseRepositoryProjectsSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseRepositoryProjectsSettingPayload,
      }
    )
  },
  get UpdateEnterpriseRepositoryProjectsSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseRepositoryProjectsSettingInput' }
    )
  },
  get UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name:
          'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      {
        name:
          'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput',
      }
    )
  },
  get UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput' }
    )
  },
  get UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput' }
    )
  },
  get UpdateEnterpriseMembersCanMakePurchasesSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanMakePurchasesSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanMakePurchasesSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanMakePurchasesSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseMembersCanMakePurchasesSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanMakePurchasesSettingInput' }
    )
  },
  get UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload,
      }
    )
  },
  get UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(schema.EnterpriseEnabledSettingValue, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput' }
    )
  },
  get UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput' }
    )
  },
  get UpdateEnterpriseMembersCanDeleteIssuesSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanDeleteIssuesSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanDeleteIssuesSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanDeleteIssuesSettingInput' }
    )
  },
  get UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload,
      }
    )
  },
  get UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get settingValue() {
          return new InputNodeField(
            schema.EnterpriseEnabledDisabledSettingValue,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput' }
    )
  },
  get UpdateEnterpriseActionExecutionCapabilitySettingPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enterprise() {
          return new FieldNode(schema.Enterprise, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseActionExecutionCapabilitySettingPayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseActionExecutionCapabilitySettingPayload,
      }
    )
  },
  get UpdateEnterpriseActionExecutionCapabilitySettingInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get capability() {
          return new InputNodeField(
            schema.ActionExecutionCapabilitySetting,
            false
          )
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseActionExecutionCapabilitySettingInput' }
    )
  },
  get UpdateEnterpriseAdministratorRolePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateEnterpriseAdministratorRolePayload',
        extension: ((extensions as any) || {})
          .UpdateEnterpriseAdministratorRolePayload,
      }
    )
  },
  get UpdateEnterpriseAdministratorRoleInput() {
    return new InputNode(
      {
        get enterpriseId() {
          return new InputNodeField(schema.ID, false)
        },
        get login() {
          return new InputNodeField(schema.String, false)
        },
        get role() {
          return new InputNodeField(schema.EnterpriseAdministratorRole, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateEnterpriseAdministratorRoleInput' }
    )
  },
  get RemoveOutsideCollaboratorPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get removedUser() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'RemoveOutsideCollaboratorPayload',
        extension: ((extensions as any) || {}).RemoveOutsideCollaboratorPayload,
      }
    )
  },
  get RemoveOutsideCollaboratorInput() {
    return new InputNode(
      {
        get userId() {
          return new InputNodeField(schema.ID, false)
        },
        get organizationId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveOutsideCollaboratorInput' }
    )
  },
  get RequestReviewsPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get pullRequest() {
          return new FieldNode(schema.PullRequest, undefined, true)
        },
        get requestedReviewersEdge() {
          return new FieldNode(schema.UserEdge, undefined, true)
        },
      },
      {
        name: 'RequestReviewsPayload',
        extension: ((extensions as any) || {}).RequestReviewsPayload,
      }
    )
  },
  get RequestReviewsInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new InputNodeField(schema.ID, false)
        },
        get userIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get teamIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get union() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RequestReviewsInput' }
    )
  },
  get RegistryPackageFileState() {
    return new EnumNode({ name: 'RegistryPackageFileState' })
  },
  get DeletePackageVersionInput() {
    return new InputNode(
      {
        get packageVersionId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeletePackageVersionInput' }
    )
  },
  get CloneTemplateRepositoryPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'CloneTemplateRepositoryPayload',
        extension: ((extensions as any) || {}).CloneTemplateRepositoryPayload,
      }
    )
  },
  get CloneTemplateRepositoryInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get ownerId() {
          return new InputNodeField(schema.ID, false)
        },
        get description() {
          return new InputNodeField(schema.String, true)
        },
        get visibility() {
          return new InputNodeField(schema.RepositoryVisibility, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CloneTemplateRepositoryInput' }
    )
  },
  get CreateRepositoryPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'CreateRepositoryPayload',
        extension: ((extensions as any) || {}).CreateRepositoryPayload,
      }
    )
  },
  get CreateRepositoryInput() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get ownerId() {
          return new InputNodeField(schema.ID, true)
        },
        get description() {
          return new InputNodeField(schema.String, true)
        },
        get visibility() {
          return new InputNodeField(schema.RepositoryVisibility, false)
        },
        get template() {
          return new InputNodeField(schema.Boolean, true)
        },
        get homepageUrl() {
          return new InputNodeField(schema.URI, true)
        },
        get hasWikiEnabled() {
          return new InputNodeField(schema.Boolean, true)
        },
        get hasIssuesEnabled() {
          return new InputNodeField(schema.Boolean, true)
        },
        get teamId() {
          return new InputNodeField(schema.ID, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateRepositoryInput' }
    )
  },
  get UpdateRepositoryPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'UpdateRepositoryPayload',
        extension: ((extensions as any) || {}).UpdateRepositoryPayload,
      }
    )
  },
  get UpdateRepositoryInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, true)
        },
        get description() {
          return new InputNodeField(schema.String, true)
        },
        get template() {
          return new InputNodeField(schema.Boolean, true)
        },
        get homepageUrl() {
          return new InputNodeField(schema.URI, true)
        },
        get hasWikiEnabled() {
          return new InputNodeField(schema.Boolean, true)
        },
        get hasIssuesEnabled() {
          return new InputNodeField(schema.Boolean, true)
        },
        get hasProjectsEnabled() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateRepositoryInput' }
    )
  },
  get CreateRefPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      {
        name: 'CreateRefPayload',
        extension: ((extensions as any) || {}).CreateRefPayload,
      }
    )
  },
  get CreateRefInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get oid() {
          return new InputNodeField(schema.GitObjectID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateRefInput' }
    )
  },
  get UpdateRefPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get ref() {
          return new FieldNode(schema.Ref, undefined, true)
        },
      },
      {
        name: 'UpdateRefPayload',
        extension: ((extensions as any) || {}).UpdateRefPayload,
      }
    )
  },
  get UpdateRefInput() {
    return new InputNode(
      {
        get refId() {
          return new InputNodeField(schema.ID, false)
        },
        get oid() {
          return new InputNodeField(schema.GitObjectID, false)
        },
        get force() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateRefInput' }
    )
  },
  get DeleteRefPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'DeleteRefPayload',
        extension: ((extensions as any) || {}).DeleteRefPayload,
      }
    )
  },
  get DeleteRefInput() {
    return new InputNode(
      {
        get refId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteRefInput' }
    )
  },
  get MergeBranchPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get mergeCommit() {
          return new FieldNode(schema.Commit, undefined, true)
        },
      },
      {
        name: 'MergeBranchPayload',
        extension: ((extensions as any) || {}).MergeBranchPayload,
      }
    )
  },
  get MergeBranchInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get base() {
          return new InputNodeField(schema.String, false)
        },
        get head() {
          return new InputNodeField(schema.String, false)
        },
        get commitMessage() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'MergeBranchInput' }
    )
  },
  get AddStarPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get starrable() {
          return new FieldNode(schema.Starrable, undefined, true)
        },
      },
      {
        name: 'AddStarPayload',
        extension: ((extensions as any) || {}).AddStarPayload,
      }
    )
  },
  get AddStarInput() {
    return new InputNode(
      {
        get starrableId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AddStarInput' }
    )
  },
  get RemoveStarPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get starrable() {
          return new FieldNode(schema.Starrable, undefined, true)
        },
      },
      {
        name: 'RemoveStarPayload',
        extension: ((extensions as any) || {}).RemoveStarPayload,
      }
    )
  },
  get RemoveStarInput() {
    return new InputNode(
      {
        get starrableId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'RemoveStarInput' }
    )
  },
  get AcceptTopicSuggestionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get topic() {
          return new FieldNode(schema.Topic, undefined, true)
        },
      },
      {
        name: 'AcceptTopicSuggestionPayload',
        extension: ((extensions as any) || {}).AcceptTopicSuggestionPayload,
      }
    )
  },
  get AcceptTopicSuggestionInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'AcceptTopicSuggestionInput' }
    )
  },
  get DeclineTopicSuggestionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get topic() {
          return new FieldNode(schema.Topic, undefined, true)
        },
      },
      {
        name: 'DeclineTopicSuggestionPayload',
        extension: ((extensions as any) || {}).DeclineTopicSuggestionPayload,
      }
    )
  },
  get DeclineTopicSuggestionInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get name() {
          return new InputNodeField(schema.String, false)
        },
        get reason() {
          return new InputNodeField(schema.TopicSuggestionDeclineReason, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeclineTopicSuggestionInput' }
    )
  },
  get TopicSuggestionDeclineReason() {
    return new EnumNode({ name: 'TopicSuggestionDeclineReason' })
  },
  get UpdateTopicsPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get invalidTopicNames() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          )
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, true)
        },
      },
      {
        name: 'UpdateTopicsPayload',
        extension: ((extensions as any) || {}).UpdateTopicsPayload,
      }
    )
  },
  get UpdateTopicsInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get topicNames() {
          return new InputNodeField(new ArrayNode(schema.String, false), false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateTopicsInput' }
    )
  },
  get CreateTeamDiscussionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamDiscussion() {
          return new FieldNode(schema.TeamDiscussion, undefined, true)
        },
      },
      {
        name: 'CreateTeamDiscussionPayload',
        extension: ((extensions as any) || {}).CreateTeamDiscussionPayload,
      }
    )
  },
  get CreateTeamDiscussionInput() {
    return new InputNode(
      {
        get teamId() {
          return new InputNodeField(schema.ID, false)
        },
        get title() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get private() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateTeamDiscussionInput' }
    )
  },
  get UpdateTeamDiscussionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamDiscussion() {
          return new FieldNode(schema.TeamDiscussion, undefined, true)
        },
      },
      {
        name: 'UpdateTeamDiscussionPayload',
        extension: ((extensions as any) || {}).UpdateTeamDiscussionPayload,
      }
    )
  },
  get UpdateTeamDiscussionInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get title() {
          return new InputNodeField(schema.String, true)
        },
        get body() {
          return new InputNodeField(schema.String, true)
        },
        get bodyVersion() {
          return new InputNodeField(schema.String, true)
        },
        get pinned() {
          return new InputNodeField(schema.Boolean, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateTeamDiscussionInput' }
    )
  },
  get DeleteTeamDiscussionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'DeleteTeamDiscussionPayload',
        extension: ((extensions as any) || {}).DeleteTeamDiscussionPayload,
      }
    )
  },
  get DeleteTeamDiscussionInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteTeamDiscussionInput' }
    )
  },
  get CreateTeamDiscussionCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamDiscussionComment() {
          return new FieldNode(schema.TeamDiscussionComment, undefined, true)
        },
      },
      {
        name: 'CreateTeamDiscussionCommentPayload',
        extension: ((extensions as any) || {})
          .CreateTeamDiscussionCommentPayload,
      }
    )
  },
  get CreateTeamDiscussionCommentInput() {
    return new InputNode(
      {
        get discussionId() {
          return new InputNodeField(schema.ID, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateTeamDiscussionCommentInput' }
    )
  },
  get UpdateTeamDiscussionCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get teamDiscussionComment() {
          return new FieldNode(schema.TeamDiscussionComment, undefined, true)
        },
      },
      {
        name: 'UpdateTeamDiscussionCommentPayload',
        extension: ((extensions as any) || {})
          .UpdateTeamDiscussionCommentPayload,
      }
    )
  },
  get UpdateTeamDiscussionCommentInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get bodyVersion() {
          return new InputNodeField(schema.String, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateTeamDiscussionCommentInput' }
    )
  },
  get DeleteTeamDiscussionCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'DeleteTeamDiscussionCommentPayload',
        extension: ((extensions as any) || {})
          .DeleteTeamDiscussionCommentPayload,
      }
    )
  },
  get DeleteTeamDiscussionCommentInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteTeamDiscussionCommentInput' }
    )
  },
  get CreateBranchProtectionRulePayload() {
    return new ObjectNode(
      {
        get branchProtectionRule() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'CreateBranchProtectionRulePayload',
        extension: ((extensions as any) || {})
          .CreateBranchProtectionRulePayload,
      }
    )
  },
  get CreateBranchProtectionRuleInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new InputNodeField(schema.ID, false)
        },
        get pattern() {
          return new InputNodeField(schema.String, false)
        },
        get requiresApprovingReviews() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiredApprovingReviewCount() {
          return new InputNodeField(schema.Int, true)
        },
        get requiresCommitSignatures() {
          return new InputNodeField(schema.Boolean, true)
        },
        get isAdminEnforced() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiresStatusChecks() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiresStrictStatusChecks() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiresCodeOwnerReviews() {
          return new InputNodeField(schema.Boolean, true)
        },
        get dismissesStaleReviews() {
          return new InputNodeField(schema.Boolean, true)
        },
        get restrictsReviewDismissals() {
          return new InputNodeField(schema.Boolean, true)
        },
        get reviewDismissalActorIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get restrictsPushes() {
          return new InputNodeField(schema.Boolean, true)
        },
        get pushActorIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get requiredStatusCheckContexts() {
          return new InputNodeField(new ArrayNode(schema.String, true), true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateBranchProtectionRuleInput' }
    )
  },
  get UpdateBranchProtectionRulePayload() {
    return new ObjectNode(
      {
        get branchProtectionRule() {
          return new FieldNode(schema.BranchProtectionRule, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'UpdateBranchProtectionRulePayload',
        extension: ((extensions as any) || {})
          .UpdateBranchProtectionRulePayload,
      }
    )
  },
  get UpdateBranchProtectionRuleInput() {
    return new InputNode(
      {
        get branchProtectionRuleId() {
          return new InputNodeField(schema.ID, false)
        },
        get pattern() {
          return new InputNodeField(schema.String, true)
        },
        get requiresApprovingReviews() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiredApprovingReviewCount() {
          return new InputNodeField(schema.Int, true)
        },
        get requiresCommitSignatures() {
          return new InputNodeField(schema.Boolean, true)
        },
        get isAdminEnforced() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiresStatusChecks() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiresStrictStatusChecks() {
          return new InputNodeField(schema.Boolean, true)
        },
        get requiresCodeOwnerReviews() {
          return new InputNodeField(schema.Boolean, true)
        },
        get dismissesStaleReviews() {
          return new InputNodeField(schema.Boolean, true)
        },
        get restrictsReviewDismissals() {
          return new InputNodeField(schema.Boolean, true)
        },
        get reviewDismissalActorIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get restrictsPushes() {
          return new InputNodeField(schema.Boolean, true)
        },
        get pushActorIds() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true)
        },
        get requiredStatusCheckContexts() {
          return new InputNodeField(new ArrayNode(schema.String, true), true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UpdateBranchProtectionRuleInput' }
    )
  },
  get DeleteBranchProtectionRulePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'DeleteBranchProtectionRulePayload',
        extension: ((extensions as any) || {})
          .DeleteBranchProtectionRulePayload,
      }
    )
  },
  get DeleteBranchProtectionRuleInput() {
    return new InputNode(
      {
        get branchProtectionRuleId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'DeleteBranchProtectionRuleInput' }
    )
  },
  get ChangeUserStatusPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get status() {
          return new FieldNode(schema.UserStatus, undefined, true)
        },
      },
      {
        name: 'ChangeUserStatusPayload',
        extension: ((extensions as any) || {}).ChangeUserStatusPayload,
      }
    )
  },
  get ChangeUserStatusInput() {
    return new InputNode(
      {
        get emoji() {
          return new InputNodeField(schema.String, true)
        },
        get message() {
          return new InputNodeField(schema.String, true)
        },
        get organizationId() {
          return new InputNodeField(schema.ID, true)
        },
        get limitedAvailability() {
          return new InputNodeField(schema.Boolean, true)
        },
        get expiresAt() {
          return new InputNodeField(schema.DateTime, true)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'ChangeUserStatusInput' }
    )
  },
  get FollowUserPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'FollowUserPayload',
        extension: ((extensions as any) || {}).FollowUserPayload,
      }
    )
  },
  get FollowUserInput() {
    return new InputNode(
      {
        get userId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'FollowUserInput' }
    )
  },
  get UnfollowUserPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.User, undefined, true)
        },
      },
      {
        name: 'UnfollowUserPayload',
        extension: ((extensions as any) || {}).UnfollowUserPayload,
      }
    )
  },
  get UnfollowUserInput() {
    return new InputNode(
      {
        get userId() {
          return new InputNodeField(schema.ID, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'UnfollowUserInput' }
    )
  },
  get ContentAttachment() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get contentReference() {
          return new FieldNode(schema.ContentReference, undefined, false)
        },
        get databaseId() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'ContentAttachment',
        extension: ((extensions as any) || {}).ContentAttachment,
      }
    )
  },
  get ContentReference() {
    return new ObjectNode(
      {
        get databaseId() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get reference() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'ContentReference',
        extension: ((extensions as any) || {}).ContentReference,
      }
    )
  },
  get CreateContentAttachmentInput() {
    return new InputNode(
      {
        get contentReferenceId() {
          return new InputNodeField(schema.ID, false)
        },
        get title() {
          return new InputNodeField(schema.String, false)
        },
        get body() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, true)
        },
      },
      { name: 'CreateContentAttachmentInput' }
    )
  },
  get __Schema() {
    return new ObjectNode(
      {
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          )
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          )
        },
      },
      { name: '__Schema', extension: ((extensions as any) || {}).__Schema }
    )
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            true
          )
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true)
              },
            }),
            true
          )
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          )
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type }
    )
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          )
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get onField() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get onFragment() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get onOperation() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive,
      }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue,
      }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue,
      }
    )
  },
  get __TypeKind() {
    return new EnumNode({ name: '__TypeKind' })
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: '__DirectiveLocation' })
  },
  get GpgSignature() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isValid() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get keyId() {
          return new FieldNode(schema.String, undefined, true)
        },
        get payload() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signature() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signer() {
          return new FieldNode(schema.User, undefined, true)
        },
        get state() {
          return new FieldNode(schema.GitSignatureState, undefined, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'GpgSignature',
        extension: ((extensions as any) || {}).GpgSignature,
      }
    )
  },
  get SmimeSignature() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isValid() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get payload() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signature() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signer() {
          return new FieldNode(schema.User, undefined, true)
        },
        get state() {
          return new FieldNode(schema.GitSignatureState, undefined, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'SmimeSignature',
        extension: ((extensions as any) || {}).SmimeSignature,
      }
    )
  },
  get Tag() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(schema.String, undefined, false)
        },
        get commitResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get commitUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get oid() {
          return new FieldNode(schema.GitObjectID, undefined, false)
        },
        get repository() {
          return new FieldNode(schema.Repository, undefined, false)
        },
        get tagger() {
          return new FieldNode(schema.GitActor, undefined, true)
        },
        get target() {
          return new FieldNode(schema.GitObject, undefined, false)
        },
      },
      { name: 'Tag', extension: ((extensions as any) || {}).Tag }
    )
  },
  get UnknownSignature() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, false)
        },
        get isValid() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get payload() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signature() {
          return new FieldNode(schema.String, undefined, false)
        },
        get signer() {
          return new FieldNode(schema.User, undefined, true)
        },
        get state() {
          return new FieldNode(schema.GitSignatureState, undefined, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: 'UnknownSignature',
        extension: ((extensions as any) || {}).UnknownSignature,
      }
    )
  },
  get GenericHovercardContext() {
    return new ObjectNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get octicon() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GenericHovercardContext',
        extension: ((extensions as any) || {}).GenericHovercardContext,
      }
    )
  },
  get OrganizationsHovercardContext() {
    return new ObjectNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get octicon() {
          return new FieldNode(schema.String, undefined, false)
        },
        get relevantOrganizations() {
          return new FieldNode(
            schema.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get totalOrganizationCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'OrganizationsHovercardContext',
        extension: ((extensions as any) || {}).OrganizationsHovercardContext,
      }
    )
  },
  get OrganizationTeamsHovercardContext() {
    return new ObjectNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get octicon() {
          return new FieldNode(schema.String, undefined, false)
        },
        get relevantTeams() {
          return new FieldNode(
            schema.TeamConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get teamsResourcePath() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get teamsUrl() {
          return new FieldNode(schema.URI, undefined, false)
        },
        get totalTeamCount() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      {
        name: 'OrganizationTeamsHovercardContext',
        extension: ((extensions as any) || {})
          .OrganizationTeamsHovercardContext,
      }
    )
  },
  get ViewerHovercardContext() {
    return new ObjectNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get octicon() {
          return new FieldNode(schema.String, undefined, false)
        },
        get viewer() {
          return new FieldNode(schema.User, undefined, false)
        },
      },
      {
        name: 'ViewerHovercardContext',
        extension: ((extensions as any) || {}).ViewerHovercardContext,
      }
    )
  },
  get ReviewStatusHovercardContext() {
    return new ObjectNode(
      {
        get message() {
          return new FieldNode(schema.String, undefined, false)
        },
        get octicon() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'ReviewStatusHovercardContext',
        extension: ((extensions as any) || {}).ReviewStatusHovercardContext,
      }
    )
  },
}

lazyGetters(schema)
