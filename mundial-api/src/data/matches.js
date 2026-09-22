// Datos de ejemplo (placeholder). En un caso real esto vendría de una
// base de datos o de una API externa (ej. football-data.org, API-Football).
//
// status admitidos: "finalizado" | "programado" | "en vivo"
// result es null cuando el partido todavía no se ha jugado.

const matches = [
  // ===== Fase de grupos - Grupo A (finalizados) =====
  {
    id: 1,
    stage: 'Fase de grupos',
    group: 'A',
    homeTeam: 'México',
    awayTeam: 'Polonia',
    date: '2026-06-12',
    time: '20:00',
    stadium: 'Estadio Azteca',
    city: 'Ciudad de México',
    status: 'finalizado',
    result: { homeScore: 2, awayScore: 1 }
  },
  {
    id: 2,
    stage: 'Fase de grupos',
    group: 'A',
    homeTeam: 'Arabia Saudita',
    awayTeam: 'Canadá',
    date: '2026-06-12',
    time: '17:00',
    stadium: 'BC Place',
    city: 'Vancouver',
    status: 'finalizado',
    result: { homeScore: 0, awayScore: 0 }
  },
  {
    id: 3,
    stage: 'Fase de grupos',
    group: 'A',
    homeTeam: 'México',
    awayTeam: 'Arabia Saudita',
    date: '2026-06-17',
    time: '19:00',
    stadium: 'Estadio Azteca',
    city: 'Ciudad de México',
    status: 'finalizado',
    result: { homeScore: 3, awayScore: 0 }
  },
  {
    id: 4,
    stage: 'Fase de grupos',
    group: 'A',
    homeTeam: 'Polonia',
    awayTeam: 'Canadá',
    date: '2026-06-17',
    time: '16:00',
    stadium: 'BC Place',
    city: 'Vancouver',
    status: 'finalizado',
    result: { homeScore: 1, awayScore: 1 }
  },
  {
    id: 5,
    stage: 'Fase de grupos',
    group: 'A',
    homeTeam: 'México',
    awayTeam: 'Canadá',
    date: '2026-06-22',
    time: '20:00',
    stadium: 'AT&T Stadium',
    city: 'Arlington',
    status: 'finalizado',
    result: { homeScore: 1, awayScore: 1 }
  },
  {
    id: 6,
    stage: 'Fase de grupos',
    group: 'A',
    homeTeam: 'Polonia',
    awayTeam: 'Arabia Saudita',
    date: '2026-06-22',
    time: '20:00',
    stadium: 'Lincoln Financial Field',
    city: 'Filadelfia',
    status: 'finalizado',
    result: { homeScore: 2, awayScore: 0 }
  },

  // ===== Fase de grupos - Grupo B (finalizados) =====
  {
    id: 7,
    stage: 'Fase de grupos',
    group: 'B',
    homeTeam: 'Argentina',
    awayTeam: 'Francia',
    date: '2026-06-13',
    time: '20:00',
    stadium: 'MetLife Stadium',
    city: 'East Rutherford',
    status: 'finalizado',
    result: { homeScore: 2, awayScore: 0 }
  },
  {
    id: 8,
    stage: 'Fase de grupos',
    group: 'B',
    homeTeam: 'Australia',
    awayTeam: 'Túnez',
    date: '2026-06-13',
    time: '17:00',
    stadium: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    status: 'finalizado',
    result: { homeScore: 1, awayScore: 1 }
  },
  {
    id: 9,
    stage: 'Fase de grupos',
    group: 'B',
    homeTeam: 'Argentina',
    awayTeam: 'Australia',
    date: '2026-06-18',
    time: '19:00',
    stadium: 'MetLife Stadium',
    city: 'East Rutherford',
    status: 'finalizado',
    result: { homeScore: 4, awayScore: 1 }
  },
  {
    id: 10,
    stage: 'Fase de grupos',
    group: 'B',
    homeTeam: 'Francia',
    awayTeam: 'Túnez',
    date: '2026-06-18',
    time: '16:00',
    stadium: 'Mercedes-Benz Stadium',
    city: 'Atlanta',
    status: 'finalizado',
    result: { homeScore: 2, awayScore: 2 }
  },
  {
    id: 11,
    stage: 'Fase de grupos',
    group: 'B',
    homeTeam: 'Argentina',
    awayTeam: 'Túnez',
    date: '2026-06-23',
    time: '20:00',
    stadium: 'Hard Rock Stadium',
    city: 'Miami',
    status: 'finalizado',
    result: { homeScore: 1, awayScore: 0 }
  },
  {
    id: 12,
    stage: 'Fase de grupos',
    group: 'B',
    homeTeam: 'Francia',
    awayTeam: 'Australia',
    date: '2026-06-23',
    time: '20:00',
    stadium: 'Hard Rock Stadium',
    city: 'Miami',
    status: 'finalizado',
    result: { homeScore: 3, awayScore: 0 }
  },

  // ===== Octavos de final =====
  {
    id: 13,
    stage: 'Octavos de final',
    group: null,
    homeTeam: 'México',
    awayTeam: 'Francia',
    date: '2026-06-26',
    time: '15:00',
    stadium: 'SoFi Stadium',
    city: 'Inglewood',
    status: 'en vivo',
    result: null
  },
  {
    id: 14,
    stage: 'Octavos de final',
    group: null,
    homeTeam: 'Argentina',
    awayTeam: 'Polonia',
    date: '2026-06-29',
    time: '15:00',
    stadium: 'Levi\u2019s Stadium',
    city: 'Santa Clara',
    status: 'programado',
    result: null
  },
  {
    id: 15,
    stage: 'Octavos de final',
    group: null,
    homeTeam: 'Ganador Grupo C',
    awayTeam: 'Ganador Grupo D',
    date: '2026-06-30',
    time: '15:00',
    stadium: 'NRG Stadium',
    city: 'Houston',
    status: 'programado',
    result: null
  },
  {
    id: 16,
    stage: 'Octavos de final',
    group: null,
    homeTeam: 'Ganador Grupo E',
    awayTeam: 'Ganador Grupo F',
    date: '2026-07-01',
    time: '19:00',
    stadium: 'Gillette Stadium',
    city: 'Foxborough',
    status: 'programado',
    result: null
  },

  // ===== Cuartos de final =====
  {
    id: 17,
    stage: 'Cuartos de final',
    group: null,
    homeTeam: 'Ganador Octavos 1',
    awayTeam: 'Ganador Octavos 2',
    date: '2026-07-04',
    time: '15:00',
    stadium: 'AT&T Stadium',
    city: 'Arlington',
    status: 'programado',
    result: null
  }
];

module.exports = matches;
