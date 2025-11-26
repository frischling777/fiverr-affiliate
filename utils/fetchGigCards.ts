export const fetchGigCards = new Promise<typeof cards>((resolve) => {
  setTimeout(() => resolve(cards), 1500); // Simuliert API-Call
});
