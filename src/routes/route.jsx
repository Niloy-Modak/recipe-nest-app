import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Loading from "../components/ui/Loading";
import AllRecipes from "../pages/AllRecipes";
import MyRecipe from "../pages/MyRecipe";
import AddRecipe from "../pages/AddRecipe";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthLayout from "../layout/AuthLayout";
import RecipeDetails from "../pages/RecipeDetails";
// import UpdateRecp from "../pages/UpdateRecp";
import PrivertRoute from "../provider/PrivertRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                loader: ()=> fetch('https://b11-a10-recipenest.vercel.app/recipes'),
                HydrateFallback: Loading,

            },
            {
                path: '/all-recipes',
                loader: ()=> fetch('https://b11-a10-recipenest.vercel.app/recipes'),
                HydrateFallback: Loading,
                element: <PrivertRoute><AllRecipes/></PrivertRoute>,


            },
            {
                path: '/recipe/:id',
                loader: ({params})=> fetch(`https://b11-a10-recipenest.vercel.app/recipes/${params.id}`),
                HydrateFallback: Loading,
        
                element: <PrivertRoute><RecipeDetails/></PrivertRoute>,


            },
            // {
            //     path: '/recipe-update/:id',
            //     loader: ({params})=> fetch(`https://b11-a10-recipenest.vercel.app/recipes/${params.id}`),
            //     HydrateFallback: Loading,
            //     element: <PrivertRoute><UpdateRecp/></PrivertRoute>
                


            // },
            {
                path: '/my-recipes',
                element:<PrivertRoute><MyRecipe/></PrivertRoute>           

            },
            {
                path: '/add-recipes',
                element: <PrivertRoute><AddRecipe/></PrivertRoute>,

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
])

export default Router