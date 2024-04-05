import React from "react";

const ReportModal = () => {
  return (
    <div>
      <h2 className="font-bold mb-2 text-lg">Report</h2>
      <div className="border border-black p-5">
        <h2 className="font-semibold">
          Is there something wrong with this ad?
        </h2>
        <form>
          <div className="my-3">
            <label htmlFor="reason" className="text-sm font-bold">
              Reason
            </label>

            <select
              type="text"
              name="reason"
              id="reason"
              className="w-full border focus:outline-none"
            >
              <option value="reason1">Reason 1</option>
              <option value="reason2">Reason 2</option>
              <option value="reason3">Reason 3</option>
              <option value="reason4">Reason 4</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold">
              Message
            </label>
            <textarea
              className="w-full border focus:outline-none"
              cols={7}
              rows={4}
              type="text"
              name="message"
              id="message"
            />
          </div>
          <button className="w-full bg-[#fb6320] py-1 text-white">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
