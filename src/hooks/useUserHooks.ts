import { useMutation } from "@tanstack/react-query";
import api from "../config/axios";


// ====================== Delete User ======================

const deleteUser = (id: any) => {
    return api.delete(`/posts/${id}`);
};

export const useDeleteUser = () => {

    const mutate = useMutation({
        mutationFn: deleteUser
    });

    return mutate;

};