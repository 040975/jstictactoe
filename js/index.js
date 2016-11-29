var tab = document.getElementById('tableau');
var cells = tab.getElementsByTagName('td');
for (var i = 0; i < 9; i++) {
    cells[i].onclick = clickCell;
}
var player1 = true;



function clickCell(e) {
    if (tableau[e.target.id.replace(/[^0-9]+/, "")] == 4) {
        player1 = player1 ? false : true;
        e.target.className = (player1 ? "player1" : "player2");
        tableau[e.target.id.replace(/[^0-9]+/, "")] = !player1;
    }
    gagne();
}
var tableau = [4, 4, 4, 4, 4, 4, 4, 4, 4];

function gagne()
{
    var tableau2 = new Array(8)
    tableau2[0] = tableau[0] + tableau[1] + tableau[2];
    tableau2[1] = tableau[3] + tableau[4] + tableau[5];
    tableau2[2] = tableau[6] + tableau[7] + tableau[8];
    tableau2[3] = tableau[0] + tableau[3] + tableau[6];
    tableau2[4] = tableau[1] + tableau[4] + tableau[7];
    tableau2[5] = tableau[2] + tableau[5] + tableau[8];
    tableau2[6] = tableau[0] + tableau[4] + tableau[8];
    tableau2[7] = tableau[2] + tableau[4] + tableau[6];


    for (var j = 0; j < 8; j++)
    {
        if (tableau2[j] == 3)
        {

            scoreplayer1++;
            console.log(scoreplayer1);
            document.getElementById("p1").innerHTML = "player1 score:" + scoreplayer1;
            document.getElementById('winner').innerHTML = "player1 gagne";
            document.getElementById('winner').style.display = "block";
            for (var i = 0; i < 9; i++)
            {
                cells[i].onclick = '';
            }

        }
        if (tableau2[j] == 0)
        {
            scoreplayer2++;
            document.getElementById("p2").innerHTML = "player2 score:" + scoreplayer2;
            document.getElementById('winner').innerHTML = "player2 gagne";
            document.getElementById('winner').style.display = "block";
            for (var i = 0; i < 9; i++)
            {
                cells[i].onclick = '';
            }

        }
        if (tableau2[j] == 3 || tableau2[j] == 0)
            finish = true;
    }
    matchnul++;

    if (matchnul == 9 && !finish)
    {
        scorenul++;
        document.getElementById("score").innerHTML = "match nul:" + scorenul;
        
        for (var i = 0; i < 9; i++)
        {
            cells[i].onclick = '';
        }

      }
}
var finish = false;
var matchnul = 0;
var scoreplayer1 = 0;
var scoreplayer2 = 0;
var scorenul = 0;

function rejouer() {
  for (var i = 0; i < 9; i++) {
      cells[i].onclick = clickCell;
  }
    finish = false;
    matchnul = 0;
    tableau = [4, 4, 4, 4, 4, 4, 4, 4, 4];
    player1 = true;
    for (var i = 0; i < 9; i++) {
        cells[i].className = '';
        document.getElementById('winner').style.display = "none";


    }
}
