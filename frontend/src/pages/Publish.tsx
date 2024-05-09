import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full mt-10">
          <textarea
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="block p-2.5 w-full text-lg font-bold text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Title"
          ></textarea>
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <button
            onClick={async () => {
              const res = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${res.data.id}`);
            }}
            className="mt-10 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 -900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </>
  );
};

const TextEditor = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="pt-10 w-full">
      <div className="flex items-center justify-between px-3 py-2 border-b ">
        <div className="px-4 py-2 bg-white rounded-b-lg w-full">
          <textarea
            id="editor"
            rows={15}
            onChange={onChange}
            className=" block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring w-full"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
};
