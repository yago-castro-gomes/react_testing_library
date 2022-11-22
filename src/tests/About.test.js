import { screen, render } from '@testing-library/react';
import { About } from '../pages';

describe('Teste o componente <About.js />.', () => {
  test('Teste requisito 2', () => {
    render(<About />);
    const header = screen.getByRole('heading', {
      name: /about pokédex/i,
    });
    const pharagraph1 = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
    );
    const pharagraph2 = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    const img = screen.getByRole('img', {
      name: /pokédex/i });
    expect(header).toBeInTheDocument();
    expect(pharagraph1).toBeInTheDocument();
    expect(pharagraph2).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
