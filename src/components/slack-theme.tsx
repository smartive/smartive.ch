import { Button, Tooltip } from '@smartive/guetzli';
import { FC, useEffect, useState } from 'react';

const lightModeTheme = '#F8F7F5, #001F2E, #6986E8, #252525, #F8935A, #252525, #7DDDD1, #F8935A, #F8F7F5, #252525';
const darkModeTheme = '#252525,#001F2E,#6986E8,#252525,#903400,#F8F7F5,#7DDDD1,#F8935A,#252525,#F8F7F5';

const mediaQuery = '(prefers-color-scheme: dark)';

export const SlackTheme: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(darkMode ? darkModeTheme : lightModeTheme);
    setOpen(true);
    window?.setTimeout(() => setOpen(false), 2000);
  };

  function toggle(e: MediaQueryListEvent) {
    setDarkMode(e.matches);
  }

  useEffect(() => {
    if (window?.matchMedia(mediaQuery).matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    window?.matchMedia(mediaQuery).addEventListener('change', toggle);

    return window?.matchMedia(mediaQuery).removeEventListener('change', toggle);
  }, []);

  return (
    <>
      <div className="bg-white-100 rounded text-xs select-all p-4 mr-2 flex items-center">
        {darkMode ? darkModeTheme : lightModeTheme}
      </div>
      <Tooltip text="WHOOP! 🥳" isOpen={isOpen}>
        <Button as="button" onClick={copy}>
          Kopieren
        </Button>
      </Tooltip>
    </>
  );
};
