const teams = require('../data/teams');
const matches = require('../data/matches');
const { computeStandings } = require('../utils/standings');

function getGroupNames() {
  return [...new Set(teams.map((t) => t.group))].sort();
}

// GET /api/groups -> resumen de todos los grupos con su tabla de posiciones
function getAllGroups(req, res) {
  const groups = getGroupNames().map((group) => {
    const teamsInGroup = teams.filter((t) => t.group === group).map((t) => t.name);
    const groupMatches = matches.filter((m) => m.group === group);
    return {
      group,
      teams: teamsInGroup,
      standings: computeStandings(groupMatches, teamsInGroup)
    };
  });

  res.json({ total: groups.length, groups });
}

// GET /api/groups/:group -> detalle de un grupo puntual
function getGroupByName(req, res) {
  const group = req.params.group.toUpperCase();
  const teamsInGroup = teams.filter((t) => t.group === group).map((t) => t.name);

  if (teamsInGroup.length === 0) {
    return res.status(404).json({ message: `No existe el grupo ${group}` });
  }

  const groupMatches = matches.filter((m) => m.group === group);

  return res.json({
    group,
    teams: teamsInGroup,
    standings: computeStandings(groupMatches, teamsInGroup),
    matches: groupMatches
  });
}

module.exports = { getAllGroups, getGroupByName };
