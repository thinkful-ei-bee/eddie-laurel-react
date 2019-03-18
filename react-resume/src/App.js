import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" role="banner">
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@.V1_UX214_CR0,0,214,317_AL.jpg" alt="A picture of me" />

        <h1>Laurel Butler</h1>
          <address>
            <a
              className="App-link"
              href="tel:1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call Me!
            </a>
            <p>
              Email me here: <a href="mailto:laurelbutler126@gmail.com">Laurel Butler</a>
            </p>
          </address>
        </header>
        <main>
  <section role="region">
    <h2>Education</h2>
    <ul>
    <li>Thinkful, Inc. Engineering Immersion
   December 2018- Current</li>
    <li>Langston Hughes High School:
       2009-2012</li>
   </ul>
  </section>

<section role="region">
   <h2>Employment History</h2>
   <h3>Superica - Server - December 2016- Current</h3>
   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Fugit, itaque quia iure optio distinctio sit repudiandae!
       Quisquam ipsa soluta quasi incidunt nesciunt velit veritatis modi tempora magni repellendus.
       Dicta, tenetur.</p>

   <h3>City International School - Kindergarten Teacher - August 2014- March 2016</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Numquam aliquam quisquam repellendus ipsum aliquid?
           Porro incidunt rem consectetur animi facere corporis!
           Dolorem quod perferendis accusamus sint ducimus debitis corporis nisi.</p>
</section>
      </main>
      </div>
    );
  }
}

export default App;
