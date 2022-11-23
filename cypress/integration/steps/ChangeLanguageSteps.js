/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import MainPage from "../pages/MainPage";
const mainPage = new MainPage;
const basePage = new BasePage;


////// CHANGE LANGUAGE - CENÁRIOS POSITIVOS //////

//////////// CENÁRIO 01 ////////////
When("clico no botão da bandeira", () => {
	mainPage.clicarNoBotaoBandeira();
});

Then("devo ser redirecionado para página de escolha de idioma", () => {
	basePage.validarContainsUrl("customer-preferences")
});


//////////// CENÁRIO 02 ////////////
And("clico no botão da bandeira", () => {
	mainPage.clicarNoBotaoBandeira();
});

And("sou redirecionado para página de escolha de idioma", () => {
	basePage.validarContainsUrl("customer-preferences");
});

And("escolho um idioma válido", () => {
	mainPage.selecionarIdiomaPortugues();
});

When("clico no botão Save Changes", () => {
	mainPage.clicarNoBotaoSaveChanges();
});

Then("devo ser redirecionado para página inicial com a página no idioma selecionado", () => {
	basePage.validarContainsUrl("pt")
});





