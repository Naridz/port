import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import "../image/im.css"

const Education = () => {
  return (
    <div  className="h-56 m-28 max-[640px]:mb-48">
      <div className="container mx-auto">
        <div className="ms-32 max-[640px]:ms-2">
          <h1 className="text-5xl font-bold">Education</h1>
          <h1 className="text-3xl mt-7 mb-3 font-bold">
            King Mongkut’s Institute of Technology Ladkrabang
          </h1>
          <h1 className="text-xl inline-block">
            Bachelor of Science in Applied Mathematics.
          </h1>
          <IoDocumentText
            className="mx-2 mb-1 inline-block w-6 h-6 cursor-pointer hover:animate-bounce max-[640px]:mt-2.5"
            onClick={() => document.getElementById("my_modal_2").showModal()}>
            Transcript
          </IoDocumentText> 
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box modal-box w-11/12 max-w-3xl h-screen bg-center bg-no-repeat transcript bg-inherit">
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

        </div>
      </div>
    </div>
  );
}

export default Education