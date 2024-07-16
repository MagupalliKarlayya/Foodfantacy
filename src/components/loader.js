export let Loader = () => {
  return (
    <>
      {Array(25)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[230px] h-[280px] animate-pulse bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] m-5 p-3 items-center"
          >
            <div className="w-[195px] h-1/2 rounded-none m-2 bg-slate-200 mb-3 "></div>
            <div className="w-[150px] h-[20px]  bg-slate-200 m-2 mb-3"> </div>
            <div className="w-[150px] h-[20px]  bg-slate-200 m-2"> </div>
            <div className="flex flex-row">
              <div className="w-1/3 h-[20px] rounded-none m-2 bg-slate-200 "></div>
              <div className="w-1/3 h-[20px]  bg-slate-200 m-2 "> </div>
              <div className="w-1/3 h-[20px]  bg-slate-200 m-2"> </div>
            </div>
          </div>
        ))}
    </>
  );
};
