let profileId = '';

describe('Пользователь заходит на страницу', () => {
   beforeEach(() => {
      cy.login().then((data) => {
         profileId = data.id;
         cy.visit(`profile/${data.id}`);
      });
   });

   afterEach(() => {
      cy.resetProfile(profileId);
   });
   it('И профиль успешно загружается', () => {
      cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
   });
   it('И редактирует его', () => {
      const newName = 'new';
      const newLastname = 'lastname';
      cy.updateProfile(newName, newLastname);
      cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
      cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
   });
});
