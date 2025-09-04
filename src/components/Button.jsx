import clsx from "clsx";
import Marker from "./Marker.jsx";

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
    const Inner = () => (
        <>
            <span className="relative flex items-center min-h-[60px] px-4 g4
             rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
                <span className="absolute -left-[1px]">
                    <Marker fill={markerFill} />
                </span>

                {icon && (
                    <img 
                        src={icon} 
                        alt="circle" 
                        className="size-10 mr-5 object-contain z-10" 
                    />
                )}
                <span>
                    {children}
                </span>
            </span>
        </>
    )
    
    return href ? (
        // need to figure out a way to make shadow a class
        <a className={clsx('relative p-0.5 g5 rounded-2xl shadow-[0px_16px_24px_rgba(0,0,0,0.25),0px_-14px_48px_rgba(40,51,111,0.7)] group',
         containerClassName)}
         href={href}
        >
            <Inner />
        </a>
    )
    : (
        // need to figure out a way to make shadow a class
        <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-[0px_16px_24px_rgba(0,0,0,0.25),0px_-14px_48px_rgba(40,51,111,0.7)] group',
          containerClassName)}
          onClick={onClick}
        >
            <Inner />
        </button>
    )
}

export default Button