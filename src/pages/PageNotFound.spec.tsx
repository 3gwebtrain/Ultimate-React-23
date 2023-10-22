import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import PageNotFound from './PageNotFound';

describe('Page not found', () => {
  it('should have error message', async () => {
    render(<PageNotFound />);
    const errorMessage = screen.getByRole('heading', { level: 1 });
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(/Page not found/);
  });
});
