import React, { Component } from 'react';
import Restaurant from './Restaurant';

class RestautantHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    modal : false,
                    data : []};
    }
    render() { 

        this.createdata=(json)=>{
            const obj=[]
            let i=0
            for (const restaurant of json.businesses) {
                obj.push([])
                obj[i].push(restaurant.name)
                obj[i].push(restaurant.id)
                obj[i].push(restaurant.rating)
                obj[i].push(restaurant.is_closed)
                obj[i].push(restaurant.distance)
                obj[i].push(restaurant.image_url)
                obj[i].push(restaurant.display_phone)
                obj[i].push(restaurant.categories)
                obj[i].push(restaurant.url)
                i++
           }
           this.setState({data:obj})
        }
        
        this.getdata = () => {
            let lat = this.props.coords[0]
            let long = this.props.coords[1];
            console.log(lat,long)
            lat = lat.toString()
            long = long.toString()
            fetch("http://localhost:3050/" + lat + "/" + long)
            .then(response => response.json())
            .then(json => this.createdata(json))
        }

        return ( 
            <div className="p-3 bg-opacity-10 border border-danger rounded-start rounded-end border-3" 
            style={{display:'flex', flexDirection:'column', color:'black', backgroundColor:'gray', marginLeft:'10%',marginRight:'10%', minHeight:'800px'}}>
                
                <button className="btn btn-danger" 
                onClick={this.getdata}>Get Restaurants</button>
                
                {
                    this.state.data.map((restaurant)=>(
                        <Restaurant 
                        name={restaurant[0]}
                        key={restaurant[1]}
                        rating={restaurant[2]}
                        business_status={restaurant[3]}
                        distance={restaurant[4]}
                        image_url={restaurant[5]}
                        phone={restaurant[6]}
                        categories={restaurant[7]}
                        url={restaurant[8]}/>
                    ))
                    
                }

                    
            </div>
         );
    }

}
 
export default RestautantHolder;
