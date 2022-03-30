"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[1334],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8937:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={description:"This is how you create an image you can flash to other Pi's"},l="Create .img file",c={unversionedId:"cardano-developer-guides/create-.img-file",id:"cardano-developer-guides/create-.img-file",title:"Create .img file",description:"This is how you create an image you can flash to other Pi's",source:"@site/docs/cardano-developer-guides/create-.img-file.md",sourceDirName:"cardano-developer-guides",slug:"/cardano-developer-guides/create-.img-file",permalink:"/armada-alliance-docusaurus/docs/cardano-developer-guides/create-.img-file",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/cardano-developer-guides/create-.img-file.md",tags:[],version:"current",frontMatter:{description:"This is how you create an image you can flash to other Pi's"},sidebar:"tutorialSidebar",previous:{title:"Cardano Submit Transaction API Tutorial \ud83d\udce6",permalink:"/armada-alliance-docusaurus/docs/cardano-developer-guides/cardano-submit-tx-api-tutorial"},next:{title:"Staking Guide \ud83d\ude80",permalink:"/armada-alliance-docusaurus/docs/cardano-developer-guides/how-to-delegate-ada"}},u={},d=[{value:"Make the Pi-Node base .img.gz file for reuse",id:"make-the-pi-node-base-imggz-file-for-reuse",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-img-file"},"Create .img file"),(0,i.kt)("h2",{id:"make-the-pi-node-base-imggz-file-for-reuse"},"Make the Pi-Node base .img.gz file for reuse"),(0,i.kt)("p",null,"Put your micro sd card in your local machine and locate what it's called in /dev. For my laptop it is /dev/mmcblk0. Yours will likely be different."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sudo fdisk -l\n")),(0,i.kt)("p",null,"After locating move into the directory you wish to save the image to and create the image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# example\n# sudo cat /dev/mmcblk0 > pi-node.img\nsudo cat /dev/<your sd card> > pi-node.img\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"cat is better than dd for this. cat will use all of your systems cpu cores, whereas dd uses one core. cat is faster \ud83d\ude40"))),(0,i.kt)("p",null,"Once that completes we will use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Drewsif/PiShrink"},"PiShrink.sh")," to deflate partitions and compress ","(","among a few other tricks",")","."),(0,i.kt)("p",null,'{% code title="install pishrinks.sh" %}'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh\nchmod +x pishrink.sh\nsudo mv pishrink.sh /usr/local/bin\n")),(0,i.kt)("p",null,"{% endcode %}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pishrink.sh -aZ pi-node.img Pi-Node.img.gz\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"pishrink.sh: Shrunk Pi-Node.img.gz from 7.5G to 1.3G ...")),(0,i.kt)("p",null,"And there you have it! \ud83e\uddd9\u2642"),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},"Pi-Node.img.gz")))}m.isMDXComponent=!0}}]);