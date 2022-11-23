import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste requisito 5.1', async () => {
    const { history } = renderWithRouter(<App />);
    const head = await screen.findByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });
    expect(head).toBeInTheDocument();
  });

  test('Teste 5.2', async () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    const btnAll = screen.getByRole('button', {
      name: /all/i,
    });
    expect(btnAll).toBeInTheDocument();
    expect(btnNext).toBeInTheDocument();

    userEvent.click(btnNext);
    const charmander = await screen.findByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const caterpie = await screen.getByText(/caterpie/i);
    expect(caterpie).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const ekans = await screen.getByText(/ekans/i);
    expect(ekans).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const alaka = await screen.getByText(/alakazam/i);
    expect(alaka).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const mew = await screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const rapidash = await screen.getByText(/rapidash/i);
    expect(rapidash).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const snorlax = await screen.getByText(/snorlax/i);
    expect(snorlax).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const dragonair = await screen.getByText(/dragonair/i);
    expect(dragonair).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnNext);
    const pikachu = await screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    expect(btnAll).toBeInTheDocument();
  });
  test('Teste 5.3', async () => {
    const { history } = renderWithRouter(<App />);
    const pokebyId = await screen.getAllByTestId('pokemon-name');
    expect((pokebyId).length).toBe(1);
  });
  test('test 5.4', async () => {
    const { history } = renderWithRouter(<App />);
    const btnById = await screen.getAllByTestId('pokemon-type-button');
    const btnNext = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    expect(btnById[0]).toHaveTextContent('Electric');
    expect(btnById[1]).toHaveTextContent('Fire');

    userEvent.click(btnById[0]);
    const typeBtns = await screen.getAllByTestId('pokemon-type');
    expect(typeBtns[0]).toBeInTheDocument();
    userEvent.click(btnById[1]);
    userEvent.click(btnNext);
    expect(typeBtns[0]).toBeInTheDocument();
    userEvent.click(btnById[2]);
    expect(typeBtns[0]).toBeInTheDocument();
    userEvent.click(btnById[3]);
    expect(typeBtns[0]).toBeInTheDocument();
    userEvent.click(btnById[4]);
    userEvent.click(btnNext);
    expect(typeBtns[0]).toBeInTheDocument();
    userEvent.click(btnById[5]);
    expect(typeBtns[0]).toBeInTheDocument();
    userEvent.click(btnById[6]);
    expect(typeBtns[0]).toBeInTheDocument();
  });
  test('Teste 5.5', async () => {
    const { history } = renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', {
      name: /all/i,
    });
    const btnNext = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
    const pikachu = await screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
    userEvent.click(btnNext);
    const charmander = await screen.findByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
  });
});
