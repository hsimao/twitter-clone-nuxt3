import UrlPattern from 'url-pattern'
import { handleError } from '../utils'
import { verifyAccessToken } from '../utils/jwt'
import { getUserById } from '../db/users'

// 處理從 header 獲取 token, 並驗證解密後取得用戶資料, 在儲存到 content.auth 內
export default defineEventHandler(async (event) => {
  // 要作用的 api
  const endpoints = ['/api/auth/user']

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint)
    return pattern.match(event.req.url)
  })

  if (!isHandledByThisMiddleware) return

  // 從 header 取得 token
  const token = event.req.headers['authorization']?.split(' ')[1]

  // 驗證 token
  const decoded = verifyAccessToken(token)

  if (!decoded) return handleError(event, 401, 'Unauthorized')

  try {
    // 取得 user data
    const userId = decoded.userId
    const user = await getUserById(userId)

    // 儲存到 context
    event.context.auth = { user }
  } catch (err) {
    console.warn(err)
    return
  }
})
