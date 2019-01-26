import { VoiceSelectionParams, SsmlVoiceGender } from './api/text-to-speech/contract';

export enum Cookies {
  Settings = 'settings'
}

export interface Speaker {
  firstName: string;
  origin?: string;
  voice?: VoiceSelectionParams;
}

export interface Settings {
  speaker: Speaker;
  showSubtitle: boolean;
}

/**
 * Represents a selection of speakers that use Google Wavenet voice.
 */
export const speakers: Speaker[] = [
  {
    firstName: 'Anyone',
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
