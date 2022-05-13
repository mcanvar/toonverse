import {ImageLoader} from "next/image";
import {ImageLoaderProps} from "next/dist/client/image";

const imgLoader: ImageLoader = ({src, width}: ImageLoaderProps) => `assets/${src}?w=${width}`

export default imgLoader