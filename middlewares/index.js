const express = require("express");
const fs = require("fs");

function logReqRes(file) {
  return (req, res, next) => {
    const log = `\n${Date.now()} : ${req.ip} : ${req.path} : ${req.method}`;
    res.setHeader("X-name", "middleware 1");
    fs.appendFile(file, log, (err) => {
      next();
    });
  };
}

module.exports={logReqRes}
