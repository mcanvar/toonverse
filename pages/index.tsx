import type {NextPage} from 'next'
import Head from 'next/head'
import Image, {ImageLoader} from 'next/image'
import styles from '../styles/Home.module.css'
import {Spring, animated, easings} from 'react-spring'
import Link from "next/link";
import Logo from "../components/Logo";
import {ImageLoaderProps} from "next/dist/client/image";

const imgLoader: ImageLoader = ({src, width}: ImageLoaderProps) => {
    if (process.env.NODE_ENV === 'development')
        return `/assets/${src}?w=${width}`

    return `https://mcanvar.github.io/toonverse/assets/${src}?w=${width}`
}

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Toonverse NFT</title>
                <meta name="description" content="Drop your favorite NFT collectibles!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="min-h-screen max-w-screen grid place-content-center flex-col py-36 relative">
                <Logo />

                <p className="mt-60">
                    Get started by joining our community! Soon, we will be available.
                </p>

                <div className={styles.grid + ' '}>
                    <div className={styles.card}>
                        <Link href={'https://twitter.com/ToonverseClub'}>
                            <a>
                                <Spring
                                    loop={{reverse: true}}
                                    from={{opacity: 1, rotateY: 0}}
                                    to={[
                                        {opacity: 0.7, rotateY: 25},
                                        {opacity: 1, rotateY: 0},
                                    ]}
                                    config={{duration: 2000, easing: easings.easeInOutQuart}}
                                >
                                    {s => (
                                        <animated.div style={s}>
                                            <Image loader={imgLoader} alt={'Twitter'} src={'/logo-twitter.svg'} width={100}
                                                   height={100}/>
                                        </animated.div>
                                    )}
                                </Spring>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link href={'https://discord.gg/CAb8rcJB'}>
                            <a>
                                <Spring
                                    loop={{reverse: true}}
                                    from={{opacity: 0.7, rotateY: 25}}
                                    to={[
                                        {opacity: 1, rotateY: 0},
                                        {opacity: 0.7, rotateY: 25},
                                    ]}
                                    config={{duration: 2000, easing: easings.easeInOutQuart}}
                                >
                                    {s => (
                                        <animated.div style={s}>
                                            <Image loader={imgLoader} alt={'Discord'} src={'/logo-discord.svg'} width={100}
                                                   height={100}/>
                                        </animated.div>
                                    )}
                                </Spring>
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
