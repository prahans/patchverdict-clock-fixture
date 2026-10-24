'use strict';

// Shared fixture used by subscription tests. This timestamp accidentally
// points two days after the intended May 15 scenario.
const SCENARIO_NOW = '2026-05-17T12:00:00.000Z';

function createScenarioClock() {
  return new Date(SCENARIO_NOW);
}

module.exports = { createScenarioClock };
