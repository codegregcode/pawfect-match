import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders pawfect match title', () => {
    render(<App />);
    const h1Element = screen.getByText(/Pawfect Match/i);
    expect(h1Element).toBeInTheDocument();
  });
});
