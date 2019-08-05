import React, { Component } from 'react';
import '../App.css';

var guess=[];

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
class Cards extends Component {
    state = {
        cards: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        score:0,
        topScore:0,
        message:`Click a Character but don't do it twice because you will lose`

    };

    handleOnClick = elem => {
    
        const sArray = shuffleArray(this.state.cards);
        const key = elem.target.id;
        
        if(guess.includes(key)){
            guess=[];
            return this.setState({
				cards: shuffleArray(sArray),
				message: 'You lose!',
				score: 0
			})
        }else{
            guess.push(key);
            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;
			return this.setState({
				cards:shuffleArray(sArray) ,
				message: 'You Guessed!',
				score: newScore,
				topScore: newTopScore,
			})
        }
      };
    
    render() {
        
        const card = this.state.cards.map((cards,i) => {
            return(
                    
                    <div className ="col s3" key={cards} onClick={this.handleOnClick}>
                    <div className="Card z-depth-3 section" >
                        <div className="card-image">
                            <img src={"./img/"+cards+".jpeg"} alt="" id={cards}></img>
                        </div>
                    </div>
                    </div>
                
            
            )            
        })
        return (
            <div>

            
            <div className = "navbar-fixed" >
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <a href="#!" className="brand-logo">Memory Game</a>
                    <ul className="right hide-on-med-and-down">
                        <li><span className="badge white">{this.state.message}</span></li>
                        <li><span className="badge white">Score: {this.state.score} | Top Score: {this.state.topScore}</span></li>
                    </ul>
                </div>
            </nav>
            </div >
            <div className="container">
            <div className="row">
                
                {card}
            </div>
            </div>
            
            </div>
            
            
        );
    }
}

export default Cards;

