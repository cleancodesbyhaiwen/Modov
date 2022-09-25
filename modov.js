const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
//////////////////////////////////////////////////////////////////////////////////////////
// Sound effects
//////////////////////////////////////////////////////////////////////////////////////////
const pumpkin_collect_sound = document.createElement('audio');
pumpkin_collect_sound.src = '../data/Modov/pumpkin_collect_sound.mp3';
const cannon_hit = document.createElement('audio');
cannon_hit.src = '../data/Modov/cannon_hit.mp3';
const gameover_sound = document.createElement('audio');
gameover_sound.src = '../data/Modov/gameover.mp3';
const cannon_shoot = document.createElement('audio');
cannon_shoot.src = '../data/Modov/cannon_shoot.mp3';
const eating = document.createElement('audio');
eating.src = '../data/Modov/eating.mp3';
const set_weapon = document.createElement('audio');
set_weapon.src = '../data/Modov/set_weapon.mp3';
const jet_shoot_sound = document.createElement('audio');
jet_shoot_sound.src = '../data/Modov/jet_shoot_sound.mp3';
const jet_hit_sound = document.createElement('audio');
jet_hit_sound.src = '../data/Modov/jet_hit_sound.mp3';
const evil_laugh = document.createElement('audio');
evil_laugh.src = '../data/Modov/evil_laugh.mp3';
const startscreen_music = document.createElement('audio');
startscreen_music.src = '../data/Modov/startscreen_music.mp3';
const interlevel_sound = document.createElement('audio');
interlevel_sound.src = '../data/Modov/interlevel.mp3';
const background_music = document.createElement('audio');
background_music.src = '../data/Modov/background_music.mp3';
const arrow_shoot_sound = document.createElement('audio');
arrow_shoot_sound.src = '../data/Modov/arrow_shoot_sound.mp3';
const arrow_hit_sound = document.createElement('audio');
arrow_hit_sound.src = '../data/Modov/arrow_hit_sound.mp3';
const game_finish_music = document.createElement('audio');
game_finish_music.src = '../data/Modov/game_finish_music.mp3';
const button_press_sound = document.createElement('audio');
button_press_sound.src = '../data/Modov/button_press_sound.flac';
const fire_sound = document.createElement('audio');
fire_sound.src = '../data/Modov/fire_sound.mp3';
const hurt_sound = document.createElement('audio');
hurt_sound.src = '../data/Modov/hurt_sound.mp3';
const owl_sound = document.createElement('audio');
owl_sound.src = '../data/Modov/owl_sound.mp3';
const purchase_success = document.createElement('audio');
purchase_success.src = '../data/Modov/purchase_success.mp3';
//////////////////////////////////////////////////////////////////////////////////////////
// Sprite Sheets
//////////////////////////////////////////////////////////////////////////////////////////
const fire_ball = new Image();
fire_ball.src = '../data/Modov/fire_ball.png';
const background = new Image();
background.src = '../data/Modov/background.png';
const pause_img = new Image();
pause_img.src = '../data/Modov/pause.png';
const red_cannon = new Image();
red_cannon.src = '../data/Modov/red_cannon.png';
const jet_man = new Image();
jet_man.src = '../data/Modov/jet_man.png';
const jet_man_bullet = new Image();
jet_man_bullet.src = '../data/Modov/jet_man_bullet.png';
const startscreen_background = new Image();
startscreen_background.src = '../data/Modov/startscreen_background.png';
const skeleton_laugh = new Image();
skeleton_laugh.src = '../data/Modov/skeleton_laugh.png';
const startscreen_dialog = new Image();
startscreen_dialog.src = '../data/Modov/startscreen_dialog.png';
const connector = new Image();
connector.src = '../data/Modov/connector.png';
const letter = new Image();
letter.src = '../data/Modov/letter.png';
const fan = new Image();
fan.src = '../data/Modov/fan.png';
const pumpkin = new Image();
pumpkin.src = '../data/Modov/pumpkin.png';
const pause_pressed = new Image();
pause_pressed.src = '../data/Modov/pause_pressed.png';
const choose_defender_background = new Image();
choose_defender_background.src = '../data/Modov/choose_defender_background.png';
const choose_defender_background_pressed= new Image();
choose_defender_background_pressed.src = '../data/Modov/choose_defender_background_pressed.png';
const fire = new Image();
fire.src = '../data/Modov/fire.png';
const archer = new Image();
archer.src = '../data/Modov/archer.png';
const arrow = new Image();
arrow.src = '../data/Modov/arrow.png';
const game_finish_background = new Image();
game_finish_background.src = '../data/Modov/game_finish_background.png';
const start_button_img = new Image();
start_button_img.src = '../data/Modov/start_button.png';
const start_button_pressed_img = new Image();
start_button_pressed_img.src = '../data/Modov/start_button_pressed.png';
const black_spider = new Image();
black_spider.src = '../data/Modov/black_spider.png';
const ghost = new Image();
ghost.src = '../data/Modov/ghost.png';
const pumpkinman = new Image();
pumpkinman.src = '../data/Modov/pumpkinman.png';
const skeleton = new Image();
skeleton.src = '../data/Modov/skeleton.png';
const startscreen_panel = new Image();
startscreen_panel.src = '../data/Modov/startscreen_panel.png';
const credits_button_pressed_img = new Image();
credits_button_pressed_img.src = '../data/Modov/credits_button_pressed.png';
const credits_button_img = new Image();
credits_button_img.src = '../data/Modov/credits_button.png';
const credits_panel = new Image();
credits_panel.src = '../data/Modov/credits_panel.png';
const close_button = new Image();
close_button.src = '../data/Modov/close_button.png';
const info_button_img = new Image();
info_button_img.src = '../data/Modov/info.png';
const info_button_pressed_img = new Image();
info_button_pressed_img.src = '../data/Modov/info_pressed.png';
const info_panel = new Image();
info_panel.src = '../data/Modov/info_panel.png';
const return_startscreen = new Image();
return_startscreen.src = '../data/Modov/return_startscreen.png';
const return_startscreen_pressed = new Image();
return_startscreen_pressed.src = '../data/Modov/return_startscreen_pressed.png';
const interlevel_panel = new Image();
interlevel_panel.src = '../data/Modov/interlevel_panel.png';
const thank_letter = new Image();
thank_letter.src = '../data/Modov/thank_letter.png';
const health_bar = new Image();
health_bar.src = '../data/Modov/health_bar.png';
const enemy_health_bar = new Image();
enemy_health_bar.src = '../data/Modov/enemy_health_bar.png';
const floor_trap = new Image();
floor_trap.src = '../data/Modov/floor_trap.png';
const owl_img = new Image();
owl_img.src = '../data/Modov/owl.png';
const pumpkin2 = new Image();
pumpkin2.src = '../data/Modov/pumpkin2.png';
const pumpkin2_light = new Image();
pumpkin2_light.src = '../data/Modov/pumpkin2_light.png';
const startscreen_pumpkinman = new Image();
startscreen_pumpkinman.src = '../data/Modov/startscreen_pumpkinman.png';
const lattern_img = new Image();
lattern_img.src = '../data/Modov/lattern.png';
const pole = new Image();
pole.src = '../data/Modov/pole.png';
const trolley_button_img = new Image();
trolley_button_img.src = '../data/Modov/trolley_button.png';
const list_button_img = new Image();
list_button_img.src = '../data/Modov/list_button.png';
const trolley_button_pressed_img = new Image();
trolley_button_pressed_img.src = '../data/Modov/trolley_button_pressed.png';
const list_button_pressed_img = new Image();
list_button_pressed_img.src = '../data/Modov/list_button_pressed.png';
const choose_level_panel = new Image();
choose_level_panel.src = '../data/Modov/choose_level_panel.png';
const right_arrow = new Image();
right_arrow.src = '../data/Modov/right_arrow.png';
const shop_panel = new Image();
shop_panel.src = '../data/Modov/shop_panel.png';
const owned_stamp = new Image();
owned_stamp.src = '../data/Modov/owned_stamp.png';
const progress_bar = new Image();
progress_bar.src = '../data/Modov/progress_bar.png';
const progress_bar_node = new Image();
progress_bar_node.src = '../data/Modov/progress_bar_node.png';
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
let level = 1;
let chosen_level = 1;
var money = 150;
var score = 0;
let feather = 50;
let frame = 0;
const winningScore = 300;
let defenderSlected = "";
let gameover = false;
let pause = false;
let startscreen = true;
let interLevel = false;
let gaming = false;
let own_fan = false;
let own_archer = false;
let own_cannon = false;
let own_fire = false;
let own_floor_trap = false;
//////////////////////////////////////////////////////////////////////////////////////////
//mouse
//////////////////////////////////////////////////////////////////////////////////////////
const mouse = {
    x:10,
    y:10,
    width: 0.1,
    height: 0.1,
}
//let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove',function(e){
    let canvasPosition = canvas.getBoundingClientRect();
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
        if(this.isMakeMoney) ctx.drawImage(pumpkin, this.x-30,this.y-20,30, 30);
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
        projectileSizeFactor, projectileFrameRate,projectileYoffset,projectileHit_sound, isFan, isFire,isFloorTrap){
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
        this.idleMinFrame = idleMinFrame;
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
        this.isFan = isFan;
        this.isFire = isFire;
        this.shootNow = false;
        this.isFloorTrap = isFloorTrap;
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
        ctx.drawImage(health_bar,this.x+20, this.y, 60, 13);
        ctx.fillStyle = 'rgba(148,41,41,255)';
        ctx.fillRect(this.x+25, this.y+4, 50*(this.health/this.maxHealth), 5);
    }
    update(){
        if(this.shooting){
            this.minFrame = this.shootMinFrame;
            this.maxFrame = this.shootMaxFrame;
            if(!this.isFan && this.shootNow == true && !this.isFire && !this.isFloorTrap){
                this.shoot_sound.play();
                projectiles.push(new Projectile(this.x + cellSize, this.y+cellSize/2-this.projectile.height/2,
                this.projectile.width,this.projectile.height,this.projectile.spriteWidth,this.projectile.spriteHeight,
                this.projectile.maxFrame, this.projectile.spriteSheet, this.projectile.frameRate, this.projectile.speed,
                this.projectile.power,this.projectile.sizeFactor, this.projectile.Yoffset, this.projectile.hit_sound));
                this.shootNow = false;
            }
        }else{
            this.maxFrame = this.idleMaxFrame;
            this.minFrame = this.idleMinFrame;
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
                    50,2,10,0,jet_man_bullet,8,5, -5, jet_hit_sound,false,false,false));
                    money -= 50;
                    floatingMessages.push(new FloatingMessages('-' + 50,720,530,25,'gold',true));
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }else if(defenderSlected=='fan'){
            set_weapon.play();
            if(money >= 200){
                defenders.push(new Defender(gridPositionX, gridPositionY,-20,-5,10,0,fan,5,0,
                    0, 0, 6,1424,1221,15,0,0,0,0,0,0,0,0,0,0,0,0,true,false,false));
                    money -= 200;
                    floatingMessages.push(new FloatingMessages('-' + 200,720,530,25,'gold',true));
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }else if(defenderSlected=='cannon') {
            set_weapon.play();
            if(money >= 150){
                defenders.push(new Defender(gridPositionX, gridPositionY, 10,0,30, cannon_shoot,
                    red_cannon,25,0,0, 0, 6,290,234,
                 2.5,675,512,50,50,1,50,5,fire_ball,10,5,10, cannon_hit,false,false,false));
                 money -= 150;
                 floatingMessages.push(new FloatingMessages('-' + 150,720,530,25,'gold',true));
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }
        else if(defenderSlected=='fire'){
            set_weapon.play();
            if(money >= 50){
                defenders.push(new Defender(gridPositionX,gridPositionY,5,5,20,0, fire,
                    5,0,5,0,5,1034,1034,10,0,0,0,0,0,0,0,0,0,0,0,0,false, true,false))
                    money -= 50;
                    floatingMessages.push(new FloatingMessages('-' + 50,720,530,25,'gold',true));
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }else if(defenderSlected=='archer'){
            set_weapon.play();
            if(money >= 100){
                defenders.push(new Defender(gridPositionX,gridPositionY,30,10,20,arrow_shoot_sound,archer,10,0,23,24,
                    29,777,627,6,577,100,50,50,2,10,0,arrow,10,5,-12,arrow_hit_sound,false,false,false))
                    money -= 100;
                    floatingMessages.push(new FloatingMessages('-' + 100,720,530,25,'gold',true));
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }
        else if(defenderSlected=='floor_trap'){
            set_weapon.play();
            if(money >= 50){
                defenders.push(new Defender(gridPositionX, gridPositionY,0,-40,100,undefined,floor_trap,
                    5,0,5,0,5,284,154,3,undefined,undefined,undefined,undefined,undefined,undefined,
                    undefined,undefined,undefined,undefined,undefined,undefined,false,false, true));
                    money -= 50;
                    floatingMessages.push(new FloatingMessages('-' + 50,720,530,25,'gold',true));
            }else{
                floatingMessages.push(new FloatingMessages('Not Enough Money',mouse.x,mouse.y,20,'blue',false));
            }
        }
        else{
            return;
        }
        defenderSlected = '';
        set_background('')
    }
})
function handleDefenders(){
    for(let i = 0;i < defenders.length;i++){
        defenders[i].draw();
        defenders[i].update();
        defenders[i].shooting = (enemiesPositions.indexOf(defenders[i].y) !== -1) ? true : false;
        if(defenders[i] && defenders[i].health <= 0){
            defenders.splice(i,1);
            i--;
        }
    }
}
const defenderName_defenderBackgound = new Map([
    ['jet_man', 'jet_back'],
    ['fan', 'fan_back'],
    ['cannon', 'cannon_back'],
    ['fire', 'fire_back'],
    ['archer', 'archer_back'],
    ['floor_trap', 'floor_trap_back'],
  ]);
let choose_defender_background_map = new Map();
choose_defender_background_map.set('jet_back', choose_defender_background)
choose_defender_background_map.set('fan_back', choose_defender_background)
choose_defender_background_map.set('cannon_back', choose_defender_background)
choose_defender_background_map.set('fire_back', choose_defender_background)
choose_defender_background_map.set('archer_back', choose_defender_background)
choose_defender_background_map.set('floor_trap_back', choose_defender_background)

function set_background(selected){
    choose_defender_background_map.forEach((value,key) => {
        if(key == selected){
            choose_defender_background_map.set(key, choose_defender_background_pressed);
        }else{
            choose_defender_background_map.set(key, choose_defender_background);
        }
      });
}
function choosing(clicked){
    if(clicked == defenderSlected){
        choose_defender_background_map.set(defenderName_defenderBackgound.get(clicked), 
        choose_defender_background);
        defenderSlected = '';
    }else{
        set_weapon.play();
        defenderSlected = clicked;
        set_background(defenderName_defenderBackgound.get(clicked));
    }
}
canvas.addEventListener('click', function(e){
    if(gaming){
        if(mouse.x > 30 && mouse.x < 140 && mouse.y < 90){
            choosing('jet_man')
        }else if(mouse.x > 160 && mouse.x < 270 && mouse.y < 90 && own_fan){
            choosing('fan')

        }else if(mouse.x > 280 && mouse.x < 380 && mouse.y < 90 && own_cannon){
            choosing('cannon')
        }else if(mouse.x > 390 && mouse.x < 490 && mouse.y < 90 && own_fire){
            choosing('fire')
        }
        else if(mouse.x > 500 && mouse.x < 600 && mouse.y < 90 && own_archer){
            choosing('archer')
        }else if(mouse.x > 610 && mouse.x < 710 && mouse.y < 90 && own_floor_trap){
            choosing('floor_trap')
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
    }else if(defenderSlected == 'floor_trap'){
        ctx.drawImage(floor_trap, 0,0, 284, 154, mouse.x-35,mouse.y-30,284/4, 154/4);
    }
    ctx.drawImage(choose_defender_background_map.get('jet_back'),30,5,100,90)
    ctx.drawImage(jet_man, 0,0,881,639, 20,10,881/7, 639/7);
    if(own_fan){
        ctx.drawImage(choose_defender_background_map.get('fan_back'),150,5,100,90)
        ctx.drawImage(fan, 0,0,1424,1221, 175,20,1424/20, 1221/20);
    }
    if(own_cannon){
        ctx.drawImage(choose_defender_background_map.get('cannon_back'),270,5,100,90)
        ctx.drawImage(red_cannon, 0,0, 290, 234, 270,10,290/3, 234/3);
    }
    if(own_fire){
        ctx.drawImage(choose_defender_background_map.get('fire_back'),390,5,100,90)
        ctx.drawImage(fire, 0,0, 1034, 1034,405,10,1034/15, 1034/15);
    }
    if(own_archer){
        ctx.drawImage(choose_defender_background_map.get('archer_back'),500,5,100,90)
        ctx.drawImage(archer, 0,0, 777, 627, 485,5,777/7, 627/7);
    }
    if(own_floor_trap){
        ctx.drawImage(choose_defender_background_map.get('floor_trap_back'),610,5,100,90)
        ctx.drawImage(floor_trap, 0,0,284,154, 625,30,284/4, 154/4);
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
        this.width = (cellSize - cellGap * 2);
        this.height = (cellSize - cellGap * 2);
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
        this.colliding = false;
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
            ctx.drawImage(enemy_health_bar,this.x+20, this.y, 60, 13);
            ctx.fillStyle = 'rgba(194,38,234,255)';
            ctx.fillRect(this.x+25, this.y+4, 50*(this.health/this.maxHealth), 5);
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
            continue;
        }
        if (enemies[i] && enemies[i].x < -enemies[i].width){
            gaming = false;
            gameover = true;
            gameover_sound.play();
            break;
        }
        if(enemies[i] && enemies[i].health <= 0 && !enemies[i].died){
            enemies[i].movement = 0;
            enemies[i].frame = enemies[i].dieMinFrame;
            enemies[i].minFrame = enemies[i].dieMinFrame;
            enemies[i].maxFrame = enemies[i].dieMaxFrame;
            let gainedResources = enemies[i].maxHealth / 2; 
            floatingMessages.push(new FloatingMessages('+' + gainedResources,
            enemies[i].x,enemies[i].y,20,'gold',true));
            money += gainedResources;
            score += gainedResources;
            enemies[i].died = true;
            console.log('died')
            continue;
        }
        let affectedByFan = false;
        let colliding = false;
        for(let j = 0;j < defenders.length;j++){
            if(defenders[j] && enemies[i] && defenders[j].isFan && defenders[j].y == enemies[i].y){
                affectedByFan = true;
            }
            if(defenders[j] && enemies[i] && collision(defenders[j],enemies[i]) && !enemies[i].died){
                colliding = true;
                defenders[j].health -= 0.05;
                if(defenders[j].isFire || defenders[j].isFloorTrap){
                    hurt_sound.play();
                    enemies[i].health -= 0.2;
                }
            }
        }
        if(!enemies[i].died){
            if(colliding){
                eating.play();
                if(!enemies[i].colliding){
                    enemies[i].frame = enemies[i].attackMinFrame;
                    enemies[i].minFrame = enemies[i].attackMinFrame;
                    enemies[i].maxFrame = enemies[i].attackMaxFrame;
                    enemies[i].colliding = true;
                    enemies[i].movement = 0;
                }
            }else{
                if(enemies[i].colliding){
                    enemies[i].frame = enemies[i].moveMinFrame;
                    enemies[i].minFrame = enemies[i].moveMinFrame;
                    enemies[i].maxFrame = enemies[i].moveMaxFrame;
                    enemies[i].colliding = false;
                }
                enemies[i].movement = affectedByFan ? enemies[i].fanspeed : enemies[i].speed;
            }
        }
    }
    if(chosen_level===1){
        addEnemy(200, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35);
    }else if(chosen_level===2){
        addEnemy(100, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35);
        addEnemy(150, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19);
    }else if(chosen_level===3){
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(100, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35)
    }else if(chosen_level===4){
        addEnemy(200, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(400, 416,582,skeleton,5,5,0.3,50,10,-20,60,45,35,44,0,18,35)
        addEnemy(300, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
    }else if(chosen_level===5){
        addEnemy(300, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(200, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
    }else if(chosen_level===6){
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(150, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(200, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
    }else if(chosen_level===7){
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }else if(chosen_level===8){
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(300, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }else if(chosen_level===9){
        addEnemy(1000, 416,582,skeleton,5,5,0.7,50,10,-20,34,19,35,44,0,18,19)
        addEnemy(300, 830, 510, black_spider, 5, 6, 0.5, 150, 0, 20, 30,23, 0,6,7,22,23);
        addEnemy(500, 703,851, pumpkinman, 5,7,0.8,100,25,0,24,17,25,36,0,16,17)
        addEnemy(100,768,911,ghost,5,7,0.5,100,30,10,38,27,0,9,10,21,22);
    }else if(chosen_level===10){
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
        let x = (spriteSheet==ghost) ? canvas.width-(Math.random()*300+100) : canvas.width;
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
            , this.spriteWidth, this.spriteHeight, this.x-this.Xoff, this.y-this.Yoff
            ,this.spriteWidth/this.sizeFactor, this.spriteHeight/this.sizeFactor);
    }
}
function handleResources(){
    if (frame % 250 === 0 && score < winningScore){
        resources.push(new Resources(522,514,0,pumpkin, pumpkin_collect_sound, 50,7, 25,10,10));
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
    console.log(mouse.x)
    console.log(mouse.y)
    ctx.drawImage(background, 0,0,canvas.width, canvas.height);
    if(!pause) ctx.drawImage(pause_img, 800,10,70, 70);
    if(pause) ctx.drawImage(pause_pressed, 800,10,70, 70);
    ctx.drawImage(return_startscreen, 725,10,70, 70);
    ctx.drawImage(choose_defender_background, canvas.width-250,canvas.height-50,250, 50);
    ctx.fillStyle = 'rgba(116,116,106,255)';
    ctx.font = 'bold 20px Cursive';
    ctx.fillText(money, 720, 580);
    ctx.drawImage(pumpkin, 685,560,30, 30);
    ctx.fillText("Level:" + chosen_level, 790, 580);
    ctx.drawImage(progress_bar, 300,550,230, 50);
    if(score<=winningScore) ctx.drawImage(progress_bar_node, 500-(score/winningScore)*200,550,50, 50);
    else ctx.drawImage(progress_bar_node, 300,550,50, 50);
    if(score >= winningScore && enemies.length === 0){
        gaming = false;
        feather++;
        if(chosen_level <= 10){
            chosen_level++;
            level = Math.max(level, chosen_level);
        }
        interlevel_sound.play();
        interLevel = true;
    } 
}
canvas.addEventListener('click', function(){
    if(mouse.x > 800 && mouse.x < 870 && mouse.y < 80 && pause == false){
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
let start_screen_fire = {
    frame: 0,
    maxFrame: 5
}
let start_screen_spider = {
    x: 1000,
    y: 515,
    frame: 23,
    maxFrame: 30,
    minFrame: 23,
    frameRate: 5,
    speed: 0.5
}
let owl = {
    x: 1000,
    y: 515,
    frame: 10,
    maxFrame: 29,
    minFrame: 10,
    idleMaxFrame: 29,
    idleMinFrame: 10,
    flapMaxFrame: 9,
    flapMinFrame: 0
}
let start_pumpkinman = {
    x: 1000,
    y: 515,
    frame: 16,
    maxFrame: 16,
    minFrame: 16,
}
let lattern = {
    x: 700,
    y:100,
    frame: 0,
    maxFrame: 3,
    minFrame: 0
}

let start_button_pressed = false;
let credits_button_pressed = false;
let info_button_pressed = false;
let show_credits_panel = false;
let show_info_panel = false;
let pumpkin2_img = pumpkin2;
let latternLifted = false;
let trolley_button_pressed = false;
let list_button_pressed = false;
let show_choose_level_panel = false;
let show_shop_panel = false;

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
        }else if(mouse.x < 90 && mouse.x > 20 && mouse.y > 10 && mouse.y < 90){
            trolley_button_pressed = true;
            show_shop_panel = true;
            button_press_sound.play()
        }else if(mouse.x < 170 && mouse.x > 100 && mouse.y > 10 && mouse.y < 90){
            list_button_pressed = true;
            show_choose_level_panel = true;
            button_press_sound.play()
        }else if(mouse.x < 630 && mouse.x > 580 && mouse.y > 250 && mouse.y < 300 && show_info_panel){
            show_info_panel = false;
        }else if(mouse.x < 650 && mouse.x > 600 && mouse.y > 30 && mouse.y < 80 && show_choose_level_panel){
            show_choose_level_panel = false;
        }else if(mouse.x < 800 && mouse.x > 750 && mouse.y > 70 && mouse.y < 120 && show_shop_panel){
            show_shop_panel = false;
        }
        if(mouse.x > 700 && mouse.x < 825 && mouse.y > 100 && mouse.y < 225){
            latternLifted = true;
        }
        if(mouse.x > 500 && mouse.x < 530 && mouse.y > 75 && mouse.y < 525){
            chosen_level = Math.ceil((mouse.y - 75)/45);
            if(chosen_level <= level){
                interLevel = true;
                startscreen = false;
                show_choose_level_panel = false;
            }
        }
        if(show_shop_panel){
            if(mouse.x > 700 && mouse.x < 825 && mouse.y > 100 && mouse.y < 225){
                if(feather >= 10){
                    feather -= 10;
                    own_archer = true;
                    purchase_success.play();
                    floatingMessages.push(new FloatingMessages('-10',650,420,50,'gold',false));
                }else return;
            } 
            if(mouse.x > 400 && mouse.x < 570 && mouse.y > 100 && mouse.y < 225) {
                if(feather >= 10){
                    own_cannon = true
                    feather -= 10;
                    purchase_success.play();
                    floatingMessages.push(new FloatingMessages('-10',650,420,50,'gold',false));
                }else return;
            }
            if(mouse.x > 134 && mouse.x < 300 && mouse.y > 100 && mouse.y < 225){
                if(feather >= 15){
                    own_fan = true
                    feather -= 15;
                    purchase_success.play();
                    floatingMessages.push(new FloatingMessages('-15',650,420,50,'gold',false));
                }else return;
            }
            if(mouse.x > 134 && mouse.x < 300 && mouse.y > 350 && mouse.y < 470){
                if(feather >= 5){
                    own_fire = true
                    feather -= 5;
                    purchase_success.play();
                    floatingMessages.push(new FloatingMessages('-5',650,420,50,'gold',false));
                }else return;
            }
            if(mouse.x > 400 && mouse.x < 570 && mouse.y > 350 && mouse.y < 470) {
                if(feather >= 5){
                    own_floor_trap = true
                    feather -= 5;
                    purchase_success.play();
                    floatingMessages.push(new FloatingMessages('-5',650,420,50,'gold',false));
                }else return;
            }
        }
    }

})
addEventListener('mouseup',function(e){
    if(startscreen && !show_shop_panel){
        if(mouse.x < 342 && mouse.x > 150 && mouse.y > 200 && mouse.y < 296){
            startscreen_music.pause();
            fire_sound.pause();
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
        trolley_button_pressed = false;
        list_button_pressed = false;
        latternLifted = false;
    }
})

function handleStartScreen(){
    startscreen_music.play();
    fire_sound.play();
    ctx.drawImage(startscreen_background, 0,0,canvas.width,canvas.height)
    ctx.drawImage(startscreen_panel, 100,100,1182/4,1650/4)
    let startButtonImg = (start_button_pressed) ? start_button_pressed_img : start_button_img;
    let creditsButtonImg = (credits_button_pressed) ? credits_button_pressed_img : credits_button_img;
    let infoButtonImg = (info_button_pressed) ? info_button_pressed_img : info_button_img;
    let trolleyButtonImg = (trolley_button_pressed) ? trolley_button_pressed_img : trolley_button_img;
    let listButtonImg = (list_button_pressed) ? list_button_pressed_img : list_button_img;
    ctx.drawImage(startButtonImg, 155,200,180,85)
    ctx.drawImage(creditsButtonImg, 155,295,180,85)
    ctx.drawImage(infoButtonImg, 260,390,70,70)
    ctx.drawImage(trolleyButtonImg, 20,10,70,70)
    ctx.drawImage(listButtonImg, 100,10,70,70)
    ctx.fillStyle = 'rgba(116,116,106,255)';
    ctx.font = '50px Fantasy';
    ctx.fillText("LV"+level, 160, 445); 
    ctx.drawImage(startscreen_pumpkinman, start_pumpkinman.frame*703, 0, 703,851,450,120,703/2,851/2);
    if(show_credits_panel) ctx.drawImage(credits_panel, 290, 60,360,480)
    if(show_credits_panel) ctx.drawImage(close_button, 540, 120,50,50)
    if(show_info_panel) ctx.drawImage(info_panel, 210, 160,480,360)
    if(show_info_panel) ctx.drawImage(close_button, 580, 250,50,50)
    ctx.drawImage(fire, start_screen_fire.frame*1034, 0, 1034,1034,350,400,1034/6,1034/6);
    if(show_choose_level_panel){
        ctx.drawImage(choose_level_panel, 290, 20,320,568)
        ctx.drawImage(close_button, 600, 30,50,50)
        ctx.fillStyle = 'rgba(116,116,106,255)';
        ctx.font = '40px Fantasy';
        for(let i = 0;i < 10;i++){
            ctx.fillStyle = (i + 1 <= level) ? 'rgba(116,116,106,255)' : 'rgba(57,57,51,255)';
            ctx.fillText("LEVEL "+(i+1), 360, 120+i*45); 
            ctx.drawImage(right_arrow, 500, 80+i*45,40,40)
        }
    }
    ctx.drawImage(pumpkin, -30,350,517/2,517/2)
    ctx.drawImage(pumpkin2_img, 100,450,517/4,517/4)
    ctx.drawImage(black_spider, start_screen_spider.frame*830, 0, 830,510,start_screen_spider.x,
        start_screen_spider.y,830/6,510/6);
    ctx.drawImage(owl_img, owl.frame*916, 0, 916,611,180,20,916/6,611/6);
    ctx.drawImage(pole, 734,60,527/4,3254/4)
    if(!latternLifted) ctx.drawImage(lattern_img, lattern.frame*522, 0, 522,538,lattern.x,
        lattern.y,522/4,538/4);
    if(latternLifted) ctx.drawImage(lattern_img, lattern.frame*522, 0, 522,538,mouse.x-65,
        mouse.y,522/4,538/4);
    if(show_shop_panel){
        ctx.drawImage(shop_panel, 0, 0,900,600)
        ctx.drawImage(close_button, 750, 70,50,50)
        ctx.fillStyle = 'gold';
        ctx.font = '60px Fantasy';
        ctx.fillText("* "+feather, 650, 500); 
        if(own_archer) ctx.drawImage(owned_stamp, 660, 100,100,100);
        if(own_cannon) ctx.drawImage(owned_stamp, 400, 100,100,100);
        if(own_fan) ctx.drawImage(owned_stamp, 130, 100,100,100);
        if(own_fire) ctx.drawImage(owned_stamp, 130, 350,100,100);
        if(own_floor_trap) ctx.drawImage(owned_stamp, 400, 350,100,100);
    }
    if(mouse.x < 330 && mouse.x > 180 && mouse.y > 20 && mouse.y < 120){
        owl_sound.play();
        owl.minFrame = owl.flapMinFrame;
        owl.maxFrame = owl.flapMaxFrame;
    }else{
        owl.minFrame = owl.idleMinFrame;
        owl.maxFrame = owl.idleMaxFrame;
    }
    if(mouse.x < 225 && mouse.x > 100 && mouse.y > 450 && mouse.y < 575){
        pumpkin2_img = pumpkin2_light;
    }else{
        pumpkin2_img = pumpkin2;
    }
    if(mouse.x < 750 && mouse.x > 400 && mouse.y > 120 && mouse.y < 520 && start_pumpkinman.minFrame != 0){
        start_pumpkinman.maxFrame = 24;
    }
    if(frame % start_screen_spider.frameRate == 0){
        start_screen_spider.frame++;
        if(start_screen_spider.frame >= start_screen_spider.maxFrame) {
            start_screen_spider.frame = start_screen_spider.minFrame;
        }
    }
    if(frame % 5 == 0){
        lattern.frame++;
        start_screen_fire.frame++;
        owl.frame++;
        start_pumpkinman.frame++;
        if(start_screen_fire.frame >= start_screen_fire.maxFrame) {
            start_screen_fire.frame = 0;
        }
        if(owl.frame >= owl.maxFrame) {
            owl.frame = owl.minFrame;
        }
        if(lattern.frame >= lattern.maxFrame) {
            lattern.frame = lattern.minFrame;
        }
        if(start_pumpkinman.frame >= start_pumpkinman.maxFrame) {
            if(start_pumpkinman.frame == 24){
                start_pumpkinman.minFrame = 0;
                start_pumpkinman.maxFrame = 15;
            }
            start_pumpkinman.frame = start_pumpkinman.minFrame;
        }
    }
    if(start_screen_spider.x < -canvas.width){
        start_screen_spider.x = 1000
        start_screen_spider.speed = 0.5;
        start_screen_spider.frameRate = 5;
    }
    start_screen_spider.x -= start_screen_spider.speed;
    if(mouse.x < start_screen_spider.x+140 && mouse.x > start_screen_spider.x && 
        mouse.y+100 > start_screen_spider.y && mouse.y+100 < canvas.height && latternLifted){
        start_screen_spider.speed = 4;
        start_screen_spider.frameRate = 2;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
// GameOver
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('mousedown',function(e){
    if(mouse.x > 725 && mouse.x < 790 && mouse.y < 80 && gameover == true){
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
    ctx.drawImage(background, 0,0,canvas.width, canvas.height);
    ctx.drawImage(letter,300,130,310,310);
    ctx.drawImage(return_startscreen, 725,10,70, 70);
}
//////////////////////////////////////////////////////////////////////////////////////////
// Interlevel
//////////////////////////////////////////////////////////////////////////////////////////
addEventListener('mousedown',function(e){
    if(mouse.x > 360 && mouse.x < 540 && mouse.y > 270 && mouse.y < 355 && interLevel == true){
        if(chosen_level <= 10){
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
        }else{
            interLevel = false;
            gaming = false;
            pause = false;
            gameover = false;
            startscreen = true; 
            chosen_level = 10;
            level = 10;
        }
    }
})
function handleInterLevel(){
    ctx.drawImage(background, 0,0,canvas.width, canvas.height);
    if(chosen_level == 11){
        game_finish_music.play();
        ctx.drawImage(game_finish_background, 0,0,canvas.width, canvas.height);
        ctx.drawImage(thank_letter,300,160,310,240);
    }else{
        ctx.fillStyle = 'rgb(146,146,134)'
        ctx.font = 'bold 50px Georgia';
        ctx.drawImage(interlevel_panel,300,160,310,240);
        ctx.fillText("LEVEL " + chosen_level, 350, 250); 
        ctx.font = 'bold 20px Cursive';
        ctx.drawImage(start_button_img, 360,270,180,85)
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
        handleFloatingMessages();
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


