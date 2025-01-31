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

import * as MLLanguagePlugin from "./interfaces";
export { appSettingReq, LANGUAGE, MLTtsConstants, MLAftConstants, Colors, RectStyle, FEATURE, CordovaErrors, MLTtsAudioFragmentConstant, MLTtsAudioFragment, MLTtsSpeaker, MLTtsError, MLSpeechRealTimeTranscriptionConstants, syncRequestLocalLangDetect, } from "./interfaces";
export declare function aftAnalyser(aftReq: MLLanguagePlugin.aftReq): Promise<MLLanguagePlugin.MLAftResult>;
export declare function getShortAftLanguages(): Promise<any>;
export declare function getLongAftLanguages(): Promise<any>;
export declare function aftAnalyserClose(): Promise<any>;
export declare function getAFTSetting(): Promise<any>;
export declare function aftAnalyserPause(): Promise<any>;
export declare function aftAnalyserDestroy(): Promise<any>;
export declare function asrAnalyser(asrReq: MLLanguagePlugin.asrReq, success: any, error: any): any;
export declare function asrAnalyserGetLanguages(): Promise<any>;
export declare function asrAnalyserStop(): Promise<any>;
export declare function remoteLangDetection(remoteLangDetectionReq: MLLanguagePlugin.remoteLangDetectionReq): Promise<MLLanguagePlugin.MLRemoteLangDetection | MLLanguagePlugin.MLlangDetectionWithFirstDetect>;
export declare function localLangDetection(localLangDetectionReq: MLLanguagePlugin.localLangDetectionReq): Promise<any>;
export declare function stopLangDetectionService(): Promise<any>;
export declare function getLangDetectionSetting(): Promise<any>;
export declare function syncFirstBestDetect(syncRequest: MLLanguagePlugin.syncRequestLocalLangDetect): Promise<String>;
export declare function syncProbabilityDetect(syncRequest: MLLanguagePlugin.syncRequestLocalLangDetect): Promise<MLLanguagePlugin.MLRemoteLangDetection>;
export declare function rttAnalyserStart(rttReq: MLLanguagePlugin.rttReq, success: any, error: any): any;
export declare function rttAnalyserStop(success: any, error: any): any;
export declare function getRTTSetting(): Promise<any>;
export declare function getRttLanguages(): Promise<any>;
export declare function soundDectAnalyser(soundDectReq: MLLanguagePlugin.soundDectReq): Promise<MLLanguagePlugin.MLSoundDectResult>;
export declare function soundDectAnalyserDestroy(): Promise<any>;
export declare function remoteTranslator(remotetranslateReq: MLLanguagePlugin.remotetranslateReq): Promise<any>;
export declare function localTranslator(localTranslateReq: MLLanguagePlugin.localtranslateReq): Promise<any>;
export declare function translatorDownloadModel(downloadTranslateReq: MLLanguagePlugin.downloadTranslateReq): Promise<any>;
export declare function translatorDeleteModel(deleteTranslateReq: MLLanguagePlugin.deleteTranslateReq): Promise<any>;
export declare function translatorLocalAllLang(localAllLangReq: MLLanguagePlugin.localAllLangReq): Promise<any>;
export declare function translatorRemoteAllLang(remoteAllLangReq: MLLanguagePlugin.remoteAllLangReq): Promise<any>;
export declare function getDownloadStrategy(): Promise<any>;
export declare function stopTranslatorService(): Promise<any>;
export declare function ttsAnalyser(ttsReq: MLLanguagePlugin.ttsReq): Promise<MLLanguagePlugin.MLTtsResult>;
export declare function ttsAnalyserStop(): Promise<any>;
export declare function ttsAnalyserSetPLayerVolume(ttsEngineReq: MLLanguagePlugin.ttsEngineReq): Promise<any>;
export declare function ttsAnalyserDownloadSetting(): Promise<any>;
export declare function ttsAnalyserEngineSetting(ttsEngineReq: MLLanguagePlugin.ttsEngineReq): Promise<MLLanguagePlugin.ttsAnalyserSettingsResults>;
export declare function ttsAnalyserShutDown(): Promise<any>;
export declare function ttsAnalyserPause(): Promise<any>;
export declare function ttsAnalyserResume(): Promise<any>;
export declare function ttsOfflineAnalyser(ttsReq: MLLanguagePlugin.ttsReq): Promise<MLLanguagePlugin.MLTtsResult>;
export declare function getTTSSetting(): Promise<any>;
