import {useState} from 'react'
import './index.css'

const FruitsCounterFunctional = () => {
  const [mango, setMango] = useState(0)
  const [banana, setBanana] = useState(0)

  const handleMangos = () => {
    setMango(mango + 1)
  }

  const handleBananas = () => {
    setBanana(banana + 1)
  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>
          Bob ate <span>{mango}</span> mangoes <span>{banana} </span> bananas
        </h1>
        <div className="fruits-container">
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <div>
              <button
                onClick={handleMangos}
                className="eat-mango"
                type="button"
              >
                Eat Mango
              </button>
            </div>
          </div>
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
            />
            <div>
              <button
                onClick={handleBananas}
                className="eat-banana"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FruitsCounterFunctional
