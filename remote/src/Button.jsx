import { useState } from 'react';

export default function Button() {
  const [n, setN] = useState(0);
  return (
    <button onClick={() => setN(n + 1)} style={{ padding: '12px 20px', fontSize: 16, borderRadius: 8 }}>
      Remote button (deployed via Zephyr) — clicks: {n}
    </button>
  );
}
