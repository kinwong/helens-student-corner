import fs from 'fs';
import util from 'util';

// Imports the Google Cloud client library
import textToSpeech from '@google-cloud/text-to-speech';

export class TextToSpeech {
  private _client: any;

  constructor() {
    this._client = new textToSpeech.TextToSpeechClient();
  }
  public async speak(text: string): Promise<boolean> {
    const request = {
      input: {text: text},
      // Select the language and SSML Voice Gender (optional)
      voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
      // Select the type of audio encoding
      audioConfig: {audioEncoding: 'MP3'},
    };

    const [response] = await this._client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
    return true;
  }
}
