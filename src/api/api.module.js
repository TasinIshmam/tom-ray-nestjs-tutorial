"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiModule = void 0;
var common_1 = require("@nestjs/common");
var tweets_module_1 = require("../modules/tweets/tweets.module");
var api_controller_1 = require("./api.controller");
var api_resolver_1 = require("./api.resolver");
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        (0, common_1.Module)({
            imports: [tweets_module_1.TweetsModule],
            controllers: [api_controller_1.ApiController],
            providers: [api_resolver_1.ApiResolver]
        })
    ], ApiModule);
    return ApiModule;
}());
exports.ApiModule = ApiModule;
