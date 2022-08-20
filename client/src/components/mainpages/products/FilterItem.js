import { FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import './FilterComponent.css';

const FilterItem = ({filterName, items}) => {
    const [toggled, setToggled] = useState(false);
    const toggleDropdown = () => setToggled(!toggled)

    return ( 
        <div>
            <div id='filter-item' onClick={() => toggleDropdown()}>
                <h6>{filterName}</h6>
                <FaAngleRight size={30} style={{transform: toggled ? 'rotate(90deg)': 'none', transition: '0.3s'}}/>
            </div>
            <div id={toggled ? 'filter-dropdown-show' : 'filter-dropdown-hide'}>
                {
                    items.map(item => {
                        return (
                            <label class="checkbox" id={item}>
                                <input type="checkbox" id={item}/>
                                <span>{item}</span>

                            </label>
                        )
                    }) 
                }
            </div>
        </div>
     );
}
 
export default FilterItem;