import { useState } from "react";
import * as XLSX from "xlsx";
import NumberUtils from "utils/number-utils";
import { IPicture } from "utils/interface/picture.interface";

export const MakeDataJsonFromExcelPicture = () => {
  const [fileInput, setfileInput] = useState();

  const createContent = () => {
    let arrayBuffer: any;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      arrayBuffer = fileReader.result;
      const dataBuffer = new Uint8Array(arrayBuffer);
      const arr = [];
      for (let i = 0; i !== dataBuffer.length; ++i) {
        arr[i] = String.fromCharCode(dataBuffer[i]);
      }
      const bstr = arr.join("");
      const workbook = XLSX.read(bstr, { type: "binary" });

      for (let index = 0; index < workbook.SheetNames?.length; index++) {
        const worksheetName = workbook.SheetNames[index];
        const worksheet = workbook.Sheets[worksheetName];
        const data: any = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        const arr = [];
        for (let i = 0; i < data.length; i++) {
          let obj: IPicture = {};
          const item = data[i];
          if (item.flg !== undefined && item.flg === 1) {
            obj.flg = item.flg;
            obj.id = 0;
            obj.name = "";
            obj.link = "";
            obj.colorNumber = "";
            obj.size = "";
            obj.price = "";
            obj.quantity = "";

            // column 1: STT
            if (item.id !== undefined) {
              obj.id = item.id;
            }
            // column 2: Tên
            if (item.name !== undefined) {
              obj.name = item.name;
            }
            // column 3: Đường dẫn
            if (item.link !== undefined) {
              obj.link = item.link;
            }
            // column 4: Số màu
            if (item.colorNumber !== undefined) {
              obj.colorNumber = item.color_number + "";
            }
            // column 5: Kích thước
            if (item.size !== undefined) {
              obj.size = item.size;
            }
            // column 6: Giá
            if (item.price !== undefined) {
              obj.price = NumberUtils.numberWithCommas(item.price);
            }
            // column 7: Số lượng
            if (item.quantity !== undefined) {
              obj.quantity = item.quantity;
            }
            // column 8:  Nổi bật trang 1
            if (item.outstanding !== undefined) {
              obj.outstanding = item.outstanding.trim();
            }
            // column 9: Sắp xếp
            if (item.order !== undefined) {
              obj.order = item.order;
            }
            // column 10: Thứ tự ưu tiên
            if (item.order !== undefined) {
              obj.order = item.order;
            }
            // column 11: Mã shopppe
            if (item.shoppe_code !== undefined) {
              obj.shoppeCode = item.shoppe_code;
            }
            // column 11: Mã kami
            if (item.kami_code !== undefined) {
              obj.kamiCode = item.kami_code;
            }
            arr.push(obj);
          }
        }

        downloadFile(worksheetName, arr);
      }
    };

    fileReader.readAsArrayBuffer(fileInput || new Blob());
  };

  const onChange = (event: any) => {
    setfileInput(event.target.files[0]);
  };

  /**
   * create file in browser
   * @param fileName
   * @param myData
   */
  const downloadFile = (fileName: string, myData: any) => {
    const json = JSON.stringify(myData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <>
      <div className="container min-height-70vh">
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12">
            <b>
              <h4 className="font-weight-700">Create Table From Excel</h4>
            </b>
          </div>
          <hr className="text-secondary mt-1" />
        </div>
        <div className="row mt-2">
          <div className="col-12 col-sm-6 col-md-6">
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
