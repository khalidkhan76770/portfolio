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

  it('has working phone link without number text', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /phone/i });
    expect(link).toHaveAttribute('href', `tel:${meta.phone.replace(/\s/g, '')}`);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveTextContent(meta.phone);
  });
});
