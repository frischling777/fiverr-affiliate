import Image from 'next/image';

export default function LogoBar() {
  const logos = [
    { src: '/vercel.svg', alt: 'Vercel' },
    { src: '/next.svg', alt: 'Next.js' },
    { src: '/globe.svg', alt: 'Globe' },
    { src: '/window.svg', alt: 'Window' },
  ];

  return (
    <div className="flex justify-center gap-6 py-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="transition-transform duration-300 hover:scale-110"
        >
          <Image src={logo.src} alt={logo.alt} width={80} height={80} />
        </div>
      ))}
    </div>
  );
}
