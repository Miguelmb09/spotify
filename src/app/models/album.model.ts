export interface Album {
    artist: string
    backgroundColor: string
    image: string
    released: number
    title: string
    tracks: Track[]
}

interface Track {
    title: string
    seconds: number
}