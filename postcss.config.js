// const cssnano = require("cssnano")
// const presetEnv = require("postcss-preset-env")

// module.require= {
//     plugins: [
//         cssnano({
//             preset: 'default',
//         }),
//         presetEnv({
//             stage: 1
//         })
//     ],
// };



/*

import cssnano from "cssnano"
import presetEnv from "postcss-preset-env"

export default {
    plugins: [
        cssnano({
            preset: 'default',
        }),
        presetEnv({
            stage: 1
        })
    ],
};

*/


import cssnano from "cssnano"
import presetEnv from "postcss-preset-env"

export default {
    plugins: [
        cssnano({
            preset: 'default',
        }),
        presetEnv({
            stage: 1
        })
    ],
};