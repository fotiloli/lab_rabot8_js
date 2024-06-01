import _ from 'lodash';

const freedomen = ['gmail.com', 'yandex.ru', 'hotmail.com','yahoo.com'];

const getDomain = (mail) => mail.split('@')[1];

const getFreeDomainsCount = (mails) => {
    const coun = mails.reduce((num, email) => {
        
        const domen = getDomain(email);
        
        if (freedomen.includes(domen)) {
            num[domen] = _.get(num, domen, 0) + 1;
        }


        return num;
    }, {});

    return Object.values(coun).reduce((any, count) => any + count);
};

export default getFreeDomainsCount;