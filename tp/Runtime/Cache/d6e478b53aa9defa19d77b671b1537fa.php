<?php if (!defined('THINK_PATH')) exit();?><html>
 <head>
   <title>Select Data</title>
 </head>
 <body>
    <?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; echo ($vo["_id"]); ?>--<?php echo ($vo["name"]); ?>--<?php echo ($vo["email"]); ?>--<?php echo ($vo["age"]); ?>--<?php echo ($vo["sex"]); ?><br/><?php endforeach; endif; else: echo "" ;endif; ?>
 </body>
</html>