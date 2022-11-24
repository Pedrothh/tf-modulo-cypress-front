
Feature: Login
   
   Scenario: Validar redirecionamento para tela de Login no Site com sucesso.
      Given que estou na página principal
      When clico no botão Faça seu Login
      Then devo validar redirecionamento para tela de login


   Scenario: Validar login no site com sucesso.
      Given que estou na página principal
      When clico no botão Faça seu Login
      And preencho o campo email ou telefone com dado valido
      And clico no botão continuar
      And digito a senha corretamente
      And clico no botão Fazer Login
      Then devo validar redirecionamento para tela principal estando logado.

      
   Scenario: Validar tentativa de login no site com usuario não cadastrado.
      Given que estou na página principal
      When clico no botão Faça seu Login
      And preencho o campo email ou telefone com dado de usuario nao cadastrado
      And clico no botão continuar
      Then devo validar mensagem de erro

  Scenario: Validar tentativa de login no site passando senha incorreta.
      Given que estou na página principal
      When clico no botão Faça seu Login
      And preencho o campo email ou telefone com dado valido
      And clico no botão continuar
      And digito a senha incorreta
      And clico no botão Fazer Login
      Then devo validar alerta

