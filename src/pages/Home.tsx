import CardArtists from '../components/CardArtists'
import CardImg from '../components/CardImg'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function Home() {
  return (
    <main>
      <header
        className="h-[1000px] bg-[url('../assets/background.png')] bg-no-repeat bg-cover"
        id="home"
      >
        <Nav />
        <section className="flex px-20 mt-[6.15rem] gap-10 items-start">
          <div className="mx-auto text-lg">
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
            <div className="w-full mt-[3.44rem] flex">
              <img
                src="../assets/avatars.png"
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
          <div className="mx-auto text-5xl font-bold mt-[-1px]">
            Descubra a verdadeira arte digital e colecione diversas{' '}
            <strong className="text-red-300">NFTs</strong>
          </div>
          <div className="m-auto w-full max-w-[200px]">
            <img src="../assets/badge.svg" width={200} height={200} />
          </div>
        </section>

        <section className="mt-[100px] px-20 overflow-x-hidden">
          <div className="mb-[55px] animate-marquee">
            <img src="../assets/cards/gallery1.png" />
          </div>
          <div className="animate-marquee2">
            <img src="../assets/cards/gallery2.png" />
          </div>
        </section>
      </header>

      <section className="bg-black-700 h-[100vh] flex border-b-[1px] border-black-200">
        <aside className="w-full max-w-[25vw] h-[100vh] border-r-[1px] border-black-200 flex flex-col justify-evenly items-center">
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
        </aside>

        <div className='relative'>
          <div className="flex p-16 gap-32">
            <div>
              <p className="text-lg mb-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id{' '}
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
            <div>
              <p className="text-lg mb-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id{' '}
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
          </div>
            <img src="../assets/banner2077.png" className='block bottom-0 absolute'/>
        </div>
      </section>

      <section className="px-20 mt-36 min-h-[100vh] mb-36">
        <h1 className="mb-28 text-5xl font-bold">
          <strong className="text-red-300">Populares</strong> da semana
        </h1>
        <div className="grid grid-cols-3 justify-items-center w-full">
          <div>
            <div className="mb-24">
              <CardImg
                title="Astronauta 1"
                author="Mayk Brito"
                rkt={1.5}
                image="../assets/cards/astronauta-1.png"
              />
            </div>
            <div>
              <CardImg
                title="Astronauta 3"
                author="João Inácio (Biro)"
                rkt={3.75}
                image="../assets/cards/astronauta-3.png"
              />
            </div>
          </div>
          <div className="w-[1px] bg-black-200"></div>
          <div>
            <div className="mb-24">
              <CardImg
                title="Astronauta 2"
                author="Jakeliny Gracielly"
                rkt={2.0}
                image="../assets/cards/astronauta-2.png"
              />
            </div>
            <div>
              <CardImg
                title="Astronauta 4"
                author="Tamires Santos"
                rkt={4.3}
                image="../assets/cards/astronauta-4.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-20">
        <div className="w-full">
          <h1 className="text-5xl font-bold">
            Melhores <strong className="text-red-300">artistas</strong>
          </h1>
          <div className="mt-[120px] grid grid-cols-3 justify-items-center mb-14">
            <div>
              <div className="mb-20">
                <CardArtists
                  image="../assets/artists/artista-1.png"
                  author="Mayk Brito"
                  pics={80}
                />
              </div>
              <div>
                <CardArtists
                  image="../assets/artists/artista-4.png"
                  author="Tamires Santos"
                  pics={43}
                />
              </div>
            </div>
            <div>
              <div className="mb-20">
                <CardArtists
                  image="../assets/artists/artista-2.png"
                  author="Jakeliny G."
                  pics={99}
                />
              </div>
              <div>
                <CardArtists
                  image="../assets/artists/artista-5.png"
                  author="Ana Silva"
                  pics={28}
                />
              </div>
            </div>
            <div>
              <div className="mb-20">
                <CardArtists
                  image="../assets/artists/artista-3.png"
                  author="João I. (Biro)"
                  pics={50}
                />
              </div>
              <div>
                <CardArtists
                  image="../assets/artists/artista-6.png"
                  author="Diego F."
                  pics={20}
                />
              </div>
            </div>
          </div>
          <div className="group text-center text-xl font-normal cursor-pointer mb-[9.75rem]">
            <span className="inline mr-4">Ver todos os artistas</span>
            <img
              src="../assets/arrowRed.svg"
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
