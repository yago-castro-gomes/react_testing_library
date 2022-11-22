import { render, screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('Teste requisito 3', () => {
    render(<FavoritePokemon />);
    const favorites = screen.getByText(/no favorite pokémon found/i);

    expect(favorites).toBeInTheDocument();
  });
});
