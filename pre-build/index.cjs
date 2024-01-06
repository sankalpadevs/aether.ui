"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./aether.ui.prod.cjs");
} else {
  module.exports = require("./aether.ui.dev.cjs");
}
