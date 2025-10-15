import FiverrCard from '@/components/FiverrCard';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FiverrCard
          title="Logo Design"
          description="Professionelle Logos von Top-Freelancern."
          imageUrl="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123/logo.jpg"
          affiliateUrl="https://go.fiverr.com/visit/?bta=DEINE_ID&brand=fiverrcpa"
          tags={['Logo', 'Design']}
          rating={4.8}
        />
        <FiverrCard
          title="SEO Optimierung"
          description="Tools und Experten für bessere Google-Rankings."
          imageUrl="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/456/seo.jpg"
          affiliateUrl="https://go.fiverr.com/visit/?bta=DEINE_ID&brand=fiverrcpa"
          tags={['SEO', 'Marketing']}
          rating={4.6}
        />
        <FiverrCard
          title="KI-gestützte Texte"
          description="Texte mit GPT & KI – schnell und überzeugend."
          imageUrl="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/789/ai.jpg"
          affiliateUrl="https://go.fiverr.com/visit/?bta=DEINE_ID&brand=fiverrcpa"
          tags={['KI', 'Text', 'GPT']}
          rating={4.9}
        />
        <FiverrCard
          title="Video Editing"
          description="Professionelle Schnittdienste für YouTube, Reels & mehr."
          imageUrl="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/101/video-editing.jpg"
          affiliateUrl="https://go.fiverr.com/visit/?bta=DEINE_ID&brand=fiverrcpa"
          tags={['Video', 'Editing', 'YouTube']}
          rating={4.7}
        />
        <FiverrCard
          title="Social Media Management"
          description="Strategien & Content für Instagram, TikTok und Co."
          imageUrl="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102/social.jpg"
          affiliateUrl="https://go.fiverr.com/visit/?bta=DEINE_ID&brand=fiverrcpa"
          tags={['Social Media', 'Marketing']}
          rating={4.5}
        />
        <FiverrCard
          title="Übersetzungsdienste"
          description="Professionelle Übersetzungen in über 50 Sprachen."
          imageUrl="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/103/translation.jpg"
          affiliateUrl="https://go.fiverr.com/visit/?bta=DEINE_ID&brand=fiverrcpa"
          tags={['Übersetzung', 'Sprachen']}
          rating={4.6}
        />
      </div>
    </main>
  );
}
