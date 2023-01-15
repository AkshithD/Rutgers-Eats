import React, { Component } from 'react';

class Input extends Component {
    state={
        location:[],
        wordloc:""
    }
    render() { 
        
        this.setlocapp = (lat,long) =>{
            this.props.getfunc(lat,long)
            lat = lat.toString()
            long= long.toString()
            fetch("https://rutgers-eats-production.up.railway.app/google/"+lat + "/" + long)
            .then(response => response.json())
            .then(json => this.googleinfo(json))
        }
        this.googleinfo=(json)=>{
            let location = json.results[0].formatted_address
            this.setState({
                wordloc:location
            })
        }
        this.getuserloc = () => {
             navigator.geolocation.getCurrentPosition(
                 position=>{
                    this.setState({
                        location: [position.coords.latitude,position.coords.longitude]
                    })
                    this.setlocapp(position.coords.latitude,position.coords.longitude)
                 },
                error=>{
                    console.log(error)
                }
            )
        }

        return (
            <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <button className="btn btn-danger" onClick={()=>{
                        this.setState({
                            location:[40.554600,-74.458267]
                        })
                        this.setlocapp(40.554600,-74.458267)
                        }}>Livingston</button>
                    <button className="btn btn-danger" onClick={()=>{
                        this.setState({
                            location:[40.523411,-74.458717]})
                        this.setlocapp(40.523411,-74.458717)
                        }}>Busch</button>
                    <button className="btn btn-danger" onClick={()=>{
                        this.setState({
                            location:[40.502209,-74.451950]
                        })
                        this.setlocapp(40.502209,-74.451950)
                        }}>College ave</button>
                    <button className="btn btn-danger" onClick={()=>{
                        this.setState({
                            location:[40.484901,-74.436836]
                        })
                        this.setlocapp(40.484901,-74.436836)
                        }}>Cook and Douglass</button>
                </div>
                <br></br>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <input type="text" placeholder='Location'
                    defaultValue={this.state.wordloc} 
                    onChange={(e)=>{
                        let location = e.target.value
                        let i=0
                        let lat = ""
                        let long = ""
                        let temp=true
                        while(i<location.length){
                            if (location[i]===","){
                                temp=false;
                            }else{
                            if(temp===true){
                                lat=lat+location[i]
                            }else{
                                long=long+location[i]
                            }
                        }
                            i++;
                        }
                        this.setlocapp(parseFloat(lat),parseFloat(long))
                    }}></input>
                    <button className="btn btn-danger" onClick={this.getuserloc}>Get Your Location</button>
                </div>
            </div>
         );
    }
}
 
export default Input;
