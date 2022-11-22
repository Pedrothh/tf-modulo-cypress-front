/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage;
const basePage = new BasePage;

And("que preencho o username valido", () => {
    loginPage.preencherUsername("teste123")
})

And("que preencho a senha valida", () => {
    loginPage.preencherPassword("12345")
})

When("clico em login", () => {
    loginPage.clicarNoBotaoLogin()
})

Then("devo ser redirecionado para o dashboard", () => {
    loginPage.validarUrl("https://itera-qa.azurewebsites.net/Dashboard")
})



And("que preencho o username invalido", () => {
    loginPage.preencherUsername("teste123fakefakefake")
})

And("que preencho a senha invalida", () => {
    loginPage.preencherPassword("1234578945647")
})

When("clico em login", () => {
    loginPage.clicarNoBotaoLogin()
})

Then("devo visualizar um texto escrito \"Wrong username or password\"", () => {
    loginPage.validarTextoMsgLogin("Wrong username or password")
})

