"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
;
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
var PlannedHoliday = /** @class */ (function () {
    function PlannedHoliday(startDate, endDate) {
        this.start = startDate;
        this.end = endDate;
    }
    Object.defineProperty(PlannedHoliday.prototype, "start", {
        set: function (val) {
            if (val > this._end) {
                throw new Error("Start date cannot be after end date!");
            }
            else {
                this._start = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlannedHoliday.prototype, "end", {
        set: function (val) {
            if (val < this._start) {
                throw new Error("Start date cannot be after end date!");
            }
            else {
                this._end = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    PlannedHoliday.prototype.getInfo = function () {
        return "Holiday: ".concat(this._start.getDate(), "/").concat(this._start.getMonth(), "/").concat(this._start.getFullYear(), " - ").concat(this._end.getDate(), "/").concat(this._end.getMonth(), "/").concat(this._end.getFullYear());
    };
    return PlannedHoliday;
}());
var HolidayManager = /** @class */ (function () {
    function HolidayManager() {
        this.holidays = new Map();
    }
    HolidayManager.prototype.reserveVacation = function (holiday, vacationType) {
        this.holidays.set(holiday, vacationType);
    };
    HolidayManager.prototype.listReservations = function () {
        var result = [];
        Array.from(this.holidays.entries()).forEach(function (entry) { return "".concat(entry[0].getInfo(), " => ").concat(entry[1]); });
        return result.join('\n');
    };
    return HolidayManager;
}());
var holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
var holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
var holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());
