import { createContext, useContext } from 'react';

export type DeviceId = 'passport' | 'seedsigner' | 'specterdiy';

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
    name: 'Foundation Passport Core',
    short: 'Passport Core',
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
      { icon: '📦', text: 'Foundation Passport Core (in the box)' },
      { icon: '📱', text: 'Your phone (for the Envoy app & BULL Wallet)' },
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
  specterdiy: {
    id: 'specterdiy',
    order: 3,
    name: 'Specter DIY',
    short: 'Specter DIY',
    maker: 'Open source community (Cryptoadvance)',
    tagline: 'The touchscreen DIY one',
    description:
      'Build it yourself from an off-the-shelf touchscreen dev board and a QR scanner module. Fully airgapped, with multisig and passphrases built in.',
    seedWords: 24,
    setupTime: '20 min',
    totalTime: '~45 minutes',
    highlights: [
      'Full-color touchscreen — no tiny buttons',
      'Airgapped over QR — no soldering required',
      'Built-in multisig & BIP39 passphrase support',
    ],
    needs: [
      { icon: '🖥️', text: 'STM32F469I-DISCO discovery board' },
      { icon: '📷', text: 'QR scanner module (e.g. Waveshare GM65)' },
      { icon: '💾', text: 'A microSD card (for firmware upgrades)' },
      { icon: '🔌', text: 'A mini-USB cable (to flash the firmware)' },
      { icon: '💻', text: 'Your computer (flashing + Sparrow)' },
      { icon: '📱', text: 'Your phone (for BULL Wallet)' },
      { icon: '⏱️', text: '45 minutes of uninterrupted time' },
    ],
  },
};

export const DEVICE_LIST: DeviceMeta[] = Object.values(DEVICES).sort(
  (a, b) => a.order - b.order
);

export function isDeviceId(value: unknown): value is DeviceId {
  return value === 'passport' || value === 'seedsigner' || value === 'specterdiy';
}

export const DeviceContext = createContext<DeviceMeta | null>(null);

/** The currently selected device. Only used inside guarded step routes. */
export function useDevice(): DeviceMeta {
  const device = useContext(DeviceContext);
  // Guarded routes redirect to the landing page before this can be null.
  return device ?? DEVICES.passport;
}
