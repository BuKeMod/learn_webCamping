import Breadcrumb from "@/components/campings/Breadcrumb";
import Description from "@/components/campings/Description";
import ImageContainer from "@/components/campings/imageContainer";
import Mainmap from "@/components/map/Mainmap";
import { readCamping } from "@/service/camping";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CampingDetail() {
  const [camping, setCamping] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchCampingDetail(id);
  }, []);
  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      setCamping(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(camping);

  return (
    <div>
      <Breadcrumb name={camping.title} />
      <header className="flex items-center justify-between mt-2">
        <h1 className="text-4xl font-bold">{camping.title}</h1>
        <div className="flex gap-2">
          <p>Share</p>

          <p>favoritebutton</p>
        </div>
      </header>
      <ImageContainer image={camping.secure_url} name={camping.name} />
      <div>

      <Description text={camping.description}/>

      {
        camping.lat && <Mainmap Location={[camping.lat,camping.lng]} />
      }
      
      </div>
    </div>
  );
}

export default CampingDetail;
