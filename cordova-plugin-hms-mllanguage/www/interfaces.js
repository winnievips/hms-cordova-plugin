/*
    Copyright 2023-2024. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CordovaErrors = exports.MLSoundDectSoundTypeResult = exports.MLAftConstants = exports.MLAFTEventCodes = exports.MLAftErrorCodes = exports.MLTtsError = exports.RectStyle = exports.Colors = exports.MLTtsConstants = exports.MLTtsAudioFragmentConstant = exports.MLTranslateLanguages = exports.MLSpeechRealTimeTranscriptionConstants = exports.MLRttScenes = exports.MLRttLanguages = exports.MLLanguageDetection = exports.MLDocumentSkewCorrectionConstant = exports.LANGUAGE = exports.FEATURE = exports.MLAsrConstants = void 0;
var MLAsrConstants;
(function (MLAsrConstants) {
    MLAsrConstants["PUNCTUATION_ENABLE"] = "PUNCTUATION_ENABLE";
    MLAsrConstants[MLAsrConstants["ERR_NO_NETWORK"] = 11202] = "ERR_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["ERR_NO_UNDERSTAND"] = 11204] = "ERR_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["ERR_SERVICE_UNAVAILABLE"] = 11203] = "ERR_SERVICE_UNAVAILABLE";
    MLAsrConstants["FEATURE"] = "FEATURE";
    MLAsrConstants["LANGUAGE"] = "LANGUAGE";
    MLAsrConstants["LAN_EN_US"] = "en-US";
    MLAsrConstants["LAN_FR_FR"] = "fr-FR";
    MLAsrConstants["LAN_ZH"] = "zh";
    MLAsrConstants["LAN_ZH_CN"] = "zh-CN";
    MLAsrConstants["LAN_ES_ES"] = "es-ES";
    MLAsrConstants["LAN_DE_DE"] = "de-DE";
    MLAsrConstants["LAN_RU_RU"] = "ru-RU";
    MLAsrConstants["LAN_IT_IT"] = "it-IT";
    MLAsrConstants["LAN_AR"] = "ar";
    MLAsrConstants["LAN_TH_TH"] = "th_TH";
    MLAsrConstants["LAN_MS_MY"] = "ms_MY";
    MLAsrConstants["LAN_FIL_PH"] = "fil_PH";
    MLAsrConstants["Turkish"] = "tr-TR";
    MLAsrConstants[MLAsrConstants["ERR_INVALIDATE_TOKEN"] = 11219] = "ERR_INVALIDATE_TOKEN";
    MLAsrConstants[MLAsrConstants["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    MLAsrConstants[MLAsrConstants["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
    MLAsrConstants["SCENES"] = "scenes";
    MLAsrConstants["SCENES_SHOPPING"] = "shopping";
    MLAsrConstants[MLAsrConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLAsrConstants[MLAsrConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND"] = 2] = "STATE_NO_SOUND";
    MLAsrConstants[MLAsrConstants["STATE_NO_SOUND_TIMES_EXCEED"] = 3] = "STATE_NO_SOUND_TIMES_EXCEED";
    MLAsrConstants[MLAsrConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLAsrConstants[MLAsrConstants["STATE_WAITING"] = 9] = "STATE_WAITING";
    MLAsrConstants["ACTION_HMS_ASR_SPEECH"] = "com.huawei.hms.mlsdk.action.RECOGNIZE_SPEECH";
    MLAsrConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLAsrConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
    MLAsrConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLAsrConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
})(MLAsrConstants = exports.MLAsrConstants || (exports.MLAsrConstants = {}));
var FEATURE;
(function (FEATURE) {
    FEATURE[FEATURE["FEATURE_ALLINONE"] = 12] = "FEATURE_ALLINONE";
    FEATURE[FEATURE["FEATURE_WORDFLUX"] = 11] = "FEATURE_WORDFLUX";
})(FEATURE = exports.FEATURE || (exports.FEATURE = {}));
var LANGUAGE;
(function (LANGUAGE) {
    LANGUAGE["LAN_EN_US"] = "en-US";
    LANGUAGE["LAN_FR_FR"] = "fr-FR";
    LANGUAGE["LAN_ZH"] = "zh";
    LANGUAGE["LAN_ZH_CN"] = "zh-CN";
    LANGUAGE["LAN_ES_ES"] = "es-ES";
    LANGUAGE["LAN_DE_DE"] = "de-DE";
    LANGUAGE["LAN_RU_RU"] = "ru-RU";
    LANGUAGE["LAN_IT_IT"] = "it-IT";
    LANGUAGE["LAN_AR"] = "ar";
    LANGUAGE["LAN_TH_TH"] = "th_TH";
    LANGUAGE["LAN_MS_MY"] = "ms_MY";
    LANGUAGE["LAN_FIL_PH"] = "fil_PH";
    LANGUAGE["Turkish"] = "tr-TR";
})(LANGUAGE = exports.LANGUAGE || (exports.LANGUAGE = {}));
var MLDocumentSkewCorrectionConstant;
(function (MLDocumentSkewCorrectionConstant) {
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["SUCCESS"] = 0] = "SUCCESS";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["DETECT_FAILED"] = 1] = "DETECT_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["CORRECTION_FAILED"] = 2] = "CORRECTION_FAILED";
    MLDocumentSkewCorrectionConstant[MLDocumentSkewCorrectionConstant["IMAGE_DATA_ERROR"] = 3] = "IMAGE_DATA_ERROR";
})(MLDocumentSkewCorrectionConstant = exports.MLDocumentSkewCorrectionConstant || (exports.MLDocumentSkewCorrectionConstant = {}));
var MLLanguageDetection;
(function (MLLanguageDetection) {
    MLLanguageDetection[MLLanguageDetection["FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.5] = "FIRST_BEST_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection[MLLanguageDetection["PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = 0.01] = "PROBABILITY_DETECTION_LANGUAGE_TRUSTED_THRESHOLD";
    MLLanguageDetection["UNDETECTION_LANGUAGE_TRUSTED_THRESHOLD"] = "unknown";
})(MLLanguageDetection = exports.MLLanguageDetection || (exports.MLLanguageDetection = {}));
var MLRttLanguages;
(function (MLRttLanguages) {
    MLRttLanguages["LAN_ZH_CN"] = "zh-CN";
    MLRttLanguages["LAN_EN_US"] = "en-US";
    MLRttLanguages["LAN_FR_FR"] = "fr-FR";
    MLRttLanguages["LAN_ES_ES"] = "es-ES";
    MLRttLanguages["LAN_EN_IN"] = "en-IN";
    MLRttLanguages["LAN_DE_DE"] = "de-DE";
})(MLRttLanguages = exports.MLRttLanguages || (exports.MLRttLanguages = {}));
var MLRttScenes;
(function (MLRttScenes) {
    MLRttScenes["SCENES_SHOPPINGf"] = "shopping";
})(MLRttScenes = exports.MLRttScenes || (exports.MLRttScenes = {}));
var MLSpeechRealTimeTranscriptionConstants;
(function (MLSpeechRealTimeTranscriptionConstants) {
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_INVALIDE_TOKEN"] = 13219] = "ERR_INVALIDE_TOKEN";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_NO_NETWORK"] = 13202] = "ERR_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_CREDIT"] = 13222] = "ERR_SERVICE_CREDIT";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNSUBSCRIBED"] = 13223] = "ERR_SERVICE_UNSUBSCRIBED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_FREE_USED_UP"] = 13224] = "ERR_SERVICE_FREE_USED_UP";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["ERR_SERVICE_UNAVAILABLE"] = 13203] = "ERR_SERVICE_UNAVAILABLE";
    MLSpeechRealTimeTranscriptionConstants["LAN_EN_US"] = " en-US";
    MLSpeechRealTimeTranscriptionConstants["LAN_FR_FR"] = "fr-FR";
    MLSpeechRealTimeTranscriptionConstants["LAN_ZH_CN"] = "zh-CN";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_PARTIALFINAL"] = "RESULTS_PARTIALFINAL";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_RECOGNIZING"] = "results_recognizing";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_SENTENCE_OFFSET"] = "RESULTS_SENTENCE_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["RESULTS_WORD_OFFSET"] = "RESULTS_WORD_OFFSET";
    MLSpeechRealTimeTranscriptionConstants["SCENES_SHOPPING"] = "shopping";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTED"] = 43] = "STATE_SERVICE_RECONNECTED";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_SERVICE_RECONNECTING"] = 42] = "STATE_SERVICE_RECONNECTING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_LISTENING"] = 1] = "STATE_LISTENING";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_NETWORK"] = 7] = "STATE_NO_NETWORK";
    MLSpeechRealTimeTranscriptionConstants[MLSpeechRealTimeTranscriptionConstants["STATE_NO_UNDERSTAND"] = 6] = "STATE_NO_UNDERSTAND";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_BIT_WIDTH"] = "BIT_WIDTH";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_CHANNEL_COUNT"] = "CHANNEL_COUNT";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_ENCODING"] = "ENCODING";
    MLSpeechRealTimeTranscriptionConstants["WAVE_PAINE_SAMPLE_RATE"] = "SAMPLE_RATE";
})(MLSpeechRealTimeTranscriptionConstants = exports.MLSpeechRealTimeTranscriptionConstants || (exports.MLSpeechRealTimeTranscriptionConstants = {}));
var MLTranslateLanguages;
(function (MLTranslateLanguages) {
    MLTranslateLanguages["AFRIKAANS"] = "af";
    MLTranslateLanguages["ARABIC"] = "ar";
    MLTranslateLanguages["BULGARIAN"] = "bg";
    MLTranslateLanguages["BURMESE"] = "my";
    MLTranslateLanguages["CROATIAN"] = "hr";
    MLTranslateLanguages["CZECH"] = "cs";
    MLTranslateLanguages["CHINESE"] = "zh";
    MLTranslateLanguages["TRADITIONAL_CHINESE"] = "zh-hk";
    MLTranslateLanguages["DANISH"] = "da";
    MLTranslateLanguages["DUTCH"] = "nl";
    MLTranslateLanguages["ESTONIAN"] = "et";
    MLTranslateLanguages["ENGLISH"] = "en";
    MLTranslateLanguages["FINNISH"] = "fi";
    MLTranslateLanguages["FRENCH"] = "fr";
    MLTranslateLanguages["GERMAN"] = "de";
    MLTranslateLanguages["GUJARATI"] = "gu";
    MLTranslateLanguages["GREEK"] = "el";
    MLTranslateLanguages["HUNGARIAN"] = "hu";
    MLTranslateLanguages["HINDI"] = "hi";
    MLTranslateLanguages["HEBREW"] = "he";
    MLTranslateLanguages["IRISH"] = "is";
    MLTranslateLanguages["ITALIAN"] = "it";
    MLTranslateLanguages["INDONESIAN"] = "id";
    MLTranslateLanguages["KHMER"] = "km";
    MLTranslateLanguages["KOREAN"] = "ko";
    MLTranslateLanguages["JAPANESE"] = "ja";
    MLTranslateLanguages["LATIN"] = "rm";
    MLTranslateLanguages["LATVIAN"] = "lv";
    MLTranslateLanguages["MALAY"] = "ms";
    MLTranslateLanguages["MARATHI"] = "mr";
    MLTranslateLanguages["NORWEGIAN"] = "no";
    MLTranslateLanguages["PUNJABI"] = "pa";
    MLTranslateLanguages["POLISH"] = "pl";
    MLTranslateLanguages["PORTUGUESE"] = "pt";
    MLTranslateLanguages["PERSIAN"] = "fa";
    MLTranslateLanguages["RUSSIAN"] = "ru";
    MLTranslateLanguages["ROMANIAN"] = "ro";
    MLTranslateLanguages["SERBIAN"] = "sr";
    MLTranslateLanguages["SPANISH"] = "es";
    MLTranslateLanguages["SLOVAK"] = "sk";
    MLTranslateLanguages["SWEDISH"] = "sv";
    MLTranslateLanguages["TAMIL"] = "ta";
    MLTranslateLanguages["TURKISH"] = "tr";
    MLTranslateLanguages["THAI"] = "th";
    MLTranslateLanguages["TAGALOG"] = "tl";
    MLTranslateLanguages["TELUGU"] = "te";
    MLTranslateLanguages["VIETNAMESE"] = "vi";
})(MLTranslateLanguages = exports.MLTranslateLanguages || (exports.MLTranslateLanguages = {}));
var MLTtsAudioFragmentConstant;
(function (MLTtsAudioFragmentConstant) {
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["CHANNEL_OUT_MONO"] = 4] = "CHANNEL_OUT_MONO";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_16BIT"] = 2] = "FORMAT_PCM_16BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["FORMAT_PCM_8BIT"] = 1] = "FORMAT_PCM_8BIT";
    MLTtsAudioFragmentConstant[MLTtsAudioFragmentConstant["SAMPLE_RATE_16K"] = 16000] = "SAMPLE_RATE_16K";
})(MLTtsAudioFragmentConstant = exports.MLTtsAudioFragmentConstant || (exports.MLTtsAudioFragmentConstant = {}));
var MLTtsConstants;
(function (MLTtsConstants) {
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_START"] = 1] = "EVENT_PLAY_START";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_RESUME"] = 2] = "EVENT_PLAY_RESUME";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_PAUSE"] = 3] = "EVENT_PLAY_PAUSE";
    MLTtsConstants[MLTtsConstants["EVENT_PLAY_STOP"] = 4] = "EVENT_PLAY_STOP";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_START"] = 5] = "EVENT_SYNTHESIS_START";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_END"] = 6] = "EVENT_SYNTHESIS_END";
    MLTtsConstants[MLTtsConstants["EVENT_SYNTHESIS_COMPLETE"] = 7] = "EVENT_SYNTHESIS_COMPLETE";
    MLTtsConstants["EVENT_PLAY_STOP_INTERRUPTED"] = "interrupted";
    MLTtsConstants["EVENT_SYNTHESIS_INTERRUPTED"] = "interrupted";
    MLTtsConstants[MLTtsConstants["LANGUAGE_AVAILABLE"] = 0] = "LANGUAGE_AVAILABLE";
    MLTtsConstants[MLTtsConstants["LANGUAGE_NOT_SUPPORT"] = 1] = "LANGUAGE_NOT_SUPPORT";
    MLTtsConstants[MLTtsConstants["LANGUAGE_UPDATING"] = 2] = "LANGUAGE_UPDATING";
    MLTtsConstants["TTS_EN_US"] = "en-US";
    MLTtsConstants["TTS_LAN_AR_AR"] = "ar-AR";
    MLTtsConstants["TTS_LAN_TR_TR"] = "tr-TR";
    MLTtsConstants["TTS_SPEAKER_FEMALE_AR"] = "ar-AR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TR"] = "tr-TR-st-1";
    MLTtsConstants["TTS_LAN_ES_ES"] = "es-ES";
    MLTtsConstants["TTS_LAN_FR_FR"] = "fr-FR";
    MLTtsConstants["TTS_LAN_DE_DE"] = "de-DE";
    MLTtsConstants["TTS_LAN_IT_IT"] = "it-IT";
    MLTtsConstants["TTS_LAN_RU_RU"] = "ru-RU";
    MLTtsConstants["TTS_LAN_PL_PL"] = "pl-PL";
    MLTtsConstants["TTS_LAN_TH_TH"] = " th-TH";
    MLTtsConstants["TTS_LAN_MS_MS"] = "ms-MS";
    MLTtsConstants["TTS_ZH_HANS"] = "zh-Hans";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN"] = "Female-en";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH"] = "Female-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_EN"] = "Male-en";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH"] = "Male-zh";
    MLTtsConstants["TTS_SPEAKER_MALE_ZH_2"] = "zh-Hans-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ZH_2"] = "zh-Hans-st-3";
    MLTtsConstants["TTS_SPEAKER_MALE_EN_2"] = "en-US-st-4";
    MLTtsConstants["TTS_SPEAKER_FEMALE_EN_2"] = "en-US-st-3";
    MLTtsConstants["TTS_SPEAKER_FEMALE_DE"] = "de-DE-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_ES"] = "it-IT-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_IT"] = "es-ES-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_FR"] = "fr-FR-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_RU"] = "ru-RU-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_PL"] = "pl-PL-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_TH"] = "th-TH-st-1";
    MLTtsConstants["TTS_SPEAKER_FEMALE_MS"] = "ms-MS-st-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT"] = "en-US-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE"] = "zh-Hans-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE"] = "zh-Hans-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE"] = "en-US-st-eagle-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE"] = "en-US-st-eagle-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE"] = "en-US-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE"] = "fr-FR-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE"] = "es-ES-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE"] = "de-DE-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE"] = "it-IT-st-bee-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT"] = "zh-Hans-st-bolt-1";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT"] = "zh-Hans-st-bolt-2";
    MLTtsConstants["TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT"] = "en-US-st-bolt-1";
    MLTtsConstants["TTS_ONLINE_MODE"] = "online";
    MLTtsConstants["TTS_OFFLINE_MODE"] = "offline";
    MLTtsConstants[MLTtsConstants["QUEUE_APPEND"] = 0] = "QUEUE_APPEND";
    MLTtsConstants[MLTtsConstants["QUEUE_FLUSH"] = 1] = "QUEUE_FLUSH";
    MLTtsConstants[MLTtsConstants["EXTERNAL_PLAYBACK"] = 2] = "EXTERNAL_PLAYBACK";
    MLTtsConstants[MLTtsConstants["OPEN_STREAM"] = 4] = "OPEN_STREAM";
})(MLTtsConstants = exports.MLTtsConstants || (exports.MLTtsConstants = {}));
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = -65536] = "RED";
    Colors[Colors["DKGRAY"] = -12303292] = "DKGRAY";
    Colors[Colors["GRAY"] = -7829368] = "GRAY";
    Colors[Colors["WHITE"] = -1] = "WHITE";
    Colors[Colors["BLUE"] = -16776961] = "BLUE";
    Colors[Colors["BLACK"] = -16777216] = "BLACK";
    Colors[Colors["LTGRAY"] = -3355444] = "LTGRAY";
    Colors[Colors["MAGENTA"] = -65281] = "MAGENTA";
    Colors[Colors["YELLOW"] = -256] = "YELLOW";
    Colors[Colors["CYAN"] = -16711681] = "CYAN";
    Colors[Colors["GREEN"] = -16711936] = "GREEN";
    Colors[Colors["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Colors = exports.Colors || (exports.Colors = {}));
var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 1] = "STROKE";
    RectStyle[RectStyle["FILL"] = 2] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 3] = "FILL_AND_STROKE";
})(RectStyle = exports.RectStyle || (exports.RectStyle = {}));
var MLTtsError;
(function (MLTtsError) {
    MLTtsError[MLTtsError["ERR_AUDIO_PLAYER_FAILED"] = 11305] = "ERR_AUDIO_PLAYER_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_FAILED"] = 11306] = "ERR_AUTHORIZE_FAILED";
    MLTtsError[MLTtsError["ERR_AUTHORIZE_TOKEN_INVALIDE"] = 11307] = "ERR_AUTHORIZE_TOKEN_INVALIDE";
    MLTtsError[MLTtsError["ERR_ILLEGAL_PARAMETER"] = 11301] = "ERR_ILLEGAL_PARAMETER";
    MLTtsError[MLTtsError["ERR_INSUFFICIENT_BALANCE"] = 11303] = "ERR_INSUFFICIENT_BALANCE";
    MLTtsError[MLTtsError["ERR_INTERNAL"] = 11398] = "ERR_INTERNAL";
    MLTtsError[MLTtsError["ERR_NETCONNECT_FAILED"] = 11302] = "ERR_NETCONNECT_FAILED";
    MLTtsError[MLTtsError["ERR_SPEECH_SYNTHESIS_FAILED"] = 11304] = "ERR_SPEECH_SYNTHESIS_FAILED";
    MLTtsError[MLTtsError["ERR_UNKNOWN"] = 11399] = "ERR_UNKNOWN";
})(MLTtsError = exports.MLTtsError || (exports.MLTtsError = {}));
var MLAftErrorCodes;
(function (MLAftErrorCodes) {
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_NOTSUPPORTED"] = 11101] = "ERR_AUDIO_FILE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["LANGUAGE_CODE_NOTSUPPORTED"] = 11102] = "LANGUAGE_CODE_NOTSUPPORTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_FILE_SIZE_OVERFLOW"] = 11103] = "ERR_AUDIO_FILE_SIZE_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_LENGTH_OVERFLOW"] = 11104] = "ERR_AUDIO_LENGTH_OVERFLOW";
    MLAftErrorCodes[MLAftErrorCodes["ERR_FILE_NOT_FOUND"] = 11105] = "ERR_FILE_NOT_FOUND";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ILLEGAL_PARAMETER"] = 11106] = "ERR_ILLEGAL_PARAMETER";
    MLAftErrorCodes[MLAftErrorCodes["ERR_ENGINE_BUSY"] = 11107] = "ERR_ENGINE_BUSY";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NETCONNECT_FAILED"] = 11108] = "ERR_NETCONNECT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_RESULT_WHEN_UPLOADING"] = 11109] = "ERR_RESULT_WHEN_UPLOADING";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_NOT_EXISTED"] = 11110] = "ERR_TASK_NOT_EXISTED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_TRANSCRIPT_FAILED"] = 11111] = "ERR_AUDIO_TRANSCRIPT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_INIT_FAILED"] = 11112] = "ERR_AUDIO_INIT_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUDIO_UPLOAD_FAILED"] = 11113] = "ERR_AUDIO_UPLOAD_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_TASK_ALREADY_INPROGRESS"] = 11114] = "ERR_TASK_ALREADY_INPROGRESS";
    MLAftErrorCodes[MLAftErrorCodes["ERR_NO_ENOUGH_STORAGE"] = 11115] = "ERR_NO_ENOUGH_STORAGE";
    MLAftErrorCodes[MLAftErrorCodes["ERR_AUTHORIZE_FAILED"] = 11119] = "ERR_AUTHORIZE_FAILED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_CREDIT"] = 11122] = "ERR_SERVICE_CREDIT";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_UNSUBSCRIBED"] = 11123] = "ERR_SERVICE_UNSUBSCRIBED";
    MLAftErrorCodes[MLAftErrorCodes["ERR_SERVICE_FREE_USED_UP"] = 11124] = "ERR_SERVICE_FREE_USED_UP";
    MLAftErrorCodes[MLAftErrorCodes["ERR_INTERNAL"] = 11198] = "ERR_INTERNAL";
    MLAftErrorCodes[MLAftErrorCodes["ERR_UNKNOWN"] = 11199] = "ERR_UNKNOWN";
})(MLAftErrorCodes = exports.MLAftErrorCodes || (exports.MLAftErrorCodes = {}));
var MLAFTEventCodes;
(function (MLAFTEventCodes) {
    MLAFTEventCodes[MLAFTEventCodes["PAUSE_EVENT"] = 2] = "PAUSE_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["STOP_EVENT"] = 3] = "STOP_EVENT";
    MLAFTEventCodes[MLAFTEventCodes["UPLOADED_EVENT"] = 1] = "UPLOADED_EVENT";
})(MLAFTEventCodes = exports.MLAFTEventCodes || (exports.MLAFTEventCodes = {}));
var MLAftConstants;
(function (MLAftConstants) {
    MLAftConstants["LANGUAGE_ZH"] = "zh";
    MLAftConstants["LANGUAGE_EN_US"] = "en-US";
})(MLAftConstants = exports.MLAftConstants || (exports.MLAftConstants = {}));
var MLSoundDectSoundTypeResult;
(function (MLSoundDectSoundTypeResult) {
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_NO_MEM"] = 12201] = "SOUND_DECT_ERROR_NO_MEM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_FATAL_ERROR"] = 12202] = "SOUND_DECT_ERROR_FATAL_ERROR";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_AUDIO"] = 12203] = "SOUND_DECT_ERROR_AUDIO";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_DECT_ERROR_INTERNAL"] = 12298] = "SOUND_DECT_ERROR_INTERNAL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_LAUGHTER"] = 0] = "SOUND_EVENT_TYPE_LAUGHTER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BABY_CRY"] = 1] = "SOUND_EVENT_TYPE_BABY_CRY";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNORING"] = 2] = "SOUND_EVENT_TYPE_SNORING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SNEEZE"] = 3] = "SOUND_EVENT_TYPE_SNEEZE";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_SCREAMING"] = 4] = "SOUND_EVENT_TYPE_SCREAMING";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_MEOW"] = 5] = "SOUND_EVENT_TYPE_MEOW";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_BARK"] = 6] = "SOUND_EVENT_TYPE_BARK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_WATER"] = 7] = "SOUND_EVENT_TYPE_WATER";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_CAR_ALARM"] = 8] = "SOUND_EVENT_TYPE_CAR_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_DOOR_BELL"] = 9] = "SOUND_EVENT_TYPE_DOOR_BELL";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_KNOCK"] = 10] = "SOUND_EVENT_TYPE_KNOCK";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_ALARM"] = 11] = "SOUND_EVENT_TYPE_ALARM";
    MLSoundDectSoundTypeResult[MLSoundDectSoundTypeResult["SOUND_EVENT_TYPE_STEAM_WHISTLE"] = 12] = "SOUND_EVENT_TYPE_STEAM_WHISTLE";
})(MLSoundDectSoundTypeResult = exports.MLSoundDectSoundTypeResult || (exports.MLSoundDectSoundTypeResult = {}));
var CordovaErrors;
(function (CordovaErrors) {
    CordovaErrors[CordovaErrors["UNKNOWN"] = -1] = "UNKNOWN";
    CordovaErrors[CordovaErrors["SUCCESS"] = 0] = "SUCCESS";
    CordovaErrors[CordovaErrors["DISCARDED"] = 1] = "DISCARDED";
    CordovaErrors[CordovaErrors["INNER"] = 2] = "INNER";
    CordovaErrors[CordovaErrors["INACTIVE"] = 3] = "INACTIVE";
    CordovaErrors[CordovaErrors["NOT_SUPPORTED"] = 4] = "NOT_SUPPORTED";
    CordovaErrors[CordovaErrors["ILLEGAL_PARAMETER"] = 5] = "ILLEGAL_PARAMETER";
    CordovaErrors[CordovaErrors["OVERDUE"] = 6] = "OVERDUE";
    CordovaErrors[CordovaErrors["NO_FOUND"] = 7] = "NO_FOUND";
    CordovaErrors[CordovaErrors["DUPLICATE_FOUND"] = 8] = "DUPLICATE_FOUND";
    CordovaErrors[CordovaErrors["NO_PERMISSION"] = 9] = "NO_PERMISSION";
    CordovaErrors[CordovaErrors["INSUFFICIENT_RESOURCE"] = 10] = "INSUFFICIENT_RESOURCE";
    CordovaErrors[CordovaErrors["ANALYSIS_FAILURE"] = 11] = "ANALYSIS_FAILURE";
    CordovaErrors[CordovaErrors["INTERRUPTED"] = 12] = "INTERRUPTED";
    CordovaErrors[CordovaErrors["EXCEED_RANGE"] = 13] = "EXCEED_RANGE";
    CordovaErrors[CordovaErrors["DATA_MISSING"] = 14] = "DATA_MISSING";
    CordovaErrors[CordovaErrors["AUTHENTICATION_REQUIRED"] = 15] = "AUTHENTICATION_REQUIRED";
    CordovaErrors[CordovaErrors["TFLITE_NOT_COMPATIBLE"] = 16] = "TFLITE_NOT_COMPATIBLE";
    CordovaErrors[CordovaErrors["INSUFFICIENT_SPACE"] = 17] = "INSUFFICIENT_SPACE";
    CordovaErrors[CordovaErrors["HASH_MISS"] = 18] = "HASH_MISS";
    CordovaErrors[CordovaErrors["TOKEN_INVALID"] = 19] = "TOKEN_INVALID";
    CordovaErrors[CordovaErrors["SERVICE_FAILURE"] = 20] = "SERVICE_FAILURE";
    CordovaErrors[CordovaErrors["ANALYSIS_NULL"] = 21] = "ANALYSIS_NULL";
})(CordovaErrors = exports.CordovaErrors || (exports.CordovaErrors = {}));
//# sourceMappingURL=interfaces.js.map