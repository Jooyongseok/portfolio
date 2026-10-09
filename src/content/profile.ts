import data from './portfolio.json';

export const profile = data.profile;
export const researchDirections = data.researchInterests;
export const selectedEvidence = data.selectedEvidence;
export const additionalAchievements = data.additionalAchievements;
export const leadership = data.leadership;
export const skills = data.skills;

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Phone', href: `tel:${profile.phone.replaceAll('-', '')}` },
  { label: 'GitHub', href: profile.github, external: true },
];
