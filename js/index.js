 $(document).ready(function(){
 $("#login").click(function() {
 				$.ajax({
 					type:"post",
 					url: "http://39.105.232.109:3000/user/login",
 					async:true,
 					 dataType: "json",
 					data:{
 						us: $("#us").val(),
 						ps: $("#ps").val(),
 					},
 					success: function(data) {
						console.log(data)
 						if (date.err == 0) {
 							 window.location.href = "index1.html"
							 var login_id=data._id
							 localStorage.setItem("login_id",login_id)
							 console.log(data)
 						}
 						else{
 						   alert("用户名或密码错误！")
 						}
 					}
 				})
 			})
			
		});
