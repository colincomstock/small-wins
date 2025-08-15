// TODO: Implement PageWrapper
import React from 'react'
import Header from './Header.tsx'
import { SidebarProvider, SidebarInset } from '../ui/sidebar.tsx'
import AppSidebar from './Sidebar.tsx'
import { Toaster } from '../ui/sonner.tsx'

interface PageWrapperProps {
  children: React.ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
  <SidebarProvider className="flex min-h-svh flex-col !bg-black">
      {/* Full-width header above sidebar/content (Shopify style) */}
      <Header />

      {/* Row: sidebar + content inset */}
      <div className="flex w-full min-h-0 flex-1">
        <AppSidebar />
  <SidebarInset className="!bg-black md:peer-data-[variant=inset]:rounded-tr-xl md:peer-data-[variant=inset]:rounded-tl-none md:peer-data-[variant=inset]:rounded-b-none md:shadow-sm overflow-hidden">
          <main className="flex-1">
            <div className="min-h-screen bg-card border border-border md:border-l-0">
              <div className="p-6 lg:p-8 font-sans text-foreground">{children}</div>
            </div>
          </main>
          <Toaster />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default PageWrapper
