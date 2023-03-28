// @ts-ignore
import IDVC from '@idscan/idvc2'
import '@idscan/idvc2/dist/css/idvc.css'

const config = {
  el: 'videoCapturingEl',
  licenseKey: 'eyJwZGY0MTdrZXkiOiJDQWY4NUJmMHNQV29sU0NPQWlkWmNxRjVRcHkyZ0tISkh2OW1POGUvYXJDSENqRDdoT3M1YU02TDlNbGFNQ0VuQjd3M0RzcjgyQ2VvTkFMa1A5bnI3SkM5aDJOSFh3WDc3SlFPQ1B6ME9yVUNBSENWWi9YL2F0REliWkV1YkFFblRPZ0REQWMxaVJGTkxiOTNFNzhRWUNmRWhreWI5djlHOWlxOURJMXAwQ0k9IiwiaW1hZ2VQcm9jZXNzaW5nS2V5Ijoib3VScFVLejYrMW5uUHkyRFRRdnZnQ3p2ZCtqV3F1OWRxUUpBZzRvbHlXSzE2MmZncGNBVGRreVMyNlZLbWhOS2dueldoQldMQUdSQis5QXhHb0VsZkZCZVhISmpER1BpTDNvaXFuK1ZldVl4R2hNMzZaR3M2NU9zY2o5VUZxYWp2M0V4SzMzbUx1RHJZK0lUcGdZU0JiQS9XMlZ1TlRyZVlORkFaOUFpdG9FPSIsInRyYWNrU3RyaW5nUGFyc2VyS2V5IjoiSU1kTnlwblZTckNEM3F4aW9FNC9CSGUzSmw3R1hwWEVCc21EbDdmcjlwZlFUK3hJNmdiZVdBL05iTnVlMFdzaVlmd05mOHJIa0pEa3dGdnlPbGZjVkVuRzl4UFJPWkh4WlFqcm81WnZSSnc4bVNuc1Y3bW5YNTRhUjBwSnhzT0FVR2pVM1N1VU4vRjRyUmUyU3dVc05xRmU5M2podU04bVYvaW1oZW1VSGVBPSIsImNvbW1vbkxpY2Vuc2VLZXkiOiJaV0MrNWZpYXAwUys5OHd4WW8wL3lLMGVtY3BpYlM5M3phdy9jNUI1aGQybS9nMWovYklGb2lia1FOS2dTT25NY0FZNElQZkE1VG1mbitkRWVxRlFBcml3dTN6M0RPVEJWTHF2ZjA4Z0V2bXJhMDMxRWZYTzZjaW9wMThzUldLSVptdWxPQkxZRTNucWt1SUNqbHhqeUpvN3FhY1FnK0hONytWRmtLcVpmU1k9In0=',
  autoContinue: true,
  fixFrontOrientAfterUpload: false,
  realFaceMode: 'auto', // none, auto, all
  useCDN: false,
  useHeic: false,
  resizeUploadedImage: 1600,
  isShowDocumentTypeSelect: false,
  isShowGuidelinesButton: true,
  networkUrl: 'idvc-test-vanilla/networks',
  language: 'en',
  documentTypes: [
    {
      type: 'ID',
      steps:[
        { type: 'front', name: 'Document Front' },
        { type: 'pdf', name: 'Document PDF417 Barcode', mode: { uploader: true, video: true } },
        { type: 'face', name: 'Face', mode: { uploader: true, video: true } },
      ],
    },
    {
      type: 'Passport',
      steps:[
        { type: 'mrz', name: 'Document PDF417 Barcode', mode: { uploader: true, video: true } },
        { type: 'face', name: 'Face', mode: { uploader: true, video: true } },
      ],
    },
  ],
  clickGuidlines () {
    console.log('clickGuidlines')
  },
  onChange (data: any) {
    console.log('change')
    console.log(data)
  },
  onReset (data: any) {
    console.log('reset')
    // console.log(data)
  },
  onCameraError (data: any) {
    console.log('CAMERA_ERR', JSON.stringify(data))
  },
  submit (data: any) {
    console.log(data)
  },
  onRetakeHook(data: any) {
    console.log('retake');
    // console.log(data);
  },
  onMounted() {
    console.log('onMounted');
  },
};

new IDVC(config);
