import React, { Component } from 'react';
import Modalcomp from './Modalcomp';

class Restaurant extends Component {
    state={
        "business_status":""
    }
    roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }
    updatebusstatus(){
        let closed= "Closed"
        let open = "Open"
        if(!this.props.business_status){
            return open
        }else{
            return closed
        }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header" 
                style={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
                    <h4 style={{fontFamily:'monospace'}}>{this.props.name}</h4>
                    <Modalcomp
                    name={this.props.name}
                    rating={this.props.rating}
                    image={this.props.image_url}
                    phone={this.props.phone}
                    categories={this.props.categories}
                    url={this.props.url}
                    />
                </div>
                <div className="card-body">
                    {this.updatebusstatus()}
                    <br></br>
                    Distance: {this.roundToTwo(this.props.distance * 0.000621371)} miles
                </div>
                 
            </div>
         );
    }
}
 
export default Restaurant;