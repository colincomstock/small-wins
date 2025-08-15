// TODO: Implement Header
import { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar.tsx';
import { cn } from '@/lib/utils';

const Header = () => {
  const { isDark, toggleDark } = useDarkMode()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
  "text-foreground h-16 flex items-center gap-3 px-4 sm:px-6 sticky top-0 z-30",
  scrolled ? "bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10" : "bg-black"
      )}
    >
      <SidebarTrigger className='md:hidden'/>
      <h1 className="text-2xl font-semibold mr-auto">Small Wins</h1>
      <Button variant="outline" onClick={toggleDark}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </Button>
    </header>
  )
}

export default Header;
