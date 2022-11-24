
Feature: ZipCode
   
   Scenario: Validar redirecionamento para tela de Login no Site com sucesso.
      Given que estou na página principal
      And faco login
      When clico no botao EnviarPara
      And digito o codigo postal para entrega
      Then devo validar a mudança no local para entrega