"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[8997],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2908:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=["components"],s={description:"How to use the stakepoolscripts to start a pool, rotate KES, update pool data, claim rewards and send transactions."},i="Introduction",p={unversionedId:"stake-pool-guides/pi-pool-tutorial/stakepoolscripts",id:"stake-pool-guides/pi-pool-tutorial/stakepoolscripts",title:"Introduction",description:"How to use the stakepoolscripts to start a pool, rotate KES, update pool data, claim rewards and send transactions.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/stakepoolscripts.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/stakepoolscripts",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/stakepoolscripts",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/stakepoolscripts.md",tags:[],version:"current",frontMatter:{description:"How to use the stakepoolscripts to start a pool, rotate KES, update pool data, claim rewards and send transactions."},sidebar:"tutorialSidebar",previous:{title:"Update Pools Registration Certificate",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/update-registration-cert"},next:{title:"Cardano Node Docker Image (for ARM64 devices)",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/docker-pool-guide"}},d={},c=[{value:"Confirm successful registration",id:"confirm-successful-registration",level:3},{value:"pool.vet",id:"poolvet",level:3},{value:"adapools.org",id:"adapoolsorg",level:3},{value:"pooltool.io",id:"pooltoolio",level:3}],m={toc:c};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Now that everything is set up let's start creating the pool. Please read the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gitmachtl/scripts"},"official documentation")," Martin of ",(0,l.kt)("a",{parentName:"p",href:"https://stakepool.at/"},"ATADA")," pool provides to get a better understanding of the scripts. His tutorial is much more detailed and covers a lot of options. Thank you Martin!"),(0,l.kt)("p",null,'{% embed url="',(0,l.kt)("a",{parentName:"p",href:"https://github.com/gitmachtl/scripts%22"},'https://github.com/gitmachtl/scripts"')," %}"),(0,l.kt)("p",null,"This tutorial on the other hand is for the basics. It contains everything necessary to get a stake pool running and some other fundamental operations. It should help to get a nice and easy workflow."),(0,l.kt)("p",null,"The transfer with the USB device is fully automated. It just needs to be mounted at the current working environment, which should also work automated. If not, mount it with ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo mount ~/usb_transfer"),".                                                                          Make sure to unmount everytime before removing ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo umount ~/usb_transfer"),"."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This guide assumes, that you are always in ",(0,l.kt)("inlineCode",{parentName:"h5"},"$HOME/pool_keys")," when running a script on the offline machine and in ",(0,l.kt)("inlineCode",{parentName:"h5"},"$HOME/pi-pool")," on the core. :::")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("h1",{parentName:"div",id:"prerequisits-on-the-cold-machine"},"Prerequisits on the cold machine"),(0,l.kt)("p",{parentName:"div"},"Let's begin with a directory for your keys."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd\nmkdir pool_keys\ncd pool_keys\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl\ntimedatectl set-time xxxxx\n")),(0,l.kt)("h1",{id:"create-a-stake-pool"},"Create a stake pool"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Basically everything is created offline. Make sure that you never expose your secret keys to an online environment and back them up, multiple times best case. The only keys you need on your core are: kes-xxx.skey, vrf.skey and node-xxx.opcert. :::")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("h2",{parentName:"div",id:"workflow"},"Workflow"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("img",{src:a(3074).Z,width:"794",height:"1123"})),(0,l.kt)("h2",{parentName:"div",id:"create-and-fund-a-wallet"},"Create and fund a wallet"),(0,l.kt)("p",{parentName:"div"},"First of all you'll need a wallet and with it a staking key. Create the keys and name the wallet accordingly."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"03a_genStakingPaymentAddr.sh wallet_name cli\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"Now copy the addresses to your core to fund the new wallet. You'll need your fresh USB drive for that."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh attach wallet_name.payment.addr\n01_workOffline.sh attach wallet_name.staking.addr\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"Switch the USB drive from offline to online machine. Extract the address files."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh extract\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"Retrieve the address and send some funds to your new wallet. You'll need at least 502 ADA + tx fees + your pledge."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat wallet_name.payment.addr\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"Query the balance and wait until the new UTXO shows up."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_queryAddress.sh wallet_name.payment\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"When the funds arrived copy the UTXO data to your offline machine."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh add wallet_name.payment\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"Generate a transaction to register the staking address. It will be submitted later on."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"03b_regStakingAddrCert.sh wallet_name.staking \n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("h2",{parentName:"div",id:"create-the-pools-keys-and-certificates"},"Create the pool's keys and certificates"),(0,l.kt)("p",{parentName:"div"},"Generate the keys for your core node."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"04a_genNodeKeys.sh pool_name cli\n04b_genVRFKeys.sh pool_name\n04c_genKESKeys.sh pool_name\n04d_genNodeOpCert.sh pool_name\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"Generate your stakepool certificate and metadata.json."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"05a_genStakepoolCert.sh pool_name\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",{parentName:"div"},"This creates a ",(0,l.kt)("inlineCode",{parentName:"p"},"pool_name.pool.json")," file, which you can edit according to your needs and wishes. Everything is calculated in lovelaces. (Reminder: 1 ADA = 1,000,000 lovelace) So in this case we get a pool with 100k ADA pledge, 340 ADA fixed cost (minimum) and 1% margin."),(0,l.kt)("p",{parentName:"div"},"Add as many of your relays as you want. Either ip or dns based."),(0,l.kt)("p",{parentName:"div"},"Pool description can contain up to 255 characters."),(0,l.kt)("p",{parentName:"div"},"poolMetaUrl points to the Metadata file, which you need to upload later. Github is a popular choice, if you don't want to use your own server."))),(0,l.kt)("p",null,"You may also add an URL to an ",(0,l.kt)("inlineCode",{parentName:"p"},"extended.metadata.json"),", which holds more information like the URL to your logo etc. Just create the file on your local machine, it's quite self-explanatory. The png icon is limited to 64x64 while the logo could use 400x400 pixels. jpg works aswell."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="pool_name.pool.json" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n   "poolName": "pool_name",  \n   "poolOwner": [\n      {\n      "ownerName": "wallet_name",\n      "ownerWitness": "local"\n      }\n   ],\n   "poolRewards": "wallet_name",\n   "poolPledge": "100000000000",    \n   "poolCost": "340000000",\n   "poolMargin": "0.01"\n   "poolRelays": [\n      {\n      "relayType": "dns",\n      "relayEntry": "relay.mypool.com",\n      "relayPort": "3001"\n      }\n      {\n      "relayType": "ip",\n      "relayEntry": "x.x.x.x (ipv4 of relay)",\n      "relayPort": "3002"\n      }\n   ],\n   "poolMetaName": "This is my Pool",\n   "poolMetaDescription": "This is the description of my Pool!",\n   "poolMetaTicker": "POOL",\n   "poolMetaHomepage": "https://mypool.com",\n   "poolMetaUrl": "https://mypool.com/pool_name.metadata.json",\n   "poolExtendedMetaUrl": "",\n   "---": "--- DO NOT EDIT BELOW THIS LINE ---"\n}\n')),(0,l.kt)("p",null,'{% endtab %}\n{% tab title="extended.metadata.json" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "info": {\n        "url_png_icon_64x64": "",\n        "url_png_logo": "",\n        "location": "",\n        "social": {\n            "twitter_handle": "",\n            "telegram_handle": "",\n            "facebook_handle": "",\n            "youtube_handle": "",\n            "twitch_handle": "",\n            "discord_handle": "",\n            "github_handle": ""\n        },\n        "company": {\n            "name": "",\n            "city": "",\n            "country": ""\n                    },\n        "about": {\n            "me": "",\n            "server": "",\n        "company": ""\n        },\n    "my-pool-ids": {\n        "0": ""\n    },\n    "when-satured-then-recommend": {\n        "0": ""\n    }\n    }\n\n}\n')),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Now run ",(0,l.kt)("inlineCode",{parentName:"p"},"05a_genStakepoolCert.sh pool_name")," again. This will generate the pool_name.pool.cert file and the actual pool_name.metadata.json. Later you can upload the metadata.json to the URL you specified in the previous step. Do not edit it anymore or the hash won't fit! If you want to change something, change it in the pool_name.pool.json and run ",(0,l.kt)("inlineCode",{parentName:"p"},"05a_genStakepoolCert.sh pool_name")," again."),(0,l.kt)("p",null,"Delegate to your own pool as owner. (Pledge)"),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"05b_genDelegationCert.sh pool_name wallet_name\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Generate the stakepool registration transaction. The script also attaches the new pool_name.metadata.json to the offlinetransfer file."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"05c_regStakepoolCert.sh pool_name wallet_name.payment\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Now attach the files needed by the core."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh attach pool_name.vrf.skey\n01_workOffline.sh attach pool_name.kes-xxx.skey\n01_workOffline.sh attach pool_name.node-xxx.opcert\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"You are done with the offline part. Unmount and bring your USB drive to the core again."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh extract\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"For convenience rename the core files so you don't have to change the startup script every KES rotation."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv pool_name.kes-xxx.skey kes.skey\nmv pool_name.vrf.skey vrf.skey\nmv pool_name.node-xxx.opcert node.cert\n")),(0,l.kt)("p",null,"{% endtab %}"),(0,l.kt)("p",null,"Now change the startup script and add the three files."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano $HOME/.local/bin/cardano-service\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#!/bin/bash\n. /home/ada/.adaenv\n\nTOPOLOGY=${NODE_FILES}/${NODE_CONFIG}-topology.json\nDB_PATH=${NODE_HOME}/db\nCONFIG=${NODE_FILES}/${NODE_CONFIG}-config.json\nKES=${NODE_HOME}/kes.skey\nVRF=${NODE_HOME}/vrf.skey\nCERT=${NODE_HOME}/node.cert\ncardano-node +RTS -N4 --disable-delayed-os-memory-return -RTS run \\\n  --topology ${TOPOLOGY} \\\n  --database-path ${DB_PATH} \\\n  --socket-path ${CARDANO_NODE_SOCKET_PATH} \\\n  --port ${NODE_PORT} \\\n  --config ${CONFIG} \\\n  --shelley-kes-key ${KES} \\\n  --shelley-vrf-key ${VRF} \\\n  --shelley-operational-certificate ${CERT}\n")),(0,l.kt)("p",null,"Restart the service."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-service restart\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"While your core is starting you can transfer the ",(0,l.kt)("inlineCode",{parentName:"p"},"pool_name.metadata.json")," to your local machine and upload it to the prepared URL. Do the same with the extended metadata and your logos, if you have made them."),(0,l.kt)("p",null,"Check the status of the core. When it's up again you can submit the transactions. First the staking key registration, then repeat the same command for the stake pool registration."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh execute\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("h3",{id:"confirm-successful-registration"},"Confirm successful registration"),(0,l.kt)("h3",{id:"poolvet"},"pool.vet"),(0,l.kt)("p",null,"pool.vet is a website for pool operators to check the validity of their stake pools on chain data. You can check this site for problems and clues as to how to fix them."),(0,l.kt)("p",null,'{% embed url="',(0,l.kt)("a",{parentName:"p",href:"https://pool.vet/%22"},'https://pool.vet/"')," %}"),(0,l.kt)("h3",{id:"adapoolsorg"},"adapools.org"),(0,l.kt)("p",null,"You should create an account and claim your pool here."),(0,l.kt)("p",null,'{% embed url="',(0,l.kt)("a",{parentName:"p",href:"https://adapools.org/%22"},'https://adapools.org/"')," %}"),(0,l.kt)("h3",{id:"pooltoolio"},"pooltool.io"),(0,l.kt)("p",null,"You should create an account and claim your pool here."),(0,l.kt)("p",null,'{% embed url="',(0,l.kt)("a",{parentName:"p",href:"https://pooltool.io/%22"},'https://pooltool.io/"')," %}"),(0,l.kt)("h1",{id:"rotate-kes-keys"},"Rotate KES keys"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Make sure to rotate your KES keys and node certificate before! they expire. :::")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("p",null,"Create the new KES keypair. You will notice that the counter increments automatically."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"04c_genKESKeys.sh pool_name\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Create a new operational certificate."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"04d_genNodeOpCert.sh pool_name\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Now attach the new files."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh attach pool_name.vrf.skey\n01_workOffline.sh attach pool_name.kes-xxx.skey\n01_workOffline.sh attach pool_name.node-xxx.opcert\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Unmount and bring the USB drive to the core. Stop the node and extract the files."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cardano-service stop\n01_workOffline.sh extract\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Now rename/move them to match the startup script. Then start again. That's it."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mv pool_name.kes-xxx.skey kes.skey\nmv pool_name.vrf.skey vrf.skey\nmv pool_name.node-xxx.opcert node.cert\ncardano-service start \n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("h1",{id:"update-pool-registration"},"Update pool registration"),(0,l.kt)("p",null,"First get up-to-date information from the core via your USB drive."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh add wallet_name.payment\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Switch to the offline machine and edit the values you want to change in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pool_name.pool.json"),"."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 pool_name.pool.json\nnano pool_name.pool.json\nchmod 400 pool_name.pool.json\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Create a new certificate ",(0,l.kt)("inlineCode",{parentName:"p"},"pool_name.pool.cert")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pool_name.metadata.json"),"."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"05a_genStakepoolCert.sh pool_name\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Create the registration transaction. If the metadata didn't change you don't need to attach it to the transfer file."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"05c_regStakepoolCert.sh pool_name wallet_name.payment\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Now switch to the core. First, if you changed the metadata, ",(0,l.kt)("inlineCode",{parentName:"p"},"01_workOffline.sh extract")," and upload it. Otherwise skip this step and submit the transaction directly."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh execute\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("h1",{id:"claim-rewards"},"Claim rewards"),(0,l.kt)("p",null,"First get up-to-date information from the core via your USB drive."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh add wallet_name.payment\n01_workOffline.sh add wallet_name.staking\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Switch over to the offline machine."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_claimRewards.sh wallet_name.staking wallet_name.payment\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Back to the core."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh execute\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("h1",{id:"send-a-simple-transaction"},"Send a simple transaction"),(0,l.kt)("p",null,"First get up-to-date information from the core via your USB drive. Create a ",(0,l.kt)("inlineCode",{parentName:"p"},"other_wallet.payment.addr")," which contains the address (and only the address) you want to send your ADA to."),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh add wallet_name.payment\n01_workOffline.sh attach other_wallet.payment.addr\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("p",null,"Bring everything over to the cold machine and create the transaction. This will send 1000 ADA from your pledge wallet to the other wallet. (Again everything in lovelaces. 1 ADA = 1000000 lovelace)"),(0,l.kt)("p",null,'{% tabs %}\n{% tab title="offline" %}'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh extract\n01_sendLovelaces.sh wallet_name.payment other_wallet.payment 1000000000\n")),(0,l.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Make sure to meet your pledge at any time. And some ADA for transactions fees on top aren't bad. :::")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"USB transfer and submitting at your core."),(0,l.kt)("p",{parentName:"div"},'{% tabs %}\n{% tab title="core" %}'),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh execute\n")),(0,l.kt)("p",{parentName:"div"},"{% endtab %}\n{% endtabs %}"))))}u.isMDXComponent=!0},3074:function(e,t,a){t.Z=a.p+"assets/images/offline_workflow-6e8e18cb928553a0ac5d27ebb4e20691.jpg"}}]);