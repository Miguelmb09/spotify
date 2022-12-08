export interface Artist {
    id: string,
    name: string,
    img: string,
    albums: Album[] 
   
  }

  export interface Album {
    id: string,
    name: string,
    backgroundColor: string,
    released: number,
    img: string,
    tracks: Track[],
    artistName?: string
  }  

  export interface Track {
    id: string,
    name: string,
    path: string,
    img?: string,
    artistName?: string,
    seconds?: number,
  } 