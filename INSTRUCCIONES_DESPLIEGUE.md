# Guía Rápida de Despliegue: Leoshi Blog

Este documento contiene las instrucciones específicas para desplegar la aplicación web **Leoshi Blog**. Sigue estos pasos para asegurarte de que la versión más reciente del código se publique correctamente.

## Contexto

Este proyecto (`leoshi-blogges`) es una aplicación de React construida con Vite. Para que pueda ser visible en internet, no se sube el código fuente directamente. Primero, se debe generar una versión optimizada y estática de la aplicación. Este proceso se llama "construcción" (build).

El resultado de la construcción es una carpeta llamada `dist`, que contiene los archivos `HTML`, `CSS` y `JavaScript` que el navegador puede entender. **Es esta carpeta `dist` la que se debe desplegar.**

---

## Pasos para el Despliegue

Sigue estos 3 pasos en orden desde la raíz del repositorio.

### Paso 1: Acceder a la Carpeta del Proyecto

Todos los comandos deben ejecutarse desde dentro de la carpeta del blog.

```bash
cd leoshi-blogges
```

### Paso 2: Construir la Aplicación

Este comando compila todo tu código de React y crea la carpeta `dist` con la versión de producción.

```bash
npm run build
```

### Paso 3: Desplegar la Carpeta `dist`

Una vez que la construcción (`build`) haya finalizado sin errores, utiliza la herramienta de despliegue apuntando específicamente a la carpeta `leoshi-blogges/dist`.

*   **Ruta a desplegar:** `leoshi-blogges/dist`
*   **Tipo de aplicación:** `client`

Este es el paso final que publica tu sitio en Firebase Hosting.

---

**En resumen: Entra en la carpeta, construye el proyecto y despliega la carpeta `dist` resultante.**
