YUI.add("aui-selector",function(e,t){var n=e.Selector,r=e.getClassName("sr-only"),i=e.getClassName("hide"),s=new RegExp(/rect\((0(px)?(,)?(\s)?){4}\)/i),o=new RegExp(i),u=new RegExp(r);n._isNodeHidden=function(e){var t=e.offsetWidth,n=e.offsetHeight,r=e.nodeName.toLowerCase()==="tr",i=e.className,a=e.style,f=!1;return r||(t===0&&n===0?f=!0:t>0&&n>0&&(f=!1)),f=f||a.display==="none"||a.visibility==="hidden"||a.position==="absolute"&&s.test(a.clip)||o.test(i)||u.test(i),f};var a=function(e){return function(t){return t.type===e}};e.mix(n.pseudos,{button:function(e){return e.type==="button"||e.nodeName.toLowerCase()==="button"},checkbox:a("checkbox"),checked:function(e){return e.checked===!0},disabled:function(e){return e.disabled===!0},empty:function(e){return!e.firstChild},enabled:function(e){return e.disabled===!1&&e.type!=="hidden"},file:a("file"),header:function(e){return/h\d/i.test(e.nodeName)},hidden:function(e){return n._isNodeHidden(e)},image:a("image"),input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},parent:function(e){return!!e.firstChild},password:a("password"),radio:a("radio"),reset:a("reset"),selected:function(e){return e.parentNode.selectedIndex,e.selected===!0},submit:a("submit"),text:a("text"),visible:function(e){return!n._isNodeHidden(e)}})},"3.1.0-deprecated.17",{requires:["selector-css3","aui-classnamemanager"]});
