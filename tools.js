/*
obj:要执行动画的元素
speed:速度(正值向右，负值向左)
target:目标位置（不用 + px）
attr:动画样式（字符串）
callback:动画结束执行回调函数
*/
function move(obj, speed, target, attr, callback){
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj, attr));
	if(current > target)
	{
		speed = -speed;
	};
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
			newValue = target;
		};
		obj.style[attr] = newValue + "px";
		if(newValue == target){
			clearInterval(obj.timer);
			callback();
		};
	}, 30);
	
};

//获取元素样式，obj：元素名称；name：元素样式(字符串)
function getStyle(obj, name){
	return window.getComputedStyle(obj, null)[name] || obj.currentStyle[name];
};