!function(t){function e(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return t[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function a(t){if(window.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(t);window.WVJBCallbacks=[t];var e=document.createElement("iframe");e.style.display="none",e.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(e),setTimeout(function(){document.documentElement.removeChild(e)},0)}function s(t){window.WebViewJavascriptBridge?t(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){t(WebViewJavascriptBridge)},!1)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},r=n(1),i=n(2),l=function(){};window.td=function(){return{ready:function(t){if("function"!=typeof t)throw new Error("td.ready() only accept functions, instead receiving a "+("undefined"==typeof t?"undefined":c(t))+".");l=t},error:function(){}}}();var u={},d=void 0;(0,r.isAndroid)()&&(d=s)(function(t){t.init(function(t,e){var n={"Javascript Responds":"测试中文!"};e(n)}),u={confirm:(0,i.showDialog)(t),toast:(0,i.showToast)(t),getLocation:(0,i.getLocation)(t),previewImage:(0,i.showPic)(t),launchApp:(0,i.startApp)(t),previewFile:(0,i.showAttachment)(t),all:(0,i.callPhone)(t),sendMessage:(0,i.sendMessage)(t),getNetworkType:(0,i.getNetworkType)(t),chooseImage:(0,i.selectPic)(t),selectFile:(0,i.selectAttachment)(t),selectUser:(0,i.selectUser)(t),setTitle:(0,i.setTitle)(t),setRight:(0,i.setRight)(t),actionSheet:(0,i.actionSheet)(t)},window.td=o({},window.td,u),l()}),(0,r.isIphone)()&&(d=a)(function(t){u={confirm:(0,i.showDialog)(t),toast:(0,i.showToast)(t),getLocation:(0,i.getLocation)(t),previewImage:(0,i.showPic)(t),launchApp:(0,i.startApp)(t),previewFile:(0,i.showAttachment)(t),call:(0,i.callPhone)(t),sendMessage:(0,i.sendMessage)(t),getNetworkType:(0,i.getNetworkType)(t),chooseImage:(0,i.selectPic)(t),selectFile:(0,i.selectAttachment)(t),selectUser:(0,i.selectUser)(t),setTitle:(0,i.setTitle)(t),setRight:(0,i.setRight)(t),actionSheet:(0,i.actionSheet)(t)},window.td=o({},window.td,u),l()})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.isAndroid=function(){var t=navigator.userAgent.toLowerCase(),e=t.indexOf("android")>-1;return!!e},e.isIphone=function(){var t=navigator.userAgent.toLowerCase(),e=t.indexOf("iphone")>-1;return!!e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.actionSheet=e.setRight=e.setTitle=e.selectUser=e.selectAttachment=e.selectPic=e.getNetworkType=e.sendMessage=e.callPhone=e.showAttachment=e.startApp=e.showPic=e.getLocation=e.showToast=e.showDialog=void 0;var a=n(3);e.showDialog=function(t){return function(e){var n=e.title,s=e.message,o=e.buttonLabels,c=e.onSuccess,r=e.onFail;try{t.callHandler(a.SHOW_DIALOG,{title:n,msg:s,buttons:o},function(t){t=JSON.parse(t),"1"===t.status?c(t.data):"0"===t.status&&r(t.message)})}catch(i){r(i.message)}}},e.showToast=function(t){return function(e){var n=e.text,s=e.duration,o=e.delay,c=(e.onSuccess,e.onFail);try{t.callHandler(a.SHOW_TOAST,{text:n,duration:s,delay:o},function(t){})}catch(r){c(r.message)}}},e.getLocation=function(t){return function(e){var n=e.onSuccess,s=e.onFail;try{t.callHandler(a.GET_LOCATION,{},function(t){t=JSON.parse(t),"1"===t.status?n(t.data):"0"===t.status&&s(t.message)})}catch(o){s(o.message)}}},e.showPic=function(t){return function(e){var n=e.urls,s=e.current,o=(e.onSuccess,e.onFail);try{t.callHandler(a.SHOW_PIC,{urls:n,current:s},function(t){})}catch(c){o(c.message)}}},e.startApp=function(t){return function(e){var n=e.app,s=(e.onSuccess,e.onFail);try{t.callHandler(a.START_APP,{app:n},function(t){t=JSON.parse(t),"0"===t.status&&s(t.message)})}catch(o){s(o.message)}}},e.showAttachment=function(t){return function(e){var n=e.url,s=e.id,o=e.name,c=(e.onSuccess,e.onFail);try{t.callHandler(a.SHOW_ATTACHMENT,{url:n,id:s,name:o},function(t){t=JSON.parse(t),"0"===t.status&&c(t.message)})}catch(r){c(r.message)}}},e.callPhone=function(t){return function(e){var n=e.phoneNum,s=(e.onSuccess,e.onFail);try{t.callHandler(a.CALL_PHONE,{phoneNum:n},function(t){})}catch(o){s(o.message)}}},e.sendMessage=function(t){return function(e){var n=e.phoneNums,s=e.content,o=(e.onSuccess,e.onFail);try{t.callHandler(a.SEND_MESSAGE,{phoneNums:n,content:s},function(t){})}catch(c){o(c.message)}}},e.getNetworkType=function(t){return function(e){var n=e.onSuccess,s=e.onFail;try{t.callHandler(a.GET_NETWORK_TYPE,{},function(t){t=JSON.parse(t),n(t.data)})}catch(o){s(o.message)}}},e.selectPic=function(t){return function(e){var n=e.onSuccess,s=e.onFail;try{t.callHandler(a.SELECT_PIC,{},function(t){if(t=JSON.parse(t),"1"===t.status){var e=!0,a=!1,o=void 0;try{for(var c,r=t.data[Symbol.iterator]();!(e=(c=r.next()).done);e=!0){var i=c.value,l=i.link,u=l.replace(/\r/g,"'");i.link=u}}catch(d){a=!0,o=d}finally{try{!e&&r["return"]&&r["return"]()}finally{if(a)throw o}}n(t.data)}else"0"===t.status&&s(t.message)})}catch(o){s(o.message)}}},e.selectAttachment=function(t){return function(e){var n=e.onSuccess,s=e.onFail;try{t.callHandler(a.SELECT_ATTACHMENT,{},function(t){if(t=JSON.parse(t),"1"===t.status){var e=!0,a=!1,o=void 0;try{for(var c,r=t.data[Symbol.iterator]();!(e=(c=r.next()).done);e=!0){var i=c.value,l=i.link,u=l.replace(/\r/g,"'");i.link=u}}catch(d){a=!0,o=d}finally{try{!e&&r["return"]&&r["return"]()}finally{if(a)throw o}}n(t.data)}else"0"===t.status&&s(t.message)})}catch(o){s(o.message)}}},e.selectUser=function(t){return function(e){var n=e.onSuccess,s=e.onFail;try{t.callHandler(a.SELECT_USER,{},function(t){t=JSON.parse(t),"1"===t.status?n(t.data):"0"===t.status&&s(t.message)})}catch(o){s(o.message)}}},e.setTitle=function(t){return function(e){var n=e.title,s=(e.onSuccess,e.onFail);try{t.callHandler(a.SET_TITLE,{title:n},function(t){t=JSON.parse(t),"1"===t.status||"0"===t.status&&s(t.message)})}catch(o){s(o.message)}}},e.setRight=function(t){return function(e){var n=e.show,s=e.control,o=e.text,c=(e.onSuccess,e.onFail);try{t.callHandler(a.SET_RIGHT,{show:n,control:s,text:o},function(t){t=JSON.parse(t),"1"===t.status||"0"===t.status&&c(t.message)})}catch(r){c(r.message)}}},e.actionSheet=function(t){return function(e){var n=e.title,s=e.cancelButton,o=e.otherButtons,c=e.onSuccess,r=e.onFail;try{t.callHandler(a.ACTION_SHEET,{title:n,cancelButton:s,otherButtons:o},function(t){t=JSON.parse(t),"1"===t.status?c(t.data):"0"===t.status&&r(t.message)})}catch(i){r(i.message)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SHOW_DIALOG="showDialog",e.SHOW_TOAST="showToast",e.GET_LOCATION="getLocation",e.SHOW_PIC="showPic",e.START_APP="startApp",e.SHOW_ATTACHMENT="showAttachment",e.CALL_PHONE="callPhone",e.SEND_MESSAGE="sendMessage",e.GET_NETWORK_TYPE="getNetworkType",e.SELECT_PIC="selectPic",e.SELECT_ATTACHMENT="selectAttachment",e.SELECT_USER="selectUser",e.SET_TITLE="setTitle",e.SET_RIGHT="setRight",e.ACTION_SHEET="actionSheet"}]);