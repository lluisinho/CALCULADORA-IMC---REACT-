import { useState } from 'react';
import styles from './App.module.css';
import leftarrow from './assets/leftarrow.png'
import poweredImage from './assets/powered.png'
import { levels, calculteIMC, level1 } from './helpers/imc'
import { GridItem } from './components/GridItem/GridItemIndex'


const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [wighthtField, setweightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level1 | null>(null)



  const handleCalculateButton = () => {
    if (heightField && wighthtField) {
      setToShow(calculteIMC(heightField, wighthtField))
    
    } else (
      alert("Digite todos os campos!")
    )
  }

  const handlebackButton = () => {
    setToShow(null)
    setHeightField(0)
    setweightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='' width={150}></img>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calcule seu IMC </h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder='Digite sua altura em metros'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder='Digite o seu peso'
            value={wighthtField > 0 ? wighthtField : ''}
            onChange={e => setweightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
        
        
          <button onClick={handleCalculateButton} disabled={toShow ? true : false} >Calcular</button>

        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }{toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handlebackButton}>
             
              <img src={leftarrow} alt="" width={25} />
              </div>
                <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App