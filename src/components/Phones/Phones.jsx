import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Oval } from 'react-loader-spinner'




const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data.data))
        // Axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                const phoneWithFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: phone.slug.split('-')[1],
                    }
                    return obj;
                })

                setPhones(phoneWithFakeData);
                setLoading(false)
            });
    }, [])
    return (
        <div>
            {
                loading &&
                <div className="flex justify-center items-center">
                    <Oval
                        visible={true}
                        height="50"
                        width="50"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />

                </div>
            }
            <h2>Phones: {phones.length}</h2>
            <BarChart width={1200} height={300} data={phones}>
                <Bar dataKey="price" barSize={30} fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="price" />
                <Tooltip />
            </BarChart>

        </div>
    );
};

export default Phones;