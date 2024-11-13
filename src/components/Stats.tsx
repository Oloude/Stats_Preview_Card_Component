 type StatsProps = {
    title : string,
    subtitle : string
 }

function Stats({title, subtitle} : StatsProps) {
  return (
    <div className="flex flex-col gap-1">
        <h4 className="text-white  font-bold text-2xl">{title}</h4>
        <p className="text-white opacity-60 text-xs uppercase tracking-wider">{subtitle}</p>
    </div>
  )
}

export default Stats