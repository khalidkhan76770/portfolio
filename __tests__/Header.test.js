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
    const button = screen.getByLabelText(/toggle navigation/i);
    await userEvent.click(button);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
