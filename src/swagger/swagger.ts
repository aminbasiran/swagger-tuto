import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";


const options = {
    definition: {
        openapi : "3.0.0",
        info : {
            title: "Swagger tuto",
            version: "1.0.0",
            description: "a simple tuto on how to use swagger",
            contact: {
                name: "alia",
                email :"alia@gmail.com"
            }
        }
    },
    apis: ["./src/router/postRoutes.ts"]
}

export const swaggerDocs = (app : any) => {

    app.use("/swagger/docs",swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)))
    app.use("/swagger/docs.json", (req:express.Request, res:express.Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerJsDoc(options));
    });

}