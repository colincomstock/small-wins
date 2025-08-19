// TODO: Implement Header
import { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar.tsx';
import { cn } from '@/lib/utils';
import { Progress } from '../ui/progress.tsx';
import logo from '../../assets/addup_logo_icon.png';
import {
  SunMedium,
  Moon
} from 'lucide-react';

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
  "text-foreground h-16 flex items-center justify-between gap-3 px-4 sm:px-6 sticky top-0 z-30",
  scrolled ? "bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10" : "bg-black"
      )}
    >
      <SidebarTrigger className='md:hidden'/>
      <img src={logo} alt="Small Wins Logo" className="h-4" />
      <div className="flex flex-row items-center gap-2 w-1/2">
        <Progress value={50} className="" />
        <span className="text-sm text-white">23/48</span>
      </div>
      <Button variant="outline" onClick={toggleDark}>
        {isDark ? <SunMedium /> : <Moon />}
      </Button>
    </header>
  )
}

export default Header;
