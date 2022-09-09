export const addAuthorizationHeader = (headers) => {
    headers = headers || {};
    headers["Authorization"] = `Bearer ${sessionStorage.getItem('login.token')}`;
    return headers;
};