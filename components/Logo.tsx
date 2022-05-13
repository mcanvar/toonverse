import type {NextComponentType} from 'next'
import Image, {ImageLoader} from 'next/image'
import {ImageLoaderProps} from "next/dist/client/image";

const imgLoader: ImageLoader = ({src, width}: ImageLoaderProps) => {
    if (process.env.NODE_ENV === 'development')
        return `/assets/${src}?w=${width}`

    return `https://mcanvar.github.io/toonverse/assets/${src}?w=${width}`
}

const Logo: NextComponentType = () => {
    return (
        <div className="absolute left-0 top-48 w-full h-1/5">
            <Image loader={imgLoader} alt={'Toonverse Logo'} src={'/logo.png'} layout="fill"/>
        </div>
    )
}

export default Logo