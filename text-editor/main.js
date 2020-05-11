

let boldBtn = document.getElementById('bold-btn');
let italicBtn = document.getElementById('italic-btn');

let boldClickListner = (event) =>
{
    
    let selection = window.getSelection();
    let text = selection.toString();
    let parent = selection.anchorNode.parentElement;
    let range = selection.getRangeAt(0);

    if(parent == "text-editor")
    {
    let span = document.createElement('span');
    span.classList = 'text-bold';
    span.innerHTML = text;
    console.log(span.innerHTML)
    range.deleteContents();
    range.insertNode(span);
    }
    else
    { 
    if(parent.classList.contains("text-bold"))
    {
        let span = document.createElement('span');
        span.classList = 'text-unbold';
        span.innerHTML = text;
        console.log(span.innerHTML)
        range.deleteContents();
        range.insertNode(span);
    }
    else
    {
        let span = document.createElement('span');
        span.classList = 'text-bold';
        span.innerHTML = text;
        console.log(span.innerHTML)
        range.deleteContents();
        range.insertNode(span);
    }
    }
     
}

boldBtn.addEventListener('click', boldClickListner);

let italicClickListener = (event) =>
{
    let selection = window.getSelection();
    let text = selection.toString();
    let parent = selection.anchorNode.parentElement;
    let range = selection.getRangeAt(0);

    if(parent == "text-editor")
    {
        let span = document.createElement('span');
        span.classList = 'text-italic';
        span.innerHTML = text;
        console.log(span.innerHTML)
        range.deleteContents();
        range.insertNode(span);
    }
    else
    { 
    if(parent.classList.contains("text-italic"))
    {
        let span = document.createElement('span');
        span.classList = 'text-unitalic';
        span.innerHTML = text;
        console.log(span.innerHTML)
        range.deleteContents();
        range.insertNode(span);
    }
    else
    {
        let span = document.createElement('span');
        span.classList = 'text-italic';
        span.innerHTML = text;
        console.log(span.innerHTML)
        range.deleteContents();
        range.insertNode(span);
    }
    }

}

italicBtn.addEventListener('click', italicClickListener);
