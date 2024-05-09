import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Appbar />
      <div className="flex justify-center pt-10 ">
        <div className="grid grid-cols-12 pt-200 px-10 w-full max-w-screen-2xl">
          <div className="col-span-8 w-full  ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">{blog.title}</div>
            <div className="text-md pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4 pl-10 ">
            <div className="text-slate-600 text-lg">Auhtor</div>
            <div className="flex pt-4">
              <div className="pr-2">
                <Avatar name={blog.author.name} />
              </div>
              <div className="text-xl font-bold pr-2">{blog.author.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
