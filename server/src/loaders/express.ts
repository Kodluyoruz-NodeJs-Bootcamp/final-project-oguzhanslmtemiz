import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "../routes";
import path from "path";

export default (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      credentials: true,
      origin: process.env.CLIENT_ORIGIN,
      methods: ["GET", "HEAD", "PUT", "POST", "PATCH", "DELETE", "UPDATE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  // app.use(express.static(path.join(__dirname, "../../../client/build")));

  // app.get("/*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../../../client/build", "index.html"));
  // });

  // Routes
  app.use("/api", routes);

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};
