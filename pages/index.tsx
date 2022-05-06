import type {NextPage} from 'next'
import Head from 'next/head'
import Image, {ImageLoader} from 'next/image'
import styles from '../styles/Home.module.css'
import {Spring, animated, easings} from 'react-spring'
import Link from "next/link";
import {ImageLoaderProps} from "next/dist/client/image";

const imgLoader: ImageLoader = ({src, width}: ImageLoaderProps) => {
    return `https://mcanvar.github.io/toonverse/${src}?w=${width}`
}

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Toonverse NFT</title>
                <meta name="description" content="Drop your favorite NFT collectibles!" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Toon<Link title="Toonverse NFT" href="/">verse</Link>
                </h1>

                <p className={styles.description}>
                    Get started by joining our community! Soon, we will be available.
                </p>

                <div className={styles.grid}>
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

            <footer className={styles.footer}>
                Powered by{' '}<h5 className={styles.title}>Toon<span>verse</span></h5>
            </footer>
        </div>
    )
}

export default Home
