import Http from "./http";

export const getAllPaginated = (_page = 1, extraParams = {}) => {
    const params = { _page, ...extraParams }; 

    return Http.get("/products", { params });
};
