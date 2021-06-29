<?php
require_once '../init.php';

$merchList= \PhalApi\DI()->notorm->ims_zbkq_check
->fetchAll();
for($i=0;$i<count($merchList);$i++){  
    $item = $merchList[$i];
        $path="md".($item['id']).".html";
        $sjid='let sjid = '.$item['id'];
        //替换example内容，并获取内容赋值给$str
        $fp=fopen("0.html","r");
        $str=fread($fp,filesize("0.html"));
        $str=str_replace("let sjid = 0",$sjid,$str);
        $str=str_replace("https://spb2u1.ihogu.com/www/public/tools/md37.html",'https://spb2u1.ihogu.com/www/public/tools/md'.$item['id'].'.html',$str);
        $str=str_replace("2021040703",$item['md_name'],$str);
        $mdlogo= 'http://spb2u1.ihogu.com/attachment/'. $item['md_logo'];
        // if($item['lb_imgs']){
        //     ;
        //     $mdlogo='http://spb2u1.ihogu.com/attachment/'. (explode(',',$item['lb_imgs'])[0]);
        // }
        // $str=str_replace("2021040704",$mdlogo,$str);
        fclose($fp);
       
        //新建空白文件，将$str写入
        $handle=fopen($path,"w");
        fwrite($handle,$str);
        fclose($handle);
       
        echo "生成".$path."<br/>";
}
 