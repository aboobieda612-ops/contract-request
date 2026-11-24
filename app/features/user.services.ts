import api from "../lib/axios";
import { UserResponse, UsersResponse } from "../types/user.types";

export const userService = {
    getAll: async (): Promise<UsersResponse> => {
        const { data } = await api.get<UsersResponse>('/users');
        return data;
    },
    getUser: async (id: string): Promise<UserResponse> => {
        const { data } = await api.get<UserResponse>(`/users`);
        return data;
    },
}