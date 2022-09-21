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
const button_press_sound = document.createElement('audio');
button_press_sound.src = 'button_press_sound.flac';
//////////////////////////////////////////////////////////////////////////////////////////
// Sprite Sheets
//////////////////////////////////////////////////////////////////////////////////////////
const fire_ball = new Image();
fire_ball.src = 'fire_ball.png';
const background = new Image();
background.src = 'background.png';
const pause_img = new Image();
pause_img.src = 'pause.png';
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
const choose_defender_background_pressed= new Image();
choose_defender_background_pressed.src = 'choose_defender_background_pressed.png';
const fire = new Image();
fire.src = 'fire.png';
const archer = new Image();
archer.src = 'archer.png';
const arrow = new Image();
arrow.src = 'arrow.png';
const game_finish_background = new Image();
game_finish_background.src = 'game_finish_background.png';
const ghost_rise_up = new Image();
ghost_rise_up.src = 'ghost_rise_up.png';
const start_button_img = new Image();
start_button_img.src = 'start_button.png';
const start_button_pressed_img = new Image();
start_button_pressed_img.src = 'start_button_pressed.png';
const black_spider = new Image();
black_spider.src = 'black_spider.png';
const ghost = new Image();
ghost.src = 'ghost.png';
const pumpkinman = new Image();
pumpkinman.src = 'pumpkinman.png';
const skeleton = new Image();
skeleton.src = 'skeleton.png';
const startscreen_panel = new Image();
startscreen_panel.src = 'startscreen_panel.png';
const credits_button_pressed_img = new Image();
credits_button_pressed_img.src = 'credits_button_pressed.png';
const credits_button_img = new Image();
credits_button_img.src = 'credits_button.png';
const credits_panel = new Image();
credits_panel.src = 'credits_panel.png';
const close_button = new Image();
close_button.src = 'close_button.png';
const info_button_img = new Image();
info_button_img.src = 'info.png';
const info_button_pressed_img = new Image();
info_button_pressed_img.src = 'info_pressed.png';
const info_panel = new Image();
info_panel.src = 'info_panel.png';
const return_startscreen = new Image();
return_startscreen.src = 'return_startscreen.png';
const return_startscreen_pressed = new Image();
return_startscreen_pressed.src = 'return_startscreen_pressed.png';
const coin = new Image();
coin.src = 'coin.png';
const interlevel_panel = new Image();
interlevel_panel.src = 'interlevel_panel.png';
const thank_letter = new Image();
thank_letter.src = 'thank_letter.png';
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
var money = 150;
var score = 0;
let frame = 0;
const winningScore = 100;
let level = 3;
let defenderSlected = "";
let gameover = false;
let pause = false;
let startscreen = true;
let interLevel = false;
let gaming = false;
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
    constructor(value, x, y, size,color, isMakeMoney){
        this.value = value;
        this.x = x;
        this.y = y;
        this.size = size;
        this.lifeSpan = 0;
        this.color = color;
        this.opacity = 1;
        this.isMakeMoney = isMakeMoney;
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
        if(this.isMakeMoney) ctx.drawImage(coin, this.x-30,this.y-20,30, 30);
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
        if(mouse.x && mouse.y && collision(this, mouse) && defenderSlected != ''){
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 10;
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
            if(enemies[j] && projectiles[i] && collision(projectiles[i], enemies[j]) && !enemies[j].died){
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
    constructor(x,y,Xoffset,Yoffset, health,shoot_sound, spriteSheet,frameRate,idleMinFrame, idleMaxFrame, 
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
        this.dileMinFrame = idleMinFrame;
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
            this.minFrame = this.dileMinFrame;
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
    if(gaming){
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
                    jet_man, 18,0, 0,0,4,881,639, 6,354,215,50,
                    50,2,10,0,jet_man_bullet,8,5, -5, jet_hit_sound,false,false));
                    money -= 50;
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }else if(defenderSlected=='fan'){
            set_weapon.play();
            if(money >= 400){
                defenders.push(new Defender(gridPositionX, gridPositionY,-20,-5,10,0,fan,5,0,
                    0, 0, 6,1424,1221,15,0,0,0,0,0,0,0,0,0,0,0,0,true,false));
                    money -= 400;
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }else if(defenderSlected=='cannon') {
            set_weapon.play();
            if(money >= 200){
                defenders.push(new Defender(gridPositionX, gridPositionY, 10,0,30, cannon_shoot,
                    red_cannon,25,0,0, 0, 6,290,234,
                 2.5,675,512,50,50,1,50,5,fire_ball,10,5,10, cannon_hit,false,false));
                 money -= 200;
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }
        else if(defenderSlected=='fire'){
            set_weapon.play();
            if(money >= 25){
                defenders.push(new Defender(gridPositionX,gridPositionY,5,5,20,0, fire,
                    5,0,5,0,5,1034,1034,10,0,0,0,0,0,0,0,0,0,0,0,0,false, true))
                    money -= 25;
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }else if(defenderSlected=='archer'){
            set_weapon.play();
            if(money >= 100){
                defenders.push(new Defender(gridPositionX,gridPositionY,30,10,20,arrow_shoot_sound,archer,10,0,23,24,
                    29,777,627,6,577,100,50,50,2,10,0,arrow,10,5,-12,arrow_hit_sound,false,false))
                    money -= 100;
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }
        else{
            return;
        }
        defenderSlected = '';
        jet_back = choose_defender_background;
        fan_back = choose_defender_background;
        cannon_back = choose_defender_background;
        fire_back = choose_defender_background;
        archer_back = choose_defender_background;
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

            if(defenders[i] && collision(defenders[i], enemies[j]) && 
            !enemies[j].died){
                eating.play();
                if(enemies[j].movement != 0) enemies[j].frame = enemies[j].attackMinFrame;
                enemies[j].minFrame = enemies[j].attackMinFrame;
                enemies[j].maxFrame = enemies[j].attackMaxFrame;
                enemies[j].movement = 0;
                defenders[i].health -= 0.2;
                if(defenders[i].isFire){
                    enemies[j].health -= 0.2;
                }
            }else if(!enemies[j].died && enemies[j].movement == 0){
                enemies[j].frame = enemies[j].moveMinFrame;
                enemies[j].minFrame = enemies[j].moveMinFrame;
                enemies[j].maxFrame = enemies[j].moveMaxFrame;
                enemies[j].movement = enemies[j].speed;
            }
            if(defenders[i] && defenders[i].health <= 0 && !enemies[j].died){
                defenders.splice(i,1);
                i--;
                enemies[j].movement = enemies[j].speed;
                enemies[j].frame = enemies[j].moveMinFrame;
                enemies[j].minFrame = enemies[j].moveMinFrame;
                enemies[j].maxFrame = enemies[j].moveMaxFrame;
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
    if(gaming){
        if(mouse.x > 30 && mouse.x < 140 && mouse.y < 90){
            if(defenderSlected == 'jet_man'){
                jet_back = choose_defender_background;
                defenderSlected = '';
            }else{
                set_weapon.play();
                defenderSlected = 'jet_man';
                jet_back = choose_defender_background_pressed;
                fan_back = choose_defender_background;
                cannon_back = choose_defender_background;
                fire_back = choose_defender_background;
                archer_back = choose_defender_background;
            }
        }else if(mouse.x > 160 && mouse.x < 270 && mouse.y < 90 && level >= 3){
            if(defenderSlected == 'fan'){
                fan_back = choose_defender_background;
                defenderSlected = '';
            }else{
                set_weapon.play();
                defenderSlected = 'fan';
                jet_back = choose_defender_background;
                fan_back = choose_defender_background_pressed;
                cannon_back = choose_defender_background;
                fire_back = choose_defender_background;
                archer_back = choose_defender_background;
            }

        }else if(mouse.x > 280 && mouse.x < 380 && mouse.y < 90 && level >= 4){
            if(defenderSlected == 'cannon'){
                cannon_back = choose_defender_background;
                defenderSlected = '';
            }else{
                set_weapon.play();
                defenderSlected = 'cannon';
                jet_back = choose_defender_background;
                fan_back = choose_defender_background;
                cannon_back = choose_defender_background_pressed;
                fire_back = choose_defender_background;
                archer_back = choose_defender_background;
            }
        }else if(mouse.x > 390 && mouse.x < 490 && mouse.y < 90 && level >= 5){
            if(defenderSlected == 'fire'){
                fire_back = choose_defender_background;
                defenderSlected = '';
            }else{
                set_weapon.play();
                defenderSlected = 'fire';
                jet_back = choose_defender_background;
                fan_back = choose_defender_background;
                cannon_back = choose_defender_background;
                fire_back = choose_defender_background_pressed;
                archer_back = choose_defender_background;
            }
        }
        else if(mouse.x > 500 && mouse.x < 600 && mouse.y < 90 && level >= 6){
            if(defenderSlected == 'archer'){
                archer_back = choose_defender_background;
                defenderSlected = '';
            }else{
                set_weapon.play();
                defenderSlected = 'archer';
                jet_back = choose_defender_background;
                fan_back = choose_defender_background;
                cannon_back = choose_defender_background;
                fire_back = choose_defender_background;
                archer_back = choose_defender_background_pressed;
            }
        }
    }
});
function handleChooseDefender(){
    if(defenderSlected == 'jet_man'){
        ctx.drawImage(jet_man, 0,0,881,639, mouse.x-63,mouse.y-46,881/7, 639/7);
    }else if(defenderSlected == 'fan'){
        ctx.drawImage(fan, 0,0,1424,1221, mouse.x-36,mouse.y-31,1424/20, 1221/20);
    }else if(defenderSlected == 'cannon'){
        ctx.drawImage(red_cannon, 0,0, 290, 234, mouse.x-48,mouse.y-39,290/3, 234/3);
    }else if(defenderSlected == 'fire'){
        ctx.drawImage(fire, 0,0, 1034, 1034,mouse.x-34,mouse.y-34,1034/15, 1034/15);
    }else if(defenderSlected == 'archer'){
        ctx.drawImage(archer, 0,0, 777, 627, mouse.x-55,mouse.y-45,777/7, 627/7);
    }
    ctx.drawImage(jet_back,30,5,100,90)
    ctx.drawImage(jet_man, 0,0,881,639, 20,10,881/7, 639/7);
    if(level >= 3){
        ctx.drawImage(fan_back,150,5,100,90)
        ctx.drawImage(fan, 0,0,1424,1221, 175,20,1424/20, 1221/20);
    }
    if(level >= 4){
        ctx.drawImage(cannon_back,270,5,100,90)
        ctx.drawImage(red_cannon, 0,0, 290, 234, 270,10,290/3, 234/3);
    }
    if(level >= 5){
        ctx.drawImage(fire_back,390,5,100,90)
        ctx.drawImage(fire, 0,0, 1034, 1034,405,10,1034/15, 1034/15);
    }
    if(level >= 6){
        ctx.drawImage(archer_back,500,5,100,90)
        ctx.drawImage(archer, 0,0, 777, 627, 485,5,777/7, 627/7);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////
// Enemy
//////////////////////////////////////////////////////////////////////////////////////////


class Enemy{
    constructor(x, vertialPosition,spriteWidth,spriteHeight, 
        spriteSheet, frameRate, sizeFactor, speed, health,
        Yoffset, Xoffset, moveMaxFrame, moveMinFrame,
        attackMinFrame, attackMaxFrame,dieMinFrame , dieMaxFrame, initialFrame)
    {
        this.x = x,
        this.y = vertialPosition,
        this.width = cellSize - cellGap * 2;
        this.height = cellSize - cellGap * 2;
        this.speed = speed;
        this.fanspeed = speed/2;
        this.movement = speed;
        this.health = health;
        this.maxHealth = health;
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.frame = initialFrame;
        this.maxFrame = moveMaxFrame;
        this.minFrame = moveMinFrame;
        this.moveMaxFrame = moveMaxFrame;
        this.moveMinFrame = moveMinFrame;
        this.attackMinFrame = attackMinFrame;
        this.attackMaxFrame = attackMaxFrame;
        this.dieMinFrame = dieMinFrame;
        this.dieMaxFrame = dieMaxFrame;
        this.spriteSheet = spriteSheet;
        this.frameRate = frameRate;
        this.sizeFactor = sizeFactor;
        this.Yoffset = Yoffset;
        this.Xoffset = Xoffset;
        this.died = false;
        this.remove = false;
    }
    update(){
        //console.log("min" + this.minFrame)
        //console.log("max" + this.maxFrame)
        //console.log(this.frame)
        //console.log("frame rate" + this.frameRate)
        this.x -= this.movement;
        if(frame % this.frameRate === 0){
            this.frame++;
            if(this.frame >= this.maxFrame){
                if(this.frame == this.dieMaxFrame){
                    this.remove = true;
                }else{
                    this.frame = this.minFrame;
                }
            } 
        }
    }
    draw(){
        //ctx.fillStyle = 'green';
        //ctx.fillRect(this.x,this.y,this.width, this.height);
        ctx.drawImage(this.spriteSheet, this.frame * this.spriteWidth, 0
            , this.spriteWidth, this.spriteHeight, this.x-this.Xoffset, this.y-this.Yoffset,this.spriteWidth/this.sizeFactor, 
            this.spriteHeight/this.sizeFactor);
        if(!this.died){
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x+20, this.y, 60*(this.health/this.maxHealth), 7);
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x+20+60*(this.health/this.maxHealth), this.y, 60-60*(this.health/this.maxHealth), 7);
        }
    }
}
function handleEnemy(){
    for(let i = 0;i < enemies.length;i++){
        enemies[i].update();
        enemies[i].draw();
        if(enemies[i].remove){
            const findthisIndex = enemiesPositions.indexOf(enemies[i].y);
            enemies.splice(i,1);
            enemiesPositions.splice(findthisIndex,1);
            i--;
        }
        if (enemies[i] && enemies[i].x < -enemies[i].width){
            gaming = false;
            gameover = true;
            gameover_sound.play();
        }
        if(enemies[i] && enemies[i].health <= 0 && !enemies[i].died){
            enemies[i].movement = 0;
            enemies[i].frame = enemies[i].dieMinFrame;
            enemies[i].minFrame = enemies[i].dieMinFrame;
            enemies[i].maxFrame = enemies[i].dieMaxFrame;
            let gainedResources = enemies[i].maxHealth / 2; 
            floatingMessages.push(new FloatingMessages('+' + gainedResources,enemies[i].x,enemies[i].y,20,'gold',true));
            money += gainedResources;
            score += gainedResources;
            enemies[i].died = true;
        }
        let affectedByFan = false;
        for(let j = 0;j < defenders.length;j++){
            if(defenders[j] && enemies[i] && defenders[j].isFan && defenders[j].y == enemies[i].y){
                    affectedByFan = true;
            }
        }
        if(enemies[i]  && affectedByFan && !enemies[i].died && enemies[i].movement != 0) {
            enemies[i].movement = enemies[i].fanspeed;
        }
        else if(enemies[i] && !enemies[i].died && enemies[i].movement != 0){
            enemies[i].movement = enemies[i].speed;
        }
    }
    if(level===1){
        addEnemy(200, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35)
    }else if(level ===2){
        addEnemy(100, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35)
        addEnemy(150, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
    }else if(level == 3){
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(100, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35)
        addEnemy(150, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
    }else if(level == 4){
        addEnemy(200, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(400, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35)
        addEnemy(300, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
    }else if(level == 5){
        addEnemy(300, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(200, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
    }else if(level == 6){
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(150, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(200, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
    }else if(level == 7){
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }else if(level == 8){
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(300, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }else if(level == 9){
        addEnemy(100, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(200, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }else if(level == 10){
        addEnemy(100, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(200, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }
}
function addEnemy(rate, spriteWidth, spriteHeight, spriteSheet, frameRate, 
    sizeFactor, speed, health, Yoffset, Xoffset,
    moveMaxFrame, moveMinFrame, attackMinFrame, attackMaxFrame,dieMinFrame , dieMaxFrame, initialFrame){
    if( frame % rate === 0 && score <= winningScore){
        let vertialPosition = Math.floor(Math.random()*5+1) * cellSize + cellGap;
        let x = (spriteSheet==ghost) ? canvas.width - (Math.random()*300+100) : canvas.width;
        enemies.push(new Enemy(x, vertialPosition, spriteWidth, spriteHeight, 
            spriteSheet, frameRate, sizeFactor, speed, health, Yoffset,Xoffset,moveMaxFrame
            ,moveMinFrame, attackMinFrame, attackMaxFrame,dieMinFrame , dieMaxFrame, initialFrame));
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
    if (frame % 250 === 0 && score < winningScore){
        resources.push(new Resources(522,514,0,pumpkin, coin_sound, 50,7, 25,10,10));
    }
    for(let i = 0;i < resources.length;i++){
        resources[i].update()
        resources[i].draw()
        if(resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
            resources[i].sound.play();
            floatingMessages.push(new FloatingMessages('+' + resources[i].amount,mouse.x,mouse.y,25,'gold',true));
            money += resources[i].amount;
            resources.splice(i,1);
            i--;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Gaming UI
//////////////////////////////////////////////////////////////////////////////////////////
function handleGamingUI(){
    ctx.drawImage(background, 0,0,canvas.width, canvas.height);
    if(!pause) ctx.drawImage(pause_img, 800,10,70, 70);
    if(pause) ctx.drawImage(pause_pressed, 800,10,70, 70);
    ctx.drawImage(return_startscreen, 725,10,70, 70);
    ctx.drawImage(choose_defender_background, canvas.width-250,canvas.height-50,250, 50);
    ctx.fillStyle = 'gold';
    ctx.font = 'bold 20px Cursive';
    ctx.fillText(money, 720, 580);
    ctx.drawImage(coin, 685,560,30, 30);
    ctx.fillText("Level:" + level, 790, 580);
    if(score >= winningScore && enemies.length === 0){
        gaming = false;
        level++;
        interlevel_sound.play();
        interLevel = true;
    } 
}
canvas.addEventListener('click', function(){
    if(mouse.x > 800 && mouse.x < 870 && mouse.y < 80 && pause == false){
        console.log('paue')
        button_press_sound.play()
        gaming = false;
        pause = true;
        interLevel = false;
        gameover = false;
        startscreen = false;
    }else if(mouse.x > 800 && mouse.x < 870 && mouse.y < 80 && pause == true){
        button_press_sound.play()
        gaming = true;
        pause = false;
        interLevel = false;
        gameover = false;
        startscreen = false;
    }else if(mouse.x > 725 && mouse.x < 790 && mouse.y < 80 && !startscreen){
        gaming = false;
        pause = false;
        interLevel = false;
        gameover = false;
        startscreen = true;
        money = 150;
        score = 0;
        enemies.splice(0,enemies.length);
        projectiles.splice(0,projectiles.length);
        defenders.splice(0,defenders.length);
        resources.splice(0, resources.length);
    }
})
//////////////////////////////////////////////////////////////////////////////////////////
// Start Screen
//////////////////////////////////////////////////////////////////////////////////////////
let ghost_rise = {
    frame: 20,
    maxFrame: 24,
}
let start_screen_fire = {
    frame: 0,
    maxFrame: 5
}
let start_screen_spider = {
    x: 1000,
    y: 515,
    frame: 23,
    maxFrame: 30,
    minFrame: 23
}
let start_button_pressed = false;
let credits_button_pressed = false;
let info_button_pressed = false;
let show_credits_panel = false;
let show_info_panel = false;

addEventListener('mousedown',function(e){
    if(startscreen){
        if(mouse.x < 342 && mouse.x > 150 && mouse.y > 200 && mouse.y < 296){
            button_press_sound.play()
            start_button_pressed = true;
        }else if(mouse.x < 342 && mouse.x > 150 && mouse.y > 300 && mouse.y < 396){
            credits_button_pressed = true;
            button_press_sound.play()
        }else if(mouse.x < 590 && mouse.x > 540 && mouse.y > 120 && mouse.y < 170 && show_credits_panel){
            show_credits_panel = false;
        }else if(mouse.x > 260 && mouse.x < 310 && mouse.y > 390 && mouse.y < 460){
            info_button_pressed = true;
            button_press_sound.play()
        }else if(mouse.x < 630 && mouse.x > 580 && mouse.y > 250 && mouse.y < 300 && show_info_panel){
            show_info_panel = false;
        }
    }

})
addEventListener('mouseup',function(e){
    if(startscreen){
        if(mouse.x < 342 && mouse.x > 150 && mouse.y > 200 && mouse.y < 296){
            gaming = false;
            interLevel = true;
            pause = false;
            startscreen = false;
            startscreen_music.pause();
        }else if(mouse.x < 342 && mouse.x > 150 && mouse.y > 300 && mouse.y < 396){
            show_credits_panel = true;
        }else if(mouse.x > 260 && mouse.x < 310 && mouse.y > 390 && mouse.y < 460){
            show_info_panel = true;
        }
        start_button_pressed = false;
        credits_button_pressed = false;
        info_button_pressed = false;
    }
})

function handleStartScreen(){
    startscreen_music.play();
    ctx.drawImage(startscreen_background, 0,0,canvas.width,canvas.height)
    if(frame > 50){
        ctx.drawImage(startscreen_dialog, 465,225,150,105)
        ctx.drawImage(connector, 610,250,30,20)
        ctx.fillStyle = 'black';
        ctx.font = 'bold 15px Cursive';
        ctx.fillText("We assembled ", 485, 250); 
        ctx.fillText("the evil army", 485, 270); 
        ctx.fillText(", we'll destroy", 485, 290); 
        ctx.fillText("your villiage.", 485, 310); 
    }
    ctx.drawImage(startscreen_panel, 100,100,1182/4,1650/4)
    let startButtonImg = (start_button_pressed) ? start_button_pressed_img : start_button_img;
    let creditsButtonImg = (credits_button_pressed) ? credits_button_pressed_img : credits_button_img;
    let infoButtonImg = (info_button_pressed) ? info_button_pressed_img : info_button_img;
    ctx.drawImage(startButtonImg, 155,200,180,85)
    ctx.drawImage(creditsButtonImg, 155,295,180,85)
    ctx.drawImage(infoButtonImg, 260,390,70,70)
    if(show_credits_panel) ctx.drawImage(credits_panel, 290, 60,360,480)
    if(show_credits_panel) ctx.drawImage(close_button, 540, 120,50,50)
    if(show_info_panel) ctx.drawImage(info_panel, 210, 160,480,360)
    if(show_info_panel) ctx.drawImage(close_button, 580, 250,50,50)
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
    if(frame % 5 == 0){
        start_screen_fire.frame++;
        start_screen_spider.frame++;
        if(start_screen_fire.frame >= start_screen_fire.maxFrame) {
            start_screen_fire.frame = 0;
        }
        if(start_screen_spider.frame >= start_screen_spider.maxFrame) {
            start_screen_spider.frame = start_screen_spider.minFrame;
        }
    }
    if(start_screen_spider.x < -canvas.width){
        start_screen_spider.x = 1000
    }
    start_screen_spider.x -= 0.5;
    ctx.drawImage(ghost_rise_up, ghost_rise.frame*768, 0, 768,911,canvas.width-350,100,768/2,911/2);
    ctx.drawImage(fire, start_screen_fire.frame*1034, 0, 1034,1034,350,400,1034/6,1034/6);
    ctx.drawImage(pumpkin, -10,350,517/2,517/2)
    ctx.drawImage(black_spider, start_screen_spider.frame*830, 0, 830,510,start_screen_spider.x,
        start_screen_spider.y,830/6,510/6);
}
//////////////////////////////////////////////////////////////////////////////////////////
// GameOver
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('keypress',function(e){
    if(e.code == "Space" && gameover == true){
        gameover = false;
        gaming = true;
        money = 150;
        score = 0;
        enemies.splice(0,enemies.length);
        projectiles.splice(0,projectiles.length);
        defenders.splice(0,defenders.length);
        resources.splice(0, resources.length);
    }
})
function handleGameover(){
    evil_laugh.play();
    ctx.drawImage(letter,300,130,310,310);
    ctx.font = 'bold 20px Cursive';
    ctx.fillStyle = 'white';
    ctx.fillText("Press SPACE to restart game", 310, 20); 
}
//////////////////////////////////////////////////////////////////////////////////////////
// Interlevel
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('keypress',function(e){
    if(e.code == "Space" && interLevel == true && level <= 10){
        interLevel = false;
        gaming = true;
        pause = false;
        gameover = false;
        startscreen = false; 
        score = 0;
        money = 150;
        defenders.splice(0,defenders.length);
        projectiles.splice(0,projectiles.length);
        evil_laugh.play();
    }
})
function handleInterLevel(){
    if(level == 11){
        game_finish_music.play();
        ctx.drawImage(game_finish_background, 0,0,canvas.width, canvas.height);
        ctx.drawImage(thank_letter,300,160,310,240);
    }else{
        ctx.fillStyle = 'rgb(146,146,134)'
        ctx.font = 'bold 50px Cursive';
        ctx.drawImage(interlevel_panel,300,160,310,240);
        ctx.fillText("LEVEL " + level, 350, 250); 
        ctx.font = 'bold 20px Cursive';
        ctx.fillText("Press SPACE to Begin", 350, 350); 
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// Animation Loop
//////////////////////////////////////////////////////////////////////////////////////////
function animate(){
    if(gaming){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleGamingUI();
        handleChooseDefender();
        handleGameGrid();
        handleDefenders();
        handleProjectiles();
        handleEnemy();
        handleResources();
        handleFloatingMessages();
        requestAnimationFrame(animate);
        frame++;
    }
    else if(pause){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleGamingUI();
        handleChooseDefender();
        requestAnimationFrame(animate);
    }
    else if(gameover){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        handleGameover();
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
        handleInterLevel();
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


