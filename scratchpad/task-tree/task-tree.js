var tree;
$(function(){
	tree = $('#tree');
	createTaskStub(tree);
	//Buttons in options menu
	$('#light').on('mousedown', function(event){
		$('body').removeClass('dark');
		return false;
	});
	$('#dark').on('mousedown', function(event){
		$('body').addClass('dark');
		return false;
	});
	$('#text').on('mousedown', function(event){
		$('body').removeClass('code');
		return false;
	});
	$('#code').on('mousedown', function(event){
		$('body').addClass('code');
		return false;
	});
});
function createTaskStub(parent){
	var li = $('<li>').appendTo(parent);
	var div = $('<div>').appendTo(li);
	var p = $('<p>').text('+ Add Item').attr('contenteditable', 'true').addClass('placeholder');
	p.on('input', function(e){
		var list = $(this).removeClass('placeholder').parent().next();
		if(!list.children().length){//Was a task stub
			createTaskStub(list);//Create a child stub
			createTaskStub(list.parent().parent());//Create a sibling stub
		}
	}).appendTo(div);
	$('<button>').text('Remove').addClass('remove').on('mousedown', function(e){
		$(this).parent().parent().remove();//Remove li
	}).appendTo(div);
	$('<ul>').appendTo(li);
}
