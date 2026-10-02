import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ActionLink } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";
import whatsappImage from "@/assets/high-angle-shot-palm-trees-blue-cloudy-sky.jpg";

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
      {/* bottom Column: Canopy Image */}
      <Rise delay={0.25}>
        <div className="relative aspect-[4/3] mb-0 pb-0 w-full h-[66vh] min-h-[520px]  overflow-hidden border border-hairline shadow-sm">
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
      <section className="w-full bg-white text-black pt-28 pb-20 md:pt-16 md:pb-8">
        <div className="w-full px-5 md:px-10">
          <Rise delay={0.1}>
              <h1 className="beat-lg mt-8 max-w-[23ch] text-black mb-2 ">
                  ABOUT TELALA
              </h1>
         </Rise>
          <p className=" mt-6 text-base md:text-lg leading-relaxed max-w-[45ch]">
           We Collaborate: If you want to work with us, and we can see our values in you, we automatically want to work with you
            This is who we are. <span className="text-signal">This is Telala!</span>
          </p>
                    
        </div>

        <Rise delay={0.2}>
              <div className="mt-12 flex flex-wrap gap-4 px-5 md:px-10 mb-40">
                <ActionLink to="/os">Explore Telala OS</ActionLink>
              </div>
        </Rise>
      </section>
       
    </>
  );
}
