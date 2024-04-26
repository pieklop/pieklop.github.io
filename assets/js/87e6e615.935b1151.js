"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8922],{820:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(4848),r=t(8453);const o={slug:"SSH keys and usage",title:"SSH keys and usage",authors:{name:"Bartosz Mucha",title:"Second creator of the website",url:"https://github.com/pieklop",image_url:"https://avatars.githubusercontent.com/u/100522099?v=4"},tags:["SSH","Git","GitHub"]},i="SSH keys and access",a={permalink:"/blog/SSH keys and usage",source:"@site/blog/2024-04-24-SSH-keys.md",title:"SSH keys and usage",description:"An SSH key, or Secure Shell key, is a pair of cryptographic keys used for secure communication and authentication in the SSH protocol. The pair consists of a public key and a private key. SSH keys are widely used for secure remote access to servers, automated processes, and secure file transfers. They offer stronger security compared to password-based authentication, as the private key is never transmitted over the network, reducing the risk of interception or brute-force attacks.",date:"2024-04-24T00:00:00.000Z",tags:[{label:"SSH",permalink:"/blog/tags/ssh"},{label:"Git",permalink:"/blog/tags/git"},{label:"GitHub",permalink:"/blog/tags/git-hub"}],readingTime:3.045,hasTruncateMarker:!1,authors:[{name:"Bartosz Mucha",title:"Second creator of the website",url:"https://github.com/pieklop",image_url:"https://avatars.githubusercontent.com/u/100522099?v=4",imageURL:"https://avatars.githubusercontent.com/u/100522099?v=4"}],frontMatter:{slug:"SSH keys and usage",title:"SSH keys and usage",authors:{name:"Bartosz Mucha",title:"Second creator of the website",url:"https://github.com/pieklop",image_url:"https://avatars.githubusercontent.com/u/100522099?v=4",imageURL:"https://avatars.githubusercontent.com/u/100522099?v=4"},tags:["SSH","Git","GitHub"]},unlisted:!1,prevItem:{title:"Git Bash vs. GitHub Desktop",permalink:"/blog/Git Bash vs. GitHub Desktop"}},c={authorsImageUrls:[void 0]},l=[{value:"Key features of SSH-based access include:",id:"key-features-of-ssh-based-access-include",level:2},{value:"How to get your SSH key for your Git repository? (For Windows)",id:"how-to-get-your-ssh-key-for-your-git-repository-for-windows",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["An ",(0,n.jsx)(s.strong,{children:"SSH key"}),", or ",(0,n.jsx)(s.strong,{children:"Secure Shell key"}),", is a pair of cryptographic keys used for secure communication and authentication in the SSH protocol. The pair consists of a public key and a private key. SSH keys are widely used for secure remote access to servers, automated processes, and secure file transfers. They offer stronger security compared to password-based authentication, as the private key is never transmitted over the network, reducing the risk of interception or brute-force attacks."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Public Key"}),": The public key is placed on the SSH server that you want to access securely. It is freely distributable and can be shared with anyone. The server uses the public key to encrypt data that can only be decrypted with the corresponding private key."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Private Key"}),": The private key is kept securely on the client side, typically in a file or stored in an SSH agent. It should never be shared with anyone else. When the client attempts to connect to the SSH server, it presents the private key for authentication. The server then checks this private key against the corresponding public key stored on the server. If they match, the client is granted access."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"key-features-of-ssh-based-access-include",children:"Key features of SSH-based access include:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Encryption"}),": SSH encrypts all data transmitted between the client and server, including login credentials, commands, and data transfers. This encryption ensures confidentiality and protects against eavesdropping."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Authentication"}),": SSH uses cryptographic keys, typically in the form of SSH key pairs for user authentication. It enables users to securely log in to remote systems or servers from anywhere with network connectivity."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Remote Command Execution"}),": SSH allows users to execute commands on remote systems as if they were physically present at the console. This capability is particularly useful for system administration, troubleshooting, and automation tasks."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Secure File Transfer"}),": SSH supports secure file transfer protocols, such as Secure Copy (SCP) and Secure File Transfer Protocol (SFTP), allowing users to securely transfer files between local and remote systems or between different remote systems."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"how-to-get-your-ssh-key-for-your-git-repository-for-windows",children:"How to get your SSH key for your Git repository? (For Windows)"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Download and Open Git Bash"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Type:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["ssh-keygen -t ed25519 -C \u201e",(0,n.jsx)(s.a,{href:"mailto:your_email@example.com",children:"your_email@example.com"}),"\u201d"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Change the email from the example to the one connected to GitHub\nThat will create a new SSH key with your e-mail as a label."}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Now, you will be asked about location in which your ssh file will be saved:\nYou can change it if you want. (If you created a key in the location of an existing one, it will be overwritten)"}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Default: /c/Users/YOU/.ssh/id_ALGORITHM (e.g. ed25519)"}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Type your passphrase or skip it if you don\u2019t need additional security."}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Enter passphrase (empty for no passphrase): [Type a passphrase]\nEnter same passphrase again: [Type passphrase again]"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"(Every time you will use SSH key, you will be asked for the passphrase unless you have configured ssh-agent which manage your keys)"}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsx)(s.li,{children:"Copy your ssh key using pipeline command:"}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"cat ~/.ssh/id_ed25519.pub | clip"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"(id_ed25519 is an id algorithm witch was used in subsection 3)"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Now in your clipboard you will find that key:\n(e.g. ssh-ed25519 [YOUR SSH KEY - string] [your email])"}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsxs)(s.li,{children:["Open your web browser and visit: ",(0,n.jsx)(s.a,{href:"https://github.com/settings/keys",children:"https://github.com/settings/keys"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"(You can also login into your github account, click on your profile picture -> settings -> Access -> SSH and GPG keys)"}),"\n",(0,n.jsxs)(s.ol,{start:"7",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Click buton \u201eNew SSH key\u201d, then add name for your key, choose key type, and paste below your key. When you\u2019re done click \u201eAdd SSH key\u201d"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Now, you can clone your repository using your SSH key."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["\u2003\nFor more information, please look at: ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",children:"GitHub Documentation"})}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var n=t(6540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);