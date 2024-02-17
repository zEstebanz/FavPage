import Image from 'next/image'
import Link from 'next/link';
import CardPage from '../components/CardPage'

export default function Home() {

 
  return (
    <main>
      <section className='section-port min-h-screen h-auto bg-white dark:bg-black pt-[100px]'>
        <h1 className="text-black dark:text-white text-6xl md:text-8xl text-center font-bold">FavPag<span className='text-[#30b388]'>e</span></h1>
        <CardPage></CardPage>
      </section>
    </main>
  )
}
