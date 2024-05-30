import { Diarie } from "../types"
import { Wheater } from "../enums"
export const isString = (data: any): boolean => {
  return typeof data === 'string'
}

export const isNumber = (data: any): boolean => {
  return typeof data === 'number'
}

export const isBoolean = (data: any): boolean => {
  return typeof data === 'boolean'
}

export const isDate = (date: any): boolean => {
  const theDate = new Date(date)
  return !isNaN(theDate.getTime()) && !isNaN(Date.parse(date))
}



export const isWheater = (wheater: any): boolean => {
  return Object.values(Wheater).includes(wheater)
}

const parseDate = (dateFromRequest: any): string => { 
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWheater = (wheaterFromRequest: any): Wheater   => { 
  if (!isString(wheaterFromRequest) || !isWheater(wheaterFromRequest)) {
    throw new Error('Incorrect or missing wheater')
  }
  return wheaterFromRequest
}

const parseComment = (dataFromrequest: any): string => {
  if (!isString(dataFromrequest)) {
    throw new Error('Incorrect or missing coment')
  }
  return dataFromrequest
}

const parseGoodDay= (dataFromrequest: any): boolean => {
  if (!isBoolean(dataFromrequest)) {
    throw new Error('Incorrect or missing good_day')
  }
  return dataFromrequest
}

const parseSawAccident= (dataFromrequest: any): boolean => {
  if (!isBoolean(dataFromrequest)) {
    throw new Error('Incorrect or missing saw_accident')
  }
  return dataFromrequest
}

const parseId= (dataFromrequest: any): number => {
  if (!isNumber(dataFromrequest)) {
    throw new Error('Incorrect or missing id')
  }
  return dataFromrequest
}

export const verifyAndGetData = (data: any): Diarie => {
  return {
    id: parseId(data.id),
    date: parseDate(data.date),
    weather: parseWheater(data.weather),
    good_day: parseGoodDay(data.good_day),
    saw_accident: parseSawAccident(data.saw_accident),
    comment: parseComment(data.comment),
  }
}
