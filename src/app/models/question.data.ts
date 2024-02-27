import { AnswerData } from "./answer.data"

export type QuestionData = {
  theme_id?:number,
  id:number,
  text:string,
  answers:AnswerData[]
}
