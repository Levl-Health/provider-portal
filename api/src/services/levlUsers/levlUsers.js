import { db } from 'src/lib/db'

export const levlUsers = () => {
  return db.levlUser.findMany()
}

export const levlUser = ({ email }) => {
  return db.levlUser.findUnique({
    where: { email },
  })
}

export const createLevlUser = ({ input }) => {
  return db.levlUser.create({
    data: input,
  })
}

export const updateLevlUser = ({ id, input }) => {
  return db.levlUser.update({
    data: input,
    where: { id },
  })
}

export const deleteLevlUser = ({ id }) => {
  return db.levlUser.delete({
    where: { id },
  })
}

export const LevlUser = {
  Provider: (_obj, { root }) => {
    return db.levlUser.findUnique({ where: { id: root?.id } }).Provider()
  },
}
