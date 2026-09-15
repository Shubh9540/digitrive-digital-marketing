import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  href?: string;
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ href, variant = 'solid', children, className = '', onClick }: ButtonProps) => {
  const baseClasses = "group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300";
  
  const solidClasses = "bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] shadow-lg shadow-[#00c2c7]/20";
  const outlineClasses = "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10";

  const appliedClasses = `${baseClasses} ${variant === 'solid' ? solidClasses : outlineClasses} ${className}`;

  const renderIcon = () => {
    if (variant === 'solid') {
      return (
        <div className="bg-white rounded-full p-1.5 text-[var(--color-primary)] flex items-center justify-center transition-transform group-hover:translate-x-1">
          <FaArrowRight className="w-3 h-3" />
        </div>
      );
    }
    return (
      <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    );
  };

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={appliedClasses}>
        {children}
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={appliedClasses}>
      {children}
      {renderIcon()}
    </button>
  );
};
