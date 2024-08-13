import { authRoutes } from "./authRoots";
import { publicRoutes } from "./publicRoutes";

const routes = {
    ...publicRoutes,
    ...authRoutes,
}

export default routes;
