import { handleError } from '../../utils'
import { getRefreshTokenByToken } from '../../db/refreshToken'
import { getUserById } from '../../db/users'
import { verifyRefreshToken, generateTokens } from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const cookies = useCookies(event)

    // cookie 未找到 token
    if (!cookies?.refresh_token)
      return handleError(event, 401, 'Refresh token is invalid')

    const { token } = await getRefreshTokenByToken(cookies.refresh_token)

    // db 未找到 token
    if (!token) return handleError(event, 401, 'Refresh token is invalid')

    // 驗證 token
    const verifyToken = await verifyRefreshToken(token)
    if (!verifyToken) return handleError(event, 401, 'Refresh token is invalid')

    // get user
    const user = await getUserById(verifyToken?.userId)

    const { accessToken } = generateTokens(user)

    return {
      access_token: accessToken
    }
  } catch (err) {
    console.warn(err)
    return handleError(event, 500, 'Something went wrong')
  }
})
