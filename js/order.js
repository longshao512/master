//普通请求  请求servlet 由servlet跳转到页面
//Ajax请求  直接由页面发出请求向服务器  html +Ajax 可以达到动态页面的效果
//发参数  取数据 除理到页面上

//订单展示
function orderpage() {
var page = $("#page").val();
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/order/getInfoByPage",
		async: true,
		dataType: "json",
		data: {
			pageSize: 7,
			page: page,
		},
		success: function(data) {
			for (var i = 0; i < data.info.list.length; i++) {
				$("#orderData").append("<tr><td>" +
					data.info.list[i].food + "</td><td>" + data.info.list[i].receivables +
					"</td><td>" + data.info.list[i].drawee + "</td><td>" +
					"<button class='btn btn-success'  data-toggle='modal' data-target='#Modal'>修改</button>" +
					"  " + "<p style = 'display:none'>" + data.info.list[i]._id + "</p>" +
					"<button class='delete1 btn btn-danger'>删除</button></td></tr>");
			}
			$(".delete1").click(function() {
				var ids = $(this).prev("p").text();
				if(confirm("是否确定删除？")){
				$.ajax({
					type: "post",
					url: "http://39.105.232.109:3000/order/del",
					async: true,
					dataType: "json",
					data: {
						_id: ids,
					},
					success: function(data) {
						console.log(data);
						if (data.err == 0) {
							window.location.href = "order.html";
						} else {
							alert("删除失败！");
						}
					}
				})
				}else{
					
					}
			})
			$(".orderadd").click(function() {
				var ordername = $("#ordername").val();
				var receivables = $("#receivables").val();
				var drawee = $("#drawee").val();
				$.ajax({
					type: "post",
					url: "http://39.105.232.109:3000/order/add",
					async: true,
					dataType: "json",
					data: {
						receivables: receivables,
						food:ordername,
						drawee: drawee,
					},
					success: function(data) {
						if (data.err == 0){
							alert("添加订单成功！")
							window.location.href = "order.html";
						} else {
							alert("添加订单失败！")
						}
					}
				})
			})
			//修改菜单
			$(".orderchange").click(function() {
				var ordername1 = $(this).siblings("#ordername1").html();
				var receivables1 = $(this).siblings("#receivables1").html();
				var orderid = $(this).prev("p").text();
				var drawee1 = $(this).siblings("#drawee1").html();
				
				localStorage.setItem('receivables1',receivables1);
				console.log(localStorage.getItem('receivables1'));
				localStorage.setItem('drawee1',drawee1);
				console.log(localStorage.getItem('drawee1'));
				localStorage.setItem('ordername1',ordername1);
				console.log(localStorage.getItem('ordername1'));
				
				$.ajax({
					type: "post",
					url: "http://39.105.232.109:3000/order/updata",
					async: true,
					dataType: "json",
					data: {
						_id: orderid,
						name:ordername1,
						receivables:receivables1,
						drawee: drawee1,
					},
					success: function(data) {
						if (data.err == 0) {
							alert("订单修改成功！")
						} else {
							alert(data.msg)
						}
					}
				})
			})
			
		},
	})
}

