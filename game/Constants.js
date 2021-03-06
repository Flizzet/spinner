const GAME_WIDTH = 480,
    GAME_HEIGHT = 800,
    GAME_RATIO = 1.666;

const
    Container = PIXI.Container,
    resources = PIXI.loader.resources,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

const ImageURLs = {
    Spinner: "assets/imgs/spinner.png",
    Background: "assets/imgs/background.png",
    InstallButton: "assets/imgs/install-button.png",
}
