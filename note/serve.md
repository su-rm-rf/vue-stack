## nginx
一款轻量级的HTTP服务器
采用事件驱动的异步非阻塞处理方式
占用内存少、启动速度快、并发能力强、具有极好的IO性能
使用C语言开发
扩展性好，第三方插件多
在互联网项目中应用广泛


web服务器：处理和响应用户请求，Apache、IIS、Nginx
应用服务器：存放和运行系统程序，处理程序中的业务逻辑，Tomcat、Weblogic、JBoss

中介、代购Proxy：
从内到外：代理。帮助内网client访问外网server
从外到内：反向代理。将外网client的请求forward到内网server

启动 start nginx
关闭 nginx -s stop/quit
热重启 nginx -s reload

nginx.conf 配置文件
  server { } 虚拟主机站点
www或html 根目录，存放前端项目
log 访问日志、报错日志

# 应用
动静分离：前后端分离开发和部署，减轻应用服务器的压力，root/proxy_pass
反向代理：相对server端，保障应用服务器的安全、实现负载均衡、实现跨域，CDN
负载均衡：服务器集群，Nginx将客户端请求分配到所有的服务器上，分摊压力、保证稳定性，策略、健康心跳检查、轮询
  upstream domain { }  内存限制、数量限制，容错机制、高可用架构，设置Header
正向代理：相对client端，VPN，HTTP代理
IP访问控制：

# 前端
路径404：
keepalive
gzip
