import React from "react";

export default function ButtonAddress() {
  return (
    <div>
      {loadingAddress ? (
        <div className="w-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Delivery Address</h3>
            <Link to="/AddressManager">
              <h2 className="text-blue-600 font-bold">Edit Address</h2>
            </Link>
          </div>
          <div className="flex space-x-4">
            <button
              className={`flex-1 p-3 border ${
                selectedAddress === "home"
                  ? "border-blue-600"
                  : "border-gray-300"
              } rounded-lg flex items-center`}
              onClick={() => {
                user?.address.home.address !== undefined
                  ? setSelectedAddress(user?.address.home.address)
                  : toast.error("address is not set.");
              }}
            >
              <p className="ml-2">Home</p>
            </button>
            <button
              className={`flex-1 p-3 border ${
                selectedAddress === "current"
                  ? "border-blue-600"
                  : "border-gray-300"
              } rounded-lg flex items-center`}
              onClick={() => {
                user?.address.office.address !== undefined
                  ? setSelectedAddress(user?.address.office.address)
                  : toast.error("address is not set.");
              }}
            >
              <p className="ml-2">Current</p>
            </button>

            <button
              className={`flex-1 p-3 border ${
                selectedAddress === "current"
                  ? "border-blue-600"
                  : "border-gray-300"
              } rounded-lg flex items-center`}
              onClick={() => {
                user?.address.others.address !== undefined
                  ? setSelectedAddress(user?.address.others.address)
                  : toast.error("adress is not set.");
              }}
            >
              <p className="ml-2">others</p>
            </button>
          </div>

          <div>
            {selectedAddress !== undefined ? (
              <>
                <h1 className="text-lg font-semibold">Selected location</h1>
                <span>{selectedAddress}</span>

                {/* { // console.log(user?.address)} */}
              </>
            ) : null}
          </div>
        </section>
      )}
    </div>
  );
}
