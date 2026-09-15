const fs = require('fs');
const p = 'g:/digitrive-digital-marketing/types/templates.types.ts';
let c = fs.readFileSync(p, 'utf8');
if (!c.includes('export interface DigitalHeroData')) {
  const t = `
export interface FloatingIconData {
  id: string;
  icon: string;
  label: string;
  x: string;
  y: string;
  delay: string;
}

export interface DigitalHeroData {
  bgImage: string;
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  heading2: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  floatingIcons: FloatingIconData[];
}
`;
  fs.writeFileSync(p, c + t);
}
