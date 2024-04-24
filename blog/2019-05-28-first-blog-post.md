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





