export const Skeleton = () => {
  return (
    <div className="pt-14">
      <div role="status" className="max-w-lg animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[430px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[400px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[460px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
