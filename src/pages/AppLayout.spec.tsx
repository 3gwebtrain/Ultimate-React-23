import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import AppLayout from './AppLayout';

describe('app layout testing', async () => {
  it('should contain the expected class name', async () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );
    console.log('hi');
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
});
