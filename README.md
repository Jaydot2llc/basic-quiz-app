# Basic Quiz App

This application is built using a Typescript+Vite template.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Default Content

```js
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
```

## Added Dependencies
This section provides details on some of the added dependencies of this project.

### Tailwind CSS
The tailwind CSS dependency is added to make styling the application easier.  As of the writing of this document, we will use Tailwind CSS 4.0.9.

```shell
npm install tailwindcss @tailwindcss/vite
```

Update the `vite.config.ts` file with the following Tailwind CSS configuration items.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

Add the following import to the core or primary style sheet for the project.

```css
@import "tailwindcss";
```

## Testing
Some additional libraries and configuration must be added for Jest to support tests written using TypeScript.

```cmd
npm install --save-dev @testing-library/user-event @testing-library/dom @testing-library/react @testing-library/jest-dom
```

### Testing with Jest and TypeScript

Babel must be installed and configured to support TypeScipt in Jest unit tests.

```cmd
npm install --save-dev jest @types/jest @babel/preset-typescript

npm install -D jsdom

npm install -D jest-environment-jsdom
```

Add the `ts-jest` preprocessor to the project.

```cmd
npm install --save-dev ts-jest

npm install --save-dev @jest/globals

npm install --save-dev ts-node

npm install --save-dev @babel/preset-env @babel/preset-react
```

### Support for CSS in Testing

```cmd
npm install --save-dev jest-transform-css
```

## Additional Dependencies

```cmd
npm install react-router-dom
```


## References
- [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [React](https://react.dev/)
- [Configuring Jest](https://jestjs.io/docs/configuration)
- [Using TypeScript with Jest](https://jestjs.io/docs/getting-started#using-typescript)
- [React Router](https://reactrouter.com/en/main)