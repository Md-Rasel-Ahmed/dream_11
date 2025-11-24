export default function Banner({ handleFreeCoins }) {
  return (
    <div
      className="hero min-h-100 mt-5 rounded-lg"
      style={{
        backgroundImage: "url('./assets/bg-shadow.png')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <img src="./" alt="" />
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={handleFreeCoins} className="btn btn-warning">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}
