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

    Instance.SpinBtnSprite.pushed = false;

    Instance.update = function() {
        if (this.SpinBtnSprite.update !== null) {
            this.SpinBtnSprite.update();
        }
    }

    Instance.SpinBtnSprite.update = function() {
        if (pointer.hitTestSprite(this)) {
			pointer.cursor = "pointer";
			this.tint = 0x999999;
			if (pointer.isDown) {
				this.tint = 0x777777;
                this.pushed = true;
            } else if (this.pushed) {
                this,pushed = false;
                this.Tapped();
            }
		}
		else {
			pointer.cursor = "auto";
            this.tint = 0xFFFFFF;
        }
    }
    Instance.SpinBtnSprite.Tapped = function() {
        // Remove button
        this,pushed = false;
        this.update = null;
        GameScene.removeChild(this);

        // Begin spin
        Spinner().beginSpin();
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