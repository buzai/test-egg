/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1560411397731_2616';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    function isInnerIp() {
        return true
    }

    config.security = {
        xframe: {
            enable: false,
        },
        csrf: {
            ignore: ctx => isInnerIp(ctx.ip),
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
