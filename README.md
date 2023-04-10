# 开发须知

## 构建

- [pnpm](https://pnpm.io/zh/) 包管理工具
- [vite](https://vitejs.dev/) 构建工具
- `typescript` 默认开发语言

## CSS 管理

- [tailwindcss](https://tailwindcss.com/) 原子化 css 工具库，建议使用`tailwindcss` + `css in js`方案，<font style="color:red" >放弃 less，sass 之类预处理工具</font>。
- [emotion](https://emotion.sh/docs/introduction) css in js

## 状态管理

- [react-query](https://react-query.tanstack.com/) 接口状态管理
- [jotai](https://jotai.org/) 本地状态管理

## fetch 网络请求

- [ky](https://github.com/sindresorhus/ky) 网络请求工具

# 表单

- [formilyjs](https://formilyjs.org/zh-CN) 表单渲染引擎，`antd` 项目建议使用
- [react-hook-form](https://react-hook-form.com/) 基于 React Hooks 的表单库，`mui` 项目建议使用
- [react-hook-form-mui](https://github.com/dohomi/react-hook-form-mui) 基于`react-hook-form`和`mui`的表单组件库
- [yup](https://github.com/jquense/yup) 校验构建器,可用于自定义表单校验

## 其他库

- [antd V5](https://ant.design/index-cn) 已预设相关配置
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) 目前版本 V6
- **eslint** <font style="color:red" >强制使用，禁止关闭</font>
- [classnames](https://github.com/JedWatson/classnames) css 类名连接组合
- [lodash-es](https://lodash.com/docs/) ES modules 版本的 lodash
- [@ant-design/pro-components](https://procomponents.ant.design/components) 基于`antd`的重型组件,包含`ProLayout`,`ProTable`等
- [ahooks](https://ahooks.js.org/zh-CN/) react hook 是工具库
- [nice-modal-react](@ebay/nice-modal-react) 命令式弹窗库，增加代码可读性

## 目录

- components 全局组件放于此
- comm 常量放于此
- pages 页面组件放在这里
  - Home 首页
    - assets 此功能相关资源
    - components 此功能页面的组件放于此
    - index.tsx Home 的入口文件
    - service 页面逻辑抽象放

## 最佳实践

- table + 查询 form 参考 home/index.tsx demo
- 子页面容器,Header 设置，参考 home/index.tsx PageContainer
- 建议使用 css in js 替换 css,less,提高 css 可维护性
- 面包屑 开箱即用
- fetch 请求 @/utils 暴露多个请求方式常规业务请求使用`jsonPost`方法
- react query 的 useQuery 已添加默认请求方法,参数标准为长度至少为 1 的 Array,第一位为 url，第二位为请求参数,其他为监听字段不参与传值
