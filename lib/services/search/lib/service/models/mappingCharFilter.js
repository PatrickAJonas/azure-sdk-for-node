/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the MappingCharFilter class.
 * @constructor
 * A character filter that applies mappings defined with the mappings option.
 * Matching is greedy (longest pattern matching at a given point wins).
 * Replacement is allowed to be the empty string. This character filter is
 * implemented using Apache Lucene.
 *
 * @member {array} mappings A list of mappings of the following format: "a=>b"
 * (all occurrences of the character "a" will be replaced with character "b").
 *
 */
class MappingCharFilter extends models['CharFilter'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MappingCharFilter
   *
   * @returns {object} metadata of MappingCharFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Azure.Search.MappingCharFilter',
      type: {
        name: 'Composite',
        className: 'MappingCharFilter',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          },
          mappings: {
            required: true,
            serializedName: 'mappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MappingCharFilter;