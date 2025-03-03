import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const ReferentialFrontend = React.lazy(
  () => import('referential_frontend/Module')
);

const PackmanFrontend = React.lazy(() => import('packman_frontend/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/referential_frontend">ReferentialFrontend</Link>
        </li>
        <li>
          <Link to="/packman_frontend">PackmanFrontend</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/referential_frontend" element={<ReferentialFrontend />} />
        <Route path="/packman_frontend" element={<PackmanFrontend />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
