
import PriceOption from "../priceOption/priceOption";
const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": 30,
      "features": [
        "Access to gym equipment",
        "Locker facilities",
        "Open from 6 AM to 9 PM"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": 50,
      "features": [
        "Access to gym equipment",
        "Locker facilities",
        "Open from 6 AM to 10 PM",
        "1 group fitness class per week",
        "Free Wi-Fi"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": 80,
      "features": [
        "24/7 gym access",
        "Locker facilities",
        "All group fitness classes",
        "Personal training session (1 per month)",
        "Free Wi-Fi",
        "Sauna and steam room access"
      ]
    },
    {
      "id": 4,
      "name": "Family Plan",
      "price": 120,
      "features": [
        "Access for up to 4 family members",
        "Locker facilities for each member",
        "All group fitness classes",
        "Free Wi-Fi",
        "Discounts on personal training",
        "Free kids' play area"
      ]
    },
    {
      "id": 5,
      "name": "Student Plan",
      "price": 25,
      "features": [
        "Access to gym equipment",
        "Locker facilities",
        "Open from 6 AM to 9 PM",
        "Discount on group fitness classes",
        "Free study lounge with Wi-Fi"
      ]
    }
  ]


  return (
    <div>
      <h3 className="text-center text-2xl font-semibold p-5">Best Price option</h3>
      <div className="grid md:grid-cols-3 ">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>

    </div>
  );
};

export default PriceOptions;