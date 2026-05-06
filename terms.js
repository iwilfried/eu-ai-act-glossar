/* ==================================================================
   EU AI ACT GLOSSAR · DATENDATEI
   ------------------------------------------------------------------
   So fügst du neue Begriffe hinzu:
   1. Kopiere ein bestehendes Objekt und passe es an
   2. Pflichtfelder: id, category, tags[], de{term,short,long}, en{term,short,long}
   3. Optional: risk, links[], related[]
   4. category: ai-act-core | ml | dl | llm | nlp | cv | ethics | governance | security
   5. risk: prohibited | high | limited | minimal | systemic | null
================================================================== */

const TERMS = [

  /* =================== EU AI ACT CORE =================== */

  { id: "eu-ai-act", category: "ai-act-core", risk: null,
    tags: ["#KIVO", "#Regulation", "#EU2024-1689", "#Horizontal"],
    de: {
      term: "EU AI Act / KI-Verordnung",
      short: "Erste umfassende horizontale KI-Regulierung weltweit (VO (EU) 2024/1689). Risikobasierter Ansatz, gestaffelt anwendbar ab Februar 2025.",
      long: "Die KI-Verordnung der EU schafft einheitliche Regeln für die Entwicklung, das Inverkehrbringen und die Nutzung von KI-Systemen im Binnenmarkt. Vier Risikostufen (verboten, hoch, begrenzt, minimal) plus Sonderkapitel für GPAI mit systemischem Risiko. Anwendbar auf Anbieter und Betreiber innerhalb wie außerhalb der EU, sofern Output in der EU verwendet wird (Marktortprinzip). Inkrafttreten 1.8.2024, gestaffelt: Verbote ab 2.2.2025, GPAI-Pflichten ab 2.8.2025, Hochrisiko-Großteil ab 2.8.2026, vollständig ab 2.8.2027." },
    en: {
      term: "EU AI Act",
      short: "World's first comprehensive horizontal AI regulation (Regulation (EU) 2024/1689). Risk-based, phased application from February 2025.",
      long: "The EU AI Act establishes uniform rules for the development, placing on the market and use of AI systems in the EU single market. Four risk tiers (prohibited, high, limited, minimal) plus a dedicated chapter for GPAI with systemic risk. Applies to providers and deployers inside and outside the EU whenever the output is used in the EU (market location principle). In force since 1 Aug 2024, phased: prohibitions from 2 Feb 2025, GPAI from 2 Aug 2025, most high-risk from 2 Aug 2026, fully applicable from 2 Aug 2027." },
    links: [
      { label: "EUR-Lex Volltext", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
      { label: "AI Act Explorer", url: "https://artificialintelligenceact.eu/" }
    ]
  },

  { id: "ki-system", category: "ai-act-core", risk: null,
    tags: ["#KIVO", "#Definition", "#Art3", "#OECD"],
    de: {
      term: "KI-System",
      short: "Maschinengestütztes System mit Autonomiegraden, das aus Eingaben Ausgaben (Vorhersagen, Empfehlungen, Entscheidungen) ableitet, die Umgebungen beeinflussen können (Art. 3 Nr. 1).",
      long: "Die Definition folgt der OECD-Definition (2023). Drei Merkmale: (1) maschinengestützt mit unterschiedlichen Autonomiegraden, (2) Adaptivität nach Bereitstellung möglich, (3) Inferenz aus Eingaben hin zu Ausgaben für explizite oder implizite Ziele. Klassische regelbasierte Software fällt nicht darunter, sofern keine Inferenz im engeren Sinne stattfindet. Leitlinien der Kommission (Februar 2025) konkretisieren den Begriff." },
    en: {
      term: "AI System",
      short: "Machine-based system with varying degrees of autonomy that infers from inputs how to generate outputs (predictions, recommendations, decisions) influencing environments (Art. 3(1)).",
      long: "The definition mirrors the OECD definition (2023). Three features: (1) machine-based with varying autonomy, (2) potential adaptiveness after deployment, (3) inference from inputs to outputs for explicit or implicit objectives. Traditional rule-based software is excluded if no genuine inference occurs. Commission guidelines (February 2025) clarify scope." },
    links: [
      { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" },
      { label: "OECD AI Definition", url: "https://oecd.ai/en/ai-principles" }
    ]
  },

  { id: "gpai", category: "ai-act-core", risk: "systemic",
    tags: ["#GPAI", "#FoundationModel", "#Art51", "#Compute"],
    de: {
      term: "KI-Modell mit allgemeinem Verwendungszweck (GPAI)",
      short: "Modell, das eine breite Palette unterschiedlicher Aufgaben kompetent ausführen und in nachgelagerte Systeme integriert werden kann (Art. 3 Nr. 63).",
      long: "GPAI-Modelle umfassen insbesondere große Sprach- und multimodale Modelle wie GPT-4o, Claude, Llama oder Gemini. Pflichten ab Art. 53 ff.: technische Dokumentation, Informationen für nachgelagerte Anbieter, Urheberrechts-Compliance, Trainingsdaten-Zusammenfassung. Bei Trainingsrechenleistung über 10^25 FLOP gelten Modelle als \"GPAI mit systemischem Risiko\" (Art. 51) mit verschärften Pflichten: Modellbewertung, adversariales Testing, Vorfallmeldung, Cybersicherheit." },
    en: {
      term: "General-Purpose AI Model (GPAI)",
      short: "Model capable of competently performing a wide range of distinct tasks and integrable into downstream systems (Art. 3(63)).",
      long: "GPAI covers in particular large language and multimodal models such as GPT-4o, Claude, Llama, or Gemini. Obligations from Art. 53 et seq.: technical documentation, information for downstream providers, copyright compliance, training-data summary. Models trained with more than 10^25 FLOPs are presumed \"GPAI with systemic risk\" (Art. 51), triggering enhanced duties: model evaluation, adversarial testing, incident reporting, cybersecurity." },
    links: [
      { label: "Kapitel V AI Act", url: "https://artificialintelligenceact.eu/chapter/5/" },
      { label: "GPAI Code of Practice", url: "https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice" }
    ]
  },

  { id: "anbieter", category: "ai-act-core", risk: null,
    tags: ["#Provider", "#Akteur", "#Art3", "#Art16"],
    de: {
      term: "Anbieter",
      short: "Person, die ein KI-System oder GPAI-Modell entwickelt oder entwickeln lässt und unter eigenem Namen in Verkehr bringt (Art. 3 Nr. 3).",
      long: "Der Anbieter trägt die Hauptlast der Pflichten – insbesondere bei Hochrisiko-Systemen: Konformitätsbewertung, technische Dokumentation, Risikomanagement, CE-Kennzeichnung, Registrierung in der EU-Datenbank, Post-Market-Monitoring. Eine Rolle kann sich verschieben: Wer ein Hochrisiko-System wesentlich verändert oder unter eigenem Namen vertreibt, wird selbst zum Anbieter (Art. 25 – \"Provider Flip\")." },
    en: {
      term: "Provider",
      short: "Person who develops, or has developed, an AI system or GPAI model and places it on the market under its own name (Art. 3(3)).",
      long: "The provider bears the principal burden, especially for high-risk systems: conformity assessment, technical documentation, risk management, CE marking, registration in the EU database, post-market monitoring. The role can shift: substantial modification or rebranding of a high-risk system makes the actor a provider (Art. 25 — the \"provider flip\")." },
    links: [
      { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" },
      { label: "Art. 25 AI Act", url: "https://artificialintelligenceact.eu/article/25/" }
    ]
  },

  { id: "betreiber", category: "ai-act-core", risk: null,
    tags: ["#Deployer", "#Akteur", "#Art26"],
    de: {
      term: "Betreiber",
      short: "Person, die ein KI-System in eigener Verantwortung verwendet, ausgenommen private nicht-berufliche Nutzung (Art. 3 Nr. 4).",
      long: "Der Betreiber (\"deployer\", früher \"user\") setzt das KI-System im realen Einsatz ein. Pflichten: Verwendung gemäß Gebrauchsanweisung (Art. 26), menschliche Aufsicht, Überwachung im Betrieb, Information betroffener Personen, Mitwirkung bei Vorfällen. Bei Hochrisiko-KI im öffentlichen Sektor und in bestimmten privaten Bereichen: Pflicht zur Grundrechte-Folgenabschätzung (FRIA, Art. 27)." },
    en: {
      term: "Deployer",
      short: "Person using an AI system under its own authority, excluding personal non-professional use (Art. 3(4)).",
      long: "The deployer (formerly \"user\") operates the AI system in real-world settings. Duties: use in accordance with instructions (Art. 26), human oversight, monitoring, informing affected persons, cooperation on incidents. For high-risk AI in the public sector and certain private contexts: mandatory Fundamental Rights Impact Assessment (FRIA, Art. 27)." },
    links: [
      { label: "Art. 26 AI Act", url: "https://artificialintelligenceact.eu/article/26/" },
      { label: "Art. 27 AI Act – FRIA", url: "https://artificialintelligenceact.eu/article/27/" }
    ]
  },

  { id: "verbotene-praktiken", category: "ai-act-core", risk: "prohibited",
    tags: ["#Prohibited", "#Art5", "#Grundrechte"],
    de: {
      term: "Verbotene KI-Praktiken",
      short: "Acht Praktiken, die ab 2.2.2025 in der EU vollständig untersagt sind – Social Scoring, manipulative Subliminaltechniken, Echtzeit-Gesichtserkennung im öffentlichen Raum (Art. 5).",
      long: "Art. 5 AI Act listet die oberste Risikostufe: (a) unterschwellige Manipulation, (b) Ausnutzung von Vulnerabilität, (c) staatliches Social Scoring, (d) Predictive Policing rein profilbasiert, (e) ungezieltes Scraping von Gesichtsbildern, (f) Emotionserkennung am Arbeitsplatz/in Bildung (Ausnahmen: medizinisch, sicherheitsrelevant), (g) biometrische Kategorisierung sensibler Merkmale, (h) Echtzeit-Fernidentifikation im öffentlichen Raum für Strafverfolgung (eng begrenzte Ausnahmen mit richterlicher Genehmigung). Verstöße: bis 35 Mio. € oder 7 % weltweiten Jahresumsatzes." },
    en: {
      term: "Prohibited AI Practices",
      short: "Eight practices fully banned in the EU from 2 Feb 2025 — social scoring, subliminal manipulation, real-time facial recognition in public spaces (Art. 5).",
      long: "Art. 5 AI Act sets the top risk tier: (a) subliminal manipulation, (b) exploitation of vulnerability, (c) public-authority social scoring, (d) predictive policing based solely on profiling, (e) untargeted facial-image scraping, (f) emotion recognition in workplaces and education (medical/safety exceptions), (g) biometric categorisation of sensitive traits, (h) real-time remote biometric identification in public for law enforcement (narrow exceptions with judicial authorisation). Sanctions: up to €35 million or 7% of global annual turnover." },
    links: [
      { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" }
    ]
  },

  { id: "hochrisiko-ki", category: "ai-act-core", risk: "high",
    tags: ["#HighRisk", "#AnnexIII", "#Art6", "#Compliance"],
    de: {
      term: "Hochrisiko-KI-System",
      short: "KI-System, das in Anhang III gelistet oder Sicherheitsbauteil eines regulierten Produkts ist (Art. 6). Strengste Pflichten unter dem AI Act außer Verbote.",
      long: "Zwei Wege: (1) Sicherheitsbauteil oder Produkt unter Unionsharmonisierungsrechtsakten in Anhang I (Maschinen, Medizinprodukte, Spielzeug), (2) Use Case in Anhang III: Biometrie, kritische Infrastruktur, Bildung, Beschäftigung, wesentliche Dienste, Strafverfolgung, Migration, Justiz/Demokratie. Pflichten: Risikomanagement (Art. 9), Daten-Governance (Art. 10), technische Dokumentation (Art. 11), Aufzeichnungen (Art. 12), Transparenz (Art. 13), menschliche Aufsicht (Art. 14), Genauigkeit/Robustheit (Art. 15), Konformitätsbewertung, CE, Registrierung." },
    en: {
      term: "High-Risk AI System",
      short: "AI system listed in Annex III or used as a safety component of a regulated product (Art. 6). Strictest obligations apart from outright bans.",
      long: "Two routes: (1) safety component or product under Union harmonisation acts in Annex I (machinery, medical devices, toys), (2) use cases in Annex III: biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice/democracy. Duties: risk management (Art. 9), data governance (Art. 10), technical documentation (Art. 11), record-keeping (Art. 12), transparency (Art. 13), human oversight (Art. 14), accuracy/robustness (Art. 15), conformity assessment, CE marking, registration." },
    links: [
      { label: "Art. 6 AI Act", url: "https://artificialintelligenceact.eu/article/6/" },
      { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" }
    ]
  },

  { id: "begrenztes-risiko", category: "ai-act-core", risk: "limited",
    tags: ["#LimitedRisk", "#Transparency", "#Art50"],
    de: {
      term: "Begrenztes Risiko",
      short: "Risikostufe für Systeme mit Transparenzpflichten – Chatbots, Deepfakes, emotionserkennende und biometrisch kategorisierende Systeme (Art. 50).",
      long: "Anbieter müssen sicherstellen, dass Personen erkennen, dass sie mit KI interagieren (Chatbot-Hinweis), und KI-generierte synthetische Inhalte (Bild, Audio, Video, Text) maschinenlesbar als solche kennzeichnen. Betreiber müssen Deepfakes als künstlich erzeugt offenlegen (außer künstlerisch/satirisch) und öffentlich-relevante Texte kennzeichnen. Verstöße: bis 15 Mio. € oder 3 % weltweiten Jahresumsatzes." },
    en: {
      term: "Limited Risk",
      short: "Risk tier for systems subject to transparency obligations — chatbots, deepfakes, emotion recognition, biometric categorisation (Art. 50).",
      long: "Providers must ensure persons are informed they are interacting with AI (chatbot disclosure) and that AI-generated synthetic content (image, audio, video, text) is marked machine-readably. Deployers must disclose deepfakes as artificially generated (except artistic/satirical) and label public-interest texts. Sanctions: up to €15 million or 3% of global annual turnover." },
    links: [
      { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" }
    ]
  },

  { id: "minimales-risiko", category: "ai-act-core", risk: "minimal",
    tags: ["#MinimalRisk", "#VoluntaryCode", "#Art95"],
    de: {
      term: "Minimales Risiko",
      short: "Standard-KI ohne spezifische Pflichten unter dem AI Act – Spam-Filter, Empfehlungssysteme, KI in Videospielen.",
      long: "Die überwiegende Mehrheit der heute eingesetzten KI fällt in diese Kategorie. Keine direkten Pflichten aus dem AI Act, aber freiwillige Verhaltenskodizes (Art. 95) zur Förderung von Trustworthy-AI-Prinzipien. Bestehende Rechtsrahmen wie DSGVO, Verbraucherschutz, Wettbewerbsrecht bleiben uneingeschränkt anwendbar." },
    en: {
      term: "Minimal Risk",
      short: "Default AI without specific AI Act obligations — spam filters, recommender systems, AI in video games.",
      long: "The vast majority of AI in use today falls into this tier. No direct AI Act duties, but voluntary codes of conduct (Art. 95) to promote trustworthy AI principles. Existing frameworks such as GDPR, consumer protection, and competition law continue to apply in full." },
    links: [
      { label: "Art. 95 AI Act", url: "https://artificialintelligenceact.eu/article/95/" }
    ]
  },

  { id: "systemisches-risiko", category: "ai-act-core", risk: "systemic",
    tags: ["#SystemicRisk", "#GPAI", "#Art51", "#FLOP"],
    de: {
      term: "Systemisches Risiko",
      short: "Risiko mit erheblichen Auswirkungen auf den EU-Binnenmarkt durch GPAI-Modelle hoher Wirkung. Schwelle: Trainingsrechenleistung > 10^25 FLOP (Art. 3 Nr. 65).",
      long: "Die Klassifizierung greift automatisch beim Überschreiten der FLOP-Schwelle, kann aber auch durch Kommission auf Basis weiterer Kriterien (Anhang XIII) erfolgen: Parameterzahl, Datensatzqualität, Reichweite, registrierte Endnutzer. Folge: Pflichten nach Art. 55 – Modellbewertung mit standardisierten Protokollen, adversariales Testing, Vorfallberichte, angemessene Cybersicherheit. Anbieter melden Erreichen der Schwelle binnen zwei Wochen an die Kommission." },
    en: {
      term: "Systemic Risk",
      short: "Risk with significant impact on the EU internal market caused by high-impact GPAI. Threshold: training compute > 10^25 FLOPs (Art. 3(65)).",
      long: "Classification is automatic when the FLOP threshold is crossed but the Commission may also designate models on additional Annex XIII criteria: parameter count, dataset quality, reach, registered end users. Consequence: Art. 55 duties — model evaluation with standardised protocols, adversarial testing, incident reports, adequate cybersecurity. Providers notify the Commission within two weeks of meeting the threshold." },
    links: [
      { label: "Art. 51 AI Act", url: "https://artificialintelligenceact.eu/article/51/" },
      { label: "Art. 55 AI Act", url: "https://artificialintelligenceact.eu/article/55/" }
    ]
  },

  { id: "konformitaetsbewertung", category: "ai-act-core", risk: null,
    tags: ["#Conformity", "#CE", "#Art43"],
    de: {
      term: "Konformitätsbewertung",
      short: "Verfahren zur Feststellung, ob ein Hochrisiko-KI-System die Anforderungen der Kapitel III erfüllt (Art. 43).",
      long: "Zwei Verfahren: (1) Interne Kontrolle (Anhang VI) – Selbstbewertung des Anbieters, Standardweg für Anhang-III-Systeme. (2) Bewertung mit notifizierter Stelle (Anhang VII) – obligatorisch bei biometrischer Fernidentifikation und für Sicherheitsbauteile in regulierten Produkten. Ergebnis: EU-Konformitätserklärung (Art. 47), CE-Kennzeichnung (Art. 48), Registrierung in EU-Datenbank (Art. 49). Wesentliche Änderungen erfordern erneute Bewertung." },
    en: {
      term: "Conformity Assessment",
      short: "Procedure demonstrating that a high-risk AI system complies with Chapter III requirements (Art. 43).",
      long: "Two routes: (1) internal control (Annex VI) — provider self-assessment, default for Annex III systems. (2) Assessment with a notified body (Annex VII) — mandatory for remote biometric identification and safety components of regulated products. Output: EU declaration of conformity (Art. 47), CE marking (Art. 48), registration in the EU database (Art. 49). Substantial modifications trigger re-assessment." },
    links: [
      { label: "Art. 43 AI Act", url: "https://artificialintelligenceact.eu/article/43/" }
    ]
  },

  { id: "ce-kennzeichnung", category: "ai-act-core", risk: null,
    tags: ["#CEMarking", "#Art48", "#Compliance"],
    de: {
      term: "CE-Kennzeichnung",
      short: "Sichtbarer Konformitätsnachweis auf Hochrisiko-KI-Systemen. Erklärt Übereinstimmung mit AI Act und ggf. weiteren Unionsrechtsakten (Art. 48).",
      long: "Vor dem Inverkehrbringen muss der Anbieter die CE-Kennzeichnung anbringen – physisch oder digital bei reiner Software. Bei beteiligter notifizierter Stelle wird deren vierstellige Kennnummer hinzugefügt. Voraussetzung für freien Verkehr im EU-Binnenmarkt und Veröffentlichung in der EU-Datenbank für Hochrisiko-KI." },
    en: {
      term: "CE Marking",
      short: "Visible conformity mark on high-risk AI systems. Declares compliance with the AI Act and other Union acts (Art. 48).",
      long: "Before placing the system on the market, the provider must affix the CE mark — physically or digitally for software-only systems. Where a notified body is involved, its four-digit identification number is added. Precondition for free movement in the EU single market and for publication in the high-risk AI database." },
    links: [
      { label: "Art. 48 AI Act", url: "https://artificialintelligenceact.eu/article/48/" }
    ]
  },

  { id: "menschliche-aufsicht", category: "ai-act-core", risk: null,
    tags: ["#HumanOversight", "#Art14", "#HumanInTheLoop"],
    de: {
      term: "Menschliche Aufsicht",
      short: "Hochrisiko-KI muss so gestaltet sein, dass natürliche Personen sie wirksam überwachen können (Art. 14). Human in/on the loop oder in command.",
      long: "Anbieter müssen geeignete Mensch-Maschine-Schnittstellen bauen; Betreiber müssen Aufsicht real durchführen. Aufsichtsführende Personen müssen: Fähigkeiten und Grenzen verstehen, Automatisierungsbias erkennen, Output korrekt interpretieren, eingreifen können (\"Stop\"-Funktion), KI-Empfehlungen ignorieren oder rückgängig machen können. Für Echtzeit-Fernidentifikation: Vier-Augen-Prinzip mit zwei unabhängigen Personen (Art. 14(5))." },
    en: {
      term: "Human Oversight",
      short: "High-risk AI must be designed so natural persons can effectively oversee it (Art. 14). Human in/on the loop or in command.",
      long: "Providers must build appropriate human-machine interfaces; deployers must actually exercise oversight. Overseers must understand capabilities and limits, detect automation bias, correctly interpret output, retain ability to intervene (\"stop\" function), ignore or override AI recommendations. For real-time remote biometric identification: two-person rule with two independent persons (Art. 14(5))." },
    links: [
      { label: "Art. 14 AI Act", url: "https://artificialintelligenceact.eu/article/14/" }
    ]
  },

  { id: "ki-kompetenz", category: "ai-act-core", risk: null,
    tags: ["#AILiteracy", "#Art4", "#Schulung"],
    de: {
      term: "KI-Kompetenz",
      short: "Pflicht für Anbieter und Betreiber, ein hinreichendes Niveau an KI-Kompetenz bei betroffenen Mitarbeitenden sicherzustellen (Art. 4) – seit 2.2.2025.",
      long: "Eine der ersten anwendbaren Pflichten. Risikobasiert: Wer Hochrisiko-KI betreibt, braucht tiefgreifenderes Verständnis als Chatbot-Nutzer. Inhalte: Funktionsweise, Chancen, Risiken, mögliche Schäden, technische Kenntnisse, Erfahrung, Kontext der Nutzung. Schulung muss dokumentiert werden – die Kommission veröffentlicht Beispiele guter Praxis (\"Living Repository\" des AI Office)." },
    en: {
      term: "AI Literacy",
      short: "Duty for providers and deployers to ensure sufficient AI literacy among relevant staff (Art. 4) — applicable since 2 Feb 2025.",
      long: "One of the first applicable obligations. Risk-based: operating high-risk AI requires deeper understanding than using a chatbot. Content: how AI works, opportunities, risks, potential harms, technical knowledge, experience, context of use. Training must be documented — the Commission publishes good-practice examples (the AI Office's \"Living Repository\")." },
    links: [
      { label: "Art. 4 AI Act", url: "https://artificialintelligenceact.eu/article/4/" },
      { label: "AI Literacy Repository", url: "https://digital-strategy.ec.europa.eu/en/library/living-repository-foster-learning-and-exchange-ai-literacy" }
    ]
  },

  { id: "ai-office", category: "ai-act-core", risk: null,
    tags: ["#AIOffice", "#Governance", "#Commission"],
    de: {
      term: "Büro für künstliche Intelligenz (AI Office)",
      short: "Zentrale EU-Einheit innerhalb der Kommission (DG CNECT) für GPAI-Aufsicht, Koordination, Standards und Code of Practice.",
      long: "Eingerichtet im Februar 2024, operativ seit Mitte 2024. Aufgaben: Aufsicht und Durchsetzung gegenüber GPAI-Anbietern (insbesondere mit systemischem Risiko), Erarbeitung des GPAI Code of Practice, Unterstützung des AI Board, Förderung von Forschung, Reallaboren, Standards. Anders als beim Datenschutz mit nationalen Behörden ist die GPAI-Aufsicht zentralisiert auf EU-Ebene." },
    en: {
      term: "AI Office",
      short: "Central EU unit within the Commission (DG CNECT) responsible for GPAI oversight, coordination, standards, and Code of Practice.",
      long: "Established February 2024, operational since mid-2024. Tasks: oversight and enforcement of GPAI providers (especially with systemic risk), drafting the GPAI Code of Practice, supporting the AI Board, advancing research, sandboxes, standards. Unlike data protection's national authorities, GPAI supervision is centralised at EU level." },
    links: [
      { label: "European AI Office", url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office" }
    ]
  },

  { id: "fria", category: "ai-act-core", risk: null,
    tags: ["#FRIA", "#Art27", "#Grundrechte", "#DPIA"],
    de: {
      term: "Grundrechte-Folgenabschätzung (FRIA)",
      short: "Pflicht-Folgenabschätzung für bestimmte Betreiber von Hochrisiko-KI: öffentliche Stellen, private Akteure bei Anhang-III-Use-Cases mit Bürger-Rechtsfolgen (Art. 27).",
      long: "FRIA = Fundamental Rights Impact Assessment. Inhalt: Beschreibung der Prozesse mit KI, Zeitraum/Häufigkeit, Kategorien betroffener Personen, spezifische Grundrechtsrisiken, Maßnahmen menschlicher Aufsicht, Schadensbegrenzung. Ergebnisse werden der Marktüberwachungsbehörde gemeldet. Überschneidung mit DSGVO-DPIA: Wo bereits DPIA vorliegt, ergänzen – nicht ersetzen. Anbieter unterstützen Betreiber mit Informationen." },
    en: {
      term: "Fundamental Rights Impact Assessment (FRIA)",
      short: "Mandatory impact assessment for certain deployers of high-risk AI: public bodies and private actors using Annex III systems with citizen-rights effects (Art. 27).",
      long: "FRIA content: description of processes using AI, period/frequency, categories of affected persons, specific risks to fundamental rights, human oversight measures, harm mitigation. Results notified to the market surveillance authority. Overlap with GDPR DPIA: where a DPIA already exists, complement — not replace. Providers support deployers with information." },
    links: [
      { label: "Art. 27 AI Act", url: "https://artificialintelligenceact.eu/article/27/" }
    ]
  },

  { id: "reallabor", category: "ai-act-core", risk: null,
    tags: ["#Sandbox", "#Innovation", "#Art57", "#KMU"],
    de: {
      term: "Reallabor (Regulatory Sandbox)",
      short: "Kontrollierte Testumgebung unter behördlicher Aufsicht, in der innovative KI-Systeme vor Inverkehrbringen entwickelt und erprobt werden (Art. 57 ff.).",
      long: "Jeder Mitgliedstaat muss bis 2.8.2026 mindestens ein nationales Reallabor einrichten. Vorteile: priorisierter Zugang für KMU und Start-ups, kostenlose Teilnahme, juristische Begleitung, ggf. Nutzung personenbezogener Daten unter strikten Bedingungen für KI im öffentlichen Interesse (Art. 59). Vorbild: spanisches Pilot-Sandbox seit 2022." },
    en: {
      term: "Regulatory Sandbox",
      short: "Controlled testing environment under regulatory supervision in which innovative AI systems can be developed and tested before market entry (Art. 57 et seq.).",
      long: "Each Member State must establish at least one national sandbox by 2 Aug 2026. Benefits: priority access for SMEs and start-ups, free participation, regulatory guidance, conditional use of personal data for public-interest AI (Art. 59). Spain's pilot sandbox (2022) served as a blueprint." },
    links: [
      { label: "Art. 57 AI Act", url: "https://artificialintelligenceact.eu/article/57/" }
    ]
  },

  { id: "transparenzpflichten", category: "ai-act-core", risk: "limited",
    tags: ["#Transparency", "#Art13", "#Art50"],
    de: {
      term: "Transparenzpflichten",
      short: "Anbieter und Betreiber müssen offenlegen, dass KI im Einsatz ist, und Inhalte als KI-generiert kennzeichnen (Art. 13, Art. 50).",
      long: "Zwei Ebenen: (1) Hochrisiko (Art. 13) – Gebrauchsanweisung mit Zweck, Genauigkeit, bekannten Limitationen, vorhersehbarer Fehlanwendung, Aufsichtsmaßnahmen, Eingriffsmöglichkeiten, Wartung. (2) Begrenztes Risiko (Art. 50) – Information bei Chatbots, maschinenlesbare Markierung synthetischer Inhalte, Deepfake-Offenlegung. Zwischen DSGVO-Transparenz (Art. 13/14) und AI-Act-Transparenz bestehen Überlappungen, aber unterschiedliche Schutzgüter." },
    en: {
      term: "Transparency Obligations",
      short: "Providers and deployers must disclose AI use and label AI-generated content (Art. 13, Art. 50).",
      long: "Two layers: (1) High-risk (Art. 13) — instructions for use covering purpose, accuracy, known limitations, foreseeable misuse, oversight measures, intervention options, maintenance. (2) Limited risk (Art. 50) — chatbot disclosure, machine-readable labelling of synthetic content, deepfake disclosure. GDPR transparency (Art. 13/14) and AI Act transparency overlap but protect different interests." },
    links: [
      { label: "Art. 13 AI Act", url: "https://artificialintelligenceact.eu/article/13/" },
      { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" }
    ]
  },

  /* =================== ML / KI-GRUNDLAGEN =================== */

  { id: "ki", category: "ml", risk: null,
    tags: ["#KI", "#AI", "#Foundations", "#1956"],
    de: {
      term: "Künstliche Intelligenz (KI)",
      short: "Sammelbegriff für Systeme, die Aufgaben lösen, die typischerweise menschliche Intelligenz erfordern – Wahrnehmen, Schlussfolgern, Lernen, Planen.",
      long: "Begriff geprägt von John McCarthy (Dartmouth-Konferenz 1956). Klassische Unterteilung: Symbolische KI (Expertensysteme, Logik) vs. subsymbolische KI (Maschinelles Lernen, neuronale Netze). Aktuelle Renaissance seit ~2012 (Deep Learning) und 2017 (Transformer). Der AI Act nutzt eine engere, OECD-orientierte Definition (\"KI-System\"), um symbolische Software nicht pauschal zu erfassen." },
    en: {
      term: "Artificial Intelligence (AI)",
      short: "Umbrella term for systems performing tasks typically requiring human intelligence — perceiving, reasoning, learning, planning.",
      long: "Coined by John McCarthy (Dartmouth Conference, 1956). Classical split: symbolic AI (expert systems, logic) vs. subsymbolic AI (machine learning, neural networks). Current renaissance since ~2012 (deep learning) and 2017 (transformers). The AI Act uses a narrower, OECD-aligned definition (\"AI system\") to avoid blanket coverage of all symbolic software." },
    links: [
      { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" }
    ]
  },

  { id: "ml", category: "ml", risk: null,
    tags: ["#ML", "#Foundations", "#Mitchell"],
    de: {
      term: "Maschinelles Lernen",
      short: "Teilgebiet der KI, in dem Algorithmen Muster aus Daten lernen, statt explizit programmiert zu werden (Tom Mitchell, 1997).",
      long: "Drei Hauptparadigmen: überwachtes, unüberwachtes und bestärkendes Lernen. Klassische Verfahren: lineare/logistische Regression, Entscheidungsbäume, Random Forest, SVM, k-NN, Clustering. Modernere Verfahren: Gradient Boosting (XGBoost, LightGBM), Deep Learning. Der AI Act nennt ML als einen der drei methodischen Ansätze, die unter \"KI-System\" fallen können – neben logikbasierten und statistischen Ansätzen." },
    en: {
      term: "Machine Learning",
      short: "Subfield of AI where algorithms learn patterns from data rather than being explicitly programmed (Tom Mitchell, 1997).",
      long: "Three main paradigms: supervised, unsupervised, reinforcement learning. Classical methods: linear/logistic regression, decision trees, random forest, SVM, k-NN, clustering. Modern methods: gradient boosting (XGBoost, LightGBM), deep learning. The AI Act lists ML as one of three methodological approaches potentially falling under \"AI system\", alongside logic-based and statistical approaches." },
    links: [
      { label: "Mitchell, Machine Learning (1997)", url: "https://www.cs.cmu.edu/~tom/mlbook.html" }
    ]
  },

  { id: "ueberwacht", category: "ml", risk: null,
    tags: ["#Supervised", "#Labels", "#Classification"],
    de: {
      term: "Überwachtes Lernen",
      short: "Lernen aus gelabelten Daten (Eingabe → Ziel-Ausgabe). Klassische Aufgaben: Klassifikation und Regression.",
      long: "Der Algorithmus erhält Trainingsbeispiele mit bekannten Antworten und sucht eine Funktion, die neue Beispiele möglichst korrekt abbildet. Beispiele: Spam-Klassifikation, Bildkategorisierung, Hauspreisvorhersage. Datenqualität ist entscheidend – Labels-Bias überträgt sich direkt ins Modell. Datensatz wird üblich aufgeteilt in Trainings-, Validierungs- und Testdaten (z. B. 70/15/15)." },
    en: {
      term: "Supervised Learning",
      short: "Learning from labelled data (input → target output). Classical tasks: classification and regression.",
      long: "The algorithm receives training examples with known answers and seeks a function mapping new examples as accurately as possible. Examples: spam classification, image categorisation, house price prediction. Data quality is decisive — label bias transfers directly to the model. Datasets are typically split into training, validation, and test sets (e.g. 70/15/15)." }
  },

  { id: "unueberwacht", category: "ml", risk: null,
    tags: ["#Unsupervised", "#Clustering", "#PCA"],
    de: {
      term: "Unüberwachtes Lernen",
      short: "Lernen aus ungelabelten Daten – Ziel: Strukturen entdecken, etwa Cluster, latente Faktoren oder Anomalien.",
      long: "Aufgabentypen: Clustering (k-Means, DBSCAN, Hierarchical), Dimensionsreduktion (PCA, t-SNE, UMAP), Anomalie-Erkennung, Assoziationsregeln. Anwendungen: Kundensegmentierung, Datenexploration, Vorverarbeitung. Bewertung schwieriger als bei überwachtem Lernen, da keine Ground Truth vorliegt – Metriken wie Silhouette Score, Davies-Bouldin oder domänenspezifische Validierung." },
    en: {
      term: "Unsupervised Learning",
      short: "Learning from unlabelled data — goal: discover structure such as clusters, latent factors, or anomalies.",
      long: "Tasks: clustering (k-Means, DBSCAN, hierarchical), dimensionality reduction (PCA, t-SNE, UMAP), anomaly detection, association rules. Applications: customer segmentation, data exploration, preprocessing. Evaluation is harder than supervised learning since no ground truth exists — metrics include Silhouette Score, Davies-Bouldin, or domain-specific validation." }
  },

  { id: "rl", category: "ml", risk: null,
    tags: ["#RL", "#Reward", "#PPO", "#AlphaGo"],
    de: {
      term: "Bestärkendes Lernen (RL)",
      short: "Ein Agent lernt durch Versuch und Irrtum mit Belohnungssignalen aus einer Umgebung – formalisiert als Markov-Entscheidungsprozess.",
      long: "Schlüsselkonzepte: Zustand, Aktion, Belohnung, Policy, Wert-Funktion. Klassische Algorithmen: Q-Learning, SARSA, Policy Gradients, Actor-Critic. Moderne Erfolge: AlphaGo (Deep RL + Monte-Carlo-Tree-Search), DQN für Atari, RLHF für Chat-Modelle. Herausforderungen: Sample-Effizienz, Exploration vs. Exploitation, Belohnungs-Hacking, Reward-Spezifikation – auch zentral in der Alignment-Forschung." },
    en: {
      term: "Reinforcement Learning (RL)",
      short: "An agent learns by trial and error from reward signals — formalised as a Markov Decision Process.",
      long: "Key concepts: state, action, reward, policy, value function. Classical algorithms: Q-learning, SARSA, policy gradients, actor-critic. Modern successes: AlphaGo (deep RL + Monte Carlo tree search), DQN for Atari, RLHF for chat models. Challenges: sample efficiency, exploration vs. exploitation, reward hacking, reward specification — central to alignment research." },
    links: [
      { label: "Sutton & Barto, RL Book", url: "http://incompleteideas.net/book/the-book.html" }
    ]
  },

  { id: "trainingsdaten", category: "ml", risk: null,
    tags: ["#TrainingData", "#Quality", "#Splits"],
    de: {
      term: "Trainingsdaten",
      short: "Datensatz, mit dem die Parameter eines ML-Modells gelernt werden. Qualität, Repräsentativität und Bias-Freiheit sind entscheidend.",
      long: "Klassische Aufteilung: Training (Modellparameter lernen), Validierung (Hyperparameter wählen, Modell auswählen), Test (finale, unverfälschte Bewertung). Häufige Probleme: Stichprobenverzerrung, Label-Rauschen, Verteilungsdrift, Datenleckage zwischen den Splits. Der AI Act schreibt für Hochrisiko-KI in Art. 10 spezifische Qualitätsanforderungen vor." },
    en: {
      term: "Training Data",
      short: "Dataset used to learn an ML model's parameters. Quality, representativeness, and bias-freeness are critical.",
      long: "Classical split: training (learn parameters), validation (tune hyperparameters, model selection), test (final unbiased evaluation). Common pitfalls: sampling bias, label noise, distribution drift, leakage between splits. The AI Act sets specific quality requirements for high-risk AI in Art. 10." },
    links: [
      { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" }
    ]
  },

  { id: "overfitting", category: "ml", risk: null,
    tags: ["#Overfitting", "#Regularization", "#Generalization"],
    de: {
      term: "Overfitting (Überanpassung)",
      short: "Das Modell lernt Trainingsdaten samt Rauschen auswendig und generalisiert schlecht auf neue Daten.",
      long: "Symptome: deutlich höhere Trainings- als Testgenauigkeit. Ursachen: zu komplexes Modell, zu wenige Daten, zu langes Training. Gegenmittel: Regularisierung (L1/L2, Dropout), Early Stopping, Datenaugmentierung, mehr/diversere Daten, einfachere Architekturen, Cross-Validation. Pendant: Underfitting – Modell zu simpel, lernt selbst Trainingsdaten nicht." },
    en: {
      term: "Overfitting",
      short: "Model memorises training data plus noise and generalises poorly to unseen data.",
      long: "Symptoms: train accuracy far above test accuracy. Causes: model too complex, too few data, training too long. Remedies: regularisation (L1/L2, dropout), early stopping, data augmentation, more/diverse data, simpler architectures, cross-validation. Counterpart: underfitting — model too simple to fit even training data." }
  },

  /* =================== DEEP LEARNING =================== */

  { id: "deep-learning", category: "dl", risk: null,
    tags: ["#DeepLearning", "#GPU", "#AlexNet"],
    de: {
      term: "Deep Learning (Tiefes Lernen)",
      short: "ML-Teilgebiet mit tiefen neuronalen Netzen (viele Schichten). Lernt hierarchische Repräsentationen direkt aus Rohdaten.",
      long: "Durchbrüche seit 2012 (AlexNet auf ImageNet). Skaliert hervorragend mit Daten und Rechenleistung. Kernarchitekturen: CNN für Bilder, RNN/LSTM für Sequenzen, Transformer als universeller Standard seit 2017. Voraussetzungen: GPUs/TPUs, große Datenmengen, Frameworks wie PyTorch, TensorFlow, JAX. Trade-off: hohe Genauigkeit vs. Black-Box-Charakter, Datenhunger, Energiebedarf." },
    en: {
      term: "Deep Learning",
      short: "ML subfield using deep neural networks (many layers). Learns hierarchical representations directly from raw data.",
      long: "Breakthroughs since 2012 (AlexNet on ImageNet). Scales exceptionally with data and compute. Key architectures: CNNs for images, RNNs/LSTMs for sequences, transformers as universal default since 2017. Prerequisites: GPUs/TPUs, large datasets, frameworks (PyTorch, TensorFlow, JAX). Trade-off: high accuracy vs. black-box character, data hunger, energy footprint." },
    links: [
      { label: "Goodfellow et al., Deep Learning Book", url: "https://www.deeplearningbook.org/" }
    ]
  },

  { id: "nn", category: "dl", risk: null,
    tags: ["#NeuralNet", "#Perceptron", "#ReLU"],
    de: {
      term: "Neuronales Netz",
      short: "Aus künstlichen Neuronen aufgebautes Modell, lose inspiriert vom biologischen Gehirn. Schichten von Knoten transformieren Eingaben in Ausgaben.",
      long: "Grundbaustein: künstliches Neuron mit gewichteten Eingaben, Bias, Aktivierungsfunktion (ReLU, Sigmoid, Tanh). Topologie: Eingabe-, Hidden-, Ausgabeschicht; bei \"deep\" mehrere Hidden Layer. Lernverfahren: Forward Pass, Loss-Berechnung, Backpropagation, Gewichtsaktualisierung per Gradient Descent. Universal Approximation Theorem: Schon ein Hidden Layer kann theoretisch beliebige stetige Funktionen approximieren – Tiefe verbessert Repräsentationskraft in der Praxis." },
    en: {
      term: "Neural Network",
      short: "Model composed of artificial neurons, loosely inspired by the biological brain. Layers of nodes transform inputs into outputs.",
      long: "Building block: artificial neuron with weighted inputs, bias, activation function (ReLU, sigmoid, tanh). Topology: input, hidden, output layers; \"deep\" means multiple hidden layers. Training: forward pass, loss computation, backpropagation, weight update via gradient descent. Universal Approximation Theorem: a single hidden layer can in principle approximate any continuous function — depth improves representational power in practice." }
  },

  { id: "cnn", category: "dl", risk: null,
    tags: ["#CNN", "#Convolution", "#ResNet"],
    de: {
      term: "Faltungsnetzwerk (CNN)",
      short: "Convolutional Neural Network. Spezialisiert auf gitterartige Daten (Bilder, Audio-Spektrogramme) durch lokale Filter und räumliche Hierarchie.",
      long: "Kernideen: lokale Konnektivität, Gewichts-Sharing, Translation-Invarianz. Schichttypen: Convolution, Pooling, vollständig verbundene Schichten. Meilensteine: LeNet (1998), AlexNet (2012), VGG, ResNet (Skip Connections), EfficientNet. Heute teils abgelöst durch Vision Transformers (ViT), aber für viele Praxis-Aufgaben weiterhin Standard wegen Effizienz und kleinerer Datenanforderungen." },
    en: {
      term: "Convolutional Neural Network (CNN)",
      short: "Specialised for grid-like data (images, audio spectrograms) via local filters and spatial hierarchy.",
      long: "Core ideas: local connectivity, weight sharing, translation invariance. Layer types: convolution, pooling, fully connected. Milestones: LeNet (1998), AlexNet (2012), VGG, ResNet (skip connections), EfficientNet. Partly displaced by Vision Transformers (ViT), but still standard for many practical tasks due to efficiency and lower data requirements." }
  },

  { id: "transformer", category: "dl", risk: null,
    tags: ["#Transformer", "#Attention", "#Vaswani2017"],
    de: {
      term: "Transformer",
      short: "Architektur mit Self-Attention (Vaswani et al. 2017, \"Attention is All You Need\"). Heute dominant in NLP, Vision, Multimodal, Audio.",
      long: "Verzichtet auf Rekurrenz, parallelisiert über Sequenzpositionen. Bausteine: Multi-Head Self-Attention, Feed-Forward-Netzwerke, Layer Normalization, Residual Connections, Positions-Encoding. Varianten: Encoder-only (BERT), Decoder-only (GPT), Encoder-Decoder (T5, BART). Skalierung mit Daten/Parametern führt zu emergenten Fähigkeiten – Grundlage moderner LLMs und Foundation Models." },
    en: {
      term: "Transformer",
      short: "Architecture using self-attention (Vaswani et al. 2017, \"Attention is All You Need\"). Today dominant across NLP, vision, multimodal, audio.",
      long: "Eliminates recurrence and parallelises across sequence positions. Building blocks: multi-head self-attention, feed-forward networks, layer normalization, residual connections, positional encoding. Variants: encoder-only (BERT), decoder-only (GPT), encoder-decoder (T5, BART). Scaling with data and parameters yields emergent capabilities — foundation of modern LLMs and foundation models." },
    links: [
      { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" }
    ]
  },

  { id: "embedding", category: "dl", risk: null,
    tags: ["#Embedding", "#Vectors", "#Word2Vec"],
    de: {
      term: "Embedding (Einbettung)",
      short: "Dichte Vektor-Repräsentation diskreter Objekte (Wörter, Bilder, Nutzer) in einem semantischen Raum, in dem Ähnlichkeit messbar ist.",
      long: "Pioniere im NLP: Word2Vec (2013), GloVe, FastText. Modern: kontextuelle Embeddings aus BERT, Sentence-Transformers, multimodale Embeddings (CLIP). Anwendungen: Suche, Empfehlungen, Clustering, RAG-Pipelines. Vektor-Datenbanken (Pinecone, Weaviate, Milvus, pgvector) speichern Embeddings für schnelle Nearest-Neighbor-Suche." },
    en: {
      term: "Embedding",
      short: "Dense vector representation of discrete objects (words, images, users) in a semantic space where similarity is measurable.",
      long: "NLP pioneers: Word2Vec (2013), GloVe, FastText. Modern: contextual embeddings from BERT, Sentence-Transformers, multimodal embeddings (CLIP). Applications: search, recommendation, clustering, RAG pipelines. Vector databases (Pinecone, Weaviate, Milvus, pgvector) store embeddings for fast nearest-neighbour search." }
  },

  { id: "diffusion", category: "dl", risk: null,
    tags: ["#Diffusion", "#StableDiffusion", "#Generative"],
    de: {
      term: "Diffusionsmodell",
      short: "Generative Modellklasse, die schrittweise Rauschen in strukturierte Daten umkehrt – State of the Art für Bildgenerierung.",
      long: "Forward-Prozess fügt iterativ Gauß-Rauschen hinzu, das Modell lernt den umgekehrten Denoising-Prozess. Bekannte Modelle: Stable Diffusion, Midjourney, DALL-E, Sora (Video). Konkurrenz zu GANs, oft trainingsstabiler und qualitativ überlegen. Latente Diffusion (auf VAE-Latents) reduziert Rechenkosten drastisch. Steuerung über Text-Embeddings (CLIP) und Conditioning (ControlNet, IP-Adapter)." },
    en: {
      term: "Diffusion Model",
      short: "Generative model class iteratively reversing noise into structured data — state of the art for image generation.",
      long: "Forward process adds Gaussian noise; the model learns the reverse denoising process. Notable models: Stable Diffusion, Midjourney, DALL-E, Sora (video). Competing with GANs, often more stable to train and qualitatively superior. Latent diffusion (on VAE latents) drastically reduces compute. Control via text embeddings (CLIP) and conditioning (ControlNet, IP-Adapter)." }
  },

  /* =================== LLM / GENERATIVE AI =================== */

  { id: "llm", category: "llm", risk: null,
    tags: ["#LLM", "#GPT", "#FoundationModel"],
    de: {
      term: "Großes Sprachmodell (LLM)",
      short: "Auf riesigen Textmengen trainiertes Transformer-basiertes Modell mit Milliarden Parametern, das Sprache versteht und generiert.",
      long: "Beispiele: GPT-4o, Claude, Llama, Gemini, Mistral, Qwen. Training: Self-Supervised auf Web-Korpus (Pretraining), gefolgt von Fine-Tuning und RLHF/DPO. Fähigkeiten skalieren mit Parametern, Daten und Compute (Scaling Laws). Limitationen: Halluzinationen, fehlendes Echtzeit-Wissen, Kontextfenster. Unter dem AI Act in der Regel als GPAI-Modell eingestuft, ab 10^25 FLOP mit systemischem Risiko." },
    en: {
      term: "Large Language Model (LLM)",
      short: "Transformer-based model with billions of parameters, trained on vast text corpora, that understands and generates language.",
      long: "Examples: GPT-4o, Claude, Llama, Gemini, Mistral, Qwen. Training: self-supervised on web corpora (pretraining), followed by fine-tuning and RLHF/DPO. Capabilities scale with parameters, data, and compute (scaling laws). Limitations: hallucinations, no real-time knowledge, context window. Under the AI Act, typically classified as GPAI; above 10^25 FLOPs as GPAI with systemic risk." }
  },

  { id: "foundation-model", category: "llm", risk: null,
    tags: ["#FoundationModel", "#Stanford", "#Multimodal"],
    de: {
      term: "Foundation Model (Basismodell)",
      short: "Großes vortrainiertes Modell, das per Adaptation auf vielfältige Downstream-Aufgaben spezialisiert wird (Bommasani et al., Stanford 2021).",
      long: "Begriff von Stanford CRFM geprägt. Charakteristika: Skala (Daten, Compute), Vielseitigkeit, Emergenz. Modalitäten: Text (LLMs), Bild (CLIP, SAM), Multimodal (GPT-4o, Gemini), Audio (Whisper), Code (Codex). Im AI Act überlappend mit GPAI-Definition – nicht jedes Foundation Model ist GPAI nach AI Act, aber alle GPAI-Modelle sind Foundation Models im weiten Sinne." },
    en: {
      term: "Foundation Model",
      short: "Large pre-trained model adapted via fine-tuning to many downstream tasks (Bommasani et al., Stanford 2021).",
      long: "Coined by Stanford CRFM. Characteristics: scale (data, compute), versatility, emergence. Modalities: text (LLMs), vision (CLIP, SAM), multimodal (GPT-4o, Gemini), audio (Whisper), code (Codex). Overlaps with the AI Act's GPAI definition — not every foundation model is GPAI per the AI Act, but all GPAI models are foundation models broadly." },
    links: [
      { label: "Bommasani et al. (Stanford CRFM)", url: "https://arxiv.org/abs/2108.07258" }
    ]
  },

  { id: "generative-ai", category: "llm", risk: null,
    tags: ["#GenAI", "#ChatGPT", "#Generation"],
    de: {
      term: "Generative KI",
      short: "KI-Systeme, die neue Inhalte erzeugen – Text, Bild, Audio, Video, Code – auf Basis erlernter Datenverteilungen.",
      long: "Aktuelle Welle seit ChatGPT (Nov 2022). Schlüsseltechnologien: LLMs für Text/Code, Diffusion für Bild/Video, Flow-Matching/AR für Audio. Wirtschaftliche Disruption: Marketing, Software, Design, Bildung, Forschung. Rechtliche Brennpunkte: Urheberrecht der Trainingsdaten, Output-Schutzfähigkeit, Haftung, Transparenzpflichten (Art. 50 AI Act, AI-Generated-Label)." },
    en: {
      term: "Generative AI",
      short: "AI systems that produce new content — text, image, audio, video, code — based on learned data distributions.",
      long: "Current wave since ChatGPT (Nov 2022). Key technologies: LLMs for text/code, diffusion for image/video, flow-matching/AR for audio. Economic disruption: marketing, software, design, education, research. Legal hot topics: training-data copyright, output protectability, liability, transparency duties (Art. 50 AI Act, AI-generated labels)." }
  },

  { id: "prompt-engineering", category: "llm", risk: null,
    tags: ["#PromptEngineering", "#FewShot", "#CoT"],
    de: {
      term: "Prompt Engineering",
      short: "Disziplin, Eingaben (Prompts) so zu formulieren, dass ein Modell zuverlässig die gewünschten Antworten liefert.",
      long: "Techniken: klare Anweisungen, Beispielpaare (Few-Shot), Rollen-Prompts, Chain-of-Thought (\"Denk Schritt für Schritt\"), strukturierte Ausgaben (JSON, XML), ReAct, Tool-Calling. Grenzen: Robustheit gegen Prompt Injection, Distribution-Shift, Halluzinationen bleiben unabhängig vom Prompt-Design Risiken. Standard-Skill für moderne KI-Anwender, aber kein Ersatz für Fine-Tuning bei tieferer Anpassung." },
    en: {
      term: "Prompt Engineering",
      short: "The craft of phrasing inputs (prompts) so a model reliably produces desired answers.",
      long: "Techniques: clear instructions, exemplar pairs (few-shot), role prompts, chain-of-thought (\"Think step by step\"), structured outputs (JSON, XML), ReAct, tool calling. Limits: robustness against prompt injection, distribution shift, hallucinations remain risks regardless of prompt design. Now a standard skill but no substitute for fine-tuning when deeper adaptation is needed." },
    links: [
      { label: "Anthropic Prompting Docs", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" }
    ]
  },

  { id: "rag", category: "llm", risk: null,
    tags: ["#RAG", "#Retrieval", "#VectorDB"],
    de: {
      term: "RAG (Retrieval-Augmented Generation)",
      short: "Architekturmuster: LLM holt zur Antwortzeit relevante Dokumente aus einer Wissensquelle und nutzt sie als Kontext.",
      long: "Pipeline: Ingestion (Chunking, Embedding, Indexierung in Vektor-DB) → Retrieval (Query-Embedding, Top-K-Suche, optional Re-Ranker) → Augmentation (Kontext-Injection in Prompt) → Generation. Vorteile: aktuelle Daten ohne Re-Training, Quellenangabe möglich, weniger Halluzinationen. Erweiterungen: HyDE, Multi-Query, GraphRAG, Agentic RAG. Standard-Architektur für Unternehmens-Chatbots und Wissensmanagement." },
    en: {
      term: "Retrieval-Augmented Generation (RAG)",
      short: "Architecture pattern: at answer time, an LLM retrieves relevant documents and uses them as context.",
      long: "Pipeline: ingestion (chunking, embedding, indexing in a vector DB) → retrieval (query embedding, top-k search, optional re-ranker) → augmentation (context into prompt) → generation. Benefits: up-to-date data without re-training, source attribution, fewer hallucinations. Extensions: HyDE, multi-query, GraphRAG, agentic RAG. Standard for enterprise chatbots and knowledge management." },
    links: [
      { label: "Original RAG Paper", url: "https://arxiv.org/abs/2005.11401" }
    ]
  },

  { id: "fine-tuning", category: "llm", risk: null,
    tags: ["#FineTuning", "#LoRA", "#PEFT"],
    de: {
      term: "Fine-Tuning (Feinabstimmung)",
      short: "Weitertraining eines vortrainierten Modells auf domänenspezifischen Daten für bessere Performance bei spezifischen Aufgaben.",
      long: "Varianten: Full Fine-Tuning (alle Gewichte), Parameter-Efficient Fine-Tuning (PEFT) wie LoRA, QLoRA, Adapter (nur kleine Zusatzmatrizen). Spezialformen: Instruction-Tuning (Befehlsbefolgung), DPO (Direct Preference Optimization), RLHF. AI-Act-Implikationen: Wer ein GPAI-Modell wesentlich fine-tunet und unter eigenem Namen vermarktet, kann selbst zum Anbieter werden – Schwelle laut Erwägungsgrund 109: > 1/3 der ursprünglichen Trainings-FLOP." },
    en: {
      term: "Fine-Tuning",
      short: "Continued training of a pre-trained model on domain-specific data to improve performance on specific tasks.",
      long: "Variants: full fine-tuning (all weights), parameter-efficient fine-tuning (PEFT) such as LoRA, QLoRA, adapters. Special forms: instruction tuning, DPO (Direct Preference Optimization), RLHF. AI Act implications: substantial fine-tuning of a GPAI model marketed under one's own name can make the actor a provider — Recital 109 indicates > 1/3 of original training FLOPs as a threshold." },
    links: [
      { label: "LoRA paper", url: "https://arxiv.org/abs/2106.09685" }
    ]
  },

  { id: "rlhf", category: "llm", risk: null,
    tags: ["#RLHF", "#Alignment", "#PPO", "#DPO"],
    de: {
      term: "RLHF (Reinforcement Learning from Human Feedback)",
      short: "Methode, ein Sprachmodell mittels menschlicher Präferenzen an Hilfsbereitschaft, Wahrhaftigkeit und Schadlosigkeit auszurichten.",
      long: "Klassische Pipeline: (1) Supervised Fine-Tuning auf Demonstrationen, (2) Belohnungsmodell aus paarweisen Präferenzen trainieren, (3) Policy-Optimierung per PPO. Ohne RLHF wirken LLMs oft hilflos oder toxisch. Modernere Alternativen: Direct Preference Optimization (DPO), KTO, Constitutional AI (Anthropic). Verbunden mit Risiken: Reward Hacking, Sycophancy, eingeschränkte Diversität – aktive Forschungsfront im Alignment." },
    en: {
      term: "RLHF (Reinforcement Learning from Human Feedback)",
      short: "Method aligning a language model to helpfulness, truthfulness, and harmlessness via human preferences.",
      long: "Classical pipeline: (1) supervised fine-tuning on demonstrations, (2) reward model trained on pairwise preferences, (3) policy optimisation via PPO. Without RLHF, LLMs often appear unhelpful or toxic. Modern alternatives: Direct Preference Optimization (DPO), KTO, Constitutional AI (Anthropic). Risks: reward hacking, sycophancy, reduced diversity — active alignment frontier." },
    links: [
      { label: "InstructGPT paper", url: "https://arxiv.org/abs/2203.02155" }
    ]
  },

  { id: "halluzination", category: "llm", risk: null,
    tags: ["#Hallucination", "#Truthfulness", "#Risk"],
    de: {
      term: "Halluzination",
      short: "Plausible, aber sachlich falsche oder erfundene Aussagen eines KI-Modells – ein Kernrisiko generativer KI.",
      long: "Ursachen: Modelle sind Wahrscheinlichkeits-, keine Wahrheits-Optimierer; Trainingsdatenlücken; Distribution-Shift bei der Anfrage; Nutzerdruck (Sycophancy). Klassen: faktische Halluzinationen, Quellenfälschung, mathematische Fehler, halluzinierte Tool-Aufrufe. Gegenmaßnahmen: RAG mit Quellenangabe, Tool-Use, Confidence-Scores, externe Verifikation, RLHF, Output-Constraints. Gefährlich in juristischen, medizinischen, finanziellen Anwendungen – Anwaltskanzleien wurden bereits sanktioniert." },
    en: {
      term: "Hallucination",
      short: "Plausible but factually wrong or fabricated statements from an AI model — a core risk of generative AI.",
      long: "Causes: models optimise probability, not truth; training-data gaps; query-time distribution shift; user pressure (sycophancy). Classes: factual hallucinations, fake citations, math errors, hallucinated tool calls. Mitigations: RAG with citations, tool use, confidence scores, external verification, RLHF, output constraints. Dangerous in legal, medical, financial use — law firms have already been sanctioned." }
  },

  /* =================== NLP =================== */

  { id: "nlp", category: "nlp", risk: null,
    tags: ["#NLP", "#Language", "#BERT"],
    de: {
      term: "Verarbeitung natürlicher Sprache (NLP)",
      short: "Teilgebiet der KI für das Verstehen, Erzeugen und Übersetzen menschlicher Sprache durch Maschinen.",
      long: "Klassische Aufgaben: Tokenisierung, POS-Tagging, Parsing, Named Entity Recognition, Sentiment-Analyse, Maschinelle Übersetzung, Frage-Antwort, Zusammenfassung. Paradigmenwechsel: regelbasiert → statistisch (HMM, CRF) → neuronal (Word2Vec, LSTM) → Transformer (BERT, GPT). Heutiger Standard: vortrainierte Sprachmodelle, die meiste Aufgaben per Prompt oder leichtem Fine-Tuning lösen." },
    en: {
      term: "Natural Language Processing (NLP)",
      short: "AI subfield for machines to understand, generate, and translate human language.",
      long: "Classical tasks: tokenisation, POS tagging, parsing, named entity recognition, sentiment analysis, machine translation, question answering, summarisation. Paradigm shifts: rule-based → statistical (HMM, CRF) → neural (Word2Vec, LSTM) → transformers (BERT, GPT). Today's default: pre-trained language models solving most tasks via prompting or light fine-tuning." }
  },

  { id: "tokenization", category: "nlp", risk: null,
    tags: ["#Tokenization", "#BPE", "#Subword"],
    de: {
      term: "Tokenisierung",
      short: "Aufspaltung von Text in kleinere Einheiten (Tokens), die ein Modell verarbeitet – Wörter, Subwörter oder Zeichen.",
      long: "Moderne LLMs nutzen Subword-Tokenisierung (Byte-Pair Encoding, WordPiece, SentencePiece). Vorteile: Wortschatz-Effizienz, Umgang mit unbekannten Wörtern, sprachübergreifend. Wichtig: Modelle \"sehen\" Tokens, nicht Wörter – \"strawberry\" wird oft in mehrere Tokens zerlegt, was Buchstaben-Aufgaben erschwert. Tokenizer-Bias kann Sprachen mit kleineren Korpora benachteiligen (mehr Tokens pro Wort = teurer)." },
    en: {
      term: "Tokenization",
      short: "Splitting text into smaller units (tokens) for a model to process — words, subwords, or characters.",
      long: "Modern LLMs use subword tokenisation (Byte-Pair Encoding, WordPiece, SentencePiece). Benefits: vocabulary efficiency, handling of unknown words, cross-lingual coverage. Note: models \"see\" tokens, not words — \"strawberry\" often splits into several tokens, complicating character tasks. Tokenizer bias can disadvantage low-resource languages (more tokens per word = more expensive)." },
    links: [
      { label: "OpenAI Tokenizer", url: "https://platform.openai.com/tokenizer" }
    ]
  },

  /* =================== COMPUTER VISION =================== */

  { id: "computer-vision", category: "cv", risk: null,
    tags: ["#CV", "#Vision", "#ViT"],
    de: {
      term: "Computer Vision (Maschinelles Sehen)",
      short: "Teilgebiet der KI, das Maschinen ermöglicht, visuelle Inhalte zu interpretieren – Bilder, Video, 3D.",
      long: "Klassische Aufgaben: Bildklassifikation, Objekterkennung, Segmentierung, Tracking, Pose Estimation, OCR. Architekturen: CNNs (jahrzehntelang Standard), Vision Transformers (ViT, seit 2020), multimodal (CLIP, SAM). Anwendungen: autonomes Fahren, Medizin (Radiologie), Industrie (Qualitätskontrolle), Landwirtschaft. Brennpunkte unter dem AI Act: biometrische Identifizierung, Gesichtserkennung, Emotionserkennung." },
    en: {
      term: "Computer Vision",
      short: "AI subfield enabling machines to interpret visual content — images, video, 3D.",
      long: "Classical tasks: image classification, object detection, segmentation, tracking, pose estimation, OCR. Architectures: CNNs (long-standing default), Vision Transformers (ViT, since 2020), multimodal (CLIP, SAM). Applications: autonomous driving, medicine (radiology), industry (quality control), agriculture. AI Act focal points: biometric identification, facial recognition, emotion recognition." }
  },

  { id: "gesichtserkennung", category: "cv", risk: "prohibited",
    tags: ["#FacialRecognition", "#Biometric", "#Art5"],
    de: {
      term: "Gesichtserkennung",
      short: "Biometrische Identifikation oder Verifikation von Personen anhand ihres Gesichts. Im AI Act je nach Modus stark reguliert oder verboten.",
      long: "Drei Anwendungsmodi: (1) Echtzeit-Fernidentifikation im öffentlichen Raum für Strafverfolgung – grundsätzlich verboten (Art. 5(1)(h)), eng begrenzte Ausnahmen mit richterlicher Genehmigung. (2) Nachträgliche Identifikation – Hochrisiko-System nach Anhang III Nr. 1, mit zusätzlichen Schutzmaßnahmen. (3) Verifikation (1:1, Smartphone-Entsperrung) – meist Hochrisiko, je nach Kontext. Untargeted Scraping zum Aufbau von Gesichtsdatenbanken (Clearview AI) ist ebenfalls verboten." },
    en: {
      term: "Facial Recognition",
      short: "Biometric identification or verification of persons by their face. Heavily regulated or banned under the AI Act depending on mode.",
      long: "Three modes: (1) real-time remote identification in public spaces for law enforcement — generally prohibited (Art. 5(1)(h)), narrow exceptions with judicial authorisation. (2) Post-remote identification — high-risk under Annex III(1). (3) Verification (1:1, e.g. phone unlock) — mostly high-risk depending on context. Untargeted scraping to build facial databases (Clearview AI) is also prohibited." }
  },

  { id: "image-generation", category: "cv", risk: "limited",
    tags: ["#ImageGen", "#Diffusion", "#Art50"],
    de: {
      term: "Bildgenerierung",
      short: "Erzeugung neuer Bilder durch generative Modelle, vorwiegend Diffusion. Unterliegt Transparenzpflichten und Urheberrechtsfragen.",
      long: "Verfahren: Diffusion (Stable Diffusion, FLUX, Imagen), GANs (StyleGAN), VAE-basiert. Steuerung: Text-Prompts, ControlNet, IP-Adapter, Inpainting, Outpainting, LoRA-Stile. Ethische und rechtliche Fragen: Trainingsdaten-Lizenzen (Getty vs. Stability), Stilkopie lebender Künstler, Urheberrecht erzeugter Bilder, Deepfakes. AI-Act-Pflicht: maschinenlesbare Kennzeichnung KI-generierter Inhalte (Art. 50(2))." },
    en: {
      term: "Image Generation",
      short: "Producing new images via generative models, predominantly diffusion. Subject to transparency duties and copyright questions.",
      long: "Methods: diffusion (Stable Diffusion, FLUX, Imagen), GANs (StyleGAN), VAE-based. Control: text prompts, ControlNet, IP-Adapter, inpainting, outpainting, LoRA styles. Ethical and legal questions: training-data licensing (Getty vs. Stability), style mimicry of living artists, copyright of generated images, deepfakes. AI Act duty: machine-readable labelling of AI-generated content (Art. 50(2))." }
  },

  /* =================== ETHIK & FAIRNESS =================== */

  { id: "bias", category: "ethics", risk: null,
    tags: ["#Bias", "#Fairness", "#COMPAS"],
    de: {
      term: "Algorithmischer Bias",
      short: "Systematische Verzerrung in Vorhersagen oder Entscheidungen eines KI-Systems, die bestimmte Gruppen unverhältnismäßig benachteiligt.",
      long: "Quellen: historischer Bias (Daten spiegeln Diskriminierung wider), Repräsentationsbias (Untergruppen unterrepräsentiert), Messbias (fehlerhafte Labels), Aggregationsbias, Auswertungsbias, Deployment-Bias. Berühmte Fälle: COMPAS (Strafvollzug), Amazon-Recruiting (Frauenbenachteiligung), Apple Card (Geschlechter-Kreditlimits). Gegenmaßnahmen: diverse Datensätze, Reweighting, adversariales Debiasing, Fairness-Constraints, Audits, Monitoring im Einsatz." },
    en: {
      term: "Algorithmic Bias",
      short: "Systematic distortion in an AI system's predictions or decisions that disproportionately disadvantages specific groups.",
      long: "Sources: historical bias (data reflect discrimination), representation bias (subgroups underrepresented), measurement bias (mislabelled data), aggregation bias, evaluation bias, deployment bias. Notable cases: COMPAS (criminal justice), Amazon recruiting (penalising women), Apple Card (gender credit limits). Mitigations: diverse datasets, reweighting, adversarial debiasing, fairness constraints, audits, post-deployment monitoring." }
  },

  { id: "fairness", category: "ethics", risk: null,
    tags: ["#Fairness", "#Equity", "#Impossibility"],
    de: {
      term: "Fairness",
      short: "Eigenschaft eines KI-Systems, Entscheidungen ohne ungerechtfertigte Diskriminierung zu treffen. Mehrere mathematisch unverträgliche Definitionen.",
      long: "Drei Hauptkriterien: Demographic Parity (gleiche positive Rate über Gruppen), Equalized Odds (gleiche TPR/FPR), Predictive Parity (gleiche Präzision). Impossibility-Theorem (Chouldechova, Kleinberg): bei unterschiedlichen Basisraten können nicht alle drei gleichzeitig gelten – Wahl ist normativ. Werkzeuge: AIF360 (IBM), Fairlearn (Microsoft), What-If Tool. Rechtlicher Rahmen: AGG, AI Act Art. 10, GG Art. 3, EU-Charta Art. 21." },
    en: {
      term: "Fairness",
      short: "Property of an AI system to decide without unjustified discrimination. Multiple mathematically incompatible definitions.",
      long: "Three main criteria: demographic parity (equal positive rate across groups), equalized odds (equal TPR/FPR), predictive parity (equal precision). Impossibility theorem (Chouldechova, Kleinberg): with different base rates the three cannot all hold simultaneously — the choice is normative. Tools: AIF360 (IBM), Fairlearn (Microsoft), What-If Tool. Legal frame: anti-discrimination law, AI Act Art. 10, EU Charter Art. 21." },
    links: [
      { label: "Fairlearn", url: "https://fairlearn.org/" }
    ]
  },

  { id: "xai", category: "ethics", risk: null,
    tags: ["#XAI", "#Interpretability", "#SHAP"],
    de: {
      term: "Erklärbare KI (XAI)",
      short: "Methoden, Entscheidungen von KI-Modellen für Menschen nachvollziehbar zu machen.",
      long: "Zwei Ansätze: (1) interpretierbare Modelle (lineare Regression, Entscheidungsbäume) – Erklärung intrinsisch; (2) Post-hoc-Erklärungen für Black-Box-Modelle: SHAP (Shapley-Werte), LIME, Counterfactuals, Saliency Maps, Integrated Gradients. AI Act fordert Transparenz und Nachvollziehbarkeit für Hochrisiko-KI (Art. 13). DSGVO Art. 22 verlangt \"aussagekräftige Informationen über die Logik\" automatisierter Entscheidungen." },
    en: {
      term: "Explainable AI (XAI)",
      short: "Methods to make AI model decisions intelligible to humans.",
      long: "Two approaches: (1) interpretable models (linear regression, decision trees) — explanation is intrinsic; (2) post-hoc explanations for black-box models: SHAP (Shapley values), LIME, counterfactuals, saliency maps, integrated gradients. The AI Act requires transparency and interpretability for high-risk AI (Art. 13). GDPR Art. 22 requires \"meaningful information about the logic\" of automated decisions." }
  },

  { id: "deepfake", category: "ethics", risk: "limited",
    tags: ["#Deepfake", "#Disinformation", "#Art50"],
    de: {
      term: "Deepfake",
      short: "Synthetisches Bild-, Audio- oder Video-Material, das real wirkt, aber mittels generativer Modelle (GAN, Diffusion) erzeugt oder manipuliert wurde.",
      long: "Anwendungen: Film (Verjüngung, Synchronisation), Satire, Bildung – aber auch Desinformation, Wahlbeeinflussung, nicht-einvernehmliche Pornografie, Identitätsbetrug. AI Act Art. 50(4): Betreiber müssen Deepfakes als künstlich erzeugt offenlegen, mit Ausnahme künstlerisch-satirischer Werke (Kennzeichnung dann angepasst, ohne kreatives Erlebnis zu zerstören). Erkennung: forensische Analyse, Wasserzeichen (C2PA, SynthID). Strafrechtlich: §§ 22, 33 KunstUrhG, § 201a StGB." },
    en: {
      term: "Deepfake",
      short: "Synthetic image, audio, or video that appears real but was generated or manipulated by generative models (GAN, diffusion).",
      long: "Applications: film (de-aging, dubbing), satire, education — but also disinformation, election interference, non-consensual pornography, identity fraud. AI Act Art. 50(4): deployers must disclose deepfakes as artificially generated, with adapted disclosure for artistic/satirical works. Detection: forensic analysis, watermarking (C2PA, SynthID). Criminal law: e.g. German §§ 22, 33 KunstUrhG, § 201a StGB." },
    links: [
      { label: "C2PA Standard", url: "https://c2pa.org/" }
    ]
  },

  /* =================== GOVERNANCE =================== */

  { id: "dsgvo", category: "governance", risk: null,
    tags: ["#GDPR", "#DSGVO", "#Privacy", "#Art22"],
    de: {
      term: "DSGVO (GDPR)",
      short: "Datenschutz-Grundverordnung (VO (EU) 2016/679). Zentrales EU-Recht für die Verarbeitung personenbezogener Daten – auch im KI-Kontext.",
      long: "Schnittpunkte mit dem AI Act: (1) Art. 22 DSGVO – Recht auf Nicht-Unterwerfung unter rein automatisierte Entscheidungen mit Rechtswirkung; (2) Datenschutz-Folgenabschätzung (DPIA, Art. 35) ergänzt FRIA; (3) Rechtsgrundlagen für Trainingsdatenverarbeitung (Art. 6); (4) Privacy by Design (Art. 25); (5) Rechte Betroffener (Auskunft, Löschung, Widerspruch). Datenschutzbehörden gehen aktiv gegen LLM-Anbieter vor (Italien vs. ChatGPT 2023, Garante)." },
    en: {
      term: "GDPR",
      short: "General Data Protection Regulation (Regulation (EU) 2016/679). The EU's core regime for processing personal data — also in AI contexts.",
      long: "Intersections with the AI Act: (1) Art. 22 GDPR — right not to be subject to solely automated decisions with legal effect; (2) Data Protection Impact Assessment (DPIA, Art. 35) complements FRIA; (3) legal bases for training-data processing (Art. 6); (4) Privacy by Design (Art. 25); (5) data subject rights (access, erasure, objection). Data protection authorities actively act against LLM providers (Italy vs. ChatGPT 2023, Garante)." },
    links: [
      { label: "EUR-Lex DSGVO", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" }
    ]
  },

  { id: "iso-42001", category: "governance", risk: null,
    tags: ["#ISO42001", "#AIMS", "#Standard"],
    de: {
      term: "ISO/IEC 42001",
      short: "Internationale Norm für KI-Managementsysteme (AIMS), veröffentlicht Dezember 2023. Gegenstück zu ISO 9001 / 27001 für KI.",
      long: "Definiert Anforderungen an Aufbau, Implementierung, Aufrechterhaltung und kontinuierliche Verbesserung eines KI-Managementsystems. Zertifizierbar. Inhalte: Kontext der Organisation, Führung, Planung, Unterstützung, Betrieb, Bewertung, Verbesserung. Voraussichtliche Grundlage harmonisierter Normen unter dem AI Act (Standardisierungsanfrage CEN/CENELEC JTC 21). Praktischer Pfad zu nachweisbarer AI-Act-Compliance." },
    en: {
      term: "ISO/IEC 42001",
      short: "International standard for AI Management Systems (AIMS), published December 2023. Counterpart to ISO 9001 / 27001 for AI.",
      long: "Specifies requirements to establish, implement, maintain, and continually improve an AI management system. Certifiable. Contents: organisational context, leadership, planning, support, operation, evaluation, improvement. Likely foundation for harmonised standards under the AI Act (CEN/CENELEC JTC 21 standardisation request). A practical path to demonstrable AI Act compliance." },
    links: [
      { label: "ISO/IEC 42001", url: "https://www.iso.org/standard/81230.html" }
    ]
  },

  /* =================== SICHERHEIT =================== */

  { id: "prompt-injection", category: "security", risk: null,
    tags: ["#PromptInjection", "#OWASP", "#Security"],
    de: {
      term: "Prompt Injection",
      short: "Angriff, bei dem manipulative Anweisungen in Eingaben oder externen Daten ein LLM dazu bringen, ursprüngliche Vorgaben zu ignorieren.",
      long: "Zwei Hauptklassen: (1) Direct Injection – Nutzer schickt bösartigen Prompt; (2) Indirect Injection – Anweisungen versteckt in vom Modell gelesenen Daten (Webseite, E-Mail, PDF). Folgen: Datenexfiltration, unautorisierte Tool-Nutzung, Reputationsschaden. Top-Risiko in OWASP LLM Top 10. Gegenmaßnahmen: Privilegientrennung, Output-Filterung, Tool-Allowlists, Bestätigungsdialoge, robustes System-Prompt-Design – aber kein vollständiger Schutz." },
    en: {
      term: "Prompt Injection",
      short: "Attack where manipulative instructions in inputs or external data trick an LLM into ignoring original directives.",
      long: "Two main classes: (1) direct injection — user sends malicious prompt; (2) indirect injection — instructions hidden in data the model reads (web page, email, PDF). Consequences: data exfiltration, unauthorised tool use, reputational damage. Top risk in OWASP LLM Top 10. Mitigations: privilege separation, output filtering, tool allowlists, confirmation dialogues, robust system-prompt design — no complete protection." },
    links: [
      { label: "OWASP LLM Top 10", url: "https://genai.owasp.org/" }
    ]
  },

  { id: "adversarial", category: "security", risk: null,
    tags: ["#AdversarialAttack", "#Robustness"],
    de: {
      term: "Adversariale Angriffe",
      short: "Gezielt manipulierte Eingaben, die ein ML-Modell zu falschen Ausgaben verleiten – oft für Menschen unsichtbar.",
      long: "Klassen: Evasion (Inferenz-Zeit, FGSM, PGD), Poisoning (Trainings-Zeit), Model Extraction, Membership Inference, Model Inversion. Beispiel: minimal verändertes Stoppschild wird als Geschwindigkeitsbegrenzung klassifiziert. Verteidigung: Adversarial Training, Input-Vorverarbeitung, zertifizierte Robustheit, Ensembles. AI Act Art. 15 verlangt für Hochrisiko-KI angemessene Robustheit gegenüber solchen Angriffen." },
    en: {
      term: "Adversarial Attack",
      short: "Specifically crafted inputs that trick an ML model into wrong outputs — often imperceptible to humans.",
      long: "Classes: evasion (inference-time, FGSM, PGD), poisoning (training-time), model extraction, membership inference, model inversion. Example: minimally modified stop sign classified as speed limit. Defences: adversarial training, input preprocessing, certified robustness, ensembles. AI Act Art. 15 requires high-risk AI to be appropriately robust against such attacks." }
  },

  { id: "ai-red-teaming", category: "security", risk: null,
    tags: ["#RedTeaming", "#GPAI", "#Art55"],
    de: {
      term: "AI Red Teaming",
      short: "Strukturiertes adversariales Testen von KI-Systemen, um Schwachstellen, Missbrauchspotenzial und Sicherheitsprobleme aufzudecken.",
      long: "Stammt aus der Cybersicherheit, übertragen auf KI-Modelle. Methoden: manuelles Probing, automatisiertes Jailbreaking, Multi-Turn-Angriffe, Datenextraktions-Tests, Capability Evaluations. Pflicht für GPAI mit systemischem Risiko (Art. 55 AI Act). Etabliert bei OpenAI, Anthropic, Google DeepMind, Meta. Externe Red Teams (z. B. NIST, ARC, Apollo Research) ergänzen interne Tests." },
    en: {
      term: "AI Red Teaming",
      short: "Structured adversarial testing of AI systems to surface vulnerabilities, misuse potential, and safety issues.",
      long: "Originating in cybersecurity, transferred to AI models. Methods: manual probing, automated jailbreaking, multi-turn attacks, data-extraction tests, capability evaluations. Mandatory for GPAI with systemic risk (Art. 55 AI Act). Established at OpenAI, Anthropic, Google DeepMind, Meta. External red teams (e.g. NIST, ARC, Apollo Research) complement internal testing." }
  }

];
