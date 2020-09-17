import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import AppRouter from './router';

/**
 * The root application component.
 *
 * @returns {React.FC}
 */
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
