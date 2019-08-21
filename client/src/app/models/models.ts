
export interface Course {
  name: string;
  description: string;
  greetings: string[];
  exerciseNames: string[];
  valedictions: string[];
}

export interface Exercise {
  name: string;
  description: string;
  instruction: Sentence;
  included: boolean;
  ratio: number;
  crotchet: number;
  scales: Scale[];
}

export interface Sentence {
  display: string;
  speech?: string;
  delay?: number;
}

export interface Scale {
  display: string;
  speech?: string;

  notes?: number;
  octaves?: number;
  delay?: number;
}
