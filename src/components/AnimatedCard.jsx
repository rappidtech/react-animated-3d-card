import Card from "react-animated-3d-card";

export default function AnimatedCard({
    children,
    maxWidth = 210,
    maxHeight = 400,

}) {

    return (
        <Card
            style={{
                maxWidth:  maxWidth,
                maxHeight:  maxHeight,
                minHeight: 400,
                height: '35vw',
                perspective: 1000, 
                background:'#F9F9F9',
            }}
            config={{
                rotation: 15,
                transition: {
                duration: 0.5,
                timingMode: "ease-out",
                },
                transform: {
                figureIcon: {
                    rotation: 20,
                    translateZ: 160,
                },
                caption: {
                    rotation: 20,
                    translateZ: 200,
                },
                },
            }}
            >
                {children}
        </Card>
    );
}
