import { differenceInYears } from 'date-fns'

export const getAge = (dob: string) => {
  const date = new Date(dob)
  const age = differenceInYears(new Date(), date)

  return age
}
