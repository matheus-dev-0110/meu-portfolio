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
      role: "Engenheiro de Dados | SQL | Databricks | Python | ETL/ELT",
      description:
        "Migro arquiteturas legadas para lakehouses modernos, construo pipelines ETL/ELT em escala e garanto governança de dados em Azure e Databricks.",
      projectsBtn: "Ver Projetos",
      contactBtn: "Entrar em Contato",
    },

    about: {
      title: "Sobre mim",
      p1: `Engenheiro de Dados com foco em migração de arquiteturas legadas para ambientes lakehouse modernos. Trabalho com pipelines ETL/ELT escaláveis, compatibilidade de dialetos SQL e governança de dados em Azure, Databricks e Delta Lake.`,
      p2: `Tenho experiência em modelagem de tabelas materializadas em Delta Lake com Unity Catalog, gestão de credenciais via Azure Key Vault e entrega de relatórios estratégicos em Power BI. Meu objetivo é tornar o dado confiável, acessível e pronto para decisões mais rápidas e assertivas.`,
    },

    experience: {
      title: "Experiência Profissional",
      items: [
        {
          period: "2026 — Atual",
          role: "Engenheiro de Dados Pleno III",
          company: "QSOFT",
          description: [
            "Migração de pipelines ETL de ClickHouse (GAIO DataOS) para Databricks/PySpark usando o padrão Strangler Fig.",
            "Modelagem e materialização de dados em Delta Lake com Unity Catalog e gestão de credenciais no Azure Key Vault.",
            "Resolução de incompatibilidades de dialeto SQL entre Snowflake, T-SQL e ClickHouse em pipelines críticos de produção.",
            "Sustentação e evolução de arquitetura com Azure Data Lake Storage, Azure Blob Storage e Azure DevOps."
          ],
          tech: ["Databricks", "Azure", "Python", "SQL"]
        },
        {
          period: "2024 — 2025",
          role: "Analista de Dados",
          company: "Winover Call Center",
          description: [
            "Desenvolvimento e manutenção de dashboards em Power BI para apoiar operações e inteligência de dados.",
            "Execução de processos de ETL em SQL Server e integração de bases complexas com Excel avançado.",
            "Automação em Python para coleta, tratamento e alertas, fortalecendo a qualidade dos dados.",
            "Participação em projetos de inovação com aplicação de Inteligência Artificial."
          ],
          tech: ["Power BI", "SQL Server", "Python", "Excel"]
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
            title: "Dashboards generated from this project",
            items: [
            { name: "Executive Overview", img: "/dashboards/capa-v2.png" },
            { name: "Dispatch KPIs", img: "/dashboards/disparo-v2.png" },
            { name: "Return KPIs", img: "/dashboards/retorno-v2.png" }
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
      analyst: "Business Intelligence & Reporting",
      engineer: "Data Engineering & Cloud",
      analystSkills: [
        "Power BI Avançado (Modelagem, DAX e relatórios interativos)",
        "Análise de KPIs e performance operacional",
        "Data Storytelling e dashboards estratégicos",
        "Excel Avançado e automações",
        "Governança de dados e qualidade de informação"
      ],
      engineerSkills: [
        "Arquitetura de pipelines ETL / ELT",
        "Python (Pandas, Polars, PySpark)",
        "Databricks, Azure Data Lake e Delta Lake",
        "Modelagem dimensional e compatibilidade SQL",
        "Orquestração e automação de dados"
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
      role: "Data Engineer | SQL | Databricks | Python | ETL/ELT",
      description:
        "I migrate legacy architectures to modern lakehouses, building scalable ETL/ELT pipelines and ensuring data governance in Azure and Databricks.",
      projectsBtn: "View Projects",
      contactBtn: "Get in Touch",
    },

    about: {
      title: "About me",
      p1: `Data Engineer focused on migrating legacy architectures to modern lakehouse environments. I build scalable ETL/ELT pipelines, manage SQL dialect compatibility, and enforce data governance with Azure, Databricks and Delta Lake.`,
      p2: `I have experience modeling materialized tables in Delta Lake with Unity Catalog, managing secrets via Azure Key Vault, and delivering strategic reports in Power BI. My goal is to make data reliable, accessible and ready for faster, more accurate decisions.`,
    },

    experience: {
      title: "Professional Experience",
      items: [
        {
          period: "2026 — Present",
          role: "Data Engineer | QSOFT",
          company: "QSOFT",
          description: [
            "Migrated ETL pipelines from ClickHouse (GAIO DataOS) to Databricks/PySpark using the Strangler Fig pattern.",
            "Modeled and materialized data in Delta Lake with Unity Catalog and managed secrets through Azure Key Vault.",
            "Resolved SQL dialect incompatibilities between Snowflake, T-SQL and ClickHouse in critical production queries.",
            "Maintained and evolved Azure Data Lake Storage, Azure Blob Storage and Azure DevOps-based architecture."
          ],
          tech: ["Databricks", "Azure", "Python", "SQL"]
        },
        {
          period: "2024 — 2025",
          role: "Data Analyst",
          company: "Winover Call Center",
          description: [
            "Developed and maintained Power BI dashboards to support operations and data intelligence.",
            "Executed ETL processes on SQL Server and integrated complex datasets using advanced Excel.",
            "Automated data collection, cleansing and alerts with Python, improving data quality.",
            "Contributed to innovation projects with AI-driven solutions."
          ],
          tech: ["Power BI", "SQL Server", "Python", "Excel"]
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
      analyst: "Business Intelligence & Reporting",
      engineer: "Data Engineering & Cloud",
      analystSkills: [
        "Advanced Power BI (Modeling, DAX and interactive reports)",
        "KPI analysis and operational performance",
        "Data storytelling and strategic dashboards",
        "Advanced Excel and automation",
        "Data governance and information quality"
      ],
      engineerSkills: [
        "ETL / ELT pipeline architecture",
        "Python (Pandas, Polars, PySpark)",
        "Databricks, Azure Data Lake and Delta Lake",
        "Dimensional modeling and SQL compatibility",
        "Orchestration and automation of data workflows"
      ]
    },

    contact: {
            title: "Contact",
            description: "Let's talk? Reach me through any of the channels below.",
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
