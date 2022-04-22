export function requireAuth(navigate){
    if(!sessionStorage.getItem('jwtToken')) {
       navigate("/");
    }
}

export function verifyAuth (navigate){
    if(sessionStorage.getItem('jwtToken')) {
       navigate("movies/list");
    }
    // stay on this route since the user is not authenticated
}