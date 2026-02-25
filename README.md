# Blog Tech

Blog Tech es una plataforma de blogs moderna y rica en funcionalidades, diseñada para entusiastas de la tecnología. Proporciona una experiencia fluida para crear, gestionar y compartir artículos, tutoriales y actualizaciones sobre una variedad de temas relacionados con la tecnología.

## Despliegue

Puedes ver el proyecto desplegado en [https://leoshi-blogges.onrender.com/](https://leoshi-blogges.onrender.com/).

## Características Principales

-   **Autenticación de Usuarios Completa**:
    -   **Registro de nuevos usuarios**: Cualquier persona puede crear una cuenta para empezar a publicar.
    -   **Inicio y Cierre de Sesión**: Sistema seguro para gestionar el acceso de los usuarios.
    -   **Navegación Dinámica**: La barra de navegación se adapta, mostrando opciones de registro/inicio de sesión o de administración/cierre de sesión según el estado del usuario.
-   **Gestión de Contenido (Solo para usuarios registrados)**:
    -   **Panel de Administración**: Una ruta privada (`/admin`) donde los usuarios pueden crear, editar y eliminar sus publicaciones.
    -   **Soporte para Markdown**: Escribe tus artículos usando Markdown para darles un formato enriquecido.
    -   **Gestión de Imágenes**: Sube imágenes para tus publicaciones a través de Cloudinary.
-   **Interfaz Moderna y Adaptable**:
    -   Diseño intuitivo y fácil de usar, construido con **React** y **Tailwind CSS**.
    -   Experiencia de usuario excepcional en cualquier dispositivo.

## Tecnologías Utilizadas

-   **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
-   **Vite**: una herramienta de compilación rápida y ligera para el desarrollo web moderno.
-   **Tailwind CSS**: Un framework de CSS de "utilidad primero" para crear diseños personalizados.
-   **Supabase**: Una plataforma de código abierto para servicios de backend, incluyendo base de datos y autenticación.
-   **Cloudinary**: Un servicio basado en la nube para la gestión de imágenes y vídeos.

## Cómo Empezar

Para obtener una copia local y ponerla en marcha, sigue estos sencillos pasos.

### Prerrequisitos

-   Node.js instalado
-   npm o tu gestor de paquetes favorito

### Instalación

1.  **Clona el repositorio**
    ```sh
    git clone https://github.com/leoshi-hm/leoshi-blogges.git
    ```
2.  **Instala los paquetes de NPM**
    ```sh
    npm install
    ```
3.  **Configura las variables de entorno**
    Crea un archivo `.env` en la raíz del proyecto y añade las variables de entorno necesarias para Supabase y Cloudinary.
4.  **Ejecuta el proyecto**
    ```sh
    npm run dev
    ```

Esto iniciará el servidor de desarrollo y podrás ver el proyecto en tu navegador en `http://localhost:5173`.
