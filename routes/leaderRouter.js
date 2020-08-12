const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text-plain");
    next();
  })
  .get((req, res, next) => {
    res.end("will send all leaders to you");
  })
  .post((req, res, next) => {
    res.end(
      "will add the leader: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("put operation not supported in leader");
  })
  .delete((req, res, next) => {
    res.end("will delete all leaders to you");
  });

leaderRouter
  .route("/:leaderId")
  .get((req, res, next) => {
    res.end("will send ditails of leader: " + req.params.leaderId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("post operation not supported in /leaders/" + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.write("updating leader: " + req.params.leaderId + "\n");
    res.end(
      "will update leader: " +
        req.body.name +
        " with details " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("will delete leader :" + req.params.leaderId);
  });

module.exports = leaderRouter;
