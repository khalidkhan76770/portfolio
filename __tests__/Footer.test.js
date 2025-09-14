import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { meta } from '../lib/data';

describe('Footer', () => {
  it('has working email link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /email/i });
    expect(link).toHaveAttribute('href', `mailto:${meta.email}`);
    expect(link).not.toHaveAttribute('target');
  });

  it('has working WhatsApp link with number', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /whatsapp/i });
    expect(link).toHaveAttribute('href', meta.whatsapp);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveTextContent(meta.phone);
  });
});
