import { ProfileData } from "./profile.data";
import { QuestionData } from "./question.data";
import { ThemeData } from "./theme.data"

export default class QuizzData implements ThemeData{
  id: number=0;
  title: string='';
  questions: QuestionData[] = [];
  profiles:ProfileData[] = [];
}
