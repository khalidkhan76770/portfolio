import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

jest.mock('next/image', () => ({ src, alt, ...props }) => {
  // eslint-disable-next-line @next/next/no-img-element
  const { fill, ...rest } = props;
  return <img src={src} alt={alt} {...rest} />;
});

describe('ProjectCard', () => {
  it('displays project information', () => {
    const project = {
      title: 'Test Project',
      summary: 'A sample project',
      image: '/test.png',
      demo: 'https://example.com',
      code: 'https://github.com/example',
      tech: ['React'],
    };

    render(<ProjectCard {...project} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A sample project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Live Demo')).toHaveAttribute('href', project.demo);
    expect(screen.getByText('Live Code')).toHaveAttribute('href', project.code);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.png');
    expect(img).toHaveAttribute('alt', 'Test Project');
  });
});
