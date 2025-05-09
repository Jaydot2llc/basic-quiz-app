# Basic Quiz App

Documentation for customizing this application can be found in the [docs directory](docs/index.md).

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

```sh
npm install --save-dev @testing-library/user-event @testing-library/dom @testing-library/react @testing-library/jest-dom
```

### Testing with Jest and TypeScript

Babel must be installed and configured to support TypeScipt in Jest unit tests.

Required dependencies:  react-dom, @types/react, jest, babel-jest, @babel/core, @babel/preset-env, @babel/preset-react, and typescript

```sh
npm install -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event

npm install -D identity-obj-proxy jest-transformer-svg

npm install -D vite-tsconfig-paths

npm install --save-dev jest @types/jest @babel/preset-typescript

npm install -D jsdom jest-environment-jsdom

```

Add the `ts-jest` preprocessor to the project.

```sh
npm install --save-dev jest ts-jest @types/jest babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime

npm install --save-dev @jest/globals

npm install --save-dev ts-node

npm install --save-dev babel-jest @babel/core

```

### Support for CSS in Testing

```sh
npm install --save-dev jest-transform-css
```

## Additional Dependencies

```sh
npm install react-router-dom
```

## Customizations
Here are some simple instructions for customizing the look and content of this quiz component.

### Change Data Source

Modify the import for the following functions:  Question.tsx, Quiz.tsx, Summary.tsx
Modify the `Header.tsx` file to reflect the type of quiz.

### Color Theme Customization
This component uses Tailwind CSS for styling, so you can uses the colors provided by Tailwind to quickly modify the look of the quiz.  In order to customnize the color theme of this quiz application, modify the `index.css` file.

The **quiz-container** container class colors can be modified.

## References
- [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [React](https://react.dev/)
- [Configuring Jest](https://jestjs.io/docs/configuration)
- [Using TypeScript with Jest](https://jestjs.io/docs/getting-started#using-typescript)
- [React Router](https://reactrouter.com/en/main)
- [Effortless Testing Setup for React with Vite, TypeScript, Jest, and React Testing Library 2025](https://dev.to/teyim/effortless-testing-setup-for-react-with-vite-typescript-jest-and-react-testing-library-1c48)