import React from 'react';
import CategoryItem from '../components/CategoryItem'
const CategoryTabs = ({categories}) => {
//     const categories =[{
//         name:'Internet',

//     },
// {name:'Education'},
// {name:'Religious'},
// {name:'Religious'}
// ];
    return (
        <div>
        <div className="category-tab grid grid-cols-4  gap-4 my-4">
            {categories?.map((category,index)=>{
                return (<CategoryItem category={category} key={index}/>)
            })}
       
   
          </div>           
        </div>
    );
};

export default CategoryTabs;