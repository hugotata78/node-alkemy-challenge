# CHALLENGE BACKEND CON NODE

# TECNOLOGÍAS:
EXPRESS, SEQUELIZE, JSONWEBTOKEN, BCRYPTJS, MORGAN, NODEMON, BUFFER, MULTER, MYSQL2

# DESCRIPCIÓN: 
El presente proyecto consite en la creación de una API REST, a través de la cual permite la carga a una base de datos de personajes del Mundo de Disney, como así también mostrar, modificar y eliminar dichos personajes, realizar busquedas por nombre y filtros por edad y peliculas y/o series asociadas a los personajes y asociar peliculas a los mismos. De igual manera se pueden realizar las mismas operaciones para Peliculas y Series relacionadas a los Personajes, de las cuales se podrán realizar busquedas por Titulos, filtros por género y ordenamiento de las Peliculas y asociar personajes y géneros. Cabe mencionar que a título personal, incorporé a la API algunas features que permiten operar un CRUD para la carga de datos de los géneros a la DB, su modificación, eliminación y despliegue de los mismos.

# INSTALACIÓN Y CONFIGURACIÓN DEL PROYECTO:

1.- Clonar repositorio.-

2.- Ejecutar npm install para instalar dependencias.-

3.- Configurar variables de entorno en archivo .env conforme al archivo .env.example con valores de su entorno local.-

4.- Ejecutar comandos npx sequelize-cli db:migrate y npx sequelize-cli db:seed:all para ejecutar las migraciones y exportar las seeders a la base de dato respectivamente.-

5.- Ejecutar comando npm run dev para iniciar el servidor.-

# DOCUMENTACIÓN:
Para revisar la documentación ingresar al siguiente link:

# https://go.postman.co/workspace/My-Workspace~d6d54a9b-0aeb-4933-8e6e-67f9327aebed/collection/17880505-69b3b343-9901-42b3-9a39-9c0757613132?action=share&creator=17880505