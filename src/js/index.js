require('normalize.css');

require('../css/utils.css');
require('../css/layout.css');
require('../css/breakpoint.css');
require('../css/main.css');

const { mapClickToAction } = require('../js/utils/ui');

mapClickToAction('.main-nav__list');
