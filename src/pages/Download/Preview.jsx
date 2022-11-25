import React, { forwardRef } from "react";

const Preview = forwardRef((props, ref) => {
  return (
    <main
      className="mx-8 px-12 mt-20 py-8 bg-gray-100 flex-col flex gap-y-3"
      ref={ref}
    >
      <h1 className="underline text-center text-4xl mb-3">
        THE LAST WILL AND TESTAMENT OF ME {"Name".toUpperCase()} OF
        {" Address".toUpperCase()}
      </h1>
      <p className="text-xl">
        I REVOKE all former testamentary documents made by me and DECLARE this
        to be my last Will.
      </p>
      <p className="text-xl">
        I APPOINT {"___________ "}(name and occupation of executors) of
        {"___________ "} (address of executors) to be the executors and trustees
        of my Will. And I DECLARE THAT the expression “MY TRUSTEES” shall where
        the context so admits include my trustee for the time being of this my
        Will.
      </p>
      <div className="gap-y-3 flex flex-col">
        {[1, 2, 3, 4, 5].map((item) => (
          <p className="text-xl" key={item}>
            I direct that
            {
              " the vacant parcel of land measuring about 100 feet by 100 feet, behind my said Igiogbe, should be shared equally between my eldest daughter, Mrs. FF and my son GH;"
            }
          </p>
        ))}
      </div>
      <p className="text-xl">
        I DECLARE that if any of my child/children named in this Will dies in my
        life time leaving issue/issues, such issue/issues shall be entitled to
        take by substitution the share of my property that may said deceased
        child/children would have taken if he/they had survived me.
      </p>
      <p className="text-xl">
        I DECLARE that my said executors/trustees shall be compensated with
        {"_____________"} for the trouble and time expended by them in carrying
        out my wishes in this Will.
      </p>
      <p className="text-xl">
        IN WITNESS WHEREOF I set my hand the day, month and year first above
        written.
      </p>
      <p className="text-xl">
        SIGNED, by the within named TESTATOR _______________________
      </p>
      <div className="flex flex-col my-4 gap-y-4">
        <p className="flex flex-col gap-y-2">
          <span className="text-xl">
            NAME OF WITNESS: .....................................
          </span>
          <span className="text-xl">
            ADDRESS: ...................................................
          </span>
          <span className="text-xl">
            OCCUPATION: .............................................
          </span>
          <span className="text-xl">
            SIGNATURE: ___________________________
          </span>
        </p>
        <p className="flex flex-col gap-y-2">
          <span className="text-xl">
            NAME OF WITNESS: .....................................
          </span>
          <span className="text-xl">
            ADDRESS: ...................................................
          </span>
          <span className="text-xl">
            OCCUPATION: .............................................
          </span>
          <span className="text-xl">
            SIGNATURE: ___________________________
          </span>
        </p>
      </div>
      <p className="flex flex-col items-center text-center pt-14 gap-y-3">
        <span>PREPARED BY:</span>
        <span> ____________________ </span>
        <span>SOLICITOR</span>
      </p>
    </main>
  );
});

export default Preview;
