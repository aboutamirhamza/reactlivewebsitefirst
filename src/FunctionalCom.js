// Core Component Two Type
// 1) Functional Component
// Two) Class Component
// use Functional Component Single
// use Functional Component Double
// use Functional Component Nested
// use Class Component
// use Functional Component With State
// use Functional Component With State Make Data Update
// use Functional Component With State Make Counter

// use Functional Component Single
// Number 1 Fun
//  function Single(){
//     return(
//         <div>
//         <h1>Shariar Sultana</h1>
//         <p>Address: Uttara</p>
//         <p>Amir Hamza</p>
//         <p>Jahid</p>
//         <p>Udoy</p>
//         </div>
//     )
// }

// export default Single;


// use Functional Component Nested
// function Nameing(){

//         function Udoy(){
//         return(
//             <div>
//             <h1>Udoy Hossain</h1>
//             <p>Address: Mirpur</p>
//             </div>
//         )
//     }
    
   

//       function Jahid(){
//         return(
//             <div>
//             <h1>Jahidul Alam</h1>
//             <p>Address: CTG</p>
//             <Udoy />
//             </div>
//         )
//     }

//     function Amir(){
//         return(
//             <div>
//             <h1>Amir Hamza</h1>
//             <p>Address: Uttara, Dhaka</p>
//             <Jahid />
//             </div>
//         )
//     }

//         return(
//             <div>
//             <h1>Shariar Sultana</h1>
//             <p>Address: Uttara</p>
//             <Amir />
//             </div>
//         )
//     }

// export default Nameing;


// use Class Component
// (import React,{Component} from "react";
// class Jahid extends Component{)
// (// import React from "react";
// class Jahid extends React.Component{)

// import React from "react"
// class Jahid extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h1>Hello Shariar Madam</h1>
//                 <p>How Are You?</p>
//             </div>
//         )
//     }
// }
// export default Jahid;

// import React,{useState} from "react"
// function Main(){
//     const [data, setData] = useState("Shariar Sultana");
//     // const [data, setData] = React.useState("Shariar Sultana");
//     function showData(){
//         setData ("Jahidul Alam");
//     }
//     return(
//         <div>
//             <h1>{data}</h1>
//             <button onClick={()=>showData()}>Click Me Update</button>
//         </div>
//     )
// }

// export default Main;


// Make Name Update
import React,{useState} from "react"
export function FunText(){
    return(
        <div className="Head-Text">
            <h1>Functional Compnent</h1>
        </div>
    )
}



export function Naming(){
    const [data, setData] = useState("Jahidul Alam");
    function showData(){
        setData ("Shariar Sultana");
    }
    return(
        <div className="Card-Main">
        <div className="Card-Margin">
        <div className="Card">
            <h1>{data}</h1>
            <button onClick={()=>showData()}>Click Me Update</button>
        </div>
        </div>
        </div>
    )
}
// Make Name Update End

// Make Counter Start
export function Count(){
    const [count, setCount] = useState(0);
    function setData(){
        setCount (count+1);
    }
    return(
        <div className="Card-Main">
        <div className="Card-Margin">
        <div className="Card">
            <h1>{count}</h1>
            <button onClick={()=>setData()}>Click Me Update</button>
        </div>
        </div>
        </div>
    )
}

export function CountTwo(){
    const [countTwo, setCountTwo] = useState(0);
    function setDataTwo(){
        setCountTwo (countTwo-1);
    }
    return(
        <div className="Card-Main">
        <div className="Card-Margin">
        <div className="Card">
            <h1>{countTwo}</h1>
            <button onClick={()=>setDataTwo()}>Click Me Update</button>
        </div>
        </div>
        </div>
    )
}

// Make Counter End