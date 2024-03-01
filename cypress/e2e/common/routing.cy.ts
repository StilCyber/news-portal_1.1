import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
   it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
   });

   it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
   });

   it('Переход открывает несуществующий маршрут', () => {
      cy.visit('/example');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
   });
});

describe('Пользователь авторизован', () => {
   beforeEach(() => {
      cy.login('admin', '123');
   });

   it('Пользователь авторизован', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
   });

   it('Переход открывает страницу со списком статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
   });
});
