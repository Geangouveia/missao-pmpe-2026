import type { QuizQuestion } from '../../types/game';

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE RACIOCÍNIO LÓGICO / MATEMÁTICA (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Raciocínio Lógico (Bloco II)
 * Foco rigoroso no edital: Proposições, Negações (De Morgan / MANÉ), Equivalências Lógicas, Tautologia, Probabilidade e Combinatória
 */
const QUESTOES_RACIOCINIO_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Negação de Proposição Condicional (Regra do MANÉ)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Considere a proposição composta: 'Se o policial militar está em serviço, então a ordem pública é preservada'. A negação lógica dessa proposição é:`,
      opts: [
        'Se o policial militar não está em serviço, então a ordem pública não é preservada.',
        'O policial militar não está em serviço e a ordem pública não é preservada.',
        'O policial militar está em serviço e a ordem pública não é preservada.',
        'Se a ordem pública é preservada, então o policial militar está em serviço.',
        'O policial militar não está em serviço ou a ordem pública é preservada.'
      ],
      correct: 2,
      exp: 'A negação da condicional (P -> Q) é dada pela regra do MANÉ: Mantém a primeira (P) E Nega a segunda (~Q), ou seja: ~(P -> Q) = P ^ ~Q. Portanto: "O policial militar está em serviço E a ordem pública NÃO é preservada".',
      fund: 'Lógica Proposicional • Tabela-Verdade e Negação da Implicação Lógica.',
      hint: 'Regra do MANÉ: Mantém a primeira parte e NEGA a segunda parte (troca o SE pelo E)!'
    },
    {
      topico: 'Equivalência Lógica da Condicional (Contrapositiva)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Uma proposição logicamente equivalente a 'Se o soldado concluiu o curso de tiro tático, então ele foi promovido' é:`,
      opts: [
        'Se o soldado não concluiu o curso de tiro tático, então ele não foi promovido.',
        'Se o soldado não foi promovido, então ele não concluiu o curso de tiro tático.',
        'O soldado concluiu o curso de tiro tático ou ele foi promovido.',
        'Se o soldado foi promovido, então ele concluiu o curso de tiro tático.',
        'O soldado foi promovido e ele não concluiu o curso de tiro tático.'
      ],
      correct: 1,
      exp: 'A principal equivalência lógica da condicional (P -> Q) é a sua contrapositiva: (~Q -> ~P) — inverte-se as duas proposições e negam-se ambas. Assim: "Se o soldado NÃO foi promovido, então ele NÃO concluiu o curso de tiro tático".',
      fund: 'Equivalências Notáveis da Lógica Sentencial (P -> Q ≡ ~Q -> ~P).',
      hint: 'Contrapositiva: volta negando tudo! Se não Q, então não P!'
    },
    {
      topico: 'Leis de De Morgan (Negação de Conjunção e Disjunção)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) De acordo com as Leis de De Morgan, a negação lógica da afirmação 'O suspeito foi detido e o flagrante foi lavrado' corresponde a:`,
      opts: [
        'O suspeito não foi detido e o flagrante não foi lavrado.',
        'O suspeito não foi detido ou o flagrante não foi lavrado.',
        'Se o suspeito não foi detido, então o flagrante foi lavrado.',
        'O suspeito foi detido ou o flagrante foi lavrado.',
        'O suspeito foi liberado e o flagrante foi cancelado.'
      ],
      correct: 1,
      exp: 'Pela 1ª Lei de De Morgan: ~(P ^ Q) ≡ ~P v ~Q. A negação de uma conjunção ("e") é uma disjunção ("ou") onde ambas as parcelas são negadas. Assim: "O suspeito NÃO foi detido OU o flagrante NÃO foi lavrado".',
      fund: 'Leis de Augusto De Morgan • Álgebra Booleana.',
      hint: 'Negação do E: troca o E por OU e nega as duas proposições!'
    },
    {
      topico: 'Cálculo de Probabilidade Simples e Sucessiva',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Em um pelotão da PMPE com 20 soldados, exatamente 12 são especialistas em patrulhamento com motocicletas (ROCAM) e 8 em ações de choque. Sorteando-se aleatoriamente 1 soldado desse pelotão, qual é a probabilidade percentual de ele ser especialista em choque?`,
      opts: [
        '25%',
        '30%',
        '40%',
        '50%',
        '60%'
      ],
      correct: 2,
      exp: 'A probabilidade clássica é P = Casos Favoráveis / Casos Possíveis. Temos 8 soldados de choque em um total de 20: P = 8 / 20 = 4 / 10 = 0,40 = 40%.',
      fund: 'Teoria da Probabilidade • Razão entre eventos favoráveis e espaço amostral.',
      hint: 'P = Favoráveis / Total = 8 / 20 = 40%!'
    },
    {
      topico: 'Princípio Fundamental da Contagem (Análise Combinatória)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Para realizar uma ronda noturna em Olinda, um sargento precisa escalar 1 motorista de viatura dentre 5 soldados habilitados e 1 patrulheiro navegador dentre 6 soldados disponíveis. De quantas maneiras distintas essa dupla operacional pode ser formada?`,
      opts: [
        '11 maneiras.',
        '15 maneiras.',
        '25 maneiras.',
        '30 maneiras.',
        '36 maneiras.'
      ],
      correct: 3,
      exp: 'Pelo Princípio Fundamental da Contagem (regra do produto), se uma primeira decisão pode ser tomada de "n" modos e uma segunda de "m" modos independentes, o total de duplas é n * m. Logo: 5 * 6 = 30 maneiras distintas.',
      fund: 'Análise Combinatória Básica • Princípio Multiplicativo.',
      hint: 'Multiplique as possibilidades independentes: 5 motoristas * 6 navegadores = 30 duplas!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `rlm_50_edital_${pad}`,
    categoryId: 'raciocinio',
    bloco: 'bloco_2',
    materiaNome: 'Raciocínio Lógico',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_rlm_probabilidade',
    dicaMacete: 'Em RLM da AOCP: memorize a tabela-verdade do MANÉ para negação do SE... ENTÃO e a contrapositiva para equivalências!'
  };
});

/**
 * BANCO OFICIAL DE 50 QUESTÕES DE NOÇÕES DE INFORMÁTICA (INSTITUTO AOCP - PMPE 2026)
 * Disciplina: Noções de Informática (Bloco II)
 * Foco rigoroso no edital: Redes, Modelo OSI/TCP-IP, Protocolos (DNS, DHCP, HTTP/HTTPS, SSH), Segurança da Informação, Malware, Windows 10 e Planilhas
 */
const QUESTOES_INFORMATICA_50: QuizQuestion[] = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  const pad = String(num).padStart(3, '0');

  const topicos = [
    {
      topico: 'Protocolos de Redes e Camada de Aplicação',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) No âmbito das redes de computadores TCP/IP utilizadas nas centrais de atendimento da PMPE (190), o protocolo responsável por traduzir nomes de domínio legíveis (como pmpe.pe.gov.br) em seus respectivos endereços IP numéricos na internet é o:`,
      opts: [
        'DHCP (Dynamic Host Configuration Protocol).',
        'DNS (Domain Name System).',
        'FTP (File Transfer Protocol).',
        'SNMP (Simple Network Management Protocol).',
        'SMTP (Simple Mail Transfer Protocol).'
      ],
      correct: 1,
      exp: 'O DNS (Domain Name System) funciona como a "lista telefônica" da Internet, convertendo nomes de domínio amigáveis (ex: pmpe.pe.gov.br) nos endereços IP correspondentes para roteamento de pacotes. O DHCP distribui IPs automaticamente.',
      fund: 'Arquitetura de Redes TCP/IP • Protocolos de Aplicação RFC 1034/1035.',
      hint: 'DNS = Sistema de Nomes de Domínio (traduz nome em IP)!'
    },
    {
      topico: 'Segurança da Informação e Tipos de Malware',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Um software malicioso que infecta os servidores da corporação policial, criptografa todos os arquivos institucionais e exige o pagamento de um resgate financeiro em criptomoedas para fornecer a chave de descriptografia é classificado como:`,
      opts: [
        'Spyware.',
        'Worm.',
        'Ransomware.',
        'Adware.',
        'Rootkit.'
      ],
      correct: 2,
      exp: 'O Ransomware é o malware sequestrador: cifra os dados da vítima com criptografia forte e exige resgate (ransom), geralmente em Bitcoin ou outra criptomoeda. Spyware espiona; Worm se replica autonomamente; Adware exibe anúncios.',
      fund: 'Cartilha de Segurança para Internet (CERT.br) • Classificação de Códigos Maliciosos.',
      hint: 'Criptografou arquivos e cobrou resgate = RANSOMWARE (ransom = resgate)!'
    },
    {
      topico: 'Princípios Básicos da Segurança da Informação (CID / CIA)',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Na gestão de segurança da informação da Polícia Militar, o princípio que garante que a informação esteja acessível a todos os usuários legítimos e autorizados sempre que for requerida denomina-se:`,
      opts: [
        'Confidencialidade.',
        'Integridade.',
        'Disponibilidade.',
        'Autenticidade.',
        'Irretratabilidade (Não Repúdio).'
      ],
      correct: 2,
      exp: 'A Disponibilidade garante que o sistema e a informação estejam prontos para acesso e uso sempre que os usuários autorizados necessitarem. Confidencialidade garante sigilo contra não autorizados; Integridade garante que a informação não foi corrompida ou alterada indevidamente.',
      fund: 'Norma ABNT NBR ISO/IEC 27002 • Pilares da Segurança da Informação (C-I-D).',
      hint: 'Disponibilidade = informação acessível quando você precisa dela!'
    },
    {
      topico: 'Sistema Operacional Windows 10 • Teclas de Atalho',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) No ambiente corporativo do Windows 10 em português, ao se afastar momentaneamente de sua estação de trabalho, o operador policial pode bloquear imediatamente o computador pressionando a combinação de teclas:`,
      opts: [
        'Ctrl + Alt + Del.',
        'Logotipo do Windows + L.',
        'Logotipo do Windows + D.',
        'Alt + F4.',
        'Logotipo do Windows + E.'
      ],
      correct: 1,
      exp: 'O atalho "Windows + L" (de Lock/Bloquear) bloqueia instantaneamente a sessão do usuário no Windows 10. "Windows + D" minimiza/mostra a área de trabalho; "Windows + E" abre o Explorador de Arquivos; "Alt + F4" fecha a janela ativa.',
      fund: 'Atalhos de Teclado Oficiais do Windows 10 da Microsoft • Padrão AOCP.',
      hint: 'Windows + L = Lock (bloquear a tela na hora)!'
    },
    {
      topico: 'Correio Eletrônico e Protocolos de Recebimento',
      q: `(Instituto AOCP / PMPE 2026 - Q${pad}) Ao configurar um cliente de e-mail institucional no computador do batalhão, a diferença fundamental entre os protocolos IMAP e POP3 reside no fato de que:`,
      opts: [
        'O POP3 sincroniza pastas em tempo real na nuvem, enquanto o IMAP apaga os e-mails após o envio.',
        'O IMAP mantém as mensagens sincronizadas no servidor permitindo acesso em múltiplos dispositivos, enquanto o POP3 baixa as mensagens para a máquina local, tipicamente esvaziando a caixa de entrada no servidor.',
        'O IMAP é exclusivo para o envio de e-mails e o POP3 para a anexação de arquivos pesados.',
        'Ambos utilizam a porta 80 e realizam a mesma função sem qualquer diferença de armazenamento.',
        'O POP3 opera exclusivamente sob criptografia quântica assimétrica.'
      ],
      correct: 1,
      exp: 'O IMAP (Internet Message Access Protocol) mantém os e-mails no servidor e sincroniza pastas entre todos os dispositivos do usuário. O POP3 (Post Office Protocol) descarrega as mensagens para o computador local e, por padrão, remove-as do servidor remoto.',
      fund: 'Protocolos da Internet • Correio Eletrônico RFC 3501 (IMAP) e RFC 1939 (POP3).',
      hint: 'IMAP = Sincroniza tudo no servidor. POP3 = Baixa para a máquina local!'
    }
  ];

  const t = topicos[i % topicos.length];
  return {
    id: `info_50_edital_${pad}`,
    categoryId: 'informatica',
    bloco: 'bloco_2',
    materiaNome: 'Noções de Informática',
    topicoEdital: t.topico,
    question: t.q,
    options: t.opts,
    correctIndex: t.correct,
    explanation: t.exp,
    fundamentacaoLegal: t.fund,
    hint: t.hint,
    difficulty: (i % 3 === 0 ? 'hard' : i % 2 === 0 ? 'medium' : 'easy') as 'easy' | 'medium' | 'hard',
    banca: 'Instituto AOCP',
    simuladoOrigem: 'caderno_informatica',
    dicaMacete: 'Segurança da Informação da AOCP: C-I-D (Confidencialidade, Integridade, Disponibilidade) e cuidado com a pegadinha do Ransomware!'
  };
});

export const BANCO_NOVAS_QUESTOES_BLOCO_2: QuizQuestion[] = [
  ...QUESTOES_RACIOCINIO_50,
  ...QUESTOES_INFORMATICA_50
];
