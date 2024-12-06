# Desafio Like Me

## Autor
- Proyecto Backend [Oriana Gómez]

## Requisitos antes de la instalación
- Node versión recomendada ![nodes](https://img.shields.io/badge/node-v18.16.0-gray?style=flat&logo=node.js&logoColor=white&color=339933)

## Primeros pasos
- Crear base de datos
```bash
  CREATE DATABASE likeme;
```
```bash
    \c likeme
```
```bash
    CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);
```

- Clonar el proyecto
- Ir hacia el directorio del proyecto

Instalar dependencias:

### Instalar  dependencias para el backend

```bash
  cd backend
  npm install
```
### NOTA IMPORTANTE crear un archivo .env en la carpeta backend siguiendo el ejemplo de .env.example y colocar tus datos correspondientes

Levantar el backend

```bash
  npm run dev
```

### Instalar dependencias para el frontend

```bash
  cd client
  npm install
```

Levantar el client, abrir otro terminal para levantar el client

```bash
  npm run dev
```


## Proyecto Frontend
![Vite](https://img.shields.io/badge/Vite-v4.4.10-gray?style=flat&logo=Vite&logoColor=white&color=646CFF)
![React](https://img.shields.io/badge/React-v18.2.0-gray?style=flat&logo=react&logoColor=white&color=61DAFB)
![axios](https://img.shields.io/badge/axios-v1.5.1-gray?style=flat&logo=axios&logoColor=white&color=5A29E4)
![CSS3](https://img.shields.io/badge/CSS3-gray?style=flat&logo=CSS3&logoColor=white&color=1572B6)


## Proyecto Backend

![javascript](https://img.shields.io/badge/javascript-gray?style=flat&logo=javascript&logoColor=white&color=F7DF1E)
![nodes](https://img.shields.io/badge/node-v18.16.0-gray?style=flat&logo=node.js&logoColor=white&color=339933)
![Express](https://img.shields.io/badge/Express-v4.18.2-gray?style=flat&logo=Express&logoColor=white&color=000000)
![nodemon](https://img.shields.io/badge/nodemon-v3.0.1-gray?style=flat&logo=nodemon&logoColor=white&color=76D04B)
![dotenv](https://img.shields.io/badge/dotenv-v16.3.1-gray?style=flat&logo=dotenv&logoColor=white&color=ECD53F)
![postgresql](https://img.shields.io/badge/pg-v8.11.3-gray?style=flat&logo=postgresql&logoColor=white&color=4169E1)
![cors](https://img.shields.io/badge/cors-v2.8.5-gray?style=flatd&color=000000)


