/* ZD */
!function(){function a(a){return"/"+a+"/"}function b(a){return"/min/?b="+a+"&f="}function c(a,b,c){return b=b||"js",c=c||"-",a+(YUI.filter?".":c+"min.")+b}var d,e=!0;location.search.indexOf("debug=true")>-1&&(d="RAW"),location.search.indexOf("combo=false")>-1&&(e=!1),YUI.filter=d,YUI.combine=e,YUI.getBase=a,YUI.getComboBase=b,YUI.getPath=c,YUI.GlobalConfig={base:a("yui/build"),comboBase:b("yui/build"),root:"",combine:e,comboSep:",",filter:d,groups:{"g-widgets":{base:a("global/wdg"),comboBase:b("global/wdg"),root:"",combine:e,modules:{slide:{path:c("slide/slide"),requires:["node","anim"]},datecascade:{path:c("datecascade/datecascade"),requires:["node","base"]},validator:{path:c("validator/validator")},waterfall:{path:c("waterfall/waterfall"),requires:["node","event","base"]},"waterfall-loader":{path:c("waterfall/waterfall-loader"),requires:["waterfall"]},"galleria-skin":{path:c("galleria/galleria","css"),type:"css"},galleria:{path:c("galleria/galleria"),requires:["galleria-skin","node-event-simulate","base","widget","widget-stdmod","widget-stack","scrollview"]},"slideshow-skin":{path:c("slideshow/slideshow","css"),type:"css"},slideshow:{path:c("slideshow/slideshow"),requires:["slideshow-skin","base","widget","widget-stack","widget-position","widget-position-align","widget-modality","transition"]},mytabview:{path:c("mytabview/mytabview"),requires:["base","classnamemanager","node","event","event-delegate"]},"mytabview-fade":{path:c("mytabview/mytabview-fade"),requires:["plugin","mytabview"]},"mytabview-lazyload":{path:c("mytabview/mytabview-lazyload"),requires:["plugin","mytabview"]},greensock:{path:c("greensock/TweenMax","js",".")},ZeroClipboard:{path:c("ZeroClipboard/ZeroClipboard","js",".")}}},"g-mods":{base:a("global/js"),comboBase:b("global/js"),root:"",combine:e,modules:{zdglobal:{use:["g-floatbar"]},"g-floatbar":{path:c("g-floatbar"),requires:["anim"]}}}}},window.ZD=YUI()}();