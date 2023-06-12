import lander_styles from '../../../styles/lander.module.css'

export default function Lander() {
    return (
        <div className={lander_styles.lander_background}>
            <div className={lander_styles.container_grid}>
                <div>
                    <h1 className={lander_styles.lander_header}>Master difficult topics.
                        Get better grades </h1>
                </div>
                <div>The Best and Brightest Tutors for Your Childs Needs</div>

            </div>
        </div>


    )
}