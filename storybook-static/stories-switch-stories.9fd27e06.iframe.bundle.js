(self.webpackChunkangular_design_system_components=self.webpackChunkangular_design_system_components||[]).push([[15],{"./src/stories/switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>switch_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var switch_componentngResource=__webpack_require__("./src/app/components/switch/switch.component.css?ngResource"),switch_componentngResource_default=__webpack_require__.n(switch_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SwitchComponent=class SwitchComponent{label="Switch";checked=!1;static propDecorators={label:[{type:core.Input}],checked:[{type:core.Input}]}};SwitchComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-switch",standalone:!0,imports:[common.CommonModule,fesm2022_forms.YN],template:'<label class="flex items-center cursor-pointer">\r\n    <div class="relative">\r\n        <input type="checkbox" class="sr-only" [(ngModel)]="checked" />\r\n        <div [ngClass]="{\r\n        \'bg-blue-500\': checked,\r\n        \'bg-gray-400\': !checked\r\n      }" class="w-10 h-6 rounded-full shadow-inner"></div>\r\n        <div [ngClass]="{\r\n        \'translate-x-4\': checked,\r\n        \'translate-x-0\': !checked\r\n      }" class="absolute w-4 h-4 transition-transform bg-white rounded-full shadow inset-y-1 left-1"></div>\r\n    </div>\r\n    <span class="ml-3">{{ label }}</span>\r\n</label>',styles:[switch_componentngResource_default()]})],SwitchComponent);const switch_stories={title:"Components/Switch",component:SwitchComponent},Default={args:{label:"Switch",checked:!1}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Switch",\n    checked: false\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/app/components/switch/switch.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);