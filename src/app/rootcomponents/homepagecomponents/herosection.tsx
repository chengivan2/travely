import AnimatedHeading from "@/app/rootcomponents/AnimatedHeading";

export default function HerosectionOne() {
  return (
    <section className="relative bg-transparent px-[0.1rem] lg:px-[1rem] mt-20 py-[0.8rem] lg:py-[2rem] min-w-full min-h-[100vh]">
      <div className="flex flex-col justify-center items-center relative px-[0.1rem] py-[0.1rem] min-w-full h-[98vh] rounded-[0.7rem] bg-cover bg-center bg-[url(/images/herobgimage.jpg)]">
        <div className="absolute inset-0 bg-darkmode-bg-color opacity-30 dark:opacity-40 rounded-[0.7rem]"></div>

        <div className="relative min-w-full flex flex-col justify-center items-center">
          <AnimatedHeading
            words={["Get", "Explore", "Discover"]}
            restOfHeading="More Travel Time"
          />
        </div>

        <div className="relative min-w-full flex flex-col justify-center items-center">
          <h4>Work Hard Play Hard</h4>
        </div>

      </div>
    </section>
  );
}
