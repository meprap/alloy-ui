YUI.add("aui-data-editor",function(e,t){var n=e.getClassName("data","editor"),r=e.getClassName("data","editor","content","inner"),i=e.getClassName("data","editor","label"),s=e.getClassName("data","editor","required","label"),o='<div class="'+n+'">'+'<div><label class="'+i+' control-label"></label>'+'<label class="'+s+' control-label">{required}</label></div>'+'<div class="'+r+'"></div>'+"</div>";e.DataEditor=e.Base.create("data-editor",e.Base,[],{TPL_EDITOR_CONTENT:"<div></div>",initializer:function(){var t,n=this.get("node");t=e.Lang.sub(this.TPL_EDITOR_CONTENT,this.get("strings")),n.one("."+r).setHTML(t),this._uiSetLabel(this.get("label")),this._uiSetRequired(this.get("required")),this._uiSetVisible(this.get("visible")),this.after({labelChange:this._afterLabelChange,requiredChange:this._afterRequiredChange,visibleChange:this._afterVisibleChange})},destructor:function(){this.get("node").remove(!0)},isEmpty:function(){return!1},isValid:function(){return this.get("required")?!this.isEmpty():!0},_afterLabelChange:function(){this._uiSetLabel(this.get("label"))},_afterRequiredChange:function(){this._uiSetRequired(this.get("required"))},_afterVisibleChange:function(){this._uiSetVisible(this.get("visible"))},_uiSetLabel:function(t){var n=this.get("node").one("label");n.set("text",t),n.toggleView(e.Lang.trim(t)!=="")},_uiSetRequired:function(e){var t=this.get("node").one("."+s);e?t.show():t.hide()},_uiSetVisible:function(e){e?this.get("node").show():this.get("node").hide()}},{ATTRS:{editedValue:{value:null},label:{value:""},node:{readOnly:!0,valueFn:function(){return e.Node.create(e.Lang.sub(o,{required:this.get("strings").required}))}},originalValue:{value:null},required:{validator:e.Lang.isBoolean,value:!1},strings:{value:{required:"REQUIRED"},writeOnce:!0},visible:{validator:e.Lang.isBoolean,value:!0}}})},"3.0.3-deprecated.48",{requires:["aui-classnamemanager","base-build","node-base"],skinnable:!0});
