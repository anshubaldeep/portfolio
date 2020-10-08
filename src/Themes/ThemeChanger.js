import React, { useState, useEffect } from 'react'

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);
    
  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if(!getTheme) return document.body.classList.add('dark-mode');
    if (getTheme === 'dark') return  document.body.classList.add('dark-mode');
    if (getTheme === 'light') return  document.body.classList.add('light-mode');
  })
  return (
    <div>
      <button onClick={handleChange}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default ThemeChanger;