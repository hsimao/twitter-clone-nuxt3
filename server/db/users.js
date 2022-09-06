import { prisma } from "./index";

export const createUser = (userData) => {
  return prisma.user.create({
    data: userData
  });
};
