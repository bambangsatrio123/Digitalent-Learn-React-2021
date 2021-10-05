import { axiosInstaceUpload } from "../../../shared/AxiosInstance";

export default function uploadService(file, tags) {
  return new Promise((resolve, reject) =>
    axiosInstaceUpload
      .post("/", {
        file,
        tags,
      })
      .then((data) => resolve(data))
      .catch((e) => reject(e))
  );
}
