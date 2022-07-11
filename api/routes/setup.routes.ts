import {Router, Context} from '../deps.ts'
import { uniqueId } from "../services/uniqueId.ts";

function init(ctx:Context) {
    const id = ctx.request.headers.get("X-MID") ?? uniqueId();

    ctx.respond.body = { id }
}

export const setupRoutes = new Router()
.get("/", init)