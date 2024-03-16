import {useEffect,useState} from 'react'
import schemes from "../../data/data.json";
import Card from "../Card";
import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './Navbar';
export default function Services() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    setData(schemes)
  },[])
  return (
    <div>
      <Navbar/>
    <div className='p-5' >
        <div className="p-14 pb-5 grid grid-cols-3">
      {
        
        data.length>0 && data.map((item) => {
          return (
            <div key={item.title} className="p-4 overflow-hidden">
            <Card
              image = {item.image}
              title={item.title}
              description={item.description}
              category = {item.category}
            />
            </div>
          ) 
        }
        )
      }
      </div>
    </div>
    <Footer/>
    </div>
  )
}