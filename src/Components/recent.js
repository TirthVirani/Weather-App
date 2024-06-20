import React from 'react'

export default function recent(props) {
    let data;
    if(props.recent === null){
        data = ""
    }else{
        data = props.recent.map((recentData, id) => {
                return <li onClick={() => props.research(recentData.lat, recentData.lon, recentData.city)} key={id} style={{cursor:"pointer"}}>{recentData.city}</li>
            });
    }
  return (
    <div className='card border-primary text-center bg-transparent pt-3' style={{width:"150px", position:"absolute", left:"25px"}}>
        <h4 className='card-title'>Recent</h4>
        <ul className='list-unstyled'>
            {data}
        </ul>
    </div>
  );
}
