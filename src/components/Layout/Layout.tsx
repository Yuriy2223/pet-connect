import { ThemeType } from '../../styles/Theme';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ModalUniversal } from '../../modals/UniversalModal/UniversalModal';
// // import { Loader } from '../loader/Loader';
// import { useDispatch } from 'react-redux';
// // import { selectLoaderLoading } from '../../redux/loader/selectors';
// import { useEffect } from 'react';
// import { setLoading } from '../../redux/loader/slice';

interface LayoutProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const Layout: React.FC<LayoutProps> = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoaderLoading);
  // const location = useLocation();

  // useEffect(() => {
  //   dispatch(setLoading(true));

  //   const timer = setTimeout(() => {
  //     dispatch(setLoading(false));
  //   }, 200);

  //   return () => clearTimeout(timer);
  // }, [location.pathname, dispatch]);

  return (
    <div>
      <Header />
      <main>
        {/* {isLoading && <Loader />} */}
        <Outlet />

        {/* <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> */}
      </main>
      <ModalUniversal />
    </div>
  );
};
