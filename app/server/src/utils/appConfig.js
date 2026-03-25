const env = require('../config.env');

const appConfig = {
    development: {
        companyName: 'SDW',
        logo: 'public/testserver_logo.jpeg',
        email:'sales@sdw-ds.com',
        phone: '0044 20 3627 0522',
        address: 'Office No 19, Floor 2, Al Arif Shipping Building, Dubai UAE',
    },
    production: {
        companyName: 'Qualitops UK Ltd',
        logo: 'public/qualitop.jpg',
        email: 'Admin@qualitops.co.uk',
        phone: '01553 772 522',
        address: 'Simon Scotland Yard, Hardwick Industrial Estate, Kings Lynn, PE30 4JF, UK',
    }
}
const currentConfig = appConfig[env.APP_ENV]
module.exports = currentConfig;
