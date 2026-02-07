 Proyecto Adopciones - Node.js / Express / MongoDB

 Descripción
Este proyecto permite gestionar usuarios, mascotas y adopciones.  
Incluye endpoints para:  
- CRUD de Usuarios  
- CRUD de Mascotas  
- Gestión de Adopciones  
- Módulo de Mocks para generar datos de prueba  

El proyecto está listo para ser dockerizado, aunque en esta máquina no se pudo ejecutar Docker por problemas de WSL2 en Windows.  


 Endpoints Principales

 Users
- **GET** `/api/users` → Listar todos los usuarios  
- **GET** `/api/users/:uid` → Obtener usuario por ID  
- **PUT** `/api/users/:uid` → Actualizar usuario  
- **DELETE** `/api/users/:uid` → Eliminar usuario  

 Pets
- **GET** `/api/pets` → Listar todas las mascotas  
- **POST** `/api/pets` → Crear mascota  
- **POST** `/api/pets/withimage` → Crear mascota con imagen  
- **PUT** `/api/pets/:pid` → Actualizar mascota  
- **DELETE** `/api/pets/:pid` → Eliminar mascota  

Adoptions
- **GET** `/api/adoptions` → Listar adopciones  
- **GET** `/api/adoptions/:aid` → Obtener adopción por ID  
- **POST** `/api/adoptions/:uid/:pid` → Crear adopción  

 Sessions
- **POST** `/api/sessions/register` → Registrar usuario  
- **POST** `/api/sessions/login` → Login seguro  
- **GET** `/api/sessions/current` → Ver usuario logueado  

 Mocks
- **GET** `/api/mocks/mockingusers` → Genera 50 usuarios de prueba  
- **POST** `/api/mocks/generateData` → Genera usuarios y mascotas según parámetros  

---
Aunque Docker no se pudo ejecutar en mi PC, estos son los pasos que se usarían para dockerizar el proyecto:
-Construir la imagen:
docker build -t adopciones-app .
-Etiquetar la imagen para DockerHub:
docker tag adopciones-app sooooolcuevas/adopciones-app
-Subir la imagen a DockerHub:
docker push sooooolcuevas/adopciones-app
-Comandos útiles de Docker
.Listar contenedores en ejecución:docker ps
.Listar todas las imágenes locales:docker images
.Eliminar contenedor:docker rm <container_id>
.Eliminar imagen:docker rmi <image_id>
Docker no se pudo ejecutar en mi PC por problemas de WSL en Windows, pero el Dockerfile y los comandos están documentados correctamente.
```bash
npm install
