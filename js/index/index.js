(function($) {
	$.index = function(arg) {
		// 私有
		this.main = function() {
			debugger;
			console.log("index.end");
			//$.ajax({
			//	type : "POST",
			//	url : basePath + "index/index.action",
			//	// url: "<%basePath%>/test.json",
			//	data : {
			//		username : "1",
			//		password : "2"
			//	},
			//	dataType : "json"
			//}).done(function(data) {
			//	debugger;
			//	console.log("1212");
			//	// $('#resText').empty(); //清空resText里面的所有内容
			//	// var html = '';
			//	// $.each(data, function(commentIndex, comment){
			//	// html += '<div class="comment"><h6>' + comment['username']
			//	// + ':</h6><p class="para"' + comment['content']
			//	// + '</p></div>';
			//	// });
			//	// $('#resText').html(html);
			//});
		}
		// 公有
		this.hehe = "11";
	};

})(jQuery);
debugger;
var obj = window.location;
var contextPath = obj.pathname.split("/")[1];
var basePath = obj.protocol + "//" + obj.host + "/" + contextPath + "/";
var index = new $.index();
//index.main();
