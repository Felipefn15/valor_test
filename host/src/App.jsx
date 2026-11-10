import { lazy, Suspense } from 'react';

const RemoteButton = lazy(() => import('remote/Button'));

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: 32 }}>
      <h1>Host app</h1>
      <p>The button below is loaded at runtime from the remote app via Module Federation.</p>
      <Suspense fallback="Loading remote…">
        <RemoteButton />
      </Suspense>
    </main>
  );
}
