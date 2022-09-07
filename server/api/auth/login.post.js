import bcrypt from "bcrypt";
import { handleError } from "../../utils";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { getUserByUsername } from "../../db/users";
import { createRefreshToken } from "../../db/refreshToken";
import { userTransformer } from "../../transformers/user";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  // invalid params
  if (!username || !password) {
    return handleError(event, 400, "Invalid params");
  }

  // check user existed
  const user = await getUserByUsername(username);
  if (!user) {
    return handleError(event, 400, "Username or password is invalid");
  }

  // check password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return handleError(event, 400, "Username or password is invalid");
  }

  // generate token
  const { accessToken, refreshToken } = generateTokens(user);

  // refreshToken 儲存到 db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  });

  // refreshToken 儲存到 cookie
  sendRefreshToken(event, refreshToken);

  return {
    accessToken,
    user: userTransformer(user)
  };
});
