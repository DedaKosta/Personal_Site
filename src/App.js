import "./App.css";
import Header from "./components/Header";
import ProfilePictures from "./components/ProfilePictures";
import Cards from "./components/Cards";
import Half from './components/Half'
import Scales from './components/Scales'
import Projects from './components/Projects'
import Profile from './components/Profile'
import HalfPicture1 from './Pictures/Half1.jpg'
import HalfPicture2 from './Pictures/Half2.jpeg'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState('main')

  const selectPage = (selectedPage) => {
    setPage(selectedPage)
  }

  switch (page) {
    case 'main':
      return (
        <div className="App" >
          <section>
            <Header onSelect={selectPage} />
          </section>

          <section>
            <ProfilePictures />
          </section>

          <section>
            <Cards />
          </section>

          <section>
            <Half
              firstHalf='picture'
              secondHalf='text'
              img={HalfPicture1}
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum,
           consequatur, molestiae animi a laboriosam nisi saepe doloribus officia. Sapiente et, dolore, molestias
            odit quas eum, impedit neque qui cupiditate error magni. Soluta at animi quibusdam sint officia. Labore
             sit soluta delectus minima explicabo quos ratione obcaecati.'
            />
          </section>

          <section>
            <Half
              firstHalf='text'
              secondHalf='picture'
              img={HalfPicture2}
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas, nihil quasi harum,
           consequatur, molestiae animi a laboriosam nisi saepe doloribus officia. Sapiente et, dolore, molestias
            odit quas eum, impedit neque qui cupiditate error magni. Soluta at animi quibusdam sint officia. Labore
             sit soluta delectus minima explicabo quos ratione obcaecati.'
            />
          </section>

          <section>
            <Scales />
          </section>

          <section>
            <Projects />
          </section>
        </div>
      );
    case 'profile':
      return (
        <div className='App'>
          <section>
            <Header onSelect={selectPage} />
          </section>
          <>
            <Profile />
          </>
        </div>
      );
    default:
      break
  }
}

export default App;
