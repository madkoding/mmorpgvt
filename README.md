# Proyecto MMORPGVT

Este proyecto está desarrollado con **Next.js** y utiliza **npm** como gestor de paquetes. A continuación, encontrarás una guía paso a paso para configurar el entorno, instalar dependencias y ejecutar el proyecto.

---

## Requisitos previos

1. **Instalar NVM (Node Version Manager):**

   - **Linux/Mac:**
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
     ```
     Una vez instalado, recarga tu terminal:
     ```bash
     source ~/.bashrc  # o ~/.zshrc si usas zsh
     ```
     Verifica la instalación:
     ```bash
     nvm --version
     ```

   - **Windows:**
     1. Descarga el instalador desde [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
     2. Ejecuta el instalador y sigue las instrucciones.
     3. Abre una nueva terminal de PowerShell y verifica la instalación:
        ```bash
        nvm version
        ```

2. **Instalar Node.js usando NVM:**

   - Instala la versión LTS de Node.js:
     ```bash
     nvm install --lts
     ```
   - Verifica la instalación:
     ```bash
     node --version
     npm --version
     ```

---

## Instalación del proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/usuario/mmorpgvt.git
   cd mmorpgvt
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

---

## Ejecución en desarrollo

1. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Abrir el proyecto en el navegador:**
   - El servidor estará disponible en: [http://localhost:3000](http://localhost:3000).

---

## Ejecución de pruebas

1. **Ejecutar los tests:**
   ```bash
   npm run test
   ```

2. **Ver cobertura de pruebas:**
   ```bash
   npm run test -- --coverage
   ```

---

## Notas adicionales

- Asegúrate de tener **nvm** y **Node.js** correctamente configurados antes de comenzar.
- Si encuentras problemas relacionados con Babel o configuraciones de Jest, revisa los archivos `.babelrc` y `jest.config.js` para asegurarte de que están correctamente configurados.

---

¡Gracias por usar MMORPGVT! Si tienes preguntas o problemas, no dudes en abrir un issue en el repositorio.

