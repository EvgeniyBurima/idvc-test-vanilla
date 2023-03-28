(self.webpackChunk_idscan_idvc2=self.webpackChunk_idscan_idvc2||[]).push([[343],{2090:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});var r=s(2860),i=s(4554),o=s(1594),n=s(8736),a=s(5558),c=s(8033),l=s(480),h=s(9411);const u=["Back","BackWithoutBarcode","Front","None"],d=[1,320,320,3];class p extends a.Z{constructor(t="",e=c.z.WASM,s=""){super(t,e,s),this.canvasSize={width:1,height:1}}setSizes({height:t,width:e}){this.canvasSize.width=e,this.canvasSize.height=t}predict(t){const e={"serving_default_input_2:0":new n.Tensor("float32",t,d)};return this.session.run(e)}async predictFromImage(t,e){if(this.loading)return[];const s=t instanceof HTMLCanvasElement?t:(0,l.DN)("angles-input-canvas",t),r=e||(0,l.vL)("angles-canvas",{width:320,height:320}),i=(0,l.SI)(s,r),o=(0,h.Di)(i,h.eQ.WITHOUT),n=await this.predict(o);return this.interpret(n["StatefulPartitionedCall:1"].data,n["StatefulPartitionedCall:0"].data)}interpret(t,e){const s={side:"None",bbox:{topLeft:{x:0,y:0},bottomRight:{x:1,y:1}}},r=[];return t.forEach(((t,e)=>r.push({label:u[e],score:t}))),s.side=r.sort(((t,e)=>e.score-t.score))[0].label,s.bbox.topLeft.x=~~(e[2]*this.canvasSize.width),s.bbox.topLeft.y=~~(e[3]*this.canvasSize.height),s.bbox.bottomRight.x=~~(e[0]*this.canvasSize.width),s.bbox.bottomRight.y=~~(e[1]*this.canvasSize.height),s}}const m=async()=>{const t=new p(`${r.Z.networkUrl}/${i.t.cK}`,c.z.WASM,r.Z.networkUrl);o.Z.setModule("model","classLocal",t)}},8446:(t,e,s)=>{s.r(e),s.d(e,{default:()=>f});var r=s(2860),i=s(1594),o=s(8736),n=s(5558),a=s(8033),c=s(9411),l=["0","1","2","3","4","*","5","6","7","*","8","9","A","*","B","C","*","D","*","E","*","F","*","G","*","H","I","J","*","K","*","L","*","M","N","O","P","*","Q","R","*","S","T","*","U","*","V","*","W","X","Y","*","Z","<","*"];const h=[1,28,28,1];class u extends n.Z{constructor(t="",e=a.z.WASM,s=""){super(t,e,s)}predict(t){const e={input_1:new o.Tensor("float32",t,h)};return this.session.run(e)}async predictFromArray(t,e){if(this.promiseList||(this.promiseList=new Array(e).fill(0)),this.predictionList||(this.predictionList=new Array(e).fill(0)),this.loading)return[];const s=(0,c.Fv)(t,c.eQ.STANDART);for(let t=0;t<e;t+=1)this.promiseList[t]=this.predict(s.subarray(784*t,784*(t+1)));return(await Promise.all(this.promiseList)).forEach(((t,e)=>{this.predictionList[e]=this.interpret(t.dense.data)})),this.predictionList}interpret(t){return Array.from(t).map(((t,e)=>({value:l[e],confidence:t}))).sort(((t,e)=>t.confidence-e.confidence)).slice(-3).reverse()}get isLoading(){return this.loading}predictFromImage(t,e){}}var d=s(4554);const p=class{constructor(t,e,s){this.w=0,this.h=0,this.successCount=0,this.isInitialized=!1,this.isProcessing=!1,this.model=new u(`${s}/${d.t.$I}`,a.z.WASM,s),this.worker=t,this.worker.postMessage({fn:"init",initData:{key:e,networkUrl:s}}),this.worker.onmessage=({data:{name:t,data:e}})=>{"initialization"===t&&(this.isInitialized=e)}}getErrorVal(t){let e;return-3===t&&(e=0),-2===t&&(e=1),e}licenseError(t){return{error:!0,errorType:"licenceKeyError",errorVal:this.getErrorVal(t)}}yComparator(t,e){return t.y<e.y?[t,e]:[e,t]}allocate(){}prepareMRZlocation(t){const{leftTop:e,rightTop:s,rightBottom:r,leftBottom:i}=t,o=[e,s,r,i].sort(((t,e)=>t.x-e.x)),[n,a]=this.yComparator(o[0],o[1]),[c,l]=this.yComparator(o[2],o[3]),h=.03;return{leftTop:{x:n.x-h,y:n.y-h},rightTop:{x:c.x+h,y:c.y-h},rightBottom:{x:l.x+h,y:l.y+h},leftBottom:{x:a.x-h,y:a.y+h}}}writeResults(t){const e={mrzText:""},s=t.fields.filter((t=>-1!==t.name.indexOf("Line")&&t.value.length>0)).map((t=>t.value)).join("\n");return s.length>0&&(e.mrzText=window.btoa(s)),e}async predict(t,e){let s=await this.model.predictFromArray(t,e);return s.filter((([{value:t}])=>"*"===t)).length>3&&(s=await this.model.predictFromArray(t.reverse(),e)),s}scan(t){return new Promise((e=>{this.worker.postMessage({fn:"prepare",iData:t}),this.worker.onmessage=async({data:{name:t,data:s}})=>{if("batchArr"!==t)"result"===t&&e(s),e(s);else{const t=await this.predict(s.batchArr,s.batchSize);this.worker.postMessage({fn:"process",predictions:t})}}}))}async processMRZ(t){const e={status:!1,cancel:!1,touch:!1,image:null,type:"mrz"};if(this.isProcessing)return e;if(!this.isInitialized)return e;this.isProcessing=!0;const s=await this.scan(t);if(s?.errorId)return this.isProcessing=!1,{...s,error:this.licenseError(s.errorId)};if(s&&0===s?.status?.value&&s?.count>0){const r=this.estimateResults(s),i=r===s.count&&s.symbolsConf>.95?"green":"yellow";e.coords={locations:this.prepareMRZlocation(s.location),color:i};const o=r===s.count&&s.symbolsConf>.85,n=r>=s.count-2;(o||n)&&(this.successCount+=1,this.successCount>=3&&(e.status=!0,e.needToCut=!0,e.image=t,e.results=this.writeResults(s)))}else e.coords=null,this.successCount=0;return this.isProcessing=!1,e}estimateResults(t){return 0===t.count?0:t.fields.reduce(((t,{status:e})=>"Valid"===e?t+1:t),0)}async detectMrz(t){const e=await this.scan(t);if(e&&e.count>0&&e.symbolsConf>.8){return{status:!0,locations:this.prepareMRZlocation(e.location),results:this.writeResults(e)}}const s={status:!1};return e?.errorId&&(s.error=this.licenseError(e.errorId)),s}};var m=s(4526);const f=async({commonLicenseKey:t})=>{if(t){const e=new Worker(new URL(s.p+s.u(393),s.b),{type:"module"}),o=new p(e,t,r.Z.networkUrl);i.Z.setModule("module","mrz",o)}else(0,m.Z)()}}}]);