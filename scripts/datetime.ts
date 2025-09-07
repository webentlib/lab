import { Helper } from '../scripts/helper.js';

export function Datetime(date_string, timezone=DatetimeHelper.client_timezone) {
    if (!date_string) {
        return;
    }

    // let date = new Date(date_string.replace('Z', ''));
    let timezone_date = new Date(date_string).toLocaleString('sv-SE', {timeZone: timezone})
    let date = new Date(timezone_date)

    this.day     = date.getDate().pad(2)
    this.month   = (date.getMonth() + 1).pad(2)
    this.year    = date.getFullYear()
    this.weekday = date.getDay()
    this.hours   = date.getHours().pad(2)
    this.minutes = date.getMinutes().pad(2)
    this.seconds = date.getSeconds()

    this.date = `${this.day.pad(2)}.${this.month.pad(2)}.${this.year}`;
    this.time = `${this.hours.pad(2)}:${this.minutes.pad(2)}`;
    this.fulltime = `${this.hours.pad(2)}:${this.minutes.pad(2)}:${this.seconds.pad(2)}`;
    this.datetime = `${this.date} ${this.time}`;
    this.datefulltime = `${this.date} ${this.fulltime}`;

}

export const DatetimeHelper = new function() {
    this.current_day = new Date().getUTCDate();
    this.current_month = new Date().getUTCMonth() + 1;
    this.current_year = new Date().getUTCFullYear();

    this.client_day = new Date().getDate();
    this.client_month = new Date().getMonth() + 1;
    this.client_year = new Date().getFullYear();
    this.client_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    this.days = Helper.range(1, 31 + 1);
    this.days_february = Helper.range(1, 28 + 1);
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
    this.years = Helper.range(this.current_year, this.current_year + 2);
    this.hours = Helper.range(0, 23 + 1);
    this.minutes = Helper.range(0, 59 + 1);

    this.moscow_timezone = 'Europe/Moscow';

    this.timezones = [...new Set([this.client_timezone, this.moscow_timezone, 'UTC'])];
}
