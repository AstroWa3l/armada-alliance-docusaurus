"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[5228],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1603:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Pi-Core",c={unversionedId:"stake-pool-guides/pi-pool-tutorial/core-online",id:"stake-pool-guides/pi-pool-tutorial/core-online",title:"Pi-Core",description:"Create another Pi-Node from the guide or burn the Armada Alliance Pi-Node.img.gz to a new drive.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/core-online.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/core-online",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/core-online",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/core-online.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pi-Relay",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/pi-relay"},next:{title:"Pi-Cold",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/cold-offline"}},u={},d=[{value:"Core server setup",id:"core-server-setup",level:2},{value:"Online Core Installation",id:"online-core-installation",level:3},{value:"Common.inc",id:"commoninc",level:4},{value:"Test installation",id:"test-installation",level:4},{value:"Configure your USB transfer stick",id:"configure-your-usb-transfer-stick",level:2},{value:"Create a new GUID Partition Table (GPT)",id:"create-a-new-guid-partition-table-gpt",level:3},{value:"Optionally Check the drive for bad blocks (takes a few hours)",id:"optionally-check-the-drive-for-bad-blocks-takes-a-few-hours",level:4},{value:"Format the partition as ext4",id:"format-the-partition-as-ext4",level:3},{value:"Mount the drive at boot",id:"mount-the-drive-at-boot",level:3},{value:"Test your drive mounts",id:"test-your-drive-mounts",level:4},{value:"Grab jq on your way out",id:"grab-jq-on-your-way-out",level:3},{value:"Download the guide markdown files",id:"download-the-guide-markdown-files",level:3},{value:"Set up your cold machine.",id:"set-up-your-cold-machine",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pi-core"},"Pi-Core"),(0,r.kt)("p",null,"Create another Pi-Node from the guide or burn the Armada Alliance Pi-Node.img.gz to a new drive."),(0,r.kt)("h2",{id:"core-server-setup"},"Core server setup"),(0,r.kt)("p",null,"We will be using Martin Lang's ",(0,r.kt)("a",{parentName:"p",href:"https://cardanoscan.io/pool/00000036d515e12e18cd3c88c74f09a67984c2c279a5296aa96efe89"},"ATADA")," StakePool Operator Scripts to manage our pool and interact with the blockchain. These scripts not only handle pool creation & operations. They can be used with a hardware wallet, send ada, create NFT's and more."),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("a",{parentName:"p",href:"https://cardano-community.github.io/guild-operators/Scripts/cntools/"},"CNTools")," they do not hook into systemd and can be used in any directory under the users home folder. We already have gLiveView.sh and you can retreive the pools slot schedule ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/asnakep/ScheduledBlocks"},"1.5 days before epoch boundary")," without CNCLI thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://cardanoscan.io/pool/342350284fd76ba9dbd7fd4ed579b2a2058d5ee558f8872b37817b28"},"SNAKE")," pool!"),(0,r.kt)("p",null,"Martin provides a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitmachtl/scripts/tree/master/cardano/mainnet#import-your-existing-pool-from-cli-keys-or-tutorials"},"script")," that can help you import your existing pool to work with SPOS."),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitmachtl/scripts%22"},'https://github.com/gitmachtl/scripts"')," %}"),(0,r.kt)("p",null,"Please visit and review the configuration, scriptfiles syntax & filenames to better familiarize yourself with the workflow and capabilities of this awesome toolset. All the instructions and commands needed to use these scripts are in the README files located in the stakepoolsripts folder."),(0,r.kt)("p",null,"If you need further assistance with using the Stakepool Operator Scripts you can go through our guide."),(0,r.kt)("p",null,'{% content-ref url="stakepoolscripts.md" %}\n',(0,r.kt)("a",{parentName:"p",href:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/stakepoolscripts"},"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/stakepoolscripts"),"\n{% endcontent-ref %}"),(0,r.kt)("h3",{id:"online-core-installation"},"Online Core Installation"),(0,r.kt)("p",null,"Refer to the Pi-Relay guide and update these settings accordingly for a Core server and reboot."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set hostname in /etc/hosts & /etc/hostname"),(0,r.kt)("li",{parentName:"ul"},"Static IP (192.168.1.150 or whatever works for you on your LAN)"),(0,r.kt)("li",{parentName:"ul"},"Port to 3000")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo reboot\n")),(0,r.kt)("p",null,"While your node is syncing back up, clone the Stakepool Operator Scripts repo into your home directory. Create the bin folder to hold the scripts and add them to your PATH."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd; git clone https://github.com/gitmachtl/scripts.git $HOME/stakepoolscripts\nmkdir -p $HOME/stakepoolscripts/bin; cd $_\necho "export PATH=\\"$PWD:\\$PATH\\"" >> $HOME/.adaenv\nexport PATH="$PWD:$PATH"; . $HOME/.adaenv\n')),(0,r.kt)("p",null,"By now you should have chosen and synced your node on Testnet or Mainnet. There are two sets of scripts respectively. If you are on Testnet you can run a core with all the keys on it in Online mode. With Mainnet we set up an online Core running a full node and an offline machine that runs the same version of cardano-cli as the online machine uses. All key generation takes place on the cold machine for mainnet."),(0,r.kt)("p",null,"The Cold machine does not run cardano-node. It is offline."),(0,r.kt)("p",null,"This offline or cold machine protects the nodes cold keys and the owners pledge keys. A json file with built transactions are transfered to the cold machine for signing and then moved back to the core for submission. Preventing node and wallet keys from ever being on a machine connected to the internet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/stakepoolscripts\ngit fetch origin; git reset --hard origin/master\n")),(0,r.kt)("p",null,"Confirm these scripts are in your PATH and check the integrity of the scripts with git."),(0,r.kt)("p",null,"Git has checksums baked right in."),(0,r.kt)("p",null,"Everything in Git is an object. Every object has an ID. The IDs are a checksum of the content and connections. If the content or connections change, the ID is no longer valid."),(0,r.kt)("p",null,"For example, a commit ID is basically a checksum of..."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The contents and permissions of all files (git calls them "blobs") at the point of that commit (which have their own IDs).'),(0,r.kt)("li",{parentName:"ul"},"The fields of the commit like author, date, log message, etc..."),(0,r.kt)("li",{parentName:"ul"},"The commit IDs of the parent commits.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git fsck --full\n# silence is golden\ngit status\n")),(0,r.kt)("p",null,"You will see that our new bin folder is untracked. everything else should be up to date."),(0,r.kt)("p",null,"Copy the latest versions of the scripts into the bin folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -av $HOME/stakepoolscripts/cardano/${NODE_CONFIG}/* $HOME/stakepoolscripts/bin\n")),(0,r.kt)("p",null,"Martin hosts checksums for his files as well. You can learn how in the README files in the stakpoolscripts/bin folder."),(0,r.kt)("p",null,"I am in the habit of pulling updates, running a check against the repo and gathering copies of any binaries needed for USB transfer to the cold machine."),(0,r.kt)("p",null,"These would include the latest $HOME/stakepoolscripts/bin folder and a copy of the cardano-cli binary in $HOME/.local/bin. the rsync backup we take further down in this guide will copy everything necessary and it can be used to update the cold machines environment to match the core machine."),(0,r.kt)("h4",{id:"commoninc"},"Common.inc"),(0,r.kt)("p",null,"Create a variable for testnet magic, Byron to Shelley epoch value and a variable to determine whether we are on mainnet or testnet. If on testnet we append the magic value onto our CONFIG","_","NET variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo export MAGIC=$(cat ${NODE_FILES}/${NODE_CONFIG}-shelley-genesis.json | jq -r '.networkMagic') >> ${HOME}/.adaenv; . ${HOME}/.adaenv\nif [[ ${NODE_CONFIG} = 'testnet' ]]; then echo export BYRON_SHELLEY_EPOCHS=74; else echo export BYRON_SHELLEY_EPOCHS=208; fi >> ${HOME}/.adaenv\nif [[ ${NODE_CONFIG} = 'testnet' ]]; then echo export CONFIG_NET='testnet-magic\\ \"${MAGIC}\"'; else echo export CONFIG_NET=mainnet; fi >> ${HOME}/.adaenv; . ${HOME}/.adaenv\n")),(0,r.kt)("p",null,"Copy the top portion of the 00","_","common.sh file into a new file named common.inc. This will hold the variable paths needed to connect these scripts to our running node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/stakepoolscripts/bin/\nsed -n '1,69p' 00_common.sh >> common.inc\n")),(0,r.kt)("p",null,"And edit the lines needed to get up and running. I would look in this file beforehand to get an idea of what I am changing from defaults."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i common.inc \\\n    -e \'s#socket="db-mainnet/node.socket"#socket="${NODE_HOME}/db/socket"#\' \\\n    -e \'s#genesisfile="configuration-mainnet/mainnet-shelley-genesis.json"#genesisfile="\'${NODE_FILES}\'/\'${NODE_CONFIG}\'-shelley-genesis.json"#\' \\\n    -e \'s#genesisfile_byron="configuration-mainnet/mainnet-byron-genesis.json"#genesisfile_byron="\'${NODE_FILES}\'/\'${NODE_CONFIG}\'-byron-genesis.json"#\' \\\n    -e \'s#cardanocli="./cardano-cli"#cardanocli="cardano-cli"#\' \\\n    -e \'s#cardanonode="./cardano-node"#cardanonode="cardano-node"#\' \\\n    -e \'s#offlineFile="./offlineTransfer.json"#offlineFile="${HOME}/usb-transfer/offlineTransfer.json"#\' \\\n    -e \'s#byronToShelleyEpochs=208#byronToShelleyEpochs=\'${BYRON_SHELLEY_EPOCHS}\'#\' \\\n    -e \'s#magicparam="--mainnet"#magicparam="--${CONFIG_NET}"#\' \\\n    -e \'s#addrformat="--mainnet"#addrformat="--${CONFIG_NET}"#\'\n')),(0,r.kt)("p",null,"This gets us what we need to continue. Have a look in the file for more options and edits you may need to make depending on your task(like catalyst voting, minting tokens or setting up a hardware wallet)."),(0,r.kt)("h4",{id:"test-installation"},"Test installation"),(0,r.kt)("p",null,"Let's test we have these scripts in our PATH and test they are working."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd; 00_common.sh\n")),(0,r.kt)("p",null,"Should see this on testnet or similar for mainnet. If something went wrong Martin presents you with a nice mushroom cloud ascii drawing and a hint as to what failed. If you are not synced to the tip of the chain it will warn you that the socket does not exist!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Version-Info: cli 1.33.1 / node 1.33.1      Scripts-Mode: online        Testnet-Magic: 1097911063\n")),(0,r.kt)("p",null,"Martin ships a few binaries that are built for x86. These are useless on ARM64 so keep in mind that the token registration and catalyst registration scripts will not work until we can build these binaries for ARM. Lets delete them to save any confusion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd\nrm stakepoolscripts/bin/catalyst-toolbox\nrm stakepoolscripts/bin/jcli\nrm stakepoolscripts/bin/token-metadata-creator\nrm stakepoolscripts/bin/voter-registration\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You need a fully synced node to continue.")),(0,r.kt)("p",null,"Watch sync progress by following journalctl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl --unit=cardano-node --follow\n")),(0,r.kt)("h2",{id:"configure-your-usb-transfer-stick"},"Configure your USB transfer stick"),(0,r.kt)("p",null,"Grab a USB stick and set it up with an ext4 partition owned by $USER that we can transfer between our two machines."),(0,r.kt)("p",null,"Create the mount point & set default ACL for files and folders with umask."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd; mkdir $HOME/usb-transfer; umask 022 $HOME/usb-transfer\n")),(0,r.kt)("p",null,"Attach the external drive into one of the USB2 ports and list all drives with fdisk. Some drive adapters eat a lot of power and you do not want to risk another USB device eating too much power on USB3 triggering a bus reset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fdisk -l\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Disk /dev/sdb: 57.66 GiB, 61907927040 bytes, 120913920 sectors\nDisk model: Cruzer\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: gpt\nDisk identifier: EECA81B9-3683-4A59-BC63-02EEDC04FD21\n")),(0,r.kt)("p",null,"In my case it is /dev/sdb. Yours may be /dev/sdc, /dev/sdd or so on. /dev/sda is usually the system drive. ",(0,r.kt)("strong",{parentName:"p"},"Do not format your system drive by accident"),"."),(0,r.kt)("h3",{id:"create-a-new-guid-partition-table-gpt"},"Create a new GUID Partition Table (GPT)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This will wipe the disk")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gdisk /dev/sdb\n")),(0,r.kt)("p",null,"Type ? to list options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Command (? for help): ?\nb   back up GPT data to a file\nc   change a partition's name\nd   delete a partition\ni   show detailed information on a partition\nl   list known partition types\nn   add a new partition\no   create a new empty GUID partition table (GPT)\np   print the partition table\nq   quit without saving changes\nr   recovery and transformation options (experts only)\ns   sort partitions\nt   change a partition's type code\nv   verify disk\nw   write table to disk and exit\nx   extra functionality (experts only)\n?   print this menu\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"o")," for new GPT and agree to wipe the drive."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"n")," to add a new partition and accept defaults to create a partition that spans the entire disk."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"w")," and 'Y' to write changes to disk and exit gdisk.")),(0,r.kt)("p",null,"Your new partition can be found at /dev/sdb1, the first partition on sdb."),(0,r.kt)("h4",{id:"optionally-check-the-drive-for-bad-blocks-takes-a-few-hours"},"Optionally Check the drive for bad blocks (takes a few hours)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"badblocks -c 10240 -s -w -t random -v /dev/sdb\n")),(0,r.kt)("h3",{id:"format-the-partition-as-ext4"},"Format the partition as ext4"),(0,r.kt)("p",null,"We still need to create a new ext4 file system on the partition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkfs.ext4 /dev/sdb1\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mke2fs 1.46.3 (27-Jul-2021)\nCreating filesystem with 15113979 4k blocks and 3784704 inodes\nFilesystem UUID: c2a8f8c7-3e7a-40f2-8dac-c2b16ab07f37\nSuperblock backups stored on blocks:\n    32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,\n    4096000, 7962624, 11239424\n\nAllocating group tables: done\nWriting inode tables: done\nCreating journal (65536 blocks): done\nWriting superblocks and filesystem accounting information: done\n")),(0,r.kt)("h3",{id:"mount-the-drive-at-boot"},"Mount the drive at boot"),(0,r.kt)("p",null,"Since it will be holding sensitive data we will mount it in a way where only root and the user cardano-node runs as can access."),(0,r.kt)("p",null,"Run blkid and pipe it through awk to get the UUID of the file system we just created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo blkid /dev/sdb1 | awk -F'\"' '{print $2}'\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"c2a8f8c7-3e7a-40f2-8dac-c2b16ab07f37\n")),(0,r.kt)("p",null,"For me the UUID=c2a8f8c7-3e7a-40f2-8dac-c2b16ab07f37"),(0,r.kt)("p",null,"Add a mount entry to the bottom of fstab adding your UUID and the full system path to you usb-transfer folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/fstab\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"UUID=c2a8f8c7-3e7a-40f2-8dac-c2b16ab07f37 /home/ada/usb-transfer auto nosuid,nodev,nofail 0 1\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"nofail allows the server to boot if the drive is not inserted.")),(0,r.kt)("h4",{id:"test-your-drive-mounts"},"Test your drive mounts"),(0,r.kt)("p",null,"Mount the drive and confirm it mounted by locating the lost+found folder. If it is not present then your drive is not mounted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mount usb-transfer; ls $HOME/usb-transfer\n")),(0,r.kt)("p",null,"Take ownership of the file system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown -R $USER:$USER $HOME/usb-transfer\n")),(0,r.kt)("p",null,"Now your stick will auto mount if it is left in the core machine and it is rebooted. We will repeat these steps on the offline cold machine. When you plug it into a running server just issue the same mount/check command."),(0,r.kt)("p",null,"We already set the location of our USB mount in the SPOS common.inc file. We can again test our installation by creating a new offlineTransfer.json file which we need for continuing in offline mode on our Cold machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"01_workOffline.sh new\n")),(0,r.kt)("p",null,"Lets copy this environment to the offline machine. We want the environment identicle and rsync is great for this."),(0,r.kt)("h3",{id:"grab-jq-on-your-way-out"},"Grab jq on your way out"),(0,r.kt)("p",null,"The Pi-Node has a static(portable) binary that can be transfered to the cold machine. Build instructions can be found in the environment section of the guide."),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://github.com/stedolan/jq%22"},'https://github.com/stedolan/jq"')," %}"),(0,r.kt)("p",null,"Locate and copy the static jq binary we built earlier to our $HOME directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp /usr/local/bin/jq $HOME\n")),(0,r.kt)("p",null,"Create an rsync-exclude.txt file so we can rip through and grab everything we need and skip the rest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd; nano exclude-list.txt\n")),(0,r.kt)("p",null,"Add the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".bash_history\n.bash_logout\n.bashrc\n.cache\n.config\n.local/bin/cardano-node\n.local/bin/cardano-service\n.profile\n.selected_editor\n.ssh\n.sudo_as_admin_successful\n.wget-hsts\ngit\ntmp\npi-pool/db\npi-pool/scripts\npi-pool/logs\nusb-transfer\nexclude-list.txt\n")),(0,r.kt)("h3",{id:"download-the-guide-markdown-files"},"Download the guide markdown files"),(0,r.kt)("p",null,"Grab this guide so you can view it on the offline machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/armada-alliance/master/master/docs/intermediate-guide/pi-pool-tutorial/core-online.md\nwget https://raw.githubusercontent.com/armada-alliance/master/master/docs/intermediate-guide/pi-pool-tutorial/cold-offline.md\n")),(0,r.kt)("p",null,"Optionally use VSCodium editor, the opensource VSCode to render markdown files on the offline machine. This makes Martins markdown easier to read. It has no Microsoft non free blobs like VSCode."),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://vscodium.com%22"},'https://vscodium.com"')," %}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/VSCodium/vscodium/releases/download/1.63.2/codium_1.63.2-1639700587_arm64.deb\n")),(0,r.kt)("p",null,"Copy the files and folders to the USB stick."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'rsync -av --exclude-from="exclude-list.txt" /home/ada /home/ada/usb-transfer\n')),(0,r.kt)("p",null,"Unmount the drive before removing it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd; sudo umount usb-transfer\n")),(0,r.kt)("h2",{id:"set-up-your-cold-machine"},"Set up your cold machine."),(0,r.kt)("p",null,"For the cold machine I would use 64bit Raspberry Pi OS(Raspbian) with a desktop on a Raspi-400. It already has rng-tools by default. We want entropy on the offline machine that is generating all our keys."),(0,r.kt)("p",null,"A desktop allows for multiple windows, copy and paste and another way to see your keys. It will help you start figuring out the different keys/certificates and what they are used for. Raspberry Pi OS is in my opinion a more stable desktop. Gnome on Ubuntu tends to be a little sluggish and can freeze up at times. Totally fine if you would rather use Ubuntu. Just make sure you have a username(ada) with a UID of 1001 and GID of 1001. Allowing for smooth transfer between machines."),(0,r.kt)("p",null,"Having a built in keyboard is nice. The only way to get at these keys is physically stealing the drive or through inserting a badusb type root kit which is unlikely but possible. It is one less unknown device that has to be plugged in and you can put the whole thing in a safe quite nicely."))}h.isMDXComponent=!0}}]);