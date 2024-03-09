import React from 'react'
import './TemporalHomeSection.css'
import { FaStar } from 'react-icons/fa'
import { IconContext } from 'react-icons';

import Knk from '../../assets/home/knkindex.jpg'
import Jjk from '../../assets/home/jjkindex2.jpg'
import Snk from '../../assets/home/snkindex.jpg'
import BleachI from '../../assets/home/bleachindex.jpg'
import Snf from '../../assets/home/snfindex.jpg'

const TemporalHomeSection = () => {
  return (
    <>
    <div className="container animeYear mb-3">

        <div className="row temporal-media">
            <div className="col d-flex justify-content-center align-items-center">
            <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
              <FaStar className='mb-2'/>
                <h2 className="fs-2">Best Anime of the year!</h2>
                <FaStar className='mb-2' />
                </IconContext.Provider>
               
              </div>
         </div>

         <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center">
              <h3 style={{marginBottom: '20px'}}>Kimetsu No Yaiba: Swordsmith Village Arc</h3>
              <img src={Knk} className="img-fluid w-100" alt="" style={{maxHeight: '90vh', objectFit: 'cover', marginBottom: '10px'}}/>
              <p className="fs-5" style={{wordWrap: 'break-word', textAlign: 'justify'}}>
                  In order to repair his damaged sword, Tanjiro along with his sister Nezuko, was assigned by the Demon Slayer Corps to travel to the Swordsmith Village. There, they meet the Love Hashira Mitsuri Kanroji, Mist Hashira Muichiro Tokito, and Genya Shinazugawa. While Tanjiro waiting for his sword to be reforged, the two Upper Rank demons: Gyokko and Hantengu, were sent by Muzan to destroy the village and wiped out the Demon Slayer Corps. Now, Tanjiro and his new allies must fight together to stop the demons and protect the village.
              </p>
          </div>
      </div>
         

        <div className="row">
            <div className="col d-flex flex-column align-items-center justify-content-center">
                <h3 style={{marginBottom: '20px'}}>Jujutsu Kaisen II</h3>
                <img src={Jjk} className="img-fluid w-100" alt="" style={{maxHeight: '90vh', objectFit: 'cover', marginBottom: '10px'}}/>
                <p className="fs-5" style={{wordWrap: 'break-word', textAlign: 'justify'}}>
                  Satoru Gojo and Suguru Geto were not always enemies. Long before they had what was supposed to be their final encounter during the Night Parade of a Hundred Demons, the pair were fellow students, rivals, and friends. In another world, they would have been the twin shining stars of Jujutsu Sorcery, but one fateful event destroyed any hope of that ever happening. Turn back the clock to witness the mission that drove them to curse one another beyond even death.
                </p>
            </div>
         </div>

         <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center">
              <h3 style={{marginBottom: '20px'}}>Shingeki no Kyojin: Kanketsu-hen</h3>
              <img src={Snk} className="img-fluid w-100" alt="" style={{maxHeight: '90vh', objectFit: 'cover', marginBottom: '10px'}}/>
              <p className="fs-5" style={{wordWrap: 'break-word', textAlign: 'justify'}}>
                The fate of the world hangs in the balance as Eren unleashes the ultimate power of the Titans. With a burning determination to eliminate all who threaten Eldia, he leads an unstoppable army of Colossal Titans towards Marley. Now a motley crew of his former comrades and enemies scramble to halt his deadly mission, as they attempt to stop him once and for all.
              </p>
          </div>
       </div>

       <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center">
            <h3 style={{marginBottom: '20px'}}>Bleach: Sennen Kessen-hen</h3>
            <img src={BleachI} className="img-fluid w-100" alt="" style={{maxHeight: '90vh', objectFit: 'cover', marginBottom: '10px'}}/>
            <p className="fs-5" style={{wordWrap: 'break-word', textAlign: 'justify'}}>
              With the secrets of his past and power finally revealed to him, Ichigo has reforged his Zanpakuto, and can now continue his training under the Zero Squad. However, time is not on his side; Ywach and his assembled Sternritter are on the warpath once more, ready to finish their destruction of Soul Society and complete their millennium-long vengeance. What's more, their ranks have grown, with Uryu Ishida joining his fellow Quincy in their blood war. When the fates of every soul in the universe are at stake, Ichigo must find the the strength to take on his own friend.
            </p>
        </div>
     </div>

     <div className="row">
      <div className="col d-flex flex-column align-items-center justify-content-center">
          <h3 style={{marginBottom: '20px'}}>Sousou no Frieren</h3>
          <img src={Snf} className="img-fluid w-100" alt="" style={{maxHeight: '90vh', objectFit: 'cover', marginBottom: '10px'}}/>
          <p className="fs-5" style={{wordWrap: 'break-word', textAlign: 'justify'}}>
            For ten years, elf mage Frieren traveled with Himmel the hero, Heiter the priest, and Eisen the dwarf warrior as they quested to destroy the demon king. At the end of their journey, Frieren set out on her own, not quite understanding how differently time flows for her versus her human companions. Reunited after fifty years only to see them wither and die, Frieren begins to ponder the nature of connections at a time when it's already too late to say goodbye.
          </p>
      </div>
   </div>
  </div>
  </>
  )
}

export { TemporalHomeSection }
