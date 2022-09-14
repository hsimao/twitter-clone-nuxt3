export default () => {
  const usePostTweetModal = () => useState('post_tweet_modal', () => false)
  const useReplyTweet = () => useState('reply_tweet', () => null)

  const togglePostTweetModal = (status) => {
    const postTweetModal = usePostTweetModal()
    postTweetModal.value = status

    if (!status) setReplyTo(null)
  }

  const setReplyTo = (tweet = null) => {
    const replyTweet = useReplyTweet()
    replyTweet.value = tweet
  }

  // create tweet
  const postTweet = (formData) => {
    const form = new FormData()

    // text
    form.append('text', formData.text)

    // 回覆的 tweet
    if (formData.replyTo) form.append('replyTo', formData.replyTo)

    // files
    formData.mediaFiles.forEach((mediaFile, index) => {
      form.append(`media_file_${index}`, mediaFile)
    })

    // api
    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form
    })
  }

  // get tweets
  const getTweets = (params = {}) => {
    return useFetchApi('/api/tweets', {
      method: 'GET',
      params: params
    })
  }

  // get tweet by id
  const getTweetById = (id) => {
    return useFetchApi(`/api/tweets/${id}`, {
      method: 'GET'
    })
  }

  return {
    postTweet,
    getTweets,
    getTweetById,
    togglePostTweetModal,
    usePostTweetModal,
    useReplyTweet,
    setReplyTo
  }
}
