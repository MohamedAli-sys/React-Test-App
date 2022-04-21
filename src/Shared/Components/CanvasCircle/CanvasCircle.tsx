import React, { FunctionComponent, useEffect, useRef } from "react";
import './CanvasCircle.scss';
interface CanvasCircleProps {
    color: string,
    percentage: number
}

const CanvasCircle: FunctionComponent<CanvasCircleProps> = (props) => {
    let ctxRef = useRef<HTMLCanvasElement | null>(null)
    let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)
    let spanRef = React.useRef<HTMLSpanElement | null>(null)
    let sectionRef = React.useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        let ctx = ctxRef.current
        canvasCtxRef.current = ctxRef.current!.getContext('2d')
        let spanProcent = spanRef.current
        let c = canvasCtxRef.current

        let posX = ctx?.width,
            posY = ctx?.height,
            fps = 1000 / 200,
            procent = 0,
            oneProcent = 360 / 100,
            result = oneProcent * props.percentage;
        c!.lineCap = 'round';

        let arcMove = () => {
            let deegres = 0;
            let acrInterval = setInterval(() => {
                deegres += 1;
                c!.clearRect(0, 0, ctx!.width, ctx!.height);
                procent = deegres / oneProcent;

                spanProcent!.innerHTML = procent.toFixed();

                c!.beginPath();
                c!.arc(posX! / 2, posY! / 2, 100, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
                c!.strokeStyle = '#f2f6ff';
                c!.lineWidth = 10;
                c!.stroke();

                c!.beginPath();
                c!.strokeStyle = props.color; // Color
                c!.lineWidth = 10;
                c!.arc(posX! / 2, posY! / 2, 100, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
                c!.stroke();
                if (deegres >= result) clearInterval(acrInterval);
            }, fps);

        }
        arcMove();

        // window.onscroll = () => {
        //     if (window.scrollY >= ctx!.offsetTop) {
        //         arcMove();
        //     }
        // }
    }, [])

    return (
        <>
            <div className="canvas-wrap" ref={sectionRef}>
                <canvas id="canvas" ref={ctxRef} width="300" height="300"></canvas>
                <span id="procent" ref={spanRef}>0</span>
            </div>
        </>
    );
}

export default CanvasCircle;