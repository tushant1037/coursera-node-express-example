const express = require("express");
const bodyParser = require("body-parser");

const promotionRouter = express.Router();
promotionRouter.use(bodyParser.json());
promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    next();
  })
  .get((req, res, next) => {
    res.end("will send all promotions to you");
  })
  .post((req, res, next) => {
    res.end(
      "will add the promotion: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("put operation not supported in promotion");
  })
  .delete((req, res, next) => {
    res.end("will delete all promotions to you");
  });

promotionRouter
  .route("/:promotionId")
  .get((req, res, next) => {
    res.end("will send ditails of promotion: " + req.params.promotionId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(
      "post operation not supported in /promotion/" + req.params.promotionId
    );
  })
  .put((req, res, next) => {
    res.write("updating promotion: " + req.params.promotionId + "\n");
    res.end(
      "will update promotion: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("will delete promotion :" + req.params.promotionId);
  });

module.exports = promotionRouter;
