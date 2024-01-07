import { fireEvent, render, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';


import { I18nextProvider } from 'react-i18next';

import i18nForTests from '../../../../shared/config/i18n/i18nForTests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
//   test('Test render', () => {
//     render(renderWithTranslation(<Sidebar />));
//     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
//   });


  test('Test render', () => {
    render(<I18nextProvider i18n={i18nForTests}><Sidebar /></I18nextProvider>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });


  //   test('Test toggle', () => {
  //     renderWithTranslation(<Sidebar />);
  //     const toggleBtn = screen.getByTestId('sidebar-toggle');
  //     expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  //     fireEvent.click(toggleBtn);
  //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  //   });
});
