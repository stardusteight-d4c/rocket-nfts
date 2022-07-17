import CardArtists from '../components/CardArtists'
import CardImg from '../components/CardImg'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import LightSpeed from 'react-reveal/LightSpeed'

import avatars from '../assets/avatars.png'
import badge from '../assets/badge.svg'
import gallery1 from '../assets/cards/gallery1.png'
import gallery2 from '../assets/cards/gallery2.png'
import banner2077 from '../assets/banner2077.png'

import astronauta1 from '../assets/cards/astronauta-1.png'
import astronauta2 from '../assets/cards/astronauta-2.png'
import astronauta3 from '../assets/cards/astronauta-3.png'
import astronauta4 from '../assets/cards/astronauta-4.png'

import artista1 from '../assets/artists/artista-1.png'
import artista2 from '../assets/artists/artista-2.png'
import artista3 from '../assets/artists/artista-3.png'
import artista4 from '../assets/artists/artista-4.png'
import artista5 from '../assets/artists/artista-5.png'
import artista6 from '../assets/artists/artista-6.png'

import arrowRed from '../assets/arrowRed.svg'

function Home() {
  return (
    <main>
      <header 
        className="h-[1000px] bg-[url('../assets/background.png')] bg-no-repeat bg-cover md:h-[800px]"
        id="home"
      >
        <Zoom>
          <div className='md:bg-black-700 md:text-center md:my-8'>
            <Nav />
          </div>
          <section className="2xl:px-[13rem] flex px-20 mt-[6.15rem] gap-10 items-start md:block md:px-7 md:text-center">
            <div className="mx-auto text-lg md:hidden 2xl:text-xl">
              Mercado digital para colecionáveis em criptos e tokens não
              fungível (NFT). Compre, venda e descubra ativos digitais
              exclusivos para você.
              <div className="w-full mt-[3.44rem] flex">
                <img
                  src={avatars}
                  width={170}
                  height={88}
                  className="cursor-pointer"
                />
                <span className="self-end ml-[6px] cursor-pointer">
                  <strong>+10</strong>
                  <br /> Artistas selecionados
                </span>
              </div>
            </div>
            <div className="mx-auto text-5xl font-bold mt-[-2px] md:text-4xl md:leading-relaxed md:mb-10 2xl:text-5xl">
              Descubra a verdadeira arte digital e colecione diversas{' '}
              <strong className="text-red-300">NFTs</strong>
            </div>
            <div className="m-auto w-full max-w-[200px] 2xl:max-w-[250px] md:animate-spin-slow">
              <img src={badge} width={200} height={200} />
            </div>
          </section>

          <section className="mt-[100px] px-20 overflow-x-hidden">
              <img src={gallery1} className="mb-[55px] animate-marquee mx-0 px-0 md:hidden" />
              <img src={gallery2} className="mb-[55px] animate-marquees mx-0 px-0 md:hidden" />
          </section>
        </Zoom>
      </header>

      <section className="bg-black-700 flex border-b-[2px] border-black-200 md:block md:border-none">
        <aside className="w-full max-w-[25vw] h-[100vh]  border-r-[2px] border-black-200 flex flex-col justify-evenly items-center md:hidden">
          <Fade left>
            <div className="text-center">
              <h2 className="text-[3.15rem] font-bold">10K+</h2>
              <span className="text-xl font-bold text-black-100">Artes</span>
            </div>
            <div className="text-center">
              <h2 className="text-[3.15rem] font-bold">200+</h2>
              <span className="text-xl font-bold text-black-100">Vendas</span>
            </div>
            <div className="text-center">
              <h2 className="text-[3.15rem] font-bold">20</h2>
              <span className="text-xl font-bold text-black-100">Artistas</span>
            </div>
          </Fade>
        </aside>

        <div className="relative">
          <div className="flex gap-32 p-16 md:block 2xl:px-[13rem] 2xl:pt-24">
            <Fade bottom>
              <div>
                <p className="text-lg mb-14 md:text-justify 2xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Congue malesuada amet pretium lacus. Id{' '}
                  <a href="#" className="text-red-300 underline">
                    potenti diam
                  </a>{' '}
                  et cras odio viverra. Amet, velit ut hac sit. Enim ultricies
                  mauris mattis nunc semper.
                </p>
                <a className="text-red-300 underline cursor-pointer">
                  Lorem ipsum
                </a>
              </div>
            </Fade>
            <Fade bottom>
              <div>
                <p className="text-lg mb-14 md:hidden 2xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Congue malesuada amet pretium lacus. Id{' '}
                  <a href="#" className="text-red-300 underline">
                    potenti diam
                  </a>{' '}
                  et cras odio viverra. Amet, velit ut hac sit. Enim ultricies
                  mauris mattis nunc semper.
                </p>
                <a className="text-red-300 underline cursor-pointer md:hidden">
                  Lorem ipsum
                </a>
              </div>
            </Fade>
          </div>
          <Fade right>
            <img src={banner2077} className="absolute bottom-0 block md:relative md:object-cover" />
          </Fade>
        </div>
      </section>

      <section className="px-20 2xl:px-[13rem] mt-36 min-h-[100vh] mb-36 md:mt-14 md:px-7 md:text-center">
        <LightSpeed left>
          <h1 className="text-5xl font-bold mb-28 md:text-3xl 2xl:ml-[68px]">
            <strong className="text-red-300">Populares</strong> da semana
          </h1>
        </LightSpeed>
        <div className="grid w-full grid-cols-3 justify-items-center md:flex md:flex-col md:items-center">
          <Rotate top left>
            <div>
              <div className="mb-24">
                <CardImg
                  title="Astronauta 1"
                  author="Mayk Brito"
                  rkt={1.5}
                  image={astronauta1}
                />
              </div>
              <div className='md:mb-24'>
                <CardImg
                  title="Astronauta 3"
                  author="João Inácio (Biro)"
                  rkt={3.75}
                  image={astronauta3}
                />
              </div>
            </div>
          </Rotate>
          <div className="w-[2px] bg-black-200"></div>
          <Rotate top right>
            <div>
              <div className="mb-24">
                <CardImg
                  title="Astronauta 2"
                  author="Jakeliny Gracielly"
                  rkt={2.0}
                  image={astronauta2}
                />
              </div>
              <div>
                <CardImg
                  title="Astronauta 4"
                  author="Tamires Santos"
                  rkt={4.3}
                  image={astronauta4}
                />
              </div>
            </div>
          </Rotate>
        </div>
      </section>

      <section className="px-20 md:px-0 md:text-center 2xl:px-[13rem]">
        <div className="w-full">
          <LightSpeed left>
            <h1 className="text-5xl font-bold md:text-3xl 2xl:ml-[68px]">
              Melhores <strong className="text-red-300">artistas</strong>
            </h1>
          </LightSpeed>
          <div className="mt-[120px] grid grid-cols-3 justify-items-center mb-14 md:block">
            <div>
              <div className="mb-20">
                <CardArtists image={artista1} author="Mayk Brito" pics={80} />
              </div>
              <div className='md:mb-20'>
                <CardArtists
                  image={artista4}
                  author="Tamires Santos"
                  pics={43}
                />
              </div>
            </div>
            <div>
              <div className="mb-20">
                <CardArtists image={artista2} author="Jakeliny G." pics={99} />
              </div>
              <div className='md:mb-20'>
                <CardArtists image={artista5} author="Ana Silva" pics={28} />
              </div>
            </div>
            <div>
              <div className="mb-20">
                <CardArtists
                  image={artista3}
                  author="João I. (Biro)"
                  pics={50}
                />
              </div>
              <div>
                <CardArtists image={artista6} author="Diego F." pics={20} />
              </div>
            </div>
          </div>
          <div className="group text-center text-xl font-normal cursor-pointer mb-[9.75rem]">
            <span className="inline mr-4">Ver todos os artistas</span>
            <img
              src={arrowRed}
              className="inline animate-bounce group-hover:animate-none"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
