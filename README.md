#User Management App - PersonaDesk

This project is a single-page application (SPA) built with React. It was created to demonstrate core front-end and full stack concepts, including component architecture and client-side routing.
The application retrieves and manages user data from a public API (jsonplaceholder) and includes full CRUD (Create, Read, Update, Delete) functionality, all via the React Context API for robust global state management.
A major highlight of this project is its deployment as a cross-platform desktop application using Electron. This involved customizing the UI to hide the native window frame and implementing IPC (Inter-Process Communication) to allow the React components to control desktop functions (like Minimize and Close).

#📁 Project Structure

USERMANAGEMENTAPP/
├── node_modules/
├── public/
│   └── index.html      
├── src/
│   ├── assets/                 
│   │   ├── 8.jpg 
│   │   ├── minimize.png
│   │   └── x.png
│   ├── components/             
│   │   ├── AddUserForm.js
│   │   ├── EditUserForm.js   
│   │   ├── FloatingElements.js
│   │   ├── Header.js          
│   │   ├── SearchBar.js
│   │   └── UserList.js
│   ├── context/                
│   │   └── UserContext.js     
│   ├── pages/                  
│   │   ├── UserDetailPage.js
│   │   └── UserListPage.js
│   ├── App.js                  
│   ├── index.css               
│   └── index.js        
├── main.js                    
├── package-lock.json
├── package.json                
└── preload.js  

#✨App View

![1](https://github.com/user-attachments/assets/fcda201a-2a21-4340-a711-b9fa45bfc4f1)
![2](https://github.com/user-attachments/assets/780b687a-62b9-4602-a472-2926b42aad0d)
