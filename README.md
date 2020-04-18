# mobile-template

## 1. 项目目录结构

```text

├── config                    # 项目配置
│   ├── dev.js                # 开发环境配置文件
│   ├── index.js              # 主配置文件
│   └── prod.js               # 生产环境配置文件
├── package.json
├── project.config.json       # 微信小程序项目配置
└── src                       # 项目源码目录
    ├── app.scss              # 根组件样式
    ├── app.jsx               # 根组件 app
    ├── index.html            # 等待被嵌入代码的 HTML 文档
    ├── pages                 # 页面目录
    |   ├── index             # index 页面模块
    |   ├── mine              # 个人中心页面
    |   └── post              # 帖子详情页面
    └── components            # 通用组件   
           ├── PostCard       # 帖子组件(包含title和content) 
           ├── PostForm       # 发新贴表单组件
           └── index.jsx      # 导出公共组件
├──     
└──
|
```

