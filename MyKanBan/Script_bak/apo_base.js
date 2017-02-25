ApoJS.Base={"$":function(A){return document.getElementById(A)},"OS":{"IE":1,"Firefox":2,"Opera":3,"Netscape":4,"Safari":5,"Camino":6,"Gecko":7,"Chrome":8,"Unknown":0},"GetOS":function(){if(navigator.userAgent.indexOf("MSIE")>0){return 1}if(navigator.userAgent.indexOf("Firefox")>0){return 2}if(navigator.userAgent.indexOf("Chrome")>0){return 8}if(navigator.userAgent.indexOf("Opera")>0){return 3}if(navigator.userAgent.indexOf("Netscape")>0){return 4}if(navigator.userAgent.indexOf("Safari")>0){return 5}if(navigator.userAgent.indexOf("Camino")>0){return 6}if(navigator.userAgent.indexOf("Gecko")>0){return 7}return 0},"Trim":function(A){return A.replace(/(^\s*)|(\s*$)/g,"")},"FindOffsetTop":function(A){var B=0;if(A.offsetParent){while(A.offsetParent){B+=A.offsetTop;A=A.offsetParent}}return B},"FindOffsetLeft":function(A){var B=0;if(A.offsetParent){while(A.offsetParent){B+=A.offsetLeft;A=A.offsetParent}}return B},"GetAllChildTags":function(B,A){if(!B){return}return B.getElementsByTagName(A)},"HideAllChildTags":function(F,B){if(!F){return}var J=null;var H=B.split(",");var I="";var G=H.length;for(var A=0;A<G;A++){I=H[A];J=getAllChildTags(F,I);if(J&&J.length>0){var D=null;var E=J.length;for(var C=0;C<E;C++){D=J[C];D.setAttribute("apo_tag_visibility",D.style.visibility);D.style.visibility="hidden"}}}},"ShowAllChildTags":function(G,B){if(!G){return}var K=null;var I=B.split(",");var J="";var H=I.length;for(var A=0;A<H;A++){J=I[A];K=getAllChildTags(G,J);if(K&&K.length>0){var E=null;var F=K.length;var C=null;for(var D=0;D<F;D++){E=K[D];C=E.getAttribute("apo_tag_visibility");E.style.visibility=C?C:"inherit"}}}},"SetOpacity":function(C,B){var A=C.style;if(A.MozOpacity!=undefined){A.MozOpacity=B}else{if(A.opacity!=undefined){A.opacity=B}else{if(A.filter!=undefined){if(C.filters){A.filter="alpha(opacity=0)";C.filters.alpha.opacity=B*100}else{A.filter="alpha(opacity="+(B*100)+")"}}}}},"SetCanvasImgRotate":function(C,A,D){if(!A||!A.getContext){return}var G=A.getContext("2d");var J=C.width;var F=C.height;var E=Math.sqrt(J*J/4+F*F/4);var H=Math.atan(F/J);var I=E*Math.cos(D*Math.PI/180+H)-J/2;var B=E*Math.sin(D*Math.PI/180+H)-F/2;A.setAttribute("width",J);A.setAttribute("height",F);G.rotate(D*Math.PI/180);G.drawImage(C,B,I)},"StopBubble":function(B){var A=(B)?B:window.event;if(window.event){A.cancelBubble=true}else{A.stopPropagation()}},"ZoomRate":function(){var A=1;if(window.screen.deviceXDPI){A=parseInt(Math.round(window.screen.deviceXDPI/window.screen.logicalXDPI*100))/100}return A},"IsMouseHover":function(A,B){if(A.type&&A.type!="mouseout"&&A.type!="mouseover"){return false}var C=A.relatedTarget?A.relatedTarget:A.type=="mouseout"?A.toElement:A.fromElement;while(C&&C!=B){C=C.parentNode}return(C!=B)},"CheckCSS3Transition":function(){var B=document.body||document.documentElement;var E=B.style;var C="transition";if(typeof E[C]=="string"){return true}var D=["Moz","Webkit","Khtml","O","ms"],C="Transition";for(var A=0;A<D.length;A++){if(typeof E[D[A]+C]=="string"){return true}}return false}};