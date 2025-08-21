import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

jest.mock('next/router', () => ({
  useRouter() {
    return { pathname: '/' };
  },
}));

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);
    fireEvent.click(screen.getByLabelText('Toggle menu'));
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    fireEvent.click(screen.getByText('More'));
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
