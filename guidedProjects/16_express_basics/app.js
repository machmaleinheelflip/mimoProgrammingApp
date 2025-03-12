let express = require("express");
let app = express();
port = 3000;

app.listen(port, function () {
  console.log("Server running");
  }
);

app.get("/coinFlip", function (req, res){
    const randomVal = Math.random();
    const result = randomVal < 0.5 ? 'Heads' : 'Tails';
    res.status(200).json({ result: result });
}
);

app.get("/diceRoll", function (req, res){
    result= Math.floor(Math.random() * 6) +1;
    res.status(200).json({ result: result });
}
);

app.get("/randomNumber", function (req, res){
    result= Math.floor(Math.random() * 100) +1;
    res.status(200).json({ result: result });
}
);