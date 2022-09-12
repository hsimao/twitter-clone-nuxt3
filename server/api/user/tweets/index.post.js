import formidable from 'formidable'
import { createTweet } from '~~/server/db/tweets'
import { tweetTransformer } from '~~/server/transformers/tweet'
import { createMediaFile } from '~~/server/db/mediafiles'
import { uploadToCloudinary } from '~~/server/utils/cloudinary'

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

  // 回覆到某一貼文
  const replyTo = fields.replyTo
  if (replyTo && replyTo !== 'null') {
    tweetData.replyToId = replyTo
  }

  // create tweet
  const tweet = await createTweet(tweetData)

  // 處理檔案
  const filePromises = Object.keys(files).map(async (key) => {
    const file = files[key]

    // 將圖片檔案上傳到 cloudinary
    const cloudinaryResponse = await uploadToCloudinary(file.filepath)

    return createMediaFile({
      url: cloudinaryResponse.secure_url,
      providerPublicId: cloudinaryResponse.public_id,
      userId,
      tweetId: tweet.id
    })
  })

  await Promise.all(filePromises)

  return { tweet: tweetTransformer(tweet) }
})
