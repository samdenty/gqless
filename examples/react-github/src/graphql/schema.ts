import * as extensions from './extensions'
import { TypeData, createSchema } from 'gqless'

/** @type InputObject */
export type AcceptEnterpriseAdministratorInvitationInput = TypeData<
  typeof schema,
  'AcceptEnterpriseAdministratorInvitationInput!'
>

/** @type Object */
export type AcceptEnterpriseAdministratorInvitationPayload = TypeData<
  typeof schema,
  'AcceptEnterpriseAdministratorInvitationPayload!'
>

/** @type InputObject */
export type AcceptTopicSuggestionInput = TypeData<
  typeof schema,
  'AcceptTopicSuggestionInput!'
>

/** @type Object */
export type AcceptTopicSuggestionPayload = TypeData<
  typeof schema,
  'AcceptTopicSuggestionPayload!'
>

export enum ActionExecutionCapabilitySetting {
  DISABLED,
  ALL_ACTIONS,
  LOCAL_ACTIONS_ONLY,
  NO_POLICY,
}

/** @type Interface */
export type Actor = TypeData<typeof schema, 'Actor!'>

/** @type Object */
export type ActorLocation = TypeData<typeof schema, 'ActorLocation!'>

/** @type InputObject */
export type AddAssigneesToAssignableInput = TypeData<
  typeof schema,
  'AddAssigneesToAssignableInput!'
>

/** @type Object */
export type AddAssigneesToAssignablePayload = TypeData<
  typeof schema,
  'AddAssigneesToAssignablePayload!'
>

/** @type InputObject */
export type AddCommentInput = TypeData<typeof schema, 'AddCommentInput!'>

/** @type Object */
export type AddCommentPayload = TypeData<typeof schema, 'AddCommentPayload!'>

/** @type InputObject */
export type AddLabelsToLabelableInput = TypeData<
  typeof schema,
  'AddLabelsToLabelableInput!'
>

/** @type Object */
export type AddLabelsToLabelablePayload = TypeData<
  typeof schema,
  'AddLabelsToLabelablePayload!'
>

/** @type InputObject */
export type AddProjectCardInput = TypeData<
  typeof schema,
  'AddProjectCardInput!'
>

/** @type Object */
export type AddProjectCardPayload = TypeData<
  typeof schema,
  'AddProjectCardPayload!'
>

/** @type InputObject */
export type AddProjectColumnInput = TypeData<
  typeof schema,
  'AddProjectColumnInput!'
>

/** @type Object */
export type AddProjectColumnPayload = TypeData<
  typeof schema,
  'AddProjectColumnPayload!'
>

/** @type InputObject */
export type AddPullRequestReviewCommentInput = TypeData<
  typeof schema,
  'AddPullRequestReviewCommentInput!'
>

/** @type Object */
export type AddPullRequestReviewCommentPayload = TypeData<
  typeof schema,
  'AddPullRequestReviewCommentPayload!'
>

/** @type InputObject */
export type AddPullRequestReviewInput = TypeData<
  typeof schema,
  'AddPullRequestReviewInput!'
>

/** @type Object */
export type AddPullRequestReviewPayload = TypeData<
  typeof schema,
  'AddPullRequestReviewPayload!'
>

/** @type InputObject */
export type AddPullRequestReviewThreadInput = TypeData<
  typeof schema,
  'AddPullRequestReviewThreadInput!'
>

/** @type Object */
export type AddPullRequestReviewThreadPayload = TypeData<
  typeof schema,
  'AddPullRequestReviewThreadPayload!'
>

/** @type InputObject */
export type AddReactionInput = TypeData<typeof schema, 'AddReactionInput!'>

/** @type Object */
export type AddReactionPayload = TypeData<typeof schema, 'AddReactionPayload!'>

/** @type InputObject */
export type AddStarInput = TypeData<typeof schema, 'AddStarInput!'>

/** @type Object */
export type AddStarPayload = TypeData<typeof schema, 'AddStarPayload!'>

/**
 * @type Object
 * @implements Node
 */
export type AddedToProjectEvent = TypeData<
  typeof schema,
  'AddedToProjectEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type App = TypeData<typeof schema, 'App!'>

/** @type InputObject */
export type ArchiveRepositoryInput = TypeData<
  typeof schema,
  'ArchiveRepositoryInput!'
>

/** @type Object */
export type ArchiveRepositoryPayload = TypeData<
  typeof schema,
  'ArchiveRepositoryPayload!'
>

/** @type Interface */
export type Assignable = TypeData<typeof schema, 'Assignable!'>

/**
 * @type Object
 * @implements Node
 */
export type AssignedEvent = TypeData<typeof schema, 'AssignedEvent!'>

/** @type Union */
export type Assignee = TypeData<typeof schema, 'Assignee!'>

/** @type Interface */
export type AuditEntry = TypeData<typeof schema, 'AuditEntry!'>

/** @type Union */
export type AuditEntryActor = TypeData<typeof schema, 'AuditEntryActor!'>

/** @type InputObject */
export type AuditLogOrder = TypeData<typeof schema, 'AuditLogOrder!'>

export enum AuditLogOrderField {
  CREATED_AT,
}

/**
 * @type Object
 * @implements Node
 */
export type AutomaticBaseChangeFailedEvent = TypeData<
  typeof schema,
  'AutomaticBaseChangeFailedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type AutomaticBaseChangeSucceededEvent = TypeData<
  typeof schema,
  'AutomaticBaseChangeSucceededEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type BaseRefChangedEvent = TypeData<
  typeof schema,
  'BaseRefChangedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type BaseRefDeletedEvent = TypeData<
  typeof schema,
  'BaseRefDeletedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type BaseRefForcePushedEvent = TypeData<
  typeof schema,
  'BaseRefForcePushedEvent!'
>

/** @type Object */
export type Blame = TypeData<typeof schema, 'Blame!'>

/** @type Object */
export type BlameRange = TypeData<typeof schema, 'BlameRange!'>

/**
 * @type Object
 * @implements Node, GitObject
 */
export type Blob = TypeData<typeof schema, 'Blob!'>

/** @type Scalar */
export type Boolean = TypeData<typeof schema, 'Boolean!'>

/**
 * @type Object
 * @implements Node, Actor, UniformResourceLocatable
 */
export type Bot = TypeData<typeof schema, 'Bot!'>

/**
 * @type Object
 * @implements Node
 */
export type BranchProtectionRule = TypeData<
  typeof schema,
  'BranchProtectionRule!'
>

/** @type Object */
export type BranchProtectionRuleConflict = TypeData<
  typeof schema,
  'BranchProtectionRuleConflict!'
>

/** @type Object */
export type BranchProtectionRuleConflictConnection = TypeData<
  typeof schema,
  'BranchProtectionRuleConflictConnection!'
>

/** @type Object */
export type BranchProtectionRuleConflictEdge = TypeData<
  typeof schema,
  'BranchProtectionRuleConflictEdge!'
>

/** @type Object */
export type BranchProtectionRuleConnection = TypeData<
  typeof schema,
  'BranchProtectionRuleConnection!'
>

/** @type Object */
export type BranchProtectionRuleEdge = TypeData<
  typeof schema,
  'BranchProtectionRuleEdge!'
>

/** @type InputObject */
export type CancelEnterpriseAdminInvitationInput = TypeData<
  typeof schema,
  'CancelEnterpriseAdminInvitationInput!'
>

/** @type Object */
export type CancelEnterpriseAdminInvitationPayload = TypeData<
  typeof schema,
  'CancelEnterpriseAdminInvitationPayload!'
>

/** @type InputObject */
export type ChangeUserStatusInput = TypeData<
  typeof schema,
  'ChangeUserStatusInput!'
>

/** @type Object */
export type ChangeUserStatusPayload = TypeData<
  typeof schema,
  'ChangeUserStatusPayload!'
>

/** @type Object */
export type CheckAnnotation = TypeData<typeof schema, 'CheckAnnotation!'>

/** @type Object */
export type CheckAnnotationConnection = TypeData<
  typeof schema,
  'CheckAnnotationConnection!'
>

/** @type InputObject */
export type CheckAnnotationData = TypeData<
  typeof schema,
  'CheckAnnotationData!'
>

/** @type Object */
export type CheckAnnotationEdge = TypeData<
  typeof schema,
  'CheckAnnotationEdge!'
>

export enum CheckAnnotationLevel {
  FAILURE,
  NOTICE,
  WARNING,
}

/** @type Object */
export type CheckAnnotationPosition = TypeData<
  typeof schema,
  'CheckAnnotationPosition!'
>

/** @type InputObject */
export type CheckAnnotationRange = TypeData<
  typeof schema,
  'CheckAnnotationRange!'
>

/** @type Object */
export type CheckAnnotationSpan = TypeData<
  typeof schema,
  'CheckAnnotationSpan!'
>

export enum CheckConclusionState {
  ACTION_REQUIRED,
  TIMED_OUT,
  CANCELLED,
  FAILURE,
  SUCCESS,
  NEUTRAL,
  SKIPPED,
  STALE,
}

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type CheckRun = TypeData<typeof schema, 'CheckRun!'>

/** @type InputObject */
export type CheckRunAction = TypeData<typeof schema, 'CheckRunAction!'>

/** @type Object */
export type CheckRunConnection = TypeData<typeof schema, 'CheckRunConnection!'>

/** @type Object */
export type CheckRunEdge = TypeData<typeof schema, 'CheckRunEdge!'>

/** @type InputObject */
export type CheckRunFilter = TypeData<typeof schema, 'CheckRunFilter!'>

/** @type InputObject */
export type CheckRunOutput = TypeData<typeof schema, 'CheckRunOutput!'>

/** @type InputObject */
export type CheckRunOutputImage = TypeData<
  typeof schema,
  'CheckRunOutputImage!'
>

export enum CheckRunType {
  ALL,
  LATEST,
}

export enum CheckStatusState {
  QUEUED,
  IN_PROGRESS,
  COMPLETED,
  REQUESTED,
}

/**
 * @type Object
 * @implements Node
 */
export type CheckSuite = TypeData<typeof schema, 'CheckSuite!'>

/** @type InputObject */
export type CheckSuiteAutoTriggerPreference = TypeData<
  typeof schema,
  'CheckSuiteAutoTriggerPreference!'
>

/** @type Object */
export type CheckSuiteConnection = TypeData<
  typeof schema,
  'CheckSuiteConnection!'
>

/** @type Object */
export type CheckSuiteEdge = TypeData<typeof schema, 'CheckSuiteEdge!'>

/** @type InputObject */
export type CheckSuiteFilter = TypeData<typeof schema, 'CheckSuiteFilter!'>

/** @type InputObject */
export type ClearLabelsFromLabelableInput = TypeData<
  typeof schema,
  'ClearLabelsFromLabelableInput!'
>

/** @type Object */
export type ClearLabelsFromLabelablePayload = TypeData<
  typeof schema,
  'ClearLabelsFromLabelablePayload!'
>

/** @type InputObject */
export type CloneProjectInput = TypeData<typeof schema, 'CloneProjectInput!'>

/** @type Object */
export type CloneProjectPayload = TypeData<
  typeof schema,
  'CloneProjectPayload!'
>

/** @type InputObject */
export type CloneTemplateRepositoryInput = TypeData<
  typeof schema,
  'CloneTemplateRepositoryInput!'
>

/** @type Object */
export type CloneTemplateRepositoryPayload = TypeData<
  typeof schema,
  'CloneTemplateRepositoryPayload!'
>

/** @type Interface */
export type Closable = TypeData<typeof schema, 'Closable!'>

/** @type InputObject */
export type CloseIssueInput = TypeData<typeof schema, 'CloseIssueInput!'>

/** @type Object */
export type CloseIssuePayload = TypeData<typeof schema, 'CloseIssuePayload!'>

/** @type InputObject */
export type ClosePullRequestInput = TypeData<
  typeof schema,
  'ClosePullRequestInput!'
>

/** @type Object */
export type ClosePullRequestPayload = TypeData<
  typeof schema,
  'ClosePullRequestPayload!'
>

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type ClosedEvent = TypeData<typeof schema, 'ClosedEvent!'>

/** @type Union */
export type Closer = TypeData<typeof schema, 'Closer!'>

/**
 * @type Object
 * @implements Node
 */
export type CodeOfConduct = TypeData<typeof schema, 'CodeOfConduct!'>

export enum CollaboratorAffiliation {
  OUTSIDE,
  DIRECT,
  ALL,
}

/** @type Interface */
export type Comment = TypeData<typeof schema, 'Comment!'>

export enum CommentAuthorAssociation {
  MEMBER,
  OWNER,
  MANNEQUIN,
  COLLABORATOR,
  CONTRIBUTOR,
  FIRST_TIME_CONTRIBUTOR,
  FIRST_TIMER,
  NONE,
}

export enum CommentCannotUpdateReason {
  ARCHIVED,
  INSUFFICIENT_ACCESS,
  LOCKED,
  LOGIN_REQUIRED,
  MAINTENANCE,
  VERIFIED_EMAIL_REQUIRED,
  DENIED,
}

/**
 * @type Object
 * @implements Node
 */
export type CommentDeletedEvent = TypeData<
  typeof schema,
  'CommentDeletedEvent!'
>

/**
 * @type Object
 * @implements Node, GitObject, Subscribable, UniformResourceLocatable
 */
export type Commit = TypeData<typeof schema, 'Commit!'>

/** @type InputObject */
export type CommitAuthor = TypeData<typeof schema, 'CommitAuthor!'>

/**
 * @type Object
 * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type CommitComment = TypeData<typeof schema, 'CommitComment!'>

/** @type Object */
export type CommitCommentConnection = TypeData<
  typeof schema,
  'CommitCommentConnection!'
>

/** @type Object */
export type CommitCommentEdge = TypeData<typeof schema, 'CommitCommentEdge!'>

/**
 * @type Object
 * @implements Node, RepositoryNode
 */
export type CommitCommentThread = TypeData<
  typeof schema,
  'CommitCommentThread!'
>

/** @type Object */
export type CommitConnection = TypeData<typeof schema, 'CommitConnection!'>

/** @type InputObject */
export type CommitContributionOrder = TypeData<
  typeof schema,
  'CommitContributionOrder!'
>

export enum CommitContributionOrderField {
  OCCURRED_AT,
  COMMIT_COUNT,
}

/** @type Object */
export type CommitContributionsByRepository = TypeData<
  typeof schema,
  'CommitContributionsByRepository!'
>

/** @type Object */
export type CommitEdge = TypeData<typeof schema, 'CommitEdge!'>

/** @type Object */
export type CommitHistoryConnection = TypeData<
  typeof schema,
  'CommitHistoryConnection!'
>

/**
 * @type Object
 * @implements Node
 */
export type ConnectedEvent = TypeData<typeof schema, 'ConnectedEvent!'>

/** @type Interface */
export type Contribution = TypeData<typeof schema, 'Contribution!'>

/** @type Object */
export type ContributionCalendar = TypeData<
  typeof schema,
  'ContributionCalendar!'
>

/** @type Object */
export type ContributionCalendarDay = TypeData<
  typeof schema,
  'ContributionCalendarDay!'
>

/** @type Object */
export type ContributionCalendarMonth = TypeData<
  typeof schema,
  'ContributionCalendarMonth!'
>

/** @type Object */
export type ContributionCalendarWeek = TypeData<
  typeof schema,
  'ContributionCalendarWeek!'
>

/** @type InputObject */
export type ContributionOrder = TypeData<typeof schema, 'ContributionOrder!'>

/** @type Object */
export type ContributionsCollection = TypeData<
  typeof schema,
  'ContributionsCollection!'
>

/** @type InputObject */
export type ConvertProjectCardNoteToIssueInput = TypeData<
  typeof schema,
  'ConvertProjectCardNoteToIssueInput!'
>

/** @type Object */
export type ConvertProjectCardNoteToIssuePayload = TypeData<
  typeof schema,
  'ConvertProjectCardNoteToIssuePayload!'
>

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type ConvertToDraftEvent = TypeData<
  typeof schema,
  'ConvertToDraftEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type ConvertedNoteToIssueEvent = TypeData<
  typeof schema,
  'ConvertedNoteToIssueEvent!'
>

/** @type InputObject */
export type CreateBranchProtectionRuleInput = TypeData<
  typeof schema,
  'CreateBranchProtectionRuleInput!'
>

/** @type Object */
export type CreateBranchProtectionRulePayload = TypeData<
  typeof schema,
  'CreateBranchProtectionRulePayload!'
>

/** @type InputObject */
export type CreateCheckRunInput = TypeData<
  typeof schema,
  'CreateCheckRunInput!'
>

/** @type Object */
export type CreateCheckRunPayload = TypeData<
  typeof schema,
  'CreateCheckRunPayload!'
>

/** @type InputObject */
export type CreateCheckSuiteInput = TypeData<
  typeof schema,
  'CreateCheckSuiteInput!'
>

/** @type Object */
export type CreateCheckSuitePayload = TypeData<
  typeof schema,
  'CreateCheckSuitePayload!'
>

/** @type InputObject */
export type CreateEnterpriseOrganizationInput = TypeData<
  typeof schema,
  'CreateEnterpriseOrganizationInput!'
>

/** @type Object */
export type CreateEnterpriseOrganizationPayload = TypeData<
  typeof schema,
  'CreateEnterpriseOrganizationPayload!'
>

/** @type InputObject */
export type CreateIpAllowListEntryInput = TypeData<
  typeof schema,
  'CreateIpAllowListEntryInput!'
>

/** @type Object */
export type CreateIpAllowListEntryPayload = TypeData<
  typeof schema,
  'CreateIpAllowListEntryPayload!'
>

/** @type InputObject */
export type CreateIssueInput = TypeData<typeof schema, 'CreateIssueInput!'>

/** @type Object */
export type CreateIssuePayload = TypeData<typeof schema, 'CreateIssuePayload!'>

/** @type InputObject */
export type CreateProjectInput = TypeData<typeof schema, 'CreateProjectInput!'>

/** @type Object */
export type CreateProjectPayload = TypeData<
  typeof schema,
  'CreateProjectPayload!'
>

/** @type InputObject */
export type CreatePullRequestInput = TypeData<
  typeof schema,
  'CreatePullRequestInput!'
>

/** @type Object */
export type CreatePullRequestPayload = TypeData<
  typeof schema,
  'CreatePullRequestPayload!'
>

/** @type InputObject */
export type CreateRefInput = TypeData<typeof schema, 'CreateRefInput!'>

/** @type Object */
export type CreateRefPayload = TypeData<typeof schema, 'CreateRefPayload!'>

/** @type InputObject */
export type CreateRepositoryInput = TypeData<
  typeof schema,
  'CreateRepositoryInput!'
>

/** @type Object */
export type CreateRepositoryPayload = TypeData<
  typeof schema,
  'CreateRepositoryPayload!'
>

/** @type InputObject */
export type CreateTeamDiscussionCommentInput = TypeData<
  typeof schema,
  'CreateTeamDiscussionCommentInput!'
>

/** @type Object */
export type CreateTeamDiscussionCommentPayload = TypeData<
  typeof schema,
  'CreateTeamDiscussionCommentPayload!'
>

/** @type InputObject */
export type CreateTeamDiscussionInput = TypeData<
  typeof schema,
  'CreateTeamDiscussionInput!'
>

/** @type Object */
export type CreateTeamDiscussionPayload = TypeData<
  typeof schema,
  'CreateTeamDiscussionPayload!'
>

/**
 * @type Object
 * @implements Contribution
 */
export type CreatedCommitContribution = TypeData<
  typeof schema,
  'CreatedCommitContribution!'
>

/** @type Object */
export type CreatedCommitContributionConnection = TypeData<
  typeof schema,
  'CreatedCommitContributionConnection!'
>

/** @type Object */
export type CreatedCommitContributionEdge = TypeData<
  typeof schema,
  'CreatedCommitContributionEdge!'
>

/**
 * @type Object
 * @implements Contribution
 */
export type CreatedIssueContribution = TypeData<
  typeof schema,
  'CreatedIssueContribution!'
>

/** @type Object */
export type CreatedIssueContributionConnection = TypeData<
  typeof schema,
  'CreatedIssueContributionConnection!'
>

/** @type Object */
export type CreatedIssueContributionEdge = TypeData<
  typeof schema,
  'CreatedIssueContributionEdge!'
>

/** @type Union */
export type CreatedIssueOrRestrictedContribution = TypeData<
  typeof schema,
  'CreatedIssueOrRestrictedContribution!'
>

/**
 * @type Object
 * @implements Contribution
 */
export type CreatedPullRequestContribution = TypeData<
  typeof schema,
  'CreatedPullRequestContribution!'
>

/** @type Object */
export type CreatedPullRequestContributionConnection = TypeData<
  typeof schema,
  'CreatedPullRequestContributionConnection!'
>

/** @type Object */
export type CreatedPullRequestContributionEdge = TypeData<
  typeof schema,
  'CreatedPullRequestContributionEdge!'
>

/** @type Union */
export type CreatedPullRequestOrRestrictedContribution = TypeData<
  typeof schema,
  'CreatedPullRequestOrRestrictedContribution!'
>

/**
 * @type Object
 * @implements Contribution
 */
export type CreatedPullRequestReviewContribution = TypeData<
  typeof schema,
  'CreatedPullRequestReviewContribution!'
>

/** @type Object */
export type CreatedPullRequestReviewContributionConnection = TypeData<
  typeof schema,
  'CreatedPullRequestReviewContributionConnection!'
>

/** @type Object */
export type CreatedPullRequestReviewContributionEdge = TypeData<
  typeof schema,
  'CreatedPullRequestReviewContributionEdge!'
>

/**
 * @type Object
 * @implements Contribution
 */
export type CreatedRepositoryContribution = TypeData<
  typeof schema,
  'CreatedRepositoryContribution!'
>

/** @type Object */
export type CreatedRepositoryContributionConnection = TypeData<
  typeof schema,
  'CreatedRepositoryContributionConnection!'
>

/** @type Object */
export type CreatedRepositoryContributionEdge = TypeData<
  typeof schema,
  'CreatedRepositoryContributionEdge!'
>

/** @type Union */
export type CreatedRepositoryOrRestrictedContribution = TypeData<
  typeof schema,
  'CreatedRepositoryOrRestrictedContribution!'
>

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type CrossReferencedEvent = TypeData<
  typeof schema,
  'CrossReferencedEvent!'
>

/** @type Scalar */
export type Date = TypeData<typeof schema, 'Date!'>

/** @type Scalar */
export type DateTime = TypeData<typeof schema, 'DateTime!'>

/** @type InputObject */
export type DeclineTopicSuggestionInput = TypeData<
  typeof schema,
  'DeclineTopicSuggestionInput!'
>

/** @type Object */
export type DeclineTopicSuggestionPayload = TypeData<
  typeof schema,
  'DeclineTopicSuggestionPayload!'
>

export enum DefaultRepositoryPermissionField {
  NONE,
  READ,
  WRITE,
  ADMIN,
}

/** @type Interface */
export type Deletable = TypeData<typeof schema, 'Deletable!'>

/** @type InputObject */
export type DeleteBranchProtectionRuleInput = TypeData<
  typeof schema,
  'DeleteBranchProtectionRuleInput!'
>

/** @type Object */
export type DeleteBranchProtectionRulePayload = TypeData<
  typeof schema,
  'DeleteBranchProtectionRulePayload!'
>

/** @type InputObject */
export type DeleteDeploymentInput = TypeData<
  typeof schema,
  'DeleteDeploymentInput!'
>

/** @type Object */
export type DeleteDeploymentPayload = TypeData<
  typeof schema,
  'DeleteDeploymentPayload!'
>

/** @type InputObject */
export type DeleteIpAllowListEntryInput = TypeData<
  typeof schema,
  'DeleteIpAllowListEntryInput!'
>

/** @type Object */
export type DeleteIpAllowListEntryPayload = TypeData<
  typeof schema,
  'DeleteIpAllowListEntryPayload!'
>

/** @type InputObject */
export type DeleteIssueCommentInput = TypeData<
  typeof schema,
  'DeleteIssueCommentInput!'
>

/** @type Object */
export type DeleteIssueCommentPayload = TypeData<
  typeof schema,
  'DeleteIssueCommentPayload!'
>

/** @type InputObject */
export type DeleteIssueInput = TypeData<typeof schema, 'DeleteIssueInput!'>

/** @type Object */
export type DeleteIssuePayload = TypeData<typeof schema, 'DeleteIssuePayload!'>

/** @type InputObject */
export type DeleteProjectCardInput = TypeData<
  typeof schema,
  'DeleteProjectCardInput!'
>

/** @type Object */
export type DeleteProjectCardPayload = TypeData<
  typeof schema,
  'DeleteProjectCardPayload!'
>

/** @type InputObject */
export type DeleteProjectColumnInput = TypeData<
  typeof schema,
  'DeleteProjectColumnInput!'
>

/** @type Object */
export type DeleteProjectColumnPayload = TypeData<
  typeof schema,
  'DeleteProjectColumnPayload!'
>

/** @type InputObject */
export type DeleteProjectInput = TypeData<typeof schema, 'DeleteProjectInput!'>

/** @type Object */
export type DeleteProjectPayload = TypeData<
  typeof schema,
  'DeleteProjectPayload!'
>

/** @type InputObject */
export type DeletePullRequestReviewCommentInput = TypeData<
  typeof schema,
  'DeletePullRequestReviewCommentInput!'
>

/** @type Object */
export type DeletePullRequestReviewCommentPayload = TypeData<
  typeof schema,
  'DeletePullRequestReviewCommentPayload!'
>

/** @type InputObject */
export type DeletePullRequestReviewInput = TypeData<
  typeof schema,
  'DeletePullRequestReviewInput!'
>

/** @type Object */
export type DeletePullRequestReviewPayload = TypeData<
  typeof schema,
  'DeletePullRequestReviewPayload!'
>

/** @type InputObject */
export type DeleteRefInput = TypeData<typeof schema, 'DeleteRefInput!'>

/** @type Object */
export type DeleteRefPayload = TypeData<typeof schema, 'DeleteRefPayload!'>

/** @type InputObject */
export type DeleteTeamDiscussionCommentInput = TypeData<
  typeof schema,
  'DeleteTeamDiscussionCommentInput!'
>

/** @type Object */
export type DeleteTeamDiscussionCommentPayload = TypeData<
  typeof schema,
  'DeleteTeamDiscussionCommentPayload!'
>

/** @type InputObject */
export type DeleteTeamDiscussionInput = TypeData<
  typeof schema,
  'DeleteTeamDiscussionInput!'
>

/** @type Object */
export type DeleteTeamDiscussionPayload = TypeData<
  typeof schema,
  'DeleteTeamDiscussionPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type DemilestonedEvent = TypeData<typeof schema, 'DemilestonedEvent!'>

/**
 * @type Object
 * @implements Node
 */
export type DeployKey = TypeData<typeof schema, 'DeployKey!'>

/** @type Object */
export type DeployKeyConnection = TypeData<
  typeof schema,
  'DeployKeyConnection!'
>

/** @type Object */
export type DeployKeyEdge = TypeData<typeof schema, 'DeployKeyEdge!'>

/**
 * @type Object
 * @implements Node
 */
export type DeployedEvent = TypeData<typeof schema, 'DeployedEvent!'>

/**
 * @type Object
 * @implements Node
 */
export type Deployment = TypeData<typeof schema, 'Deployment!'>

/** @type Object */
export type DeploymentConnection = TypeData<
  typeof schema,
  'DeploymentConnection!'
>

/** @type Object */
export type DeploymentEdge = TypeData<typeof schema, 'DeploymentEdge!'>

/**
 * @type Object
 * @implements Node
 */
export type DeploymentEnvironmentChangedEvent = TypeData<
  typeof schema,
  'DeploymentEnvironmentChangedEvent!'
>

/** @type InputObject */
export type DeploymentOrder = TypeData<typeof schema, 'DeploymentOrder!'>

export enum DeploymentOrderField {
  CREATED_AT,
}

export enum DeploymentState {
  ABANDONED,
  ACTIVE,
  DESTROYED,
  ERROR,
  FAILURE,
  INACTIVE,
  PENDING,
  QUEUED,
  IN_PROGRESS,
}

/**
 * @type Object
 * @implements Node
 */
export type DeploymentStatus = TypeData<typeof schema, 'DeploymentStatus!'>

/** @type Object */
export type DeploymentStatusConnection = TypeData<
  typeof schema,
  'DeploymentStatusConnection!'
>

/** @type Object */
export type DeploymentStatusEdge = TypeData<
  typeof schema,
  'DeploymentStatusEdge!'
>

export enum DeploymentStatusState {
  PENDING,
  SUCCESS,
  FAILURE,
  INACTIVE,
  ERROR,
  QUEUED,
  IN_PROGRESS,
}

export enum DiffSide {
  LEFT,
  RIGHT,
}

/**
 * @type Object
 * @implements Node
 */
export type DisconnectedEvent = TypeData<typeof schema, 'DisconnectedEvent!'>

/** @type InputObject */
export type DismissPullRequestReviewInput = TypeData<
  typeof schema,
  'DismissPullRequestReviewInput!'
>

/** @type Object */
export type DismissPullRequestReviewPayload = TypeData<
  typeof schema,
  'DismissPullRequestReviewPayload!'
>

/** @type InputObject */
export type DraftPullRequestReviewComment = TypeData<
  typeof schema,
  'DraftPullRequestReviewComment!'
>

/** @type InputObject */
export type DraftPullRequestReviewThread = TypeData<
  typeof schema,
  'DraftPullRequestReviewThread!'
>

/**
 * @type Object
 * @implements Node
 */
export type Enterprise = TypeData<typeof schema, 'Enterprise!'>

/** @type Object */
export type EnterpriseAdministratorConnection = TypeData<
  typeof schema,
  'EnterpriseAdministratorConnection!'
>

/** @type Object */
export type EnterpriseAdministratorEdge = TypeData<
  typeof schema,
  'EnterpriseAdministratorEdge!'
>

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseAdministratorInvitation = TypeData<
  typeof schema,
  'EnterpriseAdministratorInvitation!'
>

/** @type Object */
export type EnterpriseAdministratorInvitationConnection = TypeData<
  typeof schema,
  'EnterpriseAdministratorInvitationConnection!'
>

/** @type Object */
export type EnterpriseAdministratorInvitationEdge = TypeData<
  typeof schema,
  'EnterpriseAdministratorInvitationEdge!'
>

/** @type InputObject */
export type EnterpriseAdministratorInvitationOrder = TypeData<
  typeof schema,
  'EnterpriseAdministratorInvitationOrder!'
>

export enum EnterpriseAdministratorInvitationOrderField {
  CREATED_AT,
}

export enum EnterpriseAdministratorRole {
  OWNER,
  BILLING_MANAGER,
}

/** @type Interface */
export type EnterpriseAuditEntryData = TypeData<
  typeof schema,
  'EnterpriseAuditEntryData!'
>

/** @type Object */
export type EnterpriseBillingInfo = TypeData<
  typeof schema,
  'EnterpriseBillingInfo!'
>

export enum EnterpriseDefaultRepositoryPermissionSettingValue {
  NO_POLICY,
  ADMIN,
  WRITE,
  READ,
  NONE,
}

export enum EnterpriseEnabledDisabledSettingValue {
  ENABLED,
  DISABLED,
  NO_POLICY,
}

export enum EnterpriseEnabledSettingValue {
  ENABLED,
  NO_POLICY,
}

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseIdentityProvider = TypeData<
  typeof schema,
  'EnterpriseIdentityProvider!'
>

/** @type Union */
export type EnterpriseMember = TypeData<typeof schema, 'EnterpriseMember!'>

/** @type Object */
export type EnterpriseMemberConnection = TypeData<
  typeof schema,
  'EnterpriseMemberConnection!'
>

/** @type Object */
export type EnterpriseMemberEdge = TypeData<
  typeof schema,
  'EnterpriseMemberEdge!'
>

/** @type InputObject */
export type EnterpriseMemberOrder = TypeData<
  typeof schema,
  'EnterpriseMemberOrder!'
>

export enum EnterpriseMemberOrderField {
  LOGIN,
  CREATED_AT,
}

export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
  NO_POLICY,
  ALL,
  PUBLIC,
  PRIVATE,
  DISABLED,
}

export enum EnterpriseMembersCanMakePurchasesSettingValue {
  ENABLED,
  DISABLED,
}

/** @type Object */
export type EnterpriseOrganizationMembershipConnection = TypeData<
  typeof schema,
  'EnterpriseOrganizationMembershipConnection!'
>

/** @type Object */
export type EnterpriseOrganizationMembershipEdge = TypeData<
  typeof schema,
  'EnterpriseOrganizationMembershipEdge!'
>

/** @type Object */
export type EnterpriseOutsideCollaboratorConnection = TypeData<
  typeof schema,
  'EnterpriseOutsideCollaboratorConnection!'
>

/** @type Object */
export type EnterpriseOutsideCollaboratorEdge = TypeData<
  typeof schema,
  'EnterpriseOutsideCollaboratorEdge!'
>

/** @type Object */
export type EnterpriseOwnerInfo = TypeData<
  typeof schema,
  'EnterpriseOwnerInfo!'
>

/** @type Object */
export type EnterprisePendingCollaboratorConnection = TypeData<
  typeof schema,
  'EnterprisePendingCollaboratorConnection!'
>

/** @type Object */
export type EnterprisePendingCollaboratorEdge = TypeData<
  typeof schema,
  'EnterprisePendingCollaboratorEdge!'
>

/** @type Object */
export type EnterprisePendingMemberInvitationConnection = TypeData<
  typeof schema,
  'EnterprisePendingMemberInvitationConnection!'
>

/** @type Object */
export type EnterprisePendingMemberInvitationEdge = TypeData<
  typeof schema,
  'EnterprisePendingMemberInvitationEdge!'
>

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseRepositoryInfo = TypeData<
  typeof schema,
  'EnterpriseRepositoryInfo!'
>

/** @type Object */
export type EnterpriseRepositoryInfoConnection = TypeData<
  typeof schema,
  'EnterpriseRepositoryInfoConnection!'
>

/** @type Object */
export type EnterpriseRepositoryInfoEdge = TypeData<
  typeof schema,
  'EnterpriseRepositoryInfoEdge!'
>

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseServerInstallation = TypeData<
  typeof schema,
  'EnterpriseServerInstallation!'
>

/** @type Object */
export type EnterpriseServerInstallationConnection = TypeData<
  typeof schema,
  'EnterpriseServerInstallationConnection!'
>

/** @type Object */
export type EnterpriseServerInstallationEdge = TypeData<
  typeof schema,
  'EnterpriseServerInstallationEdge!'
>

/** @type InputObject */
export type EnterpriseServerInstallationOrder = TypeData<
  typeof schema,
  'EnterpriseServerInstallationOrder!'
>

export enum EnterpriseServerInstallationOrderField {
  HOST_NAME,
  CUSTOMER_NAME,
  CREATED_AT,
}

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseServerUserAccount = TypeData<
  typeof schema,
  'EnterpriseServerUserAccount!'
>

/** @type Object */
export type EnterpriseServerUserAccountConnection = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountConnection!'
>

/** @type Object */
export type EnterpriseServerUserAccountEdge = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountEdge!'
>

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseServerUserAccountEmail = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountEmail!'
>

/** @type Object */
export type EnterpriseServerUserAccountEmailConnection = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountEmailConnection!'
>

/** @type Object */
export type EnterpriseServerUserAccountEmailEdge = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountEmailEdge!'
>

/** @type InputObject */
export type EnterpriseServerUserAccountEmailOrder = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountEmailOrder!'
>

export enum EnterpriseServerUserAccountEmailOrderField {
  EMAIL,
}

/** @type InputObject */
export type EnterpriseServerUserAccountOrder = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountOrder!'
>

export enum EnterpriseServerUserAccountOrderField {
  LOGIN,
  REMOTE_CREATED_AT,
}

/**
 * @type Object
 * @implements Node
 */
export type EnterpriseServerUserAccountsUpload = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountsUpload!'
>

/** @type Object */
export type EnterpriseServerUserAccountsUploadConnection = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountsUploadConnection!'
>

/** @type Object */
export type EnterpriseServerUserAccountsUploadEdge = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountsUploadEdge!'
>

/** @type InputObject */
export type EnterpriseServerUserAccountsUploadOrder = TypeData<
  typeof schema,
  'EnterpriseServerUserAccountsUploadOrder!'
>

export enum EnterpriseServerUserAccountsUploadOrderField {
  CREATED_AT,
}

export enum EnterpriseServerUserAccountsUploadSyncState {
  PENDING,
  SUCCESS,
  FAILURE,
}

/**
 * @type Object
 * @implements Node, Actor
 */
export type EnterpriseUserAccount = TypeData<
  typeof schema,
  'EnterpriseUserAccount!'
>

/** @type Object */
export type EnterpriseUserAccountConnection = TypeData<
  typeof schema,
  'EnterpriseUserAccountConnection!'
>

/** @type Object */
export type EnterpriseUserAccountEdge = TypeData<
  typeof schema,
  'EnterpriseUserAccountEdge!'
>

export enum EnterpriseUserAccountMembershipRole {
  MEMBER,
  OWNER,
}

export enum EnterpriseUserDeployment {
  CLOUD,
  SERVER,
}

/**
 * @type Object
 * @implements Node
 */
export type ExternalIdentity = TypeData<typeof schema, 'ExternalIdentity!'>

/** @type Object */
export type ExternalIdentityConnection = TypeData<
  typeof schema,
  'ExternalIdentityConnection!'
>

/** @type Object */
export type ExternalIdentityEdge = TypeData<
  typeof schema,
  'ExternalIdentityEdge!'
>

/** @type Object */
export type ExternalIdentitySamlAttributes = TypeData<
  typeof schema,
  'ExternalIdentitySamlAttributes!'
>

/** @type Object */
export type ExternalIdentityScimAttributes = TypeData<
  typeof schema,
  'ExternalIdentityScimAttributes!'
>

export enum FileViewedState {
  DISMISSED,
  VIEWED,
  UNVIEWED,
}

/** @type Scalar */
export type Float = TypeData<typeof schema, 'Float!'>

/** @type InputObject */
export type FollowUserInput = TypeData<typeof schema, 'FollowUserInput!'>

/** @type Object */
export type FollowUserPayload = TypeData<typeof schema, 'FollowUserPayload!'>

/** @type Object */
export type FollowerConnection = TypeData<typeof schema, 'FollowerConnection!'>

/** @type Object */
export type FollowingConnection = TypeData<
  typeof schema,
  'FollowingConnection!'
>

/** @type Object */
export type FundingLink = TypeData<typeof schema, 'FundingLink!'>

export enum FundingPlatform {
  GITHUB,
  PATREON,
  OPEN_COLLECTIVE,
  KO_FI,
  TIDELIFT,
  COMMUNITY_BRIDGE,
  LIBERAPAY,
  ISSUEHUNT,
  OTECHIE,
  CUSTOM,
}

/**
 * @type Object
 * @implements HovercardContext
 */
export type GenericHovercardContext = TypeData<
  typeof schema,
  'GenericHovercardContext!'
>

/**
 * @type Object
 * @implements Node, Starrable, UniformResourceLocatable
 */
export type Gist = TypeData<typeof schema, 'Gist!'>

/**
 * @type Object
 * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment
 */
export type GistComment = TypeData<typeof schema, 'GistComment!'>

/** @type Object */
export type GistCommentConnection = TypeData<
  typeof schema,
  'GistCommentConnection!'
>

/** @type Object */
export type GistCommentEdge = TypeData<typeof schema, 'GistCommentEdge!'>

/** @type Object */
export type GistConnection = TypeData<typeof schema, 'GistConnection!'>

/** @type Object */
export type GistEdge = TypeData<typeof schema, 'GistEdge!'>

/** @type Object */
export type GistFile = TypeData<typeof schema, 'GistFile!'>

/** @type InputObject */
export type GistOrder = TypeData<typeof schema, 'GistOrder!'>

export enum GistOrderField {
  CREATED_AT,
  UPDATED_AT,
  PUSHED_AT,
}

export enum GistPrivacy {
  PUBLIC,
  SECRET,
  ALL,
}

/** @type Object */
export type GitActor = TypeData<typeof schema, 'GitActor!'>

/** @type Object */
export type GitActorConnection = TypeData<typeof schema, 'GitActorConnection!'>

/** @type Object */
export type GitActorEdge = TypeData<typeof schema, 'GitActorEdge!'>

/** @type Object */
export type GitHubMetadata = TypeData<typeof schema, 'GitHubMetadata!'>

/** @type Interface */
export type GitObject = TypeData<typeof schema, 'GitObject!'>

/** @type Scalar */
export type GitObjectID = TypeData<typeof schema, 'GitObjectID!'>

/** @type Scalar */
export type GitSSHRemote = TypeData<typeof schema, 'GitSSHRemote!'>

/** @type Interface */
export type GitSignature = TypeData<typeof schema, 'GitSignature!'>

export enum GitSignatureState {
  VALID,
  INVALID,
  MALFORMED_SIG,
  UNKNOWN_KEY,
  BAD_EMAIL,
  UNVERIFIED_EMAIL,
  NO_USER,
  UNKNOWN_SIG_TYPE,
  UNSIGNED,
  GPGVERIFY_UNAVAILABLE,
  GPGVERIFY_ERROR,
  NOT_SIGNING_KEY,
  EXPIRED_KEY,
  OCSP_PENDING,
  OCSP_ERROR,
  BAD_CERT,
  OCSP_REVOKED,
}

/** @type Scalar */
export type GitTimestamp = TypeData<typeof schema, 'GitTimestamp!'>

/**
 * @type Object
 * @implements GitSignature
 */
export type GpgSignature = TypeData<typeof schema, 'GpgSignature!'>

/** @type Scalar */
export type HTML = TypeData<typeof schema, 'HTML!'>

/**
 * @type Object
 * @implements Node
 */
export type HeadRefDeletedEvent = TypeData<
  typeof schema,
  'HeadRefDeletedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type HeadRefForcePushedEvent = TypeData<
  typeof schema,
  'HeadRefForcePushedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type HeadRefRestoredEvent = TypeData<
  typeof schema,
  'HeadRefRestoredEvent!'
>

/** @type Object */
export type Hovercard = TypeData<typeof schema, 'Hovercard!'>

/** @type Interface */
export type HovercardContext = TypeData<typeof schema, 'HovercardContext!'>

/** @type Scalar */
export type ID = TypeData<typeof schema, 'ID!'>

export enum IdentityProviderConfigurationState {
  ENFORCED,
  CONFIGURED,
  UNCONFIGURED,
}

/** @type Scalar */
export type Int = TypeData<typeof schema, 'Int!'>

/** @type InputObject */
export type InviteEnterpriseAdminInput = TypeData<
  typeof schema,
  'InviteEnterpriseAdminInput!'
>

/** @type Object */
export type InviteEnterpriseAdminPayload = TypeData<
  typeof schema,
  'InviteEnterpriseAdminPayload!'
>

export enum IpAllowListEnabledSettingValue {
  ENABLED,
  DISABLED,
}

/**
 * @type Object
 * @implements Node
 */
export type IpAllowListEntry = TypeData<typeof schema, 'IpAllowListEntry!'>

/** @type Object */
export type IpAllowListEntryConnection = TypeData<
  typeof schema,
  'IpAllowListEntryConnection!'
>

/** @type Object */
export type IpAllowListEntryEdge = TypeData<
  typeof schema,
  'IpAllowListEntryEdge!'
>

/** @type InputObject */
export type IpAllowListEntryOrder = TypeData<
  typeof schema,
  'IpAllowListEntryOrder!'
>

export enum IpAllowListEntryOrderField {
  CREATED_AT,
  ALLOW_LIST_VALUE,
}

/** @type Union */
export type IpAllowListOwner = TypeData<typeof schema, 'IpAllowListOwner!'>

/**
 * @type Object
 * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
 */
export type Issue = TypeData<typeof schema, 'Issue!'>

/**
 * @type Object
 * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type IssueComment = TypeData<typeof schema, 'IssueComment!'>

/** @type Object */
export type IssueCommentConnection = TypeData<
  typeof schema,
  'IssueCommentConnection!'
>

/** @type Object */
export type IssueCommentEdge = TypeData<typeof schema, 'IssueCommentEdge!'>

/** @type Object */
export type IssueConnection = TypeData<typeof schema, 'IssueConnection!'>

/** @type Object */
export type IssueContributionsByRepository = TypeData<
  typeof schema,
  'IssueContributionsByRepository!'
>

/** @type Object */
export type IssueEdge = TypeData<typeof schema, 'IssueEdge!'>

/** @type InputObject */
export type IssueFilters = TypeData<typeof schema, 'IssueFilters!'>

/** @type Union */
export type IssueOrPullRequest = TypeData<typeof schema, 'IssueOrPullRequest!'>

/** @type InputObject */
export type IssueOrder = TypeData<typeof schema, 'IssueOrder!'>

export enum IssueOrderField {
  CREATED_AT,
  UPDATED_AT,
  COMMENTS,
}

export enum IssueState {
  OPEN,
  CLOSED,
}

/** @type Object */
export type IssueTemplate = TypeData<typeof schema, 'IssueTemplate!'>

/** @type Object */
export type IssueTimelineConnection = TypeData<
  typeof schema,
  'IssueTimelineConnection!'
>

/** @type Union */
export type IssueTimelineItem = TypeData<typeof schema, 'IssueTimelineItem!'>

/** @type Object */
export type IssueTimelineItemEdge = TypeData<
  typeof schema,
  'IssueTimelineItemEdge!'
>

/** @type Union */
export type IssueTimelineItems = TypeData<typeof schema, 'IssueTimelineItems!'>

/** @type Object */
export type IssueTimelineItemsConnection = TypeData<
  typeof schema,
  'IssueTimelineItemsConnection!'
>

/** @type Object */
export type IssueTimelineItemsEdge = TypeData<
  typeof schema,
  'IssueTimelineItemsEdge!'
>

export enum IssueTimelineItemsItemType {
  ISSUE_COMMENT,
  CROSS_REFERENCED_EVENT,
  ADDED_TO_PROJECT_EVENT,
  ASSIGNED_EVENT,
  CLOSED_EVENT,
  COMMENT_DELETED_EVENT,
  CONNECTED_EVENT,
  CONVERTED_NOTE_TO_ISSUE_EVENT,
  DEMILESTONED_EVENT,
  DISCONNECTED_EVENT,
  LABELED_EVENT,
  LOCKED_EVENT,
  MARKED_AS_DUPLICATE_EVENT,
  MENTIONED_EVENT,
  MILESTONED_EVENT,
  MOVED_COLUMNS_IN_PROJECT_EVENT,
  PINNED_EVENT,
  REFERENCED_EVENT,
  REMOVED_FROM_PROJECT_EVENT,
  RENAMED_TITLE_EVENT,
  REOPENED_EVENT,
  SUBSCRIBED_EVENT,
  TRANSFERRED_EVENT,
  UNASSIGNED_EVENT,
  UNLABELED_EVENT,
  UNLOCKED_EVENT,
  USER_BLOCKED_EVENT,
  UNMARKED_AS_DUPLICATE_EVENT,
  UNPINNED_EVENT,
  UNSUBSCRIBED_EVENT,
}

/**
 * @type Object
 * @implements Contribution
 */
export type JoinedGitHubContribution = TypeData<
  typeof schema,
  'JoinedGitHubContribution!'
>

/**
 * @type Object
 * @implements Node
 */
export type Label = TypeData<typeof schema, 'Label!'>

/** @type Object */
export type LabelConnection = TypeData<typeof schema, 'LabelConnection!'>

/** @type Object */
export type LabelEdge = TypeData<typeof schema, 'LabelEdge!'>

/** @type InputObject */
export type LabelOrder = TypeData<typeof schema, 'LabelOrder!'>

export enum LabelOrderField {
  NAME,
  CREATED_AT,
}

/** @type Interface */
export type Labelable = TypeData<typeof schema, 'Labelable!'>

/**
 * @type Object
 * @implements Node
 */
export type LabeledEvent = TypeData<typeof schema, 'LabeledEvent!'>

/**
 * @type Object
 * @implements Node
 */
export type Language = TypeData<typeof schema, 'Language!'>

/** @type Object */
export type LanguageConnection = TypeData<typeof schema, 'LanguageConnection!'>

/** @type Object */
export type LanguageEdge = TypeData<typeof schema, 'LanguageEdge!'>

/** @type InputObject */
export type LanguageOrder = TypeData<typeof schema, 'LanguageOrder!'>

export enum LanguageOrderField {
  SIZE,
}

/**
 * @type Object
 * @implements Node
 */
export type License = TypeData<typeof schema, 'License!'>

/** @type Object */
export type LicenseRule = TypeData<typeof schema, 'LicenseRule!'>

/** @type InputObject */
export type LinkRepositoryToProjectInput = TypeData<
  typeof schema,
  'LinkRepositoryToProjectInput!'
>

/** @type Object */
export type LinkRepositoryToProjectPayload = TypeData<
  typeof schema,
  'LinkRepositoryToProjectPayload!'
>

/** @type InputObject */
export type LockLockableInput = TypeData<typeof schema, 'LockLockableInput!'>

/** @type Object */
export type LockLockablePayload = TypeData<
  typeof schema,
  'LockLockablePayload!'
>

export enum LockReason {
  OFF_TOPIC,
  TOO_HEATED,
  RESOLVED,
  SPAM,
}

/** @type Interface */
export type Lockable = TypeData<typeof schema, 'Lockable!'>

/**
 * @type Object
 * @implements Node
 */
export type LockedEvent = TypeData<typeof schema, 'LockedEvent!'>

/**
 * @type Object
 * @implements Node, Actor, UniformResourceLocatable
 */
export type Mannequin = TypeData<typeof schema, 'Mannequin!'>

/** @type InputObject */
export type MarkFileAsViewedInput = TypeData<
  typeof schema,
  'MarkFileAsViewedInput!'
>

/** @type Object */
export type MarkFileAsViewedPayload = TypeData<
  typeof schema,
  'MarkFileAsViewedPayload!'
>

/** @type InputObject */
export type MarkPullRequestReadyForReviewInput = TypeData<
  typeof schema,
  'MarkPullRequestReadyForReviewInput!'
>

/** @type Object */
export type MarkPullRequestReadyForReviewPayload = TypeData<
  typeof schema,
  'MarkPullRequestReadyForReviewPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type MarkedAsDuplicateEvent = TypeData<
  typeof schema,
  'MarkedAsDuplicateEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type MarketplaceCategory = TypeData<
  typeof schema,
  'MarketplaceCategory!'
>

/**
 * @type Object
 * @implements Node
 */
export type MarketplaceListing = TypeData<typeof schema, 'MarketplaceListing!'>

/** @type Object */
export type MarketplaceListingConnection = TypeData<
  typeof schema,
  'MarketplaceListingConnection!'
>

/** @type Object */
export type MarketplaceListingEdge = TypeData<
  typeof schema,
  'MarketplaceListingEdge!'
>

/** @type Interface */
export type MemberStatusable = TypeData<typeof schema, 'MemberStatusable!'>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type MembersCanDeleteReposClearAuditEntry = TypeData<
  typeof schema,
  'MembersCanDeleteReposClearAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type MembersCanDeleteReposDisableAuditEntry = TypeData<
  typeof schema,
  'MembersCanDeleteReposDisableAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type MembersCanDeleteReposEnableAuditEntry = TypeData<
  typeof schema,
  'MembersCanDeleteReposEnableAuditEntry!'
>

/**
 * @type Object
 * @implements Node
 */
export type MentionedEvent = TypeData<typeof schema, 'MentionedEvent!'>

/** @type InputObject */
export type MergeBranchInput = TypeData<typeof schema, 'MergeBranchInput!'>

/** @type Object */
export type MergeBranchPayload = TypeData<typeof schema, 'MergeBranchPayload!'>

/** @type InputObject */
export type MergePullRequestInput = TypeData<
  typeof schema,
  'MergePullRequestInput!'
>

/** @type Object */
export type MergePullRequestPayload = TypeData<
  typeof schema,
  'MergePullRequestPayload!'
>

export enum MergeableState {
  MERGEABLE,
  CONFLICTING,
  UNKNOWN,
}

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type MergedEvent = TypeData<typeof schema, 'MergedEvent!'>

/**
 * @type Object
 * @implements Node, Closable, UniformResourceLocatable
 */
export type Milestone = TypeData<typeof schema, 'Milestone!'>

/** @type Object */
export type MilestoneConnection = TypeData<
  typeof schema,
  'MilestoneConnection!'
>

/** @type Object */
export type MilestoneEdge = TypeData<typeof schema, 'MilestoneEdge!'>

/** @type Union */
export type MilestoneItem = TypeData<typeof schema, 'MilestoneItem!'>

/** @type InputObject */
export type MilestoneOrder = TypeData<typeof schema, 'MilestoneOrder!'>

export enum MilestoneOrderField {
  DUE_DATE,
  CREATED_AT,
  UPDATED_AT,
  NUMBER,
}

export enum MilestoneState {
  OPEN,
  CLOSED,
}

/**
 * @type Object
 * @implements Node
 */
export type MilestonedEvent = TypeData<typeof schema, 'MilestonedEvent!'>

/** @type Interface */
export type Minimizable = TypeData<typeof schema, 'Minimizable!'>

/** @type InputObject */
export type MinimizeCommentInput = TypeData<
  typeof schema,
  'MinimizeCommentInput!'
>

/** @type Object */
export type MinimizeCommentPayload = TypeData<
  typeof schema,
  'MinimizeCommentPayload!'
>

/** @type InputObject */
export type MoveProjectCardInput = TypeData<
  typeof schema,
  'MoveProjectCardInput!'
>

/** @type Object */
export type MoveProjectCardPayload = TypeData<
  typeof schema,
  'MoveProjectCardPayload!'
>

/** @type InputObject */
export type MoveProjectColumnInput = TypeData<
  typeof schema,
  'MoveProjectColumnInput!'
>

/** @type Object */
export type MoveProjectColumnPayload = TypeData<
  typeof schema,
  'MoveProjectColumnPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type MovedColumnsInProjectEvent = TypeData<
  typeof schema,
  'MovedColumnsInProjectEvent!'
>

/** @type Object */
export type Mutation = TypeData<typeof schema, 'Mutation!'>

/** @type Interface */
export type Node = TypeData<typeof schema, 'Node!'>

/** @type Interface */
export type OauthApplicationAuditEntryData = TypeData<
  typeof schema,
  'OauthApplicationAuditEntryData!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OauthApplicationCreateAuditEntry = TypeData<
  typeof schema,
  'OauthApplicationCreateAuditEntry!'
>

export enum OauthApplicationCreateAuditEntryState {
  ACTIVE,
  SUSPENDED,
  PENDING_DELETION,
}

export enum OperationType {
  ACCESS,
  AUTHENTICATION,
  CREATE,
  MODIFY,
  REMOVE,
  RESTORE,
  TRANSFER,
}

export enum OrderDirection {
  ASC,
  DESC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgAddBillingManagerAuditEntry = TypeData<
  typeof schema,
  'OrgAddBillingManagerAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgAddMemberAuditEntry = TypeData<
  typeof schema,
  'OrgAddMemberAuditEntry!'
>

export enum OrgAddMemberAuditEntryPermission {
  READ,
  ADMIN,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgBlockUserAuditEntry = TypeData<
  typeof schema,
  'OrgBlockUserAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgConfigDisableCollaboratorsOnlyAuditEntry = TypeData<
  typeof schema,
  'OrgConfigDisableCollaboratorsOnlyAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgConfigEnableCollaboratorsOnlyAuditEntry = TypeData<
  typeof schema,
  'OrgConfigEnableCollaboratorsOnlyAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgCreateAuditEntry = TypeData<
  typeof schema,
  'OrgCreateAuditEntry!'
>

export enum OrgCreateAuditEntryBillingPlan {
  FREE,
  BUSINESS,
  BUSINESS_PLUS,
  UNLIMITED,
  TIERED_PER_SEAT,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgDisableOauthAppRestrictionsAuditEntry = TypeData<
  typeof schema,
  'OrgDisableOauthAppRestrictionsAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgDisableSamlAuditEntry = TypeData<
  typeof schema,
  'OrgDisableSamlAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgDisableTwoFactorRequirementAuditEntry = TypeData<
  typeof schema,
  'OrgDisableTwoFactorRequirementAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgEnableOauthAppRestrictionsAuditEntry = TypeData<
  typeof schema,
  'OrgEnableOauthAppRestrictionsAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgEnableSamlAuditEntry = TypeData<
  typeof schema,
  'OrgEnableSamlAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgEnableTwoFactorRequirementAuditEntry = TypeData<
  typeof schema,
  'OrgEnableTwoFactorRequirementAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgInviteMemberAuditEntry = TypeData<
  typeof schema,
  'OrgInviteMemberAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type OrgInviteToBusinessAuditEntry = TypeData<
  typeof schema,
  'OrgInviteToBusinessAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OrgOauthAppAccessApprovedAuditEntry = TypeData<
  typeof schema,
  'OrgOauthAppAccessApprovedAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OrgOauthAppAccessDeniedAuditEntry = TypeData<
  typeof schema,
  'OrgOauthAppAccessDeniedAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
 */
export type OrgOauthAppAccessRequestedAuditEntry = TypeData<
  typeof schema,
  'OrgOauthAppAccessRequestedAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRemoveBillingManagerAuditEntry = TypeData<
  typeof schema,
  'OrgRemoveBillingManagerAuditEntry!'
>

export enum OrgRemoveBillingManagerAuditEntryReason {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE,
  SAML_EXTERNAL_IDENTITY_MISSING,
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRemoveMemberAuditEntry = TypeData<
  typeof schema,
  'OrgRemoveMemberAuditEntry!'
>

export enum OrgRemoveMemberAuditEntryMembershipType {
  DIRECT_MEMBER,
  ADMIN,
  BILLING_MANAGER,
  UNAFFILIATED,
  OUTSIDE_COLLABORATOR,
}

export enum OrgRemoveMemberAuditEntryReason {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE,
  SAML_EXTERNAL_IDENTITY_MISSING,
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY,
  USER_ACCOUNT_DELETED,
  TWO_FACTOR_ACCOUNT_RECOVERY,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRemoveOutsideCollaboratorAuditEntry = TypeData<
  typeof schema,
  'OrgRemoveOutsideCollaboratorAuditEntry!'
>

export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  OUTSIDE_COLLABORATOR,
  UNAFFILIATED,
  BILLING_MANAGER,
}

export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE,
  SAML_EXTERNAL_IDENTITY_MISSING,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgRestoreMemberAuditEntry = TypeData<
  typeof schema,
  'OrgRestoreMemberAuditEntry!'
>

/** @type Union */
export type OrgRestoreMemberAuditEntryMembership = TypeData<
  typeof schema,
  'OrgRestoreMemberAuditEntryMembership!'
>

/**
 * @type Object
 * @implements OrganizationAuditEntryData
 */
export type OrgRestoreMemberMembershipOrganizationAuditEntryData = TypeData<
  typeof schema,
  'OrgRestoreMemberMembershipOrganizationAuditEntryData!'
>

/**
 * @type Object
 * @implements RepositoryAuditEntryData
 */
export type OrgRestoreMemberMembershipRepositoryAuditEntryData = TypeData<
  typeof schema,
  'OrgRestoreMemberMembershipRepositoryAuditEntryData!'
>

/**
 * @type Object
 * @implements TeamAuditEntryData
 */
export type OrgRestoreMemberMembershipTeamAuditEntryData = TypeData<
  typeof schema,
  'OrgRestoreMemberMembershipTeamAuditEntryData!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUnblockUserAuditEntry = TypeData<
  typeof schema,
  'OrgUnblockUserAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateDefaultRepositoryPermissionAuditEntry = TypeData<
  typeof schema,
  'OrgUpdateDefaultRepositoryPermissionAuditEntry!'
>

export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  READ,
  WRITE,
  ADMIN,
  NONE,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateMemberAuditEntry = TypeData<
  typeof schema,
  'OrgUpdateMemberAuditEntry!'
>

export enum OrgUpdateMemberAuditEntryPermission {
  READ,
  ADMIN,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = TypeData<
  typeof schema,
  'OrgUpdateMemberRepositoryCreationPermissionAuditEntry!'
>

export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  ALL,
  PUBLIC,
  NONE,
  PRIVATE,
  INTERNAL,
  PUBLIC_INTERNAL,
  PRIVATE_INTERNAL,
  PUBLIC_PRIVATE,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData
 */
export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = TypeData<
  typeof schema,
  'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry!'
>

/**
 * @type Object
 * @implements Node, Actor, PackageOwner, ProjectOwner, RepositoryOwner, UniformResourceLocatable, MemberStatusable, ProfileOwner, Sponsorable
 */
export type Organization = TypeData<typeof schema, 'Organization!'>

/** @type Union */
export type OrganizationAuditEntry = TypeData<
  typeof schema,
  'OrganizationAuditEntry!'
>

/** @type Object */
export type OrganizationAuditEntryConnection = TypeData<
  typeof schema,
  'OrganizationAuditEntryConnection!'
>

/** @type Interface */
export type OrganizationAuditEntryData = TypeData<
  typeof schema,
  'OrganizationAuditEntryData!'
>

/** @type Object */
export type OrganizationAuditEntryEdge = TypeData<
  typeof schema,
  'OrganizationAuditEntryEdge!'
>

/** @type Object */
export type OrganizationConnection = TypeData<
  typeof schema,
  'OrganizationConnection!'
>

/** @type Object */
export type OrganizationEdge = TypeData<typeof schema, 'OrganizationEdge!'>

/**
 * @type Object
 * @implements Node
 */
export type OrganizationIdentityProvider = TypeData<
  typeof schema,
  'OrganizationIdentityProvider!'
>

/**
 * @type Object
 * @implements Node
 */
export type OrganizationInvitation = TypeData<
  typeof schema,
  'OrganizationInvitation!'
>

/** @type Object */
export type OrganizationInvitationConnection = TypeData<
  typeof schema,
  'OrganizationInvitationConnection!'
>

/** @type Object */
export type OrganizationInvitationEdge = TypeData<
  typeof schema,
  'OrganizationInvitationEdge!'
>

export enum OrganizationInvitationRole {
  DIRECT_MEMBER,
  ADMIN,
  BILLING_MANAGER,
  REINSTATE,
}

export enum OrganizationInvitationType {
  USER,
  EMAIL,
}

/** @type Object */
export type OrganizationMemberConnection = TypeData<
  typeof schema,
  'OrganizationMemberConnection!'
>

/** @type Object */
export type OrganizationMemberEdge = TypeData<
  typeof schema,
  'OrganizationMemberEdge!'
>

export enum OrganizationMemberRole {
  MEMBER,
  ADMIN,
}

export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  ALL,
  PRIVATE,
  DISABLED,
}

/** @type InputObject */
export type OrganizationOrder = TypeData<typeof schema, 'OrganizationOrder!'>

export enum OrganizationOrderField {
  CREATED_AT,
  LOGIN,
}

/**
 * @type Object
 * @implements HovercardContext
 */
export type OrganizationTeamsHovercardContext = TypeData<
  typeof schema,
  'OrganizationTeamsHovercardContext!'
>

/**
 * @type Object
 * @implements HovercardContext
 */
export type OrganizationsHovercardContext = TypeData<
  typeof schema,
  'OrganizationsHovercardContext!'
>

/**
 * @type Object
 * @implements Node
 */
export type Package = TypeData<typeof schema, 'Package!'>

/** @type Object */
export type PackageConnection = TypeData<typeof schema, 'PackageConnection!'>

/** @type Object */
export type PackageEdge = TypeData<typeof schema, 'PackageEdge!'>

/**
 * @type Object
 * @implements Node
 */
export type PackageFile = TypeData<typeof schema, 'PackageFile!'>

/** @type Object */
export type PackageFileConnection = TypeData<
  typeof schema,
  'PackageFileConnection!'
>

/** @type Object */
export type PackageFileEdge = TypeData<typeof schema, 'PackageFileEdge!'>

/** @type InputObject */
export type PackageFileOrder = TypeData<typeof schema, 'PackageFileOrder!'>

export enum PackageFileOrderField {
  CREATED_AT,
}

/** @type InputObject */
export type PackageOrder = TypeData<typeof schema, 'PackageOrder!'>

export enum PackageOrderField {
  CREATED_AT,
}

/** @type Interface */
export type PackageOwner = TypeData<typeof schema, 'PackageOwner!'>

/** @type Object */
export type PackageStatistics = TypeData<typeof schema, 'PackageStatistics!'>

/**
 * @type Object
 * @implements Node
 */
export type PackageTag = TypeData<typeof schema, 'PackageTag!'>

export enum PackageType {
  NPM,
  RUBYGEMS,
  MAVEN,
  DOCKER,
  DEBIAN,
  NUGET,
  PYPI,
}

/**
 * @type Object
 * @implements Node
 */
export type PackageVersion = TypeData<typeof schema, 'PackageVersion!'>

/** @type Object */
export type PackageVersionConnection = TypeData<
  typeof schema,
  'PackageVersionConnection!'
>

/** @type Object */
export type PackageVersionEdge = TypeData<typeof schema, 'PackageVersionEdge!'>

/** @type InputObject */
export type PackageVersionOrder = TypeData<
  typeof schema,
  'PackageVersionOrder!'
>

export enum PackageVersionOrderField {
  CREATED_AT,
}

/** @type Object */
export type PackageVersionStatistics = TypeData<
  typeof schema,
  'PackageVersionStatistics!'
>

/** @type Object */
export type PageInfo = TypeData<typeof schema, 'PageInfo!'>

/** @type Union */
export type PermissionGranter = TypeData<typeof schema, 'PermissionGranter!'>

/** @type Object */
export type PermissionSource = TypeData<typeof schema, 'PermissionSource!'>

/** @type Union */
export type PinnableItem = TypeData<typeof schema, 'PinnableItem!'>

/** @type Object */
export type PinnableItemConnection = TypeData<
  typeof schema,
  'PinnableItemConnection!'
>

/** @type Object */
export type PinnableItemEdge = TypeData<typeof schema, 'PinnableItemEdge!'>

export enum PinnableItemType {
  REPOSITORY,
  GIST,
  ISSUE,
  PROJECT,
  PULL_REQUEST,
  USER,
  ORGANIZATION,
  TEAM,
}

/**
 * @type Object
 * @implements Node
 */
export type PinnedEvent = TypeData<typeof schema, 'PinnedEvent!'>

/** @type Scalar */
export type PreciseDateTime = TypeData<typeof schema, 'PreciseDateTime!'>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type PrivateRepositoryForkingDisableAuditEntry = TypeData<
  typeof schema,
  'PrivateRepositoryForkingDisableAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type PrivateRepositoryForkingEnableAuditEntry = TypeData<
  typeof schema,
  'PrivateRepositoryForkingEnableAuditEntry!'
>

/** @type Object */
export type ProfileItemShowcase = TypeData<
  typeof schema,
  'ProfileItemShowcase!'
>

/** @type Interface */
export type ProfileOwner = TypeData<typeof schema, 'ProfileOwner!'>

/**
 * @type Object
 * @implements Node, Closable, Updatable
 */
export type Project = TypeData<typeof schema, 'Project!'>

/**
 * @type Object
 * @implements Node
 */
export type ProjectCard = TypeData<typeof schema, 'ProjectCard!'>

export enum ProjectCardArchivedState {
  ARCHIVED,
  NOT_ARCHIVED,
}

/** @type Object */
export type ProjectCardConnection = TypeData<
  typeof schema,
  'ProjectCardConnection!'
>

/** @type Object */
export type ProjectCardEdge = TypeData<typeof schema, 'ProjectCardEdge!'>

/** @type Union */
export type ProjectCardItem = TypeData<typeof schema, 'ProjectCardItem!'>

export enum ProjectCardState {
  CONTENT_ONLY,
  NOTE_ONLY,
  REDACTED,
}

/**
 * @type Object
 * @implements Node
 */
export type ProjectColumn = TypeData<typeof schema, 'ProjectColumn!'>

/** @type Object */
export type ProjectColumnConnection = TypeData<
  typeof schema,
  'ProjectColumnConnection!'
>

/** @type Object */
export type ProjectColumnEdge = TypeData<typeof schema, 'ProjectColumnEdge!'>

export enum ProjectColumnPurpose {
  TODO,
  IN_PROGRESS,
  DONE,
}

/** @type Object */
export type ProjectConnection = TypeData<typeof schema, 'ProjectConnection!'>

/** @type Object */
export type ProjectEdge = TypeData<typeof schema, 'ProjectEdge!'>

/** @type InputObject */
export type ProjectOrder = TypeData<typeof schema, 'ProjectOrder!'>

export enum ProjectOrderField {
  CREATED_AT,
  UPDATED_AT,
  NAME,
}

/** @type Interface */
export type ProjectOwner = TypeData<typeof schema, 'ProjectOwner!'>

/** @type Object */
export type ProjectProgress = TypeData<typeof schema, 'ProjectProgress!'>

export enum ProjectState {
  OPEN,
  CLOSED,
}

export enum ProjectTemplate {
  BASIC_KANBAN,
  AUTOMATED_KANBAN_V2,
  AUTOMATED_REVIEWS_KANBAN,
  BUG_TRIAGE,
}

/**
 * @type Object
 * @implements Node
 */
export type PublicKey = TypeData<typeof schema, 'PublicKey!'>

/** @type Object */
export type PublicKeyConnection = TypeData<
  typeof schema,
  'PublicKeyConnection!'
>

/** @type Object */
export type PublicKeyEdge = TypeData<typeof schema, 'PublicKeyEdge!'>

/**
 * @type Object
 * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
 */
export type PullRequest = TypeData<typeof schema, 'PullRequest!'>

/** @type Object */
export type PullRequestChangedFile = TypeData<
  typeof schema,
  'PullRequestChangedFile!'
>

/** @type Object */
export type PullRequestChangedFileConnection = TypeData<
  typeof schema,
  'PullRequestChangedFileConnection!'
>

/** @type Object */
export type PullRequestChangedFileEdge = TypeData<
  typeof schema,
  'PullRequestChangedFileEdge!'
>

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type PullRequestCommit = TypeData<typeof schema, 'PullRequestCommit!'>

/**
 * @type Object
 * @implements Node, RepositoryNode
 */
export type PullRequestCommitCommentThread = TypeData<
  typeof schema,
  'PullRequestCommitCommentThread!'
>

/** @type Object */
export type PullRequestCommitConnection = TypeData<
  typeof schema,
  'PullRequestCommitConnection!'
>

/** @type Object */
export type PullRequestCommitEdge = TypeData<
  typeof schema,
  'PullRequestCommitEdge!'
>

/** @type Object */
export type PullRequestConnection = TypeData<
  typeof schema,
  'PullRequestConnection!'
>

/** @type Object */
export type PullRequestContributionsByRepository = TypeData<
  typeof schema,
  'PullRequestContributionsByRepository!'
>

/** @type Object */
export type PullRequestEdge = TypeData<typeof schema, 'PullRequestEdge!'>

export enum PullRequestMergeMethod {
  MERGE,
  SQUASH,
  REBASE,
}

/** @type InputObject */
export type PullRequestOrder = TypeData<typeof schema, 'PullRequestOrder!'>

export enum PullRequestOrderField {
  CREATED_AT,
  UPDATED_AT,
}

/**
 * @type Object
 * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type PullRequestReview = TypeData<typeof schema, 'PullRequestReview!'>

/**
 * @type Object
 * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment, Reactable, RepositoryNode
 */
export type PullRequestReviewComment = TypeData<
  typeof schema,
  'PullRequestReviewComment!'
>

/** @type Object */
export type PullRequestReviewCommentConnection = TypeData<
  typeof schema,
  'PullRequestReviewCommentConnection!'
>

/** @type Object */
export type PullRequestReviewCommentEdge = TypeData<
  typeof schema,
  'PullRequestReviewCommentEdge!'
>

export enum PullRequestReviewCommentState {
  PENDING,
  SUBMITTED,
}

/** @type Object */
export type PullRequestReviewConnection = TypeData<
  typeof schema,
  'PullRequestReviewConnection!'
>

/** @type Object */
export type PullRequestReviewContributionsByRepository = TypeData<
  typeof schema,
  'PullRequestReviewContributionsByRepository!'
>

export enum PullRequestReviewDecision {
  CHANGES_REQUESTED,
  APPROVED,
  REVIEW_REQUIRED,
}

/** @type Object */
export type PullRequestReviewEdge = TypeData<
  typeof schema,
  'PullRequestReviewEdge!'
>

export enum PullRequestReviewEvent {
  COMMENT,
  APPROVE,
  REQUEST_CHANGES,
  DISMISS,
}

export enum PullRequestReviewState {
  PENDING,
  COMMENTED,
  APPROVED,
  CHANGES_REQUESTED,
  DISMISSED,
}

/**
 * @type Object
 * @implements Node
 */
export type PullRequestReviewThread = TypeData<
  typeof schema,
  'PullRequestReviewThread!'
>

/** @type Object */
export type PullRequestReviewThreadConnection = TypeData<
  typeof schema,
  'PullRequestReviewThreadConnection!'
>

/** @type Object */
export type PullRequestReviewThreadEdge = TypeData<
  typeof schema,
  'PullRequestReviewThreadEdge!'
>

/** @type Object */
export type PullRequestRevisionMarker = TypeData<
  typeof schema,
  'PullRequestRevisionMarker!'
>

export enum PullRequestState {
  OPEN,
  CLOSED,
  MERGED,
}

/** @type Object */
export type PullRequestTimelineConnection = TypeData<
  typeof schema,
  'PullRequestTimelineConnection!'
>

/** @type Union */
export type PullRequestTimelineItem = TypeData<
  typeof schema,
  'PullRequestTimelineItem!'
>

/** @type Object */
export type PullRequestTimelineItemEdge = TypeData<
  typeof schema,
  'PullRequestTimelineItemEdge!'
>

/** @type Union */
export type PullRequestTimelineItems = TypeData<
  typeof schema,
  'PullRequestTimelineItems!'
>

/** @type Object */
export type PullRequestTimelineItemsConnection = TypeData<
  typeof schema,
  'PullRequestTimelineItemsConnection!'
>

/** @type Object */
export type PullRequestTimelineItemsEdge = TypeData<
  typeof schema,
  'PullRequestTimelineItemsEdge!'
>

export enum PullRequestTimelineItemsItemType {
  PULL_REQUEST_COMMIT,
  PULL_REQUEST_COMMIT_COMMENT_THREAD,
  PULL_REQUEST_REVIEW,
  PULL_REQUEST_REVIEW_THREAD,
  PULL_REQUEST_REVISION_MARKER,
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT,
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT,
  BASE_REF_CHANGED_EVENT,
  BASE_REF_FORCE_PUSHED_EVENT,
  BASE_REF_DELETED_EVENT,
  DEPLOYED_EVENT,
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT,
  HEAD_REF_DELETED_EVENT,
  HEAD_REF_FORCE_PUSHED_EVENT,
  HEAD_REF_RESTORED_EVENT,
  MERGED_EVENT,
  REVIEW_DISMISSED_EVENT,
  REVIEW_REQUESTED_EVENT,
  REVIEW_REQUEST_REMOVED_EVENT,
  READY_FOR_REVIEW_EVENT,
  CONVERT_TO_DRAFT_EVENT,
  ISSUE_COMMENT,
  CROSS_REFERENCED_EVENT,
  ADDED_TO_PROJECT_EVENT,
  ASSIGNED_EVENT,
  CLOSED_EVENT,
  COMMENT_DELETED_EVENT,
  CONNECTED_EVENT,
  CONVERTED_NOTE_TO_ISSUE_EVENT,
  DEMILESTONED_EVENT,
  DISCONNECTED_EVENT,
  LABELED_EVENT,
  LOCKED_EVENT,
  MARKED_AS_DUPLICATE_EVENT,
  MENTIONED_EVENT,
  MILESTONED_EVENT,
  MOVED_COLUMNS_IN_PROJECT_EVENT,
  PINNED_EVENT,
  REFERENCED_EVENT,
  REMOVED_FROM_PROJECT_EVENT,
  RENAMED_TITLE_EVENT,
  REOPENED_EVENT,
  SUBSCRIBED_EVENT,
  TRANSFERRED_EVENT,
  UNASSIGNED_EVENT,
  UNLABELED_EVENT,
  UNLOCKED_EVENT,
  USER_BLOCKED_EVENT,
  UNMARKED_AS_DUPLICATE_EVENT,
  UNPINNED_EVENT,
  UNSUBSCRIBED_EVENT,
}

export enum PullRequestUpdateState {
  OPEN,
  CLOSED,
}

/**
 * @type Object
 * @implements Node
 */
export type Push = TypeData<typeof schema, 'Push!'>

/**
 * @type Object
 * @implements Node
 */
export type PushAllowance = TypeData<typeof schema, 'PushAllowance!'>

/** @type Union */
export type PushAllowanceActor = TypeData<typeof schema, 'PushAllowanceActor!'>

/** @type Object */
export type PushAllowanceConnection = TypeData<
  typeof schema,
  'PushAllowanceConnection!'
>

/** @type Object */
export type PushAllowanceEdge = TypeData<typeof schema, 'PushAllowanceEdge!'>

/** @type Object */
export type Query = TypeData<typeof schema, 'Query!'>

/** @type Object */
export type RateLimit = TypeData<typeof schema, 'RateLimit!'>

/** @type Interface */
export type Reactable = TypeData<typeof schema, 'Reactable!'>

/** @type Object */
export type ReactingUserConnection = TypeData<
  typeof schema,
  'ReactingUserConnection!'
>

/** @type Object */
export type ReactingUserEdge = TypeData<typeof schema, 'ReactingUserEdge!'>

/**
 * @type Object
 * @implements Node
 */
export type Reaction = TypeData<typeof schema, 'Reaction!'>

/** @type Object */
export type ReactionConnection = TypeData<typeof schema, 'ReactionConnection!'>

export enum ReactionContent {
  THUMBS_UP,
  THUMBS_DOWN,
  LAUGH,
  HOORAY,
  CONFUSED,
  HEART,
  ROCKET,
  EYES,
}

/** @type Object */
export type ReactionEdge = TypeData<typeof schema, 'ReactionEdge!'>

/** @type Object */
export type ReactionGroup = TypeData<typeof schema, 'ReactionGroup!'>

/** @type InputObject */
export type ReactionOrder = TypeData<typeof schema, 'ReactionOrder!'>

export enum ReactionOrderField {
  CREATED_AT,
}

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type ReadyForReviewEvent = TypeData<
  typeof schema,
  'ReadyForReviewEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type Ref = TypeData<typeof schema, 'Ref!'>

/** @type Object */
export type RefConnection = TypeData<typeof schema, 'RefConnection!'>

/** @type Object */
export type RefEdge = TypeData<typeof schema, 'RefEdge!'>

/** @type InputObject */
export type RefOrder = TypeData<typeof schema, 'RefOrder!'>

export enum RefOrderField {
  TAG_COMMIT_DATE,
  ALPHABETICAL,
}

/** @type Object */
export type RefUpdateRule = TypeData<typeof schema, 'RefUpdateRule!'>

/**
 * @type Object
 * @implements Node
 */
export type ReferencedEvent = TypeData<typeof schema, 'ReferencedEvent!'>

/** @type Union */
export type ReferencedSubject = TypeData<typeof schema, 'ReferencedSubject!'>

/** @type InputObject */
export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = TypeData<
  typeof schema,
  'RegenerateEnterpriseIdentityProviderRecoveryCodesInput!'
>

/** @type Object */
export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = TypeData<
  typeof schema,
  'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload!'
>

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type Release = TypeData<typeof schema, 'Release!'>

/**
 * @type Object
 * @implements Node
 */
export type ReleaseAsset = TypeData<typeof schema, 'ReleaseAsset!'>

/** @type Object */
export type ReleaseAssetConnection = TypeData<
  typeof schema,
  'ReleaseAssetConnection!'
>

/** @type Object */
export type ReleaseAssetEdge = TypeData<typeof schema, 'ReleaseAssetEdge!'>

/** @type Object */
export type ReleaseConnection = TypeData<typeof schema, 'ReleaseConnection!'>

/** @type Object */
export type ReleaseEdge = TypeData<typeof schema, 'ReleaseEdge!'>

/** @type InputObject */
export type ReleaseOrder = TypeData<typeof schema, 'ReleaseOrder!'>

export enum ReleaseOrderField {
  CREATED_AT,
  NAME,
}

/** @type InputObject */
export type RemoveAssigneesFromAssignableInput = TypeData<
  typeof schema,
  'RemoveAssigneesFromAssignableInput!'
>

/** @type Object */
export type RemoveAssigneesFromAssignablePayload = TypeData<
  typeof schema,
  'RemoveAssigneesFromAssignablePayload!'
>

/** @type InputObject */
export type RemoveEnterpriseAdminInput = TypeData<
  typeof schema,
  'RemoveEnterpriseAdminInput!'
>

/** @type Object */
export type RemoveEnterpriseAdminPayload = TypeData<
  typeof schema,
  'RemoveEnterpriseAdminPayload!'
>

/** @type InputObject */
export type RemoveEnterpriseIdentityProviderInput = TypeData<
  typeof schema,
  'RemoveEnterpriseIdentityProviderInput!'
>

/** @type Object */
export type RemoveEnterpriseIdentityProviderPayload = TypeData<
  typeof schema,
  'RemoveEnterpriseIdentityProviderPayload!'
>

/** @type InputObject */
export type RemoveEnterpriseOrganizationInput = TypeData<
  typeof schema,
  'RemoveEnterpriseOrganizationInput!'
>

/** @type Object */
export type RemoveEnterpriseOrganizationPayload = TypeData<
  typeof schema,
  'RemoveEnterpriseOrganizationPayload!'
>

/** @type InputObject */
export type RemoveLabelsFromLabelableInput = TypeData<
  typeof schema,
  'RemoveLabelsFromLabelableInput!'
>

/** @type Object */
export type RemoveLabelsFromLabelablePayload = TypeData<
  typeof schema,
  'RemoveLabelsFromLabelablePayload!'
>

/** @type InputObject */
export type RemoveOutsideCollaboratorInput = TypeData<
  typeof schema,
  'RemoveOutsideCollaboratorInput!'
>

/** @type Object */
export type RemoveOutsideCollaboratorPayload = TypeData<
  typeof schema,
  'RemoveOutsideCollaboratorPayload!'
>

/** @type InputObject */
export type RemoveReactionInput = TypeData<
  typeof schema,
  'RemoveReactionInput!'
>

/** @type Object */
export type RemoveReactionPayload = TypeData<
  typeof schema,
  'RemoveReactionPayload!'
>

/** @type InputObject */
export type RemoveStarInput = TypeData<typeof schema, 'RemoveStarInput!'>

/** @type Object */
export type RemoveStarPayload = TypeData<typeof schema, 'RemoveStarPayload!'>

/**
 * @type Object
 * @implements Node
 */
export type RemovedFromProjectEvent = TypeData<
  typeof schema,
  'RemovedFromProjectEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type RenamedTitleEvent = TypeData<typeof schema, 'RenamedTitleEvent!'>

/** @type Union */
export type RenamedTitleSubject = TypeData<
  typeof schema,
  'RenamedTitleSubject!'
>

/** @type InputObject */
export type ReopenIssueInput = TypeData<typeof schema, 'ReopenIssueInput!'>

/** @type Object */
export type ReopenIssuePayload = TypeData<typeof schema, 'ReopenIssuePayload!'>

/** @type InputObject */
export type ReopenPullRequestInput = TypeData<
  typeof schema,
  'ReopenPullRequestInput!'
>

/** @type Object */
export type ReopenPullRequestPayload = TypeData<
  typeof schema,
  'ReopenPullRequestPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type ReopenedEvent = TypeData<typeof schema, 'ReopenedEvent!'>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoAccessAuditEntry = TypeData<
  typeof schema,
  'RepoAccessAuditEntry!'
>

export enum RepoAccessAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoAddMemberAuditEntry = TypeData<
  typeof schema,
  'RepoAddMemberAuditEntry!'
>

export enum RepoAddMemberAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
 */
export type RepoAddTopicAuditEntry = TypeData<
  typeof schema,
  'RepoAddTopicAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoArchivedAuditEntry = TypeData<
  typeof schema,
  'RepoArchivedAuditEntry!'
>

export enum RepoArchivedAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoChangeMergeSettingAuditEntry = TypeData<
  typeof schema,
  'RepoChangeMergeSettingAuditEntry!'
>

export enum RepoChangeMergeSettingAuditEntryMergeType {
  MERGE,
  REBASE,
  SQUASH,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableAnonymousGitAccessAuditEntry = TypeData<
  typeof schema,
  'RepoConfigDisableAnonymousGitAccessAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableCollaboratorsOnlyAuditEntry = TypeData<
  typeof schema,
  'RepoConfigDisableCollaboratorsOnlyAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableContributorsOnlyAuditEntry = TypeData<
  typeof schema,
  'RepoConfigDisableContributorsOnlyAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigDisableSockpuppetDisallowedAuditEntry = TypeData<
  typeof schema,
  'RepoConfigDisableSockpuppetDisallowedAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableAnonymousGitAccessAuditEntry = TypeData<
  typeof schema,
  'RepoConfigEnableAnonymousGitAccessAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableCollaboratorsOnlyAuditEntry = TypeData<
  typeof schema,
  'RepoConfigEnableCollaboratorsOnlyAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableContributorsOnlyAuditEntry = TypeData<
  typeof schema,
  'RepoConfigEnableContributorsOnlyAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigEnableSockpuppetDisallowedAuditEntry = TypeData<
  typeof schema,
  'RepoConfigEnableSockpuppetDisallowedAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigLockAnonymousGitAccessAuditEntry = TypeData<
  typeof schema,
  'RepoConfigLockAnonymousGitAccessAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoConfigUnlockAnonymousGitAccessAuditEntry = TypeData<
  typeof schema,
  'RepoConfigUnlockAnonymousGitAccessAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoCreateAuditEntry = TypeData<
  typeof schema,
  'RepoCreateAuditEntry!'
>

export enum RepoCreateAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
 */
export type RepoDestroyAuditEntry = TypeData<
  typeof schema,
  'RepoDestroyAuditEntry!'
>

export enum RepoDestroyAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
 */
export type RepoRemoveMemberAuditEntry = TypeData<
  typeof schema,
  'RepoRemoveMemberAuditEntry!'
>

export enum RepoRemoveMemberAuditEntryVisibility {
  INTERNAL,
  PRIVATE,
  PUBLIC,
}

/**
 * @type Object
 * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
 */
export type RepoRemoveTopicAuditEntry = TypeData<
  typeof schema,
  'RepoRemoveTopicAuditEntry!'
>

export enum ReportedContentClassifiers {
  SPAM,
  ABUSE,
  OFF_TOPIC,
  OUTDATED,
  DUPLICATE,
  RESOLVED,
}

/**
 * @type Object
 * @implements Node, ProjectOwner, PackageOwner, Subscribable, Starrable, UniformResourceLocatable, RepositoryInfo
 */
export type Repository = TypeData<typeof schema, 'Repository!'>

export enum RepositoryAffiliation {
  OWNER,
  COLLABORATOR,
  ORGANIZATION_MEMBER,
}

/** @type Interface */
export type RepositoryAuditEntryData = TypeData<
  typeof schema,
  'RepositoryAuditEntryData!'
>

/** @type Object */
export type RepositoryCollaboratorConnection = TypeData<
  typeof schema,
  'RepositoryCollaboratorConnection!'
>

/** @type Object */
export type RepositoryCollaboratorEdge = TypeData<
  typeof schema,
  'RepositoryCollaboratorEdge!'
>

/** @type Object */
export type RepositoryConnection = TypeData<
  typeof schema,
  'RepositoryConnection!'
>

/** @type Object */
export type RepositoryContactLink = TypeData<
  typeof schema,
  'RepositoryContactLink!'
>

export enum RepositoryContributionType {
  COMMIT,
  ISSUE,
  PULL_REQUEST,
  REPOSITORY,
  PULL_REQUEST_REVIEW,
}

/** @type Object */
export type RepositoryEdge = TypeData<typeof schema, 'RepositoryEdge!'>

/** @type Interface */
export type RepositoryInfo = TypeData<typeof schema, 'RepositoryInfo!'>

/**
 * @type Object
 * @implements Node
 */
export type RepositoryInvitation = TypeData<
  typeof schema,
  'RepositoryInvitation!'
>

/** @type Object */
export type RepositoryInvitationConnection = TypeData<
  typeof schema,
  'RepositoryInvitationConnection!'
>

/** @type Object */
export type RepositoryInvitationEdge = TypeData<
  typeof schema,
  'RepositoryInvitationEdge!'
>

/** @type InputObject */
export type RepositoryInvitationOrder = TypeData<
  typeof schema,
  'RepositoryInvitationOrder!'
>

export enum RepositoryInvitationOrderField {
  CREATED_AT,
}

export enum RepositoryLockReason {
  MOVING,
  BILLING,
  RENAME,
  MIGRATING,
}

/** @type Interface */
export type RepositoryNode = TypeData<typeof schema, 'RepositoryNode!'>

/** @type InputObject */
export type RepositoryOrder = TypeData<typeof schema, 'RepositoryOrder!'>

export enum RepositoryOrderField {
  CREATED_AT,
  UPDATED_AT,
  PUSHED_AT,
  NAME,
  STARGAZERS,
}

/** @type Interface */
export type RepositoryOwner = TypeData<typeof schema, 'RepositoryOwner!'>

export enum RepositoryPermission {
  ADMIN,
  MAINTAIN,
  WRITE,
  TRIAGE,
  READ,
}

export enum RepositoryPrivacy {
  PUBLIC,
  PRIVATE,
}

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type RepositoryTopic = TypeData<typeof schema, 'RepositoryTopic!'>

/** @type Object */
export type RepositoryTopicConnection = TypeData<
  typeof schema,
  'RepositoryTopicConnection!'
>

/** @type Object */
export type RepositoryTopicEdge = TypeData<
  typeof schema,
  'RepositoryTopicEdge!'
>

export enum RepositoryVisibility {
  PRIVATE,
  PUBLIC,
  INTERNAL,
}

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type RepositoryVisibilityChangeDisableAuditEntry = TypeData<
  typeof schema,
  'RepositoryVisibilityChangeDisableAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
 */
export type RepositoryVisibilityChangeEnableAuditEntry = TypeData<
  typeof schema,
  'RepositoryVisibilityChangeEnableAuditEntry!'
>

/**
 * @type Object
 * @implements Node, RepositoryNode
 */
export type RepositoryVulnerabilityAlert = TypeData<
  typeof schema,
  'RepositoryVulnerabilityAlert!'
>

/** @type Object */
export type RepositoryVulnerabilityAlertConnection = TypeData<
  typeof schema,
  'RepositoryVulnerabilityAlertConnection!'
>

/** @type Object */
export type RepositoryVulnerabilityAlertEdge = TypeData<
  typeof schema,
  'RepositoryVulnerabilityAlertEdge!'
>

/** @type InputObject */
export type RequestReviewsInput = TypeData<
  typeof schema,
  'RequestReviewsInput!'
>

/** @type Object */
export type RequestReviewsPayload = TypeData<
  typeof schema,
  'RequestReviewsPayload!'
>

export enum RequestableCheckStatusState {
  QUEUED,
  IN_PROGRESS,
  COMPLETED,
}

/** @type Union */
export type RequestedReviewer = TypeData<typeof schema, 'RequestedReviewer!'>

/** @type InputObject */
export type RerequestCheckSuiteInput = TypeData<
  typeof schema,
  'RerequestCheckSuiteInput!'
>

/** @type Object */
export type RerequestCheckSuitePayload = TypeData<
  typeof schema,
  'RerequestCheckSuitePayload!'
>

/** @type InputObject */
export type ResolveReviewThreadInput = TypeData<
  typeof schema,
  'ResolveReviewThreadInput!'
>

/** @type Object */
export type ResolveReviewThreadPayload = TypeData<
  typeof schema,
  'ResolveReviewThreadPayload!'
>

/**
 * @type Object
 * @implements Contribution
 */
export type RestrictedContribution = TypeData<
  typeof schema,
  'RestrictedContribution!'
>

/**
 * @type Object
 * @implements Node
 */
export type ReviewDismissalAllowance = TypeData<
  typeof schema,
  'ReviewDismissalAllowance!'
>

/** @type Union */
export type ReviewDismissalAllowanceActor = TypeData<
  typeof schema,
  'ReviewDismissalAllowanceActor!'
>

/** @type Object */
export type ReviewDismissalAllowanceConnection = TypeData<
  typeof schema,
  'ReviewDismissalAllowanceConnection!'
>

/** @type Object */
export type ReviewDismissalAllowanceEdge = TypeData<
  typeof schema,
  'ReviewDismissalAllowanceEdge!'
>

/**
 * @type Object
 * @implements Node, UniformResourceLocatable
 */
export type ReviewDismissedEvent = TypeData<
  typeof schema,
  'ReviewDismissedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type ReviewRequest = TypeData<typeof schema, 'ReviewRequest!'>

/** @type Object */
export type ReviewRequestConnection = TypeData<
  typeof schema,
  'ReviewRequestConnection!'
>

/** @type Object */
export type ReviewRequestEdge = TypeData<typeof schema, 'ReviewRequestEdge!'>

/**
 * @type Object
 * @implements Node
 */
export type ReviewRequestRemovedEvent = TypeData<
  typeof schema,
  'ReviewRequestRemovedEvent!'
>

/**
 * @type Object
 * @implements Node
 */
export type ReviewRequestedEvent = TypeData<
  typeof schema,
  'ReviewRequestedEvent!'
>

/**
 * @type Object
 * @implements HovercardContext
 */
export type ReviewStatusHovercardContext = TypeData<
  typeof schema,
  'ReviewStatusHovercardContext!'
>

export enum SamlDigestAlgorithm {
  SHA1,
  SHA256,
  SHA384,
  SHA512,
}

export enum SamlSignatureAlgorithm {
  RSA_SHA1,
  RSA_SHA256,
  RSA_SHA384,
  RSA_SHA512,
}

/**
 * @type Object
 * @implements Node
 */
export type SavedReply = TypeData<typeof schema, 'SavedReply!'>

/** @type Object */
export type SavedReplyConnection = TypeData<
  typeof schema,
  'SavedReplyConnection!'
>

/** @type Object */
export type SavedReplyEdge = TypeData<typeof schema, 'SavedReplyEdge!'>

/** @type InputObject */
export type SavedReplyOrder = TypeData<typeof schema, 'SavedReplyOrder!'>

export enum SavedReplyOrderField {
  UPDATED_AT,
}

/** @type Union */
export type SearchResultItem = TypeData<typeof schema, 'SearchResultItem!'>

/** @type Object */
export type SearchResultItemConnection = TypeData<
  typeof schema,
  'SearchResultItemConnection!'
>

/** @type Object */
export type SearchResultItemEdge = TypeData<
  typeof schema,
  'SearchResultItemEdge!'
>

export enum SearchType {
  ISSUE,
  REPOSITORY,
  USER,
}

/**
 * @type Object
 * @implements Node
 */
export type SecurityAdvisory = TypeData<typeof schema, 'SecurityAdvisory!'>

/** @type Object */
export type SecurityAdvisoryConnection = TypeData<
  typeof schema,
  'SecurityAdvisoryConnection!'
>

export enum SecurityAdvisoryEcosystem {
  RUBYGEMS,
  NPM,
  PIP,
  MAVEN,
  NUGET,
  COMPOSER,
}

/** @type Object */
export type SecurityAdvisoryEdge = TypeData<
  typeof schema,
  'SecurityAdvisoryEdge!'
>

/** @type Object */
export type SecurityAdvisoryIdentifier = TypeData<
  typeof schema,
  'SecurityAdvisoryIdentifier!'
>

/** @type InputObject */
export type SecurityAdvisoryIdentifierFilter = TypeData<
  typeof schema,
  'SecurityAdvisoryIdentifierFilter!'
>

export enum SecurityAdvisoryIdentifierType {
  CVE,
  GHSA,
}

/** @type InputObject */
export type SecurityAdvisoryOrder = TypeData<
  typeof schema,
  'SecurityAdvisoryOrder!'
>

export enum SecurityAdvisoryOrderField {
  PUBLISHED_AT,
  UPDATED_AT,
}

/** @type Object */
export type SecurityAdvisoryPackage = TypeData<
  typeof schema,
  'SecurityAdvisoryPackage!'
>

/** @type Object */
export type SecurityAdvisoryPackageVersion = TypeData<
  typeof schema,
  'SecurityAdvisoryPackageVersion!'
>

/** @type Object */
export type SecurityAdvisoryReference = TypeData<
  typeof schema,
  'SecurityAdvisoryReference!'
>

export enum SecurityAdvisorySeverity {
  LOW,
  MODERATE,
  HIGH,
  CRITICAL,
}

/** @type Object */
export type SecurityVulnerability = TypeData<
  typeof schema,
  'SecurityVulnerability!'
>

/** @type Object */
export type SecurityVulnerabilityConnection = TypeData<
  typeof schema,
  'SecurityVulnerabilityConnection!'
>

/** @type Object */
export type SecurityVulnerabilityEdge = TypeData<
  typeof schema,
  'SecurityVulnerabilityEdge!'
>

/** @type InputObject */
export type SecurityVulnerabilityOrder = TypeData<
  typeof schema,
  'SecurityVulnerabilityOrder!'
>

export enum SecurityVulnerabilityOrderField {
  UPDATED_AT,
}

/** @type InputObject */
export type SetEnterpriseIdentityProviderInput = TypeData<
  typeof schema,
  'SetEnterpriseIdentityProviderInput!'
>

/** @type Object */
export type SetEnterpriseIdentityProviderPayload = TypeData<
  typeof schema,
  'SetEnterpriseIdentityProviderPayload!'
>

/**
 * @type Object
 * @implements GitSignature
 */
export type SmimeSignature = TypeData<typeof schema, 'SmimeSignature!'>

/** @type Union */
export type Sponsor = TypeData<typeof schema, 'Sponsor!'>

/** @type Interface */
export type Sponsorable = TypeData<typeof schema, 'Sponsorable!'>

/**
 * @type Object
 * @implements Node
 */
export type SponsorsListing = TypeData<typeof schema, 'SponsorsListing!'>

/**
 * @type Object
 * @implements Node
 */
export type SponsorsTier = TypeData<typeof schema, 'SponsorsTier!'>

/** @type Object */
export type SponsorsTierAdminInfo = TypeData<
  typeof schema,
  'SponsorsTierAdminInfo!'
>

/** @type Object */
export type SponsorsTierConnection = TypeData<
  typeof schema,
  'SponsorsTierConnection!'
>

/** @type Object */
export type SponsorsTierEdge = TypeData<typeof schema, 'SponsorsTierEdge!'>

/** @type InputObject */
export type SponsorsTierOrder = TypeData<typeof schema, 'SponsorsTierOrder!'>

export enum SponsorsTierOrderField {
  CREATED_AT,
  MONTHLY_PRICE_IN_CENTS,
}

/**
 * @type Object
 * @implements Node
 */
export type Sponsorship = TypeData<typeof schema, 'Sponsorship!'>

/** @type Object */
export type SponsorshipConnection = TypeData<
  typeof schema,
  'SponsorshipConnection!'
>

/** @type Object */
export type SponsorshipEdge = TypeData<typeof schema, 'SponsorshipEdge!'>

/** @type InputObject */
export type SponsorshipOrder = TypeData<typeof schema, 'SponsorshipOrder!'>

export enum SponsorshipOrderField {
  CREATED_AT,
}

export enum SponsorshipPrivacy {
  PUBLIC,
  PRIVATE,
}

/** @type InputObject */
export type StarOrder = TypeData<typeof schema, 'StarOrder!'>

export enum StarOrderField {
  STARRED_AT,
}

/** @type Object */
export type StargazerConnection = TypeData<
  typeof schema,
  'StargazerConnection!'
>

/** @type Object */
export type StargazerEdge = TypeData<typeof schema, 'StargazerEdge!'>

/** @type Interface */
export type Starrable = TypeData<typeof schema, 'Starrable!'>

/** @type Object */
export type StarredRepositoryConnection = TypeData<
  typeof schema,
  'StarredRepositoryConnection!'
>

/** @type Object */
export type StarredRepositoryEdge = TypeData<
  typeof schema,
  'StarredRepositoryEdge!'
>

/**
 * @type Object
 * @implements Node
 */
export type Status = TypeData<typeof schema, 'Status!'>

/**
 * @type Object
 * @implements Node
 */
export type StatusCheckRollup = TypeData<typeof schema, 'StatusCheckRollup!'>

/** @type Union */
export type StatusCheckRollupContext = TypeData<
  typeof schema,
  'StatusCheckRollupContext!'
>

/** @type Object */
export type StatusCheckRollupContextConnection = TypeData<
  typeof schema,
  'StatusCheckRollupContextConnection!'
>

/** @type Object */
export type StatusCheckRollupContextEdge = TypeData<
  typeof schema,
  'StatusCheckRollupContextEdge!'
>

/**
 * @type Object
 * @implements Node
 */
export type StatusContext = TypeData<typeof schema, 'StatusContext!'>

export enum StatusState {
  EXPECTED,
  ERROR,
  FAILURE,
  PENDING,
  SUCCESS,
}

/** @type Scalar */
export type String = TypeData<typeof schema, 'String!'>

/** @type InputObject */
export type SubmitPullRequestReviewInput = TypeData<
  typeof schema,
  'SubmitPullRequestReviewInput!'
>

/** @type Object */
export type SubmitPullRequestReviewPayload = TypeData<
  typeof schema,
  'SubmitPullRequestReviewPayload!'
>

/** @type Object */
export type Submodule = TypeData<typeof schema, 'Submodule!'>

/** @type Object */
export type SubmoduleConnection = TypeData<
  typeof schema,
  'SubmoduleConnection!'
>

/** @type Object */
export type SubmoduleEdge = TypeData<typeof schema, 'SubmoduleEdge!'>

/** @type Interface */
export type Subscribable = TypeData<typeof schema, 'Subscribable!'>

/**
 * @type Object
 * @implements Node
 */
export type SubscribedEvent = TypeData<typeof schema, 'SubscribedEvent!'>

export enum SubscriptionState {
  UNSUBSCRIBED,
  SUBSCRIBED,
  IGNORED,
}

/** @type Object */
export type SuggestedReviewer = TypeData<typeof schema, 'SuggestedReviewer!'>

/**
 * @type Object
 * @implements Node, GitObject
 */
export type Tag = TypeData<typeof schema, 'Tag!'>

/**
 * @type Object
 * @implements Node, Subscribable, MemberStatusable
 */
export type Team = TypeData<typeof schema, 'Team!'>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
export type TeamAddMemberAuditEntry = TypeData<
  typeof schema,
  'TeamAddMemberAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
 */
export type TeamAddRepositoryAuditEntry = TypeData<
  typeof schema,
  'TeamAddRepositoryAuditEntry!'
>

/** @type Interface */
export type TeamAuditEntryData = TypeData<typeof schema, 'TeamAuditEntryData!'>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
export type TeamChangeParentTeamAuditEntry = TypeData<
  typeof schema,
  'TeamChangeParentTeamAuditEntry!'
>

/** @type Object */
export type TeamConnection = TypeData<typeof schema, 'TeamConnection!'>

/**
 * @type Object
 * @implements Node, Comment, Deletable, Reactable, Subscribable, UniformResourceLocatable, Updatable, UpdatableComment
 */
export type TeamDiscussion = TypeData<typeof schema, 'TeamDiscussion!'>

/**
 * @type Object
 * @implements Node, Comment, Deletable, Reactable, UniformResourceLocatable, Updatable, UpdatableComment
 */
export type TeamDiscussionComment = TypeData<
  typeof schema,
  'TeamDiscussionComment!'
>

/** @type Object */
export type TeamDiscussionCommentConnection = TypeData<
  typeof schema,
  'TeamDiscussionCommentConnection!'
>

/** @type Object */
export type TeamDiscussionCommentEdge = TypeData<
  typeof schema,
  'TeamDiscussionCommentEdge!'
>

/** @type InputObject */
export type TeamDiscussionCommentOrder = TypeData<
  typeof schema,
  'TeamDiscussionCommentOrder!'
>

export enum TeamDiscussionCommentOrderField {
  NUMBER,
}

/** @type Object */
export type TeamDiscussionConnection = TypeData<
  typeof schema,
  'TeamDiscussionConnection!'
>

/** @type Object */
export type TeamDiscussionEdge = TypeData<typeof schema, 'TeamDiscussionEdge!'>

/** @type InputObject */
export type TeamDiscussionOrder = TypeData<
  typeof schema,
  'TeamDiscussionOrder!'
>

export enum TeamDiscussionOrderField {
  CREATED_AT,
}

/** @type Object */
export type TeamEdge = TypeData<typeof schema, 'TeamEdge!'>

/** @type Object */
export type TeamMemberConnection = TypeData<
  typeof schema,
  'TeamMemberConnection!'
>

/** @type Object */
export type TeamMemberEdge = TypeData<typeof schema, 'TeamMemberEdge!'>

/** @type InputObject */
export type TeamMemberOrder = TypeData<typeof schema, 'TeamMemberOrder!'>

export enum TeamMemberOrderField {
  LOGIN,
  CREATED_AT,
}

export enum TeamMemberRole {
  MAINTAINER,
  MEMBER,
}

export enum TeamMembershipType {
  IMMEDIATE,
  CHILD_TEAM,
  ALL,
}

/** @type InputObject */
export type TeamOrder = TypeData<typeof schema, 'TeamOrder!'>

export enum TeamOrderField {
  NAME,
}

export enum TeamPrivacy {
  SECRET,
  VISIBLE,
}

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
 */
export type TeamRemoveMemberAuditEntry = TypeData<
  typeof schema,
  'TeamRemoveMemberAuditEntry!'
>

/**
 * @type Object
 * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
 */
export type TeamRemoveRepositoryAuditEntry = TypeData<
  typeof schema,
  'TeamRemoveRepositoryAuditEntry!'
>

/** @type Object */
export type TeamRepositoryConnection = TypeData<
  typeof schema,
  'TeamRepositoryConnection!'
>

/** @type Object */
export type TeamRepositoryEdge = TypeData<typeof schema, 'TeamRepositoryEdge!'>

/** @type InputObject */
export type TeamRepositoryOrder = TypeData<
  typeof schema,
  'TeamRepositoryOrder!'
>

export enum TeamRepositoryOrderField {
  CREATED_AT,
  UPDATED_AT,
  PUSHED_AT,
  NAME,
  PERMISSION,
  STARGAZERS,
}

export enum TeamRole {
  ADMIN,
  MEMBER,
}

/** @type Object */
export type TextMatch = TypeData<typeof schema, 'TextMatch!'>

/** @type Object */
export type TextMatchHighlight = TypeData<typeof schema, 'TextMatchHighlight!'>

/**
 * @type Object
 * @implements Node, Starrable
 */
export type Topic = TypeData<typeof schema, 'Topic!'>

/** @type Interface */
export type TopicAuditEntryData = TypeData<
  typeof schema,
  'TopicAuditEntryData!'
>

export enum TopicSuggestionDeclineReason {
  NOT_RELEVANT,
  TOO_SPECIFIC,
  PERSONAL_PREFERENCE,
  TOO_GENERAL,
}

/** @type InputObject */
export type TransferIssueInput = TypeData<typeof schema, 'TransferIssueInput!'>

/** @type Object */
export type TransferIssuePayload = TypeData<
  typeof schema,
  'TransferIssuePayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type TransferredEvent = TypeData<typeof schema, 'TransferredEvent!'>

/**
 * @type Object
 * @implements Node, GitObject
 */
export type Tree = TypeData<typeof schema, 'Tree!'>

/** @type Object */
export type TreeEntry = TypeData<typeof schema, 'TreeEntry!'>

/** @type Scalar */
export type URI = TypeData<typeof schema, 'URI!'>

/** @type InputObject */
export type UnarchiveRepositoryInput = TypeData<
  typeof schema,
  'UnarchiveRepositoryInput!'
>

/** @type Object */
export type UnarchiveRepositoryPayload = TypeData<
  typeof schema,
  'UnarchiveRepositoryPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type UnassignedEvent = TypeData<typeof schema, 'UnassignedEvent!'>

/** @type InputObject */
export type UnfollowUserInput = TypeData<typeof schema, 'UnfollowUserInput!'>

/** @type Object */
export type UnfollowUserPayload = TypeData<
  typeof schema,
  'UnfollowUserPayload!'
>

/** @type Interface */
export type UniformResourceLocatable = TypeData<
  typeof schema,
  'UniformResourceLocatable!'
>

/**
 * @type Object
 * @implements GitSignature
 */
export type UnknownSignature = TypeData<typeof schema, 'UnknownSignature!'>

/**
 * @type Object
 * @implements Node
 */
export type UnlabeledEvent = TypeData<typeof schema, 'UnlabeledEvent!'>

/** @type InputObject */
export type UnlinkRepositoryFromProjectInput = TypeData<
  typeof schema,
  'UnlinkRepositoryFromProjectInput!'
>

/** @type Object */
export type UnlinkRepositoryFromProjectPayload = TypeData<
  typeof schema,
  'UnlinkRepositoryFromProjectPayload!'
>

/** @type InputObject */
export type UnlockLockableInput = TypeData<
  typeof schema,
  'UnlockLockableInput!'
>

/** @type Object */
export type UnlockLockablePayload = TypeData<
  typeof schema,
  'UnlockLockablePayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type UnlockedEvent = TypeData<typeof schema, 'UnlockedEvent!'>

/** @type InputObject */
export type UnmarkFileAsViewedInput = TypeData<
  typeof schema,
  'UnmarkFileAsViewedInput!'
>

/** @type Object */
export type UnmarkFileAsViewedPayload = TypeData<
  typeof schema,
  'UnmarkFileAsViewedPayload!'
>

/** @type InputObject */
export type UnmarkIssueAsDuplicateInput = TypeData<
  typeof schema,
  'UnmarkIssueAsDuplicateInput!'
>

/** @type Object */
export type UnmarkIssueAsDuplicatePayload = TypeData<
  typeof schema,
  'UnmarkIssueAsDuplicatePayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type UnmarkedAsDuplicateEvent = TypeData<
  typeof schema,
  'UnmarkedAsDuplicateEvent!'
>

/** @type InputObject */
export type UnminimizeCommentInput = TypeData<
  typeof schema,
  'UnminimizeCommentInput!'
>

/** @type Object */
export type UnminimizeCommentPayload = TypeData<
  typeof schema,
  'UnminimizeCommentPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type UnpinnedEvent = TypeData<typeof schema, 'UnpinnedEvent!'>

/** @type InputObject */
export type UnresolveReviewThreadInput = TypeData<
  typeof schema,
  'UnresolveReviewThreadInput!'
>

/** @type Object */
export type UnresolveReviewThreadPayload = TypeData<
  typeof schema,
  'UnresolveReviewThreadPayload!'
>

/**
 * @type Object
 * @implements Node
 */
export type UnsubscribedEvent = TypeData<typeof schema, 'UnsubscribedEvent!'>

/** @type Interface */
export type Updatable = TypeData<typeof schema, 'Updatable!'>

/** @type Interface */
export type UpdatableComment = TypeData<typeof schema, 'UpdatableComment!'>

/** @type InputObject */
export type UpdateBranchProtectionRuleInput = TypeData<
  typeof schema,
  'UpdateBranchProtectionRuleInput!'
>

/** @type Object */
export type UpdateBranchProtectionRulePayload = TypeData<
  typeof schema,
  'UpdateBranchProtectionRulePayload!'
>

/** @type InputObject */
export type UpdateCheckRunInput = TypeData<
  typeof schema,
  'UpdateCheckRunInput!'
>

/** @type Object */
export type UpdateCheckRunPayload = TypeData<
  typeof schema,
  'UpdateCheckRunPayload!'
>

/** @type InputObject */
export type UpdateCheckSuitePreferencesInput = TypeData<
  typeof schema,
  'UpdateCheckSuitePreferencesInput!'
>

/** @type Object */
export type UpdateCheckSuitePreferencesPayload = TypeData<
  typeof schema,
  'UpdateCheckSuitePreferencesPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseActionExecutionCapabilitySettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseActionExecutionCapabilitySettingInput!'
>

/** @type Object */
export type UpdateEnterpriseActionExecutionCapabilitySettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseActionExecutionCapabilitySettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseAdministratorRoleInput = TypeData<
  typeof schema,
  'UpdateEnterpriseAdministratorRoleInput!'
>

/** @type Object */
export type UpdateEnterpriseAdministratorRolePayload = TypeData<
  typeof schema,
  'UpdateEnterpriseAdministratorRolePayload!'
>

/** @type InputObject */
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseDefaultRepositoryPermissionSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanDeleteIssuesSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanMakePurchasesSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanMakePurchasesSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseOrganizationProjectsSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseOrganizationProjectsSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseOrganizationProjectsSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseOrganizationProjectsSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseProfileInput = TypeData<
  typeof schema,
  'UpdateEnterpriseProfileInput!'
>

/** @type Object */
export type UpdateEnterpriseProfilePayload = TypeData<
  typeof schema,
  'UpdateEnterpriseProfilePayload!'
>

/** @type InputObject */
export type UpdateEnterpriseRepositoryProjectsSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseRepositoryProjectsSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseRepositoryProjectsSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseRepositoryProjectsSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseTeamDiscussionsSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseTeamDiscussionsSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseTeamDiscussionsSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseTeamDiscussionsSettingPayload!'
>

/** @type InputObject */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = TypeData<
  typeof schema,
  'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!'
>

/** @type Object */
export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = TypeData<
  typeof schema,
  'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload!'
>

/** @type InputObject */
export type UpdateIpAllowListEnabledSettingInput = TypeData<
  typeof schema,
  'UpdateIpAllowListEnabledSettingInput!'
>

/** @type Object */
export type UpdateIpAllowListEnabledSettingPayload = TypeData<
  typeof schema,
  'UpdateIpAllowListEnabledSettingPayload!'
>

/** @type InputObject */
export type UpdateIpAllowListEntryInput = TypeData<
  typeof schema,
  'UpdateIpAllowListEntryInput!'
>

/** @type Object */
export type UpdateIpAllowListEntryPayload = TypeData<
  typeof schema,
  'UpdateIpAllowListEntryPayload!'
>

/** @type InputObject */
export type UpdateIssueCommentInput = TypeData<
  typeof schema,
  'UpdateIssueCommentInput!'
>

/** @type Object */
export type UpdateIssueCommentPayload = TypeData<
  typeof schema,
  'UpdateIssueCommentPayload!'
>

/** @type InputObject */
export type UpdateIssueInput = TypeData<typeof schema, 'UpdateIssueInput!'>

/** @type Object */
export type UpdateIssuePayload = TypeData<typeof schema, 'UpdateIssuePayload!'>

/** @type InputObject */
export type UpdateProjectCardInput = TypeData<
  typeof schema,
  'UpdateProjectCardInput!'
>

/** @type Object */
export type UpdateProjectCardPayload = TypeData<
  typeof schema,
  'UpdateProjectCardPayload!'
>

/** @type InputObject */
export type UpdateProjectColumnInput = TypeData<
  typeof schema,
  'UpdateProjectColumnInput!'
>

/** @type Object */
export type UpdateProjectColumnPayload = TypeData<
  typeof schema,
  'UpdateProjectColumnPayload!'
>

/** @type InputObject */
export type UpdateProjectInput = TypeData<typeof schema, 'UpdateProjectInput!'>

/** @type Object */
export type UpdateProjectPayload = TypeData<
  typeof schema,
  'UpdateProjectPayload!'
>

/** @type InputObject */
export type UpdatePullRequestInput = TypeData<
  typeof schema,
  'UpdatePullRequestInput!'
>

/** @type Object */
export type UpdatePullRequestPayload = TypeData<
  typeof schema,
  'UpdatePullRequestPayload!'
>

/** @type InputObject */
export type UpdatePullRequestReviewCommentInput = TypeData<
  typeof schema,
  'UpdatePullRequestReviewCommentInput!'
>

/** @type Object */
export type UpdatePullRequestReviewCommentPayload = TypeData<
  typeof schema,
  'UpdatePullRequestReviewCommentPayload!'
>

/** @type InputObject */
export type UpdatePullRequestReviewInput = TypeData<
  typeof schema,
  'UpdatePullRequestReviewInput!'
>

/** @type Object */
export type UpdatePullRequestReviewPayload = TypeData<
  typeof schema,
  'UpdatePullRequestReviewPayload!'
>

/** @type InputObject */
export type UpdateRefInput = TypeData<typeof schema, 'UpdateRefInput!'>

/** @type Object */
export type UpdateRefPayload = TypeData<typeof schema, 'UpdateRefPayload!'>

/** @type InputObject */
export type UpdateRepositoryInput = TypeData<
  typeof schema,
  'UpdateRepositoryInput!'
>

/** @type Object */
export type UpdateRepositoryPayload = TypeData<
  typeof schema,
  'UpdateRepositoryPayload!'
>

/** @type InputObject */
export type UpdateSubscriptionInput = TypeData<
  typeof schema,
  'UpdateSubscriptionInput!'
>

/** @type Object */
export type UpdateSubscriptionPayload = TypeData<
  typeof schema,
  'UpdateSubscriptionPayload!'
>

/** @type InputObject */
export type UpdateTeamDiscussionCommentInput = TypeData<
  typeof schema,
  'UpdateTeamDiscussionCommentInput!'
>

/** @type Object */
export type UpdateTeamDiscussionCommentPayload = TypeData<
  typeof schema,
  'UpdateTeamDiscussionCommentPayload!'
>

/** @type InputObject */
export type UpdateTeamDiscussionInput = TypeData<
  typeof schema,
  'UpdateTeamDiscussionInput!'
>

/** @type Object */
export type UpdateTeamDiscussionPayload = TypeData<
  typeof schema,
  'UpdateTeamDiscussionPayload!'
>

/** @type InputObject */
export type UpdateTopicsInput = TypeData<typeof schema, 'UpdateTopicsInput!'>

/** @type Object */
export type UpdateTopicsPayload = TypeData<
  typeof schema,
  'UpdateTopicsPayload!'
>

/**
 * @type Object
 * @implements Node, Actor, PackageOwner, ProjectOwner, RepositoryOwner, UniformResourceLocatable, ProfileOwner, Sponsorable
 */
export type User = TypeData<typeof schema, 'User!'>

export enum UserBlockDuration {
  ONE_DAY,
  THREE_DAYS,
  ONE_WEEK,
  ONE_MONTH,
  PERMANENT,
}

/**
 * @type Object
 * @implements Node
 */
export type UserBlockedEvent = TypeData<typeof schema, 'UserBlockedEvent!'>

/** @type Object */
export type UserConnection = TypeData<typeof schema, 'UserConnection!'>

/**
 * @type Object
 * @implements Node
 */
export type UserContentEdit = TypeData<typeof schema, 'UserContentEdit!'>

/** @type Object */
export type UserContentEditConnection = TypeData<
  typeof schema,
  'UserContentEditConnection!'
>

/** @type Object */
export type UserContentEditEdge = TypeData<
  typeof schema,
  'UserContentEditEdge!'
>

/** @type Object */
export type UserEdge = TypeData<typeof schema, 'UserEdge!'>

/** @type Object */
export type UserEmailMetadata = TypeData<typeof schema, 'UserEmailMetadata!'>

/**
 * @type Object
 * @implements Node
 */
export type UserStatus = TypeData<typeof schema, 'UserStatus!'>

/** @type Object */
export type UserStatusConnection = TypeData<
  typeof schema,
  'UserStatusConnection!'
>

/** @type Object */
export type UserStatusEdge = TypeData<typeof schema, 'UserStatusEdge!'>

/** @type InputObject */
export type UserStatusOrder = TypeData<typeof schema, 'UserStatusOrder!'>

export enum UserStatusOrderField {
  UPDATED_AT,
}

/**
 * @type Object
 * @implements HovercardContext
 */
export type ViewerHovercardContext = TypeData<
  typeof schema,
  'ViewerHovercardContext!'
>

/** @type Scalar */
export type X509Certificate = TypeData<typeof schema, 'X509Certificate!'>

/** @type Object */
export type __Directive = TypeData<typeof schema, '__Directive!'>

export enum __DirectiveLocation {
  QUERY,
  MUTATION,
  SUBSCRIPTION,
  FIELD,
  FRAGMENT_DEFINITION,
  FRAGMENT_SPREAD,
  INLINE_FRAGMENT,
  SCHEMA,
  SCALAR,
  OBJECT,
  FIELD_DEFINITION,
  ARGUMENT_DEFINITION,
  INTERFACE,
  UNION,
  ENUM,
  ENUM_VALUE,
  INPUT_OBJECT,
  INPUT_FIELD_DEFINITION,
}

/** @type Object */
export type __EnumValue = TypeData<typeof schema, '__EnumValue!'>

/** @type Object */
export type __Field = TypeData<typeof schema, '__Field!'>

/** @type Object */
export type __InputValue = TypeData<typeof schema, '__InputValue!'>

/** @type Object */
export type __Schema = TypeData<typeof schema, '__Schema!'>

/** @type Object */
export type __Type = TypeData<typeof schema, '__Type!'>

export enum __TypeKind {
  SCALAR,
  OBJECT,
  INTERFACE,
  UNION,
  ENUM,
  INPUT_OBJECT,
  LIST,
  NON_NULL,
}

export const schema = createSchema({
  /**
   * @name AcceptEnterpriseAdministratorInvitationInput
   * @type InputObject
   */
  AcceptEnterpriseAdministratorInvitationInput: {
    invitationId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name AcceptEnterpriseAdministratorInvitationPayload
   * @type Object
   */
  AcceptEnterpriseAdministratorInvitationPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The invitation that was accepted. */
    invitation: 'EnterpriseAdministratorInvitation',
    /** A message confirming the result of accepting an administrator invitation. */
    message: 'String',
  },

  /**
   * @name AcceptTopicSuggestionInput
   * @type InputObject
   */
  AcceptTopicSuggestionInput: {
    repositoryId: 'ID!',
    name: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name AcceptTopicSuggestionPayload
   * @type Object
   */
  AcceptTopicSuggestionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The accepted topic. */
    topic: 'Topic',
  },

  ActionExecutionCapabilitySetting,

  /**
   * @name Actor
   * @type Interface
   */
  Actor: [
    {
      /** A URL pointing to the actor's public avatar. */
      avatarUrl: ['URI!', { size: 'Int' }],
      /** The username of the actor. */
      login: 'String!',
      /** The HTTP path for this actor. */
      resourcePath: 'URI!',
      /** The HTTP URL for this actor. */
      url: 'URI!',
    },
    'Bot',
    'EnterpriseUserAccount',
    'Mannequin',
    'Organization',
    'User',
  ],

  /**
   * @name ActorLocation
   * @type Object
   */
  ActorLocation: {
    /** City */
    city: 'String',
    /** Country name */
    country: 'String',
    /** Country code */
    countryCode: 'String',
    /** Region name */
    region: 'String',
    /** Region or state code */
    regionCode: 'String',
  },

  /**
   * @name AddAssigneesToAssignableInput
   * @type InputObject
   */
  AddAssigneesToAssignableInput: {
    assignableId: 'ID!',
    assigneeIds: '[ID!]!',
    clientMutationId: 'String',
  },

  /**
   * @name AddAssigneesToAssignablePayload
   * @type Object
   */
  AddAssigneesToAssignablePayload: {
    /** The item that was assigned. */
    assignable: 'Assignable',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name AddCommentInput
   * @type InputObject
   */
  AddCommentInput: {
    subjectId: 'ID!',
    body: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name AddCommentPayload
   * @type Object
   */
  AddCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The edge from the subject's comment connection. */
    commentEdge: 'IssueCommentEdge',
    /** The subject */
    subject: 'Node',
    /** The edge from the subject's timeline connection. */
    timelineEdge: 'IssueTimelineItemEdge',
  },

  /**
   * @name AddLabelsToLabelableInput
   * @type InputObject
   */
  AddLabelsToLabelableInput: {
    labelableId: 'ID!',
    labelIds: '[ID!]!',
    clientMutationId: 'String',
  },

  /**
   * @name AddLabelsToLabelablePayload
   * @type Object
   */
  AddLabelsToLabelablePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The item that was labeled. */
    labelable: 'Labelable',
  },

  /**
   * @name AddProjectCardInput
   * @type InputObject
   */
  AddProjectCardInput: {
    projectColumnId: 'ID!',
    contentId: 'ID',
    note: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name AddProjectCardPayload
   * @type Object
   */
  AddProjectCardPayload: {
    /** The edge from the ProjectColumn's card connection. */
    cardEdge: 'ProjectCardEdge',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The ProjectColumn */
    projectColumn: 'ProjectColumn',
  },

  /**
   * @name AddProjectColumnInput
   * @type InputObject
   */
  AddProjectColumnInput: {
    projectId: 'ID!',
    name: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name AddProjectColumnPayload
   * @type Object
   */
  AddProjectColumnPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The edge from the project's column connection. */
    columnEdge: 'ProjectColumnEdge',
    /** The project */
    project: 'Project',
  },

  /**
   * @name AddPullRequestReviewCommentInput
   * @type InputObject
   */
  AddPullRequestReviewCommentInput: {
    pullRequestId: 'ID',
    pullRequestReviewId: 'ID',
    commitOID: 'GitObjectID',
    body: 'String!',
    path: 'String',
    position: 'Int',
    inReplyTo: 'ID',
    clientMutationId: 'String',
  },

  /**
   * @name AddPullRequestReviewCommentPayload
   * @type Object
   */
  AddPullRequestReviewCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The newly created comment. */
    comment: 'PullRequestReviewComment',
    /** The edge from the review's comment connection. */
    commentEdge: 'PullRequestReviewCommentEdge',
  },

  /**
   * @name AddPullRequestReviewInput
   * @type InputObject
   */
  AddPullRequestReviewInput: {
    pullRequestId: 'ID!',
    commitOID: 'GitObjectID',
    body: 'String',
    event: 'PullRequestReviewEvent',
    comments: '[DraftPullRequestReviewComment]',
    threads: '[DraftPullRequestReviewThread]',
    clientMutationId: 'String',
  },

  /**
   * @name AddPullRequestReviewPayload
   * @type Object
   */
  AddPullRequestReviewPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The newly created pull request review. */
    pullRequestReview: 'PullRequestReview',
    /** The edge from the pull request's review connection. */
    reviewEdge: 'PullRequestReviewEdge',
  },

  /**
   * @name AddPullRequestReviewThreadInput
   * @type InputObject
   */
  AddPullRequestReviewThreadInput: {
    path: 'String!',
    body: 'String!',
    pullRequestId: 'ID',
    pullRequestReviewId: 'ID',
    line: 'Int!',
    side: 'DiffSide',
    startLine: 'Int',
    startSide: 'DiffSide',
    clientMutationId: 'String',
  },

  /**
   * @name AddPullRequestReviewThreadPayload
   * @type Object
   */
  AddPullRequestReviewThreadPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The newly created thread. */
    thread: 'PullRequestReviewThread',
  },

  /**
   * @name AddReactionInput
   * @type InputObject
   */
  AddReactionInput: {
    subjectId: 'ID!',
    content: 'ReactionContent!',
    clientMutationId: 'String',
  },

  /**
   * @name AddReactionPayload
   * @type Object
   */
  AddReactionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The reaction object. */
    reaction: 'Reaction',
    /** The reactable subject. */
    subject: 'Reactable',
  },

  /**
   * @name AddStarInput
   * @type InputObject
   */
  AddStarInput: {
    starrableId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name AddStarPayload
   * @type Object
   */
  AddStarPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The starrable. */
    starrable: 'Starrable',
  },

  /**
   * @name AddedToProjectEvent
   * @type Object
   * @implements Node
   */
  AddedToProjectEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
  },

  /**
   * @name App
   * @type Object
   * @implements Node
   */
  App: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The description of the app. */
    description: 'String',
    id: 'ID!',
    /** The hex color code, without the leading '#', for the logo background. */
    logoBackgroundColor: 'String!',
    /** A URL pointing to the app's logo. */
    logoUrl: ['URI!', { size: 'Int' }],
    /** The name of the app. */
    name: 'String!',
    /** A slug based on the name of the app for use in URLs. */
    slug: 'String!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The URL to the app's homepage. */
    url: 'URI!',
  },

  /**
   * @name ArchiveRepositoryInput
   * @type InputObject
   */
  ArchiveRepositoryInput: {
    repositoryId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name ArchiveRepositoryPayload
   * @type Object
   */
  ArchiveRepositoryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The repository that was marked as archived. */
    repository: 'Repository',
  },

  /**
   * @name Assignable
   * @type Interface
   */
  Assignable: [
    {
      /** A list of Users assigned to this object. */
      assignees: [
        'UserConnection!',
        { after: 'String', before: 'String', first: 'Int', last: 'Int' },
      ],
    },
    'Issue',
    'PullRequest',
  ],

  /**
   * @name AssignedEvent
   * @type Object
   * @implements Node
   */
  AssignedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the assignable associated with the event. */
    assignable: 'Assignable!',
    /** Identifies the user or mannequin that was assigned. */
    assignee: 'Assignee',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /**
     * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
     * Identifies the user who was assigned.
     */
    user: 'User',
  },

  /**
   * @name Assignee
   * @type Union
   */
  Assignee: ['Bot', 'Mannequin', 'Organization', 'User'],

  /**
   * @name AuditEntry
   * @type Interface
   */
  AuditEntry: [
    {
      /** The action name */
      action: 'String!',
      /** The user who initiated the action */
      actor: 'AuditEntryActor',
      /** The IP address of the actor */
      actorIp: 'String',
      /** A readable representation of the actor's location */
      actorLocation: 'ActorLocation',
      /** The username of the user who initiated the action */
      actorLogin: 'String',
      /** The HTTP path for the actor. */
      actorResourcePath: 'URI',
      /** The HTTP URL for the actor. */
      actorUrl: 'URI',
      /** The time the action was initiated */
      createdAt: 'PreciseDateTime!',
      /** The corresponding operation type for the action */
      operationType: 'OperationType',
      /** The user affected by the action */
      user: 'User',
      /** For actions involving two users, the actor is the initiator and the user is the affected user. */
      userLogin: 'String',
      /** The HTTP path for the user. */
      userResourcePath: 'URI',
      /** The HTTP URL for the user. */
      userUrl: 'URI',
    },
    'MembersCanDeleteReposClearAuditEntry',
    'MembersCanDeleteReposDisableAuditEntry',
    'MembersCanDeleteReposEnableAuditEntry',
    'OauthApplicationCreateAuditEntry',
    'OrgAddBillingManagerAuditEntry',
    'OrgAddMemberAuditEntry',
    'OrgBlockUserAuditEntry',
    'OrgConfigDisableCollaboratorsOnlyAuditEntry',
    'OrgConfigEnableCollaboratorsOnlyAuditEntry',
    'OrgCreateAuditEntry',
    'OrgDisableOauthAppRestrictionsAuditEntry',
    'OrgDisableSamlAuditEntry',
    'OrgDisableTwoFactorRequirementAuditEntry',
    'OrgEnableOauthAppRestrictionsAuditEntry',
    'OrgEnableSamlAuditEntry',
    'OrgEnableTwoFactorRequirementAuditEntry',
    'OrgInviteMemberAuditEntry',
    'OrgInviteToBusinessAuditEntry',
    'OrgOauthAppAccessApprovedAuditEntry',
    'OrgOauthAppAccessDeniedAuditEntry',
    'OrgOauthAppAccessRequestedAuditEntry',
    'OrgRemoveBillingManagerAuditEntry',
    'OrgRemoveMemberAuditEntry',
    'OrgRemoveOutsideCollaboratorAuditEntry',
    'OrgRestoreMemberAuditEntry',
    'OrgUnblockUserAuditEntry',
    'OrgUpdateDefaultRepositoryPermissionAuditEntry',
    'OrgUpdateMemberAuditEntry',
    'OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
    'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
    'PrivateRepositoryForkingDisableAuditEntry',
    'PrivateRepositoryForkingEnableAuditEntry',
    'RepoAccessAuditEntry',
    'RepoAddMemberAuditEntry',
    'RepoAddTopicAuditEntry',
    'RepoArchivedAuditEntry',
    'RepoChangeMergeSettingAuditEntry',
    'RepoConfigDisableAnonymousGitAccessAuditEntry',
    'RepoConfigDisableCollaboratorsOnlyAuditEntry',
    'RepoConfigDisableContributorsOnlyAuditEntry',
    'RepoConfigDisableSockpuppetDisallowedAuditEntry',
    'RepoConfigEnableAnonymousGitAccessAuditEntry',
    'RepoConfigEnableCollaboratorsOnlyAuditEntry',
    'RepoConfigEnableContributorsOnlyAuditEntry',
    'RepoConfigEnableSockpuppetDisallowedAuditEntry',
    'RepoConfigLockAnonymousGitAccessAuditEntry',
    'RepoConfigUnlockAnonymousGitAccessAuditEntry',
    'RepoCreateAuditEntry',
    'RepoDestroyAuditEntry',
    'RepoRemoveMemberAuditEntry',
    'RepoRemoveTopicAuditEntry',
    'RepositoryVisibilityChangeDisableAuditEntry',
    'RepositoryVisibilityChangeEnableAuditEntry',
    'TeamAddMemberAuditEntry',
    'TeamAddRepositoryAuditEntry',
    'TeamChangeParentTeamAuditEntry',
    'TeamRemoveMemberAuditEntry',
    'TeamRemoveRepositoryAuditEntry',
  ],

  /**
   * @name AuditEntryActor
   * @type Union
   */
  AuditEntryActor: ['Bot', 'Organization', 'User'],

  /**
   * @name AuditLogOrder
   * @type InputObject
   */
  AuditLogOrder: {
    field: 'AuditLogOrderField',
    direction: 'OrderDirection',
  },

  AuditLogOrderField,

  /**
   * @name AutomaticBaseChangeFailedEvent
   * @type Object
   * @implements Node
   */
  AutomaticBaseChangeFailedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** The new base for this PR */
    newBase: 'String!',
    /** The old base for this PR */
    oldBase: 'String!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
  },

  /**
   * @name AutomaticBaseChangeSucceededEvent
   * @type Object
   * @implements Node
   */
  AutomaticBaseChangeSucceededEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** The new base for this PR */
    newBase: 'String!',
    /** The old base for this PR */
    oldBase: 'String!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
  },

  /**
   * @name BaseRefChangedEvent
   * @type Object
   * @implements Node
   */
  BaseRefChangedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the name of the base ref for the pull request after it was changed. */
    currentRefName: 'String!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** Identifies the name of the base ref for the pull request before it was changed. */
    previousRefName: 'String!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
  },

  /**
   * @name BaseRefDeletedEvent
   * @type Object
   * @implements Node
   */
  BaseRefDeletedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the name of the Ref associated with the `base_ref_deleted` event. */
    baseRefName: 'String',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name BaseRefForcePushedEvent
   * @type Object
   * @implements Node
   */
  BaseRefForcePushedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
    afterCommit: 'Commit',
    /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
    beforeCommit: 'Commit',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
    ref: 'Ref',
  },

  /**
   * @name Blame
   * @type Object
   */
  Blame: {
    /** The list of ranges from a Git blame. */
    ranges: '[BlameRange!]!',
  },

  /**
   * @name BlameRange
   * @type Object
   */
  BlameRange: {
    /** Identifies the recency of the change, from 1 (new) to 10 (old). This is calculated as a 2-quantile and determines the length of distance between the median age of all the changes in the file and the recency of the current range's change. */
    age: 'Int!',
    /** Identifies the line author */
    commit: 'Commit!',
    /** The ending line for the range */
    endingLine: 'Int!',
    /** The starting line for the range */
    startingLine: 'Int!',
  },

  /**
   * @name Blob
   * @type Object
   * @implements Node, GitObject
   */
  Blob: {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: 'String!',
    /** Byte size of Blob object */
    byteSize: 'Int!',
    /** The HTTP path for this Git object */
    commitResourcePath: 'URI!',
    /** The HTTP URL for this Git object */
    commitUrl: 'URI!',
    id: 'ID!',
    /** Indicates whether the Blob is binary or text. Returns null if unable to determine the encoding. */
    isBinary: 'Boolean',
    /** Indicates whether the contents is truncated */
    isTruncated: 'Boolean!',
    /** The Git object ID */
    oid: 'GitObjectID!',
    /** The Repository the Git object belongs to */
    repository: 'Repository!',
    /** UTF8 text data or null if the Blob is binary */
    text: 'String',
  },

  /**
   * @name Bot
   * @type Object
   * @implements Node, Actor, UniformResourceLocatable
   */
  Bot: {
    /** A URL pointing to the GitHub App's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** The username of the actor. */
    login: 'String!',
    /** The HTTP path for this bot */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this bot */
    url: 'URI!',
  },

  /**
   * @name BranchProtectionRule
   * @type Object
   * @implements Node
   */
  BranchProtectionRule: {
    /** A list of conflicts matching branches protection rule and other branch protection rules */
    branchProtectionRuleConflicts: [
      'BranchProtectionRuleConflictConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The actor who created this branch protection rule. */
    creator: 'Actor',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** Will new commits pushed to matching branches dismiss pull request review approvals. */
    dismissesStaleReviews: 'Boolean!',
    id: 'ID!',
    /** Can admins overwrite branch protection. */
    isAdminEnforced: 'Boolean!',
    /** Repository refs that are protected by this rule */
    matchingRefs: [
      'RefConnection!',
      {
        query: 'String',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Identifies the protection rule pattern. */
    pattern: 'String!',
    /** A list push allowances for this branch protection rule. */
    pushAllowances: [
      'PushAllowanceConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The repository associated with this branch protection rule. */
    repository: 'Repository',
    /** Number of approving reviews required to update matching branches. */
    requiredApprovingReviewCount: 'Int',
    /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
    requiredStatusCheckContexts: '[String]',
    /** Are approving reviews required to update matching branches. */
    requiresApprovingReviews: 'Boolean!',
    /** Are reviews from code owners required to update matching branches. */
    requiresCodeOwnerReviews: 'Boolean!',
    /** Are commits required to be signed. */
    requiresCommitSignatures: 'Boolean!',
    /** Are status checks required to update matching branches. */
    requiresStatusChecks: 'Boolean!',
    /** Are branches required to be up to date before merging. */
    requiresStrictStatusChecks: 'Boolean!',
    /** Is pushing to matching branches restricted. */
    restrictsPushes: 'Boolean!',
    /** Is dismissal of pull request reviews restricted. */
    restrictsReviewDismissals: 'Boolean!',
    /** A list review dismissal allowances for this branch protection rule. */
    reviewDismissalAllowances: [
      'ReviewDismissalAllowanceConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
  },

  /**
   * @name BranchProtectionRuleConflict
   * @type Object
   */
  BranchProtectionRuleConflict: {
    /** Identifies the branch protection rule. */
    branchProtectionRule: 'BranchProtectionRule',
    /** Identifies the conflicting branch protection rule. */
    conflictingBranchProtectionRule: 'BranchProtectionRule',
    /** Identifies the branch ref that has conflicting rules */
    ref: 'Ref',
  },

  /**
   * @name BranchProtectionRuleConflictConnection
   * @type Object
   */
  BranchProtectionRuleConflictConnection: {
    /** A list of edges. */
    edges: '[BranchProtectionRuleConflictEdge]',
    /** A list of nodes. */
    nodes: '[BranchProtectionRuleConflict]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name BranchProtectionRuleConflictEdge
   * @type Object
   */
  BranchProtectionRuleConflictEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'BranchProtectionRuleConflict',
  },

  /**
   * @name BranchProtectionRuleConnection
   * @type Object
   */
  BranchProtectionRuleConnection: {
    /** A list of edges. */
    edges: '[BranchProtectionRuleEdge]',
    /** A list of nodes. */
    nodes: '[BranchProtectionRule]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name BranchProtectionRuleEdge
   * @type Object
   */
  BranchProtectionRuleEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'BranchProtectionRule',
  },

  /**
   * @name CancelEnterpriseAdminInvitationInput
   * @type InputObject
   */
  CancelEnterpriseAdminInvitationInput: {
    invitationId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name CancelEnterpriseAdminInvitationPayload
   * @type Object
   */
  CancelEnterpriseAdminInvitationPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The invitation that was canceled. */
    invitation: 'EnterpriseAdministratorInvitation',
    /** A message confirming the result of canceling an administrator invitation. */
    message: 'String',
  },

  /**
   * @name ChangeUserStatusInput
   * @type InputObject
   */
  ChangeUserStatusInput: {
    emoji: 'String',
    message: 'String',
    organizationId: 'ID',
    limitedAvailability: 'Boolean',
    expiresAt: 'DateTime',
    clientMutationId: 'String',
  },

  /**
   * @name ChangeUserStatusPayload
   * @type Object
   */
  ChangeUserStatusPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** Your updated status. */
    status: 'UserStatus',
  },

  /**
   * @name CheckAnnotation
   * @type Object
   */
  CheckAnnotation: {
    /** The annotation's severity level. */
    annotationLevel: 'CheckAnnotationLevel',
    /** The path to the file that this annotation was made on. */
    blobUrl: 'URI!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The position of this annotation. */
    location: 'CheckAnnotationSpan!',
    /** The annotation's message. */
    message: 'String!',
    /** The path that this annotation was made on. */
    path: 'String!',
    /** Additional information about the annotation. */
    rawDetails: 'String',
    /** The annotation's title */
    title: 'String',
  },

  /**
   * @name CheckAnnotationConnection
   * @type Object
   */
  CheckAnnotationConnection: {
    /** A list of edges. */
    edges: '[CheckAnnotationEdge]',
    /** A list of nodes. */
    nodes: '[CheckAnnotation]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CheckAnnotationData
   * @type InputObject
   */
  CheckAnnotationData: {
    path: 'String!',
    location: 'CheckAnnotationRange!',
    annotationLevel: 'CheckAnnotationLevel!',
    message: 'String!',
    title: 'String',
    rawDetails: 'String',
  },

  /**
   * @name CheckAnnotationEdge
   * @type Object
   */
  CheckAnnotationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CheckAnnotation',
  },

  CheckAnnotationLevel,

  /**
   * @name CheckAnnotationPosition
   * @type Object
   */
  CheckAnnotationPosition: {
    /** Column number (1 indexed). */
    column: 'Int',
    /** Line number (1 indexed). */
    line: 'Int!',
  },

  /**
   * @name CheckAnnotationRange
   * @type InputObject
   */
  CheckAnnotationRange: {
    startLine: 'Int!',
    startColumn: 'Int',
    endLine: 'Int!',
    endColumn: 'Int',
  },

  /**
   * @name CheckAnnotationSpan
   * @type Object
   */
  CheckAnnotationSpan: {
    /** End position (inclusive). */
    end: 'CheckAnnotationPosition!',
    /** Start position (inclusive). */
    start: 'CheckAnnotationPosition!',
  },

  CheckConclusionState,

  /**
   * @name CheckRun
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  CheckRun: {
    /** The check run's annotations */
    annotations: [
      'CheckAnnotationConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The check suite that this run is a part of. */
    checkSuite: 'CheckSuite!',
    /** Identifies the date and time when the check run was completed. */
    completedAt: 'DateTime',
    /** The conclusion of the check run. */
    conclusion: 'CheckConclusionState',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The URL from which to find full details of the check run on the integrator's site. */
    detailsUrl: 'URI',
    /** A reference for the check run on the integrator's system. */
    externalId: 'String',
    id: 'ID!',
    /** The name of the check for this check run. */
    name: 'String!',
    /** The permalink to the check run summary. */
    permalink: 'URI!',
    /** The repository associated with this check run. */
    repository: 'Repository!',
    /** The HTTP path for this check run. */
    resourcePath: 'URI!',
    /** Identifies the date and time when the check run was started. */
    startedAt: 'DateTime',
    /** The current status of the check run. */
    status: 'CheckStatusState!',
    /** A string representing the check run's summary */
    summary: 'String',
    /** A string representing the check run's text */
    text: 'String',
    /** A string representing the check run */
    title: 'String',
    /** The HTTP URL for this check run. */
    url: 'URI!',
  },

  /**
   * @name CheckRunAction
   * @type InputObject
   */
  CheckRunAction: {
    label: 'String!',
    description: 'String!',
    identifier: 'String!',
  },

  /**
   * @name CheckRunConnection
   * @type Object
   */
  CheckRunConnection: {
    /** A list of edges. */
    edges: '[CheckRunEdge]',
    /** A list of nodes. */
    nodes: '[CheckRun]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CheckRunEdge
   * @type Object
   */
  CheckRunEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CheckRun',
  },

  /**
   * @name CheckRunFilter
   * @type InputObject
   */
  CheckRunFilter: {
    checkType: 'CheckRunType',
    appId: 'Int',
    checkName: 'String',
    status: 'CheckStatusState',
  },

  /**
   * @name CheckRunOutput
   * @type InputObject
   */
  CheckRunOutput: {
    title: 'String!',
    summary: 'String!',
    text: 'String',
    annotations: '[CheckAnnotationData!]',
    images: '[CheckRunOutputImage!]',
  },

  /**
   * @name CheckRunOutputImage
   * @type InputObject
   */
  CheckRunOutputImage: {
    alt: 'String!',
    imageUrl: 'URI!',
    caption: 'String',
  },

  CheckRunType,

  CheckStatusState,

  /**
   * @name CheckSuite
   * @type Object
   * @implements Node
   */
  CheckSuite: {
    /** The GitHub App which created this check suite. */
    app: 'App',
    /** The name of the branch for this check suite. */
    branch: 'Ref',
    /** The check runs associated with a check suite. */
    checkRuns: [
      'CheckRunConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        filterBy: 'CheckRunFilter',
      },
    ],
    /** The commit for this check suite */
    commit: 'Commit!',
    /** The conclusion of this check suite. */
    conclusion: 'CheckConclusionState',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** A list of open pull requests matching the check suite. */
    matchingPullRequests: [
      'PullRequestConnection',
      {
        states: '[PullRequestState!]',
        labels: '[String!]',
        headRefName: 'String',
        baseRefName: 'String',
        orderBy: 'IssueOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The push that triggered this check suite. */
    push: 'Push',
    /** The repository associated with this check suite. */
    repository: 'Repository!',
    /** The HTTP path for this check suite */
    resourcePath: 'URI!',
    /** The status of this check suite. */
    status: 'CheckStatusState!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this check suite */
    url: 'URI!',
  },

  /**
   * @name CheckSuiteAutoTriggerPreference
   * @type InputObject
   */
  CheckSuiteAutoTriggerPreference: {
    appId: 'ID!',
    setting: 'Boolean!',
  },

  /**
   * @name CheckSuiteConnection
   * @type Object
   */
  CheckSuiteConnection: {
    /** A list of edges. */
    edges: '[CheckSuiteEdge]',
    /** A list of nodes. */
    nodes: '[CheckSuite]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CheckSuiteEdge
   * @type Object
   */
  CheckSuiteEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CheckSuite',
  },

  /**
   * @name CheckSuiteFilter
   * @type InputObject
   */
  CheckSuiteFilter: {
    appId: 'Int',
    checkName: 'String',
  },

  /**
   * @name ClearLabelsFromLabelableInput
   * @type InputObject
   */
  ClearLabelsFromLabelableInput: {
    labelableId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name ClearLabelsFromLabelablePayload
   * @type Object
   */
  ClearLabelsFromLabelablePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The item that was unlabeled. */
    labelable: 'Labelable',
  },

  /**
   * @name CloneProjectInput
   * @type InputObject
   */
  CloneProjectInput: {
    targetOwnerId: 'ID!',
    sourceId: 'ID!',
    includeWorkflows: 'Boolean!',
    name: 'String!',
    body: 'String',
    public: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name CloneProjectPayload
   * @type Object
   */
  CloneProjectPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The id of the JobStatus for populating cloned fields. */
    jobStatusId: 'String',
    /** The new cloned project. */
    project: 'Project',
  },

  /**
   * @name CloneTemplateRepositoryInput
   * @type InputObject
   */
  CloneTemplateRepositoryInput: {
    repositoryId: 'ID!',
    name: 'String!',
    ownerId: 'ID!',
    description: 'String',
    visibility: 'RepositoryVisibility!',
    includeAllBranches: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name CloneTemplateRepositoryPayload
   * @type Object
   */
  CloneTemplateRepositoryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new repository. */
    repository: 'Repository',
  },

  /**
   * @name Closable
   * @type Interface
   */
  Closable: [
    {
      /** `true` if the object is closed (definition of closed may depend on type) */
      closed: 'Boolean!',
      /** Identifies the date and time when the object was closed. */
      closedAt: 'DateTime',
    },
    'Issue',
    'Milestone',
    'Project',
    'PullRequest',
  ],

  /**
   * @name CloseIssueInput
   * @type InputObject
   */
  CloseIssueInput: {
    issueId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name CloseIssuePayload
   * @type Object
   */
  CloseIssuePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The issue that was closed. */
    issue: 'Issue',
  },

  /**
   * @name ClosePullRequestInput
   * @type InputObject
   */
  ClosePullRequestInput: {
    pullRequestId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name ClosePullRequestPayload
   * @type Object
   */
  ClosePullRequestPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The pull request that was closed. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name ClosedEvent
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  ClosedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Object that was closed. */
    closable: 'Closable!',
    /** Object which triggered the creation of this event. */
    closer: 'Closer',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** The HTTP path for this closed event. */
    resourcePath: 'URI!',
    /** The HTTP URL for this closed event. */
    url: 'URI!',
  },

  /**
   * @name Closer
   * @type Union
   */
  Closer: ['Commit', 'PullRequest'],

  /**
   * @name CodeOfConduct
   * @type Object
   * @implements Node
   */
  CodeOfConduct: {
    /** The body of the Code of Conduct */
    body: 'String',
    id: 'ID!',
    /** The key for the Code of Conduct */
    key: 'String!',
    /** The formal name of the Code of Conduct */
    name: 'String!',
    /** The HTTP path for this Code of Conduct */
    resourcePath: 'URI',
    /** The HTTP URL for this Code of Conduct */
    url: 'URI',
  },

  CollaboratorAffiliation,

  /**
   * @name Comment
   * @type Interface
   */
  Comment: [
    {
      /** The actor who authored the comment. */
      author: 'Actor',
      /** Author's association with the subject of the comment. */
      authorAssociation: 'CommentAuthorAssociation!',
      /** The body as Markdown. */
      body: 'String!',
      /** The body rendered to HTML. */
      bodyHTML: 'HTML!',
      /** The body rendered to text. */
      bodyText: 'String!',
      /** Identifies the date and time when the object was created. */
      createdAt: 'DateTime!',
      /** Check if this comment was created via an email reply. */
      createdViaEmail: 'Boolean!',
      /** The actor who edited the comment. */
      editor: 'Actor',
      id: 'ID!',
      /** Check if this comment was edited and includes an edit with the creation data */
      includesCreatedEdit: 'Boolean!',
      /** The moment the editor made the last edit */
      lastEditedAt: 'DateTime',
      /** Identifies when the comment was published at. */
      publishedAt: 'DateTime',
      /** Identifies the date and time when the object was last updated. */
      updatedAt: 'DateTime!',
      /** A list of edits to this content. */
      userContentEdits: [
        'UserContentEditConnection',
        { after: 'String', before: 'String', first: 'Int', last: 'Int' },
      ],
      /** Did the viewer author this comment. */
      viewerDidAuthor: 'Boolean!',
    },
    'CommitComment',
    'GistComment',
    'Issue',
    'IssueComment',
    'PullRequest',
    'PullRequestReview',
    'PullRequestReviewComment',
    'TeamDiscussion',
    'TeamDiscussionComment',
  ],

  CommentAuthorAssociation,

  CommentCannotUpdateReason,

  /**
   * @name CommentDeletedEvent
   * @type Object
   * @implements Node
   */
  CommentDeletedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The user who authored the deleted comment. */
    deletedCommentAuthor: 'Actor',
    id: 'ID!',
  },

  /**
   * @name Commit
   * @type Object
   * @implements Node, GitObject, Subscribable, UniformResourceLocatable
   */
  Commit: {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: 'String!',
    /** The number of additions in this commit. */
    additions: 'Int!',
    /** The pull requests associated with a commit */
    associatedPullRequests: [
      'PullRequestConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'PullRequestOrder',
      },
    ],
    /** Authorship details of the commit. */
    author: 'GitActor',
    /** Check if the committer and the author match. */
    authoredByCommitter: 'Boolean!',
    /** The datetime when this commit was authored. */
    authoredDate: 'DateTime!',
    /**
     * The list of authors for this commit based on the git author and the Co-authored-by
     * message trailer. The git author will always be first.
     *
     */
    authors: [
      'GitActorConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Fetches `git blame` information. */
    blame: ['Blame!', { path: 'String!' }],
    /** The number of changed files in this commit. */
    changedFiles: 'Int!',
    /** The check suites associated with a commit. */
    checkSuites: [
      'CheckSuiteConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        filterBy: 'CheckSuiteFilter',
      },
    ],
    /** Comments made on the commit. */
    comments: [
      'CommitCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The HTTP path for this Git object */
    commitResourcePath: 'URI!',
    /** The HTTP URL for this Git object */
    commitUrl: 'URI!',
    /** The datetime when this commit was committed. */
    committedDate: 'DateTime!',
    /** Check if commited via GitHub web UI. */
    committedViaWeb: 'Boolean!',
    /** Committership details of the commit. */
    committer: 'GitActor',
    /** The number of deletions in this commit. */
    deletions: 'Int!',
    /** The deployments associated with a commit. */
    deployments: [
      'DeploymentConnection',
      {
        environments: '[String!]',
        orderBy: 'DeploymentOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The tree entry representing the file located at the given path. */
    file: ['TreeEntry', { path: 'String!' }],
    /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
    history: [
      'CommitHistoryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        path: 'String',
        author: 'CommitAuthor',
        since: 'GitTimestamp',
        until: 'GitTimestamp',
      },
    ],
    id: 'ID!',
    /** The Git commit message */
    message: 'String!',
    /** The Git commit message body */
    messageBody: 'String!',
    /** The commit message body rendered to HTML. */
    messageBodyHTML: 'HTML!',
    /** The Git commit message headline */
    messageHeadline: 'String!',
    /** The commit message headline rendered to HTML. */
    messageHeadlineHTML: 'HTML!',
    /** The Git object ID */
    oid: 'GitObjectID!',
    /** The organization this commit was made on behalf of. */
    onBehalfOf: 'Organization',
    /** The parents of a commit. */
    parents: [
      'CommitConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The datetime when this commit was pushed. */
    pushedDate: 'DateTime',
    /** The Repository this commit belongs to */
    repository: 'Repository!',
    /** The HTTP path for this commit */
    resourcePath: 'URI!',
    /** Commit signing information, if present. */
    signature: 'GitSignature',
    /** Status information for this commit */
    status: 'Status',
    /** Check and Status rollup information for this commit. */
    statusCheckRollup: 'StatusCheckRollup',
    /** Returns a list of all submodules in this repository as of this Commit parsed from the .gitmodules file. */
    submodules: [
      'SubmoduleConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /**
     * Returns a URL to download a tarball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    tarballUrl: 'URI!',
    /** Commit's root Tree */
    tree: 'Tree!',
    /** The HTTP path for the tree of this commit */
    treeResourcePath: 'URI!',
    /** The HTTP URL for the tree of this commit */
    treeUrl: 'URI!',
    /** The HTTP URL for this commit */
    url: 'URI!',
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: 'Boolean!',
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription: 'SubscriptionState',
    /**
     * Returns a URL to download a zipball archive for a repository.
     * Note: For private repositories, these links are temporary and expire after five minutes.
     */
    zipballUrl: 'URI!',
  },

  /**
   * @name CommitAuthor
   * @type InputObject
   */
  CommitAuthor: {
    id: 'ID',
    emails: '[String!]',
  },

  /**
   * @name CommitComment
   * @type Object
   * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment, Reactable, RepositoryNode
   */
  CommitComment: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the subject of the comment. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** Identifies the comment body. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body rendered to text. */
    bodyText: 'String!',
    /** Identifies the commit associated with the comment, if the commit exists. */
    commit: 'Commit',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The actor who edited the comment. */
    editor: 'Actor',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** Returns whether or not a comment has been minimized. */
    isMinimized: 'Boolean!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** Returns why the comment was minimized. */
    minimizedReason: 'String',
    /** Identifies the file path associated with the comment. */
    path: 'String',
    /** Identifies the line position associated with the comment. */
    position: 'Int',
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The repository associated with this node. */
    repository: 'Repository!',
    /** The HTTP path permalink for this commit comment. */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL permalink for this commit comment. */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
  },

  /**
   * @name CommitCommentConnection
   * @type Object
   */
  CommitCommentConnection: {
    /** A list of edges. */
    edges: '[CommitCommentEdge]',
    /** A list of nodes. */
    nodes: '[CommitComment]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CommitCommentEdge
   * @type Object
   */
  CommitCommentEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CommitComment',
  },

  /**
   * @name CommitCommentThread
   * @type Object
   * @implements Node, RepositoryNode
   */
  CommitCommentThread: {
    /** The comments that exist in this thread. */
    comments: [
      'CommitCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The commit the comments were made on. */
    commit: 'Commit',
    id: 'ID!',
    /** The file the comments were made on. */
    path: 'String',
    /** The position in the diff for the commit that the comment was made on. */
    position: 'Int',
    /** The repository associated with this node. */
    repository: 'Repository!',
  },

  /**
   * @name CommitConnection
   * @type Object
   */
  CommitConnection: {
    /** A list of edges. */
    edges: '[CommitEdge]',
    /** A list of nodes. */
    nodes: '[Commit]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CommitContributionOrder
   * @type InputObject
   */
  CommitContributionOrder: {
    field: 'CommitContributionOrderField!',
    direction: 'OrderDirection!',
  },

  CommitContributionOrderField,

  /**
   * @name CommitContributionsByRepository
   * @type Object
   */
  CommitContributionsByRepository: {
    /** The commit contributions, each representing a day. */
    contributions: [
      'CreatedCommitContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'CommitContributionOrder',
      },
    ],
    /** The repository in which the commits were made. */
    repository: 'Repository!',
    /** The HTTP path for the user's commits to the repository in this time range. */
    resourcePath: 'URI!',
    /** The HTTP URL for the user's commits to the repository in this time range. */
    url: 'URI!',
  },

  /**
   * @name CommitEdge
   * @type Object
   */
  CommitEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Commit',
  },

  /**
   * @name CommitHistoryConnection
   * @type Object
   */
  CommitHistoryConnection: {
    /** A list of edges. */
    edges: '[CommitEdge]',
    /** A list of nodes. */
    nodes: '[Commit]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ConnectedEvent
   * @type Object
   * @implements Node
   */
  ConnectedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Reference originated in a different repository. */
    isCrossRepository: 'Boolean!',
    /** Issue or pull request that made the reference. */
    source: 'ReferencedSubject!',
    /** Issue or pull request which was connected. */
    subject: 'ReferencedSubject!',
  },

  /**
   * @name Contribution
   * @type Interface
   */
  Contribution: [
    {
      /**
       * Whether this contribution is associated with a record you do not have access to. For
       * example, your own 'first issue' contribution may have been made on a repository you can no
       * longer access.
       *
       */
      isRestricted: 'Boolean!',
      /** When this contribution was made. */
      occurredAt: 'DateTime!',
      /** The HTTP path for this contribution. */
      resourcePath: 'URI!',
      /** The HTTP URL for this contribution. */
      url: 'URI!',
      /**
       * The user who made this contribution.
       *
       */
      user: 'User!',
    },
    'CreatedCommitContribution',
    'CreatedIssueContribution',
    'CreatedPullRequestContribution',
    'CreatedPullRequestReviewContribution',
    'CreatedRepositoryContribution',
    'JoinedGitHubContribution',
    'RestrictedContribution',
  ],

  /**
   * @name ContributionCalendar
   * @type Object
   */
  ContributionCalendar: {
    /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
    colors: '[String!]!',
    /** Determine if the color set was chosen because it's currently Halloween. */
    isHalloween: 'Boolean!',
    /** A list of the months of contributions in this calendar. */
    months: '[ContributionCalendarMonth!]!',
    /** The count of total contributions in the calendar. */
    totalContributions: 'Int!',
    /** A list of the weeks of contributions in this calendar. */
    weeks: '[ContributionCalendarWeek!]!',
  },

  /**
   * @name ContributionCalendarDay
   * @type Object
   */
  ContributionCalendarDay: {
    /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
    color: 'String!',
    /** How many contributions were made by the user on this day. */
    contributionCount: 'Int!',
    /** The day this square represents. */
    date: 'Date!',
    /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
    weekday: 'Int!',
  },

  /**
   * @name ContributionCalendarMonth
   * @type Object
   */
  ContributionCalendarMonth: {
    /** The date of the first day of this month. */
    firstDay: 'Date!',
    /** The name of the month. */
    name: 'String!',
    /** How many weeks started in this month. */
    totalWeeks: 'Int!',
    /** The year the month occurred in. */
    year: 'Int!',
  },

  /**
   * @name ContributionCalendarWeek
   * @type Object
   */
  ContributionCalendarWeek: {
    /** The days of contributions in this week. */
    contributionDays: '[ContributionCalendarDay!]!',
    /** The date of the earliest square in this week. */
    firstDay: 'Date!',
  },

  /**
   * @name ContributionOrder
   * @type InputObject
   */
  ContributionOrder: {
    direction: 'OrderDirection!',
  },

  /**
   * @name ContributionsCollection
   * @type Object
   */
  ContributionsCollection: {
    /** Commit contributions made by the user, grouped by repository. */
    commitContributionsByRepository: [
      '[CommitContributionsByRepository!]!',
      { maxRepositories: 'Int' },
    ],
    /** A calendar of this user's contributions on GitHub. */
    contributionCalendar: 'ContributionCalendar!',
    /** The years the user has been making contributions with the most recent year first. */
    contributionYears: '[Int!]!',
    /**
     * Determine if this collection's time span ends in the current month.
     *
     */
    doesEndInCurrentMonth: 'Boolean!',
    /** The date of the first restricted contribution the user made in this time period. Can only be non-null when the user has enabled private contribution counts. */
    earliestRestrictedContributionDate: 'Date',
    /** The ending date and time of this collection. */
    endedAt: 'DateTime!',
    /** The first issue the user opened on GitHub. This will be null if that issue was opened outside the collection's time range and ignoreTimeRange is false. If the issue is not visible but the user has opted to show private contributions, a RestrictedContribution will be returned. */
    firstIssueContribution: 'CreatedIssueOrRestrictedContribution',
    /** The first pull request the user opened on GitHub. This will be null if that pull request was opened outside the collection's time range and ignoreTimeRange is not true. If the pull request is not visible but the user has opted to show private contributions, a RestrictedContribution will be returned. */
    firstPullRequestContribution: 'CreatedPullRequestOrRestrictedContribution',
    /** The first repository the user created on GitHub. This will be null if that first repository was created outside the collection's time range and ignoreTimeRange is false. If the repository is not visible, then a RestrictedContribution is returned. */
    firstRepositoryContribution: 'CreatedRepositoryOrRestrictedContribution',
    /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
    hasActivityInThePast: 'Boolean!',
    /** Determine if there are any contributions in this collection. */
    hasAnyContributions: 'Boolean!',
    /** Determine if the user made any contributions in this time frame whose details are not visible because they were made in a private repository. Can only be true if the user enabled private contribution counts. */
    hasAnyRestrictedContributions: 'Boolean!',
    /** Whether or not the collector's time span is all within the same day. */
    isSingleDay: 'Boolean!',
    /** A list of issues the user opened. */
    issueContributions: [
      'CreatedIssueContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        excludeFirst: 'Boolean',
        excludePopular: 'Boolean',
        orderBy: 'ContributionOrder',
      },
    ],
    /** Issue contributions made by the user, grouped by repository. */
    issueContributionsByRepository: [
      '[IssueContributionsByRepository!]!',
      {
        maxRepositories: 'Int',
        excludeFirst: 'Boolean',
        excludePopular: 'Boolean',
      },
    ],
    /** When the user signed up for GitHub. This will be null if that sign up date falls outside the collection's time range and ignoreTimeRange is false. */
    joinedGitHubContribution: 'JoinedGitHubContribution',
    /** The date of the most recent restricted contribution the user made in this time period. Can only be non-null when the user has enabled private contribution counts. */
    latestRestrictedContributionDate: 'Date',
    /**
     * When this collection's time range does not include any activity from the user, use this
     * to get a different collection from an earlier time range that does have activity.
     *
     */
    mostRecentCollectionWithActivity: 'ContributionsCollection',
    /**
     * Returns a different contributions collection from an earlier time range than this one
     * that does not have any contributions.
     *
     */
    mostRecentCollectionWithoutActivity: 'ContributionsCollection',
    /**
     * The issue the user opened on GitHub that received the most comments in the specified
     * time frame.
     *
     */
    popularIssueContribution: 'CreatedIssueContribution',
    /**
     * The pull request the user opened on GitHub that received the most comments in the
     * specified time frame.
     *
     */
    popularPullRequestContribution: 'CreatedPullRequestContribution',
    /** Pull request contributions made by the user. */
    pullRequestContributions: [
      'CreatedPullRequestContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        excludeFirst: 'Boolean',
        excludePopular: 'Boolean',
        orderBy: 'ContributionOrder',
      },
    ],
    /** Pull request contributions made by the user, grouped by repository. */
    pullRequestContributionsByRepository: [
      '[PullRequestContributionsByRepository!]!',
      {
        maxRepositories: 'Int',
        excludeFirst: 'Boolean',
        excludePopular: 'Boolean',
      },
    ],
    /** Pull request review contributions made by the user. */
    pullRequestReviewContributions: [
      'CreatedPullRequestReviewContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'ContributionOrder',
      },
    ],
    /** Pull request review contributions made by the user, grouped by repository. */
    pullRequestReviewContributionsByRepository: [
      '[PullRequestReviewContributionsByRepository!]!',
      { maxRepositories: 'Int' },
    ],
    /** A list of repositories owned by the user that the user created in this time range. */
    repositoryContributions: [
      'CreatedRepositoryContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        excludeFirst: 'Boolean',
        orderBy: 'ContributionOrder',
      },
    ],
    /** A count of contributions made by the user that the viewer cannot access. Only non-zero when the user has chosen to share their private contribution counts. */
    restrictedContributionsCount: 'Int!',
    /** The beginning date and time of this collection. */
    startedAt: 'DateTime!',
    /** How many commits were made by the user in this time span. */
    totalCommitContributions: 'Int!',
    /** How many issues the user opened. */
    totalIssueContributions: [
      'Int!',
      { excludeFirst: 'Boolean', excludePopular: 'Boolean' },
    ],
    /** How many pull requests the user opened. */
    totalPullRequestContributions: [
      'Int!',
      { excludeFirst: 'Boolean', excludePopular: 'Boolean' },
    ],
    /** How many pull request reviews the user left. */
    totalPullRequestReviewContributions: 'Int!',
    /** How many different repositories the user committed to. */
    totalRepositoriesWithContributedCommits: 'Int!',
    /** How many different repositories the user opened issues in. */
    totalRepositoriesWithContributedIssues: [
      'Int!',
      { excludeFirst: 'Boolean', excludePopular: 'Boolean' },
    ],
    /** How many different repositories the user left pull request reviews in. */
    totalRepositoriesWithContributedPullRequestReviews: 'Int!',
    /** How many different repositories the user opened pull requests in. */
    totalRepositoriesWithContributedPullRequests: [
      'Int!',
      { excludeFirst: 'Boolean', excludePopular: 'Boolean' },
    ],
    /** How many repositories the user created. */
    totalRepositoryContributions: ['Int!', { excludeFirst: 'Boolean' }],
    /** The user who made the contributions in this collection. */
    user: 'User!',
  },

  /**
   * @name ConvertProjectCardNoteToIssueInput
   * @type InputObject
   */
  ConvertProjectCardNoteToIssueInput: {
    projectCardId: 'ID!',
    repositoryId: 'ID!',
    title: 'String',
    body: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name ConvertProjectCardNoteToIssuePayload
   * @type Object
   */
  ConvertProjectCardNoteToIssuePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated ProjectCard. */
    projectCard: 'ProjectCard',
  },

  /**
   * @name ConvertToDraftEvent
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  ConvertToDraftEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** The HTTP path for this convert to draft event. */
    resourcePath: 'URI!',
    /** The HTTP URL for this convert to draft event. */
    url: 'URI!',
  },

  /**
   * @name ConvertedNoteToIssueEvent
   * @type Object
   * @implements Node
   */
  ConvertedNoteToIssueEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
  },

  /**
   * @name CreateBranchProtectionRuleInput
   * @type InputObject
   */
  CreateBranchProtectionRuleInput: {
    repositoryId: 'ID!',
    pattern: 'String!',
    requiresApprovingReviews: 'Boolean',
    requiredApprovingReviewCount: 'Int',
    requiresCommitSignatures: 'Boolean',
    isAdminEnforced: 'Boolean',
    requiresStatusChecks: 'Boolean',
    requiresStrictStatusChecks: 'Boolean',
    requiresCodeOwnerReviews: 'Boolean',
    dismissesStaleReviews: 'Boolean',
    restrictsReviewDismissals: 'Boolean',
    reviewDismissalActorIds: '[ID!]',
    restrictsPushes: 'Boolean',
    pushActorIds: '[ID!]',
    requiredStatusCheckContexts: '[String!]',
    clientMutationId: 'String',
  },

  /**
   * @name CreateBranchProtectionRulePayload
   * @type Object
   */
  CreateBranchProtectionRulePayload: {
    /** The newly created BranchProtectionRule. */
    branchProtectionRule: 'BranchProtectionRule',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name CreateCheckRunInput
   * @type InputObject
   */
  CreateCheckRunInput: {
    repositoryId: 'ID!',
    name: 'String!',
    headSha: 'GitObjectID!',
    detailsUrl: 'URI',
    externalId: 'String',
    status: 'RequestableCheckStatusState',
    startedAt: 'DateTime',
    conclusion: 'CheckConclusionState',
    completedAt: 'DateTime',
    output: 'CheckRunOutput',
    actions: '[CheckRunAction!]',
    clientMutationId: 'String',
  },

  /**
   * @name CreateCheckRunPayload
   * @type Object
   */
  CreateCheckRunPayload: {
    /** The newly created check run. */
    checkRun: 'CheckRun',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name CreateCheckSuiteInput
   * @type InputObject
   */
  CreateCheckSuiteInput: {
    repositoryId: 'ID!',
    headSha: 'GitObjectID!',
    clientMutationId: 'String',
  },

  /**
   * @name CreateCheckSuitePayload
   * @type Object
   */
  CreateCheckSuitePayload: {
    /** The newly created check suite. */
    checkSuite: 'CheckSuite',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name CreateEnterpriseOrganizationInput
   * @type InputObject
   */
  CreateEnterpriseOrganizationInput: {
    enterpriseId: 'ID!',
    login: 'String!',
    profileName: 'String!',
    billingEmail: 'String!',
    adminLogins: '[String!]!',
    clientMutationId: 'String',
  },

  /**
   * @name CreateEnterpriseOrganizationPayload
   * @type Object
   */
  CreateEnterpriseOrganizationPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise that owns the created organization. */
    enterprise: 'Enterprise',
    /** The organization that was created. */
    organization: 'Organization',
  },

  /**
   * @name CreateIpAllowListEntryInput
   * @type InputObject
   */
  CreateIpAllowListEntryInput: {
    ownerId: 'ID!',
    allowListValue: 'String!',
    name: 'String',
    isActive: 'Boolean!',
    clientMutationId: 'String',
  },

  /**
   * @name CreateIpAllowListEntryPayload
   * @type Object
   */
  CreateIpAllowListEntryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The IP allow list entry that was created. */
    ipAllowListEntry: 'IpAllowListEntry',
  },

  /**
   * @name CreateIssueInput
   * @type InputObject
   */
  CreateIssueInput: {
    repositoryId: 'ID!',
    title: 'String!',
    body: 'String',
    assigneeIds: '[ID!]',
    milestoneId: 'ID',
    labelIds: '[ID!]',
    projectIds: '[ID!]',
    issueTemplate: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name CreateIssuePayload
   * @type Object
   */
  CreateIssuePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new issue. */
    issue: 'Issue',
  },

  /**
   * @name CreateProjectInput
   * @type InputObject
   */
  CreateProjectInput: {
    ownerId: 'ID!',
    name: 'String!',
    body: 'String',
    template: 'ProjectTemplate',
    repositoryIds: '[ID!]',
    clientMutationId: 'String',
  },

  /**
   * @name CreateProjectPayload
   * @type Object
   */
  CreateProjectPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new project. */
    project: 'Project',
  },

  /**
   * @name CreatePullRequestInput
   * @type InputObject
   */
  CreatePullRequestInput: {
    repositoryId: 'ID!',
    baseRefName: 'String!',
    headRefName: 'String!',
    title: 'String!',
    body: 'String',
    maintainerCanModify: 'Boolean',
    draft: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name CreatePullRequestPayload
   * @type Object
   */
  CreatePullRequestPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new pull request. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name CreateRefInput
   * @type InputObject
   */
  CreateRefInput: {
    repositoryId: 'ID!',
    name: 'String!',
    oid: 'GitObjectID!',
    clientMutationId: 'String',
  },

  /**
   * @name CreateRefPayload
   * @type Object
   */
  CreateRefPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The newly created ref. */
    ref: 'Ref',
  },

  /**
   * @name CreateRepositoryInput
   * @type InputObject
   */
  CreateRepositoryInput: {
    name: 'String!',
    ownerId: 'ID',
    description: 'String',
    visibility: 'RepositoryVisibility!',
    template: 'Boolean',
    homepageUrl: 'URI',
    hasWikiEnabled: 'Boolean',
    hasIssuesEnabled: 'Boolean',
    teamId: 'ID',
    clientMutationId: 'String',
  },

  /**
   * @name CreateRepositoryPayload
   * @type Object
   */
  CreateRepositoryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new repository. */
    repository: 'Repository',
  },

  /**
   * @name CreateTeamDiscussionCommentInput
   * @type InputObject
   */
  CreateTeamDiscussionCommentInput: {
    discussionId: 'ID!',
    body: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name CreateTeamDiscussionCommentPayload
   * @type Object
   */
  CreateTeamDiscussionCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new comment. */
    teamDiscussionComment: 'TeamDiscussionComment',
  },

  /**
   * @name CreateTeamDiscussionInput
   * @type InputObject
   */
  CreateTeamDiscussionInput: {
    teamId: 'ID!',
    title: 'String!',
    body: 'String!',
    private: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name CreateTeamDiscussionPayload
   * @type Object
   */
  CreateTeamDiscussionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new discussion. */
    teamDiscussion: 'TeamDiscussion',
  },

  /**
   * @name CreatedCommitContribution
   * @type Object
   * @implements Contribution
   */
  CreatedCommitContribution: {
    /** How many commits were made on this day to this repository by the user. */
    commitCount: 'Int!',
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The repository the user made a commit in. */
    repository: 'Repository!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name CreatedCommitContributionConnection
   * @type Object
   */
  CreatedCommitContributionConnection: {
    /** A list of edges. */
    edges: '[CreatedCommitContributionEdge]',
    /** A list of nodes. */
    nodes: '[CreatedCommitContribution]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /**
     * Identifies the total count of commits across days and repositories in the connection.
     *
     */
    totalCount: 'Int!',
  },

  /**
   * @name CreatedCommitContributionEdge
   * @type Object
   */
  CreatedCommitContributionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CreatedCommitContribution',
  },

  /**
   * @name CreatedIssueContribution
   * @type Object
   * @implements Contribution
   */
  CreatedIssueContribution: {
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** The issue that was opened. */
    issue: 'Issue!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name CreatedIssueContributionConnection
   * @type Object
   */
  CreatedIssueContributionConnection: {
    /** A list of edges. */
    edges: '[CreatedIssueContributionEdge]',
    /** A list of nodes. */
    nodes: '[CreatedIssueContribution]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CreatedIssueContributionEdge
   * @type Object
   */
  CreatedIssueContributionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CreatedIssueContribution',
  },

  /**
   * @name CreatedIssueOrRestrictedContribution
   * @type Union
   */
  CreatedIssueOrRestrictedContribution: [
    'CreatedIssueContribution',
    'RestrictedContribution',
  ],

  /**
   * @name CreatedPullRequestContribution
   * @type Object
   * @implements Contribution
   */
  CreatedPullRequestContribution: {
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The pull request that was opened. */
    pullRequest: 'PullRequest!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name CreatedPullRequestContributionConnection
   * @type Object
   */
  CreatedPullRequestContributionConnection: {
    /** A list of edges. */
    edges: '[CreatedPullRequestContributionEdge]',
    /** A list of nodes. */
    nodes: '[CreatedPullRequestContribution]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CreatedPullRequestContributionEdge
   * @type Object
   */
  CreatedPullRequestContributionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CreatedPullRequestContribution',
  },

  /**
   * @name CreatedPullRequestOrRestrictedContribution
   * @type Union
   */
  CreatedPullRequestOrRestrictedContribution: [
    'CreatedPullRequestContribution',
    'RestrictedContribution',
  ],

  /**
   * @name CreatedPullRequestReviewContribution
   * @type Object
   * @implements Contribution
   */
  CreatedPullRequestReviewContribution: {
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The pull request the user reviewed. */
    pullRequest: 'PullRequest!',
    /** The review the user left on the pull request. */
    pullRequestReview: 'PullRequestReview!',
    /** The repository containing the pull request that the user reviewed. */
    repository: 'Repository!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name CreatedPullRequestReviewContributionConnection
   * @type Object
   */
  CreatedPullRequestReviewContributionConnection: {
    /** A list of edges. */
    edges: '[CreatedPullRequestReviewContributionEdge]',
    /** A list of nodes. */
    nodes: '[CreatedPullRequestReviewContribution]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CreatedPullRequestReviewContributionEdge
   * @type Object
   */
  CreatedPullRequestReviewContributionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CreatedPullRequestReviewContribution',
  },

  /**
   * @name CreatedRepositoryContribution
   * @type Object
   * @implements Contribution
   */
  CreatedRepositoryContribution: {
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The repository that was created. */
    repository: 'Repository!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name CreatedRepositoryContributionConnection
   * @type Object
   */
  CreatedRepositoryContributionConnection: {
    /** A list of edges. */
    edges: '[CreatedRepositoryContributionEdge]',
    /** A list of nodes. */
    nodes: '[CreatedRepositoryContribution]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name CreatedRepositoryContributionEdge
   * @type Object
   */
  CreatedRepositoryContributionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'CreatedRepositoryContribution',
  },

  /**
   * @name CreatedRepositoryOrRestrictedContribution
   * @type Union
   */
  CreatedRepositoryOrRestrictedContribution: [
    'CreatedRepositoryContribution',
    'RestrictedContribution',
  ],

  /**
   * @name CrossReferencedEvent
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  CrossReferencedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Reference originated in a different repository. */
    isCrossRepository: 'Boolean!',
    /** Identifies when the reference was made. */
    referencedAt: 'DateTime!',
    /** The HTTP path for this pull request. */
    resourcePath: 'URI!',
    /** Issue or pull request that made the reference. */
    source: 'ReferencedSubject!',
    /** Issue or pull request to which the reference was made. */
    target: 'ReferencedSubject!',
    /** The HTTP URL for this pull request. */
    url: 'URI!',
    /** Checks if the target will be closed when the source is merged. */
    willCloseTarget: 'Boolean!',
  },

  /**
   * @name DeclineTopicSuggestionInput
   * @type InputObject
   */
  DeclineTopicSuggestionInput: {
    repositoryId: 'ID!',
    name: 'String!',
    reason: 'TopicSuggestionDeclineReason!',
    clientMutationId: 'String',
  },

  /**
   * @name DeclineTopicSuggestionPayload
   * @type Object
   */
  DeclineTopicSuggestionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The declined topic. */
    topic: 'Topic',
  },

  DefaultRepositoryPermissionField,

  /**
   * @name Deletable
   * @type Interface
   */
  Deletable: [
    {
      /** Check if the current viewer can delete this object. */
      viewerCanDelete: 'Boolean!',
    },
    'CommitComment',
    'GistComment',
    'IssueComment',
    'PullRequestReview',
    'PullRequestReviewComment',
    'TeamDiscussion',
    'TeamDiscussionComment',
  ],

  /**
   * @name DeleteBranchProtectionRuleInput
   * @type InputObject
   */
  DeleteBranchProtectionRuleInput: {
    branchProtectionRuleId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteBranchProtectionRulePayload
   * @type Object
   */
  DeleteBranchProtectionRulePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name DeleteDeploymentInput
   * @type InputObject
   */
  DeleteDeploymentInput: {
    id: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteDeploymentPayload
   * @type Object
   */
  DeleteDeploymentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name DeleteIpAllowListEntryInput
   * @type InputObject
   */
  DeleteIpAllowListEntryInput: {
    ipAllowListEntryId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteIpAllowListEntryPayload
   * @type Object
   */
  DeleteIpAllowListEntryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The IP allow list entry that was deleted. */
    ipAllowListEntry: 'IpAllowListEntry',
  },

  /**
   * @name DeleteIssueCommentInput
   * @type InputObject
   */
  DeleteIssueCommentInput: {
    id: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteIssueCommentPayload
   * @type Object
   */
  DeleteIssueCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name DeleteIssueInput
   * @type InputObject
   */
  DeleteIssueInput: {
    issueId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteIssuePayload
   * @type Object
   */
  DeleteIssuePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The repository the issue belonged to */
    repository: 'Repository',
  },

  /**
   * @name DeleteProjectCardInput
   * @type InputObject
   */
  DeleteProjectCardInput: {
    cardId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteProjectCardPayload
   * @type Object
   */
  DeleteProjectCardPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The column the deleted card was in. */
    column: 'ProjectColumn',
    /** The deleted card ID. */
    deletedCardId: 'ID',
  },

  /**
   * @name DeleteProjectColumnInput
   * @type InputObject
   */
  DeleteProjectColumnInput: {
    columnId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteProjectColumnPayload
   * @type Object
   */
  DeleteProjectColumnPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The deleted column ID. */
    deletedColumnId: 'ID',
    /** The project the deleted column was in. */
    project: 'Project',
  },

  /**
   * @name DeleteProjectInput
   * @type InputObject
   */
  DeleteProjectInput: {
    projectId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteProjectPayload
   * @type Object
   */
  DeleteProjectPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The repository or organization the project was removed from. */
    owner: 'ProjectOwner',
  },

  /**
   * @name DeletePullRequestReviewCommentInput
   * @type InputObject
   */
  DeletePullRequestReviewCommentInput: {
    id: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeletePullRequestReviewCommentPayload
   * @type Object
   */
  DeletePullRequestReviewCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The pull request review the deleted comment belonged to. */
    pullRequestReview: 'PullRequestReview',
  },

  /**
   * @name DeletePullRequestReviewInput
   * @type InputObject
   */
  DeletePullRequestReviewInput: {
    pullRequestReviewId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeletePullRequestReviewPayload
   * @type Object
   */
  DeletePullRequestReviewPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The deleted pull request review. */
    pullRequestReview: 'PullRequestReview',
  },

  /**
   * @name DeleteRefInput
   * @type InputObject
   */
  DeleteRefInput: {
    refId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteRefPayload
   * @type Object
   */
  DeleteRefPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name DeleteTeamDiscussionCommentInput
   * @type InputObject
   */
  DeleteTeamDiscussionCommentInput: {
    id: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteTeamDiscussionCommentPayload
   * @type Object
   */
  DeleteTeamDiscussionCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name DeleteTeamDiscussionInput
   * @type InputObject
   */
  DeleteTeamDiscussionInput: {
    id: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name DeleteTeamDiscussionPayload
   * @type Object
   */
  DeleteTeamDiscussionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name DemilestonedEvent
   * @type Object
   * @implements Node
   */
  DemilestonedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the milestone title associated with the 'demilestoned' event. */
    milestoneTitle: 'String!',
    /** Object referenced by event. */
    subject: 'MilestoneItem!',
  },

  /**
   * @name DeployKey
   * @type Object
   * @implements Node
   */
  DeployKey: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** The deploy key. */
    key: 'String!',
    /** Whether or not the deploy key is read only. */
    readOnly: 'Boolean!',
    /** The deploy key title. */
    title: 'String!',
    /** Whether or not the deploy key has been verified. */
    verified: 'Boolean!',
  },

  /**
   * @name DeployKeyConnection
   * @type Object
   */
  DeployKeyConnection: {
    /** A list of edges. */
    edges: '[DeployKeyEdge]',
    /** A list of nodes. */
    nodes: '[DeployKey]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name DeployKeyEdge
   * @type Object
   */
  DeployKeyEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'DeployKey',
  },

  /**
   * @name DeployedEvent
   * @type Object
   * @implements Node
   */
  DeployedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The deployment associated with the 'deployed' event. */
    deployment: 'Deployment!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** The ref associated with the 'deployed' event. */
    ref: 'Ref',
  },

  /**
   * @name Deployment
   * @type Object
   * @implements Node
   */
  Deployment: {
    /** Identifies the commit sha of the deployment. */
    commit: 'Commit',
    /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
    commitOid: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the actor who triggered the deployment. */
    creator: 'Actor!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The deployment description. */
    description: 'String',
    /** The latest environment to which this deployment was made. */
    environment: 'String',
    id: 'ID!',
    /** The latest environment to which this deployment was made. */
    latestEnvironment: 'String',
    /** The latest status of this deployment. */
    latestStatus: 'DeploymentStatus',
    /** The original environment to which this deployment was made. */
    originalEnvironment: 'String',
    /** Extra information that a deployment system might need. */
    payload: 'String',
    /** Identifies the Ref of the deployment, if the deployment was created by ref. */
    ref: 'Ref',
    /** Identifies the repository associated with the deployment. */
    repository: 'Repository!',
    /** The current state of the deployment. */
    state: 'DeploymentState',
    /** A list of statuses associated with the deployment. */
    statuses: [
      'DeploymentStatusConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The deployment task. */
    task: 'String',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name DeploymentConnection
   * @type Object
   */
  DeploymentConnection: {
    /** A list of edges. */
    edges: '[DeploymentEdge]',
    /** A list of nodes. */
    nodes: '[Deployment]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name DeploymentEdge
   * @type Object
   */
  DeploymentEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Deployment',
  },

  /**
   * @name DeploymentEnvironmentChangedEvent
   * @type Object
   * @implements Node
   */
  DeploymentEnvironmentChangedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The deployment status that updated the deployment environment. */
    deploymentStatus: 'DeploymentStatus!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
  },

  /**
   * @name DeploymentOrder
   * @type InputObject
   */
  DeploymentOrder: {
    field: 'DeploymentOrderField!',
    direction: 'OrderDirection!',
  },

  DeploymentOrderField,

  DeploymentState,

  /**
   * @name DeploymentStatus
   * @type Object
   * @implements Node
   */
  DeploymentStatus: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the actor who triggered the deployment. */
    creator: 'Actor!',
    /** Identifies the deployment associated with status. */
    deployment: 'Deployment!',
    /** Identifies the description of the deployment. */
    description: 'String',
    /** Identifies the environment URL of the deployment. */
    environmentUrl: 'URI',
    id: 'ID!',
    /** Identifies the log URL of the deployment. */
    logUrl: 'URI',
    /** Identifies the current state of the deployment. */
    state: 'DeploymentStatusState!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name DeploymentStatusConnection
   * @type Object
   */
  DeploymentStatusConnection: {
    /** A list of edges. */
    edges: '[DeploymentStatusEdge]',
    /** A list of nodes. */
    nodes: '[DeploymentStatus]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name DeploymentStatusEdge
   * @type Object
   */
  DeploymentStatusEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'DeploymentStatus',
  },

  DeploymentStatusState,

  DiffSide,

  /**
   * @name DisconnectedEvent
   * @type Object
   * @implements Node
   */
  DisconnectedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Reference originated in a different repository. */
    isCrossRepository: 'Boolean!',
    /** Issue or pull request from which the issue was disconnected. */
    source: 'ReferencedSubject!',
    /** Issue or pull request which was disconnected. */
    subject: 'ReferencedSubject!',
  },

  /**
   * @name DismissPullRequestReviewInput
   * @type InputObject
   */
  DismissPullRequestReviewInput: {
    pullRequestReviewId: 'ID!',
    message: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name DismissPullRequestReviewPayload
   * @type Object
   */
  DismissPullRequestReviewPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The dismissed pull request review. */
    pullRequestReview: 'PullRequestReview',
  },

  /**
   * @name DraftPullRequestReviewComment
   * @type InputObject
   */
  DraftPullRequestReviewComment: {
    path: 'String!',
    position: 'Int!',
    body: 'String!',
  },

  /**
   * @name DraftPullRequestReviewThread
   * @type InputObject
   */
  DraftPullRequestReviewThread: {
    path: 'String!',
    line: 'Int!',
    side: 'DiffSide',
    startLine: 'Int',
    startSide: 'DiffSide',
    body: 'String!',
  },

  /**
   * @name Enterprise
   * @type Object
   * @implements Node
   */
  Enterprise: {
    /** A URL pointing to the enterprise's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** Enterprise billing information visible to enterprise billing managers. */
    billingInfo: 'EnterpriseBillingInfo',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The description of the enterprise. */
    description: 'String',
    /** The description of the enterprise as HTML. */
    descriptionHTML: 'HTML!',
    id: 'ID!',
    /** The location of the enterprise. */
    location: 'String',
    /** A list of users who are members of this enterprise. */
    members: [
      'EnterpriseMemberConnection!',
      {
        organizationLogins: '[String!]',
        query: 'String',
        orderBy: 'EnterpriseMemberOrder',
        role: 'EnterpriseUserAccountMembershipRole',
        deployment: 'EnterpriseUserDeployment',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The name of the enterprise. */
    name: 'String!',
    /** A list of organizations that belong to this enterprise. */
    organizations: [
      'OrganizationConnection!',
      {
        query: 'String',
        orderBy: 'OrganizationOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Enterprise information only visible to enterprise owners. */
    ownerInfo: 'EnterpriseOwnerInfo',
    /** The HTTP path for this enterprise. */
    resourcePath: 'URI!',
    /** The URL-friendly identifier for the enterprise. */
    slug: 'String!',
    /** The HTTP URL for this enterprise. */
    url: 'URI!',
    /** A list of user accounts on this enterprise. */
    userAccounts: [
      'EnterpriseUserAccountConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Is the current viewer an admin of this enterprise? */
    viewerIsAdmin: 'Boolean!',
    /** The URL of the enterprise website. */
    websiteUrl: 'URI',
  },

  /**
   * @name EnterpriseAdministratorConnection
   * @type Object
   */
  EnterpriseAdministratorConnection: {
    /** A list of edges. */
    edges: '[EnterpriseAdministratorEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseAdministratorEdge
   * @type Object
   */
  EnterpriseAdministratorEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'User',
    /** The role of the administrator. */
    role: 'EnterpriseAdministratorRole!',
  },

  /**
   * @name EnterpriseAdministratorInvitation
   * @type Object
   * @implements Node
   */
  EnterpriseAdministratorInvitation: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The email of the person who was invited to the enterprise. */
    email: 'String',
    /** The enterprise the invitation is for. */
    enterprise: 'Enterprise!',
    id: 'ID!',
    /** The user who was invited to the enterprise. */
    invitee: 'User',
    /** The user who created the invitation. */
    inviter: 'User',
    /** The invitee's pending role in the enterprise (owner or billing_manager). */
    role: 'EnterpriseAdministratorRole!',
  },

  /**
   * @name EnterpriseAdministratorInvitationConnection
   * @type Object
   */
  EnterpriseAdministratorInvitationConnection: {
    /** A list of edges. */
    edges: '[EnterpriseAdministratorInvitationEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseAdministratorInvitation]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseAdministratorInvitationEdge
   * @type Object
   */
  EnterpriseAdministratorInvitationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseAdministratorInvitation',
  },

  /**
   * @name EnterpriseAdministratorInvitationOrder
   * @type InputObject
   */
  EnterpriseAdministratorInvitationOrder: {
    field: 'EnterpriseAdministratorInvitationOrderField!',
    direction: 'OrderDirection!',
  },

  EnterpriseAdministratorInvitationOrderField,

  EnterpriseAdministratorRole,

  /**
   * @name EnterpriseAuditEntryData
   * @type Interface
   */
  EnterpriseAuditEntryData: [
    {
      /** The HTTP path for this enterprise. */
      enterpriseResourcePath: 'URI',
      /** The slug of the enterprise. */
      enterpriseSlug: 'String',
      /** The HTTP URL for this enterprise. */
      enterpriseUrl: 'URI',
    },
    'MembersCanDeleteReposClearAuditEntry',
    'MembersCanDeleteReposDisableAuditEntry',
    'MembersCanDeleteReposEnableAuditEntry',
    'OrgInviteToBusinessAuditEntry',
    'PrivateRepositoryForkingDisableAuditEntry',
    'PrivateRepositoryForkingEnableAuditEntry',
    'RepositoryVisibilityChangeDisableAuditEntry',
    'RepositoryVisibilityChangeEnableAuditEntry',
  ],

  /**
   * @name EnterpriseBillingInfo
   * @type Object
   */
  EnterpriseBillingInfo: {
    /** The number of licenseable users/emails across the enterprise. */
    allLicensableUsersCount: 'Int!',
    /** The number of data packs used by all organizations owned by the enterprise. */
    assetPacks: 'Int!',
    /**
     * @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC.
     * The number of available seats across all owned organizations based on the unique number of billable users.
     */
    availableSeats: 'Int!',
    /** The bandwidth quota in GB for all organizations owned by the enterprise. */
    bandwidthQuota: 'Float!',
    /** The bandwidth usage in GB for all organizations owned by the enterprise. */
    bandwidthUsage: 'Float!',
    /** The bandwidth usage as a percentage of the bandwidth quota. */
    bandwidthUsagePercentage: 'Int!',
    /**
     * @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC.
     * The total seats across all organizations owned by the enterprise.
     */
    seats: 'Int!',
    /** The storage quota in GB for all organizations owned by the enterprise. */
    storageQuota: 'Float!',
    /** The storage usage in GB for all organizations owned by the enterprise. */
    storageUsage: 'Float!',
    /** The storage usage as a percentage of the storage quota. */
    storageUsagePercentage: 'Int!',
    /** The number of available licenses across all owned organizations based on the unique number of billable users. */
    totalAvailableLicenses: 'Int!',
    /** The total number of licenses allocated. */
    totalLicenses: 'Int!',
  },

  EnterpriseDefaultRepositoryPermissionSettingValue,

  EnterpriseEnabledDisabledSettingValue,

  EnterpriseEnabledSettingValue,

  /**
   * @name EnterpriseIdentityProvider
   * @type Object
   * @implements Node
   */
  EnterpriseIdentityProvider: {
    /** The digest algorithm used to sign SAML requests for the identity provider. */
    digestMethod: 'SamlDigestAlgorithm',
    /** The enterprise this identity provider belongs to. */
    enterprise: 'Enterprise',
    /** ExternalIdentities provisioned by this identity provider. */
    externalIdentities: [
      'ExternalIdentityConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    id: 'ID!',
    /** The x509 certificate used by the identity provider to sign assertions and responses. */
    idpCertificate: 'X509Certificate',
    /** The Issuer Entity ID for the SAML identity provider. */
    issuer: 'String',
    /** Recovery codes that can be used by admins to access the enterprise if the identity provider is unavailable. */
    recoveryCodes: '[String!]',
    /** The signature algorithm used to sign SAML requests for the identity provider. */
    signatureMethod: 'SamlSignatureAlgorithm',
    /** The URL endpoint for the identity provider's SAML SSO. */
    ssoUrl: 'URI',
  },

  /**
   * @name EnterpriseMember
   * @type Union
   */
  EnterpriseMember: ['EnterpriseUserAccount', 'User'],

  /**
   * @name EnterpriseMemberConnection
   * @type Object
   */
  EnterpriseMemberConnection: {
    /** A list of edges. */
    edges: '[EnterpriseMemberEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseMember]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseMemberEdge
   * @type Object
   */
  EnterpriseMemberEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /**
     * @deprecated All members consume a license Removal on 2021-01-01 UTC.
     * Whether the user does not have a license for the enterprise.
     */
    isUnlicensed: 'Boolean!',
    /** The item at the end of the edge. */
    node: 'EnterpriseMember',
  },

  /**
   * @name EnterpriseMemberOrder
   * @type InputObject
   */
  EnterpriseMemberOrder: {
    field: 'EnterpriseMemberOrderField!',
    direction: 'OrderDirection!',
  },

  EnterpriseMemberOrderField,

  EnterpriseMembersCanCreateRepositoriesSettingValue,

  EnterpriseMembersCanMakePurchasesSettingValue,

  /**
   * @name EnterpriseOrganizationMembershipConnection
   * @type Object
   */
  EnterpriseOrganizationMembershipConnection: {
    /** A list of edges. */
    edges: '[EnterpriseOrganizationMembershipEdge]',
    /** A list of nodes. */
    nodes: '[Organization]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseOrganizationMembershipEdge
   * @type Object
   */
  EnterpriseOrganizationMembershipEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Organization',
    /** The role of the user in the enterprise membership. */
    role: 'EnterpriseUserAccountMembershipRole!',
  },

  /**
   * @name EnterpriseOutsideCollaboratorConnection
   * @type Object
   */
  EnterpriseOutsideCollaboratorConnection: {
    /** A list of edges. */
    edges: '[EnterpriseOutsideCollaboratorEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseOutsideCollaboratorEdge
   * @type Object
   */
  EnterpriseOutsideCollaboratorEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /**
     * @deprecated All outside collaborators consume a license Removal on 2021-01-01 UTC.
     * Whether the outside collaborator does not have a license for the enterprise.
     */
    isUnlicensed: 'Boolean!',
    /** The item at the end of the edge. */
    node: 'User',
    /** The enterprise organization repositories this user is a member of. */
    repositories: [
      'EnterpriseRepositoryInfoConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'RepositoryOrder',
      },
    ],
  },

  /**
   * @name EnterpriseOwnerInfo
   * @type Object
   */
  EnterpriseOwnerInfo: {
    /** A list of enterprise organizations configured with the provided action execution capabilities setting value. */
    actionExecutionCapabilitySettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** A list of all of the administrators for this enterprise. */
    admins: [
      'EnterpriseAdministratorConnection!',
      {
        query: 'String',
        role: 'EnterpriseAdministratorRole',
        orderBy: 'EnterpriseMemberOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of users in the enterprise who currently have two-factor authentication disabled. */
    affiliatedUsersWithTwoFactorDisabled: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Whether or not affiliated users with two-factor authentication disabled exist in the enterprise. */
    affiliatedUsersWithTwoFactorDisabledExist: 'Boolean!',
    /** The setting value for whether private repository forking is enabled for repositories in organizations in this enterprise. */
    allowPrivateRepositoryForkingSetting:
      'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided private repository forking setting value. */
    allowPrivateRepositoryForkingSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for base repository permissions for organizations in this enterprise. */
    defaultRepositoryPermissionSetting:
      'EnterpriseDefaultRepositoryPermissionSettingValue!',
    /** A list of enterprise organizations configured with the provided default repository permission. */
    defaultRepositoryPermissionSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'DefaultRepositoryPermissionField!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** Enterprise Server installations owned by the enterprise. */
    enterpriseServerInstallations: [
      'EnterpriseServerInstallationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        connectedOnly: 'Boolean',
        orderBy: 'EnterpriseServerInstallationOrder',
      },
    ],
    /** The setting value for whether the enterprise has an IP allow list enabled. */
    ipAllowListEnabledSetting: 'IpAllowListEnabledSettingValue!',
    /** The IP addresses that are allowed to access resources owned by the enterprise. */
    ipAllowListEntries: [
      'IpAllowListEntryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'IpAllowListEntryOrder',
      },
    ],
    /** Whether or not the default repository permission is currently being updated. */
    isUpdatingDefaultRepositoryPermission: 'Boolean!',
    /** Whether the two-factor authentication requirement is currently being enforced. */
    isUpdatingTwoFactorRequirement: 'Boolean!',
    /** The setting value for whether organization members with admin permissions on a repository can change repository visibility. */
    membersCanChangeRepositoryVisibilitySetting:
      'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided can change repository visibility setting value. */
    membersCanChangeRepositoryVisibilitySettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether members of organizations in the enterprise can create internal repositories. */
    membersCanCreateInternalRepositoriesSetting: 'Boolean',
    /** The setting value for whether members of organizations in the enterprise can create private repositories. */
    membersCanCreatePrivateRepositoriesSetting: 'Boolean',
    /** The setting value for whether members of organizations in the enterprise can create public repositories. */
    membersCanCreatePublicRepositoriesSetting: 'Boolean',
    /** The setting value for whether members of organizations in the enterprise can create repositories. */
    membersCanCreateRepositoriesSetting:
      'EnterpriseMembersCanCreateRepositoriesSettingValue',
    /** A list of enterprise organizations configured with the provided repository creation setting value. */
    membersCanCreateRepositoriesSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'OrganizationMembersCanCreateRepositoriesSettingValue!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether members with admin permissions for repositories can delete issues. */
    membersCanDeleteIssuesSetting: 'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided members can delete issues setting value. */
    membersCanDeleteIssuesSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether members with admin permissions for repositories can delete or transfer repositories. */
    membersCanDeleteRepositoriesSetting:
      'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided members can delete repositories setting value. */
    membersCanDeleteRepositoriesSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether members of organizations in the enterprise can invite outside collaborators. */
    membersCanInviteCollaboratorsSetting:
      'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided members can invite collaborators setting value. */
    membersCanInviteCollaboratorsSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** Indicates whether members of this enterprise's organizations can purchase additional services for those organizations. */
    membersCanMakePurchasesSetting:
      'EnterpriseMembersCanMakePurchasesSettingValue!',
    /** The setting value for whether members with admin permissions for repositories can update protected branches. */
    membersCanUpdateProtectedBranchesSetting:
      'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided members can update protected branches setting value. */
    membersCanUpdateProtectedBranchesSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether members can view dependency insights. */
    membersCanViewDependencyInsightsSetting:
      'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided members can view dependency insights setting value. */
    membersCanViewDependencyInsightsSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether organization projects are enabled for organizations in this enterprise. */
    organizationProjectsSetting: 'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided organization projects setting value. */
    organizationProjectsSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** A list of outside collaborators across the repositories in the enterprise. */
    outsideCollaborators: [
      'EnterpriseOutsideCollaboratorConnection!',
      {
        login: 'String',
        query: 'String',
        orderBy: 'EnterpriseMemberOrder',
        visibility: 'RepositoryVisibility',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of pending administrator invitations for the enterprise. */
    pendingAdminInvitations: [
      'EnterpriseAdministratorInvitationConnection!',
      {
        query: 'String',
        orderBy: 'EnterpriseAdministratorInvitationOrder',
        role: 'EnterpriseAdministratorRole',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of pending collaborator invitations across the repositories in the enterprise. */
    pendingCollaboratorInvitations: [
      'RepositoryInvitationConnection!',
      {
        query: 'String',
        orderBy: 'RepositoryInvitationOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /**
     * @deprecated Repository invitations can now be associated with an email, not only an invitee. Use the `pendingCollaboratorInvitations` field instead. Removal on 2020-10-01 UTC.
     * A list of pending collaborators across the repositories in the enterprise.
     */
    pendingCollaborators: [
      'EnterprisePendingCollaboratorConnection!',
      {
        query: 'String',
        orderBy: 'RepositoryInvitationOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of pending member invitations for organizations in the enterprise. */
    pendingMemberInvitations: [
      'EnterprisePendingMemberInvitationConnection!',
      {
        query: 'String',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The setting value for whether repository projects are enabled in this enterprise. */
    repositoryProjectsSetting: 'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided repository projects setting value. */
    repositoryProjectsSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The SAML Identity Provider for the enterprise. */
    samlIdentityProvider: 'EnterpriseIdentityProvider',
    /** A list of enterprise organizations configured with the SAML single sign-on setting value. */
    samlIdentityProviderSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'IdentityProviderConfigurationState!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether team discussions are enabled for organizations in this enterprise. */
    teamDiscussionsSetting: 'EnterpriseEnabledDisabledSettingValue!',
    /** A list of enterprise organizations configured with the provided team discussions setting value. */
    teamDiscussionsSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
    /** The setting value for whether the enterprise requires two-factor authentication for its organizations and users. */
    twoFactorRequiredSetting: 'EnterpriseEnabledSettingValue!',
    /** A list of enterprise organizations configured with the two-factor authentication setting value. */
    twoFactorRequiredSettingOrganizations: [
      'OrganizationConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        value: 'Boolean!',
        orderBy: 'OrganizationOrder',
      },
    ],
  },

  /**
   * @name EnterprisePendingCollaboratorConnection
   * @type Object
   */
  EnterprisePendingCollaboratorConnection: {
    /** A list of edges. */
    edges: '[EnterprisePendingCollaboratorEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterprisePendingCollaboratorEdge
   * @type Object
   */
  EnterprisePendingCollaboratorEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /**
     * @deprecated All pending collaborators consume a license Removal on 2021-01-01 UTC.
     * Whether the invited collaborator does not have a license for the enterprise.
     */
    isUnlicensed: 'Boolean!',
    /** The item at the end of the edge. */
    node: 'User',
    /** The enterprise organization repositories this user is a member of. */
    repositories: [
      'EnterpriseRepositoryInfoConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'RepositoryOrder',
      },
    ],
  },

  /**
   * @name EnterprisePendingMemberInvitationConnection
   * @type Object
   */
  EnterprisePendingMemberInvitationConnection: {
    /** A list of edges. */
    edges: '[EnterprisePendingMemberInvitationEdge]',
    /** A list of nodes. */
    nodes: '[OrganizationInvitation]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
    /** Identifies the total count of unique users in the connection. */
    totalUniqueUserCount: 'Int!',
  },

  /**
   * @name EnterprisePendingMemberInvitationEdge
   * @type Object
   */
  EnterprisePendingMemberInvitationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /**
     * @deprecated All pending members consume a license Removal on 2020-07-01 UTC.
     * Whether the invitation has a license for the enterprise.
     */
    isUnlicensed: 'Boolean!',
    /** The item at the end of the edge. */
    node: 'OrganizationInvitation',
  },

  /**
   * @name EnterpriseRepositoryInfo
   * @type Object
   * @implements Node
   */
  EnterpriseRepositoryInfo: {
    id: 'ID!',
    /** Identifies if the repository is private. */
    isPrivate: 'Boolean!',
    /** The repository's name. */
    name: 'String!',
    /** The repository's name with owner. */
    nameWithOwner: 'String!',
  },

  /**
   * @name EnterpriseRepositoryInfoConnection
   * @type Object
   */
  EnterpriseRepositoryInfoConnection: {
    /** A list of edges. */
    edges: '[EnterpriseRepositoryInfoEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseRepositoryInfo]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseRepositoryInfoEdge
   * @type Object
   */
  EnterpriseRepositoryInfoEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseRepositoryInfo',
  },

  /**
   * @name EnterpriseServerInstallation
   * @type Object
   * @implements Node
   */
  EnterpriseServerInstallation: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The customer name to which the Enterprise Server installation belongs. */
    customerName: 'String!',
    /** The host name of the Enterprise Server installation. */
    hostName: 'String!',
    id: 'ID!',
    /** Whether or not the installation is connected to an Enterprise Server installation via GitHub Connect. */
    isConnected: 'Boolean!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** User accounts on this Enterprise Server installation. */
    userAccounts: [
      'EnterpriseServerUserAccountConnection!',
      {
        orderBy: 'EnterpriseServerUserAccountOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** User accounts uploads for the Enterprise Server installation. */
    userAccountsUploads: [
      'EnterpriseServerUserAccountsUploadConnection!',
      {
        orderBy: 'EnterpriseServerUserAccountsUploadOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
  },

  /**
   * @name EnterpriseServerInstallationConnection
   * @type Object
   */
  EnterpriseServerInstallationConnection: {
    /** A list of edges. */
    edges: '[EnterpriseServerInstallationEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseServerInstallation]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseServerInstallationEdge
   * @type Object
   */
  EnterpriseServerInstallationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseServerInstallation',
  },

  /**
   * @name EnterpriseServerInstallationOrder
   * @type InputObject
   */
  EnterpriseServerInstallationOrder: {
    field: 'EnterpriseServerInstallationOrderField!',
    direction: 'OrderDirection!',
  },

  EnterpriseServerInstallationOrderField,

  /**
   * @name EnterpriseServerUserAccount
   * @type Object
   * @implements Node
   */
  EnterpriseServerUserAccount: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** User emails belonging to this user account. */
    emails: [
      'EnterpriseServerUserAccountEmailConnection!',
      {
        orderBy: 'EnterpriseServerUserAccountEmailOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The Enterprise Server installation on which this user account exists. */
    enterpriseServerInstallation: 'EnterpriseServerInstallation!',
    id: 'ID!',
    /** Whether the user account is a site administrator on the Enterprise Server installation. */
    isSiteAdmin: 'Boolean!',
    /** The login of the user account on the Enterprise Server installation. */
    login: 'String!',
    /** The profile name of the user account on the Enterprise Server installation. */
    profileName: 'String',
    /** The date and time when the user account was created on the Enterprise Server installation. */
    remoteCreatedAt: 'DateTime!',
    /** The ID of the user account on the Enterprise Server installation. */
    remoteUserId: 'Int!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name EnterpriseServerUserAccountConnection
   * @type Object
   */
  EnterpriseServerUserAccountConnection: {
    /** A list of edges. */
    edges: '[EnterpriseServerUserAccountEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseServerUserAccount]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseServerUserAccountEdge
   * @type Object
   */
  EnterpriseServerUserAccountEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseServerUserAccount',
  },

  /**
   * @name EnterpriseServerUserAccountEmail
   * @type Object
   * @implements Node
   */
  EnterpriseServerUserAccountEmail: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The email address. */
    email: 'String!',
    id: 'ID!',
    /** Indicates whether this is the primary email of the associated user account. */
    isPrimary: 'Boolean!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The user account to which the email belongs. */
    userAccount: 'EnterpriseServerUserAccount!',
  },

  /**
   * @name EnterpriseServerUserAccountEmailConnection
   * @type Object
   */
  EnterpriseServerUserAccountEmailConnection: {
    /** A list of edges. */
    edges: '[EnterpriseServerUserAccountEmailEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseServerUserAccountEmail]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseServerUserAccountEmailEdge
   * @type Object
   */
  EnterpriseServerUserAccountEmailEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseServerUserAccountEmail',
  },

  /**
   * @name EnterpriseServerUserAccountEmailOrder
   * @type InputObject
   */
  EnterpriseServerUserAccountEmailOrder: {
    field: 'EnterpriseServerUserAccountEmailOrderField!',
    direction: 'OrderDirection!',
  },

  EnterpriseServerUserAccountEmailOrderField,

  /**
   * @name EnterpriseServerUserAccountOrder
   * @type InputObject
   */
  EnterpriseServerUserAccountOrder: {
    field: 'EnterpriseServerUserAccountOrderField!',
    direction: 'OrderDirection!',
  },

  EnterpriseServerUserAccountOrderField,

  /**
   * @name EnterpriseServerUserAccountsUpload
   * @type Object
   * @implements Node
   */
  EnterpriseServerUserAccountsUpload: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The enterprise to which this upload belongs. */
    enterprise: 'Enterprise!',
    /** The Enterprise Server installation for which this upload was generated. */
    enterpriseServerInstallation: 'EnterpriseServerInstallation!',
    id: 'ID!',
    /** The name of the file uploaded. */
    name: 'String!',
    /** The synchronization state of the upload */
    syncState: 'EnterpriseServerUserAccountsUploadSyncState!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name EnterpriseServerUserAccountsUploadConnection
   * @type Object
   */
  EnterpriseServerUserAccountsUploadConnection: {
    /** A list of edges. */
    edges: '[EnterpriseServerUserAccountsUploadEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseServerUserAccountsUpload]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseServerUserAccountsUploadEdge
   * @type Object
   */
  EnterpriseServerUserAccountsUploadEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseServerUserAccountsUpload',
  },

  /**
   * @name EnterpriseServerUserAccountsUploadOrder
   * @type InputObject
   */
  EnterpriseServerUserAccountsUploadOrder: {
    field: 'EnterpriseServerUserAccountsUploadOrderField!',
    direction: 'OrderDirection!',
  },

  EnterpriseServerUserAccountsUploadOrderField,

  EnterpriseServerUserAccountsUploadSyncState,

  /**
   * @name EnterpriseUserAccount
   * @type Object
   * @implements Node, Actor
   */
  EnterpriseUserAccount: {
    /** A URL pointing to the enterprise user account's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The enterprise in which this user account exists. */
    enterprise: 'Enterprise!',
    id: 'ID!',
    /** An identifier for the enterprise user account, a login or email address */
    login: 'String!',
    /** The name of the enterprise user account */
    name: 'String',
    /** A list of enterprise organizations this user is a member of. */
    organizations: [
      'EnterpriseOrganizationMembershipConnection!',
      {
        query: 'String',
        orderBy: 'OrganizationOrder',
        role: 'EnterpriseUserAccountMembershipRole',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The HTTP path for this user. */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this user. */
    url: 'URI!',
    /** The user within the enterprise. */
    user: 'User',
  },

  /**
   * @name EnterpriseUserAccountConnection
   * @type Object
   */
  EnterpriseUserAccountConnection: {
    /** A list of edges. */
    edges: '[EnterpriseUserAccountEdge]',
    /** A list of nodes. */
    nodes: '[EnterpriseUserAccount]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name EnterpriseUserAccountEdge
   * @type Object
   */
  EnterpriseUserAccountEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'EnterpriseUserAccount',
  },

  EnterpriseUserAccountMembershipRole,

  EnterpriseUserDeployment,

  /**
   * @name ExternalIdentity
   * @type Object
   * @implements Node
   */
  ExternalIdentity: {
    /** The GUID for this identity */
    guid: 'String!',
    id: 'ID!',
    /** Organization invitation for this SCIM-provisioned external identity */
    organizationInvitation: 'OrganizationInvitation',
    /** SAML Identity attributes */
    samlIdentity: 'ExternalIdentitySamlAttributes',
    /** SCIM Identity attributes */
    scimIdentity: 'ExternalIdentityScimAttributes',
    /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
    user: 'User',
  },

  /**
   * @name ExternalIdentityConnection
   * @type Object
   */
  ExternalIdentityConnection: {
    /** A list of edges. */
    edges: '[ExternalIdentityEdge]',
    /** A list of nodes. */
    nodes: '[ExternalIdentity]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ExternalIdentityEdge
   * @type Object
   */
  ExternalIdentityEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'ExternalIdentity',
  },

  /**
   * @name ExternalIdentitySamlAttributes
   * @type Object
   */
  ExternalIdentitySamlAttributes: {
    /** The emails associated with the SAML identity */
    emails: '[UserEmailMetadata!]',
    /** Family name of the SAML identity */
    familyName: 'String',
    /** Given name of the SAML identity */
    givenName: 'String',
    /** The groups linked to this identity in IDP */
    groups: '[String!]',
    /** The NameID of the SAML identity */
    nameId: 'String',
    /** The userName of the SAML identity */
    username: 'String',
  },

  /**
   * @name ExternalIdentityScimAttributes
   * @type Object
   */
  ExternalIdentityScimAttributes: {
    /** The emails associated with the SCIM identity */
    emails: '[UserEmailMetadata!]',
    /** Family name of the SCIM identity */
    familyName: 'String',
    /** Given name of the SCIM identity */
    givenName: 'String',
    /** The groups linked to this identity in IDP */
    groups: '[String!]',
    /** The userName of the SCIM identity */
    username: 'String',
  },

  FileViewedState,

  /**
   * @name FollowUserInput
   * @type InputObject
   */
  FollowUserInput: {
    userId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name FollowUserPayload
   * @type Object
   */
  FollowUserPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The user that was followed. */
    user: 'User',
  },

  /**
   * @name FollowerConnection
   * @type Object
   */
  FollowerConnection: {
    /** A list of edges. */
    edges: '[UserEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name FollowingConnection
   * @type Object
   */
  FollowingConnection: {
    /** A list of edges. */
    edges: '[UserEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name FundingLink
   * @type Object
   */
  FundingLink: {
    /** The funding platform this link is for. */
    platform: 'FundingPlatform!',
    /** The configured URL for this funding link. */
    url: 'URI!',
  },

  FundingPlatform,

  /**
   * @name GenericHovercardContext
   * @type Object
   * @implements HovercardContext
   */
  GenericHovercardContext: {
    /** A string describing this context */
    message: 'String!',
    /** An octicon to accompany this context */
    octicon: 'String!',
  },

  /**
   * @name Gist
   * @type Object
   * @implements Node, Starrable, UniformResourceLocatable
   */
  Gist: {
    /** A list of comments associated with the gist */
    comments: [
      'GistCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The gist description. */
    description: 'String',
    /** The files in this gist. */
    files: ['[GistFile]', { limit: 'Int', oid: 'GitObjectID' }],
    /** A list of forks associated with the gist */
    forks: [
      'GistConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'GistOrder',
      },
    ],
    id: 'ID!',
    /** Identifies if the gist is a fork. */
    isFork: 'Boolean!',
    /** Whether the gist is public or not. */
    isPublic: 'Boolean!',
    /** The gist name. */
    name: 'String!',
    /** The gist owner. */
    owner: 'RepositoryOwner',
    /** Identifies when the gist was last pushed to. */
    pushedAt: 'DateTime',
    /** The HTML path to this resource. */
    resourcePath: 'URI!',
    /**
     * Returns a count of how many stargazers there are on this object
     *
     */
    stargazerCount: 'Int!',
    /** A list of users who have starred this starrable. */
    stargazers: [
      'StargazerConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'StarOrder',
      },
    ],
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this Gist. */
    url: 'URI!',
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: 'Boolean!',
  },

  /**
   * @name GistComment
   * @type Object
   * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment
   */
  GistComment: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the gist. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** Identifies the comment body. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body rendered to text. */
    bodyText: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The actor who edited the comment. */
    editor: 'Actor',
    /** The associated gist. */
    gist: 'Gist!',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** Returns whether or not a comment has been minimized. */
    isMinimized: 'Boolean!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** Returns why the comment was minimized. */
    minimizedReason: 'String',
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
  },

  /**
   * @name GistCommentConnection
   * @type Object
   */
  GistCommentConnection: {
    /** A list of edges. */
    edges: '[GistCommentEdge]',
    /** A list of nodes. */
    nodes: '[GistComment]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name GistCommentEdge
   * @type Object
   */
  GistCommentEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'GistComment',
  },

  /**
   * @name GistConnection
   * @type Object
   */
  GistConnection: {
    /** A list of edges. */
    edges: '[GistEdge]',
    /** A list of nodes. */
    nodes: '[Gist]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name GistEdge
   * @type Object
   */
  GistEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Gist',
  },

  /**
   * @name GistFile
   * @type Object
   */
  GistFile: {
    /** The file name encoded to remove characters that are invalid in URL paths. */
    encodedName: 'String',
    /** The gist file encoding. */
    encoding: 'String',
    /** The file extension from the file name. */
    extension: 'String',
    /** Indicates if this file is an image. */
    isImage: 'Boolean!',
    /** Whether the file's contents were truncated. */
    isTruncated: 'Boolean!',
    /** The programming language this file is written in. */
    language: 'Language',
    /** The gist file name. */
    name: 'String',
    /** The gist file size in bytes. */
    size: 'Int',
    /** UTF8 text data or null if the file is binary */
    text: ['String', { truncate: 'Int' }],
  },

  /**
   * @name GistOrder
   * @type InputObject
   */
  GistOrder: {
    field: 'GistOrderField!',
    direction: 'OrderDirection!',
  },

  GistOrderField,

  GistPrivacy,

  /**
   * @name GitActor
   * @type Object
   */
  GitActor: {
    /** A URL pointing to the author's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** The timestamp of the Git action (authoring or committing). */
    date: 'GitTimestamp',
    /** The email in the Git commit. */
    email: 'String',
    /** The name in the Git commit. */
    name: 'String',
    /** The GitHub user corresponding to the email field. Null if no such user exists. */
    user: 'User',
  },

  /**
   * @name GitActorConnection
   * @type Object
   */
  GitActorConnection: {
    /** A list of edges. */
    edges: '[GitActorEdge]',
    /** A list of nodes. */
    nodes: '[GitActor]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name GitActorEdge
   * @type Object
   */
  GitActorEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'GitActor',
  },

  /**
   * @name GitHubMetadata
   * @type Object
   */
  GitHubMetadata: {
    /** Returns a String that's a SHA of `github-services` */
    gitHubServicesSha: 'GitObjectID!',
    /** IP addresses that users connect to for git operations */
    gitIpAddresses: '[String!]',
    /** IP addresses that service hooks are sent from */
    hookIpAddresses: '[String!]',
    /** IP addresses that the importer connects from */
    importerIpAddresses: '[String!]',
    /** Whether or not users are verified */
    isPasswordAuthenticationVerifiable: 'Boolean!',
    /** IP addresses for GitHub Pages' A records */
    pagesIpAddresses: '[String!]',
  },

  /**
   * @name GitObject
   * @type Interface
   */
  GitObject: [
    {
      /** An abbreviated version of the Git object ID */
      abbreviatedOid: 'String!',
      /** The HTTP path for this Git object */
      commitResourcePath: 'URI!',
      /** The HTTP URL for this Git object */
      commitUrl: 'URI!',
      id: 'ID!',
      /** The Git object ID */
      oid: 'GitObjectID!',
      /** The Repository the Git object belongs to */
      repository: 'Repository!',
    },
    'Blob',
    'Commit',
    'Tag',
    'Tree',
  ],

  /**
   * @name GitSignature
   * @type Interface
   */
  GitSignature: [
    {
      /** Email used to sign this object. */
      email: 'String!',
      /** True if the signature is valid and verified by GitHub. */
      isValid: 'Boolean!',
      /** Payload for GPG signing object. Raw ODB object without the signature header. */
      payload: 'String!',
      /** ASCII-armored signature header from object. */
      signature: 'String!',
      /** GitHub user corresponding to the email signing this commit. */
      signer: 'User',
      /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */
      state: 'GitSignatureState!',
      /** True if the signature was made with GitHub's signing key. */
      wasSignedByGitHub: 'Boolean!',
    },
    'GpgSignature',
    'SmimeSignature',
    'UnknownSignature',
  ],

  GitSignatureState,

  /**
   * @name GpgSignature
   * @type Object
   * @implements GitSignature
   */
  GpgSignature: {
    /** Email used to sign this object. */
    email: 'String!',
    /** True if the signature is valid and verified by GitHub. */
    isValid: 'Boolean!',
    /** Hex-encoded ID of the key that signed this object. */
    keyId: 'String',
    /** Payload for GPG signing object. Raw ODB object without the signature header. */
    payload: 'String!',
    /** ASCII-armored signature header from object. */
    signature: 'String!',
    /** GitHub user corresponding to the email signing this commit. */
    signer: 'User',
    /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */
    state: 'GitSignatureState!',
    /** True if the signature was made with GitHub's signing key. */
    wasSignedByGitHub: 'Boolean!',
  },

  /**
   * @name HeadRefDeletedEvent
   * @type Object
   * @implements Node
   */
  HeadRefDeletedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the Ref associated with the `head_ref_deleted` event. */
    headRef: 'Ref',
    /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
    headRefName: 'String!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
  },

  /**
   * @name HeadRefForcePushedEvent
   * @type Object
   * @implements Node
   */
  HeadRefForcePushedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
    afterCommit: 'Commit',
    /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
    beforeCommit: 'Commit',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
    ref: 'Ref',
  },

  /**
   * @name HeadRefRestoredEvent
   * @type Object
   * @implements Node
   */
  HeadRefRestoredEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
  },

  /**
   * @name Hovercard
   * @type Object
   */
  Hovercard: {
    /** Each of the contexts for this hovercard */
    contexts: '[HovercardContext!]!',
  },

  /**
   * @name HovercardContext
   * @type Interface
   */
  HovercardContext: [
    {
      /** A string describing this context */
      message: 'String!',
      /** An octicon to accompany this context */
      octicon: 'String!',
    },
    'GenericHovercardContext',
    'OrganizationTeamsHovercardContext',
    'OrganizationsHovercardContext',
    'ReviewStatusHovercardContext',
    'ViewerHovercardContext',
  ],

  IdentityProviderConfigurationState,

  /**
   * @name InviteEnterpriseAdminInput
   * @type InputObject
   */
  InviteEnterpriseAdminInput: {
    enterpriseId: 'ID!',
    invitee: 'String',
    email: 'String',
    role: 'EnterpriseAdministratorRole',
    clientMutationId: 'String',
  },

  /**
   * @name InviteEnterpriseAdminPayload
   * @type Object
   */
  InviteEnterpriseAdminPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The created enterprise administrator invitation. */
    invitation: 'EnterpriseAdministratorInvitation',
  },

  IpAllowListEnabledSettingValue,

  /**
   * @name IpAllowListEntry
   * @type Object
   * @implements Node
   */
  IpAllowListEntry: {
    /** A single IP address or range of IP addresses in CIDR notation. */
    allowListValue: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Whether the entry is currently active. */
    isActive: 'Boolean!',
    /** The name of the IP allow list entry. */
    name: 'String',
    /** The owner of the IP allow list entry. */
    owner: 'IpAllowListOwner!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name IpAllowListEntryConnection
   * @type Object
   */
  IpAllowListEntryConnection: {
    /** A list of edges. */
    edges: '[IpAllowListEntryEdge]',
    /** A list of nodes. */
    nodes: '[IpAllowListEntry]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name IpAllowListEntryEdge
   * @type Object
   */
  IpAllowListEntryEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'IpAllowListEntry',
  },

  /**
   * @name IpAllowListEntryOrder
   * @type InputObject
   */
  IpAllowListEntryOrder: {
    field: 'IpAllowListEntryOrderField!',
    direction: 'OrderDirection!',
  },

  IpAllowListEntryOrderField,

  /**
   * @name IpAllowListOwner
   * @type Union
   */
  IpAllowListOwner: ['Enterprise', 'Organization'],

  /**
   * @name Issue
   * @type Object
   * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
   */
  Issue: {
    /** Reason that the conversation was locked. */
    activeLockReason: 'LockReason',
    /** A list of Users assigned to this object. */
    assignees: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the subject of the comment. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** Identifies the body of the issue. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The http path for this issue body */
    bodyResourcePath: 'URI!',
    /** Identifies the body of the issue rendered to text. */
    bodyText: 'String!',
    /** The http URL for this issue body */
    bodyUrl: 'URI!',
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: 'Boolean!',
    /** Identifies the date and time when the object was closed. */
    closedAt: 'DateTime',
    /** A list of comments associated with the Issue. */
    comments: [
      'IssueCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The actor who edited the comment. */
    editor: 'Actor',
    /** The hovercard information for this issue */
    hovercard: ['Hovercard!', { includeNotificationContexts: 'Boolean' }],
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** Is this issue read by the viewer */
    isReadByViewer: 'Boolean',
    /** A list of labels associated with the object. */
    labels: [
      'LabelConnection',
      {
        orderBy: 'LabelOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** `true` if the object is locked */
    locked: 'Boolean!',
    /** Identifies the milestone associated with the issue. */
    milestone: 'Milestone',
    /** Identifies the issue number. */
    number: 'Int!',
    /** A list of Users that are participating in the Issue conversation. */
    participants: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** List of project cards associated with this issue. */
    projectCards: [
      'ProjectCardConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        archivedStates: '[ProjectCardArchivedState]',
      },
    ],
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The repository associated with this node. */
    repository: 'Repository!',
    /** The HTTP path for this issue */
    resourcePath: 'URI!',
    /** Identifies the state of the issue. */
    state: 'IssueState!',
    /**
     * @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2020-10-01 UTC.
     * A list of events, comments, commits, etc. associated with the issue.
     */
    timeline: [
      'IssueTimelineConnection!',
      {
        since: 'DateTime',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of events, comments, commits, etc. associated with the issue. */
    timelineItems: [
      'IssueTimelineItemsConnection!',
      {
        since: 'DateTime',
        skip: 'Int',
        itemTypes: '[IssueTimelineItemsItemType!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Identifies the issue title. */
    title: 'String!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this issue */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription: 'SubscriptionState',
  },

  /**
   * @name IssueComment
   * @type Object
   * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment, Reactable, RepositoryNode
   */
  IssueComment: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the subject of the comment. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** The body as Markdown. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body rendered to text. */
    bodyText: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The actor who edited the comment. */
    editor: 'Actor',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** Returns whether or not a comment has been minimized. */
    isMinimized: 'Boolean!',
    /** Identifies the issue associated with the comment. */
    issue: 'Issue!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** Returns why the comment was minimized. */
    minimizedReason: 'String',
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /**
     * Returns the pull request associated with the comment, if this comment was made on a
     * pull request.
     *
     */
    pullRequest: 'PullRequest',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The repository associated with this node. */
    repository: 'Repository!',
    /** The HTTP path for this issue comment */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this issue comment */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
  },

  /**
   * @name IssueCommentConnection
   * @type Object
   */
  IssueCommentConnection: {
    /** A list of edges. */
    edges: '[IssueCommentEdge]',
    /** A list of nodes. */
    nodes: '[IssueComment]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name IssueCommentEdge
   * @type Object
   */
  IssueCommentEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'IssueComment',
  },

  /**
   * @name IssueConnection
   * @type Object
   */
  IssueConnection: {
    /** A list of edges. */
    edges: '[IssueEdge]',
    /** A list of nodes. */
    nodes: '[Issue]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name IssueContributionsByRepository
   * @type Object
   */
  IssueContributionsByRepository: {
    /** The issue contributions. */
    contributions: [
      'CreatedIssueContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'ContributionOrder',
      },
    ],
    /** The repository in which the issues were opened. */
    repository: 'Repository!',
  },

  /**
   * @name IssueEdge
   * @type Object
   */
  IssueEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Issue',
  },

  /**
   * @name IssueFilters
   * @type InputObject
   */
  IssueFilters: {
    assignee: 'String',
    createdBy: 'String',
    labels: '[String!]',
    mentioned: 'String',
    milestone: 'String',
    since: 'DateTime',
    states: '[IssueState!]',
    viewerSubscribed: 'Boolean',
  },

  /**
   * @name IssueOrPullRequest
   * @type Union
   */
  IssueOrPullRequest: ['Issue', 'PullRequest'],

  /**
   * @name IssueOrder
   * @type InputObject
   */
  IssueOrder: {
    field: 'IssueOrderField!',
    direction: 'OrderDirection!',
  },

  IssueOrderField,

  IssueState,

  /**
   * @name IssueTemplate
   * @type Object
   */
  IssueTemplate: {
    /** The template purpose. */
    about: 'String',
    /** The suggested issue body. */
    body: 'String',
    /** The template name. */
    name: 'String!',
    /** The suggested issue title. */
    title: 'String',
  },

  /**
   * @name IssueTimelineConnection
   * @type Object
   */
  IssueTimelineConnection: {
    /** A list of edges. */
    edges: '[IssueTimelineItemEdge]',
    /** A list of nodes. */
    nodes: '[IssueTimelineItem]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name IssueTimelineItem
   * @type Union
   */
  IssueTimelineItem: [
    'AssignedEvent',
    'ClosedEvent',
    'Commit',
    'CrossReferencedEvent',
    'DemilestonedEvent',
    'IssueComment',
    'LabeledEvent',
    'LockedEvent',
    'MilestonedEvent',
    'ReferencedEvent',
    'RenamedTitleEvent',
    'ReopenedEvent',
    'SubscribedEvent',
    'TransferredEvent',
    'UnassignedEvent',
    'UnlabeledEvent',
    'UnlockedEvent',
    'UnsubscribedEvent',
    'UserBlockedEvent',
  ],

  /**
   * @name IssueTimelineItemEdge
   * @type Object
   */
  IssueTimelineItemEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'IssueTimelineItem',
  },

  /**
   * @name IssueTimelineItems
   * @type Union
   */
  IssueTimelineItems: [
    'AddedToProjectEvent',
    'AssignedEvent',
    'ClosedEvent',
    'CommentDeletedEvent',
    'ConnectedEvent',
    'ConvertedNoteToIssueEvent',
    'CrossReferencedEvent',
    'DemilestonedEvent',
    'DisconnectedEvent',
    'IssueComment',
    'LabeledEvent',
    'LockedEvent',
    'MarkedAsDuplicateEvent',
    'MentionedEvent',
    'MilestonedEvent',
    'MovedColumnsInProjectEvent',
    'PinnedEvent',
    'ReferencedEvent',
    'RemovedFromProjectEvent',
    'RenamedTitleEvent',
    'ReopenedEvent',
    'SubscribedEvent',
    'TransferredEvent',
    'UnassignedEvent',
    'UnlabeledEvent',
    'UnlockedEvent',
    'UnmarkedAsDuplicateEvent',
    'UnpinnedEvent',
    'UnsubscribedEvent',
    'UserBlockedEvent',
  ],

  /**
   * @name IssueTimelineItemsConnection
   * @type Object
   */
  IssueTimelineItemsConnection: {
    /** A list of edges. */
    edges: '[IssueTimelineItemsEdge]',
    /** Identifies the count of items after applying `before` and `after` filters. */
    filteredCount: 'Int!',
    /** A list of nodes. */
    nodes: '[IssueTimelineItems]',
    /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
    pageCount: 'Int!',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
    /** Identifies the date and time when the timeline was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name IssueTimelineItemsEdge
   * @type Object
   */
  IssueTimelineItemsEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'IssueTimelineItems',
  },

  IssueTimelineItemsItemType,

  /**
   * @name JoinedGitHubContribution
   * @type Object
   * @implements Contribution
   */
  JoinedGitHubContribution: {
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name Label
   * @type Object
   * @implements Node
   */
  Label: {
    /** Identifies the label color. */
    color: 'String!',
    /** Identifies the date and time when the label was created. */
    createdAt: 'DateTime',
    /** A brief description of this label. */
    description: 'String',
    id: 'ID!',
    /** Indicates whether or not this is a default label. */
    isDefault: 'Boolean!',
    /** A list of issues associated with this label. */
    issues: [
      'IssueConnection!',
      {
        orderBy: 'IssueOrder',
        labels: '[String!]',
        states: '[IssueState!]',
        filterBy: 'IssueFilters',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Identifies the label name. */
    name: 'String!',
    /** A list of pull requests associated with this label. */
    pullRequests: [
      'PullRequestConnection!',
      {
        states: '[PullRequestState!]',
        labels: '[String!]',
        headRefName: 'String',
        baseRefName: 'String',
        orderBy: 'IssueOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The repository associated with this label. */
    repository: 'Repository!',
    /** The HTTP path for this label. */
    resourcePath: 'URI!',
    /** Identifies the date and time when the label was last updated. */
    updatedAt: 'DateTime',
    /** The HTTP URL for this label. */
    url: 'URI!',
  },

  /**
   * @name LabelConnection
   * @type Object
   */
  LabelConnection: {
    /** A list of edges. */
    edges: '[LabelEdge]',
    /** A list of nodes. */
    nodes: '[Label]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name LabelEdge
   * @type Object
   */
  LabelEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Label',
  },

  /**
   * @name LabelOrder
   * @type InputObject
   */
  LabelOrder: {
    field: 'LabelOrderField!',
    direction: 'OrderDirection!',
  },

  LabelOrderField,

  /**
   * @name Labelable
   * @type Interface
   */
  Labelable: [
    {
      /** A list of labels associated with the object. */
      labels: [
        'LabelConnection',
        {
          orderBy: 'LabelOrder',
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
        },
      ],
    },
    'Issue',
    'PullRequest',
  ],

  /**
   * @name LabeledEvent
   * @type Object
   * @implements Node
   */
  LabeledEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the label associated with the 'labeled' event. */
    label: 'Label!',
    /** Identifies the `Labelable` associated with the event. */
    labelable: 'Labelable!',
  },

  /**
   * @name Language
   * @type Object
   * @implements Node
   */
  Language: {
    /** The color defined for the current language. */
    color: 'String',
    id: 'ID!',
    /** The name of the current language. */
    name: 'String!',
  },

  /**
   * @name LanguageConnection
   * @type Object
   */
  LanguageConnection: {
    /** A list of edges. */
    edges: '[LanguageEdge]',
    /** A list of nodes. */
    nodes: '[Language]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
    /** The total size in bytes of files written in that language. */
    totalSize: 'Int!',
  },

  /**
   * @name LanguageEdge
   * @type Object
   */
  LanguageEdge: {
    cursor: 'String!',
    node: 'Language!',
    /** The number of bytes of code written in the language. */
    size: 'Int!',
  },

  /**
   * @name LanguageOrder
   * @type InputObject
   */
  LanguageOrder: {
    field: 'LanguageOrderField!',
    direction: 'OrderDirection!',
  },

  LanguageOrderField,

  /**
   * @name License
   * @type Object
   * @implements Node
   */
  License: {
    /** The full text of the license */
    body: 'String!',
    /** The conditions set by the license */
    conditions: '[LicenseRule]!',
    /** A human-readable description of the license */
    description: 'String',
    /** Whether the license should be featured */
    featured: 'Boolean!',
    /** Whether the license should be displayed in license pickers */
    hidden: 'Boolean!',
    id: 'ID!',
    /** Instructions on how to implement the license */
    implementation: 'String',
    /** The lowercased SPDX ID of the license */
    key: 'String!',
    /** The limitations set by the license */
    limitations: '[LicenseRule]!',
    /** The license full name specified by <https://spdx.org/licenses> */
    name: 'String!',
    /** Customary short name if applicable (e.g, GPLv3) */
    nickname: 'String',
    /** The permissions set by the license */
    permissions: '[LicenseRule]!',
    /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
    pseudoLicense: 'Boolean!',
    /** Short identifier specified by <https://spdx.org/licenses> */
    spdxId: 'String',
    /** URL to the license on <https://choosealicense.com> */
    url: 'URI',
  },

  /**
   * @name LicenseRule
   * @type Object
   */
  LicenseRule: {
    /** A description of the rule */
    description: 'String!',
    /** The machine-readable rule key */
    key: 'String!',
    /** The human-readable rule label */
    label: 'String!',
  },

  /**
   * @name LinkRepositoryToProjectInput
   * @type InputObject
   */
  LinkRepositoryToProjectInput: {
    projectId: 'ID!',
    repositoryId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name LinkRepositoryToProjectPayload
   * @type Object
   */
  LinkRepositoryToProjectPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The linked Project. */
    project: 'Project',
    /** The linked Repository. */
    repository: 'Repository',
  },

  /**
   * @name LockLockableInput
   * @type InputObject
   */
  LockLockableInput: {
    lockableId: 'ID!',
    lockReason: 'LockReason',
    clientMutationId: 'String',
  },

  /**
   * @name LockLockablePayload
   * @type Object
   */
  LockLockablePayload: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The item that was locked. */
    lockedRecord: 'Lockable',
  },

  LockReason,

  /**
   * @name Lockable
   * @type Interface
   */
  Lockable: [
    {
      /** Reason that the conversation was locked. */
      activeLockReason: 'LockReason',
      /** `true` if the object is locked */
      locked: 'Boolean!',
    },
    'Issue',
    'PullRequest',
  ],

  /**
   * @name LockedEvent
   * @type Object
   * @implements Node
   */
  LockedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Reason that the conversation was locked (optional). */
    lockReason: 'LockReason',
    /** Object that was locked. */
    lockable: 'Lockable!',
  },

  /**
   * @name Mannequin
   * @type Object
   * @implements Node, Actor, UniformResourceLocatable
   */
  Mannequin: {
    /** A URL pointing to the GitHub App's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The mannequin's email on the source instance. */
    email: 'String',
    id: 'ID!',
    /** The username of the actor. */
    login: 'String!',
    /** The HTML path to this resource. */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The URL to this resource. */
    url: 'URI!',
  },

  /**
   * @name MarkFileAsViewedInput
   * @type InputObject
   */
  MarkFileAsViewedInput: {
    pullRequestId: 'ID!',
    path: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name MarkFileAsViewedPayload
   * @type Object
   */
  MarkFileAsViewedPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated pull request. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name MarkPullRequestReadyForReviewInput
   * @type InputObject
   */
  MarkPullRequestReadyForReviewInput: {
    pullRequestId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name MarkPullRequestReadyForReviewPayload
   * @type Object
   */
  MarkPullRequestReadyForReviewPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The pull request that is ready for review. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name MarkedAsDuplicateEvent
   * @type Object
   * @implements Node
   */
  MarkedAsDuplicateEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** The authoritative issue or pull request which has been duplicated by another. */
    canonical: 'IssueOrPullRequest',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The issue or pull request which has been marked as a duplicate of another. */
    duplicate: 'IssueOrPullRequest',
    id: 'ID!',
    /** Canonical and duplicate belong to different repositories. */
    isCrossRepository: 'Boolean!',
  },

  /**
   * @name MarketplaceCategory
   * @type Object
   * @implements Node
   */
  MarketplaceCategory: {
    /** The category's description. */
    description: 'String',
    /** The technical description of how apps listed in this category work with GitHub. */
    howItWorks: 'String',
    id: 'ID!',
    /** The category's name. */
    name: 'String!',
    /** How many Marketplace listings have this as their primary category. */
    primaryListingCount: 'Int!',
    /** The HTTP path for this Marketplace category. */
    resourcePath: 'URI!',
    /** How many Marketplace listings have this as their secondary category. */
    secondaryListingCount: 'Int!',
    /** The short name of the category used in its URL. */
    slug: 'String!',
    /** The HTTP URL for this Marketplace category. */
    url: 'URI!',
  },

  /**
   * @name MarketplaceListing
   * @type Object
   * @implements Node
   */
  MarketplaceListing: {
    /** The GitHub App this listing represents. */
    app: 'App',
    /** URL to the listing owner's company site. */
    companyUrl: 'URI',
    /** The HTTP path for configuring access to the listing's integration or OAuth app */
    configurationResourcePath: 'URI!',
    /** The HTTP URL for configuring access to the listing's integration or OAuth app */
    configurationUrl: 'URI!',
    /** URL to the listing's documentation. */
    documentationUrl: 'URI',
    /** The listing's detailed description. */
    extendedDescription: 'String',
    /** The listing's detailed description rendered to HTML. */
    extendedDescriptionHTML: 'HTML!',
    /** The listing's introductory description. */
    fullDescription: 'String!',
    /** The listing's introductory description rendered to HTML. */
    fullDescriptionHTML: 'HTML!',
    /** Does this listing have any plans with a free trial? */
    hasPublishedFreeTrialPlans: 'Boolean!',
    /** Does this listing have a terms of service link? */
    hasTermsOfService: 'Boolean!',
    /** A technical description of how this app works with GitHub. */
    howItWorks: 'String',
    /** The listing's technical description rendered to HTML. */
    howItWorksHTML: 'HTML!',
    id: 'ID!',
    /** URL to install the product to the viewer's account or organization. */
    installationUrl: 'URI',
    /** Whether this listing's app has been installed for the current viewer */
    installedForViewer: 'Boolean!',
    /** Whether this listing has been removed from the Marketplace. */
    isArchived: 'Boolean!',
    /** Whether this listing is still an editable draft that has not been submitted for review and is not publicly visible in the Marketplace. */
    isDraft: 'Boolean!',
    /** Whether the product this listing represents is available as part of a paid plan. */
    isPaid: 'Boolean!',
    /** Whether this listing has been approved for display in the Marketplace. */
    isPublic: 'Boolean!',
    /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
    isRejected: 'Boolean!',
    /** Whether this listing has been approved for unverified display in the Marketplace. */
    isUnverified: 'Boolean!',
    /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
    isUnverifiedPending: 'Boolean!',
    /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
    isVerificationPendingFromDraft: 'Boolean!',
    /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
    isVerificationPendingFromUnverified: 'Boolean!',
    /** Whether this listing has been approved for verified display in the Marketplace. */
    isVerified: 'Boolean!',
    /** The hex color code, without the leading '#', for the logo background. */
    logoBackgroundColor: 'String!',
    /** URL for the listing's logo image. */
    logoUrl: ['URI', { size: 'Int' }],
    /** The listing's full name. */
    name: 'String!',
    /** The listing's very short description without a trailing period or ampersands. */
    normalizedShortDescription: 'String!',
    /** URL to the listing's detailed pricing. */
    pricingUrl: 'URI',
    /** The category that best describes the listing. */
    primaryCategory: 'MarketplaceCategory!',
    /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
    privacyPolicyUrl: 'URI!',
    /** The HTTP path for the Marketplace listing. */
    resourcePath: 'URI!',
    /** The URLs for the listing's screenshots. */
    screenshotUrls: '[String]!',
    /** An alternate category that describes the listing. */
    secondaryCategory: 'MarketplaceCategory',
    /** The listing's very short description. */
    shortDescription: 'String!',
    /** The short name of the listing used in its URL. */
    slug: 'String!',
    /** URL to the listing's status page. */
    statusUrl: 'URI',
    /** An email address for support for this listing's app. */
    supportEmail: 'String',
    /** Either a URL or an email address for support for this listing's app, may return an empty string for listings that do not require a support URL. */
    supportUrl: 'URI!',
    /** URL to the listing's terms of service. */
    termsOfServiceUrl: 'URI',
    /** The HTTP URL for the Marketplace listing. */
    url: 'URI!',
    /** Can the current viewer add plans for this Marketplace listing. */
    viewerCanAddPlans: 'Boolean!',
    /** Can the current viewer approve this Marketplace listing. */
    viewerCanApprove: 'Boolean!',
    /** Can the current viewer delist this Marketplace listing. */
    viewerCanDelist: 'Boolean!',
    /** Can the current viewer edit this Marketplace listing. */
    viewerCanEdit: 'Boolean!',
    /**
     * Can the current viewer edit the primary and secondary category of this
     * Marketplace listing.
     *
     */
    viewerCanEditCategories: 'Boolean!',
    /** Can the current viewer edit the plans for this Marketplace listing. */
    viewerCanEditPlans: 'Boolean!',
    /**
     * Can the current viewer return this Marketplace listing to draft state
     * so it becomes editable again.
     *
     */
    viewerCanRedraft: 'Boolean!',
    /**
     * Can the current viewer reject this Marketplace listing by returning it to
     * an editable draft state or rejecting it entirely.
     *
     */
    viewerCanReject: 'Boolean!',
    /**
     * Can the current viewer request this listing be reviewed for display in
     * the Marketplace as verified.
     *
     */
    viewerCanRequestApproval: 'Boolean!',
    /**
     * Indicates whether the current user has an active subscription to this Marketplace listing.
     *
     */
    viewerHasPurchased: 'Boolean!',
    /**
     * Indicates if the current user has purchased a subscription to this Marketplace listing
     * for all of the organizations the user owns.
     *
     */
    viewerHasPurchasedForAllOrganizations: 'Boolean!',
    /**
     * Does the current viewer role allow them to administer this Marketplace listing.
     *
     */
    viewerIsListingAdmin: 'Boolean!',
  },

  /**
   * @name MarketplaceListingConnection
   * @type Object
   */
  MarketplaceListingConnection: {
    /** A list of edges. */
    edges: '[MarketplaceListingEdge]',
    /** A list of nodes. */
    nodes: '[MarketplaceListing]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name MarketplaceListingEdge
   * @type Object
   */
  MarketplaceListingEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'MarketplaceListing',
  },

  /**
   * @name MemberStatusable
   * @type Interface
   */
  MemberStatusable: [
    {
      /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
      memberStatuses: [
        'UserStatusConnection!',
        {
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          orderBy: 'UserStatusOrder',
        },
      ],
    },
    'Organization',
    'Team',
  ],

  /**
   * @name MembersCanDeleteReposClearAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
   */
  MembersCanDeleteReposClearAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name MembersCanDeleteReposDisableAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
   */
  MembersCanDeleteReposDisableAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name MembersCanDeleteReposEnableAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
   */
  MembersCanDeleteReposEnableAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name MentionedEvent
   * @type Object
   * @implements Node
   */
  MentionedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
  },

  /**
   * @name MergeBranchInput
   * @type InputObject
   */
  MergeBranchInput: {
    repositoryId: 'ID!',
    base: 'String!',
    head: 'String!',
    commitMessage: 'String',
    authorEmail: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name MergeBranchPayload
   * @type Object
   */
  MergeBranchPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The resulting merge Commit. */
    mergeCommit: 'Commit',
  },

  /**
   * @name MergePullRequestInput
   * @type InputObject
   */
  MergePullRequestInput: {
    pullRequestId: 'ID!',
    commitHeadline: 'String',
    commitBody: 'String',
    expectedHeadOid: 'GitObjectID',
    mergeMethod: 'PullRequestMergeMethod',
    authorEmail: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name MergePullRequestPayload
   * @type Object
   */
  MergePullRequestPayload: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The pull request that was merged. */
    pullRequest: 'PullRequest',
  },

  MergeableState,

  /**
   * @name MergedEvent
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  MergedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the commit associated with the `merge` event. */
    commit: 'Commit',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the Ref associated with the `merge` event. */
    mergeRef: 'Ref',
    /** Identifies the name of the Ref associated with the `merge` event. */
    mergeRefName: 'String!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** The HTTP path for this merged event. */
    resourcePath: 'URI!',
    /** The HTTP URL for this merged event. */
    url: 'URI!',
  },

  /**
   * @name Milestone
   * @type Object
   * @implements Node, Closable, UniformResourceLocatable
   */
  Milestone: {
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: 'Boolean!',
    /** Identifies the date and time when the object was closed. */
    closedAt: 'DateTime',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the actor who created the milestone. */
    creator: 'Actor',
    /** Identifies the description of the milestone. */
    description: 'String',
    /** Identifies the due date of the milestone. */
    dueOn: 'DateTime',
    id: 'ID!',
    /** A list of issues associated with the milestone. */
    issues: [
      'IssueConnection!',
      {
        orderBy: 'IssueOrder',
        labels: '[String!]',
        states: '[IssueState!]',
        filterBy: 'IssueFilters',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Identifies the number of the milestone. */
    number: 'Int!',
    /** Indentifies the percentage complete for the milestone */
    progressPercentage: 'Float!',
    /** A list of pull requests associated with the milestone. */
    pullRequests: [
      'PullRequestConnection!',
      {
        states: '[PullRequestState!]',
        labels: '[String!]',
        headRefName: 'String',
        baseRefName: 'String',
        orderBy: 'IssueOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The repository associated with this milestone. */
    repository: 'Repository!',
    /** The HTTP path for this milestone */
    resourcePath: 'URI!',
    /** Identifies the state of the milestone. */
    state: 'MilestoneState!',
    /** Identifies the title of the milestone. */
    title: 'String!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this milestone */
    url: 'URI!',
  },

  /**
   * @name MilestoneConnection
   * @type Object
   */
  MilestoneConnection: {
    /** A list of edges. */
    edges: '[MilestoneEdge]',
    /** A list of nodes. */
    nodes: '[Milestone]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name MilestoneEdge
   * @type Object
   */
  MilestoneEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Milestone',
  },

  /**
   * @name MilestoneItem
   * @type Union
   */
  MilestoneItem: ['Issue', 'PullRequest'],

  /**
   * @name MilestoneOrder
   * @type InputObject
   */
  MilestoneOrder: {
    field: 'MilestoneOrderField!',
    direction: 'OrderDirection!',
  },

  MilestoneOrderField,

  MilestoneState,

  /**
   * @name MilestonedEvent
   * @type Object
   * @implements Node
   */
  MilestonedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the milestone title associated with the 'milestoned' event. */
    milestoneTitle: 'String!',
    /** Object referenced by event. */
    subject: 'MilestoneItem!',
  },

  /**
   * @name Minimizable
   * @type Interface
   */
  Minimizable: [
    {
      /** Returns whether or not a comment has been minimized. */
      isMinimized: 'Boolean!',
      /** Returns why the comment was minimized. */
      minimizedReason: 'String',
      /** Check if the current viewer can minimize this object. */
      viewerCanMinimize: 'Boolean!',
    },
    'CommitComment',
    'GistComment',
    'IssueComment',
    'PullRequestReviewComment',
  ],

  /**
   * @name MinimizeCommentInput
   * @type InputObject
   */
  MinimizeCommentInput: {
    subjectId: 'ID!',
    classifier: 'ReportedContentClassifiers!',
    clientMutationId: 'String',
  },

  /**
   * @name MinimizeCommentPayload
   * @type Object
   */
  MinimizeCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The comment that was minimized. */
    minimizedComment: 'Minimizable',
  },

  /**
   * @name MoveProjectCardInput
   * @type InputObject
   */
  MoveProjectCardInput: {
    cardId: 'ID!',
    columnId: 'ID!',
    afterCardId: 'ID',
    clientMutationId: 'String',
  },

  /**
   * @name MoveProjectCardPayload
   * @type Object
   */
  MoveProjectCardPayload: {
    /** The new edge of the moved card. */
    cardEdge: 'ProjectCardEdge',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name MoveProjectColumnInput
   * @type InputObject
   */
  MoveProjectColumnInput: {
    columnId: 'ID!',
    afterColumnId: 'ID',
    clientMutationId: 'String',
  },

  /**
   * @name MoveProjectColumnPayload
   * @type Object
   */
  MoveProjectColumnPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The new edge of the moved column. */
    columnEdge: 'ProjectColumnEdge',
  },

  /**
   * @name MovedColumnsInProjectEvent
   * @type Object
   * @implements Node
   */
  MovedColumnsInProjectEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
  },

  /**
   * @name Mutation
   * @type Object
   */
  Mutation: {
    /** Accepts a pending invitation for a user to become an administrator of an enterprise. */
    acceptEnterpriseAdministratorInvitation: [
      'AcceptEnterpriseAdministratorInvitationPayload',
      { input: 'AcceptEnterpriseAdministratorInvitationInput!' },
    ],
    /** Applies a suggested topic to the repository. */
    acceptTopicSuggestion: [
      'AcceptTopicSuggestionPayload',
      { input: 'AcceptTopicSuggestionInput!' },
    ],
    /** Adds assignees to an assignable object. */
    addAssigneesToAssignable: [
      'AddAssigneesToAssignablePayload',
      { input: 'AddAssigneesToAssignableInput!' },
    ],
    /** Adds a comment to an Issue or Pull Request. */
    addComment: ['AddCommentPayload', { input: 'AddCommentInput!' }],
    /** Adds labels to a labelable object. */
    addLabelsToLabelable: [
      'AddLabelsToLabelablePayload',
      { input: 'AddLabelsToLabelableInput!' },
    ],
    /** Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not** both. */
    addProjectCard: [
      'AddProjectCardPayload',
      { input: 'AddProjectCardInput!' },
    ],
    /** Adds a column to a Project. */
    addProjectColumn: [
      'AddProjectColumnPayload',
      { input: 'AddProjectColumnInput!' },
    ],
    /** Adds a review to a Pull Request. */
    addPullRequestReview: [
      'AddPullRequestReviewPayload',
      { input: 'AddPullRequestReviewInput!' },
    ],
    /** Adds a comment to a review. */
    addPullRequestReviewComment: [
      'AddPullRequestReviewCommentPayload',
      { input: 'AddPullRequestReviewCommentInput!' },
    ],
    /** Adds a new thread to a pending Pull Request Review. */
    addPullRequestReviewThread: [
      'AddPullRequestReviewThreadPayload',
      { input: 'AddPullRequestReviewThreadInput!' },
    ],
    /** Adds a reaction to a subject. */
    addReaction: ['AddReactionPayload', { input: 'AddReactionInput!' }],
    /** Adds a star to a Starrable. */
    addStar: ['AddStarPayload', { input: 'AddStarInput!' }],
    /** Marks a repository as archived. */
    archiveRepository: [
      'ArchiveRepositoryPayload',
      { input: 'ArchiveRepositoryInput!' },
    ],
    /** Cancels a pending invitation for an administrator to join an enterprise. */
    cancelEnterpriseAdminInvitation: [
      'CancelEnterpriseAdminInvitationPayload',
      { input: 'CancelEnterpriseAdminInvitationInput!' },
    ],
    /** Update your status on GitHub. */
    changeUserStatus: [
      'ChangeUserStatusPayload',
      { input: 'ChangeUserStatusInput!' },
    ],
    /** Clears all labels from a labelable object. */
    clearLabelsFromLabelable: [
      'ClearLabelsFromLabelablePayload',
      { input: 'ClearLabelsFromLabelableInput!' },
    ],
    /** Creates a new project by cloning configuration from an existing project. */
    cloneProject: ['CloneProjectPayload', { input: 'CloneProjectInput!' }],
    /** Create a new repository with the same files and directory structure as a template repository. */
    cloneTemplateRepository: [
      'CloneTemplateRepositoryPayload',
      { input: 'CloneTemplateRepositoryInput!' },
    ],
    /** Close an issue. */
    closeIssue: ['CloseIssuePayload', { input: 'CloseIssueInput!' }],
    /** Close a pull request. */
    closePullRequest: [
      'ClosePullRequestPayload',
      { input: 'ClosePullRequestInput!' },
    ],
    /** Convert a project note card to one associated with a newly created issue. */
    convertProjectCardNoteToIssue: [
      'ConvertProjectCardNoteToIssuePayload',
      { input: 'ConvertProjectCardNoteToIssueInput!' },
    ],
    /** Create a new branch protection rule */
    createBranchProtectionRule: [
      'CreateBranchProtectionRulePayload',
      { input: 'CreateBranchProtectionRuleInput!' },
    ],
    /** Create a check run. */
    createCheckRun: [
      'CreateCheckRunPayload',
      { input: 'CreateCheckRunInput!' },
    ],
    /** Create a check suite */
    createCheckSuite: [
      'CreateCheckSuitePayload',
      { input: 'CreateCheckSuiteInput!' },
    ],
    /** Creates an organization as part of an enterprise account. */
    createEnterpriseOrganization: [
      'CreateEnterpriseOrganizationPayload',
      { input: 'CreateEnterpriseOrganizationInput!' },
    ],
    /** Creates a new IP allow list entry. */
    createIpAllowListEntry: [
      'CreateIpAllowListEntryPayload',
      { input: 'CreateIpAllowListEntryInput!' },
    ],
    /** Creates a new issue. */
    createIssue: ['CreateIssuePayload', { input: 'CreateIssueInput!' }],
    /** Creates a new project. */
    createProject: ['CreateProjectPayload', { input: 'CreateProjectInput!' }],
    /** Create a new pull request */
    createPullRequest: [
      'CreatePullRequestPayload',
      { input: 'CreatePullRequestInput!' },
    ],
    /** Create a new Git Ref. */
    createRef: ['CreateRefPayload', { input: 'CreateRefInput!' }],
    /** Create a new repository. */
    createRepository: [
      'CreateRepositoryPayload',
      { input: 'CreateRepositoryInput!' },
    ],
    /** Creates a new team discussion. */
    createTeamDiscussion: [
      'CreateTeamDiscussionPayload',
      { input: 'CreateTeamDiscussionInput!' },
    ],
    /** Creates a new team discussion comment. */
    createTeamDiscussionComment: [
      'CreateTeamDiscussionCommentPayload',
      { input: 'CreateTeamDiscussionCommentInput!' },
    ],
    /** Rejects a suggested topic for the repository. */
    declineTopicSuggestion: [
      'DeclineTopicSuggestionPayload',
      { input: 'DeclineTopicSuggestionInput!' },
    ],
    /** Delete a branch protection rule */
    deleteBranchProtectionRule: [
      'DeleteBranchProtectionRulePayload',
      { input: 'DeleteBranchProtectionRuleInput!' },
    ],
    /** Deletes a deployment. */
    deleteDeployment: [
      'DeleteDeploymentPayload',
      { input: 'DeleteDeploymentInput!' },
    ],
    /** Deletes an IP allow list entry. */
    deleteIpAllowListEntry: [
      'DeleteIpAllowListEntryPayload',
      { input: 'DeleteIpAllowListEntryInput!' },
    ],
    /** Deletes an Issue object. */
    deleteIssue: ['DeleteIssuePayload', { input: 'DeleteIssueInput!' }],
    /** Deletes an IssueComment object. */
    deleteIssueComment: [
      'DeleteIssueCommentPayload',
      { input: 'DeleteIssueCommentInput!' },
    ],
    /** Deletes a project. */
    deleteProject: ['DeleteProjectPayload', { input: 'DeleteProjectInput!' }],
    /** Deletes a project card. */
    deleteProjectCard: [
      'DeleteProjectCardPayload',
      { input: 'DeleteProjectCardInput!' },
    ],
    /** Deletes a project column. */
    deleteProjectColumn: [
      'DeleteProjectColumnPayload',
      { input: 'DeleteProjectColumnInput!' },
    ],
    /** Deletes a pull request review. */
    deletePullRequestReview: [
      'DeletePullRequestReviewPayload',
      { input: 'DeletePullRequestReviewInput!' },
    ],
    /** Deletes a pull request review comment. */
    deletePullRequestReviewComment: [
      'DeletePullRequestReviewCommentPayload',
      { input: 'DeletePullRequestReviewCommentInput!' },
    ],
    /** Delete a Git Ref. */
    deleteRef: ['DeleteRefPayload', { input: 'DeleteRefInput!' }],
    /** Deletes a team discussion. */
    deleteTeamDiscussion: [
      'DeleteTeamDiscussionPayload',
      { input: 'DeleteTeamDiscussionInput!' },
    ],
    /** Deletes a team discussion comment. */
    deleteTeamDiscussionComment: [
      'DeleteTeamDiscussionCommentPayload',
      { input: 'DeleteTeamDiscussionCommentInput!' },
    ],
    /** Dismisses an approved or rejected pull request review. */
    dismissPullRequestReview: [
      'DismissPullRequestReviewPayload',
      { input: 'DismissPullRequestReviewInput!' },
    ],
    /** Follow a user. */
    followUser: ['FollowUserPayload', { input: 'FollowUserInput!' }],
    /** Invite someone to become an administrator of the enterprise. */
    inviteEnterpriseAdmin: [
      'InviteEnterpriseAdminPayload',
      { input: 'InviteEnterpriseAdminInput!' },
    ],
    /** Creates a repository link for a project. */
    linkRepositoryToProject: [
      'LinkRepositoryToProjectPayload',
      { input: 'LinkRepositoryToProjectInput!' },
    ],
    /** Lock a lockable object */
    lockLockable: ['LockLockablePayload', { input: 'LockLockableInput!' }],
    /** Mark a pull request file as viewed */
    markFileAsViewed: [
      'MarkFileAsViewedPayload',
      { input: 'MarkFileAsViewedInput!' },
    ],
    /** Marks a pull request ready for review. */
    markPullRequestReadyForReview: [
      'MarkPullRequestReadyForReviewPayload',
      { input: 'MarkPullRequestReadyForReviewInput!' },
    ],
    /** Merge a head into a branch. */
    mergeBranch: ['MergeBranchPayload', { input: 'MergeBranchInput!' }],
    /** Merge a pull request. */
    mergePullRequest: [
      'MergePullRequestPayload',
      { input: 'MergePullRequestInput!' },
    ],
    /** Minimizes a comment on an Issue, Commit, Pull Request, or Gist */
    minimizeComment: [
      'MinimizeCommentPayload',
      { input: 'MinimizeCommentInput!' },
    ],
    /** Moves a project card to another place. */
    moveProjectCard: [
      'MoveProjectCardPayload',
      { input: 'MoveProjectCardInput!' },
    ],
    /** Moves a project column to another place. */
    moveProjectColumn: [
      'MoveProjectColumnPayload',
      { input: 'MoveProjectColumnInput!' },
    ],
    /** Regenerates the identity provider recovery codes for an enterprise */
    regenerateEnterpriseIdentityProviderRecoveryCodes: [
      'RegenerateEnterpriseIdentityProviderRecoveryCodesPayload',
      { input: 'RegenerateEnterpriseIdentityProviderRecoveryCodesInput!' },
    ],
    /** Removes assignees from an assignable object. */
    removeAssigneesFromAssignable: [
      'RemoveAssigneesFromAssignablePayload',
      { input: 'RemoveAssigneesFromAssignableInput!' },
    ],
    /** Removes an administrator from the enterprise. */
    removeEnterpriseAdmin: [
      'RemoveEnterpriseAdminPayload',
      { input: 'RemoveEnterpriseAdminInput!' },
    ],
    /** Removes the identity provider from an enterprise */
    removeEnterpriseIdentityProvider: [
      'RemoveEnterpriseIdentityProviderPayload',
      { input: 'RemoveEnterpriseIdentityProviderInput!' },
    ],
    /** Removes an organization from the enterprise */
    removeEnterpriseOrganization: [
      'RemoveEnterpriseOrganizationPayload',
      { input: 'RemoveEnterpriseOrganizationInput!' },
    ],
    /** Removes labels from a Labelable object. */
    removeLabelsFromLabelable: [
      'RemoveLabelsFromLabelablePayload',
      { input: 'RemoveLabelsFromLabelableInput!' },
    ],
    /** Removes outside collaborator from all repositories in an organization. */
    removeOutsideCollaborator: [
      'RemoveOutsideCollaboratorPayload',
      { input: 'RemoveOutsideCollaboratorInput!' },
    ],
    /** Removes a reaction from a subject. */
    removeReaction: [
      'RemoveReactionPayload',
      { input: 'RemoveReactionInput!' },
    ],
    /** Removes a star from a Starrable. */
    removeStar: ['RemoveStarPayload', { input: 'RemoveStarInput!' }],
    /** Reopen a issue. */
    reopenIssue: ['ReopenIssuePayload', { input: 'ReopenIssueInput!' }],
    /** Reopen a pull request. */
    reopenPullRequest: [
      'ReopenPullRequestPayload',
      { input: 'ReopenPullRequestInput!' },
    ],
    /** Set review requests on a pull request. */
    requestReviews: [
      'RequestReviewsPayload',
      { input: 'RequestReviewsInput!' },
    ],
    /** Rerequests an existing check suite. */
    rerequestCheckSuite: [
      'RerequestCheckSuitePayload',
      { input: 'RerequestCheckSuiteInput!' },
    ],
    /** Marks a review thread as resolved. */
    resolveReviewThread: [
      'ResolveReviewThreadPayload',
      { input: 'ResolveReviewThreadInput!' },
    ],
    /** Creates or updates the identity provider for an enterprise. */
    setEnterpriseIdentityProvider: [
      'SetEnterpriseIdentityProviderPayload',
      { input: 'SetEnterpriseIdentityProviderInput!' },
    ],
    /** Submits a pending pull request review. */
    submitPullRequestReview: [
      'SubmitPullRequestReviewPayload',
      { input: 'SubmitPullRequestReviewInput!' },
    ],
    /** Transfer an issue to a different repository */
    transferIssue: ['TransferIssuePayload', { input: 'TransferIssueInput!' }],
    /** Unarchives a repository. */
    unarchiveRepository: [
      'UnarchiveRepositoryPayload',
      { input: 'UnarchiveRepositoryInput!' },
    ],
    /** Unfollow a user. */
    unfollowUser: ['UnfollowUserPayload', { input: 'UnfollowUserInput!' }],
    /** Deletes a repository link from a project. */
    unlinkRepositoryFromProject: [
      'UnlinkRepositoryFromProjectPayload',
      { input: 'UnlinkRepositoryFromProjectInput!' },
    ],
    /** Unlock a lockable object */
    unlockLockable: [
      'UnlockLockablePayload',
      { input: 'UnlockLockableInput!' },
    ],
    /** Unmark a pull request file as viewed */
    unmarkFileAsViewed: [
      'UnmarkFileAsViewedPayload',
      { input: 'UnmarkFileAsViewedInput!' },
    ],
    /** Unmark an issue as a duplicate of another issue. */
    unmarkIssueAsDuplicate: [
      'UnmarkIssueAsDuplicatePayload',
      { input: 'UnmarkIssueAsDuplicateInput!' },
    ],
    /** Unminimizes a comment on an Issue, Commit, Pull Request, or Gist */
    unminimizeComment: [
      'UnminimizeCommentPayload',
      { input: 'UnminimizeCommentInput!' },
    ],
    /** Marks a review thread as unresolved. */
    unresolveReviewThread: [
      'UnresolveReviewThreadPayload',
      { input: 'UnresolveReviewThreadInput!' },
    ],
    /** Create a new branch protection rule */
    updateBranchProtectionRule: [
      'UpdateBranchProtectionRulePayload',
      { input: 'UpdateBranchProtectionRuleInput!' },
    ],
    /** Update a check run */
    updateCheckRun: [
      'UpdateCheckRunPayload',
      { input: 'UpdateCheckRunInput!' },
    ],
    /** Modifies the settings of an existing check suite */
    updateCheckSuitePreferences: [
      'UpdateCheckSuitePreferencesPayload',
      { input: 'UpdateCheckSuitePreferencesInput!' },
    ],
    /** Sets the action execution capability setting for an enterprise. */
    updateEnterpriseActionExecutionCapabilitySetting: [
      'UpdateEnterpriseActionExecutionCapabilitySettingPayload',
      { input: 'UpdateEnterpriseActionExecutionCapabilitySettingInput!' },
    ],
    /** Updates the role of an enterprise administrator. */
    updateEnterpriseAdministratorRole: [
      'UpdateEnterpriseAdministratorRolePayload',
      { input: 'UpdateEnterpriseAdministratorRoleInput!' },
    ],
    /** Sets whether private repository forks are enabled for an enterprise. */
    updateEnterpriseAllowPrivateRepositoryForkingSetting: [
      'UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload',
      { input: 'UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!' },
    ],
    /** Sets the default repository permission for organizations in an enterprise. */
    updateEnterpriseDefaultRepositoryPermissionSetting: [
      'UpdateEnterpriseDefaultRepositoryPermissionSettingPayload',
      { input: 'UpdateEnterpriseDefaultRepositoryPermissionSettingInput!' },
    ],
    /** Sets whether organization members with admin permissions on a repository can change repository visibility. */
    updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: [
      'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload',
      {
        input:
          'UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!',
      },
    ],
    /** Sets the members can create repositories setting for an enterprise. */
    updateEnterpriseMembersCanCreateRepositoriesSetting: [
      'UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload',
      { input: 'UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!' },
    ],
    /** Sets the members can delete issues setting for an enterprise. */
    updateEnterpriseMembersCanDeleteIssuesSetting: [
      'UpdateEnterpriseMembersCanDeleteIssuesSettingPayload',
      { input: 'UpdateEnterpriseMembersCanDeleteIssuesSettingInput!' },
    ],
    /** Sets the members can delete repositories setting for an enterprise. */
    updateEnterpriseMembersCanDeleteRepositoriesSetting: [
      'UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload',
      { input: 'UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!' },
    ],
    /** Sets whether members can invite collaborators are enabled for an enterprise. */
    updateEnterpriseMembersCanInviteCollaboratorsSetting: [
      'UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload',
      { input: 'UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!' },
    ],
    /** Sets whether or not an organization admin can make purchases. */
    updateEnterpriseMembersCanMakePurchasesSetting: [
      'UpdateEnterpriseMembersCanMakePurchasesSettingPayload',
      { input: 'UpdateEnterpriseMembersCanMakePurchasesSettingInput!' },
    ],
    /** Sets the members can update protected branches setting for an enterprise. */
    updateEnterpriseMembersCanUpdateProtectedBranchesSetting: [
      'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload',
      {
        input: 'UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!',
      },
    ],
    /** Sets the members can view dependency insights for an enterprise. */
    updateEnterpriseMembersCanViewDependencyInsightsSetting: [
      'UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload',
      {
        input: 'UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!',
      },
    ],
    /** Sets whether organization projects are enabled for an enterprise. */
    updateEnterpriseOrganizationProjectsSetting: [
      'UpdateEnterpriseOrganizationProjectsSettingPayload',
      { input: 'UpdateEnterpriseOrganizationProjectsSettingInput!' },
    ],
    /** Updates an enterprise's profile. */
    updateEnterpriseProfile: [
      'UpdateEnterpriseProfilePayload',
      { input: 'UpdateEnterpriseProfileInput!' },
    ],
    /** Sets whether repository projects are enabled for a enterprise. */
    updateEnterpriseRepositoryProjectsSetting: [
      'UpdateEnterpriseRepositoryProjectsSettingPayload',
      { input: 'UpdateEnterpriseRepositoryProjectsSettingInput!' },
    ],
    /** Sets whether team discussions are enabled for an enterprise. */
    updateEnterpriseTeamDiscussionsSetting: [
      'UpdateEnterpriseTeamDiscussionsSettingPayload',
      { input: 'UpdateEnterpriseTeamDiscussionsSettingInput!' },
    ],
    /** Sets whether two factor authentication is required for all users in an enterprise. */
    updateEnterpriseTwoFactorAuthenticationRequiredSetting: [
      'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload',
      { input: 'UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!' },
    ],
    /** Sets whether an IP allow list is enabled on an owner. */
    updateIpAllowListEnabledSetting: [
      'UpdateIpAllowListEnabledSettingPayload',
      { input: 'UpdateIpAllowListEnabledSettingInput!' },
    ],
    /** Updates an IP allow list entry. */
    updateIpAllowListEntry: [
      'UpdateIpAllowListEntryPayload',
      { input: 'UpdateIpAllowListEntryInput!' },
    ],
    /** Updates an Issue. */
    updateIssue: ['UpdateIssuePayload', { input: 'UpdateIssueInput!' }],
    /** Updates an IssueComment object. */
    updateIssueComment: [
      'UpdateIssueCommentPayload',
      { input: 'UpdateIssueCommentInput!' },
    ],
    /** Updates an existing project. */
    updateProject: ['UpdateProjectPayload', { input: 'UpdateProjectInput!' }],
    /** Updates an existing project card. */
    updateProjectCard: [
      'UpdateProjectCardPayload',
      { input: 'UpdateProjectCardInput!' },
    ],
    /** Updates an existing project column. */
    updateProjectColumn: [
      'UpdateProjectColumnPayload',
      { input: 'UpdateProjectColumnInput!' },
    ],
    /** Update a pull request */
    updatePullRequest: [
      'UpdatePullRequestPayload',
      { input: 'UpdatePullRequestInput!' },
    ],
    /** Updates the body of a pull request review. */
    updatePullRequestReview: [
      'UpdatePullRequestReviewPayload',
      { input: 'UpdatePullRequestReviewInput!' },
    ],
    /** Updates a pull request review comment. */
    updatePullRequestReviewComment: [
      'UpdatePullRequestReviewCommentPayload',
      { input: 'UpdatePullRequestReviewCommentInput!' },
    ],
    /** Update a Git Ref. */
    updateRef: ['UpdateRefPayload', { input: 'UpdateRefInput!' }],
    /** Update information about a repository. */
    updateRepository: [
      'UpdateRepositoryPayload',
      { input: 'UpdateRepositoryInput!' },
    ],
    /** Updates the state for subscribable subjects. */
    updateSubscription: [
      'UpdateSubscriptionPayload',
      { input: 'UpdateSubscriptionInput!' },
    ],
    /** Updates a team discussion. */
    updateTeamDiscussion: [
      'UpdateTeamDiscussionPayload',
      { input: 'UpdateTeamDiscussionInput!' },
    ],
    /** Updates a discussion comment. */
    updateTeamDiscussionComment: [
      'UpdateTeamDiscussionCommentPayload',
      { input: 'UpdateTeamDiscussionCommentInput!' },
    ],
    /** Replaces the repository's topics with the given topics. */
    updateTopics: ['UpdateTopicsPayload', { input: 'UpdateTopicsInput!' }],
  },

  /**
   * @name Node
   * @type Interface
   */
  Node: [
    {
      /** ID of the object. */
      id: 'ID!',
    },
    'AddedToProjectEvent',
    'App',
    'AssignedEvent',
    'AutomaticBaseChangeFailedEvent',
    'AutomaticBaseChangeSucceededEvent',
    'BaseRefChangedEvent',
    'BaseRefDeletedEvent',
    'BaseRefForcePushedEvent',
    'Blob',
    'Bot',
    'BranchProtectionRule',
    'CheckRun',
    'CheckSuite',
    'ClosedEvent',
    'CodeOfConduct',
    'CommentDeletedEvent',
    'Commit',
    'CommitComment',
    'CommitCommentThread',
    'ConnectedEvent',
    'ConvertToDraftEvent',
    'ConvertedNoteToIssueEvent',
    'CrossReferencedEvent',
    'DemilestonedEvent',
    'DeployKey',
    'DeployedEvent',
    'Deployment',
    'DeploymentEnvironmentChangedEvent',
    'DeploymentStatus',
    'DisconnectedEvent',
    'Enterprise',
    'EnterpriseAdministratorInvitation',
    'EnterpriseIdentityProvider',
    'EnterpriseRepositoryInfo',
    'EnterpriseServerInstallation',
    'EnterpriseServerUserAccount',
    'EnterpriseServerUserAccountEmail',
    'EnterpriseServerUserAccountsUpload',
    'EnterpriseUserAccount',
    'ExternalIdentity',
    'Gist',
    'GistComment',
    'HeadRefDeletedEvent',
    'HeadRefForcePushedEvent',
    'HeadRefRestoredEvent',
    'IpAllowListEntry',
    'Issue',
    'IssueComment',
    'Label',
    'LabeledEvent',
    'Language',
    'License',
    'LockedEvent',
    'Mannequin',
    'MarkedAsDuplicateEvent',
    'MarketplaceCategory',
    'MarketplaceListing',
    'MembersCanDeleteReposClearAuditEntry',
    'MembersCanDeleteReposDisableAuditEntry',
    'MembersCanDeleteReposEnableAuditEntry',
    'MentionedEvent',
    'MergedEvent',
    'Milestone',
    'MilestonedEvent',
    'MovedColumnsInProjectEvent',
    'OauthApplicationCreateAuditEntry',
    'OrgAddBillingManagerAuditEntry',
    'OrgAddMemberAuditEntry',
    'OrgBlockUserAuditEntry',
    'OrgConfigDisableCollaboratorsOnlyAuditEntry',
    'OrgConfigEnableCollaboratorsOnlyAuditEntry',
    'OrgCreateAuditEntry',
    'OrgDisableOauthAppRestrictionsAuditEntry',
    'OrgDisableSamlAuditEntry',
    'OrgDisableTwoFactorRequirementAuditEntry',
    'OrgEnableOauthAppRestrictionsAuditEntry',
    'OrgEnableSamlAuditEntry',
    'OrgEnableTwoFactorRequirementAuditEntry',
    'OrgInviteMemberAuditEntry',
    'OrgInviteToBusinessAuditEntry',
    'OrgOauthAppAccessApprovedAuditEntry',
    'OrgOauthAppAccessDeniedAuditEntry',
    'OrgOauthAppAccessRequestedAuditEntry',
    'OrgRemoveBillingManagerAuditEntry',
    'OrgRemoveMemberAuditEntry',
    'OrgRemoveOutsideCollaboratorAuditEntry',
    'OrgRestoreMemberAuditEntry',
    'OrgUnblockUserAuditEntry',
    'OrgUpdateDefaultRepositoryPermissionAuditEntry',
    'OrgUpdateMemberAuditEntry',
    'OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
    'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
    'Organization',
    'OrganizationIdentityProvider',
    'OrganizationInvitation',
    'Package',
    'PackageFile',
    'PackageTag',
    'PackageVersion',
    'PinnedEvent',
    'PrivateRepositoryForkingDisableAuditEntry',
    'PrivateRepositoryForkingEnableAuditEntry',
    'Project',
    'ProjectCard',
    'ProjectColumn',
    'PublicKey',
    'PullRequest',
    'PullRequestCommit',
    'PullRequestCommitCommentThread',
    'PullRequestReview',
    'PullRequestReviewComment',
    'PullRequestReviewThread',
    'Push',
    'PushAllowance',
    'Reaction',
    'ReadyForReviewEvent',
    'Ref',
    'ReferencedEvent',
    'Release',
    'ReleaseAsset',
    'RemovedFromProjectEvent',
    'RenamedTitleEvent',
    'ReopenedEvent',
    'RepoAccessAuditEntry',
    'RepoAddMemberAuditEntry',
    'RepoAddTopicAuditEntry',
    'RepoArchivedAuditEntry',
    'RepoChangeMergeSettingAuditEntry',
    'RepoConfigDisableAnonymousGitAccessAuditEntry',
    'RepoConfigDisableCollaboratorsOnlyAuditEntry',
    'RepoConfigDisableContributorsOnlyAuditEntry',
    'RepoConfigDisableSockpuppetDisallowedAuditEntry',
    'RepoConfigEnableAnonymousGitAccessAuditEntry',
    'RepoConfigEnableCollaboratorsOnlyAuditEntry',
    'RepoConfigEnableContributorsOnlyAuditEntry',
    'RepoConfigEnableSockpuppetDisallowedAuditEntry',
    'RepoConfigLockAnonymousGitAccessAuditEntry',
    'RepoConfigUnlockAnonymousGitAccessAuditEntry',
    'RepoCreateAuditEntry',
    'RepoDestroyAuditEntry',
    'RepoRemoveMemberAuditEntry',
    'RepoRemoveTopicAuditEntry',
    'Repository',
    'RepositoryInvitation',
    'RepositoryTopic',
    'RepositoryVisibilityChangeDisableAuditEntry',
    'RepositoryVisibilityChangeEnableAuditEntry',
    'RepositoryVulnerabilityAlert',
    'ReviewDismissalAllowance',
    'ReviewDismissedEvent',
    'ReviewRequest',
    'ReviewRequestRemovedEvent',
    'ReviewRequestedEvent',
    'SavedReply',
    'SecurityAdvisory',
    'SponsorsListing',
    'SponsorsTier',
    'Sponsorship',
    'Status',
    'StatusCheckRollup',
    'StatusContext',
    'SubscribedEvent',
    'Tag',
    'Team',
    'TeamAddMemberAuditEntry',
    'TeamAddRepositoryAuditEntry',
    'TeamChangeParentTeamAuditEntry',
    'TeamDiscussion',
    'TeamDiscussionComment',
    'TeamRemoveMemberAuditEntry',
    'TeamRemoveRepositoryAuditEntry',
    'Topic',
    'TransferredEvent',
    'Tree',
    'UnassignedEvent',
    'UnlabeledEvent',
    'UnlockedEvent',
    'UnmarkedAsDuplicateEvent',
    'UnpinnedEvent',
    'UnsubscribedEvent',
    'User',
    'UserBlockedEvent',
    'UserContentEdit',
    'UserStatus',
  ],

  /**
   * @name OauthApplicationAuditEntryData
   * @type Interface
   */
  OauthApplicationAuditEntryData: [
    {
      /** The name of the OAuth Application. */
      oauthApplicationName: 'String',
      /** The HTTP path for the OAuth Application */
      oauthApplicationResourcePath: 'URI',
      /** The HTTP URL for the OAuth Application */
      oauthApplicationUrl: 'URI',
    },
    'OauthApplicationCreateAuditEntry',
    'OrgOauthAppAccessApprovedAuditEntry',
    'OrgOauthAppAccessDeniedAuditEntry',
    'OrgOauthAppAccessRequestedAuditEntry',
  ],

  /**
   * @name OauthApplicationCreateAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
   */
  OauthApplicationCreateAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The application URL of the OAuth Application. */
    applicationUrl: 'URI',
    /** The callback URL of the OAuth Application. */
    callbackUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The name of the OAuth Application. */
    oauthApplicationName: 'String',
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath: 'URI',
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl: 'URI',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The rate limit of the OAuth Application. */
    rateLimit: 'Int',
    /** The state of the OAuth Application. */
    state: 'OauthApplicationCreateAuditEntryState',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OauthApplicationCreateAuditEntryState,

  OperationType,

  OrderDirection,

  /**
   * @name OrgAddBillingManagerAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgAddBillingManagerAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The email address used to invite a billing manager for the organization. */
    invitationEmail: 'String',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgAddMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgAddMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The permission level of the member added to the organization. */
    permission: 'OrgAddMemberAuditEntryPermission',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgAddMemberAuditEntryPermission,

  /**
   * @name OrgBlockUserAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgBlockUserAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The blocked user. */
    blockedUser: 'User',
    /** The username of the blocked user. */
    blockedUserName: 'String',
    /** The HTTP path for the blocked user. */
    blockedUserResourcePath: 'URI',
    /** The HTTP URL for the blocked user. */
    blockedUserUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgConfigDisableCollaboratorsOnlyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgConfigDisableCollaboratorsOnlyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgConfigEnableCollaboratorsOnlyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgConfigEnableCollaboratorsOnlyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgCreateAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgCreateAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The billing plan for the Organization. */
    billingPlan: 'OrgCreateAuditEntryBillingPlan',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgCreateAuditEntryBillingPlan,

  /**
   * @name OrgDisableOauthAppRestrictionsAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgDisableOauthAppRestrictionsAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgDisableSamlAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgDisableSamlAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The SAML provider's digest algorithm URL. */
    digestMethodUrl: 'URI',
    id: 'ID!',
    /** The SAML provider's issuer URL. */
    issuerUrl: 'URI',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The SAML provider's signature algorithm URL. */
    signatureMethodUrl: 'URI',
    /** The SAML provider's single sign-on URL. */
    singleSignOnUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgDisableTwoFactorRequirementAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgDisableTwoFactorRequirementAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgEnableOauthAppRestrictionsAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgEnableOauthAppRestrictionsAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgEnableSamlAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgEnableSamlAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The SAML provider's digest algorithm URL. */
    digestMethodUrl: 'URI',
    id: 'ID!',
    /** The SAML provider's issuer URL. */
    issuerUrl: 'URI',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The SAML provider's signature algorithm URL. */
    signatureMethodUrl: 'URI',
    /** The SAML provider's single sign-on URL. */
    singleSignOnUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgEnableTwoFactorRequirementAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgEnableTwoFactorRequirementAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgInviteMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgInviteMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The email address of the organization invitation. */
    email: 'String',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The organization invitation. */
    organizationInvitation: 'OrganizationInvitation',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgInviteToBusinessAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
   */
  OrgInviteToBusinessAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgOauthAppAccessApprovedAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
   */
  OrgOauthAppAccessApprovedAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The name of the OAuth Application. */
    oauthApplicationName: 'String',
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath: 'URI',
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl: 'URI',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgOauthAppAccessDeniedAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
   */
  OrgOauthAppAccessDeniedAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The name of the OAuth Application. */
    oauthApplicationName: 'String',
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath: 'URI',
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl: 'URI',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgOauthAppAccessRequestedAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OauthApplicationAuditEntryData, OrganizationAuditEntryData
   */
  OrgOauthAppAccessRequestedAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The name of the OAuth Application. */
    oauthApplicationName: 'String',
    /** The HTTP path for the OAuth Application */
    oauthApplicationResourcePath: 'URI',
    /** The HTTP URL for the OAuth Application */
    oauthApplicationUrl: 'URI',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgRemoveBillingManagerAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgRemoveBillingManagerAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The reason for the billing manager being removed. */
    reason: 'OrgRemoveBillingManagerAuditEntryReason',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgRemoveBillingManagerAuditEntryReason,

  /**
   * @name OrgRemoveMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgRemoveMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The types of membership the member has with the organization. */
    membershipTypes: '[OrgRemoveMemberAuditEntryMembershipType!]',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The reason for the member being removed. */
    reason: 'OrgRemoveMemberAuditEntryReason',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgRemoveMemberAuditEntryMembershipType,

  OrgRemoveMemberAuditEntryReason,

  /**
   * @name OrgRemoveOutsideCollaboratorAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgRemoveOutsideCollaboratorAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The types of membership the outside collaborator has with the organization. */
    membershipTypes: '[OrgRemoveOutsideCollaboratorAuditEntryMembershipType!]',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The reason for the outside collaborator being removed from the Organization. */
    reason: 'OrgRemoveOutsideCollaboratorAuditEntryReason',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgRemoveOutsideCollaboratorAuditEntryMembershipType,

  OrgRemoveOutsideCollaboratorAuditEntryReason,

  /**
   * @name OrgRestoreMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgRestoreMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The number of custom email routings for the restored member. */
    restoredCustomEmailRoutingsCount: 'Int',
    /** The number of issue assignemnts for the restored member. */
    restoredIssueAssignmentsCount: 'Int',
    /** Restored organization membership objects. */
    restoredMemberships: '[OrgRestoreMemberAuditEntryMembership!]',
    /** The number of restored memberships. */
    restoredMembershipsCount: 'Int',
    /** The number of repositories of the restored member. */
    restoredRepositoriesCount: 'Int',
    /** The number of starred repositories for the restored member. */
    restoredRepositoryStarsCount: 'Int',
    /** The number of watched repositories for the restored member. */
    restoredRepositoryWatchesCount: 'Int',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgRestoreMemberAuditEntryMembership
   * @type Union
   */
  OrgRestoreMemberAuditEntryMembership: [
    'OrgRestoreMemberMembershipOrganizationAuditEntryData',
    'OrgRestoreMemberMembershipRepositoryAuditEntryData',
    'OrgRestoreMemberMembershipTeamAuditEntryData',
  ],

  /**
   * @name OrgRestoreMemberMembershipOrganizationAuditEntryData
   * @type Object
   * @implements OrganizationAuditEntryData
   */
  OrgRestoreMemberMembershipOrganizationAuditEntryData: {
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
  },

  /**
   * @name OrgRestoreMemberMembershipRepositoryAuditEntryData
   * @type Object
   * @implements RepositoryAuditEntryData
   */
  OrgRestoreMemberMembershipRepositoryAuditEntryData: {
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
  },

  /**
   * @name OrgRestoreMemberMembershipTeamAuditEntryData
   * @type Object
   * @implements TeamAuditEntryData
   */
  OrgRestoreMemberMembershipTeamAuditEntryData: {
    /** The team associated with the action */
    team: 'Team',
    /** The name of the team */
    teamName: 'String',
    /** The HTTP path for this team */
    teamResourcePath: 'URI',
    /** The HTTP URL for this team */
    teamUrl: 'URI',
  },

  /**
   * @name OrgUnblockUserAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgUnblockUserAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The user being unblocked by the organization. */
    blockedUser: 'User',
    /** The username of the blocked user. */
    blockedUserName: 'String',
    /** The HTTP path for the blocked user. */
    blockedUserResourcePath: 'URI',
    /** The HTTP URL for the blocked user. */
    blockedUserUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name OrgUpdateDefaultRepositoryPermissionAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgUpdateDefaultRepositoryPermissionAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The new default repository permission level for the organization. */
    permission: 'OrgUpdateDefaultRepositoryPermissionAuditEntryPermission',
    /** The former default repository permission level for the organization. */
    permissionWas: 'OrgUpdateDefaultRepositoryPermissionAuditEntryPermission',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgUpdateDefaultRepositoryPermissionAuditEntryPermission,

  /**
   * @name OrgUpdateMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgUpdateMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The new member permission level for the organization. */
    permission: 'OrgUpdateMemberAuditEntryPermission',
    /** The former member permission level for the organization. */
    permissionWas: 'OrgUpdateMemberAuditEntryPermission',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  OrgUpdateMemberAuditEntryPermission,

  /**
   * @name OrgUpdateMemberRepositoryCreationPermissionAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgUpdateMemberRepositoryCreationPermissionAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** Can members create repositories in the organization. */
    canCreateRepositories: 'Boolean',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The permission for visibility level of repositories for this organization. */
    visibility:
      'OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility',
  },

  OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility,

  /**
   * @name OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData
   */
  OrgUpdateMemberRepositoryInvitationPermissionAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** Can outside collaborators be invited to repositories in the organization. */
    canInviteOutsideCollaboratorsToRepositories: 'Boolean',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name Organization
   * @type Object
   * @implements Node, Actor, PackageOwner, ProjectOwner, RepositoryOwner, UniformResourceLocatable, MemberStatusable, ProfileOwner, Sponsorable
   */
  Organization: {
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: ['Boolean!', { type: 'PinnableItemType' }],
    /** Audit log entries of the organization */
    auditLog: [
      'OrganizationAuditEntryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        query: 'String',
        orderBy: 'AuditLogOrder',
      },
    ],
    /** A URL pointing to the organization's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The organization's public profile description. */
    description: 'String',
    /** The organization's public profile description rendered to HTML. */
    descriptionHTML: 'String',
    /** The organization's public email. */
    email: 'String',
    id: 'ID!',
    /** The setting value for whether the organization has an IP allow list enabled. */
    ipAllowListEnabledSetting: 'IpAllowListEnabledSettingValue!',
    /** The IP addresses that are allowed to access resources owned by the organization. */
    ipAllowListEntries: [
      'IpAllowListEntryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'IpAllowListEntryOrder',
      },
    ],
    /** Whether the organization has verified its profile email and website, always false on Enterprise. */
    isVerified: 'Boolean!',
    /** Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity. */
    itemShowcase: 'ProfileItemShowcase!',
    /** The organization's public profile location. */
    location: 'String',
    /** The organization's login name. */
    login: 'String!',
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: [
      'UserStatusConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'UserStatusOrder',
      },
    ],
    /** A list of users who are members of this organization. */
    membersWithRole: [
      'OrganizationMemberConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The organization's public profile name. */
    name: 'String',
    /** The HTTP path creating a new team */
    newTeamResourcePath: 'URI!',
    /** The HTTP URL creating a new team */
    newTeamUrl: 'URI!',
    /** The billing email for the organization. */
    organizationBillingEmail: 'String',
    /** A list of packages under the owner. */
    packages: [
      'PackageConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        names: '[String]',
        repositoryId: 'ID',
        packageType: 'PackageType',
        orderBy: 'PackageOrder',
      },
    ],
    /** A list of users who have been invited to join this organization. */
    pendingMembers: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: [
      'PinnableItemConnection!',
      {
        types: '[PinnableItemType!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: [
      'PinnableItemConnection!',
      {
        types: '[PinnableItemType!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: 'Int!',
    /** Find project by number. */
    project: ['Project', { number: 'Int!' }],
    /** A list of projects under the owner. */
    projects: [
      'ProjectConnection!',
      {
        orderBy: 'ProjectOrder',
        search: 'String',
        states: '[ProjectState!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The HTTP path listing organization's projects */
    projectsResourcePath: 'URI!',
    /** The HTTP URL listing organization's projects */
    projectsUrl: 'URI!',
    /** A list of repositories that the user owns. */
    repositories: [
      'RepositoryConnection!',
      {
        privacy: 'RepositoryPrivacy',
        orderBy: 'RepositoryOrder',
        affiliations: '[RepositoryAffiliation]',
        ownerAffiliations: '[RepositoryAffiliation]',
        isLocked: 'Boolean',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        isFork: 'Boolean',
      },
    ],
    /** Find Repository. */
    repository: ['Repository', { name: 'String!' }],
    /** When true the organization requires all members, billing managers, and outside collaborators to enable two-factor authentication. */
    requiresTwoFactorAuthentication: 'Boolean',
    /** The HTTP path for this organization. */
    resourcePath: 'URI!',
    /** The Organization's SAML identity providers */
    samlIdentityProvider: 'OrganizationIdentityProvider',
    /** The GitHub Sponsors listing for this user. */
    sponsorsListing: 'SponsorsListing',
    /** This object's sponsorships as the maintainer. */
    sponsorshipsAsMaintainer: [
      'SponsorshipConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        includePrivate: 'Boolean',
        orderBy: 'SponsorshipOrder',
      },
    ],
    /** This object's sponsorships as the sponsor. */
    sponsorshipsAsSponsor: [
      'SponsorshipConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'SponsorshipOrder',
      },
    ],
    /** Find an organization's team by its slug. */
    team: ['Team', { slug: 'String!' }],
    /** A list of teams in this organization. */
    teams: [
      'TeamConnection!',
      {
        privacy: 'TeamPrivacy',
        role: 'TeamRole',
        query: 'String',
        userLogins: '[String!]',
        orderBy: 'TeamOrder',
        ldapMapped: 'Boolean',
        rootTeamsOnly: 'Boolean',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The HTTP path listing organization's teams */
    teamsResourcePath: 'URI!',
    /** The HTTP URL listing organization's teams */
    teamsUrl: 'URI!',
    /** The organization's Twitter username. */
    twitterUsername: 'String',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this organization. */
    url: 'URI!',
    /** Organization is adminable by the viewer. */
    viewerCanAdminister: 'Boolean!',
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: 'Boolean!',
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: 'Boolean!',
    /** Viewer can create repositories on this organization */
    viewerCanCreateRepositories: 'Boolean!',
    /** Viewer can create teams on this organization. */
    viewerCanCreateTeams: 'Boolean!',
    /** Viewer is an active member of this organization. */
    viewerIsAMember: 'Boolean!',
    /** The organization's public profile URL. */
    websiteUrl: 'URI',
  },

  /**
   * @name OrganizationAuditEntry
   * @type Union
   */
  OrganizationAuditEntry: [
    'MembersCanDeleteReposClearAuditEntry',
    'MembersCanDeleteReposDisableAuditEntry',
    'MembersCanDeleteReposEnableAuditEntry',
    'OauthApplicationCreateAuditEntry',
    'OrgAddBillingManagerAuditEntry',
    'OrgAddMemberAuditEntry',
    'OrgBlockUserAuditEntry',
    'OrgConfigDisableCollaboratorsOnlyAuditEntry',
    'OrgConfigEnableCollaboratorsOnlyAuditEntry',
    'OrgCreateAuditEntry',
    'OrgDisableOauthAppRestrictionsAuditEntry',
    'OrgDisableSamlAuditEntry',
    'OrgDisableTwoFactorRequirementAuditEntry',
    'OrgEnableOauthAppRestrictionsAuditEntry',
    'OrgEnableSamlAuditEntry',
    'OrgEnableTwoFactorRequirementAuditEntry',
    'OrgInviteMemberAuditEntry',
    'OrgInviteToBusinessAuditEntry',
    'OrgOauthAppAccessApprovedAuditEntry',
    'OrgOauthAppAccessDeniedAuditEntry',
    'OrgOauthAppAccessRequestedAuditEntry',
    'OrgRemoveBillingManagerAuditEntry',
    'OrgRemoveMemberAuditEntry',
    'OrgRemoveOutsideCollaboratorAuditEntry',
    'OrgRestoreMemberAuditEntry',
    'OrgUnblockUserAuditEntry',
    'OrgUpdateDefaultRepositoryPermissionAuditEntry',
    'OrgUpdateMemberAuditEntry',
    'OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
    'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
    'PrivateRepositoryForkingDisableAuditEntry',
    'PrivateRepositoryForkingEnableAuditEntry',
    'RepoAccessAuditEntry',
    'RepoAddMemberAuditEntry',
    'RepoAddTopicAuditEntry',
    'RepoArchivedAuditEntry',
    'RepoChangeMergeSettingAuditEntry',
    'RepoConfigDisableAnonymousGitAccessAuditEntry',
    'RepoConfigDisableCollaboratorsOnlyAuditEntry',
    'RepoConfigDisableContributorsOnlyAuditEntry',
    'RepoConfigDisableSockpuppetDisallowedAuditEntry',
    'RepoConfigEnableAnonymousGitAccessAuditEntry',
    'RepoConfigEnableCollaboratorsOnlyAuditEntry',
    'RepoConfigEnableContributorsOnlyAuditEntry',
    'RepoConfigEnableSockpuppetDisallowedAuditEntry',
    'RepoConfigLockAnonymousGitAccessAuditEntry',
    'RepoConfigUnlockAnonymousGitAccessAuditEntry',
    'RepoCreateAuditEntry',
    'RepoDestroyAuditEntry',
    'RepoRemoveMemberAuditEntry',
    'RepoRemoveTopicAuditEntry',
    'RepositoryVisibilityChangeDisableAuditEntry',
    'RepositoryVisibilityChangeEnableAuditEntry',
    'TeamAddMemberAuditEntry',
    'TeamAddRepositoryAuditEntry',
    'TeamChangeParentTeamAuditEntry',
    'TeamRemoveMemberAuditEntry',
    'TeamRemoveRepositoryAuditEntry',
  ],

  /**
   * @name OrganizationAuditEntryConnection
   * @type Object
   */
  OrganizationAuditEntryConnection: {
    /** A list of edges. */
    edges: '[OrganizationAuditEntryEdge]',
    /** A list of nodes. */
    nodes: '[OrganizationAuditEntry]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name OrganizationAuditEntryData
   * @type Interface
   */
  OrganizationAuditEntryData: [
    {
      /** The Organization associated with the Audit Entry. */
      organization: 'Organization',
      /** The name of the Organization. */
      organizationName: 'String',
      /** The HTTP path for the organization */
      organizationResourcePath: 'URI',
      /** The HTTP URL for the organization */
      organizationUrl: 'URI',
    },
    'MembersCanDeleteReposClearAuditEntry',
    'MembersCanDeleteReposDisableAuditEntry',
    'MembersCanDeleteReposEnableAuditEntry',
    'OauthApplicationCreateAuditEntry',
    'OrgAddBillingManagerAuditEntry',
    'OrgAddMemberAuditEntry',
    'OrgBlockUserAuditEntry',
    'OrgConfigDisableCollaboratorsOnlyAuditEntry',
    'OrgConfigEnableCollaboratorsOnlyAuditEntry',
    'OrgCreateAuditEntry',
    'OrgDisableOauthAppRestrictionsAuditEntry',
    'OrgDisableSamlAuditEntry',
    'OrgDisableTwoFactorRequirementAuditEntry',
    'OrgEnableOauthAppRestrictionsAuditEntry',
    'OrgEnableSamlAuditEntry',
    'OrgEnableTwoFactorRequirementAuditEntry',
    'OrgInviteMemberAuditEntry',
    'OrgInviteToBusinessAuditEntry',
    'OrgOauthAppAccessApprovedAuditEntry',
    'OrgOauthAppAccessDeniedAuditEntry',
    'OrgOauthAppAccessRequestedAuditEntry',
    'OrgRemoveBillingManagerAuditEntry',
    'OrgRemoveMemberAuditEntry',
    'OrgRemoveOutsideCollaboratorAuditEntry',
    'OrgRestoreMemberAuditEntry',
    'OrgRestoreMemberMembershipOrganizationAuditEntryData',
    'OrgUnblockUserAuditEntry',
    'OrgUpdateDefaultRepositoryPermissionAuditEntry',
    'OrgUpdateMemberAuditEntry',
    'OrgUpdateMemberRepositoryCreationPermissionAuditEntry',
    'OrgUpdateMemberRepositoryInvitationPermissionAuditEntry',
    'PrivateRepositoryForkingDisableAuditEntry',
    'PrivateRepositoryForkingEnableAuditEntry',
    'RepoAccessAuditEntry',
    'RepoAddMemberAuditEntry',
    'RepoAddTopicAuditEntry',
    'RepoArchivedAuditEntry',
    'RepoChangeMergeSettingAuditEntry',
    'RepoConfigDisableAnonymousGitAccessAuditEntry',
    'RepoConfigDisableCollaboratorsOnlyAuditEntry',
    'RepoConfigDisableContributorsOnlyAuditEntry',
    'RepoConfigDisableSockpuppetDisallowedAuditEntry',
    'RepoConfigEnableAnonymousGitAccessAuditEntry',
    'RepoConfigEnableCollaboratorsOnlyAuditEntry',
    'RepoConfigEnableContributorsOnlyAuditEntry',
    'RepoConfigEnableSockpuppetDisallowedAuditEntry',
    'RepoConfigLockAnonymousGitAccessAuditEntry',
    'RepoConfigUnlockAnonymousGitAccessAuditEntry',
    'RepoCreateAuditEntry',
    'RepoDestroyAuditEntry',
    'RepoRemoveMemberAuditEntry',
    'RepoRemoveTopicAuditEntry',
    'RepositoryVisibilityChangeDisableAuditEntry',
    'RepositoryVisibilityChangeEnableAuditEntry',
    'TeamAddMemberAuditEntry',
    'TeamAddRepositoryAuditEntry',
    'TeamChangeParentTeamAuditEntry',
    'TeamRemoveMemberAuditEntry',
    'TeamRemoveRepositoryAuditEntry',
  ],

  /**
   * @name OrganizationAuditEntryEdge
   * @type Object
   */
  OrganizationAuditEntryEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'OrganizationAuditEntry',
  },

  /**
   * @name OrganizationConnection
   * @type Object
   */
  OrganizationConnection: {
    /** A list of edges. */
    edges: '[OrganizationEdge]',
    /** A list of nodes. */
    nodes: '[Organization]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name OrganizationEdge
   * @type Object
   */
  OrganizationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Organization',
  },

  /**
   * @name OrganizationIdentityProvider
   * @type Object
   * @implements Node
   */
  OrganizationIdentityProvider: {
    /** The digest algorithm used to sign SAML requests for the Identity Provider. */
    digestMethod: 'URI',
    /** External Identities provisioned by this Identity Provider */
    externalIdentities: [
      'ExternalIdentityConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    id: 'ID!',
    /** The x509 certificate used by the Identity Provder to sign assertions and responses. */
    idpCertificate: 'X509Certificate',
    /** The Issuer Entity ID for the SAML Identity Provider */
    issuer: 'String',
    /** Organization this Identity Provider belongs to */
    organization: 'Organization',
    /** The signature algorithm used to sign SAML requests for the Identity Provider. */
    signatureMethod: 'URI',
    /** The URL endpoint for the Identity Provider's SAML SSO. */
    ssoUrl: 'URI',
  },

  /**
   * @name OrganizationInvitation
   * @type Object
   * @implements Node
   */
  OrganizationInvitation: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The email address of the user invited to the organization. */
    email: 'String',
    id: 'ID!',
    /** The type of invitation that was sent (e.g. email, user). */
    invitationType: 'OrganizationInvitationType!',
    /** The user who was invited to the organization. */
    invitee: 'User',
    /** The user who created the invitation. */
    inviter: 'User!',
    /** The organization the invite is for */
    organization: 'Organization!',
    /** The user's pending role in the organization (e.g. member, owner). */
    role: 'OrganizationInvitationRole!',
  },

  /**
   * @name OrganizationInvitationConnection
   * @type Object
   */
  OrganizationInvitationConnection: {
    /** A list of edges. */
    edges: '[OrganizationInvitationEdge]',
    /** A list of nodes. */
    nodes: '[OrganizationInvitation]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name OrganizationInvitationEdge
   * @type Object
   */
  OrganizationInvitationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'OrganizationInvitation',
  },

  OrganizationInvitationRole,

  OrganizationInvitationType,

  /**
   * @name OrganizationMemberConnection
   * @type Object
   */
  OrganizationMemberConnection: {
    /** A list of edges. */
    edges: '[OrganizationMemberEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name OrganizationMemberEdge
   * @type Object
   */
  OrganizationMemberEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
    hasTwoFactorEnabled: 'Boolean',
    /** The item at the end of the edge. */
    node: 'User',
    /** The role this user has in the organization. */
    role: 'OrganizationMemberRole',
  },

  OrganizationMemberRole,

  OrganizationMembersCanCreateRepositoriesSettingValue,

  /**
   * @name OrganizationOrder
   * @type InputObject
   */
  OrganizationOrder: {
    field: 'OrganizationOrderField!',
    direction: 'OrderDirection!',
  },

  OrganizationOrderField,

  /**
   * @name OrganizationTeamsHovercardContext
   * @type Object
   * @implements HovercardContext
   */
  OrganizationTeamsHovercardContext: {
    /** A string describing this context */
    message: 'String!',
    /** An octicon to accompany this context */
    octicon: 'String!',
    /** Teams in this organization the user is a member of that are relevant */
    relevantTeams: [
      'TeamConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The path for the full team list for this user */
    teamsResourcePath: 'URI!',
    /** The URL for the full team list for this user */
    teamsUrl: 'URI!',
    /** The total number of teams the user is on in the organization */
    totalTeamCount: 'Int!',
  },

  /**
   * @name OrganizationsHovercardContext
   * @type Object
   * @implements HovercardContext
   */
  OrganizationsHovercardContext: {
    /** A string describing this context */
    message: 'String!',
    /** An octicon to accompany this context */
    octicon: 'String!',
    /** Organizations this user is a member of that are relevant */
    relevantOrganizations: [
      'OrganizationConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The total number of organizations this user is in */
    totalOrganizationCount: 'Int!',
  },

  /**
   * @name Package
   * @type Object
   * @implements Node
   */
  Package: {
    id: 'ID!',
    /** Find the latest version for the package. */
    latestVersion: 'PackageVersion',
    /** Identifies the name of the package. */
    name: 'String!',
    /** Identifies the type of the package. */
    packageType: 'PackageType!',
    /** The repository this package belongs to. */
    repository: 'Repository',
    /** Statistics about package activity. */
    statistics: 'PackageStatistics',
    /** Find package version by version string. */
    version: ['PackageVersion', { version: 'String!' }],
    /** list of versions for this package */
    versions: [
      'PackageVersionConnection!',
      {
        orderBy: 'PackageVersionOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
  },

  /**
   * @name PackageConnection
   * @type Object
   */
  PackageConnection: {
    /** A list of edges. */
    edges: '[PackageEdge]',
    /** A list of nodes. */
    nodes: '[Package]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PackageEdge
   * @type Object
   */
  PackageEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Package',
  },

  /**
   * @name PackageFile
   * @type Object
   * @implements Node
   */
  PackageFile: {
    id: 'ID!',
    /** MD5 hash of the file. */
    md5: 'String',
    /** Name of the file. */
    name: 'String!',
    /** The package version this file belongs to. */
    packageVersion: 'PackageVersion',
    /** SHA1 hash of the file. */
    sha1: 'String',
    /** SHA256 hash of the file. */
    sha256: 'String',
    /** Size of the file in bytes. */
    size: 'Int',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** URL to download the asset. */
    url: 'URI',
  },

  /**
   * @name PackageFileConnection
   * @type Object
   */
  PackageFileConnection: {
    /** A list of edges. */
    edges: '[PackageFileEdge]',
    /** A list of nodes. */
    nodes: '[PackageFile]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PackageFileEdge
   * @type Object
   */
  PackageFileEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PackageFile',
  },

  /**
   * @name PackageFileOrder
   * @type InputObject
   */
  PackageFileOrder: {
    field: 'PackageFileOrderField',
    direction: 'OrderDirection',
  },

  PackageFileOrderField,

  /**
   * @name PackageOrder
   * @type InputObject
   */
  PackageOrder: {
    field: 'PackageOrderField',
    direction: 'OrderDirection',
  },

  PackageOrderField,

  /**
   * @name PackageOwner
   * @type Interface
   */
  PackageOwner: [
    {
      id: 'ID!',
      /** A list of packages under the owner. */
      packages: [
        'PackageConnection!',
        {
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          names: '[String]',
          repositoryId: 'ID',
          packageType: 'PackageType',
          orderBy: 'PackageOrder',
        },
      ],
    },
    'Organization',
    'Repository',
    'User',
  ],

  /**
   * @name PackageStatistics
   * @type Object
   */
  PackageStatistics: {
    /** Number of times the package was downloaded since it was created. */
    downloadsTotalCount: 'Int!',
  },

  /**
   * @name PackageTag
   * @type Object
   * @implements Node
   */
  PackageTag: {
    id: 'ID!',
    /** Identifies the tag name of the version. */
    name: 'String!',
    /** Version that the tag is associated with. */
    version: 'PackageVersion',
  },

  PackageType,

  /**
   * @name PackageVersion
   * @type Object
   * @implements Node
   */
  PackageVersion: {
    /** List of files associated with this package version */
    files: [
      'PackageFileConnection!',
      {
        orderBy: 'PackageFileOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    id: 'ID!',
    /** The package associated with this version. */
    package: 'Package',
    /** The platform this version was built for. */
    platform: 'String',
    /** Whether or not this version is a pre-release. */
    preRelease: 'Boolean!',
    /** The README of this package version. */
    readme: 'String',
    /** The release associated with this package version. */
    release: 'Release',
    /** Statistics about package activity. */
    statistics: 'PackageVersionStatistics',
    /** The package version summary. */
    summary: 'String',
    /** The version string. */
    version: 'String!',
  },

  /**
   * @name PackageVersionConnection
   * @type Object
   */
  PackageVersionConnection: {
    /** A list of edges. */
    edges: '[PackageVersionEdge]',
    /** A list of nodes. */
    nodes: '[PackageVersion]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PackageVersionEdge
   * @type Object
   */
  PackageVersionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PackageVersion',
  },

  /**
   * @name PackageVersionOrder
   * @type InputObject
   */
  PackageVersionOrder: {
    field: 'PackageVersionOrderField',
    direction: 'OrderDirection',
  },

  PackageVersionOrderField,

  /**
   * @name PackageVersionStatistics
   * @type Object
   */
  PackageVersionStatistics: {
    /** Number of times the package was downloaded since it was created. */
    downloadsTotalCount: 'Int!',
  },

  /**
   * @name PageInfo
   * @type Object
   */
  PageInfo: {
    /** When paginating forwards, the cursor to continue. */
    endCursor: 'String',
    /** When paginating forwards, are there more items? */
    hasNextPage: 'Boolean!',
    /** When paginating backwards, are there more items? */
    hasPreviousPage: 'Boolean!',
    /** When paginating backwards, the cursor to continue. */
    startCursor: 'String',
  },

  /**
   * @name PermissionGranter
   * @type Union
   */
  PermissionGranter: ['Organization', 'Repository', 'Team'],

  /**
   * @name PermissionSource
   * @type Object
   */
  PermissionSource: {
    /** The organization the repository belongs to. */
    organization: 'Organization!',
    /** The level of access this source has granted to the user. */
    permission: 'DefaultRepositoryPermissionField!',
    /** The source of this permission. */
    source: 'PermissionGranter!',
  },

  /**
   * @name PinnableItem
   * @type Union
   */
  PinnableItem: ['Gist', 'Repository'],

  /**
   * @name PinnableItemConnection
   * @type Object
   */
  PinnableItemConnection: {
    /** A list of edges. */
    edges: '[PinnableItemEdge]',
    /** A list of nodes. */
    nodes: '[PinnableItem]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PinnableItemEdge
   * @type Object
   */
  PinnableItemEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PinnableItem',
  },

  PinnableItemType,

  /**
   * @name PinnedEvent
   * @type Object
   * @implements Node
   */
  PinnedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the issue associated with the event. */
    issue: 'Issue!',
  },

  /**
   * @name PrivateRepositoryForkingDisableAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  PrivateRepositoryForkingDisableAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name PrivateRepositoryForkingEnableAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  PrivateRepositoryForkingEnableAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name ProfileItemShowcase
   * @type Object
   */
  ProfileItemShowcase: {
    /** Whether or not the owner has pinned any repositories or gists. */
    hasPinnedItems: 'Boolean!',
    /** The repositories and gists in the showcase. If the profile owner has any pinned items, those will be returned. Otherwise, the profile owner's popular repositories will be returned. */
    items: [
      'PinnableItemConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
  },

  /**
   * @name ProfileOwner
   * @type Interface
   */
  ProfileOwner: [
    {
      /** Determine if this repository owner has any items that can be pinned to their profile. */
      anyPinnableItems: ['Boolean!', { type: 'PinnableItemType' }],
      /** The public profile email. */
      email: 'String',
      id: 'ID!',
      /** Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity. */
      itemShowcase: 'ProfileItemShowcase!',
      /** The public profile location. */
      location: 'String',
      /** The username used to login. */
      login: 'String!',
      /** The public profile name. */
      name: 'String',
      /** A list of repositories and gists this profile owner can pin to their profile. */
      pinnableItems: [
        'PinnableItemConnection!',
        {
          types: '[PinnableItemType!]',
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
        },
      ],
      /** A list of repositories and gists this profile owner has pinned to their profile */
      pinnedItems: [
        'PinnableItemConnection!',
        {
          types: '[PinnableItemType!]',
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
        },
      ],
      /** Returns how many more items this profile owner can pin to their profile. */
      pinnedItemsRemaining: 'Int!',
      /** Can the viewer pin repositories and gists to the profile? */
      viewerCanChangePinnedItems: 'Boolean!',
      /** The public profile website URL. */
      websiteUrl: 'URI',
    },
    'Organization',
    'User',
  ],

  /**
   * @name Project
   * @type Object
   * @implements Node, Closable, Updatable
   */
  Project: {
    /** The project's description body. */
    body: 'String',
    /** The projects description body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** `true` if the object is closed (definition of closed may depend on type) */
    closed: 'Boolean!',
    /** Identifies the date and time when the object was closed. */
    closedAt: 'DateTime',
    /** List of columns in the project */
    columns: [
      'ProjectColumnConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The actor who originally created the project. */
    creator: 'Actor',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** The project's name. */
    name: 'String!',
    /** The project's number. */
    number: 'Int!',
    /** The project's owner. Currently limited to repositories, organizations, and users. */
    owner: 'ProjectOwner!',
    /** List of pending cards in this project */
    pendingCards: [
      'ProjectCardConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        archivedStates: '[ProjectCardArchivedState]',
      },
    ],
    /** Project progress details. */
    progress: 'ProjectProgress!',
    /** The HTTP path for this project */
    resourcePath: 'URI!',
    /** Whether the project is open or closed. */
    state: 'ProjectState!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this project */
    url: 'URI!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
  },

  /**
   * @name ProjectCard
   * @type Object
   * @implements Node
   */
  ProjectCard: {
    /**
     * The project column this card is associated under. A card may only belong to one
     * project column at a time. The column field will be null if the card is created
     * in a pending state and has yet to be associated with a column. Once cards are
     * associated with a column, they will not become pending in the future.
     *
     */
    column: 'ProjectColumn',
    /** The card content item */
    content: 'ProjectCardItem',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The actor who created this card */
    creator: 'Actor',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** Whether the card is archived */
    isArchived: 'Boolean!',
    /** The card note */
    note: 'String',
    /** The project that contains this card. */
    project: 'Project!',
    /** The HTTP path for this card */
    resourcePath: 'URI!',
    /** The state of ProjectCard */
    state: 'ProjectCardState',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this card */
    url: 'URI!',
  },

  ProjectCardArchivedState,

  /**
   * @name ProjectCardConnection
   * @type Object
   */
  ProjectCardConnection: {
    /** A list of edges. */
    edges: '[ProjectCardEdge]',
    /** A list of nodes. */
    nodes: '[ProjectCard]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ProjectCardEdge
   * @type Object
   */
  ProjectCardEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'ProjectCard',
  },

  /**
   * @name ProjectCardItem
   * @type Union
   */
  ProjectCardItem: ['Issue', 'PullRequest'],

  ProjectCardState,

  /**
   * @name ProjectColumn
   * @type Object
   * @implements Node
   */
  ProjectColumn: {
    /** List of cards in the column */
    cards: [
      'ProjectCardConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        archivedStates: '[ProjectCardArchivedState]',
      },
    ],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** The project column's name. */
    name: 'String!',
    /** The project that contains this column. */
    project: 'Project!',
    /** The semantic purpose of the column */
    purpose: 'ProjectColumnPurpose',
    /** The HTTP path for this project column */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this project column */
    url: 'URI!',
  },

  /**
   * @name ProjectColumnConnection
   * @type Object
   */
  ProjectColumnConnection: {
    /** A list of edges. */
    edges: '[ProjectColumnEdge]',
    /** A list of nodes. */
    nodes: '[ProjectColumn]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ProjectColumnEdge
   * @type Object
   */
  ProjectColumnEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'ProjectColumn',
  },

  ProjectColumnPurpose,

  /**
   * @name ProjectConnection
   * @type Object
   */
  ProjectConnection: {
    /** A list of edges. */
    edges: '[ProjectEdge]',
    /** A list of nodes. */
    nodes: '[Project]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ProjectEdge
   * @type Object
   */
  ProjectEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Project',
  },

  /**
   * @name ProjectOrder
   * @type InputObject
   */
  ProjectOrder: {
    field: 'ProjectOrderField!',
    direction: 'OrderDirection!',
  },

  ProjectOrderField,

  /**
   * @name ProjectOwner
   * @type Interface
   */
  ProjectOwner: [
    {
      id: 'ID!',
      /** Find project by number. */
      project: ['Project', { number: 'Int!' }],
      /** A list of projects under the owner. */
      projects: [
        'ProjectConnection!',
        {
          orderBy: 'ProjectOrder',
          search: 'String',
          states: '[ProjectState!]',
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
        },
      ],
      /** The HTTP path listing owners projects */
      projectsResourcePath: 'URI!',
      /** The HTTP URL listing owners projects */
      projectsUrl: 'URI!',
      /** Can the current viewer create new projects on this owner. */
      viewerCanCreateProjects: 'Boolean!',
    },
    'Organization',
    'Repository',
    'User',
  ],

  /**
   * @name ProjectProgress
   * @type Object
   */
  ProjectProgress: {
    /** The number of done cards. */
    doneCount: 'Int!',
    /** The percentage of done cards. */
    donePercentage: 'Float!',
    /** Whether progress tracking is enabled and cards with purpose exist for this project */
    enabled: 'Boolean!',
    /** The number of in-progress cards. */
    inProgressCount: 'Int!',
    /** The percentage of in-progress cards. */
    inProgressPercentage: 'Float!',
    /** The number of to do cards. */
    todoCount: 'Int!',
    /** The percentage of to do cards. */
    todoPercentage: 'Float!',
  },

  ProjectState,

  ProjectTemplate,

  /**
   * @name PublicKey
   * @type Object
   * @implements Node
   */
  PublicKey: {
    /** The last time this authorization was used to perform an action. Values will be null for keys not owned by the user. */
    accessedAt: 'DateTime',
    /** Identifies the date and time when the key was created. Keys created before March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user. */
    createdAt: 'DateTime',
    /** The fingerprint for this PublicKey. */
    fingerprint: 'String!',
    id: 'ID!',
    /** Whether this PublicKey is read-only or not. Values will be null for keys not owned by the user. */
    isReadOnly: 'Boolean',
    /** The public key string. */
    key: 'String!',
    /** Identifies the date and time when the key was updated. Keys created before March 5th, 2014 may have inaccurate values. Values will be null for keys not owned by the user. */
    updatedAt: 'DateTime',
  },

  /**
   * @name PublicKeyConnection
   * @type Object
   */
  PublicKeyConnection: {
    /** A list of edges. */
    edges: '[PublicKeyEdge]',
    /** A list of nodes. */
    nodes: '[PublicKey]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PublicKeyEdge
   * @type Object
   */
  PublicKeyEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PublicKey',
  },

  /**
   * @name PullRequest
   * @type Object
   * @implements Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable
   */
  PullRequest: {
    /** Reason that the conversation was locked. */
    activeLockReason: 'LockReason',
    /** The number of additions in this pull request. */
    additions: 'Int!',
    /** A list of Users assigned to this object. */
    assignees: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the subject of the comment. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** Identifies the base Ref associated with the pull request. */
    baseRef: 'Ref',
    /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
    baseRefName: 'String!',
    /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
    baseRefOid: 'GitObjectID!',
    /** The repository associated with this pull request's base Ref. */
    baseRepository: 'Repository',
    /** The body as Markdown. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body rendered to text. */
    bodyText: 'String!',
    /** The number of changed files in this pull request. */
    changedFiles: 'Int!',
    /** The HTTP path for the checks of this pull request. */
    checksResourcePath: 'URI!',
    /** The HTTP URL for the checks of this pull request. */
    checksUrl: 'URI!',
    /** `true` if the pull request is closed */
    closed: 'Boolean!',
    /** Identifies the date and time when the object was closed. */
    closedAt: 'DateTime',
    /** A list of comments associated with the pull request. */
    comments: [
      'IssueCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of commits present in this pull request's head branch not present in the base branch. */
    commits: [
      'PullRequestCommitConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The number of deletions in this pull request. */
    deletions: 'Int!',
    /** The actor who edited this pull request's body. */
    editor: 'Actor',
    /** Lists the files changed within this pull request. */
    files: [
      'PullRequestChangedFileConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies the head Ref associated with the pull request. */
    headRef: 'Ref',
    /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
    headRefName: 'String!',
    /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
    headRefOid: 'GitObjectID!',
    /** The repository associated with this pull request's head Ref. */
    headRepository: 'Repository',
    /** The owner of the repository associated with this pull request's head Ref. */
    headRepositoryOwner: 'RepositoryOwner',
    /** The hovercard information for this issue */
    hovercard: ['Hovercard!', { includeNotificationContexts: 'Boolean' }],
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** The head and base repositories are different. */
    isCrossRepository: 'Boolean!',
    /** Identifies if the pull request is a draft. */
    isDraft: 'Boolean!',
    /** Is this pull request read by the viewer */
    isReadByViewer: 'Boolean',
    /** A list of labels associated with the object. */
    labels: [
      'LabelConnection',
      {
        orderBy: 'LabelOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** A list of latest reviews per user associated with the pull request. */
    latestOpinionatedReviews: [
      'PullRequestReviewConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        writersOnly: 'Boolean',
      },
    ],
    /** A list of latest reviews per user associated with the pull request that are not also pending review. */
    latestReviews: [
      'PullRequestReviewConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** `true` if the pull request is locked */
    locked: 'Boolean!',
    /** Indicates whether maintainers can modify the pull request. */
    maintainerCanModify: 'Boolean!',
    /** The commit that was created when this pull request was merged. */
    mergeCommit: 'Commit',
    /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
    mergeable: 'MergeableState!',
    /** Whether or not the pull request was merged. */
    merged: 'Boolean!',
    /** The date and time that the pull request was merged. */
    mergedAt: 'DateTime',
    /** The actor who merged the pull request. */
    mergedBy: 'Actor',
    /** Identifies the milestone associated with the pull request. */
    milestone: 'Milestone',
    /** Identifies the pull request number. */
    number: 'Int!',
    /** A list of Users that are participating in the Pull Request conversation. */
    participants: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The permalink to the pull request. */
    permalink: 'URI!',
    /** The commit that GitHub automatically generated to test if this pull request could be merged. This field will not return a value if the pull request is merged, or if the test merge commit is still being generated. See the `mergeable` field for more details on the mergeability of the pull request. */
    potentialMergeCommit: 'Commit',
    /** List of project cards associated with this pull request. */
    projectCards: [
      'ProjectCardConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        archivedStates: '[ProjectCardArchivedState]',
      },
    ],
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The repository associated with this node. */
    repository: 'Repository!',
    /** The HTTP path for this pull request. */
    resourcePath: 'URI!',
    /** The HTTP path for reverting this pull request. */
    revertResourcePath: 'URI!',
    /** The HTTP URL for reverting this pull request. */
    revertUrl: 'URI!',
    /** The current status of this pull request with respect to code review. */
    reviewDecision: 'PullRequestReviewDecision',
    /** A list of review requests associated with the pull request. */
    reviewRequests: [
      'ReviewRequestConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The list of all review threads for this pull request. */
    reviewThreads: [
      'PullRequestReviewThreadConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of reviews associated with the pull request. */
    reviews: [
      'PullRequestReviewConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        states: '[PullRequestReviewState!]',
        author: 'String',
      },
    ],
    /** Identifies the state of the pull request. */
    state: 'PullRequestState!',
    /** A list of reviewer suggestions based on commit history and past review comments. */
    suggestedReviewers: '[SuggestedReviewer]!',
    /**
     * @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2020-10-01 UTC.
     * A list of events, comments, commits, etc. associated with the pull request.
     */
    timeline: [
      'PullRequestTimelineConnection!',
      {
        since: 'DateTime',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of events, comments, commits, etc. associated with the pull request. */
    timelineItems: [
      'PullRequestTimelineItemsConnection!',
      {
        since: 'DateTime',
        skip: 'Int',
        itemTypes: '[PullRequestTimelineItemsItemType!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Identifies the pull request title. */
    title: 'String!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this pull request. */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Whether or not the viewer can apply suggestion. */
    viewerCanApplySuggestion: 'Boolean!',
    /** Check if the viewer can restore the deleted head ref. */
    viewerCanDeleteHeadRef: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
    /** The merge body text for the viewer and method. */
    viewerMergeBodyText: ['String!', { mergeType: 'PullRequestMergeMethod' }],
    /** The merge headline text for the viewer and method. */
    viewerMergeHeadlineText: [
      'String!',
      { mergeType: 'PullRequestMergeMethod' },
    ],
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription: 'SubscriptionState',
  },

  /**
   * @name PullRequestChangedFile
   * @type Object
   */
  PullRequestChangedFile: {
    /** The number of additions to the file. */
    additions: 'Int!',
    /** The number of deletions to the file. */
    deletions: 'Int!',
    /** The path of the file. */
    path: 'String!',
    /** The state of the file for the viewer. */
    viewerViewedState: 'FileViewedState!',
  },

  /**
   * @name PullRequestChangedFileConnection
   * @type Object
   */
  PullRequestChangedFileConnection: {
    /** A list of edges. */
    edges: '[PullRequestChangedFileEdge]',
    /** A list of nodes. */
    nodes: '[PullRequestChangedFile]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestChangedFileEdge
   * @type Object
   */
  PullRequestChangedFileEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestChangedFile',
  },

  /**
   * @name PullRequestCommit
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  PullRequestCommit: {
    /** The Git commit object */
    commit: 'Commit!',
    id: 'ID!',
    /** The pull request this commit belongs to */
    pullRequest: 'PullRequest!',
    /** The HTTP path for this pull request commit */
    resourcePath: 'URI!',
    /** The HTTP URL for this pull request commit */
    url: 'URI!',
  },

  /**
   * @name PullRequestCommitCommentThread
   * @type Object
   * @implements Node, RepositoryNode
   */
  PullRequestCommitCommentThread: {
    /** The comments that exist in this thread. */
    comments: [
      'CommitCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The commit the comments were made on. */
    commit: 'Commit!',
    id: 'ID!',
    /** The file the comments were made on. */
    path: 'String',
    /** The position in the diff for the commit that the comment was made on. */
    position: 'Int',
    /** The pull request this commit comment thread belongs to */
    pullRequest: 'PullRequest!',
    /** The repository associated with this node. */
    repository: 'Repository!',
  },

  /**
   * @name PullRequestCommitConnection
   * @type Object
   */
  PullRequestCommitConnection: {
    /** A list of edges. */
    edges: '[PullRequestCommitEdge]',
    /** A list of nodes. */
    nodes: '[PullRequestCommit]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestCommitEdge
   * @type Object
   */
  PullRequestCommitEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestCommit',
  },

  /**
   * @name PullRequestConnection
   * @type Object
   */
  PullRequestConnection: {
    /** A list of edges. */
    edges: '[PullRequestEdge]',
    /** A list of nodes. */
    nodes: '[PullRequest]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestContributionsByRepository
   * @type Object
   */
  PullRequestContributionsByRepository: {
    /** The pull request contributions. */
    contributions: [
      'CreatedPullRequestContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'ContributionOrder',
      },
    ],
    /** The repository in which the pull requests were opened. */
    repository: 'Repository!',
  },

  /**
   * @name PullRequestEdge
   * @type Object
   */
  PullRequestEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequest',
  },

  PullRequestMergeMethod,

  /**
   * @name PullRequestOrder
   * @type InputObject
   */
  PullRequestOrder: {
    field: 'PullRequestOrderField!',
    direction: 'OrderDirection!',
  },

  PullRequestOrderField,

  /**
   * @name PullRequestReview
   * @type Object
   * @implements Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode
   */
  PullRequestReview: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the subject of the comment. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** Indicates whether the author of this review has push access to the repository. */
    authorCanPushToRepository: 'Boolean!',
    /** Identifies the pull request review body. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body of this review rendered as plain text. */
    bodyText: 'String!',
    /** A list of review comments for the current pull request review. */
    comments: [
      'PullRequestReviewCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies the commit associated with this pull request review. */
    commit: 'Commit',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The actor who edited the comment. */
    editor: 'Actor',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** A list of teams that this review was made on behalf of. */
    onBehalfOf: [
      'TeamConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** Identifies the pull request associated with this pull request review. */
    pullRequest: 'PullRequest!',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The repository associated with this node. */
    repository: 'Repository!',
    /** The HTTP path permalink for this PullRequestReview. */
    resourcePath: 'URI!',
    /** Identifies the current state of the pull request review. */
    state: 'PullRequestReviewState!',
    /** Identifies when the Pull Request Review was submitted */
    submittedAt: 'DateTime',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL permalink for this PullRequestReview. */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
  },

  /**
   * @name PullRequestReviewComment
   * @type Object
   * @implements Node, Comment, Deletable, Minimizable, Updatable, UpdatableComment, Reactable, RepositoryNode
   */
  PullRequestReviewComment: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the subject of the comment. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** The comment body of this review comment. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The comment body of this review comment rendered as plain text. */
    bodyText: 'String!',
    /** Identifies the commit associated with the comment. */
    commit: 'Commit',
    /** Identifies when the comment was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The diff hunk to which the comment applies. */
    diffHunk: 'String!',
    /** Identifies when the comment was created in a draft state. */
    draftedAt: 'DateTime!',
    /** The actor who edited the comment. */
    editor: 'Actor',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** Returns whether or not a comment has been minimized. */
    isMinimized: 'Boolean!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** Returns why the comment was minimized. */
    minimizedReason: 'String',
    /** Identifies the original commit associated with the comment. */
    originalCommit: 'Commit',
    /** The original line index in the diff to which the comment applies. */
    originalPosition: 'Int!',
    /** Identifies when the comment body is outdated */
    outdated: 'Boolean!',
    /** The path to which the comment applies. */
    path: 'String!',
    /** The line index in the diff to which the comment applies. */
    position: 'Int',
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** The pull request associated with this review comment. */
    pullRequest: 'PullRequest!',
    /** The pull request review associated with this review comment. */
    pullRequestReview: 'PullRequestReview',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The comment this is a reply to. */
    replyTo: 'PullRequestReviewComment',
    /** The repository associated with this node. */
    repository: 'Repository!',
    /** The HTTP path permalink for this review comment. */
    resourcePath: 'URI!',
    /** Identifies the state of the comment. */
    state: 'PullRequestReviewCommentState!',
    /** Identifies when the comment was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL permalink for this review comment. */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Check if the current viewer can minimize this object. */
    viewerCanMinimize: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
  },

  /**
   * @name PullRequestReviewCommentConnection
   * @type Object
   */
  PullRequestReviewCommentConnection: {
    /** A list of edges. */
    edges: '[PullRequestReviewCommentEdge]',
    /** A list of nodes. */
    nodes: '[PullRequestReviewComment]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestReviewCommentEdge
   * @type Object
   */
  PullRequestReviewCommentEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestReviewComment',
  },

  PullRequestReviewCommentState,

  /**
   * @name PullRequestReviewConnection
   * @type Object
   */
  PullRequestReviewConnection: {
    /** A list of edges. */
    edges: '[PullRequestReviewEdge]',
    /** A list of nodes. */
    nodes: '[PullRequestReview]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestReviewContributionsByRepository
   * @type Object
   */
  PullRequestReviewContributionsByRepository: {
    /** The pull request review contributions. */
    contributions: [
      'CreatedPullRequestReviewContributionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'ContributionOrder',
      },
    ],
    /** The repository in which the pull request reviews were made. */
    repository: 'Repository!',
  },

  PullRequestReviewDecision,

  /**
   * @name PullRequestReviewEdge
   * @type Object
   */
  PullRequestReviewEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestReview',
  },

  PullRequestReviewEvent,

  PullRequestReviewState,

  /**
   * @name PullRequestReviewThread
   * @type Object
   * @implements Node
   */
  PullRequestReviewThread: {
    /** A list of pull request comments associated with the thread. */
    comments: [
      'PullRequestReviewCommentConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        skip: 'Int',
      },
    ],
    /** The side of the diff on which this thread was placed. */
    diffSide: 'DiffSide!',
    id: 'ID!',
    /** Whether or not the thread has been collapsed (outdated or resolved) */
    isCollapsed: 'Boolean!',
    /** Indicates whether this thread was outdated by newer changes. */
    isOutdated: 'Boolean!',
    /** Whether this thread has been resolved */
    isResolved: 'Boolean!',
    /** The line in the file to which this thread refers */
    line: 'Int',
    /** The original line in the file to which this thread refers. */
    originalLine: 'Int',
    /** The original start line in the file to which this thread refers (multi-line only). */
    originalStartLine: 'Int',
    /** Identifies the file path of this thread. */
    path: 'String!',
    /** Identifies the pull request associated with this thread. */
    pullRequest: 'PullRequest!',
    /** Identifies the repository associated with this thread. */
    repository: 'Repository!',
    /** The user who resolved this thread */
    resolvedBy: 'User',
    /** The side of the diff that the first line of the thread starts on (multi-line only) */
    startDiffSide: 'DiffSide',
    /** The start line in the file to which this thread refers (multi-line only) */
    startLine: 'Int',
    /** Indicates whether the current viewer can reply to this thread. */
    viewerCanReply: 'Boolean!',
    /** Whether or not the viewer can resolve this thread */
    viewerCanResolve: 'Boolean!',
    /** Whether or not the viewer can unresolve this thread */
    viewerCanUnresolve: 'Boolean!',
  },

  /**
   * @name PullRequestReviewThreadConnection
   * @type Object
   */
  PullRequestReviewThreadConnection: {
    /** A list of edges. */
    edges: '[PullRequestReviewThreadEdge]',
    /** A list of nodes. */
    nodes: '[PullRequestReviewThread]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestReviewThreadEdge
   * @type Object
   */
  PullRequestReviewThreadEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestReviewThread',
  },

  /**
   * @name PullRequestRevisionMarker
   * @type Object
   */
  PullRequestRevisionMarker: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The last commit the viewer has seen. */
    lastSeenCommit: 'Commit!',
    /** The pull request to which the marker belongs. */
    pullRequest: 'PullRequest!',
  },

  PullRequestState,

  /**
   * @name PullRequestTimelineConnection
   * @type Object
   */
  PullRequestTimelineConnection: {
    /** A list of edges. */
    edges: '[PullRequestTimelineItemEdge]',
    /** A list of nodes. */
    nodes: '[PullRequestTimelineItem]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PullRequestTimelineItem
   * @type Union
   */
  PullRequestTimelineItem: [
    'AssignedEvent',
    'BaseRefDeletedEvent',
    'BaseRefForcePushedEvent',
    'ClosedEvent',
    'Commit',
    'CommitCommentThread',
    'CrossReferencedEvent',
    'DemilestonedEvent',
    'DeployedEvent',
    'DeploymentEnvironmentChangedEvent',
    'HeadRefDeletedEvent',
    'HeadRefForcePushedEvent',
    'HeadRefRestoredEvent',
    'IssueComment',
    'LabeledEvent',
    'LockedEvent',
    'MergedEvent',
    'MilestonedEvent',
    'PullRequestReview',
    'PullRequestReviewComment',
    'PullRequestReviewThread',
    'ReferencedEvent',
    'RenamedTitleEvent',
    'ReopenedEvent',
    'ReviewDismissedEvent',
    'ReviewRequestRemovedEvent',
    'ReviewRequestedEvent',
    'SubscribedEvent',
    'UnassignedEvent',
    'UnlabeledEvent',
    'UnlockedEvent',
    'UnsubscribedEvent',
    'UserBlockedEvent',
  ],

  /**
   * @name PullRequestTimelineItemEdge
   * @type Object
   */
  PullRequestTimelineItemEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestTimelineItem',
  },

  /**
   * @name PullRequestTimelineItems
   * @type Union
   */
  PullRequestTimelineItems: [
    'AddedToProjectEvent',
    'AssignedEvent',
    'AutomaticBaseChangeFailedEvent',
    'AutomaticBaseChangeSucceededEvent',
    'BaseRefChangedEvent',
    'BaseRefDeletedEvent',
    'BaseRefForcePushedEvent',
    'ClosedEvent',
    'CommentDeletedEvent',
    'ConnectedEvent',
    'ConvertToDraftEvent',
    'ConvertedNoteToIssueEvent',
    'CrossReferencedEvent',
    'DemilestonedEvent',
    'DeployedEvent',
    'DeploymentEnvironmentChangedEvent',
    'DisconnectedEvent',
    'HeadRefDeletedEvent',
    'HeadRefForcePushedEvent',
    'HeadRefRestoredEvent',
    'IssueComment',
    'LabeledEvent',
    'LockedEvent',
    'MarkedAsDuplicateEvent',
    'MentionedEvent',
    'MergedEvent',
    'MilestonedEvent',
    'MovedColumnsInProjectEvent',
    'PinnedEvent',
    'PullRequestCommit',
    'PullRequestCommitCommentThread',
    'PullRequestReview',
    'PullRequestReviewThread',
    'PullRequestRevisionMarker',
    'ReadyForReviewEvent',
    'ReferencedEvent',
    'RemovedFromProjectEvent',
    'RenamedTitleEvent',
    'ReopenedEvent',
    'ReviewDismissedEvent',
    'ReviewRequestRemovedEvent',
    'ReviewRequestedEvent',
    'SubscribedEvent',
    'TransferredEvent',
    'UnassignedEvent',
    'UnlabeledEvent',
    'UnlockedEvent',
    'UnmarkedAsDuplicateEvent',
    'UnpinnedEvent',
    'UnsubscribedEvent',
    'UserBlockedEvent',
  ],

  /**
   * @name PullRequestTimelineItemsConnection
   * @type Object
   */
  PullRequestTimelineItemsConnection: {
    /** A list of edges. */
    edges: '[PullRequestTimelineItemsEdge]',
    /** Identifies the count of items after applying `before` and `after` filters. */
    filteredCount: 'Int!',
    /** A list of nodes. */
    nodes: '[PullRequestTimelineItems]',
    /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
    pageCount: 'Int!',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
    /** Identifies the date and time when the timeline was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name PullRequestTimelineItemsEdge
   * @type Object
   */
  PullRequestTimelineItemsEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PullRequestTimelineItems',
  },

  PullRequestTimelineItemsItemType,

  PullRequestUpdateState,

  /**
   * @name Push
   * @type Object
   * @implements Node
   */
  Push: {
    id: 'ID!',
    /** The SHA after the push */
    nextSha: 'GitObjectID',
    /** The permalink for this push. */
    permalink: 'URI!',
    /** The SHA before the push */
    previousSha: 'GitObjectID',
    /** The user who pushed */
    pusher: 'User!',
    /** The repository that was pushed to */
    repository: 'Repository!',
  },

  /**
   * @name PushAllowance
   * @type Object
   * @implements Node
   */
  PushAllowance: {
    /** The actor that can push. */
    actor: 'PushAllowanceActor',
    /** Identifies the branch protection rule associated with the allowed user or team. */
    branchProtectionRule: 'BranchProtectionRule',
    id: 'ID!',
  },

  /**
   * @name PushAllowanceActor
   * @type Union
   */
  PushAllowanceActor: ['App', 'Team', 'User'],

  /**
   * @name PushAllowanceConnection
   * @type Object
   */
  PushAllowanceConnection: {
    /** A list of edges. */
    edges: '[PushAllowanceEdge]',
    /** A list of nodes. */
    nodes: '[PushAllowance]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name PushAllowanceEdge
   * @type Object
   */
  PushAllowanceEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'PushAllowance',
  },

  /**
   * @name Query
   * @type Object
   */
  Query: {
    /** Look up a code of conduct by its key */
    codeOfConduct: ['CodeOfConduct', { key: 'String!' }],
    /** Look up a code of conduct by its key */
    codesOfConduct: '[CodeOfConduct]',
    /** Look up an enterprise by URL slug. */
    enterprise: ['Enterprise', { slug: 'String!', invitationToken: 'String' }],
    /** Look up a pending enterprise administrator invitation by invitee, enterprise and role. */
    enterpriseAdministratorInvitation: [
      'EnterpriseAdministratorInvitation',
      {
        userLogin: 'String!',
        enterpriseSlug: 'String!',
        role: 'EnterpriseAdministratorRole!',
      },
    ],
    /** Look up a pending enterprise administrator invitation by invitation token. */
    enterpriseAdministratorInvitationByToken: [
      'EnterpriseAdministratorInvitation',
      { invitationToken: 'String!' },
    ],
    /** Look up an open source license by its key */
    license: ['License', { key: 'String!' }],
    /** Return a list of known open source licenses */
    licenses: '[License]!',
    /** Get alphabetically sorted list of Marketplace categories */
    marketplaceCategories: [
      '[MarketplaceCategory!]!',
      {
        includeCategories: '[String!]',
        excludeEmpty: 'Boolean',
        excludeSubcategories: 'Boolean',
      },
    ],
    /** Look up a Marketplace category by its slug. */
    marketplaceCategory: [
      'MarketplaceCategory',
      { slug: 'String!', useTopicAliases: 'Boolean' },
    ],
    /** Look up a single Marketplace listing */
    marketplaceListing: ['MarketplaceListing', { slug: 'String!' }],
    /** Look up Marketplace listings */
    marketplaceListings: [
      'MarketplaceListingConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        categorySlug: 'String',
        useTopicAliases: 'Boolean',
        viewerCanAdmin: 'Boolean',
        adminId: 'ID',
        organizationId: 'ID',
        allStates: 'Boolean',
        slugs: '[String]',
        primaryCategoryOnly: 'Boolean',
        withFreeTrialsOnly: 'Boolean',
      },
    ],
    /** Return information about the GitHub instance */
    meta: 'GitHubMetadata!',
    /** Fetches an object given its ID. */
    node: ['Node', { id: 'ID!' }],
    /** Lookup nodes by a list of IDs. */
    nodes: ['[Node]!', { ids: '[ID!]!' }],
    /** Lookup a organization by login. */
    organization: ['Organization', { login: 'String!' }],
    /** The client's rate limit information. */
    rateLimit: ['RateLimit', { dryRun: 'Boolean' }],
    /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */
    relay: 'Query!',
    /** Lookup a given repository by the owner and repository name. */
    repository: ['Repository', { owner: 'String!', name: 'String!' }],
    /** Lookup a repository owner (ie. either a User or an Organization) by login. */
    repositoryOwner: ['RepositoryOwner', { login: 'String!' }],
    /** Lookup resource by a URL. */
    resource: ['UniformResourceLocatable', { url: 'URI!' }],
    /** Perform a search across resources. */
    search: [
      'SearchResultItemConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        query: 'String!',
        type: 'SearchType!',
      },
    ],
    /** GitHub Security Advisories */
    securityAdvisories: [
      'SecurityAdvisoryConnection!',
      {
        orderBy: 'SecurityAdvisoryOrder',
        identifier: 'SecurityAdvisoryIdentifierFilter',
        publishedSince: 'DateTime',
        updatedSince: 'DateTime',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Fetch a Security Advisory by its GHSA ID */
    securityAdvisory: ['SecurityAdvisory', { ghsaId: 'String!' }],
    /** Software Vulnerabilities documented by GitHub Security Advisories */
    securityVulnerabilities: [
      'SecurityVulnerabilityConnection!',
      {
        orderBy: 'SecurityVulnerabilityOrder',
        ecosystem: 'SecurityAdvisoryEcosystem',
        package: 'String',
        severities: '[SecurityAdvisorySeverity!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /**
     * @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC.
     * Look up a single Sponsors Listing
     */
    sponsorsListing: ['SponsorsListing', { slug: 'String!' }],
    /** Look up a topic by name. */
    topic: ['Topic', { name: 'String!' }],
    /** Lookup a user by login. */
    user: ['User', { login: 'String!' }],
    /** The currently authenticated user. */
    viewer: 'User!',
  },

  /**
   * @name RateLimit
   * @type Object
   */
  RateLimit: {
    /** The point cost for the current query counting against the rate limit. */
    cost: 'Int!',
    /** The maximum number of points the client is permitted to consume in a 60 minute window. */
    limit: 'Int!',
    /** The maximum number of nodes this query may return */
    nodeCount: 'Int!',
    /** The number of points remaining in the current rate limit window. */
    remaining: 'Int!',
    /** The time at which the current rate limit window resets in UTC epoch seconds. */
    resetAt: 'DateTime!',
    /** The number of points used in the current rate limit window. */
    used: 'Int!',
  },

  /**
   * @name Reactable
   * @type Interface
   */
  Reactable: [
    {
      /** Identifies the primary key from the database. */
      databaseId: 'Int',
      id: 'ID!',
      /** A list of reactions grouped by content left on the subject. */
      reactionGroups: '[ReactionGroup!]',
      /** A list of Reactions left on the Issue. */
      reactions: [
        'ReactionConnection!',
        {
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          content: 'ReactionContent',
          orderBy: 'ReactionOrder',
        },
      ],
      /** Can user react to this subject */
      viewerCanReact: 'Boolean!',
    },
    'CommitComment',
    'Issue',
    'IssueComment',
    'PullRequest',
    'PullRequestReview',
    'PullRequestReviewComment',
    'TeamDiscussion',
    'TeamDiscussionComment',
  ],

  /**
   * @name ReactingUserConnection
   * @type Object
   */
  ReactingUserConnection: {
    /** A list of edges. */
    edges: '[ReactingUserEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ReactingUserEdge
   * @type Object
   */
  ReactingUserEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    node: 'User!',
    /** The moment when the user made the reaction. */
    reactedAt: 'DateTime!',
  },

  /**
   * @name Reaction
   * @type Object
   * @implements Node
   */
  Reaction: {
    /** Identifies the emoji reaction. */
    content: 'ReactionContent!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** The reactable piece of content */
    reactable: 'Reactable!',
    /** Identifies the user who created this reaction. */
    user: 'User',
  },

  /**
   * @name ReactionConnection
   * @type Object
   */
  ReactionConnection: {
    /** A list of edges. */
    edges: '[ReactionEdge]',
    /** A list of nodes. */
    nodes: '[Reaction]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
    /** Whether or not the authenticated user has left a reaction on the subject. */
    viewerHasReacted: 'Boolean!',
  },

  ReactionContent,

  /**
   * @name ReactionEdge
   * @type Object
   */
  ReactionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Reaction',
  },

  /**
   * @name ReactionGroup
   * @type Object
   */
  ReactionGroup: {
    /** Identifies the emoji reaction. */
    content: 'ReactionContent!',
    /** Identifies when the reaction was created. */
    createdAt: 'DateTime',
    /** The subject that was reacted to. */
    subject: 'Reactable!',
    /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
    users: [
      'ReactingUserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Whether or not the authenticated user has left a reaction on the subject. */
    viewerHasReacted: 'Boolean!',
  },

  /**
   * @name ReactionOrder
   * @type InputObject
   */
  ReactionOrder: {
    field: 'ReactionOrderField!',
    direction: 'OrderDirection!',
  },

  ReactionOrderField,

  /**
   * @name ReadyForReviewEvent
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  ReadyForReviewEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** The HTTP path for this ready for review event. */
    resourcePath: 'URI!',
    /** The HTTP URL for this ready for review event. */
    url: 'URI!',
  },

  /**
   * @name Ref
   * @type Object
   * @implements Node
   */
  Ref: {
    /** A list of pull requests with this ref as the head ref. */
    associatedPullRequests: [
      'PullRequestConnection!',
      {
        states: '[PullRequestState!]',
        labels: '[String!]',
        headRefName: 'String',
        baseRefName: 'String',
        orderBy: 'IssueOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Branch protection rules for this ref */
    branchProtectionRule: 'BranchProtectionRule',
    id: 'ID!',
    /** The ref name. */
    name: 'String!',
    /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
    prefix: 'String!',
    /** Branch protection rules that are viewable by non-admins */
    refUpdateRule: 'RefUpdateRule',
    /** The repository the ref belongs to. */
    repository: 'Repository!',
    /** The object the ref points to. Returns null when object does not exist. */
    target: 'GitObject',
  },

  /**
   * @name RefConnection
   * @type Object
   */
  RefConnection: {
    /** A list of edges. */
    edges: '[RefEdge]',
    /** A list of nodes. */
    nodes: '[Ref]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name RefEdge
   * @type Object
   */
  RefEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Ref',
  },

  /**
   * @name RefOrder
   * @type InputObject
   */
  RefOrder: {
    field: 'RefOrderField!',
    direction: 'OrderDirection!',
  },

  RefOrderField,

  /**
   * @name RefUpdateRule
   * @type Object
   */
  RefUpdateRule: {
    /** Can this branch be deleted. */
    allowsDeletions: 'Boolean!',
    /** Are force pushes allowed on this branch. */
    allowsForcePushes: 'Boolean!',
    /** Identifies the protection rule pattern. */
    pattern: 'String!',
    /** Number of approving reviews required to update matching branches. */
    requiredApprovingReviewCount: 'Int',
    /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
    requiredStatusCheckContexts: '[String]',
    /** Are merge commits prohibited from being pushed to this branch. */
    requiresLinearHistory: 'Boolean!',
    /** Are commits required to be signed. */
    requiresSignatures: 'Boolean!',
    /** Can the viewer push to the branch */
    viewerCanPush: 'Boolean!',
  },

  /**
   * @name ReferencedEvent
   * @type Object
   * @implements Node
   */
  ReferencedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the commit associated with the 'referenced' event. */
    commit: 'Commit',
    /** Identifies the repository associated with the 'referenced' event. */
    commitRepository: 'Repository!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Reference originated in a different repository. */
    isCrossRepository: 'Boolean!',
    /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
    isDirectReference: 'Boolean!',
    /** Object referenced by event. */
    subject: 'ReferencedSubject!',
  },

  /**
   * @name ReferencedSubject
   * @type Union
   */
  ReferencedSubject: ['Issue', 'PullRequest'],

  /**
   * @name RegenerateEnterpriseIdentityProviderRecoveryCodesInput
   * @type InputObject
   */
  RegenerateEnterpriseIdentityProviderRecoveryCodesInput: {
    enterpriseId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name RegenerateEnterpriseIdentityProviderRecoveryCodesPayload
   * @type Object
   */
  RegenerateEnterpriseIdentityProviderRecoveryCodesPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The identity provider for the enterprise. */
    identityProvider: 'EnterpriseIdentityProvider',
  },

  /**
   * @name Release
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  Release: {
    /** The author of the release */
    author: 'User',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The description of the release. */
    description: 'String',
    /** The description of this release rendered to HTML. */
    descriptionHTML: 'HTML',
    id: 'ID!',
    /** Whether or not the release is a draft */
    isDraft: 'Boolean!',
    /** Whether or not the release is a prerelease */
    isPrerelease: 'Boolean!',
    /** The title of the release. */
    name: 'String',
    /** Identifies the date and time when the release was created. */
    publishedAt: 'DateTime',
    /** List of releases assets which are dependent on this release. */
    releaseAssets: [
      'ReleaseAssetConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        name: 'String',
      },
    ],
    /** The HTTP path for this issue */
    resourcePath: 'URI!',
    /** A description of the release, rendered to HTML without any links in it. */
    shortDescriptionHTML: ['HTML', { limit: 'Int' }],
    /** The Git tag the release points to */
    tag: 'Ref',
    /** The name of the release's Git tag */
    tagName: 'String!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this issue */
    url: 'URI!',
  },

  /**
   * @name ReleaseAsset
   * @type Object
   * @implements Node
   */
  ReleaseAsset: {
    /** The asset's content-type */
    contentType: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The number of times this asset was downloaded */
    downloadCount: 'Int!',
    /** Identifies the URL where you can download the release asset via the browser. */
    downloadUrl: 'URI!',
    id: 'ID!',
    /** Identifies the title of the release asset. */
    name: 'String!',
    /** Release that the asset is associated with */
    release: 'Release',
    /** The size (in bytes) of the asset */
    size: 'Int!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The user that performed the upload */
    uploadedBy: 'User!',
    /** Identifies the URL of the release asset. */
    url: 'URI!',
  },

  /**
   * @name ReleaseAssetConnection
   * @type Object
   */
  ReleaseAssetConnection: {
    /** A list of edges. */
    edges: '[ReleaseAssetEdge]',
    /** A list of nodes. */
    nodes: '[ReleaseAsset]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ReleaseAssetEdge
   * @type Object
   */
  ReleaseAssetEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'ReleaseAsset',
  },

  /**
   * @name ReleaseConnection
   * @type Object
   */
  ReleaseConnection: {
    /** A list of edges. */
    edges: '[ReleaseEdge]',
    /** A list of nodes. */
    nodes: '[Release]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ReleaseEdge
   * @type Object
   */
  ReleaseEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Release',
  },

  /**
   * @name ReleaseOrder
   * @type InputObject
   */
  ReleaseOrder: {
    field: 'ReleaseOrderField!',
    direction: 'OrderDirection!',
  },

  ReleaseOrderField,

  /**
   * @name RemoveAssigneesFromAssignableInput
   * @type InputObject
   */
  RemoveAssigneesFromAssignableInput: {
    assignableId: 'ID!',
    assigneeIds: '[ID!]!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveAssigneesFromAssignablePayload
   * @type Object
   */
  RemoveAssigneesFromAssignablePayload: {
    /** The item that was unassigned. */
    assignable: 'Assignable',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name RemoveEnterpriseAdminInput
   * @type InputObject
   */
  RemoveEnterpriseAdminInput: {
    enterpriseId: 'ID!',
    login: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveEnterpriseAdminPayload
   * @type Object
   */
  RemoveEnterpriseAdminPayload: {
    /** The user who was removed as an administrator. */
    admin: 'User',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated enterprise. */
    enterprise: 'Enterprise',
    /** A message confirming the result of removing an administrator. */
    message: 'String',
    /** The viewer performing the mutation. */
    viewer: 'User',
  },

  /**
   * @name RemoveEnterpriseIdentityProviderInput
   * @type InputObject
   */
  RemoveEnterpriseIdentityProviderInput: {
    enterpriseId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveEnterpriseIdentityProviderPayload
   * @type Object
   */
  RemoveEnterpriseIdentityProviderPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The identity provider that was removed from the enterprise. */
    identityProvider: 'EnterpriseIdentityProvider',
  },

  /**
   * @name RemoveEnterpriseOrganizationInput
   * @type InputObject
   */
  RemoveEnterpriseOrganizationInput: {
    enterpriseId: 'ID!',
    organizationId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveEnterpriseOrganizationPayload
   * @type Object
   */
  RemoveEnterpriseOrganizationPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated enterprise. */
    enterprise: 'Enterprise',
    /** The organization that was removed from the enterprise. */
    organization: 'Organization',
    /** The viewer performing the mutation. */
    viewer: 'User',
  },

  /**
   * @name RemoveLabelsFromLabelableInput
   * @type InputObject
   */
  RemoveLabelsFromLabelableInput: {
    labelableId: 'ID!',
    labelIds: '[ID!]!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveLabelsFromLabelablePayload
   * @type Object
   */
  RemoveLabelsFromLabelablePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The Labelable the labels were removed from. */
    labelable: 'Labelable',
  },

  /**
   * @name RemoveOutsideCollaboratorInput
   * @type InputObject
   */
  RemoveOutsideCollaboratorInput: {
    userId: 'ID!',
    organizationId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveOutsideCollaboratorPayload
   * @type Object
   */
  RemoveOutsideCollaboratorPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The user that was removed as an outside collaborator. */
    removedUser: 'User',
  },

  /**
   * @name RemoveReactionInput
   * @type InputObject
   */
  RemoveReactionInput: {
    subjectId: 'ID!',
    content: 'ReactionContent!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveReactionPayload
   * @type Object
   */
  RemoveReactionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The reaction object. */
    reaction: 'Reaction',
    /** The reactable subject. */
    subject: 'Reactable',
  },

  /**
   * @name RemoveStarInput
   * @type InputObject
   */
  RemoveStarInput: {
    starrableId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name RemoveStarPayload
   * @type Object
   */
  RemoveStarPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The starrable. */
    starrable: 'Starrable',
  },

  /**
   * @name RemovedFromProjectEvent
   * @type Object
   * @implements Node
   */
  RemovedFromProjectEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
  },

  /**
   * @name RenamedTitleEvent
   * @type Object
   * @implements Node
   */
  RenamedTitleEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the current title of the issue or pull request. */
    currentTitle: 'String!',
    id: 'ID!',
    /** Identifies the previous title of the issue or pull request. */
    previousTitle: 'String!',
    /** Subject that was renamed. */
    subject: 'RenamedTitleSubject!',
  },

  /**
   * @name RenamedTitleSubject
   * @type Union
   */
  RenamedTitleSubject: ['Issue', 'PullRequest'],

  /**
   * @name ReopenIssueInput
   * @type InputObject
   */
  ReopenIssueInput: {
    issueId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name ReopenIssuePayload
   * @type Object
   */
  ReopenIssuePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The issue that was opened. */
    issue: 'Issue',
  },

  /**
   * @name ReopenPullRequestInput
   * @type InputObject
   */
  ReopenPullRequestInput: {
    pullRequestId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name ReopenPullRequestPayload
   * @type Object
   */
  ReopenPullRequestPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The pull request that was reopened. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name ReopenedEvent
   * @type Object
   * @implements Node
   */
  ReopenedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Object that was reopened. */
    closable: 'Closable!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
  },

  /**
   * @name RepoAccessAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoAccessAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The visibility of the repository */
    visibility: 'RepoAccessAuditEntryVisibility',
  },

  RepoAccessAuditEntryVisibility,

  /**
   * @name RepoAddMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoAddMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The visibility of the repository */
    visibility: 'RepoAddMemberAuditEntryVisibility',
  },

  RepoAddMemberAuditEntryVisibility,

  /**
   * @name RepoAddTopicAuditEntry
   * @type Object
   * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
   */
  RepoAddTopicAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The name of the topic added to the repository */
    topic: 'Topic',
    /** The name of the topic added to the repository */
    topicName: 'String',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoArchivedAuditEntry
   * @type Object
   * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
   */
  RepoArchivedAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The visibility of the repository */
    visibility: 'RepoArchivedAuditEntryVisibility',
  },

  RepoArchivedAuditEntryVisibility,

  /**
   * @name RepoChangeMergeSettingAuditEntry
   * @type Object
   * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
   */
  RepoChangeMergeSettingAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** Whether the change was to enable (true) or disable (false) the merge type */
    isEnabled: 'Boolean',
    /** The merge method affected by the change */
    mergeType: 'RepoChangeMergeSettingAuditEntryMergeType',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  RepoChangeMergeSettingAuditEntryMergeType,

  /**
   * @name RepoConfigDisableAnonymousGitAccessAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigDisableAnonymousGitAccessAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigDisableCollaboratorsOnlyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigDisableCollaboratorsOnlyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigDisableContributorsOnlyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigDisableContributorsOnlyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigDisableSockpuppetDisallowedAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigDisableSockpuppetDisallowedAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigEnableAnonymousGitAccessAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigEnableAnonymousGitAccessAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigEnableCollaboratorsOnlyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigEnableCollaboratorsOnlyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigEnableContributorsOnlyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigEnableContributorsOnlyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigEnableSockpuppetDisallowedAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigEnableSockpuppetDisallowedAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigLockAnonymousGitAccessAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigLockAnonymousGitAccessAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoConfigUnlockAnonymousGitAccessAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoConfigUnlockAnonymousGitAccessAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepoCreateAuditEntry
   * @type Object
   * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
   */
  RepoCreateAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The name of the parent repository for this forked repository. */
    forkParentName: 'String',
    /** The name of the root repository for this netork. */
    forkSourceName: 'String',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The visibility of the repository */
    visibility: 'RepoCreateAuditEntryVisibility',
  },

  RepoCreateAuditEntryVisibility,

  /**
   * @name RepoDestroyAuditEntry
   * @type Object
   * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData
   */
  RepoDestroyAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The visibility of the repository */
    visibility: 'RepoDestroyAuditEntryVisibility',
  },

  RepoDestroyAuditEntryVisibility,

  /**
   * @name RepoRemoveMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData
   */
  RepoRemoveMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
    /** The visibility of the repository */
    visibility: 'RepoRemoveMemberAuditEntryVisibility',
  },

  RepoRemoveMemberAuditEntryVisibility,

  /**
   * @name RepoRemoveTopicAuditEntry
   * @type Object
   * @implements Node, AuditEntry, RepositoryAuditEntryData, OrganizationAuditEntryData, TopicAuditEntryData
   */
  RepoRemoveTopicAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The name of the topic added to the repository */
    topic: 'Topic',
    /** The name of the topic added to the repository */
    topicName: 'String',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  ReportedContentClassifiers,

  /**
   * @name Repository
   * @type Object
   * @implements Node, ProjectOwner, PackageOwner, Subscribable, Starrable, UniformResourceLocatable, RepositoryInfo
   */
  Repository: {
    /** A list of users that can be assigned to issues in this repository. */
    assignableUsers: [
      'UserConnection!',
      {
        query: 'String',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of branch protection rules for this repository. */
    branchProtectionRules: [
      'BranchProtectionRuleConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Returns the code of conduct for this repository */
    codeOfConduct: 'CodeOfConduct',
    /** A list of collaborators associated with the repository. */
    collaborators: [
      'RepositoryCollaboratorConnection',
      {
        affiliation: 'CollaboratorAffiliation',
        query: 'String',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of commit comments associated with the repository. */
    commitComments: [
      'CommitCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Returns a list of contact links associated to the repository */
    contactLinks: '[RepositoryContactLink!]',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The Ref associated with the repository's default branch. */
    defaultBranchRef: 'Ref',
    /** Whether or not branches are automatically deleted when merged in this repository. */
    deleteBranchOnMerge: 'Boolean!',
    /** A list of deploy keys that are on this repository. */
    deployKeys: [
      'DeployKeyConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Deployments associated with the repository */
    deployments: [
      'DeploymentConnection!',
      {
        environments: '[String!]',
        orderBy: 'DeploymentOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The description of the repository. */
    description: 'String',
    /** The description of the repository rendered to HTML. */
    descriptionHTML: 'HTML!',
    /** The number of kilobytes this repository occupies on disk. */
    diskUsage: 'Int',
    /** Returns how many forks there are of this repository in the whole network. */
    forkCount: 'Int!',
    /** A list of direct forked repositories. */
    forks: [
      'RepositoryConnection!',
      {
        privacy: 'RepositoryPrivacy',
        orderBy: 'RepositoryOrder',
        affiliations: '[RepositoryAffiliation]',
        ownerAffiliations: '[RepositoryAffiliation]',
        isLocked: 'Boolean',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The funding links for this repository */
    fundingLinks: '[FundingLink!]!',
    /** Indicates if the repository has issues feature enabled. */
    hasIssuesEnabled: 'Boolean!',
    /** Indicates if the repository has the Projects feature enabled. */
    hasProjectsEnabled: 'Boolean!',
    /** Indicates if the repository has wiki feature enabled. */
    hasWikiEnabled: 'Boolean!',
    /** The repository's URL. */
    homepageUrl: 'URI',
    id: 'ID!',
    /** Indicates if the repository is unmaintained. */
    isArchived: 'Boolean!',
    /** Returns true if blank issue creation is allowed */
    isBlankIssuesEnabled: 'Boolean!',
    /** Returns whether or not this repository disabled. */
    isDisabled: 'Boolean!',
    /** Returns whether or not this repository is empty. */
    isEmpty: 'Boolean!',
    /** Identifies if the repository is a fork. */
    isFork: 'Boolean!',
    /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
    isInOrganization: 'Boolean!',
    /** Indicates if the repository has been locked or not. */
    isLocked: 'Boolean!',
    /** Identifies if the repository is a mirror. */
    isMirror: 'Boolean!',
    /** Identifies if the repository is private. */
    isPrivate: 'Boolean!',
    /** Returns true if this repository has a security policy */
    isSecurityPolicyEnabled: 'Boolean',
    /** Identifies if the repository is a template that can be used to generate new repositories. */
    isTemplate: 'Boolean!',
    /** Is this repository a user configuration repository? */
    isUserConfigurationRepository: 'Boolean!',
    /** Returns a single issue from the current repository by number. */
    issue: ['Issue', { number: 'Int!' }],
    /** Returns a single issue-like object from the current repository by number. */
    issueOrPullRequest: ['IssueOrPullRequest', { number: 'Int!' }],
    /** Returns a list of issue templates associated to the repository */
    issueTemplates: '[IssueTemplate!]',
    /** A list of issues that have been opened in the repository. */
    issues: [
      'IssueConnection!',
      {
        orderBy: 'IssueOrder',
        labels: '[String!]',
        states: '[IssueState!]',
        filterBy: 'IssueFilters',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Returns a single label by name */
    label: ['Label', { name: 'String!' }],
    /** A list of labels associated with the repository. */
    labels: [
      'LabelConnection',
      {
        orderBy: 'LabelOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        query: 'String',
      },
    ],
    /** A list containing a breakdown of the language composition of the repository. */
    languages: [
      'LanguageConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'LanguageOrder',
      },
    ],
    /** The license associated with the repository */
    licenseInfo: 'License',
    /** The reason the repository has been locked. */
    lockReason: 'RepositoryLockReason',
    /** A list of Users that can be mentioned in the context of the repository. */
    mentionableUsers: [
      'UserConnection!',
      {
        query: 'String',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Whether or not PRs are merged with a merge commit on this repository. */
    mergeCommitAllowed: 'Boolean!',
    /** Returns a single milestone from the current repository by number. */
    milestone: ['Milestone', { number: 'Int!' }],
    /** A list of milestones associated with the repository. */
    milestones: [
      'MilestoneConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        states: '[MilestoneState!]',
        orderBy: 'MilestoneOrder',
        query: 'String',
      },
    ],
    /** The repository's original mirror URL. */
    mirrorUrl: 'URI',
    /** The name of the repository. */
    name: 'String!',
    /** The repository's name with owner. */
    nameWithOwner: 'String!',
    /** A Git object in the repository */
    object: ['GitObject', { oid: 'GitObjectID', expression: 'String' }],
    /** The image used to represent this repository in Open Graph data. */
    openGraphImageUrl: 'URI!',
    /** The User owner of the repository. */
    owner: 'RepositoryOwner!',
    /** A list of packages under the owner. */
    packages: [
      'PackageConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        names: '[String]',
        repositoryId: 'ID',
        packageType: 'PackageType',
        orderBy: 'PackageOrder',
      },
    ],
    /** The repository parent, if this is a fork. */
    parent: 'Repository',
    /** The primary language of the repository's code. */
    primaryLanguage: 'Language',
    /** Find project by number. */
    project: ['Project', { number: 'Int!' }],
    /** A list of projects under the owner. */
    projects: [
      'ProjectConnection!',
      {
        orderBy: 'ProjectOrder',
        search: 'String',
        states: '[ProjectState!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The HTTP path listing the repository's projects */
    projectsResourcePath: 'URI!',
    /** The HTTP URL listing the repository's projects */
    projectsUrl: 'URI!',
    /** Returns a single pull request from the current repository by number. */
    pullRequest: ['PullRequest', { number: 'Int!' }],
    /** A list of pull requests that have been opened in the repository. */
    pullRequests: [
      'PullRequestConnection!',
      {
        states: '[PullRequestState!]',
        labels: '[String!]',
        headRefName: 'String',
        baseRefName: 'String',
        orderBy: 'IssueOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Identifies when the repository was last pushed to. */
    pushedAt: 'DateTime',
    /** Whether or not rebase-merging is enabled on this repository. */
    rebaseMergeAllowed: 'Boolean!',
    /** Fetch a given ref from the repository */
    ref: ['Ref', { qualifiedName: 'String!' }],
    /** Fetch a list of refs from the repository */
    refs: [
      'RefConnection',
      {
        query: 'String',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        refPrefix: 'String!',
        direction: 'OrderDirection',
        orderBy: 'RefOrder',
      },
    ],
    /** Lookup a single release given various criteria. */
    release: ['Release', { tagName: 'String!' }],
    /** List of releases which are dependent on this repository. */
    releases: [
      'ReleaseConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'ReleaseOrder',
      },
    ],
    /** A list of applied repository-topic associations for this repository. */
    repositoryTopics: [
      'RepositoryTopicConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The HTTP path for this repository */
    resourcePath: 'URI!',
    /** The security policy URL. */
    securityPolicyUrl: 'URI',
    /** A description of the repository, rendered to HTML without any links in it. */
    shortDescriptionHTML: ['HTML!', { limit: 'Int' }],
    /** Whether or not squash-merging is enabled on this repository. */
    squashMergeAllowed: 'Boolean!',
    /** The SSH URL to clone this repository */
    sshUrl: 'GitSSHRemote!',
    /**
     * Returns a count of how many stargazers there are on this object
     *
     */
    stargazerCount: 'Int!',
    /** A list of users who have starred this starrable. */
    stargazers: [
      'StargazerConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'StarOrder',
      },
    ],
    /** Returns a list of all submodules in this repository parsed from the .gitmodules file as of the default branch's HEAD commit. */
    submodules: [
      'SubmoduleConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Temporary authentication token for cloning this repository. */
    tempCloneToken: 'String',
    /** The repository from which this repository was generated, if any. */
    templateRepository: 'Repository',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this repository */
    url: 'URI!',
    /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
    usesCustomOpenGraphImage: 'Boolean!',
    /** Indicates whether the viewer has admin permissions on this repository. */
    viewerCanAdminister: 'Boolean!',
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: 'Boolean!',
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: 'Boolean!',
    /** Indicates whether the viewer can update the topics of this repository. */
    viewerCanUpdateTopics: 'Boolean!',
    /** The last commit email for the viewer. */
    viewerDefaultCommitEmail: 'String',
    /** The last used merge method by the viewer or the default for the repository. */
    viewerDefaultMergeMethod: 'PullRequestMergeMethod!',
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: 'Boolean!',
    /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
    viewerPermission: 'RepositoryPermission',
    /** A list of emails this viewer can commit with. */
    viewerPossibleCommitEmails: '[String!]',
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription: 'SubscriptionState',
    /** A list of vulnerability alerts that are on this repository. */
    vulnerabilityAlerts: [
      'RepositoryVulnerabilityAlertConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of users watching the repository. */
    watchers: [
      'UserConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
  },

  RepositoryAffiliation,

  /**
   * @name RepositoryAuditEntryData
   * @type Interface
   */
  RepositoryAuditEntryData: [
    {
      /** The repository associated with the action */
      repository: 'Repository',
      /** The name of the repository */
      repositoryName: 'String',
      /** The HTTP path for the repository */
      repositoryResourcePath: 'URI',
      /** The HTTP URL for the repository */
      repositoryUrl: 'URI',
    },
    'OrgRestoreMemberMembershipRepositoryAuditEntryData',
    'PrivateRepositoryForkingDisableAuditEntry',
    'PrivateRepositoryForkingEnableAuditEntry',
    'RepoAccessAuditEntry',
    'RepoAddMemberAuditEntry',
    'RepoAddTopicAuditEntry',
    'RepoArchivedAuditEntry',
    'RepoChangeMergeSettingAuditEntry',
    'RepoConfigDisableAnonymousGitAccessAuditEntry',
    'RepoConfigDisableCollaboratorsOnlyAuditEntry',
    'RepoConfigDisableContributorsOnlyAuditEntry',
    'RepoConfigDisableSockpuppetDisallowedAuditEntry',
    'RepoConfigEnableAnonymousGitAccessAuditEntry',
    'RepoConfigEnableCollaboratorsOnlyAuditEntry',
    'RepoConfigEnableContributorsOnlyAuditEntry',
    'RepoConfigEnableSockpuppetDisallowedAuditEntry',
    'RepoConfigLockAnonymousGitAccessAuditEntry',
    'RepoConfigUnlockAnonymousGitAccessAuditEntry',
    'RepoCreateAuditEntry',
    'RepoDestroyAuditEntry',
    'RepoRemoveMemberAuditEntry',
    'RepoRemoveTopicAuditEntry',
    'TeamAddRepositoryAuditEntry',
    'TeamRemoveRepositoryAuditEntry',
  ],

  /**
   * @name RepositoryCollaboratorConnection
   * @type Object
   */
  RepositoryCollaboratorConnection: {
    /** A list of edges. */
    edges: '[RepositoryCollaboratorEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name RepositoryCollaboratorEdge
   * @type Object
   */
  RepositoryCollaboratorEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    node: 'User!',
    /**
     * The permission the user has on the repository.
     *
     * **Upcoming Change on 2020-10-01 UTC**
     * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
     * **Reason:** This field may return additional values
     *
     */
    permission: 'RepositoryPermission!',
    /** A list of sources for the user's access to the repository. */
    permissionSources: '[PermissionSource!]',
  },

  /**
   * @name RepositoryConnection
   * @type Object
   */
  RepositoryConnection: {
    /** A list of edges. */
    edges: '[RepositoryEdge]',
    /** A list of nodes. */
    nodes: '[Repository]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
    /** The total size in kilobytes of all repositories in the connection. */
    totalDiskUsage: 'Int!',
  },

  /**
   * @name RepositoryContactLink
   * @type Object
   */
  RepositoryContactLink: {
    /** The contact link purpose. */
    about: 'String!',
    /** The contact link name. */
    name: 'String!',
    /** The contact link URL. */
    url: 'URI!',
  },

  RepositoryContributionType,

  /**
   * @name RepositoryEdge
   * @type Object
   */
  RepositoryEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Repository',
  },

  /**
   * @name RepositoryInfo
   * @type Interface
   */
  RepositoryInfo: [
    {
      /** Identifies the date and time when the object was created. */
      createdAt: 'DateTime!',
      /** The description of the repository. */
      description: 'String',
      /** The description of the repository rendered to HTML. */
      descriptionHTML: 'HTML!',
      /** Returns how many forks there are of this repository in the whole network. */
      forkCount: 'Int!',
      /** Indicates if the repository has issues feature enabled. */
      hasIssuesEnabled: 'Boolean!',
      /** Indicates if the repository has the Projects feature enabled. */
      hasProjectsEnabled: 'Boolean!',
      /** Indicates if the repository has wiki feature enabled. */
      hasWikiEnabled: 'Boolean!',
      /** The repository's URL. */
      homepageUrl: 'URI',
      /** Indicates if the repository is unmaintained. */
      isArchived: 'Boolean!',
      /** Identifies if the repository is a fork. */
      isFork: 'Boolean!',
      /** Indicates if a repository is either owned by an organization, or is a private fork of an organization repository. */
      isInOrganization: 'Boolean!',
      /** Indicates if the repository has been locked or not. */
      isLocked: 'Boolean!',
      /** Identifies if the repository is a mirror. */
      isMirror: 'Boolean!',
      /** Identifies if the repository is private. */
      isPrivate: 'Boolean!',
      /** Identifies if the repository is a template that can be used to generate new repositories. */
      isTemplate: 'Boolean!',
      /** The license associated with the repository */
      licenseInfo: 'License',
      /** The reason the repository has been locked. */
      lockReason: 'RepositoryLockReason',
      /** The repository's original mirror URL. */
      mirrorUrl: 'URI',
      /** The name of the repository. */
      name: 'String!',
      /** The repository's name with owner. */
      nameWithOwner: 'String!',
      /** The image used to represent this repository in Open Graph data. */
      openGraphImageUrl: 'URI!',
      /** The User owner of the repository. */
      owner: 'RepositoryOwner!',
      /** Identifies when the repository was last pushed to. */
      pushedAt: 'DateTime',
      /** The HTTP path for this repository */
      resourcePath: 'URI!',
      /** A description of the repository, rendered to HTML without any links in it. */
      shortDescriptionHTML: ['HTML!', { limit: 'Int' }],
      /** Identifies the date and time when the object was last updated. */
      updatedAt: 'DateTime!',
      /** The HTTP URL for this repository */
      url: 'URI!',
      /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
      usesCustomOpenGraphImage: 'Boolean!',
    },
    'Repository',
  ],

  /**
   * @name RepositoryInvitation
   * @type Object
   * @implements Node
   */
  RepositoryInvitation: {
    /** The email address that received the invitation. */
    email: 'String',
    id: 'ID!',
    /** The user who received the invitation. */
    invitee: 'User',
    /** The user who created the invitation. */
    inviter: 'User!',
    /** The permalink for this repository invitation. */
    permalink: 'URI!',
    /**
     * The permission granted on this repository by this invitation.
     *
     * **Upcoming Change on 2020-10-01 UTC**
     * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
     * **Reason:** This field may return additional values
     *
     */
    permission: 'RepositoryPermission!',
    /** The Repository the user is invited to. */
    repository: 'RepositoryInfo',
  },

  /**
   * @name RepositoryInvitationConnection
   * @type Object
   */
  RepositoryInvitationConnection: {
    /** A list of edges. */
    edges: '[RepositoryInvitationEdge]',
    /** A list of nodes. */
    nodes: '[RepositoryInvitation]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name RepositoryInvitationEdge
   * @type Object
   */
  RepositoryInvitationEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'RepositoryInvitation',
  },

  /**
   * @name RepositoryInvitationOrder
   * @type InputObject
   */
  RepositoryInvitationOrder: {
    field: 'RepositoryInvitationOrderField!',
    direction: 'OrderDirection!',
  },

  RepositoryInvitationOrderField,

  RepositoryLockReason,

  /**
   * @name RepositoryNode
   * @type Interface
   */
  RepositoryNode: [
    {
      /** The repository associated with this node. */
      repository: 'Repository!',
    },
    'CommitComment',
    'CommitCommentThread',
    'Issue',
    'IssueComment',
    'PullRequest',
    'PullRequestCommitCommentThread',
    'PullRequestReview',
    'PullRequestReviewComment',
    'RepositoryVulnerabilityAlert',
  ],

  /**
   * @name RepositoryOrder
   * @type InputObject
   */
  RepositoryOrder: {
    field: 'RepositoryOrderField!',
    direction: 'OrderDirection!',
  },

  RepositoryOrderField,

  /**
   * @name RepositoryOwner
   * @type Interface
   */
  RepositoryOwner: [
    {
      /** A URL pointing to the owner's public avatar. */
      avatarUrl: ['URI!', { size: 'Int' }],
      id: 'ID!',
      /** The username used to login. */
      login: 'String!',
      /** A list of repositories that the user owns. */
      repositories: [
        'RepositoryConnection!',
        {
          privacy: 'RepositoryPrivacy',
          orderBy: 'RepositoryOrder',
          affiliations: '[RepositoryAffiliation]',
          ownerAffiliations: '[RepositoryAffiliation]',
          isLocked: 'Boolean',
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          isFork: 'Boolean',
        },
      ],
      /** Find Repository. */
      repository: ['Repository', { name: 'String!' }],
      /** The HTTP URL for the owner. */
      resourcePath: 'URI!',
      /** The HTTP URL for the owner. */
      url: 'URI!',
    },
    'Organization',
    'User',
  ],

  RepositoryPermission,

  RepositoryPrivacy,

  /**
   * @name RepositoryTopic
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  RepositoryTopic: {
    id: 'ID!',
    /** The HTTP path for this repository-topic. */
    resourcePath: 'URI!',
    /** The topic. */
    topic: 'Topic!',
    /** The HTTP URL for this repository-topic. */
    url: 'URI!',
  },

  /**
   * @name RepositoryTopicConnection
   * @type Object
   */
  RepositoryTopicConnection: {
    /** A list of edges. */
    edges: '[RepositoryTopicEdge]',
    /** A list of nodes. */
    nodes: '[RepositoryTopic]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name RepositoryTopicEdge
   * @type Object
   */
  RepositoryTopicEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'RepositoryTopic',
  },

  RepositoryVisibility,

  /**
   * @name RepositoryVisibilityChangeDisableAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
   */
  RepositoryVisibilityChangeDisableAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepositoryVisibilityChangeEnableAuditEntry
   * @type Object
   * @implements Node, AuditEntry, EnterpriseAuditEntryData, OrganizationAuditEntryData
   */
  RepositoryVisibilityChangeEnableAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    /** The HTTP path for this enterprise. */
    enterpriseResourcePath: 'URI',
    /** The slug of the enterprise. */
    enterpriseSlug: 'String',
    /** The HTTP URL for this enterprise. */
    enterpriseUrl: 'URI',
    id: 'ID!',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name RepositoryVulnerabilityAlert
   * @type Object
   * @implements Node, RepositoryNode
   */
  RepositoryVulnerabilityAlert: {
    /** When was the alert created? */
    createdAt: 'DateTime!',
    /** The reason the alert was dismissed */
    dismissReason: 'String',
    /** When was the alert dimissed? */
    dismissedAt: 'DateTime',
    /** The user who dismissed the alert */
    dismisser: 'User',
    id: 'ID!',
    /** The associated repository */
    repository: 'Repository!',
    /** The associated security advisory */
    securityAdvisory: 'SecurityAdvisory',
    /** The associated security vulnerablity */
    securityVulnerability: 'SecurityVulnerability',
    /** The vulnerable manifest filename */
    vulnerableManifestFilename: 'String!',
    /** The vulnerable manifest path */
    vulnerableManifestPath: 'String!',
    /** The vulnerable requirements */
    vulnerableRequirements: 'String',
  },

  /**
   * @name RepositoryVulnerabilityAlertConnection
   * @type Object
   */
  RepositoryVulnerabilityAlertConnection: {
    /** A list of edges. */
    edges: '[RepositoryVulnerabilityAlertEdge]',
    /** A list of nodes. */
    nodes: '[RepositoryVulnerabilityAlert]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name RepositoryVulnerabilityAlertEdge
   * @type Object
   */
  RepositoryVulnerabilityAlertEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'RepositoryVulnerabilityAlert',
  },

  /**
   * @name RequestReviewsInput
   * @type InputObject
   */
  RequestReviewsInput: {
    pullRequestId: 'ID!',
    userIds: '[ID!]',
    teamIds: '[ID!]',
    union: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name RequestReviewsPayload
   * @type Object
   */
  RequestReviewsPayload: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The pull request that is getting requests. */
    pullRequest: 'PullRequest',
    /** The edge from the pull request to the requested reviewers. */
    requestedReviewersEdge: 'UserEdge',
  },

  RequestableCheckStatusState,

  /**
   * @name RequestedReviewer
   * @type Union
   */
  RequestedReviewer: ['Mannequin', 'Team', 'User'],

  /**
   * @name RerequestCheckSuiteInput
   * @type InputObject
   */
  RerequestCheckSuiteInput: {
    repositoryId: 'ID!',
    checkSuiteId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name RerequestCheckSuitePayload
   * @type Object
   */
  RerequestCheckSuitePayload: {
    /** The requested check suite. */
    checkSuite: 'CheckSuite',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name ResolveReviewThreadInput
   * @type InputObject
   */
  ResolveReviewThreadInput: {
    threadId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name ResolveReviewThreadPayload
   * @type Object
   */
  ResolveReviewThreadPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The thread to resolve. */
    thread: 'PullRequestReviewThread',
  },

  /**
   * @name RestrictedContribution
   * @type Object
   * @implements Contribution
   */
  RestrictedContribution: {
    /**
     * Whether this contribution is associated with a record you do not have access to. For
     * example, your own 'first issue' contribution may have been made on a repository you can no
     * longer access.
     *
     */
    isRestricted: 'Boolean!',
    /** When this contribution was made. */
    occurredAt: 'DateTime!',
    /** The HTTP path for this contribution. */
    resourcePath: 'URI!',
    /** The HTTP URL for this contribution. */
    url: 'URI!',
    /**
     * The user who made this contribution.
     *
     */
    user: 'User!',
  },

  /**
   * @name ReviewDismissalAllowance
   * @type Object
   * @implements Node
   */
  ReviewDismissalAllowance: {
    /** The actor that can dismiss. */
    actor: 'ReviewDismissalAllowanceActor',
    /** Identifies the branch protection rule associated with the allowed user or team. */
    branchProtectionRule: 'BranchProtectionRule',
    id: 'ID!',
  },

  /**
   * @name ReviewDismissalAllowanceActor
   * @type Union
   */
  ReviewDismissalAllowanceActor: ['Team', 'User'],

  /**
   * @name ReviewDismissalAllowanceConnection
   * @type Object
   */
  ReviewDismissalAllowanceConnection: {
    /** A list of edges. */
    edges: '[ReviewDismissalAllowanceEdge]',
    /** A list of nodes. */
    nodes: '[ReviewDismissalAllowance]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ReviewDismissalAllowanceEdge
   * @type Object
   */
  ReviewDismissalAllowanceEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'ReviewDismissalAllowance',
  },

  /**
   * @name ReviewDismissedEvent
   * @type Object
   * @implements Node, UniformResourceLocatable
   */
  ReviewDismissedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** Identifies the optional message associated with the 'review_dismissed' event. */
    dismissalMessage: 'String',
    /** Identifies the optional message associated with the event, rendered to HTML. */
    dismissalMessageHTML: 'String',
    id: 'ID!',
    /** Identifies the previous state of the review with the 'review_dismissed' event. */
    previousReviewState: 'PullRequestReviewState!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** Identifies the commit which caused the review to become stale. */
    pullRequestCommit: 'PullRequestCommit',
    /** The HTTP path for this review dismissed event. */
    resourcePath: 'URI!',
    /** Identifies the review associated with the 'review_dismissed' event. */
    review: 'PullRequestReview',
    /** The HTTP URL for this review dismissed event. */
    url: 'URI!',
  },

  /**
   * @name ReviewRequest
   * @type Object
   * @implements Node
   */
  ReviewRequest: {
    /** Whether this request was created for a code owner */
    asCodeOwner: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** Identifies the pull request associated with this review request. */
    pullRequest: 'PullRequest!',
    /** The reviewer that is requested. */
    requestedReviewer: 'RequestedReviewer',
  },

  /**
   * @name ReviewRequestConnection
   * @type Object
   */
  ReviewRequestConnection: {
    /** A list of edges. */
    edges: '[ReviewRequestEdge]',
    /** A list of nodes. */
    nodes: '[ReviewRequest]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name ReviewRequestEdge
   * @type Object
   */
  ReviewRequestEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'ReviewRequest',
  },

  /**
   * @name ReviewRequestRemovedEvent
   * @type Object
   * @implements Node
   */
  ReviewRequestRemovedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** Identifies the reviewer whose review request was removed. */
    requestedReviewer: 'RequestedReviewer',
  },

  /**
   * @name ReviewRequestedEvent
   * @type Object
   * @implements Node
   */
  ReviewRequestedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** PullRequest referenced by event. */
    pullRequest: 'PullRequest!',
    /** Identifies the reviewer whose review was requested. */
    requestedReviewer: 'RequestedReviewer',
  },

  /**
   * @name ReviewStatusHovercardContext
   * @type Object
   * @implements HovercardContext
   */
  ReviewStatusHovercardContext: {
    /** A string describing this context */
    message: 'String!',
    /** An octicon to accompany this context */
    octicon: 'String!',
    /** The current status of the pull request with respect to code review. */
    reviewDecision: 'PullRequestReviewDecision',
  },

  SamlDigestAlgorithm,

  SamlSignatureAlgorithm,

  /**
   * @name SavedReply
   * @type Object
   * @implements Node
   */
  SavedReply: {
    /** The body of the saved reply. */
    body: 'String!',
    /** The saved reply body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    id: 'ID!',
    /** The title of the saved reply. */
    title: 'String!',
    /** The user that saved this reply. */
    user: 'Actor',
  },

  /**
   * @name SavedReplyConnection
   * @type Object
   */
  SavedReplyConnection: {
    /** A list of edges. */
    edges: '[SavedReplyEdge]',
    /** A list of nodes. */
    nodes: '[SavedReply]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name SavedReplyEdge
   * @type Object
   */
  SavedReplyEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'SavedReply',
  },

  /**
   * @name SavedReplyOrder
   * @type InputObject
   */
  SavedReplyOrder: {
    field: 'SavedReplyOrderField!',
    direction: 'OrderDirection!',
  },

  SavedReplyOrderField,

  /**
   * @name SearchResultItem
   * @type Union
   */
  SearchResultItem: [
    'App',
    'Issue',
    'MarketplaceListing',
    'Organization',
    'PullRequest',
    'Repository',
    'User',
  ],

  /**
   * @name SearchResultItemConnection
   * @type Object
   */
  SearchResultItemConnection: {
    /** The number of pieces of code that matched the search query. */
    codeCount: 'Int!',
    /** A list of edges. */
    edges: '[SearchResultItemEdge]',
    /** The number of issues that matched the search query. */
    issueCount: 'Int!',
    /** A list of nodes. */
    nodes: '[SearchResultItem]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** The number of repositories that matched the search query. */
    repositoryCount: 'Int!',
    /** The number of users that matched the search query. */
    userCount: 'Int!',
    /** The number of wiki pages that matched the search query. */
    wikiCount: 'Int!',
  },

  /**
   * @name SearchResultItemEdge
   * @type Object
   */
  SearchResultItemEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'SearchResultItem',
    /** Text matches on the result found. */
    textMatches: '[TextMatch]',
  },

  SearchType,

  /**
   * @name SecurityAdvisory
   * @type Object
   * @implements Node
   */
  SecurityAdvisory: {
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** This is a long plaintext description of the advisory */
    description: 'String!',
    /** The GitHub Security Advisory ID */
    ghsaId: 'String!',
    id: 'ID!',
    /** A list of identifiers for this advisory */
    identifiers: '[SecurityAdvisoryIdentifier!]!',
    /** The organization that originated the advisory */
    origin: 'String!',
    /** The permalink for the advisory */
    permalink: 'URI',
    /** When the advisory was published */
    publishedAt: 'DateTime!',
    /** A list of references for this advisory */
    references: '[SecurityAdvisoryReference!]!',
    /** The severity of the advisory */
    severity: 'SecurityAdvisorySeverity!',
    /** A short plaintext summary of the advisory */
    summary: 'String!',
    /** When the advisory was last updated */
    updatedAt: 'DateTime!',
    /** Vulnerabilities associated with this Advisory */
    vulnerabilities: [
      'SecurityVulnerabilityConnection!',
      {
        orderBy: 'SecurityVulnerabilityOrder',
        ecosystem: 'SecurityAdvisoryEcosystem',
        package: 'String',
        severities: '[SecurityAdvisorySeverity!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** When the advisory was withdrawn, if it has been withdrawn */
    withdrawnAt: 'DateTime',
  },

  /**
   * @name SecurityAdvisoryConnection
   * @type Object
   */
  SecurityAdvisoryConnection: {
    /** A list of edges. */
    edges: '[SecurityAdvisoryEdge]',
    /** A list of nodes. */
    nodes: '[SecurityAdvisory]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  SecurityAdvisoryEcosystem,

  /**
   * @name SecurityAdvisoryEdge
   * @type Object
   */
  SecurityAdvisoryEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'SecurityAdvisory',
  },

  /**
   * @name SecurityAdvisoryIdentifier
   * @type Object
   */
  SecurityAdvisoryIdentifier: {
    /** The identifier type, e.g. GHSA, CVE */
    type: 'String!',
    /** The identifier */
    value: 'String!',
  },

  /**
   * @name SecurityAdvisoryIdentifierFilter
   * @type InputObject
   */
  SecurityAdvisoryIdentifierFilter: {
    type: 'SecurityAdvisoryIdentifierType!',
    value: 'String!',
  },

  SecurityAdvisoryIdentifierType,

  /**
   * @name SecurityAdvisoryOrder
   * @type InputObject
   */
  SecurityAdvisoryOrder: {
    field: 'SecurityAdvisoryOrderField!',
    direction: 'OrderDirection!',
  },

  SecurityAdvisoryOrderField,

  /**
   * @name SecurityAdvisoryPackage
   * @type Object
   */
  SecurityAdvisoryPackage: {
    /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
    ecosystem: 'SecurityAdvisoryEcosystem!',
    /** The package name */
    name: 'String!',
  },

  /**
   * @name SecurityAdvisoryPackageVersion
   * @type Object
   */
  SecurityAdvisoryPackageVersion: {
    /** The package name or version */
    identifier: 'String!',
  },

  /**
   * @name SecurityAdvisoryReference
   * @type Object
   */
  SecurityAdvisoryReference: {
    /** A publicly accessible reference */
    url: 'URI!',
  },

  SecurityAdvisorySeverity,

  /**
   * @name SecurityVulnerability
   * @type Object
   */
  SecurityVulnerability: {
    /** The Advisory associated with this Vulnerability */
    advisory: 'SecurityAdvisory!',
    /** The first version containing a fix for the vulnerability */
    firstPatchedVersion: 'SecurityAdvisoryPackageVersion',
    /** A description of the vulnerable package */
    package: 'SecurityAdvisoryPackage!',
    /** The severity of the vulnerability within this package */
    severity: 'SecurityAdvisorySeverity!',
    /** When the vulnerability was last updated */
    updatedAt: 'DateTime!',
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
    vulnerableVersionRange: 'String!',
  },

  /**
   * @name SecurityVulnerabilityConnection
   * @type Object
   */
  SecurityVulnerabilityConnection: {
    /** A list of edges. */
    edges: '[SecurityVulnerabilityEdge]',
    /** A list of nodes. */
    nodes: '[SecurityVulnerability]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name SecurityVulnerabilityEdge
   * @type Object
   */
  SecurityVulnerabilityEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'SecurityVulnerability',
  },

  /**
   * @name SecurityVulnerabilityOrder
   * @type InputObject
   */
  SecurityVulnerabilityOrder: {
    field: 'SecurityVulnerabilityOrderField!',
    direction: 'OrderDirection!',
  },

  SecurityVulnerabilityOrderField,

  /**
   * @name SetEnterpriseIdentityProviderInput
   * @type InputObject
   */
  SetEnterpriseIdentityProviderInput: {
    enterpriseId: 'ID!',
    ssoUrl: 'URI!',
    issuer: 'String',
    idpCertificate: 'String!',
    signatureMethod: 'SamlSignatureAlgorithm!',
    digestMethod: 'SamlDigestAlgorithm!',
    clientMutationId: 'String',
  },

  /**
   * @name SetEnterpriseIdentityProviderPayload
   * @type Object
   */
  SetEnterpriseIdentityProviderPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The identity provider for the enterprise. */
    identityProvider: 'EnterpriseIdentityProvider',
  },

  /**
   * @name SmimeSignature
   * @type Object
   * @implements GitSignature
   */
  SmimeSignature: {
    /** Email used to sign this object. */
    email: 'String!',
    /** True if the signature is valid and verified by GitHub. */
    isValid: 'Boolean!',
    /** Payload for GPG signing object. Raw ODB object without the signature header. */
    payload: 'String!',
    /** ASCII-armored signature header from object. */
    signature: 'String!',
    /** GitHub user corresponding to the email signing this commit. */
    signer: 'User',
    /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */
    state: 'GitSignatureState!',
    /** True if the signature was made with GitHub's signing key. */
    wasSignedByGitHub: 'Boolean!',
  },

  /**
   * @name Sponsor
   * @type Union
   */
  Sponsor: ['Organization', 'User'],

  /**
   * @name Sponsorable
   * @type Interface
   */
  Sponsorable: [
    {
      /** The GitHub Sponsors listing for this user. */
      sponsorsListing: 'SponsorsListing',
      /** This object's sponsorships as the maintainer. */
      sponsorshipsAsMaintainer: [
        'SponsorshipConnection!',
        {
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          includePrivate: 'Boolean',
          orderBy: 'SponsorshipOrder',
        },
      ],
      /** This object's sponsorships as the sponsor. */
      sponsorshipsAsSponsor: [
        'SponsorshipConnection!',
        {
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          orderBy: 'SponsorshipOrder',
        },
      ],
    },
    'Organization',
    'User',
  ],

  /**
   * @name SponsorsListing
   * @type Object
   * @implements Node
   */
  SponsorsListing: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The full description of the listing. */
    fullDescription: 'String!',
    /** The full description of the listing rendered to HTML. */
    fullDescriptionHTML: 'HTML!',
    id: 'ID!',
    /** The listing's full name. */
    name: 'String!',
    /** The short description of the listing. */
    shortDescription: 'String!',
    /** The short name of the listing. */
    slug: 'String!',
    /** The published tiers for this GitHub Sponsors listing. */
    tiers: [
      'SponsorsTierConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'SponsorsTierOrder',
      },
    ],
  },

  /**
   * @name SponsorsTier
   * @type Object
   * @implements Node
   */
  SponsorsTier: {
    /** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
    adminInfo: 'SponsorsTierAdminInfo',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The description of the tier. */
    description: 'String!',
    /** The tier description rendered to HTML */
    descriptionHTML: 'HTML!',
    id: 'ID!',
    /** How much this tier costs per month in cents. */
    monthlyPriceInCents: 'Int!',
    /** How much this tier costs per month in dollars. */
    monthlyPriceInDollars: 'Int!',
    /** The name of the tier. */
    name: 'String!',
    /** The sponsors listing that this tier belongs to. */
    sponsorsListing: 'SponsorsListing!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name SponsorsTierAdminInfo
   * @type Object
   */
  SponsorsTierAdminInfo: {
    /** The sponsorships associated with this tier. */
    sponsorships: [
      'SponsorshipConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        includePrivate: 'Boolean',
        orderBy: 'SponsorshipOrder',
      },
    ],
  },

  /**
   * @name SponsorsTierConnection
   * @type Object
   */
  SponsorsTierConnection: {
    /** A list of edges. */
    edges: '[SponsorsTierEdge]',
    /** A list of nodes. */
    nodes: '[SponsorsTier]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name SponsorsTierEdge
   * @type Object
   */
  SponsorsTierEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'SponsorsTier',
  },

  /**
   * @name SponsorsTierOrder
   * @type InputObject
   */
  SponsorsTierOrder: {
    field: 'SponsorsTierOrderField!',
    direction: 'OrderDirection!',
  },

  SponsorsTierOrderField,

  /**
   * @name Sponsorship
   * @type Object
   * @implements Node
   */
  Sponsorship: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /**
     * @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC.
     * The entity that is being sponsored
     */
    maintainer: 'User!',
    /** The privacy level for this sponsorship. */
    privacyLevel: 'SponsorshipPrivacy!',
    /**
     * @deprecated `Sponsorship.sponsor` will be removed. Use `Sponsorship.sponsorEntity` instead. Removal on 2020-10-01 UTC.
     * The user that is sponsoring. Returns null if the sponsorship is private or if sponsor is not a user.
     */
    sponsor: 'User',
    /** The user or organization that is sponsoring. Returns null if the sponsorship is private. */
    sponsorEntity: 'Sponsor',
    /** The entity that is being sponsored */
    sponsorable: 'Sponsorable!',
    /** The associated sponsorship tier */
    tier: 'SponsorsTier',
  },

  /**
   * @name SponsorshipConnection
   * @type Object
   */
  SponsorshipConnection: {
    /** A list of edges. */
    edges: '[SponsorshipEdge]',
    /** A list of nodes. */
    nodes: '[Sponsorship]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name SponsorshipEdge
   * @type Object
   */
  SponsorshipEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Sponsorship',
  },

  /**
   * @name SponsorshipOrder
   * @type InputObject
   */
  SponsorshipOrder: {
    field: 'SponsorshipOrderField!',
    direction: 'OrderDirection!',
  },

  SponsorshipOrderField,

  SponsorshipPrivacy,

  /**
   * @name StarOrder
   * @type InputObject
   */
  StarOrder: {
    field: 'StarOrderField!',
    direction: 'OrderDirection!',
  },

  StarOrderField,

  /**
   * @name StargazerConnection
   * @type Object
   */
  StargazerConnection: {
    /** A list of edges. */
    edges: '[StargazerEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name StargazerEdge
   * @type Object
   */
  StargazerEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    node: 'User!',
    /** Identifies when the item was starred. */
    starredAt: 'DateTime!',
  },

  /**
   * @name Starrable
   * @type Interface
   */
  Starrable: [
    {
      id: 'ID!',
      /**
       * Returns a count of how many stargazers there are on this object
       *
       */
      stargazerCount: 'Int!',
      /** A list of users who have starred this starrable. */
      stargazers: [
        'StargazerConnection!',
        {
          after: 'String',
          before: 'String',
          first: 'Int',
          last: 'Int',
          orderBy: 'StarOrder',
        },
      ],
      /** Returns a boolean indicating whether the viewing user has starred this starrable. */
      viewerHasStarred: 'Boolean!',
    },
    'Gist',
    'Repository',
    'Topic',
  ],

  /**
   * @name StarredRepositoryConnection
   * @type Object
   */
  StarredRepositoryConnection: {
    /** A list of edges. */
    edges: '[StarredRepositoryEdge]',
    /** Is the list of stars for this user truncated? This is true for users that have many stars. */
    isOverLimit: 'Boolean!',
    /** A list of nodes. */
    nodes: '[Repository]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name StarredRepositoryEdge
   * @type Object
   */
  StarredRepositoryEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    node: 'Repository!',
    /** Identifies when the item was starred. */
    starredAt: 'DateTime!',
  },

  /**
   * @name Status
   * @type Object
   * @implements Node
   */
  Status: {
    /** A list of status contexts and check runs for this commit. */
    combinedContexts: [
      'StatusCheckRollupContextConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The commit this status is attached to. */
    commit: 'Commit',
    /** Looks up an individual status context by context name. */
    context: ['StatusContext', { name: 'String!' }],
    /** The individual status contexts for this commit. */
    contexts: '[StatusContext!]!',
    id: 'ID!',
    /** The combined commit status. */
    state: 'StatusState!',
  },

  /**
   * @name StatusCheckRollup
   * @type Object
   * @implements Node
   */
  StatusCheckRollup: {
    /** The commit the status and check runs are attached to. */
    commit: 'Commit',
    /** A list of status contexts and check runs for this commit. */
    contexts: [
      'StatusCheckRollupContextConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    id: 'ID!',
    /** The combined status for the commit. */
    state: 'StatusState!',
  },

  /**
   * @name StatusCheckRollupContext
   * @type Union
   */
  StatusCheckRollupContext: ['CheckRun', 'StatusContext'],

  /**
   * @name StatusCheckRollupContextConnection
   * @type Object
   */
  StatusCheckRollupContextConnection: {
    /** A list of edges. */
    edges: '[StatusCheckRollupContextEdge]',
    /** A list of nodes. */
    nodes: '[StatusCheckRollupContext]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name StatusCheckRollupContextEdge
   * @type Object
   */
  StatusCheckRollupContextEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'StatusCheckRollupContext',
  },

  /**
   * @name StatusContext
   * @type Object
   * @implements Node
   */
  StatusContext: {
    /** The avatar of the OAuth application or the user that created the status */
    avatarUrl: ['URI', { size: 'Int' }],
    /** This commit this status context is attached to. */
    commit: 'Commit',
    /** The name of this status context. */
    context: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The actor who created this status context. */
    creator: 'Actor',
    /** The description for this status context. */
    description: 'String',
    id: 'ID!',
    /** The state of this status context. */
    state: 'StatusState!',
    /** The URL for this status context. */
    targetUrl: 'URI',
  },

  StatusState,

  /**
   * @name SubmitPullRequestReviewInput
   * @type InputObject
   */
  SubmitPullRequestReviewInput: {
    pullRequestId: 'ID',
    pullRequestReviewId: 'ID',
    event: 'PullRequestReviewEvent!',
    body: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name SubmitPullRequestReviewPayload
   * @type Object
   */
  SubmitPullRequestReviewPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The submitted pull request review. */
    pullRequestReview: 'PullRequestReview',
  },

  /**
   * @name Submodule
   * @type Object
   */
  Submodule: {
    /** The branch of the upstream submodule for tracking updates */
    branch: 'String',
    /** The git URL of the submodule repository */
    gitUrl: 'URI!',
    /** The name of the submodule in .gitmodules */
    name: 'String!',
    /** The path in the superproject that this submodule is located in */
    path: 'String!',
    /** The commit revision of the subproject repository being tracked by the submodule */
    subprojectCommitOid: 'GitObjectID',
  },

  /**
   * @name SubmoduleConnection
   * @type Object
   */
  SubmoduleConnection: {
    /** A list of edges. */
    edges: '[SubmoduleEdge]',
    /** A list of nodes. */
    nodes: '[Submodule]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name SubmoduleEdge
   * @type Object
   */
  SubmoduleEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Submodule',
  },

  /**
   * @name Subscribable
   * @type Interface
   */
  Subscribable: [
    {
      id: 'ID!',
      /** Check if the viewer is able to change their subscription status for the repository. */
      viewerCanSubscribe: 'Boolean!',
      /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
      viewerSubscription: 'SubscriptionState',
    },
    'Commit',
    'Issue',
    'PullRequest',
    'Repository',
    'Team',
    'TeamDiscussion',
  ],

  /**
   * @name SubscribedEvent
   * @type Object
   * @implements Node
   */
  SubscribedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Object referenced by event. */
    subscribable: 'Subscribable!',
  },

  SubscriptionState,

  /**
   * @name SuggestedReviewer
   * @type Object
   */
  SuggestedReviewer: {
    /** Is this suggestion based on past commits? */
    isAuthor: 'Boolean!',
    /** Is this suggestion based on past review comments? */
    isCommenter: 'Boolean!',
    /** Identifies the user suggested to review the pull request. */
    reviewer: 'User!',
  },

  /**
   * @name Tag
   * @type Object
   * @implements Node, GitObject
   */
  Tag: {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: 'String!',
    /** The HTTP path for this Git object */
    commitResourcePath: 'URI!',
    /** The HTTP URL for this Git object */
    commitUrl: 'URI!',
    id: 'ID!',
    /** The Git tag message. */
    message: 'String',
    /** The Git tag name. */
    name: 'String!',
    /** The Git object ID */
    oid: 'GitObjectID!',
    /** The Repository the Git object belongs to */
    repository: 'Repository!',
    /** Details about the tag author. */
    tagger: 'GitActor',
    /** The Git object the tag points to. */
    target: 'GitObject!',
  },

  /**
   * @name Team
   * @type Object
   * @implements Node, Subscribable, MemberStatusable
   */
  Team: {
    /** A list of teams that are ancestors of this team. */
    ancestors: [
      'TeamConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A URL pointing to the team's avatar. */
    avatarUrl: ['URI', { size: 'Int' }],
    /** List of child teams belonging to this team */
    childTeams: [
      'TeamConnection!',
      {
        orderBy: 'TeamOrder',
        userLogins: '[String!]',
        immediateOnly: 'Boolean',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The slug corresponding to the organization and team. */
    combinedSlug: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The description of the team. */
    description: 'String',
    /** Find a team discussion by its number. */
    discussion: ['TeamDiscussion', { number: 'Int!' }],
    /** A list of team discussions. */
    discussions: [
      'TeamDiscussionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        isPinned: 'Boolean',
        orderBy: 'TeamDiscussionOrder',
      },
    ],
    /** The HTTP path for team discussions */
    discussionsResourcePath: 'URI!',
    /** The HTTP URL for team discussions */
    discussionsUrl: 'URI!',
    /** The HTTP path for editing this team */
    editTeamResourcePath: 'URI!',
    /** The HTTP URL for editing this team */
    editTeamUrl: 'URI!',
    id: 'ID!',
    /** A list of pending invitations for users to this team */
    invitations: [
      'OrganizationInvitationConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
    memberStatuses: [
      'UserStatusConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'UserStatusOrder',
      },
    ],
    /** A list of users who are members of this team. */
    members: [
      'TeamMemberConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        query: 'String',
        membership: 'TeamMembershipType',
        role: 'TeamMemberRole',
        orderBy: 'TeamMemberOrder',
      },
    ],
    /** The HTTP path for the team' members */
    membersResourcePath: 'URI!',
    /** The HTTP URL for the team' members */
    membersUrl: 'URI!',
    /** The name of the team. */
    name: 'String!',
    /** The HTTP path creating a new team */
    newTeamResourcePath: 'URI!',
    /** The HTTP URL creating a new team */
    newTeamUrl: 'URI!',
    /** The organization that owns this team. */
    organization: 'Organization!',
    /** The parent team of the team. */
    parentTeam: 'Team',
    /** The level of privacy the team has. */
    privacy: 'TeamPrivacy!',
    /** A list of repositories this team has access to. */
    repositories: [
      'TeamRepositoryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        query: 'String',
        orderBy: 'TeamRepositoryOrder',
      },
    ],
    /** The HTTP path for this team's repositories */
    repositoriesResourcePath: 'URI!',
    /** The HTTP URL for this team's repositories */
    repositoriesUrl: 'URI!',
    /** The HTTP path for this team */
    resourcePath: 'URI!',
    /** The slug corresponding to the team. */
    slug: 'String!',
    /** The HTTP path for this team's teams */
    teamsResourcePath: 'URI!',
    /** The HTTP URL for this team's teams */
    teamsUrl: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this team */
    url: 'URI!',
    /** Team is adminable by the viewer. */
    viewerCanAdminister: 'Boolean!',
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: 'Boolean!',
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription: 'SubscriptionState',
  },

  /**
   * @name TeamAddMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
   */
  TeamAddMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped: 'Boolean',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The team associated with the action */
    team: 'Team',
    /** The name of the team */
    teamName: 'String',
    /** The HTTP path for this team */
    teamResourcePath: 'URI',
    /** The HTTP URL for this team */
    teamUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name TeamAddRepositoryAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
   */
  TeamAddRepositoryAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped: 'Boolean',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The team associated with the action */
    team: 'Team',
    /** The name of the team */
    teamName: 'String',
    /** The HTTP path for this team */
    teamResourcePath: 'URI',
    /** The HTTP URL for this team */
    teamUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name TeamAuditEntryData
   * @type Interface
   */
  TeamAuditEntryData: [
    {
      /** The team associated with the action */
      team: 'Team',
      /** The name of the team */
      teamName: 'String',
      /** The HTTP path for this team */
      teamResourcePath: 'URI',
      /** The HTTP URL for this team */
      teamUrl: 'URI',
    },
    'OrgRestoreMemberMembershipTeamAuditEntryData',
    'TeamAddMemberAuditEntry',
    'TeamAddRepositoryAuditEntry',
    'TeamChangeParentTeamAuditEntry',
    'TeamRemoveMemberAuditEntry',
    'TeamRemoveRepositoryAuditEntry',
  ],

  /**
   * @name TeamChangeParentTeamAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
   */
  TeamChangeParentTeamAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped: 'Boolean',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The new parent team. */
    parentTeam: 'Team',
    /** The name of the new parent team */
    parentTeamName: 'String',
    /** The name of the former parent team */
    parentTeamNameWas: 'String',
    /** The HTTP path for the parent team */
    parentTeamResourcePath: 'URI',
    /** The HTTP URL for the parent team */
    parentTeamUrl: 'URI',
    /** The former parent team. */
    parentTeamWas: 'Team',
    /** The HTTP path for the previous parent team */
    parentTeamWasResourcePath: 'URI',
    /** The HTTP URL for the previous parent team */
    parentTeamWasUrl: 'URI',
    /** The team associated with the action */
    team: 'Team',
    /** The name of the team */
    teamName: 'String',
    /** The HTTP path for this team */
    teamResourcePath: 'URI',
    /** The HTTP URL for this team */
    teamUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name TeamConnection
   * @type Object
   */
  TeamConnection: {
    /** A list of edges. */
    edges: '[TeamEdge]',
    /** A list of nodes. */
    nodes: '[Team]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name TeamDiscussion
   * @type Object
   * @implements Node, Comment, Deletable, Reactable, Subscribable, UniformResourceLocatable, Updatable, UpdatableComment
   */
  TeamDiscussion: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the discussion's team. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** The body as Markdown. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body rendered to text. */
    bodyText: 'String!',
    /** Identifies the discussion body hash. */
    bodyVersion: 'String!',
    /** A list of comments on this discussion. */
    comments: [
      'TeamDiscussionCommentConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'TeamDiscussionCommentOrder',
        fromComment: 'Int',
      },
    ],
    /** The HTTP path for discussion comments */
    commentsResourcePath: 'URI!',
    /** The HTTP URL for discussion comments */
    commentsUrl: 'URI!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The actor who edited the comment. */
    editor: 'Actor',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** Whether or not the discussion is pinned. */
    isPinned: 'Boolean!',
    /** Whether or not the discussion is only visible to team members and org admins. */
    isPrivate: 'Boolean!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** Identifies the discussion within its team. */
    number: 'Int!',
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The HTTP path for this discussion */
    resourcePath: 'URI!',
    /** The team that defines the context of this discussion. */
    team: 'Team!',
    /** The title of the discussion */
    title: 'String!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this discussion */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Whether or not the current viewer can pin this discussion. */
    viewerCanPin: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the viewer is able to change their subscription status for the repository. */
    viewerCanSubscribe: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
    /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
    viewerSubscription: 'SubscriptionState',
  },

  /**
   * @name TeamDiscussionComment
   * @type Object
   * @implements Node, Comment, Deletable, Reactable, UniformResourceLocatable, Updatable, UpdatableComment
   */
  TeamDiscussionComment: {
    /** The actor who authored the comment. */
    author: 'Actor',
    /** Author's association with the comment's team. */
    authorAssociation: 'CommentAuthorAssociation!',
    /** The body as Markdown. */
    body: 'String!',
    /** The body rendered to HTML. */
    bodyHTML: 'HTML!',
    /** The body rendered to text. */
    bodyText: 'String!',
    /** The current version of the body content. */
    bodyVersion: 'String!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Check if this comment was created via an email reply. */
    createdViaEmail: 'Boolean!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The discussion this comment is about. */
    discussion: 'TeamDiscussion!',
    /** The actor who edited the comment. */
    editor: 'Actor',
    id: 'ID!',
    /** Check if this comment was edited and includes an edit with the creation data */
    includesCreatedEdit: 'Boolean!',
    /** The moment the editor made the last edit */
    lastEditedAt: 'DateTime',
    /** Identifies the comment number. */
    number: 'Int!',
    /** Identifies when the comment was published at. */
    publishedAt: 'DateTime',
    /** A list of reactions grouped by content left on the subject. */
    reactionGroups: '[ReactionGroup!]',
    /** A list of Reactions left on the Issue. */
    reactions: [
      'ReactionConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        content: 'ReactionContent',
        orderBy: 'ReactionOrder',
      },
    ],
    /** The HTTP path for this comment */
    resourcePath: 'URI!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this comment */
    url: 'URI!',
    /** A list of edits to this content. */
    userContentEdits: [
      'UserContentEditConnection',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Check if the current viewer can delete this object. */
    viewerCanDelete: 'Boolean!',
    /** Can user react to this subject */
    viewerCanReact: 'Boolean!',
    /** Check if the current viewer can update this object. */
    viewerCanUpdate: 'Boolean!',
    /** Reasons why the current viewer can not update this comment. */
    viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    /** Did the viewer author this comment. */
    viewerDidAuthor: 'Boolean!',
  },

  /**
   * @name TeamDiscussionCommentConnection
   * @type Object
   */
  TeamDiscussionCommentConnection: {
    /** A list of edges. */
    edges: '[TeamDiscussionCommentEdge]',
    /** A list of nodes. */
    nodes: '[TeamDiscussionComment]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name TeamDiscussionCommentEdge
   * @type Object
   */
  TeamDiscussionCommentEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'TeamDiscussionComment',
  },

  /**
   * @name TeamDiscussionCommentOrder
   * @type InputObject
   */
  TeamDiscussionCommentOrder: {
    field: 'TeamDiscussionCommentOrderField!',
    direction: 'OrderDirection!',
  },

  TeamDiscussionCommentOrderField,

  /**
   * @name TeamDiscussionConnection
   * @type Object
   */
  TeamDiscussionConnection: {
    /** A list of edges. */
    edges: '[TeamDiscussionEdge]',
    /** A list of nodes. */
    nodes: '[TeamDiscussion]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name TeamDiscussionEdge
   * @type Object
   */
  TeamDiscussionEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'TeamDiscussion',
  },

  /**
   * @name TeamDiscussionOrder
   * @type InputObject
   */
  TeamDiscussionOrder: {
    field: 'TeamDiscussionOrderField!',
    direction: 'OrderDirection!',
  },

  TeamDiscussionOrderField,

  /**
   * @name TeamEdge
   * @type Object
   */
  TeamEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'Team',
  },

  /**
   * @name TeamMemberConnection
   * @type Object
   */
  TeamMemberConnection: {
    /** A list of edges. */
    edges: '[TeamMemberEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name TeamMemberEdge
   * @type Object
   */
  TeamMemberEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The HTTP path to the organization's member access page. */
    memberAccessResourcePath: 'URI!',
    /** The HTTP URL to the organization's member access page. */
    memberAccessUrl: 'URI!',
    node: 'User!',
    /** The role the member has on the team. */
    role: 'TeamMemberRole!',
  },

  /**
   * @name TeamMemberOrder
   * @type InputObject
   */
  TeamMemberOrder: {
    field: 'TeamMemberOrderField!',
    direction: 'OrderDirection!',
  },

  TeamMemberOrderField,

  TeamMemberRole,

  TeamMembershipType,

  /**
   * @name TeamOrder
   * @type InputObject
   */
  TeamOrder: {
    field: 'TeamOrderField!',
    direction: 'OrderDirection!',
  },

  TeamOrderField,

  TeamPrivacy,

  /**
   * @name TeamRemoveMemberAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, TeamAuditEntryData
   */
  TeamRemoveMemberAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped: 'Boolean',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The team associated with the action */
    team: 'Team',
    /** The name of the team */
    teamName: 'String',
    /** The HTTP path for this team */
    teamResourcePath: 'URI',
    /** The HTTP URL for this team */
    teamUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name TeamRemoveRepositoryAuditEntry
   * @type Object
   * @implements Node, AuditEntry, OrganizationAuditEntryData, RepositoryAuditEntryData, TeamAuditEntryData
   */
  TeamRemoveRepositoryAuditEntry: {
    /** The action name */
    action: 'String!',
    /** The user who initiated the action */
    actor: 'AuditEntryActor',
    /** The IP address of the actor */
    actorIp: 'String',
    /** A readable representation of the actor's location */
    actorLocation: 'ActorLocation',
    /** The username of the user who initiated the action */
    actorLogin: 'String',
    /** The HTTP path for the actor. */
    actorResourcePath: 'URI',
    /** The HTTP URL for the actor. */
    actorUrl: 'URI',
    /** The time the action was initiated */
    createdAt: 'PreciseDateTime!',
    id: 'ID!',
    /** Whether the team was mapped to an LDAP Group. */
    isLdapMapped: 'Boolean',
    /** The corresponding operation type for the action */
    operationType: 'OperationType',
    /** The Organization associated with the Audit Entry. */
    organization: 'Organization',
    /** The name of the Organization. */
    organizationName: 'String',
    /** The HTTP path for the organization */
    organizationResourcePath: 'URI',
    /** The HTTP URL for the organization */
    organizationUrl: 'URI',
    /** The repository associated with the action */
    repository: 'Repository',
    /** The name of the repository */
    repositoryName: 'String',
    /** The HTTP path for the repository */
    repositoryResourcePath: 'URI',
    /** The HTTP URL for the repository */
    repositoryUrl: 'URI',
    /** The team associated with the action */
    team: 'Team',
    /** The name of the team */
    teamName: 'String',
    /** The HTTP path for this team */
    teamResourcePath: 'URI',
    /** The HTTP URL for this team */
    teamUrl: 'URI',
    /** The user affected by the action */
    user: 'User',
    /** For actions involving two users, the actor is the initiator and the user is the affected user. */
    userLogin: 'String',
    /** The HTTP path for the user. */
    userResourcePath: 'URI',
    /** The HTTP URL for the user. */
    userUrl: 'URI',
  },

  /**
   * @name TeamRepositoryConnection
   * @type Object
   */
  TeamRepositoryConnection: {
    /** A list of edges. */
    edges: '[TeamRepositoryEdge]',
    /** A list of nodes. */
    nodes: '[Repository]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name TeamRepositoryEdge
   * @type Object
   */
  TeamRepositoryEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    node: 'Repository!',
    /**
     * The permission level the team has on the repository
     *
     * **Upcoming Change on 2020-10-01 UTC**
     * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
     * **Reason:** This field may return additional values
     *
     */
    permission: 'RepositoryPermission!',
  },

  /**
   * @name TeamRepositoryOrder
   * @type InputObject
   */
  TeamRepositoryOrder: {
    field: 'TeamRepositoryOrderField!',
    direction: 'OrderDirection!',
  },

  TeamRepositoryOrderField,

  TeamRole,

  /**
   * @name TextMatch
   * @type Object
   */
  TextMatch: {
    /** The specific text fragment within the property matched on. */
    fragment: 'String!',
    /** Highlights within the matched fragment. */
    highlights: '[TextMatchHighlight!]!',
    /** The property matched on. */
    property: 'String!',
  },

  /**
   * @name TextMatchHighlight
   * @type Object
   */
  TextMatchHighlight: {
    /** The indice in the fragment where the matched text begins. */
    beginIndice: 'Int!',
    /** The indice in the fragment where the matched text ends. */
    endIndice: 'Int!',
    /** The text matched. */
    text: 'String!',
  },

  /**
   * @name Topic
   * @type Object
   * @implements Node, Starrable
   */
  Topic: {
    id: 'ID!',
    /** The topic's name. */
    name: 'String!',
    /**
     * A list of related topics, including aliases of this topic, sorted with the most relevant
     * first. Returns up to 10 Topics.
     *
     */
    relatedTopics: ['[Topic!]!', { first: 'Int' }],
    /**
     * Returns a count of how many stargazers there are on this object
     *
     */
    stargazerCount: 'Int!',
    /** A list of users who have starred this starrable. */
    stargazers: [
      'StargazerConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'StarOrder',
      },
    ],
    /** Returns a boolean indicating whether the viewing user has starred this starrable. */
    viewerHasStarred: 'Boolean!',
  },

  /**
   * @name TopicAuditEntryData
   * @type Interface
   */
  TopicAuditEntryData: [
    {
      /** The name of the topic added to the repository */
      topic: 'Topic',
      /** The name of the topic added to the repository */
      topicName: 'String',
    },
    'RepoAddTopicAuditEntry',
    'RepoRemoveTopicAuditEntry',
  ],

  TopicSuggestionDeclineReason,

  /**
   * @name TransferIssueInput
   * @type InputObject
   */
  TransferIssueInput: {
    issueId: 'ID!',
    repositoryId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name TransferIssuePayload
   * @type Object
   */
  TransferIssuePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The issue that was transferred */
    issue: 'Issue',
  },

  /**
   * @name TransferredEvent
   * @type Object
   * @implements Node
   */
  TransferredEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The repository this came from */
    fromRepository: 'Repository',
    id: 'ID!',
    /** Identifies the issue associated with the event. */
    issue: 'Issue!',
  },

  /**
   * @name Tree
   * @type Object
   * @implements Node, GitObject
   */
  Tree: {
    /** An abbreviated version of the Git object ID */
    abbreviatedOid: 'String!',
    /** The HTTP path for this Git object */
    commitResourcePath: 'URI!',
    /** The HTTP URL for this Git object */
    commitUrl: 'URI!',
    /** A list of tree entries. */
    entries: '[TreeEntry!]',
    id: 'ID!',
    /** The Git object ID */
    oid: 'GitObjectID!',
    /** The Repository the Git object belongs to */
    repository: 'Repository!',
  },

  /**
   * @name TreeEntry
   * @type Object
   */
  TreeEntry: {
    /** The extension of the file */
    extension: 'String',
    /** Whether or not this tree entry is generated */
    isGenerated: 'Boolean!',
    /** Entry file mode. */
    mode: 'Int!',
    /** Entry file name. */
    name: 'String!',
    /** Entry file object. */
    object: 'GitObject',
    /** Entry file Git object ID. */
    oid: 'GitObjectID!',
    /** The full path of the file. */
    path: 'String',
    /** The Repository the tree entry belongs to */
    repository: 'Repository!',
    /** If the TreeEntry is for a directory occupied by a submodule project, this returns the corresponding submodule */
    submodule: 'Submodule',
    /** Entry file type. */
    type: 'String!',
  },

  /**
   * @name UnarchiveRepositoryInput
   * @type InputObject
   */
  UnarchiveRepositoryInput: {
    repositoryId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnarchiveRepositoryPayload
   * @type Object
   */
  UnarchiveRepositoryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The repository that was unarchived. */
    repository: 'Repository',
  },

  /**
   * @name UnassignedEvent
   * @type Object
   * @implements Node
   */
  UnassignedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the assignable associated with the event. */
    assignable: 'Assignable!',
    /** Identifies the user or mannequin that was unassigned. */
    assignee: 'Assignee',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /**
     * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
     * Identifies the subject (user) who was unassigned.
     */
    user: 'User',
  },

  /**
   * @name UnfollowUserInput
   * @type InputObject
   */
  UnfollowUserInput: {
    userId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnfollowUserPayload
   * @type Object
   */
  UnfollowUserPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The user that was unfollowed. */
    user: 'User',
  },

  /**
   * @name UniformResourceLocatable
   * @type Interface
   */
  UniformResourceLocatable: [
    {
      /** The HTML path to this resource. */
      resourcePath: 'URI!',
      /** The URL to this resource. */
      url: 'URI!',
    },
    'Bot',
    'CheckRun',
    'ClosedEvent',
    'Commit',
    'ConvertToDraftEvent',
    'CrossReferencedEvent',
    'Gist',
    'Issue',
    'Mannequin',
    'MergedEvent',
    'Milestone',
    'Organization',
    'PullRequest',
    'PullRequestCommit',
    'ReadyForReviewEvent',
    'Release',
    'Repository',
    'RepositoryTopic',
    'ReviewDismissedEvent',
    'TeamDiscussion',
    'TeamDiscussionComment',
    'User',
  ],

  /**
   * @name UnknownSignature
   * @type Object
   * @implements GitSignature
   */
  UnknownSignature: {
    /** Email used to sign this object. */
    email: 'String!',
    /** True if the signature is valid and verified by GitHub. */
    isValid: 'Boolean!',
    /** Payload for GPG signing object. Raw ODB object without the signature header. */
    payload: 'String!',
    /** ASCII-armored signature header from object. */
    signature: 'String!',
    /** GitHub user corresponding to the email signing this commit. */
    signer: 'User',
    /** The state of this signature. `VALID` if signature is valid and verified by GitHub, otherwise represents reason why signature is considered invalid. */
    state: 'GitSignatureState!',
    /** True if the signature was made with GitHub's signing key. */
    wasSignedByGitHub: 'Boolean!',
  },

  /**
   * @name UnlabeledEvent
   * @type Object
   * @implements Node
   */
  UnlabeledEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the label associated with the 'unlabeled' event. */
    label: 'Label!',
    /** Identifies the `Labelable` associated with the event. */
    labelable: 'Labelable!',
  },

  /**
   * @name UnlinkRepositoryFromProjectInput
   * @type InputObject
   */
  UnlinkRepositoryFromProjectInput: {
    projectId: 'ID!',
    repositoryId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnlinkRepositoryFromProjectPayload
   * @type Object
   */
  UnlinkRepositoryFromProjectPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The linked Project. */
    project: 'Project',
    /** The linked Repository. */
    repository: 'Repository',
  },

  /**
   * @name UnlockLockableInput
   * @type InputObject
   */
  UnlockLockableInput: {
    lockableId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnlockLockablePayload
   * @type Object
   */
  UnlockLockablePayload: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The item that was unlocked. */
    unlockedRecord: 'Lockable',
  },

  /**
   * @name UnlockedEvent
   * @type Object
   * @implements Node
   */
  UnlockedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Object that was unlocked. */
    lockable: 'Lockable!',
  },

  /**
   * @name UnmarkFileAsViewedInput
   * @type InputObject
   */
  UnmarkFileAsViewedInput: {
    pullRequestId: 'ID!',
    path: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name UnmarkFileAsViewedPayload
   * @type Object
   */
  UnmarkFileAsViewedPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated pull request. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name UnmarkIssueAsDuplicateInput
   * @type InputObject
   */
  UnmarkIssueAsDuplicateInput: {
    duplicateId: 'ID!',
    canonicalId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnmarkIssueAsDuplicatePayload
   * @type Object
   */
  UnmarkIssueAsDuplicatePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The issue or pull request that was marked as a duplicate. */
    duplicate: 'IssueOrPullRequest',
  },

  /**
   * @name UnmarkedAsDuplicateEvent
   * @type Object
   * @implements Node
   */
  UnmarkedAsDuplicateEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** The authoritative issue or pull request which has been duplicated by another. */
    canonical: 'IssueOrPullRequest',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** The issue or pull request which has been marked as a duplicate of another. */
    duplicate: 'IssueOrPullRequest',
    id: 'ID!',
    /** Canonical and duplicate belong to different repositories. */
    isCrossRepository: 'Boolean!',
  },

  /**
   * @name UnminimizeCommentInput
   * @type InputObject
   */
  UnminimizeCommentInput: {
    subjectId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnminimizeCommentPayload
   * @type Object
   */
  UnminimizeCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The comment that was unminimized. */
    unminimizedComment: 'Minimizable',
  },

  /**
   * @name UnpinnedEvent
   * @type Object
   * @implements Node
   */
  UnpinnedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Identifies the issue associated with the event. */
    issue: 'Issue!',
  },

  /**
   * @name UnresolveReviewThreadInput
   * @type InputObject
   */
  UnresolveReviewThreadInput: {
    threadId: 'ID!',
    clientMutationId: 'String',
  },

  /**
   * @name UnresolveReviewThreadPayload
   * @type Object
   */
  UnresolveReviewThreadPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The thread to resolve. */
    thread: 'PullRequestReviewThread',
  },

  /**
   * @name UnsubscribedEvent
   * @type Object
   * @implements Node
   */
  UnsubscribedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** Object referenced by event. */
    subscribable: 'Subscribable!',
  },

  /**
   * @name Updatable
   * @type Interface
   */
  Updatable: [
    {
      /** Check if the current viewer can update this object. */
      viewerCanUpdate: 'Boolean!',
    },
    'CommitComment',
    'GistComment',
    'Issue',
    'IssueComment',
    'Project',
    'PullRequest',
    'PullRequestReview',
    'PullRequestReviewComment',
    'TeamDiscussion',
    'TeamDiscussionComment',
  ],

  /**
   * @name UpdatableComment
   * @type Interface
   */
  UpdatableComment: [
    {
      /** Reasons why the current viewer can not update this comment. */
      viewerCannotUpdateReasons: '[CommentCannotUpdateReason!]!',
    },
    'CommitComment',
    'GistComment',
    'Issue',
    'IssueComment',
    'PullRequest',
    'PullRequestReview',
    'PullRequestReviewComment',
    'TeamDiscussion',
    'TeamDiscussionComment',
  ],

  /**
   * @name UpdateBranchProtectionRuleInput
   * @type InputObject
   */
  UpdateBranchProtectionRuleInput: {
    branchProtectionRuleId: 'ID!',
    pattern: 'String',
    requiresApprovingReviews: 'Boolean',
    requiredApprovingReviewCount: 'Int',
    requiresCommitSignatures: 'Boolean',
    isAdminEnforced: 'Boolean',
    requiresStatusChecks: 'Boolean',
    requiresStrictStatusChecks: 'Boolean',
    requiresCodeOwnerReviews: 'Boolean',
    dismissesStaleReviews: 'Boolean',
    restrictsReviewDismissals: 'Boolean',
    reviewDismissalActorIds: '[ID!]',
    restrictsPushes: 'Boolean',
    pushActorIds: '[ID!]',
    requiredStatusCheckContexts: '[String!]',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateBranchProtectionRulePayload
   * @type Object
   */
  UpdateBranchProtectionRulePayload: {
    /** The newly created BranchProtectionRule. */
    branchProtectionRule: 'BranchProtectionRule',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name UpdateCheckRunInput
   * @type InputObject
   */
  UpdateCheckRunInput: {
    repositoryId: 'ID!',
    checkRunId: 'ID!',
    name: 'String',
    detailsUrl: 'URI',
    externalId: 'String',
    status: 'RequestableCheckStatusState',
    startedAt: 'DateTime',
    conclusion: 'CheckConclusionState',
    completedAt: 'DateTime',
    output: 'CheckRunOutput',
    actions: '[CheckRunAction!]',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateCheckRunPayload
   * @type Object
   */
  UpdateCheckRunPayload: {
    /** The updated check run. */
    checkRun: 'CheckRun',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
  },

  /**
   * @name UpdateCheckSuitePreferencesInput
   * @type InputObject
   */
  UpdateCheckSuitePreferencesInput: {
    repositoryId: 'ID!',
    autoTriggerPreferences: '[CheckSuiteAutoTriggerPreference!]!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateCheckSuitePreferencesPayload
   * @type Object
   */
  UpdateCheckSuitePreferencesPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated repository. */
    repository: 'Repository',
  },

  /**
   * @name UpdateEnterpriseActionExecutionCapabilitySettingInput
   * @type InputObject
   */
  UpdateEnterpriseActionExecutionCapabilitySettingInput: {
    enterpriseId: 'ID!',
    capability: 'ActionExecutionCapabilitySetting!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseActionExecutionCapabilitySettingPayload
   * @type Object
   */
  UpdateEnterpriseActionExecutionCapabilitySettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated action execution capability setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the action execution capability setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseAdministratorRoleInput
   * @type InputObject
   */
  UpdateEnterpriseAdministratorRoleInput: {
    enterpriseId: 'ID!',
    login: 'String!',
    role: 'EnterpriseAdministratorRole!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseAdministratorRolePayload
   * @type Object
   */
  UpdateEnterpriseAdministratorRolePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** A message confirming the result of changing the administrator's role. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput
   * @type InputObject
   */
  UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
   * @type Object
   */
  UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated allow private repository forking setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the allow private repository forking setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseDefaultRepositoryPermissionSettingInput
   * @type InputObject
   */
  UpdateEnterpriseDefaultRepositoryPermissionSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseDefaultRepositoryPermissionSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseDefaultRepositoryPermissionSettingPayload
   * @type Object
   */
  UpdateEnterpriseDefaultRepositoryPermissionSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated default repository permission setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the default repository permission setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can change repository visibility setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can change repository visibility setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanCreateRepositoriesSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanCreateRepositoriesSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseMembersCanCreateRepositoriesSettingValue',
    membersCanCreateRepositoriesPolicyEnabled: 'Boolean',
    membersCanCreatePublicRepositories: 'Boolean',
    membersCanCreatePrivateRepositories: 'Boolean',
    membersCanCreateInternalRepositories: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can create repositories setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can create repositories setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanDeleteIssuesSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanDeleteIssuesSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanDeleteIssuesSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanDeleteIssuesSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can delete issues setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can delete issues setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can delete repositories setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can delete repositories setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can invite collaborators setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can invite collaborators setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanMakePurchasesSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanMakePurchasesSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseMembersCanMakePurchasesSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanMakePurchasesSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanMakePurchasesSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can make purchases setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can make purchases setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can update protected branches setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can update protected branches setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput
   * @type InputObject
   */
  UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
   * @type Object
   */
  UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated members can view dependency insights setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the members can view dependency insights setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseOrganizationProjectsSettingInput
   * @type InputObject
   */
  UpdateEnterpriseOrganizationProjectsSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseOrganizationProjectsSettingPayload
   * @type Object
   */
  UpdateEnterpriseOrganizationProjectsSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated organization projects setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the organization projects setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseProfileInput
   * @type InputObject
   */
  UpdateEnterpriseProfileInput: {
    enterpriseId: 'ID!',
    name: 'String',
    description: 'String',
    websiteUrl: 'String',
    location: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseProfilePayload
   * @type Object
   */
  UpdateEnterpriseProfilePayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated enterprise. */
    enterprise: 'Enterprise',
  },

  /**
   * @name UpdateEnterpriseRepositoryProjectsSettingInput
   * @type InputObject
   */
  UpdateEnterpriseRepositoryProjectsSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseRepositoryProjectsSettingPayload
   * @type Object
   */
  UpdateEnterpriseRepositoryProjectsSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated repository projects setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the repository projects setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseTeamDiscussionsSettingInput
   * @type InputObject
   */
  UpdateEnterpriseTeamDiscussionsSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledDisabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseTeamDiscussionsSettingPayload
   * @type Object
   */
  UpdateEnterpriseTeamDiscussionsSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated team discussions setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the team discussions setting. */
    message: 'String',
  },

  /**
   * @name UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput
   * @type InputObject
   */
  UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput: {
    enterpriseId: 'ID!',
    settingValue: 'EnterpriseEnabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
   * @type Object
   */
  UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The enterprise with the updated two factor authentication required setting. */
    enterprise: 'Enterprise',
    /** A message confirming the result of updating the two factor authentication required setting. */
    message: 'String',
  },

  /**
   * @name UpdateIpAllowListEnabledSettingInput
   * @type InputObject
   */
  UpdateIpAllowListEnabledSettingInput: {
    ownerId: 'ID!',
    settingValue: 'IpAllowListEnabledSettingValue!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateIpAllowListEnabledSettingPayload
   * @type Object
   */
  UpdateIpAllowListEnabledSettingPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The IP allow list owner on which the setting was updated. */
    owner: 'IpAllowListOwner',
  },

  /**
   * @name UpdateIpAllowListEntryInput
   * @type InputObject
   */
  UpdateIpAllowListEntryInput: {
    ipAllowListEntryId: 'ID!',
    allowListValue: 'String!',
    name: 'String',
    isActive: 'Boolean!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateIpAllowListEntryPayload
   * @type Object
   */
  UpdateIpAllowListEntryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The IP allow list entry that was updated. */
    ipAllowListEntry: 'IpAllowListEntry',
  },

  /**
   * @name UpdateIssueCommentInput
   * @type InputObject
   */
  UpdateIssueCommentInput: {
    id: 'ID!',
    body: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateIssueCommentPayload
   * @type Object
   */
  UpdateIssueCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated comment. */
    issueComment: 'IssueComment',
  },

  /**
   * @name UpdateIssueInput
   * @type InputObject
   */
  UpdateIssueInput: {
    id: 'ID!',
    title: 'String',
    body: 'String',
    assigneeIds: '[ID!]',
    milestoneId: 'ID',
    labelIds: '[ID!]',
    state: 'IssueState',
    projectIds: '[ID!]',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateIssuePayload
   * @type Object
   */
  UpdateIssuePayload: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The issue. */
    issue: 'Issue',
  },

  /**
   * @name UpdateProjectCardInput
   * @type InputObject
   */
  UpdateProjectCardInput: {
    projectCardId: 'ID!',
    isArchived: 'Boolean',
    note: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateProjectCardPayload
   * @type Object
   */
  UpdateProjectCardPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated ProjectCard. */
    projectCard: 'ProjectCard',
  },

  /**
   * @name UpdateProjectColumnInput
   * @type InputObject
   */
  UpdateProjectColumnInput: {
    projectColumnId: 'ID!',
    name: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateProjectColumnPayload
   * @type Object
   */
  UpdateProjectColumnPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated project column. */
    projectColumn: 'ProjectColumn',
  },

  /**
   * @name UpdateProjectInput
   * @type InputObject
   */
  UpdateProjectInput: {
    projectId: 'ID!',
    name: 'String',
    body: 'String',
    state: 'ProjectState',
    public: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateProjectPayload
   * @type Object
   */
  UpdateProjectPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated project. */
    project: 'Project',
  },

  /**
   * @name UpdatePullRequestInput
   * @type InputObject
   */
  UpdatePullRequestInput: {
    pullRequestId: 'ID!',
    baseRefName: 'String',
    title: 'String',
    body: 'String',
    state: 'PullRequestUpdateState',
    maintainerCanModify: 'Boolean',
    assigneeIds: '[ID!]',
    milestoneId: 'ID',
    labelIds: '[ID!]',
    projectIds: '[ID!]',
    clientMutationId: 'String',
  },

  /**
   * @name UpdatePullRequestPayload
   * @type Object
   */
  UpdatePullRequestPayload: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated pull request. */
    pullRequest: 'PullRequest',
  },

  /**
   * @name UpdatePullRequestReviewCommentInput
   * @type InputObject
   */
  UpdatePullRequestReviewCommentInput: {
    pullRequestReviewCommentId: 'ID!',
    body: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdatePullRequestReviewCommentPayload
   * @type Object
   */
  UpdatePullRequestReviewCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated comment. */
    pullRequestReviewComment: 'PullRequestReviewComment',
  },

  /**
   * @name UpdatePullRequestReviewInput
   * @type InputObject
   */
  UpdatePullRequestReviewInput: {
    pullRequestReviewId: 'ID!',
    body: 'String!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdatePullRequestReviewPayload
   * @type Object
   */
  UpdatePullRequestReviewPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated pull request review. */
    pullRequestReview: 'PullRequestReview',
  },

  /**
   * @name UpdateRefInput
   * @type InputObject
   */
  UpdateRefInput: {
    refId: 'ID!',
    oid: 'GitObjectID!',
    force: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateRefPayload
   * @type Object
   */
  UpdateRefPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated Ref. */
    ref: 'Ref',
  },

  /**
   * @name UpdateRepositoryInput
   * @type InputObject
   */
  UpdateRepositoryInput: {
    repositoryId: 'ID!',
    name: 'String',
    description: 'String',
    template: 'Boolean',
    homepageUrl: 'URI',
    hasWikiEnabled: 'Boolean',
    hasIssuesEnabled: 'Boolean',
    hasProjectsEnabled: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateRepositoryPayload
   * @type Object
   */
  UpdateRepositoryPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated repository. */
    repository: 'Repository',
  },

  /**
   * @name UpdateSubscriptionInput
   * @type InputObject
   */
  UpdateSubscriptionInput: {
    subscribableId: 'ID!',
    state: 'SubscriptionState!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateSubscriptionPayload
   * @type Object
   */
  UpdateSubscriptionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The input subscribable entity. */
    subscribable: 'Subscribable',
  },

  /**
   * @name UpdateTeamDiscussionCommentInput
   * @type InputObject
   */
  UpdateTeamDiscussionCommentInput: {
    id: 'ID!',
    body: 'String!',
    bodyVersion: 'String',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateTeamDiscussionCommentPayload
   * @type Object
   */
  UpdateTeamDiscussionCommentPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated comment. */
    teamDiscussionComment: 'TeamDiscussionComment',
  },

  /**
   * @name UpdateTeamDiscussionInput
   * @type InputObject
   */
  UpdateTeamDiscussionInput: {
    id: 'ID!',
    title: 'String',
    body: 'String',
    bodyVersion: 'String',
    pinned: 'Boolean',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateTeamDiscussionPayload
   * @type Object
   */
  UpdateTeamDiscussionPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** The updated discussion. */
    teamDiscussion: 'TeamDiscussion',
  },

  /**
   * @name UpdateTopicsInput
   * @type InputObject
   */
  UpdateTopicsInput: {
    repositoryId: 'ID!',
    topicNames: '[String!]!',
    clientMutationId: 'String',
  },

  /**
   * @name UpdateTopicsPayload
   * @type Object
   */
  UpdateTopicsPayload: {
    /** A unique identifier for the client performing the mutation. */
    clientMutationId: 'String',
    /** Names of the provided topics that are not valid. */
    invalidTopicNames: '[String!]',
    /** The updated repository. */
    repository: 'Repository',
  },

  /**
   * @name User
   * @type Object
   * @implements Node, Actor, PackageOwner, ProjectOwner, RepositoryOwner, UniformResourceLocatable, ProfileOwner, Sponsorable
   */
  User: {
    /** Determine if this repository owner has any items that can be pinned to their profile. */
    anyPinnableItems: ['Boolean!', { type: 'PinnableItemType' }],
    /** A URL pointing to the user's public avatar. */
    avatarUrl: ['URI!', { size: 'Int' }],
    /** The user's public profile bio. */
    bio: 'String',
    /** The user's public profile bio as HTML. */
    bioHTML: 'HTML!',
    /** A list of commit comments made by this user. */
    commitComments: [
      'CommitCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** The user's public profile company. */
    company: 'String',
    /** The user's public profile company as HTML. */
    companyHTML: 'HTML!',
    /** The collection of contributions this user has made to different repositories. */
    contributionsCollection: [
      'ContributionsCollection!',
      { organizationID: 'ID', from: 'DateTime', to: 'DateTime' },
    ],
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the primary key from the database. */
    databaseId: 'Int',
    /** The user's publicly visible profile email. */
    email: 'String!',
    /** A list of users the given user is followed by. */
    followers: [
      'FollowerConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of users the given user is following. */
    following: [
      'FollowingConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** Find gist by repo name. */
    gist: ['Gist', { name: 'String!' }],
    /** A list of gist comments made by this user. */
    gistComments: [
      'GistCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of the Gists the user has created. */
    gists: [
      'GistConnection!',
      {
        privacy: 'GistPrivacy',
        orderBy: 'GistOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The hovercard information for this user in a given context */
    hovercard: ['Hovercard!', { primarySubjectId: 'ID' }],
    id: 'ID!',
    /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
    isBountyHunter: 'Boolean!',
    /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
    isCampusExpert: 'Boolean!',
    /** Whether or not this user is a GitHub Developer Program member. */
    isDeveloperProgramMember: 'Boolean!',
    /** Whether or not this user is a GitHub employee. */
    isEmployee: 'Boolean!',
    /** Whether or not the user has marked themselves as for hire. */
    isHireable: 'Boolean!',
    /** Whether or not this user is a site administrator. */
    isSiteAdmin: 'Boolean!',
    /** Whether or not this user is the viewing user. */
    isViewer: 'Boolean!',
    /** A list of issue comments made by this user. */
    issueComments: [
      'IssueCommentConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of issues associated with this user. */
    issues: [
      'IssueConnection!',
      {
        orderBy: 'IssueOrder',
        labels: '[String!]',
        states: '[IssueState!]',
        filterBy: 'IssueFilters',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Showcases a selection of repositories and gists that the profile owner has either curated or that have been selected automatically based on popularity. */
    itemShowcase: 'ProfileItemShowcase!',
    /** The user's public profile location. */
    location: 'String',
    /** The username used to login. */
    login: 'String!',
    /** The user's public profile name. */
    name: 'String',
    /** Find an organization by its login that the user belongs to. */
    organization: ['Organization', { login: 'String!' }],
    /** Verified email addresses that match verified domains for a specified organization the user is a member of. */
    organizationVerifiedDomainEmails: ['[String!]!', { login: 'String!' }],
    /** A list of organizations the user belongs to. */
    organizations: [
      'OrganizationConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of packages under the owner. */
    packages: [
      'PackageConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        names: '[String]',
        repositoryId: 'ID',
        packageType: 'PackageType',
        orderBy: 'PackageOrder',
      },
    ],
    /** A list of repositories and gists this profile owner can pin to their profile. */
    pinnableItems: [
      'PinnableItemConnection!',
      {
        types: '[PinnableItemType!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of repositories and gists this profile owner has pinned to their profile */
    pinnedItems: [
      'PinnableItemConnection!',
      {
        types: '[PinnableItemType!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Returns how many more items this profile owner can pin to their profile. */
    pinnedItemsRemaining: 'Int!',
    /** Find project by number. */
    project: ['Project', { number: 'Int!' }],
    /** A list of projects under the owner. */
    projects: [
      'ProjectConnection!',
      {
        orderBy: 'ProjectOrder',
        search: 'String',
        states: '[ProjectState!]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** The HTTP path listing user's projects */
    projectsResourcePath: 'URI!',
    /** The HTTP URL listing user's projects */
    projectsUrl: 'URI!',
    /** A list of public keys associated with this user. */
    publicKeys: [
      'PublicKeyConnection!',
      { after: 'String', before: 'String', first: 'Int', last: 'Int' },
    ],
    /** A list of pull requests associated with this user. */
    pullRequests: [
      'PullRequestConnection!',
      {
        states: '[PullRequestState!]',
        labels: '[String!]',
        headRefName: 'String',
        baseRefName: 'String',
        orderBy: 'IssueOrder',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A list of repositories that the user owns. */
    repositories: [
      'RepositoryConnection!',
      {
        privacy: 'RepositoryPrivacy',
        orderBy: 'RepositoryOrder',
        affiliations: '[RepositoryAffiliation]',
        ownerAffiliations: '[RepositoryAffiliation]',
        isLocked: 'Boolean',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        isFork: 'Boolean',
      },
    ],
    /** A list of repositories that the user recently contributed to. */
    repositoriesContributedTo: [
      'RepositoryConnection!',
      {
        privacy: 'RepositoryPrivacy',
        orderBy: 'RepositoryOrder',
        isLocked: 'Boolean',
        includeUserRepositories: 'Boolean',
        contributionTypes: '[RepositoryContributionType]',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** Find Repository. */
    repository: ['Repository', { name: 'String!' }],
    /** The HTTP path for this user */
    resourcePath: 'URI!',
    /** Replies this user has saved */
    savedReplies: [
      'SavedReplyConnection',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'SavedReplyOrder',
      },
    ],
    /** The GitHub Sponsors listing for this user. */
    sponsorsListing: 'SponsorsListing',
    /** This object's sponsorships as the maintainer. */
    sponsorshipsAsMaintainer: [
      'SponsorshipConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        includePrivate: 'Boolean',
        orderBy: 'SponsorshipOrder',
      },
    ],
    /** This object's sponsorships as the sponsor. */
    sponsorshipsAsSponsor: [
      'SponsorshipConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'SponsorshipOrder',
      },
    ],
    /** Repositories the user has starred. */
    starredRepositories: [
      'StarredRepositoryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        ownedByViewer: 'Boolean',
        orderBy: 'StarOrder',
      },
    ],
    /** The user's description of what they're currently doing. */
    status: 'UserStatus',
    /**
     * Repositories the user has contributed to, ordered by contribution rank, plus repositories the user has created
     *
     */
    topRepositories: [
      'RepositoryConnection!',
      {
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
        orderBy: 'RepositoryOrder!',
        since: 'DateTime',
      },
    ],
    /** The user's Twitter username. */
    twitterUsername: 'String',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The HTTP URL for this user */
    url: 'URI!',
    /** Can the viewer pin repositories and gists to the profile? */
    viewerCanChangePinnedItems: 'Boolean!',
    /** Can the current viewer create new projects on this owner. */
    viewerCanCreateProjects: 'Boolean!',
    /** Whether or not the viewer is able to follow the user. */
    viewerCanFollow: 'Boolean!',
    /** Whether or not this user is followed by the viewer. */
    viewerIsFollowing: 'Boolean!',
    /** A list of repositories the given user is watching. */
    watching: [
      'RepositoryConnection!',
      {
        privacy: 'RepositoryPrivacy',
        orderBy: 'RepositoryOrder',
        affiliations: '[RepositoryAffiliation]',
        ownerAffiliations: '[RepositoryAffiliation]',
        isLocked: 'Boolean',
        after: 'String',
        before: 'String',
        first: 'Int',
        last: 'Int',
      },
    ],
    /** A URL pointing to the user's public website/blog. */
    websiteUrl: 'URI',
  },

  UserBlockDuration,

  /**
   * @name UserBlockedEvent
   * @type Object
   * @implements Node
   */
  UserBlockedEvent: {
    /** Identifies the actor who performed the event. */
    actor: 'Actor',
    /** Number of days that the user was blocked for. */
    blockDuration: 'UserBlockDuration!',
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    id: 'ID!',
    /** The user who was blocked. */
    subject: 'User',
  },

  /**
   * @name UserConnection
   * @type Object
   */
  UserConnection: {
    /** A list of edges. */
    edges: '[UserEdge]',
    /** A list of nodes. */
    nodes: '[User]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name UserContentEdit
   * @type Object
   * @implements Node
   */
  UserContentEdit: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** Identifies the date and time when the object was deleted. */
    deletedAt: 'DateTime',
    /** The actor who deleted this content */
    deletedBy: 'Actor',
    /** A summary of the changes for this edit */
    diff: 'String',
    /** When this content was edited */
    editedAt: 'DateTime!',
    /** The actor who edited this content */
    editor: 'Actor',
    id: 'ID!',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
  },

  /**
   * @name UserContentEditConnection
   * @type Object
   */
  UserContentEditConnection: {
    /** A list of edges. */
    edges: '[UserContentEditEdge]',
    /** A list of nodes. */
    nodes: '[UserContentEdit]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name UserContentEditEdge
   * @type Object
   */
  UserContentEditEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'UserContentEdit',
  },

  /**
   * @name UserEdge
   * @type Object
   */
  UserEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'User',
  },

  /**
   * @name UserEmailMetadata
   * @type Object
   */
  UserEmailMetadata: {
    /** Boolean to identify primary emails */
    primary: 'Boolean',
    /** Type of email */
    type: 'String',
    /** Email id */
    value: 'String!',
  },

  /**
   * @name UserStatus
   * @type Object
   * @implements Node
   */
  UserStatus: {
    /** Identifies the date and time when the object was created. */
    createdAt: 'DateTime!',
    /** An emoji summarizing the user's status. */
    emoji: 'String',
    /** The status emoji as HTML. */
    emojiHTML: 'HTML',
    /** If set, the status will not be shown after this date. */
    expiresAt: 'DateTime',
    /** ID of the object. */
    id: 'ID!',
    /** Whether this status indicates the user is not fully available on GitHub. */
    indicatesLimitedAvailability: 'Boolean!',
    /** A brief message describing what the user is doing. */
    message: 'String',
    /** The organization whose members can see this status. If null, this status is publicly visible. */
    organization: 'Organization',
    /** Identifies the date and time when the object was last updated. */
    updatedAt: 'DateTime!',
    /** The user who has this status. */
    user: 'User!',
  },

  /**
   * @name UserStatusConnection
   * @type Object
   */
  UserStatusConnection: {
    /** A list of edges. */
    edges: '[UserStatusEdge]',
    /** A list of nodes. */
    nodes: '[UserStatus]',
    /** Information to aid in pagination. */
    pageInfo: 'PageInfo!',
    /** Identifies the total count of items in the connection. */
    totalCount: 'Int!',
  },

  /**
   * @name UserStatusEdge
   * @type Object
   */
  UserStatusEdge: {
    /** A cursor for use in pagination. */
    cursor: 'String!',
    /** The item at the end of the edge. */
    node: 'UserStatus',
  },

  /**
   * @name UserStatusOrder
   * @type InputObject
   */
  UserStatusOrder: {
    field: 'UserStatusOrderField!',
    direction: 'OrderDirection!',
  },

  UserStatusOrderField,

  /**
   * @name ViewerHovercardContext
   * @type Object
   * @implements HovercardContext
   */
  ViewerHovercardContext: {
    /** A string describing this context */
    message: 'String!',
    /** An octicon to accompany this context */
    octicon: 'String!',
    /** Identifies the user who is related to this context. */
    viewer: 'User!',
  },

  /**
   * @name __Directive
   * @type Object
   */
  __Directive: {
    args: '[__InputValue!]!',
    description: 'String',
    locations: '[__DirectiveLocation!]!',
    name: 'String!',
    /** @deprecated Use `locations`. */
    onField: 'Boolean!',
    /** @deprecated Use `locations`. */
    onFragment: 'Boolean!',
    /** @deprecated Use `locations`. */
    onOperation: 'Boolean!',
  },

  __DirectiveLocation,

  /**
   * @name __EnumValue
   * @type Object
   */
  __EnumValue: {
    deprecationReason: 'String',
    description: 'String',
    isDeprecated: 'Boolean!',
    name: 'String!',
  },

  /**
   * @name __Field
   * @type Object
   */
  __Field: {
    args: '[__InputValue!]!',
    deprecationReason: 'String',
    description: 'String',
    isDeprecated: 'Boolean!',
    name: 'String!',
    type: '__Type!',
  },

  /**
   * @name __InputValue
   * @type Object
   */
  __InputValue: {
    /** A GraphQL-formatted string representing the default value for this input value. */
    defaultValue: 'String',
    description: 'String',
    name: 'String!',
    type: '__Type!',
  },

  /**
   * @name __Schema
   * @type Object
   */
  __Schema: {
    /** A list of all directives supported by this server. */
    directives: '[__Directive!]!',
    /** If this server supports mutation, the type that mutation operations will be rooted at. */
    mutationType: '__Type',
    /** The type that query operations will be rooted at. */
    queryType: '__Type!',
    /** If this server support subscription, the type that subscription operations will be rooted at. */
    subscriptionType: '__Type',
    /** A list of all types supported by this server. */
    types: '[__Type!]!',
  },

  /**
   * @name __Type
   * @type Object
   */
  __Type: {
    description: 'String',
    enumValues: ['[__EnumValue!]', { includeDeprecated: 'Boolean' }],
    fields: ['[__Field!]', { includeDeprecated: 'Boolean' }],
    inputFields: '[__InputValue!]',
    interfaces: '[__Type!]',
    kind: '__TypeKind!',
    name: 'String',
    ofType: '__Type',
    possibleTypes: '[__Type!]',
  },

  __TypeKind,
} as const)
