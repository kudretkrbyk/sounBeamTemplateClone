export default function Footer() {
  return (
    <div className="flex-flex-col ">
      {" "}
      <div className="w-full flex items-center justify-around p-5">
        <div className="flex flex-col gap-4">
          <div>HOME</div>
          <div>BENEFITS</div>
          <div>REVIEWS</div>
        </div>
        <div className="flex flex-col gap-4">
          <div>SHIPPING & RETURNS</div>
          <div>STORE POLICY</div>
          <div>PAYMENT METHODS</div>
          <div>FAQ</div>
        </div>
        <div className="flex flex-col gap-4">
          <div>INSTAGRAM</div>
          <div>YOUTUBE</div>
          <div>TWITTER</div>
        </div>
      </div>
      <div className="bg-gray-500 flex items-center justify-center p-5">
        ©2035 by SOUNDBEAM. Powered and secured by Wix
      </div>
    </div>
  );
}
