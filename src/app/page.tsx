import { createNewPost } from "@/app/actions";
export default function Home() {
  return (
    <div className={"mx-auto flex-1"}>
      <form className={"w-full"} action={createNewPost}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900 font-nunito uppercase">
              Create a blog post
            </h2>

            <div className="mt-10 ">
              <div className="">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2 mb-4">
                  <div className="">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
                      placeholder="awesome blog"
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    id="content"
                    name="content"
                    rows={4}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="bg-rose-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-10 rounded-lg w-full flex items-center justify-center sm:w-auto"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
