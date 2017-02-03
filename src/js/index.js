const page = require('page');
const moment = require('moment');

require('moment/locale/es');

moment.locale('es');


require('./templates/root');
require('./templates/about');
require('./templates/blog');
require('./templates/works');
require('./templates/blogContent');
require('./templates/404');

page.start();
