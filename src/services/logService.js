// import { BrowserTracing } from "@sentry/tracing";

function init() {
  // dsn: "https://8e83b9331aff4a81be2fe70fb0e37755@o869446.ingest.sentry.io/4504105290825728",
  // integrations: [new BrowserTracing()],
  // tracesSampleRate: 1.0,
}
function log(error) {
  //   Sentry.captureException(error);
  console.error(error);
}
export default {
  init,
  log,
};
