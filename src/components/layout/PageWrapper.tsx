// TODO: Implement PageWrapper
import React from 'react';
import Header from './Header.tsx'

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="min-h-screen absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900 animate-gradient bg-[length:400%_400%] dark:from-black dark:via-slate-950 dark:to-purple-950">
      {/* Optional overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-black/30 animate-pulse-slow"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className='p-8 font-sans text-foreground'>{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
