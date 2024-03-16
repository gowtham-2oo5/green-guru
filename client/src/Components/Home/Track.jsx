import Navbar from "./Navbar";
const Track = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit request received");
  };
  return (
    <>
      <Navbar />
      <div className="h-max mt-2 flex justify-center">
        <form onSubmit={handleSubmit} className="bg-slate-200 p-3 rounded-lg">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-slate-900"
            >
              Enter application ID
            </label>
            <div className="flex gap-2">
              <div>
                <input
                  id="appID"
                  name="appID"
                  type="text"
                  required
                  // onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Track;
