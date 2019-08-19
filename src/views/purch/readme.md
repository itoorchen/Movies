# vue 
## vue 打包app流程

把vue项目打包成app,可以通过`hbuilder`进行打包
下载地址
[hbuilder](http://www.dcloud.io/hbuilderx.html "hbuilder下载地址")
![hbuilder下载说明](./img/hbuilder.png "hbuilder下载说明")

### 准备vue项目 

先准备好需要的vue项目,修改publicPath,执行`npm run build` 
---
![修改publicPath](./img/path.png "修改publicPath")
---

### 打包前的准备
+ 在hbuilder先创建一个`app`项目
![创建app项目](./img/app.png "创建app项目")
填写自己的项目名称(项目名称为`app`)和项目路径 下面有选择模板 直接选择空模板就行

+ 复制打包后的项目文件到刚刚创建的项目文件夹下(有重复的直接替换 注意别删减app文件夹下的东西)

---
![项目目录](./img/work.png "项目目录")
---
+ 打包操作
  - 选择菜单栏 发行 选中原生安装包
![创建app项目](./img/package.png "创建app项目")
+ 修改配置文件
选中原生安装包后会出现一个弹窗 按照下方图片步骤就可以
![创建app项目](./img/p1.png "创建app项目")

### 提交代码到云服务器
代码提交到云服务器之后会在云服务器进行打包 等一会就会返回`apk`的下载地址

### 查看打包状态

如果服务器打包成功 会返回下载地址 可以在此查看下载`apk`链接
![查看打包状态](./img/p3.png "查看打包状态")

### 有可能会出现的问题
提示缺少权限 因为vue项目调用不了啥手机系统的api 所以直接确认没有 
![创建app项目](./img/p2.png "创建app项目")



### 关于返回



```javascript
//打包结束后  在index.html 加入以下代码
	<script type="text/javascript">
   document.addEventListener('plusready', function() {
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function() {
            webview.canBack(function(e) {
                if(e.canBack) {
                    webview.back();             
                } else {
                    //webview.close(); //hide,quit
                    //plus.runtime.quit();
                    //首页返回键处理
                    //处理逻辑：1秒内，连续两次按返回键，则退出应用；
                    var first = null;
                    plus.key.addEventListener('backbutton', function() {
                        //首次按键，提示‘再按一次退出应用’
                        if (!first) {
                            first = new Date().getTime();
                            console.log('再按一次退出应用');
                            setTimeout(function() {
                                first = null;
                            }, 1000);
                        } else {
                            if (new Date().getTime() - first < 1500) {
                                plus.runtime.quit();
                            }
                        }
                    }, false);
                }
            })
        });
    });
  </script>


```



