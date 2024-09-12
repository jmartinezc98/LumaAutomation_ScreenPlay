export class FillRegistrationForm {
    static withData(userData) {
      // Completar campos del formulario
      cy.get('#firstname').type(userData.firstName); // Nombre
      cy.get('#lastname').type(userData.lastName); // Apellido
      cy.get('#email_address').type(userData.email); // Correo electrónico
      cy.get('#password').type(userData.password); // Contraseña
      cy.get('#password-confirmation').type(userData.confirmPassword); // Confirmación de contraseña
  
      // Casillas opcionales
      if (userData.newsletter) {
        cy.get('#is_subscribed').check(); // Sign Up for Newsletter
      }
      // if (userData.remoteShopping) {
      //   cy.get('#assistance_allowed_checkbox').check();
      // }
    }
  }  