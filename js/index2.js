//普通请求  请求servlet 由servlet跳转到页面
//Ajax请求  直接由页面发出请求向服务器  html +Ajax 可以达到动态页面的效果
//发参数  取数据 除理到页面上

//用户退出
$("#return").click(function() {
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/user/logout",
		async: true,
		dataType: "json",
		data: {},
		success: function(data) {
			window.location.href = "index.html";

		}
	})
})
//用户信息查询
function userlook() {
	var user_id = localStorage.getItem("login_id")
	var list = [];
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/user/getInfoById",
		async: true,
		dataType: "json",
		data: {
			_id: user_id,
		},
		success: function(data) {
			console.log(data)
			if (data.list[0].sex == "0") {
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
		}
	})
}



//添加菜单
function foodadd() {
	var foodname = $("#foodname").val();
	var price = $("#price").val();
	var desc = $("#desc").val();
	var typename = $("#typename").val();
	var typeid = $("#typeid").val();
	var foodid = $("#foodid").val();
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/food/add",
		async: true,
		dataType: "json",
		data: {
			_id: foodid,
			name: foodname,
			price: price,
			desc: desc,
			typename: typename,
			typeid: typeid,
		},
		success: function(data) {
			console.log(data);
			if (data.err == 0) {
				alert("添加菜品成功！")
			} else {
				alert("添加菜品失败！")
			}
		}
	})
}
//订单展示
function orderpage() {
	var list = [];
	var page = $("#page").val();
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/order/getInfoByPage",
		async: true,
		dataType: "json",
		data: {
			pageSize: 5,
			page: page,
		},

		success: function(data) {
			for (var i = 0; i < data.info.list.length; i++) {
				$("#orderData").append("<tr><td>" +
					data.info.list[i].food + "</td><td>" + data.info.list[i].receivables +
					"</td><td>" + data.info.list[i].drawee+ "</td><td>" +
					"<button class='btn btn-success' onclick='foodchange()' data-toggle='modal' data-target='#exampleModal'>修改</button>" +
					"  " +
					"<button class='btn btn-danger' id='delete'>删除</button></td></tr>");
			}
			console.log(data.info);
			console.log(data.info.page)
		},
	})
}

//菜单展示
function foodpage() {
	var list = [];
	var page = $("#page").val();
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/food/getInfoByPage",
		async: true,
		dataType: "json",
		data: {
			pageSize: 7,
			page: page,
		},

		success: function(data) {
			for (var i = 0; i < data.info.list.length; i++) {
				$("#mainData").append("<tr><td>" +
					data.info.list[i].name + "</td><td>" + data.info.list[i].price +
					"</td><td>" + data.info.list[i].desc + "</td><td>" +
					data.info.list[i].typename + "</td><td>" + data.info.list[i].typeid +
					"</td><td><button class='btn btn-success' onclick='foodchange()' data-toggle='modal' data-target='#exampleModal'>修改</button>" +
					"  " +
					"<button class='btn btn-danger' id='delete'>删除</button></td></tr>");
			}
			console.log(data.info);
			console.log(data.info.page)
		},
	})
}
