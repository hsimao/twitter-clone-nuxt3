import { getTweets } from '~~/server/db/tweets'
import { tweetTransformer } from '~~/server/transformers/tweet'

export default defineEventHandler(async (event) => {
  const { query } = useQuery(event)

  let primsaQuery = {
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include: {
          author: true
        }
      },
      replyTo: {
        include: {
          author: true
        }
      }
    },
    // 排序
    orderBy: [
      {
        // 依據 createdAt 遞減排序
        createdAt: 'desc'
      }
    ]
  }

  // 關鍵字搜尋
  if (!!query) {
    primsaQuery = {
      ...primsaQuery,
      where: {
        text: {
          contains: query
        }
      }
    }
  }

  const tweets = await getTweets(primsaQuery)

  return {
    tweets: tweets.map(tweetTransformer)
  }
})
