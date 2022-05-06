import Home from "./pages/Home/Home";
import Login from "./pages/Membership/Login";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: "/",
        component: Home,
        private: true,
        exact: true,
    },
    {
        path: '/home',
        component: Home,
        private: true,
        exact: true,
    },
]

export default routes;