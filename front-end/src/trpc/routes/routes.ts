import { authRoutes } from "./authRoutes";
import { publicRoutes } from "./publicRoutes";

const routes = {
    public: publicRoutes,
    authed: authRoutes,
};

export default routes;
