(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1024:function(module,exports){},1026:function(module,exports){},1037:function(module,exports){},1039:function(module,exports){},1064:function(module,exports){},1065:function(module,exports){},1070:function(module,exports){},1072:function(module,exports){},1079:function(module,exports){},1098:function(module,exports){},1160:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(267).configure)([__webpack_require__(1161),__webpack_require__(1162)],module,!1)}).call(this,__webpack_require__(128)(module))},1161:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1161},1162:function(module,exports,__webpack_require__){var map={"./components/atoms/Anchor/Anchor.stories.tsx":1189};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1162},1187:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(26),__webpack_require__(5),__webpack_require__(56),__webpack_require__(532),__webpack_require__(1115),__webpack_require__(54),__webpack_require__(1116),__webpack_require__(1117),__webpack_require__(531);var client_api=__webpack_require__(69),esm=__webpack_require__(3),client=__webpack_require__(267),dist=__webpack_require__(640),styled_components_browser_esm=__webpack_require__(175),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},themes=[{name:"Default",palette:{primary:{main:"#27174f",darK:"#060110",light:"#795276"},grey:"#616161"}},{name:"Light",palette:{primary:{main:"#1B5E20",darK:"#003300",light:"#4c8c4a"},grey:"#e50707"}}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(client.addDecorator)(Object(dist.withThemesProvider)(themes),styled_components_browser_esm.ThemeProvider),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},1189:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(17),__webpack_require__(1163);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),next_link=__webpack_require__(644),link_default=__webpack_require__.n(next_link),styled_components_browser_esm=__webpack_require__(175),jsx_runtime=__webpack_require__(216),Text=(react_default.a.createElement,styled_components_browser_esm.default.a.withConfig({displayName:"Anchor__Text",componentId:"sc-1nfvfz3-0"})(["color:",";"],(function(_ref){var color=_ref.color,theme=_ref.theme;return color||theme.palette.grey}))),Anchor_Anchor=function Anchor(_ref2){var href=_ref2.href,text=_ref2.text,textColor=_ref2.textColor;return console.log(text),Object(jsx_runtime.jsx)(link_default.a,{href:href,children:Object(jsx_runtime.jsx)(Text,{color:textColor,children:text})})};Anchor_Anchor.displayName="Anchor";try{Anchor_Anchor.displayName="Anchor",Anchor_Anchor.__docgenInfo={description:"",displayName:"Anchor",props:{href:{defaultValue:null,description:"Client routing href",name:"href",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"Anchor text",name:"text",required:!0,type:{name:"string"}},textColor:{defaultValue:null,description:"Text color",name:"textColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Anchor/Anchor.tsx#Anchor"]={docgenInfo:Anchor_Anchor.__docgenInfo,name:"Anchor",path:"src/components/atoms/Anchor/Anchor.tsx#Anchor"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={parameters:{storySource:{source:"import { ComponentMeta, ComponentStory } from '@storybook/react'\nimport React from 'react'\n\nimport Anchor from '@/components/atoms/Anchor'\n\nexport default {\n  title: 'atoms/Anchor',\n  component: Anchor,\n  argTypes: {\n    textColor: { control: 'color' },\n  },\n} as ComponentMeta<typeof Anchor>\n\nconst Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />\n\nexport const Default = Template.bind({})\nDefault.args = {\n  href: 'https://naver.com',\n  text: 'Hello',\n}\n",locationsMap:{default:{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}}}}},title:"atoms/Anchor",component:Anchor_Anchor,argTypes:{textColor:{control:"color"}}};var Anchor_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Anchor_Anchor,Object.assign({},args))};Anchor_stories_Template.displayName="Template";var Default=Anchor_stories_Template.bind({});Default.args={href:"https://naver.com",text:"Hello"},Default.parameters=Object.assign({storySource:{source:"(args) => <Anchor {...args} />"}},Default.parameters)},664:function(module,exports,__webpack_require__){__webpack_require__(665),__webpack_require__(820),__webpack_require__(821),__webpack_require__(1182),__webpack_require__(1183),__webpack_require__(1186),__webpack_require__(1190),__webpack_require__(1191),__webpack_require__(1188),__webpack_require__(1184),__webpack_require__(1192),__webpack_require__(1185),__webpack_require__(1019),__webpack_require__(1114),__webpack_require__(1187),module.exports=__webpack_require__(1160)},731:function(module,exports){},821:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(267)}},[[664,2,3]]]);