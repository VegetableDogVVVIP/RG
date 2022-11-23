var params=$("form").serializeJson();  //获取表单中数据，并转化为json格式
$.ajax({
		url: "../../form_data",
		type: "POST",
		contentType : 'application/json;charset=utf-8', //设置post请求头
		dataType:"json",
		data: params,
		success: function(data){
		  	alert(data.message);
		},
		error: function(result){
		  	alert(result.message);
		}
});


document.getElementById("P_data");
var P_data=$("P_data").val();
$.ajax({
    url: "../../form_data",
    type: "POST",
    data: P_data,
    success: function(data){
          document.getElementById("content")
    },
    error: function(result){
          alert(result.message);
    }
});