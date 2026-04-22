// Shared data for all three dashboard variations.
window.TD = (() => {
  const labels = [
    "2022-10","2022-11","2022-12",
    "2023-01","2023-02","2023-03","2023-04","2023-05","2023-06","2023-07","2023-08","2023-09","2023-10","2023-11","2023-12",
    "2024-01","2024-02","2024-03","2024-04","2024-05","2024-06","2024-07","2024-08","2024-09","2024-10","2024-11","2024-12",
    "2025-01","2025-02","2025-03","2025-04","2025-05","2025-06","2025-07","2025-08","2025-09","2025-10","2025-11","2025-12",
    "2026-01"
  ];

  const bodyweight = [115,113.8,112.5,111.2,110,108.7,107.5,106.3,105.1,103.8,102.6,101.3,100,98.9,97.8,96.7,95.6,94.5,93.4,92.3,91.2,90.1,89,94,92.8,91.4,90,88.6,87.2,85.8,83.8,82,83.7,87.3,91,89.5,88.1,86.6,85.2,84];
  const fatPct = [27,26.6,26.2,25.8,25.4,25,24.6,24.2,23.8,23.4,23,22.6,23.5,22.9,22.3,21.7,21.1,20.6,20.1,19.6,19.1,18.6,18,20.2,19.9,19.4,18.8,18.1,17.4,16.6,15.8,11.5,13.2,14.8,16.5,15.9,15.4,14.7,14.3,14];

  const benchAbs = [84,76,81,84,93,102,93,99,106,106,109,109,111,113,116,105,112,112,105,105,96,90,87,90,93,99,95,105,110,113,113,113,119,127,124,127,120,123,130,116];
  const deadliftAbs = [108,109,116,113,125,131,116,122,134,142,145,141,140,143,146,142,152,147,150,146,140,125,113,115,121,129,138,146,152,160,166,169,169,180,180,169,172,172,170,171];
  const squatAbs = [90,90,93,102,110,100,105,110,122,128,127,null,null,null,null,null,null,null,null,null,null,null,null,87,87,99,102,112,118,124,124,124,133,140,120,124,133,127,132,126];

  const benchRel = [0.73,0.67,0.72,0.755,0.845,0.938,0.865,0.931,1.009,1.021,1.062,1.08,1.11,1.14,1.186,1.086,1.172,1.185,1.124,1.094,1.05,0.999,0.978,0.894,1.002,1.083,1.133,1.185,1.261,1.317,1.348,1.413,1.422,1.455,1.363,1.419,1.362,1.397,1.455,1.381];
  const deadliftRel = [0.913,0.958,1.031,1.016,1.136,1.205,1.079,1.161,1.306,1.368,1.413,1.423,1.375,1.456,1.493,1.468,1.59,1.556,1.606,1.582,1.421,1.362,1.27,1.351,1.455,1.543,1.622,1.716,1.835,1.935,2.017,2.113,2.019,2.062,1.978,1.888,1.952,1.986,2.019,2.048];
  const squatRel = [0.694,0.752,0.827,0.782,1.0,0.92,0.977,1.035,1.161,1.233,1.238,null,null,null,null,null,null,null,null,null,null,null,null,0.926,0.797,1.083,1.211,1.264,1.353,1.445,1.48,1.55,1.589,1.604,1.319,1.385,1.362,1.465,1.551,1.502];

  // Phase index ranges (inclusive)
  const phases = [
    { key: 'first_cut',   name: 'First cut',   color: '#3a6ea5', from: 0,  to: 10, start: 'Oct 2022', end: 'Aug 2023',
      stats: { weight: -12.4, fat: -4.0, bench: +25, deadlift: +37, squat: +37 } },
    { key: 'second_cut',  name: 'Second cut',  color: '#c08a2e', from: 11, to: 22, start: 'Sep 2023', end: 'Aug 2024',
      stats: { weight: -13.6, fat: -5.0, bench: +3,  deadlift: -32, squat: null } },
    { key: 'third_cut',   name: 'Third cut',   color: '#6b3fa0', from: 23, to: 30, start: 'Sep 2024', end: 'May 2025',
      stats: { weight: -12.8, fat: -8.7, bench: +18, deadlift: +54, squat: +37 } },
    { key: 'recomp',      name: 'Recomp',      color: '#b8493a', from: 31, to: 39, start: 'Jun 2025', end: 'Jan 2026',
      stats: { weight: +2.0,  fat: +2.5, bench: +11, deadlift: +2,  squat: -7  } },
  ];

  const kpis = {
    weight:   { from: 115, to: 84,  delta: -31,  unit: 'kg', better: 'down' },
    fat:      { from: 27,  to: 14,  delta: -13,  unit: 'pp', better: 'down' },
    bench:    { from: 84,  to: 116, delta: +32,  unit: 'kg', better: 'up' },
    squat:    { from: 90,  to: 126, delta: +36,  unit: 'kg', better: 'up' },
    deadlift: { from: 108, to: 171, delta: +63,  unit: 'kg', better: 'up' },
    relDL:    { from: 0.91, to: 2.05, delta: +1.14, unit: '× BW', better: 'up' },
  };

  const findings = [
    { title: 'Remarkable body recomposition',
      body: 'Lost 31 kg of body weight and reduced body fat from 27% to 14% over ~39 months — while simultaneously gaining significant strength across all three main lifts. This is atypical: strength usually stalls during a cut.' },
    { title: 'Best strength phase: Sep 2024 – May 2025',
      body: 'Despite a 12.8 kg weight loss, deadlift gained 54 kg and bench gained 18 kg. The strongest recomposition signal in the data — likely from improved technique and better efficiency at lower bodyweight.' },
    { title: 'Relative strength trajectory',
      body: 'Deadlift relative strength grew from 0.91× to 2.05× bodyweight — a 125% increase. Bench grew from 0.73× to 1.38×. Relative strength substantially exceeds absolute numbers at the start, showing mass was the limiting factor early on.' },
    { title: 'Squat hiatus Sep 2023 – Aug 2024',
      body: 'No squat data exists for 12 months. On return, squat 1RM was 87 kg — down from a peak of 128 kg (Jul 2023). Full recovery took until May 2025. Suggests an injury or deliberate programming choice removed squats.' },
    { title: 'Weight and strength correlation',
      body: 'Counterintuitively, the periods of greatest weight loss coincide with the greatest relative strength gains. The mini-bulk (Jun 2025 – Jan 2026) added weight but produced modest absolute gains and did not improve relative strength markedly.' },
    { title: 'Best trade-off period',
      body: 'Oct 2022 – Aug 2023: lost 12.4 kg and dropped 4 pp body fat while gaining 25 kg bench and 37 kg deadlift. This phase benefitted from beginner / re-beginner adaptation where strength gains come even in a caloric deficit.' },
  ];

  return {
    labels, bodyweight, fatPct,
    benchAbs, squatAbs, deadliftAbs,
    benchRel, squatRel, deadliftRel,
    phases, kpis, findings,
  };
})();
