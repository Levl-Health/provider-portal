import { db } from 'src/lib/db'

export const sideEffects = () => {
  return db.sideEffect.findMany()
}

export const sideEffect = ({ id }) => {
  return db.sideEffect.findUnique({
    where: { id },
  })
}

export const createSideEffect = ({ input }) => {
  return db.sideEffect.create({
    data: input,
  })
}

export const updateSideEffect = ({ id, input }) => {
  return db.sideEffect.update({
    data: input,
    where: { id },
  })
}

export const deleteSideEffect = ({ id }) => {
  return db.sideEffect.delete({
    where: { id },
  })
}

export const SideEffect = {
  DailyMetric: (_obj, { root }) => {
    return db.sideEffect.findUnique({ where: { id: root?.id } }).DailyMetric()
  },
  Patient: (_obj, { root }) => {
    return db.sideEffect.findUnique({ where: { id: root?.id } }).Patient()
  },
}
