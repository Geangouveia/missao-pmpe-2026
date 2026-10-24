import type { QuizQuestion } from '../../types/game';

/**
 * BANCO DE ELITE: 100 QUESTÕES INÉDITAS DE NOÇÕES DE INFORMÁTICA (INSTITUTO AOCP PMPE)
 * 100% fiéis ao Edital Oficial da PMPE 2026. Windows, Word, Excel, Redes e Segurança da Informação.
 */
export const BANCO_100_INFORMATICA_AOCP: QuizQuestion[] = [
  {
    "id": "info_inedita_100_001",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Conceitos de Hardware • Memórias Primárias e Voláteis",
    "question": "[AOCP PMPE Inédita Q001] Em relação à arquitetura de computadores, qual tipo de memória perde integralmente todas as suas informações quando o computador é desligado ou reiniciado (memória volátil)?",
    "options": [
      "Memória ROM.",
      "Memória RAM.",
      "Disco Rígido (HD).",
      "Unidade de Estado Sólido (SSD).",
      "Memória Flash (Pendrive)."
    ],
    "correctIndex": 1,
    "explanation": "A memória RAM (Random Access Memory) é a memória principal de trabalho do processador, sendo volátil, isto é, depende de energia elétrica contínua para reter os dados temporários em execução.",
    "fundamentacaoLegal": "Arquitetura Básica de Computadores • Memória RAM.",
    "hint": "Memória de acesso aleatório onde ficam os programas abertos!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "RAM = Rápida e Apaga ao desligar (Volátil). ROM = Read Only (Não apaga).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. A memória RAM (Random Access Memory) é a memória principal de trabalho do processador, sendo volátil, isto é, depende de energia elétrica contínua para reter os dados temporários em execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_002",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Armazenamento • Discos SSD vs. HD",
    "question": "[AOCP PMPE Inédita Q002] Uma das principais vantagens das unidades de armazenamento do tipo SSD (Solid State Drive) em relação aos discos rígidos mecânicos convencionais (HDD) é:",
    "options": [
      "Maior velocidade na leitura e gravação de dados, menor consumo de energia e ausência de partes mecânicas móveis.",
      "Capacidade ilimitada de armazenamento gratuito na nuvem.",
      "Imunidade total contra qualquer tipo de vírus ou ransomware.",
      "Necessidade obrigatória de desfragmentação semanal para não queimar.",
      "Custo de produção muito mais baixo que qualquer fita magnética."
    ],
    "correctIndex": 0,
    "explanation": "Os SSDs utilizam chips de memória flash semicondutores, não possuindo agulhas ou discos giratórios móveis, o que confere taxas de transferência e boot muito superiores e maior resistência a impactos físicos.",
    "fundamentacaoLegal": "Dispositivos de Armazenamento de Dados • SSD.",
    "hint": "SSD não tem peças móveis e é muito mais veloz que o HD mecânico!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "SSD = Silencioso, Superveloz e Durável (sem agulha mecânica).",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. Os SSDs utilizam chips de memória flash semicondutores, não possuindo agulhas ou discos giratórios móveis, o que confere taxas de transferência e boot muito superiores e maior resistência a impactos físicos.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_003",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Sistema Operacional Windows 10/11 • Atalhos de Teclado",
    "question": "[AOCP PMPE Inédita Q003] No sistema operacional Microsoft Windows 10, o atalho de teclado utilizado para bloquear instantaneamente a estação de trabalho quando o policial precisa se ausentar da mesa é:",
    "options": [
      "Ctrl + Alt + Del",
      "Logotipo do Windows (Win) + L",
      "Logotipo do Windows (Win) + D",
      "Alt + F4",
      "Ctrl + Shift + Esc"
    ],
    "correctIndex": 1,
    "explanation": "A combinação de teclas 'Windows + L' (Lock) bloqueia imediatamente a sessão do usuário atual, exigindo a senha para retornar ao sistema, garantindo a segurança das informações.",
    "fundamentacaoLegal": "Atalhos de Teclado Oficiais do Windows • Microsoft.",
    "hint": "Win + L de 'Lock' (bloquear em inglês)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Win + L = Lock (Bloqueia a tela na hora).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. A combinação de teclas 'Windows + L' (Lock) bloqueia imediatamente a sessão do usuário atual, exigindo a senha para retornar ao sistema, garantindo a segurança das informações.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_004",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Windows • Explorador de Arquivos e Lixeira",
    "question": "[AOCP PMPE Inédita Q004] No Explorador de Arquivos do Windows, ao selecionar um arquivo gravado no disco rígido local e pressionar simultaneamente as teclas 'Shift + Delete':",
    "options": [
      "O arquivo é movido para a Lixeira do Windows.",
      "O arquivo é compactado em formato ZIP.",
      "O arquivo é excluído permanentemente do computador, sem passar pela Lixeira.",
      "O arquivo é copiado para a Área de Transferência.",
      "Uma cópia de segurança do arquivo é enviada automaticamente para o OneDrive."
    ],
    "correctIndex": 2,
    "explanation": "O atalho 'Shift + Delete' exclui o arquivo diretamente de forma permanente, ignorando o envio para a Lixeira do sistema.",
    "fundamentacaoLegal": "Operações com Arquivos e Lixeira no Windows.",
    "hint": "Shift + Delete = Exclusão definitiva sem escala na Lixeira!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Delete normal = vai pra Lixeira. Shift + Delete = vai pro além direto.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Correta. O atalho 'Shift + Delete' exclui o arquivo diretamente de forma permanente, ignorando o envio para a Lixeira do sistema.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_005",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Microsoft Word • Formatação e Quebras de Seção",
    "question": "[AOCP PMPE Inédita Q005] No Microsoft Word, para que uma única página de um relatório policial seja configurada com orientação Paisagem (horizontal), enquanto as demais páginas permanecem em orientação Retrato (vertical), o usuário deve obrigatoriamente inserir:",
    "options": [
      "Uma Quebra de Página simples.",
      "Uma Quebra de Seção (Próxima Página).",
      "Uma Quebra de Coluna.",
      "Um Marcador de Parágrafo tático.",
      "Uma Nota de Rodapé."
    ],
    "correctIndex": 1,
    "explanation": "Diferentes orientações de página (retrato/paisagem), margens e cabeçalhos em um mesmo documento do Word exigem a criação de diferentes SEÇÕES por meio de 'Quebra de Seção'.",
    "fundamentacaoLegal": "Layout de Documentos no Microsoft Word • Quebras de Seção.",
    "hint": "Mudar orientação ou cabeçalho de uma página isolada exige Quebra de Seção!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Quebra de Página só pula a folha; Quebra de Seção muda a configuração.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. Diferentes orientações de página (retrato/paisagem), margens e cabeçalhos em um mesmo documento do Word exigem a criação de diferentes SEÇÕES por meio de 'Quebra de Seção'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_006",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Microsoft Excel • Fórmulas Matemáticas e Intervalos",
    "question": "[AOCP PMPE Inédita Q006] Em uma planilha do Microsoft Excel em português, a fórmula '=SOMA(A1:A4)' calcula:",
    "options": [
      "A soma exclusivamente das células A1 e A4.",
      "A soma de todas as células do intervalo contínuo de A1 até A4 (A1, A2, A3 e A4).",
      "A média aritmética entre a célula A1 e A4.",
      "A multiplicação da célula A1 pela célula A4.",
      "A contagem de quantas células contêm texto entre A1 e A4."
    ],
    "correctIndex": 1,
    "explanation": "O operador de dois pontos (:) no Excel representa um intervalo contínuo ('até'). Portanto, A1:A4 inclui A1, A2, A3 e A4. Se fosse ponto e vírgula (;), somaria apenas A1 e A4.",
    "fundamentacaoLegal": "Operadores de Intervalo no Excel: Dois pontos (:) vs. Ponto e vírgula (;).",
    "hint": "Dois pontos (:) significa ATÉ; ponto e vírgula (;) significa E!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Dois pontos = De A1 ATÉ A4. Ponto e vírgula = A1 E A4.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O operador de dois pontos (:) no Excel representa um intervalo contínuo ('até'). Portanto, A1:A4 inclui A1, A2, A3 e A4. Se fosse ponto e vírgula (;), somaria apenas A1 e A4.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_007",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Microsoft Excel • Referências Absolutas com Cifrão ($)",
    "question": "[AOCP PMPE Inédita Q007] No Microsoft Excel, ao copiar e colar uma fórmula da célula C1 para C2 contendo a referência '=$A$1*B1', a fórmula resultante em C2 será:",
    "options": [
      "=$A$2*B2",
      "=$A$1*B2",
      "=$B$1*B2",
      "=A1*B2",
      "=$A$1*B1"
    ],
    "correctIndex": 1,
    "explanation": "O cifrão ($) fixa e congela a referência. Como '$A$1' está totalmente travada na coluna A e na linha 1, ela não se altera ao ser arrastada. Já 'B1' é relativa e se ajusta para 'B2'. Logo: '=$A$1*B2'.",
    "fundamentacaoLegal": "Referências Absolutas e Relativas no Excel.",
    "hint": "O que tem cifrão ($) fica congelado e não muda de linha ou coluna!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Cifrão é o cadeado do Excel: quem tem cifrão não muda.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O cifrão ($) fixa e congela a referência. Como '$A$1' está totalmente travada na coluna A e na linha 1, ela não se altera ao ser arrastada. Já 'B1' é relativa e se ajusta para 'B2'. Logo: '=$A$1*B2'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_008",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Microsoft Excel • Função SE Condicional",
    "question": "[AOCP PMPE Inédita Q008] Considere que a célula A1 do Excel contém o valor 85. Qual será o resultado exibido na célula que contém a fórmula: '=SE(A1>=70; \"APROVADO\"; \"REPROVADO\")'?",
    "options": [
      "APROVADO",
      "REPROVADO",
      "VERDADEIRO",
      "#VALOR!",
      "85"
    ],
    "correctIndex": 0,
    "explanation": "A sintaxe da função SE é: SE(teste_lógico; valor_se_verdadeiro; valor_se_falso). Como 85 >= 70 é VERDADEIRO, o Excel retorna o segundo argumento: 'APROVADO'.",
    "fundamentacaoLegal": "Função Lógica SE no Microsoft Excel.",
    "hint": "Teste verdadeiro executa o primeiro valor após o ponto e vírgula!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "SE(teste ; se_V ; se_F). 85 é maior ou igual a 70? Sim, então é APROVADO.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. A sintaxe da função SE é: SE(teste_lógico; valor_se_verdadeiro; valor_se_falso). Como 85 >= 70 é VERDADEIRO, o Excel retorna o segundo argumento: 'APROVADO'.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_009",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "LibreOffice • Formatos Padrão ODF",
    "question": "[AOCP PMPE Inédita Q009] A suíte de escritório livre e gratuita LibreOffice utiliza por padrão os formatos abertos ODF. Assinale a extensão nativa de arquivos gerados pelo processador de textos LibreOffice Writer e pela planilha LibreOffice Calc, respectivamente:",
    "options": [
      ".docx e .xlsx",
      ".odt e .ods",
      ".pdf e .txt",
      ".odp e .odt",
      ".html e .csv"
    ],
    "correctIndex": 1,
    "explanation": "No padrão ODF (Open Document Format): o LibreOffice Writer gera arquivos de texto com extensão '.odt' (OpenDocument Text), o Calc gera planilhas '.ods' (OpenDocument Spreadsheet) e o Impress gera apresentações '.odp'.",
    "fundamentacaoLegal": "Padrões Abertos de Documentos • LibreOffice.",
    "hint": "ODT para Text (Writer) e ODS para Spreadsheet (Calc)!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Writer = .odt (t de texto); Calc = .ods (s de spreadsheet/planilha).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No padrão ODF (Open Document Format): o LibreOffice Writer gera arquivos de texto com extensão '.odt' (OpenDocument Text), o Calc gera planilhas '.ods' (OpenDocument Spreadsheet) e o Impress gera apresentações '.odp'.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_010",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes de Computadores • Classificação Geográfica",
    "question": "[AOCP PMPE Inédita Q010] Uma rede de computadores que interliga equipamentos e servidores restritos a um mesmo edifício ou quartel do batalhão da Polícia Militar é classificada tecnicamente como:",
    "options": [
      "WAN (Wide Area Network).",
      "MAN (Metropolitan Area Network).",
      "LAN (Local Area Network).",
      "PAN (Personal Area Network).",
      "SAN (Storage Area Network)."
    ],
    "correctIndex": 2,
    "explanation": "LAN (Local Area Network ou Rede Local) cobre uma área geográfica restrita, como uma sala, escritório, prédio ou quartel.",
    "fundamentacaoLegal": "Classificação das Redes de Computadores por Abrangência Geográfica.",
    "hint": "Rede local dentro de um único prédio ou quartel = LAN!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "PAN (pessoal/bluetooth) < LAN (local/prédio) < MAN (metropolitana/cidade) < WAN (mundial/país).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Correta. LAN (Local Area Network ou Rede Local) cobre uma área geográfica restrita, como uma sala, escritório, prédio ou quartel.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_011",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Redes de Computadores • Protocolos da Internet",
    "question": "[AOCP PMPE Inédita Q011] Na arquitetura TCP/IP, o protocolo responsável por traduzir nomes de domínios amigáveis (como www.pm.pe.gov.br) no respectivo endereço IP numérico do servidor é o:",
    "options": [
      "DHCP",
      "DNS",
      "FTP",
      "SNMP",
      "HTTP"
    ],
    "correctIndex": 1,
    "explanation": "O DNS (Domain Name System) atua como o catálogo telefônico da Internet, convertendo nomes de domínios alfanuméricos em endereços IP compreendidos pelos roteadores.",
    "fundamentacaoLegal": "Protocolos da Camada de Aplicação • DNS.",
    "hint": "DNS = Domain Name System (converte nome em IP)!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "DNS = Dá Nome ao Servidor (traduz nome para IP).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O DNS (Domain Name System) atua como o catálogo telefônico da Internet, convertendo nomes de domínios alfanuméricos em endereços IP compreendidos pelos roteadores.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_012",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Protocolos de Correio Eletrônico • Envio vs. Recebimento",
    "question": "[AOCP PMPE Inédita Q012] Em relação aos protocolos de correio eletrônico, o protocolo padrão utilizado especificamente para o ENVIO (saída) de mensagens de e-mail é o:",
    "options": [
      "POP3",
      "IMAP",
      "SMTP",
      "FTP",
      "SSH"
    ],
    "correctIndex": 2,
    "explanation": "O SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para ENVIO e transferência de e-mails entre servidores. Já o POP3 e o IMAP são utilizados para recebimento/leitura.",
    "fundamentacaoLegal": "Protocolos de E-mail • SMTP, POP3 e IMAP.",
    "hint": "SMTP = Sua Mensagem Tá Partindo (Envio)!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "SMTP = 'Sua Mensagem Tá Partindo' (envio). POP3/IMAP = recebimento.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Correta. O SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para ENVIO e transferência de e-mails entre servidores. Já o POP3 e o IMAP são utilizados para recebimento/leitura.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_013",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação • Princípios Básicos (CIDAL)",
    "question": "[AOCP PMPE Inédita Q013] O princípio fundamental da segurança da informação que garante que uma informação só poderá ser acessada por pessoas e sistemas devidamente autorizados denomina-se:",
    "options": [
      "Disponibilidade.",
      "Integridade.",
      "Confidencialidade.",
      "Não repúdio.",
      "Legalidade."
    ],
    "correctIndex": 2,
    "explanation": "Confidencialidade (ou sigilo) assegura que a informação não seja disponibilizada nem revelada a indivíduos, entidades ou processos não autorizados.",
    "fundamentacaoLegal": "Pilares da Segurança da Informação (ISO 27001).",
    "hint": "Sigilo e proteção contra acessos de estranhos = Confidencialidade!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "C.I.D.A. = Confidencialidade (sigilo), Integridade (não alterado), Disponibilidade (acessível).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Correta. Confidencialidade (ou sigilo) assegura que a informação não seja disponibilizada nem revelada a indivíduos, entidades ou processos não autorizados.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_014",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Malwares e Ameaças Virtuais • Ransomware",
    "question": "[AOCP PMPE Inédita Q014] O tipo de software malicioso que infecta um computador, criptografa todos os arquivos do usuário tornando-os inacessíveis e exige o pagamento de um resgate (geralmente em criptomoedas) para fornecer a chave de descriptografia é denominado:",
    "options": [
      "Spyware",
      "Ransomware",
      "Keylogger",
      "Adware",
      "Worm"
    ],
    "correctIndex": 1,
    "explanation": "Ransomware (de 'ransom' = resgate) é o malware que sequestra arquivos ou sistemas mediante criptografia e chantageia a vítima exigindo quantias financeiras.",
    "fundamentacaoLegal": "Classificação de Códigos Maliciosos (Malwares) • CERT.br.",
    "hint": "Malware que criptografa tudo e cobra resgate = Ransomware!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Ransomware = Resgateware (sequestrador de dados com criptografia).",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. Ransomware (de 'ransom' = resgate) é o malware que sequestra arquivos ou sistemas mediante criptografia e chantageia a vítima exigindo quantias financeiras.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_015",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Segurança da Informação • Ataques de Phishing",
    "question": "[AOCP PMPE Inédita Q015] A técnica de engenharia social na qual criminosos virtuais enviam e-mails fraudulentos ou criam páginas clonadas idênticas às de instituições oficiais (como bancos ou corporações policiais) para enganar o usuário e roubar suas senhas e dados confidenciais é chamada de:",
    "options": [
      "Phishing",
      "Defacement",
      "DDoS",
      "Brute Force",
      "Port Scanning"
    ],
    "correctIndex": 0,
    "explanation": "Phishing (pescaria) é a fraude eletrônica que usa iscas (mensagens ou sites clonados convincentes) para induzir a vítima a fornecer voluntariamente dados sigilosos e credenciais.",
    "fundamentacaoLegal": "Engenharia Social e Fraudes na Internet • Cartilha de Segurança CERT.br.",
    "hint": "Pescaria de senhas com páginas e e-mails clonados = Phishing!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Phishing = pescaria de dados e senhas via e-mail falso.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. Phishing (pescaria) é a fraude eletrônica que usa iscas (mensagens ou sites clonados convincentes) para induzir a vítima a fornecer voluntariamente dados sigilosos e credenciais.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_016",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Atalhos do Sistema Operacional Windows.",
    "question": "[AOCP PMPE Inédita Q016] O Gerenciador de Tarefas do Windows, útil para encerrar processos travados e monitorar o uso de CPU e memória, pode ser aberto diretamente pelo atalho:",
    "options": [
      "Ctrl + Alt + Tab",
      "Ctrl + Shift + Esc",
      "Win + R",
      "Alt + Barra de Espaço",
      "F11"
    ],
    "correctIndex": 1,
    "explanation": "O atalho de mão única 'Ctrl + Shift + Esc' abre diretamente o Gerenciador de Tarefas sem passar pela tela intermediária de segurança do Ctrl+Alt+Del.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O atalho de mão única 'Ctrl + Shift + Esc' abre diretamente o Gerenciador de Tarefas sem passar pela tela intermediária de segurança do Ctrl+Alt+Del.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_017",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Privacidade e Navegadores Web.",
    "question": "[AOCP PMPE Inédita Q017] O recurso de navegação anônima (ou InPrivate) disponível nos navegadores Google Chrome, Edge e Firefox garante que:",
    "options": [
      "O usuário se torna 100% invisível ao provedor de internet e aos sites acessados.",
      "O navegador não salvará no computador o histórico de navegação, cookies e dados de formulários após o fechamento da janela.",
      "Nenhum arquivo baixado poderá conter vírus.",
      "A velocidade de download será duplicada.",
      "O endereço IP da máquina é alterado para outro país."
    ],
    "correctIndex": 1,
    "explanation": "A navegação anônima impede que o histórico, cookies e senhas fiquem gravados localmente no dispositivo após o encerramento da sessão, mas não oculta as atividades do provedor ou do administrador da rede.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. A navegação anônima impede que o histórico, cookies e senhas fiquem gravados localmente no dispositivo após o encerramento da sessão, mas não oculta as atividades do provedor ou do administrador da rede.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_018",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Conceitos de Firewall e Segurança de Redes.",
    "question": "[AOCP PMPE Inédita Q018] Em relação aos mecanismos de segurança, um Firewall tem como função precípua:",
    "options": [
      "Eliminar e desinfectar arquivos com extensões .exe e .bat.",
      "Controlar e filtrar o tráfego de dados que entra e sai de uma rede ou computador com base em regras de segurança.",
      "Acelerar a velocidade de carregamento dos vídeos no YouTube.",
      "Fazer cópias automáticas de segurança na nuvem.",
      "Desfragmentar o disco rígido durante a madrugada."
    ],
    "correctIndex": 1,
    "explanation": "O firewall atua como uma barreira de proteção (parede de fogo) filtrando pacotes de rede autorizados e bloqueando conexões não permitidas.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O firewall atua como uma barreira de proteção (parede de fogo) filtrando pacotes de rede autorizados e bloqueando conexões não permitidas.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_019",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Características dos Malwares: Worms vs. Vírus.",
    "question": "[AOCP PMPE Inédita Q019] A diferença fundamental entre um Worm e um Vírus clássico reside no fato de que o Worm:",
    "options": [
      "Precisa obrigatoriamente de um arquivo hospedeiro e da ação do usuário para se propagar.",
      "É capaz de se propagar e autorreplicar automaticamente através da rede, explorando vulnerabilidades, sem precisar de arquivo hospedeiro.",
      "Só infecta dispositivos móveis com sistema iOS.",
      "Não causa nenhum dano ao computador, servindo apenas para exibir anúncios.",
      "É um programa legítimo homologado pela Microsoft."
    ],
    "correctIndex": 1,
    "explanation": "Ao contrário dos vírus comuns, que dependem da execução de um hospedeiro contaminado, os worms autorreplicam-se de forma autônoma pelas redes de computadores.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. Ao contrário dos vírus comuns, que dependem da execução de um hospedeiro contaminado, os worms autorreplicam-se de forma autônoma pelas redes de computadores.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_020",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Tipos de Spyware: Keylogger.",
    "question": "[AOCP PMPE Inédita Q020] O tipo de software espião projetado especificamente para capturar e registrar secretamente todas as teclas digitadas pelo usuário no teclado físico denomina-se:",
    "options": [
      "Screenlogger",
      "Keylogger",
      "Ransomware",
      "Trojan Clicker",
      "Rootkit"
    ],
    "correctIndex": 1,
    "explanation": "Keyloggers são spywares especializados em interceptar e gravar a digitação de teclas, capturando senhas, mensagens e números de cartões de crédito.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. Keyloggers são spywares especializados em interceptar e gravar a digitação de teclas, capturando senhas, mensagens e números de cartões de crédito.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_021",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Funções Estatísticas no Excel: MÉDIA.",
    "question": "[AOCP PMPE Inédita Q021] No Microsoft Excel, a fórmula '=MÉDIA(10; 20; 30)' exibirá na célula o valor:",
    "options": [
      "60",
      "20",
      "30",
      "15",
      "10"
    ],
    "correctIndex": 1,
    "explanation": "A função MÉDIA soma os valores e divide pela quantidade de argumentos: (10 + 20 + 30) / 3 = 60 / 3 = 20.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. A função MÉDIA soma os valores e divide pela quantidade de argumentos: (10 + 20 + 30) / 3 = 60 / 3 = 20.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_022",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Função Condicional CONT.SE no Excel.",
    "question": "[AOCP PMPE Inédita Q022] Qual fórmula do Excel deve ser utilizada para contar quantas células do intervalo B1:B10 possuem valor estritamente maior que 50?",
    "options": [
      "=SOMA(B1:B10; \">50\")",
      "=CONT.SE(B1:B10; \">50\")",
      "=SOMASE(B1:B10; \">50\")",
      "=CONTAR.VALZ(B1:B10)",
      "=SE(B1:B10>50)"
    ],
    "correctIndex": 1,
    "explanation": "A função CONT.SE(intervalo; critérios) conta o número de células dentro de um intervalo que atendem a uma condição específica.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. A função CONT.SE(intervalo; critérios) conta o número de células dentro de um intervalo que atendem a uma condição específica.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_023",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Função SOMASE no Excel.",
    "question": "[AOCP PMPE Inédita Q023] Qual é a função do Excel utilizada para somar os valores de um intervalo com base em um critério específico?",
    "options": [
      "SOMASE",
      "CONT.SE",
      "PROCV",
      "CONCATENAR",
      "MÁXIMO"
    ],
    "correctIndex": 0,
    "explanation": "A função SOMASE soma as células especificadas por um determinado critério ou condição.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. A função SOMASE soma as células especificadas por um determinado critério ou condição.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_024",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Operador de Concatenação no Excel.",
    "question": "[AOCP PMPE Inédita Q024] No Microsoft Excel, o operador utilizado para concatenar (juntar) dois ou mais textos contidos em células diferentes é:",
    "options": [
      "+",
      "-",
      "& (e comercial)",
      "* (asterisco)",
      "/ (barra)"
    ],
    "correctIndex": 2,
    "explanation": "O operador '&' (e comercial) é o operador de concatenação no Excel: '=A1 & \" \" & B1' junta o conteúdo de A1 e B1 com um espaço.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Correta. O operador '&' (e comercial) é o operador de concatenação no Excel: '=A1 & \" \" & B1' junta o conteúdo de A1 e B1 com um espaço.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_025",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Noções de Informática • Mensagens de Erro Comuns no Excel.",
    "question": "[AOCP PMPE Inédita Q025] Em uma planilha do Excel, a mensagem de erro '#####', exibida no interior de uma célula numérica, indica que:",
    "options": [
      "A fórmula possui uma divisão por zero.",
      "O nome da função foi digitado incorretamente.",
      "A coluna é muito estreita para exibir o número por completo ou a célula contém uma data negativa.",
      "Ocorreu um erro de referência circular.",
      "O arquivo foi corrompido por um vírus."
    ],
    "correctIndex": 2,
    "explanation": "A sequência de cerquilhas '#####' ocorre quando a largura da coluna é insuficiente para exibir todo o conteúdo numérico, bastando aumentar a largura da coluna.",
    "fundamentacaoLegal": "Conceitos de Informática e Tecnologias da Informação • AOCP.",
    "hint": "Lembre-se do funcionamento prático dos softwares e sistemas operacionais!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Questão recorrente em concursos da área de segurança pública.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Correta. A sequência de cerquilhas '#####' ocorre quando a largura da coluna é insuficiente para exibir todo o conteúdo numérico, bastando aumentar a largura da coluna.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_026",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q026] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_027",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q027] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_028",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q028] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_029",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q029] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_030",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q030] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_031",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q031] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_032",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q032] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_033",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q033] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_034",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q034] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_035",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q035] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_036",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q036] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_037",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q037] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_038",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q038] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_039",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q039] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_040",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q040] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_041",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q041] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_042",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q042] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_043",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q043] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_044",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q044] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_045",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q045] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_046",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q046] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_047",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q047] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_048",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q048] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_049",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q049] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_050",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q050] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_051",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q051] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_052",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q052] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_053",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q053] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_054",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q054] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_055",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q055] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_056",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q056] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_057",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q057] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_058",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q058] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_059",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q059] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_060",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q060] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_061",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q061] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_062",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q062] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_063",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q063] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_064",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q064] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_065",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q065] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_066",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q066] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_067",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q067] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_068",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q068] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_069",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q069] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_070",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q070] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_071",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q071] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_072",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q072] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_073",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q073] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_074",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q074] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_075",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q075] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_076",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q076] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_077",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q077] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_078",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q078] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_079",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q079] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_080",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q080] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_081",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q081] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_082",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q082] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_083",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q083] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_084",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q084] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_085",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q085] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_086",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q086] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_087",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q087] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_088",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q088] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_089",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q089] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_090",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q090] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_091",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q091] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_092",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q092] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_093",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q093] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_094",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q094] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_095",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q095] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_096",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Rotinas e Tipos de Backup: Incremental.",
    "question": "[AOCP PMPE Inédita Q096] Em relação aos tipos de Backup, o Backup Incremental caracteriza-se por:",
    "options": [
      "Copiar todos os arquivos do sistema todos os dias.",
      "Copiar apenas os arquivos criados ou modificados desde o último backup (seja ele completo ou incremental), desmarcando o atributo de arquivo.",
      "Apagar os dados originais após a cópia.",
      "Copiar apenas arquivos do tipo imagem e vídeo.",
      "Gravar os dados exclusivamente em disquetes."
    ],
    "correctIndex": 1,
    "explanation": "O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O backup incremental salva somente os dados alterados desde o último backup realizado e limpa o atributo de arquivo, sendo o mais rápido na execução.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_097",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Protocolos de Segurança Web: HTTPS.",
    "question": "[AOCP PMPE Inédita Q097] No protocolo HTTP, a versão segura que utiliza criptografia SSL/TLS para tráfego seguro de páginas da web e opera na porta padrão 443 é o:",
    "options": [
      "HTTPS",
      "HTTP 1.0",
      "Telnet",
      "SSH",
      "SNMP"
    ],
    "correctIndex": 0,
    "explanation": "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "easy",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de criptografia ao HTTP utilizando certificados digitais e porta padrão 443.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_098",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Atalhos Oficiais do Microsoft Word em Português.",
    "question": "[AOCP PMPE Inédita Q098] No Microsoft Word em português, o atalho padrão de teclado utilizado para SALVAR o documento ativo é:",
    "options": [
      "Ctrl + S",
      "Ctrl + B",
      "Ctrl + Salvar",
      "Alt + S",
      "Shift + S"
    ],
    "correctIndex": 1,
    "explanation": "No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. No Word em português da Microsoft, o atalho para Salvar é 'Ctrl + B' (B de Backup/Salvar). No LibreOffice e navegadores em inglês, usa-se Ctrl+S.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_099",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Golpes na Internet: Ataque de Pharming.",
    "question": "[AOCP PMPE Inédita Q099] O golpe virtual em que o criminoso altera as tabelas de resolução de nomes DNS para redirecionar secretamente o usuário de um site legítimo para uma página falsa sem que o usuário perceba é denominado:",
    "options": [
      "Pharming",
      "Spam",
      "Hoax",
      "Cookies",
      "Ping da Morte"
    ],
    "correctIndex": 0,
    "explanation": "O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "hard",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "1": "Você marcou (B): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Correta. O Pharming é o envenenamento de cache DNS que redireciona a navegação para servidores clonados mesmo quando a vítima digita a URL correta na barra de endereços.",
      "B": "Incorreta. A assertiva (B) está em desacordo com as características técnicas e padrões de informática.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  },
  {
    "id": "info_inedita_100_100",
    "categoryId": "informatica",
    "bloco": "bloco_2",
    "materiaNome": "Noções de Informática",
    "topicoEdital": "Informática PMPE • Estrutura do Endereço IPv4 vs. IPv6.",
    "question": "[AOCP PMPE Inédita Q100] O endereço IPv4 é composto tecnicamente por quantos bits divididos em 4 octetos decimais?",
    "options": [
      "16 bits.",
      "32 bits.",
      "64 bits.",
      "128 bits.",
      "256 bits."
    ],
    "correctIndex": 1,
    "explanation": "O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
    "fundamentacaoLegal": "Noções de Informática Policial • Instituto AOCP.",
    "hint": "Foco nos protocolos, atalhos e terminologias de segurança da informação!",
    "difficulty": "medium",
    "banca": "Instituto AOCP",
    "simuladoOrigem": "Caderno Oficial Edital AOCP 100 Inéditas",
    "dicaMacete": "Fique atento às pegadinhas entre português e inglês e versões de software.",
    "porqueErrou": {
      "0": "Você marcou (A): Resposta incorreta conforme os manuais e o edital AOCP.",
      "2": "Você marcou (C): Resposta incorreta conforme os manuais e o edital AOCP.",
      "3": "Você marcou (D): Resposta incorreta conforme os manuais e o edital AOCP.",
      "4": "Você marcou (E): Resposta incorreta conforme os manuais e o edital AOCP."
    },
    "analiseAlternativas": {
      "A": "Incorreta. A assertiva (A) está em desacordo com as características técnicas e padrões de informática.",
      "B": "Correta. O protocolo IPv4 possui 32 bits no total (formado por 4 números de 0 a 255 separados por pontos, como 192.168.1.1). O IPv6 possui 128 bits.",
      "C": "Incorreta. A assertiva (C) está em desacordo com as características técnicas e padrões de informática.",
      "D": "Incorreta. A assertiva (D) está em desacordo com as características técnicas e padrões de informática.",
      "E": "Incorreta. A assertiva (E) está em desacordo com as características técnicas e padrões de informática."
    }
  }
];
