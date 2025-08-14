import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css'; // Import Tailwind's CSS

const container = document.getElementById('root');
const root = createRoot(container!); // The '!' asserts that container is not null
root.render(<App />);