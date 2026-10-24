# Subscription tests use a clock two days later than the documented scenario

## Observed behavior

The subscription suite uses a shared fixture clock from \`setupTests.js\` intended to represent **May 15, 2026 at 12:00 UTC**. The shared clock instead returns May 17, causing a subscription that should still be active on May 15 to appear expired and failing the shared-clock expectation.

## Expected behavior

The shared fixture should return May 15, 2026 at 12:00 UTC, while the production \`isSubscriptionActive()\` expiration boundary remains unchanged. A subscription expires exactly at its expiry instant.

## Reproduction

Run \`npm test\`. The test runner should exit with status 1 before the fixture is corrected.

## Acceptance

Correct the shared clock at the responsible layer. All existing tests should pass without removing assertions, skipping tests, changing the \`test\` script, or changing working production expiration behavior.
