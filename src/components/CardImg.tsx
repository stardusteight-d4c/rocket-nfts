type CardProps = {
  title: string
  author: string
  rkt: number
  image: string
}

export default function CardImg(props: CardProps) {
  return (
    <article className="group max-w-[375px] max-h-[338px] w-full cursor-pointer">
      <div className="flex justify-between mb-11">
        <h1 className="text-3xl font-medium group-hover:animate-bounce">{props.title}</h1>
        <img src="src/assets/arrow.svg" className="pl-2 py-2 group-hover:animate-pulse"/>
      </div>
      <div className="flex justify-between mb-7">
        <span className="text-xl font-semibold text-black-100">{props.author}</span>
        <span className="text-xl font-normal text-red-300">{props.rkt} RKT</span>
      </div>
      <div>
        <img src={props.image} className="w-full" />
      </div>
    </article>
  )
}
