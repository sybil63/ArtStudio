/* ZD */
YUI.add("intro",function(a){var b={init:function(){this.body=a.one("body"),this.bd=a.one(".g-bd"),this.aside=a.one(".intro-aside"),this.initScroll(),this.bindLinkScroll(),this.checkScroll(),this.initNavSlide(),this.initGallery(),this.initPrizeSlide()},initScroll:function(){var b=this;this.fixedTop=this.aside.get("region").top,this.fixedBottom=this.bd.get("region").bottom-this.aside.get("offsetHeight"),this.navLinks=a.all(".intro-nav-link"),a.on("scroll",a.throttle(function(){b.checkScroll()},15),a.config.win,this)},bindLinkScroll:function(){this.navLinks.on("click",function(a){a.preventDefault(),this.scrollTo(a.target,!0)},this)},scrollTo:function(b,c){this.navLinks.removeClass("selected"),b&&(b.addClass("selected"),c&&window.scrollTo(0,a.one("#"+b.getAttribute("data-id")).getY()))},checkScroll:function(){this.checkLinkScroll(),this.checkNavScroll()},checkLinkScroll:function(){var b,c,d=this.bd.get("viewportRegion");this.navLinks.each(function(e){b=a.one("#"+e.getAttribute("data-id")),b.inRegion(d)&&(c=e)},this),this.scrollTo(c)},checkNavScroll:function(){var a=this.body.get("scrollTop");this.body.get("scrollHeight"),a>=this.fixedBottom?this.aside.setStyles({position:"absolute",top:"auto",bottom:"0px","float":"left"}):a>=this.fixedTop?this.aside.setStyles({position:"fixed",top:"0px",bottom:"auto","float":"none"}):this.aside.setStyles({position:"relative",top:"0px",bottom:"auto","float":"left"})},initNavSlide:function(){var b=new a.SimpleSlide.Slide({panels:".intro-slide-panel",width:390,height:630,prevBtn:".intro-slide-prev",nextBtn:".intro-slide-next",panelSelectedClass:"intro-slide-show",transCfg:{duration:.15}});b.after("slide",function(a){this.prevBtn.toggleClass("intro-slide-disabled",0===a.index),this.nextBtn.toggleClass("intro-slide-disabled",a.index===this.total-1)}),b.render(),this.navSlide=b},initGallery:function(){a.one("#J_intro_gallery").on("click",function(b){b.preventDefault(),a.Gallery.showAlbum(b.target.getAttribute("data-albumid"))})},initPrizeSlide:function(){var b=new a.SimpleSlide({selected:1,tabs:".intro-prize-tabs li",panels:".intro-prize-panel",width:425,height:470,event:"hover",tabSelectedClass:"intro-prize-selected",panelSelectedClass:"intro-prize-show"});b.render(),b.panels.each(function(a){this.initImageSlide(a)},this),this.prizeSlide=b},initImageSlide:function(b){var c,d,e,f=b.all("li");f.size()>1&&(d=a.Node.create('<a href="#" class="intro-prize-prev"></a>'),e=a.Node.create('<a href="#" class="intro-prize-next"></a>'),c=b.one(".intro-prize-image"),c.append(d),c.append(e),b.slide=new a.SimpleSlide.Slide({panels:f._nodes,width:425,height:470,prevBtn:d,nextBtn:e,transCfg:{duration:.15}}),b.slide.after("slide",function(a){this.prevBtn.toggleClass("intro-prize-disabled",0===a.index),this.nextBtn.toggleClass("intro-prize-disabled",a.index===this.total-1)}),b.slide.render())}};b.init()},"0.0.1",{requires:["simpleslide","yui-throttle"]});