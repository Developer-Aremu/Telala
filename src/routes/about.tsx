import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import whatsappImage from "@/assets/whatsappImage.jpeg";

const TITLE = "About — Telala";
const DESCRIPTION =
  "The biggest losses on a plantation are rarely hidden on purpose. They're just never seen. Telala exists to make sure they are.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <>
      {/* Right Column: Canopy Image */}
      <Rise delay={0.25}>
        <div className="relative aspect-[4/3] w-full h-[66vh] min-h-[520px]  overflow-hidden border border-hairline shadow-sm">
           <img
              src={whatsappImage}
              alt="Mature oil palm canopy under active management"
              loading="lazy"
              width={1200}
              height={900}
              className="size-full object-cover"
            />
        </div>
      </Rise>
      
      {/* 1. Page Hero */}
      <section className="w-full bg-white text-black pt-28 pb-20 md:pt-36 md:pb-8">
        <div className="w-full px-5 md:px-10">
          <h2 className="beat-md mt-0 max-w-[43ch] text-black normal-case mb-20 font-normal  ">
            We Collaborate: If you want to work with us, and we can see we
            automatically want to work with you. <br /> <br />
            We are Adventurous: There's no distance too far, no transaction too big. If
            you align with our business ideals, we would cross a thousand seas to offer
            you unparalleled service. <br /> <br />
            We like Big: If you're big, we would work our tail off to help you become
            bigger. And If you're small, with us on your side, you're definitely becoming
            big.
            This is who we are. This is Telala!
          </h2>
                    
        </div>

        <Rise delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4 ">
                <ActionLink to="/os">Explore Telala OS</ActionLink>
              </div>
        </Rise>
      </section>

       
    </>
  );
}
