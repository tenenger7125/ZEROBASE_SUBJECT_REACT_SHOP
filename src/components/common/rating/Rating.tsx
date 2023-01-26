const Rating = ({ rate, count }: Rating) => {
  return (
    <div className="flex items-center mt-3">
      <div className="rating rating-half">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <input
              type="radio"
              name="rating-10"
              key={`rating-${index}`}
              className={`bg-yellow-400 cursor-default mask mask-star-2 ${
                index % 2 == 0 ? "mask-half-1" : "mask-half-2"
              }`}
              disabled
              checked={index + 0.5 <= rate * 2}
            />
          ))}
         
      </div>
      <div className="ml-2">
        {rate}/{count} 참여
      </div>
    </div>
  );
};

export default Rating;
