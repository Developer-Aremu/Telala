import { createFileRoute } from "@tanstack/react-router";
import {
  BeatHero,
  BeatLeak,
  BeatFlicker,
  BeatPause,
  BeatRealLeak,
  BeatSpotlight,
} from "@/components/home/DarkSequence";
import {
  BeatReveal,
  BeatWhatTelalaIs,
  BeatSystemGlimpsed,
  BeatBeforeAfter,
  BeatProof,
} from "@/components/home/BrightSequence";
import {
  BeatWhereYouFit,
  BeatIndustry,
  BeatClose,
} from "@/components/home/ClosingSequence";

const TITLE = "Telala — Building Africa's Oil Palm Industry";
const DESCRIPTION =
  "Telala establishes plantations, operates them with industrial discipline, and built the system that makes every harvest, transfer and hand verifiable in real time.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <BeatHero />
      <BeatLeak />
      <BeatFlicker />
      <BeatPause />
      <BeatRealLeak />
      <BeatSpotlight />
      <BeatReveal />
      <BeatWhatTelalaIs />
      <BeatSystemGlimpsed />
      <BeatBeforeAfter />
      <BeatProof />
      <BeatWhereYouFit />
      <BeatIndustry />
      <BeatClose />
    </>
  );
}
