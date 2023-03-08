import { db } from 'src/lib/db'

export const patients = ({ providerId, filters }) => {
  let { risk, symptoms, mood, adherence } = filters
  let andWhere = {}

  if (risk) {
    if (risk === 'high') {
      andWhere.riskStatus = { gt: 50 }
    }
  }
  /*if (symptoms) {
  }
  if (mood) {
  }*/

  return db.patient.findMany({
    where: { providerId, AND: andWhere },
  })
}

export const patient = ({ id }) => {
  return db.patient.findUnique({
    where: { id },
  })
}

export const createPatient = ({ input }) => {
  return db.patient.create({
    data: input,
  })
}
export const updatePatient = ({ id, input }) => {
  return db.patient.update({
    data: input,
    where: { id },
  })
}
export const deletePatient = ({ id }) => {
  return db.patient.delete({
    where: { id },
  })
}

export const Patient = {
  DailyMetric: (_obj, { root }) => {
    return db.patient.findUnique({ where: { id: root?.id } }).DailyMetric()
  },
  Provider: (_obj, { root }) => {
    return db.patient.findUnique({ where: { id: root?.id } }).Provider()
  },
  SideEffect: (_obj, { root }) => {
    return db.patient.findUnique({ where: { id: root?.id } }).SideEffect()
  },
}
