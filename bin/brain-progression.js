#!/usr/bin/env node

import getName from '../src/cli.js';
import startGame from '../src/games/index.js';

// Init player
const name = getName();
// Init game by name
const game = startGame('progression');
// Start game
game(name);
