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
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.send = function () {
        return "Sending message...";
    };
    return Message;
}());
var EmailMessage = /** @class */ (function (_super) {
    __extends(EmailMessage, _super);
    function EmailMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailMessage.prototype.send = function () {
        return "Sending email..";
    };
    return EmailMessage;
}(Message));
var SMSMessage = /** @class */ (function (_super) {
    __extends(SMSMessage, _super);
    function SMSMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSMessage.prototype.send = function () {
        return "Sending SMS..";
    };
    return SMSMessage;
}(Message));
var messages = [new Message(),
    new EmailMessage(), new SMSMessage()];
messages.forEach(function (msg) {
    console.log(msg.send());
});
