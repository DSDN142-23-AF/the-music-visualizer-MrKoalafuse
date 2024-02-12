
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let Img;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(1,280,130,800);
    Img = loadImage('');
    firstRun = false
  }


  background(10)
    // display "words"
    textAlign(CENTER);
    textSize(50);
    text(words, width/2, height/4);

//Building #1
  fill(150, 25, 25)
  rect(1,150,130,700)
//building #2
  fill(193,74,9)
  rect(135,350,130,500)
//building #3
  fill(139,79,57)
  rect(270, 350, 130, 500)
//building #4
  fill(188, 74, 60)
  rect(405, 150, 130, 700)

// Pavement outside buildings
  fill(156)
  rect(1, 850, 550, 50)
  fill(100)
  rect(1,900, 550, 59)

//doors
  fill(210)
  rect(35,750, 50, 100)
  rect(175,750, 50, 100)
  rect(315,750, 50, 100)
  rect(450,750, 50, 100)

// Windows
  fill(55,120,191)
//Building #1 Vocal
  rect(20, 170, 35, vocal/1)
  rect(70,250,35,vocal/1)
  rect(20,325,35,vocal/1)
  rect(70,400,35,vocal/1)
  rect(40,500,35,vocal/1)
//building #2 Drum
  rect(150, 370, 35, drum/1)
  rect(210,450,35,drum/1)
  rect(150,510,35,drum/1)
  rect(210,570,35,drum/1)
  rect(160,650,35,drum/1)
//building #3 Bass
  rect(290, 370, 35, bass/1)
  rect(350,450,35,bass/1)
  rect(290,510,35,bass/1)
  rect(350,570,35,bass/1)
  rect(310,650,35,bass/1)
//building #4 Other
  rect(425, 170, 35, other/1)
  rect(485,250,35,other/1)
  rect(425,325,35,other/1)
  rect(485,400,35,other/1)
  rect(445,500,35,other/1)

// Moon
  fill(256)
  let Size = map(vocal, 20, 100, 60, 150, true);
  ellipse(470, 65, Size)

  image(Img, 100,80)

}