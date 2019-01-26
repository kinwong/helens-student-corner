
export enum SsmlVoiceGender {
  Unspecified = 'SSML_VOICE_GENDER_UNSPECIFIED',
  Male = 'MALE',
  Female = 'FEMALE',
  Neutral = 'NEUTRAL'
}

/**
 * Configuration to set up audio encoder. The encoding determines the output audio format that we'd 
 * like.
 * @export
 * @enum {number}
 */
export enum AudioEncoding {
  Unspecified = 'AUDIO_ENCODING_UNSPECIFIED',
  Linear16 = 'LINEAR16',
  MP3 = 'MP3',
  Ogg = 'OGG_OPUS'
}

/**
 *
 *
 * @export
 * @interface Voice
 */
export interface Voice {
  languageCodes: string[];
  name: string;
  ssmlGender: SsmlVoiceGender;
  naturalSampleRateHertz: number;
}
/**
 * Contains text input to be synthesized. Either text or ssml must be supplied. Supplying both or 
 * neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
 * @export
 * @interface SynthesisInput
 */
export interface SynthesisInput {
  text?: string;
  ssml?: string;
}

export interface VoiceSelectionParams {
  languageCode: string,
  name?: string,
  ssmlGender?: SsmlVoiceGender;
}

/**
 * Description of audio data to be synthesized.
 * @export
 * @interface AudioConfig
 */
export interface AudioConfig {
  // Required. The format of the requested audio byte stream.
  audioEncoding: AudioEncoding;
  speakingRate?: number;
  pitch?: number;
  volumeGainDb?: number;
  sampleRateHertz?: number;
}

export interface SynthesizeRequest {
  input: SynthesisInput;
  voice: VoiceSelectionParams;
  audioConfig: AudioConfig;
}
export interface SynthesizeResponse {
  audioContent: string;
}
