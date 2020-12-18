
// const div = dom.create("<div>newDiv</div>");
// console.log(div);

let ting = document.querySelector('#ting');
console.log(ting);

dom.attr(ting, 'title', 'hi,I an Ting');
console.log(dom.attr(ting, 'title'));

dom.text(ting, '添加文本内容');

dom.style(ting, {backgroundColor:'red', border: '1px solid red'});

