export function requireAuth(navigate){
    if(!sessionStorage.getItem('jwtToken')) {
       navigate("/");
    }
}

export function verifyAuth (navigate){
    if(sessionStorage.getItem('jwtToken')) {
       navigate("books/list");
    }
    // stay on this route since the user is not authenticated
}