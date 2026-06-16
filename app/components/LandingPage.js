import { getContent } from "../lib/content";
import { EarlyAccessSection } from "./EarlyAccessSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { InfrastructureSection } from "./InfrastructureSection";
import { MomentSection } from "./MomentSection";
import { Post2CartSection } from "./Post2CartSection";

export function LandingPage({ locale }) {
  const content = getContent(locale);

  return (
    <>
      <Header content={content} locale={locale} />
      <main>
        <HeroSection content={content} />
        <Post2CartSection content={content} />
        <MomentSection content={content} />
        <InfrastructureSection content={content} />
        <EarlyAccessSection content={content} locale={locale} />
      </main>
      <Footer content={content} />
    </>
  );
}
