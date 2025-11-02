import { createContext, useContext, useState, ReactNode } from 'react';

interface GuestModeContextType {
  isGuestMode: boolean;
  setGuestMode: (value: boolean) => void;
  clearGuestMode: () => void;
}

const GuestModeContext = createContext<GuestModeContextType | undefined>(undefined);

export function GuestModeProvider({ children }: { children: ReactNode }) {
  const [isGuestMode, setIsGuestMode] = useState<boolean>(() => {
    // Check localStorage on mount
    const stored = localStorage.getItem('omi_guest_mode');
    return stored === 'true';
  });

  const setGuestMode = (value: boolean) => {
    console.log('setGuestMode called with:', value);
    setIsGuestMode(value);
    localStorage.setItem('omi_guest_mode', value.toString());
    console.log('Guest mode state updated, localStorage set to:', value.toString());
  };

  const clearGuestMode = () => {
    setIsGuestMode(false);
    localStorage.removeItem('omi_guest_mode');
  };

  return (
    <GuestModeContext.Provider value={{ isGuestMode, setGuestMode, clearGuestMode }}>
      {children}
    </GuestModeContext.Provider>
  );
}

export function useGuestMode() {
  const context = useContext(GuestModeContext);
  if (context === undefined) {
    throw new Error('useGuestMode must be used within a GuestModeProvider');
  }
  return context;
}
