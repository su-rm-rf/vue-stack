## Linux命令
查看端口占用情况
netstat -ano | findstr "port"

显示进程
ps -ef | grep xx

不挂断的运行命令
nohup npm start >> output.log &

查看后台运行的进程
job -l
ps -ef | grep xx

终止进程
kill -9 [PID]

