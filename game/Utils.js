function resizeSpriteByWidth(sprite, newWidth) {
    let newScale = newWidth / sprite.width;
    sprite.width = newWidth;
    sprite.height = sprite.height * newScale;
}
function resizeSpriteByHeight(sprite, newHeight) {
    let newScale = newHeight / sprite.height;
    sprite.width = sprite.width * newScale;
    sprite.height = newHeight;
}