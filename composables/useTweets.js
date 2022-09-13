export default () => {
  // create tweet
  const postTweet = (formData) => {
    const form = new FormData()

    // text
    form.append('text', formData.text)

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
  const getHomeTweets = () => {
    return useFetchApi('/api/tweets', {
      method: 'GET'
    })
  }

  return {
    postTweet,
    getHomeTweets
  }
}
