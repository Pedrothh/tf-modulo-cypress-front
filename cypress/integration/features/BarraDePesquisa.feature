

Feature: Barra De Pesquisa
   
   Scenario: Validar redirecionamento pela barra de pesquisa com sucesso
      Given que estou na página principal
      When digito na barra de pesquisa tv 55 e aperto enter
      Then devo visualizar resultados para o texto do item pesquisado
      And devo ser redirecionado para a página de pesquisa

   Scenario: Tentar validar o não redirecionamento pela barra de pesquisa quando não houver texto inserido
      Given que estou na página principal
      When não preencho o campo de texto na barra de pesquisa e aperto enter
      Then devo permanecer na página principal

