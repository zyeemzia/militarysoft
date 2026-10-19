/* Unit systems, timeline and headline figures. Copyright © ZyeemZia */
window.MS = window.MS || {};
MS.systems = [
  {
    id: 'simulator', code: 'STSS', name: 'Signal Simulator', full: 'Signal Transmission Simulator System',
    window: 'Signal Transmission Simulator — Training Workspace',
    summary: 'A physics-based radio and line-communication training simulator for the Signal Training Centre & School. Instructors set a scenario on a map — district, date and time, natural effects, allotted equipment — and students lay out their own radios, relay sets, cables and network devices, then press RUN. Every link is graded with a dB margin and a plain-language reason, so a failed link teaches something.',
    features: [
      'Wireless engine: path loss, diffraction, antenna gain, receiver sensitivity and full link budget',
      'Moving ionosphere with MUF / LUF / OWF, skip distance and a 24-hour HF frequency prediction',
      'Wired engine: RJ45 pin order, cable pairs, ports, IP/DHCP, SIP and fibre/TV chains',
      'Each device shown Connected, Configuration error or Disconnected — with the reason',
      'Scenario wizard and a practice-versus-standard comparison report (Excel, CSV, PDF)',
      'Runs fully offline on one PC with offline map tiles and signed updates'
    ],
    tech: ['Python', 'Flask', 'SQLite', 'Leaflet', 'Offline tiles', 'Signed updates', 'Windows .exe'],
    history: [['SEP 26', 'Design begins: map workspace, equipment catalogue and the physics engines'], ['09 OCT 26', 'Version 2.0.0 — first stamped build'], ['14 OCT 26', 'Version 2.0.3 deployed with a teaching-scenario library'], ['18 OCT 26', 'Version 3.0.2 — 680 automated tests and a 60-screen user manual']],
    shots: [['sim-hf-map', 'HF wireless path on the training map, with map layers'], ['sim-hf-config', 'HF Config wizard: antenna, ionosphere and Max Usable Frequency'], ['sim-cable-config', 'Cable configuration: ports, laying type, uplink and downlink']]
  },
  {
    id: 'stms', code: 'STMS', name: 'Training Management', full: 'Signal Training Management System',
    window: 'STC&S Training Management System',
    summary: 'Runs the whole training year of a military school in one offline web system: the yearly plan, running courses, weekly programmes, attendance and parade state, question banks, marks, result sheets and official course reports in the unit’s own Bangla and English formats. On top of the daily administration it adds a smart calendar, timetable clash detection, file sharing and multi-stage approvals.',
    features: [
      'Yearly training plan with four-stage approval',
      'Week planner that catches instructor, room and course clashes before they happen',
      'Attendance register, training parade state and percentage reports',
      'Question bank, papers, marks entry and result sheets that lock once approved',
      'Smart calendar and a “Today & Up Next” dashboard with live class countdown',
      'File-sharing drive with per-person, group and course rights'
    ],
    tech: ['Python', 'Flask', 'SQLite (WAL)', 'Bangla / English', 'Signed updates', 'Windows .exe'],
    history: [['24 SEP 26', 'Development begins with the training wing, screen by screen'], ['30 SEP 26', 'Version 2.0 — first complete release with calendar, file sharing and approvals'], ['14 OCT 26', 'Version 2.0.3 deployed on the unit server — 861 automated tests'], ['18 OCT 26', 'Version 3.0.2 — the unit’s own report formats; load-tested at 5,400 students']],
    shots: [['stms-dashboard', 'Administrator dashboard: class in progress, next classes and alerts (demo data)'], ['stms-calendar', 'Smart calendar with filters for classes, exams and events'], ['stms-drive', 'File-sharing drive'], ['stms-health', 'System health check: version, database integrity, backups']]
  },
  {
    id: 'srims', code: 'SRIMS', name: 'Signal Records', full: 'Signal Records Information Management System',
    window: 'SRIMS — Signal Records Information Management System',
    summary: 'The service-record system of the Corps of Signals: tens of thousands of records covering postings, promotions, missions, qualifications, allowances, retirement and pension, with more than 60 printable reports. Re-engineered in 2026 with the records office: faults fixed, new reports added, slow reports made dramatically faster, and the whole system packed into one self-contained folder that backs itself up.',
    features: [
      'Setup, Data Entry and Reports across 165+ screens',
      'Report speed-ups of up to 34× — one search went from 512 s to 15 s',
      'New reports, including strength as at any past date',
      'Automatic verified, compressed backups every four hours, with one-click restore',
      'Server-enforced screen rights for every user',
      'One portable folder: web server, database and runtime bundled, nothing to install'
    ],
    tech: ['PHP / Laravel', 'MariaDB', 'Python', 'Flask', 'Portable bundle'],
    history: [['20 SEP 26', 'Work begins with the records office, refined through five rounds of feedback'], ['08 OCT 26', 'Version 2.0.3 — signed updates, Last Pay Certificate and seniority roll'], ['14 OCT 26', 'Version 2.0.8 deployed — 30+ office-reported issues closed'], ['18 OCT 26', 'Version 3.0.2 — automatic verified backups and new strength reports']],
    shots: [['srims-signin', 'Sign-in screen'], ['srims-home', 'Home screen with Setup, Data Entry and Reports (figures blurred)'], ['srims-backup', 'Backup page: automatic four-hourly verified backups (figures blurred)']]
  },
  {
    id: 'rtms', code: 'RTMS', name: 'Recruit Training', full: 'Recruit Training Management System',
    window: 'RTMS — Analytical Data Hub',
    summary: 'Turns recruit training results into decisions. RTMS reads a training centre’s result workbooks — or its own results database — and produces live dashboards, company and platoon rankings, early-warning risk lists, heatmaps, distributions and ready-to-print Word and Excel reports. It is multi-institution: each centre sees only its own recruits, with optional comparison across centres.',
    features: [
      'Overview dashboard with batch health, pass rates and subject grade cards',
      'Smart profiles with batch, company and platoon rank for every recruit',
      'Early-warning risk radar, performance heatmap and progression trends',
      'Advanced Analysis Lab: command brief, what-if re-weighting, correlation and anomaly detection',
      'Smart Query in Bangla or English across any recruit detail',
      'Export Studio, Word result report builder and print-ready PDF'
    ],
    tech: ['Python', 'Flask', 'pandas', 'NumPy', 'openpyxl', 'SQLite', 'Offline charts'],
    history: [['JUL 26', 'Project begins'], ['17 AUG 26', 'First result-dashboard prototype reading the result workbook'], ['SEP 26', 'Grows into the full analytics hub: comparison, import and export'], ['15 OCT 26', 'Version 3.0.0 — full edition with its own results database'], ['18 OCT 26', 'Version 3.0.2 — workbook support for more training centres']],
    shots: [['rtms-heatmap', 'Performance heatmap: platoon by subject'], ['rtms-distribution', 'Statistical normal distribution of batch scores'], ['rtms-lab', 'Advanced Analysis Lab']]
  }
];

MS.stats = [['10', 'Programs in service'], ['1,500+', 'Automated tests'], ['24', 'BD MIL app releases in 2026'], ['5,000+', 'BD MIL installs (est.)'], ['34×', 'Fastest report speed-up']];

MS.timeline = [
  { label: 'PHASE 1', span: 'JUN – AUG 26 · Field tools', events: [
    { date: '30 JUN 26', title: 'BD MIL ABBR', text: 'the defence terminology dictionary goes offline on Android' },
    { date: '05 JUL 26', title: 'BD MIL WX', text: 'field weather and terrain; seven releases in three weeks' },
    { date: 'JUL 26', title: 'RTMS', text: 'recruit training analytics project begins', desk: true },
    { date: '17 AUG 26', title: 'RTMS prototype', text: 'first result dashboard reads the centre’s workbook', desk: true }
  ] },
  { label: 'PHASE 2', span: 'SEP 26 · Unit systems', events: [
    { date: '11 SEP 26', title: 'BD MIL OFFICE & Morse Code', text: 'an offline office suite and a signal trainer ship the same day' },
    { date: '20 SEP 26', title: 'SRIMS', text: 'work on the records system begins with the records office', desk: true },
    { date: '24 SEP 26', title: 'STMS', text: 'training management begins, built screen by screen with the training wing', desk: true },
    { date: '25 SEP 26', title: 'Signal Simulator', text: 'work starts on the physics engine', desk: true },
    { date: '30 SEP 26', title: 'STMS 2.0 & ABBR WEB', text: 'first complete STMS release; the dictionary comes to the browser', desk: false }
  ] },
  { label: 'PHASE 3', span: 'OCT 26 · Deployment', events: [
    { date: '09 OCT 26', title: 'Simulator 2.0.0', text: 'first stamped build', desk: true },
    { date: '14 OCT 26', title: 'Deployment day', text: 'STMS, Signal Simulator and SRIMS go live on unit servers', desk: true },
    { date: '16 OCT 26', title: 'BD MIL GADGET', text: 'the all-in-one field suite joins the family' },
    { date: '18 OCT 26', title: 'Version 3.0.2', text: 'all four unit systems reach their current delivery builds', desk: true }
  ] }
];
