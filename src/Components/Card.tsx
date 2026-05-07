type CardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
  category?: string;
};

const Card = ({
  image,
  name,
  description,
  price,
  category,
}: CardProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {category && (
          <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              {description}
            </p>
          </div>

          <p className="text-xl font-bold text-orange-600 whitespace-nowrap">
            {price}
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-5">
          <button className="mt-6 w-full grid- bg-orange-600 text-white py-3 rounded-full font-medium transition-all duration-300 cursor-pointer">
            Order Now
          </button>

          <span className="flex items-center">
            <button className="">-</button>
                0
            <button>+</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
