import { useEffect, useRef } from "react"
import gsap from "gsap";

type Props = {
    title:string,
    className?:string,
    sectionId?:string
}


const AnimatedTitle = ({title,className,sectionId}:Props) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: containerRef.current,
                    start:"100 bottom",
                    end:"center bottom",
                    toggleActions:"play none none reverse"
                }
            })
    
            titleAnimation.to(".animated-word",{
                opacity:1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease:"power1.inOut",
                stagger: 0.02,
            })
        },containerRef)

        return ()=> ctx.revert()
    }, [])
    
  return (
    <div id={sectionId || ""} ref={containerRef} className={`animated-title ${className}`}>
        {title.split("<br />").map((line,index)=>(
            <div key={index } className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                {line.split(' ').map((word,i)=>(
                    <span key={i} className="animated-word" dangerouslySetInnerHTML={{__html:word}}/>
                ))}
            </div>
        ))}
    </div>
  )
}

export default AnimatedTitle