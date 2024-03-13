import Typography from "../atoms/typography/typography";

const Footer = () => {
    return ( <>
         
         <section className="mt-16 bg-orange-50 flex flex-row p-16 px-28 gap-24">
        <section className="  w-[40%] flex flex-col">
          <Typography typeOfTag="w700" content={"Fiber"} />
          <section className="mt-4">
            <Typography
              typeOfTag="w500"
              content={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione assumenda consequatur minima provident, incidunt neque, harum deserunt quos numquam ipsum vitae, iusto eum magni quas doloribus excepturi! Assumenda, distinctio ducimus?"
              }
            />
          </section>
          <section className="mt-4">
            <Typography
              typeOfTag="w500"
              content={"Made with love in Netherland"}
            />
          </section>
        </section>
              <section className="w-[60%] flex flex-row gap-28">
                  <section className="flex flex-col gap-4">
                  <Typography typeOfTag="w700"className="text-center" content={"Sitemap"} />
                      <section className="flex flex-col gap-2">
                         <button><Typography typeOfTag="p" content={"Homepage"} /></button> 
                         <button><Typography typeOfTag="p" content={"Procing"} /></button> 
                         <button><Typography typeOfTag="p" content={"Testimonials"} /></button> 
                         <button><Typography typeOfTag="p" content={"Features"} /></button> 
  
                    </section>
                  </section>
                  <section className="flex flex-col gap-4">
                  <Typography typeOfTag="w700"className="text-center" content={"Resources"} />
                      <section className="flex flex-col gap-2">
                         <button><Typography typeOfTag="p" content={"Support"} /></button> 
                         <button><Typography typeOfTag="p" content={"Contact"} /></button> 
                         <button><Typography typeOfTag="p" content={"FAQ"} /></button>   
                    </section>
                  </section>
                  <section className="flex flex-col gap-4">
                  <Typography typeOfTag="w700"className="text-center" content={"Company"} />
                      <section className="flex flex-col gap-2">
                         <button><Typography typeOfTag="p" content={"About"} /></button> 
                         <button><Typography typeOfTag="p" content={"Customers"} /></button> 
                         <button><Typography typeOfTag="p" content={"Blog"} /></button>  
                    </section>
                  </section>
                  <section className="flex flex-col gap-4">
                  <Typography typeOfTag="w700"className="text-center" content={"Portfolios"} />
                      <section className="flex flex-col gap-2">
                         <button><Typography typeOfTag="p" content={"Sarah Andrew"} /></button> 
                         <button><Typography typeOfTag="p" content={"Mathew higgins"} /></button> 
                         <button><Typography typeOfTag="p" content={"Janice Dave"} /></button>   
                    </section>
                  </section>

        </section>
      </section>
    </> );
}
 
export default Footer;