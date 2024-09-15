"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const swaggerDocument = yamljs_1.default.load("./src/openapi.yaml");
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Example Endpoint 1: Get Current Date and Time
app.get("/api/datetime", (req, res) => {
    res.json({ datetime: new Date().toISOString() });
});
// Example Endpoint 2: Echo Message
app.post("/api/echo", (req, res) => {
    const { message } = req.body;
    res.json({ message });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
