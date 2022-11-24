/// <reference types="cypress" />


import BasePage from "./BasePage";
const basePage = new BasePage();

export let btnPaginaLogin = "#nav-link-accountList"
export let entradaCampoEmail = "#ap_email"
export let entradaCampoSenha = "#ap_password"
export let btnContinuar = "#continue"
export let btnFazerLogin = "#signInSubmit"
export let validarLogin = "#nav-link-accountList-nav-line-1"
export let validarMensagemErro = "#auth-error-message-box > div > div > ul > li"
export let validarMensagemAlertaSenha = "#auth-warning-message-box > div > div > ul > li"
export let validarRedirecionamentoTelaLogin = "#authportal-main-section > div:nth-child(2) > div > div.a-section > form > div > div > div > h1"

export default class LoginPage{

    redirecionamentoTelaLogin(){
        basePage.clickForce(btnPaginaLogin)
    }

    escreverCampoEmail(email){
        basePage.preencherInput(entradaCampoEmail, email)
    }
    
    escreverCampoSenha(senha){
        basePage.preencherInput(entradaCampoSenha, senha)
    }

    clicarContinuar(){
        basePage.click(btnContinuar)
    }

    clicarFazerLogin(){
        basePage.click(btnFazerLogin)
    }
    

    tentativaLoginUserNaoCadastrado(){
        basePage.click(btnPaginaLogin)
        basePage.preencherInput(entradaCampoEmail, "emailinvalido@gmail.com")
        basePage.click(btnContinuar)

    }

    tentativaLoginSenhaIncorreta(){
        basePage.click(btnPaginaLogin)
        basePage.preencherInput(entradaCampoEmail, "robotesteqadbc@gmail.com")
        basePage.click(btnContinuar)
        basePage.preencherInput(entradaCampoSenha, "Me8YTChjgdnhv")
        basePage.click(btnFazerLogin)

    }

}

