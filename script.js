const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
//////////////////////////////////////////////////////////////////////////////////////////
// Sound effects
//////////////////////////////////////////////////////////////////////////////////////////
const coin_sound = document.createElement('audio');
coin_sound.src = 'coinsplash.wav';
const cannon_hit = document.createElement('audio');
cannon_hit.src = 'cannon_hit.mp3';
const gameover_sound = document.createElement('audio');
gameover_sound.src = 'gameover.mp3';
const cannon_shoot = document.createElement('audio');
cannon_shoot.src = 'cannon_shoot.mp3';
const eating = document.createElement('audio');
eating.src = 'eating.mp3';
const levelup = document.createElement('audio');
levelup.src = 'levelup.mp3';
const set_weapon = document.createElement('audio');
set_weapon.src = 'set_weapon.mp3';
const jet_shoot_sound = document.createElement('audio');
jet_shoot_sound.src = 'jet_shoot_sound.mp3';
const jet_hit_sound = document.createElement('audio');
jet_hit_sound.src = 'jet_hit_sound.mp3';
const evil_laugh = document.createElement('audio');
evil_laugh.src = 'evil_laugh.mp3';
const startscreen_music = document.createElement('audio');
startscreen_music.src = 'startscreen_music.mp3';
const interlevel_sound = document.createElement('audio');
interlevel_sound.src = 'interlevel.mp3';
const background_music = document.createElement('audio');
background_music.src = 'background_music.mp3';
const arrow_shoot_sound = document.createElement('audio');
arrow_shoot_sound.src = 'arrow_shoot_sound.mp3';
const arrow_hit_sound = document.createElement('audio');
arrow_hit_sound.src = 'arrow_hit_sound.mp3';
const game_finish_music = document.createElement('audio');
game_finish_music.src = 'game_finish_music.mp3';
//////////////////////////////////////////////////////////////////////////////////////////
// Sprite Sheets
//////////////////////////////////////////////////////////////////////////////////////////
const skeleton_run = new Image();
skeleton_run.src = 'skeleton_run.png';
const skeleton_walk = new Image();
skeleton_walk.src = 'skeleton_walk.png';
const fire_ball = new Image();
fire_ball.src = 'fire_ball.png';
const skeleton_throw_bone = new Image();
skeleton_throw_bone.src = 'skeleton_throw_bone.png';
const background = new Image();
background.src = 'background.png';
const black_spider_walk = new Image();
black_spider_walk.src = 'black_spider_walk.png';
const black_spider_bite = new Image();
black_spider_bite.src = 'black_spider_bite.png';
const pause_img = new Image();
pause_img.src = 'pause.png';
const stat_bar = new Image();
stat_bar.src = 'stat_bar.png';
const red_cannon = new Image();
red_cannon.src = 'red_cannon.png';
const jet_man = new Image();
jet_man.src = 'jet_man.png';
const jet_man_bullet = new Image();
jet_man_bullet.src = 'jet_man_bullet.png';
const startscreen_background = new Image();
startscreen_background.src = 'startscreen_background.png';
const skeleton_laugh = new Image();
skeleton_laugh.src = 'skeleton_laugh.png';
const startscreen_dialog = new Image();
startscreen_dialog.src = 'startscreen_dialog.png';
const connector = new Image();
connector.src = 'connector.png';
const letter = new Image();
letter.src = 'letter.png';
const fan = new Image();
fan.src = 'fan.png';
const pumpkin = new Image();
pumpkin.src = 'pumpkin.png';
const pause_pressed = new Image();
pause_pressed.src = 'pause_pressed.png';
const choose_defender_background = new Image();
choose_defender_background.src = 'choose_defender_background.png';
const choose_defender_background_purple = new Image();
choose_defender_background_purple.src = 'choose_defender_background_purple.png';
const fire = new Image();
fire.src = 'fire.png';
const archer = new Image();
archer.src = 'archer.png';
const arrow = new Image();
arrow.src = 'arrow.png';
const game_finish_background = new Image();
game_finish_background.src = 'game_finish_background.png';
const pumpkinman_move = new Image();
pumpkinman_move.src = 'pumpkinman_move.png';
const pumpkinman_attack = new Image();
pumpkinman_attack.src = 'pumpkinman_attack.png';
const ghost_move = new Image();
ghost_move.src = 'ghost_move.png';
const ghost_attack = new Image();
ghost_attack.src = 'ghost_attack.png';
const ghost_rise_up = new Image();
ghost_rise_up.src = 'ghost_rise_up.png';
const start_button = new Image();
start_button.src = 'start_button.png';
const start_button_pressed = new Image();
start_button_pressed.src = 'start_button_pressed.png';
//////////////////////////////////////////////////////////////////////////////////////////
// Global Variables
//////////////////////////////////////////////////////////////////////////////////////////
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];
const defenders = [];
const enemies = [];
const enemiesPositions = [];
const projectiles = [];
const resources = [];
const floatingMessages = []
var money = 300;
var score = 0;
let frame = 0;
const winningScore = 5;
let level = 3;
let defenderSlected = "";
let gameover = false;
let pause = false;
let startscreen = true;
let interLevel = false;
//////////////////////////////////////////////////////////////////////////////////////////
//mouse
//////////////////////////////////////////////////////////////////////////////////////////
const mouse = {
    x:10,
    y:10,
    width: 0.1,
    height: 0.1,
}
let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove',function(e){
    mouse.x =  e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
})
canvas.addEventListener('mouseleave',function(){
    mouse.x = undefined;
    mouse.y = undefined;
})
//////////////////////////////////////////////////////////////////////////////////////////
// Floating Messages
//////////////////////////////////////////////////////////////////////////////////////////
class FloatingMessages{
    constructor(value, x, y, size,color){
        this.value = value;
        this.x = x;
        this.y = y;
        this.size = size;
        this.lifeSpan = 0;
        this.color = color;
        this.opacity = 1;
    }
    update(){
        this.y -= 0.3;
        this.lifeSpan += 1;
        if(this.opacity > 0.01) this.opacity -= 0.01;
    }
    draw(){
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = 'bold ' + this.size + 'px Georgia';
        ctx.fillText(this.value, this.x, this.y);
        ctx.globalAlpha = 1;
    }
}
function handleFloatingMessages(){
    for(let i = 0;i < floatingMessages.length;i++){
        floatingMessages[i].update();
        floatingMessages[i].draw();
        if(floatingMessages[i].lifeSpan >= 50){
            floatingMessages.splice(i, 1);
            i--;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////
// Game board
//////////////////////////////////////////////////////////////////////////////////////////
const controlsBar = {
    width: canvas.width,
    height: cellSize,
}
class Cell{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw(){
        if(mouse.x && mouse.y && collision(this, mouse)){
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x,this.y,this.width,this.height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            ctx.fillRect(this.x, this.y,this.width,this.height)
        }
    }
}
function createGrid(){
    for(let y = cellSize;y < canvas.height;y += cellSize){
        for(let x = 0; x < canvas.width;x+=cellSize){
            gameGrid.push(new Cell(x,y));
        }
    }
}
createGrid();
function handleGameGrid(){
    for(let i = 0;i < gameGrid.length;i++){
        gameGrid[i].draw();
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Projectile
//////////////////////////////////////////////////////////////////////////////////////////

class Projectile{
    constructor(x,y,width, height, spriteWidth,spriteHeight, 
        maxFrame,spriteSheet, frameRate, speed,power, sizeFactor, Yoffset, hit_sound){
        this.x = x,
        this.y = y,
        this.frame = 0;
        this.width = width;
        this.height = height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.maxFrame = maxFrame;
        this.spriteSheet = spriteSheet;
        this.frameRate = frameRate;
        this.sizeFactor = sizeFactor;
        this.speed = speed;
        this.power = power;
        this.Yoffset = Yoffset;
        this.hit_sound = hit_sound;
    }
    update(){
        this.x += this.speed;
        if(frame % this.frameRate === 0){
            this.frame++;
            if(this.frame >= this.maxFrame) this.frame = 0;
        }
    }
    draw(){
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(this.x,this.y,this.width, this.height);
        ctx.drawImage(this.spriteSheet, this.frame * this.spriteWidth, 0
            , this.spriteWidth, this.spriteHeight, this.x, this.y-this.Yoffset,this.spriteWidth/this.sizeFactor, 
            this.spriteHeight/this.sizeFactor);
    }
}

function handleProjectiles(){
    for(let i = 0;i < projectiles.length;i++){
        projectiles[i].update();
        projectiles[i].draw();

        for(let j = 0;j < enemies.length;j++){
            if(enemies[j] && projectiles[i] && collision(projectiles[i], enemies[j])){
                projectiles[i].hit_sound.play();
                enemies[j].health -= projectiles[i].power
                projectiles.splice(i,1);
                i--;
            }
        }
        if (projectiles[i] && projectiles[i].x > canvas.width - cellSize){
            projectiles.splice(i,1);
            i--;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// defender
//////////////////////////////////////////////////////////////////////////////////////////
class Defender{
    constructor(x,y,Xoffset,Yoffset, health,shoot_sound, spriteSheet,frameRate,idleMaxFrame, 
        shootMinFrame, shootMaxFrame, spriteWidth, spriteHeight,sizeFactor, 
        projectileSpriteWidth,projectileSpriteHeight,projectileWidth,
        projectileHeight, projectileSpeed, projectilePower, projectileMaxFrame, projectileSpriteSheet,
        projectileSizeFactor, projectileFrameRate,projectileYoffset,projectileHit_sound, isFan, isFire){
        this.x = x,
        this.y = y,
        this.frame = 0;
        this.XOffset = Xoffset;
        this.YOffset = Yoffset;
        this.shoot_sound = shoot_sound;
        this.frameRate = frameRate;
        this.spriteSheet = spriteSheet;
        this.minFrame = 0;
        this.maxFrame = this.idleMaxFrame;
        this.idleMaxFrame = idleMaxFrame;
        this.shootMinFrame = shootMinFrame;
        this.shootMaxFrame = shootMaxFrame;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.sizeFactor = sizeFactor;
        this.width = cellSize - cellGap*2;
        this.height = cellSize - cellGap*2;
        this.shooting = false;
        this.health = health;
        this.maxHealth = health;
        this.projectile = [];
        this.timer = 0;
        this.isFan = isFan;
        this.isFire = isFire;
        this.shootNow = false;
        this.projectile = {
            spriteWidth: projectileSpriteWidth,
            spriteHeight: projectileSpriteHeight,
            width: projectileWidth,
            height: projectileHeight,
            speed: projectileSpeed,
            power: projectilePower,
            maxFrame: projectileMaxFrame,
            spriteSheet: projectileSpriteSheet,
            sizeFactor: projectileSizeFactor,
            frameRate: projectileFrameRate,
            Yoffset: projectileYoffset,
            hit_sound: projectileHit_sound
        }
    }
    draw(){
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(this.x,this.y,this.width, this.height);
        ctx.drawImage(this.spriteSheet, this.frame * this.spriteWidth, 0
            , this.spriteWidth, this.spriteHeight, this.x-this.XOffset, 
            this.y-this.YOffset,this.spriteWidth/this.sizeFactor, 
            this.spriteHeight/this.sizeFactor);
        ctx.fillStyle = 'gold';
        ctx.fillRect(this.x+20, this.y, 60*(this.health/this.maxHealth), 7);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x+60*(this.health/this.maxHealth)+20, this.y, 60-60*(this.health/this.maxHealth), 7);
    }
    update(){
        if(this.shooting ){
            this.minFrame = this.shootMinFrame;
            this.maxFrame = this.shootMaxFrame;
            this.timer++;
            if(!this.isFan && this.shootNow == true && !this.isFire){
                this.shoot_sound.play();
                projectiles.push(new Projectile(this.x + cellSize, this.y+cellSize/2-this.projectile.height/2,
                this.projectile.width,this.projectile.height,this.projectile.spriteWidth,this.projectile.spriteHeight,
                this.projectile.maxFrame, this.projectile.spriteSheet, this.projectile.frameRate, this.projectile.speed,
                this.projectile.power,this.projectile.sizeFactor, this.projectile.Yoffset, this.projectile.hit_sound));
                this.shootNow = false;
            }
        }else{
            this.maxFrame = this.idleMaxFrame;
            this.minFrame = 0;
            this.timer = 0;
        }
        if(frame % this.frameRate === 0){
            this.frame++;
            if(this.frame >= this.maxFrame) {
                this.frame = this.minFrame;
                this.shootNow = true;
            }
        }
    }
}

canvas.addEventListener('click', function(){
    const gridPositionX = mouse.x - (mouse.x % cellSize) + cellGap;
    const gridPositionY = mouse.y - (mouse.y % cellSize) + cellGap;
    if(gridPositionY < cellSize) return;
    for(let  i = 0;i < defenders.length;i++){
        if(defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) return;
    }
    if(defenderSlected=='jet_man'){
        set_weapon.play();
        if(money >= 50){
            defenders.push(new Defender(gridPositionX, gridPositionY,20,0,20,jet_shoot_sound, 
                jet_man, 18,0,0,4,881,639, 6,354,215,50,
                50,2,10,0,jet_man_bullet,8,5, -5, jet_hit_sound,false,false));
                money -= 50;
        }else{
            floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue'));
        }
    }else if(defenderSlected=='fan'){
        set_weapon.play();
        if(money >= 400){
            defenders.push(new Defender(gridPositionX, gridPositionY,-20,0,10,0,fan,5,
                0, 0, 6,1424,1221,15,0,0,0,0,0,0,0,0,0,0,0,0,true,false));
                money -= 400;
        }else{
            floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue'));
        }
    }else if(defenderSlected=='cannon') {
        set_weapon.play();
        if(money >= 300){
            defenders.push(new Defender(gridPositionX, gridPositionY, 10,0,30, cannon_shoot,
                red_cannon,25,0, 0, 6,290,234,
             2.5,675,512,50,50,1,50,5,fire_ball,10,5,5, cannon_hit,false,false));
             money -= 300;
        }else{
            floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue'));
        }
    }
    else if(defenderSlected=='fire'){
        set_weapon.play();
        if(money >= 100){
            defenders.push(new Defender(gridPositionX,gridPositionY,0,0,20,0, fire,
                5,5,0,5,1034,1034,10,0,0,0,0,0,0,0,0,0,0,0,0,false, true))
                money -= 100;
        }else{
            floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue'));
        }
    }else if(defenderSlected=='archer'){
        set_weapon.play();
        if(money >= 100){
            defenders.push(new Defender(gridPositionX,gridPositionY,30,10,20,arrow_shoot_sound,archer,10,23,24,
                29,777,627,6,577,100,50,50,2,10,0,arrow,10,5,-20,arrow_hit_sound,false,false))
                money -= 100;
        }else{
            floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue'));
        }
    }
    else{
        return;
    }
})
function handleDefenders(){
    for(let i = 0;i < defenders.length;i++){
        defenders[i].draw();
        defenders[i].update();
        if(enemiesPositions.indexOf(defenders[i].y) !== -1){
            defenders[i].shooting = true;
        }
        else{
            defenders[i].shooting = false;
        }
        for(let j = 0;j < enemies.length;j++){

            if(defenders[i] && collision(defenders[i], enemies[j])){
                eating.play();
                enemies[j].spriteSheet = enemies[j].attackSpriteSheet;
                enemies[j].maxFrame = enemies[j].attackMaxFrame;
                enemies[j].movement = 0;
                defenders[i].health -= 0.2;
                if(defenders[i].isFire){
                    enemies[j].health -= 0.2;
                }
            }else{
                enemies[j].spriteSheet = enemies[j].tmpSpriteSheet;
                enemies[j].maxFrame = enemies[j].tmpMaxFrameRate;
                enemies[j].movement = enemies[j].speed;
            }
            if(defenders[i] && defenders[i].health <= 0){
                defenders.splice(i,1);
                i--;
                enemies[j].movement = enemies[j].speed;
                enemies[j].spriteSheet = enemies[j].tmpSpriteSheet;
                enemies[j].maxFrame = enemies[j].tmpMaxFrameRate;
            }
        }
    }
}
let jet_back = choose_defender_background;
let fan_back= choose_defender_background;
let cannon_back = choose_defender_background;
let fire_back = choose_defender_background;
let archer_back = choose_defender_background;
canvas.addEventListener('click', function(){
    if(mouse.x > 30 && mouse.x < 140 && mouse.y < 90){
        set_weapon.play();
        defenderSlected = 'jet_man';
        jet_back = choose_defender_background_purple;
        fan_back = choose_defender_background;
        cannon_back = choose_defender_background;
        fire_back = choose_defender_background;
        archer_back = choose_defender_background;
    }else if(mouse.x > 160 && mouse.x < 270 && mouse.y < 90 && level >= 2){
        set_weapon.play();
        defenderSlected = 'fan';
        jet_back = choose_defender_background;
        fan_back = choose_defender_background_purple;
        cannon_back = choose_defender_background;
        fire_back = choose_defender_background;
        archer_back = choose_defender_background;
    }else if(mouse.x > 280 && mouse.x < 380 && mouse.y < 90 && level >= 3){
        set_weapon.play();
        defenderSlected = 'cannon';
        jet_back = choose_defender_background;
        fan_back = choose_defender_background;
        cannon_back = choose_defender_background_purple;
        fire_back = choose_defender_background;
        archer_back = choose_defender_background;
    }else if(mouse.x > 390 && mouse.x < 490 && mouse.y < 90 && level >= 3){
        set_weapon.play();
        defenderSlected = 'fire';
        jet_back = choose_defender_background;
        fan_back = choose_defender_background;
        cannon_back = choose_defender_background;
        fire_back = choose_defender_background_purple;
        archer_back = choose_defender_background;
    }
    else if(mouse.x > 500 && mouse.x < 600 && mouse.y < 90 && level >= 3){
        set_weapon.play();
        defenderSlected = 'archer';
        jet_back = choose_defender_background;
        fan_back = choose_defender_background;
        cannon_back = choose_defender_background;
        fire_back = choose_defender_background;
        archer_back = choose_defender_background_purple;
    }
});
function handleChooseDefender(){
    ctx.drawImage(jet_back,30,5,100,90)
    ctx.drawImage(jet_man, 0,0,881,639, 20,10,881/7, 639/7);
    if(level >= 2){
        ctx.drawImage(fan_back,150,5,100,90)
        ctx.drawImage(fan, 0,0,1424,1221, 175,20,1424/20, 1221/20);
    }
    if(level >= 3){
        ctx.drawImage(cannon_back,270,5,100,90)
        ctx.drawImage(red_cannon, 0,0, 290, 234, 270,10,290/3, 234/3);
    }
    if(level >= 3){
        ctx.drawImage(fire_back,390,5,100,90)
        ctx.drawImage(fire, 0,0, 1034, 1034,405,10,1034/15, 1034/15);
    }
    if(level >= 3){
        ctx.drawImage(archer_back,500,5,100,90)
        ctx.drawImage(archer, 0,0, 777, 627, 485,5,777/7, 627/7);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////
// Enemy
//////////////////////////////////////////////////////////////////////////////////////////
class Enemy{
    constructor(vertialPosition,spriteWidth,spriteHeight, 
        maxFrame,spriteSheet, frameRate, sizeFactor, speed, health,
        attackSpriteSheet, attackMaxFrame, Yoffset, Xoffset)
    {
        this.x = canvas.width,
        this.y = vertialPosition,
        this.width = cellSize - cellGap * 2;
        this.height = cellSize - cellGap * 2;
        this.speed = speed;
        this.normalSpeed = speed;
        this.fanspeed = speed/2;
        this.movement = this.speed;
        this.health = health;
        this.maxHealth = this.health;
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.frame = 0;
        this.maxFrame = maxFrame;
        this.spriteSheet = spriteSheet;
        this.frameRate = frameRate;
        this.sizeFactor = sizeFactor;
        this.attackSpriteSheet = attackSpriteSheet;
        this.attackMaxFrame = attackMaxFrame;
        this.tmpSpriteSheet = spriteSheet;
        this.tmpMaxFrameRate = maxFrame;
        this.Yoffset = Yoffset;
        this.Xoffset = Xoffset;
    }
    update(){
        this.x -= this.movement;
        if(frame % this.frameRate === 0){
            this.frame++;
            if(this.frame >= this.maxFrame){
                this.frame = 0;
            } 
        }
    }
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width, this.height);
        ctx.drawImage(this.spriteSheet, this.frame * this.spriteWidth, 0
            , this.spriteWidth, this.spriteHeight, this.x-this.Xoffset, this.y-this.Yoffset,this.spriteWidth/this.sizeFactor, 
            this.spriteHeight/this.sizeFactor);
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x+20, this.y, 60*(this.health/this.maxHealth), 7);
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x+20+60*(this.health/this.maxHealth), this.y, 60-60*(this.health/this.maxHealth), 7);
    }
}
function handleEnemy(){
    
    for(let i = 0;i < enemies.length;i++){
        enemies[i].update();
        enemies[i].draw();
        if  (enemies[i].x < -enemies[i].width){
            gameover = true;
            gameover_sound.play();
        }
        if(enemies[i].health <= 0){
            let gainedResources = enemies[i].maxHealth / 2; 
            floatingMessages.push(new FloatingMessages('$+' + gainedResources,enemies[i].x,enemies[i].y,20,'gold'));
            money += gainedResources;
            score += gainedResources;
            const findthisIndex = enemiesPositions.indexOf(enemies[i].y);
            enemies.splice(i,1);
            enemiesPositions.splice(findthisIndex,1);
            i--;
        }
        let affectedByFan = false;
        for(let j = 0;j < defenders.length;j++){
            if(defenders[j] && enemies[i] && defenders[j].isFan && defenders[j].y == enemies[i].y){
                    affectedByFan = true;

            }
        }
        if(affectedByFan && enemies[i]) {
            enemies[i].speed = enemies[i].fanspeed;
        }
        else if(enemies[i]){
            enemies[i].speed = enemies[i].normalSpeed;
        }
    }
    if(level===1){
        addEnemy(200, 406, 572, 15, skeleton_walk, 5, 5, 0.2, 50,skeleton_throw_bone,9,5, -20);
    }else if(level === 2){
        addEnemy(200, 406, 572, 15, skeleton_walk, 5, 5, 0.2, 50,skeleton_throw_bone,9,5, -20);
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
    }else if(level == 3){
        addEnemy(500, 820, 500, 7, black_spider_walk, 5, 6, 0.5, 50, black_spider_bite, 6, 0, 20);
    }else if(level == 4){
        addEnemy(500, 820, 500, 7, black_spider_walk, 5, 6, 0.5, 50, black_spider_bite, 6, 0, 20);
        addEnemy(200, 406, 572, 15, skeleton_walk, 5, 5, 0.2, 50,skeleton_throw_bone,9,5, -20);
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
    }else if(level == 5){
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
        addEnemy(400, 703, 851, 7, pumpkinman_move, 5, 7, 0.5, 50, pumpkinman_attack, 23, 25, 0);
    }else if(level == 6){
        addEnemy(500, 820, 500, 7, black_spider_walk, 5, 6, 0.5, 50, black_spider_bite, 6, 0, 20);
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
        addEnemy(400, 703, 851, 7, pumpkinman_move, 5, 7, 0.5, 50, pumpkinman_attack, 23, 25, 0);
    }else if(level == 7){
        addEnemy(300,768,911,11,ghost_move,5,7,0.5,50,ghost_attack,9,30,10);
    }else if(level == 8){
        addEnemy(500, 820, 500, 7, black_spider_walk, 5, 6, 0.5, 50, black_spider_bite, 6, 0, 20);
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
        addEnemy(300,768,911,11,ghost_move,5,7,0.5,50,ghost_attack,9,30,10);
    }else if(level == 9){
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
        addEnemy(500, 820, 500, 7, black_spider_walk, 5, 6, 0.5, 50, black_spider_bite, 6, 0, 20);
        addEnemy(400, 703, 851, 7, pumpkinman_move, 5, 7, 0.5, 50, pumpkinman_attack, 23, 25, 0);
        addEnemy(300,768,911,11,ghost_move,5,7,0.5,50,ghost_attack,9,30,10);
    }else if(level == 10){
        addEnemy(800, 406, 572, 15, skeleton_run, 5, 5, 0.5, 50, skeleton_throw_bone,9, 5, -20);
        addEnemy(500, 820, 500, 7, black_spider_walk, 5, 6, 0.5, 50, black_spider_bite, 6, 0, 20);
        addEnemy(400, 703, 851, 7, pumpkinman_move, 5, 7, 0.5, 50, pumpkinman_attack, 23, 25, 0);
        addEnemy(300,768,911,11,ghost_move,5,7,0.5,50,ghost_attack,9,30,10);
    }
}
function addEnemy(rate, spriteWidth, spriteHeight, maxFrame, spriteSheet, frameRate, 
    sizeFactor, speed, health, attackSpriteSheet, attackMaxFrame, Yoffset, Xoffset){
    if( frame % rate === 0 && score <= winningScore){
        let vertialPosition = Math.floor(Math.random()*5+1) * cellSize + cellGap;
        enemies.push(new Enemy(vertialPosition, spriteWidth, spriteHeight, maxFrame, 
            spriteSheet, frameRate, sizeFactor, speed, health, attackSpriteSheet, attackMaxFrame,Yoffset,Xoffset));
        enemiesPositions.push(vertialPosition);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Resource
//////////////////////////////////////////////////////////////////////////////////////////
class Resources {
    constructor(spriteHeight, spriteWidth, maxFrame, spriteSheet, sound, frameRate, 
        sizeFactor,amount, Xoff, Yoff){
        this.x = (Math.floor(Math.random()*9))*cellSize+20;
        this.y = (Math.floor(Math.random()*5)+1)*cellSize+20;
        this.width = cellSize*0.6;
        this.height = cellSize*0.6;
        this.amount = amount;
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.frame = 0;
        this.maxFrame = maxFrame;
        this.spriteSheet = spriteSheet;
        this.sound = sound;
        this.frameRate = frameRate;
        this.sizeFactor = sizeFactor;
        this.Yoff = Yoff;
        this.Xoff = Xoff;
    }
    update(){
        if(frame % this.frameRate === 0){
            this.frame++;
            if(this.frame >= this.maxFrame) this.frame = 0;
        }
    }
    draw(){
        //ctx.fillStyle = 'purple';
        //ctx.fillRect(this.x,this.y,this.width, this.height);
        ctx.drawImage(this.spriteSheet, this.frame * this.spriteWidth, 0
            , this.spriteWidth, this.spriteHeight, this.x-this.Xoff, this.y-this.Yoff,this.spriteWidth/this.sizeFactor, 
            this.spriteHeight/this.sizeFactor);
    }
}
function handleResources(){
    if (frame % 500 === 0 && score < winningScore){
        resources.push(new Resources(522,514,0,pumpkin, coin_sound, 50,7, 100,10,10));
    }
    for(let i = 0;i < resources.length;i++){
        resources[i].update()
        resources[i].draw()
        if(resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
            resources[i].sound.play();
            floatingMessages.push(new FloatingMessages('$+' + resources[i].amount,mouse.x,mouse.y,25,'gold'));
            money += resources[i].amount;
            resources.splice(i,1);
            i--;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// utilities
//////////////////////////////////////////////////////////////////////////////////////////
function handleGameStatus(){
    ctx.drawImage(choose_defender_background_purple, canvas.width-200,canvas.height-50,200, 50);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Cursive';
    ctx.fillText("$:" + money, 720, 580);
    ctx.fillText("Level:" + level, 800, 580);
    if(score >= winningScore && enemies.length === 0){
        interLevel = true;
        interlevel_sound.play();
    }
}
canvas.addEventListener('click', function(){
    if(mouse.x > 800 && mouse.x < 870 && mouse.y < 80 && pause == false){
        pause = true;
    }else if(mouse.x > 800 && mouse.x < 870 && mouse.y < 80 && pause == true){
        pause = false;
    }
})
//////////////////////////////////////////////////////////////////////////////////////////
// Start Screen
//////////////////////////////////////////////////////////////////////////////////////////
let ghost_rise = {
    frame: 20,
    maxFrame: 24,
}
let mousedown = false;

addEventListener('mousedown',function(e){
    if(mouse.x < 342 && mouse.x > 150 && mouse.y > 100 && mouse.y < 196){
        console.log('sdsd')
        mousedown = true;
    }
})
addEventListener('mouseup',function(e){
    mousedown = false;
})
addEventListener('keypress',function(e){
    if(e.code == "Space" && startscreen == true){
        startscreen = false;
        startscreen_music.pause();
    }else if(e.key == "d" && startscreen == true){
        frame = 800;
    }
})
function handleStartScreen(){
    if(frame < 800){
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 20px Cursive';
        ctx.fillText("    Very very far away, there is a villige in the forest called Modvo ", 100, 160); 
        ctx.fillText("There is a curse on this villiage, that every 10 years on Holloween", 100, 190); 
        ctx.fillText("The evil creatures will arise from the dark of the woods and march", 100, 220); 
        ctx.fillText("to the villiage. And they have just arrived. Accorind to the prophecy.", 100, 250); 
        ctx.fillText("The will a young to save the villiage and the people...", 100, 280); 
        ctx.fillText("Are you the one we are looking for?", 100, 360); 
        ctx.fillText("Press d to skip", 350, 20); 
    }
    else{
        startscreen_music.play();
        ctx.drawImage(startscreen_background, 0,0,canvas.width,canvas.height)
        if(frame > 900){
            ctx.drawImage(startscreen_dialog, 445,275,150,105)
            ctx.drawImage(connector, 590,300,30,20)
            ctx.fillStyle = 'black';
            ctx.font = 'bold 15px Cursive';
            ctx.fillText("We assembled ", 460, 300); 
            ctx.fillText("the evil army", 460, 320); 
            ctx.fillText(", we'll destroy", 460, 340); 
            ctx.fillText("your villiage.", 460, 360); 
        }
        let startButtonImg = (mousedown) ? start_button_pressed : start_button;
        ctx.drawImage(startButtonImg, 150,100,192,96)
        ctx.fillStyle = 'black';
        ctx.font = 'bold 45px Cursive';
        ctx.fillText("START", 170, 160); 
        ctx.drawImage(startButtonImg, 150,220,192,96)
        ctx.fillStyle = 'white';
        ctx.font = 'bold 15px Cursive';
        ctx.fillText("Press SPACE to start game", 330, 20); 
        if(frame % 20 === 0){
            if(ghost_rise.frame == 12){
                evil_laugh.play();
            }
            ghost_rise.frame++;
            if(ghost_rise.frame >= ghost_rise.maxFrame) {
                ghost_rise.frame = 0;
                ghost_rise.maxFrame = 19;
            }
        }
        ctx.drawImage(ghost_rise_up, ghost_rise.frame*768, 0, 768,911,canvas.width-350,100,768/2,911/2);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Restart
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('keypress',function(e){
    if(e.code == "Space" && gameover == true){
        gameover = false;
        level = 1;
        money = 300;
        score = 0;
        enemies.splice(0,enemies.length);
        projectiles.splice(0,projectiles.length);
        defenders.splice(0,defenders.length);
        resources.splice(0, resources.length);
    }
})
function handleRestart(){
    ctx.drawImage(letter,canvas.width/2-150,160,310,240);
    ctx.fillStyle = 'black'
    ctx.font = 'bold 20px Cursive';
    ctx.fillText("AHAHAH, we had a great ", 330, 210); 
    ctx.fillText("meal. Be ready, we will", 330, 240); 
    ctx.fillText("come back soon...", 330, 270); 
    ctx.fillText("- Your Dear Skeleton", 330, 360); 
    ctx.fillStyle = 'white';
    ctx.fillText("Press SPACE to restart game", 310, 20); 
}
//////////////////////////////////////////////////////////////////////////////////////////
// Interlevel
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('keypress',function(e){
    if(e.code == "Space" && interLevel == true && level != 10){
        floatingMessages.push(new FloatingMessages('LEVEL UP',720,550,30,'gold'));
        interLevel = false;
        score = 0;
        numberResources = 300;
        defenders.splice(0,defenders.length);
        projectiles.splice(0,projectiles.length);
        levelup.play();
        level++;
    }
})
function handleInterLevel(level){
    if(level==1){
        ctx.drawImage(letter,canvas.width/2-150,160,310,240);
        ctx.fillStyle = 'black'
        ctx.font = 'bold 20px Cursive';
        ctx.fillText("You are pretty good ", 330, 210); 
        ctx.fillText("But we are not gonna", 330, 240); 
        ctx.fillText("give up!", 330, 270); 
        ctx.fillText("- Your Dear Skeleton", 330, 360); 
        ctx.fillStyle = 'white';
        ctx.fillText("Press SPACE to CONTINUE", 310, 20); 
    }else if(level == 2){
        ctx.drawImage(letter,canvas.width/2-150,160,310,240);
        ctx.fillStyle = 'black'
        ctx.font = 'bold 20px Cursive';
        ctx.fillText("I guess I have to ", 330, 210); 
        ctx.fillText("send the spider army", 330, 240); 
        ctx.fillText("Buckle up!", 330, 270); 
        ctx.fillText("- Your Dear Skeleton", 330, 360); 
        ctx.fillStyle = 'white';
        ctx.fillText("Press SPACE to CONTINUE", 310, 20); 
    }else if(level == 10){
        game_finish_music.play();
        background_music.pause();
        interlevel_sound.pause();
        ctx.drawImage(game_finish_background, 0,0,canvas.width, canvas.height);
        ctx.drawImage(letter,canvas.width/2-150,160,310,240);
        ctx.fillStyle = 'black'
        ctx.font = 'bold 20px Cursive';
        ctx.fillText("Thank you young man! ", 330, 210); 
        ctx.fillText("People at Modov can", 330, 240); 
        ctx.fillText("again enjoy the sunshine", 330, 270); 
        ctx.fillText("again", 330, 300); 
        ctx.fillText("- Villiagers", 330, 360); 
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Animation Loop
//////////////////////////////////////////////////////////////////////////////////////////
function animate(){
    background_music.play();
    if(!pause && !gameover && !startscreen && !interLevel){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(background, 0,0,canvas.width, canvas.height);
        ctx.drawImage(pause_img, 800,10,70, 70);
        handleChooseDefender();
        handleGameGrid();
        handleDefenders();
        handleProjectiles();
        handleEnemy();
        handleGameStatus();
        handleResources();
        handleFloatingMessages();
        requestAnimationFrame(animate);
        frame++;
    }
    else if(pause){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(pause_pressed, 800,10,70, 70);
        handleChooseDefender();
        handleGameStatus();
        requestAnimationFrame(animate);
    }
    else if(gameover){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleRestart();
        requestAnimationFrame(animate);
        frame++;
    }
    else if(startscreen){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleStartScreen();
        requestAnimationFrame(animate);
        frame++;
    }
    else if(interLevel){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleInterLevel(level);
        requestAnimationFrame(animate);
        frame++;
    }
}
animate();
//////////////////////////////////////////////////////////////////////////////////////////
// Collision Detection
//////////////////////////////////////////////////////////////////////////////////////////
function collision(first,second){
    if(!(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y)
        ){
            return true;
        }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Window Resize
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('resize', function(){
    canvasPosition = canvas.getBoundingClientRect();
})


