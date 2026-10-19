/**
 * BANCO DE DADOS INTEGRAL DE LEGISLAÇÃO SECAS - EDITAL OFICIAL PMPE 2026
 * Textos atualizados conforme o Palácio do Planalto e Legislação do Estado de Pernambuco.
 * Inclui:
 * 1. Lei Federal nº 8.072/1990 (Crimes Hediondos e Equiparados - Pacote Anticrime e atualizações)
 * 2. Direitos Humanos: DUDH (30 Artigos na íntegra) e CADH (Pacto de San José da Costa Rica)
 * 3. Estatuto dos Policiais Militares de Pernambuco (Lei Estadual nº 6.783/1974)
 * 4. Constituição Federal de 1988 (Art. 5º completo, Art. 142 e Art. 144)
 * 5. Leis Penais Especiais (Abuso de Autoridade, Tortura, Desarmamento, Maria da Penha, Drogas)
 */

export interface LawArticle {
  number: string;
  heading?: string;
  text: string;
  tip?: string; // Dica ou macete de prova AOCP
  warning?: string; // Pegadinha clássica da banca
  jurisprudence?: string; // Súmulas STF/STJ relevantes
}

export interface LawTopic {
  id: string;
  category: 'penal' | 'humanos' | 'pmpe' | 'constitucional' | 'especiais';
  shortTitle: string;
  fullTitle: string;
  officialRef: string;
  badge: string;
  icon: string;
  summary: string;
  articles: LawArticle[];
}

export const MILITARY_LAWS_DATA: LawTopic[] = [
  // =========================================================================
  // 1. CRIMES HEDIONDOS (LEI Nº 8.072/1990)
  // =========================================================================
  {
    id: 'crimes_hediondos',
    category: 'penal',
    shortTitle: 'Crimes Hediondos',
    fullTitle: 'Lei Federal nº 8.072/1990 • Dispõe sobre os Crimes Hediondos',
    officialRef: 'Presidência da República / Planalto • Atualizada até 2026',
    badge: 'Lei 8.072/90 • Rol Taxativo',
    icon: '🚨',
    summary: 'A Lei dos Crimes Hediondos adota o critério legal (rol taxativo). Contém todas as alterações do Pacote Anticrime (Lei 13.964/2019) e Leis 14.811/2024.',
    articles: [
      {
        number: 'Artigo 1º (Rol Taxativo)',
        heading: 'Quais crimes são formalmente Hediondos (Consumados ou Tentados)',
        text: `Art. 1º São considerados hediondos os seguintes crimes, todos tipificados no Decreto-Lei no 2.848, de 7 de dezembro de 1940 - Código Penal, consumados ou tentados:

I - homicídio (art. 121), quando praticado em atividade típica de grupo de extermínio, ainda que cometido por um só agente, e homicídio qualificado (art. 121, § 2º, incisos I, II, III, IV, V, VI, VII, VIII e IX);

I-A - lesão corporal dolosa de natureza gravíssima (art. 129, § 2º) e lesão corporal seguida de morte (art. 129, § 3º), quando praticadas contra autoridade ou agente descrito nos arts. 142 e 144 da Constituição Federal, integrantes do sistema prisional e da Força Nacional de Segurança Pública, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição;

II - roubo:
a) circunstanciado pela restrição de liberdade da vítima (art. 157, § 2º, inciso V);
b) circunstanciado pelo emprego de arma de fogo (art. 157, § 2º-A, inciso I) ou pelo emprego de arma de fogo de uso proibido ou restrito (art. 157, § 2º-B);
c) qualificado pelo resultado lesão corporal grave ou morte - Latrocínio (art. 157, § 3º);

III - extorsão qualificada pela restrição da liberdade da vítima, ocorrência de lesão corporal grave ou morte (art. 158, § 2º e § 3º);

IV - extorsão mediante sequestro e na forma qualificada (art. 159, caput, e §§ 1º, 2º e 3º);

V - estupro (art. 213, caput e §§ 1º e 2º);

VI - estupro de vulnerável (art. 217-A, caput e §§ 1º, 2º, 3º e 4º);

VII - epidemia com resultado morte (art. 267, § 1º);

VII-B - falsificação, corrupção, adulteração ou alteração de produto destinado a fins medicinais (art. 273, caput e § 1º, § 1º-A e § 1º-B);

VIII - favorecimento da prostituição ou de outra forma de exploração sexual de criança ou adolescente ou de vulnerável (art. 218-B, caput e §§ 1º e 2º);

IX - furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum (art. 155, § 4º-A);

Parágrafo único. Consideram-se também hediondos, tentados ou consumados:
I - o crime de genocídio, previsto nos arts. 1º, 2º e 3º da Lei nº 2.889, de 1º de outubro de 1956;
II - o crime de posse ou porte ilegal de arma de fogo de uso proibido, previsto no art. 16 da Lei nº 10.826, de 22 de dezembro de 2003;
III - o crime de comércio ilegal de armas de fogo, previsto no art. 17 da Lei nº 10.826, de 2003;
IV - o crime de tráfico internacional de arma de fogo, acessório ou munição, previsto no art. 18 da Lei nº 10.826, de 2003;
V - o crime de organização criminosa, quando direcionado à prática de crime hediondo ou equiparado.`,
        tip: 'CRITÉRIO TAXATIVO: No Brasil, juiz NUNCA pode considerar um crime hediondo se ele não estiver expressamente escrito no Art. 1º. Se a AOCP inventar um crime grave que não está no artigo, NÃO É HEDIONDO!',
        warning: 'Homicídio simples NÃO é hediondo! Só é hediondo se for qualificado (qualquer qualificadora) OU se praticado em atividade típica de grupo de extermínio (mesmo que por um só agente). Furto com explosivo é hediondo, mas roubo com explosivo NÃO é hediondo pelo rol estrito da lei.'
      },
      {
        number: 'Artigo 2º',
        heading: 'Vedações Constitucionais, Inafiançabilidade e Prisão Temporária',
        text: `Art. 2º Os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins e o terrorismo são insuscetíveis de:
I - anistia, graça e indulto;
II - fiança.

§ 1º A pena por crime previsto neste artigo será cumprida inicialmente em regime fechado. (ATENÇÃO: STF declarou inconstitucional a fixação obrigatória do regime inicial fechado - HC 111.840; o juiz deve analisar o art. 33 do CP).

§ 2º A progressão de regime, no caso dos condenados aos crimes previstos neste artigo, dar-se-á nos termos do art. 112 da Lei nº 7.210/1984 (LEP).

§ 3º Em caso de sentença condenatória, o juiz decidirá fundamentadamente se o réu poderá apelar em liberdade.

§ 4º A prisão temporária, sobre a qual dispõe a Lei no 7.960, de 21 de dezembro de 1989, nos crimes previstos neste artigo, terá o prazo de 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.`,
        tip: 'MNEMÔNICO T.T.T.: Tortura, Tráfico e Terrorismo NÃO são crimes hediondos em si, mas são EQUIPARADOS aos hediondos para todos os efeitos de vedações e prazos!',
        warning: 'PRAZO DA TEMPORÁRIA: Crimes comuns = 5 dias (+5 dias). Crimes HEDIONDOS e EQUIPARADOS = 30 dias (+30 dias). Questão batida da banca AOCP!'
      },
      {
        number: 'Art. 112 da LEP (Pacote Anticrime)',
        heading: 'Escadinha de Progressão de Regime nos Crimes Hediondos',
        text: `Com a revogação das frações de 2/5 e 3/5 pelo Pacote Anticrime (Lei nº 13.964/2019), a progressão de regime em crimes hediondos e equiparados segue os seguintes percentuais no Art. 112 da LEP:

• 40% (quarenta por cento) da pena: réu primário condenado por crime hediondo ou equiparado, SEM resultado morte;
• 50% (cinquenta por cento) da pena: réu condenado por crime hediondo ou equiparado COM resultado morte (se for primário), vedado o livramento condicional;
• 50% (cinquenta por cento) da pena: condenado por exercer o comando de organização criminosa estruturada para a prática de crime hediondo ou equiparado;
• 60% (sessenta por cento) da pena: réu REINCIDENTE na prática de crime hediondo ou equiparado (reincidência específica);
• 70% (setenta por cento) da pena: réu REINCIDENTE em crime hediondo ou equiparado COM resultado morte, vedado o livramento condicional.`,
        tip: 'Guarde os percentuais: 40% (sem morte) ➔ 50% (com morte primário) ➔ 60% (reincidente) ➔ 70% (reincidente com morte).',
        warning: 'Se a questão falar em 2/5 (40%) ou 3/5 (60%) dizendo que ainda é a redação da Lei 8.072/90, marque ERRADO. O Pacote Anticrime revogou formalmente o § 2º do Art. 2º da Lei 8.072 e transferiu tudo para a LEP!'
      }
    ]
  },

  // =========================================================================
  // 2. DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS (DUDH 1948)
  // =========================================================================
  {
    id: 'dudh_1948',
    category: 'humanos',
    shortTitle: 'DUDH (1948)',
    fullTitle: 'Declaração Universal dos Direitos Humanos • Adotada pela ONU em 10/12/1948',
    officialRef: 'Resolução 217 A (III) da Assembleia Geral das Nações Unidas',
    badge: '30 Artigos na Íntegra • ONU',
    icon: '🕊️',
    summary: 'Documento marco da história dos Direitos Humanos. Proclamada em Paris como norma comum a ser alcançada por todos os povos e nações.',
    articles: [
      {
        number: 'Artigo 1º ao 5º',
        heading: 'Liberdade, Vida, Dignidade e Vedação Absoluta à Tortura',
        text: `Artigo 1º: Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.

Artigo 2º: Todo ser humano tem capacidade para gozar os direitos e as liberdades estabelecidos nesta Declaração, sem distinção de qualquer espécie, seja de raça, cor, sexo, idioma, religião, opinião política ou de outra natureza, origem nacional ou social, riqueza, nascimento, ou qualquer outra condição.

Artigo 3º: Todo ser humano tem direito à vida, à liberdade e à segurança pessoal.

Artigo 4º: Ninguém será mantido em escravidão ou servidão; a escravidão e o tráfico de escravos serão proibidos em todas as suas formas.

Artigo 5º: Ninguém será submetido à tortura, nem a tratamento ou castigo cruel, desumano ou degradante.`,
        tip: 'A DUDH NÃO é um tratado internacional tradicional (foi aprovada como Resolução da Assembleia Geral da ONU). Porém, possui força de norma imperativa de direito internacional geral (Jus Cogens).',
        warning: 'Pegadinha AOCP: A DUDH NÃO proíbe expressamente a pena de morte no Artigo 3º! Ela garante o direito à vida de forma genérica. Quem restringe e veda a restauração é a Convenção Americana (Pacto de San José).'
      },
      {
        number: 'Artigo 6º ao 11',
        heading: 'Garantias Judiciais, Personalidade e Presunção de Inocência',
        text: `Artigo 6º: Todo ser humano tem o direito de ser, em todos os lugares, reconhecido como pessoa perante a lei.

Artigo 7º: Todos são iguais perante a lei e têm direito, sem qualquer distinção, a igual proteção da lei. Todos têm direito a igual proteção contra qualquer discriminação que viole a presente Declaração e contra qualquer incitamento a tal discriminação.

Artigo 8º: Todo ser humano tem direito a receber dos tribunais nacionais competentes remédio efetivo para os atos que violem os direitos fundamentais que lhe sejam reconhecidos pela constituição ou pela lei.

Artigo 9º: Ninguém será arbitrariamente preso, detido ou exilado.

Artigo 10: Todo ser humano tem direito, em plena igualdade, a uma justa e pública audiência por parte de um tribunal independente e imparcial, para decidir sobre seus direitos e deveres ou do fundamento de qualquer acusação criminal contra ele.

Artigo 11:
1. Todo ser humano acusado de um ato delituoso tem o direito de ser presumido inocente até que a sua culpabilidade tenha sido provada de acordo com a lei, em julgamento público no qual lhe tenham sido asseguradas todas as garantias necessárias à sua defesa.
2. Ninguém poderá ser culpado por qualquer ação ou omissão que, no momento, não constituíam delito perante o direito nacional ou internacional. Tampouco será imposta pena mais forte do que aquela que, no momento da prática, era aplicável ao ato delituoso.`,
        tip: 'O Artigo 11 consagra tanto a Presunção de Inocência quanto o Princípio da Anterioridade e Irretroatividade Penal.',
        warning: 'Atenção aos termos: O Artigo 9º veda prisão, detenção ou EXÍLIO arbitrário.'
      },
      {
        number: 'Artigo 12 ao 17',
        heading: 'Intimidade, Locomoção, Asilo, Nacionalidade e Propriedade',
        text: `Artigo 12: Ninguém será sujeito à interferência em sua vida privada, em sua família, em seu lar ou em sua correspondência, nem a ataques à sua honra e reputação. Todo ser humano tem direito à proteção da lei contra tais interferências ou ataques.

Artigo 13:
1. Todo ser humano tem direito à liberdade de locomoção e residência dentro das fronteiras de cada Estado.
2. Todo ser humano tem o direito de deixar qualquer país, inclusive o próprio, e a este regressar.

Artigo 14:
1. Todo ser humano, vítima de perseguição, tem o direito de procurar e de gozar asilo em outros países.
2. Este direito não pode ser invocado em caso de perseguição legitimamente motivada por crimes de direito comum ou por atos contrários aos objetivos e princípios das Nações Unidas.

Artigo 15:
1. Todo ser humano tem direito a uma nacionalidade.
2. Ninguém será arbitrariamente privado de sua nacionalidade, nem do direito de mudar de nacionalidade.

Artigo 16:
1. Homens e mulheres de maior idade, sem qualquer restrição de raça, nacionalidade ou religião, têm o direito de contrair matrimônio e fundar uma família. Gozam de iguais direitos em relação ao casamento, sua duração e sua dissolução.
2. O casamento não será válido senão com o livre e pleno consentimento dos nubentes.
3. A família é o núcleo natural e fundamental da sociedade e tem direito à proteção da sociedade e do Estado.

Artigo 17:
1. Todo ser humano tem direito à propriedade, só ou em sociedade com outros.
2. Ninguém será arbitrariamente privado de sua propriedade.`,
        tip: 'O direito de asilo (Art. 14) NÃO pode ser concedido a autores de crimes comuns nem a terroristas ou violadores de princípios da ONU.',
        warning: 'A propriedade pode ser individual ou em sociedade com outros (Art. 17).'
      },
      {
        number: 'Artigo 18 ao 23',
        heading: 'Pensamento, Reunião, Voto, Trabalho e Previdência',
        text: `Artigo 18: Todo ser humano tem direito à liberdade de pensamento, consciência e religião; este direito inclui a liberdade de mudar de religião ou crença e a liberdade de manifestar essa religião ou crença, pelo ensino, pela prática, pelo culto e pela observância, em público ou em particular.

Artigo 19: Todo ser humano tem direito à liberdade de opinião e expressão; este direito inclui a liberdade de, sem interferência, ter opiniões e de procurar, receber e transmitir informações e idéias por quaisquer meios e independentemente de fronteiras.

Artigo 20:
1. Todo ser humano tem direito à liberdade de reunião e associação pacíficas.
2. Ninguém pode ser obrigado a fazer parte de uma associação.

Artigo 21:
1. Todo ser humano tem o direito de tomar parte no governo de seu país diretamente ou por intermédio de representantes livremente escolhidos.
2. Todo ser humano tem igual direito de acesso ao serviço público do seu país.
3. A vontade do povo é o fundamento da autoridade do governo; esta vontade será expressa em eleições periódicas e legítimas, por sufrágio universal, por voto secreto ou processo equivalente que assegure a liberdade de voto.

Artigo 22: Todo ser humano, como membro da sociedade, tem direito à segurança social e à realização, pelo esforço nacional, pela cooperação internacional e de acordo com a organização e recursos de cada Estado, dos direitos econômicos, sociais e culturais indispensáveis à sua dignidade e ao livre desenvolvimento da sua personalidade.

Artigo 23:
1. Todo ser humano tem direito ao trabalho, à livre escolha de emprego, a condições justas e favoráveis de trabalho e à proteção contra o desemprego.
2. Todo ser humano, sem qualquer distinção, tem direito a igual remuneração por igual trabalho.
3. Todo ser humano que trabalha tem direito a uma remuneração justa e satisfatória, que lhe assegure, assim como à sua família, uma existência compatível com a dignidade humana.
4. Todo ser humano tem o direito de organizar sindicatos e a eles ingressar para proteção de seus interesses.`,
        tip: 'A DUDH protege tanto os direitos de 1ª geração (liberdade, voto, expressão) quanto de 2ª geração (trabalho, remuneração igual, previdência social).',
        warning: 'Art. 20, item 2: Ninguém pode ser OBRIGADO a fazer parte de uma associação. É a liberdade associativa negativa.'
      },
      {
        number: 'Artigo 24 ao 30',
        heading: 'Repouso, Saúde, Educação, Cultura e Deveres para com a Comunidade',
        text: `Artigo 24: Todo ser humano tem direito a repouso e lazer, inclusive a limitação razoável das horas de trabalho e a férias remuneradas periódicas.

Artigo 25:
1. Todo ser humano tem direito a um padrão de vida capaz de assegurar a si e a sua família saúde e bem estar, inclusive alimentação, vestuário, habitação, cuidados médicos e os serviços sociais necessários, e direito à segurança em caso de desemprego, doença, invalidez, viuvez, velhice ou outros casos de perda dos meios de subsistência em circunstâncias fora de seu controle.
2. A maternidade e a infância têm direito a cuidados e assistência especiais. Todas as crianças, nascidas dentro ou fora do matrimônio, gozam da mesma proteção social.

Artigo 26:
1. Todo ser humano tem direito à instrução. A instrução será gratuita, pelo menos nos graus elementares e fundamentais. A instrução elementar será obrigatória. A instrução técnico-profissional será acessível a todos, bem como a instrução superior, esta baseada no mérito.
2. A instrução será orientada no sentido do pleno desenvolvimento da personalidade humana e do fortalecimento do respeito pelos direitos humanos e pelas liberdades fundamentais.
3. Os pais têm prioridade de direito na escolha do gênero de instrução que será ministrada a seus filhos.

Artigo 27:
1. Todo ser humano tem o direito de participar livremente da vida cultural da comunidade, de fruir as artes e de participar do progresso científico e de seus benefícios.
2. Todo ser humano tem direito à proteção dos interesses morais e materiais decorrentes de qualquer produção científica, literária ou artística da qual seja autor.

Artigo 28: Todo ser humano tem direito a uma ordem social e internacional em que os direitos e liberdades estabelecidos na presente Declaração possam ser plenamente realizados.

Artigo 29:
1. Todo ser humano tem deveres para com a comunidade, na qual o livre e pleno desenvolvimento de sua personalidade é possível.
2. No exercício de seus direitos e liberdades, todo ser humano estará sujeito apenas às limitações determinadas pela lei, exclusivamente com o fim de assegurar o devido reconhecimento e respeito dos direitos e liberdades de outrem e de satisfazer as justas exigências da moral, da ordem pública e do bem-estar de uma sociedade democrática.
3. Esses direitos e liberdades não podem, em hipótese alguma, ser exercidos contrariamente aos objetivos e princípios das Nações Unidas.

Artigo 30: Nenhuma disposição da presente Declaração pode ser interpretada como o reconhecimento a qualquer Estado, grupo ou pessoa, do direito de exercer qualquer atividade ou praticar qualquer ato destinado à destruição de quaisquer dos direitos e liberdades aqui estabelecidos.`,
        tip: 'O Artigo 29 lembra que o indivíduo também possui DEVERES para com a comunidade. Direitos humanos não são absolutos e podem sofrer limitações legais para a garantia da ordem pública democrática.',
        warning: 'Artigo 26: O ensino fundamental/elementar é GRATUITO e OBRIGATÓRIO; o superior é baseado no MÉRITO. Os PAIS têm prioridade na escolha do gênero de instrução de seus filhos.'
      }
    ]
  },

  // =========================================================================
  // 3. CONVENÇÃO AMERICANA DE DIREITOS HUMANOS (CADH - PACTO DE SAN JOSÉ)
  // =========================================================================
  {
    id: 'cadh_pacto_san_jose',
    category: 'humanos',
    shortTitle: 'Pacto de San José (CADH)',
    fullTitle: 'Convenção Americana sobre Direitos Humanos (1969) • Promulgada pelo Dec. 678/1992',
    officialRef: 'Organização dos Estados Americanos (OEA) • Status Supralegal no Brasil',
    badge: 'Status Supralegal • STF RE 466.343',
    icon: '⚖️',
    summary: 'Tratado internacional mais importante do continente americano. Criou a Comissão Interamericana e a Corte Interamericana de Direitos Humanos.',
    articles: [
      {
        number: 'Artigo 4º',
        heading: 'Direito à Vida (Desde a Concepção e Regras da Pena de Morte)',
        text: `Artigo 4º - Direito à Vida:
1. Toda pessoa tem o direito de que se respeite sua vida. Esse direito deve ser protegido pela lei e, em geral, desde o momento da concepção. Ninguém pode ser privado da vida arbitrariamente.

2. Nos países que não houverem abolido a pena de morte, esta só poderá ser imposta pelos delitos mais graves, em cumprimento de sentença final de tribunal competente e em conformidade com lei que estabeleça tal pena, promulgada antes da perpetração do delito. Tampouco se estenderá sua aplicação a delitos aos quais não se aplique atualmente.

3. Não se restabelecerá a pena de morte nos Estados que a hajam abolido (Princípio do Não Retrocesso / Efeito Cliquet).

4. Em nenhum caso pode a pena de morte ser aplicada por delitos políticos, nem por delitos comuns conexos com delitos políticos.

5. Não se deve impor a pena de morte a pessoa que, no momento da perpetração do delito, for menor de dezoito anos, ou maior de setenta anos de idade, nem aplicá-la a mulheres em estado de gravidez.

6. Toda pessoa condenada à morte tem o direito de solicitar anistia, indulto ou comutação da pena, os quais podem ser concedidos em todos os casos. Não se pode executar a pena de morte enquanto o pedido estiver pendente de decisão perante a autoridade competente.`,
        tip: 'PROTEÇÃO DA VIDA: A CADH expressamente protege a vida "em geral, desde o momento da concepção".',
        warning: 'A CADH proíbe a pena de morte para: menores de 18 anos, maiores de 70 anos e mulheres grávidas! Além disso, veda em crimes políticos e proíbe reintroduzi-la após abolida.'
      },
      {
        number: 'Artigo 7º',
        heading: 'Direito à Liberdade Pessoal, Audiência de Custódia e Prisão Civil',
        text: `Artigo 7º - Direito à Liberdade Pessoal:
1. Toda pessoa tem direito à liberdade e à segurança pessoais.

2. Ninguém pode ser privado de sua liberdade física, salvo pelas causas e nas condições fixadas previamente pelas constituições políticas dos Estados-Partes ou pelas leis de acordo com elas promulgadas.

3. Ninguém pode ser submetido a detenção ou encarceramento arbitrários.

4. Toda pessoa detida ou retida deve ser informada das razões da sua detenção e notificada, sem demora, da acusação ou das acusações formuladas contra ela.

5. Toda pessoa detida ou retida deve ser conduzida, sem demora, à presença de um juiz ou outra autoridade autorizada pela lei a exercer funções judiciais (AUDIÊNCIA DE CUSTÓDIA) e tem direito a ser julgada dentro de um prazo razoável ou a ser posta em liberdade, sem prejuízo de que prossiga o processo. A sua liberdade pode ser condicionada a garantias que assegurem o seu comparecimento em juízo.

6. Toda pessoa privada da liberdade tem direito a recorrer a um juiz ou tribunal competente, a fim de que este decida, sem demora, sobre a legalidade de sua prisão ou detenção e ordene sua soltura se a prisão ou a detenção for ilegal (Habeas Corpus).

7. Ninguém deve ser detido por dívidas. Este princípio não limita os mandados de autoridade judiciária competente expedidos em virtude de inadimplemento de obrigação alimentar.`,
        tip: 'SÚMULA VINCULANTE Nº 25 DO STF: "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito." Por força do Art. 7º, 7 da CADH (que possui status supralegal), no Brasil SÓ É PERMITIDA a prisão civil do devedor de alimentos!',
        warning: 'Audiência de Custódia: A CADH estabelece que o preso deve ser apresentado a um juiz "sem demora". No Brasil, o CPP fixa o prazo de até 24 horas.'
      },
      {
        number: 'Artigo 27',
        heading: 'Suspensão de Garantias em Estado de Emergência e Cláusula Pétrea',
        text: `Artigo 27 - Suspensão de Garantias:
1. Em caso de guerra, de perigo público, ou de outra emergência que ameace a independência ou segurança do Estado-Parte, este poderá adotar disposições que, na medida e pelo tempo estritamente limitados às exigências da situação, suspendam as obrigações contraídas em virtude desta Convenção, desde que tais disposições não sejam incompatíveis com as demais obrigações que lhe impõe o Direito Internacional e não encerrem discriminação alguma fundada em motivos de raça, cor, sexo, idioma, religião ou origem social.

2. A disposição precedente NÃO AUTORIZA A SUSPENSÃO DOS SEGUINTES DIREITOS:
• Direito ao Reconhecimento da Personalidade Jurídica (Artigo 3º);
• Direito à Vida (Artigo 4º);
• Direito à Integridade Pessoal (Artigo 5º);
• Proibição da Escravidão e Servidão (Artigo 6º);
• Princípio da Legalidade e da Retroatividade (Artigo 9º);
• Liberdade de Consciência e de Religião (Artigo 12);
• Proteção da Família (Artigo 17);
• Direito ao Nome (Artigo 18);
• Direitos da Criança (Artigo 19);
• Direito à Nacionalidade (Artigo 20);
• Direitos Políticos (Artigo 23);
• Nem das garantias judiciais indispensáveis para a proteção de tais direitos (Habeas Corpus - Art. 25).`,
        tip: 'NEM EM GUERRA nem em calamidade pública o Estado pode suspender o direito à vida, a proibição de tortura, o princípio da legalidade ou o Habeas Corpus.',
        warning: 'A liberdade de locomoção e a liberdade de reunião PODEM ser suspensas temporariamente em estado de defesa ou sítio, mas a proibição da tortura JAMAIS.'
      }
    ]
  },

  // =========================================================================
  // 4. ESTATUTO DOS POLICIAIS MILITARES DE PE (LEI ESTADUAL Nº 6.783/1974)
  // =========================================================================
  {
    id: 'estatuto_pmpe',
    category: 'pmpe',
    shortTitle: 'Estatuto dos PMs de PE',
    fullTitle: 'Lei Estadual nº 6.783/1974 • Estatuto dos Policiais Militares de Pernambuco',
    officialRef: 'Assembleia Legislativa de Pernambuco (ALEPE) • Atualizado',
    badge: 'Lei 6.783/74 • Carreira PMPE',
    icon: '🎖️',
    summary: 'Regula a situação, obrigações, deveres, direitos e prerrogativas dos membros da Polícia Militar de Pernambuco.',
    articles: [
      {
        number: 'Artigos 1º a 3º',
        heading: 'Generalidades e Destinação Constitucional da PMPE',
        text: `Art. 1º O presente Estatuto regula a situação, obrigações, deveres, direitos e prerrogativas dos policiais-militares do Estado de Pernambuco.

Art. 2º A Polícia Militar de Pernambuco, subordinada ao Governador do Estado, é uma instituição permanente, organizada com base na hierarquia e na disciplina, destinada à preservação da ordem pública e da incolumidade das pessoas e do patrimônio, sendo força auxiliar e reserva do Exército.

Art. 3º Os integrantes da Polícia Militar, em razão de sua destinação constitucional e em decorrência de leis especiais, constituem uma categoria especial de servidores públicos estaduais e são denominados policiais-militares.
§ 1º Os policiais-militares encontram-se em uma das seguintes situações:
a) na ativa:
1 - os policiais-militares de carreira;
2 - os incluídos na Polícia Militar voluntariamente, durante os prazos em que se obrigam a servir;
3 - os componentes da reserva remunerada da Polícia Militar, convocados;
4 - os alunos de órgãos de formação de policiais-militares da ativa.
b) na inatividade:
1 - na reserva remunerada, quando pertençam à reserva da Corporação e percebam remuneração do Estado, porém sujeitos, ainda, à prestação de serviço na ativa, mediante convocação;
2 - reformados, quando, dispensados definitivamente da prestação de serviço na ativa, continuem a perceber remuneração do Estado.`,
        tip: 'RESERVA REMUNERADA vs REFORMADO: O policial da reserva remunerada AINDA PODE ser convocado para o serviço ativo. O reformado foi dispensado DEFINITIVAMENTE e NUNCA MAIS pode ser convocado!',
        warning: 'Aluno de curso de formação de praça ou oficial é considerado militar DA ATIVA!'
      },
      {
        number: 'Artigos 13 a 17',
        heading: 'Hierarquia, Disciplina e Círculos Hierárquicos',
        text: `Art. 13. A hierarquia e a disciplina são a base institucional da Polícia Militar. A autoridade e a responsabilidade crescem com o grau hierárquico.
§ 1º A hierarquia militar é a ordenação da autoridade em níveis diferentes, dentro da estrutura das Forças Armadas e das Forças Auxiliares. A ordenação se faz por postos ou graduações; dentro de um mesmo posto ou de uma mesma graduação se faz pela antiguidade no posto ou na graduação.
§ 2º Disciplina é a rigorosa observância e o acatamento integral das leis, regulamentos, normas e disposições que fundamentam o organismo policial-militar e coordenam seu funcionamento regular e harmônico.

Art. 14. Círculos hierárquicos são âmbitos de convivência entre os policiais-militares da mesma categoria e têm a finalidade de desenvolver a camaradagem em ambiente de estima e confiança.

ESCALA HIERÁRQUICA:
• POSTO é o grau hierárquico do OFICIAL, conferido por Decreto do Governador do Estado e confirmado em Carta Patente;
• GRADUAÇÃO é o grau hierárquico da PRAÇA, conferida pelo Comandante Geral da Polícia Militar.

Círculos de Oficiais:
- Oficiais Superiores: Coronel, Tenente-Coronel, Major;
- Oficiais Intermediários: Capitão;
- Oficiais Subalternos: Primeiro-Tenente, Segundo-Tenente.

Praças Especiais:
- Aspirante-a-Oficial (frequenta o círculo de Oficiais Subalternos);
- Aluno-Oficial / Cadete (excepcionalmente com Oficiais Subalternos).

Círculos de Praças:
- Subtenentes e Sargentos: Subtenente, Primeiro-Sargento, Segundo-Sargento, Terceiro-Sargento;
- Cabos e Soldados: Cabo, Soldado.`,
        tip: 'Posto = Oficial (Governador concede por Carta Patente). Graduação = Praça (Comandante-Geral concede). Essa distinção cai em 99% das provas!',
        warning: 'Aspirante-a-Oficial e Cadete são PRAÇAS ESPECIAIS, não são oficiais formados ainda.'
      },
      {
        number: 'Artigos 50 a 64',
        heading: 'Direitos, Remuneração e Prerrogativas dos Militares Estaduais',
        text: `Art. 50. São direitos dos policiais-militares:
I - a garantia da patente em toda a sua plenitude, com as vantagens, prerrogativas e deveres a ela inerentes, quando Oficial;
II - a percepção de remuneração correspondente ao grau hierárquico;
III - a ocupação de cargo correspondente ao posto ou à graduação;
IV - o porte de arma, quando praça, com as restrições impostas pela Corporação; e para os oficiais em qualquer circunstância;
V - a estabilidade da praça após 10 (dez) anos de efetivo serviço;
VI - a transferência para a reserva remunerada, a pedido, ou a reforma;
VII - as férias, os afastamentos temporários do serviço e as licenças;
VIII - o funeral para si e seus dependentes, a expensas do Estado.

Art. 73. O policial-militar que se julgar prejudicado ou ofendido por qualquer ato administrativo poderá interpor recurso hierárquico dirigido à autoridade imediatamente superior.`,
        tip: 'ESTABILIDADE DA PRAÇA PMPE: A estabilidade é adquirida com 10 (DEZ) ANOS de efetivo serviço!',
        warning: 'Oficial tem porte de arma pleno e garantia da patente perpétua (só perde por decisão do Tribunal de Justiça do Estado em julgamento de indignidade).'
      },
      {
        number: 'Artigos 77 a 92',
        heading: 'Situações Especiais: Agregação, Ausente, Desertor e Extraviado',
        text: `Art. 77. A AGREGAÇÃO é a situação na qual o policial-militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo sem número.
Ocorre quando o militar:
I - for posto à disposição exclusiva de outro órgão público;
II - for candidato a cargo eletivo;
III - tiver ultrapassado 1 (um) ano contínuo de licença para tratamento de saúde de pessoa da família;
IV - tiver ultrapassado 2 (dois) anos de licença para tratar de interesse particular;
V - for considerado oficialmente desertor ou extraviado.

Art. 84. A REVERSÃO é o ato pelo qual o policial-militar agregado retorna ao respectivo Quadro, tão logo cesse o motivo que determinou a sua agregação.

Art. 85. É considerado AUSENTE o policial-militar que por mais de 24 (vinte e quatro) horas consecutivas:
I - deixar de comparecer à sua Organização Policial-Militar sem comunicar motivo;
II - ausentar-se, sem licença, da sede da Organização onde serve.

Art. 86. É considerado DESERTOR o policial-militar que permanecer ausente por mais de 8 (oito) dias consecutivos sem autorização.

Art. 87. É considerado DESAPARECIDO o policial-militar da ativa que, no desempenho de qualquer serviço, em operações policiais ou em caso de calamidade, tiver paradeiro ignorado por mais de 8 (oito) dias.
Se permanecer desaparecido por mais de 30 (trinta) dias, será considerado EXTRAVIADO.`,
        tip: 'LINHA DO TEMPO DA AUSÊNCIA E DESERÇÃO: Mais de 24 horas = AUSENTE. Mais de 8 dias = DESERTOR (crime propriamente militar!). Desaparecido: mais de 8 dias. Extraviado: mais de 30 dias.',
        warning: 'Cuidado para não confundir Agregação (continua na ativa, mas sem ocupar vaga no quadro) com Reforma (inatividade definitiva).'
      }
    ]
  },

  // =========================================================================
  // 5. CONSTITUIÇÃO FEDERAL DE 1988 (CF/88)
  // =========================================================================
  {
    id: 'cf88_direitos_seguranca',
    category: 'constitucional',
    shortTitle: 'CF/88: Art. 5º, 142 e 144',
    fullTitle: 'Constituição da República Federativa do Brasil de 1988',
    officialRef: 'Presidência da República / Planalto • Texto Constitucional Vigente',
    badge: 'Art. 5º, 142 e 144 • Foco Máximo',
    icon: '🏛️',
    summary: 'Os pilares do Direito Constitucional aplicados à segurança pública e à atividade militar no Estado Democrático de Direito.',
    articles: [
      {
        number: 'Artigo 5º (Incisos I a XX)',
        heading: 'Vida, Igualdade, Inviolabilidade de Domicílio e Sigilos',
        text: `Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:

I - homens e mulheres são iguais em direitos e obrigações, nos termos desta Constituição;
II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei;
III - ninguém será submetido a tortura nem a tratamento desumano ou degradante;
IV - é livre a manifestação do pensamento, sendo vedado o anonimato;

XI - a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, SALVO:
• em caso de flagrante delito ou desastre;
• ou para prestar socorro;
• ou, durante o dia, por determinação judicial;

XII - é inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, salvo, no último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal;

XVI - todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente.`,
        tip: 'ENTRADA NA CASA (Inciso XI): Socorro, desastre e flagrante delito = a QUALQUER HORA (dia ou noite). Mandado judicial = SOMENTE DURANTE O DIA!',
        warning: 'Reunião pública (Inciso XVI): Independe de autorização! Exige apenas PRÉVIO AVISO para evitar choque com outra reunião já agendada.'
      },
      {
        number: 'Artigo 5º (Mandados de Criminalização e Remédios)',
        heading: 'Inafiançáveis, Imprescritíveis, Júri e Remédios Constitucionais',
        text: `Inciso XXXVIII - é reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados:
a) a plenitude de defesa;
b) o sigilo das votações;
c) a soberania dos veredictos;
d) a competência para o julgamento dos crimes dolosos contra a vida;

Inciso XLII - a prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão, nos termos da lei;

Inciso XLIII - a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem;

Inciso XLIV - constitui crime inafiançável e imprescritível a ação de grupos armados, civis ou militares, contra a ordem constitucional e o Estado Democrático;

Inciso LVII - ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória;

Inciso LXI - ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade judiciária competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei;

Inciso LXVIII - conceder-se-á HABEAS CORPUS sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder;

Inciso LXIX - conceder-se-á MANDADO DE SEGURANÇA para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data;

Inciso LXXII - conceder-se-á HABEAS DATA para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros governamentais ou para retificação de dados.`,
        tip: 'CRIMES IMPRESCRITÍVEIS NA CF/88 (SÓ EXISTEM DOIS): R.A. = Racismo e Ação de grupos armados contra a ordem constitucional. Todo o restante prescreve!',
        warning: 'TTT + Hediondos são inafiançáveis e sem graça/anistia, mas PRESCREVEM com o tempo! Não caia na pegadinha da banca que diz que hediondo é imprescritível.'
      },
      {
        number: 'Artigo 142 e 144',
        heading: 'Militares dos Estados e Sistema Nacional de Segurança Pública',
        text: `Art. 142, § 3º Os membros das Forças Armadas são denominados militares, aplicando-se-lhes, além das que vierem a ser fixadas em lei, as seguintes disposições:
IV - ao militar são proibidas a sindicalização e a greve;
V - o militar, enquanto em serviço ativo, não pode estar filiado a partidos políticos.

Art. 144. A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos seguintes órgãos:
I - polícia federal;
II - polícia rodoviária federal;
III - polícia ferroviária federal;
IV - polícias civis;
V - polícias militares e corpos de bombeiros militares;
VI - polícias penais federal, estaduais e distrital.

§ 5º Às polícias militares cabem a POLÍCIA OSTENSIVA e a PRESERVAÇÃO DA ORDEM PÚBLICA; aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil.

§ 6º As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército subordinam-se, juntamente com as polícias civis e as polícias penais estaduais e distrital, aos Governadores dos Estados, do Distrito Federal e dos Territórios.

§ 8º Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei.`,
        tip: 'ATRIBUIÇÃO DA PM (Art. 144, § 5º): Polícia Ostensiva e Preservação da Ordem Pública. A Polícia Civil cuida da polícia judiciária e investigação de infrações penais (exceto as militares).',
        warning: 'Polícia Penal agora é órgão constitucional expresso (Emenda 104). Guarda Municipal NÃO está no rol de órgãos policiais do caput do Art. 144, mas integra o sistema amplo de segurança (§ 8º).'
      }
    ]
  },

  // =========================================================================
  // 6. LEGISLAÇÃO EXTRAVAGANTE (ABUSO, TORTURA, ARMAS, MARIA DA PENHA, DROGAS)
  // =========================================================================
  {
    id: 'leis_especiais',
    category: 'especiais',
    shortTitle: 'Legislação Especial',
    fullTitle: 'Estatuto do Desarmamento, Abuso de Autoridade, Tortura, Maria da Penha e Drogas',
    officialRef: 'Leis Federais nº 10.826/03, 13.869/19, 9.455/97, 11.340/06 e 11.343/06',
    badge: 'Penal Especial • AOCP',
    icon: '⚖️',
    summary: 'Os diplomas penais extravagantes mais cobrados nos concursos de soldados e oficiais da Polícia Militar.',
    articles: [
      {
        number: 'Lei 13.869/2019 • Abuso de Autoridade',
        heading: 'Dolo Específico Obrigatório e Efeitos da Condenação',
        text: `Art. 1º, § 1º As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou, ainda, por mero capricho ou satisfação pessoal.

Art. 1º, § 2º A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade.

Art. 4º São efeitos da condenação:
I - tornar certa a obrigação de indenizar o dano causado pelo crime;
II - a inabilitação para o exercício de cargo, mandato ou função pública, pelo período de 1 (um) a 5 (cinco) anos;
III - a perda do cargo, do mandato ou da função pública.
Parágrafo único. Os efeitos dos incisos II e III são CONDICIONADOS À OCORRÊNCIA DE REINCIDÊNCIA EM CRIME DE ABUSO DE AUTORIDADE e NÃO SÃO AUTOMÁTICOS, devendo ser declarados motivadamente na sentença.`,
        tip: 'NÃO HÁ CRIME CULPOSO DE ABUSO: Exige sempre dolo específico (capricho, satisfação pessoal, prejudicar terceiro). Erro de interpretação de lei NÃO é abuso!',
        warning: 'A perda do cargo no abuso de autoridade NÃO É AUTOMÁTICA e exige reincidência específica em crime de abuso de autoridade!'
      },
      {
        number: 'Lei 9.455/1997 • Lei de Tortura',
        heading: 'Espécies de Tortura e Efeito Automático da Perda do Cargo',
        text: `Art. 1º Constitui crime de tortura:
I - constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental:
a) com o fim de obter informação, declaração ou confissão da vítima ou de terceira pessoa (Tortura-Prova / Confissória);
b) para provocar ação ou omissão de natureza criminosa (Tortura-Crime);
c) em razão de discriminação racial ou religiosa (Tortura-Preconceito);
II - submeter alguém, sob sua guarda, poder ou autoridade, com emprego de violência ou grave ameaça, a intenso sofrimento físico ou mental, como forma de aplicar castigo pessoal ou medida de caráter preventivo (Tortura-Castigo).
Pena: reclusão, de 2 a 8 anos.

§ 2º Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las, incorre na pena de DETENÇÃO de 1 a 4 anos (Tortura por Omissão).

§ 5º A condenação acarretará A PERDA DO CARGO, FUNÇÃO OU EMPREGO PÚBLICO E A INTERDIÇÃO PARA SEU EXERCÍCIO PELO DOBRO DO PRAZO DA PENA APLICADA.`,
        tip: 'EFEITO AUTOMÁTICO: Na Lei de Tortura, a perda do cargo é AUTOMÁTICA (independe de fundamentação do juiz) e a inabilitação dura o DOBRO da pena aplicada!',
        warning: 'Tortura Omissiva tem pena de DETENÇÃO de 1 a 4 anos (todas as demais são reclusão de 2 a 8 anos). A AOCP adora trocar detenção por reclusão nessa omissão.'
      },
      {
        number: 'Lei 10.826/2003 • Estatuto do Desarmamento',
        heading: 'Posse vs. Porte de Arma e Disparo',
        text: `Art. 12. POSSE IRREGULAR de arma de fogo de uso permitido: Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda no seu local de trabalho, desde que seja o titular ou o responsável legal pelo estabelecimento. Pena: detenção, de 1 a 3 anos, e multa.

Art. 14. PORTE ILEGAL de arma de fogo de uso permitido: Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar. Pena: reclusão, de 2 a 4 anos, e multa.

Art. 15. DISPARO DE ARMA DE FOGO: Disparar arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, desde que essa conduta não tenha por finalidade a prática de outro crime. Pena: reclusão, de 2 a 4 anos, e multa. O crime é inafiançável perante a autoridade policial.

Art. 16. POSSE OU PORTE DE ARMA DE USO RESTRITO: Pena de reclusão, de 3 a 6 anos.
§ 2º Se a arma de fogo for de USO PROIBIDO, a pena é de reclusão de 4 a 12 anos e o crime é considerado HEDIONDO.`,
        tip: 'POSSE vs PORTE: Dentro de casa ou do próprio comércio = POSSE (Art. 12). Da porta pra fora na rua = PORTE (Art. 14).',
        warning: 'Somente a arma de USO PROIBIDO torna o Art. 16 hediondo (Pacote Anticrime). A de uso restrito não é hedionda.'
      },
      {
        number: 'Lei 11.340/2006 • Lei Maria da Penha',
        heading: 'Formas de Violência Doméstica e Descumprimento de Protetiva',
        text: `Art. 5º Para os efeitos desta Lei, configura violência doméstica e familiar contra a mulher qualquer ação ou omissão baseada no gênero que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial.

Art. 7º São formas de violência doméstica e familiar contra a mulher, entre outras:
I - a violência FÍSICA: entendida como qualquer conduta que ofenda sua integridade ou saúde corporal;
II - a violência PSICOLÓGICA: qualquer conduta que lhe cause dano emocional e diminuição da auto-estima, humilhação, manipulação, isolamento, vigilância constante;
III - a violência SEXUAL: constranger a presenciar, a manter ou a participar de relação sexual não desejada;
IV - a violência PATRIMONIAL: retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens ou valores;
V - a violência MORAL: calúnia, difamação ou injúria.

Art. 24-A. Descumprir decisão judicial que defere medidas protetivas de urgência:
Pena: detenção, de 3 meses a 2 anos.
§ 2º Na hipótese de prisão em flagrante, apenas a autoridade judicial poderá conceder fiança (o Delegado de Polícia NÃO PODE arbitrar fiança no Art. 24-A).`,
        tip: 'A Lei Maria da Penha NÃO CRIAVA CRIMES até a inserção do Art. 24-A (Descumprimento de Medida Protetiva), que é o ÚNICO tipo penal próprio da lei!',
        warning: 'O Delegado NÃO pode arbitrar fiança no crime do Art. 24-A! Somente o JUIZ pode conceder fiança.'
      },
      {
        number: 'Lei 11.343/2006 • Lei de Drogas',
        heading: 'Usuário (Art. 28) vs. Tráfico Ilícito (Art. 33)',
        text: `Art. 28. Quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar será submetido às seguintes penas:
I - advertência sobre os efeitos das drogas;
II - prestação de serviços à comunidade;
III - medida educativa de comparecimento a programa ou curso educativo.
§ 2º Para determinar se a droga destinava-se a consumo pessoal, o juiz atenderá à natureza e à quantidade da substância apreendida, ao local e às condições em que se desenvolveu a ação, às circunstâncias sociais e pessoais, bem como à conduta e aos antecedentes do agente.

Art. 33. Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas, ainda que gratuitamente:
Pena: reclusão de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa.

§ 4º TRÁFICO PRIVILEGIADO: Nos delitos definidos no caput e no § 1º deste artigo, as penas poderão ser reduzidas de um sexto a dois terços, desde que o agente seja primário, de bons antecedentes, não se dedique às atividades criminosas nem integre organização criminosa.`,
        tip: 'DESPENALIZAÇÃO DO ART. 28: O Artigo 28 CONTINUA SENDO CRIME (STF não descriminalizou formalmente na lei), mas NÃO HÁ PENA PRIVATIVA DE LIBERDADE! Não cabe prisão em flagrante nem fiança.',
        warning: 'TRÁFICO PRIVILEGIADO (§ 4º): O STF e a Lei 13.964/2019 pacificaram que o Tráfico Privilegiado NÃO É HEDIONDO nem equiparado a hediondo!'
      }
    ]
  },

  // =========================================================================
  // 7. CÓDIGO PENAL MILITAR (DECRETO-LEI Nº 1.001/1969 - ATUALIZADO 2026)
  // =========================================================================
  {
    id: 'cpm_penal_militar',
    category: 'pmpe',
    shortTitle: 'Código Penal Militar',
    fullTitle: 'Código Penal Militar • Decreto-Lei nº 1.001/1969 (Atualizado pelas Leis 13.491/17 e 14.688/23)',
    officialRef: 'Presidência da República / Planalto • Atualizado até 2026',
    badge: 'Art. 9º, Motim, Deserção e Peculato',
    icon: '⚔️',
    summary: 'Legislação penal militar aplicável aos policiais militares de Pernambuco. Define crimes propriamente e impropriamente militares, autoridade e disciplina.',
    articles: [
      {
        number: 'Artigo 9º do CPM',
        heading: 'Crimes Militares em Tempo de Paz e Competência do Tribunal do Júri',
        text: `Art. 9º Consideram-se crimes militares, em tempo de paz:
I - os crimes de que trata este Código, quando definidos de modo diverso na lei penal comum, ou nela não previstos, qualquer que seja o agente, salvo disposição especial;
II - os crimes previstos neste Código e os previstos na LEGISLAÇÃO PENAL (comum e extravagante - alteração da Lei nº 13.491/2017), quando praticados:
a) por militar em situação de atividade ou assemelhado, contra militar na mesma situação ou assemelhado;
b) por militar em situação de atividade ou assemelhado, em lugar sujeito à administração militar, contra militar da reserva, ou reformado, ou civil;
c) por militar em serviço ou atuando em razão da função, em comissão de natureza militar, ou em formatura, ainda que fora do lugar sujeito à administração militar contra militar da reserva, ou reformado, ou civil;
d) por militar durante o período de manobras ou exercício, contra militar da reserva, ou reformado, ou assemelhado, ou civil;
e) por militar em situação de atividade, ou assemelhado, contra o patrimônio sob a administração militar, ou a ordem administrativa militar.

§ 1º Os crimes de que trata este artigo, quando dolosos contra a vida e cometidos por militares contra civil, SERÃO DA COMPETÊNCIA DO TRIBUNAL DO JÚRI (Justiça Comum Estadual).
§ 2º Os crimes dolosos contra a vida cometidos por militares das Forças Armadas contra civil serão da competência da Justiça Militar da União se praticados no contexto de garantia da lei e da ordem (GLO).`,
        tip: 'CRIME CONTRA A VIDA DE CIVIL: Se o Policial Militar cometer homicídio doloso contra civil, mesmo em serviço na viatura, o julgamento é do TRIBUNAL DO JÚRI da Justiça Comum Estadual (Art. 125, § 4º da CF e Art. 9º, § 1º do CPM)!',
        warning: 'LEI 13.491/2017: Agora qualquer crime da lei extravagante (ex: Tortura, Abuso de Autoridade) praticado nas hipóteses do inciso II é CRIME MILITAR e julgado pela Vara da Justiça Militar Estadual.'
      },
      {
        number: 'Artigos 149 a 166',
        heading: 'Motim, Revolta, Violência contra Superior e Recusa de Obediência',
        text: `Art. 149. MOTIM: Reunirem-se militares:
I - agindo contra a ordem recebida de superior, ou negando-se a cumpri-la;
II - recusando obediência a superior, quando estejam agindo sem ordem ou praticando violência;
III - assentando de posse de armas, ou material bélico, para opor-se a ordem superior;
IV - ocupando quartel, fortaleza, navio ou outro local sob administração militar.
Pena: reclusão, de 8 a 20 anos, com aumento de um terço para os cabeças.

REVOLTA: Se os agentes estavam ARMADOS:
Pena: reclusão, de 8 a 20 anos, com aumento de um terço para os cabeças.

Art. 157. VIOLÊNCIA CONTRA SUPERIOR: Praticar violência contra superior:
Pena: detenção, de 3 meses a 2 anos.
§ 1º Se o superior é o comandante da unidade ou oficial-general: Pena de reclusão, de 3 a 9 anos.
§ 2º Se da violência resulta lesão corporal ou morte, aplica-se cumulativamente a pena do crime de resultado.

Art. 160. DESRESPEITO A SUPERIOR: Desrespeitar superior diante de outro militar:
Pena: detenção, de 3 meses a 1 ano.

Art. 163. RECUSA DE OBEDIÊNCIA: Recusar obedecer a ordem do superior sobre assunto ou matéria de serviço, ou relativamente a dever imposto em lei, regulamento ou instrução:
Pena: detenção, de 1 a 2 anos.`,
        tip: 'MOTIM vs REVOLTA: A diferença única e decisiva é se os militares estavam ARMADOS. Sem armas = MOTIM. Com armas (mesmo que só um esteja armado) = REVOLTA!',
        warning: 'DESRESPEITO A SUPERIOR (Art. 160): Exige que ocorra na presença de outro militar! Se ocorrer a sós entre o subordinado e o superior, não configura o art. 160 (pode ser transgressão disciplinar ou injúria).'
      },
      {
        number: 'Artigos 187, 195 e 203',
        heading: 'Deserção, Abandono de Posto e Dormir em Serviço',
        text: `Art. 187. DESERÇÃO: Ausentar-se o militar, sem licença, da unidade em que serve, ou do lugar em que deve permanecer, por mais de 8 (oito) dias:
Pena: detenção, de 6 meses a 2 anos; se oficial, a pena é agravada.
Consumação: consuma-se à meia-noite do oitavo dia de ausência injustificada.

Art. 195. ABANDONO DE POSTO: Abandonar, sem ordem superior, o posto ou lugar de serviço que lhe tenha sido designado, ou o serviço que lhe cumpria, antes de terminá-lo:
Pena: detenção, de 3 meses a 1 ano.
Natureza: Crime de perigo abstrato e de mera conduta. O crime se consuma no exato instante em que o militar se afasta do posto, independentemente de ocorrer qualquer dano à segurança.

Art. 203. DORMIR EM SERVIÇO: Dormir o militar, quando em serviço, como sentinela, vigia, de plantão às armas ou em posto similar, ou na direção de viatura, aeronave ou embarcação:
Pena: detenção, de 3 meses a 1 ano.`,
        tip: 'ABANDONO DE POSTO É INSTANTÂNEO: O militar que sai do posto para comprar um lanche ou conversar na esquina, mesmo por 5 minutos, comete Abandono de Posto (Art. 195)! Não precisa de prazo de horas.',
        warning: 'DESERÇÃO: Exige mais de 8 dias contínuos. Até 24 horas não há crime. De 24 horas a 8 dias = AUSÊNCIA (transgressão militar). Passou de 8 dias = DESERÇÃO (crime militar).'
      },
      {
        number: 'Artigos 303 e 305',
        heading: 'Peculato Militar e Concussão Militar',
        text: `Art. 303. PECULATO: Apropriar-se de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse ou detenção em razão do cargo ou comissão, ou desviá-lo em proveito próprio ou alheio:
Pena: reclusão, de 3 a 15 anos.

§ 1º PECULATO-FURTO: Aplica-se a mesma pena a quem, embora não tendo a posse do dinheiro ou coisa móvel, o subtrai, ou concorre para que seja subtraído, em proveito próprio ou alheio, valendo-se da facilidade que lhe proporciona a qualidade de militar ou funcionário público.

§ 3º PECULATO CULPOSO: Se o funcionário ou militar concorre culposamente para o crime de outrem: Pena de detenção, de 6 meses a 2 anos.
§ 4º Extinção da punibilidade e redução da pena: No caso do peculato culposo, a reparação do dano, se precede a sentença irrecorrível, EXTingue a punibilidade; se lhe é posterior, reduz de metade a pena imposta.

Art. 305. CONCUSSÃO: Exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida:
Pena: reclusão, de 2 a 8 anos.`,
        tip: 'VERBO DA CONCUSSÃO: É sempre EXIGIR! Na corrupção passiva (Art. 308) é SOLICITAR ou RECEBER. Exigiu vantagem em blitz ou ocorrência = CONCUSSÃO!',
        warning: 'PECULATO CULPOSO: A reparação do dano ANTES da sentença irrecorrível EXTingue a punibilidade. Se for depois da sentença irrecorrível, apenas reduz a pena pela metade. Isso cai em TODAS as bancas!'
      }
    ]
  },

  // =========================================================================
  // 8. CÓDIGO PENAL BRASILEIRO (PARTE ESPECIAL - DECRETO-LEI Nº 2.848/1940)
  // =========================================================================
  {
    id: 'codigo_penal_comum',
    category: 'penal',
    shortTitle: 'Código Penal (Pessoa, Patrimônio e Adm.)',
    fullTitle: 'Código Penal Brasileiro • Decreto-Lei nº 2.848/1940 (Parte Especial Atualizada)',
    officialRef: 'Presidência da República / Planalto • Atualizado até 2026',
    badge: 'Art. 121, 129, 155, 157 e 312 a 331',
    icon: '⚖️',
    summary: 'Crimes contra a Pessoa (Homicídio e Lesão), Crimes contra o Patrimônio (Furto e Roubo) e Crimes contra a Administração Pública essenciais para a PMPE.',
    articles: [
      {
        number: 'Artigo 121 do Código Penal',
        heading: 'Homicídio Simples, Privilegiado, Feminicídio e Homicídio Funcional',
        text: `Art. 121. Matar alguém:
Pena: reclusão, de 6 a 20 anos.

§ 1º HOMICÍDIO PRIVILEGIADO: Se o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um sexto a um terço.

§ 2º HOMICÍDIO QUALIFICADO (Reclusão de 12 a 30 anos):
I - mediante paga ou promessa de recompensa, ou por outro motivo torpe;
II - por motivo fútil;
III - com emprego de veneno, fogo, explosivo, asfixia, tortura ou outro meio insidioso ou cruel, ou de que possa resultar perigo comum;
IV - à traição, de emboscada, ou mediante dissimulação ou outro recurso que dificulte ou torne impossível a defesa do ofendido;
V - para assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime;
VI - FEMINICÍDIO: contra a mulher por razões da condição de sexo feminino (violência doméstica e familiar ou menosprezo/discriminação à condição de mulher);
VII - HOMICÍDIO FUNCIONAL: contra autoridade ou agente descrito nos arts. 142 e 144 da Constituição Federal (policiais militares, civis, federais, bombeiros, guardas), integrantes do sistema prisional e da Força Nacional de Segurança Pública, no exercício da função ou em decorrência dela, ou contra seu cônjuge, companheiro ou parente consanguíneo até terceiro grau, em razão dessa condição.`,
        tip: 'HOMICÍDIO FUNCIONAL (§ 2º, VII): Matar policial em razão de sua função torna o homicídio duplamente gravoso: é QUALIFICADO e formalmente HEDIONDO!',
        warning: 'Homicídio privilegiado-qualificado: É admitido pelo STF/STJ desde que a qualificadora seja de natureza OBJETIVA (ex: veneno, emboscada). Privilegiado NUNCA pode coexistir com motivo torpe ou fútil (que são subjetivas).'
      },
      {
        number: 'Artigo 129 do Código Penal',
        heading: 'Lesão Corporal: Leve, Grave, Gravíssima e Funcional',
        text: `Art. 129. Ofender a integridade corporal ou a saúde de outrem:
Pena: detenção, de 3 meses a 1 ano.

§ 1º LESÃO CORPORAL GRAVE (Reclusão, de 1 a 5 anos), se resulta:
I - Incapacidade para as ocupações habituais, por mais de 30 dias;
II - Perigo de vida;
III - Debilidade permanente de membro, sentido ou função;
IV - Aceleração de parto.

§ 2º LESÃO CORPORAL GRAVÍSSIMA (Reclusão, de 2 a 8 anos), se resulta:
I - Incapacidade permanente para o trabalho;
II - Enfermidade incurável;
III - Perda ou inutilização de membro, sentido ou função;
IV - Deformidade permanente;
V - Aborto.

§ 3º LESÃO SEGUIDA DE MORTE (Reclusão, de 4 a 12 anos): Se resulta morte e as circunstâncias evidenciam que o agente não quis o resultado, nem assumiu o risco de produzi-lo (crime preterdoloso: dolo na lesão e culpa na morte).

§ 12. LESÃO FUNCIONAL: Se a lesão for praticada contra autoridade ou agente dos arts. 142 e 144 da CF, integrantes do sistema prisional e Força Nacional, no exercício da função ou em decorrência dela, ou seus parentes até 3º grau: A pena é aumentada de um a dois terços.`,
        tip: 'GRAVE vs GRAVÍSSIMA: Debilidade = GRAVE. Perda ou inutilização = GRAVÍSSIMA. Aceleração de parto = GRAVE. Aborto = GRAVÍSSIMA. Incapacidade mais de 30 dias = GRAVE. Incapacidade permanente = GRAVÍSSIMA.',
        warning: 'Lesão dolosa gravíssima ou seguida de morte contra policial no exercício da função é CRIME HEDIONDO (Art. 1º, I-A da Lei 8.072/90)!'
      },
      {
        number: 'Artigos 155 e 157 do Código Penal',
        heading: 'Furto, Roubo Majorado e Latrocínio',
        text: `Art. 155. FURTO: Subtrair, para si ou para outrem, coisa alheia móvel:
Pena: reclusão, de 1 a 4 anos, e multa.
§ 1º A pena aumenta-se de um terço, se o crime é praticado durante o REPOUSO NOTURNO.
§ 4º Furto Qualificado (Reclusão de 2 a 8 anos): com destruição de obstáculo, abuso de confiança, concurso de 2 ou mais pessoas.
§ 4º-A Furto com emprego de explosivo ou artefato similar que cause perigo comum: Reclusão de 4 a 10 anos (CRIME HEDIONDO!).

Art. 157. ROUBO: Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência a pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência:
Pena: reclusão, de 4 a 10 anos, e multa.
§ 2º A pena aumenta-se de 1/3 até metade: se há concurso de 2 ou mais pessoas; se a vítima está em serviço de transporte de valores; se há restrição da liberdade da vítima.
§ 2º-A Aumenta-se a pena de 2/3 (dois terços):
I - se a violência ou ameaça é exercida com emprego de ARMA DE FOGO (uso permitido);
§ 2º-B Se a violência ou grave ameaça é exercida com emprego de ARMA DE FOGO DE USO RESTRITO OU PROIBIDO, aplica-se em DOBRO a pena do caput.

§ 3º ROUBO QUALIFICADO:
II - se da violência resulta MORTE: LATROCÍNIO.
Pena: reclusão, de 20 a 30 anos, e multa (CRIME HEDIONDO!).`,
        tip: 'SÚMULA 610 DO STF: "Há crime de latrocínio, quando o homicídio se consuma, ainda que não realize o agente a subtração dos bens da vítima." Matou a vítima mas não conseguiu levar o dinheiro = LATROCÍNIO CONSUMADO!',
        warning: 'Arma branca no roubo aumenta a pena de 1/3 a metade (§ 2º, VII). Arma de fogo de uso permitido aumenta de 2/3 (§ 2º-A). Arma de uso restrito ou proibido DUPLICA a pena (§ 2º-B)!'
      },
      {
        number: 'Artigos 312 a 331 do Código Penal',
        heading: 'Crimes Contra a Administração Pública Praticados por Funcionários Públicos',
        text: `Art. 312. PECULATO: Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo em proveito próprio ou alheio. Pena: reclusão de 2 a 12 anos e multa.

Art. 316. CONCUSSÃO: EXIGIR, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida. Pena: reclusão de 2 a 12 anos e multa.

Art. 317. CORRUPÇÃO PASSIVA: SOLICITAR ou RECEBER, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou ACEITAR PROMESSA de tal vantagem. Pena: reclusão de 2 a 12 anos e multa.

Art. 319. PREVARICAÇÃO: Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer INTERESSE OU SENTIMENTO PESSOAL. Pena: detenção de 3 meses a 1 ano e multa.

Art. 330. DESOBEDIÊNCIA: Desobedecer a ordem legal de funcionário público. Pena: detenção de 15 dias a 6 meses e multa.

Art. 331. DESACATO: Desacatar funcionário público no exercício da função ou em razão dela. Pena: detenção de 6 meses a 2 anos ou multa.`,
        tip: 'CONCUSSÃO vs CORRUPÇÃO PASSIVA: Concussão = EXIGIR (o funcionário impõe a exigência). Corrupção Passiva = SOLICITAR ou RECEBER (pede ou aceita propina).',
        warning: 'PREVARICAÇÃO: Exige imprescindivelmente o fim especial de "satisfazer interesse ou sentimento pessoal". Se o policial deixou de multar um amigo por amizade = PREVARICAÇÃO!'
      }
    ]
  },

  // =========================================================================
  // 9. LEI DE CRIMES DE RACISMO E INJÚRIA RACIAL (LEI Nº 7.716/1989 E LEI 14.532/2023)
  // =========================================================================
  {
    id: 'lei_racismo_injuria',
    category: 'especiais',
    shortTitle: 'Lei de Racismo e Injúria Racial',
    fullTitle: 'Lei Federal nº 7.716/1989 • Crimes de Discriminação e Preconceito (Atualizada pela Lei 14.532/2023)',
    officialRef: 'Presidência da República / Planalto • Atualizada até 2026',
    badge: 'Lei 14.532/23 • Inafiançável e Imprescritível',
    icon: '✊🏿',
    summary: 'A histórica equiparação legal da Injúria Racial ao crime de Racismo, tornando a conduta inafiançável, imprescritível e de ação penal pública incondicionada.',
    articles: [
      {
        number: 'Artigo 2º-A da Lei 7.716/1989',
        heading: 'Tipificação da Injúria Racial como Crime de Racismo',
        text: `Art. 2º-A. Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional:
Pena: reclusão, de 2 (dois) a 5 (cinco) anos, e multa.

Parágrafo único. A pena é aumentada de metade se o crime for cometido por duas ou mais pessoas, ou com o concurso de menores de 18 anos.

IMPACTO CONSTITUCIONAL E PROCESSUAL DA LEI Nº 14.532/2023:
1. Revogou o § 3º do Art. 140 do Código Penal no tocante à raça/cor e transferiu a injúria racial formalmente para a Lei nº 7.716/1989;
2. STATUS CONSTITUCIONAL: Agora a Injúria Racial é formally crime de RACISMO, sendo INAFIANÇÁVEL e IMPRESCRITÍVEL (Art. 5º, XLII da CF/88);
3. AÇÃO PENAL: Ação Penal Pública Incondicionada (não depende mais de representação da vítima);
4. A fiança policial NÃO É MAIS ADMITIDA pelo Delegado de Polícia.`,
        tip: 'NOVIDADE LEGISLATIVA CRUCIAL: Antes da Lei 14.532/2023, a injúria racial estava no Código Penal e dependia de representação. Agora está no Art. 2º-A da Lei 7.716/89, tem pena de 2 a 5 anos de reclusão, é INAFIANÇÁVEL, IMPRESCRITÍVEL e pública incondicionada!',
        warning: 'A injúria contra pessoa idosa ou com deficiência permaneceu no Código Penal (art. 140, § 3º). Somente a injúria racial (raça, cor, etnia ou procedência nacional) foi migrada para a Lei 7.716/89.'
      },
      {
        number: 'Artigo 20 da Lei 7.716/1989',
        heading: 'Praticar, Induzir ou Incitar Preconceito em Redes Sociais e Eventos',
        text: `Art. 20. Praticar, induzir ou incitar a discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional:
Pena: reclusão de 1 a 3 anos e multa.

§ 2º Se qualquer dos crimes previstos neste artigo for cometido por intermédio dos meios de comunicação social, de publicação em redes sociais, da rede mundial de computadores ou de publicação de qualquer natureza:
Pena: reclusão de 2 a 5 anos e multa.

§ 2º-A Se o crime for praticado no contexto de atividades esportivas, religiosas, artísticas ou culturais destinadas ao público:
Pena: reclusão de 2 a 5 anos e proibição de frequência, por 3 anos, a locais destinados a práticas esportivas, artísticas ou culturais.

§ 3º O juiz poderá determinar a interdição das respectivas mensagens ou páginas de informação na rede mundial de computadores e a cessação das transmissões de rádio ou televisão.`,
        tip: 'MAJORANTE DE REDES SOCIAIS E ESTÁDIOS: Postagens racistas na internet, Instagram, WhatsApp, ou ofensas coletivas em estádios de futebol têm pena triplicada: reclusão de 2 a 5 anos!',
        warning: 'Todos os crimes da Lei 7.716/1989 são de Ação Penal Pública Incondicionada e sujeitos a penas privativas de liberdade de RECLUSÃO.'
      }
    ]
  },

  // =========================================================================
  // 10. REGULAMENTO DISCIPLINAR DA PMPE (RDPMPE - DECRETO Nº 17.589/1994)
  // =========================================================================
  {
    id: 'rdpmpe_disciplinar',
    category: 'pmpe',
    shortTitle: 'Regulamento Disciplinar PMPE',
    fullTitle: 'Decreto Estadual nº 17.589/1994 • Regulamento Disciplinar da PMPE (RDPMPE)',
    officialRef: 'Governo do Estado de Pernambuco • Legislação Disciplinar em Vigor',
    badge: 'Decreto 17.589/94 • Disciplina PMPE',
    icon: '🛡️',
    summary: 'Especifica as transgressões disciplinares, estabelece normas relativas à aplicação das punições disciplinares, classificação do comportamento e recursos.',
    articles: [
      {
        number: 'Artigos 8º a 13 do RDPMPE',
        heading: 'Definição e Classificação das Transgressões Disciplinares',
        text: `Art. 8º Transgressão disciplinar é qualquer violação dos preceitos da ética, dos deveres e das obrigações policiais-militares, na sua manifestação elementar e simples, e qualquer omissão ou ação contrária aos preceitos estatuídos em leis, regulamentos, normas ou disposições, desde que não configure crime.

Art. 12. As transgressões disciplinares são classificadas em:
1. LEVES;
2. MÉDIAS;
3. GRAVES.
A classificação da gravidade da transgressão é de competência de quem tem autoridade para punir, levando em consideração os atos e circunstâncias que a determinaram, os danos e repercussões causados à disciplina e à Corporação.

Art. 10. A competência para aplicar as prescrições contidas neste Regulamento é conferida ao:
1. Governador do Estado: a todos os integrantes da Polícia Militar;
2. Comandante-Geral: a todos os integrantes da Polícia Militar sujeitos ao seu comando;
3. Chefe do Estado-Maior, Diretores e Comandantes de OPM: aos policiais sob sua subordinação direta.`,
        tip: 'GRADAÇÃO DAS TRANSGRESSÕES: Apenas três graus: LEVES, MÉDIAS e GRAVES. Não existe transgressão "gravíssima" no RDPMPE!',
        warning: 'Crime vs Transgressão: Se o fato configurar simultaneamente crime e transgressão disciplinar, o militar responderá penalmente e disciplinarmente de forma autônoma.'
      },
      {
        number: 'Artigos 14 a 22 do RDPMPE',
        heading: 'Escala de Punições Disciplinares e Aplicação',
        text: `Art. 14. As punições disciplinares a que estão sujeitos os policiais-militares, segundo a classificação resultante do julgamento da transgressão, são as seguintes, em ordem de gravidade crescente:
1. ADVERTÊNCIA;
2. REPREENSÃO;
3. DETENÇÃO (até 30 dias);
4. PRISÃO (até 30 dias);
5. LICENCIAMENTO A BEM DA DISCIPLINA;
6. EXCLUSÃO A BEM DA DISCIPLINA.

Art. 15. ADVERTÊNCIA é a forma mais branda de punir. É feita verbalmente ao transgressor, em caráter reservado ou ostensivo, não constando das alterações do policial-militar.
Art. 16. REPREENSÃO é a punição que, publicada em Boletim Interno, constará dos assentamentos do policial-militar.
Art. 17. DETENÇÃO consiste na retenção do policial-militar no quartel, sem que fique encarcerado. O detido comparece a todos os atos de instrução e serviço.
Art. 18. PRISÃO consiste no recolhimento do policial-militar a compartimento próprio da OPM (sem comunicação de presos da justiça comum).
Art. 21. O LICENCIAMENTO a bem da disciplina é aplicado pelo Comandante-Geral às PRAÇAS SEM ESTABILIDADE assegurada (menos de 10 anos de serviço).
Art. 22. A EXCLUSÃO a bem da disciplina é aplicada pelo Comandante-Geral às PRAÇAS COM ESTABILIDADE assegurada (10 ou mais anos de serviço), após processo regular em Conselho de Disciplina.`,
        tip: 'LICENCIAMENTO vs EXCLUSÃO: Praça SEM estabilidade (menos de 10 anos) = LICENCIAMENTO a bem da disciplina. Praça COM estabilidade (10 anos ou mais) = EXCLUSÃO a bem da disciplina após CONSELHO DE DISCIPLINA!',
        warning: 'Advertência NÃO constará nas alterações/ficha do policial. A Repreensão é a primeira punição formal publicada em Boletim Interno.'
      },
      {
        number: 'Artigos 23 a 30 do RDPMPE',
        heading: 'Circunstâncias Atenuantes, Agravantes e Classificação do Comportamento',
        text: `Art. 23. São circunstâncias ATENUANTES no julgamento da transgressão:
1. Bom comportamento militar;
2. Relevância de serviços prestados;
3. Falta de prática do serviço (menos de 6 meses de serviço);
4. Ter sido cometida a transgressão para evitar mal maior;
5. Ter sido cometida sob a influência de violenta emoção provocada por ato injusto de outrem.

Art. 24. São circunstâncias AGRAVANTES:
1. Mau comportamento;
2. Prática simultânea ou conexão de duas ou mais transgressões;
3. Reincidência de transgressão;
4. Conluio de duas ou mais pessoas;
5. Ter sido cometida durante o serviço de escala ou guarda;
6. Ter sido cometida em presença de tropa, em público ou de subordinado;
7. Ter sido praticada com premeditação.

CLASSIFICAÇÃO DO COMPORTAMENTO MILITAR (Art. 52):
• EXCEPCIONAL: quando no período de 8 (oito) anos contínuos de efetivo serviço não tenha sofrido qualquer punição disciplinar;
• ÓTIMO: quando no período de 4 (quatro) anos contínuos tenha sofrido até 1 detenção;
• BOM: quando no período de 2 (dois) anos tenha sofrido até 2 prisões;
• INSUFICIENTE: quando no período de 1 (um) ano tenha sofrido até 2 prisões;
• MAU: quando no período de 1 (um) ano tenha sofrido mais de 2 prisões.`,
        tip: 'TEMPO PARA O COMPORTAMENTO EXCEPCIONAL: 8 (OITO) ANOS sem sofrer nenhuma punição disciplinar! Para Ótimo são 4 anos. Para Bom são 2 anos.',
        warning: 'Atenuante de falta de prática: Considera-se apenas até 6 (seis) meses de serviço na Corporação.'
      }
    ]
  },

  // =========================================================================
  // 11. LEI ORGÂNICA NACIONAL DAS PMs E CBMs (LEI FEDERAL Nº 14.751/2023)
  // =========================================================================
  {
    id: 'lei_organica_nacional_pm_14751',
    category: 'pmpe',
    shortTitle: 'Lei Orgânica Nacional PM (14.751/23)',
    fullTitle: 'Lei Federal nº 14.751/2023 • Lei Orgânica Nacional das Polícias Militares e Corpos de Bombeiros Militares',
    officialRef: 'Presidência da República / Planalto • Sancionada em 12/12/2023 (Em vigor para 2026)',
    badge: 'Lei 14.751/23 • Marco Nacional',
    icon: '🏛️',
    summary: 'Novo marco legal nacional que unifica regras de organização, garantias fundamentais, porte de arma em âmbito nacional, prisão especial e carreira para as Polícias Militares de todo o Brasil.',
    articles: [
      {
        number: 'Artigos 1º a 5º da Lei 14.751/2023',
        heading: 'Competências Constitucionais Exclusivas e Subordinação',
        text: `Art. 1º Esta Lei estabelece normas gerais para as Polícias Militares e os Corpos de Bombeiros Militares dos Estados, do Distrito Federal e dos Territórios, nos termos do inciso XXI do caput do art. 22 da Constituição Federal.

Art. 3º As Polícias Militares e os Corpos de Bombeiros Militares, instituições permanentes, essenciais à Justiça e à Segurança Pública, forças auxiliares e reserva do Exército, subordinadas aos Governadores dos Estados, do Distrito Federal e dos Territórios, são organizadas com base na hierarquia e na disciplina miltares.

Art. 4º Compete com exclusividade às POLÍCIAS MILITARES:
I - a polícia ostensiva e a preservação da ordem pública;
II - a polícia ostensiva de trânsito rodoviário e urbano, na forma da legislação aplicável;
III - a polícia judiciária militar estadual, apurando as infrações penais militares;
IV - a garantia do exercício do poder de polícia dos órgãos públicos estaduais e municipais;
V - atuar preventivamente e repressivamente nos conflitos agrários, manifestações e eventos públicos de grande vulto;
VI - realizar o policiamento ambiental, aéreo, fluvial e lacustre.`,
        tip: 'FORÇAS AUXILIARES E RESERVA: As PMs continuam sendo forças auxiliares e reserva do Exército, subordinadas operacional e administrativamente aos Governadores de Estado!',
        warning: 'COMPETÊNCIA EXCLUSIVA: O policiamento ostensivo e a preservação da ordem pública são competências constitucionais exclusivas da Polícia Militar, vedada a usurpação por outras entidades.'
      },
      {
        number: 'Artigo 13 a 18 da Lei 14.751/2023',
        heading: 'Garantias, Prerrogativas e Prisão Especial Militar',
        text: `Art. 13. São garantias fundamentais dos policiais militares e dos bombeiros militares:
I - uso privativo dos uniformes, insígnias, distintivos e condecorações militares;
II - porte de arma de fogo em todo o território nacional, em serviço ou fora dele, respeitadas as normas federais;
III - documento de identidade militar com fé pública e validade em todo o território nacional;
IV - cumprimento de prisão provisória ou pena privativa de liberdade em estabelecimento prisional militar ou em dependência militar separada de civis até o trânsito em julgado da sentença condenatória;
V - assistência jurídica integral promovida ou custeada pelo Estado quando processados por atos praticados no estrito cumprimento do dever legal;
VI - seguro de vida e de acidentes pessoais decorrentes do exercício da função;
VII - traslado do militar falecido em serviço e de seus dependentes na localidade de lotação.

Art. 18. Ao militar do Estado é assegurado o direito à previdência social militar específica nos termos da legislação federal e estadual aplicável.`,
        tip: 'GARANTIA DE PRISÃO ESPECIAL: Policial Militar preso em flagrante ou preventivamente TEM DIREITO a ficar recolhido em quartel militar até o trânsito em julgado de sua condenação penal!',
        warning: 'PORTE DE ARMA NACIONAL: O porte de arma funcional tem validade em todo o território brasileiro, mesmo quando o militar estiver fora de seu Estado de origem.'
      },
      {
        number: 'Artigos 21 a 29 da Lei 14.751/2023',
        heading: 'Estrutura de Postos e Graduações e Transição de Ingresso',
        text: `Art. 21. A hierarquia nas Polícias Militares compreende os seguintes postos e graduações unificados nacionalmente:

I - OFICIAIS:
a) Oficiais Superiores: Coronel PM, Tenente-Coronel PM e Major PM;
b) Oficiais Intermediários: Capitão PM;
c) Oficiais Subalternos: Primeiro-Tenente PM e Segundo-Tenente PM;
d) Praças Especiais: Aspirante a Oficial PM e Aluno-Oficial PM (Cadete).

II - PRAÇAS:
a) Subtenente PM;
b) Primeiro-Sargento PM, Segundo-Sargento PM e Terceiro-Sargento PM;
c) Cabo PM;
d) Soldado PM e Aluno do Curso de Formação de Soldados.

Art. 24. A investidura nos cargos militares dar-se-á por concurso público de provas ou de provas e títulos.
A Lei estabelece o prazo de transição de até 6 (seis) anos da data de publicação da lei para que os Estados exijam nível superior para todos os quadros (Oficiais e Praças), conforme adaptação da legislação estadual competente.`,
        tip: 'OFICIAL INTERMEDIÁRIO: Atenção para pegadinha da AOCP: Capitão é Oficial INTERMEDIÁRIO. Tenentes são Oficiais Subalternos, e Majores/Ten-Coronéis/Coronéis são Oficiais Superiores.',
        warning: 'Posto é privativo de Oficial (conferido pelo Governador via Carta Patente). Graduação é conferida às Praças (pelo Comandante-Geral).'
      }
    ]
  }
];

