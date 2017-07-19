YUI.add("aui-datatable-base-cell-editor",function(e,t){var n,r=/<br\s*\/?>/gi,i=/[\r\n]/g,s="<br/>";n=e.Component.create({NAME:"baseCellEditor",ATTRS:{constrain:{value:!0},editable:{value:!1,validator:e.Lang.isBoolean},elementName:{value:"value",validator:e.Lang.isString},footerContent:{value:""},hideOnSave:{value:!0,validator:e.Lang.isBoolean},inputFormatter:{value:function(t){return e.Lang.isString(t)&&(t=t.replace(i,s)),t}},outputFormatter:{value:function(t){var n=this;return e.Lang.isString(t)&&(n.get("unescapeValue")&&(t=e.Lang.String.unescapeEntities(t)),t=t.replace(r,"\n")),t}},showToolbar:{value:!0,validator:e.Lang.isBoolean},strings:{value:{edit:"Edit",save:"Save",cancel:"Cancel"}},tabIndex:{value:1},toolbar:{setter:"_setToolbar",validator:e.Lang.isObject,value:null},unescapeValue:{value:!0,validator:e.Lang.isBoolean},validator:{setter:"_setValidator",validator:e.Lang.isObject,value:null},value:{value:""},visible:{value:!1}},EXTENDS:e.Overlay,UI_ATTRS:["editable","showToolbar","value"],prototype:{CONTENT_TEMPLATE:"<form></form>",ELEMENT_TEMPLATE:null,elements:null,validator:null,_hDocEscKeyEv:null,_hDocMouseDownEv:null,initializer:function(){this._initEvents()},destructor:function(){var e=this._hDocEscKeyEv,t=this._hDocMouseDownEv,n=this.toolbar,r=this.validator;e&&e.detach(),t&&t.detach(),n&&n.destroy(),r&&r.destroy()},formatValue:function(t,n){var r=this;return e.Lang.isFunction(t)&&(n=t.call(r,n)),n},getValue:function(){var e=this;return e.formatValue(e.get("inputFormatter"),e.getElementsValue())},_initEvents:function(){var t=this;t.publish({cancel:{defaultFn:t._defCancelFn},initEdit:{defaultFn:t._defInitEditFn,fireOnce:!0},initValidator:{defaultFn:t._defInitValidatorFn,fireOnce:!0},initToolbar:{defaultFn:t._defInitToolbarFn,fireOnce:!0},save:{defaultFn:t._defSaveFn}}),t.after({render:t._afterRender,visibleChange:e.debounce(t._debounceVisibleChange,350,t)}),t.on({"form-validator:submit":e.bind(t._onSubmit,t)})},_afterRender:function(){var e=this;e._handleInitValidatorEvent(),e._handleInitToolbarEvent()},_defCancelFn:function(){this.hide()},_defInitValidatorFn:function(){var t=this;t.validator=new e.FormValidator(t.get("validator"))},_defInitToolbarFn:function(){var t=this,n=t.get("editable");t.toolbar=(new e.Toolbar(t.get("toolbar"))).render(t.footerNode),n&&t._uiSetEditable(n)},_defSaveFn:function(){var e=this;e.get("hideOnSave")&&e.hide()},_debounceVisibleChange:function(t){var n=this,r=n._hDocEscKeyEv,i=n._hDocMouseDownEv;t.newVal?(r||(n._hDocEscKeyEv=e.getDoc().on("key",e.bind(n._onEscKey,n),"down:27")),i||(n._hDocMouseDownEv=e.getDoc().on("mousedown",e.bind(n._onDocMouseDownExt,n)))):(r&&(r.detach(),n._hDocEscKeyEv=null),i&&(i.detach(),n._hDocMouseDownEv=null))},_handleCancelEvent:function(){var e=this;e.fire("cancel")},_handleEditEvent:function(){var e=this;e.fire("edit")},_handleInitEditEvent:function(){var e=this;e.get("rendered")&&this.fire("initEdit")},_handleInitValidatorEvent:function(){var e=this;e.get("rendered")&&this.fire("initValidator")},_handleInitToolbarEvent:function(){var e=this;e.get("rendered")&&e.get("showToolbar")&&this.fire("initToolbar")},_handleSaveEvent:function(){var e=this;e.validator.validate(),e.validator.hasErrors()||e.fire("save",{newVal:e.getValue(),prevVal:e.get("value")})},_onDocMouseDownExt:function(e){var t=this,n=t.get("boundingBox");n.contains(e.target)||t._handleCancelEvent()},_onEscKey:function(){var e=this;e._handleCancelEvent()},_onSubmit:function(e){var t=e.validator;t&&t.formEvent.halt()},_setToolbar:function(t){var n=this,r=n.getStrings();return e.merge({activeState:!1,children:[[{on:{click:e.bind(n._handleSaveEvent,n)},label:r.save,icon:"glyphicon glyphicon-ok-sign"},{on:{click:e.bind(n._handleCancelEvent,n)},label:r.cancel}]]},t)},_setValidator:function(t){var n=this;return e.merge({boundingBox:n.get("contentBox"),bubbleTargets:n},t)},_uiSetShowToolbar:function(e){var t=this,n=t.footerNode;e?n.show():n.hide(),t._handleInitToolbarEvent()},getElementsValue:function(){var e=this,t=e.elements;return t?t.get("value"):""},renderUI:function(){var t=this;t.ELEMENT_TEMPLATE&&(t.elements=e.Node.create(t.ELEMENT_TEMPLATE),t._syncElementsName(),t.setStdModContent(e.WidgetStdMod.BODY,t.elements))},_defInitEditFn:function(){},_syncElementsFocus:function(){var e=this;e.elements.selectText()},_syncElementsName:function(){var e=this;e.elements.setAttribute("name",e.get("elementName"))},_syncFocus:function(){var t=this;e.later(0,t,t._syncElementsFocus)},_uiSetEditable:function(t){var n=this,r=n.toolbar;n.get("rendered")&&r&&(t?r.add([{icon:"glyphicon glyphicon-edit",label:n.getString("edit"),on:{click:e.bind(n._handleEditEvent,n)}}],1):r.remove(1))},_uiSetValue:function(e){var t=this,n=t.elements;n&&n.val(t.formatValue(t.get("outputFormatter"),e))}}}),e.BaseCellEditor=n},"3.1.0-deprecated.17",{requires:["datatable-base","overlay"],skinnable:!0});
