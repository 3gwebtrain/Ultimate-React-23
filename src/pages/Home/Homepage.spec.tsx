import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import Homepage from './Homepage';

describe('home page renders', () => {
  it('should render the home page', () => {
    render(<Homepage />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeTruthy();
  });
});
