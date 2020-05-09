findcd(5, nowpage);
var pagesize = 5;
var count;
var allpage;
var nowpage = 1;

function findcd(pagesize, nowpage) {
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/food/getInfoByPage",
		async: true,
		dataType: "json",
		data: {
			pageSize: pagesize,
			page: nowpage,
			count: count,
			allpage: allpage,
		},
		success: function(data) {
			$("#mainData").html("");
			for (var i = 0; i < data.info.list.length; i++) {
				$("#mainData").append("<tr><td>" +
					data.info.list[i].name + "</td><td>" + +data.info.list[i].price +
					"</td><td>" + data.info.list[i].desc + "</td><td>" +
					data.info.list[i].typename + "</td><td>" + data.info.list[i].typeid +
					"</td><td><button class='modality btn btn-success'>修改</button>" +
					"  " + "<p class='set_id' style = 'display:none'>" + data.info.list[i]._id +
					"</p><p class='setdesc' style = 'display:none'>" + data.info.list[i].desc +
					"</p><p class='setprice' style = 'display:none'>" + data.info.list[i].price +
					"</p><p class='settypeid' style = 'display:none'>" + data.info.list[i].typeid +
					"</p><p class='settypename' style = 'display:none'>" +
					data.info.list[i].typename + "</p><p class='setfoodname' style = 'display:none'>" + data.info.list[i].name +
					"</p>" +
					"<button class='delete btn btn-danger' >删除</button></td></tr>");
			}

			$("allpage").html(data.info.allpage);

			$(".foodchange").click(function() {
				var foodname1 = $("#foodname1").val();
				var price1 = $("#price1").val();
				var desc1 = $("#desc1").val();
				var typename1 = $("#typename1").val();
				var typeid1 = $("#typeid1").val();
				var idz = $("#id1").val();

				$.ajax({
					type: "post",
					url: "http://39.105.232.109:3000/food/updata",
					async: true,
					dataType: "json",
					data: {
						_id: idz,
						name: foodname1,
						price: price1,
						desc: desc1,
						typename: typename1,
						typeid: typeid1,
					},
					success: function(data) {
						if (data.err == 0) {
							alert("菜品修改成功！")
							window.location.href = "food.html";
						} else {
							//alert(data.msg)
						}
					}
				})
			})


			//删除菜单
			$(".delete").click(function() {
				var idz = $(this).siblings(".set_id").html();
				console.log(idz)
				if (confirm("是否确定删除？")) {
					$.ajax({
						type: "post",
						url: "http://39.105.232.109:3000/food/del",
						async: true,
						dataType: "json",
						data: {
							_id: idz,
						},
						success: function(data) {
							//console.log(data);
							if (data.err == 0) {
								window.location.href = "food.html";
							} else {
								alert("删除失败！");
							}
						}
					})
				} else {}
			})
			//修改菜单
			$(".modality").click(function() {
				var foodname1 = $(this).siblings(".setfoodname").html();
				var price1 = $(this).siblings(".setprice").html();
				var desc1 = $(this).siblings(".setdesc").html();
				var typename1 = $(this).siblings(".settypename").html();
				var ids = $(this).siblings(".set_id").html(); //$(this).prev("p").text();
				var typeid1 = $(this).siblings(".settypeid").html();
				console.log(ids);
				console.log(foodname1);
				console.log(desc1);
				console.log(typeid1);
				console.log(typename1);
				console.log(price1);
				console.log(typeid1);
				$("#foodname1").attr('value', foodname1);
				$("#price1").attr('value', price1);
				$("#desc1").attr('value', desc1);
				$("#typeid1").attr('value', typeid1);
				$("#typename1").attr('value', typename1);
				$("#id1").attr('value', ids);
				$("#mye").modal("show");
			})




		},
	})
}
//菜单展示
function foodpage(pagesize, nowpage) {
	var k;
	$.ajax({
		type: "post",
		url: "http://39.105.232.109:3000/food/getInfoByPage",
		async: true,
		dataType: "json",
		data: {
			page: nowpage,
			count: count,
			allpage: allpage,
			pageSize: 5,
		},
		success: function(data) {
			for (k = 1; k < data.info.allpage + 1; k++) {
				$(".getpage").append("<span id='btn_" + k + "'>" + "" + k + "" + "</span>");
			}
			console.log(data);
			$("#btn_1").click(function() {
				findcd(5, 1);
			});
			$("#btn_2").click(function() {
				findcd(5, 2);
			});
			$("#btn_3").click(function() {
				findcd(5, 3);
			});
			$("#btn_4").click(function() {
				findcd(5, 4);
			});
			$("#btn_5").click(function() {
				findcd(5, 5);
			});
			$("#btn_6").click(function() {
				findcd(5, 6);
			});

			//添加菜单
			$(".foodadd").click(function() {
				var foodname = $("#foodname").val();
				var price = $("#price").val();
				var desc = $("#desc").val();
				var typename = $("#typename").val();
				var typeid = $("#typeid").val();
				$.ajax({
					type: "post",
					url: "http://39.105.232.109:3000/food/add",
					async: true,
					dataType: "json",
					data: {
						name: foodname,
						price: price,
						desc: desc,
						typename: typename,
						typeid: typeid,
					},
					success: function(data) {
						if (data.err == 0) {
							alert("添加菜品成功！")
							window.location.href = "food.html";
						} else {
							alert("添加菜品失败！")
						}
					}
				})
			})


		},
	})
}
