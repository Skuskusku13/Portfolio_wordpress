!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.serverSideRender},function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(0),l=o(3),s=o(4),c=o(2),i=o(5),a=o.n(i);Object(l.registerBlockType)("display-remote-posts-block/display-remote-posts",{title:Object(n.__)("Display Remote Posts","display-remote-posts-block"),icon:"admin-post",category:"embed",attributes:{url:{type:"string",default:""},title:{type:"boolean",default:!0},posts:{type:"number",default:1},featured_images:{type:"boolean",default:!0},excerpts:{type:"boolean",default:!0}},edit:function(e){var t=e.attributes,o=t.url,l=t.title,i=t.posts,p=t.featured_images,u=t.excerpts;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(s.InspectorControls,null,Object(r.createElement)(c.PanelBody,{title:"Settings",initialOpen:!0},Object(r.createElement)(c.TextControl,{label:Object(n.__)("Blog URL","display-remote-posts-block"),value:o,onChange:function(t){return e.setAttributes({url:t})},help:Object(n.__)("Enter the web address of the blog","display-remote-posts-block")}),Object(r.createElement)(c.ToggleControl,{label:Object(n.__)("Show title?","display-remote-posts-block"),help:l?Object(n.__)("Yes","display-remote-posts-block"):Object(n.__)("No","display-remote-posts-block"),checked:l,onChange:function(){return e.setAttributes({title:!l})}}),Object(r.createElement)(c.RangeControl,{label:Object(n.__)("ShowNumber of Posts to Display","display-remote-posts-block"),value:i,onChange:function(t){return e.setAttributes({posts:t})},min:1,max:10}),Object(r.createElement)(c.ToggleControl,{label:Object(n.__)("Show featured images?","display-remote-posts-block"),help:p?Object(n.__)("Yes","display-remote-posts-block"):Object(n.__)("No","display-remote-posts-block"),checked:p,onChange:function(){return e.setAttributes({featured_images:!p})}}),Object(r.createElement)(c.ToggleControl,{label:Object(n.__)("Show excerpts?","display-remote-posts-block"),help:u?Object(n.__)("Yes","display-remote-posts-block"):Object(n.__)("No","display-remote-posts-block"),checked:u,onChange:function(){return e.setAttributes({excerpts:!u})}}))),Object(r.createElement)(a.a,{block:"display-remote-posts-block/display-remote-posts",attributes:e.attributes}))},example:{attributes:{url:"",title:!0,posts:1,featured_images:!0,excerpts:!0}}})}]);