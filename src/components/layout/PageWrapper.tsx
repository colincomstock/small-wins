// TODO: Implement PageWrapper
import React from 'react';
import Header from './Header.tsx'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar.tsx';
import AppSidebar from "./Sidebar.tsx";


interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex-1 relative'>
        <SidebarTrigger className="absolute top-4 left-4 z-20" />
        <div className="min-h-screen bg-white dark:bg-black">
          {/* Content */}
          <div className="relative z-10">
            {/*<Header />*/}
            <div className='p-8 font-sans text-foreground'>{children}</div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
};

export default PageWrapper;
