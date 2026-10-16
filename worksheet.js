window.WORKSHEET = {
  "source": "PAS 2025 Workshop - Bridging the Gaps: Advancing Pediatric Firearm Injury Prevention Research",
  "title": "Small Group Exercise",
  "objective": "Draft a research question that addresses a gap in pediatric firearm injury prevention using currently available data sources and your own interests.",
  "authors": "SJ Patel, A Silver, MK Goyal, E Fleegler, N Romo, A Hogan, G Azzarone, K Gastineau",
  "parts": [
    {
      "id": "p1", "num": 1, "title": "Define Interests",
      "groups": [
        { "title": "Populations of Interest", "type": "checks", "items": [
          { "id": "pop_under12", "label": "Children under 12" },
          { "id": "pop_adolescents", "label": "Adolescents (12–17)" },
          { "id": "pop_school_age", "label": "School age youth (5–17)" },
          { "id": "pop_minority", "label": "Racial/ethnic minority groups" },
          { "id": "pop_urban", "label": "Urban youth" },
          { "id": "pop_rural", "label": "Rural youth" },
          { "id": "pop_lgbtq", "label": "LGBTQ+ youth" },
          { "id": "pop_fatal", "label": "Fatal injury" },
          { "id": "pop_nonfatal", "label": "Nonfatal injury" },
          { "id": "pop_unintentional", "label": "Unintentional injury" },
          { "id": "pop_assault", "label": "Assault/Homicide" },
          { "id": "pop_selfharm", "label": "Self-Harm/Suicide" },
          { "id": "pop_school_violence", "label": "School-based violence" },
          { "id": "pop_domestic", "label": "Domestic violence" },
          { "id": "pop_location", "label": "Location (national, etc.)", "detail": "pop_location_detail" },
          { "id": "pop_other", "label": "Other", "detail": "pop_other_detail" }
        ]},
        { "title": "Variables of Interest: interventions, factors, outcome", "type": "checks", "items": [
          { "id": "var_mental_health", "label": "Mental health" },
          { "id": "var_hospital_use", "label": "Hospital utilization" },
          { "id": "var_violence_intervention", "label": "Violence Intervention" },
          { "id": "var_reinjury", "label": "Recurrence or reinjury" },
          { "id": "var_community_factors", "label": "Community factors" },
          { "id": "var_school_safety", "label": "School safety" },
          { "id": "var_policy", "label": "Policy evaluation/Laws" },
          { "id": "var_access_storage", "label": "Access to firearms/safe storage" },
          { "id": "var_lethal_means", "label": "Lethal Means Counseling" },
          { "id": "var_provider_ed", "label": "Provider/Trainee Education" },
          { "id": "var_clinical_care", "label": "Clinical care" },
          { "id": "var_community_intervention", "label": "Community Based Intervention" },
          { "id": "var_hospital_intervention", "label": "Hospital Based Interventions" },
          { "id": "var_advocacy", "label": "Advocacy" },
          { "id": "var_awareness", "label": "Awareness" },
          { "id": "var_qualitative", "label": "Qualitative data" },
          { "id": "var_other", "label": "Other", "detail": "var_other_detail" }
        ]}
      ]
    },
    {
      "id": "p2", "num": 2, "title": "Identify a Gap",
      "groups": [
        { "type": "checks", "items": [
          { "id": "gap_longitudinal", "label": "Longitudinal national data on nonfatal firearm injuries in children" },
          { "id": "gap_long_term", "label": "Long-term outcomes after injury. Any specific outcomes?", "detail": "gap_long_term_detail" },
          { "id": "gap_knowledge", "label": "Gaps in knowledge (provider or patient) about household firearm access and storage" },
          { "id": "gap_disparities", "label": "Disparities by race, income, neighborhood, etc." },
          { "id": "gap_evaluations", "label": "Evaluations of prevention programs or policies: Which one?", "detail": "gap_evaluations_detail" },
          { "id": "gap_risk_factors", "label": "Risk factors for firearm injury. Any specific risk factors?", "detail": "gap_risk_factors_detail" },
          { "id": "gap_connectedness", "label": "How do changes in perceived community connectedness and collective efficacy influence trends in firearm violence over time?" },
          { "id": "gap_protective", "label": "Evaluate the impact of community-level protective factors (social trust, neighborhood engagement, local mutual aid networks) on firearm violence." },
          { "id": "gap_predictors", "label": "Predictors of poor outcomes after firearm injury (example: rates of mental health evaluations post injury). Which ones?", "detail": "gap_predictors_detail" },
          { "id": "gap_other", "label": "Other", "detail": "gap_other_detail" }
        ]}
      ]
    },
    {
      "id": "p3", "num": 3, "title": "Draft Your Research Question",
      "intro": "Example: Among [Population], how does [Exposure or Policy] compared to [Comparison] affect [Outcome] over [Timeframe or Setting]?",
      "groups": [
        { "type": "builder", "items": [
          { "id": "rq_population", "label": "Population" },
          { "id": "rq_exposure", "label": "Exposure or Policy" },
          { "id": "rq_comparison", "label": "Comparison" },
          { "id": "rq_outcome", "label": "Outcome" },
          { "id": "rq_timeframe", "label": "Timeframe or Setting" }
        ]},
        { "type": "text", "items": [ { "id": "rq_draft", "label": "Research Question", "lines": 5 } ] }
      ]
    },
    {
      "id": "p4", "num": 4, "title": "Identify Data Sources",
      "intro": "See references for more information. Check the sources you might use and add your own notes.",
      "groups": [
        { "type": "sources", "items": [
          { "id": "ds_claims", "label": "Claims data (PHIS, HCUP, NEDS, see toolkit)", "key": "Utilization with clinical details, PHIS with more contextual data", "limits": "Costly, older data, PHIS only has Children's Hospitals" },
          { "id": "ds_wisqars", "label": "CDC WISQARS", "key": "Fatal and nonfatal injury data with mapping capabilities (available only for fatal data)", "limits": "Updates delayed by 2–3 years. Use caution when describing nonfatal data by intent." },
          { "id": "ds_wonder", "label": "CDC WONDER", "key": "Fatal injury", "limits": "" },
          { "id": "ds_nvdrs", "label": "CDC NVDRS", "key": "Highly detailed fatality data", "limits": "Need to apply for restricted access" },
          { "id": "ds_neiss", "label": "NEISS-FISS", "key": "ED firearm injuries, national sample", "limits": "Narratives require advanced methods (AI, NLP) and special agreement with CDC" },
          { "id": "ds_rand_hosp", "label": "RAND Firearm Hospitalizations", "key": "", "limits": "Updated through 2025" },
          { "id": "ds_rand_ownership", "label": "RAND state firearm ownership data", "key": "State policy comparisons", "limits": "Only up to 2016" },
          { "id": "ds_gva", "label": "Gun Violence Archive", "key": "Real-time incident-level data", "limits": "Better for firearm fatalities vs injuries/suicide (reporting bias)" },
          { "id": "ds_everyshot", "label": "EveryShot", "key": "", "limits": "New, only has a few cities" },
          { "id": "ds_faster", "label": "FASTER-AVERT", "key": "", "limits": "New, limited at this time" },
          { "id": "ds_acs", "label": "ACS, SVI, COI, etc.", "key": "Neighborhood socioeconomic data", "limits": "" },
          { "id": "ds_rand_law", "label": "RAND Firearm Law Database", "key": "", "limits": "Only up to 2016" },
          { "id": "ds_siegel", "label": "Statefirearmlaws.com (Siegel's Database)", "key": "Highly detailed state firearm laws from 1976–2019 + estimates of state level firearm ownership per year", "limits": "Off line for 3 weeks" },
          { "id": "ds_giffords", "label": "Giffords", "key": "State firearm laws – very up to date", "limits": "" },
          { "id": "ds_yrbss", "label": "YRBSS", "key": "Firearm carrying and risk behaviors in youth", "limits": "" },
          { "id": "ds_trauma", "label": "Trauma Registries", "key": "", "limits": "" },
          { "id": "ds_coroner", "label": "Coroner's Reports", "key": "", "limits": "" },
          { "id": "ds_police", "label": "Law Enforcement Data", "key": "Police data", "limits": "Incomplete outcome data and variables available" },
          { "id": "ds_qualitative", "label": "Qualitative data", "key": "Community, law enforcement, provider or parent/patient voice", "limits": "", "hint": "Mixed methods can help contextualize other epidemiologic findings." },
          { "id": "ds_other", "label": "Other", "key": "", "limits": "", "custom": true }
        ]}
      ]
    },
    {
      "id": "p5", "num": 5, "title": "Feasibility",
      "groups": [
        { "type": "radios", "items": [
          { "id": "feas_access", "label": "Can you access the data source(s) needed?", "options": [["yes", "Yes"], ["notyet", "Not yet – refine question, add to to-dos"], ["unsure", "Unsure"]] },
          { "id": "feas_measurable", "label": "Is your outcome measurable using this data?", "options": [["yes", "Yes"], ["no", "No – refine question"], ["unsure", "Unsure"]] },
          { "id": "feas_expertise", "label": "Do you have the expertise needed for the data management and/or analysis?", "options": [["yes", "Yes"], ["no", "No"], ["unsure", "Unsure"]] },
          { "id": "feas_funding", "label": "Would funding be needed?", "options": [["yes", "Yes"], ["no", "No"], ["unsure", "Unsure"]] },
          { "id": "feas_irb", "label": "Would IRB approval be needed (e.g., for individual-level data)?", "options": [["yes", "Yes"], ["no", "No"], ["unsure", "Unsure"]] }
        ]},
        { "type": "text", "items": [ { "id": "feas_concerns", "label": "Concerns regarding current funding/political environment (data availability, funding, institutional priorities, etc.)", "lines": 3 } ] }
      ]
    },
    {
      "id": "p6", "num": 6, "title": "Share & Refine",
      "intro": "Share your draft question with a partner or your small group. Discuss feasibility and use feedback to refine it.",
      "groups": [
        { "type": "text", "items": [
          { "id": "refine_feedback", "label": "Feedback received", "lines": 3, "appOnly": true },
          { "id": "rq_final", "label": "Final Version of Your Research Question", "lines": 5 }
        ]}
      ]
    },
    {
      "id": "p7", "num": 7, "title": "Next Steps/Timeline for yourself",
      "groups": [
        { "type": "todos", "rows": 6, "columns": [["task", "To do"], ["who", "What/Who do I need"], ["deadline", "Rough Deadline"]] }
      ]
    },
    {
      "id": "pitfalls", "num": null, "title": "Common Pitfalls to Avoid in Pediatric Firearm Injury Research",
      "intro": "Check each one once you've considered it for your project.",
      "groups": [
        { "type": "checks", "items": [
          { "id": "pit_beyond_mortality", "label": "Diversify Outcomes Beyond Mortality", "desc": "Include nonfatal firearm injuries and exposures using claims data, trauma registries, or incident-level sources." },
          { "id": "pit_age", "label": "Disaggregate by Age", "desc": "Avoid lumping all youth under age 20; consider stratification by developmental stages (e.g., 0–5, 6–12, 13–17). Consider pros/cons to 20–24 – purview of pediatrics, highest number of injuries/fatalities." },
          { "id": "pit_context", "label": "Incorporate Contextual Data", "desc": "Use NVDRS, EveryShot, NEISS-FISS (if you can access), your EMR, or qualitative sources to understand the setting, intent, and circumstances of incidents." },
          { "id": "pit_policy", "label": "Be Cautious with Policy Evaluations", "desc": "Avoid ecological fallacy. Use local-level policy data and advanced methods like difference-in-differences. Recognize that many of these studies are ecological in nature (combining disparate datasets) but that doesn't make them incorrect or poor studies." },
          { "id": "pit_structural", "label": "Address Structural Inequities", "desc": "Include place-based and structural variables (Macy/Kendi Equity Framework). Don't just control for race, investigate upstream determinants." },
          { "id": "pit_long_term", "label": "Expand Beyond Immediate Injury Outcomes", "desc": "Consider long-term effects like mental health, education, and community displacement." },
          { "id": "pit_validate", "label": "Validate and Cross-Check Claims Data", "desc": "Use multiple data sources to confirm firearm-related ICD-10 codes and ensure accuracy." }
        ]}
      ]
    }
  ]
};
