<?php
class BaseAction extends Action{
	
	protected function ajaxReturn($data){
		$info = array();
		$info["data"] = $data;
		$info["status"] = "1";
		
		if(empty($type)) $type  =   C('DEFAULT_AJAX_RETURN');
		switch (strtoupper($type)){
			case 'JSON' :
				// 返回JSON数据格式到客户端 包含状态信息
				header('Content-Type:application/json; charset=utf-8');
				exit(json_encode($info));
			case 'XML'  :
				// 返回xml格式数据
				header('Content-Type:text/xml; charset=utf-8');
				exit(xml_encode($info));
			case 'JSONP':
				// 返回JSON数据格式到客户端 包含状态信息
				header('Content-Type:application/json; charset=utf-8');
				$handler  =   isset($_GET[C('VAR_JSONP_HANDLER')]) ? $_GET[C('VAR_JSONP_HANDLER')] : C('DEFAULT_JSONP_HANDLER');
				exit($handler.'('.json_encode($info).');');
			case 'EVAL' :
				// 返回可执行的js脚本
				header('Content-Type:text/html; charset=utf-8');
				exit($info);
			default     :
				// 用于扩展其他返回格式数据
				tag('ajax_return',$info);
		}
	}
	
	protected function ajax($data){
		$php_json = json_encode( $data );
		$this->ajaxReturn( "{'data': '$php_json'}" );
	}
}