import Skeleton from "react-loading-skeleton";

export const ProductSkeleton = () => (
  <div>
    <Skeleton width={200} height={200} />
    <Skeleton width={200} height={18} style={{ marginTop: "5px" }} />
    <Skeleton width={120} height={20} style={{ marginTop: "5px" }} />
  </div>
);
