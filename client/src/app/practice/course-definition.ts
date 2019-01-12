export interface Exercise {
  name: string;
  greeting: string;
  instruction: string;
  scales: string[];
}
export interface Course {
  name: string;
  description: string;
  greeting: string;
  exercises: Exercise[];
}
const majorScaleExercise: Exercise = {
  name: 'Major Scales Practice Level 1',
  greeting: '',
  instruction: 'Major Scales (3 octaves, q = 126)',
  scales: [
    'C major left hand',
    'C major right hand',
    'C major both hand',
    'D major left hand',
    'D major right hand',
    'D major both hand',
    'E major left hand',
    'E major right hand',
    'E major both hand',
    'F major left hand',
    'F major right hand',
    'F major both hand',
    'G major left hand',
    'G major right hand',
    'G major both hand',
    'A major left hand',
    'A major right hand',
    'A major both hand',
    'B major left hand',
    'B major right hand',
    'B major both hand',
  ]
};
const minorScaleExercise: Exercise = {
  name: 'minor Scales Practice Level 1',
  greeting: '',
  instruction: 'minor Scales (3 octaves, q = 126)',
  scales: [
    'C harmonic minor left hand',
    'C harmonic minor right hand',
    'C harmonic minor both hand',
    'D harmonic minor left hand',
    'D harmonic minor right hand',
    'D harmonic minor both hand',
    'E harmonic minor left hand',
    'E harmonic minor right hand',
    'E harmonic minor both hand',
    'F harmonic minor left hand',
    'F harmonic minor right hand',
    'F harmonic minor both hand',
    'G harmonic minor left hand',
    'G harmonic minor right hand',
    'G harmonic minor both hand',
    'A harmonic minor left hand',
    'A harmonic minor right hand',
    'A harmonic minor both hand',
    'B harmonic minor left hand',
    'B harmonic minor right hand',
    'B harmonic minor both hand',
  ]
};

export const courses: Course[] = [
  {
    name: 'Level 1 Scale Practice',
    description: 'Level 1 Scale Practice',
    greeting: 'Good afternoon, please be seated, and get your stool adjusted, we can start when you\'re ready.',
    exercises: [majorScaleExercise, minorScaleExercise]
  },
  {
    name: 'Level 2 Scale Practice',
    description: 'Level 2 Scale Practice',
    greeting: 'Good afternoon, please be seated, and get your stool adjusted, we can start when you\'re ready.',
    exercises: [majorScaleExercise, minorScaleExercise]
  }
];
