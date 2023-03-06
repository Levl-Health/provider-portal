import { db } from 'src/lib/db'

export const providers = () => {
  return db.provider.findMany()
}

export const provider = ({ id }) => {
  return db.provider.findUnique({
    where: { id },
  })
}

export const createProvider = ({ input }) => {
  return db.provider.create({
    data: input,
  })
}

export const updateProvider = ({ id, input }) => {
  return db.provider.update({
    data: input,
    where: { id },
  })
}

export const deleteProvider = ({ id }) => {
  return db.provider.delete({
    where: { id },
  })
}

export const Provider = {
  LevlUser: (_obj, { root }) => {
    return db.provider.findUnique({ where: { id: root?.id } }).LevlUser()
  },
  Patient: (_obj, { root }) => {
    return db.provider.findUnique({ where: { id: root?.id } }).Patient()
  },
}
