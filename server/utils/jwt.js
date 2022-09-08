import jwt from 'jsonwebtoken'

const generateAccessToken = (user) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    // 有效期限 10 分鐘
    expiresIn: '10m'
  })
}

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    // 有效期限 4 小時
    expiresIn: '4h'
  })
}

export const verifyRefreshToken = (token) => {
  try {
    const config = useRuntimeConfig()
    return jwt.verify(token, config.jwtRefreshSecret)
  } catch (err) {
    console.warn(err)
    return false
  }
}

export const verifyAccessToken = (token) => {
  try {
    const config = useRuntimeConfig()
    return jwt.verify(token, config.jwtAccessSecret)
  } catch (err) {
    console.warn(err)
    return false
  }
}

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  return {
    accessToken,
    refreshToken
  }
}

export const sendRefreshToken = (event, token) => {
  setCookie(event.res, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true
  })
}
