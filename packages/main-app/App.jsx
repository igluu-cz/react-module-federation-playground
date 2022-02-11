import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './src/Home';
import Layout from './src/Layout';
const PaymentsPage = React.lazy(() => import('payments-app/PaymentsPage'));

export default function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="payments" exact element={<PaymentsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
