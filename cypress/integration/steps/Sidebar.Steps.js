/// <reference types="cypress" />

import BasePage from "../pages/BasePage";
import MainPage from "../pages/MainPage";
const mainPage = new MainPage;
const basePage = new BasePage;
const test = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(2) > a"


/// BARRA DE PESQUISA - CENÁRIO POSITIVO ///


When("clico no botão ALL do header", () => {
    mainPage.clicarNoBotaoAll();
});

Then("devo visualizar a abertura da sidebar", () => {
	mainPage.validarVisibilidadeSidebar()
});




And("clico no botão ALL do header", () => {
	mainPage.clicarNoBotaoAll();
});

And("clico na opção AMAZON MUSIC", () => {
	mainPage.clicarNaOpcaoAmazonMusic();
});

When("clico na opção AMAZON MUSIC UNLIMITED", () => {
	mainPage.clicarNaOpcaoAmazonMusicUnlimited()
});

Then("devo ser redirecionado para a categoria AMAZON MUSIC UNLIMITED", () => {
    basePage.tempo(5000)
	mainPage.validarTextoAmazonMusicPage()
    basePage.tempo(5000)
});

