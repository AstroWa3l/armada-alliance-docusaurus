"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7722],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2536:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={description:"optimize hardware, harden Ubuntu"},p="Server Setup",l={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup",id:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup",title:"Server Setup",description:"optimize hardware, harden Ubuntu",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial/pi-node-full-guide",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/server-setup.md",tags:[],version:"current",frontMatter:{description:"optimize hardware, harden Ubuntu"},sidebar:"tutorialSidebar",previous:{title:"User Setup",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/user-setup"},next:{title:"Environment Setup",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/environment-setup"}},d={},c=[{value:"Configure Hardware",id:"configure-hardware",level:2},{value:"Chrony",id:"chrony",level:3},{value:"Zram swap",id:"zram-swap",level:3},{value:"Raspberry Pi &amp; entropy",id:"raspberry-pi--entropy",level:3}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"server-setup"},"Server Setup"),(0,o.kt)("h2",{id:"configure-hardware"},"Configure Hardware"),(0,o.kt)("p",null,"Let's save some power, raise the governor on the CPU a bit, and set GPU ram as low as we can."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Here are some links for overclocking and testing your drive speeds. If you have heat sinks you can safely go to 2000. Just pay attention to over volt recommendations to go with your chosen clock speed.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/documentation/configuration/config-txt/overclocking.md"},"https://www.raspberrypi.org/documentation/configuration/config-txt/overclocking.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/blog/2020/02/12/how-to-safely-overclock-your-raspberry-pi-4-to-2-147ghz/"},"https://www.seeedstudio.com/blog/2020/02/12/how-to-safely-overclock-your-raspberry-pi-4-to-2-147ghz/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.tomshardware.com/how-to/raspberry-pi-4-23-ghz-overclock"},"https://www.tomshardware.com/how-to/raspberry-pi-4-23-ghz-overclock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dopedesi.com/2020/11/24/upgrade-your-raspberry-pi-4-with-a-nvme-boot-drive-by-alex-ellis-nov-2020/"},"https://dopedesi.com/2020/11/24/upgrade-your-raspberry-pi-4-with-a-nvme-boot-drive-by-alex-ellis-nov-2020/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jamesachambers.com/new-raspberry-pi-4-bootloader-usb-network-boot-guide/"},"Legendary Technology: New Raspberry Pi 4 Bootloader USB"))),(0,o.kt)("p",{parentName:"div"},"Take note that Ubuntu stores config.txt in a different location than Raspbian. :::"),(0,o.kt)("h3",{parentName:"div",id:"overclock-memory--radios"},"Overclock, memory & radios"),(0,o.kt)("p",{parentName:"div"},"Edit /boot/firmware/config.txt. Just paste Pi Node additions in at the bottom."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /boot/firmware/config.txt\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"## Pi Node ##\nover_voltage=6\narm_freq=2000\ngpu_mem=16\ndtoverlay=disable-wifi\ndtoverlay=disable-bt\n")),(0,o.kt)("p",{parentName:"div"},"Save and reboot."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,o.kt)("h2",{parentName:"div",id:"configure-ubuntu"},"Configure Ubuntu"),(0,o.kt)("h3",{parentName:"div",id:"disable-the-root-user"},"Disable the root user"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo passwd -l root\n")),(0,o.kt)("h3",{parentName:"div",id:"secure-shared-memory"},"Secure shared memory"),(0,o.kt)("p",{parentName:"div"},"Mount shared memory as read only. Open /etc/fstab."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/fstab\n")),(0,o.kt)("p",{parentName:"div"},"Add this line at the bottom, save & exit."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"tmpfs    /run/shm    tmpfs    ro,noexec,nosuid    0 0\n")),(0,o.kt)("h3",{parentName:"div",id:"increase-open-file-limit-for-user"},"Increase open file limit for $USER"),(0,o.kt)("p",{parentName:"div"},"Add a couple lines to the bottom of /etc/security/limits.conf"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo bash -c \"echo -e '${USER} soft nofile 800000\\n${USER} hard nofile 1048576\\n' >> /etc/security/limits.conf\"\n")),(0,o.kt)("p",{parentName:"div"},"Confirm it was added to the bottom."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/security/limits.conf\n")),(0,o.kt)("h3",{parentName:"div",id:"optimize-performance--security"},"Optimize performance & security"))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"If you would like to disable ipv6 or turn on forwarding you can below. :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Add the following to the bottom of /etc/sysctl.conf. Save and exit."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/sysctl.conf\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"## Pi Node ##\n\n# swap more to zram\nvm.vfs_cache_pressure=500\nvm.swappiness=100\nvm.dirty_background_ratio=1\nvm.dirty_ratio=50\n\nfs.file-max = 10000000\nfs.nr_open = 10000000\n\n# enable forwarding if using wireguard\nnet.ipv4.ip_forward=0\n\n# ignore ICMP redirects\nnet.ipv4.conf.all.send_redirects = 0\nnet.ipv4.conf.default.send_redirects = 0\nnet.ipv4.conf.all.accept_redirects = 0\nnet.ipv4.conf.default.accept_redirects = 0\n\nnet.ipv4.icmp_ignore_bogus_error_responses = 1\n\n# disable IPv6\n#net.ipv6.conf.all.disable_ipv6 = 1\n#net.ipv6.conf.default.disable_ipv6 = 1\n\n# block SYN attacks\nnet.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_max_syn_backlog = 2048\nnet.ipv4.tcp_synack_retries = 3\nnet.ipv4.netfilter.ip_conntrack_tcp_timeout_syn_recv=45\n\n# in progress tasks\nnet.ipv4.tcp_keepalive_time = 240\nnet.ipv4.tcp_keepalive_intvl = 4\nnet.ipv4.tcp_keepalive_probes = 5\n\n# reboot if we run out of memory\nvm.panic_on_oom = 1\nkernel.panic = 10\n\n# Use Google's congestion control algorithm\nnet.core.default_qdisc = fq\nnet.ipv4.tcp_congestion_control = bbr\n")),(0,o.kt)("h4",{parentName:"div",id:"load-our-changes-after-boot"},"Load our changes after boot"),(0,o.kt)("p",{parentName:"div"},"Create a new file. Paste, save & close."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/rc.local\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"#!/bin/bash\n\n# Give CPU startup routines time to settle.\nsleep 120\n\nsysctl -p /etc/sysctl.conf\n\nexit 0\n")),(0,o.kt)("h3",{parentName:"div",id:"disable-irq-balance"},"Disable IRQ balance"))),(0,o.kt)("p",null,"You should turn off IRQ Balance to make sure you do not get hardware interrupts in your threads. Turning off IRQ Balance will optimize the balance between power savings and performance through the distribution of hardware interrupts across multiple processors."),(0,o.kt)("p",null,"Open /etc/default/irqbalance and add to the bottom. Save, exit and reboot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/default/irqbalance\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ENABLED="0"\n')),(0,o.kt)("h3",{id:"chrony"},"Chrony"),(0,o.kt)("p",null,"We need to get our time synchronization as accurate as possible. Open /etc/chrony/chrony.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install chrony\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/chrony/chrony.conf\n")),(0,o.kt)("p",null,"Replace the contents of the file with below, Save and exit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pool time.google.com       iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool time.euro.apple.com   iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool time.apple.com        iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\npool ntp.ubuntu.com        iburst minpoll 2 maxpoll 2 maxsources 3 maxdelay 0.3\n\n# This directive specify the location of the file containing ID/key pairs for\n# NTP authentication.\nkeyfile /etc/chrony/chrony.keys\n\n# This directive specify the file into which chronyd will store the rate\n# information.\ndriftfile /var/lib/chrony/chrony.drift\n\n# Uncomment the following line to turn logging on.\n#log tracking measurements statistics\n\n# Log files location.\nlogdir /var/log/chrony\n\n# Stop bad estimates upsetting machine clock.\nmaxupdateskew 5.0\n\n# This directive enables kernel synchronisation (every 11 minutes) of the\n# real-time clock. Note that it can\u2019t be used along with the 'rtcfile' directive.\nrtcsync\n\n# Step the system clock instead of slewing it if the adjustment is larger than\n# one second, but only in the first three clock updates.\nmakestep 0.1 -1\n\n# Get TAI-UTC offset and leap seconds from the system tz database\nleapsectz right/UTC\n\n# Serve time even if not synchronized to a time source.\nlocal stratum 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service chrony restart\n")),(0,o.kt)("h3",{id:"zram-swap"},"Zram swap"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"We have found that cardano-node can safely use this compressed swap in ram essentially giving us around 20gb of ram. We already set kernel parameters for zram in /etc/sysctl.conf :::")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Swapping to disk is slow, swapping to compressed ram space is faster and gives us some overhead before out of memory (oom)."),(0,o.kt)("p",{parentName:"div"},'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/%22"},'https://haydenjames.io/raspberry-pi-performance-add-zram-kernel-parameters/"')," %}"),(0,o.kt)("p",{parentName:"div"},'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html%22"},'https://lists.ubuntu.com/archives/lubuntu-users/2013-October/005831.html"')," %}"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo apt install zram-config linux-modules-extra-raspi\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /usr/bin/init-zram-swapping\n")),(0,o.kt)("p",{parentName:"div"},"Multiply default config by 3. This will give you 11.5GB of virtual compressed swap in ram."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n\nmodprobe zram\n\n# Calculate memory to use for zram (1/2 of ram)\ntotalmem=`LC_ALL=C free | grep -e \"^Mem:\" | sed -e 's/^Mem: *//' -e 's/  *.*//'`\nmem=$((totalmem / 2 * 1024 * 3))\n\n# initialize the devices\necho $mem > /sys/block/zram0/disksize\nmkswap /dev/zram0\nswapon -p 5 /dev/zram0\n\n")),(0,o.kt)("h3",{id:"raspberry-pi--entropy"},"Raspberry Pi & entropy"),(0,o.kt)("p",null,"Before we start generating keys with a headless server we should have a safe amount of entropy."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,o.kt)("a",{parentName:"h5",href:"https://hackaday.com/2017/11/02/what-is-entropy-and-how-do-i-get-more-of-it/"},"https://hackaday.com/2017/11/02/what-is-entropy-and-how-do-i-get-more-of-it/"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/nhorman/rng-tools"},"https://github.com/nhorman/rng-tools")," :::"),(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"But consider the fate of a standalone, headless server (or a micro controller for that matter) with no human typing or mousing around, and no spinning iron drive providing mechanical irregularity. Where does ",(0,o.kt)("em",{parentName:"p"},"it")," get entropy after it starts up? What if an attacker, or bad luck, forces periodic reboots? This is a ",(0,o.kt)("a",{parentName:"p",href:"http://www.theregister.co.uk/2015/12/02/raspberry_pi_weak_ssh_keys/"},"real problem"),".")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install rng-tools\n")),(0,o.kt)("h2",{parentName:"div",id:"automatic-security-updates"},"Automatic security updates"),(0,o.kt)("p",{parentName:"div"},"Enable automatic security updates."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg-reconfigure -plow unattended-upgrades\n")),(0,o.kt)("h2",{parentName:"div",id:"instalar-paquetes"},"Instalar paquetes"),(0,o.kt)("p",{parentName:"div"},"Install the packages we will need."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential libssl-dev tcptraceroute python3-pip \\\n         make automake unzip net-tools nginx ssl-cert pkg-config \\\n         libffi-dev libgmp-dev libssl-dev libtinfo-dev libsystemd-dev \\\n         zlib1g-dev g++ libncursesw5 libtool autoconf flex bison -y\n")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,o.kt)("h3",{parentName:"div",id:"optionally-test-drive-speed"},"Optionally test drive speed"),(0,o.kt)("h4",{parentName:"div",id:"write-speed"},"Write speed"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo dd if=/dev/zero of=/tmp/output conv=fdatasync bs=384k count=1k; sudo rm -f /tmp/output\n")),(0,o.kt)("h4",{parentName:"div",id:"read-speed"},"Read speed"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo hdparm -Tt /dev/sda\n")))))}u.isMDXComponent=!0}}]);