var redCubeCounter = 0;
var blueCubeCounter = 0;
var greenCubeCounter = 0;
var yellowCubeCounter = 0;

$(document).ready(function(){
  console.log("I\'m Here For You.");
  runCubeCreater();
});

function updateCubeCounters(){
  $("#redColorCounter").text("Red Cubes Present: "+redCubeCounter);
  $("#blueColorCounter").text("Blue Cubes Present: "+blueCubeCounter);
  $("#greenColorCounter").text("Green Cubes Present: "+greenCubeCounter);
  $("#yellowColorCounter").text("Yellow Cubes Present: "+yellowCubeCounter);
}

function runCubeCreater(){
  $(".button-container").on("click","button",function(){
    var cubeClass = $(this).attr("class");
    // console.log(cubeClass);
    createCube(cubeClass);
  });

  $("#colorCubeContainer").on("click",".cube",function(){
    var clickedItem = $(this);
    deleteCube($(this));
  });
}

function createCube(cubeClass){
  // console.log("We are going to create a cube!");
  var cubeColor =  cubeClass;
  // console.log("Cube Color",cubeColor);
  $("#colorCubeContainer").append("<div class='"+cubeColor+" cube'></div>");
  increaseCubeCount(cubeColor);
  updateCubeCounters();
}

function deleteCube(clickedItem){
  // console.log("We are going to delete a cube!");
  // could have set up an id for these items
  var cubeColor = $(clickedItem).attr("class").split(' ')[0];
  // console.log(cubeColor);
  $(clickedItem).fadeOut(300,function(){$(clickedItem).remove();});
  decreaseCubeCount(cubeColor);
  updateCubeCounters();
}

function increaseCubeCount(cubeColor){
  switch (cubeColor){
    case "red":
      redCubeCounter += 1;
      // console.log(redCubeCounter);
      break;
    case "blue":
      blueCubeCounter += 1;
      break;
    case "green":
      greenCubeCounter += 1;
      break;
    case "yellow":
      yellowCubeCounter += 1;
      break;
    }
}

function decreaseCubeCount(cubeColor){
  switch (cubeColor){
    case "red":
      redCubeCounter -= 1;
      console.log(redCubeCounter);
      break;
    case "blue":
      blueCubeCounter -= 1;
      break;
    case "green":
      greenCubeCounter -= 1;
      break;
    case "yellow":
      yellowCubeCounter -= 1;
      break;
    }
}
