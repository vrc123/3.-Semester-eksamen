// Canvas
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// Game message
let message = document.querySelector("#message");

// Score
let score = 0;
message.innerHTML = "Points: " + score;

// Map
let map = [
    0,2,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,
    0,2,0,0,2,2,2,0,2,1,4,4,4,4,4,1,3,3,3,0,
    0,2,2,0,8,0,2,0,2,1,4,4,4,4,4,4,2,2,3,0,
    0,0,2,0,0,0,2,0,2,1,1,1,1,1,1,1,3,2,3,0,
    0,0,2,0,2,2,2,0,2,1,4,10,1,3,3,3,3,2,3,0,
    0,2,2,2,2,0,0,0,2,1,4,4,1,3,2,2,2,2,3,0,
    0,2,0,0,0,0,2,2,2,1,4,4,1,3,2,14,3,2,3,0,
    0,2,0,14,0,2,2,0,0,1,4,4,1,3,2,2,2,2,3,0,
    0,2,2,2,2,2,0,0,0,1,1,4,1,3,3,3,3,3,3,0,
    0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,
    0,3,3,3,3,3,3,3,3,0,3,2,3,3,3,3,3,3,3,0,
    6,6,6,6,6,6,6,6,3,0,3,2,2,2,2,2,2,2,3,0,
    0,3,3,3,3,3,3,6,3,0,3,2,0,3,0,3,0,2,3,0,
    0,3,2,2,2,2,2,6,2,0,2,2,2,2,2,2,2,2,3,0,
    0,3,2,3,3,3,3,6,2,0,3,2,3,0,14,0,3,2,3,0,
    1,1,4,1,1,3,6,6,2,0,3,2,2,2,2,2,2,2,3,0,
    1,10,4,4,1,3,6,3,2,0,3,2,0,3,0,12,0,2,3,0,
    1,4,4,4,1,3,6,3,2,0,3,2,2,2,2,2,2,2,3,0,
    1,4,4,4,1,3,6,3,14,0,3,3,3,3,3,3,3,3,3,0,
    1,1,1,16,1,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0
];

//Map dimensions
let mapWidth = 20;
let mapHeight = 20;

//Tiles dimensions
let tileWidth = 36;
let tileHeight = 36;

// Tile floortypes
let floorTypes = {
    solid: 0,
    path: 1,
    water: 2,
    pressureplate:3,
    enemy: 4,
    point: 5,
    goal: 6
}

// Tiles styling
let tileTypes = {
    
    // Styling three
    0: {
        floor: floorTypes.solid,
        sprite:[
        {
            x: 252,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling wall
    1: {
        floor: floorTypes.solid,
        sprite:[
        {
            x: 36,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling path
    2: {
        floor: floorTypes.path,
        sprite:[
        {
            x: 0,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling grass
    3: {
        floor: floorTypes.path,
        sprite:[
        {
            x: 144,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling planks
    4: {
        floor: floorTypes.path,
        sprite:[
        {
            x: 72,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling bridge
    5: {
        floor: floorTypes.path,
        sprite:[
        {
            x: 36,
            y: 36,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling water
    6: {
        floor: floorTypes.water,
        sprite:[
        {
            x: 72,
            y: 36,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling enemy
    7: {
        floor: floorTypes.enemy,
        sprite:[
        {
            x: 0,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling point path
    8: {
        floor: floorTypes.point,
        sprite:[
        {
            x: 288,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling point path full
    9: {
        floor: floorTypes.point,
        sprite:[
        {
            x: 324,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling point planks
    10: {
        floor: floorTypes.point,
        sprite:[
        {
            x: 144,
            y: 36,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling point planks full
    11: {
        floor: floorTypes.point,
        sprite:[
        {
            x: 108,
            y: 36,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling point grass
    12: {
        floor: floorTypes.point,
        sprite:[
        {
            x: 180,
            y: 36,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling point grass full
    13: {
        floor: floorTypes.point,
        sprite:[
        {
            x: 216,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling pressure plate
    14: {
        floor: floorTypes.pressureplate,
        sprite:[
        {
            x: 108,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling pressure plate used
    15: {
        floor: floorTypes.pressureplate,
        sprite:[
        {
            x: 0,
            y: 36,
            width: tileWidth,
            height: tileHeight
        }]
    },
    
    // Styling goal
    16: {
        floor: floorTypes.goal,
        sprite:[
        {
            x: 180,
            y: 0,
            width: tileWidth,
            height: tileHeight
        }]
    }
}

// Graphics variabels
let tileset = null;
let tilesetURL = "img/tileset.png";
let tilesetLoaded = false;

// When page is loaded
window.onload = function()
{
    // Load graphics
    tileset = new Image();
    tileset.onload = function()
    {
        tilesetLoaded = true;
    };
    tileset.src = tilesetURL;

    // Viewport screen size
    viewport.screen = [canvas.width, canvas.height];

    // Draws game when page is loadet
    requestAnimationFrame(drawGame);

    // Checks for player controls
    window.addEventListener("keydown", function(e)
    {
        if(e.keyCode >= 37 && e.keyCode <= 40)
        {
            keysDown[e.keyCode] = true;
        }
    });
    window.addEventListener("keyup", function(e)
    {
        if(e.keyCode >= 37 && e.keyCode <= 40)
        {
            keysDown[e.keyCode] = false;
        }
    });
}

// Converts coordinates to index
function toIndex(x, y)
{
    return ((y * mapWidth) + x);
}

// Open to next level
let tileEvents = {
    143: drawOpeningFirstLevel,
    135: drawOpeningSecondLevel,
    294: drawOpeningThirdLevel,
    368: drawOpeningFourthLevel,
    44: getPointFirstLevel,
    91: getPointSecondLevel,
    335: getPointThirdLevel,
    321: getPointFourthLevel,
}

// Pressure plate
function drawOpeningFirstLevel()
{
    if((map[toIndex(9,1)] == 1) && (map[toIndex(3,7)] == 14))
    {
        //Open to next level
        map[toIndex(9,1)] = 4;
    
        //Pressure plate = pressure plate used 
        map[toIndex(3,7)] = 15;
    }
}
function drawOpeningSecondLevel()
{
    if((map[toIndex(10,3)] == 1) && (map[toIndex(15,6)] == 14))
    {
        //Open to next level
        map[toIndex(10,3)] = 4;
    
        //Pressure plate = pressure plate used 
        map[toIndex(15,6)] = 15;
    }
}
function drawOpeningThirdLevel()
{
    if((map[toIndex(9,13)] == 0) && (map[toIndex(14,14)] == 14))
    {
        //Open to next level
        map[toIndex(9,13)] = 2;
    
        //Pressure plate = pressure plate used 
        map[toIndex(14,14)] = 15;
    }
}
function drawOpeningFourthLevel()
{
    if((map[toIndex(7,13)] == 6) && (map[toIndex(8,18)] == 14))
    {
        //Open to next level
        map[toIndex(7,13)] = 5;
    
        //Pressure plate = pressure plate used 
        map[toIndex(8,18)] = 15;
    }
}

// Points replace
function getPointFirstLevel()
{
    //Replaces point on first level with path
    if(map[toIndex(4,2)] == 8)
    {
        map[toIndex(4,2)] = 2;
    }
    if(map[toIndex(4,2)] == 9)
    {
        map[toIndex(4,2)] = 2;
    }
}
function getPointSecondLevel()
{
    //Replaces point on second level with planks
    if(map[toIndex(11,4)] == 10)
    {
        map[toIndex(11,4)] = 4;
    }
    if(map[toIndex(11,4)] == 11)
    {
        map[toIndex(11,4)] = 4;
    }
}
function getPointThirdLevel()
{
    //Replaces point on first level with grass
    if(map[toIndex(15,16)] == 12)
    {
        map[toIndex(15,16)] = 3;
    }
    if(map[toIndex(15,16)] == 13)
    {
        map[toIndex(15,16)] = 3;
    }
}
function getPointFourthLevel()
{
    if(map[toIndex(1,16)] == 10)
    {
        map[toIndex(1,16)] = 4;
    }
    if(map[toIndex(1,16)] == 11)
    {
        map[toIndex(1,16)] = 4;
    }
}

// Points change variables
let pointChangeFirstLevelCount = 0;
let pointChangeFirstLevelCountMax = 1;
let pointChangeSecondLevelCount = 0;
let pointChangeSecondLevelCountMax = 1;
let pointChangeThirdLevelCount = 0;
let pointChangeThirdLevelCountMax = 1;
let pointChangeFourthLevelCount = 0;
let pointChangeFourthLevelCountMax = 1;

// Point change first level
function pointChangeFirstLevel(){
    if((pointChangeFirstLevelCount == pointChangeFirstLevelCountMax) && (tileTypes[map[toIndex(4,2)]].floor == floorTypes.point))
    {
        map[toIndex(4,2)] = 9;
        pointChangeFirstLevelCount = 0;
        drawGame();
    }
    else if((pointChangeFirstLevelCount == 0) && (tileTypes[map[toIndex(4,2)]].floor == floorTypes.point))
    {
        map[toIndex(4,2)] = 8;
        pointChangeFirstLevelCount++;
        drawGame();
    }
    
}

// Point change second level
function pointChangeSecondLevel(){
    if((pointChangeSecondLevelCount == pointChangeSecondLevelCountMax) && (tileTypes[map[toIndex(11,4)]].floor == floorTypes.point))
    {
        map[toIndex(11,4)] = 10;
        pointChangeSecondLevelCount = 0;
        drawGame();
    }
    else if((pointChangeSecondLevelCount == 0) && (tileTypes[map[toIndex(11,4)]].floor == floorTypes.point))
    {
        map[toIndex(11,4)] = 11;
        pointChangeSecondLevelCount++;
        drawGame();
    }    
}

// Point change third level
function pointChangeThirdLevel(){
    if((pointChangeThirdLevelCount == pointChangeThirdLevelCountMax) && (tileTypes[map[toIndex(15,16)]].floor == floorTypes.point))
    {
        map[toIndex(15,16)] = 12;
        pointChangeThirdLevelCount = 0;
        drawGame();
    }
    else if((pointChangeThirdLevelCount == 0) && (tileTypes[map[toIndex(15,16)]].floor == floorTypes.point))
    {
        map[toIndex(15,16)] = 13;
        pointChangeThirdLevelCount++;
        drawGame();
    }    
}

// Point change fourth level
function pointChangeFourthLevel(){
    if((pointChangeFourthLevelCount == pointChangeFourthLevelCountMax) && (tileTypes[map[toIndex(1,16)]].floor == floorTypes.point))
    {
        map[toIndex(1,16)] = 10;
        pointChangeFourthLevelCount = 0;
        drawGame();
    }
    else if((pointChangeFourthLevelCount == 0) && (tileTypes[map[toIndex(1,16)]].floor == floorTypes.point))
    {
        map[toIndex(1,16)] = 11;
        pointChangeFourthLevelCount++;
        drawGame();
    }    
}

// Points change timer
setInterval(()=>{
    pointChangeFirstLevel();
    pointChangeSecondLevel();
    pointChangeThirdLevel();
    pointChangeFourthLevel();
},1000)

// Viewport
let viewport = {
	screen: [0,0],
	startTile: [0,0],
	endTile: [0,0],
	offset: [0,0],
	update: function(positionX, positionY) {
        
        // Calculates the coordinates for the offset = center of the visuel area
		this.offset[0] = Math.floor((this.screen[0]/2) - positionX);
		this.offset[1] = Math.floor((this.screen[1]/2) - positionY);

        // Tile reference
		let tile = [ Math.floor(positionX / tileWidth), Math.floor(positionY / tileHeight) ];

        // Calculates start tile
		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileWidth);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileHeight);
		if(this.startTile[0] < 0)
        {
            this.startTile[0] = 0;
        }
		if(this.startTile[1] < 0)
        {
            this.startTile[1] = 0;
        }

        // Calculates end tile
		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileWidth);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileHeight);
		if(this.endTile[0] >= mapWidth)
        {
            this.endTile[0] = mapWidth -1;
        }
		if(this.endTile[1] >= mapHeight)
        {
            this.endTile[1] = mapHeight-1;
        }
	}
};

// Key codes for player controls
let keysDown = {
    37: false,
    38: false,
    39: false,
    40: false
};

// Player settings
let player = {
    tileFrom: [1,0],
    tileTo: [1,0],
    position: [39,3],
    dimensions: [30,30],
    timeStartMove: 0,
    delayMove: 500,
    sprite: [
    {
        x: 0,
        y: 330,
        width: 30,
        height: 30
    }]
}

// Player placement
player.placeAt = function(x, y)
{
    this.tileFrom = [x,y];
    this.tileTo = [x,y];
    this.position = [((tileWidth * x) + ((tileWidth - this.dimensions[0]) / 2)), ((tileHeight * y) + ((tileHeight - this.dimensions[1]) / 2))];
}

// Player movement
player.processMovement = function(timeElapsed)
{
    // Check if player is not moving
    if(this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1])
    {
        return false;
    }

    // Check if player is moved to destination tile
    if((timeElapsed - this.timeStartMove) >= this.delayMove)
    {
        this.placeAt(this.tileTo[0], this.tileTo[1]);
        
        // Check if tile has a event
        if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] != "undefined")
        {
            tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
        }
    }
    // Player moving
    else
    {
        // Pixel position from starting tile
        this.position[0] = (this.tileFrom[0] * tileWidth) + ((tileWidth - this.dimensions[0]) / 2);
        this.position[1] = (this.tileFrom[1] * tileHeight) + ((tileHeight - this.dimensions[1]) / 2);

        // Checks if player is moving horizontally
        if(this.tileTo[0] != this.tileFrom[0])
        {
            // Distance moved
            let difference = (tileWidth / this.delayMove) * (timeElapsed - this.timeStartMove);
            // Checks if it is left or right movement
            this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference);
        }
        // Checks if player is moving vertically
        if(this.tileTo[1] != this.tileFrom[1])
        {
            // Distance moved
            let difference = (tileHeight / this.delayMove) * (timeElapsed - this.timeStartMove);
            // Check if it is left or right movement
            this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - difference : difference);
        }

        // Finds the value of a number rounded to the nearest integer.
        this.position[0] = Math.round(this.position[0]);
        this.position[1] = Math.round(this.position[1]);
    }

    // Indication of player movement
    return true;
}

// Check where player can move
player.canMoveTo = function(x, y)
{
    // Player can't move out of the map
    if((x < 0) || (x >= mapWidth) || (y < 0) || (y > mapHeight))
    { 
        return false;
    }
    
    // Player can't move on other tiles than paths
    if((tileTypes[map[toIndex(x,y)]].floor != floorTypes.path) && (tileTypes[map[toIndex(x,y)]].floor != floorTypes.water) && (tileTypes[map[toIndex(x,y)]].floor != floorTypes.pressureplate) && (tileTypes[map[toIndex(x,y)]].floor != floorTypes.enemy) && (tileTypes[map[toIndex(x,y)]].floor != floorTypes.point) && (tileTypes[map[toIndex(x,y)]].floor != floorTypes.enemy) && (tileTypes[map[toIndex(x,y)]].floor != floorTypes.goal))
    {
        return false;
    }

    // Player dies when player is moving into enemy
    if(tileTypes[map[toIndex(x,y)]].floor == floorTypes.enemy)
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });
        
        // Message if player dies to a zombie
        message.innerHTML = "You were eaten by a zombie!" + "<br>" + "<a href='game.php'>Click here to play again</a>";
        
        // Restarts the score
        score = 0;   
    }

    // Player dies when player is moving into water
    if(tileTypes[map[toIndex(x,y)]].floor == floorTypes.water)
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });
                
        // Message if player dies to water
        message.innerHTML = "You drowned!" + "<br>" + "<a href='game.php'>Click here to play again</a>";
                
        // Restarts the score
        score = 0;  
    }

    // Player adds a point to score when player is moving 
    if(tileTypes[map[toIndex(x,y)]].floor == floorTypes.point)
    {
        // Adds point to score
        score++;
        message.innerHTML = "Points: " + score;
    }

    // Player wins when player is moving
    if(tileTypes[map[toIndex(x,y)]].floor == floorTypes.goal)
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });

        // Message if the game is won
        message.innerHTML = "You won and got " + score + " out of 4 points! " +  "<br>" + "<a href='game.php'>Click here to play again</a>";

        // Restarts the score
        score = 0;
    }

    // Indication of player can move
    return true;
}

// Player can move up, down, left and right
player.canMoveUp = function()
{
    return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1);
};
player.canMoveDown = function()
{
    return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1);
};
player.canMoveLeft = function()
{ 
    return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]);
};
player.canMoveRight = function()
{ 
    return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]);
};

// Player movement left, right, up and down
player.moveUp = function(currentTime)
{ 
    this.tileTo[1] -= 1;
    this.timeStartMove = currentTime;
    this.sprite = [
    {
        x: 0,
        y: 300,
        width: 30,
        height: 30
    }];
};
player.moveDown = function(currentTime)
{ 
    this.tileTo[1] += 1;
    this.timeStartMove = currentTime;
    this.sprite = [
        {
            x: 0,
            y: 330,
            width: 30,
            height: 30
        }];
};   
player.moveLeft = function(currentTime)
{ 
    this.tileTo[0] -= 1;
    this.timeStartMove = currentTime;
    this.sprite = [
        {
            x: 0,
            y: 240,
            width: 30,
            height: 30
        }];
};
player.moveRight = function(currentTime)
{ 
    this.tileTo[0] += 1;
    this.timeStartMove = currentTime;
    this.sprite = [
        {
            x: 0,
            y: 270,
            width: 30,
            height: 30
        }];
};

// First Enemy settings
let firstEnemy = {
    position: [507,183],
    dimensions: [30,30],
    sprite: [
    {
        x: 30,
        y: 330,
        width: 30,
        height: 30
    }]
}

// First enemy move variables
let firstEnemyCount = 0;
let firstEnemyCountMax = 13;

// First enemy movement
function firstEnemyMove()
{
    if(firstEnemyCount == firstEnemyCountMax)
    {
        firstEnemy.position = [507,183];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(14,5)] = 7;
        map[toIndex(14,6)] = 2;
        firstEnemyCount = 0;
        drawGame();
    }
    else if(firstEnemyCount == 0)
    {
        firstEnemy.position = [507,183];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(14,5)] = 7;
        map[toIndex(14,6)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 1)
    {
        firstEnemy.position = [543,183];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(15,5)] = 7;
        map[toIndex(14,5)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 2)
    {
        firstEnemy.position = [579,183];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(16,5)] = 7;
        map[toIndex(15,5)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 3)
    {
        firstEnemy.position = [615,183];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(17,5)] = 7;
        map[toIndex(16,5)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 4)
    {
        firstEnemy.position = [615,183];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 5)
    {
        firstEnemy.position = [615,219];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,6)] = 7;
        map[toIndex(17,5)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount  == 6)
    {
        firstEnemy.position = [615,255];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,7)] = 7;
        map[toIndex(17,6)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 7)
    {
        firstEnemy.position = [615,255];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 8)
    {
        firstEnemy.position = [579,255];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(16,7)] = 7;
        map[toIndex(17,7)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 9)
    {
        firstEnemy.position = [543,255];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(15,7)] = 7;
        map[toIndex(16,7)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 10)
    {
        firstEnemy.position = [507,255];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(14,7)] = 7;
        map[toIndex(15,7)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 11)
    {
        firstEnemy.position = [507,255];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        firstEnemyCount++;
        drawGame();
    }
    else if(firstEnemyCount == 12)
    {
        firstEnemy.position = [507,219];
        firstEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(14,6)] = 7;
        map[toIndex(14,7)] = 2;
        firstEnemyCount++;
        drawGame();
    }
    
    // Player dies when first enemy is moving into player
    if(firstEnemy.position[0] == player.position[0] && firstEnemy.position[1] == player.position[1])
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });
        
        // Message if player dies to a zombie
        message.innerHTML = "You were eaten by a zombie!" + "<br>" + "<a href='game.php'>Click here to play again</a>";
        
        // Restarts the score
        score = 0;
    }
}

// Second Enemy settings
let secondEnemy = {
    position: [435,471],
    dimensions: [30,30],
    sprite: [
    {
        x: 300,
        y: 330,
        width: 30,
        height: 30
    }]
}

// Second enemy move variables
let secondEnemyCount = 0;
let secondEnemyCountMax = 11;

// Second enemy movement
function secondEnemyMove()
{
    if(secondEnemyCount == secondEnemyCountMax)
    {
        secondEnemy.position = [435,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        secondEnemyCount = 0;
        drawGame();
    }
    else if(secondEnemyCount == 0)
    {
        secondEnemy.position = [435,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(12,13)] = 7;
        map[toIndex(13,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 1)
    {
        secondEnemy.position = [471,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(13,13)] = 7;
        map[toIndex(12,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 2)
    {
        secondEnemy.position = [507,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(14,13)] = 7;
        map[toIndex(13,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 3)
    {
        secondEnemy.position = [543,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(15,13)] = 7;
        map[toIndex(14,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 4)
    {
        secondEnemy.position = [579,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(16,13)] = 7;
        map[toIndex(15,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 5)
    {
        secondEnemy.position = [579,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 6)
    {
        secondEnemy.position = [579,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 7)
    {
        secondEnemy.position = [543,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        secondEnemyCount++;
        map[toIndex(15,13)] = 7;
        map[toIndex(16,13)] = 2;
        drawGame();
    }
    else if(secondEnemyCount == 8)
    {
        secondEnemy.position = [507,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(14,13)] = 7;
        map[toIndex(15,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 9)
    {
        secondEnemy.position = [471,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(13,13)] = 7;
        map[toIndex(14,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }
    else if(secondEnemyCount == 10)
    {
        secondEnemy.position = [435,471];
        secondEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(12,13)] = 7;
        map[toIndex(13,13)] = 2;
        secondEnemyCount++;
        drawGame();
    }

    // Player dies when second enemy is moving into player
    if(secondEnemy.position[0] == player.position[0] && secondEnemy.position[1] == player.position[1])
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });
        
        // Message if player dies to a zombie
        message.innerHTML = "You were eaten by a zombie!" + "<br>" + "<a href='game.php'>Click here to play again</a>";
        
        // Restarts the score
        score = 0;   
    }
}

// Third Enemy settings
let thirdEnemy = {
    position: [579,543],
    dimensions: [30,30],
    sprite: [
    {
        x: 30,
        y: 240,
        width: 30,
        height: 30
    }]
}

// Third enemy move variables
let thirdEnemyCount = 0;
let thirdEnemyCountMax = 11;

// Third enemy movement
function thirdEnemyMove()
{
    if(thirdEnemyCount == thirdEnemyCountMax)
    {
        thirdEnemy.position = [579,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(16,15)] = 7;
        map[toIndex(15,15)] = 2;
        thirdEnemyCount = 0;
        drawGame();
    }
    else if(thirdEnemyCount == 0)
    {
        thirdEnemy.position = [579,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(16,15)] = 7;
        map[toIndex(15,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 1)
    {
        thirdEnemy.position = [543,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(15,15)] = 7;
        map[toIndex(16,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 2)
    {
        thirdEnemy.position = [507,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(14,15)] = 7;
        map[toIndex(15,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 3)
    {
        thirdEnemy.position = [471,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(13,15)] = 7;
        map[toIndex(14,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 4)
    {
        thirdEnemy.position = [435,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(12,15)] = 7;
        map[toIndex(13,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 5)
    {
        thirdEnemy.position = [435,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 6)
    {
        thirdEnemy.position = [435,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 7)
    {
        thirdEnemy.position = [471,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(13,15)] = 7;
        map[toIndex(12,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 8)
    {
        thirdEnemy.position = [507,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(14,15)] = 7;
        map[toIndex(13,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 9)
    {
        thirdEnemy.position = [543,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(15,15)] = 7;
        map[toIndex(14,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }
    else if(thirdEnemyCount == 10)
    {
        thirdEnemy.position = [579,543];
        thirdEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(16,15)] = 7;
        map[toIndex(15,15)] = 2;
        thirdEnemyCount++;
        drawGame();
    }

    // Player dies when third enemy is moving into player
    if(thirdEnemy.position[0] == player.position[0] && thirdEnemy.position[1] == player.position[1])
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });
        
        // Message if player dies to a zombie
        message.innerHTML = "You were eaten by a zombie!" + "<br>" + "<a href='game.php'>Click here to play again</a>";
        
        // Restarts the score
        score = 0;   
    }
}

// Fourth Enemy settings
let fourthEnemy = {
    position: [399,399],
    dimensions: [30,30],
    sprite: [
    {
        x: 30,
        y: 270,
        width: 30,
        height: 30
    }]
}

// Fourth enemy move variables
let fourthEnemyCount = 0;
let fourthEnemyCountMax = 27;

// Fourth enemy movement
function fourthEnemyMove()
{
    if(fourthEnemyCount == fourthEnemyCountMax)
    {
        fourthEnemy.position = [399,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(11,11)] = 7;
        map[toIndex(11,12)] = 2;
        fourthEnemyCount = 0;
        drawGame();
    }
    else if(fourthEnemyCount == 0)
    {
        fourthEnemy.position = [399,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(11,11)] = 7;
        map[toIndex(11,12)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 1)
    {
        fourthEnemy.position = [435,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(12,11)] = 7;
        map[toIndex(11,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 2)
    {
        fourthEnemy.position = [471,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(13,11)] = 7;
        map[toIndex(12,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 3)
    {
        fourthEnemy.position = [507,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(14,11)] = 7;
        map[toIndex(13,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 4)
    {
        fourthEnemy.position = [543,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(15,11)] = 7;
        map[toIndex(14,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 5)
    {
        fourthEnemy.position = [579,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(16,11)] = 7;
        map[toIndex(15,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 6)
    {
        fourthEnemy.position = [615,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 270,
            width: 30,
            height: 30
        }];
        map[toIndex(17,11)] = 7;
        map[toIndex(16,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 7)
    {
        fourthEnemy.position = [615,399];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height:30
        }];
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 8)
    {
        fourthEnemy.position = [615,435];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,12)] = 7;
        map[toIndex(17,11)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 9)
    {
        fourthEnemy.position = [615,471];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,13)] = 7;
        map[toIndex(17,12)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 10)
    {
        fourthEnemy.position = [615,507];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,14)] = 7;
        map[toIndex(17,13)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 11)
    {
        fourthEnemy.position = [615,543];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,15)] = 7;
        map[toIndex(17,14)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 12)
    {
        fourthEnemy.position = [615,579];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,16)] = 7;
        map[toIndex(17,15)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 13)
    {
        fourthEnemy.position = [615,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 330,
            width: 30,
            height: 30
        }];
        map[toIndex(17,17)] = 7;
        map[toIndex(17,16)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 14)
    {
        fourthEnemy.position = [615,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 15)
    {
        fourthEnemy.position = [579,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(16,17)] = 7;
        map[toIndex(17,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 16)
    {
        fourthEnemy.position = [543,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(15,17)] = 7;
        map[toIndex(16,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 17)
    {
        fourthEnemy.position = [507,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(14,17)] = 7;
        map[toIndex(15,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 18)
    {
        fourthEnemy.position = [471,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(13,17)] = 7;
        map[toIndex(14,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 19)
    {
        fourthEnemy.position = [435,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(12,17)] = 7;
        map[toIndex(13,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 20)
    {
        fourthEnemy.position = [399,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 240,
            width: 30,
            height: 30
        }];
        map[toIndex(11,17)] = 7;
        map[toIndex(12,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 21)
    {
        fourthEnemy.position = [399,615];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 22)
    {
        fourthEnemy.position = [399,579];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(11,16)] = 7;
        map[toIndex(11,17)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 23)
    {
        fourthEnemy.position = [399,543];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(11,15)] = 7;
        map[toIndex(11,16)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 24)
    {
        fourthEnemy.position = [399,507];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(11,14)] = 7;
        map[toIndex(11,15)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 25)
    {
        fourthEnemy.position = [399,471];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(11,13)] = 7;
        map[toIndex(11,14)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    else if(fourthEnemyCount == 26)
    {
        fourthEnemy.position = [399,435];
        fourthEnemy.sprite = [
        {
            x: 30,
            y: 300,
            width: 30,
            height: 30
        }];
        map[toIndex(11,12)] = 7;
        map[toIndex(11,13)] = 2;
        fourthEnemyCount++;
        drawGame();
    }
    // Player dies when fourth enemy is moving into player
    if(fourthEnemy.position[0] == player.position[0] && fourthEnemy.position[1] == player.position[1])
    {
        // Player can't move anymore
        window.addEventListener("keydown", function(e)
        {
            if(e.keyCode >= 37 && e.keyCode <= 40)
            {
                keysDown[e.keyCode] = false;
            }
        });
        
        // Message if player dies to a zombie
        message.innerHTML = "You were eaten by a zombie!" +  "<br>" + "<a href='game.php'>Click here to play again</a>";
        
        // Restarts the score
        score = 0;
    }
}

// Enemy timer
setInterval(()=>{
    firstEnemyMove();;
    secondEnemyMove();
    thirdEnemyMove();
    fourthEnemyMove();
},1000)

// Draw game
function drawGame()
{
    // Sets viewport center to player center
    viewport.update(player.position[0] + (player.dimensions[0]/2), player.position[1] + (player.dimensions[1]/2));
    
    //Styling visible empty canvas
    ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

    // Variable for current time
    let currentTime = Date.now();

    if(!player.processMovement(currentTime))
    {
        if(keysDown[38] && player.canMoveUp())
        {
            player.moveUp(currentTime);
        }
        else if(keysDown[40] && player.canMoveDown())
        {
            player.moveDown(currentTime);
        }
        else if(keysDown[37] && player.canMoveLeft())
        {
            player.moveLeft(currentTime);
        }
        else if(keysDown[39] && player.canMoveRight())
        {
            player.moveRight(currentTime);
        }
    }

    // Drawing tiles
    for(let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
            // Finds matching tile type
            let tile = tileTypes[map[toIndex(x,y)]];
            
            // Draws tile graphics
			ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].width, tile.sprite[0].height, viewport.offset[0] + (x * tileWidth), viewport.offset[1] + (y * tileHeight), tileWidth, tileHeight);
		}
	}

    // Finds player graphics
    let playerSprite = player.sprite;
    
    // Draws player graphics
	ctx.drawImage(tileset, playerSprite[0].x, playerSprite[0].y, playerSprite[0].width, playerSprite[0].height, viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1], player.dimensions[0], player.dimensions[1]);

    // Finds first enemy graphics
    let firstEnemySprite = firstEnemy.sprite;

    // Draws first enemy graphics
	ctx.drawImage(tileset, firstEnemySprite[0].x, firstEnemySprite[0].y, firstEnemySprite[0].width, firstEnemySprite[0].height, viewport.offset[0] + firstEnemy.position[0], viewport.offset[1] + firstEnemy.position[1], firstEnemy.dimensions[0], firstEnemy.dimensions[1]);

    // Finds second enemy graphics
    let secondEnemySprite = secondEnemy.sprite;
    
    // Draws second enemy graphics
    ctx.drawImage(tileset, secondEnemySprite[0].x, secondEnemySprite[0].y, secondEnemySprite[0].width, secondEnemySprite[0].height, viewport.offset[0] + secondEnemy.position[0], viewport.offset[1] + secondEnemy.position[1], secondEnemy.dimensions[0], secondEnemy.dimensions[1]);
    
    // Finds third enemy graphics
    let thirdEnemysprite = thirdEnemy.sprite;
    
    // Draws third enemy graphics
    ctx.drawImage(tileset, thirdEnemysprite[0].x, thirdEnemysprite[0].y, thirdEnemysprite[0].width, thirdEnemysprite[0].height, viewport.offset[0] + thirdEnemy.position[0], viewport.offset[1] + thirdEnemy.position[1], thirdEnemy.dimensions[0], thirdEnemy.dimensions[1]);
    
    // Finds fourth enemy graphics
    let fourthEnemySprite = fourthEnemy.sprite;
    
    // Draws fourth enemy graphics
    ctx.drawImage(tileset, fourthEnemySprite[0].x, fourthEnemySprite[0].y, fourthEnemySprite[0].width, fourthEnemySprite[0].height, viewport.offset[0] + fourthEnemy.position[0], viewport.offset[1] + fourthEnemy.position[1], fourthEnemy.dimensions[0], fourthEnemy.dimensions[1]);
    
    // Updates the game
    requestAnimationFrame(drawGame);
}