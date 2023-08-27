import { Route, Routes, HashRouter } from "react-router-dom";
import { Fragment, useCallback, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Home } from "pages/home";
import { MasterLayout } from "pages/_layout/master-layout";
import { MakeDataJsonFromExcelCategory } from "pages/convert/category";
import { MakeDataJsonFromExcelPicture } from "pages/convert/picture";
import { Category } from "pages/category";
import { Contact } from "pages/contact";
import { IGallery } from "utils/interface/IGallery.interface";

export const RoutesRoot = () => {
  const lightGallery = useRef<any>(null);

  const [items, setItems] = useState<IGallery[]>([]);

  const openGallery = useCallback(() => {
    lightGallery.current.refresh();
    lightGallery.current.openGallery();
  }, []);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  // Add new slides
  const addItems = useCallback(() => {
    console.log($("#open-gallery").val());
    const updatedItems = [
      {
        id: "1",
        size: "1400-933",
        src: $("#open-gallery").val() as string,
        thumb: $("#open-gallery").val() as string,
        subHtml: `<div class="lightGallery-captions">
                <p>Tranh số hóa Kami</p>
            </div>`,
      },
    ];
    setItems(updatedItems);
    setTimeout(openGallery, 100);
  }, [items]);
  return (
    <Fragment>
      <HashRouter>
        <MasterLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-loai/:theloai" element={<Category />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/chuyen-doi/tranh" element={<MakeDataJsonFromExcelPicture />} />
            <Route path="/chuyen-doi/the-loai" element={<MakeDataJsonFromExcelCategory />} />
          </Routes>
        </MasterLayout>
      </HashRouter>
      <Fragment>
        <button onClick={openGallery} className="d-none">
          Open Gallery
        </button>
        <button onClick={addItems} defaultValue={""} id="open-gallery" className="d-none">
          Add new slide and open gallery
        </button>
        <LightGallery
          elementClassNames="custom-classname"
          dynamic
          dynamicEl={items}
          onInit={onInit}
          plugins={[lgZoom, lgVideo]}
        ></LightGallery>
      </Fragment>
    </Fragment>
  );
};