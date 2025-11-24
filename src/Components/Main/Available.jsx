export default function Available({ player, handleAddToSelected }) {
  return (
    <div className=" mt-5">
      <div className="card mt-3 bg-gray-300 text-black w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{player.player_name}</h2>
          <div className="flex justify-between ">
            <p className="flex gap-1 ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>
              {player.country}
            </p>
            <div className="w-24">
              <p className="bg-gray-400 rounded-md p-1 ">
                {player.player_position}
              </p>
            </div>
          </div>
          <div className="divider divider-neutral "></div>

          <p className="">
            Rating : <span>{player.rating} / 100</span>
          </p>
          <div className="flex justify-between">
            <p>{player.batting_hand}</p>
            <p className="text-gray-400  w-0 ml-15">{player.batting_hand}</p>
          </div>
          <div className="flex justify-center items-center mt-2">
            <p>Price: ${player.price}</p>
            <button
              onClick={() => handleAddToSelected(player)}
              className="btn btn-sm"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
