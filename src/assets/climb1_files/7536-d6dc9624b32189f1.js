"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7536],{87536:function(e,t,r){r.d(t,{Dq:function(){return Se},Gc:function(){return E},KN:function(){return H},Qr:function(){return $},RV:function(){return j},U2:function(){return m},bc:function(){return W},cI:function(){return Pe},qo:function(){return P},t8:function(){return Q}});var s=r(67294),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const y="blur",g="focusout",h="change",_="onBlur",p="onChange",v="onSubmit",b="onTouched",A="all",x="max",V="min",F="maxLength",w="minLength",S="pattern",k="required",D="validate",C=s.createContext(null),E=()=>s.useContext(C),j=e=>{const{children:t,...r}=e;return s.createElement(C.Provider,{value:r},t)};var O=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==A&&(t._proxyFormState[a]=!s||A),r&&(r[a]=!0),e[a]}});return a},U=e=>u(e)&&!Object.keys(e).length,N=(e,t,r)=>{const{name:s,...a}=e;return U(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||A)))},B=e=>Array.isArray(e)?e:[e],T=(e,t,r)=>r&&t?e===t:!e||!t||e===t||B(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function M(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var L=e=>"string"===typeof e,R=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),m(r,e)):a?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r)},q=e=>"function"===typeof e,I=e=>{for(const t in e)if(q(e[t]))return!0;return!1};function P(e){const t=E(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},l=s.useRef(a);l.current=a,M({disabled:i,subject:r._subjects.watch,callback:s.useCallback((e=>{if(T(l.current,e.name,o)){const t=R(l.current,r._names,e.values||r._formValues);d(f(l.current)||u(t)&&!I(t)?{...t}:Array.isArray(t)?[...t]:f(t)?n:t)}}),[r,o,n])});const[c,d]=s.useState(f(n)?r._getWatch(a):n);return s.useEffect((()=>r._removeUnmounted())),c}function W(e){const t=E(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=P({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),u=function(e){const t=E(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.useState(r._formState),l=s.useRef(!0),c=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=s.useRef(n);return d.current=n,M({disabled:a,callback:s.useCallback((e=>l.current&&T(d.current,e.name,i)&&N(e,c.current)&&u({...r._formState,...e})),[r,i]),subject:r._subjects.state}),s.useEffect((()=>(l.current=!0,()=>{l.current=!1})),[]),O(o,r,c.current,!1)}({control:a,name:r}),d=s.useRef(a.register(r,{...e.rules,value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{name:r,value:o,onChange:s.useCallback((e=>d.current.onChange({target:{value:l(e),name:r},type:h})),[r]),onBlur:s.useCallback((()=>d.current.onBlur({target:{value:m(a._formValues,r),name:r},type:y})),[r,a]),ref:e=>{const t=m(a._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:u,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(u.errors,r)},isDirty:{enumerable:!0,get:()=>!!m(u.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!m(u.touchedFields,r)},error:{enumerable:!0,get:()=>m(u.errors,r)}})}}const $=e=>e.render(W(e));var H=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},G=e=>/^\w*$/.test(e),K=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Q(e,t,r){let s=-1;const a=G(t)?[t]:K(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const z=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(s)&&z(s,t)}}};var J=()=>{const e="undefined"===typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)}))},X=(e,t,r={})=>r.shouldFocus||f(r.shouldFocus)?r.focusName||`${e}.${f(r.focusIndex)?t:r.focusIndex}.`:"",Y=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),Z=(e,t,r)=>{const s=d(m(e,r));return Q(s,"root",t[r]),Q(e,r,s),e},ee=e=>"boolean"===typeof e,te=e=>"file"===e.type,re=e=>L(e)||s.isValidElement(e),se=e=>"radio"===e.type,ae=e=>e instanceof RegExp;const ne={value:!1,isValid:!1},ie={value:!0,isValid:!0};var oe=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?ie:{value:e[0].value,isValid:!0}:ie:ne}return ne};const ue={isValid:!1,value:null};var le=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ue):ue;function ce(e,t,r="validate"){if(re(e)||Array.isArray(e)&&e.every(re)||ee(e)&&!e)return{type:r,message:re(e)?e:"",ref:t}}var de=e=>u(e)&&!ae(e)?e:{value:e,message:""},fe=async(e,t,r,s,n)=>{const{ref:o,refs:l,required:c,maxLength:d,minLength:f,min:m,max:y,pattern:g,validate:h,name:_,valueAsNumber:p,mount:v,disabled:b}=e._f;if(!v||b)return{};const A=l?l[0]:o,C=e=>{s&&L(e)&&(A.setCustomValidity(e),A.reportValidity())},E={},j=se(o),O=a(o),N=j||O,B=(p||te(o))&&!o.value||""===t||Array.isArray(t)&&!t.length,T=H.bind(null,_,r,E),M=(e,t,r,s=F,a=w)=>{const n=e?t:r;E[_]={type:e?s:a,message:n,ref:o,...T(e?s:a,n)}};if(n?!Array.isArray(t)||!t.length:c&&(!N&&(B||i(t))||ee(t)&&!t||O&&!oe(l).isValid||j&&!le(l).isValid)){const{value:e,message:t}=re(c)?{value:!!c,message:c}:de(c);if(e&&(E[_]={type:k,message:t,ref:A,...T(k,t)},!r))return C(t),E}if(!B&&(!i(m)||!i(y))){let e,s;const a=de(y),n=de(m);if(i(t)||isNaN(t)){const r=o.valueAsDate||new Date(t),i=e=>new Date((new Date).toDateString()+" "+e),u="time"==o.type,l="week"==o.type;L(a.value)&&t&&(e=u?i(t)>i(a.value):l?t>a.value:r>new Date(a.value)),L(n.value)&&t&&(s=u?i(t)<i(n.value):l?t<n.value:r<new Date(n.value))}else{const r=o.valueAsNumber||(t?+t:t);i(a.value)||(e=r>a.value),i(n.value)||(s=r<n.value)}if((e||s)&&(M(!!e,a.message,n.message,x,V),!r))return C(E[_].message),E}if((d||f)&&!B&&(L(t)||n&&Array.isArray(t))){const e=de(d),s=de(f),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(M(a,e.message,s.message),!r))return C(E[_].message),E}if(g&&!B&&L(t)){const{value:e,message:s}=de(g);if(ae(e)&&!t.match(e)&&(E[_]={type:S,message:s,ref:o,...T(S,s)},!r))return C(s),E}if(h)if(q(h)){const e=ce(await h(t),A);if(e&&(E[_]={...e,...T(D,e.message)},!r))return C(e.message),E}else if(u(h)){let e={};for(const s in h){if(!U(e)&&!r)break;const a=ce(await h[s](t),A,s);a&&(e={...a,...T(s,a.message)},C(a.message),r&&(E[_]=e))}if(!U(e)&&(E[_]={ref:A,...e},!r))return E}return C(!0),E};function me(e,t){return[...e,...B(t)]}var ye="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function ge(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(ye&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=ge(e[r]);else t=e}return t}var he=e=>Array.isArray(e)?e.map((()=>{})):void 0,_e=e=>({isOnSubmit:!e||e===v,isOnBlur:e===_,isOnChange:e===p,isOnAll:e===A,isOnTouch:e===b});function pe(e,t,r){return[...e.slice(0,t),...B(r),...e.slice(t)]}var ve=(e,t,r)=>Array.isArray(e)?(f(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function be(e,t){return[...B(t),...B(e)]}var Ae=(e,t)=>f(t)?[]:function(e,t){let r=0;const s=[...e];for(const a of t)s.splice(a-r,1),r++;return d(s).length?s:[]}(e,B(t).sort(((e,t)=>e-t))),xe=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function Ve(e){for(const t in e)if(!f(e[t]))return!1;return!0}function Fe(e,t){const r=G(t)?[t]:K(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let i=0;i<r.slice(0,-1).length;i++){let t,s=-1;const a=r.slice(0,-(i+1)),o=a.length-1;for(i>0&&(n=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&U(t)||Array.isArray(t)&&Ve(t))&&(n?delete n[r]:delete e[r]),n=t}}return e}var we=(e,t,r)=>(e[t]=r,e);function Se(e){const t=E(),{control:r=t.control,name:a,keyName:n="id",shouldUnregister:i}=e,[o,u]=s.useState(r._getFieldArray(a)),l=s.useRef(r._getFieldArray(a).map(J)),c=s.useRef(o),d=s.useRef(a),f=s.useRef(!1);d.current=a,c.current=o,r._names.array.add(a),e.rules&&r.register(a,e.rules);M({callback:s.useCallback((({values:e,name:t})=>{if(t===d.current||!t){const t=m(e,d.current);Array.isArray(t)&&(u(t),l.current=t.map(J))}}),[]),subject:r._subjects.array});const y=s.useCallback((e=>{f.current=!0,r._updateFieldArray(a,e)}),[r,a]);return s.useEffect((()=>{if(r._stateFlags.action=!1,Y(a,r._names)&&r._subjects.state.next({}),f.current&&(!_e(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([a]).then((e=>{const t=m(e.errors,a),s=m(r._formState.errors,a);(s?!t&&s.type:t&&t.type)&&(t?Q(r._formState.errors,a,t):Fe(r._formState.errors,a),r._subjects.state.next({errors:r._formState.errors}))}));else{const e=m(r._fields,a);e&&e._f&&fe(e,m(r._formValues,a),r._options.criteriaMode===A,r._options.shouldUseNativeValidation,!0).then((e=>!U(e)&&r._subjects.state.next({errors:Z(r._formState.errors,e,a)})))}r._subjects.watch.next({name:a,values:r._formValues}),r._names.focus&&z(r._fields,(e=>!!e&&e.startsWith(r._names.focus))),r._names.focus="",r._proxyFormState.isValid&&r._updateValid()}),[o,a,r]),s.useEffect((()=>(!m(r._formValues,a)&&r._updateFieldArray(a),()=>{(r._options.shouldUnregister||i)&&r.unregister(a)})),[a,r,n,i]),{swap:s.useCallback(((e,t)=>{const s=r._getFieldArray(a);xe(s,e,t),xe(l.current,e,t),y(s),u(s),r._updateFieldArray(a,s,xe,{argA:e,argB:t},!1)}),[y,a,r]),move:s.useCallback(((e,t)=>{const s=r._getFieldArray(a);ve(s,e,t),ve(l.current,e,t),y(s),u(s),r._updateFieldArray(a,s,ve,{argA:e,argB:t},!1)}),[y,a,r]),prepend:s.useCallback(((e,t)=>{const s=B(ge(e)),n=be(r._getFieldArray(a),s);r._names.focus=X(a,0,t),l.current=be(l.current,s.map(J)),y(n),u(n),r._updateFieldArray(a,n,be,{argA:he(e)})}),[y,a,r]),append:s.useCallback(((e,t)=>{const s=B(ge(e)),n=me(r._getFieldArray(a),s);r._names.focus=X(a,n.length-1,t),l.current=me(l.current,s.map(J)),y(n),u(n),r._updateFieldArray(a,n,me,{argA:he(e)})}),[y,a,r]),remove:s.useCallback((e=>{const t=Ae(r._getFieldArray(a),e);l.current=Ae(l.current,e),y(t),u(t),r._updateFieldArray(a,t,Ae,{argA:e})}),[y,a,r]),insert:s.useCallback(((e,t,s)=>{const n=B(ge(t)),i=pe(r._getFieldArray(a),e,n);r._names.focus=X(a,e,s),l.current=pe(l.current,e,n.map(J)),y(i),u(i),r._updateFieldArray(a,i,pe,{argA:e,argB:he(t)})}),[y,a,r]),update:s.useCallback(((e,t)=>{const s=ge(t),n=we(r._getFieldArray(a),e,s);l.current=[...n].map(((t,r)=>t&&r!==e?l.current[r]:J())),y(n),u([...n]),r._updateFieldArray(a,n,we,{argA:e,argB:s},!0,!1)}),[y,a,r]),replace:s.useCallback((e=>{const t=B(ge(e));l.current=t.map(J),y([...t]),u([...t]),r._updateFieldArray(a,[...t],(e=>e),{},!0,!1)}),[y,a,r]),fields:s.useMemo((()=>o.map(((e,t)=>({...e,[n]:l.current[t]||J()})))),[o,n])}}function ke(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var De=e=>i(e)||!o(e);function Ce(e,t){if(De(e)||De(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!Ce(r,e):r!==e)return!1}}return!0}var Ee=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},je=e=>"select-multiple"===e.type,Oe=e=>Ee(e)&&e.isConnected;function Ue(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!I(e[s])?(t[s]=Array.isArray(e[s])?[]:{},Ue(e[s],t[s])):i(e[s])||(t[s]=!0);return t}function Ne(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!I(e[a])?f(t)||De(r[a])?r[a]=Array.isArray(e[a])?Ue(e[a],[]):{...Ue(e[a])}:Ne(e[a],i(t)?{}:t[a],r[a]):Ce(e[a],t[a])?delete r[a]:r[a]=!0;return r}var Be=(e,t)=>Ne(e,t,Ue(t)),Te=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:e?+e:e:r&&L(e)?new Date(e):s?s(e):e;function Me(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return te(t)?t.files:se(t)?le(e.refs).value:je(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?oe(e.refs).value:Te(f(t.value)?e.ref.value:t.value,e)}var Le=e=>f(e)?void 0:ae(e)?e.source:u(e)?ae(e.value)?e.value.source:e.value:e;function Re(e,t,r){const s=m(e,r);if(s||G(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=m(t,s),i=m(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}const qe={mode:v,reValidateMode:p,shouldFocusError:!0};function Ie(e={}){let t,r={...qe,...e},s={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},u=ge(r.defaultValues)||{},h=r.shouldUnregister?{}:ge(u),_={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v=0,b={};const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={watch:ke(),array:ke(),state:ke()},F=_e(r.mode),w=_e(r.reValidateMode),S=r.criteriaMode===A,k=async()=>{let e=!1;return x.isValid&&(e=r.resolver?U((await j()).errors):await O(o,!0),e!==s.isValid&&(s.isValid=e,V.state.next({isValid:e}))),e},D=(e,t,r,s)=>{const a=m(o,e);if(a){const n=m(h,e,f(r)?m(u,e):r);f(n)||s&&s.defaultChecked||t?Q(h,e,t?n:Me(a._f)):M(e,n),_.mount&&k()}},C=(e,t,r,a,n)=>{let i=!1;const o={name:e},l=m(s.touchedFields,e);if(x.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=N(),i=e!==o.isDirty}if(x.dirtyFields&&(!r||a)){const r=m(s.dirtyFields,e);Ce(m(u,e),t)?Fe(s.dirtyFields,e):Q(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,i=i||r!==m(s.dirtyFields,e)}return r&&!l&&(Q(s.touchedFields,e,r),o.touchedFields=s.touchedFields,i=i||x.touchedFields&&l!==r),i&&n&&V.state.next(o),i?o:{}},E=(r,a,n,i)=>{const o=m(s.errors,r),u=x.isValid&&ee(a)&&s.isValid!==a;var l;if(e.delayError&&n?(l=()=>((e,t)=>{Q(s.errors,e,t),V.state.next({errors:s.errors})})(r,n),t=e=>{clearTimeout(v),v=window.setTimeout(l,e)},t(e.delayError)):(clearTimeout(v),t=null,n?Q(s.errors,r,n):Fe(s.errors,r)),(n?!Ce(o,n):o)||!U(i)||u){const e={...i,...u&&ee(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},V.state.next(e)}b[r]--,x.isValidating&&!Object.values(b).some((e=>e))&&(V.state.next({isValidating:!1}),b={})},j=async e=>r.resolver?await r.resolver({...h},r.context,((e,t,r,s)=>{const a={};for(const n of e){const e=m(t,n);e&&Q(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||p.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},O=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const{_f:e,...n}=i;if(e){const n=p.array.has(e.name),o=await fe(i,m(h,e.name),S,r.shouldUseNativeValidation,n);if(o[e.name]&&(a.valid=!1,t))break;!t&&(m(o,e.name)?n?Z(s.errors,o,e.name):Q(s.errors,e.name,o[e.name]):Fe(s.errors,e.name))}n&&await O(n,t,a)}}return a.valid},N=(e,t)=>(e&&t&&Q(h,e,t),!Ce(H(),u)),T=(e,t,r)=>{const s={..._.mount?h:f(t)?u:L(e)?{[e]:t}:t};return R(e,p,s,r)},M=(e,t,r={})=>{const s=m(o,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&Q(h,e,Te(t,r)),n=ye&&Ee(r.ref)&&i(t)?"":t,je(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):te(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||V.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&$(e)},I=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,u=m(o,i);!p.array.has(e)&&De(a)&&(!u||u._f)||n(a)?M(i,a,r):I(i,a,r)}},P=(e,t,r={})=>{const a=m(o,e),n=p.array.has(e),l=ge(t);Q(h,e,l),n?(V.array.next({name:e,values:h}),(x.isDirty||x.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=Be(u,h),V.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:N(e,l)}))):!a||a._f||i(l)?M(e,l,r):I(e,l,r),Y(e,p)&&V.state.next({}),V.watch.next({name:e})},W=async e=>{const a=e.target;let n=a.name;const i=m(o,n);if(i){let c,d;const f=a.type?Me(i._f):l(e),_=e.type===y||e.type===g,v=!((u=i._f).mount&&(u.required||u.min||u.max||u.maxLength||u.minLength||u.pattern||u.validate))&&!r.resolver&&!m(s.errors,n)&&!i._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(_,m(s.touchedFields,n),s.isSubmitted,w,F),A=Y(n,p,_);Q(h,n,f),_?(i._f.onBlur&&i._f.onBlur(e),t&&t(0)):i._f.onChange&&i._f.onChange(e);const D=C(n,f,_,!1),O=!U(D)||A;if(!_&&V.watch.next({name:n,type:e.type}),v)return x.isValid&&k(),O&&V.state.next({name:n,...A?{}:D});if(!_&&A&&V.state.next({}),b[n]=b[n]?b[n]+1:1,V.state.next({isValidating:!0}),r.resolver){const{errors:e}=await j([n]),t=Re(s.errors,o,n),r=Re(e,o,t.name||n);c=r.error,n=r.name,d=U(e)}else c=(await fe(i,m(h,n),S,r.shouldUseNativeValidation))[n],k();i._f.deps&&$(i._f.deps),E(n,d,c,D)}var u},$=async(e,t={})=>{let a,n;const i=B(e);if(V.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await j();if(e)for(const r of e){const e=m(t,r);e?Q(s.errors,r,e):Fe(s.errors,r)}else s.errors=t;return t})(f(e)?e:i);a=U(t),n=e?!i.some((e=>m(t,e))):a}else e?(n=(await Promise.all(i.map((async e=>{const t=m(o,e);return await O(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&k()):n=a=await O(o);return V.state.next({...!L(e)||x.isValid&&a!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!n&&z(o,(e=>e&&m(s.errors,e)),e?i:p.mount),n},H=e=>{const t={...u,..._.mount?h:{}};return f(e)?t:L(e)?m(t,e):e.map((e=>m(t,e)))},G=(e,t)=>({invalid:!!m((t||s).errors,e),isDirty:!!m((t||s).dirtyFields,e),isTouched:!!m((t||s).touchedFields,e),error:m((t||s).errors,e)}),K=(e,t={})=>{for(const a of e?B(e):p.mount)p.mount.delete(a),p.array.delete(a),m(o,a)&&(t.keepValue||(Fe(o,a),Fe(h,a)),!t.keepError&&Fe(s.errors,a),!t.keepDirty&&Fe(s.dirtyFields,a),!t.keepTouched&&Fe(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&Fe(u,a));V.watch.next({}),V.state.next({...s,...t.keepDirty?{isDirty:N()}:{}}),!t.keepIsValid&&k()},J=(e,t={})=>{let s=m(o,e);const n=ee(t.disabled);return Q(o,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),p.mount.add(e),s?n&&Q(h,e,t.disabled?void 0:m(h,e,Me(s._f))):D(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:Le(t.min),max:Le(t.max),minLength:Le(t.minLength),maxLength:Le(t.maxLength),pattern:Le(t.pattern)}:{},name:e,onChange:W,onBlur:W,ref:n=>{if(n){J(e,t),s=m(o,e);const r=f(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>se(e)||a(e))(r),l=s._f.refs||[];if(i?l.find((e=>e===r)):r===s._f.ref)return;Q(o,e,{_f:{...s._f,...i?{refs:[...l.filter(Oe),r,...Array.isArray(m(u,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),D(e,!1,void 0,r)}else s=m(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(p.array,e)||!_.action)&&p.unMount.add(e)}}},X=()=>r.shouldFocusError&&z(o,(e=>e&&m(s.errors,e)),p.mount);return{control:{register:J,unregister:K,getFieldState:G,_executeSchema:j,_focusError:X,_getWatch:T,_getDirty:N,_updateValid:k,_removeUnmounted:()=>{for(const e of p.unMount){const t=m(o,e);t&&(t._f.refs?t._f.refs.every((e=>!Oe(e))):!Oe(t._f.ref))&&K(e)}p.unMount=new Set},_updateFieldArray:(e,t=[],r,a,n=!0,i=!0)=>{if(a&&r){if(_.action=!0,i&&Array.isArray(m(o,e))){const t=r(m(o,e),a.argA,a.argB);n&&Q(o,e,t)}if(x.errors&&i&&Array.isArray(m(s.errors,e))){const t=r(m(s.errors,e),a.argA,a.argB);n&&Q(s.errors,e,t),((e,t)=>{!d(m(e,t)).length&&Fe(e,t)})(s.errors,e)}if(x.touchedFields&&i&&Array.isArray(m(s.touchedFields,e))){const t=r(m(s.touchedFields,e),a.argA,a.argB);n&&Q(s.touchedFields,e,t)}x.dirtyFields&&(s.dirtyFields=Be(u,h)),V.state.next({isDirty:N(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else Q(h,e,t)},_getFieldArray:t=>d(m(_.mount?h:u,t,e.shouldUnregister?m(u,t,[]):[])),_subjects:V,_proxyFormState:x,get _fields(){return o},get _formValues(){return h},get _stateFlags(){return _},set _stateFlags(e){_=e},get _defaultValues(){return u},get _names(){return p},set _names(e){p=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:$,register:J,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=ge(h);V.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await j();s.errors=e,i=t}else await O(o);U(s.errors)?(V.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t({...s.errors},a),X())}catch(u){throw n=!1,u}finally{s.isSubmitted=!0,V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>q(e)?V.watch.subscribe({next:r=>e(T(void 0,t),r)}):T(e,t,!0),setValue:P,getValues:H,reset:(t,r)=>((t,r={})=>{const a=t||u,n=ge(a),i=t&&!U(t)?n:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(r.keepDirtyValues)for(const e of p.mount)m(s.dirtyFields,e)?Q(i,e,m(h,e)):P(e,m(i,e));else{if(ye&&f(t))for(const e of p.mount){const t=m(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Ee(e)){const t=e.closest("form");if(t){t.reset();break}}}}o={}}h=e.shouldUnregister?r.keepDefaultValues?ge(u):{}:n,V.array.next({values:i}),V.watch.next({values:i})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},_.mount=!x.isValid||!!r.keepIsValid,_.watch=!!e.shouldUnregister,V.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||Ce(t,u)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?Be(u,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(q(t)?t(h):t,r),resetField:(e,t={})=>{m(o,e)&&(f(t.defaultValue)?P(e,m(u,e)):(P(e,t.defaultValue),Q(u,e,t.defaultValue)),t.keepTouched||Fe(s.touchedFields,e),t.keepDirty||(Fe(s.dirtyFields,e),s.isDirty=t.defaultValue?N(e,m(u,e)):N()),t.keepError||(Fe(s.errors,e),x.isValid&&k()),V.state.next({...s}))},clearErrors:e=>{e?B(e).forEach((e=>Fe(s.errors,e))):s.errors={},V.state.next({errors:s.errors})},unregister:K,setError:(e,t,r)=>{const a=(m(o,e,{_f:{}})._f||{}).ref;Q(s.errors,e,{...t,ref:a}),V.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=m(o,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:G}}function Pe(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...Ie(e),formState:r});const n=t.current.control;return n._options=e,M({subject:n._subjects.state,callback:s.useCallback((e=>{N(e,n._proxyFormState,!0)&&(n._formState={...n._formState,...e},a({...n._formState}))}),[n])}),s.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),s.useEffect((()=>{r.submitCount&&n._focusError()}),[n,r.submitCount]),t.current.formState=O(r,n),t.current}}}]);