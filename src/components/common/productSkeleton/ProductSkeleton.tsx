const ProductSkeleton = ({ limit }: ProductSkeletonType) => {
  return (
    <>
      {0 < limit ? (
        Array(limit).fill(0).map((_, index) => {
          return (
            <div key={index} className="card bordered animate-pulse">
              <div className="h-80 rounded bg-gray-100"></div>
              <div className="card-body">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-100 rounded"></div>
                  <div className="h-6 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-6 bg-gray-100 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>제품이 없습니다.</div>
      )}
    </>
  );
};
export default ProductSkeleton;
