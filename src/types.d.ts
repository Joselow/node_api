import { Wheater } from "./enums"
export interface Diarie{
  id: number
  date: string
  weather: Wheater
  good_day: boolean
  saw_accident: boolean
  comment: string
}

export type DiarieWithoutComment  = Omit<Diarie, 'comment'>


