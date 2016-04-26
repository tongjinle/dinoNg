# lingmall前端脚手架0.1.0版本 #

## 框架和工具库 ##
*  angular 1
*  underscore
*  jquery

## 自动化工具 ##
* npm
* bower
* grunt

## 安装 ##
npm i && bower i 

## grunt任务 ##
>* 默认启动开发模式
>* produce 生成生产环境版本
>* viewproduce 调试生产环境版本
>* genDoc 生成[jsdoc](http://usejsdoc.org/)



## 命名规则(基于angular) ##
> 以下用test为例
>> 基础js(./script)

>> service(./service)
>>> 命名为testService.js
>>>服务名为testService

>> controller(./controller)
>>> 命名为testCtrl.js
>>> 控制器名为testCtrl.js

>> directive(./directive)
>>> html命名为./directive/html/test.html
>>> js命名为./directive/js/test.js
>>> less命名为./directive/less/test.less

***
# 0.1.1新增功能 #
> 增加,删除controller模版
>>	`node scaff -add -c ctrl1`
>>	`node scaff -remove -c ctrl1`
>>	`node scaff -destroy -c ctrl1`
> 增加,删除serivce模版
	node scaff -add -s service1
	node scaff -remove -s service1
	node scaff -destroy -s service1
> 增加,删除directive模版
	node scaff -add -d service1
	node scaff -remove -d service1
	node scaff -destroy -d service1
>>* directive/html
>>* directive/less
>>* directive/js
> 维护requirejs的配置文件main.js
***





