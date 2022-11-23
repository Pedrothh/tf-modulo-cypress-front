

Feature: Sidebar

   Scenario: Validar redirecionamento pela barra de pesquisa com sucesso
      Given que estou na página principal
      And que digito na barra de pesquisa "tv 55"
      When clico na lupa de pesquisa
      Then devo visualizar resultados para o texto do item pesquisado
      And devo ser redirecionado para a pagina de pesquisa

