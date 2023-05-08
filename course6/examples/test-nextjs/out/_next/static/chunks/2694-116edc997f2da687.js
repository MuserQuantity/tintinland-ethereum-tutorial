"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2694],{12694:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(47568),r=n(82670),i=n(20414),s=n(85893),u=n(5372),l=JSON.parse('[{"inputs":[{"internalType":"address","name":"cloneFactory","type":"address"},{"internalType":"address","name":"erc20Template","type":"address"},{"internalType":"address","name":"customErc20Template","type":"address"},{"internalType":"address","name":"customMintableErc20Template","type":"address"},{"internalType":"uint256","name":"createFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"ChangeCreateFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newCustomMintableTemplate","type":"address"}],"name":"ChangeCustomMintableTemplate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newCustomTemplate","type":"address"}],"name":"ChangeCustomTemplate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newStdTemplate","type":"address"}],"name":"ChangeStdTemplate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"erc20","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"erc20Type","type":"uint256"}],"name":"NewERC20","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferPrepared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_CLONE_FACTORY_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_CREATE_FEE_","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_CUSTOM_ERC20_TEMPLATE_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_CUSTOM_MINTABLE_ERC20_TEMPLATE_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_ERC20_TEMPLATE_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_NEW_OWNER_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_OWNER_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_USER_CUSTOM_MINTABLE_REGISTRY_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_USER_CUSTOM_REGISTRY_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_USER_STD_REGISTRY_","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"initOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"createStdERC20","outputs":[{"internalType":"address","name":"newERC20","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"tradeBurnRatio","type":"uint256"},{"internalType":"uint256","name":"tradeFeeRatio","type":"uint256"},{"internalType":"address","name":"teamAccount","type":"address"}],"name":"createCustomERC20","outputs":[{"internalType":"address","name":"newCustomERC20","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"initSupply","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"tradeBurnRatio","type":"uint256"},{"internalType":"uint256","name":"tradeFeeRatio","type":"uint256"},{"internalType":"address","name":"teamAccount","type":"address"}],"name":"createCustomMintableERC20","outputs":[{"internalType":"address","name":"newCustomMintableERC20","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTokenByUser","outputs":[{"internalType":"address[]","name":"stds","type":"address[]"},{"internalType":"address[]","name":"customs","type":"address[]"},{"internalType":"address[]","name":"mintables","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"changeCreateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newStdTemplate","type":"address"}],"name":"updateStdTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newCustomTemplate","type":"address"}],"name":"updateCustomTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newCustomMintableTemplate","type":"address"}],"name":"updateCustomMintableTemplate","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),p=n(37918),d=n.n(p);var o="0xE8bb27C8F5379e2Fb0e925039173F8616f7a6579",m=l;function y(e,t,n,a){return c.apply(this,arguments)}function c(){return c=(0,a.Z)((function(e,t,n,a){var s,u,l,p;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return window.ethereum?[4,(s=new(d())(window.ethereum)).eth.getAccounts()]:[3,4];case 1:return u=i.sent(),console.log(u),l=u[0],[4,(p=new s.eth.Contract(m,o)).methods.createStdERC20(e,t,n,a).estimateGas({from:l},(function(e,t){e?alert(e.message):t}))];case 2:return i.sent(),[4,p.methods.createStdERC20(e,t,n,a).send({from:l,gasPrice:2e10},(function(e,t){e?alert(e.message):alert("\u6210\u529f\uff01")})).then((function(e){if(console.log(e),e){var t=e.transactionHash,n=document.getElementById("tx");console.log(e),null!=n&&(0,r.Z)(n,HTMLAnchorElement)&&(n.href="https://sepolia.etherscan.io/tx/"+t,n.textContent="\u4ea4\u6613\u5730\u5740\uff1a"+t)}})).catch((function(e){console.log(e),location.reload()}))];case 3:return i.sent(),[3,5];case 4:console.log("\u8bf7\u5b89\u88c5MetaMask!"),alert("\u8bf7\u5b89\u88c5MetaMask!"),i.label=5;case 5:return[2]}}))})),c.apply(this,arguments)}function h(e,t,n,a,r,i,s){return b.apply(this,arguments)}function b(){return b=(0,a.Z)((function(e,t,n,a,s,u,l){var p,y,c,h;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return window.ethereum?[4,(p=new(d())(window.ethereum)).eth.getAccounts()]:[3,4];case 1:return y=i.sent(),console.log(y),c=y[0],[4,(h=new p.eth.Contract(m,o)).methods.createCustomERC20(e,t,n,a,s,u,l).estimateGas({from:c},(function(e,t){e?alert(e.message):t}))];case 2:return i.sent(),[4,h.methods.createCustomERC20(e,t,n,a,s,u,l).send({from:c,gasPrice:2e10},(function(e,t){e?alert(e.message):alert("\u6210\u529f\uff01")})).then((function(e){if(console.log(e),e){var t=e.transactionHash,n=document.getElementById("tx");console.log(e),null!=n&&(0,r.Z)(n,HTMLAnchorElement)&&(n.href="https://sepolia.etherscan.io/tx/"+t,n.textContent="\u4ea4\u6613\u5730\u5740\uff1a"+t)}})).catch((function(e){console.log(e),location.reload()}))];case 3:return i.sent(),[3,5];case 4:console.log("\u8bf7\u5b89\u88c5MetaMask!"),alert("\u8bf7\u5b89\u88c5MetaMask!"),i.label=5;case 5:return[2]}}))})),b.apply(this,arguments)}function f(e,t,n,a,r,i,s){return T.apply(this,arguments)}function T(){return T=(0,a.Z)((function(e,t,n,a,s,u,l){var p,y,c,h;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return window.ethereum?[4,(p=new(d())(window.ethereum)).eth.getAccounts()]:[3,4];case 1:return y=i.sent(),console.log(y),c=y[0],[4,(h=new p.eth.Contract(m,o)).methods.createCustomMintableERC20(e,t,n,a,s,u,l).estimateGas({from:c},(function(e,t){e?alert(e.message):t}))];case 2:return i.sent(),[4,h.methods.createCustomMintableERC20(e,t,n,a,s,u,l).send({from:c,gasPrice:2e10},(function(e,t){e?alert(e.message):alert("\u6210\u529f\uff01")})).then((function(e){if(console.log(e),e){var t=e.transactionHash,n=document.getElementById("tx");console.log(e),null!=n&&(0,r.Z)(n,HTMLAnchorElement)&&(n.href="https://sepolia.etherscan.io/tx/"+t,n.textContent="\u4ea4\u6613\u5730\u5740\uff1a"+t)}})).catch((function(e){console.log(e),location.reload()}))];case 3:return i.sent(),[3,5];case 4:console.log("\u8bf7\u5b89\u88c5MetaMask!"),alert("\u8bf7\u5b89\u88c5MetaMask!"),i.label=5;case 5:return[2]}}))})),T.apply(this,arguments)}var M=function(e){var t=e.height;return(0,s.jsx)("div",{style:{height:t}})};function g(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(M,{height:20}),(0,s.jsxs)("div",{style:{margin:"auto",width:"50%"},children:[(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:"https://sepolia.etherscan.io/address/0xe8bb27c8f5379e2fb0e925039173f8616f7a6579",children:"\u5408\u7ea6\uff1a0xE8bb27C8F5379e2Fb0e925039173F8616f7a6579"})}),(0,s.jsx)(M,{height:20}),(0,s.jsxs)(u.a0,{defaultActiveKey:1,onChange:function(){},tabStyle:"bulbUnion",children:[(0,s.jsx)(u.a1,{tabKey:1,tabName:"StandardERC20",children:(0,s.jsx)("div",{children:(0,s.jsx)(u.F,{id:"StandardERC20Form",buttonConfig:{onClick:function(){var e=(0,a.Z)((function(e){return(0,i.__generator)(this,(function(t){return console.log(e),[2]}))}));return function(t){return e.apply(this,arguments)}}(),theme:"primary",text:"\u90e8\u7f72",id:"StandardERC20Button"},data:[{name:"totalSupply",type:"number",validation:{characterMaxLength:45,numberMax:1e45,numberMin:1,required:!0},value:"1"},{inputWidth:"100%",name:"name",type:"text",validation:{characterMaxLength:42,required:!0},value:""},{inputWidth:"100%",name:"symbol",type:"text",validation:{characterMaxLength:42,required:!0},value:""},{name:"decimals",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"}],onSubmit:function(){var e=(0,a.Z)((function(e){var t,n,a,r;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return t=Number(e.data[0].inputResult),n=e.data[1].inputResult,a=e.data[2].inputResult,r=Number(e.data[3].inputResult),[4,y(t,n,a,r)];case 1:return i.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),title:"StandardERC20"})})}),(0,s.jsx)(u.a1,{tabKey:2,tabName:"CustomERC20",children:(0,s.jsx)("div",{children:(0,s.jsx)(u.F,{id:"CustomERC20Form",buttonConfig:{onClick:function(){var e=(0,a.Z)((function(e){return(0,i.__generator)(this,(function(t){return console.log(e),[2]}))}));return function(t){return e.apply(this,arguments)}}(),theme:"primary",text:"\u90e8\u7f72",id:"DeployCustomERC20Button"},data:[{name:"totalSupply",type:"number",validation:{characterMaxLength:45,numberMax:1e45,numberMin:1,required:!0},value:"1"},{inputWidth:"100%",name:"name",type:"text",validation:{characterMaxLength:42,required:!0},value:""},{inputWidth:"100%",name:"symbol",type:"text",validation:{characterMaxLength:42,required:!0},value:""},{name:"decimals",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"},{name:"tradeBurnRatio",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"},{name:"tradeFeeRatio",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"},{inputWidth:"100%",name:"teamAccount",type:"text",validation:{characterMaxLength:42,required:!0},value:""}],onSubmit:function(){var e=(0,a.Z)((function(e){var t,n,a,r,s,u,l;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return t=Number(e.data[0].inputResult),n=e.data[1].inputResult,a=e.data[2].inputResult,r=Number(e.data[3].inputResult),s=Number(e.data[4].inputResult),u=Number(e.data[5].inputResult),l=e.data[6].inputResult,[4,h(t,n,a,r,s,u,l)];case 1:return i.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),title:"CustomERC20"})})}),(0,s.jsx)(u.a1,{tabKey:3,tabName:"CustomMintableERC20",children:(0,s.jsx)("div",{children:(0,s.jsx)(u.F,{id:"CustomMintableERC20Form",buttonConfig:{onClick:function(){var e=(0,a.Z)((function(e){return(0,i.__generator)(this,(function(t){return console.log(e),[2]}))}));return function(t){return e.apply(this,arguments)}}(),theme:"primary",text:"\u90e8\u7f72",id:"CustomMintableERC20"},data:[{name:"initSupply",type:"number",validation:{characterMaxLength:45,numberMax:1e45,numberMin:1,required:!0},value:"1"},{inputWidth:"100%",name:"name",type:"text",validation:{characterMaxLength:42,required:!0},value:""},{inputWidth:"100%",name:"symbol",type:"text",validation:{characterMaxLength:42,required:!0},value:""},{name:"decimals",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"},{name:"tradeBurnRatio",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"},{name:"tradeFeeRatio",type:"number",validation:{characterMaxLength:23,numberMax:100,numberMin:0,required:!0},value:"0"},{inputWidth:"100%",name:"teamAccount",type:"text",validation:{characterMaxLength:42,required:!0},value:""}],onSubmit:function(){var e=(0,a.Z)((function(e){var t,n,a,r,s,u,l;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return t=Number(e.data[0].inputResult),n=e.data[1].inputResult,a=e.data[2].inputResult,r=Number(e.data[3].inputResult),s=Number(e.data[4].inputResult),u=Number(e.data[5].inputResult),l=e.data[6].inputResult,[4,f(t,n,a,r,s,u,l)];case 1:return i.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),title:"CustomMintableERC20"})})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(u.a7,{onCopy:function(){},variant:"H1",children:"\u8c03\u7528\u7ed3\u679c\u5386\u53f2\uff1a"}),(0,s.jsx)("div",{id:"result"}),(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:"",id:"tx"})})]})]})]})}}}]);