import Stats from "./Stats"

 

function MainContent() {
  return (
   <article className="flex flex-col p-6 lg:basis-1/2 lg:p-10 lg:justify-center">
    <h1 className="text-3xl font-bold text-center text-white lg:text-left mb-5">Get <span className="text-accent">insights</span> that help your business grow.</h1>
    <p className="text-white opacity-75 text-sm text-center mb-10 lg:text-left">   Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between ">
        <Stats title="10k+" subtitle="companies"/>
        <Stats title="314" subtitle="templates"/>
        <Stats title="12m+" subtitle="queries"/>
    </div>
   </article>
  )
}

export default MainContent

      