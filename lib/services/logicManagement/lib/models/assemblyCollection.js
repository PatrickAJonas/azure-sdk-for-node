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
 * A collection of assembly definitions.
 *
 */
class AssemblyCollection {
  /**
   * Create a AssemblyCollection.
   * @member {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AssemblyCollection
   *
   * @returns {object} metadata of AssemblyCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AssemblyCollection',
      type: {
        name: 'Composite',
        className: 'AssemblyCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AssemblyDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'AssemblyDefinition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AssemblyCollection;