(self.webpackChunkangular_design_system_components=self.webpackChunkangular_design_system_components||[]).push([[113],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Removable:()=>Removable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>chip_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var chip_componentngResource=__webpack_require__("./src/app/components/chip/chip.component.css?ngResource"),chip_componentngResource_default=__webpack_require__.n(chip_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ChipComponent=class ChipComponent{label="Chip";variant="primary";removable=!1;remove=new core.EventEmitter;onRemove(){this.remove.emit()}static propDecorators={label:[{type:core.Input}],variant:[{type:core.Input}],removable:[{type:core.Input}],remove:[{type:core.Output}]}};ChipComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-chip",standalone:!0,imports:[common.CommonModule],template:'<div [ngClass]="{\r\n    \'bg-blue-500\': variant === \'primary\',\r\n    \'bg-gray-500\': variant === \'secondary\'\r\n  }" class="inline-flex items-center px-3 py-1 text-sm text-white rounded-full">\r\n    {{ label }}\r\n    <button *ngIf="removable" (click)="onRemove()" class="ml-2 focus:outline-none">\r\n        &times;\r\n    </button>\r\n</div>',styles:[chip_componentngResource_default()]})],ChipComponent);const chip_stories={title:"Components/Chip",component:ChipComponent},Primary={args:{label:"Primary Chip",variant:"primary"}},Removable={args:{label:"Removable Chip",variant:"secondary",removable:!0}},__namedExportsOrder=["Primary","Removable"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Primary Chip",\n    variant: "primary"\n  }\n}',...Primary.parameters?.docs?.source}}},Removable.parameters={...Removable.parameters,docs:{...Removable.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Removable Chip",\n    variant: "secondary",\n    removable: true\n  }\n}',...Removable.parameters?.docs?.source}}}},"./src/app/components/chip/chip.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);