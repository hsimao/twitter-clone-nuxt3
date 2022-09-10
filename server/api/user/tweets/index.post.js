import formidable from 'formidable'
import { createTweet } from '~~/server/db/tweets'
import { tweetTransformer } from '~~/server/transformers/tweet'

export default defineEventHandler(async (event) => {
  const form = formidable({})

  // get fields and files
  const response = await new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files) => {
      if (err) {
        reject(err)
      }
      resolve({ fields, files })
    })
  })

  const { fields, files } = response
  const userId = event.context?.auth?.user?.id

  // format tweet data
  const tweetData = {
    text: fields.text,
    authorId: userId
  }

  // create tweet
  const tweet = await createTweet(tweetData)

  return { tweet: tweetTransformer(tweet) }
})
