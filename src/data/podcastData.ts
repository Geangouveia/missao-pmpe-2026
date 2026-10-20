export interface TacticalPodcastEpisode {
  id: string;
  number: number;
  title: string;
  subject: string;
  category: 'direito' | 'portugues' | 'raciocinio' | 'historia' | 'informatica' | 'legislacao';
  durationMinutes: number;
  summary: string;
  keyPoints: string[];
  mnemonics: string[];
  audioScript: string;
  targetExamRule: string;
}

export const TACTICAL_PODCAST_EPISODES: TacticalPodcastEpisode[] = [
  {
    id: 'pod_01',
    number: 1,
    title: 'Art. 144 da CF/88: Segurança Pública e Competências da PMPE',
    subject: 'Direito Constitucional',
    category: 'direito',
    durationMinutes: 4,
    summary: 'A estrutura do Artigo 144 da Carta Magna, o rol taxativo dos órgãos de segurança pública e a missão constitucional indelegável das Polícias Militares.',
    keyPoints: [
      'Rol do Artigo 144 é taxativo segundo jurisprudência consolidada do STF.',
      'Polícia Militar: polícia ostensiva e preservação da ordem pública.',
      'Forças de segurança estadual subordinam-se ao Governador do Estado.',
      'Guardas Municipais não constam nos incisos do caput, mas integram o sistema de segurança pública.',
      'Polícia Científica e Perícia Oficial foram recentemente alinhadas no texto.'
    ],
    mnemonics: [
      'Órgãos Federais: PF (Polícia Judiciária da União), PRF (Patrulhamento Ostensivo em Rodovias Federais), PFF (Ferrovias Federais).',
      'Órgãos Estaduais: PM (Polícia Ostensiva/Ordem Pública), PC (Polícia Judiciária Residual Estadual), CBM (Defesa Civil/Socorro), PP (Polícia Penal).'
    ],
    targetExamRule: 'A banca AOCP adora trocar a competência da Polícia Civil (judiciária/investigativa) com a Polícia Militar (ostensiva/preventiva). Grave: a PM é ostensiva e fardada!',
    audioScript: `Atenção soldado! Iniciando a Pílula Tática Número 1. Hoje vamos dissecar o Artigo 144 da Constituição Federal de 1988, o artigo mais cobrado em concursos policiais de todo o Brasil.

A segurança pública é dever do Estado, direito e responsabilidade de todos. Ela é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio.

Preste muita atenção ao rol dos órgãos de segurança pública:
Primeiro: Polícia Federal, que atua como polícia judiciária da União e combate infrações penais contra a ordem política e social.
Segundo: Polícia Rodoviária Federal, encarregada do patrulhamento ostensivo das rodovias federais.
Terceiro: Polícia Ferroviária Federal.
Quarto: Polícia Civil, dirigida por delegados de carreira, atuando como polícia judiciária e na apuração de infrações penais no âmbito dos Estados, exceto as militares.
E quinto: Polícia Militar e Corpo de Bombeiros Militar.

Aqui está o ouro da sua prova: a Polícia Militar cabe a polícia ostensiva e a preservação da ordem pública. Aos Corpos de Bombeiros Militares cabe a execução de atividades de defesa civil.
Ambas as corporações são forças auxiliares e reserva do Exército Brasileiro, e subordinam-se diretamente ao Governador do Estado.

Guarda Municipal pode fazer patrulhamento ostensivo como a PM? Cuidado com a pegadinha da AOCP! O parágrafo 8º permite que os Municípios constituam guardas municipais destinadas à proteção de seus bens, serviços e instalações. Embora o STF reconheça que integram o SUSP, a competência originária de policiamento ostensivo e preservação da ordem pública geral pertence à Polícia Militar.

Grave este bizu tático: PM igual a ostensiva e preservação da ordem pública. Polícia Civil igual a judiciária e investigativa. Subordinação ao Governador de Pernambuco. Força auxiliar do Exército. Foco na missão!`
  },
  {
    id: 'pod_02',
    number: 2,
    title: 'Art. 5º da CF/88: Inviolabilidade do Domicílio e Prisões',
    subject: 'Direito Constitucional',
    category: 'direito',
    durationMinutes: 4,
    summary: 'A casa como asilo inviolável do indivíduo (Art. 5º, XI), as 4 exceções constitucionais e as regras de dia e noite cobradas pela AOCP.',
    keyPoints: [
      'A casa é asilo inviolável: ninguém pode penetrar sem consentimento, salvo exceções.',
      'A qualquer hora (dia ou noite): flagrante delito, desastre ou para prestar socorro.',
      'Apenas durante o dia: por determinação judicial (mandado judicial de busca).',
      'Critério cronológico de dia: jurisprudência adota das 6h às 18h ou critério físico-astronômico (aurora ao crepúsculo / Lei de Abuso de Autoridade proíbe cumprimento das 21h às 5h).',
      'Conceito amplo de casa: inclui quartos de hotel ocupados, consultórios e escritórios.'
    ],
    mnemonics: [
      'Macete do Dia ou Noite: SOCORRO, DESASTRE e FLAGRANTE entram a qualquer instante!',
      'Macete do Mandado Judicial: Juiz só entra com a luz do DIA!'
    ],
    targetExamRule: 'A banca AOCP sempre tenta dizer que mandado judicial pode ser cumprido à noite se houver urgência. É FALSO! Mandado judicial é estritamente durante o dia.',
    audioScript: `Atenção combatente! Pílula Tática Número 2. O tema de hoje é o inciso 11 do Artigo 5º da Constituição Federal: A inviolabilidade domiciliar.

A regra geral é pétrea: a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador. Mas como todo bom policial militar sabe, a lei prevê 4 exceções fundamentais.

Você precisa dividir essas exceções em duas gavetas mentais:
Gaveta 1: A QUALQUER HORA DO DIA OU DA NOITE.
São três situações de emergência absoluta:
1: Em caso de flagrante delito;
2: Em caso de desastre;
3: Para prestar socorro.
Nestes três casos, não importa se é meio-dia ou duas horas da madrugada. Havendo flagrante, desastre ou necessidade de socorro, a entrada forçada é legítima.

Gaveta 2: EXCLUSIVAMENTE DURANTE O DIA.
Aqui entra a quarta situação: Por determinação judicial.
Ou seja, havendo mandado de busca e apreensão expedido por um juiz, a polícia SÓ PODE ingressar durante o dia.
Atenção à Lei de Abuso de Autoridade: é crime cumprir mandado judicial de busca e apreensão domiciliar entre as 21 horas e as 5 horas da manhã.

E o que é considerado casa para fins de proteção constitucional? O STF adota um conceito amplo: abrange residências particulares, compartimentos habitados, quartos de hotel ou pousada quando ocupados, e locais de trabalho não abertos ao público, como escritórios e consultórios.

Grave no peito: Socorro, desastre e flagrante entram a qualquer instante. Mandado do juiz somente à luz do dia. Essa questão vai estar na sua prova da PMPE!`
  },
  {
    id: 'pod_03',
    number: 3,
    title: 'Raciocínio Lógico: O Mnemônico do MANÉ e Leis de De Morgan',
    subject: 'Raciocínio Lógico (RLM)',
    category: 'raciocinio',
    durationMinutes: 3,
    summary: 'Aprenda a negar a condicional (Se... Então) com o MANÉ e a negar conjunções e disjunções com as regras de Augustus De Morgan.',
    keyPoints: [
      'Negação da condicional (P → Q): MANÉ (Mantém a primeira E Nega a segunda).',
      'A negação de "Se chover, então levo guarda-chuva" é "Chover E NÃO levar guarda-chuva".',
      'Leis de De Morgan para Conjunção: ~(P ^ Q) = ~P v ~Q (Troca o E pelo OU e nega tudo).',
      'Leis de De Morgan para Disjunção: ~(P v Q) = ~P ^ ~Q (Troca o OU pelo E e nega tudo).',
      'Equivalência da condicional contrapositiva: Se P então Q equivale a Se NÃO Q então NÃO P.'
    ],
    mnemonics: [
      'MANÉ: MA-ntém a primeira E NE-ga a segunda. O "Se... Então" vira "E"!',
      'DE MORGAN: Nega o primeiro, troca o conectivo (E vira OU, OU vira E), e nega o segundo!',
      'CONTRAPOSITIVA: Inverte voltando e nega as duas!'
    ],
    targetExamRule: 'A AOCP coloca alternativas que continuam com o conectivo "Se... então" na negação. Elimine de cara! Quem nega condicional usa a conjunção "E"!',
    audioScript: `Alô combatente! Pílula Tática Número 3 de Raciocínio Lógico Matemático. Hoje vamos aniquilar as duas maiores pegadinhas da banca AOCP em proposições lógicas: a negação da condicional e as Leis de De Morgan.

Primeira regra de ouro: Como negar uma condicional, isto é, uma sentença do tipo "Se P, então Q"?
Você nunca mais vai errar: use a técnica do MANÉ.
M-A: Mantém a primeira parte.
N-E: Nega a segunda parte.
E troque a seta do "Se então" pelo conectivo "E".
Exemplo de prova: Negue a proposição: "Se Gean estuda todo dia, então ele será aprovado na PMPE".
Aplicando o MANÉ: Mantém a primeira: "Gean estuda todo dia". Conectivo E. Nega a segunda: "ele não será aprovado na PMPE".
Fica assim: "Gean estuda todo dia E não será aprovado na PMPE". Simples, direto e infalível!

Segunda regra de ouro: Como negar uma conjunção com conectivo "E" ou uma disjunção com "OU"?
Regra de Augustus De Morgan:
Para negar o conectivo "E", você nega a primeira parte, troca o "E" por "OU", e nega a segunda parte.
Para negar o conectivo "OU", você nega a primeira parte, troca o "OU" por "E", e nega a segunda parte.
Exemplo: Negue "O recruta corre E o recruta atira".
Fica: "O recruta NÃO corre OU o recruta NÃO atira".

Terceira regra rápida: Equivalência lógica da condicional. "Se P então Q" equivale a "Se não Q, então não P". Volta negando tudo mantendo o Se... Então!

Aplique o MANÉ e De Morgan e garanta 100% de aproveitamento em RLM na prova da PMPE!`
  },
  {
    id: 'pod_04',
    number: 4,
    title: 'CADH Pacto de San José: Prisão Civil e Garantias Judiciais',
    subject: 'Direitos Humanos',
    category: 'direito',
    durationMinutes: 4,
    summary: 'A Convenção Americana de Direitos Humanos, o status supralegal dos tratados segundo o STF, a Súmula Vinculante 25 e a vedação à prisão do depositário infiel.',
    keyPoints: [
      'Pacto de San José da Costa Rica (1969), ratificado pelo Brasil em 1992.',
      'Status Supralegal: tratados de direitos humanos ratificados sem rito especial ficam abaixo da CF e acima das leis ordinárias.',
      'Prisão civil por dívida: admitida unicamente a do devedor voluntário e inescusável de alimentos.',
      'Súmula Vinculante 25 do STF: É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.',
      'Direito à vida: deve ser protegido pela lei a partir do momento da concepção.',
      'Vedação de restabelecimento da pena de morte nos países que a aboliram.'
    ],
    mnemonics: [
      'Depositário Infiel: Súmula Vinculante 25 paralisou a eficácia do Artigo 5º, LXVII da CF/88.',
      'Única prisão civil admitida hoje: PENSÃO ALIMENTÍCIA!'
    ],
    targetExamRule: 'A banca AOCP afirma que a prisão de depositário infiel ainda é válida porque consta no texto da CF. É pegadinha clássica! O Pacto de San José paralisou essa eficácia.',
    audioScript: `Combatente, Pílula Tática Número 4. Direitos Humanos na veia com o Pacto de San José da Costa Rica, a Convenção Americana sobre Direitos Humanos.

Este é um dos temas prediletos da banca AOCP. Vamos destacar os pontos cruciais que você precisa levar para o cartão-resposta:

Primeiro ponto: Prisão civil por dívida.
O Artigo 7º, parágrafo 7º da Convenção Americana estabelece categoricamente: Ninguém deve ser detido por dívidas. Este princípio não limita os mandados de autoridade judiciária competente expedidos por inadimplemento de obrigação alimentar.
Ou seja, para o Pacto de San José, a ÚNICA prisão civil admitida é a do devedor de pensão alimentícia!
Mas atenção: a Constituição Federal de 88 ainda traz no seu texto a possibilidade de prisão do depositário infiel. O que aconteceu?
O STF, no histórico julgamento do Recurso Extraordinário 466.343, definiu que os tratados internacionais de direitos humanos ratificados pelo Brasil têm status SUPRALEGAL. Isso culminou na edição da Súmula Vinculante número 25: É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.

Segundo ponto vital: O direito à vida.
O Artigo 4º da Convenção dispõe que o direito à vida deve ser protegido pela lei e, em geral, desde o momento da concepção. Ninguém pode ser privado da vida arbitrariamente.

Terceiro ponto: Pena de morte.
O Pacto veda terminantemente que países que já tenham abolido a pena de morte a restabeleçam. Nos países que ainda não a aboliram, só poderá ser imposta pelos delitos mais graves.

Grave para a prova: Tratados de Direitos Humanos têm status supralegal; prisão civil no Brasil hoje, somente para devedor de alimentos; prisão de depositário infiel é ILÍCITA segundo a Súmula Vinculante 25!`
  },
  {
    id: 'pod_05',
    number: 5,
    title: 'Português AOCP: Casos Proibidos, Obrigatórios e Facultativos de Crase',
    subject: 'Língua Portuguesa',
    category: 'portugues',
    durationMinutes: 4,
    summary: 'Domine a crase para o concurso da PMPE. Identifique instantaneamente as proibições absolutas e os 3 casos facultativos com o mnemônico HÁ CRUZEIRO.',
    keyPoints: [
      'Crase é a fusão da preposição "a" com o artigo definido feminino "a" ou pronomes demonstrativos aquele/aquela/aquilo.',
      'Proibida: antes de palavras masculinas, antes de verbos, antes de pronomes de tratamento e de pronomes indefinidos/pessoais.',
      'Proibida: diante de palavras no plural se o "a" estiver no singular ("a mulheres" nunca tem crase).',
      'Obrigatória: locuções prepositivas, conjuntivas e adverbiais femininas (à noite, à tarde, às pressas, à medida que).',
      'Facultativa: mnemônico "ATÉ A MARIA DA MINHA FAMÍLIA" (após preposição até, antes de nome próprio feminino e antes de pronome possessivo feminino singular).'
    ],
    mnemonics: [
      'Regra da Troca por Masculino: Troque a palavra feminina por masculina. Deu "AO"? Crase no "A"! Deu "O"? Crase não!',
      'Crase Proibida: Homem, Verbo e Pronome, a crase passa longe!',
      'Crase Facultativa: "ATÉ a sua DONA" (Preposição Até, Pronome Possessivo Feminino Singular, Nome Próprio Feminino).'
    ],
    targetExamRule: 'A banca AOCP adora frases como "Referiu-se a pessoas desconhecidas". O "a" está no singular e "pessoas" no plural: CRASE PROIBIDA!',
    audioScript: `Atenção soldado! Pílula Tática Número 5. Língua Portuguesa com a banca Instituto AOCP: Dominando a Crase de forma definitiva.

Língua Portuguesa é o maior peso da sua prova. Para gabaritar as questões de crase, decore estas três regras táticas:

Regra 1: O Teste do Masculino.
Está em dúvida se vai crase? Troque a palavra feminina por uma equivalente masculina. Se na troca aparecer "AO", no feminino haverá crase com acento grave. Se aparecer apenas "O", não há crase!
Exemplo: "Fui à praça". Troque praça por quartel: "Fui AO quartel". Deu "ao", então "Fui à praça" tem crase!
Outro exemplo: "Conheço a cidade". Troque por estado: "Conheço O estado". Deu apenas "o", logo "Conheço a cidade" não tem crase.

Regra 2: Crase TERMINANTEMENTE PROIBIDA.
A banca AOCP tenta empurrar crase onde ela não pode existir. Nunca use crase:
1: Antes de palavras masculinas: "Andar a pé", "pagamento a prazo".
2: Antes de verbos no infinitivo: "Disposto a lutar", "começou a correr".
3: Quando o "A" estiver no singular e a palavra seguinte estiver no plural: "Não vou a festas". "A" no singular, palavra no plural, crase nem a pau!
4: Antes da maioria dos pronomes: "Falei a ela", "entreguei a todos".

Regra 3: Crase FACULTATIVA.
Decore este trio:
Primeiro: Antes de nomes próprios femininos familiares: "Entreguei o livro à Juliana" ou "a Juliana".
Segundo: Antes de pronomes possessivos femininos no singular: "Fiz menção à minha farda" ou "a minha farda".
Terceiro: Após a preposição "até": "Fui até à guarnição" ou "até a guarnição".

Grave no seu manual: Antes de homem e verbo não tem crase. "A" no singular seguido de plural não tem crase. Deu "AO" no masculino, tem crase no feminino!`
  },
  {
    id: 'pod_06',
    number: 6,
    title: 'Legislação Penal Especial: 3T + H e o Mnemônico da RAÇÃO',
    subject: 'Legislação Extravagante',
    category: 'legislacao',
    durationMinutes: 4,
    summary: 'A sistemática constitucional dos crimes inafiançáveis e insuscetíveis de graça ou anistia, imprescritíveis e sujeitos à perda de direitos.',
    keyPoints: [
      'Inafiançáveis e Insuscetíveis de Graça ou Anistia: 3T + H (Tortura, Tráfico ilícito de entorpecentes, Terrorismo e Crimes Hediondos).',
      'Inafiançáveis e Imprescritíveis: RAÇÃO (Racismo e Ação de grupos armados contra a ordem constitucional).',
      'Racismo é punido com reclusão nos termos da lei.',
      'Equiparação da Injúria Racial ao Racismo (Lei 14.532/23): agora também imprescritível e inafiançável!',
      'Crimes hediondos não admitem fiança, anistia ou indulto/graça.'
    ],
    mnemonics: [
      '3T + H: Tortura, Tráfico, Terrorismo e Hediondos -> Não tem Fiança e nem Graça/Anistia!',
      'RAÇÃO: RA-cismo e AÇÃO de grupos armados -> Inafiançáveis e IMPRESCRITÍVEIS!'
    ],
    targetExamRule: 'A banca AOCP mistura quem é insuscetível de graça com quem é imprescritível. Lembre-se: Imprescritível só tem DOIS: Racismo e Ação de grupos armados!',
    audioScript: `Sentido recruta! Pílula Tática Número 6. Legislação Constitucional e Penal Especial: A separação definitiva entre os crimes inafiançáveis, imprescritíveis e insuscetíveis de anistia.

O Artigo 5º da Constituição Federal traz um quadro comparativo que a banca AOCP adora misturar. Vamos blindar a sua mente com dois mnemônicos lendários:

Primeiro mnemônico: O 3T mais H.
Quem são eles?
Tortura, Tráfico ilícito de entorpecentes, Terrorismo e os definidos como Crimes Hediondos.
Por eles respondem os mandantes, os executores e os que, podendo evitá-los, se omitirem.
Qual é a consequência constitucional do 3T mais H?
Eles são INAFIANÇÁVEIS e INSUSCETÍVEIS DE GRAÇA OU ANISTIA.
Grave bem: o 3T mais H prescreve? SIM! Eles prescrevem com o passar dos anos previstos no Código Penal. A Constituição NÃO disse que eles são imprescritíveis!

Agora o segundo mnemônico: O Mnemônico da RAÇÃO.
Quem são os crimes IMPRESCRITÍVEIS segundo a nossa Carta Magna?
R-A: Racismo.
AÇÃO: Ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático.
O que esses dois têm de especial?
Eles são INAFIANÇÁVEIS e IMPRESCRITÍVEIS.
Ou seja, não cabe fiança e o Estado pode punir a qualquer tempo, mesmo que se passem 30, 40 ou 50 anos!
E atualização quentíssima: A Lei 14.532 de 2023 equiparou a injúria racial ao crime de racismo, tornando a injúria racial também inafiançável e imprescritível!

Repita comigo em voz alta: 3T mais H não tem fiança nem graça. RAÇÃO não tem fiança e NUNCA PRESCREVE! Essa é a farda que te espera na PMPE!`
  },
  {
    id: 'pod_07',
    number: 7,
    title: 'Estatuto da PMPE (Lei Estadual 6.783/74): Hierarquia e Disciplina',
    subject: 'Legislação PMPE',
    category: 'legislacao',
    durationMinutes: 4,
    summary: 'Os pilares basilares da Corporação Militar pernambucana: a distinção entre posto e graduação, comando, subordinação e as situações de atividade e inatividade.',
    keyPoints: [
      'Bases institucionais: Hierarquia e Disciplina são as bases da Polícia Militar de Pernambuco.',
      'Posto é o grau hierárquico do Oficial, conferido por Carta Patente expedida pelo Governador.',
      'Graduação é o grau hierárquico da Praça, conferida pelo Comandante-Geral da Corporação.',
      'Militares da Ativa: policiais de carreira, incluídos e convocados.',
      'Militares da Inatividade: Reserva Remunerada (percebem remuneração e estão sujeitos à convocação) e Reformados (dispensados definitivamente de prestar serviço).',
      'O comando é a prerrogativa privativa militar, vinculada ao grau hierárquico.'
    ],
    mnemonics: [
      'Oficial tem POSTO (dado pelo Governador). Praça tem GRADUAÇÃO (dada pelo Comandante-Geral).',
      'Inatividade: RESERVA pode voltar; REFORMADO tá aposentado de vez (nunca mais volta).'
    ],
    targetExamRule: 'A banca AOCP afirma que a Praça recebe seu grau por Carta Patente do Governador. FALSO! Carta Patente é exclusiva de Oficiais. Praças têm graduação conferida pelo Comandante-Geral.',
    audioScript: `Atenção guarnição! Pílula Tática Número 7. Legislação Específica da PMPE: A Lei Estadual 6.783 de 1974, o Estatuto dos Policiais Militares de Pernambuco.

Todo futuro soldado da PMPE tem a obrigação moral e tática de dominar os artigos iniciais do Estatuto. Vamos aos conceitos que mais caem em prova:

Primeiro: A hierarquia e a disciplina são as bases institucionais da Polícia Militar. A autoridade e a responsabilidade crescem com o grau hierárquico.
A hierarquia militar é a ordenação da autoridade em níveis diferentes, dentro da estrutura das Forças Policiais.

Segundo: A diferença fundamental entre Posto e Graduação.
O POSTO é o grau hierárquico do OFICIAL, conferido por ato do Governador do Estado e confirmado em Carta Patente.
A GRADUAÇÃO é o grau hierárquico da PRAÇA, conferida por ato do Comandante-Geral da Polícia Militar.
Quando você for aprovado e nomeado Soldado, você receberá uma Graduação, conferida pelo Comandante-Geral!

Terceiro: As duas situações do policial militar.
O policial militar pode estar:
1: Na ATIVA: engloba os policiais de carreira, os convocados e os componentes da reserva quando convocados.
2: Na INATIVIDADE: dividida em duas categorias:
A Reserva Remunerada: policiais que recebem remuneração do Estado e ainda estão sujeitos à prestação de serviços na ativa, mediante convocação extraordinária.
E os Reformados: policiais que estão dispensados DEFINITIVAMENTE da prestação de serviço, por terem atingido a idade limite ou por incapacidade definitiva.

Grave o bizu do Comandante Gean: Posto é do Oficial dado pelo Governador. Graduação é da Praça dada pelo Comandante-Geral. Reserva pode ser chamada; Reformado nunca mais volta!`
  },
  {
    id: 'pod_08',
    number: 8,
    title: 'Informática AOCP: Malware, Phishing vs Pharming e Ransomware',
    subject: 'Informática Básica',
    category: 'informatica',
    durationMinutes: 3,
    summary: 'Os conceitos cruciais de segurança da informação mais cobrados pela AOCP: vírus, worms, cavalos de troia, phishing, envenenamento de DNS (pharming) e ransomware.',
    keyPoints: [
      'Vírus: precisa de um hospedeiro e de execução explícita pelo usuário para se propagar.',
      'Worm (Verme): propaga-se automaticamente pela rede explorando vulnerabilidades, sem precisar de hospedeiro.',
      'Trojan (Cavalo de Troia): parece um programa legítimo e inofensivo, mas executa funções maliciosas em segundo plano.',
      'Ransomware: malware de sequestro digital que criptografa os arquivos do usuário e exige resgate (normalmente em criptomoedas).',
      'Phishing: técnica de engenharia social que tenta enganar o usuário por e-mails ou mensagens falsas com links fraudulentos.',
      'Pharming: ataque de envenenamento de DNS que redireciona o tráfego da vítima para sites falsos, mesmo quando ela digita o endereço correto.'
    ],
    mnemonics: [
      'Worm: Anda Sozinho pela Rede sem precisar de hospedeiro!',
      'Ransomware: RANSOM significa RESGATE em inglês (sequestra arquivos com criptografia).',
      'Pharming: Envenena a FAZENDA do DNS!'
    ],
    targetExamRule: 'A banca AOCP troca Phishing (mensagem falsa com isca) com Pharming (alteração direta da tabela de DNS). Fique atento à palavra "DNS" no enunciado: falou em DNS é Pharming!',
    audioScript: `Alô combatente! Pílula Tática Número 8. Noções de Informática focadas nas pragas virtuais e engenharia social segundo a banca AOCP.

Na prova da PMPE, segurança da informação é matéria obrigatória. Não perca nenhum ponto decorando estas definições clássicas:

Primeiro: Vírus versus Worm.
O Vírus é um parasita digital: ele PRECISA de um arquivo hospedeiro e precisa da AÇÃO DO USUÁRIO para ser executado e contaminar a máquina.
O Worm, ou verme da rede, é autônomo: ele NÃO precisa de arquivo hospedeiro e se propaga sozinho pela rede explorando falhas de segurança dos sistemas operacionais.

Segundo: O temido Ransomware.
A palavra "ransom" em inglês significa resgate. O Ransomware é o malware sequestrador: ele infecta a máquina, CRIPTOGRAFA os arquivos pessoais do usuário e exibe uma tela exigindo o pagamento de um resgate, geralmente em Bitcoin, para fornecer a chave de descriptografia.

Terceiro: Phishing versus Pharming.
Phishing vem de pescaria com isca: é o envio de e-mails ou mensagens falsas de bancos ou tribunais, induzindo o usuário a clicar em um link falso e entregar suas senhas.
Já o Pharming é muito mais sofisticado: é um ataque de envenenamento de cache DNS. Mesmo que você digite corretamente o endereço do seu banco na barra do navegador, o ataque altera a rota e te redireciona automaticamente para um servidor clonado dos criminosos.

Resumo veloz da prova:
Vírus precisa de hospedeiro. Worm anda sozinho pela rede. Ransomware criptografa e cobra resgate. E-mail com isca é Phishing. Alteração de DNS é Pharming.

Missão cumprida nas 8 Pílulas Táticas! Agora revise, faça questões e conquiste a sua farda na PMPE 2026!`
  }
];
