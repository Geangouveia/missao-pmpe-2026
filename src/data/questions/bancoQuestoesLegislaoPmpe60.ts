import type { QuizQuestion } from '../../types/game';

/**
 * 60 QUESTÕES DE ELITE: LEGISLAÇÃO DA PMPE (FOCO UPE & INSTITUTO AOCP)
 * Foco estrito no Estatuto dos Policiais Militares de PE (Lei nº 6.783/1974),
 * Lei Complementar nº 108/2008, Código Disciplinar e Constituição de Pernambuco (Arts. 100 a 103).
 * Comentadas tintim por tintim com dicas, fundamentação legal e análise de alternativas.
 */
export const BANCO_LEGISLACAO_PMPE_60: QuizQuestion[] = [
{
    "id": "leg_upe_001",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Posto e Graduação (Arts. 14 e 15)",
    "question": "(UPE / PMPE) De acordo com o Estatuto dos Policiais Militares do Estado de Pernambuco (Lei nº 6.783/74), o grau hierárquico dos Oficiais, conferido por ato do Governador do Estado e confirmado em Carta Patente, denomina-se:",
    "options": [
      "Posto.",
      "Graduação.",
      "Função militar privativa.",
      "Cargo de comando.",
      "Investidura oficial."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 14 da Lei Estadual nº 6.783/1974: 'Posto é o grau hierárquico do oficial, conferido por ato do Governador do Estado e confirmado em Carta Patente ou Folhinha de Assentamento'. Já a Graduação é o grau hierárquico da praça, conferido pelo Comandante-Geral.",
    "fundamentacaoLegal": "Art. 14 da Lei Estadual nº 6.783/1974.",
    "hint": "Oficial = Posto (Governador e Carta Patente). Praça = Graduação (Comandante-Geral).",
    "difficulty": "easy",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "POSTO é de OFICIAL (Governador dá a Carta Patente). GRADUAÇÃO é de PRAÇA (Comandante-Geral concede).",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Função militar é o conjunto de atribuições, não o grau hierárquico em si.",
      "3": "Cargo é o lugar previsto na organização policial militar.",
      "4": "Investidura é o ato geral de provimento, não o termo estatutário."
    },
    "analiseAlternativas": {
      "A": "Correta. Literalidade do art. 14 do Estatuto da PMPE.",
      "B": "Incorreta. Graduação refere-se exclusivamente às praças.",
      "C": "Incorreta. Trata-se do exercício de atividades inerentes ao cargo.",
      "D": "Incorreta. Cargo é preenchido pelo policial com o respectivo grau hierárquico.",
      "E": "Incorreta. Termo genérico de direito administrativo."
    }
  },
  {
    "id": "leg_upe_002",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Círculos Hierárquicos (Art. 13)",
    "question": "(UPE / PMPE) Os círculos hierárquicos são âmbitos de convivência entre os policiais militares da mesma categoria e têm a finalidade de desenvolver o espírito de camaradagem. De acordo com o Estatuto da PMPE, assinale a opção que indica CORRETAMENTE os militares que integram o círculo de 'Oficiais Subalternos':",
    "options": [
      "Coronéis e Tenentes-Coronéis.",
      "Primeiros Tenentes e Segundos Tenentes.",
      "Capitães e Primeiros Tenentes.",
      "Majores e Capitães.",
      "Aspirantes-a-Oficial e Subtenentes."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 13 do Estatuto da PMPE: Os Oficiais Subalternos são o Primeiro Tenente e o Segundo Tenente. Capitães são Oficiais Intermediários; Majores, Tenentes-Coronéis e Coronéis são Oficiais Superiores.",
    "fundamentacaoLegal": "Art. 13 da Lei Estadual nº 6.783/1974.",
    "hint": "Subalternos = 1º Tenente e 2º Tenente. Capitão = Intermediário. Major/TC/Cel = Superiores.",
    "difficulty": "easy",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Subalternos = Tenentes (1º e 2º). Intermediário = Capitão (faz o meio de campo). Superiores = Major, TC e Cel.",
    "porqueErrou": {
      "0": "Coronéis e Tenentes-Coronéis são Oficiais Superiores.",
      "2": "Capitão é Oficial Intermediário, não subalterno.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Aspirante é Praça Especial; Subtenente é Praça de topo."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Pertencem ao círculo de Oficiais Superiores.",
      "B": "Correta. 1º e 2º Tenentes são exatamente os Oficiais Subalternos.",
      "C": "Incorreta. Capitão é o único Oficial Intermediário.",
      "D": "Incorreta. Major é Superior e Capitão é Intermediário.",
      "E": "Incorreta. Aspirante-a-Oficial é praça especial."
    }
  },
  {
    "id": "leg_upe_003",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Praças Especiais (Art. 16)",
    "question": "(UPE / PMPE) No tocante à escala hierárquica e círculos de convivência da PMPE, são consideradas 'Praças Especiais':",
    "options": [
      "Subtenentes e Primeiros Sargentos.",
      "Cabos e Soldados de 1ª Classe.",
      "Aspirantes-a-Oficial e Alunos do Curso de Formação de Oficiais (Cadetes).",
      "Sargentos com mais de 20 anos de serviço.",
      "Militares da Reserva Remunerada convocados para o serviço ativo."
    ],
    "correctIndex": 2,
    "explanation": "O art. 16 do Estatuto da PMPE dispõe claramente que são Praças Especiais: os Aspirantes-a-Oficial e os Alunos dos Cursos de Formação de Oficiais (Cadetes/Alunos-Oficiais). Eles estão em situação de transição para o oficialato.",
    "fundamentacaoLegal": "Art. 16 da Lei Estadual nº 6.783/1974.",
    "hint": "Praça Especial = Aspirante-a-Oficial e Cadete/Aluno-Oficial.",
    "difficulty": "easy",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Praça Especial é quem está 'na porta' do oficialato: Aspirante e Aluno-Oficial!",
    "porqueErrou": {
      "0": "Subtenentes e Sargentos são Praças de graduação regular.",
      "1": "Cabos e Soldados são Praças regulares.",
      "3": "Tempo de serviço não transforma praça regular em praça especial.",
      "4": "Militares designados da reserva continuam em sua graduação/posto de origem."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Praças regulares do círculo de Subtenentes e Sargentos.",
      "B": "Incorreta. Círculo de Cabos e Soldados.",
      "C": "Correta. Aspirantes e Alunos-Oficiais são as únicas praças especiais estatutárias.",
      "D": "Incorreta. Permanecem praças regulares.",
      "E": "Incorreta. Mantêm a hierarquia do posto ou graduação anterior."
    }
  },
  {
    "id": "leg_upe_004",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Precedência Hierárquica em igualdade de posto (Art. 17)",
    "question": "(UPE / PMPE) Em igualdade de posto ou graduação entre policiais militares da ativa, o critério primordial para estabelecer a precedência hierárquica entre eles é:",
    "options": [
      "A idade civil mais avançada.",
      "O número de condecorações militares por bravura.",
      "A nota final obtida no concurso público de ingresso.",
      "A antiguidade no posto ou na graduação, salvo quando houver precedência funcional fixada em lei.",
      "A quantidade de filhos e dependentes econômicos."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 17 da Lei Estadual nº 6.783/74: 'A precedência entre policiais militares da ativa do mesmo grau hierárquico é assegurada pela antiguidade no posto ou na graduação, salvo nos casos de precedência funcional estabelecida em lei ou regulamento'. A idade civil só é critério de desempate subsidiário.",
    "fundamentacaoLegal": "Art. 17 da Lei Estadual nº 6.783/1974.",
    "hint": "Regra geral: Antiguidade no posto/graduação. Idade só entra se a data da promoção for idêntica.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Quem foi promovido antes manda em quem foi promovido depois: ANTIGUIDADE NO POSTO!",
    "porqueErrou": {
      "0": "A idade só é usada para desempatar quando ambos foram promovidos exatamente na mesma data.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "A nota de concurso só ordena a antiguidade inicial no momento da nomeação/formatura.",
      "4": "Dependentes não têm relevância na hierarquia funcional militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Idade é critério sucessivo de desempate.",
      "B": "Incorreta. Medalhas e condecorações não alteram antiguidade formal.",
      "C": "Incorreta. Aplica-se apenas na saída do curso de formação inicial.",
      "D": "Correta. Regra do art. 17: antiguidade no posto ou graduação.",
      "E": "Incorreta. Totalmente alheio ao direito militar."
    }
  },
  {
    "id": "leg_upe_005",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Ativa vs Inatividade (Art. 18)",
    "question": "(UPE / PMPE) Em igualdade de posto ou de graduação, os policiais militares da ativa têm precedência sobre os policiais militares da inatividade (reserva e reformados). Essa assertiva, perante o Estatuto dos Policiais Militares de Pernambuco, é:",
    "options": [
      "Falsa, pois a antiguidade é contada ininterruptamente, mesmo após a ida para a reserva.",
      "Falsa, salvo durante estado de defesa e sítio.",
      "Falsa, aplicando-se apenas se o militar da reserva tiver sido reformado por invalidez.",
      "Verdadeira apenas no âmbito da Capital (Recife), mas inexistente no interior do Estado.",
      "Verdadeira, pois os policiais da ativa têm sempre precedência sobre os da inatividade em igualdade de posto ou graduação."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 18 do Estatuto da PMPE: 'Em igualdade de posto ou de graduação, os policiais militares em atividade têm precedência sobre os da inatividade'. O militar em serviço operacional ativo tem precedência formal sobre o colega que já está na reserva ou reformado.",
    "fundamentacaoLegal": "Art. 18 da Lei Estadual nº 6.783/1974.",
    "hint": "ATIVA SEMPRE TEM PRECEDÊNCIA sobre a INATIVIDADE em igualdade de posto/graduação.",
    "difficulty": "easy",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Ativa > Inatividade no mesmo posto! Um Capitão da ativa precede um Capitão da reserva.",
    "porqueErrou": {
      "0": "A contagem de tempo para antiguidade ativa cessa com a transferência para a inatividade.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Aplica-se a toda inatividade (reserva remunerada e reforma).",
      "3": "A regra estatutária vigora em todo o território de Pernambuco e onde a PMPE atuar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O tempo na reserva não supera a precedência da ativa.",
      "B": "Incorreta. Trata-se de preceito ordinário e permanente.",
      "C": "Incorreta. Engloba toda modalidade de inatividade.",
      "D": "Incorreta. A lei estadual se aplica a todo o Estado de Pernambuco.",
      "E": "Correta. Regra expressa do art. 18 da Lei 6.783/74."
    }
  },
  {
    "id": "leg_upe_006",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Deveres e Ética Policial Militar (Arts. 27 a 31)",
    "question": "(UPE / PMPE) Sobre a ética policial militar e os deveres prescritos na Lei Estadual nº 6.783/1974, é EXPRESSAMENTE VEDADO ao policial militar da ativa:",
    "options": [
      "Tomar parte em atividades comerciais ou industriais, exceto como acionista, quotista ou comanditário.",
      "Votar em eleições municipais, estaduais e federais.",
      "Praticar esportes coletivos e tiro esportivo civil.",
      "Matricular-se em faculdades e cursos de pós-graduação civis.",
      "Casar-se sem autorização prévia e escrita do Comandante-Geral."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 29, § 1º da Lei nº 6.783/74: Ao policial-militar da ativa é vedado comerciar ou tomar parte na administração ou gerência de sociedade ou dela ser sócio ou participar, EXCETO como acionista ou quotista em sociedade anônima ou por quotas de responsabilidade limitada, ou como comanditário.",
    "fundamentacaoLegal": "Art. 29, § 1º da Lei Estadual nº 6.783/1974.",
    "hint": "Policial da ativa NÃO PODE ser administrador/gerente de comércio, só acionista/quotista passivo.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Pode investir (acionista/quotista), mas NÃO PODE GERENCIAR comércio!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Esporte e lazer são direitos livres do cidadão militar fora do horário de serviço.",
      "3": "Estudos e aprimoramento acadêmico são incentivados e permitidos.",
      "4": "Autorização para casar é exigência anacrônica abolida há décadas nas corporações."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra explícita do art. 29, § 1º do Estatuto da PMPE.",
      "B": "Incorreta. O voto é direito do militar alistável.",
      "C": "Incorreta. Atividade lícita e sem proibição legal.",
      "D": "Incorreta. O militar pode estudar em instituições civis.",
      "E": "Incorreta. Não existe exigência de autorização de comando para casamento."
    }
  },
  {
    "id": "leg_upe_007",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Manifestação Coletiva e Política (Art. 30)",
    "question": "(UPE / PMPE) Conforme o Estatuto dos Policiais Militares de Pernambuco e o ordenamento militar, são proibidas manifestações coletivas, tanto sobre atos de superiores quanto as de caráter reivindicatório ou político. Em relação aos militares da ativa, é correto afirmar que:",
    "options": [
      "Podem filiar-se a partidos políticos desde que tenham mais de 10 anos de serviço.",
      "Não podem estar filiados a partidos políticos enquanto estiverem no serviço ativo.",
      "Têm autorização para fundar sindicatos militares e decretar greve mediante aviso prévio de 72 horas.",
      "Podem externar livremente em redes sociais críticas operacionais a planos de segurança do Governador.",
      "Podem promover reuniões político-partidárias no interior de quartéis e batalhões."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 142, § 3º, V da CF/88 c/c Art. 30 da Lei 6.783/74: O militar, enquanto em serviço ativo, não pode estar filiado a partidos políticos. Além disso, a greve e a sindicalização são categoricamente proibidas aos militares (Art. 142, § 3º, IV da CF/88 e Súmula Vinculante 43).",
    "fundamentacaoLegal": "Art. 30 da Lei Estadual nº 6.783/74 e Art. 142, § 3º da CF/88.",
    "hint": "Militar da ativa NUNCA PODE filiar-se a partido nem fazer greve/sindicato.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Militar na Ativa = ZERO FILIAÇÃO PARTIDÁRIA, ZERO SINDICATO, ZERO GREVE!",
    "porqueErrou": {
      "0": "A filiação partidária é expressamente vedada ao militar enquanto estiver na ativa, independente dos anos de serviço.",
      "2": "Aos militares são expressamente proibidas a sindicalização e a greve (CF/88 art. 142).",
      "3": "Comentários e críticas públicas desautorizadas ferem a disciplina e a hierarquia.",
      "4": "Atividades político-partidárias são terminantemente proibidas nos quartéis."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Vedação constitucional absoluta enquanto na ativa.",
      "B": "Correta. Regra basilar de neutralidade política da caserna.",
      "C": "Incorreta. Greve e sindicato são vedados aos militares estaduais.",
      "D": "Incorreta. Constitui transgressão da disciplina militar.",
      "E": "Incorreta. É vedada atividade partidária em recintos militares."
    }
  },
  {
    "id": "leg_upe_008",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Prerrogativas de Prisão Militar (Art. 73)",
    "question": "(UPE / PMPE) O Artigo 73 do Estatuto dos Policiais Militares de Pernambuco estabelece garantias e prerrogativas processuais aos membros da corporação. Se um policial militar da ativa for preso antes de decisão judicial transitada em julgado, ele:",
    "options": [
      "Será recolhido imediatamente a presídio de segurança máxima comum, isolado em cela individual.",
      "Perderá imediatamente metade do seu soldo e será desligado do quadro de acesso a promoções.",
      "Somente poderá ser recolhido a Presídio Militar da Corporação ou, na falta deste, a dependência de Organização Policial Militar (OPM), cujo comandante seja de posto superior ao do preso.",
      "Ficará em prisão domiciliar sem necessidade de escolta militar.",
      "Deverá ser transferido para o presídio militar das Forças Armadas em Brasília."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 73 da Lei Estadual nº 6.783/74: O policial militar preso antes de sentença transitada em julgado somente pode ser recolhido a Presídio Militar ou quartel de OPM, cujo comandante/chefe tenha posto superior ou precedência hierárquica sobre o preso, assegurando o respeito à hierarquia militar.",
    "fundamentacaoLegal": "Art. 73 da Lei Estadual nº 6.783/1974.",
    "hint": "Prisão antes do trânsito em julgado = Presídio Militar ou OPM com comandante de grau superior.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Policial preso provisoriamente NUNCA vai para cadeia comum: vai para OPM ou Presídio Militar!",
    "porqueErrou": {
      "0": "Policial militar jamais pode ser recolhido a presídio civil comum enquanto provisório.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Prisão domiciliar é exceção médica/humanitária judicial, não prerrogativa automática de caserna.",
      "4": "A custódia é cumprida no âmbito estadual da PMPE."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Veda-se expressamente o convívio com presos civis comuns.",
      "B": "Incorreta. Não há perda de soldo automática antes do julgamento final.",
      "C": "Correta. Literalidade das prerrogativas asseguradas pelo art. 73 do Estatuto.",
      "D": "Incorreta. Fica sob custódia na Organização Policial Militar.",
      "E": "Incorreta. Não há previsão de transferência para Brasília."
    }
  },
  {
    "id": "leg_upe_009",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Uso de Uniformes e Armas (Arts. 74 e 75)",
    "question": "(UPE / PMPE) Em relação ao uso dos uniformes da PMPE, o Estatuto dispõe que eles são privativos dos policiais militares e simbolizam a autoridade militar. Sobre o uso do uniforme pelo militar na inatividade, assinale a afirmativa CORRETA:",
    "options": [
      "É totalmente proibido, sob pena de crime de desobediência e perda dos proventos.",
      "Depende de autorização expressa e individualizada do Secretário de Defesa Social.",
      "É livre e irrestrito para qualquer atividade cotidiana e passeio público.",
      "É permitido em solenidades militares, cerimônias cívicas estaduais e, quando autorizado pelo Comandante-Geral, em atos sociais solenes.",
      "Só pode ser utilizado se o militar tiver sido reformado em ato de bravura comprovada."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 75 do Estatuto da PMPE: O militar na inatividade pode usar o uniforme em solenidades cívicas, comemorações militares oficiais e, quando autorizado pelo Comandante-Geral, em solenidades sociais de gala.",
    "fundamentacaoLegal": "Art. 75 da Lei Estadual nº 6.783/1974.",
    "hint": "Inativo fardado? Apenas em solenidades militares, cívicas ou eventos solenes autorizados.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Inativo pode fardar? SIM, em solenidades oficiais e cívicas (não para passear na feira!).",
    "porqueErrou": {
      "0": "Não é proibido de forma absoluta; solenidades cívico-militares permitem o uso solene.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "O uso cotidiano e irrestrito na inatividade é vedado.",
      "4": "Aplica-se tanto a reformados quanto aos da reserva remunerada ordinária."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Há permissão regulamentar expressa para solenidades.",
      "B": "Incorreta. A autoridade militar competente é o Comandante-Geral.",
      "C": "Incorreta. É vedado o uso no dia a dia comum de rua.",
      "D": "Correta. Regra do art. 75 para policiais militares inativos.",
      "E": "Incorreta. Não é restrito a atos de bravura."
    }
  },
  {
    "id": "leg_upe_010",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Agregação e Prazo para Mandato Eletivo (Art. 77)",
    "question": "(UPE / PMPE) De acordo com o Estatuto da PMPE e a disciplina constitucional dos militares candidatos a cargo político, o policial militar da ativa com 10 (dez) ou mais anos de serviço que se candidatar a cargo eletivo:",
    "options": [
      "Será demitido sumariamente no ato da inscrição partidária.",
      "Ficará na ativa e acumulará o soldo com o subsídio de Deputado ou Vereador.",
      "Deverá afastar-se definitivamente sem direito a qualquer remuneração futura.",
      "Poderá continuar exercendo o policiamento ostensivo e portando arma de fogo durante toda a campanha eleitoral.",
      "Será agregado e, se eleito, passará automaticamente, no ato da diplomação, para a inatividade na reserva remunerada."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 14, § 8º da CF/88 e Art. 77 da Lei 6.783/74: O militar com mais de 10 anos de serviço que se candidatar será agregado pela autoridade competente e, se eleito, no ato da diplomação passará para a inatividade (reserva remunerada com proventos proporcionais). Se tiver menos de 10 anos, afasta-se definitivamente da atividade militar.",
    "fundamentacaoLegal": "Art. 77 da Lei Estadual nº 6.783/74 e Art. 14, § 8º da CF/88.",
    "hint": "Mais de 10 anos: Agregado durante a campanha. Eleito? Reserva remunerada na diplomação!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "+10 anos = Agregação. Diplomação = Reserva Remunerada! -10 anos = Afastamento definitivo.",
    "porqueErrou": {
      "0": "Com 10 ou mais anos de serviço ele é agregado, não demitido.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "A CF/88 assegura passagem para a reserva remunerada proporcional se for eleito.",
      "3": "O militar agregado para disputar eleição fica afastado do serviço operacional das ruas."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Aplica-se apenas com menos de 10 anos e como demissão/licenciamento ex-officio.",
      "B": "Incorreta. Vedada a acumulação remuneratória.",
      "C": "Incorreta. Preserva os direitos previdenciários e a reserva remunerada.",
      "D": "Incorreta. Fica afastado das funções policiais ostensivas.",
      "E": "Correta. Regra clássica do militar elegível com mais de 10 anos de farda."
    }
  },
  {
    "id": "leg_upe_011",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) De acordo com o Estatuto da PMPE, o militar que permanecer desaparecido por mais de 30 (trinta) dias consecutivos em operações militares ou extraviado em cumprimento de dever oficial é oficialmente considerado:",
    "options": [
      "Extraviado.",
      "Desertor qualificado.",
      "Ausente sem licença.",
      "Agregado extraordinário.",
      "Excluído a bem da corporação."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 85 do Estatuto da PMPE: É considerado extraviado o policial militar da ativa que, no desempenho de qualquer serviço, em viagem, em operações policiais-militares ou em caso de calamidade pública, tiver paradeiro ignorado por mais de 30 (trinta) dias.",
    "fundamentacaoLegal": "Art. 85 da Lei Estadual nº 6.783/1974.",
    "hint": "Mais de 30 dias sem paradeiro conhecido = EXTRAVIADO.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "30 dias sumido em serviço = EXTRAVIADO. 8 dias sem aparecer no quartel = DESERTOR.",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Ausente é quem falta por mais de 24 horas.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Literalidade do art. 85: extraviado ao passar de 30 dias.",
      "B": "Incorreta. Deserção envolve ausência injustificada no quartel por mais de 8 dias.",
      "C": "Incorreta. Ausente é o prazo inicial após 24 horas.",
      "D": "Incorreta. O militar extraviado é agregado posteriormente conforme o caso.",
      "E": "Incorreta. A exclusão definitiva só ocorre após os trâmites legais do extravio."
    }
  },
  {
    "id": "leg_upe_012",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) O policial militar que se ausentar de sua Organização Policial Militar (OPM), sem licença ou autorização, por período superior a 24 (vinte e quatro) horas consecutivas, é formalmente declarado:",
    "options": [
      "Desertor de primeira classe.",
      "Ausente.",
      "Extraviado.",
      "Licenciado compulsoriamente.",
      "Disponível sem vencimento."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 82 do Estatuto da PMPE: 'É considerado ausente o policial militar que por mais de vinte e quatro horas consecutivas: I - deixar de comparecer à sua Organização Policial Militar, sem comunicar qualquer motivo de impedimento; II - afastar-se, sem licença, da Organização Policial Militar onde serve'.",
    "fundamentacaoLegal": "Art. 82 da Lei Estadual nº 6.783/1974.",
    "hint": "Mais de 24 horas = Ausente. Mais de 8 dias = Desertor.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "+24 horas = AUSENTE. +8 dias = DESERTOR (Crime Militar!).",
    "porqueErrou": {
      "0": "Deserção só se consuma após o 8º dia consecutivo.",
      "2": "Extravio exige mais de 30 dias em missão."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Deserção exige mais de 8 dias de ausência.",
      "B": "Correta. Definição legal do art. 82 do Estatuto da PMPE.",
      "C": "Incorreta. Extraviado é mais de 30 dias com paradeiro ignorado.",
      "D": "Incorreta. Não existe licenciamento compulsório com 24h.",
      "E": "Incorreta. O termo legal é Ausente."
    }
  },
  {
    "id": "leg_upe_013",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) Decorrido o prazo legal de ausência injustificada, se o policial militar permanecer sem se apresentar por mais de 8 (oito) dias consecutivos, consuma-se a situação de:",
    "options": [
      "Extravio definitivo de praça.",
      "Reforma sumária sem proventos.",
      "Deserção (crime militar previsto no CPM).",
      "Perda imediata do porte de arma sem processo.",
      "Agregação disciplinar de ofício."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 83 da Lei 6.783/74 c/c o Código Penal Militar: Decorridos mais de 8 (oito) dias de ausência consecutiva injustificada, o policial militar consuma o crime de deserção, sendo lavrado o Termo de Deserção e determinada a sua captura.",
    "fundamentacaoLegal": "Art. 83 da Lei Estadual nº 6.783/1974 e Art. 187 do Código Penal Militar.",
    "hint": "8 dias = Deserção!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Regra mnemônica de ouro: 24 horas = AUSÊNCIA; 8 dias = DESERÇÃO; 30 dias = EXTRAVIO.",
    "porqueErrou": {
      "0": "Extravio requer 30 dias com paradeiro ignorado em missão oficial.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não se confunde com extravio.",
      "B": "Incorreta. Reforma não é penalidade por ausência.",
      "C": "Correta. Passou de 8 dias consecutivos = Crime militar de Deserção.",
      "D": "Incorreta. Instala-se o procedimento penal militar próprio de deserção.",
      "E": "Incorreta. É excluído/agregado nos termos da lei penal militar."
    }
  },
  {
    "id": "leg_upe_014",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) Conforme o Estatuto dos Militares Estaduais de Pernambuco, a situação do policial militar que, tendo cessado o motivo da sua agregação, aguarda vaga no respectivo Quadro para ser reincluído na escala numérica denomina-se:",
    "options": [
      "Disponibilidade provisória.",
      "Agregado de segunda classe.",
      "Revertido cautelar.",
      "Militar Excedente.",
      "Militar em readaptação."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 81 da Lei 6.783/74: 'Excedente é a situação transitória a que, automaticamente, passa o policial militar que, tendo cessado o motivo que determinou sua agregação, reverte ao respectivo Quadro, estando este com seu efetivo completo'.",
    "fundamentacaoLegal": "Art. 81 da Lei Estadual nº 6.783/1974.",
    "hint": "Voltou da agregação mas não tem vaga aberta no quadro = EXCEDENTE.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Cessou a agregação + Quadro cheio = EXCEDENTE até pintar a próxima vaga!",
    "porqueErrou": {
      "0": "Disponibilidade é instituto dos servidores civis da CF/88, não militar.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Revertido é quem já ocupou a vaga.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não é o termo estatutário aplicável.",
      "B": "Incorreta. Não há classes de agregação.",
      "C": "Incorreta. Reversão é o ato; excedente é a situação transitória do quadro lotado.",
      "D": "Correta. O art. 81 define exatamente o policial militar Excedente.",
      "E": "Incorreta. Termo próprio de limitação funcional médica."
    }
  },
  {
    "id": "leg_upe_015",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) Sobre a passagem do policial militar para a inatividade mediante 'Reserva Remunerada', assinale a opção que apresenta uma hipótese de transferência 'A PEDIDO':",
    "options": [
      "Atingir a idade limite de permanência no serviço ativo fixada em lei.",
      "Ser considerado pelo Tribunal de Justiça incompatível com o oficialato.",
      "Ser diplomado em cargo político eletivo após agregação.",
      "Passar mais de 2 anos contínuos em licença para tratamento de saúde própria.",
      "Completar 30 (trinta) anos de serviço, se homem, ou o tempo correspondente previsto na legislação previdenciária militar específica."
    ],
    "correctIndex": 4,
    "explanation": "A transferência a pedido dá-se por iniciativa do próprio policial militar que completar o tempo de serviço exigido na legislação em vigor (historicamente 30 anos no Estatuto original, recepcionado com as regras de transição previdenciárias). Atingir idade limite ou ser diplomado são hipóteses de reserva 'ex-officio' (obrigatórias por iniciativa da Administração).",
    "fundamentacaoLegal": "Artigos 87 e 88 da Lei Estadual nº 6.783/1974.",
    "hint": "A pedido = Quem pede porque já completou o tempo de serviço necessário.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "A pedido depende da vontade do militar (tempo de serviço). Ex-officio é imposição da lei (idade limite, diplomação política, etc.).",
    "porqueErrou": {
      "0": "Idade limite é transferência compulsória / ex-officio.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Diplomação em mandato é transferência ex-officio por exigência constitucional.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Hipótese de reserva ex-officio compulsória.",
      "B": "Incorreta. Incompatibilidade gera perda de patente e demissão.",
      "C": "Incorreta. Diplomação acarreta transferência ex-officio.",
      "D": "Incorreta. Ultrapassar prazo de LTS acarreta reforma ou inativação ex-officio.",
      "E": "Correta. Atingir o tempo de serviço permite pedir a transferência para a reserva."
    }
  },
  {
    "id": "leg_upe_016",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) A 'REFORMA' é uma das formas de exclusão do serviço ativo da PMPE. Em relação ao militar reformado, assinale a afirmativa CORRETA:",
    "options": [
      "Fica definitivamente dispensado do serviço militar ativo, permanecendo na inatividade sem poder ser reconvocado, salvo exceções legais de revisão médica.",
      "Continua prestando escala operacional nos finais de semana de grandes eventos.",
      "Perde integralmente o direito ao recebimento de pensão ou proventos estaduais.",
      "Pode ser promovido ao posto imediatamente superior por merecimento bienal.",
      "É obrigado a residir obrigatoriamente no município da sede do seu último batalhão."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 93 do Estatuto da PMPE: A reforma é a passagem definitiva do policial militar para a inatividade, cessando a possibilidade de retorno ao serviço ativo (ao contrário da reserva remunerada, que ainda compõe a reserva mobilizável do Estado). O reformado não concorre a promoções da ativa.",
    "fundamentacaoLegal": "Art. 93 da Lei Estadual nº 6.783/1974.",
    "hint": "Reserva Remunerada = Pode ser mobilizado. Reforma = Inatividade DEFINITIVA.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Reserva = 'Banco de reservas' (pode voltar se o Estado chamar). Reforma = Aposentadoria definitiva!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Recebe os proventos de inatividade garantidos por lei.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. A reforma é a inativação definitiva na PMPE.",
      "B": "Incorreta. O militar reformado está fora da escala ativa.",
      "C": "Incorreta. Os proventos de reforma são assegurados pela previdência militar.",
      "D": "Incorreta. Inativos não concorrem ao quadro de acesso ordinário da ativa.",
      "E": "Incorreta. Tem liberdade constitucional de locomoção e residência."
    }
  },
  {
    "id": "leg_upe_017",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) Nos termos da Lei Estadual nº 6.783/1974, a interrupção das férias anuais do policial militar é medida excepcionalíssima que SOMENTE pode ocorrer em caso de:",
    "options": [
      "Vontade unilateral de seu comandante direto de companhia.",
      "Calamidade pública, comoção interna, convocação para manobras militares ou extrema necessidade do serviço reconhecida pelo Comandante-Geral.",
      "Necessidade de cobrir folga de outro militar em escala de guarda de presídio.",
      "Realização de blitz de rotina de trânsito em feriado prolongado.",
      "Mudança de escala de policiamento comunitário no bairro."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 61, § 3º do Estatuto da PMPE: A concessão de férias não é prejudicada por punição disciplinar e a sua interrupção somente poderá ocorrer em casos de calamidade pública, comoção interna, convocação para manobras militares, ou por necessidade do serviço reconhecida pelo Comandante-Geral da PMPE.",
    "fundamentacaoLegal": "Art. 61, § 3º da Lei Estadual nº 6.783/1974.",
    "hint": "Interrupção de férias = Calamidade, comoção interna ou extrema necessidade reconhecida pelo Comandante-Geral.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Férias é direito sagrado! Só o Comandante-Geral ou calamidade/comoção podem interromper.",
    "porqueErrou": {
      "0": "Comandante de companhia não tem competência para interromper férias monocraticamente.",
      "3": "Operações ordinárias de trânsito não autorizam corte de férias."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Exige ato do Comandante-Geral ou motivo de força maior.",
      "B": "Correta. Rol taxativo e restritivo do art. 61 do Estatuto.",
      "C": "Incorreta. Falhas rotineiras de efetivo não autorizam cassação de férias.",
      "D": "Incorreta. Blitz de rotina é serviço ordinário previsível.",
      "E": "Incorreta. Manutenção regular não justifica a quebra de gozo de férias."
    }
  },
  {
    "id": "leg_upe_018",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) De acordo com a Lei Complementar Estadual nº 108/2008 (Plano de Promoções de Militares de PE), a promoção que resulta de ato ou atos não comuns de coragem e audácia que, ultrapassando os limites normais do cumprimento do dever, representem feitos de notório mérito, denomina-se:",
    "options": [
      "Promoção por Merecimento Ordinário.",
      "Promoção Post-Mortem.",
      "Promoção por Bravura.",
      "Promoção por Antiguidade Decenal.",
      "Promoção em Ressarcimento de Preterição."
    ],
    "correctIndex": 2,
    "explanation": "A promoção por bravura independe de vaga e de interstício prévio, sendo concedida pelo Governador após apuração rigorosa em sindicância que comprove atos excepcionais de coragem e sacrifício da própria vida no cumprimento da missão militar.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008.",
    "hint": "Atos extraordinários de audácia e coragem acima do dever comum = BRAVURA.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Ato de coragem excepcional = BRAVURA! Não precisa de vaga nem de tempo mínimo.",
    "porqueErrou": {
      "0": "Merecimento exige pontuação na ficha funcional e quadro de acesso.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Merecimento é baseado em pontuação e avaliação de desempenho.",
      "B": "Incorreta. Post-mortem decorre de morte heróica no serviço.",
      "C": "Correta. Definição consagrada de Promoção por Bravura.",
      "D": "Incorreta. Antiguidade segue unicamente a ordem cronológica da folha numérica.",
      "E": "Incorreta. Ressarcimento de preterição ocorre quando houve erro administrativo anterior."
    }
  },
  {
    "id": "leg_upe_019",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) A promoção 'Post-Mortem' na Polícia Militar de Pernambuco visa expressar o reconhecimento do Estado ao policial militar que:",
    "options": [
      "Faleceu de causas naturais enquanto dormia em sua residência durante a folga.",
      "Sofreu infarto agudo do miocárdio em férias fora do Estado de Pernambuco.",
      "Completou 35 anos de serviço no dia anterior ao seu óbito na reserva.",
      "Faleceu em consequência de ferimentos recebidos em serviço policial ostensivo, na defesa da sociedade ou em ação de preservação da ordem pública.",
      "Possuía mais de 10 elogios individuais em seus assentamentos militares."
    ],
    "correctIndex": 3,
    "explanation": "A promoção post-mortem é concedida ao militar que tomba em serviço ou em consequência direta de ferimentos ou doenças adquiridas em operações policiais na defesa da ordem pública, retroagindo a promoção à data do falecimento.",
    "fundamentacaoLegal": "Lei Complementar nº 108/2008 e Estatuto da PMPE.",
    "hint": "Post-mortem militar = Morte em decorrência do cumprimento do dever policial militar.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Post-Mortem = Tombou em combate/serviço pela farda da PMPE!",
    "porqueErrou": {
      "0": "Morte natural em folga não configura os requisitos legais da promoção post-mortem.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "4": "Elogios não suprem o nexo de causalidade com a morte em serviço."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Exige nexo causal direto com o serviço militar ostensivo.",
      "B": "Incorreta. Não guarda nexo funcional com a atividade operacional policial.",
      "C": "Incorreta. Aplicável ao militar que falece em atividade pelo serviço.",
      "D": "Correta. Reconhecimento formal do Estado ao herói que perde a vida em serviço.",
      "E": "Incorreta. Elogios auxiliam na promoção por merecimento em vida."
    }
  },
  {
    "id": "leg_upe_020",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE (Lei Estadual nº 6.783/74)",
    "question": "(UPE / PMPE) Na Polícia Militar de Pernambuco, quando um militar deixa de ser promovido na época devida por motivo de erro administrativo ou em virtude de processo criminal em que venha a ser absolvido com trânsito em julgado, ele tem direito à:",
    "options": [
      "Promoção por Bravura Cívica.",
      "Aposentadoria proporcional imediata.",
      "Indenização pecuniária sem alteração do posto.",
      "Recondução automática ao círculo de alunos.",
      "Promoção em Ressarcimento de Preterição."
    ],
    "correctIndex": 4,
    "explanation": "A promoção em ressarcimento de preterição é aquela que é assegurada ao militar quando lhe foi reconhecido judicial ou administrativamente o direito à promoção que deveria ter ocorrido no passado, retroagindo a antiguidade e os efeitos financeiros à data em que deveria ter sido promovido.",
    "fundamentacaoLegal": "Lei Estadual nº 6.783/74 e Lei Complementar Estadual nº 108/2008.",
    "hint": "Foi preterido injustamente e absolvido? Ganha PROMOÇÃO EM RESSARCIMENTO DE PRETERIÇÃO.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Injustiçado no passado? A administração 'ressarce' a sua promoção com efeitos retroativos!",
    "porqueErrou": {
      "0": "Bravura é ato de coragem heróica.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "O militar recebe a promoção efetiva e o posto/graduação, não apenas dinheiro.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Bravura independe de processo ou erro de comissão.",
      "B": "Incorreta. Não implica aposentação antecipada.",
      "C": "Incorreta. O militar é efetivamente alçado ao novo posto com antiguidade restaurada.",
      "D": "Incorreta. Não existe retorno ao círculo de formação de alunos.",
      "E": "Correta. Conceito legal exato de Ressarcimento de Preterição."
    }
  },
  {
    "id": "leg_upe_021",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Constituição Estadual de PE • Art. 101 e Atribuições da PMPE",
    "question": "(UPE / PMPE) Conforme o Artigo 101 da Constituição do Estado de Pernambuco, compete especificamente à Polícia Militar de Pernambuco, instituição permanente e força auxiliar e reserva do Exército:",
    "options": [
      "A polícia ostensiva e a preservação da ordem pública no âmbito de todo o Estado de Pernambuco.",
      "Exercer com exclusividade a polícia judiciária e a apuração de todas as infrações penais civis e militares.",
      "O patrulhamento aéreo interestadual e a guarda exclusiva de fronteiras marítimas da União.",
      "O julgamento de recursos disciplinares em segunda instância no Tribunal de Justiça Militar da União.",
      "A coordenação geral da guarda municipal de todos os municípios pernambucanos."
    ],
    "correctIndex": 0,
    "explanation": "Art. 101 da Constituição do Estado de Pernambuco c/c Art. 144, § 5º da CF/88: À Polícia Militar cabe a polícia ostensiva e a preservação da ordem pública.",
    "fundamentacaoLegal": "Art. 101 da Constituição do Estado de Pernambuco.",
    "hint": "Polícia Militar = Polícia OSTENSIVA e preservação da ORDEM PÚBLICA.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "PM = Policiamento Ostensivo + Preservação da Ordem Pública. Polícia Civil = Polícia Judiciária e Investigação.",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Fronteiras e aérea federal é da Polícia Federal.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Missão constitucional da Polícia Militar de Pernambuco.",
      "B": "Incorreta. Função da Polícia Civil e da PF.",
      "C": "Incorreta. Competência federal das Forças Armadas e PF.",
      "D": "Incorreta. A PM não é órgão do Poder Judiciário.",
      "E": "Incorreta. Guardas municipais respondem aos seus respectivos prefeitos."
    }
  },
  {
    "id": "leg_upe_022",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Constituição Estadual de PE • Subordinação da PMPE",
    "question": "(UPE / PMPE) De acordo com a Constituição do Estado de Pernambuco e a Carta Magna de 1988, a Polícia Militar de Pernambuco é subordinada diretamente ao:",
    "options": [
      "Ministro da Justiça e Segurança Pública.",
      "Governador do Estado.",
      "Comandante Militar do Nordeste (Exército Brasileiro).",
      "Presidente da Assembleia Legislativa de Pernambuco (ALEPE).",
      "Presidente do Tribunal de Justiça do Estado de Pernambuco (TJPE)."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 144, § 6º da CF/88 e Art. 100 da Constituição Estadual: As Polícias Militares e Corpos de Bombeiros Militares subordinam-se aos Governadores dos Estados, do Distrito Federal e dos Territórios.",
    "fundamentacaoLegal": "Art. 100 da Constituição Estadual de PE e Art. 144, § 6º da CF/88.",
    "hint": "Chefe supremo da PMPE no Estado = GOVERNADOR DO ESTADO.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Força de segurança estadual se subordina ao GOVERNADOR DO ESTADO!",
    "porqueErrou": {
      "0": "Ministro da Justiça chefia órgãos federais.",
      "2": "A PM é força auxiliar do Exército, mas se subordina operacional e politicamente ao Governador."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O Ministro não comanda as corporações estaduais.",
      "B": "Correta. O Governador do Estado é o chefe do Poder Executivo estadual.",
      "C": "Incorreta. A vinculação com o Exército é de força reserva/auxiliar, não de subordinação hierárquica direta administrativa.",
      "D": "Incorreta. A ALEPE exerce controle legislativo, não comando operacional.",
      "E": "Incorreta. O TJPE é órgão do Judiciário."
    }
  },
  {
    "id": "leg_upe_023",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Conselho de Justificação",
    "question": "(UPE / PMPE) O processo administrativo especial destinado a julgar da incapacidade do Oficial da PMPE para permanecer na ativa, criando-lhe condições para se defender, denomina-se:",
    "options": [
      "Conselho de Disciplina.",
      "Comissão Permanente de Sindicância.",
      "Conselho de Justificação.",
      "Tribunal de Honra de Praças.",
      "Inquérito Policial Sumário."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 47 da Lei Estadual nº 6.783/74: O Conselho de Justificação é especialmente destinado a julgar da incapacidade do OFICIAL da PMPE para permanecer na ativa. Para as PRAÇAS com estabilidade, o órgão equivalente é o Conselho de Disciplina.",
    "fundamentacaoLegal": "Art. 47 da Lei Estadual nº 6.783/1974.",
    "hint": "Oficial = Conselho de JUSTIFICAÇÃO. Praça = Conselho de DISCIPLINA.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Oficial se 'Justifica' (Conselho de Justificação). Praça cumpre 'Disciplina' (Conselho de Disciplina)!",
    "porqueErrou": {
      "0": "Conselho de Disciplina julga as Praças (com estabilidade).",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O Conselho de Disciplina destina-se às Praças.",
      "B": "Incorreta. Sindicância não decreta demissão de oficial.",
      "C": "Correta. O Conselho de Justificação destina-se privativamente aos Oficiais.",
      "D": "Incorreta. Órgão inexistente na estrutura legal pernambucana.",
      "E": "Incorreta. O Inquérito tem natureza penal e apura crimes."
    }
  },
  {
    "id": "leg_upe_024",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Conselho de Disciplina para Praças",
    "question": "(UPE / PMPE) De acordo com o Estatuto da Polícia Militar de Pernambuco, o Conselho de Disciplina é o instrumento destinado a julgar a incapacidade de permanência no serviço ativo das:",
    "options": [
      "Autoridades do Ministério Público Militar.",
      "Comissões de licitação de fardamento da SDS.",
      "Esposas e pensionistas de oficiais reformados.",
      "Praças com estabilidade assegurada (com 10 ou mais anos de efetivo serviço).",
      "Juízes Militares da Auditoria Estadual."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 48 da Lei nº 6.783/74: O Conselho de Disciplina é destinado a julgar da incapacidade das Praças com estabilidade assegurada para permanecerem na ativa da Corporação.",
    "fundamentacaoLegal": "Art. 48 da Lei Estadual nº 6.783/1974.",
    "hint": "Conselho de Disciplina = PRAÇAS COM ESTABILIDADE.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Praça estável (10+ anos) não pode ser demitida sem antes passar pelo Conselho de Disciplina!",
    "porqueErrou": {
      "0": "Membros do MP são civis e têm garantias funcionais próprias.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O MPM é órgão autônomo e civil.",
      "B": "Incorreta. Não se confunde com procedimentos licitatórios.",
      "C": "Incorreta. Alheio ao regime disciplinar dos militares da ativa.",
      "D": "Correta. Regra fundamental do art. 48 do Estatuto da PMPE.",
      "E": "Incorreta. Magistrados têm regime próprio da LOMAN."
    }
  },
  {
    "id": "leg_upe_025",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Licença para Tratar de Interesse Particular (LTIP)",
    "question": "(UPE / PMPE) Sobre a Licença para Tratar de Interesse Particular (LTIP) prevista na Lei Estadual nº 6.783/74, assinale a afirmativa CORRETA:",
    "options": [
      "É concedida com remuneração integral de todos os soldos e gratificações.",
      "Gera direito a indenização em dinheiro caso não seja gozada até a reserva.",
      "Pode ser concedida a soldados durante o curso de formação inicial.",
      "Tem duração máxima improrrogável de 30 dias na vida do militar.",
      "É sempre concedida com prejuízo da remuneração e da contagem de tempo de serviço para promoção e aposentadoria."
    ],
    "correctIndex": 4,
    "explanation": "A LTIP é a autorização para afastamento temporário concedida com prejuízo total da remuneração e da contagem de tempo de serviço, não podendo ser concedida a militar que não possua o interstício mínimo de efetivo serviço ou que esteja respondendo a processo disciplinar/criminal.",
    "fundamentacaoLegal": "Art. 68 da Lei Estadual nº 6.783/1974.",
    "hint": "Interesse Particular = SEM REMUNERAÇÃO e SEM CONTAR TEMPO DE SERVIÇO.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Interesse Particular? É por sua conta e risco: NÃO RECEBE SOLDO e NÃO CONTA TEMPO!",
    "porqueErrou": {
      "0": "Se é particular, o Estado não paga a remuneração.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Pode ser concedida por até 2 anos conforme o regulamento."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A LTIP é sem vencimentos.",
      "B": "Incorreta. Não é indenizável em espécie.",
      "C": "Incorreta. Exige tempo mínimo de serviço e não se aplica a recrutas em formação.",
      "D": "Incorreta. O prazo pode chegar a dois anos.",
      "E": "Correta. Característica essencial das licenças particulares no regime militar."
    }
  },
  {
    "id": "leg_upe_026",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Agregação de Militar com Cargo Civil Temporário",
    "question": "(UPE / PMPE) O policial militar da ativa que aceitar cargo ou emprego público civil temporário, não eletivo, na administração direta ou indireta:",
    "options": [
      "Ficará agregado e, após 2 (dois) anos de afastamento, contínuos ou não, será transferido ex-officio para a reserva remunerada.",
      "Será demitido sumariamente do serviço ativo com perda da remuneração.",
      "Terá sua matrícula cancelada sem qualquer direito aos proventos.",
      "Poderá continuar concorrendo normalmente a promoções por antiguidade e merecimento sem restrições.",
      "Perderá o direito ao porte de arma de fogo de forma definitiva."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 142, § 3º, III da CF/88 c/c Estatuto da PMPE: O militar que assumir cargo civil temporário não eletivo ficará agregado ao seu quadro e, se ultrapassar 2 anos de afastamento, será compulsoriamente transferido para a reserva remunerada nos termos da lei.",
    "fundamentacaoLegal": "Art. 142, § 3º, III da Constituição Federal e Art. 77 do Estatuto da PMPE.",
    "hint": "Cargo civil temporário: Agregado. Passou de 2 anos? Vai para a reserva remunerada!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Cargo civil não eletivo: 2 anos de tolerância (agregado). Passou de 2 anos = RESERVA compulsória!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Enquanto agregado, não concorre a promoções por merecimento.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Regra expressa da CF/88 e do Estatuto da PMPE.",
      "B": "Incorreta. Não se trata de hipótese de demissão.",
      "C": "Incorreta. Preserva os direitos previdenciários e de reserva proporcional.",
      "D": "Incorreta. O militar fica impedido no quadro de acesso por merecimento.",
      "E": "Incorreta. O porte segue as normas gerais do militar na inatividade."
    }
  },
  {
    "id": "leg_upe_027",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Estabilidade das Praças da PMPE",
    "question": "(UPE / PMPE) De acordo com o Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/74), as Praças da PMPE adquirem a estabilidade funcional após completarem:",
    "options": [
      "3 (três) anos de efetivo serviço.",
      "10 (dez) anos de efetivo serviço.",
      "5 (cinco) anos de efetivo serviço.",
      "15 (quinze) anos de efetivo serviço.",
      "Logo após o término do estágio probatório de 1 ano."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 50 da Lei nº 6.783/74: A estabilidade das praças da Polícia Militar de Pernambuco é adquirida com 10 (dez) anos ou mais de tempo de efetivo serviço. A regra geral do servidor civil (3 anos da EC 19/98) não se aplica automaticamente às praças militares estaduais, que seguem o Estatuto próprio.",
    "fundamentacaoLegal": "Art. 50, IV, 'a' da Lei Estadual nº 6.783/1974.",
    "hint": "Cuidado com a pegadinha! Servidor civil = 3 anos. PRAÇA MILITAR NO ESTATUTO = 10 ANOS!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "PEGADINHA CLÁSSICA DA UPE: Praça militar adquire estabilidade com DEZ ANOS (10 anos), e não com 3 anos!",
    "porqueErrou": {
      "0": "3 anos é a regra do servidor público civil (art. 41 da CF). No militarismo estadual da PMPE são 10 anos!",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Pegadinha clássica com o regime civil do art. 41 da CF/88.",
      "B": "Correta. Literalidade do art. 50, IV, 'a' da Lei Estadual nº 6.783/74.",
      "C": "Incorreta. Não existe previsão de 5 anos no Estatuto da PMPE.",
      "D": "Incorreta. Prazo excessivo.",
      "E": "Incorreta. O término do curso de formação não confere estabilidade imediata."
    }
  },
  {
    "id": "leg_upe_028",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Desconto em Folha e Penhora de Soldo",
    "question": "(UPE / PMPE) Em relação à remuneração dos policiais militares do Estado de Pernambuco, o soldo militar e os vencimentos:",
    "options": [
      "Podem ser totalmente penhorados por qualquer dívida no comércio comum.",
      "São calculados sem qualquer observância de posto e graduação.",
      "Não estão sujeitos a penhora, sequestro ou arresto, exceto nos casos expressamente previstos em lei (como alimentos decorrentes de direito de família) e dívidas para com a Fazenda Pública.",
      "Podem ser reduzidos unilateralmente por decisão de comandante de batalhão.",
      "São isentos de qualquer desconto previdenciário militar estadual."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 51 do Estatuto da PMPE: A remuneração dos policiais militares não está sujeita a penhora, sequestro ou arresto, exceto nos casos previstos em lei, como prestação de alimentos decorrente de decisão judicial de família e ressarcimento à Fazenda Pública Estadual.",
    "fundamentacaoLegal": "Art. 51 da Lei Estadual nº 6.783/1974.",
    "hint": "Soldo militar é impenhorável! Exceções: Pensão alimentícia e dívida com a Fazenda.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Soldo é impenhorável! Só abre exceção para PENSÃO DE ALIMENTOS da família ou dívida com o Estado.",
    "porqueErrou": {
      "0": "Penhora total é inconstitucional e viola o princípio da subsistência digna.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Redução unilateral viola a irredutibilidade dos vencimentos.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Viola a proteção do salário de subsistência.",
      "B": "Incorreta. O soldo é rigorosamente escalonado pelos graus hierárquicos.",
      "C": "Correta. Regra e exceções estipuladas no art. 51 do Estatuto da PMPE.",
      "D": "Incorreta. Comandante de batalhão não altera vencimentos.",
      "E": "Incorreta. Há contribuição previdenciária militar obrigatória."
    }
  },
  {
    "id": "leg_upe_029",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Recompensa: Elogio Militar",
    "question": "(UPE / PMPE) No âmbito das recompensas e condecorações concedidas na PMPE, o 'Elogio Militar' tem a função estatutária de:",
    "options": [
      "Substituir o cumprimento de pena privativa de liberdade imposta pela Justiça Militar.",
      "Liberar o militar de qualquer escala de serviço nos 12 meses seguintes.",
      "Garantir promoção automática imediata ao posto superior sem exame médico.",
      "Reconhecer publicamente aspectos morais, profissionais e de bravura, sendo obrigatoriamente registrado nos assentamentos do militar.",
      "Conceder imunidade penal militar contra futuras transgressões."
    ],
    "correctIndex": 3,
    "explanation": "Conforme os Arts. 64 e 65 da Lei 6.783/74: As recompensas militares constituem reconhecimento dos bons serviços prestados, incluindo prêmios de honra, condecorações e elogios, que devem ser publicados em boletim interno e transcritos nos assentamentos do policial militar para cômputo em sua ficha de promoções.",
    "fundamentacaoLegal": "Arts. 64 e 65 da Lei Estadual nº 6.783/1974.",
    "hint": "Elogio militar = Reconhecimento público registrado nos assentamentos funcionais.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Elogio vai para a ficha (assentamentos) e soma pontos preciosos para a promoção por merecimento!",
    "porqueErrou": {
      "0": "Elogio jamais anula pena penal imposta por tribunal.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Elogio soma pontos na ficha, mas não é promoção automática.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Não interfere na esfera penal condenatória.",
      "B": "Incorreta. Não isenta o policial de suas escalas normais.",
      "C": "Incorreta. Não há promoção automática por simples elogio.",
      "D": "Correta. Função primordial do elogio no registro funcional militar.",
      "E": "Incorreta. O militar continua sujeito à lei e à disciplina."
    }
  },
  {
    "id": "leg_upe_030",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto da PMPE • Licença Maternidade e Adotante",
    "question": "(UPE / PMPE) Em relação aos direitos das policiais militares femininas da PMPE, a licença-maternidade remunerada assegurada pela legislação do Estado de Pernambuco possui duração de:",
    "options": [
      "90 dias consecutivos.",
      "120 dias consecutivos.",
      "60 dias prorrogáveis por mais 30.",
      "240 dias consecutivos.",
      "180 dias consecutivos (6 meses)."
    ],
    "correctIndex": 4,
    "explanation": "A legislação do Estado de Pernambuco e a política dos servidores e militares estaduais fixam a licença-maternidade em 180 dias consecutivos (6 meses) com remuneração integral, estendendo-se igualmente aos casos de adoção na forma da lei estadual.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 107/2008 e Estatuto da PMPE.",
    "hint": "Licença-maternidade em Pernambuco (Poder Público) = 180 DIAS (6 MESES).",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Pernambuco adotou os 180 DIAS (6 meses) para a licença-maternidade de suas militares!",
    "porqueErrou": {
      "0": "90 dias é prazo anacrônico.",
      "1": "120 dias é o piso federal da CLT; Pernambuco adotou o programa de 180 dias para servidores/militares estaduais.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Prazo insuficiente.",
      "B": "Incorreta. Piso da CLT, mas Pernambuco concede 180 dias.",
      "C": "Incorreta. Totalmente em desacordo com as garantias da maternidade.",
      "D": "Incorreta. Prazo não previsto em lei.",
      "E": "Correta. Regra consolidada de 180 dias em Pernambuco."
    }
  },
  {
    "id": "leg_upe_031",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) De acordo com o Estatuto dos Policiais Militares de Pernambuco, a disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida entre policiais militares:",
    "options": [
      "Tanto da ativa quanto da inatividade (reserva e reformados).",
      "Apenas durante o expediente regular dentro dos quartéis.",
      "Exclusivamente durante operações policiais de choque nas ruas.",
      "Somente pelos soldados e cabos perante seus sargentos.",
      "Apenas quando o policial estiver devidamente fardado."
    ],
    "correctIndex": 0,
    "explanation": "Art. 12 do Estatuto da PMPE: A disciplina e o respeito à hierarquia devem ser mantidos em todas as circunstâncias da vida entre policiais militares da ativa, da reserva remunerada e reformados. O dever de respeitar os princípios militares não cessa com o afastamento para a reserva.",
    "fundamentacaoLegal": "Art. 12 da Lei Estadual nº 6.783/1974.",
    "hint": "Disciplina e hierarquia militar vinculam TANTO A ATIVA QUANTO A INATIVIDADE!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "A farda pode ser pendurada na reserva, mas a HIERARQUIA e a DISCIPLINA continuam para sempre!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Mesmo à paisana ou inativo, o respeito hierárquico subsiste."
    },
    "analiseAlternativas": {
      "A": "Correta. Literalidade do art. 12 do Estatuto da PMPE.",
      "B": "Incorreta. Vincula dentro e fora das dependências policiais.",
      "C": "Incorreta. Não se restringe ao policiamento de choque.",
      "D": "Incorreta. Vincula todos os círculos hierárquicos.",
      "E": "Incorreta. Subsiste mesmo em trajes civis."
    }
  },
  {
    "id": "leg_upe_032",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) O Estatuto da PMPE estabelece que a subordinação hierárquica não afeta de modo algum a dignidade pessoal do policial militar e decorre exclusivamente da:",
    "options": [
      "Diferença salarial existente entre as graduações.",
      "Estrutura estritamente funcional e das atribuições dos cargos que exerce.",
      "Idade cronológica dos comandantes de guarnição.",
      "Naturalidade e origem geográfica do recruta.",
      "Classe social e renda familiar de cada militar."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 12, § 2º da Lei 6.783/74: A subordinação não afeta, de modo algum, a dignidade pessoal do policial-militar e decorre, exclusivamente, da estrutura da corporação e das atribuições do cargo ou função militar.",
    "fundamentacaoLegal": "Art. 12, § 2º da Lei Estadual nº 6.783/1974.",
    "hint": "Subordinação = Decorre da ESTRUTURA e das ATRIBUIÇÕES DO CARGO, sem diminuir a dignidade humana.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Comando é função e dever funcional, sem ferir a honra ou dignidade do subordinado!",
    "porqueErrou": {
      "0": "O soldo é consequência do posto, não a justificativa moral da subordinação.",
      "4": "O militarismo repudia distinções por renda ou classe."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A remuneração é reflexo, não causa.",
      "B": "Correta. Regra expressa do art. 12, § 2º do Estatuto.",
      "C": "Incorreta. A idade não cria a subordinação funcional.",
      "D": "Incorreta. Todos são iguais perante a corporação.",
      "E": "Incorreta. Distinções socioeconômicas são alheias ao mérito militar."
    }
  },
  {
    "id": "leg_upe_033",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) Conforme o Estatuto dos Policiais Militares de PE, a 'FUNÇÃO MILITAR' é o exercício das obrigações inerentes ao cargo policial-militar. Sobre o preenchimento de cargos militares privativos de oficiais, é correto afirmar:",
    "options": [
      "Podem ser exercidos indistintamente por soldados de 1ª classe que tenham curso de direito.",
      "Podem ser delegados a funcionários civis terceirizados de apoio administrativo.",
      "São preenchidos exclusivamente pelos oficiais de carreira da corporação com o correspondente grau hierárquico.",
      "Podem ser preenchidos por vereadores da base do governo estadual.",
      "São abertos a voluntários civis da comunidade mediante termo de adesão."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 21 da Lei 6.783/74: Os cargos policiais militares são privativos do pessoal em serviço ativo da Polícia Militar de Pernambuco. Os cargos de comando e chefia privativos de oficiais devem ser exercidos exclusivamente pelos oficiais com o posto correspondente previsto na lei de fixação de efetivo.",
    "fundamentacaoLegal": "Art. 21 da Lei Estadual nº 6.783/1974.",
    "hint": "Cargo privativo de oficial = Somente oficial de carreira da ativa do grau correspondente.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Cargo de oficial só oficial ocupa! Não passa para soldado nem para civil.",
    "porqueErrou": {
      "0": "Mesmo com faculdade de direito, praça não exerce cargo privativo de oficial sem passar no CFO.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A formação acadêmica civil não investe em posto militar.",
      "B": "Incorreta. Funções de comando policial são indelegáveis.",
      "C": "Correta. Regra do art. 21 do Estatuto da PMPE.",
      "D": "Incorreta. Mandato parlamentar é incompatível com a chefia ativa.",
      "E": "Incorreta. Inexiste voluntariado civil para cargos privativos de comando."
    }
  },
  {
    "id": "leg_upe_034",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) Em relação aos direitos dos militares estaduais de Pernambuco previstos no Estatuto, a 'GARANTIA DE PATENTE', em toda a sua plenitude, com as vantagens, prerrogativas e deveres a ela inerentes, é expressamente assegurada:",
    "options": [
      "A todos os soldados e cabos com estabilidade assegurada.",
      "Somente ao Secretário de Defesa Social durante o exercício do mandato.",
      "Exclusivamente aos Alunos do Curso de Formação de Oficiais.",
      "Apenas aos Oficiais da ativa, da reserva ou reformados.",
      "A todos os cidadãos pernambucanos que serviram ao Tiro de Guerra."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 50, I da Lei 6.783/74 c/c CF/88: A patente dos oficiais é garantida em toda a sua plenitude, com as vantagens, prerrogativas e deveres a ela inerentes, tanto aos oficiais da ativa quanto aos da reserva ou reformados, sendo privativa do oficial militar.",
    "fundamentacaoLegal": "Art. 50, I da Lei Estadual nº 6.783/1974.",
    "hint": "PATENTE = Garantia constitucional e estatutária exclusiva dos OFICIAIS.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Oficial tem PATENTE (garantida até na inatividade). Praça tem GRADUAÇÃO.",
    "porqueErrou": {
      "0": "Praça tem graduação, não patente.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Alunos do CFO são praças especiais em formação.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Praças são detentoras de graduação.",
      "B": "Incorreta. Secretário de Estado é cargo político civil.",
      "C": "Incorreta. O Cadete só recebe a patente ao ser promovido a 2º Tenente.",
      "D": "Correta. A garantia da patente é exclusiva do oficialato.",
      "E": "Incorreta. Atiradores do TG são reservistas de 2ª categoria do Exército."
    }
  },
  {
    "id": "leg_upe_035",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) Na apuração da antiguidade entre dois policiais militares de mesma graduação, promovidos na mesma data, o Estatuto da PMPE estabelece que o primeiro critério sucessivo de desempate é:",
    "options": [
      "A maior pontuação no exame físico do último ano.",
      "O sorteio público perante a tropa em forma.",
      "O local de residência mais próximo do quartel.",
      "A idade civil mais jovem para dar preferência à juventude.",
      "A antiguidade na graduação ou posto anterior."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o Art. 17, § 2º, 'a' da Lei 6.783/74: Em igualdade de data de promoção, a precedência é estabelecida pela antiguidade no posto ou graduação anterior. Se ainda assim houver empate, sucessivamente busca-se a antiguidade nos graus anteriores e, em último caso, a idade civil mais velha.",
    "fundamentacaoLegal": "Art. 17, § 2º da Lei Estadual nº 6.783/1974.",
    "hint": "Empatou na data da promoção atual? Olhe quem era mais antigo no POSTO/GRADUAÇÃO ANTERIOR!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Empate no posto de 1º Tenente? Desempata quem foi 2º Tenente antes! Empate entre Cabos? Quem foi Soldado antes!",
    "porqueErrou": {
      "0": "TAF não define precedência hierárquica.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "A idade civil usada no desempate final é a mais IDOSA (mais velho), nunca o mais jovem."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Critério inexistente para hierarquia.",
      "B": "Incorreta. Sorteio não se aplica na ordenação militar.",
      "C": "Incorreta. Totalmente desprovido de respaldo estatutário.",
      "D": "Incorreta. O critério etário privilegia a maior idade civil.",
      "E": "Correta. Regra legal expressa do art. 17, § 2º, 'a'."
    }
  },
  {
    "id": "leg_upe_036",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) De acordo com o Estatuto da PMPE, a passagem do policial militar para a inatividade ex-officio, por ter atingido a idade-limite de permanência na reserva remunerada, acarreta a sua:",
    "options": [
      "Reforma militar.",
      "Reversão para a ativa como consultor de segurança.",
      "Demissão com perda de todas as condecorações.",
      "Licenciamento sumário sem proventos.",
      "Perda imediata do posto ou da graduação."
    ],
    "correctIndex": 0,
    "explanation": "Conforme o Art. 94 da Lei 6.783/74: O policial militar que se encontrar na reserva remunerada e atingir a idade-limite de permanência na reserva será transferido compulsoriamente (ex-officio) para a situação de REFORMA definitiva.",
    "fundamentacaoLegal": "Art. 94 da Lei Estadual nº 6.783/1974.",
    "hint": "Atingiu a idade limite na reserva remunerada? Passa para a REFORMA definitiva!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Atingiu o teto de idade na reserva? O militar é REFORMADO em definitivo!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Demissão é sanção de expulsão de oficial, não consequência da velhice.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Transição direta da reserva para a reforma ex-officio.",
      "B": "Incorreta. A idade impede o retorno às fileiras ativas.",
      "C": "Incorreta. Reforma assegura a manutenção do posto e medalhas.",
      "D": "Incorreta. Os proventos de reforma são integralmente pagos.",
      "E": "Incorreta. O grau hierárquico é mantido inalterado na inatividade."
    }
  },
  {
    "id": "leg_upe_037",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) No tocante à exclusão do serviço ativo da corporação, a 'DEMISSÃO' é o instituto aplicável exclusivamente:",
    "options": [
      "Aos Soldados e Cabos em cumprimento de pena disciplinar de prisão.",
      "Aos Oficiais da PMPE (a pedido ou ex-officio), com a perda do posto ou patente conforme decisão judicial ou do tribunal de justiça.",
      "Aos civis que prestam concurso e não comparecem à matrícula.",
      "Aos militares falecidos em combate com bravura.",
      "Aos alunos que reprovarem no teste de tiro da Academia."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o Art. 105 da Lei 6.783/74: A demissão da Polícia Militar aplica-se exclusivamente aos Oficiais (a pedido ou ex-officio). Para as Praças, o termo correspondente para expulsão ou desligamento é o licenciamento ou exclusão a bem da disciplina.",
    "fundamentacaoLegal": "Art. 105 da Lei Estadual nº 6.783/1974.",
    "hint": "DEMISSÃO é termo exclusivo de OFICIAL no Estatuto da PMPE!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "OFICIAL É DEMITIDO. PRAÇA É LICENCIADA OU EXCLUÍDA A BEM DA DISCIPLINA!",
    "porqueErrou": {
      "0": "Praça sofre licenciamento ou exclusão a bem da disciplina, nunca demissão.",
      "3": "Falecimento enseja exclusão por morte / post-mortem."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Praças sofrem exclusão a bem da disciplina ou licenciamento.",
      "B": "Correta. O art. 105 restringe a demissão aos Oficiais.",
      "C": "Incorreta. Civis sofrem desclassificação de certame.",
      "D": "Incorreta. Tombado em serviço recebe homenagens e post-mortem.",
      "E": "Incorreta. Aluno do CFO sofre desligamento do curso."
    }
  },
  {
    "id": "leg_upe_038",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) De acordo com o Estatuto da PMPE, o policial militar agregado que tiver cessado o motivo da sua agregação retornará ao serviço ativo através do ato administrativo de:",
    "options": [
      "Agregação compulsória.",
      "Excedência definitiva.",
      "Reversão.",
      "Recondução civil.",
      "Reintegração judicial."
    ],
    "correctIndex": 2,
    "explanation": "Conforme o Art. 80 da Lei 6.783/74: A reversão é o ato pelo qual o policial militar agregado retorna ao respectivo Quadro, tão logo cesse o motivo que determinou a sua agregação, voltando a ocupar o lugar que lhe competir na respectiva escala numérica.",
    "fundamentacaoLegal": "Art. 80 da Lei Estadual nº 6.783/1974.",
    "hint": "Voltou da agregação? O ato de retorno chama-se REVERSÃO.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Agregado sai da escala. REVERSÃO faz o militar retornar à escala numérica!",
    "porqueErrou": {
      "0": "Agregação é o ato de saída, reversão é a volta.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Recondução é termo de servidor civil da Lei 8.112.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Agregação é o afastamento da escala numérica.",
      "B": "Incorreta. Excedente é quando não há vaga temporária.",
      "C": "Correta. Definição exata do art. 80 do Estatuto.",
      "D": "Incorreta. Recondução civil não se aplica ao militarismo.",
      "E": "Incorreta. Reintegração decorre de anulação judicial de demissão."
    }
  },
  {
    "id": "leg_upe_039",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) O Estatuto da PMPE dispõe sobre as situações de 'ausência' do policial militar. Caso um policial militar seja feito prisioneiro de guerra ou capturado por criminosos durante operação policial militar, enquanto estiver em cativeiro ele:",
    "options": [
      "Será sumariamente declarado desertor e perderá o soldo.",
      "Será julgado à revelia pelo Conselho de Disciplina por imperícia militar.",
      "Terá sua exoneração publicada no Diário Oficial no prazo de 48 horas.",
      "Ficará na situação de agregado, mantendo os direitos e vencimentos integrais pagos aos seus beneficiários/dependentes.",
      "Terá seus bens bloqueados preventivamente pelo Comandante da OPM."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 77 c/c Arts. 84 e 85 do Estatuto da PMPE: O militar capturado ou prisioneiro em operações policiais militares é considerado agregado ou extraviado conforme o caso, não sendo considerado ausente ou desertor, sendo preservados todos os seus direitos e remuneração aos dependentes legais habilitados.",
    "fundamentacaoLegal": "Arts. 77 e 84 da Lei Estadual nº 6.783/1974.",
    "hint": "Prisioneiro em serviço ou capturado: Preservação de vencimentos e agregação/proteção à família.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Militar capturado em combate não é culpado! É protegido pelo Estado e a família recebe os vencimentos.",
    "porqueErrou": {
      "0": "Deserção exige ausência voluntária e dolosa, não cativeiro involuntário.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Exoneração sumária é ato ilegal e desumano.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. O cativeiro involuntário exclui o dolo de deserção.",
      "B": "Incorreta. Não responde a processo disciplinar por ser vítima de captura.",
      "C": "Incorreta. Inexiste demissão de militar sequestrado/capturado.",
      "D": "Correta. Tutela da dignidade do militar e subsistência de sua família.",
      "E": "Incorreta. É vedado qualquer confisco patrimonial."
    }
  },
  {
    "id": "leg_upe_040",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Estatuto dos Policiais Militares de PE (Lei nº 6.783/74)",
    "question": "(UPE / PMPE) No Direito Disciplinar Militar de Pernambuco, a punição disciplinar de 'PRISÃO' (antes da vedação de penas privativas de liberdade em âmbito administrativo pelas recentes reformas):",
    "options": [
      "Poderia ser aplicada por qualquer soldado antigo contra o recruta.",
      "Exigia sempre autorização e expedição de mandado pelo Governador do Estado.",
      "Implicava a perda automática e definitiva do direito à farda e ao soldo.",
      "Podia ser cumprida em presídio comum de regime semiaberto civil.",
      "Só podia ser aplicada por autoridade militar com competência disciplinar expressa em lei ou regulamento, com fundamentação escrita e publicação em boletim interno."
    ],
    "correctIndex": 4,
    "explanation": "Conforme o regime disciplinar militar tradicional e o Estatuto da PMPE (Art. 43 a 46): As penas disciplinares só podem ser cominadas por autoridade militar competente expressamente prevista em lei/código disciplinar, sempre com publicação motivada em Boletim Geral ou Interno da corporação.",
    "fundamentacaoLegal": "Arts. 43 e 44 da Lei Estadual nº 6.783/1974.",
    "hint": "Punição disciplinar exige competência legal da autoridade + motivação escrita + publicação em boletim.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Punição militar não é informal: precisa de competência, direito de defesa e publicação em Boletim!",
    "porqueErrou": {
      "0": "Soldado não tem poder discricionário punitivo disciplinar de prisão.",
      "1": "Comandantes de OPM e Comandante-Geral detêm competência regulamentar direta sem passar pelo Governador.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Soldado não aplica punição de prisão.",
      "B": "Incorreta. Comandantes de Batalhão e o Comandante-Geral possuem competência própria.",
      "C": "Incorreta. Punições disciplinares transitórias não cassam o soldo por completo.",
      "D": "Incorreta. O militar cumpre em dependência militar, nunca presídio civil comum.",
      "E": "Correta. Exigência formal do devido processo legal administrativo."
    }
  },
  {
    "id": "leg_upe_041",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Promoção por Antiguidade na Carreira das Praças",
    "question": "(UPE / PMPE) De acordo com o sistema de promoções da PMPE, a promoção pelo critério de 'ANTIGUIDADE' baseia-se primordialmente:",
    "options": [
      "Na precedência hierárquica do militar sobre os demais de igual graduação dentro do Quadro de Acesso.",
      "No número de ocorrências com apreensão de drogas efetuadas pela guarnição.",
      "Na indicação política do Secretário de Administração e Defesa Social.",
      "Na média aritmética obtida nos testes semestrais de aptidão física (TAF).",
      "No sorteio gravado em vídeo realizado pelo Comando do Policiamento da Capital."
    ],
    "correctIndex": 0,
    "explanation": "A promoção por antiguidade tem por base a precedência cronológica de uma praça sobre as demais de igual graduação, dentro do respectivo quadro de acesso, assegurando ao militar que cumpriu o interstício subir na carreira sem preterição.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008 e Estatuto da PMPE.",
    "hint": "Antiguidade = Tempo cronológico e precedência na folha numérica do quadro de acesso.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Antiguidade é a fila da padaria: quem chegou antes no posto sobe primeiro quando abre a vaga!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Indicação política é vedada na promoção por antiguidade.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "B": "Incorreta. Em desacordo com os preceitos estatutários.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_042",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Promoção por Merecimento na Carreira das Praças",
    "question": "(UPE / PMPE) O critério de promoção por 'MERECIMENTO' na PMPE diferencia-se da antiguidade porque se fundamenta:",
    "options": [
      "Exclusivamente no tempo de certidão de nascimento civil.",
      "No conjunto de atributos, qualidades, desempenho profissional, cursos militares e civis e conduta exemplar do militar revelados ao longo da carreira.",
      "Na decisão secreta sem justificativa do comandante da companhia de choque.",
      "Na quantidade de filhos menores registrados na previdência estadual.",
      "Na renúncia irretratável a 50% dos adicionais de periculosidade."
    ],
    "correctIndex": 1,
    "explanation": "A promoção por merecimento baseia-se na avaliação objetiva da ficha funcional: conceitos, conduta disciplinar, cursos acadêmicos e operacionais, medalhas e atuação destacada do policial militar perante a corporação.",
    "fundamentacaoLegal": "Lei Complementar nº 108/2008.",
    "hint": "Merecimento = Mérito, cursos, boa conduta e conduta militar ilibada.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Merecimento premia quem estuda, cumpre o dever com excelência e mantém a conduta nota 10!",
    "porqueErrou": {
      "0": "Idade civil é critério de desempate residual, não merecimento.",
      "2": "A avaliação é realizada pela Comissão de Promoções com critérios objetivos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_043",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Quadro de Acesso e Impedimentos",
    "question": "(UPE / PMPE) O policial militar da PMPE NÃO poderá constar no Quadro de Acesso (QA) para promoção caso:",
    "options": [
      "Tenha tirado nota 10 no último teste de tiro policial.",
      "Possua mais de 2 filhos dependentes cadastrados na unidade.",
      "Esteja preso provisoriamente por força de mandado de prisão preventiva ou respondendo a processo por deserção.",
      "Tenha sido elogiado pelo Comandante-Geral em Boletim Especial.",
      "Pratique artes marciais nas horas de folga em academia civil."
    ],
    "correctIndex": 2,
    "explanation": "O militar preso preventivamente ou respondendo a processo por deserção, crime doloso com denúncia recebida ou submetido a Conselho de Justificação/Disciplina fica impedido de ingressar ou permanecer no Quadro de Acesso para promoções ordinárias.",
    "fundamentacaoLegal": "Lei Complementar Estadual nº 108/2008 e Estatuto da PMPE.",
    "hint": "Militar preso preventivamente ou respondendo a crime doloso não entra no Quadro de Acesso!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Com bronca criminal ou preso? Fica travado fora do Quadro de Acesso até o trânsito em julgado!",
    "porqueErrou": {
      "0": "Bons resultados facilitam a inclusão no QA.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Elogios aumentam os pontos de merecimento.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "C": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_044",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Interstício Mínimo para Promoção",
    "question": "(UPE / PMPE) O conceito legal de 'INTERSTÍCIO', fundamental para a progressão na carreira militar da PMPE, corresponde ao:",
    "options": [
      "Período máximo de férias que o policial pode acumular sem perder o soldo.",
      "Prazo decadencial para o militar recorrer de sindicância disciplinar de pelotão.",
      "Tempo de afastamento para gozo de licença médica odontológica.",
      "Tempo mínimo de permanência em determinado posto ou graduação indispensável para que o militar possa concorrer à promoção.",
      "Intervalo de 15 minutos de descanso entre patrulhas ostensivas noturnas."
    ],
    "correctIndex": 3,
    "explanation": "Interstício é o tempo mínimo de serviço fixado em lei que o policial militar deve cumprir no posto ou graduação para ter condições de figurar no Quadro de Acesso e poder ser promovido ao grau hierárquico imediatamente superior.",
    "fundamentacaoLegal": "Lei Complementar nº 108/2008 e Art. 59 da Lei Estadual nº 6.783/1974.",
    "hint": "Interstício = Tempo MÍNIMO de permanência no posto/graduação para poder ser promovido.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Interstício é o tempo de maturidade na patente: tem que passar X anos naquele posto antes de subir!",
    "porqueErrou": {
      "0": "Acúmulo de férias segue regras de gozo e não se chama interstício.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "4": "Intervalo intrajornada não é interstício hierárquico."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Não se aplica à carreira militar estadual.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_045",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Fixação do Efetivo da PMPE por Lei",
    "question": "(UPE / PMPE) De acordo com a Constituição do Estado de Pernambuco e o Estatuto da PMPE, o efetivo total da corporação (quantidade de postos e graduações) é fixado por:",
    "options": [
      "Portaria interna do Comandante de Batalhão.",
      "Resolução do Tribunal de Justiça de Pernambuco.",
      "Decreto ministerial do Ministério da Justiça em Brasília.",
      "Acordo coletivo firmado com a associação de praças.",
      "Lei de iniciativa privativa do Governador do Estado."
    ],
    "correctIndex": 4,
    "explanation": "O efetivo da Polícia Militar e do Corpo de Bombeiros Militar de Pernambuco é fixado em LEI ESPECÍFICA de iniciativa privativa do Governador do Estado, aprovada pela Assembleia Legislativa (ALEPE).",
    "fundamentacaoLegal": "Constituição Estadual de Pernambuco e Art. 3º da Lei 6.783/74.",
    "hint": "Efetivo da PMPE = Fixado em LEI de iniciativa privativa do GOVERNADOR DO ESTADO.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Criar vagas e aumentar efetivo da PMPE exige LEI aprovada na ALEPE, proposta pelo Governador!",
    "porqueErrou": {
      "0": "Portaria não cria vagas de efetivo.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Ministério federal não legisla sobre fixação do efetivo da PM estadual.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Em desconformidade com a legislação da PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE."
    }
  },
  {
    "id": "leg_upe_046",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Idade Limite para Ingresso na PMPE",
    "question": "(UPE / PMPE) Os requisitos de ingresso na carreira de Praça da Polícia Militar de Pernambuco (Soldado PMPE) são estabelecidos por:",
    "options": [
      "Lei específica estadual, que fixa limites de idade, escolaridade, aptidão física e idoneidade moral com amparo na Súmula Vinculante 44 do STF.",
      "Edital discricionário da banca organizadora sem qualquer amparo legal.",
      "Portaria do Secretário de Turismo de Pernambuco.",
      "Normas internas do sindicato dos vigilantes civis.",
      "Decisão verbal do coronel corregedor da PMPE."
    ],
    "correctIndex": 0,
    "explanation": "Súmula Vinculante 44 do STF: 'A fixação do limite de idade em concurso público só é legítima se prevista em LEI em sentido estrito e justificada pelas atribuições do cargo'. Em Pernambuco, os requisitos constam na legislação estadual complementar da carreira militar.",
    "fundamentacaoLegal": "Súmula Vinculante 44 do STF e Lei Complementar Estadual da PMPE.",
    "hint": "Limite de idade e exigências de concurso militar DEVEM ESTAR PREVISTAS EM LEI ESTADUAL!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Exigência de idade para a PM só vale se estiver na LEI (Súmula Vinculante 44)!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Secretário de Turismo não tem competência sobre segurança pública.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "B": "Incorreta. Em desacordo com os preceitos estatutários.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_047",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Indisponibilidade do Direito de Greve Militar",
    "question": "(UPE / PMPE) Em relação ao direito de greve e de sindicalização no serviço público, o Supremo Tribunal Federal (Tema 541 da Repercussão Geral) e a Constituição Federal estabelecem que:",
    "options": [
      "Militares e policiais estaduais civis podem fazer greve desde que mantenham 30% do efetivo nas ruas.",
      "O direito de greve é vedado aos policiais militares, e essa proibição estende-se a todos os servidores públicos civis que atuam diretamente na segurança pública.",
      "A greve é permitida para praças, sendo vedada apenas aos oficiais superiores.",
      "A greve militar é autorizada anualmente durante os festejos juninos e carnaval.",
      "Os policiais militares podem formar sindicatos com direito a contribuição sindical em folha."
    ],
    "correctIndex": 1,
    "explanation": "CF/88 Art. 142, § 3º, IV: 'Ao militar são proibidas a sindicalização e a greve'. O STF no ARE 654.432 (Tema 541) ampliou o entendimento, fixando que a proibição absoluta de greve aplica-se a todos os agentes da segurança pública (militares e civis).",
    "fundamentacaoLegal": "Art. 142, § 3º, IV da CF/88 e STF Tema 541 (ARE 654.432).",
    "hint": "Segurança Pública = PROIBIÇÃO ABSOLUTA DE GREVE E SINDICALIZAÇÃO!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Arma na cintura + Segurança Pública = ZERO GREVE pelo STF e pela CF/88!",
    "porqueErrou": {
      "0": "Não existe percentual mínimo tolerado de greve armada na segurança pública.",
      "2": "A vedação atinge todos os graus hierárquicos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_048",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Comandante Geral da PMPE",
    "question": "(UPE / PMPE) De acordo com a estrutura organizacional do Poder Executivo de Pernambuco, o cargo de Comandante-Geral da Polícia Militar de Pernambuco é de livre escolha e nomeação do:",
    "options": [
      "Presidente do Tribunal de Justiça Militar.",
      "Corregedor Geral da União em Brasília.",
      "Governador do Estado, dentre os Oficiais do último posto da ativa da Corporação (Coronéis PM).",
      "Colégio de praças por meio de sufrágio universal direto.",
      "Comandante da 7ª Região Militar do Exército."
    ],
    "correctIndex": 2,
    "explanation": "O Comandante-Geral da PMPE é nomeado pelo Governador do Estado, escolhido privativamente dentre os Oficiais da ativa do último posto do Quadro de Oficiais Policiais Militares (Coronel PM), sendo cargo de confiança da alta administração.",
    "fundamentacaoLegal": "Lei de Organização Básica da PMPE e Constituição Estadual.",
    "hint": "Comandante-Geral = Nomeado pelo Governador entre os Coronéis da ativa da PMPE.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Comandante-Geral da PMPE = O Governador escolhe entre os CORONÉIS da ativa!",
    "porqueErrou": {
      "0": "O Judiciário não nomeia o chefe do Executivo policial.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Não há eleição direta partidária para o comando militar.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "C": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_049",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Devido Processo Legal Militar e Prazos",
    "question": "(UPE / PMPE) Em qualquer procedimento apuratório disciplinar contra policial militar da PMPE (sindicância, PAD, Conselho de Justificação ou de Disciplina), é OBRIGATÓRIO assegurar:",
    "options": [
      "O julgamento sumário sem vista de autos para garantir celeridade máxima.",
      "A oitiva exclusiva de testemunhas indicadas pelo comandante acusador.",
      "A confissão imediata do militar sob coação psicológica de superiores.",
      "O contraditório e a ampla defesa, com os meios e recursos a ela inerentes, sob pena de nulidade absoluta do ato demissório.",
      "O sigilo indevassável impedindo o acesso do próprio militar e seu advogado."
    ],
    "correctIndex": 3,
    "explanation": "Art. 5º, LV da CF/88 e Súmula Vinculante 5 do STF: Aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e a ampla defesa. Processo disciplinar sem direito a defesa é nulo de pleno direito.",
    "fundamentacaoLegal": "Art. 5º, LV da Constituição Federal e jurisprudência do STF.",
    "hint": "Processo sem ampla defesa e contraditório = NULO DE PLENO DIREITO!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Mesmo na disciplina militar mais rígida, o CONTRADITÓRIO e a AMPLA DEFESA são sagrados pela CF/88!",
    "porqueErrou": {
      "0": "Julgamento sumário sem defesa viola cláusula pétrea.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "4": "O investigado e seu advogado têm direito constitucional de acesso aos autos."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Não se aplica à carreira militar estadual.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_050",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Compensação de Horas e Escala de Serviço",
    "question": "(UPE / PMPE) Sobre as escalas de serviço operacional dos militares da PMPE e a prestação do Programa de Jornada Extra de Segurança (PJES), assinale a afirmativa CORRETA:",
    "options": [
      "O PJES tem caráter estritamente militar forçado e não gera qualquer retribuição financeira ao policial.",
      "O militar de serviço em escala normal pode delegar seu plantão a um amigo civil sem autorização.",
      "O militar é obrigado a cumprir 100 horas ininterruptas de sentinela sem alimentação ou água.",
      "As escalas de serviço são estabelecidas pelo presidente da câmara de vereadores.",
      "O PJES constitui serviço suplementar voluntário remunerado por diária/indenização especial, destinado a reforçar a segurança pública nas folgas do militar."
    ],
    "correctIndex": 4,
    "explanation": "O PJES (Programa de Jornada Extra de Segurança de Pernambuco) é a adesão voluntária do policial militar durante o período de sua folga para prestar serviço operacional reforçado, percebendo indenização financeira específica fixada em lei estadual.",
    "fundamentacaoLegal": "Legislação Estadual de Segurança Pública de Pernambuco (PJES).",
    "hint": "PJES = Jornada Extra na FOLGA, de adesão voluntária e remunerada por diária do Estado.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "PJES na folga = Reforço operacional voluntário com grana extra no bolso!",
    "porqueErrou": {
      "0": "O PJES é indenizado financeiramente e tem adesão voluntária.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Em desconformidade com a legislação da PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE."
    }
  },
  {
    "id": "leg_upe_051",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Código Disciplinar Militar • Transgressões Leves, Médias e Graves",
    "question": "(UPE / PMPE) No Direito Disciplinar da PMPE, a classificação da gravidade das transgressões disciplinares (leves, médias e graves) leva em consideração:",
    "options": [
      "A natureza dos fatos, suas consequências para o serviço e para a disciplina, a repercussão pública e as circunstâncias atenuantes e agravantes.",
      "A cor do automóvel pessoal que o militar utiliza no dia a dia.",
      "O time de futebol para o qual o militar torce no campeonato pernambucano.",
      "A quantidade de seguidores que o militar possui em redes de relacionamento.",
      "A altura mínima medida no exame de admissão da corporação."
    ],
    "correctIndex": 0,
    "explanation": "A dosimetria da sanção disciplinar militar analisa a natureza da infração, os danos causados à imagem da corporação e à ordem pública, o grau de dolo ou culpa, e a presença de atenuantes (bom comportamento anterior, prestação de serviços relevantes) e agravantes.",
    "fundamentacaoLegal": "Código Disciplinar dos Militares de Pernambuco (Lei nº 11.817/2000).",
    "hint": "Dosimetria disciplinar militar = Natureza dos fatos + Consequências para a disciplina + Atenuantes e Agravantes.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Punição disciplinar exige balança justa: olha os fatos, o prejuízo à tropa e o comportamento do militar!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Preferências pessoais não integram o direito disciplinar.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "B": "Incorreta. Em desacordo com os preceitos estatutários.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_052",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Comportamento Militar das Praças",
    "question": "(UPE / PMPE) O comportamento militar das Praças da PMPE espelha seu procedimento sob o ponto de vista da disciplina ao longo do tempo. As praças são classificadas nos seguintes comportamentos:",
    "options": [
      "Perfeito, Aceitável, Duvidoso e Crítico.",
      "Excepcional, Ótimo, Bom, Insuficiente e Mau.",
      "Excelente, Regular, Sofrível e Punitivo.",
      "Nível Ouro, Nível Prata, Nível Bronze e Alerta.",
      "Classe A, Classe B, Classe C e Classe D."
    ],
    "correctIndex": 1,
    "explanation": "Conforme o regulamento disciplinar da PMPE: O comportamento das praças é classificado em: Excepcional, Ótimo, Bom, Insuficiente e Mau, de acordo com o histórico de ausência de punições em determinados períodos de tempo.",
    "fundamentacaoLegal": "Código Disciplinar dos Militares de Pernambuco e Estatuto da PMPE.",
    "hint": "Comportamentos da Praça: EXCEPCIONAL, ÓTIMO, BOM, INSUFICIENTE e MAU.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Decore a escada do comportamento: Excepcional > Ótimo > Bom > Insuficiente > Mau!",
    "porqueErrou": {
      "0": "Termos inexistentes no regulamento militar.",
      "3": "Não há menção a metais no comportamento militar."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_053",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Comportamento Militar • Ingresso do Recruta",
    "question": "(UPE / PMPE) Ao ser incorporado ou matriculado na Polícia Militar de Pernambuco, o recruta/aluno-soldado ingressa automaticamente no comportamento militar classificado como:",
    "options": [
      "Excepcional.",
      "Ótimo.",
      "Bom.",
      "Mau.",
      "Insuficiente."
    ],
    "correctIndex": 2,
    "explanation": "Ao ingressar nas fileiras da corporação, a praça é classificada originariamente no comportamento 'BOM'. Para alcançar o comportamento 'Ótimo' e 'Excepcional', precisará permanecer anos consecutivos sem cometer punições disciplinares.",
    "fundamentacaoLegal": "Regulamento Disciplinar da PMPE.",
    "hint": "Quem entra na PMPE começa no comportamento BOM!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Entrou na PM? Começa no BOM! Se passar anos sem bronca, sobe para Ótimo e Excepcional.",
    "porqueErrou": {
      "0": "Excepcional exige anos de serviço sem sofrer punições.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Ninguém ingressa classificado negativamente."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "C": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_054",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Licença-Paternidade na PMPE",
    "question": "(UPE / PMPE) De acordo com a legislação do Estado de Pernambuco aplicável aos servidores e militares estaduais, a licença-paternidade remunerada concedida ao policial militar por ocasião do nascimento ou adoção de filho é de:",
    "options": [
      "5 dias corridos sem qualquer prorrogação.",
      "60 dias corridos.",
      "45 dias úteis.",
      "20 dias consecutivos.",
      "Apenas 24 horas para registro civil."
    ],
    "correctIndex": 3,
    "explanation": "O Estado de Pernambuco ampliou a licença-paternidade dos servidores públicos civis e militares estaduais para 20 dias consecutivos, mediante participação em programas de paternidade responsável ou adesão às normas do programa estadual.",
    "fundamentacaoLegal": "Legislação Estadual de Pernambuco (Programa Criança Cidadã / Licença Paternidade).",
    "hint": "Licença-paternidade do militar em Pernambuco = 20 DIAS.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Paternidade em PE: 20 dias para o guerreiro cuidar do recruta recém-nascido!",
    "porqueErrou": {
      "0": "5 dias é o prazo mínimo originário da CF/88 antes da lei estadual ampliativa.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Não se aplica à carreira militar estadual.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_055",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Porte de Arma de Fogo Institucional",
    "question": "(UPE / PMPE) O porte de arma de fogo dos policiais militares de Pernambuco é prerrogativa inerente à função e assegurado em razão do cargo. Sobre o porte de arma pelo policial da ativa fora do horário de serviço e em trajes civis, assinale a afirmativa CORRETA:",
    "options": [
      "É totalmente proibido, devendo a arma institucional permanecer trancada no quartel ao término de cada plantão.",
      "Cessa automaticamente nos finais de semana e feriados estaduais.",
      "Depende de autorização diária expedida pelo juiz corregedor da comarca.",
      "Só é permitido se o militar estiver acompanhado de outro companheiro fardado.",
      "É permitido em todo o território nacional, com arma institucional ou particular devidamente registrada, respeitadas as normas regulamentares e a cautela devida em recintos públicos com aglomeração."
    ],
    "correctIndex": 4,
    "explanation": "O policial militar da ativa tem direito ao porte de arma de fogo de calibre permitido ou restrito, institucional ou particular, em âmbito nacional, por força do Estatuto do Desarmamento (Lei Federal 10.826/2003, Art. 6º, II) e das normas estatutárias estaduais, devendo agir com cautela e responsabilidade em locais de grande aglomeração.",
    "fundamentacaoLegal": "Lei Federal nº 10.826/2003, Art. 6º, II e Estatuto da PMPE.",
    "hint": "Policial da ativa tem porte de arma de fogo em razão do cargo, 24 horas por dia, em âmbito nacional.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Policial militar é policial 24h! O porte de arma vale na ativa, à paisana e em todo o território nacional.",
    "porqueErrou": {
      "0": "O policial não precisa deixar a arma trancada; pode portá-la na folga.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "O porte decorre da lei, sem necessidade de alvará judicial diário.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Em desconformidade com a legislação da PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE."
    }
  },
  {
    "id": "leg_upe_056",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Uso Progressivo da Força no Estatuto da PMPE",
    "question": "(UPE / PMPE) A atuação do policial militar no policiamento ostensivo e na manutenção da ordem pública em Pernambuco deve ser pautada pelo princípio da legalidade e pelo uso moderado e proporcional da força. Em relação ao uso de arma de fogo, este é considerado:",
    "options": [
      "Medida extrema e excepcional, legítima apenas para repelir iminente perigo de morte ou lesão grave à integridade de outrem ou do próprio policial, quando os demais meios forem insuficientes.",
      "O primeiro recurso a ser empregado contra qualquer manifestante que profira palavras de descontentamento.",
      "Obrigatório em todas as abordagens de rotina em veículos de transporte público.",
      "Proibido sob qualquer hipótese, mesmo em caso de confronto armado com atiradores de fuzil.",
      "Liberado para advertência de trânsito em casos de estacionamento em local proibido."
    ],
    "correctIndex": 0,
    "explanation": "Princípios Básicos sobre o Uso da Força e da Arma de Fogo da ONU c/c Doutrina Operacional da PMPE: O disparo de arma de fogo é o último recurso no uso progressivo da força, autorizado exclusivamente para defender a própria vida ou a de terceiros contra perigo iminente de morte ou grave lesão corporal.",
    "fundamentacaoLegal": "Doutrina de Polícia Ostensiva da PMPE e Resolução nº 34/169 da ONU.",
    "hint": "Arma de fogo = ÚLTIMO RECURSO, excepcional, proporcional e estritamente necessário para salvar vidas.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Uso da força é escadinha: presença policial > verbalização > controle de contato > técnicas não letais > ARMA DE FOGO (último nível)!",
    "porqueErrou": {
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "A legítima defesa em confronto armado autoriza o uso letal da força.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "B": "Incorreta. Em desacordo com os preceitos estatutários.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_057",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Abordagem Policial e Fundada Suspeita",
    "question": "(UPE / PMPE) Conforme o Código de Processo Penal e a jurisprudência pacificada do Superior Tribunal de Justiça (STJ) aplicável à atividade operacional da PMPE, a busca pessoal sem mandado judicial (enquadro policial):",
    "options": [
      "Pode ser realizada por mera intuição subjetiva ou com base na cor da pele, vestimenta ou aspecto visual do cidadão.",
      "Exige a presença de 'fundada suspeita', baseada em elementos objetivos, concretos e contemporâneos de que a pessoa esteja na posse de arma proibida ou corpo de delito.",
      "É ilícita em qualquer circunstância em vias públicas abertas.",
      "Exige a presença obrigatória de dois advogados inscritos na OAB para acompanhar a revista corporal de rua.",
      "Pode ser convertida em apreensão definitiva de dinheiro sem lavratura de termo circunstanciado."
    ],
    "correctIndex": 1,
    "explanation": "Art. 240, § 2º e Art. 244 do CPP e RHC 158.580/STJ: A busca pessoal preventiva exige fundada suspeita demonstrável por elementos objetivos (ex: volume suspeito característico de arma, tentativa de fuga abrupta, denúncia detalhada com características da conduta), sendo nula a revista baseada em preconceito ou mera intuição policial sem base factual.",
    "fundamentacaoLegal": "Art. 244 do Código de Processo Penal e STJ RHC 158.580/BA.",
    "hint": "Busca pessoal sem mandado = EXIGE FUNDADA SUSPEITA OBJETIVA E CONCRETA.",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Revista policial válida precisa de FUNDADA SUSPEITA CONCRETA (atitude suspeita real, volume de arma, denúncia firme). Mera intuição não basta!",
    "porqueErrou": {
      "0": "Preconceito ou intuição infundada violam as garantias constitucionais.",
      "3": "A presença de advogado na via pública não é requisito para a revista de segurança."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_058",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Inviolabilidade de Domicílio e Flagrante Delito",
    "question": "(UPE / PMPE) De acordo com o Art. 5º, XI da Constituição Federal e a tese de repercussão geral firmada pelo STF (Tema 280), o ingresso forçado da polícia militar em domicílio alheio sem mandado judicial:",
    "options": [
      "É livre e pode ocorrer a qualquer momento da noite se o policial suspeitar de um barulho estranho.",
      "Nunca é permitido, devendo os policiais aguardar o amanhecer do dia mesmo que ouçam pedidos de socorro de uma vítima de estupro.",
      "É legítimo mesmo durante a noite em caso de flagrante delito, desastre ou para prestar socorro, exigindo justa causa fundamentada em dados objetivos prévios.",
      "Exige a autorização por escrito do síndico do edifício residencial.",
      "Pode ser feito para cumprir mandado judicial de busca às 23 horas da noite."
    ],
    "correctIndex": 2,
    "explanation": "CF/88 Art. 5º, XI c/c STF Tema 280 (RE 603.616): A casa é asilo inviolável. O ingresso sem mandado é permitido em caso de flagrante delito, desastre ou socorro (a qualquer hora do dia ou da noite). O mandado judicial de busca só pode ser cumprido durante o dia.",
    "fundamentacaoLegal": "Art. 5º, XI da Constituição Federal e STF Tema 280.",
    "hint": "Flagrante delito, socorro e desastre = PODE ENTRAR DIA E NOITE. Mandado judicial = SÓ DURANTE O DIA!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Sem mandado: Flagrante, Socorro, Desastre = DIA OU NOITE! Com mandado judicial: SOMENTE DURANTE O DIA!",
    "porqueErrou": {
      "0": "Você marcou (A): A alternativa (A) está incorreta segundo o gabarito oficial.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial.",
      "4": "Cumprir mandado às 23h sem flagrante constitui crime de abuso de autoridade (Lei 13.869/19)."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "C": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_059",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Abuso de Autoridade (Lei nº 13.869/2019) na Atividade da PMPE",
    "question": "(UPE / PMPE) Nos termos da Lei de Abuso de Autoridade (Lei Federal nº 13.869/2019), a divergência na interpretação de lei ou na avaliação de fatos e provas:",
    "options": [
      "Configura automaticamente crime de abuso de autoridade com perda imediata do cargo militar.",
      "Obriga o policial a pagar do próprio bolso indenização cível de cem salários mínimos.",
      "Gera punição de 5 anos de reclusão em regime fechado militar.",
      "Não configura abuso de autoridade (crime de hermenêutica é expressamente vedado).",
      "Transforma o comandante da patrulha em coautor de improbidade administrativa dolosa."
    ],
    "correctIndex": 3,
    "explanation": "Conforme o Art. 1º, § 2º da Lei nº 13.869/2019: 'A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade'. Além disso, o abuso de autoridade exige sempre o dolo específico de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou por mero capricho/satisfação pessoal.",
    "fundamentacaoLegal": "Art. 1º, § 1º e § 2º da Lei Federal nº 13.869/2019.",
    "hint": "Divergência de interpretação NÃO É CRIME DE ABUSO DE AUTORIDADE!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Errar interpretação de boa-fé não é abuso! Abuso exige DOLO ESPECÍFICO de prejudicar ou agir por mero capricho.",
    "porqueErrou": {
      "0": "A lei veda expressamente criminalizar a divergência hermenêutica legítima.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Não há pena prevista para divergência de interpretação legal.",
      "4": "Você marcou (E): A alternativa (E) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Não se aplica à carreira militar estadual.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE.",
      "E": "Incorreta. Em desconformidade com a legislação da PMPE."
    }
  },
  {
    "id": "leg_upe_060",
    "categoryId": "legislacao_pmpe",
    "bloco": "bloco_3",
    "materiaNome": "Legislação da PMPE",
    "topicoEdital": "Dever de Prender em Flagrante (Art. 301 do CPP)",
    "question": "(UPE / PMPE) O Artigo 301 do Código de Processo Penal estabelece que qualquer do povo poderá e as autoridades policiais e seus agentes DEVERÃO prender quem quer que seja encontrado em flagrante delito. Em relação ao policial militar de serviço:",
    "options": [
      "A prisão em flagrante é ato meramente facultativo que depende de sua simpatia pela vítima.",
      "Ele pode dispensar a prisão se o suspeito prometer não mais cometer delitos.",
      "Ele só deve efetuar a prisão se houver promessa de recompensa em dinheiro pelos comerciantes do bairro.",
      "Ele deve consultar previamente o Conselho Tutelar antes de prender qualquer criminoso armado.",
      "A prisão em flagrante é um DEVER de ofício (obrigatório e vinculado), sob pena de responder criminalmente por prevaricação e infração militar."
    ],
    "correctIndex": 4,
    "explanation": "Art. 301 do CPP: 'Qualquer do povo poderá e as autoridades policiais e seus agentes DEVERÃO prender quem quer que seja encontrado em flagrante delito'. Para o cidadão comum é faculdade; para o policial militar é dever jurídico indeclinável.",
    "fundamentacaoLegal": "Art. 301 do Código de Processo Penal.",
    "hint": "Cidadão civil = PODERÁ. Policial Militar = DEVERÁ efetuar a prisão em flagrante!",
    "difficulty": "medium",
    "banca": "UPE / Concursos PMPE",
    "simuladoOrigem": "caderno_pmpe_estatuto",
    "dicaMacete": "Flagrante para a PMPE é ORDEM: quem tem a farda tem o DEVER LEGAL de prender!",
    "porqueErrou": {
      "0": "Não há faculdade para o agente da lei diante de flagrante de crime.",
      "1": "Você marcou (B): A alternativa (B) está incorreta segundo o gabarito oficial.",
      "2": "Você marcou (C): A alternativa (C) está incorreta segundo o gabarito oficial.",
      "3": "Você marcou (D): A alternativa (D) está incorreta segundo o gabarito oficial."
    },
    "analiseAlternativas": {
      "A": "Incorreta. Em desacordo com os preceitos estatutários.",
      "B": "Incorreta. Em desconformidade com a legislação da PMPE.",
      "C": "Incorreta. Hipótese sem respaldo no ordenamento jurídico.",
      "D": "Incorreta. Não se aplica à carreira militar estadual.",
      "E": "Correta. Fundamentação doutrinária e legal do tema cobrado pela UPE/PMPE."
    }
  }
];
