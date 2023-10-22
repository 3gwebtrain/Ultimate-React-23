import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Homepage from './Homepage';

describe('home page component', () => {
  it('should renders home page ', () => {
    render(<Homepage />);
  });
  it('should renders home page ', () => {
    render(<Homepage />);
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/You travel the world./);

    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent(/A world map that tracks your/);
  });
});
