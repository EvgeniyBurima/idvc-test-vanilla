// @ts-ignore
import IDVC from '@idscan/idvc2'
import '@idscan/idvc2/dist/css/idvc.css'

const config = {
  el: 'videoCapturingEl',
  licenseKey: 'eyJwZGY0MTdrZXkiOiJRZmw3UlhrM2tocHlVQXY3SUFCVUF1L1lkUkpvYW9HRGpZQ3RFN3NlSUFXc0dFT3FpeFpiN1dzMDdsSmtzTVorZk5PNVYvTDZXZEhBRy9RTW94SkEzOE5aUUk4WnJ5dTdrOUpySWg3Y2J4K25wV0JzZXZzVkJFNm9FaHlCUUhsdGhYM2h2UWJ1TXkzNlQySlo2Sm8yeklOZ1Y5Q2ZVU1hVMjN3WDJGbGtIRGc9IiwiaW1hZ2VQcm9jZXNzaW5nS2V5IjoidHVJbStyQThKb0pUeHlFU3FRbCt4RjRweWI1ZXkwSllXNWhhQWpjcjBnWHpaVHU2NFJBYlpMQjRWaVNCWlpGVmhISElybFp0NFlRUFVCRElWNmU0OG95RndkWnVLRllINFNuUlZKSEpBaDB6Y0lONzZXTDBVMWZRdkJNK1lQL293dFQreWxpK2NkUk9jOXRVVHR5U2NsbTZPblFlNU4yK1FDdDdBTmx6NmEwPSIsInRyYWNrU3RyaW5nUGFyc2VyS2V5IjoiQ1ZGOThTdHFqVXU2R09GejNVQUF4KzY2VzhaUWhGQzRMUnJodDU0K3ZDMFdtbUo1Qi91QlpLSEhWdWo4VnYvdnB2ajBybUdES3RIQmtERlY1Y1JhbE5PZkNvZFNZU0lSOTVoTnJNYXhqRU12eVpDcmNXblovSmtmSnoxS3lYNDBqa1Ryb3NrYWpQbTQrRnpDd3Vwa0dYUlRkMXVDSTkvSGE3T1E5YitTN3BzPSIsImNvbW1vbkxpY2Vuc2VLZXkiOiJ3U0s1NU5NVW1UMzRnRDltNE1DL25EK2tEdlE5Vi9SWUp2YXl5WlFOYXVYMjk0VGVMek5qaE44OTlKNElscW9ZNFIrenh2SWhkM2dCQVRXaFB0WEt6NWFJbWdWN1phNWVPZFFwcVVRN3ZBaGxSZ3dnZFVCdnhyTUdkc29RT0lDMnBaR0NiYmowWnZNZXdCYmVYVmhRUWdua0k4N0hXMFVCUzBBVHROTkNoR0k9In0=',
  autoContinue: true,
  fixFrontOrientAfterUpload: false,
  realFaceMode: 'auto', // none, auto, all
  useCDN: false,
  useHeic: false,
  resizeUploadedImage: 1600,
  isShowDocumentTypeSelect: false,
  isShowGuidelinesButton: true,
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
