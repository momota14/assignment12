import AboutImg from "@/assets/images/about.png";
import Image from "next/image";

function TakeBuisness() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-7 gap py-9">
        <div className="">
          <Image
            src={AboutImg}
            alt="Qubartech About"
            height={0}
            width={0}
            className="w-full"
            priority={true}
          />
        </div>
        <div>
          <h1 className="mb-7 text-2xl lg:text-4xl font-semibold">
            Take your business to the next level
          </h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos alias
          consectetur, assumenda consequuntur tenetur nostrum perferendis?
          Vitae, similique qui? Porro quis ducimus obcaecati numquam! Fugiat
          libero inventore voluptates molestiae excepturi. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Quos neque sunt vel accusamus ab
          pariatur consectetur, reiciendis quis sint totam officia rem illo
          deserunt tempore. Earum fugiat maiores perferendis reprehenderit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
    </>
  );
}

export default TakeBuisness;
