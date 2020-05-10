var editor;
$(function(){
	editor = $('#editor');
	//Buttons in options menu
	$('#light').on('mousedown', function(event){
		editor.removeClass('dark');
		return false;
	});
	$('#dark').on('mousedown', function(event){
		editor.addClass('dark');
		return false;
	});
	$('#text').on('mousedown', function(event){
		editor.removeClass('code');
		return false;
	});
	$('#code').on('mousedown', function(event){
		editor.addClass('code');
		return false;
	});
	$('#strip').on('mousedown', function(event){
		editor.find('*').filter(function(index, el){
			return $(el).prop('tagName') == 'BR' || $(el).css('display') == 'block' || $(el).css('display') == 'list-item';
		}).after("\n");//Add a line feed after each block element and line break, to retain spacing once the element is removed
		editor.html(editor.html().replace(/<[^>]+>/g, '').replace(/\n{2}/g, "\n"));
	});
	$('#html-to-text').on('mousedown', function(event){
		editor.text(editor.html());
	});
	$('#text-to-html').on('mousedown', function(event){
		editor.html(editor.text());
	});
	$('#fill-height').on('mousedown', function(event){
		if(!editor.text().length) return;//Can't fill blank space
		while(textSize(editor.text()) <= editor.height())
			editor.css('font-size', Number(editor.css('font-size').slice(0, -2)) + 1);//Guarantee font size is perfect or too big
		while((hText = textSize(editor.text())) > hWindow)
			editor.css('font-size', Number(editor.css('font-size').slice(0, -2)) - 1);//Guarantee font size is perfect or too small (no scrolling)
	});
	$('#reset-size').on('mousedown', function(event){
		editor.css('font-size', '16px');
	});
});
function textSize(text){
	var p = $('<p></p>').html(editor.html());
	editor.append(p);
	var height = p.height();
	p.remove();
	return height;
}
