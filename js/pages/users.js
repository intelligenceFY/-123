function del(){
	var msg = "确定要删除该用户吗？"; 
 if (confirm(msg)==true){ 
 	window.location.href="iteminfo.html";
  return true; 
 }
 else{ 
  return false; 
 } 
}