/// <reference types="cypress" />


import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

const basePage = new BasePage();
const loginPage = new LoginPage();

// const faker = require('faker')

export let campoBarraDePesquisa = "#twotabsearchtextbox"
export let botaoDePesquisa = "#nav-search-submit-button"
export let textoResultadoPesquisado = "#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold"
export let botaoLogin = "#nav-link-accountList"
export let btnZipCode = "#nav-global-location-data-modal-action"
export let entradaZipCode = "#GLUXZipUpdateInput"
export let localEntrega = "#glow-ingress-line2"

export default class MainPage{
    
    preencherBarraDePesquisa(texto){
        basePage.preencherInputComTeclaNoFinal(campoBarraDePesquisa, texto, "{enter}")
    }

    // clicarNoBotaoPesquisar(){
    //     basePage.clickForce(botaoDePesquisa)
    // }
    
    validarTextoPesquisado(texto){
        basePage.validarText(textoResultadoPesquisado, texto)
    }

    clicarNoBotaoZipCode(){
        basePage.clickForce(btnZipCode)
    }

    escreverZipCode(){
        basePage.preencherInput(entradaZipCode, Number)
    }

    validarMudancaLocalEntrega(){
        basePage.validarText(localEntrega, "New York")
    }

    login(){
        basePage.clickForce(botaoLogin)
        loginPage.escreverCampoEmail("robotesteqadbc@gmail.com")
        loginPage.clicarContinuar()
        loginPage.escreverCampoSenha("Me8YTChPf5j9KRn#")
        loginPage.clicarFazerLogin()
    }

    


}