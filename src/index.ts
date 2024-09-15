import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load("./src/openapi.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Example Endpoint 1: Get Current Date and Time
app.get("/api/datetime", (req: Request, res: Response) => {
  res.json({ datetime: new Date().toISOString() });
});

// Example Endpoint 2: Echo Message
app.post("/api/echo", (req: Request, res: Response) => {
  const { message } = req.body;
  res.json({ message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
