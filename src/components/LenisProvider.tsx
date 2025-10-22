'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis root options={{ duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      {children}
    </ReactLenis>
  );
}
