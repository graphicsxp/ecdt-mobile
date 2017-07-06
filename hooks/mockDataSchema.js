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
        "email": {
            "type": "string",
            "format": "email",
            "faker": "internet.email"
          },
          "requestIdentifier": {
            "type": "string",
            "faker": {
              "custom.requestIdentifier": []
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
          },
          "jobs":{
              "type": "array",
              "items":{
                "type": "object",
                "properties": {
                   "id": {
                    "$ref": "#/definitions/positiveInt"
                  },
                  "volume":{
                     "type": "integer",
                     "minimum": 1,
                     "maximum": 999,
                  },
                  "price": {
                    "type": "string",
                    "faker": {
                      "finance.amount": [100, 2000, 2]
                    }
                  },
                  "targetLanguage":{
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
                  },
                    "sourceLanguage":{
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
                  },
                },
                "required": ["id", "volume", "price", "sourceLanguage", "targetLanguage"]
              },
               "minItems": 1,
              "maxItems": 23
          }
        },
        "required": ["id",  "requestIdentifier", "deliveryDate", "targetLanguages", "sourceLanguages", "jobs"]
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
