export const brandMap: Record<string, string> = {
  'Logo Design': 'logomaker',
  'SEO Optimierung': 'fiverrmarketplace',
  'KI-gestützte Texte': 'fiverrmarketplace',
  'Video Editing': 'fiverrmarketplace',
  'Social Media Management': 'fp',
  Übersetzungsdienste: 'fiverrmarketplace',
};

export function getAffiliateUrl(title: string): string {
  const brand = brandMap[title] || 'fiverrmarketplace';
  return `https://go.fiverr.com/visit/?bta=1148326&brand=${brand}`;
}
