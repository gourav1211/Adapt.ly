import Sidebar from "../components/Sidebar";

export default function Profile(props) {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-col justify-start h-auto w-[85%]  ml-2 pb-10 ">
          <h1 className="text-lg font-bold m-10">Jane Doe</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          laboriosam corporis neque totam eum laborum quo nisi quae? Nesciunt
          quo libero laboriosam porro omnis animi voluptates? Fugit incidunt
          aliquid illo!
        </p>
      </div>
    </div>
  );
}
