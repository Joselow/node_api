export const isString = (data: any): boolean => {
  return typeof data === 'string'
}

export const isNumber = (data: any): boolean => {
  return typeof data === 'number'
}

export const isDate = (date: any): boolean => {
  const theDate = new Date(date)
  return !isNaN(theDate.getTime())
}