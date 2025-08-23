import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { meta } from '../lib/data';

describe('Footer', () => {
  it('has working email link', () => {
    render(<Footer />);
    const link = screen.getByText('Email');
    expect(link).toHaveAttribute('href', `mailto:${meta.email}`);
    expect(link).toHaveAttribute('target', '_blank');
  });
});
