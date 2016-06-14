$('#eventSaveButton').click(function() {
	console.log("Testtttt");
	var currentUser = localStorage.getItem("currentUser");
	var newChild = $('<a class="list-group-item" href="#"><span class="badge">25 minutes ago</span> <i class="fa fa-fw fa-info"></i><b>Lakmal Padmakumara</b>Included Holidays</a>');
	$('.list-group').append(newChild);
});
