function Background() {
    // Singleton
    var Instance;
    Background = function() {
        return Instance;
    }
    Background.prototype = this;
    Instance = new Background();
    Instance.constructor = Background;

    console.log("Background setup");

    // Functionality
    Instance.Sprite = new Sprite(resources[ImageURLs.Background].texture);
    Instance.Sprite.anchor.set(0.5, 0.5);

    Instance.resize = function() {
        resizeSpriteByHeight(Instance.Sprite, app.renderer.height);
        Instance.Sprite.x = app.renderer.width / 2;
        Instance.Sprite.y = app.renderer.height / 2;
    }

    return Instance;
}