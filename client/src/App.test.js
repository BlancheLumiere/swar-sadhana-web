import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Swar Sadhana title', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Swar Sadhana/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
});
