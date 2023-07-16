import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import SharedLayout from './SharedLayout/SharedLayout';
import CategoryDetails from 'components/CategoryDetails/CategoryDetails';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);

export const App = () => {
  // Перед сдачеє проекта видалити коментарі в RecipePage
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   if (token) {
  //     dispatch(refreshUser());
  //   }
  // }, [dispatch, token]);

  // const hasFetchedData = useRef(false);

  // useEffect(() => {
  //   if (!hasFetchedData.current) {
  //     dispatch(refreshUser());
  //     hasFetchedData.current = true;
  //   }
  // }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={WelcomePage} redirectTo="/main" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/main" />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute component={SignInPage} redirectTo="/main" />
          }
        />
      </Route>

      <Route path="/" element={<SharedLayout />}>
        <Route
          path="main"
          element={<PrivateRoute component={MainPage} redirectTo="/signin" />}
        />

        <Route
          path="categories"
          element={
            <PrivateRoute component={CategoriesPage} redirectTo="/signin" />
          }
        >
          <Route path=":categoryName" element={<CategoryDetails />} />
        </Route>
        <Route
          path="add"
          element={
            <PrivateRoute component={AddRecipePage} redirectTo="/signin" />
          }
        />
        <Route
          path="favorite"
          element={
            <PrivateRoute component={FavoritePage} redirectTo="/signin" />
          }
        />
        <Route
          path="recipe/:recipeId"
          element={<PrivateRoute component={RecipePage} redirectTo="/signin" />}
        ></Route>
        <Route
          path="my"
          element={
            <PrivateRoute component={MyRecipesPage} redirectTo="/signin" />
          }
        />
        <Route
          path="search"
          element={<PrivateRoute component={SearchPage} redirectTo="/signin" />}
        />
        <Route
          path="shopping-list"
          element={
            <PrivateRoute component={ShoppingListPage} redirectTo="/signin" />
          }
        />
        <Route
          path="*"
          element={<PrivateRoute component={NotFoundPage} redirectTo="/" />}
        />
      </Route>
    </Routes>
  );
};

// import { lazy, useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import SharedLayout from './SharedLayout/SharedLayout';
// import CategoryDetails from 'components/CategoryDetails/CategoryDetails';
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';
// import { selectIsRefreshing } from 'redux/auth/selectors';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';

// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
// const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const CategoriesPage = lazy(() =>
//   import('pages/CategoriesPage/CategoriesPage')
// );
// const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));
// const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));
// const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
// const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
// const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
// const ShoppingListPage = lazy(() =>
//   import('pages/ShoppingListPage/ShoppingListPage')
// );

// export const App = () => {
//   // Перед сдачеє проекта видалити коментарі в RecipePage
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);
//   // const token = useSelector(selectToken);

//   // useEffect(() => {
//   //   if (token) {
//   //     dispatch(refreshUser());
//   //   }
//   // }, [dispatch, token]);
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Fetching user data...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route
//           index
//           element={
//             <RestrictedRoute component={WelcomePage} redirectTo="/main" />
//           }
//         />
//         <Route
//           path="register"
//           element={
//             <RestrictedRoute component={RegisterPage} redirectTo="/main" />
//           }
//         />
//         <Route
//           path="signin"
//           element={
//             <RestrictedRoute component={SignInPage} redirectTo="/main" />
//           }
//         />

//         <Route
//           path="main"
//           element={<PrivateRoute component={MainPage} redirectTo="/signin" />}
//         />

//         <Route
//           path="categories"
//           element={
//             <PrivateRoute component={CategoriesPage} redirectTo="/signin" />
//           }
//         >
//           <Route path=":categoryName" element={<CategoryDetails />} />
//         </Route>
//         <Route
//           path="add"
//           element={
//             <PrivateRoute component={AddRecipePage} redirectTo="/signin" />
//           }
//         />
//         <Route
//           path="favorite"
//           element={
//             <PrivateRoute component={FavoritePage} redirectTo="/signin" />
//           }
//         />
//         <Route
//           path="recipe/:recipeId"
//           element={<PrivateRoute component={RecipePage} redirectTo="/signin" />}
//         ></Route>
//         <Route
//           path="my"
//           element={
//             <PrivateRoute component={MyRecipesPage} redirectTo="/signin" />
//           }
//         />
//         <Route
//           path="search"
//           element={<PrivateRoute component={SearchPage} redirectTo="/signin" />}
//         />
//         <Route
//           path="shopping-list"
//           element={
//             <PrivateRoute component={ShoppingListPage} redirectTo="/signin" />
//           }
//         />
//         <Route
//           path="*"
//           element={<PrivateRoute component={NotFoundPage} redirectTo="/" />}
//         />
//       </Route>
//     </Routes>
//   );
// };
