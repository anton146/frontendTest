import EnumRoutePaths from "./EnumRoutePaths";

const AppRoutes = [
    {
        path: EnumRoutePaths.MAIN_VIEW_PATH,
        name: 'home',
        component: () => import('../views/home/index.vue')
    },
    {
        path: EnumRoutePaths.LOGIN_VIEW_PATH,
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: EnumRoutePaths.NEW_USER_VIEW_PATH,
        name: 'useradd',
        component: () => import('../views/useradd/index.vue')
    },
    {
        path: EnumRoutePaths.EDIT_USER_VIEW_PATH,
        name: 'useredit',
        component: () => import('../views/useredit/index.vue')
    },
    { 
        path: "/:pathMatch(.*)*", 
        component: () => import('../views/NotFound.vue')
    }
];
export default AppRoutes