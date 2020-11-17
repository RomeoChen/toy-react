# 1、准备工作

1. 确保安装了稳定版的 node、npm，以及 vscode 开发工具。
2. 新建文件夹，运行 npm init 来初始化一个项目。
3. 安装 webpack 来作为项目的打包工具： npm i --save-dev webpack webpack-cli 
4. 根目录下新建 webpack.config.js 文件来作为 webpack 配置文件，配置 入口（entry）、模式（mode）、优化（optimization）等，其中，优化里输入 minimize: false 可以使打包后的文件可读性更好（不会压缩至一行）。
5. 为了使用最新的 JS 语法，需要安装 babel 一些列工具。 npm i --save-dev babel-loader @babel/core @babel/preset-env 
6. 在 webpack 配置文件中，添加规则：为所有的 .js 文件都使用 babel-loader ，预设为 @babel/preset-env 
```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                '@babel/plugin-transform-react-jsx',
                {
                    pragma: 'createElement'
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
```
7. 安装 babel 的插件（plugin）： @babel/plugin-transform-react-jsx ，用来转换 jsx  语法为 react  组件。并将其加入至 babel-loader 中的 plugins 即可编译 jsx 语法。
8. optional：在 plugin 中添加 pragma 属性，代表编译的具体方法，例如上述修改后，运行 npx webpack 后，得到如下结果：

```javascript
// main.js
const a = <div/>
     
// dist/main.js  未添加pragma
var a = React.createElement('div', null)
// dist/main.js  添加pragma
var a = createElement('div', null)
```
