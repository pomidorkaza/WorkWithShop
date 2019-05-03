import React from 'react';
import HandbagData from '../src/data/bags';


const BtnStyles={  position: 'absolute',
  color: '#fff',
  left: '40%',
  top:'90%',
  borderRadius:'40px',
  textDecoration:'none',
backgroundImage: `linear-gradient(45deg,skyblue -50%,purple 150%)`,
fontSize:'25px'
};
class Handbag extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={visible:''}
    this.onMouseChange=this.onMouseChange.bind(this);
  } 
  onMouseChange(e){
  console.log(e.target.value);
  }
  render(){
      return <div className="handbag">
 
       
      {HandbagData.map((item,index)=>{
        if(this.state.visible==index){

          return   <div onMouseLeave={e=>{this.setState({visible:''})}}   className="Text" key={index}> 
 
       <h3 className="header-bag">{item.name}</h3>
       <h1 className="Cost">$ {item.cost} </h1>
      <div className="img-btn">
       <img   className="handbag-img" src={item.imgURL}></img>
                  <button style={{...BtnStyles}} className={`btn-${item.id}`} >Add to Cart</button>
     </div>
      </div> ; };
           return   <div  onMouseOver={e=>{this.setState({visible:index})}} onMouseLeave={e=>{this.setState({visible:''})}} className="Text" key={index}> 
        <h3 className="header-bag">{item.name}</h3>
        <h1 className="Cost">$ {item.cost} </h1>
        <img   className="handbag-img" src={item.imgURL}></img>
        
       </div> ; 
      }) 
       } </div>
    }
  }

  export default Handbag;