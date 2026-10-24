'use strict';

/**
 * A subscription is active until its expiration instant.
 * "expiresAt" is an ISO date-time string; "at" is a Date instance.
 */
function isSubscriptionActive(expiresAt, at) {
  return at.getTime() < new Date(expiresAt).getTime();
}

module.exports = { isSubscriptionActive };
