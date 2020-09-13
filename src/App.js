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
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
