import { render } from '@testing-library/react';

import App from './app';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome messanger-frontend/gi)).toBeTruthy();
  });
});
