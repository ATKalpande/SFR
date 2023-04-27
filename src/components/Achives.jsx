import React from "react";

export const Achives = () => {
  const styleCom = `px-4 ml-9 mb-4 w-1/2 py-4 border border-gray-500 rounded hover:bg-gray-800 delay-300 hover:p-5 `;
  return (
    <div>
      <div className="warapper flex flex-col  self-center  ">
        <h2 className="  px-4 py-3 underline decoration-red-500 font-extrabold">Achivements</h2>
        <div>
          <p className={styleCom}>
            secured All India Rank <span>14</span> in business presentation
          </p>
        </div>
        <div>
          <p className={styleCom}>
            Secured all India rank 19 in design presentation
          </p>
        </div>
        <div>
          <p className={styleCom}>
            Secured all India rank 22 in all over event
          </p>
        </div>
        <div>
          <p className={styleCom}>
            {" "}
            Collaboration with more than 20 companies for sponsorship in the
            first year of participation
          </p>
        </div>

        <div>
          <p className={styleCom}>
            {" "}
            Got 3 international sponsors which is first time in the college
          </p>
        </div>
      </div>
    </div>
  );
};
