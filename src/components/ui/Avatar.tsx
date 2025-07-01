import React from 'react';
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}
export function Avatar({
  src,
  alt,
  size = 'md'
}: AvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  return <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex-shrink-0`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>;
}