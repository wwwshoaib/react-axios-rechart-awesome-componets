

import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-2">
            <p className=" text-black"><FaCheck /></p>
            <p>{feature}</p>
            
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;