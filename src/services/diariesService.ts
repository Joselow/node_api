import { Diarie, DiarieWithoutComment } from '../types'
import diariesJSON from './diaries.json'

export const getDiaries = (): Diarie[] => {  
  return diariesJSON as Diarie[]
}

export const getById = (id: number): DiarieWithoutComment | undefined => {
  const diarie = diariesJSON.find(el => el.id === id)
  if (diarie) {
    const { comment, ...others } = diarie
    return others as DiarieWithoutComment
  }
}

export const getDiaresWithoutComment = (): DiarieWithoutComment[] => {
  return diariesJSON.map(el => {
    const { comment, ...other } = el
    return other;
  }) as DiarieWithoutComment[] ;
  
}

export const addDiarie = (diarie: Diarie) => {
  diariesJSON.push(diarie)
}