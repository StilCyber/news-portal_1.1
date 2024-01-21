import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import componentRender from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {

  test('test render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: undefined,
        loginForm: undefined
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: undefined,
        loginForm: undefined
      },
    });
    await userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  });

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
        user: undefined,
        loginForm: undefined
      }
    });
    await userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  });
});
