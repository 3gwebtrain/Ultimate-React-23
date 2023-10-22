import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import AppLayout from './AppLayout';

describe('app layout testing', async () => {
  it('should contain the expected class name', async () => {
    const { container } = render(<AppLayout />);
    expect(container.getElementsByClassName('_app_a39566').length).toBe(1);
  });
});
