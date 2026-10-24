'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { isSubscriptionActive } = require('../src/subscription');
const { createScenarioClock } = require('../setupTests');

test('active subscription remains valid at the May 15 scenario time', () => {
  assert.equal(
    isSubscriptionActive('2026-05-16T00:00:00.000Z', createScenarioClock()),
    true,
  );
});

test('already expired subscription is inactive', () => {
  assert.equal(
    isSubscriptionActive('2026-05-14T00:00:00.000Z', createScenarioClock()),
    false,
  );
});

test('shared fixture clock matches the May 15 scenario', () => {
  assert.equal(createScenarioClock().toISOString(), '2026-05-15T12:00:00.000Z');
});

test('exact expiration instant is inactive', () => {
  const at = new Date('2026-05-16T00:00:00.000Z');
  assert.equal(isSubscriptionActive('2026-05-16T00:00:00.000Z', at), false);
});
