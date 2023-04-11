import axios from "axios";

const customAxios = async (parameters) => {
  const { url, method, name, password, input,  } = parameters;


  //getting the todos of the user
  if (method == `GET`) {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `basic ${Buffer.from(
          `${name.split(` `)[0].toLowerCase().trim()}:${password}`
        ).toString("base64")}`,
      },
    });
    return response.data;
  }

  //adding a new to do
  if (method == `POST`) {
    const response = await axios.post(
      url,
      {
        task: input,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `basic ${Buffer.from(
            `${name.split(` `)[0].toLowerCase().trim()}:${password}`
          ).toString("base64")}`,
        },
      }
    );
    return response;
  }

 
};

export default customAxios;
