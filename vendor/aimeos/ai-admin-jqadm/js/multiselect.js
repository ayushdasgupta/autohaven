/**
 * Original file: /npm/@vueform/multiselect@2.6.2/dist/multiselect.vue2.global.js
 */
var VueformMultiselect=function(e){"use strict";function a(e){return-1!==[null,void 0].indexOf(e)}function l(l,t,u){const{object:r,valueProp:i,mode:n}=e.toRefs(l),o=e.getCurrentInstance().proxy,s=u.iv,c=e=>r.value||a(e)?e:Array.isArray(e)?e.map((e=>e[i.value])):e[i.value],v=e=>a(e)?"single"===n.value?{}:[]:e;return{update:(e,a=!0)=>{s.value=v(e);const l=c(e);t.emit("change",l,o),a&&(t.emit("input",l),t.emit("update:modelValue",l))}}}function t(a,l){const{value:t,modelValue:u,mode:r,valueProp:i}=e.toRefs(a),n=e.ref("single"!==r.value?[]:{}),o=u&&void 0!==u.value?u:t,s=e.computed((()=>"single"===r.value?n.value[i.value]:n.value.map((e=>e[i.value])))),c=e.computed((()=>"single"!==r.value?n.value.map((e=>e[i.value])).join(","):n.value[i.value]));return{iv:n,internalValue:n,ev:o,externalValue:o,textValue:c,plainValue:s}}function u(a,l,t){const{regex:u}=e.toRefs(a),r=e.getCurrentInstance().proxy,i=t.isOpen,n=t.open,o=e.ref(null),s=e.ref(null);return e.watch(o,(e=>{!i.value&&e&&n(),l.emit("search-change",e,r)})),{search:o,input:s,clearSearch:()=>{o.value=""},handleSearchInput:e=>{o.value=e.target.value},handleKeypress:e=>{if(u&&u.value){let a=u.value;"string"==typeof a&&(a=new RegExp(a)),e.key.match(a)||e.preventDefault()}},handlePaste:e=>{if(u&&u.value){let a=(e.clipboardData||window.clipboardData).getData("Text"),l=u.value;"string"==typeof l&&(l=new RegExp(l)),a.split("").every((e=>!!e.match(l)))||e.preventDefault()}l.emit("paste",e,r)}}}function r(a,l,t){const{groupSelect:u,mode:r,groups:i,disabledProp:n}=e.toRefs(a),o=e.ref(null),s=e=>{void 0===e||null!==e&&e[n.value]||i.value&&e&&e.group&&("single"===r.value||!u.value)||(o.value=e)};return{pointer:o,setPointer:s,clearPointer:()=>{s(null)}}}function i(e,a=!0){return a?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(/\p{Diacritic}/gu,"")}function n(l,t,u){const{options:r,mode:n,trackBy:o,limit:s,hideSelected:c,createTag:v,createOption:p,label:d,appendNewTag:f,appendNewOption:g,multipleLabel:m,object:h,loading:b,delay:_,resolveOnLoad:y,minChars:O,filterResults:S,clearOnSearch:L,clearOnSelect:w,valueProp:x,allowAbsent:T,groupLabel:q,canDeselect:k,max:P,strict:E,closeOnSelect:R,closeOnDeselect:C,groups:I,reverse:B,infinite:D,groupOptions:A,groupHideEmpty:j,groupSelect:V,onCreate:N,disabledProp:M,searchStart:z,searchFilter:F}=e.toRefs(l),$=e.getCurrentInstance().proxy,G=u.iv,H=u.ev,K=u.search,U=u.clearSearch,W=u.update,X=u.pointer,J=u.clearPointer,Q=u.focus,Y=u.deactivate,Z=u.close,ee=u.localize,ae=e.ref([]),le=e.ref([]),te=e.ref(!1),ue=e.ref(null),re=e.ref(D.value&&-1===s.value?10:s.value),ie=e.computed((()=>v.value||p.value||!1)),ne=e.computed((()=>void 0!==f.value?f.value:void 0===g.value||g.value)),oe=e.computed((()=>{if(I.value){let e=ve.value||[],a=[];return e.forEach((e=>{Ne(e[A.value]).forEach((l=>{a.push(Object.assign({},l,e[M.value]?{[M.value]:!0}:{}))}))})),a}{let e=Ne(le.value||[]);return ae.value.length&&(e=e.concat(ae.value)),e}})),se=e.computed((()=>{let e=oe.value;return B.value&&(e=e.reverse()),be.value.length&&(e=be.value.concat(e)),Ve(e)})),ce=e.computed((()=>{let e=se.value;return re.value>0&&(e=e.slice(0,re.value)),e})),ve=e.computed((()=>{if(!I.value)return[];let e=[],a=le.value||[];return ae.value.length&&e.push({[q.value]:" ",[A.value]:[...ae.value],__CREATE__:!0}),e.concat(a)})),pe=e.computed((()=>{let e=[...ve.value].map((e=>({...e})));return be.value.length&&(e[0]&&e[0].__CREATE__?e[0][A.value]=[...be.value,...e[0][A.value]]:e=[{[q.value]:" ",[A.value]:[...be.value],__CREATE__:!0}].concat(e)),e})),de=e.computed((()=>{if(!I.value)return[];let e=pe.value;return je((e||[]).map(((e,a)=>{const l=Ne(e[A.value]);return{...e,index:a,group:!0,[A.value]:Ve(l,!1).map((a=>Object.assign({},a,e[M.value]?{[M.value]:!0}:{}))),__VISIBLE__:Ve(l).map((a=>Object.assign({},a,e[M.value]?{[M.value]:!0}:{})))}})))})),fe=e.computed((()=>{switch(n.value){case"single":return!a(G.value[x.value]);case"multiple":case"tags":return!a(G.value)&&G.value.length>0}})),ge=e.computed((()=>void 0!==m&&void 0!==m.value?m.value(G.value,$):G.value&&G.value.length>1?`${G.value.length} options selected`:"1 option selected")),me=e.computed((()=>!oe.value.length&&!te.value&&!be.value.length)),he=e.computed((()=>oe.value.length>0&&0==ce.value.length&&(K.value&&I.value||!I.value))),be=e.computed((()=>!1!==ie.value&&K.value?-1!==De(K.value)?[]:[{[x.value]:K.value,[_e.value]:K.value,[d.value]:K.value,__CREATE__:!0}]:[])),_e=e.computed((()=>o.value||d.value)),ye=e.computed((()=>{switch(n.value){case"single":return null;case"multiple":case"tags":return[]}})),Oe=e.computed((()=>b.value||te.value)),Se=e=>{switch("object"!=typeof e&&(e=Be(e)),n.value){case"single":W(e);break;case"multiple":case"tags":W(G.value.concat(e))}t.emit("select",we(e),e,$)},Le=e=>{switch("object"!=typeof e&&(e=Be(e)),n.value){case"single":Te();break;case"tags":case"multiple":W(Array.isArray(e)?G.value.filter((a=>-1===e.map((e=>e[x.value])).indexOf(a[x.value]))):G.value.filter((a=>a[x.value]!=e[x.value])))}t.emit("deselect",we(e),e,$)},we=e=>h.value?e:e[x.value],xe=e=>{Le(e)},Te=()=>{t.emit("clear",$),W(ye.value)},qe=e=>{if(void 0!==e.group)return"single"!==n.value&&(Ie(e[A.value])&&e[A.value].length);switch(n.value){case"single":return!a(G.value)&&G.value[x.value]==e[x.value];case"tags":case"multiple":return!a(G.value)&&-1!==G.value.map((e=>e[x.value])).indexOf(e[x.value])}},ke=e=>!0===e[M.value],Pe=()=>!(void 0===P||-1===P.value||!fe.value&&P.value>0)&&G.value.length>=P.value,Ee=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,n.value){case"single":if(e&&qe(e))return k.value&&Le(e),void(C.value&&(J(),Z()));e&&Re(e),w.value&&U(),R.value&&(J(),Z()),e&&Se(e);break;case"multiple":if(e&&qe(e))return Le(e),void(C.value&&(J(),Z()));if(Pe())return void t.emit("max",$);e&&(Re(e),Se(e)),w.value&&U(),c.value&&J(),R.value&&Z();break;case"tags":if(e&&qe(e))return Le(e),void(C.value&&(J(),Z()));if(Pe())return void t.emit("max",$);e&&Re(e),w.value&&U(),e&&Se(e),c.value&&J(),R.value&&Z()}R.value||Q()},Re=e=>{void 0===Be(e[x.value])&&ie.value&&(t.emit("tag",e[x.value],$),t.emit("option",e[x.value],$),t.emit("create",e[x.value],$),ne.value&&Ae(e),U())},Ce=e=>void 0===e.find((e=>!qe(e)&&!e[M.value])),Ie=e=>void 0===e.find((e=>!qe(e))),Be=e=>oe.value[oe.value.map((e=>String(e[x.value]))).indexOf(String(e))],De=(e,a=!0)=>oe.value.map((e=>parseInt(e[_e.value])==e[_e.value]?parseInt(e[_e.value]):e[_e.value])).indexOf(parseInt(e)==e?parseInt(e):e),Ae=e=>{ae.value.push(e)},je=e=>j.value?e.filter((e=>K.value?e.__VISIBLE__.length:e[A.value].length)):e.filter((e=>!K.value||e.__VISIBLE__.length)),Ve=(e,a=!0)=>{let l=e;if(K.value&&S.value){let e=F.value;e||(e=(e,a)=>{let l=i(ee(e[_e.value]),E.value);return z.value?l.startsWith(i(K.value,E.value)):-1!==l.indexOf(i(K.value,E.value))}),l=l.filter(e)}return c.value&&a&&(l=l.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(n.value)&&c.value&&qe(e))(e)))),l},Ne=e=>{let a=e;var l;return l=a,"[object Object]"===Object.prototype.toString.call(l)&&(a=Object.keys(a).map((e=>{let l=a[e];return{[x.value]:e,[_e.value]:l,[d.value]:l}}))),a=a.map((e=>"object"==typeof e?e:{[x.value]:e,[_e.value]:e,[d.value]:e})),a},Me=()=>{a(H.value)||(G.value=$e(H.value))},ze=e=>(te.value=!0,new Promise(((a,l)=>{r.value(K.value,$).then((a=>{le.value=a||[],"function"==typeof e&&e(a),te.value=!1})).catch((e=>{console.error(e),le.value=[],te.value=!1})).finally((()=>{a()}))}))),Fe=()=>{if(fe.value)if("single"===n.value){let e=Be(G.value[x.value]);if(void 0!==e){let a=e[d.value];G.value[d.value]=a,h.value&&(H.value[d.value]=a)}}else G.value.forEach(((e,a)=>{let l=Be(G.value[a][x.value]);if(void 0!==l){let e=l[d.value];G.value[a][d.value]=e,h.value&&(H.value[a][d.value]=e)}}))},$e=e=>a(e)?"single"===n.value?{}:[]:h.value?e:"single"===n.value?Be(e)||(T.value?{[d.value]:e,[x.value]:e,[_e.value]:e}:{}):e.filter((e=>!!Be(e)||T.value)).map((e=>Be(e)||{[d.value]:e,[x.value]:e,[_e.value]:e})),Ge=()=>{ue.value=e.watch(K,(e=>{e.length<O.value||!e&&0!==O.value||(te.value=!0,L.value&&(le.value=[]),setTimeout((()=>{e==K.value&&r.value(K.value,$).then((a=>{e!=K.value&&K.value||(le.value=a,X.value=ce.value.filter((e=>!0!==e[M.value]))[0]||null,te.value=!1)})).catch((e=>{console.error(e)}))}),_.value))}),{flush:"sync"})};if("single"!==n.value&&!a(H.value)&&!Array.isArray(H.value))throw new Error(`v-model must be an array when using "${n.value}" mode`);return r&&"function"==typeof r.value?y.value?ze(Me):1==h.value&&Me():(le.value=r.value,Me()),_.value>-1&&Ge(),e.watch(_,((e,a)=>{ue.value&&ue.value(),e>=0&&Ge()})),e.watch(H,(e=>{if(a(e))W($e(e),!1);else switch(n.value){case"single":(h.value?e[x.value]!=G.value[x.value]:e!=G.value[x.value])&&W($e(e),!1);break;case"multiple":case"tags":(function(e,a){const l=a.slice().sort();return e.length===a.length&&e.slice().sort().every((function(e,a){return e===l[a]}))})(h.value?e.map((e=>e[x.value])):e,G.value.map((e=>e[x.value])))||W($e(e),!1)}}),{deep:!0}),e.watch(r,((e,a)=>{"function"==typeof l.options?y.value&&(!a||e&&e.toString()!==a.toString())&&ze():(le.value=l.options,Object.keys(G.value).length||Me(),Fe())})),e.watch(d,Fe),{pfo:se,fo:ce,filteredOptions:ce,hasSelected:fe,multipleLabelText:ge,eo:oe,extendedOptions:oe,eg:ve,extendedGroups:ve,fg:de,filteredGroups:de,noOptions:me,noResults:he,resolving:te,busy:Oe,offset:re,select:Se,deselect:Le,remove:xe,selectAll:()=>{"single"!==n.value&&Se(ce.value.filter((e=>!e.disabled&&!qe(e))))},clear:Te,isSelected:qe,isDisabled:ke,isMax:Pe,getOption:Be,handleOptionClick:e=>{if(!ke(e))return N&&N.value&&!qe(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=N.value(e,$))instanceof Promise)?(te.value=!0,void e.then((e=>{te.value=!1,Ee(e)}))):void Ee(e)},handleGroupClick:e=>{if(!ke(e)&&"single"!==n.value&&V.value){switch(n.value){case"multiple":case"tags":Ce(e[A.value])?Le(e[A.value]):Se(e[A.value].filter((e=>-1===G.value.map((e=>e[x.value])).indexOf(e[x.value]))).filter((e=>!e[M.value])).filter(((e,a)=>G.value.length+1+a<=P.value||-1===P.value)))}R.value&&Y()}},handleTagRemove:(e,a)=>{0===a.button?xe(e):a.preventDefault()},refreshOptions:e=>{ze(e)},resolveOptions:ze,refreshLabels:Fe}}function o(a,l,t){const{valueProp:u,showOptions:r,searchable:i,groupLabel:n,groups:o,mode:s,groupSelect:c,disabledProp:v,groupOptions:p}=e.toRefs(a),d=t.fo,f=t.fg,g=t.handleOptionClick,m=t.handleGroupClick,h=t.search,b=t.pointer,_=t.setPointer,y=t.clearPointer,O=t.multiselect,S=t.isOpen,L=e.computed((()=>d.value.filter((e=>!e[v.value])))),w=e.computed((()=>f.value.filter((e=>!e[v.value])))),x=e.computed((()=>"single"!==s.value&&c.value)),T=e.computed((()=>b.value&&b.value.group)),q=e.computed((()=>j(b.value))),k=e.computed((()=>{const e=T.value?b.value:j(b.value),a=w.value.map((e=>e[n.value])).indexOf(e[n.value]);let l=w.value[a-1];return void 0===l&&(l=E.value),l})),P=e.computed((()=>{let e=w.value.map((e=>e.label)).indexOf(T.value?b.value[n.value]:j(b.value)[n.value])+1;return w.value.length<=e&&(e=0),w.value[e]})),E=e.computed((()=>[...w.value].slice(-1)[0])),R=e.computed((()=>b.value.__VISIBLE__.filter((e=>!e[v.value]))[0])),C=e.computed((()=>{const e=q.value.__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[u.value])).indexOf(b.value[u.value])-1]})),I=e.computed((()=>{const e=j(b.value).__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[u.value])).indexOf(b.value[u.value])+1]})),B=e.computed((()=>[...k.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),D=e.computed((()=>[...E.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),A=()=>{_(L.value[0]||null)},j=e=>w.value.find((a=>-1!==a.__VISIBLE__.map((e=>e[u.value])).indexOf(e[u.value]))),V=()=>{let e=O.value.querySelector("[data-pointed]");if(!e)return;let a=e.parentElement.parentElement;o.value&&(a=T.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>a.clientHeight+a.scrollTop&&(a.scrollTop=e.offsetTop+e.offsetHeight-a.clientHeight),e.offsetTop<a.scrollTop&&(a.scrollTop=e.offsetTop)};return e.watch(h,(e=>{i.value&&(e.length&&r.value?A():y())})),e.watch(S,(a=>{if(a){let a=O.value.querySelectorAll("[data-selected]")[0];if(!a)return;let l=a.parentElement.parentElement;e.nextTick((()=>{l.scrollTop>0||(l.scrollTop=a.offsetTop)}))}})),{pointer:b,canPointGroups:x,isPointed:e=>!(!b.value||!(!e.group&&b.value[u.value]===e[u.value]||void 0!==e.group&&b.value[n.value]===e[n.value]))||void 0,setPointerFirst:A,selectPointer:()=>{b.value&&!0!==b.value[v.value]&&(T.value?m(b.value):g(b.value))},forwardPointer:()=>{if(null===b.value)_((o.value&&x.value?w.value[0].__CREATE__?L.value[0]:w.value[0]:L.value[0])||null);else if(o.value&&x.value){let e=T.value?R.value:I.value;void 0===e&&(e=P.value,e.__CREATE__&&(e=e[p.value][0])),_(e||null)}else{let e=L.value.map((e=>e[u.value])).indexOf(b.value[u.value])+1;L.value.length<=e&&(e=0),_(L.value[e]||null)}e.nextTick((()=>{V()}))},backwardPointer:()=>{if(null===b.value){let e=L.value[L.value.length-1];o.value&&x.value&&(e=D.value,void 0===e&&(e=E.value)),_(e||null)}else if(o.value&&x.value){let e=T.value?B.value:C.value;void 0===e&&(e=T.value?k.value:q.value,e.__CREATE__&&(e=B.value,void 0===e&&(e=k.value))),_(e||null)}else{let e=L.value.map((e=>e[u.value])).indexOf(b.value[u.value])-1;e<0&&(e=L.value.length-1),_(L.value[e]||null)}e.nextTick((()=>{V()}))}}}function s(a,l,t){const{disabled:u}=e.toRefs(a),r=e.getCurrentInstance().proxy,i=e.ref(!1);return{isOpen:i,open:()=>{i.value||u.value||(i.value=!0,l.emit("open",r))},close:()=>{i.value&&(i.value=!1,l.emit("close",r))}}}function c(a,l,t){const{searchable:u,disabled:r,clearOnBlur:i}=e.toRefs(a),n=t.input,o=t.open,s=t.close,c=t.clearSearch,v=t.isOpen,p=e.ref(null),d=e.ref(null),f=e.ref(null),g=e.ref(!1),m=e.ref(!1),h=e.computed((()=>u.value||r.value?-1:0)),b=()=>{u.value&&n.value.blur(),d.value.blur()},_=(e=!0)=>{r.value||(g.value=!0,e&&o())},y=()=>{g.value=!1,setTimeout((()=>{g.value||(s(),i.value&&c())}),1)};return{multiselect:p,wrapper:d,tags:f,tabindex:h,isActive:g,mouseClicked:m,blur:b,focus:()=>{u.value&&!r.value&&n.value.focus()},activate:_,deactivate:y,handleFocusIn:e=>{e.target.closest("[data-tags]")&&"INPUT"!==e.target.nodeName||e.target.closest("[data-clear]")||_(m.value)},handleFocusOut:()=>{y()},handleCaretClick:()=>{y(),b()},handleMousedown:e=>{m.value=!0,v.value&&(e.target.isEqualNode(d.value)||e.target.isEqualNode(f.value))?setTimeout((()=>{y()}),0):document.activeElement.isEqualNode(d.value)&&!v.value&&_(),setTimeout((()=>{m.value=!1}),0)}}}function v(a,l,t){const{mode:u,addTagOn:r,openDirection:i,searchable:n,showOptions:o,valueProp:s,groups:c,addOptionOn:v,createTag:p,createOption:d,reverse:f}=e.toRefs(a),g=e.getCurrentInstance().proxy,m=t.iv,h=t.update,b=t.search,_=t.setPointer,y=t.selectPointer,O=t.backwardPointer,S=t.forwardPointer,L=t.multiselect,w=t.wrapper,x=t.tags,T=t.isOpen,q=t.open,k=t.blur,P=t.fo,E=e.computed((()=>p.value||d.value||!1)),R=e.computed((()=>void 0!==r.value?r.value:void 0!==v.value?v.value:["enter"])),C=()=>{"tags"===u.value&&!o.value&&E.value&&n.value&&!c.value&&_(P.value[P.value.map((e=>e[s.value])).indexOf(b.value)])};return{handleKeydown:e=>{let a,t;switch(l.emit("keydown",e,g),-1!==["ArrowLeft","ArrowRight","Enter"].indexOf(e.key)&&"tags"===u.value&&(a=[...L.value.querySelectorAll("[data-tags] > *")].filter((e=>e!==x.value)),t=a.findIndex((e=>e===document.activeElement))),e.key){case"Backspace":if("single"===u.value)return;if(n.value&&-1===[null,""].indexOf(b.value))return;if(0===m.value.length)return;h((e=>{let a=e.length-1;for(;a>=0&&(!1===e[a].remove||e[a].disabled);)a--;return a<0||e.splice(a,1),e})([...m.value]));break;case"Enter":if(e.preventDefault(),229===e.keyCode)return;if(-1!==t&&void 0!==t)return h([...m.value].filter(((e,a)=>a!==t))),void(t===a.length-1&&(a.length-1?a[a.length-2].focus():n.value?x.value.querySelector("input").focus():w.value.focus()));if(-1===R.value.indexOf("enter")&&E.value)return;C(),y();break;case" ":if(!E.value&&!n.value)return e.preventDefault(),C(),void y();if(!E.value)return!1;if(-1===R.value.indexOf("space")&&E.value)return;e.preventDefault(),C(),y();break;case"Tab":case";":case",":if(-1===R.value.indexOf(e.key.toLowerCase())||!E.value)return;C(),y(),e.preventDefault();break;case"Escape":k();break;case"ArrowUp":if(e.preventDefault(),!o.value)return;T.value||q(),O();break;case"ArrowDown":if(e.preventDefault(),!o.value)return;T.value||q(),S();break;case"ArrowLeft":if(n.value&&x.value&&x.value.querySelector("input").selectionStart||e.shiftKey||"tags"!==u.value||!m.value||!m.value.length)return;e.preventDefault(),-1===t?a[a.length-1].focus():t>0&&a[t-1].focus();break;case"ArrowRight":if(-1===t||e.shiftKey||"tags"!==u.value||!m.value||!m.value.length)return;e.preventDefault(),a.length>t+1?a[t+1].focus():n.value?x.value.querySelector("input").focus():n.value||w.value.focus()}},handleKeyup:e=>{l.emit("keyup",e,g)},preparePointer:C}}function p(a,l,t){const{classes:u,disabled:r,openDirection:i,showOptions:n}=e.toRefs(a),o=t.isOpen,s=t.isPointed,c=t.isSelected,v=t.isDisabled,p=t.isActive,d=t.canPointGroups,f=t.resolving,g=t.fo,m=e.computed((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...u.value}))),h=e.computed((()=>!!(o.value&&n.value&&(!f.value||f.value&&g.value.length))));return{classList:e.computed((()=>{const e=m.value;return{container:[e.container].concat(r.value?e.containerDisabled:[]).concat(h.value&&"top"===i.value?e.containerOpenTop:[]).concat(h.value&&"top"!==i.value?e.containerOpen:[]).concat(p.value?e.containerActive:[]),wrapper:e.wrapper,spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(r.value?e.tagDisabled:[]),tagDisabled:e.tagDisabled,tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(o.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===i.value?e.dropdownTop:[]).concat(o.value&&n.value&&h.value?[]:e.dropdownHidden),options:[e.options].concat("top"===i.value?e.optionsTop:[]),group:e.group,groupLabel:a=>{let l=[e.groupLabel];return s(a)?l.push(c(a)?e.groupLabelSelectedPointed:e.groupLabelPointed):c(a)&&d.value?l.push(v(a)?e.groupLabelSelectedDisabled:e.groupLabelSelected):v(a)&&l.push(e.groupLabelDisabled),d.value&&l.push(e.groupLabelPointable),l},groupOptions:e.groupOptions,option:(a,l)=>{let t=[e.option];return s(a)?t.push(c(a)?e.optionSelectedPointed:e.optionPointed):c(a)?t.push(v(a)?e.optionSelectedDisabled:e.optionSelected):(v(a)||l&&v(l))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,assist:e.assist,fakeInput:e.fakeInput}})),showDropdown:h}}function d(a,l,t){const{limit:u,infinite:r}=e.toRefs(a),i=t.isOpen,n=t.offset,o=t.search,s=t.pfo,c=t.eo,v=e.ref(null),p=e.ref(null),d=e.computed((()=>n.value<s.value.length)),f=a=>{const{isIntersecting:l,target:t}=a[0];if(l){const a=t.offsetParent,l=a.scrollTop;n.value+=-1==u.value?10:u.value,e.nextTick((()=>{a.scrollTop=l}))}},g=()=>{i.value&&n.value<s.value.length?v.value.observe(p.value):!i.value&&v.value&&v.value.disconnect()};return e.watch(i,(()=>{r.value&&g()})),e.watch(o,(()=>{r.value&&(n.value=u.value,g())}),{flush:"post"}),e.watch(c,(()=>{r.value&&g()}),{immediate:!1,flush:"post"}),e.onMounted((()=>{window&&window.IntersectionObserver&&(v.value=new IntersectionObserver(f))})),{hasMore:d,infiniteLoader:p}}function f(a,l,t){const{placeholder:u,id:r,valueProp:i,label:n,mode:o,groupLabel:s,aria:c,searchable:v}=e.toRefs(a),p=t.pointer,d=t.iv,f=t.hasSelected,g=t.multipleLabelText,m=e.ref(null),h=e.computed((()=>{let e=[];return r&&r.value&&e.push(r.value),e.push("assist"),e.join("-")})),b=e.computed((()=>{let e=[];return r&&r.value&&e.push(r.value),e.push("multiselect-options"),e.join("-")})),_=e.computed((()=>{let e=[];if(r&&r.value&&e.push(r.value),p.value)return e.push(p.value.group?"multiselect-group":"multiselect-option"),e.push(p.value.group?p.value.index:p.value[i.value]),e.join("-")})),y=e.computed((()=>u.value)),O=e.computed((()=>"single"!==o.value)),S=e.computed((()=>{let e="";return"single"===o.value&&f.value&&(e+=d.value[n.value]),"multiple"===o.value&&f.value&&(e+=g.value),"tags"===o.value&&f.value&&(e+=d.value.map((e=>e[n.value])).join(", ")),e})),L=e.computed((()=>{let e={...c.value};return v.value&&(e["aria-labelledby"]=e["aria-labelledby"]?`${h.value} ${e["aria-labelledby"]}`:h.value,S.value&&e["aria-label"]&&(e["aria-label"]=`${S.value}, ${e["aria-label"]}`)),e}));return e.onMounted((()=>{if(r&&r.value&&document&&document.querySelector){let e=document.querySelector(`[for="${r.value}"]`);m.value=e?e.innerText:null}})),{arias:L,ariaLabel:S,ariaAssist:h,ariaControls:b,ariaPlaceholder:y,ariaMultiselectable:O,ariaActiveDescendant:_,ariaOptionId:e=>{let a=[];return r&&r.value&&a.push(r.value),a.push("multiselect-option"),a.push(e[i.value]),a.join("-")},ariaOptionLabel:e=>{let a=[];return a.push(e),a.join(" ")},ariaGroupId:e=>{let a=[];return r&&r.value&&a.push(r.value),a.push("multiselect-group"),a.push(e.index),a.join("-")},ariaGroupLabel:e=>{let a=[];return a.push(e),a.join(" ")},ariaTagLabel:e=>`${e} ❎`}}function g(a,l,t){const{locale:u,fallbackLocale:r}=e.toRefs(a);return{localize:e=>e&&"object"==typeof e?e&&e[u.value]?e[u.value]:e&&u.value&&e[u.value.toUpperCase()]?e[u.value.toUpperCase()]:e&&e[r.value]?e[r.value]:e&&r.value&&e[r.value.toUpperCase()]?e[r.value.toUpperCase()]:e&&Object.keys(e)[0]?e[Object.keys(e)[0]]:"":e}}function m(e,a,l,t,u,r,i,n,o,s){"boolean"!=typeof i&&(o=n,n=i,i=!1);const c="function"==typeof l?l.options:l;let v;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,u&&(c.functional=!0)),t&&(c._scopeId=t),r?(v=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=v):a&&(v=i?function(e){a.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){a.call(this,n(e))}),v)if(c.functional){const e=c.render;c.render=function(a,l){return v.call(l),e(a,l)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,v):[v]}return l}const h={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1}},setup:(e,a)=>function(e,a,l,t={}){return l.forEach((l=>{l&&(t={...t,...l(e,a,t)})})),t}(e,a,[g,t,r,s,u,l,c,n,d,o,v,p,f])};var b=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{ref:"multiselect",class:e.classList.container,attrs:{id:e.searchable?void 0:e.id,dir:e.rtl?"rtl":void 0},on:{focusin:e.handleFocusIn,focusout:e.handleFocusOut,keyup:e.handleKeyup,keydown:e.handleKeydown}},[l("div",e._b({ref:"wrapper",class:e.classList.wrapper,attrs:{tabindex:e.tabindex,"aria-controls":e.searchable?void 0:e.ariaControls,"aria-placeholder":e.searchable?void 0:e.ariaPlaceholder,"aria-expanded":e.searchable?void 0:e.isOpen,"aria-activedescendant":e.searchable?void 0:e.ariaActiveDescendant,"aria-multiselectable":e.searchable?void 0:e.ariaMultiselectable,role:e.searchable?void 0:"combobox"},on:{mousedown:e.handleMousedown}},"div",e.searchable?{}:e.arias,!1),["tags"!==e.mode&&e.searchable&&!e.disabled?[l("input",e._b({ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete,id:e.searchable?e.id:void 0,"aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},domProps:{value:e.search},on:{input:e.handleSearchInput,keypress:e.handleKeypress,paste:function(a){return a.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",Object.assign({},e.attrs,e.arias),!1))]:e._e(),e._v(" "),"tags"==e.mode?[l("div",{class:e.classList.tags,attrs:{"data-tags":""}},[e._l(e.iv,(function(a,t,u){return e._t("tag",(function(){return[l("span",{key:u,class:[e.classList.tag,a.disabled?e.classList.tagDisabled:null],attrs:{tabindex:"-1","aria-label":e.ariaTagLabel(e.localize(a[e.label]))},on:{keyup:function(l){return!l.type.indexOf("key")&&e._k(l.keyCode,"enter",13,l.key,"Enter")?null:e.handleTagRemove(a,l)}}},[e._v("\n            "+e._s(e.localize(a[e.label]))+"\n            "),e.disabled||a.disabled?e._e():l("span",{class:e.classList.tagRemove,on:{click:function(l){return l.stopPropagation(),e.handleTagRemove(a,l)}}},[l("span",{class:e.classList.tagRemoveIcon})])])]}),{option:a,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),l("div",{ref:"tags",class:e.classList.tagsSearchWrapper},[l("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?l("input",e._b({ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,id:e.searchable?e.id:void 0,autocomplete:e.autocomplete,"aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},domProps:{value:e.search},on:{input:e.handleSearchInput,keypress:e.handleKeypress,paste:function(a){return a.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",Object.assign({},e.attrs,e.arias),!1)):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",(function(){return[l("div",{class:e.classList.singleLabel},[l("span",{class:e.classList.singleLabelText},[e._v(e._s(e.localize(e.iv[e.label])))])])]}),{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",(function(){return[l("div",{class:e.classList.multipleLabel,domProps:{innerHTML:e._s(e.multipleLabelText)}})]}),{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",(function(){return[l("div",{class:e.classList.placeholder,attrs:{"aria-hidden":"true"}},[e._v("\n          "+e._s(e.placeholder)+"\n        ")])]}))],e._v(" "),e.loading||e.resolving?e._t("spinner",(function(){return[l("span",{class:e.classList.spinner,attrs:{"aria-hidden":"true"}})]})):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",(function(){return[l("span",{class:e.classList.clear,attrs:{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎"},on:{click:e.clear,keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.clear.apply(null,arguments)}}},[l("span",{class:e.classList.clearIcon})])]}),{clear:e.clear}):e._e(),e._v(" "),e.caret&&e.showOptions?e._t("caret",(function(){return[l("span",{class:e.classList.caret,attrs:{"aria-hidden":"true"},on:{click:e.handleCaretClick}})]})):e._e()],2),e._v(" "),l("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),l("ul",{class:e.classList.options,attrs:{id:e.ariaControls,role:"listbox"}},[e.groups?e._l(e.fg,(function(a,t,u){return l("li",{key:u,class:e.classList.group,attrs:{id:e.ariaGroupId(a),"aria-label":e.ariaGroupLabel(e.localize(a[e.groupLabel])),"aria-selected":e.isSelected(a),role:"option"}},[a.__CREATE__?e._e():l("div",{class:e.classList.groupLabel(a),attrs:{"data-pointed":e.isPointed(a)},on:{mouseenter:function(l){return e.setPointer(a,t)},click:function(l){return e.handleGroupClick(a)}}},[e._t("grouplabel",(function(){return[l("span",{domProps:{innerHTML:e._s(e.localize(a[e.groupLabel]))}})]}),{group:a,isSelected:e.isSelected,isPointed:e.isPointed})],2),e._v(" "),l("ul",{class:e.classList.groupOptions,attrs:{"aria-label":e.ariaGroupLabel(e.localize(a[e.groupLabel])),role:"group"}},e._l(a.__VISIBLE__,(function(t,u,r){return l("li",{key:r,class:e.classList.option(t,a),attrs:{"data-pointed":e.isPointed(t),"data-selected":e.isSelected(t)||void 0,id:e.ariaOptionId(t),"aria-selected":e.isSelected(t),"aria-label":e.ariaOptionLabel(e.localize(t[e.label])),role:"option"},on:{mouseenter:function(a){return e.setPointer(t)},click:function(a){return e.handleOptionClick(t)}}},[e._t("option",(function(){return[l("span",[e._v(e._s(e.localize(t[e.label])))])]}),{option:t,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search})],2)})),0)])})):e._l(e.fo,(function(a,t,u){return l("li",{key:u,class:e.classList.option(a),attrs:{"data-pointed":e.isPointed(a),"data-selected":e.isSelected(a)||void 0,id:e.ariaOptionId(a),"aria-selected":e.isSelected(a),"aria-label":e.ariaOptionLabel(e.localize(a[e.label])),role:"option"},on:{mouseenter:function(l){return e.setPointer(a)},click:function(l){return e.handleOptionClick(a)}}},[e._t("option",(function(){return[l("span",[e._v(e._s(e.localize(a[e.label])))])]}),{option:a,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search})],2)}))],2),e._v(" "),e.noOptions?e._t("nooptions",(function(){return[l("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.localize(e.noOptionsText))}})]})):e._e(),e._v(" "),e.noResults?e._t("noresults",(function(){return[l("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.localize(e.noResultsText))}})]})):e._e(),e._v(" "),e.infinite&&e.hasMore?l("div",{ref:"infiniteLoader",class:e.classList.inifinite},[e._t("infinite",(function(){return[l("span",{class:e.classList.inifiniteSpinner})]}))],2):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?l("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?l("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(a,t){return l("input",{key:t,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:a}})}))]:e._e(),e._v(" "),e.searchable&&e.hasSelected?l("div",{class:e.classList.assist,attrs:{id:e.ariaAssist,"aria-hidden":"true"}},[e._v("\n    "+e._s(e.ariaLabel)+"\n  ")]):e._e(),e._v(" "),l("div",{class:e.classList.spacer})],2)};b._withStripped=!0;return m({render:b,staticRenderFns:[]},undefined,h,undefined,false,undefined,!1,void 0,void 0,void 0)}(Vue);