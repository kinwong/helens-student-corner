
export interface Course {
  name: string;
  description: string;
  greetings: string[];
  exercises: Exercise[];
  valedictions: string[];
}
export interface Sentence {
  display: string;
  speech?: string;
  delay?: number;
}
export interface Exercise {
  active: boolean;
  name: string;
  description: string;
  instruction: Sentence;
  included: boolean;
  ratio: number;
  crotchet: number;
  scales: Sentence[];
}
