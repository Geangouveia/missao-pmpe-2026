import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  X, 
  Printer, 
  Shield, 
  AlertTriangle, 
  Sparkles, 
  Gavel, 
  Scale, 
  FileText,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { sound } from '../utils/sound';

interface MilitaryLawBookletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LawSection {
  id: string;
  shortTitle: string;
  fullTitle: string;
  badge: string;
  icon: string;
  articles: {
    number: string;
    heading: string;
    text: string;
    tip?: string;
    warning?: string;
  }[];
}

const LAWS_DATABASE: LawSection[] = [
  {
    id: 'crimes_hediondos',
    shortTitle: 'Crimes Hediondos',
    fullTitle: 'Lei Federal nº 8.072/1990 • Crimes Hediondos e Equiparados',
    badge: 'Art. 1º e 2º • Foco AOCP',
    icon: '🚨',
    articles: [
      {
        number: 'Art. 1º (Rol Taxativo)',
        heading: 'Quais crimes são formalmente Hediondos',
        text: 'São considerados hediondos os seguintes crimes, consumados ou tentados:\nI - Homicídio quando praticado em atividade típica de grupo de extermínio ou quando qualificado;\nII - Latrocínio (roubo qualificado pela morte - art. 157, § 3º, II);\nIII - Extorsão qualificada pela morte (art. 158, § 2º);\nIV - Extorsão mediante sequestro (art. 159);\nV - Estupro (art. 213) e Estupro de vulnerável (art. 217-A);\nVI - Epidemia com resultado morte;\nVII - Falsificação ou adulteração de produto destinado a fins medicinais;\nVIII - Favorecimento da prostituição de criança ou adolescente ou vulnerável;\nIX - Furto qualificado pelo emprego de explosivo ou artefato similar (Pacote Anticrime).',
        tip: 'Mnemônico dos Equiparados: T.T.T. = Tráfico de Drogas, Tortura e Terrorismo (NÃO são hediondos em si, mas seguem o mesmo tratamento rigoroso da lei!).',
        warning: 'Cuidado em prova: Homicídio simples NÃO é hediondo, salvo se praticado em atividade típica de grupo de extermínio (mesmo que por um só agente).'
      },
      {
        number: 'Art. 2º',
        heading: 'Inafiançabilidade e Vedações Constitucionais',
        text: 'Os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e o terrorismo são INAFIANÇÁVEIS e insuscetíveis de GRAÇA, ANISTIA ou INDULTO.\n§ 1º A prisão temporária terá o prazo de 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade.',
        tip: 'Prisão temporária em crimes comuns dura 5 dias (+5). Em crimes HEDIONDOS dura 30 dias (+30)!',
        warning: 'Pegadinha clássica AOCP: É vedada a GRAÇA e o INDULTO, mas a liberdade provisória SEM fiança é admitida segundo o STF (vedada apenas a fiança).'
      },
      {
        number: 'LEP Art. 112 (Pacote Anticrime)',
        heading: 'Progressão de Regime nos Crimes Hediondos',
        text: 'Após a Lei nº 13.964/2019 (Pacote Anticrime), revogou-se o antigo critério de 2/5 e 3/5, passando a vigorar os percentuais:\n- 40% da pena: Condenado por crime hediondo, primário, sem resultado morte;\n- 50% da pena: Condenado por crime hediondo COM resultado morte (primário), vedado livramento condicional;\n- 60% da pena: Condenado por crime hediondo REINCIDENTE em crime hediondo;\n- 70% da pena: Condenado por crime hediondo com resultado morte REINCIDENTE em hediondo com morte.',
        tip: 'Lembre-se da escadinha: 40% (sem morte) ➔ 50% (com morte primário) ➔ 60% (reincidente) ➔ 70% (reincidente com morte).',
        warning: 'Não existe mais a fração de 2/5 ou 3/5 na LEP para provas de 2026!'
      }
    ]
  },
  {
    id: 'direitos_humanos',
    shortTitle: 'Direitos Humanos (DUDH & CADH)',
    fullTitle: 'Declaração Universal (1948) & Pacto de San José da Costa Rica',
    badge: 'DUDH & CADH • Status Supralegal',
    icon: '🕊️',
    articles: [
      {
        number: 'DUDH 1948 • Art. 1º e 3º',
        heading: 'Liberdade, Igualdade e Direito à Vida e Segurança',
        text: 'Artigo 1º: Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade.\nArtigo 3º: Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal.',
        tip: 'A DUDH é uma Resolução da Assembleia Geral da ONU (não é tratado formal), mas possui valor de costume internacional e jus cogens.',
        warning: 'DUDH não prevê pena de morte nem expressamente a proíbe (quem a restringe e veda a restauração é a CADH - Pacto de San José).'
      },
      {
        number: 'CADH • Art. 4º e 7º (Pacto de San José)',
        heading: 'Direito à Vida desde a Concepção e Audiência de Custódia',
        text: 'Artigo 4º: Toda pessoa tem o direito de que se respeite sua vida. Esse direito deve ser protegido pela lei e, em geral, desde o momento da concepção. Ninguém pode ser privado da vida arbitrariamente.\nArtigo 7º, 5: Toda pessoa presa tem o direito de ser conduzida, sem demora (em até 24 horas no Brasil), à presença de um juiz ou outra autoridade autorizada por lei a exercer funções judiciais (Audiência de Custódia).',
        tip: 'CADH proíbe a pena de morte para crimes políticos e veda a sua restauração nos países que a tenham abolido (Princípio do Não Retrocesso / Efeito Cliquet).',
        warning: 'Súmula Vinculante 25 do STF: É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito, por força do status supralegal do Pacto de San José.'
      }
    ]
  },
  {
    id: 'estatuto_pmpe',
    shortTitle: 'Estatuto dos PMs de PE',
    fullTitle: 'Lei Estadual nº 6.783/1974 • Estatuto dos Policiais Militares de Pernambuco',
    badge: 'Lei 6.783/74 • Carreira Militar',
    icon: '🛡️',
    articles: [
      {
        number: 'Arts. 13 a 15',
        heading: 'Hierarquia, Posto e Graduação',
        text: 'Art. 14: Posto é o grau hierárquico do OFICIAL, conferido por ato do Governador do Estado e confirmado em Carta Patente ou Folhinha de Assentamento.\nArt. 15: Graduação é o grau hierárquico da PRAÇA, conferido pelo Comandante-Geral da Polícia Militar.\nCírculos de Oficiais:\n- Subalternos: 1º Tenente e 2º Tenente;\n- Intermediários: Capitão;\n- Superiores: Major, Tenente-Coronel e Coronel.',
        tip: 'Macete: POSTO = Oficial (Governador dá a Patente). GRADUAÇÃO = Praça (Comandante-Geral concede).',
        warning: 'Não confunda: Aspirante-a-Oficial e Aluno-Oficial são Praças Especiais!'
      },
      {
        number: 'Art. 65',
        heading: 'Licença Especial (LE)',
        text: 'A Licença Especial é a autorização para afastamento total do serviço, relativa a cada DECÊNIO (10 anos) de tempo de efetivo serviço prestado, concedida ao policial militar que a requerer, sem que implique em qualquer restrição para sua carreira, com a duração de 6 (SEIS) MESES.',
        tip: '10 anos de serviço = 6 meses de licença especial!',
        warning: 'A licença especial não é interrompida por transferência de unidade, salvo por convocação do Comandante-Geral em caso de guerra ou perturbação da ordem.'
      },
      {
        number: 'Art. 75 e 86',
        heading: 'Agregação e Deserção',
        text: 'Art. 75: A agregação é a situação na qual o policial militar da ativa deixa de ocupar vaga na escala hierárquica do seu Quadro, nela permanecendo SEM NÚMERO.\nArt. 86: Considera-se ausente o militar que por mais de 24 horas deixar de comparecer à sua organização militar sem licença. Se a ausência se prolongar por mais de 8 (OITO) DIAS CONSECUTIVOS, consuma-se o crime militar de DESERÇÃO.',
        tip: 'Ausente = mais de 24 horas. Deserção = mais de 8 dias consecutivos!',
        warning: 'O policial agregado continua em serviço ATIVO, apenas fica sem número na escala hierárquica.'
      }
    ]
  },
  {
    id: 'constituicao_federal',
    shortTitle: 'CF/88 (Segurança & Militares)',
    fullTitle: 'Constituição da República de 1988 • Art. 5º, 42, 142 e 144',
    badge: 'CF/88 • Matéria Obrigatória',
    icon: '⚖️',
    articles: [
      {
        number: 'Art. 5º, XI',
        heading: 'Inviolabilidade do Domicílio',
        text: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:\n- A qualquer hora do dia ou da noite: em caso de FLAGRANTE DELITO ou DESASTRE, ou para prestar SOCORRO;\n- Durante o DIA: por determinação JUDICIAL.',
        tip: 'Mnemônico do Domicílio Noturno: F.D.S. = Flagrante, Desastre, Socorro. Mandado de juiz de noite NÃO ENTRA!',
        warning: 'Atenção: O conceito de "casa" abrange quartos de hotel ocupados e escritórios profissionais (consultórios, repartições fechadas ao público).'
      },
      {
        number: 'Art. 42 e 142',
        heading: 'Regras Constitucionais dos Militares Estaduais',
        text: 'Art. 42: Os membros das Polícias Militares e Corpos de Bombeiros Militares são militares dos Estados e do Distrito Federal.\nArt. 142, § 3º, IV: Ao militar são expressamente PROIBIDAS a sindicalização e a GREVE.\nArt. 142, § 3º, V: O militar em atividade que tomar posse em cargo ou emprego público civil permanente será transferido para a reserva.',
        tip: 'Militar NÃO pode fazer greve (proibição absoluta segundo o STF) e NÃO pode se filiar a partido político enquanto em serviço ativo.',
        warning: 'Militar das Forças Armadas e das Polícias Militares não votam enquanto conscritos, mas os policiais militares estaduais profissionais ALISTAM-SE E VOTAM normalmente!'
      },
      {
        number: 'Art. 144',
        heading: 'Sistema Constitucional de Segurança Pública',
        text: 'A segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio, através dos seguintes órgãos:\nI - Polícia Federal;\nII - Polícia Rodoviária Federal;\nIII - Polícia Ferroviária Federal;\nIV - Polícias Civis;\nV - Polícias Militares e Corpos de Bombeiros Militares;\nVI - Polícias Penais federal, estaduais e distrital.',
        tip: 'Polícia Militar: Polícia Ostensiva e Preservação da Ordem Pública. Polícia Civil: Polícia Judiciária e apuração de infrações penais (exceto militares).',
        warning: 'Forças Armadas (Exército, Marinha, Aeronáutica) NÃO constam no rol do art. 144! Pertencem ao art. 142.'
      }
    ]
  },
  {
    id: 'legislacao_extravagante',
    shortTitle: 'Leis Penais Especiais',
    fullTitle: 'Abuso de Autoridade, Tortura, Maria da Penha, Drogas e Armas',
    badge: 'Leis Extravagantes Penais',
    icon: '⚖️',
    articles: [
      {
        number: 'Lei nº 13.869/2019',
        heading: 'Abuso de Autoridade • Dolo Específico Obrigatório',
        text: 'Art. 1º, § 1º: As condutas descritas nesta Lei constituem crime de abuso de autoridade quando praticadas pelo agente com a finalidade específica de PREJUDICAR OUTREM ou BENEFICIAR A SI MESMO OU A TERCEIRO, ou, ainda, por MERO CAPRICHO OU SATISFAÇÃO PESSOAL.\n§ 2º A divergência na interpretação de lei ou na avaliação de fatos e provas não configura abuso de autoridade (veda o crime de hermenêutica).',
        tip: 'Sem finalidade específica (prejudicar, beneficiar ou capricho), NÃO HÁ CRIME de abuso de autoridade!',
        warning: 'A ação penal é pública incondicionada, admitindo ação privada subsidiária da pública se o MP não agir no prazo legal.'
      },
      {
        number: 'Lei nº 9.455/1997',
        heading: 'Lei de Tortura • Efeito da Condenação',
        text: 'Art. 1º, § 5º: A condenação de agente público acarretará a PERDA DO CARGO, função ou emprego público e a INTERDIÇÃO para seu exercício pelo DOBRO DO PRAZO da pena aplicada.',
        tip: 'O efeito da perda do cargo na Lei de Tortura é AUTOMÁTICO na sentença penal condenatória transitada em julgado!',
        warning: 'Tortura é crime comum (qualquer pessoa pode praticar), inafiançável e insuscetível de graça ou anistia.'
      },
      {
        number: 'Lei nº 11.340/2006 (Art. 24-A)',
        heading: 'Lei Maria da Penha • Descumprimento de Medida Protetiva',
        text: 'Art. 24-A: Descumprir decisão judicial que defere medidas protetivas de urgência previstas nesta Lei.\nPena: Detenção de 3 meses a 2 anos.\n§ 2º Na hipótese de prisão em flagrante, APENAS A AUTORIDADE JUDICIAL poderá conceder fiança. (Delegado de polícia NÃO PODE dar fiança no Art. 24-A).',
        tip: 'O delegado NÃO PODE conceder fiança para o crime do Art. 24-A da Maria da Penha, apenas o juiz!',
        warning: 'A renúncia à representação só pode ser feita perante o juiz em audiência especialmente designada antes do recebimento da denúncia.'
      },
      {
        number: 'Lei nº 10.826/2003',
        heading: 'Estatuto do Desarmamento • Posse vs Porte',
        text: 'Art. 12 (Posse irregular de arma de uso permitido): Manter sob sua guarda no interior de sua residência ou dependência desta, ou no seu local de trabalho se for o titular ou responsável legal.\nPena: Detenção de 1 a 3 anos e multa.\nArt. 14 (Porte ilegal de arma de uso permitido): Portar, deter, adquirir em via pública, fora da residência ou trabalho.\nPena: Reclusão de 2 a 4 anos e multa.',
        tip: 'Posse = dentro de casa ou no trabalho próprio (Detenção 1 a 3 anos). Porte = na rua, circulando (Reclusão 2 a 4 anos).',
        warning: 'Disparo de arma de fogo em via pública (Art. 15): Reclusão de 2 a 4 anos, desde que a conduta não tenha por finalidade a prática de outro crime (subsidiariedade).'
      },
      {
        number: 'Lei nº 11.343/2006 (Art. 28)',
        heading: 'Lei de Drogas • Posse para Consumo Pessoal',
        text: 'Art. 28: Quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar será submetido às seguintes penas:\nI - Advertência sobre os efeitos das drogas;\nII - Prestação de serviços à comunidade;\nIII - Medida educativa de comparecimento a programa ou curso educativo.\nParágrafo único: NÃO HÁ PENA DE PRISÃO (Houve DESPENALIZAÇÃO, não descriminalização).',
        tip: 'O Art. 28 continua sendo CRIME, mas não comina pena de prisão privativa de liberdade.',
        warning: 'A prescrição do Art. 28 ocorre no prazo especial de 2 (dois) anos!'
      }
    ]
  }
];

export const MilitaryLawBookletModal: React.FC<MilitaryLawBookletModalProps> = ({ isOpen, onClose }) => {
  const [selectedLawId, setSelectedLawId] = useState<string>('crimes_hediondos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const activeLaw = useMemo(() => {
    return LAWS_DATABASE.find(l => l.id === selectedLawId) || LAWS_DATABASE[0];
  }, [selectedLawId]);

  // Filtra artigos pela pesquisa
  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return activeLaw.articles;
    const term = searchTerm.toLowerCase();
    return activeLaw.articles.filter(art => 
      art.number.toLowerCase().includes(term) ||
      art.heading.toLowerCase().includes(term) ||
      art.text.toLowerCase().includes(term) ||
      (art.tip && art.tip.toLowerCase().includes(term)) ||
      (art.warning && art.warning.toLowerCase().includes(term))
    );
  }, [activeLaw, searchTerm]);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.88)',
      backdropFilter: 'blur(10px)',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1050px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0b140e',
          border: '1px solid rgba(34, 197, 94, 0.45)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(34, 197, 94, 0.15)',
          overflow: 'hidden'
        }}
      >
        {/* CABEÇALHO DO MODAL */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(34, 197, 94, 0.25)',
          background: 'linear-gradient(135deg, rgba(20, 36, 24, 0.98), rgba(11, 20, 14, 0.98))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #15803d, #14532d)',
              border: '1px solid #4ade80',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)'
            }}>
              <BookOpen size={24} color="#86efac" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#fbbf24',
                  background: 'rgba(245, 158, 11, 0.15)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}>
                  VADE MECUM DO RECRUTA
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>• Legislação Seca do Edital PMPE</span>
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#f3f4f6', margin: '0.15rem 0 0' }}>
                📜 Caderno de Leis do Edital da PMPE
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 0.95rem',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
              title="Imprimir esta Lei para Estudo Físico"
            >
              <Printer size={16} />
              <span>Imprimir</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#9ca3af',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* BARRA DE SELEÇÃO DE LEIS & CAMPO DE BUSCA */}
        <div style={{
          padding: '0.75rem 1.25rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(7, 13, 9, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {/* Seletor de Leis em Carrossel / Abas Roláveis */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.25rem',
            scrollbarWidth: 'thin'
          }}>
            {LAWS_DATABASE.map(law => {
              const isActive = law.id === selectedLawId;
              return (
                <button
                  key={law.id}
                  onClick={() => {
                    sound.playClick();
                    setSelectedLawId(law.id);
                    setSearchTerm('');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 0.9rem',
                    borderRadius: '8px',
                    background: isActive
                      ? 'linear-gradient(135deg, #15803d, #14532d)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: isActive
                      ? '1px solid #4ade80'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isActive ? '#ffffff' : '#9ca3af',
                    fontWeight: isActive ? 800 : 600,
                    fontSize: '0.82rem',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 0 12px rgba(34, 197, 94, 0.4)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{law.icon}</span>
                  <span>{law.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Campo de Pesquisa em Tempo Real */}
          <div style={{ position: 'relative' }}>
            <Search size={16} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por artigo, palavra-chave ou termo legal (ex: fiança, posse, deserção, 40%)..."
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.4rem',
                borderRadius: '8px',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#f3f4f6',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* CORPO DO VADE MECUM: TEXTO DA LEI SECA COMENTADA */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          background: 'radial-gradient(ellipse at 50% 0%, #111f15 0%, #0a120c 60%, #060b08 100%)'
        }}>
          {/* Título da Lei Selecionada */}
          <div style={{
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            background: 'rgba(21, 128, 61, 0.15)',
            border: '1px solid rgba(34, 197, 94, 0.35)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4ade80' }}>
                {activeLaw.badge}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#f3f4f6', margin: '0.2rem 0 0' }}>
                {activeLaw.fullTitle}
              </h3>
            </div>
            <span style={{ fontSize: '0.78rem', color: '#9ca3af', fontFamily: 'monospace' }}>
              {filteredArticles.length} dispositivo(s) filtrado(s)
            </span>
          </div>

          {/* Lista de Artigos */}
          {filteredArticles.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: '#9ca3af',
              fontSize: '0.95rem'
            }}>
              Nenhum artigo encontrado para o termo pesquisado. Tente pesquisar por outro conceito ou limpe a busca.
            </div>
          ) : (
            filteredArticles.map((art, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 25, 18, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Cabeçalho do Artigo */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.82rem',
                    fontWeight: 900,
                    color: '#fbbf24',
                    background: 'rgba(245, 158, 11, 0.15)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(245, 158, 11, 0.35)',
                    fontFamily: 'monospace'
                  }}>
                    {art.number}
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#e5e7eb' }}>
                    {art.heading}
                  </span>
                </div>

                {/* Texto da Lei Seca */}
                <div style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                  color: '#d1d5db',
                  whiteSpace: 'pre-line',
                  padding: '0.75rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '6px',
                  borderLeft: '3px solid #22c55e',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                  {art.text}
                </div>

                {/* Dica / Macete da Banca AOCP */}
                {art.tip && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '6px',
                    background: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    fontSize: '0.84rem',
                    color: '#86efac',
                    lineHeight: '1.5'
                  }}>
                    <Sparkles size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Macete Tático AOCP:</strong> {art.tip}
                    </div>
                  </div>
                )}

                {/* Alerta de Pegadinha Frequente */}
                {art.warning && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '6px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    fontSize: '0.84rem',
                    color: '#fca5a5',
                    lineHeight: '1.5'
                  }}>
                    <AlertTriangle size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Cuidado com a Pegadinha:</strong> {art.warning}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* RODAPÉ DO VADE MECUM */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(11, 20, 14, 0.98)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <span style={{ fontSize: '0.82rem', color: '#9ca3af' }}>
            💡 Estudo de Lei Seca Ativo: 70% das questões da AOCP cobram a literalidade exata desses artigos.
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #15803d, #14532d)',
              border: '1px solid #4ade80',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Fechar Vade Mecum
          </button>
        </div>
      </div>
    </div>
  );
};
