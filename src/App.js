import logo from './logo.svg';
import './App.css';

const HeaderLink =({children="itemX", href="#"}) =>
<p class="name"><a href={href}>{children} </a></p>

const WindowCard =({title='Lorem Ipsum', img='img/pic.jpg', children, buttonText='Go'}) =>
<>
  <div className='window'>
  <img className='pic_img' src={img} alt={title}/>
  <h3>{title}</h3>
    <p>{children}</p>
  <button>{buttonText}</button>
  </div>
</>


function App() {
  return (
    
      <div class="container">

      <header>
          <img src="img/screenshot.png"/>
          <div class="menu">            
              <HeaderLink>Item 1</HeaderLink>
              <HeaderLink>Item 2</HeaderLink>
              <HeaderLink>Item 3</HeaderLink>
              <HeaderLink>Item 4</HeaderLink> 
              <HeaderLink>Item 5</HeaderLink>
          </div>
      </header>

      <div class="content">

            <div class="aside1"><p>Aside 1</p></div>

            <div class="middle">
                <div class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at porro ea commodi quidem nam deserunt quae aliquid, perspiciatis fuga temporibus quo assumenda nesciunt, fugit minus error veritatis placeat ullam!</div>

                <h2>OUR WORK</h2>

                <div class="windows">
                
                <WindowCard title='Lorem ipsum dolor sit amet'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur neque tenetur ut! Deleniti laborum modi fugit similique dolore nesciunt repudiandae. Dolores quod adipisci veritatis sint quisquam possimus nam qui.</WindowCard>
                <WindowCard title='Lorem ipsum dolor sit amet'>Lorem ipsum dolor sit amet.</WindowCard>
                <WindowCard title='Lorem ipsum dolor sit amet'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur neque tenetur ut!</WindowCard>
                <WindowCard title='Lorem ipsum dolor sit amet'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur neque tenetur ut! Deleniti laborum modi fugit similique dolore nesciunt repudiandae. Dolores quod adipisci veritatis sint quisquam possimus nam qui.</WindowCard>
                <WindowCard title='Lorem ipsum dolor sit amet'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur neque tenetur ut! Deleniti laborum modi fugit similique dolore nesciunt repudiandae. Dolores quod adipisci veritatis sint quisquam possimus nam qui.</WindowCard>
                <WindowCard title='Lorem ipsum dolor sit amet'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur neque tenetur ut! Deleniti laborum modi fugit similique dolore nesciunt repudiandae. Dolores quod adipisci veritatis sint quisquam possimus nam qui.</WindowCard>

                </div>
                
            </div>

            <div class="aside2"><p>Aside 2</p></div>

      </div>

      <footer class="footer"><p>Footer</p></footer>

    </div>
  
  );
}

export default App;
