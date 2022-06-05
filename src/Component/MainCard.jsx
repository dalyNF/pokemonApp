import React , { useEffect,useState} from 'react';
import axios from "axios";



const MainCard = ()  => {
    
    const [cards, getCards] = useState([]);
    const [count, setCount] = useState(0);
    const [skillCount, setSkillCount] = useState(0);
    
    
    function launch (e) {
        e.preventDefault();
        let rdm = Math.floor(Math.random()*10);

        setCount((count) => {
            return count = rdm;
        });

        let rdm1 = Math.floor(Math.random()*2);
        setSkillCount((skillCount) => {
            return skillCount = rdm1;
        })
    }


    function stop (e) {
        e.preventDefault();
        console.log("stop")
    }

    useEffect( async() => {
            try {
                const res = await axios.get(`https://pokeapi-enoki.netlify.app/`);
                 return getCards(res.data.pokemons)
                
            } catch (error) {
            console.log(error);
        }
    },[])   

    // console.log(cards.length)
    console.log(count);
        
    

  return (
      
    <div >
        
        
        {cards.length > 0 && 
        <>
        <section className='mainCard'>

            <article className='cardName'>
                <h2>{cards[count].name}</h2>
                <div>{cards[count].level}</div>
            </article>

            <article className='cardImg'>
            <img src={cards[count].image} alt="pokemon"/>           
            </article>

            <article className='skill1'>
                <h2>{cards[count].abilities[skillCount].name}</h2>
                <div>{cards[count].abilities[skillCount].icon}</div>
                <p>{cards[count].abilities[skillCount].description}</p>
            </article>

            {/* {cards[count].abilities.length > 0 &&

            <article className='skill2'>
                <h2>{cards[2].abilities[0].name}</h2>
                <div>{cards[2].abilities[0].icon}</div>
                <p>{cards[2].abilities[0].description}</p>
            </article>
            } */}
            

        </section>
        {/* <section className='mainCard'>

            <article className='cardName'>
                <h2>{cards[count].name}</h2>
                <div>{cards[count].level}</div>
            </article>

            <article className='cardImg'>
            <img src={cards[count].image} alt="pokemon"/>           
            </article>

            <article className='skill1'>
                <h2>{cards[count].abilities[skillCount].name}</h2>
                <div>{cards[count].abilities[skillCount].icon}</div>
                <p>{cards[count].abilities[skillCount].description}</p>
            </article>

            <article className='skill2'>
                <h2>{cards[count].abilities[skillCount].name}</h2>
                <div>{cards[count].abilities[skillCount].icon}</div>
                <p>{cards[count].abilities[skillCount].description}</p>
            </article>
            

        </section> */}
        <section className='btnSection'>

            <button onClick={launch} className='launchBtn'>Lancer</button>
            
            
            <button onClick={stop} className='stopBtn'>Stop</button>
        </section>
        
        </>
        
        }
    </div>
  )
}

export default MainCard