export type Wheater = 'sunny' | 'rayni' | 'cloudy' | 'windy' | 'stormy'

export interface Diarie{
  id: number
  date: string
  weather: Wheater
  good_day: boolean
  saw_accident: boolean
  comment: string
}

export type DiarieWithoutComment  = Omit<Diarie, 'comment'>


