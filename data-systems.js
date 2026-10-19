/* Unit systems and headline figures. Copyright © ZyeemZia */
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
    shots: [['stms-dashboard', 'Administrator dashboard: class in progress, next classes and alerts (demo data)'], ['stms-calendar', 'Smart calendar with filters for classes, exams and events'], ['stms-drive', 'File-sharing drive'], ['stms-health', 'System health check: version, database integrity, backups']]
  },
  {
    id: 'srims', code: 'SRIMS', name: 'Signal Records', full: 'Signal Records Information Management System',
    window: 'SRIMS — Signal Records Information Management System',
    summary: 'The service-record system of the Corps of Signals: tens of thousands of records covering postings, promotions, missions, qualifications, allowances, retirement and pension, with more than 60 printable reports. Re-engineered with the records office: faults fixed, new reports added, slow reports made dramatically faster, and the whole system packed into one self-contained folder that backs itself up.',
    features: [
      'Setup, Data Entry and Reports across 165+ screens',
      'Report speed-ups of up to 34× — one search went from 512 s to 15 s',
      'New reports, including strength as at any past date',
      'Automatic verified, compressed backups every four hours, with one-click restore',
      'Server-enforced screen rights for every user',
      'One portable folder: web server, database and runtime bundled, nothing to install'
    ],
    tech: ['PHP / Laravel', 'MariaDB', 'Python', 'Flask', 'Portable bundle'],
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
    shots: [['rtms-heatmap', 'Performance heatmap: platoon by subject'], ['rtms-distribution', 'Statistical normal distribution of batch scores'], ['rtms-lab', 'Advanced Analysis Lab']]
  }
];

MS.stats = [['10', 'Programs in service'], ['1,500+', 'Automated tests'], ['5,000+', 'BD MIL installs (est.)'], ['2,651', 'Defence terms in the dictionary'], ['34×', 'Fastest report speed-up']];
