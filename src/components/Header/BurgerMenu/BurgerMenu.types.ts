export interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}
