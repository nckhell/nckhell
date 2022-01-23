export const getDayName = (date: Date) => {
  return date.toLocaleDateString('en-GB', { weekday: 'long' })
}
