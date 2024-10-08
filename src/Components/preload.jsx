const Preload = () => {
  return (
    <section className="black flex h-[100vh] justify-around items-center bg-[#070707]">
      <div className="relative overflow-hidden w-[450px] h-[80vh]">
        <div className="panel-text  flex justify-around items-center text-3xl text-blue-900">
          Blue
        </div>
        <div className="panel-text  flex justify-around items-center text-3xl text-red-900">
          Red
        </div>
        <div className="panel-text  flex justify-around items-center text-3xl text-orange-900">
          Orange
        </div>
        <div className="panel-text flex justify-around items-center text-3xl text-purple-900">
          Purple
        </div>
      </div>

      <div className="relative overflow-hidden w-[450px] h-[80vh]">
        <div className="panel bg-blue-500"></div>
        <div className="panel bg-red-500"></div>
        <div className="panel bg-orange-500"></div>
        <div className="panel bg-purple-500"></div>
      </div>
    </section>
  );
};

export default Preload;
