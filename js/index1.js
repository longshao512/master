function toHn() {
	document.getElementById('box1').style.display = 'none';
}
//单击删除
function del(obj) {
	var oParentnode = obj.parentNode.parentNode;
	var olistTable = document.getElementById('listTable');
	olistTable.removeChild(oParentnode);
}

function addList() {
	document.getElementById('box1').style.display = 'none';
	var food = document.getElementById('food').value;
	var receivables = document.getElementById('receivables').value;
	var drawee = document.getElementById('drawee').value;

	var oTr = document.createElement('tr');
	var oTd1 = document.createElement('td');
	var oInput = document.createElement('input');
	
	
	var oTd2 = document.createElement('td');
	oTd2.innerHTML = food;
	var oTd3 = document.createElement('td');
	oTd3.innerHTML = receivables;
	var oTd4= document.createElement('td');
	oTd4.innerHTML = drawee;
	
	var oTd5 = document.createElement('td');
	
	
	
	var oInput2 = document.createElement('input');
	oTd5.appendChild(oInput2);
	oInput2.setAttribute('value', '删除');
	oInput2.setAttribute('onclick', 'del(this)');
	oInput2.className = 'btn btn-danger';
	
	var oInput3 = document.createElement('input');
	oTd5.appendChild(oInput3);
	oInput3.setAttribute('value', '修改');
	oInput3.setAttribute('onclick', 'modify(this)');
	oInput3.className = 'btn btn-info';
	
	
	oTr.appendChild(oTd2);
	oTr.appendChild(oTd3);
	oTr.appendChild(oTd4);
	
	oTr.appendChild(oTd5);
	var olistTable = document.getElementById('listTable');
	olistTable.appendChild(oTr);
	
}

//修
function modify(obj) {
	
	document.getElementById('box1').style.display = 'block';
	var food = document.getElementById('food');
	var receivables = document.getElementById('receivables');
	var drawee = document.getElementById('drawee');
	
	var oTr = obj.parentNode.parentNode;
	var aTd = oTr.getElementsByTagName('td');  
	var oMytable = document.getElementById('mytable');
	
	rowIndex = obj.parentNode.parentNode.rowIndex;
	food.value = aTd[0].innerHTML;
	receivables.value = aTd[1].innerHTML;
	drawee.value = aTd[2].innerHTML;
   
}

/*				var page;
								var pageSize;
								var totalPage;

								var selectRow = [];
								$(function() {
								getUserData("");

								$("#nextPage").click(function() {
										var myparam = {
											"name:"
											$("#name").val(),
											"price:"
											$("#price").val(),
											"desc:"
											$("#desc").val(),
											"typename:"
											$("#typename").val(),
											"typeid:"
											$("#typeid").val(),
										}) getUserData(myparam);
								}) $("#prevPage").click(function() {
									var myparam = {
										"name:"
										$("#name").val(),
										"price:"
										$("#price").val(),
										"desc:"
										$("#desc").val(),
										"typename:"
										$("#typename").val(),
										"typeid:"
										$("#typeid").val(),
									}) getUserData(myparam);
								})

								})

								function getUserData(param) {
									$.ajax({
										type: "post",
										url: "http://39.105.232.109:3000/food/add",
										async: true,
										dataType: "json",
										data: param,
										success: function(data) {
											//console.log(data);
											$("#mainData").html("");
											$each(data.listUser, function(i, d) {
												$("#mainData").append("<tr><td>" + d.name + "</td><td>" + d.price + "</td><td>" + d.desc + "</td><td>" +
													d.typename + "</td><td>" + d.typeid + "</td><td>")
											})
											//"totalPage":4;"pageSize":3,"page":1,
											//每访问一次后台  把最新的数据保存在页面上
											page = data.page;
											pageSize = data.pageSize;
											totalPage = data.totalPage;

											$("#showpage").html(data, page);
											$("#showtatalpage").html(data, totalpage);
											$("#showpageSize").html(data, pageSize);


											$("#mainData tr").click(function() {
												$("#mainData tr").removeClass("info");
												$(this).addClass("info");
												selectRow = [];
												$(this).find("td").each(function() {
													selectRow.push($(this).html());
												})
												console.log(selectRow);
											})
											//每次从服务器获取最新数据之后  修改页面按钮的状态
											initBtn();
										}
									});
								}

								function initBtn() {
									$(".pagebtn").each(function(i) {
										$(this).prop("disabled", false);
									})
									if (page == 1) {
										$("#nextPage").prop("disabled", true);
									}
									if (page == totalPage) {
										$("#nextPage").prop("disabled", true);
									}
								}
				*/