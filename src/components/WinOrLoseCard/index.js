// Write your code here.
import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? wonImage : loseImage
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="winorlostcard">
      <div className="detailssecton">
        <h1 className="gamestatus">{gameStatus}</h1>
        <p className="currentscorelabel">{scoreLabel}</p>
        <p className="currentscorevalue">{score}/12</p>
        <button
          type="button"
          className="playagainbutton"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="imagesection">
        <img className="winorlostimage" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
