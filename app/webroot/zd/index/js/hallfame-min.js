/* ZD */
YUI.add("hallfame",function(a){function b(){++l>k&&(l-=k),h.setStyle("top",-l+"px")}function c(){m||(m=setInterval(b,25))}function d(){m&&(clearInterval(m),m=0)}function e(){f.inRegion(a.DOM.viewportRegion(),!1)?c():d()}var f=a.one(".hall"),g=f.one(".hall-list"),h=f.one("ul"),i=h.all("li"),j=(i.size(),g.get("offsetHeight")),k=h.get("offsetHeight"),l=0,m=0;j>k||(i.each(function(a){h.appendChild(a.cloneNode(!0))}),a.on("scroll",a.throttle(function(){e()},15),a.config.win),e())},"0.0.1",{requires:["node","yui-throttle"]});