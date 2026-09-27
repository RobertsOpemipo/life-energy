interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  const dimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9',
    xl: 'w-11 h-11',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${dimensions[size]} shrink-0 ${className}`}
    >
      <defs>
        {/* Red to warm amber-orange gradient for the square */}
        <linearGradient id="logoSquareGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d9241b" />
          <stop offset="50%" stopColor="#f03e22" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Emerald green to deep oceanic teal gradient for the ellipse */}
        <linearGradient id="logoCircleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15a065" />
          <stop offset="45%" stopColor="#0d845e" />
          <stop offset="100%" stopColor="#125c77" />
        </linearGradient>
      </defs>

      {/* Top-Right Square */}
      <rect
        x="36"
        y="12"
        width="56"
        height="56"
        rx="2"
        fill="url(#logoSquareGradient)"
      />

      {/* Overlapping Bottom-Left Oval */}
      <ellipse
        cx="44"
        cy="58"
        rx="34"
        ry="28"
        fill="url(#logoCircleGradient)"
      />
    </svg>
  );
}