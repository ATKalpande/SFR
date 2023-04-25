import React from "react";

export const Suppo = () => {
  return (
    <div>
      <section className="mark mt-10 p-4 ml-3">
        <h1 className="font-bold text-lg underline">
          Thank Full For Our Supports
        </h1>
        <div>

          <ul role="list" class="p-6  flex flex-col justify-center divide-y divide-slate-200">

            <li class="flex py-4 first:pt-0 last:pb-0">
              <img
                class="h-10 w-10 rounded-full"
                src="{person.imageUrl}"
                alt=""
              />
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-slate-900">Rishab Agarwal</p>
                <p class="text-sm text-slate-500 truncate">rb@gmail.com</p>
              </div>
            </li>

            <li class="flex py-4 first:pt-0 last:pb-0">
              <img
                class="h-10 w-10 rounded-full"
                src="{person.imageUrl}"
                alt=""
              />
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-slate-900">Rishab Agarwal</p>
                <p class="text-sm text-slate-500 truncate">rb@gmail.com</p>
              </div>
            </li>

            <li class="flex py-4 first:pt-0 last:pb-0">
              <img
                class="h-10 w-10 rounded-full"
                src="{person.imageUrl}"
                alt=""
              />
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-slate-900">Rishab Agarwal</p>
                <p class="text-sm text-slate-500 truncate">rb@gmail.com</p>
              </div>
            </li>

          </ul>


        </div>
      </section>
    </div>
  );
};
