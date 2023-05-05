(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8021,1403],{35796:function(t,n,e){"use strict";e.d(n,{d:function(){return o}});var i=e(45624);class o extends i.J5{async authenticateUser(){var t;if(!this.provider||null===(t=this.chainConfig)||void 0===t||!t.chainId)throw i.RM.notConnectedError();const{chainNamespace:n,chainId:e}=this.chainConfig;if(this.status!==i.MP.CONNECTED)throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first");const o=await this.provider.request({method:"eth_accounts"});if(o&&o.length>0){const t=(0,i.Cb)(o[0],this.name);if(t){if(!(0,i.$E)(t))return{idToken:t}}const r={domain:window.location.origin,uri:window.location.href,address:o[0],chainId:parseInt(e,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},s=await(0,i.tV)(r,n),a=await this.provider.request({method:"personal_sign",params:[s,o[0]]}),c=await(0,i.rn)(n,a,s,this.name,this.sessionTime);return(0,i.Fr)(o[0],this.name,c),{idToken:c}}throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnect(){if(this.status!==i.MP.CONNECTED)throw i.RM.disconnectionError("Not connected with wallet");const t=await this.provider.request({method:"eth_accounts"});t&&t.length>0&&(0,i.qz)(t[0],this.name)}}},43840:function(t,n,e){"use strict";e.r(n),e.d(n,{WalletConnectV1Adapter:function(){return w}});var i=e(4942),o=e(75426),r=e(83039);class s extends o.Z{constructor(t,n){super({cryptoLib:r,connectorOpts:t,pushServerOpts:n})}}var a=s,c=e(45624),h=e(35796),d=e(52062);const l=[{name:"Rainbow",chains:[c.EN.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[c.EN.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}class w extends h.d{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,i.Z)(this,"name",c.rW.WALLET_CONNECT_V1),(0,i.Z)(this,"adapterNamespace",c.yk.EIP155),(0,i.Z)(this,"currentChainNamespace",c.EN.EIP155),(0,i.Z)(this,"type",c.hN.EXTERNAL),(0,i.Z)(this,"adapterOptions",void 0),(0,i.Z)(this,"status",c.MP.NOT_READY),(0,i.Z)(this,"adapterData",{uri:"",extensionAdapters:l}),(0,i.Z)(this,"connector",null),(0,i.Z)(this,"wcProvider",null),(0,i.Z)(this,"rehydrated",!1),this.adapterOptions=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},t),this.chainConfig=t.chainConfig||null,this.sessionTime=t.sessionTime||86400}get connected(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}get provider(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null}set provider(t){throw new Error("Not implemented")}async init(){super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=(0,c.h2)(c.EN.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new d.WalletConnectProvider({config:{chainConfig:this.chainConfig},connector:this.connector}),this.emit(c.n2.READY,c.rW.WALLET_CONNECT_V1),this.status=c.MP.READY,c.cM.debug("initializing wallet connect v1 adapter"),this.connector.connected&&(this.rehydrated=!0,await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId}))}async connect(){if(super.checkConnectionRequirements(),!this.connector)throw c.Ty.notReady("Wallet adapter is not ready yet");if(this.connected)return await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId}),this.provider;if(this.status!==c.MP.CONNECTING){var t,n;if(null!==(t=this.adapterOptions.adapterSettings)&&void 0!==t&&t.qrcodeModal)this.connector=this.getWalletConnectInstance(),this.wcProvider=new d.WalletConnectProvider({config:{chainConfig:this.chainConfig,skipLookupNetwork:null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.skipNetworkSwitching},connector:this.connector});await this.createNewSession(),this.status=c.MP.CONNECTING,this.emit(c.n2.CONNECTING,{adapter:c.rW.WALLET_CONNECT_V1})}return new Promise(((t,n)=>{if(!this.connector)return n(c.Ty.notReady("Wallet adapter is not ready yet"));this.connector.on("modal_closed",(async()=>(this.status=c.MP.READY,this.emit(c.n2.READY,c.rW.WALLET_CONNECT_V1),n(new Error("User closed modal")))));try{this.connector.on("connect",(async(n,e)=>(n&&this.emit(c.n2.ERRORED,n),c.cM.debug("connected event emitted by web3auth"),await this.onConnectHandler(e.params[0]),t(this.provider))))}catch(e){c.cM.error("Wallet connect v1 adapter error while connecting",e),this.status=c.MP.READY,this.rehydrated=!0,this.emit(c.n2.ERRORED,e),n(e instanceof c.up?e:c.RM.connectionError("Failed to login with wallet connect: ".concat((null===e||void 0===e?void 0:e.message)||"")))}}))}setAdapterSettings(t){this.status!==c.MP.READY&&null!==t&&void 0!==t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}async getUserInfo(){if(!this.connected)throw c.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async disconnect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};const{cleanup:n}=t;if(!this.connector||!this.connected)throw c.RM.notConnectedError("Not connected with wallet");await super.disconnect(),await this.connector.killSession(),this.rehydrated=!1,n?(this.connector=null,this.status=c.MP.NOT_READY,this.wcProvider=null):this.status=c.MP.READY,this.emit(c.n2.DISCONNECTED)}async addChain(t){try{var n;if(!this.wcProvider)throw c.Ty.notReady("Wallet adapter is not ready yet");const e=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.networkSwitchModal;e&&await e.addNetwork({chainConfig:t,appOrigin:window.location.hostname}),await this.wcProvider.addChain(t)}catch(e){c.cM.error(e)}}async switchChain(t,n){var e;if(!this.wcProvider)throw c.Ty.notReady("Wallet adapter is not ready yet");const i=null===(e=this.adapterOptions.adapterSettings)||void 0===e?void 0:e.networkSwitchModal;i&&await i.switchNetwork({currentChainConfig:n,newChainConfig:t,appOrigin:window.location.hostname}),await this.wcProvider.switchChain({chainId:n.chainId,lookup:!1,addChain:!1})}async createNewSession(){var t,n;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceNewSession:!1};if(!this.connector)throw c.Ty.notReady("Wallet adapter is not ready yet");if(e.forceNewSession&&this.connector.pending&&await this.connector.killSession(),null===(t=this.adapterOptions)||void 0===t||null===(n=t.adapterSettings)||void 0===n||!n.qrcodeModal)return new Promise(((t,n)=>{var e;if(!this.connector)return n(c.Ty.notReady("Wallet adapter is not ready yet"));c.cM.debug("creating new session for web3auth wallet connect"),this.connector.on("display_uri",(async(e,i)=>{var o;if(e)return this.emit(c.n2.ERRORED,c.RM.connectionError("Failed to display wallet connect qr code")),n(e);const r=i.params[0];return this.updateAdapterData({uri:r,extensionAdapters:l}),null===(o=this.connector)||void 0===o||o.off("display_uri"),t()})),this.connector.createSession({chainId:parseInt((null===(e=this.chainConfig)||void 0===e?void 0:e.chainId)||"0x1",16)}).catch((t=>(c.cM.error("error while creating new wallet connect session",t),this.emit(c.n2.ERRORED,t),n(t))))}));var i;await this.connector.createSession({chainId:parseInt((null===(i=this.chainConfig)||void 0===i?void 0:i.chainId)||"0x1",16)})}async onConnectHandler(t){if(!this.connector||!this.wcProvider)throw c.Ty.notReady("Wallet adapter is not ready yet");if(!this.chainConfig)throw c.Ty.invalidParams("Chain config is not set");const{chainId:n}=t;if(c.cM.debug("connected chainId in hex"),n!==parseInt(this.chainConfig.chainId,16)){var e,i,o;const t=(0,c.h2)(c.EN.EIP155,n)||{chainId:"0x".concat(n.toString(16)),displayName:"Unknown Network"},s=null===(e=this.adapterOptions.adapterSettings)||void 0===e?void 0:e.qrcodeModal;if(!s||s&&(null===(i=this.adapterOptions)||void 0===i||null===(o=i.adapterSettings)||void 0===o||!o.skipNetworkSwitching))try{await this.addChain(this.chainConfig),await this.switchChain(t,this.chainConfig),this.connector=this.getWalletConnectInstance()}catch(r){return c.cM.error("error while chain switching",r),await this.createNewSession({forceNewSession:!0}),this.emit(c.n2.ERRORED,c.Ty.fromCode(5e3,"Not connected to correct network. Expected: ".concat(this.chainConfig.displayName,", Current: ").concat((null===t||void 0===t?void 0:t.displayName)||n,", Please switch to correct network from wallet"))),this.status=c.MP.READY,void(this.rehydrated=!0)}}await this.wcProvider.setupProvider(this.connector),this.subscribeEvents(this.connector),this.status=c.MP.CONNECTED,this.emit(c.n2.CONNECTED,{adapter:c.rW.WALLET_CONNECT_V1,reconnected:this.rehydrated})}subscribeEvents(t){t.on("session_update",(async t=>{t&&this.emit(c.n2.ERRORED,t)}))}getWalletConnectInstance(){const t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new a(t)}}},27790:function(){},88924:function(){},55024:function(){}}]);