/* Field apps — facts from bdmil.zyeemzia.com, GitHub release feeds and Google Play listings (Oct 2026). */
window.MS = window.MS || {};
MS.apps = [
  {
    id: 'grconverter', name: 'BD MIL GR Converter Pro', short: 'GR Converter Pro', ver: 'v1.3.2',
    tagline: 'Grid references, tracking and proximity — offline.',
    summary: 'The first app of the suite and still the most installed. A coordinate engine that converts between MGRS, decimal degrees and DMS, measures range and bearing to a target, records Kalman-filtered GPS tracks and drops waypoints on offline satellite or topo maps — with a red night mode for low-light use.',
    features: ['MGRS · Decimal · DMS coordinate engine', 'Proximity: range & bearing to a target grid', 'Kalman-filtered GPS tracker with speed and distance', 'Waypoints for targets, bases and hazards', 'Esri satellite, OSM, OpenTopo and Carto map layers', 'Red tactical night mode'],
    first: '23 MAY 26', latest: '17 OCT 26', releases: 5, installs: '500+',
    play: 'https://play.google.com/store/apps/details?id=com.zyeemzia.grconverterpro',
    shots: [['gr-coord', 'Coord Engine: latitude/longitude to DMS with live map'], ['gr-tracker', 'Tracker: time, distance and speed while moving'], ['gr-waypoints', 'Waypoints: save pins and measure live target range'], ['gr-proximity', 'Proximity in red night mode'], ['gr-manual', 'Built-in operational manual'], ['gr-splash', 'Launch screen']]
  },
  {
    id: 'abbr', name: 'BD MIL ABBR', short: 'Military Abbreviation', ver: 'v1.2.0',
    tagline: 'The defence terminology dictionary in your pocket.',
    summary: 'An offline dictionary of 2,651 Bangladesh military abbreviations, with NATO, Indian, Pakistani, UK and US categories alongside. Intel Scan reads printed pages with on-device OCR and expands every abbreviation it finds; File Parse does the same for PDF, TXT and DOCX reports.',
    features: ['2,651 BD MIL entries, plus NATO, India, Pakistan, UK and US', 'Smart and A–Z search with favourites', 'Intel Scan: on-device OCR of printed pages', 'File Parse: PDF, TXT and DOCX reports', 'Typewriter mode for raw field text', 'Bulk upload of new terms by category'],
    first: '30 JUN 26', latest: '11 OCT 26', releases: 3, installs: '100+',
    play: 'https://play.google.com/store/apps/details?id=com.zyeemzia.militaryabbreviation',
    shots: [['abbr-database', 'Database: smart search across all categories'], ['abbr-intelscan', 'Intel Scan: camera OCR to expanded text'], ['abbr-manual', 'Tactical field manual'], ['abbr-categories', 'Manage categories'], ['abbr-splash', 'Launch screen']]
  },
  {
    id: 'wx', name: 'BD MIL WX', short: 'Weather & terrain', ver: 'v1.0.8',
    tagline: 'Weather and terrain read for the field, not the news.',
    summary: 'A localised meteorological and telemetry tool for field operators: high-precision weather diagnostics with offline topographical analysis, packaged for use without a network and free of ads. Seven releases went out in its first three weeks.',
    features: ['Localised meteorological diagnostics', 'Offline topographical analysis', 'Field telemetry readouts', 'Works fully offline', 'Ad-free'],
    first: '05 JUL 26', latest: '27 JUL 26', releases: 7, installs: null,
    shots: [['wx-splash', 'BD MIL WX launch art'], ['wx-art', 'Splash artwork']]
  },
  {
    id: 'office', name: 'BD MIL OFFICE', short: 'Military Office', ver: 'v1.0.12',
    tagline: 'An offline office for the orderly room.',
    summary: 'A complete offline office suite: a PDF editor (search, sign, merge, rotate, number, watermark, password-protect), Word and PowerPoint handling, a document scanner with auto edges and magic clean-up, OCR Intel Scan, the full abbreviation database, and automatic Bijoy (SutonnyMJ) to Unicode conversion for Bangla documents.',
    features: ['PDF editor: search, sign, merge, rotate, watermark, protect', 'Document scanner with auto edges and clean-up', 'Intel Scan OCR and File Parse', 'Word and PowerPoint tools', 'Built-in 2,651-entry abbreviation database', 'Auto-convert Bijoy (SutonnyMJ) Bangla to Unicode'],
    first: '11 SEP 26', latest: '12 OCT 26', releases: 7, installs: '10+',
    play: 'https://play.google.com/store/apps/details?id=com.zyeemzia.militaryoffice',
    shots: [['office-scanner', 'Scanner: auto edges, crop & split, password PDF'], ['office-manual', 'Field manual with mission updates'], ['office-pdf', 'PDF Edit workspace'], ['office-database', 'Abbreviation database inside the office suite']]
  },
  {
    id: 'morse', name: 'BD MIL Morse Code', short: 'Military Morse Code', ver: 'v1.0.3',
    tagline: 'A signal key, a decoder and a training school.',
    summary: 'Morse for signallers, done properly: sample-accurate audio, a straight key, paddles and a microphone decoder, transmission by sound, vibration, torch or screen, the full alphabet with prosigns and tactical Q-codes, and a Koch-method trainer with Farnsworth timing and XP ranks.',
    features: ['Straight key, paddles and "Mic Ear" live decoder', 'Transmit by sound, vibration, torch or screen', 'Alphabet, prosigns and tactical Q-codes', 'Koch-method trainer with Farnsworth spacing', 'Adjustable WPM, pitch and tone character', 'XP ranks from Recruit upward'],
    first: '11 SEP 26', latest: '12 OCT 26', releases: 4, installs: null,
    shots: [['morse-key', 'Key: send by hand, decode live'], ['morse-codes', 'Codes: alphabet, prosigns, Q-codes'], ['morse-translate', 'Translate text to Morse and transmit'], ['morse-learn', 'Learn: Koch method training'], ['morse-settings', 'Signal tone and haptics'], ['morse-splash', 'Launch screen']]
  },
  {
    id: 'abbrweb', name: 'BD MIL ABBR WEB', short: 'Installable web app', ver: 'Web', web: true,
    tagline: 'The dictionary on any screen, no APK needed.',
    summary: 'The web edition of BD MIL ABBR, built for office PCs and quick look-ups on the move. It runs in any browser, installs to the home screen like an app, and keeps the full 2,651-entry database with flashcards, import, export and backup.',
    features: ['Runs in any browser: phone, tablet or PC', 'Installable to the home screen', 'Abbreviation of the day', 'Flashcards for learning terms', 'Import, export and full backup'],
    first: '30 SEP 26', latest: 'LIVE', releases: null, installs: null,
    link: 'https://bdmilabbrweb.zyeemzia.com/',
    shots: [['abbrweb-mobile', 'BD MIL ABBR WEB on a phone'], ['abbrweb-desktop', 'The same app in a desktop browser']]
  },
  {
    id: 'gadget', name: 'BD MIL GADGET', short: 'Tactical field suite', ver: 'v1.0.2',
    tagline: 'The newest app: the whole field kit on one phone.',
    summary: 'The all-in-one field suite: guided route-follow with voice on fully offline maps, a crash-safe tracker, compass and clinometer, sun and moon planning, resection, LED signalling and report formats — plus corps tools for ARTY, ARMD, INF, ENGR, MED, ORD, SUP and SIGS with 8-figure GR entry on BD map sheets and TRUE / MAG / GRID north.',
    features: ['Guided route-follow with voice, offline maps', 'Crash-safe tracker', 'Compass, clinometer and resection', 'Sun and moon planning', 'LED signalling and report formats', 'Corps tools: ARTY, ARMD, INF, ENGR, MED, ORD, SUP, SIGS'],
    first: '16 OCT 26', latest: '17 OCT 26', releases: 3, installs: null,
    face: ['Route follow · voice', 'Compass · clinometer', 'Resection', 'Sun & moon', 'LED signal', '8-fig GR · BD sheets', 'TRUE / MAG / GRID'],
    shots: []
  }
];
MS.links = { downloads: 'https://bdmil.zyeemzia.com/', main: 'https://www.zyeemzia.com', policy: 'https://policy.zyeemzia.com' };
