//echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const element = <h1>This is H1 tag element</h1>

ReactDOM.render(<App/>,document.getElementById('root'));




























// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         console.log("I am ",this.age,"years old");        
//     }
// }

// const animal1 = new Animal('Kela',24);
// animal1.speak();

// class Lion extends Animal {
//     constructor(name,age,furColor, speed){
//         super(name,age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }
//     roar(){
//         console.log("Rooooar!! I have", this.furColor, "fur , and i can run", this.speed,"miles per hour");
        
//     }

// }

// const lion1 = new Lion("Mufasa",20,"golden", 25);
// lion1.speak();
// lion1.roar();
// console.log(lion1);

//Rendering A Component using function component 
// function Welcome(props){
//     return <h1>Hello , {props.name}</h1>;
// }
// const ele = <Welcome name="Manas"/>;
// ReactDOM.render(ele,document.getElementById("root"));


//Updating only the required dom by mathcing the parent and the children to the previous one 
// function tick(){
//     const element = (
//         <div>
//             <h1>
//                 It is {new Date().toDateString()}
//             </h1>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById("root"));
// }


// setInterval(tick,1000);