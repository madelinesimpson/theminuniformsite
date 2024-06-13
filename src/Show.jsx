import React, { useEffect, useState } from 'react';
import './Show.css';

export default function Show () {
    const [data, setData] = useState([]);
    var dateModified = false;

    var shows = [];
    
    const fetchInfo = () => {
      return fetch('https://rest.bandsintown.com/artists/Them%20In%20Uniform/events/?app_id=6547b3d6872e40dbf0629ec229214368&date=past')
        .then((res) => res.json())
        .then((data) => setData(data))
        .then(console.log(data))
    }

    useEffect(() => {
      fetchInfo();
    }, []);

    console.log(data);

    if(data.length==0) {
      return (
        <>
          <div className = "comingsoon">
            <h1>We don't have any upcoming shows right now :( <br/> Check back soon for updates
            </h1>
          </div>
        </>
      )
    }

    else {
      for(let i=0; i<data.length; i++) {
          const dateyear = data[i].datetime;
          const datemonth = data[i].datetime;
          const dateday = data[i].datetime;
          const digitsyear = dateyear.substring(0,4);
          var digitsday = dateday.substring(8,10);
          if (digitsday.substring(0,1)=="0") {
            digitsday = digitsday.substring(1,2);
          }
          const monthNumber = datemonth.substring(5,7);
          var digitsmonth = "";
          if (monthNumber=="04") {
            digitsmonth="April";
          }
          console.log(data[i]);
          var MDY = digitsmonth + " " + digitsday + ", " + digitsyear;
          data[i]["MDY"] = MDY;
     }

      return (
            <>
                {data.map((data) => (
                    <div className="show">
                      <h1>{data.MDY}</h1>
                      <h1>{data.venue.city}, {data.venue.region}</h1>
                      <h1>{data.venue.name}</h1>
                      <a href={data.url} target="_blank">
                        <h1>More Info</h1>
                      </a>
                    </div>
                ))}
                <h1 className="extra">More show announcements coming soon</h1>
            </>
          );
    }
}