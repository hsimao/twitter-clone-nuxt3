import { createUser } from '../../db/users'
import { userTransformer } from '../../transformers/user'
import { handleError } from '../../utils'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const { name, username, email, password, repeatPassword } = body

  if (!name || !username || !email || !password || !repeatPassword) {
    return handleError(event, 400, 'Invalid params')
  }

  if (password !== repeatPassword) {
    return handleError(event, 400, 'Password do not match')
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https:/picsum.photos/200/200'
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
})
