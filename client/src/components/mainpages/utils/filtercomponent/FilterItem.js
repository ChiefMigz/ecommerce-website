import { FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';
import './FilterComponent.css';

const FilterItem = ({filterName, items}) => {
    const [toggled, setToggled] = useState(false);
    const toggleDropdown = () => setToggled(!toggled)

    return ( 
        <div>
            <div className='filterItem' onClick={() => toggleDropdown()}>
                <h5 id={filterName}>{filterName}</h5>
                <FaAngleRight size={30} style={{transform: toggled ? 'rotate(90deg)': 'none', transition: '0.3s', cursor: 'pointer'}}/>
            </div>
            <div className={toggled ? 'filterDropdownShow' : 'filterDropdownHide'}>
                {
                    items.map(item => {
                        return (
                            <label className="filterCheckbox" id={`${item}Label`}>
                                <input type="checkbox" for={`${item}Label`}/>
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