"use strict";(self.webpackChunkdemozap=self.webpackChunkdemozap||[]).push([[835],{"./stories/DemoZap.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonGreen:()=>DemoZap_stories_ButtonGreen,ButtonRed:()=>DemoZap_stories_ButtonRed,Counter:()=>DemoZap_stories_Counter,Default:()=>DemoZap_stories_Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DemoZap_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/react-demo-tab/dist/index.esm.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ButtonGreen_demozap=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./stories/ButtonGreen/ButtonGreen.demozap.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ButtonGreen_demozap.A,options);ButtonGreen_demozap.A&&ButtonGreen_demozap.A.locals&&ButtonGreen_demozap.A.locals;const stories_ButtonGreen_ButtonGreen_demozap=()=>react.createElement("button",{className:"btn-green"},"Green Button"),_ButtonGreen=()=>react.createElement(index_esm.z,{code:"import React from 'react';\n\nimport './ButtonGreen.demozap.css';\n\nconst ButtonGreen = () => <button className=\"btn-green\">Green Button</button>;\n\nexport default ButtonGreen;\n",codeExt:"tsx",style:".btn-green {\n  background-color: green;\n  font-size: 14px;\n  padding: 12px 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n}\n\n.btn-green:hover {\n  background-color: #4caf50;\n}\n",styleExt:"css"},react.createElement(stories_ButtonGreen_ButtonGreen_demozap,null)),ButtonRed_demozap=()=>react.createElement("button",{className:"btn-red"},"Red Button"),_ButtonRed=()=>react.createElement(index_esm.z,{code:"import React from 'react';\n\nimport './ButtonRed.demozap.scss';\n\nconst ButtonRed = () => <button className=\"btn-red\">Red Button</button>;\n\nexport default ButtonRed;\n",codeExt:"tsx",style:".btn-red {\n  background-color: red;\n  font-size: 14px;\n  padding: 12px 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n\n  &:hover {\n    background-color: #ca1f1f;\n  }\n}\n",styleExt:"scss"},react.createElement(ButtonRed_demozap,null)),Counter_demozap=()=>{const[count,setCount]=(0,react.useState)(0),msg=`Button clicked ${count.toString()} ${count>1?"times":"time"}`;return react.createElement(react.Fragment,null,react.createElement("button",{style:{fontSize:16,padding:"5px 15px",marginBottom:`${10..toString()}px`},onClick:()=>setCount(count+1)},"Click"),react.createElement("div",null,msg))},_Counter=()=>react.createElement(index_esm.z,{code:"import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const onCountInc = () => setCount(count + 1);\n\n  const msg = `Button clicked ${count.toString()} ${count > 1 ? 'times' : 'time'}`;\n  const marginBottom = 10;\n\n  return (\n    <>\n      <button\n        style={{ fontSize: 16, padding: '5px 15px', marginBottom: `${marginBottom.toString()}px` }}\n        onClick={onCountInc}\n      >\n        Click\n      </button>\n      <div>{msg}</div>\n    </>\n  );\n};\n\nexport default Counter;\n",codeExt:"tsx"},react.createElement(Counter_demozap,null)),Default_demozap=()=>react.createElement("h3",null,"DemoZap ⚡"),_Default=()=>react.createElement(index_esm.z,{code:"import React from 'react';\n\nconst Default = () => <h3>DemoZap ⚡</h3>;\n\nexport default Default;\n",codeExt:"jsx"},react.createElement(Default_demozap,null)),DemoZap_stories={title:"Examples"},DemoZap_stories_Default=()=>react.createElement(_Default,null),DemoZap_stories_ButtonGreen=()=>react.createElement(_ButtonGreen,null);DemoZap_stories_ButtonGreen.storyName="Button Green - css";const DemoZap_stories_ButtonRed=()=>react.createElement(_ButtonRed,null);DemoZap_stories_ButtonRed.storyName="Button Red - scss";const DemoZap_stories_Counter=()=>react.createElement(_Counter,null),__namedExportsOrder=["Default","ButtonGreen","ButtonRed","Counter"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./stories/ButtonGreen/ButtonGreen.demozap.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".btn-green {\n  background-color: green;\n  font-size: 14px;\n  padding: 12px 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n}\n\n.btn-green:hover {\n  background-color: #4caf50;\n}\n","",{version:3,sources:["webpack://./stories/ButtonGreen/ButtonGreen.demozap.css"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:[".btn-green {\n  background-color: green;\n  font-size: 14px;\n  padding: 12px 26px;\n  border-radius: 6px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n}\n\n.btn-green:hover {\n  background-color: #4caf50;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);