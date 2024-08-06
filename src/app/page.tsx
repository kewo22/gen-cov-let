"use client";

import { useRef, useState } from "react";
import Form from "./form";

export default function Home() {
  // const dynamicData = await fetch(`http://localhost:3000/api`, { cache: 'reload' })
  // console.log(await dynamicData.json())

  const [res, setRes] = useState<any | null>(null);
  const resultRef = useRef<HTMLDivElement>(null)
  const toastRef = useRef<HTMLDivElement>(null)

  const onSubmit = (e: any) => {
    console.log(e)
    setRes(e)
  }

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultRef!.current!.innerText);
      toastRef!.current!.classList.replace('-bottom-[40px]', 'bottom-5')
      setTimeout(() => {
        toastRef!.current!.classList.replace('bottom-5', '-bottom-[40px]')
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('error: cannot copy, call kewin')
    }
  }

  return (
    <main className="flex flex-row h-dvh overflow-hidden">

      <div className="fixed w-auto -bottom-[40px] right-5 z-50 bg-green-700 px-10 py-2 transition-all ease-in-out duration-500" ref={toastRef}>
        TEXT COPIED
      </div>

      <section className="h-full flex flex-col items-center gap-2 p-5 border-r border-l-slate-300">
        <Form onSubmit={onSubmit} />
      </section>

      <section className="flex-grow p-5 border-l border-r-slate-300 ">
        {
          !res && <h4 className="text-2xl">Result</h4>
        }

        {
          res && <div className="h-full flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
              <h4 className="text-2xl">Result</h4>
              <button onClick={onCopy} className="bg-white px-3 py-1 rounded ml-auto cursor-pointer hover:bg-gray-900 hover:text-white">Copy</button>
            </div>
            <div ref={resultRef} className="bg-gray-900 p-2 flex-grow overflow-y-auto select-none">
              <span>Generate me a cover letter for following details</span>
              <br />
              <br />
              <span>Company: {res.company}</span>
              <br />
              <br />
              <span>Designation: {res.company}</span>
              <br />
              <br />
              <span>My Profile: {res.profileSummary}</span>
              <br />
              <br />
              <span>My Mobile: 542658570</span>
              <br />
              <br />
              <span>My Email: agalya177@gmail.com</span>
              <br />
              <br />
              <span>Job Description: {res.jobDescription}</span>
            </div>
          </div>
        }

      </section>
    </main>
  );
}
