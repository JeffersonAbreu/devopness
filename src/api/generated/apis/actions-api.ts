/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Action } from '../../generated/models';

/**
 * ActionsApiService - Auto-generated
 */
export class ActionsApiService extends ApiBaseService {
    /**
     * 
     * @summary Get an action by ID
     * @param {number} id Numeric ID of the action to be retrieved
     */
    public async getAction(id: number): Promise<ApiResponse<Action>> {
        if (id === null || id === undefined) {
            throw new ArgumentNullException('id', 'getAction');
        }
        const response = await this.get <Action>(`/actions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(id))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all actions belonging to current user
     */
    public async listActions(): Promise<ApiResponse<Array<Action>>> {
        const response = await this.get <Array<Action>>(`/actions`);
        return new ApiResponse(response);
    }
}
