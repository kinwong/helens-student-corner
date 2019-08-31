import { Exercise, Course } from './models';

const majorScaleExercise: Exercise = {
  name: 'Major Scales',
  crotchet: 126,
  description:
    '<p>6 octaves; crotchet = 126<br/>' +
    'C maj, G maj, D maj, A maj, E maj, B maj, F♯ maj, F maj, B♭ maj, E♭ maj, A♭ maj, D♭ maj</p>',
  instruction: {
    display: 'Let\'s start with major scales.'
  },
  difficulty: 0.0,
  ratio: 0.5,
  scales: [
    {
      display: 'C major, left hand',
      difficulty: 0.0
    },
    {
      display: 'C major, right hand',
      difficulty: 0.0
    },
    {
      display: 'C major, hands together',
      difficulty: 0.0
    },
    {
      display: 'G major, left hand',
      difficulty: 0.0
    },
    {
      display: 'G major, right hand',
      difficulty: 0.0

    },
    {
      display: 'G major, hands together',
      difficulty: 0.0
    },
    {
      display: 'D major, left hand',
      difficulty: 0.0

    },
    {
      display: 'D major, right hand',
      difficulty: 0.0
    },
    {
      display: 'D major, hands together',
      difficulty: 0.0
    },
    {
      display: 'A major, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major, left hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'A major, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major, right hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'A major, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major, hands together</speak>',
      difficulty: 0.0

    },
    {
      display: 'E major, left hand',
      difficulty: 0.0
    },
    {
      display: 'E major, right hand',
      difficulty: 0.0

    },
    {
      display: 'E major, hands together',
      difficulty: 0.0
    },

    {
      display: 'B major, left hand',
      difficulty: 0.0
    },
    {
      display: 'B major, right hand',
      difficulty: 0.0
    },
    {
      display: 'B major, hands together',
      difficulty: 0.0
    },
    {
      display: 'F♯ major, left hand',
      speech: '<speak>F sharp major, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'F♯ major, right hand',
      speech: '<speak>F sharp major, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'F♯ major hands together',
      speech: '<speak>F sharp major, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'F major, right hand',
      difficulty: 0.0
    },
    {
      display: 'F major, hands together',
      difficulty: 0.0
    },
    {
      display: 'B♭ major, left hand',
      speech: '<speak>B flat major, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'B♭ major, right hand',
      speech: '<speak>B flat major, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'B♭ major, hands together',
      speech: '<speak>B flat major, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ major, left hand',
      speech: '<speak>E flat major, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ major, right hand',
      speech: '<speak>E flat major, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ major, hands together',
      speech: '<speak>E flat major, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'A♭ major, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'A♭ major, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'A♭ major, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'D♭ major, left hand',
      speech: '<speak>D flat major, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'D♭ major, right hand',
      speech: '<speak>D flat major, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'D♭ major, hands together',
      speech: '<speak>D flat major, hands together</speak>',
      difficulty: 0.0
    }
  ]
};
const minorScaleExercise: Exercise = {
  name: 'Harmonic Minor Scales',
  crotchet: 126,
  description:
    '<p>6 octaves; crotchet = 126<br/>' +
    'A min, E min, B min, F♯ min, C♯ min, G♯ min, D min, G min, C min, F min, B♭ min, E♭ min</p>',
  instruction: {
    display: 'Now, let\'s move on to the Harmonic Minor Scales.',
  },
  difficulty: 0.0,
  ratio: 0.5,
  scales: [
    {
      display: 'A harmonic minor, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> harmonic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'A harmonic minor, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> harmonic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'A harmonic minor, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> harmonic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'E harmonic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'E harmonic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'E harmonic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'B harmonic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'B harmonic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'B harmonic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'F♯ harmonic minor, left hand',
      speech: '<speak>F sharp harmonic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'F♯ harmonic minor, right hand',
      speech: '<speak>F sharp harmonic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'F♯ harmonic minor, hands together',
      speech: '<speak>F sharp harmonic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'C♯ harmonic minor, left hand',
      speech: '<speak>C sharp harmonic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'C♯ harmonic minor, right hand',
      speech: '<speak>C sharp harmonic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'C♯ harmonic minor, hands together',
      speech: '<speak>C sharp harmonic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'G♯ harmonic minor, left hand',
      speech: '<speak>G sharp harmonic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'G♯ harmonic minor, right hand',
      speech: '<speak>G sharp harmonic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'G♯ harmonic minor, hands together',
      speech: '<speak>C sharp harmonic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'D harmonic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'D harmonic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'D harmonic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'G harmonic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'G harmonic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'G harmonic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'C harmonic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'C harmonic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'C harmonic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'F harmonic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'F harmonic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'F harmonic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'B♭ harmonic minor, left hand',
      speech: '<speak>B flat harmonic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'B♭ harmonic minor, right hand',
      speech: '<speak>B flat harmonic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'B♭ harmonic minor, hands together',
      speech: '<speak>B flat harmonic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ harmonic minor, left hand',
      speech: '<speak>E flat harmonic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ harmonic minor, right hand',
      speech: '<speak>E flat harmonic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ harmonic minor, hands together',
      speech: '<speak>E flat harmonic minor, hands together</speak>',
      difficulty: 0.0
    }
  ]
};

const melodicMinorScaleExercise: Exercise = {
  name: 'Melodic Minor Scales',
  crotchet: 126,
  description:
    '<p>6 octaves; crotchet = 126<br/>' +
    'A min, E min, B min, F♯ min, C♯ min, G♯ min, D min, G min, C min, F min, B♭ min, E♭ min</p>',
  instruction: {
    display: 'Now, let\'s move on to the melodic minor Scales.'
  },
  ratio: 0.5,
  difficulty: 0.0,
  scales: [
    {
      display: 'A melodic minor, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> melodic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'A melodic minor, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> melodic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'A melodic minor, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> melodic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'E melodic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'E melodic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'E melodic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'B melodic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'B melodic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'B melodic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'F♯ melodic minor, left hand',
      speech: '<speak>F sharp melodic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'F♯ melodic minor, right hand',
      speech: '<speak>F sharp melodic minor, right hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'F♯ melodic minor, hands together',
      speech: '<speak>F sharp melodic minor, hands together</speak>',
      difficulty: 0.0

    },
    {
      display: 'C♯ melodic minor, left hand',
      speech: '<speak>C sharp melodic minor, left hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'C♯ melodic minor, right hand',
      speech: '<speak>C sharp melodic minor, right hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'C♯ melodic minor, hands together',
      speech: '<speak>C sharp melodic minor, hands together</speak>',
      difficulty: 0.0

    },
    {
      display: 'G♯ melodic minor, left hand',
      speech: '<speak>G sharp melodic minor, left hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'G♯ melodic minor, right hand',
      speech: '<speak>G sharp melodic minor, right hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'G♯ melodic minor, hands together',
      speech: '<speak>G sharp melodic minor, hands together</speak>',
      difficulty: 0.0
    },
    {
      display: 'D melodic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'D melodic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'D melodic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'G melodic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'G melodic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'G melodic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'C melodic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'C melodic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'C melodic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'F melodic minor, left hand',
      difficulty: 0.0
    },
    {
      display: 'F melodic minor, right hand',
      difficulty: 0.0
    },
    {
      display: 'F melodic minor, hands together',
      difficulty: 0.0
    },
    {
      display: 'B♭ melodic minor, left hand',
      speech: '<speak>B flat melodic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'B♭ melodic minor, right hand',
      speech: '<speak>B flat melodic minor, right hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'B♭ melodic minor, hands together',
      speech: '<speak>B flat melodic minor, hands together</speak>',
      difficulty: 0.0

    },
    {
      display: 'E♭ melodic minor, left hand',
      speech: '<speak>E flat melodic minor, left hand</speak>',
      difficulty: 0.0
    },
    {
      display: 'E♭ melodic minor, right hand',
      speech: '<speak>E flat melodic minor, right hand</speak>',
      difficulty: 0.0

    },
    {
      display: 'E♭ melodic minor, hands together',
      speech: '<speak>E flat melodic minor, hands together</speak>',
      difficulty: 0.0

    }
  ]
};
const contraryMotionGroup1ScaleExercise: Exercise = {
  crotchet: 126,
  name: 'Group 1 Contrary Motion Scales',
  description:
    '<p>4 octaves; crotchet = 126<br/>' +
    'F major, D♭ major, F harmonic minor, C♯ harmonic minor</p>',
  instruction: {
    display: 'Now, let\'s move on to the contrary motion scales group 1.',
  },
  difficulty: 0.0,
  ratio: 1.0,
  scales: [
    {
      display: 'Scale in Contrary motion, F major',
      speech: '<speak>Contrary motion scale in F, major</speak>',
      difficulty: 0.0
    },
    {
      display: 'Scale in Contrary motion, F harmonic minor',
      speech: '<speak>Contrary motion scale in F, harmonic minor</speak>',
      difficulty: 0.0

    },
    {
      display: 'Scale in Contrary motion, D♭ major',
      speech: '<speak>Contrary motion scale in D flat, major</speak>',
      difficulty: 0.0

    },
    {
      display: 'Scale in Contrary motion, C♯ harmonic minor',
      speech: '<speak>Contrary motion scale in C sharp, harmonic minor</speak>',
      difficulty: 0.0

    }
  ]
};
const contraryMotionGroup2ScaleExercise: Exercise = {
  crotchet: 126,
  name: 'Group 2 Contrary Motion Scales',
  description:
    '<p>4 octaves; crotchet = 126<br/>' +
    'F♯ major, B♭ major, F♯ harmonic minor, B♭ harmonic minor</p>',
  instruction: {
    display: 'Now, let\'s move on to the contrary motion scales group 2.',
  },
  difficulty: 0.0,
  ratio: 1.0,
  scales: [
    {
      display: 'Scale in Contrary motion, F♯ major',
      speech: '<speak>Contrary motion scale in F sharp, major</speak>',
      difficulty: 0.0

    },
    {
      display: 'Scale in Contrary motion, B♭ major',
      speech: '<speak>Contrary motion scale in B flat, major</speak>',
      difficulty: 0.0

    },
    {
      display: 'Scale in Contrary motion, F♯ harmonic minor',
      speech: '<speak>Contrary motion scale in F sharp, harmonic minor</speak>',
      difficulty: 0.0

    },
    {
      display: 'Scale in Contrary motion, B♭ harmonic minor',
      speech: '<speak>Contrary motion scale in B flat, harmonic minor</speak>',
      difficulty: 0.0

    }
  ]
};
const chromaticScaleExercise: Exercise = {
  crotchet: 126,
  name: 'Chromatic Scales',
  description:
    '<p>6 octaves; crotchet = 126<br/>' +
    'beginning on any note named by the examiner; hands together/ hands separately</p>',
  instruction: {
    display: 'Let\'s move on to the chromatic scales.'
  },
  difficulty: 0.0,
  ratio: 0.3,
  scales: [
    {
      display: 'Chromatic scale beginning on C, right hand',
      speech: '<speak>Chromatic scale beginning on C, right hand</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on C, left hand',
      speech: '<speak>Chromatic scale beginning on C, left hand</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on C, hands together',
      speech: '<speak>Chromatic scale beginning on C, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on D flat, right hand',
      speech: '<speak>Chromatic scale beginning on D flat, right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on D flat, left hand',
      speech: '<speak>Chromatic scale beginning on D flat, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on D flat, hands together',
      speech: '<speak>Chromatic scale beginning on D flat, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on D, right hand',
      speech: '<speak>Chromatic scale beginning on D, right hand</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on D, left hand',
      speech: '<speak>Chromatic scale beginning on D, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on D, hands together',
      speech: '<speak>Chromatic scale beginning on D, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on E, flat right hand',
      speech: '<speak>Chromatic scale beginning on E, flat right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on E flat, left hand',
      speech: '<speak>Chromatic scale beginning on E flat, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on E flat, hands together',
      speech: '<speak>Chromatic scale beginning on E flat, hands together</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on E, right hand',
      speech: '<speak>Chromatic scale beginning on E, right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on E, left hand',
      speech: '<speak>Chromatic scale beginning on E, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on E, hands together',
      speech: '<speak>Chromatic scale beginning on E, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on F, right hand',
      speech: '<speak>Chromatic scale beginning on F, right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on F, left hand',
      speech: '<speak>Chromatic scale beginning on F, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on F, hands together',
      speech: '<speak>Chromatic scale beginning on F, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on F sharp, right hand',
      speech: '<speak>Chromatic scale beginning on F sharp, right hand</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on F sharp left hand',
      speech: '<speak>Chromatic scale beginning on F sharp, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on F sharp, hands together',
      speech: '<speak>Chromatic scale beginning on F sharp, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on G, right hand',
      speech: '<speak>Chromatic scale beginning on G, right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on G, left hand',
      speech: '<speak>Chromatic scale beginning on G, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on G, hands together',
      speech: '<speak>Chromatic scale beginning on G, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on A flat, right hand',
      speech: '<speak>Chromatic scale beginning on <say-as interpret-as=\"characters\">A</say-as> flat，right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on A flat, left hand',
      speech: '<speak>Chromatic scale beginning on <say-as interpret-as=\"characters\">A</say-as> flat, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on A flat, hands together',
      speech: '<speak>Chromatic scale beginning on <say-as interpret-as=\"characters\">A</say-as> flat, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on A, right hand',
      speech: '<speak> Chromatic scale beginning on <say-as interpret-as=\"characters\">A</say-as>, right hand</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on A, left hand',
      speech: '<speak> Chromatic scale beginning on <say-as interpret-as=\"characters\">A</say-as>, left hand</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on A, hands together',
      speech: '<speak> Chromatic scale beginning on <say-as interpret-as=\"characters\">A</say-as>, hands together</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on B flat, right hand',
      speech: '<speak>Chromatic scale beginning on B flat, right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on B flat, left hand',
      speech: '<speak>Chromatic scale beginning on B flat, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on B flat, hands together',
      speech: '<speak>Chromatic scale beginning on B flat, hands together</speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on B, right hand',
      speech: '<speak>Chromatic scale beginning on B, right hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on B, left hand',
      speech: '<speak>Chromatic scale beginning on B, left hand </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Chromatic scale beginning on B, hands together',
      speech: '<speak>Chromatic scale beginning on B, hands together </speak>',
      difficulty: 0.0,
      octaves: 6,
      notes: 12,
      delay: 2000
    }
  ]
};
const chromaticContraryMotionScaleExercise: Exercise = {
  crotchet: 126,
  name: 'Chromatic Contrary-Motion Scales',
  description:
    '<p>4 octaves; crotchet = 126<br/>' +
    'hands together beginning on the same note (unison)</p>',
  instruction: {
    display: 'Let\'s move on to Chromatic Contrary-Motion Scales.',
  },
  difficulty: 0.0,
  ratio: 1.0,
  scales: [
    {
      display: 'Chromatic Scale Contrary-Motion, beginning on D',
      speech: '<speak>Chromatic Scale in Contrary Motion, beginning on D</speak>',
      difficulty: 0.0,
      octaves: 4,
      notes: 12,
      delay: 2000
    },
    {
      display: 'Scale in Chromatic Contrary-Motion beginning on A♭',
      speech: '<speak>Chromatic Scale in Contrary Motion, beginning on <say-as interpret-as=\"characters\">A</say-as> flat</speak>',
      difficulty: 0.0,
      octaves: 4,
      notes: 12,
      delay: 2000
    },
  ]
};
const arpeggiosScaleExercise: Exercise = {
  crotchet: 88,
  name: 'Arpeggios',
  description:
    '<p>6 octaves; crotchet = 88<br/>' +
    'hands together/ hands separately</p>',
  instruction: {
    display: 'Let\'s move on to arpeggios.'
  },
  difficulty: 0.0,
  ratio: 0.3,
  scales: [
    {
      display: 'C major Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'C major Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'C major Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'C minor Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'C minor Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'C minor Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'G major Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'G major Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'G major Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'G minor Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'G minor Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'G minor Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'D major Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'D major Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'D major Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'D minor Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'D minor Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'D minor Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'A major Arpeggio, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'A major Arpeggio, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'A major Arpeggio, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major Arpeggio, hands together</speak>',
      difficulty: 0.0,

    },
    {
      display: 'A minor Arpeggio, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> minor Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'A minor Arpeggio, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> minor Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'A minor Arpeggio, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> minor Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'E major Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'E major Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'E major Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'E minor Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'E minor Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'E minor Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'B major Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'B major Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'B major Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'B minor Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'B minor Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'B minor Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'F♯ major Arpeggio, right hand',
      speech: '<speak>F sharp major Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'F♯ major Arpeggio, left hand',
      speech: '<speak>F sharp major Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'F♯ major Arpeggio, hands together',
      speech: '<speak>F sharp major Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'F♯ minor Arpeggio, right hand',
      speech: '<speak>F sharp minor Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'F♯ minor Arpeggio, left hand',
      speech: '<speak>F sharp minor Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'F♯ minor Arpeggio, hands together',
      speech: '<speak>F sharp minor Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'D♭ major Arpeggio, right hand',
      speech: '<speak>D flat major Arpeggio, right hand</speak>',
      difficulty: 0.0,

    },
    {
      display: 'D♭ major Arpeggio, left hand',
      speech: '<speak>D flat major Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'D♭ major Arpeggio, hands together',
      speech: '<speak>D flat major Arpeggio, hands together</speak>',
      difficulty: 0.0,

    },
    {
      display: 'C♯ minor Arpeggio, right hand',
      speech: '<speak>C sharp minor Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'C♯ minor Arpeggio, left hand',
      speech: '<speak>C sharp minor Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'C♯ minor Arpeggio, hands together',
      speech: '<speak>C sharp minor Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'A♭ major Arpeggio, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major Arpeggio, right hand</speak>',
      difficulty: 0.0,

    },
    {
      display: 'A♭ major Arpeggio, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'A♭ major Arpeggio, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major Arpeggio, hands together</speak>',
      difficulty: 0.0,

    },
    {
      display: 'G♯ minor Arpeggio, right hand',
      speech: '<speak>G sharp minor Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'G♯ minor Arpeggio, left hand',
      speech: '<speak>G sharp minor Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'G♯ minor Arpeggio, hands together',
      speech: '<speak>G sharp minor Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'E♭ major Arpeggio, right hand',
      speech: '<speak>E flat major Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'E♭ major Arpeggio, left hand',
      speech: '<speak>E flat major Arpeggio, left hand</speak>',
      difficulty: 0.0,

    },
    {
      display: 'E♭ major Arpeggio, hands together',
      speech: '<speak>E flat major Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'E♭ minor Arpeggio, right hand',
      speech: '<speak>E flat minor Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'E♭ minor Arpeggio, left hand',
      speech: '<speak>E flat minor Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'E♭ minor Arpeggio, hands together',
      speech: '<speak>E flat minor Arpeggio, hands together</speak>',
      difficulty: 0.0,

    },
    {
      display: 'B♭ major Arpeggio, right hand',
      speech: '<speak>B flat major Arpeggio, right hand</speak>',
      difficulty: 0.0,

    },
    {
      display: 'B♭ major Arpeggio, left hand',
      speech: '<speak>B flat major Arpeggio, left hand</speak>',
      difficulty: 0.0,

    },
    {
      display: 'B♭ major Arpeggio, hands together',
      speech: '<speak>B flat major Arpeggio, hands together</speak>',
      difficulty: 0.0,

    },
    {
      display: 'B♭ minor Arpeggio, right hand',
      speech: '<speak>B flat minor Arpeggio, right hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'B♭ minor Arpeggio, left hand',
      speech: '<speak>B flat minor Arpeggio, left hand</speak>',
      difficulty: 0.0,
    },
    {
      display: 'B♭ minor Arpeggio, hands together',
      speech: '<speak>B flat minor Arpeggio, hands together</speak>',
      difficulty: 0.0,
    },
    {
      display: 'F major Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'F major Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'F major Arpeggio, hands together',
      difficulty: 0.0,
    },
    {
      display: 'F minor Arpeggio, right hand',
      difficulty: 0.0,
    },
    {
      display: 'F minor Arpeggio, left hand',
      difficulty: 0.0,
    },
    {
      display: 'F minor Arpeggio, hands together',
      difficulty: 0.0,
    }
  ]
};

export const courses: Course[] = [
  {
    name: 'Grade 5 Exam Scales Practice',
    difficulty: 0.5,
    description:
      '<p>All items are to be played from memory. The examiner will be looking for: <br/>' +
      '<ol>' +
      '<li>a positive sense of rhythm without undue accentuation;</li>' +
      '<li>even, firm tone and a musical curve;</li>' +
      '<li>good legato;</li>' +
      '<li>accurate and fluent realization of the different types of scales and arpeggios;</li>' +
      '<li>convincing negotiation of technical challenges such as smooth passage of the thumb and hand co-ordination.</li>' +
      '</ol>' +
      '</p>',
    greetings: [
      'Good afternoon, please be seated and get your stool adjusted, ',
      'We will start when you\'re ready.'],
    exerciseNames: [
      majorScaleExercise.name,
      minorScaleExercise.name,
      melodicMinorScaleExercise.name,
      contraryMotionGroup1ScaleExercise.name,
      contraryMotionGroup2ScaleExercise.name,
      chromaticScaleExercise.name,
      chromaticContraryMotionScaleExercise.name,
      arpeggiosScaleExercise.name
    ],
    valedictions: [
      ' Thank you very much.',
      ' Now Let\'s listen to your three pieces.'
    ]
  },
  {
    name: 'Grade 8 Exam Scales Practice',
    difficulty: 0.8,
    description:
      '<p>All items are to be played from memory. The examiner will be looking for: <br/>' +
      '<ol>' +
      '<li>a positive sense of rhythm without undue accentuation;</li>' +
      '<li>even, firm tone and a musical curve;</li>' +
      '<li>good legato;</li>' +
      '<li>accurate and fluent realization of the different types of scales and arpeggios;</li>' +
      '<li>convincing negotiation of technical challenges such as smooth passage of the thumb and hand co-ordination.</li>' +
      '</ol>' +
      '</p>',
    greetings: [
      'Good afternoon, please be seated and get your stool adjusted, ',
      'We will start when you\'re ready.'],
    exerciseNames: [
      majorScaleExercise.name,
      minorScaleExercise.name,
      melodicMinorScaleExercise.name,
      contraryMotionGroup1ScaleExercise.name,
      contraryMotionGroup2ScaleExercise.name,
      chromaticScaleExercise.name,
      chromaticContraryMotionScaleExercise.name,
      arpeggiosScaleExercise.name
    ],
    valedictions: [
      ' Thank you very much.',
      ' Now Let\'s listen to your three pieces.'
    ]
  },
];

// All exercises.
export const exercises: Exercise[] = [
  majorScaleExercise,
  minorScaleExercise,
  melodicMinorScaleExercise,
  contraryMotionGroup1ScaleExercise,
  contraryMotionGroup2ScaleExercise,
  chromaticScaleExercise,
  chromaticContraryMotionScaleExercise,
  arpeggiosScaleExercise
];
