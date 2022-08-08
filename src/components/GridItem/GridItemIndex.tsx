import { level1 } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'


type Props = {
    item: level1
}



export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>

                {/* Os dois fazem a mesma coisa  */}

                {/* {item.icon === 'up' && <img src={upImage} alt="" width='30'/>}
            {item.icon === 'down' && <img src={downImage} alt="" width='30'/>} */}



                <img src={item.icon === 'up' ? upImage : downImage} alt="" width='30' />

            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && 
                <div className={styles.yourImc} >Seu imc é de  {item.yourImc} KG/m²</div>
            }
            <div className={styles.gridInfo}>
            <>
                IMC Está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
            </div>
        </div>

    )
}