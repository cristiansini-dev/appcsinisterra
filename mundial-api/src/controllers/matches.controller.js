const matches = require('../data/matches');

function applyFilters(list, query) {
  let result = list;

  if (query.status) {
    result = result.filter((m) => m.status === query.status);
  }
  if (query.group) {
    result = result.filter((m) => m.group === query.group.toUpperCase());
  }
  if (query.stage) {
    result = result.filter((m) =>
      m.stage.toLowerCase().includes(String(query.stage).toLowerCase())
    );
  }
  if (query.team) {
    const team = String(query.team).toLowerCase();
    result = result.filter(
      (m) =>
        m.homeTeam.toLowerCase().includes(team) || m.awayTeam.toLowerCase().includes(team)
    );
  }

  return result;
}

function sortByDateAsc(list) {
  return [...list].sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
}

// GET /api/matches  -> todos los partidos, admite filtros por query string
function getAllMatches(req, res) {
  const filtered = applyFilters(matches, req.query);
  res.json({ total: filtered.length, matches: sortByDateAsc(filtered) });
}

// GET /api/matches/results -> solo partidos finalizados (con resultado)
function getResults(req, res) {
  const finished = applyFilters(matches, { ...req.query, status: 'finalizado' });
  res.json({ total: finished.length, matches: sortByDateAsc(finished) });
}

// GET /api/matches/upcoming -> programación de partidos faltantes
function getUpcoming(req, res) {
  const upcoming = applyFilters(matches, { ...req.query, status: 'programado' });
  res.json({ total: upcoming.length, matches: sortByDateAsc(upcoming) });
}

// GET /api/matches/live -> partidos en juego en este momento
function getLive(req, res) {
  const live = applyFilters(matches, { ...req.query, status: 'en vivo' });
  res.json({ total: live.length, matches: sortByDateAsc(live) });
}

// GET /api/matches/:id -> detalle de un partido puntual
function getMatchById(req, res) {
  const id = Number(req.params.id);
  const match = matches.find((m) => m.id === id);

  if (!match) {
    return res.status(404).json({ message: `No existe un partido con id ${id}` });
  }

  return res.json(match);
}

module.exports = {
  getAllMatches,
  getResults,
  getUpcoming,
  getLive,
  getMatchById
};
