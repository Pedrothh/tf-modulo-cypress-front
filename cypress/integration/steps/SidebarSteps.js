/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import MainPage from "../pages/MainPage";
const mainPage = new MainPage;
const basePage = new BasePage;

And("que digito na barra de pesquisa \"tv 55\"", () => {
    mainPage.preencherBarraDePesquisa("tv 55")
})

When("clico na lupa de pesquisa", () => {
    mainPage.clicarNoBotaoPesquisar()
})

Then("devo visualizar resultados para o texto do item pesquisado", () => {
    mainPage.validarTextoPesquisado("tv 55")
})

And("devo ser redirecionado para a pagina de pesquisa", () => {
    basePage.validarContainsUrl("tv")
})




