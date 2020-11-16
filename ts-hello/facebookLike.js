"use strict";
exports.__esModule = true;
exports.FacebookLikeOptmized = exports.FacebookLike = void 0;
var FacebookLike = /** @class */ (function () {
    function FacebookLike(initalLikes) {
        this.initalLikes = initalLikes;
        this.isLiked = false;
    }
    FacebookLike.prototype.getTotalLikes = function () {
        return this.initalLikes;
    };
    FacebookLike.prototype.like = function () {
        this.initalLikes++;
        this.isLiked = true;
    };
    FacebookLike.prototype.disLike = function () {
        this.initalLikes--;
        this.isLiked = false;
    };
    FacebookLike.prototype.getLikeButtonStatus = function () {
        return this.isLiked;
    };
    return FacebookLike;
}());
exports.FacebookLike = FacebookLike;
var FacebookLikeOptmized = /** @class */ (function () {
    function FacebookLikeOptmized(likeCounts, isSelected) {
        this.likeCounts = likeCounts;
        this.isSelected = isSelected;
    }
    FacebookLikeOptmized.prototype.onclick = function () {
        this.likeCounts += (this.isSelected) ? 1 : -1;
        this.isSelected = !this.isSelected;
    };
    return FacebookLikeOptmized;
}());
exports.FacebookLikeOptmized = FacebookLikeOptmized;
