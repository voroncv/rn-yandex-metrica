import {YandexMetricaBridge as YandexMetricaBridgeNative} from './NativeModule';

export class YandexMetrica {

  static activateWithApiKey(apiKey) {
    YandexMetricaBridgeNative.activateWithApiKey(apiKey);
  }

  /**
   * Sends a custom event message.
   * @param {string} message
   */
  static reportEvent(message: string) {
    YandexMetricaBridgeNative.reportEvent(message);
  }


  /**
   * Sends error with reason.
   * @param {string} error
   * @param {object} reason
   */
  static reportError(error: string, reason: Object) {
    YandexMetricaBridgeNative.reportError(error, reason);
  }

  static setDryRun(enabled) {
    YandexMetricaBridgeNative.setDryRun(enabled);
  }

  static isInitialized() {
    return YandexMetricaBridgeNative.isInitialized();
  }

}
