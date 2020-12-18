window.dom = {
  create(string){
    //用trmolate元素作为容器
    const container = document.createElement("template");
    //trim去除空格
    container.innerHTML = string.trim();
    //content.firstChild才能获取第一个子元素
    return container.content.firstChild;
  },
  //创建插入下一个节点API
  after(node, node2){
    //插入node下一个节点的前面
    node.parenNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2){
    node.parentNode.inserBefor(node2, node);
  },
  append(parent, node){
    parent.appendChild(node);
  },
  //增加一个父元素
  wrap(node, parent){
    dom.before(node, parent);
    dom.append(parent, node);
  },
  remove(node){
    noed.parentNode.removeChild(node);
    return node;
  },
  //删除所有
  empty(node){
    const {childNodes} = node;
    const array = [];
    let x = node.firstChild;
    while (x){
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
  },
  //重载，如果两个参数就set，如果三个就get
  attr(node, name, value){
    if(arguments.length === 3){
      node.setAttribute(name, value)
    }else if(arguments.length === 2){
      return node.getAttribute(name)
    }
  },
  //适配，IE,添加文本
  text(node, string){
    if(arguments.length === 2){
      if('innerText' in node){
        node.innerText = string;
      }else{
        node.textContent = string;
      }
    }else if(arguments.length ===1){
      if('innerText' in node){
        return node.innerText;
      }else {
        return  node.textContent;
      }
    }
  },
  html(node, string){
    if(arguments.length === 2){
      node.innerHTML = string;
    }else if(arguments.length){
      return node.innerHTML;
    }
  },
    //添加样式
  style(node, name, value){
    // div , color , red
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // div  查看border属性
      if (typeof name === 'string') {
        return node.style[name];
      } else if (name instanceof Object) {
        for (let key in name) {
          node.style[key] = name[key]
        }
      }
    }
  },

  class: {
    add(node, className){
      node.classList.add(className)
    },
    remove(node, className){
      node.classList.remove(className)
    }

  }



}
;




