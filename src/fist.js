const usres=[{
    name:"lovetoday",
    img:"https://th.bing.com/th/id/R.15b5f25ea89456d5570b2873326186e7?rik=VfFvi%2bFEAoaC9Q&riu=http%3a%2f%2ftnhits.xyz%2fimgfiles%2fLove+Today+(2022)-2022.jpg&ehk=%2fWiOuHn5VW2po4eekJ4lZH3G3BaxliW9bH9AjFTwjgg%3d&risl=&pid=ImgRaw&r=0",
    rate:"⭐9.1",
    parag:"Two young lovers, who are made to exchange their phones for a day and what happens due to that."
  },{
    name:"THOR ",
    img:"https://th.bing.com/th/id/OIP.zGFqaQ0rXpmL7VSoL8QmDAHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    rate:"⭐5.1",
    parag:"Two young lovers, who are made to exchange their phones for a day and what happens due to that."
  
  },{
    name:"AVATAR",
    img:"https://th.bing.com/th/id/OIP.HpJe73SSO9R0EbrUME_yiQHaLH?pid=ImgDet&rs=1",
    rate:"⭐9.7",
    parag:"Two young lovers, who are made to exchange their phones for a day and what happens due to that."
  
  },{
    name:"DOCTOR",
    img:"https://img.gurugamer.com/resize/740x-/2021/05/13/doctor-strange-in-the-multiverse-of-madness-2022-0b24.jpg",
    rate:"⭐7.1",
    parag:"Two young lovers, who are made to exchange their phones for a day and what happens due to that."
  
  }]
  
  
  return(
    
  <div className='container'>
  
      
      {usres.map((nm)=>(
  <User name={nm.name}  rate={nm.rate} img={nm.img} parag={nm.parag}/> 
    ))}
   
   
  
  </div>
  );
  
  
  function User({name,rate,img,parag}){
    // console.log(props,typeof props);
    return(
        <section>
          <div className='md-4'>
          <img className='pic' src={img}/>
    <h1 className='font'>{name}<span className='only'>{rate}</span></h1>
    
    <p>{parag}</p>
    </div>
    </section>
    )
  }