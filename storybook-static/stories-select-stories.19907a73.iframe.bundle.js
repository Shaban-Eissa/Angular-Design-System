(self.webpackChunkangular_design_system_components=self.webpackChunkangular_design_system_components||[]).push([[787],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/select.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var select_componentngResource=__webpack_require__("./src/app/components/select/select.component.css?ngResource"),select_componentngResource_default=__webpack_require__.n(select_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SelectComponent=class SelectComponent{options=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}];static propDecorators={options:[{type:core.Input}]}};SelectComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-select",standalone:!0,imports:[common.CommonModule],template:'<select class="px-4 py-2 border rounded-md">\r\n    <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>\r\n</select>',styles:[select_componentngResource_default()]})],SelectComponent);const select_stories={title:"Components/Select",component:SelectComponent},Default={args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}}},"./src/app/components/select/select.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);