

type TypographyProps = {
    /**
     * نوع تایپوگرافی را مشخص می کند
     */
    typeOfTag?:"w600"|"w500"|"w700"|"colored"|"title"|"p"|"titlemain"|"stepper"|"psmall"|"titlemainLand";
   
    /**
     * محتوایی که باید نمایش داده شود
     */
    content?: string | any;
    /**
     * برای دادن استایل های سفارشی در صورت نیاز
     */
    className?: string;
    onClick?: (e?: any) => void;
    onKeyDown?: () => void;
    color?:string;
    dark?:boolean;
   
}
 const Typography = ({ typeOfTag, content, className,color,dark,onClick,onKeyDown }: TypographyProps) => {
    const typographyHandling = () => {
        switch (typeOfTag) {
           case "w500":
                return  <p dir='ltr' className={`  text-[14px] ${color} ${dark?"text-white":"text-black"} ${className}`}>{content}</p>
            case "w600":
                return <p  dir='ltr' className={` font-medium text-[14px] ${color} ${dark?"text-white":"text-black"} ${className}`}>{content}</p>
           case "w700":
                return <p  dir='ltr' className={` font-bold text-[14px] ${color}  ${dark?"text-white":"text-black"} ${className} `}>{content}</p>
               
            case "title":
                 return <p  dir='ltr' className={` font-bold text-[28px]  ${dark?"text-white":"text-black"} ${color}  ${className} `}>{content}</p>
            case "p":
                return <p dir='ltr'  className={`   text-[16px] ${color}  ${className}  ${dark?"text-white":"text-graytext"} `} onKeyDown={onKeyDown} onClick={(e: any) => onClick ? onClick(e) : () => { }} >{content}</p>
                case "psmall":
                    return <p dir='ltr'  className={` text-[13px] ${color}  ${className}  ${dark?"text-white":"text-black"} `}>{content}</p>
    
             case "titlemain":
                    return <p  dir='ltr' className={` font-bold text-[18px]  ${dark?"text-white":"text-black"} ${color}  ${className} `}>{content}</p>
             case "titlemainLand":
                    return <p  dir='ltr' className={` font-bold text-[50px]  ${dark?"text-white":"text-black"} ${color}  ${className} `}>{content}</p>
            
                    case "stepper":
                        return <p dir='ltr'  className={` font-bold text-[6px] md:text-[10px] ${color}  ${className}  ${dark?"text-white":"text-black"} `}>{content}</p>            
        
            default:
                return <></>
        }
    }
    return (
        <>{typographyHandling()}</>
    );
}
// const sty=StyleSheet.create({
//     text:{
//         fontFamily:"IRANSansXFaNum-Medium.woff",
//     }
// })
export default Typography
