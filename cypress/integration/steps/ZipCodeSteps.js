/// <reference types="cypress" />


import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

const loginPage = new LoginPage;
const mainPage = new MainPage;


//Teste ZipCode

And("faco login", () => {
    mainPage.login()
})
When(/^clico no botao EnviarPara$/, () => {   
	mainPage.clicarNoBotaoZipCode()
});

And(/^digito o codigo postal para entrega$/, () => {
	mainPage.escreverZipCode(10005)
});

Then(/^devo validar a mudança no local para entrega$/, () => {
    mainPage.validarMudancaLocalEntrega()
});
