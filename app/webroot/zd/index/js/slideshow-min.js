/* ZD */
YUI.add("slideshow",function(a){var b=a.one(".tab-btn-prev"),c=a.one(".tab-btn-next"),d=a.one("#J_slide_show"),e=a.one(".tab-nav-bar-light"),f=a.all(".tab-nav li"),g=new a.Slide("J_slide_show",{effect:"h-slide",autoSlide:!0,hoverStop:!0,carousel:!0,timeout:5e3,speed:.5});b.removeClass("hidden"),c.removeClass("hidden"),f.item(0).addClass("lighted"),g.on("switch",function(a){e.setStyle("width",62*a.index+"px"),f.each(function(b,c){b.toggleClass("lighted",c<=a.index)})}),d.on("hover",function(){d.addClass("slide-show-hover")},function(){d.removeClass("slide-show-hover")}),b.on("click",function(a){a.halt(),g.previous()}),c.on("click",function(a){a.halt(),g.next()})},"0.0.1",{requires:["slide","event-delegate","event-hover"]});