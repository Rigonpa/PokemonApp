export const Actions = {
  pop: jest.fn(),
  reset: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  popTo: jest.fn(),
};

export const Router = jest.fn(() => null);
export const Stack = jest.fn(() => null);
export const Scene = jest.fn(() => null);
