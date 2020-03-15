import * as extensions from '../extensions'
import {
  TypeData,
  FieldsType,
  ScalarType,
  FieldsTypeArg,
  EnumType,
} from 'gqless'

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any

/**
 * @name GraphQLHubAPI
 * @type OBJECT
 */
type t_GraphQLHubAPI = FieldsType<
  {
    __typename: t_String<'GraphQLHubAPI'>

    /**
     * About GraphQLHub
     */
    graphQLHub: t_String | null
    hn: t_HackerNewsAPI | null
    hn2: t_HackerNewsAPIV2 | null
    reddit: t_RedditAPI | null
    keyValue: t_KeyValueAPI | null
    github: t_GithubAPI | null
    twitter: t_TwitterAPI | null
    giphy: t_GiphyAPI | null
  },
  Extension<'GraphQLHubAPI'>
>

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<'String'>>

/**
 * @name HackerNewsAPI
 * @type OBJECT
 */
type t_HackerNewsAPI = FieldsType<
  {
    __typename: t_String<'HackerNewsAPI'>
    item: FieldsTypeArg<{ id: number }, t_HackerNewsItem | null>
    user: FieldsTypeArg<{ id: string }, t_HackerNewsUser | null>

    /**
     * Up to 500 of the top stories
     */
    topStories: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >

    /**
     * Up to 500 of the newest stories
     */
    newStories: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >

    /**
     * Up to 200 of the Show HN stories
     */
    showStories: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >

    /**
     * Up to 200 of the Ask HN stories
     */
    askStories: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >

    /**
     * Up to 200 of the Job stores
     */
    jobStories: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >

    /**
     * Return list of stories
     */
    stories: FieldsTypeArg<
      { limit?: number | null; offset?: number | null; storyType: string },
      (t_HackerNewsItem | null)[] | null
    >
  },
  Extension<'HackerNewsAPI'>
>

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<'Int'>>

/**
 * @name HackerNewsItem
 * @type OBJECT
 */
type t_HackerNewsItem = FieldsType<
  {
    __typename: t_String<'HackerNewsItem'>

    /**
     * The item's unique id.
     */
    id: t_String

    /**
     * if the item is deleted
     */
    deleted: t_Boolean | null

    /**
     * The type of item. One of "job", "story", "comment", "poll", or "pollopt".
     */
    type: t_ItemType

    /**
     * The item's author.
     */
    by: t_HackerNewsUser

    /**
     * Creation date of the item, in Unix Time.
     */
    time: t_Int

    /**
     * Creation date of the item, in ISO8601
     */
    timeISO: t_String

    /**
     * The comment, story or poll text. HTML.
     */
    text: t_String | null

    /**
     * if the item is dead
     */
    dead: t_Boolean | null

    /**
     * The URL of the story.
     */
    url: t_String | null

    /**
     * The story's score, or the votes for a pollopt.
     */
    score: t_Int | null

    /**
     * The title of the story, poll or job.
     */
    title: t_String | null

    /**
     * The item's comments, in ranked display order.
     */
    kids: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >

    /**
     * The item's parent. For comments, either another comment or the relevant story. For pollopts, the relevant poll.
     */
    parent: t_HackerNewsItem | null

    /**
     * A list of related pollopts, in display order.
     */
    parts: (t_HackerNewsItem | null)[] | null

    /**
     * In the case of stories or polls, the total comment count.
     */
    descendants: t_Int | null
  },
  Extension<'HackerNewsItem'>
>

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<'Boolean'>
>

/**
 * @name ItemType
 * @type ENUM
 */
type t_ItemType = EnumType<'job' | 'story' | 'comment' | 'poll' | 'pollopt'>

/**
 * @name HackerNewsUser
 * @type OBJECT
 */
type t_HackerNewsUser = FieldsType<
  {
    __typename: t_String<'HackerNewsUser'>

    /**
     * The user's unique username. Case-sensitive. Required.
     */
    id: t_String

    /**
     * Delay in minutes between a comment's creation and its visibility to other users.
     */
    delay: t_Int

    /**
     * Creation date of the user, in Unix Time.
     */
    created: t_Int

    /**
     * Creation date of the user, in ISO8601
     */
    createdISO: t_String

    /**
     * The user's optional self-description. HTML.
     */
    about: t_String | null

    /**
     * List of the user's stories, polls and comments.
     */
    submitted: FieldsTypeArg<
      { limit?: number | null; offset?: number | null },
      (t_HackerNewsItem | null)[] | null
    >
  },
  Extension<'HackerNewsUser'>
>

/**
 * @name HackerNewsAPIV2
 * @type OBJECT
 */
type t_HackerNewsAPIV2 = FieldsType<
  {
    __typename: t_String<'HackerNewsAPIV2'>

    /**
     * Fetches an object given its ID
     */
    node: FieldsTypeArg<{ id: string }, t_Node | null>

    /**
     * To ensure Node IDs are globally unique, GraphQLHub coerces IDs returned by the HN API. Use this field to get nodes via normal HN IDs
     */
    nodeFromHnId: FieldsTypeArg<{ id: string; isUserId: boolean }, t_Node>
  },
  Extension<'HackerNewsAPIV2'>
>

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<'ID'>>

/**
 * @name Node
 * @type INTERFACE
 */
type t_Node =
  | t_HackerNewsV2Story
  | t_HackerNewsV2Job
  | t_HackerNewsV2Poll
  | t_HackerNewsV2Comment
  | t_HackerNewsV2PollPart
  | t_HackerNewsV2User

/**
 * @name HackerNewsV2Story
 * @type OBJECT
 * @implements Node
 */
type t_HackerNewsV2Story = FieldsType<
  {
    __typename: t_String<'HackerNewsV2Story'>

    /**
     * The ID of an object
     */
    id: t_ID

    /**
     * The item's unique id.
     */
    hnId: t_String

    /**
     * The item's author.
     */
    by: t_HackerNewsV2User

    /**
     * In the case of stories or polls, the total comment count.
     */
    descendants: t_Int | null

    /**
     * The story's score, or the votes for a pollopt.
     */
    score: t_Int | null

    /**
     * Creation date of the item, in Unix Time.
     */
    time: t_Int

    /**
     * Creation date of the item, in ISO8601
     */
    timeISO: t_String

    /**
     * The title of the story, poll or job.
     */
    title: t_String | null

    /**
     * The URL of the story.
     */
    url: t_String | null

    /**
     * The comment, story or poll text. HTML.
     */
    text: t_String | null

    /**
     * The item's comments, in ranked display order.
     */
    kids: FieldsTypeArg<
      {
        after?: string | null
        first?: number | null
        before?: string | null
        last?: number | null
      },
      t_HackerNewsV2CommentConnection | null
    >

    /**
     * if the item is deleted
     */
    deleted: t_Boolean | null

    /**
     * if the item is dead
     */
    dead: t_Boolean | null
  },
  Extension<'HackerNewsV2Story'>
>

/**
 * @name HackerNewsV2User
 * @type OBJECT
 * @implements Node
 */
type t_HackerNewsV2User = FieldsType<
  {
    __typename: t_String<'HackerNewsV2User'>

    /**
     * The ID of an object
     */
    id: t_ID

    /**
     * The item's unique id.
     */
    hnId: t_String

    /**
     * Delay in minutes between a comment's creation and its visibility to other users.
     */
    delay: t_Int | null

    /**
     * Creation date of the user, in Unix Time.
     */
    created: t_Int | null

    /**
     * Creation date of the user, in ISO8601
     */
    createdISO: t_String | null

    /**
     * The user's optional self-description. HTML.
     */
    about: t_String | null

    /**
     * List of the user's stories, polls and comments.
     */
    submitted: FieldsTypeArg<
      {
        after?: string | null
        first?: number | null
        before?: string | null
        last?: number | null
      },
      t_NodeConnection | null
    >
  },
  Extension<'HackerNewsV2User'>
>

/**
 * @name NodeConnection
 * @type OBJECT
 */
type t_NodeConnection = FieldsType<
  {
    __typename: t_String<'NodeConnection'>

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Information to aid in pagination.
     */
    edges: (t_NodeEdge | null)[] | null
  },
  Extension<'NodeConnection'>
>

/**
 * @name PageInfo
 * @type OBJECT
 */
type t_PageInfo = FieldsType<
  {
    __typename: t_String<'PageInfo'>

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

    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: t_String | null
  },
  Extension<'PageInfo'>
>

/**
 * @name NodeEdge
 * @type OBJECT
 */
type t_NodeEdge = FieldsType<
  {
    __typename: t_String<'NodeEdge'>

    /**
     * The item at the end of the edge
     */
    node: t_Node | null

    /**
     * A cursor for use in pagination
     */
    cursor: t_String
  },
  Extension<'NodeEdge'>
>

/**
 * @name HackerNewsV2CommentConnection
 * @type OBJECT
 */
type t_HackerNewsV2CommentConnection = FieldsType<
  {
    __typename: t_String<'HackerNewsV2CommentConnection'>

    /**
     * Information to aid in pagination.
     */
    pageInfo: t_PageInfo

    /**
     * Information to aid in pagination.
     */
    edges: (t_HackerNewsV2CommentEdge | null)[] | null
  },
  Extension<'HackerNewsV2CommentConnection'>
>

/**
 * @name HackerNewsV2CommentEdge
 * @type OBJECT
 */
type t_HackerNewsV2CommentEdge = FieldsType<
  {
    __typename: t_String<'HackerNewsV2CommentEdge'>

    /**
     * The item at the end of the edge
     */
    node: t_HackerNewsV2Comment | null

    /**
     * A cursor for use in pagination
     */
    cursor: t_String
  },
  Extension<'HackerNewsV2CommentEdge'>
>

/**
 * @name HackerNewsV2Comment
 * @type OBJECT
 * @implements Node
 */
type t_HackerNewsV2Comment = FieldsType<
  {
    __typename: t_String<'HackerNewsV2Comment'>

    /**
     * The ID of an object
     */
    id: t_ID

    /**
     * The item's unique id.
     */
    hnId: t_String

    /**
     * The item's author.
     */
    by: t_HackerNewsV2User

    /**
     * The item's parent. For comments, either another comment or the relevant story. For pollopts, the relevant poll.
     */
    parent: t_Node | null

    /**
     * The comment, story or poll text. HTML.
     */
    text: t_String | null

    /**
     * Creation date of the item, in Unix Time.
     */
    time: t_Int

    /**
     * Creation date of the item, in ISO8601
     */
    timeISO: t_String

    /**
     * The item's comments, in ranked display order.
     */
    kids: FieldsTypeArg<
      {
        after?: string | null
        first?: number | null
        before?: string | null
        last?: number | null
      },
      t_HackerNewsV2CommentConnection | null
    >

    /**
     * if the item is deleted
     */
    deleted: t_Boolean | null

    /**
     * if the item is dead
     */
    dead: t_Boolean | null
  },
  Extension<'HackerNewsV2Comment'>
>

/**
 * @name HackerNewsV2Job
 * @type OBJECT
 * @implements Node
 */
type t_HackerNewsV2Job = FieldsType<
  {
    __typename: t_String<'HackerNewsV2Job'>

    /**
     * The ID of an object
     */
    id: t_ID

    /**
     * The item's unique id.
     */
    hnId: t_String

    /**
     * The item's author.
     */
    by: t_HackerNewsV2User

    /**
     * The story's score, or the votes for a pollopt.
     */
    score: t_Int | null

    /**
     * The comment, story or poll text. HTML.
     */
    text: t_String | null

    /**
     * Creation date of the item, in Unix Time.
     */
    time: t_Int

    /**
     * Creation date of the item, in ISO8601
     */
    timeISO: t_String

    /**
     * The title of the story, poll or job.
     */
    title: t_String | null

    /**
     * The URL of the story.
     */
    url: t_String | null

    /**
     * if the item is deleted
     */
    deleted: t_Boolean | null

    /**
     * if the item is dead
     */
    dead: t_Boolean | null
  },
  Extension<'HackerNewsV2Job'>
>

/**
 * @name HackerNewsV2Poll
 * @type OBJECT
 * @implements Node
 */
type t_HackerNewsV2Poll = FieldsType<
  {
    __typename: t_String<'HackerNewsV2Poll'>

    /**
     * The ID of an object
     */
    id: t_ID

    /**
     * The item's unique id.
     */
    hnId: t_String

    /**
     * The item's author.
     */
    by: t_HackerNewsV2User

    /**
     * In the case of stories or polls, the total comment count.
     */
    descendants: t_Int | null

    /**
     * The story's score, or the votes for a pollopt.
     */
    score: t_Int | null

    /**
     * Creation date of the item, in Unix Time.
     */
    time: t_Int

    /**
     * Creation date of the item, in ISO8601
     */
    timeISO: t_String

    /**
     * The title of the story, poll or job.
     */
    title: t_String | null

    /**
     * The comment, story or poll text. HTML.
     */
    text: t_String | null

    /**
     * The item's comments, in ranked display order.
     */
    kids: FieldsTypeArg<
      {
        after?: string | null
        first?: number | null
        before?: string | null
        last?: number | null
      },
      t_HackerNewsV2CommentConnection | null
    >

    /**
     * if the item is deleted
     */
    deleted: t_Boolean | null

    /**
     * if the item is dead
     */
    dead: t_Boolean | null

    /**
     * A list of related pollopts, in display order.
     */
    parts: (t_HackerNewsV2PollPart | null)[] | null
  },
  Extension<'HackerNewsV2Poll'>
>

/**
 * @name HackerNewsV2PollPart
 * @type OBJECT
 * @implements Node
 */
type t_HackerNewsV2PollPart = FieldsType<
  {
    __typename: t_String<'HackerNewsV2PollPart'>

    /**
     * The ID of an object
     */
    id: t_ID

    /**
     * The item's unique id.
     */
    hnId: t_String

    /**
     * The item's author.
     */
    by: t_HackerNewsV2User

    /**
     * The story's score, or the votes for a pollopt.
     */
    score: t_Int | null

    /**
     * Creation date of the item, in Unix Time.
     */
    time: t_Int

    /**
     * Creation date of the item, in ISO8601
     */
    timeISO: t_String

    /**
     * The comment, story or poll text. HTML.
     */
    text: t_String | null

    /**
     * The item's parent. For comments, either another comment or the relevant story. For pollopts, the relevant poll.
     */
    parent: t_Node | null

    /**
     * if the item is deleted
     */
    deleted: t_Boolean | null
  },
  Extension<'HackerNewsV2PollPart'>
>

/**
 * @name RedditAPI
 * @type OBJECT
 */
type t_RedditAPI = FieldsType<
  {
    __typename: t_String<'RedditAPI'>
    subreddit: FieldsTypeArg<{ name: string }, t_RedditSubreddit | null>
    user: FieldsTypeArg<{ username: string }, t_RedditUser | null>
  },
  Extension<'RedditAPI'>
>

/**
 * @name RedditSubreddit
 * @type OBJECT
 */
type t_RedditSubreddit = FieldsType<
  {
    __typename: t_String<'RedditSubreddit'>

    /**
     * Name of the subreddit
     */
    name: t_String

    /**
     * The Reddit API fullname of the subreddit
     */
    fullnameId: t_String

    /**
     * Title of the subreddit
     */
    title: t_String

    /**
     * Description of the subreddit
     */
    publicDescription: t_String

    /**
     * Accounts active right now on the subreddit
     */
    accountsActive: t_Int

    /**
     * Number of subscribers to the subreddit
     */
    subscribers: t_Int

    /**
     * Creation date of the subreddit, in Unix Time (UTC)
     */
    created: t_Float

    /**
     * Creation date of the subreddit, in ISO8601
     */
    createdISO: t_String

    /**
     * Hot/"Front Page" listings of the subreddit
     */
    hotListings: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        count?: number | null
        limit?: number | null
      },
      (t_RedditLink | null)[]
    >

    /**
     * Newest listings of the subreddit
     */
    newListings: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        count?: number | null
        limit?: number | null
      },
      (t_RedditLink | null)[]
    >

    /**
     * Rising listings of the subreddit
     */
    risingListings: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        count?: number | null
        limit?: number | null
      },
      (t_RedditLink | null)[]
    >

    /**
     * Controversial listings of the subreddit
     */
    controversialListings: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        count?: number | null
        limit?: number | null
        timeInterval?: TimeInterval | null
      },
      (t_RedditLink | null)[]
    >

    /**
     * Top listings of the subreddit
     */
    topListings: FieldsTypeArg<
      {
        after?: string | null
        before?: string | null
        count?: number | null
        limit?: number | null
        timeInterval?: TimeInterval | null
      },
      (t_RedditLink | null)[]
    >
  },
  Extension<'RedditSubreddit'>
>

/**
 * @name Float
 * @type SCALAR
 */
type t_Float<T extends number = number> = ScalarType<T, Extension<'Float'>>

/**
 * @name RedditLink
 * @type OBJECT
 */
type t_RedditLink = FieldsType<
  {
    __typename: t_String<'RedditLink'>

    /**
     * Title of the link
     */
    title: t_String

    /**
     * The Reddit API fullname of the link
     */
    fullnameId: t_String

    /**
     * Score of the link
     */
    score: t_Int

    /**
     * Number of comments
     */
    numComments: t_Int

    /**
     * URL of the link
     */
    url: t_String

    /**
     * Author of the link
     */
    author: t_RedditUser

    /**
     * Comments on the link
     */
    comments: FieldsTypeArg<
      { depth?: number | null; limit?: number | null },
      (t_RedditComment | null)[]
    >
  },
  Extension<'RedditLink'>
>

/**
 * @name RedditUser
 * @type OBJECT
 */
type t_RedditUser = FieldsType<
  {
    __typename: t_String<'RedditUser'>

    /**
     * The Reddit API fullname of the user
     */
    fullnameId: t_String

    /**
     * The user's unique username.
     */
    username: t_String

    /**
     * Creation date of the user, in Unix Time (UTC)
     */
    created: t_Float

    /**
     * Creation date of the user, in ISO8601
     */
    createdISO: t_String

    /**
     * Karma by links of the user
     */
    linkKarma: t_Int

    /**
     * Karma by comments of the user
     */
    commentKarma: t_Int
  },
  Extension<'RedditUser'>
>

/**
 * @name RedditComment
 * @type OBJECT
 */
type t_RedditComment = FieldsType<
  {
    __typename: t_String<'RedditComment'>

    /**
     * Author of the comment
     */
    author: t_RedditUser

    /**
     * Body of the comment
     */
    body: t_String

    /**
     * Replies to the comment
     */
    replies: FieldsTypeArg<
      { depth?: number | null; limit?: number | null },
      (t_RedditComment | null)[]
    >
  },
  Extension<'RedditComment'>
>

/**
 * @name TimeInterval
 * @type ENUM
 */
type t_TimeInterval = EnumType<
  'hour' | 'day' | 'week' | 'month' | 'year' | 'all'
>

/**
 * @name KeyValueAPI
 * @type OBJECT
 */
type t_KeyValueAPI = FieldsType<
  {
    __typename: t_String<'KeyValueAPI'>
    getValue: FieldsTypeArg<{ id: string }, t_KeyValueItem | null>
  },
  Extension<'KeyValueAPI'>
>

/**
 * @name KeyValueItem
 * @type OBJECT
 */
type t_KeyValueItem = FieldsType<
  {
    __typename: t_String<'KeyValueItem'>

    /**
     * The item's unique id.
     */
    id: t_String

    /**
     * The item's value.
     */
    value: t_String | null
  },
  Extension<'KeyValueItem'>
>

/**
 * @name GithubAPI
 * @type OBJECT
 */
type t_GithubAPI = FieldsType<
  {
    __typename: t_String<'GithubAPI'>
    user: FieldsTypeArg<{ username: string }, t_GithubUser | null>
    repo: FieldsTypeArg<
      { name: string; ownerUsername: string },
      t_GithubRepo | null
    >
  },
  Extension<'GithubAPI'>
>

/**
 * @name GithubUser
 * @type OBJECT
 */
type t_GithubUser = FieldsType<
  {
    __typename: t_String<'GithubUser'>
    login: t_String | null
    id: t_Int | null
    company: t_String | null
    avatar_url: t_String | null
    repos: (t_GithubRepo | null)[] | null
  },
  Extension<'GithubUser'>
>

/**
 * @name GithubRepo
 * @type OBJECT
 */
type t_GithubRepo = FieldsType<
  {
    __typename: t_String<'GithubRepo'>
    id: t_Int | null
    name: t_String | null
    commits: FieldsTypeArg<
      { limit?: number | null },
      (t_GithubCommit | null)[] | null
    >
    issues: FieldsTypeArg<
      { limit?: number | null },
      (t_GithubIssue | null)[] | null
    >
    branches: FieldsTypeArg<
      { limit?: number | null },
      (t_GithubBranch | null)[] | null
    >
    owner: t_GithubUser | null
  },
  Extension<'GithubRepo'>
>

/**
 * @name GithubCommit
 * @type OBJECT
 */
type t_GithubCommit = FieldsType<
  {
    __typename: t_String<'GithubCommit'>
    sha: t_String | null
    author: t_UserOrCommitAuthor | null
    message: t_String | null
    date: t_String | null
    status: (t_GithubStatus | null)[] | null
    tree: t_GithubTree | null
  },
  Extension<'GithubCommit'>
>

/**
 * @name UserOrCommitAuthor
 * @type UNION
 */
type t_UserOrCommitAuthor = t_GithubCommitAuthor | t_GithubUser

/**
 * @name GithubCommitAuthor
 * @type OBJECT
 */
type t_GithubCommitAuthor = FieldsType<
  {
    __typename: t_String<'GithubCommitAuthor'>
    email: t_String | null
    name: t_String | null
  },
  Extension<'GithubCommitAuthor'>
>

/**
 * @name GithubStatus
 * @type OBJECT
 */
type t_GithubStatus = FieldsType<
  {
    __typename: t_String<'GithubStatus'>
    state: t_String | null
    description: t_String | null
    target_url: t_String | null
    context: t_String | null
    updated_at: t_String | null
  },
  Extension<'GithubStatus'>
>

/**
 * @name GithubTree
 * @type OBJECT
 */
type t_GithubTree = FieldsType<
  {
    __typename: t_String<'GithubTree'>
    entries: (t_GithubTreeEntry | null)[] | null
  },
  Extension<'GithubTree'>
>

/**
 * @name GithubTreeEntry
 * @type OBJECT
 */
type t_GithubTreeEntry = FieldsType<
  {
    __typename: t_String<'GithubTreeEntry'>
    path: t_String | null
    last_commit: t_GithubCommit | null
  },
  Extension<'GithubTreeEntry'>
>

/**
 * @name GithubIssue
 * @type OBJECT
 */
type t_GithubIssue = FieldsType<
  {
    __typename: t_String<'GithubIssue'>
    id: t_Int | null
    state: t_String | null
    title: t_String | null
    body: t_String | null
    user: t_GithubUser | null
    assignee: t_GithubUser | null
    closed_by: t_GithubUser | null
    labels: (t_GithubIssueLabelType | null)[] | null
    commentCount: t_Int | null
    comments: (t_GithubIssueCommentType | null)[] | null
  },
  Extension<'GithubIssue'>
>

/**
 * @name GithubIssueLabelType
 * @type OBJECT
 */
type t_GithubIssueLabelType = FieldsType<
  {
    __typename: t_String<'GithubIssueLabelType'>
    url: t_String | null
    name: t_String | null
    color: t_String | null
  },
  Extension<'GithubIssueLabelType'>
>

/**
 * @name GithubIssueCommentType
 * @type OBJECT
 */
type t_GithubIssueCommentType = FieldsType<
  {
    __typename: t_String<'GithubIssueCommentType'>
    id: t_Int | null
    body: t_String | null
    user: t_GithubUser | null
  },
  Extension<'GithubIssueCommentType'>
>

/**
 * @name GithubBranch
 * @type OBJECT
 */
type t_GithubBranch = FieldsType<
  {
    __typename: t_String<'GithubBranch'>
    name: t_String | null
    lastCommit: t_GithubCommit | null
  },
  Extension<'GithubBranch'>
>

/**
 * @name TwitterAPI
 * @type OBJECT
 */
type t_TwitterAPI = FieldsType<
  {
    __typename: t_String<'TwitterAPI'>
    user: FieldsTypeArg<
      { identifier: UserIdentifier; identity: any },
      t_TwitterUser | null
    >
    tweet: FieldsTypeArg<{ id: string }, t_Tweet | null>

    /**
     * Returns a collection of relevant Tweets matching a specified query.
     */
    search: FieldsTypeArg<
      { q: string; count?: number | null; result_type?: SearchReponse | null },
      (t_Tweet | null)[] | null
    >
  },
  Extension<'TwitterAPI'>
>

/**
 * @name UserIdentifier
 * @type ENUM
 */
type t_UserIdentifier = EnumType<'id' | 'name'>

/**
 * @name UserIdentity
 * @type SCALAR
 */
type t_UserIdentity<T extends any = any> = ScalarType<
  T,
  Extension<'UserIdentity'>
>

/**
 * @name TwitterUser
 * @type OBJECT
 */
type t_TwitterUser = FieldsType<
  {
    __typename: t_String<'TwitterUser'>
    created_at: t_String | null
    description: t_String | null
    id: t_ID | null
    screen_name: t_String | null
    name: t_String | null
    profile_image_url: t_String | null
    url: t_String | null
    tweets_count: t_Int | null
    followers_count: t_Int | null

    /**
     * Get a list of tweets for current user
     */
    tweets: FieldsTypeArg<{ limit?: number | null }, (t_Tweet | null)[] | null>
  },
  Extension<'TwitterUser'>
>

/**
 * @name Tweet
 * @type OBJECT
 */
type t_Tweet = FieldsType<
  {
    __typename: t_String<'Tweet'>
    id: t_ID | null
    created_at: t_String | null
    text: t_String | null
    retweet_count: t_Int | null
    user: t_TwitterUser | null

    /**
     * Get a list of retweets
     */
    retweets: FieldsTypeArg<
      { limit?: number | null },
      (t_Retweet | null)[] | null
    >
  },
  Extension<'Tweet'>
>

/**
 * @name Retweet
 * @type OBJECT
 */
type t_Retweet = FieldsType<
  {
    __typename: t_String<'Retweet'>
    id: t_ID | null
    created_at: t_String | null
    in_reply_to_tweet_id: t_String | null
    in_reply_to_user_id: t_Int | null
    in_reply_to_screen_name: t_String | null
    retweeted_status: t_Tweet | null
    user: t_TwitterUser | null
  },
  Extension<'Retweet'>
>

/**
 * @name SearchReponse
 * @type ENUM
 */
type t_SearchReponse = EnumType<'mixed' | 'recent' | 'popular'>

/**
 * @name GiphyAPI
 * @type OBJECT
 */
type t_GiphyAPI = FieldsType<
  {
    __typename: t_String<'GiphyAPI'>
    gif: FieldsTypeArg<{ id: string }, t_GiphyGIFData | null>
    search: FieldsTypeArg<
      {
        query: string
        limit?: number | null
        offset?: number | null
        rating?: GiphyRatingType | null
      },
      (t_GiphyGIFData | null)[] | null
    >
    random: FieldsTypeArg<
      { tag?: string | null; rating?: GiphyRatingType | null },
      t_GiphyGIFData | null
    >
  },
  Extension<'GiphyAPI'>
>

/**
 * @name GiphyGIFData
 * @type OBJECT
 */
type t_GiphyGIFData = FieldsType<
  {
    __typename: t_String<'GiphyGIFData'>

    /**
     * The item's unique id.
     */
    id: t_String
    url: t_String
    images: t_GiphyGIFImages
  },
  Extension<'GiphyGIFData'>
>

/**
 * @name GiphyGIFImages
 * @type OBJECT
 */
type t_GiphyGIFImages = FieldsType<
  {
    __typename: t_String<'GiphyGIFImages'>
    fixed_height: t_GiphyGIFImageDataFixedHeight | null
    fixed_height_still: t_GiphyGIFImageDataFixedHeightStill | null
    fixed_height_downsampled: t_GiphyGIFImageDataFixedHeightDownsample | null
    fixed_width: t_GiphyGIFImageDataFixedWidth | null
    fixed_width_still: t_GiphyGIFImageDataFixedWidthStill | null
    fixed_width_downsampled: t_GiphyGIFImageDataFixedWidthDownsample | null
    fixed_height_small: t_GiphyGIFImageDataFixedHeightSmall | null
    fixed_height_small_still: t_GiphyGIFImageDataFixedHeightSmallStill | null
    fixed_width_small: t_GiphyGIFImageDataFixedWidthSmall | null
    fixed_width_small_still: t_GiphyGIFImageDataFixedWidthSmallStill | null
    downsized: t_GiphyGIFImageDataDownsized | null
    downsized_still: t_GiphyGIFImageDataDownsizedStill | null
    downsized_large: t_GiphyGIFImageDataDownsizedLarge | null
    original: t_GiphyGIFImageDataOriginal | null
    original_still: t_GiphyGIFImageDataOriginalStill | null
    looping: t_GiphyGIFImageDataLooping | null
  },
  Extension<'GiphyGIFImages'>
>

/**
 * @name GiphyGIFImageDataFixedHeight
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedHeight = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedHeight'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    mp4: t_String
    mp4_size: t_String
    webp: t_String
    webp_size: t_String
  },
  Extension<'GiphyGIFImageDataFixedHeight'>
>

/**
 * @name GiphyGIFImageDataFixedHeightStill
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedHeightStill = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedHeightStill'>
    url: t_String
    width: t_String
    height: t_String
  },
  Extension<'GiphyGIFImageDataFixedHeightStill'>
>

/**
 * @name GiphyGIFImageDataFixedHeightDownsample
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedHeightDownsample = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedHeightDownsample'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    webp: t_String
    webp_size: t_String
  },
  Extension<'GiphyGIFImageDataFixedHeightDownsample'>
>

/**
 * @name GiphyGIFImageDataFixedWidth
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedWidth = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedWidth'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    mp4: t_String
    mp4_size: t_String
    webp: t_String
    webp_size: t_String
  },
  Extension<'GiphyGIFImageDataFixedWidth'>
>

/**
 * @name GiphyGIFImageDataFixedWidthStill
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedWidthStill = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedWidthStill'>
    url: t_String
    width: t_String
    height: t_String
  },
  Extension<'GiphyGIFImageDataFixedWidthStill'>
>

/**
 * @name GiphyGIFImageDataFixedWidthDownsample
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedWidthDownsample = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedWidthDownsample'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    webp: t_String
    webp_size: t_String
  },
  Extension<'GiphyGIFImageDataFixedWidthDownsample'>
>

/**
 * @name GiphyGIFImageDataFixedHeightSmall
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedHeightSmall = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedHeightSmall'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    webp: t_String
    webp_size: t_String
  },
  Extension<'GiphyGIFImageDataFixedHeightSmall'>
>

/**
 * @name GiphyGIFImageDataFixedHeightSmallStill
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedHeightSmallStill = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedHeightSmallStill'>
    url: t_String
    width: t_String
    height: t_String
  },
  Extension<'GiphyGIFImageDataFixedHeightSmallStill'>
>

/**
 * @name GiphyGIFImageDataFixedWidthSmall
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedWidthSmall = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedWidthSmall'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    webp: t_String
    webp_size: t_String
  },
  Extension<'GiphyGIFImageDataFixedWidthSmall'>
>

/**
 * @name GiphyGIFImageDataFixedWidthSmallStill
 * @type OBJECT
 */
type t_GiphyGIFImageDataFixedWidthSmallStill = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataFixedWidthSmallStill'>
    url: t_String
    width: t_String
    height: t_String
  },
  Extension<'GiphyGIFImageDataFixedWidthSmallStill'>
>

/**
 * @name GiphyGIFImageDataDownsized
 * @type OBJECT
 */
type t_GiphyGIFImageDataDownsized = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataDownsized'>
    url: t_String
    width: t_String
    height: t_String
    small: t_String
  },
  Extension<'GiphyGIFImageDataDownsized'>
>

/**
 * @name GiphyGIFImageDataDownsizedStill
 * @type OBJECT
 */
type t_GiphyGIFImageDataDownsizedStill = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataDownsizedStill'>
    url: t_String
    width: t_String
    height: t_String
  },
  Extension<'GiphyGIFImageDataDownsizedStill'>
>

/**
 * @name GiphyGIFImageDataDownsizedLarge
 * @type OBJECT
 */
type t_GiphyGIFImageDataDownsizedLarge = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataDownsizedLarge'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
  },
  Extension<'GiphyGIFImageDataDownsizedLarge'>
>

/**
 * @name GiphyGIFImageDataOriginal
 * @type OBJECT
 */
type t_GiphyGIFImageDataOriginal = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataOriginal'>
    url: t_String
    width: t_String
    height: t_String
    size: t_String
    mp4: t_String
    mp4_size: t_String
    webp: t_String
    webp_size: t_String
    frames: t_String
  },
  Extension<'GiphyGIFImageDataOriginal'>
>

/**
 * @name GiphyGIFImageDataOriginalStill
 * @type OBJECT
 */
type t_GiphyGIFImageDataOriginalStill = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataOriginalStill'>
    url: t_String
    width: t_String
    height: t_String
  },
  Extension<'GiphyGIFImageDataOriginalStill'>
>

/**
 * @name GiphyGIFImageDataLooping
 * @type OBJECT
 */
type t_GiphyGIFImageDataLooping = FieldsType<
  {
    __typename: t_String<'GiphyGIFImageDataLooping'>
    mp4: t_String
  },
  Extension<'GiphyGIFImageDataLooping'>
>

/**
 * @name GiphyRatingType
 * @type ENUM
 */
type t_GiphyRatingType = EnumType<'y' | 'g' | 'pg' | 'pg13' | 'r'>

/**
 * @name GraphQLHubMutationAPI
 * @type OBJECT
 */
type t_GraphQLHubMutationAPI = FieldsType<
  {
    __typename: t_String<'GraphQLHubMutationAPI'>
    keyValue_setValue: FieldsTypeArg<
      { input: SetValueForKeyInput },
      t_SetValueForKeyPayload | null
    >
  },
  Extension<'GraphQLHubMutationAPI'>
>

/**
 * @name SetValueForKeyInput
 * @type INPUT_OBJECT
 */
export type SetValueForKeyInput = {
  id: string
  value: string
  clientMutationId: string
}

/**
 * @name SetValueForKeyPayload
 * @type OBJECT
 */
type t_SetValueForKeyPayload = FieldsType<
  {
    __typename: t_String<'SetValueForKeyPayload'>
    item: t_KeyValueItem | null
    clientMutationId: t_String
  },
  Extension<'SetValueForKeyPayload'>
>

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<'__Schema'>

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[]

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: t___Type | null

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: t___Type | null

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[]
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
    kind: t___TypeKind
    name: t_String | null
    description: t_String | null
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >
    interfaces: t___Type[] | null
    possibleTypes: t___Type[] | null
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >
    inputFields: t___InputValue[] | null
    ofType: t___Type | null
  },
  Extension<'__Type'>
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
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<'__Field'>
    name: t_String
    description: t_String | null
    args: t___InputValue[]
    type: t___Type
    isDeprecated: t_Boolean
    deprecationReason: t_String | null
  },
  Extension<'__Field'>
>

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<'__InputValue'>
    name: t_String
    description: t_String | null
    type: t___Type

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: t_String | null
  },
  Extension<'__InputValue'>
>

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<'__EnumValue'>
    name: t_String
    description: t_String | null
    isDeprecated: t_Boolean
    deprecationReason: t_String | null
  },
  Extension<'__EnumValue'>
>

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<'__Directive'>
    name: t_String
    description: t_String | null
    args: t___InputValue[]
    onOperation: t_Boolean
    onFragment: t_Boolean
    onField: t_Boolean
  },
  Extension<'__Directive'>
>

/**
 * @name GraphQLHubAPI
 * @type OBJECT
 */
export type GraphQLHubAPI = TypeData<t_GraphQLHubAPI>

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>

/**
 * @name HackerNewsAPI
 * @type OBJECT
 */
export type HackerNewsAPI = TypeData<t_HackerNewsAPI>

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>

/**
 * @name HackerNewsItem
 * @type OBJECT
 */
export type HackerNewsItem = TypeData<t_HackerNewsItem>

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>

/**
 * @name ItemType
 * @type ENUM
 */
export type ItemType = TypeData<t_ItemType>

/**
 * @name HackerNewsUser
 * @type OBJECT
 */
export type HackerNewsUser = TypeData<t_HackerNewsUser>

/**
 * @name HackerNewsAPIV2
 * @type OBJECT
 */
export type HackerNewsAPIV2 = TypeData<t_HackerNewsAPIV2>

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>

/**
 * @name Node
 * @type INTERFACE
 */
export type Node = TypeData<t_Node>

/**
 * @name HackerNewsV2Story
 * @type OBJECT
 * @implements Node
 */
export type HackerNewsV2Story = TypeData<t_HackerNewsV2Story>

/**
 * @name HackerNewsV2User
 * @type OBJECT
 * @implements Node
 */
export type HackerNewsV2User = TypeData<t_HackerNewsV2User>

/**
 * @name NodeConnection
 * @type OBJECT
 */
export type NodeConnection = TypeData<t_NodeConnection>

/**
 * @name PageInfo
 * @type OBJECT
 */
export type PageInfo = TypeData<t_PageInfo>

/**
 * @name NodeEdge
 * @type OBJECT
 */
export type NodeEdge = TypeData<t_NodeEdge>

/**
 * @name HackerNewsV2CommentConnection
 * @type OBJECT
 */
export type HackerNewsV2CommentConnection = TypeData<
  t_HackerNewsV2CommentConnection
>

/**
 * @name HackerNewsV2CommentEdge
 * @type OBJECT
 */
export type HackerNewsV2CommentEdge = TypeData<t_HackerNewsV2CommentEdge>

/**
 * @name HackerNewsV2Comment
 * @type OBJECT
 * @implements Node
 */
export type HackerNewsV2Comment = TypeData<t_HackerNewsV2Comment>

/**
 * @name HackerNewsV2Job
 * @type OBJECT
 * @implements Node
 */
export type HackerNewsV2Job = TypeData<t_HackerNewsV2Job>

/**
 * @name HackerNewsV2Poll
 * @type OBJECT
 * @implements Node
 */
export type HackerNewsV2Poll = TypeData<t_HackerNewsV2Poll>

/**
 * @name HackerNewsV2PollPart
 * @type OBJECT
 * @implements Node
 */
export type HackerNewsV2PollPart = TypeData<t_HackerNewsV2PollPart>

/**
 * @name RedditAPI
 * @type OBJECT
 */
export type RedditAPI = TypeData<t_RedditAPI>

/**
 * @name RedditSubreddit
 * @type OBJECT
 */
export type RedditSubreddit = TypeData<t_RedditSubreddit>

/**
 * @name Float
 * @type SCALAR
 */
export type Float = TypeData<t_Float>

/**
 * @name RedditLink
 * @type OBJECT
 */
export type RedditLink = TypeData<t_RedditLink>

/**
 * @name RedditUser
 * @type OBJECT
 */
export type RedditUser = TypeData<t_RedditUser>

/**
 * @name RedditComment
 * @type OBJECT
 */
export type RedditComment = TypeData<t_RedditComment>

/**
 * @name TimeInterval
 * @type ENUM
 */
export type TimeInterval = TypeData<t_TimeInterval>

/**
 * @name KeyValueAPI
 * @type OBJECT
 */
export type KeyValueAPI = TypeData<t_KeyValueAPI>

/**
 * @name KeyValueItem
 * @type OBJECT
 */
export type KeyValueItem = TypeData<t_KeyValueItem>

/**
 * @name GithubAPI
 * @type OBJECT
 */
export type GithubAPI = TypeData<t_GithubAPI>

/**
 * @name GithubUser
 * @type OBJECT
 */
export type GithubUser = TypeData<t_GithubUser>

/**
 * @name GithubRepo
 * @type OBJECT
 */
export type GithubRepo = TypeData<t_GithubRepo>

/**
 * @name GithubCommit
 * @type OBJECT
 */
export type GithubCommit = TypeData<t_GithubCommit>

/**
 * @name UserOrCommitAuthor
 * @type UNION
 */
export type UserOrCommitAuthor = TypeData<t_UserOrCommitAuthor>

/**
 * @name GithubCommitAuthor
 * @type OBJECT
 */
export type GithubCommitAuthor = TypeData<t_GithubCommitAuthor>

/**
 * @name GithubStatus
 * @type OBJECT
 */
export type GithubStatus = TypeData<t_GithubStatus>

/**
 * @name GithubTree
 * @type OBJECT
 */
export type GithubTree = TypeData<t_GithubTree>

/**
 * @name GithubTreeEntry
 * @type OBJECT
 */
export type GithubTreeEntry = TypeData<t_GithubTreeEntry>

/**
 * @name GithubIssue
 * @type OBJECT
 */
export type GithubIssue = TypeData<t_GithubIssue>

/**
 * @name GithubIssueLabelType
 * @type OBJECT
 */
export type GithubIssueLabelType = TypeData<t_GithubIssueLabelType>

/**
 * @name GithubIssueCommentType
 * @type OBJECT
 */
export type GithubIssueCommentType = TypeData<t_GithubIssueCommentType>

/**
 * @name GithubBranch
 * @type OBJECT
 */
export type GithubBranch = TypeData<t_GithubBranch>

/**
 * @name TwitterAPI
 * @type OBJECT
 */
export type TwitterAPI = TypeData<t_TwitterAPI>

/**
 * @name UserIdentifier
 * @type ENUM
 */
export type UserIdentifier = TypeData<t_UserIdentifier>

/**
 * @name UserIdentity
 * @type SCALAR
 */
export type UserIdentity = TypeData<t_UserIdentity>

/**
 * @name TwitterUser
 * @type OBJECT
 */
export type TwitterUser = TypeData<t_TwitterUser>

/**
 * @name Tweet
 * @type OBJECT
 */
export type Tweet = TypeData<t_Tweet>

/**
 * @name Retweet
 * @type OBJECT
 */
export type Retweet = TypeData<t_Retweet>

/**
 * @name SearchReponse
 * @type ENUM
 */
export type SearchReponse = TypeData<t_SearchReponse>

/**
 * @name GiphyAPI
 * @type OBJECT
 */
export type GiphyAPI = TypeData<t_GiphyAPI>

/**
 * @name GiphyGIFData
 * @type OBJECT
 */
export type GiphyGIFData = TypeData<t_GiphyGIFData>

/**
 * @name GiphyGIFImages
 * @type OBJECT
 */
export type GiphyGIFImages = TypeData<t_GiphyGIFImages>

/**
 * @name GiphyGIFImageDataFixedHeight
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedHeight = TypeData<
  t_GiphyGIFImageDataFixedHeight
>

/**
 * @name GiphyGIFImageDataFixedHeightStill
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedHeightStill = TypeData<
  t_GiphyGIFImageDataFixedHeightStill
>

/**
 * @name GiphyGIFImageDataFixedHeightDownsample
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedHeightDownsample = TypeData<
  t_GiphyGIFImageDataFixedHeightDownsample
>

/**
 * @name GiphyGIFImageDataFixedWidth
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedWidth = TypeData<
  t_GiphyGIFImageDataFixedWidth
>

/**
 * @name GiphyGIFImageDataFixedWidthStill
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedWidthStill = TypeData<
  t_GiphyGIFImageDataFixedWidthStill
>

/**
 * @name GiphyGIFImageDataFixedWidthDownsample
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedWidthDownsample = TypeData<
  t_GiphyGIFImageDataFixedWidthDownsample
>

/**
 * @name GiphyGIFImageDataFixedHeightSmall
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedHeightSmall = TypeData<
  t_GiphyGIFImageDataFixedHeightSmall
>

/**
 * @name GiphyGIFImageDataFixedHeightSmallStill
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedHeightSmallStill = TypeData<
  t_GiphyGIFImageDataFixedHeightSmallStill
>

/**
 * @name GiphyGIFImageDataFixedWidthSmall
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedWidthSmall = TypeData<
  t_GiphyGIFImageDataFixedWidthSmall
>

/**
 * @name GiphyGIFImageDataFixedWidthSmallStill
 * @type OBJECT
 */
export type GiphyGIFImageDataFixedWidthSmallStill = TypeData<
  t_GiphyGIFImageDataFixedWidthSmallStill
>

/**
 * @name GiphyGIFImageDataDownsized
 * @type OBJECT
 */
export type GiphyGIFImageDataDownsized = TypeData<t_GiphyGIFImageDataDownsized>

/**
 * @name GiphyGIFImageDataDownsizedStill
 * @type OBJECT
 */
export type GiphyGIFImageDataDownsizedStill = TypeData<
  t_GiphyGIFImageDataDownsizedStill
>

/**
 * @name GiphyGIFImageDataDownsizedLarge
 * @type OBJECT
 */
export type GiphyGIFImageDataDownsizedLarge = TypeData<
  t_GiphyGIFImageDataDownsizedLarge
>

/**
 * @name GiphyGIFImageDataOriginal
 * @type OBJECT
 */
export type GiphyGIFImageDataOriginal = TypeData<t_GiphyGIFImageDataOriginal>

/**
 * @name GiphyGIFImageDataOriginalStill
 * @type OBJECT
 */
export type GiphyGIFImageDataOriginalStill = TypeData<
  t_GiphyGIFImageDataOriginalStill
>

/**
 * @name GiphyGIFImageDataLooping
 * @type OBJECT
 */
export type GiphyGIFImageDataLooping = TypeData<t_GiphyGIFImageDataLooping>

/**
 * @name GiphyRatingType
 * @type ENUM
 */
export type GiphyRatingType = TypeData<t_GiphyRatingType>

/**
 * @name GraphQLHubMutationAPI
 * @type OBJECT
 */
export type GraphQLHubMutationAPI = TypeData<t_GraphQLHubMutationAPI>

/**
 * @name SetValueForKeyPayload
 * @type OBJECT
 */
export type SetValueForKeyPayload = TypeData<t_SetValueForKeyPayload>

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
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>
