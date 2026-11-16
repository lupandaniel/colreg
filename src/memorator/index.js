import LightsCheatsheet from './LightsCheatsheet';
import MemoratorPage from './MemoratorPage';
import reguliGuvernare from './data/reguliGuvernare';
import semnaleSonore from './data/semnaleSonore';
import balizajIala from './data/balizajIala';
import busolaSiDrumuri from './data/busolaSiDrumuri';
import manevraGuvernare from './data/manevraGuvernare';
import manevraAcostare from './data/manevraAcostare';
import remorcajOmLaApa from './data/remorcajOmLaApa';
import contraventiiInfractiuni from './data/contraventiiInfractiuni';
import brevetAmbarcatiune from './data/brevetAmbarcatiune';
import zoneConventii from './data/zoneConventii';

const page = (data) => () => <MemoratorPage data={data} />;

/** Every memorator: its own address (`/memorator/<slug>`), a button on the main page, a renderer. */
export const MEMORATOARE = [
  { id: 'lumini', slug: 'lumini-si-distante', icon: '💡', title: 'Lumini și distanțe', badge: 'COLREG', render: () => <LightsCheatsheet /> },
  { id: 'reguli', slug: 'reguli-de-guvernare', icon: '🧭', title: 'Reguli de guvernare', badge: 'COLREG', render: page(reguliGuvernare) },
  { id: 'sonore', slug: 'semnale-sonore', icon: '🔔', title: 'Semnale sonore', badge: 'COLREG', render: page(semnaleSonore) },
  { id: 'iala', slug: 'balizaj-iala', icon: '🛟', title: 'Balizaj IALA', badge: 'IALA', render: page(balizajIala) },
  { id: 'busola', slug: 'busola-si-drumuri', icon: '🧲', title: 'Busolă și drumuri', badge: 'Navigație', render: page(busolaSiDrumuri) },
  { id: 'guvernare', slug: 'manevra-carma-elice', icon: '⚙️', title: 'Cârmă, elice și motor', badge: 'Manevră', render: page(manevraGuvernare) },
  { id: 'acostare', slug: 'acostare-si-ancorare', icon: '⚓', title: 'Acostare și ancorare', badge: 'Manevră', render: page(manevraAcostare) },
  { id: 'remorcaj', slug: 'remorcaj-om-la-apa', icon: '🆘', title: 'Remorcaj, om la apă, ecluze', badge: 'Manevră', render: page(remorcajOmLaApa) },
  { id: 'contraventii', slug: 'contraventii-infractiuni', icon: '⚖️', title: 'Contravenții și infracțiuni', badge: 'Legislație', render: page(contraventiiInfractiuni) },
  { id: 'brevet', slug: 'brevet-si-autoritati', icon: '📜', title: 'Brevet, ambarcațiune, autorități', badge: 'Legislație', render: page(brevetAmbarcatiune) },
  { id: 'zone', slug: 'zone-maritime-conventii', icon: '🌍', title: 'Zone maritime și convenții', badge: 'Legislație', render: page(zoneConventii) },
].map((m) => ({ ...m, path: `/memorator/${m.slug}`, docTitle: `CAA · Memorator ${m.title.toLowerCase()}` }));

const clean = (pathname) => (pathname || '').replace(/\/+$/, '').toLowerCase();

/** The memorator that lives at this address, or null. */
export const memoratorByPath = (pathname) => {
  const path = clean(pathname);
  return MEMORATOARE.find((m) => m.path === path) || null;
};

export const memoratorById = (id) => MEMORATOARE.find((m) => m.id === id) || null;
