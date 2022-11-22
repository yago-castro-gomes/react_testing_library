import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste requisito 4', () => {
    render(<NotFound />);
    const head = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(head).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
