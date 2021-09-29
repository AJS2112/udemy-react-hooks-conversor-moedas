import { render } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('deve renderizar o componente sem erros', () => {
  render(<ConversorMoedas />);
});
