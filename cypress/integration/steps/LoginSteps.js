/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import LoginPage, { validarLogin, validarMensagemAlertaSenha, validarMensagemErro, validarRedirecionamentoTelaLogin } from "../pages/LoginPage";

const basePage = new BasePage;
const loginPage = new LoginPage;

/// TESTES - Login //

//Teste redirecionamento tela Login 

When("clico no botão Faça seu Login", () => {
	loginPage.redirecionamentoTelaLogin();
});

Then("devo validar redirecionamento para tela de login", () => {
	basePage.validarText(validarRedirecionamentoTelaLogin, "Sign in")
});


//Teste Login no Site com Sucesso
When("clico no botão Faça seu Login", () => {
	loginPage.redirecionamentoTelaLogin();
});

And("preencho o campo email ou telefone com dado valido", () => {
	loginPage.escreverCampoEmail("robotesteqadbc@gmail.com")
});

And("clico no botão continuar", () => {
	loginPage.clicarContinuar()
});

And("digito a senha corretamente", () => {
	loginPage.escreverCampoSenha("Me8YTChPf5j9KRn#")
});

And("clico no botão Fazer Login", () => {
	loginPage.clicarFazerLogin()
});

Then("devo validar redirecionamento para tela principal estando logado.", () => {
	basePage.validarText(validarLogin, "Olá, Teste")
});

//Teste Tentativa Login com Email de Usuario Nao Cadastrado
When("clico no botão Faça seu Login", () => {
	loginPage.redirecionamentoTelaLogin();
});

And("preencho o campo email ou telefone com dado de usuario nao cadastrado", () => {
	loginPage.escreverCampoEmail("emailinexistente@gmail.com")
});

And("clico no botão continuar", () => {
	loginPage.clicarContinuar()
});


Then("devo validar mensagem de erro", () => {
	basePage.validarText(validarMensagemErro, "We cannot find an account with that email address")
});

//Teste Tentativa Login no Site com Senha Incorreta
When("clico no botão Faça seu Login", () => {
	loginPage.redirecionamentoTelaLogin();
});

And("preencho o campo email ou telefone com dado valido", () => {
	loginPage.escreverCampoEmail("robotesteqadbc@gmail.com")
});

And("clico no botão continuar", () => {
	loginPage.clicarContinuar()
});

And("digito a senha incorreta", () => {
	loginPage.escreverCampoSenha("Me8YTChPf5j9sdsKRn#")
});

And("clico no botão Fazer Login", () => {
	loginPage.clicarFazerLogin()
});

Then("devo validar alerta", () => {
	basePage.validarText(validarMensagemAlertaSenha, "To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.")
});