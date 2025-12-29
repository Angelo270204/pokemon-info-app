# 🔴 Pokédex App

Una aplicación web moderna para buscar información de Pokémon, construida con React, TypeScript y Vite.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?style=flat-square&logo=styled-components)

## ✨ Características

- 🔍 **Búsqueda inteligente** con autocompletado y sugerencias en tiempo real
- 🌙 **Modo oscuro/claro** con persistencia en localStorage
- 🇪🇸 **Traducido al español** (tipos, estadísticas y movimientos)
- 📊 **Estadísticas detalladas** con barras de progreso visuales
- ⚔️ **Movimientos** con información de tipo, poder y PP
- 📱 **Diseño responsive** optimizado para móviles y escritorio
- 🎨 **UI moderna** con animaciones fluidas y glassmorphism

## 🚀 Demo

Visita la aplicación en vivo: [https://Angelo270204.github.io/pokemon-info-app](https://Angelo270204.github.io/pokemon-info-app)

## 🛠️ Instalación

1. Clona el repositorio
   ```bash
   git clone https://github.com/Angelo270204/pokemon-info-app.git
   cd pokemon-info-app
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo
   ```bash
   npm run dev
   ```

4. Abre tu navegador en http://localhost:5173

## 📦 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| npm run dev | Inicia el servidor de desarrollo |
| npm run build | Compila el proyecto para producción |
| npm run preview | Previsualiza la build de producción |
| npm run lint | Ejecuta ESLint para verificar el código |
| npm run deploy | Despliega la aplicación a GitHub Pages |

## 🏗️ Estructura del proyecto

```
src/
├── components/
│   ├── Layout/
│   ├── PokemonCard/
│   ├── SearchForm/
│   └── UI/
├── hooks/
│   ├── usePokemonSearch.ts
│   ├── usePokemonSuggestions.ts
│   └── useTheme.ts
├── styles/
│   ├── GlobalStyle.ts
│   └── theme.ts
├── types/
│   └── pokemon.ts
├── utils/
│   ├── constants.ts
│   └── translations.ts
├── App.tsx
└── main.tsx
```

## 🎯 Funcionalidades

### Búsqueda con autocompletado
Escribe el nombre de un Pokémon y verás sugerencias en tiempo real.

### Información mostrada
- Datos básicos: ID, nombre, altura y peso
- Tipos: Con colores específicos por tipo (traducidos al español)
- Estadísticas base: PS, Ataque, Defensa, At. Especial, Def. Especial, Velocidad
- Movimientos: Nombre, tipo, poder y PP

### Modo oscuro
Cambia entre modo claro y oscuro usando el botón en la esquina superior derecha.

## 🔌 API

Esta aplicación utiliza la [PokéAPI](https://pokeapi.co/) para obtener información de los Pokémon.

## 🛡️ Tecnologías

- [React](https://react.dev/) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Vite](https://vitejs.dev/) - Build tool y dev server
- [Styled Components](https://styled-components.com/) - CSS-in-JS
- [PokéAPI](https://pokeapi.co/) - API de datos de Pokémon

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**Angelo** - [@Angelo270204](https://github.com/Angelo270204)

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!

