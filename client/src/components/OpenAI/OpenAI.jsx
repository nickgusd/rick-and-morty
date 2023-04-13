/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import TextLoader from "../TextLoader/TextLoader";
const { Configuration, OpenAIApi } = require("openai");

const OpenAI = ({ prompt }) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateCompletion = async () => {
      setLoading(true);
      try {
        const result = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 4000,
        });
        setApiResponse(result.data.choices[0].text);
      } catch (e) {
        console.log("error", e);
        setApiResponse("Something is going wrong, Please try again.");
      }
      setLoading(false);
    };

    generateCompletion();
  }, []);

  if (!prompt) return null;

  return (
    <>
      <div>
        {loading && <TextLoader />}
        {apiResponse && !loading && <p>{apiResponse}</p>}
      </div>
    </>
  );
};

export default OpenAI;
