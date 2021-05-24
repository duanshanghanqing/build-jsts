
## @babel/preset-env

  对不同版本ES的预设

## babel-polyfill

  所有新语法补丁的集合
  core-js
  https://github.com/zloirock/core-js

  core-js 不支持 regeherator 语法

  所有还要引入 https://github.com/facebook/regenerator 这个库做转译


  babel-polyfill = core-js + regenerator， 即两者集合


  babel 7.4 之后弃用 babel-polyfill 
  推荐直接使用 core-js 和 regenerator