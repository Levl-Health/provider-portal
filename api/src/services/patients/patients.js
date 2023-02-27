import { db } from 'src/lib/db'

export const patients = ({ providerId }) => {
  return db.patient.findMany({ where: { providerId } })
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
