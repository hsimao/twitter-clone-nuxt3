import bcrypt from "bcrypt";
import { handleError } from "../../utils";
import { getUserByUsername } from "../../db/users";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  // 參數錯誤
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

  return { user };
});
