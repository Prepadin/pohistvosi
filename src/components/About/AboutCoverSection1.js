import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="CodeBucks" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Stopite v stik
            </h2>
            <p className='font-medium  mt-4 text-base'>
            Radi bi slišali vaše mnenje! Ne glede na to, ali imate vprašanje, potrebujete pomoč ali se želite samo pozdraviti, se lahko obrnete na spodnji obrazec ali prek navedenih kontaktnih podatkov.

            </p>
            <br></br>
            <p className='font-bold capitalize text-2xl xs:text-2xl sxl:text-2xl  text-center lg:text-left'>
            <br></br>
            E-pošta: info@pasjahisa.si
            </p>
            <p>
            <br></br>
            Druga možnost je, da se povežete z nami na povezave do družbenih medijev.

            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection