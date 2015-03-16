
var ExpressLocation = module.exports = function (url, res) {
  this.url = url;
  this.res = res;

  this.redirectTo = [];
  this.needsDOM = false;
};


ExpressLocation.prototype.push = function (path) {
  this.redirectTo.push(path);
};


ExpressLocation.prototype.replace = function (path) {
  if (!this.redirectTo.length) return this.redirectTo.push(path);
  this.redirectTo[this.redirectTo.length - 1] = path;
};


ExpressLocation.prototype.pop = function () {
  return this.redirectTo.pop();
};


ExpressLocation.prototype.getCurrentPath = function () {
  return this.url;
};


ExpressLocation.prototype.toString = function () {
  return '<ExpressLocation>';
};


ExpressLocation.prototype.redirect = function () {
  if (this.redirectTo.length) {
    this.res.redirect(this.redirectTo[this.redirectTo.length - 1]);
    return true;
  }
  return false;
};
