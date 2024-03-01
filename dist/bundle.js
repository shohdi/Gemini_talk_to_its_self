/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={445:(t,e)=>{"use strict";var n,s,o,r,i,a;e.HarmCategory=void 0,(n=e.HarmCategory||(e.HarmCategory={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HarmBlockThreshold=void 0,(s=e.HarmBlockThreshold||(e.HarmBlockThreshold={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",s.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",s.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",s.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",s.BLOCK_NONE="BLOCK_NONE",e.HarmProbability=void 0,(o=e.HarmProbability||(e.HarmProbability={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",o.NEGLIGIBLE="NEGLIGIBLE",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH",e.BlockReason=void 0,(r=e.BlockReason||(e.BlockReason={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",r.SAFETY="SAFETY",r.OTHER="OTHER",e.FinishReason=void 0,(i=e.FinishReason||(e.FinishReason={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",i.STOP="STOP",i.MAX_TOKENS="MAX_TOKENS",i.SAFETY="SAFETY",i.RECITATION="RECITATION",i.OTHER="OTHER",e.TaskType=void 0,(a=e.TaskType||(e.TaskType={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",a.RETRIEVAL_QUERY="RETRIEVAL_QUERY",a.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",a.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",a.CLASSIFICATION="CLASSIFICATION",a.CLUSTERING="CLUSTERING";class c extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class l extends c{constructor(t,e){super(t),this.response=e}}const d="0.2.1",u="genai-js";var h;!function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"}(h||(h={}));class E{constructor(t,e,n,s){this.model=t,this.task=e,this.apiKey=n,this.stream=s}toString(){let t=`https://generativelanguage.googleapis.com/v1/${this.model}:${this.task}`;return this.stream&&(t+="?alt=sse"),t}}async function p(t,e,n){let s;try{if(s=await fetch(t.toString(),Object.assign(Object.assign({},function(t){const e={};if((null==t?void 0:t.timeout)>=0){const n=new AbortController,s=n.signal;setTimeout((()=>n.abort()),t.timeout),e.signal=s}return e}(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":`${u}/${d}`,"x-goog-api-key":t.apiKey},body:e})),!s.ok){let t="";try{const e=await s.json();t=e.error.message,e.error.details&&(t+=` ${JSON.stringify(e.error.details)}`)}catch(t){}throw new Error(`[${s.status} ${s.statusText}] ${t}`)}}catch(e){const n=new c(`Error fetching from ${t.toString()}: ${e.message}`);throw n.stack=e.stack,n}return s}function f(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),_(t.candidates[0]))throw new l(`${T(t)}`,t);return function(t){var e,n,s,o;return(null===(o=null===(s=null===(n=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===n?void 0:n.parts)||void 0===s?void 0:s[0])||void 0===o?void 0:o.text)?t.candidates[0].content.parts[0].text:""}(t)}if(t.promptFeedback)throw new l(`Text not available. ${T(t)}`,t);return""},t}const g=[e.FinishReason.RECITATION,e.FinishReason.SAFETY];function _(t){return!!t.finishReason&&g.includes(t.finishReason)}function T(t){var e,n,s;let o="";if(t.candidates&&0!==t.candidates.length||!t.promptFeedback){if(null===(s=t.candidates)||void 0===s?void 0:s[0]){const e=t.candidates[0];_(e)&&(o+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(o+=`: ${e.finishMessage}`))}}else o+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(o+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);return o}function m(t){return this instanceof m?(this.v=t,this):new m(t)}"function"==typeof SuppressedError&&SuppressedError;const O=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function y(t){const e=[],n=t.getReader();for(;;){const{done:t,value:s}=await n.read();if(t)return f(S(e));e.push(s)}}function C(t){return function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(t,e||[]),r=[];return s={},i("next"),i("throw"),i("return"),s[Symbol.asyncIterator]=function(){return this},s;function i(t){o[t]&&(s[t]=function(e){return new Promise((function(n,s){r.push([t,e,n,s])>1||a(t,e)}))})}function a(t,e){try{(n=o[t](e)).value instanceof m?Promise.resolve(n.value.v).then(c,l):d(r[0][2],n)}catch(t){d(r[0][3],t)}var n}function c(t){a("next",t)}function l(t){a("throw",t)}function d(t,e){t(e),r.shift(),r.length&&a(r[0][0],r[0][1])}}(this,arguments,(function*(){const e=t.getReader();for(;;){const{value:t,done:n}=yield m(e.read());if(n)break;yield yield m(f(t))}}))}function S(t){const e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(const e of t)if(e.candidates)for(const t of e.candidates){const e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[{text:""}]});for(const s of t.content.parts)s.text&&(n.candidates[e].content.parts[0].text+=s.text)}}return n}async function R(t,e,n,s){const o=new E(e,h.STREAM_GENERATE_CONTENT,t,!0);return function(t){const e=function(t){const e=t.getReader();return new ReadableStream({start(t){let n="";return function s(){return e.read().then((({value:e,done:o})=>{if(o)return n.trim()?void t.error(new c("Failed to parse stream")):void t.close();n+=e;let r,i=n.match(O);for(;i;){try{r=JSON.parse(i[1])}catch(e){return void t.error(new c(`Error parsing JSON response: "${i[1]}"`))}t.enqueue(r),n=n.substring(i[0].length),i=n.match(O)}return s()}))}()}})}(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,s]=e.tee();return{stream:C(n),response:y(s)}}(await p(o,JSON.stringify(n),s))}async function A(t,e,n,s){const o=new E(e,h.GENERATE_CONTENT,t,!1),r=await p(o,JSON.stringify(n),s);return{response:f(await r.json())}}function N(t,e){let n=[];if("string"==typeof t)n=[{text:t}];else for(const e of t)"string"==typeof e?n.push({text:e}):n.push(e);return{role:e,parts:n}}function I(t){return t.contents?t:{contents:[N(t,"user")]}}const v="SILENT_ERROR";class H{constructor(t,e,n,s){this.model=e,this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,(null==n?void 0:n.history)&&(this._history=n.history.map((t=>{if(!t.role)throw new Error("Missing role for history item: "+JSON.stringify(t));return N(t.parts,t.role)})))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var e,n;await this._sendPromise;const s=N(t,"user"),o={safetySettings:null===(e=this.params)||void 0===e?void 0:e.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,s]};let r;return this._sendPromise=this._sendPromise.then((()=>A(this._apiKey,this.model,o,this.requestOptions))).then((t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(s);const n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{const e=T(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}r=t})),await this._sendPromise,r}async sendMessageStream(t){var e,n;await this._sendPromise;const s=N(t,"user"),o={safetySettings:null===(e=this.params)||void 0===e?void 0:e.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,s]},r=R(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then((()=>r)).catch((t=>{throw new Error(v)})).then((t=>t.response)).then((t=>{if(t.candidates&&t.candidates.length>0){this._history.push(s);const e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{const e=T(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}})).catch((t=>{t.message!==v&&console.error(t)})),r}}class b{constructor(t,e,n){this.apiKey=t,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.requestOptions=n||{}}async generateContent(t){const e=I(t);return A(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},e),this.requestOptions)}async generateContentStream(t){const e=I(t);return R(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},e),this.requestOptions)}startChat(t){return new H(this.apiKey,this.model,t,this.requestOptions)}async countTokens(t){const e=I(t);return async function(t,e,n,s){const o=new E(e,h.COUNT_TOKENS,t,!1);return(await p(o,JSON.stringify(Object.assign(Object.assign({},n),{model:e})),void 0)).json()}(this.apiKey,this.model,e)}async embedContent(t){const e="string"==typeof(n=t)||Array.isArray(n)?{content:N(n,"user")}:n;var n;return async function(t,e,n,s){const o=new E(e,h.EMBED_CONTENT,t,!1);return(await p(o,JSON.stringify(n),void 0)).json()}(this.apiKey,this.model,e)}async batchEmbedContents(t){return async function(t,e,n,s){const o=new E(e,h.BATCH_EMBED_CONTENTS,t,!1),r=n.requests.map((t=>Object.assign(Object.assign({},t),{model:e})));return(await p(o,JSON.stringify({requests:r}),s)).json()}(this.apiKey,this.model,t,this.requestOptions)}}e.ChatSession=H,e.GenerativeModel=b,e.GoogleGenerativeAI=class{constructor(t){this.apiKey=t}getGenerativeModel(t,e){if(!t.model)throw new c("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new b(this.apiKey,t,e)}}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}(()=>{const{GoogleGenerativeAI:t,HarmCategory:e,HarmBlockThreshold:s}=n(445);let o=null,r=null,i=null,a=!1,c=null,l=null;const d="gemini-1.0-pro";async function u(n){const o=new t(n).getGenerativeModel({model:d}),r=[{category:e.HARM_CATEGORY_HARASSMENT,threshold:s.BLOCK_ONLY_HIGH},{category:e.HARM_CATEGORY_HATE_SPEECH,threshold:s.BLOCK_ONLY_HIGH},{category:e.HARM_CATEGORY_SEXUALLY_EXPLICIT,threshold:s.BLOCK_ONLY_HIGH},{category:e.HARM_CATEGORY_DANGEROUS_CONTENT,threshold:s.BLOCK_ONLY_HIGH}];return o.startChat({generationConfig:{temperature:.9,topK:1,topP:1,maxOutputTokens:2048},safetySettings:r,history:[]})}function h(t){$("#encoder").text(t);let e=$("#encoder").html();for(;e.indexOf(" ")>=0;)e=e.replace(" ","&nbsp;");for(;e.indexOf("\t")>=0;)e=e.replace("\t","&nbsp;&nbsp;&nbsp;");for(;e.indexOf("\n")>=0;)e=e.replace("\n","<br />");return e}function E(){if(null!=localStorage.apiKey){let t=localStorage.apiKey;$("#api_key").val(t),$("#apiKeyDiv").hide()}}function p(){a?$("#topicStart").hide():($("#topicStart").show(),o=null,r=null,i=null,c=null)}async function f(t){null!=t&&(t.preventDefault(),$("#result").html(""),a=!0),null!=t&&$("#loadingDiv").show();var e=$("#api_key").val();if(null==o)try{o=await u(e),r=await u(e)}catch(t){return a=!1,p(),$("#result").html($("#result").html()+"<br />Error : <br />"+t.toString()+"<br />"),$("#loadingDiv").hide(),!1}var n=$("#comment").val();null!=c&&(n=c),$("#comment").val(""),null!=t&&$("#result").html($("#result").html()+"<br />Topic : <br />"+n+"<br />");let s="";try{let t=null;null==i||"Gemini Pro 2"==i?(t=o,i="Gemini Pro 1"):(t=r,i="Gemini Pro 2"),response=await async function(t,e){return(await t.sendMessage(e)).response}(t,n),localStorage.apiKey=$("#api_key").val(),E(),p()}catch(t){return a=!1,p(),$("#result").html($("#result").html()+"<br />Error : <br />"+t.toString()+"<br />"),$("#loadingDiv").hide(),!1}if(null!=response.candidates&&null!=response.candidates.length)for(let t=0;t<response.candidates.length;t++){let e=response.candidates[t].content;if(null!=e&&null!=e.parts&&null!=e.parts.length)for(let t=0;t<e.parts.length;t++)s=s+"<br />"+h(e.parts[t].text)}$("#result").html($("#result").html()+"<br />"+i+" : <br />"+s+"<br />"),c=s;try{$("#result").scrollTop($("#result")[0].scrollHeight)}catch(t){}return $("#loadingDiv").hide(),a&&(l=setTimeout((()=>{f(null)}),1e3)),!1}$((function(){E(),$(document).on("click","#sendBtn",f),$(document).on("click","#clearBtn",(function(t){return t.preventDefault(),a=!1,clearTimeout(l),p(),!1}))}))})()})();