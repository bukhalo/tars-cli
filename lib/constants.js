'use strict';

const GENERAL_BUILD_OPTIONS = {
    'ie9': {
        flag: '--ie9',
        title: ' IE9 maintenance'
    },
    'ie8': {
        flag: '--ie8',
        title: ' IE8 maintenance'
    },
    'ie': {
        flag: '--ie',
        title: ' IE8 and IE9 maintenance'
    },
    'customFlags': {
        flag: '--customFlags',
        title: ' Custom flags'
    }
};

/**
 * Constats for build promt and processing
 * @type {Object}
 */
const BUILD = Object.assign(
    {},
    {
        'release': {
            flag: '--release',
            title: ' Release mode'
        },
        'min': {
            flag: '--min',
            title: ' Minify files only'
        }
    },
    GENERAL_BUILD_OPTIONS
);

const DEV = Object.assign(
    {},
    {
        'livereload': {
            flag: '--livereload',
            title: ' Start server for livereload'
        },
        'tunnel': {
            flag: '--tunnel',
            title: ' Start server for tunnel and livereload'
        }
    },
    GENERAL_BUILD_OPTIONS
);

const ADD_COMPONENT = {
    basic: {
        title: ' Basic files (js, html and stylies)'
    },
    assets: {
        title: ' Assets dir'
    },
    data: {
        title: ' Data dir'
    },
    ie: {
        title: ' IE dir'
    },
    full: {
        title: ' Full pack (all available folders and files)'
    },
    template: {
        title: ' Make a copy of _template'
    },
    scheme: {
        title: ' Structure of new component is based on scheme file'
    },
    empty: {
        title: ' Just empty folder, without files'
    },
    customPath: {
        title: ' Set path for new component (relative to component folder, without component name)'
    }
};

const CONFIG = {
    js: {
        workflow: {
            'concat': 'Concat (Just concatenation of JavaScript-files into one bundle)',
            'modular': 'Modular (Webpack will be used to resolve requires/imports between JavaScript-files)'
        }
    }
};

const FS = {
    clearDir: {
        title: 'Clear current directory'
    },
    createDir: {
        title: 'Create new directory for project'
    },
    stopInit: {
        title: 'Stop init'
    }
};

module.exports = {
    BUILD,
    DEV,
    ADD_COMPONENT,
    GENERAL_BUILD_OPTIONS,
    CONFIG,
    FS
};