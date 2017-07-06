export const schema = {
  "type": "object",
  "properties": {
    "requests": {
      "type": "array",
      "minItems": 50,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "$ref": "#/definitions/positiveInt"
          },

          "requestIdentifier": {
            "type": "string",
            "faker": {
              "fake": "2017/{{random.number}}"
            }
          },
          "deliveryDate": {
            "type": "string",
            "format": "date-time",
            "faker": "date.past"
          },
           "isArchived": {
            "type": "boolean",
            "faker": "random.boolean"
          },
            "targetLanguages":{
              "type": "array",
              "items": {
                  "enum": [
                    "FR",
                    "DE",
                    "ES",
                    "IT"
                  ]
              },
              "minItems": 1,
              "uniqueItems": true
          },
            "sourceLanguages":{
              "type": "array",
              "items": {
                  "enum": [
                    "FR",
                    "DE",
                    "ES",
                    "IT"
                  ]
              },
              "minItems": 1,
              "maxItems": 1,
              "uniqueItems": true
          }
        },
        "required": ["id",  "requestIdentifier", "deliveryDate", "targetLanguages", "sourceLanguages"]
      }
    }
  },
  "required": ["requests"],
  "definitions": {
    "positiveInt": {
      "type": "integer",
      "minimum": 0,
      "minimumExclusive": true
    }
  }
};
