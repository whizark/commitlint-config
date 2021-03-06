const czConfig  = require('commitlint-config-cz/lib/cz-config');
const getConfig = require('commitlint-config-cz/lib/config').get;

const config = {
    rules: {
        'body-leading-blank'    : [
            2,
            'always'
        ],
        'body-max-length'       : [
            1,
            'always',
            Infinity
        ],
        'body-max-line-length'  : [
            1,
            'always',
            72
        ],
        'body-min-length'       : [
            1,
            'always',
            0
        ],
        'footer-leading-blank'  : [
            2,
            'always'
        ],
        'footer-max-length'     : [
            1,
            'always',
            Infinity
        ],
        'footer-max-line-length': [
            1,
            'always',
            72
        ],
        'footer-min-length'     : [
            1,
            'always',
            0
        ],
        'header-case'           : [
            1,
            'always',
            [
                'lower-case'
            ]
        ],
        'header-full-stop'      : [
            2,
            'never',
            '.'
        ],
        'header-max-length'     : [
            1,
            'always',
            100
        ],
        'header-min-length'     : [
            1,
            'always',
            0
        ],
        'references-empty'      : [
            0,
            'never'
        ],
        'scope-enum'            : [
            2,
            'always',
            []
        ],
        'scope-case'            : [
            2,
            'always',
            [
                'lower-case'
            ]
        ],
        'scope-empty'           : [
            1,
            'never'
        ],
        'scope-max-length'      : [
            1,
            'always',
            Infinity
        ],
        'scope-min-length'      : [
            1,
            'always',
            0
        ],
        'subject-case'          : [
            1,
            'always',
            [
                'lower-case'
            ]
        ],
        'subject-empty'         : [
            2,
            'never'
        ],
        'subject-full-stop'     : [
            2,
            'never',
            '.'
        ],
        'subject-max-length'    : [
            1,
            'always',
            Infinity
        ],
        'subject-min-length'    : [
            1,
            'always',
            0
        ],
        'type-enum'             : [
            2,
            'always',
            []
        ],
        'type-case'             : [
            2,
            'always',
            'lower-case'
        ],
        'type-empty'            : [
            2,
            'never'
        ],
        'type-max-length'       : [
            1,
            'always',
            Infinity
        ],
        'type-min-length'       : [
            1,
            'always',
            0
        ],
        'signed-off-by'         : [
            0,
            'always'
        ]
        // ,
        // 'hello-world-rule': ({subject}) => {
        //     const HELLO_WORLD = 'Hello World';
        //
        //     return [
        //         subject.includes(HELLO_WORLD),
        //         `Your subject should contain ${HELLO_WORLD} message`
        //     ];
        // }
    }
};

module.exports = getConfig(czConfig(), config);
