export default function Banner({ handleFreeCoins }) {
  return (
    <div
      className="hero min-h-100 mt-5 rounded-lg"
      style={{
        backgroundImage: "url('../src/assets/bg-shadow.png')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-full">
          <div className="flex justify-center items-center">
            <img
              className="w-50  "
              src="../src/assets/banner-main.png"
              alt=""
            />
          </div>
          <h1 className="my-5 text-2xl font-bold">
            Assemble YOur Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5">Beyound Boundries Beyound Limits</p>
          <button onClick={handleFreeCoins} className="btn btn-warning">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}
