// TODO: Implement Header
import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Button } from '../ui/button';

const Header = () => {
    const { isDark, toggleDark } = useDarkMode()
    
    return (
    <header className="bg-none text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Small Wins</h1>
      <Button 
        variant="outline"
        onClick={toggleDark}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </Button>
    </header>
  );
};

export default Header;
