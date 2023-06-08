import React, { useState } from 'react';

import style from './Home.scss';
import { PROMPT_TEMPLATE, initialInput, initialOutput, initialSchema } from './template';

export const Home = (): JSX.Element => {
  const [input, setInput] = useState(initialInput);
  const [schema, setSchema] = useState(initialSchema);
  const [output, setOutput] = useState(initialOutput);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleSchemaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSchema(event.target.value);
  };

  const handleClickExtract = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOutput('Extracting...');

    const params = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: PROMPT_TEMPLATE.replace('{input}', input).replace('{schema}', schema),
        },
      ],
      temperature: 0,
    };
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((json) => setOutput(json.choices[0].message.content))
      .catch((err) => setOutput('An error occured:\n' + err));
  };

  return (
    <div className={style.home}>
      <form className={style.form}>
        <label className={style.label}>Input</label>
        <textarea className={style.input} value={input} onChange={handleInputChange}></textarea>
        <label className={style.label}>Schema</label>
        <textarea className={style.schema} value={schema} onChange={handleSchemaChange}></textarea>
        <button className={style.button} onClick={handleClickExtract}>
          Extract
        </button>
      </form>
      <label className={style.label}>Output</label>
      <pre className={style.output}>{output}</pre>
    </div>
  );
};
