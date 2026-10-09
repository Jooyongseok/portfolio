import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProfileHero } from './components/ProfileHero';
import { ResearchSection } from './components/ResearchSection';
import { SoftwareWorkSection } from './components/SoftwareWorkSection';

export default function App() {
  return (
    <div className="portfolio-shell">
      <ProfileHero />
      <main className="portfolio-main">
        <ResearchSection />
        <AchievementsSection />
        <ExperienceSection />
        <SoftwareWorkSection />
        <ContactSection />
      </main>
    </div>
  );
}
