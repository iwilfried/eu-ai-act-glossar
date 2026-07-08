/* ==================================================================
   EU AI ACT GLOSSAR · DATENDATEI
   ------------------------------------------------------------------
   380 Begriffe · bilingual DE/EN
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
    related: ["ki-system", "hochrisiko-ki", "gpai", "fristen-anwendung", "extraterritorialitaet"] },

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
    related: ["eu-ai-act", "ki", "gpai", "oecd-ki-definition"] },

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
      short: "Verbotene KI-Praktiken der obersten Risikostufe (Art. 5): u. a. Social Scoring, subliminale Manipulation, Echtzeit-Gesichtserkennung im öffentlichen Raum; Kernverbote seit 2.2.2025, 2026 um ein Verbot erweitert.",
      long: "Art. 5 AI Act listet die oberste Risikostufe: (a) unterschwellige Manipulation, (b) Ausnutzung von Vulnerabilität, (c) staatliches Social Scoring, (d) Predictive Policing rein profilbasiert, (e) ungezieltes Scraping von Gesichtsbildern, (f) Emotionserkennung am Arbeitsplatz/in Bildung (Ausnahmen: medizinisch, sicherheitsrelevant), (g) biometrische Kategorisierung sensibler Merkmale, (h) Echtzeit-Fernidentifikation im öffentlichen Raum für Strafverfolgung (eng begrenzte Ausnahmen mit richterlicher Genehmigung). Diese Kernverbote gelten seit 2.2.2025. Der Digital Omnibus ergänzte 2026 ein weiteres Verbot: KI-Systeme zur Erzeugung nicht einvernehmlicher intimer Bilddarstellungen (\"Nudifier\") und von Darstellungen sexuellen Kindesmissbrauchs, anwendbar ab 2.12.2026 (mit Schutzklausel für Systeme mit wirksamen Vorkehrungen). Verstöße: bis 35 Mio. € oder 7 % weltweiten Jahresumsatzes." },
    en: {
      term: "Prohibited AI Practices",
      short: "Prohibited AI practices of the top risk tier (Art. 5): e.g. social scoring, subliminal manipulation, real-time facial recognition in public; core bans since 2 Feb 2025, extended by one ban in 2026.",
      long: "Art. 5 AI Act sets the top risk tier: (a) subliminal manipulation, (b) exploitation of vulnerability, (c) public-authority social scoring, (d) predictive policing based solely on profiling, (e) untargeted facial-image scraping, (f) emotion recognition in workplaces and education (medical/safety exceptions), (g) biometric categorisation of sensitive traits, (h) real-time remote biometric identification in public for law enforcement (narrow exceptions with judicial authorisation). These core bans have applied since 2 Feb 2025. The Digital Omnibus added a further prohibition in 2026: AI systems generating non-consensual intimate imagery (\"nudifiers\") and child sexual abuse material, applicable from 2 Dec 2026 (with a safe-harbour clause for systems with effective safeguards). Sanctions: up to €35 million or 7% of global annual turnover." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["hochrisiko-ki", "gesichtserkennung", "anhang-ii", "biometrische-identifizierung", "biometrische-kategorisierung"] },

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
    related: ["gpai", "ai-red-teaming", "bussgeld-gpai", "modellbewertung", "dual-use"] },

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
    related: ["konformitaetsbewertung", "eu-konformitaetserklaerung", "hochrisiko-ki", "notifizierte-stelle", "inverkehrbringen"] },

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
    related: ["betreiber", "hochrisiko-ki", "gebrauchsanweisung", "xai", "proctoring"] },

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
    related: ["anbieter", "betreiber", "ki-kompetenz-organisation", "rtr-ki-servicestelle"] },

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
    related: ["bussgeld-gpai", "gpai", "marktueberwachung", "reallabor", "europaeischer-ki-ausschuss"] },

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
      long: "Jeder Mitgliedstaat muss bis 2.8.2027 mindestens ein nationales Reallabor einrichten (durch den Digital Omnibus von ursprünglich 2.8.2026 verschoben). Vorteile: priorisierter Zugang für KMU und Start-ups, kostenlose Teilnahme, juristische Begleitung, ggf. Nutzung personenbezogener Daten unter strikten Bedingungen für KI im öffentlichen Interesse (Art. 59). Vorbild: spanisches Pilot-Sandbox seit 2022." },
    en: {
      term: "Regulatory Sandbox",
      short: "Controlled testing environment under regulatory supervision in which innovative AI systems can be developed and tested before market entry (Art. 57 et seq.).",
      long: "Each Member State must establish at least one national sandbox by 2 Aug 2027 (postponed from 2 Aug 2026 by the Digital Omnibus). Benefits: priority access for SMEs and start-ups, free participation, regulatory guidance, conditional use of personal data for public-interest AI (Art. 59). Spain's pilot sandbox (2022) served as a blueprint." },
    links: [ { label: "Art. 57 AI Act", url: "https://artificialintelligenceact.eu/article/57/" } ],
    related: ["kmu", "ai-office", "wissenschaftsausnahme", "test-realbedingungen", "sandbox-datenschutz"] },

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
    related: ["ki-system", "ml", "deep-learning", "oecd-ki-definition", "turing-test"] },

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
    related: ["ml", "unueberwacht", "trainingsdaten", "klassifikation-regression", "active-learning"] },

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
    related: ["ml", "ueberwacht", "clustering", "anomalieerkennung"] },

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
    related: ["ml", "rlhf", "prozessoptimierung-ki", "belohnungsfunktion", "q-learning"] },

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
    related: ["daten-governance", "overfitting", "bias", "ueberwacht", "feature-engineering"] },

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
    related: ["trainingsdaten", "ml", "model-context-drift", "gradientenabstieg", "regularisierung"] },

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
    related: ["nn", "cnn", "transformer", "ki", "attention"] },

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
    related: ["deep-learning", "cnn", "transformer", "backpropagation", "graph-neural-network"] },

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
    related: ["deep-learning", "computer-vision", "nn", "radiologie-ki", "adas"] },

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
    related: ["llm", "embedding", "deep-learning", "nn", "multimodalitaet"] },

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
    related: ["transformer", "rag", "nlp", "tokenization", "vektordatenbank"] },

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
    related: ["image-generation", "generative-ai", "gan", "super-resolution"] },

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
    related: ["llm", "prompt-injection", "rag", "chain-of-thought", "temperatur"] },

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
    related: ["embedding", "llm", "halluzination", "prompt-engineering", "kontextfenster"] },

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
    related: ["llm", "rlhf", "foundation-model", "instruction-tuning", "transfer-learning"] },

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
    related: ["fine-tuning", "rl", "llm", "instruction-tuning", "alignment"] },

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
    related: ["rag", "llm", "temperatur", "legaltech", "textzusammenfassung"] },

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
    related: ["tokenization", "embedding", "llm", "sentiment-analyse", "content-moderation"] },

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
    related: ["nlp", "embedding", "llm", "kontextfenster", "stemming-lemmatisierung"] },

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
    related: ["cnn", "gesichtserkennung", "image-generation", "multimodalitaet", "radiologie-ki"] },

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
    related: ["verbotene-praktiken", "computer-vision", "anhang-iii", "anhang-ii", "biometrische-identifizierung"] },

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
    related: ["diffusion", "generative-ai", "transparenzpflichten", "computer-vision", "super-resolution"] },

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
    related: ["fairness", "daten-governance", "trainingsdaten", "cv-screening", "versicherung-scoring"] },

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
    related: ["bias", "xai", "cv-screening", "trustworthy-ai", "insurtech"] },

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
    related: ["fairness", "menschliche-aufsicht", "chain-of-thought", "kreditrisikomodell", "shap-lime"] },

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
    related: ["generative-ai", "transparenzpflichten", "begrenztes-risiko", "dsa-schnittstelle", "ki-wahlen"] },

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
    related: ["harmonisierte-normen", "konformitaetsbewertung", "risikomanagementsystem", "verhaltenskodex", "ai-governance"] },

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
    related: ["prompt-engineering", "adversarial", "ai-red-teaming", "tool-use", "guardrails"] },

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
    related: ["prompt-injection", "ai-red-teaming", "genauigkeit-robustheit", "data-poisoning", "evasion-attack"] },

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
    related: ["systemisches-risiko", "adversarial", "prompt-injection", "modellbewertung", "guardrails"] },

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
    related: ["einfuehrer", "anbieter", "extraterritorialitaet"] },

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
    related: ["wesentliche-aenderung", "anbieter", "downstream-anbieter", "haendler", "verwendungszweck"] },

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
    related: ["beschwerderecht", "erklaerungsrecht", "fria", "ki-haftung"] },

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
    related: ["notifizierende-behoerde", "ai-office", "schwerwiegender-vorfall", "whistleblower", "deutschland-ki-aufsicht"] },

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
    related: ["notifizierte-stelle", "marktueberwachung", "deutschland-ki-aufsicht"] },

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
    related: ["konformitaetsbewertung", "notifizierende-behoerde", "ce-kennzeichnung", "konformitaetsbewertungsverfahren"] },

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
    related: ["hochrisiko-ki", "mdr-schnittstelle", "anhang-iii", "sicherheitsbauteil", "cobot"] },

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
    related: ["hochrisiko-ki", "iso-42001", "daten-governance", "post-market-monitoring", "conformity-by-design"] },

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
    related: ["anhang-iv", "konformitaetsbewertung", "eu-konformitaetserklaerung", "model-card"] },

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
    related: ["hochrisiko-ki", "post-market-monitoring", "audit-trail"] },

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
    related: ["adversarial", "cra-schnittstelle", "nis2-schnittstelle", "produkthaftung-schnittstelle", "model-context-drift"] },

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
    related: ["menschliche-aufsicht", "betreiber", "transparenzpflichten", "verwendungszweck", "model-card"] },

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
    related: ["schwerwiegender-vorfall", "risikomanagementsystem", "aufzeichnungspflicht", "model-context-drift", "mlops"] },

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
      short: "Gestaffelte Anwendbarkeit des AI Act zwischen 2.2.2025 und 2.8.2028; der Digital Omnibus (2026) verschob zentrale Hochrisiko-Fristen nach hinten.",
      long: "Meilensteine: (1) 1.8.2024 – Inkrafttreten der VO (EU) 2024/1689; (2) 2.2.2025 – Verbote nach Art. 5 und KI-Kompetenzpflicht nach Art. 4 anwendbar; (3) 2.8.2025 – GPAI-Pflichten (Art. 53, 55), Governance-Kapitel und Sanktionen (mit Ausnahmen); (4) 2.8.2026 – Transparenzpflichten nach Art. 50. Der Digital Omnibus (politische Einigung Mai 2026, Annahme Juni 2026) verschob die Hochrisiko-Fristen deutlich: eigenständige Anhang-III-Systeme gelten nun ab 2.12.2027, in Produkte eingebettete Anhang-I-Systeme ab 2.8.2028. Die Kennzeichnungspflicht für generative Alt-Systeme (Art. 50 Abs. 2) und ein neues Verbot (Art. 5) von Nudifier-/Missbrauchsmaterial greifen ab 2.12.2026; die Frist für nationale Reallabore rückte auf 2.8.2027. GPAI-Modelle vor 2.8.2025 haben bis 2.8.2027 zur Anpassung." },
    en: {
      term: "Application Timeline (Art. 113)",
      short: "Phased applicability of the AI Act between 2 Feb 2025 and 2 Aug 2028; the Digital Omnibus (2026) pushed key high-risk deadlines back.",
      long: "Milestones: (1) 1 Aug 2024 — Regulation (EU) 2024/1689 enters into force; (2) 2 Feb 2025 — Art. 5 prohibitions and Art. 4 AI literacy duty applicable; (3) 2 Aug 2025 — GPAI duties (Arts. 53, 55), governance chapter and sanctions (with exceptions); (4) 2 Aug 2026 — transparency duties (Art. 50). The Digital Omnibus (political agreement May 2026, adoption June 2026) markedly postponed the high-risk deadlines: standalone Annex III systems now apply from 2 Dec 2027, and Annex I systems embedded in products from 2 Aug 2028. The labelling duty for legacy generative systems (Art. 50(2)) and a new Art. 5 prohibition of nudifier/abuse material take effect from 2 Dec 2026; the deadline for national sandboxes moved to 2 Aug 2027. GPAI models placed on the market before 2 Aug 2025 have until 2 Aug 2027 to adapt." },
    links: [ { label: "Art. 113 AI Act", url: "https://artificialintelligenceact.eu/article/113/" } ],
    related: ["uebergangsvorschriften", "eu-ai-act", "digital-omnibus"] },

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
    related: ["dma-schnittstelle", "deepfake", "transparenzpflichten", "verbraucherschutz-schnittstelle", "ki-wahlen"] },

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
    related: ["anhang-i", "konformitaetsbewertung", "hochrisiko-ki", "notruf-triage", "sicherheitsbauteil"] },

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
    related: ["cra-schnittstelle", "genauigkeit-robustheit", "kritische-infrastruktur", "dora", "energie-ki"] },

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
    related: ["nis2-schnittstelle", "genauigkeit-robustheit", "dora", "un-r155", "supply-chain-security-ki"] },

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
    related: ["dsgvo-schnittstelle", "genauigkeit-robustheit", "ki-haftung"] },

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
    related: ["gpai", "generative-ai", "trainingsdaten-zusammenfassung", "model-extraction"] },

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
    related: ["dsa-schnittstelle", "transparenzpflichten", "robo-advisor"] },

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
    related: ["anhang-iii", "dsgvo-schnittstelle", "fria", "emotionserkennung", "ki-beschaeftigung"] },

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
    related: ["daten-governance", "dsgvo-schnittstelle", "v2x", "supply-chain-ki"] },

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
    related: ["ce-kennzeichnung", "konformitaetsbewertung", "technische-dokumentation", "konformitaetsbewertungsverfahren"] },

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
    related: ["harmonisierte-normen", "konformitaetsbewertung"] },

  { id: "biometrische-identifizierung", category: "cv", risk: "high",
    tags: ["#Biometrie", "#AnnexIII", "#Identifizierung", "#Art3"],
    de: {
      term: "Biometrische Fernidentifizierung",
      short: "Automatisierte Erkennung natürlicher Personen anhand biometrischer Merkmale auf Distanz, ohne aktive Mitwirkung – Hochrisiko nach Anhang III Nr. 1 lit. a.",
      long: "Unterschieden wird zwischen Echtzeit-Fernidentifizierung (Erfassung, Abgleich und Identifizierung ohne wesentliche Verzögerung, teils sofort) und nachträglicher Fernidentifizierung (zeitlich versetzt). Echtzeit-Nutzung im öffentlichen Raum für Strafverfolgung ist grundsätzlich verboten (Art. 5 Abs. 1 lit. h), mit eng begrenzten Ausnahmen. Nachträgliche Fernidentifizierung gilt als Hochrisiko-System und erfordert richterliche oder behördliche Genehmigung. Abzugrenzen von biometrischer Verifizierung (1:1-Abgleich, z. B. Entsperren eines Geräts), die nicht als Fernidentifizierung gilt." },
    en: {
      term: "Remote Biometric Identification",
      short: "Automated recognition of natural persons based on biometric features at a distance, without active involvement — high-risk under Annex III(1)(a).",
      long: "A distinction is drawn between real-time remote identification (capture, matching and identification without significant delay, sometimes instantaneous) and post-remote identification (with a time lag). Real-time use in public spaces for law enforcement is generally prohibited (Art. 5(1)(h)), with narrowly limited exceptions. Post-remote identification is a high-risk system and requires judicial or administrative authorisation. To be distinguished from biometric verification (1:1 matching, e.g. unlocking a device), which does not count as remote identification." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["gesichtserkennung", "biometrische-verifizierung", "verbotene-praktiken", "anhang-iii", "biometrische-kategorisierung"] },

  { id: "biometrische-kategorisierung", category: "cv", risk: "high",
    tags: ["#Biometrie", "#AnnexIII", "#Kategorisierung", "#Art5"],
    de: {
      term: "Biometrische Kategorisierung",
      short: "Zuordnung natürlicher Personen zu Kategorien anhand biometrischer Daten (z. B. Alter, Geschlecht) – teils Hochrisiko, teils verboten.",
      long: "Hochrisiko nach Anhang III Nr. 1 lit. b, sofern nicht ohnehin verboten. Verboten (Art. 5 Abs. 1 lit. g) ist die Kategorisierung, die sensible Merkmale ableitet oder erschließt: Rasse, politische Meinung, Gewerkschaftszugehörigkeit, religiöse/weltanschauliche Überzeugung, Sexualleben oder sexuelle Orientierung. Ausnahme: rechtmäßig erworbene Datensätze im Strafverfolgungskontext. Nicht erfasst: rein technische Kategorisierung zur Bildbearbeitung. Zusätzlich greift die DSGVO (Art. 9 – besondere Kategorien personenbezogener Daten)." },
    en: {
      term: "Biometric Categorisation",
      short: "Assigning natural persons to categories based on biometric data (e.g. age, sex) — partly high-risk, partly prohibited.",
      long: "High-risk under Annex III(1)(b) unless already prohibited. Prohibited (Art. 5(1)(g)) is categorisation that deduces or infers sensitive attributes: race, political opinion, trade union membership, religious or philosophical belief, sex life or sexual orientation. Exception: lawfully acquired datasets in the law enforcement context. Not covered: purely technical categorisation for image processing. The GDPR also applies (Art. 9 — special categories of personal data)." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["biometrische-identifizierung", "verbotene-praktiken", "emotionserkennung"] },

  { id: "emotionserkennung", category: "cv", risk: "high",
    tags: ["#Emotion", "#AnnexIII", "#Art5", "#Arbeitsplatz"],
    de: {
      term: "Emotionserkennungssystem",
      short: "KI-System zur Erkennung oder Ableitung von Emotionen oder Absichten natürlicher Personen anhand biometrischer Daten (Art. 3 Nr. 39).",
      long: "Am Arbeitsplatz und in Bildungseinrichtungen grundsätzlich verboten (Art. 5 Abs. 1 lit. f), außer aus medizinischen oder sicherheitsbezogenen Gründen (z. B. Müdigkeitserkennung bei Piloten). In anderen Kontexten Hochrisiko nach Anhang III Nr. 1 lit. c mit Transparenzpflicht nach Art. 50 Abs. 3. Wissenschaftlich umstritten: Die Ableitung innerer Zustände aus Mimik, Stimme oder Körperhaltung gilt als methodisch unzuverlässig. Nicht erfasst: reine Erkennung offensichtlicher Ausdrücke wie Lächeln ohne Ableitung emotionaler Zustände." },
    en: {
      term: "Emotion Recognition System",
      short: "AI system for identifying or inferring emotions or intentions of natural persons based on biometric data (Art. 3(39)).",
      long: "Generally prohibited in workplaces and educational institutions (Art. 5(1)(f)), except for medical or safety reasons (e.g. fatigue detection for pilots). In other contexts high-risk under Annex III(1)(c) with transparency duty under Art. 50(3). Scientifically contested: inferring internal states from facial expression, voice or posture is considered methodologically unreliable. Not covered: mere detection of obvious expressions such as a smile without inferring emotional states." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["biometrische-kategorisierung", "verbotene-praktiken", "arbeitsrecht-schnittstelle", "ki-bildung", "proctoring"] },

  { id: "biometrische-verifizierung", category: "cv", risk: null,
    tags: ["#Biometrie", "#Verifizierung", "#1zu1"],
    de: {
      term: "Biometrische Verifizierung",
      short: "Abgleich der biometrischen Daten einer Person mit einem einzelnen gespeicherten Referenzdatensatz zur Bestätigung der Identität (1:1-Abgleich).",
      long: "Anders als die Fernidentifizierung (1:n-Abgleich gegen eine Datenbank) ist die Verifizierung typischerweise kein Hochrisiko-System, da sie aktive Mitwirkung und Einwilligung voraussetzt. Beispiele: Entsperren des Smartphones per Gesicht oder Fingerabdruck, Zugangskontrolle mit bewusster Vorlage. Der AI Act nimmt die reine Verifizierung ausdrücklich vom Hochrisiko-Bereich aus (Erwägungsgrund 15/54). DSGVO bleibt anwendbar: biometrische Daten sind besondere Kategorien (Art. 9)." },
    en: {
      term: "Biometric Verification",
      short: "Matching a person's biometric data against a single stored reference record to confirm identity (1:1 matching).",
      long: "Unlike remote identification (1:n matching against a database), verification is typically not a high-risk system, as it presupposes active involvement and consent. Examples: unlocking a smartphone by face or fingerprint, access control with deliberate presentation. The AI Act expressly excludes pure verification from the high-risk area (Recitals 15/54). The GDPR still applies: biometric data are special categories (Art. 9)." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["biometrische-identifizierung", "gesichtserkennung"] },

  { id: "kritische-infrastruktur", category: "ai-act-core", risk: "high",
    tags: ["#KritischeInfrastruktur", "#AnnexIII", "#Sicherheit"],
    de: {
      term: "KI in kritischer Infrastruktur",
      short: "Sicherheitskomponenten von KI-Systemen im Management und Betrieb kritischer Infrastruktur – Hochrisiko nach Anhang III Nr. 2.",
      long: "Erfasst sind Sicherheitsbauteile in der Verwaltung und im Betrieb kritischer digitaler Infrastruktur, des Straßenverkehrs sowie der Versorgung mit Wasser, Gas, Wärme und Strom. Zweck: Ausfälle oder Fehlfunktionen können Leben und Gesundheit vieler Menschen gefährden. Abgrenzung: reine Verwaltungs-KI ohne Sicherheitsrelevanz fällt nicht darunter. Enger Bezug zur NIS-2-Richtlinie (Cybersicherheit kritischer Einrichtungen) und zur CER-Richtlinie (Resilienz kritischer Einrichtungen). Sonderregel für das Erklärungsrecht: bei Anhang III Nr. 2 kein individueller Erklärungsanspruch (Art. 86 Abs. 3)." },
    en: {
      term: "AI in Critical Infrastructure",
      short: "Safety components of AI systems in the management and operation of critical infrastructure — high-risk under Annex III(2).",
      long: "Covered are safety components in the management and operation of critical digital infrastructure, road traffic, and the supply of water, gas, heating and electricity. Purpose: failures or malfunctions can endanger the life and health of many people. Delimitation: purely administrative AI without safety relevance is not covered. Close links to the NIS 2 Directive (cybersecurity of critical entities) and the CER Directive (resilience of critical entities). Special rule for the right to explanation: no individual explanation claim for Annex III(2) (Art. 86(3))." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["anhang-iii", "nis2-schnittstelle", "sicherheitsbauteil", "notruf-triage", "verkehrsmanagement-ki"] },

  { id: "ki-bildung", category: "ai-act-core", risk: "high",
    tags: ["#Bildung", "#AnnexIII", "#Education"],
    de: {
      term: "KI in allgemeiner und beruflicher Bildung",
      short: "KI-Systeme für Zugang, Bewertung und Steuerung in Bildungseinrichtungen – Hochrisiko nach Anhang III Nr. 3.",
      long: "Vier erfasste Anwendungsfälle: (a) Entscheidung über Zugang oder Zuweisung zu Bildungseinrichtungen; (b) Bewertung von Lernergebnissen, auch zur Steuerung des Lernprozesses; (c) Bewertung des angemessenen Bildungsniveaus einer Person; (d) Überwachung und Erkennung unzulässigen Verhaltens bei Prüfungen (Proctoring). Begründung: Bildungsentscheidungen prägen Lebenswege und Zugangschancen. Häufig Überschneidung mit DSGVO (Minderjährigenschutz) und Emotionserkennungsverbot (Art. 5). FRIA für öffentliche Bildungseinrichtungen verpflichtend (Art. 27)." },
    en: {
      term: "AI in Education and Vocational Training",
      short: "AI systems for access, assessment and steering in educational institutions — high-risk under Annex III(3).",
      long: "Four covered use cases: (a) deciding on access or admission to educational institutions; (b) evaluating learning outcomes, including to steer the learning process; (c) assessing the appropriate level of education for a person; (d) monitoring and detecting prohibited behaviour during tests (proctoring). Rationale: educational decisions shape life paths and access opportunities. Frequent overlap with GDPR (protection of minors) and the emotion recognition ban (Art. 5). FRIA mandatory for public educational institutions (Art. 27)." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["proctoring", "anhang-iii", "emotionserkennung", "vulnerable-gruppen"] },

  { id: "proctoring", category: "ai-act-core", risk: "high",
    tags: ["#Proctoring", "#Bildung", "#AnnexIII", "#Ueberwachung"],
    de: {
      term: "Prüfungsüberwachung (Proctoring)",
      short: "KI-gestützte Überwachung von Prüfungen zur Erkennung von Täuschungsversuchen – Hochrisiko nach Anhang III Nr. 3 lit. d.",
      long: "Proctoring-Systeme analysieren Video, Audio, Blickrichtung, Tastatureingaben und Umgebung, um unzulässiges Verhalten zu erkennen. Rechtlich heikel: Kombination aus Überwachung, oft biometrischer Analyse und potenzieller Emotionserkennung (verboten in Bildung nach Art. 5). Datenschutzrechtlich problematisch (Videoüberwachung im Privatraum der Prüflinge), diskriminierungsanfällig (Fehlerkennung bei dunkler Haut, neurodivergentem Verhalten). Mehrere europäische Gerichte haben Proctoring-Einsatz eingeschränkt. Menschliche Aufsicht (Art. 14) und FRIA besonders relevant." },
    en: {
      term: "Exam Proctoring",
      short: "AI-supported monitoring of exams to detect cheating attempts — high-risk under Annex III(3)(d).",
      long: "Proctoring systems analyse video, audio, gaze direction, keystrokes and environment to detect prohibited behaviour. Legally sensitive: a combination of surveillance, often biometric analysis and potential emotion recognition (prohibited in education under Art. 5). Problematic under data protection law (video surveillance in the candidates' private space), prone to discrimination (misrecognition of dark skin, neurodivergent behaviour). Several European courts have restricted proctoring. Human oversight (Art. 14) and FRIA are particularly relevant." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["ki-bildung", "emotionserkennung", "menschliche-aufsicht"] },

  { id: "ki-beschaeftigung", category: "ai-act-core", risk: "high",
    tags: ["#Beschaeftigung", "#HR", "#AnnexIII", "#Employment"],
    de: {
      term: "KI in Beschäftigung und Personalmanagement",
      short: "KI-Systeme für Personalauswahl und Personalführung – Hochrisiko nach Anhang III Nr. 4.",
      long: "Zwei erfasste Kategorien: (a) Einstellung und Auswahl – gezielte Stellenanzeigen, Analyse und Filterung von Bewerbungen, Bewertung von Bewerbern; (b) Entscheidungen über Arbeitsbedingungen, Beförderung, Kündigung, Aufgabenzuweisung anhand von Verhalten oder persönlichen Eigenschaften, sowie Leistungs- und Verhaltensüberwachung. Begründung: erhebliche Auswirkungen auf Berufschancen und Existenzgrundlage. Enge Verzahnung mit Arbeitsrecht, Mitbestimmung (§ 87 BetrVG), Antidiskriminierungsrecht (AGG) und Plattformarbeits-Richtlinie. FRIA für viele Betreiber verpflichtend." },
    en: {
      term: "AI in Employment and Workforce Management",
      short: "AI systems for recruitment and personnel management — high-risk under Annex III(4).",
      long: "Two covered categories: (a) recruitment and selection — targeted job ads, analysis and filtering of applications, evaluation of candidates; (b) decisions on working conditions, promotion, termination, task allocation based on behaviour or personal traits, and performance and behaviour monitoring. Rationale: significant impact on career opportunities and livelihood. Closely intertwined with employment law, co-determination, anti-discrimination law, and the Platform Work Directive. FRIA mandatory for many deployers." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["cv-screening", "algorithmisches-management", "arbeitsrecht-schnittstelle", "anhang-iii", "people-analytics"] },

  { id: "cv-screening", category: "ai-act-core", risk: "high",
    tags: ["#Recruiting", "#CVScreening", "#Bias", "#AnnexIII"],
    de: {
      term: "Automatisiertes Bewerber-Screening",
      short: "KI-gestützte Analyse, Filterung und Rangordnung von Bewerbungen – Hochrisiko nach Anhang III Nr. 4 lit. a.",
      long: "Systeme scannen Lebensläufe, extrahieren Merkmale, gleichen sie mit Anforderungsprofilen ab und erstellen Ranglisten. Berühmtes Negativbeispiel: Amazons Recruiting-KI benachteiligte Frauen, weil sie aus historischen Einstellungsdaten lernte. Zentrale Risiken: Proxy-Diskriminierung (scheinbar neutrale Merkmale korrelieren mit geschützten Eigenschaften), fehlende Nachvollziehbarkeit, Automatisierungsbias der Recruiter. Pflichten: Daten-Governance (Art. 10), Bias-Prüfung, menschliche Aufsicht (Art. 14), Transparenz gegenüber Bewerbern, FRIA." },
    en: {
      term: "Automated Applicant Screening",
      short: "AI-supported analysis, filtering and ranking of job applications — high-risk under Annex III(4)(a).",
      long: "Systems scan CVs, extract features, match them against requirement profiles and produce rankings. Famous cautionary example: Amazon's recruiting AI disadvantaged women because it learned from historical hiring data. Key risks: proxy discrimination (seemingly neutral features correlate with protected attributes), lack of explainability, recruiters' automation bias. Duties: data governance (Art. 10), bias examination, human oversight (Art. 14), transparency towards applicants, FRIA." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["ki-beschaeftigung", "bias", "fairness", "skills-matching"] },

  { id: "algorithmisches-management", category: "ai-act-core", risk: "high",
    tags: ["#AlgorithmicManagement", "#PlatformWork", "#AnnexIII"],
    de: {
      term: "Algorithmisches Management",
      short: "Steuerung, Bewertung und Überwachung von Beschäftigten durch KI-Systeme, insbesondere in der Plattformarbeit – Hochrisiko nach Anhang III Nr. 4 lit. b.",
      long: "Umfasst automatisierte Aufgabenzuweisung, Leistungsbewertung in Echtzeit, dynamische Bezahlung, Kündigungsentscheidungen und Verhaltensüberwachung. Typisch bei Liefer- und Fahrdiensten (Gig Economy). Ergänzend zur AI-Act-Einstufung greift die Plattformarbeits-Richtlinie (RL 2024/2831): Transparenzpflichten über eingesetzte Systeme, Recht auf menschliche Überprüfung wichtiger Entscheidungen, Verbot der Verarbeitung bestimmter Daten (emotionaler Zustand, private Gespräche). Menschliche Aufsicht und Mitbestimmung sind zentrale Compliance-Hebel." },
    en: {
      term: "Algorithmic Management",
      short: "Steering, evaluating and monitoring workers through AI systems, especially in platform work — high-risk under Annex III(4)(b).",
      long: "Covers automated task allocation, real-time performance evaluation, dynamic pay, termination decisions and behaviour monitoring. Typical in delivery and ride-hailing services (gig economy). Alongside AI Act classification, the Platform Work Directive (Directive 2024/2831) applies: transparency duties on the systems used, right to human review of important decisions, prohibition of processing certain data (emotional state, private conversations). Human oversight and co-determination are key compliance levers." },
    links: [ { label: "Plattformarbeits-RL", url: "https://eur-lex.europa.eu/eli/dir/2024/2831/oj" } ],
    related: ["ki-beschaeftigung", "arbeitsrecht-schnittstelle", "workforce-planning"] },

  { id: "kreditwuerdigkeit", category: "ai-act-core", risk: "high",
    tags: ["#CreditScoring", "#AnnexIII", "#Finanzen"],
    de: {
      term: "Kreditwürdigkeitsprüfung (Credit Scoring)",
      short: "KI-Systeme zur Bewertung der Kreditwürdigkeit oder Bonität natürlicher Personen – Hochrisiko nach Anhang III Nr. 5 lit. b.",
      long: "Erfasst die Bewertung der Kreditwürdigkeit und die Erstellung von Bonitäts-Scores, mit Ausnahme der Betrugserkennung bei Finanzdienstleistungen. Betrifft Banken, Kreditvermittler, teils Telekommunikations- und Versorgungsunternehmen. Berühmte Fälle diskriminierender Scores (Apple Card, SCHUFA-Verfahren vor dem EuGH 2023). Enge Verzahnung mit DSGVO Art. 22 (automatisierte Einzelentscheidung), Verbraucherkreditrichtlinie und Antidiskriminierungsrecht. Betroffene haben Anspruch auf Erklärung (Art. 86). Daten-Governance und Bias-Prüfung besonders kritisch." },
    en: {
      term: "Creditworthiness Assessment (Credit Scoring)",
      short: "AI systems for evaluating the creditworthiness or credit scores of natural persons — high-risk under Annex III(5)(b).",
      long: "Covers assessment of creditworthiness and creation of credit scores, except fraud detection in financial services. Affects banks, credit intermediaries, sometimes telecom and utility companies. Famous cases of discriminatory scores (Apple Card, the SCHUFA case before the CJEU in 2023). Closely intertwined with GDPR Art. 22 (automated individual decision), Consumer Credit Directive and anti-discrimination law. Affected persons are entitled to an explanation (Art. 86). Data governance and bias examination are particularly critical." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["versicherung-scoring", "sozialleistungen", "erklaerungsrecht", "anhang-iii", "profiling"] },

  { id: "versicherung-scoring", category: "ai-act-core", risk: "high",
    tags: ["#Versicherung", "#AnnexIII", "#Insurance"],
    de: {
      term: "Risikobewertung in der Versicherung",
      short: "KI-Systeme für Risikobewertung und Preisgestaltung in der Lebens- und Krankenversicherung – Hochrisiko nach Anhang III Nr. 5 lit. c.",
      long: "Ausdrücklich erfasst sind Lebens- und Krankenversicherung, weil fehlerhafte oder diskriminierende Bewertungen den Zugang zu existenziell wichtigem Schutz verwehren können. Risiken: Nutzung sensibler Gesundheits- oder Verhaltensdaten, Proxy-Diskriminierung, Entsolidarisierung durch hochgranulare Individualtarife. Verzahnung mit DSGVO (Gesundheitsdaten, Art. 9), Versicherungsvertragsrecht, Antidiskriminierungsrecht (Verbot der Geschlechtsdifferenzierung nach EuGH Test-Achats). Andere Versicherungssparten (Kfz, Haftpflicht) sind nicht per se hochrisikorelevant." },
    en: {
      term: "Insurance Risk Assessment",
      short: "AI systems for risk assessment and pricing in life and health insurance — high-risk under Annex III(5)(c).",
      long: "Life and health insurance are expressly covered because faulty or discriminatory assessments can deny access to existentially important protection. Risks: use of sensitive health or behavioural data, proxy discrimination, erosion of solidarity through highly granular individual tariffs. Intertwined with GDPR (health data, Art. 9), insurance contract law, anti-discrimination law (prohibition of gender differentiation per the CJEU Test-Achats ruling). Other insurance lines (motor, liability) are not per se high-risk." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["kreditwuerdigkeit", "bias", "insurtech"] },

  { id: "sozialleistungen", category: "ai-act-core", risk: "high",
    tags: ["#Sozialleistungen", "#AnnexIII", "#PublicSector"],
    de: {
      term: "KI bei öffentlichen Sozialleistungen",
      short: "KI-Systeme für Bewilligung, Kürzung oder Rückforderung wesentlicher öffentlicher Unterstützungsleistungen – Hochrisiko nach Anhang III Nr. 5 lit. a.",
      long: "Erfasst Entscheidungen über Anspruch, Gewährung, Reduzierung, Widerruf oder Rückforderung von Sozialleistungen und -diensten, einschließlich Gesundheitsdiensten. Warnendes Beispiel: der niederländische SyRI-Skandal und die Kindergeld-Affäre (toeslagenaffaire), bei der ein Betrugserkennungssystem Tausende Familien zu Unrecht ruinierte. Betrifft Behörden im öffentlichen Sektor mit verpflichtender FRIA (Art. 27). Grundrechtssensibel: Zugang zu existenzsichernden Leistungen. Erklärungsrecht (Art. 86) und Beschwerderecht (Art. 85) besonders relevant." },
    en: {
      term: "AI in Public Social Benefits",
      short: "AI systems for granting, reducing or reclaiming essential public assistance benefits — high-risk under Annex III(5)(a).",
      long: "Covers decisions on eligibility, granting, reduction, revocation or reclaiming of social benefits and services, including healthcare services. Cautionary example: the Dutch SyRI scandal and the childcare benefits affair (toeslagenaffaire), where a fraud-detection system wrongfully ruined thousands of families. Affects public-sector bodies with mandatory FRIA (Art. 27). Fundamental-rights sensitive: access to subsistence benefits. Right to explanation (Art. 86) and right to complain (Art. 85) are particularly relevant." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["kreditwuerdigkeit", "fria", "erklaerungsrecht"] },

  { id: "notruf-triage", category: "ai-act-core", risk: "high",
    tags: ["#Notruf", "#Triage", "#AnnexIII", "#Emergency"],
    de: {
      term: "KI in Notdiensten und Triage",
      short: "KI-Systeme zur Disposition von Notdiensten und zur Priorisierung von Hilfeleistungen – Hochrisiko nach Anhang III Nr. 5 lit. d.",
      long: "Erfasst sind KI-Systeme, die den Einsatz von Notfall- und Rettungsdiensten steuern oder bei der Priorisierung von Notrufen (Triage) eingesetzt werden – Feuerwehr, Rettungsdienst, medizinische Erstversorgung. Fehlfunktionen können unmittelbar lebensbedrohlich sein. Besondere Anforderungen an Genauigkeit, Robustheit (Art. 15) und menschliche Aufsicht. Häufig Überschneidung mit Medizinprodukterecht (MDR), wenn die KI als Medizinprodukt eingestuft wird. Zusätzliche Sensibilität durch Priorisierungsentscheidungen über Menschenleben." },
    en: {
      term: "AI in Emergency Services and Triage",
      short: "AI systems for dispatching emergency services and prioritising assistance — high-risk under Annex III(5)(d).",
      long: "Covers AI systems that steer the deployment of emergency and rescue services or are used in prioritising emergency calls (triage) — fire brigade, ambulance, first medical response. Malfunctions can be immediately life-threatening. Special requirements on accuracy, robustness (Art. 15) and human oversight. Frequent overlap with medical device law (MDR) where the AI qualifies as a medical device. Additional sensitivity from prioritisation decisions over human lives." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["kritische-infrastruktur", "mdr-schnittstelle"] },

  { id: "ki-strafverfolgung", category: "ai-act-core", risk: "high",
    tags: ["#Strafverfolgung", "#AnnexIII", "#LawEnforcement"],
    de: {
      term: "KI in der Strafverfolgung",
      short: "KI-Systeme, die von Strafverfolgungsbehörden zur Risikobewertung, Beweisauswertung und Profilerstellung eingesetzt werden – Hochrisiko nach Anhang III Nr. 6.",
      long: "Erfasst sind u. a.: Risikobewertung natürlicher Personen als potenzielle Opfer oder Täter, Lügendetektoren, Beweismittelbewertung, Bewertung der Zuverlässigkeit von Beweisen, Rückfallprognosen und Profiling im Rahmen von Aufklärung und Verfolgung. Grundrechtssensibelster Bereich neben Biometrie. Zusätzliche Schutzmaßnahmen und teils eingeschränkte Registrierungspflichten (nicht-öffentlicher Teil der EU-Datenbank). Enge Grenzen durch die Grundrechtecharta, EMRK und die Datenschutz-Richtlinie für Justiz und Inneres (RL 2016/680, JI-Richtlinie)." },
    en: {
      term: "AI in Law Enforcement",
      short: "AI systems used by law enforcement for risk assessment, evidence evaluation and profiling — high-risk under Annex III(6).",
      long: "Covered include: risk assessment of natural persons as potential victims or offenders, polygraphs, evaluation of evidence, assessment of the reliability of evidence, recidivism prediction and profiling in the course of detection and prosecution. The most fundamental-rights-sensitive area alongside biometrics. Additional safeguards and partly restricted registration duties (non-public part of the EU database). Tight limits from the Charter of Fundamental Rights, the ECHR and the Law Enforcement Directive (Directive 2016/680)." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["predictive-policing", "biometrische-identifizierung", "anhang-iii", "profiling", "ki-migration"] },

  { id: "predictive-policing", category: "ai-act-core", risk: "prohibited",
    tags: ["#PredictivePolicing", "#Art5", "#Profiling"],
    de: {
      term: "Predictive Policing (vorhersagende Polizeiarbeit)",
      short: "Vorhersage von Straftaten – rein profilbasiert gegenüber Einzelpersonen verboten (Art. 5 Abs. 1 lit. d), ortsbezogen teils als Hochrisiko zulässig.",
      long: "Verboten ist die Risikobewertung natürlicher Personen ausschließlich auf Basis von Profiling oder Persönlichkeitsmerkmalen, um die Wahrscheinlichkeit einer Straftat vorherzusagen (Art. 5 Abs. 1 lit. d). Ausnahme: Systeme, die menschliche Bewertungen auf Basis objektiver, überprüfbarer und mit der Straftat zusammenhängender Fakten unterstützen. Ortsbezogene Vorhersage (Hotspot-Mapping) ist nicht per se verboten, kann aber als Hochrisiko-System der Strafverfolgung gelten. Kritik: Rückkopplungseffekte verstärken bestehende Diskriminierung in Polizeidaten (over-policing)." },
    en: {
      term: "Predictive Policing",
      short: "Predicting crime — prohibited when based solely on profiling of individuals (Art. 5(1)(d)); location-based forms partly permitted as high-risk.",
      long: "Prohibited is risk assessment of natural persons based solely on profiling or personality traits to predict the likelihood of an offence (Art. 5(1)(d)). Exception: systems supporting human assessment based on objective, verifiable facts directly linked to a criminal activity. Location-based prediction (hotspot mapping) is not prohibited per se but may qualify as high-risk law-enforcement AI. Criticism: feedback loops reinforce existing discrimination in police data (over-policing)." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["ki-strafverfolgung", "verbotene-praktiken", "profiling"] },

  { id: "ki-migration", category: "ai-act-core", risk: "high",
    tags: ["#Migration", "#Grenzkontrolle", "#AnnexIII", "#Asyl"],
    de: {
      term: "KI in Migration, Asyl und Grenzkontrolle",
      short: "KI-Systeme in der Migrations-, Asyl- und Grenzverwaltung – Hochrisiko nach Anhang III Nr. 7.",
      long: "Erfasst sind u. a.: Lügendetektoren und ähnliche Werkzeuge, Risikobewertung von Personen, die einreisen wollen, Prüfung von Anträgen auf Asyl, Visum und Aufenthaltstitel einschließlich Bewertung der Beweismittel, Erkennung und Identifizierung im Migrationskontext. Grundrechtssensibel wegen vulnerabler Betroffener und existenzieller Folgen. Umstritten: Einsatz an EU-Außengrenzen (z. B. das iBorderCtrl-Pilotprojekt). Enge Grenzen durch Asyl- und Migrationsrecht, Grundrechtecharta und Non-Refoulement-Prinzip. Teils reduzierte Registrierungspflichten." },
    en: {
      term: "AI in Migration, Asylum and Border Control",
      short: "AI systems in migration, asylum and border management — high-risk under Annex III(7).",
      long: "Covered include: polygraphs and similar tools, risk assessment of persons seeking to enter, examination of applications for asylum, visa and residence permits including assessment of evidence, detection and identification in the migration context. Fundamental-rights sensitive because of vulnerable persons and existential consequences. Controversial: use at EU external borders (e.g. the iBorderCtrl pilot project). Tight limits from asylum and migration law, the Charter of Fundamental Rights and the non-refoulement principle. Partly reduced registration duties." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["ki-strafverfolgung", "anhang-iii", "biometrische-identifizierung"] },

  { id: "ki-justiz", category: "ai-act-core", risk: "high",
    tags: ["#Justiz", "#AnnexIII", "#Judiciary"],
    de: {
      term: "KI in der Rechtspflege",
      short: "KI-Systeme, die Justizbehörden bei der Auslegung von Fakten und Recht unterstützen – Hochrisiko nach Anhang III Nr. 8 lit. a.",
      long: "Erfasst sind Systeme, die eine Justizbehörde bei der Recherche, Auslegung von Sachverhalten und Rechtsnormen sowie der Anwendung des Rechts auf konkrete Sachverhalte unterstützen, sowie vergleichbarer Einsatz in der alternativen Streitbeilegung. Ziel: Schutz der richterlichen Unabhängigkeit und des Anspruchs auf ein faires Verfahren (Art. 47 GRC). Nicht erfasst: rein administrative Hilfstätigkeiten wie Anonymisierung oder Aktenverwaltung. Warnendes Beispiel: das COMPAS-System in den USA (rassistische Verzerrung bei Rückfallprognosen). Menschliche Letztentscheidung bleibt zwingend." },
    en: {
      term: "AI in the Administration of Justice",
      short: "AI systems assisting judicial authorities in interpreting facts and law — high-risk under Annex III(8)(a).",
      long: "Covered are systems assisting a judicial authority in researching and interpreting facts and legal norms and applying the law to concrete facts, as well as comparable use in alternative dispute resolution. Aim: protecting judicial independence and the right to a fair trial (Art. 47 Charter). Not covered: purely administrative support such as anonymisation or file management. Cautionary example: the COMPAS system in the US (racial bias in recidivism prediction). Final human decision remains mandatory." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["ki-strafverfolgung", "menschliche-aufsicht", "anhang-iii", "legaltech"] },

  { id: "ki-wahlen", category: "ai-act-core", risk: "high",
    tags: ["#Wahlen", "#Demokratie", "#AnnexIII", "#Elections"],
    de: {
      term: "KI zur Wahlbeeinflussung",
      short: "KI-Systeme, die das Wahlverhalten oder den Ausgang von Wahlen und Referenden beeinflussen können – Hochrisiko nach Anhang III Nr. 8 lit. b.",
      long: "Erfasst sind Systeme, die eingesetzt werden, um das Ergebnis einer Wahl oder eines Referendums oder das Wahlverhalten natürlicher Personen zu beeinflussen. Ausnahme: Systeme, deren Output natürliche Personen nicht direkt ausgesetzt sind (z. B. reine Kampagnen-Organisationstools). Hintergrund: Cambridge-Analytica-Skandal, Mikrotargeting, KI-generierte Desinformation und Deepfakes im Wahlkampf. Verzahnung mit DSA (systemische Risiken von Plattformen), der Verordnung über politische Werbung und dem Verbot manipulativer Praktiken (Art. 5)." },
    en: {
      term: "AI Influencing Elections",
      short: "AI systems capable of influencing voting behaviour or the outcome of elections and referendums — high-risk under Annex III(8)(b).",
      long: "Covered are systems used to influence the outcome of an election or referendum or the voting behaviour of natural persons. Exception: systems whose output natural persons are not directly exposed to (e.g. pure campaign organisation tools). Background: the Cambridge Analytica scandal, microtargeting, AI-generated disinformation and deepfakes in campaigns. Intertwined with the DSA (systemic platform risks), the Regulation on political advertising and the prohibition of manipulative practices (Art. 5)." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["deepfake", "dsa-schnittstelle", "manipulative-praktiken"] },

  { id: "hochrisiko-ausnahme", category: "ai-act-core", risk: null,
    tags: ["#Art6", "#Ausnahme", "#Filterregel"],
    de: {
      term: "Ausnahme von der Hochrisiko-Einstufung (Art. 6 Abs. 3)",
      short: "Ein System aus Anhang III gilt nicht als hochrisikorelevant, wenn es kein erhebliches Risiko für Gesundheit, Sicherheit oder Grundrechte darstellt.",
      long: "Vier Fallgruppen, in denen die Hochrisiko-Vermutung entfällt: (a) das System führt nur eine eng begrenzte Verfahrensaufgabe aus; (b) es verbessert lediglich das Ergebnis einer zuvor abgeschlossenen menschlichen Tätigkeit; (c) es erkennt Entscheidungsmuster oder Abweichungen, ohne die menschliche Bewertung ohne angemessene Überprüfung zu ersetzen; (d) es bereitet eine Bewertung nur vor. Wichtig: Profiling natürlicher Personen gilt immer als Hochrisiko. Wer die Ausnahme nutzt, muss dies dokumentieren und registrieren – die Behörde kann widersprechen. Kommissionsleitlinien konkretisieren die Anwendung." },
    en: {
      term: "Exception from High-Risk Classification (Art. 6(3))",
      short: "A system from Annex III is not high-risk if it does not pose a significant risk to health, safety or fundamental rights.",
      long: "Four case groups where the high-risk presumption falls away: (a) the system performs only a narrow procedural task; (b) it merely improves the result of a previously completed human activity; (c) it detects decision patterns or deviations without replacing human assessment absent adequate review; (d) it only prepares an assessment. Important: profiling of natural persons is always high-risk. Those relying on the exception must document and register it — the authority may object. Commission guidelines specify application." },
    links: [ { label: "Art. 6 AI Act", url: "https://artificialintelligenceact.eu/article/6/" } ],
    related: ["hochrisiko-ki", "profiling", "anhang-iii"] },

  { id: "profiling", category: "ai-act-core", risk: "high",
    tags: ["#Profiling", "#Art6", "#DSGVO"],
    de: {
      term: "Profiling",
      short: "Automatisierte Verarbeitung personenbezogener Daten zur Bewertung persönlicher Aspekte einer natürlichen Person – stets hochrisikorelevant im Anhang-III-Kontext.",
      long: "Der Begriff folgt Art. 4 Nr. 4 DSGVO: automatisierte Auswertung, um Aspekte wie Arbeitsleistung, wirtschaftliche Lage, Gesundheit, Vorlieben, Verhalten, Aufenthaltsort oder Bewegungen zu analysieren oder vorherzusagen. Im AI Act zentral: Führt ein Anhang-III-System Profiling durch, kann es die Hochrisiko-Ausnahme nach Art. 6 Abs. 3 nicht in Anspruch nehmen – es bleibt immer hochrisikorelevant. Enge Verzahnung mit DSGVO Art. 22 (automatisierte Einzelentscheidung) und dem Erklärungsrecht (Art. 86 AI Act)." },
    en: {
      term: "Profiling",
      short: "Automated processing of personal data to evaluate personal aspects of a natural person — always high-risk in the Annex III context.",
      long: "The term follows Art. 4(4) GDPR: automated evaluation to analyse or predict aspects such as work performance, economic situation, health, preferences, behaviour, location or movements. Central in the AI Act: where an Annex III system performs profiling, it cannot rely on the high-risk exception under Art. 6(3) — it always remains high-risk. Closely intertwined with GDPR Art. 22 (automated individual decision) and the right to explanation (Art. 86 AI Act)." },
    links: [ { label: "Art. 6 AI Act", url: "https://artificialintelligenceact.eu/article/6/" } ],
    related: ["hochrisiko-ausnahme", "kreditwuerdigkeit", "dsgvo-schnittstelle", "ki-strafverfolgung", "predictive-policing"] },

  { id: "sicherheitsbauteil", category: "ai-act-core", risk: "high",
    tags: ["#SafetyComponent", "#Art3", "#AnnexI"],
    de: {
      term: "Sicherheitsbauteil",
      short: "Bestandteil eines Produkts oder Systems, dessen Ausfall die Gesundheit oder Sicherheit von Personen gefährdet (Art. 3 Nr. 14).",
      long: "Ist ein KI-System ein Sicherheitsbauteil eines Produkts, das unter die Unionsharmonisierungsrechtsakte in Anhang I fällt (z. B. Maschine, Medizinprodukt, Aufzug), oder ist es selbst ein solches Produkt, gilt es als Hochrisiko-System (Art. 6 Abs. 1). Beispiele: KI-Bremsassistent im Fahrzeug, KI-Steuerung eines Operationsroboters, KI-Kollisionsschutz einer Maschine. Die Konformitätsbewertung erfolgt integriert nach dem jeweiligen Sektorrecht. Abgrenzung: rein komfort- oder effizienzorientierte KI ohne Sicherheitsrelevanz ist kein Sicherheitsbauteil." },
    en: {
      term: "Safety Component",
      short: "A component of a product or system whose failure endangers the health or safety of persons (Art. 3(14)).",
      long: "Where an AI system is a safety component of a product falling under the Union harmonisation legislation in Annex I (e.g. machine, medical device, lift), or is itself such a product, it qualifies as a high-risk system (Art. 6(1)). Examples: an AI braking assistant in a vehicle, AI control of a surgical robot, AI collision protection of a machine. Conformity assessment is conducted in an integrated manner under the respective sectoral law. Delimitation: purely comfort- or efficiency-oriented AI without safety relevance is not a safety component." },
    links: [ { label: "Art. 6 AI Act", url: "https://artificialintelligenceact.eu/article/6/" } ],
    related: ["anhang-i", "mdr-schnittstelle", "hochrisiko-ki", "kritische-infrastruktur", "samd"] },

  { id: "verwendungszweck", category: "ai-act-core", risk: null,
    tags: ["#IntendedPurpose", "#Art3", "#Zweckbindung"],
    de: {
      term: "Zweckbestimmung (Intended Purpose)",
      short: "Die vom Anbieter festgelegte bestimmungsgemäße Verwendung eines KI-Systems, einschließlich Kontext und Bedingungen (Art. 3 Nr. 12).",
      long: "Die Zweckbestimmung ist Angelpunkt der Risikoklassifizierung: Ob ein System hochrisikorelevant ist, hängt maßgeblich vom vorgesehenen Verwendungszweck ab. Der Anbieter legt ihn in der Gebrauchsanweisung fest. Ändert ein Betreiber den Zweck so, dass daraus ein Hochrisiko-System wird, wird er selbst zum Anbieter (Provider Flip, Art. 25). Abzugrenzen von der vernünftigerweise vorhersehbaren Fehlanwendung (Art. 3 Nr. 13), die im Risikomanagement (Art. 9) ebenfalls berücksichtigt werden muss." },
    en: {
      term: "Intended Purpose",
      short: "The use for which an AI system is intended by the provider, including context and conditions (Art. 3(12)).",
      long: "The intended purpose is the linchpin of risk classification: whether a system is high-risk depends decisively on its intended use. The provider sets it out in the instructions for use. If a deployer changes the purpose such that a high-risk system results, the deployer becomes a provider (provider flip, Art. 25). To be distinguished from reasonably foreseeable misuse (Art. 3(13)), which must also be considered in risk management (Art. 9)." },
    links: [ { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" } ],
    related: ["provider-flip", "gebrauchsanweisung", "hochrisiko-ki"] },

  { id: "vulnerable-gruppen", category: "ethics", risk: null,
    tags: ["#Vulnerabilitaet", "#Art5", "#Grundrechte"],
    de: {
      term: "Schutz vulnerabler Gruppen",
      short: "Der AI Act schützt besonders schutzbedürftige Personen vor Ausnutzung durch KI-Systeme – Kinder, ältere Menschen, Menschen mit Behinderung, wirtschaftlich Schwache.",
      long: "Verboten ist die Ausnutzung der Vulnerabilität aufgrund von Alter, Behinderung oder sozialer/wirtschaftlicher Lage, um das Verhalten so zu beeinflussen, dass erheblicher Schaden entsteht (Art. 5 Abs. 1 lit. b). Ergänzend: Das Risikomanagement für Hochrisiko-KI muss besonders die Auswirkungen auf Kinder und vulnerable Gruppen berücksichtigen (Art. 9 Abs. 9), und die Datenqualität (Art. 10) muss gruppenspezifische Verzerrungen adressieren. Verzahnung mit der Barrierefreiheitsrichtlinie (European Accessibility Act) und Minderjährigenschutz in der DSGVO." },
    en: {
      term: "Protection of Vulnerable Groups",
      short: "The AI Act protects particularly vulnerable persons from exploitation by AI systems — children, older people, people with disabilities, the economically weak.",
      long: "Prohibited is the exploitation of vulnerabilities due to age, disability or social/economic situation to distort behaviour in a way that causes significant harm (Art. 5(1)(b)). In addition: risk management for high-risk AI must specifically consider impacts on children and vulnerable groups (Art. 9(9)), and data quality (Art. 10) must address group-specific bias. Intertwined with the European Accessibility Act and protection of minors in the GDPR." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["manipulative-praktiken", "verbotene-praktiken", "ki-bildung"] },

  { id: "manipulative-praktiken", category: "ai-act-core", risk: "prohibited",
    tags: ["#Manipulation", "#Art5", "#DarkPatterns"],
    de: {
      term: "Manipulative und täuschende Techniken",
      short: "KI-Systeme, die unterschwellige, manipulative oder täuschende Techniken einsetzen, um das Verhalten erheblich zu verzerren – verboten nach Art. 5 Abs. 1 lit. a.",
      long: "Verboten ist der Einsatz von Techniken, die außerhalb des Bewusstseins wirken oder gezielt manipulieren oder täuschen, mit dem Ergebnis oder dem Ziel, das Verhalten wesentlich zu beeinflussen und dadurch erheblichen Schaden zu verursachen. Umfasst z. B. subliminale Reize oder KI-gestützte Dark Patterns, die informierte Entscheidungen untergraben. Abgrenzung: übliche, rechtmäßige Werbung und Überzeugung bleiben zulässig. Verzahnung mit Verbraucherschutzrecht (UGP-Richtlinie), DSA und dem geplanten Digital Fairness Act." },
    en: {
      term: "Manipulative and Deceptive Techniques",
      short: "AI systems using subliminal, manipulative or deceptive techniques to materially distort behaviour — prohibited under Art. 5(1)(a).",
      long: "Prohibited is the use of techniques that operate beyond awareness or purposefully manipulate or deceive, with the effect or objective of materially distorting behaviour and thereby causing significant harm. Covers e.g. subliminal stimuli or AI-supported dark patterns that undermine informed decisions. Delimitation: ordinary lawful advertising and persuasion remain permitted. Intertwined with consumer protection law (UCPD), the DSA and the planned Digital Fairness Act." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["verbotene-praktiken", "vulnerable-gruppen", "ki-wahlen", "digital-omnibus"] },

  { id: "scraping-gesichtsbilder", category: "cv", risk: "prohibited",
    tags: ["#Scraping", "#Art5", "#Clearview"],
    de: {
      term: "Ungezieltes Auslesen von Gesichtsbildern",
      short: "Aufbau oder Erweiterung von Gesichtserkennungsdatenbanken durch ungezieltes Auslesen von Bildern aus dem Internet oder Videoüberwachung – verboten nach Art. 5 Abs. 1 lit. e.",
      long: "Das Verbot zielt direkt auf Praktiken wie die von Clearview AI, das Milliarden Gesichtsbilder ohne Einwilligung aus sozialen Netzwerken und dem Web gesammelt hat. Untersagt ist das ungezielte (\"untargeted\") Scraping zur Erstellung oder Erweiterung von Gesichtserkennungsdatenbanken. Mehrere europäische Datenschutzbehörden hatten Clearview bereits mit Millionenbußgeldern belegt (Italien, Griechenland, Frankreich, Niederlande). Ergänzt das DSGVO-Verbot und stärkt es durch eine ausdrückliche KI-spezifische Regel." },
    en: {
      term: "Untargeted Scraping of Facial Images",
      short: "Building or expanding facial-recognition databases through untargeted scraping of images from the internet or CCTV — prohibited under Art. 5(1)(e).",
      long: "The prohibition directly targets practices such as those of Clearview AI, which collected billions of facial images without consent from social networks and the web. Untargeted scraping to create or expand facial-recognition databases is prohibited. Several European data protection authorities had already fined Clearview millions (Italy, Greece, France, Netherlands). Complements the GDPR prohibition and strengthens it with an explicit AI-specific rule." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["gesichtserkennung", "verbotene-praktiken", "biometrische-identifizierung"] },

  { id: "trainingsdaten-zusammenfassung", category: "ai-act-core", risk: null,
    tags: ["#GPAI", "#Art53", "#Transparenz", "#Urheberrecht"],
    de: {
      term: "Trainingsdaten-Zusammenfassung",
      short: "GPAI-Anbieter müssen eine hinreichend detaillierte öffentliche Zusammenfassung der für das Training verwendeten Inhalte bereitstellen (Art. 53 Abs. 1 lit. d).",
      long: "Ziel: Rechteinhabern und der Öffentlichkeit Transparenz über die Datengrundlage großer Modelle geben und die Wahrnehmung von Rechten (insbesondere Urheberrecht) ermöglichen. Das AI Office stellt eine verbindliche Vorlage bereit. Die Zusammenfassung soll den Umfang der Daten beschreiben (wichtige Datensammlungen, große Datenbanken, allgemeine Beschreibung sonstiger Quellen) – ohne Geschäftsgeheimnisse vollständig offenzulegen. Umstritten ist der geforderte Detailgrad. Zentraler Baustein der Urheberrechts-Compliance nach Art. 53 Abs. 1 lit. c." },
    en: {
      term: "Training Data Summary",
      short: "GPAI providers must provide a sufficiently detailed public summary of the content used for training (Art. 53(1)(d)).",
      long: "Aim: to give rightholders and the public transparency about the data basis of large models and to enable the exercise of rights (especially copyright). The AI Office provides a binding template. The summary should describe the scope of data (main data collections, large databases, general description of other sources) — without fully disclosing trade secrets. The required level of detail is contested. A central building block of copyright compliance under Art. 53(1)(c)." },
    links: [ { label: "Art. 53 AI Act", url: "https://artificialintelligenceact.eu/article/53/" } ],
    related: ["gpai", "urheberrecht-schnittstelle", "daten-governance", "datasheet"] },

  { id: "modellbewertung", category: "ai-act-core", risk: "systemic",
    tags: ["#GPAI", "#Art55", "#Evaluation", "#SystemicRisk"],
    de: {
      term: "Modellbewertung (Model Evaluation)",
      short: "Anbieter von GPAI mit systemischem Risiko müssen ihre Modelle mit standardisierten Protokollen bewerten, einschließlich adversarialer Tests (Art. 55 Abs. 1 lit. a).",
      long: "Pflicht zur systematischen Evaluierung, um systemische Risiken zu identifizieren und zu mindern. Umfasst standardisierte Benchmarks und adversariales Testing (AI Red Teaming), um gefährliche Fähigkeiten aufzudecken – etwa in den Bereichen Cyberangriffe, chemische/biologische Risiken, Verlust menschlicher Kontrolle, Manipulation. Ergebnisse fließen in Risikominderung, Dokumentation und ggf. Vorfallmeldungen ein. Der GPAI Code of Practice konkretisiert Methodik und Berichtsformate. Verzahnung mit AI-Red-Teaming und Vorfallmeldung." },
    en: {
      term: "Model Evaluation",
      short: "Providers of GPAI with systemic risk must evaluate their models using standardised protocols, including adversarial testing (Art. 55(1)(a)).",
      long: "Duty to systematically evaluate in order to identify and mitigate systemic risks. Covers standardised benchmarks and adversarial testing (AI red teaming) to uncover dangerous capabilities — e.g. in cyberattacks, chemical/biological risks, loss of human control, manipulation. Results feed into risk mitigation, documentation and, where applicable, incident reporting. The GPAI Code of Practice specifies methodology and reporting formats. Intertwined with AI red teaming and incident reporting." },
    links: [ { label: "Art. 55 AI Act", url: "https://artificialintelligenceact.eu/article/55/" } ],
    related: ["systemisches-risiko", "ai-red-teaming", "gpai", "benchmark", "dual-use"] },

  { id: "inverkehrbringen", category: "ai-act-core", risk: null,
    tags: ["#PlacingOnMarket", "#Art3", "#Inbetriebnahme"],
    de: {
      term: "Inverkehrbringen und Inbetriebnahme",
      short: "Zwei zentrale Anknüpfungspunkte des AI Act: die erstmalige Bereitstellung auf dem Unionsmarkt bzw. die erstmalige Nutzung für den bestimmungsgemäßen Zweck (Art. 3 Nr. 9–11).",
      long: "Inverkehrbringen (\"placing on the market\") bezeichnet die erstmalige Bereitstellung eines KI-Systems auf dem Unionsmarkt. Bereitstellung auf dem Markt ist jede Lieferung zum Vertrieb oder zur Nutzung im Rahmen einer Geschäftstätigkeit. Inbetriebnahme (\"putting into service\") ist die erstmalige Nutzung durch den Betreiber für den bestimmungsgemäßen Zweck. An diese Zeitpunkte knüpfen die meisten Pflichten an – insbesondere die Konformitätsbewertung, die vor dem Inverkehrbringen abgeschlossen sein muss. Maßgeblich auch für die zeitliche Anwendbarkeit und die Übergangsvorschriften." },
    en: {
      term: "Placing on the Market and Putting into Service",
      short: "Two central connecting factors of the AI Act: first making available on the Union market, and first use for the intended purpose (Art. 3(9)–(11)).",
      long: "Placing on the market means the first making available of an AI system on the Union market. Making available on the market is any supply for distribution or use in the course of a commercial activity. Putting into service is the first use by the deployer for the intended purpose. Most duties attach to these moments — in particular conformity assessment, which must be completed before placing on the market. Also decisive for temporal applicability and transitional provisions." },
    links: [ { label: "Art. 3 AI Act", url: "https://artificialintelligenceact.eu/article/3/" } ],
    related: ["konformitaetsbewertung", "ce-kennzeichnung", "extraterritorialitaet"] },

  { id: "extraterritorialitaet", category: "ai-act-core", risk: null,
    tags: ["#Marktortprinzip", "#Art2", "#Extraterritorial"],
    de: {
      term: "Räumlicher Anwendungsbereich (Marktortprinzip)",
      short: "Der AI Act gilt auch für Akteure außerhalb der EU, sofern das KI-System in der Union in Verkehr gebracht wird oder sein Output in der EU verwendet wird (Art. 2).",
      long: "Erfasst werden: Anbieter, die in der EU KI-Systeme in Verkehr bringen (unabhängig vom Sitz); Betreiber mit Sitz in der EU; sowie – besonders weitreichend – Anbieter und Betreiber aus Drittländern, wenn der vom KI-System erzeugte Output in der Union verwendet wird. Damit wirkt der AI Act ähnlich extraterritorial wie die DSGVO. Drittland-Anbieter müssen einen Bevollmächtigten in der EU benennen. Ausnahmen: militärische/verteidigungsbezogene Zwecke, reine Forschung und Entwicklung, persönliche nicht-berufliche Nutzung." },
    en: {
      term: "Territorial Scope (Market Location Principle)",
      short: "The AI Act also applies to actors outside the EU where the AI system is placed on the market in the Union or its output is used in the EU (Art. 2).",
      long: "Covered are: providers placing AI systems on the market in the EU (regardless of establishment); deployers established in the EU; and — particularly far-reaching — providers and deployers from third countries where the output produced by the AI system is used in the Union. The AI Act thus has an extraterritorial reach similar to the GDPR. Third-country providers must designate an authorised representative in the EU. Exceptions: military/defence purposes, pure research and development, personal non-professional use." },
    links: [ { label: "Art. 2 AI Act", url: "https://artificialintelligenceact.eu/article/2/" } ],
    related: ["inverkehrbringen", "bevollmaechtigter", "eu-ai-act", "bruessel-effekt"] },

  { id: "open-source-ausnahme", category: "ai-act-core", risk: null,
    tags: ["#OpenSource", "#Art2", "#FreieLizenz"],
    de: {
      term: "Open-Source-Ausnahme",
      short: "Unter freien und quelloffenen Lizenzen bereitgestellte KI-Systeme und -Modelle sind teilweise von den Pflichten des AI Act ausgenommen (Art. 2, Art. 53).",
      long: "Der AI Act privilegiert Open-Source-KI, um Innovation und Forschung nicht zu behindern. Ausgenommen sind KI-Systeme unter freier und quelloffener Lizenz – jedoch nicht, wenn sie als Hochrisiko-System, verbotene Praktik oder unter Transparenzpflichten (Art. 50) in Verkehr gebracht werden. Für GPAI-Modelle gilt: Open-Source-Modelle sind von einigen Dokumentationspflichten befreit (Art. 53 Abs. 2), nicht aber von der Urheberrechts-Compliance und der Trainingsdaten-Zusammenfassung. Keine Privilegierung bei GPAI mit systemischem Risiko. Die Abgrenzung, was als echte Open-Source-Lizenz gilt, ist umstritten." },
    en: {
      term: "Open-Source Exception",
      short: "AI systems and models provided under free and open-source licences are partly exempt from AI Act duties (Art. 2, Art. 53).",
      long: "The AI Act privileges open-source AI so as not to hinder innovation and research. Exempt are AI systems under a free and open-source licence — but not where placed on the market as high-risk systems, prohibited practices, or under transparency duties (Art. 50). For GPAI models: open-source models are relieved of some documentation duties (Art. 53(2)), but not of copyright compliance and the training data summary. No privilege for GPAI with systemic risk. What counts as a genuine open-source licence is contested." },
    links: [ { label: "Art. 2 AI Act", url: "https://artificialintelligenceact.eu/article/2/" } ],
    related: ["gpai", "wissenschaftsausnahme", "foundation-model", "supply-chain-security-ki", "ki-souveraenitaet"] },

  { id: "wissenschaftsausnahme", category: "ai-act-core", risk: null,
    tags: ["#Forschung", "#Art2", "#RnD"],
    de: {
      term: "Forschungs- und Entwicklungsausnahme",
      short: "KI-Systeme und -Modelle, die ausschließlich zu Forschungs-, Test- und Entwicklungszwecken entwickelt werden, sind vom AI Act ausgenommen (Art. 2 Abs. 6, 8).",
      long: "Die Ausnahme gilt für Forschungs-, Test- und Entwicklungstätigkeiten vor dem Inverkehrbringen oder der Inbetriebnahme. Sobald ein System diese Phase verlässt und auf den Markt gebracht oder real eingesetzt wird, greifen die Pflichten. Tests unter Realbedingungen (Art. 60) sind gesondert geregelt und nicht generell ausgenommen. Ziel: Innovation und Grundlagenforschung nicht behindern. Die DSGVO und andere Rechtsakte bleiben auch in der Forschungsphase anwendbar. Abzugrenzen vom Reallabor (Art. 57), das ein strukturiertes behördliches Testumfeld bietet." },
    en: {
      term: "Research and Development Exception",
      short: "AI systems and models developed solely for research, testing and development purposes are exempt from the AI Act (Art. 2(6), (8)).",
      long: "The exception applies to research, testing and development activities prior to placing on the market or putting into service. Once a system leaves this phase and is placed on the market or deployed in the real world, the duties apply. Testing in real-world conditions (Art. 60) is separately regulated and not generally exempt. Aim: not to hinder innovation and basic research. The GDPR and other acts remain applicable even in the research phase. To be distinguished from the regulatory sandbox (Art. 57), which offers a structured supervised testing environment." },
    links: [ { label: "Art. 2 AI Act", url: "https://artificialintelligenceact.eu/article/2/" } ],
    related: ["open-source-ausnahme", "reallabor", "test-realbedingungen", "arzneimittelforschung-ki", "sandbox-datenschutz"] },

  { id: "wasserzeichen", category: "ai-act-core", risk: "limited",
    tags: ["#Watermarking", "#Art50", "#C2PA", "#SynthID"],
    de: {
      term: "Kennzeichnung KI-generierter Inhalte (Watermarking)",
      short: "Anbieter generativer KI müssen synthetische Inhalte maschinenlesbar als künstlich erzeugt kennzeichnen (Art. 50 Abs. 2).",
      long: "Die Kennzeichnung muss maschinenlesbar und robust sein, sodass Inhalte als KI-generiert oder -manipuliert erkennbar bleiben. Technische Ansätze: unsichtbare Wasserzeichen (Google SynthID), Herkunfts-Metadaten nach dem C2PA-Standard (Content Credentials), kryptografische Signaturen. Ergänzend müssen Betreiber Deepfakes offenlegen (Art. 50 Abs. 4). Herausforderungen: Wasserzeichen lassen sich teils entfernen, Interoperabilität der Standards ist noch unvollständig. Das AI Office fördert harmonisierte technische Lösungen. Verzahnung mit DSA-Maßnahmen gegen Desinformation." },
    en: {
      term: "Labelling of AI-Generated Content (Watermarking)",
      short: "Providers of generative AI must mark synthetic content as artificially generated in a machine-readable way (Art. 50(2)).",
      long: "The marking must be machine-readable and robust so that content remains identifiable as AI-generated or manipulated. Technical approaches: invisible watermarks (Google SynthID), provenance metadata under the C2PA standard (Content Credentials), cryptographic signatures. In addition, deployers must disclose deepfakes (Art. 50(4)). Challenges: watermarks can sometimes be removed, standard interoperability is still incomplete. The AI Office promotes harmonised technical solutions. Intertwined with DSA measures against disinformation." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" }, { label: "C2PA", url: "https://c2pa.org/" } ],
    related: ["deepfake", "transparenzpflichten", "generative-ai", "text-to-speech", "china-kennzeichnung"] },

  { id: "test-realbedingungen", category: "ai-act-core", risk: null,
    tags: ["#RealWorldTesting", "#Art60", "#Erprobung"],
    de: {
      term: "Tests unter Realbedingungen",
      short: "Erprobung von Hochrisiko-KI außerhalb eines Reallabors unter realen Bedingungen vor dem Inverkehrbringen – unter strengen Auflagen zulässig (Art. 60).",
      long: "Anbieter dürfen Hochrisiko-Systeme unter Realbedingungen testen, sofern sie einen genehmigten Testplan haben, sich bei der Marktüberwachungsbehörde registrieren und strenge Schutzvorkehrungen einhalten. Kernvoraussetzung: informierte Einwilligung der Testteilnehmer (Art. 61), Widerrufsrecht, zeitliche Begrenzung (grundsätzlich sechs Monate, verlängerbar), menschliche Aufsicht, Rückgängigmachung von Entscheidungen. Betroffene behalten alle Rechte aus DSGVO und AI Act. Abzugrenzen vom Reallabor (Art. 57), das ein behördlich begleitetes, geschlossenes Umfeld bietet." },
    en: {
      term: "Testing in Real-World Conditions",
      short: "Trialling high-risk AI outside a sandbox under real-world conditions before placing on the market — permitted under strict conditions (Art. 60).",
      long: "Providers may test high-risk systems in real-world conditions provided they have an approved testing plan, register with the market surveillance authority and observe strict safeguards. Core requirement: informed consent of test subjects (Art. 61), right of withdrawal, time limit (generally six months, extendable), human oversight, reversibility of decisions. Affected persons retain all rights under the GDPR and AI Act. To be distinguished from the regulatory sandbox (Art. 57), which offers a supervised, closed environment." },
    links: [ { label: "Art. 60 AI Act", url: "https://artificialintelligenceact.eu/article/60/" } ],
    related: ["reallabor", "wissenschaftsausnahme"] },

  { id: "trustworthy-ai", category: "ethics", risk: null,
    tags: ["#TrustworthyAI", "#HLEG", "#Ethik"],
    de: {
      term: "Vertrauenswürdige KI (Trustworthy AI)",
      short: "Leitkonzept hinter dem AI Act: KI soll rechtmäßig, ethisch und robust sein. Zurückgehend auf die Ethik-Leitlinien der EU-Expertengruppe (HLEG, 2019).",
      long: "Die von der High-Level Expert Group on AI 2019 formulierten sieben Anforderungen bilden das ethische Fundament des AI Act: (1) menschliches Handeln und Aufsicht, (2) technische Robustheit und Sicherheit, (3) Privatsphäre und Datenqualität, (4) Transparenz, (5) Vielfalt, Nichtdiskriminierung und Fairness, (6) gesellschaftliches und ökologisches Wohlergehen, (7) Rechenschaftspflicht. Der AI Act überführt viele dieser Prinzipien in verbindliche Pflichten für Hochrisiko-KI. Freiwillige Verhaltenskodizes (Art. 95) sollen die Prinzipien auch für Nicht-Hochrisiko-Systeme fördern." },
    en: {
      term: "Trustworthy AI",
      short: "The guiding concept behind the AI Act: AI should be lawful, ethical and robust. Rooted in the EU expert group's ethics guidelines (HLEG, 2019).",
      long: "The seven requirements formulated by the High-Level Expert Group on AI in 2019 form the ethical foundation of the AI Act: (1) human agency and oversight, (2) technical robustness and safety, (3) privacy and data quality, (4) transparency, (5) diversity, non-discrimination and fairness, (6) societal and environmental well-being, (7) accountability. The AI Act translates many of these principles into binding duties for high-risk AI. Voluntary codes of conduct (Art. 95) aim to promote the principles for non-high-risk systems too." },
    links: [ { label: "Ethics Guidelines for Trustworthy AI", url: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" } ],
    related: ["fairness", "menschliche-aufsicht", "verhaltenskodex", "alignment", "constitutional-ai"] },

  { id: "verhaltenskodex", category: "governance", risk: null,
    tags: ["#CodeOfConduct", "#Art95", "#Freiwillig"],
    de: {
      term: "Freiwillige Verhaltenskodizes (Art. 95)",
      short: "Der AI Act fördert freiwillige Verhaltenskodizes, mit denen auch Nicht-Hochrisiko-Systeme Anforderungen der vertrauenswürdigen KI übernehmen können.",
      long: "Die Kommission und das AI Board unterstützen die Ausarbeitung von Kodizes, die Betreibern und Anbietern die freiwillige Anwendung von Hochrisiko-Anforderungen oder weitergehender Ziele ermöglichen: Umweltverträglichkeit, Barrierefreiheit, Beteiligung von Stakeholdern, Diversität der Entwicklungsteams. Abzugrenzen vom GPAI Code of Practice (Art. 56), der spezifisch die GPAI-Pflichten konkretisiert. Verhaltenskodizes sind ein Instrument der Ko-Regulierung und können Reputations- und Vertrauensvorteile schaffen, ohne rechtlich verpflichtend zu sein." },
    en: {
      term: "Voluntary Codes of Conduct (Art. 95)",
      short: "The AI Act promotes voluntary codes of conduct through which non-high-risk systems can also adopt trustworthy-AI requirements.",
      long: "The Commission and AI Board support the drawing up of codes enabling deployers and providers to voluntarily apply high-risk requirements or more ambitious goals: environmental sustainability, accessibility, stakeholder participation, diversity of development teams. To be distinguished from the GPAI Code of Practice (Art. 56), which specifically operationalises GPAI duties. Codes of conduct are a co-regulation instrument and can create reputational and trust advantages without being legally binding." },
    links: [ { label: "Art. 95 AI Act", url: "https://artificialintelligenceact.eu/article/95/" } ],
    related: ["trustworthy-ai", "iso-42001", "ki-nachhaltigkeit", "g7-hiroshima", "kanada-aida"] },

  { id: "ki-agent", category: "llm", risk: null,
    tags: ["#Agent", "#Autonomie", "#ToolUse", "#GenAI"],
    de: {
      term: "KI-Agent (Agentic AI)",
      short: "KI-System, das eigenständig Ziele verfolgt, indem es plant, Werkzeuge nutzt und mehrschrittige Aufgaben mit begrenzter menschlicher Aufsicht ausführt.",
      long: "Anders als ein einfacher Chatbot, der nur auf einzelne Anfragen antwortet, zerlegt ein Agent ein Ziel in Teilschritte, ruft Werkzeuge auf (Suche, Code-Ausführung, APIs), bewertet Zwischenergebnisse und passt seinen Plan an. Typische Bausteine: ein LLM als Steuerungseinheit, Werkzeug-Anbindung (Tool-Use), Gedächtnis und eine Schleife aus Planen-Handeln-Beobachten. Agentische Systeme werfen im AI-Act-Kontext besondere Fragen zu menschlicher Aufsicht (Art. 14), Nachvollziehbarkeit und Haftung auf, da sie Handlungen mit realen Folgen auslösen können." },
    en: {
      term: "AI Agent (Agentic AI)",
      short: "An AI system that autonomously pursues goals by planning, using tools and executing multi-step tasks with limited human oversight.",
      long: "Unlike a simple chatbot that only responds to individual prompts, an agent decomposes a goal into sub-steps, calls tools (search, code execution, APIs), evaluates intermediate results and adapts its plan. Typical components: an LLM as controller, tool integration, memory and a plan-act-observe loop. In the AI Act context, agentic systems raise particular questions about human oversight (Art. 14), traceability and liability, as they can trigger actions with real-world consequences." },
    links: [ { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" } ],
    related: ["tool-use", "function-calling", "mcp", "reasoning-modell", "llm"] },

  { id: "tool-use", category: "llm", risk: null,
    tags: ["#ToolUse", "#FunctionCalling", "#Agent"],
    de: {
      term: "Werkzeugnutzung (Tool-Use)",
      short: "Fähigkeit eines LLM, externe Werkzeuge wie Suchmaschinen, Rechner, Datenbanken oder APIs aufzurufen, um Aufgaben zu lösen, die es allein nicht bewältigt.",
      long: "Das Modell erkennt, wann ein Werkzeug nötig ist, formuliert den Aufruf strukturiert (oft als JSON), erhält das Ergebnis zurück und verarbeitet es weiter. Tool-Use überwindet zentrale Grenzen reiner Sprachmodelle: fehlender Echtzeit-Zugriff, unzuverlässige Arithmetik, veraltetes Wissen. Technisch eng verwandt mit Function Calling. Grundlage moderner KI-Agenten. Sicherheitsrelevant, weil Werkzeuge reale Aktionen auslösen können – ein Einfallstor für Prompt-Injection-Angriffe." },
    en: {
      term: "Tool Use",
      short: "An LLM's ability to call external tools such as search engines, calculators, databases or APIs to solve tasks it cannot handle alone.",
      long: "The model recognises when a tool is needed, formulates the call in a structured way (often as JSON), receives the result and processes it further. Tool use overcomes key limits of pure language models: no real-time access, unreliable arithmetic, outdated knowledge. Technically closely related to function calling. The foundation of modern AI agents. Security-relevant because tools can trigger real actions — an entry point for prompt-injection attacks." },
    links: [ { label: "Anthropic Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" } ],
    related: ["function-calling", "ki-agent", "mcp", "prompt-injection"] },

  { id: "function-calling", category: "llm", risk: null,
    tags: ["#FunctionCalling", "#API", "#StructuredOutput"],
    de: {
      term: "Function Calling",
      short: "Mechanismus, mit dem ein LLM strukturierte Funktionsaufrufe erzeugt, die von einer umgebenden Anwendung ausgeführt werden.",
      long: "Der Entwickler beschreibt verfügbare Funktionen mit Name, Zweck und Parametern (als Schema). Das Modell entscheidet, ob und welche Funktion mit welchen Argumenten aufgerufen werden soll, und gibt dies maschinenlesbar zurück. Die Anwendung führt die Funktion aus und liefert das Ergebnis zurück ins Gespräch. Function Calling ist die technische Grundlage für Tool-Use und Agenten und ermöglicht die zuverlässige Erzeugung strukturierter Ausgaben (structured output)." },
    en: {
      term: "Function Calling",
      short: "A mechanism by which an LLM produces structured function calls that are executed by a surrounding application.",
      long: "The developer describes available functions with name, purpose and parameters (as a schema). The model decides whether and which function to call with which arguments and returns this in machine-readable form. The application executes the function and feeds the result back into the conversation. Function calling is the technical foundation for tool use and agents and enables reliable generation of structured output." },
    links: [ { label: "Anthropic Tool Use", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" } ],
    related: ["tool-use", "ki-agent", "mcp"] },

  { id: "mcp", category: "llm", risk: null,
    tags: ["#MCP", "#ModelContextProtocol", "#Interoperabilitaet"],
    de: {
      term: "Model Context Protocol (MCP)",
      short: "Offener Standard, der KI-Anwendungen eine einheitliche Schnittstelle bietet, um Werkzeuge, Datenquellen und Dienste anzubinden.",
      long: "MCP wurde 2024 von Anthropic vorgestellt und als offener Standard veröffentlicht. Ziel: die Vielzahl individueller Integrationen zwischen KI-Modellen und externen Systemen durch ein einheitliches Protokoll ersetzen – vergleichbar mit einem \"USB-C für KI-Werkzeuge\". Ein MCP-Server stellt Ressourcen und Werkzeuge bereit, ein MCP-Client (die KI-Anwendung) nutzt sie. Der Standard hat sich schnell verbreitet und wird von mehreren Anbietern unterstützt. Relevant für Interoperabilität und die Architektur agentischer Systeme." },
    en: {
      term: "Model Context Protocol (MCP)",
      short: "An open standard providing AI applications with a uniform interface to connect tools, data sources and services.",
      long: "MCP was introduced by Anthropic in 2024 and released as an open standard. Aim: to replace the multitude of bespoke integrations between AI models and external systems with a single protocol — comparable to a \"USB-C for AI tools\". An MCP server exposes resources and tools; an MCP client (the AI application) uses them. The standard spread quickly and is supported by several providers. Relevant to interoperability and the architecture of agentic systems." },
    links: [ { label: "MCP Specification", url: "https://modelcontextprotocol.io/" } ],
    related: ["tool-use", "ki-agent", "function-calling"] },

  { id: "multimodalitaet", category: "llm", risk: null,
    tags: ["#Multimodal", "#Vision", "#Audio"],
    de: {
      term: "Multimodalität",
      short: "Fähigkeit eines KI-Modells, mehrere Datentypen – Text, Bild, Audio, Video – gemeinsam zu verarbeiten und zu erzeugen.",
      long: "Multimodale Modelle bilden verschiedene Eingabetypen in einem gemeinsamen Repräsentationsraum ab und können so z. B. ein Bild beschreiben, aus Text ein Bild erzeugen oder gesprochene Sprache verstehen. Technisch werden Modalitäten meist über spezialisierte Encoder in Embeddings überführt, die ein gemeinsames Transformer-Rückgrat verarbeitet. Beispiele: Bildbeschreibung, Dokumentenanalyse, Sprachassistenten. Im AI-Act-Kontext relevant, weil multimodale Systeme neue Transparenz- und Kennzeichnungsfragen aufwerfen (z. B. bei generierten Bildern und Deepfakes)." },
    en: {
      term: "Multimodality",
      short: "The ability of an AI model to jointly process and generate multiple data types — text, image, audio, video.",
      long: "Multimodal models map different input types into a shared representation space and can thus, for example, describe an image, generate an image from text or understand spoken language. Technically, modalities are usually converted into embeddings via specialised encoders processed by a shared transformer backbone. Examples: image captioning, document analysis, voice assistants. Relevant in the AI Act context because multimodal systems raise new transparency and labelling questions (e.g. for generated images and deepfakes)." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["transformer", "computer-vision", "generative-ai", "spracherkennung-asr", "vision-language-model"] },

  { id: "kontextfenster", category: "llm", risk: null,
    tags: ["#ContextWindow", "#Token", "#Speicher"],
    de: {
      term: "Kontextfenster (Context Window)",
      short: "Die maximale Menge an Text (gemessen in Token), die ein Sprachmodell in einer Anfrage gleichzeitig berücksichtigen kann.",
      long: "Das Kontextfenster umfasst sowohl die Eingabe (Prompt, Dokumente, Gesprächsverlauf) als auch die erzeugte Ausgabe. Frühe Modelle hatten wenige tausend Token, moderne Modelle reichen bis zu Hunderttausenden oder Millionen. Ein größeres Fenster erlaubt die Verarbeitung ganzer Bücher oder Codebasen, erhöht aber Rechenaufwand und Kosten und kann zu Qualitätsverlust in der Mitte langer Kontexte führen (\"lost in the middle\"). Relevant für RAG-Architekturen und die Verarbeitung umfangreicher Dokumente." },
    en: {
      term: "Context Window",
      short: "The maximum amount of text (measured in tokens) a language model can consider simultaneously in one request.",
      long: "The context window includes both the input (prompt, documents, conversation history) and the generated output. Early models had a few thousand tokens; modern models reach hundreds of thousands or millions. A larger window allows processing whole books or codebases but increases compute and cost and can cause quality loss in the middle of long contexts (\"lost in the middle\"). Relevant to RAG architectures and processing large documents." },
    links: [ { label: "Anthropic Docs", url: "https://docs.anthropic.com/" } ],
    related: ["tokenization", "rag", "llm", "vektordatenbank"] },

  { id: "reasoning-modell", category: "llm", risk: null,
    tags: ["#Reasoning", "#ChainOfThought", "#TestTimeCompute"],
    de: {
      term: "Reasoning-Modell",
      short: "Sprachmodell, das vor der Antwort explizit mehrschrittige Denkprozesse durchläuft, um komplexe Aufgaben zuverlässiger zu lösen.",
      long: "Reasoning-Modelle erzeugen vor der finalen Antwort eine oft verborgene Kette von Zwischenschritten (Chain-of-Thought) und investieren dafür zusätzliche Rechenzeit zur Laufzeit (\"test-time compute\"). Dadurch erreichen sie bei Mathematik, Logik, Programmierung und Planung deutlich bessere Ergebnisse als klassische Modelle. Der Ansatz verschiebt Leistung von reiner Modellgröße hin zu mehr Rechenzeit pro Anfrage. Trade-off: höhere Latenz und Kosten. Beispiele solcher Modellfamilien erschienen ab 2024/2025." },
    en: {
      term: "Reasoning Model",
      short: "A language model that explicitly runs through multi-step reasoning before answering, to solve complex tasks more reliably.",
      long: "Reasoning models generate an often hidden chain of intermediate steps (chain-of-thought) before the final answer, investing additional compute at run time (\"test-time compute\"). This yields markedly better results in mathematics, logic, programming and planning than classic models. The approach shifts performance from sheer model size towards more compute per request. Trade-off: higher latency and cost. Examples of such model families appeared from 2024/2025." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["chain-of-thought", "inferenz", "llm", "ki-agent", "emergente-faehigkeiten"] },

  { id: "chain-of-thought", category: "llm", risk: null,
    tags: ["#ChainOfThought", "#CoT", "#Prompting"],
    de: {
      term: "Chain-of-Thought (Gedankenkette)",
      short: "Technik, bei der ein Sprachmodell seine Zwischenschritte explizit ausformuliert, statt direkt zur Antwort zu springen.",
      long: "Durch Aufforderungen wie \"Denke Schritt für Schritt\" oder durch entsprechendes Training gibt das Modell seinen Lösungsweg aus. Das verbessert die Genauigkeit bei mehrschrittigen Aufgaben deutlich, weil Teilergebnisse als Zwischenspeicher dienen und Fehler sichtbar werden. Chain-of-Thought ist die Grundlage moderner Reasoning-Modelle. Für Erklärbarkeit (XAI) nur bedingt geeignet: Die ausgegebene Kette muss nicht dem tatsächlichen internen Rechenweg entsprechen (\"faithfulness\"-Problem)." },
    en: {
      term: "Chain-of-Thought",
      short: "A technique where a language model explicitly spells out its intermediate steps rather than jumping straight to the answer.",
      long: "Through prompts such as \"think step by step\" or through corresponding training, the model outputs its reasoning path. This markedly improves accuracy on multi-step tasks, because intermediate results serve as working memory and errors become visible. Chain-of-thought is the basis of modern reasoning models. Only partly suitable for explainability (XAI): the output chain need not correspond to the actual internal computation (the \"faithfulness\" problem)." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["reasoning-modell", "prompt-engineering", "xai"] },

  { id: "mixture-of-experts", category: "dl", risk: null,
    tags: ["#MoE", "#Architektur", "#Effizienz"],
    de: {
      term: "Mixture of Experts (MoE)",
      short: "Modellarchitektur, bei der pro Eingabe nur ein Teil des Netzwerks (\"Experten\") aktiviert wird, statt das gesamte Modell zu nutzen.",
      long: "Ein MoE-Modell besteht aus vielen spezialisierten Teilnetzen und einem Router, der für jedes Token die passenden Experten auswählt. Nur diese werden berechnet – so lässt sich die Gesamtzahl der Parameter stark erhöhen, ohne den Rechenaufwand pro Anfrage im gleichen Maße zu steigern. Vorteil: mehr Kapazität bei vergleichbarer Inferenzgeschwindigkeit. Herausforderungen: Lastverteilung zwischen Experten, Trainingsstabilität, Speicherbedarf. Viele große Modelle nutzen MoE-Varianten." },
    en: {
      term: "Mixture of Experts (MoE)",
      short: "A model architecture in which only part of the network (\"experts\") is activated per input, rather than using the whole model.",
      long: "An MoE model consists of many specialised sub-networks and a router that selects the appropriate experts for each token. Only these are computed — allowing the total number of parameters to be greatly increased without raising compute per request to the same degree. Advantage: more capacity at comparable inference speed. Challenges: load balancing across experts, training stability, memory footprint. Many large models use MoE variants." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["transformer", "parameter", "foundation-model"] },

  { id: "pretraining", category: "dl", risk: null,
    tags: ["#Pretraining", "#SelfSupervised", "#Training"],
    de: {
      term: "Vortraining (Pretraining)",
      short: "Erste, rechenintensive Trainingsphase, in der ein Modell aus großen unmarkierten Datenmengen allgemeine Muster der Sprache oder Wahrnehmung lernt.",
      long: "Beim Vortraining großer Sprachmodelle wird das Modell darauf trainiert, das jeweils nächste Token vorherzusagen (selbstüberwachtes Lernen) – ohne dass menschlich markierte Daten nötig sind. Dabei entsteht ein breites Grundwissen über Sprache, Fakten und Zusammenhänge. Diese Phase verschlingt den Großteil der Rechenressourcen und Kosten. Das Ergebnis ist ein Foundation Model, das anschließend durch Fine-Tuning und Alignment für konkrete Aufgaben verfeinert wird." },
    en: {
      term: "Pretraining",
      short: "The first, compute-intensive training phase in which a model learns general patterns of language or perception from large unlabelled datasets.",
      long: "In pretraining large language models, the model is trained to predict the next token (self-supervised learning) — without the need for human-labelled data. This yields broad foundational knowledge of language, facts and relationships. This phase consumes the bulk of compute and cost. The result is a foundation model that is subsequently refined for concrete tasks through fine-tuning and alignment." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["foundation-model", "instruction-tuning", "transfer-learning", "self-supervised-learning", "skalierungsgesetze"] },

  { id: "instruction-tuning", category: "dl", risk: null,
    tags: ["#InstructionTuning", "#SFT", "#Alignment"],
    de: {
      term: "Instruction Tuning",
      short: "Trainingsphase, in der ein vortrainiertes Modell lernt, Anweisungen zu befolgen und hilfreiche Antworten zu geben.",
      long: "Nach dem Vortraining kann ein Modell Sprache fortsetzen, aber noch nicht zuverlässig Aufgaben lösen oder Anweisungen folgen. Beim Instruction Tuning (auch überwachtes Fine-Tuning, SFT) wird es mit Beispielen aus Anweisung und gewünschter Antwort weitertrainiert. So lernt es das Format hilfreicher Assistenz. Häufig gefolgt von einer Alignment-Phase mit RLHF oder DPO, die das Verhalten weiter an menschliche Präferenzen anpasst. Zentraler Schritt, um aus einem Foundation Model einen nutzbaren Assistenten zu machen." },
    en: {
      term: "Instruction Tuning",
      short: "A training phase in which a pretrained model learns to follow instructions and give helpful responses.",
      long: "After pretraining, a model can continue text but cannot yet reliably solve tasks or follow instructions. In instruction tuning (also supervised fine-tuning, SFT) it is further trained on examples of instruction and desired response. This teaches it the format of helpful assistance. Often followed by an alignment phase using RLHF or DPO that further aligns behaviour with human preferences. A key step in turning a foundation model into a usable assistant." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["pretraining", "fine-tuning", "rlhf", "dpo", "few-shot-learning"] },

  { id: "alignment", category: "ethics", risk: null,
    tags: ["#Alignment", "#Sicherheit", "#Werte"],
    de: {
      term: "Alignment (Ausrichtung)",
      short: "Bestreben, das Verhalten von KI-Systemen an menschlichen Absichten, Werten und Sicherheitsanforderungen auszurichten.",
      long: "Alignment umfasst technische Verfahren (RLHF, DPO, Constitutional AI) und konzeptionelle Fragen: Wessen Werte? Wie werden widersprüchliche Ziele abgewogen? Man unterscheidet zwischen dem Ausrichten auf die unmittelbar formulierte Aufgabe und auf die dahinterliegenden Absichten. Fehlausrichtung (Misalignment) kann von harmlosen Fehlern bis zu sicherheitskritischem Verhalten reichen, besonders bei mächtigen oder agentischen Systemen. Alignment ist ein Kernthema der KI-Sicherheitsforschung und Hintergrund vieler Anforderungen des AI Act an Hochrisiko-KI." },
    en: {
      term: "Alignment",
      short: "The effort to align the behaviour of AI systems with human intentions, values and safety requirements.",
      long: "Alignment covers technical methods (RLHF, DPO, Constitutional AI) and conceptual questions: whose values? How are conflicting goals weighed? A distinction is drawn between aligning to the immediately stated task and to the underlying intentions. Misalignment can range from harmless errors to safety-critical behaviour, especially in powerful or agentic systems. Alignment is a core topic of AI safety research and underlies many AI Act requirements for high-risk AI." },
    links: [ { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" } ],
    related: ["rlhf", "dpo", "constitutional-ai", "trustworthy-ai", "guardrails"] },

  { id: "dpo", category: "dl", risk: null,
    tags: ["#DPO", "#Alignment", "#Praeferenzen"],
    de: {
      term: "Direct Preference Optimization (DPO)",
      short: "Alignment-Verfahren, das ein Modell direkt aus Präferenzdaten optimiert, ohne den Umweg über ein separates Belohnungsmodell wie bei RLHF.",
      long: "Bei RLHF wird zunächst ein Belohnungsmodell aus menschlichen Vergleichen trainiert und dann per Reinforcement Learning optimiert – aufwändig und instabil. DPO vereinfacht dies: Aus Paaren von bevorzugten und abgelehnten Antworten wird das Sprachmodell direkt so angepasst, dass es bevorzugte Antworten wahrscheinlicher macht. Vorteile: einfacher, stabiler, ressourcenschonender. DPO und verwandte Verfahren haben sich seit 2023 als beliebte Alternative oder Ergänzung zu RLHF etabliert." },
    en: {
      term: "Direct Preference Optimization (DPO)",
      short: "An alignment method that optimises a model directly from preference data, without the detour via a separate reward model as in RLHF.",
      long: "In RLHF, a reward model is first trained from human comparisons and then optimised via reinforcement learning — costly and unstable. DPO simplifies this: from pairs of preferred and rejected responses, the language model is adjusted directly to make preferred responses more likely. Advantages: simpler, more stable, more resource-efficient. DPO and related methods have established themselves since 2023 as a popular alternative or complement to RLHF." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rlhf", "alignment", "instruction-tuning"] },

  { id: "constitutional-ai", category: "ethics", risk: null,
    tags: ["#ConstitutionalAI", "#Alignment", "#Anthropic"],
    de: {
      term: "Constitutional AI",
      short: "Alignment-Ansatz, bei dem ein Modell sein Verhalten anhand einer expliziten Liste von Prinzipien (\"Verfassung\") selbst kritisiert und verbessert.",
      long: "Von Anthropic entwickelt. Statt sich allein auf menschliche Bewertungen zu stützen, nutzt das Modell eine schriftliche Menge von Prinzipien, um eigene Antworten zu kritisieren und zu überarbeiten. Ein Teil des Alignments wird so vom Modell selbst übernommen (RLAIF – Reinforcement Learning from AI Feedback), was menschlichen Bewertungsaufwand reduziert und die zugrunde liegenden Werte transparenter und überprüfbarer macht. Die \"Verfassung\" kann sich an Quellen wie Menschenrechtserklärungen orientieren. Beispiel für werteorientiertes, nachvollziehbares Alignment." },
    en: {
      term: "Constitutional AI",
      short: "An alignment approach in which a model critiques and improves its own behaviour against an explicit list of principles (a \"constitution\").",
      long: "Developed by Anthropic. Instead of relying solely on human ratings, the model uses a written set of principles to critique and revise its own responses. Part of the alignment is thus performed by the model itself (RLAIF — reinforcement learning from AI feedback), reducing human rating effort and making the underlying values more transparent and auditable. The \"constitution\" can draw on sources such as human-rights declarations. An example of value-oriented, traceable alignment." },
    links: [ { label: "Anthropic: Constitutional AI", url: "https://www.anthropic.com/news/claudes-constitution" } ],
    related: ["alignment", "rlhf", "trustworthy-ai"] },

  { id: "quantisierung", category: "dl", risk: null,
    tags: ["#Quantization", "#Effizienz", "#Inferenz"],
    de: {
      term: "Quantisierung (Quantization)",
      short: "Technik zur Verkleinerung eines Modells, indem die Zahlengenauigkeit der Gewichte reduziert wird – etwa von 16 auf 4 Bit.",
      long: "Modellgewichte werden üblicherweise als Gleitkommazahlen gespeichert. Bei der Quantisierung werden sie in Formate geringerer Präzision überführt (z. B. 8-Bit- oder 4-Bit-Ganzzahlen). Das verringert Speicherbedarf und beschleunigt die Inferenz erheblich, oft mit nur geringem Qualitätsverlust. Dadurch werden große Modelle auf schwächerer Hardware oder sogar lokal auf Endgeräten lauffähig. Zentrale Technik für effiziente Bereitstellung und Edge-KI. Verwandt mit Distillation und Pruning als Kompressionsverfahren." },
    en: {
      term: "Quantization",
      short: "A technique for shrinking a model by reducing the numeric precision of its weights — e.g. from 16 to 4 bits.",
      long: "Model weights are usually stored as floating-point numbers. In quantization they are converted to lower-precision formats (e.g. 8-bit or 4-bit integers). This reduces memory footprint and substantially speeds up inference, often with only minor quality loss. This makes large models runnable on weaker hardware or even locally on end devices. A key technique for efficient deployment and edge AI. Related to distillation and pruning as compression methods." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["distillation", "inferenz", "edge-ai", "ki-nachhaltigkeit"] },

  { id: "distillation", category: "dl", risk: null,
    tags: ["#Distillation", "#Kompression", "#TeacherStudent"],
    de: {
      term: "Wissensdestillation (Distillation)",
      short: "Verfahren, bei dem ein kleineres \"Schüler\"-Modell lernt, das Verhalten eines größeren \"Lehrer\"-Modells nachzuahmen.",
      long: "Das große Lehrer-Modell erzeugt Ausgaben (oder Wahrscheinlichkeitsverteilungen), an denen das kleinere Schüler-Modell trainiert wird. Ziel: einen Großteil der Leistung des großen Modells in einem deutlich kompakteren Modell bewahren, das schneller und günstiger läuft. Distillation ermöglicht leistungsfähige kleine Modelle für den produktiven Einsatz und Edge-Geräte. Rechtlich und wettbewerblich relevant: Das Destillieren aus fremden Modellen berührt Nutzungsbedingungen und Fragen des geistigen Eigentums." },
    en: {
      term: "Knowledge Distillation",
      short: "A method in which a smaller \"student\" model learns to mimic the behaviour of a larger \"teacher\" model.",
      long: "The large teacher model produces outputs (or probability distributions) on which the smaller student model is trained. Aim: to preserve much of the large model's performance in a substantially more compact model that runs faster and cheaper. Distillation enables capable small models for production use and edge devices. Legally and competitively relevant: distilling from third-party models touches terms of use and intellectual property questions." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["quantisierung", "transfer-learning", "edge-ai", "model-extraction", "ki-nachhaltigkeit"] },

  { id: "benchmark", category: "ml", risk: null,
    tags: ["#Benchmark", "#Evaluation", "#Metrik"],
    de: {
      term: "Benchmark",
      short: "Standardisierter Test-Datensatz mit definierten Aufgaben und Metriken, um die Leistung von KI-Modellen vergleichbar zu messen.",
      long: "Benchmarks bündeln Aufgaben (z. B. Wissensfragen, Programmierung, mathematisches Schließen) und eine Bewertungsmethode, um Modelle objektiv zu vergleichen. Bekannte Beispiele messen Allgemeinwissen, Reasoning oder Coding. Grenzen: Benchmarks können durch versehentliche Aufnahme der Testdaten ins Training verfälscht werden (\"Kontamination\"), und hohe Werte bedeuten nicht automatisch echten Praxisnutzen. Für Hochrisiko-KI verlangt der AI Act eigene Genauigkeitsmetriken (Art. 15); die Kommission fördert die Entwicklung geeigneter Benchmarks." },
    en: {
      term: "Benchmark",
      short: "A standardised test dataset with defined tasks and metrics to measure AI model performance comparably.",
      long: "Benchmarks bundle tasks (e.g. knowledge questions, programming, mathematical reasoning) and an evaluation method to compare models objectively. Well-known examples measure general knowledge, reasoning or coding. Limits: benchmarks can be distorted by accidental inclusion of test data in training (\"contamination\"), and high scores do not automatically mean real-world usefulness. For high-risk AI the AI Act requires dedicated accuracy metrics (Art. 15); the Commission supports the development of suitable benchmarks." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["modellbewertung", "confusion-matrix", "cross-validation"] },

  { id: "guardrails", category: "security", risk: null,
    tags: ["#Guardrails", "#Sicherheit", "#Filter"],
    de: {
      term: "Guardrails (Leitplanken)",
      short: "Technische Schutzmechanismen, die Ein- und Ausgaben eines KI-Systems überwachen, um schädliches oder unerwünschtes Verhalten zu verhindern.",
      long: "Guardrails wirken zusätzlich zum Alignment des Modells als äußere Sicherheitsschicht. Sie können Eingaben filtern (z. B. Prompt-Injection oder verbotene Anfragen erkennen), Ausgaben prüfen (z. B. auf toxische Inhalte, Datenlecks, unerlaubte Ratschläge) und Themen oder Werkzeuge begrenzen. Umgesetzt durch Regeln, Klassifikatoren oder separate Prüfmodelle. Zentraler Baustein für den sicheren Produktivbetrieb, besonders bei agentischen Systemen mit Werkzeugzugriff. Trägt zur Erfüllung von Robustheits- und Sicherheitsanforderungen (Art. 15) bei." },
    en: {
      term: "Guardrails",
      short: "Technical safeguards that monitor an AI system's inputs and outputs to prevent harmful or undesired behaviour.",
      long: "Guardrails act as an outer safety layer in addition to the model's alignment. They can filter inputs (e.g. detect prompt injection or prohibited requests), check outputs (e.g. for toxic content, data leaks, disallowed advice) and restrict topics or tools. Implemented through rules, classifiers or separate checking models. A key building block for safe production use, especially for agentic systems with tool access. Contributes to meeting robustness and security requirements (Art. 15)." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["prompt-injection", "ai-red-teaming", "alignment", "jailbreak", "red-teaming-vs-blue"] },

  { id: "inferenz", category: "ml", risk: null,
    tags: ["#Inference", "#Betrieb", "#Latenz"],
    de: {
      term: "Inferenz (Inference)",
      short: "Die Nutzung eines trainierten Modells zur Erzeugung von Ausgaben – im Gegensatz zur Trainingsphase.",
      long: "Nach dem Training wird ein Modell in Betrieb genommen; jede Anfrage, die es beantwortet, ist ein Inferenzvorgang. Anders als das einmalige, teure Training fällt Inferenz laufend an und bestimmt maßgeblich die Betriebskosten und die Latenz (Antwortzeit). Optimierungen wie Quantisierung, Batching und spezialisierte Hardware (GPUs, TPUs, KI-Beschleuniger) zielen auf effiziente Inferenz. Bei Reasoning-Modellen steigt der Inferenzaufwand bewusst, um bessere Ergebnisse zu erzielen (test-time compute)." },
    en: {
      term: "Inference",
      short: "The use of a trained model to produce outputs — as opposed to the training phase.",
      long: "After training, a model is put into operation; every request it answers is an inference operation. Unlike the one-off, expensive training, inference occurs continuously and largely determines operating cost and latency (response time). Optimisations such as quantization, batching and specialised hardware (GPUs, TPUs, AI accelerators) target efficient inference. In reasoning models, inference cost is deliberately increased to achieve better results (test-time compute)." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["reasoning-modell", "quantisierung", "edge-ai"] },

  { id: "vektordatenbank", category: "ml", risk: null,
    tags: ["#VectorDB", "#RAG", "#Embedding"],
    de: {
      term: "Vektordatenbank",
      short: "Datenbank, die Informationen als Embeddings (Zahlenvektoren) speichert und nach semantischer Ähnlichkeit durchsuchbar macht.",
      long: "Texte, Bilder oder andere Inhalte werden in Embeddings umgewandelt und in der Vektordatenbank abgelegt. Bei einer Suche wird die Anfrage ebenfalls in einen Vektor überführt und die inhaltlich ähnlichsten Einträge werden über Nächste-Nachbar-Suche gefunden – unabhängig von exakten Stichworten. Vektordatenbanken sind das Rückgrat von RAG-Systemen, die Sprachmodelle mit externem, aktuellem Wissen versorgen. Relevant für den Umgang mit Unternehmenswissen und die Reduktion von Halluzinationen." },
    en: {
      term: "Vector Database",
      short: "A database that stores information as embeddings (numeric vectors) and makes it searchable by semantic similarity.",
      long: "Texts, images or other content are converted into embeddings and stored in the vector database. On a query, the request is likewise converted into a vector and the most semantically similar entries are found via nearest-neighbour search — independent of exact keywords. Vector databases are the backbone of RAG systems that supply language models with external, up-to-date knowledge. Relevant for handling enterprise knowledge and reducing hallucinations." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rag", "embedding", "kontextfenster", "kollaboratives-filtern", "knn"] },

  { id: "temperatur", category: "llm", risk: null,
    tags: ["#Temperature", "#Sampling", "#Kreativitaet"],
    de: {
      term: "Temperatur (Temperature)",
      short: "Parameter, der steuert, wie zufällig oder deterministisch die Ausgaben eines Sprachmodells ausfallen.",
      long: "Bei der Erzeugung wählt das Modell das nächste Token aus einer Wahrscheinlichkeitsverteilung. Eine niedrige Temperatur (nahe 0) macht die Ausgabe deterministischer und fokussierter – gut für Fakten und Code. Eine höhere Temperatur erhöht die Vielfalt und Kreativität, aber auch das Risiko von Abschweifungen oder Fehlern. Verwandte Sampling-Parameter sind Top-k und Top-p (Nucleus Sampling). Praktisch wichtig für die Balance zwischen Verlässlichkeit und Kreativität einer KI-Anwendung." },
    en: {
      term: "Temperature",
      short: "A parameter controlling how random or deterministic a language model's outputs are.",
      long: "During generation, the model selects the next token from a probability distribution. A low temperature (near 0) makes output more deterministic and focused — good for facts and code. A higher temperature increases diversity and creativity, but also the risk of digressions or errors. Related sampling parameters are top-k and top-p (nucleus sampling). Practically important for balancing reliability and creativity in an AI application." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["llm", "prompt-engineering", "halluzination"] },

  { id: "model-context-drift", category: "ml", risk: null,
    tags: ["#Drift", "#Monitoring", "#Betrieb"],
    de: {
      term: "Modell- und Datendrift",
      short: "Nachlassende Modellleistung im Betrieb, weil sich die realen Daten von den Trainingsdaten entfernen.",
      long: "Man unterscheidet Datendrift (die Verteilung der Eingaben verändert sich) und Konzeptdrift (der Zusammenhang zwischen Eingabe und korrekter Ausgabe verändert sich). Beispiele: verändertes Nutzerverhalten, neue Betrugsmuster, gesellschaftlicher Wandel. Drift führt zu schleichendem Qualitätsverlust und erfordert kontinuierliche Überwachung und ggf. Nachtraining. Direkt relevant für die Post-Market-Monitoring-Pflicht des AI Act (Art. 72) und für die dauerhafte Einhaltung der Genauigkeitsanforderungen (Art. 15)." },
    en: {
      term: "Model and Data Drift",
      short: "Declining model performance in operation because real-world data diverges from the training data.",
      long: "A distinction is drawn between data drift (the distribution of inputs changes) and concept drift (the relationship between input and correct output changes). Examples: changed user behaviour, new fraud patterns, societal change. Drift leads to gradual quality loss and requires continuous monitoring and, where necessary, retraining. Directly relevant to the AI Act's post-market monitoring duty (Art. 72) and to ongoing compliance with accuracy requirements (Art. 15)." },
    links: [ { label: "Art. 72 AI Act", url: "https://artificialintelligenceact.eu/article/72/" } ],
    related: ["post-market-monitoring", "genauigkeit-robustheit", "overfitting", "mlops", "concept-drift-detection"] },

  { id: "attention", category: "dl", risk: null,
    tags: ["#Attention", "#Transformer", "#Architektur"],
    de: {
      term: "Attention-Mechanismus",
      short: "Kernbaustein der Transformer-Architektur, der es einem Modell erlaubt, für jedes Element die relevanten anderen Elemente zu gewichten.",
      long: "Der Attention-Mechanismus (\"Aufmerksamkeit\") berechnet, wie stark jedes Token bei der Verarbeitung auf jedes andere Token achten soll. So kann das Modell Bezüge über weite Distanzen im Text erfassen – etwa ein Pronomen mit seinem Bezugswort verbinden. Die Selbstaufmerksamkeit (self-attention) ist das Herzstück der 2017 vorgestellten Transformer-Architektur (\"Attention Is All You Need\") und Grundlage nahezu aller modernen Sprachmodelle. Rechenaufwand wächst mit der Kontextlänge, was Effizienzforschung antreibt." },
    en: {
      term: "Attention Mechanism",
      short: "The core building block of the transformer architecture, allowing a model to weight the relevant other elements for each element.",
      long: "The attention mechanism computes how strongly each token should attend to every other token during processing. This lets the model capture relationships across long distances in text — e.g. linking a pronoun to its referent. Self-attention is the heart of the transformer architecture introduced in 2017 (\"Attention Is All You Need\") and the basis of almost all modern language models. Compute grows with context length, which drives efficiency research." },
    links: [ { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" } ],
    related: ["transformer", "deep-learning", "parameter", "vision-transformer"] },

  { id: "parameter", category: "dl", risk: null,
    tags: ["#Parameter", "#Gewichte", "#Modellgroesse"],
    de: {
      term: "Parameter (Gewichte)",
      short: "Die während des Trainings angepassten Zahlenwerte eines neuronalen Netzes, die sein Verhalten bestimmen.",
      long: "Parameter (Gewichte und Biases) sind die einstellbaren Größen eines Modells; ihre Werte werden im Training so justiert, dass das Modell die Trainingsdaten möglichst gut abbildet. Die Anzahl der Parameter (von Millionen bis zu Billionen) ist ein grobes Maß für die Kapazität eines Modells, aber nicht allein entscheidend für die Qualität. Bei der GPAI-Klassifizierung des AI Act spielt die für das Training aufgewendete Rechenleistung eine Rolle (Schwelle für systemisches Risiko), nicht allein die Parameterzahl." },
    en: {
      term: "Parameters (Weights)",
      short: "The numeric values of a neural network adjusted during training, which determine its behaviour.",
      long: "Parameters (weights and biases) are a model's adjustable quantities; their values are tuned during training so the model fits the training data as well as possible. The number of parameters (from millions to trillions) is a rough measure of a model's capacity but not the sole determinant of quality. In the AI Act's GPAI classification, the compute used for training plays a role (the systemic-risk threshold), not the parameter count alone." },
    links: [ { label: "Art. 51 AI Act", url: "https://artificialintelligenceact.eu/article/51/" } ],
    related: ["attention", "mixture-of-experts", "gpai", "skalierungsgesetze"] },

  { id: "gradientenabstieg", category: "ml", risk: null,
    tags: ["#GradientDescent", "#Optimierung", "#Training"],
    de: {
      term: "Gradientenabstieg (Gradient Descent)",
      short: "Grundlegendes Optimierungsverfahren, das die Parameter eines Modells schrittweise anpasst, um den Vorhersagefehler zu minimieren.",
      long: "Beim Training wird für die aktuellen Vorhersagen ein Fehler (Loss) berechnet. Der Gradientenabstieg ermittelt, in welche Richtung jeder Parameter verändert werden muss, um den Fehler zu verringern, und passt ihn in kleinen Schritten an (Lernrate). Über viele Iterationen nähert sich das Modell einer guten Lösung. Die Berechnung der Gradienten erfolgt effizient per Backpropagation. Grundlage praktisch aller Deep-Learning-Trainings. Varianten wie Stochastic Gradient Descent und Adam beschleunigen und stabilisieren den Prozess." },
    en: {
      term: "Gradient Descent",
      short: "A fundamental optimisation method that iteratively adjusts a model's parameters to minimise prediction error.",
      long: "During training, an error (loss) is computed for the current predictions. Gradient descent determines in which direction each parameter must change to reduce the error and adjusts it in small steps (learning rate). Over many iterations the model approaches a good solution. Gradients are computed efficiently via backpropagation. The basis of virtually all deep-learning training. Variants such as stochastic gradient descent and Adam speed up and stabilise the process." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["backpropagation", "overfitting", "regularisierung", "verlustfunktion", "lernrate"] },

  { id: "backpropagation", category: "dl", risk: null,
    tags: ["#Backpropagation", "#Training", "#Gradienten"],
    de: {
      term: "Backpropagation",
      short: "Effizienter Algorithmus, der berechnet, wie stark jeder Parameter eines neuronalen Netzes zum Gesamtfehler beiträgt.",
      long: "Backpropagation (\"Fehlerrückführung\") wendet die Kettenregel der Differentialrechnung an, um den Fehler von der Ausgabeschicht rückwärts durch das Netz zu propagieren. So erhält jeder Parameter einen Gradienten, der angibt, wie er zur Fehlerreduktion angepasst werden sollte. Erst dieser Algorithmus macht das Training tiefer neuronaler Netze praktikabel. Zusammen mit dem Gradientenabstieg bildet Backpropagation das Fundament des modernen Deep Learning seit den 1980er-Jahren." },
    en: {
      term: "Backpropagation",
      short: "An efficient algorithm that computes how much each parameter of a neural network contributes to the overall error.",
      long: "Backpropagation applies the chain rule of calculus to propagate the error backwards from the output layer through the network. Each parameter thereby receives a gradient indicating how it should be adjusted to reduce the error. Only this algorithm makes training deep neural networks practical. Together with gradient descent, backpropagation forms the foundation of modern deep learning since the 1980s." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["gradientenabstieg", "nn", "deep-learning", "vanishing-gradient"] },

  { id: "gan", category: "dl", risk: null,
    tags: ["#GAN", "#Generative", "#Deepfake"],
    de: {
      term: "Generative Adversarial Network (GAN)",
      short: "Architektur aus zwei konkurrierenden Netzen – einem Generator und einem Diskriminator –, die sich gegenseitig verbessern.",
      long: "Der Generator erzeugt künstliche Daten (z. B. Bilder), der Diskriminator versucht, echt von künstlich zu unterscheiden. Beide werden gemeinsam trainiert: Der Generator lernt, immer überzeugendere Fälschungen zu erzeugen, der Diskriminator, sie besser zu enttarnen. GANs prägten ab 2014 die Bildsynthese und stehen historisch hinter vielen frühen Deepfakes. In jüngerer Zeit wurden sie in der Bildgenerierung teils von Diffusionsmodellen abgelöst. Relevant für Transparenzpflichten und Deepfake-Kennzeichnung (Art. 50)." },
    en: {
      term: "Generative Adversarial Network (GAN)",
      short: "An architecture of two competing networks — a generator and a discriminator — that improve each other.",
      long: "The generator produces artificial data (e.g. images), the discriminator tries to distinguish real from fake. Both are trained together: the generator learns to produce ever more convincing fakes, the discriminator to detect them better. From 2014, GANs shaped image synthesis and historically underlie many early deepfakes. More recently they have partly been superseded by diffusion models in image generation. Relevant to transparency duties and deepfake labelling (Art. 50)." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["generative-ai", "diffusion", "deepfake", "super-resolution"] },

  { id: "regularisierung", category: "ml", risk: null,
    tags: ["#Regularization", "#Overfitting", "#Generalisierung"],
    de: {
      term: "Regularisierung",
      short: "Sammelbegriff für Techniken, die Overfitting verhindern und die Generalisierungsfähigkeit eines Modells verbessern.",
      long: "Ein Modell, das die Trainingsdaten zu genau lernt, versagt bei neuen Daten (Overfitting). Regularisierung wirkt dem entgegen, indem sie das Modell zu Einfachheit zwingt: etwa durch Strafterme für große Gewichte (L1/L2), durch zufälliges Deaktivieren von Neuronen im Training (Dropout), durch frühzeitiges Beenden (Early Stopping) oder durch Datenaugmentation. Ziel ist ein Modell, das die zugrunde liegenden Muster erfasst statt Rauschen auswendig zu lernen. Grundlegend für robuste, verlässliche Modelle – auch im Sinne der Genauigkeitsanforderungen des AI Act." },
    en: {
      term: "Regularization",
      short: "An umbrella term for techniques that prevent overfitting and improve a model's ability to generalise.",
      long: "A model that learns the training data too precisely fails on new data (overfitting). Regularization counters this by forcing simplicity: e.g. penalty terms for large weights (L1/L2), randomly deactivating neurons during training (dropout), stopping early (early stopping) or data augmentation. The goal is a model that captures the underlying patterns rather than memorising noise. Fundamental to robust, reliable models — also in the sense of the AI Act's accuracy requirements." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["overfitting", "cross-validation", "gradientenabstieg", "datenaugmentation", "batch-normalization"] },

  { id: "cross-validation", category: "ml", risk: null,
    tags: ["#CrossValidation", "#Evaluation", "#Validierung"],
    de: {
      term: "Kreuzvalidierung (Cross-Validation)",
      short: "Verfahren zur zuverlässigen Bewertung eines Modells, bei dem die Daten mehrfach in Trainings- und Testteile aufgeteilt werden.",
      long: "Bei der k-fachen Kreuzvalidierung werden die Daten in k gleich große Teile zerlegt. Das Modell wird k-mal trainiert, jeweils mit einem anderen Teil als Testmenge und den restlichen als Training. Der Durchschnitt der Ergebnisse liefert eine belastbarere Leistungsschätzung als eine einzelne Aufteilung und nutzt die Daten effizienter. Wichtig, um Overfitting zu erkennen und Modelle fair zu vergleichen. Standardwerkzeug im klassischen maschinellen Lernen und in der Modellauswahl." },
    en: {
      term: "Cross-Validation",
      short: "A method for reliably evaluating a model by repeatedly splitting the data into training and test portions.",
      long: "In k-fold cross-validation the data are divided into k equal parts. The model is trained k times, each time with a different part as the test set and the rest as training. Averaging the results gives a more robust performance estimate than a single split and uses the data more efficiently. Important for detecting overfitting and comparing models fairly. A standard tool in classical machine learning and model selection." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["regularisierung", "overfitting", "benchmark", "ensemble", "hyperparameter"] },

  { id: "feature-engineering", category: "ml", risk: null,
    tags: ["#FeatureEngineering", "#Datenaufbereitung"],
    de: {
      term: "Feature Engineering",
      short: "Die Kunst, aus Rohdaten aussagekräftige Merkmale (Features) zu gewinnen, mit denen ein Modell besser lernt.",
      long: "Bevor Daten in ein klassisches Modell fließen, werden sie aufbereitet: relevante Größen ausgewählt, kombiniert, transformiert oder normalisiert. Gutes Feature Engineering kann die Leistung stärker verbessern als ein komplexeres Modell. Beispiele: aus einem Datum den Wochentag ableiten, Beträge logarithmieren, Kategorien kodieren. Im Deep Learning wird ein Teil dieser Arbeit vom Modell selbst übernommen (Representation Learning), doch bei strukturierten Daten bleibt Feature Engineering zentral. Berührt Daten-Governance und Bias, weil die Merkmalswahl Verzerrungen einführen kann." },
    en: {
      term: "Feature Engineering",
      short: "The craft of deriving meaningful features from raw data so that a model learns better.",
      long: "Before data flow into a classical model, they are prepared: relevant quantities are selected, combined, transformed or normalised. Good feature engineering can improve performance more than a more complex model. Examples: deriving the weekday from a date, taking the logarithm of amounts, encoding categories. In deep learning, part of this work is done by the model itself (representation learning), but for structured data feature engineering remains central. Touches data governance and bias, because feature choice can introduce distortions." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["trainingsdaten", "bias", "klassifikation-regression", "dimensionsreduktion", "korrelation-kausalitaet"] },

  { id: "ensemble", category: "ml", risk: null,
    tags: ["#Ensemble", "#RandomForest", "#Boosting"],
    de: {
      term: "Ensemble-Methoden",
      short: "Verfahren, die mehrere Modelle kombinieren, um bessere und stabilere Vorhersagen zu erzielen als ein Einzelmodell.",
      long: "Die Grundidee: Viele schwächere Modelle ergeben zusammen ein starkes. Beim Bagging (z. B. Random Forest) werden viele Modelle unabhängig auf Datenstichproben trainiert und ihre Ergebnisse gemittelt. Beim Boosting (z. B. Gradient Boosting) werden Modelle nacheinander trainiert, wobei jedes die Fehler des vorigen ausgleicht. Ensembles zählen bei strukturierten, tabellarischen Daten oft zu den leistungsstärksten Verfahren und schlagen dort mitunter neuronale Netze. Trade-off: geringere Nachvollziehbarkeit als ein einzelnes einfaches Modell." },
    en: {
      term: "Ensemble Methods",
      short: "Methods that combine several models to achieve better and more stable predictions than a single model.",
      long: "The basic idea: many weaker models together make a strong one. In bagging (e.g. random forest), many models are trained independently on data samples and their results averaged. In boosting (e.g. gradient boosting), models are trained sequentially, each correcting the errors of the previous one. On structured, tabular data, ensembles are often among the strongest methods and sometimes beat neural networks there. Trade-off: lower explainability than a single simple model." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["klassifikation-regression", "ml", "cross-validation", "entscheidungsbaum"] },

  { id: "klassifikation-regression", category: "ml", risk: null,
    tags: ["#Klassifikation", "#Regression", "#SupervisedLearning"],
    de: {
      term: "Klassifikation und Regression",
      short: "Die zwei Grundaufgaben des überwachten Lernens: Kategorien vorhersagen (Klassifikation) oder Zahlenwerte vorhersagen (Regression).",
      long: "Bei der Klassifikation ordnet ein Modell Eingaben diskreten Klassen zu – z. B. Spam/kein Spam, Diagnosekategorien, Risikostufen. Bei der Regression sagt es kontinuierliche Werte voraus – z. B. Preise, Temperaturen, Wahrscheinlichkeiten. Beide gehören zum überwachten Lernen und werden mit markierten Beispieldaten trainiert. Die Wahl der Aufgabe bestimmt Modelltyp, Fehlermaße und Bewertungsmetriken (z. B. Genauigkeit und F1 bei Klassifikation, mittlerer Fehler bei Regression). Grundvokabular für das Verständnis fast aller praktischen ML-Anwendungen." },
    en: {
      term: "Classification and Regression",
      short: "The two basic tasks of supervised learning: predicting categories (classification) or predicting numeric values (regression).",
      long: "In classification, a model assigns inputs to discrete classes — e.g. spam/not spam, diagnostic categories, risk levels. In regression, it predicts continuous values — e.g. prices, temperatures, probabilities. Both belong to supervised learning and are trained on labelled example data. The choice of task determines model type, loss functions and evaluation metrics (e.g. accuracy and F1 for classification, mean error for regression). Basic vocabulary for understanding almost all practical ML applications." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ueberwacht", "confusion-matrix", "ensemble", "feature-engineering", "textklassifikation"] },

  { id: "clustering", category: "ml", risk: null,
    tags: ["#Clustering", "#Unsupervised", "#Segmentierung"],
    de: {
      term: "Clustering",
      short: "Unüberwachtes Verfahren, das Datenpunkte anhand ihrer Ähnlichkeit ohne vorgegebene Kategorien in Gruppen einteilt.",
      long: "Anders als bei der Klassifikation gibt es beim Clustering keine vorab bekannten Labels – das Verfahren entdeckt Strukturen selbst. Bekannte Methoden: k-Means (teilt Daten in k Gruppen), hierarchisches Clustering, DBSCAN (dichtebasiert). Anwendungen: Kundensegmentierung, Anomalieerkennung, Themenfindung in Texten, Bildkompression. Herausforderungen: die passende Zahl der Cluster wählen und Ergebnisse interpretieren. Gehört wie die Dimensionsreduktion zum Kern des unüberwachten Lernens und ergänzt die überwachten Verfahren." },
    en: {
      term: "Clustering",
      short: "An unsupervised method that groups data points by their similarity without predefined categories.",
      long: "Unlike classification, clustering has no known labels in advance — the method discovers structure itself. Well-known methods: k-means (partitions data into k groups), hierarchical clustering, DBSCAN (density-based). Applications: customer segmentation, anomaly detection, topic discovery in texts, image compression. Challenges: choosing the appropriate number of clusters and interpreting results. Like dimensionality reduction, it belongs to the core of unsupervised learning and complements the supervised methods." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["unueberwacht", "ml", "topic-modeling", "dimensionsreduktion", "knn"] },

  { id: "confusion-matrix", category: "ml", risk: null,
    tags: ["#ConfusionMatrix", "#Metrik", "#Evaluation"],
    de: {
      term: "Wahrheitsmatrix (Confusion Matrix)",
      short: "Tabelle, die die Vorhersagen eines Klassifikationsmodells den tatsächlichen Werten gegenüberstellt und so Fehlertypen sichtbar macht.",
      long: "Die Matrix zeigt vier Felder: richtig Positive, richtig Negative, falsch Positive (Fehlalarm) und falsch Negative (Übersehen). Aus ihr werden zentrale Metriken abgeleitet: Genauigkeit (Accuracy), Präzision (Precision), Trefferquote (Recall) und der F1-Wert. Wichtig, weil ein einzelner Genauigkeitswert täuschen kann – etwa bei unausgewogenen Daten. In sicherheits- oder grundrechtssensiblen Anwendungen ist entscheidend, welche Fehlerart gravierender ist (z. B. ein übersehener Tumor vs. ein Fehlalarm). Grundlage der Genauigkeitsangaben nach Art. 15 AI Act." },
    en: {
      term: "Confusion Matrix",
      short: "A table that contrasts a classification model's predictions with the actual values, making error types visible.",
      long: "The matrix shows four cells: true positives, true negatives, false positives (false alarm) and false negatives (misses). From it, key metrics are derived: accuracy, precision, recall and the F1 score. Important because a single accuracy figure can mislead — e.g. on imbalanced data. In safety- or fundamental-rights-sensitive applications, it is crucial which error type is more serious (e.g. a missed tumour vs. a false alarm). A basis for the accuracy declarations under Art. 15 AI Act." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["benchmark", "klassifikation-regression", "genauigkeit-robustheit", "bayessche-statistik", "imbalanced-data"] },

  { id: "transfer-learning", category: "dl", risk: null,
    tags: ["#TransferLearning", "#Pretraining", "#FineTuning"],
    de: {
      term: "Transfer Learning",
      short: "Ansatz, bei dem ein für eine Aufgabe trainiertes Modell als Ausgangspunkt für eine verwandte Aufgabe wiederverwendet wird.",
      long: "Statt ein Modell für jede neue Aufgabe von Grund auf zu trainieren, nutzt man ein bereits vortrainiertes Modell und passt es an. Das spart Daten, Rechenzeit und Kosten erheblich, weil das allgemeine Wissen aus dem Vortraining erhalten bleibt. Transfer Learning ist das Grundprinzip hinter Foundation Models: ein einmal teuer vortrainiertes Modell wird durch Fine-Tuning für viele spezifische Anwendungen angepasst. Ermöglicht leistungsfähige KI auch dort, wo nur wenige aufgabenspezifische Daten vorliegen." },
    en: {
      term: "Transfer Learning",
      short: "An approach in which a model trained for one task is reused as a starting point for a related task.",
      long: "Instead of training a model from scratch for every new task, one takes an already pretrained model and adapts it. This saves substantial data, compute and cost, because the general knowledge from pretraining is retained. Transfer learning is the underlying principle behind foundation models: a model pretrained once at great expense is adapted by fine-tuning for many specific applications. Enables capable AI even where only little task-specific data is available." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["pretraining", "fine-tuning", "foundation-model", "distillation", "few-shot-learning"] },

  { id: "synthetische-daten", category: "ml", risk: null,
    tags: ["#SyntheticData", "#Datenschutz", "#Training"],
    de: {
      term: "Synthetische Daten",
      short: "Künstlich erzeugte Daten, die die statistischen Eigenschaften echter Daten nachbilden, ohne reale Einzelpersonen abzubilden.",
      long: "Synthetische Daten werden von Modellen oder Simulationen erzeugt und dienen dazu, echte, oft knappe oder sensible Daten zu ergänzen oder zu ersetzen. Vorteile: Datenschutz (keine realen Personendaten), Ausgleich seltener Fälle, Reduktion von Bias durch gezielte Ergänzung unterrepräsentierter Gruppen. Risiken: Wenn Modelle zu stark auf ihren eigenen Ausgaben trainiert werden, kann die Qualität kollabieren (\"model collapse\"). Relevant für Daten-Governance (Art. 10) und datenschutzfreundliches Training; auch in Reallaboren ein Thema." },
    en: {
      term: "Synthetic Data",
      short: "Artificially generated data that reproduce the statistical properties of real data without depicting real individuals.",
      long: "Synthetic data are produced by models or simulations and serve to supplement or replace real, often scarce or sensitive data. Advantages: privacy (no real personal data), balancing rare cases, reducing bias by deliberately supplementing under-represented groups. Risks: if models are trained too heavily on their own outputs, quality can collapse (\"model collapse\"). Relevant to data governance (Art. 10) and privacy-friendly training; also a topic in regulatory sandboxes." },
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["daten-governance", "trainingsdaten", "bias", "digitaler-zwilling", "datenaugmentation"] },

  { id: "edge-ai", category: "ml", risk: null,
    tags: ["#EdgeAI", "#OnDevice", "#Latenz"],
    de: {
      term: "Edge-KI (On-Device AI)",
      short: "KI, die direkt auf dem Endgerät läuft, statt Anfragen an entfernte Rechenzentren zu senden.",
      long: "Bei Edge-KI findet die Inferenz lokal statt – auf Smartphone, Sensor, Fahrzeug oder Industriemaschine. Vorteile: geringe Latenz, Funktion ohne Internetverbindung, Datenschutz (Daten verlassen das Gerät nicht) und geringere laufende Kosten. Möglich wird dies durch Modellkompression (Quantisierung, Distillation) und spezialisierte Hardware. Grenzen: begrenzte Rechenleistung und Speicher. Relevant für datenschutzfreundliche Architekturen und für sicherheitskritische Echtzeitanwendungen, etwa in Fahrzeugen oder Medizingeräten." },
    en: {
      term: "Edge AI (On-Device AI)",
      short: "AI that runs directly on the end device instead of sending requests to remote data centres.",
      long: "In edge AI, inference takes place locally — on a smartphone, sensor, vehicle or industrial machine. Advantages: low latency, operation without an internet connection, privacy (data do not leave the device) and lower running costs. This is enabled by model compression (quantization, distillation) and specialised hardware. Limits: constrained compute and memory. Relevant to privacy-friendly architectures and to safety-critical real-time applications, e.g. in vehicles or medical devices." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["quantisierung", "distillation", "inferenz", "federated-learning", "neuromorphes-computing"] },

  { id: "ki-diagnostik", category: "ai-act-core", risk: "high",
    tags: ["#Gesundheit", "#Diagnostik", "#MDR", "#SaMD"],
    de: {
      term: "KI-gestützte Diagnostik",
      short: "KI-Systeme, die medizinische Daten auswerten, um Krankheiten zu erkennen oder Befunde zu unterstützen – meist Hochrisiko über die Medizinprodukte-Schiene.",
      long: "Diagnostische KI analysiert Bilder (Röntgen, MRT, Pathologie), Signale (EKG) oder strukturierte Patientendaten. Rechtlich läuft die Einstufung meist über Anhang I des AI Act (Medizinprodukte-VO MDR/IVDR): Ist die KI ein Medizinprodukt oder dessen Sicherheitsbauteil, gilt sie als Hochrisiko-System mit integrierter Konformitätsbewertung. Zentrale Anforderungen: klinische Validierung, Genauigkeit und Robustheit (Art. 15), menschliche Aufsicht, Bias-Kontrolle über Bevölkerungsgruppen. Verzahnung mit MDR, DSGVO (Gesundheitsdaten) und künftig dem Europäischen Gesundheitsdatenraum." },
    en: {
      term: "AI-Assisted Diagnostics",
      short: "AI systems that evaluate medical data to detect diseases or support findings — mostly high-risk via the medical device route.",
      long: "Diagnostic AI analyses images (X-ray, MRI, pathology), signals (ECG) or structured patient data. Legally, classification usually runs via Annex I of the AI Act (Medical Device Regulation MDR/IVDR): where the AI is a medical device or its safety component, it counts as a high-risk system with integrated conformity assessment. Key requirements: clinical validation, accuracy and robustness (Art. 15), human oversight, bias control across population groups. Intertwined with the MDR, GDPR (health data) and, in future, the European Health Data Space." },
    links: [ { label: "MDR (VO 2017/745)", url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj" } ],
    related: ["samd", "radiologie-ki", "klinische-entscheidungsunterstuetzung", "mdr-schnittstelle", "arzneimittelforschung-ki"] },

  { id: "samd", category: "ai-act-core", risk: "high",
    tags: ["#SaMD", "#Software", "#Medizinprodukt", "#MDR"],
    de: {
      term: "Software als Medizinprodukt (SaMD)",
      short: "Software, die für medizinische Zwecke bestimmt ist und für sich allein ein Medizinprodukt darstellt – ohne Teil eines Geräts zu sein.",
      long: "SaMD (\"Software as a Medical Device\") umfasst eigenständige Programme zu Diagnose, Überwachung, Vorhersage oder Therapieunterstützung – etwa eine App zur Hautkrebs-Erkennung. Die Risikoklassifizierung nach MDR (Regel 11) entscheidet über die Konformitätsbewertung; ab Klasse IIa ist eine benannte Stelle nötig. Enthält die SaMD KI, greift zusätzlich der AI Act (Hochrisiko über Anhang I). Praktisch bedeutet das eine integrierte Bewertung, die MDR- und AI-Act-Anforderungen zusammenführt. Abzugrenzen von reinen Wellness-Apps ohne medizinische Zweckbestimmung." },
    en: {
      term: "Software as a Medical Device (SaMD)",
      short: "Software intended for medical purposes that constitutes a medical device in its own right — without being part of a hardware device.",
      long: "SaMD covers standalone programs for diagnosis, monitoring, prediction or therapy support — e.g. an app for skin-cancer detection. Risk classification under the MDR (Rule 11) determines conformity assessment; from class IIa a notified body is required. Where SaMD contains AI, the AI Act additionally applies (high-risk via Annex I). In practice this means an integrated assessment merging MDR and AI Act requirements. To be distinguished from pure wellness apps without a medical purpose." },
    links: [ { label: "MDR (VO 2017/745)", url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj" } ],
    related: ["ki-diagnostik", "mdr-schnittstelle", "sicherheitsbauteil"] },

  { id: "klinische-entscheidungsunterstuetzung", category: "ai-act-core", risk: "high",
    tags: ["#CDSS", "#Gesundheit", "#MenschlicheAufsicht"],
    de: {
      term: "Klinische Entscheidungsunterstützung (CDSS)",
      short: "KI-Systeme, die medizinisches Personal bei Diagnose- und Therapieentscheidungen unterstützen, ohne die ärztliche Letztverantwortung zu ersetzen.",
      long: "Ein Clinical Decision Support System (CDSS) liefert Empfehlungen, Warnungen oder Priorisierungen – etwa Medikamenteninteraktionen, Sepsis-Frühwarnung oder Behandlungsvorschläge. Der Mensch-in-der-Schleife-Ansatz ist hier zentral: Die menschliche Aufsicht (Art. 14) und das Recht der Patienten auf Erklärung (Art. 86) sind besonders bedeutsam. Risiko des Automatisierungsbias – dass Ärzte Empfehlungen unkritisch folgen. Gute CDSS erklären ihre Vorschläge nachvollziehbar (XAI). Verzahnung mit MDR, ärztlichem Berufsrecht und Haftungsfragen." },
    en: {
      term: "Clinical Decision Support (CDSS)",
      short: "AI systems that support medical staff in diagnostic and treatment decisions without replacing the physician's ultimate responsibility.",
      long: "A Clinical Decision Support System (CDSS) provides recommendations, alerts or prioritisations — e.g. drug interactions, early sepsis warning or treatment suggestions. The human-in-the-loop approach is central here: human oversight (Art. 14) and patients' right to explanation (Art. 86) are particularly significant. Risk of automation bias — that physicians follow recommendations uncritically. Good CDSS explain their suggestions transparently (XAI). Intertwined with the MDR, medical professional law and liability questions." },
    links: [ { label: "Art. 14 AI Act", url: "https://artificialintelligenceact.eu/article/14/" } ],
    related: ["ki-diagnostik", "menschliche-aufsicht", "erklaerungsrecht", "automation-bias"] },

  { id: "radiologie-ki", category: "cv", risk: "high",
    tags: ["#Radiologie", "#Bildgebung", "#Gesundheit"],
    de: {
      term: "KI in der Radiologie",
      short: "Bildanalyse-KI zur Erkennung und Vermessung von Auffälligkeiten in radiologischen Aufnahmen – der am weitesten verbreitete klinische KI-Einsatz.",
      long: "Radiologie-KI erkennt z. B. Lungenknoten, Tumore, Frakturen oder Blutungen in CT, MRT, Röntgen und Mammographie. Sie priorisiert dringende Fälle, misst Strukturen und reduziert das Übersehen von Befunden. Technisch beruht sie meist auf Convolutional Neural Networks (CNN). Als Medizinprodukt Hochrisiko-KI: klinische Validierung, Genauigkeit über verschiedene Geräte und Patientengruppen, kontinuierliches Monitoring gegen Drift. Bekannte Herausforderung: Generalisierung auf Bilder anderer Kliniken/Geräte als im Training. Menschliche Befundung bleibt die Regel." },
    en: {
      term: "AI in Radiology",
      short: "Image-analysis AI for detecting and measuring abnormalities in radiological images — the most widespread clinical AI application.",
      long: "Radiology AI detects e.g. lung nodules, tumours, fractures or haemorrhages in CT, MRI, X-ray and mammography. It prioritises urgent cases, measures structures and reduces missed findings. Technically it usually relies on convolutional neural networks (CNN). As a medical device it is high-risk AI: clinical validation, accuracy across different devices and patient groups, continuous monitoring against drift. A known challenge: generalising to images from clinics/devices other than in training. Human reading remains the rule." },
    links: [ { label: "MDR (VO 2017/745)", url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj" } ],
    related: ["ki-diagnostik", "computer-vision", "cnn", "medizinische-bildsegmentierung"] },

  { id: "arzneimittelforschung-ki", category: "ai-act-core", risk: null,
    tags: ["#DrugDiscovery", "#Forschung", "#Gesundheit"],
    de: {
      term: "KI in der Arzneimittelforschung",
      short: "Einsatz von KI zur Entdeckung, zum Design und zur Optimierung von Wirkstoffen sowie zur Planung klinischer Studien.",
      long: "KI beschleunigt die Wirkstoffforschung, indem sie Molekülstrukturen vorhersagt (z. B. Proteinfaltung), vielversprechende Kandidaten identifiziert, Nebenwirkungen modelliert und Studienpopulationen optimiert. Meist fällt reine Forschung unter die Forschungsausnahme des AI Act (Art. 2). Sobald jedoch ein diagnostisches oder therapeutisches Produkt entsteht, greifen MDR und AI Act. Berührungspunkte: Arzneimittelrecht (EMA-Zulassung), Datenschutz bei Patientendaten, Fragen des geistigen Eigentums an KI-generierten Molekülen. Hoher wirtschaftlicher und gesellschaftlicher Nutzen erwartet." },
    en: {
      term: "AI in Drug Discovery",
      short: "Use of AI to discover, design and optimise active substances and to plan clinical trials.",
      long: "AI accelerates drug research by predicting molecular structures (e.g. protein folding), identifying promising candidates, modelling side effects and optimising trial populations. Pure research usually falls under the AI Act's research exception (Art. 2). However, once a diagnostic or therapeutic product results, the MDR and AI Act apply. Touch points: pharmaceutical law (EMA authorisation), data protection for patient data, intellectual property questions on AI-generated molecules. High economic and societal benefit expected." },
    links: [ { label: "Art. 2 AI Act", url: "https://artificialintelligenceact.eu/article/2/" } ],
    related: ["ki-diagnostik", "wissenschaftsausnahme", "ehds"] },

  { id: "ehds", category: "governance", risk: null,
    tags: ["#EHDS", "#Gesundheitsdatenraum", "#Datenraum"],
    de: {
      term: "Europäischer Gesundheitsdatenraum (EHDS)",
      short: "EU-Verordnung, die den Austausch und die Nutzung von Gesundheitsdaten für Versorgung und Forschung europaweit regelt.",
      long: "Der European Health Data Space (VO (EU) 2025/327) schafft zwei Nutzungsstränge: die Primärnutzung (Zugriff von Patienten und Behandelnden auf elektronische Gesundheitsdaten grenzüberschreitend) und die Sekundärnutzung (Bereitstellung pseudonymisierter Daten für Forschung, Innovation, Politik und – ausdrücklich – das Training von KI). Für KI-Entwickler eine wichtige, regulierte Datenquelle. Enge Verzahnung mit DSGVO, AI Act (Daten-Governance, Art. 10) und MDR. Nationale Zugangsstellen (Health Data Access Bodies) steuern den Zugang. Stufenweise Anwendung ab 2027/2029." },
    en: {
      term: "European Health Data Space (EHDS)",
      short: "An EU regulation governing the exchange and use of health data for care and research across Europe.",
      long: "The European Health Data Space (Regulation (EU) 2025/327) creates two usage strands: primary use (cross-border access by patients and clinicians to electronic health data) and secondary use (provision of pseudonymised data for research, innovation, policy and — explicitly — AI training). An important, regulated data source for AI developers. Closely intertwined with the GDPR, AI Act (data governance, Art. 10) and MDR. National access points (Health Data Access Bodies) govern access. Phased application from 2027/2029." },
    links: [ { label: "EHDS (VO 2025/327)", url: "https://eur-lex.europa.eu/eli/reg/2025/327/oj" } ],
    related: ["daten-governance", "dsgvo-schnittstelle", "arzneimittelforschung-ki"] },

  { id: "algorithmischer-handel", category: "ai-act-core", risk: null,
    tags: ["#AlgoTrading", "#Finanzen", "#MiFID"],
    de: {
      term: "Algorithmischer Handel",
      short: "Computergestützter Wertpapierhandel, bei dem Algorithmen – zunehmend KI-basiert – Orders eigenständig platzieren und steuern.",
      long: "Algorithmischer Handel reicht von einfachen regelbasierten Systemen bis zum Hochfrequenzhandel (HFT) im Mikrosekundenbereich. KI-Verfahren erkennen Muster, prognostizieren Kurse und optimieren Ausführung. Reguliert primär durch das Finanzmarktrecht (MiFID II, MAR – Marktmissbrauchsverordnung), nicht durchgängig als Hochrisiko im AI Act eingestuft. Risiken: Flash Crashes, algorithmische Kollusion, Marktmanipulation. Aufsicht durch BaFin und ESMA. Der AI Act greift ergänzend v. a. bei Transparenz und Governance; Kreditwürdigkeit und Betrugserkennung sind gesondert geregelt." },
    en: {
      term: "Algorithmic Trading",
      short: "Computer-assisted securities trading in which algorithms — increasingly AI-based — place and manage orders autonomously.",
      long: "Algorithmic trading ranges from simple rule-based systems to high-frequency trading (HFT) in the microsecond range. AI methods detect patterns, forecast prices and optimise execution. Regulated primarily by financial market law (MiFID II, MAR — Market Abuse Regulation), not consistently classified as high-risk under the AI Act. Risks: flash crashes, algorithmic collusion, market manipulation. Supervised by national regulators and ESMA. The AI Act applies additionally, especially on transparency and governance; creditworthiness and fraud detection are separately regulated." },
    links: [ { label: "ESMA", url: "https://www.esma.europa.eu/" } ],
    related: ["robo-advisor", "betrugserkennung", "dora"] },

  { id: "robo-advisor", category: "ai-act-core", risk: null,
    tags: ["#RoboAdvisor", "#Finanzen", "#Anlageberatung"],
    de: {
      term: "Robo-Advisor",
      short: "Automatisierte, algorithmengestützte Anlageberatung und Vermögensverwaltung mit minimalem menschlichem Eingriff.",
      long: "Robo-Advisor ermitteln über Fragebögen Risikoprofil und Ziele der Kunden und schlagen automatisiert Portfolios vor, die sie laufend anpassen (Rebalancing). Reguliert durch Finanzmarktrecht (MiFID II: Geeignetheitsprüfung, Kosteninformation). Der AI Act ist nicht automatisch einschlägig, kann aber bei bestimmten Ausgestaltungen greifen (Transparenz, Verbraucherschutz). Risiken: unpassende Empfehlungen bei fehlerhafter Profilierung, Herdenverhalten durch gleichartige Algorithmen, mangelnde Erklärbarkeit. Verzahnung mit Verbraucherschutz und dem Recht auf menschlichen Ansprechpartner." },
    en: {
      term: "Robo-Advisor",
      short: "Automated, algorithm-driven investment advice and asset management with minimal human intervention.",
      long: "Robo-advisors determine clients' risk profiles and goals via questionnaires and automatically propose portfolios that they continuously adjust (rebalancing). Regulated by financial market law (MiFID II: suitability assessment, cost disclosure). The AI Act is not automatically applicable but may apply in certain designs (transparency, consumer protection). Risks: unsuitable recommendations from faulty profiling, herding through similar algorithms, lack of explainability. Intertwined with consumer protection and the right to a human contact." },
    links: [ { label: "ESMA", url: "https://www.esma.europa.eu/" } ],
    related: ["algorithmischer-handel", "verbraucherschutz-schnittstelle", "kreditrisikomodell"] },

  { id: "geldwaescheerkennung", category: "ai-act-core", risk: null,
    tags: ["#AML", "#Geldwaesche", "#Finanzen", "#Compliance"],
    de: {
      term: "KI in der Geldwäscheerkennung (AML)",
      short: "KI-Systeme, die Finanztransaktionen überwachen, um Geldwäsche und Terrorismusfinanzierung zu erkennen (Anti-Money-Laundering).",
      long: "AML-KI analysiert Transaktionsmuster, erkennt Anomalien und generiert Verdachtsmeldungen. Reguliert primär durch das Geldwäscherecht (EU-Geldwäscherichtlinien, künftig die AML-Verordnung und die neue Behörde AMLA). Nicht per se Hochrisiko im AI Act, da Betrugs- und Geldwäscheerkennung bei Finanzdienstleistungen teils ausgenommen ist. Herausforderungen: hohe Rate an Fehlalarmen (false positives), Bias-Risiken bei der Kundenauswahl, Datenschutz. Verzahnung mit DSGVO und der Aufsicht durch BaFin/AMLA. Menschliche Prüfung der Verdachtsfälle bleibt zentral." },
    en: {
      term: "AI in Anti-Money-Laundering (AML)",
      short: "AI systems that monitor financial transactions to detect money laundering and terrorist financing.",
      long: "AML AI analyses transaction patterns, detects anomalies and generates suspicious activity reports. Regulated primarily by anti-money-laundering law (EU AML directives, in future the AML Regulation and the new authority AMLA). Not per se high-risk under the AI Act, as fraud and money-laundering detection in financial services is partly exempt. Challenges: high false-positive rates, bias risks in customer selection, data protection. Intertwined with the GDPR and supervision by national regulators/AMLA. Human review of suspicious cases remains central." },
    links: [ { label: "AMLA", url: "https://finance.ec.europa.eu/financial-crime/anti-money-laundering-and-countering-financing-terrorism_en" } ],
    related: ["betrugserkennung", "dora", "profiling"] },

  { id: "betrugserkennung", category: "ai-act-core", risk: null,
    tags: ["#FraudDetection", "#Finanzen", "#Anomalie"],
    de: {
      term: "KI-Betrugserkennung",
      short: "KI-Systeme zur Echtzeit-Erkennung betrügerischer Transaktionen – im AI Act ausdrücklich von der Hochrisiko-Kreditwürdigkeit ausgenommen.",
      long: "Betrugserkennung überwacht Zahlungen und erkennt ungewöhnliche Muster (etwa gestohlene Kreditkarten) meist über Anomalieerkennung und überwachtes Lernen. Der AI Act nimmt die Betrugserkennung bei Finanzdienstleistungen ausdrücklich von der Hochrisiko-Einstufung der Kreditwürdigkeitsprüfung aus (Anhang III Nr. 5 lit. b). Gleichwohl gelten DSGVO und Verbraucherschutz. Herausforderungen: Balance zwischen Sicherheit und Kundenfreundlichkeit (blockierte legitime Zahlungen), Bias, Erklärbarkeit gegenüber Betroffenen. Abzugrenzen von der hochrisikorelevanten Bonitätsbewertung." },
    en: {
      term: "AI Fraud Detection",
      short: "AI systems for real-time detection of fraudulent transactions — expressly exempt from high-risk creditworthiness in the AI Act.",
      long: "Fraud detection monitors payments and identifies unusual patterns (e.g. stolen credit cards) mostly via anomaly detection and supervised learning. The AI Act expressly exempts fraud detection in financial services from the high-risk classification of creditworthiness assessment (Annex III(5)(b)). Nevertheless, the GDPR and consumer protection apply. Challenges: balancing security and customer convenience (blocked legitimate payments), bias, explainability towards affected persons. To be distinguished from high-risk creditworthiness assessment." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["geldwaescheerkennung", "kreditwuerdigkeit", "algorithmischer-handel", "insurtech", "anomalieerkennung"] },

  { id: "dora", category: "security", risk: null,
    tags: ["#DORA", "#Finanzen", "#Resilienz", "#IKT"],
    de: {
      term: "DORA (Digital Operational Resilience Act)",
      short: "EU-Verordnung zur digitalen operationalen Resilienz des Finanzsektors, die auch KI-gestützte IKT-Systeme erfasst.",
      long: "DORA (VO (EU) 2022/2554, anwendbar seit Januar 2025) verpflichtet Banken, Versicherer und weitere Finanzunternehmen zu robustem IKT-Risikomanagement, Vorfallmeldung, Resilienztests und der Überwachung kritischer Drittdienstleister (etwa Cloud- und KI-Anbieter). Für KI im Finanzsektor relevant, weil deren Ausfall oder Manipulation die operationale Stabilität gefährden kann. Überschneidung mit dem AI Act (Robustheit, Cybersicherheit nach Art. 15) und NIS-2. Aufsicht durch die europäischen Finanzaufsichtsbehörden. Ein Baustein integrierter Compliance im Finanzsektor." },
    en: {
      term: "DORA (Digital Operational Resilience Act)",
      short: "An EU regulation on the digital operational resilience of the financial sector, which also covers AI-supported ICT systems.",
      long: "DORA (Regulation (EU) 2022/2554, applicable since January 2025) requires banks, insurers and other financial entities to maintain robust ICT risk management, incident reporting, resilience testing and oversight of critical third-party providers (such as cloud and AI providers). Relevant for AI in the financial sector because its failure or manipulation can jeopardise operational stability. Overlaps with the AI Act (robustness, cybersecurity under Art. 15) and NIS 2. Supervised by the European supervisory authorities. A building block of integrated financial-sector compliance." },
    links: [ { label: "DORA (VO 2022/2554)", url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj" } ],
    related: ["nis2-schnittstelle", "cra-schnittstelle", "algorithmischer-handel", "geldwaescheerkennung", "bafin-ki"] },

  { id: "kreditrisikomodell", category: "ai-act-core", risk: "high",
    tags: ["#Kreditrisiko", "#Finanzen", "#Scoring"],
    de: {
      term: "Kreditrisikomodell",
      short: "Statistisches oder KI-Modell, das die Ausfallwahrscheinlichkeit von Kreditnehmern schätzt – eng verknüpft mit der Hochrisiko-Kreditwürdigkeitsprüfung.",
      long: "Kreditrisikomodelle bewerten, wie wahrscheinlich ein Kreditnehmer ausfällt (Probability of Default), und fließen in Kreditentscheidung und Bepreisung ein. Bankaufsichtsrechtlich reguliert (CRR/Basel, interne Ratings müssen von der Aufsicht abgenommen werden). Soweit sie die Kreditwürdigkeit natürlicher Personen bewerten, sind sie Hochrisiko-KI (Anhang III Nr. 5 lit. b). Spannungsfeld: aufsichtsrechtliche Nachvollziehbarkeit vs. Komplexität moderner ML-Modelle. Anforderungen an Erklärbarkeit (XAI), Bias-Kontrolle und Daten-Governance treffen hier zusammen." },
    en: {
      term: "Credit Risk Model",
      short: "A statistical or AI model estimating the default probability of borrowers — closely linked to high-risk creditworthiness assessment.",
      long: "Credit risk models assess how likely a borrower is to default (probability of default) and feed into credit decisions and pricing. Regulated under banking supervision (CRR/Basel; internal ratings must be approved by supervisors). Where they assess the creditworthiness of natural persons, they are high-risk AI (Annex III(5)(b)). A tension: supervisory explainability vs. the complexity of modern ML models. Requirements on explainability (XAI), bias control and data governance converge here." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["kreditwuerdigkeit", "xai", "robo-advisor", "bafin-ki"] },

  { id: "autonomes-fahren", category: "ai-act-core", risk: "high",
    tags: ["#AutonomesFahren", "#Mobilitaet", "#SAE"],
    de: {
      term: "Autonomes Fahren",
      short: "KI-gesteuerte Fahrzeugführung, klassifiziert in sechs Automatisierungsstufen (SAE Level 0–5) von Assistenz bis Vollautonomie.",
      long: "Die SAE-Level reichen von 0 (keine Automatisierung) über 2 (teilautomatisiert, Fahrer überwacht) und 3 (bedingt automatisiert, System fährt in Grenzen selbst) bis 5 (vollautonom, kein Fahrer nötig). Rechtlich läuft die Einstufung über die Fahrzeug-Typgenehmigung (Anhang I AI Act, UN-Regelungen); KI-Fahrfunktionen sind Sicherheitsbauteile und damit Hochrisiko. Zentrale Anforderungen: funktionale Sicherheit, Robustheit gegen Edge Cases, Cybersicherheit (UN-R155), Nachvollziehbarkeit von Fahrentscheidungen. Haftungs- und ethische Fragen (Dilemma-Situationen) sind ungelöst." },
    en: {
      term: "Autonomous Driving",
      short: "AI-controlled vehicle operation, classified into six automation levels (SAE Level 0–5) from assistance to full autonomy.",
      long: "The SAE levels range from 0 (no automation) through 2 (partial automation, driver monitors) and 3 (conditional automation, system drives within limits) to 5 (fully autonomous, no driver needed). Legally, classification runs via vehicle type approval (Annex I AI Act, UN regulations); AI driving functions are safety components and therefore high-risk. Key requirements: functional safety, robustness to edge cases, cybersecurity (UN-R155), traceability of driving decisions. Liability and ethical questions (dilemma situations) remain unresolved." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["adas", "un-r155", "v2x", "sicherheitsbauteil", "tiefenschaetzung"] },

  { id: "adas", category: "cv", risk: "high",
    tags: ["#ADAS", "#Fahrassistenz", "#Mobilitaet"],
    de: {
      term: "Fahrerassistenzsysteme (ADAS)",
      short: "KI-gestützte Systeme, die den Fahrer unterstützen – etwa Notbremsassistent, Spurhalteassistent oder adaptive Geschwindigkeitsregelung.",
      long: "Advanced Driver Assistance Systems (ADAS) entsprechen meist SAE-Level 1–2. Sie nutzen Kameras, Radar und Lidar mit KI-Bildverarbeitung (oft CNN), um Objekte, Spuren und Gefahren zu erkennen. Als Sicherheitsbauteile fallen sie unter die Fahrzeug-Typgenehmigung und damit als Hochrisiko unter den AI Act (Anhang I). In der EU sind bestimmte ADAS seit 2024 für Neufahrzeuge verpflichtend (General Safety Regulation). Anforderungen: Zuverlässigkeit bei schlechten Sicht- und Wetterbedingungen, Vermeidung von Fehlauslösungen, Zusammenspiel mit dem Fahrer." },
    en: {
      term: "Advanced Driver Assistance Systems (ADAS)",
      short: "AI-supported systems that assist the driver — e.g. emergency braking, lane-keeping assist or adaptive cruise control.",
      long: "Advanced Driver Assistance Systems (ADAS) mostly correspond to SAE Level 1–2. They use cameras, radar and lidar with AI image processing (often CNN) to detect objects, lanes and hazards. As safety components they fall under vehicle type approval and thus, as high-risk, under the AI Act (Annex I). In the EU, certain ADAS have been mandatory for new vehicles since 2024 (General Safety Regulation). Requirements: reliability in poor visibility and weather, avoidance of false triggers, interplay with the driver." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["autonomes-fahren", "computer-vision", "cnn", "objekterkennung"] },

  { id: "v2x", category: "ai-act-core", risk: null,
    tags: ["#V2X", "#Vernetzung", "#Mobilitaet"],
    de: {
      term: "Vehicle-to-Everything (V2X)",
      short: "Vernetzte Kommunikation zwischen Fahrzeugen und ihrer Umgebung (andere Fahrzeuge, Infrastruktur, Fußgänger) zur Erhöhung von Sicherheit und Effizienz.",
      long: "V2X umfasst Fahrzeug-zu-Fahrzeug (V2V), Fahrzeug-zu-Infrastruktur (V2I) und weitere Varianten. KI wertet die ausgetauschten Daten aus, um Gefahren früher zu erkennen, Verkehrsflüsse zu optimieren und kooperatives Fahren zu ermöglichen. Berührungspunkte: Cybersicherheit (manipulierte Nachrichten könnten Unfälle auslösen), Datenschutz (Bewegungsprofile), kritische Infrastruktur. Verzahnung mit NIS-2, dem Data Act (Fahrzeugdaten) und – bei sicherheitsrelevanten Funktionen – dem AI Act. Grundlage für intelligente Verkehrssysteme und künftige Mobilitätsdatenräume." },
    en: {
      term: "Vehicle-to-Everything (V2X)",
      short: "Connected communication between vehicles and their environment (other vehicles, infrastructure, pedestrians) to enhance safety and efficiency.",
      long: "V2X covers vehicle-to-vehicle (V2V), vehicle-to-infrastructure (V2I) and further variants. AI evaluates the exchanged data to detect hazards earlier, optimise traffic flows and enable cooperative driving. Touch points: cybersecurity (manipulated messages could cause accidents), data protection (movement profiles), critical infrastructure. Intertwined with NIS 2, the Data Act (vehicle data) and — for safety-relevant functions — the AI Act. A basis for intelligent transport systems and future mobility data spaces." },
    links: [ { label: "Data Act (VO 2023/2854)", url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj" } ],
    related: ["autonomes-fahren", "verkehrsmanagement-ki", "datenverordnung-schnittstelle"] },

  { id: "verkehrsmanagement-ki", category: "ai-act-core", risk: "high",
    tags: ["#Verkehr", "#KritischeInfrastruktur", "#Mobilitaet"],
    de: {
      term: "KI im Verkehrsmanagement",
      short: "KI-Systeme zur Steuerung und Optimierung des Verkehrsflusses – als Sicherheitsbauteil kritischer Verkehrsinfrastruktur oft Hochrisiko.",
      long: "Intelligente Verkehrssysteme steuern Ampeln, Verkehrsleitsysteme, Mautsysteme und den öffentlichen Nahverkehr. Sie prognostizieren Verkehrsaufkommen, optimieren Signalschaltungen und reagieren auf Störungen. Soweit sie Sicherheitsbauteile im Management des Straßenverkehrs sind, gelten sie als Hochrisiko-KI (Anhang III Nr. 2 – kritische Infrastruktur). Anforderungen: Robustheit, Ausfallsicherheit, Cybersicherheit (NIS-2). Fehlfunktionen können Staus, Unfälle oder den Zusammenbruch der Verkehrssteuerung verursachen. Datenschutz relevant bei kamerabasierter Erfassung." },
    en: {
      term: "AI in Traffic Management",
      short: "AI systems for controlling and optimising traffic flow — often high-risk as a safety component of critical transport infrastructure.",
      long: "Intelligent transport systems control traffic lights, traffic guidance, tolling and public transport. They forecast traffic volumes, optimise signal timing and respond to disruptions. Where they are safety components in managing road traffic, they count as high-risk AI (Annex III(2) — critical infrastructure). Requirements: robustness, fail-safety, cybersecurity (NIS 2). Malfunctions can cause congestion, accidents or the collapse of traffic control. Data protection relevant for camera-based capture." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["kritische-infrastruktur", "v2x", "energie-ki"] },

  { id: "un-r155", category: "security", risk: null,
    tags: ["#UNR155", "#Automotive", "#Cybersecurity"],
    de: {
      term: "UN-R155 / UN-R156 (Automotive-Cybersecurity)",
      short: "UN-Regelungen zur Cybersicherheit und zum Software-Update-Management vernetzter Fahrzeuge.",
      long: "UN-R155 verlangt ein Cybersecurity-Managementsystem (CSMS) über den gesamten Fahrzeuglebenszyklus; UN-R156 regelt sichere Software-Updates (SUMS). Beide sind für die Typgenehmigung neuer Fahrzeuge in der EU verbindlich. Für KI-Fahrfunktionen relevant, weil Manipulation (etwa von Sensordaten oder Steuerlogik) unmittelbar sicherheitskritisch ist. Verzahnung mit dem AI Act (Cybersicherheit nach Art. 15), dem Cyber Resilience Act und der Produkthaftung. Beispiel für sektorspezifische Sicherheitsregulierung, die neben dem horizontalen AI Act greift." },
    en: {
      term: "UN-R155 / UN-R156 (Automotive Cybersecurity)",
      short: "UN regulations on the cybersecurity and software-update management of connected vehicles.",
      long: "UN-R155 requires a cybersecurity management system (CSMS) across the vehicle lifecycle; UN-R156 governs secure software updates (SUMS). Both are mandatory for the type approval of new vehicles in the EU. Relevant for AI driving functions because manipulation (e.g. of sensor data or control logic) is immediately safety-critical. Intertwined with the AI Act (cybersecurity under Art. 15), the Cyber Resilience Act and product liability. An example of sector-specific safety regulation applying alongside the horizontal AI Act." },
    links: [ { label: "UNECE", url: "https://unece.org/transport/vehicle-regulations" } ],
    related: ["autonomes-fahren", "cra-schnittstelle", "genauigkeit-robustheit"] },

  { id: "people-analytics", category: "ai-act-core", risk: "high",
    tags: ["#PeopleAnalytics", "#HR", "#Beschaeftigung"],
    de: {
      term: "People Analytics",
      short: "Datengestützte Analyse von Beschäftigtendaten zur Unterstützung von Personalentscheidungen – im Beschäftigungskontext meist Hochrisiko.",
      long: "People Analytics wertet Daten zu Leistung, Fluktuation, Engagement oder Zusammenarbeit aus, um Muster zu erkennen und Personalentscheidungen zu stützen. Soweit dabei über Auswahl, Beförderung, Zuweisung oder Kündigung mitentschieden wird, greift die Hochrisiko-Einstufung (Anhang III Nr. 4). Verzahnung mit Beschäftigtendatenschutz (Art. 88 DSGVO, § 26 BDSG), Mitbestimmung (§ 87 BetrVG) und Antidiskriminierungsrecht. Zentrale Risiken: Profiling, Bias, Überwachungsdruck. FRIA und menschliche Aufsicht sind hier besonders bedeutsam. Abzugrenzen von rein aggregierten, anonymen Auswertungen." },
    en: {
      term: "People Analytics",
      short: "Data-driven analysis of employee data to support HR decisions — usually high-risk in the employment context.",
      long: "People analytics evaluates data on performance, turnover, engagement or collaboration to identify patterns and support HR decisions. Where it co-determines selection, promotion, allocation or termination, the high-risk classification applies (Annex III(4)). Intertwined with employee data protection (Art. 88 GDPR, §26 BDSG), co-determination (§87 BetrVG) and anti-discrimination law. Key risks: profiling, bias, surveillance pressure. FRIA and human oversight are particularly significant here. To be distinguished from purely aggregated, anonymous analyses." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["ki-beschaeftigung", "skills-matching", "profiling", "workforce-planning"] },

  { id: "skills-matching", category: "ai-act-core", risk: "high",
    tags: ["#SkillsMatching", "#HR", "#Recruiting"],
    de: {
      term: "Skills-Matching",
      short: "KI-gestützter Abgleich von Kompetenzen mit Anforderungen – für Stellenbesetzung, interne Mobilität oder Weiterbildung.",
      long: "Skills-Matching-Systeme analysieren Fähigkeiten von Bewerbern oder Beschäftigten und gleichen sie mit Rollenanforderungen ab, um passende Kandidaten, interne Wechsel oder Lernpfade vorzuschlagen. Im Rekrutierungs- und Personalkontext meist Hochrisiko (Anhang III Nr. 4). Risiken: Bias durch historische Daten, Benachteiligung nicht-linearer Lebensläufe, Intransparenz der Kriterien. Chancen: objektivere, kompetenzbasierte statt abschlussfixierte Auswahl, wenn sorgfältig gestaltet. Anforderungen an Daten-Governance, Fairness und Erklärbarkeit gegenüber Betroffenen." },
    en: {
      term: "Skills Matching",
      short: "AI-supported matching of competencies with requirements — for filling positions, internal mobility or training.",
      long: "Skills-matching systems analyse the abilities of applicants or employees and match them against role requirements to suggest suitable candidates, internal moves or learning paths. Usually high-risk in the recruitment and personnel context (Annex III(4)). Risks: bias from historical data, disadvantaging non-linear CVs, opacity of criteria. Opportunities: more objective, competence-based rather than credential-fixated selection, if carefully designed. Requirements on data governance, fairness and explainability towards affected persons." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["cv-screening", "people-analytics", "ki-beschaeftigung"] },

  { id: "workforce-planning", category: "ai-act-core", risk: null,
    tags: ["#WorkforcePlanning", "#HR", "#Prognose"],
    de: {
      term: "KI-gestützte Personalplanung",
      short: "Prognose und Optimierung des Personalbedarfs mithilfe von KI – von Schichtplanung bis strategischer Kapazitätsplanung.",
      long: "Workforce Planning nutzt KI, um künftigen Personalbedarf zu prognostizieren, Schichten und Einsätze zu optimieren und Engpässe frühzeitig zu erkennen. Ob Hochrisiko, hängt von der konkreten Wirkung ab: Reine aggregierte Kapazitätsplanung ist meist unkritisch; sobald jedoch individuelle Zuweisungen, Arbeitsbedingungen oder Bewertungen betroffen sind, kann die Hochrisiko-Einstufung (Anhang III Nr. 4) greifen. Verzahnung mit Arbeitszeitrecht, Mitbestimmung und – bei Plattformarbeit – der Plattformarbeits-Richtlinie. Grenze zum algorithmischen Management ist fließend." },
    en: {
      term: "AI-Supported Workforce Planning",
      short: "Forecasting and optimising staffing needs with AI — from shift scheduling to strategic capacity planning.",
      long: "Workforce planning uses AI to forecast future staffing needs, optimise shifts and assignments and detect bottlenecks early. Whether it is high-risk depends on the concrete effect: purely aggregated capacity planning is usually uncritical; but as soon as individual assignments, working conditions or evaluations are affected, the high-risk classification (Annex III(4)) may apply. Intertwined with working-time law, co-determination and — for platform work — the Platform Work Directive. The boundary to algorithmic management is fluid." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["algorithmisches-management", "people-analytics", "ki-beschaeftigung"] },

  { id: "sentiment-analyse", category: "nlp", risk: null,
    tags: ["#Sentiment", "#NLP", "#Textanalyse"],
    de: {
      term: "Sentiment-Analyse",
      short: "NLP-Verfahren, das die emotionale Tönung oder Meinung in Texten erkennt – von Produktbewertungen bis Mitarbeiterbefragungen.",
      long: "Sentiment-Analyse (Stimmungsanalyse) klassifiziert Texte nach positiver, negativer oder neutraler Tönung, teils feiner nach Emotionen oder Aspekten. Anwendungen: Marktforschung, Kundenservice, Social-Media-Monitoring, Auswertung von Mitarbeiterfeedback. Wichtige Abgrenzung: Reine Text-Sentiment-Analyse ist nicht dasselbe wie die im Arbeits- und Bildungskontext verbotene biometrische Emotionserkennung (Art. 5), die auf biometrischen Daten wie Mimik oder Stimme beruht. Im HR-Einsatz gleichwohl sensibel: Datenschutz, Mitbestimmung, mögliche Fehlinterpretation von Ironie und Kontext." },
    en: {
      term: "Sentiment Analysis",
      short: "An NLP method that detects the emotional tone or opinion in texts — from product reviews to employee surveys.",
      long: "Sentiment analysis classifies texts as positive, negative or neutral, sometimes more finely by emotion or aspect. Applications: market research, customer service, social-media monitoring, evaluation of employee feedback. An important distinction: pure text sentiment analysis is not the same as the biometric emotion recognition prohibited in work and education contexts (Art. 5), which relies on biometric data such as facial expression or voice. Nonetheless sensitive in HR use: data protection, co-determination, possible misreading of irony and context." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["nlp", "emotionserkennung", "content-moderation", "topic-modeling", "textklassifikation"] },

  { id: "chatbot-kundenservice", category: "nlp", risk: "limited",
    tags: ["#Chatbot", "#Kundenservice", "#Transparenz", "#Art50"],
    de: {
      term: "Kundenservice-Chatbot",
      short: "KI-Systeme im direkten Dialog mit Menschen, die einer Transparenzpflicht unterliegen: Nutzer müssen wissen, dass sie mit einer KI sprechen (Art. 50).",
      long: "Chatbots und virtuelle Assistenten im Kundenservice beantworten Anfragen, lösen Probleme oder leiten weiter. Sie fallen unter die Transparenzpflichten des AI Act (Art. 50 Abs. 1): Interagiert eine Person mit einem KI-System, muss dies offengelegt werden, sofern es nicht offensichtlich ist. Moderne Chatbots basieren zunehmend auf LLMs mit RAG-Anbindung an Unternehmenswissen. Risiken: Halluzinationen, fehlerhafte Auskünfte mit Rechtsfolgen, Barrierefreiheit. Verzahnung mit Verbraucherschutz. Meist begrenztes Risiko, nicht Hochrisiko – sofern keine hochrisikorelevante Entscheidung getroffen wird." },
    en: {
      term: "Customer Service Chatbot",
      short: "AI systems in direct dialogue with people, subject to a transparency duty: users must know they are talking to an AI (Art. 50).",
      long: "Chatbots and virtual assistants in customer service answer queries, solve problems or route requests. They fall under the AI Act's transparency duties (Art. 50(1)): where a person interacts with an AI system, this must be disclosed unless it is obvious. Modern chatbots increasingly rely on LLMs with RAG connection to enterprise knowledge. Risks: hallucinations, faulty information with legal consequences, accessibility. Intertwined with consumer protection. Usually limited risk, not high-risk — provided no high-risk decision is made." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["transparenzpflichten", "llm", "rag", "question-answering"] },

  { id: "predictive-maintenance", category: "ml", risk: null,
    tags: ["#PredictiveMaintenance", "#Industrie", "#IoT"],
    de: {
      term: "Vorausschauende Wartung (Predictive Maintenance)",
      short: "KI, die aus Sensordaten den Ausfall von Maschinen vorhersagt, um Wartung rechtzeitig und bedarfsgerecht zu planen.",
      long: "Predictive Maintenance wertet Sensordaten (Vibration, Temperatur, Druck, Akustik) aus, um Verschleiß und drohende Ausfälle frühzeitig zu erkennen. Ziel: ungeplante Stillstände vermeiden, Wartung optimieren, Kosten senken. Technisch beruht sie auf Anomalieerkennung, Zeitreihenanalyse und teils Deep Learning. Meist nicht hochrisikorelevant im Sinne des AI Act – es sei denn, sie ist Sicherheitsbauteil einer Maschine (Maschinen-VO, Anhang I) und ihr Versagen gefährdet Personen. Verzahnung mit Industrial IoT, digitalen Zwillingen und dem Data Act (Maschinendaten)." },
    en: {
      term: "Predictive Maintenance",
      short: "AI that predicts machine failures from sensor data to plan maintenance in good time and as needed.",
      long: "Predictive maintenance evaluates sensor data (vibration, temperature, pressure, acoustics) to detect wear and impending failures early. Aim: avoid unplanned downtime, optimise maintenance, cut costs. Technically it relies on anomaly detection, time-series analysis and partly deep learning. Usually not high-risk under the AI Act — unless it is a safety component of a machine (Machinery Regulation, Annex I) and its failure endangers people. Intertwined with industrial IoT, digital twins and the Data Act (machine data)." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["digitaler-zwilling", "machine-vision-qc", "prozessoptimierung-ki", "anomalieerkennung", "zeitreihenanalyse"] },

  { id: "machine-vision-qc", category: "cv", risk: null,
    tags: ["#MachineVision", "#Qualitaet", "#Industrie"],
    de: {
      term: "Qualitätskontrolle mit Machine Vision",
      short: "Kamerabasierte KI-Bildverarbeitung, die Produkte automatisiert auf Fehler und Abweichungen prüft.",
      long: "Machine-Vision-Systeme erfassen Bauteile per Kamera und erkennen mit KI-Bildverarbeitung (meist CNN) Kratzer, Risse, Maßabweichungen oder fehlende Komponenten – schneller und konstanter als menschliche Prüfung. Meist nicht hochrisikorelevant, da keine Auswirkung auf Personen; wird die Prüfung jedoch sicherheitsrelevant (z. B. Prüfung von Sicherheitsbauteilen), kann der AI Act über die Maschinen- oder Produktsicherheit greifen. Vorteile: gleichbleibende Qualität, Rückverfolgbarkeit, Ausschussreduktion. Herausforderung: Generalisierung auf neue Fehlerbilder und Produktvarianten." },
    en: {
      term: "Quality Control with Machine Vision",
      short: "Camera-based AI image processing that automatically inspects products for defects and deviations.",
      long: "Machine-vision systems capture components by camera and use AI image processing (mostly CNN) to detect scratches, cracks, dimensional deviations or missing components — faster and more consistently than human inspection. Usually not high-risk, as there is no impact on persons; but where inspection becomes safety-relevant (e.g. checking safety components), the AI Act may apply via machinery or product safety. Advantages: consistent quality, traceability, scrap reduction. Challenge: generalising to new defect patterns and product variants." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["computer-vision", "predictive-maintenance", "cnn", "cobot"] },

  { id: "digitaler-zwilling", category: "ml", risk: null,
    tags: ["#DigitalTwin", "#Simulation", "#Industrie"],
    de: {
      term: "Digitaler Zwilling (Digital Twin)",
      short: "Virtuelles, datengespeistes Abbild eines realen Objekts oder Systems, das dessen Verhalten simuliert und vorhersagt.",
      long: "Ein digitaler Zwilling verbindet ein reales Objekt (Maschine, Fabrik, Gebäude, sogar Organ) über Sensordaten in Echtzeit mit seinem virtuellen Modell. KI wertet die Daten aus, simuliert Szenarien und optimiert Betrieb, Wartung und Entwurf. Anwendungen: Fertigung, Energie, Stadtplanung, Medizin. Meist kein eigenständiges Hochrisiko-System im AI Act, aber relevant als Werkzeug für Test und Entwicklung, für vorausschauende Wartung und für die Simulation vor Realeinsatz. Berührt Data Act (Datenzugang), Datenschutz (bei personenbezogenen Zwillingen) und geistiges Eigentum." },
    en: {
      term: "Digital Twin",
      short: "A virtual, data-fed replica of a real object or system that simulates and predicts its behaviour.",
      long: "A digital twin links a real object (machine, factory, building, even organ) to its virtual model via real-time sensor data. AI evaluates the data, simulates scenarios and optimises operation, maintenance and design. Applications: manufacturing, energy, urban planning, medicine. Usually not a standalone high-risk system under the AI Act, but relevant as a tool for testing and development, for predictive maintenance and for simulation before real-world deployment. Touches the Data Act (data access), data protection (for personal twins) and intellectual property." },
    links: [ { label: "Data Act (VO 2023/2854)", url: "https://eur-lex.europa.eu/eli/reg/2023/2854/oj" } ],
    related: ["predictive-maintenance", "synthetische-daten", "prozessoptimierung-ki"] },

  { id: "cobot", category: "ai-act-core", risk: "high",
    tags: ["#Cobot", "#Robotik", "#Maschinen-VO"],
    de: {
      term: "Kollaborativer Roboter (Cobot)",
      short: "Roboter, die direkt und ohne trennende Schutzzäune mit Menschen zusammenarbeiten – als Maschinen-Sicherheitsbauteil oft Hochrisiko.",
      long: "Cobots (Collaborative Robots) teilen sich den Arbeitsraum mit Menschen und passen ihr Verhalten über Sensorik und KI an deren Anwesenheit an – etwa durch Kraftbegrenzung oder Ausweichbewegungen. Sicherheit hat höchste Priorität: Als Maschine bzw. deren Sicherheitsbauteil fallen KI-gesteuerte Sicherheitsfunktionen unter die Maschinen-Verordnung (Anhang I) und damit als Hochrisiko unter den AI Act. Anforderungen: funktionale Sicherheit, robuste Personenerkennung, Ausfallsicherheit. Verzahnung mit Arbeitsschutzrecht. Die neue EU-Maschinenverordnung adressiert KI in Maschinen ausdrücklich." },
    en: {
      term: "Collaborative Robot (Cobot)",
      short: "Robots that work directly with humans without separating guards — often high-risk as a machine safety component.",
      long: "Cobots (collaborative robots) share the workspace with humans and adapt their behaviour to human presence via sensors and AI — e.g. through force limitation or evasive movements. Safety is paramount: as a machine or its safety component, AI-controlled safety functions fall under the Machinery Regulation (Annex I) and thus, as high-risk, under the AI Act. Requirements: functional safety, robust person detection, fail-safety. Intertwined with occupational safety law. The new EU Machinery Regulation explicitly addresses AI in machines." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["sicherheitsbauteil", "anhang-i", "machine-vision-qc", "verkoerperte-ki"] },

  { id: "prozessoptimierung-ki", category: "ml", risk: null,
    tags: ["#Prozessoptimierung", "#Industrie", "#Effizienz"],
    de: {
      term: "KI-Prozessoptimierung",
      short: "Einsatz von KI zur Optimierung industrieller Abläufe – von Produktionsplanung über Energieverbrauch bis Lieferketten.",
      long: "KI-Prozessoptimierung analysiert Betriebsdaten, um Durchsatz zu erhöhen, Energie und Material zu sparen, Ausschuss zu senken und Lieferketten zu steuern. Methoden reichen von klassischer Optimierung über Reinforcement Learning bis zu Vorhersagemodellen. Meist nicht hochrisikorelevant im AI Act, da kein direkter Personenbezug – Ausnahmen bei sicherheitskritischer Steuerung oder Energie-/Versorgungsinfrastruktur (dann Anhang III Nr. 2). Wirtschaftlich einer der größten KI-Nutzenhebel im industriellen Umfeld. Verzahnung mit Nachhaltigkeitszielen und Energieeffizienz." },
    en: {
      term: "AI Process Optimisation",
      short: "Use of AI to optimise industrial processes — from production planning to energy consumption to supply chains.",
      long: "AI process optimisation analyses operational data to increase throughput, save energy and materials, reduce scrap and steer supply chains. Methods range from classical optimisation through reinforcement learning to predictive models. Usually not high-risk under the AI Act, as there is no direct personal impact — exceptions for safety-critical control or energy/utility infrastructure (then Annex III(2)). Economically one of the greatest AI value levers in the industrial environment. Intertwined with sustainability goals and energy efficiency." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["predictive-maintenance", "supply-chain-ki", "rl", "digitaler-zwilling", "agrar-ki"] },

  { id: "supply-chain-ki", category: "ml", risk: null,
    tags: ["#SupplyChain", "#Lieferkette", "#Prognose"],
    de: {
      term: "KI im Lieferkettenmanagement",
      short: "KI zur Nachfrageprognose, Bestandsoptimierung und Risikofrüherkennung in Liefer- und Wertschöpfungsketten.",
      long: "KI im Supply Chain Management prognostiziert Nachfrage, optimiert Lagerbestände und Routen, erkennt Lieferrisiken (Ausfälle, Verzögerungen) frühzeitig und unterstützt die Beschaffung. Methoden: Zeitreihenprognose, Optimierung, teils generative Szenarien. Meist nicht hochrisikorelevant, aber wirtschaftlich bedeutsam und resilienzfördernd. Berührungspunkte: Lieferkettensorgfaltspflichten (LkSG, EU-CSDDD), Data Act (Datenaustausch zwischen Unternehmen), Wettbewerbsrecht bei gemeinsamen Datenpools. Zunehmend mit Nachhaltigkeits- und ESG-Anforderungen verknüpft." },
    en: {
      term: "AI in Supply Chain Management",
      short: "AI for demand forecasting, inventory optimisation and early risk detection in supply and value chains.",
      long: "AI in supply chain management forecasts demand, optimises inventories and routes, detects supply risks (failures, delays) early and supports procurement. Methods: time-series forecasting, optimisation, partly generative scenarios. Usually not high-risk, but economically significant and resilience-enhancing. Touch points: supply-chain due diligence (national laws, EU CSDDD), the Data Act (business-to-business data sharing), competition law for shared data pools. Increasingly linked with sustainability and ESG requirements." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["prozessoptimierung-ki", "datenverordnung-schnittstelle"] },

  { id: "agrar-ki", category: "ml", risk: null,
    tags: ["#Landwirtschaft", "#PrecisionFarming", "#Nachhaltigkeit"],
    de: {
      term: "KI in der Landwirtschaft (Precision Farming)",
      short: "Datengestützte Präzisionslandwirtschaft, die Aussaat, Düngung, Bewässerung und Ernte mithilfe von KI optimiert.",
      long: "Precision Farming nutzt Satelliten- und Drohnenbilder, Bodensensoren und Wetterdaten, um Felder kleinräumig zu bewirtschaften: gezielte Düngung, Unkrautbekämpfung per Bilderkennung, Ertragsprognosen, autonome Landmaschinen. Meist nicht hochrisikorelevant im AI Act; autonome Landmaschinen können jedoch als Maschinen-Sicherheitsbauteil (Anhang I) erfasst sein. Nutzen: Ressourcenschonung, höhere Erträge, Nachhaltigkeit. Berührungspunkte: Data Act (Maschinen- und Felddaten), Umweltrecht, Förderprogramme der Gemeinsamen Agrarpolitik." },
    en: {
      term: "AI in Agriculture (Precision Farming)",
      short: "Data-driven precision agriculture that optimises sowing, fertilising, irrigation and harvesting using AI.",
      long: "Precision farming uses satellite and drone imagery, soil sensors and weather data to manage fields at fine granularity: targeted fertilising, weed control via image recognition, yield forecasting, autonomous agricultural machinery. Usually not high-risk under the AI Act; however, autonomous agricultural machinery may be covered as a machine safety component (Annex I). Benefits: resource efficiency, higher yields, sustainability. Touch points: the Data Act (machine and field data), environmental law, Common Agricultural Policy funding." },
    links: [ { label: "Anhang I", url: "https://artificialintelligenceact.eu/annex/1/" } ],
    related: ["computer-vision", "prozessoptimierung-ki", "anhang-i"] },

  { id: "energie-ki", category: "ai-act-core", risk: "high",
    tags: ["#Energie", "#SmartGrid", "#KritischeInfrastruktur"],
    de: {
      term: "KI im Energiesektor (Smart Grid)",
      short: "KI zur Steuerung von Stromnetzen, Erzeugung und Verbrauch – als Sicherheitsbauteil kritischer Energieinfrastruktur oft Hochrisiko.",
      long: "KI in intelligenten Stromnetzen (Smart Grids) prognostiziert Erzeugung aus erneuerbaren Quellen, balanciert Angebot und Nachfrage, steuert Speicher und erkennt Störungen. Soweit sie Sicherheitsbauteil im Betrieb der Energieversorgung ist, gilt sie als Hochrisiko-KI (Anhang III Nr. 2 – kritische Infrastruktur). Anforderungen: Robustheit, Ausfallsicherheit, Cybersicherheit (NIS-2, kritische Einrichtungen). Ausfälle können großflächige Stromausfälle verursachen. Zentrale Rolle für die Energiewende und Netzstabilität bei wachsendem Anteil volatiler Erneuerbarer." },
    en: {
      term: "AI in the Energy Sector (Smart Grid)",
      short: "AI for controlling power grids, generation and consumption — often high-risk as a safety component of critical energy infrastructure.",
      long: "AI in smart grids forecasts generation from renewable sources, balances supply and demand, controls storage and detects faults. Where it is a safety component in operating energy supply, it counts as high-risk AI (Annex III(2) — critical infrastructure). Requirements: robustness, fail-safety, cybersecurity (NIS 2, critical entities). Failures can cause large-scale blackouts. A central role for the energy transition and grid stability as the share of volatile renewables grows." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["kritische-infrastruktur", "verkehrsmanagement-ki", "nis2-schnittstelle"] },

  { id: "content-moderation", category: "nlp", risk: null,
    tags: ["#ContentModeration", "#DSA", "#Plattformen"],
    de: {
      term: "KI-Content-Moderation",
      short: "Automatisierte Erkennung und Filterung problematischer Inhalte auf Plattformen – eng verzahnt mit dem Digital Services Act.",
      long: "Content-Moderation-KI erkennt Hassrede, Gewalt, Desinformation, Spam oder illegale Inhalte in Text, Bild und Video. Reguliert primär durch den Digital Services Act (DSA), der Transparenz über Moderationssysteme, Beschwerdemechanismen und – bei sehr großen Plattformen – Risikobewertungen verlangt. Der AI Act greift ergänzend (etwa Transparenz). Herausforderungen: Kontextverständnis, Fehlerkennungen (Overblocking legitimer Inhalte vs. Übersehen schädlicher), sprachliche und kulturelle Verzerrungen, Meinungsfreiheit. Menschliche Überprüfung strittiger Fälle bleibt wichtig." },
    en: {
      term: "AI Content Moderation",
      short: "Automated detection and filtering of problematic content on platforms — closely intertwined with the Digital Services Act.",
      long: "Content-moderation AI detects hate speech, violence, disinformation, spam or illegal content in text, image and video. Regulated primarily by the Digital Services Act (DSA), which requires transparency about moderation systems, complaint mechanisms and — for very large platforms — risk assessments. The AI Act applies additionally (e.g. transparency). Challenges: context understanding, misclassification (over-blocking legitimate content vs. missing harmful content), linguistic and cultural bias, freedom of expression. Human review of contested cases remains important." },
    links: [ { label: "DSA (VO 2022/2065)", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" } ],
    related: ["dsa-schnittstelle", "sentiment-analyse", "nlp", "hate-speech-detection"] },

  { id: "insurtech", category: "ai-act-core", risk: "high",
    tags: ["#InsurTech", "#Versicherung", "#Schadenregulierung"],
    de: {
      term: "KI in der Versicherung (InsurTech)",
      short: "KI-Anwendungen in der Versicherungswirtschaft – von der Antragsprüfung über die Schadenregulierung bis zur Betrugserkennung.",
      long: "InsurTech-KI unterstützt Antragsbearbeitung, Risikobewertung, dynamische Bepreisung, automatisierte Schadenregulierung und Betrugserkennung. Die Risikobewertung und Preisbildung in Lebens- und Krankenversicherung ist ausdrücklich Hochrisiko (Anhang III Nr. 5 lit. c); andere Sparten und Prozesse sind es nicht per se. Verzahnung mit Versicherungsaufsichtsrecht (Solvency II, IDD), DSGVO (Gesundheits- und Verhaltensdaten) und Antidiskriminierungsrecht. Zentrale Themen: Fairness, Transparenz der Tarifierung, Entsolidarisierung durch Individualtarife, Erklärbarkeit von Ablehnungen." },
    en: {
      term: "AI in Insurance (InsurTech)",
      short: "AI applications in the insurance industry — from application review to claims handling to fraud detection.",
      long: "InsurTech AI supports application processing, risk assessment, dynamic pricing, automated claims handling and fraud detection. Risk assessment and pricing in life and health insurance is expressly high-risk (Annex III(5)(c)); other lines and processes are not per se. Intertwined with insurance supervisory law (Solvency II, IDD), the GDPR (health and behavioural data) and anti-discrimination law. Key topics: fairness, pricing transparency, erosion of solidarity through individual tariffs, explainability of rejections." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["versicherung-scoring", "betrugserkennung", "fairness"] },

  { id: "legaltech", category: "ai-act-core", risk: null,
    tags: ["#LegalTech", "#Recht", "#Vertragsanalyse"],
    de: {
      term: "KI im Rechtsbereich (LegalTech)",
      short: "KI-Anwendungen für juristische Arbeit – Vertragsanalyse, Recherche, Dokumentenerstellung – abzugrenzen von der Hochrisiko-Justiz-KI.",
      long: "LegalTech-KI unterstützt bei Vertragsanalyse und -erstellung, Rechtsrecherche, Dokumenten-Review (E-Discovery) und Prognosen zu Prozessaussichten. Im privatwirtschaftlichen Einsatz (Kanzleien, Rechtsabteilungen) meist nicht hochrisikorelevant. Streng abzugrenzen von KI, die Justizbehörden bei der Rechtsauslegung unterstützt – diese ist Hochrisiko (Anhang III Nr. 8). Herausforderungen: Halluzinationen mit gravierenden Folgen (erfundene Präzedenzfälle), Vertraulichkeit, Berufsrecht, Haftung. Der Mensch – die Anwältin, der Richter – trägt weiterhin die Verantwortung. LLMs mit RAG auf verlässliche Rechtsquellen sind hier verbreitet." },
    en: {
      term: "AI in Law (LegalTech)",
      short: "AI applications for legal work — contract analysis, research, document drafting — to be distinguished from high-risk justice AI.",
      long: "LegalTech AI supports contract analysis and drafting, legal research, document review (e-discovery) and predictions of case outcomes. In private-sector use (law firms, legal departments) usually not high-risk. To be strictly distinguished from AI supporting judicial authorities in legal interpretation — that is high-risk (Annex III(8)). Challenges: hallucinations with serious consequences (invented precedents), confidentiality, professional law, liability. The human — the lawyer, the judge — remains responsible. LLMs with RAG on reliable legal sources are common here." },
    links: [ { label: "Anhang III", url: "https://artificialintelligenceact.eu/annex/3/" } ],
    related: ["ki-justiz", "rag", "halluzination"] },

  { id: "data-poisoning", category: "security", risk: null,
    tags: ["#DataPoisoning", "#Angriff", "#Trainingsdaten"],
    de: {
      term: "Data Poisoning",
      short: "Angriff, bei dem Trainingsdaten gezielt manipuliert werden, um das Verhalten eines Modells zu verfälschen.",
      long: "Beim Data Poisoning schleusen Angreifer manipulierte oder bösartige Beispiele in die Trainingsdaten ein. Ziel kann eine allgemeine Verschlechterung der Genauigkeit sein oder ein gezielter, versteckter Fehler (Backdoor), der nur bei bestimmten Auslösern auftritt. Besonders gefährlich bei Modellen, die aus offenen Web-Daten oder Nutzerbeiträgen lernen. Gegenmaßnahmen: Datenprüfung, Herkunftsnachweis, robuste Trainingsverfahren, Anomalieerkennung in Datensätzen. Der AI Act adressiert dies über Cybersicherheitsanforderungen (Art. 15) und Daten-Governance (Art. 10)." },
    en: {
      term: "Data Poisoning",
      short: "An attack in which training data are deliberately manipulated to distort a model's behaviour.",
      long: "In data poisoning, attackers inject manipulated or malicious examples into the training data. The goal may be a general degradation of accuracy or a targeted, hidden fault (backdoor) that only occurs on specific triggers. Especially dangerous for models learning from open web data or user contributions. Countermeasures: data vetting, provenance tracking, robust training methods, anomaly detection in datasets. The AI Act addresses this via cybersecurity requirements (Art. 15) and data governance (Art. 10)." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["backdoor-attacke", "adversarial", "daten-governance", "supply-chain-security-ki", "evasion-attack"] },

  { id: "backdoor-attacke", category: "security", risk: null,
    tags: ["#Backdoor", "#Angriff", "#Trojaner"],
    de: {
      term: "Backdoor-Angriff",
      short: "Versteckte Manipulation eines Modells, die nur bei einem bestimmten geheimen Auslöser (Trigger) schädliches Verhalten zeigt.",
      long: "Bei einem Backdoor-Angriff wird ein Modell – meist über Data Poisoning oder manipuliertes Training – so präpariert, dass es im Normalbetrieb unauffällig funktioniert, aber bei einem bestimmten Muster (z. B. einem unscheinbaren Pixelmuster oder einer Zeichenfolge) eine vom Angreifer gewünschte Ausgabe liefert. Das macht Backdoors schwer zu entdecken. Relevant besonders bei zugekauften oder heruntergeladenen Modellen unklarer Herkunft. Gegenmaßnahmen: Herkunftsnachweise, Modellprüfung, Fine-Tuning aus vertrauenswürdigen Quellen. Berührt Lieferkettensicherheit von KI." },
    en: {
      term: "Backdoor Attack",
      short: "A hidden manipulation of a model that exhibits malicious behaviour only on a specific secret trigger.",
      long: "In a backdoor attack, a model — usually via data poisoning or manipulated training — is prepared so that it behaves inconspicuously in normal operation but produces an attacker-desired output on a specific pattern (e.g. an unremarkable pixel pattern or a character string). This makes backdoors hard to detect. Especially relevant for purchased or downloaded models of unclear origin. Countermeasures: provenance evidence, model vetting, fine-tuning from trusted sources. Touches AI supply-chain security." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["data-poisoning", "supply-chain-security-ki", "model-extraction"] },

  { id: "model-inversion", category: "security", risk: null,
    tags: ["#ModelInversion", "#Privacy", "#Angriff"],
    de: {
      term: "Model-Inversion-Angriff",
      short: "Angriff, der aus den Ausgaben eines Modells sensible Merkmale der Trainingsdaten rekonstruiert.",
      long: "Bei der Model Inversion versucht ein Angreifer, aus dem Zugriff auf ein Modell Rückschlüsse auf die zugrunde liegenden Trainingsdaten zu ziehen – etwa das Gesicht einer Person aus einem Gesichtserkennungsmodell zu rekonstruieren. Das gefährdet die Vertraulichkeit personenbezogener Trainingsdaten und berührt damit unmittelbar die DSGVO. Gegenmaßnahmen: Differential Privacy, Ausgabebeschränkung, Zugriffsbegrenzung. Ein zentrales Beispiel dafür, dass ein Modell selbst zum Datenschutzrisiko werden kann, auch wenn die Rohdaten geschützt sind." },
    en: {
      term: "Model Inversion Attack",
      short: "An attack that reconstructs sensitive features of the training data from a model's outputs.",
      long: "In model inversion, an attacker attempts to infer the underlying training data from access to a model — e.g. reconstructing a person's face from a facial-recognition model. This jeopardises the confidentiality of personal training data and thus directly touches the GDPR. Countermeasures: differential privacy, output restriction, access limitation. A key example that a model itself can become a privacy risk even when the raw data are protected." },
    links: [ { label: "EDSA Opinion 28/2024", url: "https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en" } ],
    related: ["membership-inference", "differential-privacy", "dsgvo-schnittstelle"] },

  { id: "membership-inference", category: "security", risk: null,
    tags: ["#MembershipInference", "#Privacy", "#Angriff"],
    de: {
      term: "Membership-Inference-Angriff",
      short: "Angriff, der feststellt, ob ein bestimmter Datensatz Teil der Trainingsdaten eines Modells war.",
      long: "Bei der Membership Inference will ein Angreifer herausfinden, ob die Daten einer konkreten Person zum Training verwendet wurden. Schon diese Information kann sensibel sein – etwa wenn ein Modell auf Daten von Patienten einer bestimmten Klinik trainiert wurde und die Mitgliedschaft eine Erkrankung verrät. Datenschutzrechtlich bedeutsam (DSGVO). Modelle, die überanpassen (Overfitting), sind besonders anfällig. Gegenmaßnahmen: Differential Privacy, Regularisierung, Begrenzung des Overfittings. Wichtiges Konzept für die Bewertung von Datenschutzrisiken trainierter Modelle." },
    en: {
      term: "Membership Inference Attack",
      short: "An attack that determines whether a particular record was part of a model's training data.",
      long: "In membership inference, an attacker seeks to find out whether a specific person's data were used for training. Even this information can be sensitive — e.g. if a model was trained on data from a particular clinic's patients and membership reveals a condition. Significant under data protection law (GDPR). Overfitting models are particularly vulnerable. Countermeasures: differential privacy, regularization, limiting overfitting. An important concept for assessing the privacy risks of trained models." },
    links: [ { label: "EDSA Opinion 28/2024", url: "https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en" } ],
    related: ["model-inversion", "differential-privacy", "overfitting"] },

  { id: "model-extraction", category: "security", risk: null,
    tags: ["#ModelExtraction", "#IP", "#Angriff"],
    de: {
      term: "Model-Extraction-Angriff",
      short: "Angriff, der durch systematische Anfragen ein funktionales Abbild eines fremden Modells nachbaut (\"Modelldiebstahl\").",
      long: "Bei der Model Extraction stellt ein Angreifer einem Modell viele Anfragen und nutzt die Antworten, um ein eigenes Modell zu trainieren, das dessen Verhalten nachahmt. So lassen sich teuer entwickelte Modelle kopieren, ohne die Trainingsdaten oder Gewichte zu besitzen. Das berührt Geschäftsgeheimnisse und geistiges Eigentum und ist eng verwandt mit der Wissensdestillation – nur ohne Erlaubnis. Gegenmaßnahmen: Abfrage-Ratenbegrenzung, Ausgabeverrauschen, Nutzungsbedingungen, Wasserzeichen in Modellen. Relevant für den Schutz von KI als Wirtschaftsgut." },
    en: {
      term: "Model Extraction Attack",
      short: "An attack that reconstructs a functional copy of another's model through systematic queries (\"model stealing\").",
      long: "In model extraction, an attacker sends many queries to a model and uses the responses to train their own model mimicking its behaviour. This allows expensively developed models to be copied without possessing the training data or weights. It touches trade secrets and intellectual property and is closely related to knowledge distillation — only without permission. Countermeasures: query rate limiting, output noising, terms of use, watermarking in models. Relevant to protecting AI as an economic asset." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["distillation", "backdoor-attacke", "urheberrecht-schnittstelle"] },

  { id: "jailbreak", category: "security", risk: null,
    tags: ["#Jailbreak", "#LLM", "#Angriff", "#Guardrails"],
    de: {
      term: "Jailbreak",
      short: "Umgehung der Sicherheitsvorkehrungen eines Sprachmodells durch geschickt formulierte Eingaben, um verbotene Ausgaben zu erzwingen.",
      long: "Ein Jailbreak überlistet das Alignment und die Guardrails eines Modells, sodass es Inhalte liefert, die es eigentlich verweigern sollte (etwa Anleitungen zu Schadsoftware). Techniken reichen von Rollenspiel-Prompts über Verschachtelung und Kodierung bis zu automatisiert gesuchten Angriffsmustern. Eng verwandt mit Prompt Injection, aber auf das Aushebeln von Sicherheitsregeln fokussiert. Gegenmaßnahmen: robustes Alignment, mehrschichtige Guardrails, adversariales Testen (AI Red Teaming). Dauerhaftes Wettrüsten zwischen Angreifern und Betreibern." },
    en: {
      term: "Jailbreak",
      short: "Circumventing a language model's safeguards through cleverly crafted inputs to force prohibited outputs.",
      long: "A jailbreak outwits a model's alignment and guardrails so that it delivers content it should refuse (e.g. instructions for malware). Techniques range from role-play prompts through nesting and encoding to automatically discovered attack patterns. Closely related to prompt injection but focused on defeating safety rules. Countermeasures: robust alignment, layered guardrails, adversarial testing (AI red teaming). An ongoing arms race between attackers and operators." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["prompt-injection", "guardrails", "ai-red-teaming", "red-teaming-vs-blue"] },

  { id: "evasion-attack", category: "security", risk: null,
    tags: ["#Evasion", "#Adversarial", "#Angriff"],
    de: {
      term: "Evasion-Angriff",
      short: "Manipulation der Eingabe zur Laufzeit, um ein Modell zu einer falschen Ausgabe zu verleiten – ohne das Modell selbst zu verändern.",
      long: "Beim Evasion-Angriff wird eine Eingabe so verändert, dass sie für Menschen unauffällig bleibt, das Modell aber täuscht – etwa ein leicht verändertes Verkehrsschild, das ein Bilderkennungssystem falsch klassifiziert. Anders als beim Data Poisoning (Angriff auf das Training) zielt Evasion auf die Inferenzphase. Eng verbunden mit dem Konzept der Adversarial Examples. Sicherheitskritisch bei autonomem Fahren, Gesichtserkennung, Malware-Erkennung. Gegenmaßnahmen: adversariales Training, robuste Architekturen, Eingabeprüfung. Ausdrücklich in den Cybersicherheitsanforderungen des AI Act (Art. 15) genannt." },
    en: {
      term: "Evasion Attack",
      short: "Manipulating the input at run time to trick a model into a wrong output — without altering the model itself.",
      long: "In an evasion attack, an input is altered so that it remains inconspicuous to humans but deceives the model — e.g. a slightly modified traffic sign that an image-recognition system misclassifies. Unlike data poisoning (attack on training), evasion targets the inference phase. Closely connected to the concept of adversarial examples. Safety-critical in autonomous driving, facial recognition, malware detection. Countermeasures: adversarial training, robust architectures, input validation. Explicitly named in the AI Act's cybersecurity requirements (Art. 15)." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["adversarial", "data-poisoning", "genauigkeit-robustheit"] },

  { id: "supply-chain-security-ki", category: "security", risk: null,
    tags: ["#SupplyChain", "#Sicherheit", "#Modellherkunft"],
    de: {
      term: "KI-Lieferkettensicherheit",
      short: "Absicherung der gesamten Herkunfts- und Bezugskette von Modellen, Daten und Komponenten gegen Manipulation.",
      long: "Moderne KI-Systeme setzen sich aus vielen Bausteinen zusammen: vortrainierte Modelle, Datensätze, Bibliotheken, Werkzeuge. Jede Stufe kann kompromittiert sein (manipulierte Modelle, vergiftete Daten, unsichere Abhängigkeiten). KI-Lieferkettensicherheit umfasst Herkunftsnachweise, Integritätsprüfungen, Software-Stücklisten (SBOM/AI-BOM), signierte Modelle und die Bewertung von Drittanbietern. Verzahnung mit dem Cyber Resilience Act, NIS-2 und den Cybersicherheitsanforderungen des AI Act (Art. 15). Besonders relevant bei Nutzung von Open-Source- oder zugekauften Modellen." },
    en: {
      term: "AI Supply Chain Security",
      short: "Securing the entire provenance and sourcing chain of models, data and components against manipulation.",
      long: "Modern AI systems are assembled from many building blocks: pretrained models, datasets, libraries, tools. Each stage can be compromised (manipulated models, poisoned data, insecure dependencies). AI supply-chain security covers provenance evidence, integrity checks, software bills of materials (SBOM/AI-BOM), signed models and third-party assessment. Intertwined with the Cyber Resilience Act, NIS 2 and the AI Act's cybersecurity requirements (Art. 15). Particularly relevant when using open-source or purchased models." },
    links: [ { label: "CRA (VO 2024/2847)", url: "https://eur-lex.europa.eu/eli/reg/2024/2847/oj" } ],
    related: ["cra-schnittstelle", "backdoor-attacke", "open-source-ausnahme", "data-poisoning"] },

  { id: "differential-privacy", category: "security", risk: null,
    tags: ["#DifferentialPrivacy", "#Datenschutz", "#PET"],
    de: {
      term: "Differential Privacy",
      short: "Mathematisch fundiertes Verfahren, das statistische Auswertungen ermöglicht, ohne Rückschlüsse auf einzelne Personen zuzulassen.",
      long: "Differential Privacy fügt Daten oder Ergebnissen kontrolliertes Rauschen hinzu, sodass die Anwesenheit oder Abwesenheit einer einzelnen Person das Ergebnis kaum verändert. Ein Parameter (Epsilon) steuert den Kompromiss zwischen Datenschutz und Genauigkeit. Vorteil: eine beweisbare, quantifizierbare Datenschutzgarantie – stärker als bloße Anonymisierung. Eingesetzt bei Statistiken, im Modelltraining und von großen Tech-Anbietern. Schützt gegen Membership Inference und Model Inversion. Eine der wichtigsten Privacy-Enhancing Technologies (PET) für datenschutzfreundliche KI." },
    en: {
      term: "Differential Privacy",
      short: "A mathematically grounded method enabling statistical analysis without allowing inferences about individuals.",
      long: "Differential privacy adds controlled noise to data or results so that the presence or absence of a single person barely changes the outcome. A parameter (epsilon) governs the trade-off between privacy and accuracy. Advantage: a provable, quantifiable privacy guarantee — stronger than mere anonymisation. Used in statistics, in model training and by large tech providers. Protects against membership inference and model inversion. One of the most important privacy-enhancing technologies (PETs) for privacy-friendly AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["federated-learning", "model-inversion", "anonymisierung", "membership-inference", "homomorphe-verschluesselung"] },

  { id: "federated-learning", category: "security", risk: null,
    tags: ["#FederatedLearning", "#Datenschutz", "#Dezentral"],
    de: {
      term: "Föderiertes Lernen (Federated Learning)",
      short: "Trainingsverfahren, bei dem ein Modell dezentral über viele Geräte lernt, ohne dass die Rohdaten diese Geräte verlassen.",
      long: "Beim föderierten Lernen wird das Modell an die Daten gebracht statt umgekehrt: Jedes Gerät (z. B. Smartphone, Klinik-Server) trainiert lokal mit seinen eigenen Daten, und nur die Modell-Aktualisierungen – nicht die Daten selbst – werden zusammengeführt. Vorteil: sensible Daten bleiben lokal, was Datenschutz und Datensouveränität stärkt. Anwendungen: Medizin, Mobilgeräte, Banken. Herausforderungen: Kommunikationsaufwand, uneinheitliche Daten, verbleibende Angriffsflächen (die Updates können Informationen preisgeben – daher oft mit Differential Privacy kombiniert)." },
    en: {
      term: "Federated Learning",
      short: "A training method in which a model learns in a decentralised way across many devices without the raw data leaving those devices.",
      long: "In federated learning, the model is brought to the data rather than vice versa: each device (e.g. smartphone, clinic server) trains locally on its own data, and only the model updates — not the data themselves — are aggregated. Advantage: sensitive data stay local, strengthening privacy and data sovereignty. Applications: medicine, mobile devices, banks. Challenges: communication overhead, heterogeneous data, remaining attack surfaces (updates can leak information — hence often combined with differential privacy)." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["differential-privacy", "datenminimierung", "edge-ai", "homomorphe-verschluesselung"] },

  { id: "homomorphe-verschluesselung", category: "security", risk: null,
    tags: ["#Homomorph", "#Verschluesselung", "#PET"],
    de: {
      term: "Homomorphe Verschlüsselung",
      short: "Verschlüsselungsverfahren, das Berechnungen direkt auf verschlüsselten Daten erlaubt, ohne sie zu entschlüsseln.",
      long: "Mit homomorpher Verschlüsselung kann ein Dienstleister Daten verarbeiten, ohne sie je im Klartext zu sehen – das Ergebnis der Berechnung ist ebenfalls verschlüsselt und nur vom Dateninhaber lesbar. Für KI bedeutet das: Ein Modell könnte auf verschlüsselten Eingaben rechnen, ohne die sensiblen Daten offenzulegen. Höchstes Datenschutzniveau, aber noch sehr rechenintensiv und daher in der Praxis begrenzt. Eine der Privacy-Enhancing Technologies. Relevant für hochsensible Bereiche wie Medizin und Finanzen sowie für datenschutzkonforme Cloud-Verarbeitung." },
    en: {
      term: "Homomorphic Encryption",
      short: "An encryption method allowing computations directly on encrypted data without decrypting them.",
      long: "With homomorphic encryption, a service provider can process data without ever seeing them in plaintext — the computation result is also encrypted and readable only by the data owner. For AI this means a model could compute on encrypted inputs without revealing the sensitive data. The highest level of privacy, but still very compute-intensive and therefore limited in practice. One of the privacy-enhancing technologies. Relevant to highly sensitive areas such as medicine and finance and to privacy-compliant cloud processing." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["differential-privacy", "federated-learning"] },

  { id: "anonymisierung", category: "security", risk: null,
    tags: ["#Anonymisierung", "#Pseudonymisierung", "#DSGVO"],
    de: {
      term: "Anonymisierung und Pseudonymisierung",
      short: "Verfahren, die den Personenbezug von Daten entfernen (Anonymisierung) oder durch ein Kennzeichen ersetzen (Pseudonymisierung).",
      long: "Bei der Anonymisierung werden Daten so verändert, dass keine Person mehr identifizierbar ist – solche Daten fallen nicht mehr unter die DSGVO. Bei der Pseudonymisierung werden identifizierende Merkmale durch ein Pseudonym ersetzt, die Zuordnung bleibt aber mit einem separat gespeicherten Schlüssel möglich – pseudonyme Daten bleiben personenbezogen. Für KI-Training zentral, aber tückisch: Vermeintlich anonyme Daten lassen sich oft re-identifizieren (etwa durch Kombination von Merkmalen). Der AI Act erlaubt unter Auflagen die Verarbeitung besonderer Datenkategorien zur Bias-Erkennung (Art. 10) mit Pseudonymisierung als Schutzmaßnahme." },
    en: {
      term: "Anonymisation and Pseudonymisation",
      short: "Methods that remove the personal reference of data (anonymisation) or replace it with an identifier (pseudonymisation).",
      long: "In anonymisation, data are altered so that no person is identifiable — such data no longer fall under the GDPR. In pseudonymisation, identifying features are replaced by a pseudonym, but re-linking remains possible with a separately stored key — pseudonymous data remain personal. Central to AI training but tricky: supposedly anonymous data can often be re-identified (e.g. by combining features). The AI Act permits, under conditions, the processing of special data categories for bias detection (Art. 10) with pseudonymisation as a safeguard." },
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["datenminimierung", "differential-privacy", "daten-governance", "named-entity-recognition"] },

  { id: "privacy-by-design", category: "ethics", risk: null,
    tags: ["#PrivacyByDesign", "#DSGVO", "#Art25"],
    de: {
      term: "Privacy by Design",
      short: "Grundsatz, Datenschutz von Anfang an in Technik und Prozesse einzubauen, statt ihn nachträglich aufzusetzen.",
      long: "Privacy by Design und Privacy by Default sind in Art. 25 DSGVO verankert: Datenschutz muss durch Technikgestaltung und datenschutzfreundliche Voreinstellungen von Beginn an mitgedacht werden. Für KI bedeutet das: Datenminimierung, frühe Wahl datenschutzfreundlicher Architekturen (etwa föderiertes Lernen, Differential Privacy), Zweckbindung und eingebaute Löschkonzepte. Ergänzt die AI-Act-Anforderungen an Daten-Governance (Art. 10) und schafft Synergien zwischen Datenschutz- und KI-Compliance. Ein Kernprinzip verantwortungsvoller KI-Entwicklung." },
    en: {
      term: "Privacy by Design",
      short: "The principle of building data protection into technology and processes from the outset rather than adding it afterwards.",
      long: "Privacy by design and privacy by default are anchored in Art. 25 GDPR: data protection must be considered from the start through technical design and privacy-friendly default settings. For AI this means data minimisation, early choice of privacy-friendly architectures (such as federated learning, differential privacy), purpose limitation and built-in deletion concepts. Complements the AI Act's data governance requirements (Art. 10) and creates synergies between privacy and AI compliance. A core principle of responsible AI development." },
    links: [ { label: "Art. 25 DSGVO", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" } ],
    related: ["datenminimierung", "conformity-by-design", "dsgvo-schnittstelle"] },

  { id: "datenminimierung", category: "ethics", risk: null,
    tags: ["#Datenminimierung", "#DSGVO", "#Zweckbindung"],
    de: {
      term: "Datenminimierung",
      short: "Grundsatz, nur so viele personenbezogene Daten zu verarbeiten, wie für den jeweiligen Zweck erforderlich sind.",
      long: "Die Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO) steht in einem Spannungsverhältnis zum Datenhunger moderner KI, die oft von großen Datenmengen profitiert. Sie verlangt, den Umfang, die Speicherdauer und die Zugänglichkeit von Daten auf das Notwendige zu begrenzen. Lösungsansätze im KI-Kontext: synthetische Daten, föderiertes Lernen, aggregierte statt individueller Daten, frühzeitige Anonymisierung. Ein zentrales Abwägungsfeld zwischen Modellqualität und Datenschutz – und ein wiederkehrender Streitpunkt bei der Bewertung großer Trainingsdatensätze." },
    en: {
      term: "Data Minimisation",
      short: "The principle of processing only as much personal data as necessary for the respective purpose.",
      long: "Data minimisation (Art. 5(1)(c) GDPR) is in tension with the data hunger of modern AI, which often benefits from large volumes of data. It requires limiting the scope, storage duration and accessibility of data to what is necessary. Approaches in the AI context: synthetic data, federated learning, aggregated rather than individual data, early anonymisation. A key trade-off field between model quality and data protection — and a recurring point of contention in assessing large training datasets." },
    links: [ { label: "DSGVO", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj" } ],
    related: ["privacy-by-design", "anonymisierung", "daten-governance", "federated-learning"] },

  { id: "mlops", category: "governance", risk: null,
    tags: ["#MLOps", "#Betrieb", "#Lebenszyklus"],
    de: {
      term: "MLOps",
      short: "Praktiken und Werkzeuge, um KI-Modelle zuverlässig zu entwickeln, bereitzustellen, zu überwachen und zu pflegen (Machine Learning Operations).",
      long: "MLOps überträgt Prinzipien von DevOps auf das maschinelle Lernen: Versionierung von Daten und Modellen, automatisierte Trainings- und Bereitstellungspipelines, kontinuierliche Überwachung im Betrieb (etwa auf Drift), reproduzierbare Experimente und geregeltes Nachtraining. Gut umgesetztes MLOps ist die praktische Grundlage, um viele AI-Act-Pflichten zu erfüllen – etwa Aufzeichnung (Art. 12), Post-Market-Monitoring (Art. 72) und Qualitätsmanagement. Bindeglied zwischen technischer KI-Entwicklung und regulatorischer Compliance im laufenden Betrieb." },
    en: {
      term: "MLOps",
      short: "Practices and tools to reliably develop, deploy, monitor and maintain AI models (Machine Learning Operations).",
      long: "MLOps transfers DevOps principles to machine learning: versioning of data and models, automated training and deployment pipelines, continuous monitoring in operation (e.g. for drift), reproducible experiments and governed retraining. Well-implemented MLOps is the practical foundation for meeting many AI Act duties — e.g. record-keeping (Art. 12), post-market monitoring (Art. 72) and quality management. A link between technical AI development and regulatory compliance in ongoing operation." },
    links: [ { label: "Art. 72 AI Act", url: "https://artificialintelligenceact.eu/article/72/" } ],
    related: ["model-context-drift", "audit-trail", "post-market-monitoring", "concept-drift-detection", "ki-lebenszyklus"] },

  { id: "model-card", category: "governance", risk: null,
    tags: ["#ModelCard", "#Transparenz", "#Dokumentation"],
    de: {
      term: "Model Card (Modellsteckbrief)",
      short: "Standardisiertes Kurzdokument, das Zweck, Fähigkeiten, Grenzen und Leistungswerte eines KI-Modells transparent beschreibt.",
      long: "Model Cards fassen wesentliche Informationen über ein Modell knapp zusammen: vorgesehener Verwendungszweck, Trainingsdaten, Leistungsmetriken (auch aufgeschlüsselt nach Gruppen zur Bias-Erkennung), bekannte Grenzen und ethische Erwägungen. Ziel: informierte Nutzung und Nachvollziehbarkeit. Das Konzept unterstützt die Erfüllung von Dokumentations- und Transparenzpflichten des AI Act (Art. 11, 13) und ähnelt inhaltlich der geforderten technischen Dokumentation und Gebrauchsanweisung. Verwandt mit Datasheets für Datensätze. Verbreitetes Instrument verantwortungsvoller KI-Dokumentation." },
    en: {
      term: "Model Card",
      short: "A standardised short document transparently describing an AI model's purpose, capabilities, limits and performance figures.",
      long: "Model cards concisely summarise essential information about a model: intended purpose, training data, performance metrics (also broken down by group for bias detection), known limits and ethical considerations. Aim: informed use and traceability. The concept supports meeting the AI Act's documentation and transparency duties (Arts. 11, 13) and resembles in content the required technical documentation and instructions for use. Related to datasheets for datasets. A widespread instrument of responsible AI documentation." },
    links: [ { label: "Art. 13 AI Act", url: "https://artificialintelligenceact.eu/article/13/" } ],
    related: ["datasheet", "technische-dokumentation", "gebrauchsanweisung"] },

  { id: "datasheet", category: "governance", risk: null,
    tags: ["#Datasheet", "#Datensatz", "#Dokumentation"],
    de: {
      term: "Datasheet für Datensätze",
      short: "Standardisierte Dokumentation, die Herkunft, Zusammensetzung, Sammlung und Grenzen eines Datensatzes beschreibt.",
      long: "Nach dem Vorbild technischer Datenblätter für Bauteile dokumentiert ein Datasheet (Datasheets for Datasets) systematisch, wie und warum ein Datensatz entstand: Motivation, Erhebungsmethode, enthaltene und fehlende Gruppen, Vorverarbeitung, empfohlene und ungeeignete Verwendungen, rechtliche und ethische Aspekte. Ziel: Transparenz über die Datengrundlage und bewusste Vermeidung von Bias. Unterstützt die Daten-Governance-Anforderungen des AI Act (Art. 10) und ergänzt Model Cards auf der Datenseite. Zentraler Baustein nachvollziehbarer, verantwortungsvoller Datenpraxis." },
    en: {
      term: "Datasheet for Datasets",
      short: "Standardised documentation describing the provenance, composition, collection and limits of a dataset.",
      long: "Modelled on technical datasheets for components, a datasheet (Datasheets for Datasets) systematically documents how and why a dataset came about: motivation, collection method, groups included and missing, preprocessing, recommended and unsuitable uses, legal and ethical aspects. Aim: transparency about the data basis and deliberate avoidance of bias. Supports the AI Act's data governance requirements (Art. 10) and complements model cards on the data side. A key building block of traceable, responsible data practice." },
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["model-card", "daten-governance", "trainingsdaten-zusammenfassung"] },

  { id: "human-in-the-loop", category: "ai-act-core", risk: null,
    tags: ["#HumanInTheLoop", "#MenschlicheAufsicht", "#Art14"],
    de: {
      term: "Human-in-the-Loop",
      short: "Gestaltungsprinzip, bei dem ein Mensch in Entscheidungen eines KI-Systems eingebunden bleibt und eingreifen kann.",
      long: "Man unterscheidet Abstufungen: Human-in-the-Loop (der Mensch bestätigt oder trifft jede Entscheidung mit), Human-on-the-Loop (der Mensch überwacht und kann eingreifen) und Human-in-Command (übergeordnete Kontrolle über den Einsatz). Diese Konzepte konkretisieren die im AI Act geforderte menschliche Aufsicht (Art. 14) für Hochrisiko-KI. Ziel: Automatisierungsbias vermeiden, Fehler abfangen, Verantwortung beim Menschen halten. Wirksame Aufsicht setzt voraus, dass der Mensch die nötige Kompetenz, Zeit und tatsächliche Eingriffsmöglichkeit hat – bloße Alibi-Kontrolle genügt nicht." },
    en: {
      term: "Human-in-the-Loop",
      short: "A design principle where a human remains involved in an AI system's decisions and can intervene.",
      long: "Gradations are distinguished: human-in-the-loop (the human confirms or co-makes every decision), human-on-the-loop (the human monitors and can intervene) and human-in-command (overarching control over deployment). These concepts operationalise the human oversight required by the AI Act (Art. 14) for high-risk AI. Aim: avoid automation bias, catch errors, keep responsibility with humans. Effective oversight requires the human to have the necessary competence, time and genuine ability to intervene — mere token control is not enough." },
    links: [ { label: "Art. 14 AI Act", url: "https://artificialintelligenceact.eu/article/14/" } ],
    related: ["menschliche-aufsicht", "automation-bias", "conformity-by-design"] },

  { id: "shap-lime", category: "ethics", risk: null,
    tags: ["#SHAP", "#LIME", "#XAI", "#Erklaerbarkeit"],
    de: {
      term: "SHAP und LIME (Erklärungsmethoden)",
      short: "Verfahren, die nachvollziehbar machen, welche Eingabemerkmale wie stark zu einer einzelnen KI-Entscheidung beigetragen haben.",
      long: "SHAP und LIME sind zwei verbreitete Methoden der erklärbaren KI (XAI). Sie erklären einzelne Vorhersagen \"von außen\" (modellagnostisch), indem sie den Einfluss jedes Merkmals abschätzen – etwa welche Faktoren zu einer Kreditablehnung führten. SHAP beruht auf einem spieltheoretischen Konzept (Shapley-Werte) und liefert konsistente Beiträge; LIME nähert das Modell lokal durch ein einfaches, verständliches Modell an. Sie unterstützen die Erklärbarkeit, die für menschliche Aufsicht (Art. 14) und das Erklärungsrecht (Art. 86) nötig ist. Grenzen: Erklärungen sind Näherungen und können in die Irre führen." },
    en: {
      term: "SHAP and LIME",
      short: "Methods that make transparent which input features contributed how strongly to an individual AI decision.",
      long: "SHAP and LIME are two widespread explainable-AI (XAI) methods. They explain individual predictions \"from the outside\" (model-agnostic) by estimating the influence of each feature — e.g. which factors led to a credit rejection. SHAP rests on a game-theoretic concept (Shapley values) and yields consistent contributions; LIME approximates the model locally with a simple, understandable model. They support the explainability needed for human oversight (Art. 14) and the right to explanation (Art. 86). Limits: explanations are approximations and can mislead." },
    links: [ { label: "Art. 86 AI Act", url: "https://artificialintelligenceact.eu/article/86/" } ],
    related: ["xai", "explainability-vs-performance", "erklaerungsrecht"] },

  { id: "audit-trail", category: "governance", risk: null,
    tags: ["#AuditTrail", "#Nachvollziehbarkeit", "#Logging"],
    de: {
      term: "Audit-Trail (Prüfpfad)",
      short: "Lückenlose, manipulationssichere Aufzeichnung von Ereignissen und Entscheidungen, die eine spätere Überprüfung ermöglicht.",
      long: "Ein Audit-Trail protokolliert nachvollziehbar, wer wann was mit einem System getan hat und welche Entscheidungen das System getroffen hat. Für Hochrisiko-KI konkretisiert der AI Act dies in der Aufzeichnungspflicht (Art. 12): automatische Protokollierung über den Lebenszyklus, um Rückverfolgbarkeit, Fehleranalyse und behördliche Prüfung zu ermöglichen. Anforderungen: Integrität (fälschungssicher), ausreichende Aufbewahrung, Auswertbarkeit. Praktische Grundlage für Post-Market-Monitoring, Vorfalluntersuchung und den Nachweis von Compliance gegenüber Marktüberwachungsbehörden." },
    en: {
      term: "Audit Trail",
      short: "A complete, tamper-evident record of events and decisions enabling later review.",
      long: "An audit trail logs traceably who did what with a system and when, and which decisions the system made. For high-risk AI, the AI Act operationalises this in the record-keeping duty (Art. 12): automatic logging over the lifecycle to enable traceability, error analysis and official review. Requirements: integrity (tamper-evident), sufficient retention, analysability. A practical basis for post-market monitoring, incident investigation and demonstrating compliance to market surveillance authorities." },
    links: [ { label: "Art. 12 AI Act", url: "https://artificialintelligenceact.eu/article/12/" } ],
    related: ["aufzeichnungspflicht", "mlops", "accountability"] },

  { id: "ai-governance", category: "governance", risk: null,
    tags: ["#AIGovernance", "#Organisation", "#Verantwortung"],
    de: {
      term: "KI-Governance (im Unternehmen)",
      short: "Organisatorischer Rahmen aus Rollen, Prozessen und Richtlinien, mit dem eine Organisation den verantwortungsvollen KI-Einsatz steuert.",
      long: "Unternehmens-KI-Governance legt fest, wer für KI-Systeme verantwortlich ist, wie Risiken bewertet werden, welche Richtlinien gelten und wie Compliance sichergestellt wird. Elemente: KI-Inventar, Rollen (etwa KI-Verantwortliche, Ethikgremien), Freigabeprozesse, Schulungen (KI-Kompetenz nach Art. 4), Lieferantenmanagement. Ein Managementsystem nach ISO/IEC 42001 bietet dafür einen zertifizierbaren Rahmen. Gute Governance macht die vielen Einzelpflichten des AI Act praktisch beherrschbar und schafft Vertrauen bei Kunden und Aufsicht. Bindeglied zwischen Recht, Technik und Organisation." },
    en: {
      term: "AI Governance (in Organisations)",
      short: "An organisational framework of roles, processes and policies with which an organisation steers responsible AI use.",
      long: "Corporate AI governance defines who is responsible for AI systems, how risks are assessed, which policies apply and how compliance is ensured. Elements: AI inventory, roles (e.g. AI officers, ethics boards), approval processes, training (AI literacy under Art. 4), supplier management. A management system per ISO/IEC 42001 provides a certifiable framework. Good governance makes the AI Act's many individual duties practically manageable and builds trust with customers and regulators. A link between law, technology and organisation." },
    links: [ { label: "ISO/IEC 42001", url: "https://www.iso.org/standard/81230.html" } ],
    related: ["iso-42001", "conformity-by-design", "ki-kompetenz-organisation", "accountability", "nist-ai-rmf"] },

  { id: "conformity-by-design", category: "ai-act-core", risk: null,
    tags: ["#ComplianceByDesign", "#Entwicklung", "#Lebenszyklus"],
    de: {
      term: "Compliance by Design",
      short: "Ansatz, regulatorische Anforderungen von Beginn der Entwicklung an in ein KI-System einzubauen, statt sie nachträglich nachzurüsten.",
      long: "Analog zu Privacy by Design bedeutet Compliance by Design, die Pflichten des AI Act – Risikomanagement, Daten-Governance, Aufzeichnung, Transparenz, menschliche Aufsicht – bereits in Architektur und Entwicklungsprozess zu verankern. Das ist wirtschaftlicher und wirksamer als nachträgliche Anpassung eines fertigen Systems, die oft teuer oder unmöglich ist. Praktisch umgesetzt über Anforderungsdefinition, MLOps, Model Cards und ein KI-Managementsystem. Zunehmend erwartet von Kunden, Investoren und Aufsicht als Zeichen professioneller, zukunftssicherer KI-Entwicklung." },
    en: {
      term: "Compliance by Design",
      short: "An approach that builds regulatory requirements into an AI system from the start of development rather than retrofitting them.",
      long: "Analogous to privacy by design, compliance by design means anchoring the AI Act's duties — risk management, data governance, record-keeping, transparency, human oversight — in architecture and development process from the outset. This is more economical and effective than retrofitting a finished system, which is often costly or impossible. Practically implemented via requirements definition, MLOps, model cards and an AI management system. Increasingly expected by customers, investors and regulators as a sign of professional, future-proof AI development." },
    links: [ { label: "Art. 9 AI Act", url: "https://artificialintelligenceact.eu/article/9/" } ],
    related: ["privacy-by-design", "ai-governance", "risikomanagementsystem", "human-in-the-loop", "iso-42001"] },

  { id: "diskriminierung-ki", category: "ethics", risk: null,
    tags: ["#Diskriminierung", "#Fairness", "#Grundrechte"],
    de: {
      term: "Algorithmische Diskriminierung",
      short: "Benachteiligung von Personen oder Gruppen durch KI-Entscheidungen aufgrund geschützter Merkmale – oft unbeabsichtigt.",
      long: "Man unterscheidet direkte Diskriminierung (ein geschütztes Merkmal wie Geschlecht wird direkt genutzt) und indirekte oder Proxy-Diskriminierung (scheinbar neutrale Merkmale wie die Postleitzahl korrelieren mit geschützten Merkmalen). KI kann bestehende gesellschaftliche Verzerrungen aus den Trainingsdaten übernehmen und verstärken. Rechtlich erfasst durch Antidiskriminierungsrecht (AGG, EU-Gleichbehandlungsrichtlinien) und die Grundrechtecharta; der AI Act adressiert es über Daten-Governance (Art. 10), Bias-Prüfung und die FRIA. Zentrales Motiv vieler Hochrisiko-Einstufungen." },
    en: {
      term: "Algorithmic Discrimination",
      short: "Disadvantaging of persons or groups by AI decisions on the basis of protected characteristics — often unintended.",
      long: "A distinction is drawn between direct discrimination (a protected characteristic such as sex is used directly) and indirect or proxy discrimination (seemingly neutral features such as postcode correlate with protected characteristics). AI can absorb and amplify existing societal biases from the training data. Legally covered by anti-discrimination law and the Charter of Fundamental Rights; the AI Act addresses it via data governance (Art. 10), bias examination and the FRIA. A central motive behind many high-risk classifications." },
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["bias", "fairness-metriken", "fria", "grundrechtebehoerden"] },

  { id: "fairness-metriken", category: "ethics", risk: null,
    tags: ["#Fairness", "#Metrik", "#Bias"],
    de: {
      term: "Fairness-Metriken",
      short: "Quantitative Maße, um zu prüfen, ob ein KI-System verschiedene Gruppen gleich behandelt – mit teils unvereinbaren Definitionen.",
      long: "Es gibt viele mathematische Fairness-Definitionen: gleiche Fehlerraten über Gruppen (equalized odds), gleiche Trefferwahrscheinlichkeit (demographic parity), gleiche Kalibrierung u. a. Ein wichtiges Ergebnis: Mehrere dieser Kriterien lassen sich meist nicht gleichzeitig erfüllen (Unmöglichkeitssätze). Welche Fairness angemessen ist, ist daher keine rein technische, sondern eine wertende Entscheidung, die vom Kontext abhängt. Praktisch relevant für die Bias-Prüfung nach Art. 10 und die Bewertung von Hochrisiko-Systemen. Fairness-Metriken machen Diskriminierung messbar, ersetzen aber nicht die rechtliche und ethische Abwägung." },
    en: {
      term: "Fairness Metrics",
      short: "Quantitative measures to check whether an AI system treats different groups equally — with partly incompatible definitions.",
      long: "There are many mathematical fairness definitions: equal error rates across groups (equalized odds), equal positive rate (demographic parity), equal calibration and others. An important result: several of these criteria usually cannot be satisfied simultaneously (impossibility theorems). Which fairness is appropriate is therefore not a purely technical but a value-laden decision that depends on context. Practically relevant for bias examination under Art. 10 and the assessment of high-risk systems. Fairness metrics make discrimination measurable but do not replace the legal and ethical weighing." },
    links: [ { label: "Art. 10 AI Act", url: "https://artificialintelligenceact.eu/article/10/" } ],
    related: ["fairness", "diskriminierung-ki", "bias", "wertekonflikte-ki"] },

  { id: "ki-nachhaltigkeit", category: "ethics", risk: null,
    tags: ["#Nachhaltigkeit", "#Energie", "#GreenAI"],
    de: {
      term: "Nachhaltigkeit von KI (Green AI)",
      short: "Betrachtung des Energie-, Wasser- und Ressourcenverbrauchs von KI-Systemen über ihren gesamten Lebenszyklus.",
      long: "Das Training und der Betrieb großer Modelle verbrauchen erhebliche Mengen an Strom und Kühlwasser und verursachen CO2-Emissionen. Green AI zielt darauf, Effizienz zu steigern (durch Quantisierung, Distillation, effiziente Architekturen) und Transparenz über den Fußabdruck zu schaffen. Der AI Act greift dies auf: GPAI-Anbieter mit systemischem Risiko sollen Energieverbrauch dokumentieren, und Verhaltenskodizes (Art. 95) fördern Umweltverträglichkeit. Spannungsfeld zwischen wachsender Modellgröße und Klimazielen. Zunehmend Teil von ESG-Berichterstattung und Beschaffungskriterien." },
    en: {
      term: "Sustainability of AI (Green AI)",
      short: "Consideration of the energy, water and resource consumption of AI systems across their entire lifecycle.",
      long: "Training and operating large models consume substantial electricity and cooling water and cause CO2 emissions. Green AI aims to increase efficiency (through quantization, distillation, efficient architectures) and create transparency about the footprint. The AI Act takes this up: GPAI providers with systemic risk should document energy consumption, and codes of conduct (Art. 95) promote environmental sustainability. A tension between growing model size and climate goals. Increasingly part of ESG reporting and procurement criteria." },
    links: [ { label: "Art. 95 AI Act", url: "https://artificialintelligenceact.eu/article/95/" } ],
    related: ["quantisierung", "distillation", "verhaltenskodex", "neuromorphes-computing"] },

  { id: "dual-use", category: "ethics", risk: null,
    tags: ["#DualUse", "#Missbrauch", "#Sicherheit"],
    de: {
      term: "Dual Use (doppelter Verwendungszweck)",
      short: "Eigenschaft von KI-Technologien, sowohl für nützliche als auch für schädliche Zwecke einsetzbar zu sein.",
      long: "Viele KI-Fähigkeiten sind wertneutral und je nach Anwendung nützlich oder gefährlich: Ein Modell zur Wirkstoffsuche könnte auch Giftstoffe entwerfen; Bildgeneratoren erschaffen Kunst oder Deepfakes; Sprachmodelle helfen beim Programmieren oder beim Schreiben von Schadcode. Der Dual-Use-Charakter erschwert Regulierung, weil ein Verbot der Fähigkeit auch die guten Anwendungen träfe. Der AI Act setzt daher am Kontext und am Risiko an. Berührt Exportkontrollrecht, die Bewertung systemischer Risiken von GPAI (Art. 55) und die Sicherheitsforschung. Kernthema der KI-Sicherheitsdebatte." },
    en: {
      term: "Dual Use",
      short: "The property of AI technologies of being usable for both beneficial and harmful purposes.",
      long: "Many AI capabilities are value-neutral and, depending on application, beneficial or dangerous: a drug-discovery model could also design toxins; image generators create art or deepfakes; language models help with programming or with writing malware. The dual-use character complicates regulation, because banning the capability would also hit the good applications. The AI Act therefore focuses on context and risk. Touches export control law, the assessment of systemic risks of GPAI (Art. 55) and safety research. A core topic of the AI safety debate." },
    links: [ { label: "Art. 55 AI Act", url: "https://artificialintelligenceact.eu/article/55/" } ],
    related: ["systemisches-risiko", "modellbewertung", "generative-ai"] },

  { id: "wertekonflikte-ki", category: "ethics", risk: null,
    tags: ["#Werte", "#Ethik", "#Abwaegung"],
    de: {
      term: "Wertekonflikte in der KI",
      short: "Situationen, in denen legitime Ziele wie Genauigkeit, Fairness, Datenschutz und Transparenz miteinander in Spannung geraten.",
      long: "Verantwortungsvolle KI muss mehrere Werte zugleich bedienen, die sich nicht immer vereinbaren lassen: Mehr Datenschutz (etwa durch weniger Daten) kann die Genauigkeit senken; höhere Transparenz kann Geschäftsgeheimnisse oder Sicherheit gefährden; verschiedene Fairness-Definitionen widersprechen sich. Solche Zielkonflikte lassen sich nicht rein technisch auflösen, sondern erfordern begründete Abwägungen im konkreten Kontext – idealerweise transparent dokumentiert. Der AI Act, die DSGVO und ethische Rahmenwerke geben Leitplanken, nehmen die Abwägung aber nicht ab. Ein Kernthema angewandter KI-Ethik." },
    en: {
      term: "Value Conflicts in AI",
      short: "Situations where legitimate goals such as accuracy, fairness, privacy and transparency come into tension.",
      long: "Responsible AI must serve several values at once that cannot always be reconciled: more privacy (e.g. through less data) can lower accuracy; greater transparency can jeopardise trade secrets or security; different fairness definitions contradict each other. Such trade-offs cannot be resolved purely technically but require reasoned weighing in the concrete context — ideally transparently documented. The AI Act, the GDPR and ethical frameworks provide guardrails but do not take the weighing off one's hands. A core topic of applied AI ethics." },
    links: [ { label: "Ethics Guidelines for Trustworthy AI", url: "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai" } ],
    related: ["explainability-vs-performance", "trustworthy-ai", "fairness-metriken"] },

  { id: "automation-bias", category: "ethics", risk: null,
    tags: ["#AutomationBias", "#MenschlicheAufsicht", "#Psychologie"],
    de: {
      term: "Automatisierungsbias (Automation Bias)",
      short: "Die menschliche Neigung, den Empfehlungen automatisierter Systeme zu sehr zu vertrauen und eigene Urteile zurückzustellen.",
      long: "Automation Bias führt dazu, dass Menschen Vorschläge einer KI unkritisch übernehmen (Commission-Fehler) oder eigene Beobachtungen übergehen, weil das System schweigt (Omission-Fehler). Das untergräbt gerade die menschliche Aufsicht (Art. 14), die als Schutzmechanismus für Hochrisiko-KI gedacht ist: Formal ist ein Mensch eingebunden, faktisch folgt er dem System blind. Gegenmaßnahmen: Schulung, gute Erklärbarkeit, bewusste Reibung im Ablauf, Anzeige von Unsicherheit. Ein wichtiger psychologischer Grund, warum wirksame Aufsicht mehr erfordert als das bloße Vorhandensein eines Menschen." },
    en: {
      term: "Automation Bias",
      short: "The human tendency to over-trust the recommendations of automated systems and defer one's own judgement.",
      long: "Automation bias leads people to adopt AI suggestions uncritically (commission errors) or to override their own observations because the system is silent (omission errors). This undermines precisely the human oversight (Art. 14) intended as a safeguard for high-risk AI: formally a human is involved, but in fact follows the system blindly. Countermeasures: training, good explainability, deliberate friction in the workflow, display of uncertainty. An important psychological reason why effective oversight requires more than the mere presence of a human." },
    links: [ { label: "Art. 14 AI Act", url: "https://artificialintelligenceact.eu/article/14/" } ],
    related: ["human-in-the-loop", "menschliche-aufsicht", "klinische-entscheidungsunterstuetzung"] },

  { id: "accountability", category: "governance", risk: null,
    tags: ["#Accountability", "#Rechenschaft", "#Verantwortung"],
    de: {
      term: "Rechenschaftspflicht (Accountability)",
      short: "Grundsatz, dass eine verantwortliche Stelle die Einhaltung der Regeln nicht nur gewährleisten, sondern auch nachweisen können muss.",
      long: "Accountability verlangt, dass Organisationen Verantwortung für ihre KI-Systeme übernehmen und dies belegen können – durch Dokumentation, Prozesse und klare Zuständigkeiten. Das Prinzip ist aus der DSGVO (Art. 5 Abs. 2) bekannt und durchzieht auch den AI Act: technische Dokumentation, Aufzeichnung, Konformitätsbewertung und Konformitätserklärung dienen dem Nachweis. Kernfrage bei komplexen KI-Wertschöpfungsketten: Wer haftet wofür (Anbieter, Betreiber, nachgelagerte Anbieter)? Eng verknüpft mit Haftungsrecht, KI-Governance und dem Recht Betroffener auf Erklärung und Beschwerde." },
    en: {
      term: "Accountability",
      short: "The principle that a responsible entity must not only ensure compliance with the rules but also be able to demonstrate it.",
      long: "Accountability requires organisations to take responsibility for their AI systems and to be able to evidence it — through documentation, processes and clear responsibilities. The principle is familiar from the GDPR (Art. 5(2)) and also runs through the AI Act: technical documentation, record-keeping, conformity assessment and the declaration of conformity serve as evidence. A key question in complex AI value chains: who is liable for what (provider, deployer, downstream provider)? Closely linked to liability law, AI governance and the rights of affected persons to explanation and complaint." },
    links: [ { label: "Art. 16 AI Act", url: "https://artificialintelligenceact.eu/article/16/" } ],
    related: ["audit-trail", "ki-haftung", "ai-governance"] },

  { id: "explainability-vs-performance", category: "ethics", risk: null,
    tags: ["#Erklaerbarkeit", "#BlackBox", "#Tradeoff"],
    de: {
      term: "Erklärbarkeit vs. Leistung (Black-Box-Problem)",
      short: "Spannungsverhältnis zwischen der Nachvollziehbarkeit einfacher Modelle und der oft höheren Genauigkeit komplexer, undurchschaubarer Modelle.",
      long: "Einfache Modelle (etwa Entscheidungsbäume, lineare Modelle) sind gut nachvollziehbar, aber oft weniger leistungsfähig. Komplexe Modelle wie tiefe neuronale Netze erreichen häufig höhere Genauigkeit, sind aber intransparente \"Black Boxes\". In grundrechtssensiblen Anwendungen (Kredit, Justiz, Medizin) verlangen Aufsicht und Betroffene jedoch Nachvollziehbarkeit. Lösungsansätze: von vornherein interpretierbare Modelle wählen oder nachträgliche Erklärungsmethoden (SHAP, LIME) einsetzen. Der AI Act adressiert dies über menschliche Aufsicht (Art. 14) und das Erklärungsrecht (Art. 86), ohne bestimmte Modelltypen vorzuschreiben." },
    en: {
      term: "Explainability vs. Performance (Black-Box Problem)",
      short: "The tension between the interpretability of simple models and the often higher accuracy of complex, opaque models.",
      long: "Simple models (e.g. decision trees, linear models) are easy to interpret but often less powerful. Complex models such as deep neural networks frequently achieve higher accuracy but are opaque \"black boxes\". In fundamental-rights-sensitive applications (credit, justice, medicine), however, regulators and affected persons demand traceability. Approaches: choose inherently interpretable models or apply post-hoc explanation methods (SHAP, LIME). The AI Act addresses this via human oversight (Art. 14) and the right to explanation (Art. 86) without mandating particular model types." },
    links: [ { label: "Art. 86 AI Act", url: "https://artificialintelligenceact.eu/article/86/" } ],
    related: ["xai", "shap-lime", "wertekonflikte-ki", "explainable-boosting"] },

  { id: "ki-kompetenz-organisation", category: "governance", risk: null,
    tags: ["#AILiteracy", "#Art4", "#Schulung"],
    de: {
      term: "KI-Kompetenz in der Organisation",
      short: "Verpflichtung von Anbietern und Betreibern, ein ausreichendes Maß an KI-Kompetenz ihres Personals sicherzustellen (Art. 4).",
      long: "Seit dem 2. Februar 2025 verlangt Art. 4 AI Act, dass Anbieter und Betreiber Maßnahmen ergreifen, damit ihr mit KI befasstes Personal über ausreichende KI-Kompetenz verfügt – gemessen an Vorwissen, Kontext und den betroffenen Personen. Ziel: fundierte, verantwortungsvolle Nutzung und wirksame menschliche Aufsicht. Praktisch umgesetzt durch Schulungen, Richtlinien und Rollen. Die Pflicht gilt unabhängig von der Risikoklasse und ist eine der ersten anwendbaren Anforderungen des AI Act. Grundlage dafür, dass menschliche Aufsicht (Art. 14) und Governance überhaupt wirksam sein können." },
    en: {
      term: "AI Literacy in the Organisation",
      short: "The obligation of providers and deployers to ensure a sufficient level of AI literacy among their staff (Art. 4).",
      long: "Since 2 February 2025, Art. 4 AI Act requires providers and deployers to take measures ensuring that their AI-involved staff have sufficient AI literacy — measured against prior knowledge, context and the persons affected. Aim: informed, responsible use and effective human oversight. Practically implemented through training, policies and roles. The duty applies regardless of risk class and is one of the first applicable AI Act requirements. A foundation for human oversight (Art. 14) and governance to be effective at all." },
    links: [ { label: "Art. 4 AI Act", url: "https://artificialintelligenceact.eu/article/4/" } ],
    related: ["ki-kompetenz", "ai-governance", "menschliche-aufsicht"] },

  { id: "red-teaming-vs-blue", category: "security", risk: null,
    tags: ["#RedTeam", "#BlueTeam", "#Sicherheit"],
    de: {
      term: "Red Teaming und Blue Teaming",
      short: "Gegensätzliche Sicherheitsrollen: Das Red Team greift ein KI-System an, das Blue Team verteidigt es.",
      long: "Beim Red Teaming versuchen Fachleute, ein System gezielt zu überlisten, um Schwachstellen aufzudecken – etwa durch Jailbreaks, Prompt Injection oder das Provozieren schädlicher Ausgaben. Das Blue Team entwickelt und betreibt die Verteidigung: Guardrails, Monitoring, Härtung. Das Zusammenspiel (teils als \"Purple Teaming\" bezeichnet) verbessert die Sicherheit fortlaufend. Für GPAI mit systemischem Risiko schreibt der AI Act adversariale Tests vor (Art. 55). Etablierte Praxis aus der klassischen IT-Sicherheit, angepasst an die besonderen Angriffsflächen von KI-Systemen." },
    en: {
      term: "Red Teaming and Blue Teaming",
      short: "Opposing security roles: the red team attacks an AI system, the blue team defends it.",
      long: "In red teaming, experts deliberately try to outwit a system to uncover weaknesses — e.g. through jailbreaks, prompt injection or provoking harmful outputs. The blue team develops and operates the defence: guardrails, monitoring, hardening. Their interplay (sometimes called \"purple teaming\") continuously improves security. For GPAI with systemic risk, the AI Act mandates adversarial testing (Art. 55). Established practice from classic IT security, adapted to the particular attack surfaces of AI systems." },
    links: [ { label: "Art. 55 AI Act", url: "https://artificialintelligenceact.eu/article/55/" } ],
    related: ["ai-red-teaming", "jailbreak", "guardrails", "frontier-ai-commitments"] },

  { id: "sandbox-datenschutz", category: "governance", risk: null,
    tags: ["#Reallabor", "#Datenschutz", "#Art59"],
    de: {
      term: "Datenverarbeitung im Reallabor",
      short: "Sonderregel, die unter engen Voraussetzungen die Weiterverarbeitung rechtmäßig erhobener Daten zu KI-Entwicklung im öffentlichen Interesse erlaubt (Art. 59).",
      long: "Innerhalb eines KI-Reallabors (Art. 57) erlaubt Art. 59 AI Act unter strengen Bedingungen, rechtmäßig für andere Zwecke erhobene personenbezogene Daten für die Entwicklung bestimmter KI-Systeme im öffentlichen Interesse weiterzuverarbeiten – etwa für Gesundheit, Umwelt oder öffentliche Sicherheit. Voraussetzungen: wirksame Überwachung, Schutzmaßnahmen, Zweckbindung, Löschung nach Abschluss. Die Regelung schafft einen kontrollierten Freiraum für Innovation, ohne die DSGVO auszuhebeln. Zusammenspiel von Datenschutzbehörden und der für das Reallabor zuständigen Stelle. Instrument, um Innovation und Grundrechtsschutz zu verbinden." },
    en: {
      term: "Data Processing in the Regulatory Sandbox",
      short: "A special rule permitting, under strict conditions, the further processing of lawfully collected data for public-interest AI development (Art. 59).",
      long: "Within an AI regulatory sandbox (Art. 57), Art. 59 AI Act permits, under strict conditions, the further processing of personal data lawfully collected for other purposes for developing certain public-interest AI systems — e.g. for health, environment or public security. Conditions: effective monitoring, safeguards, purpose limitation, deletion after completion. The rule creates a controlled space for innovation without overriding the GDPR. Interplay of data protection authorities and the body responsible for the sandbox. An instrument to combine innovation and fundamental-rights protection." },
    links: [ { label: "Art. 59 AI Act", url: "https://artificialintelligenceact.eu/article/59/" } ],
    related: ["reallabor", "dsgvo-schnittstelle", "wissenschaftsausnahme"] },

  { id: "ki-haftung", category: "governance", risk: null,
    tags: ["#Haftung", "#Liability", "#Schaden"],
    de: {
      term: "KI-Haftung",
      short: "Frage, wer für Schäden einsteht, die durch ein KI-System verursacht werden – ein rechtlich noch in Entwicklung befindliches Feld.",
      long: "Der AI Act ist öffentliches Aufsichtsrecht und regelt selbst keine zivilrechtlichen Schadenersatzansprüche. Diese ergeben sich aus anderen Regelwerken: der neuen Produkthaftungsrichtlinie (die Software und KI ausdrücklich erfasst und Beweiserleichterungen bringt) sowie dem allgemeinen Haftungsrecht. Eine eigene KI-Haftungsrichtlinie war geplant, wurde 2025 jedoch von der Kommission zurückgezogen. Zentrale Schwierigkeiten: Nachweis von Fehler und Kausalität bei komplexen, lernenden Systemen; Verteilung der Verantwortung entlang der Wertschöpfungskette. Für Betreiber und Anbieter ein wichtiges Risiko, das AI-Act-Compliance zwar mindert, aber nicht beseitigt." },
    en: {
      term: "AI Liability",
      short: "The question of who is answerable for damage caused by an AI system — a legally still-developing field.",
      long: "The AI Act is public supervisory law and does not itself govern civil damages claims. These arise from other frameworks: the new Product Liability Directive (which expressly covers software and AI and brings evidentiary reliefs) and general liability law. A dedicated AI Liability Directive was planned but withdrawn by the Commission in 2025. Key difficulties: proving fault and causation for complex, learning systems; allocating responsibility along the value chain. For deployers and providers an important risk that AI Act compliance mitigates but does not eliminate." },
    links: [ { label: "PLD (RL 2024/2853)", url: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj" } ],
    related: ["produkthaftung-schnittstelle", "accountability", "betroffene-person"] },

  { id: "stemming-lemmatisierung", category: "nlp", risk: null,
    tags: ["#Stemming", "#Lemmatisierung", "#Vorverarbeitung"],
    de: {
      term: "Stemming und Lemmatisierung",
      short: "Verfahren, die Wörter auf eine Grundform zurückführen, um Varianten desselben Begriffs zusammenzufassen.",
      long: "Beim Stemming werden Wörter grob durch Abschneiden von Endungen auf einen Wortstamm reduziert (\"laufen\", \"läuft\" → \"lauf\") – schnell, aber ungenau. Die Lemmatisierung führt Wörter linguistisch fundiert auf ihre Grundform (das Lemma) zurück (\"besser\" → \"gut\"), unter Berücksichtigung von Wortart und Kontext. Beide sind klassische Schritte der Textvorverarbeitung, die die Datenmenge reduzieren und die Erkennung inhaltlich gleicher Begriffe verbessern. In modernen, auf Tokenisierung und Embeddings beruhenden Sprachmodellen spielen sie eine kleinere, aber weiterhin nützliche Rolle bei Suche und klassischer Textanalyse." },
    en: {
      term: "Stemming and Lemmatisation",
      short: "Methods that reduce words to a base form in order to group variants of the same term.",
      long: "In stemming, words are crudely reduced to a stem by stripping endings (\"running\", \"runs\" → \"run\") — fast but imprecise. Lemmatisation reduces words linguistically to their base form (the lemma) (\"better\" → \"good\"), taking part of speech and context into account. Both are classic text-preprocessing steps that reduce data volume and improve recognition of semantically equal terms. In modern language models based on tokenisation and embeddings they play a smaller but still useful role in search and classical text analysis." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["tokenization", "pos-tagging", "nlp"] },

  { id: "pos-tagging", category: "nlp", risk: null,
    tags: ["#POSTagging", "#Grammatik", "#NLP"],
    de: {
      term: "Wortarten-Erkennung (POS-Tagging)",
      short: "Automatische Zuordnung der grammatikalischen Wortart (Substantiv, Verb, Adjektiv …) zu jedem Wort eines Satzes.",
      long: "Part-of-Speech-Tagging (POS-Tagging) bestimmt für jedes Token seine Wortart im Satzkontext – wichtig, weil viele Wörter je nach Kontext unterschiedliche Wortarten annehmen (\"das Lernen\" vs. \"wir lernen\"). Es ist ein grundlegender Baustein der Sprachanalyse und Vorstufe für Aufgaben wie Named Entity Recognition, Parsing oder Informationsextraktion. Klassisch mit statistischen Modellen gelöst, heute meist mit neuronalen Netzen. Grundlagenwissen zum Verständnis, wie Maschinen Sprache strukturell erfassen." },
    en: {
      term: "Part-of-Speech Tagging",
      short: "Automatic assignment of the grammatical part of speech (noun, verb, adjective …) to each word in a sentence.",
      long: "Part-of-speech tagging (POS tagging) determines for each token its part of speech in the sentence context — important because many words take different parts of speech depending on context. It is a fundamental building block of language analysis and a precursor to tasks such as named entity recognition, parsing or information extraction. Classically solved with statistical models, today mostly with neural networks. Foundational knowledge for understanding how machines structurally grasp language." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["named-entity-recognition", "stemming-lemmatisierung", "nlp"] },

  { id: "named-entity-recognition", category: "nlp", risk: null,
    tags: ["#NER", "#Informationsextraktion", "#NLP"],
    de: {
      term: "Eigennamenerkennung (NER)",
      short: "Automatisches Erkennen und Klassifizieren von Eigennamen in Texten – etwa Personen, Orte, Organisationen, Daten.",
      long: "Named Entity Recognition (NER) findet in unstrukturiertem Text benannte Entitäten und ordnet sie Kategorien zu (Person, Ort, Firma, Datum, Betrag). Grundlage vieler Anwendungen: Informationsextraktion, Dokumentenanalyse, Suche, Anonymisierung (Erkennen personenbezogener Angaben). Datenschutzrelevant, weil NER auch zur automatischen Schwärzung sensibler Daten dient – oder umgekehrt zur unerwünschten Profilbildung. Klassisch regel- oder statistikbasiert, heute meist mit vortrainierten Sprachmodellen. Wichtiger Baustein, um aus Text strukturierte Information zu gewinnen." },
    en: {
      term: "Named Entity Recognition (NER)",
      short: "Automatically detecting and classifying proper names in texts — e.g. persons, places, organisations, dates.",
      long: "Named entity recognition (NER) finds named entities in unstructured text and assigns them to categories (person, place, company, date, amount). The basis of many applications: information extraction, document analysis, search, anonymisation (detecting personal data). Privacy-relevant, because NER also serves to automatically redact sensitive data — or conversely for unwanted profiling. Classically rule- or statistics-based, today mostly with pretrained language models. An important building block for extracting structured information from text." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["pos-tagging", "textklassifikation", "anonymisierung", "ocr", "knowledge-graph"] },

  { id: "word-embeddings", category: "nlp", risk: null,
    tags: ["#Word2Vec", "#GloVe", "#Vektorraum"],
    de: {
      term: "Wort-Einbettungen (Word2Vec, GloVe)",
      short: "Verfahren, die Wörter als Zahlenvektoren so darstellen, dass ähnliche Bedeutungen räumlich nah beieinander liegen.",
      long: "Word2Vec (2013) und GloVe waren wegweisende Methoden, um Wörter in dichte Vektoren zu überführen, die semantische Beziehungen abbilden – berühmt das Beispiel \"König − Mann + Frau ≈ Königin\". Solche Einbettungen lernen Bedeutung aus dem Kontext, in dem Wörter vorkommen. Sie bilden die begriffliche Grundlage moderner Embeddings, sind aber statisch (ein Wort hat immer denselben Vektor). Kontextuelle Modelle wie BERT lösten sie darin ab. Wichtig für das Verständnis, wie Bedeutung überhaupt maschinell repräsentiert wird. Können erlernte gesellschaftliche Verzerrungen (Bias) enthalten." },
    en: {
      term: "Word Embeddings (Word2Vec, GloVe)",
      short: "Methods that represent words as numeric vectors so that similar meanings lie spatially close together.",
      long: "Word2Vec (2013) and GloVe were pioneering methods for converting words into dense vectors that capture semantic relationships — famously \"king − man + woman ≈ queen\". Such embeddings learn meaning from the context in which words occur. They form the conceptual basis of modern embeddings but are static (a word always has the same vector). Contextual models such as BERT superseded them in this respect. Important for understanding how meaning is represented computationally at all. Can contain learned societal biases." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["embedding", "bert"] },

  { id: "bert", category: "nlp", risk: null,
    tags: ["#BERT", "#Transformer", "#Kontextuell"],
    de: {
      term: "BERT (kontextuelles Sprachmodell)",
      short: "Wegweisendes Transformer-Modell (2018), das Wörter im vollen Satzkontext von beiden Seiten versteht.",
      long: "BERT (Bidirectional Encoder Representations from Transformers) verarbeitet einen Satz in beide Richtungen zugleich und erzeugt so kontextabhängige Wortrepräsentationen – dasselbe Wort erhält je nach Kontext unterschiedliche Vektoren. Trainiert wird es, indem maskierte Wörter im Text vorhergesagt werden. BERT prägte eine ganze Generation von NLP-Systemen und eignet sich besonders für Verstehensaufgaben (Klassifikation, NER, Frage-Antwort). Im Unterschied zu generativen Modellen (wie der GPT-Familie) ist BERT ein Encoder-Modell, das Text primär analysiert statt erzeugt. Meilenstein auf dem Weg zu heutigen Sprachmodellen." },
    en: {
      term: "BERT (Contextual Language Model)",
      short: "A pioneering transformer model (2018) that understands words in full sentence context from both directions.",
      long: "BERT (Bidirectional Encoder Representations from Transformers) processes a sentence in both directions at once, producing context-dependent word representations — the same word gets different vectors depending on context. It is trained by predicting masked words in the text. BERT shaped a whole generation of NLP systems and is especially suited to understanding tasks (classification, NER, question answering). Unlike generative models (such as the GPT family), BERT is an encoder model that primarily analyses text rather than generating it. A milestone on the way to today's language models." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["transformer", "word-embeddings", "nlp"] },

  { id: "sprachmodell-ngram", category: "nlp", risk: null,
    tags: ["#NGram", "#Statistik", "#Sprachmodell"],
    de: {
      term: "Statistisches Sprachmodell (n-Gramm)",
      short: "Klassisches Modell, das die Wahrscheinlichkeit des nächsten Wortes aus den unmittelbar vorangehenden Wörtern schätzt.",
      long: "Ein n-Gramm-Modell betrachtet Folgen von n aufeinanderfolgenden Wörtern und schätzt, wie wahrscheinlich ein Wort auf die vorangegangenen folgt – etwa auf Basis von Häufigkeiten in einem großen Textkorpus. Diese Modelle waren lange die Grundlage von Rechtschreibkorrektur, Spracherkennung und Übersetzung. Ihre Schwäche: Sie erfassen nur kurze Zusammenhänge und keine tiefere Bedeutung. Neuronale Sprachmodelle und Transformer lösten sie ab. Wichtig als konzeptioneller Ausgangspunkt: Auch moderne Sprachmodelle sagen im Kern das nächste Token vorher – nur ungleich mächtiger." },
    en: {
      term: "Statistical Language Model (n-gram)",
      short: "A classic model that estimates the probability of the next word from the immediately preceding words.",
      long: "An n-gram model considers sequences of n consecutive words and estimates how likely a word is to follow the preceding ones — based on frequencies in a large text corpus. These models were long the basis of spell-checking, speech recognition and translation. Their weakness: they capture only short-range context and no deeper meaning. Neural language models and transformers superseded them. Important as a conceptual starting point: modern language models also, at their core, predict the next token — only far more powerfully." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["nlp", "tokenization", "llm"] },

  { id: "maschinelle-uebersetzung", category: "nlp", risk: null,
    tags: ["#Uebersetzung", "#NMT", "#NLP"],
    de: {
      term: "Maschinelle Übersetzung",
      short: "Automatische Übersetzung von Text oder Sprache zwischen natürlichen Sprachen durch KI.",
      long: "Die maschinelle Übersetzung entwickelte sich von regelbasierten über statistische Ansätze hin zur neuronalen maschinellen Übersetzung (NMT), die ganze Sätze im Kontext überträgt und deutlich flüssigere Ergebnisse liefert. Moderne Systeme beruhen auf der Transformer-Architektur. Anwendungen: Kommunikation, Lokalisierung, Barrierefreiheit, Recht. Grenzen: Fachsprache, Mehrdeutigkeit, kulturelle Nuancen, seltene Sprachen. Im rechtlichen Kontext relevant, wenn übersetzte KI-Ausgaben Grundlage von Entscheidungen werden – dann greifen Genauigkeits- und Transparenzanforderungen. Ein Paradebeispiel für nützliche, alltägliche generative KI." },
    en: {
      term: "Machine Translation",
      short: "Automatic translation of text or speech between natural languages by AI.",
      long: "Machine translation evolved from rule-based through statistical approaches to neural machine translation (NMT), which translates whole sentences in context and yields far more fluent results. Modern systems rest on the transformer architecture. Applications: communication, localisation, accessibility, law. Limits: technical language, ambiguity, cultural nuance, rare languages. Relevant in legal contexts when translated AI outputs become the basis of decisions — then accuracy and transparency requirements apply. A prime example of useful, everyday generative AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["nlp", "transformer", "textzusammenfassung"] },

  { id: "textzusammenfassung", category: "nlp", risk: null,
    tags: ["#Summarization", "#NLP", "#LLM"],
    de: {
      term: "Automatische Textzusammenfassung",
      short: "Verdichtung längerer Texte auf ihre wesentlichen Inhalte durch KI.",
      long: "Man unterscheidet die extraktive Zusammenfassung (wichtige Originalsätze werden ausgewählt) von der abstraktiven Zusammenfassung (der Inhalt wird in neuen, eigenen Worten formuliert – wie es moderne Sprachmodelle tun). Anwendungen: Nachrichten, juristische und medizinische Dokumente, Meetings, Recherche. Risiken: Auslassen wichtiger Details, Verzerrung, Halluzinationen (erfundene Inhalte in abstraktiven Zusammenfassungen). Im professionellen Einsatz ist menschliche Prüfung wichtig, besonders bei rechtlich oder medizinisch relevanten Texten. Eine der meistgenutzten praktischen Fähigkeiten großer Sprachmodelle." },
    en: {
      term: "Automatic Text Summarisation",
      short: "Condensing longer texts to their essential content by AI.",
      long: "A distinction is drawn between extractive summarisation (important original sentences are selected) and abstractive summarisation (the content is expressed in new, own words — as modern language models do). Applications: news, legal and medical documents, meetings, research. Risks: omitting important details, distortion, hallucinations (invented content in abstractive summaries). In professional use, human review is important, especially for legally or medically relevant texts. One of the most used practical capabilities of large language models." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["question-answering", "llm", "halluzination", "maschinelle-uebersetzung"] },

  { id: "question-answering", category: "nlp", risk: null,
    tags: ["#QA", "#RAG", "#NLP"],
    de: {
      term: "Frage-Antwort-Systeme (Question Answering)",
      short: "Systeme, die auf natürlichsprachige Fragen präzise Antworten liefern – aus einem Text, einer Wissensbasis oder dem Modellwissen.",
      long: "Question Answering (QA) reicht von der Beantwortung aus einem gegebenen Textabschnitt (extraktiv) bis zur offenen Beantwortung aus großem Wissen (generativ). Moderne QA-Systeme verbinden Sprachmodelle oft mit einer Wissensquelle über Retrieval-Augmented Generation (RAG), um Aktualität und Belegbarkeit zu erhöhen und Halluzinationen zu reduzieren. Anwendungen: Suche, Kundenservice, Recherche, Fachassistenz. Qualitätskritisch: Verlässlichkeit der Quellen, Umgang mit unbeantwortbaren Fragen, Nachvollziehbarkeit der Antwort. Grundfunktion vieler KI-Assistenten." },
    en: {
      term: "Question Answering",
      short: "Systems that provide precise answers to natural-language questions — from a text, a knowledge base or the model's knowledge.",
      long: "Question answering (QA) ranges from answering from a given passage (extractive) to open answering from broad knowledge (generative). Modern QA systems often combine language models with a knowledge source via retrieval-augmented generation (RAG) to increase currency and verifiability and reduce hallucinations. Applications: search, customer service, research, expert assistance. Quality-critical: reliability of sources, handling unanswerable questions, traceability of the answer. A core function of many AI assistants." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rag", "textzusammenfassung", "chatbot-kundenservice"] },

  { id: "spracherkennung-asr", category: "nlp", risk: null,
    tags: ["#ASR", "#SpeechToText", "#Audio"],
    de: {
      term: "Spracherkennung (ASR / Speech-to-Text)",
      short: "Automatische Umwandlung gesprochener Sprache in geschriebenen Text.",
      long: "Automatic Speech Recognition (ASR) wandelt Audiosignale in Text um – Grundlage von Sprachassistenten, Diktier- und Untertitelungssystemen. Moderne Systeme nutzen tiefe neuronale Netze und arbeiten sprecher- und sprachübergreifend. Herausforderungen: Dialekte, Hintergrundgeräusche, Fachvokabular, faire Leistung über Akzente und Sprechergruppen hinweg (Bias-Risiko). Datenschutzrelevant, da Sprachaufnahmen biometrische und inhaltliche Informationen enthalten. Wichtig für Barrierefreiheit (Untertitel, Vorlesefunktionen). Häufig kombiniert mit nachgelagerter Sprachverarbeitung wie Übersetzung oder Zusammenfassung." },
    en: {
      term: "Speech Recognition (ASR / Speech-to-Text)",
      short: "Automatic conversion of spoken language into written text.",
      long: "Automatic speech recognition (ASR) converts audio signals into text — the basis of voice assistants, dictation and captioning systems. Modern systems use deep neural networks and work across speakers and languages. Challenges: dialects, background noise, technical vocabulary, fair performance across accents and speaker groups (bias risk). Privacy-relevant, as voice recordings contain biometric and content information. Important for accessibility (captions, read-aloud functions). Often combined with downstream language processing such as translation or summarisation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["text-to-speech", "nlp", "multimodalitaet"] },

  { id: "text-to-speech", category: "nlp", risk: "limited",
    tags: ["#TTS", "#Sprachsynthese", "#VoiceCloning"],
    de: {
      term: "Sprachsynthese (Text-to-Speech)",
      short: "Automatische Erzeugung natürlich klingender gesprochener Sprache aus Text.",
      long: "Text-to-Speech (TTS) wandelt geschriebenen Text in Audio um. Moderne neuronale Verfahren erzeugen sehr natürliche Stimmen und können Stimmen sogar klonen (Voice Cloning) – aus wenigen Sekunden Beispielmaterial. Anwendungen: Vorlesefunktionen, Barrierefreiheit, Assistenten, Synchronisation. Risiken: Stimm-Deepfakes für Betrug (etwa der \"Enkeltrick\" mit geklonter Stimme) und Desinformation. Der AI Act verlangt Transparenz für KI-erzeugte Audioinhalte (Art. 50) und Kennzeichnung. Beispiel für eine nützliche Technologie mit erheblichem Missbrauchspotenzial (Dual Use)." },
    en: {
      term: "Speech Synthesis (Text-to-Speech)",
      short: "Automatic generation of natural-sounding spoken language from text.",
      long: "Text-to-speech (TTS) converts written text into audio. Modern neural methods produce very natural voices and can even clone voices (voice cloning) — from a few seconds of sample material. Applications: read-aloud functions, accessibility, assistants, dubbing. Risks: voice deepfakes for fraud (e.g. the \"grandchild scam\" with a cloned voice) and disinformation. The AI Act requires transparency for AI-generated audio content (Art. 50) and labelling. An example of a useful technology with substantial misuse potential (dual use)." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["spracherkennung-asr", "deepfake", "wasserzeichen"] },

  { id: "topic-modeling", category: "nlp", risk: null,
    tags: ["#TopicModeling", "#Unsupervised", "#NLP"],
    de: {
      term: "Themenmodellierung (Topic Modeling)",
      short: "Unüberwachtes Verfahren, das in großen Textsammlungen automatisch wiederkehrende Themen entdeckt.",
      long: "Topic Modeling gruppiert Dokumente und Wörter nach latenten Themen, ohne dass diese vorab bekannt sind – ein klassisches Verfahren ist LDA (Latent Dirichlet Allocation). Anwendungen: Analyse großer Dokumentbestände, Trendbeobachtung, Sichtung von Kundenfeedback, Forschung. Verwandt mit dem Clustering, aber speziell auf Texte zugeschnitten. Moderne Ansätze nutzen Embeddings für feinere Ergebnisse. Nützlich, um unstrukturierte Textmengen überschaubar zu machen, ohne sie vorab zu kategorisieren. Ergebnisse erfordern menschliche Interpretation der gefundenen Themen." },
    en: {
      term: "Topic Modeling",
      short: "An unsupervised method that automatically discovers recurring themes in large text collections.",
      long: "Topic modeling groups documents and words by latent themes without these being known in advance — a classic method is LDA (Latent Dirichlet Allocation). Applications: analysis of large document collections, trend monitoring, review of customer feedback, research. Related to clustering but specifically tailored to texts. Modern approaches use embeddings for finer results. Useful for making unstructured text volumes manageable without pre-categorising them. Results require human interpretation of the themes found." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["clustering", "textklassifikation", "sentiment-analyse"] },

  { id: "textklassifikation", category: "nlp", risk: null,
    tags: ["#Textklassifikation", "#Spam", "#NLP"],
    de: {
      term: "Textklassifikation",
      short: "Automatische Zuordnung von Texten zu vordefinierten Kategorien – etwa Spam-Erkennung oder Themen-Sortierung.",
      long: "Textklassifikation ordnet ganze Texte oder Textabschnitte festen Klassen zu: Spam vs. kein Spam, Beschwerde vs. Lob, Themengebiet, Dringlichkeit. Sie ist eine der häufigsten praktischen NLP-Aufgaben und Grundlage vieler Automatisierungen im Kundenservice, in der Dokumentenverwaltung und in der Moderation. Technisch von klassischen Verfahren (etwa Naive Bayes) bis zu feinabgestimmten Sprachmodellen. Qualitätskritisch: Bias in Trainingsdaten, Umgang mit mehrdeutigen Fällen, Erklärbarkeit. Bei folgenreichen Einstufungen (z. B. im HR- oder Rechtskontext) können AI-Act-Anforderungen greifen." },
    en: {
      term: "Text Classification",
      short: "Automatic assignment of texts to predefined categories — e.g. spam detection or topic sorting.",
      long: "Text classification assigns whole texts or passages to fixed classes: spam vs. not spam, complaint vs. praise, subject area, urgency. It is one of the most common practical NLP tasks and the basis of many automations in customer service, document management and moderation. Technically from classic methods (e.g. Naive Bayes) to fine-tuned language models. Quality-critical: bias in training data, handling ambiguous cases, explainability. For consequential classifications (e.g. in HR or legal contexts), AI Act requirements may apply." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["named-entity-recognition", "sentiment-analyse", "klassifikation-regression", "topic-modeling", "hate-speech-detection"] },

  { id: "vision-language-model", category: "nlp", risk: null,
    tags: ["#VLM", "#Multimodal", "#Bild-Text"],
    de: {
      term: "Vision-Language-Modell (VLM)",
      short: "Multimodales Modell, das Bild und Text gemeinsam verarbeitet – etwa um Bilder zu beschreiben oder Fragen zu Bildern zu beantworten.",
      long: "Vision-Language-Modelle verbinden Bildverständnis und Sprache in einem gemeinsamen Modell. Sie leisten Bildbeschreibung (Image Captioning), visuelle Frage-Antwort (\"Was ist auf dem Foto?\"), Dokumentenanalyse und mehr. Technisch werden Bilder über einen Bild-Encoder in denselben Repräsentationsraum wie Text gebracht und von einem Sprachmodell verarbeitet. VLMs sind eine Schlüsseltechnologie multimodaler KI-Assistenten. Anwendungen: Barrierefreiheit (Bildbeschreibung für Sehbehinderte), Dokumentenverarbeitung, medizinische Bildbefundung. Berühren Transparenz- und Datenschutzfragen, besonders bei Personenbildern." },
    en: {
      term: "Vision-Language Model (VLM)",
      short: "A multimodal model that jointly processes image and text — e.g. to describe images or answer questions about images.",
      long: "Vision-language models combine image understanding and language in a single model. They perform image captioning, visual question answering (\"what is in the photo?\"), document analysis and more. Technically, images are brought via an image encoder into the same representation space as text and processed by a language model. VLMs are a key technology of multimodal AI assistants. Applications: accessibility (image description for the visually impaired), document processing, medical image reading. Touch transparency and privacy questions, especially with images of people." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["multimodalitaet", "image-captioning", "computer-vision", "ocr"] },

  { id: "hate-speech-detection", category: "nlp", risk: null,
    tags: ["#HateSpeech", "#Moderation", "#DSA"],
    de: {
      term: "Hassrede-Erkennung",
      short: "KI-gestützte Erkennung von hetzerischen, beleidigenden oder aufstachelnden Inhalten in Texten.",
      long: "Hassrede-Erkennung ist eine spezialisierte Textklassifikation, die in der Content-Moderation großer Plattformen eingesetzt wird. Sie steht im Spannungsfeld zwischen dem Schutz vor Hetze und der Meinungsfreiheit. Herausforderungen: Kontext, Ironie, sich wandelnde Codes und Slang, sprachliche und kulturelle Unterschiede, Bias gegen bestimmte Gruppen oder Dialekte. Reguliert vor allem über den Digital Services Act (DSA), der Transparenz und Beschwerdewege verlangt. Menschliche Überprüfung strittiger Fälle bleibt wichtig, da Fehlentscheidungen Grundrechte berühren – in beide Richtungen." },
    en: {
      term: "Hate Speech Detection",
      short: "AI-supported detection of inflammatory, offensive or incendiary content in texts.",
      long: "Hate speech detection is a specialised text classification used in the content moderation of large platforms. It sits in the tension between protection against incitement and freedom of expression. Challenges: context, irony, shifting codes and slang, linguistic and cultural differences, bias against certain groups or dialects. Regulated primarily via the Digital Services Act (DSA), which requires transparency and complaint channels. Human review of contested cases remains important, as wrong decisions affect fundamental rights — in both directions." },
    links: [ { label: "DSA (VO 2022/2065)", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" } ],
    related: ["content-moderation", "textklassifikation", "sentiment-analyse"] },

  { id: "bildklassifikation", category: "cv", risk: null,
    tags: ["#Bildklassifikation", "#CNN", "#CV"],
    de: {
      term: "Bildklassifikation",
      short: "Zuordnung eines ganzen Bildes zu einer Kategorie – die grundlegendste Aufgabe der Computer Vision.",
      long: "Bei der Bildklassifikation ordnet ein Modell einem Bild ein Label zu (\"Katze\", \"Auto\", \"Tumor\"). Sie war die Aufgabe, an der tiefe neuronale Netze ab 2012 (ImageNet) ihren Durchbruch feierten, meist mit Convolutional Neural Networks (CNN), zunehmend auch mit Vision Transformern. Grundlage vieler Anwendungen von der Qualitätskontrolle bis zur medizinischen Diagnostik. Qualitätskritisch: Generalisierung auf neue Bedingungen, Bias über Gruppen (etwa bei Hauttönen), Robustheit gegen Störungen und Adversarial Examples. Konzeptioneller Ausgangspunkt für komplexere Aufgaben wie Objekterkennung und Segmentierung." },
    en: {
      term: "Image Classification",
      short: "Assigning a whole image to a category — the most fundamental computer vision task.",
      long: "In image classification, a model assigns a label to an image (\"cat\", \"car\", \"tumour\"). It was the task on which deep neural networks broke through from 2012 (ImageNet), mostly with convolutional neural networks (CNN), increasingly also with vision transformers. The basis of many applications from quality control to medical diagnostics. Quality-critical: generalisation to new conditions, bias across groups (e.g. skin tones), robustness to disturbances and adversarial examples. A conceptual starting point for more complex tasks such as object detection and segmentation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["cnn", "objekterkennung", "vision-transformer"] },

  { id: "objekterkennung", category: "cv", risk: null,
    tags: ["#ObjectDetection", "#YOLO", "#CV"],
    de: {
      term: "Objekterkennung (Object Detection)",
      short: "Erkennen und Lokalisieren mehrerer Objekte in einem Bild samt Angabe ihrer Position (Begrenzungsrahmen).",
      long: "Anders als die Bildklassifikation (ein Label pro Bild) findet die Objekterkennung mehrere Objekte, bestimmt ihre Klasse und markiert ihre Position mit einem Begrenzungsrahmen (Bounding Box). Verbreitete Ansätze: einstufige Detektoren (YOLO – schnell, echtzeitfähig) und zweistufige (R-CNN-Familie – oft genauer). Anwendungen: autonomes Fahren, Videoüberwachung, Robotik, Qualitätskontrolle, medizinische Bildgebung. Sicherheits- und grundrechtssensibel, etwa bei der Personenerkennung im öffentlichen Raum. Kernbaustein praktisch aller anspruchsvollen Bildverarbeitungssysteme." },
    en: {
      term: "Object Detection",
      short: "Detecting and localising multiple objects in an image, including their position (bounding box).",
      long: "Unlike image classification (one label per image), object detection finds multiple objects, determines their class and marks their position with a bounding box. Common approaches: single-stage detectors (YOLO — fast, real-time capable) and two-stage ones (R-CNN family — often more accurate). Applications: autonomous driving, video surveillance, robotics, quality control, medical imaging. Safety- and fundamental-rights sensitive, e.g. in person detection in public spaces. A core building block of virtually all advanced image-processing systems." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["bildklassifikation", "bildsegmentierung", "adas", "gesichtsdetektion", "optical-flow"] },

  { id: "bildsegmentierung", category: "cv", risk: null,
    tags: ["#Segmentierung", "#Semantisch", "#CV"],
    de: {
      term: "Bildsegmentierung",
      short: "Pixelgenaue Einteilung eines Bildes in Bereiche – etwa um Objektgrenzen exakt zu bestimmen.",
      long: "Die Segmentierung klassifiziert jedes einzelne Pixel eines Bildes. Bei der semantischen Segmentierung erhält jedes Pixel eine Klasse (Straße, Auto, Person), ohne einzelne Objekte zu trennen; die Instanzsegmentierung unterscheidet zusätzlich einzelne Objekte derselben Klasse (Auto 1, Auto 2). Sie liefert präzisere Information als ein bloßer Begrenzungsrahmen. Anwendungen: autonomes Fahren (Fahrbahn und Hindernisse), medizinische Bildgebung (Organ- und Tumorgrenzen), Satellitenbildauswertung, Bildbearbeitung. Rechnerisch aufwendiger als Objekterkennung, aber unverzichtbar, wo exakte Grenzen zählen." },
    en: {
      term: "Image Segmentation",
      short: "Pixel-precise division of an image into regions — e.g. to determine object boundaries exactly.",
      long: "Segmentation classifies every individual pixel of an image. In semantic segmentation, each pixel gets a class (road, car, person) without separating individual objects; instance segmentation additionally distinguishes individual objects of the same class (car 1, car 2). It provides more precise information than a mere bounding box. Applications: autonomous driving (roadway and obstacles), medical imaging (organ and tumour boundaries), satellite image analysis, image editing. Computationally more demanding than object detection but indispensable where exact boundaries matter." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["objekterkennung", "medizinische-bildsegmentierung", "computer-vision"] },

  { id: "vision-transformer", category: "cv", risk: null,
    tags: ["#ViT", "#Transformer", "#CV"],
    de: {
      term: "Vision Transformer (ViT)",
      short: "Anwendung der Transformer-Architektur auf Bilder – eine Alternative zu den lange dominierenden Convolutional Neural Networks.",
      long: "Der Vision Transformer (2020) zerlegt ein Bild in kleine Kacheln (Patches), behandelt diese ähnlich wie Wörter in einem Satz und verarbeitet sie mit dem Attention-Mechanismus. Bei ausreichend großen Datenmengen erreicht er die Leistung von CNN oder übertrifft sie und vereinheitlicht die Architektur über Text und Bild hinweg (wichtig für multimodale Modelle). Vorteile: bessere Erfassung globaler Bildzusammenhänge; Nachteile: hoher Datenbedarf. Meilenstein, der zeigte, dass die Transformer-Architektur nicht nur für Sprache, sondern universell einsetzbar ist." },
    en: {
      term: "Vision Transformer (ViT)",
      short: "Applying the transformer architecture to images — an alternative to the long-dominant convolutional neural networks.",
      long: "The Vision Transformer (2020) splits an image into small tiles (patches), treats these similarly to words in a sentence and processes them with the attention mechanism. Given sufficiently large datasets, it matches or exceeds CNN performance and unifies the architecture across text and image (important for multimodal models). Advantages: better capture of global image context; disadvantages: high data requirements. A milestone showing that the transformer architecture is not only for language but universally applicable." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["transformer", "bildklassifikation", "attention"] },

  { id: "datenaugmentation", category: "cv", risk: null,
    tags: ["#DataAugmentation", "#Training", "#Robustheit"],
    de: {
      term: "Datenaugmentation",
      short: "Künstliche Vergrößerung eines Trainingsdatensatzes durch Variationen vorhandener Beispiele – etwa Drehen, Spiegeln, Zuschneiden von Bildern.",
      long: "Bei der Datenaugmentation werden aus vorhandenen Daten neue Trainingsbeispiele erzeugt, indem man sie leicht verändert (Bilder drehen, spiegeln, aufhellen, beschneiden; Texte umformulieren). Ziel: mehr Vielfalt im Training, bessere Generalisierung und geringeres Overfitting – ohne neue Daten sammeln zu müssen. Besonders in der Bildverarbeitung Standard. Auch ein Werkzeug gegen Bias, indem unterrepräsentierte Fälle gezielt ergänzt werden. Verwandt mit synthetischen Daten. Trägt zur Robustheit bei, die der AI Act für Hochrisiko-Systeme verlangt (Art. 15), und schont knappe, teure Trainingsdaten." },
    en: {
      term: "Data Augmentation",
      short: "Artificially enlarging a training dataset through variations of existing examples — e.g. rotating, flipping, cropping images.",
      long: "In data augmentation, new training examples are generated from existing data by slightly altering them (rotating, flipping, brightening, cropping images; rephrasing texts). Aim: more diversity in training, better generalisation and less overfitting — without collecting new data. A standard especially in image processing. Also a tool against bias by deliberately supplementing under-represented cases. Related to synthetic data. Contributes to the robustness the AI Act requires for high-risk systems (Art. 15) and conserves scarce, expensive training data." },
    links: [ { label: "Art. 15 AI Act", url: "https://artificialintelligenceact.eu/article/15/" } ],
    related: ["synthetische-daten", "regularisierung", "overfitting"] },

  { id: "ocr", category: "cv", risk: null,
    tags: ["#OCR", "#Texterkennung", "#Dokumente"],
    de: {
      term: "Texterkennung (OCR)",
      short: "Automatische Umwandlung von Text in Bildern oder Scans in maschinenlesbaren, durchsuchbaren Text.",
      long: "Optical Character Recognition (OCR) erkennt gedruckten oder handgeschriebenen Text in Bildern, Scans und Fotos und wandelt ihn in bearbeitbaren Text um. Grundlage der Digitalisierung von Dokumenten, der Automatisierung von Rechnungs- und Formularverarbeitung und der Barrierefreiheit. Moderne OCR nutzt tiefe neuronale Netze und bewältigt auch schwierige Layouts, Handschrift und mehrere Sprachen. Häufig Vorstufe weiterer Verarbeitung (etwa NER oder Klassifikation). Qualitätskritisch bei schlechter Bildqualität, ungewöhnlichen Schriften und in rechtlich relevanten Kontexten, wo Erkennungsfehler Folgen haben." },
    en: {
      term: "Optical Character Recognition (OCR)",
      short: "Automatic conversion of text in images or scans into machine-readable, searchable text.",
      long: "Optical character recognition (OCR) detects printed or handwritten text in images, scans and photos and converts it into editable text. The basis of document digitisation, automation of invoice and form processing, and accessibility. Modern OCR uses deep neural networks and handles difficult layouts, handwriting and multiple languages. Often a precursor to further processing (e.g. NER or classification). Quality-critical with poor image quality, unusual fonts and in legally relevant contexts where recognition errors have consequences." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["computer-vision", "named-entity-recognition", "vision-language-model"] },

  { id: "pose-estimation", category: "cv", risk: null,
    tags: ["#PoseEstimation", "#Koerper", "#CV"],
    de: {
      term: "Körperhaltungserkennung (Pose Estimation)",
      short: "Erkennen der Position und Haltung von Körpern anhand von Gelenkpunkten in Bildern oder Videos.",
      long: "Pose Estimation bestimmt die Lage von Körperschlüsselpunkten (Gelenke, Gesichtszüge) und rekonstruiert so Haltung und Bewegung. Anwendungen: Sportanalyse, Physiotherapie, Mensch-Maschine-Interaktion, Gestensteuerung, Animation, Sturzerkennung in der Pflege. Abzugrenzen von der biometrischen Identifizierung: Pose Estimation erkennt Haltung, nicht zwingend Identität – kann aber in Kombination mit anderen Verfahren zur Überwachung beitragen. Datenschutz- und grundrechtssensibel bei Einsatz zur Verhaltensbeobachtung, etwa am Arbeitsplatz. Technisch eng verwandt mit Objekterkennung und Segmentierung." },
    en: {
      term: "Pose Estimation",
      short: "Detecting the position and posture of bodies via key joint points in images or videos.",
      long: "Pose estimation determines the location of body key points (joints, facial features) and thereby reconstructs posture and movement. Applications: sports analysis, physiotherapy, human-machine interaction, gesture control, animation, fall detection in care. To be distinguished from biometric identification: pose estimation detects posture, not necessarily identity — but can contribute to surveillance in combination with other methods. Privacy- and fundamental-rights sensitive when used for behaviour observation, e.g. in the workplace. Technically closely related to object detection and segmentation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["keypoint-detection", "gestenerkennung", "computer-vision"] },

  { id: "tiefenschaetzung", category: "cv", risk: null,
    tags: ["#DepthEstimation", "#3D", "#CV"],
    de: {
      term: "Tiefenschätzung und 3D-Vision",
      short: "Rekonstruktion räumlicher Tiefe aus Bildern – wie weit Objekte entfernt sind – für ein dreidimensionales Szenenverständnis.",
      long: "Tiefenschätzung ermittelt für jeden Bildpunkt die Entfernung zur Kamera, entweder aus zwei Kameras (Stereo) oder aus einem einzelnen Bild mittels gelernter Modelle (monokular). Zusammen mit weiteren Verfahren ermöglicht sie 3D-Szenenverständnis. Anwendungen: autonomes Fahren (Abstand zu Hindernissen), Robotik (Greifen), Augmented Reality, 3D-Kartierung. Sicherheitskritisch, wenn Fehleinschätzungen der Entfernung zu Kollisionen führen. Oft kombiniert mit Sensordaten (Lidar, Radar) zur Absicherung. Grundlage dafür, dass Maschinen die räumliche Welt erfassen und in ihr handeln können." },
    en: {
      term: "Depth Estimation and 3D Vision",
      short: "Reconstructing spatial depth from images — how far away objects are — for three-dimensional scene understanding.",
      long: "Depth estimation determines for each image point the distance to the camera, either from two cameras (stereo) or from a single image via learned models (monocular). Together with further methods it enables 3D scene understanding. Applications: autonomous driving (distance to obstacles), robotics (grasping), augmented reality, 3D mapping. Safety-critical when misjudged distances lead to collisions. Often combined with sensor data (lidar, radar) for safeguarding. The basis for machines to grasp the spatial world and act within it." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["autonomes-fahren", "computer-vision", "keypoint-detection"] },

  { id: "gesichtsdetektion", category: "cv", risk: null,
    tags: ["#FaceDetection", "#Abgrenzung", "#CV"],
    de: {
      term: "Gesichtsdetektion (vs. Gesichtserkennung)",
      short: "Das bloße Auffinden von Gesichtern in einem Bild – zu unterscheiden von der Gesichts-Identifizierung.",
      long: "Die Gesichtsdetektion stellt nur fest, dass und wo sich ein Gesicht im Bild befindet, ohne die Identität zu bestimmen – etwa für den Autofokus einer Kamera oder das Zählen von Personen. Davon streng zu trennen ist die Gesichtserkennung/-identifizierung, die ein Gesicht einer konkreten Person zuordnet und biometrische Daten verarbeitet. Diese Unterscheidung ist rechtlich zentral: Reine Detektion ist meist unkritisch, während biometrische Identifizierung im öffentlichen Raum stark reguliert oder verboten ist (Art. 5, Anhang III). Ein häufig verwechseltes Begriffspaar mit sehr unterschiedlichen Rechtsfolgen." },
    en: {
      term: "Face Detection (vs. Face Recognition)",
      short: "The mere locating of faces in an image — to be distinguished from face identification.",
      long: "Face detection only establishes that and where a face is in the image, without determining identity — e.g. for a camera's autofocus or counting people. Strictly to be separated from face recognition/identification, which links a face to a specific person and processes biometric data. This distinction is legally central: mere detection is usually uncritical, while biometric identification in public spaces is heavily regulated or prohibited (Art. 5, Annex III). A frequently confused pair of terms with very different legal consequences." },
    links: [ { label: "Art. 5 AI Act", url: "https://artificialintelligenceact.eu/article/5/" } ],
    related: ["gesichtserkennung", "biometrische-identifizierung", "objekterkennung"] },

  { id: "anomalieerkennung", category: "ml", risk: null,
    tags: ["#AnomalyDetection", "#Ausreisser", "#Ueberwachung"],
    de: {
      term: "Anomalieerkennung",
      short: "Automatisches Aufspüren ungewöhnlicher Muster, die vom Normalzustand abweichen – etwa Fehler, Betrug oder Störungen.",
      long: "Anomalieerkennung identifiziert seltene, auffällige Datenpunkte, die sich vom erwarteten Muster unterscheiden. Da Anomalien selten und vielfältig sind, wird oft unüberwacht gelernt, was \"normal\" ist, um Abweichungen zu markieren. Anwendungen: Betrugs- und Geldwäscheerkennung, Netzwerksicherheit (Intrusion Detection), industrielle Fehlererkennung und vorausschauende Wartung, medizinische Auffälligkeiten. Herausforderungen: Balance zwischen Fehlalarmen und übersehenen Fällen, sich änderndes Normalverhalten (Drift). Ein Querschnittsverfahren, das viele der sektorspezifischen Anwendungen technisch unterlegt." },
    en: {
      term: "Anomaly Detection",
      short: "Automatically spotting unusual patterns that deviate from the normal state — e.g. faults, fraud or disruptions.",
      long: "Anomaly detection identifies rare, conspicuous data points that differ from the expected pattern. As anomalies are rare and varied, what is \"normal\" is often learned unsupervised in order to flag deviations. Applications: fraud and money-laundering detection, network security (intrusion detection), industrial fault detection and predictive maintenance, medical abnormalities. Challenges: balancing false alarms and missed cases, changing normal behaviour (drift). A cross-cutting method that technically underpins many of the sector-specific applications." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["betrugserkennung", "predictive-maintenance", "unueberwacht", "autoencoder"] },

  { id: "image-captioning", category: "cv", risk: null,
    tags: ["#ImageCaptioning", "#Barrierefreiheit", "#VLM"],
    de: {
      term: "Bildbeschreibung (Image Captioning)",
      short: "Automatisches Erzeugen einer textlichen Beschreibung des Inhalts eines Bildes.",
      long: "Image Captioning verbindet Bildverständnis und Sprachgenerierung: Das System erkennt, was auf einem Bild zu sehen ist, und formuliert dazu einen beschreibenden Satz. Technisch beruht es heute meist auf Vision-Language-Modellen. Wichtigste Anwendung: Barrierefreiheit – Bildbeschreibungen (Alternativtexte) machen visuelle Inhalte für blinde und sehbehinderte Menschen zugänglich und unterstützen so die Anforderungen des European Accessibility Act. Weitere Nutzung: Bildsuche, Katalogisierung, Content-Moderation. Grenzen: Fehlbeschreibungen, fehlender Kontext, mögliche Verzerrungen. Beispiel für gesellschaftlich wertvolle multimodale KI." },
    en: {
      term: "Image Captioning",
      short: "Automatically generating a textual description of an image's content.",
      long: "Image captioning combines image understanding and language generation: the system recognises what is in an image and formulates a descriptive sentence about it. Technically it now usually rests on vision-language models. The most important application: accessibility — image descriptions (alt text) make visual content accessible to blind and visually impaired people and thus support the requirements of the European Accessibility Act. Further uses: image search, cataloguing, content moderation. Limits: misdescriptions, missing context, possible biases. An example of socially valuable multimodal AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["vision-language-model", "multimodalitaet", "computer-vision"] },

  { id: "super-resolution", category: "cv", risk: null,
    tags: ["#SuperResolution", "#Bildverbesserung", "#CV"],
    de: {
      term: "Bildhochskalierung (Super-Resolution)",
      short: "KI-gestützte Erhöhung der Auflösung und Detailschärfe von Bildern über die ursprüngliche Qualität hinaus.",
      long: "Super-Resolution erzeugt aus einem niedrig aufgelösten Bild eine höher aufgelöste, detailreichere Version, indem ein Modell plausible Details ergänzt. Anwendungen: Bildrestaurierung, Medizin- und Satellitenbildgebung, Video-Upscaling, Fotografie. Wichtiger Hinweis: Die ergänzten Details sind vom Modell erzeugt und nicht zwingend real – in forensischen oder medizinischen Kontexten ist das kritisch, da \"geschärfte\" Bilder Informationen suggerieren können, die nicht im Original enthalten waren. Beispiel dafür, dass generative Verbesserung und wahrheitsgetreue Abbildung auseinanderfallen können." },
    en: {
      term: "Super-Resolution",
      short: "AI-supported increase of the resolution and detail sharpness of images beyond the original quality.",
      long: "Super-resolution creates from a low-resolution image a higher-resolution, more detailed version by having a model add plausible detail. Applications: image restoration, medical and satellite imaging, video upscaling, photography. Important note: the added details are generated by the model and not necessarily real — in forensic or medical contexts this is critical, as \"sharpened\" images can suggest information not contained in the original. An example that generative enhancement and truthful depiction can diverge." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["image-generation", "gan", "diffusion"] },

  { id: "optical-flow", category: "cv", risk: null,
    tags: ["#OpticalFlow", "#Bewegung", "#Video"],
    de: {
      term: "Optischer Fluss (Optical Flow)",
      short: "Schätzung der Bewegung von Bildpunkten zwischen aufeinanderfolgenden Videobildern.",
      long: "Der optische Fluss beschreibt, wie sich Pixel von einem Videobild zum nächsten bewegen, und macht so Bewegungsrichtung und -geschwindigkeit im Bild sichtbar. Anwendungen: Videoanalyse, Bewegungserkennung, Videokompression, Stabilisierung, autonomes Fahren (Bewegung anderer Verkehrsteilnehmer), Sportanalyse. Grundlage für das Verständnis dynamischer Szenen, in denen nicht nur der Inhalt eines einzelnen Bildes, sondern dessen zeitliche Veränderung zählt. Technisch anspruchsvoll bei schnellen Bewegungen, Verdeckungen und schlechten Lichtverhältnissen. Baustein der Videoverarbeitung, ergänzend zur bildweisen Objekterkennung." },
    en: {
      term: "Optical Flow",
      short: "Estimating the motion of image points between consecutive video frames.",
      long: "Optical flow describes how pixels move from one video frame to the next, thereby revealing the direction and speed of motion in the image. Applications: video analysis, motion detection, video compression, stabilisation, autonomous driving (motion of other road users), sports analysis. A basis for understanding dynamic scenes where not only the content of a single image but its temporal change matters. Technically demanding with fast motion, occlusions and poor lighting. A building block of video processing, complementing frame-by-frame object detection." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["objekterkennung", "autonomes-fahren", "computer-vision"] },

  { id: "keypoint-detection", category: "cv", risk: null,
    tags: ["#Keypoints", "#Features", "#CV"],
    de: {
      term: "Merkmalspunkt-Erkennung (Keypoint Detection)",
      short: "Auffinden markanter, wiedererkennbarer Punkte in Bildern – Grundlage für Zuordnung, Verfolgung und Rekonstruktion.",
      long: "Keypoint Detection findet charakteristische Bildpunkte (Ecken, Kanten, markante Strukturen), die sich über verschiedene Bilder hinweg zuverlässig wiedererkennen lassen. Solche Merkmalspunkte sind die Grundlage, um Bilder aneinander auszurichten (Registrierung), Objekte über Videobilder zu verfolgen, Panoramen zusammenzusetzen oder 3D-Strukturen aus mehreren Ansichten zu rekonstruieren. Klassische Verfahren (etwa SIFT) wurden durch gelernte Ansätze ergänzt. Ein grundlegendes Werkzeug der Bildverarbeitung, das vielen höheren Aufgaben – von der Panoramafotografie bis zur Roboternavigation – zugrunde liegt." },
    en: {
      term: "Keypoint Detection",
      short: "Finding distinctive, recognisable points in images — the basis for matching, tracking and reconstruction.",
      long: "Keypoint detection finds characteristic image points (corners, edges, salient structures) that can be reliably recognised across different images. Such keypoints are the basis for aligning images (registration), tracking objects across video frames, stitching panoramas or reconstructing 3D structures from multiple views. Classic methods (e.g. SIFT) have been complemented by learned approaches. A fundamental image-processing tool underlying many higher tasks — from panorama photography to robot navigation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["pose-estimation", "tiefenschaetzung", "computer-vision", "gestenerkennung"] },

  { id: "gestenerkennung", category: "cv", risk: null,
    tags: ["#Gesten", "#Interaktion", "#CV"],
    de: {
      term: "Gestenerkennung",
      short: "Erkennen von Hand- und Körpergesten zur berührungslosen Steuerung von Geräten und Systemen.",
      long: "Gestenerkennung interpretiert Bewegungen von Händen, Fingern oder Körper als Befehle – etwa zum Steuern von Geräten, in Virtual und Augmented Reality, in der Fahrzeugbedienung oder in der Gebärdenspracherkennung. Technisch baut sie auf Objekt- und Körperpunkterkennung (Pose Estimation) auf. Anwendungen reichen von Unterhaltungselektronik bis zu Barrierefreiheit (etwa Übersetzung von Gebärdensprache). Datenschutzaspekte entstehen, wenn kontinuierlich Kamerabilder von Personen verarbeitet werden. Beispiel für natürliche, berührungslose Mensch-Maschine-Interaktion, die mehrere CV-Grundtechniken zusammenführt." },
    en: {
      term: "Gesture Recognition",
      short: "Recognising hand and body gestures for touchless control of devices and systems.",
      long: "Gesture recognition interprets movements of hands, fingers or body as commands — e.g. to control devices, in virtual and augmented reality, in vehicle operation or in sign-language recognition. Technically it builds on object and body-point detection (pose estimation). Applications range from consumer electronics to accessibility (e.g. sign-language translation). Privacy aspects arise when camera images of persons are processed continuously. An example of natural, touchless human-machine interaction that combines several basic CV techniques." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["pose-estimation", "keypoint-detection", "computer-vision"] },

  { id: "medizinische-bildsegmentierung", category: "cv", risk: "high",
    tags: ["#MedizinCV", "#Segmentierung", "#Gesundheit"],
    de: {
      term: "Medizinische Bildsegmentierung",
      short: "Pixelgenaue Abgrenzung anatomischer Strukturen oder Auffälligkeiten in medizinischen Bildern – etwa Tumor- oder Organgrenzen.",
      long: "Die medizinische Bildsegmentierung markiert in CT, MRT oder Mikroskopie exakt die Umrisse von Organen, Gewebe oder Läsionen – wichtig für Diagnose, Bestrahlungsplanung, Operationsvorbereitung und Verlaufskontrolle. Als Teil diagnostischer oder therapeutischer Medizinprodukte fällt sie meist unter MDR und AI Act (Hochrisiko). Hohe Anforderungen an Genauigkeit, Validierung über Geräte und Patientengruppen hinweg und menschliche Kontrolle durch Fachpersonal. Fehler können unmittelbar behandlungsrelevant sein. Ein anschauliches Beispiel dafür, wie eine technische CV-Grundaufgabe im medizinischen Kontext zur streng regulierten Hochrisiko-Anwendung wird." },
    en: {
      term: "Medical Image Segmentation",
      short: "Pixel-precise delineation of anatomical structures or abnormalities in medical images — e.g. tumour or organ boundaries.",
      long: "Medical image segmentation precisely marks in CT, MRI or microscopy the contours of organs, tissue or lesions — important for diagnosis, radiotherapy planning, surgical preparation and follow-up. As part of diagnostic or therapeutic medical devices, it usually falls under the MDR and AI Act (high-risk). High requirements on accuracy, validation across devices and patient groups, and human control by specialists. Errors can be immediately treatment-relevant. A vivid example of how a technical CV base task becomes a strictly regulated high-risk application in the medical context." },
    links: [ { label: "MDR (VO 2017/745)", url: "https://eur-lex.europa.eu/eli/reg/2017/745/oj" } ],
    related: ["bildsegmentierung", "radiologie-ki", "ki-diagnostik"] },

  { id: "zeitreihenanalyse", category: "ml", risk: null,
    tags: ["#Zeitreihe", "#Forecasting", "#Prognose"],
    de: {
      term: "Zeitreihenanalyse",
      short: "Analyse und Vorhersage von Daten, die in zeitlicher Reihenfolge erhoben werden – etwa Kurse, Verbräuche oder Messwerte.",
      long: "Zeitreihendaten haben eine zeitliche Ordnung, in der die Reihenfolge Bedeutung trägt. Die Analyse zerlegt sie oft in Trend, Saisonalität und Rauschen und nutzt sie zur Prognose (Forecasting). Klassische Verfahren wie ARIMA stehen neben modernen neuronalen Ansätzen (rekurrente Netze, Transformer). Anwendungen: Nachfrageprognose, Finanzmärkte, Energiebedarf, vorausschauende Wartung, Medizin. Besonderheit: Testdaten müssen zeitlich nach den Trainingsdaten liegen, sonst droht Datenleckage. Grundlage vieler sektorspezifischer Prognosesysteme im Glossar." },
    en: {
      term: "Time Series Analysis",
      short: "Analysis and forecasting of data collected in temporal order — e.g. prices, consumption or measurements.",
      long: "Time-series data have a temporal order in which sequence carries meaning. Analysis often decomposes them into trend, seasonality and noise and uses them for forecasting. Classic methods such as ARIMA sit alongside modern neural approaches (recurrent networks, transformers). Applications: demand forecasting, financial markets, energy demand, predictive maintenance, medicine. A particularity: test data must lie temporally after the training data, otherwise data leakage looms. The basis of many sector-specific forecasting systems in this glossary." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rnn", "lstm", "predictive-maintenance"] },

  { id: "rnn", category: "dl", risk: null,
    tags: ["#RNN", "#Sequenz", "#Architektur"],
    de: {
      term: "Rekurrentes neuronales Netz (RNN)",
      short: "Netzarchitektur für sequenzielle Daten, die über einen internen Zustand Informationen aus vorherigen Schritten mitführt.",
      long: "Rekurrente neuronale Netze verarbeiten Sequenzen Schritt für Schritt und geben dabei einen verborgenen Zustand weiter, der als Kurzzeitgedächtnis dient. So eigneten sie sich lange für Sprache, Zeitreihen und Audio. Ihr Problem: Bei langen Sequenzen verlieren sie über die Zeit den Zusammenhang (verschwindende Gradienten). Verbesserte Varianten wie LSTM und GRU milderten dies. Seit Einführung der Transformer-Architektur, die Sequenzen parallel statt schrittweise verarbeitet, wurden RNN in vielen Bereichen abgelöst, bleiben aber konzeptionell und für ressourcenarme Anwendungen relevant." },
    en: {
      term: "Recurrent Neural Network (RNN)",
      short: "A network architecture for sequential data that carries information from previous steps via an internal state.",
      long: "Recurrent neural networks process sequences step by step, passing along a hidden state that serves as short-term memory. This long made them suitable for language, time series and audio. Their problem: over long sequences they lose context over time (vanishing gradients). Improved variants such as LSTM and GRU mitigated this. Since the introduction of the transformer architecture, which processes sequences in parallel rather than step by step, RNNs have been superseded in many areas but remain conceptually relevant and useful for resource-constrained applications." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["lstm", "transformer", "zeitreihenanalyse"] },

  { id: "lstm", category: "dl", risk: null,
    tags: ["#LSTM", "#Sequenz", "#Gedaechtnis"],
    de: {
      term: "Long Short-Term Memory (LSTM)",
      short: "Weiterentwicklung des rekurrenten Netzes, die über Torschaltungen längere Zusammenhänge zuverlässig speichern kann.",
      long: "LSTM-Netze führen spezielle Speicherzellen mit steuerbaren \"Toren\" (Gates) ein, die entscheiden, welche Informationen behalten, überschrieben oder ausgegeben werden. Damit lösen sie das Problem klassischer RNN, den Bezug über lange Sequenzen zu verlieren, und dominierten vor der Transformer-Ära die Sequenzverarbeitung – etwa maschinelle Übersetzung, Spracherkennung und Zeitreihenprognose. Auch heute sind sie bei kleineren Datenmengen und ressourcenbeschränkten Umgebungen eine praktikable Alternative zu Transformern. Wichtiger Meilenstein im Verständnis, wie neuronale Netze Gedächtnis realisieren." },
    en: {
      term: "Long Short-Term Memory (LSTM)",
      short: "An advancement of the recurrent network that can reliably store longer-range context via gating.",
      long: "LSTM networks introduce special memory cells with controllable gates that decide which information to keep, overwrite or output. This solves the classic RNN problem of losing context over long sequences and, before the transformer era, dominated sequence processing — e.g. machine translation, speech recognition and time-series forecasting. Even today they are a practical alternative to transformers for smaller datasets and resource-constrained environments. An important milestone in understanding how neural networks realise memory." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rnn", "vanishing-gradient", "transformer", "zeitreihenanalyse"] },

  { id: "autoencoder", category: "dl", risk: null,
    tags: ["#Autoencoder", "#Repraesentation", "#Unsupervised"],
    de: {
      term: "Autoencoder",
      short: "Neuronales Netz, das lernt, seine Eingabe komprimiert darzustellen und daraus wieder zu rekonstruieren.",
      long: "Ein Autoencoder besteht aus einem Encoder, der die Eingabe in eine kompakte Darstellung (Latenzraum) verdichtet, und einem Decoder, der daraus das Original möglichst genau wiederherstellt. Durch diesen Engpass lernt das Netz die wesentlichen Merkmale der Daten – ohne Labels (selbstüberwacht). Anwendungen: Dimensionsreduktion, Entrauschen, Anomalieerkennung (schlecht rekonstruierbare Fälle sind auffällig) und Merkmalslernen. Die Variante des variational autoencoder (VAE) ist zudem generativ. Grundlegendes Konzept des Repräsentationslernens, verwandt mit generativen Modellen." },
    en: {
      term: "Autoencoder",
      short: "A neural network that learns to represent its input compactly and reconstruct it from that representation.",
      long: "An autoencoder consists of an encoder that compresses the input into a compact representation (latent space) and a decoder that reconstructs the original from it as accurately as possible. Through this bottleneck, the network learns the essential features of the data — without labels (self-supervised). Applications: dimensionality reduction, denoising, anomaly detection (poorly reconstructed cases stand out) and feature learning. The variational autoencoder (VAE) variant is additionally generative. A fundamental concept of representation learning, related to generative models." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["dimensionsreduktion", "anomalieerkennung", "self-supervised-learning"] },

  { id: "dimensionsreduktion", category: "ml", risk: null,
    tags: ["#PCA", "#tSNE", "#Dimensionsreduktion"],
    de: {
      term: "Dimensionsreduktion",
      short: "Verfahren, die hochdimensionale Daten auf wenige aussagekräftige Dimensionen verdichten – für Analyse und Visualisierung.",
      long: "Viele Datensätze haben sehr viele Merkmale (Dimensionen), was Analyse, Rechenaufwand und Visualisierung erschwert (\"Fluch der Dimensionalität\"). Dimensionsreduktion überführt die Daten in einen kleineren Raum, der die wesentliche Struktur erhält. Lineare Verfahren wie PCA (Hauptkomponentenanalyse) finden Richtungen größter Varianz; nichtlineare wie t-SNE oder UMAP eignen sich für die Visualisierung komplexer Strukturen. Anwendungen: Vorverarbeitung, Mustererkennung, Datenexploration, Kompression. Gehört zum unüberwachten Lernen und ergänzt Clustering bei der Erkundung unbekannter Daten." },
    en: {
      term: "Dimensionality Reduction",
      short: "Methods that condense high-dimensional data into a few meaningful dimensions — for analysis and visualisation.",
      long: "Many datasets have very many features (dimensions), complicating analysis, computation and visualisation (the \"curse of dimensionality\"). Dimensionality reduction transforms the data into a smaller space that preserves the essential structure. Linear methods such as PCA (principal component analysis) find directions of greatest variance; nonlinear ones such as t-SNE or UMAP suit the visualisation of complex structures. Applications: preprocessing, pattern recognition, data exploration, compression. Belongs to unsupervised learning and complements clustering in exploring unknown data." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["autoencoder", "clustering", "feature-engineering"] },

  { id: "graph-neural-network", category: "dl", risk: null,
    tags: ["#GNN", "#Graph", "#Architektur"],
    de: {
      term: "Graph Neural Network (GNN)",
      short: "Netzarchitektur für Daten, die als Graph aus Knoten und Kanten vorliegen – etwa soziale Netze, Moleküle oder Verkehrsnetze.",
      long: "Viele reale Daten sind Beziehungsgeflechte: Personen und ihre Kontakte, Atome und Bindungen, Orte und Verbindungen. Graph Neural Networks verarbeiten solche Strukturen, indem jeder Knoten Informationen von seinen Nachbarn sammelt und aggregiert (Message Passing). So lernen sie aus der Netzstruktur selbst. Anwendungen: Wirkstoffforschung (Molekülgraphen), Empfehlungssysteme, Betrugserkennung, Verkehrsprognose, soziale Netzwerkanalyse. Eine eigenständige Architekturfamilie neben CNN (Gitter/Bilder) und Transformern (Sequenzen), spezialisiert auf vernetzte, unregelmäßige Daten." },
    en: {
      term: "Graph Neural Network (GNN)",
      short: "A network architecture for data given as a graph of nodes and edges — e.g. social networks, molecules or transport networks.",
      long: "Much real-world data is a web of relationships: people and their contacts, atoms and bonds, places and connections. Graph neural networks process such structures by having each node gather and aggregate information from its neighbours (message passing). They thereby learn from the network structure itself. Applications: drug discovery (molecular graphs), recommendation systems, fraud detection, traffic forecasting, social network analysis. A distinct architecture family alongside CNNs (grids/images) and transformers (sequences), specialised in networked, irregular data." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["knowledge-graph", "empfehlungssystem", "nn"] },

  { id: "empfehlungssystem", category: "ml", risk: "limited",
    tags: ["#RecSys", "#Empfehlung", "#Personalisierung"],
    de: {
      term: "Empfehlungssystem (Recommender System)",
      short: "System, das Nutzern personalisierte Vorschläge macht – Produkte, Inhalte, Kontakte – auf Basis ihres Verhaltens und ihrer Merkmale.",
      long: "Empfehlungssysteme prägen weite Teile des digitalen Alltags: Produktvorschläge, Streaming-Empfehlungen, Nachrichtenfeeds, Kontaktvorschläge. Zwei Grundansätze: kollaboratives Filtern (Nutzer mit ähnlichem Verhalten mögen Ähnliches) und inhaltsbasiertes Filtern (ähnliche Objekte). Wirtschaftlich enorm bedeutsam, aber gesellschaftlich sensibel: Filterblasen, Suchtmechaniken, Verstärkung von Verzerrungen, Intransparenz. Der Digital Services Act verlangt für sehr große Plattformen Transparenz über Empfehlungssysteme und teils eine nicht personalisierte Option. Berührt Verbraucherschutz und Datenschutz (Profiling)." },
    en: {
      term: "Recommender System",
      short: "A system that makes personalised suggestions to users — products, content, contacts — based on their behaviour and features.",
      long: "Recommender systems shape large parts of digital daily life: product suggestions, streaming recommendations, news feeds, contact suggestions. Two basic approaches: collaborative filtering (users with similar behaviour like similar things) and content-based filtering (similar items). Economically enormously significant but socially sensitive: filter bubbles, addictive mechanics, amplification of biases, opacity. The Digital Services Act requires very large platforms to provide transparency about recommender systems and, in part, a non-personalised option. Touches consumer protection and data protection (profiling)." },
    links: [ { label: "DSA (VO 2022/2065)", url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj" } ],
    related: ["kollaboratives-filtern", "profiling", "graph-neural-network", "china-algorithmus-registrierung"] },

  { id: "kollaboratives-filtern", category: "ml", risk: null,
    tags: ["#CollaborativeFiltering", "#RecSys", "#Matrix"],
    de: {
      term: "Kollaboratives Filtern",
      short: "Empfehlungsmethode, die Vorschläge aus dem Verhalten vieler ähnlicher Nutzer ableitet – ohne die Objekte selbst zu kennen.",
      long: "Kollaboratives Filtern beruht auf der Idee: Wer in der Vergangenheit ähnlich gehandelt hat, wird auch künftig Ähnliches mögen. Aus einer großen Nutzer-Objekt-Matrix (wer hat was bewertet/gekauft) werden Muster gelernt, oft über Matrixfaktorisierung, die verborgene Merkmale von Nutzern und Objekten aufdeckt. Stärke: Es braucht kein inhaltliches Wissen über die Objekte. Schwäche: das Kaltstartproblem – für neue Nutzer oder Objekte ohne Historie fehlen Daten. Grundtechnik vieler Empfehlungssysteme, häufig mit inhaltsbasierten Verfahren zu hybriden Systemen kombiniert." },
    en: {
      term: "Collaborative Filtering",
      short: "A recommendation method that derives suggestions from the behaviour of many similar users — without knowing the items themselves.",
      long: "Collaborative filtering rests on the idea: those who acted similarly in the past will also like similar things in future. From a large user-item matrix (who rated/bought what), patterns are learned, often via matrix factorisation, which uncovers latent features of users and items. Strength: it needs no content knowledge about the items. Weakness: the cold-start problem — for new users or items without history, data are lacking. A base technique of many recommender systems, often combined with content-based methods into hybrid systems." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["empfehlungssystem", "vektordatenbank"] },

  { id: "knowledge-graph", category: "ml", risk: null,
    tags: ["#KnowledgeGraph", "#Wissen", "#Semantik"],
    de: {
      term: "Wissensgraph (Knowledge Graph)",
      short: "Strukturierte Wissensbasis, die Entitäten und ihre Beziehungen als Netz aus Knoten und Kanten abbildet.",
      long: "Ein Wissensgraph speichert Fakten als Beziehungen zwischen Entitäten (\"Berlin – ist Hauptstadt von – Deutschland\") und macht Wissen so maschinell verarbeitbar und logisch verknüpfbar. Anwendungen: Suchmaschinen, Frage-Antwort-Systeme, Datenintegration, Empfehlungen. Zunehmend werden Wissensgraphen mit Sprachmodellen kombiniert, um deren Faktenwissen zu verankern und Halluzinationen zu reduzieren (eine Form strukturierter Wissensanbindung, verwandt mit RAG). Bindeglied zwischen symbolischer, regelbasierter KI und statistischem maschinellem Lernen. Grundlage vieler Anwendungen, die verlässliches, überprüfbares Wissen brauchen." },
    en: {
      term: "Knowledge Graph",
      short: "A structured knowledge base that maps entities and their relationships as a network of nodes and edges.",
      long: "A knowledge graph stores facts as relationships between entities (\"Berlin – is capital of – Germany\"), making knowledge machine-processable and logically linkable. Applications: search engines, question-answering systems, data integration, recommendations. Increasingly, knowledge graphs are combined with language models to ground their factual knowledge and reduce hallucinations (a form of structured knowledge grounding, related to RAG). A link between symbolic, rule-based AI and statistical machine learning. The basis of many applications needing reliable, verifiable knowledge." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["graph-neural-network", "rag", "named-entity-recognition"] },

  { id: "verlustfunktion", category: "ml", risk: null,
    tags: ["#LossFunction", "#Training", "#Optimierung"],
    de: {
      term: "Verlustfunktion (Loss Function)",
      short: "Maß dafür, wie stark die Vorhersagen eines Modells von den gewünschten Werten abweichen – die Zielgröße, die das Training minimiert.",
      long: "Die Verlustfunktion übersetzt den Fehler eines Modells in eine einzige Zahl, die das Training zu minimieren versucht. Ihre Wahl bestimmt, worauf das Modell optimiert wird: mittlerer quadratischer Fehler bei Regression, Kreuzentropie bei Klassifikation, spezielle Verluste für andere Aufgaben. Wichtig: Die Verlustfunktion kodiert implizit, welche Fehler als schlimmer gelten – hier können unbeabsichtigt Verzerrungen oder Fehlanreize entstehen. Zusammen mit dem Gradientenabstieg das Herzstück des Lernprozesses. Ihre bewusste Gestaltung ist ein zentraler Hebel für Genauigkeit, Fairness und gewünschtes Verhalten." },
    en: {
      term: "Loss Function",
      short: "A measure of how far a model's predictions deviate from the desired values — the objective that training minimises.",
      long: "The loss function translates a model's error into a single number that training seeks to minimise. Its choice determines what the model optimises for: mean squared error for regression, cross-entropy for classification, special losses for other tasks. Importantly, the loss function implicitly encodes which errors count as worse — here biases or misincentives can arise unintentionally. Together with gradient descent, the heart of the learning process. Its deliberate design is a key lever for accuracy, fairness and desired behaviour." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["gradientenabstieg", "belohnungsfunktion", "hyperparameter"] },

  { id: "hyperparameter", category: "ml", risk: null,
    tags: ["#Hyperparameter", "#Tuning", "#Training"],
    de: {
      term: "Hyperparameter",
      short: "Einstellgrößen eines Lernverfahrens, die vor dem Training festgelegt werden – im Unterschied zu den im Training gelernten Parametern.",
      long: "Hyperparameter steuern den Lernprozess selbst: Lernrate, Anzahl der Schichten, Größe der Datenpakete (Batch Size), Stärke der Regularisierung u. a. Anders als die Modellparameter (Gewichte) werden sie nicht gelernt, sondern vom Entwickler gesetzt und beeinflussen Qualität und Trainingsverhalten stark. Ihre Optimierung (Hyperparameter-Tuning) erfolgt systematisch – etwa per Rastersuche, Zufallssuche oder klügeren Verfahren. Ein oft unterschätzter, aber entscheidender Teil der Modellentwicklung. Gute Reproduzierbarkeit (Teil von MLOps) verlangt, die verwendeten Hyperparameter zu dokumentieren." },
    en: {
      term: "Hyperparameter",
      short: "Settings of a learning method fixed before training — as opposed to the parameters learned during training.",
      long: "Hyperparameters govern the learning process itself: learning rate, number of layers, batch size, strength of regularization and others. Unlike model parameters (weights), they are not learned but set by the developer and strongly influence quality and training behaviour. Their optimisation (hyperparameter tuning) is done systematically — e.g. via grid search, random search or smarter methods. An often underestimated but decisive part of model development. Good reproducibility (part of MLOps) requires documenting the hyperparameters used." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["lernrate", "cross-validation", "batch-epoch", "verlustfunktion"] },

  { id: "lernrate", category: "dl", risk: null,
    tags: ["#LearningRate", "#Optimierung", "#Training"],
    de: {
      term: "Lernrate (Learning Rate)",
      short: "Wichtigster Hyperparameter, der bestimmt, wie große Schritte ein Modell beim Anpassen seiner Parameter macht.",
      long: "Die Lernrate steuert, wie stark die Parameter bei jedem Schritt des Gradientenabstiegs verändert werden. Ist sie zu hoch, springt das Training über gute Lösungen hinweg und wird instabil; ist sie zu niedrig, dauert das Lernen sehr lange oder bleibt in schlechten Zwischenlösungen stecken. Oft wird die Lernrate im Trainingsverlauf angepasst (Learning Rate Scheduling), etwa anfangs größer und später kleiner. Sie gilt als der einflussreichste einzelne Hyperparameter im Deep Learning. Anschauliches Beispiel dafür, wie sensibel Trainingsergebnisse von scheinbar technischen Einstellungen abhängen." },
    en: {
      term: "Learning Rate",
      short: "The most important hyperparameter, determining how large the steps a model takes when adjusting its parameters.",
      long: "The learning rate controls how strongly parameters are changed at each step of gradient descent. If it is too high, training jumps over good solutions and becomes unstable; if too low, learning takes very long or gets stuck in poor intermediate solutions. The learning rate is often adjusted during training (learning rate scheduling), e.g. larger at first and smaller later. It is regarded as the single most influential hyperparameter in deep learning. A vivid example of how sensitively training results depend on seemingly technical settings." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["hyperparameter", "gradientenabstieg", "batch-epoch"] },

  { id: "batch-epoch", category: "ml", risk: null,
    tags: ["#Batch", "#Epoch", "#Training"],
    de: {
      term: "Batch und Epoche",
      short: "Grundbegriffe des Trainingsablaufs: ein Batch ist eine Datenportion pro Lernschritt, eine Epoche ein vollständiger Durchlauf durch alle Trainingsdaten.",
      long: "Beim Training werden die Daten nicht auf einmal, sondern in Portionen (Batches) verarbeitet; nach jedem Batch werden die Parameter aktualisiert. Ein vollständiger Durchlauf durch den gesamten Trainingsdatensatz heißt Epoche; typischerweise werden viele Epochen durchlaufen. Die Batch-Größe beeinflusst Trainingsstabilität, Geschwindigkeit und Speicherbedarf; die Zahl der Epochen bestimmt mit, ob ein Modell ausreichend lernt oder zu overfitten beginnt. Grundvokabular, um Trainingskonfigurationen und Rechenaufwand zu verstehen – wichtig auch für die Reproduzierbarkeit im Sinne von MLOps." },
    en: {
      term: "Batch and Epoch",
      short: "Basic training concepts: a batch is a portion of data per learning step, an epoch a full pass through all training data.",
      long: "In training, data are processed not all at once but in portions (batches); after each batch the parameters are updated. A full pass through the entire training dataset is called an epoch; typically many epochs are run. Batch size influences training stability, speed and memory footprint; the number of epochs co-determines whether a model learns sufficiently or begins to overfit. Basic vocabulary for understanding training configurations and compute — also important for reproducibility in the MLOps sense." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["lernrate", "hyperparameter", "gradientenabstieg"] },

  { id: "vanishing-gradient", category: "dl", risk: null,
    tags: ["#VanishingGradient", "#Training", "#TiefeNetze"],
    de: {
      term: "Verschwindende und explodierende Gradienten",
      short: "Trainingsprobleme tiefer Netze, bei denen die Lernsignale in frühen Schichten zu klein oder zu groß werden.",
      long: "Beim Training über Backpropagation werden Fehlersignale (Gradienten) durch viele Schichten zurückgeführt. In sehr tiefen Netzen können sie dabei exponentiell schrumpfen (verschwindende Gradienten – frühe Schichten lernen kaum) oder anwachsen (explodierende Gradienten – Training wird instabil). Diese Probleme bremsten lange das Training tiefer Netze. Lösungen: geeignete Aktivierungsfunktionen (etwa ReLU), Normalisierungstechniken, Residualverbindungen (Skip Connections) und sorgfältige Initialisierung. Ihr Verständnis erklärt, warum bestimmte Architekturbausteine moderner Netze überhaupt notwendig wurden." },
    en: {
      term: "Vanishing and Exploding Gradients",
      short: "Training problems of deep networks where learning signals in early layers become too small or too large.",
      long: "In training via backpropagation, error signals (gradients) are propagated back through many layers. In very deep networks they can shrink exponentially (vanishing gradients — early layers barely learn) or grow (exploding gradients — training becomes unstable). These problems long hindered the training of deep networks. Solutions: suitable activation functions (e.g. ReLU), normalisation techniques, residual connections (skip connections) and careful initialisation. Understanding them explains why certain architectural building blocks of modern networks became necessary at all." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["backpropagation", "lstm", "batch-normalization", "aktivierungsfunktion"] },

  { id: "aktivierungsfunktion", category: "dl", risk: null,
    tags: ["#Activation", "#ReLU", "#Nichtlinearitaet"],
    de: {
      term: "Aktivierungsfunktion",
      short: "Funktion, die einem neuronalen Netz Nichtlinearität verleiht und so das Lernen komplexer Zusammenhänge ermöglicht.",
      long: "Jedes künstliche Neuron wendet auf seine gewichtete Summe eine Aktivierungsfunktion an. Ohne diese Nichtlinearität wäre ein noch so tiefes Netz nur eine lineare Abbildung und könnte keine komplexen Muster lernen. Verbreitete Funktionen: ReLU (heute Standard, einfach und effektiv), Sigmoid und Tanh (historisch, in bestimmten Rollen weiterhin genutzt), Softmax (für Wahrscheinlichkeitsausgaben). Die Wahl beeinflusst Trainingsverhalten und Gradientenfluss. Ein kleines, aber fundamentales Bauteil, dessen Verständnis erklärt, warum neuronale Netze überhaupt mächtig sind." },
    en: {
      term: "Activation Function",
      short: "A function that gives a neural network nonlinearity, enabling it to learn complex relationships.",
      long: "Each artificial neuron applies an activation function to its weighted sum. Without this nonlinearity, even a very deep network would be only a linear mapping and could not learn complex patterns. Common functions: ReLU (today's standard, simple and effective), sigmoid and tanh (historical, still used in certain roles), softmax (for probability outputs). The choice influences training behaviour and gradient flow. A small but fundamental component whose understanding explains why neural networks are powerful at all." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["nn", "vanishing-gradient", "deep-learning"] },

  { id: "batch-normalization", category: "dl", risk: null,
    tags: ["#BatchNorm", "#Normalisierung", "#Training"],
    de: {
      term: "Normalisierung (Batch/Layer Normalization)",
      short: "Techniken, die Zwischenwerte in einem neuronalen Netz stabilisieren und so Training beschleunigen und robuster machen.",
      long: "Normalisierungsschichten skalieren und zentrieren die Aktivierungen innerhalb eines Netzes, damit ihre Verteilung über das Training hinweg stabil bleibt. Batch Normalization tut dies über die Beispiele eines Batches, Layer Normalization über die Merkmale einer einzelnen Eingabe (wichtig in Transformern). Nutzen: schnelleres, stabileres Training, geringere Empfindlichkeit gegenüber der Initialisierung und ein gewisser regularisierender Effekt. Heute Standardbestandteil praktisch aller tiefen Netze. Ein technischer, aber entscheidender Baustein, der das zuverlässige Training sehr tiefer Modelle erst praktikabel machte." },
    en: {
      term: "Normalisation (Batch/Layer Normalization)",
      short: "Techniques that stabilise intermediate values in a neural network, speeding up training and making it more robust.",
      long: "Normalisation layers scale and centre the activations within a network so their distribution stays stable across training. Batch normalization does this over the examples of a batch, layer normalization over the features of a single input (important in transformers). Benefits: faster, more stable training, lower sensitivity to initialisation and some regularising effect. Today a standard component of virtually all deep networks. A technical but decisive building block that first made reliable training of very deep models practical." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["vanishing-gradient", "regularisierung", "deep-learning"] },

  { id: "few-shot-learning", category: "llm", risk: null,
    tags: ["#FewShot", "#ZeroShot", "#InContext"],
    de: {
      term: "Few-Shot- und Zero-Shot-Lernen",
      short: "Fähigkeit eines Modells, eine Aufgabe aus wenigen Beispielen (few-shot) oder ganz ohne Beispiele (zero-shot) zu lösen.",
      long: "Klassisches maschinelles Lernen braucht viele markierte Beispiele pro Aufgabe. Große Sprachmodelle können Aufgaben dagegen oft schon aus wenigen Beispielen im Prompt (few-shot) oder allein aus einer Anweisung ohne Beispiel (zero-shot) bewältigen – das Wissen dafür stammt aus dem Vortraining. Diese \"In-Context\"-Fähigkeit macht sie außergewöhnlich flexibel, ohne erneutes Training. Grundlage vieler praktischer Anwendungen und eng mit Prompt Engineering verbunden. Grenzen: Verlässlichkeit schwankt, und komplexe oder ungewöhnliche Aufgaben profitieren weiterhin von Feinabstimmung oder mehr Beispielen." },
    en: {
      term: "Few-Shot and Zero-Shot Learning",
      short: "A model's ability to solve a task from few examples (few-shot) or none at all (zero-shot).",
      long: "Classic machine learning needs many labelled examples per task. Large language models, by contrast, can often handle tasks from just a few examples in the prompt (few-shot) or from an instruction alone with no example (zero-shot) — the knowledge for this comes from pretraining. This \"in-context\" ability makes them exceptionally flexible without retraining. The basis of many practical applications and closely linked to prompt engineering. Limits: reliability varies, and complex or unusual tasks still benefit from fine-tuning or more examples." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["prompt-engineering", "transfer-learning", "instruction-tuning"] },

  { id: "belohnungsfunktion", category: "ml", risk: null,
    tags: ["#Reward", "#RL", "#Belohnung"],
    de: {
      term: "Belohnungsfunktion (Reward Function)",
      short: "Im bestärkenden Lernen die Vorschrift, die das Verhalten eines Agenten bewertet und so seine Ziele definiert.",
      long: "Beim Reinforcement Learning lernt ein Agent durch Versuch und Rückmeldung: Die Belohnungsfunktion gibt für jede Handlung oder jeden Zustand eine Belohnung, und der Agent lernt, die kumulierte Belohnung zu maximieren. Ihre Gestaltung ist heikel und entscheidend: Eine schlecht formulierte Belohnung führt zu \"Reward Hacking\", bei dem der Agent die Belohnung auf unerwünschte Weise maximiert, ohne das eigentliche Ziel zu erreichen. Das ist ein Kernproblem des Alignments. Die richtige Belohnung zu definieren, ist oft schwerer als das Lernen selbst und verbindet Technik mit Wertefragen." },
    en: {
      term: "Reward Function",
      short: "In reinforcement learning, the rule that evaluates an agent's behaviour and thereby defines its goals.",
      long: "In reinforcement learning, an agent learns through trial and feedback: the reward function gives a reward for each action or state, and the agent learns to maximise cumulative reward. Its design is delicate and decisive: a poorly formulated reward leads to \"reward hacking\", where the agent maximises the reward in undesired ways without achieving the actual goal. This is a core problem of alignment. Defining the right reward is often harder than the learning itself and links technology with questions of values." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rl", "q-learning", "alignment", "verlustfunktion"] },

  { id: "q-learning", category: "ml", risk: null,
    tags: ["#QLearning", "#RL", "#Wertfunktion"],
    de: {
      term: "Q-Learning",
      short: "Grundlegendes Reinforcement-Learning-Verfahren, das den erwarteten langfristigen Nutzen von Aktionen in Zuständen schätzt.",
      long: "Q-Learning lernt eine Funktion, die für jede Kombination aus Zustand und Aktion angibt, welchen langfristigen Gesamtnutzen sie verspricht (den \"Q-Wert\"). Der Agent wählt bevorzugt Aktionen mit hohem Q-Wert, erkundet aber gelegentlich auch Alternativen (Exploration vs. Exploitation). Klassisch als Tabelle umgesetzt, für große Zustandsräume mit neuronalen Netzen als Deep Q-Network (DQN). Es war ein Meilenstein, mit dem Agenten etwa lernten, Videospiele allein aus Bildschirmpixeln zu meistern. Grundlegendes Konzept, um zu verstehen, wie Agenten aus Erfahrung strategisches Verhalten entwickeln." },
    en: {
      term: "Q-Learning",
      short: "A fundamental reinforcement-learning method that estimates the expected long-term value of actions in states.",
      long: "Q-learning learns a function that indicates for each state-action combination the long-term total value it promises (the \"Q-value\"). The agent preferentially chooses high-Q actions but occasionally explores alternatives (exploration vs. exploitation). Classically implemented as a table, for large state spaces with neural networks as a Deep Q-Network (DQN). It was a milestone with which agents learned, for example, to master video games from screen pixels alone. A fundamental concept for understanding how agents develop strategic behaviour from experience." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rl", "policy-gradient", "exploration-exploitation", "belohnungsfunktion"] },

  { id: "policy-gradient", category: "ml", risk: null,
    tags: ["#PolicyGradient", "#RL", "#Strategie"],
    de: {
      term: "Policy-Gradient-Verfahren",
      short: "Reinforcement-Learning-Ansatz, der die Handlungsstrategie eines Agenten direkt optimiert, statt den Umweg über Wertfunktionen zu nehmen.",
      long: "Während Q-Learning den Nutzen von Aktionen schätzt, optimieren Policy-Gradient-Verfahren unmittelbar die Strategie (Policy) – die Vorschrift, die Zustände auf Aktionen abbildet. Das eignet sich besonders für kontinuierliche Handlungsräume (etwa Robotersteuerung). Bekannte Weiterentwicklungen wie PPO (Proximal Policy Optimization) machen das Training stabiler und sind heute weit verbreitet – unter anderem als Baustein des RLHF, mit dem Sprachmodelle an menschliche Präferenzen angepasst werden. Damit schlägt dieses eher technische Verfahren eine direkte Brücke zum Alignment moderner KI." },
    en: {
      term: "Policy Gradient Methods",
      short: "A reinforcement-learning approach that optimises an agent's action strategy directly, rather than via value functions.",
      long: "While Q-learning estimates the value of actions, policy gradient methods directly optimise the policy — the rule mapping states to actions. This suits continuous action spaces particularly well (e.g. robot control). Well-known advancements such as PPO (Proximal Policy Optimization) make training more stable and are widely used today — among other things as a building block of RLHF, which aligns language models with human preferences. This rather technical method thus builds a direct bridge to the alignment of modern AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["q-learning", "rlhf", "rl"] },

  { id: "exploration-exploitation", category: "ml", risk: null,
    tags: ["#Exploration", "#Exploitation", "#RL"],
    de: {
      term: "Exploration vs. Exploitation",
      short: "Grundlegender Zielkonflikt im bestärkenden Lernen: Bekanntes ausnutzen oder Neues erkunden.",
      long: "Ein lernender Agent steht ständig vor der Wahl: die bislang beste bekannte Aktion nutzen (Exploitation) oder unbekannte Aktionen ausprobieren, die vielleicht noch besser sind (Exploration). Zu viel Ausnutzung verpasst bessere Lösungen; zu viel Erkundung verschwendet Chancen auf Belohnung. Die richtige Balance ist entscheidend für erfolgreiches Lernen und wird über verschiedene Strategien gesteuert. Das Dilemma tritt weit über die KI hinaus auf – überall, wo unter Unsicherheit zwischen Sicherheit und Chance abgewogen wird (etwa in A/B-Tests oder bei Investitionsentscheidungen). Anschauliches Grundprinzip lernender Systeme." },
    en: {
      term: "Exploration vs. Exploitation",
      short: "A fundamental trade-off in reinforcement learning: exploit the known or explore the new.",
      long: "A learning agent constantly faces a choice: use the best known action so far (exploitation) or try unknown actions that might be even better (exploration). Too much exploitation misses better solutions; too much exploration wastes chances of reward. The right balance is decisive for successful learning and is steered via various strategies. The dilemma arises far beyond AI — wherever one weighs safety against opportunity under uncertainty (e.g. in A/B tests or investment decisions). A vivid basic principle of learning systems." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rl", "q-learning", "simulationsumgebung"] },

  { id: "simulationsumgebung", category: "ml", risk: null,
    tags: ["#Simulation", "#RL", "#SimToReal"],
    de: {
      term: "Simulationsumgebung (für RL)",
      short: "Virtuelle Umgebung, in der ein Agent gefahrlos und beschleunigt durch Millionen von Versuchen lernen kann.",
      long: "Bestärkendes Lernen braucht sehr viele Versuche – in der realen Welt oft zu langsam, zu teuer oder zu gefährlich. Simulationsumgebungen bilden die Aufgabe virtuell nach, sodass der Agent risikofrei und millionenfach beschleunigt üben kann, etwa Robotersteuerung oder autonomes Fahren. Zentrale Herausforderung ist die \"Sim-to-Real\"-Lücke: In der Simulation Gelerntes überträgt sich nicht immer sauber auf die Realität. Gegenmaßnahmen: realistischere Simulation, gezielte Variation der Bedingungen. Wichtiges Werkzeug, das auch in KI-Reallaboren und beim sicheren Test vor dem Realeinsatz eine Rolle spielt." },
    en: {
      term: "Simulation Environment (for RL)",
      short: "A virtual environment in which an agent can learn safely and in accelerated fashion through millions of trials.",
      long: "Reinforcement learning needs very many trials — in the real world often too slow, too expensive or too dangerous. Simulation environments replicate the task virtually so the agent can practise risk-free and millions of times faster, e.g. robot control or autonomous driving. A key challenge is the \"sim-to-real\" gap: what is learned in simulation does not always transfer cleanly to reality. Countermeasures: more realistic simulation, deliberate variation of conditions. An important tool that also plays a role in AI regulatory sandboxes and in safe testing before real-world deployment." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["rl", "synthetische-daten", "autonomes-fahren", "exploration-exploitation"] },

  { id: "entscheidungsbaum", category: "ml", risk: null,
    tags: ["#Entscheidungsbaum", "#Interpretierbar", "#ML"],
    de: {
      term: "Entscheidungsbaum",
      short: "Modell, das Entscheidungen als Folge einfacher Ja/Nein-Fragen abbildet – gut nachvollziehbar und leicht zu erklären.",
      long: "Ein Entscheidungsbaum trifft Vorhersagen, indem er die Daten anhand einfacher Bedingungen schrittweise aufteilt (\"Alter > 40?\", \"Einkommen > X?\"), bis er zu einer Entscheidung gelangt. Seine große Stärke ist die Interpretierbarkeit: Der Entscheidungsweg lässt sich direkt ablesen und erklären – wertvoll in grundrechtssensiblen Bereichen. Einzelne Bäume neigen zum Overfitting; kombiniert man viele (Random Forest, Gradient Boosting), steigt die Genauigkeit auf Kosten der Nachvollziehbarkeit. Anschauliches Gegenbeispiel zur \"Black Box\" und ein Grundbaustein vieler leistungsstarker Ensemble-Verfahren." },
    en: {
      term: "Decision Tree",
      short: "A model that maps decisions as a sequence of simple yes/no questions — easy to follow and explain.",
      long: "A decision tree makes predictions by splitting the data step by step according to simple conditions (\"age > 40?\", \"income > X?\") until it reaches a decision. Its great strength is interpretability: the decision path can be read off and explained directly — valuable in fundamental-rights-sensitive areas. Single trees tend to overfit; combining many (random forest, gradient boosting) raises accuracy at the cost of traceability. A vivid counterexample to the \"black box\" and a base building block of many powerful ensemble methods." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ensemble", "explainable-boosting", "klassifikation-regression"] },

  { id: "svm", category: "ml", risk: null,
    tags: ["#SVM", "#Klassifikation", "#ML"],
    de: {
      term: "Support Vector Machine (SVM)",
      short: "Klassisches, mathematisch fundiertes Verfahren, das Datenklassen durch eine optimale Trennlinie mit größtmöglichem Abstand teilt.",
      long: "Eine Support Vector Machine sucht die Trennfläche, die zwei Klassen mit dem größten Sicherheitsabstand (Margin) voneinander trennt – bestimmt durch die grenznahen Datenpunkte, die Stützvektoren. Über den \"Kernel-Trick\" kann sie auch nichtlinear trennbare Daten in höheren Räumen bewältigen. SVM waren vor dem Aufstieg des Deep Learning eines der leistungsstärksten Verfahren, besonders bei kleineren, gut strukturierten Datensätzen. Sie sind weiterhin nützlich, wenn Daten knapp sind. Wichtiger Teil des klassischen ML-Werkzeugkastens und der Ideengeschichte des maschinellen Lernens." },
    en: {
      term: "Support Vector Machine (SVM)",
      short: "A classic, mathematically grounded method that separates data classes by an optimal boundary with the largest possible margin.",
      long: "A support vector machine seeks the separating surface that divides two classes with the greatest safety margin — determined by the near-boundary data points, the support vectors. Via the \"kernel trick\" it can also handle non-linearly separable data in higher spaces. Before the rise of deep learning, SVMs were one of the most powerful methods, especially for smaller, well-structured datasets. They remain useful when data are scarce. An important part of the classic ML toolkit and of the history of ideas in machine learning." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["klassifikation-regression", "naive-bayes", "knn"] },

  { id: "naive-bayes", category: "ml", risk: null,
    tags: ["#NaiveBayes", "#Wahrscheinlichkeit", "#ML"],
    de: {
      term: "Naive Bayes",
      short: "Einfacher, schneller Wahrscheinlichkeitsklassifikator, der auf dem Satz von Bayes beruht – klassisch etwa in der Spam-Filterung.",
      long: "Der Naive-Bayes-Klassifikator berechnet, wie wahrscheinlich ein Beispiel zu einer Klasse gehört, indem er die Beiträge einzelner Merkmale kombiniert. \"Naiv\" heißt er, weil er vereinfachend annimmt, dass die Merkmale voneinander unabhängig sind – selten exakt zutreffend, in der Praxis aber oft erstaunlich wirksam. Vorteile: sehr schnell, wenig Datenbedarf, gut interpretierbar. Klassische Anwendung: Textklassifikation und Spam-Erkennung. Ein lehrreiches Beispiel dafür, dass ein einfaches, transparentes Modell in vielen Fällen völlig ausreicht und einem komplexen überlegen sein kann." },
    en: {
      term: "Naive Bayes",
      short: "A simple, fast probabilistic classifier based on Bayes' theorem — classically used e.g. in spam filtering.",
      long: "The Naive Bayes classifier computes how likely an example belongs to a class by combining the contributions of individual features. It is called \"naive\" because it simplifyingly assumes that features are independent of one another — rarely exactly true, but often surprisingly effective in practice. Advantages: very fast, low data requirements, well interpretable. Classic application: text classification and spam detection. An instructive example that a simple, transparent model is often entirely sufficient and can be superior to a complex one." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["textklassifikation", "svm", "bayessche-statistik"] },

  { id: "knn", category: "ml", risk: null,
    tags: ["#kNN", "#Klassifikation", "#ML"],
    de: {
      term: "k-nächste-Nachbarn (k-NN)",
      short: "Intuitives Verfahren, das ein neues Beispiel anhand der ihm ähnlichsten bekannten Beispiele einordnet.",
      long: "Bei k-nächste-Nachbarn wird ein neuer Datenpunkt klassifiziert, indem man die k ähnlichsten bekannten Punkte betrachtet und deren Mehrheitsklasse übernimmt (bzw. bei Regression deren Durchschnitt). Das Verfahren speichert einfach alle Trainingsdaten und rechnet erst bei der Abfrage – daher \"faules Lernen\". Vorteile: sehr einfach, keine Trainingsphase, gut nachvollziehbar. Nachteile: langsam und speicherhungrig bei großen Datenmengen, empfindlich gegenüber irrelevanten Merkmalen und der Wahl des Abstandsmaßes. Konzeptionell verwandt mit der Ähnlichkeitssuche in Vektordatenbanken. Ein anschaulicher Einstieg ins maschinelle Lernen." },
    en: {
      term: "k-Nearest Neighbours (k-NN)",
      short: "An intuitive method that classifies a new example based on the known examples most similar to it.",
      long: "In k-nearest neighbours, a new data point is classified by looking at the k most similar known points and taking their majority class (or, for regression, their average). The method simply stores all training data and computes only at query time — hence \"lazy learning\". Advantages: very simple, no training phase, well interpretable. Disadvantages: slow and memory-hungry on large datasets, sensitive to irrelevant features and the choice of distance metric. Conceptually related to similarity search in vector databases. A vivid introduction to machine learning." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["vektordatenbank", "svm", "clustering"] },

  { id: "bayessche-statistik", category: "ml", risk: null,
    tags: ["#Bayes", "#Unsicherheit", "#Statistik"],
    de: {
      term: "Bayessche Statistik",
      short: "Denkweise, die Wahrscheinlichkeiten als Grad der Überzeugung behandelt und Wissen mit neuen Daten fortlaufend aktualisiert.",
      long: "Die bayessche Statistik startet mit einer Vorannahme (Prior), aktualisiert diese mit beobachteten Daten und gelangt zu einer aktualisierten Überzeugung (Posterior). Ihr großer Vorteil: Sie liefert nicht nur Vorhersagen, sondern quantifiziert auch deren Unsicherheit – in vielen Anwendungen entscheidend, etwa in Medizin, Risikobewertung oder bei knappen Daten. Sie steht dem \"frequentistischen\" Ansatz klassischer Statistik gegenüber und beeinflusst moderne Verfahren zur Unsicherheitsschätzung in der KI. Wichtig, weil kalibrierte Unsicherheit für vertrauenswürdige, sicherheitskritische Systeme oft ebenso zählt wie die Vorhersage selbst." },
    en: {
      term: "Bayesian Statistics",
      short: "A way of thinking that treats probabilities as degrees of belief and continuously updates knowledge with new data.",
      long: "Bayesian statistics starts with a prior assumption, updates it with observed data and arrives at an updated belief (posterior). Its great advantage: it provides not only predictions but also quantifies their uncertainty — decisive in many applications, e.g. medicine, risk assessment or with scarce data. It contrasts with the \"frequentist\" approach of classical statistics and influences modern methods of uncertainty estimation in AI. Important because calibrated uncertainty often counts as much as the prediction itself for trustworthy, safety-critical systems." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["korrelation-kausalitaet", "naive-bayes", "confusion-matrix"] },

  { id: "korrelation-kausalitaet", category: "ml", risk: null,
    tags: ["#Kausalitaet", "#Korrelation", "#Statistik"],
    de: {
      term: "Korrelation vs. Kausalität",
      short: "Der grundlegende Unterschied zwischen bloßem statistischem Zusammenhang und echter Ursache-Wirkungs-Beziehung.",
      long: "Maschinelles Lernen findet Korrelationen – Merkmale, die gemeinsam auftreten. Daraus folgt aber nicht, dass das eine das andere verursacht: Ein Modell kann etwa lernen, dass Regenschirme und nasse Straßen zusammen auftreten, ohne zu verstehen, dass der Regen beides verursacht. Diese Verwechslung führt zu Fehlschlüssen und unfairen Modellen, die auf Scheinzusammenhängen oder Stellvertretermerkmalen beruhen. Die Kausalitätsforschung entwickelt Methoden, um echte Ursachen zu identifizieren. Entscheidend für verlässliche Entscheidungen (\"Was passiert, wenn ich eingreife?\") und für die Vermeidung diskriminierender Proxy-Effekte. Ein Kernthema seriöser Datenanalyse." },
    en: {
      term: "Correlation vs. Causation",
      short: "The fundamental difference between mere statistical association and a genuine cause-and-effect relationship.",
      long: "Machine learning finds correlations — features that occur together. But it does not follow that one causes the other: a model may learn that umbrellas and wet streets co-occur without understanding that rain causes both. This confusion leads to fallacies and unfair models resting on spurious associations or proxy features. Causal inference research develops methods to identify true causes. Decisive for reliable decisions (\"what happens if I intervene?\") and for avoiding discriminatory proxy effects. A core topic of sound data analysis." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["bias", "bayessche-statistik", "feature-engineering"] },

  { id: "imbalanced-data", category: "ml", risk: null,
    tags: ["#Imbalance", "#Daten", "#Bias"],
    de: {
      term: "Unausgewogene Daten (Class Imbalance)",
      short: "Problem, wenn eine Klasse in den Trainingsdaten stark unterrepräsentiert ist – etwa seltene Krankheiten oder Betrugsfälle.",
      long: "Bei stark unausgewogenen Daten überwiegt eine Klasse (etwa 99 % gesunde, 1 % kranke Fälle). Ein Modell kann dann eine hohe Genauigkeit erreichen, indem es einfach immer die häufige Klasse vorhersagt – und dabei genau die seltenen, oft wichtigen Fälle übersieht. Deshalb sind bei unausgewogenen Daten Metriken wie Präzision, Trefferquote und F1 aussagekräftiger als reine Genauigkeit. Gegenmaßnahmen: Über- oder Unterabtastung, synthetische Beispiele, angepasste Verlustfunktionen. Praktisch bedeutsam in Medizin, Betrugs- und Anomalieerkennung – und ein häufiger, unterschätzter Grund für scheinbar gute, real aber unbrauchbare Modelle." },
    en: {
      term: "Imbalanced Data (Class Imbalance)",
      short: "The problem when one class is heavily under-represented in the training data — e.g. rare diseases or fraud cases.",
      long: "With heavily imbalanced data, one class dominates (e.g. 99% healthy, 1% ill cases). A model can then achieve high accuracy simply by always predicting the common class — while missing precisely the rare, often important cases. Therefore, with imbalanced data, metrics such as precision, recall and F1 are more meaningful than plain accuracy. Countermeasures: over- or under-sampling, synthetic examples, adjusted loss functions. Practically significant in medicine, fraud and anomaly detection — and a common, underestimated reason for seemingly good but actually useless models." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["confusion-matrix", "data-leakage", "synthetische-daten"] },

  { id: "data-leakage", category: "ml", risk: null,
    tags: ["#DataLeakage", "#Fehler", "#Validierung"],
    de: {
      term: "Datenleckage (Data Leakage)",
      short: "Häufiger, schwer erkennbarer Fehler, bei dem ein Modell im Training unbeabsichtigt Informationen nutzt, die es später nicht haben dürfte.",
      long: "Datenleckage entsteht, wenn Informationen aus den Testdaten oder aus der Zukunft ins Training gelangen – etwa wenn dieselben Personen in Trainings- und Testmenge auftauchen oder ein Merkmal heimlich das Ergebnis verrät. Die Folge: Das Modell zeigt in der Erprobung glänzende Werte, versagt aber im echten Einsatz. Leckage ist tückisch, weil sie erfolgreich aussieht. Gegenmaßnahmen: saubere Trennung der Daten, bei Zeitreihen zeitlich korrekte Aufteilung, kritische Prüfung verdächtig guter Ergebnisse. Ein zentrales Qualitäts- und Seriositätsthema – und eine häufige Ursache dafür, dass KI-Systeme im Realbetrieb enttäuschen." },
    en: {
      term: "Data Leakage",
      short: "A common, hard-to-spot error where a model unintentionally uses information during training that it should not have later.",
      long: "Data leakage arises when information from the test data or from the future enters training — e.g. when the same people appear in the training and test sets, or a feature secretly reveals the outcome. The result: the model shows brilliant figures in evaluation but fails in real use. Leakage is insidious because it looks successful. Countermeasures: clean separation of data, temporally correct splitting for time series, critical scrutiny of suspiciously good results. A central quality and integrity topic — and a frequent reason why AI systems disappoint in real operation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["cross-validation", "imbalanced-data", "overfitting"] },

  { id: "explainable-boosting", category: "ml", risk: null,
    tags: ["#GlassBox", "#Interpretierbar", "#XAI"],
    de: {
      term: "Interpretierbare Modelle (Glass-Box)",
      short: "Modelle, die von sich aus nachvollziehbar sind, statt erst nachträglich erklärt werden zu müssen – der Gegenentwurf zur Black Box.",
      long: "Statt ein undurchsichtiges Modell nachträglich mit Methoden wie SHAP zu erklären, setzen \"Glass-Box\"-Ansätze auf Modelle, die von Grund auf verständlich sind: lineare Modelle, Entscheidungsbäume oder moderne interpretierbare Verfahren, die Genauigkeit und Nachvollziehbarkeit verbinden. Der Vorteil: Die Erklärung ist das Modell selbst und damit exakt, nicht nur eine Näherung. In grundrechtssensiblen Bereichen (Kredit, Justiz, Medizin) ein starkes Argument, wo immer die Leistung ausreicht. Verkörpert die Position, das Black-Box-Problem möglichst zu vermeiden, statt es nur nachträglich zu lindern." },
    en: {
      term: "Interpretable Models (Glass-Box)",
      short: "Models that are inherently understandable rather than needing to be explained after the fact — the counterpart to the black box.",
      long: "Instead of explaining an opaque model after the fact with methods such as SHAP, \"glass-box\" approaches use models that are understandable from the ground up: linear models, decision trees or modern interpretable methods that combine accuracy and traceability. The advantage: the explanation is the model itself and thus exact, not merely an approximation. In fundamental-rights-sensitive areas (credit, justice, medicine) a strong argument wherever performance suffices. Embodies the position of avoiding the black-box problem where possible rather than merely alleviating it afterwards." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["xai", "entscheidungsbaum", "explainability-vs-performance"] },

  { id: "ground-truth", category: "ml", risk: null,
    tags: ["#GroundTruth", "#Labels", "#Daten"],
    de: {
      term: "Grundwahrheit (Ground Truth)",
      short: "Die als korrekt angenommene Referenz, gegen die die Vorhersagen eines Modells gemessen und an der es trainiert wird.",
      long: "Die Ground Truth ist die \"richtige Antwort\", mit der Trainings- und Testdaten versehen werden – etwa die von Ärzten bestätigte Diagnose oder das von Menschen vergebene Label. Die Qualität eines Modells kann nie besser sein als die Qualität dieser Referenz: Sind die Labels fehlerhaft, verzerrt oder uneinheitlich, lernt und wird das Modell entsprechend falsch bewertet. In vielen Bereichen ist die \"wahre\" Antwort selbst strittig oder subjektiv (etwa bei Moderationsentscheidungen). Ein kritischer, oft unterschätzter Punkt der Daten-Governance: Wer definiert nach welchen Kriterien die Wahrheit, an der die KI gemessen wird?" },
    en: {
      term: "Ground Truth",
      short: "The reference assumed correct, against which a model's predictions are measured and on which it is trained.",
      long: "Ground truth is the \"correct answer\" attached to training and test data — e.g. a diagnosis confirmed by doctors or a label assigned by humans. A model's quality can never exceed the quality of this reference: if the labels are faulty, biased or inconsistent, the model learns and is evaluated accordingly wrongly. In many areas the \"true\" answer is itself contested or subjective (e.g. in moderation decisions). A critical, often underestimated point of data governance: who defines, by what criteria, the truth against which the AI is measured?" },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["trainingsdaten", "daten-governance", "bias", "active-learning"] },

  { id: "concept-drift-detection", category: "ml", risk: null,
    tags: ["#DriftDetection", "#Monitoring", "#Betrieb"],
    de: {
      term: "Drifterkennung (Drift Detection)",
      short: "Verfahren, die im laufenden Betrieb erkennen, wann ein Modell wegen veränderter Daten an Zuverlässigkeit verliert.",
      long: "Da sich die reale Welt verändert, veralten Modelle (siehe Modell- und Datendrift). Drifterkennung überwacht kontinuierlich Eingaben und Vorhersagen und schlägt Alarm, wenn sich Verteilungen oder Leistung auffällig verschieben. So lässt sich rechtzeitig gegensteuern – durch Nachtraining, Anpassung oder Abschaltung. Technisch über statistische Tests, Überwachung von Fehlerraten oder Verteilungsvergleiche umgesetzt. Ein praktischer Baustein von MLOps und die technische Grundlage, um die Post-Market-Monitoring-Pflicht des AI Act (Art. 72) und die dauerhafte Genauigkeit (Art. 15) im Betrieb tatsächlich einzuhalten." },
    en: {
      term: "Drift Detection",
      short: "Methods that detect in live operation when a model loses reliability due to changed data.",
      long: "As the real world changes, models age (see model and data drift). Drift detection continuously monitors inputs and predictions and raises an alarm when distributions or performance shift noticeably. This allows timely countermeasures — through retraining, adjustment or shutdown. Technically implemented via statistical tests, monitoring of error rates or distribution comparisons. A practical building block of MLOps and the technical basis for actually meeting the AI Act's post-market monitoring duty (Art. 72) and ongoing accuracy (Art. 15) in operation." },
    links: [ { label: "Art. 72 AI Act", url: "https://artificialintelligenceact.eu/article/72/" } ],
    related: ["model-context-drift", "mlops", "post-market-monitoring"] },

  { id: "active-learning", category: "ml", risk: null,
    tags: ["#ActiveLearning", "#Labeling", "#Effizienz"],
    de: {
      term: "Aktives Lernen (Active Learning)",
      short: "Strategie, bei der das Modell selbst auswählt, welche Daten am wertvollsten zu beschriften sind, um mit weniger Aufwand mehr zu lernen.",
      long: "Das Beschriften von Daten (Labeling) ist oft teuer und zeitaufwendig. Beim aktiven Lernen wählt das Modell gezielt die Beispiele aus, bei denen es am unsichersten ist oder aus denen es am meisten lernen würde, und lässt nur diese von Menschen beschriften. So erreicht man mit deutlich weniger markierten Daten eine vergleichbare oder bessere Leistung. Nützlich überall, wo Fachwissen für die Beschriftung nötig ist (etwa in der Medizin). Verbindet menschliche Expertise effizient mit maschinellem Lernen und ist ein praktischer Hebel, um Datenkosten und Bias-Risiken zugleich zu senken." },
    en: {
      term: "Active Learning",
      short: "A strategy in which the model itself selects which data are most valuable to label, learning more with less effort.",
      long: "Labelling data is often expensive and time-consuming. In active learning, the model deliberately selects the examples it is most uncertain about or would learn most from, and has only these labelled by humans. This achieves comparable or better performance with substantially fewer labelled data. Useful wherever expertise is needed for labelling (e.g. in medicine). It efficiently combines human expertise with machine learning and is a practical lever for reducing data cost and bias risk at once." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["trainingsdaten", "ground-truth", "ueberwacht"] },

  { id: "self-supervised-learning", category: "dl", risk: null,
    tags: ["#SelfSupervised", "#Pretraining", "#Repraesentation"],
    de: {
      term: "Selbstüberwachtes Lernen",
      short: "Lernparadigma, bei dem ein Modell aus unmarkierten Daten lernt, indem es sich seine Trainingsaufgabe selbst erzeugt.",
      long: "Selbstüberwachtes Lernen erzeugt die Lernsignale aus den Daten selbst, ohne menschliche Labels: Ein Sprachmodell sagt das nächste oder ein verdecktes Wort vorher, ein Bildmodell rekonstruiert ausgeblendete Bildteile. So lassen sich riesige Mengen frei verfügbarer, unmarkierter Daten nutzen. Dieses Paradigma ist der Schlüssel hinter modernen Foundation Models und Sprachmodellen und überwindet den Engpass teurer manueller Beschriftung. Es liegt zwischen überwachtem und unüberwachtem Lernen und hat den jüngsten Fortschritt der KI maßgeblich ermöglicht. Grundlegend für das Verständnis, wie heutige große Modelle überhaupt trainiert werden." },
    en: {
      term: "Self-Supervised Learning",
      short: "A learning paradigm in which a model learns from unlabelled data by generating its own training task.",
      long: "Self-supervised learning derives the learning signals from the data themselves, without human labels: a language model predicts the next or a masked word, an image model reconstructs hidden image parts. This makes it possible to use vast amounts of freely available, unlabelled data. This paradigm is the key behind modern foundation models and language models and overcomes the bottleneck of expensive manual labelling. It sits between supervised and unsupervised learning and has substantially enabled the recent progress of AI. Fundamental to understanding how today's large models are trained at all." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["pretraining", "autoencoder", "foundation-model"] },

  { id: "oecd-ki-prinzipien", category: "governance", risk: null,
    tags: ["#OECD", "#International", "#Prinzipien"],
    de: {
      term: "OECD-KI-Prinzipien",
      short: "Erste zwischenstaatlich vereinbarte Leitlinien für vertrauenswürdige KI (2019, überarbeitet 2024), die viele nationale Strategien geprägt haben.",
      long: "Die 2019 verabschiedeten und 2024 aktualisierten OECD-Empfehlungen zur KI formulieren wertebasierte Grundsätze: inklusives Wachstum, menschenzentrierte Werte, Transparenz, Robustheit und Rechenschaft. Sie sind rechtlich nicht bindend, wurden aber von zahlreichen Staaten übernommen und dienten als gemeinsame Referenz für spätere Regelwerke, darunter den EU AI Act. Die Aktualisierung 2024 reagierte auf generative KI (Informationsintegrität, geistiges Eigentum, Sicherheit). Grundlage vieler internationaler Abstimmungen und Ausgangspunkt für die Idee interoperabler, global anschlussfähiger KI-Governance." },
    en: {
      term: "OECD AI Principles",
      short: "The first intergovernmentally agreed guidelines for trustworthy AI (2019, revised 2024) that shaped many national strategies.",
      long: "The OECD AI recommendations, adopted in 2019 and updated in 2024, articulate value-based principles: inclusive growth, human-centred values, transparency, robustness and accountability. They are not legally binding but have been adopted by numerous states and served as a common reference for later frameworks, including the EU AI Act. The 2024 update responded to generative AI (information integrity, intellectual property, security). The basis of many international alignments and the starting point for the idea of interoperable, globally compatible AI governance." },
    links: [ { label: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" } ],
    related: ["oecd-ki-definition", "g7-hiroshima", "trustworthy-ai", "global-partnership-ai", "interoperabilitaet-regulierung"] },

  { id: "oecd-ki-definition", category: "governance", risk: null,
    tags: ["#OECD", "#Definition", "#KI-System"],
    de: {
      term: "OECD-Definition eines KI-Systems",
      short: "International einflussreiche Begriffsbestimmung, die maßgeblich auch die Definition im EU AI Act geprägt hat.",
      long: "Die OECD definiert ein KI-System als maschinengestütztes System, das aus Eingaben Ausgaben wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen ableitet und dabei mit unterschiedlichem Grad an Autonomie und Anpassungsfähigkeit arbeitet. Diese Formulierung wurde bewusst technologieneutral gehalten und diente als Vorlage für die Definition in Art. 3 des EU AI Act. Die Angleichung der Definitionen ist ein wichtiger Baustein internationaler Interoperabilität: Wenn verschiedene Rechtsordnungen denselben Systembegriff verwenden, sinkt der Aufwand für grenzüberschreitend tätige Unternehmen." },
    en: {
      term: "OECD Definition of an AI System",
      short: "An internationally influential definition that substantially shaped the definition in the EU AI Act too.",
      long: "The OECD defines an AI system as a machine-based system that infers, from inputs, outputs such as predictions, content, recommendations or decisions, operating with varying degrees of autonomy and adaptiveness. This formulation was deliberately kept technology-neutral and served as the template for the definition in Art. 3 of the EU AI Act. Aligning definitions is an important building block of international interoperability: when different jurisdictions use the same notion of a system, the burden for cross-border businesses falls." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["oecd-ki-prinzipien", "ki-system", "ki"] },

  { id: "g7-hiroshima", category: "governance", risk: null,
    tags: ["#G7", "#Hiroshima", "#CodeOfConduct"],
    de: {
      term: "G7-Hiroshima-KI-Prozess",
      short: "2023 gestarteter G7-Prozess mit internationalen Leitprinzipien und einem freiwilligen Verhaltenskodex für fortgeschrittene KI-Systeme.",
      long: "Der unter japanischer G7-Präsidentschaft 2023 initiierte Hiroshima-Prozess brachte ein Rahmenwerk mit zwei Kernbausteinen hervor: die \"Internationalen Leitprinzipien für alle KI-Akteure\" und einen \"Internationalen Verhaltenskodex für Organisationen, die fortgeschrittene KI-Systeme entwickeln\". Die Umsetzung, darunter ein Berichtsrahmen (Reporting Framework), wird über die OECD organisiert und über die G7 hinaus verbreitet (\"Friends Group\"). Freiwillig und nicht bindend, aber einflussreich als gemeinsamer Standard führender Industriestaaten. Beispiel für soft-law-basierte internationale Koordination parallel zu verbindlichen Regelwerken wie dem EU AI Act." },
    en: {
      term: "G7 Hiroshima AI Process",
      short: "A G7 process launched in 2023 with international guiding principles and a voluntary code of conduct for advanced AI systems.",
      long: "Initiated under Japan's 2023 G7 presidency, the Hiroshima Process produced a framework with two core components: the \"International Guiding Principles for all AI actors\" and an \"International Code of Conduct for Organisations Developing Advanced AI Systems\". Implementation, including a reporting framework, is organised via the OECD and spread beyond the G7 (a \"Friends Group\"). Voluntary and non-binding but influential as a common standard of leading industrial nations. An example of soft-law-based international coordination alongside binding frameworks such as the EU AI Act." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["oecd-ki-prinzipien", "verhaltenskodex", "frontier-ai-commitments"] },

  { id: "un-ki-resolution", category: "governance", risk: null,
    tags: ["#UN", "#Vereinte Nationen", "#International"],
    de: {
      term: "UN-Resolutionen zu KI",
      short: "Erste Resolutionen der UN-Generalversammlung, die weltweite Grundsätze für sichere, vertrauenswürdige KI und Kapazitätsaufbau festhalten.",
      long: "Am 21. März 2024 verabschiedete die UN-Generalversammlung im Konsens ihre erste Resolution zu \"sicheren, geschützten und vertrauenswürdigen KI-Systemen für nachhaltige Entwicklung\" (über 120 Mitantragsteller). Am 1. Juli 2024 folgte eine von China eingebrachte Resolution zum internationalen Kapazitätsaufbau. Beide sind nicht bindend, markieren aber die Verankerung des Themas auf höchster multilateraler Ebene und betonen die Teilhabe des Globalen Südens. Ergänzt durch weitere UN-Prozesse (Global Digital Compact, wissenschaftlicher Beirat). Ausdruck des Bemühens um eine wirklich globale, nicht nur westlich geprägte KI-Governance." },
    en: {
      term: "UN Resolutions on AI",
      short: "The first UN General Assembly resolutions setting out global principles for safe, trustworthy AI and capacity building.",
      long: "On 21 March 2024, the UN General Assembly adopted by consensus its first resolution on \"safe, secure and trustworthy AI systems for sustainable development\" (over 120 co-sponsors). On 1 July 2024 followed a China-introduced resolution on international capacity building. Both are non-binding but mark the anchoring of the topic at the highest multilateral level and emphasise participation of the Global South. Complemented by further UN processes (Global Digital Compact, scientific advisory body). An expression of efforts towards genuinely global, not merely Western-shaped, AI governance." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["global-digital-compact", "unesco-ki-ethik", "global-partnership-ai", "digitale-kluft"] },

  { id: "global-digital-compact", category: "governance", risk: null,
    tags: ["#UN", "#GDC", "#DigitalCompact"],
    de: {
      term: "Global Digital Compact (GDC)",
      short: "2024 von den UN-Mitgliedstaaten angenommener Rahmen für die digitale Zusammenarbeit, der auch KI-Governance adressiert.",
      long: "Der Global Digital Compact wurde im September 2024 als Anhang zum \"Pakt für die Zukunft\" auf dem UN-Zukunftsgipfel angenommen. Er formuliert gemeinsame Ziele für eine offene, sichere und inklusive digitale Zukunft – darunter die Überbrückung digitaler Gräben, Datenschutz, Menschenrechte im digitalen Raum und die Governance neuer Technologien einschließlich KI. Aus ihm gehen konkrete Folgeschritte hervor, etwa ein internationaler wissenschaftlicher Beirat zu KI und ein globaler Dialog zur KI-Governance im UN-Rahmen. Wichtiger Bezugspunkt für die multilaterale, entwicklungsorientierte Perspektive auf KI." },
    en: {
      term: "Global Digital Compact (GDC)",
      short: "A framework for digital cooperation adopted by UN member states in 2024 that also addresses AI governance.",
      long: "The Global Digital Compact was adopted in September 2024 as an annex to the \"Pact for the Future\" at the UN Summit of the Future. It formulates shared goals for an open, secure and inclusive digital future — including bridging digital divides, data protection, human rights in the digital space and the governance of new technologies including AI. It gives rise to concrete follow-up steps, such as an international scientific advisory body on AI and a global dialogue on AI governance within the UN framework. An important reference point for the multilateral, development-oriented perspective on AI." },
    links: [ { label: "UN GDC", url: "https://www.un.org/global-digital-compact" } ],
    related: ["un-ki-resolution", "unesco-ki-ethik"] },

  { id: "unesco-ki-ethik", category: "ethics", risk: null,
    tags: ["#UNESCO", "#Ethik", "#International"],
    de: {
      term: "UNESCO-Empfehlung zur Ethik der KI",
      short: "2021 angenommener globaler Ethikrahmen für KI – das erste weltweit von nahezu allen Staaten getragene Instrument dieser Art.",
      long: "Die UNESCO-Empfehlung zur Ethik der Künstlichen Intelligenz (2021) wurde von den Mitgliedstaaten angenommen und bündelt Werte und Grundsätze wie Menschenwürde, Menschenrechte, Umweltverträglichkeit, Diversität, Transparenz und menschliche Aufsicht. Sie enthält konkrete Politikempfehlungen und Instrumente zur Selbstbewertung (Readiness Assessment). Als nahezu universell getragenes Instrument hat sie besonderes Gewicht für Länder ohne eigene umfassende KI-Gesetzgebung und für den globalen Wertekonsens. Ergänzt regionale und nationale Regelwerke um eine kulturell breit abgestützte ethische Grundlage." },
    en: {
      term: "UNESCO Recommendation on the Ethics of AI",
      short: "A global ethics framework for AI adopted in 2021 — the first instrument of its kind supported by almost all states worldwide.",
      long: "The UNESCO Recommendation on the Ethics of Artificial Intelligence (2021) was adopted by member states and bundles values and principles such as human dignity, human rights, environmental sustainability, diversity, transparency and human oversight. It contains concrete policy recommendations and self-assessment tools (readiness assessment). As an almost universally supported instrument, it carries particular weight for countries without their own comprehensive AI legislation and for the global values consensus. It complements regional and national frameworks with a culturally broadly based ethical foundation." },
    links: [ { label: "UNESCO AI Ethics", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" } ],
    related: ["un-ki-resolution", "europarat-ki-konvention", "trustworthy-ai", "global-digital-compact"] },

  { id: "europarat-ki-konvention", category: "governance", risk: null,
    tags: ["#Europarat", "#Konvention", "#Menschenrechte"],
    de: {
      term: "Europarat-KI-Konvention",
      short: "Erste völkerrechtlich verbindliche internationale Konvention zu KI (2024), ausgerichtet auf Menschenrechte, Demokratie und Rechtsstaatlichkeit.",
      long: "Die Rahmenkonvention des Europarats über Künstliche Intelligenz und Menschenrechte, Demokratie und Rechtsstaatlichkeit (2024) ist der erste rechtlich bindende internationale Vertrag zu KI. Anders als der EU AI Act, der ein Produktsicherheits- und Marktzugangsregime ist, setzt die Konvention beim Schutz von Grundwerten an und steht auch Nicht-Europaratsstaaten offen (u. a. beteiligten sich USA, Kanada und weitere an der Aushandlung). Sie verpflichtet die Vertragsstaaten, den gesamten KI-Lebenszyklus mit Menschenrechten und demokratischen Prinzipien in Einklang zu bringen. Ihre Wirkung hängt von Ratifizierung und nationaler Umsetzung ab. Wichtige Ergänzung zum eher technischen EU-Ansatz." },
    en: {
      term: "Council of Europe AI Convention",
      short: "The first international convention on AI binding under international law (2024), oriented to human rights, democracy and the rule of law.",
      long: "The Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (2024) is the first legally binding international treaty on AI. Unlike the EU AI Act, which is a product-safety and market-access regime, the Convention starts from protecting fundamental values and is open to non-Council-of-Europe states too (the US, Canada and others participated in the negotiation). It obliges state parties to align the entire AI lifecycle with human rights and democratic principles. Its effect depends on ratification and national implementation. An important complement to the more technical EU approach." },
    links: [ { label: "Council of Europe", url: "https://www.coe.int/en/web/artificial-intelligence" } ],
    related: ["unesco-ki-ethik", "digital-omnibus", "bruessel-effekt"] },

  { id: "global-partnership-ai", category: "governance", risk: null,
    tags: ["#GPAI", "#GlobalPartnership", "#International"],
    de: {
      term: "Global Partnership on AI (GPAI)",
      short: "Internationale Multi-Stakeholder-Initiative, die Regierungen, Wissenschaft, Zivilgesellschaft und Industrie zur verantwortungsvollen KI zusammenbringt.",
      long: "Die 2020 gegründete Global Partnership on Artificial Intelligence (GPAI) fördert die praxisnahe, projektbasierte Zusammenarbeit zu verantwortungsvoller KI über Arbeitsgruppen zu Themen wie verantwortungsvolle KI, Daten-Governance, Zukunft der Arbeit und Innovation. Sie ist eng mit der OECD verzahnt, die die Prinzipienarbeit trägt. GPAI verbindet politische Grundsatzarbeit mit konkreten Anwendungsprojekten und bindet Fachleute jenseits der Regierungen ein. Nicht zu verwechseln mit \"GPAI\" im Sinne des EU AI Act (dort: General-Purpose-AI-Modelle). Baustein des vielschichtigen internationalen Governance-Geflechts." },
    en: {
      term: "Global Partnership on AI (GPAI)",
      short: "An international multi-stakeholder initiative bringing together governments, academia, civil society and industry for responsible AI.",
      long: "Founded in 2020, the Global Partnership on Artificial Intelligence (GPAI) promotes practical, project-based cooperation on responsible AI through working groups on topics such as responsible AI, data governance, the future of work and innovation. It is closely intertwined with the OECD, which carries the principles work. GPAI links policy work with concrete application projects and involves experts beyond governments. Not to be confused with \"GPAI\" in the sense of the EU AI Act (there: general-purpose AI models). A building block of the multi-layered international governance web." },
    links: [ { label: "GPAI", url: "https://gpai.ai/" } ],
    related: ["oecd-ki-prinzipien", "un-ki-resolution", "gpai", "digitale-kluft"] },

  { id: "ai-safety-summits", category: "governance", risk: null,
    tags: ["#AISafetySummit", "#Bletchley", "#International"],
    de: {
      term: "KI-Sicherheitsgipfel (Summit-Reihe)",
      short: "Reihe internationaler Regierungsgipfel zur KI-Sicherheit, begonnen 2023 in Bletchley Park.",
      long: "Die Gipfelreihe begann im November 2023 mit dem AI Safety Summit in Bletchley Park (UK), gefolgt von Seoul (Mai 2024), dem \"AI Action Summit\" in Paris (Februar 2025, Frankreich/Indien) und dem \"AI Impact Summit\" in Neu-Delhi (Februar 2026); ein weiterer Gipfel in Genf ist für 2027 angekündigt. Der Fokus verschob sich von reiner Sicherheit (Bletchley) hin zu Handlung, Anwendung und Inklusion. Die Gipfel brachten gemeinsame Erklärungen und freiwillige Selbstverpflichtungen hervor und etablierten KI-Governance als Thema der Staats- und Regierungschefs. Zentrale Bühne für die Abstimmung zwischen Staaten, Unternehmen und Wissenschaft." },
    en: {
      term: "AI Safety Summits",
      short: "A series of international government summits on AI safety, begun in 2023 at Bletchley Park.",
      long: "The summit series began in November 2023 with the AI Safety Summit at Bletchley Park (UK), followed by Seoul (May 2024), the \"AI Action Summit\" in Paris (February 2025, France/India) and the \"AI Impact Summit\" in New Delhi (February 2026); a further summit in Geneva is announced for 2027. The focus shifted from pure safety (Bletchley) towards action, application and inclusion. The summits produced joint declarations and voluntary commitments and established AI governance as a topic for heads of state and government. A central stage for coordination between states, companies and academia." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["bletchley-erklaerung", "frontier-ai-commitments", "netzwerk-safety-institutes", "existenzielles-risiko"] },

  { id: "bletchley-erklaerung", category: "governance", risk: null,
    tags: ["#Bletchley", "#Erklaerung", "#Frontier"],
    de: {
      term: "Bletchley-Erklärung",
      short: "Erste internationale Regierungserklärung zu den Risiken fortgeschrittener KI (2023), getragen von rund 28 Staaten und der EU.",
      long: "Die auf dem AI Safety Summit in Bletchley Park im November 2023 verabschiedete Erklärung wurde von rund 28 Staaten und der EU unterzeichnet – bemerkenswerterweise auch von China und den USA. Sie benennt gemeinsame Anliegen wie Menschenrechte, Transparenz, Fairness, Rechenschaft und menschliche Aufsicht sowie die Risiken besonders leistungsfähiger \"Frontier\"-Modelle und ruft zu international koordiniertem Handeln auf. Nicht bindend, aber symbolisch bedeutsam als erster breiter Konsens auch über geopolitische Gräben hinweg. Ausgangspunkt der Summit-Reihe und der internationalen KI-Sicherheitskooperation." },
    en: {
      term: "Bletchley Declaration",
      short: "The first international government declaration on the risks of advanced AI (2023), supported by around 28 states and the EU.",
      long: "Adopted at the AI Safety Summit at Bletchley Park in November 2023, the declaration was signed by around 28 states and the EU — notably including China and the US. It names shared concerns such as human rights, transparency, fairness, accountability and human oversight, as well as the risks of especially capable \"frontier\" models, and calls for internationally coordinated action. Non-binding but symbolically significant as the first broad consensus even across geopolitical divides. The starting point of the summit series and of international AI safety cooperation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ai-safety-summits", "frontier-ai-commitments", "systemisches-risiko"] },

  { id: "frontier-ai-commitments", category: "governance", risk: null,
    tags: ["#FrontierAI", "#Seoul", "#Selbstverpflichtung"],
    de: {
      term: "Frontier AI Safety Commitments",
      short: "Freiwillige Selbstverpflichtungen führender KI-Unternehmen (Seoul 2024), Sicherheitsrahmen und Risikoschwellen offenzulegen.",
      long: "Auf dem Seouler Gipfel 2024 verpflichteten sich 16 führende KI-Unternehmen erstmals gemeinsam dazu, Sicherheitsrahmen (Safety Frameworks) zu veröffentlichen, Schwellen für \"nicht tolerierbare\" Risiken zu definieren, vor der Bereitstellung Sicherheitsevaluierungen samt Red-Teaming durchzuführen und Modelle oberhalb ihrer Risikoschwellen nicht einzusetzen. Bemerkenswert war die Bandbreite der Unterzeichner über westliche Firmen hinaus. Freiwillig und ohne Sanktionsmechanismus, aber ein wichtiger Schritt hin zu vergleichbaren, überprüfbaren Sicherheitszusagen der Industrie. Ergänzt staatliche Regulierung um Selbstregulierung der Entwickler." },
    en: {
      term: "Frontier AI Safety Commitments",
      short: "Voluntary commitments by leading AI companies (Seoul 2024) to disclose safety frameworks and risk thresholds.",
      long: "At the Seoul summit in 2024, 16 leading AI companies committed for the first time jointly to publish safety frameworks, define thresholds for \"intolerable\" risks, conduct pre-deployment safety evaluations including red-teaming, and not deploy models above their risk thresholds. Notable was the range of signatories beyond Western firms. Voluntary and without a sanction mechanism, but an important step towards comparable, verifiable safety pledges from industry. Complements state regulation with self-regulation by developers." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ai-safety-summits", "bletchley-erklaerung", "red-teaming-vs-blue", "g7-hiroshima"] },

  { id: "netzwerk-safety-institutes", category: "governance", risk: null,
    tags: ["#AISafetyInstitute", "#Netzwerk", "#Evaluierung"],
    de: {
      term: "Netzwerk der KI-Sicherheitsinstitute",
      short: "Internationaler Verbund staatlicher Institute, die die Fähigkeiten und Risiken fortgeschrittener KI-Modelle wissenschaftlich bewerten.",
      long: "Seit 2023 richteten mehrere Staaten eigene KI-Sicherheits- bzw. -Sicherheitsinstitute ein (etwa im Vereinigten Königreich und in den USA), die fortgeschrittene Modelle testen und bewerten. Ende 2024 schlossen sie sich zu einem internationalen Netzwerk zusammen, um Methoden, Erkenntnisse und Evaluierungsstandards abzustimmen. Ziel: eine gemeinsame wissenschaftliche Grundlage für die Bewertung von Modellfähigkeiten und -risiken schaffen, die nationale Regulierung informiert. Beispiel für technisch-institutionelle statt rein rechtlicher internationaler Zusammenarbeit. Ergänzt Gipfelerklärungen um konkrete, überprüfbare Prüfkapazität." },
    en: {
      term: "Network of AI Safety Institutes",
      short: "An international network of state institutes that scientifically assess the capabilities and risks of advanced AI models.",
      long: "Since 2023, several states established their own AI safety or security institutes (e.g. in the United Kingdom and the United States) that test and evaluate advanced models. In late 2024 they joined into an international network to align methods, findings and evaluation standards. Aim: to create a shared scientific basis for assessing model capabilities and risks that informs national regulation. An example of technical-institutional rather than purely legal international cooperation. Complements summit declarations with concrete, verifiable testing capacity." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ai-security-institute", "ai-safety-summits", "modellbewertung", "wissenschaftliches-gremium"] },

  { id: "usa-ki-regulierung", category: "governance", risk: null,
    tags: ["#USA", "#Regulierung", "#International"],
    de: {
      term: "KI-Regulierung in den USA",
      short: "Dezentraler, sektor- und bundesstaatengetriebener Ansatz ohne umfassendes bundesweites KI-Gesetz.",
      long: "Die USA verfügen über kein umfassendes bundesweites KI-Gesetz nach EU-Vorbild. Stattdessen greifen bestehende Sektorgesetze, Vorgaben einzelner Behörden (etwa der Handelsaufsicht) sowie präsidiale Anordnungen (Executive Orders), deren Ausrichtung sich mit der Regierung ändert. Zusätzlich entsteht ein Flickenteppich an Gesetzen einzelner Bundesstaaten. Die Bundesebene betont zuletzt Innovationsförderung und wendet sich gegen als übermäßig empfundene Regulierung; zugleich rücken nationale Sicherheitsaspekte fortgeschrittener Modelle stärker in den Blick. Prägend für die transatlantische Debatte über den richtigen Grad an KI-Regulierung." },
    en: {
      term: "AI Regulation in the United States",
      short: "A decentralised, sector- and state-driven approach without a comprehensive federal AI law.",
      long: "The US has no comprehensive federal AI law along EU lines. Instead, existing sectoral laws, guidance from individual agencies (e.g. the trade regulator) and presidential executive orders apply, whose orientation changes with the administration. In addition, a patchwork of individual state laws is emerging. The federal level has lately emphasised fostering innovation and opposed what it views as excessive regulation; at the same time, national security aspects of advanced models are coming more into focus. Formative for the transatlantic debate about the right degree of AI regulation." },
    links: [ { label: "NIST AI", url: "https://www.nist.gov/artificial-intelligence" } ],
    related: ["us-executive-orders-ki", "nist-ai-rmf", "us-bundesstaaten-ki", "federal-preemption-ki", "uk-ki-regulierung"] },

  { id: "us-executive-orders-ki", category: "governance", risk: null,
    tags: ["#USA", "#ExecutiveOrder", "#Politik"],
    de: {
      term: "US-Executive-Orders zu KI",
      short: "Präsidiale Anordnungen, die die KI-Politik der US-Bundesebene steuern und sich mit dem Regierungswechsel deutlich verschoben haben.",
      long: "Executive Orders sind Anordnungen des US-Präsidenten an die Bundesverwaltung. Eine umfassende Anordnung der Vorgängerregierung (2023) zu Sicherheit und Aufsicht wurde nach dem Regierungswechsel aufgehoben und durch eine innovationsorientierte Linie ersetzt. Nachfolgende Anordnungen zielten unter anderem darauf, bundesstaatliche KI-Gesetze zurückzudrängen (Frage der bundesrechtlichen Vorrangwirkung) und – in einer Anordnung von 2026 – auf Cybersicherheit und die freiwillige staatliche Prüfung besonders leistungsfähiger \"Frontier\"-Modelle vor deren Freigabe. Anschauliches Beispiel dafür, wie stark KI-Politik ohne festes Gesetz von der jeweiligen Regierung abhängt." },
    en: {
      term: "US Executive Orders on AI",
      short: "Presidential orders steering federal AI policy that shifted markedly with the change of administration.",
      long: "Executive orders are directions from the US president to the federal administration. A comprehensive order by the previous administration (2023) on safety and oversight was rescinded after the change of government and replaced by an innovation-oriented line. Subsequent orders aimed, among other things, to push back state AI laws (the question of federal preemption) and — in a 2026 order — at cybersecurity and voluntary government review of especially capable \"frontier\" models before their release. A vivid example of how strongly AI policy depends on the respective administration in the absence of a fixed law." },
    links: [ { label: "NIST AI", url: "https://www.nist.gov/artificial-intelligence" } ],
    related: ["usa-ki-regulierung", "federal-preemption-ki", "compute-governance", "us-bundesstaaten-ki"] },

  { id: "nist-ai-rmf", category: "governance", risk: null,
    tags: ["#NIST", "#Framework", "#Risikomanagement"],
    de: {
      term: "NIST AI Risk Management Framework",
      short: "Freiwilliges US-Rahmenwerk zum Umgang mit KI-Risiken, international breit als Referenz genutzt.",
      long: "Das vom US-Normungsinstitut NIST 2023 veröffentlichte AI Risk Management Framework (AI RMF) bietet einen strukturierten, freiwilligen Ansatz, um KI-Risiken zu erkennen, zu bewerten und zu steuern. Es gliedert sich in vier Kernfunktionen (Govern, Map, Measure, Manage) und wurde um Leitlinien für generative KI ergänzt. Obwohl nicht verbindlich, dient es vielen Organisationen weltweit – auch außerhalb der USA – als praktisches Werkzeug und ist teils mit dem EU-Ansatz und ISO-Normen (etwa ISO/IEC 42001) anschlussfähig. Beispiel dafür, wie freiwillige Standards faktisch prägende Wirkung entfalten können." },
    en: {
      term: "NIST AI Risk Management Framework",
      short: "A voluntary US framework for managing AI risks, widely used internationally as a reference.",
      long: "The AI Risk Management Framework (AI RMF), published by the US standards institute NIST in 2023, offers a structured, voluntary approach to identifying, assessing and managing AI risks. It is organised into four core functions (Govern, Map, Measure, Manage) and was supplemented with guidance for generative AI. Although non-binding, it serves many organisations worldwide — including outside the US — as a practical tool and is partly compatible with the EU approach and ISO standards (e.g. ISO/IEC 42001). An example of how voluntary standards can in fact have a formative effect." },
    links: [ { label: "NIST AI RMF", url: "https://www.nist.gov/itl/ai-risk-management-framework" } ],
    related: ["usa-ki-regulierung", "ai-governance", "risikomanagementsystem"] },

  { id: "us-bundesstaaten-ki", category: "governance", risk: null,
    tags: ["#USA", "#Bundesstaaten", "#Flickenteppich"],
    de: {
      term: "KI-Gesetze der US-Bundesstaaten",
      short: "Wachsender Flickenteppich einzelstaatlicher KI-Regeln, da auf Bundesebene ein umfassendes Gesetz fehlt.",
      long: "Mangels eines umfassenden Bundesgesetzes regeln zunehmend einzelne US-Bundesstaaten KI selbst. Beispiele betreffen automatisierte Entscheidungen und Diskriminierung, Transparenz und Kennzeichnung generierter Inhalte oder Anforderungen an sehr große Anbieter. Dieser \"Flickenteppich\" erschwert die Compliance für landesweit tätige Unternehmen und ist Gegenstand politischer Auseinandersetzung: Die Bundesebene versucht, uneinheitliche oder als übermäßig empfundene Landesgesetze zurückzudrängen (Vorrangwirkung), während Bundesstaaten auf ihre Zuständigkeit verweisen. Kontrast zum einheitlichen, horizontalen Ansatz des EU AI Act." },
    en: {
      term: "US State AI Laws",
      short: "A growing patchwork of state-level AI rules, given the absence of a comprehensive federal law.",
      long: "In the absence of a comprehensive federal law, individual US states increasingly regulate AI themselves. Examples concern automated decisions and discrimination, transparency and labelling of generated content, or requirements for very large providers. This \"patchwork\" complicates compliance for nationally operating companies and is the subject of political dispute: the federal level seeks to push back inconsistent or allegedly excessive state laws (preemption), while states point to their competence. A contrast to the uniform, horizontal approach of the EU AI Act." },
    links: [ { label: "NIST AI", url: "https://www.nist.gov/artificial-intelligence" } ],
    related: ["usa-ki-regulierung", "federal-preemption-ki", "us-executive-orders-ki"] },

  { id: "federal-preemption-ki", category: "governance", risk: null,
    tags: ["#USA", "#Preemption", "#Foederalismus"],
    de: {
      term: "Bundesrechtliche Vorrangwirkung (Preemption)",
      short: "US-Debatte, ob und wie bundesweite Vorgaben widersprechende KI-Gesetze einzelner Bundesstaaten verdrängen können.",
      long: "Preemption bezeichnet im US-Verfassungsrecht den Vorrang von Bundesrecht vor entgegenstehendem Landesrecht. In der KI-Politik ist umstritten, ob die Bundesebene die wachsende Zahl einzelstaatlicher KI-Gesetze zugunsten eines einheitlichen nationalen Rahmens zurückdrängen darf – etwa über Anordnungen, Förderbedingungen oder ein künftiges Bundesgesetz. Befürworter betonen Rechtssicherheit und Wettbewerbsfähigkeit, Kritiker den Verlust bundesstaatlicher Schutzstandards (etwa beim Kinderschutz). Der Ausgang wird voraussichtlich durch langwierige Gerichtsverfahren geklärt. Ein prägendes Strukturmerkmal der US-Debatte ohne Entsprechung im EU-System." },
    en: {
      term: "Federal Preemption (of State AI Laws)",
      short: "A US debate on whether and how federal rules can displace conflicting AI laws of individual states.",
      long: "In US constitutional law, preemption denotes the precedence of federal law over conflicting state law. In AI policy it is contested whether the federal level may push back the growing number of state AI laws in favour of a uniform national framework — e.g. via orders, funding conditions or a future federal law. Proponents emphasise legal certainty and competitiveness, critics the loss of state protection standards (e.g. in child safety). The outcome is likely to be settled through prolonged litigation. A defining structural feature of the US debate with no equivalent in the EU system." },
    links: [ { label: "NIST AI", url: "https://www.nist.gov/artificial-intelligence" } ],
    related: ["us-bundesstaaten-ki", "us-executive-orders-ki", "usa-ki-regulierung"] },

  { id: "china-ki-regulierung", category: "governance", risk: null,
    tags: ["#China", "#Regulierung", "#International"],
    de: {
      term: "KI-Regulierung in China",
      short: "Regelung durch viele gezielte, aufeinanderfolgende Einzelvorschriften statt eines einzigen umfassenden Gesetzes.",
      long: "China reguliert KI über eine Vielzahl gezielter, rasch erlassener Einzelregelungen, die jeweils ein konkretes Problem adressieren (Empfehlungsalgorithmen, Deep Synthesis, generative KI, Kennzeichnung). Federführend ist die Cyberspace-Verwaltung (CAC). Dieser iterative Ansatz erlaubt schnelles Nachsteuern, verlangt Anbietern aber, ein bewegliches Geflecht vieler Vorschriften zu verfolgen. Kennzeichnend sind Registrierungs- und Sicherheitsprüfpflichten, Inhaltskontrolle mit Bindung an staatlich gesetzte Werte sowie ein strategisches Ziel der KI-Führerschaft. Ein umfassendes nationales KI-Gesetz war Mitte 2026 noch ein Entwurf. Kontrastmodell zum horizontalen, grundrechtszentrierten EU-Ansatz." },
    en: {
      term: "AI Regulation in China",
      short: "Regulation through many targeted, successive individual rules rather than a single comprehensive law.",
      long: "China regulates AI via numerous targeted, rapidly issued individual rules, each addressing a concrete problem (recommendation algorithms, deep synthesis, generative AI, labelling). The Cyberspace Administration (CAC) takes the lead. This iterative approach allows swift adjustment but requires providers to track a moving web of many rules. Characteristic are registration and security-assessment duties, content control tied to state-set values, and a strategic goal of AI leadership. A comprehensive national AI law was still a draft in mid-2026. A contrast model to the horizontal, fundamental-rights-centred EU approach." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["cac", "china-genai-massnahmen", "china-kennzeichnung", "china-algorithmus-registrierung"] },

  { id: "cac", category: "governance", risk: null,
    tags: ["#China", "#CAC", "#Behoerde"],
    de: {
      term: "Cyberspace Administration of China (CAC)",
      short: "Zentrale chinesische Aufsichtsbehörde für Internet, Daten und KI und Motor der meisten KI-Vorschriften.",
      long: "Die Cyberspace Administration of China (CAC) ist die maßgebliche Regulierungs- und Aufsichtsbehörde für den digitalen Raum in China. Sie ist federführend bei nahezu allen zentralen KI-Regelungen – von den Vorschriften zu Empfehlungsalgorithmen über Deep Synthesis bis zu den Kennzeichnungspflichten für generierte Inhalte – und führt Registrierungen von Algorithmen und Diensten sowie Sicherheitsprüfungen durch. Mehrere weitere Ministerien wirken mit, doch die CAC ist der Dreh- und Angelpunkt. Funktional in etwa vergleichbar mit einer Kombination aus Datenschutz-, Medien- und Digitalaufsicht, mit weitreichenden Befugnissen zur Inhaltskontrolle." },
    en: {
      term: "Cyberspace Administration of China (CAC)",
      short: "China's central supervisory authority for the internet, data and AI, and the driver of most AI rules.",
      long: "The Cyberspace Administration of China (CAC) is the principal regulatory and supervisory authority for the digital space in China. It leads on almost all central AI rules — from the provisions on recommendation algorithms through deep synthesis to the labelling duties for generated content — and conducts registrations of algorithms and services as well as security assessments. Several other ministries participate, but the CAC is the pivot. Functionally roughly comparable to a combination of data-protection, media and digital supervision, with far-reaching powers of content control." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["china-ki-regulierung", "china-algorithmus-registrierung", "china-deep-synthesis", "china-genai-massnahmen"] },

  { id: "china-genai-massnahmen", category: "governance", risk: null,
    tags: ["#China", "#GenerativeAI", "#Massnahmen"],
    de: {
      term: "Chinas Regeln für generative KI",
      short: "Weltweit eine der ersten spezifischen Regelungen für generative KI-Dienste (in Kraft seit August 2023).",
      long: "Die \"Interim-Maßnahmen für die Verwaltung generativer KI-Dienste\" traten im August 2023 in Kraft und waren eine der ersten spezifischen Regelungen weltweit für generative KI. Sie verpflichten Anbieter unter anderem dazu, Trainingsdaten und Modelle aus rechtmäßigen Quellen zu beziehen, geistiges Eigentum und Personendaten zu achten, Inhalte zu moderieren und rechtswidrige Inhalte rasch zu entfernen. Zudem müssen bestimmte Dienste mit Wirkung auf die öffentliche Meinung Sicherheitsprüfungen durchlaufen und sich registrieren. Anbieter gelten als \"Inhalteproduzenten\" und tragen entsprechende Verantwortung. Prägend für den chinesischen Regulierungsstil aus Innovation und Kontrolle." },
    en: {
      term: "China's Generative AI Rules",
      short: "One of the world's first specific regulations for generative AI services (in force since August 2023).",
      long: "The \"Interim Measures for the Management of Generative AI Services\" took effect in August 2023 and were one of the first specific regulations worldwide for generative AI. They oblige providers, among other things, to source training data and models from lawful sources, respect intellectual property and personal data, moderate content and promptly remove illegal content. In addition, certain services with an effect on public opinion must undergo security assessments and register. Providers count as \"content producers\" and bear corresponding responsibility. Formative for the Chinese regulatory style of innovation plus control." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["china-ki-regulierung", "china-deep-synthesis", "cac"] },

  { id: "china-deep-synthesis", category: "governance", risk: null,
    tags: ["#China", "#DeepSynthesis", "#Deepfake"],
    de: {
      term: "Deep-Synthesis-Vorschriften (China)",
      short: "Chinesische Regeln (in Kraft seit 2023) für synthetische Medien wie Deepfakes, mit Kennzeichnungs- und Einwilligungspflichten.",
      long: "Die Vorschriften zur Verwaltung von \"Deep Synthesis\"-Diensten regeln die Erzeugung und Bearbeitung synthetischer Inhalte – Gesichtstausch, Stimmklonen, generierte Bilder, Audio und Video. Kernpflichten: Registrierung der Anbieter, dauerhafte Kennzeichnung synthetischer Inhalte (Wasserzeichen und Metadaten), Echtnamen-Verifizierung der Erstellenden, Einwilligung der abgebildeten Personen sowie Verbot rechtswidriger Inhalte. China regulierte damit Deepfakes früher und strenger als viele westliche Staaten. Sachlich verwandt mit den Transparenzpflichten des EU AI Act (Art. 50), jedoch stärker auf Identifizierbarkeit und staatliche Kontrolle ausgerichtet." },
    en: {
      term: "Deep Synthesis Provisions (China)",
      short: "Chinese rules (in force since 2023) for synthetic media such as deepfakes, with labelling and consent duties.",
      long: "The provisions on managing \"deep synthesis\" services govern the generation and editing of synthetic content — face swapping, voice cloning, generated images, audio and video. Core duties: registration of providers, permanent labelling of synthetic content (watermarks and metadata), real-name verification of creators, consent of depicted persons, and prohibition of illegal content. China thereby regulated deepfakes earlier and more strictly than many Western states. Substantively related to the transparency duties of the EU AI Act (Art. 50), but more oriented towards identifiability and state control." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["china-kennzeichnung", "deepfake", "china-genai-massnahmen", "cac"] },

  { id: "china-kennzeichnung", category: "governance", risk: null,
    tags: ["#China", "#Kennzeichnung", "#Labeling"],
    de: {
      term: "Chinas Kennzeichnungsregeln für KI-Inhalte",
      short: "Seit September 2025 verbindliche Pflicht, KI-generierte Inhalte sichtbar und maschinenlesbar zu kennzeichnen.",
      long: "Die \"Maßnahmen zur Kennzeichnung KI-generierter/synthetischer Inhalte\" traten am 1. September 2025 in Kraft, gestützt auf einen verbindlichen nationalen Standard. Sie verlangen zwei Arten von Kennzeichen: explizite (für Menschen sichtbare oder hörbare Hinweise) und implizite (in Metadaten eingebettete, maschinenlesbare Markierungen). Verbreitungsplattformen müssen KI-Inhalte erkennen, als bestätigt, möglich oder vermutet einstufen und entsprechend kennzeichnen. China zählt damit zu den Vorreitern verpflichtender Herkunftskennzeichnung. Inhaltlich vergleichbar mit den ab 2026 greifenden Transparenz- und Kennzeichnungspflichten des EU AI Act, im Detail jedoch strenger und stärker durchsetzungsorientiert." },
    en: {
      term: "China's Labelling Rules for AI Content",
      short: "A binding duty since September 2025 to label AI-generated content both visibly and machine-readably.",
      long: "The \"Measures for Labelling AI-Generated/Synthetic Content\" took effect on 1 September 2025, backed by a mandatory national standard. They require two kinds of label: explicit (indicators visible or audible to humans) and implicit (machine-readable markers embedded in metadata). Distribution platforms must detect AI content, classify it as confirmed, possible or suspected, and label it accordingly. China is thereby among the pioneers of mandatory provenance labelling. Substantively comparable to the transparency and labelling duties of the EU AI Act applying from 2026, but stricter in detail and more enforcement-oriented." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["china-deep-synthesis", "wasserzeichen", "transparenzpflichten", "china-ki-regulierung"] },

  { id: "china-algorithmus-registrierung", category: "governance", risk: null,
    tags: ["#China", "#Algorithmus", "#Registrierung"],
    de: {
      term: "Algorithmus-Registrierung (China)",
      short: "Pflicht, bestimmte Algorithmen – etwa Empfehlungssysteme – bei der Behörde zu registrieren und offenzulegen.",
      long: "Bereits die Vorschriften zu Empfehlungsalgorithmen (in Kraft seit 2022) führten eine Registrierungspflicht für Algorithmen ein, die das Informationsumfeld prägen. Anbieter müssen ihre Algorithmen bei der CAC anmelden (Filing), Grundangaben offenlegen und Nutzern gewisse Kontrollmöglichkeiten einräumen – etwa das Abschalten personalisierter Empfehlungen. Die Behörde führt ein Register angemeldeter Algorithmen und Dienste. Dieses Instrument verschafft dem Staat Einblick in und Einfluss auf zentrale Meinungs- und Marktmechanismen. Ein im internationalen Vergleich ungewöhnlich weitreichender, vorab ansetzender Kontrollansatz, der über die eher ergebnisorientierte EU-Regulierung hinausgeht." },
    en: {
      term: "Algorithm Registration (China)",
      short: "A duty to register and disclose certain algorithms — e.g. recommender systems — with the authority.",
      long: "The provisions on recommendation algorithms (in force since 2022) already introduced a registration duty for algorithms that shape the information environment. Providers must file their algorithms with the CAC, disclose basic information and grant users certain controls — e.g. switching off personalised recommendations. The authority maintains a register of filed algorithms and services. This instrument gives the state insight into and influence over central opinion and market mechanisms. An unusually far-reaching, ex-ante control approach by international comparison, going beyond the more outcome-oriented EU regulation." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["cac", "empfehlungssystem", "china-ki-regulierung"] },

  { id: "uk-ki-regulierung", category: "governance", risk: null,
    tags: ["#UK", "#ProInnovation", "#International"],
    de: {
      term: "KI-Regulierung im Vereinigten Königreich",
      short: "Innovationsfreundlicher Ansatz ohne eigenes KI-Gesetz, der auf bestehende Sektorregulierer und Grundsätze setzt.",
      long: "Das Vereinigte Königreich hat bewusst kein umfassendes KI-Gesetz nach EU-Vorbild erlassen. Ein Weißbuch von 2023 setzte auf einen \"pro-innovation\"-Ansatz: fünf sektorübergreifende Grundsätze (Sicherheit, Transparenz, Fairness, Rechenschaft, Anfechtbarkeit), die von bestehenden Regulierern in ihren jeweiligen Bereichen angewandt werden (Datenschutz-, Finanz-, Medien-, Medizinprodukteaufsicht). Eine koordinierende Regierungsstelle gibt die Richtung vor, ohne selbst zu vollstrecken. Ein eigenes KI-Gesetz für besonders leistungsfähige Modelle wurde erwogen, war aber Mitte 2026 nicht verabschiedet. Bewusster Gegenentwurf zum umfassenden EU-Regime." },
    en: {
      term: "AI Regulation in the United Kingdom",
      short: "An innovation-friendly approach without a dedicated AI law, relying on existing sector regulators and principles.",
      long: "The United Kingdom has deliberately not enacted a comprehensive AI law along EU lines. A 2023 white paper favoured a \"pro-innovation\" approach: five cross-sector principles (safety, transparency, fairness, accountability, contestability) applied by existing regulators in their respective areas (data protection, finance, media, medical devices). A coordinating government body sets direction without enforcing itself. A dedicated AI law for especially capable models was considered but not adopted as of mid-2026. A deliberate counter-model to the comprehensive EU regime." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ai-security-institute", "duaa", "usa-ki-regulierung"] },

  { id: "ai-security-institute", category: "governance", risk: null,
    tags: ["#UK", "#AISI", "#Evaluierung"],
    de: {
      term: "AI Security Institute (UK)",
      short: "Staatliches britisches Institut zur Bewertung der Fähigkeiten und Risiken fortgeschrittener KI-Modelle.",
      long: "Das 2023 als \"AI Safety Institute\" gegründete und Anfang 2025 in \"AI Security Institute\" umbenannte Institut evaluiert besonders leistungsfähige Modelle auf sicherheitsrelevante Fähigkeiten und Risiken. Die Umbenennung signalisierte eine Akzentverschiebung von \"Sicherheit im Sinne von Safety\" hin zu Sicherheitsaspekten und Wachstum. Das Institut führt eigene Modellevaluierungen durch, informiert die Politik und wirkt im internationalen Netzwerk der Sicherheitsinstitute mit. Es verkörpert den britischen Ansatz, KI zunächst über Fachexpertise und Evaluierung statt über ein umfassendes Gesetz zu steuern. Vorbild für ähnliche Institute in anderen Staaten." },
    en: {
      term: "AI Security Institute (UK)",
      short: "A UK state institute assessing the capabilities and risks of advanced AI models.",
      long: "Founded in 2023 as the \"AI Safety Institute\" and renamed \"AI Security Institute\" in early 2025, the institute evaluates especially capable models for safety-relevant capabilities and risks. The renaming signalled a shift of emphasis from \"safety\" towards security aspects and growth. The institute conducts its own model evaluations, informs policy and participates in the international network of safety institutes. It embodies the UK approach of steering AI first through expertise and evaluation rather than a comprehensive law. A model for similar institutes in other states." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["uk-ki-regulierung", "netzwerk-safety-institutes", "modellbewertung"] },

  { id: "duaa", category: "governance", risk: null,
    tags: ["#UK", "#Datenschutz", "#ADM"],
    de: {
      term: "Data (Use and Access) Act 2025 (UK)",
      short: "Britisches Datenrecht, das unter anderem die Regeln für automatisierte Entscheidungen neu fasst.",
      long: "Der Data (Use and Access) Act 2025 (DUAA) reformierte das britische Datenschutzrecht nach dem Brexit. Für KI besonders relevant: Er ersetzte die bisherige Vorschrift zu automatisierten Einzelentscheidungen durch ein neues Regelwerk, das solche Entscheidungen unter erweiterten Bedingungen erlaubt, zugleich aber Schutzmaßnahmen verlangt (etwa wirksame menschliche Überprüfung und Transparenz). Er bildet damit im UK das Gegenstück zu den KI-relevanten Teilen der DSGVO. Für Unternehmen mit Bezug zu EU und UK bedeutet dies zwei parallel zu beachtende Datenschutzregime. Beispiel dafür, dass KI-Governance oft über das allgemeine Datenrecht statt über spezielle KI-Gesetze wirkt." },
    en: {
      term: "Data (Use and Access) Act 2025 (UK)",
      short: "UK data law that, among other things, recasts the rules on automated decisions.",
      long: "The Data (Use and Access) Act 2025 (DUAA) reformed UK data protection law after Brexit. Particularly relevant for AI: it replaced the previous provision on solely automated decisions with a new regime that permits such decisions under expanded conditions while requiring safeguards (e.g. effective human review and transparency). It thus forms the UK counterpart to the AI-relevant parts of the GDPR. For businesses connected to both the EU and UK, this means two data-protection regimes to observe in parallel. An example that AI governance often operates through general data law rather than dedicated AI laws." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["uk-ki-regulierung", "dsgvo-schnittstelle"] },

  { id: "kanada-aida", category: "governance", risk: null,
    tags: ["#Kanada", "#AIDA", "#International"],
    de: {
      term: "Kanada: AIDA",
      short: "Kanadischer Gesetzesvorschlag für einen risikobasierten KI-Rahmen, dessen Weg sich als schwierig erwies.",
      long: "Der Artificial Intelligence and Data Act (AIDA) war als Teil eines größeren Digitalgesetzes Kanadas geplant und verfolgte einen risikobasierten Ansatz mit besonderem Blick auf \"Systeme mit hoher Wirkung\" (high-impact systems). Das Vorhaben kam jedoch nicht wie ursprünglich vorgesehen zum Abschluss und musste den parlamentarischen Prozess erneut durchlaufen, sodass Kanada zwischenzeitlich auf einen freiwilligen Verhaltenskodex für generative KI setzte. AIDA illustriert die Schwierigkeiten, umfassende KI-Gesetzgebung zu verabschieden, und den weltweiten Trend, verbindliche Regeln mit freiwilligen Übergangsinstrumenten zu überbrücken. Beispiel für die Dynamik jenseits von EU, USA und China." },
    en: {
      term: "Canada: AIDA",
      short: "A Canadian legislative proposal for a risk-based AI framework whose path proved difficult.",
      long: "The Artificial Intelligence and Data Act (AIDA) was planned as part of a larger Canadian digital bill and pursued a risk-based approach with particular attention to \"high-impact systems\". However, the effort did not conclude as originally envisaged and had to go through the parliamentary process again, so Canada relied in the interim on a voluntary code of conduct for generative AI. AIDA illustrates the difficulties of adopting comprehensive AI legislation and the global trend of bridging binding rules with voluntary transitional instruments. An example of the dynamics beyond the EU, US and China." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["suedkorea-ki-gesetz", "brasilien-ki-gesetz", "verhaltenskodex"] },

  { id: "suedkorea-ki-gesetz", category: "governance", risk: null,
    tags: ["#Suedkorea", "#BasicAct", "#International"],
    de: {
      term: "Südkorea: KI-Grundgesetz",
      short: "Umfassendes südkoreanisches KI-Rahmengesetz, eines der ersten seiner Art in Asien.",
      long: "Südkorea verabschiedete ein umfassendes KI-Rahmengesetz (oft als \"AI Basic Act\" bezeichnet), das Innovation fördern und zugleich Grundregeln für vertrauenswürdige KI setzen soll. Es adressiert unter anderem Transparenz für KI-generierte Inhalte, besondere Sorgfalt bei wirkungsstarken (\"high-impact\") Systemen und den Aufbau staatlicher Förder- und Aufsichtsstrukturen. Damit gehört Südkorea zu den ersten Staaten Asiens mit einem eigenständigen, horizontalen KI-Gesetz und positioniert sich zwischen dem umfassenden EU-Ansatz und leichteren Modellen. Beispiel für die zunehmende Zahl nationaler Rahmengesetze weltweit." },
    en: {
      term: "South Korea: AI Basic Act",
      short: "A comprehensive South Korean AI framework law, one of the first of its kind in Asia.",
      long: "South Korea adopted a comprehensive AI framework law (often called the \"AI Basic Act\") intended to foster innovation while setting basic rules for trustworthy AI. It addresses, among other things, transparency for AI-generated content, particular care for high-impact systems, and the build-up of state support and oversight structures. South Korea is thereby among the first states in Asia with a standalone, horizontal AI law, positioning itself between the comprehensive EU approach and lighter models. An example of the growing number of national framework laws worldwide." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["kanada-aida", "brasilien-ki-gesetz"] },

  { id: "brasilien-ki-gesetz", category: "governance", risk: null,
    tags: ["#Brasilien", "#GlobalSouth", "#International"],
    de: {
      term: "Brasilien: KI-Gesetzgebung",
      short: "Brasilianischer, an europäischen Vorbildern orientierter Gesetzgebungsprozess für einen risikobasierten KI-Rahmen.",
      long: "Brasilien arbeitet an einem umfassenden, risikobasierten KI-Rechtsrahmen, der in Teilen dem europäischen Modell ähnelt: Risikoklassen, besondere Pflichten für hochriskante Anwendungen, Betroffenenrechte und eine Aufsichtsstruktur. Der Prozess durchlief mehrere Entwürfe und parlamentarische Stufen. Als größte Volkswirtschaft Lateinamerikas hat Brasilien Signalwirkung für die Region und den Globalen Süden und bringt sich zugleich aktiv in multilaterale Foren ein. Beispiel dafür, wie der \"Brüssel-Effekt\" – die Ausstrahlung des EU-Regelwerks – auch außerhalb Europas Gesetzgebung prägt, ohne sie eins zu eins zu kopieren." },
    en: {
      term: "Brazil: AI Legislation",
      short: "A Brazilian legislative process for a risk-based AI framework oriented towards European models.",
      long: "Brazil is working on a comprehensive, risk-based AI legal framework that in parts resembles the European model: risk classes, special duties for high-risk applications, rights of affected persons and an oversight structure. The process went through several drafts and parliamentary stages. As Latin America's largest economy, Brazil has signalling effect for the region and the Global South while actively engaging in multilateral fora. An example of how the \"Brussels effect\" — the radiating influence of the EU framework — shapes legislation outside Europe too, without copying it one-to-one." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["bruessel-effekt", "suedkorea-ki-gesetz", "kanada-aida"] },

  { id: "digital-omnibus", category: "ai-act-core", risk: null,
    tags: ["#DigitalOmnibus", "#AIAct", "#Vereinfachung"],
    de: {
      term: "Digital Omnibus (KI)",
      short: "EU-Gesetzespaket von 2025/2026, das den AI Act gezielt vereinfacht und wichtige Fristen verschiebt.",
      long: "Der von der Kommission im November 2025 vorgeschlagene \"Digital Omnibus\" bündelt Vereinfachungen mehrerer Digitalgesetze. Für den AI Act brachte die politische Einigung von Mai 2026 vor allem eine Verschiebung der Hochrisiko-Pflichten: für eigenständige Anhang-III-Systeme auf den 2. Dezember 2027, für in Produkte eingebettete Anhang-I-Systeme auf den 2. August 2028. Zugleich wurde eine neue verbotene Praxis ergänzt (KI zur Erzeugung nicht einvernehmlicher intimer Bilddarstellungen und von Missbrauchsmaterial), die Kennzeichnungspflicht für Alt-Systeme angepasst und die Rolle des AI Office gestärkt. Die Grundarchitektur des AI Act – Risikoklassen, GPAI-Regeln, Transparenzpflichten – blieb unverändert. Wichtigste Aktualisierung des AI Act seit seinem Inkrafttreten." },
    en: {
      term: "Digital Omnibus (AI)",
      short: "An EU legislative package of 2025/2026 that targetedly simplifies the AI Act and postpones key deadlines.",
      long: "Proposed by the Commission in November 2025, the \"Digital Omnibus\" bundles simplifications of several digital laws. For the AI Act, the political agreement of May 2026 brought above all a postponement of the high-risk obligations: for standalone Annex III systems to 2 December 2027, and for Annex I systems embedded in products to 2 August 2028. At the same time a new prohibited practice was added (AI generating non-consensual intimate imagery and abuse material), the labelling duty for legacy systems adjusted and the role of the AI Office strengthened. The core architecture of the AI Act — risk classes, GPAI rules, transparency duties — remained unchanged. The most important update to the AI Act since it entered into force." },
    links: [ { label: "AI Act (EU)", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" } ],
    related: ["europarat-ki-konvention", "hochrisiko-ki", "manipulative-praktiken", "fristen-anwendung", "verbotene-praktiken"] },

  { id: "bruessel-effekt", category: "governance", risk: null,
    tags: ["#BrusselsEffect", "#EU", "#Regulierung"],
    de: {
      term: "Brüssel-Effekt",
      short: "Die Tendenz, dass EU-Regeln faktisch zum weltweiten Standard werden, weil Unternehmen sie global einheitlich anwenden.",
      long: "Der \"Brüssel-Effekt\" beschreibt, wie die EU über ihren großen Binnenmarkt regulatorische Standards setzt, die weit über Europa hinaus wirken: Unternehmen richten Produkte und Prozesse oft weltweit an den strengsten (EU-)Anforderungen aus, weil getrennte Standards teuer sind. Beim Datenschutz zeigte sich dies mit der DSGVO; beim AI Act wird ein ähnlicher Effekt erwartet, da viele Anbieter globaler KI-Systeme die EU-Vorgaben als Referenz übernehmen. Zugleich gibt es Gegenbewegungen (etwa Deregulierungsimpulse andernorts) und die Kritik, überstrenge Regeln könnten Innovation und Wettbewerbsfähigkeit bremsen. Zentraler Begriff, um die globale Ausstrahlung des EU-Ansatzes zu verstehen." },
    en: {
      term: "Brussels Effect",
      short: "The tendency for EU rules to become the de facto global standard because companies apply them uniformly worldwide.",
      long: "The \"Brussels effect\" describes how the EU, through its large single market, sets regulatory standards that reach far beyond Europe: companies often align products and processes worldwide with the strictest (EU) requirements, because separate standards are costly. This showed with the GDPR in data protection; for the AI Act a similar effect is expected, as many providers of global AI systems adopt the EU rules as a reference. At the same time there are counter-movements (e.g. deregulation impulses elsewhere) and the criticism that overly strict rules could slow innovation and competitiveness. A key term for understanding the global radiance of the EU approach." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["brasilien-ki-gesetz", "extraterritorialitaet", "interoperabilitaet-regulierung", "europarat-ki-konvention"] },

  { id: "ki-souveraenitaet", category: "governance", risk: null,
    tags: ["#Souveraenitaet", "#Digitalpolitik", "#Strategie"],
    de: {
      term: "KI-Souveränität",
      short: "Das Bestreben von Staaten, eigene Kontrolle über KI-Technologien, -Infrastruktur und -Daten zu behalten.",
      long: "KI-Souveränität (oft im Rahmen \"digitaler Souveränität\") bezeichnet das Ziel, kritische Fähigkeiten – Rechenleistung, Modelle, Chips, Daten und Fachkräfte – nicht vollständig von anderen Staaten oder wenigen Konzernen abhängig zu machen. Motive: strategische Autonomie, Sicherheit, wirtschaftliche Teilhabe und die Durchsetzung eigener Werte und Sprachen. Ausprägungen reichen von europäischen Bestrebungen um eigene Modelle und Recheninfrastruktur bis zu Datenlokalisierung in anderen Ländern. Spannungsfeld zwischen Offenheit und Kontrolle sowie zwischen internationaler Zusammenarbeit und nationalem Wettbewerb. Zunehmend prägend für Industrie-, Förder- und Regulierungspolitik weltweit." },
    en: {
      term: "AI Sovereignty",
      short: "States' efforts to retain their own control over AI technologies, infrastructure and data.",
      long: "AI sovereignty (often within \"digital sovereignty\") denotes the goal of not becoming wholly dependent on other states or a few corporations for critical capabilities — compute, models, chips, data and skilled staff. Motives: strategic autonomy, security, economic participation and the assertion of one's own values and languages. Forms range from European efforts for their own models and compute infrastructure to data localisation in other countries. A tension between openness and control, and between international cooperation and national competition. Increasingly formative for industrial, funding and regulatory policy worldwide." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["compute-governance", "interoperabilitaet-regulierung", "open-source-ausnahme", "digitale-kluft"] },

  { id: "compute-governance", category: "governance", risk: null,
    tags: ["#Compute", "#Exportkontrolle", "#Chips"],
    de: {
      term: "Compute-Governance und Exportkontrollen",
      short: "Steuerung des Zugangs zu Hochleistungsrechenchips als Hebel der KI-Politik und internationalen Sicherheit.",
      long: "Da das Training fortgeschrittener Modelle enorme Rechenleistung erfordert, rückt die Kontrolle über spezialisierte KI-Chips und Rechenzentren ins Zentrum strategischer Politik. \"Compute Governance\" umfasst Exportkontrollen für Hochleistungschips, Meldeschwellen anhand der für ein Training aufgewendeten Rechenleistung (ein Kriterium auch bei der Einstufung systemischer GPAI-Risiken im EU AI Act) und Überlegungen, den Zugang zu Rechenleistung als Steuerungspunkt zu nutzen. Exportbeschränkungen sind zugleich Instrument geopolitischer Rivalität. Ein technisch-wirtschaftlicher Hebel, der Regulierung, nationale Sicherheit und internationalen Handel miteinander verknüpft." },
    en: {
      term: "Compute Governance and Export Controls",
      short: "Steering access to high-performance compute chips as a lever of AI policy and international security.",
      long: "Because training advanced models requires enormous compute, control over specialised AI chips and data centres has moved to the centre of strategic policy. \"Compute governance\" covers export controls for high-performance chips, reporting thresholds based on the compute used for training (a criterion also in classifying systemic GPAI risks in the EU AI Act) and considerations of using access to compute as a point of control. Export restrictions are at the same time an instrument of geopolitical rivalry. A techno-economic lever linking regulation, national security and international trade." },
    links: [ { label: "Art. 51 AI Act", url: "https://artificialintelligenceact.eu/article/51/" } ],
    related: ["ki-souveraenitaet", "systemisches-risiko", "us-executive-orders-ki", "skalierungsgesetze"] },

  { id: "interoperabilitaet-regulierung", category: "governance", risk: null,
    tags: ["#Interoperabilitaet", "#Divergenz", "#Compliance"],
    de: {
      term: "Regulatorische Interoperabilität und Divergenz",
      short: "Die Frage, wie gut unterschiedliche nationale KI-Regelwerke zusammenpassen – und was ihre Unterschiede für Unternehmen bedeuten.",
      long: "Weltweit entstehen KI-Regeln mit unterschiedlicher Philosophie: umfassend-horizontal (EU), sektoral-innovationsoffen (UK), einzelvorschriftlich-kontrollorientiert (China), föderal-fragmentiert (USA). Regulatorische Interoperabilität meint das Bemühen, diese Ansätze über gemeinsame Definitionen, Standards und Prinzipien (etwa via OECD, G7, ISO) anschlussfähig zu halten. Fehlende Abstimmung führt zu Divergenz: Unternehmen müssen mehrere, teils widersprüchliche Regime zugleich erfüllen, was Kosten und Rechtsunsicherheit erhöht. Ein zentrales Zukunftsthema – zwischen dem Wunsch nach globaler Harmonisierung und dem Beharren auf nationaler Eigenständigkeit und Wettbewerb." },
    en: {
      term: "Regulatory Interoperability and Divergence",
      short: "The question of how well different national AI frameworks fit together — and what their differences mean for businesses.",
      long: "AI rules are emerging worldwide with differing philosophies: comprehensive-horizontal (EU), sectoral-innovation-open (UK), individual-rule-based and control-oriented (China), federal-fragmented (US). Regulatory interoperability means the effort to keep these approaches compatible through common definitions, standards and principles (e.g. via OECD, G7, ISO). A lack of alignment leads to divergence: companies must satisfy several, partly contradictory regimes at once, raising costs and legal uncertainty. A key future topic — between the wish for global harmonisation and the insistence on national autonomy and competition." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["bruessel-effekt", "oecd-ki-prinzipien", "ki-souveraenitaet"] },

  { id: "deutschland-ki-aufsicht", category: "governance", risk: null,
    tags: ["#Deutschland", "#KI-MIG", "#Aufsicht"],
    de: {
      term: "KI-Aufsicht in Deutschland (KI-MIG)",
      short: "Deutschlands Durchführungsgesetz zum AI Act, das die nationalen Zuständigkeiten, Bußgelder und Innovationsförderung regelt.",
      long: "Das KI-Marktüberwachungs- und Innovationsförderungsgesetz (KI-MIG) ist das nationale Durchführungsgesetz zum EU AI Act. Es schafft keine neuen materiellen Pflichten – diese ergeben sich unmittelbar aus der Verordnung –, sondern ordnet die Aufsicht: zuständige Behörden, Bußgeldverfahren und die Einrichtung von Reallaboren. Der Regierungsentwurf wurde Anfang 2026 vom Kabinett beschlossen und durchlief das parlamentarische Verfahren; eine Verabschiedung vor dem Stichtag 2.8.2026 wurde angestrebt. Deutschland setzt auf einen hybriden Ansatz: eine zentrale Koordinierung bei der Bundesnetzagentur, ergänzt durch fortbestehende sektorale Fachaufsichten. Wichtig für die betriebliche Praxis, weil es die deutschen Ansprechpartner und Verfahrenswege festlegt." },
    en: {
      term: "AI Supervision in Germany (KI-MIG)",
      short: "Germany's implementing law for the AI Act, governing national responsibilities, fines and innovation support.",
      long: "The AI Market Surveillance and Innovation Promotion Act (KI-MIG) is Germany's national implementing law for the EU AI Act. It creates no new substantive duties — these arise directly from the Regulation — but organises supervision: competent authorities, fine procedures and the establishment of sandboxes. The government draft was adopted by cabinet in early 2026 and went through the parliamentary process; adoption before the 2 Aug 2026 date was sought. Germany relies on a hybrid approach: central coordination at the Federal Network Agency, complemented by continuing sectoral supervision. Important for operational practice, as it sets the German points of contact and procedural routes." },
    links: [ { label: "BMDS", url: "https://bmds.bund.de/service/gesetzgebungsverfahren/gesetz-zur-durchfuehrung-der-ki-verordnung" } ],
    related: ["bundesnetzagentur-ki", "kokivo", "marktueberwachung", "notifizierende-behoerde", "landesmedienanstalten-ki"] },

  { id: "bundesnetzagentur-ki", category: "governance", risk: null,
    tags: ["#Deutschland", "#BNetzA", "#Marktueberwachung"],
    de: {
      term: "Bundesnetzagentur (als KI-Aufsicht)",
      short: "In Deutschland vorgesehene zentrale Marktüberwachungs- und Koordinierungsbehörde für den AI Act.",
      long: "Nach dem Durchführungsgesetz (KI-MIG) soll die Bundesnetzagentur (BNetzA) die zentrale Marktüberwachungsbehörde für die KI-Verordnung werden – zuständig überall dort, wo keine spezialgesetzliche Fachaufsicht greift. Sie übernimmt zudem die Rolle der notifizierenden Behörde und der zentralen Anlauf- und Beschwerdestelle. Für regulierte Bereiche bleiben bestehende Behörden zuständig (etwa die BaFin im Finanzsektor). Die BNetzA bringt Erfahrung aus der Regulierung von Netzen und Digitalmärkten mit. Kritisiert wurde die zunächst knappe Personalausstattung angesichts der breiten Aufgabe. Zentraler Baustein der deutschen KI-Aufsichtsarchitektur." },
    en: {
      term: "Federal Network Agency (as AI Supervisor)",
      short: "The central market surveillance and coordination authority envisaged for the AI Act in Germany.",
      long: "Under the implementing law (KI-MIG), the Federal Network Agency (Bundesnetzagentur, BNetzA) is to become the central market surveillance authority for the AI Regulation — competent wherever no specialised sectoral supervision applies. It also takes on the role of notifying authority and central contact and complaint point. In regulated areas, existing authorities remain competent (e.g. BaFin in finance). The BNetzA brings experience from regulating networks and digital markets. The initially modest staffing was criticised given the broad task. A central building block of the German AI supervisory architecture." },
    links: [ { label: "Bundesnetzagentur", url: "https://www.bundesnetzagentur.de/" } ],
    related: ["deutschland-ki-aufsicht", "kokivo", "bafin-ki", "nationale-kontaktstelle"] },

  { id: "kokivo", category: "governance", risk: null,
    tags: ["#Deutschland", "#KoKIVO", "#Koordinierung"],
    de: {
      term: "KoKIVO",
      short: "Bei der Bundesnetzagentur angesiedeltes Koordinierungs- und Kompetenzzentrum für die KI-Verordnung.",
      long: "Das Koordinierungs- und Kompetenzzentrum für die KI-Verordnung (KoKIVO) wird durch das Durchführungsgesetz bei der Bundesnetzagentur eingerichtet. Seine Aufgaben: die Zusammenarbeit aller in Deutschland zuständigen KI-Behörden koordinieren, eine einheitliche Rechtsauslegung bei übergreifenden Fragen sicherstellen und über einen \"KI-Service-Desk\" als erste Anlaufstelle für Unternehmen dienen. Das KoKIVO bündelt KI-Expertise zentral und stellt sie den übrigen Behörden ressourcenschonend zur Verfügung. Es ist das Herzstück des deutschen \"hybriden\" Modells, das zentrale Koordination mit dezentraler Fachaufsicht verbindet, und Ansprechpartner gegenüber den EU-Institutionen." },
    en: {
      term: "KoKIVO",
      short: "The Coordination and Competence Centre for the AI Regulation, located at the Federal Network Agency.",
      long: "The Coordination and Competence Centre for the AI Regulation (KoKIVO) is established by the implementing law at the Federal Network Agency. Its tasks: coordinate the cooperation of all AI authorities competent in Germany, ensure a uniform legal interpretation on cross-cutting questions, and serve via an \"AI service desk\" as the first point of contact for companies. KoKIVO pools AI expertise centrally and makes it available to other authorities in a resource-efficient way. It is the heart of the German \"hybrid\" model combining central coordination with decentralised sectoral supervision, and the contact point vis-à-vis the EU institutions." },
    links: [ { label: "Bundesnetzagentur", url: "https://www.bundesnetzagentur.de/" } ],
    related: ["bundesnetzagentur-ki", "deutschland-ki-aufsicht", "nationale-kontaktstelle"] },

  { id: "bafin-ki", category: "governance", risk: null,
    tags: ["#Deutschland", "#BaFin", "#Finanzsektor"],
    de: {
      term: "BaFin (KI im Finanzsektor)",
      short: "Zuständige deutsche Fachaufsicht für KI-Systeme im Finanzdienstleistungsbereich.",
      long: "Die Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) bleibt im deutschen \"hybriden\" Aufsichtsmodell für KI in Banken, Versicherungen und Finanzdienstleistungen zuständig – die Marktüberwachung wandert also nicht zur Bundesnetzagentur, sondern verbleibt bei der etablierten Sektoraufsicht. Das betrifft etwa Kreditwürdigkeitsprüfung, algorithmischen Handel, Betrugserkennung und – als Hochrisiko – Risikobewertung und Preisbildung in Lebens- und Krankenversicherung. Vorteil: Unternehmen behalten ihre bekannten Ansprechpartner, und vorhandene Finanzmarkt-Expertise wird genutzt. Die BaFin stimmt sich mit dem KoKIVO ab. Beispiel dafür, wie der AI Act in bestehende Fachaufsichtsstrukturen eingebettet wird." },
    en: {
      term: "BaFin (AI in the Financial Sector)",
      short: "The competent German sectoral supervisor for AI systems in financial services.",
      long: "The Federal Financial Supervisory Authority (BaFin) remains competent in Germany's \"hybrid\" supervisory model for AI in banks, insurers and financial services — so market surveillance does not move to the Federal Network Agency but stays with the established sectoral supervisor. This concerns e.g. creditworthiness assessment, algorithmic trading, fraud detection and — as high-risk — risk assessment and pricing in life and health insurance. Advantage: companies keep their known contacts, and existing financial-market expertise is used. BaFin coordinates with KoKIVO. An example of how the AI Act is embedded in existing sectoral supervision." },
    links: [ { label: "BaFin", url: "https://www.bafin.de/" } ],
    related: ["bundesnetzagentur-ki", "dora", "kreditrisikomodell"] },

  { id: "landesmedienanstalten-ki", category: "governance", risk: null,
    tags: ["#Deutschland", "#Medien", "#Staatsferne"],
    de: {
      term: "Landesmedienanstalten (KI in Medien)",
      short: "Für KI-Anwendungen in Presse und Rundfunk zuständige deutsche Aufsicht – getrennt von der Bundesnetzagentur.",
      long: "Die Aufsicht über KI im Presse- und Rundfunkbereich – etwa die Kennzeichnung von Deepfakes und KI-generierten Nachrichtentexten – liegt in Deutschland nicht bei der Bundesnetzagentur, sondern bei den Landesmedienanstalten. Grund ist der verfassungsrechtliche Grundsatz der Staatsferne der Medien: Medienaufsicht soll unabhängig von der unmittelbaren Bundesverwaltung erfolgen. So unterliegen KI in Nachrichtenredaktionen, automatisierte Inhaltemoderation und synthetische Medienerkennung der bewährten, föderal organisierten Medienaufsicht. Eine deutsche Besonderheit, die zeigt, wie die föderale Kompetenzordnung die Umsetzung des AI Act prägt und die Meinungs- und Medienfreiheit schützt." },
    en: {
      term: "State Media Authorities (AI in Media)",
      short: "The German supervisors competent for AI applications in press and broadcasting — separate from the Federal Network Agency.",
      long: "Supervision of AI in the press and broadcasting sector — e.g. labelling deepfakes and AI-generated news texts — lies in Germany not with the Federal Network Agency but with the state media authorities (Landesmedienanstalten). The reason is the constitutional principle of media independence from the state: media supervision should be independent of direct federal administration. Thus AI in newsrooms, automated content moderation and synthetic-media detection fall under the established, federally organised media supervision. A German particularity showing how the federal division of competences shapes AI Act implementation and protects freedom of expression and the media." },
    links: [ { label: "die medienanstalten", url: "https://www.die-medienanstalten.de/" } ],
    related: ["deutschland-ki-aufsicht", "arcom-ki", "kommaustria-ki", "deepfake"] },

  { id: "oesterreich-ki-aufsicht", category: "governance", risk: null,
    tags: ["#Oesterreich", "#Aufsicht", "#Umsetzung"],
    de: {
      term: "KI-Aufsicht in Österreich",
      short: "Österreichs im Aufbau befindliche Aufsichtsstruktur für den AI Act, koordiniert vom Bundeskanzleramt.",
      long: "Österreich benötigt als EU-Mitglied keine Umsetzung der unmittelbar geltenden KI-Verordnung, muss aber zuständige Behörden benennen. Die nationale Umsetzung koordiniert das Bundeskanzleramt (BKA). Eine zentrale KI-Servicestelle wurde bereits 2024 bei der Regulierungsbehörde RTR eingerichtet (Beratung und Information), die aber nicht zwangsläufig die vollziehende Aufsicht ist. Als Marktüberwachungsbehörden gelten die Datenschutzbehörde (für grundrechtssensible Anhang-III-Bereiche wie Personalauswahl, Bildung, Bonität) sowie sektorale Aufsichten (etwa die Finanzmarktaufsicht FMA) und die Medien-/Kommunikationsbehörde als wahrscheinlich. Stand Mitte 2026 war die vollständige Designation noch nicht abgeschlossen." },
    en: {
      term: "AI Supervision in Austria",
      short: "Austria's evolving supervisory structure for the AI Act, coordinated by the Federal Chancellery.",
      long: "As an EU member, Austria does not need to transpose the directly applicable AI Regulation but must designate competent authorities. The Federal Chancellery (BKA) coordinates national implementation. A central AI service point was already established in 2024 at the regulator RTR (advice and information), which is not necessarily the enforcing authority. Likely market surveillance authorities are the Data Protection Authority (for fundamental-rights-sensitive Annex III areas such as recruitment, education, creditworthiness), sectoral supervisors (e.g. the Financial Market Authority FMA) and the media/communications authority. As of mid-2026 the full designation was not yet complete." },
    links: [ { label: "Digital Austria", url: "https://www.digitalaustria.gv.at/themen/kuenstliche-intelligenz/ai-act.html" } ],
    related: ["rtr-ki-servicestelle", "dsb-oesterreich", "kommaustria-ki"] },

  { id: "rtr-ki-servicestelle", category: "governance", risk: null,
    tags: ["#Oesterreich", "#RTR", "#Servicestelle"],
    de: {
      term: "KI-Servicestelle (RTR, Österreich)",
      short: "Zentrale österreichische Informations- und Beratungsstelle zum AI Act, angesiedelt bei der RTR.",
      long: "Die 2024 bei der Rundfunk und Telekom Regulierungs-GmbH (RTR) eingerichtete KI-Servicestelle ist die zentrale Anlauf-, Informations- und Beratungsstelle rund um den AI Act in Österreich. Sie bündelt Übersichten zu Akteuren, Pflichten, Risikostufen und Sanktionen, veröffentlicht Praxisleitfäden und betreibt sogar einen quelloffenen \"AI Act Chatbot\" als niedrigschwelliges Auskunftswerkzeug. Sie leistet Aufklärung und Orientierung, ist aber nicht zwingend die vollziehende Marktüberwachungsbehörde. Ein Beispiel für einen serviceorientierten, informierenden Zugang zur KI-Governance, der Unternehmen und Öffentlichkeit den Einstieg in die komplexe Materie erleichtert." },
    en: {
      term: "AI Service Point (RTR, Austria)",
      short: "Austria's central information and advice point on the AI Act, located at the regulator RTR.",
      long: "Established in 2024 at the broadcasting and telecom regulator RTR, the AI service point is Austria's central contact, information and advice hub on the AI Act. It bundles overviews of actors, duties, risk tiers and sanctions, publishes practical guides and even runs an open-source \"AI Act chatbot\" as a low-threshold information tool. It provides education and orientation but is not necessarily the enforcing market surveillance authority. An example of a service-oriented, informational approach to AI governance that helps companies and the public engage with the complex subject matter." },
    links: [ { label: "KI-Servicestelle RTR", url: "https://www.rtr.at/rtr/service/ki-servicestelle/ki-servicestelle.de.html" } ],
    related: ["oesterreich-ki-aufsicht", "dsb-oesterreich", "ki-kompetenz"] },

  { id: "dsb-oesterreich", category: "governance", risk: null,
    tags: ["#Oesterreich", "#Datenschutzbehoerde", "#AnhangIII"],
    de: {
      term: "Datenschutzbehörde (Österreich, KI)",
      short: "Wahrscheinliche österreichische Marktüberwachungsbehörde für grundrechtssensible Hochrisiko-KI.",
      long: "Die österreichische Datenschutzbehörde (DSB) gilt als wahrscheinlichste zuständige Marktüberwachungsbehörde für jene Anhang-III-Hochrisikobereiche, in denen der Personenbezug dominiert – etwa KI in der Personalauswahl, im Bildungswesen oder bei der Bonitätsbewertung. Grund ist ihre bestehende operative Praxis an der Schnittstelle von DSGVO und KI. Damit spiegelt Österreich einen Ansatz wider, den auch Frankreich verfolgt: Datenschutzbehörden übernehmen einen Großteil der KI-Aufsicht, um Kohärenz zwischen Datenschutz- und KI-Recht zu sichern. Die formale Benennung stand Mitte 2026 noch aus; Unternehmen wurde empfohlen, frühzeitig Kontakt zu DSB und KI-Servicestelle aufzunehmen." },
    en: {
      term: "Data Protection Authority (Austria, AI)",
      short: "The likely Austrian market surveillance authority for fundamental-rights-sensitive high-risk AI.",
      long: "The Austrian Data Protection Authority (DSB) is regarded as the most likely competent market surveillance authority for those Annex III high-risk areas where personal data dominate — e.g. AI in recruitment, education or creditworthiness assessment. The reason is its existing operational practice at the interface of GDPR and AI. Austria thereby mirrors an approach also taken by France: data protection authorities take on much of AI supervision to ensure coherence between data protection and AI law. Formal designation was still pending as of mid-2026; companies were advised to contact the DSB and the AI service point early." },
    links: [ { label: "Datenschutzbehörde", url: "https://www.dsb.gv.at/" } ],
    related: ["oesterreich-ki-aufsicht", "cnil-ki", "dsgvo-schnittstelle", "rtr-ki-servicestelle"] },

  { id: "kommaustria-ki", category: "governance", risk: null,
    tags: ["#Oesterreich", "#KommAustria", "#Medien"],
    de: {
      term: "KommAustria (KI in Medien)",
      short: "Voraussichtlich zuständige österreichische Behörde für KI in Medien, Plattformen und Kommunikation.",
      long: "Die Kommunikationsbehörde Austria (KommAustria) gilt als wahrscheinlich zuständig für KI-Systeme im Medien-, Plattform- und Telekommunikationsbereich. Sie ist bereits mit Medienaufsicht befasst und hat aus der Umsetzung des Digital Services Act Erfahrung mit der Aufsicht über Algorithmen gesammelt. Damit ergänzt sie in Österreich die Datenschutzbehörde und die sektoralen Aufsichten in einem \"aufgeteilten\" Modell, das die Zuständigkeit nach Anwendungsfeld verteilt. Ähnlich wie in Deutschland (Landesmedienanstalten) und Frankreich (ARCOM) zeigt sich hier, dass Medien-KI aus Gründen der Staats- und Meinungsfreiheit oft einer eigenen, medienspezifischen Aufsicht unterliegt." },
    en: {
      term: "KommAustria (AI in Media)",
      short: "The likely competent Austrian authority for AI in media, platforms and communications.",
      long: "The Austrian Communications Authority (KommAustria) is regarded as likely competent for AI systems in the media, platform and telecommunications sphere. It is already engaged in media supervision and gained experience in overseeing algorithms from implementing the Digital Services Act. It thereby complements the Data Protection Authority and sectoral supervisors in Austria's \"split\" model that distributes competence by field of application. As in Germany (state media authorities) and France (ARCOM), this shows that media AI often falls under its own, media-specific supervision for reasons of state independence and freedom of expression." },
    links: [ { label: "KommAustria / RTR", url: "https://www.rtr.at/" } ],
    related: ["oesterreich-ki-aufsicht", "landesmedienanstalten-ki", "arcom-ki"] },

  { id: "frankreich-ki-aufsicht", category: "governance", risk: null,
    tags: ["#Frankreich", "#Aufsicht", "#Dezentral"],
    de: {
      term: "KI-Aufsicht in Frankreich",
      short: "Dezentrales französisches Modell, das die Marktüberwachung nach Anwendungsfeld auf mehrere Behörden verteilt.",
      long: "Frankreich hat sich für eine dezentrale \"Governance nach Typ\" entschieden: Statt einer einzigen Superbehörde teilen zahlreiche sektorale Regulierer die Marktüberwachung nach Anwendungsfeldern auf – rund siebzehn Behörden waren im Gespräch. Drei tragen die Hauptlast: die Datenschutzbehörde CNIL (grundrechtssensible Hochrisiko-KI und verbotene Praktiken), die DGCCRF (Verbraucherschutz, Transparenz, Anhang-I-Koordination) und die Medienbehörde ARCOM. Die strategische Koordinierung liegt beim Wirtschaftsministerium (DGE) als einzige Kontaktstelle. Die formale Designation verzögerte sich (Streichung aus einem Anpassungsgesetz Ende 2025), faktisch übernimmt die CNIL aber eine Führungsrolle. Kontrast zum stärker zentralisierten deutschen Modell." },
    en: {
      term: "AI Supervision in France",
      short: "A decentralised French model distributing market surveillance across several authorities by field of application.",
      long: "France opted for a decentralised \"governance by type\": rather than a single super-authority, numerous sectoral regulators share market surveillance by field of application — around seventeen authorities were discussed. Three carry the main load: the data protection authority CNIL (fundamental-rights-sensitive high-risk AI and prohibited practices), the DGCCRF (consumer protection, transparency, Annex I coordination) and the media authority ARCOM. Strategic coordination lies with the Ministry of the Economy (DGE) as single contact point. Formal designation was delayed (removal from an adaptation bill in late 2025), but in practice the CNIL takes a leading role. A contrast to the more centralised German model." },
    links: [ { label: "DGE", url: "https://www.entreprises.gouv.fr/" } ],
    related: ["cnil-ki", "arcom-ki", "dgccrf-ki"] },

  { id: "cnil-ki", category: "governance", risk: null,
    tags: ["#Frankreich", "#CNIL", "#Datenschutz"],
    de: {
      term: "CNIL (KI-Aufsicht Frankreich)",
      short: "Französische Datenschutzbehörde mit zentraler Rolle bei der KI-Aufsicht, besonders für grundrechtssensible Systeme.",
      long: "Die Commission Nationale de l'Informatique et des Libertés (CNIL) ist die französische Datenschutzbehörde und übernimmt eine zentrale Rolle bei der Durchsetzung des AI Act. Sie ist zuständig für mehrere verbotene Praktiken (Art. 5, etwa Social Scoring, ungezieltes Gesichts-Scraping, biometrische Kategorisierung) und für einen Großteil der Anhang-III-Hochrisikobereiche: Biometrie, Beschäftigung, Bildung, Strafverfolgung, Migration, Justiz. Frankreich bündelt damit Datenschutz- und KI-Aufsicht unter einem Dach, um Kohärenz zwischen DSGVO und KI-Recht zu sichern. Die CNIL bringt weitreichende Untersuchungs- und Sanktionsbefugnisse aus der DSGVO-Praxis mit. Vorbild für den datenschutzzentrierten Aufsichtsansatz mehrerer EU-Staaten." },
    en: {
      term: "CNIL (AI Supervision France)",
      short: "The French data protection authority with a central role in AI supervision, especially for fundamental-rights-sensitive systems.",
      long: "The Commission Nationale de l'Informatique et des Libertés (CNIL) is the French data protection authority and takes a central role in enforcing the AI Act. It is competent for several prohibited practices (Art. 5, e.g. social scoring, untargeted facial scraping, biometric categorisation) and for much of the Annex III high-risk areas: biometrics, employment, education, law enforcement, migration, justice. France thereby unites data protection and AI supervision under one roof to ensure coherence between GDPR and AI law. The CNIL brings far-reaching investigation and sanction powers from its GDPR practice. A model for the data-protection-centred supervisory approach of several EU states." },
    links: [ { label: "CNIL", url: "https://www.cnil.fr/" } ],
    related: ["frankreich-ki-aufsicht", "dsb-oesterreich", "verbotene-praktiken", "dsgvo-schnittstelle", "dgccrf-ki"] },

  { id: "arcom-ki", category: "governance", risk: null,
    tags: ["#Frankreich", "#ARCOM", "#Medien"],
    de: {
      term: "ARCOM (KI in Medien, Frankreich)",
      short: "Französische Medien- und Digitalaufsicht, zuständig für KI in audiovisuellen Inhalten und demokratischen Prozessen.",
      long: "Die Autorité de Régulation de la Communication Audiovisuelle et Numérique (ARCOM) ist die französische Regulierungsbehörde für audiovisuelle und digitale Kommunikation. Im Rahmen des AI Act ist sie – oft gemeinsam mit der DGCCRF – für Transparenzpflichten bei direkt mit Menschen interagierenden Systemen und bei generierten Audio-, Bild-, Video- und Textinhalten zuständig sowie, mit der CNIL, für KI in demokratischen Prozessen (Anhang III). Wie die deutschen Landesmedienanstalten und die österreichische KommAustria verkörpert die ARCOM die medienspezifische Säule der KI-Aufsicht, die Meinungsvielfalt und Informationsintegrität schützt. Sie bringt Erfahrung aus der Plattform- und Inhalteregulierung mit." },
    en: {
      term: "ARCOM (AI in Media, France)",
      short: "The French media and digital regulator, competent for AI in audiovisual content and democratic processes.",
      long: "The Autorité de Régulation de la Communication Audiovisuelle et Numérique (ARCOM) is the French regulator for audiovisual and digital communication. Under the AI Act it is competent — often jointly with the DGCCRF — for transparency duties for systems interacting directly with people and for generated audio, image, video and text content, and, with the CNIL, for AI in democratic processes (Annex III). Like the German state media authorities and Austria's KommAustria, ARCOM embodies the media-specific pillar of AI supervision that protects media plurality and information integrity. It brings experience from platform and content regulation." },
    links: [ { label: "ARCOM", url: "https://www.arcom.fr/" } ],
    related: ["frankreich-ki-aufsicht", "landesmedienanstalten-ki", "kommaustria-ki", "wasserzeichen"] },

  { id: "dgccrf-ki", category: "governance", risk: null,
    tags: ["#Frankreich", "#DGCCRF", "#Verbraucherschutz"],
    de: {
      term: "DGCCRF (KI, Frankreich)",
      short: "Französische Wettbewerbs- und Verbraucherschutzbehörde mit breiter KI-Marktüberwachungszuständigkeit.",
      long: "Die Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes (DGCCRF) ist Frankreichs Behörde für Wettbewerb, Verbraucherschutz und Betrugsbekämpfung. Im AI Act deckt sie zahlreiche Anwendungsfälle ab: bestimmte verbotene Praktiken (mit der CNIL), Transparenzpflichten nach Art. 50 (mit der ARCOM) und die Koordinierung der Marktüberwachung für in Produkte eingebettete Anhang-I-KI, indem sie bestehende Produktsicherheits-Zuständigkeiten bündelt. Sie teilt viele Fälle mit weiteren Behörden. Als klassische Marktüberwachungs- und Verbraucherschutzinstanz überträgt sie ihr Instrumentarium – Kontrollen, Rückrufe, Sanktionen – auf KI-Produkte und -Dienste." },
    en: {
      term: "DGCCRF (AI, France)",
      short: "The French competition and consumer protection authority with broad AI market surveillance competence.",
      long: "The Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes (DGCCRF) is France's authority for competition, consumer protection and fraud control. Under the AI Act it covers numerous use cases: certain prohibited practices (with the CNIL), transparency duties under Art. 50 (with ARCOM) and coordination of market surveillance for Annex I AI embedded in products, by bundling existing product-safety competences. It shares many cases with other authorities. As a classic market surveillance and consumer protection body, it transfers its toolkit — inspections, recalls, sanctions — to AI products and services." },
    links: [ { label: "DGCCRF", url: "https://www.economie.gouv.fr/dgccrf" } ],
    related: ["frankreich-ki-aufsicht", "cnil-ki", "marktueberwachung"] },

  { id: "europaeischer-ki-ausschuss", category: "governance", risk: null,
    tags: ["#AIBoard", "#Governance", "#EU"],
    de: {
      term: "Europäischer Ausschuss für KI (AI Board)",
      short: "Gremium der Mitgliedstaaten, das die einheitliche Anwendung des AI Act koordiniert und die Kommission berät.",
      long: "Der Europäische Ausschuss für Künstliche Intelligenz (AI Board) setzt sich aus Vertretern der Mitgliedstaaten zusammen und wird vom AI Office unterstützt. Seine Aufgaben: die kohärente und einheitliche Anwendung des AI Act in der gesamten EU fördern, Empfehlungen und Stellungnahmen abgeben, den Erfahrungsaustausch zwischen den nationalen Behörden koordinieren und die Kommission beraten. Er ist Teil der mehrstufigen Governance des AI Act, die EU-Ebene (Kommission, AI Office, wissenschaftliches Gremium, Beratungsforum) und nationale Ebene verbindet. Vergleichbar mit dem Europäischen Datenschutzausschuss unter der DSGVO. Wichtig, um eine Fragmentierung der Aufsicht zwischen den Mitgliedstaaten zu vermeiden." },
    en: {
      term: "European Artificial Intelligence Board",
      short: "A body of the Member States coordinating the uniform application of the AI Act and advising the Commission.",
      long: "The European Artificial Intelligence Board (AI Board) consists of representatives of the Member States and is supported by the AI Office. Its tasks: promote the coherent and uniform application of the AI Act across the EU, issue recommendations and opinions, coordinate the exchange of experience between national authorities and advise the Commission. It is part of the AI Act's multi-level governance linking the EU level (Commission, AI Office, scientific panel, advisory forum) and the national level. Comparable to the European Data Protection Board under the GDPR. Important for avoiding fragmentation of supervision between Member States." },
    links: [ { label: "AI Act (EU)", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" } ],
    related: ["ai-office", "wissenschaftliches-gremium", "nationale-kontaktstelle"] },

  { id: "wissenschaftliches-gremium", category: "governance", risk: null,
    tags: ["#ScientificPanel", "#GPAI", "#Expertise"],
    de: {
      term: "Wissenschaftliches Gremium (Scientific Panel)",
      short: "Panel unabhängiger Fachleute, das die Durchsetzung des AI Act mit technischer Expertise unterstützt – besonders bei GPAI.",
      long: "Das wissenschaftliche Gremium unabhängiger Sachverständiger unterstützt vor allem das AI Office bei der Aufsicht über KI-Modelle mit allgemeinem Verwendungszweck (GPAI). Aufgaben: die Bewertung von Fähigkeiten und systemischen Risiken großer Modelle, Warnungen vor möglichen systemischen Gefahren, methodische Beiträge und die Unterstützung der Marktüberwachung. Die Mitglieder werden nach fachlicher Exzellenz und Unabhängigkeit ausgewählt. Das Gremium bringt aktuelle wissenschaftliche Erkenntnisse in die Regulierung ein und hilft, mit der schnellen technischen Entwicklung Schritt zu halten. Bindeglied zwischen KI-Forschung und Aufsichtspraxis, verwandt mit der Rolle staatlicher KI-Sicherheitsinstitute." },
    en: {
      term: "Scientific Panel",
      short: "A panel of independent experts supporting AI Act enforcement with technical expertise — especially for GPAI.",
      long: "The scientific panel of independent experts supports above all the AI Office in overseeing general-purpose AI (GPAI) models. Tasks: assessing the capabilities and systemic risks of large models, alerting to possible systemic dangers, methodological contributions and supporting market surveillance. Members are selected for expertise and independence. The panel brings current scientific findings into regulation and helps keep pace with rapid technical development. A link between AI research and supervisory practice, related to the role of state AI safety institutes." },
    links: [ { label: "AI Act (EU)", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" } ],
    related: ["ai-office", "europaeischer-ki-ausschuss", "systemisches-risiko", "netzwerk-safety-institutes"] },

  { id: "grundrechtebehoerden", category: "governance", risk: null,
    tags: ["#Grundrechte", "#Art77", "#Aufsicht"],
    de: {
      term: "Grundrechtebehörden (Art. 77)",
      short: "Nationale Stellen zum Schutz der Grundrechte, die für Hochrisiko-KI besondere Auskunfts- und Einsichtsrechte erhalten.",
      long: "Nach Art. 77 AI Act benennen die Mitgliedstaaten jene nationalen Behörden oder Stellen, die den Schutz der Grundrechte überwachen (etwa Gleichbehandlungs-, Datenschutz- oder Antidiskriminierungsstellen). Sie erhalten das Recht, von Anbietern und Betreibern von Hochrisiko-KI Unterlagen anzufordern und Zugang zu erhalten, wenn dies zur Wahrnehmung ihres Mandats erforderlich ist. Ziel ist es, die grundrechtliche Dimension der KI-Aufsicht institutionell zu verankern und bestehende Grundrechtsakteure einzubinden. Die Mitgliedstaaten mussten diese Stellen benennen und veröffentlichen. Ergänzt die Marktüberwachung um eine ausdrücklich grundrechtsorientierte Kontrollebene." },
    en: {
      term: "Fundamental Rights Authorities (Art. 77)",
      short: "National bodies protecting fundamental rights that receive special information and access rights for high-risk AI.",
      long: "Under Art. 77 AI Act, Member States designate those national authorities or bodies that supervise the protection of fundamental rights (e.g. equality, data protection or anti-discrimination bodies). They receive the right to request documentation from and access from providers and deployers of high-risk AI where necessary to fulfil their mandate. The aim is to institutionally anchor the fundamental-rights dimension of AI supervision and involve existing fundamental-rights actors. Member States had to designate and publish these bodies. Complements market surveillance with an explicitly rights-oriented layer of control." },
    links: [ { label: "Art. 77 AI Act", url: "https://artificialintelligenceact.eu/article/77/" } ],
    related: ["fria", "marktueberwachung", "diskriminierung-ki"] },

  { id: "nationale-kontaktstelle", category: "governance", risk: null,
    tags: ["#Kontaktstelle", "#Koordinierung", "#EU"],
    de: {
      term: "Einzige nationale Kontaktstelle",
      short: "Pro Mitgliedstaat benannte zentrale Anlaufstelle, die die Kommunikation zwischen nationalen Behörden und EU-Ebene bündelt.",
      long: "Benennt ein Mitgliedstaat – wie Deutschland, Österreich oder Frankreich – mehrere zuständige Behörden, muss eine von ihnen die Rolle der einzigen nationalen Kontaktstelle (single point of contact) übernehmen. Sie bündelt den Austausch mit der Europäischen Kommission, dem AI Office und den Behörden anderer Mitgliedstaaten und dient auch der Öffentlichkeit als klarer Ansprechpunkt. So bleibt trotz verteilter Zuständigkeiten die grenzüberschreitende Zusammenarbeit handhabbar und kohärent. In Deutschland ist dies faktisch bei der Bundesnetzagentur/dem KoKIVO angesiedelt, in Frankreich beim Wirtschaftsministerium. Praktisch wichtig, um Unternehmen und Behörden Orientierung im mehrstufigen Governance-System zu geben." },
    en: {
      term: "Single National Point of Contact",
      short: "A central contact point designated per Member State bundling communication between national authorities and the EU level.",
      long: "Where a Member State — like Germany, Austria or France — designates several competent authorities, one of them must take on the role of single national point of contact. It bundles exchanges with the European Commission, the AI Office and the authorities of other Member States and also serves the public as a clear contact. Thus, despite distributed competences, cross-border cooperation remains manageable and coherent. In Germany this is effectively located at the Federal Network Agency/KoKIVO, in France at the Ministry of the Economy. Practically important to give companies and authorities orientation in the multi-level governance system." },
    links: [ { label: "AI Act (EU)", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" } ],
    related: ["europaeischer-ki-ausschuss", "bundesnetzagentur-ki", "marktueberwachung", "kokivo"] },

  { id: "konformitaetsbewertungsverfahren", category: "ai-act-core", risk: null,
    tags: ["#Konformitaet", "#Bewertung", "#Hochrisiko"],
    de: {
      term: "Konformitätsbewertungsverfahren",
      short: "Verfahren, mit dem vor dem Inverkehrbringen geprüft wird, ob ein Hochrisiko-KI-System die Anforderungen des AI Act erfüllt.",
      long: "Bevor ein Hochrisiko-KI-System auf den Markt kommt, muss ein Konformitätsbewertungsverfahren durchlaufen werden (Art. 43). Je nach Systemtyp geschieht dies über eine interne Kontrolle durch den Anbieter selbst (Anhang VI) oder unter Beteiligung einer unabhängigen benannten Stelle (Anhang VII) – Letzteres vor allem bei bestimmten biometrischen Systemen. Geprüft wird, ob Risikomanagement, Daten-Governance, technische Dokumentation, Transparenz, menschliche Aufsicht sowie Genauigkeit und Robustheit den Vorgaben entsprechen. Erfolgreich abgeschlossen, mündet es in die EU-Konformitätserklärung und die CE-Kennzeichnung. Bei wesentlichen Änderungen ist es zu wiederholen. Kernmechanismus der Hochrisiko-Regulierung." },
    en: {
      term: "Conformity Assessment Procedure",
      short: "The procedure verifying, before market entry, whether a high-risk AI system meets the AI Act's requirements.",
      long: "Before a high-risk AI system enters the market, a conformity assessment procedure must be completed (Art. 43). Depending on the system type, this is done via internal control by the provider itself (Annex VI) or with the involvement of an independent notified body (Annex VII) — the latter especially for certain biometric systems. It checks whether risk management, data governance, technical documentation, transparency, human oversight, and accuracy and robustness meet the requirements. Successfully completed, it leads to the EU declaration of conformity and CE marking. It must be repeated upon substantial modification. A core mechanism of high-risk regulation." },
    links: [ { label: "Art. 43 AI Act", url: "https://artificialintelligenceact.eu/article/43/" } ],
    related: ["ce-kennzeichnung", "eu-konformitaetserklaerung", "notifizierte-stelle", "hochrisiko-ki", "ki-lebenszyklus"] },

  { id: "turing-test", category: "ml", risk: null,
    tags: ["#TuringTest", "#Geschichte", "#Intelligenz"],
    de: {
      term: "Turing-Test",
      short: "1950 von Alan Turing vorgeschlagener Test, ob eine Maschine im Gespräch von einem Menschen ununterscheidbar antworten kann.",
      long: "Alan Turing schlug 1950 das \"Imitationsspiel\" vor: Kann ein menschlicher Prüfer im textbasierten Dialog nicht zuverlässig unterscheiden, ob er mit einer Maschine oder einem Menschen spricht, gilt die Maschine als \"intelligent\". Der Test verschob die Frage \"Kann eine Maschine denken?\" auf beobachtbares Verhalten. Moderne Sprachmodelle bestehen viele Varianten des Tests mühelos, was seine Grenzen offenlegt: Sprachliche Überzeugungskraft ist nicht dasselbe wie Verstehen, Bewusstsein oder Zuverlässigkeit. Historisch prägend und bis heute ein kultureller Bezugspunkt, aber als Maß echter Intelligenz überholt. Wichtig, um die Begriffsgeschichte der KI einzuordnen." },
    en: {
      term: "Turing Test",
      short: "A test proposed by Alan Turing in 1950 of whether a machine can respond in conversation indistinguishably from a human.",
      long: "In 1950 Alan Turing proposed the \"imitation game\": if a human examiner in text-based dialogue cannot reliably tell whether they are speaking with a machine or a human, the machine counts as \"intelligent\". The test shifted the question \"can a machine think?\" onto observable behaviour. Modern language models pass many variants of the test easily, exposing its limits: linguistic persuasiveness is not the same as understanding, consciousness or reliability. Historically formative and still a cultural reference point, but outdated as a measure of genuine intelligence. Important for placing the conceptual history of AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["agi", "symbolische-ki", "ki", "ki-bewusstsein"] },

  { id: "agi", category: "ml", risk: null,
    tags: ["#AGI", "#Allgemeine KI", "#Zukunft"],
    de: {
      term: "Künstliche allgemeine Intelligenz (AGI)",
      short: "Hypothetische KI, die menschenähnlich vielseitig denkt und beliebige geistige Aufgaben mindestens so gut wie Menschen bewältigt.",
      long: "AGI (Artificial General Intelligence) bezeichnet eine bislang hypothetische KI, die – anders als heutige spezialisierte (\"schwache\") Systeme – flexibel über viele Domänen hinweg lernt und Probleme löst, vergleichbar mit menschlicher Allgemeinintelligenz. Ob, wann und wie AGI erreichbar ist, ist wissenschaftlich hoch umstritten; Definitionen und Messkriterien sind uneinheitlich. Die Debatte reicht von naher Erwartung bis zu grundsätzlicher Skepsis. AGI ist zentral für Diskussionen über langfristige Chancen und Risiken, über Sicherheit und Kontrolle sowie über die gesellschaftlichen Folgen sehr leistungsfähiger Systeme. Abzugrenzen von der \"schwachen\" KI, die nur eng umgrenzte Aufgaben beherrscht." },
    en: {
      term: "Artificial General Intelligence (AGI)",
      short: "Hypothetical AI that thinks with human-like versatility and handles any intellectual task at least as well as humans.",
      long: "AGI (Artificial General Intelligence) denotes a so-far hypothetical AI that — unlike today's specialised (\"narrow\") systems — learns and solves problems flexibly across many domains, comparable to human general intelligence. Whether, when and how AGI is achievable is highly contested scientifically; definitions and measurement criteria are inconsistent. The debate ranges from near-term expectation to fundamental scepticism. AGI is central to discussions of long-term opportunities and risks, of safety and control, and of the societal consequences of very capable systems. To be distinguished from \"narrow\" AI, which masters only tightly bounded tasks." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["turing-test", "superintelligenz", "emergente-faehigkeiten", "ki", "ki-winter"] },

  { id: "symbolische-ki", category: "ml", risk: null,
    tags: ["#SymbolicAI", "#GOFAI", "#Geschichte"],
    de: {
      term: "Symbolische KI (GOFAI)",
      short: "Klassischer KI-Ansatz, der Intelligenz durch explizite Regeln, Logik und Symbolmanipulation nachzubilden versucht.",
      long: "Die symbolische KI – rückblickend oft \"GOFAI\" (Good Old-Fashioned AI) genannt – prägte die KI von den 1950ern bis in die 1980er. Sie modelliert Wissen explizit in Symbolen, Regeln und logischen Schlüssen; der Mensch programmiert das Wissen weitgehend von Hand. Stärken: Nachvollziehbarkeit, exaktes logisches Schließen. Schwächen: schlechte Skalierung, Sprödigkeit bei Unschärfe und Ausnahmen. Ihr Gegenpol ist die datengetriebene, subsymbolische KI (neuronale Netze), die heute dominiert. Aktuelle Forschung verbindet beide Ansätze (\"neuro-symbolische KI\"), um Lernfähigkeit mit Logik und Erklärbarkeit zu vereinen. Wichtig für das Verständnis der Ideengeschichte der KI." },
    en: {
      term: "Symbolic AI (GOFAI)",
      short: "The classical AI approach that tries to reproduce intelligence through explicit rules, logic and symbol manipulation.",
      long: "Symbolic AI — in retrospect often called \"GOFAI\" (Good Old-Fashioned AI) — shaped AI from the 1950s into the 1980s. It models knowledge explicitly in symbols, rules and logical inference; humans largely program the knowledge by hand. Strengths: traceability, exact logical reasoning. Weaknesses: poor scaling, brittleness under vagueness and exceptions. Its counterpart is data-driven, sub-symbolic AI (neural networks), which dominates today. Current research combines both approaches (\"neuro-symbolic AI\") to unite learning ability with logic and explainability. Important for understanding the history of ideas in AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["expertensysteme", "turing-test", "ki-winter"] },

  { id: "expertensysteme", category: "ml", risk: null,
    tags: ["#Expertensystem", "#Regelbasiert", "#Geschichte"],
    de: {
      term: "Expertensysteme",
      short: "Regelbasierte Programme, die das Fachwissen menschlicher Experten in einem eng umgrenzten Gebiet nachbilden.",
      long: "Expertensysteme waren in den 1970er und 1980er Jahren der kommerziell erfolgreichste Zweig der symbolischen KI. Sie bestehen aus einer Wissensbasis (von Fachleuten formulierte \"Wenn-Dann\"-Regeln) und einer Inferenzmaschine, die daraus Schlussfolgerungen zieht – etwa zur medizinischen Diagnose oder technischen Fehlersuche. Vorteil: nachvollziehbare, begründbare Entscheidungen. Nachteil: hoher Aufwand für die Wissenserfassung (\"Wissensakquise-Engpass\") und schlechte Anpassung an neue Fälle. Ihr Niedergang trug zu einem \"KI-Winter\" bei. Konzeptionell leben Ideen der Expertensysteme in heutigen regelbasierten Systemen, Guardrails und neuro-symbolischen Ansätzen weiter." },
    en: {
      term: "Expert Systems",
      short: "Rule-based programs that reproduce the expertise of human experts in a tightly bounded field.",
      long: "Expert systems were the commercially most successful branch of symbolic AI in the 1970s and 1980s. They consist of a knowledge base (expert-formulated \"if-then\" rules) and an inference engine that draws conclusions from them — e.g. for medical diagnosis or technical troubleshooting. Advantage: traceable, justifiable decisions. Disadvantage: high effort for knowledge capture (the \"knowledge acquisition bottleneck\") and poor adaptation to new cases. Their decline contributed to an \"AI winter\". Conceptually, ideas of expert systems live on in today's rule-based systems, guardrails and neuro-symbolic approaches." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["symbolische-ki", "ki-winter", "ki"] },

  { id: "ki-winter", category: "ml", risk: null,
    tags: ["#KIWinter", "#Geschichte", "#Hype"],
    de: {
      term: "KI-Winter",
      short: "Historische Phasen, in denen überzogene Erwartungen an KI enttäuscht wurden und Förderung wie Interesse einbrachen.",
      long: "Als \"KI-Winter\" werden Perioden bezeichnet, in denen auf übertriebenen Optimismus (\"KI-Sommer\") Ernüchterung folgte: Versprechen wurden nicht eingelöst, Fördergelder und Investitionen versiegten, das Feld stagnierte. Bekannte Einbrüche gab es in den 1970er und späten 1980er Jahren, unter anderem nach den Grenzen früher neuronaler Netze und dem Niedergang der Expertensysteme. Die Lehre: KI-Entwicklung verläuft in Zyklen aus Hype und Korrektur. Der Begriff mahnt zur nüchternen Einordnung aktueller Erwartungen an generative KI und AGI – zwischen realem Fortschritt und überzogenen Heilsversprechen. Wichtig für ein historisch informiertes, ausgewogenes Urteil." },
    en: {
      term: "AI Winter",
      short: "Historical phases in which inflated expectations of AI were disappointed and funding and interest collapsed.",
      long: "\"AI winter\" denotes periods in which exaggerated optimism (an \"AI summer\") was followed by disillusionment: promises went unfulfilled, funding and investment dried up, the field stagnated. Notable downturns occurred in the 1970s and late 1980s, among other things after the limits of early neural networks and the decline of expert systems. The lesson: AI development proceeds in cycles of hype and correction. The term counsels sober appraisal of current expectations of generative AI and AGI — between real progress and overblown promises. Important for a historically informed, balanced judgement." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["symbolische-ki", "expertensysteme", "agi"] },

  { id: "skalierungsgesetze", category: "dl", risk: null,
    tags: ["#ScalingLaws", "#Modellgroesse", "#Training"],
    de: {
      term: "Skalierungsgesetze (Scaling Laws)",
      short: "Empirische Beobachtung, dass die Leistung von Modellen mit mehr Daten, Parametern und Rechenleistung vorhersagbar steigt.",
      long: "Skalierungsgesetze beschreiben, dass die Leistung großer Modelle sich erstaunlich regelmäßig verbessert, wenn man Modellgröße (Parameter), Datenmenge und Rechenaufwand gemeinsam erhöht – oft nach glatten mathematischen Beziehungen. Diese Erkenntnis trieb den Trend zu immer größeren Modellen an und machte Investitionen planbarer. Grenzen und offene Fragen: Skalierung ist teuer und ressourcenintensiv, stößt an Daten- und Energiegrenzen, und ob sie zu qualitativ neuen Fähigkeiten (bis hin zu AGI) führt, ist umstritten. Verwandt mit emergenten Fähigkeiten und der Debatte um Compute-Governance. Zentral, um die jüngste Dynamik der KI-Entwicklung zu verstehen." },
    en: {
      term: "Scaling Laws",
      short: "The empirical observation that model performance rises predictably with more data, parameters and compute.",
      long: "Scaling laws describe how the performance of large models improves strikingly regularly when model size (parameters), data volume and compute are increased together — often according to smooth mathematical relationships. This insight drove the trend towards ever-larger models and made investment more predictable. Limits and open questions: scaling is expensive and resource-intensive, runs into data and energy limits, and whether it leads to qualitatively new capabilities (up to AGI) is contested. Related to emergent abilities and the debate on compute governance. Central to understanding the recent dynamics of AI development." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["emergente-faehigkeiten", "parameter", "compute-governance", "pretraining"] },

  { id: "emergente-faehigkeiten", category: "dl", risk: null,
    tags: ["#Emergenz", "#Faehigkeiten", "#LLM"],
    de: {
      term: "Emergente Fähigkeiten",
      short: "Fähigkeiten, die bei großen Modellen scheinbar sprunghaft auftauchen und in kleineren Modellen nicht vorhanden waren.",
      long: "Als emergent gelten Fähigkeiten großer Sprachmodelle, die erst ab einer bestimmten Größe oder Trainingsmenge auftreten und aus kleineren Modellen nicht erkennbar waren – etwa mehrschrittiges Schließen oder das Befolgen komplexer Anweisungen. Sie befeuerten die Erwartung, dass weiteres Skalieren neue Fähigkeiten \"freischaltet\". Die Deutung ist jedoch umstritten: Manche Forschende argumentieren, die scheinbaren Sprünge seien teils ein Artefakt der gewählten Messgrößen und in Wahrheit gradueller. Wichtiges, aber vorsichtig zu interpretierendes Konzept an der Schnittstelle von Empirie und Hype. Verwandt mit Skalierungsgesetzen und der Debatte über die Grenzen aktueller KI." },
    en: {
      term: "Emergent Abilities",
      short: "Abilities that seem to appear abruptly in large models and were absent in smaller ones.",
      long: "Emergent abilities are capabilities of large language models that appear only above a certain size or training volume and were not discernible from smaller models — e.g. multi-step reasoning or following complex instructions. They fuelled the expectation that further scaling \"unlocks\" new abilities. The interpretation is contested, however: some researchers argue the apparent jumps are partly an artefact of the chosen metrics and in truth more gradual. An important but cautiously interpreted concept at the interface of empirics and hype. Related to scaling laws and the debate on the limits of current AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["skalierungsgesetze", "agi", "reasoning-modell", "weltmodell", "stochastischer-papagei"] },

  { id: "technologische-singularitaet", category: "ethics", risk: null,
    tags: ["#Singularitaet", "#Zukunft", "#Spekulation"],
    de: {
      term: "Technologische Singularität",
      short: "Hypothetischer Zukunftspunkt, an dem sich KI so schnell selbst verbessert, dass die Entwicklung für Menschen unüberschaubar wird.",
      long: "Die Idee der technologischen Singularität besagt, dass eine hinreichend fortgeschrittene KI sich selbst verbessern könnte, was zu einer sich beschleunigenden \"Intelligenzexplosion\" mit unvorhersehbaren Folgen führe. Populär gemacht wurde sie unter anderem von Autoren wie Vernor Vinge und Ray Kurzweil. Die These ist hochspekulativ und in der Fachwelt umstritten: Kritiker verweisen auf physikalische, ökonomische und methodische Grenzen und warnen vor unbegründetem Futurismus. Der Begriff dient als Rahmen für Debatten über langfristige Chancen und Risiken sehr leistungsfähiger KI. Klar von belegbarer, gegenwärtiger Technik zu trennen und mit epistemischer Vorsicht zu behandeln." },
    en: {
      term: "Technological Singularity",
      short: "A hypothetical future point at which AI improves itself so rapidly that development becomes unfathomable to humans.",
      long: "The idea of the technological singularity holds that a sufficiently advanced AI could improve itself, leading to an accelerating \"intelligence explosion\" with unforeseeable consequences. It was popularised by authors such as Vernor Vinge and Ray Kurzweil, among others. The thesis is highly speculative and contested among experts: critics point to physical, economic and methodological limits and warn against unfounded futurism. The term serves as a frame for debates on the long-term opportunities and risks of very capable AI. To be clearly separated from demonstrable, present-day technology and treated with epistemic caution." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["superintelligenz", "existenzielles-risiko", "agi"] },

  { id: "superintelligenz", category: "ethics", risk: null,
    tags: ["#Superintelligenz", "#Sicherheit", "#Zukunft"],
    de: {
      term: "Superintelligenz",
      short: "Hypothetische Intelligenz, die die besten menschlichen Fähigkeiten in praktisch allen Bereichen weit übertrifft.",
      long: "Superintelligenz bezeichnet eine gedachte KI, die dem Menschen in nahezu jeder relevanten Hinsicht – wissenschaftlich, strategisch, sozial – deutlich überlegen wäre. Der Begriff, unter anderem durch den Philosophen Nick Bostrom geprägt, steht im Zentrum von Debatten über KI-Sicherheit: Wie ließe sich eine solche Intelligenz kontrollieren und an menschlichen Werten ausrichten (Alignment), bevor sie entsteht? Befürworter dieser Sorge fordern frühzeitige Sicherheitsforschung; Kritiker halten das Szenario für spekulativ und warnen davor, gegenwärtige reale Risiken zu vernachlässigen. Eng verknüpft mit existenziellem Risiko und der technologischen Singularität. Als Zukunftsszenario, nicht als heutige Technik zu verstehen." },
    en: {
      term: "Superintelligence",
      short: "A hypothetical intelligence far surpassing the best human abilities in practically all domains.",
      long: "Superintelligence denotes a conceived AI that would be markedly superior to humans in nearly every relevant respect — scientific, strategic, social. The term, shaped among others by the philosopher Nick Bostrom, is central to debates on AI safety: how could such an intelligence be controlled and aligned with human values before it arises? Proponents of this concern call for early safety research; critics consider the scenario speculative and warn against neglecting present-day real risks. Closely linked to existential risk and the technological singularity. To be understood as a future scenario, not present-day technology." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["technologische-singularitaet", "existenzielles-risiko", "alignment", "agi"] },

  { id: "existenzielles-risiko", category: "ethics", risk: null,
    tags: ["#xRisk", "#Sicherheit", "#Debatte"],
    de: {
      term: "Existenzielles Risiko durch KI",
      short: "Die umstrittene These, sehr fortgeschrittene KI könnte katastrophale, bis hin zu die Menschheit bedrohende Folgen haben.",
      long: "Unter existenziellem Risiko (\"x-risk\") versteht man die Sorge, dass hochentwickelte, fehlausgerichtete oder missbrauchte KI katastrophale, potenziell irreversible Schäden für die Menschheit verursachen könnte. Vertreter fordern vorsorgliche Sicherheitsforschung, Alignment und internationale Koordination. Kritiker halten solche Szenarien für spekulativ und mahnen, dass die Fokussierung auf ferne Risiken von realen gegenwärtigen Schäden (Diskriminierung, Desinformation, Machtkonzentration) ablenke. Die Debatte prägt Positionen führender Forschender, Unternehmen und Regierungen und beeinflusst Sicherheitsgipfel und Regulierung. Ein Feld, das sachlich und ausgewogen darzustellen ist, ohne eine der Seiten als gesichert zu behandeln." },
    en: {
      term: "Existential Risk from AI",
      short: "The contested thesis that very advanced AI could have catastrophic, even humanity-threatening consequences.",
      long: "Existential risk (\"x-risk\") refers to the concern that highly advanced, misaligned or misused AI could cause catastrophic, potentially irreversible harm to humanity. Proponents call for precautionary safety research, alignment and international coordination. Critics consider such scenarios speculative and warn that focusing on distant risks distracts from real present-day harms (discrimination, disinformation, concentration of power). The debate shapes the positions of leading researchers, companies and governments and influences safety summits and regulation. A field to be presented factually and even-handedly, without treating either side as settled." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["superintelligenz", "technologische-singularitaet", "ai-safety-summits"] },

  { id: "anthropomorphismus", category: "ethics", risk: null,
    tags: ["#Anthropomorphismus", "#Wahrnehmung", "#UX"],
    de: {
      term: "Anthropomorphismus (bei KI)",
      short: "Die menschliche Neigung, KI-Systemen fälschlich Verständnis, Absichten oder Gefühle zuzuschreiben.",
      long: "Anthropomorphismus bezeichnet die Tendenz, technischen Systemen menschliche Eigenschaften zuzuschreiben. Bei flüssig formulierenden Sprachmodellen ist der Effekt besonders stark: Nutzer nehmen leicht Verstehen, Empathie oder eigene Absichten an, wo tatsächlich statistische Textvorhersage stattfindet. Das kann zu übermäßigem Vertrauen, emotionaler Bindung, Fehlgebrauch und falschen Erwartungen führen – besonders bei vulnerablen Personen. Verantwortungsvolle Gestaltung wirkt dem entgegen (Transparenz über die KI-Natur, Vermeidung täuschender Vermenschlichung). Der AI Act adressiert dies über Transparenzpflichten (Art. 50). Wichtiges Konzept für Ethik, Nutzerschutz und die realistische Einordnung dessen, was heutige KI ist und nicht ist." },
    en: {
      term: "Anthropomorphism (in AI)",
      short: "The human tendency to wrongly attribute understanding, intentions or feelings to AI systems.",
      long: "Anthropomorphism denotes the tendency to attribute human characteristics to technical systems. With fluently phrasing language models the effect is especially strong: users readily assume understanding, empathy or intentions where in fact statistical text prediction is taking place. This can lead to over-trust, emotional attachment, misuse and false expectations — especially for vulnerable people. Responsible design counteracts this (transparency about the AI nature, avoiding deceptive humanisation). The AI Act addresses this via transparency duties (Art. 50). An important concept for ethics, user protection and realistically placing what today's AI is and is not." },
    links: [ { label: "Art. 50 AI Act", url: "https://artificialintelligenceact.eu/article/50/" } ],
    related: ["ki-bewusstsein", "stochastischer-papagei", "transparenzpflichten"] },

  { id: "digitale-kluft", category: "ethics", risk: null,
    tags: ["#DigitalDivide", "#Teilhabe", "#Gerechtigkeit"],
    de: {
      term: "Digitale Kluft (bei KI)",
      short: "Ungleicher Zugang zu KI-Technologien und ihren Vorteilen zwischen Ländern, Regionen und gesellschaftlichen Gruppen.",
      long: "Die digitale Kluft beschreibt Ungleichheiten im Zugang zu und im Nutzen von digitaler Technik. Bei KI verschärft sie sich, weil Rechenleistung, Daten, Fachkräfte und Kapital stark konzentriert sind: Wenige Länder und Konzerne dominieren die leistungsfähigsten Modelle, während andere Regionen abgehängt zu werden drohen (\"KI-Kluft\"). Folgen: wirtschaftliche und wissenschaftliche Abhängigkeit, Unterrepräsentation von Sprachen und Kulturen in Trainingsdaten, ungleiche Teilhabe an Produktivitätsgewinnen. Gegenmaßnahmen betreffen Kapazitätsaufbau, offene Modelle und internationale Kooperation – zentrale Anliegen von UN und Globalem Süden. Verbindet Technikentwicklung mit Fragen globaler Gerechtigkeit." },
    en: {
      term: "Digital Divide (in AI)",
      short: "Unequal access to AI technologies and their benefits between countries, regions and social groups.",
      long: "The digital divide describes inequalities in access to and benefit from digital technology. With AI it deepens, because compute, data, skilled workers and capital are heavily concentrated: a few countries and corporations dominate the most capable models, while other regions risk being left behind (an \"AI divide\"). Consequences: economic and scientific dependence, under-representation of languages and cultures in training data, unequal participation in productivity gains. Countermeasures concern capacity building, open models and international cooperation — central concerns of the UN and the Global South. Links technology development with questions of global justice." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["global-partnership-ai", "un-ki-resolution", "ki-souveraenitaet"] },

  { id: "weltmodell", category: "dl", risk: null,
    tags: ["#WorldModel", "#Repraesentation", "#Forschung"],
    de: {
      term: "Weltmodell (World Model)",
      short: "Interne Repräsentation, mit der ein KI-System die Struktur und Dynamik seiner Umwelt abbildet, um vorauszuplanen.",
      long: "Ein Weltmodell ist eine gelernte innere Darstellung davon, wie die Umwelt aufgebaut ist und sich verändert – gewissermaßen eine \"Simulation im Kopf\" des Systems. Damit kann ein Agent Folgen möglicher Handlungen vorhersagen und planen, statt nur zu reagieren. Weltmodelle sind ein aktives Forschungsfeld, besonders in Robotik, Reinforcement Learning und bei multimodalen Systemen. Offen ist, in welchem Maße große Sprachmodelle bereits implizite Weltmodelle bilden oder nur Oberflächenstatistik lernen – eine Kernfrage der Debatte über echtes \"Verstehen\". Konzept an der Grenze zwischen aktueller Forschung und den Zukunftsfragen leistungsfähigerer, planender KI." },
    en: {
      term: "World Model",
      short: "An internal representation with which an AI system captures the structure and dynamics of its environment to plan ahead.",
      long: "A world model is a learned internal representation of how the environment is structured and changes — in effect a \"simulation in the system's head\". With it, an agent can predict the consequences of possible actions and plan rather than merely react. World models are an active research field, especially in robotics, reinforcement learning and multimodal systems. It is open to what extent large language models already form implicit world models or only learn surface statistics — a core question in the debate about genuine \"understanding\". A concept at the boundary between current research and the future questions of more capable, planning AI." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["emergente-faehigkeiten", "verkoerperte-ki", "reasoning-modell"] },

  { id: "verkoerperte-ki", category: "ml", risk: null,
    tags: ["#EmbodiedAI", "#Robotik", "#Interaktion"],
    de: {
      term: "Verkörperte KI (Embodied AI)",
      short: "KI, die über einen physischen Körper – etwa einen Roboter – mit der realen Welt wahrnimmt und handelt.",
      long: "Verkörperte KI verbindet Wahrnehmung, Entscheidung und Handlung in einem physischen System, das in der realen Welt agiert – vom Industrieroboter über autonome Fahrzeuge bis zu humanoiden Robotern. Anders als rein softwarebasierte Systeme muss sie mit Sensordaten, physikalischen Gesetzen, Unsicherheit und Echtzeitanforderungen umgehen. Der Ansatz beruht auf der These, dass echte Intelligenz teils aus der Interaktion mit einer physischen Umwelt erwächst (\"embodiment\"). Zunehmend werden große Modelle mit Robotik gekoppelt, um allgemeinere Fähigkeiten zu erreichen. Sicherheits-, Haftungs- und Aufsichtsfragen sind hier besonders greifbar, da Fehler physische Folgen haben. Verbindet KI-Forschung mit Robotik und den Hochrisiko-Regeln für Maschinen." },
    en: {
      term: "Embodied AI",
      short: "AI that perceives and acts in the real world through a physical body — e.g. a robot.",
      long: "Embodied AI combines perception, decision and action in a physical system operating in the real world — from industrial robots through autonomous vehicles to humanoid robots. Unlike purely software-based systems, it must handle sensor data, physical laws, uncertainty and real-time requirements. The approach rests on the thesis that genuine intelligence partly arises from interaction with a physical environment (\"embodiment\"). Increasingly, large models are coupled with robotics to achieve more general capabilities. Safety, liability and oversight questions are especially tangible here, as errors have physical consequences. Links AI research with robotics and the high-risk rules for machinery." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["autonomes-fahren", "cobot", "weltmodell"] },

  { id: "neuromorphes-computing", category: "dl", risk: null,
    tags: ["#Neuromorph", "#Hardware", "#Effizienz"],
    de: {
      term: "Neuromorphes Computing",
      short: "Rechnerarchitekturen, die die Funktionsweise biologischer Gehirne nachahmen, um KI energieeffizienter auszuführen.",
      long: "Neuromorphe Chips orientieren sich an der Arbeitsweise des Gehirns: Sie verarbeiten Informationen über ereignisgesteuerte \"Spikes\", verbinden Speicher und Rechenwerk eng und arbeiten stark parallel. Ziel ist eine drastisch höhere Energieeffizienz als bei klassischen Prozessoren – wichtig angesichts des wachsenden Stromverbrauchs von KI und für Edge-Anwendungen mit knappem Energiebudget. Die Technik ist noch überwiegend Forschung, mit ersten spezialisierten Chips. Sie ist verwandt mit \"spiking neural networks\". Ein Ansatz, der die Nachhaltigkeitsfrage der KI (Green AI) auf der Hardware-Ebene adressiert und langfristig neue Fähigkeiten ermöglichen könnte. Noch nicht im Massenmarkt angekommen." },
    en: {
      term: "Neuromorphic Computing",
      short: "Computing architectures mimicking the workings of biological brains to run AI more energy-efficiently.",
      long: "Neuromorphic chips are inspired by how the brain works: they process information via event-driven \"spikes\", tightly couple memory and computation and operate highly in parallel. The aim is drastically higher energy efficiency than classical processors — important given AI's growing power consumption and for edge applications with tight energy budgets. The technology is still largely research, with first specialised chips. It is related to \"spiking neural networks\". An approach that addresses AI's sustainability question (green AI) at the hardware level and could enable new capabilities in the long term. Not yet in the mass market." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["ki-nachhaltigkeit", "edge-ai", "quanten-maschinelles-lernen"] },

  { id: "quanten-maschinelles-lernen", category: "ml", risk: null,
    tags: ["#QuantumML", "#Quanten", "#Forschung"],
    de: {
      term: "Quanten-maschinelles Lernen",
      short: "Forschungsfeld an der Schnittstelle von Quantencomputing und maschinellem Lernen.",
      long: "Quanten-maschinelles Lernen (QML) untersucht, ob und wie Quantencomputer bestimmte ML-Aufgaben beschleunigen oder verbessern könnten – etwa Optimierung, Simulation von Molekülen oder das Verarbeiten hochdimensionaler Daten. Quantencomputer nutzen Phänomene wie Superposition und Verschränkung. Der Bereich ist überwiegend theoretisch und experimentell: Heutige Quantenhardware ist noch klein und fehleranfällig, ein praktischer Vorteil gegenüber klassischen Methoden ist bislang nicht allgemein belegt. Langfristig könnten sich in Nischen Vorteile ergeben, verbunden mit erheblichen Fragen (etwa für die Kryptografie). Beispiel für eine spekulative, aber ernsthaft erforschte Zukunftsrichtung. Klar von einsatzreifer Technik zu unterscheiden." },
    en: {
      term: "Quantum Machine Learning",
      short: "A research field at the interface of quantum computing and machine learning.",
      long: "Quantum machine learning (QML) investigates whether and how quantum computers could accelerate or improve certain ML tasks — e.g. optimisation, simulating molecules or processing high-dimensional data. Quantum computers exploit phenomena such as superposition and entanglement. The field is largely theoretical and experimental: today's quantum hardware is still small and error-prone, and a practical advantage over classical methods is not yet generally demonstrated. In the long term, advantages could arise in niches, coupled with significant questions (e.g. for cryptography). An example of a speculative but seriously researched future direction. To be clearly distinguished from deployment-ready technology." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["neuromorphes-computing", "ki"] },

  { id: "ki-bewusstsein", category: "ethics", risk: null,
    tags: ["#Bewusstsein", "#Philosophie", "#Debatte"],
    de: {
      term: "Maschinelles Bewusstsein (Debatte)",
      short: "Die offene philosophische und wissenschaftliche Frage, ob KI-Systeme je Bewusstsein oder subjektives Erleben haben könnten.",
      long: "Ob eine Maschine Bewusstsein, Empfindungen oder subjektives Erleben haben kann, ist eine ungelöste Frage an der Grenze von Philosophie, Kognitionswissenschaft und KI. Heutige Systeme – auch sehr überzeugende Sprachmodelle – gelten nach breitem Fachkonsens nicht als bewusst; ihre menschenähnlichen Ausgaben beruhen auf statistischer Mustererzeugung, nicht auf innerem Erleben. Der starke Eindruck des Gegenteils ist ein Fall von Anthropomorphismus. Zugleich fehlt eine allgemein akzeptierte Theorie und ein Test für Bewusstsein, weshalb die Frage seriös offengehalten wird. Sie berührt künftige ethische Fragen (etwa nach einem möglichen moralischen Status). Sachlich, ohne Sensationslust und ohne vorschnelle Festlegung darzustellen." },
    en: {
      term: "Machine Consciousness (Debate)",
      short: "The open philosophical and scientific question of whether AI systems could ever have consciousness or subjective experience.",
      long: "Whether a machine can have consciousness, sentience or subjective experience is an unresolved question at the boundary of philosophy, cognitive science and AI. Today's systems — even very convincing language models — are, by broad expert consensus, not considered conscious; their human-like outputs rest on statistical pattern generation, not inner experience. The strong impression of the opposite is a case of anthropomorphism. At the same time, there is no generally accepted theory or test for consciousness, so the question is seriously kept open. It touches future ethical questions (e.g. about a possible moral status). To be presented factually, without sensationalism and without premature commitment." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["anthropomorphismus", "turing-test", "stochastischer-papagei"] },

  { id: "stochastischer-papagei", category: "ethics", risk: null,
    tags: ["#StochasticParrot", "#LLM", "#Kritik"],
    de: {
      term: "Stochastischer Papagei",
      short: "Kritische Metapher, wonach große Sprachmodelle Sprache statistisch nachplappern, ohne deren Bedeutung zu verstehen.",
      long: "Der Begriff \"stochastischer Papagei\" wurde 2021 in einer einflussreichen kritischen Arbeit geprägt. Er beschreibt große Sprachmodelle als Systeme, die auf Basis von Wahrscheinlichkeiten überzeugend klingende Wortfolgen erzeugen, ohne Bedeutung, Absicht oder ein Verständnis der Welt zu besitzen. Die Kritik warnt vor Risiken wie Verzerrungen in den Trainingsdaten, Umwelt- und Ressourcenkosten sowie der Täuschung von Menschen durch scheinbar sinnhafte Ausgaben. Gegenpositionen verweisen auf emergente Fähigkeiten und mögliche implizite Weltmodelle. Der Begriff ist ein zentraler Bezugspunkt der Debatte über die Grenzen heutiger KI und verwandt mit Anthropomorphismus und der Bewusstseinsfrage." },
    en: {
      term: "Stochastic Parrot",
      short: "A critical metaphor holding that large language models statistically mimic language without understanding its meaning.",
      long: "The term \"stochastic parrot\" was coined in an influential 2021 critical paper. It describes large language models as systems that produce convincing-sounding word sequences based on probabilities, without possessing meaning, intent or an understanding of the world. The critique warns of risks such as biases in the training data, environmental and resource costs, and the deception of people by seemingly meaningful outputs. Counter-positions point to emergent abilities and possible implicit world models. The term is a central reference point in the debate on the limits of today's AI, related to anthropomorphism and the consciousness question." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["anthropomorphismus", "ki-bewusstsein", "halluzination", "emergente-faehigkeiten"] },

  { id: "ki-lebenszyklus", category: "governance", risk: null,
    tags: ["#Lebenszyklus", "#Governance", "#MLOps"],
    de: {
      term: "KI-Lebenszyklus",
      short: "Die Phasen eines KI-Systems von der Idee über Entwicklung und Betrieb bis zur Außerbetriebnahme.",
      long: "Der KI-Lebenszyklus gliedert ein KI-System in aufeinanderfolgende Phasen: Zielsetzung und Datenerhebung, Entwicklung und Training, Validierung und Konformitätsbewertung, Bereitstellung, laufender Betrieb mit Überwachung sowie schließlich Aktualisierung oder Außerbetriebnahme. Dieses Denken in Phasen ist zentral für Governance und Compliance: Der AI Act knüpft viele Pflichten (Risikomanagement, Daten-Governance, Protokollierung, Nachmarktbeobachtung) ausdrücklich an den gesamten Lebenszyklus, nicht nur an den Zeitpunkt des Inverkehrbringens. Auch internationale Definitionen (OECD) und Managementnormen (ISO/IEC 42001) sowie MLOps-Praktiken orientieren sich daran. Bindeglied zwischen technischer Praxis und regulatorischen Anforderungen über die gesamte Nutzungsdauer." },
    en: {
      term: "AI Lifecycle",
      short: "The phases of an AI system from idea through development and operation to decommissioning.",
      long: "The AI lifecycle structures an AI system into successive phases: objective-setting and data collection, development and training, validation and conformity assessment, deployment, ongoing operation with monitoring, and finally updating or decommissioning. This phase-based thinking is central to governance and compliance: the AI Act ties many duties (risk management, data governance, logging, post-market monitoring) expressly to the entire lifecycle, not just the moment of placing on the market. International definitions (OECD) and management standards (ISO/IEC 42001) as well as MLOps practices are oriented to it too. A link between technical practice and regulatory requirements across the whole period of use." },
    links: [ { label: "OECD AI", url: "https://oecd.ai/" } ],
    related: ["mlops", "ai-governance", "iso-42001", "konformitaetsbewertungsverfahren"] }

];
