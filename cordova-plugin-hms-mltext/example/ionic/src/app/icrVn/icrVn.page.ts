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
import { Component, OnInit } from "@angular/core";
import { FileChooser } from '@awesome-cordova-plugins/file-chooser/ngx';
declare var HMSMLText;
@Component({
  selector: "app-face",
  templateUrl: "./icrVn.page.html",
  styleUrls: ["./icrVn.page.scss"],
})
export class icrVnPage {
  filePath: string = "";

  constructor(private fileChooser: FileChooser) {}

  public async getFile() {
    this.fileChooser
      .open()
      .then((uri) => (this.filePath = uri))
      .catch((e) => console.log(e));
  }

  public async captureImage() {
    var icrVnDetectorReq = {
      captureType: 1,
      filePath: this.filePath,
    };
    try {
      const result = await HMSMLText.icrVnCardDetector(
        icrVnDetectorReq
      );
      alert(JSON.stringify(result));
      console.log(JSON.stringify(result));
    } catch (Ex) {
      alert(JSON.stringify(Ex));
    }
  }

  public async icrVnDetector() {
    var icrVnDetectorReq = {};
    try {
      alert(
        JSON.stringify(
          await HMSMLText.icrVnCardDetector(icrVnDetectorReq)
        )
      );
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
}
