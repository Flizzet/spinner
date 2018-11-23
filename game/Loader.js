PIXI.loader
    .add(Object.values(ImageURLs))
    .on("progress", loadingProgressHandler)
    .load(start);

function loadingProgressHandler(event) {
    console.log(event.progress);
}