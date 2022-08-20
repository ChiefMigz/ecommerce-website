import './FilterComponent.css';
import FilterItem from './FilterItem';

const FilterComponent = () => {

    

    return ( 
        <div className='filter-container'>
            <span className='filter-title'>
                <h7>Filter</h7>
            </span>
            <FilterItem filterName={'Size'} items={["Small (5 cm radius)", "Medium (7 cm radius)", "Big (10 cm radius)"]}/>
            <FilterItem filterName={'Flavor'} items={["Chocolate", "Mocha", "Fruit"]}/>
            <FilterItem filterName={'Type'} items={["Cupcake", "Box", "Event"]}/>
        </div>
       
     );
}
 
export default FilterComponent;