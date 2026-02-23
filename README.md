# MMORPGVT Project

[![Version](https://img.shields.io/github/v/release/madkoding/mmorpgvt?logo=github)](https://github.com/madkoding/mmorpgvt/releases) [![CI](https://img.shields.io/github/actions/workflow/status/madkoding/mmorpgvt/ci.yml?logo=github&label=CI)](https://github.com/madkoding/mmorpgvt/actions) [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

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

## Cómo colaborar en el proyecto

¡Gracias por tu interés en contribuir! Este proyecto utiliza [Git](https://git-scm.com/) para el control de versiones y [GitHub](https://github.com/) para coordinar las colaboraciones. Sigue estos pasos para participar:

### 1. Clona el repositorio
Primero, necesitas una copia local del proyecto. Si no tienes Git instalado, [descárgalo aquí](https://git-scm.com/).

```bash
git clone https://github.com/madkoding/mmorpgvt.git
```

Esto creará una carpeta llamada `mmorpgvt` en tu máquina.

### 2. Crea una rama para tu contribución
Nunca trabajes directamente en la rama principal (`main`). Crea una nueva rama con un nombre descriptivo que indique los cambios que harás:

```bash
git checkout -b nombre-de-mi-rama
```

Por ejemplo:

```bash
git checkout -b agregar-documentacion
```

### 3. Haz tus cambios
Realiza los cambios necesarios en el código o la documentación. Asegúrate de seguir las guías de estilo del proyecto.

### 4. Confirma tus cambios
Una vez que hayas terminado, guarda un registro de los cambios realizados:

```bash
git add .
git commit -m "Descripción breve de los cambios realizados"
```

Por ejemplo:

```bash
git commit -m "Añadí documentación para contribuir con Git"
```

### 5. Sincroniza con el repositorio remoto
Antes de enviar tus cambios, sincroniza tu copia local con la versión más reciente del repositorio principal:

```bash
git fetch origin
git merge origin/main
```

### 6. Envía tus cambios a GitHub
Envía tu rama al repositorio remoto para que otros puedan revisarla:

```bash
git push origin nombre-de-mi-rama
```

### 7. Crea un Pull Request
Ve al repositorio en GitHub y crea un "Pull Request" desde tu rama. Describe los cambios que realizaste y qué problema resuelve tu contribución.

### 8. Revisión y ajustes
Un miembro del equipo revisará tu Pull Request. Si es necesario, realiza los ajustes que se te soliciten y sigue trabajando en tu rama. Los nuevos cambios se añadirán automáticamente a tu Pull Request.

---

Si tienes preguntas o dudas, utiliza la sección de [Issues](https://github.com/madkoding/mmorpgvt/issues) para comunicarte.

<!-- AUTO-UPDATE-DATE -->
**Última actualización:** 2026-02-23 02:32:39 -03
