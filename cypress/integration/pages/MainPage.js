/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

export let campoBarraDePesquisa = "#twotabsearchtextbox"
export let botaoDePesquisa = "#nav-search-submit-button"
export let textoResultadoPesquisado = "#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold"

export default class MainPage{
    
    preencherBarraDePesquisa(texto){
        basePage.preencherInput(campoBarraDePesquisa, texto)
    }

    clicarNoBotaoPesquisar(){
        basePage.click(botaoDePesquisa)
    }
    
    validarTextoPesquisado(texto){
        basePage.validarText(textoResultadoPesquisado, texto)
    }


}