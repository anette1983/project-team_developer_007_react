import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import CategoryDetails from 'components/CategoryDetails/CategoryDetails';

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
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
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<CategoryDetails />} />
          </Route>
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />}></Route>
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
