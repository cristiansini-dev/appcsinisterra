const teams = require('../data/teams');
const matches = require('../data/matches');

// GET /api/teams -> listado de equipos
function getAllTeams(req, res) {
  res.json({ total: teams.length, teams });
}

// GET /api/teams/:name/matches -> todos los partidos de un equipo (jugados y por jugar)
function getTeamMatches(req, res) {
  const name = req.params.name.toLowerCase();
  const teamMatches = matches.filter(
    (m) => m.homeTeam.toLowerCase() === name || m.awayTeam.toLowerCase() === name
  );

  if (teamMatches.length === 0) {
    return res.status(404).json({ message: `No se encontraron partidos para "${req.params.name}"` });
  }

  return res.json({ team: req.params.name, total: teamMatches.length, matches: teamMatches });
}

module.exports = { getAllTeams, getTeamMatches };
