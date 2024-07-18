import React from 'react';
import { createRoot } from 'react-dom/client';
import KopstudApp from './components/KopstudApp';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<KopstudApp />);