module.exports = {
    "projectType": "react",
    "prefix": "",
    "publicPath": "/",
    "dist": "../../dist",
    "clientAlias": "client",
    "isInlineCss": "false",
    "smtConfig": "./.smtConfig/",
    "smtWebpackConfigDir": "{{smtConfig}}/webpack/",
    "smtManifsetDir": "{{smtConfig}}/manifest/",
    "configIn": "client",
    contract: {
        network: {
            url: '', // infure 地址
            mnemonic: '',
        },
        ext: '.sol', // 编译文件的扩展名
        sourceDir: 'contract/source/',
        buildDist: 'contract/dist/',
        buildConfig: {
            language: 'Solidity',
            settings: {
                outputSelection: {
                    '': {
                        '*': [ '*' ]
                    },
                    '*': {
                        '*': [ '*' ]
                    }
                }
            }
        }
    }
}