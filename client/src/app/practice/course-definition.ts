import { VoiceSelectionParams, SsmlVoiceGender } from '../../api/text-to-speech/contract';

export interface Speaker {
  firstName: string;
  origin?: string;
  voice?: VoiceSelectionParams;
}

export const speakers: Speaker[] = [
  {
    firstName: 'Anyone',
    origin: ''
  },
  {
    firstName: 'Mary',
    origin: 'England',
    voice: {
      languageCode: 'en-GB',
      name: 'en-GB-Wavenet-A',
      ssmlGender: SsmlVoiceGender.Female
    }
  },
  {
    firstName: 'David',
    origin: 'England',
    voice: {
      languageCode: 'en-GB',
      name: 'en-GB-Wavenet-B',
      ssmlGender: SsmlVoiceGender.Male,
    }
  },
  {
    firstName: 'Janet',
    origin: 'England',
    voice: {
      languageCode: 'en-GB',
      name: 'en-GB-Wavenet-C',
      ssmlGender: SsmlVoiceGender.Female
    }
  },
  {
    firstName: 'Michael',
    origin: 'England',
    voice: {
      languageCode: 'en-GB',
      name: 'en-GB-Wavenet-D',
      ssmlGender: SsmlVoiceGender.Male
    }
  }
];

export interface Exercise {
  name: string;
  description?: string;
  instruction: string;
  scales: string[];
}

export interface Course {
  name: string;
  description: string;
  greetings: string[];
  exercises: Exercise[];
  valedictions: string[];
}

const majorScaleExercise: Exercise = {
  name: 'ABRSM Exam Scales Practice - Grade 5 Major Scales',
  instruction: 'LISTEN and PLAY',
  scales: [
    'C major left hand',
    'C major right hand',
    'C major hands together',
    'G major left hand',
    'G major right hand',
    'G major hands together',
    'D major left hand',
    'D major right hand',
    'D major hands together',
    'A major left hand',
    'A major right hand',
    'A major hands together',
    'E major left hand',
    'E major right hand',
    'E major hands together',
    'B major left hand',
    'B major right hand',
    'B major hands together',
    'F sharp major left hand',
    'F sharp major right hand',
    'F sharp major hands together',
    'F major left hand',
    'F major right hand',
    'F major hands together',
    'B flat major left hand',
    'B flat major right hand',
    'B flat major hands together',
    'E flat major left hand',
    'E flat major right hand',
    'E flat major hands together',
    'A flat major left hand',
    'A flat major right hand',
    'A flat major hands together',
    'D flat major left hand',
    'D flat major right hand',
    'D flat major hands together',
  ]
};
const minorScaleExercise: Exercise = {
  name: 'ABRSM Scales Practice - Grade 5 Harmonic Minor Scales',
  instruction: 'LISTEN and PLAY',
  scales: [
    'A harmonic minor left hand',
    'A harmonic minor right hand',
    'A harmonic minor hands together',
    'E harmonic minor left hand',
    'E harmonic minor right hand',
    'E harmonic minor hands together',
    'B harmonic minor left hand',
    'B harmonic minor right hand',
    'B harmonic minor hands together',
    'F sharp harmonic minor left hand',
    'F sharp harmonic minor right hand',
    'F sharp harmonic minor hands together',
    'C sharp harmonic minor left hand',
    'C sharp harmonic minor right hand',
    'C sharp harmonic minor hands together',
    'G sharp harmonic minor left hand',
    'G sharp harmonic minor right hand',
    'G sharp harmonic minor hands together',
    'D harmonic minor left hand',
    'D harmonic minor right hand',
    'D harmonic minor hands together',
    'G harmonic minor left hand',
    'G harmonic minor right hand',
    'G harmonic minor hands together',
    'C harmonic minor left hand',
    'C harmonic minor right hand',
    'C harmonic minor hands together',
    'F harmonic minor left hand',
    'F harmonic minor right hand',
    'F harmonic minor hands together',
    'B flat  harmonic minor left hand',
    'B flat harmonic minor right hand',
    'B flat harmonic minor hands together',
    'E flat  harmonic minor left hand',
    'E flat harmonic minor right hand',
    'E flat harmonic minor hands together',
 ]
};
const melodicMinorScaleExercise: Exercise = {
  name: 'ABRSM Scales Practice - Grade 5 Melodic Minor Scales',
  instruction: 'LISTEN and PLAY',
  scales: [
    'A melodic minor left hand',
    'A melodic minor right hand',
    'A melodic minor hands together',
    'E melodic minor left hand',
    'E melodic minor right hand',
    'E melodic minor hands together',
    'B melodic minor left hand',
    'B melodic minor right hand',
    'B melodic minor hands together',
    'F sharp melodic minor left hand',
    'F sharp melodic minor right hand',
    'F sharp melodic minor hands together',
    'C sharp melodic minor left hand',
    'C sharp melodic minor right hand',
    'C sharp melodic minor hands together',
    'G sharp melodic minor left hand',
    'G sharp melodic minor right hand',
    'G sharp melodic minor hands together',
    'D melodic minor left hand',
    'D melodic minor right hand',
    'D melodic minor hands together',
    'G melodic minor left hand',
    'G melodic minor right hand',
    'G melodic minor hands together',
    'C melodic minor left hand',
    'C melodic minor right hand',
    'C melodic minor hands together',
    'F melodic minor left hand',
    'F melodic minor right hand',
    'F melodic minor hands together',
    'B flat melodic minor left hand',
    'B flat melodic minor right hand',
    'B flat melodic minor hands together',
    'E flat melodic minor left hand',
    'E flat melodic minor right hand',
    'E flat melodic minor hands together',
  ]
};
const contraryMotionGroup1ScaleExercise: Exercise = {
  name: 'ABRSM Exam Scales Practice - Grade 5 Contrary Motion Scales Group 1',
  description: 'F major, Db major, F harmonic minor, C# harmonic minor',
  instruction: 'LISTEN and PLAY',
  scales: [
    'Scale in Contrary motion, F major',
    'Scale in Contrary motion, F harmonic minor',
    'Scale in Contrary motion, D flat major',
    'Scale in Contrary motion, C sharp harmonic minor',
  ]
};
const contraryMotionGroup2ScaleExercise: Exercise = {
  name: 'ABRSM Exam Scales Practice - Grade 5 Contrary Motion Scales Group 2',
  description: 'F# major, Bb major, F# harmonic minor, Bb harmonic minor',
  instruction: 'LISTEN and PLAY',
  scales: [
    'Scale in Contrary motion, F sharp major',
    'Scale in Contrary motion, B flat major',
    'Scale in Contrary motion, F sharp harmonic minor',
    'Scale in Contrary motion, B flat harmonic minor',
  ]
};
const chromaticScaleExercise: Exercise = {
  name: 'ABRSM Exam Scales Practice - Grade 5 Chromatic Scales',
  description: 'Grade 5 Chromatic Scales',
  instruction: 'LISTEN and PLAY',
  scales: [
    'Chromatic scale beginning on C right hand',
    'Chromatic scale beginning on C left hand',
    'Chromatic scale beginning on C hands together',
    'Chromatic scale beginning on D flat right hand',
    'Chromatic scale beginning on D flat left hand',
    'Chromatic scale beginning on D flat hands together',
    'Chromatic scale beginning on D right hand',
    'Chromatic scale beginning on D left hand',
    'Chromatic scale beginning on D hands together',
    'Chromatic scale beginning on E flat right hand',
    'Chromatic scale beginning on E flat left hand',
    'Chromatic scale beginning on E flat hands together',
    'Chromatic scale beginning on E right hand',
    'Chromatic scale beginning on E left hand',
    'Chromatic scale beginning on E hands together',
    'Chromatic scale beginning on F right hand',
    'Chromatic scale beginning on F left hand',
    'Chromatic scale beginning on F hands together',
    'Chromatic scale beginning on F sharp right hand',
    'Chromatic scale beginning on F sharp left hand',
    'Chromatic scale beginning on F sharp hands together',
    'Chromatic scale beginning on G right hand',
    'Chromatic scale beginning on G left hand',
    'Chromatic scale beginning on G hands together',
    'Chromatic scale beginning on A flat right hand',
    'Chromatic scale beginning on A flat left hand',
    'Chromatic scale beginning on A flat hands together',
    'Chromatic scale beginning on A right hand',
    'Chromatic scale beginning on A left hand',
    'Chromatic scale beginning on A hands together',
    'Chromatic scale beginning on B flat right hand',
    'Chromatic scale beginning on B flat left hand',
    'Chromatic scale beginning on B flat hands together',
    'Chromatic scale beginning on B right hand',
    'Chromatic scale beginning on B left hand',
    'Chromatic scale beginning on B hands together',
  ]
};
const chromaticContratyMotionScaleExercise: Exercise = {
  name: 'ABRSM Exam Scales Practice - Grade 5 Chromatic Contraty-Motion Scales',
  instruction: 'LISTEN and PLAY',
  scales: [
    'Scale in Chromatic Contrary-Motion beginning on D',
    'Scale in Chromatic Contrary-Motion beginning on A flat',
  ]
};
const arpeggiosScaleExercise: Exercise = {
  name: 'ABRSM Exam Scales Practice - Grade 5 Arpeggios',
  instruction: 'LISTEN and PLAY',
  scales: [
    'C major Arpeggio right hand',
    'C major Arpeggio left hand',
    'C major Arpeggio hands together',
    'C minor Arpeggio right hand',
    'C minor Arpeggio left hand',
    'C minor Arpeggio hands together',
    'G major Arpeggio right hand',
    'G major Arpeggio left hand',
    'G major Arpeggio hands together',
    'G minor Arpeggio right hand',
    'G minor Arpeggio left hand',
    'G minor Arpeggio hands together',
    'D major Arpeggio right hand',
    'D major Arpeggio left hand',
    'D major Arpeggio hands together',
    'D minor Arpeggio right hand',
    'D minor Arpeggio left hand',
    'D minor Arpeggio hands together',
    'A major Arpeggio right hand',
    'A major Arpeggio left hand',
    'A major Arpeggio hands together',
    'A minor Arpeggio right hand',
    'A minor Arpeggio left hand',
    'A minor Arpeggio hands together',
    'E major Arpeggio right hand',
    'E major Arpeggio left hand',
    'E major Arpeggio hands together',
    'E minor Arpeggio right hand',
    'E minor Arpeggio left hand',
    'E minor Arpeggio hands together',
    'B major Arpeggio right hand',
    'B major Arpeggio left hand',
    'B major Arpeggio hands together',
    'B minor Arpeggio right hand',
    'B minor Arpeggio left hand',
    'B minor Arpeggio hands together',
    'F sharp major Arpeggio right hand',
    'F sharp major Arpeggio left hand',
    'F sharp major Arpeggio hands together',
    'F sharp minor Arpeggio right hand',
    'F sharp minor Arpeggio left hand',
    'F sharp minor Arpeggio hands together',
    'D flat major Arpeggio right hand',
    'D flat major Arpeggio left hand',
    'D flat major Arpeggio hands together',
    'C sharp minor Arpeggio right hand',
    'C sharp minor Arpeggio left hand',
    'C sharp minor Arpeggio hands together',
    'A flat major Arpeggio right hand',
    'A flat major Arpeggio left hand',
    'A flat major Arpeggio hands together',
    'G sharp minor Arpeggio right hand',
    'G sharp minor Arpeggio left hand',
    'G sharp minor Arpeggio hands together',
    'E flat major Arpeggio right hand',
    'E flat major Arpeggio left hand',
    'E flat major Arpeggio hands together',
    'E flat minor Arpeggio right hand',
    'E flat minor Arpeggio left hand',
    'E flat minor Arpeggio hands together',
    'B flat major Arpeggio right hand',
    'B flat major Arpeggio left hand',
    'B flat major Arpeggio hands together',
    'B flat minor Arpeggio right hand',
    'B flat minor Arpeggio left hand',
    'B flat minor Arpeggio hands together',
    'F major Arpeggio right hand',
    'F major Arpeggio left hand',
    'F major Arpeggio hands together',
    'F minor Arpeggio right hand',
    'F minor Arpeggio left hand',
    'F minor Arpeggio hands together',
  ]
};

export const courses: Course[] = [
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Major Scales',
    description: 'Starting Practising',
    greetings: [
      'Good afternoon, please be seated and get your stool adjusted, ' +
    'we will start when you\'re ready.'],
    exercises: [
      majorScaleExercise,
      minorScaleExercise
    ],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Harmonic Minor Scales',
    description: 'Starting Practising',
    greetings: ['Now, moving on to the Harmonic Minor Scales.'],
    exercises: [majorScaleExercise, minorScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Melodic Minor Scales',
    description: 'Starting Practising',
    greetings: [
      'Now, moving on to the Melodic Minor Scales.'
    ],
    exercises: [majorScaleExercise, minorScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Contrary Motion Scales Group 1 (F major, Db major, F harmonic minor, C# harmonic minor)',
    description: 'Starting Practising',
    greetings: ['Now, moving on to the Contrary Motion Scales Group 1.'],
    exercises: [majorScaleExercise, minorScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Contrary Motion Scales Group 2 (F# major, Bb major, F# harmonic minor, Bb harmonic minor)',
    description: 'Starting Practising',
    greetings: ['Now, moving on to the Contrary Motion Scales Group 2.'],
    exercises: [majorScaleExercise, minorScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Chromatic Scales',
    description: 'Starting Practising',
    greetings: ['Now, moving on to the Chromatic Scales.'],
    exercises: [majorScaleExercise, minorScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Chromatic Contraty-Motion Scales',
    description: 'Starting Practising',
    greetings: ['Now, moving on to the Chromatic Contraty-Motion Scales.'],
    exercises: [majorScaleExercise, minorScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
  {
    name: 'ABRSM Exam Scales Practice - Grade 5 Arpeggios',
    description: 'Starting Practising',
    greetings: ['Now, moving on to the Arpeggios.'],
    exercises: [arpeggiosScaleExercise],
    valedictions: [
      'We are finished.',
      'Thank you and good bye.'
    ]
  },
];

