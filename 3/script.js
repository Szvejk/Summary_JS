const imgContElm = document.querySelector('.img-container');
const imgElm = document.querySelector('.img-container img ');


const ZOOM = 300;
imgContElm.addEventListener('mouseenter', function(){
    imgElm.style.width = ZOOM + '%';
});
imgContElm.addEventListener('mouseleave', function(){
imgElm.style.width = '100%';
imgElm.style.top = '0';
imgElm.style.left = '0';
});
imgContElm.addEventListener('mousemove', function(mouseEvent){
    let obj = imgContElm;
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;


    while(obj.offsetParent){
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    if(mouseEvent) {
        // firefox
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;

    } else {
        // IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
    }
    xpos -=obj_left;
    ypos -=obj_top;

    const imgWidth = imgElm.clientWidth;
    const imgHeight = imgElm.clientHeight;
    imgElm.style.top = -(((imgHeight - this.clientHeight)*ypos) / this.clientHeight) + 'px';
    imgElm.style.left = -(((imgWidth - this.clientWidth)*xpos) / this.clientWidth) + 'px';
});
function changeHeight() {
    imgContElm.style.height = imgContElm.clientWidth + 'px';
}
changeHeight();
window.addEventListener('resize', changeHeight);
