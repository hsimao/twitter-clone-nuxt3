import { prisma } from './index'

export const createRefreshToken = (refreshToken) => {
  console.log('refreshToken', refreshToken)
  return prisma.refreshToken.create({
    data: refreshToken
  })
}
