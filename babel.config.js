/*
 * @Author: your name
 * @Date: 2020-03-09 10:37:02
 * @LastEditTime: 2020-03-10 15:53:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueExcel\babel.config.js
 */
module.exports = {
  presets: [
    ['@vue/app']
  ],
  plugins: [        // element官方教程
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
