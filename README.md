1、html中加载requireJS，data-main="../js/main会加载main.js
2、总入库main.js中会根据配置加载不同文件，然后调用execute.js
3、execute.js会加载jQuery和index.js后，再调用index.main()方法