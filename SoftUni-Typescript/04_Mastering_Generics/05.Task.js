var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
var Logger = /** @class */ (function () {
    function Logger(format) {
        this.cachedLogs = new Map();
        this.format = format;
    }
    Logger.prototype.getFormat = function () {
        return this.format;
    };
    Logger.prototype.log = function (logLevel, message) {
        var date = new Date().toISOString();
        var filledMessage = this.format.replace("%level", logLevel).replace("%date", date).replace("%text", message);
        console.log(filledMessage);
        var currentMessages = this.cachedLogs.get(logLevel);
        if (currentMessages) {
            currentMessages.push(filledMessage);
            this.cachedLogs.set(logLevel, currentMessages);
        }
        else {
            this.cachedLogs.set(logLevel, [filledMessage]);
        }
    };
    return Logger;
}());
