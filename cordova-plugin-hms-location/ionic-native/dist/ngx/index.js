import { __decorate, __extends } from "tslib";
/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var HMSLocation = /** @class */ (function (_super) {
    __extends(HMSLocation, _super);
    function HMSLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSLocation.prototype.getGeofenceService = function () {
        return HMSLocation.getPlugin().getGeofenceService();
    };
    HMSLocation.prototype.getGeocoderService = function (language, country) {
        return HMSLocation.getPlugin().getGeocoderService(language, country);
    };
    HMSLocation.prototype.getFusedLocationProviderClient = function () {
        return HMSLocation.getPlugin().getFusedLocationProviderClient();
    };
    HMSLocation.prototype.getActivityIdentificationService = function () {
        return HMSLocation.getPlugin().getActivityIdentificationService();
    };
    HMSLocation.prototype.getCoordinateConversionService = function () {
        return HMSLocation.getPlugin().getCoordinateConversionService();
    };
    HMSLocation.prototype.addListener = function (event, callback) {
        return HMSLocation.getPlugin().addListener(event, callback);
    };
    HMSLocation.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSLocation.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSLocation.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSLocation, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    HMSLocation.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSLocation });
    HMSLocation.pluginName = "HMSLocation";
    HMSLocation.plugin = "cordova-plugin-hms-location";
    HMSLocation.pluginRef = "HMSLocation";
    HMSLocation.repo = "";
    HMSLocation.install = "";
    HMSLocation.installVariables = [];
    HMSLocation.platforms = ["Android"];
    HMSLocation = __decorate([], HMSLocation);
    return HMSLocation;
}(AwesomeCordovaNativePlugin));
export { HMSLocation };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HMSLocation, decorators: [{
            type: Injectable
        }], propDecorators: { disableLogger: [], enableLogger: [] } });
var BackgroundManager = /** @class */ (function () {
    function BackgroundManager() {
    }
    BackgroundManager.notify = function (notificationId, notification) {
    };
    BackgroundManager.makeToast = function (text, duration) {
    };
    return BackgroundManager;
}());
export { BackgroundManager };
export var Events;
(function (Events) {
    Events["ON_LOCATION_RESULT"] = "onLocationResult";
    Events["ACTIVITY_CONVERSION_RESULT"] = "onActivityConversionResult";
    Events["ACTIVITY_IDENTIFICATION_RESULT"] = "onActivityIdentificationResult";
    Events["GEOFENCE_RESULT"] = "onGeofenceResult";
})(Events || (Events = {}));
export var PriorityConstants;
(function (PriorityConstants) {
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY"] = 100] = "PRIORITY_HIGH_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_BALANCED_POWER_ACCURACY"] = 102] = "PRIORITY_BALANCED_POWER_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_LOW_POWER"] = 104] = "PRIORITY_LOW_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_NO_POWER"] = 105] = "PRIORITY_NO_POWER";
    PriorityConstants[PriorityConstants["PRIORITY_HD_ACCURACY"] = 200] = "PRIORITY_HD_ACCURACY";
    PriorityConstants[PriorityConstants["PRIORITY_INDOOR"] = 300] = "PRIORITY_INDOOR";
    PriorityConstants[PriorityConstants["PRIORITY_HIGH_ACCURACY_AND_INDOOR"] = 400] = "PRIORITY_HIGH_ACCURACY_AND_INDOOR";
})(PriorityConstants || (PriorityConstants = {}));
export var NavigationRequestConstants;
(function (NavigationRequestConstants) {
    NavigationRequestConstants[NavigationRequestConstants["OVERPASS"] = 1] = "OVERPASS";
    NavigationRequestConstants[NavigationRequestConstants["IS_SUPPORT_EX"] = 2] = "IS_SUPPORT_EX";
})(NavigationRequestConstants || (NavigationRequestConstants = {}));
export var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["VEHICLE"] = 100] = "VEHICLE";
    ActivityType[ActivityType["BIKE"] = 101] = "BIKE";
    ActivityType[ActivityType["FOOT"] = 102] = "FOOT";
    ActivityType[ActivityType["STILL"] = 103] = "STILL";
    ActivityType[ActivityType["OTHERS"] = 104] = "OTHERS";
    ActivityType[ActivityType["WALKING"] = 107] = "WALKING";
    ActivityType[ActivityType["RUNNING"] = 108] = "RUNNING";
})(ActivityType || (ActivityType = {}));
export var ConversionType;
(function (ConversionType) {
    ConversionType[ConversionType["ENTER_ACTIVITY_CONVERSION"] = 0] = "ENTER_ACTIVITY_CONVERSION";
    ConversionType[ConversionType["EXIT_ACTIVITY_CONVERSION"] = 1] = "EXIT_ACTIVITY_CONVERSION";
})(ConversionType || (ConversionType = {}));
export var CoordinateType;
(function (CoordinateType) {
    CoordinateType[CoordinateType["COORDINATE_TYPE_WGS_84"] = 1] = "COORDINATE_TYPE_WGS_84";
    CoordinateType[CoordinateType["COORDINATE_TYPE_GCJ_02"] = 0] = "COORDINATE_TYPE_GCJ_02";
})(CoordinateType || (CoordinateType = {}));
export var GeofenceInitConversionType;
(function (GeofenceInitConversionType) {
    GeofenceInitConversionType[GeofenceInitConversionType["ENTER_INIT_CONVERSION"] = 1] = "ENTER_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["EXIT_INIT_CONVERSION"] = 2] = "EXIT_INIT_CONVERSION";
    GeofenceInitConversionType[GeofenceInitConversionType["DWELL_INIT_CONVERSION"] = 4] = "DWELL_INIT_CONVERSION";
})(GeofenceInitConversionType || (GeofenceInitConversionType = {}));
export var GeofenceTriggerType;
(function (GeofenceTriggerType) {
    GeofenceTriggerType[GeofenceTriggerType["ENTER_GEOFENCE_CONVERSION"] = 1] = "ENTER_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["EXIT_GEOFENCE_CONVERSION"] = 2] = "EXIT_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["DWELL_GEOFENCE_CONVERSION"] = 4] = "DWELL_GEOFENCE_CONVERSION";
    GeofenceTriggerType[GeofenceTriggerType["GEOFENCE_NEVER_EXPIRE"] = -1] = "GEOFENCE_NEVER_EXPIRE";
})(GeofenceTriggerType || (GeofenceTriggerType = {}));
export var NotificationCategory;
(function (NotificationCategory) {
    NotificationCategory["ALARM"] = "alarm";
    NotificationCategory["CALL"] = "call";
    NotificationCategory["EMAIL"] = "email";
    NotificationCategory["ERROR"] = "err";
    NotificationCategory["EVENT"] = "event";
    NotificationCategory["MESSAGE"] = "msg";
    NotificationCategory["NAVIGATION"] = "navigation";
    NotificationCategory["PROGRESS"] = "progress";
    NotificationCategory["PROMO"] = "promo";
    NotificationCategory["RECOMMENDATION"] = "recommendation";
    NotificationCategory["REMINDER"] = "reminder";
    NotificationCategory["SERVICE"] = "service";
    NotificationCategory["SOCIAL"] = "social";
    NotificationCategory["STATUS"] = "status";
    NotificationCategory["SYSTEM"] = "sys";
    NotificationCategory["TRANSPORT"] = "transport";
})(NotificationCategory || (NotificationCategory = {}));
export var NotificationImportance;
(function (NotificationImportance) {
    NotificationImportance[NotificationImportance["DEFAULT"] = 3] = "DEFAULT";
    NotificationImportance[NotificationImportance["HIGH"] = 4] = "HIGH";
    NotificationImportance[NotificationImportance["LOW"] = 2] = "LOW";
    NotificationImportance[NotificationImportance["MAX"] = 5] = "MAX";
    NotificationImportance[NotificationImportance["MIN"] = 1] = "MIN";
    NotificationImportance[NotificationImportance["NONE"] = 0] = "NONE";
    NotificationImportance[NotificationImportance["UNSPECIFIED"] = -100] = "UNSPECIFIED";
})(NotificationImportance || (NotificationImportance = {}));
export var RequestType;
(function (RequestType) {
    RequestType["LOCATION_CALLBACK"] = "locationCallback";
    RequestType["PENDING_INTENT"] = "pendingIntent";
})(RequestType || (RequestType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFDRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7OztJQVkzRCwrQkFBMEI7Ozs7SUFFdkQsd0NBQWtCLEdBQWxCO1FBQ0ksT0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsT0FBZ0I7UUFDakQsT0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxvREFBOEIsR0FBOUI7UUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxzREFBZ0MsR0FBaEM7UUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxvREFBOEIsR0FBOUI7UUFDSSxPQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBYSxFQUFFLFFBQTJHO1FBQ2xJLE9BQU8sV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUdELG1DQUFhO0lBS2Isa0NBQVk7NkdBaENILFdBQVc7aUhBQVgsV0FBVzs7Ozs7Ozs7SUFBWCxX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V0FBWSxzQkFBc0I7SUFDOUIseUVBQVcsQ0FBQTtJQUNYLG1FQUFRLENBQUE7SUFDUixpRUFBTyxDQUFBO0lBQ1AsaUVBQU8sQ0FBQTtJQUNQLGlFQUFPLENBQUE7SUFDUCxtRUFBUSxDQUFBO0lBQ1Isb0ZBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQVJXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFRakM7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ25CLHFEQUFzQyxDQUFBO0lBQ3RDLCtDQUFnQyxDQUFBO0FBQ3BDLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIzLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgICBwbHVnaW5OYW1lOiAnSE1TTG9jYXRpb24nLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWxvY2F0aW9uJyxcclxuICAgIHBsdWdpblJlZjogJ0hNU0xvY2F0aW9uJyxcclxuICAgIHJlcG86ICcnLFxyXG4gICAgaW5zdGFsbDogJycsXHJcbiAgICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0xvY2F0aW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG5cclxuICAgIGdldEdlb2ZlbmNlU2VydmljZSgpOiBHZW9mZW5jZVNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRHZW9mZW5jZVNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHZW9jb2RlclNlcnZpY2UobGFuZ3VhZ2U6IHN0cmluZywgY291bnRyeT86IHN0cmluZyk6IEdlb2NvZGVyU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIEhNU0xvY2F0aW9uLmdldFBsdWdpbigpLmdldEdlb2NvZGVyU2VydmljZShsYW5ndWFnZSwgY291bnRyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnVzZWRMb2NhdGlvblByb3ZpZGVyQ2xpZW50KCk6IEZ1c2VkTG9jYXRpb25TZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gSE1TTG9jYXRpb24uZ2V0UGx1Z2luKCkuZ2V0RnVzZWRMb2NhdGlvblByb3ZpZGVyQ2xpZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdHlJZGVudGlmaWNhdGlvblNlcnZpY2UoKTogQWN0aXZpdHlJZGVudGlmaWNhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRBY3Rpdml0eUlkZW50aWZpY2F0aW9uU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb3JkaW5hdGVDb252ZXJzaW9uU2VydmljZSgpOiBDb29yZGluYXRlQ29udmVyc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiBITVNMb2NhdGlvbi5nZXRQbHVnaW4oKS5nZXRDb29yZGluYXRlQ29udmVyc2lvblNlcnZpY2UoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkTGlzdGVuZXIoZXZlbnQ6IEV2ZW50cywgY2FsbGJhY2s6IChkYXRhOiBMb2NhdGlvblJlc3VsdCB8IFtdIHwgQWN0aXZpdHlDb252ZXJzaW9uUmVzcG9uc2UgfCBBY3Rpdml0eUlkZW50aWZpY2F0aW9uUmVzcG9uc2UpID0+IHZvaWQpIHtcclxuICAgICAgICByZXR1cm4gSE1TTG9jYXRpb24uZ2V0UGx1Z2luKCkuYWRkTGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gICAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAgIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm90aWZ5KG5vdGlmaWNhdGlvbklkOiBudW1iZXIsIG5vdGlmaWNhdGlvbjogc3RyaW5nKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1ha2VUb2FzdCh0ZXh0OiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnVzZWRMb2NhdGlvblNlcnZpY2Uge1xyXG4gICAgZGlzYWJsZUJhY2tncm91bmRMb2NhdGlvbigpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgZW5hYmxlQmFja2dyb3VuZExvY2F0aW9uKG5vdGlmaWNhdGlvbklkOiBudW1iZXIsIG5vdGlmaWNhdGlvbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIGNoZWNrTG9jYXRpb25TZXR0aW5ncyhyZXF1ZXN0OiBMb2NhdGlvblNldHRpbmdzUmVxdWVzdCk6IFByb21pc2U8TG9jYXRpb25TZXR0aW5nc1N0YXRlcz47XHJcbiAgICBmbHVzaExvY2F0aW9ucygpOiBQcm9taXNlPHZvaWQ+XHJcbiAgICBnZXRMYXN0TG9jYXRpb24oKTogUHJvbWlzZTxMb2NhdGlvbj47XHJcbiAgICBnZXRMYXN0TG9jYXRpb25XaXRoQWRkcmVzcyhyZXF1ZXN0OiBMb2NhdGlvblJlcXVlc3QpOiBQcm9taXNlPEhXTG9jYXRpb24+O1xyXG4gICAgZ2V0TG9jYXRpb25BdmFpbGFiaWxpdHkoKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGdldE5hdmlnYXRpb25Db250ZXh0U3RhdGUocmVxdWVzdFR5cGU6IE5hdmlnYXRpb25SZXF1ZXN0Q29uc3RhbnRzKTogUHJvbWlzZTxOYXZpZ2F0aW9uUmVzdWx0PjtcclxuICAgIHJlbW92ZUxvY2F0aW9uVXBkYXRlcyhyZXF1ZXN0Q29kZTogbnVtYmVyLCB0eXBlOiBSZXF1ZXN0VHlwZSk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICByZXF1ZXN0TG9jYXRpb25VcGRhdGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIHJlcXVlc3Q6IExvY2F0aW9uUmVxdWVzdCwgY2FsbGJhY2s/OiAobG9jYXRpb25SZXN1bHQ6IExvY2F0aW9uUmVzdWx0KSA9PiB2b2lkKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIHJlcXVlc3RMb2NhdGlvblVwZGF0ZXNFeChyZXF1ZXN0Q29kZTogbnVtYmVyLCByZXF1ZXN0OiBMb2NhdGlvblJlcXVlc3QpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgc2V0TW9ja0xvY2F0aW9uKGxhdExuZzogTGF0TG5nKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHNldE1vY2tNb2RlKG1vZGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2V0TG9nQ29uZmlnKGxvZ0NvbmZpZ1NldHRpbmdzOiBMb2dDb25maWdTZXR0aW5ncyk6IFByb21pc2U8dm9pZD47XHJcbiAgICBnZXRMb2dDb25maWcoKTogUHJvbWlzZTxMb2dDb25maWdTZXR0aW5ncz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VvZmVuY2VTZXJ2aWNlIHtcclxuICAgIGNyZWF0ZUdlb2ZlbmNlTGlzdChyZXF1ZXN0Q29kZTogbnVtYmVyLCBnZW9mZW5jZXM6IEdlb2ZlbmNlW10sIGluaXRDb252ZXJzaW9uczogR2VvZmVuY2VJbml0Q29udmVyc2lvblR5cGUsIGNvb3JkaW5hdGVUeXBlOiBDb29yZGluYXRlVHlwZSwgY2FsbGJhY2s/OiAoZGF0YTogTG9jYXRpb24pID0+IHZvaWQpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgZGVsZXRlR2VvZmVuY2VMaXN0KHJlcXVlc3RDb2RlOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyU2VydmljZSB7XHJcbiAgICBnZXRGcm9tTG9jYXRpb24oZ2V0RnJvbUxvY2F0aW9uUmVxdWVzdDogR2V0RnJvbUxvY2F0aW9uUmVxdWVzdCk6IFByb21pc2U8SFdMb2NhdGlvbltdPjtcclxuICAgIGdldEZyb21Mb2NhdGlvbk5hbWUoZ2V0RnJvbUxvY2F0aW9uTmFtZVJlcXVlc3Q6IEdldEZyb21Mb2NhdGlvbk5hbWVSZXF1ZXN0KTogUHJvbWlzZTxIV0xvY2F0aW9uW10+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVDb252ZXJzaW9uU2VydmljZSB7XHJcbiAgICBjb252ZXJ0Q29vcmQobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGNvb3JkVHlwZTogbnVtYmVyKTogUHJvbWlzZTxMb25MYXQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldEZyb21Mb2NhdGlvblJlcXVlc3Qge1xyXG4gICAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgbWF4UmVzdWx0czogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0RnJvbUxvY2F0aW9uTmFtZVJlcXVlc3Qge1xyXG4gICAgbG9jYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBtYXhSZXN1bHRzOiBudW1iZXI7XHJcbiAgICBjb3JuZXI/OiBDb3JuZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb3JuZXIge1xyXG4gICAgbG93ZXJMZWZ0TGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIGxvd2VyTGVmdExvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgdXBwZXJSaWdodExhdGl0dWRlOiBudW1iZXI7XHJcbiAgICB1cHBlclJpZ2h0TG9uZ2l0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nQ29uZmlnU2V0dGluZ3Mge1xyXG4gICAgbG9nQ29uZmlnU2V0dGluZ3NGaWxlPyA6IExvZ0NvbmZpZ1NldHRpbmdzRmlsZTtcclxuICAgIGxvZ1BhdGg6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ0NvbmZpZ1NldHRpbmdzRmlsZSB7XHJcbiAgICBmaWxlRXhwaXJlZFRpbWU6IG51bWJlcjtcclxuICAgIGZpbGVOdW06IG51bWJlcjtcclxuICAgIGZpbGVTaXplOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUlkZW50aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgICBjcmVhdGVBY3Rpdml0eUNvbnZlcnNpb25VcGRhdGVzKHJlcXVlc3RDb2RlOiBudW1iZXIsIGFjdGl2aXR5Q29udmVyc2lvblJlcXVlc3Q6IEFjdGl2aXR5Q29udmVyc2lvbkluZm9bXSwgY2FsbGJhY2s/OiAoZGF0YTogQWN0aXZpdHlDb252ZXJzaW9uUmVzcG9uc2UpID0+IHZvaWQpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgY3JlYXRlQWN0aXZpdHlJZGVudGlmaWNhdGlvblVwZGF0ZXMocmVxdWVzdENvZGU6IG51bWJlciwgaW50ZXJ2YWxNaWxsaXM6IG51bWJlciwgY2FsbGJhY2s/OiAoZGF0YTogQWN0aXZpdHlJZGVudGlmaWNhdGlvblJlc3BvbnNlKSA9PiB2b2lkKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGRlbGV0ZUFjdGl2aXR5Q29udmVyc2lvblVwZGF0ZXMocmVxdWVzdENvZGU6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBkZWxldGVBY3Rpdml0eUlkZW50aWZpY2F0aW9uVXBkYXRlcyhyZXF1ZXN0Q29kZTogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbiB7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXHJcbiAgICBhbHRpdHVkZTogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIGJlYXJpbmc6IG51bWJlcixcclxuICAgIGFjY3VyYWN5OiBudW1iZXIsXHJcbiAgICB0aW1lOiBudW1iZXIsXHJcbiAgICBmcm9tTW9ja1Byb3ZpZGVyOiBib29sZWFuLFxyXG4gICAgdmVydGljYWxBY2N1cmFjeU1ldGVyczogbnVtYmVyLFxyXG4gICAgYmVhcmluZ0FjY3VyYWN5RGVncmVlczogbnVtYmVyLFxyXG4gICAgc3BlZWRBY2N1cmFjeU1ldGVyc1BlclNlY29uZDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSFdMb2NhdGlvbiB7XHJcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXHJcbiAgICBhbHRpdHVkZTogbnVtYmVyLFxyXG4gICAgc3BlZWQ6IG51bWJlcixcclxuICAgIGJlYXJpbmc6IG51bWJlcixcclxuICAgIGFjY3VyYWN5OiBudW1iZXIsXHJcbiAgICBwcm92aWRlcjogc3RyaW5nLFxyXG4gICAgdGltZTogbnVtYmVyLFxyXG4gICAgZWxhcHNlZFJlYWx0aW1lTmFub3M6IG51bWJlcixcclxuICAgIGNvdW50cnlOYW1lOiBzdHJpbmcsXHJcbiAgICBzdGF0ZTogc3RyaW5nLFxyXG4gICAgY2l0eTogc3RyaW5nLFxyXG4gICAgY291bnR5OiBzdHJpbmcsXHJcbiAgICBzdHJlZXQ6IHN0cmluZyxcclxuICAgIGZlYXR1cmVOYW1lOiBzdHJpbmcsXHJcbiAgICBwb3N0YWxDb2RlOiBzdHJpbmcsXHJcbiAgICBwaG9uZTogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBleHRyYUluZm86IHN0cmluZyxcclxuICAgIHZlcnRpY2FsQWNjdXJhY3lNZXRlcnM6IG51bWJlcixcclxuICAgIGJlYXJpbmdBY2N1cmFjeURlZ3JlZXM6IG51bWJlcixcclxuICAgIHNwZWVkQWNjdXJhY3lNZXRlcnNQZXJTZWNvbmQ6IG51bWJlcixcclxuICAgIGNvb3JkaW5hdGVUeXBlOiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25TZXR0aW5nc1N0YXRlcyB7XHJcbiAgICBpc0JsZVByZXNlbnQ6IGJvb2xlYW5cclxuICAgIGlzQmxlVXNhYmxlOiBib29sZWFuLFxyXG4gICAgaXNHbnNzUHJlc2VudDogYm9vbGVhbixcclxuICAgIGlzR25zc1VzYWJsZTogYm9vbGVhbixcclxuICAgIGlzTG9jYXRpb25QcmVzZW50OiBib29sZWFuLFxyXG4gICAgaXNMb2NhdGlvblVzYWJsZTogYm9vbGVhbixcclxuICAgIGlzTmV0d29ya0xvY2F0aW9uUHJlc2VudDogYm9vbGVhbixcclxuICAgIGlzTmV0d29ya0xvY2F0aW9uVXNhYmxlOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uUmVxdWVzdCB7XHJcbiAgICBwcmlvcml0eTogUHJpb3JpdHlDb25zdGFudHMsXHJcbiAgICBpbnRlcnZhbD86IG51bWJlcixcclxuICAgIG51bVVwZGF0ZXM/OiBudW1iZXIsXHJcbiAgICBmYXN0ZXN0SW50ZXJ2YWw/OiBudW1iZXIsXHJcbiAgICBleHBpcmF0aW9uVGltZT86IG51bWJlcixcclxuICAgIGV4cGlyYXRpb25UaW1lRHVyYXRpb24/OiBudW1iZXIsXHJcbiAgICBzbWFsbGVzdERpc3BsYWNlbWVudD86IG51bWJlcixcclxuICAgIG1heFdhaXRUaW1lPzogbnVtYmVyLFxyXG4gICAgbmVlZEFkZHJlc3M/OiBib29sZWFuLFxyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmcsXHJcbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZyxcclxuICAgIGNvb3JkaW5hdGVUeXBlPzogbnVtYmVyLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU2V0dGluZ3NSZXF1ZXN0IHtcclxuICAgIGxvY2F0aW9uUmVxdWVzdHM6IExvY2F0aW9uUmVxdWVzdFtdLFxyXG4gICAgbmVlZEJsZTogYm9vbGVhbixcclxuICAgIGFsd2F5c1Nob3c6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF0TG5nIHtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gICAgbGF0aXR1ZGU6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25SZXN1bHQge1xyXG4gICAgc3RhdGU6IG51bWJlcixcclxuICAgIHBvc3NpYmlsaXR5OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUNvbnZlcnNpb25JbmZvIHtcclxuICAgIGNvbnZlcnNpb25UeXBlOiBDb252ZXJzaW9uVHlwZSxcclxuICAgIGFjdGl2aXR5VHlwZTogQWN0aXZpdHlUeXBlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VvZmVuY2Uge1xyXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXHJcbiAgICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gICAgcmFkaXVzOiBudW1iZXIsXHJcbiAgICB1bmlxdWVJZDogc3RyaW5nLFxyXG4gICAgY29udmVyc2lvbnM6IEdlb2ZlbmNlVHJpZ2dlclR5cGUsXHJcbiAgICB2YWxpZENvbnRpbnVlVGltZTogbnVtYmVyLFxyXG4gICAgZHdlbGxEZWxheVRpbWU6IG51bWJlcixcclxuICAgIG5vdGlmaWNhdGlvbkludGVydmFsOiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcclxuICAgIGNvbnRlbnRUaXRsZT86IHN0cmluZyxcclxuICAgIGNhdGVnb3J5OiBOb3RpZmljYXRpb25DYXRlZ29yeSxcclxuICAgIHByaW9yaXR5OiBOb3RpZmljYXRpb25JbXBvcnRhbmNlLFxyXG4gICAgY2hhbm5lbE5hbWU6IHN0cmluZyxcclxuICAgIGNvbG9yPzogbnVtYmVyLFxyXG4gICAgY29sb3JpemVkPzogYm9vbGVhbixcclxuICAgIGNvbnRlbnRJbmZvPzogc3RyaW5nLFxyXG4gICAgY29udGVudFRleHQ/OiBzdHJpbmcsXHJcbiAgICBsYXJnZUljb24/OiBzdHJpbmcsXHJcbiAgICBvbkdvaW5nPzogYm9vbGVhbixcclxuICAgIHNtYWxsSWNvbjogc3RyaW5nLFxyXG4gICAgc3ViVGV4dD86IHN0cmluZyxcclxuICAgIHNvdW5kPzogc3RyaW5nLFxyXG4gICAgdmlicmF0ZT86IG51bWJlcltdLFxyXG4gICAgdmlzaWJpbGl0eT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uUmVzdWx0IHtcclxuICAgIGxhc3RMb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBod0xvY2F0aW9uczogSFdMb2NhdGlvbltdLFxyXG4gICAgbGFzdEhXTG9jYXRpb246IEhXTG9jYXRpb24sXHJcbiAgICBsb2NhdGlvbnM6IExvY2F0aW9uW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUNvbnZlcnNpb25EYXRhIHtcclxuICAgIGFjdGl2aXR5VHlwZTogQWN0aXZpdHlUeXBlLFxyXG4gICAgY29udmVyc2lvblR5cGU6IENvbnZlcnNpb25UeXBlLFxyXG4gICAgZWxhcHNlZFRpbWVGcm9tUmVib290OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUNvbnZlcnNpb25SZXNwb25zZSB7XHJcbiAgICBhY3Rpdml0eUNvbnZlcnNpb25EYXRhTGlzdDogQWN0aXZpdHlDb252ZXJzaW9uRGF0YVtdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlJZGVudGlmaWNhdGlvbkRhdGEge1xyXG4gICAgaWRlbnRpZmljYXRpb25BY3Rpdml0eTogQWN0aXZpdHlUeXBlLFxyXG4gICAgcG9zc2liaWxpdHk6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5SWRlbnRpZmljYXRpb25SZXNwb25zZSB7XHJcbiAgICBlbGFwc2VkVGltZUZyb21SZWJvb3Q6IG51bWJlcixcclxuICAgIG1vc3RBY3Rpdml0eUlkZW50aWZpY2F0aW9uOiBBY3Rpdml0eUNvbnZlcnNpb25JbmZvLFxyXG4gICAgdGltZTogbnVtYmVyLFxyXG4gICAgYWN0aXZpdHlJZGVudGlmaWNhdGlvbkRhdGFzOiBBY3Rpdml0eUlkZW50aWZpY2F0aW9uRGF0YVtdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9uTGF0IHtcclxuICAgIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gICAgbGF0aXR1ZGU6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdmVudHMge1xyXG4gICAgT05fTE9DQVRJT05fUkVTVUxUID0gJ29uTG9jYXRpb25SZXN1bHQnLFxyXG4gICAgQUNUSVZJVFlfQ09OVkVSU0lPTl9SRVNVTFQgPSAnb25BY3Rpdml0eUNvbnZlcnNpb25SZXN1bHQnLFxyXG4gICAgQUNUSVZJVFlfSURFTlRJRklDQVRJT05fUkVTVUxUID0gJ29uQWN0aXZpdHlJZGVudGlmaWNhdGlvblJlc3VsdCcsXHJcbiAgICBHRU9GRU5DRV9SRVNVTFQgPSAnb25HZW9mZW5jZVJlc3VsdCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJpb3JpdHlDb25zdGFudHMge1xyXG4gICAgUFJJT1JJVFlfSElHSF9BQ0NVUkFDWSA9IDEwMCxcclxuICAgIFBSSU9SSVRZX0JBTEFOQ0VEX1BPV0VSX0FDQ1VSQUNZID0gMTAyLFxyXG4gICAgUFJJT1JJVFlfTE9XX1BPV0VSID0gMTA0LFxyXG4gICAgUFJJT1JJVFlfTk9fUE9XRVIgPSAxMDUsXHJcbiAgICBQUklPUklUWV9IRF9BQ0NVUkFDWSA9IDIwMCxcclxuICAgIFBSSU9SSVRZX0lORE9PUiA9IDMwMCxcclxuICAgIFBSSU9SSVRZX0hJR0hfQUNDVVJBQ1lfQU5EX0lORE9PUiA9IDQwMCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTmF2aWdhdGlvblJlcXVlc3RDb25zdGFudHMge1xyXG4gICAgT1ZFUlBBU1MgPSAxLFxyXG4gICAgSVNfU1VQUE9SVF9FWCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFjdGl2aXR5VHlwZSB7XHJcbiAgICBWRUhJQ0xFID0gMTAwLFxyXG4gICAgQklLRSA9IDEwMSxcclxuICAgIEZPT1QgPSAxMDIsXHJcbiAgICBTVElMTCA9IDEwMyxcclxuICAgIE9USEVSUyA9IDEwNCxcclxuICAgIFdBTEtJTkcgPSAxMDcsXHJcbiAgICBSVU5OSU5HID0gMTA4LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb252ZXJzaW9uVHlwZSB7XHJcbiAgICBFTlRFUl9BQ1RJVklUWV9DT05WRVJTSU9OID0gMCxcclxuICAgIEVYSVRfQUNUSVZJVFlfQ09OVkVSU0lPTiA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvb3JkaW5hdGVUeXBlIHtcclxuICAgIENPT1JESU5BVEVfVFlQRV9XR1NfODQgPSAxLFxyXG4gICAgQ09PUkRJTkFURV9UWVBFX0dDSl8wMiA9IDAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdlb2ZlbmNlSW5pdENvbnZlcnNpb25UeXBlIHtcclxuICAgIEVOVEVSX0lOSVRfQ09OVkVSU0lPTiA9IDEsXHJcbiAgICBFWElUX0lOSVRfQ09OVkVSU0lPTiA9IDIsXHJcbiAgICBEV0VMTF9JTklUX0NPTlZFUlNJT04gPSA0LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHZW9mZW5jZVRyaWdnZXJUeXBlIHtcclxuICAgIEVOVEVSX0dFT0ZFTkNFX0NPTlZFUlNJT04gPSAxLFxyXG4gICAgRVhJVF9HRU9GRU5DRV9DT05WRVJTSU9OID0gMixcclxuICAgIERXRUxMX0dFT0ZFTkNFX0NPTlZFUlNJT04gPSA0LFxyXG4gICAgR0VPRkVOQ0VfTkVWRVJfRVhQSVJFID0gLTEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvbkNhdGVnb3J5IHtcclxuICAgIEFMQVJNID0gJ2FsYXJtJyxcclxuICAgIENBTEwgPSAnY2FsbCcsXHJcbiAgICBFTUFJTCA9ICdlbWFpbCcsXHJcbiAgICBFUlJPUiA9ICdlcnInLFxyXG4gICAgRVZFTlQgPSAnZXZlbnQnLFxyXG4gICAgTUVTU0FHRSA9ICdtc2cnLFxyXG4gICAgTkFWSUdBVElPTiA9ICduYXZpZ2F0aW9uJyxcclxuICAgIFBST0dSRVNTID0gJ3Byb2dyZXNzJyxcclxuICAgIFBST01PID0gJ3Byb21vJyxcclxuICAgIFJFQ09NTUVOREFUSU9OID0gJ3JlY29tbWVuZGF0aW9uJyxcclxuICAgIFJFTUlOREVSID0gJ3JlbWluZGVyJyxcclxuICAgIFNFUlZJQ0UgPSAnc2VydmljZScsXHJcbiAgICBTT0NJQUwgPSAnc29jaWFsJyxcclxuICAgIFNUQVRVUyA9ICdzdGF0dXMnLFxyXG4gICAgU1lTVEVNID0gJ3N5cycsXHJcbiAgICBUUkFOU1BPUlQgPSAndHJhbnNwb3J0J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25JbXBvcnRhbmNlIHtcclxuICAgIERFRkFVTFQgPSAzLFxyXG4gICAgSElHSCA9IDQsXHJcbiAgICBMT1cgPSAyLFxyXG4gICAgTUFYID0gNSxcclxuICAgIE1JTiA9IDEsXHJcbiAgICBOT05FID0gMCxcclxuICAgIFVOU1BFQ0lGSUVEID0gLTEwMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZXF1ZXN0VHlwZSB7XHJcbiAgICBMT0NBVElPTl9DQUxMQkFDSyA9ICdsb2NhdGlvbkNhbGxiYWNrJyxcclxuICAgIFBFTkRJTkdfSU5URU5UID0gJ3BlbmRpbmdJbnRlbnQnXHJcbn1cclxuXHJcbiJdfQ==