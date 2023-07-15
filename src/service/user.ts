import { api } from "./api";
export const user = {
    async get(email: any) {
        const response = await api.get(`/users/${email}`);
        return response.data;
    },
    async payment () {
        const response = await api.get("/payment");
        return response.data;
    }
};