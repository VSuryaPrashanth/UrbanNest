import { Grid } from "react-loader-spinner";

const LoaderFull = () => {
  return (
    <div className="absolute top-0 min-h-screen min-w-full flex items-center justify-center bg-black/20">
      <Grid
        visible={true}
        height="110"
        width="110"
        color="#0087bd"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
};

export default LoaderFull;
