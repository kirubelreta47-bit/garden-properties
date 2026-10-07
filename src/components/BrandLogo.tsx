import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'monochrome';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
  size = 'md',
  layout = 'horizontal',
  onClick
}) => {
  const isLight = variant === 'light';

  // Sizing scales
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20'
  };

  const titleSizes = {
    sm: 'text-[15px] sm:text-base tracking-[0.24em]',
    md: 'text-lg sm:text-xl tracking-[0.26em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.28em]',
    xl: 'text-3xl sm:text-4xl lg:text-5xl tracking-[0.3em]'
  };

  const subSizes = {
    sm: 'text-[8.5px] sm:text-[9.5px] tracking-[0.36em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.4em]',
    lg: 'text-[12px] sm:text-[13px] tracking-[0.42em]',
    xl: 'text-[14px] sm:text-[16px] tracking-[0.44em]'
  };

  const taglineSizes = {
    sm: 'text-[7.5px] tracking-[0.26em] mt-1',
    md: 'text-[9px] tracking-[0.28em] mt-1.5',
    lg: 'text-[10.5px] tracking-[0.3em] mt-2',
    xl: 'text-[12px] tracking-[0.32em] mt-2.5'
  };

  const strokeColor = isLight ? '#EAF7EE' : '#1D4A2B';
  const leafColor = isLight ? '#72B765' : '#3B8746';
  const propGreen = isLight ? '#A5D6A7' : '#3E7B44';

  // The Exact Symbol: 3 Rising Architectural Buildings emerging from an organic angled leaf
  const SymbolIcon = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-xs overflow-visible"
    >
      {/* 1. Tallest Building (Left) */}
      <path
        d="M38 48V13.5L56 26.5V49"
        stroke={strokeColor}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* 2. Middle Building (Center) */}
      <path
        d="M48 54V28L68 43.5V56"
        stroke={strokeColor}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* 3. Shortest Building (Right) */}
      <path
        d="M58 58V39L74 50.5V81"
        stroke={strokeColor}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* 4. Organic Leaf Perimeter Contour */}
      <path
        d="M24 49C36 47 56 50 74 81C54 85 36 78 24 49Z"
        stroke={leafColor}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 5. Central Leaf Stem / Midrib */}
      <path
        d="M24 49C38 58 54 69 74 81"
        stroke={leafColor}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* 6. Lateral Veins (Left side) */}
      <path
        d="M33 54L27 63"
        stroke={leafColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M44 61L36 74"
        stroke={leafColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M57 70L48 81"
        stroke={leafColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* 7. Lateral Veins (Right side) */}
      <path
        d="M31 51L39 48"
        stroke={leafColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M42 57L52 50"
        stroke={leafColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M55 65L66 56"
        stroke={leafColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );

  if (layout === 'stacked') {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-center text-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        {/* Symbol */}
        <div className={`${iconSizes[size]} shrink-0 mb-3`}>
          {SymbolIcon}
        </div>

        {/* Title */}
        <span
          className={`font-serif-display font-medium uppercase ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#1D4A2B]'
          }`}
          style={{ letterSpacing: '0.28em' }}
        >
          GARDEN
        </span>

        {/* Subtitle with flanking rules: — PROPERTIES — */}
        <div className="flex items-center gap-2 mt-1 w-full justify-center">
          <span className={`h-[1px] w-6 sm:w-10 ${isLight ? 'bg-white/40' : 'bg-[#3E7B44]/50'}`} />
          <span
            className={`font-sans font-semibold uppercase ${subSizes[size]} ${
              isLight ? 'text-[#A5D6A7]' : 'text-[#3E7B44]'
            }`}
            style={{ letterSpacing: '0.38em' }}
          >
            PROPERTIES
          </span>
          <span className={`h-[1px] w-6 sm:w-10 ${isLight ? 'bg-white/40' : 'bg-[#3E7B44]/50'}`} />
        </div>

        {/* Slogan / Tagline */}
        {(showTagline || size === 'xl' || size === 'lg') && (
          <span
            className={`font-sans uppercase font-medium ${taglineSizes[size]} ${
              isLight ? 'text-[#CDE8D5]' : 'text-[#2D5A38]'
            }`}
            style={{ letterSpacing: '0.28em' }}
          >
            WHERE NATURE MEETS HOME
          </span>
        )}
      </div>
    );
  }

  // Horizontal Layout (standard for Navbar & Cards)
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Brand Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        {SymbolIcon}
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif-display font-medium uppercase ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#1D4A2B]'
          }`}
          style={{ letterSpacing: '0.24em' }}
        >
          GARDEN
        </span>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`h-[1px] w-3 ${isLight ? 'bg-white/30' : 'bg-[#3E7B44]/40'}`} />
          <span
            className={`font-sans font-semibold uppercase ${subSizes[size]} ${
              isLight ? 'text-[#A5D6A7]' : 'text-[#3E7B44]'
            }`}
            style={{ letterSpacing: '0.34em' }}
          >
            PROPERTIES
          </span>
          <span className={`h-[1px] w-3 ${isLight ? 'bg-white/30' : 'bg-[#3E7B44]/40'}`} />
        </div>

        {showTagline && (
          <span
            className={`font-sans uppercase font-medium mt-1 ${taglineSizes[size]} ${
              isLight ? 'text-[#CDE8D5]' : 'text-[#2D5A38]'
            }`}
            style={{ letterSpacing: '0.24em' }}
          >
            WHERE NATURE MEETS HOME
          </span>
        )}
      </div>
    </div>
  );
};
