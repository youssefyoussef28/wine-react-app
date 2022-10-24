import DefaultImage from "../images/wine.jpg";

const Card = (props) => {
  return (
    <>
      <div
        key={props.key}
        className="bg-white rounded-lg border border-gray-200 shadow-md max-w-xs"
      >
        <div className="flex justify-center items-center aspect-square h-full">
          <img
            className="rounded-t-sm  object-cover h-80"
            src={props.image}
            alt="Wine Image"
          />
        </div>
        <div className="p-5">
          <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 h-14">
            Winery: {props.winery}
          </h5>

          <p className="mb-3 font-normal text-gray-700 h-10">
            Name: {props.wine}
          </p>
          <p className="mb-3 font-normal text-gray-700 h-7">
            Location: {props.location}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
