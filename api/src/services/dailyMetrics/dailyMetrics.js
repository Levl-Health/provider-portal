import { db } from 'src/lib/db'

export const dailyMetrics = () => {
  return db.dailyMetric.findMany()
}

export const dailyMetric = ({ id }) => {
  return db.dailyMetric.findUnique({
    where: { id },
  })
}

export const createDailyMetric = ({ input }) => {
  return db.dailyMetric.create({
    data: input,
  })
}

export const updateDailyMetric = ({ id, input }) => {
  return db.dailyMetric.update({
    data: input,
    where: { id },
  })
}

export const deleteDailyMetric = ({ id }) => {
  return db.dailyMetric.delete({
    where: { id },
  })
}

export const DailyMetric = {
  Patient: (_obj, { root }) => {
    return db.dailyMetric.findUnique({ where: { id: root?.id } }).Patient()
  },
  SideEffect: (_obj, { root }) => {
    return db.dailyMetric.findUnique({ where: { id: root?.id } }).SideEffect()
  },
}
