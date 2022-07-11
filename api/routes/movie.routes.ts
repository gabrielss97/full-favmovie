import {Router} from '../deps.ts'

function search(ctx:Context) {
    
}
function getDetails(ctx:Context) {
    
}
function addMovieToFavs(ctx:Context) {
    
}
function removeMovieFromFavs(ctx:Context) {
    
}

export const moviesRoutes = new Router()
.get("/movies/search", search)
.get("/movies/:id", getDetails)
.post("/movies/:id/favs", addMovieToFavs)
.delete("/movies/:id/favs", removeMovieFromFavs)