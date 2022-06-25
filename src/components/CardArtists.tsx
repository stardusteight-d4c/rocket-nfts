type CardArtists = {
  image: string
  author: string
  pics: number
}

export default function CardArtists(props: CardArtists) {
  return (
  <article className="bg-black-200 w-[350px] h-[150px] flex gap-10 py-6 px-8 items-center cursor-pointer hover:opacity-90 hover:brightness-95">
    <div>
      <img src={props.image} />
    </div>
    <div>
      <span className="text-xl font-medium">{props.author}</span>
      <br />
      <span className="text-xl font-medium text-red-300">{props.pics} Fotografias</span>
    </div>
  </article>
  )
}
