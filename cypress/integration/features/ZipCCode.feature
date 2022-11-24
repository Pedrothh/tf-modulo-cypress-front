
Feature: ZipCode

         
   Scenario: Validar redirecionamento para tela de Login no Site com sucesso.
      Given que estou na página principal
      And faco login
      When clico no botao EnviarPara
      And digito o codigo postal para entrega
      And clico em Apply
      And confirmo no botão Done
      Then devo validar a mudança no local para entrega