import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { reducer, StateProvider } from "./state";
const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <StateProvider reducer={reducer}>
    <App />
  </StateProvider>
);



