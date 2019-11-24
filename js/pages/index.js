function additem(){
	window.location.href="additem.html";
}
function change(){
	window.location.href="iteminfo.html";
}


$(function(){
 $('.M-box1').pagination({
 	pageCount:25,//总页数
 	mode: 'fixed',
 	//totalData:100,//数据总条数
 	//showData:5,每页展示条数（默认值：0）
 	// count:3,//当前页前后页数（默认值：3）
	// current:1,
	// prevContent:'<<',
	// nextContent:'>>',
	// activeCls:'active',
	coping:true,
	homePage: '首页',
 	endPage: '末页',
	//callback: PageCallback,  //PageCallback() 为翻页调用次函数。
   
});
});
function del(){
	var msg = "确定要删除该商品吗？"; 
 if (confirm(msg)==true){ 
 	window.location.href="iteminfo.html";
  return true; 
 }
 else{ 
  return false; 
 } 
}

function shoujia(){
    var img1 = document.getElementById('img1');
     if (img1.getAttribute("class") == "glyphicon glyphicon-sort-by-attributes") {
        img1.setAttribute("class", "glyphicon glyphicon-sort-by-attributes-alt");     
    } else { 
        img1.setAttribute("class", "glyphicon glyphicon-sort-by-attributes"); 
        
    }
}
function jinjia(){
    var img2 = document.getElementById('img2');
     if (img2.getAttribute("class") == "glyphicon glyphicon-sort-by-attributes") {
        img2.setAttribute("class", "glyphicon glyphicon-sort-by-attributes-alt");//点击变成降序     
    } else { 
        img2.setAttribute("class", "glyphicon glyphicon-sort-by-attributes"); //点击变成升序   
    }
}
function xiaoxi(){
    var img3 = document.getElementById('img3');
     if (img3.getAttribute("class") == "glyphicon glyphicon-sort-by-attributes") {
        img3.setAttribute("class", "glyphicon glyphicon-sort-by-attributes-alt");     
    } else { 
        img3.setAttribute("class", "glyphicon glyphicon-sort-by-attributes"); 
    }
}
function lirun(){
    var img4 = document.getElementById('img4');
     if (img4.getAttribute("class") == "glyphicon glyphicon-sort-by-attributes") {
        img4.setAttribute("class", "glyphicon glyphicon-sort-by-attributes-alt");     
    } else { 
        img4.setAttribute("class", "glyphicon glyphicon-sort-by-attributes"); 
    }
}
function xiaoliang(){
        var img5 = document.getElementById('img5');
     if (img5.getAttribute("class") == "glyphicon glyphicon-sort-by-attributes") {
        img5.setAttribute("class", "glyphicon glyphicon-sort-by-attributes-alt");     
    } else { 
        img5.setAttribute("class", "glyphicon glyphicon-sort-by-attributes"); 
    }
}
document.getElementById('shoujia').onclick = function(){
      shoujia();
}
document.getElementById('jinjia').onclick = function(){
	jinjia();
}
document.getElementById('xiaoshou').onclick = function(){
	xiaoxi();
}
document.getElementById('lirun').onclick = function(){
	lirun();
}
document.getElementById('xiaoliang').onclick = function(){
    xiaoliang();
}
