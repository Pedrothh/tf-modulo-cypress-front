/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import MainPage from "../pages/MainPage";
const mainPage = new MainPage;
const basePage = new BasePage;


/// BARRA DE PESQUISA - CENÁRIO POSITIVO ///

When("digito na barra de pesquisa tv 55 e aperto enter", () => {
    mainPage.preencherBarraDePesquisa("tv 55")
})

Then("devo ser redirecionado para a página de pesquisa", () => {
    basePage.validarContainsUrl("tv")
})

And("devo visualizar resultados para o texto do item pesquisado", () => {
    mainPage.validarTextoPesquisado("tv 55")
})




/// BARRA DE PESQUISA - CENÁRIO NEGATIVO ///

When("não preencho o campo de texto na barra de pesquisa e aperto enter", () => {
	mainPage.preencherBarraDePesquisa(" ");
});

Then("devo permanecer na página principal", () => {
	basePage.validarUrl("https://www.amazon.com/")
});



