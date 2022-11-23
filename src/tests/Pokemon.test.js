import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.js />', () => {
  test('Teste requisito 6.1', async () => {
    renderWithRouter(<App />);
    const namePoke = await screen.getAllByTestId('pokemon-name');
    const typePokemon = await screen.getAllByTestId('pokemon-type');
    const pokemonWeight = await screen.getAllByTestId('pokemon-weight');
    const imgPokemon = await screen.getAllByRole('img');

    expect(namePoke[0]).toBeInTheDocument('Pikachu');
    expect(typePokemon[0]).toHaveTextContent('Electric');
    expect(pokemonWeight[0]).toBeInTheDocument(/average weight: 6\.0 kg/i);
    expect(imgPokemon[0]).toHaveAttribute('alt', `${namePoke[0].innerHTML} sprite`);
    expect(imgPokemon[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    // expect(imgPokemon[1]).toHaveAttribute('alt', `${namePoke[0].innerHTML} is marked as favorite`)
  });
  test('test requisito 6.2', async () => {
    const { history } = renderWithRouter(<App />);
    const linkDetails = await screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(linkDetails);
    expect(history.location.pathname).toBe(`/pokemon/${25}`);

    const favoriteBtn = await screen.findAllByText(/pokémon favoritado\?/i);
    userEvent.click(favoriteBtn[0]);
    const imgFavorite = await screen.getAllByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(imgFavorite[0]).toBeInTheDocument();
    expect(imgFavorite[0]).toHaveAttribute('src', '/star-icon.svg');
  });
});
