"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[9929],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5184:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={description:"Setup chrony, start prometheus and fix up gLiveView."},l="Finishing Up",c={unversionedId:"stake-pool-guides/m1-native-macos-11-build/finishing-up",id:"stake-pool-guides/m1-native-macos-11-build/finishing-up",title:"Finishing Up",description:"Setup chrony, start prometheus and fix up gLiveView.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/stake-pool-guides/m1-native-macos-11-build/finishing-up.md",sourceDirName:"stake-pool-guides/m1-native-macos-11-build",slug:"/stake-pool-guides/m1-native-macos-11-build/finishing-up",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/m1-native-macos-11-build/finishing-up.md",tags:[],version:"current",frontMatter:{description:"Setup chrony, start prometheus and fix up gLiveView."},sidebar:"tutorialSidebar",previous:{title:"Node Build",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/m1-native-macos-11-build/node-build"},next:{title:"Basic Stake Pool Networking \ud83d\udcab",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/basic-stake-pool-networking"}},u={},p=[{value:"Chrony",id:"chrony",level:3},{value:"Prometheus/Node Exporter",id:"prometheusnode-exporter",level:3},{value:"gLiveView",id:"gliveview",level:3}],d={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"finishing-up"},"Finishing Up"),(0,i.kt)("h3",{id:"chrony"},"Chrony"),(0,i.kt)("p",null,"At the time of writing this the brew install of chrony does not create the necessary system service .plist file so we need to create one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'##############################################################\n# Create the .plist service definition\nsudo nano /opt/homebrew/opt/chrony/homebrew.mxcl.chrony.plist\n\n# Add the following to the file:\n\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n        <key>Label</key>\n        <string>homebrew.mxcl.chrony</string>\n        <key>ProgramArguments</key>\n        <array>\n                <string>/opt/homebrew/sbin/chronyd</string>\n        </array>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>StandardErrorPath</key>\n        <string>/var/log/chronyd.err.log</string>\n        <key>StandardOutPath</key>\n        <string>/var/log/chronyd.log</string>\n</dict>\n</plist>\n\n# Save and exit nano\n##############################################################\n\n# Create the run folder for Chrony\nsudo mkdir /var/run/chrony\n')),(0,i.kt)("p",null,"Now we need to create the /etc/chrony.conf file which the service will use. I just copied the one from my other block producer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"##############################################################\nsudo nano /etc/chrony.conf\n\n# Add the following to the file:\n\npool time.google.com        iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool time.euro.apple.com    iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool time.apple.com         iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool ntp.ubuntu.com         iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\n\n# This directive specify the location of the file containing ID/key pairs for\n# NTP authentication.\nkeyfile /etc/chrony.keys\n\n# This directive specify the file into which chronyd will store the rate\n# information.\ndriftfile /var/lib/chrony/chrony.drift\n\n# Uncomment the following line to turn logging on.\n#log tracking measurements statistics\n\n# Log files location.\nlogdir /var/log/chrony\n\n# Stop bad estimates upsetting machine clock.\nmaxupdateskew 5.0\n\n# This directive enables kernel synchronisation (every 11 minutes) of the\n# real-time clock. Note that it can\u2019t be used along with the 'rtcfile' directive.\nrtcsync\n\n# Step the system clock instead of slewing it if the adjustment is larger than\n# one second, but only in the first three clock updates.\nmakestep 0.1 -1\n\nleapsectz right/UTC\n\nlocal stratum 10\n\n# Save and exit nano\n##############################################################\n\n# Fire up chrony using Brew\nsudo brew services start chrony\n\n# Verify chrony started successfully - should see one line:\nps aux | grep \"[c]hronyd\"\n\n# If something is hosed, check the logs:\nless /var/log/system.log\nless /var/log/chronyd.err.log\nless /var/log/chronyd.log\n")),(0,i.kt)("h3",{id:"prometheusnode-exporter"},"Prometheus/Node Exporter"),(0,i.kt)("p",null,"For the mini M1 the thermal readings aren't available per node_exporter's default thermal collector. So we need to shut off that collector so logs don't fill up. Let's also add a textfile exporter directory so we can collect custom stats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"##############################################################\nnano /opt/homebrew/etc/node_exporter.args\n\n# Add these two lines:\n--collector.textfile.directory=/opt/homebrew/opt/node_exporter/stats\n--no-collector.thermal\n\n# Save and exit nano\n##############################################################\n\n# Create the textfile collector directory\nmkdir /opt/homebrew/opt/node_exporter/stats\n")),(0,i.kt)("p",null,"Register the services with launchctl and start 'em up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Start prometheus\nsudo brew services start prometheus\n\n# Start the node-exporter\nsudo brew services start node_exporter\n\n# Verify they are registered and started\nsudo brew services list\n\n# Should see this:\nName          Status  User File\nnode_exporter started root /Library/LaunchDaemons/homebrew.mxcl.node_exporter.plist\nprometheus    started root /Library/LaunchDaemons/homebrew.mxcl.prometheus.plist\n")),(0,i.kt)("p",null,"At this point if you have a Grafana instance on your network you should be able to add the M1 into the mix. I won't cover how to do that here."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"I am noticing that some of the M1 metrics are named slightly differently than the Ubuntu metrics and some are not available at all - like thermal zones. If you are using Grafana you'll need to play with the metrics to get them correct. :::")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("h3",{id:"gliveview"},"gLiveView"),(0,i.kt)("p",null,"The normal guild operators env and gLiveView.sh scripts will complain out of the box on the macOS. So, we need to tweak them a little bit."),(0,i.kt)("p",null,'Unfortunately this requires us to change stuff in the "Do NOT modify code below" section of gLiveView.sh. Which means if you don\'t specify the ',(0,i.kt)("strong",{parentName:"p"},"-u")," option it'll see the script has changed and ask you to download the new one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'##############################################################\nnano ~/pi-pool/scripts/gLiveView.sh\n\n# Change the shebang line to this so we use the new shell:\n#!/usr/bin/env bash\n\n# This is the only change that will cause gLiveView.sh to ask for script updates so you\'ll need to use the -u option. MacOS BSD doesn\'t have a workaround for ps.\n# Change this line:\nread -ra proc_data <<<"$(ps -q ${CNODE_PID} -o pcpu= -o rss=)"\n# to this:\nread -ra proc_data <<<"$(ps -p ${CNODE_PID} -o pcpu= -o rss=)"\n\n# Save and exit nano\n##############################################################\n\n##############################################################\nnano ~/pi-pool/scripts/env\n\n# Change the shebang line to this so we use the new shell:\n#!/usr/bin/env bash\n\n# Add the following 5 lines right above the # Do NOT modify code below # line:\n# special mapping of coreutils for MacOS\nif [[ $(uname) == Darwin ]]; then\n   sed () { gsed "$@"; }\n   head () { ghead "$@"; }\nfi\n\n# Save and exit nano\n##############################################################\n')),(0,i.kt)("p",null,"You should now be able to run gLiveView.sh with the -u option and it should work:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"~/pi-pool/scripts/gLiveView.sh -u")))}h.isMDXComponent=!0}}]);