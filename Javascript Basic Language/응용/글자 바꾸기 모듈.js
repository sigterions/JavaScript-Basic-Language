// getElementByID 값을 반환한다. 
// textContent는 모든 텍스트를 그대로 가져오지만 innerText는 공백을 제거하고 텍스트를 반환
var mid = document.querySelector('#mid');
mid.onclick = function(){
    document.getElementById("mid").textContent = "럭스";
}

var top = document.querySelector('#top');
top.onclick = function(){
    document.getElementById('top').textContent = "문도";
}
