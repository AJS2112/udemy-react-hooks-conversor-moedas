import ConversorMoedas from './conversor-moedas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste de componente de conversao de moeadas', () => {

  test('deve renderizar o componente sem erros', () => {
    render(<ConversorMoedas />);
  });

  it('deve simular uma conversao de moeadas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: { success: true, rates: { BRL: 4.564292, USD: 1.101049 } }
    });

    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal');

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD');
  });

})

