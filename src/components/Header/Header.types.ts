export interface ResponsiveNavProps {
  isOpen: boolean;
  closeMenu: () => void;
  isAuthenticated: boolean;
  userName: string;
  // userAvatar: string;
  // userAvatar: string | React.ReactNode; 
  onLogout: () => void;
}

export interface UserNavProps {
  userName: string;
  // userAvatar: string;
   userAvatar: string | React.ReactNode; 
  onLogout: () => void;
  closeMenu: () => void;
}

export interface LogOutButtonProps {
  onLogout: () => void;
  closeMenu?: () => void;
}