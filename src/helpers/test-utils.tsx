import { render, RenderOptions } from '@testing-library/react';
import React from 'react';

type AllTheProvidersProp = {
  children: React.ReactNode;
};

const AllTheProvidersProp = ({ children }: AllTheProvidersProp) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProvidersProp, ...options });
export * from '@testing-library/react';
export { customRender as render };
