import useGoogleSheets from "use-google-sheets";

export const ReadDataExcelGoole = () => {
  const REACT_APP_GOOGLE_API_KEY = "AIzaSyDzMVLOCEoQjQes2bF0H9pc9HbzlKzOldQ";
  const REACT_APP_GOOGLE_SHEETS_ID =
    "14qL7AgxZQDm8GAqj0dUQ49m03O_JHS6ENd862WLr9Gc";

  const sheetsOptions = [{ id: "Trang tính1", headerRowIndex: 1 }];

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_GOOGLE_SHEETS_ID,
    sheetsOptions,
  });

  if (loading) {
    console.log("loading....");
  }

  if (error) {
    console.log("Error!");
  }

  console.log(data);

  const createContent = () => {};

  const onChange = (event: any) => {};

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
          <div className="col-12 col-sm-6 col-md-6">
            <img
              className="width-100 img-thumbnail"
              alt="some value"
              src="https://drive.google.com/uc?id=15G7oII2TgM7LbmNStFUW8mt2Bftp9KuM"
            />
            <label htmlFor="file" className="form-label">
              Choose file
            </label>
            <input
              type="file"
              className="form-control"
              id="file"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12 col-sm-12 col-md-12">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => createContent()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
