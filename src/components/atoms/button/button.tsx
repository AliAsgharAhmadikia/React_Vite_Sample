


type ButtonProps = {
  title: string;
  source?: any
  onClick?: (e:any) => any;
  className?:string;
  type: "disable" | "redfill" |"redoutline" |"bluefill" | "blueoutline"| "green" | "orangeoutline"| "btnwhite" | "purplefill" |'purpleoutline';
  textcolor?:string;
  disable?:boolean;
  isLoading?:boolean;
}

const Button = ({title,onClick=()=>{ },className,type,textcolor,disable,isLoading}: ButtonProps) => {
    const typee = () => {
        switch (type) {
            case "bluefill": return (`bg-blue-500 w-full h-[48px] text-white rounded-lg ${className} font-semibold text-base `);
            case "blueoutline": return (`font-semibold text-base  border-solid border-2 border-blue-700  w-full h-[48px] text-blue-700 rounded-xl ${className}`)
            case "green": return (` font-semibold text-base  bg-green-500 w-full h-[48px] text-white rounded-xl ${className} `);
            case "redoutline": return (`text-redbgAvi font-semibold  border-solid border border-redbgAvi  w-full h-[48px]  rounded-xl ${className}`);
            case "redfill":return(` bg-red-600 text-white w-full h-[48px]`)
            case "purplefill":return(` bg-purplee text-white w-full hover:bg-white hover:text-purplee h-[48px] ${className}`);
            case "purpleoutline": return (`font-semibold text-base  bg-white  w-full h-[48px] text-purplee hover:text-white hover:bg-purplee rounded-md ${className}`)
            case "orangeoutline": return (` font-semibold text-base  bg-white border-[2px] border-solid border-orange-500 w-full h-[48px] text-orange-500 rounded-xl ${className}`);
            case "disable": return (` bg-btndisable w-full h-[48px] text-graytext ${className}`);
            case "btnwhite": return(`border border-bgheader h-[48px] text-graytext w-full ${className}`);
            default: return (` ${className}`);
        }   
    }
  return (
    <button className={`${className} ${typee()} p-3 rounded-md flex flex-row-reverse justify-center items-center gap-2`} onClick={(e: any)=>onClick(e)} disabled={disable}> 
      <p className={`text-center font-medium text-[14px] ${textcolor}`}>{title}</p>
        {
          isLoading && (
            <>
            <div className="animate-spin h-5 w-5 mr-3 border-[4px] rounded-full border-b-0 border-l-0 "></div>
            </>
          )
        }
    </button>
  )
}

export default Button