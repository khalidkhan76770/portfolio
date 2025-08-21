import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

describe('ProjectCard', () => {
  it('displays project information', () => {
    const project = {
      title: 'Test Project',
      description: 'A sample project',
      image: '/test.png',
      link: 'https://example.com',
      github: 'https://github.com/example',
      tech: ['React'],
    };

    render(<ProjectCard {...project} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A sample project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Live')).toHaveAttribute('href', project.link);
    expect(screen.getByText('Code')).toHaveAttribute('href', project.github);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.png');
    expect(img).toHaveAttribute('alt', 'Test Project');
  });
});
