import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test } from 'vitest';
import Login from './Login';

describe('Login page ', () => {
  it('should render login page', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });
  test('should render inputs', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const emailInput = screen.getByLabelText('Email address');
    expect(emailInput).toBeTruthy();
    fireEvent.change(emailInput, { target: { value: 'jbarif@gmail.com' } });
    expect(emailInput.getAttribute('value')).toBe('jbarif@gmail.com');

    const passInput = screen.getByLabelText('Password');
    expect(passInput).toBeTruthy();
    fireEvent.change(passInput, { target: { value: 'Chennai@3' } });
    expect(passInput.getAttribute('value')).toBe('Chennai@3');
  });
});
