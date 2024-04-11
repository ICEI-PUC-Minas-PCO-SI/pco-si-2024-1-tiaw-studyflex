<<<<<<< HEAD:docs/02 - relatório técnico/Relatorio Tecnico - TEMPLATE.md
# Informações do Projeto
`TÍTULO DO PROJETO`  

STUDYFLEX

`CURSO` 

SISTEMA DE INFORMAÇÃO

## Participantes

> ANA CLARA BELO BARCELOS
> LUCAS BORGES DE FREITAS
> MATEUS BOTELHO DE SOUZA
> RAFAEL MELCHIADES SOUZA SIMÕES
> RAPHAEL AUGUSTO FERREIRA DINIZ
> VICTOR ALVES ALC NTARA


# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

Apesar dos avanços tecnológicos e da abundância de recursos educacionais disponíveis, muitos estudantes ainda lutam para gerenciar efetivamente seu tempo, organizar seus estudos e manter um bom equilíbrio entre vida acadêmica e pessoal. As demandas crescentes do currículo escolar, juntamente com as responsabilidades extracurriculares e compromissos pessoais, frequentemente sobrecarregam os estudantes, resultando em estresse, procrastinação e, em última análise, um desempenho acadêmico abaixo do potencial.Além disso, a falta de ferramentas integradas e personalizadas para auxiliar os estudantes em seu processo de aprendizagem dificulta ainda mais a superação desses desafios. Muitos aplicativos e plataformas existentes oferecem apenas soluções parciais ou inflexíveis, incapazes de atender às necessidades específicas e preferências individuais dos alunos.


## Objetivos

Desenvolver uma plataforma educacional inovadora e altamente adaptável, projetada para ajudar os estudantes a otimizar seus estudos, gerenciar seu tempo de forma eficaz e alcançar seus objetivos acadêmicos de maneira eficiente.


## Justificativa

A demanda por uma ferramenta como o StudyFlex é clara diante dos obstáculos que os estudantes enfrentam no cenário educacional contemporâneo. O excesso de trabalho, a falta de organização e o desafio de equilibrar obrigações acadêmicas e pessoais são questões recorrentes que prejudicam o desempenho dos alunos. Além disso, a diversidade de estilos de aprendizagem e preferências individuais torna ainda mais complexa a oferta de soluções educacionais efetivas e abrangentes.
Neste cenário, o StudyFlex surge como uma solução imprescindível para preencher essa lacuna no mercado educacional. Ao disponibilizar uma plataforma versátil e personalizável, o StudyFlex capacita os estudantes a gerenciarem seus estudos de acordo com suas próprias necessidades e preferências. A habilidade de se ajustar a diferentes estilos de aprendizagem e ritmos individuais de estudo faz do StudyFlex uma ferramenta essencial para estudantes de todos os níveis educacionais.


## Público-Alvo

A StudyFlex é destinada a auxiliar estudantes na conquista de seus objetivos acadêmicos, logo abrange uma ampla faixa etária, desde alunos do fundamental até estudantes universitários e profissionais que buscam aprendizado contínuo.

Estudantes do Ensino Fundamental e Médio: Este grupo geralmente consiste em adolescentes que estão desenvolvendo habilidades de organização e autogestão.
Estudantes Universitários: Esse grupo inclui jovens adultos que estão frequentando cursos de graduação e pós-graduação. Eles podem se beneficiar da plataforma para gerenciar uma carga horária mais pesada de estudos, acompanhar múltiplas disciplinas e organizar projetos de pesquisa

Estudantes de Educação Continuada e Profissionais em Reciclagem: Este grupo é composto por adultos que já estão inseridos no mercado de trabalho e buscam gerenciar seu tempo de forma efetiva.

Estudantes com Necessidades Especiais: É importante considerar as necessidades de estudantes com deficiências físicas, sensoriais ou cognitivas. A plataforma é acessível e oferece recursos que atendam às suas necessidades específicas, como suporte para leitores de tela, legendas em vídeos, opções de personalização de fonte e design inclusivo.
 
# Especificações do Projeto

  A definição precisa do desafio e os aspectos mais significativos a serem abordados neste projeto foram estabelecidos por meio de uma imersão colaborativa conduzida pela equipe, envolvendo observações dos usuários em seu ambiente cotidiano e entrevistas diretas. Os insights obtidos durante esse processo foram sintetizados em personas detalhadas e histórias de usuários, fornecendo uma compreensão aprofundada das necessidades, desejos e comportamentos dos usuários-alvo.


## Personas e Mapas de Empatia

As personas identificadas durante o processo de compreensão do problema estão apresentadas nas figuras a seguir.


Ana Clara Martins
Idade: 23
Ocupação:  Freelancer em marketing digital, cursada em Publicidade e propaganda.
Personalidade:
Criativa, organizada, perfeccionista, ansiosa, dificuldade em dizer não.
Aplicativos:
Redes sociais
 Ferramentas de gestão de projetos
 Softwares de edição de imagem e vídeo. 
Motivações
 Ter sua própria agência de marketing digital, trabalhar com clientes que admira, criar campanhas inovadoras e impactantes, alcançar sucesso profissional e financeiro.


Não tolera:
Falta de profissionalismo.
 Desorganização.
 Atraso.
Hobbies, História
Praticar yoga (relaxar, aliviar o estresse, manter a saúde física e mental).



Por que Ana precisa do StudyFlex: Ana busca equilibrar sua vida pessoal e profissional, o que pode ser difícil para freelancers. O StudyFlex a ajuda a gerenciar seu tempo de forma mais eficiente, para que ela tenha mais tempo livre para seus hobbies e família. 
• Ferramentas de organização e planejamento 
• Dicas e conteúdos de produtividade 
• Integração com calendário 
• Recursos para gerenciamento de tempo.






Diogo da Silva
Idade: 21
Ocupação: Estagiário em uma empresa de tecnologia, cursando engenharia de software.
Personalidade: Diogo é curioso, pró ativo, porém uma pouco desorganizado com suas tarefas
Aplicativos:
Redes sociais 
Softwares de Desenvolvimento
Motivações
Ele deseja ter uma carreira gratificante e desafiadora, onde possa crescer profissionalmente e fazer a diferença no mundo da tecnologia. 


Não tolera:
Falta de Respeito
Perda de tempo
Hobbies, História
 Jogar futebol é uma forma de se desconectar do estresse da faculdade e do trabalho, enquanto se diverte e mantém um estilo de vida ativo.

 

Por que Diogo precisa do StudyFlex: Diogo tem uma carga acadêmica pesada com uma alta demanda de trabalhos e projetos para cumprir e precisa de uma maneira eficiente de acompanhar tudo e garantir que nada seja esquecido, gerenciando seu tempo e suas prioridades. Logo, podemos fazer uma listagem sobre as razões pelas quais o Diogo precisa dos serviços do StudyFlex:
• Evitar esquecimentos e atrasos 
• Gerenciamento de tempo 
• Desenvolvimento de hábitos produtivos 
• Registro de informações










Eduardo Santos
Idade: 45
Ocupação: Professor de História do Ensino Médio 
Personalidade:
Apaixonado por história, dedicado, paciente, exigente, perfeccionista.
Aplicativos:
Plataformas de ensino online
 Redes sociais
 Aplicativos de comunicação.
Motivações
Inspirar seus alunos a amar a história, formar cidadãos críticos e conscientes, contribuir para a construção de um futuro melhor.


Não tolera:
Falta de respeito por parte dos alunos.
 Desinteresse pela história.
 Desorganização.
Hobbies, História
Ler livros de história, assistir documentários, viajar para lugares históricos. 



Por que Eduardo precisa do StudyFlex: 
• Ferramentas para criação de conteúdo interativo. 
• Recursos para organização de materiais didáticos. 
• Interface intuitiva e amigável, com recursos fáceis de usar. 
• Suporte técnico eficiente e ágil.
















Diogo da Silva
Idade: 28
Ocupação:  Desenvolvedor de software
 Personalidade: : Analítico, dedicado, introvertido, apaixonado por tecnologia, tende a se isolar quando está focado em um projeto, gosta de resolver problemas complexos.
Deficiência: Deficiência auditiva 
Aplicativos:
 IDEs de programação
 Ferramentas de controle de versão (como Git)
 Documentação online
Fóruns de desenvolvimento
 Aplicativos de produtividade.
Motivações
 Ser reconhecido como um desenvolvedor de software de destaque, trabalhar em projetos inovadores, contribuir para avanços significativos na área da tecnologia, ter liberdade financeira. 


Não tolera:
Interrupções constantes durante seu fluxo de trabalho
 Ferramentas pouco acessíveis
Ambientes de trabalho desorganizados ou que não levem em consideração suas necessidades de acessibilidade.
Hobbies, História
 Jogar xadrez (estimular o pensamento estratégico, relaxar a mente, desafiar-se intelectualmente).


Por que Rafael precisa do StudyFlex: Rafael busca uma ferramenta que o ajude a otimizar seu tempo tanto para os estudos, quanto para o trabalho de forma com que possa gerenciar seus projetos e manter-se organizado, levando em consideração sua deficiência auditiva e suas necessidades específicas. 
• Funcionalidades de organização e gestão de tarefas, com suporte para acessibilidade. 
• Recursos de acompanhamento de tempo com opções visuais e táteis para estimar esforços e evitar sobrecarga.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Diogo              |  Ter um bloco de notas para fazer anotações de lembretes |    Para eu me organizar e lembrar dos meus compromissos. |                                
|Diogo                    |    Um calendário virtual para datas de provas e trabalhos. | Para me planejar e ter um bom prazo para estudar ou fazer os trabalhos e entregar no prazo certo.  |
|Ana Clara              |  Um recurso para gerenciar meu progresso nas minhas matérias. |  Para eu conseguir avaliar meu progresso e não me sobrecarregar em diversas matérias. | 
|Ana Clara             |  Ter recomendações e dicas sobre os estudos. | Para eu receber dicas e aprender mais sobre os estudos sem precisar gastar muito tempo.| 
|Eduardo             |  Uma interface flexível e fácil. |  Para ser um ambiente de fácil acesso e flexível para celulares e computadores. | 
|Eduardo              |  Contato com suporte técnico |   Para ter algum contato para sanar dúvidas referentes ao site. | 
|Rafael              |  Ferramentas de acessibilidade. |    Para o site auxiliar e incluir os alunos com deficiência  nos estudos. | 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 30/07/2024.|
|04| O aplicativo/site deve se restringir às tecnologias básicas da Web no Frontend ensinadas nas matérias de Desenvolvimentos de interfaces Web e Trabalho de aplicações  web aplicadas durante todo o 1- período.|



> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
=======
