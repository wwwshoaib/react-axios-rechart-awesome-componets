
import Feature from "../Feature/Feature";
import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className="bg-blue-500  m-3 p-5  space-y-3 rounded-md text-white flex flex-col">
            <h2 className="text-center">
                <span className="text-5xl">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-center">
                <span  className="text-xl">{name}</span>
            </h4>
            <p className="text-sm flex-grow">
                {
                    features.map((feature, index) => <Feature key ={index} feature = {feature}></Feature>)
                }
            </p>

            <button className="bg-green-400 py-3 w-full text-white mt-10 rounded-lg hover:bg-fuchsia-500 ">Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;