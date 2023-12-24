import { fileURLToPath } from "url";

export const publicPath = fileURLToPath(new URL("../proxy/", import.meta.url));
