import { render } from '@testing-library/react';
import { describe } from 'vitest';
import Homepage from './Homepage';

describe('home page component', () => {
  it('should renders home page ', () => {
    render(<Homepage />);
  });
});
