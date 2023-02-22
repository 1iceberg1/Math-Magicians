import { render, screen } from '@testing-library/react';
import App from './App';

test('render navbar in the component', () => {
  render(<App />);
  const navbar = screen.getByTestId('navbar');
  expect(navbar).toBeInTheDocument();
});
