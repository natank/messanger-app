import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import {} from '@testing-library/jest-dom';

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
