function getImgUrl (name: string) {
    return new URL(`../assets/books/${name}`, import.meta.url)
}

export {getImgUrl}