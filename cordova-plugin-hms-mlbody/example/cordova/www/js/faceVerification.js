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
var $imageResult_template = null;
var $imageResult_compare = null;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("FaceVerificationAnalyser").addEventListener("click", () => FaceVerificationAnalyser());
    document.getElementById("getFaceVerificationAnalyserPicker_template").addEventListener("click", function () { getimgPicker_template(); });
    document.getElementById("getFaceVerificationAnalyserPicker_compare").addEventListener("click", function () { getimgPicker_compare(); });
    document.getElementById("getFaceVerification").addEventListener("click", () => getFaceVerificationAnalyserSetting());
}, false);

async function getimgPicker_template() {
    (async () => {
        const file1 = await chooser.getFile();
        $imageResult_template = file1.uri;
    })();
}

async function getimgPicker_compare() {
    (async () => {
        const file2 = await chooser.getFile();
        $imageResult_compare = file2.uri;
    })();
}

async function FaceVerificationAnalyser() {
    var faceVerificationReq = {
        mlFaceVerificationAnalyserSetting: {
            MaxFaceDetcted: 2,
        },
        syncType: 1,
        filePath: $imageResult_template,
        filePath2: $imageResult_compare,
    };
    try {
        alert(JSON.stringify(await HMSMLBody.stillFaceVerificationAnalyser(faceVerificationReq)));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }

}

async function getFaceVerificationAnalyserSetting() {

    try {
        alert(JSON.stringify(await HMSMLBody.getFaceVerificationAnalyserSetting()));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
