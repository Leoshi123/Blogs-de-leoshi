# Guía de Despliegue en Render

Este documento contiene todos los requisitos y pasos necesarios para desplegar el proyecto "Leoshi Blogges" en la plataforma de hosting Render.

## 1. Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente:

1.  **Cuenta de GitHub:** Necesaria para alojar el código fuente de tu proyecto. Render se conectará a este repositorio.
2.  **Cuenta de Render:** La plataforma donde desplegaremos la aplicación. Puedes crear una cuenta gratuita.
3.  **Proyecto de Supabase:** Tu base de datos y sistema de autenticación. Necesitarás la **URL** y la **Clave Anónima (Anon Key)** de tu proyecto de Supabase.
4.  **Node.js y npm:** Instalados en tu entorno de desarrollo local para poder ejecutar los comandos de preparación.

## 2. Pasos para el Despliegue

Sigue estos pasos en orden para asegurar un despliegue exitoso.

### Paso 2.1: Preparar y Subir el Código a GitHub

El código debe estar en un repositorio de GitHub para que Render pueda acceder a él.

1.  **Crear un Repositorio en GitHub:**
    *   Ve a [GitHub.com](https://github.com) y crea un **nuevo repositorio público**.
    *   No lo inicialices con un archivo `README` o `.gitignore`, debe estar completamente vacío.
    *   Copia la URL del repositorio que te proporciona GitHub (ej. `https://github.com/tu-usuario/leoshi-blogges.git`).

2.  **Subir el Código desde tu Terminal Local:**
    *   Abre tu terminal y navega a la carpeta raíz de tu proyecto (`leoshi-blogges`).
    *   Ejecuta los siguientes comandos en orden, reemplazando la URL de ejemplo con la URL de tu repositorio:

    ```bash
    # Inicializa Git en tu proyecto
    git init

    # Agrega todos los archivos para ser rastreados
    git add .

    # Crea el primer "commit" (una instantánea de tu código)
    git commit -m "Initial commit: Ready for deployment"

    # Establece la rama principal a "main"
    git branch -M main

    # Conecta tu repositorio local con el de GitHub
    git remote add origin https://github.com/tu-usuario/leoshi-blogges.git

    # Sube tu código a GitHub
    git push -u origin main
    ```

### Paso 2.2: Desplegar en Render

Ahora que el código está en GitHub, podemos desplegarlo en Render.

1.  **Crear un Nuevo Servicio en Render:**
    *   Inicia sesión en tu cuenta de [Render](https://dashboard.render.com/).
    *   En el dashboard, haz clic en **New +** y selecciona **Static Site**.

2.  **Conectar el Repositorio de GitHub:**
    *   Conecta tu cuenta de GitHub a Render si aún no lo has hecho.
    *   Selecciona el repositorio de tu blog que acabas de subir.

3.  **Configurar el Servicio:**
    *   Render leerá automáticamente el archivo `render.yaml` que creamos y configurará la mayoría de las opciones. Verifica que la configuración sea la siguiente:
        *   **Build Command:** `npm install && npm run build`
        *   **Publish Directory:** `dist`

4.  **Añadir las Variables de Entorno:**
    *   Esta es la parte más importante para conectar tu aplicación con Supabase.
    *   Desplázate hacia abajo hasta la sección **Environment Variables**.
    *   Haz clic en **Add Environment Variable** y añade las siguientes dos variables:
        *   **Key:** `VITE_SUPABASE_URL`
        *   **Value:** `Pega aquí la URL de tu proyecto de Supabase`
    *   Haz clic de nuevo en **Add Environment Variable** y añade la segunda variable:
        *   **Key:** `VITE_SUPABASE_ANON_KEY`
        *   **Value:** `Pega aquí la Clave Anónima (Anon Key) de tu proyecto de Supabase`

5.  **Lanzar el Despliegue:**
    *   Haz clic en el botón **Create Static Site** en la parte inferior de la página.
    *   Render comenzará a construir y desplegar tu aplicación. Puedes ver el progreso en los logs de despliegue.

6.  **¡Listo!**
    *   Una vez que el despliegue termine, Render te proporcionará una URL pública (ej. `https://leoshi-blogges.onrender.com`). ¡Tu blog ya está en línea!

El archivo `render.yaml` también incluye una regla de reescritura (`rewrite`) que asegura que las rutas de tu aplicación de página única (SPA) funcionen correctamente, por lo que no necesitas configurar nada más.
