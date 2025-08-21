import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
jest.mock('next/router', () => ({
  useRouter() {
    return { pathname: '/' };
  },
}));

describe('Header', () => {
  it('renders navigation links', async () => {
    render(<Header />);
    const button = screen.getByLabelText(/open menu/i);
    await userEvent.click(button);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });
});
