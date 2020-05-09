//用户退出
$(document).ready(function(){
		$(".return").click(function() {
						$.ajax({
							type:"post",
							url: "http://39.105.232.109:3000/user/logout",
							async:true,
							 dataType: "json",
							data:{
							},
							success: function(data) {
								console.log(data);
								if (data.err == -999) {
									 window.location.href = "index.html"
								}
								
							}
						})
					})
					
				});
//用户信息查询
function userlook() {
	var user_id = localStorage.getItem("login_id")
	console.log(user_id);
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/user/getInfoById",
		async: true,
		dataType: "json",
		data: {
			_id: user_id,
		},
		success: function(data) {
			console.log(data);
			if(data.list[0].sex== "0"){
				var sex = "男"
			} else {
				var sex = "女"
			}
			$("#look").append("<tr><td style='background: #D3D3D3;'>积分</td><td>" + data.list[0].integral + "</td></tr>" +
				"<tr><td style='background: #D3D3D3;'>姓名</td><td>" + data.list[0].name + "</td></tr>" +
				"<tr><td style='background: #D3D3D3;'>性别</td><td>" + sex + "</td></tr>" +
				"<tr><td style='background: #D3D3D3;'>电话</td><td>" + data.list[0].tel + "</td></tr>" +
				"<tr><td style='background: #D3D3D3;'>账号</td><td>" + data.list[0].us + "</td></tr>"
			);
			//用户信息修改
			$(".userdata").click(function() {
				var ids = localStorage.getItem("login_id")
				var name = $("#name").val();
				var sex = $("#sex").val();
				var tel = $("#tel").val();
				console.log(ids);
				$.ajax({
					type: "post",
					url: "http://39.105.232.109:3000/user/updata",
					async: true,
					dataType: "json",
					data: {
						_id: _ids,
						name: name,
						sex: sex,
						tel: tel,
					},
					success: function(data) {
						console.log(data);
					},
				})
			})

		}
	})
}





