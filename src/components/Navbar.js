import React, { Component } from 'react';

class Navbar extends Component {
    render() { 

        
        return ( 
            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger" 
            style={{display:'flex',justifyContent:'space-evenly', backgroundColor:'Black', alignContent:'center',}}>
                <h1 className="display-2"  style={{color:'Red',flexGrow:'1',
                textAlign:'center',fontFamily:'Copperplate'}}>Rutgers Eats</h1>
            </div>
         );
    }
}
 
export default Navbar;