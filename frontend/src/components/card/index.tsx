import { Link } from "react-router-dom";
import { Place } from "../../types";
import Rating from "./Rating";
import Status from "./Status";

type Props = {
  place: Place;
};
const Card = ({ place }: Props) => {
  return (
    <Link
      to={`/place/${place.id}`}
      className="border rounded-md p-4 gap-3 min-h-[300px] cursor-pointer
        grid grid-cols-3"
    >
      <div>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={place.image_url}
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <h1 className="font-semibold text-2xl">{place.name}</h1>

            <Status availability={place.availability} expand={false} />
          </div>
          <div>
            {place.amenities.slice(0, 2).map((i, key) => (
              <span className="border p-1 rounded-md" key={key}>
                {i}
              </span>
            ))}
          </div>
          <Rating point={place.rating} />
        </div>

        <div>
          <span className="text-2xl font-bold">{place.price_per_night}$</span>
          <span className="text-xs text-gray-400">
            vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
