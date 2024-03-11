(function(){"use strict";var e={4121:function(e,t,r){var o=r(5130),s=r(6768);function a(e,t,r,o,a,n){const l=(0,s.g2)("Main");return(0,s.uX)(),(0,s.Wv)(l)}var n=r(144),l=r.p+"img/logo.1bf7932d.webp",u=r(4232);const i=(0,n.KR)(!1),c=(0,n.KR)(!0),h=()=>{const e=i,t=c,r=()=>{e.value=!0,t.value=!1},o=()=>{t.value=!0,e.value=!1};return{showAbout:e,showHome:t,gotoAbout:r,gotoHome:o}},p={class:"p-4 flex flex-row gap-4"};var d=(0,s.pM)({__name:"Menu",setup(e){const t=h();return(e,r)=>((0,s.uX)(),(0,s.CE)("div",p,[(0,s.Lk)("button",{class:(0,u.C4)(`${(0,n.R1)(t).showHome.value&&"font-bold"}`),onClick:r[0]||(r[0]=e=>(0,n.R1)(t).gotoHome())},"Home",2),(0,s.Lk)("button",{class:(0,u.C4)(`${(0,n.R1)(t).showAbout.value&&"font-bold"}`),onClick:r[1]||(r[1]=e=>(0,n.R1)(t).gotoAbout())},"About",2)]))}});const f=d;var g=f;r(4114);const m=(0,n.KR)(null),v=(0,n.KR)(null),b=(0,n.KR)([]),k=()=>{const e=m,t=v,r=b,o=o=>{e.value=o,t.value=o.name.split(".").pop()?.toLowerCase()||null;const s=new FileReader;s.onload=e=>{const t=JSON.parse(e.target?.result);t.map((e=>{e.mapping&&Object.keys(e.mapping).map((t=>{const o={},s=e.mapping[t];s?.message&&s.message.content.parts&&s.message.content.parts.length>0&&s.message.content.parts.map((t=>{"string"===typeof t&&t.length>0&&" "!==t&&"\n"!==t&&"\r"!==t&&""!==t&&(o.message=t,o.id=e.conversation_id,o.title=e.title,o.create_time=s.message?.create_time||void 0,o.update_time=s.message?.update_time||void 0,r?.value?.push(o))}))}))}))},s.readAsText(o)},s=()=>{r.value=[],e.value=null,t.value=null},a=()=>{e.value};return{file:e,fileExtension:t,setFile:o,readFile:a,chatHistory:r,clearChatHistory:s}},y={class:"w-1/2 h-full my-8 text-center relative m-auto"},x={for:"fileInput",class:"text-lg"},w={key:0},L={key:1},C=(0,s.Lk)("u",null,"click here",-1);var R=(0,s.pM)({__name:"FileImporter",setup(e){const t=k(),r=(0,n.KR)(!1),o=(0,n.KR)(null),a=e=>{const r=Array.from(e);r.forEach((e=>{t.setFile(e),t.readFile()}))};(0,s.wB)(t.file,(e=>{e||o.value?.reset()}));const l=e=>{const t=e.target,r=[];t.files&&r.push(...Array.from(t.files)),a(r)},i=e=>{e.preventDefault(),r.value=!0},c=()=>{r.value=!1},h=e=>{e.preventDefault(),e.dataTransfer?.files&&a(Array.from(e.dataTransfer.files)),r.value=!1};return(e,a)=>((0,s.uX)(),(0,s.CE)("div",y,[(0,s.Lk)("div",{class:"p-4 border-2 border-dashed border-gray-400 rounded-lg text-center",onDragover:i,onDragleave:c,onDrop:h},[(0,s.Lk)("form",{ref_key:"formRef",ref:o},[(0,s.Lk)("input",{type:"file",multiple:"false",name:"file",id:"fileInput",class:(0,u.C4)("opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"),onChange:l,ref:(0,n.R1)(t).file,accept:".json"},null,544)],512),(0,s.Lk)("label",x,[r.value?((0,s.uX)(),(0,s.CE)("div",w,"Release to drop files here.")):((0,s.uX)(),(0,s.CE)("div",L,[(0,s.eW)("Drop your ChatGPT export here or "),C,(0,s.eW)(" to upload.")]))])],32)]))}});const _=R;var S=_,T=r(5316);const E=(0,n.KR)(""),F=k(),H=(0,n.KR)(!1),O=(0,n.KR)([]),A=(0,n.KR)(.3),W=(0,n.KR)(0),q=(0,n.KR)(500),K=()=>{const e=E,t=H,r=O,o=A,a=W,n=q,l={includeScore:!0,keys:["message"],threshold:o.value,distance:n.value};(0,s.wB)(o,(e=>{l.threshold=e})),(0,s.wB)(n,(e=>{l.distance=e}));const u=()=>{const t=new T.A(F.chatHistory.value,l),o=t.search(e.value),s=o.map((e=>({id:e.item.id,message:e.item.message,title:e.item.title,create_time:e.item.create_time,update_time:e.item.update_time,score:e.score?e.score:0})));s.sort(((e,t)=>t.score-e.score)),r.value=s},i=()=>{e.value="",t.value=!1,r.value=[]};return{searchStr:e,search:u,showResults:t,results:r,clearSearch:i,threshold:o,location:a,distance:n}},X=(0,s.Lk)("img",{class:"m-auto mb-4 w-40 rounded-lg",alt:"Vue logo",src:l},null,-1),j=(0,s.Lk)("h1",{class:"text-2xl font-light text-center"},"ChatGPT Search",-1);var M=(0,s.pM)({__name:"SearchPanel",setup(e){const t=k(),r=K(),a=()=>{t.clearChatHistory(),r.clearSearch()},l=e=>{"Enter"===e.key&&(r.showResults.value=!0,r.search())};return(e,i)=>((0,s.uX)(),(0,s.CE)("header",{class:(0,u.C4)(((0,n.R1)(r).showResults.value?"hidden":"")+" m-auto mt-60")},[X,j,(0,s.Lk)("div",{class:(0,u.C4)(""+((0,n.R1)(t).chatHistory.value.length>0?"hidden":""))},[(0,s.bF)(S)],2),(0,s.Lk)("div",{class:(0,u.C4)("m-auto w-1/2 "+((0,n.R1)(t).chatHistory.value.length>0?"":"hidden"))},[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"w-[92%] form-input px-4 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-grey-500 focus:border-transparent",onKeydown:l,"onUpdate:modelValue":i[0]||(i[0]=e=>(0,n.R1)(r).searchStr.value=e)},null,544),[[o.Jo,(0,n.R1)(r).searchStr.value]]),(0,s.Lk)("button",{class:"w-[8%] px-4 py-2 bg-gray-200 text-black border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:border-transparent",type:"button",onClick:i[1]||(i[1]=(...e)=>(0,n.R1)(r).search&&(0,n.R1)(r).search(...e))}," 🔍 ")],2),(0,s.Lk)("div",{class:(0,u.C4)("m-auto w-1/2 mt-4 "+((0,n.R1)(t).chatHistory.value.length>0?"":"hidden"))},[(0,s.Lk)("p",null,[(0,s.eW)(" Searching: "+(0,u.v_)((0,n.R1)(t).file.value?.name)+" ",1),(0,s.Lk)("span",{class:"p-1 px-4 rounded bg-gray-200 cursor-pointer",onClick:a},"Change File")])],2)],2))}});const P=M;var D=P,J=r(8249),N=r(2353);const V={class:"p-4"},G=["href"],I={class:"text-sm italic"},B={key:0,class:"text-sm italic"},U={class:""},z={class:"p-6 text-sm h-80 bg-slate-50 overflow-y-scroll whitespace-pre-wrap"};var Q=(0,s.pM)({__name:"SearchResult",props:{result:{type:Object}},setup(e){k();const t=(0,n.KR)(!1);return(r,o)=>((0,s.uX)(),(0,s.CE)("div",V,[(0,s.Lk)("a",{class:"text-2xl text-blue-600",href:`https://chat.openai.com/c/${e.result?.id??""}`,target:"_blank",ref:"noopener noreferrer"},(0,u.v_)(e.result?.title),9,G),(0,s.Lk)("p",I,(0,u.v_)(e.result?.id),1),e.result?.score?((0,s.uX)(),(0,s.CE)("p",B,"Similarity: "+(0,u.v_)((100*e.result?.score).toFixed(2))+"%",1)):(0,s.Q3)("",!0),(0,s.Lk)("div",U,[(0,s.Lk)("button",{class:"p-1 px-4 rounded bg-gray-200 cursor-pointer",onClick:o[0]||(o[0]=e=>t.value=!t.value)},[t.value?((0,s.uX)(),(0,s.Wv)((0,n.R1)(J.gc),{key:0,icon:(0,n.R1)(N.k6j)},null,8,["icon"])):((0,s.uX)(),(0,s.Wv)((0,n.R1)(J.gc),{key:1,icon:(0,n.R1)(N.pS3)},null,8,["icon"])),(0,s.eW)(" "+(0,u.v_)(t.value?"Hide":"Show")+" Content ",1)]),(0,s.Lk)("div",{class:(0,u.C4)(t.value?"":"hidden")},[(0,s.Lk)("pre",z,(0,u.v_)(e.result?.message),1)],2)])]))}});const $=Q;var Y=$;const Z={class:"mb-4 p-2 border-b border-gray-300 flex flex-row text-sm"},ee=(0,s.Lk)("p",{class:"mr-10 font-bold"},"Settings:",-1),te={class:"mr-10 flex flex-col"},re=(0,s.Lk)("label",null,"Similarity (Low=perfect, High=loose): ",-1),oe={class:"mr-10 flex flex-col"},se=(0,s.Lk)("label",null,"Fuzziness (Low=perfect, High=loose): ",-1);var ae=(0,s.pM)({__name:"SettingsPanel",setup(e){const t=K();return(e,r)=>((0,s.uX)(),(0,s.CE)("div",Z,[ee,(0,s.Lk)("span",te,[re,(0,s.bo)((0,s.Lk)("input",{type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":r[0]||(r[0]=e=>(0,n.R1)(t).threshold.value=e)},null,512),[[o.Jo,(0,n.R1)(t).threshold.value]])]),(0,s.Lk)("span",oe,[se,(0,s.bo)((0,s.Lk)("input",{class:"w-60",type:"range",min:"0",max:"1000",step:"1","onUpdate:modelValue":r[1]||(r[1]=e=>(0,n.R1)(t).distance.value=e)},null,512),[[o.Jo,(0,n.R1)(t).distance.value]])])]))}});const ne=ae;var le=ne;const ue={class:"flex flex-row m-auto py-4 border-b border-gray-300"},ie={class:"w-1/3"},ce={class:"ml-4 mt-3"},he={class:"ml-auto"},pe={key:0};var de=(0,s.pM)({__name:"SearchResults",setup(e){const t=(0,n.KR)(!1),r=k(),a=K(),i=()=>{r.clearChatHistory(),a.clearSearch()},c=()=>{t.value=!t.value},h=(0,s.EW)((()=>a.results.value)),p=e=>{"Enter"===e.key&&(a.showResults.value=!0,a.search())};return(e,d)=>((0,s.uX)(),(0,s.CE)("main",{class:(0,u.C4)(""+((0,n.R1)(a).showResults.value?"":"hidden"))},[(0,s.Lk)("header",ue,[(0,s.Lk)("img",{class:"w-10 h-10 p-1 mx-2 rounded-lg cursor-pointer",alt:"Vue logo",src:l,onClick:i}),(0,s.Lk)("div",ie,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"w-[90%] form-input px-4 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-grey-500 focus:border-transparent",onKeydown:p,"onUpdate:modelValue":d[0]||(d[0]=e=>(0,n.R1)(a).searchStr.value=e)},null,544),[[o.Jo,(0,n.R1)(a).searchStr.value]]),(0,s.Lk)("button",{class:"w-[10%] px-4 py-2 bg-gray-200 text-black border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-grey-500 focus:border-transparent",type:"button",onClick:d[1]||(d[1]=(...e)=>(0,n.R1)(a).search&&(0,n.R1)(a).search(...e))}," 🔍 ")]),(0,s.Lk)("div",ce,[(0,s.Lk)("p",null,[(0,s.eW)(" Searching: "+(0,u.v_)((0,n.R1)(r).file.value?.name)+" ",1),(0,s.Lk)("span",{class:"p-1 px-4 rounded bg-gray-200 cursor-pointer w-40",onClick:i},"Change File")])]),(0,s.Lk)("div",he,[(0,s.bF)((0,n.R1)(J.gc),{icon:(0,n.R1)(N.dB),class:"text-gray-500 text-2xl p-2 pr-4 ml-auto cursor-pointer",onClick:c},null,8,["icon"])])]),t.value?((0,s.uX)(),(0,s.CE)("section",pe,[(0,s.bF)(le)])):(0,s.Q3)("",!0),(0,s.Lk)("section",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.value,((e,t)=>((0,s.uX)(),(0,s.Wv)(Y,{key:t,result:e},null,8,["result"])))),128))])],2))}});const fe=de;var ge=fe;const me={key:0},ve={key:1,class:"p-4"},be={class:"whitespace-pre-wrap flex flex-col gap-4"},ke=(0,s.Lk)("img",{class:"m-auto mb-4 w-40 rounded-lg",alt:"Vue logo",src:l},null,-1),ye=(0,s.Lk)("h1",{class:"text-2xl font-light text-center"},"ChatGPT Search",-1),xe={class:"text-blue-500 underline",href:"https://gcoulby.github.io/chat-gpt-search",target:"_blank",ref:"noopener noreferrer"},we=(0,s.Lk)("h1",{class:"text-2xl font-bold"},"About",-1),Le=(0,s.Lk)("p",null,"This is a simple search engine for searching ChatGPT histories.",-1),Ce=(0,s.Lk)("p",null,"It uses the export feature of ChatGPT to create a parsable JSON file, which is then used to search for messages.",-1),Re=(0,s.Lk)("p",null,"The search engine is built using Vue 3 and Tailwind CSS.",-1),_e=(0,s.Lk)("p",null,'This requires "Chat history & training" to be enabled in the OpenAI settings.',-1),Se=(0,s.Lk)("h1",{class:"text-2xl font-bold mt-10"},"How to use",-1),Te={class:"text-blue-500 underline",href:"https://chat.openai.com/",target:"_blank",ref:"noopener noreferrer"},Ee=(0,s.Fv)('<p>• Click on your profile picture in the bottom left, then settings.</p><p>• Click &quot;Data Controls&quot;</p><p>• Enable &quot;Chat history &amp; training&quot; if it is not already enabled.</p><p>• Click &quot;Export Chat History&quot; and wait for the email.</p><p>• Download the JSON file from the email.</p><p>• Upload the JSON file to the search engine.</p><p>• Search for messages.</p><h2 class="text-xl mt-4">Controlling the accuracy</h2><p> The search engine uses fuse.js to search the messages. This means that it uses a fuzzy search algorithm to find messages that are similar to the search query, but not exactly the same. This can be useful for finding messages that you don&#39;t remember exactly, but can also return false positives. You can control the accuracy using the settings cog in the top right of the search results panel. </p><p> The settings panel provides 2 options: &quot;Threshold&quot; and &quot;Distance&quot;. The &quot;Threshold&quot; option controls the minimum score that a message must have to be included in the search results. The &quot;Distance&quot; option controls the maximum distance that a message can be from the search query to be included in the search results. The default values are 0.6 and 300, respectively. It is worth experimenting with these values to find the best results for your search, though the default values should work well for most searches. </p><h1 class="text-2xl font-bold mt-10">Privacy</h1><p> This search engine runs entirely in your browser. No data is sent to any server. The JSON file is parsed and searched in your browser using the HTML5 File API. The JSON file is not uploaded to any server. </p><h1 class="text-2xl font-bold mt-10">Credits</h1>',13),Fe={class:"text-blue-500 underline",href:"https://grahamcoulby.co.uk",target:"_blank",ref:"noopener noreferrer"},He={class:"text-blue-500 underline",href:"https://github.com/gcoulby/chat-gpt-search",target:"_blank",ref:"noopener noreferrer"},Oe={class:"text-blue-500 underline",href:"https://vuejs.org/",target:"_blank",ref:"noopener noreferrer"},Ae={class:"text-blue-500 underline",href:"https://tailwindcss.com/",target:"_blank",ref:"noopener noreferrer"},We={class:"text-blue-500 underline",href:"https://fusejs.io/",target:"_blank",ref:"noopener noreferrer"};var qe=(0,s.pM)({__name:"Main",setup(e){const t=h();return(e,r)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(g),(0,n.R1)(t).showHome.value?((0,s.uX)(),(0,s.CE)("section",me,[(0,s.bF)(D),(0,s.bF)(ge)])):(0,s.Q3)("",!0),(0,n.R1)(t).showAbout.value?((0,s.uX)(),(0,s.CE)("section",ve,[(0,s.Lk)("div",be,[ke,ye,(0,s.Lk)("p",null,[(0,s.eW)(" Visit the app "),(0,s.Lk)("a",xe,"https://gcoulby.github.io/chat-gpt-search",512)]),we,Le,Ce,Re,_e,Se,(0,s.Lk)("p",null,[(0,s.eW)(" • Go to "),(0,s.Lk)("a",Te,"https://chat.openai.com/",512)]),Ee,(0,s.Lk)("p",null,[(0,s.eW)(" The search engine is built by "),(0,s.Lk)("a",Fe,"Graham Coulby",512),(0,s.eW)(". ")]),(0,s.Lk)("p",null,[(0,s.eW)(" The source code is available on GitHub at "),(0,s.Lk)("a",He,"https://github.com/gcoulby/chat-gpt-search",512)]),(0,s.Lk)("p",null,[(0,s.eW)(" The search engine uses "),(0,s.Lk)("a",Oe,"Vue 3",512),(0,s.eW)(" and "),(0,s.Lk)("a",Ae,"Tailwind CSS",512),(0,s.eW)(". and the search functionality is provided by "),(0,s.Lk)("a",We,"fuse.js",512),(0,s.eW)(". ")])])])):(0,s.Q3)("",!0)]))}});const Ke=qe;var Xe=Ke,je=(0,s.pM)({name:"App",components:{Main:Xe}}),Me=r(1241);const Pe=(0,Me.A)(je,[["render",a]]);var De=Pe,Je=r(4458);(0,Je.k)("/chat-gpt-search/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,o.Ef)(De).mount("#app")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,s,a){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],a=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[u])}))?o.splice(u--,1):(l=!1,a<n&&(n=a));if(l){e.splice(c--,1);var i=s();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,s,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/chat-gpt-search/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,n=o[0],l=o[1],u=o[2],i=0;if(n.some((function(t){return 0!==e[t]}))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(u)var c=u(r)}for(t&&t(o);i<n.length;i++)a=n[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=self["webpackChunkchat_gpt_search"]=self["webpackChunkchat_gpt_search"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(4121)}));o=r.O(o)})();
//# sourceMappingURL=app.9609701a.js.map