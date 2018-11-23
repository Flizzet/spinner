// Creates application
const app = new PIXI.Application({
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    antialias: false,
    transparent: false,
    resolution: 1,
    roundPixels: true
});
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

var tink = new Tink(PIXI, app.renderer.view);
var GameScene = new Container();
var backgroundSprite;
var gameStarted = false;
var delta = 0.01;

// Creates canvas element, pushes to DOM
document.body.appendChild(app.view);

// Initial resize
resize();

// All listeners
window.onresize = resize;

function start() {
    console.log("Game started");

	// Create Tink pointer
	pointer = tink.makePointer();

    // Add all components to scene
    GameScene.addChild(Background().Sprite);
    GameScene.addChild(Spinner().Sprite);
    GameScene.addChild(UILayer().SpinBtnSprite);
    
    // Add scene to stage
    app.stage.addChild(GameScene);

    // Set game to started for future resizing
    gameStarted = true;

    // Resize all components
    resize();
    // Intitial gameloop
    update();
}

function update() {
	delta = app.ticker.deltaTime;

	// Update tink
	tink.update();
    
    // Update components
    UILayer().SpinBtnSprite.update();
    Spinner().update();

    // Call next animation frame
    requestAnimationFrame(update);
}

// Resize method
function resize() {
    // Calculate new dimensions
    var height = window.innerHeight;
    var width = height / GAME_RATIO;

    // Apply new dimensions
    app.renderer.resize(width, height);

    // Resize all components
    if (gameStarted) {
        Background().resize();
        Spinner().resize();
        UILayer().resize();
    }
}
