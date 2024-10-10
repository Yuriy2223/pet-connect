import React from 'react';
import { ThemeType } from '../../styles/Theme';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: (theme: ThemeType) => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  //  toggleTheme
}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
// toggleTheme={toggleTheme}
// Layout.tsx
// import React, { useEffect, useState } from 'react';
// import { Header } from '../Header/Header';
// import { useLocation } from 'react-router-dom';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// export const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const location = useLocation();
//   const [headerBg, setHeaderBg] = useState('transparent');

//   useEffect(() => {
//     // Перевіряємо поточний маршрут і змінюємо фон заголовка відповідно
//     if (location.pathname === '/home') {
//       setHeaderBg('#FFC400'); // Жовтий фон для HomePage
//     } else {
//       setHeaderBg('transparent'); // Прозорий фон для інших сторінок
//     }
//   }, [location]);

//   return (
//     <div>
//       <Header backgroundColor={headerBg} />
//       <main>{children}</main>
//     </div>
//   );
// };
