import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center mt-20">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#8b5cf6"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
