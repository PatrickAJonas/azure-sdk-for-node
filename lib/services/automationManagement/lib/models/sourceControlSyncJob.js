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

/**
 * Definition of the source control sync job.
 *
 */
class SourceControlSyncJob {
  /**
   * Create a SourceControlSyncJob.
   * @member {string} [name] Resource name.
   * @member {string} [type] Resource type.
   * @member {string} [id] Resource id.
   * @member {string} [sourceControlSyncJobId] Gets the source control sync job
   * id.
   * @member {date} [creationTime] Gets the creation time of the job.
   * @member {string} [provisioningState] Gets the provisioning state of the
   * job. Possible values include: 'Completed', 'Failed', 'Running'
   * @member {date} [startTime] Gets the start time of the job.
   * @member {date} [endTime] Gets the end time of the job.
   * @member {string} [startedBy] Gets the user who started the sync job.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceControlSyncJob
   *
   * @returns {object} metadata of SourceControlSyncJob
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControlSyncJob',
      type: {
        name: 'Composite',
        className: 'SourceControlSyncJob',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          sourceControlSyncJobId: {
            required: false,
            serializedName: 'properties.sourceControlSyncJobId',
            type: {
              name: 'String'
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          startedBy: {
            required: false,
            serializedName: 'properties.startedBy',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceControlSyncJob;
