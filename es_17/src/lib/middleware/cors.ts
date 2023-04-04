import cors, { CorsOptions } from "cors";

export function initCorsMiddleware() {
  const corsOptions: CorsOptions = {
    origin: "http://localhost:8080",
    credentials: true,
  };

  return cors(corsOptions);
}
