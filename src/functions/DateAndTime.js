import dayjs from 'dayjs';

const getRandomDate = () => {
    const years = Math.floor(Math.random() * 50);
    const months = Math.floor(Math.random() * 12);
    const days = Math.floor(Math.random() * 30);

    return dayjs()
        .subtract(years, 'year')
        .subtract(months, 'month')
        .subtract(days, 'day')
        .format('YYYY-MM-DD');
}

const calculateAge = (date) => {
    return dayjs(new Date()).diff(dayjs(date), 'year')
}

export {
    getRandomDate,
    calculateAge
}