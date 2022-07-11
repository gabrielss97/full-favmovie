import { Application, oakCors } from "./deps.ts";
import {setupRoutes} from "./routes/setup.routes.ts";
import {moviesRoutes} from "./routes/movie.routes.ts";


const app = new Application();

app.use(setupRoutes.routes())
app.use(moviesRoutes.routes())

app.use(setupRoutes.allowedMethods())
app.use(moviesRoutes.allowedMethods())

await app.listen({port: 8000});