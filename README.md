# 使用react+ webpack+jekyll搭建gitpage 博客
## 文件结构
![image](https://github.com/Liaohuanle/react-webpack-jekyll-gitpage/raw/master/src/assets/filetree.jpeg)
## jekyll
此前也有用jekyll的搭建方案，但是灵活度太低，不适合程序员的玩法。此次仅仅是利用jekyll做一个线上发布的模版解析器而已，并且抛弃了原来繁琐的文件结构，仅仅添加了一个_config.yml的配置文件而已。
## react + webpack
在此使用这两个主要是结构工程划开发的便利性，远离了模版markdown式的限制。react的优雅开发与webpack的构建提升整体博客的稳定以及可拓展，其次是利用react的多元生态（暂且忘记近期react／fb风波）

## 搭建：
1. （基础部分包括下载git， git repo创建以及ruby 环境安装 jekyll安装）这部分在此不再赘述，可以参考（http://www.jianshu.com/p/85ca31174488）
的帖子。
补充： 安装完jekyll后就可以不需要再搭建jekyll的其他资源了，往后看。
2. 在根目录下新建一个Jekyll配置文件_config.yml
内容仅仅两行就够：
![image](https://github.com/Liaohuanle/react-webpack-jekyll-gitpage/raw/master/src/assets/file.png)

3. 安装npm生成package.json，按照如下第三方自行下载（主要是es以及各种必备干粮）
![image](https://github.com/Liaohuanle/react-webpack-jekyll-gitpage/raw/master/src/assets/b.png)

4. 安装webpack，自行配置开发文件与build文件
！[image](https://github.com/Liaohuanle/react-webpack-jekyll-gitpage/raw/master/src/assets/ c.png)

5. 注意
5.1 开发： npm start
5.2 打包文件： npm run build 生成build后的文件夹存放压缩文件都可以配置，注意一定要把index.html单独提取到根目录下，因为jekyll只读取根目录下的index.html
5.3 代码庞大时可以引入yarn用于版本管控锁定
5.4 关于域名替换 ， 新建一个文件 名为CNAMW将自己的申请好的域名写入，并在域名管控网站（如阿里云）填写A 的d对应ip以及cname对应username.github.io

 #  有问题欢迎留言， read写的仓促 明天来补充细节哦 下班啦
