"use strict";var RDStation=function(){var t={windowLoaded:!1};return window.addEventListener("load",function(){t.windowLoaded=!0}),t}(),RDCookieControl=function(){var t={analytics:{eventName:"rd_cookie_consent_allow_analytics",track:!0},functional:{eventName:"rd_cookie_consent_allow_functional",track:!0},configuration:null};return document.addEventListener(t.analytics.eventName,function(){t.analytics.track=!0}),document.addEventListener(t.functional.eventName,function(){t.functional.track=!0}),t}();!function(){var t=function(){var t=document.createElement("iframe");t.onload=function(){RDStation.windowLoaded=!0,e()},t.setAttribute("style","width: 1px; height: 1px; position: absolute; top: -100px;"),t.setAttribute("id","rd_tmgr"),document.body.appendChild(t)},u=function(){window.opener&&-1!=window.name.indexOf("TAGMANAGER_VERIFY")&&window.opener.postMessage(JSON.stringify({task:"checkTagManager",tagManagerChecked:!0}),"https://app.rdstation.com.br")},e=function(){(function(t,e,n,o,a){var i=function(){t?RdstationPopup.init(e,n,t):RdstationPopup.init(e,n)},c=function(t,e){return t+"/js/rdstation-popups/"+e+"/rdstation-popup.min.js?v=1"},r=function(t){t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,i())}:t.onload=i},d=function(t,e){var n=document.createElement("script");return n.setAttribute("type","text/javascript"),n.setAttribute("src",c(t,e)),r(n),n},u=function(){return null!==document.querySelector("#landing-page-attributes")},s=function(){return u()&&null!==document.querySelector("body > .bricks--container")};if(!u()||s()){var l=d(o,a);document.body.appendChild(l)}})("UA-133483840-1","840dcd37c7da00c118b6eda3c9c0b330","130726","https://d335luupugsy2.cloudfront.net","bricks");var t=document.createElement("script"),e=function(){RdIntegration.integrateAll("840dcd37c7da00c118b6eda3c9c0b330"),console.log("FormIntegration; ver.1.3.3","initialized")};t.setAttribute("type","text/javascript"),t.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js?v=1"),t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},document.body.appendChild(t)},s=function(){return"complete"===document.readyState};(function(t){function e(){i.onload=c,i.onreadystatechange=function(){"complete"===this.readyState&&c()},document.body.appendChild(i)}function n(){TrafficSourceCookie.init("__trf.src",".mycond.com.br"),console.log("TrafficSourceCookie","initialized");try{u()}catch(t){console.error(t)}}function o(){r.onload=n,r.onreadystatechange=function(){"complete"===this.readyState&&n()},document.body.appendChild(r)}if(window.hasOwnProperty("RDStationTrackingCodeChecker")&&window.RDStationTrackingCodeChecker)return;if(window.RDStationTrackingCodeChecker=!0,-1!=navigator.userAgent.toLowerCase().indexOf("safari"))var a=setInterval(function d(){s()&&(clearInterval(a),t())},500);else s()?t():window.addEventListener("load",t);var i=document.createElement("script"),c=function(){LeadTracking.init({token:"840dcd37c7da00c118b6eda3c9c0b330"}),console.log("LeadTracking","initialized")};i.setAttribute("type","text/javascript"),i.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/lead-tracking/stable/lead-tracking.min.js"),RDCookieControl.analytics.track?e():document.addEventListener(RDCookieControl.analytics.eventName,e);var r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/traffic-source-cookie/stable/traffic-source-cookie.min.js"),RDCookieControl.analytics.track?o():document.addEventListener(RDCookieControl.analytics.eventName,o)})(t)}();