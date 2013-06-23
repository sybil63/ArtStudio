/*
YUI 3.10.1 (build 8bc088e)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("datatable-scroll",function(e,t){function u(e,t){return parseInt(e.getComputedStyle(t),10)||0}var n=e.Lang,r=n.isString,i=n.isNumber,s=n.isArray,o;e.DataTable.Scrollable=o=function(){},o.ATTRS={scrollable:{value:!1,setter:"_setScrollable"}},e.mix(o.prototype,{scrollTo:function(t){var n;return t&&this._tbodyNode&&(this._yScrollNode||this._xScrollNode)&&(s(t)?n=this.getCell(t):i(t)?n=this.getRow(t):r(t)?n=this._tbodyNode.one("#"+t):t instanceof e.Node&&t.ancestor(".yui3-datatable")===this.get("boundingBox")&&(n=t),n&&n.scrollIntoView()),this},_CAPTION_TABLE_TEMPLATE:'<table class="{className}" role="presentation"></table>',_SCROLL_LINER_TEMPLATE:'<div class="{className}"></div>',_SCROLLBAR_TEMPLATE:'<div class="{className}"><div></div></div>',_X_SCROLLER_TEMPLATE:'<div class="{className}"></div>',_Y_SCROLL_HEADER_TEMPLATE:'<table cellspacing="0" aria-hidden="true" class="{className}"></table>',_Y_SCROLLER_TEMPLATE:'<div class="{className}"><div class="{scrollerClassName}"></div></div>',_addScrollbarPadding:function(){var t=this._yScrollHeader,n="."+this.getClassName("header"),r,i,s,o,u;if(t){r=e.DOM.getScrollbarWidth()+"px",i=t.all("tr");for(o=0,u=i.size();o<u;o+=+s.get("rowSpan"))s=i.item(o).all(n).pop(),s.setStyle("paddingRight",r)}},_afterScrollableChange:function(){var t=this._xScrollNode;this._xScroll&&t&&(this._yScroll&&!this._yScrollNode?t.setStyle("paddingRight",e.DOM.getScrollbarWidth()+"px"):!this._yScroll&&this._yScrollNode&&t.setStyle("paddingRight","")),this._syncScrollUI()},_afterScrollCaptionChange:function(){(this._xScroll||this._yScroll)&&this._syncScrollUI()},_afterScrollColumnsChange:function(){if(this._xScroll||this._yScroll)this._yScroll&&this._yScrollHeader&&this._syncScrollHeaders(),this._syncScrollUI()},_afterScrollDataChange:function(){(this._xScroll||this._yScroll)&&this._syncScrollUI()},_afterScrollHeightChange:function(){this._yScroll&&this._syncScrollUI()},_afterScrollSort:function(){var e,t;this._yScroll&&this._yScrollHeader&&(t="."+this.getClassName("header"),e=this._theadNode.all(t),this._yScrollHeader.all(t).each(function(t,n){t.set("className",e.item(n).get("className"))}))},_afterScrollWidthChange:function(){(this._xScroll||this._yScroll)&&this._syncScrollUI()},_bindScrollbar:function(){var t=this._scrollbarNode,n=this._yScrollNode;t&&n&&!this._scrollbarEventHandle&&(this._scrollbarEventHandle=new e.Event.Handle([t.on("scroll",this._syncScrollPosition,this),n.on("scroll",this._syncScrollPosition,this)]))},_bindScrollResize:function(){this._scrollResizeHandle||(this._scrollResizeHandle=e.on("resize",this._syncScrollUI,null,this))},_bindScrollUI:function(){this.after({columnsChange:e.bind("_afterScrollColumnsChange",this),heightChange:e.bind("_afterScrollHeightChange",this),widthChange:e.bind("_afterScrollWidthChange",this),captionChange:e.bind("_afterScrollCaptionChange",this),scrollableChange:e.bind("_afterScrollableChange",this),sort:e.bind("_afterScrollSort",this)}),this.after(["dataChange","*:add","*:remove","*:reset","*:change"],e.bind("_afterScrollDataChange",this))},_clearScrollLock:function(){this._scrollLock&&(this._scrollLock.cancel(),delete this._scrollLock)},_createScrollbar:function(){var t=this._scrollbarNode;return t||(t=this._scrollbarNode=e.Node.create(e.Lang.sub(this._SCROLLBAR_TEMPLATE,{className:this.getClassName("scrollbar")})),t.setStyle("width",e.DOM.getScrollbarWidth()+1+"px")),t},_createScrollCaptionTable:function(){return this._captionTable||(this._captionTable=e.Node.create(e.Lang.sub(this._CAPTION_TABLE_TEMPLATE,{className:this.getClassName("caption","table")})),this._captionTable.empty()),this._captionTable},_createXScrollNode:function(){return this._xScrollNode||(this._xScrollNode=e.Node.create(e.Lang.sub(this._X_SCROLLER_TEMPLATE,{className:this.getClassName("x","scroller")}))),this._xScrollNode},_createYScrollHeader:function(){var t=this._yScrollHeader;return t||(t=this._yScrollHeader=e.Node.create(e.Lang.sub(this._Y_SCROLL_HEADER_TEMPLATE,{className:this.getClassName("scroll","columns")}))),t},_createYScrollNode:function(){var t;return this._yScrollNode||(t=this.getClassName("y","scroller"),this._yScrollContainer=e.Node.create(e.Lang.sub(this._Y_SCROLLER_TEMPLATE,{className:this.getClassName("y","scroller","container"),scrollerClassName:t})),this._yScrollNode=this._yScrollContainer.one("."+t)),this._yScrollContainer},_disableScrolling:function(){this._removeScrollCaptionTable(),this._disableXScrolling(),this._disableYScrolling(),this._unbindScrollResize(),this._uiSetWidth(this.get("width"))},_disableXScrolling:function(){this._removeXScrollNode()},_disableYScrolling:function(){this._removeYScrollHeader(),this._removeYScrollNode(),this._removeYScrollContainer(),this._removeScrollbar()},destructor:function(){this._unbindScrollbar(),this._unbindScrollResize(),this._clearScrollLock()},initializer:function(){this._setScrollProperties(),this.after(["scrollableChange","heightChange","widthChange"],this._setScrollProperties),this.after("renderView",e.bind("_syncScrollUI",this)),e.Do.after(this._bindScrollUI,this,"bindUI")},_removeScrollCaptionTable:function(){this._captionTable&&(this._captionNode&&this._tableNode.prepend(this._captionNode),this._captionTable.remove().destroy(!0),delete this._captionTable)},_removeXScrollNode:function(){var e=this._xScrollNode;e&&(e.replace(e.get("childNodes").toFrag()),e.remove().destroy(!0),delete this._xScrollNode)},_removeYScrollContainer:function(){var e=this._yScrollContainer;e&&(e.replace(e.get("childNodes").toFrag()),e.remove().destroy(!0),delete this._yScrollContainer)},_removeYScrollHeader:function(){this._yScrollHeader&&(this._yScrollHeader.remove().destroy(!0),delete this._yScrollHeader)},_removeYScrollNode:function(){var e=this._yScrollNode;e&&(e.replace(e.get("childNodes").toFrag()),e.remove().destroy(!0),delete this._yScrollNode)},_removeScrollbar:function(){this._scrollbarNode&&(this._scrollbarNode.remove().destroy(!0),delete this._scrollbarNode),this._scrollbarEventHandle&&(
this._scrollbarEventHandle.detach(),delete this._scrollbarEventHandle)},_setScrollable:function(t){return t===!0&&(t="xy"),r(t)&&(t=t.toLowerCase()),t===!1||t==="y"||t==="x"||t==="xy"?t:e.Attribute.INVALID_VALUE},_setScrollProperties:function(){var e=this.get("scrollable")||"",t=this.get("width"),n=this.get("height");this._xScroll=t&&e.indexOf("x")>-1,this._yScroll=n&&e.indexOf("y")>-1},_syncScrollPosition:function(t){var n=this._scrollbarNode,r=this._yScrollNode,i=t.currentTarget,s;if(n&&r){if(this._scrollLock&&this._scrollLock.source!==i)return;this._clearScrollLock(),this._scrollLock=e.later(300,this,this._clearScrollLock),this._scrollLock.source=i,s=i===n?r:n,s.set("scrollTop",i.get("scrollTop"))}},_syncScrollCaptionUI:function(){var t=this._captionNode,n=this._tableNode,r=this._captionTable,i;t?(i=t.getAttribute("id"),r||(r=this._createScrollCaptionTable(),this.get("contentBox").prepend(r)),t.get("parentNode").compareTo(r)||(r.empty().insert(t),i||(i=e.stamp(t),t.setAttribute("id",i)),n.setAttribute("aria-describedby",i))):r&&this._removeScrollCaptionTable()},_syncScrollColumnWidths:function(){var t=[];this._theadNode&&this._yScrollHeader&&(this._theadNode.all("."+this.getClassName("header")).each(function(n){t.push(e.UA.ie&&e.UA.ie<8?n.get("clientWidth")-u(n,"paddingLeft")-u(n,"paddingRight")+"px":n.getComputedStyle("width"))}),this._yScrollHeader.all("."+this.getClassName("scroll","liner")).each(function(e,n){e.setStyle("width",t[n])}))},_syncScrollHeaders:function(){var t=this._yScrollHeader,n=this._SCROLL_LINER_TEMPLATE,r=this.getClassName("scroll","liner"),i=this.getClassName("header"),s=this._theadNode.all("."+i);this._theadNode&&t&&(t.empty().appendChild(this._theadNode.cloneNode(!0)),t.all("[id]").removeAttribute("id"),t.all("."+i).each(function(t,i){var o=e.Node.create(e.Lang.sub(n,{className:r})),u=s.item(i);o.setStyle("padding",u.getComputedStyle("paddingTop")+" "+u.getComputedStyle("paddingRight")+" "+u.getComputedStyle("paddingBottom")+" "+u.getComputedStyle("paddingLeft")),o.appendChild(t.get("childNodes").toFrag()),t.appendChild(o)},this),this._syncScrollColumnWidths(),this._addScrollbarPadding())},_syncScrollUI:function(){var e=this._xScroll,t=this._yScroll,n=this._xScrollNode,r=this._yScrollNode,i=n&&n.get("scrollLeft"),s=r&&r.get("scrollTop");this._uiSetScrollable(),e||t?((this.get("width")||"").slice(-1)==="%"?this._bindScrollResize():this._unbindScrollResize(),this._syncScrollCaptionUI()):this._disableScrolling(),this._yScrollHeader&&this._yScrollHeader.setStyle("display","none"),e&&(t||this._disableYScrolling(),this._syncXScrollUI(t)),t&&(e||this._disableXScrolling(),this._syncYScrollUI(e)),i&&this._xScrollNode&&this._xScrollNode.set("scrollLeft",i),s&&this._yScrollNode&&this._yScrollNode.set("scrollTop",s)},_syncXScrollUI:function(t){var n=this._xScrollNode,r=this._yScrollContainer,i=this._tableNode,s=this.get("width"),o=this.get("boundingBox").get("offsetWidth"),a=e.DOM.getScrollbarWidth(),f,l;n||(n=this._createXScrollNode(),(r||i).replace(n).appendTo(n)),f=u(n,"borderLeftWidth")+u(n,"borderRightWidth"),n.setStyle("width",""),this._uiSetDim("width",""),t&&this._yScrollContainer&&this._yScrollContainer.setStyle("width",""),e.UA.ie&&e.UA.ie<8&&(i.setStyle("width",s),i.get("offsetWidth")),i.setStyle("width",""),l=i.get("offsetWidth"),i.setStyle("width",l+"px"),this._uiSetDim("width",s),n.setStyle("width",o-f+"px"),n.get("offsetWidth")-f>l&&(t?i.setStyle("width",n.get("offsetWidth")-f-a+"px"):i.setStyle("width","100%"))},_syncYScrollUI:function(t){var n=this._yScrollContainer,r=this._yScrollNode,i=this._xScrollNode,s=this._yScrollHeader,o=this._scrollbarNode,a=this._tableNode,f=this._theadNode,l=this._captionTable,c=this.get("boundingBox"),h=this.get("contentBox"),p=this.get("width"),d=c.get("offsetHeight"),v=e.DOM.getScrollbarWidth(),m;l&&!t&&l.setStyle("width",p||"100%"),n||(n=this._createYScrollNode(),r=this._yScrollNode,a.replace(n).appendTo(r)),m=t?i:n,t||a.setStyle("width",""),t&&(d-=v),r.setStyle("height",d-m.get("offsetTop")-u(m,"borderTopWidth")-u(m,"borderBottomWidth")+"px"),t?n.setStyle("width",a.get("offsetWidth")+v+"px"):this._uiSetYScrollWidth(p),l&&!t&&l.setStyle("width",n.get("offsetWidth")+"px"),f&&!s&&(s=this._createYScrollHeader(),n.prepend(s),this._syncScrollHeaders()),s&&(this._syncScrollColumnWidths(),s.setStyle("display",""),o||(o=this._createScrollbar(),this._bindScrollbar(),h.prepend(o)),this._uiSetScrollbarHeight(),this._uiSetScrollbarPosition(m))},_uiSetScrollable:function(){this.get("boundingBox").toggleClass(this.getClassName("scrollable","x"),this._xScroll).toggleClass(this.getClassName("scrollable","y"),this._yScroll)},_uiSetScrollbarHeight:function(){var e=this._scrollbarNode,t=this._yScrollNode,n=this._yScrollHeader;e&&t&&n&&(e.get("firstChild").setStyle("height",this._tbodyNode.get("scrollHeight")+"px"),e.setStyle("height",parseFloat(t.getComputedStyle("height"))-parseFloat(n.getComputedStyle("height"))+"px"))},_uiSetScrollbarPosition:function(t){var n=this._scrollbarNode,r=this._yScrollHeader;n&&t&&r&&n.setStyles({top:parseFloat(r.getComputedStyle("height"))+u(t,"borderTopWidth")+t.get("offsetTop")+"px",left:t.get("offsetWidth")-e.DOM.getScrollbarWidth()-1-u(t,"borderRightWidth")+"px"})},_uiSetYScrollWidth:function(t){var n=this._yScrollContainer,r=this._tableNode,i,s,o,u;n&&r&&(u=e.DOM.getScrollbarWidth(),t?(s=n.get("offsetWidth")-n.get("clientWidth")+u,n.setStyle("width",t),o=n.get("clientWidth")-s,r.setStyle("width",o+"px"),i=r.get("offsetWidth"),n.setStyle("width",i+u+"px")):(r.setStyle("width",""),n.setStyle("width",""),n.setStyle("width",r.get("offsetWidth")+u+"px")))},_unbindScrollbar:function(){this._scrollbarEventHandle&&this._scrollbarEventHandle.detach()},_unbindScrollResize:function(){this._scrollResizeHandle&&(this._scrollResizeHandle.detach(),delete this._scrollResizeHandle)}},!0),e.Base.mix(e.DataTable,[o])},"3.10.1",{requires:["datatable-base","datatable-column-widths","dom-screen"],skinnable:!0});