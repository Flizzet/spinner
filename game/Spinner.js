function Spinner() {
    // Singleton
    var Instance;
    Spinner = function() {
        return Instance;
    }
    Spinner.prototype = this;
    Instance = new Spinner();
    Instance.constructor = Background;

    console.log("Spinner setup");

    // Functionality
    Instance.Sprite = new Sprite(resources[ImageURLs.Spinner].texture);
    Instance.Sprite.anchor.set(0.5, 0.5);

    Instance.resize = function() {
        resizeSpriteByWidth(Instance.Sprite, app.renderer.width * 0.8);
        Instance.Sprite.x = app.renderer.width / 2;
        Instance.Sprite.y = app.renderer.height / 2;
    }

    return Instance;
}