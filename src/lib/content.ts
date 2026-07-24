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
        "Migro arquiteturas legadas para lakehouses modernos, construo pipelines ETL/ELT em escala e lidero projetos em saúde suplementar com ClickHouse/Databricks.",
      projectsBtn: "Ver Projetos",
      contactBtn: "Entrar em Contato",
    },

    about: {
      title: "Sobre mim",
      p1: `Engenheiro de Dados com foco em migração de arquiteturas legadas para ambientes lakehouse modernos. Trabalho com pipelines ETL/ELT escaláveis, compatibilidade de dialetos SQL e governança de dados em Azure, Databricks e Delta Lake.`,
      p2: `Resolvo migrações de stacks ClickHouse/Databricks no setor de saúde suplementar, eliminando incompatibilidades de dialectos SQL e separando ingestão, transformação e consumo em camadas mais seguras. Meu diferencial é unir execução técnica em Databricks/PySpark com visão de negócio e automação real em Power BI.`,
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
        title: "Migração de Arquitetura ETL (Strangler Fig)",
        diagramImg: "/projects/strangler-fig-diagram.svg",
        challenge: "Arquitetura monolítica em ClickHouse unia ingestão, transformação e visualização em um mesmo fluxo, elevando a dependência de dialectos SQL específicos e o risco de alteração em produção.",
        solution: `Implementei a migração Strangler Fig para isolar cargas de trabalho e reduzir risco técnico:
                  • Antes: GAIO DataOS (ClickHouse) executava ingestão + transformação + visualização em única camada.
                  • Depois: Databricks/PySpark assume ETL e transformação, enquanto Delta Lake fica com o armazenamento materializado.
                  • Governança: Unity Catalog organiza metadados, Azure Key Vault centraliza credenciais e ADLS armazena dados brutos e processados.
                  • Compatibilidade SQL: Harmonizei consultas entre ClickHouse, Snowflake e T-SQL para manter a produção em operação durante o corte gradual.`,
        before: [
          "GAIO DataOS (ClickHouse) com ingestão, transformação e visualização juntos.",
          "Dependência de dialectos SQL específicos e arquitetura monolítica.",
          "Deploy lento e alto risco para mudanças em pipelines de produção."
        ],
        after: [
          "Databricks/PySpark assume ETL e transformação.",
          "Delta Lake materializa tabelas com Unity Catalog.",
          "GAIO permanece apenas como camada de consumo/visualização.",
          "Azure Key Vault centraliza credenciais e reduz exposição."
        ],
        impact: `• Redução de risco: a troca gradual permitiu execução segura sem interrupção dos relatórios.
                 • Governança robusta: Unity Catalog e ADLS deram visibilidade de dados para governança.
                 • Operação mais ágil: o pipeline desacoplado acelerou mudanças de dados e simplificou suporte.`
      },
      secondary: {
        title: "Transformação Digital Operacional",
        diagramImg: "/projects/operational-transformation.svg",
        challenge: "A tomada de decisão era refém de processos manuais e planilhas descentralizadas. A equipe perdia as primeiras 4 horas do dia apenas minerando dados de APIs, sites e servidores SFTP.",
        solution: `Projetei uma infraestrutura de dados escalável e resiliente:
                  • Orquestração Inteligente: Implementei Prefect para gerenciar o fluxo de dados de ponta a ponta.
                  • Engine de Processamento: Desenvolvi transformação em Python com Polars para normalização e performance.
                  • Warehouse de Alta Performance: Estruturei o Data Warehouse em SQL Server em Star Schema.
                  • Inteligência Visual: Criei dashboards em Power BI com DAX avançado para visões operacionais em tempo real.`,
        impact: `• Ganho de eficiência: eliminei trabalho manual e aumentei a produção da área digital.
                 • Confiança nos dados: reduzi latência de 24h para relatórios mais rápidos.
                 • ROI operacional: reduzi horas de retrabalho na equipe de liderança.`
      },
      caseDashboards: {
            title: "Dashboards em miniatura",
            items: [
            { name: "Dashboard de Materiais", html: "/dashboards/dash_materiais.html" },
            { name: "Panorama de Saúde", html: "/dashboards/panorama_saude.html" },
            { name: "Pesquisa de Saúde", html: "/dashboards/pesquisa_saude.html" }
            ]
        },

        dashboards: {
            title: "+ Dashboards interativos",
            items: [
            { name: "Dashboard de Materiais", html: "/dashboards/dash_materiais.html" },
            { name: "Panorama de Saúde", html: "/dashboards/panorama_saude.html" },
            { name: "Pesquisa de Saúde", html: "/dashboards/pesquisa_saude.html" }
            ],
            backBtn: "Voltar"
        }
        },

    skills: {
      title: "Competências",
      analyst: "Analytics & BI",
      engineer: "Data Engineering & Cloud",
      analystSkills: [
        "Power BI Avançado (DAX e relatórios interativos)",
        "Modelagem dimensional e SQL avançado",
        "Análise de KPIs e performance operacional",
        "Data storytelling e dashboards estratégicos",
        "Excel Avançado e automação"
      ],
      engineerSkills: [
        "ClickHouse e PySpark",
        "Delta Lake e Unity Catalog",
        "Azure Key Vault e ADLS",
        "Databricks e ETL/ELT em escala",
        "Compatibilidade entre dialectos SQL"
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
        "I migrate legacy architectures to modern lakehouses, build scalable ETL/ELT pipelines, and lead supplemental health projects with ClickHouse/Databricks.",
      projectsBtn: "View Projects",
      contactBtn: "Get in Touch",
    },

    about: {
      title: "About me",
      p1: `Data Engineer focused on migrating legacy architectures to modern lakehouse environments. I build scalable ETL/ELT pipelines, manage SQL dialect compatibility, and enforce data governance with Azure, Databricks and Delta Lake.`,
      p2: `I solve legacy stack migrations and SQL dialect divergence in supplemental health operations, separating ingestion, transformation and consumption into safer, faster data layers. My edge is combining Databricks/PySpark execution with meaningful visibility in Power BI.`,
    },

    experience: {
      title: "Professional Experience",
      items: [
        {
          period: "2026 — Present",
          role: "Data Engineer III | QSOFT",
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
        title: "ETL Architecture Migration (Strangler Fig)",
        diagramImg: "/projects/strangler-fig-diagram.svg",
        challenge: "A monolithic ClickHouse architecture combined ingestion, transformation, and visualization in a single layer, increasing dependency on specific SQL dialects and production risk.",
        solution: `I implemented the Strangler Fig migration to decouple workloads and reduce technical risk:
                  • Before: GAIO DataOS (ClickHouse) ran ingestion + transformation + visualization as one stack.
                  • After: Databricks/PySpark takes ETL and transformation, while Delta Lake handles materialized storage.
                  • Governance: Unity Catalog organizes metadata, Azure Key Vault centralizes secrets and ADLS stores raw and processed assets.
                  • SQL compatibility: I harmonized queries across ClickHouse, Snowflake and T-SQL to keep production online during the gradual cutover.`,
        before: [
          "GAIO DataOS (ClickHouse) with ingestion, transformation and visualization together.",
          "Specific SQL dialect dependency and monolithic architecture.",
          "Slow deploys and high risk for production pipeline changes."
        ],
        after: [
          "Databricks/PySpark handling ETL and transformation.",
          "Delta Lake materializing tables with Unity Catalog.",
          "GAIO remains only as a consumption/visualization layer.",
          "Azure Key Vault centralizes credentials and lowers exposure."
        ],
        impact: `• Risk reduction: gradual cutover kept reports running while modernizing the pipeline.
                 • Strong governance: Unity Catalog and ADLS improved data visibility.
                 • Faster operations: decoupling the pipeline accelerated data delivery and simplified support.`
      },
      secondary: {
        title: "Operational Data Transformation",
        diagramImg: "/projects/operational-transformation.svg",
        challenge: "Decision-making was delayed by manual processes and siloed spreadsheets. The team spent the first 4 hours each day mining data from APIs, sites and SFTP servers.",
        solution: `To break this bottleneck, I designed a scalable and resilient data infrastructure:
                  • Intelligent Orchestration: Implemented Prefect to manage end-to-end data flows.
                  • Processing Engine: Built Python transformations with Polars for performance and normalization.
                  • High-Performance Warehouse: Structured the data warehouse in SQL Server using Star Schema.
                  • Visual Intelligence: Created Power BI dashboards with advanced DAX for real-time operational views.`,
        impact: `• Efficiency boost: automation eliminated manual work and increased digital output.
                 • Data confidence: reduced latency from 24h to faster, more reliable reporting.
                 • Operational ROI: decreased leadership rework by saving dozens of hours per month.`
      },
      caseDashboards: {
            title: "Dashboard previews",
            items: [
            { name: "Materials Dashboard", html: "/dashboards/dash_materiais.html" },
            { name: "Health Panorama", html: "/dashboards/panorama_saude.html" },
            { name: "Health Research", html: "/dashboards/pesquisa_saude.html" }
            ]
        },

        dashboards: {
            title: "+ Interactive dashboards",
            items: [
            { name: "Materials Dashboard", html: "/dashboards/dash_materiais.html" },
            { name: "Health Panorama", html: "/dashboards/panorama_saude.html" },
            { name: "Health Research", html: "/dashboards/pesquisa_saude.html" }
            ],
            backBtn: "Back"
        }
        },

    skills: {
      title: "Skills",
      analyst: "Analytics & BI",
      engineer: "Data Engineering & Cloud",
      analystSkills: [
        "Advanced Power BI (DAX and interactive reports)",
        "Dimensional modeling and advanced SQL",
        "KPI analysis and operational performance",
        "Data storytelling and strategic dashboards",
        "Advanced Excel and automation"
      ],
      engineerSkills: [
        "ClickHouse and PySpark",
        "Delta Lake and Unity Catalog",
        "Azure Key Vault and ADLS",
        "Databricks and scalable ETL/ELT",
        "SQL dialect compatibility"
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
