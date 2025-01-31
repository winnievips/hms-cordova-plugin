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

package com.huawei.hms.cordova.mltext.common;

import android.content.Context;

import com.huawei.hms.cordova.mltext.interfaces.HMSProvider;
import com.huawei.hms.cordova.mltext.logger.HMSLogger;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;

import org.apache.cordova.CallbackContext;
import org.json.JSONObject;

public class MLHMSAnalyzer extends HMSProvider {
    private static String TAG = MLHMSAnalyzer.class.getSimpleName();

    public MLHMSAnalyzer(Context ctx) {
        super(ctx);
    }

    public void setStatisticsAllowed(JSONObject params, final CallbackContext callbackContext) {
        boolean isAllowed = params.optBoolean("isAllowed", false);
        MLAnalyzerFactory.getInstance().setStatisticsAllowed(isAllowed);
        callbackContext.success("statisticsAllowed:" + isAllowed);
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlAnalyzerSetStatistic");

    }

    public void getStatisticsAllowed(final CallbackContext callbackContext) {
        callbackContext.success("statisticsAllowed:" + MLAnalyzerFactory.getInstance().isStatisticsAllowed());
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlAnalyzerGetStatistic");
    }
}
