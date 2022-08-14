function gameObject() {
    const teamProps = {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          Alan_Anderson: {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamdunks: 1
          },
          Reggie_Evans: {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamdunks: 7
          },
          Brook_Lopez: {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamdunks: 15
          },
          Manson_Plumlee: {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamdunks: 5
          },
          Jason_Terry: {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamdunks: 1
          }
        },
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          Jeff_Adrien: {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamdunks: 2
          },
          Bismak_Biyombo: {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamdunks: 10,
          },
          DeSagna_Diop: {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamdunks: 5
          },
          Ben_Gordon: {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamdunks: 0
          },
          Brendan_Haywood: {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamdunks: 12
          }
        },
      },
    };
    return teamProps;
  };
  
  function numPointsScored(player) {
    const game = gameObject();
    for (const team in game) {
      for (const mates in gameObject()[team].players) {
        if (player === mates) {
          return gameObject()[team].players[mates].points;
        }
      }
    }
    return 'Unknown Player';
  }
  
  function shoeSize(player) {
    const game = gameObject();
    for (const homeAway in game) {
      for (const mates in gameObject()[homeAway].players) {
        if (player === mates) {
          return gameObject()[homeAway].players[mates].shoe;
        }
      }
    }
    return 'Unknown Player';
  }
  
  function teamColors(team) {
    const game = gameObject();
    for (const homeAway in game) {
      if (team === gameObject()[homeAway].teamName) {
        return gameObject()[homeAway].colors;
      }
    }
    return 'Unknown Team';
  }
  
  function teamNames() {
    const game = gameObject();
    const teamNameArray = [];
    for (const homeAway in game) {
      teamNameArray.push(gameObject()[homeAway].teamName);
    }
    return teamNameArray;
  }
  
  function playerNumbers(team) {
    const game = gameObject();
    const playerNumberArray = [];
    for (const homeAway in game) {
      if (team === gameObject()[homeAway].teamName) {
        for (const player in gameObject()[homeAway].players) {
          playerNumberArray.push(gameObject()[homeAway].players[player].number);
        }
        return playerNumberArray;
      }
    }
    return 'Unknown Team';
  }
  
  
  function playerStats(player) {
    const game = gameObject();
    for (const homeAway in game) {
      for (const name in Object.keys(gameObject()[homeAway].players)) {
        if (player === Object.keys(gameObject()[homeAway].players)[name]) {
          return gameObject()[homeAway].players[player];
        }
      }
    }
    return 'Unknown Player'
  }
  
  function biggestShoe() {
    const game = gameObject();
    let bigShoeHaver;
    let bigShoe = 0;
    for (const homeAway in game) {
      let i = 0;
      for (const name in gameObject()[homeAway].players) {
        let currentPlayer = Object.keys(gameObject()[homeAway].players)[i];
        i++;
        if (gameObject()[homeAway].players[name].shoe > bigShoe) {
          bigShoe = gameObject()[homeAway].players[name].shoe
          bigShoeHaver = currentPlayer;
        }
      }
    }
    return bigShoeHaver;
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    const player = biggestShoe();
    for (const homeAway in game) {
      for (const mates in gameObject()[homeAway].players) {
        if (player === mates) {
          return gameObject()[homeAway].players[mates].rebounds;
        }
      }
    }
  }
  
  function highScorer() {
    const game = gameObject();
    let highScoreHaver;
    let highScore = 0;
    for (const homeAway in game) {
      let i = 0;
      for (const name in gameObject()[homeAway].players) {
        let currentPlayer = Object.keys(gameObject()[homeAway].players)[i];
        i++;
        if (gameObject()[homeAway].players[name].points > highScore) {
          highScore = gameObject()[homeAway].players[name].shoe
          highScoreHaver = currentPlayer;
        }
      }
    }
    return highScoreHaver;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homeScore = 0;
    let awayScore = 0;
    let i = 0;
    for(const homeAway in game) {
      let whichTeam = Object.keys(gameObject())[i];
      i++;
      for (const name in gameObject()[homeAway].players) {
        if(whichTeam = 'home') {
          homeScore += gameObject()[homeAway].players[name].points;
        } else {
          awayScore += gameObject()[homeAway].players[name].points;
        }
      }
    }
    if(homeScore > awayScore) {
      return gameObject().home.teamName;
    } else if(awayScore > homeScore) {
      return gameObject().away.teamName;
    } else {
      return 'tie';
    }
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    let longNameHaver = 'None';
    let longNameLength = longNameHaver.length;
    let longNameSteals = 0;
    for (const homeAway in game) {
      let i = 0;
      for (const name in gameObject()[homeAway].players) {
        let currentPlayer = Object.keys(gameObject()[homeAway].players)[i];
        i++;
        if (currentPlayer.length > longNameLength) {
          longNameHaver = currentPlayer;
          longNameSteals = gameObject()[homeAway].players[currentPlayer].steals;
        }
      }
    }
    for(const homeAway in game) {
      for(const name in gameObject()[homeAway].players) {
        if(gameObject()[homeAway].players[name].steals > longNameSteals) {
          return false;
        }
      }
    }
    return true;
  }
  
  //console.log(gameObject().home.players.Alan_Anderson.points);
  //console.log(numPointsScored('Brendan_Haywood'));
  //console.log(numPointsScored('Reggie_Evans'));
  //console.log(numPointsScored('Tim_Loughrist'));
  //console.log(shoeSize('Reggie_Evans'));
  //console.log(teamColors('Charlotte Hornets'));
  //console.log(teamColors('Tim Team'));
  //console.log(teamNames());
  //console.log(playerNumbers('Charlotte Hornets'));
  //console.log(playerStats('Reggie_Evans'));
  //console.log(biggestShoe());
  //console.log(bigShoeRebounds());
  //console.log(highScorer());
  //console.log(winningTeam());
  //console.log(playerWithLongestName());
  //console.log(doesLongNameStealATon());