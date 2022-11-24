/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

let campoBarraDePesquisa = "#twotabsearchtextbox";

let textoResultadoPesquisado = "#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold";
let botaoDeBandeira = "#icp-nav-flyout";
let inputDoIdiomaPortugues = "div.a-row:nth-child(11) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)";
let botaoSaveChanges = ".a-button-input";

let textoChangeCountry = "#icp-flyout-mkt-change > span > div";
let campoEscolherIdioma = "#nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > a:nth-child(4) > span > i";
let amazonNavLogo = "#nav-logo-sprites";

let divDropDown = "#nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(2) > span";


let botaoAll = "#nav-hamburger-menu";
let botaoAll2 = "#nav-hamburger-menu > i"

let sidebar = "#hmenu-content > ul.hmenu.hmenu-visible"
let sidebar2 = "ul.hmenu:nth-child(1) > li:nth-child(1)"

let campoAmazonMusic = "ul.hmenu:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
let campoAmazonMusic2 = "ul.hmenu:nth-child(1) > li:nth-child(2)";
let campoAmazonMusic3 = "#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(2) > a"


let campoAmazonMusicUnlimited2 = "ul.hmenu:nth-child(2) > li:nth-child(3)";
let campoAmazonMusicUnlimited = "ul.hmenu:nth-child(2) > li:nth-child(3) > a:nth-child(1)"

let campoTextoAmazonMusicUnlimited = "a.nav-hasArrow:nth-child(2) > span:nth-child(1)"

export default class MainPage{
    
    preencherBarraDePesquisa(texto){
        basePage.preencherInputComTeclaNoFinal(campoBarraDePesquisa, texto, "{enter}");
    }

    
    validarTextoPesquisado(texto){
        basePage.validarText(textoResultadoPesquisado, texto);
    }

    clicarNoBotaoBandeira(){
        basePage.click(botaoDeBandeira);
    }

    selecionarIdiomaPortugues() {
        basePage.click(inputDoIdiomaPortugues);
    }

    clicarNoBotaoSaveChanges() {
        basePage.click(botaoSaveChanges);
    }



    clicarNoBotaoAll(){
        basePage.tempo(2000)
        basePage.clickForce(botaoAll);
    }

    validarVisibilidadeSidebar(){
        basePage.tempo(2000)
        basePage.validarVisibilidade(sidebar);
    }

    clicarNaOpcaoAmazonMusic(){
        basePage.tempo(2000)
        basePage.clickForce(campoAmazonMusic); 
    }

    clicarNaOpcaoAmazonMusicUnlimited(){
        basePage.tempo(2000)
        basePage.clickForce(campoAmazonMusicUnlimited);
    }

    validarUrlAmazonMusic() {
        basePage.validarContainsUrl("unlimited")
    }

    validarTextoAmazonMusicPage() {
        basePage.validarText(campoTextoAmazonMusicUnlimited, "Amazon Music Unlimited")
    }



    


    


}