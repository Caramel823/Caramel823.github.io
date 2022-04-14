window.onload=function(){
    // 导航栏
    let change=document.getElementsByClassName("change");
    //恢复样式的函数
    function backTerm(obj,str){
        obj.onmouseout=function(){
            this.innerHTML='<img id="iconList" src="'+str+'.png"/>';
        };
    }
    change[0].onmouseover=function(){
        this.innerHTML='<p id="pp9">Sign in</p><div class="disappear">Click here to sign in</div>';
    };
    change[1].onmouseover=function(){
        this.innerHTML='<p id="pp9">Favorite</p>';
    };
    change[2].onmouseover=function(){
        this.innerHTML='<p id="pp9">Message</p>';
    };
    change[3].onmouseover=function(){
        this.innerHTML='<p id="pp9">Cart</p><div class="disappear">Your shopping bag is empty!</div>';
    };
    backTerm(change[0],"people");
    backTerm(change[1],"love");
    backTerm(change[2],"email");
    backTerm(change[3],"shop");

    // 搜索框
    let searchButton=document.getElementsByClassName("searchButton")[0];
    let searchTerm=document.getElementsByClassName("searchTerm")[0];
    searchButton.onclick=function(){
        alert(searchTerm.value);
    };



    // 轮播图
    // 设置imgList的宽度
    let imgList=document.getElementById("imgList");
    let imgArr=document.getElementsByClassName("picture");
    imgList.style.width=1519*imgArr.length+"px";
    let index=0;
    let allA=document.getElementsByClassName("nav");
    allA[index].style.backgroundColor="red";
    // 为超链接绑定单击响应函数
    for(let i=0;i<allA.length;i++){
        allA[i].num=i;
        allA[i].onclick=function(){
            index=this.num;
            //切换图片
            // imgList.style.left=-1519*index+"px";
            move(imgList,"left",-1519*index,560,function(){});
            setA();
        }
    }
    autoChange();
    // 自动切换图片
    function autoChange(){
        setInterval(function(){
            index++;
            // 判断index的值
            if(index==imgArr.length){
                index=0;
            }
            move(imgList,"left",-1519*index,100,function(){
                setA();
            });
        },6000);
    }

    // 创建一个方法来设置选中的超链接a
    function setA(){
        // 判断当前索引是否是最后一张图片
        if(index>=imgArr.length-1){
            index=0;
            imgList.style.left=0;
        }
        for(let i=0;i<allA.length;i++){
            allA[i].style.backgroundColor="";
        }
        allA[index].style.backgroundColor="red";
    } 
    // 创建一个方法来实现动画效果
    function move(obj, attr, target, speed, callback) {
        //关闭上一个定时器
        clearInterval(obj.timer);
    
        //获取元素目前的位置
        var current = parseInt(getStyle(obj, attr));
        console.log(current);
        //判断速度的正负值
        //如果从0 向 800移动，则speed为正
        //如果从800向0移动，则speed为负
        if(current > target) {
            //此时速度应为负值
            speed = -speed;
        }
    
        //开启一个定时器，用来执行动画效果
        //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
        obj.timer = setInterval(function() {
    
            //获取box1的原来的left值
            var oldValue = parseInt(getStyle(obj, attr));
    
            //在旧值的基础上增加
            var newValue = oldValue + speed;
    
            //判断newValue是否大于800
            //从800 向 0移动
            //向左移动时，需要判断newValue是否小于target
            //向右移动时，需要判断newValue是否大于target
            if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                newValue = target;
            }
    
            //将新值设置给box1
            obj.style[attr] = newValue + "px";
    
            //当元素移动到0px时，使其停止执行动画
            if(newValue == target) {
                //达到目标，关闭定时器
                clearInterval(obj.timer);
                //动画执行完毕，调用回调函数
                callback && callback();
            }
    
        }, 30);
        // 定义一个函数，用来获取指定元素的当前样式
        function getStyle(obj, name) {

            if(window.getComputedStyle) {
                //正常浏览器的方式，具有getComputedStyle()方法
                return getComputedStyle(obj, null)[name];
            } else {
                //IE8的方式，没有getComputedStyle()方法
                return obj.currentStyle[name];
            }
        
        }
    }

    // 设置阴影
    let box1=document.getElementsByClassName("box1");
    for(let i=0;i<box1.length;i++){
        box1[i].onmouseover=function(){
            box1[i].style.boxShadow="3px 3px 10px darkgray";
        }
        box1[i].onmouseout=function(){
            box1[i].style.boxShadow="";
        }
    }
};