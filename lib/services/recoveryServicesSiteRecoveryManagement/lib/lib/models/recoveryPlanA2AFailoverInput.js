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
 * Recovery plan A2A failover input.
 *
 * @extends models['RecoveryPlanProviderSpecificFailoverInput']
 */
class RecoveryPlanA2AFailoverInput extends models['RecoveryPlanProviderSpecificFailoverInput'] {
  /**
   * Create a RecoveryPlanA2AFailoverInput.
   * @member {string} recoveryPointType The recovery point type. Possible
   * values include: 'Latest', 'LatestApplicationConsistent',
   * 'LatestCrashConsistent', 'LatestProcessed'
   * @member {string} [cloudServiceCreationOption] A value indicating whether
   * to use recovery cloud service for TFO or not.
   * @member {string} [multiVmSyncPointOption] A value indicating whether multi
   * VM sync enabled VMs should use multi VM sync points for failover. Possible
   * values include: 'UseMultiVmSyncRecoveryPoint', 'UsePerVmRecoveryPoint'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecoveryPlanA2AFailoverInput
   *
   * @returns {object} metadata of RecoveryPlanA2AFailoverInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'A2A',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'RecoveryPlanProviderSpecificFailoverInput',
        className: 'RecoveryPlanA2AFailoverInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          recoveryPointType: {
            required: true,
            serializedName: 'recoveryPointType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Latest', 'LatestApplicationConsistent', 'LatestCrashConsistent', 'LatestProcessed' ]
            }
          },
          cloudServiceCreationOption: {
            required: false,
            serializedName: 'cloudServiceCreationOption',
            type: {
              name: 'String'
            }
          },
          multiVmSyncPointOption: {
            required: false,
            serializedName: 'multiVmSyncPointOption',
            type: {
              name: 'Enum',
              allowedValues: [ 'UseMultiVmSyncRecoveryPoint', 'UsePerVmRecoveryPoint' ]
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryPlanA2AFailoverInput;