# MMORPGVT Project

## Descripción

**MMORPGVT** es un proyecto que combina elementos de juegos de rol multijugador masivos en línea (MMORPG) con integraciones personalizadas para VTubers. Proporciona herramientas y funciones para enriquecer la experiencia de streaming con mecánicas de juego y características interactivas.

Este proyecto permite a los creadores de contenido:
- Crear mecánicas de juego en tiempo real para su audiencia, como:
  - **Batallas interactivas**: Los espectadores pueden usar comandos de chat para participar en combates, apoyar a sus personajes o realizar ataques especiales.
  - **Exploración en tiempo real**: Genera mapas donde los espectadores deciden qué camino tomar o qué acciones realizar.
  - **Economía virtual**: Gestión de recursos como oro o puntos de experiencia, que los espectadores pueden ganar y gastar a través de interacciones en el chat.
  - **Misiones colaborativas**: Los espectadores se agrupan para completar tareas específicas, desbloqueando recompensas o contenido exclusivo.
- Conectar con plataformas populares como Twitch.
- Personalizar interacciones para mantener a los espectadores comprometidos.

## Instalación

Sigue estos pasos para instalar el proyecto en tu sistema:

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/madkoding/mmorpgvt.git
    cd mmorpgvt
    ```

2. **Instala WSL (Windows Subsystem for Linux):**
    Si estás en Windows y deseas usar un entorno Linux para el desarrollo:
    - Abre PowerShell como administrador y ejecuta:
      ```bash
      wsl --install
      ```
    - Esto instalará la versión por defecto de Ubuntu. Reinicia tu sistema si es necesario.
    - Una vez instalado, abre la terminal de Ubuntu desde el Menú Inicio.
    - Actualiza los paquetes de Ubuntu:
      ```bash
      sudo apt update && sudo apt upgrade
      ```
    - Asegúrate de tener instalado Git y Node.js en WSL siguiendo los pasos a continuación.

3. **Instala Node.js con NVM:**
    Si no tienes Node.js instalado, puedes usar NVM (Node Version Manager) para gestionar diferentes versiones de Node.js:
    
    - Instala NVM siguiendo las instrucciones de su [repositorio oficial](https://github.com/nvm-sh/nvm#installing-and-updating).
    - Una vez instalado, ejecuta:
      ```bash
      nvm install 16
      nvm use 16
      ```
    - Asegúrate de que está activo con:
      ```bash
      node -v
      ```

4. **Instala las dependencias:**
    Asegúrate de tener Node.js 14 o superior. Instala los requerimientos ejecutando:
    ```bash
    npm install
    ```

5. **Configura las variables de entorno:**
    Renombra el archivo `.env.local.example` a `.env.local` y edítalo con los valores correspondientes para tu entorno

    Puedes configurar las siguientes variables de ejemplo para Firebase:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=tu_measurement_id
    ```

6. **Ejecuta la aplicación:**
    ```bash
    npm run dev
    ```

   Esto iniciará el servidor de desarrollo en `http://localhost:3000`.

## Despliegue

Este proyecto está optimizado para ejecutarse en Vercel. Para desplegar:

1. Conecta tu repositorio de GitHub con tu cuenta de Vercel.
2. Asegúrate de configurar las variables de entorno necesarias en el panel de Vercel.
3. Haz un push a la rama principal (`main`) y Vercel construirá y desplegará automáticamente tu aplicación.


## Scripts npm disponibles

El archivo `package.json` incluye varios scripts para gestionar y ejecutar tareas en el proyecto. A continuación, se describen los comandos disponibles:

- `npm run dev`: Inicia el servidor de desarrollo de Next.js para ver los cambios en tiempo real.
- `npm run build`: Genera una versión optimizada de la aplicación lista para producción.
- `npm run start`: Inicia el servidor de producción después de haber ejecutado `npm run build`.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de problemas de estilo y errores.
- `npm run format`: Aplica Prettier para formatear el código automáticamente.
- `npm run test`: Ejecuta las pruebas unitarias utilizando Jest con cobertura.

## Tests

El proyecto incluye un conjunto de pruebas para garantizar la estabilidad y funcionalidad del sistema. Las pruebas se ejecutan utilizando Jest, un framework popular para realizar tests en proyectos de JavaScript y React. Para correr las pruebas en este proyecto, utiliza el siguiente comando:

```bash
npm run test
```

Este comando ejecutará todas las pruebas y generará un informe de cobertura en caso de estar configurado. Actualmente, se evalúan aspectos clave del proyecto, como:

- **Validación de componentes:** Asegura que los componentes principales de la aplicación funcionan como se espera.
- **Integraciones críticas:** Comprueba que la integración con servicios externos como Firebase se realiza correctamente.
- **Lógica del juego:** Valida las mecánicas principales del juego, como la unión de jugadores y las interacciones básicas.

Para más información sobre cómo configurar o extender las pruebas, consulta la documentación oficial de Jest o revisa los archivos en la carpeta `__tests__` del proyecto.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una rama con el nombre de tu función o corrección.
3. Envía un pull request con una descripción detallada.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
Gracias por ser parte de MMORPGVT. ¡Esperamos tus ideas y sugerencias para hacer este proyecto aún más asombroso!

