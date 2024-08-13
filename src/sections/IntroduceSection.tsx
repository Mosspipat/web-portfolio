import React from "react";

export const IntroduceSection = () => {
  type DataProfile = {
    key: string;
    value: string;
  };

  const dataProfile: DataProfile[] = [
    { key: "Name:", value: "Pipat Horakungthong" },
    { key: "Email:", value: "pt_moss17782@hotmail.com" },
    { key: "Age:", value: "28" },
    { key: "From:", value: "Bangkok, Thailand" },
  ];

  const ItemProfileDetail = ({
    title,
    des,
  }: {
    title: string;
    des: string;
  }) => {
    return (
      <div className="">
        <div className="text-base font-semibold">{title}</div>
        <div>{des}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-9 text-black w-[800px] h-screen">
      <p className="text-center text-6xl font-bold">To get to know me better</p>
      <p>
        I'm
        <span className="text-blue-400 ml-1 text-4xl font-semibold tracking-wide">
          Web Developer{" "}
        </span>
        and
        <span className="text-blue-400 ml-1 text-4xl font-semibold tracking-wide">
          Game Developer
        </span>
      </p>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div>
            I am a program developer.I have worked on language programming
            Develop Technology media like interactive technology, game
            AR(Augmented Reality), VR(Virtual Reality), or creating a program
            that uses 3d model.
          </div>
          <div>
            My Habbit is making Technology that uses coding tools and enjoy to
            solving programming problems because it funs and feels challenging.
          </div>
          <div className="flex justify-center gap-10 ">
            <div>
              <div className="text-center text-blue-400 text-4xl font-bold">
                5
              </div>
              <div>Years experience</div>
            </div>
            <div>
              <div className="text-center text-blue-400 text-4xl font-bold">
                4
              </div>
              <div>Programmer language Skill</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          {dataProfile.map((item, index) => {
            return (
              <ItemProfileDetail
                title={item.key}
                des={item.value}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
