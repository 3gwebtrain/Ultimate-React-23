import { fireEvent, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Login from './Login';

describe('Login page ', () => {
  it('should render login page', () => {
    render(<Login />);
  });
  test('should render inputs', async () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = await getByLabelText('Email address');
    expect(emailInput).toBeTruthy();
    fireEvent.change(emailInput, { target: { value: 'jbarif@gmail.com' } });
    expect(emailInput.getAttribute('value')).toBe('jbarif@gmail.com');

    const passInput = await getByLabelText('Password');
    expect(passInput).toBeTruthy();
    fireEvent.change(passInput, { target: { value: 'Chennai@3' } });
    expect(passInput.getAttribute('value')).toBe('Chennai@3');
  });
});
