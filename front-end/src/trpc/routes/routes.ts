import { authRoutes } from "./authRoutes";
import { publicRoutes } from "./publicRoutes";

const routes = {
    public: publicRoutes,
    auth: authRoutes,
};

export default routes;
