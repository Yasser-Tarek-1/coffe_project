import { useGetSettingsQuery } from "../../store/apis/settings";
import {
  phone,
  snapchat,
  instgram,
  tiktok,
  twitter,
  document,
} from "../../assets";
import { Link } from "react-router-dom";

const Links = () => {
  const { data } = useGetSettingsQuery();

  return (
    <div className="flex items-center justify-center gap-4">
      <Link to={"/contactus"}>
        <img src={document} alt={"document"} className="w-6" />
      </Link>
      {data?.twitter_link && (
        <a href={data?.twitter_link} target="_blank" rel="noreferrer">
          <img src={twitter} alt={"twitter"} className="w-6" />
        </a>
      )}
      {data?.tiktok_link && (
        <a href={data?.tiktok_link} target="_blank" rel="noreferrer">
          <img src={tiktok} alt={"tiktok"} className="w-6" />
        </a>
      )}
      {data?.instagram_link && (
        <a href={data?.instagram_link} target="_blank" rel="noreferrer">
          <img src={instgram} alt={"instgram"} className="w-6" />
        </a>
      )}
      {data?.snapchat_link && (
        <a href={data?.snapchat_link} target="_blank" rel="noreferrer">
          <img src={snapchat} alt={"snapchat"} className="w-6" />
        </a>
      )}
      {data?.phone_number && (
        <a href={`tel:${data?.phone_number}`}>
          <img src={phone} alt={"phone"} className="w-6" />
        </a>
      )}
    </div>
  );
};

export default Links;
