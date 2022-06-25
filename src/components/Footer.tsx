import Logo from './Logo'
import {
  EnvelopeSimple,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react'

import toTop from '../assets/toTop.svg'

export default function Footer() {
  return (
    <footer className="bg-black-200">
      <div className="flex justify-between px-20 items-center pt-20 pb-16 border-b-[1px] border-black-100">
        <Logo />
        <a href="#home">
          <img src={toTop} />
        </a>
      </div>
      <section className="flex justify-between px-20 border-b-[1px] border-black-100">
        <div className="py-16">
          <h2 className="font-medium text-3xl pb-6">
            Fique por dentro de
            <br />
            <strong className="text-red-300">todas as novidades</strong>
          </h2>
          <span className="flex">
            <input
              type="text"
              placeholder="nft@rocketseat.com.br"
              className="text-black-100 text-xl bg-black-700 py-5 pl-5 pr-6"
            />
            <button className="font-bold text-xl text-black-900 bg-white py-5 px-6">
              Enviar
            </button>
          </span>
        </div>
        <div className="w-[1px] bg-black-100 mx-auto"></div>
        <div className="flex gap-32 py-16 mx-auto">
          <ul className="text-xl text-black-100 leading-relaxed">
            <span className="text-xl font-bold text-white">Empresa</span>
            <li>
              <a href="##" className="cursor-pointer">
                Sobre
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Serviços
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Time
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Carreira
              </a>
            </li>
          </ul>
          <ul className="text-xl text-black-100 leading-relaxed">
            <span className="text-xl font-bold text-white">Mapa</span>
            <li>
              <a href="##" className="cursor-pointer">
                Galeria
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Popuplares
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Vendas
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Contato
              </a>
            </li>
          </ul>
          <ul className="text-xl text-black-100 leading-relaxed">
            <span className="text-xl font-bold text-white">Links</span>
            <li>
              <a href="##" className="cursor-pointer">
                FAQs
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Termos
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Política
              </a>
            </li>
            <li>
              <a href="##" className="cursor-pointer">
                Ajuda
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='flex py-20 px-20 justify-between'>
        <div>
          <h4><a href="http://www.rocketseat.com.br" target="_blank" className="text-black-100">www.rocketseat.com.br</a></h4>
        </div>
        <div>
          <ul  className='flex gap-12'>
            <li>
              <a href="https://www.instagram.com/rocketseat_oficial/" target="_blank">
                <InstagramLogo size={32} className="text-black-100" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/c/RocketSeat" target="_blank">
                <YoutubeLogo size={32} className="text-black-100" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/rocketseat" target="_blank">
                <TwitterLogo size={32} className="text-black-100" />
              </a>
            </li>
            <li>
              <a href="##">
                <EnvelopeSimple size={32} className="text-black-100" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
