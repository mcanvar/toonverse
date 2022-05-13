import type {NextComponentType} from 'next'
import Image from 'next/image'
import {useEffect, useRef} from "react";
import {animated, to, useSpring} from "react-spring";
import {useGesture} from "react-use-gesture";
import imgLoader from "../utulities/imgLoader";

const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

const Logo: NextComponentType = () => {

    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }
    }, [])
    const domTarget = useRef(null)
    const [{x, y, rotateX, rotateY, rotateZ, zoom, scale}, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: {mass: 5, tension: 350, friction: 40},
        })
    )
    useGesture(
        {
            onDrag: ({active, offset: [x, y]}) =>
                api({x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1}),
            onPinch: ({offset: [d, a]}) => api({zoom: d / 200, rotateZ: a}),
            onMove: ({xy: [px, py], dragging}) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({hovering}) =>
                !hovering && api({rotateX: 0, rotateY: 0, scale: 1}),
        },
        {domTarget, eventOptions: {passive: false}}
    )

    return (
        <animated.div
            ref={domTarget}
            className="absolute left-0 top-48 w-full h-1/5"
            style={{
                transform: 'perspective(600px)',
                x,
                y,
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
            }}>
            <Image loader={imgLoader} alt={'Toonverse Logo'} src={'/logo.png'} layout="fill"/>
        </animated.div>
    )
}

export default Logo