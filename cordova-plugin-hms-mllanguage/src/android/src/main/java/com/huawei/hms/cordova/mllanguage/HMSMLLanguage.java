/*
 * Copyright 2023-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mllanguage;

import android.content.Intent;

import com.huawei.hms.cordova.mllanguage.basef.handler.CordovaController;
import com.huawei.hms.cordova.mllanguage.providers.aft.MLAftAnalyser;
import com.huawei.hms.cordova.mllanguage.providers.asr.MLAsrAnalyser;
import com.huawei.hms.cordova.mllanguage.providers.langdetection.MLLangDetectionAnalyser;
import com.huawei.hms.cordova.mllanguage.providers.rtt.MLRttAnalyser;
import com.huawei.hms.cordova.mllanguage.providers.sounddect.MLSoundDetectionAnalyser;
import com.huawei.hms.cordova.mllanguage.providers.translate.MLTranslatorAnalyser;
import com.huawei.hms.cordova.mllanguage.providers.tts.MLTtsAnalyser;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.util.Arrays;

public class HMSMLLanguage extends CordovaPlugin {
    public static final String TAG = HMSMLLanguage.class.getSimpleName();

    private static final String SERVICE = "HMSMLLanguage";

    private static final String VERSION = "3.12.0.300";

    private CordovaController cordovaController;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordovaController = new CordovaController(this, SERVICE, VERSION,
            Arrays.asList(new MLAftAnalyser(cordova), new MLAsrAnalyser(cordova), new MLLangDetectionAnalyser(cordova),
                new MLRttAnalyser(cordova), new MLSoundDetectionAnalyser(cordova), new MLTranslatorAnalyser(cordova),
                new MLTtsAnalyser(cordova)));
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        cordovaController.onActivityResult(requestCode, resultCode, intent);
    }

    @Override
    public void onPause(final boolean multitasking) {
        super.onPause(multitasking);
        cordovaController.onPause(multitasking);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        cordovaController.onDestroy();
    }

    @Override
    public void onReset() {
        super.onReset();
        cordovaController.onReset();
    }

    @Override
    public void onResume(final boolean multitasking) {
        super.onResume(multitasking);
        cordovaController.onResume(multitasking);
    }

    @Override
    public void onStart() {
        super.onStart();
        cordovaController.onStart();
    }

    @Override
    public void onStop() {
        super.onStop();
        cordovaController.onStop();
    }
}
