import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Adopciones",
      version: "1.0.0",
      description: "Documentación del módulo Users"
    }
  },
  apis: ["./docs/users.yaml"]
};

export const swaggerSpecs = swaggerJsdoc(options);
