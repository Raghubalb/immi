import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
// import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
       <Navbar/>
        <Hero/>
        <div className='container'>
          <Title subTitle='Our Program' title='what we Offer'/>
          <Programs/>
          <Title subTitle='' title='About Us'/>
          <About/>
          {/* <Title subTitle='Gallery' title='Campus Photos'/> */}
          {/* <Campus/> */}
          <Title subTitle='Our Work' title='What We Do'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get us'/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
