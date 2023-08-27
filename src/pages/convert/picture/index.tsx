import { useState } from 'react';
import * as XLSX from 'xlsx';
import NumberUtils from 'utils/number-utils';

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
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });

      for (let index = 0; index < workbook.SheetNames?.length; index++) {
        const worksheetName = workbook.SheetNames[index];
        const worksheet = workbook.Sheets[worksheetName];
        const data: any = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        const arr = [];
        for (let i = 0; i < data.length; i++) {
          const obj: any = {};
          const item = data[i];
          if (item.flg === 1) {
            obj.flg = item.flg;
            obj.id = '';
            obj.name = '';
            obj.link = '';
            obj.colorNumber = '';
            obj.size = '';
            obj.price = '';
            obj.quantity = '';

            if (item.id !== undefined) {
              obj.id = item.id;
            }
            if (item.name !== undefined) {
              obj.name = item.name;
            }
            if (item.link !== undefined) {
              obj.link = item.link;
            }
            if (item.colorNumber !== undefined) {
              obj.colorNumber = item.colorNumber + '';
            }
            if (item.size !== undefined) {
              obj.size = item.size;
            }
            if (item.price !== undefined) {
              obj.price = NumberUtils.numberWithCommas(item.price);
            }
            if (item.quantity !== undefined) {
              obj.quantity = item.quantity;
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
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);

    // create "a" HTLM element with href to file
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
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
