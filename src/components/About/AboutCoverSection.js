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
            PohištvoSi je namenjen pomoči ljudem pri preoblikovanju njihovih življenj z zagotavljanjem vsega, kar potrebujejo za ustvarjanje lepih, organiziranih in zdravih domov.
            </h2>
            <p className='font-medium  mt-4 text-base'>
            Naši uredniki so strokovnjaki za vse, od DIY do oblikovanja, tako da, ko ste pripravljeni na projekt, vendar niste prepričani, kje začeti, vam bomo pomagali, da ga oživite. Našli boste ogromno rešitev za majhne prostore in preprostih ponovnih nastavitev, ki jih lahko poskusite; najnovejši in najboljši triki za organiziranje, ki bodo navdihnili vaše naslednje globinsko čiščenje; nasveti nepremičninskih profesionalcev in strokovnjakov o nakupu in najemu; vse podrobnosti, ki jih morate vedeti o naslednjem velikem trendu dekoracije doma in stilov, da boste vedno v koraku z vsemi trendi; in še veliko več na naši strani.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection