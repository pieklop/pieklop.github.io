---
slug: first-blog-post
title: SSH
authors:
  name: Bartosz Mucha
  title: housefly
  url: https://github.com/pieklop
  image_url: https://avatars.githubusercontent.com/u/100522099?v=4
tags: [hola, docusaurus]
---

# SSH keys and access
An **SSH key**, or **Secure Shell key**, is a pair of cryptographic keys used for secure communication and authentication in the SSH protocol. The pair consists of a public key and a private key. SSH keys are widely used for secure remote access to servers, automated processes, and secure file transfers. They offer stronger security compared to password-based authentication, as the private key is never transmitted over the network, reducing the risk of interception or brute-force attacks.

1.	**Public Key**: The public key is placed on the SSH server that you want to access securely. It is freely distributable and can be shared with anyone. The server uses the public key to encrypt data that can only be decrypted with the corresponding private key.

2.	**Private Key**: The private key is kept securely on the client side, typically in a file or stored in an SSH agent. It should never be shared with anyone else. When the client attempts to connect to the SSH server, it presents the private key for authentication. The server then checks this private key against the corresponding public key stored on the server. If they match, the client is granted access.

---

## Key features of SSH-based access include:

1.	**Encryption**: SSH encrypts all data transmitted between the client and server, including login credentials, commands, and data transfers. This encryption ensures confidentiality and protects against eavesdropping.

2.	**Authentication**: SSH uses cryptographic keys, typically in the form of SSH key pairs for user authentication. It enables users to securely log in to remote systems or servers from anywhere with network connectivity. 

3.	**Remote Command Execution**: SSH allows users to execute commands on remote systems as if they were physically present at the console. This capability is particularly useful for system administration, troubleshooting, and automation tasks.

4.	**Secure File Transfer**: SSH supports secure file transfer protocols, such as Secure Copy (SCP) and Secure File Transfer Protocol (SFTP), allowing users to securely transfer files between local and remote systems or between different remote systems.

---

## How to get your SSH key for your Git repository? (For Windows)

1.	Download and Open Git Bash

2.	Type:
> ssh-keygen -t ed25519 -C „your_email@example.com”

Change the email from the example to the one connected to GitHub 
That will create a new SSH key with your e-mail as a label.

3.	Now, you will be asked about location in which your ssh file will be saved:
You can change it if you want. (If you created a key in the location of an existing one, it will be overwritten)

> Default: /c/Users/YOU/.ssh/id_ALGORITHM (e.g. ed25519)

4.	Type your passphrase or skip it if you don’t need additional security.

> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]

(Every time you will use SSH key, you will be asked for the passphrase unless you have configured ssh-agent which manage your keys)

5.	Copy your ssh key using pipeline command:

> cat ~/.ssh/id_ed25519.pub | clip

(id_ed25519 is an id algorithm witch was used in subsection 3)

> Now in your clipboard you will find that key:
> (e.g. ssh-ed25519 {YOUR SSH KEY - string} {your email})

6.	Open your web browser and visit: https://github.com/settings/keys 

(You can also login into your github account, click on your profile picture -> settings -> Access -> SSH and GPG keys)

7.	Click buton „New SSH key”, then add name for your key, choose key type, and paste below your key. When you’re done click „Add SSH key”

8.	Now, you can clone your repository using your SSH key.

---
 
For more information, please look at: **[GitHub Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)**.



