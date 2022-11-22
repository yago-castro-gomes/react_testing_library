import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';


describe('Teste o componente <App.js />', () => {
  test('Testes requisito 1', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', {
      name: /home/i,
    });
    const about = screen.getByRole('link', {
      name: /about/i,
    });
    const favoritePokemon = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemon).toBeInTheDocument();

    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
    userEvent.click(favoritePokemon);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('Not found', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/notfxsxound');
    });

    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFound).toBeInTheDocument();
  });
});
