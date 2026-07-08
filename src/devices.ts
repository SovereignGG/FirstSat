import { createContext, useContext } from 'react';

export type DeviceId = 'passport' | 'seedsigner' | 'coldcardq';

export interface DeviceNeed {
  icon: string;
  text: string;
}

export interface DeviceMeta {
  id: DeviceId;
  order: number;
  name: string;
  /** Short name used inline in copy, e.g. "Passport" */
  short: string;
  maker: string;
  tagline: string;
  description: string;
  seedWords: number;
  setupTime: string;
  totalTime: string;
  highlights: string[];
  needs: DeviceNeed[];
}

export const DEVICES: Record<DeviceId, DeviceMeta> = {
  passport: {
    id: 'passport',
    order: 1,
    name: 'Foundation Passport',
    short: 'Passport',
    maker: 'Foundation',
    tagline: 'The friendly one',
    description:
      'Premium, phone-like experience. Fully airgapped with a built-in camera and the Envoy companion app.',
    seedWords: 24,
    setupTime: '10 min',
    totalTime: '~30 minutes',
    highlights: [
      'Beautiful screen & simple menus',
      'Airgapped — QR codes, no cables',
      'Envoy app guides the whole setup',
    ],
    needs: [
      { icon: '📦', text: 'Foundation Passport (in the box)' },
      { icon: '📱', text: 'Your phone (for the Envoy app)' },
      { icon: '💻', text: 'Your computer (for Sparrow)' },
      { icon: '⏱️', text: '30 minutes of uninterrupted time' },
    ],
  },
  seedsigner: {
    id: 'seedsigner',
    order: 2,
    name: 'SeedSigner',
    short: 'SeedSigner',
    maker: 'Open source community',
    tagline: 'The DIY one',
    description:
      'Build it yourself from off-the-shelf parts. Stateless by design — your seed is never stored on the device.',
    seedWords: 12,
    setupTime: '20 min',
    totalTime: '~45 minutes',
    highlights: [
      'Ultra low cost, no vendor to trust',
      'Stateless — stores nothing, ever',
      'Seed from dice rolls or a photo',
    ],
    needs: [
      { icon: '🔧', text: 'SeedSigner parts or assembled kit' },
      { icon: '💾', text: 'A microSD card (512MB or larger)' },
      { icon: '💻', text: 'Your computer (flashing + Sparrow)' },
      { icon: '📱', text: 'Your phone (for BULL Wallet)' },
      { icon: '⏱️', text: '45 minutes of uninterrupted time' },
    ],
  },
  coldcardq: {
    id: 'coldcardq',
    order: 3,
    name: 'ColdCard Q',
    short: 'ColdCard Q',
    maker: 'Coinkite',
    tagline: 'The power user one',
    description:
      'Full QWERTY keyboard, big screen, built-in QR scanner. Battery powered and fully airgapped.',
    seedWords: 24,
    setupTime: '12 min',
    totalTime: '~35 minutes',
    highlights: [
      'QWERTY keyboard & QR scanner',
      'Runs on AAA batteries — airgapped',
      'Battle-tested Coinkite security',
    ],
    needs: [
      { icon: '📦', text: 'ColdCard Q in its sealed bag' },
      { icon: '🔋', text: '3x AAA batteries (or a USB-C cable)' },
      { icon: '💾', text: 'A microSD card' },
      { icon: '💻', text: 'Your computer (for Sparrow)' },
      { icon: '📱', text: 'Your phone (for BULL Wallet)' },
      { icon: '⏱️', text: '35 minutes of uninterrupted time' },
    ],
  },
};

export const DEVICE_LIST: DeviceMeta[] = Object.values(DEVICES).sort(
  (a, b) => a.order - b.order
);

export function isDeviceId(value: unknown): value is DeviceId {
  return value === 'passport' || value === 'seedsigner' || value === 'coldcardq';
}

export const DeviceContext = createContext<DeviceMeta | null>(null);

/** The currently selected device. Only used inside guarded step routes. */
export function useDevice(): DeviceMeta {
  const device = useContext(DeviceContext);
  // Guarded routes redirect to the landing page before this can be null.
  return device ?? DEVICES.passport;
}
