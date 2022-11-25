export const smallImage = (imagePath, size) => {
    const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
}