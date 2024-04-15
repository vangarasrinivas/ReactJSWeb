import { render, screen } from '@testing-library/react';
import Home from './Components/Home';

test('renders learn react link', () => {
  render(<Home />);
  const h1Element = screen.getByText(/Home Hello React/i);
  expect(h1Element).toBeInTheDocument();
});
