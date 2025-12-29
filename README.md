# 🔴 Pokédex App# React + TypeScript + Vite



Una aplicación web moderna para buscar información de Pokémon, construida con React, TypeScript y Vite.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)Currently, two official plugins are available:

![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?style=flat-square&logo=styled-components)- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## ✨ Características## Expanding the ESLint configuration



- 🔍 **Búsqueda inteligente** con autocompletado y sugerencias en tiempo realIf you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- 🌙 **Modo oscuro/claro** con persistencia en localStorage

- 🇪🇸 **Traducido al español** (tipos, estadísticas y movimientos)- Configure the top-level `parserOptions` property like this:

- 📊 **Estadísticas detalladas** con barras de progreso visuales

- ⚔️ **Movimientos** con información de tipo, poder y PP```js

- 📱 **Diseño responsive** optimizado para móviles y escritorioexport default tseslint.config({

- 🎨 **UI moderna** con animaciones fluidas y glassmorphism  languageOptions: {

    // other options...

## 🖼️ Capturas de pantalla    parserOptions: {

      project: ['./tsconfig.node.json', './tsconfig.app.json'],

<details>      tsconfigRootDir: import.meta.dirname,

<summary>Ver capturas</summary>    },

  },

### Modo Claro})

![Modo Claro](./screenshots/light-mode.png)```



### Modo Oscuro- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`

![Modo Oscuro](./screenshots/dark-mode.png)- Optionally add `...tseslint.configs.stylisticTypeChecked`

- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

</details>

```js

## 🚀 Demo// eslint.config.js

import react from 'eslint-plugin-react'

Visita la aplicación en vivo: [https://Angelo270204.github.io/pokemon-info-app](https://Angelo270204.github.io/pokemon-info-app)

export default tseslint.config({

## 🛠️ Instalación  // Set the react version

  settings: { react: { version: '18.3' } },

1. **Clona el repositorio**  plugins: {

   ```bash    // Add the react plugin

   git clone https://github.com/Angelo270204/pokemon-info-app.git    react,

   cd pokemon-info-app  },

   ```  rules: {

    // other rules...

2. **Instala las dependencias**    // Enable its recommended rules

   ```bash    ...react.configs.recommended.rules,

   npm install    ...react.configs['jsx-runtime'].rules,

   ```  },

})

3. **Inicia el servidor de desarrollo**```

   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:5173`

## 📦 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |
| `npm run deploy` | Despliega la aplicación a GitHub Pages |

## 🏗️ Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── Layout/          # Componentes de layout
│   ├── PokemonCard/     # Tarjeta de información del Pokémon
│   ├── SearchForm/      # Formulario de búsqueda con autocompletado
│   └── UI/              # Componentes de UI reutilizables
├── hooks/               # Custom hooks
│   ├── usePokemonSearch.ts
│   ├── usePokemonSuggestions.ts
│   └── useTheme.ts
├── styles/              # Estilos globales y temas
│   ├── GlobalStyle.ts
│   └── theme.ts
├── types/               # Definiciones de TypeScript
│   └── pokemon.ts
├── utils/               # Utilidades
│   ├── constants.ts     # Colores por tipo
│   └── translations.ts  # Traducciones al español
├── App.tsx              # Componente principal
└── main.tsx             # Punto de entrada
```

## 🎯 Funcionalidades

### Búsqueda con autocompletado
Escribe el nombre de un Pokémon y verás sugerencias en tiempo real. También puedes buscar por número de Pokédex.

### Información mostrada
- **Datos básicos**: ID, nombre, altura y peso
- **Tipos**: Con colores específicos por tipo (traducidos al español)
- **Estadísticas base**: PS, Ataque, Defensa, At. Especial, Def. Especial, Velocidad
- **Movimientos**: Nombre, tipo, poder y PP (primeros 6 movimientos)

### Modo oscuro
Cambia entre modo claro y oscuro usando el botón en la esquina superior derecha. Tu preferencia se guardará automáticamente.

## 🔌 API

Esta aplicación utiliza la [PokéAPI](https://pokeapi.co/) para obtener información de los Pokémon.

## 🛡️ Tecnologías

- **[React](https://react.dev/)** - Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Vite](https://vitejs.dev/)** - Build tool y dev server
- **[Styled Components](https://styled-components.com/)** - CSS-in-JS
- **[PokéAPI](https://pokeapi.co/)** - API de datos de Pokémon

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**Angelo** - [@Angelo270204](https://github.com/Angelo270204)

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
