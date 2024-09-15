"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var yamljs_1 = __importDefault(require("yamljs"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var swaggerDocument = yamljs_1.default.load("./src/openapi.yaml");
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Example Endpoint 1: Get Current Date and Time
app.get("/api/datetime", function (req, res) {
    res.json({ datetime: new Date().toISOString() });
});
// Example Endpoint 2: Echo Message
app.post("/api/echo", function (req, res) {
    var message = req.body.message;
    res.json({ message: message });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
