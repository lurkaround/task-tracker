import { render, screen } from '@testing-library/react';
import App from './App';

test('renders username helon', () => {
  render(<App />);
  const linkElement = screen.getByText(/helon/i);
  expect(linkElement).toBeInTheDocument();
});
