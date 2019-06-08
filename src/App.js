import React, { Component} from 'react';
import Projects from './Projects';
import Social from './Social';
import './index.css';
import profile from './assets/profile.png'

class App extends Component{
    state = {displayBio:false    };
    // constructor(){
    //     super();
    //     this.state={ displayBio : false };
    //     this.toggleDisplay = this.toggleDisplay.bind(this);
        
    // }

    // readMore(){
    //     this.setState({displayBio:true});
    // }
    // showLess(){
    //     this.setState({displayBio:false});
    // }
    toggleDisplay = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        
        
    
        return (
           
            <div>
                <img src={profile} alt='profile' className="profile"></img>
                <h1>
                    Hello!
                </h1>
                <p>My name is Manas Yadav. I am a React Developer</p>
                <p>I am looking forward to become a great Developer</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p>I live in Banglore and i code and post every day.</p>
                        <p>I code in JavaScript</p>
                        <p>My fav framework is going to be React.js</p>
                        <button onClick={this.toggleDisplay}
                        nnn>ShowLess</button>
                        </div>
                    ) :(
                        <div>
                            <button onClick={this.toggleDisplay} className='btn btn-primary'>Read More</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <Social/>
            </div>
        )
    }
}


export default App;