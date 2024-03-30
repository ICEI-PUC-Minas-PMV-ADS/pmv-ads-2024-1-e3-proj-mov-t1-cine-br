# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![diagrama de classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-cine-br/assets/129304075/ad921277-691c-4ae1-ad00-58c50566e001)


## Modelo ER

![Modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-cine-br/assets/129304075/39fed8d8-2181-4e29-9218-a182c9ae76af)


## Esquema Relacional

### 1. Tabela Cidade
- id_cidade (Chave Primária)
- nome_cidade 
 
### 2. Tabela Cinema
- id_cinema (Chave Primária)
- nome_cinema
- endereco
- id_cidade (Chave Estrangeira referenciando id_cidade da tabela Cidade)

### 3. Tabela Filme
- id_filme (Chave Primária)
- nome_filme
- classificacao_etaria
- duracao

### 4. Tabela Sessao
- id_sessao (Chave Primária)
- id_filme (Chave Estrangeira referenciando id_filme da tabela Filme)
- id_cinema (Chave Estrangeira referenciando id_cinema da tabela Cinema)
- horario
- preco

### 5. Tabela Usuario
- id_usuario (Chave Primária)
- nome
- email
- senha

### 6. Tabela Ingresso
- id_ingresso (Chave Primária)
- id_sessao (Chave Estrangeira referenciando id_sessao da tabela Sessao)
- id_usuario (Chave Estrangeira referenciando id_usuario da tabela Usuario)
- quantidade
- total

### Descrição dos Relacionamentos:
- Cidade -> Cinema: Um para muitos (Uma cidade pode ter vários cinemas, mas um cinema pertence a uma única cidade).
- Cinema -> Sessao: Um para muitos (Um cinema pode ter várias sessões, mas uma sessão pertence a um único cinema).
- Filme -> Sessao: Um para muitos (Um filme pode ter várias sessões, mas uma sessão pertence a um único filme).
- Usuario -> Ingresso: Um para muitos (Um usuário pode comprar vários ingressos, mas um ingresso pertence a um único usuário).
- Sessao -> Ingresso: Um para muitos (Uma sessão pode ter vários ingressos vendidos, mas um ingresso pertence a uma única sessão).


## Modelo Físico

### Tabela Cidade:

![Esquema Relacional - Modelo Fisico vs2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-cine-br/assets/129304075/19bd050e-d98d-4d71-99b2-62c37d2900a4)

## Tecnologias Utilizadas

### Linguagens de Programação:
- JavaScript: Utilizada para o desenvolvimento tanto do frontend quanto do backend do aplicativo.

### Framework de Desenvolvimento Mobile:
- React Native: Framework JavaScript para o desenvolvimento de aplicativos móveis multiplataforma, permitindo a criação de uma única base de código para Android e iOS.

### Banco de Dados:
- SQLite: Um sistema de gerenciamento de banco de dados relacional que será utilizado para armazenar informações sobre os cinemas, filmes e reservas de ingressos.

### Arquitetura de Sistema:
- A arquitetura será cliente-servidor, onde o aplicativo móvel (cliente) se comunicará com um servidor via REST API para realizar operações como reserva de ingressos e consulta de informações sobre os filmes em cartaz.

### IDE de Desenvolvimento:
- Visual Studio Code: Será utilizada como a IDE principal para o desenvolvimento do código do aplicativo.
- Expo.dev

### Ferramenta de Versionamento:
- Git: Sistema de controle de versão será utilizado para o gerenciamento do código-fonte do projeto, permitindo o acompanhamento das alterações, colaboração entre os membros da equipe e controle preciso das versões do software.

## Fluxo de Interação do Usuário

1. O usuário abre o aplicativo em seu dispositivo móvel.
2. O aplicativo, desenvolvido em React Native, exibe a interface do usuário, permitindo que ele navegue pelos filmes em cartaz e selecione um para visualizar detalhes.
3. Quando o usuário decide reservar um assento, o aplicativo envia uma solicitação para o servidor backend através de uma chamada de API REST.
4. O servidor, que implementa a lógica de negócios, processa a solicitação, verifica a disponibilidade de ingressos e realiza a reserva no banco de dados SQLite.
5. O servidor responde ao aplicativo com o status da reserva.
6. O aplicativo exibe uma confirmação da reserva ao usuário e atualiza a interface para refletir as alterações.
7. O usuário pode então visualizar seus ingressos reservados e, se desejar, finalizar a compra através do aplicativo.

Durante todo o processo, o Git é utilizado para o controle de versão do código-fonte, permitindo o desenvolvimento colaborativo e o gerenciamento eficiente das alterações.

## Hospedagem e Lançamento na Vercel

Para hospedar e lançar a plataforma, optamos por utilizar a plataforma Vercel.

1. **Facilidade de Uso:** A Vercel oferece uma interface intuitiva, facilitando o processo de hospedagem e lançamento da plataforma.

2. **Integração com o Git:** A Vercel possui integração com sistemas de controle de versão como o Git, permitindo que o código do projeto seja facilmente vinculado e atualizado na plataforma.

3. **Deploy:** A Vercel suporta o conceito de deploy contínuo, o que significa que cada vez que houver uma alteração no repositório Git associado ao projeto, a plataforma automaticamente realiza o deploy da nova versão da aplicação.

4. **Suporte a Tecnologias Modernas:** A Vercel suporta uma ampla gama de tecnologias modernas, incluindo JavaScript, React, Node.js, entre outras, o que torna a plataforma adequada para o nosso projeto desenvolvido em React Native.

### O processo de hospedagem e lançamento da plataforma na Vercel envolve os seguintes passos:

1. **Configuração do Projeto:** O projeto é configurado na plataforma Vercel, onde definimos as configurações básicas, como o nome do projeto, a integração com o repositório Git e outras opções relevantes.

2. **Definição das Configurações de Build:** Configuramos as opções de build do projeto na Vercel.

3. **Deploy Inicial:** Realizamos o primeiro deploy da plataforma, onde o código do projeto é enviado para a Vercel e a aplicação é construída e disponibilizada online.

4. **Testes e Validação:** Após o deploy inicial, realizamos testes e validações para garantir que a plataforma esteja funcionando conforme o esperado.

5. **Lançamento Oficial:** Uma vez que a plataforma tenha sido testada e validada com sucesso, realizamos o lançamento oficial.

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
