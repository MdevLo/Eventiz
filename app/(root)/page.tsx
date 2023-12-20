import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section className="bg bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">
          Accueillir, connecter, célébrer : Vos événements, notre plateforme !
          </h1>
            <p className="p-regular-20 md:p-regular-24">
            Réservez et apprenez des conseils utiles de plus de 3 168 mentors 
            dans des entreprises de renommée mondiale grâce à notre communauté mondiale.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explorez maintenant
              </Link>
            </Button>
        </div>
        <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
      </div>
    </section>
  
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
     <h2 className="h2-bold">
     La confiance par <br /> milliers d'événements
     </h2>
    </section>
    
    <div className="flex w-full flex-col gap-5 md:flex-row">
         
        </div>
   </>
    
  )
}
