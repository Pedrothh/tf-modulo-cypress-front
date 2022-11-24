

Feature: Sidebar

   Scenario: Validar abertura da sidebar ao clicar no botão ALL com sucesso
      Given que estou na página principal
      When clico no botão ALL do header
      Then devo visualizar a abertura da sidebar

   Scenario: Validar redirecionamento para categoria específica através da Sidebar com sucesso
      Given que estou na página principal
      And clico no botão ALL do header
      And clico na opção AMAZON MUSIC
      When clico na opção AMAZON MUSIC UNLIMITED
      Then devo ser redirecionado para a categoria AMAZON MUSIC UNLIMITED