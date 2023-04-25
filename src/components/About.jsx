import React from "react";

export const About = () => {
  return (
    <div className="border border-red-300 pt-6 mt-8">
      <section className="flex-1 ">
        <div>
          <h1 className="font-bold  ml-8 text-center">Initiaitive began......................!</h1>
        </div>
        <div className=" ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta
            vel expedita.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque hic
            possimus quos saepe voluptate sunt nulla, adipisci doloremque vitae
            numquam veritatis totam. Ratione autem exercitationem laboriosam.
            Dicta dolores facilis accusamus culpa deserunt.
          </p>

        </div>
      </section>
        <section className="flex-2">
                <div>
                    <h2>Our Team</h2>
                </div>
                <div>
                    <img className=" ml-20 rounded-full" src="https://media.giphy.com/media/WsD0OCwMHgP4TksWfz/giphy.gif" alt="/"></img>
                    <p>Name</p>
                </div>

        </section>
    </div>
  );
};
