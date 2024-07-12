import React from "react";
import tshirtImage from "../assets/media/icons/tshirt.png";
import pantsImage from "../assets/media/icons/pants.png";
import socksImage from "../assets/media/icons/socks.png";
import coatImage from "../assets/media/icons/coat.png";
import hatImage from "../assets/media/icons/hat.png";
import skirtImage from "../assets/media/icons/skirt.png";

const NotFoundPage = () => {
  const list = [
    { Name: 'تی شرت', Image: tshirtImage, Category: 'تی شرت' },
    { Name: "شلوار", Image: pantsImage, Category: "شلوار" },
    { Name: 'جوراب', Image: socksImage, Category: 'جوراب' },
    { Name: 'کت', Image: coatImage, Category: 'کت' },
    { Name: 'کلاه', Image: hatImage, Category: 'جوراب' },
    { Name: 'دامن', Image: skirtImage, Category: 'جوراب' },
  ];

  return (
    <>
      <div className="col-md-12 pt-5 pb-2" dir="rtl">
        <div className="d-flex justify-content-center">
          {list.map((cat) => (
            <div className="p-5 border border-bottom-0 border-top-0" key={cat.Name}>
              <div className="col-md-12 ">
                <a href={'/products?category=' + cat.Category}>
                  <div className="border rounded-circle bg-light col-md-12 ">
                    <img src={cat.Image} className="col-md-12 p-3 contrast" alt={cat.Name} />
                  </div>
                </a>
                <div className="d-flex justify-content-center">
                  <a className="h5 fontv pt-2 link">{cat.Name}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
