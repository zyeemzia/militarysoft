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
    summary: 'Everything a military school runs on — plans, timetables, attendance, exams, results, reports, leave, notices and files — in Bangla and English, for every role from commandant to course member, on any PC, tablet or phone in the building.',
    caps: [
      ['calendar', 'Plan to programme', 'Yearly training plan with four-stage approval, weekly programmes and a smart calendar.'],
      ['clash', 'Clash-proof week planner', 'Instructor, room and course clashes caught as you plan; copy last week in one click.'],
      ['bell', 'Today & Up Next', 'Live dashboard with the class in progress, countdown to the next and 5-minute reminders.'],
      ['check', 'Attendance & parade state', 'Registers, training parade state and attendance reports with percentages.'],
      ['report', 'Exams to final results', 'Question bank, Bangla papers with solutions, marks entry, compile sheets and locked results.'],
      ['chart', 'Results Center', 'Course aggregates and pass rates for staff; every course member sees their own results.'],
      ['lang', 'Bangla & English', 'The whole interface and every official report in both languages, to print or Word.'],
      ['shield', 'Approvals & roles', 'Multi-stage approvals with remarks, role-based access and a full audit log.'],
      ['folder', 'File-sharing drive', 'Share with people, groups or courses; previews, versions and trash.'],
      ['palette', 'Five themes, four modes', 'Sky Blue, Gold, Silver, Bronze and Tactical Green — light, dark, auto or sunset.']
    ],
    also: ['Leave management', 'Assignments & special tasks', 'Course materials & archive', 'Notice board', 'Course evaluation feedback', 'Custom report formats', 'Ctrl+K search anywhere', 'Excel / CSV export on every list', 'Profiles with photo cropping', 'Gallery', 'Automatic backups', 'Phone, tablet & PC'],
    shots: [['stms-signin', 'Sign in'], ['stms-dashboard', 'Today & Up Next dashboard with the class in progress'], ['stms-bangla', 'The same dashboard in Bangla'], ['stms-dark-staff', 'Staff dashboard in a dark theme'], ['stms-calendar', 'Smart calendar: classes, exams, events and holidays'], ['stms-yearly-plan', 'Yearly Training Plan with approval status'], ['stms-results-center', 'Results Center: subjects, exams and pass rates'], ['stms-my-results', 'My Results: scores and grades for each course member'], ['stms-report-formats', 'Report formats for programmes, reports, papers and attendance'], ['stms-notifications', 'Notifications for approvals and tasks'], ['stms-drive', 'File-sharing drive'], ['stms-settings', 'Settings: organisation, training week and default theme'], ['stms-backup', 'Backup & restore with automatic daily copies'], ['stms-health', 'System health at a glance']]
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
