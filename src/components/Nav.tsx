import Logo from './Logo'
import Metamask from './Icons/Metamask'

export default function Nav() {
  return (
    <header className="flex items-center justify-between 2xl:px-[13rem] pt-14 px-20 md:inline-block md:pt-0 md:px-0 md:mx-auto h-16 md:my-auto md:border-black-100">
      <div>
        <a href="#home">
          <Logo />
        </a>
      </div>
      <div className="md:hidden">
        <ul className="flex text-lg 2xl:text-xl font-normal gap-[3.80rem]">
          <li>
            <a href="#">Comprar NFT</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <button className="flex items-center bg-white font-bold text-black-900 py-[0.94rem] px-[1.40rem] text-base gap-[0.95rem] md:hidden">
          <Metamask />
          <span>Conectar carteira</span>
        </button>
      </div>
    </header>
  )
}
