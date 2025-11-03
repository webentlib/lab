import { Lab } from '../scripts/lab.js';

export function Datetime(date_string, timezone=DatetimeHelper.client_timezone) {
    if (!date_string) {
        return;
    }

    this.unawaredate = new Date(date_string).toLocaleString('sv-SE', {timeZone: timezone})
    this.awaredate = new Date(this.unawaredate)

    this.day     = this.awaredate.getDate().PAD(2)
    this.month   = (this.awaredate.getMonth() + 1).PAD(2)
    this.year    = this.awaredate.getFullYear()
    this.weekday = this.awaredate.getDay()
    this.hours   = this.awaredate.getHours().PAD(2)
    this.minutes = this.awaredate.getMinutes().PAD(2)
    this.seconds = this.awaredate.getSeconds()

    this.date = `${this.day.PAD(2)}.${this.month.PAD(2)}.${this.year}`;
    this.time = `${this.hours.PAD(2)}:${this.minutes.PAD(2)}`;
    this.timefull = `${this.hours.PAD(2)}:${this.minutes.PAD(2)}:${this.seconds.PAD(2)}`;
    this.datetime = `${this.date} ${this.time}`;
    this.datetimefull = `${this.date} ${this.timefull}`;

}

export const DatetimeHelper = new function() {
    this.current_day = new Date().getUTCDate();
    this.current_month = new Date().getUTCMonth() + 1;
    this.current_year = new Date().getUTCFullYear();

    this.client_day = new Date().getDate();
    this.client_month = new Date().getMonth() + 1;
    this.client_year = new Date().getFullYear();
    this.client_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    this.days = Lab.range(1, 31 + 1);
    this.days_february = Lab.range(1, 28 + 1);
    this.months = {
        1: 'Январь',
        2: 'Февраль',
        3: 'Март',
        4: 'Апрель',
        5: 'Май',
        6: 'Июнь',
        7: 'Июль',
        8: 'Август',
        9: 'Сентябрь',
        10: 'Октябрь',
        11: 'Ноябрь',
        12: 'Декабрь',
    }
    this.days_of_week = {
        1: 'ПН',
        2: 'ВТ',
        3: 'СР',
        4: 'ЧТ',
        5: 'ПТ',
        6: 'СБ',
        7: 'ВС',
    }
    this.years = Lab.range(this.current_year, this.current_year + 2);
    this.hours = Lab.range(0, 23 + 1);
    this.minutes = Lab.range(0, 59 + 1);

    this.moscow_timezone = 'Europe/Moscow';

    this.timezones = [...new Set([this.client_timezone, this.moscow_timezone, 'UTC'])];
}

DatetimeHelper.diff = function(ms) {
    if (!ms) {
        return;
    }
    // Partially AI Generated
    const millisecondsInSecond = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;

    let remainingMs = ms;

    const days = Math.floor(remainingMs / (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay));
    remainingMs %= (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay);

    const hours = Math.floor(remainingMs / (millisecondsInSecond * secondsInMinute * minutesInHour));
    remainingMs %= (millisecondsInSecond * secondsInMinute * minutesInHour);

    const minutes = Math.floor(remainingMs / (millisecondsInSecond * secondsInMinute));
    remainingMs %= (millisecondsInSecond * secondsInMinute);

    const seconds = Math.floor(remainingMs / millisecondsInSecond);

    function get_days_legend(days) {
        let last_int = Number(String(days).slice(-1));
        let last_two_ints = Number(String(days).slice(-2));
        let legend;
        if (last_int === 1 && last_two_ints !== 11) {
            legend = 'день';
        } else if (
            (last_int === 2 && last_two_ints !== 12) ||
            (last_int === 3 && last_two_ints !== 13) ||
            (last_int === 4 && last_two_ints !== 14)
        ) {
            legend = 'дня';
        } else {
            legend = 'дней';
        }
        return legend;
    }

    const days_string = days ? days + ' ' + get_days_legend(days) : '';
    const time_string = `${hours.PAD(2)}:${minutes.PAD(2)}:${seconds.PAD(2)}`;
    const format = days_string ? [days_string, time_string].join(', ') : time_string;

    return {
        format,
        days,
        hours,
        minutes,
        seconds
    };
}