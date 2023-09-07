import React from 'react'
import { useSearchParams } from 'react-router-dom'


const About = () => {

  const [searchData, setSearchData] = useSearchParams();
  // const [searchData2, setSearchData2] = useSearchParams('');


  const handleSubmit = () =>{
    let name = searchData.get('q');
    // let age = searchData.get('age')
    // alert(name + " " + age)
  }


  return (

    <div>

      <h1>About us page</h1>

      <form onSubmit={handleSubmit}>


        Search Name: <input onChange={(e)=>setSearchData({q: e.target.value})}
        type='text' /><br /><br />
        {/* Search Age: <input onChange={(e)=>setSearchData({age: e.target.value})}
        type='text' /><br /><br /> */}

        <button>Search</button>
      </form>

      

    </div>
  )
}

export default About
