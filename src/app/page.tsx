import { ArchitectureSection } from '@/components/ArchitectureSection';
import { ConnectorsSection } from '@/components/ConnectorsSection';
import { Hero } from '@/components/Hero';
import { NewsSection } from '@/components/NewsSection';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { RoutinesSection } from '@/components/RoutinesSection';
import { SiteFooter } from '@/components/SiteFooter';
import { TeamRoster } from '@/components/TeamRoster';
import { WhyMeSection } from '@/components/WhyMeSection';
import { marvin } from '@/content/team';

export default function Home() {
  return (
    <main>
      <Hero marvin={marvin} />
      <WhyMeSection values={marvin.whyMe} />
      <TeamRoster team={marvin.team} />
      <RoutinesSection routines={marvin.routines} />
      <ArchitectureSection architecture={marvin.architecture} />
      <ConnectorsSection connectors={marvin.connectors} adminTools={marvin.adminTools} />
      <NewsSection news={marvin.news} />
      <PortfolioGrid portfolio={marvin.portfolio} />
      <SiteFooter />
    </main>
  );
}
