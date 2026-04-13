"use client";
import { useState } from "react";

const qs = [
  "Can you design My website",
  "Can you design My website",
  "Can you design My website",
  "Can you design My website",
  "Can you design My website",
  "Can you design My website",
];

function Item({q, i}:{q:string; i:number}){
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="text-[#f46b6b] text-sm font-semibold mb-2">{String(i+1).padStart(2,"0")}</div>
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-bold text-lg text-[#0B2131]">{q}</span>
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#0B2131] text-[#0B2131] font-medium text-lg leading-none pb-0.5">{open ? "-" : "-"}</span>
      </button>
      {open && <p className="mt-4 text-sm font-medium text-gray-500 leading-relaxed pr-8">The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text</p>}
    </div>
  );
}

export default function FAQ(){
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-[#0B2131]" style={{fontFamily:"var(--font-prompt)"}}>FAQ</h2>
          <p className="mt-6 text-sm font-medium text-gray-500 leading-relaxed">The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text</p>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-x-16 gap-y-2">
          <div className="flex flex-col">
            {qs.slice(0,3).map((q,idx)=> <Item key={idx} q={q} i={idx} />)}
          </div>
          <div className="flex flex-col">
            {qs.slice(3).map((q,idx)=> <Item key={idx+3} q={q} i={idx+3} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
