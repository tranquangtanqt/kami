import { useRef, useState } from "react";
export const WriteDataExcelGoole = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  // const scriptUrl = "https://script.google.com/macros/s/AKfycbxw3mbDq0DHFdZByq9QWUBJg0cw4S5k3iIF-MuXQmqEeRjnhIjDoqXf00NYMeaDLWgI/exec";
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxw3mbDq0DHFdZByq9QWUBJg0cw4S5k3iIF-MuXQmqEeRjnhIjDoqXf00NYMeaDLWgI/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      fetch(scriptUrl, {
        method: "POST",
        body: new FormData(formRef.current),
      })
        .then((res) => {
          console.log(res);
          console.log("SUCCESSFULLY SUBMITTED");
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container min-height-70vh">
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12">
            <b>
              <h4 className="font-weight-700">ReadFileGoogleSheet</h4>
            </b>
          </div>
          <hr className="text-secondary mt-1" />
        </div>
        <div className="row mt-2">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="container">
              <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                <div className="input-style">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name *" />
                </div>
                <div className="input-style">
                  <label htmlFor="name">Email</label>
                  <input type="email" name="email" placeholder="Your Email *" />
                </div>
                <div className="input-style">
                  <label htmlFor="name">Phone No</label>
                  <input type="number" name="phone" placeholder="Your Phone *" />
                </div>
                <div className="input-style">
                  <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
