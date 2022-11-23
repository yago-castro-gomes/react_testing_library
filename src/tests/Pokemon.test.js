import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Teste requisito 5', () => {
    const head = screen.getByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });
    const btnNext = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    expect(head).toBeInTheDocument();
    expect(btnNext).toBeInTheDocument();

    userEvent.click(btnNext);
    
  });
});
