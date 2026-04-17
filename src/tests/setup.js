import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Firebase
vi.mock('../services/firebase', () => ({
  auth: {
    currentUser: null,
    onAuthStateChanged: vi.fn(),
  },
}));

// Mock GA4
vi.mock('../services/analytics', () => ({
  initGA: vi.fn(),
  trackSearch: vi.fn(),
  trackAddToCart: vi.fn(),
}));
