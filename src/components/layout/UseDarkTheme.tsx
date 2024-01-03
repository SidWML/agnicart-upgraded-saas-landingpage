import React, { useEffect, useState } from 'react';

export default function UseDarkTheme() {
  const [mode, setMode] = useState(typeof window !== 'undefined' ? localStorage.theme : 'dark');
  const colorTheme = mode === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(mode);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', mode);
    }
  }, [mode]);

  return (
    [colorTheme, setMode]
  )
  
}
