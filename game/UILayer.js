function UILayer() {
    var Instance;
    UILayer = function() {
        return Instance;
    }
    UILayer.prototype = this;
    Instance = new UILayer();
    UILayer.constructor = UILayer;

    // Functionality
    // Spin button
    Instance.SpinBtnSprite = new Sprite(resources[ImageURLs.InstallButton].texture);
    Instance.SpinBtnSprite.anchor.set(0.5, 0.5);
    Instance.SpinBtnSprite.update = function() {
        if (pointer.hitTestSprite(this)) {
			pointer.cursor = "pointer";
			this.tint = 0x999999;
			if (pointer.isDown) {
				this.tint = 0x777777;
			}
		}
		else {
			pointer.cursor = "auto";
			this.tint = 0xFFFFFF;
        }
    }

    // Resize
    Instance.resize = function() {
        // Spin btn
        resizeSpriteByWidth(Instance.SpinBtnSprite, app.renderer.width * 0.5);
        Instance.SpinBtnSprite.x = app.renderer.width / 2;
        Instance.SpinBtnSprite.y = app.renderer.height - (app.renderer.height * 0.1);
    }

    return Instance;
}