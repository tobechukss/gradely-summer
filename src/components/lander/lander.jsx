import lander_styles from '../../../styles/lander.module.css'
import Image from 'next/image'
export default function Lander() {
    return (
        <div className={`${lander_styles.lander_background}`}>
            <div className={`${lander_styles.container_grid} container_width`}>
                <div className={lander_styles.lander_div}>
                    <h1 className={lander_styles.lander_header}>Master difficult topics.
                        Get better grades </h1>
                    <p className={lander_styles.descr}>FOR PRIMARY & SECONDARY STUDENTS</p>
                    <button className='btn btn-secondary'>TAKE A PRE TEST</button>
                </div>
                <div className={lander_styles.hero_image}>
                <Image src={'/images/background_circle.png'} alt="logo" width={475} height={475} className={lander_styles.grid_image}/>
                <Image src={'/images/parentsphone.png'} alt="logo" width={258} height={600} className={lander_styles.grid_image}/>
                <Image src={'/images/tutor.png'} alt="logo" width={179} height={120} className={lander_styles.grid_image} />
                <Image src={'/images/featureone.png'} alt="logo" width={240} height={170} className={lander_styles.grid_image}/>
               
                <Image src={'/images/plays.png'} alt="logo" width={121} height={52} className={lander_styles.grid_image}/>
                <Image src={'/images/featuretwo.png'} alt="logo" width={250} height={68} className={lander_styles.grid_image}/>
                </div>

            </div>
        </div>


    )
}