var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    return Course;
}());
var ProgrammingCourse = /** @class */ (function (_super) {
    __extends(ProgrammingCourse, _super);
    function ProgrammingCourse(title, duration, language) {
        var _this = _super.call(this, title, duration) || this;
        _this.language = language;
        return _this;
    }
    ProgrammingCourse.prototype.getDescription = function () {
        return "Programming Course: ".concat(this.title, " in ").concat(this.language, " - ").concat(this.duration, " hour");
    };
    return ProgrammingCourse;
}(Course));
var DesignCourse = /** @class */ (function (_super) {
    __extends(DesignCourse, _super);
    function DesignCourse(title, duration, tools) {
        var _this = _super.call(this, title, duration) || this;
        _this.tools = tools;
        return _this;
    }
    DesignCourse.prototype.getDescription = function () {
        return "Design Course: ".concat(this.title, " using ").concat(this.tools, " - ").concat(this.duration, " hour");
    };
    return DesignCourse;
}(Course));
var jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
var uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);
console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());
