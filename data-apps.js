/* BD MIL field apps — facts from bdmil.zyeemzia.com and the BD MIL apps.
   Screens captured from the released BD MIL builds, in the order a user meets them. Copyright © ZyeemZia */
window.MS = window.MS || {};
MS.apps = [
  {
    id: 'abbr', name: 'BD MIL ABBR', short: 'Defence dictionary', ver: 'v1.2.0',
    tagline: 'The defence terminology dictionary in your pocket.',
    summary: 'Every defence abbreviation, offline, in one tap — with tactical symbols, flashcards and a text tool that expands a whole paragraph.',
    tags: ['2,651 terms', 'Smart & A–Z search', 'Tactical symbols', 'Text tool', 'Flashcards', 'Light & dark'],
    tools: [['Flutter', 'Cross-platform UI'], ['Dart', 'App logic'], ['Geolocator', 'Compass & GPS'], ['Local store', 'Offline dictionary'], ['Share sheet', 'Export & share']],
    shots: [['bdabbr-01-launch', 'Launch screen'], ['bdabbr-02-database', 'Smart search with abbreviation of the day, compass, clock and stopwatch'], ['bdabbr-03-a-z', 'A–Z index with letter jump bar'], ['bdabbr-04-tactical-symbols', 'Tactical symbols: draw and save your own'], ['bdabbr-05-add-term', 'Add a new abbreviation'], ['bdabbr-06-text-tool', 'Text Tool: abbreviate or de-abbreviate a whole paragraph'], ['bdabbr-07-flashcards', 'Flashcards: learn terms with a running score'], ['bdabbr-08-menu', 'Menu: theme, text tool, flashcards, upload, export'], ['bdabbr-09-light-theme', 'Light theme'], ['bdabbr-10-suite', 'ZyeemZia Tactical Suite: the sister apps']]
  },
  {
    id: 'wx', name: 'BD MIL WX', short: 'Weather & terrain', ver: 'v1.0.8',
    tagline: 'Weather read for the field, not the news.',
    summary: 'Live aviation weather for Bangladesh: airbase METARs, a 7-day tactical forecast, radar, satellite and wind map — on one screen.',
    tags: ['Live METAR', '7-day forecast', 'Radar & satellite', 'NWP charts', 'Wind map'],
    tools: [['Flutter', 'Cross-platform UI'], ['Dart', 'App logic'], ['Aviation feeds', 'METAR & forecasts'], ['WebView', 'Radar & wind map'], ['Geolocator', 'Location']],
    shots: [['bdwx-01-launch', 'Launch screen'], ['bdwx-02-home-metar', 'BAF live outlook and live METAR from the BD airbases'], ['bdwx-03-forecast', '7-day tactical forecast with the next 24 hours'], ['bdwx-04-info-radars', 'Latest weather tables and animated radars'], ['bdwx-05-weather-map', 'Meteorological info and the interactive wind map'], ['bdwx-06-nwp', 'NWP forecast chart'], ['bdwx-07-satellite', 'Satellite image']]
  },
  {
    id: 'office', name: 'BD MIL OFFICE', short: 'Offline office', ver: 'v1.0.12',
    tagline: 'A nine-tab offline office for the orderly room.',
    summary: 'A complete office in your pocket: edit and sign PDFs, scan documents, write in Word and PowerPoint — in Bangla too — with no network.',
    tags: ['PDF edit & sign', 'Scanner', 'Word & PowerPoint', 'Bijoy Bangla', 'OCR intel scan', 'File parse'],
    tools: [['Flutter', 'Cross-platform UI'], ['Google ML Kit', 'OCR & document scanner'], ['Syncfusion PDF', 'View, edit & sign PDF'], ['PointyCastle', 'Encryption'], ['Archive & XML', 'Word & PowerPoint'], ['Local notifications', 'Daily briefings']],
    shots: [['bdoffice-01-pdf-edit', 'PDF Edit: open a PDF to search, sign, merge or protect it'], ['bdoffice-02-scanner', 'Scanner: auto edges, crop & split, blank page finder, sign'], ['bdoffice-03-pext', 'Pext: extract the text of a PDF'], ['bdoffice-04-word', 'Word: .docx, .doc and Bijoy (SutonnyMJ) Bangla'], ['bdoffice-05-powerpoint', 'PowerPoint: present, edit and reorder slides'], ['bdoffice-06-database', 'Database: 2,651 entries with smart and A–Z search'], ['bdoffice-07-typewriter', 'Typewriter: raw intel in, cipher output out'], ['bdoffice-08-intel-scan', 'Intel Scan: OCR every page of a document'], ['bdoffice-09-file-parse', 'File Parse: extract and translate incoming files']]
  },
  {
    id: 'morse', name: 'BD MIL Morse Code', short: 'Signal trainer', ver: 'v1.0.3',
    tagline: 'A signal key, a decoder and a training school.',
    summary: 'Send, receive and master Morse: transmit by sound, light or vibration, decode by hand or microphone, and train up the ranks.',
    tags: ['Sound · flash · vibrate', 'Straight key & paddles', 'Live decoder', 'Q-codes & prosigns', 'Koch trainer'],
    tools: [['Flutter', 'Cross-platform UI'], ['Dart', 'Tone & timing engine'], ['Microphone', 'Live decoder'], ['Haptics & torch', 'Signal output'], ['Share sheet', 'Send messages']],
    shots: [['bdmorse-01-launch', 'Launch screen'], ['bdmorse-02-translate', 'Translate: type text, choose the output channel'], ['bdmorse-06-transmit-sos', 'SOS ready to transmit'], ['bdmorse-03-key', 'Key: send by hand, decoded live'], ['bdmorse-04-codes', 'Codes: alphabet, prosigns and Q-codes'], ['bdmorse-05-learn', 'Learn: Koch-method training with XP'], ['bdmorse-07-settings', 'Settings: pitch, volume, tone and haptics'], ['bdmorse-08-field-manual', 'Tactical field manual']]
  },
  {
    id: 'abbrweb', name: 'BD MIL ABBR WEB', short: 'Installable web app', ver: 'Web', web: true,
    tagline: 'The dictionary on any screen, no APK needed.',
    summary: 'The dictionary on any screen — install it from the browser on a PC, tablet or phone, no APK needed.',
    tags: ['Any browser', 'Installable', 'Flashcards', 'Backup & restore'],
    link: 'https://bdmilabbrweb.zyeemzia.com/',
    tools: [['HTML5', 'Structure'], ['CSS3', 'Responsive design'], ['JavaScript', 'Search & flashcards'], ['PWA manifest', 'Installable'], ['Service worker', 'Works offline']],
    shots: [['abbrweb-mobile', 'BD MIL ABBR WEB on a phone'], ['abbrweb-desktop', 'The same app in a desktop browser']]
  },
  {
    id: 'gadget', name: 'BD MIL GADGET', short: 'Tactical field suite', ver: 'v1.0.2',
    tagline: 'Fourteen field tools in one phone.',
    summary: 'Fourteen field tools on one phone: track, navigate by grid reference, take bearings, plan by sun and moon, signal and send reports.',
    tags: ['Tracker & follow', 'Lat/Long ⇄ GR', 'Compass & clinometer', 'Sun & moon', 'Field calc', 'Report formats', 'Corps tools'],
    tools: [['Flutter', 'Cross-platform UI'], ['flutter_map', 'Offline maps'], ['ObjectBox', 'Crash-safe tracking'], ['Geolocator', 'GPS'], ['Sensors', 'Compass & clinometer'], ['Text-to-speech', 'Voice guidance'], ['Printing', 'Report output']],
    shots: [['gadget-01-tracker', 'Tracker: distance, live pace, speed and local time'], ['gadget-02-follow', 'Follow: guided route with checkpoints'], ['gadget-03-latlong-gr', 'Lat/Long to GR with BD map sheet'], ['gadget-04-gr-latlong', 'GR (6-figure) on a BD map sheet back to Lat/Long'], ['gadget-05-waypoints', 'Waypoints: save pins and vectors on the map'], ['gadget-06-compass', 'Compass in mils and degrees, with clinometer'], ['gadget-07-timer', 'Date-time group, stopwatch and countdown'], ['gadget-08-sun-moon', 'Sun and moon: twilight, sunrise, sunset, moon phase'], ['gadget-09-field-calc', 'Field calc: mil relation, resection, pace count'], ['gadget-10-signal', 'Signal: flashlight, emergency SOS, Morse message, night light'], ['gadget-11-formats', 'Report formats: SALUTE, 9-line MEDEVAC, LOCSTAT, SITREP'], ['gadget-12-corps', 'Corps tools: polar plot and observer correction'], ['gadget-13-navy-air', 'Navy & Air: passage leg, speed-time-distance, course to steer'], ['gadget-14-report', 'Tactical report: compose and send']]
  }
];
MS.links = { downloads: 'https://bdmil.zyeemzia.com/', main: 'https://www.zyeemzia.com', policy: 'https://policy.zyeemzia.com' };
