/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

let campoBarraDePesquisa = "#twotabsearchtextbox"

let textoResultadoPesquisado = "#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold"
let botaoDeBandeira = "#icp-nav-flyout"
let inputDoIdiomaPortugues = "div.a-row:nth-child(11) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)"
let botaoSaveChanges = ".a-button-input"

let textoChangeCountry = "#icp-flyout-mkt-change > span > div"
let campoEscolherIdioma = "#nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > a:nth-child(4) > span > i"
let amazonNavLogo = "#nav-logo-sprites"

let divDropDown = "#nav-flyout-icp > div.nav-template.nav-flyout-content.nav-tpl-itemList > span:nth-child(2) > span"

export default class MainPage{
    
    preencherBarraDePesquisa(texto){
        basePage.preencherInputComTeclaNoFinal(campoBarraDePesquisa, texto, "{enter}")
    }

    
    validarTextoPesquisado(texto){
        basePage.validarText(textoResultadoPesquisado, texto)
    }

    clicarNoBotaoBandeira(){
        basePage.click(botaoDeBandeira)
    }

    selecionarIdiomaPortugues() {
        basePage.click(inputDoIdiomaPortugues)
    }

    clicarNoBotaoSaveChanges() {
        basePage.click(botaoSaveChanges)
    }


}