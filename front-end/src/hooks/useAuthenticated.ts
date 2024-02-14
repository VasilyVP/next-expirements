import { useAppSelectorSave } from "@/store";

export default function useAuthenticated() {
    const isAuthenticated = useAppSelectorSave(state => state.common.authenticated);

    return { isAuthenticated }
}
