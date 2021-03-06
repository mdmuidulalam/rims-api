var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var accountsRouter = require("./routes/accounts");
var authRouter = require("./routes/auth");
var customersRouter = require("./routes/customers");
var clientViewsRouter = require("./routes/clientViews");
var ordersRouter = require("./routes/orders");
var productsRouter = require("./routes/products");
var purchasesRouter = require("./routes/purchases");
var vendorsRouter = require("./routes/vendors");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/accounts", accountsRouter);
app.use("/api/auth", authRouter);
app.use("/api/customers", customersRouter);
app.use("/api/clientViews", clientViewsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/products", productsRouter);
app.use("/api/purchases", purchasesRouter);
app.use("/api/vendors", vendorsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  console.log(err);
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
