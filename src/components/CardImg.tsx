import arrowImg from '../assets/arrow.svg'

type CardProps = {
  title: string
  author: string
  rkt: number
  image: string
}

export default function CardImg(props: CardProps) {
  return (
    <article className="group min-w-[375px] min-h-[338px] w-full cursor-pointer">
      <div className="flex justify-between mb-11">
        <h1 className="text-3xl font-medium">{props.title}</h1>
        <img src={arrowImg} className="py-2 pl-2"/>
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
