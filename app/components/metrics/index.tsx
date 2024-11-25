import GoogleAnalytics from "./google-analytics";
import MicrosoftClarity from "./microsoft-clarity";
import { Analytics } from "@vercel/analytics/react";

const Metrics = () => (
  <>
    <GoogleAnalytics />
    <MicrosoftClarity />
    <Analytics />
  </>
);

export default Metrics;
