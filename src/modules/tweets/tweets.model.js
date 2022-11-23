"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tweet = void 0;
var graphql_1 = require("@nestjs/graphql");
var Tweet = /** @class */ (function () {
    function Tweet() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], Tweet.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.GraphQLISODateTime; })
    ], Tweet.prototype, "createdAt");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.GraphQLISODateTime; })
    ], Tweet.prototype, "updatedAt");
    __decorate([
        (0, graphql_1.Field)(function () { return String; })
    ], Tweet.prototype, "content");
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.Int; })
    ], Tweet.prototype, "userId");
    Tweet = __decorate([
        (0, graphql_1.ObjectType)()
    ], Tweet);
    return Tweet;
}());
exports.Tweet = Tweet;
