// App's External Imports
import { getValue, fetchAndActivate } from "firebase/remote-config";

const fetch_remote_config = async (remote_config: any) => {
  try {
    const is_fetch_and_activate = await fetchAndActivate(remote_config);

    if (is_fetch_and_activate) {
      const version: string = getValue(remote_config, "version").asString();

      return {
        version,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching remote config:", error);
  }
};

const generate_room_code = () => {
  const random_alphabets = (length: number) => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const characters_length = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters_length)
      );
    }
    return result;
  };

  const random_numbers = () => {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${minutes}${seconds}`;
  };

  return `${random_alphabets(3)}-${random_numbers()}-${random_alphabets(3)}`;
};

const is_email = (sample: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(sample);
};

const fetch_profile_image = (username: string) => {
  const identifier = username.slice(0, 1);
  return `https://cdn.auth0.com/avatars/${identifier}.png`;
};

const generate_user_id = (): string => {
  let user_id = "";
  const length = 8;
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length; i++) {
    const random_index = Math.floor(Math.random() * characters.length);
    user_id += characters.charAt(random_index);
  }

  user_id += "-";
  const timestamp = new Date().getTime();
  user_id += timestamp.toString();

  return user_id;
};

export {
  is_email,
  generate_user_id,
  generate_room_code,
  fetch_remote_config,
  fetch_profile_image,
};
