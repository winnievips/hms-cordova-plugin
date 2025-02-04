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

import { AwesomeCordovaNativePlugin } from "@awesome-cordova-plugins/core";
export declare class HMSMLBodyPlugin extends AwesomeCordovaNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLLivenessConfig: typeof MLLivenessConfig;
    syncType: typeof syncType;
    Events: typeof Events;
    Options: typeof Options;
    /**
     * Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).
     * @param  {doZoomReq} doZoomReq Reperesents the necessary parameters.
     * @returns Promise<any>
     */
    doZoom(doZoomReq: doZoomReq): Promise<any>;
    /**
     * Monitors photographing.
     * @returns Promise<any>
     */
    photograph(): Promise<any>;
    /**
     * Close lens engine.
     * @returns Promise<any>
     */
    destroy(): Promise<any>;
    /**
     * Obtains the size of the preview image of a camera.
     * @returns Promise<any>
     */
    getDisplayDimension(): Promise<any>;
    /**
     * Obtains the selected camera type.
     * @returns Promise<any>
     */
    getLensType(): Promise<any>;
    /**
     * It sets Api Key or access token for application.
     * @param  {configReq} params Represents your API_KEY.
     * @returns Promise<any>
     */
    serviceInitializer(params: configReq): Promise<any>;
    /**
     * Obtains Frame.
     * @param  {mlFrameReq} mlFrameReq Represents the parameter required.
     * @returns Promise<any>
     */
    mlFrame(mlFrameReq: mlFrameReq): Promise<any>;
    /**
     * An app information class used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app.
     * @param  {appSettingReq} appSettingReq Represents the parameter required.
     * @returns Promise<any>
     */
    appSetting(appSettingReq: appSettingReq): Promise<any>;
    /**
     * This service enable logger service.
     * @returns Promise<any>
     */
    enableLogger(): Promise<any>;
    /**
     * This service disable logger service.
     * @returns Promise<any>
     */
    disableLogger(): Promise<any>;
    setUserRegion(region: number): Promise<any>;
    getCountryCode(): Promise<string>;
}
export declare class HMSMLBody extends AwesomeCordovaNativePlugin {
    MLFaceSetting: typeof MLFaceSetting;
    HandkeyPointConfig: typeof HandkeyPointConfig;
    Colors: typeof Colors;
    RectStyle: typeof RectStyle;
    MLSkeletonConfig: typeof MLSkeletonConfig;
    MLFlashMode: typeof MLFlashMode;
    MLLensType: typeof MLLensType;
    MLAnalyzerName: typeof MLAnalyzerName;
    MLFrame: typeof MLFrame;
    MLFaceConfigs: typeof MLFaceConfigs;
    MLLivenessConfig: typeof MLLivenessConfig;
    syncType: typeof syncType;
    Events: typeof Events;
    Options: typeof Options;
    stillGestureAnalyser(stillGestureReq: stillGestureReq): Promise<MLGesture>;
    stopStillGestureAnalyser(): Promise<any>;
    getGestureAnalyserSetting(): Promise<any>;
    /**
     * The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.
     * @param  {faceReq} faceReq Represents the parameter required for face detection.
     * @returns Promise<MLFace>
     */
    stillFaceAnalyser(faceReq: faceReq): Promise<MLFace>;
    stillFaceAnalyserInfo(): Promise<any>;
    setFaceDetected(maxFaceVerificationReq: maxFaceVerificationReq): Promise<MLFaceVerificationResult>;
    getFaceVerificationAnalyserSetting(): Promise<any>;
    /**
     * @param  {faceVerificationReq} faceVerificationReq Represents the parameter required for face detection.
     * @returns Promise<MLFaceVerificationResult>
     */
    stillFaceVerificationAnalyser(faceVerificationReq: faceVerificationReq): Promise<MLFaceVerificationResult>;
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    stopStillFaceVerificationAnalyser(): Promise<any>;
    /**
     * This method stop face recognition service.
     * @returns Promise<any>
     */
    stopStillFaceAnalyser(): Promise<any>;
    /**
   The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.
   * @param  {stillSkeletonReq |stillSkeletonSimilarityReq} stillSkeletonReq Represents the parameter required for still skeleton detection.
   * @returns Promise<MLSkeleton>
   */
    stillSkeletonAnalyser(stillSkeletonReq: stillSkeletonReq | stillSkeletonSimilarityReq): Promise<MLSkeleton>;
    /**
     * The liveness detection service supports silent liveness detection and captures faces in real time. It can determine whether a face is of a real user or is a face attack
     * (for example, face recapture image, face recapture video, or face mask) without requiring the user to follow specific instructions.
     * @param  {livenessDetectionReq} livenessDetectionReq Represents the parameter required.
     * @returns Promise<MLLivenessCaptureResult>
     */
    liveLivenessAnalyser(livenessDetectionReq: livenessDetectionReq): Promise<MLLivenessCaptureResult>;
    /**
     * This service can detects 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.
     * @param  {stillHandKeypointReq } stillHandKeypointReq Represents the parameter required for still handkey analyser.
     * @returns Promise<MLHandKeypoints>
     */
    stillHandkeyAnalyser(stillHandKeypointReq: stillHandKeypointReq): Promise<MLHandKeypoints>;
    /**
     * This method stop hand analyzer service.
     * @returns Promise<any>
     */
    stopStillHandKeyAnalyser(): Promise<any>;
    /**
     * This method returns face analyzer settings.
     * @returns Promise<any>
     */
    getFaceAnalyserSetting(): Promise<any>;
    /**
     * This method  returns hand analyzer settings.
     * @returns Promise<any>
     */
    getHandKeyAnalyserSetting(): Promise<any>;
    /**
     * This method stop skeleton analyzer service.
     * @returns Promise<any>
     */
    stopStillSkeletonAnalyser(): Promise<any>;
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    interactiveLivenessAnalyser(interactiveLivenessDetectionReq: interactiveLivenessDetectionReq): Promise<MLInteractiveLivenessCaptureResult>;
    /**
     * The interactive biometric verification service implements liveness detection in an interactive way. It captures faces in real time and determines
     * whether a face is of a real person or is a presentation attack (for example, a face recapture image, face recapture video, or face mask) by checking
     * whether the specified actions are detected.
     * @returns Promise<MLInteractiveLivenessCaptureResult>
     */
    customInteractiveLivenessAnalyser(customInteractiveLivenessDetectionReq: customInteractiveLivenessDetectionReq): Promise<MLInteractiveLivenessCaptureResult>;
}
export declare abstract class MLLive {
    private arScene;
    constructor(scene: string, divId: string);
    on(eventName: Events, call: (value: any) => void): Promise<void>;
    startMLLive(config?: MLconfig, bounds?: MLBounds): Promise<void>;
    destroy(): Promise<void>;
    setConfig(config: MLconfig): Promise<void>;
    scroll(): Promise<void>;
}
export declare class liveEngineAnalyser extends MLLive {
    constructor(divId: string);
}
export interface MLBounds {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}
export interface MLconfig {
    lensEngineReq: lensEngineReq;
}
export interface lensEngineReq {
    analyzerName: MLAnalyzerName;
    lensEngineSetting?: MLLensEngineSetting;
    graphicSetting?: FaceGraphicSetting | HandkeyGraphicSetting | SkeletonGraphicSetting | null;
    analyzerSetting?: mlFaceAnalyzerSetting | MLFaceVerificationAnalyzerSetting | mlHandKeypointSetting | null;
}
export interface MLLensEngineSetting {
    fps?: number | null;
    displayDimensionI?: number | null;
    displayDimensionI1?: number | null;
    lensType?: MLLensType | null;
    enableFocus?: boolean | null;
    flashMode?: MLFlashMode | null;
}
export declare enum MLFlashMode {
    AUTO = "auto",
    ON = "on",
    OFF = "off"
}
export declare enum MLLensType {
    BACK_LENS = 0,
    FRONT_LENS = 1
}
export declare enum MLAnalyzerName {
    LIVEFACE = "FACE",
    LIVEFACE3D = "FACE3D",
    LIVEFACEMAX = "FACEMAX",
    LIVEHAND = "HAND",
    LIVESKELETON = "SKELETON",
    LIVEOBJECT = "OBJECT",
    LIVECLASSIFICATION = "CLASSIFICATION",
    LIVESCENE = "SCENE",
    LIVETEXT = "TEXT",
    LIVEGESTURE = "GESTURE"
}
export interface doZoomReq {
    scale?: number | null;
}
export interface mlFrameReq {
    actionName: MLFrame;
    filePath: any;
    quadrant: QuadrantTypes;
}
export declare enum MLFrame {
    getPreviewBitmap = "getPreviewBitmap",
    readBitmap = "readBitmap",
    rotate = "rotate"
}
export declare enum QuadrantTypes {
    SCREEN_FIRST_QUADRANT = 0,
    SCREEN_SECOND_QUADRANT = 1,
    SCREEN_THIRD_QUADRANT = 2,
    SCREEN_FOURTH_QUADRANT = 3
}
export interface configReq {
    apiKey: string;
}
export interface appSettingReq {
    apiKey?: string | null;
    applicationId?: string | null;
    certFingerprint?: string | null;
}
export interface faceReq {
    mlFaceAnalyserSetting?: mlFaceAnalyzerSetting | null;
    analyseMode?: MLFaceConfigs | null;
    filePath: any;
}
export interface faceVerificationReq {
    mlFaceVerificationAnalyzerSetting?: MLFaceVerificationAnalyzerSetting | null;
    syncType?: syncType | null;
    filePath: any;
    filePath2: any;
}
export declare enum MLFaceConfigs {
    TYPE_2D_SYNC = 0,
    TYPE_2D_ASYNC = 1,
    TYPE_3D_SYNC = 2,
    TYPE_3D_ASYNC = 3
}
export interface FaceGraphicSetting {
    facePositionPaintSetting?: FacePositionPaintSetting | null;
    textPaintSetting?: TextPaintSettingFace | null;
    faceFeaturePaintTextSetting?: FaceFeaturePaintTextSetting | null;
    keypointPaintSetting?: KeypointPaintSetting | null;
    boxPaintSetting?: BoxPaintSettingFace | null;
    facePaintSetting?: FacePaintSetting | null;
    eyePaintSetting?: EyePaintSetting | null;
    eyebrowPaintSetting?: EyebrowPaintSetting | null;
    nosePaintSetting?: NosePaintSetting | null;
    noseBasePaintSetting?: NoseBasePaintSetting | null;
    lipPaintSetting?: LipPaintSetting | null;
}
export interface LipPaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth: Number | null;
}
export interface NosePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number;
}
export interface NoseBasePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number;
}
export interface EyebrowPaintSetting {
    color?: String | Colors | null;
    style?: RectStyle;
    strokeWidth?: Number;
}
export interface EyePaintSetting {
    color?: String | Colors;
    style?: RectStyle | Colors;
    strokeWidth: Number | null;
}
export interface FacePaintSetting {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth: Number | null;
}
export interface BoxPaintSettingFace {
    color?: String | Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number | null;
}
export interface KeypointPaintSetting {
    color?: Colors | Colors | null;
    style?: RectStyle | null;
    textSize: Number | null;
}
export interface FaceFeaturePaintTextSetting {
    color?: Colors | null;
    textSize: Number | null;
}
export interface FacePositionPaintSetting {
    color?: Colors | null;
}
export interface TextPaintSettingFace {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface MLFaceVerificationAnalyzerSetting {
    maxFaceDetcted: number | null;
}
export interface mlFaceAnalyzerSetting {
    featureType?: MLFaceSetting | null;
    keyPointType?: MLFaceSetting | null;
    maxSizeFaceOnly?: boolean | null;
    minFaceProportion?: number | null;
    performanceType?: MLFaceSetting | null;
    poseDisabled?: boolean | null;
    shapeType?: MLFaceSetting | null;
    tracingAllowed?: boolean | null;
    tracingMode?: number | null;
}
export declare enum MLFaceSetting {
    MODE_TRACING_FAST = 1,
    MODE_TRACING_ROBUST = 2,
    TYPE_FEATURES = 1,
    TYPE_FEATURE_AGE = 256,
    TYPE_FEATURE_BEARD = 32,
    TYPE_FEATURE_EMOTION = 4,
    TYPE_FEATURE_EYEGLASS = 8,
    TYPE_FEATURE_GENDAR = 128,
    TYPE_FEATURE_HAT = 16,
    TYPE_FEATURE_OPENCLOSEEYE = 64,
    TYPE_KEYPOINTS = 1,
    TYPE_PRECISION = 1,
    TYPE_SHAPES = 2,
    TYPE_SPEED = 2,
    TYPE_UNSUPPORT_FEATURES = 2,
    TYPE_UNSUPPORT_KEYPOINTS = 0,
    TYPE_UNSUPPORT_SHAPES = 3,
    TYPE_BOTTOM_OF_MOUTH = 1,
    TYPE_LEFT_CHEEK = 2,
    TYPE_LEFT_EAR = 3,
    TYPE_LEFT_SIDE_OF_MOUTH = 6,
    TYPE_RIGHT_CHEEK = 8,
    TYPE_RIGHT_EAR = 9,
    TYPE_RIGHT_SIDE_OF_MOUTH = 12,
    TYPE_TIP_OF_LEFT_EAR = 4,
    TYPE_TIP_OF_NOSE = 7,
    TYPE_TIP_OF_RIGHT_EAR = 10,
    TYPE_ALL = 0,
    TYPE_BOTTOM_OF_LEFT_EYEBROW = 4,
    TYPE_BOTTOM_OF_LOWER_LIP = 8,
    TYPE_BOTTOM_OF_NOSE = 12,
    TYPE_BOTTOM_OF_RIGHT_EYEBROW = 5,
    TYPE_BOTTOM_OF_UPPER_LIP = 10,
    TYPE_BRIDGE_OF_NOSE = 13,
    TYPE_FACE = 1,
    TYPE_TOP_OF_LEFT_EYEBROW = 6,
    TYPE_TOP_OF_LOWER_LIP = 9,
    TYPE_TOP_OF_RIGHT_EYEBROW = 7,
    TYPE_TOP_OF_UPPER_LIP = 11
}
export interface maxFaceVerificationReq {
    MaxFaceDetcted?: number;
}
export interface stillHandKeypointReq {
    syncType?: syncType | null;
    filePath: any;
    handkeySetting?: mlHandKeypointSetting | null;
}
export interface stillGestureReq {
    syncType?: syncType | null;
    filePath: any;
}
export declare enum syncType {
    SYNC_MODE = 0,
    ASYNC_MODE = 1
}
export interface MLGesture {
    rect?: Rect;
    score?: number;
    category?: number;
    hashCode?: number;
}
export declare enum GestureTypes {
    ONE = 0,
    SECOND = 1,
    THREE = 2,
    FOUR = 3,
    FIVE = 4,
    SIX = 5,
    SEVEN = 6,
    EIGHT = 7,
    NINE = 8,
    DISS = 9,
    FIST = 10,
    GOOD = 11,
    HEART = 12,
    OK = 13,
    UNKNOWN = 14
}
export interface GestureGraphicSetting {
    idPaintnewSetting?: IdPaintnewSetting | null;
    rectPaintSetting?: RectPaintSetting | null;
}
export interface HandkeyGraphicSetting {
    idPaintnewSetting?: IdPaintnewSetting | null;
    rectPaintSetting?: RectPaintSetting | null;
}
export interface IdPaintnewSetting {
    color?: Colors | null;
    textSize?: Number | null;
}
export interface RectPaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    boxStrokeWidth?: Number | null;
}
export interface mlHandKeypointSetting {
    sceneType?: HandkeyPointConfig | null;
    maxHandResults?: number | null;
}
export declare enum HandkeyPointConfig {
    TYPE_ALL = 0,
    TYPE_KEYPOINT_ONLY = 1,
    TYPE_RECT_ONLY = 2,
    MAX_HANDS_NUM = 10
}
export interface livenessDetectionReq {
    analyserMode?: MLLivenessCaptureResult | null;
}
export declare enum MLLivenessConfig {
    DEFAULT = 0,
    CUSTOM = 1
}
export declare enum MLLivenessCaptureError {
    CAMERA_NO_PERMISSION = 11401,
    CAMERA_START_FAILED = 11402,
    USER_CANCEL = 11403,
    DETECT_FACE_TIME_OUT = 11404,
    DETECT_MASK = 1
}
export interface customInteractiveLivenessDetectionReq {
    action?: Action;
    detectionTimeOut: number;
    cameraFrame: Rect;
    faceFrame: Rect;
    textMargin: number;
    textOptions?: TextOptions;
    title: string;
    showStatusCode: boolean;
    statusCodes: Map<number, string>;
}
export interface Action {
    actionArray: Map<number, string>;
    num: number;
    isRandom: boolean;
}
export interface Rect {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface TextOptions {
    textColor?: number;
    textSize?: number;
    autoSizeText?: boolean;
    minTextSize?: number;
    maxTextSize?: number;
    granularity?: number;
}
export interface stillSkeletonReq {
    filePath: any;
    syncType: MLSkeletonConfig;
    analyzerType: MLSkeletonConfig;
}
export interface stillSkeletonSimilarityReq {
    filePath: any;
    filepath2: any;
    syncType: MLSkeletonConfig;
    analyzerType: MLSkeletonConfig;
}
export declare enum MLSkeletonConfig {
    SYNC_MODE = 0,
    ASYNC_MODE = 1,
    SIMILARITTY_MODE = 2,
    TYPE_YOGA = 1,
    TYPE_NORMAL = 0
}
export interface SkeletonGraphicSetting {
    circlePaintSetting?: circlePaintSetting | null;
    linePaintSetting?: linePaintSetting | null;
}
export interface circlePaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    antiAlias?: boolean | null;
}
export interface linePaintSetting {
    color?: Colors | null;
    style?: RectStyle | null;
    strokeWidth?: Number | null;
    antiAlias?: boolean | null;
}
export declare enum Colors {
    RED = -65536,
    DKGRAY = -12303292,
    GRAY = -7829368,
    WHITE = -1,
    BLUE = -16776961,
    BLACK = -16777216,
    LTGRAY = -3355444,
    MAGENTA = -65281,
    YELLOW = -256,
    CYAN = -16711681,
    GREEN = -16711936,
    TRANSPARENT = 0
}
export declare enum RectStyle {
    STROKE = 1,
    FILL = 2,
    FILL_AND_STROKE = 3
}
export interface interactiveLivenessDetectionReq {
    options: Options;
    detectionTimeOut: number;
    action?: DefaultAction;
}
export declare enum Options {
    DETECT_MASK = 1,
    DETECT_SUNGLASS = 2
}
export interface DefaultAction {
    actionArray: number[];
    num: number;
    isRandom: boolean;
}
export interface MLFaceVerificationResult {
    faceInfo?: MLFaceInfo[] | null;
    similarity?: number | null;
    templateId?: number | null;
}
export interface MLFaceTemplateResult {
    faceInfo?: MLFaceInfo[] | null;
    hashcode?: number | null;
    templateId?: number | null;
}
export interface MLFaceInfo {
    faceRect?: Rect[] | null;
    hashCode?: number | null;
}
export interface MLFace {
    Result?: ResultEntity[] | null;
}
export interface ResultEntity {
    opennessOfLeftEye: number;
    tracingIdentity: number;
    possibilityOfSmiling: number;
    opennessOfRightEye: number;
    rotationAngleX: number;
    rotationAngleY: number;
    rotationAngleZ: number;
    height: number;
    width: number;
    border: Border;
    features: Features;
    emotions: Emotions;
    allPoints?: AllPointsEntity[] | null;
    keyPoints?: null[] | null;
    faceShapeList?: FaceShapeListEntity[] | null;
}
export declare enum MLFaceConstant {
    UNANALYZED_POSSIBILITY = -1
}
export interface Border {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface Features {
    sunGlassProbability: number;
    sexProbability: number;
    rightEyeOpenProbability: number;
    moustacheProbability: number;
    leftEyeOpenProbability: number;
    age: number;
    hatProbability: number;
}
export interface Emotions {
    surpriseProbability: number;
    smilingProbability: number;
    sadProbability: number;
    neutralProbability: number;
    fearProbability: number;
    disgustProbability: number;
    angryProbability: number;
}
export interface AllPointsEntity {
    X: number;
    Y: number;
}
export interface FaceShapeListEntity {
    points?: PointsEntity[] | null;
    faceShapeType: number;
}
export interface PointsEntity {
    X: number;
    Y: number;
    Z: number;
}
export interface MLHandKeypoints {
    handkeyPoints: handkeyPoints;
    rect: Rect;
    score: number;
}
export interface handkeyPoints {
    pointX: number;
    pointY: number;
    score: number;
    type: handkeyPointsTypes;
}
export declare enum handkeyPointsTypes {
    TYPE_WRIST = 0,
    TYPE_THUMB_FIRST = 1,
    TYPE_THUMB_SECOND = 2,
    TYPE_THUMB_THIRD = 3,
    TYPE_THUMB_FOURTH = 4,
    TYPE_FOREFINGER_FIRST = 5,
    TYPE_FOREFINGER_SECOND = 6,
    TYPE_FOREFINGER_THIRD = 7,
    TYPE_FOREFINGER_FOURTH = 8,
    TYPE_MIDDLE_FINGER_FIRST = 9,
    TYPE_MIDDLE_FINGER_SECOND = 10,
    TYPE_MIDDLE_FINGER_THIRD = 11,
    TYPE_MIDDLE_FINGER_FOURTH = 12,
    TYPE_RING_FINGER_FIRST = 13,
    TYPE_RING_FINGER_SECOND = 14,
    TYPE_RING_FINGER_THIRD = 15,
    TYPE_RING_FINGER_FOURTH = 16,
    TYPE_LITTLE_FINGER_FIRST = 17,
    TYPE_LITTLE_FINGER_SECOND = 18,
    TYPE_LITTLE_FINGER_THIRD = 19,
    TYPE_LITTLE_FINGER_FOURTH = 20
}
export interface Rect {
    bottom: number;
    top: number;
    left: number;
    right: number;
    exactCenterX: number;
    centerY: number;
    centerX: number;
    describeContents: number;
    height: number;
    width: number;
}
export interface MLLivenessCaptureResult {
    bitmap: Bitmap;
    isLive: boolean;
    pitch: number;
    roll: number;
    score: number;
    yaw: number;
}
export interface Bitmap {
    mGalleryCached: boolean;
    mHeight: number;
    mNativePtr: number;
    mWidth: number;
}
export interface MLInteractiveLivenessCaptureResult {
    bitmap: Bitmap;
    stateCode: InteractiveLivenessStateCode;
    actionType: number;
}
export interface MLSkeleton {
    joints: MLJoint;
    JointPoint: MLJointPoints;
}
export interface MLJoint {
    x: number;
    y: number;
    score: number;
    type: number;
    hashCode: number;
}
export declare enum MLJointPoints {
    TYPE_RIGHT_SHOULDER = 101,
    TYPE_RIGHT_ELBOW = 102,
    TYPE_RIGHT_WRIST = 103,
    TYPE_LEFT_SHOULDER = 104,
    TYPE_LEFT_ELBOW = 105,
    TYPE_LEFT_WRIST = 106,
    TYPE_RIGHT_HIP = 107,
    TYPE_RIGHT_KNEE = 108,
    TYPE_RIGHT_ANKLE = 109,
    TYPE_LEFT_HIP = 110,
    TYPE_LEFT_KNEE = 111,
    TYPE_LEFT_ANKLE = 112,
    TYPE_HEAD_TOP = 113,
    TYPE_NECK = 114
}
export declare enum Events {
    FACE_TRANSACTOR_ON_DESTROY = "faceTransactorOnDestroy",
    FACE_TRANSACTOR_ON_RESULT = "faceTransactorOnResult",
    FACE_3D_TRANSACTOR_ON_DESTROY = "face3dTransactorOnDestroy",
    FACE_3D_TRANSACTOR_ON_RESULT = "face3dTransactorOnResult",
    SKELETON_TRANSACTOR_ON_DESTROY = "skeletonTransactorOnDestroy",
    SKELETON_TRANSACTOR_ON_RESULT = "skeletonTransactorOnResult",
    HAND_TRANSACTOR_ON_DESTROY = "handTransactorOnDestroy",
    HAND_TRANSACTOR_ON_RESULT = "handTransactorOnResult",
    GESTURE_TRANSACTOR_ON_DESTROY = "gestureTransactorOnDestroy",
    GESTURE_TRANSACTOR_ON_RESULT = "gestureTransactorOnResult"
}
export declare enum InteractiveLivenessStateCode {
    FACE_ASPECT = 1001,
    NO_FACE = 1002,
    MULTI_FACES = 1003,
    PART_FACE = 1004,
    BIG_FACE = 1005,
    SMALL_FACE = 1006,
    WEAR_SUNGLASSES = 1007,
    WEAR_MASK = 1008,
    ACTION_MUTUALLY_EXCLUSIVE_ERROR = 1009,
    CONTINUITY_DETECTION_ERROR = 1014,
    DARK = 1018,
    BLUR = 1019,
    BACK_LIGHTING = 1020,
    BRIGHT = 1021,
    IN_PROGRESS = 2000,
    SPOOFING = 2002,
    LIVE_AND_ACTION_CORRECT = 2003,
    GUIDE_DETECTION_SUCCESS = 2004,
    INIT_FACE_RECTANGLE_ERROR = 2007,
    ERROR_RESULT_BEFORE = 5020,
    RESULT_TIME_OUT = 5030,
    ALL_ACTION_CORRECT = 9999,
    INITIALED_FAILED = -1,
    NO_ORDER_PAY = -5001,
    OUT_OF_CREDIT = -5002,
    FREE_AMOUNT_USE_UP = -5003,
    BLACK_LIST = -5004,
    OFFLINE_USE_COUNT_OVER_THRESHOLD = -6001,
    OFFLINE_USE_TIME_OVER_THRESHOLD = -6002,
    LOCAL_AND_CLOUD_BILL_INFO_IS_NULL = -7001,
    UPDATE_BILL_INFO_FILE_FAILED = -7002
}
export declare enum CordovaErrors {
    UNKNOWN = -1,
    SUCCESS = 0,
    DISCARDED = 1,
    INNER = 2,
    INACTIVE = 3,
    NOT_SUPPORTED = 4,
    ILLEGAL_PARAMETER = 5,
    OVERDUE = 6,
    NO_FOUND = 7,
    DUPLICATE_FOUND = 8,
    NO_PERMISSION = 9,
    INSUFFICIENT_RESOURCE = 10,
    ANALYSIS_FAILURE = 11,
    INTERRUPTED = 12,
    EXCEED_RANGE = 13,
    DATA_MISSING = 14,
    AUTHENTICATION_REQUIRED = 15,
    TFLITE_NOT_COMPATIBLE = 16,
    INSUFFICIENT_SPACE = 17,
    HASH_MISS = 18,
    TOKEN_INVALID = 19,
    SERVICE_FAILURE = 20,
    ANALYSIS_NULL = 21
}
