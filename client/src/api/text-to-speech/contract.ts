
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

/**
 * Description of which voice to use for a synthesis request.
 * @export
 * @interface VoiceSelectionParams
 */
export interface VoiceSelectionParams {
  /**
   * The language (and optionally also the region) of the voice expressed as a BCP-47 language tag,
   * e.g. "en-US". Required. This should not include a script tag (e.g. use "cmn-cn" rather than
   * "cmn-Hant-cn"), because the script will be inferred from the input provided in the
   * SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice.
   * Note that the TTS service may choose a voice with a slightly different language code than the
   * one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there
   * isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian
   * Bokmal) instead of "no" (Norwegian)".
   * @type {string}
   * @memberof VoiceSelectionParams
   */
  languageCode: string;
  /**
   * The name of the voice. Optional; if not set, the service will choose a voice based on the other
   * parameters such as languageCode and gender.
   * @type {string}
   * @memberof VoiceSelectionParams
   */
  name?: string;
  ssmlGender?: SsmlVoiceGender;
}

/**
 * Configuration to set up audio encoder. The encoding determines the output audio format that we'd
 * like.
 * @export
 * @interface AudioConfig
 */
export interface AudioConfig {
  /**
   * Required. The format of the requested audio byte stream.
   *
   * @type {AudioEncoding}
   * @memberof AudioConfig
   */
  audioEncoding: AudioEncoding;
  /**
   * Optional speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed
   * supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0),
   * defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
   * @type {number}
   * @memberof AudioConfig
   */
  speakingRate?: number;
  /**
   * Optional speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the
   * original pitch. -20 means decrease 20 semitones from the original pitch.
   * @type {number}
   * @memberof AudioConfig
   */
  pitch?: number;
  /**
   * Optional volume gain (in dB) of the normal native volume supported by the specific voice, in
   * the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native
   * signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the
   * normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the
   * amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as
   * there's usually no effective increase in loudness for any value greater than that.
   * @type {number}
   * @memberof AudioConfig
   */
  volumeGainDb?: number;
  /**
   * The synthesis sample rate (in hertz) for this audio. Optional. If this is different from the
   * voice's natural sample rate, then the synthesizer will honor this request by converting to the
   * desired sample rate (which might result in worse audio quality), unless the specified sample
   * rate is not supported for the encoding chosen, in which case it will fail the request and
   * return google.rpc.Code.INVALID_ARGUMENT.
   */
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
