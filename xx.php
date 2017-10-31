<img src="http://ww2.sinaimg.cn/mw690/9fe505b9gw1f56hbqvbhxj20dc0hs76l.jpg"><?php
$fp = fopen("log.txt","a ");
fwrite($fp,date("Y-m-d H:i:s"));
fwrite($fp,"	");
fwrite($fp,$_SERVER[REMOTE_ADDR]);
fwrite($fp,"	");
fwrite($fp,$_SERVER[HTTP_X_REWRITE_URL]);
fwrite($fp,"	");
fwrite($fp,$_SERVER[HTTP_USER_AGENT]);
fwrite($fp,"	");
fwrite($fp,$_SERVER["HTTP_REFERER"]);
fwrite($fp," ");
fclose($fp);
?>