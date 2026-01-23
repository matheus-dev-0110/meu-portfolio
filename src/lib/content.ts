export const content = {
    
  pt: {
    navbar: {
      hero: "Início",
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      role: "Engenheiro | Analista de Dados",
      description:
        "Atuo com análise, engenharia e visualização de dados, criando soluções que transformam informação em valor estratégico.",
      projectsBtn: "Ver Projetos",
      contactBtn: "Entrar em Contato",
    },

    about: {
      title: "Sobre mim",
      p1: `Especialista em Dados focado na construção de arquiteturas escaláveis e na
      entrega de inteligência estratégica. Minha atuação abrange desde a ingestão e
      ETL/ELT via APIs (REST) com Python (Pandas, Polars), até a modelagem
      dimensional em SQL Server (T-SQL) e visualização avançada em Power BI.`,
      p2: `Com certificação em Big Data & Analytics e Business Intelligence pela FIAP, sou especialista em otimizar
      performance e automatizar processos manuais, transformando fluxos legados em
      pipelines de Tempo Real. Unindo o rigor técnico da engenharia com a visão
      analítica de negócio, garanto que o dado percorra o caminho mais eficiente da
      extração ao insight estratégico.`,
    },

    experience: {
      title: "Experiência Profissional",
      items: [
        {
          period: "2024 — 2025",
          role: "Analista de Dados | MIS",
          company: "Winover Call Center",
          description: [
            "Engenharia de Dados: Desenvolvimento de pipelines de ETL com Python para integração de APIs e fornecedores externos.",
            "Banco de Dados: Otimização de Stored Procedures e modelagem de tabelas em SQL Server.",
            "Automação: Redução drástica no tempo de processamento com scripts Python.",
            "Business Intelligence: Criação de dashboards em Power BI para suporte estratégico."
          ],
          tech: ["SQL", "Power BI", "Excel", "Python"]
        },
        {
          period: "2023 — 2024",
          role: "Supervisor de Operações e Backoffice",
          company: "Winover Call Center",
          description: [
            "Supervisão de equipes de cobrança e vendas do Santander.",
            "Gestão de equipe administrativa e atendimento especializado."
          ],
          tech: ["Liderança", "SQL", "ETL", "Excel"]
        }
      ]
    },

projects: {
      title: "Projetos de Destaques",
      featured: {
        title: "Do Caos ao KPI: A Transformação Digital da Operação",
        challenge: "A tomada de decisão era refém de processos manuais e planilhas descentralizadas. A equipe perdia as primeiras 4 horas do dia apenas minerando dados de APIs, sites e servidores SFTP. O resultado era uma latência de 24 horas na informação e uma margem de erro humano que comprometia a confiabilidade dos KPIs.",
        solution: `Para romper esse gargalo, projetei uma infraestrutura de dados escalável e resiliente:
                  • Orquestração Inteligente: Implementei o Prefect para gerenciar o fluxo de dados de ponta a ponta, garantindo que falhas em APIs ou SFTPs fossem tratadas automaticamente sem interromper a operação.
                  • Engine de Processamento: Desenvolvi o motor de transformação em Python. Utilizei Polars para garantir alta performance no processamento de grandes volumes, realizando o Data Wrangling e a normalização dos dados brutos.
                  • Warehouse de Alta Performance: Estruturei o Data Warehouse em SQL Server sob a arquitetura Star Schema, utilizando Stored Procedures para otimizar o cálculo de métricas pesadas diretamente no servidor.
                  • Inteligência Visual: Finalizei com dashboards em Power BI, onde utilizei DAX avançado para criar visões preditivas e operacionais em Tempo Real.`,
        impact: `• Ganho de Eficiência: A automação eliminou o trabalho manual, gerando um aumento real de 20% na produção da área digital.
                 • Confiança nos Dados: Reduzi a latência de 24h para Tempo Real, permitindo correções de rota imediatas.
                 • ROI Operacional: A eliminação de erros manuais poupou dezenas de horas mensais de retrabalho do time de liderança.`
      },
      caseDashboards: {
            title: "Dashboards gerados a partir deste projeto",
            items: [
            { name: "Capa Executiva", img: "/dashboards/capa-v2.png" },
            { name: "KPIs de Disparos", img: "/dashboards/disparo-v2.png" },
            { name: "KPIs de Retorno", img: "/dashboards/retorno-v2.png" }
            ]
        },

        dashboards: {
            title: "+ Dashboards - Power BI",
            items: [
            { name: "Dashboard | Custos TELECOM", img: "/dashboards/dashtelecom-v2.png" },
            { name: "Dashboard | Agentes Digitais", img: "/dashboards/dashssinergy.png" },
            { name: "Dashboard | Estudos & Aprimoramento", img: "/dashboards/dashtreino.png" }
            ],
            backBtn: "Voltar"
        }
        },

    skills: {
      title: "Competências",
      analyst: "Analytics & Intelligence",
      engineer: "Data Engineering & Architecture",
      analystSkills: [
        "T-SQL (Complex Queries & Otimização)",
        "Power BI Avançado (Modelagem & DAX)",
        "Análise de KPIs & Métricas de Performance",
        "Data Storytelling & Dashboards Estratégicos",
        "Estatística Descritiva & Análise Exploratória"
      ],
      engineerSkills: [
        "Python (Pandas, Polars & Automação)",
        "Arquitetura de Pipelines ETL / ELT",
        "Modelagem Dimensional (Star Schema & Snowflake)",
        "Integração via APIs (REST) & Web Scraping",
        "Data Wrangling & Tratamento de Dados Escaláveis"
      ]
    },
    contact: {
        title: "Contato",
        description: "Vamos conversar? Me chama por qualquer um dos canais abaixo.",
        email: {
            value: "mhnfernandes123@gmail.com"
        },
        whatsapp: {
            value: "5511972708842"
        },
        linkedin: {
            value: "www.linkedin.com/in/mnóbrega-dataengineer"
        }
        }
  },

  en: {
    navbar: {
      hero: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      role: "Data Engineer | Data Analyst",
      description:
        "I work with data analysis, engineering, and visualization, creating solutions that turn information into strategic value.",
      projectsBtn: "View Projects",
      contactBtn: "Get in Touch",
    },

    about: {
      title: "About me",
      p1: `Data Specialist focused on building scalable architectures and delivering strategic
      intelligence. My expertise spans from ingestion and ETL/ELT via REST APIs using
      Python (Pandas, Polars) to dimensional modeling in SQL Server (T-SQL) and
      advanced visualization with Power BI.`,
      p2: `Certified in Big Data & Analytics by FIAP, I specialize in performance optimization
      and workflow automation, transforming legacy processes into real-time pipelines.
      By bridging technical engineering rigor with a strategic business mindset, I ensure
      data follows the most efficient path from extraction to actionable insight.`,
    },

    experience: {
      title: "Professional Experience",
      items: [
        {
          period: "2024 — 2025",
          role: "Data Analyst | MIS",
          company: "Winover Call Center",
          description: [
            "Data Engineering: Development of ETL pipelines with Python integrating APIs and external providers.",
            "Databases: Optimization of Stored Procedures and SQL Server data modeling.",
            "Automation: Significant reduction in processing time using Python scripts.",
            "Business Intelligence: Development of Power BI dashboards for strategic decision-making."
          ],
          tech: ["SQL", "Power BI", "Excel", "Python"]
        },
        {
          period: "2023 — 2024",
          role: "Operations and Backoffice Supervisor",
          company: "Winover Call Center",
          description: [
            "Supervised collections and sales teams for Santander.",
            "Managed administrative teams and specialized service units."
          ],
          tech: ["Python", "SQL", "ETL", "Power BI"]
        }
      ]
    },

projects: {
      title: "Projects & Case Studies",
      featured: {
        title: "From Chaos to Real-Time: Driving Operational Transformation",
        challenge: "Decision-making was hindered by manual processes and siloed spreadsheets. The team spent the first 4 hours of every day mining data from various APIs and SFTP servers. This resulted in a 24-hour data latency and a high risk of human error that compromised KPI reliability.",
        solution: `To break this bottleneck, I designed a scalable and resilient data infrastructure:
                  • Intelligent Orchestration: Implemented Prefect to manage end-to-end data flows, ensuring that API or SFTP failures were handled automatically without downtime.
                  • Processing Engine: Developed a transformation engine in Python. Leveraged Polars to ensure high-performance processing of large datasets, performing Data Wrangling and normalization of raw data.
                  • High-Performance Warehouse: Built the Data Warehouse in SQL Server using Star Schema architecture, utilizing Stored Procedures to optimize heavy metric calculations directly on the server side.
                  • Visual Intelligence: Developed advanced Power BI dashboards, using complex DAX to create real-time operational and predictive views.`,
        impact: `• Efficiency Boost: Automation eliminated manual tasks, leading to a 20% increase in digital operation output.
                 • Data-Driven Confidence: Reduced data latency from 24 hours to Real-Time, enabling immediate strategic adjustments.
                 • Operational ROI: Eliminating manual errors saved the leadership team dozens of hours per month in rework.`
      },
      caseDashboards: {
            title: "Dashboards gerados a partir deste projeto",
            items: [
            { name: "Capa Executiva", img: "/dashboards/capa.png" },
            { name: "KPIs de Disparos", img: "/dashboards/disparo.png" },
            { name: "KPIs de Retorno", img: "/dashboards/retorno.png" }
            ]
        },

        dashboards: {
            title: "+ Dashboards - Power BI",
            items: [
            { name: "Vendas & Conversão", img: "/dashboards/vendas.png" },
            { name: "Marketing & ROI", img: "/dashboards/marketing.png" },
            { name: "Operações & Produtividade", img: "/dashboards/operacoes.png" },
            { name: "Financeiro & Forecast", img: "/dashboards/financeiro.png" },
            { name: "Customer Analytics", img: "/dashboards/customer.png" }
            ],
            backBtn: "Voltar"
        }
        },

    skills: {
      title: "Skills",
      analyst: "Analytics & Intelligence",
      engineer: "Data Engineering & Architecture",
      analystSkills: [
        "T-SQL (Complex Queries & Tuning)",
        "Advanced Power BI (Modeling & DAX)",
        "KPI Analysis & Performance Metrics",
        "Data Storytelling & Strategic Dashboards",
        "Exploratory Data Analysis (EDA)"
      ],
      engineerSkills: [
        "Python (Pandas, Polars & Automation)",
        "ETL / ELT Pipeline Architecture",
        "Dimensional Modeling (Star Schema)",
        "API Integration (REST) & Web Scraping",
        "Data Wrangling & Scalable Processing"
      ]
    },

    contact: {
            title: "Contato",
            description: "Vamos conversar? Me chama por qualquer um dos canais abaixo.",
            email: {
                value: "mhnfernandes123@gmail.com"
            },
            whatsapp: {
                value: "5511972708842"
            },
            linkedin: {
                value: "www.linkedin.com/in/mnóbrega-dataengineer"
            }
            }

  }
}
