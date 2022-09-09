export default () => {
  const useAuthToken = () => useState('auth_token')
  const useAuthUser = () => useState('auth_user')
  const useAuthLoading = () => useState('auth_loading', () => true)

  const setToken = (newToken) => {
    const authToken = useAuthToken()
    authToken.value = newToken
  }

  const setUser = (newUser) => {
    const uesr = useAuthUser()
    uesr.value = newUser
  }

  const setIsAuthLoading = (status) => (useAuthLoading().value = status)

  const login = async ({ username, password }) => {
    try {
      const { accessToken, user } = await $fetch('/api/auth/login', {
        method: 'POST',
        body: { username, password }
      })

      if (user) setUser(user)
      if (accessToken) setToken(accessToken)
      return { accessToken, user }
    } catch (error) {
      console.warn('error', error)
      return false
    }
  }

  const refreshToken = async () => {
    try {
      const data = await $fetch('/api/auth/refresh')
      if (data.access_token) setToken(data.access_token)
      return true
    } catch (err) {
      console.warn(err)
      return false
    }
  }

  const getUser = async () => {
    const data = await useFetchApi('/api/auth/user')
    if (data.user) setUser(data.user)
  }

  const initAuth = async () => {
    setIsAuthLoading(true)

    await refreshToken().catch(console.log)
    await getUser().catch(console.log)

    setIsAuthLoading(false)
  }

  return {
    login,
    initAuth,
    useAuthUser,
    useAuthToken,
    useAuthLoading
  }
}
