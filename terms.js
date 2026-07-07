/* ==================================================================
   EU AI ACT GLOSSAR · DATENDATEI
   ------------------------------------------------------------------
   103 Begriffe · bilingual DE/EN
   Schema: { id, category, risk, tags[], de{term,short,long},
            en{term,short,long}, links[], related[] }
   Kategorien: ai-act-core | ml | dl | llm | nlp | cv | ethics | governance | security
   Risiko: prohibited | high | limited | minimal | systemic | null
================================================================== */

const TERMS = [

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
    links: [ { label: "EUR-Lex Volltext", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" }, { label: "AI Act Explorer", url: "https://artificialintelligenceact.eu/" } ],
    related: ["ki-system", "hochrisiko-ki", "gpai", "fristen-anwendung"] },

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
    links: [ { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" }, { label: "OECD AI Definition", url: "https://oecd.ai/en/ai-principles" } ],
    related: ["eu-ai-act", "ki", "gpai"] },

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
    links: [ { label: "Kapitel V AI Act", url: "https://artificialintelligenceact.eu/chapter/5/" }, { label: "GPAI Code of Practice", url: "https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice" } ],
    related: ["foundation-model", "systemisches-risiko", "downstream-anbieter", "bussgeld-gpai", "eu-ai-act"] },

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
    links: [ { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" }, { label: "Art. 25 AI Act", url: "https://artificialintelligenceact.eu/article/25/" } ],
    related: ["betreiber", "einfuehrer", "haendler", "provider-flip", "ki-kompetenz"] },

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
    links: [ { label: "Art. 26 AI Act", url: "https://artificialintelligenceact.eu/article/26/" }, { label: "Art. 27 AI Act – FRIA", url: "https://artificialintelligenceact.eu/article/27/" } ],
    related: ["anbieter", "fria", "menschliche-aufsicht", "erklaerungsrecht", "ki-kompetenz"] },

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
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["hochrisiko-ki", "gesichtserkennung", "anhang-ii"] },

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
    links: [ { label: "Art. 6 AI Act", url: "https://artificialintelligenceact.eu/article/6/" }, { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["anhang-iii", "konformitaetsbewertung", "risikomanagementsystem", "ce-kennzeichnung", "eu-ai-act"] },

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
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["transparenzpflichten", "deepfake", "hochrisiko-ki", "minimales-risiko"] },

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
    links: [ { label: "Art. 95 AI Act", url: "https://artificialintelligenceact.eu/article/95/" } ],
    related: ["begrenztes-risiko", "hochrisiko-ki"] },

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
    links: [ { label: "Art. 51 AI Act", url: "https://artificialintelligenceact.eu/article/51/" }, { label: "Art. 55 AI Act", url: "https://artificialintelligenceact.eu/article/55/" } ],
    related: ["gpai", "ai-red-teaming", "bussgeld-gpai"] },

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
    links: [ { label: "Art. 43 AI Act", url: "https://artificialintelligenceact.eu/article/43/" } ],
    related: ["ce-kennzeichnung", "notifizierte-stelle", "technische-dokumentation", "eu-konformitaetserklaerung", "hochrisiko-ki"] },

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
    links: [ { label: "Art. 48 AI Act", url: "https://artificialintelligenceact.eu/article/48/" } ],
    related: ["konformitaetsbewertung", "eu-konformitaetserklaerung", "hochrisiko-ki", "notifizierte-stelle"] },

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
    links: [ { label: "Art. 14 AI Act", url: "https://artificialintelligenceact.eu/article/14/" } ],
    related: ["betreiber", "hochrisiko-ki", "gebrauchsanweisung", "xai"] },

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
    links: [ { label: "Art. 4 AI Act", url: "https://artificialintelligenceact.eu/article/4/" }, { label: "AI Literacy Repository", url: "https://digital-strategy.ec.europa.eu/en/library/living-repository-foster-learning-and-exchange-ai-literacy" } ],
    related: ["anbieter", "betreiber"] },

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
    links: [ { label: "European AI Office", url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office" } ],
    related: ["bussgeld-gpai", "gpai", "marktueberwachung", "reallabor"] },

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
    links: [ { label: "Art. 27 AI Act", url: "https://artificialintelligenceact.eu/article/27/" } ],
    related: ["betreiber", "dsgvo-schnittstelle", "betroffene-person", "dsgvo", "arbeitsrecht-schnittstelle"] },

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
    links: [ { label: "Art. 57 AI Act", url: "https://artificialintelligenceact.eu/article/57/" } ],
    related: ["kmu", "ai-office"] },

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
    links: [ { label: "Art. 13 AI Act", url: "https://artificialintelligenceact.eu/article/13/" }, { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["begrenztes-risiko", "deepfake", "image-generation", "eu-datenbank", "gebrauchsanweisung"] },

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
    links: [ { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" } ],
    related: ["ki-system", "ml", "deep-learning"] },

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
    links: [ { label: "Mitchell, Machine Learning (1997)", url: "https://www.cs.cmu.edu/~tom/mlbook.html" } ],
    related: ["ki", "ueberwacht", "unueberwacht", "rl", "overfitting"] },

  { id: "ueberwacht", category: "ml", risk: null,
    tags: ["#Supervised", "#Labels", "#Classification"],
    de: {
      term: "Überwachtes Lernen",
      short: "Lernen aus gelabelten Daten (Eingabe → Ziel-Ausgabe). Klassische Aufgaben: Klassifikation und Regression.",
      long: "Der Algorithmus erhält Trainingsbeispiele mit bekannten Antworten und sucht eine Funktion, die neue Beispiele möglichst korrekt abbildet. Beispiele: Spam-Klassifikation, Bildkategorisierung, Hauspreisvorhersage. Datenqualität ist entscheidend – Labels-Bias überträgt sich direkt ins Modell. Datensatz wird üblich aufgeteilt in Trainings-, Validierungs- und Testdaten (z. B. 70/15/15)." },
    en: {
      term: "Supervised Learning",
      short: "Learning from labelled data (input → target output). Classical tasks: classification and regression.",
      long: "The algorithm receives training examples with known answers and seeks a function mapping new examples as accurately as possible. Examples: spam classification, image categorisation, house price prediction. Data quality is decisive — label bias transfers directly to the model. Datasets are typically split into training, validation, and test sets (e.g. 70/15/15)." },
    related: ["ml", "unueberwacht", "trainingsdaten"] },

  { id: "unueberwacht", category: "ml", risk: null,
    tags: ["#Unsupervised", "#Clustering", "#PCA"],
    de: {
      term: "Unüberwachtes Lernen",
      short: "Lernen aus ungelabelten Daten – Ziel: Strukturen entdecken, etwa Cluster, latente Faktoren oder Anomalien.",
      long: "Aufgabentypen: Clustering (k-Means, DBSCAN, Hierarchical), Dimensionsreduktion (PCA, t-SNE, UMAP), Anomalie-Erkennung, Assoziationsregeln. Anwendungen: Kundensegmentierung, Datenexploration, Vorverarbeitung. Bewertung schwieriger als bei überwachtem Lernen, da keine Ground Truth vorliegt – Metriken wie Silhouette Score, Davies-Bouldin oder domänenspezifische Validierung." },
    en: {
      term: "Unsupervised Learning",
      short: "Learning from unlabelled data — goal: discover structure such as clusters, latent factors, or anomalies.",
      long: "Tasks: clustering (k-Means, DBSCAN, hierarchical), dimensionality reduction (PCA, t-SNE, UMAP), anomaly detection, association rules. Applications: customer segmentation, data exploration, preprocessing. Evaluation is harder than supervised learning since no ground truth exists — metrics include Silhouette Score, Davies-Bouldin, or domain-specific validation." },
    related: ["ml", "ueberwacht"] },

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
    links: [ { label: "Sutton & Barto, RL Book", url: "http://incompleteideas.net/book/the-book.html" } ],
    related: ["ml", "rlhf"] },

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
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["daten-governance", "overfitting", "bias", "ueberwacht"] },

  { id: "overfitting", category: "ml", risk: null,
    tags: ["#Overfitting", "#Regularization", "#Generalization"],
    de: {
      term: "Overfitting (Überanpassung)",
      short: "Das Modell lernt Trainingsdaten samt Rauschen auswendig und generalisiert schlecht auf neue Daten.",
      long: "Symptome: deutlich höhere Trainings- als Testgenauigkeit. Ursachen: zu komplexes Modell, zu wenige Daten, zu langes Training. Gegenmittel: Regularisierung (L1/L2, Dropout), Early Stopping, Datenaugmentierung, mehr/diversere Daten, einfachere Architekturen, Cross-Validation. Pendant: Underfitting – Modell zu simpel, lernt selbst Trainingsdaten nicht." },
    en: {
      term: "Overfitting",
      short: "Model memorises training data plus noise and generalises poorly to unseen data.",
      long: "Symptoms: train accuracy far above test accuracy. Causes: model too complex, too few data, training too long. Remedies: regularisation (L1/L2, dropout), early stopping, data augmentation, more/diverse data, simpler architectures, cross-validation. Counterpart: underfitting — model too simple to fit even training data." },
    related: ["trainingsdaten", "ml"] },

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
    links: [ { label: "Goodfellow et al., Deep Learning Book", url: "https://www.deeplearningbook.org/" } ],
    related: ["nn", "cnn", "transformer", "ki"] },

  { id: "nn", category: "dl", risk: null,
    tags: ["#NeuralNet", "#Perceptron", "#ReLU"],
    de: {
      term: "Neuronales Netz",
      short: "Aus künstlichen Neuronen aufgebautes Modell, lose inspiriert vom biologischen Gehirn. Schichten von Knoten transformieren Eingaben in Ausgaben.",
      long: "Grundbaustein: künstliches Neuron mit gewichteten Eingaben, Bias, Aktivierungsfunktion (ReLU, Sigmoid, Tanh). Topologie: Eingabe-, Hidden-, Ausgabeschicht; bei \"deep\" mehrere Hidden Layer. Lernverfahren: Forward Pass, Loss-Berechnung, Backpropagation, Gewichtsaktualisierung per Gradient Descent. Universal Approximation Theorem: Schon ein Hidden Layer kann theoretisch beliebige stetige Funktionen approximieren – Tiefe verbessert Repräsentationskraft in der Praxis." },
    en: {
      term: "Neural Network",
      short: "Model composed of artificial neurons, loosely inspired by the biological brain. Layers of nodes transform inputs into outputs.",
      long: "Building block: artificial neuron with weighted inputs, bias, activation function (ReLU, sigmoid, tanh). Topology: input, hidden, output layers; \"deep\" means multiple hidden layers. Training: forward pass, loss computation, backpropagation, weight update via gradient descent. Universal Approximation Theorem: a single hidden layer can in principle approximate any continuous function — depth improves representational power in practice." },
    related: ["deep-learning", "cnn", "transformer"] },

  { id: "cnn", category: "dl", risk: null,
    tags: ["#CNN", "#Convolution", "#ResNet"],
    de: {
      term: "Faltungsnetzwerk (CNN)",
      short: "Convolutional Neural Network. Spezialisiert auf gitterartige Daten (Bilder, Audio-Spektrogramme) durch lokale Filter und räumliche Hierarchie.",
      long: "Kernideen: lokale Konnektivität, Gewichts-Sharing, Translation-Invarianz. Schichttypen: Convolution, Pooling, vollständig verbundene Schichten. Meilensteine: LeNet (1998), AlexNet (2012), VGG, ResNet (Skip Connections), EfficientNet. Heute teils abgelöst durch Vision Transformers (ViT), aber für viele Praxis-Aufgaben weiterhin Standard wegen Effizienz und kleinerer Datenanforderungen." },
    en: {
      term: "Convolutional Neural Network (CNN)",
      short: "Specialised for grid-like data (images, audio spectrograms) via local filters and spatial hierarchy.",
      long: "Core ideas: local connectivity, weight sharing, translation invariance. Layer types: convolution, pooling, fully connected. Milestones: LeNet (1998), AlexNet (2012), VGG, ResNet (skip connections), EfficientNet. Partly displaced by Vision Transformers (ViT), but still standard for many practical tasks due to efficiency and lower data requirements." },
    related: ["deep-learning", "computer-vision", "nn"] },

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
    links: [ { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" } ],
    related: ["llm", "embedding", "deep-learning", "nn"] },

  { id: "embedding", category: "dl", risk: null,
    tags: ["#Embedding", "#Vectors", "#Word2Vec"],
    de: {
      term: "Embedding (Einbettung)",
      short: "Dichte Vektor-Repräsentation diskreter Objekte (Wörter, Bilder, Nutzer) in einem semantischen Raum, in dem Ähnlichkeit messbar ist.",
      long: "Pioniere im NLP: Word2Vec (2013), GloVe, FastText. Modern: kontextuelle Embeddings aus BERT, Sentence-Transformers, multimodale Embeddings (CLIP). Anwendungen: Suche, Empfehlungen, Clustering, RAG-Pipelines. Vektor-Datenbanken (Pinecone, Weaviate, Milvus, pgvector) speichern Embeddings für schnelle Nearest-Neighbor-Suche." },
    en: {
      term: "Embedding",
      short: "Dense vector representation of discrete objects (words, images, users) in a semantic space where similarity is measurable.",
      long: "NLP pioneers: Word2Vec (2013), GloVe, FastText. Modern: contextual embeddings from BERT, Sentence-Transformers, multimodal embeddings (CLIP). Applications: search, recommendation, clustering, RAG pipelines. Vector databases (Pinecone, Weaviate, Milvus, pgvector) store embeddings for fast nearest-neighbour search." },
    related: ["transformer", "rag", "nlp", "tokenization"] },

  { id: "diffusion", category: "dl", risk: null,
    tags: ["#Diffusion", "#StableDiffusion", "#Generative"],
    de: {
      term: "Diffusionsmodell",
      short: "Generative Modellklasse, die schrittweise Rauschen in strukturierte Daten umkehrt – State of the Art für Bildgenerierung.",
      long: "Forward-Prozess fügt iterativ Gauß-Rauschen hinzu, das Modell lernt den umgekehrten Denoising-Prozess. Bekannte Modelle: Stable Diffusion, Midjourney, DALL-E, Sora (Video). Konkurrenz zu GANs, oft trainingsstabiler und qualitativ überlegen. Latente Diffusion (auf VAE-Latents) reduziert Rechenkosten drastisch. Steuerung über Text-Embeddings (CLIP) und Conditioning (ControlNet, IP-Adapter)." },
    en: {
      term: "Diffusion Model",
      short: "Generative model class iteratively reversing noise into structured data — state of the art for image generation.",
      long: "Forward process adds Gaussian noise; the model learns the reverse denoising process. Notable models: Stable Diffusion, Midjourney, DALL-E, Sora (video). Competing with GANs, often more stable to train and qualitatively superior. Latent diffusion (on VAE latents) drastically reduces compute. Control via text embeddings (CLIP) and conditioning (ControlNet, IP-Adapter)." },
    related: ["image-generation", "generative-ai"] },

  { id: "llm", category: "llm", risk: null,
    tags: ["#LLM", "#GPT", "#FoundationModel"],
    de: {
      term: "Großes Sprachmodell (LLM)",
      short: "Auf riesigen Textmengen trainiertes Transformer-basiertes Modell mit Milliarden Parametern, das Sprache versteht und generiert.",
      long: "Beispiele: GPT-4o, Claude, Llama, Gemini, Mistral, Qwen. Training: Self-Supervised auf Web-Korpus (Pretraining), gefolgt von Fine-Tuning und RLHF/DPO. Fähigkeiten skalieren mit Parametern, Daten und Compute (Scaling Laws). Limitationen: Halluzinationen, fehlendes Echtzeit-Wissen, Kontextfenster. Unter dem AI Act in der Regel als GPAI-Modell eingestuft, ab 10^25 FLOP mit systemischem Risiko." },
    en: {
      term: "Large Language Model (LLM)",
      short: "Transformer-based model with billions of parameters, trained on vast text corpora, that understands and generates language.",
      long: "Examples: GPT-4o, Claude, Llama, Gemini, Mistral, Qwen. Training: self-supervised on web corpora (pretraining), followed by fine-tuning and RLHF/DPO. Capabilities scale with parameters, data, and compute (scaling laws). Limitations: hallucinations, no real-time knowledge, context window. Under the AI Act, typically classified as GPAI; above 10^25 FLOPs as GPAI with systemic risk." },
    related: ["foundation-model", "gpai", "transformer", "prompt-engineering", "generative-ai"] },

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
    links: [ { label: "Bommasani et al. (Stanford CRFM)", url: "https://arxiv.org/abs/2108.07258" } ],
    related: ["llm", "gpai", "generative-ai", "fine-tuning", "downstream-anbieter"] },

  { id: "generative-ai", category: "llm", risk: null,
    tags: ["#GenAI", "#ChatGPT", "#Generation"],
    de: {
      term: "Generative KI",
      short: "KI-Systeme, die neue Inhalte erzeugen – Text, Bild, Audio, Video, Code – auf Basis erlernter Datenverteilungen.",
      long: "Aktuelle Welle seit ChatGPT (Nov 2022). Schlüsseltechnologien: LLMs für Text/Code, Diffusion für Bild/Video, Flow-Matching/AR für Audio. Wirtschaftliche Disruption: Marketing, Software, Design, Bildung, Forschung. Rechtliche Brennpunkte: Urheberrecht der Trainingsdaten, Output-Schutzfähigkeit, Haftung, Transparenzpflichten (Art. 50 AI Act, AI-Generated-Label)." },
    en: {
      term: "Generative AI",
      short: "AI systems that produce new content — text, image, audio, video, code — based on learned data distributions.",
      long: "Current wave since ChatGPT (Nov 2022). Key technologies: LLMs for text/code, diffusion for image/video, flow-matching/AR for audio. Economic disruption: marketing, software, design, education, research. Legal hot topics: training-data copyright, output protectability, liability, transparency duties (Art. 50 AI Act, AI-generated labels)." },
    related: ["llm", "diffusion", "deepfake", "image-generation", "foundation-model"] },

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
    links: [ { label: "Anthropic Prompting Docs", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" } ],
    related: ["llm", "prompt-injection", "rag"] },

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
    links: [ { label: "Original RAG Paper", url: "https://arxiv.org/abs/2005.11401" } ],
    related: ["embedding", "llm", "halluzination", "prompt-engineering"] },

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
    links: [ { label: "LoRA paper", url: "https://arxiv.org/abs/2106.09685" } ],
    related: ["llm", "rlhf", "foundation-model"] },

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
    links: [ { label: "InstructGPT paper", url: "https://arxiv.org/abs/2203.02155" } ],
    related: ["fine-tuning", "rl", "llm"] },

  { id: "halluzination", category: "llm", risk: null,
    tags: ["#Hallucination", "#Truthfulness", "#Risk"],
    de: {
      term: "Halluzination",
      short: "Plausible, aber sachlich falsche oder erfundene Aussagen eines KI-Modells – ein Kernrisiko generativer KI.",
      long: "Ursachen: Modelle sind Wahrscheinlichkeits-, keine Wahrheits-Optimierer; Trainingsdatenlücken; Distribution-Shift bei der Anfrage; Nutzerdruck (Sycophancy). Klassen: faktische Halluzinationen, Quellenfälschung, mathematische Fehler, halluzinierte Tool-Aufrufe. Gegenmaßnahmen: RAG mit Quellenangabe, Tool-Use, Confidence-Scores, externe Verifikation, RLHF, Output-Constraints. Gefährlich in juristischen, medizinischen, finanziellen Anwendungen – Anwaltskanzleien wurden bereits sanktioniert." },
    en: {
      term: "Hallucination",
      short: "Plausible but factually wrong or fabricated statements from an AI model — a core risk of generative AI.",
      long: "Causes: models optimise probability, not truth; training-data gaps; query-time distribution shift; user pressure (sycophancy). Classes: factual hallucinations, fake citations, math errors, hallucinated tool calls. Mitigations: RAG with citations, tool use, confidence scores, external verification, RLHF, output constraints. Dangerous in legal, medical, financial use — law firms have already been sanctioned." },
    related: ["rag", "llm"] },

  { id: "nlp", category: "nlp", risk: null,
    tags: ["#NLP", "#Language", "#BERT"],
    de: {
      term: "Verarbeitung natürlicher Sprache (NLP)",
      short: "Teilgebiet der KI für das Verstehen, Erzeugen und Übersetzen menschlicher Sprache durch Maschinen.",
      long: "Klassische Aufgaben: Tokenisierung, POS-Tagging, Parsing, Named Entity Recognition, Sentiment-Analyse, Maschinelle Übersetzung, Frage-Antwort, Zusammenfassung. Paradigmenwechsel: regelbasiert → statistisch (HMM, CRF) → neuronal (Word2Vec, LSTM) → Transformer (BERT, GPT). Heutiger Standard: vortrainierte Sprachmodelle, die meiste Aufgaben per Prompt oder leichtem Fine-Tuning lösen." },
    en: {
      term: "Natural Language Processing (NLP)",
      short: "AI subfield for machines to understand, generate, and translate human language.",
      long: "Classical tasks: tokenisation, POS tagging, parsing, named entity recognition, sentiment analysis, machine translation, question answering, summarisation. Paradigm shifts: rule-based → statistical (HMM, CRF) → neural (Word2Vec, LSTM) → transformers (BERT, GPT). Today's default: pre-trained language models solving most tasks via prompting or light fine-tuning." },
    related: ["tokenization", "embedding", "llm"] },

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
    links: [ { label: "OpenAI Tokenizer", url: "https://platform.openai.com/tokenizer" } ],
    related: ["nlp", "embedding", "llm"] },

  { id: "computer-vision", category: "cv", risk: null,
    tags: ["#CV", "#Vision", "#ViT"],
    de: {
      term: "Computer Vision (Maschinelles Sehen)",
      short: "Teilgebiet der KI, das Maschinen ermöglicht, visuelle Inhalte zu interpretieren – Bilder, Video, 3D.",
      long: "Klassische Aufgaben: Bildklassifikation, Objekterkennung, Segmentierung, Tracking, Pose Estimation, OCR. Architekturen: CNNs (jahrzehntelang Standard), Vision Transformers (ViT, seit 2020), multimodal (CLIP, SAM). Anwendungen: autonomes Fahren, Medizin (Radiologie), Industrie (Qualitätskontrolle), Landwirtschaft. Brennpunkte unter dem AI Act: biometrische Identifizierung, Gesichtserkennung, Emotionserkennung." },
    en: {
      term: "Computer Vision",
      short: "AI subfield enabling machines to interpret visual content — images, video, 3D.",
      long: "Classical tasks: image classification, object detection, segmentation, tracking, pose estimation, OCR. Architectures: CNNs (long-standing default), Vision Transformers (ViT, since 2020), multimodal (CLIP, SAM). Applications: autonomous driving, medicine (radiology), industry (quality control), agriculture. AI Act focal points: biometric identification, facial recognition, emotion recognition." },
    related: ["cnn", "gesichtserkennung", "image-generation"] },

  { id: "gesichtserkennung", category: "cv", risk: "prohibited",
    tags: ["#FacialRecognition", "#Biometric", "#Art5"],
    de: {
      term: "Gesichtserkennung",
      short: "Biometrische Identifikation oder Verifikation von Personen anhand ihres Gesichts. Im AI Act je nach Modus stark reguliert oder verboten.",
      long: "Drei Anwendungsmodi: (1) Echtzeit-Fernidentifikation im öffentlichen Raum für Strafverfolgung – grundsätzlich verboten (Art. 5(1)(h)), eng begrenzte Ausnahmen mit richterlicher Genehmigung. (2) Nachträgliche Identifikation – Hochrisiko-System nach Anhang III Nr. 1, mit zusätzlichen Schutzmaßnahmen. (3) Verifikation (1:1, Smartphone-Entsperrung) – meist Hochrisiko, je nach Kontext. Untargeted Scraping zum Aufbau von Gesichtsdatenbanken (Clearview AI) ist ebenfalls verboten." },
    en: {
      term: "Facial Recognition",
      short: "Biometric identification or verification of persons by their face. Heavily regulated or banned under the AI Act depending on mode.",
      long: "Three modes: (1) real-time remote identification in public spaces for law enforcement — generally prohibited (Art. 5(1)(h)), narrow exceptions with judicial authorisation. (2) Post-remote identification — high-risk under Annex III(1). (3) Verification (1:1, e.g. phone unlock) — mostly high-risk depending on context. Untargeted scraping to build facial databases (Clearview AI) is also prohibited." },
    related: ["verbotene-praktiken", "computer-vision", "anhang-iii", "anhang-ii"] },

  { id: "image-generation", category: "cv", risk: "limited",
    tags: ["#ImageGen", "#Diffusion", "#Art50"],
    de: {
      term: "Bildgenerierung",
      short: "Erzeugung neuer Bilder durch generative Modelle, vorwiegend Diffusion. Unterliegt Transparenzpflichten und Urheberrechtsfragen.",
      long: "Verfahren: Diffusion (Stable Diffusion, FLUX, Imagen), GANs (StyleGAN), VAE-basiert. Steuerung: Text-Prompts, ControlNet, IP-Adapter, Inpainting, Outpainting, LoRA-Stile. Ethische und rechtliche Fragen: Trainingsdaten-Lizenzen (Getty vs. Stability), Stilkopie lebender Künstler, Urheberrecht erzeugter Bilder, Deepfakes. AI-Act-Pflicht: maschinenlesbare Kennzeichnung KI-generierter Inhalte (Art. 50(2))." },
    en: {
      term: "Image Generation",
      short: "Producing new images via generative models, predominantly diffusion. Subject to transparency duties and copyright questions.",
      long: "Methods: diffusion (Stable Diffusion, FLUX, Imagen), GANs (StyleGAN), VAE-based. Control: text prompts, ControlNet, IP-Adapter, inpainting, outpainting, LoRA styles. Ethical and legal questions: training-data licensing (Getty vs. Stability), style mimicry of living artists, copyright of generated images, deepfakes. AI Act duty: machine-readable labelling of AI-generated content (Art. 50(2))." },
    related: ["diffusion", "generative-ai", "transparenzpflichten", "computer-vision"] },

  { id: "bias", category: "ethics", risk: null,
    tags: ["#Bias", "#Fairness", "#COMPAS"],
    de: {
      term: "Algorithmischer Bias",
      short: "Systematische Verzerrung in Vorhersagen oder Entscheidungen eines KI-Systems, die bestimmte Gruppen unverhältnismäßig benachteiligt.",
      long: "Quellen: historischer Bias (Daten spiegeln Diskriminierung wider), Repräsentationsbias (Untergruppen unterrepräsentiert), Messbias (fehlerhafte Labels), Aggregationsbias, Auswertungsbias, Deployment-Bias. Berühmte Fälle: COMPAS (Strafvollzug), Amazon-Recruiting (Frauenbenachteiligung), Apple Card (Geschlechter-Kreditlimits). Gegenmaßnahmen: diverse Datensätze, Reweighting, adversariales Debiasing, Fairness-Constraints, Audits, Monitoring im Einsatz." },
    en: {
      term: "Algorithmic Bias",
      short: "Systematic distortion in an AI system's predictions or decisions that disproportionately disadvantages specific groups.",
      long: "Sources: historical bias (data reflect discrimination), representation bias (subgroups underrepresented), measurement bias (mislabelled data), aggregation bias, evaluation bias, deployment bias. Notable cases: COMPAS (criminal justice), Amazon recruiting (penalising women), Apple Card (gender credit limits). Mitigations: diverse datasets, reweighting, adversarial debiasing, fairness constraints, audits, post-deployment monitoring." },
    related: ["fairness", "daten-governance", "trainingsdaten"] },

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
    links: [ { label: "Fairlearn", url: "https://fairlearn.org/" } ],
    related: ["bias", "xai"] },

  { id: "xai", category: "ethics", risk: null,
    tags: ["#XAI", "#Interpretability", "#SHAP"],
    de: {
      term: "Erklärbare KI (XAI)",
      short: "Methoden, Entscheidungen von KI-Modellen für Menschen nachvollziehbar zu machen.",
      long: "Zwei Ansätze: (1) interpretierbare Modelle (lineare Regression, Entscheidungsbäume) – Erklärung intrinsisch; (2) Post-hoc-Erklärungen für Black-Box-Modelle: SHAP (Shapley-Werte), LIME, Counterfactuals, Saliency Maps, Integrated Gradients. AI Act fordert Transparenz und Nachvollziehbarkeit für Hochrisiko-KI (Art. 13). DSGVO Art. 22 verlangt \"aussagekräftige Informationen über die Logik\" automatisierter Entscheidungen." },
    en: {
      term: "Explainable AI (XAI)",
      short: "Methods to make AI model decisions intelligible to humans.",
      long: "Two approaches: (1) interpretable models (linear regression, decision trees) — explanation is intrinsic; (2) post-hoc explanations for black-box models: SHAP (Shapley values), LIME, counterfactuals, saliency maps, integrated gradients. The AI Act requires transparency and interpretability for high-risk AI (Art. 13). GDPR Art. 22 requires \"meaningful information about the logic\" of automated decisions." },
    related: ["fairness", "menschliche-aufsicht"] },

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
    links: [ { label: "C2PA Standard", url: "https://c2pa.org/" } ],
    related: ["generative-ai", "transparenzpflichten", "begrenztes-risiko", "dsa-schnittstelle"] },

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
    links: [ { label: "EUR-Lex DSGVO", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" } ],
    related: ["dsgvo-schnittstelle", "fria", "erklaerungsrecht"] },

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
    links: [ { label: "ISO/IEC 42001", url: "https://www.iso.org/standard/81230.html" } ],
    related: ["harmonisierte-normen", "konformitaetsbewertung", "risikomanagementsystem"] },

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
    links: [ { label: "OWASP LLM Top 10", url: "https://genai.owasp.org/" } ],
    related: ["prompt-engineering", "adversarial", "ai-red-teaming"] },

  { id: "adversarial", category: "security", risk: null,
    tags: ["#AdversarialAttack", "#Robustness"],
    de: {
      term: "Adversariale Angriffe",
      short: "Gezielt manipulierte Eingaben, die ein ML-Modell zu falschen Ausgaben verleiten – oft für Menschen unsichtbar.",
      long: "Klassen: Evasion (Inferenz-Zeit, FGSM, PGD), Poisoning (Trainings-Zeit), Model Extraction, Membership Inference, Model Inversion. Beispiel: minimal verändertes Stoppschild wird als Geschwindigkeitsbegrenzung klassifiziert. Verteidigung: Adversarial Training, Input-Vorverarbeitung, zertifizierte Robustheit, Ensembles. AI Act Art. 15 verlangt für Hochrisiko-KI angemessene Robustheit gegenüber solchen Angriffen." },
    en: {
      term: "Adversarial Attack",
      short: "Specifically crafted inputs that trick an ML model into wrong outputs — often imperceptible to humans.",
      long: "Classes: evasion (inference-time, FGSM, PGD), poisoning (training-time), model extraction, membership inference, model inversion. Example: minimally modified stop sign classified as speed limit. Defences: adversarial training, input preprocessing, certified robustness, ensembles. AI Act Art. 15 requires high-risk AI to be appropriately robust against such attacks." },
    related: ["prompt-injection", "ai-red-teaming", "genauigkeit-robustheit"] },

  { id: "ai-red-teaming", category: "security", risk: null,
    tags: ["#RedTeaming", "#GPAI", "#Art55"],
    de: {
      term: "AI Red Teaming",
      short: "Strukturiertes adversariales Testen von KI-Systemen, um Schwachstellen, Missbrauchspotenzial und Sicherheitsprobleme aufzudecken.",
      long: "Stammt aus der Cybersicherheit, übertragen auf KI-Modelle. Methoden: manuelles Probing, automatisiertes Jailbreaking, Multi-Turn-Angriffe, Datenextraktions-Tests, Capability Evaluations. Pflicht für GPAI mit systemischem Risiko (Art. 55 AI Act). Etabliert bei OpenAI, Anthropic, Google DeepMind, Meta. Externe Red Teams (z. B. NIST, ARC, Apollo Research) ergänzen interne Tests." },
    en: {
      term: "AI Red Teaming",
      short: "Structured adversarial testing of AI systems to surface vulnerabilities, misuse potential, and safety issues.",
      long: "Originating in cybersecurity, transferred to AI models. Methods: manual probing, automated jailbreaking, multi-turn attacks, data-extraction tests, capability evaluations. Mandatory for GPAI with systemic risk (Art. 55 AI Act). Established at OpenAI, Anthropic, Google DeepMind, Meta. External red teams (e.g. NIST, ARC, Apollo Research) complement internal testing." },
    related: ["systemisches-risiko", "adversarial", "prompt-injection"] },

  { id: "einfuehrer", category: "ai-act-core", risk: null,
    tags: ["#Importer", "#Akteur", "#Art23", "#Wertschoepfungskette"],
    de: {
      term: "Einführer",
      short: "In der EU niedergelassene Person, die ein KI-System auf den Markt bringt, das den Namen oder das Zeichen einer außerhalb der EU niedergelassenen Person trägt (Art. 3 Nr. 6).",
      long: "Der Einführer (\"importer\") prüft vor dem Inverkehrbringen, ob der Drittland-Anbieter die Konformitätsbewertung durchgeführt hat, ob technische Dokumentation und CE-Kennzeichnung vorliegen und ob ein Bevollmächtigter benannt wurde. Pflichten in Art. 23: Aufbewahrung von Unterlagen 10 Jahre, Identifizierung am System, Kooperation mit Marktüberwachungsbehörden. Bei Zweifeln an der Konformität darf das System nicht in Verkehr gebracht werden – schwerwiegende Risiken sind zu melden." },
    en: {
      term: "Importer",
      short: "Person established in the EU placing on the market an AI system that bears the name or trademark of a person established outside the EU (Art. 3(6)).",
      long: "The importer must verify before placing on the market that the third-country provider performed conformity assessment, that technical documentation and CE marking are in place, and that an authorised representative has been designated. Duties in Art. 23: retain documentation for 10 years, identify itself on the system, cooperate with market surveillance authorities. Systems suspected of non-conformity must not be placed on the market; serious risks must be reported." },
    links: [ { label: "Art. 23 AI Act", url: "https://artificialintelligenceact.eu/article/23/" } ],
    related: ["haendler", "bevollmaechtigter", "anbieter"] },

  { id: "haendler", category: "ai-act-core", risk: null,
    tags: ["#Distributor", "#Akteur", "#Art24"],
    de: {
      term: "Händler",
      short: "Natürliche oder juristische Person in der Lieferkette (außer Anbieter und Einführer), die ein KI-System auf dem EU-Markt bereitstellt (Art. 3 Nr. 7).",
      long: "Händler müssen vor Bereitstellung prüfen, ob CE-Kennzeichnung, EU-Konformitätserklärung und Gebrauchsanweisung vorhanden sind und ob Anbieter und ggf. Einführer ihre Pflichten erfüllt haben (Art. 24). Bei Konformitätsverdacht: Bereitstellung aussetzen, Anbieter/Einführer und Behörden informieren. Wer ein Hochrisiko-System wesentlich verändert oder unter eigenem Namen vertreibt, wird selbst zum Anbieter (Art. 25 – \"Provider Flip\")." },
    en: {
      term: "Distributor",
      short: "Natural or legal person in the supply chain (other than provider or importer) that makes an AI system available on the EU market (Art. 3(7)).",
      long: "Distributors must verify before making available that CE marking, EU declaration of conformity and instructions for use are in place and that provider and importer duties are fulfilled (Art. 24). On suspicion of non-conformity: suspend availability, inform provider/importer and authorities. Substantial modification or rebranding of a high-risk system makes the actor a provider (Art. 25 — the \"provider flip\")." },
    links: [ { label: "Art. 24 AI Act", url: "https://artificialintelligenceact.eu/article/24/" } ],
    related: ["einfuehrer", "anbieter", "provider-flip"] },

  { id: "bevollmaechtigter", category: "ai-act-core", risk: null,
    tags: ["#AuthRepresentative", "#Akteur", "#Art22", "#Drittland"],
    de: {
      term: "Bevollmächtigter",
      short: "In der EU niedergelassene Person, die von einem Drittland-Anbieter schriftlich beauftragt wird, dessen Pflichten aus dem AI Act wahrzunehmen (Art. 3 Nr. 5, Art. 22).",
      long: "Ein Bevollmächtigter (\"authorised representative\") muss von Anbietern außerhalb der EU vor dem Inverkehrbringen benannt werden. Aufgaben: Überprüfung der EU-Konformitätserklärung und technischen Dokumentation, Aufbewahrung 10 Jahre, Zusammenarbeit mit Behörden, Kündigung bei Verdacht auf Nichtkonformität. Vergleichbar mit dem Art. 27 DSGVO-Vertreter, jedoch mit erweiterten Kontroll- und Meldepflichten." },
    en: {
      term: "Authorised Representative",
      short: "Person established in the EU designated in writing by a third-country provider to carry out obligations under the AI Act (Art. 3(5), Art. 22).",
      long: "An authorised representative must be designated by non-EU providers before placing systems on the market. Tasks: verify EU declaration of conformity and technical documentation, keep records for 10 years, cooperate with authorities, terminate mandate if non-conformity is suspected. Comparable to the GDPR Art. 27 representative but with wider verification and reporting duties." },
    links: [ { label: "Art. 22 AI Act", url: "https://artificialintelligenceact.eu/article/22/" } ],
    related: ["einfuehrer", "anbieter"] },

  { id: "provider-flip", category: "ai-act-core", risk: null,
    tags: ["#ProviderFlip", "#Art25", "#Wertschoepfungskette", "#SubstantialModification"],
    de: {
      term: "Provider Flip (Rollenwechsel)",
      short: "Ein Akteur wird selbst zum Anbieter, wenn er ein Hochrisiko-KI-System wesentlich verändert, unter eigenem Namen vertreibt oder zweckentfremdet nutzt (Art. 25).",
      long: "Drei Auslöser: (a) Vermarktung unter eigenem Namen oder Marke; (b) wesentliche Änderung eines bereits in Verkehr gebrachten Hochrisiko-Systems; (c) Änderung des vorgesehenen Zwecks eines Systems, sodass es zum Hochrisiko-System wird. Folge: alle Anbieter-Pflichten treffen den neuen Anbieter. Der ursprüngliche Anbieter muss kooperieren und relevante Informationen bereitstellen (Art. 25 Abs. 4). Zentraler Compliance-Punkt für Downstream-Entwickler und Systemintegratoren." },
    en: {
      term: "Provider Flip",
      short: "An actor becomes the provider when it substantially modifies a high-risk AI system, markets it under its own name, or changes its intended purpose (Art. 25).",
      long: "Three triggers: (a) marketing under own name or trademark; (b) substantial modification of a high-risk system already placed on the market; (c) change of intended purpose such that a system becomes high-risk. Consequence: all provider duties fall on the new provider. The original provider must cooperate and share relevant information (Art. 25(4)). A key compliance point for downstream developers and system integrators." },
    links: [ { label: "Art. 25 AI Act", url: "https://artificialintelligenceact.eu/article/25/" } ],
    related: ["wesentliche-aenderung", "anbieter", "downstream-anbieter", "haendler"] },

  { id: "wesentliche-aenderung", category: "ai-act-core", risk: null,
    tags: ["#SubstantialModification", "#Art3", "#Requalification"],
    de: {
      term: "Wesentliche Änderung",
      short: "Änderung eines KI-Systems nach dem Inverkehrbringen, die die Konformität mit den Anforderungen des AI Act beeinträchtigen oder den Zweck verändern kann (Art. 3 Nr. 23).",
      long: "Nicht als wesentlich gelten vorab geplante und dokumentierte Änderungen, insbesondere solche im Rahmen des kontinuierlichen Lernens (Erwägungsgrund 128). Wesentliche Änderungen erfordern eine neue Konformitätsbewertung (Art. 43 Abs. 4) und können einen Provider Flip auslösen (Art. 25). Beispiele: Änderung des Trainingsdatensatzes über den ursprünglich vorgesehenen Rahmen hinaus, funktionale Ergänzung um neue Anwendungsfälle, Ausweitung des Zwecks. Konkretisierung durch Leitlinien der Kommission und harmonisierte Normen erwartet." },
    en: {
      term: "Substantial Modification",
      short: "Change to an AI system after placing on the market that may affect its compliance with the AI Act or alter its intended purpose (Art. 3(23)).",
      long: "Pre-planned and documented changes, especially those within continuous learning, do not qualify as substantial (Recital 128). Substantial modifications trigger new conformity assessment (Art. 43(4)) and can cause a provider flip (Art. 25). Examples: change to the training dataset beyond the originally planned scope, functional extension to new use cases, broadening of purpose. Guidelines and harmonised standards are expected to clarify." },
    links: [ { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" } ],
    related: ["provider-flip", "konformitaetsbewertung"] },

  { id: "downstream-anbieter", category: "ai-act-core", risk: null,
    tags: ["#Downstream", "#GPAI", "#Wertschoepfungskette", "#Art53"],
    de: {
      term: "Nachgelagerter Anbieter (Downstream-Anbieter)",
      short: "Anbieter, der ein KI-System auf Basis eines GPAI-Modells eines anderen Anbieters entwickelt und in Verkehr bringt (Art. 3 Nr. 68).",
      long: "Downstream-Anbieter (\"downstream provider\") sind auf technische Informationen des GPAI-Anbieters angewiesen. Art. 53 Abs. 1 lit. b verpflichtet GPAI-Anbieter, Downstream-Anbietern Informationen und Dokumentation nach Anhang XII bereitzustellen: technische Fähigkeiten, Grenzen, akzeptable Nutzungsbedingungen, Trainingsdaten-Zusammenfassung. Bei GPAI mit systemischem Risiko ergänzt um Modellbewertung und Risikominderungsstrategien. Vertragliche Weitergabe von Compliance-Verantwortung ist üblich, entbindet aber nicht von eigenen Anbieter-Pflichten." },
    en: {
      term: "Downstream Provider",
      short: "Provider that develops and places on the market an AI system based on a GPAI model provided by another provider (Art. 3(68)).",
      long: "Downstream providers depend on technical information from the GPAI provider. Art. 53(1)(b) requires GPAI providers to share information and documentation per Annex XII with downstream providers: technical capabilities, limitations, acceptable-use terms, training-data summary. For GPAI with systemic risk this is complemented by model evaluations and risk-mitigation strategies. Contractual pass-through of compliance is common but does not release the downstream provider from its own duties." },
    links: [ { label: "Art. 53 AI Act", url: "https://artificialintelligenceact.eu/article/53/" } ],
    related: ["gpai", "provider-flip", "foundation-model"] },

  { id: "betroffene-person", category: "ai-act-core", risk: null,
    tags: ["#AffectedPerson", "#Grundrechte", "#Art85", "#Art86"],
    de: {
      term: "Betroffene Person",
      short: "Natürliche Person, deren Rechte und Freiheiten durch ein KI-System berührt sind (\"affected person\"). Adressat von Auskunfts- und Beschwerderechten.",
      long: "Der AI Act erkennt betroffene Personen als eigene Kategorie an, wenn auch nicht mit vollem Rechteumfang wie unter der DSGVO. Zentrale Rechte: Beschwerde bei der Marktüberwachungsbehörde (Art. 85), Recht auf Erklärung bei automatisierten Einzelentscheidungen aus Hochrisiko-Systemen mit Rechtswirkung (Art. 86), Information über Einsatz bestimmter Systeme (Art. 26 Abs. 11 – Emotionserkennung, biometrische Kategorisierung, Deepfakes). Rechte gelten unbeschadet der DSGVO." },
    en: {
      term: "Affected Person",
      short: "Natural person whose rights and freedoms are affected by an AI system. Beneficiary of information and complaint rights.",
      long: "The AI Act recognises affected persons as a category, though without the full rights catalogue of the GDPR. Key rights: complaint to the market surveillance authority (Art. 85), explanation of individual decision-making by high-risk systems with legal or similarly significant effect (Art. 86), information when subject to certain systems (Art. 26(11) — emotion recognition, biometric categorisation, deepfakes). Rights apply without prejudice to the GDPR." },
    links: [ { label: "Art. 85 AI Act", url: "https://artificialintelligenceact.eu/article/85/" }, { label: "Art. 86 AI Act", url: "https://artificialintelligenceact.eu/article/86/" } ],
    related: ["beschwerderecht", "erklaerungsrecht", "fria"] },

  { id: "kmu", category: "ai-act-core", risk: null,
    tags: ["#SME", "#Startup", "#Art62", "#Foerderung"],
    de: {
      term: "KMU und Start-ups",
      short: "Kleine und mittlere Unternehmen sowie Kleinstunternehmen und Start-ups, für die der AI Act besondere Erleichterungen und Förderung vorsieht (Art. 62 f.).",
      long: "Definition folgt der Kommissionsempfehlung 2003/361/EG (< 250 Mitarbeitende, < 50 Mio. € Umsatz). Erleichterungen: vereinfachte technische Dokumentation (Art. 11 Abs. 1), vorrangiger Zugang zu Reallaboren (Art. 62 Abs. 2 lit. a), reduzierte Gebühren notifizierter Stellen bei Konformitätsbewertung (Art. 62 Abs. 2 lit. c), spezifische Kommunikationskanäle zum AI Office. Bußgelder werden verhältnismäßig festgesetzt: für KMU gilt der jeweils niedrigere Wert aus absolutem Betrag oder Prozentsatz des Umsatzes (Art. 99 Abs. 6)." },
    en: {
      term: "SMEs and Start-ups",
      short: "Small and medium enterprises, microenterprises and start-ups, for whom the AI Act provides specific relief and support (Art. 62 et seq.).",
      long: "Definition follows Commission Recommendation 2003/361/EC (< 250 employees, < €50m turnover). Reliefs: simplified technical documentation (Art. 11(1)), priority sandbox access (Art. 62(2)(a)), reduced notified-body fees for conformity assessment (Art. 62(2)(c)), dedicated communication channels with the AI Office. Fines are proportionate: SMEs pay the lower of absolute amount or turnover percentage (Art. 99(6))." },
    links: [ { label: "Art. 62 AI Act", url: "https://artificialintelligenceact.eu/article/62/" } ],
    related: ["reallabor", "bussgeld-art99"] },

  { id: "marktueberwachung", category: "governance", risk: null,
    tags: ["#MarketSurveillance", "#Enforcement", "#Art70", "#VO2019-1020"],
    de: {
      term: "Marktüberwachungsbehörde",
      short: "Nationale Behörde, die die Konformität von KI-Systemen mit dem AI Act überwacht und durchsetzt (Art. 3 Nr. 26, Art. 70).",
      long: "Jeder Mitgliedstaat benennt mindestens eine Marktüberwachungsbehörde und mindestens eine notifizierende Behörde (Art. 70). Anwendbar ist der Rahmen der VO (EU) 2019/1020 (Marktüberwachungs-VO). Befugnisse: Prüfung technischer Dokumentation, Zugang zu Trainingsdaten, Test des Systems, Rückruf, Marktrücknahme, Bußgelder. Bei GPAI-Modellen liegt die Aufsicht zentral beim AI Office (Art. 88), nicht bei den nationalen Behörden. Deutschland: BNetzA als koordinierende Behörde (Stand 2025)." },
    en: {
      term: "Market Surveillance Authority",
      short: "National authority monitoring and enforcing AI system compliance under the AI Act (Art. 3(26), Art. 70).",
      long: "Each Member State designates at least one market surveillance authority and at least one notifying authority (Art. 70). The framework of Regulation (EU) 2019/1020 (Market Surveillance Regulation) applies. Powers: examine technical documentation, access training data, test the system, order recall, market withdrawal, fines. For GPAI models supervision is centralised with the AI Office (Art. 88), not national authorities. In Germany the BNetzA acts as coordinating authority (as of 2025)." },
    links: [ { label: "Art. 70 AI Act", url: "https://artificialintelligenceact.eu/article/70/" } ],
    related: ["notifizierende-behoerde", "ai-office", "schwerwiegender-vorfall", "whistleblower"] },

  { id: "notifizierende-behoerde", category: "governance", risk: null,
    tags: ["#NotifyingAuthority", "#NotifiedBody", "#Art28"],
    de: {
      term: "Notifizierende Behörde",
      short: "Nationale Behörde, die notifizierte Stellen benennt, überwacht und der Kommission notifiziert (Art. 3 Nr. 19, Art. 28).",
      long: "Zuständig für die Prüfung, ob eine Konformitätsbewertungsstelle die Anforderungen des AI Act erfüllt (Unabhängigkeit, Fachkompetenz, Verfahren – Art. 31), für ihre Benennung und laufende Überwachung. Trennung zwischen notifizierender Behörde und Marktüberwachungsbehörde ist möglich, aber nicht zwingend – in kleineren Mitgliedstaaten oft in einer Stelle vereint. Die Kommission unterhält die NANDO-Datenbank aller notifizierten Stellen." },
    en: {
      term: "Notifying Authority",
      short: "National authority designating, monitoring and notifying to the Commission the notified bodies (Art. 3(19), Art. 28).",
      long: "Responsible for assessing whether a conformity assessment body meets AI Act requirements (independence, competence, procedures — Art. 31), for its designation and ongoing supervision. Notifying authority and market surveillance authority may be separated or combined; smaller Member States often merge them. The Commission maintains the NANDO database of notified bodies." },
    links: [ { label: "Art. 28 AI Act", url: "https://artificialintelligenceact.eu/article/28/" } ],
    related: ["notifizierte-stelle", "marktueberwachung"] },

  { id: "notifizierte-stelle", category: "ai-act-core", risk: null,
    tags: ["#NotifiedBody", "#Art29", "#Conformity"],
    de: {
      term: "Notifizierte Stelle",
      short: "Unabhängige Konformitätsbewertungsstelle, die von einer notifizierenden Behörde benannt und der Kommission gemeldet wurde (Art. 3 Nr. 22, Art. 29 ff.).",
      long: "Für Hochrisiko-Systeme, deren Konformitätsbewertung eine Beteiligung Dritter erfordert (v.a. biometrische Fernidentifikation nach Anhang VII), muss eine notifizierte Stelle einbezogen werden. Anforderungen: rechtliche Selbstständigkeit, Unabhängigkeit, technische Kompetenz für KI, Berufshaftpflicht, Vertraulichkeitspflichten (Art. 31). Zertifikate haben Höchstlaufzeit von fünf Jahren mit Möglichkeit der Verlängerung (Art. 44). Bei Nichtkonformität kann die Kommission Zertifikate aussetzen oder entziehen." },
    en: {
      term: "Notified Body",
      short: "Independent conformity assessment body designated by a notifying authority and notified to the Commission (Art. 3(22), Art. 29 et seq.).",
      long: "For high-risk systems whose conformity assessment requires third-party involvement (notably remote biometric identification under Annex VII), a notified body must be involved. Requirements: legal separation, independence, AI technical competence, professional liability insurance, confidentiality (Art. 31). Certificates are valid for up to five years, renewable (Art. 44). The Commission may suspend or withdraw certificates in case of non-conformity." },
    links: [ { label: "Art. 29 AI Act", url: "https://artificialintelligenceact.eu/article/29/" } ],
    related: ["konformitaetsbewertung", "notifizierende-behoerde", "ce-kennzeichnung"] },

  { id: "eu-datenbank", category: "governance", risk: null,
    tags: ["#EUDatabase", "#Registration", "#Art71", "#Transparency"],
    de: {
      term: "EU-Datenbank für Hochrisiko-KI-Systeme",
      short: "Von der Kommission verwaltete öffentliche Datenbank, in der Anbieter Hochrisiko-Systeme vor Inverkehrbringen registrieren müssen (Art. 71, Anhang VIII).",
      long: "Registrierungspflichten treffen Anbieter für alle Hochrisiko-Systeme aus Anhang III (Ausnahme: kritische Infrastruktur – nicht öffentlich) sowie Betreiber im öffentlichen Sektor. Inhalt der Registrierung (Anhang VIII): Angaben zum Anbieter/Betreiber, Systembezeichnung, Zweck, Zusammenfassung wesentlicher Elemente. Zweck: Transparenz für betroffene Personen, Zivilgesellschaft, Behörden. Öffentlich einsehbar unter Wahrung der Geschäftsgeheimnisse. Zentraler Baustein europäischer KI-Governance." },
    en: {
      term: "EU Database for High-Risk AI Systems",
      short: "Public database managed by the Commission where providers must register high-risk systems before placing on the market (Art. 71, Annex VIII).",
      long: "Registration duties apply to providers for all Annex III high-risk systems (exception: critical infrastructure — not public) and to public-sector deployers. Content per Annex VIII: information on provider/deployer, system name, purpose, summary of essential elements. Purpose: transparency for affected persons, civil society, authorities. Publicly accessible while safeguarding trade secrets. A central pillar of European AI governance." },
    links: [ { label: "Art. 71 AI Act", url: "https://artificialintelligenceact.eu/article/71/" } ],
    related: ["hochrisiko-ki", "transparenzpflichten"] },

  { id: "anhang-i", category: "ai-act-core", risk: null,
    tags: ["#AnnexI", "#UnionHarmonisation", "#Produktrecht"],
    de: {
      term: "Anhang I (Unionsharmonisierungsrechtsakte)",
      short: "Liste von 20 EU-Produktrechtsakten, deren Sicherheitsbauteile bei KI-Einsatz automatisch als Hochrisiko-Systeme gelten (Art. 6 Abs. 1).",
      long: "Anhang I umfasst zwei Abschnitte: Abschnitt A (12 Rechtsakte im New Legislative Framework) – u.a. Maschinen-VO, Spielzeug-Richtlinie, Sportboote, Aufzüge, ATEX, Funkanlagen, Druckgeräte, Seilbahnen, PSA, Gasgeräte, Medizinprodukte-VO und IVD-VO. Abschnitt B (8 Rechtsakte im \"Old Approach\") – Luftfahrt, Kfz, Landmaschinen, Schiffsausrüstung, Eisenbahn, Kraftfahrzeuge Typgenehmigung, zivile Luftfahrt EASA. Ist ein KI-System Sicherheitsbauteil eines dieser Produkte, greift der AI Act ergänzend zum Sektorrecht." },
    en: {
      term: "Annex I (Union Harmonisation Legislation)",
      short: "List of 20 EU product laws whose safety components using AI automatically qualify as high-risk systems (Art. 6(1)).",
      long: "Annex I has two sections: Section A (12 New Legislative Framework acts) — including the Machinery Regulation, Toy Directive, recreational craft, lifts, ATEX, radio equipment, pressure equipment, cableways, PPE, gas appliances, MDR and IVDR. Section B (8 Old Approach acts) — aviation, motor vehicles, agricultural machinery, marine equipment, railways, motor vehicle type approval, civil aviation EASA. Where an AI system is a safety component of one of these products, the AI Act applies alongside the sectoral rules." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["hochrisiko-ki", "mdr-schnittstelle", "anhang-iii"] },

  { id: "anhang-iii", category: "ai-act-core", risk: "high",
    tags: ["#AnnexIII", "#HighRisk", "#UseCases"],
    de: {
      term: "Anhang III (Hochrisiko-Use-Cases)",
      short: "Katalog von acht Anwendungsbereichen, in denen KI-Systeme als Hochrisiko gelten (Art. 6 Abs. 2). Erweiterbar durch delegierte Rechtsakte der Kommission (Art. 7).",
      long: "Die acht Bereiche: (1) Biometrie – Fernidentifikation, Kategorisierung, Emotionserkennung; (2) kritische Infrastruktur – Verkehr, Wasser, Gas, Strom, digitale Infrastruktur; (3) allgemeine und berufliche Bildung – Zugang, Bewertung, Prüfungsüberwachung; (4) Beschäftigung, Personalmanagement – Personalauswahl, Beförderung, Zuweisung, Leistungsbewertung; (5) Zugang zu wesentlichen privaten und öffentlichen Diensten – Kreditwürdigkeit (Ausnahme: Betrugserkennung), Sozialleistungen, Notfallversorgung, Lebens- und Krankenversicherung; (6) Strafverfolgung; (7) Migration, Asyl, Grenzkontrolle; (8) Justizverwaltung und demokratische Prozesse. Ausnahme in Art. 6 Abs. 3: kein Hochrisiko, wenn System nur eng definierte Verfahrensaufgaben durchführt." },
    en: {
      term: "Annex III (High-Risk Use Cases)",
      short: "Catalogue of eight areas where AI systems qualify as high-risk (Art. 6(2)). Extensible by Commission delegated acts (Art. 7).",
      long: "The eight areas: (1) biometrics — remote identification, categorisation, emotion recognition; (2) critical infrastructure — transport, water, gas, electricity, digital infrastructure; (3) education and vocational training — access, assessment, proctoring; (4) employment, workers management — recruitment, promotion, allocation, performance evaluation; (5) access to essential private and public services — creditworthiness (except fraud detection), social benefits, emergency services, life and health insurance; (6) law enforcement; (7) migration, asylum, border control; (8) administration of justice and democratic processes. Exception in Art. 6(3): not high-risk if the system only performs narrowly defined procedural tasks." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["hochrisiko-ki", "anhang-i", "arbeitsrecht-schnittstelle", "gesichtserkennung", "delegierte-rechtsakte"] },

  { id: "anhang-iv", category: "ai-act-core", risk: null,
    tags: ["#AnnexIV", "#TechnicalDocumentation", "#Art11"],
    de: {
      term: "Anhang IV (Technische Dokumentation)",
      short: "Mindestinhalt der technischen Dokumentation für Hochrisiko-Systeme (Art. 11). Umfasst neun Themenblöcke.",
      long: "Anhang IV strukturiert die Pflichtdokumentation: (1) allgemeine Beschreibung des KI-Systems, (2) detaillierte Beschreibung der Elemente und Entwicklungsphasen einschließlich Datensätze, Trainings-, Validierungs- und Testverfahren, (3) Informationen zu Überwachung, Funktionsweise und Kontrolle, (4) Beschreibung von Zweckeignung, Genauigkeit, Robustheit, Cybersicherheit, (5) Risikomanagementsystem, (6) beabsichtigte wesentliche Änderungen, (7) Liste angewandter harmonisierter Normen, (8) EU-Konformitätserklärung, (9) Beschreibung des Systems zur Bewertung der Leistung im Betrieb (Post-Market-Monitoring). KMU dürfen vereinfachte Form nach Kommissionsvorlage nutzen." },
    en: {
      term: "Annex IV (Technical Documentation)",
      short: "Minimum content of technical documentation for high-risk systems (Art. 11). Nine thematic blocks.",
      long: "Annex IV structures the mandatory documentation: (1) general description of the AI system, (2) detailed description of elements and development stages including datasets, training/validation/testing procedures, (3) information on monitoring, functioning and control, (4) description of fitness for purpose, accuracy, robustness, cybersecurity, (5) risk management system, (6) intended substantial modifications, (7) list of harmonised standards applied, (8) EU declaration of conformity, (9) description of the post-market monitoring plan. SMEs may use a simplified form per Commission template." },
    links: [ { label: "Anhang IV", url: "https://artificialintelligenceact.eu/annex/4/" } ],
    related: ["technische-dokumentation", "konformitaetsbewertung"] },

  { id: "anhang-ii", category: "ai-act-core", risk: "prohibited",
    tags: ["#AnnexII", "#LawEnforcement", "#Art5"],
    de: {
      term: "Anhang II (Straftaten für Ausnahmen von Verboten)",
      short: "Katalog von 16 schweren Straftaten, für die eng begrenzte Ausnahmen vom Verbot der Echtzeit-Fernidentifikation im öffentlichen Raum gelten können (Art. 5 Abs. 1 lit. h).",
      long: "Ausnahmen sind nur bei richterlicher Genehmigung, Notwendigkeit und Verhältnismäßigkeit zulässig. Die 16 Straftatbestände orientieren sich am EU-Rahmenbeschluss zum Europäischen Haftbefehl und umfassen u.a. Terrorismus, Menschenhandel, sexuelle Ausbeutung von Kindern, illegaler Handel mit Drogen, Waffen, Munition, Sprengstoff, Mord, schwere Körperverletzung, illegaler Handel mit menschlichen Organen, Entführung, Rassismus und Fremdenfeindlichkeit, organisierte oder bewaffnete Straftaten, Umweltkriminalität, Straftaten gegen das Finanzinteresse der Union, Vergewaltigung, Straftaten im Zuständigkeitsbereich des Internationalen Strafgerichtshofs, Flugzeug- und Schiffsentführung, Sabotage." },
    en: {
      term: "Annex II (Offences for Exceptions to Prohibitions)",
      short: "Catalogue of 16 serious offences for which narrowly limited exceptions from the ban on real-time remote biometric identification in public may apply (Art. 5(1)(h)).",
      long: "Exceptions require judicial authorisation, necessity and proportionality. The 16 offences track the EU Framework Decision on the European Arrest Warrant and include terrorism, trafficking in human beings, sexual exploitation of children, illicit trafficking in drugs, weapons, ammunition, explosives, murder, grievous bodily injury, illicit trafficking in human organs, kidnapping, racism and xenophobia, organised or armed robbery, environmental crime, offences against the financial interests of the Union, rape, offences within the jurisdiction of the ICC, hijacking of aircraft/ships, sabotage." },
    links: [ { label: "Anhang II", url: "https://artificialintelligenceact.eu/annex/2/" } ],
    related: ["verbotene-praktiken", "gesichtserkennung"] },

  { id: "risikomanagementsystem", category: "ai-act-core", risk: null,
    tags: ["#RiskManagement", "#Art9", "#ISO23894"],
    de: {
      term: "Risikomanagementsystem",
      short: "Fortlaufender iterativer Prozess über den gesamten Lebenszyklus eines Hochrisiko-Systems zur Identifizierung, Bewertung und Minderung von Risiken (Art. 9).",
      long: "Pflicht in fünf Schritten: (a) Identifizierung bekannter und vernünftigerweise vorhersehbarer Risiken für Gesundheit, Sicherheit, Grundrechte; (b) Bewertung der Risiken bei bestimmungsgemäßem Gebrauch und vorhersehbarem Fehlgebrauch; (c) Bewertung anderer Risiken aus Post-Market-Monitoring; (d) Ergreifen geeigneter, gezielter Minderungsmaßnahmen. Besondere Berücksichtigung von Kindern und vulnerablen Gruppen (Art. 9 Abs. 9). Der harmonisierte Normenentwurf zu Art. 9 orientiert sich an ISO/IEC 23894 (KI-Risikomanagement) und ISO 31000." },
    en: {
      term: "Risk Management System",
      short: "Continuous iterative process across the full lifecycle of a high-risk system for identifying, evaluating and mitigating risks (Art. 9).",
      long: "Duty in five steps: (a) identify known and reasonably foreseeable risks to health, safety, fundamental rights; (b) evaluate risks under intended use and foreseeable misuse; (c) evaluate other risks from post-market monitoring; (d) adopt appropriate, targeted mitigation measures. Specific attention to children and vulnerable groups (Art. 9(9)). The harmonised standardisation draft for Art. 9 tracks ISO/IEC 23894 (AI risk management) and ISO 31000." },
    links: [ { label: "Art. 9 AI Act", url: "https://artificialintelligenceact.eu/article/9/" } ],
    related: ["hochrisiko-ki", "iso-42001", "daten-governance", "post-market-monitoring"] },

  { id: "daten-governance", category: "ai-act-core", risk: null,
    tags: ["#DataGovernance", "#Art10", "#TrainingData"],
    de: {
      term: "Daten-Governance und Datenqualität",
      short: "Anforderungen an Trainings-, Validierungs- und Testdaten von Hochrisiko-Systemen (Art. 10). Zentrale Norm für datengetriebene KI.",
      long: "Daten müssen relevant, repräsentativ, frei von Fehlern und vollständig sein (Art. 10 Abs. 3). Datenverwaltungsverfahren müssen abdecken: relevante Designentscheidungen, Datenerfassung, Datenaufbereitung, Prüfung auf Bias und mögliche diskriminierende Wirkungen, Erkennung von Datenlücken. Eine explizite Ausnahme erlaubt die Verarbeitung besonderer Kategorien personenbezogener Daten (Art. 9 DSGVO) zur Bias-Erkennung – unter strengen Schutzmaßnahmen wie Pseudonymisierung, Zugangsbeschränkungen und Löschpflichten (Art. 10 Abs. 5). Praxisrelevant für Fairness-Audits." },
    en: {
      term: "Data Governance and Data Quality",
      short: "Requirements for training, validation and testing data of high-risk systems (Art. 10). A central provision for data-driven AI.",
      long: "Data must be relevant, representative, free of errors and complete (Art. 10(3)). Data management procedures must cover: relevant design choices, data collection, preparation, examination for bias and possible discriminatory effects, identification of data gaps. An explicit exception allows processing of special categories of personal data (Art. 9 GDPR) for bias detection — subject to strict safeguards such as pseudonymisation, access restrictions and deletion duties (Art. 10(5)). Highly relevant for fairness audits." },
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["trainingsdaten", "bias", "dsgvo-schnittstelle", "risikomanagementsystem", "datenverordnung-schnittstelle"] },

  { id: "technische-dokumentation", category: "ai-act-core", risk: null,
    tags: ["#TechnicalDocumentation", "#Art11", "#AnnexIV"],
    de: {
      term: "Technische Dokumentation",
      short: "Anbieter müssen vor Inverkehrbringen eines Hochrisiko-Systems die technische Dokumentation nach Anhang IV erstellen und aktuell halten (Art. 11).",
      long: "Die Dokumentation belegt gegenüber Behörden die Konformität. Aufbewahrung 10 Jahre nach Inverkehrbringen (Art. 18). KMU dürfen vereinfachte Fassung nach Kommissionsvorlage nutzen (Art. 11 Abs. 1 UAbs. 3). Bei Sicherheitsbauteilen unter Anhang I Abschnitt A kann die Dokumentation in die vorhandene Sektor-Dokumentation integriert werden (Art. 11 Abs. 2). Die Dokumentation ist bei jeder wesentlichen Änderung zu aktualisieren." },
    en: {
      term: "Technical Documentation",
      short: "Providers must draw up and keep up-to-date the technical documentation per Annex IV before placing a high-risk system on the market (Art. 11).",
      long: "Documentation evidences conformity to authorities. Retention: 10 years after placing on the market (Art. 18). SMEs may use a simplified template published by the Commission (Art. 11(1) subpara. 3). For safety components under Annex I Section A the documentation may be integrated into existing sectoral documentation (Art. 11(2)). Documentation must be updated on every substantial modification." },
    links: [ { label: "Art. 11 AI Act", url: "https://artificialintelligenceact.eu/article/11/" } ],
    related: ["anhang-iv", "konformitaetsbewertung", "eu-konformitaetserklaerung"] },

  { id: "aufzeichnungspflicht", category: "ai-act-core", risk: null,
    tags: ["#Logging", "#Art12", "#Traceability"],
    de: {
      term: "Aufzeichnungspflicht (Logging)",
      short: "Hochrisiko-Systeme müssen technisch so gestaltet sein, dass Ereignisse während des Betriebs automatisch protokolliert werden (Art. 12).",
      long: "Zweck: Rückverfolgbarkeit des Systemverhaltens, Erkennung von Risiken, Post-Market-Monitoring, behördliche Untersuchungen. Mindestinhalt: Zeitraum jeder Nutzung (Datum, Start-/Endzeit), Referenzdatenbank gegen die geprüft wurde, Eingabedaten die zu Übereinstimmung führten, Identität der natürlichen Personen bei menschlicher Überprüfung (Art. 12 Abs. 3). Für biometrische Fernidentifikation Sonderregeln in Art. 26 Abs. 6: Aufbewahrung mindestens 6 Monate. Betreiber-Pflichten zu Aufzeichnungen ergänzen in Art. 26 Abs. 6, 27." },
    en: {
      term: "Record-Keeping (Logging)",
      short: "High-risk systems must be technically designed to automatically log events during their operation (Art. 12).",
      long: "Purpose: traceability of system behaviour, risk detection, post-market monitoring, official investigations. Minimum content: period of each use (date, start/end time), reference database against which checks were performed, input data leading to a match, identity of natural persons involved in human review (Art. 12(3)). Special rules for remote biometric identification in Art. 26(6): retention at least six months. Deployer-side logging duties complemented in Art. 26(6), 27." },
    links: [ { label: "Art. 12 AI Act", url: "https://artificialintelligenceact.eu/article/12/" } ],
    related: ["hochrisiko-ki", "post-market-monitoring"] },

  { id: "genauigkeit-robustheit", category: "ai-act-core", risk: null,
    tags: ["#Accuracy", "#Robustness", "#Cybersecurity", "#Art15"],
    de: {
      term: "Genauigkeit, Robustheit und Cybersicherheit",
      short: "Hochrisiko-Systeme müssen angemessene Genauigkeit, Robustheit und Cybersicherheit über den gesamten Lebenszyklus aufweisen (Art. 15).",
      long: "Anbieter müssen Genauigkeitsmetriken (z.B. Accuracy, Precision, Recall, F1) im Gebrauchsanweisungstext angeben (Art. 15 Abs. 3). Robustheit bezieht sich auf Widerstandsfähigkeit gegen Fehler, Umgebungsveränderungen, Störungen; bei lernenden Systemen müssen Rückkopplungsschleifen (Feedback Loops) beherrscht werden. Cybersicherheit erfasst Widerstand gegen Manipulationen wie Data Poisoning, Model Poisoning, Model Evasion, Modell-Extraktion, Adversarial Examples. Die Kommission unterstützt die Entwicklung von Benchmarks; das Cyber Resilience Act (CRA) greift ergänzend." },
    en: {
      term: "Accuracy, Robustness and Cybersecurity",
      short: "High-risk systems must achieve appropriate levels of accuracy, robustness and cybersecurity throughout their lifecycle (Art. 15).",
      long: "Providers must declare accuracy metrics (e.g. accuracy, precision, recall, F1) in the instructions for use (Art. 15(3)). Robustness covers resilience to errors, environmental variation, disturbances; for learning systems feedback loops must be controlled. Cybersecurity covers resistance to manipulation such as data poisoning, model poisoning, model evasion, model extraction, adversarial examples. The Commission supports benchmark development; the Cyber Resilience Act (CRA) applies alongside." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["adversarial", "cra-schnittstelle", "nis2-schnittstelle", "produkthaftung-schnittstelle"] },

  { id: "gebrauchsanweisung", category: "ai-act-core", risk: null,
    tags: ["#InstructionsForUse", "#Art13", "#UserManual"],
    de: {
      term: "Gebrauchsanweisung",
      short: "Anbieter müssen Hochrisiko-Systemen eine digitale oder gedruckte Gebrauchsanweisung beifügen, die Betreibern klare, umfassende und zugängliche Informationen liefert (Art. 13).",
      long: "Mindestinhalt: Identität und Kontaktdaten des Anbieters, Merkmale, Fähigkeiten und Leistungsgrenzen des Systems (Zweck, Genauigkeit, Robustheit, bekannte Umstände die zu Risiken führen), Änderungen die vom Anbieter vorgesehen sind, technische Maßnahmen der menschlichen Aufsicht, erforderliche Rechenressourcen, ggf. erforderliche Wartung, Beschreibung der Logging-Mechanismen. Sprache: Mitgliedstaat kann Landessprache vorschreiben. Voraussetzung für ordnungsgemäßen Betrieb durch den Betreiber (Art. 26 Abs. 1)." },
    en: {
      term: "Instructions for Use",
      short: "Providers must include digital or printed instructions with high-risk systems providing deployers with clear, comprehensive and accessible information (Art. 13).",
      long: "Minimum content: identity and contact details of the provider, system characteristics, capabilities and performance limitations (purpose, accuracy, robustness, known circumstances leading to risks), changes envisaged by the provider, technical measures for human oversight, required computational resources, expected maintenance, description of logging mechanisms. Language: Member States may require use of national language. A prerequisite for proper operation by the deployer (Art. 26(1))." },
    links: [ { label: "Art. 13 AI Act", url: "https://artificialintelligenceact.eu/article/13/" } ],
    related: ["menschliche-aufsicht", "betreiber", "transparenzpflichten"] },

  { id: "post-market-monitoring", category: "ai-act-core", risk: null,
    tags: ["#PostMarket", "#Monitoring", "#Art72"],
    de: {
      term: "Post-Market-Monitoring",
      short: "Anbieter müssen ein System einrichten und dokumentieren, das die Leistung von Hochrisiko-Systemen im Betrieb systematisch überwacht (Art. 72).",
      long: "Der Monitoring-Plan (Art. 72 Abs. 3) beschreibt Erhebung, Analyse und Auswertung relevanter Daten während der gesamten Nutzungsdauer. Zweck: fortlaufende Bewertung, ob das System die Anforderungen der Kapitel III weiter erfüllt, und Erkennung von Trends oder Vorfällen. Findings fließen zurück ins Risikomanagementsystem (Art. 9). Ergänzt wird das Monitoring durch die Pflicht zur Meldung schwerwiegender Vorfälle nach Art. 73 (Melde­fristen 15 Tage, in kritischen Fällen 2 Tage bzw. sofort). Kommissions-Durchführungsrechtsakte konkretisieren Format und Inhalt des Monitoring-Plans." },
    en: {
      term: "Post-Market Monitoring",
      short: "Providers must establish and document a system that systematically monitors performance of high-risk systems in operation (Art. 72).",
      long: "The monitoring plan (Art. 72(3)) describes collection, analysis and evaluation of relevant data throughout the system's lifetime. Purpose: ongoing assessment of continued compliance with Chapter III requirements and detection of trends or incidents. Findings feed back into the risk management system (Art. 9). Complemented by the duty to report serious incidents under Art. 73 (deadlines 15 days, in critical cases 2 days or immediately). Commission implementing acts specify format and content of the monitoring plan." },
    links: [ { label: "Art. 72 AI Act", url: "https://artificialintelligenceact.eu/article/72/" } ],
    related: ["schwerwiegender-vorfall", "risikomanagementsystem", "aufzeichnungspflicht"] },

  { id: "schwerwiegender-vorfall", category: "ai-act-core", risk: null,
    tags: ["#SeriousIncident", "#Art73", "#IncidentReporting"],
    de: {
      term: "Schwerwiegender Vorfall",
      short: "Fehlfunktion oder Fehlgebrauch eines Hochrisiko-Systems, der direkt oder indirekt zu Tod, schwerer Gesundheitsschädigung, Grundrechtsverletzung oder Beeinträchtigung kritischer Infrastruktur führt (Art. 3 Nr. 49, Art. 73).",
      long: "Anbieter müssen jeden schwerwiegenden Vorfall an die zuständige Marktüberwachungsbehörde melden. Regelfrist: 15 Tage nach Kenntnisnahme. Bei Vorfällen mit Todesfolge oder Beeinträchtigung kritischer Infrastruktur: unverzüglich, spätestens 2 Tage; bei weitreichender Verletzung der Grundrechte: sofort, spätestens 15 Tage. Nach Meldung: Untersuchung, Risikobewertung, Korrekturmaßnahmen. Ergänzend zur Vorfallmeldung für GPAI mit systemischem Risiko nach Art. 55 Abs. 1 lit. c." },
    en: {
      term: "Serious Incident",
      short: "Malfunction or misuse of a high-risk system directly or indirectly leading to death, serious harm to health, breach of fundamental rights, or disruption of critical infrastructure (Art. 3(49), Art. 73).",
      long: "Providers must report every serious incident to the competent market surveillance authority. Standard deadline: 15 days after becoming aware. For incidents resulting in death or disruption of critical infrastructure: without delay, at the latest 2 days; for widespread fundamental rights infringement: immediately, at the latest 15 days. Follow-up: investigation, risk assessment, corrective measures. Complementary incident reporting for GPAI with systemic risk under Art. 55(1)(c)." },
    links: [ { label: "Art. 73 AI Act", url: "https://artificialintelligenceact.eu/article/73/" } ],
    related: ["post-market-monitoring", "marktueberwachung"] },

  { id: "harmonisierte-normen", category: "governance", risk: null,
    tags: ["#HarmonisedStandards", "#CEN", "#CENELEC", "#JTC21", "#Art40"],
    de: {
      term: "Harmonisierte Normen",
      short: "Europäische Normen, deren Anwendung die Vermutung der Konformität mit Anforderungen des AI Act begründet (Art. 40).",
      long: "Die Kommission hat CEN und CENELEC im Mai 2023 mit Standardisierungsanfrage M/593 beauftragt. Zuständig: gemeinsames Technisches Komitee CEN/CENELEC JTC 21 \"Artificial Intelligence\". Arbeitsprogramm umfasst zehn Bereiche: Risikomanagement, Governance und Datenqualität, Aufzeichnung, Transparenz, menschliche Aufsicht, Genauigkeit-Robustheit-Cybersicherheit, Qualitätsmanagement, Konformitätsbewertung, KI-Managementsystem (auf ISO/IEC 42001 basierend). Erscheinen im Amtsblatt der EU löst Konformitätsvermutung aus. Alternative: gemeinsame Spezifikationen der Kommission (Art. 41) für den Fall, dass harmonisierte Normen nicht rechtzeitig oder unzureichend vorliegen." },
    en: {
      term: "Harmonised Standards",
      short: "European standards whose application triggers presumption of conformity with AI Act requirements (Art. 40).",
      long: "The Commission tasked CEN and CENELEC via Standardisation Request M/593 in May 2023. Responsible: Joint Technical Committee CEN/CENELEC JTC 21 \"Artificial Intelligence\". The work programme covers ten areas: risk management, governance and data quality, record-keeping, transparency, human oversight, accuracy-robustness-cybersecurity, quality management, conformity assessment, AI management system (based on ISO/IEC 42001). Publication in the EU Official Journal triggers presumption of conformity. Alternative: Commission common specifications (Art. 41) where harmonised standards are not timely or adequate." },
    links: [ { label: "Art. 40 AI Act", url: "https://artificialintelligenceact.eu/article/40/" }, { label: "CEN/CENELEC JTC 21", url: "https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/artificial-intelligence/" } ],
    related: ["gemeinsame-spezifikationen", "iso-42001", "konformitaetsbewertung", "leitlinien-kommission"] },

  { id: "bussgeld-art99", category: "governance", risk: null,
    tags: ["#Fines", "#Art99", "#Sanktionen"],
    de: {
      term: "Bußgeldsystem (Art. 99)",
      short: "Dreistufiges Sanktionssystem des AI Act mit Bußgeldern bis zu 35 Mio. € oder 7 % des weltweiten Jahresumsatzes – je nachdem, welcher Betrag höher ist.",
      long: "Die drei Stufen: (1) Verstöße gegen Verbote nach Art. 5 – bis zu 35 Mio. € oder 7 % Jahresumsatz; (2) Verstöße gegen andere Anbieter- oder Betreiberpflichten (Hochrisiko, Transparenz, GPAI etc.) – bis zu 15 Mio. € oder 3 %; (3) unrichtige, unvollständige oder irreführende Angaben gegenüber Behörden – bis zu 7,5 Mio. € oder 1 %. Für KMU und Start-ups gilt jeweils der niedrigere Betrag (Art. 99 Abs. 6). Die Bemessung erfolgt anhand eines Kriterienkatalogs (Art. 99 Abs. 7): Art, Schwere und Dauer des Verstoßes, Zahl betroffener Personen, Vorsatz oder Fahrlässigkeit, frühere Verstöße, ergriffene Abhilfemaßnahmen." },
    en: {
      term: "Fines Regime (Art. 99)",
      short: "Three-tier penalty regime under the AI Act with fines up to €35 million or 7% of global annual turnover, whichever is higher.",
      long: "The three tiers: (1) violations of prohibitions under Art. 5 — up to €35 million or 7% turnover; (2) violations of other provider or deployer obligations (high-risk, transparency, GPAI etc.) — up to €15 million or 3%; (3) supply of incorrect, incomplete or misleading information to authorities — up to €7.5 million or 1%. For SMEs and start-ups the lower amount applies (Art. 99(6)). Calibration follows a set of criteria (Art. 99(7)): nature, gravity and duration of the infringement, number of affected persons, intention or negligence, previous infringements, remedial measures taken." },
    links: [ { label: "Art. 99 AI Act", url: "https://artificialintelligenceact.eu/article/99/" } ],
    related: ["sanktionsbemessung", "bussgeld-gpai", "bussgeld-behoerden", "kmu"] },

  { id: "bussgeld-gpai", category: "governance", risk: null,
    tags: ["#Fines", "#GPAI", "#Art101", "#AIOffice"],
    de: {
      term: "Bußgelder gegen GPAI-Anbieter (Art. 101)",
      short: "Spezielles Sanktionsregime für Anbieter von GPAI-Modellen: Bußgelder bis 15 Mio. € oder 3 % des weltweiten Jahresumsatzes, verhängt zentral durch die Kommission.",
      long: "Anders als die allgemeinen Bußgelder (nationale Behörden) werden GPAI-Bußgelder zentral vom AI Office auf Ebene der Kommission verhängt (Art. 101). Auslöser: vorsätzliche oder fahrlässige Verstöße gegen GPAI-Pflichten (Art. 53 ff.), Nichtbefolgung von Anfragen oder Zugangsverweigerung, Nichtdurchführung angeordneter Maßnahmen. Vor Verhängung: Mitteilung der Vorwürfe, rechtliches Gehör, Akteneinsicht. Kommission kann bis Ende 2025 keine Bußgelder verhängen (Art. 113 lit. a Übergang für GPAI: Anwendung ab 2.8.2025). Gerichtliche Überprüfung durch EuG/EuGH." },
    en: {
      term: "Fines against GPAI Providers (Art. 101)",
      short: "Special sanction regime for providers of GPAI models: fines up to €15 million or 3% of global annual turnover, imposed centrally by the Commission.",
      long: "Unlike general fines (national authorities), GPAI fines are imposed centrally by the AI Office at Commission level (Art. 101). Triggers: intentional or negligent breaches of GPAI duties (Art. 53 et seq.), failure to comply with requests or refusal of access, failure to implement ordered measures. Before imposition: statement of objections, right to be heard, access to file. The Commission cannot impose fines before end of 2025 (Art. 113(a) transitional rule for GPAI: application from 2 Aug 2025). Judicial review by the General Court/CJEU." },
    links: [ { label: "Art. 101 AI Act", url: "https://artificialintelligenceact.eu/article/101/" } ],
    related: ["gpai", "ai-office", "bussgeld-art99", "systemisches-risiko"] },

  { id: "bussgeld-behoerden", category: "governance", risk: null,
    tags: ["#Fines", "#PublicSector", "#Art99"],
    de: {
      term: "Bußgelder gegen Behörden (Art. 99 Abs. 8)",
      short: "Mitgliedstaaten können vorsehen, ob und in welchem Umfang Bußgelder auch gegen Behörden und öffentliche Einrichtungen verhängt werden können.",
      long: "Der AI Act überlässt den Mitgliedstaaten die Ausgestaltung: manche Rechtsordnungen (z.B. Deutschland) tun sich schwer damit, Behörden mit Bußgeldern zu belegen, andere sehen dies vor. Alternative Sanktionen: Weisungen, Ministerentscheidungen, disziplinarrechtliche Konsequenzen, öffentliche Anerkennung des Verstoßes. Praktisch relevant, weil ein großer Teil der Hochrisiko-KI im öffentlichen Sektor eingesetzt wird (Sozialleistungen, Migration, Strafverfolgung, Justiz) und Grundrechte-Folgenabschätzungen (FRIA) dort verpflichtend sind." },
    en: {
      term: "Fines against Public Bodies (Art. 99(8))",
      short: "Member States may decide whether and to what extent fines may be imposed on public authorities and bodies.",
      long: "The AI Act leaves the design to Member States: some jurisdictions (e.g. Germany) are reluctant to impose fines on public bodies, others do so. Alternative sanctions: directives, ministerial decisions, disciplinary consequences, public acknowledgement of the violation. Highly relevant in practice as much high-risk AI is deployed in the public sector (social benefits, migration, law enforcement, justice) where Fundamental Rights Impact Assessments (FRIA) are mandatory." },
    links: [ { label: "Art. 99 AI Act", url: "https://artificialintelligenceact.eu/article/99/" } ],
    related: ["bussgeld-art99", "sanktionsbemessung"] },

  { id: "sanktionsbemessung", category: "governance", risk: null,
    tags: ["#Sanctions", "#Proportionality", "#Art99"],
    de: {
      term: "Sanktionsbemessung",
      short: "Kriterienkatalog aus Art. 99 Abs. 7 zur Ermittlung von Höhe und Angemessenheit einer Sanktion – wirksam, verhältnismäßig, abschreckend.",
      long: "Zwölf Kriterien: Art, Schwere, Dauer und Konsequenzen des Verstoßes; Größe und Marktanteil des Wirtschaftsakteurs; ob der Verstoß vorsätzlich oder fahrlässig war; Maßnahmen zur Schadensminderung; Grad der Zusammenarbeit mit Behörden; frühere Verstöße; Art und Weise der Kenntnisnahme durch die Behörde; ob und in welchem Umfang finanzielle Vorteile erlangt oder Verluste vermieden wurden; Vulnerabilität der betroffenen Personen; ggf. andere erschwerende oder mildernde Umstände. Zusätzlich strukturiert durch nationale Ordnungswidrigkeitengesetze (in Deutschland: OWiG)." },
    en: {
      term: "Calibration of Sanctions",
      short: "Catalogue of criteria in Art. 99(7) for calibrating penalty amount and appropriateness — effective, proportionate, dissuasive.",
      long: "Twelve criteria: nature, gravity, duration and consequences of the infringement; size and market share of the economic operator; whether infringement was intentional or negligent; actions taken to mitigate damage; degree of cooperation with authorities; previous infringements; manner in which the authority became aware; whether and to what extent financial benefits were gained or losses avoided; vulnerability of affected persons; any other aggravating or mitigating circumstances. Complemented by national administrative offence law (in Germany: OWiG)." },
    links: [ { label: "Art. 99 AI Act", url: "https://artificialintelligenceact.eu/article/99/" } ],
    related: ["bussgeld-art99", "bussgeld-behoerden"] },

  { id: "beschwerderecht", category: "governance", risk: null,
    tags: ["#Complaint", "#Art85", "#AffectedPerson"],
    de: {
      term: "Beschwerderecht (Art. 85)",
      short: "Jede natürliche oder juristische Person kann bei einer Marktüberwachungsbehörde Beschwerde einlegen, wenn sie einen Verstoß gegen den AI Act vermutet.",
      long: "Ein niedrigschwelliger Zugang zur Durchsetzung. Der Beschwerdeführer muss keine unmittelbare Betroffenheit nachweisen – auch NGOs, Journalisten und Wettbewerber können Beschwerde einreichen. Die Behörde entscheidet nach eigenem Ermessen über Untersuchung, informiert den Beschwerdeführer nach mitgliedstaatlichem Verfahrensrecht. Beschwerden ergänzen das Recht auf Erklärung individueller Entscheidungen (Art. 86) und weitere Rechtsbehelfe unter der DSGVO, dem UWG oder dem AGG. Für GPAI: Beschwerden an das AI Office." },
    en: {
      term: "Right to Lodge a Complaint (Art. 85)",
      short: "Any natural or legal person may lodge a complaint with a market surveillance authority if they suspect an infringement of the AI Act.",
      long: "A low-threshold path to enforcement. Complainants need not demonstrate direct concern — NGOs, journalists and competitors can also file complaints. The authority decides on investigation at its discretion, informs the complainant per national procedural law. Complaints complement the right to explanation of individual decisions (Art. 86) and other remedies under the GDPR, unfair competition law or anti-discrimination law. For GPAI: complaints to the AI Office." },
    links: [ { label: "Art. 85 AI Act", url: "https://artificialintelligenceact.eu/article/85/" } ],
    related: ["betroffene-person", "erklaerungsrecht", "whistleblower"] },

  { id: "erklaerungsrecht", category: "governance", risk: null,
    tags: ["#RightToExplanation", "#Art86", "#Grundrechte"],
    de: {
      term: "Recht auf Erklärung (Art. 86)",
      short: "Betroffene Personen haben Anspruch auf eine klare und aussagekräftige Erklärung, wenn eine Hochrisiko-KI eine sie betreffende Einzelentscheidung mit rechtlicher oder ähnlich erheblicher Wirkung trifft.",
      long: "Der Anspruch richtet sich gegen den Betreiber (nicht den Anbieter) und ergänzt Art. 22 DSGVO. Umfasst: Rolle des KI-Systems im Entscheidungsprozess und wesentliche Elemente der Entscheidung. Nicht betroffen: Entscheidungen ohne rechtliche oder ähnliche Wirkung; Systeme aus Anhang III Nr. 2 (kritische Infrastruktur); Ausnahmen aus mitgliedstaatlichem Recht möglich. Praxisrelevanz: Zusammenspiel mit DSGVO (Art. 13, 14, 22), Verbraucherschutz und Antidiskriminierungsrecht." },
    en: {
      term: "Right to Explanation (Art. 86)",
      short: "Affected persons are entitled to a clear and meaningful explanation when a high-risk AI takes an individual decision with legal or similarly significant effect on them.",
      long: "The claim is against the deployer (not the provider) and complements GDPR Art. 22. Covers: role of the AI system in the decision process and main elements of the decision. Not covered: decisions without legal or similar effect; systems under Annex III(2) (critical infrastructure); exemptions under Member State law possible. Practical relevance: interplay with GDPR (Art. 13, 14, 22), consumer protection and anti-discrimination law." },
    links: [ { label: "Art. 86 AI Act", url: "https://artificialintelligenceact.eu/article/86/" } ],
    related: ["betroffene-person", "beschwerderecht", "dsgvo-schnittstelle", "betreiber", "dsgvo"] },

  { id: "whistleblower", category: "governance", risk: null,
    tags: ["#Whistleblower", "#Art87", "#RichtlinieEU2019-1937"],
    de: {
      term: "Hinweisgeberschutz (Art. 87)",
      short: "Verstöße gegen den AI Act fallen in den Anwendungsbereich der EU-Hinweisgeber-Richtlinie 2019/1937 – Whistleblower werden vor Vergeltung geschützt.",
      long: "Beschäftigte, Auftragnehmer, Bewerber und weitere Personenkreise können intern oder extern Verstöße melden, ohne arbeits-, straf- oder zivilrechtliche Nachteile befürchten zu müssen. Unternehmen ab 50 Mitarbeitenden müssen interne Meldekanäle einrichten, Behörden externe Kanäle. In Deutschland umgesetzt durch das Hinweisgeberschutzgesetz (HinSchG, in Kraft seit 2023). Praxisrelevanz: technische Verstöße gegen KI-Compliance-Pflichten sind oft nur für Insider erkennbar." },
    en: {
      term: "Whistleblower Protection (Art. 87)",
      short: "AI Act infringements fall within the scope of EU Whistleblower Directive 2019/1937 — whistleblowers are protected against retaliation.",
      long: "Employees, contractors, applicants and others may report infringements internally or externally without fear of employment, criminal or civil consequences. Companies with 50+ employees must set up internal reporting channels, authorities external ones. Transposed in Germany via the Whistleblower Protection Act (HinSchG, in force since 2023). Practical relevance: technical breaches of AI compliance duties are often only visible to insiders." },
    links: [ { label: "Art. 87 AI Act", url: "https://artificialintelligenceact.eu/article/87/" }, { label: "RL 2019/1937", url: "https://eur-lex.europa.eu/eli/dir/2019/1937/oj" } ],
    related: ["beschwerderecht", "marktueberwachung"] },

  { id: "fristen-anwendung", category: "ai-act-core", risk: null,
    tags: ["#Timeline", "#Art113", "#Uebergang"],
    de: {
      term: "Zeitplan der Anwendung (Art. 113)",
      short: "Gestaffelte Anwendbarkeit des AI Act zwischen 2.2.2025 und 2.8.2027, damit Akteure sich vorbereiten können.",
      long: "Meilensteine: (1) 1.8.2024 – Inkrafttreten der VO (EU) 2024/1689; (2) 2.2.2025 – Verbote nach Art. 5 und KI-Kompetenzpflicht nach Art. 4 anwendbar; (3) 2.8.2025 – GPAI-Pflichten (Art. 53, 55), Governance-Kapitel (AI Office, AI Board, notifizierende Behörden), Sanktionen (mit Ausnahmen); (4) 2.8.2026 – Großteil der Hochrisiko-Regeln (Anhang III), Transparenzpflichten (Art. 50), Reallabore; (5) 2.8.2027 – Hochrisiko-Regeln für Sicherheitsbauteile in Produkten unter Anhang I. GPAI-Modelle vor 2.8.2025 haben bis 2.8.2027 zur Anpassung." },
    en: {
      term: "Application Timeline (Art. 113)",
      short: "Phased applicability of the AI Act between 2 Feb 2025 and 2 Aug 2027 to allow actors to prepare.",
      long: "Milestones: (1) 1 Aug 2024 — Regulation (EU) 2024/1689 enters into force; (2) 2 Feb 2025 — Art. 5 prohibitions and Art. 4 AI literacy duty applicable; (3) 2 Aug 2025 — GPAI duties (Arts. 53, 55), governance chapter (AI Office, AI Board, notifying authorities), sanctions (with exceptions); (4) 2 Aug 2026 — most high-risk rules (Annex III), transparency duties (Art. 50), sandboxes; (5) 2 Aug 2027 — high-risk rules for safety components in Annex I products. GPAI models placed on the market before 2 Aug 2025 have until 2 Aug 2027 to adapt." },
    links: [ { label: "Art. 113 AI Act", url: "https://artificialintelligenceact.eu/article/113/" } ],
    related: ["uebergangsvorschriften", "eu-ai-act"] },

  { id: "uebergangsvorschriften", category: "ai-act-core", risk: null,
    tags: ["#Transitional", "#Art111", "#Bestandssysteme"],
    de: {
      term: "Übergangsvorschriften (Art. 111)",
      short: "Bestandsschutz für KI-Systeme und GPAI-Modelle, die vor den jeweiligen Anwendungsstichtagen in Verkehr gebracht wurden – mit Grenzen und Anpassungsfristen.",
      long: "Grundprinzip: Systeme, die vor der Anwendbarkeit bestimmter Pflichten in Verkehr gebracht wurden, sind nicht rückwirkend erfasst. Ausnahmen: (1) wesentliche Änderungen nach dem Stichtag lösen volle Anwendbarkeit aus; (2) Hochrisiko-Systeme im öffentlichen Sektor müssen bis 2.8.2030 angepasst werden; (3) GPAI-Modelle, die vor 2.8.2025 in Verkehr gebracht wurden, müssen bis 2.8.2027 vollständige Compliance nachweisen; (4) IT-Großsysteme im Freiheits-, Sicherheits- und Justizraum (SIS, VIS, Eurodac etc.) müssen bis 31.12.2030 angepasst werden. Für Anbieter und Betreiber: Bestandssysteme früher als nötig anpassen kann Wettbewerbsvorteil und Vertrauenssignal sein." },
    en: {
      term: "Transitional Provisions (Art. 111)",
      short: "Legacy protection for AI systems and GPAI models placed on the market before the relevant application dates — with limits and adaptation deadlines.",
      long: "Principle: systems placed on the market before applicability of specific duties are not retroactively covered. Exceptions: (1) substantial modifications after the cut-off trigger full applicability; (2) high-risk systems in the public sector must be adapted by 2 Aug 2030; (3) GPAI models placed on the market before 2 Aug 2025 must demonstrate full compliance by 2 Aug 2027; (4) large-scale IT systems in the Area of Freedom, Security and Justice (SIS, VIS, Eurodac etc.) must be adapted by 31 Dec 2030. For providers and deployers: adapting legacy systems earlier than required can be a competitive advantage and trust signal." },
    links: [ { label: "Art. 111 AI Act", url: "https://artificialintelligenceact.eu/article/111/" } ],
    related: ["fristen-anwendung", "gpai"] },

  { id: "leitlinien-kommission", category: "governance", risk: null,
    tags: ["#Guidelines", "#Commission", "#Art96", "#SoftLaw"],
    de: {
      term: "Leitlinien der Kommission (Art. 96)",
      short: "Die Kommission veröffentlicht laufend Leitlinien zur einheitlichen Auslegung und Anwendung des AI Act – rechtlich nicht bindend, praktisch prägend.",
      long: "Bereits veröffentlicht bzw. angekündigt: Leitlinien zur Definition des KI-Systems (Feb 2025), Leitlinien zu verbotenen Praktiken nach Art. 5 (Feb 2025), Vorlage zur Trainingsdaten-Zusammenfassung für GPAI (Sommer 2025), Leitlinien zur praktischen Umsetzung von Art. 6 (Hochrisiko-Klassifizierung), Vorlage für den Post-Market-Monitoring-Plan, Leitlinien zum Verhältnis zwischen AI Act und Unionsharmonisierungsrecht. Rechtsnatur: Soft Law – nicht bindend, aber Behörden und Gerichte orientieren sich in der Regel daran. Erarbeitung mit Beteiligung des AI Board und Stakeholdern." },
    en: {
      term: "Commission Guidelines (Art. 96)",
      short: "The Commission issues ongoing guidelines for consistent interpretation and application of the AI Act — not legally binding, but influential in practice.",
      long: "Already published or announced: guidelines on the definition of AI system (Feb 2025), guidelines on prohibited practices under Art. 5 (Feb 2025), template for training data summary for GPAI (summer 2025), guidelines on practical implementation of Art. 6 (high-risk classification), template for post-market monitoring plan, guidelines on the relation between AI Act and Union harmonisation law. Legal nature: soft law — not binding, but typically followed by authorities and courts. Drafted with AI Board and stakeholder involvement." },
    links: [ { label: "Art. 96 AI Act", url: "https://artificialintelligenceact.eu/article/96/" } ],
    related: ["delegierte-rechtsakte", "harmonisierte-normen"] },

  { id: "delegierte-rechtsakte", category: "governance", risk: null,
    tags: ["#DelegatedActs", "#Art97", "#Comitology"],
    de: {
      term: "Delegierte Rechtsakte (Art. 97)",
      short: "Die Kommission darf bestimmte technische oder ergänzende Aspekte des AI Act durch delegierte Rechtsakte anpassen – unter Widerspruchsrecht von Rat und Parlament.",
      long: "Betroffene Bereiche: Anpassung der GPAI-Schwelle für systemisches Risiko (Art. 51 Abs. 3), Aktualisierung der Anhänge III und IV, Kriterien für Anhang XI (technische Doku für GPAI), Kriterien für Anhang XII (Info für Downstream-Anbieter), Kriterien für Anhang XIII (Kriterien für Systemisches Risiko). Rat und Parlament können delegierte Rechtsakte binnen drei Monaten mit qualifizierter Mehrheit ablehnen. Der Mechanismus ermöglicht schnelle Anpassung an technische Entwicklung ohne Gesetzgebungsverfahren." },
    en: {
      term: "Delegated Acts (Art. 97)",
      short: "The Commission may adjust certain technical or supplementary aspects of the AI Act via delegated acts — subject to objection by Council and Parliament.",
      long: "Areas covered: adjustment of the GPAI threshold for systemic risk (Art. 51(3)), updates to Annexes III and IV, criteria for Annex XI (technical documentation for GPAI), criteria for Annex XII (information for downstream providers), criteria for Annex XIII (systemic risk criteria). Council and Parliament may object within three months by qualified majority. This mechanism enables swift adaptation to technical developments without a new legislative procedure." },
    links: [ { label: "Art. 97 AI Act", url: "https://artificialintelligenceact.eu/article/97/" } ],
    related: ["leitlinien-kommission", "anhang-iii"] },

  { id: "dsgvo-schnittstelle", category: "governance", risk: null,
    tags: ["#GDPR", "#DSGVO", "#Datenschutz", "#Art22DSGVO"],
    de: {
      term: "Schnittstelle AI Act ↔ DSGVO",
      short: "AI Act und DSGVO gelten parallel – der AI Act regelt KI-Systeme als Produkte, die DSGVO regelt die Verarbeitung personenbezogener Daten.",
      long: "Zentrale Überschneidungen: (1) Rechtsgrundlagen der Trainingsdatenverarbeitung (Art. 6 DSGVO, Art. 10 AI Act – besondere Ausnahme für Bias-Erkennung); (2) automatisierte Einzelentscheidungen: Art. 22 DSGVO vs. Art. 86 AI Act; (3) Folgenabschätzungen: DPIA (Art. 35 DSGVO) und FRIA (Art. 27 AI Act) können kombiniert werden; (4) Zuständigkeiten: Datenschutzbehörden bleiben für DSGVO zuständig, Marktüberwachungsbehörden für AI Act; enge Koordination vorgesehen (Art. 74 AI Act). Der EDSA hat mehrere Stellungnahmen zu KI-Datenschutzfragen veröffentlicht (Web-Scraping, LLMs)." },
    en: {
      term: "Interface AI Act ↔ GDPR",
      short: "The AI Act and GDPR apply in parallel — the AI Act regulates AI systems as products, the GDPR regulates the processing of personal data.",
      long: "Key overlaps: (1) legal bases for training data processing (Art. 6 GDPR, Art. 10 AI Act — special exception for bias detection); (2) automated individual decisions: Art. 22 GDPR vs. Art. 86 AI Act; (3) impact assessments: DPIA (Art. 35 GDPR) and FRIA (Art. 27 AI Act) may be combined; (4) competencies: data protection authorities remain competent for GDPR, market surveillance authorities for AI Act; close coordination foreseen (Art. 74 AI Act). The EDPB has published several opinions on AI and data protection (web scraping, LLMs)." },
    links: [ { label: "EDSA Opinion 28/2024", url: "https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en" } ],
    related: ["dsgvo", "fria", "erklaerungsrecht", "daten-governance", "produkthaftung-schnittstelle"] },

  { id: "dsa-schnittstelle", category: "governance", risk: null,
    tags: ["#DSA", "#DigitalServicesAct", "#Plattformen"],
    de: {
      term: "Schnittstelle AI Act ↔ Digital Services Act (DSA)",
      short: "AI Act und DSA regulieren unterschiedliche Objekte – KI-Systeme vs. Vermittlungsdienste – überschneiden sich aber bei algorithmischen Empfehlungssystemen, Deepfakes und generativer KI.",
      long: "Überschneidungen: (1) Empfehlungssysteme großer Plattformen unterliegen DSA-Transparenzpflichten (Art. 27 DSA); zugleich potenziell Hochrisiko-KI nach Anhang III AI Act; (2) Systemische Risiken sehr großer Online-Plattformen (VLOPs) nach Art. 34 DSA umfassen KI-generierte Desinformation; (3) Deepfake-Kennzeichnung: Art. 50 AI Act auf Ebene der KI-Systeme, DSA-Verhaltenskodex zur Desinformation auf Plattformebene; (4) Zuständigkeiten: Digital Services Coordinators vs. Marktüberwachungsbehörden – Koordination erforderlich. Beide Akte teilen die Philosophie risikobasierter, proportionaler Regulierung." },
    en: {
      term: "Interface AI Act ↔ Digital Services Act (DSA)",
      short: "The AI Act and DSA regulate different objects — AI systems vs. intermediary services — but overlap on algorithmic recommender systems, deepfakes and generative AI.",
      long: "Overlaps: (1) recommender systems of large platforms are subject to DSA transparency duties (Art. 27 DSA) and potentially high-risk AI under Annex III AI Act; (2) systemic risks of Very Large Online Platforms (VLOPs) under Art. 34 DSA include AI-generated disinformation; (3) deepfake labelling: Art. 50 AI Act at the AI system level, DSA Code of Practice on Disinformation at platform level; (4) competencies: Digital Services Coordinators vs. market surveillance authorities — coordination required. Both acts share a philosophy of risk-based, proportionate regulation." },
    links: [ { label: "DSA (VO 2022/2065)", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" } ],
    related: ["dma-schnittstelle", "deepfake", "transparenzpflichten", "verbraucherschutz-schnittstelle"] },

  { id: "dma-schnittstelle", category: "governance", risk: null,
    tags: ["#DMA", "#DigitalMarketsAct", "#Gatekeeper"],
    de: {
      term: "Schnittstelle AI Act ↔ Digital Markets Act (DMA)",
      short: "Der DMA reguliert Gatekeeper-Plattformen, die vielfach KI-Systeme einsetzen – dabei entstehen Wechselwirkungen mit AI-Act-Pflichten.",
      long: "Berührungspunkte: (1) Verbot der Selbstbevorzugung (Art. 6 DMA) betrifft KI-Ranking- und Empfehlungssysteme; (2) Interoperabilitätspflichten (Art. 7 DMA) können den Einsatz proprietärer KI erschweren; (3) Datenzugangsrechte (Art. 6 DMA) berühren Trainingsdatenverwendung; (4) Verbot der Datenkombination ohne Einwilligung wirkt auf KI-Trainings-Pipelines; (5) Zuständigkeit: Kommission (DG COMP) für DMA, AI Office/nationale Behörden für AI Act. Ausdrückliche gegenseitige Unberührtheitsklauseln in beiden Verordnungen." },
    en: {
      term: "Interface AI Act ↔ Digital Markets Act (DMA)",
      short: "The DMA regulates gatekeeper platforms, which extensively deploy AI systems — creating interactions with AI Act duties.",
      long: "Touch points: (1) prohibition of self-preferencing (Art. 6 DMA) affects AI ranking and recommender systems; (2) interoperability duties (Art. 7 DMA) can complicate the use of proprietary AI; (3) data access rights (Art. 6 DMA) touch training-data use; (4) prohibition of cross-service data combination without consent affects AI training pipelines; (5) competence: Commission (DG COMP) for DMA, AI Office/national authorities for AI Act. Explicit \"without prejudice\" clauses in both regulations." },
    links: [ { label: "DMA (VO 2022/1925)", url: "https://eur-lex.europa.eu/eli/reg/2022/1925/oj" } ],
    related: ["dsa-schnittstelle", "wettbewerbsrecht-schnittstelle"] },

  { id: "mdr-schnittstelle", category: "governance", risk: "high",
    tags: ["#MDR", "#IVDR", "#Medizinprodukte"],
    de: {
      term: "Schnittstelle AI Act ↔ Medizinprodukte-VO (MDR/IVDR)",
      short: "KI-basierte Medizinprodukte unterliegen sowohl der MDR/IVDR als auch dem AI Act – die Konformitätsbewertung wird integriert durchgeführt.",
      long: "Die MDR (VO 2017/745) und IVDR (VO 2017/746) sind in Anhang I Abschnitt A des AI Act gelistet; KI-Sicherheitsbauteile sind damit automatisch Hochrisiko-KI. Praktische Folgen: (1) integrierte Konformitätsbewertung nach MDR/IVDR-Modulen (in der Regel Klasse IIa und höher: notifizierte Stelle); (2) Anforderungen aus Kapitel III AI Act (Risikomanagement, Datenqualität, Aufsicht) müssen zusätzlich erfüllt werden – oft im vorhandenen QMS integrierbar; (3) benannte Stellen benötigen KI-spezifische Kompetenz; (4) klinische Bewertung nach MDR umfasst KI-spezifische Aspekte wie Genauigkeit, Robustheit, Bias. Übergang bis 2.8.2027 (Art. 111 Abs. 2)." },
    en: {
      term: "Interface AI Act ↔ Medical Device Regulation (MDR/IVDR)",
      short: "AI-based medical devices are subject to both the MDR/IVDR and the AI Act — conformity assessment is conducted in an integrated manner.",
      long: "The MDR (Regulation 2017/745) and IVDR (Regulation 2017/746) are listed in Annex I Section A of the AI Act; AI safety components thus automatically qualify as high-risk AI. Practical consequences: (1) integrated conformity assessment following MDR/IVDR modules (typically class IIa and above: notified body); (2) Chapter III AI Act requirements (risk management, data quality, oversight) must additionally be met — often integrable into existing QMS; (3) notified bodies need AI-specific competence; (4) clinical evaluation under MDR covers AI-specific aspects such as accuracy, robustness, bias. Transition until 2 Aug 2027 (Art. 111(2))." },
    links: [ { label: "MDR (VO 2017/745)", url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj" } ],
    related: ["anhang-i", "konformitaetsbewertung", "hochrisiko-ki"] },

  { id: "nis2-schnittstelle", category: "security", risk: null,
    tags: ["#NIS2", "#Cybersecurity", "#KritischeInfrastruktur"],
    de: {
      term: "Schnittstelle AI Act ↔ NIS-2-Richtlinie",
      short: "Die NIS-2-Richtlinie zur Cybersicherheit ergänzt die AI-Act-Anforderungen an Genauigkeit, Robustheit und Cybersicherheit bei Hochrisiko-KI in kritischer Infrastruktur.",
      long: "NIS-2 (Richtlinie 2022/2555) verpflichtet Betreiber wesentlicher und wichtiger Einrichtungen zu Cybersecurity-Maßnahmen. Überschneidung mit AI Act v.a. bei: (1) Hochrisiko-KI in kritischer Infrastruktur (Anhang III Nr. 2); (2) Meldung von Cybersecurity-Vorfällen: NIS-2 verlangt Frühwarnung binnen 24 h, Erstbericht binnen 72 h – ergänzend zur AI-Act-Vorfallmeldung nach Art. 73; (3) Risikomanagementmaßnahmen: NIS-2 Art. 21 überschneidet sich mit AI-Act Art. 15. Umsetzung in Deutschland durch NIS2UmsuCG (2025). Empfehlung: integriertes Managementsystem statt paralleler Silos." },
    en: {
      term: "Interface AI Act ↔ NIS 2 Directive",
      short: "The NIS 2 Cybersecurity Directive complements AI Act requirements on accuracy, robustness and cybersecurity for high-risk AI in critical infrastructure.",
      long: "NIS 2 (Directive 2022/2555) obliges operators of essential and important entities to cybersecurity measures. Overlap with the AI Act notably at: (1) high-risk AI in critical infrastructure (Annex III(2)); (2) incident reporting: NIS 2 requires early warning within 24 h, initial report within 72 h — in addition to AI Act incident reporting under Art. 73; (3) risk management measures: NIS 2 Art. 21 overlaps with AI Act Art. 15. Transposed in Germany via NIS2UmsuCG (2025). Recommendation: integrated management system rather than parallel silos." },
    links: [ { label: "NIS-2 (RL 2022/2555)", url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj" } ],
    related: ["cra-schnittstelle", "genauigkeit-robustheit"] },

  { id: "cra-schnittstelle", category: "security", risk: null,
    tags: ["#CRA", "#CyberResilienceAct", "#Software"],
    de: {
      term: "Schnittstelle AI Act ↔ Cyber Resilience Act (CRA)",
      short: "Der Cyber Resilience Act (VO 2024/2847) legt horizontale Cybersicherheitsanforderungen an Produkte mit digitalen Elementen fest – einschließlich vieler KI-Systeme.",
      long: "Anwendbar auf Produkte mit digitalen Elementen ab Ende 2027, einschließlich Software (embedded und stand-alone). KI-Systeme können sowohl unter AI Act (als KI) als auch unter CRA (als Software-Produkt) fallen. Um Doppel-Compliance zu vermeiden, ordnet Art. 12 Abs. 3 CRA an: für KI-Systeme, die AI-Act-Anforderungen an Cybersicherheit (Art. 15) erfüllen, gelten diese als Erfüllung der einschlägigen CRA-Anforderungen. Praxis: harmonisierte Standards werden abgestimmt entwickelt. CRA bringt zusätzlich: Meldepflicht ausgenutzter Schwachstellen an ENISA, verpflichtender Support-Zeitraum, Sicherheit \"by design and by default\"." },
    en: {
      term: "Interface AI Act ↔ Cyber Resilience Act (CRA)",
      short: "The Cyber Resilience Act (Regulation 2024/2847) sets horizontal cybersecurity requirements for products with digital elements — including many AI systems.",
      long: "Applies to products with digital elements from late 2027, including software (embedded and stand-alone). AI systems may fall under both AI Act (as AI) and CRA (as software product). To avoid double compliance, Art. 12(3) CRA provides: for AI systems meeting AI Act cybersecurity requirements (Art. 15), those are deemed to fulfil the corresponding CRA requirements. Practice: harmonised standards are being developed in coordination. CRA additionally brings: mandatory reporting of exploited vulnerabilities to ENISA, mandatory support period, security by design and by default." },
    links: [ { label: "CRA (VO 2024/2847)", url: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj" } ],
    related: ["nis2-schnittstelle", "genauigkeit-robustheit"] },

  { id: "produkthaftung-schnittstelle", category: "governance", risk: null,
    tags: ["#ProductLiability", "#PLD", "#Haftung"],
    de: {
      term: "Schnittstelle AI Act ↔ Produkthaftungsrichtlinie (PLD)",
      short: "Die neue Produkthaftungsrichtlinie (RL 2024/2853) erfasst ausdrücklich KI-Systeme und Software als Produkte – ergänzend zur öffentlich-rechtlichen AI-Act-Regulierung.",
      long: "Die Neufassung (in Kraft seit Dezember 2024, Umsetzung bis Dezember 2026) modernisiert das seit 1985 geltende PLD-Regime für die digitale Ära. Wesentliche Neuerungen: (1) KI-Systeme und Software sind Produkte im Sinne der Richtlinie; (2) Fehlerbegriff umfasst auch Fehler aus Selbstlernen, Datenqualität, Cybersicherheit; (3) Beweiserleichterungen für Geschädigte, insbesondere bei komplexen KI-Systemen (Offenlegungspflichten, Vermutungsregeln); (4) Haftung des Herstellers auch für nachträgliche Software-Updates; (5) Verlängerte Verjährungsfristen. Verhältnis zum AI Act: Compliance mit Anbieterpflichten (v.a. Art. 9, 10, 15) senkt Haftungsrisiko, entbindet aber nicht davon." },
    en: {
      term: "Interface AI Act ↔ Product Liability Directive (PLD)",
      short: "The new Product Liability Directive (Directive 2024/2853) expressly covers AI systems and software as products — complementing public-law AI Act regulation.",
      long: "The recast (in force since December 2024, transposition by December 2026) modernises the 1985 PLD regime for the digital era. Key changes: (1) AI systems and software are products within the meaning of the directive; (2) the notion of defect covers errors from self-learning, data quality, cybersecurity; (3) evidentiary reliefs for the injured, especially for complex AI systems (disclosure duties, presumptions); (4) manufacturer liability also for subsequent software updates; (5) extended limitation periods. Relation to AI Act: compliance with provider duties (esp. Arts. 9, 10, 15) reduces liability exposure but does not exempt from it." },
    links: [ { label: "PLD (RL 2024/2853)", url: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj" } ],
    related: ["dsgvo-schnittstelle", "genauigkeit-robustheit"] },

  { id: "urheberrecht-schnittstelle", category: "governance", risk: null,
    tags: ["#Copyright", "#Urheberrecht", "#TDM", "#GPAI"],
    de: {
      term: "Schnittstelle AI Act ↔ Urheberrecht",
      short: "Der AI Act verpflichtet GPAI-Anbieter zur Urheberrechts-Compliance (Art. 53 Abs. 1 lit. c) und zur öffentlichen Zusammenfassung der Trainingsdaten (Art. 53 Abs. 1 lit. d).",
      long: "Zentrale Bezugspunkte: (1) Text- und Data-Mining-Ausnahme (TDM) aus Art. 3, 4 DSM-Richtlinie 2019/790 – kommerzielle Nutzung nur zulässig, wenn Rechteinhaber keinen maschinenlesbaren Vorbehalt (opt-out) erklärt haben (\"robots.txt\", \"noai\"); (2) Trainingsdaten-Zusammenfassung (Anhang XI) muss ausreichend detailliert sein, damit Rechteinhaber ihre Rechte wahrnehmen können; Vorlage der Kommission steht aus; (3) GPAI-Anbieter müssen Compliance-Strategie einschließlich Berücksichtigung von opt-outs implementieren. Rechtsstreitigkeiten in DE (LAION-Urteil des LG Hamburg 2024) und international zeigen erhebliche Rechtsunsicherheit." },
    en: {
      term: "Interface AI Act ↔ Copyright",
      short: "The AI Act obliges GPAI providers to copyright compliance (Art. 53(1)(c)) and to publish a summary of training data (Art. 53(1)(d)).",
      long: "Key touch points: (1) text and data mining exception (TDM) under Arts. 3, 4 DSM Directive 2019/790 — commercial use only permitted if rightholders have not made a machine-readable reservation (\"robots.txt\", \"noai\"); (2) training data summary (Annex XI) must be sufficiently detailed to allow rightholders to exercise their rights; Commission template pending; (3) GPAI providers must implement a compliance strategy including respect for opt-outs. Case law in Germany (LAION judgment of the Hamburg Regional Court 2024) and internationally reveals significant legal uncertainty." },
    links: [ { label: "DSM-RL (RL 2019/790)", url: "https://eur-lex.europa.eu/eli/dir/2019/790/oj" } ],
    related: ["gpai", "generative-ai"] },

  { id: "verbraucherschutz-schnittstelle", category: "governance", risk: null,
    tags: ["#ConsumerProtection", "#UCPD", "#Verbraucher"],
    de: {
      term: "Schnittstelle AI Act ↔ Verbraucherschutz",
      short: "AI Act und Verbraucherschutzrecht ergänzen sich – insbesondere bei generativer KI, personalisierter Werbung und Manipulation.",
      long: "Zentrale Berührungspunkte: (1) unlautere Geschäftspraktiken (UGP-RL 2005/29/EG): irreführende oder aggressive KI-Nutzung kann untersagt werden; (2) Preistransparenz bei Personalisierung (RL 2019/2161 – Omnibus): dynamische KI-Preise müssen offengelegt werden; (3) Verbandsklage-RL 2020/1828 ermöglicht Verbraucherverbänden kollektive Klagen bei AI-Act-Verstößen; (4) Digital Fairness Act (angekündigt für 2025) wird Dark Patterns, Personalisierung und Manipulation adressieren; (5) Modernisierung der UGP-RL diskutiert Ergänzung um KI-Deepfakes. Zuständigkeiten: Verbraucherschutzbehörden vs. AI-Act-Marktüberwachungsbehörden – Koordination durch CPC-Netzwerk." },
    en: {
      term: "Interface AI Act ↔ Consumer Protection",
      short: "The AI Act and consumer protection law complement each other — especially in generative AI, personalised advertising and manipulation.",
      long: "Key touch points: (1) unfair commercial practices (UCPD 2005/29/EC): misleading or aggressive AI use can be prohibited; (2) price transparency for personalisation (Directive 2019/2161 — Omnibus): dynamic AI pricing must be disclosed; (3) Representative Actions Directive 2020/1828 enables consumer associations to bring collective actions for AI Act violations; (4) Digital Fairness Act (announced for 2025) will address dark patterns, personalisation and manipulation; (5) modernisation of the UCPD discusses inclusion of AI deepfakes. Competencies: consumer protection authorities vs. AI Act market surveillance — coordination via the CPC network." },
    links: [ { label: "UGP-RL 2005/29/EG", url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj" } ],
    related: ["dsa-schnittstelle", "transparenzpflichten"] },

  { id: "arbeitsrecht-schnittstelle", category: "governance", risk: "high",
    tags: ["#Employment", "#Arbeitsrecht", "#PlatformWork"],
    de: {
      term: "Schnittstelle AI Act ↔ Arbeitsrecht",
      short: "KI im Beschäftigungskontext ist nach Anhang III Nr. 4 grundsätzlich hochrisikorelevant und wird durch nationale und europäische Arbeitsrechtsregelungen ergänzt.",
      long: "Relevante Rechtsakte: (1) DSGVO – Verarbeitung von Beschäftigtendaten, Art. 88 DSGVO und § 26 BDSG-neu (Deutschland); (2) Plattformarbeits-RL (RL 2024/2831) – Transparenz und menschliche Aufsicht bei algorithmischem Management; (3) Betriebsverfassungsrecht: § 87 BetrVG (Mitbestimmung bei technischen Einrichtungen zur Überwachung), § 90 (Beratung bei Personalplanung mit KI); (4) Antidiskriminierungsrecht (AGG, RL 2000/78/EG); (5) Arbeitsschutz-Rahmenrichtlinie 89/391/EWG erweitert um psychische Belastung durch algorithmisches Management. Praxis: Betriebsvereinbarung zu KI-Einsatz oft zwingend, FRIA nach Art. 27 AI Act empfohlen." },
    en: {
      term: "Interface AI Act ↔ Employment Law",
      short: "AI in employment contexts is generally high-risk under Annex III(4) and is complemented by national and European employment law.",
      long: "Relevant acts: (1) GDPR — processing of employee data, Art. 88 GDPR and §26 BDSG (Germany); (2) Platform Work Directive (Directive 2024/2831) — transparency and human oversight of algorithmic management; (3) works council law: §87 BetrVG (co-determination on technical monitoring), §90 (consultation on AI-supported HR planning); (4) anti-discrimination law (AGG, Directive 2000/78/EC); (5) OSH Framework Directive 89/391/EEC extended to psychosocial risks from algorithmic management. Practice: works agreements on AI use are often mandatory, FRIA under Art. 27 AI Act recommended." },
    links: [ { label: "Plattformarbeits-RL", url: "https://eur-lex.europa.eu/eli/dir/2024/2831/oj" } ],
    related: ["anhang-iii", "dsgvo-schnittstelle", "fria"] },

  { id: "wettbewerbsrecht-schnittstelle", category: "governance", risk: null,
    tags: ["#CompetitionLaw", "#Antitrust", "#Kartellrecht"],
    de: {
      term: "Schnittstelle AI Act ↔ Wettbewerbsrecht",
      short: "Der AI Act ersetzt nicht das Kartell- und Fusionskontrollrecht – KI-Marktkonzentration und algorithmische Absprachen bleiben wettbewerbsrechtlich relevant.",
      long: "Berührungspunkte: (1) Marktdefinition und -macht: welche Rolle spielen Foundation Models, Rechenkapazität, Trainingsdaten? Kommissionsuntersuchungen zu OpenAI/Microsoft und Google/Anthropic seit 2024; (2) Zugang zu wesentlichen Ressourcen (\"essential facilities\") – etwa Cloud-Infrastruktur, große Datensätze; (3) algorithmische Kollusion – autonome Preisabsprache durch selbstlernende Systeme; (4) DMA-Gatekeeper-Regeln (siehe eigener Eintrag); (5) Fusionskontrolle bei KI-Startup-Übernahmen. Kommissionspolicy-Papier zu wettbewerbspolitischen Aspekten generativer KI (2024) skizziert Handlungsfelder." },
    en: {
      term: "Interface AI Act ↔ Competition Law",
      short: "The AI Act does not replace antitrust and merger control law — AI market concentration and algorithmic collusion remain competition law issues.",
      long: "Touch points: (1) market definition and power: what role do foundation models, compute capacity, training data play? Commission inquiries into OpenAI/Microsoft and Google/Anthropic since 2024; (2) access to essential facilities such as cloud infrastructure, large datasets; (3) algorithmic collusion — autonomous price coordination through self-learning systems; (4) DMA gatekeeper rules (see separate entry); (5) merger control on AI start-up acquisitions. The Commission's policy paper on competition aspects of generative AI (2024) outlines areas for action." },
    links: [ { label: "Commission Policy Brief on GenAI", url: "https://competition-policy.ec.europa.eu/document/download/f6ed1a1b-4326-45fe-a44a-5230b1b5d5ec_en" } ],
    related: ["dma-schnittstelle", "gpai"] },

  { id: "datenverordnung-schnittstelle", category: "governance", risk: null,
    tags: ["#DataAct", "#Datenverordnung", "#IoT"],
    de: {
      term: "Schnittstelle AI Act ↔ Datenverordnung (Data Act)",
      short: "Die Datenverordnung (VO 2023/2854) regelt Zugang zu und Nutzung von Daten – wichtig für Trainingsdatenverfügbarkeit und B2B-Datenteilung im KI-Kontext.",
      long: "Anwendbar seit 12. September 2025. Kernelemente mit KI-Bezug: (1) Zugangsrechte zu vernetzten Produkten (IoT) und deren Daten – potenzielle Trainingsdatenquelle; (2) faire Vertragsbedingungen für Datenteilung zwischen Unternehmen; (3) Datenverfügbarkeit für öffentliche Stellen in Ausnahmesituationen; (4) Interoperabilitätsanforderungen für Datenaustauschdienste. Für KI-Anbieter relevant: Zugang zu Daten aus vernetzten Produkten (Autos, Maschinen, Sensoren) kann Trainingsgrundlage werden. Ergänzt Datenraum-Initiativen der EU (Gesundheitsdatenraum, Mobilitätsdatenraum etc.). Data Governance Act (VO 2022/868) regelt vertrauenswürdige Datenvermittlung." },
    en: {
      term: "Interface AI Act ↔ Data Act",
      short: "The Data Act (Regulation 2023/2854) governs access to and use of data — important for training data availability and B2B data sharing in the AI context.",
      long: "Applicable since 12 September 2025. Core elements with AI relevance: (1) access rights to connected products (IoT) and their data — potential training data source; (2) fair contractual terms for data sharing between businesses; (3) data availability to public bodies in exceptional situations; (4) interoperability requirements for data intermediation services. Relevant for AI providers: access to data from connected products (cars, machines, sensors) can become a training foundation. Complements EU data space initiatives (European Health Data Space, mobility data space etc.). Data Governance Act (Regulation 2022/868) regulates trustworthy data intermediation." },
    links: [ { label: "Data Act (VO 2023/2854)", url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj" } ],
    related: ["daten-governance", "dsgvo-schnittstelle"] },

  { id: "eu-konformitaetserklaerung", category: "ai-act-core", risk: null,
    tags: ["#DeclarationOfConformity", "#Art47", "#AnnexV"],
    de: {
      term: "EU-Konformitätserklärung",
      short: "Formelle Erklärung des Anbieters, dass ein Hochrisiko-System die Anforderungen des AI Act erfüllt (Art. 47, Anhang V).",
      long: "Die EU-Konformitätserklärung ist Voraussetzung für die CE-Kennzeichnung und das Inverkehrbringen. Anhang V listet Mindestangaben: Name und Kontaktdaten des Anbieters oder Bevollmächtigten, KI-System-Identifikation, Erklärung der alleinigen Verantwortung, Angabe zur Konformität mit AI Act und weiteren Unionsrechtsakten, Verweis auf angewandte harmonisierte Normen oder gemeinsame Spezifikationen, ggf. Name und Kennnummer der notifizierten Stelle, Datum und Ort der Ausstellung, Unterschrift. Aufbewahrung: 10 Jahre. Bei mehreren einschlägigen Rechtsakten: eine einzige Erklärung mit Verweisen auf alle Akte zulässig (Art. 47 Abs. 3)." },
    en: {
      term: "EU Declaration of Conformity",
      short: "Formal declaration by the provider that a high-risk system complies with AI Act requirements (Art. 47, Annex V).",
      long: "The EU declaration of conformity is a precondition for CE marking and placing on the market. Annex V lists minimum content: name and contact details of the provider or authorised representative, AI system identification, statement of sole responsibility, statement of compliance with the AI Act and other Union acts, reference to harmonised standards or common specifications applied, where applicable name and identification number of the notified body, date and place of issue, signature. Retention: 10 years. For multiple applicable acts: a single declaration referencing all acts is permitted (Art. 47(3))." },
    links: [ { label: "Art. 47 AI Act", url: "https://artificialintelligenceact.eu/article/47/" } ],
    related: ["ce-kennzeichnung", "konformitaetsbewertung", "technische-dokumentation"] },

  { id: "gemeinsame-spezifikationen", category: "governance", risk: null,
    tags: ["#CommonSpecifications", "#Art41", "#Fallback"],
    de: {
      term: "Gemeinsame Spezifikationen",
      short: "Von der Kommission per Durchführungsrechtsakt erlassene technische Spezifikationen als Alternative zu harmonisierten Normen (Art. 41).",
      long: "Auslöser: Wenn harmonisierte Normen für den AI Act nicht rechtzeitig, nicht angemessen oder nicht ausreichend sind, kann die Kommission gemeinsame Spezifikationen erlassen. Vorher: Konsultation des AI Board, betroffene Mitgliedstaaten, Stakeholder. Rechtsfolge: Anbieter, die den Spezifikationen entsprechen, genießen ebenfalls Konformitätsvermutung. Zurücknahme durch die Kommission möglich, sobald harmonisierte Normen vorliegen. Praxisrelevanz: Rückversicherung für den Fall, dass CEN/CENELEC JTC 21 nicht rechtzeitig liefert – Erstanwendung ab 2.8.2026 (Hochrisiko-Regeln) im Blick." },
    en: {
      term: "Common Specifications",
      short: "Technical specifications adopted by the Commission via implementing act as an alternative to harmonised standards (Art. 41).",
      long: "Trigger: where harmonised standards for the AI Act are not timely, adequate or sufficient, the Commission may adopt common specifications. Prior consultation of AI Board, affected Member States, stakeholders. Legal effect: providers meeting the specifications also benefit from a presumption of conformity. Withdrawal by the Commission is possible once harmonised standards become available. Practical relevance: a safety net in case CEN/CENELEC JTC 21 does not deliver in time — with an eye on first application on 2 Aug 2026 (high-risk rules)." },
    links: [ { label: "Art. 41 AI Act", url: "https://artificialintelligenceact.eu/article/41/" } ],
    related: ["harmonisierte-normen", "konformitaetsbewertung"] }

];
