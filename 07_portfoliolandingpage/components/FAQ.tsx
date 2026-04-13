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
    <div className="border-b border-gray-200 py-3">
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <div className="flex items-center gap-3 text-sm"><span className="text-emerald-600 font-medium">{String(i+1).padStart(2,"0")}</span> {q}</div>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border">{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-gray-600">The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text</p>}
    </div>
  );
}

export default function FAQ(){
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center" style={{fontFamily:"var(--font-prompt)"}}>FAQ</h2>
        <p className="mt-2 text-sm text-gray-600 text-center max-w-2xl mx-auto">The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          <div>
            {qs.slice(0,3).map((q,idx)=> <Item key={idx} q={q} i={idx} />)}
          </div>
          <div>
            {qs.slice(3).map((q,idx)=> <Item key={idx+3} q={q} i={idx+3} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
