import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const AC = screen.getByText(/AC/i);
  expect(AC).toBeInTheDocument();
});
