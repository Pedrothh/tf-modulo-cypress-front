

Feature: Mudar Idioma

   Scenario: Validar redirecionamento para página de escolha de idioma pelo botão da bandeira do header
      Given que estou na página principal
      When clico no botão da bandeira
      Then devo ser redirecionado para página de escolha de idioma 


   Scenario: Validar mudança de idioma através do redirecionamento pelo botão da bandeira do header
      Given que estou na página principal
      And clico no botão da bandeira
      And sou redirecionado para página de escolha de idioma
      And escolho um idioma válido
      When clico no botão Save Changes
      Then devo ser redirecionado para página inicial com a página no idioma selecionado
