function computeStandings(matches, teamsInGroup) {
  const table = {};

  teamsInGroup.forEach((team) => {
    table[team] = {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0
    };
  });

  matches
    .filter((m) => m.status === 'finalizado' && m.result)
    .forEach((m) => {
      const { homeTeam, awayTeam, result } = m;
      if (!table[homeTeam] || !table[awayTeam]) return;

      const home = table[homeTeam];
      const away = table[awayTeam];

      home.played += 1;
      away.played += 1;
      home.goalsFor += result.homeScore;
      home.goalsAgainst += result.awayScore;
      away.goalsFor += result.awayScore;
      away.goalsAgainst += result.homeScore;

      if (result.homeScore > result.awayScore) {
        home.won += 1;
        home.points += 3;
        away.lost += 1;
      } else if (result.homeScore < result.awayScore) {
        away.won += 1;
        away.points += 3;
        home.lost += 1;
      } else {
        home.drawn += 1;
        away.drawn += 1;
        home.points += 1;
        away.points += 1;
      }
    });

  return Object.values(table)
    .map((row) => ({ ...row, goalDifference: row.goalsFor - row.goalsAgainst }))
    .sort(
      (a, b) =>
        b.points - a.points ||
        b.goalDifference - a.goalDifference ||
        b.goalsFor - a.goalsFor ||
        a.team.localeCompare(b.team)
    );
}

module.exports = { computeStandings };
