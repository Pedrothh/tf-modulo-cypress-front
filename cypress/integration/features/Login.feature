

Feature: Login

 Scenario: Validar login com sucesso
    Given que estou na página de login
    And que preencho o username valido
    And que preencho a senha valida
    When clico em login
    Then devo ser redirecionado para o dashboard

 Scenario: Tentar Validar login com dados invalidos
    Given que estou na página de login
    And que preencho o username invalido
    And que preencho a senha invalida
    When clico em login
    Then devo visualizar um texto escrito "Wrong username or password"