import * as lodash from 'lodash';
import { Exercise, Course } from './models';

const majorScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Major Scales',
  description:
    '<p>3 octaves; crotchet = 126<br/>' +
    'C maj, G maj, D maj, A maj, E maj, B maj, F♯ maj, F maj, B♭ maj, E♭ maj, A♭ maj, D♭ maj</p>',
  instruction: {
    display: 'Let\'s start with major scales.'
  },
  included: true,
  ratio: 0.5,
  scales: [
    { display: 'C major, left hand' },
    { display: 'C major, right hand' },
    { display: 'C major, hands together' },
    { display: 'G major, left hand' },
    { display: 'G major, right hand' },
    { display: 'G major, hands together' },
    { display: 'D major, left hand' },
    { display: 'D major, right hand' },
    { display: 'D major, hands together' },
    {
      display: 'A major, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major, left hand</speak>'
    },
    {
      display: 'A major, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major, right hand</speak>'
    },
    {
      display: 'A major, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major, hands together</speak>'
    },
    { display: 'E major, left hand' },
    { display: 'E major, right hand' },
    { display: 'E major, hands together' },

    { display: 'B major, left hand' },
    { display: 'B major, right hand' },
    { display: 'B major, hands together' },
    {
      display: 'F♯ major, left hand',
      speech: '<speak>F sharp major, left hand</speak>'
    },
    {
      display: 'F♯ major, right hand',
      speech: '<speak>F sharp major, right hand</speak>'
    },
    {
      display: 'F♯ major hands together',
      speech: '<speak>F sharp major, hands together</speak>'
    },

    { display: 'F major, right hand' },
    { display: 'F major, hands together' },
    {
      display: 'B♭ major, left hand',
      speech: '<speak>B flat major, left hand</speak>'
    },
    {
      display: 'B♭ major, right hand',
      speech: '<speak>B flat major, right hand</speak>'
    },
    {
      display: 'B♭ major, hands together',
      speech: '<speak>B flat major, hands together</speak>'
    },
    {
      display: 'E♭ major, left hand',
      speech: '<speak>E flat major, left hand</speak>'
    },
    {
      display: 'E♭ major, right hand',
      speech: '<speak>E flat major, right hand</speak>'
    },
    {
      display: 'E♭ major, hands together',
      speech: '<speak>E flat major, hands together</speak>'
    },
    {
      display: 'A♭ major, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major, left hand</speak>'
    },
    {
      display: 'A♭ major, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major, right hand</speak>'
    },
    {
      display: 'A♭ major, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major, hands together</speak>'
    },
    {
      display: 'D♭ major, left hand',
      speech: '<speak>D flat major, left hand</speak>'
    },
    {
      display: 'D♭ major, right hand',
      speech: '<speak>D flat major, right hand</speak>'
    },
    {
      display: 'D♭ major, hands together',
      speech: '<speak>D flat major, hands together</speak>'
    }
  ]
};
const minorScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Harmonic Minor Scales',
  description:
    '<p>3 octaves; crotchet = 126<br/>' +
    'A min, E min, B min, F♯ min, C♯ min, G♯ min, D min, G min, C min, F min, B♭ min, E♭ min</p>',
  instruction: {
    display: 'Now, let\'s move on to the Harmonic Minor Scales.',
  },
  included: true,
  ratio: 0.5,
  scales: [
    {
      display: 'A harmonic minor, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> harmonic minor, left hand</speak>'

    },
    {
      display: 'A harmonic minor, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> harmonic minor, right hand</speak>'

    },
    {
      display: 'A harmonic minor, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> harmonic minor, hands together</speak>'

    },
    {
      display: 'E harmonic minor, left hand',
    },
    {
      display: 'E harmonic minor, right hand',
    },
    {
      display: 'E harmonic minor, hands together',
    },
    {
      display: 'B harmonic minor, left hand',
    },
    {
      display: 'B harmonic minor, right hand',
    },
    {
      display: 'B harmonic minor, hands together',
    },
    {
      display: 'F♯ harmonic minor, left hand',
      speech: '<speak>F sharp harmonic minor, left hand</speak>'
    },
    {
      display: 'F♯ harmonic minor, right hand',
      speech: '<speak>F sharp harmonic minor, right hand</speak>'

    },
    {
      display: 'F♯ harmonic minor, hands together',
      speech: '<speak>F sharp harmonic minor, hands together</speak>'

    },
    {
      display: 'C♯ harmonic minor, left hand',
      speech: '<speak>C sharp harmonic minor, left hand</speak>'

    },
    {
      display: 'C♯ harmonic minor, right hand',
      speech: '<speak>C sharp harmonic minor, right hand</speak>'

    },
    {
      display: 'C♯ harmonic minor, hands together',
      speech: '<speak>C sharp harmonic minor, hands together</speak>'

    },
    {
      display: 'G♯ harmonic minor, left hand',
      speech: '<speak>G sharp harmonic minor, left hand</speak>'

    },
    {
      display: 'G♯ harmonic minor, right hand',
      speech: '<speak>G sharp harmonic minor, right hand</speak>'

    },
    {
      display: 'G♯ harmonic minor, hands together',
      speech: '<speak>C sharp harmonic minor, hands together</speak>'

    },
    {
      display: 'D harmonic minor, left hand',
    },
    {
      display: 'D harmonic minor, right hand',
    },
    {
      display: 'D harmonic minor, hands together',
    },
    {
      display: 'G harmonic minor, left hand',
    },
    {
      display: 'G harmonic minor, right hand',
    },
    {
      display: 'G harmonic minor, hands together',
    },
    {
      display: 'C harmonic minor, left hand',
    },
    {
      display: 'C harmonic minor, right hand',
    },
    {
      display: 'C harmonic minor, hands together',
    },
    {
      display: 'F harmonic minor, left hand',
    },
    {
      display: 'F harmonic minor, right hand',
    },
    {
      display: 'F harmonic minor, hands together',
    },
    {
      display: 'B♭ harmonic minor, left hand',
      speech: '<speak>B flat harmonic minor, left hand</speak>'
    },
    {
      display: 'B♭ harmonic minor, right hand',
      speech: '<speak>B flat harmonic minor, right hand</speak>'

    },
    {
      display: 'B♭ harmonic minor, hands together',
      speech: '<speak>B flat harmonic minor, hands together</speak>'

    },
    {
      display: 'E♭ harmonic minor, left hand',
      speech: '<speak>E flat harmonic minor, left hand</speak>'

    },
    {
      display: 'E♭ harmonic minor, right hand',
      speech: '<speak>E flat harmonic minor, right hand</speak>'
    },
    {
      display: 'E♭ harmonic minor, hands together',
      speech: '<speak>E flat harmonic minor, hands together</speak>'

    }
  ]
};

const melodicMinorScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Melodic Minor Scales',
  description:
    '<p>3 octaves; crotchet = 126<br/>' +
    'A min, E min, B min, F♯ min, C♯ min, G♯ min, D min, G min, C min, F min, B♭ min, E♭ min</p>',
  instruction: {
    display: 'Now, let\'s move on to the melodic minor Scales.'
  },
  included: true,
  ratio: 0.5,
  scales: [
    {
      display: 'A melodic minor, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> melodic minor, left hand</speak>'
    },
    {
      display: 'A melodic minor, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> melodic minor, right hand</speak>'
    },
    {
      display: 'A melodic minor, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> melodic minor, hands together</speak>'
    },
    {
      display: 'E melodic minor, left hand',
    },
    {
      display: 'E melodic minor, right hand',
    },
    {
      display: 'E melodic minor, hands together',
    },
    {
      display: 'B melodic minor, left hand',
    },
    {
      display: 'B melodic minor, right hand',
    },
    {
      display: 'B melodic minor, hands together',
    },
    {
      display: 'F♯ melodic minor, left hand',
      speech: '<speak>F sharp melodic minor, left hand</speak>'
    },
    {
      display: 'F♯ melodic minor, right hand',
      speech: '<speak>F sharp melodic minor, right hand</speak>'

    },
    {
      display: 'F♯ melodic minor, hands together',
      speech: '<speak>F sharp melodic minor, hands together</speak>'

    },
    {
      display: 'C♯ melodic minor, left hand',
      speech: '<speak>C sharp melodic minor, left hand</speak>'

    },
    {
      display: 'C♯ melodic minor, right hand',
      speech: '<speak>C sharp melodic minor, right hand</speak>'

    },
    {
      display: 'C♯ melodic minor, hands together',
      speech: '<speak>C sharp melodic minor, hands together</speak>'

    },
    {
      display: 'G♯ melodic minor, left hand',
      speech: '<speak>G sharp melodic minor, left hand</speak>'

    },
    {
      display: 'G♯ melodic minor, right hand',
      speech: '<speak>G sharp melodic minor, right hand</speak>'

    },
    {
      display: 'G♯ melodic minor, hands together',
      speech: '<speak>G sharp melodic minor, hands together</speak>'
    },
    {
      display: 'D melodic minor, left hand',
    },
    {
      display: 'D melodic minor, right hand',
    },
    {
      display: 'D melodic minor, hands together',
    },
    {
      display: 'G melodic minor, left hand',
    },
    {
      display: 'G melodic minor, right hand',
    },
    {
      display: 'G melodic minor, hands together',
    },
    {
      display: 'C melodic minor, left hand',
    },
    {
      display: 'C melodic minor, right hand',
    },
    {
      display: 'C melodic minor, hands together',
    },
    {
      display: 'F melodic minor, left hand',
    },
    {
      display: 'F melodic minor, right hand',
    },
    {
      display: 'F melodic minor, hands together',
    },
    {
      display: 'B♭ melodic minor, left hand',
      speech: '<speak>B flat melodic minor, left hand</speak>'
    },
    {
      display: 'B♭ melodic minor, right hand',
      speech: '<speak>B flat melodic minor, right hand</speak>'
    },
    {
      display: 'B♭ melodic minor, hands together',
      speech: '<speak>B flat melodic minor, hands together</speak>'

    },
    {
      display: 'E♭ melodic minor, left hand',
      speech: '<speak>E flat melodic minor, left hand</speak>'
    },
    {
      display: 'E♭ melodic minor, right hand',
      speech: '<speak>E flat melodic minor, right hand</speak>'

    },
    {
      display: 'E♭ melodic minor, hands together',
      speech: '<speak>E flat melodic minor, hands together</speak>'

    }
  ]
};
const contraryMotionGroup1ScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Group 1 Contrary Motion Scales',
  description:
    '<p>2 octaves; crotchet = 126<br/>' +
    'F major, D♭ major, F harmonic minor, C♯ harmonic minor</p>',
  instruction: {
    display: 'Now, let\'s move on to the contrary motion scales group 1.',
  },
  included: true,
  ratio: 1.0,
  scales: [
    {
      display: 'Scale in Contrary motion, F major',
      speech: '<speak>Contrary motion scale in F, major</speak>'
    },
    {
      display: 'Scale in Contrary motion, F harmonic minor',
      speech: '<speak>Contrary motion scale in F, harmonic minor</speak>'

    },
    {
      display: 'Scale in Contrary motion, D♭ major',
      speech: '<speak>Contrary motion scale in D flat, major</speak>'

    },
    {
      display: 'Scale in Contrary motion, C♯ harmonic minor',
      speech: '<speak>Contrary motion scale in C sharp, harmonic minor</speak>'

    }
  ]
};
const contraryMotionGroup2ScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Group 2 Contrary Motion Scales',
  description:
    '<p>2 octaves; crotchet = 126<br/>' +
    'F♯ major, B♭ major, F♯ harmonic minor, B♭ harmonic minor</p>',
  instruction: {
    display: 'Now, let\'s move on to the contrary motion scales group 2.',
  },
  included: true,
  ratio: 1.0,
  scales: [
    {
      display: 'Scale in Contrary motion, F♯ major',
      speech: '<speak>Contrary motion scale in F sharp, major</speak>'

    },
    {
      display: 'Scale in Contrary motion, B♭ major',
      speech: '<speak>Contrary motion scale in B flat, major</speak>'

    },
    {
      display: 'Scale in Contrary motion, F♯ harmonic minor',
      speech: '<speak>Contrary motion scale in F sharp, harmonic minor</speak>'

    },
    {
      display: 'Scale in Contrary motion, B♭ harmonic minor',
      speech: '<speak>Contrary motion scale in B flat, harmonic minor</speak>'

    }
  ]
};
const chromaticScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Chromatic Scales',
  description:
    '<p>3 octaves; crotchet = 126<br/>' +
    'beginning on any note named by the examiner; hands together/ hands separately</p>',
  instruction: {
    display: 'Let\'s move on to the chromatic scales.'
  },
  included: true,
  ratio: 0.3,
  scales: [
    {
      display: 'Chromatic scale beginning on C, right hand',
    },
    {
      display: 'Chromatic scale beginning on C, left hand',
    },
    {
      display: 'Chromatic scale beginning on C, hands together',
    },
    {
      display: 'Chromatic scale beginning on D flat, right hand',
    },
    {
      display: 'Chromatic scale beginning on D flat, left hand',
    },
    {
      display: 'Chromatic scale beginning on D flat, hands together',
    },
    {
      display: 'Chromatic scale beginning on D, right hand',
    },
    {
      display: 'Chromatic scale beginning on D, left hand',
    },
    {
      display: 'Chromatic scale beginning on D, hands together',
    },
    {
      display: 'Chromatic scale beginning on E, flat right hand',
    },
    {
      display: 'Chromatic scale beginning on E flat, left hand',
    },
    {
      display: 'Chromatic scale beginning on E flat, hands together',
    },
    {
      display: 'Chromatic scale beginning on E, right hand',
    },
    {
      display: 'Chromatic scale beginning on E, left hand',
    },
    {
      display: 'Chromatic scale beginning on E, hands together',
    },
    {
      display: 'Chromatic scale beginning on F, right hand',
    },
    {
      display: 'Chromatic scale beginning on F, left hand',
    },
    {
      display: 'Chromatic scale beginning on F, hands together',
    },
    {
      display: 'Chromatic scale beginning on F, sharp right hand',
    },
    {
      display: 'Chromatic scale beginning on F sharp left hand',
    },
    {
      display: 'Chromatic scale beginning on F sharp, hands together',
    },
    {
      display: 'Chromatic scale beginning on G, right hand',
    },
    {
      display: 'Chromatic scale beginning on G, left hand',
    },
    {
      display: 'Chromatic scale beginning on G, hands together',
    },
    {
      display: 'Chromatic scale beginning on A flat, right hand',
    },
    {
      display: 'Chromatic scale beginning on A flat, left hand',
    },
    {
      display: 'Chromatic scale beginning on A flat, hands together',
    },
    {
      display: 'Chromatic scale beginning on A, right hand',
    },
    {
      display: 'Chromatic scale beginning on A, left hand',
    },
    {
      display: 'Chromatic scale beginning on A, hands together',
    },
    {
      display: 'Chromatic scale beginning on B flat, right hand',
    },
    {
      display: 'Chromatic scale beginning on B flat, left hand',
    },
    {
      display: 'Chromatic scale beginning on B flat, hands together',
    },
    {
      display: 'Chromatic scale beginning on B, right hand',
    },
    {
      display: 'Chromatic scale beginning on B, left hand',
    },
    {
      display: 'Chromatic scale beginning on B, hands together',
    }
  ]
};
const chromaticContraryMotionScaleExercise: Exercise = {
  active: true,
  crotchet: 126,
  name: 'Chromatic Contrary-Motion Scales',
  description:
    '<p>2 octaves; crotchet = 126<br/>' +
    'hands together beginning on the same note (unison)</p>',
  instruction: {
    display: 'Let\'s move on to Chromatic Contrary-Motion Scales.',
  },
  included: true,
  ratio: 1.0,
  scales: [
    {
      display: 'Chromatic Scale Contrary-Motion, beginning on D',
      speech: '<speak>Chromatic Scale in Contrary Motion, beginning on D</speak>'
    },
    {
      display: 'Scale in Chromatic Contrary-Motion beginning on A♭',
      speech: '<speak>Chromatic Scale in Contrary Motion, beginning on <say-as interpret-as=\"characters\">A</say-as> flat </speak>'
    },
  ]
};
const arpeggiosScaleExercise: Exercise = {
  active: true,
  crotchet: 88,
  name: 'Arpeggios',
  description:
    '<p>3 octaves; crotchet = 88<br/>' +
    'hands together/ hands separately</p>',
  instruction: {
    display: 'Let\'s move on to arpeggios.'
  },
  included: true,
  ratio: 0.3,
  scales: [
    {
      display: 'C major Arpeggio, right hand',
    },
    {
      display: 'C major Arpeggio, left hand',
    },
    {
      display: 'C major Arpeggio, hands together',
    },
    {
      display: 'C minor Arpeggio, right hand',
    },
    {
      display: 'C minor Arpeggio, left hand',
    },
    {
      display: 'C minor Arpeggio, hands together',
    },
    {
      display: 'G major Arpeggio, right hand',
    },
    {
      display: 'G major Arpeggio, left hand',
    },
    {
      display: 'G major Arpeggio, hands together',
    },
    {
      display: 'G minor Arpeggio, right hand',
    },
    {
      display: 'G minor Arpeggio, left hand',
    },
    {
      display: 'G minor Arpeggio, hands together',
    },
    {
      display: 'D major Arpeggio, right hand',
    },
    {
      display: 'D major Arpeggio, left hand',
    },
    {
      display: 'D major Arpeggio, hands together',
    },
    {
      display: 'D minor Arpeggio, right hand',
    },
    {
      display: 'D minor Arpeggio, left hand',
    },
    {
      display: 'D minor Arpeggio, hands together',
    },
    {
      display: 'A major Arpeggio, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major Arpeggio, right hand</speak>'
    },
    {
      display: 'A major Arpeggio, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major Arpeggio, left hand</speak>'

    },
    {
      display: 'A major Arpeggio, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> major Arpeggio, hands together</speak>'

    },
    {
      display: 'A minor Arpeggio, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> minor Arpeggio, right hand</speak>'

    },
    {
      display: 'A minor Arpeggio, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> minor Arpeggio, left hand</speak>'

    },
    {
      display: 'A minor Arpeggio, hands together',

      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> minor Arpeggio, hands together</speak>'

    },
    {
      display: 'E major Arpeggio, right hand',
    },
    {
      display: 'E major Arpeggio, left hand',
    },
    {
      display: 'E major Arpeggio, hands together',
    },
    {
      display: 'E minor Arpeggio, right hand',
    },
    {
      display: 'E minor Arpeggio, left hand',
    },
    {
      display: 'E minor Arpeggio, hands together',
    },
    {
      display: 'B major Arpeggio, right hand',
    },
    {
      display: 'B major Arpeggio, left hand',
    },
    {
      display: 'B major Arpeggio, hands together',
    },
    {
      display: 'B minor Arpeggio, right hand',
    },
    {
      display: 'B minor Arpeggio, left hand',
    },
    {
      display: 'B minor Arpeggio, hands together',
    },
    {
      display: 'F♯ major Arpeggio, right hand',
      speech: '<speak>F sharp major Arpeggio, right hand</speak>'
    },
    {
      display: 'F♯ major Arpeggio, left hand',
      speech: '<speak>F sharp major Arpeggio, left hand</speak>'

    },
    {
      display: 'F♯ major Arpeggio, hands together',
      speech: '<speak>F sharp major Arpeggio, hands together</speak>'

    },
    {
      display: 'F♯ minor Arpeggio, right hand',
      speech: '<speak>F sharp minor Arpeggio, right hand</speak>'

    },
    {
      display: 'F♯ minor Arpeggio, left hand',
      speech: '<speak>F sharp minor Arpeggio, left hand</speak>'

    },
    {
      display: 'F♯ minor Arpeggio, hands together',
      speech: '<speak>F sharp minor Arpeggio, hands together</speak>'

    },
    {
      display: 'D♭ major Arpeggio, right hand',
      speech: '<speak>D flat major Arpeggio, right hand</speak>'

    },
    {
      display: 'D♭ major Arpeggio, left hand',
      speech: '<speak>D flat major Arpeggio, left hand</speak>'

    },
    {
      display: 'D♭ major Arpeggio, hands together',
      speech: '<speak>D flat major Arpeggio, hands together</speak>'

    },
    {
      display: 'C♯ minor Arpeggio, right hand',
      speech: '<speak>C sharp minor Arpeggio, right hand</speak>'
    },
    {
      display: 'C♯ minor Arpeggio, left hand',
      speech: '<speak>C sharp minor Arpeggio, left hand</speak>'
    },
    {
      display: 'C♯ minor Arpeggio, hands together',
      speech: '<speak>C sharp minor Arpeggio, hands together</speak>'
    },
    {
      display: 'A♭ major Arpeggio, right hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major Arpeggio, right hand</speak>'

    },
    {
      display: 'A♭ major Arpeggio, left hand',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major Arpeggio, left hand</speak>'
    },
    {
      display: 'A♭ major Arpeggio, hands together',
      speech: '<speak><say-as interpret-as=\"characters\">A</say-as> flat major Arpeggio, hands together</speak>'

    },
    {
      display: 'G♯ minor Arpeggio, right hand',
      speech: '<speak>G sharp minor Arpeggio, right hand</speak>'
    },
    {
      display: 'G♯ minor Arpeggio, left hand',
      speech: '<speak>G sharp minor Arpeggio, left hand</speak>'
    },
    {
      display: 'G♯ minor Arpeggio, hands together',
      speech: '<speak>G sharp minor Arpeggio, hands together</speak>'
    },
    {
      display: 'E♭ major Arpeggio, right hand',
      speech: '<speak>E flat major Arpeggio, right hand</speak>'
    },
    {
      display: 'E♭ major Arpeggio, left hand',
      speech: '<speak>E flat major Arpeggio, left hand</speak>'

    },
    {
      display: 'E♭ major Arpeggio, hands together',
      speech: '<speak>E flat major Arpeggio, hands together</speak>'

    },
    {
      display: 'E♭ minor Arpeggio, right hand',
      speech: '<speak>E flat minor Arpeggio, right hand</speak>'

    },
    {
      display: 'E♭ minor Arpeggio, left hand',
      speech: '<speak>E flat minor Arpeggio, left hand</speak>'

    },
    {
      display: 'E♭ minor Arpeggio, hands together',
      speech: '<speak>E flat minor Arpeggio, hands together</speak>'

    },
    {
      display: 'B♭ major Arpeggio, right hand',
      speech: '<speak>B flat major Arpeggio, right hand</speak>'

    },
    {
      display: 'B♭ major Arpeggio, left hand',
      speech: '<speak>B flat major Arpeggio, left hand</speak>'

    },
    {
      display: 'B♭ major Arpeggio, hands together',
      speech: '<speak>B flat major Arpeggio, hands together</speak>'

    },
    {
      display: 'B♭ minor Arpeggio, right hand',
      speech: '<speak>B flat minor Arpeggio, right hand</speak>'

    },
    {
      display: 'B♭ minor Arpeggio, left hand',
      speech: '<speak>B flat minor Arpeggio, left hand</speak>'

    },
    {
      display: 'B♭ minor Arpeggio, hands together',
      speech: '<speak>B flat minor Arpeggio, hands together</speak>'

    },
    {
      display: 'F major Arpeggio, right hand',
    },
    {
      display: 'F major Arpeggio, left hand',
    },
    {
      display: 'F major Arpeggio, hands together',
    },
    {
      display: 'F minor Arpeggio, right hand',
    },
    {
      display: 'F minor Arpeggio, left hand',
    },
    {
      display: 'F minor Arpeggio, hands together',
    }
  ]
};

const courses: Course[] = [
  {
    name: 'Grade 1 Exam Scales Practice',
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
      'Good afternoon, please be seated and get your stool adjusted,',
      'we will start when you\'re ready.'
    ],
    exercises: [
      lodash.cloneDeep(majorScaleExercise),
      lodash.cloneDeep(minorScaleExercise),
      lodash.cloneDeep(melodicMinorScaleExercise)
    ],
    valedictions: [
      'Thank you very much.',
      'Let\'s listen to your three pieces.'
    ]
  },
  {
    name: 'Grade 5 Exam Scales Practice',
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
      'we will start when you\'re ready.'],
    exercises: [
      lodash.cloneDeep(majorScaleExercise),
      lodash.cloneDeep(minorScaleExercise),
      lodash.cloneDeep(melodicMinorScaleExercise),
      lodash.cloneDeep(contraryMotionGroup1ScaleExercise),
      lodash.cloneDeep(contraryMotionGroup2ScaleExercise),
      lodash.cloneDeep(chromaticScaleExercise),
      lodash.cloneDeep(chromaticContraryMotionScaleExercise),
      lodash.cloneDeep(arpeggiosScaleExercise)
    ],
    valedictions: [
      ' Thank you very much.',
      ' Now Let\'s listen to your three pieces.'
    ]
  },
  {
    name: 'Grade 8 Exam Scales Practice',
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
      'we will start when you\'re ready.'],
    exercises: [
      lodash.cloneDeep(majorScaleExercise),
      lodash.cloneDeep(minorScaleExercise),
      lodash.cloneDeep(melodicMinorScaleExercise),
      lodash.cloneDeep(contraryMotionGroup1ScaleExercise),
      lodash.cloneDeep(contraryMotionGroup2ScaleExercise),
      lodash.cloneDeep(chromaticScaleExercise),
      lodash.cloneDeep(chromaticContraryMotionScaleExercise),
      lodash.cloneDeep(arpeggiosScaleExercise)
    ],
    valedictions: [
      ' Thank you very much.',
      ' Now Let\'s listen to your three pieces.'
    ]
  },
];

export function loadCourses(): Course[] {
  return lodash.cloneDeep(courses);
}