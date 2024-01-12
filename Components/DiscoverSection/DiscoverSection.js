export default function DiscoverSection() {
  return (
    <section className="w-full flex flex-col items-center">
      <div
        className="w-full max-w-screen-xl h-[300px] md:h-[400px] lg:h-[500px]"
        style={{
          backgroundImage:
            "url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wVJG3u5Ru9tInxYiTCrJr4MpJ7Z.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div
          className="w-full h-full flex flex-col justify-center items-center p-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <h2 className="font-bold text-sm md:text-xl lg:text-2xl 2xl:text-2xl text-white dark:text-gray-200">
            Welcome <br />
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <form
            action={"/search"}
            method="GET"
            class="flex items-center w-full max-w-screen-md">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="query"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for a movie, tv show, person..."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
