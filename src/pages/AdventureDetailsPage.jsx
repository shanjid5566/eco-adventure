import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Modal from "react-modal";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const AdventureDetailsPage = () => {
  DynamicTitle("Adventure Details")
  const [time ] = useState(new Date().getHours());
  const [isOpen, setIsOpen] = useState(false);
  const id = useParams().id;
  const idx = id.replace(":", "");
  const adventures = useLoaderData();
  const adventure = adventures.find((element) => element.id == idx);
  const handleModal = () => {
    if(time >10 && time <20){
        window.open("https://meet.google.com/", "_blank", "noopener,noreferrer");
        console.log("hello")
    } else{
        setIsOpen(true);
        console.log("hello")
    }
  }
  return (
    <div className="container mx-auto my-10 p-8">
      <div className=" md:w-[70%] bg-white shadow-sm rounded-xl overflow-hidden border justify-center mx-auto">
        {/* Image */}
        <div className="w-full md:w-[70%] mx-auto">
          <img
            src={adventure.image}
            alt={adventure.title}
            className="rounded-xl mx-auto h-full w-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="px-6 pb-6 text-center">
          {/* Title & Category */}
          <h2 className="text-xl font-semibold mb-1">{adventure.title}</h2>
          <p className="text-sm text-blue-600 font-medium mb-2">
            {adventure.category}
          </p>

          {/* Short Description */}
          <p className="text-gray-600 mb-4">{adventure.shortDescription}</p>

          {/* Details */}
          <div className="text-left text-sm text-gray-700 space-y-1 mb-4">
            <p>
              <strong>Location:</strong> {adventure.location}
            </p>
            <p>
              <strong>Duration:</strong> {adventure.duration}
            </p>
            <p>
              <strong>Level:</strong> {adventure.adventureLevel}
            </p>
            <p>
              <strong>Cost:</strong> ${adventure.adventureCost}
            </p>
            <p>
              <strong>Max Group Size:</strong> {adventure.maxGroupSize}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              {adventure.bookingAvailability ? (
                <span className="text-green-600 font-medium">Available</span>
              ) : (
                <span className="text-red-600 font-medium">Fully Booked</span>
              )}
            </p>
          </div>

          {/* Included Items */}
          <div className="text-left text-sm mb-4">
            <strong className="text-2xl">Included:</strong>
            <ul className="list-disc list-inside text-gray-700">
              {adventure.includedItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Eco Features */}
          <div className="text-left text-sm mb-4">
            <strong className="text-2xl">Eco-Friendly:</strong>
            <ul className="list-disc list-inside text-gray-700">
              {adventure.ecoFriendlyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Special Instructions */}
          <div className="text-left text-sm mb-4">
            <strong className="text-2xl">Special Instructions:</strong>
            <ul className="list-disc list-inside text-gray-700">
              {adventure.specialInstructions.map((inst, i) => (
                <li key={i}>{inst}</li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div className="flex justify-center">
            <button onClick={handleModal} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Sorry </h2>
        <p className="text-3xl">consultation time is 00:10AM to 08:00PM</p>
        <button
          className="mt-4 px-4 py-2  bg-red-500 text-white rounded"
          onClick={()=> setIsOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AdventureDetailsPage;
