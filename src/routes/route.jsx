import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Loading from "../components/ui/Loading";
import AllRecipes from "../pages/AllRecipes";
import AddRecipe from "../pages/AddRecipe";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthLayout from "../layout/AuthLayout";
import RecipeDetails from "../pages/RecipeDetails";
// import UpdateRecp from "../pages/UpdateRecp";
import PrivertRoute from "../provider/PrivertRoute";
import Dashboard from "../pages/Dashboard";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Support from "../pages/Support";
import DashboardLayout from "../layout/DashboardLayout";
import DashBoardAllRecipes from "../components/dashboard/DashBoardAllRecipes";
import DashboardMyRecipes from "../components/dashboard/DashboardMyRecipes";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('https://b11-a10-recipenest.vercel.app/recipes'),
                HydrateFallback: Loading,

            },
            {
                path: '/all-recipes',
                loader: () => fetch('https://b11-a10-recipenest.vercel.app/recipes'),
                HydrateFallback: Loading,
                Component: AllRecipes,


            },
            {
                path: '/about-us',
                hHydrateFallback: Loading,
                Component: AboutUs
            },
            {
                path: '/support',
                hHydrateFallback: Loading,
                Component: Support
            },
            {
                path: '/contact',
                hHydrateFallback: Loading,
                Component: Contact
            },
            {
                path: '/recipe/:id',
                loader: ({ params }) => fetch(`https://b11-a10-recipenest.vercel.app/recipes/${params.id}`),
                HydrateFallback: Loading,

                element: <PrivertRoute><RecipeDetails /></PrivertRoute>,

            },
            
            {
                path: '/add-recipes',
                element: <PrivertRoute><AddRecipe /></PrivertRoute>,

            },

        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        HydrateFallback: Loading,
        children: [
            {
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/sign-up',
                Component: SignUp,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivertRoute><DashboardLayout /></PrivertRoute>,
        HydrateFallback: Loading,
        children: [
            {
                path: '/dashboard/My-Dashboard',
                loader: () => fetch('https://b11-a10-recipenest.vercel.app/recipes'),
                HydrateFallback: Loading,
                Component: Dashboard,
            },
            {
                path: '/dashboard/all-recipes',
                loader: () => fetch('https://b11-a10-recipenest.vercel.app/recipes'),
                HydrateFallback: Loading,
                Component: DashBoardAllRecipes,
            },
            {
                path: '/dashboard/add-recipes',
                HydrateFallback: Loading,
                element: <PrivertRoute><AddRecipe /></PrivertRoute>,
            },
            {
                path: '/dashboard/my-recipes',
                HydrateFallback: Loading,
                element: <PrivertRoute><DashboardMyRecipes/></PrivertRoute>,
            },
        ]
    },
])

export default Router