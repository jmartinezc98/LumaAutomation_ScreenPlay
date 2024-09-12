import '../support/commands'
import { FillRegistrationForm } from '../task/FillRegistrationForm';
import { SubmitForm } from '../task/SubmitForm';
import { IsAccountCreated } from '../questions/IsAccountCreated';
import { IsFieldVisible } from '../questions/IsFieldVisible';

describe('Creación de Cuenta', () => {
 
  let userData;

  beforeEach(() => {
    cy.visit('/');
    cy.firstLanguage();
    cy.fixture('userData').then((data) => {
    userData = data;
    });
  });

  it('Creación de Cuenta y validación de campos ', () => {
    // Visitar la página de creación de cuenta
    
    // Verificar que los campos obligatorios son visibles
    IsFieldVisible.checkField('#firstname');
    IsFieldVisible.checkField('#lastname');
    IsFieldVisible.checkField('#email_address');
    IsFieldVisible.checkField('#password');
    IsFieldVisible.checkField('#password-confirmation');

    // Completar el formulario de registro
    FillRegistrationForm.withData(userData);

    // Enviar el formulario
    SubmitForm.submit();

    // Verificar si la cuenta fue creada exitosamente
    IsAccountCreated.successMessage();
  });
});
