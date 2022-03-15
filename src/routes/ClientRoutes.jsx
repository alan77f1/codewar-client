import NotFound from 'components/NotFound';
import Problem from 'features/pages/problem/Problem';
import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import Contest from '../features/pages/contest/Contest';

export function ClientRoutes() {
  return (
    <Switch>
      <Route path="/" element={<Navigate to="/problem" />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/rank" element={<div>Rank page</div>} />
      <Route path="/upload" element={<div>upload page</div>} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}
