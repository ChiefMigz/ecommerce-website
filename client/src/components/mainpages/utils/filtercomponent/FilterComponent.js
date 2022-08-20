import './FilterComponent.css';
import FilterItem from './FilterItem';

const FilterComponent = () => {

    return ( 
        <div className='filter-container'>
            <span className='filter-title'>
                <h7>Filter</h7>
            </span>
            <FilterItem filterName={'Size'} items={['Small (5 cm radius)', 'Medium (7 cm radius)', 'Big (10 cm radius)']}/>
            <FilterItem filterName={'Flavor'} items={['Chocolate', 'Mocha', 'Fruit']}/>
            <FilterItem filterName={'Type'} items={['Cupcake', 'Box', 'Event']}/>
            <FilterItem filterName={'Price'} items={['$5-$10', '$11-$15', '$16-$21', '$21-$26', '$27-$32', '$33-$37']}/>
        </div>
     );
}
 
export default FilterComponent;