import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/payments">Payments</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
