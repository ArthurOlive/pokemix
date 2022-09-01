import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {

  const pokemons = ["bulbassauro", "charmander", "picachu", "squarder"] 
  const [pokemon, setPokemon] = useState<string>(pokemons[0]);
  const [pokebolas, setPokebolas] = useState<number>(3);
  const [lastMessage, setLastMessage] = useState<string>("");

  const next = (proxPrev : String) => {
    if (proxPrev === "PROX") {
      const pos = pokemons.indexOf(pokemon) + 1;
      if (pos == pokemons.length) setPokemon(pokemons[0])
      else setPokemon(pokemons[pos]) 
    } else if (proxPrev === "PREV"){
      const pos = pokemons.indexOf(pokemon) - 1;
      if (pos < 0) setPokemon(pokemons[pokemons.length - 1])
      else setPokemon(pokemons[pos]) 
    }
  }

  const capture = () => {
    const randInt = Math.round(Math.random() * 10)
    if (randInt % 2 == 0) {
      setLastMessage("Capturou")
      next("PROX")

    }else {
      setLastMessage("Escapou")
    }
    setPokebolas(pokebolas - 1)
  }

  return (
    <div >
      <Head>
        <title>Pokemix</title>
        <link rel='icon' href='pokebola.png'></link>
      </Head>

      <main className='bg-gradient-to-t from-purple-700 to-orange-600 w-screen h-screen flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col justify-center items-center'>
          <img src="pokemon.png" className='h-24'/>
          <h3 className='text-xl text-white font-custom'>Capture os seus pokemons</h3>
        </div>
        <div className='flex items-center gap-3'>
          <button className='font-bold text-3xl text-white h-16 w-16 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] flex justify-center items-center rounded-lg' onClick={() => next("PROX")}><span>{'<'}</span></button>
          <div className='h-60 w-80 bg-[rgba(0,0,0,0.2)] rounded-lg flex justify-center items-center'>
           
            <img src={`${pokemon}.png`} className='w-32 h-32'/>
            
          </div>
          <button className='font-bold text-3xl text-white h-16 w-16 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)] flex justify-center items-center rounded-lg' onClick={() => next("PREV")}><span>{'>'}</span></button>
        </div>
        <div className='flex w-80 gap-2'>
          {
            Array.from(Array(pokebolas).keys()).map((k, x) => 
              <img src='pokebola.png' className='w-9 h-9' key={k}/>
            )
          }
        </div>
        <div>
          <button className='bg-red-500 hover:bg-red-600 w-80 h-16 rounded-lg text-white' disabled={pokebolas == 0} onClick={() => capture()}>Capturar</button>
        </div>
        <div className='text-white'>
          {lastMessage}
        </div>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}

export default Home
