// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="nav">
      <div className="titlescorecontainer">
        <div className="logoandtitle">
          <img
            className="emojilogo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scorescontainer">
            <p className="score">Score: {currentScore}</p>
            <p className="score top">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
