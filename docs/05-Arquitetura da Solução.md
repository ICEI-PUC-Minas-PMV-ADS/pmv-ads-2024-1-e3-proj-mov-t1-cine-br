# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

![Modelo ER](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t1-cine-br/assets/129304075/39fed8d8-2181-4e29-9218-a182c9ae76af)


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

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

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

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
