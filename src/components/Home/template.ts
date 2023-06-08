export const initialInput = "Hi, Lee - let's meet with Elon Musk and Bill Gates tomorrow.";

export const initialSchema = `{
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    }
  }
}
`;

export const initialOutput = `{
  "persons": [
    {
      "firstName": "Lee"
    },
    {
      "firstName": "Elon",
      "lastName": "Musk"
    },
    {
      "firstName": "Bill",
      "lastName": "Gates"
    }
  ]
}
`;

export const PROMPT_TEMPLATE = `
Extract JSON output as in the schema from this input. Only return JSON.

Input: "${initialInput}"

Schema:
${initialSchema}

Output:
${initialOutput}

Input: "{input}"

Schema:
{schema}

Output:
`;
