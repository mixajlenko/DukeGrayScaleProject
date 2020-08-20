var image;
var imageGray;

function upload(){
  var canv = document.getElementById("can");
  var input = document.getElementById("inputFile");
  
  image = new SimpleImage(input);
  imageGray = new SimpleImage(input);
  
  image.drawTo(canv);
}

function doGray(){
  
 for(var pixel of imageGray.values()){
   var avarage = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
 
   pixel.setRed(avarage);
   pixel.setGreen(avarage);
   pixel.setBlue(avarage);
}
  var imageCanvas = document.getElementById("can2");
  
  imageGray.drawTo(imageCanvas);
}