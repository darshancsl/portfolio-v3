import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Loader from './components/loader';

const root = document.getElementById('root');

const App = lazy(() => import('./App'));

if (root) {
    const app = createRoot(root);

    app.render(
        <Router>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </Router>
    );
}
