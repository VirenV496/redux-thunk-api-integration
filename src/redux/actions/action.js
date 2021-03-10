import {INCREAMENT}from './actiontype'
import { DECREAMENT} from './actiontype'


export const increment = (value) => {
   return {
       type:INCREAMENT,
       data:value
   }
}


export const decrement= (value) => {
   return {
       type:DECREAMENT,
       data:value
   }
}





/* export const increment = () =>{

     return {
        type: 'INCREAMENT'
     
    
     };
};


export const decrement = () =>{

   return {
      type: 'DECREAMENT'
   };
};

 */

