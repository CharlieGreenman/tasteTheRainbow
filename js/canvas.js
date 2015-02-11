document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    var c = document.getElementById('canvas');
    //make canvas the full size of screen
    c.width = document.body.clientWidth; //document.width is obsolete
    c.height = document.body.clientHeight; //document.height is obsolete
    var ctx = c.getContext('2d');

    c.addEventListener('click', draw, false);

    function draw(e){
      /*****************
        Variables
      ******************/
      var control = document.getElementById('control');
      var txt = control.value.substr(0,1);
      var len = control.value.length;
      var xPos = e.clientX;
      var yPos = e.clientY;
      var radius = 30;

      //draw circle
      ctx.beginPath();
      ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
      //randomize colors
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      control.style.background = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      document.body.style.background = 'hsl(' + 360 * Math.random() + ', 10%, 30%)';
      ctx.fill();
      ctx.closePath();
      ctx.fillStyle = 'black';
      ctx.font = '30px Audiowide';
      //draw text in proper place
      ctx.fillText(txt, (xPos - 7.5), yPos + 7.5);
      //remove first letter

      control.value = control.value.slice(1,len);
    }
}
