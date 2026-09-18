// Decisão Analítica - Apple Style Interactions

document.addEventListener('DOMContentLoaded', () => {
  // 1. Architecture Step Explorer Data & Interaction
  const archSteps = [
    {
      step: 1,
      title: "1. Fontes de Dados Multi-Ecossistema",
      desc: "Identificamos todas as fontes de dados relevantes da organização. Asseguramos que os dados gerados por ERP, CRM e outras aplicações SaaS ou locais sejam capturados sem afetar o desempenho das operações.",
      list: [
        "Conexão com SAP, Salesforce, Oracle, Hubspot e bancos de dados",
        "Captura de dados estruturados e não-estruturados",
        "Monitoramento de integridade e ingestão contínua em tempo real"
      ]
    },
    {
      step: 2,
      title: "2. Staging & Data Lake",
      desc: "Os dados extraídos das fontes são armazenados em um banco de dados de estágio (Staging) e ingeridos em um Data Lake de alta capacidade para retenção histórica e exploração científica.",
      list: [
        "Armazenamento bruto (Raw Layer) com versionamento completo",
        "Arquitetura Lakehouse preparada para Big Data",
        "Preservação de histórico para auditorias e aprendizado de máquina"
      ]
    },
    {
      step: 3,
      title: "3. Data Warehouse & Reconciliação Multi-fonte",
      desc: "Transformamos e migramos os dados para o Data Warehouse, onde são criadas tabelas de fatos e dimensões. Validamos e reconciliamos dados provenientes de múltiplas fontes com 100% de precisão.",
      list: [
        "Modelagem Dimensional (Star-Schema & Snowflake)",
        "Reconciliação automática eliminating inconsistências",
        "Estruturas sólidas de governança e catálogo corporativo"
      ]
    },
    {
      step: 4,
      title: "4. Camada de Modelos Semânticos",
      desc: "Construímos modelos de dados específicos para cada área da empresa (Finanças, Operações, Vendas, Supply Chain e RH), traduzindo dados brutos em métricas de negócios acionáveis.",
      list: [
        "Indicadores padronizados de margem, churn, liquidez e giro",
        "Visão executiva alinhada às metas estratégicas do conselho",
        "Controle rígido de acesso (Row Level Security)"
      ]
    },
    {
      step: 5,
      title: "5. BI & Relatórios de Classe Mundial",
      desc: "Desenvolvemos uma camada robusta de relatórios e dashboards interativos utilizando ferramentas líderes de mercado (Power BI, Tableau, Looker, Fabric) para navegação intuitiva.",
      list: [
        "Dashboards executivos com capacidade drill-down imediata",
        "Alertas automatizados para desvios em KPIs críticos",
        "Visualizações multiplataforma para executivos em movimento"
      ]
    },
    {
      step: 6,
      title: "6. Advanced Analytics & IA",
      desc: "Conduzimos iniciativas avançadas de ciência de dados. Nossas soluções resolvem os problemas mais complexos onde outros não obtiveram sucesso, gerando valor real e retornos superiores.",
      list: [
        "Modelos preditivos de demanda e precificação dinâmica",
        "Algoritmos integrados aos processos operacionais já existentes",
        "Automação e aceleração da tomada de decisão"
      ]
    }
  ];

  const tabButtons = document.querySelectorAll('.arch-tab-btn');
  const stepNumEl = document.getElementById('arch-step-num');
  const titleEl = document.getElementById('arch-title');
  const descEl = document.getElementById('arch-desc');
  const listEl = document.getElementById('arch-list');

  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = archSteps[index];
      if (data) {
        stepNumEl.textContent = `Etapa ${data.step} de 6`;
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        listEl.innerHTML = data.list.map(item => `<li>${item}</li>`).join('');
      }
    });
  });

  // 2. Interactive ROI Calculator
  const revRange = document.getElementById('rev-range');
  const revVal = document.getElementById('rev-val');
  const maturitySelect = document.getElementById('maturity-select');
  const resSavings = document.getElementById('res-savings');
  const resBoost = document.getElementById('res-boost');

  function calculateRoi() {
    if (!revRange || !maturitySelect) return;
    const revM = parseFloat(revRange.value);
    const rate = parseFloat(maturitySelect.value);

    revVal.textContent = `R$ ${revM} Milhões`;

    const savings = revM * 1000000 * rate;
    const boost = savings * 1.4;

    resSavings.textContent = savings.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    });

    resBoost.textContent = boost.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    });
  }

  if (revRange && maturitySelect) {
    revRange.addEventListener('input', calculateRoi);
    maturitySelect.addEventListener('change', calculateRoi);
    calculateRoi();
  }

  // 3. Contact Form Submission
  const form = document.getElementById('diagnostic-form');
  const feedback = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.textContent = '✓ Solicitação enviada com sucesso! Nossa equipe de especialistas entrará em contato em breve.';
      form.reset();
    });
  }
});
