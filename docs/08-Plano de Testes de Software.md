# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

Publicaçao do aplicativo na App Store ou Google Store ou o Expo.dev


Conectividade de Internet para acesso às plataformas (APISs)

## Tipos de Testes

**Testes de Unidade**
-	Verificar individualmente cada componente da aplicação, como funções e métodos, para garantir que funcionem conforme o esperado.

**Testes de Integração**
- Avaliar como os diferentes módulos da aplicação se integram e se comunicam entre si.

**Testes de Aceitação**
- Garantir que a aplicação atenda aos critérios de aceitação definidos, incluindo requisitos funcionais e não funcionais.

**Testes de Desempenho**
- Avaliar o desempenho da aplicação, incluindo velocidade de carregamento, escalabilidade e capacidade de resposta sob carga.

**Testes de Segurança**
- Verificar se a aplicação é segura contra ameaças como ataques de injeção, autenticação inadequada e vulnerabilidades conhecidas.

**Teste de Responsividade**
-  Testa a capacidade do aplicativo de se adaptar a diferentes tamanhos de tela e dispositivos móveis, como smartphones e tablets.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

## Casos de Testes

| Caso de Teste | CT-01: Home |
|---|---|
| Requisitos Associados |  `RF-002`: Pesquisa de Cinemas por cidade. <br> |
| Objetivo do Teste |Verificar se está sendo possível a navegaçao dentre cidades. |
| Passos | `1.` Acessar o aplicativo. <br>  `2.` Escolher a cidade |
| Critérios de Êxito | `-`O Aplicativo deve abrir a pagina de cinemas de cada cidade de forma separada.  |
<br>

| Caso de Teste | CT-02: Cadastro de Usuário |
| --- | --- |
| **Requisitos Associados:** | RF-001: Cadastro de Usuário |
| **Objetivo do Teste:** | Verificar se o formulário de cadastro de usuário está acessível e funcional, e se a navegação entre as telas relacionadas é correta. |

**Passos:**

1. Acessar o aplicativo.
2. Verificar se a tela de cadastro é exibida corretamente, incluindo:
   - Campos para inserção de nome, e-mail e senha.
   - Botão de confirmação de cadastro.
3. Preencher o formulário com informações válidas.
4. Clicar no botão de confirmação de cadastro.
5. Verificar se a tela de confirmação de cadastro é exibida corretamente.

**Critérios de Êxito:**

- O formulário de cadastro deve ser acessível e apresentar os campos necessários.
- Ao preencher e confirmar o cadastro, o usuário deve ser direcionado para a tela de confirmação sem erros visíveis.
- O fluxo de navegação entre a tela inicial, de cadastro e de confirmação deve ser suave e sem interrupções.

**Observações:** 

- Este teste não aborda a funcionalidade de persistência de dados no backend, uma vez que ainda não foi implementada.
- A prioridade deste caso de teste é definida como ALTA de acordo com a prioridade do requisito RF-001.



