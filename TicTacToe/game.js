var currentPlayer = prompt("Who is The Current Player X=1 O=2");



var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);


for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

// Checks If Grid Is Already Clicked
function clickCell(x,y) {
  if (grid[x][y]>0) {
    alert("Dont Try To Cheat Bud!!!!!");
  } 


// Clicking Of Boxes
  else {
    if (currentPlayer==1) {
      document.getElementById("cell_"+x+"_"+y).style.color="#3F88C5";
      document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } 
    else {
       document.getElementById("cell_"+x+"_"+y).style.color="#E2C290";
       document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
  
  if(grid[0][0]==grid[1][0]&&grid[1][0]==grid[2][0]&&grid[0][0]!=0){
	alert(grid[0][0]+" is a winner!");
	reset();
  }
  else if(grid[0][1]==grid[1][1]&&grid[1][1]==grid[2][1]&&grid[0][1]!=0){
	alert(grid[0][1]+" is a winner!");
	reset();
  }
  else if(grid[0][2]==grid[1][2]&&grid[1][2]==grid[2][2]&&grid[0][2]!=0){
	alert(grid[0][2]+" is a winner!");
	reset();
  }
  else if(grid[0][1]==grid[0][2]&&grid[0][0]==grid[0][1]&&grid[0][1]!=0){
	alert(grid[0][0]+"is a winner!");
	reset();
  }	
  else if(grid[1][1]==grid[1][2]&&grid[1][0]==grid[1][1]&&grid[1][1]!=0){
	alert(grid[1][0]+" is a winner!");
	reset();
  }
  else if(grid[2][1]==grid[2][2]&&grid[2][0]==grid[2][1]&&grid[2][1]!=0){
	alert(grid[2][0]+"is a winner!");
	reset();
  }
  else if(grid[0][0]==grid[1][1]&&grid[0][0]==grid[2][2]&&grid[0][0]!=0){
	alert(grid[0][0]+" is a winner!");
	reset();
  }
  else if(grid[0][2]==grid[1][1]&&grid[0][2]==grid[2][0]&&grid[0][2]!=0){
	alert(grid[0][2]+" is a winner!");
	reset();
  }


}
// Reset Game

function noWins(){
	

}
function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 currentPlayer=1;
}