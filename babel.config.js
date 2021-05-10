module.exports = {
    presets: [
        [
            '@babel/preset-env'
        ],
        '@babel/preset-typescript',
    ]
    // plugins: [
    //     function () {
    //         return {
    //             visitor: {
    //                 MetaProperty(path) {
    //                     path.replaceWithSourceString('process')
    //                 },
    //             },
    //         }
    //     },
    // ],
}
