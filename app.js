const express = require("express");
const router = require("./routes/router");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3000;

// 라우터 등록
app.use("/router", router);

// Swagger 설정
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      description: "API documentation for My Application",
      version: "1.0.0",
    },
  },
  apis: ["./routes/router.js"], // 라우터 파일 경로
};

const specs = swaggerJsdoc(options);

// Swagger UI 미들웨어 추가
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// 기본 라우트 정의
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
