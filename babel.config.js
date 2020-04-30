const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '15',
        android: '67',
        ios: '11',
        firefox: '50',
        chrome: '64',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: '3.4.1',
      "targets": {
        "esmodules": true,
         "ie": "11"
 }
    },
  ],
];

const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = { presets, plugins };
