import { removeRefreshToken } from '~~/server/db/refreshToken'
import { sendRefreshToken } from '~~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const cookies = useCookies(event)
    const refreshToken = cookies.refresh_token

    // remove db refresh token
    await removeRefreshToken(refreshToken)
  } catch (err) {
    console.warn(err)
  }

  // update cookie
  sendRefreshToken(event.res, '')

  return { message: 'Done' }
})
