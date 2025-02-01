export interface ResponsiveNavProps {
  isOpen: boolean;
  closeMenu: () => void;
  isAuthenticated: boolean;
  userName: string;
  userAvatar: string;
  onLogout: () => void;
}

export interface UserNavProps {
  userName: string;
  userAvatar: string;
  onLogout: () => void;
}
