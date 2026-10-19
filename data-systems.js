/* Unit systems, capabilities and headline figures. Copyright © ZyeemZia */
window.MS = window.MS || {};
MS.systems = [
  {
    id: 'simulator', code: 'STSS', name: 'Signal Simulator', full: 'Signal Transmission Simulator System',
    window: 'Signal Transmission Simulator — Training Workspace',
    pitch: 'Plan the net. Press RUN. See why every link lives or dies.',
    summary: 'A map-based radio and line-communication trainer. Instructors set the scenario; students lay out radios, relay sets, cables and network kit, run it, and get every link graded with the reason.',
    caps: [
      ['map', 'Exercises on a real map', 'Radios, relays, cables and network devices laid out on offline map tiles.'],
      ['wave', 'HF to microwave physics', 'Terrain, weather, path loss and a moving ionosphere with MUF / LUF.'],
      ['check', 'Every link graded', 'Excellent to none, with the dB margin and a plain-language reason.'],
      ['report', 'Practice vs standard', 'Side-by-side comparison reports in Excel, CSV and PDF.']
    ],
    shots: [['sim-hf-map', 'HF wireless path on the training map, with map layers'], ['sim-hf-config', 'HF Config wizard: antenna, ionosphere and Max Usable Frequency'], ['sim-cable-config', 'Cable configuration: ports, laying type, uplink and downlink']]
  },
  {
    id: 'stms', code: 'STMS', name: 'Training Management', full: 'Signal Training Management System',
    window: 'STC&S Training Management System',
    pitch: 'A whole training year on one screen.',
    summary: 'Plans, timetables, attendance, question papers, marks and official course reports for a military school, in Bangla and English, from any browser in the building.',
    caps: [
      ['calendar', 'Plan to programme', 'Yearly training plan with approvals, weekly programmes and a smart calendar.'],
      ['clash', 'Clash-proof planner', 'Instructor, room and course clashes caught before they happen.'],
      ['check', 'Attendance to results', 'Parade state, question bank, marks entry and locked result sheets.'],
      ['lang', 'Reports in Bangla & English', 'Official course reports ready to print or open in Word.']
    ],
    shots: [['stms-dashboard', 'Today & Up Next dashboard with the class in progress (demo data)'], ['stms-calendar', 'Smart calendar with filters for classes, exams and events'], ['stms-drive', 'File-sharing drive'], ['stms-health', 'System health at a glance: database, backups, updates']]
  },
  {
    id: 'srims', code: 'SRIMS', name: 'Signal Records', full: 'Signal Records Information Management System',
    window: 'SRIMS — Signal Records Information Management System',
    pitch: 'Every service record, in seconds.',
    summary: 'The complete service record of the Corps of Signals — postings, promotions, missions, qualifications, retirement and pension — with fast search and more than 60 printable reports.',
    caps: [
      ['search', 'The whole record', 'Postings, promotions, missions and pension across 25+ record tabs.'],
      ['bolt', 'Up to 34× faster', 'Reports that took minutes now arrive in seconds.'],
      ['print', '60+ printable reports', 'Strength, postings, promotions and more, exported to Excel or Word.'],
      ['shield', 'Safe by default', 'Verified backups every four hours and per-user screen rights.']
    ],
    shots: [['srims-signin', 'Sign-in screen'], ['srims-home', 'Home screen with Setup, Data Entry and Reports (figures blurred)'], ['srims-backup', 'Automatic four-hourly verified backups (figures blurred)']]
  },
  {
    id: 'rtms', code: 'RTMS', name: 'Recruit Training', full: 'Recruit Training Management System',
    window: 'RTMS — Analytical Data Hub',
    pitch: 'Turn result sheets into decisions.',
    summary: 'Live dashboards, rankings, early warnings and ready-to-print reports for every recruit in a batch — for one training centre or several, each seeing only its own.',
    caps: [
      ['chart', 'Live dashboards', 'Batch health, pass rates, grade cards and company and platoon rankings.'],
      ['radar', 'Early-warning radar', 'Recruits at risk flagged while there is still time to help.'],
      ['brain', 'Analysis lab', 'Command brief, what-if re-weighting, correlations and anomaly detection.'],
      ['search', 'Smart query', 'Find any recruit by any detail, in Bangla or English.']
    ],
    shots: [['rtms-heatmap', 'Performance heatmap: platoon by subject'], ['rtms-distribution', 'Normal distribution of batch scores'], ['rtms-lab', 'Advanced Analysis Lab']]
  }
];

MS.stats = [['10', 'Military programs'], ['5,000+', 'BD MIL installs (est.)'], ['2,651', 'Defence terms on hand'], ['34×', 'Faster records reports'], ['0', 'Internet needed']];

MS.glance = [
  ['offline', 'Works with no network', 'Every system and app keeps working in the field, the office or a dead zone.'],
  ['lang', 'Bangla and English', 'Screens, reports and search in both languages, including Bijoy text.'],
  ['device', 'Runs on what you have', 'One PC for the whole unit, any browser on the network, any Android phone.'],
  ['shield', 'Private and ad-free', 'Data stays on the unit PC or the phone. No cloud accounts, no ads.'],
  ['bolt', 'Answers in seconds', 'Smart search, instant conversions and reports that arrive while you wait.'],
  ['compass', 'Field kit in a pocket', 'GR conversion, compass, Morse, weather and report formats on one phone.']
];
