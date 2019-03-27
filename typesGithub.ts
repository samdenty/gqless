import {
  StringNode,
  NumberNode,
  ObjectNode,
  FieldNode,
  InputNode,
  Arguments,
  ArgumentsField,
  ArrayNode,
  ScalarNode,
  BooleanNode,
  UnionNode,
  InterfaceNode,
} from './src/new'

export const types_github = {
  get Boolean() {
    return new BooleanNode({ name: 'Boolean' })
  },
  get String() {
    return new StringNode({ name: 'String' })
  },
  get Query() {
    return new ObjectNode(
      {
        get codeOfConduct() {
          return new FieldNode(
            types_github.CodeOfConduct,
            new Arguments({
              get key() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get codesOfConduct() {
          return new FieldNode(
            new ArrayNode(types_github.CodeOfConduct, true),
            null,
            true
          )
        },
        get license() {
          return new FieldNode(
            types_github.License,
            new Arguments({
              get key() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get licenses() {
          return new FieldNode(
            new ArrayNode(types_github.License, false),
            null,
            false
          )
        },
        get marketplaceCategories() {
          return new FieldNode(
            new ArrayNode(types_github.MarketplaceCategory, false),
            new Arguments({
              get includeCategories() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get excludeEmpty() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludeSubcategories() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get marketplaceCategory() {
          return new FieldNode(
            types_github.MarketplaceCategory,
            new Arguments({
              get slug() {
                return new ArgumentsField(types_github.String, false)
              },
              get useTopicAliases() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get marketplaceListing() {
          return new FieldNode(
            types_github.MarketplaceListing,
            new Arguments({
              get slug() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get marketplaceListings() {
          return new FieldNode(
            types_github.MarketplaceListingConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get categorySlug() {
                return new ArgumentsField(types_github.String, true)
              },
              get useTopicAliases() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get viewerCanAdmin() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get adminId() {
                return new ArgumentsField(types_github.ID, true)
              },
              get organizationId() {
                return new ArgumentsField(types_github.ID, true)
              },
              get allStates() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get slugs() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get primaryCategoryOnly() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get withFreeTrialsOnly() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get meta() {
          return new FieldNode(types_github.GitHubMetadata, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.Node,
            new Arguments({
              get id() {
                return new ArgumentsField(types_github.ID, false)
              },
            }),
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Node, false),
            new Arguments({
              get ids() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ID, false),
                  false
                )
              },
            }),
            false
          )
        },
        get organization() {
          return new FieldNode(
            types_github.Organization,
            new Arguments({
              get login() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get rateLimit() {
          return new FieldNode(
            types_github.RateLimit,
            new Arguments({
              get dryRun() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get relay() {
          return new FieldNode(types_github.Query, null, false)
        },
        get repository() {
          return new FieldNode(
            types_github.Repository,
            new Arguments({
              get owner() {
                return new ArgumentsField(types_github.String, false)
              },
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get repositoryOwner() {
          return new FieldNode(
            types_github.RepositoryOwner,
            new Arguments({
              get login() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get resource() {
          return new FieldNode(
            types_github.UniformResourceLocatable,
            new Arguments({
              get url() {
                return new ArgumentsField(types_github.URI, false)
              },
            }),
            true
          )
        },
        get search() {
          return new FieldNode(
            types_github.SearchResultItemConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get query() {
                return new ArgumentsField(types_github.String, false)
              },
              get type() {
                return new ArgumentsField(types_github.SearchType, false)
              },
            }),
            false
          )
        },
        get securityAdvisories() {
          return new FieldNode(
            types_github.SecurityAdvisoryConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  types_github.SecurityAdvisoryOrder,
                  true
                )
              },
              get identifier() {
                return new ArgumentsField(
                  types_github.SecurityAdvisoryIdentifierFilter,
                  true
                )
              },
              get publishedSince() {
                return new ArgumentsField(types_github.DateTime, true)
              },
              get updatedSince() {
                return new ArgumentsField(types_github.DateTime, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get securityAdvisory() {
          return new FieldNode(
            types_github.SecurityAdvisory,
            new Arguments({
              get ghsaId() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get securityVulnerabilities() {
          return new FieldNode(
            types_github.SecurityVulnerabilityConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  types_github.SecurityVulnerabilityOrder,
                  true
                )
              },
              get ecosystem() {
                return new ArgumentsField(
                  types_github.SecurityAdvisoryEcosystem,
                  true
                )
              },
              get package() {
                return new ArgumentsField(types_github.String, true)
              },
              get severities() {
                return new ArgumentsField(
                  new ArrayNode(types_github.SecurityAdvisorySeverity, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get topic() {
          return new FieldNode(
            types_github.Topic,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get user() {
          return new FieldNode(
            types_github.User,
            new Arguments({
              get login() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get viewer() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'Query' }
    )
  },
  get Node() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      [
        types_github.AddedToProjectEvent,
        types_github.App,
        types_github.AssignedEvent,
        types_github.BaseRefChangedEvent,
        types_github.BaseRefForcePushedEvent,
        types_github.Blob,
        types_github.Bot,
        types_github.BranchProtectionRule,
        types_github.ClosedEvent,
        types_github.CodeOfConduct,
        types_github.CommentDeletedEvent,
        types_github.Commit,
        types_github.CommitComment,
        types_github.CommitCommentThread,
        types_github.ConvertedNoteToIssueEvent,
        types_github.CrossReferencedEvent,
        types_github.DemilestonedEvent,
        types_github.DeployKey,
        types_github.DeployedEvent,
        types_github.Deployment,
        types_github.DeploymentEnvironmentChangedEvent,
        types_github.DeploymentStatus,
        types_github.ExternalIdentity,
        types_github.Gist,
        types_github.GistComment,
        types_github.HeadRefDeletedEvent,
        types_github.HeadRefForcePushedEvent,
        types_github.HeadRefRestoredEvent,
        types_github.Issue,
        types_github.IssueComment,
        types_github.Label,
        types_github.LabeledEvent,
        types_github.Language,
        types_github.License,
        types_github.LockedEvent,
        types_github.MarketplaceCategory,
        types_github.MarketplaceListing,
        types_github.MentionedEvent,
        types_github.MergedEvent,
        types_github.Milestone,
        types_github.MilestonedEvent,
        types_github.MovedColumnsInProjectEvent,
        types_github.Organization,
        types_github.OrganizationIdentityProvider,
        types_github.OrganizationInvitation,
        types_github.PinnedEvent,
        types_github.Project,
        types_github.ProjectCard,
        types_github.ProjectColumn,
        types_github.ProtectedBranch,
        types_github.PublicKey,
        types_github.PullRequest,
        types_github.PullRequestCommit,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
        types_github.PullRequestReviewThread,
        types_github.PushAllowance,
        types_github.Reaction,
        types_github.Ref,
        types_github.ReferencedEvent,
        types_github.Release,
        types_github.ReleaseAsset,
        types_github.RemovedFromProjectEvent,
        types_github.RenamedTitleEvent,
        types_github.ReopenedEvent,
        types_github.Repository,
        types_github.RepositoryInvitation,
        types_github.RepositoryTopic,
        types_github.ReviewDismissalAllowance,
        types_github.ReviewDismissedEvent,
        types_github.ReviewRequest,
        types_github.ReviewRequestRemovedEvent,
        types_github.ReviewRequestedEvent,
        types_github.SecurityAdvisory,
        types_github.Status,
        types_github.StatusContext,
        types_github.SubscribedEvent,
        types_github.Tag,
        types_github.Team,
        types_github.Topic,
        types_github.TransferredEvent,
        types_github.Tree,
        types_github.UnassignedEvent,
        types_github.UnlabeledEvent,
        types_github.UnlockedEvent,
        types_github.UnpinnedEvent,
        types_github.UnsubscribedEvent,
        types_github.User,
        types_github.UserContentEdit,
        types_github.UserStatus,
      ],
      { name: 'Node' }
    )
  },
  get ID() {
    return new StringNode({ name: 'ID' })
  },
  get UniformResourceLocatable() {
    return new InterfaceNode(
      {
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      [
        types_github.Bot,
        types_github.ClosedEvent,
        types_github.Commit,
        types_github.CrossReferencedEvent,
        types_github.Issue,
        types_github.MergedEvent,
        types_github.Milestone,
        types_github.Organization,
        types_github.PullRequest,
        types_github.PullRequestCommit,
        types_github.Release,
        types_github.Repository,
        types_github.RepositoryTopic,
        types_github.ReviewDismissedEvent,
        types_github.User,
      ],
      { name: 'UniformResourceLocatable' }
    )
  },
  get URI() {
    return new ScalarNode({ name: 'URI' })
  },
  get PageInfo() {
    return new ObjectNode(
      {
        get endCursor() {
          return new FieldNode(types_github.String, null, true)
        },
        get hasNextPage() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasPreviousPage() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get startCursor() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'PageInfo' }
    )
  },
  get User() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get bio() {
          return new FieldNode(types_github.String, null, true)
        },
        get bioHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get commitComments() {
          return new FieldNode(
            types_github.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get company() {
          return new FieldNode(types_github.String, null, true)
        },
        get companyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get contributionsCollection() {
          return new FieldNode(
            types_github.ContributionsCollection,
            new Arguments({
              get organizationID() {
                return new ArgumentsField(types_github.ID, true)
              },
              get from() {
                return new ArgumentsField(types_github.DateTime, true)
              },
              get to() {
                return new ArgumentsField(types_github.DateTime, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get email() {
          return new FieldNode(types_github.String, null, false)
        },
        get followers() {
          return new FieldNode(
            types_github.FollowerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get following() {
          return new FieldNode(
            types_github.FollowingConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get gist() {
          return new FieldNode(
            types_github.Gist,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get gistComments() {
          return new FieldNode(
            types_github.GistCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get gists() {
          return new FieldNode(
            types_github.GistConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.GistPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.GistOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isBountyHunter() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isCampusExpert() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isDeveloperProgramMember() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isEmployee() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isHireable() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isSiteAdmin() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isViewer() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get issueComments() {
          return new FieldNode(
            types_github.IssueCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get issues() {
          return new FieldNode(
            types_github.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.IssueState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get location() {
          return new FieldNode(types_github.String, null, true)
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get organization() {
          return new FieldNode(
            types_github.Organization,
            new Arguments({
              get login() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get organizations() {
          return new FieldNode(
            types_github.OrganizationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pinnedRepositories() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get project() {
          return new FieldNode(
            types_github.Project,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get projects() {
          return new FieldNode(
            types_github.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(types_github.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get projectsUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get publicKeys() {
          return new FieldNode(
            types_github.PublicKeyConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pullRequests() {
          return new FieldNode(
            types_github.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repositories() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get isFork() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get repositoriesContributedTo() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get includeUserRepositories() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get contributionTypes() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryContributionType, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(
            types_github.Repository,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get starredRepositories() {
          return new FieldNode(
            types_github.StarredRepositoryConnection,
            new Arguments({
              get ownedByViewer() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.StarOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get status() {
          return new FieldNode(types_github.UserStatus, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanFollow() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerIsFollowing() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get watching() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get websiteUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
      },
      { name: 'User' }
    )
  },
  get Actor() {
    return new InterfaceNode(
      {
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      [types_github.Bot, types_github.Organization, types_github.User],
      { name: 'Actor' }
    )
  },
  get Int() {
    return new NumberNode({ name: 'Int' })
  },
  get DateTime() {
    return new ScalarNode({ name: 'DateTime' })
  },
  get RegistryPackageOwner() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      [types_github.Organization, types_github.Repository, types_github.User],
      { name: 'RegistryPackageOwner' }
    )
  },
  get Repository() {
    return new ObjectNode(
      {
        get assignableUsers() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get branchProtectionRules() {
          return new FieldNode(
            types_github.BranchProtectionRuleConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get codeOfConduct() {
          return new FieldNode(types_github.CodeOfConduct, null, true)
        },
        get collaborators() {
          return new FieldNode(
            types_github.RepositoryCollaboratorConnection,
            new Arguments({
              get affiliation() {
                return new ArgumentsField(
                  types_github.CollaboratorAffiliation,
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get commitComments() {
          return new FieldNode(
            types_github.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get defaultBranchRef() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get deployKeys() {
          return new FieldNode(
            types_github.DeployKeyConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get deployments() {
          return new FieldNode(
            types_github.DeploymentConnection,
            new Arguments({
              get environments() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(types_github.DeploymentOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get descriptionHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get diskUsage() {
          return new FieldNode(types_github.Int, null, true)
        },
        get forkCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get forks() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get hasIssuesEnabled() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasWikiEnabled() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get homepageUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isArchived() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isFork() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isLocked() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isMirror() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isPrivate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get issue() {
          return new FieldNode(
            types_github.Issue,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get issueOrPullRequest() {
          return new FieldNode(
            types_github.IssueOrPullRequest,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get issues() {
          return new FieldNode(
            types_github.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.IssueState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get label() {
          return new FieldNode(
            types_github.Label,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get labels() {
          return new FieldNode(
            types_github.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get query() {
                return new ArgumentsField(types_github.String, true)
              },
            }),
            true
          )
        },
        get languages() {
          return new FieldNode(
            types_github.LanguageConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.LanguageOrder, true)
              },
            }),
            true
          )
        },
        get licenseInfo() {
          return new FieldNode(types_github.License, null, true)
        },
        get lockReason() {
          return new FieldNode(types_github.RepositoryLockReason, null, true)
        },
        get mentionableUsers() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get mergeCommitAllowed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get milestone() {
          return new FieldNode(
            types_github.Milestone,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get milestones() {
          return new FieldNode(
            types_github.MilestoneConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.MilestoneState, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(types_github.MilestoneOrder, true)
              },
            }),
            true
          )
        },
        get mirrorUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get nameWithOwner() {
          return new FieldNode(types_github.String, null, false)
        },
        get object() {
          return new FieldNode(
            types_github.GitObject,
            new Arguments({
              get oid() {
                return new ArgumentsField(types_github.GitObjectID, true)
              },
              get expression() {
                return new ArgumentsField(types_github.String, true)
              },
            }),
            true
          )
        },
        get owner() {
          return new FieldNode(types_github.RepositoryOwner, null, false)
        },
        get parent() {
          return new FieldNode(types_github.Repository, null, true)
        },
        get primaryLanguage() {
          return new FieldNode(types_github.Language, null, true)
        },
        get project() {
          return new FieldNode(
            types_github.Project,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get projects() {
          return new FieldNode(
            types_github.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(types_github.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get projectsUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get protectedBranches() {
          return new FieldNode(
            types_github.ProtectedBranchConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pullRequest() {
          return new FieldNode(
            types_github.PullRequest,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get pullRequests() {
          return new FieldNode(
            types_github.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pushedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get rebaseMergeAllowed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get ref() {
          return new FieldNode(
            types_github.Ref,
            new Arguments({
              get qualifiedName() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get refs() {
          return new FieldNode(
            types_github.RefConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get refPrefix() {
                return new ArgumentsField(types_github.String, false)
              },
              get direction() {
                return new ArgumentsField(types_github.OrderDirection, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RefOrder, true)
              },
            }),
            true
          )
        },
        get release() {
          return new FieldNode(
            types_github.Release,
            new Arguments({
              get tagName() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get releases() {
          return new FieldNode(
            types_github.ReleaseConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReleaseOrder, true)
              },
            }),
            false
          )
        },
        get repositoryTopics() {
          return new FieldNode(
            types_github.RepositoryTopicConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get shortDescriptionHTML() {
          return new FieldNode(
            types_github.HTML,
            new Arguments({
              get limit() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get squashMergeAllowed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get sshUrl() {
          return new FieldNode(types_github.GitSSHRemote, null, false)
        },
        get stargazers() {
          return new FieldNode(
            types_github.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.StarOrder, true)
              },
            }),
            false
          )
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanAdminister() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdateTopics() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerHasStarred() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerPermission() {
          return new FieldNode(types_github.RepositoryPermission, null, true)
        },
        get viewerSubscription() {
          return new FieldNode(types_github.SubscriptionState, null, true)
        },
        get watchers() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
      },
      { name: 'Repository' }
    )
  },
  get ProjectOwner() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get project() {
          return new FieldNode(
            types_github.Project,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get projects() {
          return new FieldNode(
            types_github.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(types_github.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get projectsUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [types_github.Organization, types_github.Repository, types_github.User],
      { name: 'ProjectOwner' }
    )
  },
  get Project() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get closed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get closedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get columns() {
          return new FieldNode(
            types_github.ProjectColumnConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get number() {
          return new FieldNode(types_github.Int, null, false)
        },
        get owner() {
          return new FieldNode(types_github.ProjectOwner, null, false)
        },
        get pendingCards() {
          return new FieldNode(
            types_github.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get state() {
          return new FieldNode(types_github.ProjectState, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'Project' }
    )
  },
  get Closable() {
    return new InterfaceNode(
      {
        get closed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get closedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
      },
      [
        types_github.Issue,
        types_github.Milestone,
        types_github.Project,
        types_github.PullRequest,
      ],
      { name: 'Closable' }
    )
  },
  get Updatable() {
    return new InterfaceNode(
      {
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [
        types_github.CommitComment,
        types_github.GistComment,
        types_github.Issue,
        types_github.IssueComment,
        types_github.Project,
        types_github.PullRequest,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
      ],
      { name: 'Updatable' }
    )
  },
  get ProjectState() {
    return undefined
  },
  get HTML() {
    return new ScalarNode({ name: 'HTML' })
  },
  get ProjectColumnConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectColumnEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectColumn, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ProjectColumnConnection' }
    )
  },
  get ProjectColumnEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.ProjectColumn, null, true)
        },
      },
      { name: 'ProjectColumnEdge' }
    )
  },
  get ProjectColumn() {
    return new ObjectNode(
      {
        get cards() {
          return new FieldNode(
            types_github.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get project() {
          return new FieldNode(types_github.Project, null, false)
        },
        get purpose() {
          return new FieldNode(types_github.ProjectColumnPurpose, null, true)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'ProjectColumn' }
    )
  },
  get ProjectColumnPurpose() {
    return undefined
  },
  get ProjectCardConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectCardEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectCard, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ProjectCardConnection' }
    )
  },
  get ProjectCardEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.ProjectCard, null, true)
        },
      },
      { name: 'ProjectCardEdge' }
    )
  },
  get ProjectCard() {
    return new ObjectNode(
      {
        get column() {
          return new FieldNode(types_github.ProjectColumn, null, true)
        },
        get content() {
          return new FieldNode(types_github.ProjectCardItem, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isArchived() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get note() {
          return new FieldNode(types_github.String, null, true)
        },
        get project() {
          return new FieldNode(types_github.Project, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get state() {
          return new FieldNode(types_github.ProjectCardState, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'ProjectCard' }
    )
  },
  get ProjectCardState() {
    return undefined
  },
  get ProjectCardItem() {
    return new UnionNode([types_github.Issue, types_github.PullRequest])
  },
  get Issue() {
    return new ObjectNode(
      {
        get activeLockReason() {
          return new FieldNode(types_github.LockReason, null, true)
        },
        get assignees() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get closed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get closedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get comments() {
          return new FieldNode(
            types_github.IssueCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get labels() {
          return new FieldNode(
            types_github.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get locked() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get milestone() {
          return new FieldNode(types_github.Milestone, null, true)
        },
        get number() {
          return new FieldNode(types_github.Int, null, false)
        },
        get participants() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get projectCards() {
          return new FieldNode(
            types_github.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get state() {
          return new FieldNode(types_github.IssueState, null, false)
        },
        get timeline() {
          return new FieldNode(
            types_github.IssueTimelineConnection,
            new Arguments({
              get since() {
                return new ArgumentsField(types_github.DateTime, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerSubscription() {
          return new FieldNode(types_github.SubscriptionState, null, true)
        },
      },
      { name: 'Issue' }
    )
  },
  get Assignable() {
    return new InterfaceNode(
      {
        get assignees() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
      },
      [types_github.Issue, types_github.PullRequest],
      { name: 'Assignable' }
    )
  },
  get UserConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.UserEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'UserConnection' }
    )
  },
  get UserEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'UserEdge' }
    )
  },
  get Comment() {
    return new InterfaceNode(
      {
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [
        types_github.CommitComment,
        types_github.GistComment,
        types_github.Issue,
        types_github.IssueComment,
        types_github.PullRequest,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
      ],
      { name: 'Comment' }
    )
  },
  get UserContentEditConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.UserContentEditEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.UserContentEdit, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'UserContentEditConnection' }
    )
  },
  get UserContentEditEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.UserContentEdit, null, true)
        },
      },
      { name: 'UserContentEditEdge' }
    )
  },
  get UserContentEdit() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get deletedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get deletedBy() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get diff() {
          return new FieldNode(types_github.String, null, true)
        },
        get editedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'UserContentEdit' }
    )
  },
  get CommentAuthorAssociation() {
    return undefined
  },
  get UpdatableComment() {
    return new InterfaceNode(
      {
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
      },
      [
        types_github.CommitComment,
        types_github.GistComment,
        types_github.Issue,
        types_github.IssueComment,
        types_github.PullRequest,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
      ],
      { name: 'UpdatableComment' }
    )
  },
  get CommentCannotUpdateReason() {
    return undefined
  },
  get Labelable() {
    return new InterfaceNode(
      {
        get labels() {
          return new FieldNode(
            types_github.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
      },
      [types_github.Issue, types_github.PullRequest],
      { name: 'Labelable' }
    )
  },
  get LabelConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.LabelEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Label, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'LabelConnection' }
    )
  },
  get LabelEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Label, null, true)
        },
      },
      { name: 'LabelEdge' }
    )
  },
  get Label() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isDefault() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get issues() {
          return new FieldNode(
            types_github.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.IssueState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get pullRequests() {
          return new FieldNode(
            types_github.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'Label' }
    )
  },
  get IssueConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.IssueEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Issue, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'IssueConnection' }
    )
  },
  get IssueEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Issue, null, true)
        },
      },
      { name: 'IssueEdge' }
    )
  },
  get IssueOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.IssueOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'IssueOrder' }
    )
  },
  get IssueOrderField() {
    return undefined
  },
  get OrderDirection() {
    return undefined
  },
  get IssueState() {
    return undefined
  },
  get PullRequestConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequest, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestConnection' }
    )
  },
  get PullRequestEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
      },
      { name: 'PullRequestEdge' }
    )
  },
  get PullRequest() {
    return new ObjectNode(
      {
        get activeLockReason() {
          return new FieldNode(types_github.LockReason, null, true)
        },
        get additions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get assignees() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get baseRef() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get baseRefName() {
          return new FieldNode(types_github.String, null, false)
        },
        get baseRefOid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get baseRepository() {
          return new FieldNode(types_github.Repository, null, true)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get changedFiles() {
          return new FieldNode(types_github.Int, null, false)
        },
        get closed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get closedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get comments() {
          return new FieldNode(
            types_github.IssueCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get commits() {
          return new FieldNode(
            types_github.PullRequestCommitConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get deletions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get files() {
          return new FieldNode(
            types_github.PullRequestChangedFileConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get headRef() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get headRefName() {
          return new FieldNode(types_github.String, null, false)
        },
        get headRefOid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get headRepository() {
          return new FieldNode(types_github.Repository, null, true)
        },
        get headRepositoryOwner() {
          return new FieldNode(types_github.RepositoryOwner, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isCrossRepository() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get labels() {
          return new FieldNode(
            types_github.LabelConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get locked() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get maintainerCanModify() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get mergeCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get mergeable() {
          return new FieldNode(types_github.MergeableState, null, false)
        },
        get merged() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get mergedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get mergedBy() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get milestone() {
          return new FieldNode(types_github.Milestone, null, true)
        },
        get number() {
          return new FieldNode(types_github.Int, null, false)
        },
        get participants() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get permalink() {
          return new FieldNode(types_github.URI, null, false)
        },
        get potentialMergeCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get projectCards() {
          return new FieldNode(
            types_github.ProjectCardConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get archivedStates() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectCardArchivedState, true),
                  true
                )
              },
            }),
            false
          )
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get revertResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get revertUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get reviewRequests() {
          return new FieldNode(
            types_github.ReviewRequestConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get reviewThreads() {
          return new FieldNode(
            types_github.PullRequestReviewThreadConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get reviews() {
          return new FieldNode(
            types_github.PullRequestReviewConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.PullRequestReviewState, true),
                  true
                )
              },
              get author() {
                return new ArgumentsField(types_github.String, true)
              },
            }),
            true
          )
        },
        get state() {
          return new FieldNode(types_github.PullRequestState, null, false)
        },
        get suggestedReviewers() {
          return new FieldNode(
            new ArrayNode(types_github.SuggestedReviewer, false),
            null,
            false
          )
        },
        get timeline() {
          return new FieldNode(
            types_github.PullRequestTimelineConnection,
            new Arguments({
              get since() {
                return new ArgumentsField(types_github.DateTime, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanApplySuggestion() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerSubscription() {
          return new FieldNode(types_github.SubscriptionState, null, true)
        },
      },
      { name: 'PullRequest' }
    )
  },
  get Lockable() {
    return new InterfaceNode(
      {
        get activeLockReason() {
          return new FieldNode(types_github.LockReason, null, true)
        },
        get locked() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [types_github.Issue, types_github.PullRequest],
      { name: 'Lockable' }
    )
  },
  get LockReason() {
    return undefined
  },
  get App() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get logoBackgroundColor() {
          return new FieldNode(types_github.String, null, false)
        },
        get logoUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get slug() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'App' }
    )
  },
  get MarketplaceListing() {
    return new ObjectNode(
      {
        get app() {
          return new FieldNode(types_github.App, null, true)
        },
        get companyUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get configurationResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get configurationUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get documentationUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get extendedDescription() {
          return new FieldNode(types_github.String, null, true)
        },
        get extendedDescriptionHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get fullDescription() {
          return new FieldNode(types_github.String, null, false)
        },
        get fullDescriptionHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get hasApprovalBeenRequested() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasPublishedFreeTrialPlans() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasTermsOfService() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get howItWorks() {
          return new FieldNode(types_github.String, null, true)
        },
        get howItWorksHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get installationUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get installedForViewer() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isApproved() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isDelisted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isDraft() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isPaid() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isPublic() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isRejected() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isUnverified() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isUnverifiedPending() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isVerificationPendingFromDraft() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isVerificationPendingFromUnverified() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isVerified() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get logoBackgroundColor() {
          return new FieldNode(types_github.String, null, false)
        },
        get logoUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get normalizedShortDescription() {
          return new FieldNode(types_github.String, null, false)
        },
        get pricingUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get primaryCategory() {
          return new FieldNode(types_github.MarketplaceCategory, null, false)
        },
        get privacyPolicyUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get screenshotUrls() {
          return new FieldNode(
            new ArrayNode(types_github.String, false),
            null,
            false
          )
        },
        get secondaryCategory() {
          return new FieldNode(types_github.MarketplaceCategory, null, true)
        },
        get shortDescription() {
          return new FieldNode(types_github.String, null, false)
        },
        get slug() {
          return new FieldNode(types_github.String, null, false)
        },
        get statusUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get supportEmail() {
          return new FieldNode(types_github.String, null, true)
        },
        get supportUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get termsOfServiceUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanAddPlans() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanApprove() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanDelist() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanEditCategories() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanEditPlans() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanRedraft() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanReject() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanRequestApproval() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerHasPurchased() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerHasPurchasedForAllOrganizations() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerIsListingAdmin() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'MarketplaceListing' }
    )
  },
  get Organization() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get email() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isVerified() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get location() {
          return new FieldNode(types_github.String, null, true)
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get memberStatuses() {
          return new FieldNode(
            types_github.UserStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.UserStatusOrder, true)
              },
            }),
            false
          )
        },
        get members() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get membersWithRole() {
          return new FieldNode(
            types_github.OrganizationMemberConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get newTeamResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get newTeamUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get organizationBillingEmail() {
          return new FieldNode(types_github.String, null, true)
        },
        get pendingMembers() {
          return new FieldNode(
            types_github.UserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pinnedRepositories() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get project() {
          return new FieldNode(
            types_github.Project,
            new Arguments({
              get number() {
                return new ArgumentsField(types_github.Int, false)
              },
            }),
            true
          )
        },
        get projects() {
          return new FieldNode(
            types_github.ProjectConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.ProjectOrder, true)
              },
              get search() {
                return new ArgumentsField(types_github.String, true)
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.ProjectState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get projectsResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get projectsUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get repositories() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get isFork() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(
            types_github.Repository,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get requiresTwoFactorAuthentication() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get samlIdentityProvider() {
          return new FieldNode(
            types_github.OrganizationIdentityProvider,
            null,
            true
          )
        },
        get team() {
          return new FieldNode(
            types_github.Team,
            new Arguments({
              get slug() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get teams() {
          return new FieldNode(
            types_github.TeamConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.TeamPrivacy, true)
              },
              get role() {
                return new ArgumentsField(types_github.TeamRole, true)
              },
              get query() {
                return new ArgumentsField(types_github.String, true)
              },
              get userLogins() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(types_github.TeamOrder, true)
              },
              get ldapMapped() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get rootTeamsOnly() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get teamsResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get teamsUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanAdminister() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanCreateProjects() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanCreateRepositories() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanCreateTeams() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerIsAMember() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get websiteUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
      },
      { name: 'Organization' }
    )
  },
  get RegistryPackageSearch() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      [types_github.Organization, types_github.User],
      { name: 'RegistryPackageSearch' }
    )
  },
  get RepositoryOwner() {
    return new InterfaceNode(
      {
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get pinnedRepositories() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repositories() {
          return new FieldNode(
            types_github.RepositoryConnection,
            new Arguments({
              get privacy() {
                return new ArgumentsField(types_github.RepositoryPrivacy, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.RepositoryOrder, true)
              },
              get affiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get ownerAffiliations() {
                return new ArgumentsField(
                  new ArrayNode(types_github.RepositoryAffiliation, true),
                  true
                )
              },
              get isLocked() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get isFork() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(
            types_github.Repository,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      [types_github.Organization, types_github.User],
      { name: 'RepositoryOwner' }
    )
  },
  get RepositoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.RepositoryEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Repository, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get totalDiskUsage() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'RepositoryConnection' }
    )
  },
  get RepositoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Repository, null, true)
        },
      },
      { name: 'RepositoryEdge' }
    )
  },
  get RepositoryPrivacy() {
    return undefined
  },
  get RepositoryOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.RepositoryOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'RepositoryOrder' }
    )
  },
  get RepositoryOrderField() {
    return undefined
  },
  get RepositoryAffiliation() {
    return undefined
  },
  get Float() {
    return new NumberNode({ name: 'Float' })
  },
  get MemberStatusable() {
    return new InterfaceNode(
      {
        get memberStatuses() {
          return new FieldNode(
            types_github.UserStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.UserStatusOrder, true)
              },
            }),
            false
          )
        },
      },
      [types_github.Organization, types_github.Team],
      { name: 'MemberStatusable' }
    )
  },
  get UserStatusConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.UserStatusEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.UserStatus, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'UserStatusConnection' }
    )
  },
  get UserStatusEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.UserStatus, null, true)
        },
      },
      { name: 'UserStatusEdge' }
    )
  },
  get UserStatus() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get emoji() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get indicatesLimitedAvailability() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get message() {
          return new FieldNode(types_github.String, null, true)
        },
        get organization() {
          return new FieldNode(types_github.Organization, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'UserStatus' }
    )
  },
  get UserStatusOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.UserStatusOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'UserStatusOrder' }
    )
  },
  get UserStatusOrderField() {
    return undefined
  },
  get Gist() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            types_github.GistCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get files() {
          return new FieldNode(
            new ArrayNode(types_github.GistFile, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isFork() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isPublic() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get owner() {
          return new FieldNode(types_github.RepositoryOwner, null, true)
        },
        get pushedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get stargazers() {
          return new FieldNode(
            types_github.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.StarOrder, true)
              },
            }),
            false
          )
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get viewerHasStarred() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'Gist' }
    )
  },
  get Starrable() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get stargazers() {
          return new FieldNode(
            types_github.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.StarOrder, true)
              },
            }),
            false
          )
        },
        get viewerHasStarred() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [types_github.Gist, types_github.Repository, types_github.Topic],
      { name: 'Starrable' }
    )
  },
  get StargazerConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.StargazerEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'StargazerConnection' }
    )
  },
  get StargazerEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.User, null, false)
        },
        get starredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'StargazerEdge' }
    )
  },
  get StarOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.StarOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'StarOrder' }
    )
  },
  get StarOrderField() {
    return undefined
  },
  get GistCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.GistCommentEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.GistComment, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'GistCommentConnection' }
    )
  },
  get GistCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.GistComment, null, true)
        },
      },
      { name: 'GistCommentEdge' }
    )
  },
  get GistComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get gist() {
          return new FieldNode(types_github.Gist, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isMinimized() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get minimizedReason() {
          return new FieldNode(types_github.String, null, true)
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'GistComment' }
    )
  },
  get Deletable() {
    return new InterfaceNode(
      {
        get viewerCanDelete() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [
        types_github.CommitComment,
        types_github.GistComment,
        types_github.IssueComment,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
      ],
      { name: 'Deletable' }
    )
  },
  get GistFile() {
    return new ObjectNode(
      {
        get encodedName() {
          return new FieldNode(types_github.String, null, true)
        },
        get encoding() {
          return new FieldNode(types_github.String, null, true)
        },
        get extension() {
          return new FieldNode(types_github.String, null, true)
        },
        get isImage() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isTruncated() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get language() {
          return new FieldNode(types_github.Language, null, true)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get size() {
          return new FieldNode(types_github.Int, null, true)
        },
        get text() {
          return new FieldNode(
            types_github.String,
            new Arguments({
              get truncate() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
      },
      { name: 'GistFile' }
    )
  },
  get Language() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'Language' }
    )
  },
  get ProjectConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Project, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ProjectConnection' }
    )
  },
  get ProjectEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Project, null, true)
        },
      },
      { name: 'ProjectEdge' }
    )
  },
  get ProjectOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.ProjectOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'ProjectOrder' }
    )
  },
  get ProjectOrderField() {
    return undefined
  },
  get X509Certificate() {
    return new ScalarNode({ name: 'X509Certificate' })
  },
  get OrganizationIdentityProvider() {
    return new ObjectNode(
      {
        get digestMethod() {
          return new FieldNode(types_github.URI, null, true)
        },
        get externalIdentities() {
          return new FieldNode(
            types_github.ExternalIdentityConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get idpCertificate() {
          return new FieldNode(types_github.X509Certificate, null, true)
        },
        get issuer() {
          return new FieldNode(types_github.String, null, true)
        },
        get organization() {
          return new FieldNode(types_github.Organization, null, true)
        },
        get signatureMethod() {
          return new FieldNode(types_github.URI, null, true)
        },
        get ssoUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
      },
      { name: 'OrganizationIdentityProvider' }
    )
  },
  get ExternalIdentityConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ExternalIdentityEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ExternalIdentity, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ExternalIdentityConnection' }
    )
  },
  get ExternalIdentityEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.ExternalIdentity, null, true)
        },
      },
      { name: 'ExternalIdentityEdge' }
    )
  },
  get ExternalIdentity() {
    return new ObjectNode(
      {
        get guid() {
          return new FieldNode(types_github.String, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get organizationInvitation() {
          return new FieldNode(types_github.OrganizationInvitation, null, true)
        },
        get samlIdentity() {
          return new FieldNode(
            types_github.ExternalIdentitySamlAttributes,
            null,
            true
          )
        },
        get scimIdentity() {
          return new FieldNode(
            types_github.ExternalIdentityScimAttributes,
            null,
            true
          )
        },
        get user() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'ExternalIdentity' }
    )
  },
  get ExternalIdentitySamlAttributes() {
    return new ObjectNode(
      {
        get nameId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ExternalIdentitySamlAttributes' }
    )
  },
  get ExternalIdentityScimAttributes() {
    return new ObjectNode(
      {
        get username() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ExternalIdentityScimAttributes' }
    )
  },
  get OrganizationInvitation() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get email() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get invitationType() {
          return new FieldNode(
            types_github.OrganizationInvitationType,
            null,
            false
          )
        },
        get invitee() {
          return new FieldNode(types_github.User, null, true)
        },
        get inviter() {
          return new FieldNode(types_github.User, null, false)
        },
        get organization() {
          return new FieldNode(types_github.Organization, null, false)
        },
        get role() {
          return new FieldNode(
            types_github.OrganizationInvitationRole,
            null,
            false
          )
        },
      },
      { name: 'OrganizationInvitation' }
    )
  },
  get OrganizationInvitationType() {
    return undefined
  },
  get OrganizationInvitationRole() {
    return undefined
  },
  get TeamConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.TeamEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Team, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'TeamConnection' }
    )
  },
  get TeamEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Team, null, true)
        },
      },
      { name: 'TeamEdge' }
    )
  },
  get Team() {
    return new ObjectNode(
      {
        get ancestors() {
          return new FieldNode(
            types_github.TeamConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get childTeams() {
          return new FieldNode(
            types_github.TeamConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.TeamOrder, true)
              },
              get userLogins() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get immediateOnly() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get combinedSlug() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get editTeamResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get editTeamUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get invitations() {
          return new FieldNode(
            types_github.OrganizationInvitationConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get memberStatuses() {
          return new FieldNode(
            types_github.UserStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.UserStatusOrder, true)
              },
            }),
            false
          )
        },
        get members() {
          return new FieldNode(
            types_github.TeamMemberConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get query() {
                return new ArgumentsField(types_github.String, true)
              },
              get membership() {
                return new ArgumentsField(types_github.TeamMembershipType, true)
              },
              get role() {
                return new ArgumentsField(types_github.TeamMemberRole, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.TeamMemberOrder, true)
              },
            }),
            false
          )
        },
        get membersResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get membersUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get newTeamResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get newTeamUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get organization() {
          return new FieldNode(types_github.Organization, null, false)
        },
        get parentTeam() {
          return new FieldNode(types_github.Team, null, true)
        },
        get privacy() {
          return new FieldNode(types_github.TeamPrivacy, null, false)
        },
        get repositories() {
          return new FieldNode(
            types_github.TeamRepositoryConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get query() {
                return new ArgumentsField(types_github.String, true)
              },
              get orderBy() {
                return new ArgumentsField(
                  types_github.TeamRepositoryOrder,
                  true
                )
              },
            }),
            false
          )
        },
        get repositoriesResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get repositoriesUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get slug() {
          return new FieldNode(types_github.String, null, false)
        },
        get teamsResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get teamsUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanAdminister() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerSubscription() {
          return new FieldNode(types_github.SubscriptionState, null, true)
        },
      },
      { name: 'Team' }
    )
  },
  get Subscribable() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerSubscription() {
          return new FieldNode(types_github.SubscriptionState, null, true)
        },
      },
      [
        types_github.Commit,
        types_github.Issue,
        types_github.PullRequest,
        types_github.Repository,
        types_github.Team,
      ],
      { name: 'Subscribable' }
    )
  },
  get SubscriptionState() {
    return undefined
  },
  get TeamPrivacy() {
    return undefined
  },
  get TeamMemberConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.TeamMemberEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'TeamMemberConnection' }
    )
  },
  get TeamMemberEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get memberAccessResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get memberAccessUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get node() {
          return new FieldNode(types_github.User, null, false)
        },
        get role() {
          return new FieldNode(types_github.TeamMemberRole, null, false)
        },
      },
      { name: 'TeamMemberEdge' }
    )
  },
  get TeamMemberRole() {
    return undefined
  },
  get TeamMembershipType() {
    return undefined
  },
  get TeamMemberOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.TeamMemberOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'TeamMemberOrder' }
    )
  },
  get TeamMemberOrderField() {
    return undefined
  },
  get TeamRepositoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.TeamRepositoryEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Repository, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'TeamRepositoryConnection' }
    )
  },
  get TeamRepositoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get permission() {
          return new FieldNode(types_github.RepositoryPermission, null, false)
        },
      },
      { name: 'TeamRepositoryEdge' }
    )
  },
  get RepositoryPermission() {
    return undefined
  },
  get TeamRepositoryOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(
            types_github.TeamRepositoryOrderField,
            null,
            false
          )
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'TeamRepositoryOrder' }
    )
  },
  get TeamRepositoryOrderField() {
    return undefined
  },
  get OrganizationInvitationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.OrganizationInvitationEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.OrganizationInvitation, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'OrganizationInvitationConnection' }
    )
  },
  get OrganizationInvitationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.OrganizationInvitation, null, true)
        },
      },
      { name: 'OrganizationInvitationEdge' }
    )
  },
  get TeamOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.TeamOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'TeamOrder' }
    )
  },
  get TeamOrderField() {
    return undefined
  },
  get Reactable() {
    return new InterfaceNode(
      {
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [
        types_github.CommitComment,
        types_github.Issue,
        types_github.IssueComment,
        types_github.PullRequest,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
      ],
      { name: 'Reactable' }
    )
  },
  get ReactionGroup() {
    return new ObjectNode(
      {
        get content() {
          return new FieldNode(types_github.ReactionContent, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get subject() {
          return new FieldNode(types_github.Reactable, null, false)
        },
        get users() {
          return new FieldNode(
            types_github.ReactingUserConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get viewerHasReacted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'ReactionGroup' }
    )
  },
  get ReactionContent() {
    return undefined
  },
  get ReactingUserConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ReactingUserEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ReactingUserConnection' }
    )
  },
  get ReactingUserEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.User, null, false)
        },
        get reactedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'ReactingUserEdge' }
    )
  },
  get ReactionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Reaction, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get viewerHasReacted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'ReactionConnection' }
    )
  },
  get ReactionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Reaction, null, true)
        },
      },
      { name: 'ReactionEdge' }
    )
  },
  get Reaction() {
    return new ObjectNode(
      {
        get content() {
          return new FieldNode(types_github.ReactionContent, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get reactable() {
          return new FieldNode(types_github.Reactable, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'Reaction' }
    )
  },
  get ReactionOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.ReactionOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'ReactionOrder' }
    )
  },
  get ReactionOrderField() {
    return undefined
  },
  get PublicKey() {
    return new ObjectNode(
      {
        get accessedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get fingerprint() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isReadOnly() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get key() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'PublicKey' }
    )
  },
  get DefaultRepositoryPermissionField() {
    return undefined
  },
  get Date() {
    return new ScalarNode({ name: 'Date' })
  },
  get OrganizationMemberConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.OrganizationMemberEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'OrganizationMemberConnection' }
    )
  },
  get OrganizationMemberEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get hasTwoFactorEnabled() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get node() {
          return new FieldNode(types_github.User, null, true)
        },
        get role() {
          return new FieldNode(types_github.OrganizationMemberRole, null, true)
        },
      },
      { name: 'OrganizationMemberEdge' }
    )
  },
  get OrganizationMemberRole() {
    return undefined
  },
  get TeamRole() {
    return undefined
  },
  get GistConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.GistEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Gist, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'GistConnection' }
    )
  },
  get GistEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Gist, null, true)
        },
      },
      { name: 'GistEdge' }
    )
  },
  get GistPrivacy() {
    return undefined
  },
  get GistOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.GistOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'GistOrder' }
    )
  },
  get GistOrderField() {
    return undefined
  },
  get RepositoryInvitationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.RepositoryInvitation, null, true)
        },
      },
      { name: 'RepositoryInvitationEdge' }
    )
  },
  get RepositoryInvitation() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get invitee() {
          return new FieldNode(types_github.User, null, false)
        },
        get inviter() {
          return new FieldNode(types_github.User, null, false)
        },
        get permission() {
          return new FieldNode(types_github.RepositoryPermission, null, false)
        },
        get repository() {
          return new FieldNode(types_github.RepositoryInfo, null, true)
        },
      },
      { name: 'RepositoryInvitation' }
    )
  },
  get RepositoryInfo() {
    return new InterfaceNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get descriptionHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get forkCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get hasIssuesEnabled() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasWikiEnabled() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get homepageUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get isArchived() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isFork() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isLocked() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isMirror() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isPrivate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get licenseInfo() {
          return new FieldNode(types_github.License, null, true)
        },
        get lockReason() {
          return new FieldNode(types_github.RepositoryLockReason, null, true)
        },
        get mirrorUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get nameWithOwner() {
          return new FieldNode(types_github.String, null, false)
        },
        get owner() {
          return new FieldNode(types_github.RepositoryOwner, null, false)
        },
        get pushedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get shortDescriptionHTML() {
          return new FieldNode(
            types_github.HTML,
            new Arguments({
              get limit() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      [types_github.Repository],
      { name: 'RepositoryInfo' }
    )
  },
  get RepositoryLockReason() {
    return undefined
  },
  get License() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get conditions() {
          return new FieldNode(
            new ArrayNode(types_github.LicenseRule, false),
            null,
            false
          )
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get featured() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hidden() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get implementation() {
          return new FieldNode(types_github.String, null, true)
        },
        get key() {
          return new FieldNode(types_github.String, null, false)
        },
        get limitations() {
          return new FieldNode(
            new ArrayNode(types_github.LicenseRule, false),
            null,
            false
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get nickname() {
          return new FieldNode(types_github.String, null, true)
        },
        get permissions() {
          return new FieldNode(
            new ArrayNode(types_github.LicenseRule, false),
            null,
            false
          )
        },
        get pseudoLicense() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get spdxId() {
          return new FieldNode(types_github.String, null, true)
        },
        get url() {
          return new FieldNode(types_github.URI, null, true)
        },
      },
      { name: 'License' }
    )
  },
  get LicenseRule() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(types_github.String, null, false)
        },
        get key() {
          return new FieldNode(types_github.String, null, false)
        },
        get label() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'LicenseRule' }
    )
  },
  get OrganizationConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.OrganizationEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Organization, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'OrganizationConnection' }
    )
  },
  get OrganizationEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Organization, null, true)
        },
      },
      { name: 'OrganizationEdge' }
    )
  },
  get IdentityProviderConfigurationState() {
    return undefined
  },
  get Bot() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'Bot' }
    )
  },
  get MarketplaceCategory() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get howItWorks() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get primaryListingCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get secondaryListingCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get slug() {
          return new FieldNode(types_github.String, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'MarketplaceCategory' }
    )
  },
  get MarketplaceListingConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.MarketplaceListingEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.MarketplaceListing, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'MarketplaceListingConnection' }
    )
  },
  get MarketplaceListingEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.MarketplaceListing, null, true)
        },
      },
      { name: 'MarketplaceListingEdge' }
    )
  },
  get ReleaseConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ReleaseEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Release, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ReleaseConnection' }
    )
  },
  get ReleaseEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Release, null, true)
        },
      },
      { name: 'ReleaseEdge' }
    )
  },
  get Release() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(types_github.User, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isDraft() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isPrerelease() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get releaseAssets() {
          return new FieldNode(
            types_github.ReleaseAssetConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get name() {
                return new ArgumentsField(types_github.String, true)
              },
            }),
            false
          )
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get tag() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get tagName() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'Release' }
    )
  },
  get Ref() {
    return new ObjectNode(
      {
        get associatedPullRequests() {
          return new FieldNode(
            types_github.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get prefix() {
          return new FieldNode(types_github.String, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get target() {
          return new FieldNode(types_github.GitObject, null, false)
        },
      },
      { name: 'Ref' }
    )
  },
  get GitObject() {
    return new InterfaceNode(
      {
        get abbreviatedOid() {
          return new FieldNode(types_github.String, null, false)
        },
        get commitResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get commitUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get oid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      [
        types_github.Blob,
        types_github.Commit,
        types_github.Tag,
        types_github.Tree,
      ],
      { name: 'GitObject' }
    )
  },
  get GitObjectID() {
    return new ScalarNode({ name: 'GitObjectID' })
  },
  get RepositoryNode() {
    return new InterfaceNode(
      {
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      [
        types_github.CommitComment,
        types_github.CommitCommentThread,
        types_github.Issue,
        types_github.IssueComment,
        types_github.PullRequest,
        types_github.PullRequestReview,
        types_github.PullRequestReviewComment,
      ],
      { name: 'RepositoryNode' }
    )
  },
  get Blob() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(types_github.String, null, false)
        },
        get byteSize() {
          return new FieldNode(types_github.Int, null, false)
        },
        get commitResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get commitUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isBinary() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isTruncated() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get oid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get text() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'Blob' }
    )
  },
  get Commit() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(types_github.String, null, false)
        },
        get additions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get associatedPullRequests() {
          return new FieldNode(
            types_github.PullRequestConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.PullRequestOrder, true)
              },
            }),
            true
          )
        },
        get author() {
          return new FieldNode(types_github.GitActor, null, true)
        },
        get authoredByCommitter() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get authoredDate() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get blame() {
          return new FieldNode(
            types_github.Blame,
            new Arguments({
              get path() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            false
          )
        },
        get changedFiles() {
          return new FieldNode(types_github.Int, null, false)
        },
        get comments() {
          return new FieldNode(
            types_github.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get commitResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get commitUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get committedDate() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get committedViaWeb() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get committer() {
          return new FieldNode(types_github.GitActor, null, true)
        },
        get deletions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get deployments() {
          return new FieldNode(
            types_github.DeploymentConnection,
            new Arguments({
              get environments() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get orderBy() {
                return new ArgumentsField(types_github.DeploymentOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get history() {
          return new FieldNode(
            types_github.CommitHistoryConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get path() {
                return new ArgumentsField(types_github.String, true)
              },
              get author() {
                return new ArgumentsField(types_github.CommitAuthor, true)
              },
              get since() {
                return new ArgumentsField(types_github.GitTimestamp, true)
              },
              get until() {
                return new ArgumentsField(types_github.GitTimestamp, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get message() {
          return new FieldNode(types_github.String, null, false)
        },
        get messageBody() {
          return new FieldNode(types_github.String, null, false)
        },
        get messageBodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get messageHeadline() {
          return new FieldNode(types_github.String, null, false)
        },
        get messageHeadlineHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get oid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get parents() {
          return new FieldNode(
            types_github.CommitConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pushedDate() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get signature() {
          return new FieldNode(types_github.GitSignature, null, true)
        },
        get status() {
          return new FieldNode(types_github.Status, null, true)
        },
        get tarballUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get tree() {
          return new FieldNode(types_github.Tree, null, false)
        },
        get treeResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get treeUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get viewerCanSubscribe() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerSubscription() {
          return new FieldNode(types_github.SubscriptionState, null, true)
        },
        get zipballUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'Commit' }
    )
  },
  get Tree() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(types_github.String, null, false)
        },
        get commitResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get commitUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get entries() {
          return new FieldNode(
            new ArrayNode(types_github.TreeEntry, true),
            null,
            true
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get oid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      { name: 'Tree' }
    )
  },
  get TreeEntry() {
    return new ObjectNode(
      {
        get mode() {
          return new FieldNode(types_github.Int, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get object() {
          return new FieldNode(types_github.GitObject, null, true)
        },
        get oid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get type() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'TreeEntry' }
    )
  },
  get GitActor() {
    return new ObjectNode(
      {
        get avatarUrl() {
          return new FieldNode(
            types_github.URI,
            new Arguments({
              get size() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get date() {
          return new FieldNode(types_github.GitTimestamp, null, true)
        },
        get email() {
          return new FieldNode(types_github.String, null, true)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get user() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'GitActor' }
    )
  },
  get GitTimestamp() {
    return new ScalarNode({ name: 'GitTimestamp' })
  },
  get CommitConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.CommitEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Commit, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CommitConnection' }
    )
  },
  get CommitEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Commit, null, true)
        },
      },
      { name: 'CommitEdge' }
    )
  },
  get CommitHistoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.CommitEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Commit, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CommitHistoryConnection' }
    )
  },
  get CommitAuthor() {
    return new InputNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, true)
        },
        get emails() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
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
            new ArrayNode(types_github.CommitCommentEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.CommitComment, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CommitCommentConnection' }
    )
  },
  get CommitCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.CommitComment, null, true)
        },
      },
      { name: 'CommitCommentEdge' }
    )
  },
  get CommitComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isMinimized() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get minimizedReason() {
          return new FieldNode(types_github.String, null, true)
        },
        get path() {
          return new FieldNode(types_github.String, null, true)
        },
        get position() {
          return new FieldNode(types_github.Int, null, true)
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'CommitComment' }
    )
  },
  get RepositoryTopicConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.RepositoryTopicEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.RepositoryTopic, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'RepositoryTopicConnection' }
    )
  },
  get RepositoryTopicEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.RepositoryTopic, null, true)
        },
      },
      { name: 'RepositoryTopicEdge' }
    )
  },
  get RepositoryTopic() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get topic() {
          return new FieldNode(types_github.Topic, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'RepositoryTopic' }
    )
  },
  get Topic() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get relatedTopics() {
          return new FieldNode(
            new ArrayNode(types_github.Topic, false),
            new Arguments({
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get stargazers() {
          return new FieldNode(
            types_github.StargazerConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.StarOrder, true)
              },
            }),
            false
          )
        },
        get viewerHasStarred() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'Topic' }
    )
  },
  get GitSignature() {
    return new InterfaceNode(
      {
        get email() {
          return new FieldNode(types_github.String, null, false)
        },
        get isValid() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get payload() {
          return new FieldNode(types_github.String, null, false)
        },
        get signature() {
          return new FieldNode(types_github.String, null, false)
        },
        get signer() {
          return new FieldNode(types_github.User, null, true)
        },
        get state() {
          return new FieldNode(types_github.GitSignatureState, null, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      [
        types_github.GpgSignature,
        types_github.SmimeSignature,
        types_github.UnknownSignature,
      ],
      { name: 'GitSignature' }
    )
  },
  get GitSignatureState() {
    return undefined
  },
  get Status() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get context() {
          return new FieldNode(
            types_github.StatusContext,
            new Arguments({
              get name() {
                return new ArgumentsField(types_github.String, false)
              },
            }),
            true
          )
        },
        get contexts() {
          return new FieldNode(
            new ArrayNode(types_github.StatusContext, false),
            null,
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get state() {
          return new FieldNode(types_github.StatusState, null, false)
        },
      },
      { name: 'Status' }
    )
  },
  get StatusState() {
    return undefined
  },
  get StatusContext() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get context() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get state() {
          return new FieldNode(types_github.StatusState, null, false)
        },
        get targetUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
      },
      { name: 'StatusContext' }
    )
  },
  get PullRequestState() {
    return undefined
  },
  get Blame() {
    return new ObjectNode(
      {
        get ranges() {
          return new FieldNode(
            new ArrayNode(types_github.BlameRange, false),
            null,
            false
          )
        },
      },
      { name: 'Blame' }
    )
  },
  get BlameRange() {
    return new ObjectNode(
      {
        get age() {
          return new FieldNode(types_github.Int, null, false)
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, false)
        },
        get endingLine() {
          return new FieldNode(types_github.Int, null, false)
        },
        get startingLine() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'BlameRange' }
    )
  },
  get DeploymentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.DeploymentEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Deployment, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'DeploymentConnection' }
    )
  },
  get DeploymentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Deployment, null, true)
        },
      },
      { name: 'DeploymentEdge' }
    )
  },
  get Deployment() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get commitOid() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get environment() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get latestStatus() {
          return new FieldNode(types_github.DeploymentStatus, null, true)
        },
        get payload() {
          return new FieldNode(types_github.String, null, true)
        },
        get ref() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get state() {
          return new FieldNode(types_github.DeploymentState, null, true)
        },
        get statuses() {
          return new FieldNode(
            types_github.DeploymentStatusConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get task() {
          return new FieldNode(types_github.String, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'Deployment' }
    )
  },
  get DeploymentStatusConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.DeploymentStatusEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.DeploymentStatus, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'DeploymentStatusConnection' }
    )
  },
  get DeploymentStatusEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.DeploymentStatus, null, true)
        },
      },
      { name: 'DeploymentStatusEdge' }
    )
  },
  get DeploymentStatus() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get deployment() {
          return new FieldNode(types_github.Deployment, null, false)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get environmentUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get logUrl() {
          return new FieldNode(types_github.URI, null, true)
        },
        get state() {
          return new FieldNode(types_github.DeploymentStatusState, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'DeploymentStatus' }
    )
  },
  get DeploymentStatusState() {
    return undefined
  },
  get DeploymentState() {
    return undefined
  },
  get DeploymentOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.DeploymentOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'DeploymentOrder' }
    )
  },
  get DeploymentOrderField() {
    return undefined
  },
  get PullRequestOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.PullRequestOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'PullRequestOrder' }
    )
  },
  get PullRequestOrderField() {
    return undefined
  },
  get ReleaseAssetConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ReleaseAssetEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ReleaseAsset, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ReleaseAssetConnection' }
    )
  },
  get ReleaseAssetEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.ReleaseAsset, null, true)
        },
      },
      { name: 'ReleaseAssetEdge' }
    )
  },
  get ReleaseAsset() {
    return new ObjectNode(
      {
        get contentType() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get downloadCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get downloadUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get release() {
          return new FieldNode(types_github.Release, null, true)
        },
        get size() {
          return new FieldNode(types_github.Int, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get uploadedBy() {
          return new FieldNode(types_github.User, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'ReleaseAsset' }
    )
  },
  get ReleaseOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.ReleaseOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'ReleaseOrder' }
    )
  },
  get ReleaseOrderField() {
    return undefined
  },
  get LanguageConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.LanguageEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Language, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get totalSize() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'LanguageConnection' }
    )
  },
  get LanguageEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Language, null, false)
        },
        get size() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'LanguageEdge' }
    )
  },
  get Milestone() {
    return new ObjectNode(
      {
        get closed() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get closedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get dueOn() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get issues() {
          return new FieldNode(
            types_github.IssueConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.IssueState, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get number() {
          return new FieldNode(types_github.Int, null, false)
        },
        get pullRequests() {
          return new FieldNode(
            types_github.PullRequestConnection,
            new Arguments({
              get states() {
                return new ArgumentsField(
                  new ArrayNode(types_github.PullRequestState, true),
                  true
                )
              },
              get labels() {
                return new ArgumentsField(
                  new ArrayNode(types_github.String, true),
                  true
                )
              },
              get headRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get baseRefName() {
                return new ArgumentsField(types_github.String, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.IssueOrder, true)
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get state() {
          return new FieldNode(types_github.MilestoneState, null, false)
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'Milestone' }
    )
  },
  get MilestoneState() {
    return undefined
  },
  get PullRequestChangedFileConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestChangedFileEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestChangedFile, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestChangedFileConnection' }
    )
  },
  get PullRequestChangedFileEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PullRequestChangedFile, null, true)
        },
      },
      { name: 'PullRequestChangedFileEdge' }
    )
  },
  get PullRequestChangedFile() {
    return new ObjectNode(
      {
        get additions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get deletions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get path() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'PullRequestChangedFile' }
    )
  },
  get MergeableState() {
    return undefined
  },
  get IssueComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isMinimized() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get issue() {
          return new FieldNode(types_github.Issue, null, false)
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get minimizedReason() {
          return new FieldNode(types_github.String, null, true)
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'IssueComment' }
    )
  },
  get IssuePubSubTopic() {
    return undefined
  },
  get PullRequestReviewComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get diffHunk() {
          return new FieldNode(types_github.String, null, false)
        },
        get draftedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isMinimized() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get minimizedReason() {
          return new FieldNode(types_github.String, null, true)
        },
        get originalCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get originalPosition() {
          return new FieldNode(types_github.Int, null, false)
        },
        get outdated() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get path() {
          return new FieldNode(types_github.String, null, false)
        },
        get position() {
          return new FieldNode(types_github.Int, null, true)
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get replyTo() {
          return new FieldNode(
            types_github.PullRequestReviewComment,
            null,
            true
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get state() {
          return new FieldNode(
            types_github.PullRequestReviewCommentState,
            null,
            false
          )
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanMinimize() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'PullRequestReviewComment' }
    )
  },
  get PullRequestReview() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get authorAssociation() {
          return new FieldNode(
            types_github.CommentAuthorAssociation,
            null,
            false
          )
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get bodyHTML() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get bodyText() {
          return new FieldNode(types_github.String, null, false)
        },
        get comments() {
          return new FieldNode(
            types_github.PullRequestReviewCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get createdViaEmail() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get editor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get includesCreatedEdit() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get lastEditedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get onBehalfOf() {
          return new FieldNode(
            types_github.TeamConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get reactionGroups() {
          return new FieldNode(
            new ArrayNode(types_github.ReactionGroup, true),
            null,
            true
          )
        },
        get reactions() {
          return new FieldNode(
            types_github.ReactionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get content() {
                return new ArgumentsField(types_github.ReactionContent, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ReactionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get state() {
          return new FieldNode(types_github.PullRequestReviewState, null, false)
        },
        get submittedAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get userContentEdits() {
          return new FieldNode(
            types_github.UserContentEditConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            true
          )
        },
        get viewerCanDelete() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanReact() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUpdate() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCannotUpdateReasons() {
          return new FieldNode(
            new ArrayNode(types_github.CommentCannotUpdateReason, false),
            null,
            false
          )
        },
        get viewerDidAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'PullRequestReview' }
    )
  },
  get PullRequestReviewState() {
    return undefined
  },
  get PullRequestReviewCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestReviewCommentEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestReviewComment, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestReviewCommentConnection' }
    )
  },
  get PullRequestReviewCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.PullRequestReviewComment,
            null,
            true
          )
        },
      },
      { name: 'PullRequestReviewCommentEdge' }
    )
  },
  get PullRequestReviewThread() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            types_github.PullRequestReviewCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isResolved() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resolvedBy() {
          return new FieldNode(types_github.User, null, true)
        },
        get viewerCanResolve() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get viewerCanUnresolve() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'PullRequestReviewThread' }
    )
  },
  get PullRequestCommit() {
    return new ObjectNode(
      {
        get commit() {
          return new FieldNode(types_github.Commit, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'PullRequestCommit' }
    )
  },
  get PullRequestReviewThreadConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestReviewThreadEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestReviewThread, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestReviewThreadConnection' }
    )
  },
  get PullRequestReviewThreadEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PullRequestReviewThread, null, true)
        },
      },
      { name: 'PullRequestReviewThreadEdge' }
    )
  },
  get PullRequestReviewCommentState() {
    return undefined
  },
  get PullRequestPubSubTopic() {
    return undefined
  },
  get IssueCommentConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.IssueCommentEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.IssueComment, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'IssueCommentConnection' }
    )
  },
  get IssueCommentEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.IssueComment, null, true)
        },
      },
      { name: 'IssueCommentEdge' }
    )
  },
  get PullRequestReviewConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestReviewEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestReview, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestReviewConnection' }
    )
  },
  get PullRequestReviewEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
      },
      { name: 'PullRequestReviewEdge' }
    )
  },
  get PullRequestCommitConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestCommitEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestCommit, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestCommitConnection' }
    )
  },
  get PullRequestCommitEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PullRequestCommit, null, true)
        },
      },
      { name: 'PullRequestCommitEdge' }
    )
  },
  get ReviewRequestConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ReviewRequestEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ReviewRequest, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ReviewRequestConnection' }
    )
  },
  get ReviewRequestEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.ReviewRequest, null, true)
        },
      },
      { name: 'ReviewRequestEdge' }
    )
  },
  get ReviewRequest() {
    return new ObjectNode(
      {
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get requestedReviewer() {
          return new FieldNode(types_github.RequestedReviewer, null, true)
        },
      },
      { name: 'ReviewRequest' }
    )
  },
  get RequestedReviewer() {
    return new UnionNode([types_github.User, types_github.Team])
  },
  get PullRequestTimelineConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestTimelineItemEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PullRequestTimelineItem, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PullRequestTimelineConnection' }
    )
  },
  get PullRequestTimelineItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PullRequestTimelineItem, null, true)
        },
      },
      { name: 'PullRequestTimelineItemEdge' }
    )
  },
  get PullRequestTimelineItem() {
    return new UnionNode([
      types_github.Commit,
      types_github.CommitCommentThread,
      types_github.PullRequestReview,
      types_github.PullRequestReviewThread,
      types_github.PullRequestReviewComment,
      types_github.IssueComment,
      types_github.ClosedEvent,
      types_github.ReopenedEvent,
      types_github.SubscribedEvent,
      types_github.UnsubscribedEvent,
      types_github.MergedEvent,
      types_github.ReferencedEvent,
      types_github.CrossReferencedEvent,
      types_github.AssignedEvent,
      types_github.UnassignedEvent,
      types_github.LabeledEvent,
      types_github.UnlabeledEvent,
      types_github.MilestonedEvent,
      types_github.DemilestonedEvent,
      types_github.RenamedTitleEvent,
      types_github.LockedEvent,
      types_github.UnlockedEvent,
      types_github.DeployedEvent,
      types_github.DeploymentEnvironmentChangedEvent,
      types_github.HeadRefDeletedEvent,
      types_github.HeadRefRestoredEvent,
      types_github.HeadRefForcePushedEvent,
      types_github.BaseRefForcePushedEvent,
      types_github.ReviewRequestedEvent,
      types_github.ReviewRequestRemovedEvent,
      types_github.ReviewDismissedEvent,
    ])
  },
  get CommitCommentThread() {
    return new ObjectNode(
      {
        get comments() {
          return new FieldNode(
            types_github.CommitCommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get path() {
          return new FieldNode(types_github.String, null, true)
        },
        get position() {
          return new FieldNode(types_github.Int, null, true)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      { name: 'CommitCommentThread' }
    )
  },
  get ClosedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get closable() {
          return new FieldNode(types_github.Closable, null, false)
        },
        get closer() {
          return new FieldNode(types_github.Closer, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'ClosedEvent' }
    )
  },
  get Closer() {
    return new UnionNode([types_github.Commit, types_github.PullRequest])
  },
  get ReopenedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get closable() {
          return new FieldNode(types_github.Closable, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'ReopenedEvent' }
    )
  },
  get SubscribedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get subscribable() {
          return new FieldNode(types_github.Subscribable, null, false)
        },
      },
      { name: 'SubscribedEvent' }
    )
  },
  get UnsubscribedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get subscribable() {
          return new FieldNode(types_github.Subscribable, null, false)
        },
      },
      { name: 'UnsubscribedEvent' }
    )
  },
  get MergedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get mergeRef() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get mergeRefName() {
          return new FieldNode(types_github.String, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'MergedEvent' }
    )
  },
  get ReferencedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get commit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get commitRepository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isCrossRepository() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isDirectReference() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get subject() {
          return new FieldNode(types_github.ReferencedSubject, null, false)
        },
      },
      { name: 'ReferencedEvent' }
    )
  },
  get ReferencedSubject() {
    return new UnionNode([types_github.Issue, types_github.PullRequest])
  },
  get CrossReferencedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isCrossRepository() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get referencedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get source() {
          return new FieldNode(types_github.ReferencedSubject, null, false)
        },
        get target() {
          return new FieldNode(types_github.ReferencedSubject, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get willCloseTarget() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'CrossReferencedEvent' }
    )
  },
  get AssignedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get assignable() {
          return new FieldNode(types_github.Assignable, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'AssignedEvent' }
    )
  },
  get UnassignedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get assignable() {
          return new FieldNode(types_github.Assignable, null, false)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'UnassignedEvent' }
    )
  },
  get LabeledEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get label() {
          return new FieldNode(types_github.Label, null, false)
        },
        get labelable() {
          return new FieldNode(types_github.Labelable, null, false)
        },
      },
      { name: 'LabeledEvent' }
    )
  },
  get UnlabeledEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get label() {
          return new FieldNode(types_github.Label, null, false)
        },
        get labelable() {
          return new FieldNode(types_github.Labelable, null, false)
        },
      },
      { name: 'UnlabeledEvent' }
    )
  },
  get MilestonedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get milestoneTitle() {
          return new FieldNode(types_github.String, null, false)
        },
        get subject() {
          return new FieldNode(types_github.MilestoneItem, null, false)
        },
      },
      { name: 'MilestonedEvent' }
    )
  },
  get MilestoneItem() {
    return new UnionNode([types_github.Issue, types_github.PullRequest])
  },
  get DemilestonedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get milestoneTitle() {
          return new FieldNode(types_github.String, null, false)
        },
        get subject() {
          return new FieldNode(types_github.MilestoneItem, null, false)
        },
      },
      { name: 'DemilestonedEvent' }
    )
  },
  get RenamedTitleEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get currentTitle() {
          return new FieldNode(types_github.String, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get previousTitle() {
          return new FieldNode(types_github.String, null, false)
        },
        get subject() {
          return new FieldNode(types_github.RenamedTitleSubject, null, false)
        },
      },
      { name: 'RenamedTitleEvent' }
    )
  },
  get RenamedTitleSubject() {
    return new UnionNode([types_github.Issue, types_github.PullRequest])
  },
  get LockedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get lockReason() {
          return new FieldNode(types_github.LockReason, null, true)
        },
        get lockable() {
          return new FieldNode(types_github.Lockable, null, false)
        },
      },
      { name: 'LockedEvent' }
    )
  },
  get UnlockedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get lockable() {
          return new FieldNode(types_github.Lockable, null, false)
        },
      },
      { name: 'UnlockedEvent' }
    )
  },
  get DeployedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get deployment() {
          return new FieldNode(types_github.Deployment, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get ref() {
          return new FieldNode(types_github.Ref, null, true)
        },
      },
      { name: 'DeployedEvent' }
    )
  },
  get DeploymentEnvironmentChangedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get deploymentStatus() {
          return new FieldNode(types_github.DeploymentStatus, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
      },
      { name: 'DeploymentEnvironmentChangedEvent' }
    )
  },
  get HeadRefDeletedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get headRef() {
          return new FieldNode(types_github.Ref, null, true)
        },
        get headRefName() {
          return new FieldNode(types_github.String, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
      },
      { name: 'HeadRefDeletedEvent' }
    )
  },
  get HeadRefRestoredEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
      },
      { name: 'HeadRefRestoredEvent' }
    )
  },
  get HeadRefForcePushedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get afterCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get beforeCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get ref() {
          return new FieldNode(types_github.Ref, null, true)
        },
      },
      { name: 'HeadRefForcePushedEvent' }
    )
  },
  get BaseRefForcePushedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get afterCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get beforeCommit() {
          return new FieldNode(types_github.Commit, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get ref() {
          return new FieldNode(types_github.Ref, null, true)
        },
      },
      { name: 'BaseRefForcePushedEvent' }
    )
  },
  get ReviewRequestedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get requestedReviewer() {
          return new FieldNode(types_github.RequestedReviewer, null, true)
        },
      },
      { name: 'ReviewRequestedEvent' }
    )
  },
  get ReviewRequestRemovedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get requestedReviewer() {
          return new FieldNode(types_github.RequestedReviewer, null, true)
        },
      },
      { name: 'ReviewRequestRemovedEvent' }
    )
  },
  get ReviewDismissedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get dismissalMessage() {
          return new FieldNode(types_github.String, null, true)
        },
        get dismissalMessageHTML() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get message() {
          return new FieldNode(types_github.String, null, false)
        },
        get messageHtml() {
          return new FieldNode(types_github.HTML, null, false)
        },
        get previousReviewState() {
          return new FieldNode(types_github.PullRequestReviewState, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get pullRequestCommit() {
          return new FieldNode(types_github.PullRequestCommit, null, true)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get review() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'ReviewDismissedEvent' }
    )
  },
  get PullRequestTimelineItemsEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.PullRequestTimelineItems,
            null,
            true
          )
        },
      },
      { name: 'PullRequestTimelineItemsEdge' }
    )
  },
  get PullRequestTimelineItems() {
    return new UnionNode([
      types_github.PullRequestCommit,
      types_github.PullRequestReview,
      types_github.PullRequestReviewThread,
      types_github.BaseRefChangedEvent,
      types_github.BaseRefForcePushedEvent,
      types_github.DeployedEvent,
      types_github.DeploymentEnvironmentChangedEvent,
      types_github.HeadRefDeletedEvent,
      types_github.HeadRefForcePushedEvent,
      types_github.HeadRefRestoredEvent,
      types_github.MergedEvent,
      types_github.ReviewDismissedEvent,
      types_github.ReviewRequestedEvent,
      types_github.ReviewRequestRemovedEvent,
      types_github.IssueComment,
      types_github.CrossReferencedEvent,
      types_github.AddedToProjectEvent,
      types_github.AssignedEvent,
      types_github.ClosedEvent,
      types_github.CommentDeletedEvent,
      types_github.ConvertedNoteToIssueEvent,
      types_github.DemilestonedEvent,
      types_github.LabeledEvent,
      types_github.LockedEvent,
      types_github.MentionedEvent,
      types_github.MilestonedEvent,
      types_github.MovedColumnsInProjectEvent,
      types_github.PinnedEvent,
      types_github.ReferencedEvent,
      types_github.RemovedFromProjectEvent,
      types_github.RenamedTitleEvent,
      types_github.ReopenedEvent,
      types_github.SubscribedEvent,
      types_github.TransferredEvent,
      types_github.UnassignedEvent,
      types_github.UnlabeledEvent,
      types_github.UnlockedEvent,
      types_github.UnpinnedEvent,
      types_github.UnsubscribedEvent,
    ])
  },
  get BaseRefChangedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'BaseRefChangedEvent' }
    )
  },
  get AddedToProjectEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'AddedToProjectEvent' }
    )
  },
  get CommentDeletedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'CommentDeletedEvent' }
    )
  },
  get ConvertedNoteToIssueEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'ConvertedNoteToIssueEvent' }
    )
  },
  get IssueOrPullRequest() {
    return new UnionNode([types_github.Issue, types_github.PullRequest])
  },
  get MentionedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'MentionedEvent' }
    )
  },
  get MovedColumnsInProjectEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'MovedColumnsInProjectEvent' }
    )
  },
  get PinnedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get issue() {
          return new FieldNode(types_github.Issue, null, false)
        },
      },
      { name: 'PinnedEvent' }
    )
  },
  get RemovedFromProjectEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'RemovedFromProjectEvent' }
    )
  },
  get TransferredEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get fromRepository() {
          return new FieldNode(types_github.Repository, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get issue() {
          return new FieldNode(types_github.Issue, null, false)
        },
      },
      { name: 'TransferredEvent' }
    )
  },
  get UnpinnedEvent() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get issue() {
          return new FieldNode(types_github.Issue, null, false)
        },
      },
      { name: 'UnpinnedEvent' }
    )
  },
  get PullRequestTimelineItemsItemType() {
    return undefined
  },
  get SuggestedReviewer() {
    return new ObjectNode(
      {
        get isAuthor() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isCommenter() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get reviewer() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'SuggestedReviewer' }
    )
  },
  get ProjectCardArchivedState() {
    return undefined
  },
  get IssueTimelineConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.IssueTimelineItemEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.IssueTimelineItem, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'IssueTimelineConnection' }
    )
  },
  get IssueTimelineItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.IssueTimelineItem, null, true)
        },
      },
      { name: 'IssueTimelineItemEdge' }
    )
  },
  get IssueTimelineItem() {
    return new UnionNode([
      types_github.Commit,
      types_github.IssueComment,
      types_github.CrossReferencedEvent,
      types_github.ClosedEvent,
      types_github.ReopenedEvent,
      types_github.SubscribedEvent,
      types_github.UnsubscribedEvent,
      types_github.ReferencedEvent,
      types_github.AssignedEvent,
      types_github.UnassignedEvent,
      types_github.LabeledEvent,
      types_github.UnlabeledEvent,
      types_github.MilestonedEvent,
      types_github.DemilestonedEvent,
      types_github.RenamedTitleEvent,
      types_github.LockedEvent,
      types_github.UnlockedEvent,
      types_github.TransferredEvent,
    ])
  },
  get IssueTimelineItemsEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.IssueTimelineItems, null, true)
        },
      },
      { name: 'IssueTimelineItemsEdge' }
    )
  },
  get IssueTimelineItems() {
    return new UnionNode([
      types_github.IssueComment,
      types_github.CrossReferencedEvent,
      types_github.AddedToProjectEvent,
      types_github.AssignedEvent,
      types_github.ClosedEvent,
      types_github.CommentDeletedEvent,
      types_github.ConvertedNoteToIssueEvent,
      types_github.DemilestonedEvent,
      types_github.LabeledEvent,
      types_github.LockedEvent,
      types_github.MentionedEvent,
      types_github.MilestonedEvent,
      types_github.MovedColumnsInProjectEvent,
      types_github.PinnedEvent,
      types_github.ReferencedEvent,
      types_github.RemovedFromProjectEvent,
      types_github.RenamedTitleEvent,
      types_github.ReopenedEvent,
      types_github.SubscribedEvent,
      types_github.TransferredEvent,
      types_github.UnassignedEvent,
      types_github.UnlabeledEvent,
      types_github.UnlockedEvent,
      types_github.UnpinnedEvent,
      types_github.UnsubscribedEvent,
    ])
  },
  get IssueTimelineItemsItemType() {
    return undefined
  },
  get CollaboratorAffiliation() {
    return undefined
  },
  get DeployKeyConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.DeployKeyEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.DeployKey, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'DeployKeyConnection' }
    )
  },
  get DeployKeyEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.DeployKey, null, true)
        },
      },
      { name: 'DeployKeyEdge' }
    )
  },
  get DeployKey() {
    return new ObjectNode(
      {
        get createdAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get key() {
          return new FieldNode(types_github.String, null, false)
        },
        get readOnly() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
        get verified() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'DeployKey' }
    )
  },
  get RepositoryCollaboratorAffiliation() {
    return undefined
  },
  get BranchProtectionRuleConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.BranchProtectionRuleEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.BranchProtectionRule, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'BranchProtectionRuleConnection' }
    )
  },
  get BranchProtectionRuleEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
      },
      { name: 'BranchProtectionRuleEdge' }
    )
  },
  get BranchProtectionRule() {
    return new ObjectNode(
      {
        get branchProtectionRuleConflicts() {
          return new FieldNode(
            types_github.BranchProtectionRuleConflictConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get dismissesStaleReviews() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isAdminEnforced() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get matchingRefs() {
          return new FieldNode(
            types_github.RefConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get pattern() {
          return new FieldNode(types_github.String, null, false)
        },
        get pushAllowances() {
          return new FieldNode(
            types_github.PushAllowanceConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, true)
        },
        get requiredApprovingReviewCount() {
          return new FieldNode(types_github.Int, null, true)
        },
        get requiredStatusCheckContexts() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get requiresApprovingReviews() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get requiresCommitSignatures() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get requiresStatusChecks() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get requiresStrictStatusChecks() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get restrictsPushes() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get restrictsReviewDismissals() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get reviewDismissalAllowances() {
          return new FieldNode(
            types_github.ReviewDismissalAllowanceConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
      },
      { name: 'BranchProtectionRule' }
    )
  },
  get ReviewDismissalAllowanceConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ReviewDismissalAllowanceEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ReviewDismissalAllowance, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ReviewDismissalAllowanceConnection' }
    )
  },
  get ReviewDismissalAllowanceEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.ReviewDismissalAllowance,
            null,
            true
          )
        },
      },
      { name: 'ReviewDismissalAllowanceEdge' }
    )
  },
  get ReviewDismissalAllowance() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(
            types_github.ReviewDismissalAllowanceActor,
            null,
            true
          )
        },
        get branchProtectionRule() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'ReviewDismissalAllowance' }
    )
  },
  get ReviewDismissalAllowanceActor() {
    return new UnionNode([types_github.User, types_github.Team])
  },
  get PushAllowanceConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PushAllowanceEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PushAllowance, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PushAllowanceConnection' }
    )
  },
  get PushAllowanceEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PushAllowance, null, true)
        },
      },
      { name: 'PushAllowanceEdge' }
    )
  },
  get PushAllowance() {
    return new ObjectNode(
      {
        get actor() {
          return new FieldNode(types_github.PushAllowanceActor, null, true)
        },
        get branchProtectionRule() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
      },
      { name: 'PushAllowance' }
    )
  },
  get PushAllowanceActor() {
    return new UnionNode([types_github.User, types_github.Team])
  },
  get RefConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.RefEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Ref, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'RefConnection' }
    )
  },
  get RefEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Ref, null, true)
        },
      },
      { name: 'RefEdge' }
    )
  },
  get BranchProtectionRuleConflictConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.BranchProtectionRuleConflictEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.BranchProtectionRuleConflict, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'BranchProtectionRuleConflictConnection' }
    )
  },
  get BranchProtectionRuleConflictEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.BranchProtectionRuleConflict,
            null,
            true
          )
        },
      },
      { name: 'BranchProtectionRuleConflictEdge' }
    )
  },
  get BranchProtectionRuleConflict() {
    return new ObjectNode(
      {
        get branchProtectionRule() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
        get conflictingBranchProtectionRule() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
        get ref() {
          return new FieldNode(types_github.Ref, null, true)
        },
      },
      { name: 'BranchProtectionRuleConflict' }
    )
  },
  get ProtectedBranchConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.ProtectedBranchEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.ProtectedBranch, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ProtectedBranchConnection' }
    )
  },
  get ProtectedBranchEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.ProtectedBranch, null, true)
        },
      },
      { name: 'ProtectedBranchEdge' }
    )
  },
  get ProtectedBranch() {
    return new ObjectNode(
      {
        get creator() {
          return new FieldNode(types_github.Actor, null, true)
        },
        get hasDismissableStaleReviews() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasRequiredReviews() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasRequiredStatusChecks() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasRestrictedPushes() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasRestrictedReviewDismissals() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasStrictRequiredStatusChecks() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isAdminEnforced() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get pushAllowances() {
          return new FieldNode(
            types_github.PushAllowanceConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get requiredStatusCheckContexts() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get reviewDismissalAllowances() {
          return new FieldNode(
            types_github.ReviewDismissalAllowanceConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
      },
      { name: 'ProtectedBranch' }
    )
  },
  get MilestoneConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.MilestoneEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Milestone, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'MilestoneConnection' }
    )
  },
  get MilestoneEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Milestone, null, true)
        },
      },
      { name: 'MilestoneEdge' }
    )
  },
  get MilestoneOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.MilestoneOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'MilestoneOrder' }
    )
  },
  get MilestoneOrderField() {
    return undefined
  },
  get CodeOfConduct() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get key() {
          return new FieldNode(types_github.String, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, true)
        },
        get url() {
          return new FieldNode(types_github.URI, null, true)
        },
      },
      { name: 'CodeOfConduct' }
    )
  },
  get RepositoryCollaboratorConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.RepositoryCollaboratorEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'RepositoryCollaboratorConnection' }
    )
  },
  get RepositoryCollaboratorEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.User, null, false)
        },
        get permission() {
          return new FieldNode(types_github.RepositoryPermission, null, false)
        },
      },
      { name: 'RepositoryCollaboratorEdge' }
    )
  },
  get LanguageOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.LanguageOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'LanguageOrder' }
    )
  },
  get LanguageOrderField() {
    return undefined
  },
  get RefOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.RefOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'RefOrder' }
    )
  },
  get RefOrderField() {
    return undefined
  },
  get SecurityAdvisory() {
    return new ObjectNode(
      {
        get databaseId() {
          return new FieldNode(types_github.Int, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, false)
        },
        get ghsaId() {
          return new FieldNode(types_github.String, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get identifiers() {
          return new FieldNode(
            new ArrayNode(types_github.SecurityAdvisoryIdentifier, false),
            null,
            false
          )
        },
        get publishedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get references() {
          return new FieldNode(
            new ArrayNode(types_github.SecurityAdvisoryReference, false),
            null,
            false
          )
        },
        get severity() {
          return new FieldNode(
            types_github.SecurityAdvisorySeverity,
            null,
            false
          )
        },
        get summary() {
          return new FieldNode(types_github.String, null, false)
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get vulnerabilities() {
          return new FieldNode(
            types_github.SecurityVulnerabilityConnection,
            new Arguments({
              get orderBy() {
                return new ArgumentsField(
                  types_github.SecurityVulnerabilityOrder,
                  true
                )
              },
              get ecosystem() {
                return new ArgumentsField(
                  types_github.SecurityAdvisoryEcosystem,
                  true
                )
              },
              get package() {
                return new ArgumentsField(types_github.String, true)
              },
              get severities() {
                return new ArgumentsField(
                  new ArrayNode(types_github.SecurityAdvisorySeverity, true),
                  true
                )
              },
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get withdrawnAt() {
          return new FieldNode(types_github.DateTime, null, true)
        },
      },
      { name: 'SecurityAdvisory' }
    )
  },
  get SecurityAdvisorySeverity() {
    return undefined
  },
  get SecurityAdvisoryIdentifier() {
    return new ObjectNode(
      {
        get type() {
          return new FieldNode(types_github.String, null, false)
        },
        get value() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'SecurityAdvisoryIdentifier' }
    )
  },
  get SecurityAdvisoryReference() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'SecurityAdvisoryReference' }
    )
  },
  get SecurityVulnerabilityConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.SecurityVulnerabilityEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.SecurityVulnerability, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'SecurityVulnerabilityConnection' }
    )
  },
  get SecurityVulnerabilityEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.SecurityVulnerability, null, true)
        },
      },
      { name: 'SecurityVulnerabilityEdge' }
    )
  },
  get SecurityVulnerability() {
    return new ObjectNode(
      {
        get advisory() {
          return new FieldNode(types_github.SecurityAdvisory, null, false)
        },
        get firstPatchedVersion() {
          return new FieldNode(
            types_github.SecurityAdvisoryPackageVersion,
            null,
            true
          )
        },
        get package() {
          return new FieldNode(
            types_github.SecurityAdvisoryPackage,
            null,
            false
          )
        },
        get severity() {
          return new FieldNode(
            types_github.SecurityAdvisorySeverity,
            null,
            false
          )
        },
        get updatedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get vulnerableVersionRange() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'SecurityVulnerability' }
    )
  },
  get SecurityAdvisoryPackage() {
    return new ObjectNode(
      {
        get ecosystem() {
          return new FieldNode(
            types_github.SecurityAdvisoryEcosystem,
            null,
            false
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'SecurityAdvisoryPackage' }
    )
  },
  get SecurityAdvisoryEcosystem() {
    return undefined
  },
  get SecurityAdvisoryPackageVersion() {
    return new ObjectNode(
      {
        get identifier() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'SecurityAdvisoryPackageVersion' }
    )
  },
  get SecurityVulnerabilityOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(
            types_github.SecurityVulnerabilityOrderField,
            null,
            false
          )
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'SecurityVulnerabilityOrder' }
    )
  },
  get SecurityVulnerabilityOrderField() {
    return undefined
  },
  get GitSSHRemote() {
    return new ScalarNode({ name: 'GitSSHRemote' })
  },
  get TopicConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.TopicEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Topic, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'TopicConnection' }
    )
  },
  get TopicEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Topic, null, true)
        },
      },
      { name: 'TopicEdge' }
    )
  },
  get ContributionsCollection() {
    return new ObjectNode(
      {
        get commitContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(types_github.CommitContributionsByRepository, false),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get contributionCalendar() {
          return new FieldNode(types_github.ContributionCalendar, null, false)
        },
        get contributionYears() {
          return new FieldNode(
            new ArrayNode(types_github.Int, false),
            null,
            false
          )
        },
        get doesEndInCurrentMonth() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get earliestRestrictedContributionDate() {
          return new FieldNode(types_github.Date, null, true)
        },
        get endedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get firstIssueContribution() {
          return new FieldNode(
            types_github.CreatedIssueOrRestrictedContribution,
            new Arguments({
              get ignoreTimeRange() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get firstPullRequestContribution() {
          return new FieldNode(
            types_github.CreatedPullRequestOrRestrictedContribution,
            new Arguments({
              get ignoreTimeRange() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get firstRepositoryContribution() {
          return new FieldNode(
            types_github.CreatedRepositoryOrRestrictedContribution,
            new Arguments({
              get ignoreTimeRange() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get hasActivityInThePast() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasAnyContributions() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get hasAnyRestrictedContributions() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get isSingleDay() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get issueContributions() {
          return new FieldNode(
            types_github.CreatedIssueContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get issueContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(types_github.IssueContributionsByRepository, false),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(types_github.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get joinedGitHubContribution() {
          return new FieldNode(
            types_github.JoinedGitHubContribution,
            new Arguments({
              get ignoreTimeRange() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get latestRestrictedContributionDate() {
          return new FieldNode(types_github.Date, null, true)
        },
        get mostRecentCollectionWithActivity() {
          return new FieldNode(types_github.ContributionsCollection, null, true)
        },
        get mostRecentCollectionWithoutActivity() {
          return new FieldNode(types_github.ContributionsCollection, null, true)
        },
        get popularIssueContribution() {
          return new FieldNode(
            types_github.CreatedIssueContribution,
            null,
            true
          )
        },
        get popularPullRequestContribution() {
          return new FieldNode(
            types_github.CreatedPullRequestContribution,
            null,
            true
          )
        },
        get pullRequestContributions() {
          return new FieldNode(
            types_github.CreatedPullRequestContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get pullRequestContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(
              types_github.PullRequestContributionsByRepository,
              false
            ),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(types_github.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get pullRequestReviewContributions() {
          return new FieldNode(
            types_github.CreatedPullRequestReviewContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get pullRequestReviewContributionsByRepository() {
          return new FieldNode(
            new ArrayNode(
              types_github.PullRequestReviewContributionsByRepository,
              false
            ),
            new Arguments({
              get maxRepositories() {
                return new ArgumentsField(types_github.Int, true)
              },
            }),
            false
          )
        },
        get repositoryContributions() {
          return new FieldNode(
            types_github.CreatedRepositoryContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get restrictedContributionsCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get startedAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get totalCommitContributions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get totalIssueContributions() {
          return new FieldNode(
            types_github.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get totalPullRequestContributions() {
          return new FieldNode(
            types_github.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get totalPullRequestReviewContributions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get totalRepositoriesWithContributedCommits() {
          return new FieldNode(types_github.Int, null, false)
        },
        get totalRepositoriesWithContributedIssues() {
          return new FieldNode(
            types_github.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get totalRepositoriesWithContributedPullRequestReviews() {
          return new FieldNode(types_github.Int, null, false)
        },
        get totalRepositoriesWithContributedPullRequests() {
          return new FieldNode(
            types_github.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
              get excludePopular() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get totalRepositoryContributions() {
          return new FieldNode(
            types_github.Int,
            new Arguments({
              get excludeFirst() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            false
          )
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'ContributionsCollection' }
    )
  },
  get CreatedIssueContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedIssueContributionEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedIssueContribution, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CreatedIssueContributionConnection' }
    )
  },
  get CreatedIssueContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.CreatedIssueContribution,
            null,
            true
          )
        },
      },
      { name: 'CreatedIssueContributionEdge' }
    )
  },
  get CreatedIssueContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get issue() {
          return new FieldNode(types_github.Issue, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'CreatedIssueContribution' }
    )
  },
  get Contribution() {
    return new InterfaceNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      [
        types_github.CreatedCommitContribution,
        types_github.CreatedIssueContribution,
        types_github.CreatedPullRequestContribution,
        types_github.CreatedPullRequestReviewContribution,
        types_github.CreatedRepositoryContribution,
        types_github.JoinedGitHubContribution,
        types_github.RestrictedContribution,
      ],
      { name: 'Contribution' }
    )
  },
  get ContributionOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(types_github.ContributionOrderField, null, false)
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'ContributionOrder' }
    )
  },
  get ContributionOrderField() {
    return undefined
  },
  get CreatedRepositoryContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedRepositoryContributionEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedRepositoryContribution, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CreatedRepositoryContributionConnection' }
    )
  },
  get CreatedRepositoryContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.CreatedRepositoryContribution,
            null,
            true
          )
        },
      },
      { name: 'CreatedRepositoryContributionEdge' }
    )
  },
  get CreatedRepositoryContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'CreatedRepositoryContribution' }
    )
  },
  get JoinedGitHubContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'JoinedGitHubContribution' }
    )
  },
  get CreatedRepositoryOrRestrictedContribution() {
    return new UnionNode([
      types_github.CreatedRepositoryContribution,
      types_github.RestrictedContribution,
    ])
  },
  get RestrictedContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'RestrictedContribution' }
    )
  },
  get CreatedIssueOrRestrictedContribution() {
    return new UnionNode([
      types_github.CreatedIssueContribution,
      types_github.RestrictedContribution,
    ])
  },
  get CreatedPullRequestOrRestrictedContribution() {
    return new UnionNode([
      types_github.CreatedPullRequestContribution,
      types_github.RestrictedContribution,
    ])
  },
  get CreatedPullRequestContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'CreatedPullRequestContribution' }
    )
  },
  get ContributionCalendar() {
    return new ObjectNode(
      {
        get colors() {
          return new FieldNode(
            new ArrayNode(types_github.String, false),
            null,
            false
          )
        },
        get isHalloween() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get months() {
          return new FieldNode(
            new ArrayNode(types_github.ContributionCalendarMonth, false),
            null,
            false
          )
        },
        get totalContributions() {
          return new FieldNode(types_github.Int, null, false)
        },
        get weeks() {
          return new FieldNode(
            new ArrayNode(types_github.ContributionCalendarWeek, false),
            null,
            false
          )
        },
      },
      { name: 'ContributionCalendar' }
    )
  },
  get ContributionCalendarWeek() {
    return new ObjectNode(
      {
        get contributionDays() {
          return new FieldNode(
            new ArrayNode(types_github.ContributionCalendarDay, false),
            null,
            false
          )
        },
        get firstDay() {
          return new FieldNode(types_github.Date, null, false)
        },
      },
      { name: 'ContributionCalendarWeek' }
    )
  },
  get ContributionCalendarDay() {
    return new ObjectNode(
      {
        get color() {
          return new FieldNode(types_github.String, null, false)
        },
        get contributionCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get date() {
          return new FieldNode(types_github.Date, null, false)
        },
        get weekday() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ContributionCalendarDay' }
    )
  },
  get ContributionCalendarMonth() {
    return new ObjectNode(
      {
        get firstDay() {
          return new FieldNode(types_github.Date, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get totalWeeks() {
          return new FieldNode(types_github.Int, null, false)
        },
        get year() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ContributionCalendarMonth' }
    )
  },
  get CreatedPullRequestReviewContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(
              types_github.CreatedPullRequestReviewContributionEdge,
              true
            ),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(
              types_github.CreatedPullRequestReviewContribution,
              true
            ),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CreatedPullRequestReviewContributionConnection' }
    )
  },
  get CreatedPullRequestReviewContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.CreatedPullRequestReviewContribution,
            null,
            true
          )
        },
      },
      { name: 'CreatedPullRequestReviewContributionEdge' }
    )
  },
  get CreatedPullRequestReviewContribution() {
    return new ObjectNode(
      {
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, false)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'CreatedPullRequestReviewContribution' }
    )
  },
  get PullRequestReviewContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            types_github.CreatedPullRequestReviewContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      { name: 'PullRequestReviewContributionsByRepository' }
    )
  },
  get CommitContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            types_github.CreatedCommitContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(
                  types_github.CommitContributionOrder,
                  true
                )
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
      },
      { name: 'CommitContributionsByRepository' }
    )
  },
  get CreatedCommitContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedCommitContributionEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedCommitContribution, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CreatedCommitContributionConnection' }
    )
  },
  get CreatedCommitContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.CreatedCommitContribution,
            null,
            true
          )
        },
      },
      { name: 'CreatedCommitContributionEdge' }
    )
  },
  get CreatedCommitContribution() {
    return new ObjectNode(
      {
        get commitCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get isRestricted() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get occurredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get resourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get url() {
          return new FieldNode(types_github.URI, null, false)
        },
        get user() {
          return new FieldNode(types_github.User, null, false)
        },
      },
      { name: 'CreatedCommitContribution' }
    )
  },
  get CommitContributionOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(
            types_github.CommitContributionOrderField,
            null,
            false
          )
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'CommitContributionOrder' }
    )
  },
  get CommitContributionOrderField() {
    return undefined
  },
  get CreatedPullRequestContributionConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(
              types_github.CreatedPullRequestContributionEdge,
              true
            ),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.CreatedPullRequestContribution, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'CreatedPullRequestContributionConnection' }
    )
  },
  get CreatedPullRequestContributionEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(
            types_github.CreatedPullRequestContribution,
            null,
            true
          )
        },
      },
      { name: 'CreatedPullRequestContributionEdge' }
    )
  },
  get PullRequestContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            types_github.CreatedPullRequestContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      { name: 'PullRequestContributionsByRepository' }
    )
  },
  get IssueContributionsByRepository() {
    return new ObjectNode(
      {
        get contributions() {
          return new FieldNode(
            types_github.CreatedIssueContributionConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(types_github.String, true)
              },
              get before() {
                return new ArgumentsField(types_github.String, true)
              },
              get first() {
                return new ArgumentsField(types_github.Int, true)
              },
              get last() {
                return new ArgumentsField(types_github.Int, true)
              },
              get orderBy() {
                return new ArgumentsField(types_github.ContributionOrder, true)
              },
            }),
            false
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
      },
      { name: 'IssueContributionsByRepository' }
    )
  },
  get RepositoryContributionType() {
    return undefined
  },
  get PublicKeyConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.PublicKeyEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.PublicKey, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'PublicKeyConnection' }
    )
  },
  get PublicKeyEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.PublicKey, null, true)
        },
      },
      { name: 'PublicKeyEdge' }
    )
  },
  get FollowingConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.UserEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'FollowingConnection' }
    )
  },
  get FollowerConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.UserEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.User, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'FollowerConnection' }
    )
  },
  get StarredRepositoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.StarredRepositoryEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.Repository, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'StarredRepositoryConnection' }
    )
  },
  get StarredRepositoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get starredAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'StarredRepositoryEdge' }
    )
  },
  get AppEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.App, null, true)
        },
      },
      { name: 'AppEdge' }
    )
  },
  get RateLimit() {
    return new ObjectNode(
      {
        get cost() {
          return new FieldNode(types_github.Int, null, false)
        },
        get limit() {
          return new FieldNode(types_github.Int, null, false)
        },
        get nodeCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get remaining() {
          return new FieldNode(types_github.Int, null, false)
        },
        get resetAt() {
          return new FieldNode(types_github.DateTime, null, false)
        },
      },
      { name: 'RateLimit' }
    )
  },
  get SearchResultItemConnection() {
    return new ObjectNode(
      {
        get codeCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.SearchResultItemEdge, true),
            null,
            true
          )
        },
        get issueCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.SearchResultItem, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get repositoryCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get userCount() {
          return new FieldNode(types_github.Int, null, false)
        },
        get wikiCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'SearchResultItemConnection' }
    )
  },
  get SearchResultItemEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.SearchResultItem, null, true)
        },
        get textMatches() {
          return new FieldNode(
            new ArrayNode(types_github.TextMatch, true),
            null,
            true
          )
        },
      },
      { name: 'SearchResultItemEdge' }
    )
  },
  get SearchResultItem() {
    return new UnionNode([
      types_github.Issue,
      types_github.PullRequest,
      types_github.Repository,
      types_github.User,
      types_github.Organization,
      types_github.MarketplaceListing,
    ])
  },
  get TextMatch() {
    return new ObjectNode(
      {
        get fragment() {
          return new FieldNode(types_github.String, null, false)
        },
        get highlights() {
          return new FieldNode(
            new ArrayNode(types_github.TextMatchHighlight, false),
            null,
            false
          )
        },
        get property() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'TextMatch' }
    )
  },
  get TextMatchHighlight() {
    return new ObjectNode(
      {
        get beginIndice() {
          return new FieldNode(types_github.Int, null, false)
        },
        get endIndice() {
          return new FieldNode(types_github.Int, null, false)
        },
        get text() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'TextMatchHighlight' }
    )
  },
  get SearchType() {
    return undefined
  },
  get CollectionItemContent() {
    return new UnionNode([
      types_github.Repository,
      types_github.Organization,
      types_github.User,
    ])
  },
  get GitHubMetadata() {
    return new ObjectNode(
      {
        get gitHubServicesSha() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get gitIpAddresses() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get hookIpAddresses() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get importerIpAddresses() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get isPasswordAuthenticationVerifiable() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get pagesIpAddresses() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
      },
      { name: 'GitHubMetadata' }
    )
  },
  get SecurityAdvisoryConnection() {
    return new ObjectNode(
      {
        get edges() {
          return new FieldNode(
            new ArrayNode(types_github.SecurityAdvisoryEdge, true),
            null,
            true
          )
        },
        get nodes() {
          return new FieldNode(
            new ArrayNode(types_github.SecurityAdvisory, true),
            null,
            true
          )
        },
        get pageInfo() {
          return new FieldNode(types_github.PageInfo, null, false)
        },
        get totalCount() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'SecurityAdvisoryConnection' }
    )
  },
  get SecurityAdvisoryEdge() {
    return new ObjectNode(
      {
        get cursor() {
          return new FieldNode(types_github.String, null, false)
        },
        get node() {
          return new FieldNode(types_github.SecurityAdvisory, null, true)
        },
      },
      { name: 'SecurityAdvisoryEdge' }
    )
  },
  get SecurityAdvisoryOrder() {
    return new InputNode(
      {
        get field() {
          return new FieldNode(
            types_github.SecurityAdvisoryOrderField,
            null,
            false
          )
        },
        get direction() {
          return new FieldNode(types_github.OrderDirection, null, false)
        },
      },
      { name: 'SecurityAdvisoryOrder' }
    )
  },
  get SecurityAdvisoryOrderField() {
    return undefined
  },
  get SecurityAdvisoryIdentifierFilter() {
    return new InputNode(
      {
        get type() {
          return new FieldNode(
            types_github.SecurityAdvisoryIdentifierType,
            null,
            false
          )
        },
        get value() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'SecurityAdvisoryIdentifierFilter' }
    )
  },
  get SecurityAdvisoryIdentifierType() {
    return undefined
  },
  get Mutation() {
    return new ObjectNode(
      {
        get acceptTopicSuggestion() {
          return new FieldNode(
            types_github.AcceptTopicSuggestionPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.AcceptTopicSuggestionInput,
                  false
                )
              },
            }),
            true
          )
        },
        get addComment() {
          return new FieldNode(
            types_github.AddCommentPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(types_github.AddCommentInput, false)
              },
            }),
            true
          )
        },
        get addProjectCard() {
          return new FieldNode(
            types_github.AddProjectCardPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.AddProjectCardInput,
                  false
                )
              },
            }),
            true
          )
        },
        get addProjectColumn() {
          return new FieldNode(
            types_github.AddProjectColumnPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.AddProjectColumnInput,
                  false
                )
              },
            }),
            true
          )
        },
        get addPullRequestReview() {
          return new FieldNode(
            types_github.AddPullRequestReviewPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.AddPullRequestReviewInput,
                  false
                )
              },
            }),
            true
          )
        },
        get addPullRequestReviewComment() {
          return new FieldNode(
            types_github.AddPullRequestReviewCommentPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.AddPullRequestReviewCommentInput,
                  false
                )
              },
            }),
            true
          )
        },
        get addReaction() {
          return new FieldNode(
            types_github.AddReactionPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(types_github.AddReactionInput, false)
              },
            }),
            true
          )
        },
        get addStar() {
          return new FieldNode(
            types_github.AddStarPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(types_github.AddStarInput, false)
              },
            }),
            true
          )
        },
        get changeUserStatus() {
          return new FieldNode(
            types_github.ChangeUserStatusPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.ChangeUserStatusInput,
                  false
                )
              },
            }),
            true
          )
        },
        get closePullRequest() {
          return new FieldNode(
            types_github.ClosePullRequestPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.ClosePullRequestInput,
                  false
                )
              },
            }),
            true
          )
        },
        get createBranchProtectionRule() {
          return new FieldNode(
            types_github.CreateBranchProtectionRulePayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.CreateBranchProtectionRuleInput,
                  false
                )
              },
            }),
            true
          )
        },
        get createProject() {
          return new FieldNode(
            types_github.CreateProjectPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.CreateProjectInput,
                  false
                )
              },
            }),
            true
          )
        },
        get createPullRequest() {
          return new FieldNode(
            types_github.CreatePullRequestPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.CreatePullRequestInput,
                  false
                )
              },
            }),
            true
          )
        },
        get declineTopicSuggestion() {
          return new FieldNode(
            types_github.DeclineTopicSuggestionPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeclineTopicSuggestionInput,
                  false
                )
              },
            }),
            true
          )
        },
        get deleteBranchProtectionRule() {
          return new FieldNode(
            types_github.DeleteBranchProtectionRulePayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeleteBranchProtectionRuleInput,
                  false
                )
              },
            }),
            true
          )
        },
        get deleteProject() {
          return new FieldNode(
            types_github.DeleteProjectPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeleteProjectInput,
                  false
                )
              },
            }),
            true
          )
        },
        get deleteProjectCard() {
          return new FieldNode(
            types_github.DeleteProjectCardPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeleteProjectCardInput,
                  false
                )
              },
            }),
            true
          )
        },
        get deleteProjectColumn() {
          return new FieldNode(
            types_github.DeleteProjectColumnPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeleteProjectColumnInput,
                  false
                )
              },
            }),
            true
          )
        },
        get deletePullRequestReview() {
          return new FieldNode(
            types_github.DeletePullRequestReviewPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeletePullRequestReviewInput,
                  false
                )
              },
            }),
            true
          )
        },
        get deletePullRequestReviewComment() {
          return new FieldNode(
            types_github.DeletePullRequestReviewCommentPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DeletePullRequestReviewCommentInput,
                  false
                )
              },
            }),
            true
          )
        },
        get dismissPullRequestReview() {
          return new FieldNode(
            types_github.DismissPullRequestReviewPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.DismissPullRequestReviewInput,
                  false
                )
              },
            }),
            true
          )
        },
        get lockLockable() {
          return new FieldNode(
            types_github.LockLockablePayload,
            new Arguments({
              get input() {
                return new ArgumentsField(types_github.LockLockableInput, false)
              },
            }),
            true
          )
        },
        get mergePullRequest() {
          return new FieldNode(
            types_github.MergePullRequestPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.MergePullRequestInput,
                  false
                )
              },
            }),
            true
          )
        },
        get moveProjectCard() {
          return new FieldNode(
            types_github.MoveProjectCardPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.MoveProjectCardInput,
                  false
                )
              },
            }),
            true
          )
        },
        get moveProjectColumn() {
          return new FieldNode(
            types_github.MoveProjectColumnPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.MoveProjectColumnInput,
                  false
                )
              },
            }),
            true
          )
        },
        get removeOutsideCollaborator() {
          return new FieldNode(
            types_github.RemoveOutsideCollaboratorPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.RemoveOutsideCollaboratorInput,
                  false
                )
              },
            }),
            true
          )
        },
        get removeReaction() {
          return new FieldNode(
            types_github.RemoveReactionPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.RemoveReactionInput,
                  false
                )
              },
            }),
            true
          )
        },
        get removeStar() {
          return new FieldNode(
            types_github.RemoveStarPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(types_github.RemoveStarInput, false)
              },
            }),
            true
          )
        },
        get reopenPullRequest() {
          return new FieldNode(
            types_github.ReopenPullRequestPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.ReopenPullRequestInput,
                  false
                )
              },
            }),
            true
          )
        },
        get requestReviews() {
          return new FieldNode(
            types_github.RequestReviewsPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.RequestReviewsInput,
                  false
                )
              },
            }),
            true
          )
        },
        get resolveReviewThread() {
          return new FieldNode(
            types_github.ResolveReviewThreadPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.ResolveReviewThreadInput,
                  false
                )
              },
            }),
            true
          )
        },
        get submitPullRequestReview() {
          return new FieldNode(
            types_github.SubmitPullRequestReviewPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.SubmitPullRequestReviewInput,
                  false
                )
              },
            }),
            true
          )
        },
        get unlockLockable() {
          return new FieldNode(
            types_github.UnlockLockablePayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UnlockLockableInput,
                  false
                )
              },
            }),
            true
          )
        },
        get unresolveReviewThread() {
          return new FieldNode(
            types_github.UnresolveReviewThreadPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UnresolveReviewThreadInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updateBranchProtectionRule() {
          return new FieldNode(
            types_github.UpdateBranchProtectionRulePayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdateBranchProtectionRuleInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updateProject() {
          return new FieldNode(
            types_github.UpdateProjectPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdateProjectInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updateProjectCard() {
          return new FieldNode(
            types_github.UpdateProjectCardPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdateProjectCardInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updateProjectColumn() {
          return new FieldNode(
            types_github.UpdateProjectColumnPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdateProjectColumnInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updatePullRequest() {
          return new FieldNode(
            types_github.UpdatePullRequestPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdatePullRequestInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updatePullRequestReview() {
          return new FieldNode(
            types_github.UpdatePullRequestReviewPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdatePullRequestReviewInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updatePullRequestReviewComment() {
          return new FieldNode(
            types_github.UpdatePullRequestReviewCommentPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdatePullRequestReviewCommentInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updateSubscription() {
          return new FieldNode(
            types_github.UpdateSubscriptionPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(
                  types_github.UpdateSubscriptionInput,
                  false
                )
              },
            }),
            true
          )
        },
        get updateTopics() {
          return new FieldNode(
            types_github.UpdateTopicsPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(types_github.UpdateTopicsInput, false)
              },
            }),
            true
          )
        },
      },
      { name: 'Mutation' }
    )
  },
  get AddReactionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get reaction() {
          return new FieldNode(types_github.Reaction, null, true)
        },
        get subject() {
          return new FieldNode(types_github.Reactable, null, true)
        },
      },
      { name: 'AddReactionPayload' }
    )
  },
  get AddReactionInput() {
    return new InputNode(
      {
        get subjectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get content() {
          return new FieldNode(types_github.ReactionContent, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddReactionInput' }
    )
  },
  get RemoveReactionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get reaction() {
          return new FieldNode(types_github.Reaction, null, true)
        },
        get subject() {
          return new FieldNode(types_github.Reactable, null, true)
        },
      },
      { name: 'RemoveReactionPayload' }
    )
  },
  get RemoveReactionInput() {
    return new InputNode(
      {
        get subjectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get content() {
          return new FieldNode(types_github.ReactionContent, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RemoveReactionInput' }
    )
  },
  get UpdateSubscriptionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get subscribable() {
          return new FieldNode(types_github.Subscribable, null, true)
        },
      },
      { name: 'UpdateSubscriptionPayload' }
    )
  },
  get UpdateSubscriptionInput() {
    return new InputNode(
      {
        get subscribableId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get state() {
          return new FieldNode(types_github.SubscriptionState, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateSubscriptionInput' }
    )
  },
  get AddCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get commentEdge() {
          return new FieldNode(types_github.IssueCommentEdge, null, true)
        },
        get subject() {
          return new FieldNode(types_github.Node, null, true)
        },
        get timelineEdge() {
          return new FieldNode(types_github.IssueTimelineItemEdge, null, true)
        },
      },
      { name: 'AddCommentPayload' }
    )
  },
  get AddCommentInput() {
    return new InputNode(
      {
        get subjectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddCommentInput' }
    )
  },
  get MinimizeCommentInput() {
    return new InputNode(
      {
        get subjectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get classifier() {
          return new FieldNode(
            types_github.ReportedContentClassifiers,
            null,
            false
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'MinimizeCommentInput' }
    )
  },
  get ReportedContentClassifiers() {
    return undefined
  },
  get UnminimizeCommentInput() {
    return new InputNode(
      {
        get subjectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UnminimizeCommentInput' }
    )
  },
  get CreateProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get project() {
          return new FieldNode(types_github.Project, null, true)
        },
      },
      { name: 'CreateProjectPayload' }
    )
  },
  get CreateProjectInput() {
    return new InputNode(
      {
        get ownerId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'CreateProjectInput' }
    )
  },
  get UpdateProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get project() {
          return new FieldNode(types_github.Project, null, true)
        },
      },
      { name: 'UpdateProjectPayload' }
    )
  },
  get UpdateProjectInput() {
    return new InputNode(
      {
        get projectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get state() {
          return new FieldNode(types_github.ProjectState, null, true)
        },
        get public() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateProjectInput' }
    )
  },
  get DeleteProjectPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get owner() {
          return new FieldNode(types_github.ProjectOwner, null, true)
        },
      },
      { name: 'DeleteProjectPayload' }
    )
  },
  get DeleteProjectInput() {
    return new InputNode(
      {
        get projectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeleteProjectInput' }
    )
  },
  get ImportProjectInput() {
    return new InputNode(
      {
        get ownerName() {
          return new FieldNode(types_github.String, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get public() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get columnImports() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectColumnImport, false),
            null,
            false
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ImportProjectInput' }
    )
  },
  get ProjectColumnImport() {
    return new InputNode(
      {
        get columnName() {
          return new FieldNode(types_github.String, null, false)
        },
        get position() {
          return new FieldNode(types_github.Int, null, false)
        },
        get issues() {
          return new FieldNode(
            new ArrayNode(types_github.ProjectCardImport, true),
            null,
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
          return new FieldNode(types_github.String, null, false)
        },
        get number() {
          return new FieldNode(types_github.Int, null, false)
        },
      },
      { name: 'ProjectCardImport' }
    )
  },
  get AddProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get columnEdge() {
          return new FieldNode(types_github.ProjectColumnEdge, null, true)
        },
        get project() {
          return new FieldNode(types_github.Project, null, true)
        },
      },
      { name: 'AddProjectColumnPayload' }
    )
  },
  get AddProjectColumnInput() {
    return new InputNode(
      {
        get projectId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddProjectColumnInput' }
    )
  },
  get MoveProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get columnEdge() {
          return new FieldNode(types_github.ProjectColumnEdge, null, true)
        },
      },
      { name: 'MoveProjectColumnPayload' }
    )
  },
  get MoveProjectColumnInput() {
    return new InputNode(
      {
        get columnId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get afterColumnId() {
          return new FieldNode(types_github.ID, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'MoveProjectColumnInput' }
    )
  },
  get UpdateProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get projectColumn() {
          return new FieldNode(types_github.ProjectColumn, null, true)
        },
      },
      { name: 'UpdateProjectColumnPayload' }
    )
  },
  get UpdateProjectColumnInput() {
    return new InputNode(
      {
        get projectColumnId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateProjectColumnInput' }
    )
  },
  get DeleteProjectColumnPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get deletedColumnId() {
          return new FieldNode(types_github.ID, null, true)
        },
        get project() {
          return new FieldNode(types_github.Project, null, true)
        },
      },
      { name: 'DeleteProjectColumnPayload' }
    )
  },
  get DeleteProjectColumnInput() {
    return new InputNode(
      {
        get columnId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeleteProjectColumnInput' }
    )
  },
  get AddProjectCardPayload() {
    return new ObjectNode(
      {
        get cardEdge() {
          return new FieldNode(types_github.ProjectCardEdge, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get projectColumn() {
          return new FieldNode(types_github.ProjectColumn, null, true)
        },
      },
      { name: 'AddProjectCardPayload' }
    )
  },
  get AddProjectCardInput() {
    return new InputNode(
      {
        get projectColumnId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get contentId() {
          return new FieldNode(types_github.ID, null, true)
        },
        get note() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddProjectCardInput' }
    )
  },
  get UpdateProjectCardPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get projectCard() {
          return new FieldNode(types_github.ProjectCard, null, true)
        },
      },
      { name: 'UpdateProjectCardPayload' }
    )
  },
  get UpdateProjectCardInput() {
    return new InputNode(
      {
        get projectCardId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get isArchived() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get note() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateProjectCardInput' }
    )
  },
  get MoveProjectCardPayload() {
    return new ObjectNode(
      {
        get cardEdge() {
          return new FieldNode(types_github.ProjectCardEdge, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'MoveProjectCardPayload' }
    )
  },
  get MoveProjectCardInput() {
    return new InputNode(
      {
        get cardId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get columnId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get afterCardId() {
          return new FieldNode(types_github.ID, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'MoveProjectCardInput' }
    )
  },
  get DeleteProjectCardPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get column() {
          return new FieldNode(types_github.ProjectColumn, null, true)
        },
        get deletedCardId() {
          return new FieldNode(types_github.ID, null, true)
        },
      },
      { name: 'DeleteProjectCardPayload' }
    )
  },
  get DeleteProjectCardInput() {
    return new InputNode(
      {
        get cardId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeleteProjectCardInput' }
    )
  },
  get LockLockablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get lockedRecord() {
          return new FieldNode(types_github.Lockable, null, true)
        },
      },
      { name: 'LockLockablePayload' }
    )
  },
  get LockLockableInput() {
    return new InputNode(
      {
        get lockableId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get lockReason() {
          return new FieldNode(types_github.LockReason, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'LockLockableInput' }
    )
  },
  get UnlockLockablePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get unlockedRecord() {
          return new FieldNode(types_github.Lockable, null, true)
        },
      },
      { name: 'UnlockLockablePayload' }
    )
  },
  get UnlockLockableInput() {
    return new InputNode(
      {
        get lockableId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UnlockLockableInput' }
    )
  },
  get DeleteIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeleteIssueInput' }
    )
  },
  get PinIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'PinIssueInput' }
    )
  },
  get UnpinIssueInput() {
    return new InputNode(
      {
        get issueId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UnpinIssueInput' }
    )
  },
  get CreatePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
      },
      { name: 'CreatePullRequestPayload' }
    )
  },
  get CreatePullRequestInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get baseRefName() {
          return new FieldNode(types_github.String, null, false)
        },
        get headRefName() {
          return new FieldNode(types_github.String, null, false)
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get maintainerCanModify() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'CreatePullRequestInput' }
    )
  },
  get UpdatePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
      },
      { name: 'UpdatePullRequestPayload' }
    )
  },
  get UpdatePullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get baseRefName() {
          return new FieldNode(types_github.String, null, true)
        },
        get title() {
          return new FieldNode(types_github.String, null, true)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get maintainerCanModify() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdatePullRequestInput' }
    )
  },
  get ClosePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
      },
      { name: 'ClosePullRequestPayload' }
    )
  },
  get ClosePullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ClosePullRequestInput' }
    )
  },
  get ReopenPullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
      },
      { name: 'ReopenPullRequestPayload' }
    )
  },
  get ReopenPullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ReopenPullRequestInput' }
    )
  },
  get MergePullRequestPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
      },
      { name: 'MergePullRequestPayload' }
    )
  },
  get MergePullRequestInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get commitHeadline() {
          return new FieldNode(types_github.String, null, true)
        },
        get commitBody() {
          return new FieldNode(types_github.String, null, true)
        },
        get expectedHeadOid() {
          return new FieldNode(types_github.GitObjectID, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'MergePullRequestInput' }
    )
  },
  get DeletePullRequestReviewCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
      },
      { name: 'DeletePullRequestReviewCommentPayload' }
    )
  },
  get DeletePullRequestReviewCommentInput() {
    return new InputNode(
      {
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeletePullRequestReviewCommentInput' }
    )
  },
  get AddPullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
        get reviewEdge() {
          return new FieldNode(types_github.PullRequestReviewEdge, null, true)
        },
      },
      { name: 'AddPullRequestReviewPayload' }
    )
  },
  get AddPullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get commitOID() {
          return new FieldNode(types_github.GitObjectID, null, true)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get event() {
          return new FieldNode(types_github.PullRequestReviewEvent, null, true)
        },
        get comments() {
          return new FieldNode(
            new ArrayNode(types_github.DraftPullRequestReviewComment, true),
            null,
            true
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddPullRequestReviewInput' }
    )
  },
  get PullRequestReviewEvent() {
    return undefined
  },
  get DraftPullRequestReviewComment() {
    return new InputNode(
      {
        get path() {
          return new FieldNode(types_github.String, null, false)
        },
        get position() {
          return new FieldNode(types_github.Int, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'DraftPullRequestReviewComment' }
    )
  },
  get SubmitPullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
      },
      { name: 'SubmitPullRequestReviewPayload' }
    )
  },
  get SubmitPullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get event() {
          return new FieldNode(types_github.PullRequestReviewEvent, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'SubmitPullRequestReviewInput' }
    )
  },
  get UpdatePullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
      },
      { name: 'UpdatePullRequestReviewPayload' }
    )
  },
  get UpdatePullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdatePullRequestReviewInput' }
    )
  },
  get DismissPullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
      },
      { name: 'DismissPullRequestReviewPayload' }
    )
  },
  get DismissPullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get message() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DismissPullRequestReviewInput' }
    )
  },
  get DeletePullRequestReviewPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReview() {
          return new FieldNode(types_github.PullRequestReview, null, true)
        },
      },
      { name: 'DeletePullRequestReviewPayload' }
    )
  },
  get DeletePullRequestReviewInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeletePullRequestReviewInput' }
    )
  },
  get ResolveReviewThreadPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get thread() {
          return new FieldNode(types_github.PullRequestReviewThread, null, true)
        },
      },
      { name: 'ResolveReviewThreadPayload' }
    )
  },
  get ResolveReviewThreadInput() {
    return new InputNode(
      {
        get threadId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ResolveReviewThreadInput' }
    )
  },
  get UnresolveReviewThreadPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get thread() {
          return new FieldNode(types_github.PullRequestReviewThread, null, true)
        },
      },
      { name: 'UnresolveReviewThreadPayload' }
    )
  },
  get UnresolveReviewThreadInput() {
    return new InputNode(
      {
        get threadId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UnresolveReviewThreadInput' }
    )
  },
  get AddPullRequestReviewCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get comment() {
          return new FieldNode(
            types_github.PullRequestReviewComment,
            null,
            true
          )
        },
        get commentEdge() {
          return new FieldNode(
            types_github.PullRequestReviewCommentEdge,
            null,
            true
          )
        },
      },
      { name: 'AddPullRequestReviewCommentPayload' }
    )
  },
  get AddPullRequestReviewCommentInput() {
    return new InputNode(
      {
        get pullRequestReviewId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get commitOID() {
          return new FieldNode(types_github.GitObjectID, null, true)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get path() {
          return new FieldNode(types_github.String, null, true)
        },
        get position() {
          return new FieldNode(types_github.Int, null, true)
        },
        get inReplyTo() {
          return new FieldNode(types_github.ID, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddPullRequestReviewCommentInput' }
    )
  },
  get UpdatePullRequestReviewCommentPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequestReviewComment() {
          return new FieldNode(
            types_github.PullRequestReviewComment,
            null,
            true
          )
        },
      },
      { name: 'UpdatePullRequestReviewCommentPayload' }
    )
  },
  get UpdatePullRequestReviewCommentInput() {
    return new InputNode(
      {
        get pullRequestReviewCommentId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdatePullRequestReviewCommentInput' }
    )
  },
  get UpdateBusinessProfileInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get websiteUrl() {
          return new FieldNode(types_github.String, null, true)
        },
        get location() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessProfileInput' }
    )
  },
  get InviteBusinessAdminInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get invitee() {
          return new FieldNode(types_github.String, null, true)
        },
        get email() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'InviteBusinessAdminInput' }
    )
  },
  get AcceptBusinessMemberInvitationInput() {
    return new InputNode(
      {
        get invitationId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AcceptBusinessMemberInvitationInput' }
    )
  },
  get CancelBusinessAdminInvitationInput() {
    return new InputNode(
      {
        get invitationId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'CancelBusinessAdminInvitationInput' }
    )
  },
  get RemoveBusinessAdminInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RemoveBusinessAdminInput' }
    )
  },
  get InviteBusinessBillingManagerInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get invitee() {
          return new FieldNode(types_github.String, null, true)
        },
        get email() {
          return new FieldNode(types_github.String, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'InviteBusinessBillingManagerInput' }
    )
  },
  get CancelBusinessBillingManagerInvitationInput() {
    return new InputNode(
      {
        get invitationId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'CancelBusinessBillingManagerInvitationInput' }
    )
  },
  get RemoveBusinessBillingManagerInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get login() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RemoveBusinessBillingManagerInput' }
    )
  },
  get SetBusinessIdentityProviderInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get ssoUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get issuer() {
          return new FieldNode(types_github.String, null, true)
        },
        get idpCertificate() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'SetBusinessIdentityProviderInput' }
    )
  },
  get RemoveBusinessIdentityProviderInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RemoveBusinessIdentityProviderInput' }
    )
  },
  get RegenerateBusinessIdentityProviderRecoveryCodesInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RegenerateBusinessIdentityProviderRecoveryCodesInput' }
    )
  },
  get UpdateBusinessMembersCanCreateRepositoriesSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessMembersCanCreateRepositoriesSettingInput' }
    )
  },
  get UpdateBusinessAllowPrivateRepositoryForkingSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessAllowPrivateRepositoryForkingSettingInput' }
    )
  },
  get UpdateBusinessDefaultRepositoryPermissionSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessDefaultRepositoryPermissionSettingInput' }
    )
  },
  get UpdateBusinessTeamDiscussionsSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessTeamDiscussionsSettingInput' }
    )
  },
  get UpdateBusinessOrganizationProjectsSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessOrganizationProjectsSettingInput' }
    )
  },
  get UpdateBusinessRepositoryProjectsSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessRepositoryProjectsSettingInput' }
    )
  },
  get UpdateBusinessMembersCanChangeRepositoryVisibilitySettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessMembersCanChangeRepositoryVisibilitySettingInput' }
    )
  },
  get UpdateBusinessMembersCanInviteCollaboratorsSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessMembersCanInviteCollaboratorsSettingInput' }
    )
  },
  get UpdateBusinessMembersCanDeleteRepositoriesSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessMembersCanDeleteRepositoriesSettingInput' }
    )
  },
  get UpdateBusinessTwoFactorAuthenticationRequiredSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessTwoFactorAuthenticationRequiredSettingInput' }
    )
  },
  get UpdateBusinessMembersCanDeleteIssuesSettingInput() {
    return new InputNode(
      {
        get businessId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBusinessMembersCanDeleteIssuesSettingInput' }
    )
  },
  get RemoveOutsideCollaboratorPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get removedUser() {
          return new FieldNode(types_github.User, null, true)
        },
      },
      { name: 'RemoveOutsideCollaboratorPayload' }
    )
  },
  get RemoveOutsideCollaboratorInput() {
    return new InputNode(
      {
        get userId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get organizationId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RemoveOutsideCollaboratorInput' }
    )
  },
  get RequestReviewsPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get pullRequest() {
          return new FieldNode(types_github.PullRequest, null, true)
        },
        get requestedReviewersEdge() {
          return new FieldNode(types_github.UserEdge, null, true)
        },
      },
      { name: 'RequestReviewsPayload' }
    )
  },
  get RequestReviewsInput() {
    return new InputNode(
      {
        get pullRequestId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get userIds() {
          return new FieldNode(new ArrayNode(types_github.ID, true), null, true)
        },
        get teamIds() {
          return new FieldNode(new ArrayNode(types_github.ID, true), null, true)
        },
        get union() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RequestReviewsInput' }
    )
  },
  get AddStarPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get starrable() {
          return new FieldNode(types_github.Starrable, null, true)
        },
      },
      { name: 'AddStarPayload' }
    )
  },
  get AddStarInput() {
    return new InputNode(
      {
        get starrableId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AddStarInput' }
    )
  },
  get RemoveStarPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get starrable() {
          return new FieldNode(types_github.Starrable, null, true)
        },
      },
      { name: 'RemoveStarPayload' }
    )
  },
  get RemoveStarInput() {
    return new InputNode(
      {
        get starrableId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'RemoveStarInput' }
    )
  },
  get AcceptTopicSuggestionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get topic() {
          return new FieldNode(types_github.Topic, null, true)
        },
      },
      { name: 'AcceptTopicSuggestionPayload' }
    )
  },
  get AcceptTopicSuggestionInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'AcceptTopicSuggestionInput' }
    )
  },
  get DeclineTopicSuggestionPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get topic() {
          return new FieldNode(types_github.Topic, null, true)
        },
      },
      { name: 'DeclineTopicSuggestionPayload' }
    )
  },
  get DeclineTopicSuggestionInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get reason() {
          return new FieldNode(
            types_github.TopicSuggestionDeclineReason,
            null,
            false
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeclineTopicSuggestionInput' }
    )
  },
  get TopicSuggestionDeclineReason() {
    return undefined
  },
  get UpdateTopicsPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get invalidTopicNames() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, true)
        },
      },
      { name: 'UpdateTopicsPayload' }
    )
  },
  get UpdateTopicsInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get topicNames() {
          return new FieldNode(
            new ArrayNode(types_github.String, false),
            null,
            false
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateTopicsInput' }
    )
  },
  get CreateBranchProtectionRulePayload() {
    return new ObjectNode(
      {
        get branchProtectionRule() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'CreateBranchProtectionRulePayload' }
    )
  },
  get CreateBranchProtectionRuleInput() {
    return new InputNode(
      {
        get repositoryId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pattern() {
          return new FieldNode(types_github.String, null, false)
        },
        get requiresApprovingReviews() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiredApprovingReviewCount() {
          return new FieldNode(types_github.Int, null, true)
        },
        get requiresCommitSignatures() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get isAdminEnforced() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiresStatusChecks() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiresStrictStatusChecks() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiresCodeOwnerReviews() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get dismissesStaleReviews() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get restrictsReviewDismissals() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get reviewDismissalActorIds() {
          return new FieldNode(new ArrayNode(types_github.ID, true), null, true)
        },
        get restrictsPushes() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get pushActorIds() {
          return new FieldNode(new ArrayNode(types_github.ID, true), null, true)
        },
        get requiredStatusCheckContexts() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'CreateBranchProtectionRuleInput' }
    )
  },
  get UpdateBranchProtectionRulePayload() {
    return new ObjectNode(
      {
        get branchProtectionRule() {
          return new FieldNode(types_github.BranchProtectionRule, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBranchProtectionRulePayload' }
    )
  },
  get UpdateBranchProtectionRuleInput() {
    return new InputNode(
      {
        get branchProtectionRuleId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get pattern() {
          return new FieldNode(types_github.String, null, true)
        },
        get requiresApprovingReviews() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiredApprovingReviewCount() {
          return new FieldNode(types_github.Int, null, true)
        },
        get requiresCommitSignatures() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get isAdminEnforced() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiresStatusChecks() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiresStrictStatusChecks() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get requiresCodeOwnerReviews() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get dismissesStaleReviews() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get restrictsReviewDismissals() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get reviewDismissalActorIds() {
          return new FieldNode(new ArrayNode(types_github.ID, true), null, true)
        },
        get restrictsPushes() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get pushActorIds() {
          return new FieldNode(new ArrayNode(types_github.ID, true), null, true)
        },
        get requiredStatusCheckContexts() {
          return new FieldNode(
            new ArrayNode(types_github.String, true),
            null,
            true
          )
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'UpdateBranchProtectionRuleInput' }
    )
  },
  get DeleteBranchProtectionRulePayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeleteBranchProtectionRulePayload' }
    )
  },
  get DeleteBranchProtectionRuleInput() {
    return new InputNode(
      {
        get branchProtectionRuleId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'DeleteBranchProtectionRuleInput' }
    )
  },
  get ChangeUserStatusPayload() {
    return new ObjectNode(
      {
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
        get status() {
          return new FieldNode(types_github.UserStatus, null, true)
        },
      },
      { name: 'ChangeUserStatusPayload' }
    )
  },
  get ChangeUserStatusInput() {
    return new InputNode(
      {
        get emoji() {
          return new FieldNode(types_github.String, null, true)
        },
        get message() {
          return new FieldNode(types_github.String, null, true)
        },
        get organizationId() {
          return new FieldNode(types_github.ID, null, true)
        },
        get limitedAvailability() {
          return new FieldNode(types_github.Boolean, null, true)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
        },
      },
      { name: 'ChangeUserStatusInput' }
    )
  },
  get ContentAttachment() {
    return new ObjectNode(
      {
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get contentReference() {
          return new FieldNode(types_github.ContentReference, null, false)
        },
        get databaseId() {
          return new FieldNode(types_github.Int, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'ContentAttachment' }
    )
  },
  get ContentReference() {
    return new ObjectNode(
      {
        get databaseId() {
          return new FieldNode(types_github.Int, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get reference() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: 'ContentReference' }
    )
  },
  get CreateContentAttachmentInput() {
    return new InputNode(
      {
        get contentReferenceId() {
          return new FieldNode(types_github.ID, null, false)
        },
        get title() {
          return new FieldNode(types_github.String, null, false)
        },
        get body() {
          return new FieldNode(types_github.String, null, false)
        },
        get clientMutationId() {
          return new FieldNode(types_github.String, null, true)
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
            new ArrayNode(types_github.__Directive, false),
            null,
            false
          )
        },
        get mutationType() {
          return new FieldNode(types_github.__Type, null, true)
        },
        get queryType() {
          return new FieldNode(types_github.__Type, null, false)
        },
        get subscriptionType() {
          return new FieldNode(types_github.__Type, null, true)
        },
        get types() {
          return new FieldNode(
            new ArrayNode(types_github.__Type, false),
            null,
            false
          )
        },
      },
      { name: '__Schema' }
    )
  },
  get __Type() {
    return new ObjectNode(
      {
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(types_github.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(types_github.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(types_github.Boolean, true)
              },
            }),
            true
          )
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(types_github.__InputValue, true),
            null,
            true
          )
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(types_github.__Type, true),
            null,
            true
          )
        },
        get kind() {
          return new FieldNode(types_github.__TypeKind, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, true)
        },
        get ofType() {
          return new FieldNode(types_github.__Type, null, true)
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(types_github.__Type, true),
            null,
            true
          )
        },
      },
      { name: '__Type' }
    )
  },
  get __Field() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(types_github.__InputValue, false),
            null,
            false
          )
        },
        get deprecationReason() {
          return new FieldNode(types_github.String, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get isDeprecated() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get type() {
          return new FieldNode(types_github.__Type, null, false)
        },
      },
      { name: '__Field' }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get args() {
          return new FieldNode(
            new ArrayNode(types_github.__InputValue, false),
            null,
            false
          )
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(types_github.__DirectiveLocation, false),
            null,
            false
          )
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get onField() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get onFragment() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get onOperation() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: '__Directive' }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get deprecationReason() {
          return new FieldNode(types_github.String, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get isDeprecated() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
      },
      { name: '__EnumValue' }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get defaultValue() {
          return new FieldNode(types_github.String, null, true)
        },
        get description() {
          return new FieldNode(types_github.String, null, true)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get type() {
          return new FieldNode(types_github.__Type, null, false)
        },
      },
      { name: '__InputValue' }
    )
  },
  get __TypeKind() {
    return undefined
  },
  get __DirectiveLocation() {
    return undefined
  },
  get GpgSignature() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(types_github.String, null, false)
        },
        get isValid() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get keyId() {
          return new FieldNode(types_github.String, null, true)
        },
        get payload() {
          return new FieldNode(types_github.String, null, false)
        },
        get signature() {
          return new FieldNode(types_github.String, null, false)
        },
        get signer() {
          return new FieldNode(types_github.User, null, true)
        },
        get state() {
          return new FieldNode(types_github.GitSignatureState, null, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'GpgSignature' }
    )
  },
  get SmimeSignature() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(types_github.String, null, false)
        },
        get isValid() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get payload() {
          return new FieldNode(types_github.String, null, false)
        },
        get signature() {
          return new FieldNode(types_github.String, null, false)
        },
        get signer() {
          return new FieldNode(types_github.User, null, true)
        },
        get state() {
          return new FieldNode(types_github.GitSignatureState, null, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'SmimeSignature' }
    )
  },
  get Tag() {
    return new ObjectNode(
      {
        get abbreviatedOid() {
          return new FieldNode(types_github.String, null, false)
        },
        get commitResourcePath() {
          return new FieldNode(types_github.URI, null, false)
        },
        get commitUrl() {
          return new FieldNode(types_github.URI, null, false)
        },
        get id() {
          return new FieldNode(types_github.ID, null, false)
        },
        get message() {
          return new FieldNode(types_github.String, null, true)
        },
        get name() {
          return new FieldNode(types_github.String, null, false)
        },
        get oid() {
          return new FieldNode(types_github.GitObjectID, null, false)
        },
        get repository() {
          return new FieldNode(types_github.Repository, null, false)
        },
        get tagger() {
          return new FieldNode(types_github.GitActor, null, true)
        },
        get target() {
          return new FieldNode(types_github.GitObject, null, false)
        },
      },
      { name: 'Tag' }
    )
  },
  get UnknownSignature() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(types_github.String, null, false)
        },
        get isValid() {
          return new FieldNode(types_github.Boolean, null, false)
        },
        get payload() {
          return new FieldNode(types_github.String, null, false)
        },
        get signature() {
          return new FieldNode(types_github.String, null, false)
        },
        get signer() {
          return new FieldNode(types_github.User, null, true)
        },
        get state() {
          return new FieldNode(types_github.GitSignatureState, null, false)
        },
        get wasSignedByGitHub() {
          return new FieldNode(types_github.Boolean, null, false)
        },
      },
      { name: 'UnknownSignature' }
    )
  },
}
