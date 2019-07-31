import * as extensions from '../extensions'
import { lazyGetters } from '@gqless/utils'
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  ScalarNode,
  Arguments,
  ArgumentsField,
  InterfaceNode,
  UnionNode,
  InputNode,
  InputNodeField,
} from 'gqless'

export const schema = {
  get GraphQLHubAPI() {
    return new ObjectNode(
      {
        get graphQLHub() {
          return new FieldNode(schema.String, undefined, true)
        },
        get hn() {
          return new FieldNode(schema.HackerNewsAPI, undefined, true)
        },
        get hn2() {
          return new FieldNode(schema.HackerNewsAPIV2, undefined, true)
        },
        get reddit() {
          return new FieldNode(schema.RedditAPI, undefined, true)
        },
        get keyValue() {
          return new FieldNode(schema.KeyValueAPI, undefined, true)
        },
        get github() {
          return new FieldNode(schema.GithubAPI, undefined, true)
        },
        get twitter() {
          return new FieldNode(schema.TwitterAPI, undefined, true)
        },
        get giphy() {
          return new FieldNode(schema.GiphyAPI, undefined, true)
        },
      },
      {
        name: 'GraphQLHubAPI',
        extension: ((extensions as any) || {}).GraphQLHubAPI,
      }
    )
  },
  get String() {
    return new ScalarNode({
      name: 'String',
      extension: ((extensions as any) || {}).String,
    })
  },
  get HackerNewsAPI() {
    return new ObjectNode(
      {
        get item() {
          return new FieldNode(
            schema.HackerNewsItem,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.Int, false)
              },
            }),
            true
          )
        },
        get user() {
          return new FieldNode(
            schema.HackerNewsUser,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
        get topStories() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get newStories() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get showStories() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get askStories() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get jobStories() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get stories() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
              get storyType() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
      },
      {
        name: 'HackerNewsAPI',
        extension: ((extensions as any) || {}).HackerNewsAPI,
      }
    )
  },
  get Int() {
    return new ScalarNode({
      name: 'Int',
      extension: ((extensions as any) || {}).Int,
    })
  },
  get HackerNewsItem() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, false)
        },
        get deleted() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get type() {
          return new FieldNode(schema.ItemType, undefined, false)
        },
        get by() {
          return new FieldNode(schema.HackerNewsUser, undefined, false)
        },
        get time() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get timeISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get dead() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get score() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get title() {
          return new FieldNode(schema.String, undefined, true)
        },
        get kids() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get parent() {
          return new FieldNode(schema.HackerNewsItem, undefined, true)
        },
        get parts() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            undefined,
            true
          )
        },
        get descendants() {
          return new FieldNode(schema.Int, undefined, true)
        },
      },
      {
        name: 'HackerNewsItem',
        extension: ((extensions as any) || {}).HackerNewsItem,
      }
    )
  },
  get Boolean() {
    return new ScalarNode({
      name: 'Boolean',
      extension: ((extensions as any) || {}).Boolean,
    })
  },
  get ItemType() {
    return undefined
  },
  get HackerNewsUser() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, false)
        },
        get delay() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get created() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get createdISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get about() {
          return new FieldNode(schema.String, undefined, true)
        },
        get submitted() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsItem, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
      },
      {
        name: 'HackerNewsUser',
        extension: ((extensions as any) || {}).HackerNewsUser,
      }
    )
  },
  get HackerNewsAPIV2() {
    return new ObjectNode(
      {
        get node() {
          return new FieldNode(
            schema.Node,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, false)
              },
            }),
            true
          )
        },
        get nodeFromHnId() {
          return new FieldNode(
            schema.Node,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, false)
              },
              get isUserId() {
                return new ArgumentsField(schema.Boolean, false)
              },
            }),
            false
          )
        },
      },
      {
        name: 'HackerNewsAPIV2',
        extension: ((extensions as any) || {}).HackerNewsAPIV2,
      }
    )
  },
  get ID() {
    return new ScalarNode({
      name: 'ID',
      extension: ((extensions as any) || {}).ID,
    })
  },
  get Node() {
    return new InterfaceNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
      },
      [
        schema.HackerNewsV2Story,
        schema.HackerNewsV2Job,
        schema.HackerNewsV2Poll,
        schema.HackerNewsV2Comment,
        schema.HackerNewsV2PollPart,
        schema.HackerNewsV2User,
      ],
      { name: 'Node', extension: ((extensions as any) || {}).Node }
    )
  },
  get HackerNewsV2Story() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get hnId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get by() {
          return new FieldNode(schema.HackerNewsV2User, undefined, false)
        },
        get descendants() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get score() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get time() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get timeISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, true)
        },
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get kids() {
          return new FieldNode(
            schema.HackerNewsV2CommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get deleted() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get dead() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
      },
      {
        name: 'HackerNewsV2Story',
        extension: ((extensions as any) || {}).HackerNewsV2Story,
      }
    )
  },
  get HackerNewsV2User() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get hnId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get delay() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get created() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get createdISO() {
          return new FieldNode(schema.String, undefined, true)
        },
        get about() {
          return new FieldNode(schema.String, undefined, true)
        },
        get submitted() {
          return new FieldNode(
            schema.NodeConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
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
        name: 'HackerNewsV2User',
        extension: ((extensions as any) || {}).HackerNewsV2User,
      }
    )
  },
  get NodeConnection() {
    return new ObjectNode(
      {
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.NodeEdge, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'NodeConnection',
        extension: ((extensions as any) || {}).NodeConnection,
      }
    )
  },
  get PageInfo() {
    return new ObjectNode(
      {
        get hasNextPage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get hasPreviousPage() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get startCursor() {
          return new FieldNode(schema.String, undefined, true)
        },
        get endCursor() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: 'PageInfo', extension: ((extensions as any) || {}).PageInfo }
    )
  },
  get NodeEdge() {
    return new ObjectNode(
      {
        get node() {
          return new FieldNode(schema.Node, undefined, true)
        },
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      { name: 'NodeEdge', extension: ((extensions as any) || {}).NodeEdge }
    )
  },
  get HackerNewsV2CommentConnection() {
    return new ObjectNode(
      {
        get pageInfo() {
          return new FieldNode(schema.PageInfo, undefined, false)
        },
        get edges() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsV2CommentEdge, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'HackerNewsV2CommentConnection',
        extension: ((extensions as any) || {}).HackerNewsV2CommentConnection,
      }
    )
  },
  get HackerNewsV2CommentEdge() {
    return new ObjectNode(
      {
        get node() {
          return new FieldNode(schema.HackerNewsV2Comment, undefined, true)
        },
        get cursor() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'HackerNewsV2CommentEdge',
        extension: ((extensions as any) || {}).HackerNewsV2CommentEdge,
      }
    )
  },
  get HackerNewsV2Comment() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get hnId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get by() {
          return new FieldNode(schema.HackerNewsV2User, undefined, false)
        },
        get parent() {
          return new FieldNode(schema.Node, undefined, true)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get time() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get timeISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get kids() {
          return new FieldNode(
            schema.HackerNewsV2CommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get deleted() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get dead() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
      },
      {
        name: 'HackerNewsV2Comment',
        extension: ((extensions as any) || {}).HackerNewsV2Comment,
      }
    )
  },
  get HackerNewsV2Job() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get hnId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get by() {
          return new FieldNode(schema.HackerNewsV2User, undefined, false)
        },
        get score() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get time() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get timeISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, true)
        },
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get deleted() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get dead() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
      },
      {
        name: 'HackerNewsV2Job',
        extension: ((extensions as any) || {}).HackerNewsV2Job,
      }
    )
  },
  get HackerNewsV2Poll() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get hnId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get by() {
          return new FieldNode(schema.HackerNewsV2User, undefined, false)
        },
        get descendants() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get score() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get time() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get timeISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, true)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get kids() {
          return new FieldNode(
            schema.HackerNewsV2CommentConnection,
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get first() {
                return new ArgumentsField(schema.Int, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get last() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get deleted() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get dead() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
        get parts() {
          return new FieldNode(
            new ArrayNode(schema.HackerNewsV2PollPart, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'HackerNewsV2Poll',
        extension: ((extensions as any) || {}).HackerNewsV2Poll,
      }
    )
  },
  get HackerNewsV2PollPart() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, false)
        },
        get hnId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get by() {
          return new FieldNode(schema.HackerNewsV2User, undefined, false)
        },
        get score() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get time() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get timeISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get parent() {
          return new FieldNode(schema.Node, undefined, true)
        },
        get deleted() {
          return new FieldNode(schema.Boolean, undefined, true)
        },
      },
      {
        name: 'HackerNewsV2PollPart',
        extension: ((extensions as any) || {}).HackerNewsV2PollPart,
      }
    )
  },
  get RedditAPI() {
    return new ObjectNode(
      {
        get subreddit() {
          return new FieldNode(
            schema.RedditSubreddit,
            new Arguments({
              get name() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
        get user() {
          return new FieldNode(
            schema.RedditUser,
            new Arguments({
              get username() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
      },
      { name: 'RedditAPI', extension: ((extensions as any) || {}).RedditAPI }
    )
  },
  get RedditSubreddit() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get fullnameId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get publicDescription() {
          return new FieldNode(schema.String, undefined, false)
        },
        get accountsActive() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get subscribers() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get created() {
          return new FieldNode(schema.Float, undefined, false)
        },
        get createdISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get hotListings() {
          return new FieldNode(
            new ArrayNode(schema.RedditLink, false),
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get count() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get newListings() {
          return new FieldNode(
            new ArrayNode(schema.RedditLink, false),
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get count() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get risingListings() {
          return new FieldNode(
            new ArrayNode(schema.RedditLink, false),
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get count() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
        get controversialListings() {
          return new FieldNode(
            new ArrayNode(schema.RedditLink, false),
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get count() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get timeInterval() {
                return new ArgumentsField(schema.TimeInterval, true)
              },
            }),
            false
          )
        },
        get topListings() {
          return new FieldNode(
            new ArrayNode(schema.RedditLink, false),
            new Arguments({
              get after() {
                return new ArgumentsField(schema.String, true)
              },
              get before() {
                return new ArgumentsField(schema.String, true)
              },
              get count() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get timeInterval() {
                return new ArgumentsField(schema.TimeInterval, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'RedditSubreddit',
        extension: ((extensions as any) || {}).RedditSubreddit,
      }
    )
  },
  get Float() {
    return new ScalarNode({
      name: 'Float',
      extension: ((extensions as any) || {}).Float,
    })
  },
  get RedditLink() {
    return new ObjectNode(
      {
        get title() {
          return new FieldNode(schema.String, undefined, false)
        },
        get fullnameId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get score() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get numComments() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get author() {
          return new FieldNode(schema.RedditUser, undefined, false)
        },
        get comments() {
          return new FieldNode(
            new ArrayNode(schema.RedditComment, false),
            new Arguments({
              get depth() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      { name: 'RedditLink', extension: ((extensions as any) || {}).RedditLink }
    )
  },
  get RedditUser() {
    return new ObjectNode(
      {
        get fullnameId() {
          return new FieldNode(schema.String, undefined, false)
        },
        get username() {
          return new FieldNode(schema.String, undefined, false)
        },
        get created() {
          return new FieldNode(schema.Float, undefined, false)
        },
        get createdISO() {
          return new FieldNode(schema.String, undefined, false)
        },
        get linkKarma() {
          return new FieldNode(schema.Int, undefined, false)
        },
        get commentKarma() {
          return new FieldNode(schema.Int, undefined, false)
        },
      },
      { name: 'RedditUser', extension: ((extensions as any) || {}).RedditUser }
    )
  },
  get RedditComment() {
    return new ObjectNode(
      {
        get author() {
          return new FieldNode(schema.RedditUser, undefined, false)
        },
        get body() {
          return new FieldNode(schema.String, undefined, false)
        },
        get replies() {
          return new FieldNode(
            new ArrayNode(schema.RedditComment, false),
            new Arguments({
              get depth() {
                return new ArgumentsField(schema.Int, true)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            false
          )
        },
      },
      {
        name: 'RedditComment',
        extension: ((extensions as any) || {}).RedditComment,
      }
    )
  },
  get TimeInterval() {
    return undefined
  },
  get KeyValueAPI() {
    return new ObjectNode(
      {
        get getValue() {
          return new FieldNode(
            schema.KeyValueItem,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
      },
      {
        name: 'KeyValueAPI',
        extension: ((extensions as any) || {}).KeyValueAPI,
      }
    )
  },
  get KeyValueItem() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, false)
        },
        get value() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'KeyValueItem',
        extension: ((extensions as any) || {}).KeyValueItem,
      }
    )
  },
  get GithubAPI() {
    return new ObjectNode(
      {
        get user() {
          return new FieldNode(
            schema.GithubUser,
            new Arguments({
              get username() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
        get repo() {
          return new FieldNode(
            schema.GithubRepo,
            new Arguments({
              get name() {
                return new ArgumentsField(schema.String, false)
              },
              get ownerUsername() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
      },
      { name: 'GithubAPI', extension: ((extensions as any) || {}).GithubAPI }
    )
  },
  get GithubUser() {
    return new ObjectNode(
      {
        get login() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get company() {
          return new FieldNode(schema.String, undefined, true)
        },
        get avatar_url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get repos() {
          return new FieldNode(
            new ArrayNode(schema.GithubRepo, true),
            undefined,
            true
          )
        },
      },
      { name: 'GithubUser', extension: ((extensions as any) || {}).GithubUser }
    )
  },
  get GithubRepo() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get commits() {
          return new FieldNode(
            new ArrayNode(schema.GithubCommit, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get issues() {
          return new FieldNode(
            new ArrayNode(schema.GithubIssue, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get branches() {
          return new FieldNode(
            new ArrayNode(schema.GithubBranch, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
        get owner() {
          return new FieldNode(schema.GithubUser, undefined, true)
        },
      },
      { name: 'GithubRepo', extension: ((extensions as any) || {}).GithubRepo }
    )
  },
  get GithubCommit() {
    return new ObjectNode(
      {
        get sha() {
          return new FieldNode(schema.String, undefined, true)
        },
        get author() {
          return new FieldNode(schema.UserOrCommitAuthor, undefined, true)
        },
        get message() {
          return new FieldNode(schema.String, undefined, true)
        },
        get date() {
          return new FieldNode(schema.String, undefined, true)
        },
        get status() {
          return new FieldNode(
            new ArrayNode(schema.GithubStatus, true),
            undefined,
            true
          )
        },
        get tree() {
          return new FieldNode(schema.GithubTree, undefined, true)
        },
      },
      {
        name: 'GithubCommit',
        extension: ((extensions as any) || {}).GithubCommit,
      }
    )
  },
  get UserOrCommitAuthor() {
    return new UnionNode([schema.GithubCommitAuthor, schema.GithubUser])
  },
  get GithubCommitAuthor() {
    return new ObjectNode(
      {
        get email() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'GithubCommitAuthor',
        extension: ((extensions as any) || {}).GithubCommitAuthor,
      }
    )
  },
  get GithubStatus() {
    return new ObjectNode(
      {
        get state() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get target_url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get context() {
          return new FieldNode(schema.String, undefined, true)
        },
        get updated_at() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'GithubStatus',
        extension: ((extensions as any) || {}).GithubStatus,
      }
    )
  },
  get GithubTree() {
    return new ObjectNode(
      {
        get entries() {
          return new FieldNode(
            new ArrayNode(schema.GithubTreeEntry, true),
            undefined,
            true
          )
        },
      },
      { name: 'GithubTree', extension: ((extensions as any) || {}).GithubTree }
    )
  },
  get GithubTreeEntry() {
    return new ObjectNode(
      {
        get path() {
          return new FieldNode(schema.String, undefined, true)
        },
        get last_commit() {
          return new FieldNode(schema.GithubCommit, undefined, true)
        },
      },
      {
        name: 'GithubTreeEntry',
        extension: ((extensions as any) || {}).GithubTreeEntry,
      }
    )
  },
  get GithubIssue() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get state() {
          return new FieldNode(schema.String, undefined, true)
        },
        get title() {
          return new FieldNode(schema.String, undefined, true)
        },
        get body() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.GithubUser, undefined, true)
        },
        get assignee() {
          return new FieldNode(schema.GithubUser, undefined, true)
        },
        get closed_by() {
          return new FieldNode(schema.GithubUser, undefined, true)
        },
        get labels() {
          return new FieldNode(
            new ArrayNode(schema.GithubIssueLabelType, true),
            undefined,
            true
          )
        },
        get commentCount() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get comments() {
          return new FieldNode(
            new ArrayNode(schema.GithubIssueCommentType, true),
            undefined,
            true
          )
        },
      },
      {
        name: 'GithubIssue',
        extension: ((extensions as any) || {}).GithubIssue,
      }
    )
  },
  get GithubIssueLabelType() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get color() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: 'GithubIssueLabelType',
        extension: ((extensions as any) || {}).GithubIssueLabelType,
      }
    )
  },
  get GithubIssueCommentType() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get body() {
          return new FieldNode(schema.String, undefined, true)
        },
        get user() {
          return new FieldNode(schema.GithubUser, undefined, true)
        },
      },
      {
        name: 'GithubIssueCommentType',
        extension: ((extensions as any) || {}).GithubIssueCommentType,
      }
    )
  },
  get GithubBranch() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get lastCommit() {
          return new FieldNode(schema.GithubCommit, undefined, true)
        },
      },
      {
        name: 'GithubBranch',
        extension: ((extensions as any) || {}).GithubBranch,
      }
    )
  },
  get TwitterAPI() {
    return new ObjectNode(
      {
        get user() {
          return new FieldNode(
            schema.TwitterUser,
            new Arguments({
              get identifier() {
                return new ArgumentsField(schema.UserIdentifier, false)
              },
              get identity() {
                return new ArgumentsField(schema.UserIdentity, false)
              },
            }),
            true
          )
        },
        get tweet() {
          return new FieldNode(
            schema.Tweet,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
        get search() {
          return new FieldNode(
            new ArrayNode(schema.Tweet, true),
            new Arguments({
              get q() {
                return new ArgumentsField(schema.String, false)
              },
              get count() {
                return new ArgumentsField(schema.Int, true)
              },
              get result_type() {
                return new ArgumentsField(schema.SearchReponse, true)
              },
            }),
            true
          )
        },
      },
      { name: 'TwitterAPI', extension: ((extensions as any) || {}).TwitterAPI }
    )
  },
  get UserIdentifier() {
    return undefined
  },
  get UserIdentity() {
    return new ScalarNode({
      name: 'UserIdentity',
      extension: ((extensions as any) || {}).UserIdentity,
    })
  },
  get TwitterUser() {
    return new ObjectNode(
      {
        get created_at() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true)
        },
        get screen_name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get profile_image_url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get url() {
          return new FieldNode(schema.String, undefined, true)
        },
        get tweets_count() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get followers_count() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get tweets() {
          return new FieldNode(
            new ArrayNode(schema.Tweet, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
      },
      {
        name: 'TwitterUser',
        extension: ((extensions as any) || {}).TwitterUser,
      }
    )
  },
  get Tweet() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, true)
        },
        get created_at() {
          return new FieldNode(schema.String, undefined, true)
        },
        get text() {
          return new FieldNode(schema.String, undefined, true)
        },
        get retweet_count() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get user() {
          return new FieldNode(schema.TwitterUser, undefined, true)
        },
        get retweets() {
          return new FieldNode(
            new ArrayNode(schema.Retweet, true),
            new Arguments({
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
            }),
            true
          )
        },
      },
      { name: 'Tweet', extension: ((extensions as any) || {}).Tweet }
    )
  },
  get Retweet() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.ID, undefined, true)
        },
        get created_at() {
          return new FieldNode(schema.String, undefined, true)
        },
        get in_reply_to_tweet_id() {
          return new FieldNode(schema.String, undefined, true)
        },
        get in_reply_to_user_id() {
          return new FieldNode(schema.Int, undefined, true)
        },
        get in_reply_to_screen_name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get retweeted_status() {
          return new FieldNode(schema.Tweet, undefined, true)
        },
        get user() {
          return new FieldNode(schema.TwitterUser, undefined, true)
        },
      },
      { name: 'Retweet', extension: ((extensions as any) || {}).Retweet }
    )
  },
  get SearchReponse() {
    return undefined
  },
  get GiphyAPI() {
    return new ObjectNode(
      {
        get gif() {
          return new FieldNode(
            schema.GiphyGIFData,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.String, false)
              },
            }),
            true
          )
        },
        get search() {
          return new FieldNode(
            new ArrayNode(schema.GiphyGIFData, true),
            new Arguments({
              get query() {
                return new ArgumentsField(schema.String, false)
              },
              get limit() {
                return new ArgumentsField(schema.Int, true)
              },
              get offset() {
                return new ArgumentsField(schema.Int, true)
              },
              get rating() {
                return new ArgumentsField(schema.GiphyRatingType, true)
              },
            }),
            true
          )
        },
        get random() {
          return new FieldNode(
            schema.GiphyGIFData,
            new Arguments({
              get tag() {
                return new ArgumentsField(schema.String, true)
              },
              get rating() {
                return new ArgumentsField(schema.GiphyRatingType, true)
              },
            }),
            true
          )
        },
      },
      { name: 'GiphyAPI', extension: ((extensions as any) || {}).GiphyAPI }
    )
  },
  get GiphyGIFData() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.String, undefined, false)
        },
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get images() {
          return new FieldNode(schema.GiphyGIFImages, undefined, false)
        },
      },
      {
        name: 'GiphyGIFData',
        extension: ((extensions as any) || {}).GiphyGIFData,
      }
    )
  },
  get GiphyGIFImages() {
    return new ObjectNode(
      {
        get fixed_height() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedHeight,
            undefined,
            true
          )
        },
        get fixed_height_still() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedHeightStill,
            undefined,
            true
          )
        },
        get fixed_height_downsampled() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedHeightDownsample,
            undefined,
            true
          )
        },
        get fixed_width() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedWidth,
            undefined,
            true
          )
        },
        get fixed_width_still() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedWidthStill,
            undefined,
            true
          )
        },
        get fixed_width_downsampled() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedWidthDownsample,
            undefined,
            true
          )
        },
        get fixed_height_small() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedHeightSmall,
            undefined,
            true
          )
        },
        get fixed_height_small_still() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedHeightSmallStill,
            undefined,
            true
          )
        },
        get fixed_width_small() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedWidthSmall,
            undefined,
            true
          )
        },
        get fixed_width_small_still() {
          return new FieldNode(
            schema.GiphyGIFImageDataFixedWidthSmallStill,
            undefined,
            true
          )
        },
        get downsized() {
          return new FieldNode(
            schema.GiphyGIFImageDataDownsized,
            undefined,
            true
          )
        },
        get downsized_still() {
          return new FieldNode(
            schema.GiphyGIFImageDataDownsizedStill,
            undefined,
            true
          )
        },
        get downsized_large() {
          return new FieldNode(
            schema.GiphyGIFImageDataDownsizedLarge,
            undefined,
            true
          )
        },
        get original() {
          return new FieldNode(
            schema.GiphyGIFImageDataOriginal,
            undefined,
            true
          )
        },
        get original_still() {
          return new FieldNode(
            schema.GiphyGIFImageDataOriginalStill,
            undefined,
            true
          )
        },
        get looping() {
          return new FieldNode(schema.GiphyGIFImageDataLooping, undefined, true)
        },
      },
      {
        name: 'GiphyGIFImages',
        extension: ((extensions as any) || {}).GiphyGIFImages,
      }
    )
  },
  get GiphyGIFImageDataFixedHeight() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get mp4() {
          return new FieldNode(schema.String, undefined, false)
        },
        get mp4_size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedHeight',
        extension: ((extensions as any) || {}).GiphyGIFImageDataFixedHeight,
      }
    )
  },
  get GiphyGIFImageDataFixedHeightStill() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedHeightStill',
        extension: ((extensions as any) || {})
          .GiphyGIFImageDataFixedHeightStill,
      }
    )
  },
  get GiphyGIFImageDataFixedHeightDownsample() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedHeightDownsample',
        extension: ((extensions as any) || {})
          .GiphyGIFImageDataFixedHeightDownsample,
      }
    )
  },
  get GiphyGIFImageDataFixedWidth() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get mp4() {
          return new FieldNode(schema.String, undefined, false)
        },
        get mp4_size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedWidth',
        extension: ((extensions as any) || {}).GiphyGIFImageDataFixedWidth,
      }
    )
  },
  get GiphyGIFImageDataFixedWidthStill() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedWidthStill',
        extension: ((extensions as any) || {}).GiphyGIFImageDataFixedWidthStill,
      }
    )
  },
  get GiphyGIFImageDataFixedWidthDownsample() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedWidthDownsample',
        extension: ((extensions as any) || {})
          .GiphyGIFImageDataFixedWidthDownsample,
      }
    )
  },
  get GiphyGIFImageDataFixedHeightSmall() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedHeightSmall',
        extension: ((extensions as any) || {})
          .GiphyGIFImageDataFixedHeightSmall,
      }
    )
  },
  get GiphyGIFImageDataFixedHeightSmallStill() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedHeightSmallStill',
        extension: ((extensions as any) || {})
          .GiphyGIFImageDataFixedHeightSmallStill,
      }
    )
  },
  get GiphyGIFImageDataFixedWidthSmall() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedWidthSmall',
        extension: ((extensions as any) || {}).GiphyGIFImageDataFixedWidthSmall,
      }
    )
  },
  get GiphyGIFImageDataFixedWidthSmallStill() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataFixedWidthSmallStill',
        extension: ((extensions as any) || {})
          .GiphyGIFImageDataFixedWidthSmallStill,
      }
    )
  },
  get GiphyGIFImageDataDownsized() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get small() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataDownsized',
        extension: ((extensions as any) || {}).GiphyGIFImageDataDownsized,
      }
    )
  },
  get GiphyGIFImageDataDownsizedStill() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataDownsizedStill',
        extension: ((extensions as any) || {}).GiphyGIFImageDataDownsizedStill,
      }
    )
  },
  get GiphyGIFImageDataDownsizedLarge() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataDownsizedLarge',
        extension: ((extensions as any) || {}).GiphyGIFImageDataDownsizedLarge,
      }
    )
  },
  get GiphyGIFImageDataOriginal() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
        get size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get mp4() {
          return new FieldNode(schema.String, undefined, false)
        },
        get mp4_size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp() {
          return new FieldNode(schema.String, undefined, false)
        },
        get webp_size() {
          return new FieldNode(schema.String, undefined, false)
        },
        get frames() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataOriginal',
        extension: ((extensions as any) || {}).GiphyGIFImageDataOriginal,
      }
    )
  },
  get GiphyGIFImageDataOriginalStill() {
    return new ObjectNode(
      {
        get url() {
          return new FieldNode(schema.String, undefined, false)
        },
        get width() {
          return new FieldNode(schema.String, undefined, false)
        },
        get height() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataOriginalStill',
        extension: ((extensions as any) || {}).GiphyGIFImageDataOriginalStill,
      }
    )
  },
  get GiphyGIFImageDataLooping() {
    return new ObjectNode(
      {
        get mp4() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'GiphyGIFImageDataLooping',
        extension: ((extensions as any) || {}).GiphyGIFImageDataLooping,
      }
    )
  },
  get GiphyRatingType() {
    return undefined
  },
  get GraphQLHubMutationAPI() {
    return new ObjectNode(
      {
        get keyValue_setValue() {
          return new FieldNode(
            schema.SetValueForKeyPayload,
            new Arguments({
              get input() {
                return new ArgumentsField(schema.SetValueForKeyInput, false)
              },
            }),
            true
          )
        },
      },
      {
        name: 'GraphQLHubMutationAPI',
        extension: ((extensions as any) || {}).GraphQLHubMutationAPI,
      }
    )
  },
  get SetValueForKeyInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.String, false)
        },
        get value() {
          return new InputNodeField(schema.String, false)
        },
        get clientMutationId() {
          return new InputNodeField(schema.String, false)
        },
      },
      { name: 'SetValueForKeyInput' }
    )
  },
  get SetValueForKeyPayload() {
    return new ObjectNode(
      {
        get item() {
          return new FieldNode(schema.KeyValueItem, undefined, true)
        },
        get clientMutationId() {
          return new FieldNode(schema.String, undefined, false)
        },
      },
      {
        name: 'SetValueForKeyPayload',
        extension: ((extensions as any) || {}).SetValueForKeyPayload,
      }
    )
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          )
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
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
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false)
        },
        get name() {
          return new FieldNode(schema.String, undefined, true)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
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
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          )
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
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          )
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true)
        },
      },
      { name: '__Type', extension: ((extensions as any) || {}).__Type }
    )
  },
  get __TypeKind() {
    return undefined
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      { name: '__Field', extension: ((extensions as any) || {}).__Field }
    )
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false)
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: '__InputValue',
        extension: ((extensions as any) || {}).__InputValue,
      }
    )
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true)
        },
      },
      {
        name: '__EnumValue',
        extension: ((extensions as any) || {}).__EnumValue,
      }
    )
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false)
        },
        get description() {
          return new FieldNode(schema.String, undefined, true)
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          )
        },
        get onOperation() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get onFragment() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
        get onField() {
          return new FieldNode(schema.Boolean, undefined, false)
        },
      },
      {
        name: '__Directive',
        extension: ((extensions as any) || {}).__Directive,
      }
    )
  },
}

lazyGetters(schema)
