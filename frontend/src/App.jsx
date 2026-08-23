import { AdaptiveCarousel } from "./AdaptiveCarousel.jsx";
import { BrandIntro } from "./BrandIntro.jsx";
import { LoginTransition } from "./LoginTransition.jsx";

export function App() {
  return (
    <main className="baseline-page">
      <AdaptiveCarousel />
      <LoginTransition />
      <BrandIntro key="brand-intro-v2" />
    </main>
  );
}
